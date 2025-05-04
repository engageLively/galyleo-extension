System.register(['./__rootModule___commonjs-entry-039abf1b.js'], (function (exports) {
  var __contextModule__ = typeof module !== 'undefined' ? module : arguments[1];
;
  var _createClass, _classCallCheck, deferred, makeEmitter, dissoc, _asyncToGenerator, _inherits, _createSuper, signal, remove, waitFor, pushIfNotIncluded;
  return {
    setters: [function (module) {
      _createClass = module.g;
      _classCallCheck = module.f;
      deferred = module.a9;
      makeEmitter = module.dA;
      dissoc = module.y;
      _asyncToGenerator = module._;
      _inherits = module.d;
      _createSuper = module.e;
      signal = module.s;
      remove = module.w;
      waitFor = module.aE;
      pushIfNotIncluded = module.bP;
    }],
    execute: (function () {

      var __varRecorder__$1 = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.shell/command-interface.js", __contextModule__);
      __varRecorder__$1._commands = __varRecorder__$1._commands || undefined;
      __varRecorder__$1._commands = __varRecorder__$1._commands || [];

      var CommandInterface = /*#__PURE__*/function () {
        _createClass(CommandInterface, null, [{
          key: "findCommand",
          value: function findCommand(pid) {
            return this.commands.find(function (ea) {
              return ea.pid === pid;
            });
          }
        }, {
          key: "commands",
          get: function get() {
            return __varRecorder__$1._commands;
          }
        }]);

        function CommandInterface() {
          _classCallCheck(this, CommandInterface);

          this._stdout = "";
          this._stderr = "";
          this.exitCode = undefined;
          this.commandString = "";
          this.process = null;
          this._whenDone = deferred();
          this._whenStarted = deferred();
          this.startTime = 0;
          this.lastSignal = null;
          makeEmitter(this);
        }

        _createClass(CommandInterface, [{
          key: "isRunning",
          value: function isRunning() {
            return this.process && this.exitCode === undefined;
          }
        }, {
          key: "isDone",
          value: function isDone() {
            return this.exitCode !== undefined;
          }
        }, {
          key: "whenStarted",
          value: function whenStarted() {
            return this._whenStarted.promise;
          }
        }, {
          key: "whenDone",
          value: function whenDone() {
            return this._whenDone.promise;
          }
        }, {
          key: "spawn",
          value: function spawn() {
            throw new Error("not yet implemented");
          }
        }, {
          key: "kill",
          value: function kill() {
            var signal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "KILL";
            this.lastSignal = signal;
          }
        }, {
          key: "toString",
          value: function toString() {
            return "".concat(this.constructor.name, "(").concat(this.commandString, ", ").concat(this.status, ")");
          }
        }, {
          key: "isShellCommand",
          get: function get() {
            return true;
          }
        }, {
          key: "status",
          get: function get() {
            if (!this.process) return "not started";
            if (this.exitCode === undefined) return "running, pid ".concat(this.pid);
            return "exited ".concat(this.exitCode, ", pid ").concat(this.pid);
          }
        }, {
          key: "pid",
          get: function get() {
            return this.process ? this.process.pid : null;
          }
        }, {
          key: "output",
          get: function get() {
            return this.stdout + (this.stderr ? "\n" + this.stderr : "");
          }
        }, {
          key: "stdout",
          get: function get() {
            return this._stdout;
          }
        }, {
          key: "stderr",
          get: function get() {
            return this._stderr;
          }
        }]);

        return CommandInterface;
      }();
      __varRecorder__$1.CommandInterface = CommandInterface;
      __varRecorder__$1["default"] = CommandInterface;

      var __varRecorder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.shell/client-command.js", __contextModule__);

      var __moduleMeta__ = {
        pathInPackage: function pathInPackage() {
          return "./client-command.js";
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

      var runCommand = exports('runCommand', __varRecorder__["lively.shell/client-command.js__define__"]("runCommand", "function", function (commandString) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var l2lClient = opts.l2lClient;

        if (!l2lClient) {
          throw new Error("lively.shell client side runCommand needs opts.l2lClient!");
        }

        __varRecorder__.ClientCommand.installLively2LivelyServices(l2lClient);

        var cmd = new __varRecorder__.ClientCommand(l2lClient);
        cmd.spawn(Object.assign({
          command: commandString
        }, dissoc(opts, ["l2lClient"])));
        return cmd;
      }, __moduleMeta__));

      __varRecorder__.runCommand = runCommand;

      var defaultDirectory = exports('defaultDirectory', __varRecorder__["lively.shell/client-command.js__define__"]("defaultDirectory", "function", function (l2lClient) {
        if (__varRecorder__.dirCache[l2lClient.trackerId]) return __varRecorder__.dirCache[l2lClient.trackerId];
        return l2lClient.whenRegistered().then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var _yield$l2lClient$send, defaultDirectory;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return l2lClient.sendToAndWait(l2lClient.trackerId, "lively.shell.info", {});

                case 2:
                  _yield$l2lClient$send = _context.sent;
                  defaultDirectory = _yield$l2lClient$send.data.defaultDirectory;
                  return _context.abrupt("return", __varRecorder__.dirCache[l2lClient.trackerId] = defaultDirectory);

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        })));
      }, __moduleMeta__));

      __varRecorder__.defaultDirectory = defaultDirectory;

      var env = exports('env', __varRecorder__["lively.shell/client-command.js__define__"]("env", "function", /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(l2lClient) {
          var _yield$l2lClient$send2, env;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return l2lClient.sendToAndWait(l2lClient.trackerId, "lively.shell.env", {});

                case 2:
                  _yield$l2lClient$send2 = _context2.sent;
                  env = _yield$l2lClient$send2.data.env;
                  return _context2.abrupt("return", env);

                case 5:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }(), __moduleMeta__));

      __varRecorder__.env = env;

      var readFile = exports('readFile', __varRecorder__["lively.shell/client-command.js__define__"]("readFile", "function", function (path) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        options = options || {};

        var cmd = __varRecorder__.runCommand("cat \"".concat(path, "\""), options);

        return cmd.whenDone().then(function () {
          if (cmd.exitCode) throw new Error("Read ".concat(path, " failed: ").concat(cmd.stderr));
          return cmd.output;
        });
      }, __moduleMeta__));

      __varRecorder__.readFile = readFile;

      var writeFile = exports('writeFile', __varRecorder__["lively.shell/client-command.js__define__"]("writeFile", "function", function (path, content, options) {
        if (!options && content && content.content) {
          options = content;
          content = options.content;
        }

        content = content || "";

        var cmd = __varRecorder__.runCommand("tee \"".concat(path, "\""), Object.assign({
          stdin: content
        }, options));

        return cmd.whenDone().then(function () {
          if (cmd.exitCode) throw new Error("Write ".concat(path, " failed: ").concat(cmd.stderr));
          return cmd;
        });
      }, __moduleMeta__));

      __varRecorder__.writeFile = writeFile;
      __varRecorder__.debug = false;
      __varRecorder__._commands = __varRecorder__._commands || undefined;
      __varRecorder__._commands = __varRecorder__._commands || [];

      var ClientCommand = exports('default', /*#__PURE__*/function (_CommandInterface) {
        _inherits(ClientCommand, _CommandInterface);

        var _super = _createSuper(ClientCommand);

        _createClass(ClientCommand, null, [{
          key: "installLively2LivelyServices",
          value: function installLively2LivelyServices(l2lClient) {
            Object.keys(__varRecorder__.L2LServices).forEach(function (name) {
              return l2lClient.addService(name, /*#__PURE__*/function () {
                var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(tracker, msg, ackFn) {
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          return _context3.abrupt("return", __varRecorder__.L2LServices[name](tracker, msg, ackFn));

                        case 1:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                }));

                return function (_x2, _x3, _x4) {
                  return _ref3.apply(this, arguments);
                };
              }());
            });
          }
        }, {
          key: "commands",
          get: function get() {
            return __varRecorder__._commands;
          }
        }]);

        function ClientCommand(l2lClient) {
          var _this;

          _classCallCheck(this, ClientCommand);

          _this = _super.call(this);
          _this.debug = __varRecorder__.debug;
          _this.l2lClient = l2lClient;
          return _this;
        }

        _createClass(ClientCommand, [{
          key: "envForCommand",
          value: function envForCommand(opts) {
            var _this$l2lClient = this.l2lClient,
                id = _this$l2lClient.id,
                origin = _this$l2lClient.origin,
                path = _this$l2lClient.path,
                namespace = _this$l2lClient.namespace;

            var _ref4 = opts || {},
                env = _ref4.env,
                owner = _ref4.owner;

            env = env || {};
            if (owner) env.LIVELY_COMMAND_OWNER = owner;
            return Object.assign({
              ASKPASS_SESSIONID: id,
              L2L_EDITOR_SESSIONID: id,
              L2L_SESSIONTRACKER_SERVER: origin,
              L2L_SESSIONTRACKER_PATH: path,
              L2L_SESSIONTRACKER_NS: namespace
            }, env);
          }
        }, {
          key: "spawn",
          value: function () {
            var _spawn = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this2 = this;

              var cmdInstructions,
                  l2lClient,
                  command,
                  env,
                  cwd,
                  stdin,
                  error,
                  pid,
                  _varRecorder__$__int,
                  _args4 = arguments;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      cmdInstructions = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : {
                        command: null,
                        env: {},
                        cwd: null,
                        stdin: null
                      };
                      l2lClient = this.l2lClient;
                      command = cmdInstructions.command, env = cmdInstructions.env, cwd = cmdInstructions.cwd, stdin = cmdInstructions.stdin;
                      this.startTime = new Date();
                      env = this.envForCommand(cmdInstructions);
                      this.debug && console.log("".concat(this, " spawning ").concat(command));
                      this.debug && this.whenStarted().then(function () {
                        return console.log("".concat(_this2, " started"));
                      });
                      this.debug && this.whenDone().then(function () {
                        return console.log("".concat(_this2, " exited"));
                      });
                      pushIfNotIncluded(this.constructor.commands, this);
                      this.commandString = Array.isArray(command) ? command.join("") : command;

                      if (l2lClient.isOnline()) {
                        _context4.next = 14;
                        break;
                      }

                      error = "L2L not connected";
                      _context4.next = 21;
                      break;

                    case 14:
                      _context4.next = 16;
                      return l2lClient.whenRegistered();

                    case 16:
                      _context4.next = 18;
                      return l2lClient.sendToAndWait(l2lClient.trackerId, "lively.shell.spawn", {
                        command: command,
                        env: env,
                        cwd: cwd,
                        stdin: stdin
                      }, {
                        ackTimeout: 30 * 1000
                      });

                    case 18:
                      __varRecorder__.__inter0__ = _context4.sent;
                      _varRecorder__$__int = __varRecorder__.__inter0__.data, error = _varRecorder__$__int.error, pid = _varRecorder__$__int.pid;
                      __varRecorder__.__inter0__;

                    case 21:
                      if (!error) {
                        _context4.next = 28;
                        break;
                      }

                      __varRecorder__.debug && console.error("[".concat(this, "] error at start: ").concat(error));
                      this.process = {
                        error: error
                      };
                      this.exitCode = 1;
                      signal(this, "error", error);

                      this._whenDone.reject(error);

                      return _context4.abrupt("return");

                    case 28:
                      this.process = {
                        pid: pid
                      };
                      __varRecorder__.debug && console.log("[".concat(this, "] got pid ").concat(pid));
                      signal(this, "pid", pid);

                      this._whenStarted.resolve();

                      return _context4.abrupt("return", this);

                    case 33:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function spawn() {
              return _spawn.apply(this, arguments);
            }

            return spawn;
          }()
        }, {
          key: "writeToStdin",
          value: function () {
            var _writeToStdin = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(content) {
              var l2lClient, pid;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      if (this.isRunning()) {
                        _context5.next = 2;
                        break;
                      }

                      return _context5.abrupt("return");

                    case 2:
                      l2lClient = this.l2lClient, pid = this.pid;
                      _context5.next = 5;
                      return l2lClient.sendToAndWait(l2lClient.trackerId, "lively.shell.writeToStdin", {
                        pid: pid,
                        stdin: String(content)
                      });

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function writeToStdin(_x5) {
              return _writeToStdin.apply(this, arguments);
            }

            return writeToStdin;
          }()
        }, {
          key: "kill",
          value: function () {
            var _kill = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var signal,
                  pid,
                  l2lClient,
                  _yield$l2lClient$send3,
                  _yield$l2lClient$send4,
                  status,
                  error,
                  _args6 = arguments;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      signal = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : "KILL";

                      if (this.isRunning()) {
                        _context6.next = 3;
                        break;
                      }

                      return _context6.abrupt("return");

                    case 3:
                      __varRecorder__.debug && console.log("".concat(this, " signaling ").concat(signal));
                      this.lastSignal = signal;
                      pid = this.pid, l2lClient = this.l2lClient;
                      _context6.next = 8;
                      return l2lClient.sendToAndWait(l2lClient.trackerId, "lively.shell.kill", {
                        pid: pid
                      });

                    case 8:
                      _yield$l2lClient$send3 = _context6.sent;
                      _yield$l2lClient$send4 = _yield$l2lClient$send3.data;
                      status = _yield$l2lClient$send4.status;
                      error = _yield$l2lClient$send4.error;
                      __varRecorder__.debug && console.log("".concat(this, " kill send: ").concat(error || status));

                      if (!error) {
                        _context6.next = 15;
                        break;
                      }

                      throw new Error(error);

                    case 15:
                      return _context6.abrupt("return", this.whenDone());

                    case 16:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function kill() {
              return _kill.apply(this, arguments);
            }

            return kill;
          }()
        }, {
          key: "onOutput",
          value: function onOutput(_ref5) {
            var stdout = _ref5.stdout,
                stderr = _ref5.stderr;

            if (stdout) {
              this._stdout += stdout;
              signal(this, "stdout", stdout);
              this.emit("stdout", stdout);
            }

            if (stderr) {
              this._stderr += stderr;
              signal(this, "stderr", stderr);
              this.emit("stderr", stderr);
            }
          }
        }, {
          key: "onClose",
          value: function onClose(code) {
            remove(this.constructor.commands, this);
            this.exitCode = code;
            this.emit("close", code);
            signal(this, "close", code);

            this._whenDone.resolve(this);
          }
        }, {
          key: "onError",
          value: function onError(err) {
            remove(this.constructor.commands, this);
            this._stderr += err.stack;
            this.exitCode = 1;
            this.emit("error", err.stack);
            signal(this, "error", err.stack);

            this._whenDone.reject(err);
          }
        }]);

        return ClientCommand;
      }(CommandInterface));
      __varRecorder__.ClientCommand = ClientCommand;
      __varRecorder__.runCommand = runCommand;
      __varRecorder__.dirCache = {};
      __varRecorder__.defaultDirectory = defaultDirectory;
      __varRecorder__.env = env;
      __varRecorder__.readFile = readFile;
      __varRecorder__.writeFile = writeFile;
      __varRecorder__.cmd = __varRecorder__.cmd || undefined;
      __varRecorder__.L2LServices = {
        "lively.shell.onOutput": function () {
          var _livelyShellOnOutput = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(client, _ref6, ackFn, sender) {
            var _ref6$data, pid, stdout, stderr;

            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _ref6$data = _ref6.data, pid = _ref6$data.pid, stdout = _ref6$data.stdout, stderr = _ref6$data.stderr;
                    __varRecorder__.debug && console.log("[lively.shell] client received lively.shell.onOutput for command ".concat(pid));
                    _context7.prev = 2;
                    _context7.next = 5;
                    return waitFor(1000, function () {
                      return __varRecorder__.ClientCommand.findCommand(pid);
                    });

                  case 5:
                    __varRecorder__.cmd = _context7.sent;
                    _context7.next = 12;
                    break;

                  case 8:
                    _context7.prev = 8;
                    _context7.t0 = _context7["catch"](2);
                    console.warn("[lively.shell] received output for command ".concat(pid, " but it isn't registered!'"));
                    return _context7.abrupt("return");

                  case 12:
                    __varRecorder__.cmd.onOutput({
                      stdout: stdout,
                      stderr: stderr
                    });

                  case 13:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, null, [[2, 8]]);
          }));

          function livelyShellOnOutput(_x6, _x7, _x8, _x9) {
            return _livelyShellOnOutput.apply(this, arguments);
          }

          return livelyShellOnOutput;
        }(),
        "lively.shell.onExit": function () {
          var _livelyShellOnExit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(client, _ref7, ackFn, sender) {
            var _ref7$data, pid, code, error;

            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _ref7$data = _ref7.data, pid = _ref7$data.pid, code = _ref7$data.code, error = _ref7$data.error;
                    __varRecorder__.debug && console.log("[lively.shell] client received lively.shell.onExit for command ".concat(pid));
                    _context8.prev = 2;
                    _context8.next = 5;
                    return waitFor(1000, function () {
                      return __varRecorder__.ClientCommand.findCommand(pid);
                    });

                  case 5:
                    __varRecorder__.cmd = _context8.sent;
                    _context8.next = 12;
                    break;

                  case 8:
                    _context8.prev = 8;
                    _context8.t0 = _context8["catch"](2);
                    console.warn("[lively.shell] received exit message for command ".concat(pid, " but it isn't registered!'"));
                    return _context8.abrupt("return");

                  case 12:
                    if (error) {
                      if (typeof error === "string") {
                        error = new Error(error);
                      }

                      __varRecorder__.cmd.onError(error);
                    } else __varRecorder__.cmd.onClose(code);

                  case 13:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, null, [[2, 8]]);
          }));

          function livelyShellOnExit(_x10, _x11, _x12, _x13) {
            return _livelyShellOnExit.apply(this, arguments);
          }

          return livelyShellOnExit;
        }()
      };
      __varRecorder__["default"] = ClientCommand;

    })
  };
}));
