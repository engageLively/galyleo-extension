#!/bin/bash
npm run build:lib && jupyter labextension build --development True .
