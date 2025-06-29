FROM jupyter/scipy-notebook:latest

#  GALYLEO_ASSET_DIR MUST end in static.  It is the position of the static files in the 
# image
ARG GALYLEO_ASSET_DIR
ENV GALYLEO_ASSET_DIR=${GALYLEO_ASSET_DIR}


# Install required Python packages
RUN pip install --upgrade sdtp jupyterlab-language-pack-ja-JP

# Copy and install the prebuilt JupyterLab extension from the dist directory
# COPY dist/*.whl /tmp/
# RUN pip install /tmp/*.whl
# RUN python3 -m pip install --index-url https://test.pypi.org/simple/ --no-deps example-package-YOUR-USERNAME-HERE
USER root
RUN mkdir -p ${GALYLEO_ASSET_DIR} && chown -R jovyan:users ${GALYLEO_ASSET_DIR}
COPY static/ ${GALYLEO_ASSET_DIR}/

# Switch to non-root user for runtime safety


RUN python3 -m pip install  --no-cache-dir --upgrade -i https://test.pypi.org/simple/ galyleo-extension
RUN jupyter server extension enable --sys-prefix galyleo_extension

# Install the default viewers for users

# Create the required user settings directory
RUN mkdir -p /home/jovyan/.jupyter/lab/user-settings/@jupyterlab/docmanager-extension

# Add the default viewer config
COPY default-viewers.json /home/jovyan/.jupyter/lab/user-settings/@jupyterlab/docmanager-extension/plugin.jupyterlab-settings

# Ensure permissions are correct
RUN chown -R jovyan:users /home/jovyan/.jupyter


# Expose Jupyter Notebook port
EXPOSE 8888

# Use Bash as the default shell
SHELL ["/bin/bash", "-c"]

# Start Jupyter Notebook server
CMD ["start-notebook.sh", "--NotebookApp.token=''"]
