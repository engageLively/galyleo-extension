System.register(['./__rootModule___commonjs-entry-039abf1b.js', './index-d0172adc.js'], (function (exports) {
  var __contextModule__ = typeof module !== 'undefined' ? module : arguments[1];
;
  var wrap, remove$1, _typeof, print, isObject, inspect, truncate, Path, last, pushAt, _createForOfIteratorHelper, _toConsumableArray, deepCopy, _slicedToArray, withoutAll, compact, _asyncToGenerator, arr, deferred, Closure, _createClass, _classCallCheck, uniq, emit, _inherits, _createSuper, isString, dissoc, _get, _getPrototypeOf, _defineProperty, runtime, joinPath, deepMerge, resource, values, select, pluck$1, pushIfNotIncluded, takeWhile, partition, merge, hull, invert, initializeClass, subscribe, regExpEscape, allOwnPropertiesOrFunctions, hashCode, adoptObject, registerExtension, ESMResource, Resource, exports$1, uniqBy, unsubscribe, keys, ReplaceVisitor, stringify, objectLiteral, member, parse, literal, id, sqncExpr, nodes, varDecl, exprStmt, funcCall, funcExpr, forIn, block, ifStmt, binaryExpr, assign, ReplaceManyVisitor, query, parseFunction, QueryReplaceManyVisitor, topLevelDeclsAndRefs, queryNodes, logical, transformSingleExpression, objectSpreadTransform, wrapInStartEndCall, resolveReferences, scopes, Visitor, fuzzyParse, findGlobalVarRefs, knownGlobals, imports, refWithDeclAt, nodesAtIndex, isValidIdentifier;
  return {
    setters: [function (module) {
      wrap = module.c2;
      remove$1 = module.w;
      _typeof = module.a5;
      print = module.c3;
      isObject = module.c4;
      inspect = module.aA;
      truncate = module.aj;
      Path = module.bw;
      last = module.q;
      pushAt = module.bQ;
      _createForOfIteratorHelper = module.a6;
      _toConsumableArray = module.r;
      deepCopy = module.c5;
      _slicedToArray = module.o;
      withoutAll = module.x;
      compact = module.aT;
      _asyncToGenerator = module._;
      arr = module.ba;
      deferred = module.a9;
      Closure = module.bk;
      _createClass = module.g;
      _classCallCheck = module.f;
      uniq = module.u;
      emit = module.c6;
      _inherits = module.d;
      _createSuper = module.e;
      isString = module.bv;
      dissoc = module.y;
      _get = module.bG;
      _getPrototypeOf = module.bH;
      _defineProperty = module.ah;
      runtime = module.c7;
      joinPath = module.b9;
      deepMerge = module.c8;
      resource = module.ac;
      values = module.bj;
      select = module.aW;
      pluck$1 = module.c9;
      pushIfNotIncluded = module.bP;
      takeWhile = module.ca;
      partition = module.aX;
      merge = module.bR;
      hull = module.ax;
      invert = module.aw;
      initializeClass = module.i;
      subscribe = module.bb;
      regExpEscape = module.cb;
      allOwnPropertiesOrFunctions = module.cc;
      hashCode = module.cd;
      adoptObject = module.bc;
      registerExtension = module.ai;
      ESMResource = module.ce;
      Resource = module.cf;
      exports$1 = module.cg;
      uniqBy = module.ae;
      unsubscribe = module.b6;
      keys = module.bX;
    }, function (module) {
      ReplaceVisitor = module.R;
      stringify = module.s;
      objectLiteral = module.o;
      member = module.m;
      parse = module.p;
      literal = module.l;
      id = module.i;
      sqncExpr = module.a;
      nodes = module.n;
      varDecl = module.v;
      exprStmt = module.e;
      funcCall = module.f;
      funcExpr = module.b;
      forIn = module.c;
      block = module.d;
      ifStmt = module.g;
      binaryExpr = module.h;
      assign = module.j;
      ReplaceManyVisitor = module.k;
      query = module.q;
      parseFunction = module.r;
      QueryReplaceManyVisitor = module.Q;
      topLevelDeclsAndRefs = module.t;
      queryNodes = module.u;
      logical = module.w;
      transformSingleExpression = module.x;
      objectSpreadTransform = module.y;
      wrapInStartEndCall = module.z;
      resolveReferences = module.A;
      scopes = module.B;
      Visitor = module.V;
      fuzzyParse = module.C;
      findGlobalVarRefs = module.D;
      knownGlobals = module.E;
      imports = module.F;
      refWithDeclAt = module.G;
      nodesAtIndex = module.H;
      isValidIdentifier = module.I;
    }],
    execute: (function () {

      var _missingExportShim = void 0;

      var __varRecorder__$u = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.modules/src/hooks.js", __contextModule__);

      var __moduleMeta__$n = {
        pathInPackage: function pathInPackage() {
          return "./src/hooks.js";
        },
        unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
          return function () {};
        },
        subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
          return function () {};
        },
        "package": function _package() {
          return {
            name: "lively.modules",
            version: "0.8.38"
          };
        }
      };

      var install = exports('O', __varRecorder__$u["lively.modules/src/hooks.js__define__"]("install", "function", function (System, methodName, hook) {
        var hookName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : hook.name;
        var wrapper = System[methodName] = System[methodName] ? wrap(System[methodName], hook) : hook;
        wrapper.hookFunc = hook;
        hook.hookName = hookName;
      }, __moduleMeta__$n));

      __varRecorder__$u.install = install;

      var remove = __varRecorder__$u["lively.modules/src/hooks.js__define__"]("remove", "function", function (System, methodName, hookOrName) {
        var chain = [];
        var f = System[methodName];

        while (f) {
          chain.push(f);
          f = f.originalFunction;
        }

        var found = typeof hookOrName === "string" ? chain.find(function (wrapper) {
          return wrapper.hookFunc && wrapper.hookFunc.hookName === hookOrName;
        }) : chain.find(function (wrapper) {
          return wrapper.hookFunc === hookOrName;
        });
        if (!found) return false;
        remove$1(chain, found);
        System[methodName] = chain.reduceRight(function (method, wrapper) {
          return wrap(method, wrapper.hookFunc || wrapper);
        });
        return true;
      }, __moduleMeta__$n);

      __varRecorder__$u.remove = remove;

      var isInstalled = __varRecorder__$u["lively.modules/src/hooks.js__define__"]("isInstalled", "function", function (System, methodName, hookOrName) {
        var f = System[methodName];

        while (f) {
          if (f.hookFunc) {
            if (typeof hookOrName === "string" && f.hookFunc.hookName === hookOrName) return true;else if (f.hookFunc === hookOrName) return true;
          }

          f = f.originalFunction;
        }

        return false;
      }, __moduleMeta__$n);

      __varRecorder__$u.isInstalled = isInstalled;
      __varRecorder__$u.install = install;
      __varRecorder__$u.remove = remove;
      __varRecorder__$u.isInstalled = isInstalled;

      var __varRecorder__$t = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.modules/src/cycle-breaker.js", __contextModule__);
      __varRecorder__$t.classHolder = __varRecorder__$t.classHolder || undefined;
      __varRecorder__$t.classHolder = __varRecorder__$t.classHolder || {};
      var classHolder = __varRecorder__$t.classHolder;
      __varRecorder__$t.classHolder = classHolder;

      var __varRecorder__$s = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.vm/lib/util.js", __contextModule__);

      var __moduleMeta__$m = {
        pathInPackage: function pathInPackage() {
          return "./lib/util.js";
        },
        unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
          return function () {};
        },
        subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
          return function () {};
        },
        "package": function _package() {
          return {
            name: "lively.vm",
            version: "0.9.18"
          };
        }
      };

      var getGlobal = __varRecorder__$s["lively.vm/lib/util.js__define__"]("getGlobal", "function", function () {
        if (typeof System !== "undefined") return System.global;
        if (typeof window !== "undefined") return window;
        if (typeof global !== "undefined") return global;
        if (typeof Global !== "undefined") return Global;
        if (typeof self !== "undefined") return self;
        return function () {
          return this;
        }();
      }, __moduleMeta__$m);

      __varRecorder__$s.getGlobal = getGlobal;

      var signatureOf = __varRecorder__$s["lively.vm/lib/util.js__define__"]("signatureOf", "function", function (name, func) {
        var source = String(func);
        var match = source.match(/function\s*[a-zA-Z0-9_$]*\s*\(([^\)]*)\)/);
        var params = match && match[1] || "";
        return name + "(" + params + ")";
      }, __moduleMeta__$m);

      __varRecorder__$s.signatureOf = signatureOf;

      var isClass = __varRecorder__$s["lively.vm/lib/util.js__define__"]("isClass", "function", function (obj) {
        if (obj === obj || obj === Array || obj === Function || obj === String || obj === Boolean || obj === Date || obj === RegExp || obj === Number || obj === Promise) return true;
        return obj instanceof Function && (obj.superclass !== undefined || obj._superclass !== undefined);
      }, __moduleMeta__$m);

      __varRecorder__$s.isClass = isClass;

      var pluck = __varRecorder__$s["lively.vm/lib/util.js__define__"]("pluck", "function", function (list, prop) {
        return list.map(function (ea) {
          return ea[prop];
        });
      }, __moduleMeta__$m);

      __varRecorder__$s.pluck = pluck;

      var printSymbol = __varRecorder__$s["lively.vm/lib/util.js__define__"]("printSymbol", "function", function (sym) {
        if (Symbol.keyFor(sym)) return "Symbol.for(\"".concat(Symbol.keyFor(sym), "\")");
        if (__varRecorder__$s.knownSymbols.get(sym)) return __varRecorder__$s.knownSymbols.get(sym);
        String(sym).match(__varRecorder__$s.symMatcher);
        return String(sym);
      }, __moduleMeta__$m);

      __varRecorder__$s.printSymbol = printSymbol;

      var safeToString = __varRecorder__$s["lively.vm/lib/util.js__define__"]("safeToString", "function", function (value) {
        if (!value) return String(value);
        if (Array.isArray(value)) return "[".concat(value.map(safeToString).join(","), "]");
        if (_typeof(value) === "symbol") return __varRecorder__$s.printSymbol(value);

        try {
          return String(value);
        } catch (e) {
          throw new Error("Cannot print object: ".concat(e.stack));
        }
      }, __moduleMeta__$m);

      __varRecorder__$s.safeToString = safeToString;

      var printEvalResult = __varRecorder__$s["lively.vm/lib/util.js__define__"]("printEvalResult", "function", function (evalResult) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var value = evalResult.value,
            isError = evalResult.isError,
            isPromise = evalResult.isPromise,
            promisedValue = evalResult.promisedValue,
            promiseStatus = evalResult.promiseStatus;

        if (isError || value instanceof Error) {
          var err = value;
          var stringified = String(err);
          var stack = err.stack || "";

          if (stack && err.message !== err.stack) {
            stack = String(stack);
            var errInStackIdx = stack.indexOf(stringified);

            if (errInStackIdx === 0) {
              stack = stack.slice(stringified.length);
            }

            stringified += "\n" + stack;
          }

          return stringified;
        }

        if (isPromise) {
          var status = print(promiseStatus);
          var printed = promiseStatus === "pending" ? undefined : printEvalResult({
            value: promisedValue
          }, options);
          return "Promise({status: ".concat(status, ", ").concat(value === undefined ? "" : "value: " + printed, "})");
        }

        if (value instanceof Promise) {
          return "Promise({status: \"unknown\"})";
        }

        if (options.inspect) {
          return __varRecorder__$s.printInspectEvalValue(value, options.inspectDepth || 2);
        }

        return String(value);
      }, __moduleMeta__$m);

      __varRecorder__$s.printEvalResult = printEvalResult;
      __varRecorder__$s.getGlobal = getGlobal;
      __varRecorder__$s.signatureOf = signatureOf;
      __varRecorder__$s.isClass = isClass;
      __varRecorder__$s.pluck = pluck;

      __varRecorder__$s.knownSymbols = function () {
        return Object.getOwnPropertyNames(Symbol).filter(function (ea) {
          return _typeof(Symbol[ea]) === "symbol";
        }).reduce(function (map, ea) {
          return map.set(Symbol[ea], "Symbol." + ea);
        }, new Map());
      }();

      __varRecorder__$s.symMatcher = /^Symbol\((.*)\)$/;
      __varRecorder__$s.printSymbol = printSymbol;
      __varRecorder__$s.safeToString = safeToString;
      __varRecorder__$s.printEvalResult = printEvalResult;

      __varRecorder__$s.printInspectEvalValue = function () {
        var itSym = typeof Symbol !== "undefined" && Symbol.iterator;
        var maxIterLength = 10;
        var maxStringLength = 100;
        var maxNumberOfKeys = 100;
        var maxNumberOfLines = 1000;
        return printInspect;

        function printInspect(object, maxDepth) {
          if (_typeof(maxDepth) === "object") {
            maxDepth = maxDepth.maxDepth || 2;
          }

          if (!object) return String(object);

          if (typeof object === "string") {
            var mark = object.includes("\n") ? "`" : "\"";
            object = object.split("\n").slice(0, maxNumberOfLines).join("\n");
            return mark + object + mark;
          }

          if (object instanceof Error) return object.stack || __varRecorder__$s.safeToString(object);
          if (!isObject(object)) return __varRecorder__$s.safeToString(object);

          try {
            var inspected = inspect(object, {
              customPrinter: inspectPrinter,
              maxNumberOfKeys: maxNumberOfKeys,
              maxDepth: maxDepth,
              printFunctionSource: true
            });
          } catch (e) {}

          return inspected === "{}" ? __varRecorder__$s.safeToString(object) : inspected;
        }

        function printIterable(val, ignore) {
          var isIterable = typeof val !== "string" && !Array.isArray(val) && itSym && typeof val[itSym] === "function";
          if (!isIterable) return ignore;
          var hasEntries = typeof val.entries === "function";
          var it = hasEntries ? val.entries() : val[itSym]();
          var values = [];
          var open = hasEntries ? "{" : "[";
          var close = hasEntries ? "}" : "]";
          var name = val.constructor && val.constructor.name || "Iterable";

          for (var i = 0, next; i < maxIterLength; i++) {
            next = it.next();
            if (next.done) break;
            values.push(next.value);
          }

          var printed = values.map(function (ea) {
            return hasEntries ? "".concat(String(ea[0]), ": ").concat(String(ea[1])) : printInspect(ea, 2);
          }).join(", ");
          return "".concat(name, "(").concat(open).concat(printed).concat(close, ")");
        }

        function inspectPrinter(val, ignore, continueInspectFn) {
          if (!val) return ignore;
          if (_typeof(val) === "symbol") return __varRecorder__$s.printSymbol(val);
          if (typeof val === "string") return print(truncate(val, maxStringLength));
          if (val.isMorph) return __varRecorder__$s.safeToString(val);
          if (val instanceof Promise) return "Promise()";
          if (typeof Node !== "undefined" && val instanceof Node) return __varRecorder__$s.safeToString(val);
          if (typeof ImageData !== "undefined" && val instanceof ImageData) return __varRecorder__$s.safeToString(val);
          var length = val.length || val.byteLength;

          if (length !== undefined && length > maxIterLength && val.slice) {
            var printed = typeof val === "string" || val.byteLength ? __varRecorder__$s.safeToString(val.slice(0, maxIterLength)) : val.slice(0, maxIterLength).map(continueInspectFn);
            return "[" + printed + ",...]";
          }

          var iterablePrinted = printIterable(val, ignore);
          if (iterablePrinted !== ignore) return iterablePrinted;
          return ignore;
        }
      }();

      var printInspectEvalValue = __varRecorder__$s.printInspectEvalValue;
      __varRecorder__$s.printInspectEvalValue = printInspectEvalValue;

      var __varRecorder__$r = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.vm/lib/completions.js", __contextModule__);

      var __moduleMeta__$l = {
        pathInPackage: function pathInPackage() {
          return "./lib/completions.js";
        },
        unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
          return function () {};
        },
        subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
          return function () {};
        },
        "package": function _package() {
          return {
            name: "lively.vm",
            version: "0.9.18"
          };
        }
      };

      var getObjectForCompletion = __varRecorder__$r["lively.vm/lib/completions.js__define__"]("getObjectForCompletion", "function", function (evalFunc, stringToEval) {
        var startLetters = "";
        return Promise.resolve().then(function () {
          var idx = stringToEval.lastIndexOf(".");

          if (idx >= 0) {
            startLetters = stringToEval.slice(idx + 1);
            stringToEval = stringToEval.slice(0, idx);
          } else {
            startLetters = stringToEval;
            stringToEval = "(typeof window === \"undefined\" ? global : window)";
          }

          return evalFunc(stringToEval);
        }).then(function (evalResult) {
          return {
            evalResult: evalResult,
            startLetters: startLetters,
            code: stringToEval
          };
        });
      }, __moduleMeta__$l);

      __varRecorder__$r.getObjectForCompletion = getObjectForCompletion;

      var propertyExtract = __varRecorder__$r["lively.vm/lib/completions.js__define__"]("propertyExtract", "function", function (excludes, obj, extractor) {
        return Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj).map(printSymbol)).filter(function (key) {
          return excludes.indexOf(key) === -1;
        }).map(extractor).filter(function (ea) {
          return !!ea;
        }).sort(function (a, b) {
          return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
        });
      }, __moduleMeta__$l);

      __varRecorder__$r.propertyExtract = propertyExtract;

      var getMethodsOf = __varRecorder__$r["lively.vm/lib/completions.js__define__"]("getMethodsOf", "function", function (excludes, obj) {
        return __varRecorder__$r.propertyExtract(excludes, obj, function (key) {
          if (obj.__lookupGetter__ && obj.__lookupGetter__(key) || typeof obj[key] !== "function") return null;
          return {
            name: key,
            completion: signatureOf(key, obj[key])
          };
        });
      }, __moduleMeta__$l);

      __varRecorder__$r.getMethodsOf = getMethodsOf;

      var getAttributesOf = __varRecorder__$r["lively.vm/lib/completions.js__define__"]("getAttributesOf", "function", function (excludes, obj) {
        return __varRecorder__$r.propertyExtract(excludes, obj, function (key) {
          if (obj.__lookupGetter__ && !obj.__lookupGetter__(key) && typeof obj[key] === "function") return null;
          return {
            name: key,
            completion: key
          };
        });
      }, __moduleMeta__$l);

      __varRecorder__$r.getAttributesOf = getAttributesOf;

      var getProtoChain = __varRecorder__$r["lively.vm/lib/completions.js__define__"]("getProtoChain", "function", function (obj) {
        var protos = [];

        while (obj) {
          protos.push(obj);
          obj = obj.__proto__;
        }

        return protos;
      }, __moduleMeta__$l);

      __varRecorder__$r.getProtoChain = getProtoChain;

      var getDescriptorOf = __varRecorder__$r["lively.vm/lib/completions.js__define__"]("getDescriptorOf", "function", function (originalObj, proto) {
        function shorten(s, len) {
          if (s.length > len) s = s.slice(0, len) + "...";
          return s.replace(/\n/g, "").replace(/\s+/g, " ");
        }

        if (originalObj === proto) {
          if (typeof originalObj !== "function") return shorten(safeToString(originalObj), 50);
          var funcString = originalObj.toString();
          var body = shorten(funcString.slice(funcString.indexOf("{") + 1, funcString.lastIndexOf("}")), 50);
          return signatureOf(originalObj.displayName || originalObj.name || "function", originalObj) + " {" + body + "}";
        }

        var klass = proto.hasOwnProperty("constructor") && proto.constructor;
        if (!klass) return "prototype";
        if (typeof klass.type === "string" && klass.type.length) return shorten(klass.type, 50);
        if (typeof klass.name === "string" && klass.name.length) return shorten(klass.name, 50);
        return "anonymous class";
      }, __moduleMeta__$l);

      __varRecorder__$r.getDescriptorOf = getDescriptorOf;

      var getCompletionsOfObj = __varRecorder__$r["lively.vm/lib/completions.js__define__"]("getCompletionsOfObj", "function", function (obj, thenDo) {
        var err, completions;

        try {
          var excludes = [];
          completions = __varRecorder__$r.getProtoChain(obj).map(function (proto) {
            var descr = __varRecorder__$r.getDescriptorOf(obj, proto);

            var methodsAndAttributes = __varRecorder__$r.getMethodsOf(excludes, proto).concat(__varRecorder__$r.getAttributesOf(excludes, proto));

            excludes = excludes.concat(pluck(methodsAndAttributes, "name"));
            return [descr, pluck(methodsAndAttributes, "completion")];
          });
        } catch (e) {
          err = e;
        }

        thenDo(err, completions);
      }, __moduleMeta__$l);

      __varRecorder__$r.getCompletionsOfObj = getCompletionsOfObj;

      var descriptorsOfObjAndProtoProperties = __varRecorder__$r["lively.vm/lib/completions.js__define__"]("descriptorsOfObjAndProtoProperties", "function", function (obj) {
        var excludes = [];

        var completions = __varRecorder__$r.getProtoChain(obj).map(function (proto) {
          var descr = __varRecorder__$r.getDescriptorOf(obj, proto);

          var methodsAndAttributes = __varRecorder__$r.getMethodsOf(excludes, proto).concat(__varRecorder__$r.getAttributesOf(excludes, proto));

          excludes = excludes.concat(pluck(methodsAndAttributes, "name"));
          return [descr, pluck(methodsAndAttributes, "completion")];
        });

        return completions;
      }, __moduleMeta__$l);

      __varRecorder__$r.descriptorsOfObjAndProtoProperties = descriptorsOfObjAndProtoProperties;

      var getCompletions = exports('g', __varRecorder__$r["lively.vm/lib/completions.js__define__"]("getCompletions", "function", function (evalFunc, string, thenDo) {
        var promise = __varRecorder__$r.getObjectForCompletion(evalFunc, string).then(function (evalResultAndStartLetters) {
          var evalResult = evalResultAndStartLetters.evalResult;
          var value = evalResult && evalResult.isEvalResult ? evalResult.value : evalResult;
          var result = {
            completions: __varRecorder__$r.descriptorsOfObjAndProtoProperties(value),
            startLetters: evalResultAndStartLetters.startLetters,
            code: evalResultAndStartLetters.code
          };

          if (evalResult && evalResult.isPromise) {
            if (evalResult.promiseStatus === "fulfilled") {
              result.promiseResolvedCompletions = __varRecorder__$r.descriptorsOfObjAndProtoProperties(evalResult.promisedValue);
            } else if (evalResult.promiseStatus === "rejected") {
              result.promiseRejectedCompletions = __varRecorder__$r.descriptorsOfObjAndProtoProperties(evalResult.promisedValue);
            }
          }

          return result;
        });

        if (typeof thenDo === "function") {
          promise.then(function (result) {
            return thenDo(null, result);
          })["catch"](function (err) {
            return thenDo(err);
          });
        }

        return promise;
      }, __moduleMeta__$l));

      __varRecorder__$r.getCompletions = getCompletions;
      __varRecorder__$r.getObjectForCompletion = getObjectForCompletion;
      __varRecorder__$r.getCompletions = getCompletions;

      var completions = /*#__PURE__*/Object.freeze({
        __proto__: null,
        getObjectForCompletion: getObjectForCompletion,
        getCompletions: getCompletions
      });

      var __varRecorder__$q = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.source-transform/capturing.js", __contextModule__);

      var __moduleMeta__$k = {
        pathInPackage: function pathInPackage() {
          return "./capturing.js";
        },
        unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
          return function () {};
        },
        subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
          return function () {};
        },
        "package": function _package() {
          return {
            name: "lively.source-transform",
            version: "0.1.7"
          };
        }
      };

      var removeJspmGlobalRef = __varRecorder__$q["lively.source-transform/capturing.js__define__"]("removeJspmGlobalRef", "function", function (parsed) {
        var declarationFound = false;
        return ReplaceVisitor.run(parsed, function (node) {
          if (!declarationFound && node.type === "VariableDeclarator" && node.id.name === "_global") {
            declarationFound = stringify(node) === "_global = typeof globalThis !== \"undefined\" ? globalThis : typeof self !== \"undefined\" ? self : global";
          }

          if (declarationFound && node.type === "LogicalExpression" && node.right.name === "_global") {
            return node.left;
          }

          return node;
        });
      }, __moduleMeta__$k);

      __varRecorder__$q.removeJspmGlobalRef = removeJspmGlobalRef;

      var transformImportMeta = __varRecorder__$q["lively.source-transform/capturing.js__define__"]("transformImportMeta", "function", function (parsed, options) {
        return ReplaceVisitor.run(parsed, function (node) {
          if (node.type === "MetaProperty" && node.meta.name === "import") {
            return options.classToFunction.currentModuleAccessor ? objectLiteral(["url", member(options.classToFunction.currentModuleAccessor, "id")]) : parse("({url: eval(\"typeof _context !== 'undefined' ? _context : {}\").id})").body[0].expression;
          }

          return node;
        });
      }, __moduleMeta__$k);

      __varRecorder__$q.transformImportMeta = transformImportMeta;

      var declarationWrapperCall = __varRecorder__$q["lively.source-transform/capturing.js__define__"]("declarationWrapperCall", "function", function (declarationWrapperNode, declNode, varNameLiteral, varKindLiteral, valueNode, recorder, options) {
        if (declNode) {
          var keyVals = [];
          var addMeta = false;
          var start;
          var end;
          var evalId;
          var sourceAccessorName;

          if (declNode["x-lively-object-meta"]) {
            __varRecorder__$q.__inter0__ = declNode["x-lively-object-meta"], start = __varRecorder__$q.__inter0__.start, end = __varRecorder__$q.__inter0__.end, evalId = __varRecorder__$q.__inter0__.evalId, sourceAccessorName = __varRecorder__$q.__inter0__.sourceAccessorName, __varRecorder__$q.__inter0__;
            addMeta = true;
            keyVals.push("start", literal(start), "end", literal(end));
          }

          if (evalId === undefined && options.hasOwnProperty("evalId")) {
            evalId = options.evalId;
            addMeta = true;
          }

          if (sourceAccessorName === undefined && options.hasOwnProperty("sourceAccessorName")) {
            sourceAccessorName = options.sourceAccessorName;
            addMeta = true;
          }

          if (evalId !== undefined) keyVals.push("evalId", literal(evalId));
          if (sourceAccessorName) keyVals.push("moduleSource", id(sourceAccessorName));

          if (addMeta) {
            return __varRecorder__$q.funcCall(declarationWrapperNode, varNameLiteral, varKindLiteral, valueNode, recorder, objectLiteral(keyVals));
          }
        }

        return __varRecorder__$q.funcCall(declarationWrapperNode, varNameLiteral, varKindLiteral, valueNode, recorder);
      }, __moduleMeta__$k);

      __varRecorder__$q.declarationWrapperCall = declarationWrapperCall;

      var rewriteToRegisterModuleToCaptureSetters = __varRecorder__$q["lively.source-transform/capturing.js__define__"]("rewriteToRegisterModuleToCaptureSetters", "function", function (parsed, assignToObj, options) {
        options = Object.assign({
          captureObj: assignToObj || {
            type: "Identifier",
            name: "__rec"
          },
          exclude: [],
          declarationWrapper: undefined
        }, options);
        var registerCall = Path("body.0.expression").get(parsed);

        if (registerCall.callee.object.name !== "System") {
          throw new Error("rewriteToRegisterModuleToCaptureSetters: input doesn't seem to be a System.register call: ".concat(stringify(parsed).slice(0, 300), "..."));
        }

        if (registerCall.callee.property.name !== "register") {
          throw new Error("rewriteToRegisterModuleToCaptureSetters: input doesn't seem to be a System.register call: ".concat(stringify(parsed).slice(0, 300), "..."));
        }

        var registerBody = Path("arguments.1.body.body").get(registerCall);
        var registerReturn = last(registerBody);

        if (registerReturn.type !== "ReturnStatement") {
          throw new Error("rewriteToRegisterModuleToCaptureSetters: input doesn't seem to be a System.register call, at return statement: ".concat(stringify(parsed).slice(0, 300), "..."));
        }

        var setters = registerReturn.argument.properties.find(function (prop) {
          return prop.key.name === "setters";
        });

        if (!setters) {
          throw new Error("rewriteToRegisterModuleToCaptureSetters: input doesn't seem to be a System.register call, at finding setters: ".concat(stringify(parsed).slice(0, 300), "..."));
        }

        var execute = registerReturn.argument.properties.find(function (prop) {
          return prop.key.name === "execute";
        });

        if (!execute) {
          throw new Error("rewriteToRegisterModuleToCaptureSetters: input doesn't seem to be a System.register call, at finding execute: ".concat(stringify(parsed).slice(0, 300), "..."));
        }

        setters.value.elements.forEach(function (funcExpr) {
          funcExpr.params[0] = __varRecorder__$q.assign(funcExpr.params[0], objectLiteral({}));
          funcExpr.body.body = funcExpr.body.body.map(function (stmt) {
            if (stmt.type !== "ExpressionStatement" || stmt.expression.type !== "AssignmentExpression" || stmt.expression.left.type !== "Identifier" || options.exclude.includes(stmt.expression.left.name)) return stmt;
            var id = stmt.expression.left;
            var rhs = options.declarationWrapper ? __varRecorder__$q.declarationWrapperCall(options.declarationWrapper, null, __varRecorder__$q.literal(id.name), __varRecorder__$q.literal("var"), stmt.expression, options.captureObj, options) : stmt.expression;
            return __varRecorder__$q.exprStmt(__varRecorder__$q.assign(__varRecorder__$q.member(options.captureObj, id), rhs));
          });
        });
        var captureInitialize = execute.value.body.body.find(function (stmt) {
          return stmt.type === "ExpressionStatement" && stmt.expression.type === "AssignmentExpression" && stmt.expression.left.name === options.captureObj.name;
        });

        if (!captureInitialize) {
          captureInitialize = execute.value.body.body.find(function (stmt) {
            return stmt.type === "VariableDeclaration" && stmt.declarations[0].id && stmt.declarations[0].id.name === options.captureObj.name;
          });
        }

        if (captureInitialize) {
          remove$1(execute.value.body.body, captureInitialize);
          pushAt(registerBody, captureInitialize, registerBody.length - 1);
        }

        if (options.sourceAccessorName) {
          var origSourceInitialize = execute.value.body.body.find(function (stmt) {
            return stmt.type === "ExpressionStatement" && stmt.expression.type === "AssignmentExpression" && stmt.expression.left.name === options.sourceAccessorName;
          });

          if (!origSourceInitialize) {
            origSourceInitialize = execute.value.body.body.find(function (stmt) {
              return stmt.type === "VariableDeclaration" && stmt.declarations[0].id && stmt.declarations[0].id.name === options.sourceAccessorName;
            });
          }

          if (origSourceInitialize) {
            remove$1(execute.value.body.body, origSourceInitialize);
            pushAt(registerBody, origSourceInitialize, registerBody.length - 1);
          }
        }

        return parsed;
      }, __moduleMeta__$k);

      __varRecorder__$q.rewriteToRegisterModuleToCaptureSetters = rewriteToRegisterModuleToCaptureSetters;

      var clearEmptyExports = __varRecorder__$q["lively.source-transform/capturing.js__define__"]("clearEmptyExports", "function", function (parsed) {
        var topLevel = __varRecorder__$q.topLevelDeclsAndRefs(parsed);

        var _iterator = _createForOfIteratorHelper(topLevel.scope.exportDecls),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var exp = _step.value;

            if (!exp.declaration && exp.specifiers && !exp.specifiers.length) {
              remove$1(parsed.body, exp);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return parsed;
      }, __moduleMeta__$k);

      __varRecorder__$q.clearEmptyExports = clearEmptyExports;

      var shouldDeclBeCaptured = __varRecorder__$q["lively.source-transform/capturing.js__define__"]("shouldDeclBeCaptured", "function", function (decl, options) {
        return options.excludeDecls.indexOf(decl.id.name) === -1 && options.excludeDecls.indexOf(decl.id) === -1 && (!options.includeDecls || options.includeDecls.indexOf(decl.id.name) > -1);
      }, __moduleMeta__$k);

      __varRecorder__$q.shouldDeclBeCaptured = shouldDeclBeCaptured;

      var shouldRefBeCaptured = __varRecorder__$q["lively.source-transform/capturing.js__define__"]("shouldRefBeCaptured", "function", function (ref, toplevel, options) {
        var _ref$object;

        if (toplevel.scope.importSpecifiers.includes(ref)) return false;

        for (var i = 0; i < toplevel.scope.exportDecls.length; i++) {
          var ea = toplevel.scope.exportDecls[i];
          if (ea.declarations && ea.declarations.includes(ref)) return false;
          if (ea.declaration === ref) return false;
        }

        if (options.excludeRefs.includes((_ref$object = ref.object) === null || _ref$object === void 0 ? void 0 : _ref$object.name)) return false;
        if (options.excludeRefs.includes(ref.name)) return false;
        if (options.includeRefs && !options.includeRefs.includes(ref.name)) return false;
        return true;
      }, __moduleMeta__$k);

      __varRecorder__$q.shouldRefBeCaptured = shouldRefBeCaptured;

      var replaceRefs = __varRecorder__$q["lively.source-transform/capturing.js__define__"]("replaceRefs", "function", function (parsed, options) {
        var topLevel = __varRecorder__$q.topLevelDeclsAndRefs(parsed);

        var refsToReplace = topLevel.refs.filter(function (ref) {
          return __varRecorder__$q.shouldRefBeCaptured(ref, topLevel, options);
        });
        var locallyIgnored = [];
        var intermediateCounter = 0;
        var replaced = ReplaceVisitor.run(parsed, function (node) {
          if (node.type === "Property" && refsToReplace.includes(node.key) && node.shorthand) {
            return __varRecorder__$q.prop(__varRecorder__$q.id(node.key.name), node.value);
          }

          if (node.type === "MethodDefinition" && node.computed) {
            var key = node.key;

            if (refsToReplace.includes(key)) {
              if (key.type === "MemberExpression") {
                var newNode = Object.assign({}, node, {
                  key: Object.assign({}, key)
                });
                var curr = newNode.key;

                while (((_curr$object = curr.object) === null || _curr$object === void 0 ? void 0 : _curr$object.type) === "MemberExpression") {
                  var _curr$object;

                  curr.object = Object.assign({}, curr.object);
                  curr = curr.object;
                }

                curr.object = __varRecorder__$q.member(options.captureObj, curr.object);
                return newNode;
              }
            }
          }

          if (node.type === "ExportNamedDeclaration") {
            var declaration = node.declaration,
                specifiers = node.specifiers;

            if (declaration) {
              if (declaration.id) locallyIgnored.push(declaration.id);else if (declaration.declarations) {
                locallyIgnored.push.apply(locallyIgnored, _toConsumableArray(declaration.declarations.map(function (_ref) {
                  var id = _ref.id;
                  return id;
                })));
              }
            }

            specifiers && specifiers.forEach(function (_ref2) {
              var local = _ref2.local;
              return locallyIgnored.push(local);
            });
            return node;
          }

          if (node.type === "AssignmentExpression" && refsToReplace.includes(node.left) && options.declarationWrapper) {
            return Object.assign({}, node, {
              right: __varRecorder__$q.declarationWrapperCall(options.declarationWrapper, null, __varRecorder__$q.literal(node.left.name), __varRecorder__$q.literal("assignment"), node.right, options.captureObj, options)
            });
          }

          if (node.type === "AssignmentExpression" && node.left.type === "ObjectPattern") {
            var intermediate = __varRecorder__$q.id("__inter".concat(intermediateCounter++, "__"));

            return sqncExpr.apply(nodes, [__varRecorder__$q.assign(__varRecorder__$q.member(options.captureObj, intermediate), node.right)].concat(_toConsumableArray(node.left.properties.map(function (prop) {
              if (prop.type === "RestElement") {
                return __varRecorder__$q.assign(prop.argument.name, __varRecorder__$q.member(options.captureObj, intermediate));
              }

              var key = prop.value || prop.key;
              return __varRecorder__$q.assign(key, __varRecorder__$q.member(__varRecorder__$q.member(options.captureObj, intermediate), prop.key));
            })), [__varRecorder__$q.member(options.captureObj, intermediate)]));
          }

          return node;
        });
        return ReplaceVisitor.run(replaced, function (node) {
          return refsToReplace.includes(node) && !locallyIgnored.includes(node) ? __varRecorder__$q.member(options.captureObj, node) : node;
        });
      }, __moduleMeta__$k);

      __varRecorder__$q.replaceRefs = replaceRefs;

      var generateUniqueName = __varRecorder__$q["lively.source-transform/capturing.js__define__"]("generateUniqueName", "function", function (declaredNames, hint) {
        var unique = hint;
        var n = 1;

        while (declaredNames.indexOf(unique) > -1) {
          if (n > 1000) throw new Error("Endless loop searching for unique variable " + unique);
          unique = unique.replace(/_[0-9]+$|$/, "_" + ++n);
        }

        return unique;
      }, __moduleMeta__$k);

      __varRecorder__$q.generateUniqueName = generateUniqueName;

      var varDeclOrAssignment = __varRecorder__$q["lively.source-transform/capturing.js__define__"]("varDeclOrAssignment", "function", function (parsed, declarator, kind) {
        var topLevel = __varRecorder__$q.topLevelDeclsAndRefs(parsed);

        var name = declarator.id.name;
        return topLevel.declaredNames.indexOf(name) > -1 ? __varRecorder__$q.exprStmt(__varRecorder__$q.assign(declarator.id, declarator.init)) : {
          declarations: [declarator],
          kind: kind || "var",
          type: "VariableDeclaration"
        };
      }, __moduleMeta__$k);

      __varRecorder__$q.varDeclOrAssignment = varDeclOrAssignment;

      var assignExpr = __varRecorder__$q["lively.source-transform/capturing.js__define__"]("assignExpr", "function", function (assignee, propId, value, computed) {
        return __varRecorder__$q.exprStmt(__varRecorder__$q.assign(__varRecorder__$q.member(assignee, propId, computed), value || __varRecorder__$q.id("undefined")));
      }, __moduleMeta__$k);

      __varRecorder__$q.assignExpr = assignExpr;

      var importCall = __varRecorder__$q["lively.source-transform/capturing.js__define__"]("importCall", "function", function (imported, moduleSource, moduleImportFunc) {
        if (typeof imported === "string") imported = __varRecorder__$q.literal(imported);
        return {
          arguments: [moduleSource].concat(imported || []),
          callee: moduleImportFunc,
          type: "CallExpression"
        };
      }, __moduleMeta__$k);

      __varRecorder__$q.importCall = importCall;

      var varDeclAndImportCall = __varRecorder__$q["lively.source-transform/capturing.js__define__"]("varDeclAndImportCall", "function", function (parsed, localId, imported, moduleSource, moduleImportFunc) {
        return __varRecorder__$q.varDecl(localId, __varRecorder__$q.importCall(imported, moduleSource, moduleImportFunc));
      }, __moduleMeta__$k);

      __varRecorder__$q.varDeclAndImportCall = varDeclAndImportCall;

      var importCallStmt = __varRecorder__$q["lively.source-transform/capturing.js__define__"]("importCallStmt", "function", function (imported, moduleSource, moduleImportFunc) {
        return __varRecorder__$q.exprStmt(__varRecorder__$q.importCall(imported, moduleSource, moduleImportFunc));
      }, __moduleMeta__$k);

      __varRecorder__$q.importCallStmt = importCallStmt;

      var exportCall = __varRecorder__$q["lively.source-transform/capturing.js__define__"]("exportCall", "function", function (exportFunc, local, exportedObj) {
        if (typeof local === "string") local = __varRecorder__$q.literal(local);
        exportedObj = deepCopy(exportedObj);
        return __varRecorder__$q.funcCall(exportFunc, local, exportedObj);
      }, __moduleMeta__$k);

      __varRecorder__$q.exportCall = exportCall;

      var exportFromImport = __varRecorder__$q["lively.source-transform/capturing.js__define__"]("exportFromImport", "function", function (keyLeft, keyRight, moduleId, moduleExportFunc, moduleImportFunc) {
        return __varRecorder__$q.exportCall(moduleExportFunc, keyLeft, __varRecorder__$q.importCall(keyRight, moduleId, moduleImportFunc));
      }, __moduleMeta__$k);

      __varRecorder__$q.exportFromImport = exportFromImport;

      var exportCallStmt = __varRecorder__$q["lively.source-transform/capturing.js__define__"]("exportCallStmt", "function", function (exportFunc, local, exportedObj) {
        return __varRecorder__$q.exprStmt(__varRecorder__$q.exportCall(exportFunc, local, exportedObj));
      }, __moduleMeta__$k);

      __varRecorder__$q.exportCallStmt = exportCallStmt;

      var transformArrayPattern = __varRecorder__$q["lively.source-transform/capturing.js__define__"]("transformArrayPattern", "function", function (pattern, transformState) {
        var declaredNames = transformState.declaredNames;
        var p = __varRecorder__$q.annotationSym;
        var transformed = [];

        for (var i = 0; i < pattern.elements.length; i++) {
          var el = pattern.elements[i];

          if (el.type === "Identifier") {
            var decl = __varRecorder__$q.varDecl(el, __varRecorder__$q.member(transformState.parent, __varRecorder__$q.id(i), true));

            decl[p] = {
              capture: true
            };
            transformed.push(decl);
          } else if (el.type === "RestElement") {
            var _decl = __varRecorder__$q.varDecl(el.argument, {
              type: "CallExpression",
              arguments: [{
                type: "Literal",
                value: i
              }],
              callee: __varRecorder__$q.member(transformState.parent, __varRecorder__$q.id("slice"), false)
            });

            _decl[p] = {
              capture: true
            };
            transformed.push(_decl);
          } else if (el.type === "AssignmentPattern") {
            var _decl2 = __varRecorder__$q.varDecl(el.left, __varRecorder__$q.conditional(__varRecorder__$q.binaryExpr(__varRecorder__$q.member(transformState.parent, __varRecorder__$q.id(i), true), "===", __varRecorder__$q.id("undefined")), el.right, __varRecorder__$q.member(transformState.parent, __varRecorder__$q.id(i), true)));

            _decl2[p] = {
              capture: true
            };
            transformed.push(_decl2);
          } else {
            var helperVarId = __varRecorder__$q.id(__varRecorder__$q.generateUniqueName(declaredNames, transformState.parent.name + "$" + i));

            var helperVar = __varRecorder__$q.varDecl(helperVarId, __varRecorder__$q.member(transformState.parent, i));

            declaredNames.push(helperVarId.name);
            transformed.push(helperVar);
            transformed.push.apply(transformed, _toConsumableArray(__varRecorder__$q.transformPattern(el, {
              parent: helperVarId,
              declaredNames: declaredNames
            })));
          }
        }

        return transformed;
      }, __moduleMeta__$k);

      __varRecorder__$q.transformArrayPattern = transformArrayPattern;

      var transformObjectPattern = __varRecorder__$q["lively.source-transform/capturing.js__define__"]("transformObjectPattern", "function", function (pattern, transformState) {
        var declaredNames = transformState.declaredNames;
        var p = __varRecorder__$q.annotationSym;
        var transformed = [];

        for (var i = 0; i < pattern.properties.length; i++) {
          var prop = pattern.properties[i];

          if (prop.type === "RestElement") {
            var knownKeys = pattern.properties.map(function (ea) {
              return ea.key && ea.key.name;
            }).filter(Boolean);
            var decl = varDecl(prop.argument.name, objectLiteral([]));
            var captureDecl = varDecl(prop.argument.name, __varRecorder__$q.id(prop.argument.name));
            var defCall = exprStmt(funcCall(funcExpr({}, [], forIn("__key", transformState.parent, block.apply(nodes, _toConsumableArray(knownKeys.length ? knownKeys.map(function (knownKey) {
              return ifStmt(binaryExpr(id("__key"), "===", literal(knownKey)), {
                type: "ContinueStatement",
                label: null
              }, null);
            }) : []).concat([exprStmt(assign(member(prop.argument.name, id("__key"), true), member(transformState.parent, id("__key"), true)))]))))));
            captureDecl[p] = {
              capture: true
            };
            transformed.push(decl, captureDecl, defCall);
          } else if (prop.value.type === "Identifier") {
            var _decl3 = __varRecorder__$q.varDecl(prop.value, __varRecorder__$q.member(transformState.parent, prop.key));

            _decl3[p] = {
              capture: true
            };
            transformed.push(_decl3);
          } else if (prop.value.type === "AssignmentPattern") {
            var _decl4 = __varRecorder__$q.varDecl(prop.value.left, __varRecorder__$q.conditional(__varRecorder__$q.binaryExpr(__varRecorder__$q.member(transformState.parent, prop.key), "===", __varRecorder__$q.id("undefined")), prop.value.right, __varRecorder__$q.member(transformState.parent, prop.key)));

            _decl4[p] = {
              capture: true
            };
            transformed.push(_decl4);
          } else {
            var helperVarId = __varRecorder__$q.id(__varRecorder__$q.generateUniqueName(declaredNames, transformState.parent.name + "$" + prop.key.name));

            var helperVar = __varRecorder__$q.varDecl(helperVarId, __varRecorder__$q.member(transformState.parent, prop.key));

            helperVar[p] = {
              capture: false
            };
            declaredNames.push(helperVarId.name);
            transformed.push.apply(transformed, _toConsumableArray([helperVar].concat(__varRecorder__$q.transformPattern(prop.value, {
              parent: helperVarId,
              declaredNames: declaredNames
            }))));
          }
        }

        return transformed;
      }, __moduleMeta__$k);

      __varRecorder__$q.transformObjectPattern = transformObjectPattern;

      var transformPattern = __varRecorder__$q["lively.source-transform/capturing.js__define__"]("transformPattern", "function", function (pattern, transformState) {
        return pattern.type === "ArrayPattern" ? __varRecorder__$q.transformArrayPattern(pattern, transformState) : pattern.type === "ObjectPattern" ? __varRecorder__$q.transformObjectPattern(pattern, transformState) : [];
      }, __moduleMeta__$k);

      __varRecorder__$q.transformPattern = transformPattern;

      var replaceVarDecls = __varRecorder__$q["lively.source-transform/capturing.js__define__"]("replaceVarDecls", "function", function (parsed, options) {
        var topLevel = __varRecorder__$q.topLevelDeclsAndRefs(parsed);

        return ReplaceManyVisitor.run(parsed, function (node) {
          if (!topLevel.varDecls.includes(node) || node.declarations.every(function (decl) {
            return !__varRecorder__$q.shouldDeclBeCaptured(decl, options);
          })) return node;
          var replaced = [];

          for (var i = 0; i < node.declarations.length; i++) {
            var decl = node.declarations[i];

            if (!__varRecorder__$q.shouldDeclBeCaptured(decl, options)) {
              replaced.push({
                type: "VariableDeclaration",
                kind: node.kind || "var",
                declarations: [decl]
              });
              continue;
            }

            var init = decl.init || {
              operator: "||",
              type: "LogicalExpression",
              left: {
                computed: false,
                object: options.captureObj,
                property: decl.id,
                type: "MemberExpression"
              },
              right: {
                name: "undefined",
                type: "Identifier"
              }
            };
            var initWrapped = options.declarationWrapper && decl.id.name ? __varRecorder__$q.declarationWrapperCall(options.declarationWrapper, decl, __varRecorder__$q.literal(decl.id.name), __varRecorder__$q.literal(node.kind), init, options.captureObj, options) : init;

            if (decl.id.type.includes("Pattern")) {
              var declRootName = __varRecorder__$q.generateUniqueName(topLevel.declaredNames, "destructured_1");

              var declRoot = {
                type: "Identifier",
                name: declRootName
              };
              var state = {
                parent: declRoot,
                declaredNames: topLevel.declaredNames
              };

              var extractions = __varRecorder__$q.transformPattern(decl.id, state).map(function (decl) {
                return decl[__varRecorder__$q.annotationSym] && decl[__varRecorder__$q.annotationSym].capture ? __varRecorder__$q.assignExpr(options.captureObj, decl.declarations[0].id, options.declarationWrapper ? __varRecorder__$q.declarationWrapperCall(options.declarationWrapper, null, __varRecorder__$q.literal(decl.declarations[0].id.name), __varRecorder__$q.literal(node.kind), decl.declarations[0].init, options.captureObj, options) : decl.declarations[0].init, false) : decl;
              });

              topLevel.declaredNames.push(declRootName);
              replaced.push.apply(replaced, _toConsumableArray([__varRecorder__$q.varDecl(declRoot, initWrapped, node.kind)].concat(extractions)));
              continue;
            }

            replaced.push(__varRecorder__$q.assignExpr(options.captureObj, decl.id, initWrapped, false));

            if (options.keepTopLevelVarDecls) {
              replaced.push(__varRecorder__$q.varDecl(decl.id, __varRecorder__$q.member(options.captureObj, decl.id)));
            }
          }

          return replaced;
        });
      }, __moduleMeta__$k);

      __varRecorder__$q.replaceVarDecls = replaceVarDecls;

      var additionalIgnoredDecls = __varRecorder__$q["lively.source-transform/capturing.js__define__"]("additionalIgnoredDecls", "function", function (parsed) {
        var topLevel = __varRecorder__$q.topLevelDeclsAndRefs(parsed);

        var ignoreDecls = [];

        for (var i = 0; i < topLevel.scope.varDecls.length; i++) {
          var decl = topLevel.scope.varDecls[i];
          var path = Path(topLevel.scope.varDeclPaths[i]);
          var parent = path.slice(0, -1).get(parsed);
          if (parent.type === "ForStatement" || parent.type === "ForInStatement" || parent.type === "ForOfStatement" || parent.type === "ExportNamedDeclaration") ignoreDecls.push.apply(ignoreDecls, _toConsumableArray(decl.declarations));
        }

        return topLevel.scope.catches.map(function (ea) {
          return ea.name;
        }).concat(ignoreDecls.map(function (ea) {
          if (ea.id.type === "ArrayPattern") return ea.id;else if (ea.id.type === "ObjectPattern") return ea.id;
          return ea.id.name;
        }).flat());
      }, __moduleMeta__$k);

      __varRecorder__$q.additionalIgnoredDecls = additionalIgnoredDecls;

      var additionalIgnoredRefs = __varRecorder__$q["lively.source-transform/capturing.js__define__"]("additionalIgnoredRefs", "function", function (parsed, options) {
        var topLevel = __varRecorder__$q.topLevelDeclsAndRefs(parsed);

        var ignoreDecls = [];

        for (var i = 0; i < topLevel.scope.varDecls.length; i++) {
          var decl = topLevel.scope.varDecls[i];
          var path = Path(topLevel.scope.varDeclPaths[i]);
          var parent = path.slice(0, -1).get(parsed);
          if (parent.type === "ForStatement" || parent.type === "ForInStatement" || parent.type === "ForOfStatement") ignoreDecls.push.apply(ignoreDecls, _toConsumableArray(decl.declarations));
        }

        return topLevel.scope.catches.map(function (ea) {
          return ea.name;
        }).concat(__varRecorder__$q.queryHelpers.declIds(ignoreDecls.map(function (ea) {
          return ea.id || ea.name;
        })).concat(options.captureImports ? [] : topLevel.scope.importSpecifiers).map(function (ea) {
          return ea.name;
        }));
      }, __moduleMeta__$k);

      __varRecorder__$q.additionalIgnoredRefs = additionalIgnoredRefs;

      var replaceClassDecls = __varRecorder__$q["lively.source-transform/capturing.js__define__"]("replaceClassDecls", "function", function (parsed, options) {
        if (options.classToFunction && options.classToFunction.transform) {
          return options.classToFunction.transform(parsed, Object.assign({}, options.classToFunction, {
            captureObj: options.captureObj
          }));
        }

        var topLevel = __varRecorder__$q.topLevelDeclsAndRefs(parsed);

        if (!topLevel.classDecls.length) return parsed;

        for (var i = parsed.body.length - 1; i >= 0; i--) {
          var stmt = parsed.body[i];

          if (stmt.id && topLevel.classDecls.includes(stmt)) {
            parsed.body.splice(i + 1, 0, __varRecorder__$q.assignExpr(options.captureObj, stmt.id, stmt.id, false));
          }
        }

        return parsed;
      }, __moduleMeta__$k);

      __varRecorder__$q.replaceClassDecls = replaceClassDecls;

      var splitExportDeclarations = __varRecorder__$q["lively.source-transform/capturing.js__define__"]("splitExportDeclarations", "function", function (parsed) {
        var stmts = parsed.body;
        var newNodes = parsed.body = [];

        for (var i = 0; i < stmts.length; i++) {
          var stmt = stmts[i];

          if (stmt.type !== "ExportNamedDeclaration" || !stmt.declaration || stmt.declaration.type !== "VariableDeclaration" || stmt.declaration.declarations.length <= 1) {
            newNodes.push(stmt);
            continue;
          }

          var decls = stmt.declaration.declarations;

          for (var j = 0; j < decls.length; j++) {
            newNodes.push({
              type: "ExportNamedDeclaration",
              specifiers: [],
              declaration: __varRecorder__$q.varDecl(decls[j].id, decls[j].init, stmt.declaration.kind)
            });
          }
        }

        return parsed;
      }, __moduleMeta__$k);

      __varRecorder__$q.splitExportDeclarations = splitExportDeclarations;

      var insertCapturesForExportedImports = exports('v', __varRecorder__$q["lively.source-transform/capturing.js__define__"]("insertCapturesForExportedImports", "function", function (parsed, options) {
        var recorder = stringify(options.captureObj);
        var captureId = 0;
        parsed.body = parsed.body.reduce(function (stmts, stmt) {
          var nodes = [stmt];
          var sourceImport = "";
          var sourceExport = false;

          if (stmt.type === "ExportNamedDeclaration") {
            var decls;

            if (stmt.source) {
              decls = stmt.specifiers.map(function (specifier) {
                return [specifier.local.name, specifier.exported.name];
              });
              sourceImport = "import { ".concat(decls.map(function (_ref3) {
                var _ref4 = _slicedToArray(_ref3, 2),
                    local = _ref4[0],
                    imp = _ref4[1];

                return local === imp ? imp : "".concat(local, " as ").concat(imp);
              }).join(","), " } from ").concat(stmt.source.raw, ";\n");
              sourceExport = "export { ".concat(decls.map(function (_ref5) {
                var _ref6 = _slicedToArray(_ref5, 2);
                    _ref6[0];
                    var imp = _ref6[1];

                return imp;
              }).join(","), " };\n");
            } else if (stmt.declaration) {
              decls = stmt.declaration.declarations || [];
              decls = decls.map(function (decl) {
                return [decl.id.name, decl.id.name];
              });
            } else {
              decls = stmt.specifiers.map(function (specifier) {
                return [specifier.exported.name, specifier.local.name];
              });
            }

            if (sourceExport) {
              nodes = [];
              sourceImport += sourceExport;
            }

            nodes = nodes.concat(parse(sourceImport + decls.map(function (_ref7) {
              var _ref8 = _slicedToArray(_ref7, 2),
                  exp = _ref8[0],
                  imp = _ref8[1];

              if (exp === "default") return "".concat(recorder, ".").concat(exp, " = ").concat(imp, ";\n") + (imp !== exp ? "".concat(recorder, ".").concat(imp, " = ").concat(imp, ";\n") : "");
              return "".concat(recorder, ".").concat(imp, " = ").concat(imp, ";\n");
            }).join("\n")));
          }

          if (stmt.type === "ExportAllDeclaration") {
            captureId++;
            nodes = nodes.concat(parse("\n       import * as __captured".concat(captureId, "__ from ").concat(stmt.source.raw, ";\n       Object.assign(").concat(recorder, ", __captured").concat(captureId, "__);\n      ")));
          }

          return stmts.concat(nodes);
        }, []);
        return parsed;
      }, __moduleMeta__$k));

      __varRecorder__$q.insertCapturesForExportedImports = insertCapturesForExportedImports;

      var insertCapturesForExportDeclarations = __varRecorder__$q["lively.source-transform/capturing.js__define__"]("insertCapturesForExportDeclarations", "function", function (parsed, options) {
        var body = [];

        for (var i = 0; i < parsed.body.length; i++) {
          var stmt = parsed.body[i];
          body.push(stmt);

          if (stmt.type !== "ExportNamedDeclaration" && stmt.type !== "ExportDefaultDeclaration" || !stmt.declaration) ; else if (stmt.type === "ExportDefaultDeclaration" && stmt.declaration.type === "Literal") {
            var decl = stmt.declaration;

            var refId = __varRecorder__$q.generateUniqueName(__varRecorder__$q.topLevelDeclsAndRefs(parsed).declaredNames, "$" + decl.raw.split("\"").join(""));

            stmt.declaration = __varRecorder__$q.id(refId);
            pushAt(body, __varRecorder__$q.assignExpr(options.captureObj, refId, decl.raw, false), body.indexOf(stmt));
          } else if (stmt.declaration.declarations) {
            body.push.apply(body, _toConsumableArray(stmt.declaration.declarations.map(function (decl) {
              var assignVal = decl.id;

              if (options.declarationWrapper) {
                var alreadyWrapped = decl.init.callee && decl.init.callee.name === options.declarationWrapper.name;

                if (!alreadyWrapped) {
                  assignVal = __varRecorder__$q.declarationWrapperCall(options.declarationWrapper, decl, __varRecorder__$q.literal(decl.id.name), __varRecorder__$q.literal("assignment"), decl.id, options.captureObj, options);
                }
              }

              return __varRecorder__$q.assignExpr(options.captureObj, decl.id, assignVal, false);
            })));
          } else if (stmt.declaration.type === "FunctionDeclaration") ; else if (stmt.declaration.type === "ClassDeclaration") {
            body.push(__varRecorder__$q.assignExpr(options.captureObj, stmt.declaration.id, stmt.declaration.id, false));
          }
        }

        parsed.body = body;
        return parsed;
      }, __moduleMeta__$k);

      __varRecorder__$q.insertCapturesForExportDeclarations = insertCapturesForExportDeclarations;

      var insertCapturesForImportDeclarations = __varRecorder__$q["lively.source-transform/capturing.js__define__"]("insertCapturesForImportDeclarations", "function", function (parsed, options) {
        parsed.body = parsed.body.reduce(function (stmts, stmt) {
          return stmts.concat(stmt.type !== "ImportDeclaration" || !stmt.specifiers.length ? [stmt] : [stmt].concat(stmt.specifiers.map(function (specifier) {
            return __varRecorder__$q.assignExpr(options.captureObj, specifier.local, specifier.local, false);
          })));
        }, []);
        return parsed;
      }, __moduleMeta__$k);

      __varRecorder__$q.insertCapturesForImportDeclarations = insertCapturesForImportDeclarations;

      var insertCapturesForFunctionDeclarations = exports('w', __varRecorder__$q["lively.source-transform/capturing.js__define__"]("insertCapturesForFunctionDeclarations", "function", function (parsed, options) {
        var body = [];
        var moduleMetaVar = "__moduleMeta__";
        if (!options.currentModuleAccessor) throw new Error("No module accessor provided for function declaration capture");
        body.push(__varRecorder__$q.varDecl(moduleMetaVar, options.currentModuleAccessor, "let"));

        for (var i = 0; i < parsed.body.length; i++) {
          var stmt = parsed.body[i];

          if (stmt.type === "FunctionDeclaration") {
            var anonymousFn = Object.assign({}, stmt, {
              id: null
            });
            body.push(__varRecorder__$q.varDecl(__varRecorder__$q.id(stmt.id.name), __varRecorder__$q.funcCall(options.declarationWrapper, __varRecorder__$q.literal(stmt.id.name), __varRecorder__$q.literal("function"), anonymousFn, __varRecorder__$q.id(moduleMetaVar)), "let"));
            continue;
          }

          body.push(stmt);
        }

        parsed.body = body;
        return parsed;
      }, __moduleMeta__$k));

      __varRecorder__$q.insertCapturesForFunctionDeclarations = insertCapturesForFunctionDeclarations;

      var insertDeclarationsForExports = __varRecorder__$q["lively.source-transform/capturing.js__define__"]("insertDeclarationsForExports", "function", function (parsed, options) {
        var topLevel = __varRecorder__$q.topLevelDeclsAndRefs(parsed);

        var body = [];

        for (var i = 0; i < parsed.body.length; i++) {
          var stmt = parsed.body[i];

          if (stmt.type === "ExportDefaultDeclaration" && stmt.declaration && !stmt.declaration.type.includes("Declaration") && (stmt.declaration.type === "Identifier" || stmt.declaration.id) && !topLevel.declaredNames.includes(stmt.declaration.name)) {
            body = body.concat([__varRecorder__$q.varDeclOrAssignment(parsed, {
              type: "VariableDeclarator",
              id: stmt.declaration,
              init: __varRecorder__$q.member(options.captureObj, stmt.declaration)
            }), stmt]);
          } else if (stmt.type !== "ExportNamedDeclaration" || !stmt.specifiers.length || stmt.source) {
            body.push(stmt);
          } else {
            body = body.concat(stmt.specifiers.map(function (specifier) {
              return topLevel.declaredNames.includes(specifier.local.name) ? null : __varRecorder__$q.varDeclOrAssignment(parsed, {
                type: "VariableDeclarator",
                id: specifier.local,
                init: __varRecorder__$q.member(options.captureObj, specifier.local)
              });
            }).filter(Boolean)).concat(stmt);
          }
        }

        parsed.body = body;
        return parsed;
      }, __moduleMeta__$k);

      __varRecorder__$q.insertDeclarationsForExports = insertDeclarationsForExports;

      var fixDefaultAsyncFunctionExportForRegeneratorBug = __varRecorder__$q["lively.source-transform/capturing.js__define__"]("fixDefaultAsyncFunctionExportForRegeneratorBug", "function", function (parsed) {
        var body = [];

        for (var i = 0; i < parsed.body.length; i++) {
          var stmt = parsed.body[i];

          if (stmt.type === "ExportDefaultDeclaration" && stmt.declaration.type === "FunctionDeclaration" && stmt.declaration.id && stmt.declaration.async) {
            body.push(stmt.declaration);
            stmt.declaration = {
              type: "Identifier",
              name: stmt.declaration.id.name
            };
          }

          body.push(stmt);
        }

        parsed.body = body;
        return parsed;
      }, __moduleMeta__$k);

      __varRecorder__$q.fixDefaultAsyncFunctionExportForRegeneratorBug = fixDefaultAsyncFunctionExportForRegeneratorBug;

      var es6ModuleTransforms = __varRecorder__$q["lively.source-transform/capturing.js__define__"]("es6ModuleTransforms", "function", function (parsed, options) {
        var moduleId;
        parsed.body = parsed.body.reduce(function (stmts, stmt) {
          var nodes;

          if (stmt.type === "ExportNamedDeclaration") {
            if (stmt.source) {
              moduleId = stmt.source;
              nodes = stmt.specifiers.map(function (specifier) {
                return {
                  type: "ExpressionStatement",
                  expression: __varRecorder__$q.exportFromImport({
                    type: "Literal",
                    value: specifier.exported.name
                  }, {
                    type: "Literal",
                    value: specifier.local.name
                  }, moduleId, options.moduleExportFunc, options.moduleImportFunc)
                };
              });
            } else if (stmt.declaration) {
              var decls = stmt.declaration.declarations;

              if (!decls) {
                nodes = [stmt.declaration].concat(__varRecorder__$q.exportCallStmt(options.moduleExportFunc, stmt.declaration.id.name, stmt.declaration.id));
              } else {
                nodes = decls.map(function (decl) {
                  options.excludeDecls.push(decl.id);
                  return __varRecorder__$q.varDecl(decl.id, __varRecorder__$q.assignExpr(options.captureObj, decl.id, options.declarationWrapper ? __varRecorder__$q.declarationWrapperCall(options.declarationWrapper, null, __varRecorder__$q.literal(decl.id.name), __varRecorder__$q.literal(stmt.declaration.kind), decl, options.captureObj, options) : decl.init, false), stmt.declaration.kind);
                }).concat(decls.map(function (decl) {
                  return __varRecorder__$q.exportCallStmt(options.moduleExportFunc, decl.id.name, decl.id);
                }));
              }
            } else {
              nodes = stmt.specifiers.map(function (specifier) {
                return __varRecorder__$q.exportCallStmt(options.moduleExportFunc, specifier.exported.name, __varRecorder__$q.shouldDeclBeCaptured({
                  id: specifier.local
                }, options) ? __varRecorder__$q.member(options.captureObj, specifier.local) : specifier.local);
              });
            }
          } else if (stmt.type === "ExportDefaultDeclaration") {
            if (stmt.declaration && stmt.declaration.id) {
              nodes = [stmt.declaration].concat(__varRecorder__$q.exportCallStmt(options.moduleExportFunc, "default", stmt.declaration.id));
            } else {
              nodes = [__varRecorder__$q.exportCallStmt(options.moduleExportFunc, "default", stmt.declaration)];
            }
          } else if (stmt.type === "ExportAllDeclaration") {
            var key = {
              name: options.es6ExportFuncId + "__iterator__",
              type: "Identifier"
            };
            moduleId = stmt.source;
            nodes = [{
              type: "ForInStatement",
              body: {
                type: "ExpressionStatement",
                expression: __varRecorder__$q.exportFromImport(key, key, moduleId, options.moduleExportFunc, options.moduleImportFunc)
              },
              left: {
                type: "VariableDeclaration",
                kind: "var",
                declarations: [{
                  type: "VariableDeclarator",
                  id: key,
                  init: null
                }]
              },
              right: __varRecorder__$q.importCall(null, moduleId, options.moduleImportFunc)
            }];
            options.excludeRefs.push(key.name);
            options.excludeDecls.push(key.name);
          } else if (stmt.type === "ImportDeclaration") {
            nodes = stmt.specifiers.length ? stmt.specifiers.map(function (specifier) {
              var local = specifier.local;
              var imported = specifier.type === "ImportSpecifier" && specifier.imported.name || specifier.type === "ImportDefaultSpecifier" && "default" || null;
              return __varRecorder__$q.varDeclAndImportCall(parsed, local, imported || null, stmt.source, options.moduleImportFunc);
            }) : __varRecorder__$q.importCallStmt(null, stmt.source, options.moduleImportFunc);
          } else nodes = [stmt];

          return stmts.concat(nodes);
        }, []);
        return parsed;
      }, __moduleMeta__$k);

      __varRecorder__$q.es6ModuleTransforms = es6ModuleTransforms;

      var putFunctionDeclsInFront = __varRecorder__$q["lively.source-transform/capturing.js__define__"]("putFunctionDeclsInFront", "function", function (parsed, options) {
        var scope = __varRecorder__$q.topLevelDeclsAndRefs(parsed).scope;

        var funcDecls = scope.funcDecls;
        if (!funcDecls.length) return parsed;
        var putInFront = [];

        for (var i = funcDecls.length; i--;) {
          var decl = funcDecls[i];
          if (!decl.id || !__varRecorder__$q.shouldDeclBeCaptured(decl, options)) continue;
          var parentPath = scope.funcDeclPaths[i].slice(0, -1);
          var parent = Path(parentPath).get(scope.node);
          var funcId = {
            type: "Identifier",
            name: decl.id.name
          };
          var init = options.declarationWrapper ? __varRecorder__$q.declarationWrapperCall(options.declarationWrapper, decl, __varRecorder__$q.literal(funcId.name), __varRecorder__$q.literal("function"), funcId, options.captureObj, options) : funcId;
          var declFront = Object.assign({}, decl);

          if (Array.isArray(parent)) {
            parent.splice(parent.indexOf(decl), 1, __varRecorder__$q.exprStmt(decl.id));
          } else if (parent.type === "ExportNamedDeclaration") {
            var parentIndexInBody = scope.node.body.indexOf(parent);

            if (parentIndexInBody > -1) {
              scope.node.body.splice(parentIndexInBody, 1, {
                type: "ExportNamedDeclaration",
                specifiers: [{
                  type: "ExportSpecifier",
                  exported: decl.id,
                  local: decl.id
                }]
              });
            }
          } else if (parent.type === "ExportDefaultDeclaration") {
            parent.declaration = decl.id;
          } else ;

          putInFront.unshift(__varRecorder__$q.assignExpr(options.captureObj, funcId, init, false));
          putInFront.unshift(declFront);
        }

        parsed.body = putInFront.concat(parsed.body);
        return parsed;
      }, __moduleMeta__$k);

      __varRecorder__$q.putFunctionDeclsInFront = putFunctionDeclsInFront;

      var rewriteToCaptureTopLevelVariables = exports('y', __varRecorder__$q["lively.source-transform/capturing.js__define__"]("rewriteToCaptureTopLevelVariables", "function", function (parsed, assignToObj, options) {
        if (!assignToObj) assignToObj = {
          type: "Identifier",
          name: "__rec"
        };
        options = Object.assign({
          ignoreUndeclaredExcept: null,
          includeRefs: null,
          excludeRefs: options && options.exclude || [],
          includeDecls: null,
          excludeDecls: options && options.exclude || [],
          recordDefRanges: false,
          es6ExportFuncId: null,
          es6ImportFuncId: null,
          captureObj: assignToObj,
          captureImports: true,
          moduleExportFunc: {
            name: options && options.es6ExportFuncId || "_moduleExport",
            type: "Identifier"
          },
          moduleImportFunc: {
            name: options && options.es6ImportFuncId || "_moduleImport",
            type: "Identifier"
          },
          declarationWrapper: undefined,
          classTransform: function classTransform(parsed) {
            return parsed;
          }
        }, options);
        var rewritten = parsed;
        rewritten = __varRecorder__$q.removeJspmGlobalRef(rewritten, options);

        if (options.ignoreUndeclaredExcept) {
          var topLevel = __varRecorder__$q.topLevelDeclsAndRefs(parsed);

          options.excludeRefs = withoutAll(topLevel.undeclaredNames, options.ignoreUndeclaredExcept).concat(options.excludeRefs);
          options.excludeDecls = withoutAll(topLevel.undeclaredNames, options.ignoreUndeclaredExcept).concat(options.excludeDecls);
        }

        options.excludeRefs = options.excludeRefs.concat(options.captureObj.name);
        options.excludeDecls = options.excludeDecls.concat(options.captureObj.name);
        options.excludeRefs = options.excludeRefs.concat(__varRecorder__$q.additionalIgnoredRefs(parsed, options));
        options.excludeDecls = options.excludeDecls.concat(__varRecorder__$q.additionalIgnoredDecls(parsed, options));
        rewritten = __varRecorder__$q.fixDefaultAsyncFunctionExportForRegeneratorBug(rewritten, options);

        if (options.es6ExportFuncId) {
          options.excludeRefs.push(options.es6ExportFuncId);
          options.excludeRefs.push(options.es6ImportFuncId);
          rewritten = __varRecorder__$q.es6ModuleTransforms(rewritten, options);
        }

        rewritten = __varRecorder__$q.replaceRefs(rewritten, options);
        rewritten = __varRecorder__$q.replaceVarDecls(rewritten, options);
        rewritten = __varRecorder__$q.clearEmptyExports(rewritten, options);
        rewritten = __varRecorder__$q.replaceClassDecls(rewritten, options);
        rewritten = __varRecorder__$q.splitExportDeclarations(rewritten, options);
        rewritten = __varRecorder__$q.insertCapturesForExportDeclarations(rewritten, options);
        if (options.captureImports) rewritten = __varRecorder__$q.insertCapturesForImportDeclarations(rewritten, options);
        rewritten = __varRecorder__$q.insertDeclarationsForExports(rewritten, options);
        rewritten = __varRecorder__$q.putFunctionDeclsInFront(rewritten, options);
        rewritten = __varRecorder__$q.transformImportMeta(rewritten, options);
        return rewritten;
      }, __moduleMeta__$k));

      __varRecorder__$q.rewriteToCaptureTopLevelVariables = rewriteToCaptureTopLevelVariables;
      var destructured_1$4 = nodes;
      __varRecorder__$q.member = destructured_1$4.member;
      __varRecorder__$q.prop = destructured_1$4.prop;
      __varRecorder__$q.varDecl = destructured_1$4.varDecl;
      __varRecorder__$q.assign = destructured_1$4.assign;
      __varRecorder__$q.id = destructured_1$4.id;
      __varRecorder__$q.literal = destructured_1$4.literal;
      __varRecorder__$q.exprStmt = destructured_1$4.exprStmt;
      __varRecorder__$q.conditional = destructured_1$4.conditional;
      __varRecorder__$q.binaryExpr = destructured_1$4.binaryExpr;
      __varRecorder__$q.funcCall = destructured_1$4.funcCall;
      var destructured_2 = query;
      __varRecorder__$q.topLevelDeclsAndRefs = destructured_2.topLevelDeclsAndRefs;
      __varRecorder__$q.queryHelpers = destructured_2.helpers;
      __varRecorder__$q.rewriteToRegisterModuleToCaptureSetters = rewriteToRegisterModuleToCaptureSetters;
      __varRecorder__$q.annotationSym = Symbol("lively.ast-destructuring-transform");
      __varRecorder__$q.insertCapturesForExportedImports = insertCapturesForExportedImports;
      __varRecorder__$q.insertCapturesForFunctionDeclarations = insertCapturesForFunctionDeclarations;
      __varRecorder__$q.rewriteToCaptureTopLevelVariables = rewriteToCaptureTopLevelVariables;

      var capturing = /*#__PURE__*/Object.freeze({
        __proto__: null,
        rewriteToRegisterModuleToCaptureSetters: rewriteToRegisterModuleToCaptureSetters,
        insertCapturesForExportedImports: insertCapturesForExportedImports,
        insertCapturesForFunctionDeclarations: insertCapturesForFunctionDeclarations,
        rewriteToCaptureTopLevelVariables: rewriteToCaptureTopLevelVariables
      });

      var __varRecorder__$p = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.source-transform/index.js", __contextModule__);

      var __moduleMeta__$j = {
        pathInPackage: function pathInPackage() {
          return "./index.js";
        },
        unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
          return function () {};
        },
        subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
          return function () {};
        },
        "package": function _package() {
          return {
            name: "lively.source-transform",
            version: "0.1.7"
          };
        }
      };

      var ensureOptionalCatchBinding = __varRecorder__$p["lively.source-transform/index.js__define__"]("ensureOptionalCatchBinding", "function", function () {
        if (!_missingExportShim) return;
        typeof babel !== "undefined" && !babel.availablePlugins["optional-catch-binding"] && !(lively || global.lively).FreezerRuntime && babel.registerPlugin("optional-catch-binding", _missingExportShim["default"]);
      }, __moduleMeta__$j);

      __varRecorder__$p.ensureOptionalCatchBinding = ensureOptionalCatchBinding;

      var ensureImportMeta = __varRecorder__$p["lively.source-transform/index.js__define__"]("ensureImportMeta", "function", function () {
        if (!_missingExportShim) return;
        typeof babel !== "undefined" && !babel.availablePlugins["syntax-import-meta"] && !(lively || global.lively).FreezerRuntime && babel.registerPlugin("syntax-import-meta", _missingExportShim["default"]);
      }, __moduleMeta__$j);

      __varRecorder__$p.ensureImportMeta = ensureImportMeta;

      var stringifyFunctionWithoutToplevelRecorder = exports('t', __varRecorder__$p["lively.source-transform/index.js__define__"]("stringifyFunctionWithoutToplevelRecorder", "function", function (funcOrSourceOrAst) {
        var varRecorderName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "__lvVarRecorder";

        if (typeof funcOrSourceOrAst === "function") {
          funcOrSourceOrAst = String(funcOrSourceOrAst);
        }

        if (lively.FreezerRuntime) {
          return funcOrSourceOrAst.split(varRecorderName + ".").join("");
        }

        if (typeof funcOrSourceOrAst === "string" && funcOrSourceOrAst.endsWith(";")) {
          funcOrSourceOrAst = funcOrSourceOrAst.slice(0, -1);
        }

        var parsed = typeof funcOrSourceOrAst === "string" ? parseFunction(funcOrSourceOrAst) : funcOrSourceOrAst;
        var replaced = ReplaceVisitor.run(parsed, function (node) {
          var isVarRecorderMember = node.type === "MemberExpression" && node.object.type === "Identifier" && node.object.name === varRecorderName;
          return isVarRecorderMember ? node.property : node;
        });
        return stringify(replaced);
      }, __moduleMeta__$j));

      __varRecorder__$p.stringifyFunctionWithoutToplevelRecorder = stringifyFunctionWithoutToplevelRecorder;

      var es5Transpilation = exports('s', __varRecorder__$p["lively.source-transform/index.js__define__"]("es5Transpilation", "function", function (source) {
        if (typeof babel === "undefined") {
          return source;
        }

        __varRecorder__$p.ensureOptionalCatchBinding();

        __varRecorder__$p.ensureImportMeta();

        var options = {
          sourceMap: undefined,
          inputSourceMap: undefined,
          babelrc: false,
          presets: [["es2015", {
            modules: false
          }]],
          plugins: ["transform-exponentiation-operator", "transform-async-to-generator", "syntax-object-rest-spread", "proposal-object-rest-spread", "proposal-optional-chaining"],
          code: true,
          ast: false
        };
        var sourceForBabel = source;
        var transpiled = babel.transform(sourceForBabel, options).code;
        transpiled = transpiled.replace(/\}\)\.call\(undefined\);$/, "}).call(this)");
        if (transpiled.startsWith("(function") && transpiled.endsWith(");")) transpiled = transpiled.slice(1, -2);
        return transpiled;
      }, __moduleMeta__$j));

      __varRecorder__$p.es5Transpilation = es5Transpilation;

      var ensureModuleMetaForComponentDefinition = __varRecorder__$p["lively.source-transform/index.js__define__"]("ensureModuleMetaForComponentDefinition", "function", function (translated, moduleName, recorderName) {
        return QueryReplaceManyVisitor.run(typeof translated == "string" ? parse(translated) : translated, "\n         // ExpressionStatement [\n              /:expression AssignmentExpression [\n                  /:left MemberExpression [\n                    /:property Identifier [ @name ]\n                  ]\n               && /:right CallExpression [\n                     (/:callee MemberExpression [\n                           /:property Identifier [ @name == 'component' ]\n                        && /:object Identifier [ @name == '".concat(recorderName, "' ]\n                       ])\n                     ||\n                     (/:arguments \"*\" [\n                       CallExpression [\n                        /:callee MemberExpression [\n                           /:property Identifier [ @name == 'component' ]\n                        && /:object Identifier [ @name == '").concat(recorderName, "' ]\n                          ]\n                       ]\n                     ])\n                   ]\n                ]\n              ]"), function (node) {
          var exp = node.expression;
          return [exp].concat(_toConsumableArray(parse("".concat(stringify(exp.left), "[Symbol.for('lively-module-meta')] = { module: \"").concat(moduleName, "\", export: \"").concat(exp.left.property.name, "\"};")).body));
        });
      }, __moduleMeta__$j);

      __varRecorder__$p.ensureModuleMetaForComponentDefinition = ensureModuleMetaForComponentDefinition;

      var ensureComponentDescriptors = exports('z', __varRecorder__$p["lively.source-transform/index.js__define__"]("ensureComponentDescriptors", "function", function (translated, moduleName, recorderName) {
        translated = typeof translated == "string" ? parse(translated) : translated;

        var _topLevelDeclsAndRefs = topLevelDeclsAndRefs(translated),
            varDecls = _topLevelDeclsAndRefs.varDecls;

        varDecls = compact(varDecls.map(function (m) {
          return m.declarations && m.declarations[0];
        }));

        if (queryNodes(translated.body[0], "ExpressionStatement [  (/:expression CallExpression [\n       (/:callee Identifier [ @name == 'component'])\n     ])\n   ]").length > 0) {
          var node = translated.body[0];
          var spec = node.expression.arguments.map(function (n) {
            return stringify(n);
          }).join(",");
          return parse("component.for(() => component(".concat(spec, "), { module: \"").concat(moduleName, "\" })"));
        }

        return QueryReplaceManyVisitor.run(translated, "\n         // VariableDeclarator [\n              /:id Identifier [ @name ]\n               && /:init CallExpression [\n                   (/:callee Identifier [ @name == 'component'])\n                 ]\n              ]", function (node) {
          var isCaptured = varDecls.includes(node);
          var componentRef = node.id.name;
          var spec = node.init.arguments.map(function (n) {
            return stringify(n);
          }).join(",");
          return parse("const ".concat(componentRef, " = component.for(() => component(").concat(spec, "), { module: \"").concat(moduleName, "\", export: \"").concat(componentRef, "\", range: { start: ").concat(node.start, ", end: ").concat(node.end, "}}, System").concat(isCaptured ? ", " + "".concat(recorderName, ", \"").concat(componentRef, "\"") : "", ")")).body[0].declarations;
        });
      }, __moduleMeta__$j));

      __varRecorder__$p.ensureComponentDescriptors = ensureComponentDescriptors;

      var replaceExportedVarDeclarations = exports('A', __varRecorder__$p["lively.source-transform/index.js__define__"]("replaceExportedVarDeclarations", "function", function (translated, recorderName, moduleName) {
        translated = QueryReplaceManyVisitor.run(translated, "\n         // ExportNamedDeclaration [\n               /:declaration VariableDeclaration\n            ]", function (exportNamedDeclaration) {
          var _variableDeclaration$;

          var variableDeclaration = exportNamedDeclaration.declaration;
          var exportedVariable = (_variableDeclaration$ = variableDeclaration.declarations) === null || _variableDeclaration$ === void 0 ? void 0 : _variableDeclaration$[0];
          var exportExpression = parse("var ".concat(exportedVariable.id.name, "; export { ").concat(exportedVariable.id.name, " }")).body[1];
          return [variableDeclaration, exportExpression];
        });

        if (moduleName.includes("lively.morphic/config.js")) {
          for (var i = 0; i < translated.body.length; i++) {
            var _node$declarations, _node$declarations$0$;

            var node = translated.body[i];

            if (node.type === "VariableDeclaration" && ((_node$declarations = node.declarations) === null || _node$declarations === void 0 ? void 0 : (_node$declarations$0$ = _node$declarations[0].init) === null || _node$declarations$0$ === void 0 ? void 0 : _node$declarations$0$.type) === "ObjectExpression") {
              var _node$declarations$ = node.declarations[0],
                  id = _node$declarations$.id,
                  init = _node$declarations$.init;
              node.declarations[0].init = logical("||", parse("".concat(recorderName, ".").concat(id.name)).body[0].expression, init);
            }
          }
        }

        return translated;
      }, __moduleMeta__$j));

      __varRecorder__$p.replaceExportedVarDeclarations = replaceExportedVarDeclarations;

      var replaceExportedNamespaces = exports('x', __varRecorder__$p["lively.source-transform/index.js__define__"]("replaceExportedNamespaces", "function", /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(translated, moduleName, bundler) {
          var insertNodes, i, insertFromIdx, _iterator, _step, node;

          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  insertNodes = [];
                  i = 0;
                  translated = QueryReplaceManyVisitor.run(translated, "// ExportAllDeclaration ", function (exportAllDecl) {
                    var _exportAllDecl$export;

                    var dep = bundler.resolveId(exportAllDecl.source.value, moduleName);
                    var name = (_exportAllDecl$export = exportAllDecl.exported) === null || _exportAllDecl$export === void 0 ? void 0 : _exportAllDecl$export.name;
                    var isNamed = !!name;

                    if (isNamed) {
                      insertNodes.push(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                _context.t0 = parse;
                                _context.t1 = "const ".concat(name, " = (lively.FreezerRuntime || lively.frozenModules).exportsOf(\"");
                                _context.t2 = bundler;
                                _context.next = 5;
                                return dep;

                              case 5:
                                _context.t3 = _context.sent;
                                _context.t4 = _context.t2.normalizedId.call(_context.t2, _context.t3);
                                _context.t5 = name;
                                _context.t6 = _context.t1.concat.call(_context.t1, _context.t4, "\") || ").concat(_context.t5, "_namespace;");
                                return _context.abrupt("return", (0, _context.t0)(_context.t6).body[0]);

                              case 10:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee);
                      }))(), parse("export { ".concat(name, " }")).body[0]);
                      return parse("import * as ".concat(name, "_namespace from \"").concat(exportAllDecl.source.value, "\";")).body[0];
                    }

                    insertNodes.push(parse("import * as tmp_".concat(i++, " from \"").concat(exportAllDecl.source.value, "\";")).body[0], _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                      return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              _context2.t0 = parse;
                              _context2.t1 = "Object.assign((lively.FreezerRuntime || lively.frozenModules).recorderFor(\"";
                              _context2.t2 = bundler;
                              _context2.next = 5;
                              return dep;

                            case 5:
                              _context2.t3 = _context2.sent;
                              _context2.t4 = _context2.t2.normalizedId.call(_context2.t2, _context2.t3);
                              _context2.t5 = i++;
                              _context2.t6 = _context2.t1.concat.call(_context2.t1, _context2.t4, "\"), mp_").concat(_context2.t5, ")");
                              return _context2.abrupt("return", (0, _context2.t0)(_context2.t6).body[0]);

                            case 10:
                            case "end":
                              return _context2.stop();
                          }
                        }
                      }, _callee2);
                    }))());
                    return exportAllDecl;
                  });
                  insertFromIdx = translated.body.indexOf(translated.body.find(function (n) {
                    return n.type !== "ImportDeclaration" && n.type !== "ExportAllDeclaration";
                  }));
                  _context3.t0 = _createForOfIteratorHelper;
                  _context3.next = 7;
                  return Promise.all(insertNodes);

                case 7:
                  _context3.t1 = _context3.sent;
                  _iterator = (0, _context3.t0)(_context3.t1);

                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                      node = _step.value;
                      pushAt(translated.body, node, insertFromIdx++);
                    }
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }

                  return _context3.abrupt("return", translated);

                case 11:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function (_x, _x2, _x3) {
          return _ref.apply(this, arguments);
        };
      }(), __moduleMeta__$j));

      __varRecorder__$p.replaceExportedNamespaces = replaceExportedNamespaces;

      var replaceImportedNamespaces = exports('C', __varRecorder__$p["lively.source-transform/index.js__define__"]("replaceImportedNamespaces", "function", /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(translated, moduleName, bundler) {
          var namespaceVars, insertFromIdx, _i, _namespaceVars, _namespaceVars$_i, namespaceVar, importedModule;

          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  namespaceVars = [];
                  translated = QueryReplaceManyVisitor.run(translated, "\n         // ImportDeclaration [\n               /:specifiers\n                 ImportNamespaceSpecifier [\n                   /:local Identifier\n                 ]\n             ]", function (importDecl) {
                    var _importDecl$specifier, _importDecl$specifier2;

                    var dep = bundler.resolveId(importDecl.source.value, moduleName);
                    var name = (_importDecl$specifier = importDecl.specifiers[0]) === null || _importDecl$specifier === void 0 ? void 0 : (_importDecl$specifier2 = _importDecl$specifier.local) === null || _importDecl$specifier2 === void 0 ? void 0 : _importDecl$specifier2.name;

                    if (name) {
                      namespaceVars.push([name, dep]);
                      importDecl.specifiers[0].local.name += "_namespace";
                    }

                    return importDecl;
                  });
                  insertFromIdx = translated.body.indexOf(translated.body.find(function (n) {
                    return n.type !== "ImportDeclaration" && n.type !== "ExportAllDeclaration";
                  }));
                  _i = 0, _namespaceVars = namespaceVars;

                case 4:
                  if (!(_i < _namespaceVars.length)) {
                    _context4.next = 23;
                    break;
                  }

                  _namespaceVars$_i = _slicedToArray(_namespaceVars[_i], 2), namespaceVar = _namespaceVars$_i[0], importedModule = _namespaceVars$_i[1];
                  _context4.t0 = arr;
                  _context4.t1 = translated.body;
                  _context4.t2 = parse;
                  _context4.t3 = "const ".concat(namespaceVar, " = (lively.FreezerRuntime || lively.frozenModules).exportsOf(\"");
                  _context4.t4 = bundler;
                  _context4.next = 13;
                  return importedModule;

                case 13:
                  _context4.t5 = _context4.sent;
                  _context4.t6 = _context4.t4.normalizedId.call(_context4.t4, _context4.t5);
                  _context4.t7 = namespaceVar;
                  _context4.t8 = _context4.t3.concat.call(_context4.t3, _context4.t6, "\") || ").concat(_context4.t7, "_namespace;");
                  _context4.t9 = (0, _context4.t2)(_context4.t8).body[0];
                  _context4.t10 = insertFromIdx;

                  _context4.t0.pushAt.call(_context4.t0, _context4.t1, _context4.t9, _context4.t10);

                case 20:
                  _i++;
                  _context4.next = 4;
                  break;

                case 23:
                  return _context4.abrupt("return", translated);

                case 24:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));

        return function (_x4, _x5, _x6) {
          return _ref4.apply(this, arguments);
        };
      }(), __moduleMeta__$j));

      __varRecorder__$p.replaceImportedNamespaces = replaceImportedNamespaces;
      __varRecorder__$p.capturing = capturing;
      __varRecorder__$p.stringifyFunctionWithoutToplevelRecorder = stringifyFunctionWithoutToplevelRecorder;
      __varRecorder__$p.es5Transpilation = es5Transpilation;
      __varRecorder__$p.ensureModuleMetaForComponentDefinition = ensureModuleMetaForComponentDefinition;
      __varRecorder__$p.ensureComponentDescriptors = ensureComponentDescriptors;
      __varRecorder__$p.replaceExportedVarDeclarations = replaceExportedVarDeclarations;
      __varRecorder__$p.replaceExportedNamespaces = replaceExportedNamespaces;
      __varRecorder__$p.replaceImportedNamespaces = replaceImportedNamespaces;

      var index$2 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        capturing: capturing,
        stringifyFunctionWithoutToplevelRecorder: stringifyFunctionWithoutToplevelRecorder,
        es5Transpilation: es5Transpilation,
        ensureModuleMetaForComponentDefinition: ensureModuleMetaForComponentDefinition,
        ensureComponentDescriptors: ensureComponentDescriptors,
        replaceExportedVarDeclarations: replaceExportedVarDeclarations,
        replaceExportedNamespaces: replaceExportedNamespaces,
        replaceImportedNamespaces: replaceImportedNamespaces
      });
      exports('Q', index$2);

      var __varRecorder__$o = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.vm/lib/eval-support.js", __contextModule__);

      var __moduleMeta__$i = {
        pathInPackage: function pathInPackage() {
          return "./lib/eval-support.js";
        },
        unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
          return function () {};
        },
        subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
          return function () {};
        },
        "package": function _package() {
          return {
            name: "lively.vm",
            version: "0.9.18"
          };
        }
      };

      var processInlineCodeTransformOptions = __varRecorder__$o["lively.vm/lib/eval-support.js__define__"]("processInlineCodeTransformOptions", "function", function (parsed, options) {
        if (!parsed.comments) return options;
        var livelyComment = parsed.comments.find(function (ea) {
          return ea.text.startsWith("lively.vm ");
        });
        if (!livelyComment) return options;

        try {
          var inlineOptions = eval("({" + livelyComment.text.slice("lively.vm ".length) + "});");
          return Object.assign(options, inlineOptions);
        } catch (err) {
          return options;
        }
      }, __moduleMeta__$i);

      __varRecorder__$o.processInlineCodeTransformOptions = processInlineCodeTransformOptions;

      var ensureModuleName = __varRecorder__$o["lively.vm/lib/eval-support.js__define__"]("ensureModuleName", "function", function (options) {
        var _options$declarationW, _options$declarationW2, _options$declarationW3, _options$declarationW4, _options$declarationW5;

        var moduleName = false;

        if ((_options$declarationW = options.declarationWrapperName) === null || _options$declarationW === void 0 ? void 0 : _options$declarationW.includes(System.baseURL)) {
          moduleName = options.declarationWrapperName.split(System.baseURL)[1];
        }

        var separator;

        if (separator = (_options$declarationW2 = options.declarationWrapperName) === null || _options$declarationW2 === void 0 ? void 0 : (_options$declarationW3 = _options$declarationW2.match(/local\:\/\/(.*\/)/)) === null || _options$declarationW3 === void 0 ? void 0 : _options$declarationW3[1]) {
          moduleName = options.declarationWrapperName.split(separator)[1];
          moduleName = "local://".concat(separator).concat(moduleName);
        }

        if (separator = (_options$declarationW4 = options.declarationWrapperName) === null || _options$declarationW4 === void 0 ? void 0 : (_options$declarationW5 = _options$declarationW4.match(/lively\:\/\/(.*\/)/)) === null || _options$declarationW5 === void 0 ? void 0 : _options$declarationW5[1]) {
          moduleName = options.declarationWrapperName.split(separator)[1];
          moduleName = "lively://".concat(separator).concat(moduleName);
        }

        if (moduleName && moduleName.includes("local_projects/")) moduleName = moduleName.replace("local_projects/", "");
        return moduleName;
      }, __moduleMeta__$i);

      __varRecorder__$o.ensureModuleName = ensureModuleName;

      var evalCodeTransform = __varRecorder__$o["lively.vm/lib/eval-support.js__define__"]("evalCodeTransform", "function", function (code, options) {
        var _options$declarationW6;

        code = transformSingleExpression(code);
        var parsed = parse(code, {
          withComments: true
        });
        options = __varRecorder__$o.processInlineCodeTransformOptions(parsed, options);

        var moduleName = __varRecorder__$o.ensureModuleName(options);

        if ((_options$declarationW6 = options.declarationWrapperName) === null || _options$declarationW6 === void 0 ? void 0 : _options$declarationW6.includes("lively.next-workspace/")) {
          moduleName = options.declarationWrapperName.split("lively.next-workspace/")[1];
          moduleName = "lively://lively.next-workspace/".concat(moduleName);
        }

        if (moduleName && moduleName.includes("local_projects/")) moduleName = moduleName.replace("local_projects/", "");

        if (moduleName && code) {
          parsed = ensureComponentDescriptors(parsed, moduleName, options.varRecorderName);
        }

        var _query$topLevelDeclsA = topLevelDeclsAndRefs(parsed),
            classDecls = _query$topLevelDeclsA.classDecls,
            funcDecls = _query$topLevelDeclsA.funcDecls,
            varDecls = _query$topLevelDeclsA.varDecls;

        var annotation = {};
        if (options.hasOwnProperty("evalId")) annotation.evalId = options.evalId;
        if (options.sourceAccessorName) annotation.sourceAccessorName = options.sourceAccessorName;
        [].concat(_toConsumableArray(classDecls), _toConsumableArray(funcDecls)).forEach(function (node) {
          return node["x-lively-object-meta"] = Object.assign({}, annotation, {
            start: node.start,
            end: node.end
          });
        });
        varDecls.forEach(function (node) {
          return node.declarations.forEach(function (decl) {
            return decl["x-lively-object-meta"] = Object.assign({}, annotation, {
              start: decl.start,
              end: decl.end
            });
          });
        });
        parsed = objectSpreadTransform(parsed);

        if (!options.topLevelVarRecorder && options.topLevelVarRecorderName) {
          var G = getGlobal();

          if (options.topLevelVarRecorderName === "GLOBAL") {
            options.topLevelVarRecorder = getGlobal();
          } else {
            options.topLevelVarRecorder = Path(options.topLevelVarRecorderName).get(G);
          }
        }

        if (options.topLevelVarRecorder) {
          var blacklist = (options.dontTransform || []).concat(["arguments"]);
          var undeclaredToTransform = options.recordGlobals ? null : withoutAll(Object.keys(options.topLevelVarRecorder), blacklist);

          var varRecorder = __varRecorder__$o.id(options.varRecorderName || "__lvVarRecorder");

          var es6ClassToFunctionOptions;

          if (options.declarationWrapperName || typeof options.declarationCallback === "function") {
            var declarationWrapperName = options.declarationWrapperName || __varRecorder__$o.defaultDeclarationWrapperName;
            options.declarationWrapper = __varRecorder__$o.member(__varRecorder__$o.id(options.varRecorderName || "__lvVarRecorder"), __varRecorder__$o.literal(declarationWrapperName), true);

            if (options.declarationCallback) {
              options.topLevelVarRecorder[declarationWrapperName] = options.declarationCallback;
            }
          }

          var transformES6Classes = options.hasOwnProperty("transformES6Classes") ? options.transformES6Classes : true;

          if (transformES6Classes) {
            es6ClassToFunctionOptions = {
              currentModuleAccessor: options.currentModuleAccessor,
              classHolder: varRecorder,
              functionNode: __varRecorder__$o.member(varRecorder, __varRecorder__$o.defaultClassToFunctionConverterName),
              declarationWrapper: options.declarationWrapper,
              evalId: options.evalId,
              sourceAccessorName: options.sourceAccessorName,
              transform: options.classTransform
            };
          }

          parsed = rewriteToCaptureTopLevelVariables(parsed, varRecorder, {
            es6ImportFuncId: options.es6ImportFuncId,
            es6ExportFuncId: options.es6ExportFuncId,
            ignoreUndeclaredExcept: undeclaredToTransform,
            exclude: blacklist,
            declarationWrapper: options.declarationWrapper || undefined,
            classToFunction: es6ClassToFunctionOptions,
            evalId: options.evalId,
            sourceAccessorName: options.sourceAccessorName,
            keepTopLevelVarDecls: options.keepTopLevelVarDecls
          });
        }

        if (options.wrapInStartEndCall) {
          parsed = wrapInStartEndCall(parsed, {
            startFuncNode: options.startFuncNode,
            endFuncNode: options.endFuncNode
          });
        }

        var result = stringify(parsed);
        if (options.jsx) result = es5Transpilation(result);
        if (options.sourceURL) result += "\n//# sourceURL=" + options.sourceURL.replace(/\s/g, "_");
        return result;
      }, __moduleMeta__$i);

      __varRecorder__$o.evalCodeTransform = evalCodeTransform;

      var evalCodeTransformOfSystemRegisterSetters = __varRecorder__$o["lively.vm/lib/eval-support.js__define__"]("evalCodeTransformOfSystemRegisterSetters", "function", function (code) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (!options.topLevelVarRecorder) return code;

        if (typeof options.declarationCallback === "function" || options.declarationWrapperName) {
          var declarationWrapperName = options.declarationWrapperName || __varRecorder__$o.defaultDeclarationWrapperName;
          options.declarationWrapper = __varRecorder__$o.member(__varRecorder__$o.id(options.varRecorderName), __varRecorder__$o.literal(declarationWrapperName), true);

          if (options.declarationCallback) {
            options.topLevelVarRecorder[declarationWrapperName] = options.declarationCallback;
          }
        }

        var parsed = parse(code);
        var blacklist = (options.dontTransform || []).concat(["arguments"]);
        options.recordGlobals ? null : withoutAll(Object.keys(options.topLevelVarRecorder), blacklist);
        var result = rewriteToRegisterModuleToCaptureSetters(parsed, __varRecorder__$o.id(options.varRecorderName || "__lvVarRecorder"), Object.assign({
          exclude: blacklist
        }, options));
        return stringify(result);
      }, __moduleMeta__$i);

      __varRecorder__$o.evalCodeTransformOfSystemRegisterSetters = evalCodeTransformOfSystemRegisterSetters;

      var copyProperties = __varRecorder__$o["lively.vm/lib/eval-support.js__define__"]("copyProperties", "function", function (source, target) {
        var exceptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        Object.getOwnPropertyNames(source).concat(Object.getOwnPropertySymbols(source)).forEach(function (name) {
          return exceptions.indexOf(name) === -1 && Object.defineProperty(target, name, Object.getOwnPropertyDescriptor(source, name));
        });
      }, __moduleMeta__$i);

      __varRecorder__$o.copyProperties = copyProperties;
      var destructured_1$3 = nodes;
      __varRecorder__$o.id = destructured_1$3.id;
      __varRecorder__$o.literal = destructured_1$3.literal;
      __varRecorder__$o.member = destructured_1$3.member;
      __varRecorder__$o.objectLiteral = destructured_1$3.objectLiteral;
      __varRecorder__$o.defaultDeclarationWrapperName = "lively.capturing-declaration-wrapper";
      var defaultDeclarationWrapperName = __varRecorder__$o.defaultDeclarationWrapperName;
      __varRecorder__$o.defaultDeclarationWrapperName = defaultDeclarationWrapperName;
      __varRecorder__$o.defaultClassToFunctionConverterName = "initializeES6ClassForLively";
      var defaultClassToFunctionConverterName = __varRecorder__$o.defaultClassToFunctionConverterName;
      __varRecorder__$o.defaultClassToFunctionConverterName = defaultClassToFunctionConverterName;
      __varRecorder__$o.evalCodeTransform = evalCodeTransform;
      __varRecorder__$o.evalCodeTransformOfSystemRegisterSetters = evalCodeTransformOfSystemRegisterSetters;

      var __varRecorder__$n = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.vm/lib/eval.js", __contextModule__);

      var __moduleMeta__$h = {
        pathInPackage: function pathInPackage() {
          return "./lib/eval.js";
        },
        unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
          return function () {};
        },
        subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
          return function () {};
        },
        "package": function _package() {
          return {
            name: "lively.vm",
            version: "0.9.18"
          };
        }
      };

      var _normalizeEvalOptions = __varRecorder__$n["lively.vm/lib/eval.js__define__"]("_normalizeEvalOptions", "function", function (opts) {
        if (!opts) opts = {};
        opts = Object.assign({
          targetModule: null,
          sourceURL: opts.targetModule,
          runtime: null,
          context: getGlobal(),
          varRecorderName: __varRecorder__$n.defaultTopLevelVarRecorderName,
          dontTransform: [],
          recordGlobals: null,
          returnPromise: true,
          promiseTimeout: 200,
          waitForPromise: true,
          wrapInStartEndCall: false,
          onStartEval: null,
          onEndEval: null
        }, opts);

        if (opts.targetModule) {
          var moduleEnv = opts.runtime && opts.runtime.modules && opts.runtime.modules[opts.targetModule];
          if (moduleEnv) opts = Object.assign(opts, moduleEnv);
        }

        if (opts.wrapInStartEndCall) {
          opts.startFuncNode = {
            type: "MemberExpression",
            object: {
              type: "Identifier",
              name: opts.varRecorderName
            },
            property: {
              type: "Literal",
              value: __varRecorder__$n.startEvalFunctionName
            },
            computed: true
          };
          opts.endFuncNode = {
            type: "MemberExpression",
            object: {
              type: "Identifier",
              name: opts.varRecorderName
            },
            property: {
              type: "Literal",
              value: __varRecorder__$n.endEvalFunctionName
            },
            computed: true
          };
        }

        return opts;
      }, __moduleMeta__$h);

      __varRecorder__$n._normalizeEvalOptions = _normalizeEvalOptions;

      var runEval$2 = __varRecorder__$n["lively.vm/lib/eval.js__define__"]("runEval", "function", function (code, options, thenDo) {
        if (typeof options === "function" && arguments.length === 2) {
          thenDo = options;
          options = null;
        }

        var result = new __varRecorder__$n.EvalResult();
        var returnedError;
        var returnedValue;
        var onEvalStartCalled = false;
        var onEvalEndCalled = false;
        options = __varRecorder__$n._normalizeEvalOptions(options);
        var evalDone = deferred();
        var recorder = options.topLevelVarRecorder || getGlobal();
        var originalSource = code;

        if (options.wrapInStartEndCall) {
          if (recorder[__varRecorder__$n.startEvalFunctionName]) {
            console.warn(result.addWarning("startEvalFunctionName ".concat(__varRecorder__$n.startEvalFunctionName, " already exists in recorder!")));
          }

          if (recorder[__varRecorder__$n.endEvalFunctionName]) {
            console.warn(result.addWarning("endEvalFunctionName ".concat(__varRecorder__$n.endEvalFunctionName, " already exists in recorder!")));
          }

          recorder[__varRecorder__$n.startEvalFunctionName] = function () {
            if (onEvalStartCalled) {
              console.warn(result.addWarning("onEvalStartCalled multiple times!"));
              return;
            }

            onEvalStartCalled = true;
            if (typeof options.onStartEval === "function") options.onStartEval();
          };

          recorder[__varRecorder__$n.endEvalFunctionName] = function (err, value) {
            if (onEvalEndCalled) {
              console.warn(result.addWarning("onEvalEndCalled multiple times!"));
              return;
            }

            onEvalEndCalled = true;

            __varRecorder__$n.finishEval(err, value, result, options, recorder, evalDone, thenDo);
          };
        }

        try {
          code = evalCodeTransform(code, options);
          if (options.header) code = options.header + code;
          if (options.footer) code = code + options.footer;
          if (options.transpiler) code = options.transpiler(code, options.transpilerOptions);
        } catch (e) {
          console.warn(result.addWarning("lively.vm evalCodeTransform not working: " + e));
        }

        try {
          typeof $world !== "undefined" && $world.get("log") && ($world.get("log").textString = code);
          returnedValue = __varRecorder__$n._eval.call(options.context, code, options.topLevelVarRecorder, options.originalSource || originalSource);
        } catch (e) {
          returnedError = e;
        }

        if (options.wrapInStartEndCall) {
          if (returnedError && !onEvalEndCalled) {
            recorder[__varRecorder__$n.endEvalFunctionName](returnedError, undefined);
          }
        } else {
          __varRecorder__$n.finishEval(returnedError, returnedError || returnedValue, result, options, recorder, evalDone, thenDo);
        }

        return options.sync ? result : evalDone.promise;
      }, __moduleMeta__$h);

      __varRecorder__$n.runEval = runEval$2;

      var finishEval = __varRecorder__$n["lively.vm/lib/eval.js__define__"]("finishEval", "function", function (err, value, result, options, recorder, evalDone, thenDo) {
        if (options.wrapInStartEndCall) {
          delete recorder[__varRecorder__$n.startEvalFunctionName];
          delete recorder[__varRecorder__$n.endEvalFunctionName];
        }

        if (err) {
          result.isError = true;
          result.value = err;
        } else result.value = value;

        if (result.value instanceof Promise) result.isPromise = true;

        if (options.sync) {
          result.processSync(options);
          if (typeof options.onEndEval === "function") options.onEndEval(err, value);
        } else {
          result.process(options).then(function () {
            typeof thenDo === "function" && thenDo(null, result);
            typeof options.onEndEval === "function" && options.onEndEval(err, value);
            return result;
          }, function (err) {
            typeof thenDo === "function" && thenDo(err, undefined);
            typeof options.onEndEval === "function" && options.onEndEval(err, undefined);
            return result;
          }).then(evalDone.resolve, evalDone.reject);
        }
      }, __moduleMeta__$h);

      __varRecorder__$n.finishEval = finishEval;

      var syncEval$1 = __varRecorder__$n["lively.vm/lib/eval.js__define__"]("syncEval", "function", function (string, options) {
        options = Object.assign(options || {}, {
          sync: true
        });
        return __varRecorder__$n.runEval(string, options);
      }, __moduleMeta__$h);

      __varRecorder__$n.syncEval = syncEval$1;

      var tryToWaitForPromise = __varRecorder__$n["lively.vm/lib/eval.js__define__"]("tryToWaitForPromise", "function", function (evalResult, timeoutMs) {
        console.assert(evalResult.isPromise, "no promise in tryToWaitForPromise???");
        var timeout = {};
        var timeoutP = new Promise(function (resolve) {
          return setTimeout(resolve, timeoutMs, timeout);
        });
        return Promise.race([timeoutP, evalResult.value]).then(function (resolved) {
          return Object.assign(evalResult, resolved !== timeout ? {
            promiseStatus: "fulfilled",
            promisedValue: resolved
          } : {
            promiseStatus: "pending"
          });
        })["catch"](function (rejected) {
          return Object.assign(evalResult, {
            promiseStatus: "rejected",
            promisedValue: rejected
          });
        });
      }, __moduleMeta__$h);

      __varRecorder__$n.tryToWaitForPromise = tryToWaitForPromise;
      __varRecorder__$n.defaultTopLevelVarRecorderName = "__lvVarRecorder";
      __varRecorder__$n.startEvalFunctionName = "lively.vm-on-eval-start";
      __varRecorder__$n.endEvalFunctionName = "lively.vm-on-eval-end";
      __varRecorder__$n._eval = Closure.fromSource("function _eval(__lvEvalStatement, __lvVarRecorder/*needed as arg for capturing*/, __lvOriginalCode) {\n  return eval(__lvEvalStatement);\n}").getFunc();

      var EvalResult = /*#__PURE__*/function () {
        function EvalResult() {
          _classCallCheck(this, EvalResult);

          this.isEvalResult = true;
          this.value = undefined;
          this.warnings = [];
          this.isError = false;
          this.isPromise = false;
          this.promisedValue = undefined;
          this.promiseStatus = "unknown";
        }

        _createClass(EvalResult, [{
          key: "addWarning",
          value: function addWarning(warn) {
            this.warnings.push(warn);
            return warn;
          }
        }, {
          key: "printed",
          value: function printed() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.value = printEvalResult(this, options);
          }
        }, {
          key: "processSync",
          value: function processSync(options) {
            if (options.inspect || options.asString) {
              this.value = this.print(this.value, options);
            }

            return this;
          }
        }, {
          key: "process",
          value: function process(options) {
            var result = this;

            if (result.isPromise && options.waitForPromise) {
              return __varRecorder__$n.tryToWaitForPromise(result, options.promiseTimeout).then(function () {
                if (options.inspect || options.asString) result.printed(options);
                return result;
              });
            }

            if (options.inspect || options.asString) result.printed(options);
            return Promise.resolve(result);
          }
        }]);

        return EvalResult;
      }();

      __varRecorder__$n.EvalResult = EvalResult;
      var defaultTopLevelVarRecorderName = __varRecorder__$n.defaultTopLevelVarRecorderName;
      __varRecorder__$n.defaultTopLevelVarRecorderName = defaultTopLevelVarRecorderName;
      __varRecorder__$n.getGlobal = getGlobal;
      __varRecorder__$n.runEval = runEval$2;
      __varRecorder__$n.syncEval = syncEval$1;

      var __varRecorder__$m = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.vm/lib/esm-eval.js", __contextModule__);

      var __moduleMeta__$g = {
        pathInPackage: function pathInPackage() {
          return "./lib/esm-eval.js";
        },
        unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
          return function () {};
        },
        subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
          return function () {};
        },
        "package": function _package() {
          return {
            name: "lively.vm",
            version: "0.9.18"
          };
        }
      };

      var ensureImportsAreImported = __varRecorder__$m["lively.vm/lib/esm-eval.js__define__"]("ensureImportsAreImported", "function", /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(System, code, parentModule) {
          var parsed, body, imports;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  parsed = parse(code);
                  body = parsed.body;
                  imports = body.filter(function (node) {
                    return node.type === "ImportDeclaration";
                  });
                  _context.next = 5;
                  return Promise.all(imports.map(function (node) {
                    return System.normalize(node.source.value, parentModule).then(function (fullName) {
                      node.source.value = fullName;
                      return System.get(fullName) || System["import"](fullName);
                    });
                  }))["catch"](function (err) {
                    console.error("Error ensuring imports: " + err.message);
                    throw err;
                  });

                case 5:
                  return _context.abrupt("return", stringify(parsed));

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x, _x2, _x3) {
          return _ref.apply(this, arguments);
        };
      }(), __moduleMeta__$g);

      __varRecorder__$m.ensureImportsAreImported = ensureImportsAreImported;

      var hasUnimportedImports = __varRecorder__$m["lively.vm/lib/esm-eval.js__define__"]("hasUnimportedImports", "function", function (System, code, parentModule) {
        var body = parse(code).body;
        var imports = body.filter(function (node) {
          return node.type === "ImportDeclaration";
        });
        var importedModules = uniq(imports.map(function (ea) {
          return ea.source.value;
        })).filter(Boolean);
        var unloadedImports = importedModules.filter(function (ea) {
          return !System.get(System.decanonicalize(ea, parentModule));
        });
        return unloadedImports.length > 0;
      }, __moduleMeta__$g);

      __varRecorder__$m.hasUnimportedImports = hasUnimportedImports;

      var babelTranspilerForAsyncAwaitCode = __varRecorder__$m["lively.vm/lib/esm-eval.js__define__"]("babelTranspilerForAsyncAwaitCode", "function", function (System, babel, filename, env) {
        return function (source, options) {
          options = Object.assign({
            sourceMap: undefined,
            inputSourceMap: undefined,
            filename: filename,
            code: true,
            ast: false
          }, options);
          var sourceForBabel = "(async function(__rec) {\n".concat(source, "\n}).call(this);");
          var transpiled = babel.transform(sourceForBabel, options).code;
          transpiled = transpiled.replace(/\}\)\.call\(undefined\);$/, "}).call(this)");
          return transpiled;
        };
      }, __moduleMeta__$g);

      __varRecorder__$m.babelTranspilerForAsyncAwaitCode = babelTranspilerForAsyncAwaitCode;

      var babelPluginTranspilerForAsyncAwaitCode = __varRecorder__$m["lively.vm/lib/esm-eval.js__define__"]("babelPluginTranspilerForAsyncAwaitCode", "function", function (System, babelWrapper, filename, env) {
        return function (source, options) {
          var babelOptions = System.babelOptions || {};
          var presets = [];
          presets.push(babelWrapper.presetES2015);

          if (babelOptions.stage3) {
            presets.push({
              plugins: babelWrapper.pluginsStage3
            });
          }

          if (babelOptions.stage2) {
            presets.push({
              plugins: babelWrapper.pluginsStage2
            });
          }

          if (babelOptions.stage1) {
            presets.push({
              plugins: babelWrapper.pluginsStage1
            });
          }

          options = Object.assign({
            sourceMap: undefined,
            inputSourceMap: undefined,
            filename: filename,
            babelrc: false,
            presets: presets,
            moduleIds: false,
            code: true,
            ast: false
          }, options);
          var sourceForBabel = "(async function(__rec) {\n".concat(source, "\n}).call(this);");
          var transpiled = babelWrapper.babel.transform(sourceForBabel, options).code;
          transpiled = transpiled.replace(/\}\)\.call\(undefined\);$/, "}).call(this)");
          return transpiled;
        };
      }, __moduleMeta__$g);

      __varRecorder__$m.babelPluginTranspilerForAsyncAwaitCode = babelPluginTranspilerForAsyncAwaitCode;

      var getEs6Transpiler = __varRecorder__$m["lively.vm/lib/esm-eval.js__define__"]("getEs6Transpiler", "function", function (System, options, env) {
        if (options.transpiler) return options.transpiler;
        if (!options.es6Transpile) return null;

        if (System.transpiler === "babel") {
          var babel = System.global[System.transpiler] || System.get(System.decanonicalize(System.transpiler));
          return babel ? __varRecorder__$m.babelTranspilerForAsyncAwaitCode(System, babel, options.targetModule, env) : System["import"](System.transpiler).then(function (babel) {
            return __varRecorder__$m.babelTranspilerForAsyncAwaitCode(System, babel, options.targetModule, env);
          });
        }

        if (System.transpiler === "plugin-babel") {
          var babelPluginPath = System.decanonicalize("plugin-babel");
          var babelPath = babelPluginPath.split("/").slice(0, -1).concat("systemjs-babel-browser.js").join("/");
          var babelPlugin = System.get(babelPath);
          return babelPlugin ? __varRecorder__$m.babelPluginTranspilerForAsyncAwaitCode(System, babelPlugin, options.targetModule, env) : System["import"](babelPath).then(function (babelPlugin) {
            return __varRecorder__$m.babelPluginTranspilerForAsyncAwaitCode(System, babelPlugin, options.targetModule, env);
          });
        }

        if (System.transpiler === "lively.transpiler") {
          var Transpiler = System.get("lively.transpiler")["default"];
          var transpiler = new Transpiler(System, options.targetModule, env);
          return function (source, options) {
            return transpiler.transpileDoit(source, options);
          };
        }

        throw new Error("Sorry, currently only babel is supported as es6 transpiler for runEval!");
      }, __moduleMeta__$g);

      __varRecorder__$m.getEs6Transpiler = getEs6Transpiler;

      var evalEnd = __varRecorder__$m["lively.vm/lib/esm-eval.js__define__"]("evalEnd", "function", function (System, code, options, result) {
        System.get("@lively-env").evaluationEnd(options.targetModule);
        System.debug && console.log("[lively.module] runEval in module ".concat(options.targetModule, " done"));
        emit("lively.vm/doitresult", {
          code: code,
          result: result,
          waitForPromise: options.waitForPromise,
          targetModule: options.targetModule
        }, Date.now(), System);
        return result;
      }, __moduleMeta__$g);

      __varRecorder__$m.evalEnd = evalEnd;

      var runEval$1 = __varRecorder__$m["lively.vm/lib/esm-eval.js__define__"]("runEval", "function", function (System, code, options) {
        options = Object.assign({
          targetModule: null,
          parentModule: null,
          es6Transpile: true,
          transpiler: null,
          transpilerOptions: null,
          format: "esm"
        }, options);
        var defaultSourceAccessorName = "__lvOriginalCode";
        var originalSource = code;
        System.debug && console.log("[lively.module] runEval: ".concat(code.slice(0, 100).replace(/\n/mg, " "), "..."));
        var _options = options,
            format = _options.format,
            targetModule = _options.targetModule,
            parentModule = _options.parentModule;
        targetModule = System.decanonicalize(targetModule || "*scratch*", parentModule);
        options.targetModule = targetModule;

        if (format) {
          var meta = System.getConfig().meta[targetModule];
          if (!meta) meta = {};
          if (!meta[targetModule]) meta[targetModule] = {};

          if (!meta[targetModule].format) {
            meta[targetModule].format = format;
            System.config(meta);
          }
        }

        var module = System.get("@lively-env").moduleEnv(targetModule);
        var recorder = module.recorder,
            recorderName = module.recorderName,
            dontTransform = module.dontTransform;

        var transpiler = __varRecorder__$m.getEs6Transpiler(System, options, module);

        var header = "var _moduleExport = ".concat(recorderName, "._moduleExport,\n") + "    _moduleImport = ".concat(recorderName, "._moduleImport;\n");
        options = Object.assign({
          waitForPromise: true,
          sync: false,
          evalId: options.evalId || module.nextEvalId(),
          sourceAccessorName: (options.hasOwnProperty("embedOriginalCode") ? options.embedOriginalCode : true) ? defaultSourceAccessorName : undefined,
          originalSource: originalSource
        }, options, {
          header: header,
          recordGlobals: true,
          dontTransform: dontTransform,
          varRecorderName: recorderName,
          topLevelVarRecorder: recorder,
          sourceURL: options.sourceURL || options.targetModule,
          context: options.context || recorder,
          wrapInStartEndCall: true,
          es6ExportFuncId: "_moduleExport",
          es6ImportFuncId: "_moduleImport",
          transpiler: transpiler,
          declarationWrapperName: module.varDefinitionCallbackName,
          currentModuleAccessor: __varRecorder__$m.funcCall(__varRecorder__$m.member(__varRecorder__$m.funcCall(__varRecorder__$m.member(__varRecorder__$m.member("__lvVarRecorder", "System"), "get"), __varRecorder__$m.literal("@lively-env")), "moduleEnv"), __varRecorder__$m.literal(options.targetModule))
        });

        if (!options.sync && !options.importsEnsured && __varRecorder__$m.hasUnimportedImports(System, code, targetModule)) {
          return __varRecorder__$m.ensureImportsAreImported(System, code, targetModule)["catch"](function (err) {
            return null;
          }).then(function (patchedSource) {
            return runEval$1(System, patchedSource, Object.assign({}, options, {
              importsEnsured: true
            }));
          });
        }

        if (!module.record()) {
          if (!options.sync && !options._moduleImported) {
            return System["import"](targetModule)["catch"](function (err) {
              return null;
            }).then(function () {
              return runEval$1(System, originalSource, Object.assign({}, options, {
                _moduleImported: true
              }));
            });
          }

          module.ensureRecord();
        }

        if (options.es6Transpile && options.transpiler instanceof Promise) {
          if (!options.sync && !options._transpilerLoaded) {
            return options.transpiler["catch"](function (err) {
              return console.error(err);
            }).then(function (transpiler) {
              return runEval$1(System, originalSource, Object.assign({}, options, {
                transpiler: transpiler,
                _transpilerLoaded: true
              }));
            });
          } else {
            console.warn("[lively.vm] sync eval requested but transpiler is not yet loaded, will continue without transpilation!");
            options.transpiler = null;
          }
        }

        System.debug && console.log("[lively.module] runEval in module ".concat(targetModule, " started"));
        emit("lively.vm/doitrequest", {
          code: originalSource,
          waitForPromise: options.waitForPromise,
          targetModule: options.targetModule
        }, Date.now(), System);
        System.get("@lively-env").evaluationStart(targetModule);
        var result = runEval$2(code, options);
        return options.sync ? __varRecorder__$m.evalEnd(System, originalSource, options, result) : Promise.resolve(result).then(function (result) {
          return __varRecorder__$m.evalEnd(System, originalSource, options, result);
        });
      }, __moduleMeta__$g);

      __varRecorder__$m.runEval = runEval$1;
      var destructured_1$2 = nodes;
      __varRecorder__$m.funcCall = destructured_1$2.funcCall;
      __varRecorder__$m.member = destructured_1$2.member;
      __varRecorder__$m.id = destructured_1$2.id;
      __varRecorder__$m.literal = destructured_1$2.literal;
      __varRecorder__$m.runEval = runEval$1;

      var __varRecorder__$l = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.vm/lib/eval-strategies.js", __contextModule__);

      var EvalStrategy = /*#__PURE__*/function () {
        function EvalStrategy() {
          _classCallCheck(this, EvalStrategy);
        }

        _createClass(EvalStrategy, [{
          key: "runEval",
          value: function () {
            var _runEval = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(source, options) {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      return _context.abrupt("return", Promise.reject("runEval(source, options) not yet implemented for ".concat(this.constructor.name)));

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function runEval(_x, _x2) {
              return _runEval.apply(this, arguments);
            }

            return runEval;
          }()
        }, {
          key: "keysOfObject",
          value: function () {
            var _keysOfObject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(prefix, options) {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      return _context2.abrupt("return", Promise.reject("keysOfObject(prefix, options) not yet implemented for ".concat(this.constructor.name)));

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function keysOfObject(_x3, _x4) {
              return _keysOfObject.apply(this, arguments);
            }

            return keysOfObject;
          }()
        }]);

        return EvalStrategy;
      }();

      __varRecorder__$l.EvalStrategy = EvalStrategy;

      var SimpleEvalStrategy = /*#__PURE__*/function (_varRecorder__$EvalS) {
        _inherits(SimpleEvalStrategy, _varRecorder__$EvalS);

        var _super = _createSuper(SimpleEvalStrategy);

        function SimpleEvalStrategy() {
          _classCallCheck(this, SimpleEvalStrategy);

          return _super.apply(this, arguments);
        }

        _createClass(SimpleEvalStrategy, [{
          key: "runEval",
          value: function () {
            var _runEval2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(source, options) {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      return _context3.abrupt("return", Promise.resolve().then(function () {
                        try {
                          return Promise.resolve({
                            value: eval(source)
                          });
                        } catch (err) {
                          return {
                            isError: true,
                            value: err
                          };
                        }
                      }));

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }));

            function runEval(_x5, _x6) {
              return _runEval2.apply(this, arguments);
            }

            return runEval;
          }()
        }, {
          key: "keysOfObject",
          value: function () {
            var _keysOfObject2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(prefix, options) {
              var _this = this;

              var result;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return lively.vm.completions.getCompletions(function (code) {
                        return _this.runEval(code, options);
                      }, prefix);

                    case 2:
                      result = _context4.sent;
                      return _context4.abrupt("return", {
                        completions: result.completions,
                        prefix: result.startLetters
                      });

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4);
            }));

            function keysOfObject(_x7, _x8) {
              return _keysOfObject2.apply(this, arguments);
            }

            return keysOfObject;
          }()
        }]);

        return SimpleEvalStrategy;
      }(__varRecorder__$l.EvalStrategy);

      __varRecorder__$l.SimpleEvalStrategy = SimpleEvalStrategy;

      var LivelyVmEvalStrategy = /*#__PURE__*/function (_varRecorder__$EvalS2) {
        _inherits(LivelyVmEvalStrategy, _varRecorder__$EvalS2);

        var _super2 = _createSuper(LivelyVmEvalStrategy);

        function LivelyVmEvalStrategy() {
          _classCallCheck(this, LivelyVmEvalStrategy);

          return _super2.apply(this, arguments);
        }

        _createClass(LivelyVmEvalStrategy, [{
          key: "normalizeOptions",
          value: function normalizeOptions(options) {
            if (!options.targetModule) {
              throw new Error("runEval called but options.targetModule not specified!");
            }

            return Object.assign({
              sourceURL: options.targetModule + "_doit_" + Date.now()
            }, options);
          }
        }, {
          key: "runEval",
          value: function () {
            var _runEval3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(source, options) {
              var System;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      options = this.normalizeOptions(options);
                      System = options.System || lively.modules.System;
                      System.config({
                        meta: _defineProperty({}, options.targetModule, {
                          format: "esm"
                        })
                      });
                      return _context5.abrupt("return", lively.vm.runEval(source, options));

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function runEval(_x9, _x10) {
              return _runEval3.apply(this, arguments);
            }

            return runEval;
          }()
        }, {
          key: "keysOfObject",
          value: function () {
            var _keysOfObject3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(prefix, options) {
              var result;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return lively.vm.completions.getCompletions(function (code) {
                        return lively.vm.runEval(code, options);
                      }, prefix);

                    case 2:
                      result = _context6.sent;
                      return _context6.abrupt("return", {
                        completions: result.completions,
                        prefix: result.startLetters
                      });

                    case 4:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6);
            }));

            function keysOfObject(_x11, _x12) {
              return _keysOfObject3.apply(this, arguments);
            }

            return keysOfObject;
          }()
        }]);

        return LivelyVmEvalStrategy;
      }(__varRecorder__$l.EvalStrategy);

      __varRecorder__$l.LivelyVmEvalStrategy = LivelyVmEvalStrategy;
      var RemoteEvalStrategy = /*#__PURE__*/function (_varRecorder__$Livel) {
        _inherits(RemoteEvalStrategy, _varRecorder__$Livel);

        var _super3 = _createSuper(RemoteEvalStrategy);

        function RemoteEvalStrategy() {
          _classCallCheck(this, RemoteEvalStrategy);

          return _super3.apply(this, arguments);
        }

        _createClass(RemoteEvalStrategy, [{
          key: "sourceForRemote",
          value: function sourceForRemote(action, arg, options) {
            var contextFetch = isString(options.context) ? options.context : false;
            options = dissoc(options, ["systemInterface", "System", "context", "classTransform"]);
            return "\n(async function() {\n  var arg = ".concat(JSON.stringify(arg), ",\n      options = ").concat(JSON.stringify(options), ";\n  const { runEval, completions } = await System.import(\"lively.vm\");\n  const { classToFunctionTransform } = await System.import(\"lively.classes\");\n  var hasSystem = typeof System !== \"undefined\"\n  options.context = ").concat(contextFetch, ";\n  options.classTransform = classToFunctionTransform;\n  if (!options.context) {\n    options.context = hasSystem\n      ? System.global\n      : typeof window !== \"undefined\"\n          ? window\n          : typeof global !== \"undefined\"\n              ? global\n              : typeof self !== \"undefined\" ? self : this;\n  }\n  async function evalFunction(source, options) {\n    if (hasSystem) {\n      var conf = {meta: {}}; conf.meta[options.targetModule] = {format: \"esm\"};\n      System.config(conf);\n    } else {\n      options = Object.assign({topLevelVarRecorderName: \"GLOBAL\"}, options);\n      delete options.targetModule;\n    }\n    let res = await runEval(source, options);\n    try {\n       JSON.stringify(res.value);\n    } catch(e) {\n       res.value = String(res.value);\n    }\n    return res;\n  }\n  function keysOfObjectFunction(prefix, options) {\n    return completions.getCompletions(code => evalFunction(code, options), prefix)\n      .then(result => ({isEvalResult: true, completions: result.completions, prefix: result.startLetters}));\n  }\n  return ").concat(action === "eval" ? "evalFunction" : "keysOfObjectFunction", "(arg, options)\n    .catch(err => ({isEvalResult: true, isError: true, value: String(err.stack || err)}));\n})();\n");
          }
        }, {
          key: "runEval",
          value: function () {
            var _runEval4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(source, options) {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      return _context7.abrupt("return", this.remoteEval(this.sourceForRemote("eval", source, options), options));

                    case 1:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            function runEval(_x13, _x14) {
              return _runEval4.apply(this, arguments);
            }

            return runEval;
          }()
        }, {
          key: "keysOfObject",
          value: function () {
            var _keysOfObject4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(prefix, options) {
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      return _context8.abrupt("return", this.remoteEval(this.sourceForRemote("keysOfObject", prefix, options), options));

                    case 1:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function keysOfObject(_x15, _x16) {
              return _keysOfObject4.apply(this, arguments);
            }

            return keysOfObject;
          }()
        }, {
          key: "remoteEval",
          value: function () {
            var _remoteEval = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(source, options) {
              var result;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.prev = 0;
                      _context9.next = 3;
                      return this.basicRemoteEval(source, options);

                    case 3:
                      result = _context9.sent;
                      return _context9.abrupt("return", typeof result === "string" ? JSON.parse(result) : result);

                    case 7:
                      _context9.prev = 7;
                      _context9.t0 = _context9["catch"](0);
                      return _context9.abrupt("return", {
                        isError: true,
                        value: "Remote eval failed: ".concat(result || _context9.t0)
                      });

                    case 10:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this, [[0, 7]]);
            }));

            function remoteEval(_x17, _x18) {
              return _remoteEval.apply(this, arguments);
            }

            return remoteEval;
          }()
        }, {
          key: "basicRemoteEval",
          value: function () {
            var _basicRemoteEval = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(source, options) {
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      throw new Error("Not yet implemented");

                    case 1:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10);
            }));

            function basicRemoteEval(_x19, _x20) {
              return _basicRemoteEval.apply(this, arguments);
            }

            return basicRemoteEval;
          }()
        }]);

        return RemoteEvalStrategy;
      }(__varRecorder__$l.LivelyVmEvalStrategy);
      __varRecorder__$l.RemoteEvalStrategy = RemoteEvalStrategy;

      var HttpEvalStrategy = exports('H', /*#__PURE__*/function (_varRecorder__$Remot) {
        _inherits(HttpEvalStrategy, _varRecorder__$Remot);

        var _super4 = _createSuper(HttpEvalStrategy);

        _createClass(HttpEvalStrategy, null, [{
          key: "defaultURL",
          get: function get() {
            return "http://localhost:3000/lively";
          }
        }]);

        function HttpEvalStrategy(url) {
          var _this2;

          _classCallCheck(this, HttpEvalStrategy);

          _this2 = _super4.call(this);
          _this2.url = url || _this2.constructor.defaultURL;
          return _this2;
        }

        _createClass(HttpEvalStrategy, [{
          key: "normalizeOptions",
          value: function normalizeOptions(options) {
            options = _get(_getPrototypeOf(HttpEvalStrategy.prototype), "normalizeOptions", this).call(this, options);
            return Object.assign({
              serverEvalURL: this.url
            }, options, {
              context: null
            });
          }
        }, {
          key: "basicRemoteEval",
          value: function () {
            var _basicRemoteEval2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(source, options) {
              var method;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      options = this.normalizeOptions(options);
                      method = "basicRemoteEval_" + (System.get("@system-env").node ? "node" : "web");
                      _context11.next = 4;
                      return this[method]({
                        method: "POST",
                        body: source
                      }, options.serverEvalURL);

                    case 4:
                      return _context11.abrupt("return", _context11.sent);

                    case 5:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));

            function basicRemoteEval(_x21, _x22) {
              return _basicRemoteEval2.apply(this, arguments);
            }

            return basicRemoteEval;
          }()
        }, {
          key: "basicRemoteEval_web",
          value: function () {
            var _basicRemoteEval_web = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(payload, url) {
              var _ref, _ref2, domain, loc, crossDomain, res;

              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _ref = url.match(/[^:]+:\/\/[^\/]+/) || [url], _ref2 = _slicedToArray(_ref, 1), domain = _ref2[0];

                      if (System.get("@system-env").worker) {
                        loc = window.location;
                      } else {
                        loc = document.location;
                      }

                      crossDomain = loc.origin !== domain;

                      if (crossDomain) {
                        payload.headers = Object.assign({}, payload.headers, {
                          pragma: "no-cache",
                          "cache-control": "no-cache",
                          "x-lively-proxy-request": url
                        });
                        url = loc.origin;
                      }

                      _context12.prev = 4;
                      _context12.next = 7;
                      return window.fetch(url, payload);

                    case 7:
                      res = _context12.sent;
                      _context12.next = 13;
                      break;

                    case 10:
                      _context12.prev = 10;
                      _context12.t0 = _context12["catch"](4);
                      throw new Error("Cannot reach server at ".concat(url, ": ").concat(_context12.t0.message));

                    case 13:
                      if (res.ok) {
                        _context12.next = 15;
                        break;
                      }

                      throw new Error("Server at ".concat(url, ": ").concat(res.statusText));

                    case 15:
                      return _context12.abrupt("return", res.text());

                    case 16:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, null, [[4, 10]]);
            }));

            function basicRemoteEval_web(_x23, _x24) {
              return _basicRemoteEval_web.apply(this, arguments);
            }

            return basicRemoteEval_web;
          }()
        }, {
          key: "basicRemoteEval_node",
          value: function () {
            var _basicRemoteEval_node = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(payload, url) {
              var urlParse, http, opts;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      urlParse = System._nodeRequire("url").parse;
                      http = System._nodeRequire(url.startsWith("https:") ? "https" : "http");
                      opts = Object.assign({
                        method: payload.method || "GET"
                      }, urlParse(url));
                      return _context13.abrupt("return", new Promise(function (resolve, reject) {
                        var request = http.request(opts, function (res) {
                          res.setEncoding("utf8");
                          var data = "";
                          res.on("data", function (chunk) {
                            return data += chunk;
                          });
                          res.on("end", function () {
                            return resolve(data);
                          });
                          res.on("error", function (err) {
                            return reject(err);
                          });
                        });
                        request.on("error", function (err) {
                          return reject(err);
                        });
                        request.end(payload.body);
                      }));

                    case 4:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13);
            }));

            function basicRemoteEval_node(_x25, _x26) {
              return _basicRemoteEval_node.apply(this, arguments);
            }

            return basicRemoteEval_node;
          }()
        }]);

        return HttpEvalStrategy;
      }(__varRecorder__$l.RemoteEvalStrategy));

      __varRecorder__$l.HttpEvalStrategy = HttpEvalStrategy;

      var L2LEvalStrategy = exports('L', /*#__PURE__*/function (_varRecorder__$Remot2) {
        _inherits(L2LEvalStrategy, _varRecorder__$Remot2);

        var _super5 = _createSuper(L2LEvalStrategy);

        function L2LEvalStrategy(l2lClient, targetId) {
          var _this3;

          _classCallCheck(this, L2LEvalStrategy);

          _this3 = _super5.call(this);
          _this3.l2lClient = l2lClient;
          _this3.targetId = targetId;
          return _this3;
        }

        _createClass(L2LEvalStrategy, [{
          key: "basicRemoteEval",
          value: function () {
            var _basicRemoteEval3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(source, options) {
              var l2lClient, targetId, _yield$l2lClient$send, evalResult;

              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      l2lClient = this.l2lClient, targetId = this.targetId;
                      _context14.next = 3;
                      return l2lClient.sendToAndWait(targetId, "remote-eval", {
                        source: source
                      }, {
                        ackTimeout: options.ackTimeout || 3500
                      });

                    case 3:
                      _yield$l2lClient$send = _context14.sent;
                      evalResult = _yield$l2lClient$send.data;

                      if (evalResult && evalResult.value && evalResult.value.isEvalResult) {
                        evalResult = evalResult.value;
                      }

                      return _context14.abrupt("return", evalResult);

                    case 7:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));

            function basicRemoteEval(_x27, _x28) {
              return _basicRemoteEval3.apply(this, arguments);
            }

            return basicRemoteEval;
          }()
        }]);

        return L2LEvalStrategy;
      }(__varRecorder__$l.RemoteEvalStrategy));

      __varRecorder__$l.L2LEvalStrategy = L2LEvalStrategy;
      __varRecorder__$l.EvalStrategy = EvalStrategy;
      __varRecorder__$l.SimpleEvalStrategy = SimpleEvalStrategy;
      __varRecorder__$l.LivelyVmEvalStrategy = LivelyVmEvalStrategy;
      __varRecorder__$l.HttpEvalStrategy = HttpEvalStrategy;
      __varRecorder__$l.L2LEvalStrategy = L2LEvalStrategy;

      var evalStrategies = /*#__PURE__*/Object.freeze({
        __proto__: null,
        RemoteEvalStrategy: RemoteEvalStrategy,
        EvalStrategy: EvalStrategy,
        SimpleEvalStrategy: SimpleEvalStrategy,
        LivelyVmEvalStrategy: LivelyVmEvalStrategy,
        HttpEvalStrategy: HttpEvalStrategy,
        L2LEvalStrategy: L2LEvalStrategy
      });

      var __varRecorder__$k = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.vm/index.js", __contextModule__);

      var __moduleMeta__$f = {
        pathInPackage: function pathInPackage() {
          return "./index.js";
        },
        unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
          return function () {};
        },
        subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
          return function () {};
        },
        "package": function _package() {
          return {
            name: "lively.vm",
            version: "0.9.18"
          };
        }
      };

      var runEval = exports('b', __varRecorder__$k["lively.vm/index.js__define__"]("runEval", "function", function (code, options) {
        var _options = options = Object.assign({
          format: "esm",
          System: null,
          targetModule: null
        }, options),
            format = _options.format,
            S = _options.System,
            targetModule = _options.targetModule;

        if (!S && typeof System !== "undefined") S = System;

        if (!S && targetModule) {
          return Promise.reject(new Error("options to runEval have targetModule but cannot find system loader!"));
        }

        return targetModule && ["esm", "es6", "register"].includes(format) ? runEval$1(S, code, options) : runEval$2(code, options);
      }, __moduleMeta__$f));

      __varRecorder__$k.runEval = runEval;

      var syncEval = exports('K', __varRecorder__$k["lively.vm/index.js__define__"]("syncEval", "function", function (code, options) {
        return syncEval$1(code, options);
      }, __moduleMeta__$f));

      __varRecorder__$k.syncEval = syncEval;
      __varRecorder__$k.completions = completions;
      __varRecorder__$k.defaultTopLevelVarRecorderName = defaultTopLevelVarRecorderName;
      __varRecorder__$k.defaultClassToFunctionConverterName = defaultClassToFunctionConverterName;
      __varRecorder__$k.evalCodeTransform = evalCodeTransform;
      __varRecorder__$k.evalCodeTransformOfSystemRegisterSetters = evalCodeTransformOfSystemRegisterSetters;
      __varRecorder__$k.runEval = runEval;
      __varRecorder__$k.syncEval = syncEval;
      __varRecorder__$k.evalStrategies = evalStrategies;

      var index$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        completions: completions,
        defaultTopLevelVarRecorderName: defaultTopLevelVarRecorderName,
        defaultClassToFunctionConverterName: defaultClassToFunctionConverterName,
        evalCodeTransform: evalCodeTransform,
        evalCodeTransformOfSystemRegisterSetters: evalCodeTransformOfSystemRegisterSetters,
        runEval: runEval,
        syncEval: syncEval,
        evalStrategies: evalStrategies
      });
      exports('R', index$1);

      var __varRecorder__$j = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.classes/class-to-function-transform.js", __contextModule__);

      var __moduleMeta__$e = {
        pathInPackage: function pathInPackage() {
          return "./class-to-function-transform.js";
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

      var isFunctionNode = __varRecorder__$j["lively.classes/class-to-function-transform.js__define__"]("isFunctionNode", "function", function (node) {
        return node.type === "ArrowFunctionExpression" || node.type === "FunctionExpression" || node.type === "FunctionDeclaration";
      }, __moduleMeta__$e);

      __varRecorder__$j.isFunctionNode = isFunctionNode;

      var ensureIdentifier = __varRecorder__$j["lively.classes/class-to-function-transform.js__define__"]("ensureIdentifier", "function", function (name) {
        return name.replace(__varRecorder__$j.firstIdRe, "_").replace(__varRecorder__$j.trailingIdRe, "_");
      }, __moduleMeta__$e);

      __varRecorder__$j.ensureIdentifier = ensureIdentifier;

      var classFieldsInitialization = __varRecorder__$j["lively.classes/class-to-function-transform.js__define__"]("classFieldsInitialization", "function", function (nodes) {
        return nodes.map(function (_ref) {
          var key = _ref.key,
              value = _ref.value;
          var name = key.name;
          if (key.type === "PrivateIdentifier") name = "_" + name;
          return __varRecorder__$j.assign(__varRecorder__$j.member("this", name), value);
        });
      }, __moduleMeta__$e);

      __varRecorder__$j.classFieldsInitialization = classFieldsInitialization;

      var constructorTemplate = __varRecorder__$j["lively.classes/class-to-function-transform.js__define__"]("constructorTemplate", "function", function (name, fields) {
        return __varRecorder__$j.funcExpr({
          id: name ? __varRecorder__$j.id(name) : null
        }, ["__first_arg__"], __varRecorder__$j.ifStmt(__varRecorder__$j.binaryExpr(__varRecorder__$j.id("__first_arg__"), "&&", __varRecorder__$j.member("__first_arg__", __varRecorder__$j.funcCall(__varRecorder__$j.member("Symbol", "for"), __varRecorder__$j.literal("lively-instance-restorer")), true)), __varRecorder__$j.block(), __varRecorder__$j.block.apply(__varRecorder__$j, _toConsumableArray(__varRecorder__$j.classFieldsInitialization(fields)).concat([__varRecorder__$j.returnStmt(__varRecorder__$j.funcCall(__varRecorder__$j.member(__varRecorder__$j.member("this", __varRecorder__$j.funcCall(__varRecorder__$j.member("Symbol", "for"), __varRecorder__$j.literal("lively-instance-initialize")), true), "apply"), __varRecorder__$j.id("this"), __varRecorder__$j.id("arguments")))]))));
      }, __moduleMeta__$e);

      __varRecorder__$j.constructorTemplate = constructorTemplate;

      var splitExportDefaultWithClass = __varRecorder__$j["lively.classes/class-to-function-transform.js__define__"]("splitExportDefaultWithClass", "function", function (node, classHolder, path, options) {
        return !node.declaration || !node.declaration[__varRecorder__$j.isTransformedClassVarDeclSymbol] ? node : [node.declaration, {
          declaration: node.declaration.declarations[0].id,
          type: "ExportDefaultDeclaration"
        }];
      }, __moduleMeta__$e);

      __varRecorder__$j.splitExportDefaultWithClass = splitExportDefaultWithClass;

      var replaceSuper = __varRecorder__$j["lively.classes/class-to-function-transform.js__define__"]("replaceSuper", "function", function (node, state, path, options) {
        console.assert(node.type === "Super");
        var currentMethod = state.currentMethod;

        if (!currentMethod) {
          console.warn("[lively.classes] Trying to transform es6 class but got super call outside a method! ".concat(stringify(node), " in ").concat(path.join(".")));
        }

        var _path$slice = path.slice(-2),
            _path$slice2 = _slicedToArray(_path$slice, 2),
            parentReferencedAs = _path$slice2[0],
            referencedAs = _path$slice2[1];

        if (parentReferencedAs === "callee" && referencedAs === "object" || referencedAs === "callee") {
          return node;
        }

        var methodHolder = currentMethod && currentMethod[__varRecorder__$j.methodKindSymbol] === "static" ? __varRecorder__$j.funcCall(__varRecorder__$j.member("Object", "getPrototypeOf"), __varRecorder__$j.id(__varRecorder__$j.tempLivelyClassVar)) : __varRecorder__$j.funcCall(__varRecorder__$j.member("Object", "getPrototypeOf"), __varRecorder__$j.member(__varRecorder__$j.id(__varRecorder__$j.tempLivelyClassVar), "prototype"));
        return methodHolder;
      }, __moduleMeta__$e);

      __varRecorder__$j.replaceSuper = replaceSuper;

      var replaceSuperMethodCall = __varRecorder__$j["lively.classes/class-to-function-transform.js__define__"]("replaceSuperMethodCall", "function", function (node, state, path, options) {
        console.assert(node.type === "CallExpression");
        console.assert(node.callee.object.type === "Super");
        return __varRecorder__$j.funcCall.apply(__varRecorder__$j, [__varRecorder__$j.member(__varRecorder__$j.funcCall(__varRecorder__$j.member(options.functionNode, "_get"), __varRecorder__$j.replaceSuper(node.callee.object, state, path.concat(["callee", "object"]), options), __varRecorder__$j.literal(node.callee.property.value || node.callee.property.name), __varRecorder__$j.id("this")), "call"), __varRecorder__$j.id("this")].concat(_toConsumableArray(node.arguments)));
      }, __moduleMeta__$e);

      __varRecorder__$j.replaceSuperMethodCall = replaceSuperMethodCall;

      var replaceDirectSuperCall = __varRecorder__$j["lively.classes/class-to-function-transform.js__define__"]("replaceDirectSuperCall", "function", function (node, state, path, options) {
        console.assert(node.type === "CallExpression");
        console.assert(node.callee.type === "Super");

        var f = __varRecorder__$j.funcCall.apply(__varRecorder__$j, [__varRecorder__$j.member(__varRecorder__$j.funcCall(__varRecorder__$j.member(options.functionNode, "_get"), __varRecorder__$j.replaceSuper(node.callee, state, path.concat(["callee"]), options), __varRecorder__$j.funcCall(__varRecorder__$j.member("Symbol", "for"), __varRecorder__$j.literal("lively-instance-initialize")), __varRecorder__$j.id("this")), "call"), __varRecorder__$j.id("this")].concat(_toConsumableArray(node.arguments)));

        return __varRecorder__$j.assign(__varRecorder__$j.id("_this"), f);
      }, __moduleMeta__$e);

      __varRecorder__$j.replaceDirectSuperCall = replaceDirectSuperCall;

      var replaceSuperGetter = __varRecorder__$j["lively.classes/class-to-function-transform.js__define__"]("replaceSuperGetter", "function", function (node, state, path, options) {
        console.assert(node.type === "MemberExpression");
        console.assert(node.object.type === "Super");
        return __varRecorder__$j.funcCall(__varRecorder__$j.member(options.functionNode, "_get"), __varRecorder__$j.replaceSuper(node.object, state, path.concat(["object"]), options), __varRecorder__$j.literal(node.property.value || node.property.name), __varRecorder__$j.id("this"));
      }, __moduleMeta__$e);

      __varRecorder__$j.replaceSuperGetter = replaceSuperGetter;

      var replaceSuperSetter = __varRecorder__$j["lively.classes/class-to-function-transform.js__define__"]("replaceSuperSetter", "function", function (node, state, path, options) {
        console.assert(node.type === "AssignmentExpression");
        console.assert(node.left.object.type === "Super");
        return __varRecorder__$j.funcCall(__varRecorder__$j.member(options.functionNode, "_set"), __varRecorder__$j.replaceSuper(node.left.object, state, path.concat(["left", "object"]), options), __varRecorder__$j.literal(node.left.property.value || node.left.property.name), node.right, __varRecorder__$j.id("this"));
      }, __moduleMeta__$e);

      __varRecorder__$j.replaceSuperSetter = replaceSuperSetter;

      var checkForDirectSuperCall = __varRecorder__$j["lively.classes/class-to-function-transform.js__define__"]("checkForDirectSuperCall", "function", function (body) {
        return queryNodes(body, "// CallExpression [ /:callee '*' [ type() ==  'Super']]").length > 0;
      }, __moduleMeta__$e);

      __varRecorder__$j.checkForDirectSuperCall = checkForDirectSuperCall;

      var insertThisReturn = __varRecorder__$j["lively.classes/class-to-function-transform.js__define__"]("insertThisReturn", "function", function (functionBody) {
        if (!__varRecorder__$j.checkForDirectSuperCall(functionBody)) {
          return functionBody;
        }

        return Object.assign({}, functionBody, {
          body: [__varRecorder__$j.varDecl(__varRecorder__$j.id("_this"))].concat(_toConsumableArray(functionBody.body), [__varRecorder__$j.returnStmt(__varRecorder__$j.id("_this"))])
        });
      }, __moduleMeta__$e);

      __varRecorder__$j.insertThisReturn = insertThisReturn;

      var replaceClass = __varRecorder__$j["lively.classes/class-to-function-transform.js__define__"]("replaceClass", "function", function (node, state, path, options) {
        console.assert(node.type === "ClassDeclaration" || node.type === "ClassExpression");
        var body = node.body.body,
            superClass = node.superClass,
            classId = node.id,
            type = node.type,
            start = node.start,
            end = node.end;
        var _options$addClassName = options.addClassNameGetter,
            addClassNameGetter = _options$addClassName === void 0 ? true : _options$addClassName;

        var instanceProps = __varRecorder__$j.id("undefined");

        var classProps = __varRecorder__$j.id("undefined");

        var className = classId ? classId.name : "anonymous_class";
        var evalId = options.evalId;
        var sourceAccessorName = options.sourceAccessorName;
        var loc = node["x-lively-object-meta"] || {
          start: start,
          end: end
        };
        var validMemberIdentifiers = ["Literal", "Identifier", "PrivateIdentifier", "MemberExpression", "CallExpression"];

        var _body$reduce = body.reduce(function (props, propNode) {
          var decl;
          var key = propNode.key,
              kind = propNode.kind,
              value = propNode.value,
              classSide = propNode["static"],
              type = propNode.type;

          if (!validMemberIdentifiers.includes(key.type)) {
            console.warn("Unexpected key in classToFunctionTransform! ".concat(JSON.stringify(key), " -> ").concat(stringify(propNode)));
          }

          if (kind === "method") {
            var isMemberExpr = key.type === "MemberExpression";
            var methodName = key.name || key.value || Path("property.name").get(key);
            var methodId;

            if (isMemberExpr) {
              methodId = __varRecorder__$j.id(className + "_" + stringify(key.property).replaceAll(".", "_") + "_");
            } else methodId = __varRecorder__$j.id(className + "_" + __varRecorder__$j.ensureIdentifier(methodName || Path("arguments.0.value").get(key)) + "_");

            var _props = ["key", !isMemberExpr && methodName ? __varRecorder__$j.literal(methodName) : key, "value", Object.assign({}, value, _defineProperty({
              id: methodId
            }, __varRecorder__$j.methodKindSymbol, classSide ? "static" : "proto"))];
            decl = __varRecorder__$j.objectLiteral(_props);
          } else if (kind === "get" || kind === "set") {
            decl = __varRecorder__$j.objectLiteral(["key", __varRecorder__$j.literal(key.name || key.value || Path("property.name").get(key)), kind, Object.assign({}, value, _defineProperty({
              id: __varRecorder__$j.id(kind)
            }, __varRecorder__$j.methodKindSymbol, classSide ? "static" : "proto"))]);
          } else if (kind === "constructor") {
            var _Object$assign3;

            var _props2 = ["key", __varRecorder__$j.funcCall(__varRecorder__$j.member("Symbol", "for"), __varRecorder__$j.literal("lively-instance-initialize")), "value", Object.assign({}, value, (_Object$assign3 = {
              id: __varRecorder__$j.id(className + "_initialize_")
            }, _defineProperty(_Object$assign3, __varRecorder__$j.methodKindSymbol, "proto"), _defineProperty(_Object$assign3, "body", __varRecorder__$j.insertThisReturn(value.body)), _Object$assign3))];
            decl = __varRecorder__$j.objectLiteral(_props2);
          } else if (type === "PropertyDefinition") {
            props.fields.push(propNode);
          } else {
            console.warn("[lively.classes] classToFunctionTransform encountered unknown class property with kind ".concat(kind, ", ignoring it, ").concat(JSON.stringify(propNode), " -> ").concat(stringify(propNode)));
          }

          if (decl) (classSide ? props.clazz : props.inst).push(decl);
          return props;
        }, {
          inst: [],
          fields: [],
          clazz: addClassNameGetter ? [parse("({ key: Symbol.for(\"__LivelyClassName__\"), get: function get() { return \"".concat(className, "\"; } })")).body[0].expression] : []
        }),
            inst = _body$reduce.inst,
            clazz = _body$reduce.clazz,
            fields = _body$reduce.fields;

        if (inst.length) instanceProps = {
          type: "ArrayExpression",
          elements: inst
        };
        if (clazz.length) classProps = {
          type: "ArrayExpression",
          elements: clazz
        };
        var scope = options.scope;
        var superClassReferencedAs;
        var superClassRef;

        if (superClass && options.currentModuleAccessor) {
          if (options.classHolder === superClass.object) {
            superClassRef = superClass;
            superClassReferencedAs = superClass.property.name;
          } else {
            var found = scope && scope.resolvedRefMap && scope.resolvedRefMap.get(superClass);
            var isTopLevel = found && found.decl && scope.decls && scope.decls.find(function (_ref2) {
              var _ref3 = _slicedToArray(_ref2, 1),
                  decl = _ref3[0];

              return decl === found.decl;
            });

            if (isTopLevel) {
              superClassRef = superClass;
              superClassReferencedAs = superClass.name;
            }
          }
        }

        var superClassSpec = superClassRef ? __varRecorder__$j.objectLiteral(["referencedAs", __varRecorder__$j.literal(superClassReferencedAs), "value", superClassRef]) : superClass || __varRecorder__$j.id("undefined");
        var _options$useClassHold = options.useClassHolder,
            useClassHolder = _options$useClassHold === void 0 ? classId && (type === "ClassDeclaration" || type === "ClassExpression") : _options$useClassHold;
        var locKeyVals = ["start", __varRecorder__$j.literal(loc.start), "end", __varRecorder__$j.literal(loc.end)];
        if (typeof evalId !== "undefined") locKeyVals.push("evalId", __varRecorder__$j.literal(evalId));
        if (sourceAccessorName) locKeyVals.push("moduleSource", id(sourceAccessorName));

        var locNode = __varRecorder__$j.objectLiteral(locKeyVals);

        var classCreator = __varRecorder__$j.funcCall(__varRecorder__$j.funcExpr({}, ["superclass"], __varRecorder__$j.varDecl(__varRecorder__$j.tempLivelyClassHolderVar, state.classHolder), __varRecorder__$j.varDecl(__varRecorder__$j.tempLivelyClassVar, useClassHolder ? {
          type: "ConditionalExpression",
          test: __varRecorder__$j.binaryExpr(__varRecorder__$j.funcCall(__varRecorder__$j.member(__varRecorder__$j.tempLivelyClassHolderVar, "hasOwnProperty"), __varRecorder__$j.literal(classId.name)), "&&", __varRecorder__$j.binaryExpr({
            argument: __varRecorder__$j.member(__varRecorder__$j.tempLivelyClassHolderVar, classId),
            operator: "typeof",
            prefix: true,
            type: "UnaryExpression"
          }, "===", __varRecorder__$j.literal("function"))),
          consequent: __varRecorder__$j.member(__varRecorder__$j.tempLivelyClassHolderVar, classId),
          alternate: __varRecorder__$j.assign(__varRecorder__$j.member(__varRecorder__$j.tempLivelyClassHolderVar, classId), __varRecorder__$j.constructorTemplate(classId.name, fields))
        } : classId ? __varRecorder__$j.constructorTemplate(classId.name, fields) : __varRecorder__$j.constructorTemplate(null, fields)), __varRecorder__$j.ifStmt(__varRecorder__$j.funcCall(__varRecorder__$j.member(__varRecorder__$j.id("Object"), __varRecorder__$j.id("isFrozen")), __varRecorder__$j.id(__varRecorder__$j.tempLivelyClassHolderVar)), __varRecorder__$j.block(__varRecorder__$j.returnStmt(__varRecorder__$j.id(__varRecorder__$j.tempLivelyClassVar))), false), __varRecorder__$j.returnStmt(__varRecorder__$j.funcCall(options.functionNode, __varRecorder__$j.id(__varRecorder__$j.tempLivelyClassVar), __varRecorder__$j.id("superclass"), instanceProps, classProps, useClassHolder ? __varRecorder__$j.id(__varRecorder__$j.tempLivelyClassHolderVar) : __varRecorder__$j.id("null"), options.currentModuleAccessor || __varRecorder__$j.id("undefined"), locNode))), superClassSpec);

        if (type === "ClassExpression") return classCreator;
        var result = classCreator;

        if (options.declarationWrapper && state.classHolder === options.classHolder) {
          result = __varRecorder__$j.funcCall(options.declarationWrapper, __varRecorder__$j.literal(classId.name), __varRecorder__$j.literal("class"), result, options.classHolder, locNode);
        }

        result = __varRecorder__$j.varDecl(classId, result, "var");
        result[__varRecorder__$j.isTransformedClassVarDeclSymbol] = true;
        return result;
      }, __moduleMeta__$e);

      __varRecorder__$j.replaceClass = replaceClass;

      var replacePrivateIdentifier = __varRecorder__$j["lively.classes/class-to-function-transform.js__define__"]("replacePrivateIdentifier", "function", function (node) {
        return Object.assign({}, node, {
          type: "Identifier",
          name: "_" + node.name
        });
      }, __moduleMeta__$e);

      __varRecorder__$j.replacePrivateIdentifier = replacePrivateIdentifier;

      var classToFunctionTransform = exports('c', __varRecorder__$j["lively.classes/class-to-function-transform.js__define__"]("classToFunctionTransform", "function", function (sourceOrAst, options) {
        var parsed = typeof sourceOrAst === "string" ? parse(sourceOrAst) : sourceOrAst;
        options.scope = resolveReferences(scopes(parsed));

        var replaced = __varRecorder__$j.ClassReplaceVisitor.run(parsed, options);

        return replaced;
      }, __moduleMeta__$e));

      __varRecorder__$j.classToFunctionTransform = classToFunctionTransform;
      var destructured_1$1 = nodes;
      __varRecorder__$j.assign = destructured_1$1.assign;
      __varRecorder__$j.member = destructured_1$1.member;
      __varRecorder__$j.id = destructured_1$1.id;
      __varRecorder__$j.funcCall = destructured_1$1.funcCall;
      __varRecorder__$j.literal = destructured_1$1.literal;
      __varRecorder__$j.objectLiteral = destructured_1$1.objectLiteral;
      __varRecorder__$j.varDecl = destructured_1$1.varDecl;
      __varRecorder__$j.funcExpr = destructured_1$1.funcExpr;
      __varRecorder__$j.returnStmt = destructured_1$1.returnStmt;
      __varRecorder__$j.binaryExpr = destructured_1$1.binaryExpr;
      __varRecorder__$j.ifStmt = destructured_1$1.ifStmt;
      __varRecorder__$j.block = destructured_1$1.block;
      __varRecorder__$j.firstIdRe = /^[^_a-z]/i;
      __varRecorder__$j.trailingIdRe = /[^_a-z0-9]/ig;
      __varRecorder__$j.isTransformedClassVarDeclSymbol = Symbol();
      __varRecorder__$j.methodKindSymbol = Symbol();
      __varRecorder__$j.tempLivelyClassVar = "__lively_class__";
      __varRecorder__$j.tempLivelyClassHolderVar = "__lively_classholder__";

      var ClassReplaceVisitor = /*#__PURE__*/function (_Visitor) {
        _inherits(ClassReplaceVisitor, _Visitor);

        var _super = _createSuper(ClassReplaceVisitor);

        function ClassReplaceVisitor() {
          _classCallCheck(this, ClassReplaceVisitor);

          return _super.apply(this, arguments);
        }

        _createClass(ClassReplaceVisitor, [{
          key: "accept",
          value: function accept(node, state, path) {
            var _node$init, _node$init2, _node$right, _node$right2;

            if (__varRecorder__$j.isFunctionNode(node)) {
              state = Object.assign({}, state, {
                classHolder: __varRecorder__$j.objectLiteral([]),
                currentMethod: node[__varRecorder__$j.methodKindSymbol] ? node : state.currentMethod
              });
            }

            if (node.type === "ClassExpression" || node.type === "ClassDeclaration") {
              if (node._skipClassHolder) state.options.useClassHolder = false;
              node = __varRecorder__$j.replaceClass(node, state, path, state.options);
              delete state.options.useClassHolder;
            }

            if (node.type === "VariableDeclarator" && (((_node$init = node.init) === null || _node$init === void 0 ? void 0 : _node$init.type) === "ClassExpression" || ((_node$init2 = node.init) === null || _node$init2 === void 0 ? void 0 : _node$init2.type) === "ClassDeclaration")) {
              node.init._skipClassHolder = true;
            }

            if (node.type === "AssignmentExpression" && (((_node$right = node.right) === null || _node$right === void 0 ? void 0 : _node$right.type) === "ClassExpression" || ((_node$right2 = node.right) === null || _node$right2 === void 0 ? void 0 : _node$right2.type) === "ClassDeclaration")) {
              node.right._skipClassHolder = true;
            }

            if (node.type === "PrivateIdentifier") node = __varRecorder__$j.replacePrivateIdentifier(node);

            if (node.type === "Super") {
              node = __varRecorder__$j.replaceSuper(node, state, path, state.options);
            }

            if (node.type === "MemberExpression" && node.object && node.object.type === "Super") {
              node = __varRecorder__$j.replaceSuperGetter(node, state, path, state.options);
            }

            if (node.type === "AssignmentExpression" && node.left.type === "MemberExpression" && node.left.object.type === "Super") {
              node = __varRecorder__$j.replaceSuperSetter(node, state, path, state.options);
            }

            if (node.type === "CallExpression" && node.callee.type === "Super") {
              node = __varRecorder__$j.replaceDirectSuperCall(node, state, path, state.options);
            }

            if (node.type === "CallExpression" && node.callee.object && node.callee.object.type === "Super") {
              node = __varRecorder__$j.replaceSuperMethodCall(node, state, path, state.options);
            }

            node = _get(_getPrototypeOf(ClassReplaceVisitor.prototype), "accept", this).call(this, node, state, path);

            if (node.type === "ExportDefaultDeclaration") {
              return __varRecorder__$j.splitExportDefaultWithClass(node, state, path, state.options);
            }

            return node;
          }
        }], [{
          key: "run",
          value: function run(parsed, options) {
            var v = new this();

            var classHolder = options.classHolder || __varRecorder__$j.objectLiteral([]);

            return v.accept(parsed, {
              options: options,
              classHolder: classHolder
            }, []);
          }
        }]);

        return ClassReplaceVisitor;
      }(Visitor);

      __varRecorder__$j.ClassReplaceVisitor = ClassReplaceVisitor;
      __varRecorder__$j.classToFunctionTransform = classToFunctionTransform;

      var __varRecorder__$i = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.classes/index.js", __contextModule__);
      __varRecorder__$i.runtime = runtime;
      __varRecorder__$i.classToFunctionTransform = classToFunctionTransform;

      var index = /*#__PURE__*/Object.freeze({
        __proto__: null,
        runtime: runtime,
        classToFunctionTransform: classToFunctionTransform
      });
      exports('S', index);

      var __varRecorder__$h = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.modules/src/dependencies.js", __contextModule__);

      var __moduleMeta__$d = {
        pathInPackage: function pathInPackage() {
          return "./src/dependencies.js";
        },
        unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
          return function () {};
        },
        subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
          return function () {};
        },
        "package": function _package() {
          return {
            name: "lively.modules",
            version: "0.8.38"
          };
        }
      };

      var computeRequireMap = __varRecorder__$h["lively.modules/src/dependencies.js__define__"]("computeRequireMap", "function", function (System) {
        if (System.loads) {
          var store = System.loads;
          var modNames = uniq(Object.keys(loadedModules$1(System)).concat(Object.keys(store)));
          return modNames.reduce(function (requireMap, k) {
            var depMap = store[k] ? store[k].depMap : {};
            requireMap[k] = Object.keys(depMap).map(function (localName) {
              var resolvedName = depMap[localName];
              if (resolvedName === "@empty") return "".concat(resolvedName, "/").concat(localName);
              return resolvedName;
            });
            return requireMap;
          }, {});
        }

        return Object.keys(System._loader.moduleRecords).reduce(function (requireMap, k) {
          requireMap[k] = System._loader.moduleRecords[k].dependencies.filter(Boolean).map(function (ea) {
            return ea.name;
          });
          return requireMap;
        }, {});
      }, __moduleMeta__$d);

      __varRecorder__$h.computeRequireMap = computeRequireMap;
      __varRecorder__$h.computeRequireMap = computeRequireMap;

      var __varRecorder__$g = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.modules/src/import-export.js", __contextModule__);

      var __moduleMeta__$c = {
        pathInPackage: function pathInPackage() {
          return "./src/import-export.js";
        },
        unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
          return function () {};
        },
        subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
          return function () {};
        },
        "package": function _package() {
          return {
            name: "lively.modules",
            version: "0.8.38"
          };
        }
      };

      var scheduleModuleExportsChange = __varRecorder__$g["lively.modules/src/import-export.js__define__"]("scheduleModuleExportsChange", "function", function (System, moduleId, nameOrValues, value, addNewExport) {
        var pendingExportChanges = System.get("@lively-env").pendingExportChanges;
        var rec = module$3(System, moduleId).record();

        if (rec && (nameOrValues in rec.exports || addNewExport)) {
          var pending = pendingExportChanges[moduleId] || (pendingExportChanges[moduleId] = {});

          if (isString(nameOrValues)) {
            pending[nameOrValues] = value;
          } else {
            for (var name in nameOrValues) {
              pending[name] = nameOrValues[name];
            }
          }
        }
      }, __moduleMeta__$c);

      __varRecorder__$g.scheduleModuleExportsChange = scheduleModuleExportsChange;

      var clearPendingModuleExportChanges = __varRecorder__$g["lively.modules/src/import-export.js__define__"]("clearPendingModuleExportChanges", "function", function (System, moduleId) {
        var pendingExportChanges = System.get("@lively-env").pendingExportChanges;
        delete pendingExportChanges[moduleId];
      }, __moduleMeta__$c);

      __varRecorder__$g.clearPendingModuleExportChanges = clearPendingModuleExportChanges;

      var updateModuleExports = __varRecorder__$g["lively.modules/src/import-export.js__define__"]("updateModuleExports", "function", function (System, moduleId, keysAndValues) {
        var debug = System.debug;
        module$3(System, moduleId).updateRecord(function (record) {
          var newExports = [];
          var existingExports = [];
          Object.keys(keysAndValues).forEach(function (name) {
            var value = keysAndValues[name];
            debug && console.log("[lively.vm es6 updateModuleExports] %s export %s = %s", moduleId, name, String(value).slice(0, 30).replace(/\n/g, "") + "...");
            var isNewExport = !(name in record.exports);
            if (isNewExport) record.__lively_modules__.evalOnlyExport[name] = true;
            record.exports[name] = value;
            if (isNewExport) newExports.push(name);else existingExports.push(name);
          });

          if (newExports.length) {
            var m = System.get(moduleId);

            if (Object.isFrozen(m)) {
              console.warn("[lively.vm es6 updateModuleExports] Since module %s is frozen a new module object was installed in the system. Note that only(!) exisiting module bindings are updated. New exports that were added will only be available in already loaded modules after those are reloaded!", moduleId);
              System.set(moduleId, System.newModule(record.exports));
            } else {
              debug && console.log("[lively.vm es6 updateModuleExports] adding new exports to %s", moduleId);
              newExports.forEach(function (name) {
                Object.defineProperty(m, name, {
                  configurable: false,
                  enumerable: true,
                  get: function get() {
                    return record.exports[name];
                  },
                  set: function set() {
                    throw new Error("exports cannot be changed from the outside");
                  }
                });
              });
            }
          }

          if (existingExports.length) {
            debug && console.log("[lively.vm es6 updateModuleExports] updating %s dependents of %s", record.importers.length, moduleId);

            for (var i = 0, l = record.importers.length; i < l; i++) {
              var importerModule = record.importers[i];
              var importerIndex = void 0;

              if (!importerModule.locked) {
                var found = importerModule.dependencies.some(function (dep, i) {
                  importerIndex = i;
                  return dep && dep.name === record.name;
                });

                if (found) {
                  if (debug) {
                    var mod = module$3(System, importerModule.name);
                    console.log("[lively.vm es6 updateModuleExports] calling setters of ".concat(mod["package"]().name, "/").concat(mod.pathInPackage()));
                  }

                  module$3(System, importerModule.name).evaluationStart();
                  importerModule.setters[importerIndex](record.exports);
                  module$3(System, importerModule.name).evaluationEnd();
                }
              }
            }
          }
        });
      }, __moduleMeta__$c);

      __varRecorder__$g.updateModuleExports = updateModuleExports;

      var runScheduledExportChanges = __varRecorder__$g["lively.modules/src/import-export.js__define__"]("runScheduledExportChanges", "function", function (System, moduleId) {
        var pendingExportChanges = System.get("@lively-env").pendingExportChanges;
        var keysAndValues = pendingExportChanges[moduleId];
        if (!keysAndValues) return;

        __varRecorder__$g.clearPendingModuleExportChanges(System, moduleId);

        __varRecorder__$g.updateModuleExports(System, moduleId, keysAndValues);
      }, __moduleMeta__$c);

      __varRecorder__$g.runScheduledExportChanges = runScheduledExportChanges;
      __varRecorder__$g.scheduleModuleExportsChange = scheduleModuleExportsChange;
      __varRecorder__$g.runScheduledExportChanges = runScheduledExportChanges;

      var __varRecorder__$f = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.modules/src/change.js", __contextModule__);

      var __moduleMeta__$b = {
        pathInPackage: function pathInPackage() {
          return "./src/change.js";
        },
        unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
          return function () {};
        },
        subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
          return function () {};
        },
        "package": function _package() {
          return {
            name: "lively.modules",
            version: "0.8.38"
          };
        }
      };

      var moduleSourceChangeEsm = __varRecorder__$f["lively.modules/src/change.js__define__"]("moduleSourceChangeEsm", "function", /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(System, moduleId, newSource, options) {
          var debug, load, updateData, _exports, declared, deps, _iterator, _step, depName, depId, depModule, exports, prevLoad, mod, record;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  debug = System.debug;
                  load = {
                    status: "loading",
                    source: newSource,
                    name: moduleId,
                    address: moduleId,
                    linkSets: [],
                    dependencies: [],
                    metadata: {
                      format: "esm"
                    }
                  };
                  _context.next = 4;
                  return instrumentSourceOfEsmModuleLoad(System, load);

                case 4:
                  updateData = _context.sent;

                  _exports = function _exports(name, val) {
                    return scheduleModuleExportsChange(System, load.name, name, val, true);
                  };

                  declared = updateData.declare(_exports);
                  debug && console.log("[lively.vm es6] sourceChange of %s with deps", load.name, updateData.localDeps);
                  deps = [];
                  _iterator = _createForOfIteratorHelper(updateData.localDeps);
                  _context.prev = 10;

                  _iterator.s();

                case 12:
                  if ((_step = _iterator.n()).done) {
                    _context.next = 24;
                    break;
                  }

                  depName = _step.value;
                  _context.next = 16;
                  return System.normalize(depName, load.name);

                case 16:
                  depId = _context.sent;
                  depModule = classHolder.module(System, depId);
                  _context.next = 20;
                  return depModule.load();

                case 20:
                  exports = _context.sent;
                  deps.push({
                    name: depName,
                    fullname: depId,
                    module: depModule,
                    exports: exports
                  });

                case 22:
                  _context.next = 12;
                  break;

                case 24:
                  _context.next = 29;
                  break;

                case 26:
                  _context.prev = 26;
                  _context.t0 = _context["catch"](10);

                  _iterator.e(_context.t0);

                case 29:
                  _context.prev = 29;

                  _iterator.f();

                  return _context.finish(29);

                case 32:
                  prevLoad = System.loads && System.loads[load.name];

                  if (prevLoad) {
                    prevLoad.deps = deps.map(function (ea) {
                      return ea.name;
                    });
                    prevLoad.depMap = deps.reduce(function (map, dep) {
                      map[dep.name] = dep.fullname;
                      return map;
                    }, {});

                    if (prevLoad.metadata && prevLoad.metadata.entry) {
                      prevLoad.metadata.entry.deps = prevLoad.deps;
                      prevLoad.metadata.entry.normalizedDeps = deps.map(function (ea) {
                        return ea.fullname;
                      });
                      prevLoad.metadata.entry.declare = updateData.declare;
                    }
                  }

                  mod = classHolder.module(System, load.name);
                  record = mod.record();
                  deps.forEach(function (ea, i) {
                    return mod.addDependencyToModuleRecord(ea.module, declared.setters[i]);
                  });
                  if (record) record.execute = declared.execute;
                  deps.forEach(function (d, i) {
                    return declared.setters[i](d.exports);
                  });
                  return _context.abrupt("return", declared.execute());

                case 40:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[10, 26, 29, 32]]);
        }));

        return function (_x, _x2, _x3, _x4) {
          return _ref.apply(this, arguments);
        };
      }(), __moduleMeta__$b);

      __varRecorder__$f.moduleSourceChangeEsm = moduleSourceChangeEsm;

      var doInstantiateGlobalModule = __varRecorder__$f["lively.modules/src/change.js__define__"]("doInstantiateGlobalModule", "function", function (System, load) {
        var entry = __varRecorder__$f.__createEntry();

        entry.name = load.name;
        entry.esmExports = true;
        load.metadata.entry = entry;
        entry.deps = [];

        for (var g in load.metadata.globals) {
          var gl = load.metadata.globals[g];

          if (gl) {
            entry.deps.push(gl);
          }
        }

        entry.execute = function executeGlobalModule(require, exports, m) {
          var prevMeta = classHolder.module(System, m.id).metadata();
          exports = prevMeta && prevMeta.entry && prevMeta.entry.module && prevMeta.entry.module.exports;

          if (exports) {
            Object.keys(exports).forEach(function (name) {
              try {
                delete System.global[name];
              } catch (e) {
                console.warn("[lively.modules] executeGlobalModule: Cannot delete global[\"".concat(name, "\"]"));
              }
            });
          }

          var globals;

          if (load.metadata.globals) {
            globals = {};

            for (var _g in load.metadata.globals) {
              if (load.metadata.globals[_g]) {
                globals[_g] = require(load.metadata.globals[_g]);
              }
            }
          }

          var exportName = load.metadata.exports;

          if (exportName) {
            load.source += "\nSystem.global[\"".concat(exportName, "\"] = ").concat(exportName, ";");
          }

          var retrieveGlobal = System.get("@@global-helpers").prepareGlobal(m.id, exportName, globals);

          __varRecorder__$f.__evaluateGlobalLoadSource(System, load);

          return retrieveGlobal();
        };

        return __varRecorder__$f.runExecuteOfGlobalModule(System, entry);
      }, __moduleMeta__$b);

      __varRecorder__$f.doInstantiateGlobalModule = doInstantiateGlobalModule;

      var moduleSourceChangeGlobal = __varRecorder__$f["lively.modules/src/change.js__define__"]("moduleSourceChangeGlobal", "function", /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(System, moduleId, newSource, options) {
          var load, updateData, entry;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  load = {
                    status: "loading",
                    source: newSource,
                    name: moduleId,
                    address: moduleId,
                    linkSets: [],
                    dependencies: [],
                    metadata: {
                      format: "global"
                    }
                  };

                  if (System.get(moduleId)) {
                    _context2.next = 4;
                    break;
                  }

                  _context2.next = 4;
                  return Promise.resolve().then(function () { return change; });

                case 4:
                  _context2.next = 6;
                  return instrumentSourceOfGlobalModuleLoad(System, load);

                case 6:
                  updateData = _context2.sent;
                  load.source = updateData.translated;
                  entry = __varRecorder__$f.doInstantiateGlobalModule(System, load);
                  System["delete"](moduleId);
                  System.set(entry.name, entry.esModule);
                  return _context2.abrupt("return", entry.module);

                case 12:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x5, _x6, _x7, _x8) {
          return _ref2.apply(this, arguments);
        };
      }(), __moduleMeta__$b);

      __varRecorder__$f.moduleSourceChangeGlobal = moduleSourceChangeGlobal;

      var moduleSourceChange$1 = __varRecorder__$f["lively.modules/src/change.js__define__"]("moduleSourceChange", "function", /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(System, moduleId, newSource, format, options) {
          var changeResult;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.prev = 0;
                  System.debug && console.log("[module change] ".concat(moduleId, " ").concat(newSource.slice(0, 50).replace(/\n/g, ""), " ").concat(format));

                  if (!(!format || format === "es6" || format === "esm" || format === "register" || format === "defined")) {
                    _context3.next = 8;
                    break;
                  }

                  _context3.next = 5;
                  return __varRecorder__$f.moduleSourceChangeEsm(System, moduleId, newSource, options);

                case 5:
                  changeResult = _context3.sent;
                  _context3.next = 15;
                  break;

                case 8:
                  if (!(format === "global")) {
                    _context3.next = 14;
                    break;
                  }

                  _context3.next = 11;
                  return __varRecorder__$f.moduleSourceChangeGlobal(System, moduleId, newSource, options);

                case 11:
                  changeResult = _context3.sent;
                  _context3.next = 15;
                  break;

                case 14:
                  throw new Error("moduleSourceChange is not supported for module ".concat(moduleId, " with format ").concat(format));

                case 15:
                  emit("lively.modules/modulechanged", {
                    module: moduleId,
                    newSource: newSource,
                    options: options
                  }, Date.now(), System);
                  return _context3.abrupt("return", changeResult);

                case 19:
                  _context3.prev = 19;
                  _context3.t0 = _context3["catch"](0);
                  emit("lively.modules/modulechanged", {
                    module: moduleId,
                    newSource: newSource,
                    error: _context3.t0,
                    options: options
                  }, Date.now(), System);
                  throw _context3.t0;

                case 23:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, null, [[0, 19]]);
        }));

        return function (_x9, _x10, _x11, _x12, _x13) {
          return _ref3.apply(this, arguments);
        };
      }(), __moduleMeta__$b);

      __varRecorder__$f.moduleSourceChange = moduleSourceChange$1;

      var __createEntry = __varRecorder__$f["lively.modules/src/change.js__define__"]("__createEntry", "function", function () {
        return {
          name: null,
          deps: null,
          originalIndices: null,
          declare: null,
          execute: null,
          executingRequire: false,
          declarative: false,
          normalizedDeps: null,
          groupIndex: null,
          evaluated: false,
          module: null,
          esModule: null,
          esmExports: false
        };
      }, __moduleMeta__$b);

      __varRecorder__$f.__createEntry = __createEntry;

      var __evaluateGlobalLoadSource = __varRecorder__$f["lively.modules/src/change.js__define__"]("__evaluateGlobalLoadSource", "function", function (System, load) {
        var curSystem;
        var callCounter = 0;
        var __global = System.global;
        return __exec.call(System, load);

        function preExec(loader, load) {
          if (callCounter++ === 0) {
            curSystem = __global.System;
          }

          __global.System = __global.SystemJS = loader;
        }

        function postExec() {
          if (--callCounter === 0) {
            __global.System = __global.SystemJS = curSystem;
          }
        }

        function __exec(load) {
          try {
            preExec(this, load);
            (0, eval)(load.source);
            postExec();
          } catch (e) {
            postExec();
            throw new Error("Error evaluating ".concat(load.address, ":\n").concat(e.stack));
          }
        }
      }, __moduleMeta__$b);

      __varRecorder__$f.__evaluateGlobalLoadSource = __evaluateGlobalLoadSource;

      var runExecuteOfGlobalModule = __varRecorder__$f["lively.modules/src/change.js__define__"]("runExecuteOfGlobalModule", "function", function (System, entry) {
        var exports = {};
        var module = entry.module = {
          exports: exports,
          id: entry.name
        };
        entry.evaluated = true;
        var output = entry.execute.call(System.global, function (name) {
          var dep = entry.deps.find(function (dep) {
            return dep === name;
          });
          var loadedDep = dep && System.get(entry.normalizedDeps[entry.deps.indexOf(dep)]) || System.get(System.decanonicalize(name, entry.name));
          if (loadedDep) return loadedDep;
          throw new Error("Module " + name + " not declared as a dependency of " + entry.name);
        }, exports, module);

        if (output) {
          module.exports = output;
        }

        exports = module.exports;
        var Module = Object.getPrototypeOf(System.get("@system-env"));
        if (exports && (exports.__esModule || Object.getPrototypeOf(exports) === Module)) entry.esModule = exports;else if (entry.esmExports && exports !== System.global) entry.esModule = System.newModule(exports);else entry.esModule = {
          "default": exports
        };
        return entry;
      }, __moduleMeta__$b);

      __varRecorder__$f.runExecuteOfGlobalModule = runExecuteOfGlobalModule;
      __varRecorder__$f.moduleSourceChange = moduleSourceChange$1;

      var change = /*#__PURE__*/Object.freeze({
        __proto__: null,
        moduleSourceChange: moduleSourceChange$1
      });

      var __varRecorder__$e = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.modules/src/url-helpers.js", __contextModule__);

      var __moduleMeta__$a = {
        pathInPackage: function pathInPackage() {
          return "./src/url-helpers.js";
        },
        unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
          return function () {};
        },
        subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
          return function () {};
        },
        "package": function _package() {
          return {
            name: "lively.modules",
            version: "0.8.38"
          };
        }
      };

      var isJsFile = __varRecorder__$e["lively.modules/src/url-helpers.js__define__"]("isJsFile", "function", function (url) {
        return /\.js/i.test(url);
      }, __moduleMeta__$a);

      __varRecorder__$e.isJsFile = isJsFile;

      var asDir = __varRecorder__$e["lively.modules/src/url-helpers.js__define__"]("asDir", "function", function (url) {
        return __varRecorder__$e.isJsFile(url) ? url.replace(/\/[^\/]*$/, "") : url.replace(/\/$/, "");
      }, __moduleMeta__$a);

      __varRecorder__$e.asDir = asDir;

      var isURL = __varRecorder__$e["lively.modules/src/url-helpers.js__define__"]("isURL", "function", function (string) {
        return /^[^:\\]+:\/\//.test(string);
      }, __moduleMeta__$a);

      __varRecorder__$e.isURL = isURL;

      var urlResolve = __varRecorder__$e["lively.modules/src/url-helpers.js__define__"]("urlResolve", "function", function (url) {
        var urlMatch = url.match(/^([^:]+:\/\/)(.*)/);
        if (!urlMatch) return url;
        var protocol = urlMatch[1];
        var path = urlMatch[2];
        var result = path;

        do {
          path = result;
          result = path.replace(/\/[^\/]+\/\.\./, "");
        } while (result !== path);

        result = result.replace(/(^|[^:])[\/]+/g, "$1/");
        result = result.replace(/\/\.\//g, "/");
        return protocol + result;
      }, __moduleMeta__$a);

      __varRecorder__$e.urlResolve = urlResolve;
      __varRecorder__$e.isJsFile = isJsFile;
      __varRecorder__$e.asDir = asDir;
      __varRecorder__$e.join = joinPath;
      var join = exports('j', __varRecorder__$e.join);
      __varRecorder__$e.join = join;
      __varRecorder__$e.isURL = isURL;
      __varRecorder__$e.urlResolve = urlResolve;

      var __varRecorder__$d = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.modules/src/packages/configuration.js", __contextModule__);

      var PackageConfiguration = /*#__PURE__*/function () {
        function PackageConfiguration(pkg) {
          _classCallCheck(this, PackageConfiguration);

          this.pkg = pkg;
        }

        _createClass(PackageConfiguration, [{
          key: "applyConfig",
          value: function applyConfig(config) {
            var System = this.System,
                packageURL = this.packageURL,
                pkg = this.pkg;
            config = deepMerge(pkg.config, config);
            var name = config.name || packageURL.split("/").slice(-1)[0];
            var version = config.version;
            var sysConfig = config.systemjs || {};
            var livelyConfig = config.lively;
            var main = config.main || "index.js";
            if (!main.endsWith(".js")) main += ".js";
            System.config({
              map: _defineProperty({}, name, packageURL),
              packages: _defineProperty({}, packageURL, Object.assign({
                main: main
              }, sysConfig, {
                meta: Object.assign({
                  "package.json": {
                    format: "json"
                  },
                  "*.cjs": {
                    defaultExtension: false
                  }
                }, sysConfig.meta),
                configured: true
              }))
            });
            System.CONFIG.packages[packageURL].configured = true;
            var packageInSystem = System.getConfig().packages[packageURL] || {};
            if (!packageInSystem.map) packageInSystem.map = {};

            if (sysConfig) {
              if (livelyConfig && livelyConfig.main) main = livelyConfig.main;else if (sysConfig.main) main = sysConfig.main;
              this.applySystemJSConfig(sysConfig);
            }

            if (!main.match(/\.[^\/\.]+/)) main += ".js";
            packageInSystem.main = main;
            pkg.version = version;
            pkg.config = config;
            pkg._name = name;
            pkg.mergeWithConfig(packageInSystem);
            return livelyConfig ? this.applyLivelyConfig(livelyConfig) : {
              subPackages: []
            };
          }
        }, {
          key: "applySystemJSConfig",
          value: function applySystemJSConfig(sysConfig) {
            var System = this.System;

            if (sysConfig.packageConfigPaths) {
              System.config({
                packageConfigPaths: uniq(System.packageConfigPaths.concat(sysConfig.packageConfigPaths))
              });
            }

            if (sysConfig.packages) {
              System.config({
                packages: sysConfig.packages
              });
            }

            if (sysConfig.globalmap) {
              System.config({
                map: sysConfig.globalmap
              });
            }

            if (sysConfig.babelOptions) {
              System.config({
                babelOptions: sysConfig.babelOptions
              });
            }

            if (sysConfig.meta) {
              System.config({
                meta: sysConfig.meta
              });
            }
          }
        }, {
          key: "applyLivelyConfig",
          value: function applyLivelyConfig(livelyConfig) {
            this.applyLivelyConfigMeta(livelyConfig);
            this.applyLivelyConfigHooks(livelyConfig);
            this.applyLivelyConfigBundles(livelyConfig);
          }
        }, {
          key: "applyLivelyConfigHooks",
          value: function applyLivelyConfigHooks(livelyConfig) {
            var _this = this;

            (livelyConfig.hooks || []).forEach(function (h) {
              try {
                var f = eval("(" + h.source + ")");

                if (!f.name || !isInstalled(_this.System, h.target, f.name)) {
                  install(_this.System, h.target, f);
                }
              } catch (e) {
                console.error("Error installing hook for %s: %s", _this.packageURL, e, h);
              }
            });
          }
        }, {
          key: "applyLivelyConfigBundles",
          value: function applyLivelyConfigBundles(livelyConfig) {
            var _this2 = this;

            if (!livelyConfig.bundles) return Promise.resolve();
            var normalized = Object.keys(livelyConfig.bundles).reduce(function (bundles, name) {
              var absName = _this2.packageURL + "/" + name;
              var files = livelyConfig.bundles[name].map(function (f) {
                return _this2.System.decanonicalize(f, _this2.packageURL + "/");
              });
              bundles[absName] = files;
              return bundles;
            }, {});
            this.System.config({
              bundles: normalized
            });
            return Promise.resolve();
          }
        }, {
          key: "applyLivelyConfigMeta",
          value: function applyLivelyConfigMeta(livelyConfig) {
            if (!livelyConfig.meta) return;
            var pConf = this.System.getConfig().packages[this.packageURL] || {};
            var c = {
              meta: {},
              packages: _defineProperty({}, this.packageURL, pConf)
            };
            Object.keys(livelyConfig.meta).forEach(function (key) {
              var val = livelyConfig.meta[key];

              if (isURL(key)) {
                c.meta[key] = val;
              } else {
                if (!pConf.meta) pConf.meta = {};
                pConf.meta[key] = val;
              }
            });
            this.System.config(c);
          }
        }, {
          key: "System",
          get: function get() {
            return this.pkg.System;
          }
        }, {
          key: "packageURL",
          get: function get() {
            return this.pkg.url;
          }
        }]);

        return PackageConfiguration;
      }();
      __varRecorder__$d.PackageConfiguration = PackageConfiguration;
      __varRecorder__$d["default"] = PackageConfiguration;

      var __varRecorder__$c = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.modules/src/packages/package.js", __contextModule__);

      var __moduleMeta__$9 = {
        pathInPackage: function pathInPackage() {
          return "./src/packages/package.js";
        },
        unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
          return function () {};
        },
        subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
          return function () {};
        },
        "package": function _package() {
          return {
            name: "lively.modules",
            version: "0.8.38"
          };
        }
      };

      var packagesConfig = exports('D', __varRecorder__$c["lively.modules/src/packages/package.js__define__"]("packagesConfig", "function", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var config;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                config = System.decanonicalize("lively.installer/packages-config.json");
                _context.t0 = JSON;
                _context.next = 4;
                return resource(config).read();

              case 4:
                _context.t1 = _context.sent;
                return _context.abrupt("return", _context.t0.parse.call(_context.t0, _context.t1));

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })), __moduleMeta__$9));

      __varRecorder__$c.packagesConfig = packagesConfig;

      var normalizePackageURL = __varRecorder__$c["lively.modules/src/packages/package.js__define__"]("normalizePackageURL", "function", function (System, packageURL) {
        var allPackageURLs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        if (allPackageURLs.some(function (ea) {
          return ea === packageURL;
        })) return packageURL;
        var url = System.decanonicalize(packageURL.replace(/[\/]+$/, "") + "/");

        if (!isURL(url)) {
          throw new Error("Strange package URL: ".concat(url, " is not a valid URL"));
        }

        if (!url.match(/\.js/)) url = url;else if (url.indexOf(url + ".js") > -1) url = url.replace(/\.js$/, "");else url = url.split("/").slice(0, -1).join("/");

        if (url.match(/\.js$/)) {
          console.warn("packageURL is expected to point to a directory but seems to be a .js file: " + url);
        }

        return String(url).replace(/\/$/, "");
      }, __moduleMeta__$9);

      __varRecorder__$c.normalizePackageURL = normalizePackageURL;

      var lookupPackage$1 = __varRecorder__$c["lively.modules/src/packages/package.js__define__"]("lookupPackage", "function", function (System, packageURL) {
        var isNormalized = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var registry = classHolder.PackageRegistry.ofSystem(System);
        var allPackageURLs = registry.allPackageURLs();
        var url = isNormalized ? packageURL : __varRecorder__$c.normalizePackageURL(System, packageURL, allPackageURLs);
        return {
          pkg: registry.findPackageWithURL(url),
          url: url,
          allPackageURLs: allPackageURLs,
          registry: registry
        };
      }, __moduleMeta__$9);

      __varRecorder__$c.lookupPackage = lookupPackage$1;

      var ensurePackage$1 = __varRecorder__$c["lively.modules/src/packages/package.js__define__"]("ensurePackage", "function", function (System, packageURL) {
        var isNormalized = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        var _varRecorder__$looku = __varRecorder__$c.lookupPackage(System, packageURL, isNormalized),
            pkg = _varRecorder__$looku.pkg,
            url = _varRecorder__$looku.url,
            registry = _varRecorder__$looku.registry;

        return pkg || registry.addPackageAt(url, "devPackageDirs");
      }, __moduleMeta__$9);

      __varRecorder__$c.ensurePackage = ensurePackage$1;

      var getPackage$1 = __varRecorder__$c["lively.modules/src/packages/package.js__define__"]("getPackage", "function", function (System, packageURL) {
        var isNormalized = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        var _varRecorder__$looku2 = __varRecorder__$c.lookupPackage(System, packageURL, isNormalized),
            pkg = _varRecorder__$looku2.pkg,
            url = _varRecorder__$looku2.url;

        if (pkg) return pkg;
        throw new Error("[getPackage] package ".concat(packageURL, " (as ").concat(url, ") not found"));
      }, __moduleMeta__$9);

      __varRecorder__$c.getPackage = getPackage$1;

      var applyConfig = __varRecorder__$c["lively.modules/src/packages/package.js__define__"]("applyConfig", "function", function (System, packageConfig, packageURL) {
        var p = __varRecorder__$c.getPackage(System, packageURL);

        return p.updateConfig(packageConfig);
      }, __moduleMeta__$9);

      __varRecorder__$c.applyConfig = applyConfig;

      var importPackage$1 = __varRecorder__$c["lively.modules/src/packages/package.js__define__"]("importPackage", "function", function (System, packageURL) {
        return Promise.resolve(__varRecorder__$c.ensurePackage(System, packageURL)).then(function (p) {
          return p["import"]();
        });
      }, __moduleMeta__$9);

      __varRecorder__$c.importPackage = importPackage$1;

      var removePackage$1 = __varRecorder__$c["lively.modules/src/packages/package.js__define__"]("removePackage", "function", function (System, packageURL) {
        var _varRecorder__$looku3 = __varRecorder__$c.lookupPackage(System, packageURL),
            pkg = _varRecorder__$looku3.pkg;

        return pkg ? pkg.remove() : null;
      }, __moduleMeta__$9);

      __varRecorder__$c.removePackage = removePackage$1;

      var reloadPackage$1 = exports('r', __varRecorder__$c["lively.modules/src/packages/package.js__define__"]("reloadPackage", "function", function (System, packageURL, opts) {
        return __varRecorder__$c.getPackage(System, packageURL).reload(opts);
      }, __moduleMeta__$9));

      __varRecorder__$c.reloadPackage = reloadPackage$1;

      var registerPackage$1 = __varRecorder__$c["lively.modules/src/packages/package.js__define__"]("registerPackage", "function", function (System, packageURL, optPkgConfig) {
        return Promise.resolve(__varRecorder__$c.ensurePackage(System, packageURL)).then(function (p) {
          return p.register(optPkgConfig);
        });
      }, __moduleMeta__$9);

      __varRecorder__$c.registerPackage = registerPackage$1;

      var getPackageSpecs = __varRecorder__$c["lively.modules/src/packages/package.js__define__"]("getPackageSpecs", "function", function (System) {
        return __varRecorder__$c.Package.allPackages(System).map(function (p) {
          return p.asSpec();
        });
      }, __moduleMeta__$9);

      __varRecorder__$c.getPackageSpecs = getPackageSpecs;
      __varRecorder__$c.packagesConfig = packagesConfig;

      var Package = /*#__PURE__*/function () {
        _createClass(Package, null, [{
          key: "allPackages",
          value: function allPackages(System) {
            return values(classHolder.PackageRegistry.ofSystem(System).byURL);
          }
        }, {
          key: "allPackageURLs",
          value: function allPackageURLs(System) {
            return classHolder.PackageRegistry.ofSystem(System).allPackageURLs();
          }
        }, {
          key: "forModule",
          value: function forModule(System, module) {
            return this.forModuleId(System, module.id);
          }
        }, {
          key: "forModuleId",
          value: function forModuleId(System, moduleId) {
            var pAddress = classHolder.ModulePackageMapping.forSystem(System).getPackageURLForModuleId(moduleId);
            return pAddress ? __varRecorder__$c.getPackage(System, pAddress, true) : null;
          }
        }, {
          key: "fromJSON",
          value: function fromJSON(System, jso) {
            return new __varRecorder__$c.Package(System).fromJSON(jso);
          }
        }]);

        function Package(System, packageURL, name, version) {
          var config = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

          _classCallCheck(this, Package);

          this.System = System;
          this.url = packageURL;
          this.registerProcess = null;
          this.map = {};
          this.setConfig(config);
        }

        _createClass(Package, [{
          key: "setConfig",
          value: function setConfig(config) {
            this._name = config.name;
            this.version = config.version;
            this.dependencies = config.dependencies || {};
            this.devDependencies = config.devDependencies || {};
            this.main = config.main || "index.js";
            this.systemjs = config.systemjs;
            this.lively = config.lively;
            this.author = config.author;
            this.description = config.description;
            this.isFork = config.isFork;
          }
        }, {
          key: "toJSON",
          value: function toJSON() {
            var System = this.System;
            var jso = select(this, ["url", "_name", "version", "map", "dependencies", "devDependencies", "main", "systemjs", "lively", "author", "description", "isFork"]);

            if (jso.url.startsWith(System.baseURL)) {
              jso.url = jso.url.slice(System.baseURL.length).replace(/^\//, "");
            }

            return jso;
          }
        }, {
          key: "fromJSON",
          value: function fromJSON(jso) {
            var System = this.System;
            this.url = jso.url;
            this._name = jso._name;
            this.version = jso.version;
            this.map = jso.map || {};
            this.main = jso.main;
            this.dependencies = jso.dependencies || {};
            this.devDependencies = jso.devDependencies || {};
            this.systemjs = jso.systemjs;
            this.description = jso.description;
            this.author = jso.author;
            this.isFork = jso.isFork;
            this.lively = jso.lively;

            if (!isURL(this.url)) {
              this.url = join(System.baseURL, this.url);
            }

            this.registerWithConfig();
            return this;
          }
        }, {
          key: "asSpec",
          value: function asSpec() {
            return Object.assign({}, select(this, ["name", "main", "map", "meta", "url", "address", "version", "lively"]), {
              modules: this.modules().map(function (m) {
                return {
                  name: m.id,
                  deps: m.directRequirements().map(function (ea) {
                    return ea.id;
                  })
                };
              })
            });
          }
        }, {
          key: "path",
          value: function path() {
            var base = this.System.baseURL;
            return this.url.indexOf(base) === 0 ? this.url.slice(base.length) : this.url;
          }
        }, {
          key: "modules",
          value: function modules() {
            var url = this.url,
                System = this.System;
            return classHolder.ModulePackageMapping.forSystem(System).getModuleIdsForPackageURL(url).map(function (id) {
              return module$3(System, id);
            });
          }
        }, {
          key: "resources",
          value: function () {
            var _resources = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(matches) {
              var _this = this;

              var exclude,
                  System,
                  url,
                  allPackages,
                  packagesToIgnore,
                  dirList,
                  resourceURLs,
                  loadedModules,
                  _args2 = arguments;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      exclude = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : [".git", "node_modules", ".module_cache", "lively.next-node_modules"];
                      System = this.System, url = this.url;
                      allPackages = __varRecorder__$c.Package.allPackageURLs(System);
                      packagesToIgnore = allPackages.filter(function (purl) {
                        return purl !== url && !url.startsWith(purl);
                      });
                      _context2.next = 6;
                      return resource(url).dirList("infinity", {
                        exclude: exclude
                      });

                    case 6:
                      dirList = _context2.sent;
                      resourceURLs = dirList.filter(function (ea) {
                        return !ea.isDirectory() && !packagesToIgnore.some(function (purl) {
                          return ea.url.startsWith(purl);
                        });
                      }).map(function (ea) {
                        return ea.url;
                      });
                      loadedModules = pluck$1(this.modules(), "id");
                      if (matches) resourceURLs = resourceURLs.filter(matches);
                      return _context2.abrupt("return", resourceURLs.map(function (resourceURL) {
                        var nameInPackage = resourceURL.replace(url, "").replace(/^\//, "");
                        var isLoaded = loadedModules.includes(resourceURL);
                        return {
                          isLoaded: isLoaded,
                          url: resourceURL,
                          nameInPackage: nameInPackage,
                          "package": _this
                        };
                      }));

                    case 11:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function resources(_x) {
              return _resources.apply(this, arguments);
            }

            return resources;
          }()
        }, {
          key: "hasResource",
          value: function hasResource(urlOrLocalName) {
            var packageURL = this.url;
            var res = urlOrLocalName.startsWith(packageURL) ? resource(urlOrLocalName) : resource(packageURL).join(urlOrLocalName);
            return res.exists();
          }
        }, {
          key: "toString",
          value: function toString() {
            return "Package(".concat(this.name, " - ").concat(this.path(), "/)");
          }
        }, {
          key: "mergeWithConfig",
          value: function mergeWithConfig(config) {
            config = Object.assign({}, config);
            var _config = config,
                name = _config.name,
                map = _config.map;

            if (name) {
              delete config.name;
              this._name = name;
            }

            if (map) {
              delete config.map;
              Object.assign(this.map, map);
            }

            Object.assign(this, config);
            return this;
          }
        }, {
          key: "addMapping",
          value: function addMapping(name, url) {
            this.map[name] = url;
            this.System.config({
              packages: _defineProperty({}, this.url, {
                map: _defineProperty({}, name, url)
              })
            });
          }
        }, {
          key: "tryToLoadPackageConfig",
          value: function () {
            var _tryToLoadPackageConfig = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var System, url, packageConfigURL, config, packageConfigPaths, name;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      System = this.System, url = this.url;
                      packageConfigURL = url + "/package.json";
                      System.config({
                        meta: _defineProperty({}, packageConfigURL, {
                          format: "json"
                        }),
                        packages: _defineProperty({}, url, {
                          meta: {
                            "package.json": {
                              format: "json"
                            }
                          }
                        })
                      });
                      System.debug && console.log("[lively.modules package reading config] %s", packageConfigURL);
                      _context3.prev = 4;
                      _context3.t0 = System.get(packageConfigURL);

                      if (_context3.t0) {
                        _context3.next = 10;
                        break;
                      }

                      _context3.next = 9;
                      return System["import"](packageConfigURL);

                    case 9:
                      _context3.t0 = _context3.sent;

                    case 10:
                      config = _context3.t0;
                      if (config.__useDefault) config = config["default"];
                      packageConfigPaths = _toConsumableArray(System.packageConfigPaths);
                      pushIfNotIncluded(packageConfigPaths, packageConfigURL);
                      System.config({
                        packageConfigPaths: packageConfigPaths
                      });
                      return _context3.abrupt("return", config);

                    case 18:
                      _context3.prev = 18;
                      _context3.t1 = _context3["catch"](4);
                      console.log("[lively.modules package] Unable loading package config %s for package: ", packageConfigURL, _context3.t1);
                      delete System.meta[packageConfigURL];
                      name = url.split("/").slice(-1)[0];
                      return _context3.abrupt("return", {
                        name: name
                      });

                    case 24:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[4, 18]]);
            }));

            function tryToLoadPackageConfig() {
              return _tryToLoadPackageConfig.apply(this, arguments);
            }

            return tryToLoadPackageConfig;
          }()
        }, {
          key: "import",
          value: function () {
            var _import2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var url, System, mainModule, exported, p;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.register();

                    case 2:
                      url = this.url, System = this.System;
                      _context4.t0 = module$3;
                      _context4.t1 = System;
                      _context4.next = 7;
                      return System.normalize(url);

                    case 7:
                      _context4.t2 = _context4.sent;
                      mainModule = (0, _context4.t0)(_context4.t1, _context4.t2);
                      _context4.next = 11;
                      return System["import"](mainModule.id);

                    case 11:
                      exported = _context4.sent;
                      p = deferred();
                      mainModule.whenLoaded(p.resolve);
                      _context4.next = 16;
                      return p.promise;

                    case 16:
                      return _context4.abrupt("return", exported);

                    case 17:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function _import() {
              return _import2.apply(this, arguments);
            }

            return _import;
          }()
        }, {
          key: "isRegistering",
          value: function isRegistering() {
            return !!this.registerProcess;
          }
        }, {
          key: "register",
          value: function () {
            var _register = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(optPkgConfig) {
              var System, url, registerP, cfg;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      if (!this.isRegistering()) {
                        _context5.next = 2;
                        break;
                      }

                      return _context5.abrupt("return", this.registerProcess.promise);

                    case 2:
                      System = this.System, url = this.url;
                      this.registerProcess = deferred();
                      registerP = this.registerProcess.promise;
                      System.debug && console.log("[lively.modules package register] %s", url);
                      _context5.prev = 6;
                      _context5.t0 = optPkgConfig;

                      if (_context5.t0) {
                        _context5.next = 12;
                        break;
                      }

                      _context5.next = 11;
                      return this.tryToLoadPackageConfig();

                    case 11:
                      _context5.t0 = _context5.sent;

                    case 12:
                      cfg = _context5.t0;
                      this.registerWithConfig(cfg);
                      this.registerProcess.resolve(cfg);
                      _context5.next = 21;
                      break;

                    case 17:
                      _context5.prev = 17;
                      _context5.t1 = _context5["catch"](6);
                      this.registerProcess.reject(_context5.t1);
                      throw _context5.t1;

                    case 21:
                      _context5.prev = 21;
                      delete this.registerProcess;
                      return _context5.finish(21);

                    case 24:
                      return _context5.abrupt("return", registerP);

                    case 25:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this, [[6, 17, 21, 24]]);
            }));

            function register(_x2) {
              return _register.apply(this, arguments);
            }

            return register;
          }()
        }, {
          key: "updateConfig",
          value: function updateConfig(config) {
            config = Object.assign({}, this.runtimeConfig, {}, config);
            var name = this.name,
                version = this.version;
            var _config2 = config,
                newName = _config2.name,
                newVersion = _config2.version;
            new PackageConfiguration(this).applyConfig(config);

            if (name !== config.name || version !== config.version) {
              console.log("[lively.modules] Updating registry ".concat(name, "@").concat(version, " => ").concat(newName, "@").concat(newVersion));
              var registry = classHolder.PackageRegistry.ofSystem(this.System);
              registry.updateNameAndVersionOf(this, name, version, newName, newVersion);
            }
          }
        }, {
          key: "registerWithConfig",
          value: function registerWithConfig() {
            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.runtimeConfig;
            var System = this.System,
                url = this.url;
            var result = new PackageConfiguration(this).applyConfig(config);
            var packageConfigURL = join(url, "package.json");

            if (!System.get(packageConfigURL)) {
              System.set(packageConfigURL, System.newModule(Object.assign({}, config, {
                "default": config
              })));
            }

            emit("lively.modules/packageregistered", {
              "package": url
            }, Date.now(), System);
            return result;
          }
        }, {
          key: "remove",
          value: function remove(opts) {
            opts = Object.assign({
              forgetEnv: true,
              forgetDeps: false,
              unloadModules: true
            }, opts);
            var System = this.System,
                url = this.url;
            url = url.replace(/\/$/, "");

            if (opts.unloadModules) {
              this.modules().forEach(function (mod) {
                return mod.unload(opts);
              });
            }

            var registry = classHolder.PackageRegistry.ofSystem(System);
            registry.removePackage(this);
            var conf = System.getConfig();
            var packageConfigURL = url + "/package.json";
            System["delete"](String(packageConfigURL));
            remove$1(conf.packageConfigPaths || [], packageConfigURL);
            System.config({
              meta: _defineProperty({}, packageConfigURL, {}),
              packages: _defineProperty({}, url, {}),
              packageConfigPaths: conf.packageConfigPaths
            });
            delete System.CONFIG.packages[url];
            emit("lively.modules/packageremoved", {
              "package": this.url
            }, Date.now(), System);
          }
        }, {
          key: "reload",
          value: function reload(opts) {
            var System = this.System,
                url = this.url;
            var registry = classHolder.PackageRegistry.ofSystem(System);
            var covered = registry.coversDirectory(url);
            this.remove(opts);
            registry.addPackageAt(url, covered || "devPackageDirs", _defineProperty({}, url, this));
            return this["import"]();
          }
        }, {
          key: "fork",
          value: function () {
            var _fork = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(newName, newURL) {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      if (!newURL) {
                        newURL = resource(this.url).join("../".concat(newName)).withRelativePartsResolved().url;
                      }

                      _context6.next = 3;
                      return this.changeAddress(newURL, newName, false);

                    case 3:
                      return _context6.abrupt("return", _context6.sent);

                    case 4:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function fork(_x3, _x4) {
              return _fork.apply(this, arguments);
            }

            return fork;
          }()
        }, {
          key: "rename",
          value: function () {
            var _rename = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(newName) {
              var newURL;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      newURL = resource(this.url).join("../".concat(newName)).withRelativePartsResolved().url;
                      _context7.next = 3;
                      return this.changeAddress(newURL, newName, true);

                    case 3:
                      return _context7.abrupt("return", _context7.sent);

                    case 4:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            function rename(_x5) {
              return _rename.apply(this, arguments);
            }

            return rename;
          }()
        }, {
          key: "changeAddress",
          value: function () {
            var _changeAddress = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(newURL) {
              var newName,
                  removeOriginal,
                  System,
                  oldURL,
                  config,
                  oldPackageDir,
                  newP,
                  newPackageDir,
                  registry,
                  covered,
                  resourceURLs,
                  modules,
                  _iterator,
                  _step,
                  m,
                  newId,
                  resourceIndex,
                  _iterator2,
                  _step2,
                  url,
                  r,
                  localName,
                  configFile,
                  c,
                  runtimeC,
                  _args8 = arguments;

              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      newName = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : null;
                      removeOriginal = _args8.length > 2 && _args8[2] !== undefined ? _args8[2] : true;
                      newURL = newURL.replace(/\/?/, "");
                      System = this.System, oldURL = this.url;
                      _context8.next = 6;
                      return this.runtimeConfig;

                    case 6:
                      config = _context8.sent;
                      oldPackageDir = resource(oldURL).asDirectory();
                      newP = new __varRecorder__$c.Package(System, newURL);
                      _context8.next = 11;
                      return resource(newURL).asDirectory();

                    case 11:
                      newPackageDir = _context8.sent;
                      config.name = newName || this.name;
                      registry = classHolder.PackageRegistry.ofSystem(System);
                      covered = registry.coversDirectory(oldURL);
                      classHolder.ModulePackageMapping.forSystem(System).clearCache();

                      if (System.CONFIG.packages[oldURL]) {
                        System.CONFIG.packages[newURL] = System.CONFIG.packages[oldURL];

                        if (removeOriginal) {
                          delete System.CONFIG.packages[oldURL];
                        }
                      }

                      Object.assign(newP, select(this, ["_name", "map", "config"]));
                      _context8.next = 20;
                      return newPackageDir.ensureExistance();

                    case 20:
                      _context8.next = 22;
                      return this.resources(undefined, []);

                    case 22:
                      _context8.t0 = function (ea) {
                        return ea.url;
                      };

                      resourceURLs = _context8.sent.map(_context8.t0);
                      modules = this.modules();
                      _iterator = _createForOfIteratorHelper(modules);
                      _context8.prev = 26;

                      _iterator.s();

                    case 28:
                      if ((_step = _iterator.n()).done) {
                        _context8.next = 42;
                        break;
                      }

                      m = _step.value;
                      newId = newPackageDir.join(m.pathInPackage()).url;

                      if (!removeOriginal) {
                        _context8.next = 36;
                        break;
                      }

                      _context8.next = 34;
                      return m.renameTo(newId);

                    case 34:
                      _context8.next = 38;
                      break;

                    case 36:
                      _context8.next = 38;
                      return m.copyTo(newId);

                    case 38:
                      resourceIndex = resourceURLs.indexOf(m.id);

                      if (resourceIndex > -1) {
                        resourceURLs.splice(resourceIndex, 1);
                      }

                    case 40:
                      _context8.next = 28;
                      break;

                    case 42:
                      _context8.next = 47;
                      break;

                    case 44:
                      _context8.prev = 44;
                      _context8.t1 = _context8["catch"](26);

                      _iterator.e(_context8.t1);

                    case 47:
                      _context8.prev = 47;

                      _iterator.f();

                      return _context8.finish(47);

                    case 50:
                      _iterator2 = _createForOfIteratorHelper(resourceURLs);
                      _context8.prev = 51;

                      _iterator2.s();

                    case 53:
                      if ((_step2 = _iterator2.n()).done) {
                        _context8.next = 61;
                        break;
                      }

                      url = _step2.value;
                      r = resource(url);
                      localName = r.relativePathFrom(oldPackageDir);
                      _context8.next = 59;
                      return r.copyTo(newPackageDir.join(localName));

                    case 59:
                      _context8.next = 53;
                      break;

                    case 61:
                      _context8.next = 66;
                      break;

                    case 63:
                      _context8.prev = 63;
                      _context8.t2 = _context8["catch"](51);

                      _iterator2.e(_context8.t2);

                    case 66:
                      _context8.prev = 66;

                      _iterator2.f();

                      return _context8.finish(66);

                    case 69:
                      if (!removeOriginal) {
                        _context8.next = 74;
                        break;
                      }

                      _context8.next = 72;
                      return this.remove({
                        forgetEnv: true,
                        forgetDeps: false
                      });

                    case 72:
                      _context8.next = 74;
                      return oldPackageDir.remove();

                    case 74:
                      if (!newName) {
                        _context8.next = 95;
                        break;
                      }

                      newP.name = newName;
                      newP.config.name = newName;
                      configFile = resource(newURL).join("package.json");
                      _context8.prev = 78;
                      _context8.next = 81;
                      return configFile.exists();

                    case 81:
                      if (!_context8.sent) {
                        _context8.next = 91;
                        break;
                      }

                      _context8.next = 84;
                      return configFile.readJson();

                    case 84:
                      c = _context8.sent;

                      if (!(c.name === this.name)) {
                        _context8.next = 89;
                        break;
                      }

                      c.name = newName;
                      _context8.next = 89;
                      return configFile.writeJson(c, true);

                    case 89:
                      runtimeC = System.get(configFile.url);

                      if (runtimeC) {
                        System.set(configFile.url, System.newModule(Object.assign({}, runtimeC, {
                          name: newName
                        })));
                      }

                    case 91:
                      _context8.next = 95;
                      break;

                    case 93:
                      _context8.prev = 93;
                      _context8.t3 = _context8["catch"](78);

                    case 95:
                      covered = covered || "individualPackageDirs";

                      if (covered === "individualPackageDirs" || covered === "devPackageDirs") {
                        registry._addPackageDir(newURL, covered, true);
                      }

                      registry._addPackageWithConfig(newP, config, newURL, covered);

                      registry.resetByURL();

                      registry._updateLatestPackages();

                      return _context8.abrupt("return", newP);

                    case 101:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this, [[26, 44, 47, 50], [51, 63, 66, 69], [78, 93]]);
            }));

            function changeAddress(_x6) {
              return _changeAddress.apply(this, arguments);
            }

            return changeAddress;
          }()
        }, {
          key: "search",
          value: function () {
            var _search = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(needle) {
              var _this2 = this;

              var options,
                  modules,
                  _args9 = arguments;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      options = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : {};

                      if (!options.includeUnloaded) {
                        _context9.next = 8;
                        break;
                      }

                      _context9.next = 4;
                      return this.resources(function (url) {
                        return url.endsWith(".js");
                      }, [".git", "node_modules", "dist", ".module_cache", "lively.next-node_modules"].concat(_toConsumableArray(options.excludedModules || [])));

                    case 4:
                      _context9.t1 = function (_ref2) {
                        var url = _ref2.url;
                        return module$3(_this2.System, url);
                      };

                      _context9.t0 = _context9.sent.map(_context9.t1);
                      _context9.next = 9;
                      break;

                    case 8:
                      _context9.t0 = this.modules().filter(function (ea) {
                        return ea.isLoaded();
                      });

                    case 9:
                      modules = _context9.t0;
                      return _context9.abrupt("return", Promise.all(modules.map(function (m) {
                        return m.search(needle, options)["catch"](function (err) {
                          console.error("Error searching module ".concat(m.name, ":\n").concat(err.stack));
                          return [];
                        });
                      })).then(function (res) {
                        return res.flat();
                      }));

                    case 11:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));

            function search(_x7) {
              return _search.apply(this, arguments);
            }

            return search;
          }()
        }, {
          key: "isPackage",
          get: function get() {
            return true;
          }
        }, {
          key: "name",
          get: function get() {
            if (this._name) return this._name;
            var config = this.System.get(this.url + "/package.json");
            if (config && config.name) return config.name;
            return last(this.url.replace(/[\/]+$/, "").split("/"));
          },
          set: function set(v) {
            return this._name = v;
          }
        }, {
          key: "nameAndVersion",
          get: function get() {
            return "".concat(this.name, "@").concat(this.version);
          }
        }, {
          key: "address",
          get: function get() {
            return this.url;
          },
          set: function set(v) {
            return this.url = v;
          }
        }, {
          key: "runtimeConfig",
          get: function get() {
            var name = this.name,
                version = this.version,
                dependencies = this.dependencies,
                devDependencies = this.devDependencies,
                main = this.main,
                systemjs = this.systemjs,
                lively = this.lively;
            var config = {
              name: name,
              version: version,
              dependencies: dependencies || {},
              devDependencies: devDependencies || {}
            };
            if (main) config.main = main;
            if (systemjs) config.systemjs = systemjs;
            if (lively) config.lively = lively;
            return config;
          }
        }]);

        return Package;
      }();

      __varRecorder__$c.Package = Package;
      __varRecorder__$c.ensurePackage = ensurePackage$1;
      __varRecorder__$c.importPackage = importPackage$1;
      __varRecorder__$c.removePackage = removePackage$1;
      __varRecorder__$c.reloadPackage = reloadPackage$1;
      __varRecorder__$c.registerPackage = registerPackage$1;
      __varRecorder__$c.getPackage = getPackage$1;
      __varRecorder__$c.lookupPackage = lookupPackage$1;
      __varRecorder__$c.applyConfig = applyConfig;
      __varRecorder__$c.getPackageSpecs = getPackageSpecs;
      __varRecorder__$c.Package = Package;

      var __varRecorder__$b = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.modules/src/import-modification.js", __contextModule__);
      var ImportInjector = exports('I', /*#__PURE__*/function () {
        _createClass(ImportInjector, null, [{
          key: "run",
          value: function run(System, intoModuleId, intoPackage, intoModuleSource, importData) {
            var alias = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;
            var optAst = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : undefined;
            return new this(System, intoModuleId, intoPackage, intoModuleSource, importData, alias, optAst).run();
          }
        }]);

        function ImportInjector(System, intoModuleId, intoPackage, intoModuleSource, importData, alias, optAst) {
          _classCallCheck(this, ImportInjector);

          this.System = System;
          this.intoModuleId = intoModuleId;
          this.intoPackage = intoPackage;
          this.intoModuleSource = intoModuleSource;
          this.fromModuleId = importData.moduleId;
          this.importData = importData;
          this.alias = alias;
          this.parsed = optAst || fuzzyParse(intoModuleSource);
        }

        _createClass(ImportInjector, [{
          key: "run",
          value: function run() {
            var newImport = this.generateImportStatement();
            var standaloneImport = newImport.standaloneImport,
                importedVarName = newImport.importedVarName;

            var _this$existingImports = this.existingImportsOfFromModule(),
                imports = _this$existingImports.imports,
                importsOfFromModule = _this$existingImports.importsOfFromModule,
                importsOfVar = _this$existingImports.importsOfVar;

            importsOfFromModule = this.importsToBeReused(importsOfFromModule, importsOfVar, newImport);

            if (importsOfVar.length) {
              return {
                status: "not modified",
                newSource: this.intoModuleSource,
                generated: "",
                importedVarName: "",
                standaloneImport: standaloneImport,
                from: importsOfVar[0].start,
                to: importsOfVar[0].end
              };
            }

            if (importsOfFromModule.length) {
              var modified = this.modifyExistingImport(importsOfFromModule, standaloneImport);
              if (modified) return modified;
            }

            var lastImport = last(takeWhile(imports, function (node, i) {
              var _imports;

              return i == 0 || node.start === ((_imports = imports[i - 1]) === null || _imports === void 0 ? void 0 : _imports.end) + 1;
            }));
            var insertPos = lastImport ? lastImport.end : 0;
            return this.insertNewImport(importsOfFromModule, standaloneImport, importedVarName, insertPos);
          }
        }, {
          key: "importsToBeReused",
          value: function importsToBeReused(importsOfFromModule, importsOfVar, newImport) {
            if (newImport.isDefault) {
              importsOfFromModule = importsOfFromModule.filter(function (ea) {
                return !ea.specifiers.some(function (spec) {
                  return spec.type === "ImportDefaultSpecifier";
                });
              });
            }

            return importsOfFromModule;
          }
        }, {
          key: "generateImportStatement",
          value: function generateImportStatement() {
            var intoModuleId = this.intoModuleId,
                fromModuleId = this.fromModuleId,
                importData = this.importData,
                intoPackage = this.intoPackage,
                alias = this.alias;
            var isDefault = importData.exported === "default";
            var varName = alias || (isDefault ? importData.local : importData.exported);
            var aliased = !isDefault && importData.exported !== varName;
            var intoPackageName = intoPackage && intoPackage.name;
            var exportPath = fromModuleId;
            var packageName = importData.packageName,
                pathInPackage = importData.pathInPackage,
                isMain = importData.isMain;
            if (isMain) exportPath = packageName;else if (intoPackageName === packageName) {
              try {
                exportPath = resource(fromModuleId).relativePathFrom(resource(intoModuleId));
                if (!exportPath.startsWith(".")) exportPath = "./" + exportPath;
              } catch (e) {
                if (packageName && packageName !== "no group" && pathInPackage) {
                  exportPath = packageName + "/" + pathInPackage;
                }
              }
            } else {
              if (packageName && packageName !== "no group" && pathInPackage) {
                exportPath = packageName + "/" + pathInPackage;
              }
            }
            return {
              isDefault: isDefault,
              standaloneImport: isDefault ? "import ".concat(varName, " from \"").concat(exportPath, "\";") : "import { ".concat(importData.exported).concat(aliased ? " as ".concat(varName) : "", " } from \"").concat(exportPath, "\";"),
              importedVarName: varName
            };
          }
        }, {
          key: "existingImportsOfFromModule",
          value: function existingImportsOfFromModule() {
            var System = this.System,
                fromModuleId = this.fromModuleId,
                intoModuleId = this.intoModuleId,
                _this$importData = this.importData,
                exported = _this$importData.exported,
                local = _this$importData.local,
                parsed = this.parsed,
                alias = this.alias;
            var isDefault = exported === "default";
            var imports = parsed.body.filter(function (_ref) {
              var type = _ref.type;
              return type === "ImportDeclaration";
            });
            var varName = isDefault ? alias || local : alias || exported;
            fromModuleId = System.decanonicalize(fromModuleId, intoModuleId);
            var importsOfFromModule = imports.filter(function (ea) {
              if (!ea.source || typeof ea.source.value !== "string") return null;
              var sourceId = System.decanonicalize(ea.source.value, intoModuleId);
              return fromModuleId === sourceId;
            });
            var importsOfImportedVar = importsOfFromModule.filter(function (ea) {
              return (ea.specifiers || []).some(function (iSpec) {
                return isDefault ? iSpec.type === "ImportDefaultSpecifier" && iSpec.local.name === varName : Path("imported.name").get(iSpec) === exported && Path("local.name").get(iSpec) === varName;
              });
            });
            return {
              imports: imports,
              importsOfFromModule: importsOfFromModule,
              importsOfVar: importsOfImportedVar
            };
          }
        }, {
          key: "modifyExistingImport",
          value: function modifyExistingImport(imports, standaloneImport) {
            var specifiers = imports.flatMap(function (_ref2) {
              var specifiers = _ref2.specifiers;
              return specifiers || [];
            });
            if (!specifiers.length) return null;

            var _arr$partition = partition(specifiers, function (_ref3) {
              var type = _ref3.type;
              return type === "ImportDefaultSpecifier";
            }),
                _arr$partition2 = _slicedToArray(_arr$partition, 2),
                _arr$partition2$ = _slicedToArray(_arr$partition2[0], 1),
                defaultSpecifier = _arr$partition2$[0],
                _arr$partition2$2 = _slicedToArray(_arr$partition2[1], 1),
                normalSpecifier = _arr$partition2$2[0];

            var alias = this.alias,
                src = this.intoModuleSource,
                _this$importData2 = this.importData,
                impName = _this$importData2.exported,
                defaultImpName = _this$importData2.local;
            var isDefault = impName === "default";
            var isNamespace = (normalSpecifier === null || normalSpecifier === void 0 ? void 0 : normalSpecifier.type) === "ImportNamespaceSpecifier";
            if (isDefault) console.assert(!!normalSpecifier, "no ImportSpecifier found");else console.assert(normalSpecifier || defaultSpecifier, "at least one kine of specifier is expected");
            var generated, pos;

            if (isNamespace) {
              return {
                status: "not modified",
                newSource: this.intoModuleSource,
                generated: "",
                importedVarName: normalSpecifier.local.name + "." + impName
              };
            }

            if (isDefault) {
              pos = src.slice(0, normalSpecifier.start).lastIndexOf("{") - 1;
              if (pos < 0) return null;
              generated = (alias || defaultImpName) + ",";
              var pre = src.slice(0, pos);
              var post = src.slice(pos);
              if (!pre.endsWith(" ") || !pre.endsWith("\n")) generated = " " + generated;
              if (!post.startsWith(" ")) generated += " ";
              return {
                status: "modified",
                newSource: "".concat(pre).concat(generated).concat(post),
                generated: generated,
                standaloneImport: standaloneImport,
                importedVarName: alias || defaultImpName,
                from: pos,
                to: pos + generated.length
              };
            }

            pos = normalSpecifier ? normalSpecifier.end : defaultSpecifier.end;
            var aliased = alias && alias !== impName;
            var namePart = aliased ? "".concat(impName, " as ").concat(alias) : impName;
            generated = normalSpecifier ? ", ".concat(namePart) : ", { ".concat(namePart, " }");
            return {
              status: "modified",
              newSource: "".concat(src.slice(0, pos)).concat(generated).concat(src.slice(pos)),
              generated: generated,
              standaloneImport: standaloneImport,
              importedVarName: aliased ? alias : impName,
              from: pos,
              to: pos + generated.length
            };
          }
        }, {
          key: "insertNewImport",
          value: function insertNewImport(importsOfFromModule, standaloneImport, importedVarName) {
            var insertPos = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

            if (importsOfFromModule && importsOfFromModule.length) {
              insertPos = last(importsOfFromModule).end;
            }

            var src = this.intoModuleSource;
            var pre = src.slice(0, insertPos);
            var post = src.slice(insertPos);
            var generated = standaloneImport;
            if (pre.length && !pre.endsWith("\n")) generated = "\n" + generated;
            if (post.length && !post.startsWith("\n")) generated += "\n";
            return {
              status: "modified",
              newSource: pre + generated + post,
              generated: generated,
              standaloneImport: standaloneImport,
              importedVarName: importedVarName,
              from: insertPos,
              to: insertPos + generated.length
            };
          }
        }]);

        return ImportInjector;
      }());
      __varRecorder__$b.ImportInjector = ImportInjector;
      var GlobalInjector = exports('G', /*#__PURE__*/function () {
        function GlobalInjector() {
          _classCallCheck(this, GlobalInjector);
        }

        _createClass(GlobalInjector, null, [{
          key: "getGlobals",
          value: function getGlobals(src, optAst) {
            var parsed = optAst || fuzzyParse(src, {
              withComments: true
            });
            var globalComment = parsed.comments ? parsed.comments.find(function (c) {
              return c.isBlock && c.text.match(/^\s*global/);
            }) : null;
            var declaredGlobals = globalComment ? globalComment.text.replace(/^\s*global\s*/, "").split(",").map(function (ea) {
              return ea.trim();
            }).filter(Boolean) : [];
            var knownGlobals$1 = [].concat(_toConsumableArray(declaredGlobals), _toConsumableArray(knownGlobals));
            var undefinedVariables = findGlobalVarRefs(parsed, {
              jslintGlobalComment: true
            }).filter(function (ea) {
              return !knownGlobals$1.includes(ea.name);
            }).map(function (ea) {
              return ea.name;
            });
            return compact([].concat(_toConsumableArray(declaredGlobals), _toConsumableArray(undefinedVariables)));
          }
        }, {
          key: "run",
          value: function run(src, namesToDeclareGlobal, optAst) {
            var parsed = optAst || fuzzyParse(src, {
              withComments: true
            });
            var globalComment = parsed.comments ? parsed.comments.find(function (c) {
              return c.isBlock && c.text.startsWith("global");
            }) : null;
            var existingDecls = globalComment ? globalComment.text.replace(/^global\s*/, "").split(",").map(function (ea) {
              return ea.trim();
            }).filter(Boolean) : [];
            var namesToInsert = namesToDeclareGlobal.filter(function (ea) {
              return !existingDecls.includes(ea);
            });

            if (!namesToInsert.length) {
              return {
                status: "not modified",
                newSource: src,
                generated: "",
                from: 0,
                to: 0
              };
            }

            if (!globalComment) {
              var _generated = "/*global ".concat(namesToInsert.join(","), "*/\n");

              var _from = 0;
              var _to = _generated.length;

              var _newSource = _generated + src;

              return {
                status: "modified",
                newSource: _newSource,
                generated: _generated,
                from: _from,
                to: _to
              };
            }

            var from = globalComment.start + "/*".length + globalComment.text.length;
            var generated = namesToInsert.join(",");

            if (!existingDecls.length) {
              if (!globalComment.text.startsWith("global ")) {
                generated = " " + generated;
              }
            } else {
              generated = "," + generated;
            }

            var to = from + generated.length;
            var newSource = src.slice(0, from) + generated + src.slice(from);
            return {
              status: "modified",
              newSource: newSource,
              generated: generated,
              from: from,
              to: to
            };
          }
        }]);

        return GlobalInjector;
      }());
      __varRecorder__$b.GlobalInjector = GlobalInjector;
      var ImportRemover = exports('F', /*#__PURE__*/function () {
        function ImportRemover() {
          _classCallCheck(this, ImportRemover);
        }

        _createClass(ImportRemover, null, [{
          key: "removeImports",
          value: function removeImports(moduleSource, importsToRemove, optModuleAst) {
            var parsed = optModuleAst || fuzzyParse(moduleSource);
            var imports = parsed.body.flatMap(function (ea) {
              if (ea.type !== "ImportDeclaration" || !ea.specifiers.length) return [];
              return ea.specifiers.map(function (spec) {
                return {
                  local: spec.local,
                  importStmt: ea
                };
              });
            });
            var importsToChange = imports.filter(function (ea) {
              return importsToRemove.some(function (rem) {
                return rem.local === ea.local.name;
              });
            });
            var removedImports = importsToChange.map(function (ea) {
              return {
                local: ea.local.name,
                from: ea.importStmt.source.value
              };
            });
            var affectedStmts = uniq(importsToChange.map(function (ea) {
              var specToRemove = ea.importStmt.specifiers.find(function (spec) {
                return ea.local === spec.local;
              });
              remove$1(ea.importStmt.specifiers, specToRemove);
              return ea.importStmt;
            }));
            var modifications = affectedStmts.slice().reverse().reduce(function (state, importStmt) {
              var source = state.source,
                  changes = state.changes;
              var start = importStmt.start,
                  end = importStmt.end,
                  specifiers = importStmt.specifiers;
              var pre = source.slice(0, start);
              var post = source.slice(end);
              var removed = source.slice(start, end);
              var replacement = !specifiers.length ? "" : stringify(importStmt);

              if (replacement && replacement.includes("\n") && !removed.includes("\n")) {
                replacement = replacement.replace(/\s+/g, " ");
              }

              source = pre + replacement + post;
              changes = changes.concat({
                replacement: replacement,
                start: start,
                end: end
              });
              return {
                source: source,
                changes: changes
              };
            }, {
              source: moduleSource,
              changes: []
            });
            return Object.assign({}, modifications, {
              removedImports: removedImports
            });
          }
        }, {
          key: "findUnusedImports",
          value: function findUnusedImports(moduleSourceOrAst) {
            var parsed = typeof moduleSourceOrAst === "string" ? fuzzyParse(moduleSourceOrAst) : moduleSourceOrAst;
            var imports = parsed.body.flatMap(function (ea) {
              if (ea.type !== "ImportDeclaration" || !ea.specifiers.length) return [];
              return ea.specifiers.map(function (spec) {
                return {
                  local: spec.local,
                  from: ea.source ? ea.source.value : "",
                  importStmt: ea
                };
              });
            });
            var importIdentifiers = imports.map(function (ea) {
              return ea.local;
            });
            var scope = resolveReferences(scopes(parsed));
            var refsWithoutImports = Array.from(scope.resolvedRefMap.keys()).filter(function (ea) {
              return !importIdentifiers.includes(ea);
            });
            var realRefs = uniq(refsWithoutImports.map(function (ea) {
              return ea.name;
            }));
            return imports.filter(function (ea) {
              return !realRefs.includes(ea.local.name);
            }).map(function (ea) {
              return Object.assign({}, ea, {
                local: ea.local.name
              });
            });
          }
        }, {
          key: "removeUnusedImports",
          value: function removeUnusedImports(moduleSource) {
            var parsed = fuzzyParse(moduleSource);
            return this.removeImports(moduleSource, this.findUnusedImports(parsed), parsed);
          }
        }]);

        return ImportRemover;
      }());
      __varRecorder__$b.ImportRemover = ImportRemover;

      var __varRecorder__$a = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.modules/src/nodejs.js", __contextModule__);

      var __moduleMeta__$8 = {
        pathInPackage: function pathInPackage() {
          return "./src/nodejs.js";
        },
        unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
          return function () {};
        },
        subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
          return function () {};
        },
        "package": function _package() {
          return {
            name: "lively.modules",
            version: "0.8.38"
          };
        }
      };

      var ensureParent = __varRecorder__$a["lively.modules/src/nodejs.js__define__"]("ensureParent", "function", function (currentModule, name, parent) {
        if (parent) return parent;
        var id = currentModule.id,
            System = currentModule.System;
        var idForNode = id.startsWith("file://") ? id.replace("file://", "") : id;

        var module = System._nodeRequire("module");

        parent = module.Module._cache[id];
        if (parent) return parent;
        parent = {
          id: idForNode,
          filename: idForNode,
          paths: []
        };
        var p = currentModule["package"]();
        if (p) parent.paths.push(resource(p.url).join("node_modules/").path());
        return parent;
      }, __moduleMeta__$8);

      __varRecorder__$a.ensureParent = ensureParent;

      var relative = __varRecorder__$a["lively.modules/src/nodejs.js__define__"]("relative", "function", function (module, name) {
        return resource(module.id).parent().join(name).url.replace("file://", "");
      }, __moduleMeta__$8);

      __varRecorder__$a.relative = relative;

      var _require = __varRecorder__$a["lively.modules/src/nodejs.js__define__"]("_require", "function", function (currentModule, name, parent) {
        parent = __varRecorder__$a.ensureParent(currentModule, name);
        var System = currentModule.System;

        var module = System._nodeRequire("module");

        if (name.startsWith(".")) name = __varRecorder__$a.relative(currentModule, name);
        return module._load(name, parent);
      }, __moduleMeta__$8);

      __varRecorder__$a._require = _require;

      var _resolve = __varRecorder__$a["lively.modules/src/nodejs.js__define__"]("_resolve", "function", function (currentModule, name, parent) {
        parent = __varRecorder__$a.ensureParent(currentModule, name);
        var System = currentModule.System;

        var module = System._nodeRequire("module");

        if (name.startsWith(".")) name = __varRecorder__$a.relative(currentModule, name);
        return module._resolveFilename(name, parent);
      }, __moduleMeta__$8);

      __varRecorder__$a._resolve = _resolve;
      __varRecorder__$a._require = _require;
      __varRecorder__$a._resolve = _resolve;

      var __varRecorder__$9 = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.modules/src/module.js", __contextModule__);

      var __moduleMeta__$7 = {
        pathInPackage: function pathInPackage() {
          return "./src/module.js";
        },
        unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
          return function () {};
        },
        subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
          return function () {};
        },
        "package": function _package() {
          return {
            name: "lively.modules",
            version: "0.8.38"
          };
        }
      };

      var module$2 = __varRecorder__$9["lively.modules/src/module.js__define__"]("module", "function", function (System, moduleName, parent) {
        var sysEnv = System.get("@lively-env");
        var id = System.decanonicalize(moduleName, parent);
        return sysEnv.loadedModules[id] || (sysEnv.loadedModules[id] = new __varRecorder__$9.ModuleInterface(System, id));
      }, __moduleMeta__$7);

      __varRecorder__$9.module = module$2;

      var isModuleLoaded$1 = __varRecorder__$9["lively.modules/src/module.js__define__"]("isModuleLoaded", "function", function (System, name) {
        var isNormalized = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var sysEnv = System.get("@lively-env");
        var id = isNormalized ? name : System.normalizeSync(name);
        return id in sysEnv.loadedModules;
      }, __moduleMeta__$7);

      __varRecorder__$9.isModuleLoaded = isModuleLoaded$1;

      var getImportersOfModule = __varRecorder__$9["lively.modules/src/module.js__define__"]("getImportersOfModule", "function", function (System, rec) {
        return Object.values(System.loads).filter(function (r) {
          return !r.key.endsWith(".json");
        }).map(function (r) {
          return Object.values(r.depMap).find(function (url) {
            return url === rec.key;
          }) && __varRecorder__$9.ModuleInterface.sanitizeRecord(r, System);
        }).filter(Boolean);
      }, __moduleMeta__$7);

      __varRecorder__$9.getImportersOfModule = getImportersOfModule;

      var doesModuleExist$1 = __varRecorder__$9["lively.modules/src/module.js__define__"]("doesModuleExist", "function", /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(System, name) {
          var isNormalized,
              id,
              p,
              _args = arguments;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  isNormalized = _args.length > 2 && _args[2] !== undefined ? _args[2] : false;
                  id = isNormalized ? name : System.normalizeSync(name);

                  if (!__varRecorder__$9.isModuleLoaded(System, id, true)) {
                    _context.next = 4;
                    break;
                  }

                  return _context.abrupt("return", true);

                case 4:
                  p = Package.forModuleId(System, id);

                  if (!(!p || p.name === "no group")) {
                    _context.next = 9;
                    break;
                  }

                  _context.t0 = System.resource(id).exists();
                  _context.next = 12;
                  break;

                case 9:
                  _context.next = 11;
                  return p.hasResource(id);

                case 11:
                  _context.t0 = _context.sent;

                case 12:
                  return _context.abrupt("return", _context.t0);

                case 13:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }(), __moduleMeta__$7);

      __varRecorder__$9.doesModuleExist = doesModuleExist$1;

      var updateBundledModules = exports('N', __varRecorder__$9["lively.modules/src/module.js__define__"]("updateBundledModules", "function", /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(system, modulesToUpdate) {
          var R, S, registry, _iterator, _step, _m, _mod, m, realignedId, mod;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  R = lively.FreezerRuntime || lively.frozenModules;
                  S = R.oldSystem, registry = R.registry;
                  _iterator = _createForOfIteratorHelper(modulesToUpdate);
                  _context2.prev = 3;

                  _iterator.s();

                case 5:
                  if ((_step = _iterator.n()).done) {
                    _context2.next = 18;
                    break;
                  }

                  _m = _step.value;
                  _mod = S["__lively.modules__loadedModules"][_m];

                  if (_mod) {
                    _context2.next = 13;
                    break;
                  }

                  S["delete"](_m);
                  _context2.next = 12;
                  return S["import"](_m);

                case 12:
                  _mod = S["__lively.modules__loadedModules"][_m] || __varRecorder__$9.module(S, _m);

                case 13:
                  _context2.next = 15;
                  return _mod.reload();

                case 15:
                  S["__lively.modules__loadedModules"][_m] = _mod;

                case 16:
                  _context2.next = 5;
                  break;

                case 18:
                  _context2.next = 23;
                  break;

                case 20:
                  _context2.prev = 20;
                  _context2.t0 = _context2["catch"](3);

                  _iterator.e(_context2.t0);

                case 23:
                  _context2.prev = 23;

                  _iterator.f();

                  return _context2.finish(23);

                case 26:
                  _context2.t1 = regeneratorRuntime.keys(registry);

                case 27:
                  if ((_context2.t2 = _context2.t1()).done) {
                    _context2.next = 38;
                    break;
                  }

                  m = _context2.t2.value;

                  if (!registry[m].updateRecord) {
                    _context2.next = 36;
                    break;
                  }

                  realignedId = m.startsWith("esm://") ? m : joinPath(system.baseURL, m);
                  mod = __varRecorder__$9.module(system, realignedId);

                  if (mod._frozenModule) {
                    _context2.next = 34;
                    break;
                  }

                  return _context2.abrupt("continue", 27);

                case 34:
                  system.set(realignedId, system.newModule(R.exportsOf(m)));
                  mod._recorder = registry[m].recorder;

                case 36:
                  _context2.next = 27;
                  break;

                case 38:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, null, [[3, 20, 23, 26]]);
        }));

        return function (_x3, _x4) {
          return _ref2.apply(this, arguments);
        };
      }(), __moduleMeta__$7));

      __varRecorder__$9.updateBundledModules = updateBundledModules;

      __varRecorder__$9.detectModuleFormat = function () {
        var esmFormatCommentRegExp = /['"]format (esm|es6)['"];/;
        var cjsFormatCommentRegExp = /['"]format cjs['"];/;
        var esmRegEx = /(^\s*|[}\);\n]\s*)(import\s*(['"]|(\*\s*as\s+)?[^"'\(\)\n;]+\s+from\s*['"]|\{)|export\s+\*\s+from\s+["']|export\s*(\{|default|function|class|var|const|let|async\s+function))/;
        return function (source, metadata) {
          if (metadata && metadata.format) {
            if (metadata.format === "es6") metadata.forma === "esm";
            return metadata.format;
          }

          if (esmFormatCommentRegExp.test(source.slice(0, 5000)) || !cjsFormatCommentRegExp.test(source.slice(0, 5000)) && esmRegEx.test(source)) {
            return "esm";
          }

          if (cjsFormatCommentRegExp.test(source.slice(0, 5000))) {
            return "cjs";
          }

          return "global";
        };
      }();

      var detectModuleFormat = exports('u', __varRecorder__$9.detectModuleFormat);
      __varRecorder__$9.detectModuleFormat = detectModuleFormat;
      var module$3 = exports('J', module$2);
      classHolder.module = __varRecorder__$9.module;
      __varRecorder__$9.isModuleLoaded = isModuleLoaded$1;
      __varRecorder__$9.doesModuleExist = doesModuleExist$1;
      __varRecorder__$9.updateBundledModules = updateBundledModules;
      __varRecorder__$9.globalProps = {
        initialized: false,
        descriptors: {}
      };

      var ModuleInterface = /*#__PURE__*/function () {
        function ModuleInterface(System, id) {
          var _this = this;

          _classCallCheck(this, ModuleInterface);

          if (!isURL(id) && !/^@/.test(id)) {
            throw new Error("ModuleInterface constructor called with ".concat(id, " that does not seem to be a fully normalized module id."));
          }

          this.System = System;
          this.id = id;
          this.recorderName = "__lvVarRecorder";
          this.sourceAccessorName = "__lvOriginalCode";
          this._recorder = null;
          this._source = null;
          this._ast = null;
          this._scope = null;
          this._observersOfTopLevelState = [];
          this._evaluationsInProgress = 0;
          this._evalId = 1;
          this.createdAt = this.lastModifiedAt = new Date();
          subscribe("lively.modules/modulechanged", function (data) {
            if (data.module === _this.id) _this.reset();
          });
        }

        _createClass(ModuleInterface, [{
          key: "fullName",
          value: function fullName() {
            return this.id;
          }
        }, {
          key: "shortName",
          value: function shortName() {
            return this["package"]() ? "".concat(this["package"]().name, "/").concat(this.pathInPackage()) : this.fullName();
          }
        }, {
          key: "source",
          value: function source() {
            var _this2 = this;

            if (this.id === "@empty") return Promise.resolve("");
            if (this._source) return Promise.resolve(this._source);
            return this.System.resource(this.id).read().then(function (source) {
              return _this2._source = source;
            });
          }
        }, {
          key: "setSource",
          value: function setSource(source) {
            if (this.sourceAccessorName && this.recorderName && source.includes("var " + this.recorderName) && source.includes("var " + this.sourceAccessorName)) {
              return;
            }

            if (this._source === source) return;
            this.reset();
            this._source = source;
          }
        }, {
          key: "ast",
          value: function () {
            var _ast2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!this._ast) {
                        _context3.next = 2;
                        break;
                      }

                      return _context3.abrupt("return", this._ast);

                    case 2:
                      _context3.t0 = parse;
                      _context3.next = 5;
                      return this.source();

                    case 5:
                      _context3.t1 = _context3.sent;
                      return _context3.abrupt("return", this._ast = (0, _context3.t0)(_context3.t1));

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function ast() {
              return _ast2.apply(this, arguments);
            }

            return ast;
          }()
        }, {
          key: "scope",
          value: function () {
            var _scope2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var ast;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (!this._scope) {
                        _context4.next = 2;
                        break;
                      }

                      return _context4.abrupt("return", this._scope);

                    case 2:
                      _context4.next = 4;
                      return this.ast();

                    case 4:
                      ast = _context4.sent;
                      return _context4.abrupt("return", this._scope = topLevelDeclsAndRefs(ast).scope);

                    case 6:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function scope() {
              return _scope2.apply(this, arguments);
            }

            return scope;
          }()
        }, {
          key: "resolvedScope",
          value: function () {
            var _resolvedScope = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.t0 = query;
                      _context5.next = 3;
                      return this.scope();

                    case 3:
                      _context5.t1 = _context5.sent;
                      return _context5.abrupt("return", this._scope = _context5.t0.resolveReferences.call(_context5.t0, _context5.t1));

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function resolvedScope() {
              return _resolvedScope.apply(this, arguments);
            }

            return resolvedScope;
          }()
        }, {
          key: "metadata",
          value: function metadata() {
            var _this$System$REGISTER;

            var load = ((_this$System$REGISTER = this.System.REGISTER_INTERNAL) === null || _this$System$REGISTER === void 0 ? void 0 : _this$System$REGISTER.records) ? this.System.REGISTER_INTERNAL.records[this.id] : null;
            return load ? load.metadata : null;
          }
        }, {
          key: "addMetadata",
          value: function addMetadata(addedMeta) {
            var System = this.System,
                id = this.id;
            var oldMeta = this.metadata();
            var meta = oldMeta ? Object.assign(oldMeta, addedMeta) : addedMeta;
            System.config({
              meta: _defineProperty({}, id, meta)
            });
            return System.meta[id];
          }
        }, {
          key: "format",
          value: function format() {
            var meta = this.metadata();
            if (meta && meta.load.format) return meta.load.format;
            if (this._source) return __varRecorder__$9.detectModuleFormat(this._source);
            return this._frozenModule ? "esm" : "global";
          }
        }, {
          key: "setFormat",
          value: function setFormat(format) {
            var meta = this.metadata();
            if (meta && meta.load.format) delete meta.load.format;
            return this.addMetadata({
              format: format
            });
          }
        }, {
          key: "reset",
          value: function reset() {
            this._source = null;
            this._ast = null;
            this._scope = null;
          }
        }, {
          key: "get",
          value: function get() {
            var id = this.id,
                System = this.System;
            return System.get(id);
          }
        }, {
          key: "load",
          value: function () {
            var _load = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(opts) {
              var id, System;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      id = this.id, System = this.System;
                      opts && this.addMetadata(opts);
                      _context6.t0 = System.get(id);

                      if (_context6.t0) {
                        _context6.next = 7;
                        break;
                      }

                      _context6.next = 6;
                      return System["import"](id);

                    case 6:
                      _context6.t0 = _context6.sent;

                    case 7:
                      return _context6.abrupt("return", _context6.t0);

                    case 8:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function load(_x5) {
              return _load.apply(this, arguments);
            }

            return load;
          }()
        }, {
          key: "isLoaded",
          value: function isLoaded() {
            return !!this.System.get(this.id);
          }
        }, {
          key: "unloadEnv",
          value: function unloadEnv() {
            this._recorder = null;
            this._observersOfTopLevelState = [];
            delete this.System.get("@lively-env").loadedModules[this.id];
          }
        }, {
          key: "unloadDeps",
          value: function unloadDeps(opts) {
            var _this3 = this;

            opts = merge({
              forgetDeps: true,
              forgetEnv: true
            }, opts);
            this.dependents().forEach(function (ea) {
              _this3.System["delete"](ea.id);

              if (_this3.System.loads) delete _this3.System.loads[ea.id];
              if (opts.forgetEnv) ea.unloadEnv();
            });
          }
        }, {
          key: "unload",
          value: function () {
            var _unload = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(opts) {
              var System, id, cache;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      opts = Object.assign({
                        reset: true,
                        forgetDeps: true,
                        forgetEnv: true
                      }, opts);
                      System = this.System, id = this.id;
                      if (opts.reset) this.reset();
                      if (opts.forgetDeps) this.unloadDeps(opts);
                      this.System["delete"](id);

                      if (System.loads) {
                        delete System.loads[id];
                      }

                      if (System.meta) {
                        delete System.meta[id];
                      }

                      if (opts.forgetEnv) {
                        this.unloadEnv();
                      }

                      cache = System._livelyModulesTranslationCache;

                      if (!cache) {
                        _context7.next = 12;
                        break;
                      }

                      _context7.next = 12;
                      return cache.deleteCachedData(id);

                    case 12:
                      emit("lively.modules/moduleunloaded", {
                        module: this.id
                      }, Date.now(), this.System);

                    case 13:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            function unload(_x6) {
              return _unload.apply(this, arguments);
            }

            return unload;
          }()
        }, {
          key: "reload",
          value: function () {
            var _reload = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(opts) {
              var _this4 = this;

              var toBeReloaded;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      opts = merge({
                        reloadDeps: true,
                        resetEnv: true
                      }, opts);
                      toBeReloaded = [this];
                      if (opts.reloadDeps) toBeReloaded = this.dependents().concat(toBeReloaded);
                      _context8.next = 5;
                      return this.unload({
                        forgetDeps: opts.reloadDeps,
                        forgetEnv: opts.resetEnv
                      });

                    case 5:
                      _context8.next = 7;
                      return Promise.all(toBeReloaded.map(function (ea) {
                        return ea.id !== _this4.id && ea.load();
                      }));

                    case 7:
                      _context8.next = 9;
                      return this.load();

                    case 9:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function reload(_x7) {
              return _reload.apply(this, arguments);
            }

            return reload;
          }()
        }, {
          key: "getFrozenRecord",
          value: function getFrozenRecord() {
            var _ref3;

            return typeof lively !== "undefined" && lively.wasFastLoaded && ((_ref3 = lively.FreezerRuntime || lively.frozenModules) === null || _ref3 === void 0 ? void 0 : _ref3.registry[this.shortName()]);
          }
        }, {
          key: "refreshFrozenRecord",
          value: function () {
            var _refreshFrozenRecord = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(frozenRecord) {
              var livelyRecord, moduleExports, newEntries;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      livelyRecord = this.System.get("@lively-env").moduleEnv(this.id).recorder;
                      _context9.t0 = arr;
                      _context9.next = 4;
                      return this.exports();

                    case 4:
                      _context9.t1 = function (m) {
                        if (m.local && m.exported !== "default" && m.local !== m.exported) {
                          return "__rename__" + m.local + "->" + m.exported;
                        } else if (m.exported === "default") {
                          return "__default__" + m.local;
                        } else {
                          return m.exported;
                        }
                      };

                      _context9.t2 = _context9.sent.map(_context9.t1);
                      moduleExports = _context9.t0.compact.call(_context9.t0, _context9.t2);
                      newEntries = select(livelyRecord, moduleExports.map(function (exp) {
                        if (exp.startsWith("__default__")) return exp.replace("__default__", "");
                        if (exp.startsWith("__rename__")) return exp.replace(/->.*/, "").replace("__rename__", "");
                        return exp;
                      }));
                      frozenRecord.recorder.__module_exports__ = moduleExports;
                      Object.assign(frozenRecord.recorder, newEntries);
                      (lively.FreezerRuntime || lively.frozenModules).exportsOf(this.shortName());

                    case 11:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));

            function refreshFrozenRecord(_x8) {
              return _refreshFrozenRecord.apply(this, arguments);
            }

            return refreshFrozenRecord;
          }()
        }, {
          key: "revive",
          value: function () {
            var _revive = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var autoReload,
                  S,
                  frozenRecord,
                  _args10 = arguments;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      autoReload = _args10.length > 0 && _args10[0] !== undefined ? _args10[0] : true;

                      if (this._frozenModule) {
                        _context10.next = 3;
                        break;
                      }

                      return _context10.abrupt("return", []);

                    case 3:
                      _context10.next = 5;
                      return this.reload({
                        reloadDeps: false
                      });

                    case 5:
                      S = (lively.FreezerRuntime || lively.frozenModules).oldSystem;
                      S.skipInstantiation = true;
                      frozenRecord = this.getFrozenRecord();
                      _context10.next = 10;
                      return this.refreshFrozenRecord(frozenRecord);

                    case 10:
                      frozenRecord.isRevived = true;
                      frozenRecord.recorder.__revived__ = true;

                      if (!(autoReload && frozenRecord)) {
                        _context10.next = 15;
                        break;
                      }

                      _context10.next = 15;
                      return __varRecorder__$9.updateBundledModules(this.System, [frozenRecord.contextModule]);

                    case 15:
                      this._frozenModule = false;
                      return _context10.abrupt("return", [frozenRecord.contextModule]);

                    case 17:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));

            function revive() {
              return _revive.apply(this, arguments);
            }

            return revive;
          }()
        }, {
          key: "copyTo",
          value: function () {
            var _copyTo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(newId) {
              var moduleRecord, state, System, newM;

              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      moduleRecord = this.System.get(this.id);
                      state = select(this, ["_observersOfTopLevelState", "_scope", "_ast", "_source", "_recorder", "sourceAccessorName", "recorderName"]);
                      _context11.t0 = this.System.resource(newId);
                      _context11.next = 5;
                      return this.source();

                    case 5:
                      _context11.t1 = _context11.sent;
                      _context11.next = 8;
                      return _context11.t0.write.call(_context11.t0, _context11.t1);

                    case 8:
                      System = this.System;
                      newM = __varRecorder__$9.module(System, newId);

                      if (state._recorder) {
                        state._recorder[newM.varDefinitionCallbackName] = state._recorder[this.varDefinitionCallbackName];
                      }

                      Object.assign(newM, state);
                      System.set(newId, System.newModule(moduleRecord));
                      return _context11.abrupt("return", newM);

                    case 14:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));

            function copyTo(_x9) {
              return _copyTo.apply(this, arguments);
            }

            return copyTo;
          }()
        }, {
          key: "renameTo",
          value: function () {
            var _renameTo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(newId) {
              var opts,
                  _opts$unload,
                  unload,
                  _opts$removeFile,
                  removeFile,
                  newM,
                  _args12 = arguments;

              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      opts = _args12.length > 1 && _args12[1] !== undefined ? _args12[1] : {};
                      _opts$unload = opts.unload, unload = _opts$unload === void 0 ? true : _opts$unload, _opts$removeFile = opts.removeFile, removeFile = _opts$removeFile === void 0 ? true : _opts$removeFile;
                      _context12.next = 4;
                      return this.copyTo(newId);

                    case 4:
                      newM = _context12.sent;

                      if (!unload) {
                        _context12.next = 8;
                        break;
                      }

                      _context12.next = 8;
                      return this.unload({
                        reset: true,
                        forgetDeps: false,
                        forgetEnv: true
                      });

                    case 8:
                      if (!removeFile) {
                        _context12.next = 11;
                        break;
                      }

                      _context12.next = 11;
                      return this.System.resource(this.id).remove();

                    case 11:
                      return _context12.abrupt("return", newM);

                    case 12:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));

            function renameTo(_x10) {
              return _renameTo.apply(this, arguments);
            }

            return renameTo;
          }()
        }, {
          key: "whenLoaded",
          value: function whenLoaded(cb) {
            if (this.isLoaded()) {
              try {
                cb(this);
              } catch (e) {
                console.error(e);
              }

              return;
            }

            this.System.get("@lively-env").onLoadCallbacks.push({
              moduleName: this.id,
              resolved: true,
              callback: cb
            });
          }
        }, {
          key: "changeSourceAction",
          value: function changeSourceAction(changeFunc) {
            var _this5 = this;

            return Promise.resolve(this.source()).then(function (oldSource) {
              return changeFunc(oldSource);
            }).then(function (newSource) {
              return _this5.changeSource(newSource);
            });
          }
        }, {
          key: "changeSource",
          value: function changeSource(newSource, options) {
            var _this$System$_livelyM,
                _this6 = this;

            options = Object.assign({
              doSave: true,
              doEval: true
            }, options);
            var System = this.System,
                id = this.id;
            var format = this.format();
            var result;
            this.reset();
            this.lastModifiedAt = new Date();
            (_this$System$_livelyM = this.System._livelyModulesTranslationCache) === null || _this$System$_livelyM === void 0 ? void 0 : _this$System$_livelyM.deleteCachedData(this.id);
            return Promise.all([options.doSave && this.System.resource(id).write(newSource), options.doEval && moduleSourceChange$1(System, id, newSource, format, options).then(function (_result) {
              return result = _result;
            }).then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var frozenRecord;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      frozenRecord = _this6.getFrozenRecord();

                      if (!frozenRecord) {
                        _context13.next = 6;
                        break;
                      }

                      _context13.next = 4;
                      return _this6.refreshFrozenRecord(frozenRecord);

                    case 4:
                      _context13.next = 6;
                      return __varRecorder__$9.updateBundledModules(_this6.System, [frozenRecord.contextModule]);

                    case 6:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13);
            })))]).then(function () {
              return result;
            });
          }
        }, {
          key: "addDependencyToModuleRecord",
          value: function addDependencyToModuleRecord(dependency) {
            var _this7 = this;

            var setter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
            var record = this.record();
            var dependencyRecord = dependency.record();

            if (record && dependencyRecord) {
              var depIndex;
              var hasDepenency = record.dependencies.some(function (ea, i) {
                if (!ea) return;
                depIndex = i;
                return ea && ea.name === dependency.id;
              });

              if (!hasDepenency) {
                record.deps.push(dependencyRecord.key);
              } else if (dependencyRecord !== record.dependencies[depIndex]) {
                record.deps.splice(depIndex, 1, dependencyRecord.key);
              }

              if (!hasDepenency || !record.setters[depIndex]) {
                record.setters[hasDepenency ? depIndex : record.dependencies.length - 1] = setter;
              }
              var hasImporter = dependencyRecord.importers.some(function (imp, i) {
                if (!imp) return;
                return imp && imp.name === _this7.id;
              });
              if (!hasImporter) record.depMap[dependencyRecord.name] = dependencyRecord.key;
            }
          }
        }, {
          key: "dependents",
          value: function dependents() {
            var _this8 = this;

            return hull(invert(computeRequireMap(this.System)), this.id).map(function (mid) {
              return __varRecorder__$9.module(_this8.System, mid);
            });
          }
        }, {
          key: "requirements",
          value: function requirements() {
            var _this9 = this;

            return hull(computeRequireMap(this.System), this.id).map(function (mid) {
              return __varRecorder__$9.module(_this9.System, mid);
            });
          }
        }, {
          key: "directRequirements",
          value: function directRequirements() {
            var _this10 = this;

            var dependencies = (this.record() || {}).dependencies || [];
            return pluck$1(dependencies.filter(Boolean), "name").map(function (id) {
              return __varRecorder__$9.module(_this10.System, id);
            });
          }
        }, {
          key: "isMochaTest",
          value: function isMochaTest() {
            if (!this._source) {
              return false;
            }

            var scope = this._scope || (this._scope = topLevelDeclsAndRefs(parse(this._source)).scope);
            var deps = imports(scope).map(function (imp) {
              return imp.fromModule;
            });

            if (!deps.some(function (ea) {
              return ea.endsWith("mocha-es6") || ea.endsWith("mocha-es6/index.js");
            })) {
              return false;
            }

            return true;
          }
        }, {
          key: "prepareRecorder",
          value: function prepareRecorder() {
            var _Object$assign;

            var S = this.System;
            var self = this;
            var existingRecord = this.getFrozenRecord();

            if (!__varRecorder__$9.globalProps.initialized) {
              __varRecorder__$9.globalProps.initialized = true;

              for (var prop in S.global) {
                if (S.global.__lookupGetter__(prop) || prop === "closed") {
                  __varRecorder__$9.globalProps.descriptors[prop] = {
                    value: undefined,
                    configurable: true,
                    writable: true
                  };
                }
              }
            }

            var nodejsDescriptors = {};

            if (S.get("@system-env").node) {
              var require = _require.bind(null, this);

              require.resolve = _resolve.bind(null, this);
              nodejsDescriptors.require = {
                configurable: true,
                writable: true,
                value: require
              };
            }

            this._recorder = Object.create(S.global, Object.assign({}, __varRecorder__$9.globalProps.descriptors, {}, nodejsDescriptors, (_Object$assign = {
              event: {
                configurable: true,
                writable: true,
                value: undefined
              },
              System: {
                configurable: true,
                writable: true,
                value: S
              },
              __currentLivelyModule: {
                value: self
              }
            }, _defineProperty(_Object$assign, defaultClassToFunctionConverterName, {
              configurable: true,
              writable: true,
              value: initializeClass
            }), _defineProperty(_Object$assign, this.varDefinitionCallbackName, {
              value: function value(name, kind, _value, recorder, meta) {
                meta = meta || {};
                meta.kind = kind;
                return self.define(name, _value, false, meta);
              }
            }), _defineProperty(_Object$assign, "_moduleExport", {
              value: function value(name, val) {
                scheduleModuleExportsChange(S, self.id, name, val, true);
              }
            }), _defineProperty(_Object$assign, "_moduleImport", {
              value: function value(depName, key) {
                var depId = S.decanonicalize(depName, self.id);
                var depExports = S.get(depId);

                if (!depExports) {
                  console.warn("import of ".concat(key, " failed: ").concat(depName, " (tried as ").concat(self.id, ") is not loaded!"));
                  return undefined;
                }

                self.addDependencyToModuleRecord(__varRecorder__$9.module(S, depId), function (imports) {
                  return Object.assign(self.recorder, imports);
                });
                if (key === undefined) return depExports;

                if (!Object.hasOwnProperty.bind(depExports)(key)) {
                  console.warn("import from ".concat(depExports, ": Has no export ").concat(key, "!"));
                }

                return depExports[key];
              }
            }), _Object$assign)));

            if (existingRecord) {
              Object.assign(this._recorder, dissoc(existingRecord.recorder, ["__module_hash__"]));
            }

            return this._recorder;
          }
        }, {
          key: "define",
          value: function define(varName, value) {
            var exportImmediately = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
            var meta = arguments.length > 3 ? arguments[3] : undefined;
            var System = this.System,
                id = this.id,
                recorder = this.recorder;
            System.debug && console.log("[lively.modules] ".concat(this.shortName(), " defines ").concat(varName));
            var metaSym = Symbol["for"]("lively-object-meta");
            var moduleSym = Symbol["for"]("lively-module-meta");

            if (typeof value === "function" && meta && (meta.kind === "function" || meta.kind === "class")) {
              value[metaSym] = meta;
            }

            if (value && value[metaSym] && !value[moduleSym]) {
              var pathInPackage = this.pathInPackage();
              var p = this["package"]();
              value[moduleSym] = {
                "package": p ? {
                  name: p.name,
                  version: p.version
                } : {},
                pathInPackage: pathInPackage
              };
            }

            recorder[varName] = value;

            if (!(meta === null || meta === void 0 ? void 0 : meta.exportConflict)) {
              scheduleModuleExportsChange(System, id, varName, value, false);
            }

            this.notifyTopLevelObservers(varName);
            exportImmediately = exportImmediately || !this.isEvalutionInProgress();

            if (exportImmediately) {
              runScheduledExportChanges(System, id);
            }

            return value;
          }
        }, {
          key: "undefine",
          value: function undefine(varName) {
            delete this.recorder[varName];
          }
        }, {
          key: "subscribeToToplevelDefinitionChanges",
          value: function subscribeToToplevelDefinitionChanges(func) {
            this._observersOfTopLevelState.push(func);

            return func;
          }
        }, {
          key: "notifyTopLevelObservers",
          value: function notifyTopLevelObservers(key) {
            var ignored = ["createOrExtendES6ClassForLively", "lively.capturing-declaration-wrapper"];
            var rec = this.recorder;
            if (ignored.includes(key)) return;

            this._observersOfTopLevelState.forEach(function (fn) {
              return fn(key, rec[key]);
            });
          }
        }, {
          key: "unsubscribeFromToplevelDefinitionChanges",
          value: function unsubscribeFromToplevelDefinitionChanges(funcOrName) {
            this._observersOfTopLevelState = typeof funcOrName === "string" ? this._observersOfTopLevelState.filter(function (ea) {
              return ea.name !== funcOrName;
            }) : this._observersOfTopLevelState.filter(function (ea) {
              return ea !== funcOrName;
            });
          }
        }, {
          key: "evaluationStart",
          value: function evaluationStart() {
            this.ensureRecord();
            this._evaluationsInProgress++;
          }
        }, {
          key: "evaluationEnd",
          value: function evaluationEnd() {
            this._evaluationsInProgress--;
            runScheduledExportChanges(this.System, this.id);
          }
        }, {
          key: "nextEvalId",
          value: function nextEvalId() {
            return this._evalId++;
          }
        }, {
          key: "isEvalutionInProgress",
          value: function isEvalutionInProgress() {
            return this._evaluationsInProgress > 0;
          }
        }, {
          key: "env",
          value: function env() {
            return this;
          }
        }, {
          key: "package",
          value: function _package() {
            return Package.forModule(this.System, this);
          }
        }, {
          key: "pathInPackage",
          value: function pathInPackage() {
            var p = this["package"]();
            return p && this.id.indexOf(p.address) === 0 ? this.id.slice(p.address.length).replace(/^\//, "") : this.id;
          }
        }, {
          key: "imports",
          value: function () {
            var _imports = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.t0 = query;
                      _context14.next = 3;
                      return this.scope();

                    case 3:
                      _context14.t1 = _context14.sent;
                      return _context14.abrupt("return", _context14.t0.imports.call(_context14.t0, _context14.t1));

                    case 5:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));

            function imports() {
              return _imports.apply(this, arguments);
            }

            return imports;
          }()
        }, {
          key: "exports",
          value: function () {
            var _exports = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.t0 = query;
                      _context15.next = 3;
                      return this.scope();

                    case 3:
                      _context15.t1 = _context15.sent;

                      _context15.t2 = function (exp) {
                        return exp.local !== "__esModule";
                      };

                      return _context15.abrupt("return", _context15.t0.exports.call(_context15.t0, _context15.t1).filter(_context15.t2));

                    case 6:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));

            function exports() {
              return _exports.apply(this, arguments);
            }

            return exports;
          }()
        }, {
          key: "addImports",
          value: function () {
            var _addImports = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(specs) {
              var source, _iterator2, _step2, spec, fromModule, fromPackage, importData, alias;

              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      _context16.next = 2;
                      return this.source();

                    case 2:
                      source = _context16.sent;
                      _iterator2 = _createForOfIteratorHelper(specs);

                      try {
                        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                          spec = _step2.value;
                          fromModule = __varRecorder__$9.module(this.System, spec.from || spec.moduleId);
                          fromPackage = fromModule["package"]();
                          importData = {
                            exported: spec.exported || spec.local,
                            moduleId: fromModule.id,
                            packageName: fromPackage.name,
                            packageURL: fromPackage.url,
                            pathInPackage: fromModule.pathInPackage()
                          };
                          alias = spec.local;
                          __varRecorder__$9.__inter0__ = ImportInjector.run(this.System, this.id, this["package"](), source, importData, alias), source = __varRecorder__$9.__inter0__.newSource, __varRecorder__$9.__inter0__;
                        }
                      } catch (err) {
                        _iterator2.e(err);
                      } finally {
                        _iterator2.f();
                      }

                      _context16.next = 7;
                      return this.changeSource(source);

                    case 7:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));

            function addImports(_x11) {
              return _addImports.apply(this, arguments);
            }

            return addImports;
          }()
        }, {
          key: "addGlobalDeclaration",
          value: function () {
            var _addGlobalDeclaration = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(varNamesToDeclareAsGlobal) {
              var source, _GlobalInjector$run, status, newSource, changed;

              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      _context17.next = 2;
                      return this.source();

                    case 2:
                      source = _context17.sent;
                      _GlobalInjector$run = GlobalInjector.run(source, varNamesToDeclareAsGlobal), status = _GlobalInjector$run.status, newSource = _GlobalInjector$run.newSource;
                      changed = status === "modified";

                      if (!changed) {
                        _context17.next = 8;
                        break;
                      }

                      _context17.next = 8;
                      return this.changeSource(newSource);

                    case 8:
                      return _context17.abrupt("return", changed);

                    case 9:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));

            function addGlobalDeclaration(_x12) {
              return _addGlobalDeclaration.apply(this, arguments);
            }

            return addGlobalDeclaration;
          }()
        }, {
          key: "removeImports",
          value: function () {
            var _removeImports = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(specs) {
              var _this11 = this;

              var oldSource, _yield$ImportRemover$, source, removedImports;

              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      if (specs.length) {
                        _context18.next = 2;
                        break;
                      }

                      return _context18.abrupt("return");

                    case 2:
                      _context18.next = 4;
                      return this.source();

                    case 4:
                      oldSource = _context18.sent;
                      _context18.next = 7;
                      return ImportRemover.removeImports(oldSource, specs);

                    case 7:
                      _yield$ImportRemover$ = _context18.sent;
                      source = _yield$ImportRemover$.source;
                      removedImports = _yield$ImportRemover$.removedImports;
                      _context18.next = 12;
                      return this.changeSource(source);

                    case 12:
                      removedImports.forEach(function (ea) {
                        return delete _this11.recorder[ea.local];
                      });

                    case 13:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));

            function removeImports(_x13) {
              return _removeImports.apply(this, arguments);
            }

            return removeImports;
          }()
        }, {
          key: "_localDeclForRefAt",
          value: function () {
            var _localDeclForRefAt2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(pos) {
              var scope, ref;
              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      _context19.next = 2;
                      return this.resolvedScope();

                    case 2:
                      scope = _context19.sent;
                      ref = refWithDeclAt(pos, scope);
                      return _context19.abrupt("return", ref && {
                        decl: ref.decl,
                        id: ref.declId,
                        declModule: this
                      });

                    case 5:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));

            function _localDeclForRefAt(_x14) {
              return _localDeclForRefAt2.apply(this, arguments);
            }

            return _localDeclForRefAt;
          }()
        }, {
          key: "_localDeclForName",
          value: function () {
            var _localDeclForName2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(nameOfRef) {
              var scope, found, _iterator3, _step3, ref, name;

              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      _context20.next = 2;
                      return this.resolvedScope();

                    case 2:
                      scope = _context20.sent;
                      _iterator3 = _createForOfIteratorHelper(scope.resolvedRefMap.values());
                      _context20.prev = 4;

                      _iterator3.s();

                    case 6:
                      if ((_step3 = _iterator3.n()).done) {
                        _context20.next = 14;
                        break;
                      }

                      ref = _step3.value;
                      name = ref.ref.name;

                      if (!(nameOfRef === name)) {
                        _context20.next = 12;
                        break;
                      }

                      found = ref;
                      return _context20.abrupt("break", 14);

                    case 12:
                      _context20.next = 6;
                      break;

                    case 14:
                      _context20.next = 19;
                      break;

                    case 16:
                      _context20.prev = 16;
                      _context20.t0 = _context20["catch"](4);

                      _iterator3.e(_context20.t0);

                    case 19:
                      _context20.prev = 19;

                      _iterator3.f();

                      return _context20.finish(19);

                    case 22:
                      return _context20.abrupt("return", found && {
                        decl: found.decl,
                        id: found.declId,
                        declModule: this
                      });

                    case 23:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this, [[4, 16, 19, 22]]);
            }));

            function _localDeclForName(_x15) {
              return _localDeclForName2.apply(this, arguments);
            }

            return _localDeclForName;
          }()
        }, {
          key: "_importForNSRefAt",
          value: function () {
            var _importForNSRefAt2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21(pos) {
              var scope, ast, nodes, id, member, _ref5, decl, name, spec;

              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      _context21.next = 2;
                      return this.resolvedScope();

                    case 2:
                      scope = _context21.sent;
                      ast = scope.node;
                      nodes = nodesAtIndex(ast, pos);

                      if (!(nodes.length < 2)) {
                        _context21.next = 7;
                        break;
                      }

                      return _context21.abrupt("return", [null, null]);

                    case 7:
                      id = nodes[nodes.length - 1];
                      member = nodes[nodes.length - 2];

                      if (!(id.type !== "Identifier" || member.type !== "MemberExpression" || member.computed || member.object.type !== "Identifier")) {
                        _context21.next = 11;
                        break;
                      }

                      return _context21.abrupt("return", [null, null]);

                    case 11:
                      _ref5 = scope.resolvedRefMap.get(member.object) || {}, decl = _ref5.decl;

                      if (!(!decl || decl.type !== "ImportDeclaration")) {
                        _context21.next = 14;
                        break;
                      }

                      return _context21.abrupt("return", [null, null]);

                    case 14:
                      name = member.object.name;
                      spec = decl.specifiers.find(function (s) {
                        return s.local.name === name;
                      });
                      return _context21.abrupt("return", spec.type !== "ImportNamespaceSpecifier" ? [null, null] : [decl, spec.local, id.name]);

                    case 17:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this);
            }));

            function _importForNSRefAt(_x16) {
              return _importForNSRefAt2.apply(this, arguments);
            }

            return _importForNSRefAt;
          }()
        }, {
          key: "_resolveImportedDecl",
          value: function () {
            var _resolveImportedDecl2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22(decl) {
              var name, imports, im, imM;
              return regeneratorRuntime.wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      if (decl) {
                        _context22.next = 2;
                        break;
                      }

                      return _context22.abrupt("return", []);

                    case 2:
                      name = decl.id.name;
                      _context22.next = 5;
                      return this.imports();

                    case 5:
                      imports = _context22.sent;
                      im = imports.find(function (i) {
                        return i.local === name;
                      });

                      if (!im) {
                        _context22.next = 14;
                        break;
                      }

                      imM = __varRecorder__$9.module(this.System, im.fromModule, this.id);
                      _context22.t0 = [decl];
                      _context22.next = 12;
                      return imM.bindingPathForExport(im.imported);

                    case 12:
                      _context22.t1 = _context22.sent;
                      return _context22.abrupt("return", _context22.t0.concat.call(_context22.t0, _context22.t1));

                    case 14:
                      return _context22.abrupt("return", [decl]);

                    case 15:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22, this);
            }));

            function _resolveImportedDecl(_x17) {
              return _resolveImportedDecl2.apply(this, arguments);
            }

            return _resolveImportedDecl;
          }()
        }, {
          key: "bindingPathFor",
          value: function () {
            var _bindingPathFor = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23(nameOfRef) {
              var decl;
              return regeneratorRuntime.wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      _context23.next = 2;
                      return this._localDeclForName(nameOfRef);

                    case 2:
                      decl = _context23.sent;

                      if (!decl) {
                        _context23.next = 7;
                        break;
                      }

                      _context23.next = 6;
                      return this._resolveImportedDecl(decl);

                    case 6:
                      return _context23.abrupt("return", _context23.sent);

                    case 7:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23, this);
            }));

            function bindingPathFor(_x18) {
              return _bindingPathFor.apply(this, arguments);
            }

            return bindingPathFor;
          }()
        }, {
          key: "bindingPathForExport",
          value: function () {
            var _bindingPathForExport = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24(name) {
              var exports, ex, imM, decl;
              return regeneratorRuntime.wrap(function _callee24$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      _context24.next = 2;
                      return this.resolvedScope();

                    case 2:
                      _context24.next = 4;
                      return this.exports();

                    case 4:
                      exports = _context24.sent;
                      ex = exports.find(function (e) {
                        return e.exported === name;
                      });

                      if (!ex.fromModule) {
                        _context24.next = 17;
                        break;
                      }

                      imM = __varRecorder__$9.module(this.System, ex.fromModule, this.id);
                      decl = {
                        decl: ex.node,
                        id: ex.declId
                      };
                      decl.declModule = this;
                      _context24.t0 = [decl];
                      _context24.next = 13;
                      return imM.bindingPathForExport(ex.imported);

                    case 13:
                      _context24.t1 = _context24.sent;
                      return _context24.abrupt("return", _context24.t0.concat.call(_context24.t0, _context24.t1));

                    case 17:
                      return _context24.abrupt("return", this._resolveImportedDecl({
                        decl: ex.decl,
                        id: ex.declId,
                        declModule: ex && ex.decl ? this : null
                      }));

                    case 18:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, _callee24, this);
            }));

            function bindingPathForExport(_x19) {
              return _bindingPathForExport.apply(this, arguments);
            }

            return bindingPathForExport;
          }()
        }, {
          key: "bindingPathForRefAt",
          value: function () {
            var _bindingPathForRefAt = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee25(pos) {
              var decl, _yield$this$_importFo, _yield$this$_importFo2, imDecl, id, name, imM;

              return regeneratorRuntime.wrap(function _callee25$(_context25) {
                while (1) {
                  switch (_context25.prev = _context25.next) {
                    case 0:
                      _context25.next = 2;
                      return this._localDeclForRefAt(pos);

                    case 2:
                      decl = _context25.sent;

                      if (!decl) {
                        _context25.next = 7;
                        break;
                      }

                      _context25.next = 6;
                      return this._resolveImportedDecl(decl);

                    case 6:
                      return _context25.abrupt("return", _context25.sent);

                    case 7:
                      _context25.next = 9;
                      return this._importForNSRefAt(pos);

                    case 9:
                      _yield$this$_importFo = _context25.sent;
                      _yield$this$_importFo2 = _slicedToArray(_yield$this$_importFo, 3);
                      imDecl = _yield$this$_importFo2[0];
                      id = _yield$this$_importFo2[1];
                      name = _yield$this$_importFo2[2];

                      if (imDecl) {
                        _context25.next = 16;
                        break;
                      }

                      return _context25.abrupt("return", []);

                    case 16:
                      imM = __varRecorder__$9.module(this.System, imDecl.source.value, this.id);
                      _context25.t0 = [{
                        decl: imDecl,
                        declModule: this,
                        id: id
                      }];
                      _context25.next = 20;
                      return imM.bindingPathForExport(name);

                    case 20:
                      _context25.t1 = _context25.sent;
                      return _context25.abrupt("return", _context25.t0.concat.call(_context25.t0, _context25.t1));

                    case 22:
                    case "end":
                      return _context25.stop();
                  }
                }
              }, _callee25, this);
            }));

            function bindingPathForRefAt(_x20) {
              return _bindingPathForRefAt.apply(this, arguments);
            }

            return bindingPathForRefAt;
          }()
        }, {
          key: "definitionForRefAt",
          value: function () {
            var _definitionForRefAt = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee26(pos) {
              var path;
              return regeneratorRuntime.wrap(function _callee26$(_context26) {
                while (1) {
                  switch (_context26.prev = _context26.next) {
                    case 0:
                      _context26.next = 2;
                      return this.bindingPathForRefAt(pos);

                    case 2:
                      path = _context26.sent;
                      return _context26.abrupt("return", path.length < 1 ? null : path[path.length - 1].decl);

                    case 4:
                    case "end":
                      return _context26.stop();
                  }
                }
              }, _callee26, this);
            }));

            function definitionForRefAt(_x21) {
              return _definitionForRefAt.apply(this, arguments);
            }

            return definitionForRefAt;
          }()
        }, {
          key: "ensureRecord",
          value: function ensureRecord() {
            return this.record();
          }
        }, {
          key: "record",
          value: function record() {
            var _this$System$loads;

            var rec = (_this$System$loads = this.System.loads) === null || _this$System$loads === void 0 ? void 0 : _this$System$loads[this.id];
            if (!rec) return null;

            __varRecorder__$9.ModuleInterface.sanitizeRecord(rec, this.System);

            return rec;
          }
        }, {
          key: "updateRecord",
          value: function updateRecord(doFunc) {
            var record = this.record();
            if (!record) throw new Error("es6 environment global of ".concat(this.id, ": module not loaded, cannot get export object!"));
            record.locked = true;

            try {
              return doFunc(record);
            } finally {
              record.locked = false;
            }
          }
        }, {
          key: "search",
          value: function () {
            var _search = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee27(searchStr, options) {
              var _this12 = this;

              var src, re, flags, _flags, match, res, i, j, line, lineStart, _res$j, idx, length, lineEnd, p;

              return regeneratorRuntime.wrap(function _callee27$(_context27) {
                while (1) {
                  switch (_context27.prev = _context27.next) {
                    case 0:
                      options = Object.assign({
                        excludedModules: []
                      }, options);

                      if (!options.excludedModules.some(function (ex) {
                        if (typeof ex === "string") return ex === _this12.id;
                        if (ex instanceof RegExp) return ex.test(_this12.id);
                        if (typeof ex === "function") return ex(_this12.id);
                        return false;
                      })) {
                        _context27.next = 3;
                        break;
                      }

                      return _context27.abrupt("return", []);

                    case 3:
                      _context27.next = 5;
                      return this.source();

                    case 5:
                      src = _context27.sent;

                      if (searchStr instanceof RegExp) {
                        flags = "g";
                        if (searchStr.ignoreCase) flags += "i";
                        if (searchStr.multiline) flags += "m";
                        re = RegExp(searchStr.source, flags);
                      } else {
                        _flags = "g";
                        if (!options.caseSensitive) _flags = _flags + "i";
                        if (!options.regexMode) searchStr = regExpEscape(searchStr);
                        re = RegExp(searchStr, _flags);
                      }

                      res = [];

                      while ((match = re.exec(src)) !== null) {
                        res.push([match.index, match[0].length]);
                      }

                      i = 0, j = 0, line = 1, lineStart = 0;

                    case 10:
                      if (!(i < src.length && j < res.length)) {
                        _context27.next = 23;
                        break;
                      }

                      if (src[i] === "\n") {
                        line++;
                        lineStart = i + 1;
                      }

                      _res$j = _slicedToArray(res[j], 2), idx = _res$j[0], length = _res$j[1];

                      if (!(i !== idx)) {
                        _context27.next = 15;
                        break;
                      }

                      return _context27.abrupt("continue", 20);

                    case 15:
                      lineEnd = src.slice(lineStart).indexOf("\n");
                      if (lineEnd === -1) lineEnd = src.length;else lineEnd += lineStart;
                      p = this["package"]();
                      res[j] = {
                        moduleId: this.id,
                        packageName: p ? p.name : undefined,
                        pathInPackage: p ? this.pathInPackage() : this.id,
                        isLoaded: this.isLoaded(),
                        length: length,
                        line: line,
                        column: i - lineStart,
                        lineString: lineEnd - lineStart > 1000 ? "...".concat(src.slice(i - 10, i + 100), "...") : src.slice(lineStart, lineEnd)
                      };
                      j++;

                    case 20:
                      i++;
                      _context27.next = 10;
                      break;

                    case 23:
                      return _context27.abrupt("return", res);

                    case 24:
                    case "end":
                      return _context27.stop();
                  }
                }
              }, _callee27, this);
            }));

            function search(_x22, _x23) {
              return _search.apply(this, arguments);
            }

            return search;
          }()
        }, {
          key: "toString",
          value: function toString() {
            return "module(".concat(this.id, ")");
          }
        }, {
          key: "isModule",
          get: function get() {
            return true;
          }
        }, {
          key: "dontTransform",
          get: function get() {
            return [this.recorderName, this.sourceAccessorName, "global", "self", "_moduleExport", "_moduleImport", "localStorage", "prompt", "alert", "fetch", "getComputedStyle"].concat(_toConsumableArray(this.isMochaTest() ? [] : GlobalInjector.getGlobals(this._source))).concat(knownGlobals);
          }
        }, {
          key: "recorder",
          set: function set(v) {
            return this._recorder = v;
          },
          get: function get() {
            if (this._recorder) return this._recorder;
            return this.prepareRecorder();
          }
        }, {
          key: "varDefinitionCallbackName",
          get: function get() {
            return "defVar_" + this.id;
          }
        }], [{
          key: "sanitizeRecord",
          value: function sanitizeRecord(rec, System) {
            var _System$REGISTER_INTE, _System$REGISTER_INTE2, _System$REGISTER_INTE3, _System$REGISTER_INTE4;

            if (!rec) return;
            if (rec.name && rec.exports && rec.setters) return rec;
            rec.name = rec.key;

            if (!rec.hasOwnProperty("__lively_modules__")) {
              rec.__lively_modules__ = {
                evalOnlyExport: {}
              };
            }

            if (!rec.hasOwnProperty("exports")) rec.exports = ((_System$REGISTER_INTE = System.REGISTER_INTERNAL.records[rec.key]) === null || _System$REGISTER_INTE === void 0 ? void 0 : (_System$REGISTER_INTE2 = _System$REGISTER_INTE.linkRecord) === null || _System$REGISTER_INTE2 === void 0 ? void 0 : _System$REGISTER_INTE2.moduleObj) || {};
            if (!rec.hasOwnProperty("setters")) rec.setters = ((_System$REGISTER_INTE3 = System.REGISTER_INTERNAL.records[rec.key]) === null || _System$REGISTER_INTE3 === void 0 ? void 0 : (_System$REGISTER_INTE4 = _System$REGISTER_INTE3.linkRecord) === null || _System$REGISTER_INTE4 === void 0 ? void 0 : _System$REGISTER_INTE4.setters) || [];

            if (!rec.hasOwnProperty("importers")) {
              Object.defineProperty(rec, "importers", {
                get: function get() {
                  return __varRecorder__$9.getImportersOfModule(System, rec);
                }
              });
            }

            if (!rec.hasOwnProperty("dependencies")) {
              Object.defineProperty(rec, "dependencies", {
                get: function get() {
                  var _rec$deps;

                  return ((_rec$deps = rec.deps) === null || _rec$deps === void 0 ? void 0 : _rec$deps.map(function (dep) {
                    return __varRecorder__$9.ModuleInterface.sanitizeRecord(System.loads[rec.depMap[dep]], System);
                  })) || [];
                }
              });
            }

            return rec;
          }
        }]);

        return ModuleInterface;
      }();

      __varRecorder__$9.ModuleInterface = ModuleInterface;
      __varRecorder__$9["default"] = module$2;

      var __varRecorder__$8 = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.modules/src/cache.js", __contextModule__);

      var __moduleMeta__$6 = {
        pathInPackage: function pathInPackage() {
          return "./src/cache.js";
        },
        unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
          return function () {};
        },
        subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
          return function () {};
        },
        "package": function _package() {
          return {
            name: "lively.modules",
            version: "0.8.38"
          };
        }
      };

      var prepareNodejsCaching = __varRecorder__$8["lively.modules/src/cache.js__define__"]("prepareNodejsCaching", "function", function () {
        var fs = System._nodeRequire("fs");

        var path = System._nodeRequire("path");

        var isWindows = process.platform === "win32";
        var nodejsCacheDir = !isWindows && process.cwd() === "/" ? path.join(process.env.HOME, ".lively.next") : process.cwd();
        __varRecorder__$8.nodejsCacheDirURL = isWindows ? "file:///".concat(nodejsCacheDir.replace(/\\/g, "/")) : "file://".concat(nodejsCacheDir);
        if (!fs.existsSync(nodejsCacheDir)) fs.mkdirSync(nodejsCacheDir);
      }, __moduleMeta__$6);

      __varRecorder__$8.prepareNodejsCaching = prepareNodejsCaching;
      var ModuleTranslationCache = /*#__PURE__*/function () {
        function ModuleTranslationCache() {
          _classCallCheck(this, ModuleTranslationCache);
        }

        _createClass(ModuleTranslationCache, [{
          key: "cacheModuleSource",
          value: function cacheModuleSource(moduleId, hash, source) {
            throw new Error("not yet implemented");
          }
        }, {
          key: "fetchStoredModuleSource",
          value: function fetchStoredModuleSource(moduleId) {
            throw new Error("not yet implemented");
          }
        }, {
          key: "deleteCachedData",
          value: function deleteCachedData(moduleId) {
            throw new Error("not yet implemented");
          }
        }], [{
          key: "earliestDate",
          get: function get() {
            return +new Date("Sun Oct 18 2020 16:00:00 GMT-0800 (PST)");
          }
        }]);

        return ModuleTranslationCache;
      }();
      __varRecorder__$8.ModuleTranslationCache = ModuleTranslationCache;
      __varRecorder__$8.nodejsCacheDirURL = null;
      var NodeModuleTranslationCache = /*#__PURE__*/function (_varRecorder__$Modul) {
        _inherits(NodeModuleTranslationCache, _varRecorder__$Modul);

        var _super = _createSuper(NodeModuleTranslationCache);

        function NodeModuleTranslationCache() {
          _classCallCheck(this, NodeModuleTranslationCache);

          return _super.apply(this, arguments);
        }

        _createClass(NodeModuleTranslationCache, [{
          key: "ensurePath",
          value: function () {
            var _ensurePath = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(path) {
              var url, r, packageInfo, _iterator, _step, dir;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.moduleCacheDir.join(path).exists();

                    case 2:
                      if (!_context.sent) {
                        _context.next = 4;
                        break;
                      }

                      return _context.abrupt("return");

                    case 4:
                      url = "";
                      _iterator = _createForOfIteratorHelper(path.split("/"));
                      _context.prev = 6;

                      _iterator.s();

                    case 8:
                      if ((_step = _iterator.n()).done) {
                        _context.next = 35;
                        break;
                      }

                      dir = _step.value;
                      url += dir + "/";
                      r = this.moduleCacheDir.join(url);
                      _context.next = 14;
                      return r.exists();

                    case 14:
                      if (_context.sent) {
                        _context.next = 24;
                        break;
                      }

                      _context.prev = 15;
                      _context.next = 18;
                      return r.mkdir();

                    case 18:
                      _context.next = 24;
                      break;

                    case 20:
                      _context.prev = 20;
                      _context.t0 = _context["catch"](15);

                      if (!(_context.t0.code !== "EEXIST")) {
                        _context.next = 24;
                        break;
                      }

                      throw _context.t0;

                    case 24:
                      r = resource("file://" + url + "/package.json");
                      _context.next = 27;
                      return r.exists();

                    case 27:
                      if (!_context.sent) {
                        _context.next = 33;
                        break;
                      }

                      _context.next = 30;
                      return r.read();

                    case 30:
                      packageInfo = _context.sent;
                      _context.next = 33;
                      return this.moduleCacheDir.join(url + "/package.json").write(packageInfo);

                    case 33:
                      _context.next = 8;
                      break;

                    case 35:
                      _context.next = 40;
                      break;

                    case 37:
                      _context.prev = 37;
                      _context.t1 = _context["catch"](6);

                      _iterator.e(_context.t1);

                    case 40:
                      _context.prev = 40;

                      _iterator.f();

                      return _context.finish(40);

                    case 43:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[6, 37, 40, 43], [15, 20]]);
            }));

            function ensurePath(_x) {
              return _ensurePath.apply(this, arguments);
            }

            return ensurePath;
          }()
        }, {
          key: "dumpModuleCache",
          value: function () {
            var _dumpModuleCache = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var path, r;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.t0 = regeneratorRuntime.keys(System._nodeRequire("module").Module._cache);

                    case 1:
                      if ((_context2.t1 = _context2.t0()).done) {
                        _context2.next = 16;
                        break;
                      }

                      path = _context2.t1.value;
                      r = resource("file://" + path);
                      _context2.next = 6;
                      return r.exists();

                    case 6:
                      if (!_context2.sent) {
                        _context2.next = 14;
                        break;
                      }

                      _context2.t2 = this;
                      _context2.t3 = path;
                      _context2.next = 11;
                      return r.read();

                    case 11:
                      _context2.t4 = _context2.sent;
                      _context2.next = 14;
                      return _context2.t2.cacheModuleSource.call(_context2.t2, _context2.t3, "NO_HASH", _context2.t4);

                    case 14:
                      _context2.next = 1;
                      break;

                    case 16:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function dumpModuleCache() {
              return _dumpModuleCache.apply(this, arguments);
            }

            return dumpModuleCache;
          }()
        }, {
          key: "getFileName",
          value: function getFileName(moduleId) {
            return moduleId.match(/([^\/]*.)(\.js)?$/)[0];
          }
        }, {
          key: "fetchStoredModuleSource",
          value: function () {
            var _fetchStoredModuleSource = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(moduleId) {
              var fname, fpath, r, _yield$r$stat, timestamp, source, hash;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!moduleId.endsWith("package.json")) {
                        _context3.next = 2;
                        break;
                      }

                      return _context3.abrupt("return", null);

                    case 2:
                      moduleId = moduleId.replace("file://", "");
                      fname = this.getFileName(moduleId);
                      fpath = moduleId.replace(fname, "");
                      r = this.moduleCacheDir.join(moduleId);
                      _context3.next = 8;
                      return r.exists();

                    case 8:
                      if (_context3.sent) {
                        _context3.next = 10;
                        break;
                      }

                      return _context3.abrupt("return", null);

                    case 10:
                      _context3.next = 12;
                      return r.stat();

                    case 12:
                      _yield$r$stat = _context3.sent;
                      timestamp = _yield$r$stat.birthtime;
                      _context3.next = 16;
                      return r.read();

                    case 16:
                      source = _context3.sent;
                      _context3.next = 19;
                      return this.moduleCacheDir.join(fpath + "/.hash_" + fname).read();

                    case 19:
                      hash = _context3.sent;
                      return _context3.abrupt("return", {
                        source: source,
                        timestamp: timestamp,
                        hash: hash
                      });

                    case 21:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function fetchStoredModuleSource(_x2) {
              return _fetchStoredModuleSource.apply(this, arguments);
            }

            return fetchStoredModuleSource;
          }()
        }, {
          key: "cacheModuleSource",
          value: function () {
            var _cacheModuleSource = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(moduleId, hash, source) {
              var fname, fpath;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (!moduleId.endsWith("package.json")) {
                        _context4.next = 2;
                        break;
                      }

                      return _context4.abrupt("return");

                    case 2:
                      moduleId = moduleId.replace("file://", "");
                      fname = this.getFileName(moduleId);
                      fpath = moduleId.replace(fname, "");
                      _context4.next = 7;
                      return this.ensurePath(fpath);

                    case 7:
                      _context4.next = 9;
                      return this.moduleCacheDir.join(moduleId).write(source);

                    case 9:
                      _context4.next = 11;
                      return this.moduleCacheDir.join(fpath + "/.hash_" + fname).write(hash);

                    case 11:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function cacheModuleSource(_x3, _x4, _x5) {
              return _cacheModuleSource.apply(this, arguments);
            }

            return cacheModuleSource;
          }()
        }, {
          key: "deleteCachedData",
          value: function () {
            var _deleteCachedData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(moduleId) {
              var r;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      moduleId = moduleId.replace("file://", "");
                      r = this.moduleCacheDir.join(moduleId);
                      _context5.next = 4;
                      return r.exists();

                    case 4:
                      if (_context5.sent) {
                        _context5.next = 6;
                        break;
                      }

                      return _context5.abrupt("return", false);

                    case 6:
                      _context5.next = 8;
                      return r.remove();

                    case 8:
                      return _context5.abrupt("return", true);

                    case 9:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function deleteCachedData(_x6) {
              return _deleteCachedData.apply(this, arguments);
            }

            return deleteCachedData;
          }()
        }, {
          key: "moduleCacheDir",
          get: function get() {
            if (!__varRecorder__$8.nodejsCacheDirURL) __varRecorder__$8.prepareNodejsCaching();
            return resource("".concat(__varRecorder__$8.nodejsCacheDirURL, "/.module_cache/"));
          }
        }]);

        return NodeModuleTranslationCache;
      }(__varRecorder__$8.ModuleTranslationCache);
      __varRecorder__$8.NodeModuleTranslationCache = NodeModuleTranslationCache;
      var BrowserModuleTranslationCache = exports('B', /*#__PURE__*/function (_varRecorder__$Modul2) {
        _inherits(BrowserModuleTranslationCache, _varRecorder__$Modul2);

        var _super2 = _createSuper(BrowserModuleTranslationCache);

        function BrowserModuleTranslationCache() {
          var _this;

          var dbName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "lively.modules-module-translation-cache";

          _classCallCheck(this, BrowserModuleTranslationCache);

          _this = _super2.call(this);
          _this.version = 2;
          _this.sourceCodeCacheStoreName = "sourceCodeStore";
          _this.dbName = dbName;
          _this.db = _this.openDb();
          return _this;
        }

        _createClass(BrowserModuleTranslationCache, [{
          key: "openDb",
          value: function openDb() {
            var _this2 = this;

            var req = System.global.indexedDB.open(this.version);
            return new Promise(function (resolve, reject) {
              req.onsuccess = function (evt) {
                resolve(this.result);
              };

              req.onerror = function (evt) {
                return reject(evt.target);
              };

              req.onupgradeneeded = function (evt) {
                return evt.currentTarget.result.createObjectStore(_this2.sourceCodeCacheStoreName, {
                  keyPath: "moduleId"
                });
              };
            });
          }
        }, {
          key: "deleteDb",
          value: function deleteDb() {
            var req = System.global.indexedDB.deleteDatabase(this.dbName);
            return new Promise(function (resolve, reject) {
              req.onerror = function (evt) {
                return reject(evt.target);
              };

              req.onsuccess = function (evt) {
                return resolve(evt);
              };
            });
          }
        }, {
          key: "closeDb",
          value: function () {
            var _closeDb = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var db, req;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.db;

                    case 2:
                      db = _context6.sent;
                      req = db.close();
                      return _context6.abrupt("return", new Promise(function (resolve, reject) {
                        req.onsuccess = function (evt) {
                          resolve(this.result);
                        };

                        req.onerror = function (evt) {
                          return reject(evt.target.errorCode);
                        };
                      }));

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function closeDb() {
              return _closeDb.apply(this, arguments);
            }

            return closeDb;
          }()
        }, {
          key: "cacheModuleSource",
          value: function () {
            var _cacheModuleSource2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(moduleId, hash, source) {
              var _this3 = this;

              var exports,
                  db,
                  _args7 = arguments;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      exports = _args7.length > 3 && _args7[3] !== undefined ? _args7[3] : [];
                      _context7.next = 3;
                      return this.db;

                    case 3:
                      db = _context7.sent;
                      return _context7.abrupt("return", new Promise(function (resolve, reject) {
                        var transaction = db.transaction([_this3.sourceCodeCacheStoreName], "readwrite");
                        var store = transaction.objectStore(_this3.sourceCodeCacheStoreName);
                        var timestamp = Date.now();
                        store.put({
                          moduleId: moduleId,
                          hash: hash,
                          source: source,
                          timestamp: timestamp,
                          exports: JSON.stringify(exports.map(function (_ref) {
                            var type = _ref.type,
                                exported = _ref.exported,
                                local = _ref.local,
                                fromModule = _ref.fromModule;
                            return {
                              type: type,
                              exported: exported,
                              local: local,
                              fromModule: fromModule
                            };
                          }))
                        });
                        transaction.oncomplete = resolve;
                        transaction.onerror = reject;
                      }));

                    case 5:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            function cacheModuleSource(_x7, _x8, _x9) {
              return _cacheModuleSource2.apply(this, arguments);
            }

            return cacheModuleSource;
          }()
        }, {
          key: "fetchStoredModuleSource",
          value: function () {
            var _fetchStoredModuleSource2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(moduleId) {
              var _this4 = this;

              var db;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.db;

                    case 2:
                      db = _context8.sent;
                      return _context8.abrupt("return", new Promise(function (resolve, reject) {
                        var transaction = db.transaction([_this4.sourceCodeCacheStoreName]);
                        var objectStore = transaction.objectStore(_this4.sourceCodeCacheStoreName);
                        var req = objectStore.get(moduleId);
                        req.onerror = reject;

                        req.onsuccess = function (evt) {
                          return resolve(req.result);
                        };
                      }));

                    case 4:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function fetchStoredModuleSource(_x10) {
              return _fetchStoredModuleSource2.apply(this, arguments);
            }

            return fetchStoredModuleSource;
          }()
        }, {
          key: "deleteCachedData",
          value: function () {
            var _deleteCachedData2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(moduleId) {
              var _this5 = this;

              var db;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.db;

                    case 2:
                      db = _context9.sent;
                      return _context9.abrupt("return", new Promise(function (resolve, reject) {
                        var transaction = db.transaction([_this5.sourceCodeCacheStoreName], "readwrite");
                        var objectStore = transaction.objectStore(_this5.sourceCodeCacheStoreName);
                        var req = objectStore["delete"](moduleId);
                        req.onerror = reject;

                        req.onsuccess = function (evt) {
                          return resolve(req.result);
                        };
                      }));

                    case 4:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));

            function deleteCachedData(_x11) {
              return _deleteCachedData2.apply(this, arguments);
            }

            return deleteCachedData;
          }()
        }]);

        return BrowserModuleTranslationCache;
      }(__varRecorder__$8.ModuleTranslationCache));
      __varRecorder__$8.BrowserModuleTranslationCache = BrowserModuleTranslationCache;

      var __varRecorder__$7 = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.modules/src/instrumentation.js", __contextModule__);

      var __moduleMeta__$5 = {
        pathInPackage: function pathInPackage() {
          return "./src/instrumentation.js";
        },
        unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
          return function () {};
        },
        subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
          return function () {};
        },
        "package": function _package() {
          return {
            name: "lively.modules",
            version: "0.8.38"
          };
        }
      };

      var getExceptions = __varRecorder__$7["lively.modules/src/instrumentation.js__define__"]("getExceptions", "function", function () {
        return __varRecorder__$7.exceptions;
      }, __moduleMeta__$5);

      __varRecorder__$7.getExceptions = getExceptions;

      var setExceptions = __varRecorder__$7["lively.modules/src/instrumentation.js__define__"]("setExceptions", "function", function (v) {
        return __varRecorder__$7.exceptions = v;
      }, __moduleMeta__$5);

      __varRecorder__$7.setExceptions = setExceptions;

      var prepareCodeForCustomCompile = __varRecorder__$7["lively.modules/src/instrumentation.js__define__"]("prepareCodeForCustomCompile", "function", function (System, source, moduleId, module, debug) {
        source = String(source);
        var sourceAccessorName = module.sourceAccessorName,
            recorder = module.recorder,
            recorderName = module.recorderName,
            dontTransform = module.dontTransform,
            varDefinitionCallbackName = module.varDefinitionCallbackName,
            _module$embedOriginal = module.embedOriginalCode,
            embedOriginalCode = _module$embedOriginal === void 0 ? true : _module$embedOriginal;
        sourceAccessorName = embedOriginalCode ? sourceAccessorName : undefined;
        var options = {
          topLevelVarRecorder: recorder,
          varRecorderName: recorderName,
          sourceAccessorName: sourceAccessorName,
          dontTransform: dontTransform,
          jsx: moduleId.endsWith(".jsx"),
          recordGlobals: true,
          keepPreviouslyDeclaredValues: true,
          declarationWrapperName: varDefinitionCallbackName,
          evalId: module.nextEvalId(),
          classTransform: classToFunctionTransform,
          currentModuleAccessor: __varRecorder__$7.funcCall(__varRecorder__$7.member(__varRecorder__$7.funcCall(__varRecorder__$7.member(__varRecorder__$7.member("__lvVarRecorder", "System"), "get"), __varRecorder__$7.literal("@lively-env")), "moduleEnv"), __varRecorder__$7.literal(moduleId))
        };
        var isGlobal = recorderName === "System.global";
        var header = debug ? "console.log(\"[lively.modules] executing module ".concat(moduleId, "\");\n") : "";
        var footer = "";

        if (isGlobal) {
          delete options.declarationWrapperName;
        } else {
          header += "SystemJS.get(\"@lively-env\").evaluationStart(\"".concat(moduleId, "\");\n") + "var ".concat(recorderName, " = SystemJS.get(\"@lively-env\").moduleEnv(\"").concat(moduleId, "\").recorder;\n") + (embedOriginalCode ? "\nvar ".concat(sourceAccessorName, " = ").concat(JSON.stringify(source), ";\n") : "");
          footer += "\nSystemJS.get(\"@lively-env\").evaluationEnd(\"".concat(moduleId, "\");");
        }

        try {
          var rewrittenSource = header + evalCodeTransform(source, options) + footer;
          if (debug && typeof $world !== "undefined" && $world.get("log") && $world.get("log").isText) $world.get("log").textString = rewrittenSource;
          return {
            source: rewrittenSource,
            options: options
          };
        } catch (e) {
          console.error("Error in prepareCodeForCustomCompile of ".concat(moduleId, " ").concat(e.stack));
          return {
            source: source,
            options: options
          };
        }
      }, __moduleMeta__$5);

      __varRecorder__$7.prepareCodeForCustomCompile = prepareCodeForCustomCompile;

      var prepareTranslatedCodeForSetterCapture = __varRecorder__$7["lively.modules/src/instrumentation.js__define__"]("prepareTranslatedCodeForSetterCapture", "function", function (System, source, moduleId, module, options, debug) {
        source = String(source);
        var tfmOptions = Object.assign({}, options, {
          classTransform: classToFunctionTransform,
          topLevelVarRecorder: module.recorder,
          varRecorderName: module.recorderName,
          dontTransform: module.dontTransform,
          recordGlobals: true,
          declarationWrapperName: module.varDefinitionCallbackName,
          currentModuleAccessor: __varRecorder__$7.funcCall(__varRecorder__$7.member(__varRecorder__$7.funcCall(__varRecorder__$7.member(__varRecorder__$7.member("__lvVarRecorder", "System"), "get"), __varRecorder__$7.literal("@lively-env")), "moduleEnv"), __varRecorder__$7.literal(moduleId))
        });

        try {
          var rewrittenSource = evalCodeTransformOfSystemRegisterSetters(source, tfmOptions);
          if (debug && typeof $world !== "undefined" && $world.get("log") && $world.get("log").isText) $world.get("log").textString += rewrittenSource;
          return rewrittenSource;
        } catch (e) {
          console.error("Error in prepareTranslatedCodeForSetterCapture", e.stack);
          return source;
        }
      }, __moduleMeta__$5);

      __varRecorder__$7.prepareTranslatedCodeForSetterCapture = prepareTranslatedCodeForSetterCapture;

      var getCachedNodejsModule = __varRecorder__$7["lively.modules/src/instrumentation.js__define__"]("getCachedNodejsModule", "function", function (System, load) {
        try {
          var Module = System._nodeRequire("module").Module;

          var id = Module._resolveFilename(load.name.replace(/^file:\/\//, "").replace(/^\/([a-z]:\/)/i, "$1"));

          var nodeModule = Module._cache[id];
          return nodeModule;
        } catch (e) {
          System.debug && console.log("[lively.modules getCachedNodejsModule] %s unknown to nodejs", load.name);
        }

        return null;
      }, __moduleMeta__$5);

      __varRecorder__$7.getCachedNodejsModule = getCachedNodejsModule;

      var addNodejsWrapperSource = __varRecorder__$7["lively.modules/src/instrumentation.js__define__"]("addNodejsWrapperSource", "function", function (System, load) {
        var m = __varRecorder__$7.getCachedNodejsModule(System, load);

        if (m) {
          load.metadata.format = "esm";
          load.source = "var exports = System._nodeRequire('".concat(m.id, "'); export default exports;\n") + allOwnPropertiesOrFunctions(m.exports).map(function (k) {
            return isValidIdentifier(k) ? "export var ".concat(k, " = exports['").concat(k, "'];") : "/*ignoring export \"".concat(k, "\" b/c it is not a valid identifier*/");
          }).join("\n");
          System.debug && console.log("[lively.modules customTranslate] loading %s from nodejs module cache", load.name);
          return true;
        }

        System.debug && console.log("[lively.modules customTranslate] %s not yet in nodejs module cache", load.name);
        return false;
      }, __moduleMeta__$5);

      __varRecorder__$7.addNodejsWrapperSource = addNodejsWrapperSource;

      var customTranslate = __varRecorder__$7["lively.modules/src/instrumentation.js__define__"]("customTranslate", "function", /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(load) {
          var System, debug, meta, ignored, start, format, mod, instrumented, isEsm, useCache, indexdb, hashForCache, cache, stored, _cache, _stored, source;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  System = this;
                  debug = System.debug;
                  meta = load.metadata;
                  ignored = meta && meta.hasOwnProperty("instrument") && !meta.instrument || __varRecorder__$7.exceptions.some(function (exc) {
                    return exc(load.name);
                  });

                  if (!ignored) {
                    _context.next = 7;
                    break;
                  }

                  debug && console.log("[lively.modules customTranslate ignoring] %s", load.name);
                  return _context.abrupt("return", load.source);

                case 7:
                  if (!(__varRecorder__$7.isNode && __varRecorder__$7.addNodejsWrapperSource(System, load))) {
                    _context.next = 10;
                    break;
                  }

                  debug && console.log("[lively.modules] loaded %s from nodejs cache", load.name);
                  return _context.abrupt("return", load.source);

                case 10:
                  start = load.metadata.ts = Date.now();
                  format = detectModuleFormat(load.source, meta);
                  mod = module$3(System, load.name);
                  instrumented = false;
                  isEsm = format === "esm";
                  mod.setSource(load.source);
                  _context.prev = 16;
                  useCache = System.useModuleTranslationCache;
                  indexdb = System.global.indexedDB;
                  hashForCache = meta.hashForCache = useCache && String(hashCode(load.source));

                  if (!(useCache && indexdb && isEsm)) {
                    _context.next = 34;
                    break;
                  }

                  cache = System._livelyModulesTranslationCache || (System._livelyModulesTranslationCache = new BrowserModuleTranslationCache());

                  if (cache.constructor !== BrowserModuleTranslationCache) {
                    adoptObject(cache, BrowserModuleTranslationCache);
                  }

                  _context.next = 25;
                  return cache.fetchStoredModuleSource(load.name);

                case 25:
                  stored = _context.sent;

                  if (!(stored && stored.hash === hashForCache && stored.timestamp >= BrowserModuleTranslationCache.earliestDate)) {
                    _context.next = 32;
                    break;
                  }

                  if (!stored.source) {
                    _context.next = 32;
                    break;
                  }

                  meta.format = "register";
                  meta.deps = [];
                  debug && console.log("[lively.modules customTranslate] loaded %s from browser cache after %sms", load.name, Date.now() - start);
                  return _context.abrupt("return", Promise.resolve(stored.source));

                case 32:
                  _context.next = 45;
                  break;

                case 34:
                  if (!(__varRecorder__$7.isNode && useCache && isEsm)) {
                    _context.next = 45;
                    break;
                  }

                  _cache = System._livelyModulesTranslationCache || (System._livelyModulesTranslationCache = new NodeModuleTranslationCache());
                  _context.next = 38;
                  return _cache.fetchStoredModuleSource(load.name);

                case 38:
                  _stored = _context.sent;

                  if (!(_stored && _stored.hash === hashForCache && _stored.timestamp >= NodeModuleTranslationCache.earliestDate)) {
                    _context.next = 45;
                    break;
                  }

                  if (!_stored.source) {
                    _context.next = 45;
                    break;
                  }

                  meta.format = "register";
                  meta.deps = [];
                  debug && console.log("[lively.modules customTranslate] loaded %s from filesystem cache after %sms", load.name, Date.now() - start);
                  return _context.abrupt("return", Promise.resolve(_stored.source));

                case 45:
                  _context.next = 50;
                  break;

                case 47:
                  _context.prev = 47;
                  _context.t0 = _context["catch"](16);
                  console.error("[lively.modules customTranslate] error reading module translation cache: ".concat(_context.t0.stack));

                case 50:
                  meta.compileOptions = {};
                  source = load.source;

                  if (isEsm) {
                    mod.recorderName = "__lvVarRecorder";

                    if (mod.recorder === System.global) {
                      mod.unloadEnv();
                    }

                    load.metadata.format = "esm";
                    __varRecorder__$7.__inter0__ = __varRecorder__$7.prepareCodeForCustomCompile(System, source, load.name, mod, debug), __varRecorder__$7.__inter0__.options, source = __varRecorder__$7.__inter0__.source, __varRecorder__$7.__inter0__;
                    load.source = source;
                    load.metadata["lively.modules instrumented"] = true;
                    instrumented = true;
                    debug && console.log("[lively.modules] loaded %s as es6 module", load.name);
                  } else if (load.metadata.format === "global") {
                    mod.recorderName = "System.global";
                    mod.recorder = System.global;
                    load.metadata.format = "global";
                    __varRecorder__$7.__inter1__ = __varRecorder__$7.prepareCodeForCustomCompile(System, source, load.name, mod, debug), __varRecorder__$7.__inter1__.options, source = __varRecorder__$7.__inter1__.source, __varRecorder__$7.__inter1__;
                    load.source = source;
                    load.metadata["lively.modules instrumented"] = true;
                    instrumented = true;
                    debug && console.log("[lively.modules] loaded %s as instrumented global module", load.name);
                  }

                  if (!instrumented) {
                    debug && console.log("[lively.modules] customTranslate ignoring %s b/c don't know how to handle format %s", load.name, load.metadata.format);
                  }

                  return _context.abrupt("return", load.source);

                case 55:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[16, 47]]);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), __moduleMeta__$5);

      __varRecorder__$7.customTranslate = customTranslate;

      var postCustomTranslate = __varRecorder__$7["lively.modules/src/instrumentation.js__define__"]("postCustomTranslate", "function", /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(load) {
          var start, translated, debug, indexdb, mod, hashForCache, options, useCache, cache, _cache2;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  start = load.metadata.ts;

                  if (load.metadata["lively.modules instrumented"]) {
                    _context2.next = 3;
                    break;
                  }

                  return _context2.abrupt("return");

                case 3:
                  translated = load.source;
                  debug = System.debug;
                  indexdb = System.global.indexedDB;
                  mod = module$3(System, load.name);
                  hashForCache = load.metadata.hashForCache;
                  options = load.metadata.compileOptions;
                  useCache = System.useModuleTranslationCache;

                  if (translated.indexOf("System.register(") === 0) {
                    debug && console.log("[lively.modules customTranslate] Installing System.register setter captures for %s", load.name);
                    translated = __varRecorder__$7.prepareTranslatedCodeForSetterCapture(System, translated, load.name, mod, options, debug);
                  }

                  if (!(__varRecorder__$7.isNode && useCache)) {
                    _context2.next = 31;
                    break;
                  }

                  cache = System._livelyModulesTranslationCache || (System._livelyModulesTranslationCache = new NodeModuleTranslationCache());
                  _context2.prev = 13;
                  _context2.t0 = cache;
                  _context2.t1 = load.name;
                  _context2.t2 = hashForCache;
                  _context2.t3 = translated;
                  _context2.next = 20;
                  return mod.exports();

                case 20:
                  _context2.t4 = _context2.sent;
                  _context2.next = 23;
                  return _context2.t0.cacheModuleSource.call(_context2.t0, _context2.t1, _context2.t2, _context2.t3, _context2.t4);

                case 23:
                  debug && console.log("[lively.modules customTranslate] stored cached version in filesystem for %s", load.name);
                  _context2.next = 29;
                  break;

                case 26:
                  _context2.prev = 26;
                  _context2.t5 = _context2["catch"](13);
                  console.error("[lively.modules customTranslate] failed storing module cache: ".concat(_context2.t5.stack));

                case 29:
                  _context2.next = 49;
                  break;

                case 31:
                  if (!(useCache && indexdb)) {
                    _context2.next = 49;
                    break;
                  }

                  _cache2 = System._livelyModulesTranslationCache || (System._livelyModulesTranslationCache = new BrowserModuleTranslationCache());
                  _context2.prev = 33;
                  _context2.t6 = _cache2;
                  _context2.t7 = load.name;
                  _context2.t8 = hashForCache;
                  _context2.t9 = translated;
                  _context2.next = 40;
                  return mod.exports();

                case 40:
                  _context2.t10 = _context2.sent;
                  _context2.next = 43;
                  return _context2.t6.cacheModuleSource.call(_context2.t6, _context2.t7, _context2.t8, _context2.t9, _context2.t10);

                case 43:
                  debug && console.log("[lively.modules customTranslate] stored cached version for %s", load.name);
                  _context2.next = 49;
                  break;

                case 46:
                  _context2.prev = 46;
                  _context2.t11 = _context2["catch"](33);
                  console.error("[lively.modules customTranslate] failed storing module cache: ".concat(_context2.t11.stack));

                case 49:
                  debug && console.log("[lively.modules customTranslate] done %s after %sms", load.name, Date.now() - start);
                  load.source = translated;

                case 51:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, null, [[13, 26], [33, 46]]);
        }));

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }(), __moduleMeta__$5);

      __varRecorder__$7.postCustomTranslate = postCustomTranslate;

      var instrumentSourceOfEsmModuleLoad = __varRecorder__$7["lively.modules/src/instrumentation.js__define__"]("instrumentSourceOfEsmModuleLoad", "function", /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(System, load) {
          var translated, parsed, callExpression, registerCall, depNames, declareFuncNode, declareFuncSource, declare;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return __varRecorder__$7.customTranslate.bind(System)(load);

                case 2:
                  load.source = _context3.sent;
                  _context3.next = 5;
                  return System.translate(load);

                case 5:
                  translated = _context3.sent;
                  parsed = parse(translated);
                  callExpression = parsed.body.find(function (ea) {
                    return ea.expression && ea.expression.type === "CallExpression" && ea.expression.callee.property.name === "register";
                  });

                  if (callExpression) {
                    _context3.next = 10;
                    break;
                  }

                  throw new Error("Cannot find register call in translated source of ".concat(load.name));

                case 10:
                  registerCall = callExpression.expression;
                  depNames = registerCall.arguments[0].elements.map(function (ea) {
                    return ea.value;
                  });
                  declareFuncNode = registerCall.arguments[1];
                  declareFuncSource = translated.slice(declareFuncNode.start, declareFuncNode.end);
                  declare = eval("var SystemJS = System; var __moduleName = \"".concat(load.name, "\";\n(").concat(declareFuncSource, ");\n//# sourceURL=").concat(load.name, "\n"));

                  if (System.debug && $world !== "undefined" && $world.get("log") && $world.get("log").isText) {
                    $world.get("log").textString = declare;
                  }

                  return _context3.abrupt("return", {
                    localDeps: depNames,
                    declare: declare
                  });

                case 17:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function (_x3, _x4) {
          return _ref3.apply(this, arguments);
        };
      }(), __moduleMeta__$5);

      __varRecorder__$7.instrumentSourceOfEsmModuleLoad = instrumentSourceOfEsmModuleLoad;

      var instrumentSourceOfGlobalModuleLoad = __varRecorder__$7["lively.modules/src/instrumentation.js__define__"]("instrumentSourceOfGlobalModuleLoad", "function", function (System, load) {
        return System.translate(load).then(function (translated) {
          return {
            translated: translated
          };
        });
      }, __moduleMeta__$5);

      __varRecorder__$7.instrumentSourceOfGlobalModuleLoad = instrumentSourceOfGlobalModuleLoad;
      var destructured_1 = nodes;
      __varRecorder__$7.funcCall = destructured_1.funcCall;
      __varRecorder__$7.member = destructured_1.member;
      __varRecorder__$7.literal = destructured_1.literal;
      __varRecorder__$7.isNode = System.get("@system-env").node;
      __varRecorder__$7.node_modulesDir = System.decanonicalize("lively.modules/node_modules/");
      __varRecorder__$7.exceptions = [function (id) {
        return !id.endsWith(".js") && !id.endsWith(".jsx") && !id.startsWith("https://jspm.dev") && !id.startsWith("esm://");
      }, function (id) {
        return id.endsWith("dist/acorn.js") || id.endsWith("dist/escodegen.browser.js") || id.endsWith("bowser.js") || id.endsWith("TweenMax.min.js");
      }, function (id) {
        return id.endsWith("babel-core/browser.js") || id.endsWith("system.src.js") || id.includes("systemjs-plugin-babel");
      }];
      __varRecorder__$7.prepareCodeForCustomCompile = prepareCodeForCustomCompile;
      __varRecorder__$7.prepareTranslatedCodeForSetterCapture = prepareTranslatedCodeForSetterCapture;
      __varRecorder__$7.customTranslate = customTranslate;
      __varRecorder__$7.postCustomTranslate = postCustomTranslate;
      __varRecorder__$7.getExceptions = getExceptions;
      __varRecorder__$7.setExceptions = setExceptions;
      __varRecorder__$7.instrumentSourceOfEsmModuleLoad = instrumentSourceOfEsmModuleLoad;
      __varRecorder__$7.instrumentSourceOfGlobalModuleLoad = instrumentSourceOfGlobalModuleLoad;

      (lively.FreezerRuntime || lively.frozenModules).recorderFor("@empty", __contextModule__);

      var __varRecorder__$6 = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.modules/src/resource.js", __contextModule__);

      var __moduleMeta__$4 = {
        pathInPackage: function pathInPackage() {
          return "./src/resource.js";
        },
        unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
          return function () {};
        },
        subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
          return function () {};
        },
        "package": function _package() {
          return {
            name: "lively.modules",
            version: "0.8.38"
          };
        }
      };

      var fetchResource = __varRecorder__$6["lively.modules/src/resource.js__define__"]("fetchResource", "function", /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(proceed, load) {
          var System, isCjs, largeModuleSize, url, res, useNodeFetch, result, error, hashUrl, useCache, indexdb, cache, _varRecorder__$jsFil, stored, normalizedName, isWebResource, isCrossDomain;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  System = this;
                  isCjs = !!System.METADATA[load.name].isCjs;
                  largeModuleSize = 250 * 1000;
                  url = load.name + (isCjs ? "!cjs" : "");
                  res = System.resource(url);
                  useNodeFetch = System.get("@system-env").node && !res.isNodeJSFileResource && !res.isESMResource;

                  if (!useNodeFetch) {
                    _context.next = 10;
                    break;
                  }

                  _context.next = 9;
                  return __varRecorder__$6.fetch(url);

                case 9:
                  res = _context.sent;

                case 10:
                  if (res) {
                    _context.next = 12;
                    break;
                  }

                  return _context.abrupt("return", proceed(load));

                case 12:
                  if (!(!__varRecorder__$6.jsFileHashMap && !System.get("@system-env").node)) {
                    _context.next = 23;
                    break;
                  }

                  hashUrl = System.resource(System.baseURL).join("__JS_FILE_HASHES__");
                  _context.next = 16;
                  return hashUrl.exists();

                case 16:
                  if (!_context.sent) {
                    _context.next = 22;
                    break;
                  }

                  _context.next = 19;
                  return hashUrl.readJson();

                case 19:
                  __varRecorder__$6.jsFileHashMap = _context.sent;
                  _context.next = 23;
                  break;

                case 22:
                  __varRecorder__$6.jsFileHashMap = {};

                case 23:
                  useCache = System.useModuleTranslationCache;
                  indexdb = System.global.indexedDB;
                  cache = System._livelyModulesTranslationCache;

                  if (!(!System.get("@system-env").node && useCache && indexdb && cache)) {
                    _context.next = 35;
                    break;
                  }

                  _context.next = 29;
                  return cache.fetchStoredModuleSource(load.name);

                case 29:
                  stored = _context.sent;
                  normalizedName = load.name.replace(System.baseURL, "/");

                  if (normalizedName.startsWith("esm://cache")) {
                    normalizedName = "/esm_cache/" + ESMResource.normalize(normalizedName).join("/");
                  }

                  if (!(stored && ((_varRecorder__$jsFil = __varRecorder__$6.jsFileHashMap) === null || _varRecorder__$jsFil === void 0 ? void 0 : _varRecorder__$jsFil[normalizedName]) === Number.parseInt(stored.hash))) {
                    _context.next = 35;
                    break;
                  }

                  load.metadata.instrument = false;
                  return _context.abrupt("return", stored.source);

                case 35:
                  if (!(res.isResource && res.ext() && res.ext().startsWith("css"))) {
                    _context.next = 37;
                    break;
                  }

                  return _context.abrupt("return", "");

                case 37:
                  _context.prev = 37;

                  if (!res.isResource) {
                    _context.next = 44;
                    break;
                  }

                  _context.next = 41;
                  return res.read();

                case 41:
                  _context.t0 = _context.sent;
                  _context.next = 45;
                  break;

                case 44:
                  _context.t0 = res;

                case 45:
                  result = _context.t0;
                  _context.next = 51;
                  break;

                case 48:
                  _context.prev = 48;
                  _context.t1 = _context["catch"](37);
                  error = _context.t1;

                case 51:
                  if (!(error && System.get("@system-env").browser)) {
                    _context.next = 64;
                    break;
                  }

                  isWebResource = res.url.startsWith("http");
                  isCrossDomain = !res.url.startsWith(document.location.origin);

                  if (!(isWebResource && isCrossDomain)) {
                    _context.next = 64;
                    break;
                  }

                  _context.prev = 55;
                  _context.next = 58;
                  return res.makeProxied(System.baseURL).read();

                case 58:
                  result = _context.sent;
                  error = null;
                  _context.next = 64;
                  break;

                case 62:
                  _context.prev = 62;
                  _context.t2 = _context["catch"](55);

                case 64:
                  if (!error) {
                    _context.next = 66;
                    break;
                  }

                  throw error;

                case 66:
                  if (!useNodeFetch) {
                    _context.next = 70;
                    break;
                  }

                  _context.next = 69;
                  return result.text();

                case 69:
                  result = _context.sent;

                case 70:
                  if (result.length > largeModuleSize && typeof $world !== "undefined" && !System._loadingIndicator) {
                    System._loadingIndicator = $world.execCommand("open loading indicator", {
                      label: "loading module",
                      status: load.name.replace(System.baseURL, "")
                    });

                    if (System._loadingIndicator) {
                      $world.env.forceUpdate();
                    }
                  }

                  return _context.abrupt("return", result);

                case 72:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[37, 48], [55, 62]]);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }(), __moduleMeta__$4);

      __varRecorder__$6.fetchResource = fetchResource;

      var livelyProtocol = __varRecorder__$6["lively.modules/src/resource.js__define__"]("livelyProtocol", "function", function (proceed, url) {
        var match = url.match(__varRecorder__$6.livelyURLRe);
        if (!match) return proceed(url);

        var _match = _slicedToArray(match, 3);
            _match[0];
            _match[1];
            var id = _match[2];

        return {
          ext: function ext() {
            return "";
          },
          isResource: true,
          read: function read() {
            var m = typeof $world !== "undefined" && $world.getMorphWithId(id);
            return Promise.resolve(m ? m.textString : "/*Could not locate ".concat(id, "*/"));
          },
          write: function write(source) {
            var m = typeof $world !== "undefined" && $world.getMorphWithId(id);
            if (!m) return Promise.reject("Could not save morph ".concat(id));
            m.textString = source;
            return Promise.resolve(this);
          }
        };
      }, __moduleMeta__$4);

      __varRecorder__$6.livelyProtocol = livelyProtocol;

      var wrapResource = __varRecorder__$6["lively.modules/src/resource.js__define__"]("wrapResource", "function", function (System) {
        System.resource = resource;

        if (isInstalled(System, "fetch", __varRecorder__$6.fetchResource)) {
          remove(System, "fetch", "fetchResource");
        }

        install(System, "fetch", __varRecorder__$6.fetchResource);

        if (isInstalled(System, "resource", "livelyProtocol")) {
          remove(System, "resource", "livelyProtocol");
        }

        install(System, "resource", __varRecorder__$6.livelyProtocol);
      }, __moduleMeta__$4);

      __varRecorder__$6.wrapResource = wrapResource;

      var unwrapResource = __varRecorder__$6["lively.modules/src/resource.js__define__"]("unwrapResource", "function", function (System) {
        remove(System, "fetch", "fetchResource");
        remove(System, "resource", "livelyProtocol");
        delete System.resource;
      }, __moduleMeta__$4);

      __varRecorder__$6.unwrapResource = unwrapResource;
      __varRecorder__$6.fetch = __varRecorder__$6.fetch || undefined;

      if (typeof System !== "undefined" && System.get("@system-env").node) {
        __varRecorder__$6.fetch = _missingExportShim || System._nodeRequire("node-fetch");
      }

      __varRecorder__$6.jsFileHashMap = __varRecorder__$6.jsFileHashMap || undefined;
      __varRecorder__$6.fetchResource = fetchResource;
      __varRecorder__$6.livelyURLRe = /^lively:\/\/([^\/]+)\/(.*)$/;
      __varRecorder__$6.wrapResource = wrapResource;
      __varRecorder__$6.unwrapResource = unwrapResource;

      var LivelyResource = /*#__PURE__*/function (_Resource) {
        _inherits(LivelyResource, _Resource);

        var _super = _createSuper(LivelyResource);

        function LivelyResource() {
          _classCallCheck(this, LivelyResource);

          return _super.apply(this, arguments);
        }

        _createClass(LivelyResource, [{
          key: "read",
          value: function () {
            var _read = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var id, m;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      id = this.morphId;
                      m = typeof $world !== "undefined" && $world.getMorphWithId(id);
                      return _context2.abrupt("return", Promise.resolve(m ? m.textString : "/*Could not locate ".concat(id, "*/")));

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function read() {
              return _read.apply(this, arguments);
            }

            return read;
          }()
        }, {
          key: "write",
          value: function () {
            var _write = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(source) {
              var id, m;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      id = this.morphId;
                      m = typeof $world !== "undefined" && $world.getMorphWithId(id);

                      if (m) {
                        _context3.next = 4;
                        break;
                      }

                      return _context3.abrupt("return", Promise.reject("Could not save morph ".concat(id)));

                    case 4:
                      m.textString = source;
                      return _context3.abrupt("return", Promise.resolve(this));

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function write(_x3) {
              return _write.apply(this, arguments);
            }

            return write;
          }()
        }, {
          key: "exists",
          value: function () {
            var _exists = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      return _context4.abrupt("return", typeof $world !== "undefined" && $world.getMorphWithId(this.morphId));

                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function exists() {
              return _exists.apply(this, arguments);
            }

            return exists;
          }()
        }, {
          key: "remove",
          value: function () {
            var _remove = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      typeof $world !== "undefined" && $world.getMorphWithId(this.morphId).remove();
                      return _context5.abrupt("return", true);

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function remove() {
              return _remove.apply(this, arguments);
            }

            return remove;
          }()
        }, {
          key: "canDealWithJSON",
          get: function get() {
            return false;
          }
        }, {
          key: "morphId",
          get: function get() {
            var match = this.url.match(__varRecorder__$6.livelyURLRe);

            var _match2 = _slicedToArray(match, 3);
                _match2[0];
                _match2[1];
                var id = _match2[2];

            return id;
          }
        }]);

        return LivelyResource;
      }(Resource);

      __varRecorder__$6.LivelyResource = LivelyResource;
      __varRecorder__$6.resourceExtension = {
        name: "lively.modules",
        matches: function matches(url) {
          return url.match(__varRecorder__$6.livelyURLRe);
        },
        resourceClass: __varRecorder__$6.LivelyResource
      };
      var resourceExtension = __varRecorder__$6.resourceExtension;
      __varRecorder__$6.resourceExtension = resourceExtension;
      registerExtension(__varRecorder__$6.resourceExtension);

      var __varRecorder__$5 = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.modules/src/system.js", __contextModule__);

      var __moduleMeta__$3 = {
        pathInPackage: function pathInPackage() {
          return "./src/system.js";
        },
        unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
          return function () {};
        },
        subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
          return function () {};
        },
        "package": function _package() {
          return {
            name: "lively.modules",
            version: "0.8.38"
          };
        }
      };

      var safeAssign = __varRecorder__$5["lively.modules/src/system.js__define__"]("safeAssign", "function", function (proceed) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        if (Object.isFrozen(args[0])) return args;
        return proceed.apply(void 0, args);
      }, __moduleMeta__$3);

      __varRecorder__$5.safeAssign = safeAssign;

      var wrapModuleResolution$1 = __varRecorder__$5["lively.modules/src/system.js__define__"]("wrapModuleResolution", "function", function (System) {
        if (!isInstalled(Object, "assign", "safeAssign")) {
          install(Object, "assign", __varRecorder__$5.safeAssign, "safeAssign");
        }

        if (!isInstalled(System, "normalize", "normalizeHook")) {
          install(System, "normalize", __varRecorder__$5.normalizeHook, "normalizeHook");
        }

        if (!isInstalled(System, "resolve", "normalizeHook")) {
          install(System, "resolve", __varRecorder__$5.normalizeHook, "normalizeHook");
        }

        if (!isInstalled(System, "decanonicalize", "decanonicalizeHook")) {
          install(System, "decanonicalize", __varRecorder__$5.decanonicalizeHook, "decanonicalizeHook");
        }

        if (!isInstalled(System, "normalizeSync", "decanonicalizeHook")) {
          install(System, "normalizeSync", __varRecorder__$5.decanonicalizeHook, "decanonicalizeHook");
        }

        if (!isInstalled(System, "resolveSync", "decanonicalizeHook")) {
          install(System, "resolveSync", __varRecorder__$5.decanonicalizeHook, "decanonicalizeHook");
        }

        if (!isInstalled(System, "newModule", "newModule_volatile")) {
          install(System, "newModule", __varRecorder__$5.newModule_volatile, "newModule_volatile");
        }

        if (!System.registry["REGISTRY"]._originalRegistry) {
          var _Proxy$revocable = Proxy.revocable(System.registry["REGISTRY"], {
            set: function set(target, key, mod) {
              if (__varRecorder__$5.moduleLoadPromises[key]) {
                __varRecorder__$5.moduleLoadPromises[key].resolve(mod);

                delete __varRecorder__$5.moduleLoadPromises[key];
              }

              target[key] = mod;
              return true;
            }
          }),
              wrappedRegistry = _Proxy$revocable.proxy,
              revoke = _Proxy$revocable.revoke;

          wrappedRegistry._revoke = revoke;
          wrappedRegistry._originalRegistry = System.registry["REGISTRY"];
          Object.getOwnPropertySymbols(System.registry).map(function (sym) {
            if (System.registry[sym] === wrappedRegistry._originalRegistry) System.registry[sym] = wrappedRegistry;
          });
          System.registry["REGISTRY"] = wrappedRegistry;
        }

        if (!System["METADATA"]._originalMetadata) {
          System._loads = {};

          var _Proxy$revocable2 = Proxy.revocable(System["METADATA"], {
            set: function set(target, key, mod) {
              if (typeof target[key] === "undefined") {
                target[key] = mod;
              }

              return true;
            },
            deleteProperty: function deleteProperty(target, key, mod) {
              System.REGISTER_INTERNAL.records[key].metadata = target[key];
              delete target[key];
              return true;
            }
          }),
              wrappedMetadata = _Proxy$revocable2.proxy,
              _revoke = _Proxy$revocable2.revoke;

          wrappedMetadata._revoke = _revoke;
          wrappedMetadata._originalMetadata = System["METADATA"];
          Object.getOwnPropertySymbols(System).map(function (sym) {
            if (System[sym] === wrappedMetadata._originalMetadata) System[sym] = wrappedMetadata;
          });
          System["METADATA"] = wrappedMetadata;
        }
      }, __moduleMeta__$3);

      __varRecorder__$5.wrapModuleResolution = wrapModuleResolution$1;

      var unwrapModuleResolution$1 = __varRecorder__$5["lively.modules/src/system.js__define__"]("unwrapModuleResolution", "function", function (System) {
        remove(Object, "assign", "safeAssign");
        remove(System, "normalize", "normalizeHook");
        remove(System, "resolve", "normalizeHook");
        remove(System, "decanonicalize", "decanonicalizeHook");
        remove(System, "normalizeSync", "decanonicalizeHook");
        remove(System, "newModule", "newModule_volatile");
        var wrappedRegistry = System.registry["REGISTRY"];

        if (wrappedRegistry._originalRegistry) {
          Object.getOwnPropertySymbols(System.registry).map(function (sym) {
            if (System.registry[sym] === wrappedRegistry) {
              System.registry[sym] = wrappedRegistry._originalRegistry;
            }
          });
          System.registry["REGISTRY"] = wrappedRegistry._originalRegistry;

          wrappedRegistry._revoke();

          delete System.registry["REGISTRY"]._originalRegistry;
        }

        var wrappedMetadata = System["METADATA"];

        if (wrappedMetadata._originalMetadata) {
          Object.getOwnPropertySymbols(System).map(function (sym) {
            if (System[sym] === wrappedMetadata) {
              System[sym] = wrappedMetadata._originalMetadata;
            }
          });
          System["METADATA"] = wrappedMetadata._originalMetadata;

          wrappedMetadata._revoke();

          delete System["METADATA"]._originalMetadata;
        }
      }, __moduleMeta__$3);

      __varRecorder__$5.unwrapModuleResolution = unwrapModuleResolution$1;

      var livelySystemEnv = __varRecorder__$5["lively.modules/src/system.js__define__"]("livelySystemEnv", "function", function (System) {
        return {
          moduleEnv: function moduleEnv(id) {
            return classHolder.module(System, id);
          },

          get itself() {
            return System.get(System.decanonicalize("lively.modules/index.js"));
          },

          evaluationStart: function evaluationStart(moduleId) {
            classHolder.module(System, moduleId).evaluationStart();
          },
          evaluationEnd: function evaluationEnd(moduleId) {
            classHolder.module(System, moduleId).evaluationEnd();
          },
          dumpConfig: function dumpConfig() {
            return JSON.stringify({
              baseURL: System.baseURL,
              transpiler: System.transpiler,
              map: System.map,
              meta: System.meta,
              packages: System.CONFIG.packages,
              paths: System.paths,
              packageConfigPaths: System.packageConfigPaths
            }, null, 2);
          },

          get packageRegistry() {
            return System["__lively.modules__packageRegistry"];
          },

          set packageRegistry(x) {
            System["__lively.modules__packageRegistry"] = x;
          },

          packages: System["__lively.modules__packages"] || (System["__lively.modules__packages"] = {}),
          loadedModules: System["__lively.modules__loadedModules"] || (System["__lively.modules__loadedModules"] = {}),
          pendingExportChanges: System["__lively.modules__pendingExportChanges"] || (System["__lively.modules__pendingExportChanges"] = {}),
          notifications: System["__lively.modules__notifications"] || (System["__lively.modules__notifications"] = []),
          notificationSubscribers: System["__lively.modules__notificationSubscribers"] || (System["__lively.modules__notificationSubscribers"] = {}),
          options: System["__lively.modules__options"] || (System["__lively.modules__options"] = deepCopy(__varRecorder__$5.defaultOptions)),
          onLoadCallbacks: System["__lively.modules__onLoadCallbacks"] || (System["__lively.modules__onLoadCallbacks"] = []),
          modulePackageMapCache: System["__lively.modules__modulePackageMapCache"]
        };
      }, __moduleMeta__$3);

      __varRecorder__$5.livelySystemEnv = livelySystemEnv;

      var systems = __varRecorder__$5["lively.modules/src/system.js__define__"]("systems", "function", function () {
        if (!System.constructor.systems) System.constructor.systems = {};
        return System.constructor.systems;
      }, __moduleMeta__$3);

      __varRecorder__$5.systems = systems;

      var nameOfSystem = __varRecorder__$5["lively.modules/src/system.js__define__"]("nameOfSystem", "function", function (System) {
        return Object.keys(__varRecorder__$5.systems()).some(function (name) {
          return __varRecorder__$5.systems()[name] === System;
        });
      }, __moduleMeta__$3);

      __varRecorder__$5.nameOfSystem = nameOfSystem;

      var getSystem = __varRecorder__$5["lively.modules/src/system.js__define__"]("getSystem", "function", function (nameOrSystem, config) {
        return nameOrSystem && typeof nameOrSystem !== "string" ? nameOrSystem : __varRecorder__$5.systems()[nameOrSystem] || (__varRecorder__$5.systems()[nameOrSystem] = __varRecorder__$5.makeSystem(config));
      }, __moduleMeta__$3);

      __varRecorder__$5.getSystem = getSystem;

      var removeSystem = __varRecorder__$5["lively.modules/src/system.js__define__"]("removeSystem", "function", function (nameOrSystem) {
        var name = nameOrSystem && typeof nameOrSystem !== "string" ? __varRecorder__$5.nameOfSystem(nameOrSystem) : nameOrSystem;
        delete __varRecorder__$5.systems()[name];
      }, __moduleMeta__$3);

      __varRecorder__$5.removeSystem = removeSystem;

      var makeSystem = __varRecorder__$5["lively.modules/src/system.js__define__"]("makeSystem", "function", function (cfg) {
        return __varRecorder__$5.prepareSystem(new System.constructor(), cfg);
      }, __moduleMeta__$3);

      __varRecorder__$5.makeSystem = makeSystem;

      var prepareSystem = __varRecorder__$5["lively.modules/src/system.js__define__"]("prepareSystem", "function", function (System, config) {
        if (typeof lively !== "undefined") System.trace = lively.isResurrectionBuild;
        delete System.get;
        config = config || {};
        Object.getOwnPropertySymbols(System).map(function (sym) {
          if ("lastRegister" in System[sym]) System["REGISTER_INTERNAL"] = System[sym];else if (System[sym].baseURL) System["CONFIG"] = System[sym];else System["METADATA"] = System[sym];
        });
        Object.getOwnPropertySymbols(System.registry).map(function (sym) {
          System.registry["REGISTRY"] = System.registry[sym];
        });
        var useModuleTranslationCache = config.hasOwnProperty("useModuleTranslationCache") ? config.useModuleTranslationCache : !__varRecorder__$5.urlQuery().noModuleCache;
        System.useModuleTranslationCache = useModuleTranslationCache;
        if (config._nodeRequire) System._nodeRequire = config._nodeRequire;
        System.set("@lively-env", System.newModule(__varRecorder__$5.livelySystemEnv(System)));
        var isWorker = typeof WorkerGlobalScope !== "undefined";

        if (isWorker) {
          System.set("@system-env", System.newModule(Object.assign({}, System.get("@system-env"), {
            browser: true,
            worker: true,
            location: location
          })));
        }

        var isElectron = typeof process !== "undefined" && process.versions && process.versions.electron;

        if (isElectron) {
          System.set("@system-env", System.newModule(Object.assign({
            electron: isElectron
          }, System.get("@system-env"))));
        }

        function customInstantiate(_x, _x2) {
          return _customInstantiate.apply(this, arguments);
        }

        function _customInstantiate() {
          _customInstantiate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(load, proceed) {
            var _this$moduleRegisters;

            var _this$moduleRegisters2;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(this.skipInstantiation && ((_this$moduleRegisters = this.moduleRegisters) === null || _this$moduleRegisters === void 0 ? void 0 : _this$moduleRegisters[load.name]))) {
                      _context2.next = 4;
                      break;
                    }

                    this.REGISTER_INTERNAL.records[load.name].registration = (_this$moduleRegisters2 = this.moduleRegisters) === null || _this$moduleRegisters2 === void 0 ? void 0 : _this$moduleRegisters2[load.name];
                    load.source = undefined;
                    return _context2.abrupt("return", proceed(load));

                  case 4:
                    if (this.moduleSources) this.moduleSources[load.name] = load.source;
                    _context2.next = 7;
                    return postCustomTranslate.call(this, load);

                  case 7:
                    return _context2.abrupt("return", __varRecorder__$5.instantiate_triggerOnLoadCallbacks.call(this, proceed, load));

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
          return _customInstantiate.apply(this, arguments);
        }

        var basePlugin = {
          locate: function locate(load) {
            return __varRecorder__$5.locateHook.call(this, load);
          },
          fetch: function fetch(load, proceed) {
            var _this$moduleSources;

            var s = (_this$moduleSources = this.moduleSources) === null || _this$moduleSources === void 0 ? void 0 : _this$moduleSources[load.name];
            if (s) return s;
            if (this.transpiler !== "lively.transpiler") return proceed(load);
            return fetchResource.call(this, proceed, load);
          },
          translate: function translate(load, opts) {
            if (this.skipInstantiation) return load;
            return customTranslate.call(this, load, opts);
          },
          instantiate: function () {
            var _instantiate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(load, proceed) {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!System.instantiate) {
                        _context.next = 6;
                        break;
                      }

                      _context.next = 3;
                      return System.instantiate(function (load) {
                        return customInstantiate.bind(_this)(load, proceed);
                      }, load);

                    case 3:
                      return _context.abrupt("return", _context.sent);

                    case 6:
                      _context.next = 8;
                      return customInstantiate.bind(this)(load, proceed);

                    case 8:
                      return _context.abrupt("return", _context.sent);

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function instantiate(_x3, _x4) {
              return _instantiate.apply(this, arguments);
            }

            return instantiate;
          }()
        };
        var fetchPlugin = System.newModule(basePlugin);
        var cjsPlugin = System.newModule(basePlugin);
        System.set("lively.fetch", fetchPlugin);
        System.set("cjs", cjsPlugin);
        System.config({
          meta: {
            "*": {
              loader: "lively.fetch"
            },
            "node:*": {
              loader: false,
              format: "esm"
            },
            cjs: {
              loader: false
            },
            "lively.fetch": {
              loader: false
            }
          }
        });
        wrapResource(System);

        __varRecorder__$5.wrapModuleResolution(System);

        var map;

        if (isElectron) {
          var electronCoreModules = ["electron"];
          map = electronCoreModules.reduce(function (map, ea) {
            map[ea] = "@node/" + ea;
            return map;
          }, {});
          config.map = merge(map, config.map);
        }

        if (__varRecorder__$5.isNode) {
          var nodejsCoreModules = ["addons", "assert", "buffer", "child_process", "cluster", "console", "crypto", "dgram", "dns", "domain", "events", "fs", "http", "https", "module", "net", "os", "path", "punycode", "querystring", "readline", "repl", "stream", "stringdecoder", "timers", "tls", "tty", "url", "util", "v8", "vm", "zlib", "constants", "worker_threads", "process"];
          map = nodejsCoreModules.reduce(function (map, ea) {
            map[ea] = map["node:" + ea] = "@node/" + ea;
            return map;
          }, {});
          config.map = merge(map, config.map);
        }

        config.packageConfigPaths = config.packageConfigPaths || ["./node_modules/*/package.json"];

        if (!config.transpiler && System.transpiler === "traceur") {
          var initialSystem = __varRecorder__$5.GLOBAL.System;

          if (initialSystem.transpiler === "lively.transpiler") {
            System.set("lively.transpiler", initialSystem.get("lively.transpiler"));
            System._loader.transpilerPromise = initialSystem._loader.transpilerPromise;
            System.config({
              transpiler: "lively.transpiler",
              babelOptions: Object.assign(initialSystem.babelOptions || {}, config.babelOptions)
            });
          } else {
            System.config({
              map: {
                "plugin-babel": initialSystem.map["plugin-babel"],
                "systemjs-babel-build": initialSystem.map["systemjs-babel-build"]
              },
              transpiler: initialSystem.transpiler,
              babelOptions: Object.assign(initialSystem.babelOptions || {}, config.babelOptions)
            });
          }
        }

        System.config(config);
        return System;
      }, __moduleMeta__$3);

      __varRecorder__$5.prepareSystem = prepareSystem;

      var urlQuery = __varRecorder__$5["lively.modules/src/system.js__define__"]("urlQuery", "function", function () {
        if (typeof document === "undefined" || !document.location) return {};
        return (document.location.search || "").replace(/^\?/, "").split("&").reduce(function (query, ea) {
          var split = ea.split("=");
          var key = split[0];
          var value = split[1];
          if (value === "true" || value === "false") value = eval(value);else if (!isNaN(Number(value))) value = Number(value);
          query[key] = value;
          return query;
        }, {});
      }, __moduleMeta__$3);

      __varRecorder__$5.urlQuery = urlQuery;

      var preNormalize = __varRecorder__$5["lively.modules/src/system.js__define__"]("preNormalize", "function", function (System, name, parent) {
        if (name === "..") name = "../index.js";
        name = name.replace(__varRecorder__$5.doubleSlashRe, function (match) {
          return match[0] === ":" ? match : match[0] + "/";
        });

        var _System$get = System.get("@lively-env"),
            packageRegistry = _System$get.packageRegistry;

        if (packageRegistry) {
          var importMap, mappedObject, packageURL;
          var pkg = parent && packageRegistry.findPackageHavingURL(parent);

          if (pkg) {
            var _systemjs, _map;

            var map, systemjs;
            __varRecorder__$5.__inter0__ = pkg, map = __varRecorder__$5.__inter0__.map, packageURL = __varRecorder__$5.__inter0__.url, systemjs = __varRecorder__$5.__inter0__.systemjs, __varRecorder__$5.__inter0__;
            importMap = !__varRecorder__$5.isNode && ((_systemjs = systemjs) === null || _systemjs === void 0 ? void 0 : _systemjs.importMap);
            mappedObject = ((_map = map) === null || _map === void 0 ? void 0 : _map[name]) || System.map[name];
          }

          if (importMap) {
            var _importMap$imports;

            var remapped = (_importMap$imports = importMap.imports) === null || _importMap$imports === void 0 ? void 0 : _importMap$imports[name];
            var scope;

            if (scope = Object.entries(importMap.scopes).filter(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  k = _ref2[0];
                  _ref2[1];

              return parent.startsWith(k);
            }).sort(function (a, b) {
              return a[0].length - b[0].length;
            }).map(function (_ref3) {
              var _ref4 = _slicedToArray(_ref3, 2);
                  _ref4[0];
                  var scope = _ref4[1];

              return scope;
            }).reduce(function (a, b) {
              return Object.assign({}, a, {}, b);
            }, false)) {
              if (scope[name]) remapped = scope[name];
            }

            if (remapped) {
              name = remapped;
              if (mappedObject) mappedObject = name;
              packageRegistry.moduleUrlToPkg.set(name, pkg);
            }
          }

          if (mappedObject) {
            if (_typeof(mappedObject) === "object") {
              mappedObject = __varRecorder__$5.normalize_doMapWithObject(mappedObject, pkg, System);
            }

            if (typeof mappedObject === "string" && mappedObject !== "") {
              name = mappedObject;
            }

            if (name.startsWith(".")) name = urlResolve(join(packageURL, name));
          }

          var resolved = packageRegistry.resolvePath(name, parent);

          if (resolved) {
            if (resolved.endsWith("/") && !name.endsWith("/")) resolved = resolved.slice(0, -1);
            if (!resolved.endsWith("/") && name.endsWith("/")) resolved = resolved + "/";
            name = resolved;
          }

          if (pkg && importMap && !packageRegistry.moduleUrlToPkg.get(name)) {
            packageRegistry.moduleUrlToPkg.set(name, pkg);
          }
        }

        System.debug && console.log(">> [preNormalize] ".concat(name));
        return name;
      }, __moduleMeta__$3);

      __varRecorder__$5.preNormalize = preNormalize;

      var postNormalize = __varRecorder__$5["lively.modules/src/system.js__define__"]("postNormalize", "function", function (System, normalizeResult, isSync) {
        var base = normalizeResult.replace(__varRecorder__$5.jsExtRe, "");

        if (normalizeResult.endsWith("/")) {
          return normalizeResult;
        }

        var _System$get2 = System.get("@lively-env"),
            packageRegistry = _System$get2.packageRegistry;

        if (packageRegistry) {
          var referencedPackage = packageRegistry.findPackageWithURL(base);

          if (referencedPackage) {
            var main = (referencedPackage.main || "index.js").replace(__varRecorder__$5.dotSlashStartRe, "");
            var withMain = base.replace(__varRecorder__$5.trailingSlashRe, "") + "/" + main;
            return withMain;
          }
        } else {
          if (base in System.CONFIG.packages) {
            var _main = System.CONFIG.packages[base].main;

            if (_main) {
              var _withMain = base.replace(__varRecorder__$5.trailingSlashRe, "") + "/" + _main.replace(__varRecorder__$5.dotSlashStartRe, "");

              return _withMain;
            }
          }
        }

        var jsonPath = normalizeResult.match(__varRecorder__$5.jsonJsExtRe);
        System.debug && console.log(">> [postNormalize] ".concat(jsonPath ? jsonPath[1] : normalizeResult));
        return jsonPath ? jsonPath[1] : normalizeResult;
      }, __moduleMeta__$3);

      __varRecorder__$5.postNormalize = postNormalize;

      var checkExistence = __varRecorder__$5["lively.modules/src/system.js__define__"]("checkExistence", "function", /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(url, System) {
          var cache;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  System._fileCheckMap = System._fileCheckMap || {};

                  if (!(url in System._fileCheckMap)) {
                    _context3.next = 3;
                    break;
                  }

                  return _context3.abrupt("return", System._fileCheckMap[url]);

                case 3:
                  cache = System._livelyModulesTranslationCache;
                  _context3.t0 = cache;

                  if (!_context3.t0) {
                    _context3.next = 9;
                    break;
                  }

                  _context3.next = 8;
                  return cache.fetchStoredModuleSource(url);

                case 8:
                  _context3.t0 = _context3.sent;

                case 9:
                  if (!_context3.t0) {
                    _context3.next = 11;
                    break;
                  }

                  return _context3.abrupt("return", System._fileCheckMap[url] = true);

                case 11:
                  _context3.next = 13;
                  return resource(url).exists();

                case 13:
                  return _context3.abrupt("return", System._fileCheckMap[url] = _context3.sent);

                case 14:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function (_x5, _x6) {
          return _ref5.apply(this, arguments);
        };
      }(), __moduleMeta__$3);

      __varRecorder__$5.checkExistence = checkExistence;

      var normalizeHook = __varRecorder__$5["lively.modules/src/system.js__define__"]("normalizeHook", "function", /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(proceed, name, parent, parentAddress) {
          var System, stage1, stage2, stage3, isNodePath, indexjs;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  System = this;

                  if (!(System.transpiler !== "lively.transpiler")) {
                    _context4.next = 5;
                    break;
                  }

                  _context4.next = 4;
                  return proceed(name, parent, true);

                case 4:
                  return _context4.abrupt("return", _context4.sent);

                case 5:
                  if (!(parent && name === "cjs")) {
                    _context4.next = 7;
                    break;
                  }

                  return _context4.abrupt("return", "cjs");

                case 7:
                  if (parent && parent.endsWith("!cjs")) {
                    parent = parent.replace("!cjs", "");
                  }

                  if (!(name === "lively.fetch")) {
                    _context4.next = 10;
                    break;
                  }

                  return _context4.abrupt("return", name);

                case 10:
                  if (!(name === "@system-env")) {
                    _context4.next = 12;
                    break;
                  }

                  return _context4.abrupt("return", name);

                case 12:
                  if (name.startsWith("node:")) name = "@node/" + name.slice(5);
                  stage1 = __varRecorder__$5.preNormalize(System, name, parent);
                  _context4.next = 16;
                  return proceed(stage1, parent, true);

                case 16:
                  stage2 = _context4.sent;
                  stage3 = __varRecorder__$5.postNormalize(System, stage2 || stage1, false);
                  isNodePath = stage3.startsWith("file:");
                  System.debug && console.log("[normalize] ".concat(name, " => ").concat(stage3));

                  if (!(!__varRecorder__$5.jsExtRe.test(name) && !__varRecorder__$5.jsxExtRe.test(name) && !__varRecorder__$5.cjsExtRe.test(name) && !__varRecorder__$5.jsonExtRe.test(stage3) && !__varRecorder__$5.nodeModRe.test(stage3) && !__varRecorder__$5.nodeExtRe.test(stage3) && !(System.loads && System.loads[stage3]) && !stage3.startsWith("node:"))) {
                    _context4.next = 46;
                    break;
                  }

                  if (!__varRecorder__$5.jsExtRe.test(stage3)) {
                    _context4.next = 37;
                    break;
                  }

                  _context4.next = 24;
                  return __varRecorder__$5.checkExistence(stage3, System);

                case 24:
                  if (!_context4.sent) {
                    _context4.next = 26;
                    break;
                  }

                  return _context4.abrupt("return", stage3);

                case 26:
                  indexjs = stage3.replace(".js", "/index.js");
                  _context4.next = 29;
                  return __varRecorder__$5.checkExistence(indexjs, System);

                case 29:
                  _context4.t0 = _context4.sent;

                  if (_context4.t0) {
                    _context4.next = 32;
                    break;
                  }

                  _context4.t0 = !isNodePath;

                case 32:
                  if (!_context4.t0) {
                    _context4.next = 34;
                    break;
                  }

                  return _context4.abrupt("return", indexjs);

                case 34:
                  return _context4.abrupt("return", stage3.replace(".js", "/index.node"));

                case 37:
                  if (!(!stage3.startsWith("esm://") && !stage3.includes("jspm.dev") && stage3 !== "@empty")) {
                    _context4.next = 46;
                    break;
                  }

                  _context4.next = 40;
                  return __varRecorder__$5.checkExistence(stage3 + ".js", System);

                case 40:
                  if (!_context4.sent) {
                    _context4.next = 42;
                    break;
                  }

                  return _context4.abrupt("return", stage3 + ".js");

                case 42:
                  _context4.next = 44;
                  return __varRecorder__$5.checkExistence(stage3 + "/index.js", System);

                case 44:
                  if (!_context4.sent) {
                    _context4.next = 46;
                    break;
                  }

                  return _context4.abrupt("return", stage3 + "/index.js");

                case 46:
                  if (__varRecorder__$5.jsxJsExtRe.test(stage3)) stage3 = stage3.replace(".jsx.js", ".jsx");
                  return _context4.abrupt("return", stage3);

                case 48:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        return function (_x7, _x8, _x9, _x10) {
          return _ref6.apply(this, arguments);
        };
      }(), __moduleMeta__$3);

      __varRecorder__$5.normalizeHook = normalizeHook;

      var decanonicalizeHook = __varRecorder__$5["lively.modules/src/system.js__define__"]("decanonicalizeHook", "function", function (proceed, name, parent, isPlugin) {
        var System = this;

        var stage1 = __varRecorder__$5.preNormalize(System, name, parent);

        if (parent && parent.endsWith("!cjs")) {
          parent = parent.replace("!cjs", "");
        }

        var stage2 = proceed(stage1, parent, isPlugin);

        if (stage1.endsWith("/")) {
          var _this$CONFIG$packages;

          var main = (_this$CONFIG$packages = this.CONFIG.packages[stage1.replace(/\/*$/, "")]) === null || _this$CONFIG$packages === void 0 ? void 0 : _this$CONFIG$packages.main;
          if (stage2.endsWith(main)) stage2 = stage2.replace(main, "");
        }

        var stage3 = __varRecorder__$5.postNormalize(System, stage2, true);
        System.debug && console.log("[normalizeSync] ".concat(name, " => ").concat(stage3));
        return stage3;
      }, __moduleMeta__$3);

      __varRecorder__$5.decanonicalizeHook = decanonicalizeHook;

      var locateHook = __varRecorder__$5["lively.modules/src/system.js__define__"]("locateHook", "function", function (load) {
        return load.address;
      }, __moduleMeta__$3);

      __varRecorder__$5.locateHook = locateHook;

      var whenSystemModuleLoaded = __varRecorder__$5["lively.modules/src/system.js__define__"]("whenSystemModuleLoaded", "function", /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(moduleName) {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  return _context5.abrupt("return", System.get(moduleName) || (__varRecorder__$5.moduleLoadPromises[moduleName] || (__varRecorder__$5.moduleLoadPromises[moduleName] = deferred())).promise);

                case 1:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        return function (_x11) {
          return _ref7.apply(this, arguments);
        };
      }(), __moduleMeta__$3);

      __varRecorder__$5.whenSystemModuleLoaded = whenSystemModuleLoaded;

      var normalize_doMapWithObject = __varRecorder__$5["lively.modules/src/system.js__define__"]("normalize_doMapWithObject", "function", function (mappedObject, pkg, loader) {
        var env = loader.get(pkg.map["@env"] || "@system-env");
        var resolved;

        for (var e in mappedObject) {
          var negate = e[0] === "~";
          var value = normalize_readMemberExpression(negate ? e.substr(1) : e, env);

          if (!negate && value || negate && !value) {
            resolved = mappedObject[e];
            break;
          }
        }

        if (resolved) {
          if (typeof resolved !== "string") {
            throw new Error("Unable to map a package conditional to a package conditional.");
          }
        }

        return resolved;

        function normalize_readMemberExpression(p, value) {
          var pParts = p.split(".");

          while (pParts.length) {
            value = value[pParts.shift()];
          }

          return value;
        }
      }, __moduleMeta__$3);

      __varRecorder__$5.normalize_doMapWithObject = normalize_doMapWithObject;

      var normalize_packageOfURL = __varRecorder__$5["lively.modules/src/system.js__define__"]("normalize_packageOfURL", "function", function (url, System) {
        var packageNames = Object.keys(System.CONFIG.packages || {});
        var matchingPackages = packageNames.map(function (pkgName) {
          return url.indexOf(pkgName) === 0 ? {
            url: pkgName,
            penalty: url.slice(pkgName.length).length
          } : null;
        }).filter(function (ea) {
          return !!ea;
        });
        var pName = matchingPackages.length ? matchingPackages.reduce(function (matchingPkg, ea) {
          return matchingPkg.penalty > ea.penalty ? ea : matchingPkg;
        }).url : null;
        var systemPackage = pName && System.CONFIG.packages[pName];
        return systemPackage ? {
          systemPackage: systemPackage,
          packageURL: pName
        } : null;
      }, __moduleMeta__$3);

      __varRecorder__$5.normalize_packageOfURL = normalize_packageOfURL;

      var newModule_volatile = __varRecorder__$5["lively.modules/src/system.js__define__"]("newModule_volatile", "function", function (proceed, exports) {
        var freeze = Object.freeze;

        Object.freeze = function (x) {
          return x;
        };

        var m = proceed(exports);
        Object.freeze = freeze;
        return m;
      }, __moduleMeta__$3);

      __varRecorder__$5.newModule_volatile = newModule_volatile;

      var printSystemConfig$1 = __varRecorder__$5["lively.modules/src/system.js__define__"]("printSystemConfig", "function", function (System) {
        System = __varRecorder__$5.getSystem(System);
        var json = {
          baseURL: System.baseURL,
          transpiler: System.transpiler,
          map: System.map,
          meta: System.meta,
          packages: System.CONFIG.packages,
          paths: System.paths,
          packageConfigPaths: System.packageConfigPaths,
          bundles: System.bundles
        };
        return JSON.stringify(json, null, 2);
      }, __moduleMeta__$3);

      __varRecorder__$5.printSystemConfig = printSystemConfig$1;

      var instantiate_triggerOnLoadCallbacks = __varRecorder__$5["lively.modules/src/system.js__define__"]("instantiate_triggerOnLoadCallbacks", "function", function (proceed, load) {
        var System = this;
        proceed(load);
        var timeout = {};

        __varRecorder__$5.whenSystemModuleLoaded(load.name).then(function (result) {
          if (result === timeout) {
            console.warn("[lively.modules] instantiate_triggerOnLoadCallbacks for ".concat(load.name, " timed out"));
            return;
          }

          var modId = load.name;
          var mod = classHolder.module(System, modId);
          var callbacks = System.get("@lively-env").onLoadCallbacks;

          for (var i = callbacks.length; i--;) {
            var _callbacks$i = callbacks[i],
                moduleName = _callbacks$i.moduleName,
                resolved = _callbacks$i.resolved,
                callback = _callbacks$i.callback;
            var id = resolved ? moduleName : System.decanonicalize(moduleName);
            if (id !== modId) continue;
            callbacks.splice(i, 1);

            try {
              callback(mod);
            } catch (e) {
              console.error(e);
            }
          }

          emit("lively.modules/moduleloaded", {
            module: load.name
          }, Date.now(), System);

          if (System._loadingIndicator) {
            System._loadingIndicator.remove();

            System._loadingIndicator = null;
          }
        });
      }, __moduleMeta__$3);

      __varRecorder__$5.instantiate_triggerOnLoadCallbacks = instantiate_triggerOnLoadCallbacks;

      var whenLoaded$1 = __varRecorder__$5["lively.modules/src/system.js__define__"]("whenLoaded", "function", function (System, moduleName, callback) {
        var modId = System.decanonicalize(moduleName);

        if (System.get(modId)) {
          try {
            callback(classHolder.module(System, modId));
          } catch (e) {
            console.error(e);
          }

          return;
        }

        System.get("@lively-env").onLoadCallbacks.push({
          moduleName: moduleName,
          resolved: false,
          callback: callback
        });
      }, __moduleMeta__$3);

      __varRecorder__$5.whenLoaded = whenLoaded$1;

      var loadedModules$1 = __varRecorder__$5["lively.modules/src/system.js__define__"]("loadedModules", "function", function (System) {
        return System.get("@lively-env").loadedModules;
      }, __moduleMeta__$3);

      __varRecorder__$5.loadedModules = loadedModules$1;

      var knownModuleNames = __varRecorder__$5["lively.modules/src/system.js__define__"]("knownModuleNames", "function", function (System) {
        var fromSystem = System.loads ? Object.keys(System.loads) : Object.keys(System.get("@lively-env").loadedModules);
        return uniq(fromSystem.concat(Object.keys(__varRecorder__$5.loadedModules(System))));
      }, __moduleMeta__$3);

      __varRecorder__$5.knownModuleNames = knownModuleNames;

      var searchLoadedModules = __varRecorder__$5["lively.modules/src/system.js__define__"]("searchLoadedModules", "function", function (System, searchStr, options) {
        return Promise.all(values(__varRecorder__$5.loadedModules(System)).map(function (m) {
          return m.search(searchStr, options);
        })).then(function (res) {
          return res.flat();
        });
      }, __moduleMeta__$3);

      __varRecorder__$5.searchLoadedModules = searchLoadedModules;
      __varRecorder__$5.isNode = System.get("@system-env").node;
      __varRecorder__$5.GLOBAL = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : undefined;
      __varRecorder__$5.defaultOptions = {
        notificationLimit: null
      };
      __varRecorder__$5.wrapModuleResolution = wrapModuleResolution$1;
      __varRecorder__$5.unwrapModuleResolution = unwrapModuleResolution$1;
      __varRecorder__$5.dotSlashStartRe = /^\.?\//;
      __varRecorder__$5.trailingSlashRe = /\/$/;
      __varRecorder__$5.jsExtRe = /\.js$/;
      __varRecorder__$5.cjsExtRe = /\.cjs$/;
      __varRecorder__$5.jsxExtRe = /\.jsx$/;
      __varRecorder__$5.nodeExtRe = /\.node$/;
      __varRecorder__$5.jsonExtRe = /\.json$/;
      __varRecorder__$5.jsonJsExtRe = /(.*\.json)\.js$/i;
      __varRecorder__$5.jsxJsExtRe = /(.*\.jsx)\.js$/i;
      __varRecorder__$5.cjsJsExtRe = /(.*\.cjs)\.js$/i;
      __varRecorder__$5.doubleSlashRe = /.\/{2,}/g;
      __varRecorder__$5.nodeModRe = /\@node.*/;
      __varRecorder__$5.moduleLoadPromises = __varRecorder__$5.moduleLoadPromises || undefined;
      __varRecorder__$5.moduleLoadPromises = __varRecorder__$5.moduleLoadPromises || {};
      __varRecorder__$5.whenLoaded = whenLoaded$1;
      __varRecorder__$5.getSystem = getSystem;
      __varRecorder__$5.removeSystem = removeSystem;
      __varRecorder__$5.prepareSystem = prepareSystem;
      __varRecorder__$5.printSystemConfig = printSystemConfig$1;
      __varRecorder__$5.livelySystemEnv = livelySystemEnv;
      __varRecorder__$5.loadedModules = loadedModules$1;
      __varRecorder__$5.knownModuleNames = knownModuleNames;
      __varRecorder__$5.searchLoadedModules = searchLoadedModules;

      var __varRecorder__$4 = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.modules/src/packages/package-registry.js", __contextModule__);

      var __moduleMeta__$2 = {
        pathInPackage: function pathInPackage() {
          return "./src/packages/package-registry.js";
        },
        unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
          return function () {};
        },
        subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
          return function () {};
        },
        "package": function _package() {
          return {
            name: "lively.modules",
            version: "0.8.38"
          };
        }
      };

      var isAbsolute = __varRecorder__$4["lively.modules/src/packages/package-registry.js__define__"]("isAbsolute", "function", function (path) {
        return path.startsWith("/") || path.startsWith("http:") || path.startsWith("https:") || path.startsWith("file:") || path.match(__varRecorder__$4.urlStartRe);
      }, __moduleMeta__$2);

      __varRecorder__$4.isAbsolute = isAbsolute;

      var ensureResource = __varRecorder__$4["lively.modules/src/packages/package-registry.js__define__"]("ensureResource", "function", function (path) {
        return path.isResource ? path : resource(path);
      }, __moduleMeta__$2);

      __varRecorder__$4.ensureResource = ensureResource;
      __varRecorder__$4.urlStartRe = /^[a-z\.-_\+]+:/i;
      var PackageRegistry = exports('P', /*#__PURE__*/function () {
        _createClass(PackageRegistry, null, [{
          key: "ofSystem",
          value: function ofSystem(System) {
            var registry = System.get("@lively-env").packageRegistry;

            if (!registry) {
              registry = System["__lively.modules__packageRegistry"] = new this(System);
            }

            return registry;
          }
        }, {
          key: "forDirectory",
          value: function forDirectory(System, dir) {
            return new this(System, {
              packageBaseDirs: [__varRecorder__$4.ensureResource(dir)]
            });
          }
        }, {
          key: "fromJSON",
          value: function fromJSON(System, jso) {
            return new this(System).fromJSON(jso);
          }
        }]);

        function PackageRegistry(System) {
          var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _classCallCheck(this, PackageRegistry);

          this.System = System;
          this.packageBaseDirs = opts.packageBaseDirs || [];
          this.devPackageDirs = opts.devPackageDirs || [];
          this.individualPackageDirs = opts.individualPackageDirs || [];
          this._readyPromise = null;
          this.packageMap = {};
          this.moduleUrlToPkg = new Map();
          this._byURL = null;
        }

        _createClass(PackageRegistry, [{
          key: "resetByURL",
          value: function resetByURL() {
            this._byURL = null;
          }
        }, {
          key: "allPackageURLs",
          value: function allPackageURLs() {
            return Object.keys(this.byURL);
          }
        }, {
          key: "toJSON",
          value: function toJSON() {
            var System = this.System,
                packageMap = this.packageMap,
                individualPackageDirs = this.individualPackageDirs,
                devPackageDirs = this.devPackageDirs,
                packageBaseDirs = this.packageBaseDirs;
            var packageMapJso = {};

            for (var pName in packageMap) {
              var spec = packageMap[pName];
              packageMapJso[pName] = {};
              packageMapJso[pName].latest = spec.latest;
              packageMapJso[pName].versions = {};

              for (var version in spec.versions) {
                packageMapJso[pName].versions[version] = spec.versions[version].toJSON();
              }
            }

            return {
              packageMap: packageMapJso,
              individualPackageDirs: individualPackageDirs.map(serializeURL),
              devPackageDirs: devPackageDirs.map(serializeURL),
              packageBaseDirs: packageBaseDirs.map(serializeURL)
            };

            function serializeURL(_ref) {
              var url = _ref.url;
              return !url.startsWith(System.baseURL) ? url : url.slice(System.baseURL.length).replace(/^\//, "");
            }
          }
        }, {
          key: "fromJSON",
          value: function fromJSON(jso) {
            var packageMap = {};
            var System = this.System;
            var base = resource(System.baseURL);

            for (var pName in jso.packageMap) {
              var spec = jso.packageMap[pName];
              packageMap[pName] = {};
              packageMap[pName].latest = spec.latest;
              packageMap[pName].versions = {};

              for (var version in spec.versions) {
                var pkgSpec = spec.versions[version];
                var url = pkgSpec.url;
                if (!__varRecorder__$4.isAbsolute(url)) url = base.join(url).url;
                var pkg = Package.fromJSON(System, Object.assign({}, pkgSpec, {
                  url: url
                }));
                packageMap[pName].versions[version] = pkg;
              }
            }

            this.packageMap = packageMap;
            this.individualPackageDirs = jso.individualPackageDirs.map(deserializeURL);
            this.devPackageDirs = jso.devPackageDirs.map(deserializeURL);
            this.packageBaseDirs = jso.packageBaseDirs.map(deserializeURL);
            this.resetByURL();
            classHolder.ModulePackageMapping.forSystem(System).clearCache();
            return this;

            function deserializeURL(url) {
              return isURL(url) ? resource(url) : resource(System.baseURL).join(url);
            }
          }
        }, {
          key: "updateFromJSON",
          value: function updateFromJSON(jso) {
            var packageMap = this.packageMap;

            for (var pName in jso.packageMap) {
              var spec = jso.packageMap[pName];
              if (!packageMap[pName]) packageMap[pName] = {};

              if (packageMap[pName].latest) {
                if (exports$1.gt(spec.latest, packageMap[pName].latest)) {
                  packageMap[pName].latest = spec.latest;
                }
              } else packageMap[pName].latest;

              if (!packageMap[pName].versions) packageMap[pName].versions = {};
              var _System = this.System;
              var base = resource(_System.baseURL);

              for (var version in spec.versions) {
                var pkgSpec = spec.versions[version];
                var url = pkgSpec.url;
                if (!__varRecorder__$4.isAbsolute(url)) url = base.join(url).url;
                var pkg = new Package.fromJSON(_System, Object.assign({}, pkgSpec, {
                  url: url
                }));
                packageMap[pName].versions[version] = pkg;
              }
            }

            this.resetByURL();
            classHolder.ModulePackageMapping.forSystem(System).clearCache();
            return this;
          }
        }, {
          key: "whenReady",
          value: function whenReady() {
            return this._readyPromise || Promise.resolve();
          }
        }, {
          key: "isReady",
          value: function isReady() {
            return !this._readyPromise;
          }
        }, {
          key: "withPackagesDo",
          value: function withPackagesDo(doFn) {
            for (var pName in this.packageMap) {
              var versions = this.packageMap[pName].versions;

              for (var versionName in versions) {
                doFn(versions[versionName]);
              }
            }
          }
        }, {
          key: "findPackage",
          value: function findPackage(matchFn) {
            for (var pName in this.packageMap) {
              var versions = this.packageMap[pName].versions;

              for (var versionName in versions) {
                var pkg = versions[versionName];
                if (matchFn(pkg)) return pkg;
              }
            }

            return null;
          }
        }, {
          key: "filterPackages",
          value: function filterPackages(matchFn) {
            var result = [];
            this.withPackagesDo(function (pkg) {
              return matchFn(pkg) && result.push(pkg);
            });
            return result;
          }
        }, {
          key: "allPackages",
          value: function allPackages() {
            var result = [];

            for (var pName in this.packageMap) {
              var versions = this.packageMap[pName].versions;

              for (var versionName in versions) {
                result.push(versions[versionName]);
              }
            }

            return result;
          }
        }, {
          key: "sortPackagesByVersion",
          value: function sortPackagesByVersion(pkgs) {
            return pkgs.sort(function (a, b) {
              return exports$1.compare(b.version, a.version, true);
            });
          }
        }, {
          key: "matches",
          value: function matches(pkg, pName, versionRange) {
            var name = pkg.name,
                version = pkg.version;
            if (name !== pName) return false;
            if (!versionRange) return true;

            if (exports$1.validRange(version || "", true) && exports$1.satisfies(version, versionRange, true)) {
              return true;
            }

            return false;
          }
        }, {
          key: "coversDirectory",
          value: function coversDirectory(dir) {
            dir = __varRecorder__$4.ensureResource(dir).asDirectory();
            var packageBaseDirs = this.packageBaseDirs,
                devPackageDirs = this.devPackageDirs,
                individualPackageDirs = this.individualPackageDirs;
            if (individualPackageDirs.some(function (ea) {
              return ea.equals(dir);
            })) return "individualPackageDirs";
            if (devPackageDirs.some(function (ea) {
              return ea.equals(dir);
            })) return "devPackageDirs";
            var parent = dir.parent().parent();

            if (packageBaseDirs.some(function (ea) {
              return ea.equals(parent);
            })) {
              return this.allPackages().find(function (pkg) {
                return __varRecorder__$4.ensureResource(pkg.url).equals(dir);
              }) ? "packageCollectionDirs" : "maybe packageCollectionDirs";
            }

            return null;
          }
        }, {
          key: "lookup",
          value: function lookup(pkgName, versionRange) {
            var _this = this;

            var pkgData = this.packageMap[pkgName];
            if (!pkgData) return null;

            if (!versionRange || versionRange === "latest") {
              return pkgData.versions[pkgData.latest];
            }

            if (!exports$1.validRange(versionRange, true)) {
              throw new Error("PackageRegistry>>lookup of ".concat(pkgName, ": Invalid version - ").concat(versionRange));
            }

            var pkgs = values(pkgData.versions).filter(function (pkg) {
              return _this.matches(pkg, pkgName, versionRange);
            });
            if (pkgs.length <= 1) return pkgs[0];
            return last(this.sortPackagesByVersion(pkgs));
          }
        }, {
          key: "findPackageDependency",
          value: function findPackageDependency(basePkg, name, version) {
            if (!version) version = basePkg.dependencies[name] || basePkg.devDependencies[name];
            if (!exports$1.validRange(version, true)) version = null;
            return this.lookup(name, version);
          }
        }, {
          key: "findPackageWithURL",
          value: function findPackageWithURL(url) {
            if (url.isResource) url = url.url;
            if (url.endsWith("/")) url = url.slice(0, -1);
            return this.byURL[url];
          }
        }, {
          key: "findPackageHavingURL",
          value: function findPackageHavingURL(url) {
            if (url.isResource) url = url.url;
            if (url.endsWith("/")) url = url.slice(0, -1);
            if (this.moduleUrlToPkg.has(url)) return this.moduleUrlToPkg.get(url);
            var penaltySoFar = Infinity;
            var found = null;
            var byURL = this.byURL;

            for (var pkgURL in byURL) {
              if (url.indexOf(pkgURL) !== 0) continue;
              var penalty = url.slice(pkgURL.length).length;
              if (penalty >= penaltySoFar) continue;
              penaltySoFar = penalty;
              found = byURL[pkgURL];
            }

            if (found) {
              this.moduleUrlToPkg.set(url, found);
            }

            return found;
          }
        }, {
          key: "findPackageForPath",
          value: function findPackageForPath(pathRequest, optParentPkg) {
            if (__varRecorder__$4.isAbsolute(pathRequest)) {
              return this.findPackageHavingURL(pathRequest);
            }

            if (pathRequest.startsWith(".")) return null;

            var _pathRequest$split = pathRequest.split("/"),
                _pathRequest$split2 = _slicedToArray(_pathRequest$split, 1),
                pkgName = _pathRequest$split2[0];

            if (!pkgName) return null;
            var atIndex = pkgName.indexOf("@");
            var version;

            if (atIndex > -1) {
              version = pkgName.slice(atIndex + 1);
              pkgName = pkgName.slice(0, atIndex);
            }

            if (!version && optParentPkg) {
              return this.findPackageDependency(optParentPkg, pkgName);
            }

            return this.lookup(pkgName, version);
          }
        }, {
          key: "resolvePath",
          value: function resolvePath(path, parentIdOrPkg) {
            if (__varRecorder__$4.isAbsolute(path)) return path;
            var parentPackage = parentIdOrPkg && parentIdOrPkg.isPackage || null;

            if (!parentPackage && parentIdOrPkg) {
              if (path.startsWith(".")) {
                var res = resource(parentIdOrPkg);
                if (!res.isDirectory()) res = res.parent();
                return res.join(path).withRelativePartsResolved().url;
              }

              parentPackage = this.findPackageHavingURL(parentIdOrPkg);
            }

            var p = this.findPackageForPath(path, parentPackage);
            if (!p) return null;
            var slashIndex = path.indexOf("/");
            var pathInPackage = slashIndex === -1 || slashIndex === path.length - 1 ? "" : path.slice(slashIndex);
            return pathInPackage ? resource(p.url).join(pathInPackage).url : p.url;
          }
        }, {
          key: "update",
          value: function () {
            var _update = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var deferred$1, discovered, _iterator, _step, dir, _iterator4, _step4, dirWithVersions, _iterator5, _step5, subDir, _iterator2, _step2, _dir, _iterator3, _step3, _dir2, url, _discovered$url, pkg, config, covered;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (this.isReady()) {
                        _context.next = 2;
                        break;
                      }

                      return _context.abrupt("return", this.whenReady().then(function () {
                        return _this2.update();
                      }));

                    case 2:
                      deferred$1 = deferred();
                      this._readyPromise = deferred$1.promise;
                      this.packageBaseDirs = this.packageBaseDirs.map(function (ea) {
                        return ea.asDirectory();
                      });
                      this.individualPackageDirs = this.individualPackageDirs.map(function (ea) {
                        return ea.asDirectory();
                      });
                      this.devPackageDirs = this.devPackageDirs.map(function (ea) {
                        return ea.asDirectory();
                      });
                      discovered = {};
                      _context.prev = 8;
                      _iterator = _createForOfIteratorHelper(this.packageBaseDirs);
                      _context.prev = 10;

                      _iterator.s();

                    case 12:
                      if ((_step = _iterator.n()).done) {
                        _context.next = 58;
                        break;
                      }

                      dir = _step.value;
                      _context.t0 = _createForOfIteratorHelper;
                      _context.next = 17;
                      return dir.dirList(1);

                    case 17:
                      _context.t1 = _context.sent;
                      _iterator4 = (0, _context.t0)(_context.t1);
                      _context.prev = 19;

                      _iterator4.s();

                    case 21:
                      if ((_step4 = _iterator4.n()).done) {
                        _context.next = 48;
                        break;
                      }

                      dirWithVersions = _step4.value;
                      _context.t2 = _createForOfIteratorHelper;
                      _context.next = 26;
                      return dirWithVersions.dirList(1);

                    case 26:
                      _context.t3 = function (ea) {
                        return ea.isDirectory();
                      };

                      _context.t4 = _context.sent.filter(_context.t3);
                      _iterator5 = (0, _context.t2)(_context.t4);
                      _context.prev = 29;

                      _iterator5.s();

                    case 31:
                      if ((_step5 = _iterator5.n()).done) {
                        _context.next = 38;
                        break;
                      }

                      subDir = _step5.value;
                      _context.next = 35;
                      return this._discoverPackagesIn(subDir, discovered, "packageCollectionDirs");

                    case 35:
                      discovered = _context.sent;

                    case 36:
                      _context.next = 31;
                      break;

                    case 38:
                      _context.next = 43;
                      break;

                    case 40:
                      _context.prev = 40;
                      _context.t5 = _context["catch"](29);

                      _iterator5.e(_context.t5);

                    case 43:
                      _context.prev = 43;

                      _iterator5.f();

                      return _context.finish(43);

                    case 46:
                      _context.next = 21;
                      break;

                    case 48:
                      _context.next = 53;
                      break;

                    case 50:
                      _context.prev = 50;
                      _context.t6 = _context["catch"](19);

                      _iterator4.e(_context.t6);

                    case 53:
                      _context.prev = 53;

                      _iterator4.f();

                      return _context.finish(53);

                    case 56:
                      _context.next = 12;
                      break;

                    case 58:
                      _context.next = 63;
                      break;

                    case 60:
                      _context.prev = 60;
                      _context.t7 = _context["catch"](10);

                      _iterator.e(_context.t7);

                    case 63:
                      _context.prev = 63;

                      _iterator.f();

                      return _context.finish(63);

                    case 66:
                      _iterator2 = _createForOfIteratorHelper(this.individualPackageDirs);
                      _context.prev = 67;

                      _iterator2.s();

                    case 69:
                      if ((_step2 = _iterator2.n()).done) {
                        _context.next = 76;
                        break;
                      }

                      _dir = _step2.value;
                      _context.next = 73;
                      return this._discoverPackagesIn(_dir, discovered, "individualPackageDirs");

                    case 73:
                      discovered = _context.sent;

                    case 74:
                      _context.next = 69;
                      break;

                    case 76:
                      _context.next = 81;
                      break;

                    case 78:
                      _context.prev = 78;
                      _context.t8 = _context["catch"](67);

                      _iterator2.e(_context.t8);

                    case 81:
                      _context.prev = 81;

                      _iterator2.f();

                      return _context.finish(81);

                    case 84:
                      _iterator3 = _createForOfIteratorHelper(this.devPackageDirs);
                      _context.prev = 85;

                      _iterator3.s();

                    case 87:
                      if ((_step3 = _iterator3.n()).done) {
                        _context.next = 94;
                        break;
                      }

                      _dir2 = _step3.value;
                      _context.next = 91;
                      return this._discoverPackagesIn(_dir2, discovered, "devPackageDirs");

                    case 91:
                      discovered = _context.sent;

                    case 92:
                      _context.next = 87;
                      break;

                    case 94:
                      _context.next = 99;
                      break;

                    case 96:
                      _context.prev = 96;
                      _context.t9 = _context["catch"](85);

                      _iterator3.e(_context.t9);

                    case 99:
                      _context.prev = 99;

                      _iterator3.f();

                      return _context.finish(99);

                    case 102:
                      for (url in discovered) {
                        _discovered$url = discovered[url], pkg = _discovered$url.pkg, config = _discovered$url.config, covered = _discovered$url.covered;
                        this.System.debug && console.log("[PackageRegistry] Adding discovered package ".concat(url, " (from ").concat(covered, ")"));

                        this._addPackageWithConfig(pkg, config, url + "/", covered);
                      }

                      this._updateLatestPackages();

                      deferred$1.resolve();
                      _context.next = 110;
                      break;

                    case 107:
                      _context.prev = 107;
                      _context.t10 = _context["catch"](8);
                      deferred$1.reject(_context.t10);

                    case 110:
                      _context.prev = 110;
                      this._readyPromise = null;
                      this.resetByURL();
                      classHolder.ModulePackageMapping.forSystem(this.System).clearCache();
                      return _context.finish(110);

                    case 115:
                      return _context.abrupt("return", this);

                    case 116:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[8, 107, 110, 115], [10, 60, 63, 66], [19, 50, 53, 56], [29, 40, 43, 46], [67, 78, 81, 84], [85, 96, 99, 102]]);
            }));

            function update() {
              return _update.apply(this, arguments);
            }

            return update;
          }()
        }, {
          key: "addPackageAt",
          value: function () {
            var _addPackageAt = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url) {
              var preferedLocation,
                  existingPackageMap,
                  urlString,
                  discovered,
                  discoveredURL,
                  _discovered$discovere,
                  pkg,
                  config,
                  covered,
                  _args2 = arguments;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      preferedLocation = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : "individualPackageDirs";
                      existingPackageMap = _args2.length > 2 ? _args2[2] : undefined;
                      urlString = url.isResource ? url.url : url;
                      if (urlString.endsWith("/")) urlString.slice(0, -1);

                      if (!this.byURL[urlString]) {
                        _context2.next = 6;
                        break;
                      }

                      throw new Error("package in ".concat(urlString, " already added to registry"));

                    case 6:
                      _context2.next = 8;
                      return this._discoverPackagesIn(__varRecorder__$4.ensureResource(url).asDirectory(), {}, undefined, existingPackageMap);

                    case 8:
                      discovered = _context2.sent;
                      _context2.t0 = regeneratorRuntime.keys(discovered);

                    case 10:
                      if ((_context2.t1 = _context2.t0()).done) {
                        _context2.next = 19;
                        break;
                      }

                      discoveredURL = _context2.t1.value;

                      if (!this.byURL[discoveredURL]) {
                        _context2.next = 14;
                        break;
                      }

                      return _context2.abrupt("continue", 10);

                    case 14:
                      _discovered$discovere = discovered[discoveredURL], pkg = _discovered$discovere.pkg, config = _discovered$discovere.config;
                      covered = this._addPackageDir(discoveredURL, preferedLocation, true);

                      this._addPackageWithConfig(pkg, config, discoveredURL + "/", covered);

                      _context2.next = 10;
                      break;

                    case 19:
                      this.resetByURL();
                      classHolder.ModulePackageMapping.forSystem(this.System).clearCache();

                      this._updateLatestPackages();

                      return _context2.abrupt("return", this.findPackageWithURL(url));

                    case 23:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function addPackageAt(_x) {
              return _addPackageAt.apply(this, arguments);
            }

            return addPackageAt;
          }()
        }, {
          key: "removePackage",
          value: function removePackage(pkg) {
            var updateLatestPackage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var url = pkg.url,
                name = pkg.name,
                version = pkg.version;

            var dir = __varRecorder__$4.ensureResource(url);

            var known = this.coversDirectory(dir);

            if (known === "devPackageDirs") {
              this.devPackageDirs = this.devPackageDirs.filter(function (ea) {
                return !ea.equals(dir);
              });
            } else if (known === "individualPackageDirs") {
              this.individualPackageDirs = this.individualPackageDirs.filter(function (ea) {
                return !ea.equals(dir);
              });
            }

            var packageMap = this.packageMap;

            if (packageMap[name]) {
              delete packageMap[name].versions[version];

              if (Object.keys(packageMap[name].versions).length === 0) {
                delete packageMap[name];
              }
            }

            this.resetByURL();
            classHolder.ModulePackageMapping.forSystem(this.System).clearCache();
            if (updateLatestPackage) this._updateLatestPackages(pkg.name);
          }
        }, {
          key: "updateNameAndVersionOf",
          value: function updateNameAndVersionOf(pkg, oldName, oldVersion, newName, newVersion) {
            var packageMap = this.packageMap;

            if (!packageMap[oldName]) {
              console.warn("[PackageRegistry>>updateNameAndVersionOf] ".concat(oldName, "@").concat(oldVersion, " not found in registry (").concat(pkg.url, ")"));
            } else if (!packageMap[oldName].versions[oldVersion]) {
              console.warn("[PackageRegistry>>updateNameAndVersionOf] No version entry ".concat(oldVersion, " of ").concat(oldName, " found in registry (").concat(pkg.url, ")"));
            }

            this._addToPackageMap(pkg, newName, newVersion);

            if (packageMap[oldName] && packageMap[oldName].versions[oldVersion]) {
              delete packageMap[oldName].versions[oldVersion];

              if (Object.keys(packageMap[oldName].versions).length === 0) {
                delete packageMap[oldName];
              }
            }

            this._updateLatestPackages(pkg.name);
          }
        }, {
          key: "_updateLatestPackages",
          value: function _updateLatestPackages(name) {
            var packageMap = this.packageMap;

            if (name && packageMap[name]) {
              packageMap[name].latest = last(exports$1.sort(Object.keys(packageMap[name].versions), true));
              return;
            }

            for (var eaName in packageMap) {
              packageMap[eaName].latest = last(exports$1.sort(Object.keys(packageMap[eaName].versions), true));
            }
          }
        }, {
          key: "_discoverPackagesIn",
          value: function () {
            var _discoverPackagesIn2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dir, discovered, covered) {
              var existingPackageMap,
                  url,
                  pkg,
                  config,
                  forkInfoFile,
                  forkInfo,
                  name,
                  version,
                  _args3 = arguments;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      existingPackageMap = _args3.length > 3 && _args3[3] !== undefined ? _args3[3] : null;

                      if (dir.isDirectory()) {
                        _context3.next = 3;
                        break;
                      }

                      return _context3.abrupt("return", discovered);

                    case 3:
                      url = dir.asFile().url;

                      if (!discovered.hasOwnProperty(url)) {
                        _context3.next = 6;
                        break;
                      }

                      return _context3.abrupt("return", discovered);

                    case 6:
                      _context3.prev = 6;
                      pkg = existingPackageMap && existingPackageMap[url] || new Package(this.System, url);
                      _context3.next = 10;
                      return pkg.tryToLoadPackageConfig();

                    case 10:
                      config = _context3.sent;

                      if (!url.includes("local_projects")) {
                        _context3.next = 23;
                        break;
                      }

                      forkInfoFile = resource(url).join(".livelyForkInformation");
                      _context3.next = 15;
                      return forkInfoFile.exists();

                    case 15:
                      if (!_context3.sent) {
                        _context3.next = 23;
                        break;
                      }

                      _context3.t0 = JSON;
                      _context3.next = 19;
                      return forkInfoFile.read();

                    case 19:
                      _context3.t1 = _context3.sent;
                      forkInfo = _context3.t0.parse.call(_context3.t0, _context3.t1);
                      config.name = forkInfo.owner + "--" + forkInfo.name;
                      config.isFork = true;

                    case 23:
                      pkg.setConfig(config);
                      discovered[url] = {
                        pkg: pkg,
                        config: config,
                        covered: covered
                      };

                      if (this.System.debug) {
                        name = config.name, version = config.version;
                        console.log("[lively.modules] package ".concat(name, "@").concat(version, " discovered in ").concat(dir.url));
                      }

                      return _context3.abrupt("return", discovered);

                    case 29:
                      _context3.prev = 29;
                      _context3.t2 = _context3["catch"](6);
                      return _context3.abrupt("return", discovered);

                    case 32:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[6, 29]]);
            }));

            function _discoverPackagesIn(_x2, _x3, _x4) {
              return _discoverPackagesIn2.apply(this, arguments);
            }

            return _discoverPackagesIn;
          }()
        }, {
          key: "_addToPackageMap",
          value: function _addToPackageMap(pkg, name, version) {
            var allowOverride = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
            if (!name) throw new Error("Cannot add package without name");
            if (!version) version = "0.0.0";
            var packageMap = this.packageMap;
            var packageEntry = packageMap[name] || (packageMap[name] = {
              versions: {},
              latest: null
            });
            var isOverride = packageEntry.versions[version];

            if (isOverride) {
              var msg = "Redefining version ".concat(version, " of package ").concat(pkg.url);
              if (!allowOverride) throw new Error(msg + " not allowed");else console.warn(msg);
            }

            packageEntry.versions[version] = pkg;
          }
        }, {
          key: "_addPackageWithConfig",
          value: function _addPackageWithConfig(pkg, config, dir) {
            var covered = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

            if (!covered) {
              this._addPackageDir(dir, "individualPackageDirs", true);
            }

            pkg.registerWithConfig(config);

            this._addToPackageMap(pkg, pkg.name, pkg.version);

            return pkg;
          }
        }, {
          key: "_addPackageDir",
          value: function _addPackageDir(dir) {
            var preferedLocation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "individualPackageDirs";
            var uniqCheck = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
            dir = __varRecorder__$4.ensureResource(dir).asDirectory();

            if (preferedLocation === "packageCollectionDirs" || preferedLocation === "maybe packageCollectionDirs") {
              var covers = this.coversDirectory(dir) || "";

              if (covers.includes("packageCollectionDirs")) {
                return "packageCollectionDirs";
              }
            }

            var prop = preferedLocation;
            var dirs = this[prop].concat(dir);
            this[prop] = uniqCheck ? uniqBy(dirs, function (a, b) {
              return a.equals(b);
            }) : dirs;
            return prop;
          }
        }, {
          key: "byURL",
          get: function get() {
            if (!this._byURL) {
              this._byURL = {};

              var _iterator6 = _createForOfIteratorHelper(this.allPackages()),
                  _step6;

              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var p = _step6.value;
                  this._byURL[p.url] = p;
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }
            }

            return this._byURL;
          }
        }]);

        return PackageRegistry;
      }());
      __varRecorder__$4.PackageRegistry = PackageRegistry;

      var __varRecorder__$3 = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.modules/src/export-lookup.js", __contextModule__);

      var ExportLookup = exports('E', /*#__PURE__*/function () {
        _createClass(ExportLookup, null, [{
          key: "forSystem",
          value: function forSystem(System) {
            if (!this._forSystemMap) this._forSystemMap = new WeakMap();

            var lookup = this._forSystemMap.get(System);

            if (lookup) return lookup;
            lookup = new this(System);

            this._forSystemMap.set(System, lookup);

            return lookup;
          }
        }, {
          key: "run",
          value: function run() {
            var _System = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : System;

            var options = arguments.length > 1 ? arguments[1] : undefined;
            return this.forSystem(_System).systemExports(options);
          }
        }, {
          key: "findExportOfValue",
          value: function () {
            var _findExportOfValue = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(value) {
              var _System,
                  exports$1,
                  _args = arguments;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _System = _args.length > 1 && _args[1] !== undefined ? _args[1] : System;
                      _context.next = 3;
                      return this.run(_System);

                    case 3:
                      exports$1 = _context.sent;
                      return _context.abrupt("return", exports$1.find(function (_ref) {
                        var local = _ref.local,
                            moduleId = _ref.moduleId;
                        var m = module$3(_System, moduleId);
                        var values = m.recorder || _System.get(m.id) || {};

                        try {
                          return values[local] === value;
                        } catch (e) {
                          return false;
                        }
                      }));

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function findExportOfValue(_x) {
              return _findExportOfValue.apply(this, arguments);
            }

            return findExportOfValue;
          }()
        }]);

        function ExportLookup(System) {
          _classCallCheck(this, ExportLookup);

          this.System = System;
          this.subscribeToSystemChanges();
        }

        _createClass(ExportLookup, [{
          key: "subscribeToSystemChanges",
          value: function subscribeToSystemChanges() {
            var _this = this;

            if (this._notificationHandlers) return;
            var S = this.System;
            this._notificationHandlers = [subscribe("lively.modules/moduleloaded", function (evt) {
              return _this.clearCacheFor(evt.module);
            }, S), subscribe("lively.modules/modulechanged", function (evt) {
              return _this.clearCacheFor(evt.module);
            }, S), subscribe("lively.vm/doitresult", function (evt) {
              return _this.clearCacheFor(evt.targetModule);
            }, S)];
          }
        }, {
          key: "unsubscribeFromSystemChanges",
          value: function unsubscribeFromSystemChanges() {
            if (!this._notificationHandlers) return;
            var S = this.System;
            unsubscribe("lively.modules/moduleloaded", this._notificationHandlers[0], S);
            unsubscribe("lively.modules/modulechanged", this._notificationHandlers[1], S);
            unsubscribe("lively.vm/doitresult", this._notificationHandlers[2], S);
            this._notificationHandlers = null;
          }
        }, {
          key: "clearCacheFor",
          value: function clearCacheFor(moduleId) {
            this.exportByModuleCache[moduleId] = null;
          }
        }, {
          key: "systemExports",
          value: function () {
            var _systemExports = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(options) {
              var _this2 = this;

              var exportsByModule;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.rawExportsByModule(options);

                    case 2:
                      exportsByModule = _context2.sent;
                      Object.keys(exportsByModule).forEach(function (id) {
                        return _this2.resolveExportsOfModule(id, exportsByModule);
                      });
                      return _context2.abrupt("return", Object.keys(exportsByModule).flatMap(function (id) {
                        return exportsByModule[id] ? exportsByModule[id].resolvedExports || exportsByModule[id].rawExports : [];
                      }));

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function systemExports(_x2) {
              return _systemExports.apply(this, arguments);
            }

            return systemExports;
          }()
        }, {
          key: "rawExportsByModule",
          value: function () {
            var _rawExportsByModule = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(options) {
              var _this3 = this;

              var System, livelyEnv, mods, exportsByModule, progressLogger;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      options = options || {};
                      System = this.System;
                      livelyEnv = System.get("@lively-env") || {};
                      mods = Object.keys(livelyEnv.loadedModules || {});
                      exportsByModule = {};

                      progressLogger = function progressLogger(i) {
                        if (i % 50 < 1 && options.progress.step) {
                          options.progress.step("Scanning ...", i / mods.length);
                        }
                      };

                      _context3.next = 8;
                      return Promise.all(mods.map(function (moduleId, i) {
                        if (options.progress) progressLogger(i);
                        return _this3.rawExportsOfModule(moduleId, options, exportsByModule).then(function (result) {
                          return result ? exportsByModule[moduleId] = result : null;
                        });
                      }));

                    case 8:
                      return _context3.abrupt("return", exportsByModule);

                    case 9:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function rawExportsByModule(_x3) {
              return _rawExportsByModule.apply(this, arguments);
            }

            return rawExportsByModule;
          }()
        }, {
          key: "getExportSpec",
          value: function getExportSpec(moduleId) {
            var _module$getFrozenReco = module$3(System, moduleId).getFrozenRecord(),
                rec = _module$getFrozenReco.recorder;

            var exportSpec = [];
            if (!rec.__module_exports__) return exportSpec;

            var _iterator = _createForOfIteratorHelper(rec.__module_exports__),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var exp = _step.value;

                if (exp.startsWith("__rename__")) {
                  var _exp$replace$split = exp.replace("__rename__", "").split("->"),
                      _exp$replace$split2 = _slicedToArray(_exp$replace$split, 2),
                      local = _exp$replace$split2[0],
                      exported = _exp$replace$split2[1];

                  exportSpec.push({
                    local: local,
                    exported: exported,
                    type: "id"
                  });
                } else if (exp.startsWith("__reexport__")) exportSpec.push.apply(exportSpec, _toConsumableArray(this.getExportSpec(exp.replace("__reexport__", ""))));else exportSpec.push({
                  local: exp,
                  exported: exp,
                  type: "id"
                });
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return exportSpec;
          }
        }, {
          key: "rawExportsOfModule",
          value: function () {
            var _rawExportsOfModule = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(moduleId) {
              var opts,
                  System,
                  cache,
                  excludedPackages,
                  excludedURLs,
                  excludeFns,
                  excludedPackageURLs,
                  _result,
                  mod,
                  pathInPackage,
                  p,
                  isMain,
                  packageURL,
                  packageName,
                  packageVersion,
                  result,
                  format,
                  cached,
                  moduleRecord,
                  _iterator2,
                  _step2,
                  key,
                  _args4 = arguments;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      opts = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {};
                      System = this.System, cache = this.exportByModuleCache;
                      excludedPackages = opts.excludedPackages || [];
                      excludedURLs = opts.excludedURLs || (opts.excludedURLs = excludedPackages.filter(function (ea) {
                        return typeof ea === "string";
                      }));
                      excludeFns = opts.excludeFns || (opts.excludeFns = excludedPackages.filter(function (ea) {
                        return typeof ea === "function";
                      }));
                      excludedPackageURLs = opts.excludedPackageURLs || (opts.excludedPackageURLs = excludedURLs.concat(excludedURLs.map(function (url) {
                        return System.decanonicalize(url.replace(/\/?$/, "/")).replace(/\/$/, "");
                      })));

                      if (!cache[moduleId]) {
                        _context4.next = 9;
                        break;
                      }

                      _result = cache[moduleId].rawExports;
                      return _context4.abrupt("return", excludedPackageURLs.includes(_result.packageURL) || excludeFns.some(function (fn) {
                        return fn(moduleId);
                      }) ? null : cache[moduleId]);

                    case 9:
                      mod = module$3(System, moduleId);
                      pathInPackage = mod.pathInPackage();
                      p = mod["package"]();
                      isMain = p && p.main && pathInPackage === p.main;
                      packageURL = p ? p.url : "";
                      packageName = p ? p.name : "";
                      packageVersion = p ? p.version : "";
                      result = {
                        moduleId: moduleId,
                        isMain: isMain,
                        pathInPackage: pathInPackage,
                        packageName: packageName,
                        packageURL: packageURL,
                        packageVersion: packageVersion,
                        exports: []
                      };

                      if (!(excludedPackageURLs.includes(packageURL) || excludeFns.some(function (fn) {
                        return fn(moduleId);
                      }))) {
                        _context4.next = 19;
                        break;
                      }

                      return _context4.abrupt("return", null);

                    case 19:
                      _context4.prev = 19;
                      format = mod.format();

                      if (!["register", "es6", "esm"].includes(format)) {
                        _context4.next = 38;
                        break;
                      }

                      _context4.next = 24;
                      return System._livelyModulesTranslationCache.fetchStoredModuleSource(mod.id);

                    case 24:
                      cached = _context4.sent;

                      if (!(cached && cached.exports)) {
                        _context4.next = 29;
                        break;
                      }

                      result.exports = JSON.parse(cached.exports);
                      _context4.next = 36;
                      break;

                    case 29:
                      if (!mod._frozenModule) {
                        _context4.next = 33;
                        break;
                      }

                      result.exports = this.getExportSpec(mod.id);
                      _context4.next = 36;
                      break;

                    case 33:
                      _context4.next = 35;
                      return mod.exports();

                    case 35:
                      result.exports = _context4.sent;

                    case 36:
                      _context4.next = 60;
                      break;

                    case 38:
                      _context4.next = 40;
                      return mod.load();

                    case 40:
                      moduleRecord = mod._recorder;
                      result.exports = [];
                      _iterator2 = _createForOfIteratorHelper(mod._frozenModule ? moduleRecord.__module_exports__ : keys(moduleRecord));
                      _context4.prev = 43;

                      _iterator2.s();

                    case 45:
                      if ((_step2 = _iterator2.n()).done) {
                        _context4.next = 52;
                        break;
                      }

                      key = _step2.value;

                      if (!["__useDefault", "default", "__module_hash__", "__module_exports__", "__esModule"].includes(key)) {
                        _context4.next = 49;
                        break;
                      }

                      return _context4.abrupt("continue", 50);

                    case 49:
                      result.exports.push({
                        exported: key,
                        local: key,
                        type: "id"
                      });

                    case 50:
                      _context4.next = 45;
                      break;

                    case 52:
                      _context4.next = 57;
                      break;

                    case 54:
                      _context4.prev = 54;
                      _context4.t0 = _context4["catch"](43);

                      _iterator2.e(_context4.t0);

                    case 57:
                      _context4.prev = 57;

                      _iterator2.f();

                      return _context4.finish(57);

                    case 60:
                      _context4.next = 65;
                      break;

                    case 62:
                      _context4.prev = 62;
                      _context4.t1 = _context4["catch"](19);
                      result.error = _context4.t1;

                    case 65:
                      return _context4.abrupt("return", cache[moduleId] = {
                        rawExports: result
                      });

                    case 66:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this, [[19, 62], [43, 54, 57, 60]]);
            }));

            function rawExportsOfModule(_x4) {
              return _rawExportsOfModule.apply(this, arguments);
            }

            return rawExportsOfModule;
          }()
        }, {
          key: "resolveExportsOfModule",
          value: function resolveExportsOfModule(moduleId, exportsByModule) {
            var _this4 = this;

            var locked = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            if (locked[moduleId]) return;
            locked[moduleId] = true;
            var data = exportsByModule[moduleId];
            if (!data || data.resolvedExports) return;
            var System = this.System;
            var base = select(data.rawExports, ["moduleId", "isMain", "packageName", "packageURL", "packageVersion", "pathInPackage"]);
            data.resolvedExports = data.rawExports.exports.flatMap(function (_ref2) {
              var type = _ref2.type,
                  exported = _ref2.exported,
                  local = _ref2.local,
                  fromModule = _ref2.fromModule;
              if (type !== "all") return [Object.assign({}, base, {
                type: type,
                exported: exported,
                local: local,
                fromModule: fromModule
              })];
              var fromId = System.decanonicalize(fromModule, moduleId);

              _this4.resolveExportsOfModule(fromId, exportsByModule, locked);

              return (exportsByModule[fromId] && exportsByModule[fromId].resolvedExports || []).map(function (resolvedExport) {
                var type = resolvedExport.type,
                    exported = resolvedExport.exported,
                    local = resolvedExport.local,
                    resolvedFromModule = resolvedExport.fromModule;
                return Object.assign({}, base, {
                  type: type,
                  exported: exported,
                  local: local,
                  fromModule: resolvedFromModule || fromModule
                });
              });
            });
            locked[moduleId] = false;
          }
        }, {
          key: "exportByModuleCache",
          get: function get() {
            return this._exportByModuleCache || (this._exportByModuleCache = {});
          }
        }]);

        return ExportLookup;
      }());
      __varRecorder__$3.ExportLookup = ExportLookup;
      __varRecorder__$3["default"] = ExportLookup;

      var __varRecorder__$2 = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.modules/cjs/dependencies.js", __contextModule__);

      var __moduleMeta__$1 = {
        pathInPackage: function pathInPackage() {
          return "./cjs/dependencies.js";
        },
        unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
          return function () {};
        },
        subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
          return function () {};
        },
        "package": function _package() {
          return {
            name: "lively.modules",
            version: "0.8.38"
          };
        }
      };

      var buildPackageMap = __varRecorder__$2["lively.modules/cjs/dependencies.js__define__"]("buildPackageMap", "function", /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dir) {
          var options,
              map,
              depth,
              maxDepth,
              excludes,
              config,
              key,
              node_modules,
              _iterator,
              _step,
              url,
              _args = arguments;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {
                    maxDepth: 0,
                    excludes: []
                  };
                  map = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
                  depth = _args.length > 3 && _args[3] !== undefined ? _args[3] : 0;
                  maxDepth = options.maxDepth, excludes = options.excludes;

                  if (!(maxDepth > 0 && depth > maxDepth)) {
                    _context.next = 6;
                    break;
                  }

                  return _context.abrupt("return", map);

                case 6:
                  _context.prev = 6;
                  _context.t0 = JSON;
                  _context.next = 10;
                  return resource(dir).join("package.json").read();

                case 10:
                  _context.t1 = _context.sent;
                  config = _context.t0.parse.call(_context.t0, _context.t1);
                  key = "".concat(config.name, "@").concat(config.version);

                  if (!(map[key] || excludes.includes(config.name))) {
                    _context.next = 15;
                    break;
                  }

                  return _context.abrupt("return", map);

                case 15:
                  map[key] = Object.assign({
                    url: dir
                  }, select(config, ["name", "version", "dependencies", "devDependencies", "main"]));
                  _context.next = 21;
                  break;

                case 18:
                  _context.prev = 18;
                  _context.t2 = _context["catch"](6);
                  return _context.abrupt("return", map);

                case 21:
                  _context.prev = 21;
                  _context.next = 24;
                  return resource(dir).join("node_modules").dirList(1);

                case 24:
                  node_modules = _context.sent;
                  _context.next = 30;
                  break;

                case 27:
                  _context.prev = 27;
                  _context.t3 = _context["catch"](21);
                  return _context.abrupt("return", map);

                case 30:
                  _iterator = _createForOfIteratorHelper(node_modules);
                  _context.prev = 31;

                  _iterator.s();

                case 33:
                  if ((_step = _iterator.n()).done) {
                    _context.next = 40;
                    break;
                  }

                  url = _step.value.url;
                  _context.next = 37;
                  return buildPackageMap(url, options, map, depth + 1);

                case 37:
                  map = _context.sent;

                case 38:
                  _context.next = 33;
                  break;

                case 40:
                  _context.next = 45;
                  break;

                case 42:
                  _context.prev = 42;
                  _context.t4 = _context["catch"](31);

                  _iterator.e(_context.t4);

                case 45:
                  _context.prev = 45;

                  _iterator.f();

                  return _context.finish(45);

                case 48:
                  return _context.abrupt("return", map);

                case 49:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[6, 18], [21, 27], [31, 42, 45, 48]]);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), __moduleMeta__$1);

      __varRecorder__$2.buildPackageMap = buildPackageMap;

      var resolvePackageDependencies = __varRecorder__$2["lively.modules/cjs/dependencies.js__define__"]("resolvePackageDependencies", "function", function (pkg, packageMap) {
        var deps = Object.assign({}, pkg.dependencies, {}, pkg.devDependencies);
        return Object.keys(deps).reduce(function (depMap, depName) {
          var depVersion = deps[depName];

          var _ref2 = values(packageMap).find(function (_ref3) {
            var name = _ref3.name,
                version = _ref3.version;
            return name === depName && lively.modules.semver.satisfies(version, depVersion);
          }) || {},
              name = _ref2.name,
              version = _ref2.version;

          depMap[depName] = name ? "".concat(name, "@").concat(version) : undefined;
          return depMap;
        }, {});
      }, __moduleMeta__$1);

      __varRecorder__$2.resolvePackageDependencies = resolvePackageDependencies;

      var dependencyGraph = __varRecorder__$2["lively.modules/cjs/dependencies.js__define__"]("dependencyGraph", "function", function (packageMap) {
        var packages = values(packageMap);
        var cachedVersionQueries = {};
        return Object.keys(packageMap).reduce(function (depMap, name) {
          var pkg = packageMap[name];
          var deps = Object.assign({}, pkg.dependencies, {}, pkg.devDependencies);
          depMap[name] = Object.keys(deps).map(function (depName) {
            return findAvailablePackage(depName, deps[depName]);
          }).filter(function (ea) {
            return !!ea;
          });
          return depMap;
        }, {});

        function findAvailablePackage(depName, depVersionRange) {
          var cacheKey = "".concat(depName, "@").concat(depVersionRange);
          if (cacheKey in cachedVersionQueries) return cachedVersionQueries[cacheKey];

          var _ref4 = packages.find(function (_ref5) {
            var name = _ref5.name,
                version = _ref5.version;
            return name === depName && lively.modules.semver.satisfies(version, depVersionRange);
          }) || {},
              name = _ref4.name,
              version = _ref4.version;

          return cachedVersionQueries[cacheKey] = name ? "".concat(name, "@").concat(version) : undefined;
        }
      }, __moduleMeta__$1);

      __varRecorder__$2.dependencyGraph = dependencyGraph;
      __varRecorder__$2.buildPackageMap = buildPackageMap;
      __varRecorder__$2.resolvePackageDependencies = resolvePackageDependencies;
      __varRecorder__$2.dependencyGraph = dependencyGraph;

      var cjs = /*#__PURE__*/Object.freeze({
        __proto__: null,
        buildPackageMap: buildPackageMap,
        resolvePackageDependencies: resolvePackageDependencies,
        dependencyGraph: dependencyGraph
      });

      var __varRecorder__$1 = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.modules/src/packages/module-package-mapping.js", __contextModule__);

      var ModulePackageMapping = /*#__PURE__*/function () {
        _createClass(ModulePackageMapping, null, [{
          key: "forSystem",
          value: function forSystem(System) {
            var existing = System["__lively.modules__modulePackageMapCache"];
            if (existing) return existing;
            var instance = new this(System);
            System["__lively.modules__modulePackageMapCache"] = instance;
            return instance;
          }
        }]);

        function ModulePackageMapping(System) {
          _classCallCheck(this, ModulePackageMapping);

          this.System = System;
          this._notificationHandlers = null;
          this.clearCache();
          this.subscribeToSystemChanges();
        }

        _createClass(ModulePackageMapping, [{
          key: "subscribeToSystemChanges",
          value: function subscribeToSystemChanges() {
            var _this = this;

            if (this._notificationHandlers) return;
            var S = this.System;
            this._notificationHandlers = [subscribe("lively.modules/moduleloaded", function (evt) {
              return _this.addModuleIdToCache(evt.module);
            }, S), subscribe("lively.modules/moduleunloaded", function (evt) {
              return _this.removeModuleFromCache(evt.module);
            }, S), subscribe("lively.modules/packageregistered", function (evt) {
              return _this.clearCache();
            }, S), subscribe("lively.modules/packageremoved", function (evt) {
              return _this.clearCache();
            }, S)];
          }
        }, {
          key: "unsubscribeFromSystemChanges",
          value: function unsubscribeFromSystemChanges() {
            if (!this._notificationHandlers) return;
            var S = this.System;
            unsubscribe("lively.modules/moduleloaded", this._notificationHandlers[0], S), unsubscribe("lively.modules/moduleunloaded", this._notificationHandlers[1], S), unsubscribe("lively.modules/packageregistered", this._notificationHandlers[2], S), unsubscribe("lively.modules/packageremoved", this._notificationHandlers[3], S);
            this._notificationHandlers = null;
          }
        }, {
          key: "clearCache",
          value: function clearCache() {
            this._cacheInitialized = false;
            this.packageToModule = {};
            this.modulesToPackage = {};
            this.modulesWithoutPackage = {};
          }
        }, {
          key: "ensureCache",
          value: function ensureCache() {
            var System = this.System,
                _cacheInitialized = this._cacheInitialized,
                packageToModule = this.packageToModule,
                modulesToPackage = this.modulesToPackage,
                modulesWithoutPackage = this.modulesWithoutPackage;
            if (_cacheInitialized) return this;
            var packageNames = classHolder.Package.allPackageURLs(System);

            for (var j = 0; j < packageNames.length; j++) {
              packageToModule[packageNames[j]] = [];
            }

            var modules = knownModuleNames(System);

            for (var i = 0; i < modules.length; i++) {
              var moduleId = modules[i];
              var itsPackage = void 0;

              for (var _j = 0; _j < packageNames.length; _j++) {
                var packageName = packageNames[_j];

                if (moduleId.startsWith(packageName) && (!itsPackage || itsPackage.length < packageName.length)) {
                  itsPackage = packageName;
                }
              }

              if (!itsPackage) {
                modulesWithoutPackage[moduleId] = {};
              } else {
                packageToModule[itsPackage].push(moduleId);
                modulesToPackage[moduleId] = itsPackage;
              }
            }

            this._cacheInitialized = true;
            return this;
          }
        }, {
          key: "addModuleIdToCache",
          value: function addModuleIdToCache(moduleId) {
            this.ensureCache();
            var packageToModule = this.packageToModule,
                modulesToPackage = this.modulesToPackage,
                modulesWithoutPackage = this.modulesWithoutPackage;
            if (modulesToPackage[moduleId]) return modulesToPackage[moduleId];
            if (modulesWithoutPackage[moduleId]) return null;
            var packageNames = Object.keys(packageToModule);
            var itsPackage;

            for (var j = 0; j < packageNames.length; j++) {
              var packageName = packageNames[j];

              if (moduleId.startsWith(packageName) && (!itsPackage || itsPackage.length < packageName.length)) {
                itsPackage = packageName;
              }
            }

            if (!itsPackage) {
              modulesWithoutPackage[moduleId] = {};
              return null;
            } else {
              var modules = packageToModule[itsPackage] || (packageToModule[itsPackage] = []);
              modules.push(moduleId);
              return modulesToPackage[moduleId] = itsPackage;
            }
          }
        }, {
          key: "removeModuleFromCache",
          value: function removeModuleFromCache(moduleId) {
            if (!this._cacheInitialized) return;
            var packageToModule = this.packageToModule,
                modulesToPackage = this.modulesToPackage,
                modulesWithoutPackage = this.modulesWithoutPackage;

            if (modulesWithoutPackage.hasOwnProperty(moduleId)) {
              delete modulesWithoutPackage[moduleId];
              return;
            }

            var itsPackage = modulesToPackage[moduleId];
            if (!itsPackage) return;
            delete modulesToPackage[moduleId];

            if (packageToModule[itsPackage]) {
              remove$1(packageToModule[itsPackage], moduleId);
            }
          }
        }, {
          key: "getPackageURLForModuleId",
          value: function getPackageURLForModuleId(moduleId) {
            return this.modulesToPackage[moduleId] || this.addModuleIdToCache(moduleId);
          }
        }, {
          key: "getModuleIdsForPackageURL",
          value: function getModuleIdsForPackageURL(packageURL) {
            this.ensureCache();
            return this.packageToModule[packageURL] || [];
          }
        }]);

        return ModulePackageMapping;
      }();
      __varRecorder__$1.ModulePackageMapping = ModulePackageMapping;
      __varRecorder__$1["default"] = ModulePackageMapping;

      var __varRecorder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.modules/index.js", __contextModule__);

      var __moduleMeta__ = {
        pathInPackage: function pathInPackage() {
          return "./index.js";
        },
        unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
          return function () {};
        },
        subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
          return function () {};
        },
        "package": function _package() {
          return {
            name: "lively.modules",
            version: "0.8.38"
          };
        }
      };

      var changeSystem = __varRecorder__["lively.modules/index.js__define__"]("changeSystem", "function", function (newSystem, makeGlobal) {
        __varRecorder__.defaultSystem = newSystem;
        if (makeGlobal) __varRecorder__.GLOBAL.System = newSystem;
        newSystem._scripting = __varRecorder__.scripting;
        return newSystem;
      }, __moduleMeta__);

      __varRecorder__.changeSystem = changeSystem;

      var wrapModuleResolution = __varRecorder__["lively.modules/index.js__define__"]("wrapModuleResolution", "function", function () {
        wrapModuleResolution$1(__varRecorder__.defaultSystem);
      }, __moduleMeta__);

      __varRecorder__.wrapModuleResolution = wrapModuleResolution;

      var unwrapModuleResolution = __varRecorder__["lively.modules/index.js__define__"]("unwrapModuleResolution", "function", function () {
        unwrapModuleResolution$1(__varRecorder__.defaultSystem);
      }, __moduleMeta__);

      __varRecorder__.unwrapModuleResolution = unwrapModuleResolution;

      var loadedModules = __varRecorder__["lively.modules/index.js__define__"]("loadedModules", "function", function () {
        return Object.keys(__varRecorder__.requireMap());
      }, __moduleMeta__);

      __varRecorder__.loadedModules = loadedModules;

      var module$1 = exports('a', __varRecorder__["lively.modules/index.js__define__"]("module", "function", function (id) {
        return module$3(__varRecorder__.defaultSystem, id);
      }, __moduleMeta__));

      __varRecorder__.module = module$1;

      var isModuleLoaded = exports('i', __varRecorder__["lively.modules/index.js__define__"]("isModuleLoaded", "function", function (name, isNormalized) {
        return isModuleLoaded$1(__varRecorder__.defaultSystem, name, isNormalized);
      }, __moduleMeta__));

      __varRecorder__.isModuleLoaded = isModuleLoaded;

      var doesModuleExist = __varRecorder__["lively.modules/index.js__define__"]("doesModuleExist", "function", function (name, isNormalized) {
        return doesModuleExist$1(__varRecorder__.defaultSystem, name, isNormalized);
      }, __moduleMeta__);

      __varRecorder__.doesModuleExist = doesModuleExist;

      var printSystemConfig = exports('p', __varRecorder__["lively.modules/index.js__define__"]("printSystemConfig", "function", function () {
        return printSystemConfig$1(__varRecorder__.defaultSystem);
      }, __moduleMeta__));

      __varRecorder__.printSystemConfig = printSystemConfig;

      var whenLoaded = __varRecorder__["lively.modules/index.js__define__"]("whenLoaded", "function", function (moduleName, callback) {
        return whenLoaded$1(__varRecorder__.defaultSystem, moduleName, callback);
      }, __moduleMeta__);

      __varRecorder__.whenLoaded = whenLoaded;

      var importPackage = exports('l', __varRecorder__["lively.modules/index.js__define__"]("importPackage", "function", function (packageURL) {
        return importPackage$1(__varRecorder__.defaultSystem, packageURL);
      }, __moduleMeta__));

      __varRecorder__.importPackage = importPackage;

      var registerPackage = exports('k', __varRecorder__["lively.modules/index.js__define__"]("registerPackage", "function", function (packageURL, optPkgConfig) {
        return registerPackage$1(__varRecorder__.defaultSystem, packageURL, optPkgConfig);
      }, __moduleMeta__));

      __varRecorder__.registerPackage = registerPackage;

      var removePackage = exports('n', __varRecorder__["lively.modules/index.js__define__"]("removePackage", "function", function (packageURL) {
        return removePackage$1(__varRecorder__.defaultSystem, packageURL);
      }, __moduleMeta__));

      __varRecorder__.removePackage = removePackage;

      var reloadPackage = exports('o', __varRecorder__["lively.modules/index.js__define__"]("reloadPackage", "function", function (packageURL, opts) {
        return reloadPackage$1(__varRecorder__.defaultSystem, packageURL, opts);
      }, __moduleMeta__));

      __varRecorder__.reloadPackage = reloadPackage;

      var getPackages = exports('e', __varRecorder__["lively.modules/index.js__define__"]("getPackages", "function", function () {
        return getPackageSpecs(__varRecorder__.defaultSystem);
      }, __moduleMeta__));

      __varRecorder__.getPackages = getPackages;

      var getPackage = exports('h', __varRecorder__["lively.modules/index.js__define__"]("getPackage", "function", function (packageURL) {
        var isNormalized = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        return getPackage$1(__varRecorder__.defaultSystem, packageURL, isNormalized);
      }, __moduleMeta__));

      __varRecorder__.getPackage = getPackage;

      var getPackageOfModule = exports('f', __varRecorder__["lively.modules/index.js__define__"]("getPackageOfModule", "function", function (moduleId) {
        return Package.forModuleId(__varRecorder__.defaultSystem, moduleId);
      }, __moduleMeta__));

      __varRecorder__.getPackageOfModule = getPackageOfModule;

      var ensurePackage = __varRecorder__["lively.modules/index.js__define__"]("ensurePackage", "function", function (packageURL) {
        return ensurePackage$1(__varRecorder__.defaultSystem, packageURL);
      }, __moduleMeta__);

      __varRecorder__.ensurePackage = ensurePackage;

      var applyPackageConfig = exports('q', __varRecorder__["lively.modules/index.js__define__"]("applyPackageConfig", "function", function (packageConfig, packageURL) {
        return applyConfig(__varRecorder__.defaultSystem, packageConfig, packageURL);
      }, __moduleMeta__));

      __varRecorder__.applyPackageConfig = applyPackageConfig;

      var lookupPackage = __varRecorder__["lively.modules/index.js__define__"]("lookupPackage", "function", function (packageURL) {
        var isNormalized = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        return lookupPackage$1(__varRecorder__.defaultSystem, packageURL, isNormalized);
      }, __moduleMeta__);

      __varRecorder__.lookupPackage = lookupPackage;

      var moduleSourceChange = __varRecorder__["lively.modules/index.js__define__"]("moduleSourceChange", "function", function (moduleName, newSource, options) {
        return moduleSourceChange$1(__varRecorder__.defaultSystem, moduleName, newSource, options);
      }, __moduleMeta__);

      __varRecorder__.moduleSourceChange = moduleSourceChange;

      var requireMap = __varRecorder__["lively.modules/index.js__define__"]("requireMap", "function", function () {
        return computeRequireMap(__varRecorder__.defaultSystem);
      }, __moduleMeta__);

      __varRecorder__.requireMap = requireMap;

      var isHookInstalled = __varRecorder__["lively.modules/index.js__define__"]("isHookInstalled", "function", function (methodName, hookOrName) {
        return isInstalled(__varRecorder__.defaultSystem, methodName, hookOrName);
      }, __moduleMeta__);

      __varRecorder__.isHookInstalled = isHookInstalled;

      var installHook = __varRecorder__["lively.modules/index.js__define__"]("installHook", "function", function (hookName, hook) {
        return install(__varRecorder__.defaultSystem, hookName, hook);
      }, __moduleMeta__);

      __varRecorder__.installHook = installHook;

      var removeHook = __varRecorder__["lively.modules/index.js__define__"]("removeHook", "function", function (methodName, hookOrName) {
        return remove(__varRecorder__.defaultSystem, methodName, hookOrName);
      }, __moduleMeta__);

      __varRecorder__.removeHook = removeHook;
      __varRecorder__.GLOBAL = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : undefined;
      __varRecorder__.defaultSystem = __varRecorder__.defaultSystem || prepareSystem(__varRecorder__.GLOBAL.System);
      var defaultSystem = exports('d', __varRecorder__.defaultSystem);
      __varRecorder__.defaultSystem = defaultSystem;
      __varRecorder__.getSystem = getSystem;
      __varRecorder__.removeSystem = removeSystem;
      __varRecorder__.loadedModules = loadedModules;
      __varRecorder__.printSystemConfig = printSystemConfig;
      __varRecorder__.whenLoaded = whenLoaded;
      __varRecorder__.changeSystem = changeSystem;
      __varRecorder__.module = module$1;
      __varRecorder__.doesModuleExist = doesModuleExist;
      __varRecorder__.isModuleLoaded = isModuleLoaded;
      __varRecorder__.unwrapModuleResolution = unwrapModuleResolution;
      __varRecorder__.wrapModuleResolution = wrapModuleResolution;
      __varRecorder__.importPackage = importPackage;
      __varRecorder__.registerPackage = registerPackage;
      __varRecorder__.removePackage = removePackage;
      __varRecorder__.reloadPackage = reloadPackage;
      __varRecorder__.getPackages = getPackages;
      __varRecorder__.getPackage = getPackage;
      __varRecorder__.getPackageOfModule = getPackageOfModule;
      __varRecorder__.ensurePackage = ensurePackage;
      __varRecorder__.applyPackageConfig = applyPackageConfig;
      __varRecorder__.lookupPackage = lookupPackage;
      __varRecorder__.PackageRegistry = PackageRegistry;
      __varRecorder__.moduleSourceChange = moduleSourceChange;
      __varRecorder__.requireMap = requireMap;
      __varRecorder__.isHookInstalled = isHookInstalled;
      __varRecorder__.installHook = installHook;
      __varRecorder__.removeHook = removeHook;
      __varRecorder__["default"] = ExportLookup;
      __varRecorder__.ExportLookup = ExportLookup;
      __varRecorder__.cjs = cjs;
      __varRecorder__["default"] = exports$1;
      __varRecorder__.semver = exports$1;
      __varRecorder__.scripting = __varRecorder__.defaultSystem._scripting = {
        module: module$3,
        ensurePackage: ensurePackage$1,
        registerPackage: registerPackage$1,
        importPackage: importPackage$1,
        lookupPackage: lookupPackage$1,
        ImportInjector: ImportInjector
      };
      __varRecorder__.defaultSystem.global[defaultClassToFunctionConverterName] = initializeClass;
      classHolder.ModulePackageMapping = ModulePackageMapping;
      classHolder.Package = Package;
      classHolder.PackageRegistry = PackageRegistry;
      var scripting = exports('M', __varRecorder__.scripting);
      __varRecorder__.scripting = scripting;

      var modules = /*#__PURE__*/Object.freeze({
        __proto__: null,
        System: defaultSystem,
        getSystem: getSystem,
        removeSystem: removeSystem,
        loadedModules: loadedModules,
        printSystemConfig: printSystemConfig,
        whenLoaded: whenLoaded,
        changeSystem: changeSystem,
        module: module$1,
        doesModuleExist: doesModuleExist,
        isModuleLoaded: isModuleLoaded,
        unwrapModuleResolution: unwrapModuleResolution,
        wrapModuleResolution: wrapModuleResolution,
        importPackage: importPackage,
        registerPackage: registerPackage,
        removePackage: removePackage,
        reloadPackage: reloadPackage,
        getPackages: getPackages,
        getPackage: getPackage,
        getPackageOfModule: getPackageOfModule,
        ensurePackage: ensurePackage,
        applyPackageConfig: applyPackageConfig,
        lookupPackage: lookupPackage,
        PackageRegistry: PackageRegistry,
        moduleSourceChange: moduleSourceChange,
        requireMap: requireMap,
        isHookInstalled: isHookInstalled,
        installHook: installHook,
        removeHook: removeHook,
        ExportLookup: ExportLookup,
        cjs: cjs,
        semver: exports$1,
        scripting: scripting
      });
      exports('m', modules);

    })
  };
}));
