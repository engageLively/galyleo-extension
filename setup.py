__import__("setuptools").setup()
from setuptools import setup, find_packages

setup(
    name="galyleo_extension",
    version="0.1.0",
    packages=find_packages(where="galyleo_extension"),
    install_requires=["jupyter_server", "tornado"],  # Add your dependencies
    entry_points={
        "jupyter_serverproxy.handlers": [
            "galyleo_extension = galyleo_extension:load_jupyter_server_extension",
        ]
    },
)