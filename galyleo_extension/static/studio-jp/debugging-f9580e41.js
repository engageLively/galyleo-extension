System.register(['./__rootModule___commonjs-entry-43c0966d.js'], (function (exports) {
  var __contextModule__ = typeof module !== 'undefined' ? module : arguments[1];
;
  var initializeClass, ObjectPool, ClassHelper, sortBy, _toConsumableArray, humanReadableByteSize, truncate, printTable, format, _slicedToArray, findPathFromToId, referenceGraph, invert, lookupPath, modifyProperty, _createForOfIteratorHelper, removeUnreachableObjects, indent;
  return {
    setters: [function (module) {
      initializeClass = module.i;
      ObjectPool = module.dX;
      ClassHelper = module.dY;
      sortBy = module.aP;
      _toConsumableArray = module.r;
      humanReadableByteSize = module.b2;
      truncate = module.aj;
      printTable = module.ct;
      format = module.cO;
      _slicedToArray = module.o;
      findPathFromToId = module.dZ;
      referenceGraph = module.d_;
      invert = module.aw;
      lookupPath = module.d$;
      modifyProperty = module.e0;
      _createForOfIteratorHelper = module.a6;
      removeUnreachableObjects = module.cK;
      indent = module.ck;
    }],
    execute: (function () {

      var __varRecorder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.serializer2/debugging.js", __contextModule__);
      var SnapshotInspector = exports('SnapshotInspector', function (superclass) {
        var __lively_classholder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.serializer2/debugging.js", __contextModule__);

        var __lively_class__ = __lively_classholder__.hasOwnProperty("SnapshotInspector") && typeof __lively_classholder__.SnapshotInspector === "function" ? __lively_classholder__.SnapshotInspector : __lively_classholder__.SnapshotInspector = function SnapshotInspector(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        if (Object.isFrozen(__lively_classholder__)) {
          return __lively_class__;
        }

        return initializeClass(__lively_class__, superclass, [{
          key: Symbol["for"]("lively-instance-initialize"),
          value: function SnapshotInspector_initialize_(snapshot) {
            this.snapshot = snapshot;
            this.classes = {};
            this.expressions = {};
          }
        }, {
          key: "processSnapshot",
          value: function SnapshotInspector_processSnapshot_() {
            var snapshot = this.snapshot;
            if (snapshot.snapshot) snapshot = snapshot.snapshot;
            var pool = ObjectPool.fromSnapshot(snapshot);
            return this.processPool(pool);
          }
        }, {
          key: "processPool",
          value: function SnapshotInspector_processPool_(pool) {
            var expressions = this.expressions,
                classes = this.classes;
            this.pool = pool;
            pool.objectRefs().forEach(function (ref) {
              var snap = ref.currentSnapshot;

              var _ref = snap[ClassHelper.classMetaForSerializationProp] || {},
                  className = _ref.className;

              var propNames = Object.keys(snap.props);

              if (className == null) {
                if (propNames.length > 3) className = "{" + propNames.slice(0, 3).join(", ") + ", ...}";else className = "{" + propNames.join(", ") + "}";
              }

              if (!classes[className]) {
                classes[className] = {
                  count: 0,
                  bytes: 0,
                  name: className,
                  objects: []
                };
              }

              classes[className].count++;
              classes[className].bytes += JSON.stringify(snap).length;
              classes[className].objects.push([ref.id, snap]);
              propNames.forEach(function (key) {
                var value = snap.props[key].value;
                if (!value || typeof value !== "string" || !pool.expressionSerializer.isSerializedExpression(value)) return;

                var _pool$expressionSeria = pool.expressionSerializer.exprStringDecode(value),
                    __expr__ = _pool$expressionSeria.__expr__;

                var expr = expressions[__expr__];

                if (!expr) {
                  expr = expressions[__expr__] = {
                    count: 0,
                    bytes: 0,
                    name: __expr__,
                    objects: []
                  };
                }

                expr.count++;
                expr.bytes += value.length;
                expr.objects.push([[ref.id, key], value]);
              });
            });
            return this;
          }
        }, {
          key: "explainId",
          value: function SnapshotInspector_explainId_(id) {
            var s = this.snapshot;
            if (s.snapshot) s = s.snapshot;
            var ref = s[id];
            if (!ref) return null;

            var _ref2 = ref[ClassHelper.classMetaForSerializationProp] || {
              className: "Object"
            },
                className = _ref2.className;

            var propNames = Object.keys(ref.props);

            if (className == "Object") {
              if (propNames.length > 3) className = "{" + propNames.slice(0, 3).join(", ") + ", ...}";else className = "{" + propNames.join(", ") + "}";
            }

            return className;
          }
        }, {
          key: "sorted",
          value: function SnapshotInspector_sorted_(prop) {
            var _this = this;

            return sortBy(Object.keys(this[prop]).map(function (key) {
              return _this[prop][key];
            }), function (tuple) {
              return isNaN(tuple.bytes) ? 0 : tuple.bytes;
            }).reverse();
          }
        }, {
          key: "report",
          value: function SnapshotInspector_report_(prop) {
            var items = [["#bytes", "#objs", "avg", prop]].concat(_toConsumableArray(this.sorted(prop).map(function (tuple) {
              return [humanReadableByteSize(tuple.bytes), tuple.count, humanReadableByteSize(tuple.bytes / tuple.count), truncate(tuple.name, 300)];
            })));
            return printTable(items, {
              separator: " | "
            });
          }
        }, {
          key: "toString",
          value: function SnapshotInspector_toString_() {
            var snapshot = this.snapshot;
            var bytesAltogether = JSON.stringify(snapshot).length;
            var objCount = Object.keys(snapshot).length;
            return format("Total: %s (%s objs - %s per obj)", humanReadableByteSize(bytesAltogether), objCount, humanReadableByteSize(bytesAltogether / objCount)) + "\nclasses:\n" + this.report("classes") + "\nexpressions:\n" + this.report("expressions");
          }
        }, {
          key: "biggestObjectsOfType",
          value: function SnapshotInspector_biggestObjectsOfType_(typeString) {
            return sortBy(this.classes[typeString].objects.map(function (_ref3) {
              var _ref4 = _slicedToArray(_ref3, 2);
                  _ref4[0];
                  var obj = _ref4[1];

              return JSON.stringify(obj);
            }), function (ea) {
              return ea.length;
            }).reverse().map(function (ea) {
              return JSON.parse(ea);
            });
          }
        }, {
          key: "toCSV",
          value: function SnapshotInspector_toCSV_() {
            var lines = ["type,size,size in bytes,count,size per object,size perobject in bytes"];
            this.sorted("classes").forEach(function (tuple) {
              lines.push([tuple.name, humanReadableByteSize(tuple.bytes), tuple.bytes, tuple.count, humanReadableByteSize(tuple.bytes / tuple.count), tuple.bytes / tuple.count].join(","));
            });
            return lines.join("\n");
          }
        }, {
          key: "findPathFromToId",
          value: function SnapshotInspector_findPathFromToId_(fromId, toId) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var s = this.snapshot;
            if (s.snapshot) s = s.snapshot;
            return findPathFromToId(s, fromId, toId, options);
          }
        }, {
          key: "referenceGraph",
          value: function SnapshotInspector_referenceGraph_() {
            var s = this.snapshot;
            if (s.snapshot) s = s.snapshot;
            return referenceGraph(s);
          }
        }, {
          key: "referenceCounts",
          value: function SnapshotInspector_referenceCounts_() {
            var invertedG = invert(this.referenceGraph());
            var counts = {};
            Object.keys(invertedG).forEach(function (key) {
              return counts[key] = invertedG[key].length;
            });
            return counts;
          }
        }, {
          key: "lookupPath",
          value: function SnapshotInspector_lookupPath_(fromId, path) {
            var s = this.snapshot;
            if (s.snapshot) s = s.snapshot;
            return lookupPath(s, fromId, path);
          }
        }, {
          key: "idsReferencingId",
          value: function SnapshotInspector_idsReferencingId_(id) {
            return invert(this.referenceGraph())[id];
          }
        }, {
          key: "modifyProperty",
          value: function SnapshotInspector_modifyProperty_(objId, pathToProperty, modifyFn) {
            var snapshot = this.snapshot;
            if (snapshot.snapshot) snapshot = snapshot.snapshot;
            return modifyProperty(snapshot, objId, pathToProperty, modifyFn);
          }
        }, {
          key: "replaceReferencesTo",
          value: function SnapshotInspector_replaceReferencesTo_(id, replaceFn) {
            var refs = invert(this.referenceGraph())[id];

            var _iterator = _createForOfIteratorHelper(refs),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var refId = _step.value;
                var localPath = this.findPathFromToId(refId, id);
                this.modifyProperty(refId, localPath, replaceFn);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "removeUnreachableObjects",
          value: function SnapshotInspector_removeUnreachableObjects_(rootId) {
            var snapshot = this.snapshot;
            if (!rootId) rootId = this.snapshot.id;
            if (!rootId) throw new Error("Cannot find root id");
            if (snapshot.snapshot) snapshot = snapshot.snapshot;
            return removeUnreachableObjects([rootId], snapshot);
          }
        }, {
          key: "reportAboutObject",
          value: function SnapshotInspector_reportAboutObject_(id, refs, invertedRefs) {
            var _this2 = this;

            refs = refs || this.referenceGraph();
            invertedRefs = invertedRefs || invert(refs);
            var refsTo = (invertedRefs[id] || []).map(function (refId) {
              return [refId, _this2.findPathFromToId(refId, id), _this2.explainId(refId)];
            });
            var refsFrom = (refs[id] || []).map(function (refId) {
              return [refId, _this2.findPathFromToId(id, refId), _this2.explainId(refId)];
            });
            return "".concat(id, "\n") + " is a ".concat(this.explainId(id), " object\n") + " path from root: ".concat(this.findPathFromToId(this.snapshot.id, id), "\n") + " references \n".concat(indent(printTable(refsFrom), "  ", 2), "\n") + " referenced by:\n".concat(indent(printTable(refsTo), "  ", 2), "\n");
          }
        }, {
          key: "reportAboutObjects",
          value: function SnapshotInspector_reportAboutObjects_(ids) {
            var _this3 = this;

            var refs = this.referenceGraph();
            var invertedRefs = invert(refs);
            return ids.map(function (id) {
              return _this3.reportAboutObject(id, refs, invertedRefs);
            }).join("\n");
          }
        }, {
          key: "rootObjectName",
          value: function SnapshotInspector_rootObjectName_() {
            var snapshot = this.snapshot;
            var name = "";

            if (snapshot.snapshot) {
              var _snapshot = snapshot,
                  id = _snapshot.id,
                  snapshot = _snapshot.snapshot;

              if (snapshot[id].props.name) {
                name = snapshot[id].props.name.value;
              }
            }

            return name;
          }
        }, {
          key: "openSummary",
          value: function SnapshotInspector_openSummary_() {
            var name = this.rootObjectName();
            return $world.execCommand("open text window", {
              content: this.toString(),
              title: "serialization debug" + (name ? " for " + name : ""),
              fontFamily: "IBM Plex Mono"
            });
          }
        }, {
          key: "openConnectionsList",
          value: function SnapshotInspector_openConnectionsList_() {
            var _this4 = this;

            var name = this.rootObjectName();
            var conns = (this.classes.AttributeConnection || {}).objects || [];
            var report = conns.map(function (c) {
              var _c = _slicedToArray(c, 2),
                  connId = _c[0],
                  _c$1$props = _c[1].props,
                  sourceObj = _c$1$props.sourceObj,
                  sourceAttrName = _c$1$props.sourceAttrName,
                  targetObj = _c$1$props.targetObj,
                  targetMethodName = _c$1$props.targetMethodName;

              return "".concat(_this4.explainId(sourceObj.value.id), ".").concat(sourceAttrName.value, " => ") + "".concat(_this4.explainId(targetObj.value.id), ".").concat(targetMethodName.value, "\n") + "  ".concat(sourceObj.value.id, " => ").concat(targetObj.value.id, "\n") + "  connection id: ".concat(connId, "\n");
            }).join("\n");
            return $world.execCommand("open text window", {
              content: report,
              title: "serialized connections" + (name ? " for " + name : ""),
              fontFamily: "IBM Plex Mono"
            });
          }
        }, {
          key: "openObjectReport",
          value: function SnapshotInspector_openObjectReport_() {
            var snapshot = this.snapshot;
            var name = this.rootObjectName();
            if (snapshot.snapshot) snapshot = snapshot.snapshot;
            $world.execCommand("open text window", {
              title: "object report" + (name ? " for " + name : ""),
              content: this.reportAboutObjects(Object.keys(snapshot)),
              fontFamily: "IBM Plex Mono"
            });
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "SnapshotInspector";
          }
        }, {
          key: "forSnapshot",
          value: function SnapshotInspector_forSnapshot_(snapshot) {
            return new this(snapshot).processSnapshot();
          }
        }, {
          key: "forPoolAndSnapshot",
          value: function SnapshotInspector_forPoolAndSnapshot_(snapshot, pool) {
            return new this(snapshot).processPool(pool);
          }
        }, {
          key: "checkForLeaks",
          value: function SnapshotInspector_checkForLeaks_(pool) {
            var inspector = new this().processPool(pool);
            inspector.referenceCounts();
            (this.classes.AttributeConnection || {}).objects || [];
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./debugging.js";
          },
          unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
            return function () {};
          },
          subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
            return function () {};
          },
          "package": function _package() {
            return {
              name: "lively.serializer2",
              version: "0.1.3"
            };
          }
        }, {
          start: 3308,
          end: 12060
        });
      }(undefined));
      __varRecorder__.SnapshotInspector = SnapshotInspector;
      __varRecorder__.SnapshotInspector = SnapshotInspector;

    })
  };
}));
