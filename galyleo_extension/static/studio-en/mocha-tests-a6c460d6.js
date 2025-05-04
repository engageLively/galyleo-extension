System.register(['./__rootModule___commonjs-entry-039abf1b.js'], (function (exports, module) {
  var __contextModule__ = typeof module !== 'undefined' ? module : arguments[1];
;
  var _asyncToGenerator, compact, chain, invoke, _createForOfIteratorHelper;
  return {
    setters: [function (module) {
      _asyncToGenerator = module._;
      compact = module.aT;
      chain = module.cv;
      invoke = module.cq;
      _createForOfIteratorHelper = module.a6;
    }],
    execute: (function () {

      var __varRecorder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively-system-interface/commands/mocha-tests.js", __contextModule__);
      var __moduleMeta__ = {
        pathInPackage: function pathInPackage() {
          return "./commands/mocha-tests.js";
        },
        unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
          return function () {};
        },
        subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
          return function () {};
        },
        "package": function _package() {
          return {
            name: "lively-system-interface",
            version: "0.2.1"
          };
        }
      };

      var loadMochaTestFile = exports('loadMochaTestFile', __varRecorder__["lively-system-interface/commands/mocha-tests.js__define__"]("loadMochaTestFile", "function", /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(file) {
          var testsByFile,
              tester,
              _args = arguments;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  testsByFile = _args.length > 1 && _args[1] !== undefined ? _args[1] : [];
                  _context.next = 3;
                  return module.import('./index-5521d3c1.js');

                case 3:
                  tester = _context.sent;
                  return _context.abrupt("return", tester.loadTestModuleAndExtractTestState(file, testsByFile));

                case 5:
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

      __varRecorder__.loadMochaTestFile = loadMochaTestFile;

      var runMochaTests = exports('runMochaTests', __varRecorder__["lively-system-interface/commands/mocha-tests.js__define__"]("runMochaTests", "function", /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(grep, testsByFile, onChange, onError) {
          var _iterator, _step, file, _yield$__varRecorder_, mocha, mochaRun;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  mochaRun = function _mochaRun(mocha) {
                    return new Promise(function (resolve, reject) {
                      var files = compact(mocha.suite.suites).map(function (_ref3) {
                        var file = _ref3.file;
                        return file;
                      });
                      var tests = chain(testsByFile).filter(function (ea) {
                        return files.includes(ea.file);
                      }).pluck("tests").flat().value();

                      if (!tests || !tests.length) {
                        return reject(new Error("Trying to run tests of ".concat(files.join(", "), " but cannot find them in loaded tests!")));
                      }

                      mocha.reporter(function Reporter(runner) {
                        runner.on("test", function (test) {
                          try {
                            var t = tests.find(function (ea) {
                              return ea.fullTitle === test.fullTitle();
                            });
                            t.state = "running";
                            typeof onChange === "function" && onChange(t, "test");
                          } catch (e) {
                            typeof onError === "function" && onError(e, "test");
                          }
                        });
                        runner.on("pass", function (test) {
                          try {
                            var t = tests.find(function (ea) {
                              return ea.fullTitle === test.fullTitle();
                            });
                            t.state = "succeeded";
                            t.duration = test.duration;
                            typeof onChange === "function" && onChange(t, "pass");
                          } catch (e) {
                            typeof onError === "function" && onError(e, "pass");
                          }
                        });
                        runner.on("fail", function (test, error) {
                          try {
                            var attachErrorToTest = function attachErrorToTest(test, error, duration) {
                              test.state = "failed";
                              test.duration = test.duration;
                              test.error = error;
                            };

                            var t = tests.find(function (ea) {
                              return ea.fullTitle === test.fullTitle();
                            });
                            if (t) attachErrorToTest(t, error, test.duration);else {
                              var parentTests = invoke(test.parent.tests, "fullTitle");
                              tests.filter(function (ea) {
                                return parentTests.includes(ea.fullTitle);
                              }).forEach(function (ea) {
                                return attachErrorToTest(ea, error, test.duration);
                              });
                            }
                            typeof onChange === "function" && onChange(t, "fail");
                          } catch (e) {
                            typeof onError === "function" && onError(e, "fail");
                          }
                        });
                      });
                      mocha.run(function (failures) {
                        return resolve({
                          testsByFile: testsByFile,
                          mocha: mocha
                        });
                      });
                    });
                  };

                  _iterator = _createForOfIteratorHelper(testsByFile);
                  _context2.prev = 2;

                  _iterator.s();

                case 4:
                  if ((_step = _iterator.n()).done) {
                    _context2.next = 15;
                    break;
                  }

                  file = _step.value.file;
                  _context2.next = 8;
                  return __varRecorder__.loadMochaTestFile(file, testsByFile);

                case 8:
                  _yield$__varRecorder_ = _context2.sent;
                  mocha = _yield$__varRecorder_.mocha;
                  if (grep) mocha = mocha.grep(grep);
                  _context2.next = 13;
                  return mochaRun(mocha);

                case 13:
                  _context2.next = 4;
                  break;

                case 15:
                  _context2.next = 20;
                  break;

                case 17:
                  _context2.prev = 17;
                  _context2.t0 = _context2["catch"](2);

                  _iterator.e(_context2.t0);

                case 20:
                  _context2.prev = 20;

                  _iterator.f();

                  return _context2.finish(20);

                case 23:
                  return _context2.abrupt("return", {
                    mocha: mocha,
                    testsByFile: testsByFile
                  });

                case 24:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, null, [[2, 17, 20, 23]]);
        }));

        return function (_x2, _x3, _x4, _x5) {
          return _ref2.apply(this, arguments);
        };
      }(), __moduleMeta__));

      __varRecorder__.runMochaTests = runMochaTests;
      __varRecorder__.loadMochaTestFile = loadMochaTestFile;
      __varRecorder__.runMochaTests = runMochaTests;

    })
  };
}));
