#!/usr/bin/bash
# export TARBALL_URL=https://github.com/engageLively/galyleo-web-build/archive/refs/tags/v2025.06.07.tar.gz
# export TARBALL_ROOT=galyleo-web-build-2025.06.07
# export ASSET_OUT=galyleo-assets
./prepare-assets.sh
docker build --build-arg GALYLEO_ASSET_DIR=/var/lib/galyleo-assets --build-arg LOCAL_GALYLEO_ASSETS=${ASSET_OUT} --build-arg GALYLEO_ASSET_TARBALL_URL=${TARBALL_URL} -t rickmcgeer/jupyter_galyleo_2:latest . 
rm -rf ${ASSET_OUT}
