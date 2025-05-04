System.register(['./__rootModule___commonjs-entry-43c0966d.js'], (function (exports) {
  var __contextModule__ = typeof module !== 'undefined' ? module : arguments[1];
;
  var initializeClass, touchInputDevice, signal, ViewModel, Color, connect, pt, Closure, Morph, isArray, morph, _toConsumableArray, _slicedToArray, component, LinearGradient, TilingLayout, Label, ShadowObject, rect, part, delay, easings, promise_finally, HTMLMorph, stringToEasing, clamp, interpolate, Rectangle, Icon, _asyncToGenerator;
  return {
    setters: [function (module) {
      initializeClass = module.i;
      touchInputDevice = module.an;
      signal = module.s;
      ViewModel = module.V;
      Color = module.C;
      connect = module.a;
      pt = module.b;
      Closure = module.bk;
      Morph = module.M;
      isArray = module.bh;
      morph = module.aZ;
      _toConsumableArray = module.r;
      _slicedToArray = module.o;
      component = module.c;
      LinearGradient = module.au;
      TilingLayout = module.T;
      Label = module.L;
      ShadowObject = module.ao;
      rect = module.ap;
      part = module.p;
      delay = module.l;
      easings = module.az;
      promise_finally = module.bE;
      HTMLMorph = module.al;
      stringToEasing = module.ch;
      clamp = module.bF;
      interpolate = module.aM;
      Rectangle = module.R;
      Icon = module.h;
      _asyncToGenerator = module._;
    }],
    execute: (function () {

      var __varRecorder__$2 = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.components/buttons.js", __contextModule__);
      var ButtonModel = exports('c', function (superclass) {
        var __lively_classholder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.components/buttons.js", __contextModule__);

        var __lively_class__ = __lively_classholder__.hasOwnProperty("ButtonModel") && typeof __lively_classholder__.ButtonModel === "function" ? __lively_classholder__.ButtonModel : __lively_classholder__.ButtonModel = function ButtonModel(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        if (Object.isFrozen(__lively_classholder__)) {
          return __lively_class__;
        }

        return initializeClass(__lively_class__, superclass, [{
          key: "handlePressStart",
          value: function ButtonModel_handlePressStart_(evt) {
            if (!evt.isAltDown() && !this.deactivated && this.considerPress(evt)) {
              this.pressed = {
                originalFill: this.view.fill
              };
            }
          }
        }, {
          key: "handlePressEnd",
          value: function ButtonModel_handlePressEnd_(evt) {
            if (evt.isClickTarget(this.view) && this.pressed) {
              this.trigger();
              this.pressed = null;
            }
          }
        }, {
          key: "cancelPressOnDrag",
          value: function ButtonModel_cancelPressOnDrag_($onViewDragStart, evt) {
            if (touchInputDevice) {
              this.draggable = true;
              this.pressed = null;
            } else {
              $onViewDragStart(evt);
            }
          }
        }, {
          key: "preventDrag",
          value: function ButtonModel_preventDrag_($onViewDrag, evt) {}
        }, {
          key: "cancelPress",
          value: function ButtonModel_cancelPress_(evt) {
            if (touchInputDevice) return;
            if (this.pressed && evt.isClickTarget(this.view)) this.pressed = null;
          }
        }, {
          key: "recoverPressIfNeeded",
          value: function ButtonModel_recoverPressIfNeeded_(evt) {
            if (touchInputDevice) return;

            if (!this.deactivated && evt.isClickTarget(this.view)) {
              this.pressed = {
                originalFill: this.fill
              };
            }
          }
        }, {
          key: "enable",
          value: function ButtonModel_enable_() {
            this.deactivated = false;
          }
        }, {
          key: "disable",
          value: function ButtonModel_disable_() {
            this.deactivated = true;
          }
        }, {
          key: "onRefresh",
          value: function ButtonModel_onRefresh_() {
            if (!this.ui.label) return;
            Object.assign(this.ui.label, this.label);
            this.view.nativeCursor = this.deactivated ? "not-allowed" : "pointer";
            this.ui.label.opacity = this.deactivated ? 0.3 : 1;
            if (this._realFill) this.view.fill = this._realFill;
          }
        }, {
          key: "trigger",
          value: function ButtonModel_trigger_() {
            try {
              signal(this.view, "fire");
              typeof this.action === "function" && this.action();
            } catch (err) {
              var w = this.world();
              if (w) w.logError(err);else console.error(err);
            }
          }
        }, {
          key: "considerPress",
          value: function ButtonModel_considerPress_(evt) {
            this.view.updateTransform();
            if (touchInputDevice) return true;else return this.view.innerBoundsContainsPoint(evt.positionIn(this.view));
          }
        }, {
          key: "menuItems",
          value: function ButtonModel_menuItems_(items) {
            return items;
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "ButtonModel";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              deactivated: {
                group: "button",
                defaultValue: false
              },
              pressed: {
                group: "_internal",
                defaultValue: null
              },
              label: {
                group: "button",
                type: "RichText",
                set: function set(labelMorphProperties) {
                  var prevLabel = this.label || {};
                  this.setProperty("label", Object.assign({}, prevLabel, {}, labelMorphProperties));
                }
              },
              fire: {
                group: "button",
                derived: true,
                readOnly: true,
                isSignal: true
              },
              action: {
                serialize: false
              },
              expose: {
                get: function get() {
                  return ["enable", "disable"];
                }
              },
              bindings: {
                get: function get() {
                  return [{
                    signal: "onMouseDown",
                    handler: "handlePressStart"
                  }, {
                    signal: "onMouseUp",
                    handler: "handlePressEnd"
                  }, {
                    signal: "onHoverOut",
                    handler: "cancelPress"
                  }, {
                    signal: "onHoverIn",
                    handler: "recoverPressIfNeeded"
                  }, {
                    signal: "onDragStart",
                    handler: "cancelPressOnDrag",
                    override: true
                  }, {
                    signal: "onDrag",
                    handler: "preventDrag",
                    override: true
                  }];
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./buttons.js";
          },
          unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
            return function () {};
          },
          subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
            return function () {};
          },
          "package": function _package() {
            return {
              name: "lively.components",
              version: "0.1.0"
            };
          }
        }, {
          start: 224,
          end: 3589
        });
      }({
        referencedAs: "ViewModel",
        value: ViewModel
      }));
      __varRecorder__$2.ButtonModel = ButtonModel;
      __varRecorder__$2.ButtonModel = ButtonModel;
      var RadioButton = function (superclass) {
        var __lively_classholder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.components/buttons.js", __contextModule__);

        var __lively_class__ = __lively_classholder__.hasOwnProperty("RadioButton") && typeof __lively_classholder__.RadioButton === "function" ? __lively_classholder__.RadioButton : __lively_classholder__.RadioButton = function RadioButton(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        if (Object.isFrozen(__lively_classholder__)) {
          return __lively_class__;
        }

        return initializeClass(__lively_class__, superclass, [{
          key: "reset",
          value: function RadioButton_reset_() {
            var indicator = this.indicator;
            indicator.borderWidth = 1;
            indicator.borderColor = Color.gray;
            this.selected = false;
            connect(indicator, "onMouseUp", this, "select");
          }
        }, {
          key: "morph",
          get: function get() {
            var indicator = this.indicator;
            return this.submorphs.find(function (m) {
              return m !== indicator;
            });
          }
        }, {
          key: "morph",
          set: function set(morph) {
            var indicator = this.indicator;
            this.submorphs.forEach(function (m) {
              if (m === indicator) return;
              m.remove();
            });
            morph.position = pt(50, 0);
            this.addMorph(morph);
          }
        }, {
          key: "value",
          get: function get() {
            if (!this.valueFn) {
              var fnCode;

              try {
                fnCode = JSON.parse(this.valueFunctionString);
              } catch (e) {
                fnCode = this.valueFunctionString;
              }

              this.valueFn = Closure.fromSource(fnCode).recreateFunc();
            }

            return this.morph ? this.valueFn(this.morph) : undefined;
          }
        }, {
          key: "onMouseDown",
          value: function RadioButton_onMouseDown_(evt) {
            this.select();
          }
        }, {
          key: "select",
          value: function RadioButton_select_() {
            this.selected = true;
            this.owner.setSelection(this);
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "RadioButton";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              indicator: {
                get: function get() {
                  return this.getSubmorphNamed("indicator");
                }
              },
              selectionColor: {},
              selectionStyle: {},
              selected: {
                after: ["indicator"],
                defaultValue: false,
                set: function set(bool) {
                  var _this$master;

                  (_this$master = this.master) === null || _this$master === void 0 ? void 0 : _this$master.setState(bool ? "selected" : null);
                  this.setProperty("selected", !!bool);
                }
              },
              valueFunctionString: {
                defaultValue: "\"function (morph) { return morph.value; }\"",
                set: function set(funcOrString) {
                  this.setProperty("valueFunctionString", funcOrString.toString());
                  this.valueFn = undefined;
                }
              },
              submorphs: {
                initialize: function initialize() {
                  this.submorphs = [{
                    type: "ellipse",
                    name: "indicator"
                  }];
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./buttons.js";
          },
          unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
            return function () {};
          },
          subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
            return function () {};
          },
          "package": function _package() {
            return {
              name: "lively.components",
              version: "0.1.0"
            };
          }
        }, {
          start: 3598,
          end: 5487
        });
      }({
        referencedAs: "Morph",
        value: Morph
      });
      __varRecorder__$2.RadioButton = RadioButton;
      __varRecorder__$2.RadioButton = RadioButton;
      var RadioButtonGroup = exports('R', function (superclass) {
        var __lively_classholder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.components/buttons.js", __contextModule__);

        var __lively_class__ = __lively_classholder__.hasOwnProperty("RadioButtonGroup") && typeof __lively_classholder__.RadioButtonGroup === "function" ? __lively_classholder__.RadioButtonGroup : __lively_classholder__.RadioButtonGroup = function RadioButtonGroup(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        if (Object.isFrozen(__lively_classholder__)) {
          return __lively_class__;
        }

        return initializeClass(__lively_class__, superclass, [{
          key: "reset",
          value: function RadioButtonGroup_reset_() {
            this.submorphs.forEach(function (m) {
              return m.reset();
            });
            this.layout.layoutableSubmorphs[0].selected = true;
          }
        }, {
          key: "removeAllButtons",
          value: function RadioButtonGroup_removeAllButtons_() {
            this.removeAllMorphs();
            this.height = 10;
          }
        }, {
          key: "addButton",
          value: function RadioButtonGroup_addButton_(morph, optValue) {
            var button = new __varRecorder__$2.RadioButton({
              master: this.buttonMaster,
              name: "button " + (this.submorphs.length + 1)
            });
            button.reset();
            button.morph = morph;

            if (optValue !== undefined) {
              button.internalValue = optValue;
              button.valueFunctionString = "function (morph) { return morph.owner.internalValue; }";
            }

            this.addMorph(button);
            return button;
          }
        }, {
          key: "setSelection",
          value: function RadioButtonGroup_setSelection_(activeButton) {
            this.submorphs.forEach(function (m) {
              if (m !== activeButton) {
                m.selected = false;
              }
            });
            activeButton.selected = true;
          }
        }, {
          key: "selectedButton",
          get: function get() {
            return this.submorphs.find(function (m) {
              return m.selected;
            });
          }
        }, {
          key: "value",
          get: function get() {
            var selection = this.selectedButton;
            return selection ? selection.value : null;
          }
        }, {
          key: "value",
          set: function set(value) {
            var buttonToSelect = this.submorphs.find(function (m) {
              try {
                return m.value === value;
              } catch (e) {
                return false;
              }
            });

            if (buttonToSelect) {
              buttonToSelect.select();
            } else {
              this.setSelection(null);
            }
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "RadioButtonGroup";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              buttonMaster: {},
              choices: {
                derived: true,
                defaultValue: [],
                get: function get() {
                  return this.submorphs.map(function (m) {
                    return m.value;
                  });
                },
                set: function set(labels) {
                  var _this = this;

                  this.removeAllButtons();

                  if (isArray(labels)) {
                    if (labels.length === 0) return;
                    labels.forEach(function (value) {
                      _this.addButton(morph({
                        name: "label",
                        type: "label",
                        value: value,
                        reactsToPointer: false
                      }));
                    });
                  } else {
                    labels = _toConsumableArray(labels.entries());
                    if (labels.length === 0) return;
                    labels.forEach(function (_ref) {
                      var _ref2 = _slicedToArray(_ref, 2),
                          label = _ref2[0],
                          value = _ref2[1];

                      _this.addButton(morph({
                        name: "label",
                        type: "label",
                        value: label,
                        reactsToPointer: false
                      }), value);
                    });
                  }

                  this.setSelection(this.submorphs[0]);
                },
                value: {
                  derived: true,
                  after: ["submorphs"],
                  get: function get() {
                    var selection = this.selectedButton;
                    return selection ? selection.value : null;
                  },
                  set: function set(value) {
                    var buttonToSelect = this.submorphs.find(function (m) {
                      try {
                        return m.value === value;
                      } catch (e) {
                        return false;
                      }
                    });

                    if (buttonToSelect) {
                      buttonToSelect.select();
                    } else {
                      this.setSelection(null);
                    }
                  }
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./buttons.js";
          },
          unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
            return function () {};
          },
          subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
            return function () {};
          },
          "package": function _package() {
            return {
              name: "lively.components",
              version: "0.1.0"
            };
          }
        }, {
          start: 5496,
          end: 8496
        });
      }({
        referencedAs: "Morph",
        value: Morph
      }));
      __varRecorder__$2.RadioButtonGroup = RadioButtonGroup;
      __varRecorder__$2.RadioButtonGroup = RadioButtonGroup;

      var __captured2__ = /*#__PURE__*/Object.freeze({
        __proto__: null,
        ButtonModel: ButtonModel,
        RadioButton: RadioButton,
        RadioButtonGroup: RadioButtonGroup
      });
      exports('_', __captured2__);

      var __varRecorder__$1 = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.components/buttons.cp.js", __contextModule__);
      __varRecorder__$1.ButtonDefault = component["for"](function () {
        return component({
          defaultViewModel: ButtonModel,
          name: "button/default",
          borderColor: Color.rgb(112, 123, 124),
          nativeCursor: "pointer",
          borderWidth: 1,
          borderRadius: 5,
          extent: pt(70, 25),
          fill: new LinearGradient({
            stops: [{
              offset: 0,
              color: Color.white
            }, {
              offset: 1,
              color: Color.rgb(236, 240, 241)
            }],
            vector: 0
          }),
          layout: new TilingLayout({
            align: "center",
            axisAlign: "center",
            orderByIndex: true
          }),
          submorphs: [{
            type: Label,
            name: "label",
            extent: pt(53, 18),
            fontColor: Color.rgb(60, 60, 60),
            fontSize: 14,
            reactsToPointer: false,
            textAndAttributes: ["a button", null]
          }]
        });
      }, {
        module: "lively.components/buttons.cp.js",
        "export": "ButtonDefault",
        range: {
          start: 246,
          end: 1276
        }
      }, System, __varRecorder__$1, "ButtonDefault");
      __varRecorder__$1.ButtonClicked = component["for"](function () {
        return component(__varRecorder__$1.ButtonDefault, {
          name: "button/clicked",
          borderWidth: 0,
          dropShadow: new ShadowObject({
            distance: 0,
            rotation: 0,
            color: Color.rgba(0, 0, 0, 0.39071265243902487),
            inset: true,
            blur: 4,
            spread: 1
          }),
          fill: new LinearGradient({
            stops: [{
              offset: 0,
              color: Color.rgb(199, 199, 199)
            }, {
              offset: 1,
              color: Color.rgb(152, 152, 152)
            }],
            vector: rect(0, 0, 0, 1)
          })
        });
      }, {
        module: "lively.components/buttons.cp.js",
        "export": "ButtonClicked",
        range: {
          start: 1285,
          end: 1680
        }
      }, System, __varRecorder__$1, "ButtonClicked");
      __varRecorder__$1.SystemButton = component["for"](function () {
        return component(__varRecorder__$1.ButtonDefault, {
          name: "system button",
          master: {
            auto: __varRecorder__$1.ButtonDefault,
            click: __varRecorder__$1.ButtonClicked
          }
        });
      }, {
        module: "lively.components/buttons.cp.js",
        "export": "SystemButton",
        range: {
          start: 1689,
          end: 1814
        }
      }, System, __varRecorder__$1, "SystemButton");
      __varRecorder__$1.ButtonDarkDefault = component["for"](function () {
        return component(__varRecorder__$1.ButtonDefault, {
          name: "button/dark/default",
          fill: new LinearGradient({
            stops: [{
              offset: 0,
              color: Color.rgb(149, 165, 166)
            }, {
              offset: 1,
              color: Color.rgb(127, 140, 141)
            }],
            vector: rect(0, 0, 0, 1)
          }),
          submorphs: [{
            name: "label",
            fontColor: Color.rgb(255, 255, 255),
            fontSize: 14,
            reactsToPointer: false,
            textAndAttributes: ["a button", null]
          }]
        });
      }, {
        module: "lively.components/buttons.cp.js",
        "export": "ButtonDarkDefault",
        range: {
          start: 1823,
          end: 2235
        }
      }, System, __varRecorder__$1, "ButtonDarkDefault");
      __varRecorder__$1.ButtonDarkClicked = component["for"](function () {
        return component(__varRecorder__$1.ButtonDarkDefault, {
          name: "button/dark/clicked",
          borderWidth: 0,
          dropShadow: new ShadowObject({
            distance: 0,
            rotation: 0,
            color: Color.rgba(0, 0, 0, 0.39071265243902487),
            inset: true,
            blur: 4,
            spread: 1
          })
        });
      }, {
        module: "lively.components/buttons.cp.js",
        "export": "ButtonDarkClicked",
        range: {
          start: 2244,
          end: 2489
        }
      }, System, __varRecorder__$1, "ButtonDarkClicked");
      __varRecorder__$1.SystemButtonDark = component["for"](function () {
        return component(__varRecorder__$1.ButtonDarkDefault, {
          name: "system button/dark",
          master: {
            auto: __varRecorder__$1.ButtonDarkDefault,
            click: __varRecorder__$1.ButtonDarkClicked
          }
        });
      }, {
        module: "lively.components/buttons.cp.js",
        "export": "SystemButtonDark",
        range: {
          start: 2498,
          end: 2644
        }
      }, System, __varRecorder__$1, "SystemButtonDark");
      __varRecorder__$1.DarkButton = component["for"](function () {
        return component(__varRecorder__$1.ButtonDefault, {
          name: "dark button",
          borderWidth: 0,
          fill: Color.rgba(0, 0, 0, 0.75),
          submorphs: [{
            name: "label",
            fontSize: 9,
            fontColor: Color.rgb(255, 255, 255)
          }]
        });
      }, {
        module: "lively.components/buttons.cp.js",
        "export": "DarkButton",
        range: {
          start: 2653,
          end: 2868
        }
      }, System, __varRecorder__$1, "DarkButton");
      var ButtonDefault = exports('d', __varRecorder__$1.ButtonDefault);
      var ButtonClicked = __varRecorder__$1.ButtonClicked;
      var SystemButton = exports('a', __varRecorder__$1.SystemButton);
      var ButtonDarkDefault = exports('B', __varRecorder__$1.ButtonDarkDefault);
      var SystemButtonDark = exports('b', __varRecorder__$1.SystemButtonDark);
      var ButtonDarkClicked = __varRecorder__$1.ButtonDarkClicked;
      var DarkButton = exports('D', __varRecorder__$1.DarkButton);
      __varRecorder__$1.ButtonDefault = ButtonDefault;
      __varRecorder__$1.ButtonClicked = ButtonClicked;
      __varRecorder__$1.SystemButton = SystemButton;
      __varRecorder__$1.ButtonDarkDefault = ButtonDarkDefault;
      __varRecorder__$1.SystemButtonDark = SystemButtonDark;
      __varRecorder__$1.ButtonDarkClicked = ButtonDarkClicked;
      __varRecorder__$1.DarkButton = DarkButton;

      var __varRecorder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.components/loading-indicator.cp.js", __contextModule__);
      var __moduleMeta__ = {
        pathInPackage: function pathInPackage() {
          return "./loading-indicator.cp.js";
        },
        unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
          return function () {};
        },
        subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
          return function () {};
        },
        "package": function _package() {
          return {
            name: "lively.components",
            version: "0.1.0"
          };
        }
      };

      var open = exports('o', __varRecorder__["lively.components/loading-indicator.cp.js__define__"]("open", "function", function () {
        var label = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Loading...";
        var props = arguments.length > 1 ? arguments[1] : undefined;
        var pos;
        var status = props === null || props === void 0 ? void 0 : props.status;

        if (props === null || props === void 0 ? void 0 : props.target) {
          pos = props.target.globalBounds().center();
        }

        var li = part(__varRecorder__.LoadingIndicator, Object.assign({
          viewModel: {
            label: label,
            status: status
          }
        }, props));

        if (props && props.animated) {
          delay(props.delay || 0).then(function () {
            var hoverOffset = 25;
            li.openInWorld();
            if (pos) li.center = pos;
            li.opacity = 0;
            li.top += hoverOffset;
            li.animate({
              top: li.top - hoverOffset,
              easing: easings.outExpo
            });
            li.animate({
              opacity: 1,
              easing: easings.outExpo
            });
          });
          return li;
        }

        li.openInWorld();
        if (pos) li.center = pos;
        return li;
      }, __moduleMeta__));

      __varRecorder__.open = open;

      var runFn = exports('r', __varRecorder__["lively.components/loading-indicator.cp.js__define__"]("runFn", "function", /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(fn, label, props) {
          var i;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  i = __varRecorder__.open(label, props);
                  i.env.forceUpdate();
                  _context.prev = 2;
                  _context.next = 5;
                  return fn(i);

                case 5:
                  return _context.abrupt("return", _context.sent);

                case 6:
                  _context.prev = 6;
                  i.remove();
                  return _context.finish(6);

                case 9:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[2,, 6, 9]]);
        }));

        return function (_x, _x2, _x3) {
          return _ref.apply(this, arguments);
        };
      }(), __moduleMeta__));

      __varRecorder__.runFn = runFn;

      var forPromise = __varRecorder__["lively.components/loading-indicator.cp.js__define__"]("forPromise", "function", function (p, label, props) {
        var i = __varRecorder__.open(label, props);

        promise_finally(Promise.resolve(p), function () {
          return i.remove();
        });
        return i;
      }, __moduleMeta__);

      __varRecorder__.forPromise = forPromise;

      (function (superclass) {
        var __lively_classholder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.components/loading-indicator.cp.js", __contextModule__);

        var __lively_class__ = __lively_classholder__.hasOwnProperty("SpinnerModel") && typeof __lively_classholder__.SpinnerModel === "function" ? __lively_classholder__.SpinnerModel : __lively_classholder__.SpinnerModel = function SpinnerModel(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        if (Object.isFrozen(__lively_classholder__)) {
          return __lively_class__;
        }

        return initializeClass(__lively_class__, superclass, [{
          key: "viewDidLoad",
          value: function SpinnerModel_viewDidLoad_() {
            var node = this.view.domNode.querySelector(".spinner");
            if (this.color === "black") node.classList.add("black-spinner");
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "SpinnerModel";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              color: {
                defaultValue: "white",
                type: "Enum",
                values: ["white", "black"]
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./loading-indicator.cp.js";
          },
          unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
            return function () {};
          },
          subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
            return function () {};
          },
          "package": function _package() {
            return {
              name: "lively.components",
              version: "0.1.0"
            };
          }
        }, {
          start: 301,
          end: 660
        });
      })({
        referencedAs: "ViewModel",
        value: ViewModel
      });

      __varRecorder__.Spinner = component["for"](function () {
        return component({
          type: HTMLMorph,
          defaultViewModel: __varRecorder__.SpinnerModel,
          name: "spinner",
          extent: pt(86.2, 70.2),
          fill: Color.rgba(255, 255, 255, 0),
          html: "<div class=\"spinner\"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>",
          scale: 0.3244543390629232
        });
      }, {
        module: "lively.components/loading-indicator.cp.js",
        "export": "Spinner",
        range: {
          start: 675,
          end: 1034
        }
      }, System, __varRecorder__, "Spinner");
      var Spinner = exports('S', __varRecorder__.Spinner);
      __varRecorder__.Spinner = Spinner;

      (function (superclass) {
        var __lively_classholder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.components/loading-indicator.cp.js", __contextModule__);

        var __lively_class__ = __lively_classholder__.hasOwnProperty("ProgressBar") && typeof __lively_classholder__.ProgressBar === "function" ? __lively_classholder__.ProgressBar : __lively_classholder__.ProgressBar = function ProgressBar(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        if (Object.isFrozen(__lively_classholder__)) {
          return __lively_class__;
        }

        return initializeClass(__lively_class__, superclass, [{
          key: "test",
          value: function () {
            var _ProgressBar_test_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.progress = 0;

                    case 1:
                      if (!(this.progress < 1)) {
                        _context2.next = 7;
                        break;
                      }

                      this.progress += 0.1;
                      _context2.next = 5;
                      return delay(1000);

                    case 5:
                      _context2.next = 1;
                      break;

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function ProgressBar_test_() {
              return _ProgressBar_test_.apply(this, arguments);
            }

            return ProgressBar_test_;
          }()
        }, {
          key: "update",
          value: function ProgressBar_update_() {
            var _this = this;

            setTimeout(function () {
              if (!_this.world()) _this.stopStepping();
            }, 1000);
            if (!this._lastWidth) return;
            var pb = this.get("progress path");
            var p = stringToEasing(easings.inOutExpo)(clamp(Date.now() - this._timeStamp, 0, 1000) / 1000);
            var targetWidth = this._targetWidth;
            pb.topLeft = pt(0, 0);
            pb.height = this.height;

            if (this._lastWidth > targetWidth) {
              pb.width = targetWidth;
            } else {
              pb.width = interpolate(p, this._lastWidth, targetWidth);
            }
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "ProgressBar";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              progress: {
                after: ["submorphs"],
                initialize: function initialize() {
                  this.progress = 0;
                  this.startStepping("update");
                },
                set: function set(p) {
                  var pb = this.get("progress path");
                  this._lastWidth = Math.max(pb.width, this._targetWidth, 1);
                  this._targetWidth = this.width * p;
                  this._timeStamp = Date.now();
                  this.setProperty("progress", p);
                }
              },
              fill: {
                defaultValue: Color.darkGray
              },
              borderRadius: {
                defaultValue: 5
              },
              clipMode: {
                defaultValue: "hidden"
              },
              submorphs: {
                initialize: function initialize() {
                  this.submorphs = [{
                    name: "progress path",
                    fill: Color.orange,
                    width: 1
                  }];
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./loading-indicator.cp.js";
          },
          unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
            return function () {};
          },
          subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
            return function () {};
          },
          "package": function _package() {
            return {
              name: "lively.components",
              version: "0.1.0"
            };
          }
        }, {
          start: 1037,
          end: 2644
        });
      })({
        referencedAs: "Morph",
        value: Morph
      });

      var LoadingIndicatorModel = function (superclass) {
        var __lively_classholder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.components/loading-indicator.cp.js", __contextModule__);

        var __lively_class__ = __lively_classholder__.hasOwnProperty("LoadingIndicatorModel") && typeof __lively_classholder__.LoadingIndicatorModel === "function" ? __lively_classholder__.LoadingIndicatorModel : __lively_classholder__.LoadingIndicatorModel = function LoadingIndicatorModel(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        if (Object.isFrozen(__lively_classholder__)) {
          return __lively_class__;
        }

        return initializeClass(__lively_class__, superclass, [{
          key: "isLoadingIndicator",
          get: function get() {
            return true;
          }
        }, {
          key: "onHoverIn",
          value: function LoadingIndicatorModel_onHoverIn_() {
            this.ui.closeButton.opacity = 1;
          }
        }, {
          key: "onHoverOut",
          value: function LoadingIndicatorModel_onHoverOut_() {
            this.ui.closeButton.opacity = 0;
          }
        }, {
          key: "close",
          value: function LoadingIndicatorModel_close_() {
            this.view.remove();
          }
        }, {
          key: "onRefresh",
          value: function LoadingIndicatorModel_onRefresh_(prop) {
            var status = this.ui.status;

            if (this.status) {
              status.visible = true;
              status.value = this.status;
            } else {
              status.visible = false;
              status.value = "";
            }
          }
        }, {
          key: "viewDidLoad",
          value: function LoadingIndicatorModel_viewDidLoad_() {
            var _this$ui = this.ui,
                label = _this$ui.label,
                progressBar = _this$ui.progressBar;

            if (progressBar) {
              progressBar.visible = false;
            }

            label.value = this.label;
          }
        }, {
          key: "animateProgress",
          value: function () {
            var _LoadingIndicatorModel_animateProgress_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(p) {
              var progressBar;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      progressBar = this.ui.progressBar;

                      if (p === false) {
                        progressBar.visible = false;
                      } else {
                        progressBar.visible = true;
                      }

                      progressBar.progress = p;

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function LoadingIndicatorModel_animateProgress_(_x4) {
              return _LoadingIndicatorModel_animateProgress_.apply(this, arguments);
            }

            return LoadingIndicatorModel_animateProgress_;
          }()
        }, {
          key: "hideSpinner",
          value: function () {
            var _LoadingIndicatorModel_hideSpinner_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var spinner;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      spinner = this.ui.spinner;

                      if (spinner) {
                        _context4.next = 3;
                        break;
                      }

                      return _context4.abrupt("return");

                    case 3:
                      spinner.visible = false;
                      spinner.width = 50;
                      spinner.remove();

                    case 6:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function LoadingIndicatorModel_hideSpinner_() {
              return _LoadingIndicatorModel_hideSpinner_.apply(this, arguments);
            }

            return LoadingIndicatorModel_hideSpinner_;
          }()
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "LoadingIndicatorModel";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              progress: {
                derived: true,
                set: function set(p) {
                  this.animateProgress(clamp(p, 0, 1));
                }
              },
              label: {
                defaultValue: "status message",
                set: function set(val) {
                  this.setProperty("label", val);
                  if (!this.view) return;
                  this.ui.label.value = val;
                }
              },
              status: {
                defaultValue: false
              },
              expose: {
                get: function get() {
                  return ["status", "label", "progress", "isLoadingIndicator"];
                }
              },
              bindings: {
                get: function get() {
                  return [{
                    signal: "onHoverIn",
                    handler: "onHoverIn"
                  }, {
                    signal: "onHoverOut",
                    handler: "onHoverOut"
                  }, {
                    signal: "openInWorld",
                    handler: "openInWorld"
                  }, {
                    target: "close button",
                    signal: "fire",
                    handler: "close"
                  }];
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./loading-indicator.cp.js";
          },
          unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
            return function () {};
          },
          subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
            return function () {};
          },
          "package": function _package() {
            return {
              name: "lively.components",
              version: "0.1.0"
            };
          }
        }, {
          start: 2646,
          end: 4570
        });
      }({
        referencedAs: "ViewModel",
        value: ViewModel
      });
      __varRecorder__.LoadingIndicator = component["for"](function () {
        return component({
          defaultViewModel: __varRecorder__.LoadingIndicatorModel,
          epiMorph: true,
          hasFixedPosition: true,
          fill: Color.transparent,
          name: "loading indicator",
          layout: new TilingLayout({
            align: "center",
            axisAlign: "center"
          }),
          extent: pt(225, 50),
          submorphs: [{
            name: "background",
            borderRadius: 10,
            clipMode: "hidden",
            dropShadow: new ShadowObject({
              color: Color.rgba(0, 0, 0, 0.62),
              blur: 28
            }),
            extent: pt(225, 65),
            fill: Color.rgba(0, 0, 0, 0.65),
            layout: new TilingLayout({
              axis: "column",
              padding: 10,
              hugContentsVertically: true,
              hugContentsHorizontally: true,
              resizePolicies: [["progress bar", {
                width: "fill",
                height: "fixed"
              }]]
            }),
            submorphs: [{
              name: "top float",
              fill: Color.transparent,
              layout: new TilingLayout({
                hugContentsVertically: true,
                hugContentsHorizontally: true,
                align: "center",
                axis: "row",
                axisAlign: "top",
                padding: rect(22, 0, -22, 0)
              }),
              submorphs: [{
                name: "spinner wrapper",
                fill: Color.transparent,
                height: 45,
                width: 40,
                layout: new TilingLayout({
                  axis: "row",
                  axisAlign: "center",
                  reactToSubmorphAnimations: false
                }),
                submorphs: [part(__varRecorder__.Spinner, {
                  name: "spinner",
                  extent: pt(65, 70),
                  fill: Color.rgba(255, 255, 255, 0),
                  scale: 0.5
                })]
              }, {
                name: "wrapper",
                extent: pt(195, 35),
                fill: Color.rgba(46, 75, 223, 0),
                layout: new TilingLayout({
                  axis: "column",
                  align: "center",
                  direction: "leftToRight",
                  orderByIndex: true,
                  reactToSubmorphAnimations: false,
                  renderViaCSS: true,
                  hugContentsHorizontally: true,
                  hugContentsVertically: true
                }),
                submorphs: [{
                  type: Label,
                  name: "label",
                  fill: Color.rgba(255, 255, 255, 0),
                  fontColor: Color.rgb(253, 254, 254),
                  fontSize: 16,
                  padding: rect(0, 0, 10, 0),
                  fontWeight: "bold",
                  nativeCursor: "pointer",
                  textAndAttributes: ["test test test test ", null]
                }, {
                  type: Label,
                  name: "status",
                  fill: Color.rgba(255, 255, 255, 0),
                  padding: Rectangle.inset(0, 0, 0, 7.5),
                  fontColor: Color.rgb(253, 254, 254),
                  fontWeight: "bold",
                  nativeCursor: "pointer",
                  opacity: 0.65,
                  visible: false
                }]
              }, part(ButtonDefault, {
                name: "close button",
                borderWidth: 0,
                opacity: 0,
                extent: pt(23, 22),
                fill: Color.transparent,
                submorphs: [{
                  name: "label",
                  fontColor: Color.rgb(253, 254, 254),
                  fontSize: 18,
                  fontWeight: "bolder",
                  textAndAttributes: Icon.textAttribute("times")
                }]
              })]
            }, {
              type: __varRecorder__.ProgressBar,
              name: "progress bar",
              extent: pt(195, 5),
              visible: false,
              progress: 0,
              submorphs: [{
                name: "progress path",
                extent: pt(1, 10),
                fill: Color.rgb(255, 153, 0)
              }]
            }]
          }]
        });
      }, {
        module: "lively.components/loading-indicator.cp.js",
        "export": "LoadingIndicator",
        range: {
          start: 5650,
          end: 8933
        }
      }, System, __varRecorder__, "LoadingIndicator");
      var LoadingIndicator = __varRecorder__.LoadingIndicator;
      __varRecorder__.LoadingIndicator = LoadingIndicator;
      __varRecorder__.open = open;
      __varRecorder__.forPromise = forPromise;
      __varRecorder__.runFn = runFn;
      __varRecorder__.LoadingIndicatorModel = LoadingIndicatorModel;

      var LoadingIndicator$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Spinner: Spinner,
        LoadingIndicator: LoadingIndicator,
        open: open,
        forPromise: forPromise,
        runFn: runFn,
        LoadingIndicatorModel: LoadingIndicatorModel
      });
      exports('L', LoadingIndicator$1);

    })
  };
}));
