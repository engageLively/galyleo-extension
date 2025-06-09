#!/usr/bin/bash
set -euo pipefail

# Required env vars
: "${TARBALL_URL:?Set TARBALL_URL to the tarball location}"
: "${TARBALL_ROOT:?Set TARBALL_ROOT to the top-level dir inside the tarball}"
: "${ASSET_OUT:?Directory to extract to}"
# Example:
# TARBALL_URL=https://github.com/engageLively/galyleo-web-build/archive/refs/tags/v2025.06.07.tar.gz
# TARBALL_ROOT=galyleo-web-build-2025.06.07
# ASSET_OUT= galyleo-assets

TAR_PATH="/tmp/galyleo-editor.tar.gz"
EXTRACT_DIR="/tmp"

echo "Downloading tarball to $TAR_PATH"
curl -L "$TARBALL_URL" -o "$TAR_PATH"

echo "Extracting to $EXTRACT_DIR"
tar -xzf "$TAR_PATH" -C "$EXTRACT_DIR"

SHARE_DIR="${EXTRACT_DIR}/${TARBALL_ROOT}/static"

if [ ! -d "$SHARE_DIR" ]; then
    echo "Error: $SHARE_DIR does not exist"
    exit 1
fi

echo "Copying $SHARE_DIR to $ASSET_OUT"
rm -rf "$ASSET_OUT"
cp -r "$SHARE_DIR" "$ASSET_OUT"
rm -rf ${TAR_PATH}
rm -rf ${SHARE_DIR}
