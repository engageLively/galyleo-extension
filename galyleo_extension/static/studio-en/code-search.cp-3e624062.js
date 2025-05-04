System.register(['./__rootModule___commonjs-entry-039abf1b.js', './index-0250cb25.js', './list.cp-50d496c7.js', './ui.cp-d94265c2.js', './loading-indicator.cp-668e5ddc.js', './index-d0172adc.js', './index-d97f22af.js', './client-fb647a5a.js', './editor-modes-0f820fa8.js', './search-cf1a5c4c.js', './shell-interface-e2437883.js', './client-command-99e40f2e.js', './index-009b6510.js'], (function (exports, module) {
  var __contextModule__ = typeof module !== 'undefined' ? module : arguments[1];
;
  var initializeClass, connect, noUpdate, debounceNamed, dissoc, Color, pt, Rectangle, component, TilingLayout, rect, part, Icon, Label, _asyncToGenerator, partition, _slicedToArray, pluck, config, Window, FilterableList, InputLineDefault, DropDownList, DefaultList, localInterface, SystemList, show, callService, ProgressMonitor, open, ButtonDefault;
  return {
    setters: [function (module) {
      initializeClass = module.i;
      connect = module.a;
      noUpdate = module.b5;
      debounceNamed = module.z;
      dissoc = module.y;
      Color = module.C;
      pt = module.b;
      Rectangle = module.R;
      component = module.c;
      TilingLayout = module.T;
      rect = module.ap;
      part = module.p;
      Icon = module.h;
      Label = module.L;
      _asyncToGenerator = module._;
      partition = module.aX;
      _slicedToArray = module.o;
      pluck = module.c9;
      config = module.v;
    }, function (module) {
      Window = module.W;
      FilterableList = module.F;
      InputLineDefault = module.d;
    }, function (module) {
      DropDownList = module.D;
      DefaultList = module.b;
    }, function (module) {
      localInterface = module.l;
      SystemList = module.b;
      show = module.s;
      callService = module.Z;
      ProgressMonitor = module._;
    }, function (module) {
      open = module.o;
      ButtonDefault = module.d;
    }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
    execute: (function () {

      var __varRecorder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/code-search.cp.js", __contextModule__);
      var __moduleMeta__ = {
        pathInPackage: function pathInPackage() {
          return "./code-search.cp.js";
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

      var doSearch = exports('doSearch', __varRecorder__["lively.ide/code-search.cp.js__define__"]("doSearch", "function", /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(livelySystem, searchTerm) {
          var excludedModules,
              excludedPackages,
              includeUnloaded,
              caseSensitive,
              regexMode,
              progress,
              searchResult,
              _arr$partition,
              _arr$partition2,
              errors,
              found,
              _args = arguments;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  excludedModules = _args.length > 2 && _args[2] !== undefined ? _args[2] : [/systemjs-plugin-babel|.*\.min\.js|.*browserified[^/]+js|landing-page|loading-screen/];
                  excludedPackages = _args.length > 3 && _args[3] !== undefined ? _args[3] : [];
                  includeUnloaded = _args.length > 4 && _args[4] !== undefined ? _args[4] : true;
                  caseSensitive = _args.length > 5 && _args[5] !== undefined ? _args[5] : false;
                  regexMode = _args.length > 6 && _args[6] !== undefined ? _args[6] : false;
                  progress = _args.length > 7 ? _args[7] : undefined;

                  if (!(searchTerm.length <= 2)) {
                    _context.next = 8;
                    break;
                  }

                  return _context.abrupt("return", []);

                case 8:
                  if (!(!System.get("@system-env").worker && config.ide.workerEnabled)) {
                    _context.next = 12;
                    break;
                  }

                  _context.next = 11;
                  return callService("doSearch", {
                    livelySystem: livelySystem,
                    searchTerm: searchTerm,
                    excludedModules: excludedModules,
                    excludedPackages: excludedPackages,
                    includeUnloaded: includeUnloaded,
                    caseSensitive: caseSensitive,
                    regexMode: regexMode,
                    progress: progress
                  });

                case 11:
                  return _context.abrupt("return", _context.sent);

                case 12:
                  _context.next = 14;
                  return livelySystem.searchInAllPackages(searchTerm, {
                    caseSensitive: caseSensitive,
                    regexMode: regexMode,
                    excludedModules: excludedModules,
                    excludedPackages: excludedPackages,
                    includeUnloaded: includeUnloaded,
                    progress: progress
                  });

                case 14:
                  searchResult = _context.sent;
                  _arr$partition = partition(searchResult, function (_ref2) {
                    var isError = _ref2.isError;
                    return isError;
                  }), _arr$partition2 = _slicedToArray(_arr$partition, 2), errors = _arr$partition2[0], found = _arr$partition2[1];

                  if (errors.length) {
                    show("Errors in search results:\n".concat(pluck(errors, "value").join("\n")));
                  }

                  return _context.abrupt("return", found.reduce(function (result, ea) {
                    var nameAndLine = "".concat(ea.packageName, "/").concat(ea.pathInPackage, ":").concat(ea.line);
                    result.maxModuleNameLength = Math.max(result.maxModuleNameLength, nameAndLine.length);
                    result.items.push({
                      isListItem: true,
                      value: ea,

                      get string() {
                        return nameAndLine + ea.lineString;
                      }

                    });
                    return result;
                  }, {
                    items: [],
                    maxModuleNameLength: 0
                  }).items);

                case 18:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }(), __moduleMeta__));

      __varRecorder__.doSearch = doSearch;
      __varRecorder__.doSearch = doSearch;
      var CodeSearcher = exports('CodeSearcher', function (superclass) {
        var __lively_classholder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/code-search.cp.js", __contextModule__);

        var __lively_class__ = __lively_classholder__.hasOwnProperty("CodeSearcher") && typeof __lively_classholder__.CodeSearcher === "function" ? __lively_classholder__.CodeSearcher : __lively_classholder__.CodeSearcher = function CodeSearcher(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        if (Object.isFrozen(__lively_classholder__)) {
          return __lively_class__;
        }

        return initializeClass(__lively_class__, superclass, [{
          key: Symbol["for"]("lively-instance-initialize"),
          value: function CodeSearcher_initialize_() {
            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var _this;

            if (props.targetBrowser) props.browser = props.targetBrowser;
            _this = initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), Symbol["for"]("lively-instance-initialize"), this).call(this, props);
            this.reset();
            return _this;
          }
        }, {
          key: "onLoad",
          value: function CodeSearcher_onLoad_() {
            this.reset();
          }
        }, {
          key: "relayout",
          value: function CodeSearcher_relayout_() {}
        }, {
          key: "reset",
          value: function CodeSearcher_reset_() {
            var _this2 = this;

            this.caseModeActive = false;
            this.regexModeActive = false;
            this.currentSearchTerm = "";
            connect(this, "accepted", this, "openSelection");
            this.get("list").items = [];
            this.get("input").input = "";
            this.get("search chooser").items = ["in loaded modules", "in loaded and unloaded modules"];
            noUpdate(function () {
              _this2.get("search chooser").selection = "in loaded modules";
            });
            this.getWindow() && (this.getWindow().title = "Global Code Search");
            connect(this.get("caseMode"), "fire", this, "caseModeToggled", {
              converter: "() => target.searchModeToggled(\"case\")"
            });
            connect(this.get("regexMode"), "fire", this, "regexModeToggled", {
              converter: "() => target.searchModeToggled(\"regex\")"
            });
            connect(this.get("search chooser"), "selection", this, "handleSpecialSearchModes");
            connect(this.get("search chooser"), "selection", this, "searchAgain");
            connect(this.get("reload"), "fire", this, "searchAgain");
            connect(this.get("input"), "inputChanged", this, "updateFilter");
            connect(this.get("list"), "selection", this, "selectionChanged");
            connect(this.get("list"), "onItemMorphDoubleClicked", this, "acceptInput");
          }
        }, {
          key: "handleSpecialSearchModes",
          value: function CodeSearcher_handleSpecialSearchModes_() {
            this.caseModeActive = false;
            this.regexModeActive = false;
            [this.get("caseMode"), this.get("regexMode")].forEach(function (button) {
              return button.master.setState(null);
            });
          }
        }, {
          key: "searchModeToggled",
          value: function CodeSearcher_searchModeToggled_(type) {
            var button = type === "case" ? this.get("caseMode") : this.get("regexMode");
            var active;

            if (type === "case") {
              this.caseModeActive = !this.caseModeActive;
              active = this.caseModeActive;
            }

            if (type === "regex") {
              this.regexModeActive = !this.regexModeActive;
              active = this.regexModeActive;
            }

            button.master.setState(active ? "active" : null);
            this.searchAgain();
          }
        }, {
          key: "ensureIndicator",
          value: function CodeSearcher_ensureIndicator_(label, progress) {
            if (!this.progressIndicator) {
              var win = this.getWindow();
              this.progressIndicator = this.addMorph(open("Searching Files", {
                isLayoutable: false
              }));
              if (win) this.progressIndicator.center = win.innerBounds().center();
            }

            this.progressIndicator.label = "Searching Files";
            this.progressIndicator.status = label;
            if (progress) this.progressIndicator.progress = progress;
          }
        }, {
          key: "removeIndicator",
          value: function CodeSearcher_removeIndicator_() {
            if (this.progressIndicator) this.progressIndicator.remove();
            this.progressIndicator = null;
          }
        }, {
          key: "updateFilter",
          value: function CodeSearcher_updateFilter_() {
            var _this3 = this;

            var searchInput = this.get("input").textString;
            if (searchInput.length <= 2) return;
            this.ensureIndicator("receiving input...");
            debounceNamed(this.id + "updateFilterDebounced", 1200, /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(needle) {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _this3.removeIndicator();

                        _context2.prev = 1;
                        _context2.next = 4;
                        return _this3.searchAndUpdate(needle);

                      case 4:
                        _context2.next = 9;
                        break;

                      case 6:
                        _context2.prev = 6;
                        _context2.t0 = _context2["catch"](1);

                        _this3.world().logError(_context2.t0);

                      case 9:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, null, [[1, 6]]);
              }));

              return function (_x3) {
                return _ref3.apply(this, arguments);
              };
            }())(searchInput);
          }
        }, {
          key: "searchAgain",
          value: function CodeSearcher_searchAgain_() {
            var needle = this.currentSearchTerm;
            if (needle <= 2) return;
            this.getSubmorphNamed("list").items = [];
            this.currentSearchTerm = "";
            this.searchAndUpdate(needle);
          }
        }, {
          key: "searchAndUpdate",
          value: function () {
            var _CodeSearcher_searchAndUpdate_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(searchInput) {
              var _this4 = this;

              var filterTokens, win, searchTerm, newSearch, searchType, searchInModules, searchInAllModules, progressMonitor, filteredItems;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.get("input").acceptInput();
                      filterTokens = searchInput.split(/\s+/).filter(function (ea) {
                        return !!ea;
                      });
                      win = this.getWindow();

                      if (win && win.targetMorph === this) {
                        win.title = "".concat(win.title.split("-")[0].trim(), " - ").concat(filterTokens.join(" + "));
                      }

                      searchTerm = filterTokens.shift();
                      newSearch = searchTerm !== this.currentSearchTerm;

                      if (!newSearch) {
                        _context3.next = 19;
                        break;
                      }

                      this.currentSearchTerm = searchTerm;
                      searchType = this.get("search chooser").selection;
                      searchInModules = searchType === "in loaded modules";
                      searchInAllModules = searchType === "in loaded and unloaded modules";
                      this.ensureIndicator("searching...");
                      progressMonitor = new ProgressMonitor({
                        handlers: {
                          loadingIndicatorUpdater: function loadingIndicatorUpdater(step, percentage) {
                            _this4.ensureIndicator(step, percentage);
                          }
                        }
                      });

                      if (!(searchInModules || searchInAllModules)) {
                        _context3.next = 17;
                        break;
                      }

                      _context3.next = 16;
                      return __varRecorder__.doSearch(this.systemInterface, searchTerm, undefined, config.ide.js.ignoredPackages, !!searchInAllModules, this.caseModeActive, this.regexModeActive, progressMonitor);

                    case 16:
                      this.items = _context3.sent;

                    case 17:
                      this.removeIndicator();
                      this.progressIndicator = null;

                    case 19:
                      filterTokens = filterTokens.map(function (ea) {
                        return ea.toLowerCase();
                      });

                      if (newSearch || this.currentFilters !== filterTokens.join("+")) {
                        this.currentFilters = filterTokens.join("+");
                        filteredItems = this.items.filter(function (item) {
                          return filterTokens.every(function (token) {
                            return item.string.toLowerCase().includes(token);
                          });
                        });
                        this.get("list").items = filteredItems;
                      }

                    case 21:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function CodeSearcher_searchAndUpdate_(_x4) {
              return _CodeSearcher_searchAndUpdate_.apply(this, arguments);
            }

            return CodeSearcher_searchAndUpdate_;
          }()
        }, {
          key: "openSelection",
          value: function () {
            var _CodeSearcher_openSelection_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var sel;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      sel = this.selection;

                      if (sel) {
                        _context4.next = 3;
                        break;
                      }

                      return _context4.abrupt("return");

                    case 3:
                      return _context4.abrupt("return", this.openBrowserForSelection());

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function CodeSearcher_openSelection_() {
              return _CodeSearcher_openSelection_.apply(this, arguments);
            }

            return CodeSearcher_openSelection_;
          }()
        }, {
          key: "openBrowserForSelection",
          value: function () {
            var _CodeSearcher_openBrowserForSelection_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var browser, _this$selection, column, line, packageName, pathInPackage, browserOrProps, browseSpec, Browser;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      if (this.selection) {
                        _context5.next = 2;
                        break;
                      }

                      return _context5.abrupt("return");

                    case 2:
                      browser = this.browser, _this$selection = this.selection, column = _this$selection.column, line = _this$selection.line, packageName = _this$selection.packageName, pathInPackage = _this$selection.pathInPackage;
                      browserOrProps = browser;
                      browseSpec = {
                        packageName: packageName,
                        moduleName: pathInPackage,
                        textPosition: {
                          column: column,
                          row: line - 1
                        }
                      };
                      _context5.next = 7;
                      return module.import('./ui.cp-d94265c2.js').then(function (n) { return n.ag; });

                    case 7:
                      Browser = _context5.sent;
                      _context5.next = 10;
                      return Browser.browse(browseSpec, browserOrProps || {}, browser ? browser.systemInterface : this.systemInterface);

                    case 10:
                      browser = _context5.sent;
                      browser.associatedSearchPanel = this;
                      return _context5.abrupt("return", browser.getWindow().activate());

                    case 13:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function CodeSearcher_openBrowserForSelection_() {
              return _CodeSearcher_openBrowserForSelection_.apply(this, arguments);
            }

            return CodeSearcher_openBrowserForSelection_;
          }()
        }, {
          key: "onWindowActivated",
          value: function CodeSearcher_onWindowActivated_() {
            this.get("input").selectAll();
          }
        }, {
          key: "commands",
          get: function get() {
            var chooser = this.get("search chooser");
            return initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "commands", this).concat([{
              name: "toggle search in unloaded modules",
              exec: function exec() {
                chooser.selection = chooser.selection === "in loaded modules" ? "in loaded and unloaded modules" : "in loaded modules";
                return true;
              }
            }]);
          }
        }, {
          key: "keybindings",
          get: function get() {
            return [{
              keys: "F1",
              command: "toggle search in unloaded modules"
            }].concat(initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "keybindings", this));
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "CodeSearcher";
          }
        }, {
          key: "inWindow",
          value: function CodeSearcher_inWindow_() {
            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
              title: "Global Code Search",
              targetBrowser: null,
              systemInterface: null
            };
            var searcher = new this(props);
            var win = new Window(Object.assign({}, dissoc(props, ["targetBrowser", "systemInterface"]), {
              extent: searcher.extent.addXY(0, 25),
              targetMorph: searcher
            }));
            connect(win, "windowActivated", searcher, "onWindowActivated");
            return win;
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              fill: {
                defaultValue: Color.transparent
              },
              extent: {
                defaultValue: pt(800, 500)
              },
              fontFamily: {
                defaultValue: "IBM Plex Mono"
              },
              fontSize: {
                defaultValue: 12
              },
              inputPadding: {
                defaultValue: Rectangle.inset(5)
              },
              itemPadding: {
                defaultValue: Rectangle.inset(4, 2)
              },
              borderWidth: {
                defaultValue: 0
              },
              historyId: {
                defaultValue: "lively.morphic-code searcher"
              },
              input: {
                after: ["submorphs"],
                derived: true,
                get: function get() {
                  return this.getSubmorphNamed("input").input;
                },
                set: function set(input) {
                  this.getSubmorphNamed("input").input = input;
                }
              },
              browser: {
                set: function set(browser) {
                  this.setProperty("browser", browser ? browser.id : null);
                },
                get: function get() {
                  var w = this.world();
                  var id = this.getProperty("browser");
                  return !w || !id ? null : w.getMorphWithId(id);
                }
              },
              systemInterface: {
                after: ["browser"],
                derived: true,
                get: function get() {
                  var browser = this.browser;
                  return browser ? browser.systemInterface : this.getProperty("systemInterface") || localInterface;
                },
                set: function set(systemInterface) {
                  var browser = this.browser;
                  if (browser) browser.systemInterface = systemInterface;else this.setProperty("systemInterface", systemInterface);
                }
              },
              currentSearchTerm: {
                defaultValue: ""
              },
              currentFilters: {
                defaultValue: ""
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./code-search.cp.js";
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
          start: 2283,
          end: 10720
        });
      }({
        referencedAs: "FilterableList",
        value: FilterableList
      }));
      __varRecorder__.CodeSearcher = CodeSearcher;
      __varRecorder__.CodeSearcher = CodeSearcher;
      __varRecorder__.ModeButtonInactive = component["for"](function () {
        return component(ButtonDefault, {
          extent: pt(27, 27),
          borderStyle: "none",
          fill: Color.transparent
        });
      }, {
        module: "lively.ide/code-search.cp.js",
        "export": "ModeButtonInactive",
        range: {
          start: 10728,
          end: 10849
        }
      }, System, __varRecorder__, "ModeButtonInactive");
      __varRecorder__.ModeButtonInactiveHover = component["for"](function () {
        return component(__varRecorder__.ModeButtonInactive, {
          fill: Color.gray
        });
      }, {
        module: "lively.ide/code-search.cp.js",
        "export": "ModeButtonInactiveHover",
        range: {
          start: 10858,
          end: 10937
        }
      }, System, __varRecorder__, "ModeButtonInactiveHover");
      __varRecorder__.ModeButtonActiveClick = __varRecorder__.ModeButtonInactiveHover;
      __varRecorder__.ModeButtonInactiveClick = component["for"](function () {
        return component(__varRecorder__.ModeButtonInactive, {
          fill: Color.darkGray
        });
      }, {
        module: "lively.ide/code-search.cp.js",
        "export": "ModeButtonInactiveClick",
        range: {
          start: 11002,
          end: 11085
        }
      }, System, __varRecorder__, "ModeButtonInactiveClick");
      __varRecorder__.ModeButtonActiveHover = __varRecorder__.ModeButtonInactiveClick;
      __varRecorder__.ModeButtonActive = component["for"](function () {
        return component(__varRecorder__.ModeButtonInactive, {
          fill: Color.darkGray,
          submorphs: [{
            name: "label",
            fontColor: Color.white
          }]
        });
      }, {
        module: "lively.ide/code-search.cp.js",
        "export": "ModeButtonActive",
        range: {
          start: 11150,
          end: 11294
        }
      }, System, __varRecorder__, "ModeButtonActive");
      __varRecorder__.ModeButtonDisabled = component["for"](function () {
        return component(__varRecorder__.ModeButtonInactive, {
          visible: false,
          reactsToPointer: false
        });
      }, {
        module: "lively.ide/code-search.cp.js",
        "export": "ModeButtonDisabled",
        range: {
          start: 11303,
          end: 11401
        }
      }, System, __varRecorder__, "ModeButtonDisabled");
      __varRecorder__.CodeSearch = component["for"](function () {
        return component({
          type: __varRecorder__.CodeSearcher,
          name: "Global Code Search",
          acceptsDrops: false,
          fill: Color.transparent,
          extent: pt(538, 421.5),
          layout: new TilingLayout({
            axis: "column",
            orderByIndex: true,
            resizePolicies: [["controls holder", {
              height: "fixed",
              width: "fill"
            }], ["list", {
              height: "fill",
              width: "fill"
            }]],
            spacing: 5,
            renderViaCSS: false
          }),
          selectedAction: "default",
          submorphs: [{
            name: "controls holder",
            height: 43.0921875,
            layout: new TilingLayout({
              axisAlign: "right",
              orderByIndex: true,
              padding: rect(5, 0, -5, 0),
              resizePolicies: [["input", {
                height: "fixed",
                width: "fill"
              }], ["holder", {
                height: "fixed"
              }]],
              spacing: 2
            }),
            borderColor: Color.rgb(23, 160, 251),
            fill: Color.transparent,
            position: pt(17.3, 247.4),
            submorphs: [part(__varRecorder__.ModeButtonInactive, {
              master: {
                click: __varRecorder__.ModeButtonInactiveClick,
                hover: __varRecorder__.ModeButtonInactiveHover
              },
              name: "reload",
              position: pt(-415.8, -407.5),
              submorphs: [{
                name: "label",
                fontColor: Color.rgb(60, 60, 60),
                textAndAttributes: Icon.textAttribute("rotate-right")
              }],
              tooltip: "Refresh Search Results"
            }), part(InputLineDefault, {
              name: "input",
              borderRadius: 6,
              borderWidth: 1,
              extent: pt(243, 27),
              fontFamily: "IBM Plex Mono",
              fontSize: 14,
              haloShadow: {
                blur: 6,
                color: Color.rgb(52, 152, 219),
                distance: 0,
                rotation: 45
              },
              historyId: "lively.morphic-code searcher",
              padding: rect(5, 5, 0, 0),
              placeholder: "Search Source Files",
              submorphs: [{
                name: "placeholder",
                extent: pt(134, 29),
                fontSize: 14,
                padding: rect(5, 5, 0, 0),
                lineHeight: 1,
                textAndAttributes: ["Search Source Files", null]
              }]
            }), {
              name: "holder",
              extent: pt(89.7, 27),
              fill: Color.transparent,
              layout: new TilingLayout({
                align: "right",
                axisAlign: "center",
                hugContentsHorizontally: true,
                orderByIndex: true,
                padding: rect(0, 0, 5, 0),
                spacing: 2
              }),
              position: pt(0, 33),
              submorphs: [part(__varRecorder__.ModeButtonInactive, {
                master: {
                  click: __varRecorder__.ModeButtonInactiveClick,
                  hover: __varRecorder__.ModeButtonInactiveHover,
                  states: {
                    active: component(__varRecorder__.ModeButtonActive, {
                      master: {
                        click: __varRecorder__.ModeButtonActiveClick,
                        hover: __varRecorder__.ModeButtonActiveHover
                      }
                    })
                  }
                },
                tooltip: "Search Case Sensitive",
                name: "caseMode",
                extent: pt(27, 22),
                submorphs: [{
                  type: Label,
                  name: "label",
                  textAndAttributes: Icon.textAttribute("circle-h")
                }]
              }), part(__varRecorder__.ModeButtonInactive, {
                master: {
                  click: __varRecorder__.ModeButtonInactiveClick,
                  hover: __varRecorder__.ModeButtonInactiveHover,
                  states: {
                    active: component(__varRecorder__.ModeButtonActive, {
                      master: {
                        click: __varRecorder__.ModeButtonActiveClick,
                        hover: __varRecorder__.ModeButtonActiveHover
                      }
                    })
                  }
                },
                tooltip: "Search based on regular expressions.\nRegular expression should be given without quotes or literal mode slashes.",
                name: "regexMode",
                extent: pt(27, 22),
                submorphs: [{
                  type: Label,
                  name: "label",
                  textAndAttributes: Icon.textAttribute("circle-question")
                }]
              }), part(DropDownList, {
                name: "search chooser",
                master: {
                  auto: __varRecorder__.ModeButtonActive,
                  click: __varRecorder__.ModeButtonInactiveClick
                },
                viewModel: {
                  openListInWorld: true,
                  listMaster: SystemList,
                  items: ["in loaded modules", "in loaded and unloaded modules"]
                },
                borderColor: Color.gray,
                borderStyle: "none",
                extent: pt(63, 22),
                fill: Color.darkGray,
                layout: new TilingLayout({
                  align: "center",
                  axisAlign: "center",
                  hugContentsHorizontally: true,
                  orderByIndex: true,
                  padding: rect(10, 0, 0, 0)
                }),
                submorphs: [{
                  name: "label",
                  fontColor: Color.white
                }]
              })]
            }]
          }, part(DefaultList, {
            name: "list",
            extent: pt(538.7, 279.6),
            fontFamily: "IBM Plex Mono",
            itemPadding: rect(4, 2, 0, 0),
            padding: rect(2, 0, 0, 0),
            position: pt(0, 27)
          })]
        });
      }, {
        module: "lively.ide/code-search.cp.js",
        "export": "CodeSearch",
        range: {
          start: 11410,
          end: 16319
        }
      }, System, __varRecorder__, "CodeSearch");
      var CodeSearch = exports('CodeSearch', __varRecorder__.CodeSearch);
      var ModeButtonActive = exports('ModeButtonActive', __varRecorder__.ModeButtonActive);
      var ModeButtonInactive = exports('ModeButtonInactive', __varRecorder__.ModeButtonInactive);
      var ModeButtonActiveClick = exports('ModeButtonActiveClick', __varRecorder__.ModeButtonActiveClick);
      var ModeButtonInactiveClick = exports('ModeButtonInactiveClick', __varRecorder__.ModeButtonInactiveClick);
      var ModeButtonActiveHover = exports('ModeButtonActiveHover', __varRecorder__.ModeButtonActiveHover);
      var ModeButtonInactiveHover = exports('ModeButtonInactiveHover', __varRecorder__.ModeButtonInactiveHover);
      var ModeButtonDisabled = exports('ModeButtonDisabled', __varRecorder__.ModeButtonDisabled);
      __varRecorder__.CodeSearch = CodeSearch;
      __varRecorder__.ModeButtonActive = ModeButtonActive;
      __varRecorder__.ModeButtonInactive = ModeButtonInactive;
      __varRecorder__.ModeButtonActiveClick = ModeButtonActiveClick;
      __varRecorder__.ModeButtonInactiveClick = ModeButtonInactiveClick;
      __varRecorder__.ModeButtonActiveHover = ModeButtonActiveHover;
      __varRecorder__.ModeButtonInactiveHover = ModeButtonInactiveHover;
      __varRecorder__.ModeButtonDisabled = ModeButtonDisabled;

    })
  };
}));
