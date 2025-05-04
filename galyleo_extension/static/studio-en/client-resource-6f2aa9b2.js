System.register(['./__rootModule___commonjs-entry-039abf1b.js', './client-command-99e40f2e.js'], (function (exports) {
  var __contextModule__ = typeof module !== 'undefined' ? module : arguments[1];
;
  var lines, print, format, _asyncToGenerator, _slicedToArray, deferred, remove, _createClass, peekRight, reMatches, _classCallCheck, _inherits, _createSuper, Resource, dissoc, runCommand;
  return {
    setters: [function (module) {
      lines = module.a$;
      print = module.c3;
      format = module.cO;
      _asyncToGenerator = module._;
      _slicedToArray = module.o;
      deferred = module.a9;
      remove = module.w;
      _createClass = module.g;
      peekRight = module.dB;
      reMatches = module.cr;
      _classCallCheck = module.f;
      _inherits = module.d;
      _createSuper = module.e;
      Resource = module.cf;
      dissoc = module.y;
    }, function (module) {
      runCommand = module.runCommand;
    }],
    execute: (function () {

      var __varRecorder__$1 = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.shell/client-fs-helper.js", __contextModule__);

      var __moduleMeta__ = {
        pathInPackage: function pathInPackage() {
          return "./client-fs-helper.js";
        },
        unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
          return function () {};
        },
        subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
          return function () {};
        },
        "package": function _package() {
          return {
            name: "lively.shell",
            version: "0.1.0"
          };
        }
      };

      var fileInfoCommandString = __varRecorder__$1["lively.shell/client-fs-helper.js__define__"]("fileInfoCommandString", "function", function (filename) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _options$rootDirector = options.rootDirectory,
            rootDirectory = _options$rootDirector === void 0 ? "." : _options$rootDirector,
            platform = options.platform;
        var slash = platform === "win32" ? "\\" : "/";
        if (platform !== "win32" && !rootDirectory.endsWith(slash)) rootDirectory += slash;
        var timeFormatFix = "if [ \"$(uname)\" = \"Darwin\" ];\n      then timeformat='-T'; else\n      timeformat=\"--time-style=+%b %d %T %Y\";\n    fi && ";
        var commandString = platform === "win32" ? "cd ".concat(rootDirectory, " && ls -lLd --time-style=locale \"").concat(filename, "\"") : timeFormatFix + "env TZ=GMT LANG=en_US.UTF-8 cd ".concat(rootDirectory, " && ls -lLd \"$timeformat\" \"").concat(filename, "\"");
        return commandString;
      }, __moduleMeta__);

      __varRecorder__$1.fileInfoCommandString = fileInfoCommandString;

      var parseDirectoryListFromLs = __varRecorder__$1["lively.shell/client-fs-helper.js__define__"]("parseDirectoryListFromLs", "function", function (lsString, rootDirectory) {
        return lines(lsString).map(function (line) {
          return !line.trim().length ? null : new __varRecorder__$1.FileInfo(rootDirectory).readFromDirectoryListLine(line);
        }).filter(Boolean);
      }, __moduleMeta__);

      __varRecorder__$1.parseDirectoryListFromLs = parseDirectoryListFromLs;

      var fileInfo = __varRecorder__$1["lively.shell/client-fs-helper.js__define__"]("fileInfo", "function", /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(fileName, options) {
          var commandString, cmd, err, _varRecorder__$parse, _varRecorder__$parse2, fileInfo;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  commandString = __varRecorder__$1.fileInfoCommandString(fileName, options);
                  cmd = runCommand(commandString, options);
                  _context.next = 4;
                  return cmd.whenDone();

                case 4:
                  err = cmd.exitCode !== 0 ? cmd.output : null;

                  if (!err) {
                    _context.next = 7;
                    break;
                  }

                  throw err;

                case 7:
                  _varRecorder__$parse = __varRecorder__$1.parseDirectoryListFromLs(cmd.stdout, options.rootDirectory || "."), _varRecorder__$parse2 = _slicedToArray(_varRecorder__$parse, 1), fileInfo = _varRecorder__$parse2[0];
                  return _context.abrupt("return", fileInfo);

                case 9:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }(), __moduleMeta__);

      __varRecorder__$1.fileInfo = fileInfo;

      var findFilesCommandString = __varRecorder__$1["lively.shell/client-fs-helper.js__define__"]("findFilesCommandString", "function", function (pattern) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _options$rootDirector2 = options.rootDirectory,
            rootDirectory = _options$rootDirector2 === void 0 ? "." : _options$rootDirector2,
            exclude = options.exclude,
            depth = options.depth,
            platform = options.platform;
        if (!exclude) exclude = "-iname " + __varRecorder__$1.defaultExcludes.map(print).join(" -o -iname ");
        var slash = platform === "win32" ? "\\" : "/";
        if (platform !== "win32" && !rootDirectory.endsWith(slash)) rootDirectory += slash;
        var timeFormatFix = "if [ \"$(uname)\" = \"Darwin\" ];\n      then timeformat='-T'; else\n      timeformat=\"--time-style=+%b %d %T %Y\";\n    fi && ";
        var searchPart = format("%s \"%s\"", options.re ? "-iregex" : options.matchPath ? "-ipath" : "-iname", pattern);
        var stringifiedDepth = typeof depth === "number" ? " -maxdepth " + depth : "";
        var commandString = platform === "win32" ? format("find %s %s ( %s ) -prune -o " + "%s %s -print0 | xargs -0 -I{} ls -lLd --time-style=locale {}", rootDirectory, options.re ? "-E " : "", exclude.replace(/"/g, ""), searchPart.replace(/"/g, ""), stringifiedDepth) : timeFormatFix + format("env TZ=GMT LANG=en_US.UTF-8 " + "find %s %s \\( %s \\) -prune -o " + "%s %s -print0 | xargs -0 -I{} ls -lLd \"$timeformat\" \"{}\"", rootDirectory, options.re ? "-E " : "", exclude, searchPart, stringifiedDepth);
        return commandString;
      }, __moduleMeta__);

      __varRecorder__$1.findFilesCommandString = findFilesCommandString;

      var findFiles = __varRecorder__$1["lively.shell/client-fs-helper.js__define__"]("findFiles", "function", /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(pattern, options) {
          var _Object$assign, findFilesGroup, rootDirectory, stateForThisGroup, commands, promiseState, commandString, cmd;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _Object$assign = Object.assign({
                    findFilesGroup: "default-find-files-process"
                  }, options), findFilesGroup = _Object$assign.findFilesGroup, rootDirectory = _Object$assign.rootDirectory;
                  stateForThisGroup = __varRecorder__$1.findFilesProcesses[findFilesGroup] || (__varRecorder__$1.findFilesProcesses[findFilesGroup] = {
                    promiseState: null,
                    commands: []
                  });
                  commands = stateForThisGroup.commands, promiseState = stateForThisGroup.promiseState;

                  if (!promiseState) {
                    stateForThisGroup.promiseState = promiseState = deferred();
                  }

                  commandString = __varRecorder__$1.findFilesCommandString(pattern, options);
                  commands.forEach(function (oldCmd) {
                    return oldCmd.kill();
                  });
                  cmd = runCommand(commandString, options);
                  commands.push(cmd);
                  cmd.whenDone().then(function () {
                    remove(commands, cmd);
                    var isOutdated = commands.some(function (otherCmd) {
                      return otherCmd.startTime > cmd.startTime;
                    });

                    if (isOutdated) {
                      console.log("[findFiles] command ".concat(cmd, " exited but a newer findFiles command was started for group ").concat(findFilesGroup, ", discarding output"));
                    } else {
                      var err = cmd.exitCode !== 0 ? cmd.output : null;
                      if (err) console.warn(err);
                      var result = err ? [] : __varRecorder__$1.parseDirectoryListFromLs(cmd.stdout, rootDirectory) || [];
                      promiseState.resolve(result);
                      Object.assign(stateForThisGroup, {
                        promiseState: null,
                        commands: []
                      });
                    }
                  })["catch"](function (err) {
                    return console.error(err);
                  });
                  return _context2.abrupt("return", promiseState.promise);

                case 10:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x3, _x4) {
          return _ref2.apply(this, arguments);
        };
      }(), __moduleMeta__);

      __varRecorder__$1.findFiles = findFiles;

      var convertDirectoryUploadEntriesToFileInfos = __varRecorder__$1["lively.shell/client-fs-helper.js__define__"]("convertDirectoryUploadEntriesToFileInfos", "function", function (entryTree) {
        function flattenTree(entryTree) {
          return Array.prototype.concat.apply([entryTree], entryTree.children ? entryTree.children.map(flattenTree) : []);
        }

        var entries = flattenTree(entryTree);
        return entries.map(function (entry) {
          var path = entry.fullPath.replace(/^\//, "");
          return {
            fileName: path,
            path: path,
            rootDirectory: "./",
            isDirectory: entry.isDirectory,
            isLink: undefined,
            lastModified: undefined,
            linkCount: undefined,
            mode: undefined,
            size: undefined,
            group: undefined,
            user: undefined
          };
        });
      }, __moduleMeta__);

      __varRecorder__$1.convertDirectoryUploadEntriesToFileInfos = convertDirectoryUploadEntriesToFileInfos;

      var FileInfo = /*#__PURE__*/function () {
        function FileInfo(rootDirectory) {
          _classCallCheck(this, FileInfo);

          this.rootDirectory = rootDirectory;
          this.path = "";
          this.fileName = "";
          this.isDirectory = false;
          this.lastModified = null;
          this.mode = "";
          this.isLink = false;
          this.linkCount = 0;
          this.user = "";
          this.group = "";
          this.size = 0;
          this.rootDirectory = null;
        }

        _createClass(FileInfo, [{
          key: "readFromDirectoryListLine",
          value: function readFromDirectoryListLine(line) {
            var _this = this;

            if (!line.trim().length) return null;
            var lineRest = line;
            this.reader.forEach(function (reader) {
              return lineRest = reader(lineRest, _this);
            });
            return this;
          }
        }, {
          key: "toString",
          value: function toString() {
            return this.path;
          }
        }, {
          key: "reader",
          get: function get() {
            return [function mode(lineString, fileInfo) {
              var idx = lineString.indexOf(" ");
              fileInfo.mode = lineString.slice(0, idx);
              fileInfo.isDirectory = fileInfo.mode[0] === "d";
              return lineString.slice(idx + 1).trim();
            }, function linkCount(lineString, fileInfo) {
              var idx = lineString.indexOf(" ");
              fileInfo.linkCount = Number(lineString.slice(0, idx));
              return lineString.slice(idx + 1).trim();
            }, function user(lineString, fileInfo) {
              var idx = lineString.indexOf(" ");
              fileInfo.user = lineString.slice(0, idx);
              return lineString.slice(idx + 1).trim();
            }, function group(lineString, fileInfo) {
              var idx = peekRight(lineString, 0, /\s+[0-9]/);
              fileInfo.group = lineString.slice(0, idx).trim();
              return lineString.slice(idx).trim();
            }, function size(lineString, fileInfo) {
              var idx = lineString.indexOf(" ");
              fileInfo.size = Number(lineString.slice(0, idx));
              return lineString.slice(idx + 1).trim();
            }, function lastModified(lineString, fileInfo) {
              var matches = reMatches(lineString, /[^s]+\s+[0-9:\s]+/);
              if (!matches || !matches[0]) return lineString;
              fileInfo.lastModified = new Date(matches[0].match + " GMT");
              return lineString.slice(matches[0].end).trim();
            }, function fileName(lineString, fileInfo) {
              var string = lineString.replace(/^\.\/+/g, "").replace(/\/\//g, "/");
              var nameAndLink = string && string.split(" -> ");
              var isLink = string === "" ? false : string && nameAndLink.length === 2;
              var path = isLink ? nameAndLink[0] : string;
              var fname = path && path.indexOf(fileInfo.rootDirectory) === 0 ? path.slice(fileInfo.rootDirectory.length) : path;
              fileInfo.fileName = string === "" ? "." : fname;
              fileInfo.path = path;
              fileInfo.isLink = isLink;
              return fname;
            }];
          }
        }]);

        return FileInfo;
      }();

      __varRecorder__$1.FileInfo = FileInfo;
      __varRecorder__$1.parseDirectoryListFromLs = parseDirectoryListFromLs;
      __varRecorder__$1.fileInfo = fileInfo;
      __varRecorder__$1.findFilesProcesses = {};
      __varRecorder__$1.defaultExcludes = [".svn", ".git", "node_modules", ".module_cache"];
      __varRecorder__$1.findFiles = findFiles;
      __varRecorder__$1.convertDirectoryUploadEntriesToFileInfos = convertDirectoryUploadEntriesToFileInfos;

      var __varRecorder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.shell/client-resource.js", __contextModule__);

      var ShellClientResource = exports('default', /*#__PURE__*/function (_Resource) {
        _inherits(ShellClientResource, _Resource);

        var _super = _createSuper(ShellClientResource);

        _createClass(ShellClientResource, null, [{
          key: "defaultL2lClient",
          get: function get() {
            return this._defaultL2lClient || __varRecorder__._defaultL2LClient;
          },
          set: function set(l2lClient) {
            this._defaultL2lClient = __varRecorder__._defaultL2LClient = l2lClient;
          }
        }]);

        function ShellClientResource(url, l2lClient) {
          var _this;

          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

          _classCallCheck(this, ShellClientResource);

          _this = _super.call(this, url);
          _this.options = Object.assign({}, options, {
            l2lClient: l2lClient || _this.constructor.defaultL2lClient
          });
          return _this;
        }

        _createClass(ShellClientResource, [{
          key: "newResource",
          value: function newResource(url) {
            return new this.constructor(url, this.options.l2lClient, this.options);
          }
        }, {
          key: "read",
          value: function read() {
            var _this2 = this;

            var cmd = runCommand("cat \"".concat(this.url, "\""), this.options);
            return cmd.whenDone().then(function () {
              if (cmd.exitCode) throw new Error("Read ".concat(_this2.url, " failed: ").concat(cmd.stderr));
              return cmd.output;
            });
          }
        }, {
          key: "write",
          value: function () {
            var _write = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(content) {
              var cmd;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (content) {
                        _context.next = 6;
                        break;
                      }

                      _context.next = 3;
                      return runCommand("echo -n > \"".concat(this.url, "\""), Object.assign({}, this.options)).whenDone();

                    case 3:
                      _context.t0 = _context.sent;
                      _context.next = 9;
                      break;

                    case 6:
                      _context.next = 8;
                      return runCommand("touch \"".concat(this.url, "\" && tee \"").concat(this.url, "\""), Object.assign({
                        stdin: String(content)
                      }, this.options)).whenDone();

                    case 8:
                      _context.t0 = _context.sent;

                    case 9:
                      cmd = _context.t0;

                      if (!cmd.exitCode) {
                        _context.next = 12;
                        break;
                      }

                      throw new Error("Write ".concat(this.url, " failed: ").concat(cmd.stderr));

                    case 12:
                      return _context.abrupt("return", this);

                    case 13:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function write(_x) {
              return _write.apply(this, arguments);
            }

            return write;
          }()
        }, {
          key: "mkdir",
          value: function () {
            var _mkdir = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var cmd;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return runCommand("mkdir -p \"".concat(this.url, "\""), this.options).whenDone();

                    case 2:
                      cmd = _context2.sent;

                      if (!cmd.exitCode) {
                        _context2.next = 5;
                        break;
                      }

                      throw new Error("".concat(this, " cannot create directory: ").concat(cmd.stderr));

                    case 5:
                      return _context2.abrupt("return", this);

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function mkdir() {
              return _mkdir.apply(this, arguments);
            }

            return mkdir;
          }()
        }, {
          key: "isDirectory",
          value: function () {
            var _isDirectory = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var cmd;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      cmd = runCommand("test -d \"".concat(this.url, "\""), this.options);
                      _context3.next = 3;
                      return cmd.whenDone();

                    case 3:
                      return _context3.abrupt("return", cmd.exitCode === 0);

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function isDirectory() {
              return _isDirectory.apply(this, arguments);
            }

            return isDirectory;
          }()
        }, {
          key: "isFile",
          value: function () {
            var _isFile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var cmd;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      cmd = runCommand("test -f \"".concat(this.url, "\""), this.options);
                      _context4.next = 3;
                      return cmd.whenDone();

                    case 3:
                      return _context4.abrupt("return", cmd.exitCode === 0);

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function isFile() {
              return _isFile.apply(this, arguments);
            }

            return isFile;
          }()
        }, {
          key: "exists",
          value: function () {
            var _exists = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.isDirectory();

                    case 2:
                      _context5.t0 = _context5.sent;

                      if (_context5.t0) {
                        _context5.next = 7;
                        break;
                      }

                      _context5.next = 6;
                      return this.isFile();

                    case 6:
                      _context5.t0 = _context5.sent;

                    case 7:
                      return _context5.abrupt("return", _context5.t0);

                    case 8:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function exists() {
              return _exists.apply(this, arguments);
            }

            return exists;
          }()
        }, {
          key: "remove",
          value: function remove() {
            var _this3 = this;

            var cmd = runCommand("rm -rf \"".concat(this.url, "\""), this.options);
            return cmd.whenDone().then(function () {
              if (cmd.exitCode) throw new Error("Remove of ".concat(_this3.url, " failed: ").concat(cmd.stderr));
              return _this3;
            });
          }
        }, {
          key: "gzip",
          value: function () {
            var _gzip = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(content) {
              var _this4 = this;

              var cmd;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      cmd = runCommand("gzip > \"".concat(this.url, "\""), Object.assign({
                        stdin: String(content)
                      }, this.options));
                      return _context6.abrupt("return", cmd.whenDone().then(function () {
                        if (cmd.exitCode) throw new Error("Gzip compression of ".concat(_this4.url, " failed: ").concat(cmd.stderr));
                        return _this4;
                      }));

                    case 2:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function gzip(_x2) {
              return _gzip.apply(this, arguments);
            }

            return gzip;
          }()
        }, {
          key: "brotli",
          value: function () {
            var _brotli = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(content) {
              var _this5 = this;

              var cmd;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      cmd = runCommand("brotli > \"".concat(this.url, "\""), Object.assign({
                        stdin: String(content)
                      }, this.options));
                      return _context7.abrupt("return", cmd.whenDone().then(function () {
                        if (cmd.exitCode) throw new Error("Brotli compression of ".concat(_this5.url, " failed: ").concat(cmd.stderr));
                        return _this5;
                      }));

                    case 2:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            function brotli(_x3) {
              return _brotli.apply(this, arguments);
            }

            return brotli;
          }()
        }, {
          key: "readProperties",
          value: function () {
            var _readProperties = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var info;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return fileInfo(this.url, this.options);

                    case 2:
                      info = _context8.sent;
                      this.assignProperties(dissoc(info, ["fileName", "path", "rootDirectory"]));
                      return _context8.abrupt("return", this);

                    case 5:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function readProperties() {
              return _readProperties.apply(this, arguments);
            }

            return readProperties;
          }()
        }, {
          key: "dirList",
          value: function () {
            var _dirList = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var _this6 = this;

              var depth,
                  opts,
                  exclude,
                  url,
                  l2lClient,
                  fileInfos,
                  _args9 = arguments;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      depth = _args9.length > 0 && _args9[0] !== undefined ? _args9[0] : 1;
                      opts = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : {};
                      exclude = opts.exclude;

                      if (Array.isArray(exclude)) {
                        exclude = "-iname " + exclude.map(print).join(" -o -iname ");
                      }

                      url = this.url, l2lClient = this.options.l2lClient;
                      _context9.next = 7;
                      return findFiles("*", {
                        exclude: exclude,
                        depth: depth,
                        rootDirectory: url,
                        l2lClient: l2lClient
                      });

                    case 7:
                      fileInfos = _context9.sent;

                      if (fileInfos[0].path.replace(/\/$/, "") === this.url.replace(/\/$/, "")) {
                        fileInfos.shift();
                      }

                      return _context9.abrupt("return", fileInfos.map(function (info) {
                        var path = info.path,
                            isDirectory = info.isDirectory;
                        if (isDirectory) path = path.replace(/\/?$/, "/");
                        var res = new _this6.constructor(path, l2lClient, _this6.options);
                        res.assignProperties(dissoc(info, ["fileName", "path", "rootDirectory"]));
                        return res;
                      }));

                    case 10:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));

            function dirList() {
              return _dirList.apply(this, arguments);
            }

            return dirList;
          }()
        }]);

        return ShellClientResource;
      }(Resource));
      __varRecorder__.ShellClientResource = ShellClientResource;
      __varRecorder__._defaultL2LClient = __varRecorder__._defaultL2LClient || undefined;
      __varRecorder__.resourceExtension = {
        name: "shell-client",
        matches: function matches(url) {
          return url.startsWith("/") || url.match(/[a-z]:\\/i);
        },
        resourceClass: __varRecorder__.ShellClientResource
      };
      var resourceExtension = exports('resourceExtension', __varRecorder__.resourceExtension);
      __varRecorder__.resourceExtension = resourceExtension;
      __varRecorder__["default"] = ShellClientResource;

    })
  };
}));
