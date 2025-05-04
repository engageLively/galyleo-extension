System.register(['./__rootModule___commonjs-entry-039abf1b.js', './index-d0172adc.js', './index-d97f22af.js'], (function (exports) {
  var __contextModule__ = typeof module !== 'undefined' ? module : arguments[1];
;
  var Path, isOverridden, _createClass, truncate, uniq, withoutAll, _classCallCheck, joinPath, _asyncToGenerator, resource, adoptObject, withSuperclasses, _defineProperty, capitalize, toJsIdentifier, changeIndent, parse, topLevelDeclsAndRefs, imports, findGlobalVarRefs, isValidIdentifier, parseFunction, runEval, scripting, classToFunctionTransform, ExportLookup;
  return {
    setters: [function (module) {
      Path = module.bw;
      isOverridden = module.dm;
      _createClass = module.g;
      truncate = module.aj;
      uniq = module.u;
      withoutAll = module.x;
      _classCallCheck = module.f;
      joinPath = module.b9;
      _asyncToGenerator = module._;
      resource = module.ac;
      adoptObject = module.bc;
      withSuperclasses = module.dn;
      _defineProperty = module.ah;
      capitalize = module.bo;
      toJsIdentifier = module.cx;
      changeIndent = module.dp;
    }, function (module) {
      parse = module.p;
      topLevelDeclsAndRefs = module.t;
      imports = module.F;
      findGlobalVarRefs = module.D;
      isValidIdentifier = module.I;
      parseFunction = module.r;
    }, function (module) {
      runEval = module.b;
      scripting = module.M;
      classToFunctionTransform = module.c;
      ExportLookup = module.E;
    }],
    execute: (function () {

      var __varRecorder__$1 = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.classes/source-descriptors.js", __contextModule__);

      var __moduleMeta__$1 = {
        pathInPackage: function pathInPackage() {
          return "./source-descriptors.js";
        },
        unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
          return function () {};
        },
        subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
          return function () {};
        },
        "package": function _package() {
          return {
            name: "lively.classes",
            version: "0.1.20"
          };
        }
      };

      var lexicalClassMembers = exports('l', __varRecorder__$1["lively.classes/source-descriptors.js__define__"]("lexicalClassMembers", "function", function (klass) {
        var _varRecorder__$Runti = __varRecorder__$1.RuntimeSourceDescriptor["for"](klass),
            parsed = _varRecorder__$Runti.ast,
            type = _varRecorder__$Runti.type;

        if (type !== "ClassDeclaration") {
          throw new Error("Expected class but got ".concat(type));
        }

        var members = Path("body.body").get(parsed);
        return members.map(function (node) {
          var isStatic = node["static"],
              kind = node.kind,
              _node$key = node.key;
              _node$key.type;
              var id = _node$key.name,
              literalId = _node$key.value;
          var name = id || literalId;
          var overridden = isOverridden(klass, name);
          var base = isStatic ? klass : klass.prototype;
          var value = kind === "get" ? base.__lookupGetter__(name) : kind === "set" ? base.__lookupSetter__(name) : base[name];
          return {
            "static": isStatic,
            name: name,
            value: value,
            kind: kind,
            owner: klass,
            overridden: overridden
          };
        });
      }, __moduleMeta__$1));

      __varRecorder__$1.lexicalClassMembers = lexicalClassMembers;
      __varRecorder__$1.objMetaSym = Symbol["for"]("lively-object-meta");
      __varRecorder__$1.moduleSym = Symbol["for"]("lively-module-meta");
      __varRecorder__$1.G = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : undefined;
      __varRecorder__$1.descriptorCache = new Map();
      __varRecorder__$1.localSystem = __varRecorder__$1.G.System;
      var SourceDescriptor = /*#__PURE__*/function () {
        function SourceDescriptor(sourceLocation, moduleSource) {
          _classCallCheck(this, SourceDescriptor);

          if (sourceLocation && moduleSource) {
            this.update(moduleSource, sourceLocation);
          } else this.reset();
        }

        _createClass(SourceDescriptor, [{
          key: "reset",
          value: function reset() {
            this._sourceLocation = null;
            this._source = "";
            this._ast = null;
            this._moduleSource = "";
            this._moduleAst = null;
            this._moduleScope = null;
            this._moduleImports = null;
            this._declaredAndUndeclaredNames = null;
          }
        }, {
          key: "update",
          value: function update(moduleSource, sourceLocation) {
            if (this._moduleSource === moduleSource && sourceLocation && this._sourceLocation && sourceLocation.start === this._sourceLocation.start && sourceLocation.end === this._sourceLocation.end) return;
            this.reset();
            this._moduleSource = moduleSource;
            this._sourceLocation = sourceLocation;
          }
        }, {
          key: "changeSource",
          value: function changeSource(newSource) {
            var moduleSource = this.moduleSource,
                _this$sourceLocation = this.sourceLocation,
                start = _this$sourceLocation.start,
                end = _this$sourceLocation.end;
            var newModuleSource = moduleSource.slice(0, start) + newSource + moduleSource.slice(end);
            var newSourceLocation = {
              start: start,
              end: start + newSource.length
            };
            this.update(newModuleSource, newSourceLocation);
            this._source = newSource;
            return this;
          }
        }, {
          key: "toString",
          value: function toString() {
            var objString = truncate(this._source || "NO SOURCE", 35).replace(/\n/g, "");
            return "".concat(this.constructor.name, "(").concat(objString, ")");
          }
        }, {
          key: "sourceLocation",
          get: function get() {
            if (!this._sourceLocation) throw new Error("_sourceLocation not defined");
            return this._sourceLocation;
          }
        }, {
          key: "moduleSource",
          get: function get() {
            if (!this._moduleSource) throw new Error("_moduleSource not defined!");
            return this._moduleSource;
          }
        }, {
          key: "moduleAst",
          get: function get() {
            return this._moduleAst || (this._moduleAst = parse(this.moduleSource, {
              withComments: true
            }));
          }
        }, {
          key: "moduleScope",
          get: function get() {
            return this._moduleScope || (this._moduleScope = topLevelDeclsAndRefs(this.ast).scope);
          }
        }, {
          key: "moduleImports",
          get: function get() {
            return this._moduleImports || (this._moduleImports = imports(this.moduleScope));
          }
        }, {
          key: "ast",
          get: function get() {
            if (this._ast) return this._ast;
            var parsed = parse(this.source, {
              withComments: true
            });
            var node = parsed.body[0];
            if (node.type === "ExpressionStatement") node = node.expression;
            return this._ast = node;
          }
        }, {
          key: "source",
          get: function get() {
            if (this._source) return this._source;
            var moduleSource = this.moduleSource,
                _this$sourceLocation2 = this.sourceLocation,
                start = _this$sourceLocation2.start,
                end = _this$sourceLocation2.end;
            return this._source = moduleSource.slice(start, end);
          }
        }, {
          key: "type",
          get: function get() {
            return this.ast.type;
          }
        }, {
          key: "declaredAndUndeclaredNames",
          get: function get() {
            if (this._declaredAndUndeclaredNames) {
              return this._declaredAndUndeclaredNames;
            }

            var parsed = this.ast;
            var declaredNames = topLevelDeclsAndRefs(this.moduleAst).declaredNames;
            var declaredImports = uniq(this.moduleImports.map(function (_ref) {
              var local = _ref.local;
              return local;
            }));
            var localDeclaredNames = withoutAll(declaredNames, declaredImports);
            var undeclaredNames = withoutAll(findGlobalVarRefs(parsed).map(function (ea) {
              return ea.name;
            }), declaredNames);
            return this._declaredAndUndeclaredNames = {
              declaredNames: declaredNames,
              declaredImports: declaredImports,
              localDeclaredNames: localDeclaredNames,
              undeclaredNames: undeclaredNames
            };
          }
        }]);

        return SourceDescriptor;
      }();
      __varRecorder__$1.SourceDescriptor = SourceDescriptor;
      var RuntimeSourceDescriptor = exports('R', /*#__PURE__*/function () {
        _createClass(RuntimeSourceDescriptor, null, [{
          key: "forObjectWithModuleSource",
          value: function forObjectWithModuleSource(obj, moduleSource, optSystem) {
            var descr = this["for"](obj, optSystem);
            descr.ensureSourceDescriptor(descr.sourceLocation, moduleSource);
            return descr;
          }
        }, {
          key: "for",
          value: function _for(obj, optSystem) {
            var descr = __varRecorder__$1.descriptorCache.get(obj);

            if (!descr) {
              descr = new this(obj, optSystem);

              __varRecorder__$1.descriptorCache.set(obj, descr);
            }

            return descr;
          }
        }]);

        function RuntimeSourceDescriptor(obj, System) {
          _classCallCheck(this, RuntimeSourceDescriptor);

          this.obj = obj;
          this.System = System;
          this.reset();
        }

        _createClass(RuntimeSourceDescriptor, [{
          key: "reset",
          value: function reset() {
            this._source = "";
            this._sourceLocation = null;
            this._ast = null;
            this._moduleSource = "";
            this._moduleAst = null;
            this._moduleScope = null;
            this._moduleImports = null;
            this._declaredAndUndeclaredNames = null;
          }
        }, {
          key: "resetIfChanged",
          value: function resetIfChanged() {
            var moduleSource = this.meta.moduleSource;

            if (this._moduleSource && moduleSource && this._moduleSource !== moduleSource) {
              this.reset();
            }
          }
        }, {
          key: "changeSourceSync",
          value: function changeSourceSync(newSource) {
            var System = this.System;

            this._basicChangeSource(newSource);

            this.module.changeSource(this.moduleSource, {
              doSave: true
            });
            var result = runEval(newSource, {
              sync: true,
              targetModule: this.module.id,
              System: System
            });
            if (result.isError) throw result.value;
            return this;
          }
        }, {
          key: "changeSource",
          value: function () {
            var _changeSource = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(newSource) {
              var _this = this;

              var module;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      module = this.module;

                      if (!module._frozenModule) {
                        _context.next = 4;
                        break;
                      }

                      _context.next = 4;
                      return module.revive();

                    case 4:
                      _context.next = 6;
                      return module.changeSourceAction(function (oldSource) {
                        if (oldSource !== _this.moduleSource) {
                          throw new Error("source of module ".concat(module.id, " and source of ").concat(_this, " don't match"));
                        }

                        _this._basicChangeSource(newSource);

                        return _this.moduleSource;
                      });

                    case 6:
                      return _context.abrupt("return", this);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function changeSource(_x) {
              return _changeSource.apply(this, arguments);
            }

            return changeSource;
          }()
        }, {
          key: "_modifiedSource",
          value: function _modifiedSource(newSource) {
            var moduleSource = this.moduleSource,
                _this$sourceLocation3 = this.sourceLocation,
                start = _this$sourceLocation3.start,
                end = _this$sourceLocation3.end;
            return {
              moduleSource: moduleSource.slice(0, start) + newSource + moduleSource.slice(end),
              sourceLocation: {
                start: start,
                end: start + newSource.length
              }
            };
          }
        }, {
          key: "_renamedSource",
          value: function _renamedSource(newName) {
            var _this$ast = this.ast,
                type = _this$ast.type,
                _this$ast$id = _this$ast.id,
                start = _this$ast$id.start,
                end = _this$ast$id.end;

            if (type !== "ClassDeclaration") {
              throw new Error("Don't know how to rename ".concat(type));
            }

            return this._modifiedSource(this.source.slice(0, start) + newName + this.source.slice(end));
          }
        }, {
          key: "_basicChangeSource",
          value: function _basicChangeSource(newSource) {
            var meta = this.meta;

            var _this$_modifiedSource = this._modifiedSource(newSource),
                moduleSource = _this$_modifiedSource.moduleSource,
                sourceLocation = _this$_modifiedSource.sourceLocation;

            this.reset();
            this.meta = Object.assign({}, meta, {
              moduleSource: moduleSource
            }, sourceLocation);
            this._sourceLocation = sourceLocation;
            this._moduleSource = moduleSource;
            this._source = newSource;
            return this;
          }
        }, {
          key: "toString",
          value: function toString() {
            var source = this.source || String(this.obj);
            var objString = truncate(source, 35).replace(/\n/g, "");
            var modName;

            try {
              modName = this.module.shortName();
            } catch (e) {
              modName = "NO MODULE!";
            }

            return "".concat(this.constructor.name, "(").concat(objString, " in ").concat(modName, ")");
          }
        }, {
          key: "System",
          get: function get() {
            return this._System || __varRecorder__$1.localSystem;
          },
          set: function set(S) {
            this._System = S;
          }
        }, {
          key: "module",
          get: function get() {
            var obj = this.obj,
                System = this.System;

            if (!obj[__varRecorder__$1.moduleSym]) {
              throw new Error("runtime object of source descriptor has no module data");
            }

            var _obj$__varRecorder__$ = obj[__varRecorder__$1.moduleSym],
                pName = _obj$__varRecorder__$["package"].name,
                mName = _obj$__varRecorder__$.pathInPackage;
            var mId = mName.includes("://") ? mName : joinPath(pName, mName);

            var m = this.System._scripting.module(System, mId);

            if (!m._frozenModule && !m._source && this.moduleSource) {
              m.setSource(this.moduleSource);
            }

            return m;
          }
        }, {
          key: "meta",
          get: function get() {
            var obj = this.obj;

            if (!obj[__varRecorder__$1.objMetaSym]) {
              throw new Error("runtime object of source descriptor has no lively meta data");
            }

            return obj[__varRecorder__$1.objMetaSym];
          },
          set: function set(meta) {
            this.obj[__varRecorder__$1.objMetaSym] = meta;

            if (meta.hasOwnProperty("start") && meta.hasOwnProperty("end")) {
              this._sourceLocation = {
                start: meta.start,
                end: meta.end
              };
            }

            if (meta.hasOwnProperty("moduleSource")) {
              this._moduleSource = meta.moduleSource;
            }
          }
        }, {
          key: "sourceLocation",
          get: function get() {
            this.resetIfChanged();
            if (this._sourceLocation) return this._sourceLocation;
            var _this$meta = this.meta,
                start = _this$meta.start,
                end = _this$meta.end;

            if (start === undefined || end === undefined) {
              throw new Error("lively meta data has no start/end");
            }

            return this._sourceLocation = {
              start: start,
              end: end
            };
          }
        }, {
          key: "moduleSource",
          get: function get() {
            this.resetIfChanged();
            if (this._moduleSource) return this._moduleSource;
            var moduleSource = this.meta.moduleSource;

            if (moduleSource === undefined) {
              throw new Error("lively meta data has no moduleSource");
            }

            return this._moduleSource = moduleSource;
          }
        }, {
          key: "moduleAst",
          get: function get() {
            this.resetIfChanged();
            return this._moduleAst || (this._moduleAst = parse(this.moduleSource, {
              withComments: true
            }));
          }
        }, {
          key: "moduleScope",
          get: function get() {
            this.resetIfChanged();
            return this._moduleScope || (this._moduleScope = topLevelDeclsAndRefs(this.moduleAst).scope);
          }
        }, {
          key: "moduleImports",
          get: function get() {
            this.resetIfChanged();
            return this._moduleImports || (this._moduleImports = imports(this.moduleScope));
          }
        }, {
          key: "declaredAndUndeclaredNames",
          get: function get() {
            this.resetIfChanged();

            if (this._declaredAndUndeclaredNames) {
              return this._declaredAndUndeclaredNames;
            }

            var parsed = this.ast;

            var _query$topLevelDeclsA = topLevelDeclsAndRefs(this.moduleAst, {
              jslintGlobalComment: true
            }),
                declaredNames = _query$topLevelDeclsA.declaredNames;

            var declaredImports = uniq(this.moduleImports.map(function (_ref2) {
              var local = _ref2.local;
              return local;
            }));
            var localDeclaredNames = withoutAll(declaredNames, declaredImports);
            var undeclaredNames = withoutAll(findGlobalVarRefs(parsed).map(function (ea) {
              return ea.name;
            }), declaredNames);
            return this._declaredAndUndeclaredNames = {
              declaredNames: declaredNames,
              declaredImports: declaredImports,
              localDeclaredNames: localDeclaredNames,
              undeclaredNames: undeclaredNames
            };
          }
        }, {
          key: "source",
          get: function get() {
            this.resetIfChanged();
            if (this._source) return this._source;
            var _this$sourceLocation4 = this.sourceLocation,
                start = _this$sourceLocation4.start,
                end = _this$sourceLocation4.end,
                moduleSource = this.moduleSource;
            return this._source = moduleSource.slice(start, end);
          }
        }, {
          key: "ast",
          get: function get() {
            this.resetIfChanged();
            if (this._ast) return this._ast;
            var parsed = parse(this.source, {
              withComments: true
            });
            var node = parsed.body[0];
            if (node.type === "ExpressionStatement") node = node.expression;
            return this._ast = node;
          }
        }, {
          key: "type",
          get: function get() {
            return this.ast.type;
          }
        }, {
          key: "name",
          get: function get() {
            if (this.type === "ClassDeclaration") {
              var _this$ast$id2 = this.ast.id,
                  start = _this$ast$id2.start,
                  end = _this$ast$id2.end;
              return this.source.slice(start, end);
            }

            return "unknown";
          }
        }]);

        return RuntimeSourceDescriptor;
      }());
      __varRecorder__$1.RuntimeSourceDescriptor = RuntimeSourceDescriptor;
      __varRecorder__$1.lexicalClassMembers = lexicalClassMembers;

      var __varRecorder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.classes/object-classes.js", __contextModule__);

      var __moduleMeta__ = {
        pathInPackage: function pathInPackage() {
          return "./object-classes.js";
        },
        unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
          return function () {};
        },
        subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
          return function () {};
        },
        "package": function _package() {
          return {
            name: "lively.classes",
            version: "0.1.20"
          };
        }
      };

      var globalClasses = __varRecorder__["lively.classes/object-classes.js__define__"]("globalClasses", "function", function () {
        return Object.keys(System.global).map(function (ea) {
          var val = System.global[ea];
          return typeof val === "function" && val.name && val;
        }).filter(Boolean);
      }, __moduleMeta__);

      __varRecorder__.globalClasses = globalClasses;

      var normalizeOptions = __varRecorder__["lively.classes/object-classes.js__define__"]("normalizeOptions", "function", function (options) {
        options = Object.assign({
          baseURL: __varRecorder__.defaultBaseURL,
          System: System
        }, options);
        options.baseURL = options.baseURL.replace(/\/$/, "");
        return options;
      }, __moduleMeta__);

      __varRecorder__.normalizeOptions = normalizeOptions;

      var addScript = exports('b', __varRecorder__["lively.classes/object-classes.js__define__"]("addScript", "function", function (object, funcSource, name) {
        var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

        var moduleOrPackage = options["package"] || __varRecorder__.ObjectPackage.lookupModuleForClass(object.constructor, options);

        if (!moduleOrPackage) throw new Error("Object is not part of an object package: ".concat(object));
        return moduleOrPackage.addScript(object, funcSource, name);
      }, __moduleMeta__));

      __varRecorder__.addScript = addScript;

      var isObjectClass = exports('i', __varRecorder__["lively.classes/object-classes.js__define__"]("isObjectClass", "function", function (klass, options) {
        var _varRecorder__$norma = __varRecorder__.normalizeOptions(options),
            System = _varRecorder__$norma.System;

        var modMeta = klass[Symbol["for"]("lively-module-meta")];
        var pname = modMeta ? modMeta["package"].name : null;

        var _ref = pname ? __varRecorder__.lookupPackage(System, pname) : {},
            pkg = _ref.pkg;

        return pkg ? !!__varRecorder__.ObjectPackage.forSystemPackage(pkg) : false;
      }, __moduleMeta__));

      __varRecorder__.isObjectClass = isObjectClass;

      var interactivelyForkPackage = exports('a', __varRecorder__["lively.classes/object-classes.js__define__"]("interactivelyForkPackage", "function", /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(target, forkedName) {
          var klass, pkg, baseURL, System, forkedPackage;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  klass = target.constructor;
                  withSuperclasses(klass)[1];
                  klass[Symbol["for"]("lively-module-meta")]["package"].name;
                  pkg = __varRecorder__.ObjectPackage.lookupPackageForObject(target);
                  baseURL = pkg.baseURL, System = pkg.System;
                  _context.next = 7;
                  return pkg.fork(forkedName, {
                    baseURL: baseURL,
                    System: System
                  });

                case 7:
                  forkedPackage = _context.sent;
                  _context.next = 10;
                  return adoptObject(target, forkedPackage.objectClass);

                case 10:
                  return _context.abrupt("return", forkedPackage.objectClass[Symbol["for"]("__LivelyClassName__")]);

                case 11:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x, _x2) {
          return _ref2.apply(this, arguments);
        };
      }(), __moduleMeta__));

      __varRecorder__.interactivelyForkPackage = interactivelyForkPackage;
      var destructured_1 = scripting;
      __varRecorder__.ensurePackage = destructured_1.ensurePackage;
      __varRecorder__.importPackage = destructured_1.importPackage;
      __varRecorder__.lookupPackage = destructured_1.lookupPackage;
      __varRecorder__.module = destructured_1.module;
      __varRecorder__.ImportInjector = destructured_1.ImportInjector;
      __varRecorder__.objectPackageSym = Symbol["for"]("lively-object-package-data");
      __varRecorder__.defaultBaseURL = "local://lively-object-modules";
      __varRecorder__.addScript = addScript;
      __varRecorder__.isObjectClass = isObjectClass;
      __varRecorder__._packageStore = __varRecorder__._packageStore || {};
      __varRecorder__.interactivelyForkPackage = interactivelyForkPackage;

      var ObjectPackage = exports('O', /*#__PURE__*/function () {
        _createClass(ObjectPackage, null, [{
          key: "lookupPackageForObject",
          value: function lookupPackageForObject(object, options) {
            return this.lookupPackageForClass(object.constructor, options);
          }
        }, {
          key: "lookupPackageForClass",
          value: function lookupPackageForClass(klass, options) {
            var _varRecorder__$norma2 = __varRecorder__.normalizeOptions(options),
                System = _varRecorder__$norma2.System;

            var modMeta = klass[Symbol["for"]("lively-module-meta")];
            var pname = modMeta ? modMeta["package"].name : null;

            var _ref3 = pname ? __varRecorder__.lookupPackage(System, pname) : {},
                pkg = _ref3.pkg;

            return pkg ? __varRecorder__.ObjectPackage.forSystemPackage(pkg) : null;
          }
        }, {
          key: "lookupModuleForClass",
          value: function lookupModuleForClass(klass, options) {
            var _varRecorder__$norma3 = __varRecorder__.normalizeOptions(options);
                _varRecorder__$norma3.System;

            var pkg = this.lookupPackageForClass(klass, options);
            var modMeta = klass[Symbol["for"]("lively-module-meta")];
            return new __varRecorder__.ObjectModule(modMeta.pathInPackage, pkg);
          }
        }, {
          key: "forSystemPackage",
          value: function forSystemPackage(systemPackage) {
            return this.packageStore[systemPackage.name];
          }
        }, {
          key: "withId",
          value: function withId(id, options) {
            return this.packageStore[id] || (this.packageStore[id] = new this(id, options));
          }
        }, {
          key: "packageStore",
          get: function get() {
            return this._packageStore || (this._packageStore = __varRecorder__._packageStore);
          }
        }]);

        function ObjectPackage(id, options) {
          _classCallCheck(this, ObjectPackage);

          this._id = id;
          this.options = __varRecorder__.normalizeOptions(options);
        }

        _createClass(ObjectPackage, [{
          key: "ensureSubModule",
          value: function () {
            var _ensureSubModule = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var name,
                  subMod,
                  _args2 = arguments;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      name = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : "index";
                      subMod = new __varRecorder__.ObjectModule(name, this);
                      _context2.next = 4;
                      return subMod.ensureExistance();

                    case 4:
                      return _context2.abrupt("return", subMod);

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function ensureSubModule() {
              return _ensureSubModule.apply(this, arguments);
            }

            return ensureSubModule;
          }()
        }, {
          key: "resource",
          value: function resource$1() {
            var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            return resource(this.packageURL).join(path);
          }
        }, {
          key: "load",
          value: function load() {
            return __varRecorder__.importPackage(this.System, this.packageURL);
          }
        }, {
          key: "ensureExistance",
          value: function () {
            var _ensureExistance = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var resource, dirs, files, System, packageURL, config, p;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      resource = this.resource("/");
                      _context4.next = 3;
                      return resource.exists();

                    case 3:
                      if (!_context4.sent) {
                        _context4.next = 5;
                        break;
                      }

                      return _context4.abrupt("return");

                    case 5:
                      dirs = [{
                        resource: resource
                      }];
                      files = [{
                        resource: this.resource("package.json"),
                        content: JSON.stringify(this.config, null, 2)
                      }];
                      _context4.next = 9;
                      return Promise.all(dirs.map(function (ea) {
                        return ea.resource.mkdir();
                      }));

                    case 9:
                      _context4.next = 11;
                      return Promise.all(files.map( /*#__PURE__*/function () {
                        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(ea) {
                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  _context3.next = 2;
                                  return ea.resource.exists();

                                case 2:
                                  _context3.t0 = !_context3.sent;

                                  if (!_context3.t0) {
                                    _context3.next = 7;
                                    break;
                                  }

                                  _context3.next = 6;
                                  return ea.resource.write(ea.content);

                                case 6:
                                  _context3.t0 = _context3.sent;

                                case 7:
                                  return _context3.abrupt("return", _context3.t0);

                                case 8:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee3);
                        }));

                        return function (_x3) {
                          return _ref4.apply(this, arguments);
                        };
                      }()));

                    case 11:
                      _context4.next = 13;
                      return this.objectModule.ensureExistance();

                    case 13:
                      System = this.System, packageURL = this.packageURL, config = this.config;
                      _context4.next = 16;
                      return __varRecorder__.ensurePackage(System, packageURL);

                    case 16:
                      p = _context4.sent;
                      p.registerWithConfig(config);
                      console.log("".concat(this.packageURL, " REGISTERED"));
                      return _context4.abrupt("return", this);

                    case 20:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function ensureExistance() {
              return _ensureExistance.apply(this, arguments);
            }

            return ensureExistance;
          }()
        }, {
          key: "ensureObjectClass",
          value: function () {
            var _ensureObjectClass = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(superClass) {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.ensureExistance();

                    case 2:
                      return _context5.abrupt("return", this.objectModule.ensureObjectClass(superClass));

                    case 3:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function ensureObjectClass(_x4) {
              return _ensureObjectClass.apply(this, arguments);
            }

            return ensureObjectClass;
          }()
        }, {
          key: "adoptObject",
          value: function () {
            var _adoptObject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(object) {
              var klass;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      if (!(this.objectClass === object.constructor)) {
                        _context6.next = 2;
                        break;
                      }

                      return _context6.abrupt("return");

                    case 2:
                      _context6.next = 4;
                      return this.ensureObjectClass(object.constructor);

                    case 4:
                      klass = _context6.sent;
                      adoptObject(object, klass);

                    case 6:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function adoptObject$1(_x5) {
              return _adoptObject.apply(this, arguments);
            }

            return adoptObject$1;
          }()
        }, {
          key: "addScript",
          value: function addScript(object, funcSource, name) {
            return this.objectModule.addScript(object, funcSource, name);
          }
        }, {
          key: "remove",
          value: function remove() {
            this.systemPackage.remove();
            delete __varRecorder__.ObjectPackage.packageStore[this.id];
            return this.resource().remove();
          }
        }, {
          key: "renameObjectClass",
          value: function () {
            var _renameObjectClass = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(newName) {
              var objects,
                  klass,
                  System,
                  descr,
                  source,
                  _descr$ast$id,
                  start,
                  end,
                  newKlass,
                  _args7 = arguments;

              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      objects = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : [];
                      klass = this.objectClass, System = this.System;

                      if (!(!klass || klass[Symbol["for"]("__LivelyClassName__")] === newName)) {
                        _context7.next = 4;
                        break;
                      }

                      return _context7.abrupt("return", klass);

                    case 4:
                      if (isValidIdentifier(newName)) {
                        _context7.next = 6;
                        break;
                      }

                      throw new Error("".concat(newName, " is not a valid name for a class"));

                    case 6:
                      descr = RuntimeSourceDescriptor["for"](klass, System);
                      source = descr.source, _descr$ast$id = descr.ast.id, start = _descr$ast$id.start, end = _descr$ast$id.end;
                      _context7.next = 10;
                      return descr.changeSource(source.slice(0, start) + newName + source.slice(end));

                    case 10:
                      newKlass = this.objectClass;
                      objects.forEach(function (ea) {
                        ea.constructor = newKlass;
                        ea.__proto__ = newKlass.prototype;
                      });
                      return _context7.abrupt("return", newKlass);

                    case 13:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            function renameObjectClass(_x6) {
              return _renameObjectClass.apply(this, arguments);
            }

            return renameObjectClass;
          }()
        }, {
          key: "fork",
          value: function () {
            var _fork = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(forkedPackageName, opts) {
              var System, baseURL, objectClass, descr, _descr$_renamedSource, moduleSource, newPackage, systemModule;

              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      System = this.System, baseURL = this.baseURL, objectClass = this.objectClass;
                      opts = Object.assign({
                        System: System,
                        baseURL: baseURL
                      }, opts);
                      descr = RuntimeSourceDescriptor["for"](objectClass);
                      _descr$_renamedSource = descr._renamedSource(forkedPackageName), moduleSource = _descr$_renamedSource.moduleSource;
                      newPackage = __varRecorder__.ObjectPackage.withId(forkedPackageName, opts);
                      _context8.next = 7;
                      return newPackage.ensureExistance();

                    case 7:
                      systemModule = newPackage.objectModule.systemModule;
                      _context8.next = 10;
                      return systemModule.load({
                        format: "esm"
                      });

                    case 10:
                      _context8.next = 12;
                      return systemModule.changeSource(moduleSource);

                    case 12:
                      return _context8.abrupt("return", newPackage);

                    case 13:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function fork(_x7, _x8) {
              return _fork.apply(this, arguments);
            }

            return fork;
          }()
        }, {
          key: "id",
          get: function get() {
            return this._id;
          }
        }, {
          key: "name",
          get: function get() {
            return this.id;
          }
        }, {
          key: "System",
          get: function get() {
            return this.options.System;
          }
        }, {
          key: "baseURL",
          get: function get() {
            return this.options.baseURL;
          }
        }, {
          key: "packageURL",
          get: function get() {
            return this.baseURL + "/".concat(this.id);
          }
        }, {
          key: "config",
          get: function get() {
            return {
              name: this.name,
              version: "0.1.0",
              lively: {
                isObjectPackage: true
              }
            };
          }
        }, {
          key: "systemPackage",
          get: function get() {
            return __varRecorder__.lookupPackage(this.System, this.packageURL, true).pkg;
          }
        }, {
          key: "objectModule",
          get: function get() {
            return this._objectModule || (this._objectModule = new __varRecorder__.ObjectModule("index.js", this));
          }
        }, {
          key: "objectClass",
          get: function get() {
            return this.objectModule.objectClass;
          }
        }]);

        return ObjectPackage;
      }());
      __varRecorder__.ObjectPackage = ObjectPackage;

      var ObjectModule = /*#__PURE__*/function () {
        function ObjectModule(moduleName, objectPackage) {
          _classCallCheck(this, ObjectModule);

          if (!moduleName) throw new Error("ObjectModule needs package!");
          if (!objectPackage) throw new Error("ObjectModule needs package!");
          this._moduleName = moduleName;
          this._objectPackage = objectPackage;
        }

        _createClass(ObjectModule, [{
          key: "read",
          value: function read() {
            return this.resource.read();
          }
        }, {
          key: "write",
          value: function write(content) {
            return this.resource.write(content);
          }
        }, {
          key: "ensureExistance",
          value: function () {
            var _ensureExistance2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var r;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      r = this.resource;
                      _context9.next = 3;
                      return r.exists();

                    case 3:
                      if (_context9.sent) {
                        _context9.next = 7;
                        break;
                      }

                      _context9.next = 6;
                      return r.write("'format esm';\n");

                    case 6:
                      this.System.config({
                        meta: _defineProperty({}, this.url, {
                          format: "esm"
                        })
                      });

                    case 7:
                      return _context9.abrupt("return", this);

                    case 8:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));

            function ensureExistance() {
              return _ensureExistance2.apply(this, arguments);
            }

            return ensureExistance;
          }()
        }, {
          key: "adoptObject",
          value: function () {
            var _adoptObject2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(object, optClassName) {
              var klass;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      if (!(this.objectClass === object.constructor)) {
                        _context10.next = 2;
                        break;
                      }

                      return _context10.abrupt("return");

                    case 2:
                      _context10.next = 4;
                      return this.ensureObjectClass(object.constructor, optClassName);

                    case 4:
                      klass = _context10.sent;
                      adoptObject(object, klass);

                    case 6:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));

            function adoptObject$1(_x9, _x10) {
              return _adoptObject2.apply(this, arguments);
            }

            return adoptObject$1;
          }()
        }, {
          key: "ensureObjectClass",
          value: function ensureObjectClass(superClass, optClassName) {
            var _this = this;

            var klass = this.objectClass;

            if (klass && klass.prototype.__proto__ === superClass.prototype) {
              return klass;
            }

            return Promise.resolve(this.ensureObjectClassSource(superClass, optClassName)).then(function (ensured) {
              var source = ensured.source,
                  moduleId = ensured.moduleId,
                  className = ensured.className,
                  bindings = ensured.bindings;
              var System = _this.System;

              var mod = __varRecorder__.module(System, moduleId);

              if (bindings) for (var key in bindings) {
                mod.define(key, bindings[key]);
              }
              var evalResult = runEval(source, {
                classTransform: classToFunctionTransform,
                sync: true,
                targetModule: moduleId,
                System: System
              });

              if (evalResult.isError) {
                throw evalResult.value;
              }

              var klass = mod.recorder[className];

              if (!klass) {
                throw new Error("Failed to define class ".concat(className, " in ").concat(moduleId));
              }

              return klass;
            });
          }
        }, {
          key: "ensureObjectClassSource",
          value: function ensureObjectClassSource(superClass, optClassName) {
            return this.createDefaultClassDeclaration(superClass, optClassName);
          }
        }, {
          key: "createDefaultClassDeclaration",
          value: function () {
            var _createDefaultClassDeclaration = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var superClass,
                  className,
                  System,
                  module,
                  objectPackage,
                  superClassName,
                  isAnonymousSuperclass,
                  globalSuperClass,
                  source,
                  bindings,
                  exportForClass,
                  _varRecorder__$Impor,
                  standaloneImport,
                  classSource,
                  _args11 = arguments;

              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      superClass = _args11.length > 0 && _args11[0] !== undefined ? _args11[0] : Object;
                      className = _args11.length > 1 && _args11[1] !== undefined ? _args11[1] : false;
                      System = this.System, module = this.systemModule, objectPackage = this.objectPackage;
                      className = className || capitalize(toJsIdentifier(objectPackage.id));
                      superClassName = superClass[Symbol["for"]("__LivelyClassName__")] || superClass.name;
                      isAnonymousSuperclass = !superClassName || superClassName == "anonymous_class";
                      globalSuperClass = __varRecorder__.globalClasses().includes(superClass);
                      source = "";
                      bindings = null;

                      if (!isAnonymousSuperclass) {
                        _context11.next = 15;
                        break;
                      }

                      superClassName = "__anonymous_superclass__";
                      bindings = _defineProperty({}, superClassName, superClass);
                      source += "let __anonymous_superclass__ = __anonymous_superclass__;\n";
                      _context11.next = 20;
                      break;

                    case 15:
                      if (globalSuperClass) {
                        _context11.next = 20;
                        break;
                      }

                      _context11.next = 18;
                      return ExportLookup.findExportOfValue(superClass, System);

                    case 18:
                      exportForClass = _context11.sent;

                      if (exportForClass) {
                        _varRecorder__$Impor = __varRecorder__.ImportInjector.run(System, module.id, module["package"](), "", exportForClass), standaloneImport = _varRecorder__$Impor.standaloneImport;
                        source += standaloneImport + "\n\n";
                      } else {
                        bindings = _defineProperty({}, superClassName, superClass);
                      }

                    case 20:
                      if (className === superClassName) className = "Object" + className;
                      classSource = superClassName === "Object" ? "class ".concat(className, " {}\n") : "class ".concat(className, " extends ").concat(superClassName, " {}\n");
                      source += "export default ".concat(classSource, "\n");

                      if (module.isLoaded()) {
                        _context11.next = 27;
                        break;
                      }

                      _context11.next = 26;
                      return module.setSource("\"format esm\";");

                    case 26:
                      if (isAnonymousSuperclass) {
                        module.recorder[superClassName] = superClass;
                      }

                    case 27:
                      _context11.next = 29;
                      return module.changeSource(source);

                    case 29:
                      _context11.next = 31;
                      return module.load();

                    case 31:
                      return _context11.abrupt("return", {
                        source: source,
                        className: className,
                        moduleId: this.url,
                        bindings: bindings
                      });

                    case 32:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));

            function createDefaultClassDeclaration() {
              return _createDefaultClassDeclaration.apply(this, arguments);
            }

            return createDefaultClassDeclaration;
          }()
        }, {
          key: "addScript",
          value: function () {
            var _addScript = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(object, functionOrSource, name) {
              var klass, funcSource, parsedFunction, descr, methodName, args, body, methodSource, source, classDecl, existing, insertAt, before, after;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      if (!(object.constructor === this.objectClass)) {
                        _context12.next = 4;
                        break;
                      }

                      _context12.t0 = object.constructor;
                      _context12.next = 7;
                      break;

                    case 4:
                      _context12.next = 6;
                      return this.ensureObjectClass(object.constructor);

                    case 6:
                      _context12.t0 = _context12.sent;

                    case 7:
                      klass = _context12.t0;
                      funcSource = typeof functionOrSource === "function" ? String(functionOrSource) : functionOrSource;
                      parsedFunction = parseFunction(funcSource);
                      descr = RuntimeSourceDescriptor["for"](klass, this.System);
                      if (!name) name = Path("id.name").get(parsedFunction);

                      if (name) {
                        _context12.next = 14;
                        break;
                      }

                      throw new Error("No name, cannot add ".concat(truncate(funcSource, 30).replace(/\n/g, ""), "!"));

                    case 14:
                      methodName = toJsIdentifier(name);
                      console.assert(parsedFunction.type === "FunctionExpression" || parsedFunction.type === "ArrowFunctionExpression", "not a function expression but: " + parsedFunction.type);
                      args = parsedFunction.params.map(function (_ref5) {
                        var start = _ref5.start,
                            end = _ref5.end;
                        return funcSource.slice(start, end);
                      });
                      body = parsedFunction.body.type === "BlockStatement" ? funcSource.slice(parsedFunction.body.start, parsedFunction.body.end) : "{ return ".concat(funcSource.slice(parsedFunction.body.start, parsedFunction.body.end), " }");
                      methodSource = "".concat(methodName, "(").concat(args.join(","), ") ").concat(body);

                      if (parsedFunction.type === "ArrowFunctionExpression") {
                        parsedFunction.type = "FunctionExpression";
                      }

                      source = descr.source;
                      classDecl = descr.ast;

                      if (classDecl) {
                        _context12.next = 24;
                        break;
                      }

                      throw new Error("cannot find class decl of " + descr.module.id);

                    case 24:
                      existing = classDecl.body.body.find(function (method) {
                        return method.key.name === methodName && !method["static"];
                      });

                      if (existing) {
                        source = source.slice(0, existing.start) + methodSource + source.slice(existing.end);
                      } else {
                        insertAt = source.lastIndexOf("}");
                        before = source.slice(0, insertAt);
                        after = source.slice(insertAt);
                        if (!/\n\s*$/m.test(before)) before += "\n";
                        methodSource = changeIndent(methodSource, "  ", 1);
                        if (!/^[ ]*\n/m.test(after)) after = "\n" + after;
                        source = before + methodSource + after;
                      }

                      _context12.next = 28;
                      return descr.changeSource(source);

                    case 28:
                      return _context12.abrupt("return", {
                        script: klass.prototype[methodName],
                        klass: klass,
                        module: descr.module.id,
                        methodName: methodName
                      });

                    case 29:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));

            function addScript(_x11, _x12, _x13) {
              return _addScript.apply(this, arguments);
            }

            return addScript;
          }()
        }, {
          key: "objectPackage",
          get: function get() {
            return this._objectPackage;
          }
        }, {
          key: "objectClass",
          get: function get() {
            var m = this.systemModule;
            return m.isLoaded() ? m.System.get(m.id)["default"] : null;
          }
        }, {
          key: "moduleName",
          get: function get() {
            return this._moduleName;
          }
        }, {
          key: "systemModule",
          get: function get() {
            return __varRecorder__.module(this.System, this.url);
          }
        }, {
          key: "System",
          get: function get() {
            return this.objectPackage.System;
          }
        }, {
          key: "resource",
          get: function get() {
            return this.objectPackage.resource(this.moduleName);
          }
        }, {
          key: "url",
          get: function get() {
            return this.resource.url;
          }
        }]);

        return ObjectModule;
      }();

      __varRecorder__.ObjectModule = ObjectModule;
      __varRecorder__["default"] = ObjectPackage;

      var objectClasses = /*#__PURE__*/Object.freeze({
        __proto__: null,
        addScript: addScript,
        isObjectClass: isObjectClass,
        interactivelyForkPackage: interactivelyForkPackage,
        'default': ObjectPackage
      });
      exports('o', objectClasses);

    })
  };
}));
