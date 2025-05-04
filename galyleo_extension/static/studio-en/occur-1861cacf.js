System.register(['./__rootModule___commonjs-entry-039abf1b.js', './search-cf1a5c4c.js'], (function (exports) {
  var __contextModule__ = typeof module !== 'undefined' ? module : arguments[1];
;
  var KeyHandler, initializeClass, inspect, dissoc, groupBy, TextSearcher;
  return {
    setters: [function (module) {
      KeyHandler = module.aS;
      initializeClass = module.i;
      inspect = module.aA;
      dissoc = module.y;
      groupBy = module.be;
    }, function (module) {
      TextSearcher = module.TextSearcher;
    }],
    execute: (function () {

      var __varRecorder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/text/occur.js", __contextModule__);
      var __moduleMeta__ = {
        pathInPackage: function pathInPackage() {
          return "./text/occur.js";
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
      };

      var findOccurPlugin = __varRecorder__["lively.ide/text/occur.js__define__"]("findOccurPlugin", "function", function (textMorph) {
        return textMorph.plugins.slice().reverse().find(function (ea) {
          return ea.isOccurPlugin;
        });
      }, __moduleMeta__);

      __varRecorder__.findOccurPlugin = findOccurPlugin;
      __varRecorder__.occurKeyHandler = Object.assign(KeyHandler.withBindings([{
        keys: "Escape|Ctrl-G",
        command: "occur exit"
      }, {
        keys: "Enter",
        command: "occur accept"
      }]), {
        isOccurHandler: true
      });
      __varRecorder__.occurStartCommand = {
        name: "occur",
        exec: function exec(textMorph) {
          var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          if (opts.needle) {
            textMorph.addPlugin(new __varRecorder__.Occur(opts));
          }

          textMorph.focus();
          return !!opts.needle;
        }
      };
      var occurStartCommand = exports('occurStartCommand', __varRecorder__.occurStartCommand);
      __varRecorder__.occurStartCommand = occurStartCommand;
      __varRecorder__.occurCommands = [{
        name: "occur exit",
        exec: function exec(textMorph) {
          var occur = __varRecorder__.findOccurPlugin(textMorph);

          if (!occur) return false;
          occur.options.translatePosition = true;
          textMorph.removePlugin(occur);

          var otherOccur = __varRecorder__.findOccurPlugin(textMorph);

          if (otherOccur) otherOccur.highlight();
          return true;
        },
        readOnly: true
      }, {
        name: "occur accept",
        bindKey: "Enter",
        exec: function exec(textMorph) {
          var occur = __varRecorder__.findOccurPlugin(textMorph);

          if (!occur) return false;
          occur.options.translatePosition = true;
          textMorph.removePlugin(occur);

          var otherOccur = __varRecorder__.findOccurPlugin(textMorph);

          if (otherOccur) otherOccur.highlight();
          return true;
        },
        readOnly: true
      }];
      var Occur = exports('Occur', function (superclass) {
        var __lively_classholder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/text/occur.js", __contextModule__);

        var __lively_class__ = __lively_classholder__.hasOwnProperty("Occur") && typeof __lively_classholder__.Occur === "function" ? __lively_classholder__.Occur : __lively_classholder__.Occur = function Occur(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        if (Object.isFrozen(__lively_classholder__)) {
          return __lively_class__;
        }

        return initializeClass(__lively_class__, superclass, [{
          key: Symbol["for"]("lively-instance-initialize"),
          value: function Occur_initialize_() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.options = options;

            if (options.textMorph) {
              this.textMorph = options.textMorph;
            }
          }
        }, {
          key: "__serialize__",
          value: function Occur___serialize___() {
            return {
              __expr__: "new Occur(".concat(inspect(dissoc(this.options, ["textMorph"])), ")"),
              bindings: {
                "lively.morphic/text/occur.js": ["Occur"]
              }
            };
          }
        }, {
          key: "isOccurPlugin",
          get: function get() {
            return true;
          }
        }, {
          key: "attach",
          value: function Occur_attach_(textMorph) {
            this.textMorph = textMorph;
            var pos = this.textMorph.cursorPosition;
            var notEmpty = this.displayOccurContent(this.options);

            if (notEmpty) {
              var translatedPos = this.originalToOccurPosition(pos);
              this.textMorph.cursorPosition = translatedPos;
            }

            return this;
          }
        }, {
          key: "detach",
          value: function Occur_detach_(textMorph) {
            this.removeHighlight();
            var pos = this.options.translatePosition && this.textMorph.cursorPosition;
            var translatedPos = pos && this.occurToOriginalPosition(pos);
            this.displayOriginalContent();

            if (translatedPos) {
              this.textMorph.cursorPosition = translatedPos;
            }

            this.textMorph = null;
            return this;
          }
        }, {
          key: "getKeyHandlers",
          value: function Occur_getKeyHandlers_(morphKeyHandlers) {
            return morphKeyHandlers.concat(__varRecorder__.occurKeyHandler);
          }
        }, {
          key: "getCommands",
          value: function Occur_getCommands_(morphCommands) {
            return __varRecorder__.occurCommands.concat(morphCommands);
          }
        }, {
          key: "matchingLines",
          value: function Occur_matchingLines_() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
              needle: ""
            };
            if (!options.needle) return [];
            var lines = this.textMorph.document.lineStrings;
            var search = new TextSearcher(this.textMorph);
            var found = search.searchForAll(Object.assign({}, options, {
              start: {
                column: 0,
                row: 0
              }
            }));
            return groupBy(found, function (_ref) {
              var row = _ref.range.start.row;
              return row;
            }).mapGroups(function (_, foundInRow) {
              var row = foundInRow[0].range.start.row;
              return {
                row: row,
                ranges: foundInRow.map(function (_ref2) {
                  var range = _ref2.range;
                  return range;
                }),
                line: lines[row]
              };
            }).toArray();
          }
        }, {
          key: "displayOccurContent",
          value: function Occur_displayOccurContent_(options) {
            this._originalDocument = this.textMorph.document;
            var Document = this._originalDocument.constructor;
            var found = this.matchingLines(options);
            var lines = found.map(function (_ref3) {
              var line = _ref3.line;
              return line;
            });
            var occurDocument = this._document = new Document(lines);
            occurDocument._occurMatchingLines = found;

            if (found.length > 0) {
              this.textMorph.changeDocument(occurDocument, true);
              this.highlight(options.needle);
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "displayOriginalContent",
          value: function Occur_displayOriginalContent_() {
            this.textMorph.changeDocument(this._originalDocument);
          }
        }, {
          key: "occurToOriginalPosition",
          value: function Occur_occurToOriginalPosition_(pos) {
            var lines = this._document._occurMatchingLines;
            if (!lines || !lines[pos.row]) return pos;
            return {
              row: lines[pos.row].row,
              column: pos.column
            };
          }
        }, {
          key: "originalToOccurPosition",
          value: function Occur_originalToOccurPosition_(pos) {
            var lines = this._document._occurMatchingLines;
            var nullPos = {
              row: 0,
              column: 0
            };
            if (!lines) return nullPos;

            for (var i = 0; i < lines.length; i++) {
              if (lines[i].row === pos.row) {
                return {
                  row: i,
                  column: pos.column
                };
              }
            }

            return nullPos;
          }
        }, {
          key: "highlight",
          value: function Occur_highlight_(needle) {
            var _this = this;

            this.removeHighlight();
            var style = {
              borderRadius: "4px",
              backgroundColor: "rgba(87, 255, 8, 0.25)",
              position: "absolute",
              "-moz-box-sizing": "border-box",
              "-webkit-box-sizing": "border-box",
              "box-sizing": "border-box",
              "box-shadow": "0 0 4px rgb(91, 255, 50)"
            };

            var ranges = this._document._occurMatchingLines.flatMap(function (_ref4, row) {
              var ranges = _ref4.ranges;
              return ranges.map(function (_ref5) {
                var column = _ref5.start.column,
                    endColumn = _ref5.end.column;
                return {
                  start: {
                    column: column,
                    row: row
                  },
                  end: {
                    column: endColumn,
                    row: row
                  }
                };
              });
            });

            ranges.map(function (range, i) {
              return {
                id: "occur-" + i,
                range: range,
                style: style
              };
            }).forEach(function (m) {
              return _this.textMorph.addMarker(m);
            });
          }
        }, {
          key: "removeHighlight",
          value: function Occur_removeHighlight_() {
            var _this2 = this;

            (this.textMorph.markers || []).filter(function (_ref6) {
              var id = _ref6.id;
              return id.indexOf("occur-") === 0;
            }).forEach(function (m) {
              return _this2.textMorph.removeMarker(m);
            });
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "Occur";
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./text/occur.js";
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
          start: 1880,
          end: 6166
        });
      }(undefined));
      __varRecorder__.Occur = Occur;
      __varRecorder__.Occur = Occur;

    })
  };
}));
