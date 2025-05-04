System.register(['./__rootModule___commonjs-entry-039abf1b.js', './index-0250cb25.js', './ui.cp-d94265c2.js', './index-d97f22af.js', './loading-indicator.cp-668e5ddc.js', './index-d0172adc.js', './list.cp-50d496c7.js', './client-fb647a5a.js', './editor-modes-0f820fa8.js', './search-cf1a5c4c.js', './shell-interface-e2437883.js', './client-command-99e40f2e.js', './index-009b6510.js'], (function (exports) {
  var __contextModule__ = typeof module !== 'undefined' ? module : arguments[1];
;
  var rect, Color, without, pt, morph, once, _asyncToGenerator, _toConsumableArray, _typeof, _defineProperty, connect, Leash, _missingExportShim, show, InteractiveMorphSelector, classToFunctionTransform;
  return {
    setters: [function (module) {
      rect = module.ap;
      Color = module.C;
      without = module.aQ;
      pt = module.b;
      morph = module.aZ;
      once = module.aF;
      _asyncToGenerator = module._;
      _toConsumableArray = module.r;
      _typeof = module.a5;
      _defineProperty = module.ah;
      connect = module.a;
    }, function (module) {
      Leash = module.v;
    }, function (module) {
      _missingExportShim = module.$;
      show = module.s;
      InteractiveMorphSelector = module.a0;
    }, function (module) {
      classToFunctionTransform = module.c;
    }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
    execute: (function () {

      var __varRecorder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/fabrik.js", __contextModule__);
      var __moduleMeta__ = {
        pathInPackage: function pathInPackage() {
          return "./fabrik.js";
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

      var interactivelyShowConnection = exports('interactivelyShowConnection', __varRecorder__["lively.ide/fabrik.js__define__"]("interactivelyShowConnection", "function", function (connection) {
        var sourceObj = connection.sourceObj;
            connection.sourceAttrName;
            var targetObj = connection.targetObj;
            connection.targetMethodName;

        if (sourceObj.isMorph && targetObj.isMorph) {
          sourceObj.show();
          targetObj.show();
          _missingExportShim && _missingExportShim(sourceObj, targetObj);
        } else show(String(connection));
      }, __moduleMeta__));

      __varRecorder__.interactivelyShowConnection = interactivelyShowConnection;

      var printConnection = exports('printConnection', __varRecorder__["lively.ide/fabrik.js__define__"]("printConnection", "function", function (connection) {
        var sourceObj = connection.sourceObj,
            sourceAttrName = connection.sourceAttrName,
            targetObj = connection.targetObj,
            targetMethodName = connection.targetMethodName;
        var converter = connection.getConverter();
        var updater = connection.getUpdater();
        return __varRecorder__.printConnectionElements(sourceObj, sourceAttrName, targetObj, targetMethodName, converter, updater);
      }, __moduleMeta__));

      __varRecorder__.printConnection = printConnection;

      var printConnectionElements = exports('printConnectionElements', __varRecorder__["lively.ide/fabrik.js__define__"]("printConnectionElements", "function", function (sourceObj, sourceAttr, targetObj, targetAttr, converter, updater) {
        var source = "/* global connect, source, target */\nconnect(source, '".concat(sourceAttr, "', target, '").concat(targetAttr, "'");
        if (converter || updater) source += ", {\n";
        if (converter) source += "  converter: ".concat(converter);
        if (converter && updater) source += ",";
        if (converter) source += "\n";
        if (updater) source += "  updater: ".concat(updater, "\n");
        if (converter || updater) source += "}";
        source += ");";
        return source;
      }, __moduleMeta__));

      __varRecorder__.printConnectionElements = printConnectionElements;

      var interactiveConnectGivenSource = exports('interactiveConnectGivenSource', __varRecorder__["lively.ide/fabrik.js__define__"]("interactiveConnectGivenSource", "function", /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(sourceObj, sourceAttr) {
          var selected;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return InteractiveMorphSelector.selectMorph();

                case 2:
                  selected = _context.sent;
                  return _context.abrupt("return", selected ? __varRecorder__.interactiveConnectGivenSourceAndTarget(sourceObj, sourceAttr, selected) : null);

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }(), __moduleMeta__));

      __varRecorder__.interactiveConnectGivenSource = interactiveConnectGivenSource;

      var interactiveConnectGivenSourceAndTarget = exports('interactiveConnectGivenSourceAndTarget', __varRecorder__["lively.ide/fabrik.js__define__"]("interactiveConnectGivenSourceAndTarget", "function", /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(sourceObj, sourceAttr, targetObj, onConnect) {
          var targetBindings, world, sourceBindings, items, res;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  targetBindings = targetObj && targetObj.world().targetDataBindings(targetObj);
                  world = sourceObj.world();

                  if (!(!targetBindings || !targetBindings.length)) {
                    _context2.next = 6;
                    break;
                  }

                  world.setStatusMessage("connect canceled");
                  return _context2.abrupt("return");

                case 6:
                  if (sourceAttr) {
                    _context2.next = 15;
                    break;
                  }

                  sourceBindings = [{
                    isListItem: true,
                    string: "[Enter custom attribute..]",
                    value: {
                      custom: true
                    }
                  }].concat(_toConsumableArray(sourceObj.world().targetDataBindings(sourceObj).flat().map(function (ea) {
                    return {
                      isListItem: true,
                      string: ea.signature || ea.name,
                      value: ea
                    };
                  })));
                  _context2.next = 10;
                  return world.listPrompt({
                    title: "Select Source Attribute",
                    text: "Choose the attribute of the morph that is supposed to invoke the connection. This can be a method, property or a custom signal that is invoked upon the morph."
                  }, sourceBindings, {
                    filterable: true
                  });

                case 10:
                  sourceAttr = _context2.sent;

                  if (!(sourceAttr.status == "canceled")) {
                    _context2.next = 13;
                    break;
                  }

                  return _context2.abrupt("return");

                case 13:
                  sourceAttr = sourceAttr.selected[0];
                  sourceAttr = sourceAttr.custom ? "sourceAttribute" : sourceAttr.name;

                case 15:
                  items = [{
                    isListItem: true,
                    string: "[Enter custom attribute...]",
                    value: {
                      custom: true
                    }
                  }].concat(_toConsumableArray(targetBindings.flat().map(function (ea) {
                    return {
                      isListItem: true,
                      value: ea,
                      string: ea.signature || ea.name
                    };
                  })));
                  _context2.next = 18;
                  return world.listPrompt({
                    title: "Select Target Attribute",
                    text: "Choose the attribute of the morph that is supposed to invoked once the connection is triggered. This can be either a method or a property of the morph. When selecting a property, keep in mind that the value of the source attribute will be assigned to the property or passed to the method as an argument."
                  }, items, {
                    filterable: true
                  });

                case 18:
                  res = _context2.sent;

                  if (!(res.status == "canceled")) {
                    _context2.next = 21;
                    break;
                  }

                  return _context2.abrupt("return");

                case 21:
                  res = res.selected[0];
                  _context2.next = 24;
                  return __varRecorder__.interactivelyEvaluateConnection({
                    sourceObj: sourceObj,
                    sourceAttr: sourceAttr,
                    targetObj: targetObj,
                    targetAttr: res.custom ? "targetAttribute" : res.name,
                    onConnect: onConnect,
                    prompt: "Edit and confirm connection:"
                  });

                case 24:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x3, _x4, _x5, _x6) {
          return _ref2.apply(this, arguments);
        };
      }(), __moduleMeta__));

      __varRecorder__.interactiveConnectGivenSourceAndTarget = interactiveConnectGivenSourceAndTarget;

      var interactivelyReEvaluateConnection = exports('interactivelyReEvaluateConnection', __varRecorder__["lively.ide/fabrik.js__define__"]("interactivelyReEvaluateConnection", "function", /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(connection) {
          var prompt,
              highlight,
              onConnect,
              sourceObj,
              sourceAttrName,
              targetObj,
              targetMethodName,
              converter,
              updater,
              _args3 = arguments;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  prompt = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : "confirm connection";
                  highlight = _args3.length > 2 ? _args3[2] : undefined;
                  onConnect = _args3.length > 3 ? _args3[3] : undefined;
                  sourceObj = connection.sourceObj, sourceAttrName = connection.sourceAttrName, targetObj = connection.targetObj, targetMethodName = connection.targetMethodName;
                  converter = connection.getConverter();
                  updater = connection.getUpdater();
                  return _context3.abrupt("return", __varRecorder__.interactivelyEvaluateConnection({
                    sourceObj: sourceObj,
                    sourceAttr: sourceAttrName,
                    targetObj: targetObj,
                    targetAttr: targetMethodName,
                    converter: converter,
                    updater: updater,
                    prompt: prompt,
                    highlight: highlight,
                    onConnect: onConnect
                  }));

                case 7:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function (_x7) {
          return _ref3.apply(this, arguments);
        };
      }(), __moduleMeta__));

      __varRecorder__.interactivelyReEvaluateConnection = interactivelyReEvaluateConnection;

      var visualizeConnection = exports('visualizeConnection', __varRecorder__["lively.ide/fabrik.js__define__"]("visualizeConnection", "function", function (m1, m2, existingLeash) {
        var leashStyle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        var sides = rect(0).sides.concat(rect(0).corners);
        var leash = existingLeash || new Leash(Object.assign({
          isSmooth: true,
          styleClasses: ["Halo"],
          borderColor: Color.orange,
          epiMorph: true,
          endpointStyle: {
            start: {
              fill: Color.transparent,
              nativeCursor: "auto"
            },
            end: {
              fill: Color.orange
            }
          }
        }, leashStyle, {
          hasFixedPosition: true
        }));
        leash.startPoint.attachTo(m1, "rightCenter");

        if (m2.isMorph) {
          var nearestPart = m2.globalBounds().partNameNearest(sides, m1.globalPosition);

          if (m1.globalPosition.equals(m2.globalBounds().partNamed(nearestPart))) {
            nearestPart = m2.globalBounds().partNameNearest(without(sides, nearestPart), m1.globalPosition);
          }

          leash.endPoint.attachTo(m2, "leftCenter");
        } else {
          var virtualNodePos = m1.globalBounds().topRight().addPt(pt(100, 0));
          var visualPointer = morph({
            type: "label",
            value: m2.toString(),
            styleClasses: ["Tooltip"],
            padding: rect(8, 4)
          }).openInWorld(virtualNodePos);
          visualPointer.position = m1.world().bounds().translateForInclusion(visualPointer.bounds()).topLeft();
          once(leash, "remove", visualPointer, "remove");
          leash.endPoint.attachTo(visualPointer, "leftCenter");
        }

        return leash;
      }, __moduleMeta__));

      __varRecorder__.visualizeConnection = visualizeConnection;

      var interactivelyEvaluateConnection = exports('interactivelyEvaluateConnection', __varRecorder__["lively.ide/fabrik.js__define__"]("interactivelyEvaluateConnection", "function", /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(opts) {
          var sourceObj, sourceAttr, targetObj, targetAttr, converter, updater, prompt, _opts$highlight, highlight, onConnect, targetModule, evalEnvironment, input, _ref5, targetType, _ref6, sourceType, source, result;

          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  sourceObj = opts.sourceObj, sourceAttr = opts.sourceAttr, targetObj = opts.targetObj, targetAttr = opts.targetAttr, converter = opts.converter, updater = opts.updater, prompt = opts.prompt, _opts$highlight = opts.highlight, highlight = _opts$highlight === void 0 ? true : _opts$highlight, onConnect = opts.onConnect;
                  targetModule = "lively://lively.bindings-interactive-connect/x" + sourceObj.id;
                  evalEnvironment = {
                    context: window,
                    format: "esm",
                    targetModule: targetModule,
                    classTransform: classToFunctionTransform
                  };
                  input = __varRecorder__.printConnectionElements(sourceObj, sourceAttr, targetObj, targetAttr, converter, updater);

                  if (targetObj.isMorph && sourceObj.isMorph) {
                    _ref5 = targetObj.propertiesAndPropertySettings().properties[targetAttr] || {
                      type: _typeof(targetObj[targetAttr])
                    }, targetType = _ref5.type;
                    _ref6 = sourceObj.propertiesAndPropertySettings().properties[sourceAttr] || {
                      type: _typeof(sourceObj[sourceAttr])
                    }, sourceType = _ref6.type;

                    if (sourceType !== targetType) {
                      prompt = {
                        title: "Edit and confirm connection:",
                        text: ["Source: ", {
                          fontSize: 14,
                          fontWeight: "normal"
                        }, sourceObj.toString(), {
                          fontSize: 14,
                          fontWeight: "normal",
                          fontStyle: "italic"
                        }, "\nTarget: ", {
                          fontSize: 14,
                          fontWeight: "normal"
                        }, targetObj.toString(), {
                          fontSize: 14,
                          fontWeight: "normal",
                          fontStyle: "italic"
                        }]
                      };
                    }
                  }

                  Object.assign(lively.modules.module(targetModule).recorder, _defineProperty({
                    source: sourceObj,
                    target: targetObj,
                    connect: connect,
                    once: once
                  }, sourceAttr, sourceObj[sourceAttr]));

                  if (!prompt) {
                    _context4.next = 15;
                    break;
                  }

                  _context4.next = 9;
                  return $world.editPrompt(prompt, {
                    input: input,
                    historyId: "lively.bindings-interactive-morph-connect",
                    mode: "js",
                    requester: $world,
                    evalEnvironment: evalEnvironment,
                    animated: false
                  });

                case 9:
                  source = _context4.sent;

                  if (source) {
                    _context4.next = 13;
                    break;
                  }

                  $world.setStatusMessage("connect canceled");
                  return _context4.abrupt("return");

                case 13:
                  _context4.next = 16;
                  break;

                case 15:
                  source = input;

                case 16:
                  _context4.next = 18;
                  return lively.vm.runEval(source, evalEnvironment);

                case 18:
                  result = _context4.sent;

                  if (!result.isError) {
                    _context4.next = 22;
                    break;
                  }

                  $world.logError(result.value);
                  return _context4.abrupt("return", interactivelyEvaluateConnection({
                    sourceObj: sourceObj,
                    sourceAttr: sourceAttr,
                    targetObj: targetObj,
                    targetAttr: targetAttr,
                    converter: converter,
                    updater: updater,
                    prompt: "confirm connection",
                    highlight: highlight,
                    onConnect: onConnect
                  }));

                case 22:
                  if (highlight) {
                    $world.setStatusMessage("connected!", Color.green);

                    __varRecorder__.interactivelyShowConnection(result.value);
                  }

                  if (typeof onConnect === "function") {
                    onConnect(result);
                  }

                case 24:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));

        return function (_x8) {
          return _ref4.apply(this, arguments);
        };
      }(), __moduleMeta__));

      __varRecorder__.interactivelyEvaluateConnection = interactivelyEvaluateConnection;
      __varRecorder__.interactivelyShowConnection = interactivelyShowConnection;
      __varRecorder__.printConnection = printConnection;
      __varRecorder__.printConnectionElements = printConnectionElements;
      __varRecorder__.interactiveConnectGivenSource = interactiveConnectGivenSource;
      __varRecorder__.interactiveConnectGivenSourceAndTarget = interactiveConnectGivenSourceAndTarget;
      __varRecorder__.interactivelyReEvaluateConnection = interactivelyReEvaluateConnection;
      __varRecorder__.visualizeConnection = visualizeConnection;
      __varRecorder__.interactivelyEvaluateConnection = interactivelyEvaluateConnection;

    })
  };
}));
