#!/bin/bash
PORT="${1:-8888}"
jupyter lab --ip=0.0.0.0  --port=$PORT  --no-browser --NotebookApp.token='' --NotebookApp.password=''
