System.register(['./__rootModule___commonjs-entry-039abf1b.js', './index-d97f22af.js', './app-3c1e5645.js', './linter-1668ac5b.js', './index-d0172adc.js', './index-0250cb25.js', './loading-indicator.cp-668e5ddc.js', './ui.cp-d94265c2.js', './list.cp-50d496c7.js', './client-fb647a5a.js', './editor-modes-0f820fa8.js', './search-cf1a5c4c.js', './shell-interface-e2437883.js', './client-command-99e40f2e.js', './index-009b6510.js', './messages.cp-bdc8d7af.js', './code-search.cp-3e624062.js', './client-resource-6f2aa9b2.js', './editor-plugin-b80a1e8e.js', './dialogs.cp-a3f8c313.js', './canvas-2975e6b1.js', './morph-to-image-4b085547.js', './object-classes-6157cef2.js', './path-72cfeae7.js', './npm_functional-red-black-tree@1.0-34e8dcd1.js'], (function (exports, module) {
  var __contextModule__ = typeof module !== 'undefined' ? module : arguments[1];
;
  var loadViaScript, resource, Color, _toConsumableArray, _asyncToGenerator, promise, keys, select, adoptObject, exports$1$2, uniq, _createForOfIteratorHelper, pathForBrowserHistory, withoutAll, modules, updateBundledModules, install, Project, installLinter;
  return {
    setters: [function (module) {
      loadViaScript = module.bL;
      resource = module.ac;
      Color = module.C;
      _toConsumableArray = module.r;
      _asyncToGenerator = module._;
      promise = module.gF;
      keys = module.bX;
      select = module.aW;
      adoptObject = module.bc;
      exports$1$2 = module.gG;
      uniq = module.u;
      _createForOfIteratorHelper = module.a6;
      pathForBrowserHistory = module.bC;
      withoutAll = module.x;
    }, function (module) {
      modules = module.m;
      updateBundledModules = module.N;
      install = module.O;
    }, function (module) {
      Project = module.P;
    }, function (module) {
      installLinter = module.i;
    }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
    execute: (function () {

      var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
      var exports$1 = {};
      !function (e, r) {
        exports$1 = r();
      }(exports$1, function () {
        function e(e) {
          function r(e) {
            for (var r = 0, n = t.length; r < n; ++r)
              t[r](e);
            a.push(e);
          }
          if ("function" != typeof Promise)
            throw new Error("Promise implementation not available in this environment.");
          var t = [], a = [], n = new Promise(function (t, a) {
              e(t, a, r);
            });
          n.progress = function (e) {
            if ("function" != typeof e)
              throw new Error("cb is not a function.");
            for (var r = 0, i = a.length; r < i; ++r)
              e(a[r]);
            return t.push(e), n;
          };
          var i = n.then;
          return n.then = function (e, r, t) {
            return i.call(n, e, r), void 0 !== t && n.progress(t), n;
          }, n;
        }
        function r(r) {
          if (!(r instanceof ArrayBuffer))
            throw new TypeError("arrayBuffer is not an instance of ArrayBuffer.");
          if (!n.Worker)
            throw new Error("Worker implementation is not available in this environment.");
          return new e(function (e, n, i) {
            var o = new Worker(a), s = [];
            o.onerror = function (e) {
              n(e);
            }, o.onmessage = function (r) {
              switch (r = r.data, r.type) {
              case "log":
                console[r.data.level]("Worker: " + r.data.msg);
                break;
              case "extract":
                var a = t(r.data);
                s.push(a), i(a);
                break;
              case "complete":
                o.terminate(), e(s);
                break;
              case "error":
                o.terminate(), n(new Error(r.data.message));
                break;
              default:
                o.terminate(), n(new Error("Unknown message from worker: " + r.type));
              }
            }, o.postMessage({
              type: "extract",
              buffer: r
            }, [r]);
          });
        }
        function t(e) {
          return Object.defineProperties(e, o), e;
        }
        var a, n = window || this || _global, i = n.URL || n.webkitURL, o = {
            blob: {
              get: function () {
                return (this || _global)._blob || ((this || _global)._blob = new Blob([(this || _global).buffer]));
              }
            },
            getBlobUrl: {
              value: function () {
                return (this || _global)._blobUrl || ((this || _global)._blobUrl = i.createObjectURL((this || _global).blob));
              }
            },
            readAsString: {
              value: function () {
                for (var e = (this || _global).buffer, r = e.byteLength, t = 1, a = new DataView(e), n = [], i = 0; i < r; ++i) {
                  var o = a.getUint8(i * t, !0);
                  n.push(o);
                }
                return (this || _global)._string = String.fromCharCode.apply(null, n);
              }
            },
            readAsJSON: {
              value: function () {
                return JSON.parse(this.readAsString());
              }
            }
          };
        return a = (window || this || _global).URL.createObjectURL(new Blob(["\"use strict\";function UntarWorker(){}function decodeUTF8(e){for(var r=\"\",t=0;t<e.length;){var a=e[t++];if(a>127){if(a>191&&a<224){if(t>=e.length)throw\"UTF-8 decode: incomplete 2-byte sequence\";a=(31&a)<<6|63&e[t]}else if(a>223&&a<240){if(t+1>=e.length)throw\"UTF-8 decode: incomplete 3-byte sequence\";a=(15&a)<<12|(63&e[t])<<6|63&e[++t]}else{if(!(a>239&&a<248))throw\"UTF-8 decode: unknown multibyte start 0x\"+a.toString(16)+\" at index \"+(t-1);if(t+2>=e.length)throw\"UTF-8 decode: incomplete 4-byte sequence\";a=(7&a)<<18|(63&e[t])<<12|(63&e[++t])<<6|63&e[++t]}++t}if(a<=65535)r+=String.fromCharCode(a);else{if(!(a<=1114111))throw\"UTF-8 decode: code point 0x\"+a.toString(16)+\" exceeds UTF-16 reach\";a-=65536,r+=String.fromCharCode(a>>10|55296),r+=String.fromCharCode(1023&a|56320)}}return r}function PaxHeader(e){this._fields=e}function TarFile(){}function UntarStream(e){this._bufferView=new DataView(e),this._position=0}function UntarFileStream(e){this._stream=new UntarStream(e),this._globalPaxHeader=null}if(UntarWorker.prototype={onmessage:function(e){try{if(\"extract\"!==e.data.type)throw new Error(\"Unknown message type: \"+e.data.type);this.untarBuffer(e.data.buffer)}catch(r){this.postError(r)}},postError:function(e){this.postMessage({type:\"error\",data:{message:e.message}})},postLog:function(e,r){this.postMessage({type:\"log\",data:{level:e,msg:r}})},untarBuffer:function(e){try{for(var r=new UntarFileStream(e);r.hasNext();){var t=r.next();this.postMessage({type:\"extract\",data:t},[t.buffer])}this.postMessage({type:\"complete\"})}catch(a){this.postError(a)}},postMessage:function(e,r){self.postMessage(e,r)}},\"undefined\"!=typeof self){var worker=new UntarWorker;self.onmessage=function(e){worker.onmessage(e)}}PaxHeader.parse=function(e){for(var r=new Uint8Array(e),t=[];r.length>0;){var a=parseInt(decodeUTF8(r.subarray(0,r.indexOf(32)))),n=decodeUTF8(r.subarray(0,a)),i=n.match(/^\\d+ ([^=]+)=(.*)\\n$/);if(null===i)throw new Error(\"Invalid PAX header data format.\");var s=i[1],o=i[2];0===o.length?o=null:null!==o.match(/^\\d+$/)&&(o=parseInt(o));var f={name:s,value:o};t.push(f),r=r.subarray(a)}return new PaxHeader(t)},PaxHeader.prototype={applyHeader:function(e){this._fields.forEach(function(r){var t=r.name,a=r.value;\"path\"===t?(t=\"name\",void 0!==e.prefix&&delete e.prefix):\"linkpath\"===t&&(t=\"linkname\"),null===a?delete e[t]:e[t]=a})}},UntarStream.prototype={readString:function(e){for(var r=1,t=e*r,a=[],n=0;n<e;++n){var i=this._bufferView.getUint8(this.position()+n*r,!0);if(0===i)break;a.push(i)}return this.seek(t),String.fromCharCode.apply(null,a)},readBuffer:function(e){var r;if(\"function\"==typeof ArrayBuffer.prototype.slice)r=this._bufferView.buffer.slice(this.position(),this.position()+e);else{r=new ArrayBuffer(e);var t=new Uint8Array(r),a=new Uint8Array(this._bufferView.buffer,this.position(),e);t.set(a)}return this.seek(e),r},seek:function(e){this._position+=e},peekUint32:function(){return this._bufferView.getUint32(this.position(),!0)},position:function(e){return void 0===e?this._position:void(this._position=e)},size:function(){return this._bufferView.byteLength}},UntarFileStream.prototype={hasNext:function(){return this._stream.position()+4<this._stream.size()&&0!==this._stream.peekUint32()},next:function(){return this._readNextFile()},_readNextFile:function(){var e=this._stream,r=new TarFile,t=!1,a=null,n=e.position(),i=n+512;switch(r.name=e.readString(100),r.mode=e.readString(8),r.uid=parseInt(e.readString(8)),r.gid=parseInt(e.readString(8)),r.size=parseInt(e.readString(12),8),r.mtime=parseInt(e.readString(12),8),r.checksum=parseInt(e.readString(8)),r.type=e.readString(1),r.linkname=e.readString(100),r.ustarFormat=e.readString(6),r.ustarFormat.indexOf(\"ustar\")>-1&&(r.version=e.readString(2),r.uname=e.readString(32),r.gname=e.readString(32),r.devmajor=parseInt(e.readString(8)),r.devminor=parseInt(e.readString(8)),r.namePrefix=e.readString(155),r.namePrefix.length>0&&(r.name=r.namePrefix+\"/\"+r.name)),e.position(i),r.type){case\"0\":case\"\":r.buffer=e.readBuffer(r.size);break;case\"1\":break;case\"2\":break;case\"3\":break;case\"4\":break;case\"5\":break;case\"6\":break;case\"7\":break;case\"g\":t=!0,this._globalPaxHeader=PaxHeader.parse(e.readBuffer(r.size));break;case\"x\":t=!0,a=PaxHeader.parse(e.readBuffer(r.size))}void 0===r.buffer&&(r.buffer=new ArrayBuffer(0));var s=i+r.size;return r.size%512!==0&&(s+=512-r.size%512),e.position(s),t&&(r=this._readNextFile()),null!==this._globalPaxHeader&&this._globalPaxHeader.applyHeader(r),null!==a&&a.applyHeader(r),r}};"])), r;
      });
      var exports$1$1 = exports$1;

      var __varRecorder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.freezer/src/util/bootstrap.js", __contextModule__);

      var __moduleMeta__ = {
        pathInPackage: function pathInPackage() {
          return "./src/util/bootstrap.js";
        },
        unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
          return function () {};
        },
        subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
          return function () {};
        },
        "package": function _package() {
          return {
            name: "lively.freezer",
            version: "0.1.0"
          };
        }
      };

      var polyfills = __varRecorder__["lively.freezer/src/util/bootstrap.js__define__"]("polyfills", "function", function () {
        var loads = [];

        if (!("PointerEvent" in window)) {
          loads.push(loadViaScript(resource(System.baseURL).join("/lively.next-node_modules/pepjs/dist/pep.js").url));
        }

        if (!("fetch" in window)) {
          loads.push(loadViaScript("//cdnjs.cloudflare.com/ajax/libs/fetch/1.0.0/fetch.js"));
        }

        return Promise.all(loads);
      }, __moduleMeta__);

      __varRecorder__.polyfills = polyfills;

      var importPackageAndDo = __varRecorder__["lively.freezer/src/util/bootstrap.js__define__"]("importPackageAndDo", "function", function (packageURL, doFunc) {
        var li = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var name = packageURL.split("/").slice(-1)[0];
        if (li) li.label = "loading ".concat(name);
        return lively.modules.importPackage(packageURL).then(doFunc || function () {});
      }, __moduleMeta__);

      __varRecorder__.importPackageAndDo = importPackageAndDo;

      var extractEsmModules = __varRecorder__["lively.freezer/src/util/bootstrap.js__define__"]("extractEsmModules", "function", function () {
        Object.keys(lively.FreezerRuntime.registry).filter(function (k) {
          return k.startsWith("esm://");
        }).forEach(function (id) {
          __varRecorder__.extractedModules[id] = lively.FreezerRuntime.exportsOf(id);
        });
      }, __moduleMeta__);

      __varRecorder__.extractEsmModules = extractEsmModules;

      var extractModules = __varRecorder__["lively.freezer/src/util/bootstrap.js__define__"]("extractModules", "function", function (packageName) {
        Object.keys(lively.FreezerRuntime.registry).filter(function (k) {
          return k.startsWith(packageName);
        }).forEach(function (id) {
          __varRecorder__.extractedModules[resource(System.baseURL).join(id).url] = lively.FreezerRuntime.exportsOf(id);
        });
      }, __moduleMeta__);

      __varRecorder__.extractModules = extractModules;

      var fastLoadPackages = __varRecorder__["lively.freezer/src/util/bootstrap.js__define__"]("fastLoadPackages", "function", /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(progress) {
          var m;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  progress === null || progress === void 0 ? void 0 : progress.showInfiniteProgress();
                  _context.next = 3;
                  return module.import('./__rootModule___commonjs-entry-039abf1b.js').then(function (n) { return n.gI; });

                case 3:
                  m = _context.sent;

                  __varRecorder__.extractModules("lively.lang");

                  delete m._prevLivelyGlobal;
                  _context.next = 8;
                  return module.import('./index-d0172adc.js').then(function (n) { return n.T; });

                case 8:
                  lively.ast = _context.sent;

                  __varRecorder__.extractModules("lively.ast");

                  _context.next = 12;
                  return module.import('./index-d97f22af.js').then(function (n) { return n.Q; });

                case 12:
                  lively.sourceTransform = _context.sent;

                  __varRecorder__.extractModules("lively.source-transform");

                  _context.next = 16;
                  return module.import('./object-classes-6157cef2.js').then(function (n) { return n.o; });

                case 16:
                  _context.next = 18;
                  return module.import('./index-d97f22af.js').then(function (n) { return n.S; });

                case 18:
                  lively.classes = _context.sent;

                  __varRecorder__.extractModules("lively.class");

                  _context.next = 22;
                  return module.import('./index-d97f22af.js').then(function (n) { return n.R; });

                case 22:
                  lively.vm = _context.sent;

                  __varRecorder__.extractModules("lively.vm");

                  __varRecorder__.extractModules("lively.modules");

                  _context.next = 27;
                  return module.import('./index-4e1dc2a8.js');

                case 27:
                  __varRecorder__.extractModules("lively.storage");

                  _context.next = 30;
                  return module.import('./__rootModule___commonjs-entry-039abf1b.js').then(function (n) { return n.gM; });

                case 30:
                  __varRecorder__.extractModules("lively.resources");

                  _context.next = 33;
                  return module.import('./client-fb647a5a.js');

                case 33:
                  _context.next = 35;
                  return module.import('./index-afa4bba4.js');

                case 35:
                  __varRecorder__.extractModules("lively.2lively");

                  _context.next = 38;
                  return module.import('./__rootModule___commonjs-entry-039abf1b.js').then(function (n) { return n.gL; });

                case 38:
                  __varRecorder__.extractModules("lively.serializer2");

                  _context.next = 41;
                  return module.import('./app-3c1e5645.js').then(function (n) { return n.w; });

                case 41:
                  _context.next = 43;
                  return module.import('./ui.cp-d94265c2.js').then(function (n) { return n.ab; });

                case 43:
                  _context.next = 45;
                  return module.import('./ui.cp-d94265c2.js').then(function (n) { return n.ac; });

                case 45:
                  __varRecorder__.extractModules("lively.ide");

                  _context.next = 48;
                  return module.import('./index-fa3f1c5b.js');

                case 48:
                  _context.next = 50;
                  return module.import('./client-command-99e40f2e.js');

                case 50:
                  _context.next = 52;
                  return module.import('./client-resource-6f2aa9b2.js');

                case 52:
                  __varRecorder__.extractModules("lively.shell");

                  _context.next = 55;
                  return module.import('./__rootModule___commonjs-entry-039abf1b.js').then(function (n) { return n.gK; });

                case 55:
                  __varRecorder__.extractModules("lively.bindings");

                  __varRecorder__.extractModules("lively.components");

                  _context.next = 59;
                  return module.import('./ui.cp-d94265c2.js').then(function (n) { return n.ah; });

                case 59:
                  __varRecorder__.extractModules("lively.halos");

                  _context.next = 62;
                  return module.import('./ui.cp-d94265c2.js').then(function (n) { return n.aa; });

                case 62:
                  __varRecorder__.extractModules("lively-system-interface");

                  _context.next = 65;
                  return module.import('./__rootModule___commonjs-entry-039abf1b.js').then(function (n) { return n.gJ; });

                case 65:
                  __varRecorder__.extractModules("lively.graphics");

                  _context.next = 68;
                  return module.import('./__rootModule___commonjs-entry-039abf1b.js').then(function (n) { return n.gN; });

                case 68:
                  lively.morphic = _context.sent;

                  __varRecorder__.extractModules("lively.morphic");

                  _context.next = 72;
                  return module.import('./app-3c1e5645.js').then(function (n) { return n.c; });

                case 72:
                  __varRecorder__.extractModules("lively.project");

                  _context.next = 75;
                  return module.import('./app-3c1e5645.js').then(function (n) { return n.l; });

                case 75:
                  __varRecorder__.extractModules("lively.collab");

                  _context.next = 78;
                  return module.import('./app-3c1e5645.js').then(function (n) { return n.i; });

                case 78:
                  __varRecorder__.extractModules("lively.git");

                  _context.next = 81;
                  return module.import('./ui.cp-d94265c2.js').then(function (n) { return n.ad; });

                case 81:
                  __varRecorder__.extractModules("lively.freezer");

                  __varRecorder__.extractModules("lively.user");

                  __varRecorder__.extractEsmModules();

                case 84:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), __moduleMeta__);

      __varRecorder__.fastLoadPackages = fastLoadPackages;

      var installFetchHook = __varRecorder__["lively.freezer/src/util/bootstrap.js__define__"]("installFetchHook", "function", function () {
        function logFetch(proceed, load) {
          return proceed(load);
        }

        window.__logFetch = logFetch;
        lively.modules.installHook("fetch", logFetch);
      }, __moduleMeta__);

      __varRecorder__.installFetchHook = installFetchHook;

      var logInfo = __varRecorder__["lively.freezer/src/util/bootstrap.js__define__"]("logInfo", "function", function () {
        var _console;

        for (var _len = arguments.length, info = new Array(_len), _key = 0; _key < _len; _key++) {
          info[_key] = arguments[_key];
        }

        (_console = console).log.apply(_console, ["%c" + info[0], "color: white; background: ".concat(Color.darkGray, "; border-radius: 10px; padding: 1px 4px;")].concat(_toConsumableArray(info.slice(1))));
      }, __moduleMeta__);

      __varRecorder__.logInfo = logInfo;

      var shallowReloadModulesIfNeeded = __varRecorder__["lively.freezer/src/util/bootstrap.js__define__"]("shallowReloadModulesIfNeeded", "function", /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(modulesToCheck, moduleHashes, R) {
          var modsToReload, _iterator, _step, _R$registry$modId, modId, modHash, key, currMod;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  modsToReload = [];
                  _iterator = _createForOfIteratorHelper(modulesToCheck);
                  _context2.prev = 2;

                  _iterator.s();

                case 4:
                  if ((_step = _iterator.n()).done) {
                    _context2.next = 32;
                    break;
                  }

                  modId = _step.value;
                  modHash = (_R$registry$modId = R.registry[modId]) === null || _R$registry$modId === void 0 ? void 0 : _R$registry$modId.recorder.__module_hash__;
                  key = modId;
                  currMod = void 0;

                  if (!(key === "@empty")) {
                    _context2.next = 11;
                    break;
                  }

                  return _context2.abrupt("continue", 30);

                case 11:
                  if (!key.startsWith("esm://")) {
                    _context2.next = 13;
                    break;
                  }

                  return _context2.abrupt("continue", 30);

                case 13:
                  if (!(modHash !== moduleHashes["/" + key])) {
                    _context2.next = 30;
                    break;
                  }

                  console.log("reviving", modId);
                  currMod = lively.modules.module(modId);
                  _context2.prev = 16;
                  _context2.t0 = modsToReload.push;
                  _context2.t1 = modsToReload;
                  _context2.t2 = _toConsumableArray;
                  _context2.next = 22;
                  return currMod.revive(false);

                case 22:
                  _context2.t3 = _context2.sent;
                  _context2.t4 = (0, _context2.t2)(_context2.t3);

                  _context2.t0.apply.call(_context2.t0, _context2.t1, _context2.t4);

                  _context2.next = 30;
                  break;

                case 27:
                  _context2.prev = 27;
                  _context2.t5 = _context2["catch"](16);
                  console.log("failed reviving", modId);

                case 30:
                  _context2.next = 4;
                  break;

                case 32:
                  _context2.next = 37;
                  break;

                case 34:
                  _context2.prev = 34;
                  _context2.t6 = _context2["catch"](2);

                  _iterator.e(_context2.t6);

                case 37:
                  _context2.prev = 37;

                  _iterator.f();

                  return _context2.finish(37);

                case 40:
                  return _context2.abrupt("return", uniq(modsToReload));

                case 41:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, null, [[2, 34, 37, 40], [16, 27]]);
        }));

        return function (_x2, _x3, _x4) {
          return _ref2.apply(this, arguments);
        };
      }(), __moduleMeta__);

      __varRecorder__.shallowReloadModulesIfNeeded = shallowReloadModulesIfNeeded;

      var bootstrapLivelySystem = __varRecorder__["lively.freezer/src/util/bootstrap.js__define__"]("bootstrapLivelySystem", "function", function (progress) {
        var fastLoad = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : __varRecorder__.query.fastLoad !== false || window.FORCE_FAST_LOAD;
        lively.wasFastLoaded = fastLoad;
        return Promise.resolve().then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          var timeToLoadBundle;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  if (!fastLoad) {
                    _context3.next = 11;
                    break;
                  }

                  _context3.t0 = promise;
                  _context3.next = 4;
                  return __varRecorder__.fastLoadPackages(progress);

                case 4:
                  _context3.t1 = _context3.sent;
                  _context3.next = 7;
                  return _context3.t0.timeToRun.call(_context3.t0, _context3.t1);

                case 7:
                  timeToLoadBundle = _context3.sent;

                  __varRecorder__.logInfo("Loading bundles:", timeToLoadBundle + "ms");

                  _context3.next = 19;
                  break;

                case 11:
                  _context3.t2 = exports$1$1;
                  _context3.next = 14;
                  return resource(__varRecorder__.baseURL).join("compressed-sources").beBinary(true).read();

                case 14:
                  _context3.t3 = _context3.sent;
                  _context3.next = 17;
                  return (0, _context3.t2)(_context3.t3);

                case 17:
                  lively.memory_esm = _context3.sent;
                  lively.memory_esm = new Map(lively.memory_esm.map(function (ea) {
                    return [ea.name, ea];
                  }));

                case 19:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }))).then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
          var ts, oldSystem, initBaseURL, packageCached, migratedMeta, System, mod, realignedId, m;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  ts = Date.now();
                  oldSystem = lively.FreezerRuntime.oldSystem = window.System;
                  initBaseURL = oldSystem.baseURL;

                  if (initBaseURL.endsWith("/")) {
                    initBaseURL = initBaseURL.slice(0, -1);
                  }

                  _context4.next = 6;
                  return resource(__varRecorder__.baseURL).join("package-registry.json").readJson();

                case 6:
                  packageCached = _context4.sent;
                  _context4.next = 9;
                  return loadViaScript(resource(__varRecorder__.baseURL).join("/lively.next-node_modules/@babel/standalone/babel.js").url);

                case 9:
                  migratedMeta = Object.assign({}, oldSystem.meta);
                  System = lively.modules.getSystem("bootstrapped", {
                    baseURL: __varRecorder__.baseURL,
                    meta: migratedMeta
                  });
                  $world.env.uninstallSystemChangeHandlers();
                  lively.modules.changeSystem(System, true);
                  $world.env.installSystemChangeHandlers();
                  _context4.next = 16;
                  return loadViaScript(resource(__varRecorder__.baseURL).join("/lively.modules/systemjs-init.js").url);

                case 16:
                  installLinter(System);

                  __varRecorder__.logInfo("Setup SystemJS:", Date.now() - ts + "ms");

                  ts = Date.now();
                  System["__lively.modules__packageRegistry"] = lively.modules.PackageRegistry.fromJSON(System, packageCached);

                  for (mod in __varRecorder__.extractedModules) {
                    realignedId = mod.replace(initBaseURL, __varRecorder__.baseURL);
                    System.set(realignedId, System.newModule(__varRecorder__.extractedModules[mod]));
                    m = lively.modules.module(realignedId);
                    m._recorder = __varRecorder__.extractedModules[mod];
                    m._frozenModule = true;
                  }

                  oldSystem.config({
                    baseURL: __varRecorder__.baseURL
                  });

                  __varRecorder__.installFetchHook();

                  __varRecorder__.logInfo("Load package info:", Date.now() - ts + "ms");

                case 24:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }))).then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  if (fastLoad) {
                    _context5.next = 12;
                    break;
                  }

                  _context5.next = 3;
                  return __varRecorder__.importPackageAndDo("lively.lang", function (m) {
                    progress === null || progress === void 0 ? void 0 : progress.finishPackage({
                      packageName: "lively.lang",
                      loaded: true
                    });
                    delete m._prevLivelyGlobal;
                  });

                case 3:
                  if (progress) progress.opacity = 1;
                  _context5.next = 6;
                  return __varRecorder__.importPackageAndDo("lively.ast", function (m) {
                    progress === null || progress === void 0 ? void 0 : progress.finishPackage({
                      packageName: "lively.ast",
                      loaded: true
                    });
                    lively.ast = m;
                  });

                case 6:
                  _context5.next = 8;
                  return __varRecorder__.importPackageAndDo("lively.source-transform", function (m) {
                    progress === null || progress === void 0 ? void 0 : progress.finishPackage({
                      packageName: "lively.source-transform",
                      loaded: true
                    });
                    lively.sourceTransform = m;
                  });

                case 8:
                  _context5.next = 10;
                  return __varRecorder__.importPackageAndDo("lively.classes", function (m) {
                    progress === null || progress === void 0 ? void 0 : progress.finishPackage({
                      packageName: "lively.classes",
                      loaded: true
                    });
                    lively.classes = m;
                  });

                case 10:
                  _context5.next = 12;
                  return __varRecorder__.importPackageAndDo("lively.vm", function (m) {
                    progress === null || progress === void 0 ? void 0 : progress.finishPackage({
                      packageName: "lively.vm",
                      loaded: true
                    });
                    lively.vm = m;
                  });

                case 12:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }))).then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
          var afterImport, ts, modsToReload, currMod, newSystem, R, moduleHashes;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  afterImport = function _afterImport(m) {
                    lively.modules = m;
                    lively.modules.unwrapModuleResolution();
                    lively.modules.wrapModuleResolution();

                    __varRecorder__.installFetchHook();

                    var oldRegistry = System["__lively.modules__packageRegistry"];
                    delete System["__lively.modules__packageRegistry"];
                    var newRegistry = System["__lively.modules__packageRegistry"] = m.PackageRegistry.ofSystem(System);
                    Object.assign(newRegistry, select(oldRegistry, ["packageMap", "individualPackageDirs", "devPackageDirs", "packageBaseDirs"]));
                    newRegistry.resetByURL();
                    var loadedPackages = newRegistry.allPackages();
                    var instrumentedPackageClass = lively.modules.module("lively.modules/src/packages/package.js").recorder.Package;
                    loadedPackages.filter(function (pkg) {
                      var _pkg$constructor$Symb;

                      return !((_pkg$constructor$Symb = pkg.constructor[Symbol["for"]("lively-object-meta")]) === null || _pkg$constructor$Symb === void 0 ? void 0 : _pkg$constructor$Symb.moduleSource);
                    }).forEach(function (pkg) {
                      adoptObject(pkg, instrumentedPackageClass);
                    });
                    var loadedModules = Object.values(System["__lively.modules__loadedModules"]);
                    var instrumentedModuleInterface = lively.modules.module("lively.modules/src/module.js").recorder.ModuleInterface;
                    loadedModules.filter(function (mod) {
                      var _mod$constructor$Symb;

                      return !((_mod$constructor$Symb = mod.constructor[Symbol["for"]("lively-object-meta")]) === null || _mod$constructor$Symb === void 0 ? void 0 : _mod$constructor$Symb.moduleSource);
                    }).forEach(function (mod) {
                      adoptObject(mod, instrumentedModuleInterface);
                    });
                  };

                  ts = Date.now();
                  modsToReload = [];

                  if (!fastLoad) {
                    _context7.next = 23;
                    break;
                  }

                  System._scripting = lively.modules.scripting;

                  if (!fastLoad) {
                    _context7.next = 21;
                    break;
                  }

                  newSystem = System;
                  newSystem.loads = {};
                  currMod = lively.modules.module("lively.modules");
                  _context7.t0 = modsToReload.push;
                  _context7.t1 = modsToReload;
                  _context7.t2 = _toConsumableArray;
                  _context7.next = 14;
                  return currMod.revive(false);

                case 14:
                  _context7.t3 = _context7.sent;
                  _context7.t4 = (0, _context7.t2)(_context7.t3);

                  _context7.t0.apply.call(_context7.t0, _context7.t1, _context7.t4);

                  _context7.next = 19;
                  return newSystem["import"]("lively.modules");

                case 19:
                  _context7.t5 = newSystem;

                  _context7.sent.changeSystem(_context7.t5, true);

                case 21:
                  _context7.next = 26;
                  break;

                case 23:
                  _context7.next = 25;
                  return __varRecorder__.importPackageAndDo("lively.modules", afterImport);

                case 25:
                  progress === null || progress === void 0 ? void 0 : progress.finishPackage({
                    packageName: "lively.modules",
                    loaded: true
                  });

                case 26:
                  __varRecorder__.logInfo("Loaded module system:", Date.now() - ts + "ms");

                  R = lively.FreezerRuntime;
                  _context7.next = 30;
                  return resource(System.baseURL).join("__JS_FILE_HASHES__").readJson();

                case 30:
                  moduleHashes = _context7.sent;

                  if (!fastLoad) {
                    _context7.next = 41;
                    break;
                  }

                  ts = Date.now();
                  _context7.t6 = modsToReload.push;
                  _context7.t7 = modsToReload;
                  _context7.t8 = _toConsumableArray;
                  _context7.next = 38;
                  return __varRecorder__.shallowReloadModulesIfNeeded(keys(R.registry), moduleHashes, R);

                case 38:
                  _context7.t9 = _context7.sent;
                  _context7.t10 = (0, _context7.t8)(_context7.t9);

                  _context7.t6.apply.call(_context7.t6, _context7.t7, _context7.t10);

                case 41:
                  if (modsToReload.length > 0) {
                    updateBundledModules(System, uniq(modsToReload)).then(function () {
                      __varRecorder__.logInfo("Revived changed modules:", Date.now() - ts + "ms");
                    }).then(function () {
                      var S = R.oldSystem;
                      install(S, "import", /*#__PURE__*/function () {
                        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(proceed, args) {
                          var keysBefore, mod, keysAfter, modulesToUpdate, _iterator2, _step2, _mod, m;

                          return regeneratorRuntime.wrap(function _callee6$(_context6) {
                            while (1) {
                              switch (_context6.prev = _context6.next) {
                                case 0:
                                  keysBefore = keys(R.registry);
                                  _context6.next = 4;
                                  return proceed(args);

                                case 4:
                                  mod = _context6.sent;
                                  keysAfter = keys(R.registry);

                                  if (!(keysBefore.length < keysAfter.length)) {
                                    _context6.next = 16;
                                    break;
                                  }

                                  modulesToUpdate = withoutAll(keysAfter, keysBefore).filter(function (id) {
                                    return !id.startsWith("esm://");
                                  });
                                  _iterator2 = _createForOfIteratorHelper(modulesToUpdate);

                                  try {
                                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                                      _mod = _step2.value;
                                      System.set(System.decanonicalize(_mod), System.newModule(R.exportsOf(_mod)));
                                      m = lively.modules.module(_mod);
                                      m._recorder = R.registry[_mod].recorder;
                                      m._frozenModule = true;
                                    }
                                  } catch (err) {
                                    _iterator2.e(err);
                                  } finally {
                                    _iterator2.f();
                                  }

                                  _context6.t0 = updateBundledModules;
                                  _context6.t1 = S;
                                  _context6.next = 14;
                                  return __varRecorder__.shallowReloadModulesIfNeeded(modulesToUpdate, moduleHashes, R);

                                case 14:
                                  _context6.t2 = _context6.sent;
                                  (0, _context6.t0)(_context6.t1, _context6.t2);

                                case 16:
                                  return _context6.abrupt("return", mod);

                                case 17:
                                case "end":
                                  return _context6.stop();
                              }
                            }
                          }, _callee6);
                        }));

                        return function (_x5, _x6) {
                          return _ref7.apply(this, arguments);
                        };
                      }());
                    });
                  }

                case 42:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }))).then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  if (fastLoad) {
                    _context8.next = 2;
                    break;
                  }

                  return _context8.abrupt("return", __varRecorder__.importPackageAndDo("lively.storage", function (m) {
                    progress === null || progress === void 0 ? void 0 : progress.finishPackage({
                      packageName: "lively.storage",
                      loaded: true
                    });
                    lively.storage = m;
                  }));

                case 2:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8);
        })));
      }, __moduleMeta__);

      __varRecorder__.bootstrapLivelySystem = bootstrapLivelySystem;

      var fastPrepLivelySystem = __varRecorder__["lively.freezer/src/util/bootstrap.js__define__"]("fastPrepLivelySystem", "function", function () {
        return Promise.resolve().then(function () {
          return resource(System.baseURL).join("package-registry.json").readJson();
        }).then(function (packageCached) {
          System["__lively.modules__packageRegistry"] = lively.modules.PackageRegistry.fromJSON(System, packageCached);
          return System;
        });
      }, __moduleMeta__);

      __varRecorder__.fastPrepLivelySystem = fastPrepLivelySystem;

      var bootstrap = exports('bootstrap', __varRecorder__["lively.freezer/src/util/bootstrap.js__define__"]("bootstrap", "function", /*#__PURE__*/function () {
        var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(_ref9) {
          var filePath, worldName, projectName, snapshot, commit, progress, _ref9$fastLoad, fastLoad, _ref9$logError, logError, oldEnv, morphic, landingPageUrl, opts, World, loadMorphFromSnapshot, loadWorld, m, w, LivelyWorld, _loadWorld, path, printed;

          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  filePath = _ref9.filePath, worldName = _ref9.worldName, projectName = _ref9.projectName, snapshot = _ref9.snapshot, commit = _ref9.commit, progress = _ref9.progress, _ref9$fastLoad = _ref9.fastLoad, fastLoad = _ref9$fastLoad === void 0 ? __varRecorder__.query.fastLoad !== false || window.FORCE_FAST_LOAD : _ref9$fastLoad, _ref9$logError = _ref9.logError, logError = _ref9$logError === void 0 ? function (err) {
                    return console.log(err);
                  } : _ref9$logError;
                  _context10.prev = 1;
                  _context10.next = 4;
                  return __varRecorder__.polyfills();

                case 4:
                  oldEnv = $world.env;

                  if (!__varRecorder__.doBootstrap) {
                    _context10.next = 10;
                    break;
                  }

                  _context10.next = 8;
                  return __varRecorder__.bootstrapLivelySystem(progress, fastLoad);

                case 8:
                  _context10.next = 12;
                  break;

                case 10:
                  _context10.next = 12;
                  return __varRecorder__.fastPrepLivelySystem();

                case 12:
                  if (projectName && projectName !== "__newProject__") {
                    if (!lively.isInOfflineMode) {
                      Project.fetchInfoPreflight(projectName);
                    }
                  }

                  _context10.next = 15;
                  return lively.modules.registerPackage("lively.2lively");

                case 15:
                  if (__varRecorder__.askBeforeQuit) {
                    window.addEventListener("beforeunload", function (evt) {
                      var msg = "Really?";
                      evt.returnValue = msg;
                      return msg;
                    }, true);
                  }

                  if (fastLoad) {
                    _context10.next = 23;
                    break;
                  }

                  _context10.next = 19;
                  return lively.modules.importPackage("lively.morphic");

                case 19:
                  morphic = _context10.sent;
                  progress === null || progress === void 0 ? void 0 : progress.finishPackage({
                    packageName: "lively.morphic",
                    loaded: true
                  });
                  _context10.next = 24;
                  break;

                case 23:
                  morphic = lively.morphic;

                case 24:
                  window.onresize = null;

                  if (lively.isResurrectionBuild) {
                    lively.frozenModules = lively.FreezerRuntime;
                  }

                  lively.FreezerRuntime = false;
                  landingPageUrl = document.location;
                  _context10.prev = 28;
                  opts = {
                    root: $world.env.renderer.bodyNode,
                    verbose: true,
                    localconfig: true,
                    l2l: true,
                    shell: true,
                    moduleManager: lively.modules,
                    onRenderStart: function () {
                      var _onRenderStart = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                        var bg, fader;
                        return regeneratorRuntime.wrap(function _callee9$(_context9) {
                          while (1) {
                            switch (_context9.prev = _context9.next) {
                              case 0:
                                document.body.style.background = "black";
                                _context9.next = 3;
                                return eval("System.import('lively.freezer/src/loading-screen.cp.js')");

                              case 3:
                                _context9.next = 5;
                                return eval("System.import('lively.freezer/src/landing-page.cp.js')");

                              case 5:
                                $world.opacity = 1;

                                if (fastLoad) {
                                  _context9.next = 15;
                                  break;
                                }

                                progress === null || progress === void 0 ? void 0 : progress.finishPackage({
                                  packageName: "world",
                                  loaded: true
                                });
                                if (progress) progress.opacity = 0;
                                oldEnv.renderer.worldMorph.opacity = 0;
                                oldEnv.renderer.renderStep();
                                _context9.next = 13;
                                return oldEnv.renderer.clear();

                              case 13:
                                oldEnv.fontMetric.uninstall();
                                oldEnv.eventDispatcher.uninstall();

                              case 15:
                                bg = $world.addMorph(progress.get("background").copy());
                                bg.fit();
                                fader = bg.addMorph({
                                  fill: Color.black,
                                  opacity: 0,
                                  extent: bg.extent
                                });
                                _context9.next = 20;
                                return fader.animate({
                                  opacity: 1,
                                  duration: 500
                                });

                              case 20:
                                $world.initializeStudio();
                                bg.hasFixedPosition = true;
                                bg.bringToFront();
                                bg.fadeOut();

                              case 24:
                              case "end":
                                return _context9.stop();
                            }
                          }
                        }, _callee9);
                      }));

                      function onRenderStart() {
                        return _onRenderStart.apply(this, arguments);
                      }

                      return onRenderStart;
                    }()
                  };

                  if (!snapshot) {
                    _context10.next = 61;
                    break;
                  }

                  if (!snapshot.startsWith("http")) snapshot = resource(System.baseURL).join(snapshot).url;
                  _context10.next = 34;
                  return lively.modules.module("lively.morphic/world.js").recorder;

                case 34:
                  __varRecorder__.__inter0__ = _context10.sent;
                  World = __varRecorder__.__inter0__.World;
                  __varRecorder__.__inter0__;
                  _context10.next = 39;
                  return lively.modules.module("lively.morphic/world-loading.js").recorder;

                case 39:
                  __varRecorder__.__inter1__ = _context10.sent;
                  loadWorld = __varRecorder__.__inter1__.loadWorld;
                  __varRecorder__.__inter1__;
                  _context10.next = 44;
                  return lively.modules.module("lively.morphic/serialization.js").recorder;

                case 44:
                  __varRecorder__.__inter2__ = _context10.sent;
                  loadMorphFromSnapshot = __varRecorder__.__inter2__.loadMorphFromSnapshot;
                  __varRecorder__.__inter2__;
                  _context10.t0 = loadMorphFromSnapshot;
                  _context10.next = 50;
                  return resource(snapshot).readJson();

                case 50:
                  _context10.t1 = _context10.sent;
                  _context10.next = 53;
                  return (0, _context10.t0)(_context10.t1);

                case 53:
                  m = _context10.sent;
                  _context10.next = 56;
                  return loadWorld(new World({
                    askForName: false,
                    extent: $world.extent
                  }), undefined, opts);

                case 56:
                  w = _context10.sent;
                  w.addMorph(m);
                  w.onWindowResize();
                  _context10.next = 113;
                  break;

                case 61:
                  if (!commit) {
                    _context10.next = 66;
                    break;
                  }

                  _context10.next = 64;
                  return morphic.World.loadFromCommit(commit, undefined, Object.assign({}, opts, {
                    browserURL: "/worlds/load?name=" + commit.name
                  }));

                case 64:
                  _context10.next = 113;
                  break;

                case 66:
                  if (!(worldName || projectName)) {
                    _context10.next = 109;
                    break;
                  }

                  if (!(worldName === "__newWorld__" || projectName)) {
                    _context10.next = 105;
                    break;
                  }

                  if (!fastLoad) {
                    _context10.next = 81;
                    break;
                  }

                  _context10.next = 71;
                  return lively.modules.module("lively.ide/world.js").recorder;

                case 71:
                  __varRecorder__.__inter3__ = _context10.sent;
                  LivelyWorld = __varRecorder__.__inter3__.LivelyWorld;
                  __varRecorder__.__inter3__;
                  _context10.next = 76;
                  return lively.modules.module("lively.morphic/world-loading.js").recorder;

                case 76:
                  __varRecorder__.__inter4__ = _context10.sent;
                  _loadWorld = __varRecorder__.__inter4__.loadWorld;
                  __varRecorder__.__inter4__;
                  _context10.next = 91;
                  break;

                case 81:
                  _context10.next = 83;
                  return lively.modules.System["import"]("lively.ide/world.js");

                case 83:
                  __varRecorder__.__inter5__ = _context10.sent;
                  LivelyWorld = __varRecorder__.__inter5__.LivelyWorld;
                  __varRecorder__.__inter5__;
                  _context10.next = 88;
                  return lively.modules.System["import"]("lively.morphic/world-loading.js");

                case 88:
                  __varRecorder__.__inter6__ = _context10.sent;
                  _loadWorld = __varRecorder__.__inter6__.loadWorld;
                  __varRecorder__.__inter6__;

                case 91:
                  if (!worldName) {
                    _context10.next = 96;
                    break;
                  }

                  _context10.next = 94;
                  return _loadWorld(new LivelyWorld({
                    openNewWorldPrompt: true
                  }), undefined, opts);

                case 94:
                  _context10.next = 103;
                  break;

                case 96:
                  if (!(projectName === "__newProject__")) {
                    _context10.next = 101;
                    break;
                  }

                  _context10.next = 99;
                  return _loadWorld(new LivelyWorld({
                    openNewProjectPrompt: true
                  }), undefined, opts);

                case 99:
                  _context10.next = 103;
                  break;

                case 101:
                  _context10.next = 103;
                  return _loadWorld(new LivelyWorld({
                    projectToBeOpened: projectName
                  }), undefined, opts);

                case 103:
                  _context10.next = 107;
                  break;

                case 105:
                  _context10.next = 107;
                  return morphic.World.loadFromDB(worldName, undefined, undefined, Object.assign({}, opts, {
                    browserURL: "/worlds/load?name=" + worldName.replace(/\.json($|\?)/, "")
                  }));

                case 107:
                  _context10.next = 113;
                  break;

                case 109:
                  if (!filePath) {
                    _context10.next = 113;
                    break;
                  }

                  _context10.next = 112;
                  return morphic.World.loadFromResource(resource(System.baseURL).join(filePath), undefined, Object.assign({}, opts, {
                    browserURL: "/worlds/load?file=" + filePath
                  }));

                case 112:
                  if (window.history) {
                    path = pathForBrowserHistory(filePath).replaceAll("%2F", "/");
                    window.history.pushState({}, "lively.next", path);
                  }

                case 113:
                  _context10.next = 118;
                  break;

                case 115:
                  _context10.prev = 115;
                  _context10.t2 = _context10["catch"](28);
                  window.__loadError__ = _context10.t2;

                case 118:
                  window.addEventListener("popstate", function (event) {
                    if (document.location === landingPageUrl) {
                      document.location.reload();
                    }
                  });
                  _context10.next = 128;
                  break;

                case 121:
                  _context10.prev = 121;
                  _context10.t3 = _context10["catch"](1);
                  if (_context10.t3.originalErr) _context10.t3 = _context10.t3.originalErr;
                  printed = _context10.t3.message;

                  if (_context10.t3.stack !== _context10.t3.message) {
                    printed += _context10.t3.stack.includes(_context10.t3.message) ? _context10.t3.stack.replace(_context10.t3.message, "\n") : _context10.t3.stack;
                  }

                  logError(printed);
                  throw _context10.t3;

                case 128:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10, null, [[1, 121], [28, 115]]);
        }));

        return function (_x7) {
          return _ref10.apply(this, arguments);
        };
      }(), __moduleMeta__));

      __varRecorder__.bootstrap = bootstrap;

      if (exports$1$2.safari) {
        var r = document.querySelector(":root");
        r.style.setProperty("--annotation-spacing", "0%");
      }

      lively.modules = modules;
      Object.defineProperty(lively, "isInOfflineMode", {
        configurable: true,
        get: function get() {
          var item = localStorage.getItem("LIVELY_OFFLINE_MODE");
          return item == true;
        }
      });
      __varRecorder__.doBootstrap = true;
      __varRecorder__.askBeforeQuit = true;
      __varRecorder__.loc = document.location;
      __varRecorder__.query = resource(__varRecorder__.loc.href).query();
      __varRecorder__.extractedModules = {};
      __varRecorder__.baseURL = window.SYSTEM_BASE_URL || document.location.origin;
      __varRecorder__.bootstrap = bootstrap;

    })
  };
}));
