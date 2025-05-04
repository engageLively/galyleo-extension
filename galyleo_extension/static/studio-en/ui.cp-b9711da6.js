System.register(['./__rootModule___commonjs-entry-039abf1b.js', './ui.cp-d94265c2.js', './index-0250cb25.js', './object-classes-6157cef2.js', './index-d97f22af.js', './index-d0172adc.js', './app-3c1e5645.js', './client-fb647a5a.js', './linter-1668ac5b.js', './messages.cp-bdc8d7af.js', './loading-indicator.cp-668e5ddc.js', './list.cp-50d496c7.js', './editor-modes-0f820fa8.js', './search-cf1a5c4c.js', './shell-interface-e2437883.js', './client-command-99e40f2e.js', './index-009b6510.js', './code-search.cp-3e624062.js', './client-resource-6f2aa9b2.js', './editor-plugin-b80a1e8e.js', './dialogs.cp-a3f8c313.js', './canvas-2975e6b1.js', './morph-to-image-4b085547.js', './path-72cfeae7.js', './npm_functional-red-black-tree@1.0-34e8dcd1.js'], (function (exports, module) {
  var __contextModule__ = typeof module !== 'undefined' ? module : arguments[1];
;
  var initializeClass, without, withSuperclasses, _toConsumableArray, Icon, isString, unsubscribe, keys, _asyncToGenerator, subscribe, getClassName, isArray, isObject, deserialize, waitFor, isFunction, hashCode, isClass, Path, isNumber, between, Color, debounceNamed, config, ViewModel, _slicedToArray, pt, delay, capitalize, adoptObject, Morph, resource, debounce, pluck, _createForOfIteratorHelper, values, truncate, part, dissoc, component, GridLayout, TilingLayout, Text, rect, l2lInterfaceFor, localInterface, chooseUnusedImports, generateReferenceExpression, JavaScriptEditorPlugin, interactivelyFreezePart, InteractiveMorphSelector, DefaultTheme, DarkTheme, interactivlyFixUndeclaredVariables, interactivelyChooseImports, TreeData, Tree, lexicalClassMembers, RuntimeSourceDescriptor, isObjectClass, interactivelyForkPackage, addScript, ObjectPackage, stringifyFunctionWithoutToplevelRecorder, modules, module$1, parse, topLevelDeclsAndRefs, nodesInScopeOf, exports$1, L2LClient, lint, StatusMessageError, StatusMessageWarning, StatusMessageConfirm, open$1, SystemButton, DefaultList;
  return {
    setters: [function (module) {
      initializeClass = module.i;
      without = module.aQ;
      withSuperclasses = module.dn;
      _toConsumableArray = module.r;
      Icon = module.h;
      isString = module.bv;
      unsubscribe = module.b6;
      keys = module.bX;
      _asyncToGenerator = module._;
      subscribe = module.bb;
      getClassName = module.bi;
      isArray = module.bh;
      isObject = module.c4;
      deserialize = module.e1;
      waitFor = module.aE;
      isFunction = module.cE;
      hashCode = module.cd;
      isClass = module.e2;
      Path = module.bw;
      isNumber = module.dk;
      between = module.aN;
      Color = module.C;
      debounceNamed = module.z;
      config = module.v;
      ViewModel = module.V;
      _slicedToArray = module.o;
      pt = module.b;
      delay = module.l;
      capitalize = module.bo;
      adoptObject = module.bc;
      Morph = module.M;
      resource = module.ac;
      debounce = module.e3;
      pluck = module.c9;
      _createForOfIteratorHelper = module.a6;
      values = module.bj;
      truncate = module.aj;
      part = module.p;
      dissoc = module.y;
      component = module.c;
      GridLayout = module.G;
      TilingLayout = module.T;
      Text = module.j;
      rect = module.ap;
    }, function (module) {
      l2lInterfaceFor = module.a1;
      localInterface = module.l;
      chooseUnusedImports = module.a2;
      generateReferenceExpression = module.a3;
      JavaScriptEditorPlugin = module.a4;
      interactivelyFreezePart = module.a5;
      InteractiveMorphSelector = module.a0;
      DefaultTheme = module.a6;
      DarkTheme = module.a7;
      interactivlyFixUndeclaredVariables = module.a8;
      interactivelyChooseImports = module.a9;
    }, function (module) {
      TreeData = module.T;
      Tree = module.r;
    }, function (module) {
      lexicalClassMembers = module.l;
      RuntimeSourceDescriptor = module.R;
      isObjectClass = module.i;
      interactivelyForkPackage = module.a;
      addScript = module.b;
      ObjectPackage = module.O;
    }, function (module) {
      stringifyFunctionWithoutToplevelRecorder = module.t;
      modules = module.m;
      module$1 = module.a;
    }, function (module) {
      parse = module.p;
      topLevelDeclsAndRefs = module.t;
      nodesInScopeOf = module.Z;
    }, function (module) {
      exports$1 = module.e;
    }, function (module) {
      L2LClient = module["default"];
    }, function (module) {
      lint = module.l;
    }, function (module) {
      StatusMessageError = module.StatusMessageError;
      StatusMessageWarning = module.StatusMessageWarning;
      StatusMessageConfirm = module.StatusMessageConfirm;
    }, function (module) {
      open$1 = module.o;
      SystemButton = module.a;
    }, function (module) {
      DefaultList = module.b;
    }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
    execute: (function () {

      var __varRecorder__$3 = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/js/objecteditor/classTree.js", __contextModule__);

      var ClassTreeData = function (superclass) {
        var __lively_classholder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/js/objecteditor/classTree.js", __contextModule__);

        var __lively_class__ = __lively_classholder__.hasOwnProperty("ClassTreeData") && typeof __lively_classholder__.ClassTreeData === "function" ? __lively_classholder__.ClassTreeData : __lively_classholder__.ClassTreeData = function ClassTreeData(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        if (Object.isFrozen(__lively_classholder__)) {
          return __lively_class__;
        }

        return initializeClass(__lively_class__, superclass, [{
          key: Symbol["for"]("lively-instance-initialize"),
          value: function ClassTreeData_initialize_(target) {
            var _this;

            _this = initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), Symbol["for"]("lively-instance-initialize"), this).call(this, {
              target: target,
              name: "root",
              isRoot: true,
              isCollapsed: false
            });
            return _this;
          }
        }, {
          key: "display",
          value: function ClassTreeData_display_(node) {
            if (!node) return "empty";

            if (node.isRoot) {
              return node.target.name || node.target.id || "root object";
            }

            if (node.isClass) {
              return node.target;
            }

            return node.name || "no name";
          }
        }, {
          key: "isLeaf",
          value: function ClassTreeData_isLeaf_(node) {
            if (!node) return true;
            return !node.isRoot && !node.isClass;
          }
        }, {
          key: "isCollapsed",
          value: function ClassTreeData_isCollapsed_(node) {
            return !node || node.isCollapsed;
          }
        }, {
          key: "collapse",
          value: function ClassTreeData_collapse_(node, bool) {
            node && (node.isCollapsed = bool);
          }
        }, {
          key: "getChildren",
          value: function ClassTreeData_getChildren_(node) {
            if (!node) return [];

            if (node.isRoot) {
              if (node.children) return node.children;
              var classes = without(withSuperclasses(node.target), Object).reverse();
              return node.children = classes.map(function (klass) {
                return {
                  isClass: true,
                  klass: klass,
                  target: klass[Symbol["for"]("__LivelyClassName__")],
                  isCollapsed: true
                };
              });
            }

            if (node.isClass) {
              try {
                return node.children || (node.children = lexicalClassMembers(node.klass).map(function (ea) {
                  var _static = ea["static"],
                      name = ea.name,
                      kind = ea.kind,
                      overridden = ea.overridden;
                  var prefix = "";
                  if (_static) prefix += "static ";
                  if (kind === "get") prefix += "get ";
                  if (kind === "set") prefix += "set ";
                  return {
                    name: [overridden ? [].concat(_toConsumableArray(Icon.textAttribute("arrow-circle-up")), [" ", {
                      opacity: 0.5
                    }]) : [], prefix + name, {}],
                    target: ea
                  };
                }));
              } catch (e) {
                $world.showError(e);
                return node.children = [];
              }
            }

            return [];
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "ClassTreeData";
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./js/objecteditor/classTree.js";
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
        }, {
          start: 991,
          end: 2655
        });
      }({
        referencedAs: "TreeData",
        value: TreeData
      });
      __varRecorder__$3["default"] = ClassTreeData;

      var __varRecorder__$2 = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/js/objecteditor/context.js", __contextModule__);
      var destructured_1 = modules;
      __varRecorder__$2.module = destructured_1.module;

      var ObjectEditorContext = function (superclass) {
        var __lively_classholder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/js/objecteditor/context.js", __contextModule__);

        var __lively_class__ = __lively_classholder__.hasOwnProperty("ObjectEditorContext") && typeof __lively_classholder__.ObjectEditorContext === "function" ? __lively_classholder__.ObjectEditorContext : __lively_classholder__.ObjectEditorContext = function ObjectEditorContext(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        if (Object.isFrozen(__lively_classholder__)) {
          return __lively_class__;
        }

        return initializeClass(__lively_class__, superclass, [{
          key: "isRemote",
          get: function get() {
            return !!this.remoteContextId;
          }
        }, {
          key: "selectedModule",
          get: function get() {
            return __varRecorder__$2.module(this.evalEnvironment.targetModule);
          }
        }, {
          key: "isRemoteHandle",
          value: function ObjectEditorContext_isRemoteHandle_(id) {
            return isString(id) && id.startsWith("lively://lively.next-object-editor/");
          }
        }, {
          key: "selectTarget",
          value: function () {
            var _ObjectEditorContext_selectTarget_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(target, editor) {
              var _this = this;

              var evalEnvironment,
                  _args2 = arguments;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      evalEnvironment = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : false;

                      if (!this.onModuleChangeHandler && this.interfaceToEditor) {
                        this.onModuleChangeHandler = /*#__PURE__*/function () {
                          var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(evt) {
                            var newClassSource;
                            return regeneratorRuntime.wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    _context.next = 2;
                                    return _this.onModuleChanged(evt);

                                  case 2:
                                    newClassSource = _context.sent;

                                    if (newClassSource) {
                                      _this.withEditorDo(function (ed) {
                                        return ed.reactToModuleChange(newClassSource);
                                      }, {
                                        newClassSource: newClassSource
                                      });
                                    }

                                  case 4:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            }, _callee);
                          }));

                          return function (_x3) {
                            return _ref.apply(this, arguments);
                          };
                        }();

                        subscribe("lively.modules/modulechanged", this.onModuleChangeHandler);
                        subscribe("lively.modules/moduleloaded", this.onModuleChangeHandler);
                      }

                      if (!(evalEnvironment && this.isRemoteHandle(target))) {
                        _context2.next = 5;
                        break;
                      }

                      this.connectToContext(target, editor, evalEnvironment);
                      return _context2.abrupt("return", this);

                    case 5:
                      if (!(evalEnvironment && typeof target === "string")) {
                        _context2.next = 9;
                        break;
                      }

                      _context2.next = 8;
                      return this.selectRemoteTarget({
                        code: target,
                        editor: editor,
                        evalEnvironment: evalEnvironment
                      });

                    case 8:
                      return _context2.abrupt("return", this);

                    case 9:
                      _context2.next = 11;
                      return this.selectLocalTarget(target, editor);

                    case 11:
                      return _context2.abrupt("return", this);

                    case 12:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function ObjectEditorContext_selectTarget_(_x, _x2) {
              return _ObjectEditorContext_selectTarget_.apply(this, arguments);
            }

            return ObjectEditorContext_selectTarget_;
          }()
        }, {
          key: "refresh",
          value: function () {
            var _ObjectEditorContext_refresh_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(expandAll) {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.classTreeData = new ClassTreeData(this.target.constructor);

                      if (!expandAll) {
                        _context3.next = 4;
                        break;
                      }

                      _context3.next = 4;
                      return this.classTreeData.uncollapseAll(function (node) {
                        return _this2.classTreeData.getChildren(node) && node.isRoot;
                      });

                    case 4:
                      this.evalEnvironment = {
                        context: this.target,
                        systemInterface: localInterface,
                        targetModule: this.sourceDescriptorFor(this.target.constructor).module.id,
                        format: "esm"
                      };

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function ObjectEditorContext_refresh_(_x4) {
              return _ObjectEditorContext_refresh_.apply(this, arguments);
            }

            return ObjectEditorContext_refresh_;
          }()
        }, {
          key: "connectToContext",
          value: function () {
            var _ObjectEditorContext_connectToContext_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(id, editor, evalEnvironment) {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.remoteContextId = this.target = id;
                      this.evalEnvironment = {
                        context: "System.get('@lively-env').objectEditContexts[\"".concat(this.remoteContextId, "\"].target"),
                        systemInterface: evalEnvironment.systemInterface,
                        format: "esm"
                      };
                      _context4.next = 4;
                      return this.withContextDo(function (ctx) {
                        return ctx.selectedModule.id;
                      });

                    case 4:
                      this.evalEnvironment.targetModule = _context4.sent;

                      if (editor) {
                        Object.assign(editor.editorPlugin.evalEnvironment, this.evalEnvironment);
                      }

                      _context4.next = 8;
                      return this.withContextDo(function (ctx) {
                        return ctx.selectedClassName;
                      });

                    case 8:
                      this.selectedClassName = _context4.sent;

                    case 9:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function ObjectEditorContext_connectToContext_(_x5, _x6, _x7) {
              return _ObjectEditorContext_connectToContext_.apply(this, arguments);
            }

            return ObjectEditorContext_connectToContext_;
          }()
        }, {
          key: "selectLocalTarget",
          value: function () {
            var _ObjectEditorContext_selectLocalTarget_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(target) {
              var editor,
                  _args5 = arguments;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      editor = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : false;
                      this.target = target;
                      this.selectedClass = null;
                      this.selectedMethod = null;
                      _context5.next = 6;
                      return this.refresh(!editor);

                    case 6:
                      if (editor) {
                        Object.assign(editor.editorPlugin.evalEnvironment, this.evalEnvironment);
                      }

                      _context5.next = 9;
                      return this.selectClass(getClassName(target));

                    case 9:
                      return _context5.abrupt("return", this);

                    case 10:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function ObjectEditorContext_selectLocalTarget_(_x8) {
              return _ObjectEditorContext_selectLocalTarget_.apply(this, arguments);
            }

            return ObjectEditorContext_selectLocalTarget_;
          }()
        }, {
          key: "selectRemoteTarget",
          value: function () {
            var _ObjectEditorContext_selectRemoteTarget_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(_ref2) {
              var code, evalEnvironment, editor, peerId, res;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      code = _ref2.code, evalEnvironment = _ref2.evalEnvironment, editor = _ref2.editor;
                      peerId = L2LClient["default"]().id;
                      _context6.next = 4;
                      return evalEnvironment.systemInterface.runEval("\n       const { default: ObjectEditorContext} = await System.import(\"lively.ide/js/objecteditor/context.js\");\n       const t = (() => ".concat(code, ")();\n       const ctx = await ObjectEditorContext.for(t);\n       const id = await ctx.connectToEditor(\"").concat(peerId, "\", \"").concat(editor.id, "\");\n       const targetModule = ctx.selectedModule.id;\n       const res =  {targetModule, id};\n       res;\n    "), evalEnvironment);

                    case 4:
                      res = _context6.sent;

                      if (!res.isError) {
                        _context6.next = 7;
                        break;
                      }

                      throw Error(res);

                    case 7:
                      this.remoteContextId = this.target = res.value.id;
                      this.evalEnvironment = {
                        context: "System.get('@lively-env').objectEditContexts[\"".concat(this.remoteContextId, "\"].target"),
                        systemInterface: evalEnvironment.systemInterface,
                        targetModule: res.value.targetModule,
                        format: "esm"
                      };
                      _context6.next = 11;
                      return this.withContextDo(function (ctx) {
                        return ctx.selectedClassName;
                      });

                    case 11:
                      this.selectedClassName = _context6.sent;

                      if (editor) {
                        Object.assign(editor.editorPlugin.evalEnvironment, this.evalEnvironment);
                      }

                    case 13:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function ObjectEditorContext_selectRemoteTarget_(_x9) {
              return _ObjectEditorContext_selectRemoteTarget_.apply(this, arguments);
            }

            return ObjectEditorContext_selectRemoteTarget_;
          }()
        }, {
          key: "dispose",
          value: function ObjectEditorContext_dispose_() {
            var _this3 = this;

            this.withContextDo(function () {
              if (!System.get("@system-env").node) return;
              delete System.get("@lively-env").objectEditContexts[_this3.id];
              unsubscribe("lively.modules/modulechanged", _this3.onModuleChangeHandler);
              unsubscribe("lively.modules/moduleloaded", _this3.onModuleChangeHandler);
            });
          }
        }, {
          key: "connectToEditor",
          value: function ObjectEditorContext_connectToEditor_(peerId, editorId) {
            this.id = "lively://lively.next-object-editor/".concat(editorId);
            if (!System.get("@lively-env").objectEditContexts) System.get("@lively-env").objectEditContexts = {};
            this.interfaceToEditor = l2lInterfaceFor(peerId, L2LClient["default"]());
            this.editorId = editorId;
            System.get("@lively-env").objectEditContexts[this.id] = this;
            return this.id;
          }
        }, {
          key: "stringifySource",
          value: function ObjectEditorContext_stringifySource_(source) {
            var varMapping = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var varDeclarations = keys(varMapping).map(function (k) {
              return "const ".concat(k, " = ").concat(JSON.stringify(varMapping[k]), ";");
            }).join("\n");
            source = source === "string" ? source : stringifyFunctionWithoutToplevelRecorder(source);
            return "(() => {" + varDeclarations + "\n return (" + source + ")(this) })()";
          }
        }, {
          key: "withEditorDo",
          value: function () {
            var _ObjectEditorContext_withEditorDo_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(source, varMapping) {
              var res;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      source = this.wrapSource(this.stringifySource(source, varMapping));
                      _context7.next = 3;
                      return this.interfaceToEditor.runEval(source, {
                        context: "$world.getMorphWithId(\"".concat(this.editorId, "\")"),
                        targetModule: "lively.ide/js/objecteditor/index.js",
                        ackTimeout: 30 * 1000
                      });

                    case 3:
                      res = _context7.sent;

                      if (!res.isError) {
                        _context7.next = 6;
                        break;
                      }

                      throw Error(res.value);

                    case 6:
                      res = res.value;

                      if (!(!isArray(res) && isObject(res))) {
                        _context7.next = 9;
                        break;
                      }

                      return _context7.abrupt("return", deserialize(res));

                    case 9:
                      return _context7.abrupt("return", res);

                    case 10:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            function ObjectEditorContext_withEditorDo_(_x10, _x11) {
              return _ObjectEditorContext_withEditorDo_.apply(this, arguments);
            }

            return ObjectEditorContext_withEditorDo_;
          }()
        }, {
          key: "wrapSource",
          value: function ObjectEditorContext_wrapSource_(source) {
            return "\n          let { serialize } = await System.import('lively.serializer2');\n          let __eval_res__ = await ".concat(source, ";\n          if (!obj.isArray(__eval_res__) && obj.isObject(__eval_res__))\n            __eval_res__ = serialize(__eval_res__);\n          __eval_res__;\n        ");
          }
        }, {
          key: "withContextDo",
          value: function () {
            var _ObjectEditorContext_withContextDo_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(source) {
              var _this4 = this;

              var varMapping,
                  evalStr,
                  context,
                  res,
                  _args8 = arguments;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      varMapping = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : {};

                      if (!(!this.remoteContextId && isFunction(source))) {
                        _context8.next = 5;
                        break;
                      }

                      _context8.next = 4;
                      return source(this);

                    case 4:
                      return _context8.abrupt("return", _context8.sent);

                    case 5:
                      if (!this._evalInProgress) {
                        _context8.next = 8;
                        break;
                      }

                      _context8.next = 8;
                      return waitFor(5000, function () {
                        return !_this4._evalInProgress;
                      });

                    case 8:
                      this._evalInProgress = true;
                      source = this.stringifySource(source, varMapping);
                      evalStr = this.wrapSource(source);
                      context = this.remoteContextId ? "System.get('@lively-env').objectEditContexts[\"".concat(this.remoteContextId, "\"]") : this;
                      _context8.next = 14;
                      return this.evalEnvironment.systemInterface.runEval(evalStr, {
                        targetModule: "lively.ide/js/objecteditor/context.js",
                        ackTimeout: 30 * 1000,
                        context: context
                      });

                    case 14:
                      res = _context8.sent;

                      if (!res.isError) {
                        _context8.next = 17;
                        break;
                      }

                      throw Error(res.value);

                    case 17:
                      res = res.value;
                      this._evalInProgress = false;

                      if (!(!isArray(res) && isObject(res))) {
                        _context8.next = 21;
                        break;
                      }

                      return _context8.abrupt("return", deserialize(res));

                    case 21:
                      return _context8.abrupt("return", res);

                    case 22:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function ObjectEditorContext_withContextDo_(_x12) {
              return _ObjectEditorContext_withContextDo_.apply(this, arguments);
            }

            return ObjectEditorContext_withContextDo_;
          }()
        }, {
          key: "sourceDescriptorFor",
          value: function ObjectEditorContext_sourceDescriptorFor_(klass) {
            return RuntimeSourceDescriptor["for"](klass);
          }
        }, {
          key: "classChainOfTarget",
          value: function ObjectEditorContext_classChainOfTarget_() {
            return withSuperclasses(this.target.constructor);
          }
        }, {
          key: "addModuleChangeWarning",
          value: function () {
            var _ObjectEditorContext_addModuleChangeWarning_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var newClassSource;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      if (!this.isSaving) {
                        _context9.next = 2;
                        break;
                      }

                      return _context9.abrupt("return");

                    case 2:
                      _context9.next = 4;
                      return this.sourceDescriptorFor(this.selectedClass).source;

                    case 4:
                      newClassSource = _context9.sent;
                      this.moduleChangeWarning = this.selectedModule.id;
                      this.sourceHash = hashCode(newClassSource);

                    case 7:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));

            function ObjectEditorContext_addModuleChangeWarning_() {
              return _ObjectEditorContext_addModuleChangeWarning_.apply(this, arguments);
            }

            return ObjectEditorContext_addModuleChangeWarning_;
          }()
        }, {
          key: "onModuleChanged",
          value: function () {
            var _ObjectEditorContext_onModuleChanged_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(evt) {
              var m, selectedModule, selectedClass;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      if (!this.isSaving) {
                        _context10.next = 2;
                        break;
                      }

                      return _context10.abrupt("return");

                    case 2:
                      m = __varRecorder__$2.module(evt.module);
                      selectedModule = this.selectedModule, selectedClass = this.selectedClass;

                      if (!(!selectedModule || selectedModule.id !== m.id)) {
                        _context10.next = 6;
                        break;
                      }

                      return _context10.abrupt("return");

                    case 6:
                      _context10.next = 8;
                      return this.sourceDescriptorFor(selectedClass).source;

                    case 8:
                      return _context10.abrupt("return", _context10.sent);

                    case 9:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));

            function ObjectEditorContext_onModuleChanged_(_x13) {
              return _ObjectEditorContext_onModuleChanged_.apply(this, arguments);
            }

            return ObjectEditorContext_onModuleChanged_;
          }()
        }, {
          key: "onModuleLoaded",
          value: function ObjectEditorContext_onModuleLoaded_(evt) {
            this.onModuleChanged(evt);
          }
        }, {
          key: "getTitle",
          value: function () {
            var _ObjectEditorContext_getTitle_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var title, selectedClass, selectedMethod, selectedModule, p;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      title = "";
                      selectedClass = this.selectedClass, selectedMethod = this.selectedMethod, selectedModule = this.selectedModule;

                      if (selectedClass) {
                        title += " - ".concat(selectedClass[Symbol["for"]("__LivelyClassName__")]);

                        if (isObjectClass(selectedClass)) {
                          p = selectedClass[Symbol["for"]("lively-module-meta")]["package"];
                          if (p && p.version) title += "@" + p.version;
                        }

                        if (selectedMethod) title += ">>".concat(selectedMethod.name);
                      } else if (selectedModule) {
                        title += " - ".concat(selectedModule.shortName());
                      }

                      return _context11.abrupt("return", title);

                    case 4:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));

            function ObjectEditorContext_getTitle_() {
              return _ObjectEditorContext_getTitle_.apply(this, arguments);
            }

            return ObjectEditorContext_getTitle_;
          }()
        }, {
          key: "selectClass",
          value: function () {
            var _ObjectEditorContext_selectClass_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(className) {
              var _this5 = this;

              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return this.withContextDo(function () {
                        var klass = _this5.classChainOfTarget().find(function (ea) {
                          return ea[Symbol["for"]("__LivelyClassName__")] === className;
                        });

                        _this5.selectedMethod = null;
                        _this5.selectedClass = klass;
                        return klass[Symbol["for"]("__LivelyClassName__")];
                      }, {
                        className: className
                      });

                    case 2:
                      this.selectedClassName = _context12.sent;

                    case 3:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));

            function ObjectEditorContext_selectClass_(_x14) {
              return _ObjectEditorContext_selectClass_.apply(this, arguments);
            }

            return ObjectEditorContext_selectClass_;
          }()
        }, {
          key: "updatePackageConfig",
          value: function ObjectEditorContext_updatePackageConfig_(sourceChanged) {
            if (isObjectClass(this.selectedClass) && sourceChanged) {
              var system = this.evalEnvironment.systemInterface;
              var descr = this.sourceDescriptorFor(this.selectedClass);
              var pkg = descr.module["package"]();
              var packageConfig = Object.assign({}, pkg.config, {
                version: exports$1.inc(pkg.version, "prerelease", true)
              });
              var mod = system.getModule(pkg.url + "/package.json");
              system.packageConfChange(JSON.stringify(packageConfig, null, 2), mod.id);
            }
          }
        }, {
          key: "forkPackage",
          value: function () {
            var _ObjectEditorContext_forkPackage_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(forkedName) {
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return interactivelyForkPackage(this.target, forkedName);

                    case 2:
                      return _context13.abrupt("return", _context13.sent);

                    case 3:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));

            function ObjectEditorContext_forkPackage_(_x15) {
              return _ObjectEditorContext_forkPackage_.apply(this, arguments);
            }

            return ObjectEditorContext_forkPackage_;
          }()
        }, {
          key: "addNewMethod",
          value: function () {
            var _ObjectEditorContext_addNewMethod_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.next = 2;
                      return addScript(this.target, "function() {}", "newMethod");

                    case 2:
                      return _context14.abrupt("return", _context14.sent);

                    case 3:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));

            function ObjectEditorContext_addNewMethod_() {
              return _ObjectEditorContext_addNewMethod_.apply(this, arguments);
            }

            return ObjectEditorContext_addNewMethod_;
          }()
        }, {
          key: "selectMethod",
          value: function () {
            var _ObjectEditorContext_selectMethod_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(className, methodSpec) {
              var _this6 = this;

              var methodNode;
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      _context16.next = 2;
                      return this.withContextDo( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
                        var klass, methodNode;
                        return regeneratorRuntime.wrap(function _callee15$(_context15) {
                          while (1) {
                            switch (_context15.prev = _context15.next) {
                              case 0:
                                klass = _this6.classChainOfTarget().find(function (ea) {
                                  return ea[Symbol["for"]("__LivelyClassName__")] === className;
                                });

                                if (klass && !methodSpec && isClass(klass.owner)) {
                                  methodSpec = klass;
                                  klass = klass.owner;
                                }

                                _this6.selectedMethod = methodSpec;
                                _context15.next = 5;
                                return _this6._sourceDescriptor_of_class_findMethodNode(klass, methodSpec.name, methodSpec.kind, methodSpec["static"]);

                              case 5:
                                methodNode = _context15.sent;
                                return _context15.abrupt("return", methodNode);

                              case 7:
                              case "end":
                                return _context15.stop();
                            }
                          }
                        }, _callee15);
                      })), {
                        className: className,
                        methodSpec: methodSpec
                      });

                    case 2:
                      methodNode = _context16.sent;
                      if (methodNode) this.selectedMethodName = methodSpec.name;
                      return _context16.abrupt("return", methodNode);

                    case 5:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));

            function ObjectEditorContext_selectMethod_(_x16, _x17) {
              return _ObjectEditorContext_selectMethod_.apply(this, arguments);
            }

            return ObjectEditorContext_selectMethod_;
          }()
        }, {
          key: "removeUnusedImports",
          value: function () {
            var _ObjectEditorContext_removeUnusedImports_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(toRemove) {
              var _m, _origSource, _toRemove;

              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      _context17.prev = 0;
                      _m = this.selectedModule;
                      _context17.next = 4;
                      return _m.source();

                    case 4:
                      _origSource = _context17.sent;
                      _context17.next = 7;
                      return chooseUnusedImports(_origSource);

                    case 7:
                      _toRemove = _context17.sent;

                      if (!(!_toRemove || !_toRemove.changes || !_toRemove.changes.length)) {
                        _context17.next = 10;
                        break;
                      }

                      return _context17.abrupt("return", {
                        statusMessage: "Nothing to remove"
                      });

                    case 10:
                      _context17.next = 12;
                      return _m.removeImports(_toRemove.removedImports);

                    case 12:
                      return _context17.abrupt("return", {
                        statusMessage: "Imports removed"
                      });

                    case 15:
                      _context17.prev = 15;
                      _context17.t0 = _context17["catch"](0);
                      _context17.t1 = origSource;

                      if (!_context17.t1) {
                        _context17.next = 21;
                        break;
                      }

                      _context17.next = 21;
                      return m.changeSource(origSource);

                    case 21:
                      return _context17.abrupt("return", {
                        statusMessage: _context17.t0.toString()
                      });

                    case 22:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this, [[0, 15]]);
            }));

            function ObjectEditorContext_removeUnusedImports_(_x18) {
              return _ObjectEditorContext_removeUnusedImports_.apply(this, arguments);
            }

            return ObjectEditorContext_removeUnusedImports_;
          }()
        }, {
          key: "getMethodAtCursorPos",
          value: function () {
            var _ObjectEditorContext_getMethodAtCursorPos_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(className, methodSpec, cursorIndex) {
              var _this7 = this;

              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      _context18.next = 2;
                      return this.withContextDo(function () {
                        var klass = _this7.classChainOfTarget().find(function (ea) {
                          return ea[Symbol["for"]("__LivelyClassName__")] === className;
                        });

                        return _this7._sourceDescriptor_of_class_findMethodNode(klass, cursorIndex);
                      }, {
                        cursorIndex: cursorIndex
                      });

                    case 2:
                      return _context18.abrupt("return", _context18.sent);

                    case 3:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));

            function ObjectEditorContext_getMethodAtCursorPos_(_x19, _x20, _x21) {
              return _ObjectEditorContext_getMethodAtCursorPos_.apply(this, arguments);
            }

            return ObjectEditorContext_getMethodAtCursorPos_;
          }()
        }, {
          key: "_sourceDescriptor_of_class_findMethodNode",
          value: function () {
            var _ObjectEditorContext__sourceDescriptor_of_class_findMethodNode_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(klass, methodNameOrIndex, methodKind) {
              var isClassMethod,
                  ast,
                  descr,
                  parsed,
                  methods,
                  method,
                  _args19 = arguments;
              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      isClassMethod = _args19.length > 3 && _args19[3] !== undefined ? _args19[3] : false;
                      ast = _args19.length > 4 ? _args19[4] : undefined;
                      descr = this.sourceDescriptorFor(klass);
                      _context19.t0 = ast;

                      if (_context19.t0) {
                        _context19.next = 8;
                        break;
                      }

                      _context19.next = 7;
                      return descr.ast;

                    case 7:
                      _context19.t0 = _context19.sent;

                    case 8:
                      parsed = _context19.t0;
                      methods = Path("body.body").get(parsed);
                      method = methods.find(function (_ref4) {
                        var kind = _ref4.kind,
                            itIsClassMethod = _ref4["static"],
                            name = _ref4.key.name,
                            _ref4$value$body = _ref4.value.body,
                            start = _ref4$value$body.start,
                            end = _ref4$value$body.end;
                        if (isNumber(methodNameOrIndex)) return between(methodNameOrIndex, start, end);

                        if (name !== methodNameOrIndex || itIsClassMethod !== isClassMethod) {
                          return false;
                        }

                        if (!methodKind || methodKind !== "get" && methodKind !== "set") {
                          return true;
                        }

                        return methodKind === kind;
                      });
                      return _context19.abrupt("return", method);

                    case 12:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));

            function ObjectEditorContext__sourceDescriptor_of_class_findMethodNode_(_x22, _x23, _x24) {
              return _ObjectEditorContext__sourceDescriptor_of_class_findMethodNode_.apply(this, arguments);
            }

            return ObjectEditorContext__sourceDescriptor_of_class_findMethodNode_;
          }()
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "ObjectEditorContext";
          }
        }, {
          key: "for",
          value: function () {
            var _ObjectEditorContext_for_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(target, editor, evalEnvironment) {
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      _context20.next = 2;
                      return new this().selectTarget(target, editor, evalEnvironment);

                    case 2:
                      return _context20.abrupt("return", _context20.sent);

                    case 3:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));

            function ObjectEditorContext_for_(_x25, _x26, _x27) {
              return _ObjectEditorContext_for_.apply(this, arguments);
            }

            return ObjectEditorContext_for_;
          }()
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./js/objecteditor/context.js";
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
        }, {
          start: 890,
          end: 12866
        });
      }(undefined);
      __varRecorder__$2["default"] = ObjectEditorContext;

      var __varRecorder__$1 = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/js/objecteditor/index.js", __contextModule__);
      __varRecorder__$1.DANGEROUS_METHODS_TO_OVERRIDE = ["render", "remove", "addMorph", "addMorphAt"];
      var ObjectEditorModel = function (superclass) {
        var __lively_classholder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/js/objecteditor/index.js", __contextModule__);

        var __lively_class__ = __lively_classholder__.hasOwnProperty("ObjectEditorModel") && typeof __lively_classholder__.ObjectEditorModel === "function" ? __lively_classholder__.ObjectEditorModel : __lively_classholder__.ObjectEditorModel = function ObjectEditorModel(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        if (Object.isFrozen(__lively_classholder__)) {
          return __lively_class__;
        }

        return initializeClass(__lively_class__, superclass, [{
          key: "keybindings",
          get: function get() {
            return [{
              keys: "F1",
              command: "focus class tree"
            }, {
              keys: "F2",
              command: "focus code editor"
            }, {
              keys: "F3",
              command: "toggle showing imports"
            }, {
              keys: {
                mac: "Command-S",
                win: "Ctrl-S"
              },
              command: "save source"
            }, {
              keys: {
                mac: "Command-Shift-=",
                win: "Ctrl-Shift-="
              },
              command: "add method"
            }, {
              keys: {
                mac: "Command-Shift--",
                win: "Ctrl-Shift--"
              },
              command: "remove method or class"
            }, {
              keys: "Ctrl-Shift-R",
              command: "run selected method"
            }, {
              keys: "Alt-R",
              command: "refresh"
            }, {
              keys: {
                win: "Ctrl-B",
                mac: "Meta-B"
              },
              command: "open class in system browser"
            }, {
              keys: "Alt-Shift-T",
              command: "choose target"
            }, {
              keys: "Alt-J",
              command: "jump to definition"
            }, {
              keys: "Ctrl-C I",
              command: "[javascript] inject import"
            }, {
              keys: "Ctrl-C C I",
              command: "[javascript] fix undeclared variables"
            }];
          }
        }, {
          key: "commands",
          get: function get() {
            var _this = this;

            return [{
              name: "focus class tree",
              exec: function exec() {
                var m = _this.ui.classTree;
                m.show();
                m.focus();
                return true;
              }
            }, {
              name: "focus code editor",
              exec: function exec() {
                var m = _this.ui.sourceEditor;
                m.show();
                m.focus();
                return true;
              }
            }, {
              name: "refresh",
              exec: function () {
                var _exec = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return _this.withContextDo(function (ctx) {
                            var klass = ctx.selectedClass;

                            if (klass) {
                              var descr = ctx.sourceDescriptorFor(klass);
                              descr.module.reset();
                              descr.reset();
                            }
                          });

                        case 2:
                          _context.next = 4;
                          return _this.refresh(true);

                        case 4:
                          _this.view.setStatusMessage("reloaded");

                          return _context.abrupt("return", true);

                        case 6:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                function exec() {
                  return _exec.apply(this, arguments);
                }

                return exec;
              }()
            }, {
              name: "[javascript] inject import",
              exec: function () {
                var _exec2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return _this.models.importController.interactivelyAddImport();

                        case 2:
                          return _context2.abrupt("return", true);

                        case 3:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));

                function exec() {
                  return _exec2.apply(this, arguments);
                }

                return exec;
              }()
            }, {
              name: "[javascript] fix undeclared variables",
              exec: function () {
                var _exec3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          return _context3.abrupt("return", _this.interactivlyFixUndeclaredVariables());

                        case 1:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                }));

                function exec() {
                  return _exec3.apply(this, arguments);
                }

                return exec;
              }()
            }, {
              name: "[javascript] removed unused imports",
              exec: function () {
                var _exec4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return _this.interactivelyRemoveUnusedImports();

                        case 2:
                          return _context4.abrupt("return", true);

                        case 3:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                }));

                function exec() {
                  return _exec4.apply(this, arguments);
                }

                return exec;
              }()
            }, {
              name: "toggle showing imports",
              exec: function () {
                var _exec5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return _this.toggleShowingImports();

                        case 2:
                          return _context5.abrupt("return", true);

                        case 3:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));

                function exec() {
                  return _exec5.apply(this, arguments);
                }

                return exec;
              }()
            }, {
              name: "add method",
              exec: function () {
                var _exec6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          _context6.next = 2;
                          return _this.interactivelyAddObjectPackageAndMethod();

                        case 2:
                          return _context6.abrupt("return", true);

                        case 3:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6);
                }));

                function exec() {
                  return _exec6.apply(this, arguments);
                }

                return exec;
              }()
            }, {
              name: "remove method or class",
              exec: function () {
                var _exec7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          _context7.next = 2;
                          return _this.interactivelyRemoveMethodOrClass();

                        case 2:
                          return _context7.abrupt("return", true);

                        case 3:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7);
                }));

                function exec() {
                  return _exec7.apply(this, arguments);
                }

                return exec;
              }()
            }, {
              name: "adopt by superclass",
              exec: function () {
                var _exec8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                  return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) {
                      switch (_context8.prev = _context8.next) {
                        case 0:
                          _context8.next = 2;
                          return _this.interactivelyAdoptBySuperclass();

                        case 2:
                          return _context8.abrupt("return", true);

                        case 3:
                        case "end":
                          return _context8.stop();
                      }
                    }
                  }, _callee8);
                }));

                function exec() {
                  return _exec8.apply(this, arguments);
                }

                return exec;
              }()
            }, {
              name: "adopt by another class",
              exec: function () {
                var _exec9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                  return regeneratorRuntime.wrap(function _callee9$(_context9) {
                    while (1) {
                      switch (_context9.prev = _context9.next) {
                        case 0:
                          _context9.next = 2;
                          return _this.interactivelyAdoptByClass();

                        case 2:
                          return _context9.abrupt("return", true);

                        case 3:
                        case "end":
                          return _context9.stop();
                      }
                    }
                  }, _callee9);
                }));

                function exec() {
                  return _exec9.apply(this, arguments);
                }

                return exec;
              }()
            }, {
              name: "run selected method",
              exec: function () {
                var _exec10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                  return regeneratorRuntime.wrap(function _callee10$(_context10) {
                    while (1) {
                      switch (_context10.prev = _context10.next) {
                        case 0:
                          _context10.next = 2;
                          return _this.interactivelyRunSelectedMethod();

                        case 2:
                          return _context10.abrupt("return", true);

                        case 3:
                        case "end":
                          return _context10.stop();
                      }
                    }
                  }, _callee10);
                }));

                function exec() {
                  return _exec10.apply(this, arguments);
                }

                return exec;
              }()
            }, {
              name: "jump to definition",
              exec: function () {
                var _exec11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                  var _this$ui, tree, sourceEditor, td, classNodes, items, _yield$_this$world$fi, _yield$_this$world$fi2, choice;

                  return regeneratorRuntime.wrap(function _callee11$(_context11) {
                    while (1) {
                      switch (_context11.prev = _context11.next) {
                        case 0:
                          _this$ui = _this.ui, tree = _this$ui.classTree, sourceEditor = _this$ui.sourceEditor;
                          td = tree.treeData;
                          classNodes = td.getChildren(td.root).slice();
                          items = classNodes.reverse().flatMap(function (node) {
                            var klass = node.target;
                            var methods = td.getChildren(node);
                            return [{
                              isListItem: true,
                              label: [klass, {
                                fontWeight: "bold",
                                fontFamily: "IBM Plex Mono"
                              }],
                              value: {
                                node: node,
                                selector: "selectClass",
                                klass: klass
                              }
                            }].concat(methods.map(function (ea) {
                              return {
                                isListItem: true,
                                label: ["".concat(klass), {
                                  fontSize: "80%",
                                  textStyleClasses: ["v-center-text"],
                                  paddingRight: "10px"
                                }, "".concat(ea.name[1]), {}],
                                value: {
                                  node: ea,
                                  selector: "selectMethod",
                                  klass: klass
                                }
                              };
                            }));
                          });
                          _context11.next = 6;
                          return _this.world().filterableListPrompt("select class or method", items, {
                            historyId: "lively.morphic-object-editor-jump-def-hist",
                            requester: _this.view
                          });

                        case 6:
                          _yield$_this$world$fi = _context11.sent;
                          _yield$_this$world$fi2 = _slicedToArray(_yield$_this$world$fi.selected, 1);
                          choice = _yield$_this$world$fi2[0];

                          if (!choice) {
                            _context11.next = 15;
                            break;
                          }

                          _context11.next = 12;
                          return _this[choice.selector](choice.klass, choice.node.target);

                        case 12:
                          sourceEditor.focus();
                          tree.scrollSelectionIntoView();
                          if (choice.selector === "selectClass") sourceEditor.scroll = pt(0, 0);

                        case 15:
                          return _context11.abrupt("return", true);

                        case 16:
                        case "end":
                          return _context11.stop();
                      }
                    }
                  }, _callee11);
                }));

                function exec() {
                  return _exec11.apply(this, arguments);
                }

                return exec;
              }()
            }, {
              name: "save source",
              exec: function () {
                var _exec12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
                  var view, _yield$_this$doSave, success, reason, warnings;

                  return regeneratorRuntime.wrap(function _callee12$(_context12) {
                    while (1) {
                      switch (_context12.prev = _context12.next) {
                        case 0:
                          _context12.prev = 0;
                          view = _this.view;
                          _context12.next = 4;
                          return _this.doSave();

                        case 4:
                          _yield$_this$doSave = _context12.sent;
                          success = _yield$_this$doSave.success;
                          reason = _yield$_this$doSave.reason;
                          warnings = _yield$_this$doSave.warnings;

                          if (!(warnings && warnings.length > 0)) {
                            _context12.next = 11;
                            break;
                          }

                          view.setStatusMessage(["Saved with warnings:"].concat(warnings.map(function (warning) {
                            return "\"".concat(warning.message, "\" on line ").concat(warning.line);
                          })).join("\n"), warnings.some(function (w) {
                            return w.severity === 2;
                          }) ? StatusMessageError : StatusMessageWarning, 5000, {
                            isCompact: false
                          });
                          return _context12.abrupt("return", true);

                        case 11:
                          view.setStatusMessage(success ? "saved" : reason, success ? StatusMessageConfirm : StatusMessageError, 5000, {
                            extent: pt(view.width, 40)
                          });
                          _context12.next = 17;
                          break;

                        case 14:
                          _context12.prev = 14;
                          _context12.t0 = _context12["catch"](0);

                          _this.view.showError(_context12.t0);

                        case 17:
                          return _context12.abrupt("return", true);

                        case 18:
                        case "end":
                          return _context12.stop();
                      }
                    }
                  }, _callee12, null, [[0, 14]]);
                }));

                function exec() {
                  return _exec12.apply(this, arguments);
                }

                return exec;
              }()
            }, {
              name: "open class in system browser",
              exec: function () {
                var _exec13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(_) {
                  var opts,
                      _args13 = arguments;
                  return regeneratorRuntime.wrap(function _callee13$(_context13) {
                    while (1) {
                      switch (_context13.prev = _context13.next) {
                        case 0:
                          opts = _args13.length > 1 && _args13[1] !== undefined ? _args13[1] : {
                            klass: null
                          };
                          return _context13.abrupt("return", _this.browseClass(opts.klass));

                        case 2:
                        case "end":
                          return _context13.stop();
                      }
                    }
                  }, _callee13);
                }));

                function exec(_x) {
                  return _exec13.apply(this, arguments);
                }

                return exec;
              }()
            }, {
              name: "open object inspector for target",
              exec: function () {
                var _exec14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
                  return regeneratorRuntime.wrap(function _callee14$(_context14) {
                    while (1) {
                      switch (_context14.prev = _context14.next) {
                        case 0:
                          return _context14.abrupt("return", _this.world().execCommand("open object inspector", {
                            target: _this.target
                          }));

                        case 1:
                        case "end":
                          return _context14.stop();
                      }
                    }
                  }, _callee14);
                }));

                function exec() {
                  return _exec14.apply(this, arguments);
                }

                return exec;
              }()
            }, {
              name: "freeze target",
              exec: function () {
                var _exec15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
                  return regeneratorRuntime.wrap(function _callee15$(_context15) {
                    while (1) {
                      switch (_context15.prev = _context15.next) {
                        case 0:
                          _context15.prev = 0;
                          _context15.next = 3;
                          return interactivelyFreezePart(_this.target, _this.view);

                        case 3:
                          _context15.next = 8;
                          break;

                        case 5:
                          _context15.prev = 5;
                          _context15.t0 = _context15["catch"](0);
                          if (_context15.t0 === "canceled") _this.view.setStatusMessage("canceled");else _this.view.showError(_context15.t0);

                        case 8:
                        case "end":
                          return _context15.stop();
                      }
                    }
                  }, _callee15, null, [[0, 5]]);
                }));

                function exec() {
                  return _exec15.apply(this, arguments);
                }

                return exec;
              }()
            }, {
              name: "choose target",
              exec: function () {
                var _exec16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
                  var view, _yield$_this$world$ex, _yield$_this$world$ex2, selected, _selected;

                  return regeneratorRuntime.wrap(function _callee19$(_context19) {
                    while (1) {
                      switch (_context19.prev = _context19.next) {
                        case 0:
                          view = _this.view;

                          if (!view.env.eventDispatcher.isKeyPressed("Shift")) {
                            _context19.next = 18;
                            break;
                          }

                          if (!_this.context.isRemote) {
                            _context19.next = 10;
                            break;
                          }

                          _this._loadingIndicator = open$1("Connecting to Remote...");
                          _context19.next = 6;
                          return _this.withContextDo( /*#__PURE__*/function () {
                            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(ctx) {
                              var selectionFn, _yield$$world$execCom, _yield$$world$execCom2, selected;

                              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                                while (1) {
                                  switch (_context18.prev = _context18.next) {
                                    case 0:
                                      if (ctx.target.isMorph) {
                                        _context18.next = 2;
                                        break;
                                      }

                                      return _context18.abrupt("return");

                                    case 2:
                                      selectionFn = /*#__PURE__*/function () {
                                        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(title, items, opts) {
                                          var editorCallback, res, selected, action;
                                          return regeneratorRuntime.wrap(function _callee17$(_context17) {
                                            while (1) {
                                              switch (_context17.prev = _context17.next) {
                                                case 0:
                                                  editorCallback = stringifyFunctionWithoutToplevelRecorder( /*#__PURE__*/function () {
                                                    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(ed) {
                                                      var res;
                                                      return regeneratorRuntime.wrap(function _callee16$(_context16) {
                                                        while (1) {
                                                          switch (_context16.prev = _context16.next) {
                                                            case 0:
                                                              ed._loadingIndicator.remove();

                                                              _context16.next = 3;
                                                              return ed.world().filterableListPrompt(title, items, opts);

                                                            case 3:
                                                              res = _context16.sent;
                                                              ed._loadingIndicator = open$1("Switching Target...");
                                                              return _context16.abrupt("return", res);

                                                            case 6:
                                                            case "end":
                                                              return _context16.stop();
                                                          }
                                                        }
                                                      }, _callee16);
                                                    }));

                                                    return function (_x6) {
                                                      return _ref3.apply(this, arguments);
                                                    };
                                                  }());
                                                  _context17.next = 3;
                                                  return ctx.withEditorDo(editorCallback, {
                                                    items: items.map(function (item) {
                                                      item.value = item.value.id;
                                                      return item;
                                                    }),
                                                    title: title,
                                                    opts: opts
                                                  });

                                                case 3:
                                                  res = _context17.sent;
                                                  selected = res.selected, action = res.action;
                                                  selected = selected.map(function (id) {
                                                    return $world.getMorphWithId(id);
                                                  });
                                                  return _context17.abrupt("return", {
                                                    selected: selected,
                                                    action: action
                                                  });

                                                case 7:
                                                case "end":
                                                  return _context17.stop();
                                              }
                                            }
                                          }, _callee17);
                                        }));

                                        return function selectionFn(_x3, _x4, _x5) {
                                          return _ref2.apply(this, arguments);
                                        };
                                      }();

                                      _context18.next = 5;
                                      return $world.execCommand("select morph", {
                                        selectionFn: selectionFn,
                                        justReturn: true,
                                        root: [ctx.target].concat(_toConsumableArray(ctx.target.ownerChain())).find(function (m) {
                                          return m.owner.isWorld;
                                        })
                                      });

                                    case 5:
                                      _yield$$world$execCom = _context18.sent;
                                      _yield$$world$execCom2 = _slicedToArray(_yield$$world$execCom, 1);
                                      selected = _yield$$world$execCom2[0];

                                      if (!selected) {
                                        _context18.next = 11;
                                        break;
                                      }

                                      _context18.next = 11;
                                      return ctx.selectTarget(selected);

                                    case 11:
                                    case "end":
                                      return _context18.stop();
                                  }
                                }
                              }, _callee18);
                            }));

                            return function (_x2) {
                              return _ref.apply(this, arguments);
                            };
                          }());

                        case 6:
                          _context19.next = 8;
                          return _this.refresh();

                        case 8:
                          _this._loadingIndicator.remove();

                          return _context19.abrupt("return");

                        case 10:
                          _context19.next = 12;
                          return _this.world().execCommand("select morph", {
                            justReturn: true,
                            root: [_this.target].concat(_toConsumableArray(_this.target.ownerChain())).find(function (m) {
                              return m.owner.isWorld;
                            })
                          });

                        case 12:
                          _yield$_this$world$ex = _context19.sent;
                          _yield$_this$world$ex2 = _slicedToArray(_yield$_this$world$ex, 1);
                          selected = _yield$_this$world$ex2[0];
                          if (selected) _this.selectTarget(selected);
                          _context19.next = 22;
                          break;

                        case 18:
                          _context19.next = 20;
                          return InteractiveMorphSelector.selectMorph(_this.world());

                        case 20:
                          _selected = _context19.sent;
                          if (_selected) _this.selectTarget(_selected);

                        case 22:
                          view.focus();
                          return _context19.abrupt("return", _this.target);

                        case 24:
                        case "end":
                          return _context19.stop();
                      }
                    }
                  }, _callee19);
                }));

                function exec() {
                  return _exec16.apply(this, arguments);
                }

                return exec;
              }()
            }, {
              name: "open browse snippet",
              exec: function exec() {
                return _this.world().execCommand("open workspace", {
                  content: _this.browseSnippetForSelection(),
                  language: "javascript"
                });
              }
            }];
          }
        }, {
          key: "viewDidLoad",
          value: function ObjectEditorModel_viewDidLoad_() {
            var _this2 = this;

            this.ui.sourceEditor.addCommands([{
              name: "[javascript] fix undeclared variables",
              exec: function exec() {
                return _this2.interactivlyFixUndeclaredVariables();
              }
            }, {
              name: "[javascript] inject import",
              exec: function exec() {
                return _this2.interactivelyAddImport();
              }
            }, {
              name: "[javascript] remove unused imports",
              exec: function exec() {
                return _this2.interactivelyRemoveUnusedImports();
              }
            }]);
          }
        }, {
          key: "warnForUnsavedChanges",
          value: function () {
            var _ObjectEditorModel_warnForUnsavedChanges_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      _context20.next = 2;
                      return this.world().confirm(["Discard Changes\n", {}, "The unsaved changes to this module are going to be discarded.\nAre you sure you want to proceed?", {
                        fontSize: 16,
                        fontWeight: "normal"
                      }], {
                        requester: this.view,
                        width: 350
                      });

                    case 2:
                      return _context20.abrupt("return", _context20.sent);

                    case 3:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));

            function ObjectEditorModel_warnForUnsavedChanges_() {
              return _ObjectEditorModel_warnForUnsavedChanges_.apply(this, arguments);
            }

            return ObjectEditorModel_warnForUnsavedChanges_;
          }()
        }, {
          key: "onWindowClose",
          value: function () {
            var _ObjectEditorModel_onWindowClose_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
              var proceed;
              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      proceed = true;
                      _context21.next = 3;
                      return this.hasUnsavedChanges();

                    case 3:
                      if (!_context21.sent) {
                        _context21.next = 7;
                        break;
                      }

                      _context21.next = 6;
                      return this.warnForUnsavedChanges();

                    case 6:
                      proceed = _context21.sent;

                    case 7:
                      if (!proceed) {
                        _context21.next = 11;
                        break;
                      }

                      this.context.dispose();
                      _context21.next = 12;
                      break;

                    case 11:
                      return _context21.abrupt("return", false);

                    case 12:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this);
            }));

            function ObjectEditorModel_onWindowClose_() {
              return _ObjectEditorModel_onWindowClose_.apply(this, arguments);
            }

            return ObjectEditorModel_onWindowClose_;
          }()
        }, {
          key: "isShowingImports",
          value: function ObjectEditorModel_isShowingImports_() {
            return this.view.layout.grid.col(2).width > 10;
          }
        }, {
          key: "sourceDescriptorFor",
          value: function ObjectEditorModel_sourceDescriptorFor_(klass) {
            return RuntimeSourceDescriptor["for"](klass);
          }
        }, {
          key: "classChainOfTarget",
          value: function ObjectEditorModel_classChainOfTarget_() {
            return withSuperclasses(this.target.constructor);
          }
        }, {
          key: "toggleShowingImports",
          value: function () {
            var _ObjectEditorModel_toggleShowingImports_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
              var timeout,
                  view,
                  _this$ui2,
                  importController,
                  sourceEditor,
                  expandedWidth,
                  enable,
                  newWidth,
                  column,
                  _args22 = arguments;

              return regeneratorRuntime.wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      timeout = _args22.length > 0 && _args22[0] !== undefined ? _args22[0] : 300;
                      view = this.view, _this$ui2 = this.ui, importController = _this$ui2.importController, sourceEditor = _this$ui2.sourceEditor;
                      expandedWidth = importController.getExpandedWidth();
                      enable = !this.isShowingImports();
                      newWidth = enable ? expandedWidth : -expandedWidth;
                      column = view.layout.grid.col(2);
                      view.layout.disable();
                      importController.layout.disable();
                      column.width += newWidth;
                      column.before.width -= newWidth;
                      importController.layout.col(0).width = enable ? expandedWidth : 0;
                      importController.layout.enable(timeout ? {
                        duration: timeout
                      } : null);
                      _context22.next = 14;
                      return view.layout.enable(timeout ? {
                        duration: timeout
                      } : null);

                    case 14:
                      (enable ? importController : sourceEditor).focus();
                      _context22.next = 17;
                      return delay(2 * timeout);

                    case 17:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22, this);
            }));

            function ObjectEditorModel_toggleShowingImports_() {
              return _ObjectEditorModel_toggleShowingImports_.apply(this, arguments);
            }

            return ObjectEditorModel_toggleShowingImports_;
          }()
        }, {
          key: "ensureProperWindowStyle",
          value: function () {
            var _ObjectEditorModel_ensureProperWindowStyle_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
              var animated,
                  duration,
                  theme,
                  styleClasses,
                  window,
                  _args23 = arguments;
              return regeneratorRuntime.wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      animated = _args23.length > 0 && _args23[0] !== undefined ? _args23[0] : true;
                      duration = 300;
                      window = this.view.getWindow();
                      _context23.next = 5;
                      return this.editorPlugin.runEval("System.get('@system-env').node");

                    case 5:
                      if (!_context23.sent.value) {
                        _context23.next = 10;
                        break;
                      }

                      styleClasses = [].concat(_toConsumableArray(without(window.styleClasses, "local")), ["node"]);
                      theme = DarkTheme.instance;
                      _context23.next = 12;
                      break;

                    case 10:
                      styleClasses = ["local"].concat(_toConsumableArray(without(window.styleClasses, "node")));
                      theme = DefaultTheme.instance;

                    case 12:
                      this.editorPlugin.theme = theme;

                      if (animated) {
                        window.animate({
                          duration: duration,
                          styleClasses: styleClasses
                        });
                        this.ui.sourceEditor.animate({
                          fill: theme.background,
                          duration: duration
                        });
                      } else {
                        window.styleClasses = styleClasses;
                      }

                      this.ui.sourceEditor.textString = this.ui.sourceEditor.textString;
                      this.editorPlugin.highlight();

                    case 16:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23, this);
            }));

            function ObjectEditorModel_ensureProperWindowStyle_() {
              return _ObjectEditorModel_ensureProperWindowStyle_.apply(this, arguments);
            }

            return ObjectEditorModel_ensureProperWindowStyle_;
          }()
        }, {
          key: "selectTarget",
          value: function () {
            var _ObjectEditorModel_selectTarget_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24(target, evalEnvironment) {
              var _this$ui3, classTree, openInBrowserButton, publishButton;

              return regeneratorRuntime.wrap(function _callee24$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      _this$ui3 = this.ui, classTree = _this$ui3.classTree, openInBrowserButton = _this$ui3.openInBrowserButton, publishButton = _this$ui3.publishButton;
                      _context24.next = 3;
                      return ObjectEditorContext["for"](target, this, evalEnvironment);

                    case 3:
                      this.context = _context24.sent;
                      _context24.next = 6;
                      return this.withContextDo(function (ctx) {
                        return !ctx.target.isMorph;
                      });

                    case 6:
                      if (!_context24.sent) {
                        _context24.next = 10;
                        break;
                      }

                      publishButton.disable();
                      _context24.next = 11;
                      break;

                    case 10:
                      publishButton.enable();

                    case 11:
                      _context24.next = 13;
                      return this.withContextDo(function (ctx) {
                        return !ctx.target.constructor[Symbol["for"]("lively-module-meta")]["package"].name;
                      });

                    case 13:
                      if (!_context24.sent) {
                        _context24.next = 17;
                        break;
                      }

                      openInBrowserButton.disable();
                      _context24.next = 18;
                      break;

                    case 17:
                      openInBrowserButton.enable();

                    case 18:
                      _context24.next = 20;
                      return this.withContextDo(function (ctx) {
                        return ctx.classTreeData;
                      });

                    case 20:
                      classTree.treeData = _context24.sent;
                      _context24.next = 23;
                      return this.selectClass(this.context.selectedClassName);

                    case 23:
                      this.ensureProperWindowStyle();

                    case 24:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, _callee24, this);
            }));

            function ObjectEditorModel_selectTarget_(_x7, _x8) {
              return _ObjectEditorModel_selectTarget_.apply(this, arguments);
            }

            return ObjectEditorModel_selectTarget_;
          }()
        }, {
          key: "withContextDo",
          value: function () {
            var _ObjectEditorModel_withContextDo_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee25(fn, varMapping) {
              return regeneratorRuntime.wrap(function _callee25$(_context25) {
                while (1) {
                  switch (_context25.prev = _context25.next) {
                    case 0:
                      _context25.next = 2;
                      return this.context.withContextDo(fn, varMapping);

                    case 2:
                      return _context25.abrupt("return", _context25.sent);

                    case 3:
                    case "end":
                      return _context25.stop();
                  }
                }
              }, _callee25, this);
            }));

            function ObjectEditorModel_withContextDo_(_x9, _x10) {
              return _ObjectEditorModel_withContextDo_.apply(this, arguments);
            }

            return ObjectEditorModel_withContextDo_;
          }()
        }, {
          key: "refresh",
          value: function () {
            var _ObjectEditorModel_refresh_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
              var keepCursor,
                  _this$ui4,
                  ed,
                  tree,
                  oldPos,
                  _yield$this$withConte,
                  className,
                  treeData,
                  _args27 = arguments;

              return regeneratorRuntime.wrap(function _callee27$(_context27) {
                while (1) {
                  switch (_context27.prev = _context27.next) {
                    case 0:
                      keepCursor = _args27.length > 0 && _args27[0] !== undefined ? _args27[0] : false;
                      _this$ui4 = this.ui, ed = _this$ui4.sourceEditor, tree = _this$ui4.classTree;
                      oldPos = ed.cursorPosition;
                      _context27.next = 5;
                      return this.withContextDo( /*#__PURE__*/function () {
                        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee26(ctx) {
                          var res;
                          return regeneratorRuntime.wrap(function _callee26$(_context26) {
                            while (1) {
                              switch (_context26.prev = _context26.next) {
                                case 0:
                                  res = {
                                    className: ctx.selectedClass && ctx.selectedClass.name,
                                    methodName: ctx.selectedMethod && ctx.selectedMethod.name
                                  };
                                  _context26.next = 3;
                                  return ctx.refresh();

                                case 3:
                                  res.treeData = ctx.classTreeData;
                                  return _context26.abrupt("return", res);

                                case 5:
                                case "end":
                                  return _context26.stop();
                              }
                            }
                          }, _callee26);
                        }));

                        return function (_x11) {
                          return _ref4.apply(this, arguments);
                        };
                      }());

                    case 5:
                      _yield$this$withConte = _context27.sent;
                      className = _yield$this$withConte.className;
                      treeData = _yield$this$withConte.treeData;
                      _context27.next = 10;
                      return tree.maintainViewStateWhile(function () {
                        return tree.treeData = treeData;
                      }, function (node) {
                        return node.isClass ? node.target : node.name;
                      });

                    case 10:
                      if (!(className && !tree.selectedNode)) {
                        _context27.next = 13;
                        break;
                      }

                      _context27.next = 13;
                      return this.selectClass(className);

                    case 13:
                      if (keepCursor) ed.cursorPosition = oldPos;

                    case 14:
                    case "end":
                      return _context27.stop();
                  }
                }
              }, _callee27, this);
            }));

            function ObjectEditorModel_refresh_() {
              return _ObjectEditorModel_refresh_.apply(this, arguments);
            }

            return ObjectEditorModel_refresh_;
          }()
        }, {
          key: "updateKnownGlobals",
          value: function () {
            var _ObjectEditorModel_updateKnownGlobals_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
              var declaredNames;
              return regeneratorRuntime.wrap(function _callee29$(_context29) {
                while (1) {
                  switch (_context29.prev = _context29.next) {
                    case 0:
                      _context29.next = 2;
                      return this.withContextDo( /*#__PURE__*/function () {
                        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee28(ctx) {
                          var declaredNames, klass, descr;
                          return regeneratorRuntime.wrap(function _callee28$(_context28) {
                            while (1) {
                              switch (_context28.prev = _context28.next) {
                                case 0:
                                  declaredNames = [];
                                  klass = ctx.selectedClass;

                                  if (!klass) {
                                    _context28.next = 9;
                                    break;
                                  }

                                  descr = ctx.sourceDescriptorFor(klass);
                                  _context28.next = 6;
                                  return descr.declaredAndUndeclaredNames;

                                case 6:
                                  __varRecorder__$1.__inter0__ = _context28.sent;
                                  declaredNames = __varRecorder__$1.__inter0__.declaredNames;
                                  __varRecorder__$1.__inter0__;

                                case 9:
                                  Object.assign(ctx.evalEnvironment, {
                                    knownGlobals: declaredNames
                                  });
                                  return _context28.abrupt("return", declaredNames);

                                case 11:
                                case "end":
                                  return _context28.stop();
                              }
                            }
                          }, _callee28);
                        }));

                        return function (_x12) {
                          return _ref5.apply(this, arguments);
                        };
                      }());

                    case 2:
                      declaredNames = _context29.sent;
                      Object.assign(this.editorPlugin.evalEnvironment, {
                        knownGlobals: declaredNames
                      });
                      this.editorPlugin.highlight();

                    case 5:
                    case "end":
                      return _context29.stop();
                  }
                }
              }, _callee29, this);
            }));

            function ObjectEditorModel_updateKnownGlobals_() {
              return _ObjectEditorModel_updateKnownGlobals_.apply(this, arguments);
            }

            return ObjectEditorModel_updateKnownGlobals_;
          }()
        }, {
          key: "updateSource",
          value: function () {
            var _ObjectEditorModel_updateSource_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee31(source) {
              var targetModule,
                  ed,
                  format,
                  hashCode$1,
                  _args31 = arguments;
              return regeneratorRuntime.wrap(function _callee31$(_context31) {
                while (1) {
                  switch (_context31.prev = _context31.next) {
                    case 0:
                      targetModule = _args31.length > 1 && _args31[1] !== undefined ? _args31[1] : "lively://object-editor/" + this.id;
                      ed = this.ui.sourceEditor;
                      _context31.next = 4;
                      return this.withContextDo( /*#__PURE__*/function () {
                        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee30(ctx) {
                          var system, format;
                          return regeneratorRuntime.wrap(function _callee30$(_context30) {
                            while (1) {
                              switch (_context30.prev = _context30.next) {
                                case 0:
                                  system = ctx.evalEnvironment.systemInterface;
                                  _context30.next = 3;
                                  return system.moduleFormat(targetModule);

                                case 3:
                                  _context30.t0 = _context30.sent;

                                  if (_context30.t0) {
                                    _context30.next = 6;
                                    break;
                                  }

                                  _context30.t0 = "esm";

                                case 6:
                                  format = _context30.t0;
                                  Object.assign(ctx.evalEnvironment, {
                                    targetModule: targetModule,
                                    format: format
                                  });
                                  return _context30.abrupt("return", format);

                                case 9:
                                case "end":
                                  return _context30.stop();
                              }
                            }
                          }, _callee30);
                        }));

                        return function (_x14) {
                          return _ref6.apply(this, arguments);
                        };
                      }(), {
                        targetModule: targetModule
                      });

                    case 4:
                      format = _context31.sent;

                      if (ed.textString !== source) {
                        ed.textString = source;
                      }

                      Object.assign(this.editorPlugin.evalEnvironment, {
                        targetModule: targetModule,
                        format: format
                      });
                      hashCode$1 = hashCode(source);
                      _context31.next = 10;
                      return this.withContextDo(function (ctx) {
                        ctx.moduleChangeWarning = null;
                        ctx.sourceHash = hashCode$1;
                      }, {
                        hashCode: hashCode$1
                      });

                    case 10:
                      _context31.next = 12;
                      return this.clearLocalProperties();

                    case 12:
                      this.indicateNoUnsavedChanges();

                    case 13:
                    case "end":
                      return _context31.stop();
                  }
                }
              }, _callee31, this);
            }));

            function ObjectEditorModel_updateSource_(_x13) {
              return _ObjectEditorModel_updateSource_.apply(this, arguments);
            }

            return ObjectEditorModel_updateSource_;
          }()
        }, {
          key: "clearLocalProperties",
          value: function () {
            var _ObjectEditorModel_clearLocalProperties_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee32() {
              return regeneratorRuntime.wrap(function _callee32$(_context32) {
                while (1) {
                  switch (_context32.prev = _context32.next) {
                    case 0:
                      _context32.next = 2;
                      return this.withContextDo(function (ctx) {
                        var _ctx$target$propertie = ctx.target.propertiesAndPropertySettings(),
                            properties = _ctx$target$propertie.properties;

                        for (var prop in properties) {
                          if (ctx.target.hasOwnProperty(prop)) {
                            if (ctx.target[prop] && ctx.target[prop].isConnectionWrapper) continue;
                            if (ctx.hasOwnProperty("$$" + prop)) delete ctx.target[prop];
                          }
                        }
                      });

                    case 2:
                    case "end":
                      return _context32.stop();
                  }
                }
              }, _callee32, this);
            }));

            function ObjectEditorModel_clearLocalProperties_() {
              return _ObjectEditorModel_clearLocalProperties_.apply(this, arguments);
            }

            return ObjectEditorModel_clearLocalProperties_;
          }()
        }, {
          key: "indicateUnsavedChanges",
          value: function ObjectEditorModel_indicateUnsavedChanges_() {
            var sourceEditor = this.ui.sourceEditor;
            this.view.layout.col(1).paddingRight = 1;
            sourceEditor.padding = sourceEditor.padding.withWidth(-1);
            sourceEditor.borderColor = Color.red;
          }
        }, {
          key: "indicateNoUnsavedChanges",
          value: function ObjectEditorModel_indicateNoUnsavedChanges_() {
            var sourceEditor = this.ui.sourceEditor;
            this.view.layout.col(1).paddingRight = 0;
            sourceEditor.padding = sourceEditor.padding.withWidth(0);
            sourceEditor.borderColor = Color.gray;
          }
        }, {
          key: "hasUnsavedChanges",
          value: function () {
            var _ObjectEditorModel_hasUnsavedChanges_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee33() {
              return regeneratorRuntime.wrap(function _callee33$(_context33) {
                while (1) {
                  switch (_context33.prev = _context33.next) {
                    case 0:
                      _context33.next = 2;
                      return this.withContextDo(function (ctx) {
                        return ctx.sourceHash;
                      });

                    case 2:
                      _context33.t0 = _context33.sent;
                      _context33.t1 = hashCode(this.ui.sourceEditor.textString);
                      return _context33.abrupt("return", _context33.t0 !== _context33.t1);

                    case 5:
                    case "end":
                      return _context33.stop();
                  }
                }
              }, _callee33, this);
            }));

            function ObjectEditorModel_hasUnsavedChanges_() {
              return _ObjectEditorModel_hasUnsavedChanges_.apply(this, arguments);
            }

            return ObjectEditorModel_hasUnsavedChanges_;
          }()
        }, {
          key: "updateUnsavedChangeIndicator",
          value: function () {
            var _ObjectEditorModel_updateUnsavedChangeIndicator_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee34() {
              return regeneratorRuntime.wrap(function _callee34$(_context34) {
                while (1) {
                  switch (_context34.prev = _context34.next) {
                    case 0:
                      _context34.next = 2;
                      return this.hasUnsavedChanges();

                    case 2:
                      if (!_context34.sent) {
                        _context34.next = 6;
                        break;
                      }

                      _context34.t0 = "indicateUnsavedChanges";
                      _context34.next = 7;
                      break;

                    case 6:
                      _context34.t0 = "indicateNoUnsavedChanges";

                    case 7:
                      _context34.t1 = _context34.t0;

                      this[_context34.t1]();

                    case 9:
                    case "end":
                      return _context34.stop();
                  }
                }
              }, _callee34, this);
            }));

            function ObjectEditorModel_updateUnsavedChangeIndicator_() {
              return _ObjectEditorModel_updateUnsavedChangeIndicator_.apply(this, arguments);
            }

            return ObjectEditorModel_updateUnsavedChangeIndicator_;
          }()
        }, {
          key: "updateUnsavedChangeIndicatorDebounced",
          value: function ObjectEditorModel_updateUnsavedChangeIndicatorDebounced_() {
            var _this3 = this;

            debounceNamed(this.id + "-updateUnsavedChangeIndicatorDebounced", 20, function () {
              return _this3.updateUnsavedChangeIndicator();
            })();
          }
        }, {
          key: "reactToModuleChange",
          value: function () {
            var _ObjectEditorModel_reactToModuleChange_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee35(newClassSource) {
              var ed;
              return regeneratorRuntime.wrap(function _callee35$(_context35) {
                while (1) {
                  switch (_context35.prev = _context35.next) {
                    case 0:
                      ed = this.ui.sourceEditor;
                      _context35.next = 3;
                      return this.hasUnsavedChanges();

                    case 3:
                      if (!_context35.sent) {
                        _context35.next = 8;
                        break;
                      }

                      if (!(hashCode(ed.textString) !== hashCode(newClassSource))) {
                        _context35.next = 8;
                        break;
                      }

                      _context35.next = 7;
                      return this.withContextDo(function (ctx) {
                        return ctx.addModuleChangeWarning();
                      });

                    case 7:
                      return _context35.abrupt("return");

                    case 8:
                      _context35.next = 10;
                      return this.refresh(true);

                    case 10:
                    case "end":
                      return _context35.stop();
                  }
                }
              }, _callee35, this);
            }));

            function ObjectEditorModel_reactToModuleChange_(_x15) {
              return _ObjectEditorModel_reactToModuleChange_.apply(this, arguments);
            }

            return ObjectEditorModel_reactToModuleChange_;
          }()
        }, {
          key: "onModuleChanged",
          value: function () {
            var _ObjectEditorModel_onModuleChanged_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee36(evt) {
              var newClassSource;
              return regeneratorRuntime.wrap(function _callee36$(_context36) {
                while (1) {
                  switch (_context36.prev = _context36.next) {
                    case 0:
                      if (!(!this.context || this.context.isRemote)) {
                        _context36.next = 2;
                        break;
                      }

                      return _context36.abrupt("return");

                    case 2:
                      _context36.next = 4;
                      return this.context.onModuleChanged(evt);

                    case 4:
                      newClassSource = _context36.sent;
                      if (newClassSource) this.reactToModuleChange(newClassSource);

                    case 6:
                    case "end":
                      return _context36.stop();
                  }
                }
              }, _callee36, this);
            }));

            function ObjectEditorModel_onModuleChanged_(_x16) {
              return _ObjectEditorModel_onModuleChanged_.apply(this, arguments);
            }

            return ObjectEditorModel_onModuleChanged_;
          }()
        }, {
          key: "onModuleLoaded",
          value: function ObjectEditorModel_onModuleLoaded_(evt) {
            this.onModuleChanged(evt);
          }
        }, {
          key: "browse",
          value: function () {
            var _ObjectEditorModel_browse_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee37(spec) {
              var target, className, methodName, textPosition, scroll, classTreeScroll, evalEnvironment, _this$ui5, classTree, sourceEditor;

              return regeneratorRuntime.wrap(function _callee37$(_context37) {
                while (1) {
                  switch (_context37.prev = _context37.next) {
                    case 0:
                      target = spec.target, className = spec.className, methodName = spec.methodName, textPosition = spec.textPosition, scroll = spec.scroll, classTreeScroll = spec.classTreeScroll, evalEnvironment = spec.evalEnvironment;

                      if (!target) {
                        _context37.next = 4;
                        break;
                      }

                      _context37.next = 4;
                      return this.selectTarget(target, evalEnvironment);

                    case 4:
                      if (className) {
                        _context37.next = 8;
                        break;
                      }

                      _context37.next = 7;
                      return this.withContextDo(function (ctx) {
                        return ctx.selectedClass.name;
                      });

                    case 7:
                      className = _context37.sent;

                    case 8:
                      if (!(className && methodName)) {
                        _context37.next = 13;
                        break;
                      }

                      _context37.next = 11;
                      return this.selectMethod(className, methodName, false);

                    case 11:
                      _context37.next = 16;
                      break;

                    case 13:
                      if (!className) {
                        _context37.next = 16;
                        break;
                      }

                      _context37.next = 16;
                      return this.selectClass(className);

                    case 16:
                      _this$ui5 = this.ui, classTree = _this$ui5.classTree, sourceEditor = _this$ui5.sourceEditor;
                      if (scroll) sourceEditor.scroll = scroll;
                      if (textPosition) sourceEditor.cursorPosition = textPosition;
                      if (classTreeScroll) classTree.scroll = classTreeScroll;
                      return _context37.abrupt("return", this);

                    case 21:
                    case "end":
                      return _context37.stop();
                  }
                }
              }, _callee37, this);
            }));

            function ObjectEditorModel_browse_(_x17) {
              return _ObjectEditorModel_browse_.apply(this, arguments);
            }

            return ObjectEditorModel_browse_;
          }()
        }, {
          key: "browseSpec",
          value: function () {
            var _ObjectEditorModel_browseSpec_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee38() {
              var complete,
                  _this$ui6,
                  classTreeScroll,
                  _this$ui6$sourceEdito,
                  scroll,
                  textPosition,
                  _yield$this$withConte2,
                  className,
                  methodName,
                  _args38 = arguments;

              return regeneratorRuntime.wrap(function _callee38$(_context38) {
                while (1) {
                  switch (_context38.prev = _context38.next) {
                    case 0:
                      complete = _args38.length > 0 && _args38[0] !== undefined ? _args38[0] : true;
                      _this$ui6 = this.ui, classTreeScroll = _this$ui6.classTree.scroll, _this$ui6$sourceEdito = _this$ui6.sourceEditor, scroll = _this$ui6$sourceEdito.scroll, textPosition = _this$ui6$sourceEdito.cursorPosition;
                      _context38.next = 4;
                      return this.withContextDo(function (ctx) {
                        var className = ctx.selectedClass && ctx.selectedClass.name;
                        var methodName = ctx.selectedMethod && ctx.selectedMethod.name;
                        return {
                          className: className,
                          methodName: methodName
                        };
                      });

                    case 4:
                      _yield$this$withConte2 = _context38.sent;
                      className = _yield$this$withConte2.className;
                      methodName = _yield$this$withConte2.methodName;
                      return _context38.abrupt("return", Object.assign({
                        target: this.context.target,
                        className: className,
                        methodName: methodName,
                        evalEnvironment: this.context.evalEnvironment
                      }, complete ? {
                        scroll: scroll,
                        textPosition: textPosition,
                        classTreeScroll: classTreeScroll
                      } : {}));

                    case 8:
                    case "end":
                      return _context38.stop();
                  }
                }
              }, _callee38, this);
            }));

            function ObjectEditorModel_browseSpec_() {
              return _ObjectEditorModel_browseSpec_.apply(this, arguments);
            }

            return ObjectEditorModel_browseSpec_;
          }()
        }, {
          key: "browseClass",
          value: function () {
            var _ObjectEditorModel_browseClass_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee39(klass) {
              var className, moduleName, _varRecorder__$__int;

              return regeneratorRuntime.wrap(function _callee39$(_context39) {
                while (1) {
                  switch (_context39.prev = _context39.next) {
                    case 0:
                      if (!klass) {
                        _context39.next = 4;
                        break;
                      }

                      __varRecorder__$1.__inter1__ = this.context.sourceDescriptorFor(klass), className = __varRecorder__$1.__inter1__.name, (_varRecorder__$__int = __varRecorder__$1.__inter1__.module, moduleName = _varRecorder__$__int.id, _varRecorder__$__int), __varRecorder__$1.__inter1__;
                      _context39.next = 10;
                      break;

                    case 4:
                      _context39.next = 6;
                      return this.withContextDo(function (ctx) {
                        if (!ctx.selectedClass) return {};
                        var desc = ctx.sourceDescriptorFor(ctx.selectedClass);
                        return {
                          className: desc.name,
                          moduleName: desc.module.id
                        };
                      });

                    case 6:
                      __varRecorder__$1.__inter2__ = _context39.sent;
                      className = __varRecorder__$1.__inter2__.className;
                      moduleName = __varRecorder__$1.__inter2__.moduleName;
                      __varRecorder__$1.__inter2__;

                    case 10:
                      if (!(moduleName && className)) {
                        _context39.next = 12;
                        break;
                      }

                      return _context39.abrupt("return", this.world().execCommand("open browser", {
                        moduleName: moduleName,
                        codeEntity: {
                          name: className
                        },
                        systemInterface: this.systemInterface
                      }));

                    case 12:
                      this.view.setStatusMessage("No class specified");
                      return _context39.abrupt("return", true);

                    case 14:
                    case "end":
                      return _context39.stop();
                  }
                }
              }, _callee39, this);
            }));

            function ObjectEditorModel_browseClass_(_x18) {
              return _ObjectEditorModel_browseClass_.apply(this, arguments);
            }

            return ObjectEditorModel_browseClass_;
          }()
        }, {
          key: "browseSnippetForSelection",
          value: function ObjectEditorModel_browseSnippetForSelection_() {
            var c = this.context.selectedClassName;
            var m = this.selectedMethod;
            var t = this.target;
            var codeSnip = "$world.execCommand(\"open object editor\", {";
            codeSnip += "target: ".concat(generateReferenceExpression(t));
            if (c) codeSnip += ", selectedClass: \"".concat(c, "\"");
            if (m && c) codeSnip += ", selectedMethod: \"".concat(m.name, "\"");
            codeSnip += "});";
            return codeSnip;
          }
        }, {
          key: "onClassTreeSelection",
          value: function ObjectEditorModel_onClassTreeSelection_(node) {
            if (!node) {
              return;
            }

            if (isString(node.target) || isClass(node.target)) {
              this.selectClass(node.target);
              return;
            }

            var tree = this.ui.classTree;
            var parentNode = tree.treeData.parentNode(node);
            var isClick = !!Path("env.eventDispatcher.eventState.clickedOnMorph").get(this.view);
            this.selectMethod(parentNode.target, node.target, isClick);
          }
        }, {
          key: "contextMenuForClassTree",
          value: function ObjectEditorModel_contextMenuForClassTree_(_ref7) {
            var node = _ref7.node,
                evt = _ref7.evt;
            evt.stop();
            if (!node || !node.target) return;
            var klass = isClass(node.target) ? node.target : node.target.owner && isClass(node.target.owner) ? node.target.owner : isString(node.target) ? node.target : null;
            var items = [];

            if (klass) {
              items.push({
                command: "open browse snippet",
                target: this.view
              });
            }

            if (isString(klass) ? this.context.selectedClassName === klass : this.context.selectedClass === klass) {
              var adoptByItems = [];
              klass.name !== "Morph" && adoptByItems.push({
                alias: "by superclass",
                command: "adopt by superclass",
                target: this.view
              });
              adoptByItems.push({
                alias: "by custom class...",
                command: "adopt by another class",
                target: this.view
              });
              items.push(["adopt by...", adoptByItems]);
            }

            return this.world().openWorldMenu(evt, items);
          }
        }, {
          key: "selectClass",
          value: function () {
            var _ObjectEditorModel_selectClass_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee41(klass) {
              var _this4 = this;

              var tree, className, proceed, node, descr, _node;

              return regeneratorRuntime.wrap(function _callee41$(_context41) {
                while (1) {
                  switch (_context41.prev = _context41.next) {
                    case 0:
                      if (!this._updatingTree) {
                        _context41.next = 2;
                        break;
                      }

                      return _context41.abrupt("return");

                    case 2:
                      tree = this.ui.classTree;
                      className = typeof klass === "string" ? klass : klass.name;

                      if (!(this.context.selectedClassName !== className)) {
                        _context41.next = 25;
                        break;
                      }

                      _context41.t1 = tree.selectedNode;

                      if (!_context41.t1) {
                        _context41.next = 10;
                        break;
                      }

                      _context41.next = 9;
                      return this.hasUnsavedChanges();

                    case 9:
                      _context41.t1 = _context41.sent;

                    case 10:
                      _context41.t0 = _context41.t1;

                      if (!_context41.t0) {
                        _context41.next = 13;
                        break;
                      }

                      _context41.t0 = this.ui.sourceEditor.textString;

                    case 13:
                      if (!_context41.t0) {
                        _context41.next = 23;
                        break;
                      }

                      _context41.next = 16;
                      return this.warnForUnsavedChanges();

                    case 16:
                      proceed = _context41.sent;

                      if (proceed) {
                        _context41.next = 23;
                        break;
                      }

                      node = tree.nodes.find(function (ea) {
                        return !ea.isRoot && ea.isClass && ea.klass.name === _this4.context.selectedClassName;
                      });
                      this._updatingTree = true;
                      tree.selectedNode = node;
                      this._updatingTree = false;
                      return _context41.abrupt("return");

                    case 23:
                      _context41.next = 25;
                      return this.context.selectClass(className);

                    case 25:
                      _context41.next = 27;
                      return this.withContextDo(function (ctx) {
                        return isObjectClass(ctx.selectedClass);
                      });

                    case 27:
                      if (!_context41.sent) {
                        _context41.next = 31;
                        break;
                      }

                      this.ui.forkPackageButton.enable();
                      _context41.next = 32;
                      break;

                    case 31:
                      this.ui.forkPackageButton.disable();

                    case 32:
                      _context41.next = 34;
                      return this.withContextDo( /*#__PURE__*/function () {
                        var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee40(ctx) {
                          var descr;
                          return regeneratorRuntime.wrap(function _callee40$(_context40) {
                            while (1) {
                              switch (_context40.prev = _context40.next) {
                                case 0:
                                  ctx.selectedMethod = null;
                                  descr = ctx.sourceDescriptorFor(ctx.selectedClass);

                                  if (!(!descr._moduleSource && descr.module._frozenModule)) {
                                    _context40.next = 6;
                                    break;
                                  }

                                  _context40.next = 5;
                                  return descr.module.source();

                                case 5:
                                  descr._moduleSource = _context40.sent;

                                case 6:
                                  return _context40.abrupt("return", {
                                    source: descr.source,
                                    moduleId: descr.module.id
                                  });

                                case 7:
                                case "end":
                                  return _context40.stop();
                              }
                            }
                          }, _callee40);
                        }));

                        return function (_x20) {
                          return _ref8.apply(this, arguments);
                        };
                      }());

                    case 34:
                      descr = _context41.sent;
                      _context41.t2 = this;
                      _context41.next = 38;
                      return descr.source;

                    case 38:
                      _context41.t3 = _context41.sent;
                      _context41.t4 = descr.moduleId;
                      _context41.next = 42;
                      return _context41.t2.updateSource.call(_context41.t2, _context41.t3, _context41.t4);

                    case 42:
                      _context41.next = 44;
                      return this.updateKnownGlobals();

                    case 44:
                      _context41.next = 46;
                      return this.updateTitle();

                    case 46:
                      _context41.next = 48;
                      return this.ui.importController.setModule(descr.moduleId);

                    case 48:
                      if (!tree.selectedNode || tree.selectedNode.target !== klass) {
                        _node = tree.nodes.find(function (ea) {
                          return !ea.isRoot && ea.isClass && ea.name === klass;
                        });
                        tree.selectedNode = _node;
                      }

                    case 49:
                    case "end":
                      return _context41.stop();
                  }
                }
              }, _callee41, this);
            }));

            function ObjectEditorModel_selectClass_(_x19) {
              return _ObjectEditorModel_selectClass_.apply(this, arguments);
            }

            return ObjectEditorModel_selectClass_;
          }()
        }, {
          key: "selectMethod",
          value: function () {
            var _ObjectEditorModel_selectMethod_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee42(klass, methodSpec) {
              var highlight,
                  putCursorInBody,
                  className,
                  methodNode,
                  tree,
                  differentClassSelected,
                  node,
                  ed,
                  cursorPos,
                  methodRange,
                  _args42 = arguments;
              return regeneratorRuntime.wrap(function _callee42$(_context42) {
                while (1) {
                  switch (_context42.prev = _context42.next) {
                    case 0:
                      highlight = _args42.length > 2 && _args42[2] !== undefined ? _args42[2] : true;
                      putCursorInBody = _args42.length > 3 && _args42[3] !== undefined ? _args42[3] : false;
                      className = klass.name || klass;
                      if (!methodSpec.name) methodSpec = {
                        name: methodSpec
                      };
                      _context42.next = 6;
                      return this.context.selectMethod(className, methodSpec);

                    case 6:
                      methodNode = _context42.sent;

                      if (methodNode) {
                        _context42.next = 10;
                        break;
                      }

                      this.setStatusMessage("Cannot find method ".concat(methodSpec.name));
                      return _context42.abrupt("return");

                    case 10:
                      _context42.next = 12;
                      return this.updateTitle();

                    case 12:
                      tree = this.ui.classTree;
                      _context42.next = 15;
                      return this.withContextDo(function (ctx) {
                        return ctx.selectedClass.name !== className;
                      }, {
                        className: className
                      });

                    case 15:
                      differentClassSelected = _context42.sent;

                      if (!(differentClassSelected || !tree.selectedNode)) {
                        _context42.next = 19;
                        break;
                      }

                      _context42.next = 19;
                      return this.selectClass(klass);

                    case 19:
                      _context42.next = 21;
                      return tree.uncollapse(tree.selectedNode);

                    case 21:
                      if (!tree.selectedNode || tree.selectedNode.target !== methodSpec) {
                        node = tree.nodes.find(function (ea) {
                          return !ea.isClass && !ea.isRoot && ea.target.owner === klass && ea.target.name === methodSpec.name;
                        });
                        tree.selectedNode = node;
                        tree.scrollSelectionIntoView();
                      }

                      ed = this.ui.sourceEditor;
                      cursorPos = ed.indexToPosition(putCursorInBody ? methodNode.value.body.start + 1 : methodNode.key.start);
                      ed.cursorPosition = cursorPos;
                      ed.scrollCursorIntoView();
                      methodRange = {
                        start: ed.indexToPosition(methodNode.start),
                        end: ed.indexToPosition(methodNode.end)
                      };
                      ed.centerRange(methodRange);

                      if (highlight) {
                        ed.flash(methodRange, {
                          id: "method",
                          time: 1000,
                          fill: ed.selectionColor || Color.blue.withA(0.2)
                        });
                      }

                      this.selectedMethodName = methodSpec.name;

                    case 30:
                    case "end":
                      return _context42.stop();
                  }
                }
              }, _callee42, this);
            }));

            function ObjectEditorModel_selectMethod_(_x21, _x22) {
              return _ObjectEditorModel_selectMethod_.apply(this, arguments);
            }

            return ObjectEditorModel_selectMethod_;
          }()
        }, {
          key: "displayFrozenWarningIfNeeded",
          value: function () {
            var _ObjectEditorModel_displayFrozenWarningIfNeeded_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee43() {
              var view, moduleInfo, prevHeight, row;
              return regeneratorRuntime.wrap(function _callee43$(_context43) {
                while (1) {
                  switch (_context43.prev = _context43.next) {
                    case 0:
                      view = this.view;
                      _context43.next = 3;
                      return this.withContextDo(function (ctx) {
                        return ctx.selectedModule._frozenModule && {
                          pkgName: ctx.selectedModule["package"]().name,
                          moduleName: ctx.selectedModule.pathInPackage()
                        };
                      });

                    case 3:
                      moduleInfo = _context43.sent;

                      if (moduleInfo) {
                        this.ui.frozenWarning.textString = "The module \"".concat(moduleInfo.pkgName, "/").concat(moduleInfo.moduleName, "\" you are viewing is frozen. You are not able to make changes to this module unless you reload the world with dynamic load enabled for the package \"").concat(moduleInfo.pkgName, "\".");
                      }

                      this.ui.saveButton.deactivated = !!moduleInfo;
                      prevHeight = view.layout.row(1).height;
                      row = view.layout.row(1);
                      view.layout.disable();
                      row.height = moduleInfo ? 80 : 0;
                      row.after.height -= prevHeight !== row.height ? moduleInfo ? 80 : -80 : 0;
                      view.layout.enable({
                        duration: 300
                      });

                    case 12:
                    case "end":
                      return _context43.stop();
                  }
                }
              }, _callee43, this);
            }));

            function ObjectEditorModel_displayFrozenWarningIfNeeded_() {
              return _ObjectEditorModel_displayFrozenWarningIfNeeded_.apply(this, arguments);
            }

            return ObjectEditorModel_displayFrozenWarningIfNeeded_;
          }()
        }, {
          key: "updateTitle",
          value: function () {
            var _ObjectEditorModel_updateTitle_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee44() {
              var win, title, url;
              return regeneratorRuntime.wrap(function _callee44$(_context44) {
                while (1) {
                  switch (_context44.prev = _context44.next) {
                    case 0:
                      win = this.view.getWindow();

                      if (win) {
                        _context44.next = 3;
                        break;
                      }

                      return _context44.abrupt("return");

                    case 3:
                      title = "ObjectEditor";
                      _context44.t0 = title;
                      _context44.next = 7;
                      return this.withContextDo(function (ctx) {
                        return ctx.getTitle();
                      });

                    case 7:
                      title = _context44.t0 += _context44.sent;
                      url = this.systemInterface.coreInterface.url;
                      title += url ? " [".concat(url, "]") : "";
                      win.title = title;
                      win.relayoutWindowControls();

                    case 12:
                    case "end":
                      return _context44.stop();
                  }
                }
              }, _callee44, this);
            }));

            function ObjectEditorModel_updateTitle_() {
              return _ObjectEditorModel_updateTitle_.apply(this, arguments);
            }

            return ObjectEditorModel_updateTitle_;
          }()
        }, {
          key: "doSave",
          value: function () {
            var _ObjectEditorModel_doSave_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee47() {
              var _this5 = this;

              var sourceEditor, fixed, className, content, warnings, _lint, _lint2, editorSourceHash, _yield$this$withConte3, sourceChanged, outsideChangeWarning, selectedModuleId, overriddenSystemMethods, overriddenSystemMethod, really, _really;

              return regeneratorRuntime.wrap(function _callee47$(_context47) {
                while (1) {
                  switch (_context47.prev = _context47.next) {
                    case 0:
                      sourceEditor = this.ui.sourceEditor;
                      _context47.next = 3;
                      return this.withContextDo(function (ctx) {
                        return !ctx.selectedClass;
                      });

                    case 3:
                      if (!_context47.sent) {
                        _context47.next = 5;
                        break;
                      }

                      return _context47.abrupt("return", {
                        success: false,
                        reason: "No class selected"
                      });

                    case 5:
                      if (!config.objectEditor.fixUndeclaredVarsOnSave) {
                        _context47.next = 11;
                        break;
                      }

                      _context47.next = 8;
                      return this.execCommand("[javascript] fix undeclared variables");

                    case 8:
                      fixed = _context47.sent;

                      if (fixed) {
                        _context47.next = 11;
                        break;
                      }

                      return _context47.abrupt("return", {
                        success: false,
                        reason: "Save canceled"
                      });

                    case 11:
                      content = sourceEditor.textString;
                      _context47.next = 14;
                      return this.withContextDo(function (ctx) {
                        var selectedClass = ctx.selectedClass;
                        var parsed = parse(content);

                        if (parsed.body.length !== 1 || parsed.body[0].type !== "ClassDeclaration") {
                          return {
                            success: false,
                            reason: "Code is expected to contain the class definition of ".concat(selectedClass, ", aborting save.")
                          };
                        }

                        var classDecl = parsed.body[0];
                        var className = content.slice(classDecl.id.start, classDecl.id.end);

                        if (className !== selectedClass.name) {
                          content = content.slice(0, classDecl.id.start) + selectedClass.name + content.slice(classDecl.id.end);
                        }

                        return {
                          content: content,
                          className: className
                        };
                      }, {
                        content: content
                      });

                    case 14:
                      __varRecorder__$1.__inter3__ = _context47.sent;
                      content = __varRecorder__$1.__inter3__.content;
                      className = __varRecorder__$1.__inter3__.className;
                      __varRecorder__$1.__inter3__;
                      warnings = false;
                      _lint = lint(content, {
                        "no-unused-vars": ["warn", {
                          args: "none",
                          varsIgnorePattern: "".concat(className)
                        }]
                      });
                      _lint2 = _slicedToArray(_lint, 2);
                      content = _lint2[0];
                      warnings = _lint2[1];
                      editorSourceHash = hashCode(content);
                      _context47.next = 26;
                      return this.withContextDo(function (ctx) {
                        var sourceHash = ctx.sourceHash,
                            moduleChangeWarning = ctx.moduleChangeWarning,
                            selectedModule = ctx.selectedModule;
                        var sourceChanged = sourceHash !== editorSourceHash;
                        return {
                          selectedModuleId: selectedModule.id,
                          sourceChanged: sourceChanged,
                          outsideChangeWarning: moduleChangeWarning === selectedModule.id
                        };
                      }, {
                        editorSourceHash: editorSourceHash
                      });

                    case 26:
                      _yield$this$withConte3 = _context47.sent;
                      sourceChanged = _yield$this$withConte3.sourceChanged;
                      outsideChangeWarning = _yield$this$withConte3.outsideChangeWarning;
                      selectedModuleId = _yield$this$withConte3.selectedModuleId;
                      _context47.next = 32;
                      return this.withContextDo(function (ctx) {
                        var parsed = parse(content);

                        var _query$topLevelDeclsA = _slicedToArray(topLevelDeclsAndRefs(parsed).classDecls, 1),
                            classDecl = _query$topLevelDeclsA[0];

                        var problematicOverrides = nodesInScopeOf(classDecl).filter(function (m) {
                          return m.type === "MethodDefinition" && __varRecorder__$1.DANGEROUS_METHODS_TO_OVERRIDE.includes(m.key.name) && !ctx.selectedClass.prototype.hasOwnProperty(m.key.name);
                        });
                        return problematicOverrides.length ? problematicOverrides.map(function (m) {
                          return m.key.name;
                        }) : false;
                      });

                    case 32:
                      overriddenSystemMethods = _context47.sent;

                      if (!overriddenSystemMethods) {
                        _context47.next = 42;
                        break;
                      }

                    case 34:
                      if (!(overriddenSystemMethod = overriddenSystemMethods.pop())) {
                        _context47.next = 42;
                        break;
                      }

                      _context47.next = 37;
                      return this.world().confirm(["System Method Override\n", {}, "You are about to override ", {
                        fontWeight: "normal",
                        fontSize: 16
                      }, overriddenSystemMethod + "()", {
                        fontWeight: "bold",
                        fontStyle: "italic"
                      }, " which is a method at the core of the System. You should only proceed if you are absolutely sure you know what you are doing, else you may cause to crash the running System.", {
                        fontWeight: "normal"
                      }], {
                        width: 400,
                        requester: this
                      });

                    case 37:
                      really = _context47.sent;

                      if (really) {
                        _context47.next = 40;
                        break;
                      }

                      return _context47.abrupt("return", {
                        success: false
                      });

                    case 40:
                      _context47.next = 34;
                      break;

                    case 42:
                      if (!(sourceChanged && outsideChangeWarning)) {
                        _context47.next = 50;
                        break;
                      }

                      _context47.next = 45;
                      return this.world().confirm(["Simultaneous Change Warning\n", {}, "The module ".concat(selectedModuleId, " you are trying to save changed elsewhere!\nOverwrite those changes?"), {
                        fontSize: 16,
                        fontWeight: "normal"
                      }], {
                        requester: this
                      });

                    case 45:
                      _really = _context47.sent;

                      if (_really) {
                        _context47.next = 48;
                        break;
                      }

                      return _context47.abrupt("return", {
                        success: false,
                        reason: "Save canceled"
                      });

                    case 48:
                      _context47.next = 50;
                      return this.withContextDo(function (ctx) {
                        return ctx.moduleChangeWarning = null;
                      });

                    case 50:
                      this.backupSourceInLocalStorage(content);
                      _context47.prev = 51;
                      _context47.next = 54;
                      return this.withContextDo( /*#__PURE__*/function () {
                        var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee45(ctx) {
                          return regeneratorRuntime.wrap(function _callee45$(_context45) {
                            while (1) {
                              switch (_context45.prev = _context45.next) {
                                case 0:
                                  ctx.isSaving = true;
                                  _context45.next = 3;
                                  return _this5.sourceDescriptorFor(ctx.selectedClass).changeSource(content);

                                case 3:
                                case "end":
                                  return _context45.stop();
                              }
                            }
                          }, _callee45);
                        }));

                        return function (_x23) {
                          return _ref9.apply(this, arguments);
                        };
                      }(), {
                        content: content
                      });

                    case 54:
                      _context47.next = 56;
                      return sourceEditor.saveExcursion( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee46() {
                        return regeneratorRuntime.wrap(function _callee46$(_context46) {
                          while (1) {
                            switch (_context46.prev = _context46.next) {
                              case 0:
                                _context46.next = 2;
                                return _this5.refresh();

                              case 2:
                              case "end":
                                return _context46.stop();
                            }
                          }
                        }, _callee46);
                      })));

                    case 56:
                      _context47.next = 58;
                      return this.withContextDo(function (ctx) {
                        ctx.updatePackageConfig(sourceChanged);
                      }, {
                        sourceChanged: sourceChanged
                      });

                    case 58:
                      return _context47.abrupt("return", {
                        success: true,
                        warnings: warnings
                      });

                    case 59:
                      _context47.prev = 59;
                      this.jumpToMethodAtCursorPosition();
                      _context47.next = 63;
                      return this.withContextDo(function (ctx) {
                        return ctx.isSaving = false;
                      });

                    case 63:
                      this.updateSource(content, selectedModuleId);
                      return _context47.finish(59);

                    case 65:
                      if (this.target instanceof ViewModel) {
                        this.target.reifyBindings();
                        this.target.reifyExposedProps();
                      }

                    case 66:
                    case "end":
                      return _context47.stop();
                  }
                }
              }, _callee47, this, [[51,, 59, 65]]);
            }));

            function ObjectEditorModel_doSave_() {
              return _ObjectEditorModel_doSave_.apply(this, arguments);
            }

            return ObjectEditorModel_doSave_;
          }()
        }, {
          key: "jumpToMethodAtCursorPosition",
          value: function () {
            var _ObjectEditorModel_jumpToMethodAtCursorPosition_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee48() {
              var _yield$this$withConte4, _yield$this$withConte5, methodNode, className;

              return regeneratorRuntime.wrap(function _callee48$(_context48) {
                while (1) {
                  switch (_context48.prev = _context48.next) {
                    case 0:
                      return _context48.abrupt("return");

                    case 5:
                      _yield$this$withConte4 = _context48.sent;
                      _yield$this$withConte5 = _slicedToArray(_yield$this$withConte4, 2);
                      methodNode = _yield$this$withConte5[0];
                      className = _yield$this$withConte5[1];
                      this.selectMethod(className, methodNode.key.name, false);

                    case 10:
                    case "end":
                      return _context48.stop();
                  }
                }
              }, _callee48, this);
            }));

            function ObjectEditorModel_jumpToMethodAtCursorPosition_() {
              return _ObjectEditorModel_jumpToMethodAtCursorPosition_.apply(this, arguments);
            }

            return ObjectEditorModel_jumpToMethodAtCursorPosition_;
          }()
        }, {
          key: "backupSourceInLocalStorage",
          value: function ObjectEditorModel_backupSourceInLocalStorage_(source) {
            var store = JSON.parse(localStorage.getItem("oe helper") || "{\"saves\": []}");
            if (store.saves.some(function (ea) {
              return typeof ea === "string" ? ea === source : ea.source === source;
            })) return;
            if (store.saves.length > 100) store.saves = store.saves.slice(40, 100);
            store.saves.push({
              source: source,
              time: Date.now()
            });
            localStorage.setItem("oe helper", JSON.stringify(store));
          }
        }, {
          key: "interactivelyAddObjectPackageAndMethod",
          value: function () {
            var _ObjectEditorModel_interactivelyAddObjectPackageAndMethod_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee52() {
              var objPkgName, className, methodName, stringifiedTarget, li, requester, worldPkgUrl;
              return regeneratorRuntime.wrap(function _callee52$(_context52) {
                while (1) {
                  switch (_context52.prev = _context52.next) {
                    case 0:
                      li = open$1("Lookup Package...");
                      requester = this.view.getWindow();
                      _context52.prev = 2;
                      _context52.next = 5;
                      return this.withContextDo(function (ctx) {
                        var pkg = ObjectPackage.lookupPackageForObject(ctx.target);
                        return {
                          objPkgName: pkg && pkg.id,
                          className: getClassName(ctx.target),
                          stringifiedTarget: ctx.target.toString()
                        };
                      });

                    case 5:
                      __varRecorder__$1.__inter4__ = _context52.sent;
                      objPkgName = __varRecorder__$1.__inter4__.objPkgName;
                      className = __varRecorder__$1.__inter4__.className;
                      stringifiedTarget = __varRecorder__$1.__inter4__.stringifiedTarget;
                      __varRecorder__$1.__inter4__;

                      if (objPkgName) {
                        _context52.next = 36;
                        break;
                      }

                      li.remove();
                      _context52.next = 14;
                      return this.withContextDo(function () {
                        var pkg = ObjectPackage.lookupPackageForObject($world);
                        if (pkg) return pkg.name;
                      });

                    case 14:
                      worldPkgUrl = _context52.sent;

                      if (!worldPkgUrl) {
                        _context52.next = 26;
                        break;
                      }

                      _context52.next = 18;
                      return this.world().prompt({
                        title: "New Class",
                        text: ["Regarding the object:\n", {
                          fontSize: 16,
                          fontWeight: "normal"
                        }, stringifiedTarget, {
                          fontSize: 16,
                          fontStyle: "italic",
                          fontWeight: "normal"
                        }, "\nEnter a name for the new class of this object:", {
                          fontSize: 16,
                          fontWeight: "normal"
                        }]
                      }, {
                        historyId: "object-package-name-hist",
                        requester: requester,
                        width: 400,
                        input: capitalize(className).replace(/\s+(.)/g, function (_, match) {
                          return match.toUpperCase();
                        })
                      });

                    case 18:
                      className = _context52.sent;

                      if (className) {
                        _context52.next = 22;
                        break;
                      }

                      requester.setStatusMessage("Canceled");
                      return _context52.abrupt("return");

                    case 22:
                      _context52.next = 24;
                      return this.withContextDo( /*#__PURE__*/function () {
                        var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee49(ctx) {
                          var pkg, modName, mod;
                          return regeneratorRuntime.wrap(function _callee49$(_context49) {
                            while (1) {
                              switch (_context49.prev = _context49.next) {
                                case 0:
                                  pkg = ObjectPackage.withId(worldPkgUrl);
                                  modName = className[0].toLowerCase() + className.slice(1) + ".js";
                                  _context49.next = 4;
                                  return pkg.ensureSubModule(modName);

                                case 4:
                                  mod = _context49.sent;
                                  _context49.next = 7;
                                  return mod.adoptObject(ctx.target, className);

                                case 7:
                                case "end":
                                  return _context49.stop();
                              }
                            }
                          }, _callee49);
                        }));

                        return function (_x24) {
                          return _ref11.apply(this, arguments);
                        };
                      }(), {
                        className: className,
                        worldPkgUrl: worldPkgUrl
                      });

                    case 24:
                      _context52.next = 36;
                      break;

                    case 26:
                      _context52.next = 28;
                      return this.world().prompt({
                        title: "New Object Package",
                        text: ["No object package exists yet for object\n", {
                          fontSize: 16,
                          fontWeight: "normal"
                        }, stringifiedTarget, {
                          fontSize: 16,
                          fontStyle: "italic",
                          fontWeight: "normal"
                        }, "\nEnter a name for a new package:", {
                          fontSize: 16,
                          fontWeight: "normal"
                        }]
                      }, {
                        historyId: "object-package-name-hist",
                        requester: requester,
                        width: 400,
                        input: capitalize(className).replace(/\s+(.)/g, function (_, match) {
                          return match.toUpperCase();
                        })
                      });

                    case 28:
                      objPkgName = _context52.sent;

                      if (objPkgName) {
                        _context52.next = 32;
                        break;
                      }

                      requester.setStatusMessage("Canceled");
                      return _context52.abrupt("return");

                    case 32:
                      li.label = "Creating Class...";
                      li.openInWorld();
                      _context52.next = 36;
                      return this.withContextDo( /*#__PURE__*/function () {
                        var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee50(ctx) {
                          var pkg;
                          return regeneratorRuntime.wrap(function _callee50$(_context50) {
                            while (1) {
                              switch (_context50.prev = _context50.next) {
                                case 0:
                                  pkg = ObjectPackage.withId(objPkgName);
                                  _context50.next = 3;
                                  return pkg.adoptObject(ctx.target);

                                case 3:
                                case "end":
                                  return _context50.stop();
                              }
                            }
                          }, _callee50);
                        }));

                        return function (_x25) {
                          return _ref12.apply(this, arguments);
                        };
                      }(), {
                        objPkgName: objPkgName
                      });

                    case 36:
                      li.label = "Adding method...";
                      _context52.next = 39;
                      return this.withContextDo( /*#__PURE__*/function () {
                        var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee51(ctx) {
                          var _yield$ctx$addNewMeth, methodName;

                          return regeneratorRuntime.wrap(function _callee51$(_context51) {
                            while (1) {
                              switch (_context51.prev = _context51.next) {
                                case 0:
                                  _context51.next = 2;
                                  return ctx.addNewMethod();

                                case 2:
                                  _yield$ctx$addNewMeth = _context51.sent;
                                  methodName = _yield$ctx$addNewMeth.methodName;
                                  return _context51.abrupt("return", {
                                    methodName: methodName,
                                    className: ctx.target.constructor[Symbol["for"]("__LivelyClassName__")]
                                  });

                                case 5:
                                case "end":
                                  return _context51.stop();
                              }
                            }
                          }, _callee51);
                        }));

                        return function (_x26) {
                          return _ref13.apply(this, arguments);
                        };
                      }());

                    case 39:
                      __varRecorder__$1.__inter5__ = _context52.sent;
                      className = __varRecorder__$1.__inter5__.className;
                      methodName = __varRecorder__$1.__inter5__.methodName;
                      __varRecorder__$1.__inter5__;
                      li.remove();
                      _context52.next = 46;
                      return this.refresh();

                    case 46:
                      _context52.next = 48;
                      return this.selectMethod(className, methodName, true, true);

                    case 48:
                      this.ui.sourceEditor.focus();
                      _context52.next = 55;
                      break;

                    case 51:
                      _context52.prev = 51;
                      _context52.t0 = _context52["catch"](2);
                      li.remove();
                      requester.showError(_context52.t0);

                    case 55:
                    case "end":
                      return _context52.stop();
                  }
                }
              }, _callee52, this, [[2, 51]]);
            }));

            function ObjectEditorModel_interactivelyAddObjectPackageAndMethod_() {
              return _ObjectEditorModel_interactivelyAddObjectPackageAndMethod_.apply(this, arguments);
            }

            return ObjectEditorModel_interactivelyAddObjectPackageAndMethod_;
          }()
        }, {
          key: "interactivelyRemoveMethodOrClass",
          value: function () {
            var _ObjectEditorModel_interactivelyRemoveMethodOrClass_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee53() {
              var _yield$this$withConte6, selectedMethod, selectedClass;

              return regeneratorRuntime.wrap(function _callee53$(_context53) {
                while (1) {
                  switch (_context53.prev = _context53.next) {
                    case 0:
                      _context53.next = 2;
                      return this.withContextDo(function (ctx) {
                        return {
                          selectedMethod: Path("selectedMethod.name").get(ctx),
                          selectedClass: Path("selectedClass.name").get(ctx)
                        };
                      });

                    case 2:
                      _yield$this$withConte6 = _context53.sent;
                      selectedMethod = _yield$this$withConte6.selectedMethod;
                      selectedClass = _yield$this$withConte6.selectedClass;

                      if (!selectedMethod) {
                        _context53.next = 7;
                        break;
                      }

                      return _context53.abrupt("return", this.interactivelyRemoveMethod());

                    case 7:
                      if (!selectedClass) {
                        _context53.next = 9;
                        break;
                      }

                      return _context53.abrupt("return", this.interactivelyAdoptBySuperclass());

                    case 9:
                    case "end":
                      return _context53.stop();
                  }
                }
              }, _callee53, this);
            }));

            function ObjectEditorModel_interactivelyRemoveMethodOrClass_() {
              return _ObjectEditorModel_interactivelyRemoveMethodOrClass_.apply(this, arguments);
            }

            return ObjectEditorModel_interactivelyRemoveMethodOrClass_;
          }()
        }, {
          key: "interactivelyAdoptByClass",
          value: function () {
            var _ObjectEditorModel_interactivelyAdoptByClass_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee55() {
              var li, items, _yield$$world$filtera, _yield$$world$filtera2, klassAndModule;

              return regeneratorRuntime.wrap(function _callee55$(_context56) {
                while (1) {
                  switch (_context56.prev = _context56.next) {
                    case 0:
                      li = open$1("fetching modules...");
                      _context56.next = 3;
                      return this.withContextDo( /*#__PURE__*/function () {
                        var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee54(ctx) {
                          var system, modules, _yield$import, module$1, items, _iterator, _step, _loop, _ret;

                          return regeneratorRuntime.wrap(function _callee54$(_context55) {
                            while (1) {
                              switch (_context55.prev = _context55.next) {
                                case 0:
                                  system = ctx.evalEnvironment.systemInterface;
                                  _context55.next = 3;
                                  return system.getModules();

                                case 3:
                                  modules = _context55.sent;
                                  _context55.next = 6;
                                  return module.import('./index-d97f22af.js').then(function (n) { return n.m; });

                                case 6:
                                  _yield$import = _context55.sent;
                                  module$1 = _yield$import.module;
                                  items = [];
                                  _iterator = _createForOfIteratorHelper(modules);
                                  _context55.prev = 10;
                                  _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop() {
                                    var mod, pkg, shortName, realModule, imports, _ref15, Morph, klassDefs, klasses, _iterator2, _step2, klass;

                                    return regeneratorRuntime.wrap(function _loop$(_context54) {
                                      while (1) {
                                        switch (_context54.prev = _context54.next) {
                                          case 0:
                                            mod = _step.value;

                                            if (!mod.name.endsWith(".md")) {
                                              _context54.next = 3;
                                              break;
                                            }

                                            return _context54.abrupt("return", "continue");

                                          case 3:
                                            _context54.next = 5;
                                            return system.getPackageForModule(mod.name);

                                          case 5:
                                            pkg = _context54.sent;
                                            shortName = pkg ? pkg.name + "/" + system.shortModuleName(mod.name, pkg) : mod.name;
                                            realModule = module$1(mod.name);

                                            if (!(realModule.format() !== "esm" && realModule.format() !== "register")) {
                                              _context54.next = 10;
                                              break;
                                            }

                                            return _context54.abrupt("return", "continue");

                                          case 10:
                                            _context54.next = 12;
                                            return realModule.imports();

                                          case 12:
                                            _context54.t0 = function (ea) {
                                              return ea.local;
                                            };

                                            imports = _context54.sent.map(_context54.t0);

                                            if (!ctx.target.isMorph) {
                                              _context54.next = 20;
                                              break;
                                            }

                                            _context54.next = 17;
                                            return module.import('./__rootModule___commonjs-entry-039abf1b.js').then(function (n) { return n.gN; });

                                          case 17:
                                            _context54.t1 = _context54.sent;
                                            _context54.next = 21;
                                            break;

                                          case 20:
                                            _context54.t1 = {};

                                          case 21:
                                            _ref15 = _context54.t1;
                                            Morph = _ref15.Morph;
                                            _context54.next = 25;
                                            return realModule.scope();

                                          case 25:
                                            _context54.t2 = function (klass) {
                                              return klass.id.name;
                                            };

                                            klassDefs = _context54.sent.classDecls.map(_context54.t2);
                                            klasses = values(realModule.recorder).filter(function (ea) {
                                              return isClass(ea) && !imports.includes(ea.name) && klassDefs.includes(ea.name) && (ctx.target.isMorph ? withSuperclasses(ea).includes(Morph) : true);
                                            });
                                            _iterator2 = _createForOfIteratorHelper(klasses);

                                            try {
                                              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                                                klass = _step2.value;
                                                items.push({
                                                  isListItem: true,
                                                  string: "".concat(shortName, " ").concat(klass.name),
                                                  value: {
                                                    moduleName: mod.name,
                                                    className: klass.name
                                                  }
                                                });
                                              }
                                            } catch (err) {
                                              _iterator2.e(err);
                                            } finally {
                                              _iterator2.f();
                                            }

                                          case 30:
                                          case "end":
                                            return _context54.stop();
                                        }
                                      }
                                    }, _loop);
                                  });

                                  _iterator.s();

                                case 13:
                                  if ((_step = _iterator.n()).done) {
                                    _context55.next = 20;
                                    break;
                                  }

                                  return _context55.delegateYield(_loop(), "t0", 15);

                                case 15:
                                  _ret = _context55.t0;

                                  if (!(_ret === "continue")) {
                                    _context55.next = 18;
                                    break;
                                  }

                                  return _context55.abrupt("continue", 18);

                                case 18:
                                  _context55.next = 13;
                                  break;

                                case 20:
                                  _context55.next = 25;
                                  break;

                                case 22:
                                  _context55.prev = 22;
                                  _context55.t1 = _context55["catch"](10);

                                  _iterator.e(_context55.t1);

                                case 25:
                                  _context55.prev = 25;

                                  _iterator.f();

                                  return _context55.finish(25);

                                case 28:
                                  return _context55.abrupt("return", items);

                                case 29:
                                case "end":
                                  return _context55.stop();
                              }
                            }
                          }, _callee54, null, [[10, 22, 25, 28]]);
                        }));

                        return function (_x27) {
                          return _ref14.apply(this, arguments);
                        };
                      }());

                    case 3:
                      items = _context56.sent;
                      li.remove();
                      _context56.next = 7;
                      return $world.filterableListPrompt("From which class should the target object inherit?", items, {
                        requester: this.view
                      });

                    case 7:
                      _yield$$world$filtera = _context56.sent;
                      _yield$$world$filtera2 = _slicedToArray(_yield$$world$filtera.selected, 1);
                      klassAndModule = _yield$$world$filtera2[0];

                      if (klassAndModule) {
                        _context56.next = 12;
                        break;
                      }

                      return _context56.abrupt("return");

                    case 12:
                      _context56.next = 14;
                      return this.withContextDo(function (ctx) {
                        var moduleName = klassAndModule.moduleName,
                            className = klassAndModule.className;
                        var klass = module$1(moduleName).recorder[className];
                        adoptObject(ctx.target, klass);
                      }, {
                        klassAndModule: klassAndModule
                      });

                    case 14:
                      this.refresh();
                      this.selectClass(klassAndModule.className);

                    case 16:
                    case "end":
                      return _context56.stop();
                  }
                }
              }, _callee55, this);
            }));

            function ObjectEditorModel_interactivelyAdoptByClass_() {
              return _ObjectEditorModel_interactivelyAdoptByClass_.apply(this, arguments);
            }

            return ObjectEditorModel_interactivelyAdoptByClass_;
          }()
        }, {
          key: "interactivelyAdoptBySuperclass",
          value: function () {
            var _ObjectEditorModel_interactivelyAdoptBySuperclass_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee56() {
              var _yield$this$withConte7, nextClassName, className, targetName, moduleMeta, nextModuleMeta, generateDoit, normalStyle, highlightStyle, really;

              return regeneratorRuntime.wrap(function _callee56$(_context57) {
                while (1) {
                  switch (_context57.prev = _context57.next) {
                    case 0:
                      _context57.next = 2;
                      return this.withContextDo(function (ctx) {
                        var t = ctx.target;
                        var klass = t.constructor;
                        if (klass === Morph) return {};
                        var nextClass = withSuperclasses(klass)[1];
                        return {
                          moduleMeta: klass[Symbol["for"]("lively-module-meta")],
                          nextModuleMeta: nextClass[Symbol["for"]("lively-module-meta")],
                          nextClassName: nextClass.name,
                          className: klass.name,
                          targetName: t.name
                        };
                      });

                    case 2:
                      _yield$this$withConte7 = _context57.sent;
                      nextClassName = _yield$this$withConte7.nextClassName;
                      className = _yield$this$withConte7.className;
                      targetName = _yield$this$withConte7.targetName;
                      moduleMeta = _yield$this$withConte7.moduleMeta;
                      nextModuleMeta = _yield$this$withConte7.nextModuleMeta;

                      generateDoit = function generateDoit(meta, entity) {
                        return {
                          textDecoration: "underline",
                          doit: {
                            code: "$world.execCommand(\"open browser\", {moduleName: \"".concat(meta["package"].name + "/" + meta.pathInPackage, "\", codeEntity: \"").concat(entity, "\"})")
                          }
                        };
                      };

                      if (!nextClassName) {
                        _context57.next = 21;
                        break;
                      }

                      normalStyle = {
                        fontWeight: "normal",
                        fontSize: 16
                      };
                      highlightStyle = {
                        fontWeight: "normal",
                        fontStyle: "italic",
                        fontSize: 16
                      };
                      _context57.next = 14;
                      return this.world().confirm(["Class Hierarchy Change\n", {}, "Do you really want to make ", normalStyle, "\"".concat(targetName, "\""), highlightStyle, " an instance of ", normalStyle, nextClassName, Object.assign({}, highlightStyle, {}, generateDoit(nextModuleMeta, nextClassName)), " and remove class ", normalStyle, className, Object.assign({}, highlightStyle, {}, generateDoit(moduleMeta, className)), " and its package ", normalStyle, moduleMeta["package"].name, highlightStyle, " ?", normalStyle], {
                        requester: this.view,
                        width: 500
                      });

                    case 14:
                      really = _context57.sent;

                      if (really) {
                        _context57.next = 17;
                        break;
                      }

                      return _context57.abrupt("return");

                    case 17:
                      _context57.next = 19;
                      return this.withContextDo(function (ctx) {
                        adoptObject(ctx.target, withSuperclasses(ctx.target.constructor)[1]);
                      });

                    case 19:
                      this.refresh();
                      this.selectClass(nextClassName);

                    case 21:
                    case "end":
                      return _context57.stop();
                  }
                }
              }, _callee56, this);
            }));

            function ObjectEditorModel_interactivelyAdoptBySuperclass_() {
              return _ObjectEditorModel_interactivelyAdoptBySuperclass_.apply(this, arguments);
            }

            return ObjectEditorModel_interactivelyAdoptBySuperclass_;
          }()
        }, {
          key: "interactivelyRemoveMethod",
          value: function () {
            var _ObjectEditorModel_interactivelyRemoveMethod_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee58() {
              var parsed, _yield$this$withConte8, methodNode, selectedMethodName, really, ed, range;

              return regeneratorRuntime.wrap(function _callee58$(_context59) {
                while (1) {
                  switch (_context59.prev = _context59.next) {
                    case 0:
                      _context59.next = 2;
                      return this.withContextDo(function (ctx) {
                        return !ctx.selectedMethod;
                      });

                    case 2:
                      if (!_context59.sent) {
                        _context59.next = 4;
                        break;
                      }

                      return _context59.abrupt("return");

                    case 4:
                      parsed = this.editorPlugin.parse().body[0];
                      _context59.next = 7;
                      return this.withContextDo( /*#__PURE__*/function () {
                        var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee57(ctx) {
                          var selectedMethod, selectedClass;
                          return regeneratorRuntime.wrap(function _callee57$(_context58) {
                            while (1) {
                              switch (_context58.prev = _context58.next) {
                                case 0:
                                  selectedMethod = ctx.selectedMethod, selectedClass = ctx.selectedClass;
                                  _context58.t0 = selectedMethod.name;
                                  _context58.next = 4;
                                  return ctx._sourceDescriptor_of_class_findMethodNode(selectedClass, selectedMethod.name, selectedMethod.kind, selectedMethod["static"], parsed);

                                case 4:
                                  _context58.t1 = _context58.sent;
                                  return _context58.abrupt("return", {
                                    selectedMethodName: _context58.t0,
                                    methodNode: _context58.t1
                                  });

                                case 6:
                                case "end":
                                  return _context58.stop();
                              }
                            }
                          }, _callee57);
                        }));

                        return function (_x28) {
                          return _ref16.apply(this, arguments);
                        };
                      }(), {
                        parsed: parsed
                      });

                    case 7:
                      _yield$this$withConte8 = _context59.sent;
                      methodNode = _yield$this$withConte8.methodNode;
                      selectedMethodName = _yield$this$withConte8.selectedMethodName;

                      if (selectedMethodName) {
                        _context59.next = 12;
                        break;
                      }

                      return _context59.abrupt("return");

                    case 12:
                      if (methodNode) {
                        _context59.next = 15;
                        break;
                      }

                      this.view.showError("Cannot find AST node for method ".concat(selectedMethodName));
                      return _context59.abrupt("return");

                    case 15:
                      _context59.next = 17;
                      return this.world().confirm("Really remove method ".concat(selectedMethodName, "?"));

                    case 17:
                      really = _context59.sent;

                      if (really) {
                        _context59.next = 20;
                        break;
                      }

                      return _context59.abrupt("return");

                    case 20:
                      ed = this.ui.sourceEditor;
                      range = {
                        start: ed.indexToPosition(methodNode.start),
                        end: ed.indexToPosition(methodNode.end)
                      };

                      if (!ed.textInRange({
                        start: {
                          column: 0,
                          row: range.start.row
                        },
                        end: range.start
                      }).trim()) {
                        range.start = ed.lineRange(range.start.row - 1).end;
                      }

                      ed.replace(range, "");
                      _context59.next = 26;
                      return this.doSave();

                    case 26:
                    case "end":
                      return _context59.stop();
                  }
                }
              }, _callee58, this);
            }));

            function ObjectEditorModel_interactivelyRemoveMethod_() {
              return _ObjectEditorModel_interactivelyRemoveMethod_.apply(this, arguments);
            }

            return ObjectEditorModel_interactivelyRemoveMethod_;
          }()
        }, {
          key: "interactivelyForkPackage",
          value: function () {
            var _ObjectEditorModel_interactivelyForkPackage_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee60() {
              var forkedName, newClassName;
              return regeneratorRuntime.wrap(function _callee60$(_context61) {
                while (1) {
                  switch (_context61.prev = _context61.next) {
                    case 0:
                      _context61.t0 = this.world();
                      _context61.t1 = {
                        title: "New Forked Package",
                        text: "Please enter a name for the forked class and its package:"
                      };
                      _context61.t2 = this.view;
                      _context61.next = 5;
                      return this.withContextDo(function (ctx) {
                        return ctx.target.constructor[Symbol["for"]("__LivelyClassName__")];
                      });

                    case 5:
                      _context61.t3 = _context61.sent;
                      _context61.t4 = _context61.t3 + "Fork";
                      _context61.t5 = {
                        requester: _context61.t2,
                        input: _context61.t4,
                        historyId: "lively.morphic-object-editor-fork-names",
                        useLastInput: false
                      };
                      _context61.next = 10;
                      return _context61.t0.prompt.call(_context61.t0, _context61.t1, _context61.t5);

                    case 10:
                      forkedName = _context61.sent;

                      if (forkedName) {
                        _context61.next = 13;
                        break;
                      }

                      return _context61.abrupt("return");

                    case 13:
                      _context61.next = 15;
                      return this.withContextDo( /*#__PURE__*/function () {
                        var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee59(ctx) {
                          return regeneratorRuntime.wrap(function _callee59$(_context60) {
                            while (1) {
                              switch (_context60.prev = _context60.next) {
                                case 0:
                                  _context60.next = 2;
                                  return ctx.forkPackage(forkedName);

                                case 2:
                                case "end":
                                  return _context60.stop();
                              }
                            }
                          }, _callee59);
                        }));

                        return function (_x29) {
                          return _ref17.apply(this, arguments);
                        };
                      }(), {
                        forkedName: forkedName
                      });

                    case 15:
                      newClassName = _context61.sent;
                      _context61.next = 18;
                      return this.browse({
                        target: this.context.target,
                        selectedClass: newClassName
                      });

                    case 18:
                    case "end":
                      return _context61.stop();
                  }
                }
              }, _callee60, this);
            }));

            function ObjectEditorModel_interactivelyForkPackage_() {
              return _ObjectEditorModel_interactivelyForkPackage_.apply(this, arguments);
            }

            return ObjectEditorModel_interactivelyForkPackage_;
          }()
        }, {
          key: "interactivlyFixUndeclaredVariables",
          value: function () {
            var _ObjectEditorModel_interactivlyFixUndeclaredVariables_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee66() {
              var _this6 = this;

              var moduleId, origSource, content, _this$ui7, sourceEditor, importController;

              return regeneratorRuntime.wrap(function _callee66$(_context67) {
                while (1) {
                  switch (_context67.prev = _context67.next) {
                    case 0:
                      _this$ui7 = this.ui, sourceEditor = _this$ui7.sourceEditor, importController = _this$ui7.importController;
                      _context67.prev = 1;
                      _context67.next = 4;
                      return this.withContextDo(function (ctx) {
                        return ctx.selectedClass && ctx.selectedClass.name;
                      });

                    case 4:
                      if (_context67.sent) {
                        _context67.next = 7;
                        break;
                      }

                      this.view.showError(new Error("No class selected"));
                      return _context67.abrupt("return", null);

                    case 7:
                      content = sourceEditor.textString;
                      _context67.next = 10;
                      return this.withContextDo(function (ctx) {
                        var selectedClass = ctx.selectedClass;
                        var descr = ctx.sourceDescriptorFor(selectedClass);
                        var m = descr.module;
                        var origSource = descr.moduleSource;
                        ctx.isSaving = true;
                        return {
                          moduleId: m.id,
                          origSource: origSource
                        };
                      });

                    case 10:
                      __varRecorder__$1.__inter6__ = _context67.sent;
                      moduleId = __varRecorder__$1.__inter6__.moduleId;
                      origSource = __varRecorder__$1.__inter6__.origSource;
                      __varRecorder__$1.__inter6__;
                      _context67.next = 16;
                      return interactivlyFixUndeclaredVariables(sourceEditor, {
                        requester: sourceEditor,
                        sourceUpdater: function () {
                          var _sourceUpdater = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee62(type, arg) {
                            return regeneratorRuntime.wrap(function _callee62$(_context63) {
                              while (1) {
                                switch (_context63.prev = _context63.next) {
                                  case 0:
                                    _context63.next = 2;
                                    return _this6.withContextDo( /*#__PURE__*/function () {
                                      var _ref18 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee61(ctx) {
                                        var descr, m;
                                        return regeneratorRuntime.wrap(function _callee61$(_context62) {
                                          while (1) {
                                            switch (_context62.prev = _context62.next) {
                                              case 0:
                                                descr = ctx.sourceDescriptorFor(ctx.selectedClass);
                                                m = descr.module;

                                                if (!(type === "import")) {
                                                  _context62.next = 7;
                                                  break;
                                                }

                                                _context62.next = 5;
                                                return m.addImports(arg);

                                              case 5:
                                                _context62.next = 13;
                                                break;

                                              case 7:
                                                if (!(type === "global")) {
                                                  _context62.next = 12;
                                                  break;
                                                }

                                                _context62.next = 10;
                                                return m.addGlobalDeclaration(arg);

                                              case 10:
                                                _context62.next = 13;
                                                break;

                                              case 12:
                                                throw new Error("Cannot handle fixUndeclaredVar type ".concat(type));

                                              case 13:
                                                descr.resetIfChanged();

                                              case 14:
                                              case "end":
                                                return _context62.stop();
                                            }
                                          }
                                        }, _callee61);
                                      }));

                                      return function (_x32) {
                                        return _ref18.apply(this, arguments);
                                      };
                                    }(), {
                                      type: type,
                                      arg: arg
                                    });

                                  case 2:
                                    _context63.next = 4;
                                    return importController.updateImports();

                                  case 4:
                                    _context63.next = 6;
                                    return _this6.updateKnownGlobals();

                                  case 6:
                                  case "end":
                                    return _context63.stop();
                                }
                              }
                            }, _callee62);
                          }));

                          function sourceUpdater(_x30, _x31) {
                            return _sourceUpdater.apply(this, arguments);
                          }

                          return sourceUpdater;
                        }(),
                        sourceRetriever: function () {
                          var _sourceRetriever = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee63() {
                            return regeneratorRuntime.wrap(function _callee63$(_context64) {
                              while (1) {
                                switch (_context64.prev = _context64.next) {
                                  case 0:
                                    return _context64.abrupt("return", _this6.withContextDo(function (ctx) {
                                      var descr = ctx.sourceDescriptorFor(ctx.selectedClass);
                                      return descr._modifiedSource(content).moduleSource;
                                    }, {
                                      content: sourceEditor.textString
                                    }));

                                  case 1:
                                  case "end":
                                    return _context64.stop();
                                }
                              }
                            }, _callee63);
                          }));

                          function sourceRetriever() {
                            return _sourceRetriever.apply(this, arguments);
                          }

                          return sourceRetriever;
                        }(),
                        highlightUndeclared: function () {
                          var _highlightUndeclared = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee64(undeclaredVar) {
                            var varStart, varEnd, _yield$_this6$withCon, classStart, classEnd, range;

                            return regeneratorRuntime.wrap(function _callee64$(_context65) {
                              while (1) {
                                switch (_context65.prev = _context65.next) {
                                  case 0:
                                    varStart = undeclaredVar.start, varEnd = undeclaredVar.end;
                                    _context65.next = 3;
                                    return _this6.withContextDo(function (ctx) {
                                      var descr = ctx.sourceDescriptorFor(ctx.selectedClass);
                                      var _descr$sourceLocation = descr.sourceLocation,
                                          classStart = _descr$sourceLocation.start,
                                          classEnd = _descr$sourceLocation.end;
                                      return {
                                        classStart: classStart,
                                        classEnd: classEnd
                                      };
                                    });

                                  case 3:
                                    _yield$_this6$withCon = _context65.sent;
                                    classStart = _yield$_this6$withCon.classStart;
                                    classEnd = _yield$_this6$withCon.classEnd;

                                    if (!(varStart < classStart || varEnd > classEnd)) {
                                      _context65.next = 8;
                                      break;
                                    }

                                    return _context65.abrupt("return");

                                  case 8:
                                    varStart -= classStart;
                                    varEnd -= classStart;
                                    range = {
                                      start: sourceEditor.indexToPosition(varStart),
                                      end: sourceEditor.indexToPosition(varEnd)
                                    };
                                    sourceEditor.selection = range;
                                    sourceEditor.centerRange(range);

                                  case 13:
                                  case "end":
                                    return _context65.stop();
                                }
                              }
                            }, _callee64);
                          }));

                          function highlightUndeclared(_x33) {
                            return _highlightUndeclared.apply(this, arguments);
                          }

                          return highlightUndeclared;
                        }()
                      });

                    case 16:
                      return _context67.abrupt("return", _context67.sent);

                    case 19:
                      _context67.prev = 19;
                      _context67.t0 = _context67["catch"](1);
                      _context67.next = 23;
                      return this.withContextDo( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee65() {
                        return regeneratorRuntime.wrap(function _callee65$(_context66) {
                          while (1) {
                            switch (_context66.prev = _context66.next) {
                              case 0:
                                _context66.t0 = origSource;

                                if (!_context66.t0) {
                                  _context66.next = 5;
                                  break;
                                }

                                _context66.next = 4;
                                return module$1(moduleId).changeSource(origSource);

                              case 4:
                                _context66.t0 = _context66.sent;

                              case 5:
                                return _context66.abrupt("return", _context66.t0);

                              case 6:
                              case "end":
                                return _context66.stop();
                            }
                          }
                        }, _callee65);
                      })), {
                        moduleId: moduleId,
                        origSource: origSource
                      });

                    case 23:
                      this.view.showError(_context67.t0);
                      return _context67.abrupt("return", null);

                    case 25:
                      _context67.prev = 25;
                      _context67.next = 28;
                      return this.withContextDo(function (ctx) {
                        return ctx.isSaving = false;
                      });

                    case 28:
                      _context67.next = 30;
                      return importController.updateImports();

                    case 30:
                      _context67.next = 32;
                      return this.updateKnownGlobals();

                    case 32:
                      sourceEditor.focus();
                      return _context67.finish(25);

                    case 34:
                    case "end":
                      return _context67.stop();
                  }
                }
              }, _callee66, this, [[1, 19, 25, 34]]);
            }));

            function ObjectEditorModel_interactivlyFixUndeclaredVariables_() {
              return _ObjectEditorModel_interactivlyFixUndeclaredVariables_.apply(this, arguments);
            }

            return ObjectEditorModel_interactivlyFixUndeclaredVariables_;
          }()
        }, {
          key: "interactivelyRunSelectedMethod",
          value: function () {
            var _ObjectEditorModel_interactivelyRunSelectedMethod_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee68() {
              var _this7 = this;

              var opts,
                  _yield$this$withConte9,
                  statusMessage,
                  _args69 = arguments;

              return regeneratorRuntime.wrap(function _callee68$(_context69) {
                while (1) {
                  switch (_context69.prev = _context69.next) {
                    case 0:
                      opts = _args69.length > 0 && _args69[0] !== undefined ? _args69[0] : {};
                      _context69.next = 3;
                      return this.withContextDo( /*#__PURE__*/function () {
                        var _ref20 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee67(ctx) {
                          var selectedMethod, result, msg;
                          return regeneratorRuntime.wrap(function _callee67$(_context68) {
                            while (1) {
                              switch (_context68.prev = _context68.next) {
                                case 0:
                                  selectedMethod = ctx.selectedMethod;

                                  if (selectedMethod) {
                                    _context68.next = 3;
                                    break;
                                  }

                                  return _context68.abrupt("return", {
                                    statusMessage: "no message selected"
                                  });

                                case 3:
                                  if (!(typeof ctx.target[selectedMethod.name] !== "function")) {
                                    _context68.next = 5;
                                    break;
                                  }

                                  return _context68.abrupt("return", {
                                    statusMessage: "".concat(selectedMethod.name, " is not a method of ").concat(_this7.target)
                                  });

                                case 5:
                                  _context68.prev = 5;
                                  _context68.next = 8;
                                  return ctx.target[selectedMethod.name]();

                                case 8:
                                  result = _context68.sent;
                                  msg = "Running ".concat(selectedMethod.name);
                                  if (typeof result !== "undefined") msg += ", returns ".concat(result);
                                  return _context68.abrupt("return", {
                                    statusMessage: msg
                                  });

                                case 14:
                                  _context68.prev = 14;
                                  _context68.t0 = _context68["catch"](5);
                                  return _context68.abrupt("return", {
                                    statusMessage: _context68.t0.toString()
                                  });

                                case 17:
                                case "end":
                                  return _context68.stop();
                              }
                            }
                          }, _callee67, null, [[5, 14]]);
                        }));

                        return function (_x34) {
                          return _ref20.apply(this, arguments);
                        };
                      }());

                    case 3:
                      _yield$this$withConte9 = _context69.sent;
                      statusMessage = _yield$this$withConte9.statusMessage;
                      if (statusMessage && !opts.silent) this.view.setStatusMessage(statusMessage);

                    case 6:
                    case "end":
                      return _context69.stop();
                  }
                }
              }, _callee68, this);
            }));

            function ObjectEditorModel_interactivelyRunSelectedMethod_() {
              return _ObjectEditorModel_interactivelyRunSelectedMethod_.apply(this, arguments);
            }

            return ObjectEditorModel_interactivelyRunSelectedMethod_;
          }()
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "ObjectEditorModel";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              context: {},
              editorPlugin: {
                readOnly: true,
                derived: true,
                after: ["submorphs"],
                get: function get() {
                  var ed = this.ui.sourceEditor;
                  var p = ed.pluginFind(function (p) {
                    return p.isEditorPlugin;
                  });
                  if (!p) p = ed.addPlugin(new JavaScriptEditorPlugin(config.codeEditor.defaultTheme));
                  return p;
                }
              },
              target: {
                get: function get() {
                  return this.context.target;
                }
              },
              isObjectEditor: {
                readOnly: true,
                get: function get() {
                  return true;
                }
              },
              systemInterface: {
                readOnly: true,
                get: function get() {
                  return this.editorPlugin.evalEnvironment.systemInterface;
                }
              },
              expose: {
                get: function get() {
                  return ["browse", "commands", "keybindings", "onWindowClose"];
                }
              },
              bindings: {
                get: function get() {
                  return [{
                    model: "inspect object button",
                    signal: "fire",
                    handler: "execCommand",
                    converter: function converter() {
                      return "open object inspector for target";
                    }
                  }, {
                    model: "publish button",
                    signal: "fire",
                    handler: "execCommand",
                    converter: function converter() {
                      return "freeze target";
                    }
                  }, {
                    model: "choose target button",
                    signal: "fire",
                    handler: "execCommand",
                    converter: function converter() {
                      return "choose target";
                    }
                  }, {
                    target: "add button",
                    signal: "fire",
                    handler: "interactivelyAddObjectPackageAndMethod"
                  }, {
                    model: "remove button",
                    signal: "fire",
                    handler: "execCommand",
                    converter: function converter() {
                      return "remove method or class";
                    }
                  }, {
                    target: "fork package button",
                    signal: "fire",
                    handler: "interactivelyForkPackage"
                  }, {
                    target: "open in browser button",
                    signal: "fire",
                    handler: "execCommand",
                    updater: function updater($upd) {
                      $upd("open class in system browser", {
                        klass: this.targetObj.selectedClass
                      });
                    }
                  }, {
                    target: "save button",
                    signal: "fire",
                    handler: "execCommand",
                    converter: function converter() {
                      return "save source";
                    }
                  }, {
                    target: "run method button",
                    signal: "fire",
                    handler: "execCommand",
                    converter: function converter() {
                      return "run selected method";
                    }
                  }, {
                    target: "toggle imports button",
                    signal: "fire",
                    handler: "toggleShowingImports"
                  }, {
                    target: "source editor",
                    signal: "textChange",
                    handler: "updateUnsavedChangeIndicatorDebounced"
                  }, {
                    target: "class tree",
                    signal: "selectedNode",
                    handler: "onClassTreeSelection"
                  }, {
                    target: "class tree",
                    signal: "contextMenuRequested",
                    handler: "contextMenuForClassTree"
                  }];
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./js/objecteditor/index.js";
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
        }, {
          start: 1632,
          end: 61405
        });
      }({
        referencedAs: "ViewModel",
        value: ViewModel
      });
      __varRecorder__$1.ObjectEditorModel = ObjectEditorModel;
      __varRecorder__$1.ObjectEditorModel = ObjectEditorModel;
      var ImportControllerModel = function (superclass) {
        var __lively_classholder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/js/objecteditor/index.js", __contextModule__);

        var __lively_class__ = __lively_classholder__.hasOwnProperty("ImportControllerModel") && typeof __lively_classholder__.ImportControllerModel === "function" ? __lively_classholder__.ImportControllerModel : __lively_classholder__.ImportControllerModel = function ImportControllerModel(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        if (Object.isFrozen(__lively_classholder__)) {
          return __lively_class__;
        }

        return initializeClass(__lively_class__, superclass, [{
          key: "getExpandedWidth",
          value: function ImportControllerModel_getExpandedWidth_() {
            return Math.min(400, Math.max(300, this.ui.importsList.listItemContainer.width));
          }
        }, {
          key: "openModuleInBrowser",
          value: function ImportControllerModel_openModuleInBrowser_() {
            this.view.execCommand("open selected module in system browser");
          }
        }, {
          key: "setModule",
          value: function () {
            var _ImportControllerModel_setModule_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee69(moduleId) {
              return regeneratorRuntime.wrap(function _callee69$(_context70) {
                while (1) {
                  switch (_context70.prev = _context70.next) {
                    case 0:
                      this.module = moduleId;
                      _context70.next = 3;
                      return this.updateImports();

                    case 3:
                    case "end":
                      return _context70.stop();
                  }
                }
              }, _callee69, this);
            }));

            function ImportControllerModel_setModule_(_x35) {
              return _ImportControllerModel_setModule_.apply(this, arguments);
            }

            return ImportControllerModel_setModule_;
          }()
        }, {
          key: "doNewNPMSearch",
          value: function () {
            var _ImportControllerModel_doNewNPMSearch_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee70(query) {
              var i, url, found;
              return regeneratorRuntime.wrap(function _callee70$(_context71) {
                while (1) {
                  switch (_context71.prev = _context71.next) {
                    case 0:
                      i = open$1("fetching information...");
                      i.center = this.view.owner.globalBounds().center();
                      url = "https://registry.npmjs.com/-/v1/search?text=".concat(query, "&size=50");
                      _context71.next = 5;
                      return resource(url).makeProxied().readJson();

                    case 5:
                      found = _context71.sent;
                      i.remove();
                      return _context71.abrupt("return", found.objects.map(function (p) {
                        var _p$package = p["package"],
                            name = _p$package.name,
                            version = _p$package.version;
                        return {
                          isListItem: true,
                          string: "".concat(name, "@").concat(version),
                          value: p
                        };
                      }));

                    case 8:
                    case "end":
                      return _context71.stop();
                  }
                }
              }, _callee70, this);
            }));

            function ImportControllerModel_doNewNPMSearch_(_x36) {
              return _ImportControllerModel_doNewNPMSearch_.apply(this, arguments);
            }

            return ImportControllerModel_doNewNPMSearch_;
          }()
        }, {
          key: "updateImports",
          value: function () {
            var _ImportControllerModel_updateImports_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee72() {
              var importsList, items;
              return regeneratorRuntime.wrap(function _callee72$(_context73) {
                while (1) {
                  switch (_context73.prev = _context73.next) {
                    case 0:
                      importsList = this.ui.importsList;
                      _context73.next = 3;
                      return this.editor.withContextDo( /*#__PURE__*/function () {
                        var _ref21 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee71(ctx) {
                          var module, imports, items;
                          return regeneratorRuntime.wrap(function _callee71$(_context72) {
                            while (1) {
                              switch (_context72.prev = _context72.next) {
                                case 0:
                                  _context72.next = 2;
                                  return ctx.selectedModule;

                                case 2:
                                  module = _context72.sent;

                                  if (module) {
                                    _context72.next = 5;
                                    break;
                                  }

                                  return _context72.abrupt("return", []);

                                case 5:
                                  _context72.next = 7;
                                  return module.imports();

                                case 7:
                                  imports = _context72.sent;
                                  items = imports.map(function (ea) {
                                    var label = [];
                                    var alias = ea.local !== ea.imported && ea.imported !== "default" ? ea.local : null;
                                    if (alias) label.push("".concat(ea.imported, " as "), {});
                                    var importName = alias || ea.local || "??????";
                                    label.push(importName, {
                                      fontWeight: "bold"
                                    });
                                    label.push(" from ".concat(truncate(ea.fromModule, 25, "...")), {
                                      opacity: 0.5
                                    });
                                    var tooltip = label.slice();
                                    tooltip[2] = " from ".concat(ea.fromModule);
                                    tooltip[3] = {};
                                    return {
                                      isListItem: true,
                                      value: ea,
                                      label: label,
                                      tooltip: tooltip,
                                      annotation: ea.fromModule.includes("jspm.dev") ? Icon.textAttribute("npm", {
                                        fontSize: 18,
                                        fontWeight: "400",
                                        textStyleClasses: ["fab"]
                                      }) : []
                                    };
                                  });
                                  return _context72.abrupt("return", items);

                                case 10:
                                case "end":
                                  return _context72.stop();
                              }
                            }
                          }, _callee71);
                        }));

                        return function (_x37) {
                          return _ref21.apply(this, arguments);
                        };
                      }());

                    case 3:
                      items = _context73.sent;
                      importsList.items = [];
                      importsList.items = items;

                    case 6:
                    case "end":
                      return _context73.stop();
                  }
                }
              }, _callee72, this);
            }));

            function ImportControllerModel_updateImports_() {
              return _ImportControllerModel_updateImports_.apply(this, arguments);
            }

            return ImportControllerModel_updateImports_;
          }()
        }, {
          key: "keybindings",
          get: function get() {
            return [{
              keys: "Enter",
              command: "open selected module in system browser"
            }];
          }
        }, {
          key: "commands",
          get: function get() {
            var _this8 = this;

            return [{
              name: "open selected module in system browser",
              exec: function () {
                var _exec17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee73(importController) {
                  var requester, importSpec, _ref22, fromModule, local;

                  return regeneratorRuntime.wrap(function _callee73$(_context74) {
                    while (1) {
                      switch (_context74.prev = _context74.next) {
                        case 0:
                          requester = _this8.view.getWindow();
                          importSpec = _this8.ui.importsList.selection;

                          if (importSpec) {
                            _context74.next = 5;
                            break;
                          }

                          requester.setStatusMessage("no module selected");
                          return _context74.abrupt("return", null);

                        case 5:
                          _ref22 = importSpec || {}, fromModule = _ref22.fromModule, local = _ref22.local;

                          if (fromModule.startsWith(".")) {
                            fromModule = System.decanonicalize(fromModule, _this8.module);
                          }

                          return _context74.abrupt("return", _this8.world().execCommand("open browser", {
                            moduleName: fromModule,
                            codeEntity: local
                          }));

                        case 8:
                        case "end":
                          return _context74.stop();
                      }
                    }
                  }, _callee73);
                }));

                function exec(_x38) {
                  return _exec17.apply(this, arguments);
                }

                return exec;
              }()
            }];
          }
        }, {
          key: "refreshInterface",
          value: function () {
            var _ImportControllerModel_refreshInterface_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee74() {
              return regeneratorRuntime.wrap(function _callee74$(_context75) {
                while (1) {
                  switch (_context75.prev = _context75.next) {
                    case 0:
                      _context75.next = 2;
                      return this.updateImports();

                    case 2:
                      _context75.next = 4;
                      return this.editor.updateKnownGlobals();

                    case 4:
                      this.editor.ui.sourceEditor.focus();

                    case 5:
                    case "end":
                      return _context75.stop();
                  }
                }
              }, _callee74, this);
            }));

            function ImportControllerModel_refreshInterface_() {
              return _ImportControllerModel_refreshInterface_.apply(this, arguments);
            }

            return ImportControllerModel_refreshInterface_;
          }()
        }, {
          key: "interactivelyAddImport",
          value: function () {
            var _ImportControllerModel_interactivelyAddImport_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee80() {
              var _this9 = this;

              var origSource, editor, requester, importStyle, importStmt, jspmModule, _jspmModule$selected, _jspmModule$package, version, name, system, choices, insertions, sourceEditor;

              return regeneratorRuntime.wrap(function _callee80$(_context81) {
                while (1) {
                  switch (_context81.prev = _context81.next) {
                    case 0:
                      editor = this.editor;
                      requester = this.view.getWindow();
                      _context81.prev = 2;
                      _context81.next = 5;
                      return editor.withContextDo(function (ctx) {
                        return !ctx.selectedClass;
                      });

                    case 5:
                      if (!_context81.sent) {
                        _context81.next = 8;
                        break;
                      }

                      requester.showError(new Error("No class selected"));
                      return _context81.abrupt("return");

                    case 8:
                      _context81.next = 10;
                      return this.world().multipleChoicePrompt("Select import style:", {
                        requester: requester,
                        width: 400,
                        choices: new Map([["An already loaded module (via exports)", "system"], ["A NPM Module via jspm.dev", "jspm"], ["A custom module (via free text)", "free text"]])
                      });

                    case 10:
                      importStyle = _context81.sent;

                      if (!(importStyle === undefined)) {
                        _context81.next = 13;
                        break;
                      }

                      return _context81.abrupt("return");

                    case 13:
                      importStmt = "import ... from \"module\";";

                      if (!(importStyle === "jspm")) {
                        _context81.next = 25;
                        break;
                      }

                      _context81.next = 17;
                      return this.world().filterableListPrompt("Browse NPM", [], {
                        requester: requester,
                        onFilter: debounce(500, /*#__PURE__*/function () {
                          var _ref23 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee75(param) {
                            var list;
                            return regeneratorRuntime.wrap(function _callee75$(_context76) {
                              while (1) {
                                switch (_context76.prev = _context76.next) {
                                  case 0:
                                    list = param.target.owner;

                                    if (!(list._lastTerm === list.input)) {
                                      _context76.next = 3;
                                      break;
                                    }

                                    return _context76.abrupt("return");

                                  case 3:
                                    list._lastTerm = list.input;
                                    _context76.next = 6;
                                    return _this9.doNewNPMSearch(list.input);

                                  case 6:
                                    list.items = _context76.sent;

                                  case 7:
                                  case "end":
                                    return _context76.stop();
                                }
                              }
                            }, _callee75);
                          }));

                          return function (_x39) {
                            return _ref23.apply(this, arguments);
                          };
                        }()),
                        fuzzy: true
                      });

                    case 17:
                      jspmModule = _context81.sent;

                      if (!(jspmModule.status !== "accepted")) {
                        _context81.next = 20;
                        break;
                      }

                      return _context81.abrupt("return");

                    case 20:
                      _jspmModule$selected = _slicedToArray(jspmModule.selected, 1);
                      jspmModule = _jspmModule$selected[0];
                      _jspmModule$package = jspmModule["package"], version = _jspmModule$package.version, name = _jspmModule$package.name;
                      importStmt = "import ... from \"https://jspm.dev/".concat(name, "@").concat(version, "\";");
                      importStyle = "free text";

                    case 25:
                      if (!(importStyle === "free text")) {
                        _context81.next = 46;
                        break;
                      }

                    case 26:

                      _context81.next = 29;
                      return this.world().editPrompt("Enter import statement:", {
                        requester: requester,
                        input: importStmt,
                        mode: "js"
                      });

                    case 29:
                      importStmt = _context81.sent;

                      if (importStmt) {
                        _context81.next = 32;
                        break;
                      }

                      return _context81.abrupt("return");

                    case 32:
                      _context81.prev = 32;
                      parse(importStmt);
                      _context81.next = 40;
                      break;

                    case 36:
                      _context81.prev = 36;
                      _context81.t0 = _context81["catch"](32);
                      requester.setStatusMessage(_context81.t0.message);
                      return _context81.abrupt("continue", 26);

                    case 40:
                      return _context81.abrupt("break", 43);

                    case 43:
                      _context81.next = 45;
                      return editor.withContextDo( /*#__PURE__*/function () {
                        var _ref24 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee76(ctx) {
                          var origSource;
                          return regeneratorRuntime.wrap(function _callee76$(_context77) {
                            while (1) {
                              switch (_context77.prev = _context77.next) {
                                case 0:
                                  _context77.next = 2;
                                  return ctx.selectedModule.source();

                                case 2:
                                  origSource = _context77.sent;
                                  ctx.isSaving = true;
                                  _context77.next = 6;
                                  return ctx.selectedModule.changeSource(importStmt + "\n" + origSource);

                                case 6:
                                  return _context77.abrupt("return", origSource);

                                case 7:
                                case "end":
                                  return _context77.stop();
                              }
                            }
                          }, _callee76);
                        }));

                        return function (_x40) {
                          return _ref24.apply(this, arguments);
                        };
                      }(), {
                        importStmt: importStmt
                      });

                    case 45:
                      origSource = _context81.sent;

                    case 46:
                      if (!(importStyle === "system")) {
                        _context81.next = 61;
                        break;
                      }

                      _context81.next = 49;
                      return editor.editorPlugin.systemInterface();

                    case 49:
                      system = _context81.sent;
                      _context81.next = 52;
                      return interactivelyChooseImports(system, {
                        requester: requester
                      });

                    case 52:
                      choices = _context81.sent;

                      if (choices) {
                        _context81.next = 55;
                        break;
                      }

                      return _context81.abrupt("return", null);

                    case 55:
                      _context81.next = 57;
                      return editor.withContextDo( /*#__PURE__*/function () {
                        var _ref25 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee77(ctx) {
                          var origSource;
                          return regeneratorRuntime.wrap(function _callee77$(_context78) {
                            while (1) {
                              switch (_context78.prev = _context78.next) {
                                case 0:
                                  _context78.next = 2;
                                  return ctx.selectedModule.source();

                                case 2:
                                  origSource = _context78.sent;
                                  ctx.isSaving = true;
                                  _context78.next = 6;
                                  return ctx.selectedModule.addImports(choices);

                                case 6:
                                  return _context78.abrupt("return", origSource);

                                case 7:
                                case "end":
                                  return _context78.stop();
                              }
                            }
                          }, _callee77);
                        }));

                        return function (_x41) {
                          return _ref25.apply(this, arguments);
                        };
                      }(), {
                        choices: choices
                      });

                    case 57:
                      origSource = _context81.sent;
                      insertions = choices.map(function (_ref26) {
                        var local = _ref26.local,
                            exported = _ref26.exported;
                        return exported === "default" ? local : exported;
                      }).join("\n");
                      sourceEditor = editor.ui.sourceEditor;
                      sourceEditor.insertTextAndSelect(insertions, sourceEditor.cursorPosition);

                    case 61:
                      _context81.next = 68;
                      break;

                    case 63:
                      _context81.prev = 63;
                      _context81.t1 = _context81["catch"](2);
                      _context81.next = 67;
                      return editor.withContextDo( /*#__PURE__*/function () {
                        var _ref27 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee78(ctx) {
                          return regeneratorRuntime.wrap(function _callee78$(_context79) {
                            while (1) {
                              switch (_context79.prev = _context79.next) {
                                case 0:
                                  _context79.t0 = origSource;

                                  if (!_context79.t0) {
                                    _context79.next = 5;
                                    break;
                                  }

                                  _context79.next = 4;
                                  return ctx.selectedModule.changeSource(origSource);

                                case 4:
                                  _context79.t0 = _context79.sent;

                                case 5:
                                  return _context79.abrupt("return", _context79.t0);

                                case 6:
                                case "end":
                                  return _context79.stop();
                              }
                            }
                          }, _callee78);
                        }));

                        return function (_x42) {
                          return _ref27.apply(this, arguments);
                        };
                      }(), {
                        origSource: origSource
                      });

                    case 67:
                      requester.showError(_context81.t1);

                    case 68:
                      _context81.prev = 68;
                      _context81.next = 71;
                      return this.updateImports();

                    case 71:
                      _context81.next = 73;
                      return editor.updateKnownGlobals();

                    case 73:
                      _context81.next = 75;
                      return editor.withContextDo( /*#__PURE__*/function () {
                        var _ref28 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee79(ctx) {
                          return regeneratorRuntime.wrap(function _callee79$(_context80) {
                            while (1) {
                              switch (_context80.prev = _context80.next) {
                                case 0:
                                  ctx.isSaving = false;

                                case 1:
                                case "end":
                                  return _context80.stop();
                              }
                            }
                          }, _callee79);
                        }));

                        return function (_x43) {
                          return _ref28.apply(this, arguments);
                        };
                      }());

                    case 75:
                      return _context81.finish(68);

                    case 76:
                    case "end":
                      return _context81.stop();
                  }
                }
              }, _callee80, this, [[2, 63, 68, 76], [32, 36]]);
            }));

            function ImportControllerModel_interactivelyAddImport_() {
              return _ImportControllerModel_interactivelyAddImport_.apply(this, arguments);
            }

            return ImportControllerModel_interactivelyAddImport_;
          }()
        }, {
          key: "interactivelyRemoveImport",
          value: function () {
            var _ImportControllerModel_interactivelyRemoveImport_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee82() {
              var importsList, requester, sels, really, error;
              return regeneratorRuntime.wrap(function _callee82$(_context83) {
                while (1) {
                  switch (_context83.prev = _context83.next) {
                    case 0:
                      importsList = this.ui.importsList;
                      requester = this.view.getWindow();
                      sels = importsList.selections;

                      if (!(!sels || !sels.length)) {
                        _context83.next = 5;
                        break;
                      }

                      return _context83.abrupt("return");

                    case 5:
                      _context83.next = 7;
                      return this.world().confirm(["Really remove these imports?\n", {}, pluck(sels, "local").join("\n"), {
                        fontWeight: "normal",
                        fontSize: 16
                      }], {
                        requester: requester
                      });

                    case 7:
                      really = _context83.sent;

                      if (really) {
                        _context83.next = 10;
                        break;
                      }

                      return _context83.abrupt("return");

                    case 10:
                      _context83.next = 12;
                      return this.editor.withContextDo( /*#__PURE__*/function () {
                        var _ref29 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee81(ctx) {
                          var m, origSource;
                          return regeneratorRuntime.wrap(function _callee81$(_context82) {
                            while (1) {
                              switch (_context82.prev = _context82.next) {
                                case 0:
                                  _context82.prev = 0;
                                  m = ctx.selectedModule;
                                  _context82.next = 4;
                                  return m.source();

                                case 4:
                                  origSource = _context82.sent;
                                  _context82.next = 7;
                                  return m.removeImports(sels);

                                case 7:
                                  return _context82.abrupt("return", false);

                                case 10:
                                  _context82.prev = 10;
                                  _context82.t0 = _context82["catch"](0);
                                  _context82.t1 = origSource;

                                  if (!_context82.t1) {
                                    _context82.next = 16;
                                    break;
                                  }

                                  _context82.next = 16;
                                  return m.changeSource(origSource);

                                case 16:
                                  return _context82.abrupt("return", _context82.t0);

                                case 17:
                                case "end":
                                  return _context82.stop();
                              }
                            }
                          }, _callee81, null, [[0, 10]]);
                        }));

                        return function (_x44) {
                          return _ref29.apply(this, arguments);
                        };
                      }(), {
                        sels: sels
                      });

                    case 12:
                      error = _context83.sent;
                      importsList.selection = null;
                      if (error) requester.showError(error);
                      this.refreshInterface();

                    case 16:
                    case "end":
                      return _context83.stop();
                  }
                }
              }, _callee82, this);
            }));

            function ImportControllerModel_interactivelyRemoveImport_() {
              return _ImportControllerModel_interactivelyRemoveImport_.apply(this, arguments);
            }

            return ImportControllerModel_interactivelyRemoveImport_;
          }()
        }, {
          key: "interactivelyRemoveUnusedImports",
          value: function () {
            var _ImportControllerModel_interactivelyRemoveUnusedImports_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee84() {
              var _requester, _origSource, toRemove;

              return regeneratorRuntime.wrap(function _callee84$(_context85) {
                while (1) {
                  switch (_context85.prev = _context85.next) {
                    case 0:
                      _context85.prev = 0;
                      _requester = this.view.getWindow();
                      _context85.next = 4;
                      return this.editor.withContextDo( /*#__PURE__*/function () {
                        var _ref30 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee83(ctx) {
                          return regeneratorRuntime.wrap(function _callee83$(_context84) {
                            while (1) {
                              switch (_context84.prev = _context84.next) {
                                case 0:
                                  _context84.next = 2;
                                  return ctx.selectedModule.source();

                                case 2:
                                  return _context84.abrupt("return", _context84.sent);

                                case 3:
                                case "end":
                                  return _context84.stop();
                              }
                            }
                          }, _callee83);
                        }));

                        return function (_x45) {
                          return _ref30.apply(this, arguments);
                        };
                      }());

                    case 4:
                      _origSource = _context85.sent;
                      _context85.next = 7;
                      return chooseUnusedImports(_origSource, {
                        requester: _requester
                      });

                    case 7:
                      toRemove = _context85.sent;

                      if (!(!toRemove || !toRemove.changes || !toRemove.changes.length)) {
                        _context85.next = 11;
                        break;
                      }

                      _requester.setStatusMessage("Nothing to remove");

                      return _context85.abrupt("return");

                    case 11:
                      _context85.next = 13;
                      return this.editor.withContextDo(function (ctx) {
                        ctx.selectedModule.removeImports(toRemove.removedImports);
                      }, {
                        toRemove: toRemove
                      });

                    case 13:
                      _requester.setStatusMessage("Imports removed");

                      _context85.next = 24;
                      break;

                    case 16:
                      _context85.prev = 16;
                      _context85.t0 = _context85["catch"](0);
                      _context85.t1 = origSource;

                      if (!_context85.t1) {
                        _context85.next = 22;
                        break;
                      }

                      _context85.next = 22;
                      return this.editor.withContextDo(function (ctx) {
                        return ctx.selectedModule.changeSource(origSource);
                      }, {
                        origSource: origSource
                      });

                    case 22:
                      requester.setStatusMessage(_context85.t0.toString());
                      return _context85.abrupt("return");

                    case 24:
                      _context85.next = 26;
                      return this.updateImports();

                    case 26:
                      _context85.next = 28;
                      return this.editor.updateKnownGlobals();

                    case 28:
                      this.editor.ui.sourceEditor.focus();

                    case 29:
                    case "end":
                      return _context85.stop();
                  }
                }
              }, _callee84, this, [[0, 16]]);
            }));

            function ImportControllerModel_interactivelyRemoveUnusedImports_() {
              return _ImportControllerModel_interactivelyRemoveUnusedImports_.apply(this, arguments);
            }

            return ImportControllerModel_interactivelyRemoveUnusedImports_;
          }()
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "ImportControllerModel";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              editor: {
                get: function get() {
                  return this.view.owner.viewModel;
                }
              },
              systemInterface: {
                get: function get() {
                  return this.editor && this.editor.systemInterface;
                }
              },
              module: {
                set: function set(moduleOrId) {
                  var id = !moduleOrId ? null : typeof moduleOrId === "string" ? moduleOrId : moduleOrId.id;
                  this.setProperty("module", id);
                }
              },
              expose: {
                get: function get() {
                  return ["commands", "keybindings", "setModule", "updateImports", "doNewNPMSearch", "getExpandedWidth"];
                }
              },
              bindings: {
                get: function get() {
                  return [{
                    target: "open button",
                    signal: "fire",
                    handler: "openModuleInBrowser"
                  }, {
                    target: "add import button",
                    signal: "fire",
                    handler: "interactivelyAddImport"
                  }, {
                    target: "remove import button",
                    signal: "fire",
                    handler: "interactivelyRemoveImport"
                  }, {
                    target: "cleanup button",
                    signal: "fire",
                    handler: "interactivelyRemoveUnusedImports"
                  }];
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./js/objecteditor/index.js";
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
        }, {
          start: 61414,
          end: 72250
        });
      }({
        referencedAs: "ViewModel",
        value: ViewModel
      });
      __varRecorder__$1.ImportControllerModel = ImportControllerModel;
      __varRecorder__$1.ImportControllerModel = ImportControllerModel;

      var __varRecorder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/js/objecteditor/ui.cp.js", __contextModule__);
      var __moduleMeta__ = {
        pathInPackage: function pathInPackage() {
          return "./js/objecteditor/ui.cp.js";
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

      var open = exports('open', __varRecorder__["lively.ide/js/objecteditor/ui.cp.js__define__"]("open", "function", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var options,
            title,
            target,
            className,
            methodName,
            textPosition,
            scroll,
            classTreeScroll,
            evalEnvironment,
            loadingIndicator,
            ed,
            winOpts,
            win,
            _args = arguments;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
                title = options.title, target = options.target, className = options.className, methodName = options.methodName, textPosition = options.textPosition, scroll = options.scroll, classTreeScroll = options.classTreeScroll, evalEnvironment = options.evalEnvironment, loadingIndicator = options.loadingIndicator;
                ed = part(__varRecorder__.ObjectEditorLight, {
                  viewModel: dissoc(options, "title", "class", "method", "target", "evalEnvironment")
                });
                winOpts = {
                  name: "ObjectEditor window",
                  title: options.title || "ObjectEditor"
                };
                _context.next = 6;
                return ed.openInWindow(winOpts);

              case 6:
                win = _context.sent.activate();

                if (!target) {
                  _context.next = 11;
                  break;
                }

                if (loadingIndicator) loadingIndicator.label = "Connecting to target";
                _context.next = 11;
                return ed.browse({
                  title: title,
                  target: target,
                  className: className,
                  methodName: methodName,
                  textPosition: textPosition,
                  scroll: scroll,
                  classTreeScroll: classTreeScroll,
                  evalEnvironment: evalEnvironment
                });

              case 11:
                win.doNotAcceptDropsForThisAndSubmorphs();
                return _context.abrupt("return", win);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })), __moduleMeta__));

      __varRecorder__.open = open;
      __varRecorder__.ImportController = component["for"](function () {
        return component({
          defaultViewModel: ImportControllerModel,
          name: "import controller",
          extent: pt(209.5, 472),
          fill: Color.rgba(0, 0, 0, 0),
          layout: new GridLayout({
            autoAssign: false,
            columns: [0, {
              width: 200
            }],
            grid: [["imports list"], ["buttons"]],
            groups: {
              buttons: {
                align: "topLeft",
                resize: true
              },
              "imports list": {
                align: "topLeft",
                resize: true
              }
            },
            rows: [0, {
              height: 442
            }, 1, {
              fixed: 30
            }]
          }),
          submorphs: [part(DefaultList, {
            name: "imports list",
            borderColor: Color.rgbHex("CCCCCC"),
            itemBorderRadius: 2,
            borderWidth: {
              left: 0,
              right: 0,
              bottom: 1,
              top: 1
            }
          }), {
            name: "buttons",
            clipMode: "hidden",
            layout: new TilingLayout({
              align: "center",
              axisAlign: "center",
              orderByIndex: true,
              spacing: 3,
              wrapSubmorphs: false
            }),
            extent: pt(199.1, 29.3),
            fill: Color.rgba(0, 0, 0, 0),
            reactsToPointer: false,
            submorphs: [part(SystemButton, {
              name: "add import button",
              extent: pt(26, 24),
              submorphs: [{
                name: "label",
                textAndAttributes: Icon.textAttribute("plus")
              }],
              tooltip: "add new import"
            }), part(SystemButton, {
              name: "remove import button",
              extent: pt(26, 24),
              submorphs: [{
                name: "label",
                textAndAttributes: Icon.textAttribute("minus")
              }],
              tooltip: "remove selected import(s)"
            }), part(SystemButton, {
              name: "cleanup button",
              extent: pt(53, 24),
              submorphs: [{
                name: "label",
                fontSize: 12,
                textAndAttributes: ["cleanup", null]
              }],
              tooltip: "remove unused imports"
            }), part(SystemButton, {
              name: "open button",
              extent: pt(38, 24),
              submorphs: [{
                name: "label",
                fontSize: 12,
                textAndAttributes: ["open", null]
              }],
              tooltip: "open module of selected import"
            })]
          }]
        });
      }, {
        module: "lively.ide/js/objecteditor/ui.cp.js",
        "export": "ImportController",
        range: {
          start: 504,
          end: 2532
        }
      }, System, __varRecorder__, "ImportController");
      __varRecorder__.ObjectEditorLight = component["for"](function () {
        return component({
          defaultViewModel: ObjectEditorModel,
          name: "object editor light",
          extent: pt(693.7, 426.9),
          fill: Color.transparent,
          reactsToPointer: false,
          layout: new GridLayout({
            autoAssign: false,
            columns: [0, {
              fixed: 180
            }, 1, {
              width: 243
            }, 2, {
              fixed: 0
            }],
            grid: [["object commands", "object commands", "object commands"], ["class tree", "frozen warning", "import controller"], ["class tree", "source editor", "import controller"], ["class and method controls", "source editor controls", "import controller"]],
            groups: {
              "class and method controls": {
                align: "topLeft",
                resize: true
              },
              "class tree": {
                align: "topLeft",
                resize: true
              },
              "frozen warning": {
                align: "topLeft",
                resize: true
              },
              "import controller": {
                align: "topLeft",
                resize: true
              },
              "object commands": {
                align: "topLeft",
                resize: true
              },
              "source editor": {
                align: "topLeft",
                resize: true
              },
              "source editor controls": {
                align: "topLeft",
                resize: true
              }
            },
            rows: [0, {
              fixed: 28
            }, 1, {
              fixed: 0
            }, 2, {
              height: 125
            }, 3, {
              fixed: 30
            }]
          }),
          submorphs: [{
            name: "object commands",
            extent: pt(727, 28),
            fill: Color.transparent,
            layout: new TilingLayout({
              orderByIndex: true,
              resizePolicies: [["target controls", {
                height: "fixed",
                width: "fill"
              }]],
              wrapSubmorphs: false
            }),
            reactsToPointer: false,
            submorphs: [{
              name: "target controls",
              clipMode: "hidden",
              extent: pt(181.3, 30),
              fill: Color.rgba(0, 0, 0, 0),
              layout: new TilingLayout({
                axisAlign: "center",
                align: "center",
                orderByIndex: true,
                padding: {
                  height: 0,
                  width: 0,
                  x: 2,
                  y: 2
                },
                reactToSubmorphAnimations: false,
                renderViaCSS: true,
                spacing: 2
              }),
              position: pt(271.9, 0),
              reactsToPointer: false,
              submorphs: [part(SystemButton, {
                name: "inspect object button",
                extent: pt(28, 24),
                tooltip: "open object inspector",
                submorphs: [{
                  name: "label",
                  textAndAttributes: Icon.textAttribute("cogs")
                }]
              }), part(SystemButton, {
                extent: pt(28, 24),
                name: "publish button",
                tooltip: "Freeze this morph",
                submorphs: [{
                  name: "label",
                  textAndAttributes: Icon.textAttribute("cloud-upload-alt")
                }]
              }), part(SystemButton, {
                name: "choose target button",
                extent: pt(26, 24),
                tooltip: "select another target",
                submorphs: [{
                  name: "label",
                  textAndAttributes: Icon.textAttribute("crosshairs")
                }]
              })]
            }, {
              name: "freezer controls",
              clipMode: "hidden",
              extent: pt(35, 28),
              fill: Color.rgba(0, 0, 0, 0),
              position: pt(626, 0),
              reactsToPointer: false
            }]
          }, {
            name: "class and method controls",
            extent: pt(180, 30),
            fill: Color.rgba(0, 0, 0, 0),
            layout: new TilingLayout({
              axisAlign: "center",
              align: "center",
              orderByIndex: true,
              padding: {
                height: 0,
                width: 0,
                x: 2,
                y: 2
              },
              reactToSubmorphAnimations: false,
              renderViaCSS: true,
              spacing: 2
            }),
            submorphs: [part(SystemButton, {
              name: "add button",
              extent: pt(26, 24),
              submorphs: [{
                name: "label",
                textAndAttributes: Icon.textAttribute("plus")
              }],
              tooltip: "add a new method"
            }), part(SystemButton, {
              name: "remove button",
              extent: pt(26, 24),
              submorphs: [{
                name: "label",
                textAndAttributes: Icon.textAttribute("minus")
              }],
              tooltip: "remove a method or class"
            }), part(SystemButton, {
              name: "fork package button",
              extent: pt(26, 24),
              submorphs: [{
                name: "label",
                textAndAttributes: Icon.textAttribute("code-branch")
              }],
              tooltip: "fork package"
            }), part(SystemButton, {
              name: "open in browser button",
              extent: pt(26, 24),
              submorphs: [{
                name: "label",
                textAndAttributes: Icon.textAttribute("external-link-alt")
              }],
              tooltip: "open selected class in system browser"
            })]
          }, {
            type: Text,
            name: "source editor",
            readOnly: false,
            borderColor: Color.rgb(204, 204, 204),
            borderWidth: 1,
            clipMode: "auto",
            extent: pt(547, 442),
            fixedHeight: true,
            fixedWidth: true,
            fontFamily: "\"IBM Plex Mono\"",
            lineWrapping: "by-chars",
            padding: rect(4, 2, 0, 0)
          }, {
            type: Tree,
            name: "class tree",
            clipMode: "hidden",
            extent: pt(180, 442),
            fontFamily: "\"IBM Plex Sans\"",
            fontSize: 14,
            fill: Color.white,
            borderColor: Color.rgb(204, 204, 204),
            borderWidth: {
              top: 1,
              bottom: 1,
              left: 0,
              right: 0
            },
            treeData: {}
          }, {
            name: "source editor controls",
            borderColor: {
              bottom: Color.rgb(255, 255, 255),
              left: Color.rgb(204, 204, 204),
              right: Color.rgb(204, 204, 204),
              top: Color.rgb(255, 255, 255)
            },
            borderWidth: {
              bottom: 0,
              left: 1,
              right: 1,
              top: 0
            },
            extent: pt(547, 30),
            fill: Color.rgba(0, 0, 0, 0),
            layout: new GridLayout({
              autoAssign: false,
              columns: [0, {
                width: 110
              }, 1, {
                fixed: 30,
                paddingRight: 1
              }, 2, {
                fixed: 30,
                paddingLeft: 1
              }, 3, {
                width: 110
              }, 4, {
                fixed: 74,
                paddingRight: 4
              }],
              grid: [[null, "save button", "run method button", null, "toggle imports button"]],
              groups: {
                "run method button": {
                  align: "topLeft",
                  resize: true
                },
                "save button": {
                  align: "topLeft",
                  resize: true
                },
                "toggle imports button": {
                  align: "topLeft",
                  resize: true
                }
              },
              rows: [0, {
                height: 30,
                paddingBottom: 3,
                paddingTop: 2
              }]
            }),
            submorphs: [part(SystemButton, {
              name: "save button",
              extent: pt(29, 23),
              submorphs: [{
                name: "label",
                textAndAttributes: Icon.textAttribute("save")
              }],
              tooltip: "save"
            }), part(SystemButton, {
              name: "run method button",
              extent: pt(28, 23),
              submorphs: [{
                name: "label",
                textAndAttributes: Icon.textAttribute("play-circle")
              }],
              tooltip: "execute selected method"
            }), part(SystemButton, {
              name: "toggle imports button",
              extent: pt(70, 23),
              submorphs: [{
                name: "label",
                textAndAttributes: ["imports", null]
              }],
              tooltip: "toggle showing imports"
            })]
          }, part(__varRecorder__.ImportController, {
            name: "import controller"
          })]
        });
      }, {
        module: "lively.ide/js/objecteditor/ui.cp.js",
        "export": "ObjectEditorLight",
        range: {
          start: 2673,
          end: 9902
        }
      }, System, __varRecorder__, "ObjectEditorLight");
      var ObjectEditorLight = exports('ObjectEditorLight', __varRecorder__.ObjectEditorLight);
      var ImportController = exports('ImportController', __varRecorder__.ImportController);
      __varRecorder__.ObjectEditorLight = ObjectEditorLight;
      __varRecorder__.ImportController = ImportController;
      __varRecorder__.open = open;

    })
  };
}));
