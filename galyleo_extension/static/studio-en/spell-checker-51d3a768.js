System.register(['./__rootModule___commonjs-entry-039abf1b.js', './shell-interface-e2437883.js', './client-fb647a5a.js', './client-command-99e40f2e.js'], (function (exports) {
  var __contextModule__ = typeof module !== 'undefined' ? module : arguments[1];
;
  var _asyncToGenerator, last, lines, runCommand;
  return {
    setters: [function (module) {
      _asyncToGenerator = module._;
      last = module.q;
      lines = module.a$;
    }, function (module) {
      runCommand = module.runCommand;
    }, function () {}, function () {}],
    execute: (function () {

      var __varRecorder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/shell/spell-checker.js", __contextModule__);
      var __moduleMeta__ = {
        pathInPackage: function pathInPackage() {
          return "./shell/spell-checker.js";
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

      var spellCheckWord = exports('spellCheckWord', __varRecorder__["lively.ide/shell/spell-checker.js__define__"]("spellCheckWord", "function", /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(word) {
          var cmd, result, suggestions;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  word = word.trim();

                  if (word) {
                    _context.next = 3;
                    break;
                  }

                  return _context.abrupt("return", []);

                case 3:
                  cmd = runCommand("aspell -a", {
                    stdin: word
                  });
                  _context.next = 6;
                  return cmd.whenDone();

                case 6:
                  if (!cmd.exitCode) {
                    _context.next = 8;
                    break;
                  }

                  throw new Error("Spell checking failed:\n" + cmd.stderr);

                case 8:
                  result = lines(cmd.stdout)[1];

                  if (!(!result || !result.length || !result.includes(":"))) {
                    _context.next = 11;
                    break;
                  }

                  return _context.abrupt("return", []);

                case 11:
                  suggestions = last(result.split(":")).trim().split(/,\s?/);
                  return _context.abrupt("return", suggestions);

                case 13:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), __moduleMeta__));

      __varRecorder__.spellCheckWord = spellCheckWord;
      __varRecorder__.spellCheckWord = spellCheckWord;

    })
  };
}));
