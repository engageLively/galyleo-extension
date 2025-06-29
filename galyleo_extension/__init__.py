import os
from jupyter_server.utils import url_path_join
from tornado.web import StaticFileHandler

try:
    from ._version import __version__
except ImportError:
    import warnings
    warnings.warn("Importing 'galyleo_extension' outside a proper installation.")
    __version__ = "dev"

def _jupyter_server_extension_points():
    """
    Returns a list of dictionaries with metadata describing
    where to find the `_load_jupyter_server_extension` function.
    """
    return [{"module": "galyleo_extension"}]

# def _jupyter_labextension_paths():
#     return [{
#         "src": "labextension",
#         "dest": "galyleo_extension",
#         "module": "galyleo_extension"
#     }]

GALYLEO_ASSET_DIR = os.getenv('GALYLEO_ASSET_DIR', os.path.dirname(__file__))
from jupyter_server.base.handlers import APIHandler
import json



class EnvVarHandler(APIHandler):
    def _get_services_URL(self):
        if "GALYLEO_SERVER" in os.environ:
            return os.environ["GALYLEO_SERVER"]
        return f'{self.request.protocol}://{self.request.host}/services/galyleo'
        

    def get(self):
        self.finish(json.dumps({
            "galyleoServer": self._get_services_URL(),
            "host": self.request.host,
            "protocol": self.request.protocol,
            "base_url":  self.settings['base_url']
        }))





class NoCacheStaticHandler(StaticFileHandler):
    def set_extra_headers(self, path):
        self.set_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.set_header("Pragma", "no-cache")
        self.set_header("Expires", "0")

def load_jupyter_server_extension(nbapp):
    log = getattr(nbapp, "log", None)
    if log:
        log.info("✅ Galyleo extension: load_jupyter_server_extension CALLED")


    # Validate `web_app` and `settings`
    if not hasattr(nbapp, "web_app") or not hasattr(nbapp.web_app, "settings"):
        if log:
            log.warning("🟡 nbapp.web_app not available — skipping route registration")
        return
    
    base_url = nbapp.web_app.settings.get("base_url", "/")
    env_route_pattern = url_path_join(base_url, "env")

    handlers = [
        (env_route_pattern, EnvVarHandler)
    ]

    for file_dir in ['studio-en', 'studio-jp', 'test']:
        static_path = os.path.join(GALYLEO_ASSET_DIR, file_dir)
        static_route_pattern = url_path_join(base_url, f"{file_dir}/(.*)")
        handlers.append((static_route_pattern, NoCacheStaticHandler, {"path": static_path}))

    nbapp.web_app.add_handlers(".*$", handlers)

    if log:
        log.info("✅ Serving galyleo editor at /studio-en/")

