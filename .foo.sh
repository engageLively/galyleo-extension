
pip uninstall galyleo_extension -y
rm -rf /opt/conda/envs/jupyterlab-ext/lib/python3.13/site-packages/galyleo_extension.dist-info
rm -rf /opt/conda/envs/jupyterlab-ext/lib/python3.13/site-packages/galyleo_extension
rm -rf dist/  # From the parent directory
find . -name '__pycache__' -exec rm -rf {} \;  # From the parent directory
pip install -e .  # From the parent directory