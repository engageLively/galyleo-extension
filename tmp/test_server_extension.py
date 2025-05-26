import logging
from types import SimpleNamespace

# Set up logging to see what happens
logging.basicConfig(level=logging.INFO)

# Fake web_app with minimal settings needed by your extension
fake_web_app = SimpleNamespace(
    settings={"base_url": "/"},
    add_handlers=lambda pattern, handlers: print(f"add_handlers called with: {handlers}")
)

# Fake nbapp to simulate the server extension environment
fake_nbapp = SimpleNamespace(
    log=logging.getLogger("galyleo_extension.test"),
    web_app=fake_web_app
)

# Import and run your extension entry point
from galyleo_extension import load_jupyter_server_extension
load_jupyter_server_extension(fake_nbapp)
