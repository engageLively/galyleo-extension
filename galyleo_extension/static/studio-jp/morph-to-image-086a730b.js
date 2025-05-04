System.register(['./__rootModule___commonjs-entry-43c0966d.js'], (function (exports) {
  var __contextModule__ = typeof module !== 'undefined' ? module : arguments[1];
;
  var _asyncToGenerator, _createForOfIteratorHelper, _slicedToArray;
  return {
    setters: [function (module) {
      _asyncToGenerator = module._;
      _createForOfIteratorHelper = module.a6;
      _slicedToArray = module.o;
    }],
    execute: (function () {

      var exports$1 = {};
      (function (global) {
        var util = newUtil();
        var inliner = newInliner();
        var fontFaces = newFontFaces();
        var images = newImages();
        var defaultOptions = {
          imagePlaceholder: undefined,
          cacheBust: false,
          useCredentials: false
        };
        var domtoimage = {
          toSvg: toSvg,
          toPng: toPng,
          toJpeg: toJpeg,
          toBlob: toBlob,
          toPixelData: toPixelData,
          toCanvas: toCanvas,
          impl: {
            fontFaces: fontFaces,
            images: images,
            util: util,
            inliner: inliner,
            options: {}
          }
        };
        exports$1 = domtoimage;
        function toSvg(node, options) {
          options = options || {};
          copyOptions(options);
          return Promise.resolve(node).then(function (node) {
            return cloneNode(node, options.filter, true);
          }).then(embedFonts).then(inlineImages).then(applyOptions).then(function (clone) {
            return makeSvgDataUri(clone, options.width || util.width(node), options.height || util.height(node));
          });
          function applyOptions(clone) {
            if (options.bgcolor)
              clone.style.backgroundColor = options.bgcolor;
            if (options.width)
              clone.style.width = options.width + "px";
            if (options.height)
              clone.style.height = options.height + "px";
            if (options.style)
              Object.keys(options.style).forEach(function (property) {
                clone.style[property] = options.style[property];
              });
            return clone;
          }
        }
        function toPixelData(node, options) {
          return draw(node, options || {}).then(function (canvas) {
            return canvas.getContext("2d").getImageData(0, 0, util.width(node), util.height(node)).data;
          });
        }
        function toPng(node, options) {
          return draw(node, options || {}).then(function (canvas) {
            return canvas.toDataURL();
          });
        }
        function toJpeg(node, options) {
          options = options || {};
          return draw(node, options).then(function (canvas) {
            return canvas.toDataURL("image/jpeg", options.quality || 1);
          });
        }
        function toBlob(node, options) {
          return draw(node, options || {}).then(util.canvasToBlob);
        }
        function toCanvas(node, options) {
          return draw(node, options || {});
        }
        function copyOptions(options) {
          if (typeof options.imagePlaceholder === "undefined") {
            domtoimage.impl.options.imagePlaceholder = defaultOptions.imagePlaceholder;
          } else {
            domtoimage.impl.options.imagePlaceholder = options.imagePlaceholder;
          }
          if (typeof options.cacheBust === "undefined") {
            domtoimage.impl.options.cacheBust = defaultOptions.cacheBust;
          } else {
            domtoimage.impl.options.cacheBust = options.cacheBust;
          }
          if (typeof options.useCredentials === "undefined") {
            domtoimage.impl.options.useCredentials = defaultOptions.useCredentials;
          } else {
            domtoimage.impl.options.useCredentials = options.useCredentials;
          }
        }
        function draw(domNode, options) {
          return toSvg(domNode, options).then(util.makeImage).then(util.delay(100)).then(function (image) {
            var scale = typeof options.scale !== "number" ? 1 : options.scale;
            var canvas = newCanvas(domNode, scale);
            var ctx = canvas.getContext("2d");
            if (image) {
              ctx.scale(scale, scale);
              ctx.drawImage(image, 0, 0);
            }
            return canvas;
          });
          function newCanvas(domNode, scale) {
            var canvas = document.createElement("canvas");
            canvas.width = (options.width || util.width(domNode)) * scale;
            canvas.height = (options.height || util.height(domNode)) * scale;
            if (options.bgcolor) {
              var ctx = canvas.getContext("2d");
              ctx.fillStyle = options.bgcolor;
              ctx.fillRect(0, 0, canvas.width, canvas.height);
            }
            return canvas;
          }
        }
        function cloneNode(node, filter, root) {
          if (!root && filter && !filter(node))
            return Promise.resolve();
          return Promise.resolve(node).then(makeNodeCopy).then(function (clone) {
            return cloneChildren(node, clone, filter);
          }).then(function (clone) {
            return processClone(node, clone);
          });
          function makeNodeCopy(node) {
            if (node instanceof HTMLCanvasElement)
              return util.makeImage(node.toDataURL());
            return node.cloneNode(false);
          }
          function cloneChildren(original, clone, filter) {
            var children = original.childNodes;
            if (children.length === 0)
              return Promise.resolve(clone);
            return cloneChildrenInOrder(clone, util.asArray(children), filter).then(function () {
              return clone;
            });
            function cloneChildrenInOrder(parent, children, filter) {
              var done = Promise.resolve();
              children.forEach(function (child) {
                done = done.then(function () {
                  return cloneNode(child, filter);
                }).then(function (childClone) {
                  if (childClone)
                    parent.appendChild(childClone);
                });
              });
              return done;
            }
          }
          function processClone(original, clone) {
            if (!(clone instanceof Element))
              return clone;
            return Promise.resolve().then(cloneStyle).then(clonePseudoElements).then(copyUserInput).then(fixSvg).then(function () {
              return clone;
            });
            function cloneStyle() {
              copyStyle(window.getComputedStyle(original), clone.style);
              function copyStyle(source, target) {
                if (source.cssText) {
                  target.cssText = source.cssText;
                  target.font = source.font;
                } else
                  copyProperties(source, target);
                function copyProperties(source, target) {
                  util.asArray(source).forEach(function (name) {
                    target.setProperty(name, source.getPropertyValue(name), source.getPropertyPriority(name));
                  });
                }
              }
            }
            function clonePseudoElements() {
              [
                ":before",
                ":after"
              ].forEach(function (element) {
                clonePseudoElement(element);
              });
              function clonePseudoElement(element) {
                var style = window.getComputedStyle(original, element);
                var content = style.getPropertyValue("content");
                if (content === "" || content === "none")
                  return;
                var className = util.uid();
                var currentClass = clone.getAttribute("class");
                if (currentClass) {
                  clone.setAttribute("class", currentClass + " " + className);
                }
                var styleElement = document.createElement("style");
                styleElement.appendChild(formatPseudoElementStyle(className, element, style));
                clone.appendChild(styleElement);
                function formatPseudoElementStyle(className, element, style) {
                  var selector = "." + className + ":" + element;
                  var cssText = style.cssText ? formatCssText(style) : formatCssProperties(style);
                  return document.createTextNode(selector + "{" + cssText + "}");
                  function formatCssText(style) {
                    var content = style.getPropertyValue("content");
                    return style.cssText + " content: " + content + ";";
                  }
                  function formatCssProperties(style) {
                    return util.asArray(style).map(formatProperty).join("; ") + ";";
                    function formatProperty(name) {
                      return name + ": " + style.getPropertyValue(name) + (style.getPropertyPriority(name) ? " !important" : "");
                    }
                  }
                }
              }
            }
            function copyUserInput() {
              if (original instanceof HTMLTextAreaElement)
                clone.innerHTML = original.value;
              if (original instanceof HTMLInputElement)
                clone.setAttribute("value", original.value);
            }
            function fixSvg() {
              if (!(clone instanceof SVGElement))
                return;
              clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
              if (!(clone instanceof SVGRectElement))
                return;
              [
                "width",
                "height"
              ].forEach(function (attribute) {
                var value = clone.getAttribute(attribute);
                if (!value)
                  return;
                clone.style.setProperty(attribute, value);
              });
            }
          }
        }
        function embedFonts(node) {
          return fontFaces.resolveAll().then(function (cssText) {
            var styleNode = document.createElement("style");
            node.appendChild(styleNode);
            styleNode.appendChild(document.createTextNode(cssText));
            return node;
          });
        }
        function inlineImages(node) {
          return images.inlineAll(node).then(function () {
            return node;
          });
        }
        function makeSvgDataUri(node, width, height) {
          return Promise.resolve(node).then(function (node) {
            node.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
            return new XMLSerializer().serializeToString(node);
          }).then(util.escapeXhtml).then(function (xhtml) {
            return "<foreignObject x=\"0\" y=\"0\" width=\"100%\" height=\"100%\">" + xhtml + "</foreignObject>";
          }).then(function (foreignObject) {
            return "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"" + width + "\" height=\"" + height + "\">" + foreignObject + "</svg>";
          }).then(function (svg) {
            return "data:image/svg+xml;charset=utf-8," + svg;
          });
        }
        function newUtil() {
          return {
            escape: escape,
            parseExtension: parseExtension,
            mimeType: mimeType,
            dataAsUrl: dataAsUrl,
            isDataUrl: isDataUrl,
            canvasToBlob: canvasToBlob,
            resolveUrl: resolveUrl,
            getAndEncode: getAndEncode,
            uid: uid(),
            delay: delay,
            asArray: asArray,
            escapeXhtml: escapeXhtml,
            makeImage: makeImage,
            width: width,
            height: height
          };
          function mimes() {
            var WOFF = "application/font-woff";
            var JPEG = "image/jpeg";
            return {
              "woff": WOFF,
              "woff2": WOFF,
              "ttf": "application/font-truetype",
              "eot": "application/vnd.ms-fontobject",
              "png": "image/png",
              "jpg": JPEG,
              "jpeg": JPEG,
              "gif": "image/gif",
              "tiff": "image/tiff",
              "svg": "image/svg+xml"
            };
          }
          function parseExtension(url) {
            var match = /\.([^\.\/]*?)(\?|$)/g.exec(url);
            if (match)
              return match[1];
            else
              return "";
          }
          function mimeType(url) {
            var extension = parseExtension(url).toLowerCase();
            return mimes()[extension] || "";
          }
          function isDataUrl(url) {
            return url.search(/^(data:)/) !== -1;
          }
          function toBlob(canvas) {
            return new Promise(function (resolve) {
              var binaryString = window.atob(canvas.toDataURL().split(",")[1]);
              var length = binaryString.length;
              var binaryArray = new Uint8Array(length);
              for (var i = 0; i < length; i++)
                binaryArray[i] = binaryString.charCodeAt(i);
              resolve(new Blob([binaryArray], { type: "image/png" }));
            });
          }
          function canvasToBlob(canvas) {
            if (canvas.toBlob)
              return new Promise(function (resolve) {
                canvas.toBlob(resolve);
              });
            return toBlob(canvas);
          }
          function resolveUrl(url, baseUrl) {
            var doc = document.implementation.createHTMLDocument();
            var base = doc.createElement("base");
            doc.head.appendChild(base);
            var a = doc.createElement("a");
            doc.body.appendChild(a);
            base.href = baseUrl;
            a.href = url;
            return a.href;
          }
          function uid() {
            var index = 0;
            return function () {
              return "u" + fourRandomChars() + index++;
              function fourRandomChars() {
                return ("0000" + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
              }
            };
          }
          function makeImage(uri) {
            if (uri === "data:,")
              return Promise.resolve();
            return new Promise(function (resolve, reject) {
              var image = new Image();
              if (domtoimage.impl.options.useCredentials) {
                image.crossOrigin = "use-credentials";
              }
              image.onload = function () {
                resolve(image);
              };
              image.onerror = reject;
              image.src = uri;
            });
          }
          function getAndEncode(url) {
            var TIMEOUT = 30000;
            if (domtoimage.impl.options.cacheBust) {
              url += (/\?/.test(url) ? "&" : "?") + new Date().getTime();
            }
            return new Promise(function (resolve) {
              var request = new XMLHttpRequest();
              request.onreadystatechange = done;
              request.ontimeout = timeout;
              request.responseType = "blob";
              request.timeout = TIMEOUT;
              if (domtoimage.impl.options.useCredentials) {
                request.withCredentials = true;
              }
              request.open("GET", url, true);
              request.send();
              var placeholder;
              if (domtoimage.impl.options.imagePlaceholder) {
                var split = domtoimage.impl.options.imagePlaceholder.split(/,/);
                if (split && split[1]) {
                  placeholder = split[1];
                }
              }
              function done() {
                if (request.readyState !== 4)
                  return;
                if (request.status !== 200) {
                  if (placeholder) {
                    resolve(placeholder);
                  } else {
                    fail("cannot fetch resource: " + url + ", status: " + request.status);
                  }
                  return;
                }
                var encoder = new FileReader();
                encoder.onloadend = function () {
                  var content = encoder.result.split(/,/)[1];
                  resolve(content);
                };
                encoder.readAsDataURL(request.response);
              }
              function timeout() {
                if (placeholder) {
                  resolve(placeholder);
                } else {
                  fail("timeout of " + TIMEOUT + "ms occured while fetching resource: " + url);
                }
              }
              function fail(message) {
                console.error(message);
                resolve("");
              }
            });
          }
          function dataAsUrl(content, type) {
            return "data:" + type + ";base64," + content;
          }
          function escape(string) {
            return string.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
          }
          function delay(ms) {
            return function (arg) {
              return new Promise(function (resolve) {
                setTimeout(function () {
                  resolve(arg);
                }, ms);
              });
            };
          }
          function asArray(arrayLike) {
            var array = [];
            var length = arrayLike.length;
            for (var i = 0; i < length; i++)
              array.push(arrayLike[i]);
            return array;
          }
          function escapeXhtml(string) {
            return string.replace(/#/g, "%23").replace(/\n/g, "%0A");
          }
          function width(node) {
            var leftBorder = px(node, "border-left-width");
            var rightBorder = px(node, "border-right-width");
            return node.scrollWidth + leftBorder + rightBorder;
          }
          function height(node) {
            var topBorder = px(node, "border-top-width");
            var bottomBorder = px(node, "border-bottom-width");
            return node.scrollHeight + topBorder + bottomBorder;
          }
          function px(node, styleProperty) {
            var value = window.getComputedStyle(node).getPropertyValue(styleProperty);
            return parseFloat(value.replace("px", ""));
          }
        }
        function newInliner() {
          var URL_REGEX = /url\(['"]?([^'"]+?)['"]?\)/g;
          return {
            inlineAll: inlineAll,
            shouldProcess: shouldProcess,
            impl: {
              readUrls: readUrls,
              inline: inline
            }
          };
          function shouldProcess(string) {
            return string.search(URL_REGEX) !== -1;
          }
          function readUrls(string) {
            var result = [];
            var match;
            while ((match = URL_REGEX.exec(string)) !== null) {
              result.push(match[1]);
            }
            return result.filter(function (url) {
              return !util.isDataUrl(url);
            });
          }
          function inline(string, url, baseUrl, get) {
            return Promise.resolve(url).then(function (url) {
              return baseUrl ? util.resolveUrl(url, baseUrl) : url;
            }).then(get || util.getAndEncode).then(function (data) {
              return util.dataAsUrl(data, util.mimeType(url));
            }).then(function (dataUrl) {
              return string.replace(urlAsRegex(url), "$1" + dataUrl + "$3");
            });
            function urlAsRegex(url) {
              return new RegExp("(url\\(['\"]?)(" + util.escape(url) + ")(['\"]?\\))", "g");
            }
          }
          function inlineAll(string, baseUrl, get) {
            if (nothingToInline())
              return Promise.resolve(string);
            return Promise.resolve(string).then(readUrls).then(function (urls) {
              var done = Promise.resolve(string);
              urls.forEach(function (url) {
                done = done.then(function (string) {
                  return inline(string, url, baseUrl, get);
                });
              });
              return done;
            });
            function nothingToInline() {
              return !shouldProcess(string);
            }
          }
        }
        function newFontFaces() {
          return {
            resolveAll: resolveAll,
            impl: { readAll: readAll }
          };
          function resolveAll() {
            return readAll().then(function (webFonts) {
              return Promise.all(webFonts.map(function (webFont) {
                return webFont.resolve();
              }));
            }).then(function (cssStrings) {
              return cssStrings.join("\n");
            });
          }
          function readAll() {
            return Promise.resolve(util.asArray(document.styleSheets)).then(getCssRules).then(selectWebFontRules).then(function (rules) {
              return rules.map(newWebFont);
            });
            function selectWebFontRules(cssRules) {
              return cssRules.filter(function (rule) {
                return rule.type === CSSRule.FONT_FACE_RULE;
              }).filter(function (rule) {
                return inliner.shouldProcess(rule.style.getPropertyValue("src"));
              });
            }
            function getCssRules(styleSheets) {
              var cssRules = [];
              styleSheets.forEach(function (sheet) {
                if (sheet.hasOwnProperty("cssRules")) {
                  try {
                    util.asArray(sheet.cssRules || []).forEach(cssRules.push.bind(cssRules));
                  } catch (e) {
                    console.log("Error while reading CSS rules from " + sheet.href, e.toString());
                  }
                }
              });
              return cssRules;
            }
            function newWebFont(webFontRule) {
              return {
                resolve: function resolve() {
                  var baseUrl = (webFontRule.parentStyleSheet || {}).href;
                  return inliner.inlineAll(webFontRule.cssText, baseUrl);
                },
                src: function () {
                  return webFontRule.style.getPropertyValue("src");
                }
              };
            }
          }
        }
        function newImages() {
          return {
            inlineAll: inlineAll,
            impl: { newImage: newImage }
          };
          function newImage(element) {
            return { inline: inline };
            function inline(get) {
              if (util.isDataUrl(element.src))
                return Promise.resolve();
              return Promise.resolve(element.src).then(get || util.getAndEncode).then(function (data) {
                return util.dataAsUrl(data, util.mimeType(element.src));
              }).then(function (dataUrl) {
                return new Promise(function (resolve, reject) {
                  element.onload = resolve;
                  element.onerror = resolve;
                  element.src = dataUrl;
                });
              });
            }
          }
          function inlineAll(node) {
            if (!(node instanceof Element))
              return Promise.resolve(node);
            return inlineBackground(node).then(function () {
              if (node instanceof HTMLImageElement)
                return newImage(node).inline();
              else
                return Promise.all(util.asArray(node.childNodes).map(function (child) {
                  return inlineAll(child);
                }));
            });
            function inlineBackground(node) {
              var background = node.style.getPropertyValue("background");
              if (!background)
                return Promise.resolve(node);
              return inliner.inlineAll(background).then(function (inlined) {
                node.style.setProperty("background", inlined, node.style.getPropertyPriority("background"));
              }).then(function () {
                return node;
              });
            }
          }
        }
      }());
      var exports$1$1 = exports$1;

      var __varRecorder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.morphic/rendering/morph-to-image.js", __contextModule__);
      var __moduleMeta__ = {
        pathInPackage: function pathInPackage() {
          return "./rendering/morph-to-image.js";
        },
        unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
          return function () {};
        },
        subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
          return function () {};
        },
        "package": function _package() {
          return {
            name: "lively.morphic",
            version: "0.1.2"
          };
        }
      };

      var fixNodejs = __varRecorder__["lively.morphic/rendering/morph-to-image.js__define__"]("fixNodejs", "function", function (document, window) {
        var global = System.global;
        var globals = ["HTMLCanvasElement", "Element", "HTMLTextAreaElement", "HTMLInputElement", "SVGElement", "SVGRectElement", "XMLSerializer", "Blob", "Image", "XMLHttpRequest", "FileReader", "CSSRule", "HTMLImageElement"];

        if (!window.XMLSerializer) {
          window.XMLSerializer = function XMLSerializer_hack() {};

          window.XMLSerializer.prototype.serializeToString = function (el) {
            return el.outerHTML;
          };
        }

        if (global.window !== window) global.window = window;
        if (global.document !== document) global.document = document;

        for (var _i = 0, _globals = globals; _i < _globals.length; _i++) {
          var glob = _globals[_i];

          if (!window[glob]) {
            console.log("".concat(glob, " is not available!"));
            window[glob] = eval("(function ".concat(glob, "() { throw new Error(\"").concat(glob, " not supported\"); })"));
          }

          if (window[glob] == global[glob]) continue;
          global[glob] = window[glob];
        }
      }, __moduleMeta__);

      __varRecorder__.fixNodejs = fixNodejs;

      var renderMorphToDataURI = exports('renderMorphToDataURI', __varRecorder__["lively.morphic/rendering/morph-to-image.js__define__"]("renderMorphToDataURI", "function", /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(morph) {
          var opts,
              htmlMorphRestoreMap,
              actualRenderOnGPU,
              _morph$env$domEnv,
              document,
              window,
              node,
              wrapper,
              canvas,
              width,
              height,
              _opts$type,
              type,
              domBounds,
              method,
              dataUrl,
              _iterator,
              _step,
              _step$value,
              htmlMorph,
              _step$value$,
              domNode,
              parentNode,
              _args = arguments;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  opts = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                  htmlMorphRestoreMap = new Map();
                  morph.withAllSubmorphsDo(function (ea) {
                    return ea.isHTMLMorph && htmlMorphRestoreMap.set(ea, {
                      domNode: ea.domNode,
                      parentNode: ea.domNode.parentNode
                    });
                  });
                  actualRenderOnGPU = morph.renderOnGPU;
                  morph.renderOnGPU = true;
                  _context.next = 7;
                  return morph.whenRendered();

                case 7:
                  _morph$env$domEnv = morph.env.domEnv, document = _morph$env$domEnv.document, window = _morph$env$domEnv.window;
                  node = morph.renderPreview(Object.assign({}, opts, {
                    asNode: true
                  }));
                  wrapper = document.createElement("div");
                  canvas = document.createElement("div");
                  width = opts.width, height = opts.height, _opts$type = opts.type, type = _opts$type === void 0 ? "svg" : _opts$type;

                  if (System.get("@system-env").node) {
                    __varRecorder__.fixNodejs(document, window);
                  }

                  _context.prev = 13;
                  wrapper.style.overflow = "hidden";
                  wrapper.style.width = "1px";
                  wrapper.style.height = "1px";
                  wrapper.style.position = "absolute";
                  document.body.appendChild(wrapper);
                  wrapper.appendChild(canvas);
                  canvas.appendChild(node);
                  domBounds = width && height ? null : node.getBoundingClientRect();
                  if (!width) canvas.style.width = Math.ceil(domBounds.width + morph.borderWidth * 2) + "px";
                  if (!height) canvas.style.height = Math.ceil(domBounds.height + morph.borderWidth * 2) + "px";
                  canvas.style.width = width + "px";
                  canvas.style.height = height + "px";
                  method = __varRecorder__.typeMethodMap[type] || "toSvg";
                  _context.next = 29;
                  return exports$1$1[method](canvas, {
                    style: {
                      transform: "scale(.7)",
                      "transform-origin": "center"
                    }
                  });

                case 29:
                  dataUrl = _context.sent;
                  return _context.abrupt("return", dataUrl);

                case 31:
                  _context.prev = 31;
                  morph.renderOnGPU = actualRenderOnGPU;
                  wrapper.parentNode && wrapper.parentNode.removeChild(wrapper);
                  _iterator = _createForOfIteratorHelper(htmlMorphRestoreMap);

                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                      _step$value = _slicedToArray(_step.value, 2), htmlMorph = _step$value[0], _step$value$ = _step$value[1], domNode = _step$value$.domNode, parentNode = _step$value$.parentNode;

                      if (domNode && parentNode && domNode.parentNode !== parentNode) {
                        parentNode.appendChild(domNode);
                      }
                    }
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }

                  return _context.finish(31);

                case 37:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[13,, 31, 37]]);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), __moduleMeta__));

      __varRecorder__.renderMorphToDataURI = renderMorphToDataURI;
      __varRecorder__.typeMethodMap = {
        blob: "toBlob",
        jpeg: "toJpeg",
        pixeldata: "toPixelData",
        png: "toPng",
        svg: "toSvg"
      };
      __varRecorder__.renderMorphToDataURI = renderMorphToDataURI;

    })
  };
}));
