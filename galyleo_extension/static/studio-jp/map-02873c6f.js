System.register(['./__rootModule___commonjs-entry-43c0966d.js', './canvas-50704c02.js'], (function (exports) {
  var __contextModule__ = typeof module !== 'undefined' ? module : arguments[1];
;
  var initializeClass, connect, pt, throttleNamed, _createForOfIteratorHelper, Color, delay, addClassMappings, Canvas;
  return {
    setters: [function (module) {
      initializeClass = module.i;
      connect = module.a;
      pt = module.b;
      throttleNamed = module.cM;
      _createForOfIteratorHelper = module.a6;
      Color = module.C;
      delay = module.l;
      addClassMappings = module.c1;
    }, function (module) {
      Canvas = module.C;
    }],
    execute: (function () {

      var __varRecorder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/text/map.js", __contextModule__);

      var TextMap = exports('default', function (superclass) {
        var __lively_classholder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/text/map.js", __contextModule__);

        var __lively_class__ = __lively_classholder__.hasOwnProperty("TextMap") && typeof __lively_classholder__.TextMap === "function" ? __lively_classholder__.TextMap : __lively_classholder__.TextMap = function TextMap(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        if (Object.isFrozen(__lively_classholder__)) {
          return __lively_class__;
        }

        return initializeClass(__lively_class__, superclass, [{
          key: "isTextMap",
          get: function get() {
            return true;
          }
        }, {
          key: "onChange",
          value: function TextMap_onChange_(change) {
            if (change.prop === "extent") this.update();
            return initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "onChange", this).call(this, change);
          }
        }, {
          key: "reset",
          value: function TextMap_reset_() {
            this.border = {
              width: 0
            };
            this.preserveContents = true;
          }
        }, {
          key: "attachTo",
          value: function TextMap_attachTo_(textMorph) {
            var add = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            if (this.textMorph) this.detachFrom(this.textMorph);
            this.textMorph = textMorph;
            textMorph.textMap = this;
            connect(textMorph, "viewChange", this, "updateDebounced");
            connect(textMorph, "textChange", this, "updateDebounced");
            connect(textMorph, "selectionChange", this, "updateDebounced");

            if (add) {
              this.textMorph.addMorph(this);
              this.height = this.textMorph.height - this.textMorph.padding.top() - 20;
            }

            this.updateDebounced();
          }
        }, {
          key: "detachFromCurrentTextMorph",
          value: function TextMap_detachFromCurrentTextMorph_() {
            this.detachFrom(this.textMorph);
            this.textMorph = null;
          }
        }, {
          key: "detachFrom",
          value: function TextMap_detachFrom_(textMorph) {
            var _this = this;

            if (!textMorph) return;
            textMorph.attributeConnections.forEach(function (con) {
              return con.targetObj === _this && con.disconnect();
            });
          }
        }, {
          key: "updateDebounced",
          value: function TextMap_updateDebounced_() {
            var _this2 = this;

            if (this.owner === this.textMorph) {
              if ($world.get("search widget")) {
                this.height = this.textMorph.height - this.textMorph.padding.top() - 75;
                this.position = pt(this.textMorph.width - this.width - 20, this.textMorph.padding.top() + 60 + this.textMorph.scroll.y);
              } else {
                this.height = this.textMorph.height - this.textMorph.padding.top() - 20;
                this.position = pt(this.textMorph.width - this.width - 20, this.textMorph.padding.top() + 5 + this.textMorph.scroll.y);
              }
            }

            throttleNamed("update-" + this.id, 100, function () {
              return _this2.update();
            })();
          }
        }, {
          key: "measure",
          get: function get() {
            var width = this.width,
                height = this.height,
                textMorph = this.textMorph;
            if (!textMorph) return;
            var doc = textMorph.document;
            var heightPerLine = Math.min(2, height / doc.lines.length);
            var widthPerChar = 0.5;
            return {
              width: width,
              height: height,
              heightPerLine: heightPerLine,
              widthPerChar: widthPerChar
            };
          }
        }, {
          key: "update",
          value: function TextMap_update_() {
            var ctx = this.context,
                textMorph = this.textMorph;
            var measure = this.measure;
            if (!measure) return;
            var width = measure.width,
                height = measure.height,
                heightPerLine = measure.heightPerLine,
                widthPerChar = measure.widthPerChar;

            function highlightRange(range, color) {
              var start = range.start,
                  end = range.end;
              var selHeight = Math.max((end.row - start.row + 1) * heightPerLine, 1);
              ctx.fillStyle = color;
              ctx.fillRect(0, start.row * heightPerLine, width, selHeight);
            }

            var doc = textMorph.document,
                textLayout = textMorph.textLayout,
                markers = textMorph.markers,
                selections = textMorph.selections;

            var _textLayout$whatsVisi = textLayout.whatsVisible(textMorph),
                startRow = _textLayout$whatsVisi.startRow,
                endRow = _textLayout$whatsVisi.endRow;

            if (!ctx) {
              this.env.forceUpdate();
              this.update();
              return;
            }

            this.clear(null);
            ctx.fillStyle = "rgba(0,0,0, 0.1)";
            ctx.fillRect(0, 0, width, startRow * heightPerLine);
            ctx.fillStyle = "rgba(0,0,0, 0.1)";
            ctx.fillRect(0, endRow * heightPerLine, width, height - endRow * heightPerLine);
            var y = 0;
            ctx.beginPath();
            ctx.lineWidth = Math.max(1, heightPerLine - 0.3);
            ctx.strokeStyle = "gray";

            var _iterator = _createForOfIteratorHelper(doc.lines),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var line = _step.value;
                var text = line.text;
                var length = text.length;
                var lengthNoTrailingSpace = text.trimLeft().length;
                var x = length - lengthNoTrailingSpace;
                ctx.moveTo(x, y);
                ctx.lineTo(x + lengthNoTrailingSpace * widthPerChar, y);
                y += heightPerLine;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            ctx.stroke();
            ctx.beginPath();
            ctx.strokeStyle = "black";
            ctx.moveTo(0, startRow * heightPerLine);
            ctx.lineTo(width, startRow * heightPerLine);
            ctx.moveTo(0, endRow * heightPerLine);
            ctx.lineTo(width, endRow * heightPerLine);
            ctx.stroke();
            ctx.fillStyle = "blue";

            var _iterator2 = _createForOfIteratorHelper(selections),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var sel = _step2.value;

                if (!sel.isEmpty()) {
                  highlightRange(sel, "rgba(3,169,244,0.56)", true);
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            var _iterator3 = _createForOfIteratorHelper(markers),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var marker = _step3.value;
                var color = marker.style["background-color"] || "red";

                if (typeof color === "string") {
                  var col = Color.fromString(color);

                  if (col && col.a < 0.5) {
                    col.a = 0.9;
                    color = col.toRGBAString();
                  }
                }

                highlightRange(marker.range, color, true);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        }, {
          key: "onMouseDown",
          value: function TextMap_onMouseDown_(evt) {
            var _this3 = this;

            var textMorph = this.textMorph,
                heightPerLine = this.measure.heightPerLine;
            var pos = evt.positionIn(this);
            var row = Math.round(pos.y / heightPerLine);
            textMorph.scrollPositionIntoView({
              row: row,
              column: 0
            });
            delay(100).then(function () {
              return _this3.update();
            });
          }
        }, {
          key: "onDrag",
          value: function TextMap_onDrag_(evt) {
            if (!this.textMorph) return;
            this.onMouseDown(evt);
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "TextMap";
          }
        }, {
          key: "openInside",
          value: function TextMap_openInside_(textMorph) {
            var map = new __varRecorder__.TextMap();
            map.attachTo(textMorph, true);
            return map;
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              textMorph: {
                serialize: false
              },
              relativeBoundsInTextMorph: {},
              extent: {
                defaultValue: pt(60, 50)
              },
              markers: {},
              draggable: {
                defaultValue: true
              },
              willReadFrequently: {
                defaultValue: true
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./text/map.js";
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
          start: 264,
          end: 5621
        });
      }({
        referencedAs: "Canvas",
        value: Canvas
      }));
      addClassMappings({
        textmap: __varRecorder__.TextMap
      });
      __varRecorder__["default"] = TextMap;

    })
  };
}));
