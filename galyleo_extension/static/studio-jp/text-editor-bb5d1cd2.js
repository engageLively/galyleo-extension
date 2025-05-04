System.register(['./__rootModule___commonjs-entry-43c0966d.js', './ui.cp-ea4f49fb.js', './messages.cp-d88f98ee.js', './index-9832bcb3.js', './loading-indicator.cp-bf9ec992.js', './index-67b8b1e9.js', './index-ec469421.js', './list.cp-e5de22f3.js', './client-80774c54.js', './editor-modes-d813e7d2.js', './search-b411e709.js', './shell-interface-8a620f71.js', './client-command-6c903787.js', './index-009b6510.js'], (function (exports) {
  var __contextModule__ = typeof module !== 'undefined' ? module : arguments[1];
;
  var initializeClass, signal, once, Color, pt, TilingLayout, Rectangle, part, _toConsumableArray, Icon, config, connect, _slicedToArray, resource, Morph, _asyncToGenerator, deferred, _typeof, humanReadableByteSize, guessTextModeName, StatusMessageConfirm, StatusMessageWarning, InputLineDefault, SystemButton;
  return {
    setters: [function (module) {
      initializeClass = module.i;
      signal = module.s;
      once = module.aF;
      Color = module.C;
      pt = module.b;
      TilingLayout = module.T;
      Rectangle = module.R;
      part = module.p;
      _toConsumableArray = module.r;
      Icon = module.h;
      config = module.v;
      connect = module.a;
      _slicedToArray = module.o;
      resource = module.ac;
      Morph = module.M;
      _asyncToGenerator = module._;
      deferred = module.a9;
      _typeof = module.a5;
      humanReadableByteSize = module.b2;
    }, function (module) {
      guessTextModeName = module.g;
    }, function (module) {
      StatusMessageConfirm = module.StatusMessageConfirm;
      StatusMessageWarning = module.StatusMessageWarning;
    }, function (module) {
      InputLineDefault = module.d;
    }, function (module) {
      SystemButton = module.a;
    }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
    execute: (function () {

      var __varRecorder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/text/text-editor.js", __contextModule__);
      __varRecorder__.editorCommands = [{
        name: "focus url input",
        exec: function exec(fileBrowser) {
          fileBrowser.ui.urlInput.focus();
          return true;
        }
      }, {
        name: "focus content text",
        exec: function exec(fileBrowser) {
          fileBrowser.ui.contentText.focus();
          return true;
        }
      }, {
        name: "load file",
        exec: function () {
          var _exec = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(fileBrowser) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    fileBrowser.location = fileBrowser.ui.urlInput.input;
                    return _context.abrupt("return", true);

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function exec(_x) {
            return _exec.apply(this, arguments);
          }

          return exec;
        }()
      }, {
        name: "save file",
        exec: function () {
          var _exec2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(textEditor) {
            var action, result;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    action = textEditor.customSaveAction || textEditor.defaultSaveAction;
                    _context2.prev = 1;
                    _context2.next = 4;
                    return action(textEditor);

                  case 4:
                    result = _context2.sent;

                    if (result.saved) {
                      textEditor.setStatusMessage(result.message || "saved", StatusMessageConfirm);
                      signal(textEditor, "contentSaved");
                    } else textEditor.setStatusMessage(result.message || "not saved");

                    _context2.next = 11;
                    break;

                  case 8:
                    _context2.prev = 8;
                    _context2.t0 = _context2["catch"](1);
                    textEditor.showError("Error saving: ".concat(_context2.t0.stack || _context2.t0));

                  case 11:
                    return _context2.abrupt("return", true);

                  case 12:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, null, [[1, 8]]);
          }));

          function exec(_x2) {
            return _exec2.apply(this, arguments);
          }

          return exec;
        }()
      }, {
        name: "remove file",
        exec: function () {
          var _exec3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(textEditor) {
            var f;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    f = textEditor.locationResource;

                    if (f) {
                      _context3.next = 4;
                      break;
                    }

                    textEditor.setStatusMessage("No file selected");
                    return _context3.abrupt("return", true);

                  case 4:
                    _context3.prev = 4;
                    _context3.next = 7;
                    return textEditor.world().confirm("Really remove ".concat(f.url, "?"));

                  case 7:
                    if (!_context3.sent) {
                      _context3.next = 14;
                      break;
                    }

                    _context3.next = 10;
                    return f.remove();

                  case 10:
                    textEditor.setStatusMessage("".concat(f.url, " removed!"));
                    textEditor.reload();
                    _context3.next = 16;
                    break;

                  case 14:
                    _context3.next = 16;
                    return textEditor.world().inform("delete file canceled");

                  case 16:
                    _context3.next = 21;
                    break;

                  case 18:
                    _context3.prev = 18;
                    _context3.t0 = _context3["catch"](4);
                    textEditor.showError("Error writing ".concat(f.url, ": ").concat(_context3.t0.stack || _context3.t0));

                  case 21:
                    return _context3.abrupt("return", true);

                  case 22:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, null, [[4, 18]]);
          }));

          function exec(_x3) {
            return _exec3.apply(this, arguments);
          }

          return exec;
        }()
      }];

      var TextEditor = exports('default', function (superclass) {
        var __lively_classholder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/text/text-editor.js", __contextModule__);

        var __lively_class__ = __lively_classholder__.hasOwnProperty("TextEditor") && typeof __lively_classholder__.TextEditor === "function" ? __lively_classholder__.TextEditor : __lively_classholder__.TextEditor = function TextEditor(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        if (Object.isFrozen(__lively_classholder__)) {
          return __lively_class__;
        }

        return initializeClass(__lively_class__, superclass, [{
          key: Symbol["for"]("lively-instance-initialize"),
          value: function TextEditor_initialize_(props) {
            var _this;

            _this = initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), Symbol["for"]("lively-instance-initialize"), this).call(this, props);
            this._loadPromise = null;
            return _this;
          }
        }, {
          key: "isTextEditor",
          get: function get() {
            return true;
          }
        }, {
          key: "reload",
          value: function TextEditor_reload_() {
            this.location = this.location;
          }
        }, {
          key: "whenLoaded",
          value: function () {
            var _TextEditor_whenLoaded_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      return _context4.abrupt("return", this._loadPromise || Promise.resolve(this));

                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function TextEditor_whenLoaded_() {
              return _TextEditor_whenLoaded_.apply(this, arguments);
            }

            return TextEditor_whenLoaded_;
          }()
        }, {
          key: "parseFileNameInput",
          value: function TextEditor_parseFileNameInput_(input) {
            var url = input;
            var lineNumber;
            var colonIndex = input.lastIndexOf(":");

            if (colonIndex > -1 && input.slice(colonIndex + 1).match(/^[0-9]+$/)) {
              lineNumber = Number(input.slice(colonIndex + 1));
              url = input.slice(0, colonIndex);
            }

            return {
              lineNumber: lineNumber,
              url: url
            };
          }
        }, {
          key: "showFileContent",
          value: function () {
            var _TextEditor_showFileContent_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(url) {
              var deferred$1, res, content, win;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      deferred$1 = deferred();
                      this._loadPromise = deferred$1.promise;
                      _context5.prev = 2;

                      if (!this.customLoadContentAction) {
                        _context5.next = 9;
                        break;
                      }

                      _context5.next = 6;
                      return this.customLoadContentAction(this, url);

                    case 6:
                      content = _context5.sent;
                      _context5.next = 14;
                      break;

                    case 9:
                      res = resource(url);
                      _context5.next = 12;
                      return res.read();

                    case 12:
                      content = _context5.sent;

                      if (content.constructor === ArrayBuffer) {
                        content = new TextDecoder().decode(content);
                      }

                    case 14:
                      if (!content) content = "";
                      _context5.next = 17;
                      return this.prepareEditorForFile(url, content);

                    case 17:
                      win = this.getWindow();
                      if (win) win.title = res ? res.name() : url;
                      deferred$1.resolve(this);
                      _context5.next = 26;
                      break;

                    case 22:
                      _context5.prev = 22;
                      _context5.t0 = _context5["catch"](2);
                      this.showError(_context5.t0);
                      deferred$1.reject(_context5.t0);

                    case 26:
                      return _context5.abrupt("return", this._loadPromise);

                    case 27:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this, [[2, 22]]);
            }));

            function TextEditor_showFileContent_(_x4) {
              return _TextEditor_showFileContent_.apply(this, arguments);
            }

            return TextEditor_showFileContent_;
          }()
        }, {
          key: "prepareEditorForFile",
          value: function () {
            var _TextEditor_prepareEditorForFile_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(url) {
              var _ed$editorPlugin;

              var content,
                  ed,
                  mode,
                  _args6 = arguments;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      content = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : "";
                      if (_typeof(content) === "object") __varRecorder__.__inter0__ = content, content = __varRecorder__.__inter0__.content, url = __varRecorder__.__inter0__.url, __varRecorder__.__inter0__;
                      ed = this.ui.contentText;

                      if (content.length > Math.pow(2, 19)) {
                        this.setStatusMessage("File content very big, ".concat(humanReadableByteSize(content.length), ". Styling is disabled"), StatusMessageWarning);
                      } else {
                        mode = guessTextModeName(content, url);
                      }

                      _context6.prev = 4;
                      _context6.next = 7;
                      return ed.changeEditorMode(mode);

                    case 7:
                      _context6.next = 15;
                      break;

                    case 11:
                      _context6.prev = 11;
                      _context6.t0 = _context6["catch"](4);
                      console.warn("Failed to set mode ".concat(mode, ": ").concat(_context6.t0));
                      ed.changeEditorMode(null);

                    case 15:
                      ed.textString = content;
                      ed.gotoDocumentStart();
                      ed.scroll = pt(0, 0);
                      (_ed$editorPlugin = ed.editorPlugin) === null || _ed$editorPlugin === void 0 ? void 0 : _ed$editorPlugin.highlight();

                    case 19:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this, [[4, 11]]);
            }));

            function TextEditor_prepareEditorForFile_(_x5) {
              return _TextEditor_prepareEditorForFile_.apply(this, arguments);
            }

            return TextEditor_prepareEditorForFile_;
          }()
        }, {
          key: "defaultSaveAction",
          value: function () {
            var _TextEditor_defaultSaveAction_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(textEditor) {
              var f;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      f = textEditor.locationResource;

                      if (!f) {
                        _context7.next = 5;
                        break;
                      }

                      _context7.next = 4;
                      return f.write(textEditor.ui.contentText.textString);

                    case 4:
                      return _context7.abrupt("return", {
                        saved: true
                      });

                    case 5:
                      return _context7.abrupt("return", {
                        saved: false,
                        message: "No file selected"
                      });

                    case 6:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7);
            }));

            function TextEditor_defaultSaveAction_(_x6) {
              return _TextEditor_defaultSaveAction_.apply(this, arguments);
            }

            return TextEditor_defaultSaveAction_;
          }()
        }, {
          key: "focus",
          value: function TextEditor_focus_() {
            this.ui.contentText.focus();
          }
        }, {
          key: "close",
          value: function TextEditor_close_() {
            var win = this.getWindow();
            win ? win.close() : this.remove();
          }
        }, {
          key: "onWindowClose",
          value: function TextEditor_onWindowClose_() {
            signal(this, "closed");
          }
        }, {
          key: "commands",
          get: function get() {
            return __varRecorder__.editorCommands.concat(initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "commands", this));
          }
        }, {
          key: "keybindings",
          get: function get() {
            return [{
              keys: {
                mac: "Meta-S",
                win: "Ctrl-S"
              },
              command: "save file"
            }, {
              keys: "Alt-Up",
              command: "focus url input"
            }, {
              keys: "Alt-Down",
              command: "focus content text"
            }].concat(initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "keybindings", this));
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "TextEditor";
          }
        }, {
          key: "openURL",
          value: function TextEditor_openURL_(url, props) {
            return this.openInWindow(Object.assign({
              location: url
            }, props));
          }
        }, {
          key: "openAsEDITOR",
          value: function TextEditor_openAsEDITOR_(file, props) {
            var editor = this.openURL(file, props);
            return new Promise(function (resolve, reject) {
              once(editor, "contentSaved", resolve, "call", {
                updater: function updater($upd) {
                  $upd(null, "saved");
                  this.sourceObj.close();
                }
              });
              once(editor, "closed", resolve, "call", {
                updater: function updater($upd) {
                  return $upd(null, "aborted");
                }
              });
            });
          }
        }, {
          key: "openInWindow",
          value: function TextEditor_openInWindow_(props) {
            var ed = new this(props);
            ed.env.world.openInWindow(ed).activate();
            return ed;
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              name: {
                defaultValue: "text editor"
              },
              fill: {
                defaultValue: Color.transparent
              },
              reactsToPointer: {
                defaultValue: false
              },
              border: {
                defaultValue: {
                  width: 0,
                  color: Color.black
                }
              },
              extent: {
                defaultValue: pt(700, 600)
              },
              historyId: {
                defaultValue: "lively.morphic-text editor url"
              },
              submorphs: {
                after: ["historyId"],
                initialize: function initialize(existing) {
                  if (existing.length) return;
                  this.submorphs = [{
                    name: "h wrapper",
                    reactsToPointer: false,
                    fill: Color.transparent,
                    layout: new TilingLayout({
                      hugContentsVertically: true,
                      spacing: 10,
                      padding: Rectangle.inset(10, 10, 10, 10)
                    }),
                    submorphs: [part(SystemButton, {
                      name: "loadButton",
                      width: 75,
                      submorphs: [{
                        name: "label",
                        textAndAttributes: [].concat(_toConsumableArray(Icon.textAttribute("rotate-right", {
                          lineHeight: 1.4
                        })), [" Reload", {
                          lineHeight: 1.4
                        }])
                      }]
                    }), part(SystemButton, {
                      name: "saveButton",
                      submorphs: [{
                        name: "label",
                        textAndAttributes: [].concat(_toConsumableArray(Icon.textAttribute("floppy-disk", {
                          lineHeight: 1.4
                        })), [" Save", {
                          lineHeight: 1.4
                        }])
                      }]
                    }), part(SystemButton, {
                      name: "removeButton",
                      width: 80,
                      submorphs: [{
                        name: "label",
                        textAndAttributes: [].concat(_toConsumableArray(Icon.textAttribute("trash", {
                          lineHeight: 1.4
                        })), [" Remove", {
                          lineHeight: 1.4
                        }])
                      }]
                    })]
                  }, {
                    name: "url wrapper",
                    fill: Color.transparent,
                    layout: new TilingLayout({
                      hugContentsVertically: true,
                      padding: Rectangle.inset(10, 0, 10, 10),
                      resizePolicies: [["urlInput", {
                        width: "fill",
                        height: "fixed"
                      }]]
                    }),
                    submorphs: [part(InputLineDefault, {
                      name: "urlInput",
                      historyId: this.historyId,
                      fontSize: 14,
                      height: 22
                    })]
                  }, Object.assign({}, config.codeEditor.defaultStyle, {
                    name: "contentText",
                    type: "text",
                    fill: Color.white,
                    lineWrapping: "no-wrap",
                    readOnly: false
                  })];
                  var _this$ui = this.ui,
                      urlInput = _this$ui.urlInput,
                      loadButton = _this$ui.loadButton,
                      saveButton = _this$ui.saveButton,
                      removeButton = _this$ui.removeButton;
                  connect(urlInput, "inputAccepted", this, "location");
                  connect(loadButton, "fire", this, "execCommand", {
                    converter: function converter() {
                      return "load file";
                    }
                  });
                  connect(saveButton, "fire", this, "execCommand", {
                    converter: function converter() {
                      return "save file";
                    }
                  });
                  connect(removeButton, "fire", this, "execCommand", {
                    converter: function converter() {
                      return "remove file";
                    }
                  });
                }
              },
              layout: {
                initialize: function initialize() {
                  this.layout = new TilingLayout({
                    axis: "column",
                    renderViaCSS: true,
                    resizePolicies: [["url wrapper", {
                      width: "fill",
                      height: "fixed"
                    }], ["contentText", {
                      width: "fill",
                      height: "fill"
                    }], ["h wrapper", {
                      width: "fill",
                      height: "fixed"
                    }]]
                  });
                }
              },
              ui: {
                readOnly: true,
                derived: true,
                after: ["submorphs"],
                get: function get() {
                  var _this$submorphs = _slicedToArray(this.submorphs, 3),
                      hWrapper = _this$submorphs[0],
                      urlWrapper = _this$submorphs[1],
                      contentText = _this$submorphs[2];

                  var _hWrapper$submorphs = _slicedToArray(hWrapper.submorphs, 3),
                      loadButton = _hWrapper$submorphs[0],
                      saveButton = _hWrapper$submorphs[1],
                      removeButton = _hWrapper$submorphs[2];

                  var _urlWrapper$submorphs = _slicedToArray(urlWrapper.submorphs, 1),
                      urlInput = _urlWrapper$submorphs[0];

                  return {
                    urlInput: urlInput,
                    loadButton: loadButton,
                    saveButton: saveButton,
                    removeButton: removeButton,
                    contentText: contentText
                  };
                }
              },
              location: {
                derived: true,
                after: ["submorphs"],
                get: function get() {
                  return this.ui.urlInput.input;
                },
                set: function set(val) {
                  var _this$parseFileNameIn = this.parseFileNameInput(val),
                      url = _this$parseFileNameIn.url,
                      lineNumber = _this$parseFileNameIn.lineNumber;

                  var _this$ui2 = this.ui,
                      contentText = _this$ui2.contentText,
                      urlInput = _this$ui2.urlInput;
                  urlInput.input = val || "";
                  urlInput.acceptInput();
                  if (urlInput.isFocused()) contentText.focus();
                  this.showFileContent(url);
                  if (typeof lineNumber !== "undefined") this.lineNumber = lineNumber;
                }
              },
              locationResource: {
                derived: true,
                after: ["location"],
                get: function get() {
                  var _this$parseFileNameIn2 = this.parseFileNameInput(this.location),
                      url = _this$parseFileNameIn2.url;

                  return resource(url);
                },
                set: function set(resource) {
                  this.location = resource.url;
                }
              },
              lineNumber: {
                derived: true,
                after: ["location"],
                get: function get() {
                  return this.ui.contentText.cursorPosition.row;
                },
                set: function set(val) {
                  var row = Number(val);
                  if (isNaN(row)) return;
                  var ed = this.ui.contentText;
                  if (ed.cursorPosition.row === row) return;
                  this.whenLoaded().then(function () {
                    ed.cursorPosition = {
                      row: row,
                      column: 0
                    };
                    ed.centerRow(row);
                  });
                }
              },
              customSaveAction: {},
              customLoadContentAction: {}
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./text/text-editor.js";
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
          start: 2274,
          end: 11319
        });
      }({
        referencedAs: "Morph",
        value: Morph
      }));
      __varRecorder__["default"] = TextEditor;

    })
  };
}));
