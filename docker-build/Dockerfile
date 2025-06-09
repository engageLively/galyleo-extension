FROM jupyter/scipy-notebook:latest
ARG GALYLEO_ASSET_DIR
ARG GALYLEO_ASSET_TARBALL_URL
ARG LOCAL_GALYLEO_ASSETS
ENV GALYLEO_ASSET_DIR=${GALYLEO_ASSET_DIR}
ENV GALYLEO_RELEASE_URL=${GALYLEO_ASSET_TARBALL_URL}

# Install required Python packages
RUN pip install sdtp jupyterlab-language-pack-ja-JP

# Copy and install the prebuilt JupyterLab extension from the dist directory
# COPY dist/*.whl /tmp/
# RUN pip install /tmp/*.whl
# RUN python3 -m pip install --index-url https://test.pypi.org/simple/ --no-deps example-package-YOUR-USERNAME-HERE
USER root
COPY ${LOCAL_GALYLEO_ASSETS} /tmp/share/static
RUN mkdir -p ${GALYLEO_ASSET_DIR} && chown -R jovyan:users ${GALYLEO_ASSET_DIR}
RUN cp -r /tmp/share ${GALYLEO_ASSET_DIR}

# Switch to non-root user for runtime safety


RUN python3 -m pip install -i https://test.pypi.org/simple/ galyleo-extension
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