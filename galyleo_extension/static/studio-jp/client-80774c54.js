System.register(['./__rootModule___commonjs-entry-43c0966d.js'], (function (exports) {
  var __contextModule__ = typeof module !== 'undefined' ? module : arguments[1];
;
  var _createClass, notYetImplemented, waitFor, newUUID, _typeof, _slicedToArray, _classCallCheck, _asyncToGenerator, delay, _objectDestructuringEmpty, _toConsumableArray, _inherits, _createSuper, resource, equals, makeEmitter, _assertThisInitialized, backoff, dissoc;
  return {
    setters: [function (module) {
      _createClass = module.g;
      notYetImplemented = module.bl;
      waitFor = module.aE;
      newUUID = module.cl;
      _typeof = module.a5;
      _slicedToArray = module.o;
      _classCallCheck = module.f;
      _asyncToGenerator = module._;
      delay = module.l;
      _objectDestructuringEmpty = module.dC;
      _toConsumableArray = module.r;
      _inherits = module.d;
      _createSuper = module.e;
      resource = module.ac;
      equals = module.af;
      makeEmitter = module.dA;
      _assertThisInitialized = module.dD;
      backoff = module.dE;
      dissoc = module.y;
    }],
    execute: (function () {

      var __varRecorder__$2 = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.2lively/interface.js", __contextModule__);
      __varRecorder__$2.debugMessageOrder = false;

      var L2LConnection = /*#__PURE__*/function () {
        function L2LConnection(ns) {
          _classCallCheck(this, L2LConnection);

          this.id = newUUID();
          this.actions = {};
          this.options = {
            ackTimeout: 3500,
            debug: false
          };
          this._incomingOrderNumberingBySenders = new Map();
          this._outgoingOrderNumberingByTargets = new Map();
          this._outOfOrderCacheBySenders = new Map();
        }

        _createClass(L2LConnection, [{
          key: "isOnline",
          value: function isOnline() {
            notYetImplemented("isOnline", true);
          }
        }, {
          key: "open",
          value: function open() {
            notYetImplemented("open, true");
          }
        }, {
          key: "close",
          value: function close() {
            notYetImplemented("close", true);
          }
        }, {
          key: "remove",
          value: function remove() {
            notYetImplemented("remove", true);
          }
        }, {
          key: "whenOnline",
          value: function whenOnline(timeout) {
            var _this = this;

            return waitFor(timeout, function () {
              return _this.isOnline();
            }).then(function () {
              return _this;
            })["catch"](function (err) {
              return Promise.reject(/timeout/i.test(String(err)) ? new Error("Timeout in ".concat(_this, ".whenOnline")) : err);
            });
          }
        }, {
          key: "onError",
          value: function onError(err) {
            if (this.debug) console.log("[".concat(this, "] error: ").concat(err));
          }
        }, {
          key: "removeService",
          value: function removeService(selector) {
            delete this.actions[selector];
          }
        }, {
          key: "removeServices",
          value: function removeServices(selectors) {
            var _this2 = this;

            selectors.forEach(function (ea) {
              return _this2.removeService(ea);
            });
          }
        }, {
          key: "addService",
          value: function addService(selector, handlerFn) {
            this.actions[selector] = handlerFn;
          }
        }, {
          key: "addServices",
          value: function addServices(services) {
            var _this3 = this;

            Object.keys(services).forEach(function (selector) {
              return _this3.addService(selector, services[selector]);
            });
          }
        }, {
          key: "ping",
          value: function () {
            var _ping = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(target) {
              var t, _yield$this$sendToAnd, t2, t3;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      t = Date.now();
                      _context.next = 3;
                      return this.sendToAndWait(target, "l2l-ping", {
                        timestamp: t
                      });

                    case 3:
                      _yield$this$sendToAnd = _context.sent;
                      t2 = _yield$this$sendToAnd.data.timestamp;
                      t3 = Date.now();
                      return _context.abrupt("return", {
                        to: t2 - t,
                        from: t3 - t2,
                        roundtrip: t3 - t
                      });

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function ping(_x) {
              return _ping.apply(this, arguments);
            }

            return ping;
          }()
        }, {
          key: "send",
          value: function send(msg, ackFn) {
            notYetImplemented("send", true);
          }
        }, {
          key: "sendAndWait",
          value: function () {
            var _sendAndWait = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(msg) {
              var _this4 = this;

              var sendP, timeout, timeoutMs, answer;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      sendP = new Promise(function (resolve, reject) {
                        return _this4.send(msg, resolve);
                      });
                      timeout = {};
                      timeoutMs = this.options.ackTimeout + 400;

                      if ("ackTimeout" in msg) {
                        if (!msg.ackTimeout || msg.ackTimeout < 0) timeoutMs = null;else timeoutMs = msg.ackTimeout + 400;
                      }

                      if (!timeoutMs) {
                        _context2.next = 10;
                        break;
                      }

                      _context2.next = 7;
                      return Promise.race([delay(timeoutMs, timeout), sendP]);

                    case 7:
                      answer = _context2.sent;
                      _context2.next = 13;
                      break;

                    case 10:
                      _context2.next = 12;
                      return sendP;

                    case 12:
                      answer = _context2.sent;

                    case 13:
                      if (!(answer === timeout)) {
                        _context2.next = 15;
                        break;
                      }

                      throw new Error("Timeout sending ".concat(msg.action));

                    case 15:
                      return _context2.abrupt("return", answer);

                    case 16:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function sendAndWait(_x2) {
              return _sendAndWait.apply(this, arguments);
            }

            return sendAndWait;
          }()
        }, {
          key: "sendTo",
          value: function sendTo(target, action, data, ackFn) {
            return this.send({
              target: target,
              action: action,
              data: data
            }, ackFn);
          }
        }, {
          key: "sendToAndWait",
          value: function sendToAndWait(target, action, data, opts) {
            return this.sendAndWait(Object.assign({
              target: target,
              action: action,
              data: data
            }, opts));
          }
        }, {
          key: "prepareSend",
          value: function prepareSend(msg, ackFn) {
            var target = msg.target,
                action = msg.action,
                messageId = msg.messageId;
                msg.data;
                var sender = msg.sender;
            if (!action) throw new Error("Trying to send a message without specifying action!");
            if (!target) throw new Error("Trying to send message ".concat(action, " without specifying target!"));
            if (!messageId) msg.messageId = newUUID();
            if (!sender) msg.sender = this.id;
            var n = msg.n = this._outgoingOrderNumberingByTargets.get(target) || 0;

            this._outgoingOrderNumberingByTargets.set(target, n + 1);

            if (typeof ackFn === "function") {
              var sender = this;
              var originalAckFn = ackFn;

              ackFn = function ackFn(msg) {
                var incomingN = sender._incomingOrderNumberingBySenders.get(msg.sender) || 0;
                sender.debug && __varRecorder__$2.debugMessageOrder && console.log("[MSG ORDER] ".concat(sender, " received ack for ").concat(msg.action, " as msg ").concat(incomingN));

                try {
                  originalAckFn.apply(null, arguments);
                } catch (err) {
                  console.error("Error in ack fn of ".concat(sender, ": ").concat(err.stack));
                }

                sender._incomingOrderNumberingBySenders.set(msg.sender, incomingN + 1);

                setTimeout(function () {
                  return sender.invokeOutOfOrderMessages(msg.sender);
                }, 0);
              };
            }

            this.debug && __varRecorder__$2.debugMessageOrder && console.log("[MSG ORDER] ".concat(this, " sending ").concat(n, " (").concat(msg.action, ") to ").concat(target));
            return [msg, ackFn];
          }
        }, {
          key: "prepareAnswerMessage",
          value: function prepareAnswerMessage(forMsg, answerData) {
            return {
              action: forMsg.action + "-response",
              inResponseTo: forMsg.messageId,
              target: forMsg.sender,
              data: answerData,
              sender: this.id
            };
          }
        }, {
          key: "installEventToMessageTranslator",
          value: function installEventToMessageTranslator(socket) {
            var self = this;
            var onevent = socket.onevent;

            socket.onevent = function (packet) {
              var args = packet.data || [];
              onevent.call(this, packet);
              packet.data = ["*"].concat(args);
              onevent.call(this, packet);
            };

            socket.on("*", function (eventName, msg) {
              if (eventName && _typeof(eventName) === "object" && eventName.action) {
                msg = eventName;
                eventName = msg.action;
              }

              var lastArg = arguments[arguments.length - 1];
              var ackFn = typeof lastArg === "function" ? lastArg : null;
              msg = msg === ackFn ? null : msg;

              if (!msg || !msg.data || typeof msg.n !== "number" && !msg.broadcast || !msg.sender) {
                console.warn("".concat(self, " received non-conformant message ").concat(eventName, ":"), arguments);
                typeof ackFn === "function" && ackFn({
                  data: {
                    error: "invalid l2l message"
                  }
                });
                return;
              }

              self.receive(msg, socket, ackFn);
            });
          }
        }, {
          key: "receive",
          value: function receive(msg, socket, ackFn) {
            this.dispatchL2LMessageToSelf(msg, socket, ackFn);
          }
        }, {
          key: "dispatchL2LMessageToSelf",
          value: function dispatchL2LMessageToSelf(msg, socket, ackFn) {
            var _this5 = this;

            var selector = msg.action;

            if (msg.broadcast) {
              this.safeInvokeServiceHandler(selector, msg, ackFn, socket);
              return;
            }

            try {
              var expectedN = this._incomingOrderNumberingBySenders.get(msg.sender) || 0;
              var ignoreN = selector === "register" || "unregister";

              if (!ignoreN && msg.n < expectedN) {
                console.error("[MSG ORDER] [".concat(this, "] received message no. ").concat(msg.n, " but expected >= ").concat(expectedN, ", dropping ").concat(selector));
                return;
              }

              if (!ignoreN && msg.n > expectedN) {
                if (this.debug && __varRecorder__$2.debugMessageOrder) {
                  console.log("[MSG ORDER] [".concat(this, "] storing out of order message ").concat(selector, " (").concat(msg.n, ") for later invocation"));
                }

                var cache = this._outOfOrderCacheBySenders.get(msg.sender);

                if (!cache) {
                  cache = [];

                  this._outOfOrderCacheBySenders.set(msg.sender, cache);
                }

                cache.push([selector, msg, ackFn, socket]);
                return;
              }

              this.safeInvokeServiceHandler(selector, msg, ackFn, socket);
              setTimeout(function () {
                return _this5.invokeOutOfOrderMessages(msg.sender);
              }, 0);
            } catch (e) {
              console.error("Error message ordering when handling ".concat(selector, ": ").concat(e.stack || e));

              if (typeof ackFn === "function") {
                ackFn(this.prepareAnswerMessage(msg, {
                  isError: true,
                  error: String(e.stack || e)
                }));
              }
            }
          }
        }, {
          key: "invokeOutOfOrderMessages",
          value: function invokeOutOfOrderMessages(sender) {
            var outOfOrderMessages = this._outOfOrderCacheBySenders.get(sender);

            if (!outOfOrderMessages || !outOfOrderMessages.length) return;
            var expectedN = this._incomingOrderNumberingBySenders.get(sender) || 0;
            var invocationArgsI = outOfOrderMessages.findIndex(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2);
                  _ref2[0];
                  var n = _ref2[1].n;

              return n === expectedN;
            });
            if (invocationArgsI === -1) return;
            outOfOrderMessages.splice(invocationArgsI, 1);
            var invocationArgs = outOfOrderMessages[invocationArgsI];
            this.invokeServiceHandler.apply(this, invocationArgs);
          }
        }, {
          key: "renameTarget",
          value: function renameTarget(oldId, newId) {
            if (oldId === newId) return;

            var msgN = this._outgoingOrderNumberingByTargets.get(oldId);

            this._outgoingOrderNumberingByTargets["delete"](oldId);

            this._outgoingOrderNumberingByTargets.set(newId, msgN);
          }
        }, {
          key: "safeInvokeServiceHandler",
          value: function safeInvokeServiceHandler(selector, msg, ackFn, socket) {
            try {
              if (typeof this.actions[selector] === "function") {
                this.invokeServiceHandler(selector, msg, ackFn, socket);
              } else {
                if (!socket._events || !Object.keys(socket._events).includes(selector)) {
                  console.warn("WARNING [".concat(this, "] Unhandled message: ").concat(selector));

                  if (typeof ackFn === "function") {
                    ackFn(this.prepareAnswerMessage(msg, {
                      isError: true,
                      error: "message not understood: " + selector
                    }));
                  }
                }
              }
            } catch (e) {
              console.error("Error when handling ".concat(selector, ": ").concat(e.stack || e));

              if (typeof ackFn === "function") {
                ackFn(this.prepareAnswerMessage(msg, {
                  isError: true,
                  error: String(e.stack || e)
                }));
              }
            }
          }
        }, {
          key: "invokeServiceHandler",
          value: function invokeServiceHandler(selector, msg, ackFn, socket) {
            var _this6 = this;

            if (this.debug && __varRecorder__$2.debugMessageOrder) {
              console.log("[MSG ORDER] ".concat(this, " received ").concat(msg.n, " (").concat(msg.action, ") from ").concat(msg.sender));
            }

            this._incomingOrderNumberingBySenders.set(msg.sender, msg.n + 1);

            if (typeof ackFn === "function") {
              var ackCalled = false;
              var ackTimedout = false;
              var timeoutMs = "ackTimeout" in msg ? msg.ackTimeout : this.options.ackTimeout;
              var ackN = this._outgoingOrderNumberingByTargets.get(msg.sender) || 0;

              this._outgoingOrderNumberingByTargets.set(msg.sender, ackN + 1);

              var answerFn = function answerFn(answerData) {
                if (ackTimedout) {
                  console.warn("[".concat(_this6, "] ackFn for ").concat(msg.action, " called after it timed out, dropping answer!"));
                  return;
                }

                if (ackCalled) {
                  console.warn("[".concat(_this6, "] ack function called repeatedly when handling ").concat(msg.action));
                  return;
                }

                ackCalled = true;
                ackFn(_this6.prepareAnswerMessage(msg, answerData));

                if (_this6.debug && __varRecorder__$2.debugMessageOrder) {
                  console.log("[MSG ORDER] ".concat(_this6, " sending ").concat(ackN, " (ack for ").concat(msg.action, ")"));
                }
              };

              timeoutMs && setTimeout(function () {
                if (ackCalled) return;
                answerFn({
                  isError: true,
                  error: "Timeout error: ".concat(_this6, " did not send answer for ").concat(msg.action, " after ").concat(timeoutMs, "ms")
                });
                ackTimedout = true;
              }, timeoutMs);
            }

            try {
              this.actions[selector].call(this, this, msg, answerFn, socket);
            } catch (e) {
              console.error("[".concat(this, "] Error handling ").concat(selector, ": ").concat(e.stack || e));
              answerFn && answerFn({
                error: e.stack
              });
            }
          }
        }, {
          key: "debug",
          get: function get() {
            return this.options.debug;
          },
          set: function set(bool) {
            this.options.debug = bool;
          }
        }]);

        return L2LConnection;
      }();
      __varRecorder__$2.L2LConnection = L2LConnection;
      __varRecorder__$2["default"] = L2LConnection;

      var _this = undefined;

      var __varRecorder__$1 = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.2lively/default-actions.js", __contextModule__);
      __varRecorder__$1.defaultActions = {
        "l2l-ping": function l2lPing(tracker, _ref, ackFn, socket) {
          var sender = _ref.sender,
              timestamp = _ref.data.timestamp;
          var t = Date.now();
          typeof ackFn === "function" && ackFn({
            timestamp: t
          });
          tracker.debug && console.log("[".concat(_this, "] got ping from ").concat(sender, ", time: ").concat(t - timestamp, "ms"));
        },
        "remote-eval": function remoteEval(tracker, _ref2, ackFn, socket) {
          _ref2.sender;
              var source = _ref2.data.source;
          Promise.resolve().then(function () {
            return eval(source);
          }).then(function (result) {
            return ackFn({
              value: result
            });
          })["catch"](function (err) {
            if (err.originalErr) err = err.originalErr;
            console.error("eval error: " + err);
            typeof ackFn === "function" && ackFn({
              isError: true,
              value: String(err.stack || err)
            });
          });
        },
        "remote-eval-2": function remoteEval2(tracker, _ref3, ackFn, socket) {
          _ref3.sender;
              var source = _ref3.data.source;
          Promise.resolve().then(function () {
            var result = eval(source);

            if (!(result instanceof Promise)) {
              console.error("unexpected eval result:" + result);
              throw new Error("unexpected eval result:" + result);
            }

            return result;
          }).then(function (evalResult) {
            return ackFn(evalResult);
          })["catch"](function (err) {
            console.error("eval error: " + err);
            if (err.originalErr) err = err.originalErr;
            typeof ackFn === "function" && ackFn({
              isError: true,
              value: String(err.stack || err)
            });
          });
        }
      };
      var defaultActions = __varRecorder__$1.defaultActions;
      __varRecorder__$1.defaultActions = defaultActions;
      __varRecorder__$1.defaultTrackerActions = {
        "[broadcast] send": function broadcastSend(tracker, _ref4, ackFn, socket) {
          return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var sender, data, action, broadcast, room, namespace, isSystemBroadcast, isMultiServerBroadcast, broadcasters, id, trackers, status;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    sender = _ref4.sender, data = _ref4.data;
                    action = data.action, broadcast = data.broadcast, room = data.room, namespace = data.namespace, isSystemBroadcast = data.isSystemBroadcast, isMultiServerBroadcast = data.isMultiServerBroadcast;
                    broadcasters = [];

                    if (isMultiServerBroadcast) {
                      console.log(".......isMultiServerBroadcast");
                      id = tracker.id;
                      trackers = tracker.getTrackerList();
                      console.log(trackers);
                      broadcasters = trackers.map(function (ea) {
                        return ea.id !== id ? ea.io._nsps.get("/" + ea.namespace) : socket.broadcast;
                      });
                    } else {
                      if (isSystemBroadcast) namespace = tracker.namespace;
                      broadcasters.push(namespace ? tracker.io._nsps.get("/" + namespace) : socket.broadcast);
                    }

                    broadcasters.forEach(function (ea) {
                      console.log(action, {
                        action: action,
                        sender: sender,
                        broadcast: true,
                        data: broadcast
                      });
                      debugger;
                      ea.to(room).emit(action, {
                        action: action,
                        sender: sender,
                        broadcast: true,
                        data: broadcast
                      });
                    });

                    if (ackFn && typeof ackFn === "function") {
                      status = "message broadcasted to " + room;
                      if (namespace) status += " in namespace " + namespace;

                      if (broadcasters.length > 1) {
                        status += " " + broadcasters.length + " trackers";
                      }

                      console.log(status);
                      ackFn({
                        status: status
                      });
                    }

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }))();
        },
        "[broadcast] join room": function broadcastJoinRoom(tracker, _ref5, ackFn, socket) {
          return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var sender, room, status, joined, rooms, isInRoom;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    sender = _ref5.sender, room = _ref5.data.room;
                    joined = false;
                    rooms = tracker.io._nsps.get("/" + tracker.namespace).adapter.rooms;
                    isInRoom = rooms.get(room) && rooms.get(room).has(socket.id);

                    if (!isInRoom) {
                      _context2.next = 8;
                      break;
                    }

                    status = "".concat(sender, " already in ").concat(room);
                    _context2.next = 12;
                    break;

                  case 8:
                    _context2.next = 10;
                    return socket.join(room);

                  case 10:
                    status = "".concat(sender, " joined ").concat(room);
                    joined = true;

                  case 12:
                    if (ackFn && typeof ackFn === "function") ackFn({
                      status: status,
                      joined: joined
                    });

                  case 13:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }))();
        },
        "[broadcast] leave room": function broadcastLeaveRoom(tracker, _ref6, ackFn, socket) {
          return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var sender, room, status, left, rooms, isInRoom;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    sender = _ref6.sender, room = _ref6.data.room;
                    left = false;
                    rooms = tracker.io._nsps.get("/" + tracker.namespace).adapter.rooms;
                    isInRoom = rooms.get(room) && rooms.get(room).has(socket.id);

                    if (isInRoom) {
                      _context3.next = 8;
                      break;
                    }

                    status = "".concat(sender, " not in ").concat(room);
                    _context3.next = 12;
                    break;

                  case 8:
                    _context3.next = 10;
                    return socket.leave(room);

                  case 10:
                    status = "".concat(sender, " left room ").concat(room);
                    left = true;

                  case 12:
                    console.log(status);
                    if (ackFn && typeof ackFn === "function") ackFn({
                      left: left,
                      status: status
                    });

                  case 14:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }))();
        },
        "[broadcast] my rooms": function broadcastMyRooms(tracker, _ref7, ackFn, socket) {
          _objectDestructuringEmpty(_ref7);

          ackFn(socket.rooms);
        },
        "[broadcast] all rooms": function broadcastAllRooms(tracker, _ref8, ackFn, socket) {
          _ref8.sender;
          ackFn(tracker.io._nsps.get("/" + tracker.namespace).adapter.rooms);
        },
        "[broadcast] list room members": function broadcastListRoomMembers(tracker, _ref9, ackFn, socket) {
          _ref9.sender;
              var room = _ref9.data.room;
          var io = tracker.io;
          var contents;

          if (!room) {
            ackFn({
              isError: true,
              error: "`room` paramerter missing!"
            });
            return;
          }

          contents = io._nsps.get("/" + tracker.namespace).adapter.rooms.get(room);
          ackFn({
            room: room,
            sockets: contents ? _toConsumableArray(contents.entries()).reduce(function (res, _ref10) {
              var _ref11 = _slicedToArray(_ref10, 1),
                  a = _ref11[0];

              return res[a] = true, res;
            }, {}) : {},
            length: contents ? contents.size : 0
          });
        },
        getClients: function getClients(tracker, _ref12, ackFn) {
          _ref12.trackerId;
          tracker.removeDisconnectedClients();
          ackFn(Array.from(tracker.clients));
        }
      };
      var defaultTrackerActions = __varRecorder__$1.defaultTrackerActions;
      __varRecorder__$1.defaultTrackerActions = defaultTrackerActions;
      __varRecorder__$1.defaultClientActions = {
        "getRoomList": function getRoomList(_ref13) {
          return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var client, ackFn, result;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    client = _ref13.client, ackFn = _ref13.ackFn;
                    result = client._socketioClient.rooms;
                    ackFn(result);

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }))();
        },
        "ask for": function askFor(tracker, _ref14, ackFn, socket) {
          var _this2 = this;

          return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var sender, query, promptMethod, answer;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    sender = _ref14.sender, query = _ref14.data.query;
                    promptMethod = query.match(/password|sudo/i) ? "passwordPrompt" : "prompt";
                    _context5.next = 4;
                    return $world[promptMethod](query);

                  case 4:
                    answer = _context5.sent;
                    typeof ackFn === "function" && ackFn({
                      answer: answer
                    });
                    tracker.debug && console.log("[".concat(_this2, "] message 'ask for' from ").concat(sender, ", query: ").concat(query));

                  case 7:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5);
          }))();
        },
        "open editor": function openEditor(tracker, _ref15, ackFn, socket) {
          return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var args, status;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    args = _ref15.data.args;

                    if (args.length) {
                      _context6.next = 4;
                      break;
                    }

                    ackFn({
                      error: "no file specified"
                    });
                    return _context6.abrupt("return");

                  case 4:
                    _context6.next = 6;
                    return $world.execCommand("open file for EDITOR", {
                      url: args[0]
                    });

                  case 6:
                    status = _context6.sent;
                    typeof ackFn === "function" && ackFn(status === "aborted" ? {
                      error: String(status)
                    } : {
                      status: status
                    });

                  case 8:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6);
          }))();
        },
        "changeWorkingDirectory": function changeWorkingDirectory(tracker, _ref16, ackFn, socket) {
          return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var args, _ref17, _ref18, dir, commandMorphId, status, morph, shellPlugin;

            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    args = _ref16.data.args;
                    _ref17 = args || [], _ref18 = _slicedToArray(_ref17, 2), dir = _ref18[0], commandMorphId = _ref18[1];
                    status = "OK";

                    try {
                      if (!dir) status = "[changeWorkingDirectory] No directory received";else if (!commandMorphId) status = "[changeWorkingDirectory] No command morph";else {
                        morph = $world.getMorphWithId(commandMorphId);

                        if (morph) {
                          if (morph.__lookupSetter__("cwd")) morph.cwd = dir;else if (typeof morph.changeWorkingDirectory === "function") morph.changeWorkingDirectory(dir);else if (typeof morph.pluginFind === "function") {
                            shellPlugin = morph.pluginFind(function (ea) {
                              return ea.isShellEditorPlugin;
                            });
                            if (shellPlugin) shellPlugin.cwd = dir;
                          } else {
                            status = "[changeWorkingDirectory] cannot figure pout how to set dir";
                          }
                        }
                      }
                    } catch (e) {
                      status = String(e);
                    }

                    if (status !== "OK") console.warn(status);
                    typeof ackFn === "function" && ackFn(status);

                  case 6:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7);
          }))();
        }
      };
      var defaultClientActions = __varRecorder__$1.defaultClientActions;
      __varRecorder__$1.defaultClientActions = defaultClientActions;

      var exports$6 = {};
      var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
      var parts = [
        "source",
        "protocol",
        "authority",
        "userInfo",
        "user",
        "password",
        "host",
        "port",
        "relative",
        "path",
        "directory",
        "file",
        "query",
        "anchor"
      ];
      exports$6 = function parseuri(str) {
        var src = str, b = str.indexOf("["), e = str.indexOf("]");
        if (b != -1 && e != -1) {
          str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ";") + str.substring(e, str.length);
        }
        var m = re.exec(str || ""), uri = {}, i = 14;
        while (i--) {
          uri[parts[i]] = m[i] || "";
        }
        if (b != -1 && e != -1) {
          uri.source = src;
          uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ":");
          uri.authority = uri.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
          uri.ipv6uri = true;
        }
        uri.pathNames = pathNames(uri, uri["path"]);
        uri.queryKey = queryKey(uri, uri["query"]);
        return uri;
      };
      function pathNames(obj, path) {
        var regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
        if (path.substr(0, 1) == "/" || path.length === 0) {
          names.splice(0, 1);
        }
        if (path.substr(path.length - 1, 1) == "/") {
          names.splice(names.length - 1, 1);
        }
        return names;
      }
      function queryKey(uri, query) {
        var data = {};
        query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
          if ($1) {
            data[$1] = $2;
          }
        });
        return data;
      }
      var exports$1$4 = exports$6;

      var exports$5 = {};
      try {
        exports$5 = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest();
      } catch (err) {
        exports$5 = false;
      }
      var exports$1$3 = exports$5;

      var _global$1 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
      var exports$4 = {};
      exports$4.Emitter = Emitter;
      function Emitter(obj) {
        if (obj)
          return mixin(obj);
      }
      function mixin(obj) {
        for (var key in Emitter.prototype) {
          obj[key] = Emitter.prototype[key];
        }
        return obj;
      }
      Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
        (this || _global$1)._callbacks = (this || _global$1)._callbacks || {};
        ((this || _global$1)._callbacks["$" + event] = (this || _global$1)._callbacks["$" + event] || []).push(fn);
        return this || _global$1;
      };
      Emitter.prototype.once = function (event, fn) {
        function on() {
          this.off(event, on);
          fn.apply(this || _global$1, arguments);
        }
        on.fn = fn;
        this.on(event, on);
        return this || _global$1;
      };
      Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
        (this || _global$1)._callbacks = (this || _global$1)._callbacks || {};
        if (0 == arguments.length) {
          (this || _global$1)._callbacks = {};
          return this || _global$1;
        }
        var callbacks = (this || _global$1)._callbacks["$" + event];
        if (!callbacks)
          return this || _global$1;
        if (1 == arguments.length) {
          delete (this || _global$1)._callbacks["$" + event];
          return this || _global$1;
        }
        var cb;
        for (var i = 0; i < callbacks.length; i++) {
          cb = callbacks[i];
          if (cb === fn || cb.fn === fn) {
            callbacks.splice(i, 1);
            break;
          }
        }
        if (callbacks.length === 0) {
          delete (this || _global$1)._callbacks["$" + event];
        }
        return this || _global$1;
      };
      Emitter.prototype.emit = function (event) {
        (this || _global$1)._callbacks = (this || _global$1)._callbacks || {};
        var args = new Array(arguments.length - 1), callbacks = (this || _global$1)._callbacks["$" + event];
        for (var i = 1; i < arguments.length; i++) {
          args[i - 1] = arguments[i];
        }
        if (callbacks) {
          callbacks = callbacks.slice(0);
          for (var i = 0, len = callbacks.length; i < len; ++i) {
            callbacks[i].apply(this || _global$1, args);
          }
        }
        return this || _global$1;
      };
      Emitter.prototype.emitReserved = Emitter.prototype.emit;
      Emitter.prototype.listeners = function (event) {
        (this || _global$1)._callbacks = (this || _global$1)._callbacks || {};
        return (this || _global$1)._callbacks["$" + event] || [];
      };
      Emitter.prototype.hasListeners = function (event) {
        return !!this.listeners(event).length;
      };
      const _Emitter = exports$4.Emitter;

      const PACKET_TYPES = Object.create(null);
      PACKET_TYPES["open"] = "0";
      PACKET_TYPES["close"] = "1";
      PACKET_TYPES["ping"] = "2";
      PACKET_TYPES["pong"] = "3";
      PACKET_TYPES["message"] = "4";
      PACKET_TYPES["upgrade"] = "5";
      PACKET_TYPES["noop"] = "6";
      const PACKET_TYPES_REVERSE = Object.create(null);
      Object.keys(PACKET_TYPES).forEach(key => {
        PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
      });
      const ERROR_PACKET = {
        type: "error",
        data: "parser error"
      };
      const withNativeBlob$1 = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
      const withNativeArrayBuffer$1 = typeof ArrayBuffer === "function";
      const isView$1 = obj => {
        return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
      };
      const encodePacket = ({type, data}, supportsBinary, callback) => {
        if (withNativeBlob$1 && data instanceof Blob) {
          if (supportsBinary) {
            return callback(data);
          } else {
            return encodeBlobAsBase64(data, callback);
          }
        } else if (withNativeArrayBuffer$1 && (data instanceof ArrayBuffer || isView$1(data))) {
          if (supportsBinary) {
            return callback(data);
          } else {
            return encodeBlobAsBase64(new Blob([data]), callback);
          }
        }
        return callback(PACKET_TYPES[type] + (data || ""));
      };
      const encodeBlobAsBase64 = (data, callback) => {
        const fileReader = new FileReader();
        fileReader.onload = function () {
          const content = fileReader.result.split(",")[1];
          callback("b" + (content || ""));
        };
        return fileReader.readAsDataURL(data);
      };
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      const lookup$1 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
      for (let i = 0; i < chars.length; i++) {
        lookup$1[chars.charCodeAt(i)] = i;
      }
      const decode$1 = base64 => {
        let bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
        if (base64[base64.length - 1] === "=") {
          bufferLength--;
          if (base64[base64.length - 2] === "=") {
            bufferLength--;
          }
        }
        const arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
        for (i = 0; i < len; i += 4) {
          encoded1 = lookup$1[base64.charCodeAt(i)];
          encoded2 = lookup$1[base64.charCodeAt(i + 1)];
          encoded3 = lookup$1[base64.charCodeAt(i + 2)];
          encoded4 = lookup$1[base64.charCodeAt(i + 3)];
          bytes[p++] = encoded1 << 2 | encoded2 >> 4;
          bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
          bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
        }
        return arraybuffer;
      };
      const withNativeArrayBuffer$2 = typeof ArrayBuffer === "function";
      const decodePacket = (encodedPacket, binaryType) => {
        if (typeof encodedPacket !== "string") {
          return {
            type: "message",
            data: mapBinary(encodedPacket, binaryType)
          };
        }
        const type = encodedPacket.charAt(0);
        if (type === "b") {
          return {
            type: "message",
            data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
          };
        }
        const packetType = PACKET_TYPES_REVERSE[type];
        if (!packetType) {
          return ERROR_PACKET;
        }
        return encodedPacket.length > 1 ? {
          type: PACKET_TYPES_REVERSE[type],
          data: encodedPacket.substring(1)
        } : { type: PACKET_TYPES_REVERSE[type] };
      };
      const decodeBase64Packet = (data, binaryType) => {
        if (withNativeArrayBuffer$2) {
          const decoded = decode$1(data);
          return mapBinary(decoded, binaryType);
        } else {
          return {
            base64: true,
            data
          };
        }
      };
      const mapBinary = (data, binaryType) => {
        switch (binaryType) {
        case "blob":
          return data instanceof ArrayBuffer ? new Blob([data]) : data;
        case "arraybuffer":
        default:
          return data;
        }
      };
      const SEPARATOR = String.fromCharCode(30);
      const encodePayload = (packets, callback) => {
        const length = packets.length;
        const encodedPackets = new Array(length);
        let count = 0;
        packets.forEach((packet, i) => {
          encodePacket(packet, false, encodedPacket => {
            encodedPackets[i] = encodedPacket;
            if (++count === length) {
              callback(encodedPackets.join(SEPARATOR));
            }
          });
        });
      };
      const decodePayload = (encodedPayload, binaryType) => {
        const encodedPackets = encodedPayload.split(SEPARATOR);
        const packets = [];
        for (let i = 0; i < encodedPackets.length; i++) {
          const decodedPacket = decodePacket(encodedPackets[i], binaryType);
          packets.push(decodedPacket);
          if (decodedPacket.type === "error") {
            break;
          }
        }
        return packets;
      };
      const protocol$1 = 4;

      var exports$3 = {};
      var alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), length = 64, map = {}, seed = 0, i = 0, prev;
      function encode(num) {
        var encoded = "";
        do {
          encoded = alphabet[num % length] + encoded;
          num = Math.floor(num / length);
        } while (num > 0);
        return encoded;
      }
      function decode(str) {
        var decoded = 0;
        for (i = 0; i < str.length; i++) {
          decoded = decoded * length + map[str.charAt(i)];
        }
        return decoded;
      }
      function yeast() {
        var now = encode(+new Date());
        if (now !== prev)
          return seed = 0, prev = now;
        return now + "." + encode(seed++);
      }
      for (; i < length; i++)
        map[alphabet[i]] = i;
      yeast.encode = encode;
      yeast.decode = decode;
      exports$3 = yeast;
      var exports$1$2 = exports$3;

      var exports$2 = {};
      exports$2.encode = function (obj) {
        var str = "";
        for (var i in obj) {
          if (obj.hasOwnProperty(i)) {
            if (str.length)
              str += "&";
            str += encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]);
          }
        }
        return str;
      };
      exports$2.decode = function (qs) {
        var qry = {};
        var pairs = qs.split("&");
        for (var i = 0, l = pairs.length; i < l; i++) {
          var pair = pairs[i].split("=");
          qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        }
        return qry;
      };
      exports$2.encode; exports$2.decode;

      var globalThis$1 = ((() => {
        if (typeof self !== "undefined") {
          return self;
        } else if (typeof window !== "undefined") {
          return window;
        } else {
          return Function("return this")();
        }
      })());
      function XMLHttpRequest$1(opts) {
        const xdomain = opts.xdomain;
        try {
          if ("undefined" !== typeof XMLHttpRequest && (!xdomain || exports$1$3)) {
            return new XMLHttpRequest();
          }
        } catch (e) {
        }
        if (!xdomain) {
          try {
            return new globalThis$1[(["Active"].concat("Object").join("X"))]("Microsoft.XMLHTTP");
          } catch (e) {
          }
        }
      }
      function pick(obj, ...attr) {
        return attr.reduce((acc, k) => {
          if (obj.hasOwnProperty(k)) {
            acc[k] = obj[k];
          }
          return acc;
        }, {});
      }
      const NATIVE_SET_TIMEOUT = setTimeout;
      const NATIVE_CLEAR_TIMEOUT = clearTimeout;
      function installTimerFunctions(obj, opts) {
        if (opts.useNativeTimers) {
          obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThis$1);
          obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThis$1);
        } else {
          obj.setTimeoutFn = setTimeout.bind(globalThis$1);
          obj.clearTimeoutFn = clearTimeout.bind(globalThis$1);
        }
      }
      class Transport extends _Emitter {
        constructor(opts) {
          super();
          this.writable = false;
          installTimerFunctions(this, opts);
          this.opts = opts;
          this.query = opts.query;
          this.readyState = "";
          this.socket = opts.socket;
        }
        onError(msg, desc) {
          const err = new Error(msg);
          err.type = "TransportError";
          err.description = desc;
          super.emit("error", err);
          return this;
        }
        open() {
          if ("closed" === this.readyState || "" === this.readyState) {
            this.readyState = "opening";
            this.doOpen();
          }
          return this;
        }
        close() {
          if ("opening" === this.readyState || "open" === this.readyState) {
            this.doClose();
            this.onClose();
          }
          return this;
        }
        send(packets) {
          if ("open" === this.readyState) {
            this.write(packets);
          }
        }
        onOpen() {
          this.readyState = "open";
          this.writable = true;
          super.emit("open");
        }
        onData(data) {
          const packet = decodePacket(data, this.socket.binaryType);
          this.onPacket(packet);
        }
        onPacket(packet) {
          super.emit("packet", packet);
        }
        onClose() {
          this.readyState = "closed";
          super.emit("close");
        }
      }
      class Polling extends Transport {
        constructor() {
          super(...arguments);
          this.polling = false;
        }
        get name() {
          return "polling";
        }
        doOpen() {
          this.poll();
        }
        pause(onPause) {
          this.readyState = "pausing";
          const pause = () => {
            this.readyState = "paused";
            onPause();
          };
          if (this.polling || !this.writable) {
            let total = 0;
            if (this.polling) {
              total++;
              this.once("pollComplete", function () {
                --total || pause();
              });
            }
            if (!this.writable) {
              total++;
              this.once("drain", function () {
                --total || pause();
              });
            }
          } else {
            pause();
          }
        }
        poll() {
          this.polling = true;
          this.doPoll();
          this.emit("poll");
        }
        onData(data) {
          const callback = packet => {
            if ("opening" === this.readyState && packet.type === "open") {
              this.onOpen();
            }
            if ("close" === packet.type) {
              this.onClose();
              return false;
            }
            this.onPacket(packet);
          };
          decodePayload(data, this.socket.binaryType).forEach(callback);
          if ("closed" !== this.readyState) {
            this.polling = false;
            this.emit("pollComplete");
            if ("open" === this.readyState) {
              this.poll();
            }
          }
        }
        doClose() {
          const close = () => {
            this.write([{ type: "close" }]);
          };
          if ("open" === this.readyState) {
            close();
          } else {
            this.once("open", close);
          }
        }
        write(packets) {
          this.writable = false;
          encodePayload(packets, data => {
            this.doWrite(data, () => {
              this.writable = true;
              this.emit("drain");
            });
          });
        }
        uri() {
          let query = this.query || {};
          const schema = this.opts.secure ? "https" : "http";
          let port = "";
          if (false !== this.opts.timestampRequests) {
            query[this.opts.timestampParam] = exports$1$2();
          }
          if (!this.supportsBinary && !query.sid) {
            query.b64 = 1;
          }
          if (this.opts.port && ("https" === schema && Number(this.opts.port) !== 443 || "http" === schema && Number(this.opts.port) !== 80)) {
            port = ":" + this.opts.port;
          }
          const encodedQuery = exports$2.encode(query);
          const ipv6 = this.opts.hostname.indexOf(":") !== -1;
          return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
        }
      }
      function empty() {
      }
      const hasXHR2 = (function () {
        const xhr = new XMLHttpRequest$1({ xdomain: false });
        return null != xhr.responseType;
      }());
      class XHR extends Polling {
        constructor(opts) {
          super(opts);
          if (typeof location !== "undefined") {
            const isSSL = "https:" === location.protocol;
            let port = location.port;
            if (!port) {
              port = isSSL ? "443" : "80";
            }
            this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
            this.xs = opts.secure !== isSSL;
          }
          const forceBase64 = opts && opts.forceBase64;
          this.supportsBinary = hasXHR2 && !forceBase64;
        }
        request(opts = {}) {
          Object.assign(opts, {
            xd: this.xd,
            xs: this.xs
          }, this.opts);
          return new Request(this.uri(), opts);
        }
        doWrite(data, fn) {
          const req = this.request({
            method: "POST",
            data: data
          });
          req.on("success", fn);
          req.on("error", err => {
            this.onError("xhr post error", err);
          });
        }
        doPoll() {
          const req = this.request();
          req.on("data", this.onData.bind(this));
          req.on("error", err => {
            this.onError("xhr poll error", err);
          });
          this.pollXhr = req;
        }
      }
      class Request extends _Emitter {
        constructor(uri, opts) {
          super();
          installTimerFunctions(this, opts);
          this.opts = opts;
          this.method = opts.method || "GET";
          this.uri = uri;
          this.async = false !== opts.async;
          this.data = undefined !== opts.data ? opts.data : null;
          this.create();
        }
        create() {
          const opts = pick(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
          opts.xdomain = !!this.opts.xd;
          opts.xscheme = !!this.opts.xs;
          const xhr = this.xhr = new XMLHttpRequest$1(opts);
          try {
            xhr.open(this.method, this.uri, this.async);
            try {
              if (this.opts.extraHeaders) {
                xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
                for (let i in this.opts.extraHeaders) {
                  if (this.opts.extraHeaders.hasOwnProperty(i)) {
                    xhr.setRequestHeader(i, this.opts.extraHeaders[i]);
                  }
                }
              }
            } catch (e) {
            }
            if ("POST" === this.method) {
              try {
                xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
              } catch (e) {
              }
            }
            try {
              xhr.setRequestHeader("Accept", "*/*");
            } catch (e) {
            }
            if ("withCredentials" in xhr) {
              xhr.withCredentials = this.opts.withCredentials;
            }
            if (this.opts.requestTimeout) {
              xhr.timeout = this.opts.requestTimeout;
            }
            xhr.onreadystatechange = () => {
              if (4 !== xhr.readyState)
                return;
              if (200 === xhr.status || 1223 === xhr.status) {
                this.onLoad();
              } else {
                this.setTimeoutFn(() => {
                  this.onError(typeof xhr.status === "number" ? xhr.status : 0);
                }, 0);
              }
            };
            xhr.send(this.data);
          } catch (e) {
            this.setTimeoutFn(() => {
              this.onError(e);
            }, 0);
            return;
          }
          if (typeof document !== "undefined") {
            this.index = Request.requestsCount++;
            Request.requests[this.index] = this;
          }
        }
        onSuccess() {
          this.emit("success");
          this.cleanup();
        }
        onData(data) {
          this.emit("data", data);
          this.onSuccess();
        }
        onError(err) {
          this.emit("error", err);
          this.cleanup(true);
        }
        cleanup(fromError) {
          if ("undefined" === typeof this.xhr || null === this.xhr) {
            return;
          }
          this.xhr.onreadystatechange = empty;
          if (fromError) {
            try {
              this.xhr.abort();
            } catch (e) {
            }
          }
          if (typeof document !== "undefined") {
            delete Request.requests[this.index];
          }
          this.xhr = null;
        }
        onLoad() {
          const data = this.xhr.responseText;
          if (data !== null) {
            this.onData(data);
          }
        }
        abort() {
          this.cleanup();
        }
      }
      Request.requestsCount = 0;
      Request.requests = {};
      if (typeof document !== "undefined") {
        if (typeof attachEvent === "function") {
          attachEvent("onunload", unloadHandler);
        } else if (typeof addEventListener === "function") {
          const terminationEvent = "onpagehide" in globalThis$1 ? "pagehide" : "unload";
          addEventListener(terminationEvent, unloadHandler, false);
        }
      }
      function unloadHandler() {
        for (let i in Request.requests) {
          if (Request.requests.hasOwnProperty(i)) {
            Request.requests[i].abort();
          }
        }
      }
      const nextTick = ((() => {
        const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
        if (isPromiseAvailable) {
          return cb => Promise.resolve().then(cb);
        } else {
          return (cb, setTimeoutFn) => setTimeoutFn(cb, 0);
        }
      })());
      const WebSocket = globalThis$1.WebSocket || globalThis$1.MozWebSocket;
      const usingBrowserWebSocket = true;
      const defaultBinaryType = "arraybuffer";
      const isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
      class WS extends Transport {
        constructor(opts) {
          super(opts);
          this.supportsBinary = !opts.forceBase64;
        }
        get name() {
          return "websocket";
        }
        doOpen() {
          if (!this.check()) {
            return;
          }
          const uri = this.uri();
          const protocols = this.opts.protocols;
          const opts = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
          if (this.opts.extraHeaders) {
            opts.headers = this.opts.extraHeaders;
          }
          try {
            this.ws = usingBrowserWebSocket && !isReactNative ? protocols ? new WebSocket(uri, protocols) : new WebSocket(uri) : new WebSocket(uri, protocols, opts);
          } catch (err) {
            return this.emit("error", err);
          }
          this.ws.binaryType = this.socket.binaryType || defaultBinaryType;
          this.addEventListeners();
        }
        addEventListeners() {
          this.ws.onopen = () => {
            if (this.opts.autoUnref) {
              this.ws._socket.unref();
            }
            this.onOpen();
          };
          this.ws.onclose = this.onClose.bind(this);
          this.ws.onmessage = ev => this.onData(ev.data);
          this.ws.onerror = e => this.onError("websocket error", e);
        }
        write(packets) {
          this.writable = false;
          for (let i = 0; i < packets.length; i++) {
            const packet = packets[i];
            const lastPacket = i === packets.length - 1;
            encodePacket(packet, this.supportsBinary, data => {
              const opts = {};
              try {
                if (usingBrowserWebSocket) {
                  this.ws.send(data);
                }
              } catch (e) {
              }
              if (lastPacket) {
                nextTick(() => {
                  this.writable = true;
                  this.emit("drain");
                }, this.setTimeoutFn);
              }
            });
          }
        }
        doClose() {
          if (typeof this.ws !== "undefined") {
            this.ws.close();
            this.ws = null;
          }
        }
        uri() {
          let query = this.query || {};
          const schema = this.opts.secure ? "wss" : "ws";
          let port = "";
          if (this.opts.port && ("wss" === schema && Number(this.opts.port) !== 443 || "ws" === schema && Number(this.opts.port) !== 80)) {
            port = ":" + this.opts.port;
          }
          if (this.opts.timestampRequests) {
            query[this.opts.timestampParam] = exports$1$2();
          }
          if (!this.supportsBinary) {
            query.b64 = 1;
          }
          const encodedQuery = exports$2.encode(query);
          const ipv6 = this.opts.hostname.indexOf(":") !== -1;
          return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
        }
        check() {
          return !!WebSocket && !("__initialize" in WebSocket && this.name === WS.prototype.name);
        }
      }
      const transports = {
        websocket: WS,
        polling: XHR
      };
      class Socket$1 extends _Emitter {
        constructor(uri, opts = {}) {
          super();
          if (uri && "object" === typeof uri) {
            opts = uri;
            uri = null;
          }
          if (uri) {
            uri = exports$1$4(uri);
            opts.hostname = uri.host;
            opts.secure = uri.protocol === "https" || uri.protocol === "wss";
            opts.port = uri.port;
            if (uri.query)
              opts.query = uri.query;
          } else if (opts.host) {
            opts.hostname = exports$1$4(opts.host).host;
          }
          installTimerFunctions(this, opts);
          this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
          if (opts.hostname && !opts.port) {
            opts.port = this.secure ? "443" : "80";
          }
          this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
          this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
          this.transports = opts.transports || [
            "polling",
            "websocket"
          ];
          this.readyState = "";
          this.writeBuffer = [];
          this.prevBufferLen = 0;
          this.opts = Object.assign({
            path: "/engine.io",
            agent: false,
            withCredentials: false,
            upgrade: true,
            timestampParam: "t",
            rememberUpgrade: false,
            rejectUnauthorized: true,
            perMessageDeflate: { threshold: 1024 },
            transportOptions: {},
            closeOnBeforeunload: true
          }, opts);
          this.opts.path = this.opts.path.replace(/\/$/, "") + "/";
          if (typeof this.opts.query === "string") {
            this.opts.query = exports$2.decode(this.opts.query);
          }
          this.id = null;
          this.upgrades = null;
          this.pingInterval = null;
          this.pingTimeout = null;
          this.pingTimeoutTimer = null;
          if (typeof addEventListener === "function") {
            if (this.opts.closeOnBeforeunload) {
              addEventListener("beforeunload", () => {
                if (this.transport) {
                  this.transport.removeAllListeners();
                  this.transport.close();
                }
              }, false);
            }
            if (this.hostname !== "localhost") {
              this.offlineEventListener = () => {
                this.onClose("transport close");
              };
              addEventListener("offline", this.offlineEventListener, false);
            }
          }
          this.open();
        }
        createTransport(name) {
          const query = clone(this.opts.query);
          query.EIO = protocol$1;
          query.transport = name;
          if (this.id)
            query.sid = this.id;
          const opts = Object.assign({}, this.opts.transportOptions[name], this.opts, {
            query,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port
          });
          return new transports[name](opts);
        }
        open() {
          let transport;
          if (this.opts.rememberUpgrade && Socket$1.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) {
            transport = "websocket";
          } else if (0 === this.transports.length) {
            this.setTimeoutFn(() => {
              this.emitReserved("error", "No transports available");
            }, 0);
            return;
          } else {
            transport = this.transports[0];
          }
          this.readyState = "opening";
          try {
            transport = this.createTransport(transport);
          } catch (e) {
            this.transports.shift();
            this.open();
            return;
          }
          transport.open();
          this.setTransport(transport);
        }
        setTransport(transport) {
          if (this.transport) {
            this.transport.removeAllListeners();
          }
          this.transport = transport;
          transport.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", () => {
            this.onClose("transport close");
          });
        }
        probe(name) {
          let transport = this.createTransport(name);
          let failed = false;
          Socket$1.priorWebsocketSuccess = false;
          const onTransportOpen = () => {
            if (failed)
              return;
            transport.send([{
                type: "ping",
                data: "probe"
              }]);
            transport.once("packet", msg => {
              if (failed)
                return;
              if ("pong" === msg.type && "probe" === msg.data) {
                this.upgrading = true;
                this.emitReserved("upgrading", transport);
                if (!transport)
                  return;
                Socket$1.priorWebsocketSuccess = "websocket" === transport.name;
                this.transport.pause(() => {
                  if (failed)
                    return;
                  if ("closed" === this.readyState)
                    return;
                  cleanup();
                  this.setTransport(transport);
                  transport.send([{ type: "upgrade" }]);
                  this.emitReserved("upgrade", transport);
                  transport = null;
                  this.upgrading = false;
                  this.flush();
                });
              } else {
                const err = new Error("probe error");
                err.transport = transport.name;
                this.emitReserved("upgradeError", err);
              }
            });
          };
          function freezeTransport() {
            if (failed)
              return;
            failed = true;
            cleanup();
            transport.close();
            transport = null;
          }
          const onerror = err => {
            const error = new Error("probe error: " + err);
            error.transport = transport.name;
            freezeTransport();
            this.emitReserved("upgradeError", error);
          };
          function onTransportClose() {
            onerror("transport closed");
          }
          function onclose() {
            onerror("socket closed");
          }
          function onupgrade(to) {
            if (transport && to.name !== transport.name) {
              freezeTransport();
            }
          }
          const cleanup = () => {
            transport.removeListener("open", onTransportOpen);
            transport.removeListener("error", onerror);
            transport.removeListener("close", onTransportClose);
            this.off("close", onclose);
            this.off("upgrading", onupgrade);
          };
          transport.once("open", onTransportOpen);
          transport.once("error", onerror);
          transport.once("close", onTransportClose);
          this.once("close", onclose);
          this.once("upgrading", onupgrade);
          transport.open();
        }
        onOpen() {
          this.readyState = "open";
          Socket$1.priorWebsocketSuccess = "websocket" === this.transport.name;
          this.emitReserved("open");
          this.flush();
          if ("open" === this.readyState && this.opts.upgrade && this.transport.pause) {
            let i = 0;
            const l = this.upgrades.length;
            for (; i < l; i++) {
              this.probe(this.upgrades[i]);
            }
          }
        }
        onPacket(packet) {
          if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
            this.emitReserved("packet", packet);
            this.emitReserved("heartbeat");
            switch (packet.type) {
            case "open":
              this.onHandshake(JSON.parse(packet.data));
              break;
            case "ping":
              this.resetPingTimeout();
              this.sendPacket("pong");
              this.emitReserved("ping");
              this.emitReserved("pong");
              break;
            case "error":
              const err = new Error("server error");
              err.code = packet.data;
              this.onError(err);
              break;
            case "message":
              this.emitReserved("data", packet.data);
              this.emitReserved("message", packet.data);
              break;
            }
          }
        }
        onHandshake(data) {
          this.emitReserved("handshake", data);
          this.id = data.sid;
          this.transport.query.sid = data.sid;
          this.upgrades = this.filterUpgrades(data.upgrades);
          this.pingInterval = data.pingInterval;
          this.pingTimeout = data.pingTimeout;
          this.onOpen();
          if ("closed" === this.readyState)
            return;
          this.resetPingTimeout();
        }
        resetPingTimeout() {
          this.clearTimeoutFn(this.pingTimeoutTimer);
          this.pingTimeoutTimer = this.setTimeoutFn(() => {
            this.onClose("ping timeout");
          }, this.pingInterval + this.pingTimeout);
          if (this.opts.autoUnref) {
            this.pingTimeoutTimer.unref();
          }
        }
        onDrain() {
          this.writeBuffer.splice(0, this.prevBufferLen);
          this.prevBufferLen = 0;
          if (0 === this.writeBuffer.length) {
            this.emitReserved("drain");
          } else {
            this.flush();
          }
        }
        flush() {
          if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
            this.transport.send(this.writeBuffer);
            this.prevBufferLen = this.writeBuffer.length;
            this.emitReserved("flush");
          }
        }
        write(msg, options, fn) {
          this.sendPacket("message", msg, options, fn);
          return this;
        }
        send(msg, options, fn) {
          this.sendPacket("message", msg, options, fn);
          return this;
        }
        sendPacket(type, data, options, fn) {
          if ("function" === typeof data) {
            fn = data;
            data = undefined;
          }
          if ("function" === typeof options) {
            fn = options;
            options = null;
          }
          if ("closing" === this.readyState || "closed" === this.readyState) {
            return;
          }
          options = options || {};
          options.compress = false !== options.compress;
          const packet = {
            type: type,
            data: data,
            options: options
          };
          this.emitReserved("packetCreate", packet);
          this.writeBuffer.push(packet);
          if (fn)
            this.once("flush", fn);
          this.flush();
        }
        close() {
          const close = () => {
            this.onClose("forced close");
            this.transport.close();
          };
          const cleanupAndClose = () => {
            this.off("upgrade", cleanupAndClose);
            this.off("upgradeError", cleanupAndClose);
            close();
          };
          const waitForUpgrade = () => {
            this.once("upgrade", cleanupAndClose);
            this.once("upgradeError", cleanupAndClose);
          };
          if ("opening" === this.readyState || "open" === this.readyState) {
            this.readyState = "closing";
            if (this.writeBuffer.length) {
              this.once("drain", () => {
                if (this.upgrading) {
                  waitForUpgrade();
                } else {
                  close();
                }
              });
            } else if (this.upgrading) {
              waitForUpgrade();
            } else {
              close();
            }
          }
          return this;
        }
        onError(err) {
          Socket$1.priorWebsocketSuccess = false;
          this.emitReserved("error", err);
          this.onClose("transport error", err);
        }
        onClose(reason, desc) {
          if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
            this.clearTimeoutFn(this.pingTimeoutTimer);
            this.transport.removeAllListeners("close");
            this.transport.close();
            this.transport.removeAllListeners();
            if (typeof removeEventListener === "function") {
              removeEventListener("offline", this.offlineEventListener, false);
            }
            this.readyState = "closed";
            this.id = null;
            this.emitReserved("close", reason, desc);
            this.writeBuffer = [];
            this.prevBufferLen = 0;
          }
        }
        filterUpgrades(upgrades) {
          const filteredUpgrades = [];
          let i = 0;
          const j = upgrades.length;
          for (; i < j; i++) {
            if (~this.transports.indexOf(upgrades[i]))
              filteredUpgrades.push(upgrades[i]);
          }
          return filteredUpgrades;
        }
      }
      Socket$1.protocol = protocol$1;
      function clone(obj) {
        const o = {};
        for (let i in obj) {
          if (obj.hasOwnProperty(i)) {
            o[i] = obj[i];
          }
        }
        return o;
      }
      Socket$1.protocol;

      const withNativeArrayBuffer = typeof ArrayBuffer === "function";
      const isView = obj => {
        return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
      };
      const toString = Object.prototype.toString;
      const withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
      const withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
      function isBinary(obj) {
        return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
      }
      function hasBinary(obj, toJSON) {
        if (!obj || typeof obj !== "object") {
          return false;
        }
        if (Array.isArray(obj)) {
          for (let i = 0, l = obj.length; i < l; i++) {
            if (hasBinary(obj[i])) {
              return true;
            }
          }
          return false;
        }
        if (isBinary(obj)) {
          return true;
        }
        if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
          return hasBinary(obj.toJSON(), true);
        }
        for (const key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
            return true;
          }
        }
        return false;
      }
      function deconstructPacket(packet) {
        const buffers = [];
        const packetData = packet.data;
        const pack = packet;
        pack.data = _deconstructPacket(packetData, buffers);
        pack.attachments = buffers.length;
        return {
          packet: pack,
          buffers: buffers
        };
      }
      function _deconstructPacket(data, buffers) {
        if (!data)
          return data;
        if (isBinary(data)) {
          const placeholder = {
            _placeholder: true,
            num: buffers.length
          };
          buffers.push(data);
          return placeholder;
        } else if (Array.isArray(data)) {
          const newData = new Array(data.length);
          for (let i = 0; i < data.length; i++) {
            newData[i] = _deconstructPacket(data[i], buffers);
          }
          return newData;
        } else if (typeof data === "object" && !(data instanceof Date)) {
          const newData = {};
          for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
              newData[key] = _deconstructPacket(data[key], buffers);
            }
          }
          return newData;
        }
        return data;
      }
      function reconstructPacket(packet, buffers) {
        packet.data = _reconstructPacket(packet.data, buffers);
        packet.attachments = undefined;
        return packet;
      }
      function _reconstructPacket(data, buffers) {
        if (!data)
          return data;
        if (data && data._placeholder) {
          return buffers[data.num];
        } else if (Array.isArray(data)) {
          for (let i = 0; i < data.length; i++) {
            data[i] = _reconstructPacket(data[i], buffers);
          }
        } else if (typeof data === "object") {
          for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
              data[key] = _reconstructPacket(data[key], buffers);
            }
          }
        }
        return data;
      }
      const protocol = 5;
      var PacketType;
      (function (PacketType) {
        PacketType[PacketType["CONNECT"] = 0] = "CONNECT";
        PacketType[PacketType["DISCONNECT"] = 1] = "DISCONNECT";
        PacketType[PacketType["EVENT"] = 2] = "EVENT";
        PacketType[PacketType["ACK"] = 3] = "ACK";
        PacketType[PacketType["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
        PacketType[PacketType["BINARY_EVENT"] = 5] = "BINARY_EVENT";
        PacketType[PacketType["BINARY_ACK"] = 6] = "BINARY_ACK";
      }(PacketType || (PacketType = {})));
      class Encoder {
        encode(obj) {
          if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
            if (hasBinary(obj)) {
              obj.type = obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK;
              return this.encodeAsBinary(obj);
            }
          }
          return [this.encodeAsString(obj)];
        }
        encodeAsString(obj) {
          let str = "" + obj.type;
          if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
            str += obj.attachments + "-";
          }
          if (obj.nsp && "/" !== obj.nsp) {
            str += obj.nsp + ",";
          }
          if (null != obj.id) {
            str += obj.id;
          }
          if (null != obj.data) {
            str += JSON.stringify(obj.data);
          }
          return str;
        }
        encodeAsBinary(obj) {
          const deconstruction = deconstructPacket(obj);
          const pack = this.encodeAsString(deconstruction.packet);
          const buffers = deconstruction.buffers;
          buffers.unshift(pack);
          return buffers;
        }
      }
      class Decoder extends _Emitter {
        constructor() {
          super();
        }
        add(obj) {
          let packet;
          if (typeof obj === "string") {
            packet = this.decodeString(obj);
            if (packet.type === PacketType.BINARY_EVENT || packet.type === PacketType.BINARY_ACK) {
              this.reconstructor = new BinaryReconstructor(packet);
              if (packet.attachments === 0) {
                super.emitReserved("decoded", packet);
              }
            } else {
              super.emitReserved("decoded", packet);
            }
          } else if (isBinary(obj) || obj.base64) {
            if (!this.reconstructor) {
              throw new Error("got binary data when not reconstructing a packet");
            } else {
              packet = this.reconstructor.takeBinaryData(obj);
              if (packet) {
                this.reconstructor = null;
                super.emitReserved("decoded", packet);
              }
            }
          } else {
            throw new Error("Unknown type: " + obj);
          }
        }
        decodeString(str) {
          let i = 0;
          const p = { type: Number(str.charAt(0)) };
          if (PacketType[p.type] === undefined) {
            throw new Error("unknown packet type " + p.type);
          }
          if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
            const start = i + 1;
            while (str.charAt(++i) !== "-" && i != str.length) {
            }
            const buf = str.substring(start, i);
            if (buf != Number(buf) || str.charAt(i) !== "-") {
              throw new Error("Illegal attachments");
            }
            p.attachments = Number(buf);
          }
          if ("/" === str.charAt(i + 1)) {
            const start = i + 1;
            while (++i) {
              const c = str.charAt(i);
              if ("," === c)
                break;
              if (i === str.length)
                break;
            }
            p.nsp = str.substring(start, i);
          } else {
            p.nsp = "/";
          }
          const next = str.charAt(i + 1);
          if ("" !== next && Number(next) == next) {
            const start = i + 1;
            while (++i) {
              const c = str.charAt(i);
              if (null == c || Number(c) != c) {
                --i;
                break;
              }
              if (i === str.length)
                break;
            }
            p.id = Number(str.substring(start, i + 1));
          }
          if (str.charAt(++i)) {
            const payload = tryParse(str.substr(i));
            if (Decoder.isPayloadValid(p.type, payload)) {
              p.data = payload;
            } else {
              throw new Error("invalid payload");
            }
          }
          return p;
        }
        static isPayloadValid(type, payload) {
          switch (type) {
          case PacketType.CONNECT:
            return typeof payload === "object";
          case PacketType.DISCONNECT:
            return payload === undefined;
          case PacketType.CONNECT_ERROR:
            return typeof payload === "string" || typeof payload === "object";
          case PacketType.EVENT:
          case PacketType.BINARY_EVENT:
            return Array.isArray(payload) && payload.length > 0;
          case PacketType.ACK:
          case PacketType.BINARY_ACK:
            return Array.isArray(payload);
          }
        }
        destroy() {
          if (this.reconstructor) {
            this.reconstructor.finishedReconstruction();
          }
        }
      }
      function tryParse(str) {
        try {
          return JSON.parse(str);
        } catch (e) {
          return false;
        }
      }
      class BinaryReconstructor {
        constructor(packet) {
          this.packet = packet;
          this.buffers = [];
          this.reconPack = packet;
        }
        takeBinaryData(binData) {
          this.buffers.push(binData);
          if (this.buffers.length === this.reconPack.attachments) {
            const packet = reconstructPacket(this.reconPack, this.buffers);
            this.finishedReconstruction();
            return packet;
          }
          return null;
        }
        finishedReconstruction() {
          this.reconPack = null;
          this.buffers = [];
        }
      }

      var parser = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Decoder: Decoder,
        Encoder: Encoder,
        get PacketType () { return PacketType; },
        protocol: protocol
      });

      var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
      var exports$1 = {};
      exports$1 = Backoff;
      function Backoff(opts) {
        opts = opts || {};
        (this || _global).ms = opts.min || 100;
        (this || _global).max = opts.max || 10000;
        (this || _global).factor = opts.factor || 2;
        (this || _global).jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
        (this || _global).attempts = 0;
      }
      Backoff.prototype.duration = function () {
        var ms = (this || _global).ms * Math.pow((this || _global).factor, (this || _global).attempts++);
        if ((this || _global).jitter) {
          var rand = Math.random();
          var deviation = Math.floor(rand * (this || _global).jitter * ms);
          ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
        }
        return Math.min(ms, (this || _global).max) | 0;
      };
      Backoff.prototype.reset = function () {
        (this || _global).attempts = 0;
      };
      Backoff.prototype.setMin = function (min) {
        (this || _global).ms = min;
      };
      Backoff.prototype.setMax = function (max) {
        (this || _global).max = max;
      };
      Backoff.prototype.setJitter = function (jitter) {
        (this || _global).jitter = jitter;
      };
      var exports$1$1 = exports$1;

      function url(uri, path = "", loc) {
        let obj = uri;
        loc = loc || typeof location !== "undefined" && location;
        if (null == uri)
          uri = loc.protocol + "//" + loc.host;
        if (typeof uri === "string") {
          if ("/" === uri.charAt(0)) {
            if ("/" === uri.charAt(1)) {
              uri = loc.protocol + uri;
            } else {
              uri = loc.host + uri;
            }
          }
          if (!/^(https?|wss?):\/\//.test(uri)) {
            if ("undefined" !== typeof loc) {
              uri = loc.protocol + "//" + uri;
            } else {
              uri = "https://" + uri;
            }
          }
          obj = exports$1$4(uri);
        }
        if (!obj.port) {
          if (/^(http|ws)$/.test(obj.protocol)) {
            obj.port = "80";
          } else if (/^(http|ws)s$/.test(obj.protocol)) {
            obj.port = "443";
          }
        }
        obj.path = obj.path || "/";
        const ipv6 = obj.host.indexOf(":") !== -1;
        const host = ipv6 ? "[" + obj.host + "]" : obj.host;
        obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
        obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
        return obj;
      }
      function on(obj, ev, fn) {
        obj.on(ev, fn);
        return function subDestroy() {
          obj.off(ev, fn);
        };
      }
      const RESERVED_EVENTS = Object.freeze({
        connect: 1,
        connect_error: 1,
        disconnect: 1,
        disconnecting: 1,
        newListener: 1,
        removeListener: 1
      });
      class Socket extends _Emitter {
        constructor(io, nsp, opts) {
          super();
          this.connected = false;
          this.disconnected = true;
          this.receiveBuffer = [];
          this.sendBuffer = [];
          this.ids = 0;
          this.acks = {};
          this.flags = {};
          this.io = io;
          this.nsp = nsp;
          if (opts && opts.auth) {
            this.auth = opts.auth;
          }
          if (this.io._autoConnect)
            this.open();
        }
        subEvents() {
          if (this.subs)
            return;
          const io = this.io;
          this.subs = [
            on(io, "open", this.onopen.bind(this)),
            on(io, "packet", this.onpacket.bind(this)),
            on(io, "error", this.onerror.bind(this)),
            on(io, "close", this.onclose.bind(this))
          ];
        }
        get active() {
          return !!this.subs;
        }
        connect() {
          if (this.connected)
            return this;
          this.subEvents();
          if (!this.io["_reconnecting"])
            this.io.open();
          if ("open" === this.io._readyState)
            this.onopen();
          return this;
        }
        open() {
          return this.connect();
        }
        send(...args) {
          args.unshift("message");
          this.emit.apply(this, args);
          return this;
        }
        emit(ev, ...args) {
          if (RESERVED_EVENTS.hasOwnProperty(ev)) {
            throw new Error("\"" + ev + "\" is a reserved event name");
          }
          args.unshift(ev);
          const packet = {
            type: PacketType.EVENT,
            data: args
          };
          packet.options = {};
          packet.options.compress = this.flags.compress !== false;
          if ("function" === typeof args[args.length - 1]) {
            const id = this.ids++;
            const ack = args.pop();
            this._registerAckCallback(id, ack);
            packet.id = id;
          }
          const isTransportWritable = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
          const discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);
          if (discardPacket) ; else if (this.connected) {
            this.packet(packet);
          } else {
            this.sendBuffer.push(packet);
          }
          this.flags = {};
          return this;
        }
        _registerAckCallback(id, ack) {
          const timeout = this.flags.timeout;
          if (timeout === undefined) {
            this.acks[id] = ack;
            return;
          }
          const timer = this.io.setTimeoutFn(() => {
            delete this.acks[id];
            for (let i = 0; i < this.sendBuffer.length; i++) {
              if (this.sendBuffer[i].id === id) {
                this.sendBuffer.splice(i, 1);
              }
            }
            ack.call(this, new Error("operation has timed out"));
          }, timeout);
          this.acks[id] = (...args) => {
            this.io.clearTimeoutFn(timer);
            ack.apply(this, [
              null,
              ...args
            ]);
          };
        }
        packet(packet) {
          packet.nsp = this.nsp;
          this.io._packet(packet);
        }
        onopen() {
          if (typeof this.auth == "function") {
            this.auth(data => {
              this.packet({
                type: PacketType.CONNECT,
                data
              });
            });
          } else {
            this.packet({
              type: PacketType.CONNECT,
              data: this.auth
            });
          }
        }
        onerror(err) {
          if (!this.connected) {
            this.emitReserved("connect_error", err);
          }
        }
        onclose(reason) {
          this.connected = false;
          this.disconnected = true;
          delete this.id;
          this.emitReserved("disconnect", reason);
        }
        onpacket(packet) {
          const sameNamespace = packet.nsp === this.nsp;
          if (!sameNamespace)
            return;
          switch (packet.type) {
          case PacketType.CONNECT:
            if (packet.data && packet.data.sid) {
              const id = packet.data.sid;
              this.onconnect(id);
            } else {
              this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
            }
            break;
          case PacketType.EVENT:
            this.onevent(packet);
            break;
          case PacketType.BINARY_EVENT:
            this.onevent(packet);
            break;
          case PacketType.ACK:
            this.onack(packet);
            break;
          case PacketType.BINARY_ACK:
            this.onack(packet);
            break;
          case PacketType.DISCONNECT:
            this.ondisconnect();
            break;
          case PacketType.CONNECT_ERROR:
            this.destroy();
            const err = new Error(packet.data.message);
            err.data = packet.data.data;
            this.emitReserved("connect_error", err);
            break;
          }
        }
        onevent(packet) {
          const args = packet.data || [];
          if (null != packet.id) {
            args.push(this.ack(packet.id));
          }
          if (this.connected) {
            this.emitEvent(args);
          } else {
            this.receiveBuffer.push(Object.freeze(args));
          }
        }
        emitEvent(args) {
          if (this._anyListeners && this._anyListeners.length) {
            const listeners = this._anyListeners.slice();
            for (const listener of listeners) {
              listener.apply(this, args);
            }
          }
          super.emit.apply(this, args);
        }
        ack(id) {
          const self = this;
          let sent = false;
          return function (...args) {
            if (sent)
              return;
            sent = true;
            self.packet({
              type: PacketType.ACK,
              id: id,
              data: args
            });
          };
        }
        onack(packet) {
          const ack = this.acks[packet.id];
          if ("function" === typeof ack) {
            ack.apply(this, packet.data);
            delete this.acks[packet.id];
          }
        }
        onconnect(id) {
          this.id = id;
          this.connected = true;
          this.disconnected = false;
          this.emitBuffered();
          this.emitReserved("connect");
        }
        emitBuffered() {
          this.receiveBuffer.forEach(args => this.emitEvent(args));
          this.receiveBuffer = [];
          this.sendBuffer.forEach(packet => this.packet(packet));
          this.sendBuffer = [];
        }
        ondisconnect() {
          this.destroy();
          this.onclose("io server disconnect");
        }
        destroy() {
          if (this.subs) {
            this.subs.forEach(subDestroy => subDestroy());
            this.subs = undefined;
          }
          this.io["_destroy"](this);
        }
        disconnect() {
          if (this.connected) {
            this.packet({ type: PacketType.DISCONNECT });
          }
          this.destroy();
          if (this.connected) {
            this.onclose("io client disconnect");
          }
          return this;
        }
        close() {
          return this.disconnect();
        }
        compress(compress) {
          this.flags.compress = compress;
          return this;
        }
        get volatile() {
          this.flags.volatile = true;
          return this;
        }
        timeout(timeout) {
          this.flags.timeout = timeout;
          return this;
        }
        onAny(listener) {
          this._anyListeners = this._anyListeners || [];
          this._anyListeners.push(listener);
          return this;
        }
        prependAny(listener) {
          this._anyListeners = this._anyListeners || [];
          this._anyListeners.unshift(listener);
          return this;
        }
        offAny(listener) {
          if (!this._anyListeners) {
            return this;
          }
          if (listener) {
            const listeners = this._anyListeners;
            for (let i = 0; i < listeners.length; i++) {
              if (listener === listeners[i]) {
                listeners.splice(i, 1);
                return this;
              }
            }
          } else {
            this._anyListeners = [];
          }
          return this;
        }
        listenersAny() {
          return this._anyListeners || [];
        }
      }
      class Manager extends _Emitter {
        constructor(uri, opts) {
          var _a;
          super();
          this.nsps = {};
          this.subs = [];
          if (uri && "object" === typeof uri) {
            opts = uri;
            uri = undefined;
          }
          opts = opts || {};
          opts.path = opts.path || "/socket.io";
          this.opts = opts;
          installTimerFunctions(this, opts);
          this.reconnection(opts.reconnection !== false);
          this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
          this.reconnectionDelay(opts.reconnectionDelay || 1000);
          this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
          this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
          this.backoff = new exports$1$1({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
          });
          this.timeout(null == opts.timeout ? 20000 : opts.timeout);
          this._readyState = "closed";
          this.uri = uri;
          const _parser = opts.parser || parser;
          this.encoder = new _parser.Encoder();
          this.decoder = new _parser.Decoder();
          this._autoConnect = opts.autoConnect !== false;
          if (this._autoConnect)
            this.open();
        }
        reconnection(v) {
          if (!arguments.length)
            return this._reconnection;
          this._reconnection = !!v;
          return this;
        }
        reconnectionAttempts(v) {
          if (v === undefined)
            return this._reconnectionAttempts;
          this._reconnectionAttempts = v;
          return this;
        }
        reconnectionDelay(v) {
          var _a;
          if (v === undefined)
            return this._reconnectionDelay;
          this._reconnectionDelay = v;
          (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
          return this;
        }
        randomizationFactor(v) {
          var _a;
          if (v === undefined)
            return this._randomizationFactor;
          this._randomizationFactor = v;
          (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
          return this;
        }
        reconnectionDelayMax(v) {
          var _a;
          if (v === undefined)
            return this._reconnectionDelayMax;
          this._reconnectionDelayMax = v;
          (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
          return this;
        }
        timeout(v) {
          if (!arguments.length)
            return this._timeout;
          this._timeout = v;
          return this;
        }
        maybeReconnectOnOpen() {
          if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
            this.reconnect();
          }
        }
        open(fn) {
          if (~this._readyState.indexOf("open"))
            return this;
          this.engine = new Socket$1(this.uri, this.opts);
          const socket = this.engine;
          const self = this;
          this._readyState = "opening";
          this.skipReconnect = false;
          const openSubDestroy = on(socket, "open", function () {
            self.onopen();
            fn && fn();
          });
          const errorSub = on(socket, "error", err => {
            self.cleanup();
            self._readyState = "closed";
            this.emitReserved("error", err);
            if (fn) {
              fn(err);
            } else {
              self.maybeReconnectOnOpen();
            }
          });
          if (false !== this._timeout) {
            const timeout = this._timeout;
            if (timeout === 0) {
              openSubDestroy();
            }
            const timer = this.setTimeoutFn(() => {
              openSubDestroy();
              socket.close();
              socket.emit("error", new Error("timeout"));
            }, timeout);
            if (this.opts.autoUnref) {
              timer.unref();
            }
            this.subs.push(function subDestroy() {
              clearTimeout(timer);
            });
          }
          this.subs.push(openSubDestroy);
          this.subs.push(errorSub);
          return this;
        }
        connect(fn) {
          return this.open(fn);
        }
        onopen() {
          this.cleanup();
          this._readyState = "open";
          this.emitReserved("open");
          const socket = this.engine;
          this.subs.push(on(socket, "ping", this.onping.bind(this)), on(socket, "data", this.ondata.bind(this)), on(socket, "error", this.onerror.bind(this)), on(socket, "close", this.onclose.bind(this)), on(this.decoder, "decoded", this.ondecoded.bind(this)));
        }
        onping() {
          this.emitReserved("ping");
        }
        ondata(data) {
          this.decoder.add(data);
        }
        ondecoded(packet) {
          this.emitReserved("packet", packet);
        }
        onerror(err) {
          this.emitReserved("error", err);
        }
        socket(nsp, opts) {
          let socket = this.nsps[nsp];
          if (!socket) {
            socket = new Socket(this, nsp, opts);
            this.nsps[nsp] = socket;
          }
          return socket;
        }
        _destroy(socket) {
          const nsps = Object.keys(this.nsps);
          for (const nsp of nsps) {
            const socket = this.nsps[nsp];
            if (socket.active) {
              return;
            }
          }
          this._close();
        }
        _packet(packet) {
          const encodedPackets = this.encoder.encode(packet);
          for (let i = 0; i < encodedPackets.length; i++) {
            this.engine.write(encodedPackets[i], packet.options);
          }
        }
        cleanup() {
          this.subs.forEach(subDestroy => subDestroy());
          this.subs.length = 0;
          this.decoder.destroy();
        }
        _close() {
          this.skipReconnect = true;
          this._reconnecting = false;
          this.onclose("forced close");
          if (this.engine)
            this.engine.close();
        }
        disconnect() {
          return this._close();
        }
        onclose(reason) {
          this.cleanup();
          this.backoff.reset();
          this._readyState = "closed";
          this.emitReserved("close", reason);
          if (this._reconnection && !this.skipReconnect) {
            this.reconnect();
          }
        }
        reconnect() {
          if (this._reconnecting || this.skipReconnect)
            return this;
          const self = this;
          if (this.backoff.attempts >= this._reconnectionAttempts) {
            this.backoff.reset();
            this.emitReserved("reconnect_failed");
            this._reconnecting = false;
          } else {
            const delay = this.backoff.duration();
            this._reconnecting = true;
            const timer = this.setTimeoutFn(() => {
              if (self.skipReconnect)
                return;
              this.emitReserved("reconnect_attempt", self.backoff.attempts);
              if (self.skipReconnect)
                return;
              self.open(err => {
                if (err) {
                  self._reconnecting = false;
                  self.reconnect();
                  this.emitReserved("reconnect_error", err);
                } else {
                  self.onreconnect();
                }
              });
            }, delay);
            if (this.opts.autoUnref) {
              timer.unref();
            }
            this.subs.push(function subDestroy() {
              clearTimeout(timer);
            });
          }
        }
        onreconnect() {
          const attempt = this.backoff.attempts;
          this._reconnecting = false;
          this.backoff.reset();
          this.emitReserved("reconnect", attempt);
        }
      }
      const cache = {};
      function lookup(uri, opts) {
        if (typeof uri === "object") {
          opts = uri;
          uri = undefined;
        }
        opts = opts || {};
        const parsed = url(uri, opts.path || "/socket.io");
        const source = parsed.source;
        const id = parsed.id;
        const path = parsed.path;
        const sameNamespace = cache[id] && path in cache[id]["nsps"];
        const newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
        let io;
        if (newConnection) {
          io = new Manager(source, opts);
        } else {
          if (!cache[id]) {
            cache[id] = new Manager(source, opts);
          }
          io = cache[id];
        }
        if (parsed.query && !opts.query) {
          opts.query = parsed.queryKey;
        }
        return io.socket(parsed.path, opts);
      }
      Object.assign(lookup, {
        Manager,
        Socket,
        io: lookup,
        connect: lookup
      });

      var __varRecorder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.2lively/client.js", __contextModule__);

      var __moduleMeta__ = {
        pathInPackage: function pathInPackage() {
          return "./client.js";
        },
        unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
          return function () {};
        },
        subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
          return function () {};
        },
        "package": function _package() {
          return {
            name: "lively.2lively",
            version: "0.1.1"
          };
        }
      };

      var determineLocation = __varRecorder__["lively.2lively/client.js__define__"]("determineLocation", "function", function () {
        if (typeof document !== "undefined" && document.location) {
          return System.baseURL || document.location.origin;
        }

        if (__varRecorder__.isNode) {
          return System._nodeRequire("os").hostname();
        }

        return System.baseURL;
      }, __moduleMeta__);

      __varRecorder__.determineLocation = determineLocation;
      __varRecorder__.isNode = typeof System !== "undefined" ? System.get("@system-env").node : typeof process !== "undefined" && process.env;
      __varRecorder__.ioClient = __varRecorder__.ioClient || undefined;

      if (__varRecorder__.isNode) {
        var require = System._nodeRequire("module")._load;

        __varRecorder__.ioClient = require("socket.io-client");
      } else {
        __varRecorder__.ioClient = lookup;
      }

      __varRecorder__.urlHelper = {
        isRoot: function isRoot(url) {
          return __varRecorder__.urlHelper.path(url) === "/";
        },
        root: function root(url) {
          return __varRecorder__.urlHelper.isRoot(url) ? url : url.slice(0, -__varRecorder__.urlHelper.path(url).length) + "/";
        },
        path: function () {
          var protocolRe = /^[a-z0-9-_\.]+:/;
          var slashslashRe = /^\/\/[^\/]+/;
          return function (url) {
            var path = url.replace(protocolRe, "").replace(slashslashRe, "");
            return path === "" ? "/" : path;
          };
        }(),
        join: function join(url, path) {
          if (url.endsWith("/")) url = url.slice(0, -1);
          if (path.startsWith("/")) path = path.slice(1);
          return url + "/" + path;
        }
      };
      __varRecorder__._clients = __varRecorder__._clients || undefined;
      __varRecorder__._clients = __varRecorder__._clients || new Map();

      var L2LClient = exports('default', /*#__PURE__*/function (_L2LConnection) {
        _inherits(L2LClient, _L2LConnection);

        var _super = _createSuper(L2LClient);

        _createClass(L2LClient, null, [{
          key: "clientKey",
          value: function clientKey(origin, path, namespace) {
            origin = origin.replace(/\/$/, "");
            path = path.replace(/^\//, "");
            namespace = namespace.replace(/^\//, "");
            return "".concat(origin, "-").concat(path, "-").concat(namespace);
          }
        }, {
          key: "forLivelyInBrowser",
          value: function forLivelyInBrowser(info) {
            var hasInfo = !!info;
            info = Object.assign({
              type: "lively.morphic browser"
            }, info);
            var def = this["default"]();

            if (!def) {
              return __varRecorder__.L2LClient.ensure({
                url: resource(__varRecorder__.determineLocation()).join("/lively-socket.io").url,
                namespace: "l2l",
                info: info
              });
            }

            if (hasInfo && !equals(def.info, info) && def.isRegistered()) {
              def.info = info;
              def.unregister().then(function () {
                return def.register();
              })["catch"](function (err) {
                return console.error("l2l re-register on info change errored: " + err);
              });
            }

            return def;
          }
        }, {
          key: "default",
          value: function _default() {
            var key = __varRecorder__.L2LClient.clients.keys().next().value;

            return __varRecorder__.L2LClient.clients.get(key);
          }
        }, {
          key: "create",
          value: function create() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var _options$debug = options.debug,
                debug = _options$debug === void 0 ? false : _options$debug,
                url = options.url,
                namespace = options.namespace,
                _options$autoOpen = options.autoOpen,
                autoOpen = _options$autoOpen === void 0 ? true : _options$autoOpen,
                _options$info = options.info,
                info = _options$info === void 0 ? {} : _options$info;
            if (!url) throw new Error("L2LClient needs server url!");

            var origin = __varRecorder__.urlHelper.root(url).replace(/\/+$/, "");

            var path = __varRecorder__.urlHelper.path(url);

            var client = new this(origin, path, namespace || "", info);
            if (autoOpen) client.register();
            client.debug = debug;
            return client;
          }
        }, {
          key: "ensure",
          value: function ensure() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var url = options.url,
                namespace = options.namespace;
            if (!url) throw new Error("L2LClient needs server url!");

            var origin = __varRecorder__.urlHelper.root(url).replace(/\/+$/, "");

            var path = __varRecorder__.urlHelper.path(url);

            var key = __varRecorder__.L2LClient.clientKey(origin, path, namespace || "");

            var client = __varRecorder__.L2LClient.clients.get(key);

            if (!client) {
              __varRecorder__.L2LClient.clients.set(key, client = __varRecorder__.L2LClient.create(Object.assign({}, options, {
                url: url,
                namespace: namespace
              })));
            }

            return client;
          }
        }, {
          key: "clients",
          get: function get() {
            return __varRecorder__._clients;
          }
        }]);

        function L2LClient(origin, path, namespace, info) {
          var _this;

          _classCallCheck(this, L2LClient);

          _this = _super.call(this);
          makeEmitter(_assertThisInitialized(_this));
          _this.info = info;
          _this.origin = origin;
          _this.path = path;
          _this.namespace = namespace.replace(/^\/?/, "/");
          _this.trackerId = null;
          _this._socketioClient = null;
          _this._reconnectState = {
            closed: false,
            autoReconnect: true,
            isReconnecting: false,
            isReconnectingViaSocketio: false,
            registerAttempt: 0,
            registerProcess: null,
            isOpening: false
          };
          Object.keys(defaultActions).forEach(function (name) {
            return _this.addService(name, defaultActions[name]);
          });
          Object.keys(defaultClientActions).forEach(function (name) {
            return _this.addService(name, defaultClientActions[name]);
          });
          return _this;
        }

        _createClass(L2LClient, [{
          key: "isOnline",
          value: function isOnline() {
            return this.socket && this.socket.connected;
          }
        }, {
          key: "isRegistered",
          value: function isRegistered() {
            return this.isOnline() && !!this.trackerId;
          }
        }, {
          key: "open",
          value: function () {
            var _open = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var url, opts, socket;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!this.isOnline()) {
                        _context.next = 2;
                        break;
                      }

                      return _context.abrupt("return", this);

                    case 2:
                      if (!this._reconnectState.isOpening) {
                        _context.next = 4;
                        break;
                      }

                      return _context.abrupt("return", this);

                    case 4:
                      _context.next = 6;
                      return this.close();

                    case 6:
                      this._reconnectState.closed = false;
                      url = __varRecorder__.urlHelper.join(this.origin, this.namespace);
                      opts = {
                        path: this.path,
                        transports: ["websocket", "polling"]
                      };
                      socket = this._socketioClient = __varRecorder__.ioClient(url, opts);
                      if (this.debug) console.log("[".concat(this, "] connecting"));
                      socket.on("error", function (err) {
                        _this2._reconnectState.isOpening = false;
                        _this2.debug && console.log("[".concat(_this2, "] errored: ").concat(err));
                      });
                      socket.on("close", function (reason) {
                        return _this2.debug && console.log("[".concat(_this2, "] closed: ").concat(reason));
                      });
                      socket.on("reconnect_failed", function () {
                        return _this2.debug && console.log("[".concat(_this2, "] could not reconnect"));
                      });
                      socket.on("reconnect_error", function (err) {
                        return _this2.debug && console.log("[".concat(_this2, "] reconnect error ").concat(err));
                      });
                      socket.on("connect", function () {
                        _this2.debug && console.log("[".concat(_this2, "] connected"));

                        _this2.emit("connected", _this2);

                        _this2._reconnectState.isOpening = false;
                        _this2._reconnectState.isReconnecting = false;
                        _this2._reconnectState.isReconnectingViaSocketio = false;
                      });
                      socket.on("disconnect", function () {
                        _this2._reconnectState.isOpening = false;
                        _this2.debug && console.log("[".concat(_this2, "] disconnected"));

                        _this2.emit("disconnected", _this2);

                        if (!_this2.trackerId) {
                          _this2.debug && console.log("[".concat(_this2, "] disconnect: don't have a tracker id, won't try reconnect"));
                          _this2.trackerId = "tracker";
                          return;
                        }

                        if (_this2.trackerId !== "tracker") {
                          _this2.renameTarget(_this2.trackerId, "tracker");

                          _this2.trackerId = null;
                        }

                        if (_this2._reconnectState.closed) {
                          _this2.debug && console.log("[".concat(_this2, "] won't reconnect b/c client is marked as closed"));
                          return;
                        }

                        if (!_this2._reconnectState.autoReconnect) {
                          _this2.debug && console.log("[".concat(_this2, "] won't reconnect b/c client has reconnection disabled"));
                          return;
                        }

                        _this2._reconnectState.isReconnecting = true;
                        setTimeout(function () {
                          if (_this2._reconnectState.closed) {
                            _this2.debug && console.log("[".concat(_this2, "] won't reconnect b/c client is marked as closed 2"));
                            return;
                          }

                          if (_this2._reconnectState.isReconnectingViaSocketio) {
                            _this2.debug && console.log("[".concat(_this2, "] won't reconnect again, client already reconnecting"));
                            return;
                          }

                          _this2.debug && console.log("[".concat(_this2, "] initiating reconnection to tracker"));

                          _this2.register();
                        }, 20);
                      });
                      socket.on("reconnecting", function () {
                        _this2.debug && console.log("[".concat(_this2, "] reconnecting"), _this2._reconnectState);

                        _this2.emit("reconnecting", _this2);

                        if (_this2._reconnectState.closed) {
                          _this2._reconnectState.isReconnecting = false;
                          _this2._reconnectState.isReconnectingViaSocketio = false;
                          socket.close();

                          _this2.close();
                        } else {
                          _this2._reconnectState.isReconnecting = true;
                          _this2._reconnectState.isReconnectingViaSocketio = true;
                        }
                      });
                      socket.on("reconnect", function () {
                        _this2.debug && console.log("[".concat(_this2, "] reconnected"));
                        _this2._reconnectState.isReconnecting = false;
                        _this2._reconnectState.isReconnectingViaSocketio = false;

                        _this2.register();

                        if (_this2.onReconnect && typeof _this2.onReconnect === "function") {
                          _this2.onReconnect();
                        }
                      });
                      this.installEventToMessageTranslator(socket);
                      this._reconnectState.isOpening = true;
                      return _context.abrupt("return", new Promise(function (resolve, reject) {
                        socket.once("error", reject);
                        socket.once("connect", resolve);
                      }).then(function () {
                        return _this2;
                      }));

                    case 22:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function open() {
              return _open.apply(this, arguments);
            }

            return open;
          }()
        }, {
          key: "onReconnect",
          value: function () {
            var _onReconnect = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var dateString;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      dateString = new Date().toTimeString();
                      console.log("Reconnected at ".concat(dateString));

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));

            function onReconnect() {
              return _onReconnect.apply(this, arguments);
            }

            return onReconnect;
          }()
        }, {
          key: "close",
          value: function () {
            var _close = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this3 = this;

              var socket, reason;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this._reconnectState.closed = true;
                      socket = this.socket;

                      if (socket) {
                        socket.removeAllListeners("reconnect");
                        socket.removeAllListeners("reconnecting");
                        socket.removeAllListeners("disconnect");
                        socket.removeAllListeners("connect");
                        socket.removeAllListeners("reconnect_error");
                        socket.removeAllListeners("reconnect_failed");
                        socket.removeAllListeners("close");
                        socket.removeAllListeners("error");
                        socket.close();
                      }

                      this.debug && console.log("[".concat(this, "] closing..."));

                      if (!this.isRegistered()) {
                        _context3.next = 7;
                        break;
                      }

                      _context3.next = 7;
                      return this.unregister();

                    case 7:
                      if (!(!this.isOnline() && !this.socket)) {
                        _context3.next = 10;
                        break;
                      }

                      if (this.debug) {
                        reason = !this.isOnline() ? "not online" : "no socket";
                        this.debug && console.log("[".concat(this, "] cannot close: ").concat(reason));
                      }

                      return _context3.abrupt("return", this);

                    case 10:
                      if (!(socket && !socket.connected)) {
                        _context3.next = 13;
                        break;
                      }

                      this.debug && console.log("[".concat(this, "] socket not connected, considering client closed"));
                      return _context3.abrupt("return", this);

                    case 13:
                      return _context3.abrupt("return", Promise.race([delay(2000).then(function () {
                        return socket.removeAllListeners("disconnect");
                      }), new Promise(function (resolve) {
                        return socket.once("disconnect", resolve);
                      })]).then(function () {
                        _this3.debug && console.log("[".concat(_this3, "] closed"));
                        return _this3;
                      }));

                    case 14:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function close() {
              return _close.apply(this, arguments);
            }

            return close;
          }()
        }, {
          key: "remove",
          value: function remove() {
            var origin = this.origin,
                path = this.path,
                namespace = this.namespace;
            var key = this.constructor.clientKey(origin, path, namespace);
            this.constructor.clients["delete"](key);
            return this.close();
          }
        }, {
          key: "register",
          value: function () {
            var _register = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this4 = this;

              var answer, err, _err, _answer$data, trackerId, messageNumber, attempt, timeout;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (!this.isRegistered()) {
                        _context4.next = 2;
                        break;
                      }

                      return _context4.abrupt("return");

                    case 2:
                      if (!this._reconnectState.closed) {
                        _context4.next = 6;
                        break;
                      }

                      this.debug && console.log("[".concat(this, "] not registering this b/c closed"));
                      this._reconnectState.registerAttempt = 0;
                      return _context4.abrupt("return");

                    case 6:
                      if (!this._reconnectState.registerProcess) {
                        _context4.next = 9;
                        break;
                      }

                      this.debug && console.log("[".concat(this, "] not registering this b/c register process exists"));
                      return _context4.abrupt("return");

                    case 9:
                      _context4.prev = 9;

                      if (this.isOnline()) {
                        _context4.next = 13;
                        break;
                      }

                      _context4.next = 13;
                      return this.open();

                    case 13:
                      this.debug && console.log("[".concat(this, "] register"));
                      _context4.next = 16;
                      return this.sendToAndWait("tracker", "register", Object.assign({
                        userName: "unknown",
                        type: "l2l " + (__varRecorder__.isNode ? "node" : "browser"),
                        location: __varRecorder__.determineLocation()
                      }, this.info));

                    case 16:
                      answer = _context4.sent;

                      if (answer.data) {
                        _context4.next = 21;
                        break;
                      }

                      err = new Error("Register answer is empty!");
                      this.emit("error", err);
                      throw err;

                    case 21:
                      if (!answer.data.isError) {
                        _context4.next = 25;
                        break;
                      }

                      _err = new Error(answer.data.error);
                      this.emit("error", _err);
                      throw _err;

                    case 25:
                      this._reconnectState.registerAttempt = 0;
                      _answer$data = answer.data, trackerId = _answer$data.trackerId, messageNumber = _answer$data.messageNumber;
                      this.trackerId = trackerId;

                      this._incomingOrderNumberingBySenders.set(trackerId, messageNumber || 0);

                      this.emit("registered", {
                        trackerId: trackerId
                      });

                      if (this.onReconnect && typeof this.onReconnect === "function") {
                        this.onReconnect();
                      }

                      _context4.next = 39;
                      break;

                    case 33:
                      _context4.prev = 33;
                      _context4.t0 = _context4["catch"](9);
                      console.error("Error in register request of ".concat(this, ": ").concat(_context4.t0));
                      attempt = this._reconnectState.registerAttempt++;
                      timeout = backoff(attempt, 4, 5 * 60 * 1000);
                      this._reconnectState.registerProcess = setTimeout(function () {
                        _this4._reconnectState.registerProcess = null;

                        _this4.register();
                      }, timeout);

                    case 39:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this, [[9, 33]]);
            }));

            function register() {
              return _register.apply(this, arguments);
            }

            return register;
          }()
        }, {
          key: "unregister",
          value: function () {
            var _unregister = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var trackerId;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      if (this.isRegistered()) {
                        _context5.next = 2;
                        break;
                      }

                      return _context5.abrupt("return");

                    case 2:
                      this.debug && console.log("[".concat(this, "] unregister"));
                      trackerId = this.trackerId;
                      _context5.prev = 4;
                      _context5.next = 7;
                      return this.sendToAndWait(this.trackerId, "unregister", {});

                    case 7:
                      _context5.next = 11;
                      break;

                    case 9:
                      _context5.prev = 9;
                      _context5.t0 = _context5["catch"](4);

                    case 11:
                      this.renameTarget(trackerId, "tracker");
                      this.trackerId = null;
                      this.emit("unregistered", this);

                    case 14:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this, [[4, 9]]);
            }));

            function unregister() {
              return _unregister.apply(this, arguments);
            }

            return unregister;
          }()
        }, {
          key: "whenRegistered",
          value: function whenRegistered(timeout) {
            var _this5 = this;

            return waitFor(timeout, function () {
              return _this5.isRegistered();
            })["catch"](function (err) {
              return Promise.reject(/timeout/i.test(String(err)) ? new Error("Timeout in ".concat(_this5, ".whenRegistered")) : err);
            });
          }
        }, {
          key: "send",
          value: function send(msg, ackFn) {
            var _this6 = this;

            var _this$prepareSend = this.prepareSend(msg, ackFn);

            var _this$prepareSend2 = _slicedToArray(_this$prepareSend, 2);

            msg = _this$prepareSend2[0];
            ackFn = _this$prepareSend2[1];
            this.whenOnline().then(function () {
              var socket = _this6.socket;
              var _msg = msg,
                  action = _msg.action,
                  target = _msg.target;
              if (!socket) throw new Error("Trying to send message ".concat(action, " to ").concat(target, " but cannot find a connection to it!"));
              typeof ackFn === "function" ? socket.emit(action, msg, ackFn) : socket.emit(action, msg);
            });
          }
        }, {
          key: "joinRoom",
          value: function joinRoom(room) {
            var _this7 = this;

            return this.whenOnline().then(function () {
              return _this7.sendToAndWait(_this7.trackerId, "[broadcast] join room", {
                room: room
              });
            });
          }
        }, {
          key: "leaveRoom",
          value: function leaveRoom(room) {
            var _this8 = this;

            return this.whenOnline().then(function () {
              return _this8.sendToAndWait(_this8.trackerId, "[broadcast] leave room", {
                room: room
              });
            });
          }
        }, {
          key: "broadcast",
          value: function broadcast(room, action, data) {
            var _this9 = this;

            var isSystemBroadcast = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
            var isMultiServerBroadcast = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
            var broadcast = {
              action: action,
              room: room,
              broadcast: data
            };

            if (isSystemBroadcast) {
              broadcast.isSystemBroadcast = true;
            }

            if (isMultiServerBroadcast) {
              broadcast.isMultiServerBroadcast = true;
            }

            return this.whenOnline().then(function () {
              return _this9.sendToAndWait(_this9.trackerId, "[broadcast] send", broadcast);
            });
          }
        }, {
          key: "listRoomMembers",
          value: function () {
            var _listRoomMembers = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(room) {
              var _yield$this$sendToAnd, data;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.sendToAndWait(this.trackerId, "[broadcast] list room members", {
                        room: room
                      });

                    case 2:
                      _yield$this$sendToAnd = _context6.sent;
                      data = _yield$this$sendToAnd.data;
                      return _context6.abrupt("return", data);

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function listRoomMembers(_x) {
              return _listRoomMembers.apply(this, arguments);
            }

            return listRoomMembers;
          }()
        }, {
          key: "joinedRooms",
          value: function () {
            var _joinedRooms = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _yield$this$sendToAnd2, data;

              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.sendToAndWait(this.trackerId, "[broadcast] my rooms", {});

                    case 2:
                      _yield$this$sendToAnd2 = _context7.sent;
                      data = _yield$this$sendToAnd2.data;
                      return _context7.abrupt("return", data);

                    case 5:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            function joinedRooms() {
              return _joinedRooms.apply(this, arguments);
            }

            return joinedRooms;
          }()
        }, {
          key: "listRooms",
          value: function () {
            var _listRooms = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _yield$this$sendToAnd3, data;

              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.sendToAndWait(this.trackerId, "[broadcast] all rooms", {});

                    case 2:
                      _yield$this$sendToAnd3 = _context8.sent;
                      data = _yield$this$sendToAnd3.data;
                      return _context8.abrupt("return", data);

                    case 5:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function listRooms() {
              return _listRooms.apply(this, arguments);
            }

            return listRooms;
          }()
        }, {
          key: "listPeers",
          value: function () {
            var _listPeers = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var force,
                  _peersCached,
                  t,
                  timeout,
                  _yield$this$sendToAnd4,
                  data,
                  sessions,
                  _args9 = arguments;

              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      force = _args9.length > 0 && _args9[0] !== undefined ? _args9[0] : false;
                      _peersCached = this._peersCached;
                      t = Date.now();
                      timeout = 1000;

                      if (!(!force && _peersCached && t - _peersCached.timestamp < timeout)) {
                        _context9.next = 6;
                        break;
                      }

                      return _context9.abrupt("return", this._peersCached.sessions);

                    case 6:
                      if (this.isRegistered()) {
                        _context9.next = 8;
                        break;
                      }

                      return _context9.abrupt("return", []);

                    case 8:
                      _context9.next = 10;
                      return this.sendToAndWait(this.trackerId, "getClients", {});

                    case 10:
                      _yield$this$sendToAnd4 = _context9.sent;
                      data = _yield$this$sendToAnd4.data;
                      sessions = data.map(function (_ref) {
                        var _ref2 = _slicedToArray(_ref, 2),
                            id = _ref2[0],
                            record = _ref2[1];

                        var _ref3 = record.info || {},
                            userRealm = _ref3.userRealm,
                            userToken = _ref3.userToken,
                            l2lUserToken = _ref3.l2lUserToken,
                            location = _ref3.location,
                            type = _ref3.type,
                            world = _ref3.world;

                        var peer = Object.assign({}, dissoc(record, ["info"]), {
                          id: id,
                          world: world,
                          location: location,
                          type: type
                        });
                        userToken = userToken || l2lUserToken;

                        if (userToken && userToken !== "null") {
                          peer.userToken = userToken;
                          peer.userRealm = userRealm;
                        }

                        return peer;
                      });
                      this._peersCached = {
                        timestamp: t,
                        sessions: sessions
                      };
                      return _context9.abrupt("return", sessions);

                    case 15:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));

            function listPeers() {
              return _listPeers.apply(this, arguments);
            }

            return listPeers;
          }()
        }, {
          key: "toString",
          value: function toString() {
            var origin = this.origin,
                path = this.path,
                namespace = this.namespace,
                id = this.id;
            var state = !this.isOnline() ? "disconnected" : !this.isRegistered() ? "unregistered" : "registered";
            var shortId = (id || "").slice(0, 5);
            return "L2LClient(".concat(shortId, " ").concat(origin).concat(path, " - ").concat(namespace, " ").concat(state, ")");
          }
        }, {
          key: "socket",
          get: function get() {
            return this._socketioClient;
          }
        }, {
          key: "socketId",
          get: function get() {
            return this.socket ? this.socket.id : null;
          }
        }]);

        return L2LClient;
      }(L2LConnection));
      __varRecorder__.L2LClient = L2LClient;
      __varRecorder__["default"] = L2LClient;

    })
  };
}));
