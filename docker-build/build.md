# Publishing the Extension
1. Update the version number in package.json
2. Remove everything in galyleo_extension/static
2. Create a release for the editor packages (optional)
3. Remove everything in dist/
4. Run python -m build .
5. The new version is in dist/
6. twine upload -r testpypi dist/*