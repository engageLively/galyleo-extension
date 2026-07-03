import os
from jupyter_server.utils import url_path_join
from jupyter_server.base.handlers import APIHandler
import json

try:
    from ._version import __version__
except ImportError:
    import warnings
    warnings.warn("Importing 'galyleo_extension' outside a proper installation.")
    __version__ = "dev"


def _jupyter_server_extension_points():
    return [{"module": "galyleo_extension"}]


class EnvVarHandler(APIHandler):
    """
    Returns server-side configuration for web editors hosted in iframes.

    Reads GALYLEO_SERVER (set by JupyterHub via extraEnv) for the Galyleo
    service URL.  Falls back to deriving the URL from the request host so
    the extension works out-of-the-box without any explicit configuration.
    """

    def _get_services_url(self):
        if "GALYLEO_SERVER" in os.environ:
            return os.environ["GALYLEO_SERVER"]
        return f'{self.request.protocol}://{self.request.host}/services/galyleo'

    def get(self):
        self.finish(json.dumps({
            "galyleoServer": self._get_services_url(),
            "galyleoStudioURL": os.environ.get("GALYLEO_STUDIO_URL", ""),
            "host": self.request.host,
            "protocol": self.request.protocol,
            "base_url": self.settings['base_url'],
        }))


def _load_jupyter_server_extension(nbapp):
    log = getattr(nbapp, "log", None)

    if not hasattr(nbapp, "web_app") or not hasattr(nbapp.web_app, "settings"):
        if log:
            log.warning("galyleo_extension: web_app not available — skipping route registration")
        return

    base_url = nbapp.web_app.settings.get("base_url", "/")
    env_route = url_path_join(base_url, "env")
    nbapp.web_app.add_handlers(".*$", [(env_route, EnvVarHandler)])

    if log:
        log.info(f"galyleo_extension: /env handler registered at {env_route}")
