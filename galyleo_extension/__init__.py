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




import tarfile
import requests
import shutil

TARBALL_DEFAULT = "https://github.com/engageLively/galyleo-web-build/archive/refs/tags/v2025.06.07.tar.gz"
TARBALL_URL = os.getenv('GALYLEO_RELEASE_URL', TARBALL_DEFAULT)


STATIC_DIR = os.path.join(GALYLEO_ASSET_DIR, "static")
STUDIO_EN_DIR = os.path.join(GALYLEO_ASSET_DIR, "static", "studio-en")

def _download_and_unpack_tarball():
    if os.path.exists(STATIC_DIR):
        if os.path.exists(STUDIO_EN_DIR):
            return
        else:
            shutil.rmtree(STATIC_DIR)
    tarball_path = os.path.join(GALYLEO_ASSET_DIR, "galyleo-editor.tar.gz")
    response = requests.get(TARBALL_URL, stream=True)
    response.raise_for_status()
    with open(tarball_path, 'wb') as f:
        for chunk in response.iter_content(chunk_size=8192):
            f.write(chunk)

    temp_dir = os.path.join(GALYLEO_ASSET_DIR, "__temp_extract__")

    with tarfile.open(tarball_path, "r:gz") as tar:
        names = tar.getnames()
        dirnames = [name for name in names if name.endswith('static')]
        source = dirnames[0]
        tar.extractall(path=temp_dir)
        extracted_path = os.path.join(temp_dir, source)
        shutil.move(extracted_path, STATIC_DIR)

def load_jupyter_server_extension(nbapp):
    log = getattr(nbapp, "log", None)
    if log:
        log.info("✅ Galyleo extension: load_jupyter_server_extension CALLED")

    try:
        _download_and_unpack_tarball()
    except Exception as e:
        if log:
            log.error(f"🔥 Galyleo extension failed to unpack tarball: {e}")
        # Only raise if it's runtime, not validation
        if hasattr(nbapp, "web_app"):
            raise

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

    for file_dir in ['studio-en', 'studio-jp']:
        static_path = os.path.join(GALYLEO_ASSET_DIR, "static", file_dir)
        static_route_pattern = url_path_join(base_url, f"{file_dir}/(.*)")
        handlers.append((static_route_pattern, StaticFileHandler, {"path": static_path}))

    nbapp.web_app.add_handlers(".*$", handlers)

    if log:
        log.info("✅ Serving galyleo editor at /studio-en/")

