System.register(['./__rootModule___commonjs-entry-039abf1b.js', './loading-indicator.cp-668e5ddc.js'], (function (exports) {
  var __contextModule__ = typeof module !== 'undefined' ? module : arguments[1];
;
  var initializeClass, pt, truncate, Color, ViewModel, _asyncToGenerator, easings, component, Icon, rect, ShadowObject, TilingLayout, Label, part, Text, LinearGradient, ButtonDefault;
  return {
    setters: [function (module) {
      initializeClass = module.i;
      pt = module.b;
      truncate = module.aj;
      Color = module.C;
      ViewModel = module.V;
      _asyncToGenerator = module._;
      easings = module.az;
      component = module.c;
      Icon = module.h;
      rect = module.ap;
      ShadowObject = module.ao;
      TilingLayout = module.T;
      Label = module.L;
      part = module.p;
      Text = module.j;
      LinearGradient = module.au;
    }, function (module) {
      ButtonDefault = module.d;
    }],
    execute: (function () {

      var __varRecorder__$1 = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.halos/components/messages.js", __contextModule__);
      var StatusMessage = function (superclass) {
        var __lively_classholder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.halos/components/messages.js", __contextModule__);

        var __lively_class__ = __lively_classholder__.hasOwnProperty("StatusMessage") && typeof __lively_classholder__.StatusMessage === "function" ? __lively_classholder__.StatusMessage : __lively_classholder__.StatusMessage = function StatusMessage(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        if (Object.isFrozen(__lively_classholder__)) {
          return __lively_class__;
        }

        return initializeClass(__lively_class__, superclass, [{
          key: "sanitizeString",
          value: function StatusMessage_sanitizeString_(s) {
            if (Array.isArray(s)) s = s[0];
            return s.split("\n").join("");
          }
        }, {
          key: "alignAtBottomOf",
          value: function StatusMessage_alignAtBottomOf_(forMorph) {
            var view = this.view;
            var world = this.world();
            if (!world) return;
            view.bringToFront();
            var targetBounds = forMorph.bounds();

            if (forMorph.isWindow) {
              targetBounds = targetBounds.insetBy(7.5);
            }

            view.width = targetBounds.width;

            if (forMorph.world()) {
              view.position = forMorph.owner.worldPoint(targetBounds.bottomLeft());
            }

            var visibleBounds = world.visibleBounds();
            var bounds = view.bounds();
            var overlapY = bounds.top() + view.height - visibleBounds.bottom();
            if (overlapY > 0) view.moveBy(pt(0, -overlapY));
          }
        }, {
          key: "close",
          value: function StatusMessage_close_() {
            this.view.remove();
          }
        }, {
          key: "onRefresh",
          value: function StatusMessage_onRefresh_(prop) {
            if (!this.view) return;
            this.ui.messageText.isLayoutable = !this.isCompact;
            this.ui.messageText.visible = !this.isCompact;
            if (prop === "message") this.updateMessage();

            if (prop === "title") {
              this.updateTitle();
            }
          }
        }, {
          key: "viewDidLoad",
          value: function StatusMessage_viewDidLoad_() {
            this.updateMessage();
            this.updateTitle();
          }
        }, {
          key: "updateTitle",
          value: function StatusMessage_updateTitle_() {
            this.ui.messageTitle.textString = this.title;
          }
        }, {
          key: "updateMessage",
          value: function StatusMessage_updateMessage_() {
            var text = this.ui.messageText;
            var value = this.message;
            text.value = value;
            var textEnd = text.documentRange.end;

            if (textEnd.row > this.maxLines) {
              text.replace({
                start: {
                  row: this.maxLines,
                  column: 0
                },
                end: textEnd
              }, "...\n");
              if (!this.expandedContent) this.expandedContent = value;
            }

            var maxLineLength = 120;
            var hasOversizedLine = false;

            if (!this.isMaximized) {
              text.modifyLines(0, Math.min(text.lineCount(), this.maxLines) - 1, function (l) {
                hasOversizedLine = l.length > maxLineLength;
                return truncate(l, maxLineLength, "...");
              });
            }

            if (hasOversizedLine) this.expandedContent = value;
            textEnd = text.documentEndPosition;
            if (textEnd.column !== 0) text.insertText("\n", textEnd);
            var f = 10;
            this.title = truncate(text.textString || "", (this.view.width / f).toFixed(), "...");
            this.updateTitle();
          }
        }, {
          key: "onViewResize",
          value: function StatusMessage_onViewResize_() {
            this.onRefresh();
          }
        }, {
          key: "isEpiMorph",
          value: function StatusMessage_isEpiMorph_() {
            return true;
          }
        }, {
          key: "isStatusMessage",
          value: function StatusMessage_isStatusMessage_() {
            return true;
          }
        }, {
          key: "setMessage",
          value: function StatusMessage_setMessage_(msg) {
            var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.color;
            this.message = msg;
            this.color = color;
          }
        }, {
          key: "slideTo",
          value: function () {
            var _StatusMessage_slideTo_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(pos) {
              var _this = this;

              var startPos;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      startPos = this.view.position;
                      this.sliding = this.view.animate({
                        customTween: function customTween(p) {
                          _this.view.position = startPos.interpolate(p, pos);
                        },
                        duration: 500
                      });
                      _context.next = 4;
                      return this.sliding;

                    case 4:
                      this.sliding = false;

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function StatusMessage_slideTo_(_x) {
              return _StatusMessage_slideTo_.apply(this, arguments);
            }

            return StatusMessage_slideTo_;
          }()
        }, {
          key: "expand",
          value: function () {
            var _StatusMessage_expand_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var extraPadding, world, text, title, paddingLeft, paddingRight, ext, visibleBounds;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      extraPadding = 100;

                      if (this.expandable) {
                        _context2.next = 3;
                        break;
                      }

                      return _context2.abrupt("return");

                    case 3:
                      if (!this.sliding) {
                        _context2.next = 6;
                        break;
                      }

                      _context2.next = 6;
                      return this.sliding;

                    case 6:
                      world = this.view.world();

                      if (!(!world || this.isMaximized)) {
                        _context2.next = 9;
                        break;
                      }

                      return _context2.abrupt("return");

                    case 9:
                      this.isMaximized = true;
                      this.stayOpen = true;
                      this.isCompact = false;
                      text = this.ui.messageText;
                      title = this.ui.messageTitle;
                      paddingLeft = title.left;
                      paddingRight = this.view.width - title.right;
                      Object.assign(text, {
                        lineWrapping: "no-wrap",
                        clipMode: "auto",
                        readOnly: true,
                        reactsToPointer: true
                      });
                      if (this.expandedContent) text.value = this.expandedContent;
                      text.env.forceUpdate();
                      delete text.renderingState.renderedTextAndAttributes;
                      text.invalidateTextLayout(true, true);
                      text.env.forceUpdate();
                      ext = text.textBounds().extent().maxPt(title.textBounds().extent().addXY(paddingLeft + paddingRight));
                      visibleBounds = world.visibleBoundsExcludingTopBar().insetBy(extraPadding);
                      if (ext.y > visibleBounds.extent().y) ext.y = visibleBounds.height;
                      if (ext.x > visibleBounds.extent().x) ext.x = visibleBounds.width;
                      this.view.withAnimationDo(function () {
                        text.height = ext.y + 25;

                        _this2.view.layout.apply();
                      }, {
                        easing: easings.outExpo,
                        duration: 200
                      });
                      this.view.withAnimationDo(function () {
                        _this2.view.width = ext.x + 50;

                        _this2.ui.horizontalFloat.layout.apply();
                      }, {
                        easing: easings.outExpo,
                        duration: 200
                      });
                      this.view.withAnimationDo(function () {
                        _this2.view.center = visibleBounds.center();
                      }, {
                        easing: easings.outExpo,
                        duration: 200
                      });
                      this.focus();

                    case 30:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function StatusMessage_expand_() {
              return _StatusMessage_expand_.apply(this, arguments);
            }

            return StatusMessage_expand_;
          }()
        }, {
          key: "fit",
          value: function StatusMessage_fit_() {
            var text = this.ui.messageText;
            if (!text) return;
            var minHeight = 55;
            var minWidth = 100;
            this.view.extent = pt(minWidth, minHeight).maxPt(text.textBounds().extent());
            this.relayout();
          }
        }, {
          key: "focus",
          value: function StatusMessage_focus_() {
            var text = this.ui.messageText;
            text && text.focus();
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "StatusMessage";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              stayOpen: {
                defaultValue: false
              },
              slidable: {
                defaultValue: true
              },
              isMaximized: {
                defaultValue: false
              },
              expandable: {
                defaultValue: true
              },
              maxLines: {
                defaultValue: 3
              },
              isCompact: {
                defaultValue: false
              },
              message: {
                after: ["view"]
              },
              title: {
                isStyleProp: true,
                defaultValue: "Something to think about...",
                set: function set(t) {
                  this.setProperty("title", this.sanitizeString(t));
                }
              },
              color: {
                derived: true,
                get: function get() {
                  return this.view.fill;
                },
                set: function set() {
                  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Color.rgba(209, 209, 209, 0.9);
                  this.view.fill = color;
                  if (!color) return;
                  var l = color.luma();
                  if (l > 0.5) this.fontColor = Color.rgb(66, 73, 73);else this.fontColor = Color.white;
                }
              },
              compactHeight: {
                readOnly: true,
                get: function get() {
                  return 55;
                }
              },
              fontColor: {
                after: ["view"],
                defaultValue: Color.rgb(66, 73, 73)
              },
              expose: {
                readOnly: true,
                get: function get() {
                  return ["isStatusMessage", "isMaximized", "slideTo", "slidable", "stayOpen", "alignAtBottomOf"];
                }
              },
              bindings: {
                readOnly: true,
                get: function get() {
                  return [{
                    target: "close button",
                    signal: "fire",
                    handler: "close"
                  }, {
                    signal: "onMouseUp",
                    handler: "expand"
                  }, {
                    signal: "extent",
                    handler: "onViewResize"
                  }];
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./components/messages.js";
          },
          unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
            return function () {};
          },
          subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
            return function () {};
          },
          "package": function _package() {
            return {
              name: "lively.halos",
              version: "0.1.0"
            };
          }
        }, {
          start: 196,
          end: 6984
        });
      }({
        referencedAs: "ViewModel",
        value: ViewModel
      });
      __varRecorder__$1.StatusMessage = StatusMessage;
      __varRecorder__$1.StatusMessage = StatusMessage;

      var __varRecorder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.halos/components/messages.cp.js", __contextModule__);
      __varRecorder__.MessageButton = component["for"](function () {
        return component(ButtonDefault, {
          viewModel: {
            label: {
              value: Icon.textAttribute("times"),
              fontColor: Color.rgb(66, 73, 73),
              fontSize: 20,
              padding: rect(1, 1, 0, 0)
            }
          },
          name: "message button",
          borderColor: Color.rgb(149, 165, 166),
          borderRadius: 25,
          borderWidth: 0,
          extent: pt(25, 25),
          halosEnabled: false,
          fill: Color.rgba(255, 255, 255, 0)
        });
      }, {
        module: "lively.halos/components/messages.cp.js",
        "export": "MessageButton",
        range: {
          start: 283,
          end: 688
        }
      }, System, __varRecorder__, "MessageButton");
      __varRecorder__.MessageButtonHover = component["for"](function () {
        return component(__varRecorder__.MessageButton, {
          name: "message button/hover",
          fill: Color.black.withA(0.1)
        });
      }, {
        module: "lively.halos/components/messages.cp.js",
        "export": "MessageButtonHover",
        range: {
          start: 697,
          end: 809
        }
      }, System, __varRecorder__, "MessageButtonHover");
      __varRecorder__.MessageButtonClick = component["for"](function () {
        return component(__varRecorder__.MessageButton, {
          name: "message button/click",
          fill: Color.black.withA(0.2)
        });
      }, {
        module: "lively.halos/components/messages.cp.js",
        "export": "MessageButtonClick",
        range: {
          start: 818,
          end: 930
        }
      }, System, __varRecorder__, "MessageButtonClick");
      __varRecorder__.StatusMessageDefault = component["for"](function () {
        return component({
          name: "status message default",
          defaultViewModel: StatusMessage,
          hasFixedPosition: true,
          borderRadius: 5,
          clipMode: "hidden",
          dropShadow: new ShadowObject({
            distance: 8,
            rotation: 90,
            color: Color.rgba(0, 0, 0, 0.3),
            blur: 25
          }),
          extent: pt(669, 128),
          fill: Color.rgba(209, 209, 209, 0.9),
          layout: new TilingLayout({
            axis: "column",
            orderByIndex: true,
            hugContentsVertically: true,
            reactToSubmorphAnimations: true,
            resizePolicies: [["horizontal float", {
              height: "fixed",
              width: "fill"
            }], ["message text", {
              height: "fixed",
              width: "fill"
            }]]
          }),
          submorphs: [{
            name: "horizontal float",
            extent: pt(669, 40),
            fill: Color.rgba(0, 0, 0, 0),
            reactsToPointer: false,
            halosEnabled: false,
            layout: new TilingLayout({
              axisAlign: "center",
              orderByIndex: true,
              padding: rect(10, 5, -5, 0),
              reactToSubmorphAnimations: true,
              resizePolicies: [["message title", {
                height: "fill",
                width: "fill"
              }], ["close button", {
                height: "fill",
                width: "fixed"
              }]]
            }),
            submorphs: [{
              type: Label,
              name: "message icon",
              extent: pt(22, 23),
              fontColor: Color.rgb(66, 73, 73),
              fontSize: 20,
              padding: rect(1, 1, 0, 0),
              reactsToPointer: false,
              halosEnabled: false,
              textAndAttributes: Icon.textAttribute("info-circle")
            }, {
              type: "text",
              needsDocument: true,
              name: "message title",
              extent: pt(597, 37),
              fill: Color.rgba(0, 0, 0, 0),
              fixedWidth: true,
              fixedHeight: true,
              readOnly: true,
              fontColor: Color.rgb(66, 73, 73),
              fontFamily: "IBM Plex Sans",
              fontSize: 15,
              fontWeight: "bold",
              lineWrapping: "by-words",
              padding: rect(8, 5, 0, 3),
              reactsToPointer: false,
              halosEnabled: false,
              textAndAttributes: ["Something to think about...", null]
            }, part(ButtonDefault, {
              master: {
                auto: __varRecorder__.MessageButton,
                click: __varRecorder__.MessageButtonClick,
                hover: __varRecorder__.MessageButtonHover
              },
              name: "close button",
              position: pt(465.2, 0.2),
              width: 30,
              tooltip: "Close this status message.",
              halosEnabled: false,
              submorphs: [{
                name: "label",
                textAndAttributes: Icon.textAttribute("times"),
                fontSize: 20,
                padding: rect(1, 1, 0, 0)
              }]
            })]
          }, {
            type: Text,
            needsDocument: true,
            name: "message text",
            selectionMode: "native",
            clipMode: "auto",
            extent: pt(669, 87.5),
            fill: Color.rgba(0, 0, 0, 0),
            fixedHeight: true,
            fixedWidth: true,
            fontColor: Color.rgb(66, 73, 73),
            fontFamily: "IBM Plex Sans",
            fontSize: 15,
            lineWrapping: "by-words",
            padding: rect(10, 10, 0, 0),
            halosEnabled: false,
            textAndAttributes: ["The module \"lively.morphic/morph.js\" you are viewing is frozen. You are not able to make changes to this module unless you reload the world with dynamic load enabled for the package \"lively.morphic\".", null]
          }]
        });
      }, {
        module: "lively.halos/components/messages.cp.js",
        "export": "StatusMessageDefault",
        range: {
          start: 939,
          end: 4104
        }
      }, System, __varRecorder__, "StatusMessageDefault");
      __varRecorder__.StatusMessageConfirm = component["for"](function () {
        return component(__varRecorder__.StatusMessageDefault, {
          extent: pt(669, 128),
          name: "status message confirm",
          fill: new LinearGradient({
            stops: [{
              offset: 0,
              color: Color.rgb(46, 204, 113)
            }, {
              offset: 1,
              color: Color.rgb(39, 174, 96)
            }],
            vector: rect(0, 0, 0, 1)
          }),
          submorphs: [{
            name: "horizontal float",
            submorphs: [{
              name: "message icon",
              fontColor: Color.rgb(255, 255, 255),
              fontSize: 20,
              textAndAttributes: Icon.textAttribute("check-circle")
            }, {
              name: "message title",
              fontColor: Color.white,
              textAndAttributes: ["Saved file...", null]
            }, {
              name: "close button",
              submorphs: [{
                name: "label",
                fontColor: Color.white
              }]
            }]
          }, {
            name: "message text",
            fontColor: Color.white
          }]
        });
      }, {
        module: "lively.halos/components/messages.cp.js",
        "export": "StatusMessageConfirm",
        range: {
          start: 4113,
          end: 4984
        }
      }, System, __varRecorder__, "StatusMessageConfirm");
      __varRecorder__.StatusMessageError = component["for"](function () {
        return component(__varRecorder__.StatusMessageDefault, {
          name: "status message error",
          fill: new LinearGradient({
            stops: [{
              offset: 0,
              color: Color.rgb(231, 76, 60)
            }, {
              offset: 1,
              color: Color.rgb(192, 57, 43)
            }],
            vector: rect(0, 0, 0, 1)
          }),
          submorphs: [{
            name: "horizontal float",
            submorphs: [{
              name: "message icon",
              fontColor: Color.rgb(255, 255, 255),
              fontSize: 20,
              textAndAttributes: Icon.textAttribute("times-circle")
            }, {
              name: "message title",
              fontColor: Color.white,
              textAndAttributes: ["An error occured", null]
            }, {
              name: "close button",
              submorphs: [{
                name: "label",
                fontColor: Color.white
              }]
            }]
          }, {
            name: "message text",
            fontColor: Color.white
          }]
        });
      }, {
        module: "lively.halos/components/messages.cp.js",
        "export": "StatusMessageError",
        range: {
          start: 4993,
          end: 5897
        }
      }, System, __varRecorder__, "StatusMessageError");
      __varRecorder__.StatusMessageWarning = component["for"](function () {
        return component(__varRecorder__.StatusMessageDefault, {
          name: "status message warning",
          borderColor: Color.rgbHex("DA9819"),
          fill: new LinearGradient({
            stops: [{
              offset: 0,
              color: Color.rgb(249, 213, 68)
            }, {
              offset: 1,
              color: Color.rgb(219, 162, 18)
            }],
            vector: rect(0.5, 1, 0, 1)
          })
        });
      }, {
        module: "lively.halos/components/messages.cp.js",
        "export": "StatusMessageWarning",
        range: {
          start: 5906,
          end: 6228
        }
      }, System, __varRecorder__, "StatusMessageWarning");
      var StatusMessageDefault = exports('StatusMessageDefault', __varRecorder__.StatusMessageDefault);
      var StatusMessageConfirm = exports('StatusMessageConfirm', __varRecorder__.StatusMessageConfirm);
      var StatusMessageError = exports('StatusMessageError', __varRecorder__.StatusMessageError);
      var StatusMessageWarning = exports('StatusMessageWarning', __varRecorder__.StatusMessageWarning);
      __varRecorder__.StatusMessageDefault = StatusMessageDefault;
      __varRecorder__.StatusMessageConfirm = StatusMessageConfirm;
      __varRecorder__.StatusMessageError = StatusMessageError;
      __varRecorder__.StatusMessageWarning = StatusMessageWarning;

    })
  };
}));
