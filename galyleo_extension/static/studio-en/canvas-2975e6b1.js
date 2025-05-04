System.register(['./__rootModule___commonjs-entry-039abf1b.js'], (function (exports) {
  var __contextModule__ = typeof module !== 'undefined' ? module : arguments[1];
;
  var initializeClass, connect, rect, pt, Color, Point, Morph;
  return {
    setters: [function (module) {
      initializeClass = module.i;
      connect = module.a;
      rect = module.ap;
      pt = module.b;
      Color = module.C;
      Point = module.bu;
      Morph = module.M;
    }],
    execute: (function () {

      var __varRecorder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.components/canvas.js", __contextModule__);
      var Canvas = exports('C', function (superclass) {
        var __lively_classholder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.components/canvas.js", __contextModule__);

        var __lively_class__ = __lively_classholder__.hasOwnProperty("Canvas") && typeof __lively_classholder__.Canvas === "function" ? __lively_classholder__.Canvas : __lively_classholder__.Canvas = function Canvas(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        if (Object.isFrozen(__lively_classholder__)) {
          return __lively_class__;
        }

        return initializeClass(__lively_class__, superclass, [{
          key: "context",
          get: function get() {
            if (this._canvas) {
              return this._canvas.getContext(this.contextType, {
                willReadFrequently: this.willReadFrequently
              });
            } else if (!this.world() || !this.env.renderer.getNodeForMorph(this)) {
              console.warn("Context not yet rendered. Please ensure that the Canvas Morph has been rendered first before accessing the context. This can be achieved by waiting for the whenRendered() promise before you proceed accessing the context property.");
            }

            return null;
          }
        }, {
          key: "_canvas",
          set: function set(new_canvas) {
            var old_canvas = this.__canvas__;
            this.__canvas__ = new_canvas;
            this.restoreContent(old_canvas, new_canvas);
          }
        }, {
          key: "_canvas",
          get: function get() {
            return this.__canvas__;
          }
        }, {
          key: Symbol["for"]("lively-instance-initialize"),
          value: function Canvas_initialize_() {
            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var _this;

            _this = initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), Symbol["for"]("lively-instance-initialize"), this).call(this, props);
            this.env.renderer.renderMorph(this, false, true);
            connect(this, "extent", this, "onExtentChanged");
            return _this;
          }
        }, {
          key: "isCanvas",
          get: function get() {
            return true;
          }
        }, {
          key: "afterRender",
          value: function Canvas_afterRender_(canvasNode, hasNewCanvasNode) {
            if (hasNewCanvasNode) this._canvas = canvasNode;else if (typeof this.__canvas_init__ === "function") {
              this.__canvas_init__();

              delete this.__canvas_init__;
            }
          }
        }, {
          key: "restoreContent",
          value: function Canvas_restoreContent_(old_canvas, new_canvas) {
            var contextType = this.contextType,
                preserveContents = this.preserveContents;

            if (typeof this.__canvas_init__ === "function") {
              this.__canvas_init__();

              delete this.__canvas_init__;
            } else if (preserveContents && contextType === "2d" && old_canvas && old_canvas !== new_canvas) {
              this.context.drawImage(old_canvas, 0, 0);
            }
          }
        }, {
          key: "onExtentChanged",
          value: function Canvas_onExtentChanged_() {
            var _this2 = this;

            if (this._canvas && this.preserveContents && this.context.getImageData) {
              var _this$_canvas = this._canvas,
                  w = _this$_canvas.width,
                  h = _this$_canvas.height;
              if (!w || !h) return;
              var contents = this.context.getImageData(0, 0, w, h);

              this.__canvas_init__ = function () {
                _this2.context.putImageData(contents, 0, 0);
              };
            }
          }
        }, {
          key: "clear",
          value: function Canvas_clear_(color) {
            var ctx = this.context;

            if (ctx) {
              var _this$_canvas2 = this._canvas,
                  w = _this$_canvas2.width,
                  h = _this$_canvas2.height;
              ctx.save();
              ctx.setTransform(1, 0, 0, 1, 0, 0);

              if (color) {
                if (color.toCSSString) color = color.toCSSString();
                ctx.fillStyle = color;
                ctx.fillRect(0, 0, w, h);
              } else {
                ctx.clearRect(0, 0, w, h);
              }

              ctx.restore();
            }
          }
        }, {
          key: "getNodeForRenderer",
          value: function Canvas_getNodeForRenderer_(renderer) {
            return renderer.nodeForCanvas(this);
          }
        }, {
          key: "patchSpecialProps",
          value: function Canvas_patchSpecialProps_(node) {
            var contents;
            var _this$_canvas3 = this._canvas,
                w = _this$_canvas3.width,
                h = _this$_canvas3.height;

            if (this.renderingState.width !== this.width) {
              if (this.context.getImageData && h > 0 && w > 0) {
                contents = this.context.getImageData(0, 0, w, h);
              }

              node.firstChild.width = this.width;
              this.renderingState.width = this.width;
            }

            if (this.renderingState.height !== this.height) {
              if (this.context.getImageData && h > 0 && w > 0) {
                contents = this.context.getImageData(0, 0, w, h);
              }

              node.firstChild.height = this.height;
              this.renderingState.height = this.height;
            }

            if (contents) this.context.putImageData(contents, 0, 0);
          }
        }, {
          key: "withContextDo",
          value: function Canvas_withContextDo_(func) {
            var _this3 = this;

            if (this._canvas) func(this.context);else this.__canvas_init__ = function () {
              return func(_this3.context);
            };
          }
        }, {
          key: "toDataURI",
          value: function Canvas_toDataURI_() {
            try {
              return this._canvas && this._canvas.toDataURL();
            } catch (err) {
              return err.message;
            }
          }
        }, {
          key: "fromDataURI",
          value: function Canvas_fromDataURI_(uri) {
            var _this4 = this;

            var img = new Image();

            img.onload = function () {
              _this4._canvas.width = img.width;
              _this4._canvas.height = img.height;

              _this4.context.drawImage(img, 0, 0);
            };

            img.src = uri;
          }
        }, {
          key: "imageData",
          value: function Canvas_imageData_(bounds) {
            if (!bounds) bounds = this.canvasBounds;
            var _bounds = bounds,
                x = _bounds.x,
                y = _bounds.y,
                width = _bounds.width,
                height = _bounds.height;
            return this.context.getImageData(x, y, width, height);
          }
        }, {
          key: "nonTransparentArea",
          value: function Canvas_nonTransparentArea_() {
            var imageData = this.imageData();
            var data = imageData.data,
                width = imageData.width,
                height = imageData.height;
            var minX = width;
            var minY = height;

            for (var y = 0; y < height; y++) {
              for (var x = 0; x < minX; x++) {
                if (data[(y * width + x) * 4 + 3] > 0) {
                  minX = x;
                  if (minY > y) minY = y;
                }
              }
            }

            if (minX === width) return rect(0, 0, 0, 0);
            var maxX = minX;
            var maxY = minY;

            for (var _y = height - 1; _y > minY; _y--) {
              for (var _x = width - 1; _x > maxX; _x--) {
                if (data[(_y * width + _x) * 4 + 3] > 0) {
                  maxX = _x;
                  if (maxY < _y) maxY = _y;
                }
              }
            }

            return {
              imageData: imageData,
              bounds: rect(minX, minY, maxX - minX + 1, maxY - minY + 1)
            };
          }
        }, {
          key: "trimNonTransparent",
          value: function Canvas_trimNonTransparent_() {
            var _this$nonTransparentA = this.nonTransparentArea(),
                imageData = _this$nonTransparentA.imageData,
                bounds = _this$nonTransparentA.bounds;

            if (!bounds.topLeft().equals(pt(0, 0))) {
              var context = this.context;
              var x = bounds.x,
                  y = bounds.y,
                  width = bounds.width,
                  height = bounds.height;
              context.putImageData(imageData, -x, -y, x, y, width, height);
              this.position = this.position.addPt(bounds.topLeft());
            }

            if (!bounds.extent().equals(this.extent)) {
              this.extent = bounds.extent();
            }
          }
        }, {
          key: "finishDraw",
          value: function Canvas_finishDraw_() {
            var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var c = this.context;
            var _style$color = style.color,
                color = _style$color === void 0 ? "rgba(0,0,0,0.6)" : _style$color,
                _style$width = style.width,
                width = _style$width === void 0 ? 4 : _style$width,
                _style$fill = style.fill,
                fill = _style$fill === void 0 ? false : _style$fill;
            var fillColor = style.fillColor || color;
            if (color.toCSSString) color = color.toCSSString();
            if (fillColor.toCSSString) fillColor = fillColor.toCSSString();
            c.strokeStyle = color;
            c.lineWidth = width;
            c.stroke();
            c.closePath();

            if (fill) {
              c.fillStyle = fillColor;
              c.fill();
            }
          }
        }, {
          key: "arc",
          value: function Canvas_arc_(center, radius, startTheta, endTheta) {
            var counterClockwise = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
            var style = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
            var c = this.context;
            c.beginPath();
            c.arc(center.x, center.y, radius, startTheta, endTheta, counterClockwise);
            this.finishDraw(style);
          }
        }, {
          key: "polygon",
          value: function Canvas_polygon_(vertices) {
            var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var c = this.context;
            c.beginPath();
            c.moveTo(vertices[0].x, vertices[0].y);

            for (var i = 0; i < vertices.length; i++) {
              c.lineTo(vertices[i].x, vertices[i].y);
            }

            c.lineTo(vertices[0].x, vertices[0].y);
            this.finishDraw(style);
          }
        }, {
          key: "text",
          value: function Canvas_text_(textString, atPt) {
            var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var ctx = this.context;
            var _style$color2 = style.color,
                color = _style$color2 === void 0 ? "black" : _style$color2,
                _style$font = style.font,
                font = _style$font === void 0 ? "14px Arial" : _style$font,
                _style$align = style.align,
                align = _style$align === void 0 ? "start" : _style$align,
                _style$baseline = style.baseline,
                baseline = _style$baseline === void 0 ? "bottom" : _style$baseline;
            ctx.save();
            ctx.font = font;
            ctx.fillStyle = color;
            ctx.textAlign = align;
            ctx.textBaseline = baseline;

            if (style.angle && !isNaN(style.angle)) {
              ctx.translate(atPt.x, atPt.y);
              ctx.rotate(style.angle);
              ctx.translate(-atPt.x, -atPt.y);
            }

            ctx.fillText(textString, atPt.x, atPt.y);
            ctx.restore();
          }
        }, {
          key: "line",
          value: function Canvas_line_(from, to) {
            var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var c = this.context;
            var color = style.color || "rgba(0,0,0,0.6)";
            var width = style.width || 4;
            if (color.toCSSString) color = color.toCSSString();
            c.strokeStyle = color;
            c.beginPath();
            c.lineWidth = width;
            c.moveTo(from.x, from.y);
            c.lineTo(to.x, to.y);
            c.stroke();
            c.closePath();
          }
        }, {
          key: "spiral",
          value: function Canvas_spiral_() {
            this.clear(Color.white);
            var start = this.innerBounds().center();
            var rotation = 0;
            var stepSize = 1;

            for (var i = 0; i < 150; i++) {
              var end = start.addPt(Point.polar(stepSize, rotation));
              this.line(start, end, {
                color: Color.random()
              });
              start = end;
              rotation += Math.PI / 10;
              stepSize += 0.3;
            }
          }
        }, {
          key: "rect",
          value: function Canvas_rect_(atPt, extent) {
            var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var c = this.context;
            c.beginPath();
            c.rect(atPt.x, atPt.y, extent.x, extent.y);
            this.finishDraw(style);
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "Canvas";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              extent: {
                defaultValue: pt(200, 200)
              },
              fill: {
                defaultValue: Color.transparent
              },
              contextType: {
                defaultValue: "2d"
              },
              willReadFrequently: {
                defaultValue: false
              },
              preserveContents: {
                defaultValue: true
              },
              canvasExtent: {
                get: function get() {
                  return this._canvas && pt(this._canvas.width, this._canvas.height);
                }
              },
              canvasBounds: {
                readOnly: true,
                get: function get() {
                  return this._canvas && this.canvasExtent.extentAsRectangle();
                }
              },
              _serializedContents: {
                get: function get() {
                  return this.preserveContents && this.toDataURI();
                },
                set: function set(s) {
                  var _this5 = this;

                  this.withContextDo(function () {
                    return _this5.fromDataURI(s);
                  });
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./canvas.js";
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
          start: 245,
          end: 9567
        });
      }({
        referencedAs: "Morph",
        value: Morph
      }));
      __varRecorder__.Canvas = Canvas;
      __varRecorder__.Canvas = Canvas;

    })
  };
}));
