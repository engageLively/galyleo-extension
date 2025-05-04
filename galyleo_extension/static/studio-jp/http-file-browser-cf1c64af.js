System.register(['./__rootModule___commonjs-entry-43c0966d.js', './index-9832bcb3.js', './text-editor-bb5d1cd2.js', './loading-indicator.cp-bf9ec992.js', './ui.cp-ea4f49fb.js', './index-67b8b1e9.js', './index-ec469421.js', './list.cp-e5de22f3.js', './client-80774c54.js', './editor-modes-d813e7d2.js', './search-b411e709.js', './shell-interface-8a620f71.js', './client-command-6c903787.js', './index-009b6510.js', './messages.cp-d88f98ee.js'], (function (exports) {
  var __contextModule__ = typeof module !== 'undefined' ? module : arguments[1];
;
  var Image, pt, _asyncToGenerator, resource, initializeClass, format, humanReadableByteSize, waitFor, joinPath, TilingLayout, Rectangle, part, Icon, Color, connect, Morph, _slicedToArray, sortBy, arr, TreeData, InputLine, Tree, TextEditor, SystemButton;
  return {
    setters: [function (module) {
      Image = module.I;
      pt = module.b;
      _asyncToGenerator = module._;
      resource = module.ac;
      initializeClass = module.i;
      format = module.ak;
      humanReadableByteSize = module.b2;
      waitFor = module.aE;
      joinPath = module.b9;
      TilingLayout = module.T;
      Rectangle = module.R;
      part = module.p;
      Icon = module.h;
      Color = module.C;
      connect = module.a;
      Morph = module.M;
      _slicedToArray = module.o;
      sortBy = module.aP;
      arr = module.ba;
    }, function (module) {
      TreeData = module.T;
      InputLine = module.I;
      Tree = module.r;
    }, function (module) {
      TextEditor = module["default"];
    }, function (module) {
      SystemButton = module.a;
    }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
    execute: (function () {

      var __varRecorder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/http-file-browser.js", __contextModule__);
      __varRecorder__.browserCommands = [{
        name: "open selected file",
        exec: function exec(browser) {
          var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
            openInNewBrowser: false
          };
          if (browser.ui.locationInput.isFocused()) return false;
          var sel = browser.selectedFile;

          if (!sel) {
            browser.setStatusMessage("No file selected");
          } else if (opts.openInNewBrowser) {
            var viewState = browser.ui.fileTree.buildViewState(function (_ref) {
              var url = _ref.resource.url;
              return url;
            });

            var newBrowser = __varRecorder__.HTTPFileBrowser.forFile(browser.selectedFile, browser.location);

            var position = browser.getWindow().position.addXY(10, 10);
            browser.world().openInWindow(newBrowser, {
              position: position
            }).activate();
            return newBrowser.whenFinishedLoading().then(function () {
              return newBrowser.ui.fileTree.applyViewState(viewState, function (_ref2) {
                var url = _ref2.resource.url;
                return url;
              });
            }).then(function () {
              return newBrowser;
            });
          } else if (sel.isDirectory()) {
            browser.execCommand("set location to selection");
          } else if (sel.url.endsWith(".svg") || sel.url.endsWith(".png")) {
            var image = new Image({
              name: sel.url,
              imageUrl: sel.url
            });
            image.openInWorld();
          } else {
            var editor = TextEditor.openURL(sel.url, {
              extent: pt(600, 800)
            });
            setTimeout(function () {
              return editor.getWindow().activate();
            }, 100);
          }

          return true;
        }
      }, {
        name: "focus file tree",
        exec: function exec(browser) {
          var it = browser.ui.fileTree;
          it.show();
          it.focus();
          return true;
        }
      }, {
        name: "focus location input",
        exec: function exec(browser) {
          var it = browser.ui.locationInput;
          it.show();
          it.focus();
          return true;
        }
      }, {
        name: "set location to selection",
        exec: function () {
          var _exec = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(browser) {
            var sel;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    sel = browser.selectedFile;
                    _context.t0 = sel;

                    if (!_context.t0) {
                      _context.next = 5;
                      break;
                    }

                    _context.next = 5;
                    return browser.keepFileTreeStateWhile(function () {
                      return browser.location = sel.isDirectory() ? sel : sel.parent();
                    });

                  case 5:
                    return _context.abrupt("return", true);

                  case 6:
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
        name: "set location to parent dir",
        exec: function () {
          var _exec2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(browser) {
            var currentLoc;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    currentLoc = browser.location;

                    if (!currentLoc.isRoot()) {
                      _context3.next = 3;
                      break;
                    }

                    return _context3.abrupt("return", true);

                  case 3:
                    _context3.next = 5;
                    return browser.keepFileTreeStateWhile( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                      return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              _context2.next = 2;
                              return browser.openLocation(currentLoc.parent());

                            case 2:
                              browser.selectedFile = currentLoc;
                              _context2.next = 5;
                              return browser.ui.fileTree.execCommand("uncollapse selected node");

                            case 5:
                            case "end":
                              return _context2.stop();
                          }
                        }
                      }, _callee2);
                    })));

                  case 5:
                    return _context3.abrupt("return", true);

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));

          function exec(_x2) {
            return _exec2.apply(this, arguments);
          }

          return exec;
        }()
      }, {
        name: "copy file path to clipboard",
        exec: function () {
          var _exec3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(browser) {
            var fnText;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (!browser.ui.locationInput.isFocused()) {
                      _context4.next = 2;
                      break;
                    }

                    return _context4.abrupt("return", false);

                  case 2:
                    if (!browser.selectedFile) {
                      _context4.next = 8;
                      break;
                    }

                    fnText = browser.get("selectedFileName");
                    browser.env.eventDispatcher.doCopy(fnText.textString);
                    fnText.fontColor = Color.rgb(52, 152, 219);
                    _context4.next = 8;
                    return fnText.animate({
                      customTween: function customTween(p) {
                        return fnText.fontColor = Color.rgb(52, 152, 219).interpolate(p, Color.black);
                      }
                    });

                  case 8:
                    return _context4.abrupt("return", true);

                  case 9:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));

          function exec(_x3) {
            return _exec3.apply(this, arguments);
          }

          return exec;
        }()
      }, {
        name: "refresh contents",
        exec: function exec(browser, args, count, evt) {
          if (evt && evt.keyCombo === "input-g" && browser.ui.locationInput.isFocused()) return false;
          return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var scroll;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    scroll = browser.ui.fileTree.scroll;
                    _context5.next = 3;
                    return browser.keepFileTreeStateWhile(function () {
                      return browser.location = browser.location;
                    });

                  case 3:
                    browser.ui.fileTree.scroll = scroll;
                    return _context5.abrupt("return", true);

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5);
          }))();
        }
      }, {
        name: "set file filter",
        exec: function () {
          var _exec4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(browser) {
            var _yield$browser$world$, excludeList;

            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    browser.excludeFiles = browser.excludeFiles || [];
                    _context6.next = 3;
                    return browser.world().editListPrompt("Add or remove items to be excluded from the file list", browser.excludeFiles, {
                      requester: browser
                    });

                  case 3:
                    _yield$browser$world$ = _context6.sent;
                    excludeList = _yield$browser$world$.list;

                    if (!excludeList) {
                      _context6.next = 9;
                      break;
                    }

                    browser.excludeFiles = excludeList;
                    _context6.next = 9;
                    return browser.execCommand("refresh contents");

                  case 9:
                    return _context6.abrupt("return", true);

                  case 10:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6);
          }));

          function exec(_x4) {
            return _exec4.apply(this, arguments);
          }

          return exec;
        }()
      }, {
        name: "add directory",
        exec: function () {
          var _exec5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(browser) {
            var loc, newDir, res;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    loc = browser.selectedFile || browser.location;
                    if (!loc.isDirectory()) loc = loc.parent();
                    _context7.next = 4;
                    return browser.world().prompt("Enter name of new directory:", {
                      input: loc.url,
                      requester: browser,
                      historyId: "lively.ide/http-file-browser-file-name-query"
                    });

                  case 4:
                    newDir = _context7.sent;

                    if (newDir) {
                      _context7.next = 9;
                      break;
                    }

                    browser.world().inform("Add directory canceled", {
                      requester: browser
                    });
                    _context7.next = 16;
                    break;

                  case 9:
                    res = resource(newDir);
                    if (!res.isDirectory()) res = res.asDirectory();
                    _context7.next = 13;
                    return res.ensureExistance();

                  case 13:
                    _context7.next = 15;
                    return browser.execCommand("refresh contents");

                  case 15:
                    browser.selectedFile = res;

                  case 16:
                    return _context7.abrupt("return", true);

                  case 17:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7);
          }));

          function exec(_x5) {
            return _exec5.apply(this, arguments);
          }

          return exec;
        }()
      }, {
        name: "add file",
        exec: function () {
          var _exec6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(browser) {
            var loc, newFile, res;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    loc = browser.selectedFile || browser.location;
                    if (!loc.isDirectory()) loc = loc.parent();
                    _context8.next = 4;
                    return browser.world().prompt("Enter name of new file:", {
                      input: loc.url,
                      requester: browser,
                      historyId: "lively.ide/http-file-browser-file-name-query"
                    });

                  case 4:
                    newFile = _context8.sent;

                    if (newFile) {
                      _context8.next = 9;
                      break;
                    }

                    browser.world().inform("Add file canceled", {
                      requester: browser
                    });
                    _context8.next = 16;
                    break;

                  case 9:
                    res = resource(newFile);
                    if (res.isDirectory()) res = res.asFile();
                    _context8.next = 13;
                    return res.ensureExistance("");

                  case 13:
                    _context8.next = 15;
                    return browser.execCommand("refresh contents");

                  case 15:
                    browser.selectedFile = res;

                  case 16:
                    return _context8.abrupt("return", true);

                  case 17:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8);
          }));

          function exec(_x6) {
            return _exec6.apply(this, arguments);
          }

          return exec;
        }()
      }, {
        name: "delete file or directory",
        exec: function exec(browser) {
          if (browser.ui.locationInput.isFocused()) return false;

          if (!browser.selectedFile) {
            browser.setStatusMessage("Nothing selected");
            return true;
          }

          return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var really, res, i;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return browser.world().confirm(["Confirm Delete\n", {}, "Do you really want to remove\n", {
                      fontWeight: "normal",
                      fontSize: 16
                    }, "".concat(browser.selectedFile.url, "?"), {
                      fontStyle: "italic",
                      fontWeight: "normal",
                      fontSize: 16
                    }], {
                      requester: browser,
                      lineWrapping: "no-wrap"
                    });

                  case 2:
                    really = _context9.sent;

                    if (!really) {
                      _context9.next = 15;
                      break;
                    }

                    res = browser.selectedFile;
                    i = browser.ui.fileTree.selectedIndex;
                    _context9.next = 8;
                    return res.remove();

                  case 8:
                    _context9.next = 10;
                    return browser.execCommand("refresh contents");

                  case 10:
                    _context9.next = 12;
                    return browser.whenFinishedLoading();

                  case 12:
                    browser.ui.fileTree.selectedIndex = i;
                    _context9.next = 16;
                    break;

                  case 15:
                    browser.world().inform("Delete canceled", {
                      requester: browser
                    });

                  case 16:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9);
          }))();
        }
      }, {
        name: "rename file",
        exec: function exec(browser) {
          if (!browser.selectedFile) {
            browser.setStatusMessage("Nothing selected");
            return true;
          }

          return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var newName, res, newRes, content, location;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return browser.world().prompt(["Rename\n", {}, "".concat(browser.selectedFile.url), {
                      fontStyle: "italic",
                      fontWeight: "normal",
                      fontSize: 16
                    }], {
                      input: browser.selectedFile.url,
                      requester: browser,
                      historyId: "lively.ide/http-file-browser-file-name-query"
                    });

                  case 2:
                    newName = _context11.sent;

                    if (newName) {
                      _context11.next = 6;
                      break;
                    }

                    browser.world().inform("Rename canceled", {
                      requester: browser
                    });
                    return _context11.abrupt("return", true);

                  case 6:
                    res = browser.selectedFile;
                    newRes = resource(newName);

                    if (!res.isDirectory()) {
                      _context11.next = 14;
                      break;
                    }

                    if (!newRes.isDirectory()) newRes = newRes.asDirectory();
                    _context11.next = 12;
                    return newRes.ensureExistance();

                  case 12:
                    _context11.next = 20;
                    break;

                  case 14:
                    _context11.next = 16;
                    return res.read();

                  case 16:
                    content = _context11.sent;
                    if (newRes.isDirectory()) newRes = newRes.asFile();
                    _context11.next = 20;
                    return newRes.ensureExistance(content);

                  case 20:
                    _context11.next = 22;
                    return res.remove();

                  case 22:
                    _context11.next = 24;
                    return browser.execCommand("refresh contents");

                  case 24:
                    location = browser.location;

                    if (location.isParentOf(newRes)) {
                      _context11.next = 28;
                      break;
                    }

                    _context11.next = 28;
                    return browser.keepFileTreeStateWhile( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                      return regeneratorRuntime.wrap(function _callee10$(_context10) {
                        while (1) {
                          switch (_context10.prev = _context10.next) {
                            case 0:
                              _context10.next = 2;
                              return browser.openLocation(location.commonDirectory(newRes));

                            case 2:
                              return _context10.abrupt("return", _context10.sent);

                            case 3:
                            case "end":
                              return _context10.stop();
                          }
                        }
                      }, _callee10);
                    })));

                  case 28:
                    _context11.prev = 28;
                    _context11.next = 31;
                    return browser.gotoFile(newRes);

                  case 31:
                    browser.ui.fileTree.centerSelection();
                    _context11.next = 38;
                    break;

                  case 34:
                    _context11.prev = 34;
                    _context11.t0 = _context11["catch"](28);
                    browser.showError(_context11.t0);
                    return _context11.abrupt("return", true);

                  case 38:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, null, [[28, 34]]);
          }))();
        }
      }, {
        name: "find file and select",
        handlesCount: true,
        exec: function () {
          var _exec7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(browser, _, count) {
            var opts, loc, items, _yield$browser$world$2, _yield$browser$world$3, targetURL;

            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    opts = {
                      exclude: browser.excludeFiles || []
                    };
                    loc = browser.location;
                    _context12.next = 4;
                    return loc.dirList(count || "infinity", opts);

                  case 4:
                    _context12.t0 = function (ea) {
                      return {
                        isListItem: true,
                        string: ea.url.slice(loc.url.length),
                        value: ea.url
                      };
                    };

                    items = _context12.sent.map(_context12.t0);
                    _context12.next = 8;
                    return browser.world().filterableListPrompt("Choose module to open", items, {
                      historyId: "lively.ide/http-file-browser-find-file",
                      requester: browser,
                      width: 700,
                      multiSelect: false
                    });

                  case 8:
                    _yield$browser$world$2 = _context12.sent;
                    _yield$browser$world$3 = _slicedToArray(_yield$browser$world$2.selected, 1);
                    targetURL = _yield$browser$world$3[0];

                    if (targetURL) {
                      _context12.next = 14;
                      break;
                    }

                    browser.setStatusMessage("Canceled");
                    return _context12.abrupt("return", true);

                  case 14:
                    _context12.prev = 14;
                    _context12.next = 17;
                    return browser.gotoFile(targetURL);

                  case 17:
                    browser.ui.fileTree.centerSelection();
                    _context12.next = 24;
                    break;

                  case 20:
                    _context12.prev = 20;
                    _context12.t1 = _context12["catch"](14);
                    browser.showError(_context12.t1);
                    return _context12.abrupt("return", true);

                  case 24:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, null, [[14, 20]]);
          }));

          function exec(_x7, _x8, _x9) {
            return _exec7.apply(this, arguments);
          }

          return exec;
        }()
      }];
      var HTTPFileBrowserNode = exports('HTTPFileBrowserNode', function (superclass) {
        var __lively_classholder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/http-file-browser.js", __contextModule__);

        var __lively_class__ = __lively_classholder__.hasOwnProperty("HTTPFileBrowserNode") && typeof __lively_classholder__.HTTPFileBrowserNode === "function" ? __lively_classholder__.HTTPFileBrowserNode : __lively_classholder__.HTTPFileBrowserNode = function HTTPFileBrowserNode(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        if (Object.isFrozen(__lively_classholder__)) {
          return __lively_class__;
        }

        return initializeClass(__lively_class__, superclass, [{
          key: "display",
          value: function HTTPFileBrowserNode_display_(_ref8) {
            var resource = _ref8.resource;
            var col1Size = 19;
            var browser = this.root.browser;
            var lastModified = resource.lastModified,
                size = resource.size;
            var datePrinted = lastModified ? format(lastModified, "yyyy-mm-dd HH:MM:ss") : " ".repeat(col1Size);
            var sizePrinted = size ? humanReadableByteSize(size) : "";
            var displayedName = browser.truncateNameIfNeeded(resource.name());
            return [displayedName, null, "\t".concat(sizePrinted, " ").concat(datePrinted), {
              paddingTop: "3px",
              opacity: 0.5,
              fontSize: "70%",
              textStyleClasses: ["annotation"]
            }];
          }
        }, {
          key: "isCollapsed",
          value: function HTTPFileBrowserNode_isCollapsed_(_ref9) {
            var isCollapsed = _ref9.isCollapsed;
            return isCollapsed;
          }
        }, {
          key: "collapse",
          value: function () {
            var _HTTPFileBrowserNode_collapse_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(node, bool) {
              var exclude, _arr$partition, _arr$partition2, dirs, files;

              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      if (node.resource) {
                        _context13.next = 2;
                        break;
                      }

                      return _context13.abrupt("return");

                    case 2:
                      if (node === this.root) bool = false;

                      if (!(!bool && !node.subResources)) {
                        _context13.next = 17;
                        break;
                      }

                      exclude = this.root.browser.excludeFiles || [];
                      _context13.t0 = arr;
                      _context13.next = 8;
                      return node.resource.dirList(1, {
                        exclude: exclude
                      });

                    case 8:
                      _context13.t1 = _context13.sent;

                      _context13.t2 = function (ea) {
                        return ea.isDirectory();
                      };

                      _arr$partition = _context13.t0.partition.call(_context13.t0, _context13.t1, _context13.t2);
                      _arr$partition2 = _slicedToArray(_arr$partition, 2);
                      dirs = _arr$partition2[0];
                      files = _arr$partition2[1];
                      dirs = sortBy(dirs, function (ea) {
                        return ea.name().toLowerCase();
                      });
                      files = sortBy(files, function (ea) {
                        return ea.name().toLowerCase();
                      });
                      node.subNodes = dirs.concat(files).map(function (res) {
                        return {
                          isCollapsed: true,
                          resource: res
                        };
                      });

                    case 17:
                      node.isCollapsed = bool;

                    case 18:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));

            function HTTPFileBrowserNode_collapse_(_x10, _x11) {
              return _HTTPFileBrowserNode_collapse_.apply(this, arguments);
            }

            return HTTPFileBrowserNode_collapse_;
          }()
        }, {
          key: "getChildren",
          value: function HTTPFileBrowserNode_getChildren_(parent) {
            var _this = this;

            var resource = parent.resource,
                isCollapsed = parent.isCollapsed,
                subNodes = parent.subNodes;
            var result = !resource ? [] : !resource.isDirectory() ? null : isCollapsed ? [] : subNodes || [];
            result && result.forEach(function (n) {
              return _this.parentMap.set(n, parent);
            });
            return result;
          }
        }, {
          key: "isLeaf",
          value: function HTTPFileBrowserNode_isLeaf_(_ref10) {
            var resource = _ref10.resource;
            return resource ? !resource.isDirectory() : true;
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "HTTPFileBrowserNode";
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./http-file-browser.js";
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
          start: 9969,
          end: 11640
        });
      }({
        referencedAs: "TreeData",
        value: TreeData
      }));
      __varRecorder__.HTTPFileBrowserNode = HTTPFileBrowserNode;
      __varRecorder__.HTTPFileBrowserNode = HTTPFileBrowserNode;

      var HTTPFileBrowser = exports('default', function (superclass) {
        var __lively_classholder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/http-file-browser.js", __contextModule__);

        var __lively_class__ = __lively_classholder__.hasOwnProperty("HTTPFileBrowser") && typeof __lively_classholder__.HTTPFileBrowser === "function" ? __lively_classholder__.HTTPFileBrowser : __lively_classholder__.HTTPFileBrowser = function HTTPFileBrowser(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        if (Object.isFrozen(__lively_classholder__)) {
          return __lively_class__;
        }

        return initializeClass(__lively_class__, superclass, [{
          key: "isFileBrowser",
          get: function get() {
            return true;
          }
        }, {
          key: "relayout",
          value: function HTTPFileBrowser_relayout_() {
            var _this2 = this;

            if (this.height <= 0) return;
            var _this$ui = this.ui,
                selectedFileName = _this$ui.selectedFileName,
                deleteFileButton = _this$ui.deleteFileButton,
                renameFileButton = _this$ui.renameFileButton,
                addFileButton = _this$ui.addFileButton,
                addDirectoryButton = _this$ui.addDirectoryButton,
                openFileButton = _this$ui.openFileButton,
                filterButton = _this$ui.filterButton,
                reloadButton = _this$ui.reloadButton,
                searchButton = _this$ui.searchButton,
                locationInput = _this$ui.locationInput,
                fileTree = _this$ui.fileTree;
            var topButtons = [searchButton, filterButton, reloadButton];
            var bottomButtons = [openFileButton, addFileButton, addDirectoryButton, renameFileButton, deleteFileButton];
            var nButtons = 5;
            var locationInputHeight = 20;
            var selectedFileNameHeight = 20;
            var buttonHeight = 20;
            locationInput.position = pt(0, 0);
            locationInput.extent = pt(this.width - 3 * buttonHeight, locationInputHeight);
            topButtons.forEach(function (btn) {
              return btn.extent = pt(buttonHeight, buttonHeight);
            });
            topButtons[0].topLeft = locationInput.topRight;

            for (var i = 1; i < topButtons.length; i++) {
              topButtons[i].topLeft = topButtons[i - 1].topRight;
            }

            fileTree.topLeft = locationInput.bottomLeft;
            fileTree.extent = pt(this.width, this.height - locationInputHeight - selectedFileNameHeight - buttonHeight);
            selectedFileName.topLeft = fileTree.bottomLeft;
            selectedFileName.extent = pt(this.width, selectedFileNameHeight);
            bottomButtons.forEach(function (btn) {
              return btn.extent = pt(_this2.width / nButtons, buttonHeight);
            });
            bottomButtons[0].topLeft = selectedFileName.bottomLeft;

            for (var _i = 1; _i < bottomButtons.length; _i++) {
              bottomButtons[_i].topLeft = bottomButtons[_i - 1].topRight;
            }
          }
        }, {
          key: "truncateNameIfNeeded",
          value: function HTTPFileBrowser_truncateNameIfNeeded_(displayedName) {
            var ft = this.ui.fileTree;
            var renderedLength = ft.env.fontMetric.sizeFor(ft.defaultTextStyle, displayedName, true).width;

            if (renderedLength > ft.width - 200) {
              var avgCharLength = renderedLength / displayedName.length;
              var charsToRemove = (renderedLength - (ft.width - 200)) / avgCharLength;
              if (charsToRemove >= 1) displayedName = displayedName.slice(0, -charsToRemove) + "...";
            }

            return displayedName;
          }
        }, {
          key: "whenFinishedLoading",
          value: function HTTPFileBrowser_whenFinishedLoading_() {
            var _this3 = this;

            return waitFor(3000, function () {
              return _this3._isLoading === false;
            })["catch"](function (_) {
              return undefined;
            });
          }
        }, {
          key: "hideBaseURL",
          value: function HTTPFileBrowser_hideBaseURL_(evt) {
            var fnText = this.ui.selectedFileName;

            if (evt.isShiftDown()) {
              fnText.textString = fnText.textString.replace(System.baseURL, "/");
            } else {
              this.showSelectedFile();
            }
          }
        }, {
          key: "openLocation",
          value: function HTTPFileBrowser_openLocation_(urlOrResource) {
            var res = typeof urlOrResource === "string" ? resource(urlOrResource) : urlOrResource;
            var locationInput = this.ui.locationInput;
            locationInput.input = res.url;
            locationInput.acceptInput();
            return this;
          }
        }, {
          key: "showMenuFor",
          value: function () {
            var _HTTPFileBrowser_showMenuFor_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(_ref11) {
              var node, evt, items;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      node = _ref11.node, evt = _ref11.evt;
                      evt.stop();
                      items = [];

                      if (node.resource.isFile()) {
                        items.push({
                          alias: "Open File in Text Editor",
                          command: "open file",
                          target: this.world(),
                          args: {
                            url: node.resource.url
                          }
                        });
                      }

                      return _context14.abrupt("return", this.world().openWorldMenu(evt, items));

                    case 5:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));

            function HTTPFileBrowser_showMenuFor_(_x12) {
              return _HTTPFileBrowser_showMenuFor_.apply(this, arguments);
            }

            return HTTPFileBrowser_showMenuFor_;
          }()
        }, {
          key: "showSelectedFile",
          value: function HTTPFileBrowser_showSelectedFile_() {
            var sel = this.selectedFile;
            this.get("selectedFileName").textString = sel ? sel.url : "";
          }
        }, {
          key: "gotoFile",
          value: function () {
            var _HTTPFileBrowser_gotoFile_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(urlOrResource) {
              var target, path, td, found;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.next = 2;
                      return this.whenFinishedLoading();

                    case 2:
                      target = typeof urlOrResource === "string" ? resource(urlOrResource) : urlOrResource;
                      path = target.parents().concat(target);
                      td = this.ui.fileTree.treeData;
                      _context15.next = 7;
                      return td.followPath(path, function (resource, node) {
                        return resource.equals(node.resource);
                      });

                    case 7:
                      found = _context15.sent;
                      return _context15.abrupt("return", found ? this.selectedFile = found.resource : null);

                    case 9:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));

            function HTTPFileBrowser_gotoFile_(_x13) {
              return _HTTPFileBrowser_gotoFile_.apply(this, arguments);
            }

            return HTTPFileBrowser_gotoFile_;
          }()
        }, {
          key: "onLocationChanged",
          value: function () {
            var _HTTPFileBrowser_onLocationChanged_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var treeData, url, loc, win;
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      treeData = this.ui.fileTree.treeData;
                      url = this.ui.locationInput.input;

                      if (url) {
                        _context16.next = 5;
                        break;
                      }

                      this._isLoading = false;
                      return _context16.abrupt("return");

                    case 5:
                      loc = resource(url);
                      if (!loc.isDirectory()) loc = loc.asDirectory();
                      treeData.root = {
                        browser: this,
                        resource: loc,
                        isCollapsed: true
                      };
                      win = this.getWindow();
                      if (win) win.title = "file browser \u2013 " + url;
                      _context16.next = 12;
                      return this.ui.fileTree.uncollapse(treeData.root);

                    case 12:
                      this._isLoading = false;
                      this.ui.fileTree.focus();

                    case 14:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));

            function HTTPFileBrowser_onLocationChanged_() {
              return _HTTPFileBrowser_onLocationChanged_.apply(this, arguments);
            }

            return HTTPFileBrowser_onLocationChanged_;
          }()
        }, {
          key: "keepFileTreeStateWhile",
          value: function HTTPFileBrowser_keepFileTreeStateWhile_(whileFn) {
            var _this4 = this;

            return this.ui.fileTree.maintainViewStateWhile(function () {
              return whileFn.call(_this4);
            }, function (_ref12) {
              var url = _ref12.resource.url;
              return url;
            });
          }
        }, {
          key: "focus",
          value: function HTTPFileBrowser_focus_() {
            this.ui.fileTree.focus();
          }
        }, {
          key: "commands",
          get: function get() {
            return __varRecorder__.browserCommands.concat(initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "commands", this));
          }
        }, {
          key: "keybindings",
          get: function get() {
            return [{
              keys: "Enter",
              command: "open selected file"
            }, {
              keys: {
                mac: "Meta-Enter",
                win: "Ctrl-Enter"
              },
              command: {
                command: "open selected file",
                args: {
                  openInNewBrowser: true
                }
              }
            }, {
              keys: "Alt-Up",
              command: "focus location input"
            }, {
              keys: "Alt-Down",
              command: "focus file tree"
            }, {
              keys: "Alt-.",
              command: "set location to selection"
            }, {
              keys: "Shift-6",
              command: "set location to parent dir"
            }, {
              keys: {
                mac: "Meta-C|Alt-W",
                win: "Ctrl-C|Alt-W"
              },
              command: "copy file path to clipboard"
            }, {
              keys: "Shift-=",
              command: "add directory"
            }, {
              keys: {
                mac: "Meta-Shift-=",
                win: "Ctrl-Shift-="
              },
              command: "add file"
            }, {
              keys: "F2",
              command: "set file filter"
            }, {
              keys: "F3",
              command: "rename file"
            }, {
              keys: "Backspace|Delete",
              command: "delete file or directory"
            }, {
              keys: "g",
              command: "refresh contents"
            }].concat(initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "keybindings", this));
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "HTTPFileBrowser";
          }
        }, {
          key: "forLocation",
          value: function HTTPFileBrowser_forLocation_(urlOrResource, props) {
            var browser = new this(props);
            browser.location = urlOrResource;
            return browser;
          }
        }, {
          key: "forFile",
          value: function HTTPFileBrowser_forFile_(urlOrResource, location) {
            var res;

            try {
              res = resource(urlOrResource);
            } catch (e) {
              res = resource(joinPath(location || "", urlOrResource));
            }

            var browser = this.forLocation(location || res.root());
            browser.gotoFile(res).then(function () {
              return browser.ui.fileTree.centerSelection();
            });
            return browser;
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              name: {
                defaultValue: "file browser"
              },
              clipMode: {
                defaultValue: "visible"
              },
              extent: {
                defaultValue: pt(500, 500)
              },
              excludeFiles: {
                defaultValue: [".git", ".DS_Store"]
              },
              draggable: {
                defaultValue: false
              },
              layout: {
                initialize: function initialize() {
                  this.layout = new TilingLayout({
                    axis: "column",
                    resizePolicies: [["input wrapper", {
                      width: "fill",
                      height: "fixed"
                    }], ["fileTree", {
                      width: "fill",
                      height: "fill"
                    }], ["selectedFileName", {
                      width: "fill",
                      height: "fixed"
                    }], ["button container", {
                      width: "fill",
                      height: "fixed"
                    }]]
                  });
                }
              },
              submorphs: {
                initialize: function initialize() {
                  var btnStyle = {
                    borderRadius: 5,
                    padding: Rectangle.inset(0),
                    fontSize: 12,
                    grabbable: false,
                    draggable: false
                  };
                  var topButtons = [part(SystemButton, Object.assign({
                    name: "searchButton"
                  }, btnStyle, {
                    submorphs: [{
                      name: "label",
                      textAndAttributes: Icon.textAttribute("search")
                    }],
                    tooltip: "search for files"
                  })), part(SystemButton, Object.assign({
                    name: "reloadButton"
                  }, btnStyle, {
                    submorphs: [{
                      name: "label",
                      textAndAttributes: Icon.textAttribute("redo")
                    }],
                    tooltip: "reload list"
                  })), part(SystemButton, Object.assign({
                    name: "filterButton"
                  }, btnStyle, {
                    submorphs: [{
                      name: "label",
                      textAndAttributes: Icon.textAttribute("filter")
                    }],
                    tooltip: "set file filter"
                  }))];
                  var bottomButtons = [part(SystemButton, Object.assign({
                    name: "openFileButton"
                  }, btnStyle, {
                    submorphs: [{
                      name: "label",
                      textAndAttributes: Icon.textAttribute("edit", {
                        fontWeight: "400"
                      })
                    }],
                    tooltip: "open selected file"
                  })), part(SystemButton, Object.assign({
                    name: "addDirectoryButton"
                  }, btnStyle, {
                    submorphs: [{
                      name: "label",
                      textAndAttributes: Icon.textAttribute("folder", {
                        fontWeight: "400"
                      })
                    }],
                    tooltip: "add directory"
                  })), part(SystemButton, Object.assign({
                    name: "addFileButton"
                  }, btnStyle, {
                    submorphs: [{
                      name: "label",
                      textAndAttributes: Icon.textAttribute("file", {
                        fontWeight: "400"
                      })
                    }],
                    tooltip: "add file"
                  })), part(SystemButton, Object.assign({
                    name: "renameFileButton"
                  }, btnStyle, {
                    submorphs: [{
                      name: "label",
                      textAndAttributes: Icon.textAttribute("mi-drive_file_rename_outline", {
                        fontWeight: "400"
                      })
                    }],
                    tooltip: "rename selected file"
                  })), part(SystemButton, Object.assign({
                    name: "deleteFileButton"
                  }, btnStyle, {
                    submorphs: [{
                      name: "label",
                      textAndAttributes: Icon.textAttribute("trash-alt", {
                        fontWeight: "400"
                      })
                    }],
                    tooltip: "delete selected file"
                  }))];
                  this.submorphs = [{
                    name: "input wrapper",
                    layout: new TilingLayout({
                      resizePolicies: [["locationInput", {
                        width: "fill",
                        height: "fixed"
                      }]]
                    }),
                    submorphs: [new InputLine({
                      name: "locationInput",
                      textString: "",
                      historyId: "http-file-browser-location-input-history",
                      padding: Rectangle.inset(4, 2)
                    })].concat(topButtons)
                  }, new Tree({
                    name: "fileTree",
                    treeData: new __varRecorder__.HTTPFileBrowserNode({
                      browser: this,
                      resource: null,
                      isCollapsed: true
                    }),
                    extent: this.extent,
                    lineHeight: 1.6,
                    fontSize: 14,
                    activateOnHover: false,
                    clipMode: "auto",
                    resizeNodes: true,
                    fill: Color.white,
                    borderWidth: {
                      top: 1,
                      bottom: 1,
                      right: 0,
                      left: 0
                    },
                    borderColor: Color.gray,
                    padding: Rectangle.inset(4)
                  }), {
                    type: "label",
                    name: "selectedFileName",
                    padding: Rectangle.inset(2, 2),
                    fontSize: 14,
                    fontFamily: "IBM Plex Mono",
                    readOnly: true,
                    clipMode: "hidden",
                    nativeCursor: "pointer",
                    tooltip: "click to copy",
                    fontWeight: "bold"
                  }, {
                    name: "button container",
                    fill: Color.transparent,
                    layout: new TilingLayout({
                      resizePolicies: bottomButtons.map(function (m) {
                        return [m.name, {
                          height: "fixed",
                          width: "fill"
                        }];
                      })
                    }),
                    submorphs: bottomButtons
                  }];
                  var _this$ui2 = this.ui,
                      fileTree = _this$ui2.fileTree,
                      locationInput = _this$ui2.locationInput,
                      searchButton = _this$ui2.searchButton,
                      reloadButton = _this$ui2.reloadButton,
                      filterButton = _this$ui2.filterButton,
                      openFileButton = _this$ui2.openFileButton,
                      addDirectoryButton = _this$ui2.addDirectoryButton,
                      addFileButton = _this$ui2.addFileButton,
                      renameFileButton = _this$ui2.renameFileButton,
                      deleteFileButton = _this$ui2.deleteFileButton,
                      selectedFileName = _this$ui2.selectedFileName;
                  connect(this, "extent", this, "relayout");
                  connect(locationInput, "inputAccepted", this, "onLocationChanged");
                  connect(fileTree, "selectedNode", this, "showSelectedFile");
                  connect(fileTree, "contextMenuRequested", this, "showMenuFor");
                  connect(searchButton, "fire", this, "execCommand", {
                    converter: function converter() {
                      return "find file and select";
                    }
                  });
                  connect(reloadButton, "fire", this, "execCommand", {
                    converter: function converter() {
                      return "refresh contents";
                    }
                  });
                  connect(filterButton, "fire", this, "execCommand", {
                    converter: function converter() {
                      return "set file filter";
                    }
                  });
                  connect(openFileButton, "fire", this, "execCommand", {
                    converter: function converter() {
                      return "open selected file";
                    }
                  });
                  connect(renameFileButton, "fire", this, "execCommand", {
                    converter: function converter() {
                      return "rename file";
                    }
                  });
                  connect(deleteFileButton, "fire", this, "execCommand", {
                    converter: function converter() {
                      return "delete file or directory";
                    }
                  });
                  connect(addFileButton, "fire", this, "execCommand", {
                    converter: function converter() {
                      return "add file";
                    }
                  });
                  connect(addDirectoryButton, "fire", this, "execCommand", {
                    converter: function converter() {
                      return "add directory";
                    }
                  });
                  connect(selectedFileName, "onMouseDown", this, "execCommand", {
                    converter: function converter() {
                      return "copy file path to clipboard";
                    }
                  });
                  connect(this, "onMouseMove", this, "hideBaseURL");
                  connect(this.ui.fileTree, "onDoubleMouseDown", this, "execCommand", {
                    converter: function converter() {
                      return "open selected file";
                    }
                  });
                  this.onLocationChanged();
                  this.relayout();
                }
              },
              ui: {
                derived: true,
                readOnly: true,
                after: ["submorphs"],
                get: function get() {
                  return {
                    fileTree: this.getSubmorphNamed("fileTree"),
                    locationInput: this.getSubmorphNamed("locationInput"),
                    searchButton: this.getSubmorphNamed("searchButton"),
                    reloadButton: this.getSubmorphNamed("reloadButton"),
                    filterButton: this.getSubmorphNamed("filterButton"),
                    openFileButton: this.getSubmorphNamed("openFileButton"),
                    addDirectoryButton: this.getSubmorphNamed("addDirectoryButton"),
                    addFileButton: this.getSubmorphNamed("addFileButton"),
                    renameFileButton: this.getSubmorphNamed("renameFileButton"),
                    deleteFileButton: this.getSubmorphNamed("deleteFileButton"),
                    selectedFileName: this.getSubmorphNamed("selectedFileName")
                  };
                }
              },
              location: {
                derived: true,
                after: ["submorphs"],
                get: function get() {
                  return resource(this.ui.locationInput.input);
                },
                set: function set(urlOrResource) {
                  this._isLoading = true;
                  var res = typeof urlOrResource === "string" ? resource(urlOrResource) : urlOrResource;
                  if (!res.isDirectory()) res = res.asDirectory();
                  this.ui.locationInput.input = res.url;
                  this.ui.locationInput.acceptInput();
                }
              },
              selectedFile: {
                derived: true,
                after: ["submorphs"],
                get: function get() {
                  var sel = this.ui.fileTree.selectedNode;
                  return sel ? sel.resource : null;
                },
                set: function set(urlOrResource) {
                  if (!urlOrResource) {
                    this.ui.fileTree.selectedNode = null;
                  } else {
                    var res = typeof urlOrResource === "string" ? resource(urlOrResource) : urlOrResource;
                    var node = this.ui.fileTree.nodes.find(function (_ref13) {
                      var resource = _ref13.resource;
                      return resource.url === res.url;
                    });
                    this.ui.fileTree.selectedNode = node;
                  }

                  this.ui.fileTree.focus();
                }
              },
              treeState: {
                derived: true,
                after: ["submorphs"],
                get: function get() {
                  return this.ui.fileTree.buildViewState(function (resource) {
                    return resource.url;
                  });
                },
                set: function set(viewState) {
                  this.ui.fileTree.applyViewState(viewState, function (resource) {
                    return resource.url;
                  });
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./http-file-browser.js";
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
          start: 11657,
          end: 26535
        });
      }({
        referencedAs: "Morph",
        value: Morph
      }));
      __varRecorder__["default"] = HTTPFileBrowser;

    })
  };
}));
