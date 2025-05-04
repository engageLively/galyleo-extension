System.register(['./__rootModule___commonjs-entry-039abf1b.js'], (function (exports) {
  var __contextModule__ = typeof module !== 'undefined' ? module : arguments[1];
;
  var initializeClass, ViewModel, component, TilingLayout, rect, pt, Color, _asyncToGenerator;
  return {
    setters: [function (module) {
      initializeClass = module.i;
      ViewModel = module.V;
      component = module.c;
      TilingLayout = module.T;
      rect = module.ap;
      pt = module.b;
      Color = module.C;
      _asyncToGenerator = module._;
    }],
    execute: (function () {

      var __varRecorder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/studio/flap.cp.js", __contextModule__);
      var FlapModel = exports('FlapModel', function (superclass) {
        var __lively_classholder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/studio/flap.cp.js", __contextModule__);

        var __lively_class__ = __lively_classholder__.hasOwnProperty("FlapModel") && typeof __lively_classholder__.FlapModel === "function" ? __lively_classholder__.FlapModel : __lively_classholder__.FlapModel = function FlapModel(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        if (Object.isFrozen(__lively_classholder__)) {
          return __lively_class__;
        }

        return initializeClass(__lively_class__, superclass, [{
          key: "isFlap",
          get: function get() {
            return true;
          }
        }, {
          key: "executeAction",
          value: function () {
            var _FlapModel_executeAction_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.action(this);

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function FlapModel_executeAction_() {
              return _FlapModel_executeAction_.apply(this, arguments);
            }

            return FlapModel_executeAction_;
          }()
        }, {
          key: "onWorldResize",
          value: function FlapModel_onWorldResize_() {
            this.relayoutRoutine(this);
          }
        }, {
          key: "openInWorld",
          value: function FlapModel_openInWorld_() {
            this.openingRoutine(this);
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "FlapModel";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              target: {
                type: "String"
              },
              action: {},
              relayoutRoutine: {},
              openingRoutine: {},
              bindings: {
                get: function get() {
                  return [{
                    signal: "onMouseDown",
                    handler: "executeAction"
                  }, {
                    signal: "openInWorld",
                    handler: "openInWorld"
                  }];
                }
              },
              isEpiMorph: {
                get: function get() {
                  return true;
                }
              },
              expose: {
                get: function get() {
                  return ["onWorldResize", "isFlap", "executeAction", "isEpiMorph"];
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./studio/flap.cp.js";
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
          start: 177,
          end: 983
        });
      }({
        referencedAs: "ViewModel",
        value: ViewModel
      }));
      __varRecorder__.FlapModel = FlapModel;
      __varRecorder__.FlapModel = FlapModel;
      __varRecorder__.Flap = component["for"](function () {
        return component({
          name: "flap",
          nativeCursor: "pointer",
          defaultViewModel: __varRecorder__.FlapModel,
          layout: new TilingLayout({
            align: "center",
            axis: "column",
            axisAlign: "center",
            hugContentsHorizontally: false,
            orderByIndex: true,
            padding: rect(5, 5, 0, 0)
          }),
          extent: pt(30, 120),
          fill: Color.rgb(30, 30, 30).withA(0.95),
          halosEnabled: false,
          submorphs: [{
            type: "label",
            reactsToPointer: false,
            name: "label",
            rotation: 1.5708,
            fontColor: "#B2EBF2",
            fontSize: 14
          }]
        });
      }, {
        module: "lively.ide/studio/flap.cp.js",
        "export": "Flap",
        range: {
          start: 991,
          end: 1540
        }
      }, System, __varRecorder__, "Flap");
      var Flap = exports('Flap', __varRecorder__.Flap);
      __varRecorder__.Flap = Flap;

    })
  };
}));
