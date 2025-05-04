System.register(['./__rootModule___commonjs-entry-039abf1b.js'], (function (exports) {
  var __contextModule__ = typeof module !== 'undefined' ? module : arguments[1];
;
  var initializeClass, pt, ViewModel, component, Color, TilingLayout, rect, Text, Icon;
  return {
    setters: [function (module) {
      initializeClass = module.i;
      pt = module.b;
      ViewModel = module.V;
      component = module.c;
      Color = module.C;
      TilingLayout = module.T;
      rect = module.ap;
      Text = module.j;
      Icon = module.h;
    }],
    execute: (function () {

      var __varRecorder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/studio/zoom-indicator.cp.js", __contextModule__);

      (function (superclass) {
        var __lively_classholder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/studio/zoom-indicator.cp.js", __contextModule__);

        var __lively_class__ = __lively_classholder__.hasOwnProperty("WorldZoomIndicatorModel") && typeof __lively_classholder__.WorldZoomIndicatorModel === "function" ? __lively_classholder__.WorldZoomIndicatorModel : __lively_classholder__.WorldZoomIndicatorModel = function WorldZoomIndicatorModel(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        if (Object.isFrozen(__lively_classholder__)) {
          return __lively_class__;
        }

        return initializeClass(__lively_class__, superclass, [{
          key: "isZoomIndicator",
          get: function get() {
            return true;
          }
        }, {
          key: "onMouseDown",
          value: function WorldZoomIndicatorModel_onMouseDown_() {
            $world.resetScaleFactor();
          }
        }, {
          key: "updateZoomLevel",
          value: function WorldZoomIndicatorModel_updateZoomLevel_(newPercentage) {
            this.ui.zoomFactorLabel.textString = newPercentage + " %";
            this.relayout();
          }
        }, {
          key: "relayout",
          value: function WorldZoomIndicatorModel_relayout_() {
            var view = this.view;
            var miniMap = $world.getSubmorphNamed("world mini map");
            var miniMapOffset = 0;
            if (miniMap) miniMapOffset = miniMap.width + 10;
            if ($world.activeSideBars.includes("properties panel")) view.position = pt($world.get("properties panel").left - view.width - miniMapOffset, $world.extent.y - view.height);else this.view.position = pt($world.extent.x - view.width - miniMapOffset, $world.extent.y - view.height);
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "WorldZoomIndicatorModel";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              expose: {
                get: function get() {
                  return ["isZoomIndicator", "onMouseDown", "relayout", "updateZoomLevel", "isEpiMorph"];
                }
              },
              isEpiMorph: {
                get: function get() {
                  return true;
                }
              },
              bindings: {
                get: function get() {
                  return [{
                    signal: "onMouseDown",
                    handler: "onMouseDown",
                    override: true
                  }];
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./studio/zoom-indicator.cp.js";
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
          start: 133,
          end: 1335
        });
      })({
        referencedAs: "ViewModel",
        value: ViewModel
      });

      __varRecorder__.WorldZoomIndicator = component["for"](function () {
        return component({
          name: "zoom indicator wrapper",
          defaultViewModel: __varRecorder__.WorldZoomIndicatorModel,
          fill: Color.transparent,
          extent: pt(100, 100),
          layout: new TilingLayout({
            align: "right",
            axisAlign: "right",
            padding: rect(0, 0, 10, 10)
          }),
          reactsToPointer: false,
          submorphs: [{
            name: "zoom indicator",
            borderColor: Color.rgb(23, 160, 251),
            borderRadius: 5,
            extent: pt(65, 27),
            fill: Color.rgba(0, 0, 0, 0.6),
            hasFixedPosition: true,
            halosEnabled: false,
            layout: new TilingLayout({
              axisAlign: "center",
              align: "center",
              orderByIndex: true,
              hugContentsHorizontally: true,
              hugContentsVertically: true,
              padding: {
                height: 0,
                width: 0,
                x: 5,
                y: 5
              },
              reactToSubmorphAnimations: false,
              resizeSubmorphs: false,
              spacing: 5
            }),
            nativeCursor: "pointer",
            position: pt(535, 438.4),
            submorphs: [{
              type: Text,
              name: "zoom icon label",
              fontSize: 14,
              fontColor: Color.white,
              nativeCursor: "pointer",
              halosEnabled: false,
              textAndAttributes: Icon.textAttribute("magnifying-glass")
            }, {
              type: Text,
              name: "zoom factor label",
              fontColor: Color.rgb(253, 254, 254),
              nativeCursor: "pointer",
              halosEnabled: false,
              textAndAttributes: ["100 %", null]
            }]
          }]
        });
      }, {
        module: "lively.ide/studio/zoom-indicator.cp.js",
        "export": "WorldZoomIndicator",
        range: {
          start: 1350,
          end: 2790
        }
      }, System, __varRecorder__, "WorldZoomIndicator");
      var WorldZoomIndicator = exports('WorldZoomIndicator', __varRecorder__.WorldZoomIndicator);
      __varRecorder__.WorldZoomIndicator = WorldZoomIndicator;

    })
  };
}));
