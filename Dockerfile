FROM jupyter/scipy-notebook:latest

# Install required Python packages
RUN pip install sdtp jupyterlab-language-pack-ja-JP

# Copy and install the prebuilt JupyterLab extension from the dist directory
COPY dist/*.whl /tmp/
RUN pip install /tmp/*.whl
RUN jupyter server extension enable --sys-prefix galyleo_extension


# Expose Jupyter Notebook port
EXPOSE 8888

# Use Bash as the default shell
SHELL ["/bin/bash", "-c"]

# Start Jupyter Notebook server
CMD ["start-notebook.sh", "--NotebookApp.token=''"]