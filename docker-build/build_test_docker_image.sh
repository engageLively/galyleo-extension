#!/usr/bin/bash
DATE_TAG=$(date +%Y%m%d%H%M%S)
docker build --build-arg GALYLEO_ASSET_DIR=/var/lib/galyleo-assets/static --build-arg LOCAL_GALYLEO_ASSETS=${ASSET_OUT}  -t rickmcgeer/jupyter_galyleo_2:$DATE_TAG --progress=plain . 
# rm -rf ${ASSET_OUT}
