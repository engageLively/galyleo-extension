import os
from jupyter_server.utils import url_path_join
from tornado.web import StaticFileHandler

try:
    from ._version import __version__
except ImportError:
    import warnings
    warnings.warn("Importing 'galyleo_extension' outside a proper installation.")
    __version__ = "dev"

def _jupyter_labextension_paths():
    return [{
        "src": "labextension",
        "dest": "galyleo_extension"
    }]

def _jupyter_server_extension_paths():
    return [{
        "module": "galyleo_extension"
    }]

def load_jupyter_server_extension(nbapp):
    web_app = nbapp.web_app
    base_url = web_app.settings["base_url"]

    static_path = os.path.join(os.path.dirname(__file__), "static", "studio-en")
    route_pattern = url_path_join(base_url, "studio-en/(.*)")

    web_app.add_handlers(".*$", [(route_pattern, StaticFileHandler, {"path": static_path})])

    nbapp.log.info("Serving iframe app at /studio-en/")
