System.register(['./__rootModule___commonjs-entry-039abf1b.js', './client-fb647a5a.js', './client-command-99e40f2e.js'], (function (exports) {
  var __contextModule__ = typeof module !== 'undefined' ? module : arguments[1];
;
  var _asyncToGenerator, format, _slicedToArray, L2LClient, runCommand$1, defaultDirectory$1, env$1;
  return {
    setters: [function (module) {
      _asyncToGenerator = module._;
      format = module.cO;
      _slicedToArray = module.o;
    }, function (module) {
      L2LClient = module["default"];
    }, function (module) {
      runCommand$1 = module.runCommand;
      defaultDirectory$1 = module.defaultDirectory;
      env$1 = module.env;
    }],
    execute: (function () {

      var __varRecorder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/shell/shell-interface.js", __contextModule__);
      var __moduleMeta__ = {
        pathInPackage: function pathInPackage() {
          return "./shell/shell-interface.js";
        },
        unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
          return function () {};
        },
        subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
          return function () {};
        },
        "package": function _package() {
          return {
            name: "lively.ide",
            version: "0.1.0"
          };
        }
      };

      var runCommand = exports('runCommand', __varRecorder__["lively.ide/shell/shell-interface.js__define__"]("runCommand", "function", function (commandString) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return runCommand$1(commandString, Object.assign({
          l2lClient: L2LClient.ensure(__varRecorder__.defaultConnection)
        }, opts));
      }, __moduleMeta__));

      __varRecorder__.runCommand = runCommand;

      var defaultDirectory = exports('defaultDirectory', __varRecorder__["lively.ide/shell/shell-interface.js__define__"]("defaultDirectory", "function", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return defaultDirectory$1(L2LClient.ensure(__varRecorder__.defaultConnection));

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })), __moduleMeta__));

      __varRecorder__.defaultDirectory = defaultDirectory;

      var env = exports('env', __varRecorder__["lively.ide/shell/shell-interface.js__define__"]("env", "function", function () {
        return env$1(L2LClient.ensure(__varRecorder__.defaultConnection));
      }, __moduleMeta__));

      __varRecorder__.env = env;

      var readFile = __varRecorder__["lively.ide/shell/shell-interface.js__define__"]("readFile", "function", function (path) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        options = options || {};

        var cmd = __varRecorder__.runCommand("cat \"".concat(path, "\""), options);

        return cmd.whenDone().then(function () {
          return cmd.output;
        });
      }, __moduleMeta__);

      __varRecorder__.readFile = readFile;

      var writeFile = __varRecorder__["lively.ide/shell/shell-interface.js__define__"]("writeFile", "function", function (path, options, thenDo) {
        if (typeof options === "string") options = {
          content: options
        };
        options = options || {};
        options.content = options.content || "";
        if (this.PLATFORM !== "win32") path = "\"" + path + "\"";
        var cmd = this.run("tee " + path, {
          stdin: options.content,
          cwd: options.cwd
        });
        if (options.onEnd) lively.bindings.connect(cmd, "end", options, "onEnd");
        if (thenDo) lively.bindings.connect(cmd, "end", {
          thenDo: thenDo
        }, "thenDo");
        return cmd;
      }, __moduleMeta__);

      __varRecorder__.writeFile = writeFile;

      var parseCommand = exports('parseCommand', __varRecorder__["lively.ide/shell/shell-interface.js__define__"]("parseCommand", "function", function (cmd) {
        var result = [];
        var word = "";
        var state = "normal";

        function add() {
          if (word.length > 0) result.push(word);
          word = "";
        }

        for (var i = 0, c; c = cmd[i]; i++) {
          if (state === "normal" && /\s/.test(c)) {
            add();
            continue;
          }

          if (c === "\"" || c === "'") {
            if (state === "normal") {
              state = c;
              continue;
            }

            if (state === c) {
              state = "normal";
              continue;
            }
          }

          if (c === "\\" && state === cmd[i + 1]) {
            i++;
            c = cmd[i];
          }

          word += c;
        }

        add();
        return result;
      }, __moduleMeta__));

      __varRecorder__.parseCommand = parseCommand;

      var doGrep = exports('doGrep', __varRecorder__["lively.ide/shell/shell-interface.js__define__"]("doGrep", "function", function (queryString, path) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var exclusions = options.exclusions,
            _options$fileTypes = options.fileTypes,
            fileTypes = _options$fileTypes === void 0 ? [] : _options$fileTypes,
            _options$sizeLimit = options.sizeLimit,
            sizeLimit = _options$sizeLimit === void 0 ? "+1M" : _options$sizeLimit,
            _options$charsBefore = options.charsBefore,
            charsBefore = _options$charsBefore === void 0 ? 80 : _options$charsBefore,
            _options$charsAfter = options.charsAfter,
            charsAfter = _options$charsAfter === void 0 ? 80 : _options$charsAfter;
        if (!exclusions) exclusions = __varRecorder__.defaultGrepExclusions;
        var fullPath = path;
        var excludes = exclusions.length ? "-iname " + exclusions.map(JSON.stringify).join(" -o -iname ") : "";
        var sizeExclude = sizeLimit ? "-size " + sizeLimit : "";
        var prune = [excludes, sizeExclude].filter(Boolean).join(" -o ");
        var prune = prune ? "\\( ".concat(prune, " \\) -prune -o") : "";
        var allowedFileNames = fileTypes.length ? "-iname " + fileTypes.map(JSON.stringify).join(" -o -iname ") : "";
        var allowedFileNames = allowedFileNames ? "-a \\( ".concat(allowedFileNames, " \\)") : "";
        var baseCmd = "find %s %s -type f %s -a -print0 | xargs -0 grep -IinH -o \".\\{0,%s\\}%s.\\{0,%s\\}\" ";
        var platform = "mac";
        var baseCmd = platform !== "win32" ? baseCmd.replace(/([\(\);])/g, "\\$1") : baseCmd;
        var cmdString = format(baseCmd, fullPath, prune, allowedFileNames, charsBefore, queryString, charsAfter);

        var cmd = __varRecorder__.runCommand(cmdString);

        cmd.whenDone().then(function (_ref2) {
          var exitCode = _ref2.exitCode,
              stdout = _ref2.stdout;
              _ref2.stderr;
          if (exitCode && exitCode !== 1) return;
          cmd.results = stdout.split("\n").map(function (line) {
            var reMatch = line.match(/(.*):([0-9]+):(.*)/);
            if (!reMatch) return null;

            var _reMatch = _slicedToArray(reMatch, 4);
                _reMatch[0];
                var filename = _reMatch[1],
                lineno = _reMatch[2],
                match = _reMatch[3];

            return {
              filename: filename,
              lineno: Number(lineno) - 1,
              match: match
            };
          }).filter(Boolean);
        });
        return cmd;
      }, __moduleMeta__));

      __varRecorder__.doGrep = doGrep;
      __varRecorder__.defaultConnection = {
        url: "".concat(document.location.origin, "/lively-socket.io"),
        namespace: "l2l"
      };
      __varRecorder__.runCommand = runCommand;
      __varRecorder__.defaultDirectory = defaultDirectory;
      __varRecorder__.env = env;
      __varRecorder__.parseCommand = parseCommand;
      __varRecorder__.defaultGrepExclusions = [".svn", ".git", "node_modules", "dist", ".module_cache", "lively.next-node_modules"];
      __varRecorder__.doGrep = doGrep;

    })
  };
}));
