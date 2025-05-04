System.register(['./__rootModule___commonjs-entry-43c0966d.js', './index-9832bcb3.js', './list.cp-e5de22f3.js', './loading-indicator.cp-bf9ec992.js'], (function (exports) {
  var __contextModule__ = typeof module !== 'undefined' ? module : arguments[1];
;
  var _asyncToGenerator, MorphicDB, _slicedToArray, initializeClass, Rectangle, Color, connect, pt, rect, ConstraintLayout, Morph, _toConsumableArray, _missingExportShim, part, signal, Icon, noUpdate, _createForOfIteratorHelper, component, add, TilingLayout, Label, Text, ShadowObject, Path, resource, ensureCommitInfo, Checkbox, ConfirmPromptModel, DarkPrompt, InputLineDark, OKCancelButtonWrapper, DarkDropDownList, DarkList;
  return {
    setters: [function (module) {
      _asyncToGenerator = module._;
      MorphicDB = module.am;
      _slicedToArray = module.o;
      initializeClass = module.i;
      Rectangle = module.R;
      Color = module.C;
      connect = module.a;
      pt = module.b;
      rect = module.ap;
      ConstraintLayout = module.at;
      Morph = module.M;
      _toConsumableArray = module.r;
      _missingExportShim = module.c0;
      part = module.p;
      signal = module.s;
      Icon = module.h;
      noUpdate = module.b5;
      _createForOfIteratorHelper = module.a6;
      component = module.c;
      add = module.ar;
      TilingLayout = module.T;
      Label = module.L;
      Text = module.j;
      ShadowObject = module.ao;
      Path = module.bw;
      resource = module.ac;
      ensureCommitInfo = module.dz;
    }, function (module) {
      Checkbox = module.e;
      ConfirmPromptModel = module.q;
      DarkPrompt = module.D;
      InputLineDark = module.a;
      OKCancelButtonWrapper = module.O;
    }, function (module) {
      DarkDropDownList = module.a;
      DarkList = module.c;
    }, function () {}],
    execute: (function () {

      var __varRecorder__$1 = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.morphic/morphicdb/tools.js", __contextModule__);
      var __moduleMeta__ = {
        pathInPackage: function pathInPackage() {
          return "./morphicdb/tools.js";
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

      var lastChoiceFromLocalStorage = __varRecorder__$1["lively.morphic/morphicdb/tools.js__define__"]("lastChoiceFromLocalStorage", "function", function () {
        if (typeof localStorage === "undefined") return null;

        try {
          return localStorage["lively.morphic-morphicdb/current"];
        } catch (e) {
          return null;
        }
      }, __moduleMeta__);

      __varRecorder__$1.lastChoiceFromLocalStorage = lastChoiceFromLocalStorage;

      var currentMorphicDBConsideringLocalStorage = __varRecorder__$1["lively.morphic/morphicdb/tools.js__define__"]("currentMorphicDBConsideringLocalStorage", "function", function (wellKnownMorphicDBs) {
        var alias = __varRecorder__$1.lastChoiceFromLocalStorage();

        return alias && wellKnownMorphicDBs[alias] || wellKnownMorphicDBs["default"];
      }, __moduleMeta__);

      __varRecorder__$1.currentMorphicDBConsideringLocalStorage = currentMorphicDBConsideringLocalStorage;

      var interactivelyChosenCurrentMorphicDB = __varRecorder__$1["lively.morphic/morphicdb/tools.js__define__"]("interactivelyChosenCurrentMorphicDB", "function", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = __varRecorder__$1;
                _context.next = 3;
                return MorphicDB.wellKnownMorphicDBs();

              case 3:
                _context.t1 = _context.sent;
                return _context.abrupt("return", _context.t0.currentMorphicDBConsideringLocalStorage.call(_context.t0, _context.t1));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })), __moduleMeta__);

      __varRecorder__$1.interactivelyChosenCurrentMorphicDB = interactivelyChosenCurrentMorphicDB;

      var interactivelyChooseMorphicDB = __varRecorder__$1["lively.morphic/morphicdb/tools.js__define__"]("interactivelyChooseMorphicDB", "function", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var dbs, lastDBAlias, dbList, _yield$__varRecorder_, _yield$__varRecorder_2, db;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return MorphicDB.wellKnownMorphicDBs();

              case 2:
                dbs = _context2.sent;
                lastDBAlias = __varRecorder__$1.lastChoiceFromLocalStorage() || "default";
                dbList = Object.keys(dbs).map(function (alias) {
                  var _dbs$alias = dbs[alias],
                      name = _dbs$alias.name,
                      serverURL = _dbs$alias.serverURL,
                      snapshotLocation = _dbs$alias.snapshotLocation;
                  return {
                    alias: alias,
                    name: name,
                    serverURL: serverURL,
                    snapshotLocation: snapshotLocation,
                    selected: alias === lastDBAlias
                  };
                });
                _context2.next = 7;
                return __varRecorder__$1.MorphicDBSelectionPrompt.open(dbList, {});

              case 7:
                _yield$__varRecorder_ = _context2.sent;
                _yield$__varRecorder_2 = _slicedToArray(_yield$__varRecorder_.selectedDBs, 1);
                db = _yield$__varRecorder_2[0];

                if (db) {
                  if (db.alias === "default") {
                    delete localStorage["lively.morphic-morphicdb/current"];
                  } else {
                    localStorage["lively.morphic-morphicdb/current"] = db.alias;
                  }
                } else {
                  delete localStorage["lively.morphic-morphicdb/current"];
                }

                return _context2.abrupt("return", {
                  db: db,
                  dbs: dbs
                });

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      })), __moduleMeta__);

      __varRecorder__$1.interactivelyChooseMorphicDB = interactivelyChooseMorphicDB;
      __varRecorder__$1.interactivelyChosenCurrentMorphicDB = interactivelyChosenCurrentMorphicDB;
      __varRecorder__$1.interactivelyChooseMorphicDB = interactivelyChooseMorphicDB;
      var MorphicDBPrompt = function (superclass) {
        var __lively_classholder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.morphic/morphicdb/tools.js", __contextModule__);

        var __lively_class__ = __lively_classholder__.hasOwnProperty("MorphicDBPrompt") && typeof __lively_classholder__.MorphicDBPrompt === "function" ? __lively_classholder__.MorphicDBPrompt : __lively_classholder__.MorphicDBPrompt = function MorphicDBPrompt(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        if (Object.isFrozen(__lively_classholder__)) {
          return __lively_class__;
        }

        return initializeClass(__lively_class__, superclass, [{
          key: "build",
          value: function MorphicDBPrompt_build_() {
            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var serverURL = props.serverURL,
                snapshotLocation = props.snapshotLocation,
                dbName = props.dbName,
                extent = props.extent,
                historyId = props.historyId,
                alias = props.alias;
            this.submorphs = [{
              name: "alias label",
              type: "label",
              value: "alias",
              fill: null,
              padding: Rectangle.inset(3),
              fontSize: 14,
              fontColor: Color.gray
            }, {
              name: "dbname label",
              type: "label",
              value: "db name",
              fill: null,
              padding: Rectangle.inset(3),
              fontSize: 14,
              fontColor: Color.gray
            }, {
              name: "snapshot location label",
              type: "label",
              value: "snapshot location",
              fill: null,
              padding: Rectangle.inset(3),
              fontSize: 14,
              fontColor: Color.gray
            }, {
              name: "server url label",
              type: "label",
              value: "server url",
              fill: null,
              padding: Rectangle.inset(3),
              fontSize: 14,
              fontColor: Color.gray
            }, {
              name: "alias input",
              type: "input",
              historyId: historyId ? historyId + "-alias" : null,
              padding: Rectangle.inset(3),
              fontSize: 11
            }, {
              name: "dbname input",
              type: "input",
              historyId: historyId ? historyId + "-dbname" : null,
              padding: Rectangle.inset(3),
              fontSize: 11
            }, {
              name: "snapshot location input",
              type: "input",
              historyId: historyId ? historyId + "-snapshot" : null,
              padding: Rectangle.inset(3),
              fontSize: 11
            }, {
              name: "server url input",
              type: "input",
              historyId: historyId ? historyId + "-server" : null,
              padding: Rectangle.inset(3),
              fontSize: 11
            }, {
              master: {
                auto: "styleguide://SystemPrompts/prompts/buttons/ok/default",
                click: "styleguide://SystemPrompts/prompts/buttons/ok/pressed"
              },
              name: "ok button",
              type: "button"
            }, {
              master: {
                auto: "styleguide://SystemPrompts/prompts/buttons/cancel/default",
                click: "styleguide://SystemPrompts/prompts/buttons/cancel/pressed"
              },
              name: "cancel button",
              type: "button"
            }];

            var _this$submorphs = _slicedToArray(this.submorphs, 6),
                aliasInput = _this$submorphs[0],
                dbnameInput = _this$submorphs[1],
                snapshotLocationInput = _this$submorphs[2],
                serverUrlInput = _this$submorphs[3],
                okButton = _this$submorphs[4],
                cancelButton = _this$submorphs[5];

            if (alias) aliasInput.input = alias;
            if (dbName) dbnameInput.input = dbName;
            if (snapshotLocation) snapshotLocationInput.input = snapshotLocation;
            if (serverURL) serverUrlInput.input = serverURL;
            connect(okButton, "fire", this, "resolve");
            connect(cancelButton, "fire", this, "reject");
            this.extent = pt(600, 128);
            this.initLayout(!!alias);
            if (extent) this.extent = extent;
          }
        }, {
          key: "resolve",
          value: function MorphicDBPrompt_resolve_() {
            var aliasInput = this.get("alias input");
            var dbnameInput = this.get("dbname input");
            var snapshotLocationInput = this.get("snapshot location input");
            var serverUrlInput = this.get("server url input");
            serverUrlInput.acceptInput();
            snapshotLocationInput.acceptInput();
            dbnameInput.acceptInput();

            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "resolve", this).call(this, {
              alias: aliasInput.input,
              dbName: dbnameInput.input,
              snapshotLocation: snapshotLocationInput.input,
              serverURL: serverUrlInput.input,
              status: "accepted"
            });
          }
        }, {
          key: "reject",
          value: function MorphicDBPrompt_reject_() {
            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "resolve", this).call(this, {
              status: "rejected"
            });
          }
        }, {
          key: "initLayout",
          value: function MorphicDBPrompt_initLayout_() {
            var showAlias = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var bounds = this.innerBounds();
            var relBounds = [rect(0.02, 0.05, 0.15, 0.19), rect(0.02, 0.23, 0.22, 0.19), rect(0.02, 0.42, 0.16, 0.19), rect(0.02, 0.6, 0.16, 0.19), rect(0.23, 0.05, 0.76, 0.15), rect(0.23, 0.23, 0.76, 0.15), rect(0.23, 0.42, 0.76, 0.15), rect(0.23, 0.6, 0.76, 0.15), rect(0.31, 0.79, 0.18, 0.17), rect(0.51, 0.8, 0.18, 0.16)];
            var realBounds = bounds.divide(relBounds);

            if (!showAlias) {
              relBounds.splice(3, 1);
              relBounds.splice(7, 1);
            }

            this.submorphs.map(function (ea, i) {
              return ea.setBounds(realBounds[i]);
            });
            this.layout = new ConstraintLayout({
              submorphSettings: [["alias label", "fixed"], ["server url label", "fixed"], ["snapshot location label", "fixed"], ["dbname label", "fixed"], ["alias input", {
                x: "resize",
                y: "fixed"
              }], ["server url input", {
                x: "resize",
                y: "fixed"
              }], ["snapshot location input", {
                x: "resize",
                y: "fixed"
              }], ["dbname input", {
                x: "resize",
                y: "fixed"
              }]]
            });
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "MorphicDBPrompt";
          }
        }, {
          key: "open",
          value: function MorphicDBPrompt_open_(dbName, snapshotLocation, serverURL, opts) {
            var world = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : $world;
            opts = Object.assign({}, opts, {
              serverURL: serverURL,
              snapshotLocation: snapshotLocation,
              dbName: dbName
            });
            return world.openPrompt(new this(opts), opts);
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./morphicdb/tools.js";
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
        }, {
          start: 1598,
          end: 6427
        });
      }({
        referencedAs: "Morph",
        value: Morph
      });
      __varRecorder__$1.MorphicDBPrompt = MorphicDBPrompt;
      __varRecorder__$1.MorphicDBPrompt = MorphicDBPrompt;
      var MorphicDBSelectionPrompt = function (superclass) {
        var __lively_classholder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.morphic/morphicdb/tools.js", __contextModule__);

        var __lively_class__ = __lively_classholder__.hasOwnProperty("MorphicDBSelectionPrompt") && typeof __lively_classholder__.MorphicDBSelectionPrompt === "function" ? __lively_classholder__.MorphicDBSelectionPrompt : __lively_classholder__.MorphicDBSelectionPrompt = function MorphicDBSelectionPrompt(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        if (Object.isFrozen(__lively_classholder__)) {
          return __lively_class__;
        }

        return initializeClass(__lively_class__, superclass, [{
          key: "build",
          value: function MorphicDBSelectionPrompt_build_() {
            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var allowMultipleSelections = props.allowMultipleSelections,
                dbList = props.dbList,
                extent = props.extent;
            var dbListMorph = new __varRecorder__$1.MorphicDBList({
              itemSettings: {
                showSelect: true
              },
              allowMultipleSelections: allowMultipleSelections,
              dbInfos: dbList,
              draggable: false
            });
            this.submorphs = [dbListMorph];
            dbListMorph.fill = null;
            connect(dbListMorph, "closed", this, "reject");
            connect(dbListMorph, "accepted", this, "resolve");
            if (extent) this.extent = extent;else connect(dbListMorph, "extent", this, "extent");
          }
        }, {
          key: "resolve",
          value: function MorphicDBSelectionPrompt_resolve_() {
            var dbListMorph = this.submorphs[0];

            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "resolve", this).call(this, {
              dbs: dbListMorph.dbs(),
              selectedDBs: dbListMorph.selectedDBs(),
              status: "accepted"
            });
          }
        }, {
          key: "reject",
          value: function MorphicDBSelectionPrompt_reject_() {
            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "resolve", this).call(this, {
              status: "rejected",
              dbs: [],
              selectedDBs: []
            });
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "MorphicDBSelectionPrompt";
          }
        }, {
          key: "open",
          value: function MorphicDBSelectionPrompt_open_(dbList) {
            var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var world = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : $world;
            opts = Object.assign({
              allowMultipleSelections: false,
              dbList: dbList
            }, opts);
            return world.openPrompt(new this(opts), opts);
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./morphicdb/tools.js";
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
        }, {
          start: 6436,
          end: 7476
        });
      }({
        referencedAs: "Morph",
        value: Morph
      });
      __varRecorder__$1.MorphicDBSelectionPrompt = MorphicDBSelectionPrompt;
      __varRecorder__$1.MorphicDBSelectionPrompt = MorphicDBSelectionPrompt;

      (function (superclass) {
        var __lively_classholder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.morphic/morphicdb/tools.js", __contextModule__);

        var __lively_class__ = __lively_classholder__.hasOwnProperty("MorphicDBWidget") && typeof __lively_classholder__.MorphicDBWidget === "function" ? __lively_classholder__.MorphicDBWidget : __lively_classholder__.MorphicDBWidget = function MorphicDBWidget(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        if (Object.isFrozen(__lively_classholder__)) {
          return __lively_class__;
        }

        return initializeClass(__lively_class__, superclass, [{
          key: "isMorphicDBWidget",
          get: function get() {
            return true;
          }
        }, {
          key: "updateView",
          value: function MorphicDBWidget_updateView_() {
            var controls = [];
            var showEdit = this.showEdit,
                showRemove = this.showRemove,
                showSelect = this.showSelect,
                dbInfo = this.dbInfo;

            var _ref3 = dbInfo || {},
                _ref3$alias = _ref3.alias,
                alias = _ref3$alias === void 0 ? "" : _ref3$alias,
                _ref3$serverURL = _ref3.serverURL,
                serverURL = _ref3$serverURL === void 0 ? "" : _ref3$serverURL,
                _ref3$snapshotLocatio = _ref3.snapshotLocation,
                snapshotLocation = _ref3$snapshotLocatio === void 0 ? "" : _ref3$snapshotLocatio,
                removable = _ref3.removable,
                editable = _ref3.editable;

            if (!editable) showEdit = false;
            if (!removable) showRemove = false;

            if (showEdit) {
              controls.push({
                master: {
                  auto: "styleguide://SystemPrompts/prompts/buttons/ok/default",
                  click: "styleguide://SystemPrompts/prompts/buttons/ok/pressed"
                },
                type: "button",
                name: "edit button",
                label: "edit"
              });
            }

            if (showRemove) {
              controls.push({
                master: {
                  auto: "styleguide://SystemPrompts/prompts/buttons/cancel/default",
                  click: "styleguide://SystemPrompts/prompts/buttons/cancel/pressed"
                },
                type: "button",
                name: "remove button",
                label: "remove"
              });
            }

            this.submorphs = [{
              type: "label",
              name: "alias",
              value: ["alias: ", null, alias, {
                fontWeight: "bold"
              }]
            }, {
              type: "label",
              name: "snapshotLocation",
              value: "snapshots: ".concat(snapshotLocation)
            }, {
              type: "label",
              name: "serverURL",
              value: "backend: ".concat(serverURL)
            }].concat(_toConsumableArray(!controls.length ? [] : [{
              name: "controls",
              layout: new _missingExportShim({
                spacing: 2
              }),
              fill: null,
              submorphs: controls
            }]));

            if (showEdit) {
              var editBtn = this.getSubmorphNamed("edit button");
              connect(editBtn, "fire", this, "triggerDBEdit");
            }

            if (showRemove) {
              var removeBtn = this.getSubmorphNamed("remove button");
              connect(removeBtn, "fire", this, "triggerDBRemove");
            }

            if (showSelect) {
              var cb = part(Checkbox, {
                name: "selected",
                viewModel: {
                  checked: false
                },
                isLayoutable: false,
                leftCenter: pt(5, this.height / 2 - (showRemove || showEdit ? 10 : 20))
              });
              connect(cb, "checked", this, "onDBSelectionChange");
            }
          }
        }, {
          key: "onDBSelectionChange",
          value: function MorphicDBWidget_onDBSelectionChange_(selected) {
            signal(this, "selected", this, selected);
          }
        }, {
          key: "triggerDBEdit",
          value: function MorphicDBWidget_triggerDBEdit_() {
            signal(this, "edit", this);
          }
        }, {
          key: "triggerDBRemove",
          value: function MorphicDBWidget_triggerDBRemove_() {
            signal(this, "remove", this);
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "MorphicDBWidget";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              extent: {
                defaultValue: pt(120, 90)
              },
              fill: {
                defaultValue: Color.rgb(230, 230, 230)
              },
              dbInfo: {
                defaultValue: null
              },
              showSelect: {
                defaultValue: true
              },
              showEdit: {
                defaultValue: true
              },
              showRemove: {
                defaultValue: true
              },
              selected: {
                after: ["submorphs"],
                derived: true,
                get: function get() {
                  var cb = this.getSubmorphNamed("selected");
                  return cb && cb.checked;
                },
                set: function set(val) {
                  var cb = this.getSubmorphNamed("selected");
                  if (cb) cb.checked = val;
                }
              },
              submorphs: {
                after: ["showSelect", "showEdit", "showRemove", "dbInfo"],
                initialize: function initialize() {
                  this.updateView();
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./morphicdb/tools.js";
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
        }, {
          start: 7478,
          end: 10535
        });
      })({
        referencedAs: "Morph",
        value: Morph
      });

      var MorphicDBList = function (superclass) {
        var __lively_classholder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.morphic/morphicdb/tools.js", __contextModule__);

        var __lively_class__ = __lively_classholder__.hasOwnProperty("MorphicDBList") && typeof __lively_classholder__.MorphicDBList === "function" ? __lively_classholder__.MorphicDBList : __lively_classholder__.MorphicDBList = function MorphicDBList(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        if (Object.isFrozen(__lively_classholder__)) {
          return __lively_class__;
        }

        return initializeClass(__lively_class__, superclass, [{
          key: "updateView",
          value: function MorphicDBList_updateView_() {
            var _this = this;

            var layout = this.layout,
                itemSettings = this.itemSettings,
                dbInfos = this.dbInfos,
                showAddButton = this.showAddButton,
                showCloseButton = this.showCloseButton,
                showOKButton = this.showOKButton;

            if (!layout) {
              layout = this.layout = new _missingExportShim({
                align: "center",
                spacing: 4
              });
            }

            this.submorphs = dbInfos.map(function (info) {
              return new __varRecorder__$1.MorphicDBWidget(Object.assign({}, itemSettings, {
                selected: info.selected,
                dbInfo: info
              }));
            });
            this.submorphs.forEach(function (ea) {
              return connect(ea, "selected", _this, "onDBSelected");
            });

            if (showAddButton || showOKButton) {
              var addBtn = showAddButton && this.addMorph({
                type: "button",
                label: Icon.makeLabel("plus")
              });
              var okBtn = showOKButton && this.addMorph({
                type: "button",
                label: Icon.makeLabel("check")
              });
              this.addMorph({
                name: "buttons",
                fill: null,
                layout: new _missingExportShim({
                  spacing: 5
                }),
                submorphs: [okBtn, addBtn].filter(Boolean)
              });
              addBtn && connect(addBtn, "fire", this, "interactivelyAddDB");
              okBtn && connect(okBtn, "fire", this, "accept");
            }

            if (showCloseButton) {
              var closeBtn = this.addMorph({
                name: "close button",
                type: "button",
                label: Object.assign(Icon.makeLabel("times-circle"), {
                  fontSize: 18
                }),
                tooltip: "close",
                fill: null,
                extent: pt(16, 16),
                borderColor: Color.transparent,
                isLayoutable: false
              });
              connect(this, "extent", closeBtn, "center", {
                converter: function converter(ext) {
                  return ext.withY(0).addXY(-3, 3);
                }
              });
              closeBtn.center = this.innerBounds().topRight();
              connect(closeBtn, "fire", this, "close");
            }

            this.whenRendered(50).then(function () {
              return layout.apply();
            });
          }
        }, {
          key: "close",
          value: function MorphicDBList_close_() {
            signal(this, "closed", this);
            this.remove();
          }
        }, {
          key: "accept",
          value: function MorphicDBList_accept_() {
            signal(this, "accepted", this);
            this.remove();
          }
        }, {
          key: "dbs",
          value: function MorphicDBList_dbs_() {
            return this.submorphs.map(function (m) {
              return m.isMorphicDBWidget && m.dbInfo;
            }).filter(Boolean);
          }
        }, {
          key: "selectedDBs",
          value: function MorphicDBList_selectedDBs_() {
            return this.submorphs.map(function (m) {
              return m.isMorphicDBWidget && m.selected && m.dbInfo;
            }).filter(Boolean);
          }
        }, {
          key: "onDBSelected",
          value: function MorphicDBList_onDBSelected_(dbMorph, selected) {
            var _this2 = this;

            selected && !this.allowMultipleSelections && noUpdate(function () {
              var _iterator = _createForOfIteratorHelper(_this2.submorphs),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var m = _step.value;
                  m.isMorphicDBWidget && m !== dbMorph && (m.selected = false);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            });
            signal(this, "dbSelected", dbMorph);
          }
        }, {
          key: "interactivelyAddDB",
          value: function MorphicDBList_interactivelyAddDB_() {}
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "MorphicDBList";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              dbInfos: {
                after: ["itemSettings", "showAddButton"],
                set: function set(val) {
                  this.setProperty("dbInfos", val);
                  this.updateView();
                }
              },
              allowMultipleSelections: {
                defaultValue: false
              },
              showCloseButton: {
                defaultValue: true
              },
              showOKButton: {
                defaultValue: true
              },
              showAddButton: {
                defaultValue: true
              },
              itemSettings: {},
              name: {
                defaultValue: "db list"
              },
              extent: {
                defaultValue: pt(400, 300)
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./morphicdb/tools.js";
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
        }, {
          start: 10544,
          end: 13377
        });
      }({
        referencedAs: "Morph",
        value: Morph
      });
      __varRecorder__$1.MorphicDBList = MorphicDBList;
      __varRecorder__$1.MorphicDBList = MorphicDBList;

      var __varRecorder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/studio/dialogs.cp.js", __contextModule__);

      (function (superclass) {
        var __lively_classholder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/studio/dialogs.cp.js", __contextModule__);

        var __lively_class__ = __lively_classholder__.hasOwnProperty("SaveWorldDialogModel") && typeof __lively_classholder__.SaveWorldDialogModel === "function" ? __lively_classholder__.SaveWorldDialogModel : __lively_classholder__.SaveWorldDialogModel = function SaveWorldDialogModel(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        if (Object.isFrozen(__lively_classholder__)) {
          return __lively_class__;
        }

        return initializeClass(__lively_class__, superclass, [{
          key: "bindings",
          get: function get() {
            return [].concat(_toConsumableArray(initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "bindings", this)), [{
              target: "storage type selector",
              signal: "selection",
              handler: "refresh"
            }]);
          }
        }, {
          key: "alignInWorld",
          value: function SaveWorldDialogModel_alignInWorld_() {
            var world = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.world();
            world.addMorph(this);

            var _world$visibleBounds = world.visibleBounds(),
                width = _world$visibleBounds.width,
                height = _world$visibleBounds.height;

            this.width = width * 1 / 2 - 5;
            this.height = height * 1 / 2 - 10;
            this.center = world.visibleBounds().center();
            return this;
          }
        }, {
          key: "viewDidLoad",
          value: function SaveWorldDialogModel_viewDidLoad_() {
            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "viewDidLoad", this).call(this);

            this.ui.nameInput.input = this.worldName;
            this.ui.tagInput.input = this.tags;
            this.ui.description.textString = this.description;
          }
        }, {
          key: "refresh",
          value: function SaveWorldDialogModel_refresh_() {
            this.setStorageMode(this.ui.storageTypeSelector.selection);
          }
        }, {
          key: "setStorageMode",
          value: function SaveWorldDialogModel_setStorageMode_(mode) {
            if (mode === "json") {
              this.ui.filePathInput.visible = true;
              this.ui.chooseDbButton.visible = false;
            }

            if (mode === "db") {
              this.ui.filePathInput.visible = false;
              this.ui.chooseDbButton.visible = true;
            }
          }
        }, {
          key: "activate",
          value: function () {
            var _SaveWorldDialogModel_activate_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(opts) {
              var nameInput, storageMode, _ref, tags, description, jsonPath, _yield$interactivelyC, morphicDBName, serverURL, snapshotLocation;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      nameInput = this.ui.nameInput;
                      storageMode = "db";

                      if (!(opts && opts.targetWorld)) {
                        _context.next = 17;
                        break;
                      }

                      nameInput.input = opts.targetWorld.name;
                      _context.next = 6;
                      return ensureCommitInfo(Path("metadata.commit").get(opts.targetWorld));

                    case 6:
                      _context.t0 = _context.sent;

                      if (_context.t0) {
                        _context.next = 9;
                        break;
                      }

                      _context.t0 = {};

                    case 9:
                      _ref = _context.t0;
                      tags = _ref.tags;
                      description = _ref.description;
                      jsonPath = Path("metadata.file").get(opts.targetWorld) || resource(document.location).query().file;
                      if (jsonPath) storageMode = "json";
                      this.ui.filePathInput.input = jsonPath;
                      this.ui.tagInput.value = (tags || []).join(" ");
                      this.ui.description.textString = description || "";

                    case 17:
                      _context.next = 19;
                      return interactivelyChosenCurrentMorphicDB();

                    case 19:
                      _yield$interactivelyC = _context.sent;
                      morphicDBName = _yield$interactivelyC.name;
                      serverURL = _yield$interactivelyC.serverURL;
                      snapshotLocation = _yield$interactivelyC.snapshotLocation;
                      this.morphicDBName = morphicDBName;
                      this.serverURL = serverURL;
                      this.snapshotLocation = snapshotLocation;
                      this.ui.storageTypeSelector.selection = storageMode;
                      return _context.abrupt("return", initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "activate", this).call(this));

                    case 28:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function SaveWorldDialogModel_activate_(_x) {
              return _SaveWorldDialogModel_activate_.apply(this, arguments);
            }

            return SaveWorldDialogModel_activate_;
          }()
        }, {
          key: "reject",
          value: function SaveWorldDialogModel_reject_() {
            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "reject", this).call(this, {
              name: null
            });
          }
        }, {
          key: "resolve",
          value: function SaveWorldDialogModel_resolve_() {
            var name = this.ui.nameInput.input;
            if (!name) return this.reject();
            this.ui.nameInput.acceptInput();
            var tags = this.ui.tagInput.input.split(" ").map(function (ea) {
              return ea.trim();
            }).filter(Boolean);
            var description = this.ui.description.textString || "no description yet";
            var db = this.morphicDB;
            var filePath = this.filePath;
            var mode = this.ui.storageTypeSelector.selection;
            return this.answer.resolve({
              db: db,
              mode: mode,
              filePath: filePath,
              commit: {
                name: name,
                tags: tags,
                description: description
              }
            });
          }
        }, {
          key: "focus",
          value: function SaveWorldDialogModel_focus_() {
            this.ui.nameInput.focus();
          }
        }, {
          key: "morphicDB",
          get: function get() {
            var morphicDBName = this.morphicDBName,
                serverURL = this.serverURL;
            if (!morphicDBName) return MorphicDB["default"];
            if (!serverURL) serverURL = MorphicDB["default"].serverURL;
            return MorphicDB.named(morphicDBName, {
              serverURL: serverURL
            });
          }
        }, {
          key: "changeDB",
          value: function () {
            var _SaveWorldDialogModel_changeDB_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _yield$interactivelyC2, db, morphicDBName, serverURL, snapshotLocation;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return interactivelyChooseMorphicDB();

                    case 2:
                      _yield$interactivelyC2 = _context2.sent;
                      db = _yield$interactivelyC2.db;

                      if (db) {
                        _context2.next = 6;
                        break;
                      }

                      return _context2.abrupt("return");

                    case 6:
                      morphicDBName = db.name, serverURL = db.serverURL, snapshotLocation = db.snapshotLocation;
                      this.morphicDBName = morphicDBName;
                      this.serverURL = serverURL;
                      this.snapshotLocation = snapshotLocation;

                    case 10:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function SaveWorldDialogModel_changeDB_() {
              return _SaveWorldDialogModel_changeDB_.apply(this, arguments);
            }

            return SaveWorldDialogModel_changeDB_;
          }()
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "SaveWorldDialogModel";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              morphicDBName: {},
              serverURL: {},
              snapshotLocation: {},
              worldName: {
                defaultValue: ""
              },
              tags: {
                defaultValue: ""
              },
              description: {
                defaultValue: ""
              },
              title: {
                defaultValue: "Save World"
              },
              filePath: {
                derived: true,
                get: function get() {
                  return this.ui.filePathInput.input;
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./studio/dialogs.cp.js";
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
          start: 847,
          end: 4565
        });
      })({
        referencedAs: "ConfirmPromptModel",
        value: ConfirmPromptModel
      });

      __varRecorder__.SaveWorldDialog = component["for"](function () {
        return component(DarkPrompt, {
          defaultViewModel: __varRecorder__.SaveWorldDialogModel,
          name: "save world dialog",
          extent: pt(470, 320),
          submorphs: [{
            name: "prompt title",
            textString: "Save world"
          }, add({
            name: "prompt controls",
            clipMode: "hidden",
            extent: pt(455.5, 258.5),
            fill: Color.transparent,
            layout: new TilingLayout({
              align: "center",
              axis: "column",
              axisAlign: "center",
              orderByIndex: true,
              padding: rect(11, 11, 0, 0),
              spacing: 5
            }),
            submorphs: [{
              name: "first row",
              extent: pt(450, 50),
              fill: Color.transparent,
              layout: new TilingLayout({
                align: "center",
                axisAlign: "center",
                justifySubmorphs: "spaced",
                orderByIndex: true
              }),
              submorphs: [{
                type: Label,
                name: "storage label",
                fill: Color.rgba(255, 255, 255, 0),
                fontColor: Color.rgb(255, 255, 255),
                fontFamily: "IBM Plex Sans",
                fontSize: 15,
                nativeCursor: "pointer",
                position: pt(1.4, 3.4),
                textAndAttributes: ["store as:", null]
              }, part(DarkDropDownList, {
                name: "storage type selector",
                layout: new TilingLayout({
                  axisAlign: "center",
                  orderByIndex: true,
                  padding: rect(5, 0, -5, 0),
                  wrapSubmorphs: false
                }),
                extent: pt(105.1, 23),
                position: pt(96, 3),
                viewModel: {
                  listMaster: DarkList,
                  openListInWorld: true,
                  listAlign: "selection",
                  selection: "Morphic DB",
                  items: [{
                    string: "JSON",
                    value: "json",
                    isListItem: true
                  }, {
                    string: "Morphic DB",
                    value: "db",
                    isListItem: true
                  }]
                }
              }), {
                type: Label,
                name: "choose db button",
                fill: Color.rgba(255, 255, 255, 0),
                fontColor: Color.rgb(204, 204, 204),
                fontSize: 15,
                nativeCursor: "pointer",
                extent: pt(234, 25),
                fixedHeight: true,
                fixedWidth: true,
                reactsToPointer: false,
                textAndAttributes: ["Change DB ", null, "\uF1C0", {
                  fontFamily: "Font Awesome",
                  fontWeight: "900"
                }, " ", {
                  fontColor: Color.rgb(204, 204, 204),
                  fontFamily: "IBM Plex Sans",
                  fontSize: 15,
                  fontWeight: "normal",
                  lineHeight: 1.4,
                  nativeCursor: "text",
                  textDecoration: "none"
                }]
              }, part(InputLineDark, {
                name: "file path input",
                visible: false,
                position: pt(211.2, 0.5),
                extent: pt(234, 25),
                fontSize: 15,
                highlightWhenFocused: true,
                historyId: "lively.morphic-save-world-names",
                placeholder: "./path/to/snapshot.json"
              })]
            }, {
              name: "second row",
              extent: pt(450, 50),
              fill: Color.transparent,
              layout: new TilingLayout({
                align: "center",
                axisAlign: "center",
                justifySubmorphs: "spaced",
                orderByIndex: true
              }),
              submorphs: [{
                type: Label,
                name: "name label",
                fill: Color.rgba(255, 255, 255, 0),
                fontColor: Color.rgb(255, 255, 255),
                fontFamily: "IBM Plex Sans",
                fontSize: 15,
                nativeCursor: "pointer",
                position: pt(1, 40.1),
                textAndAttributes: ["save as: ", {}]
              }, part(InputLineDark, {
                name: "name input",
                fontSize: 15,
                extent: pt(365, 27),
                padding: rect(4, 4, 0, 0),
                historyId: "lively.morphic-save-world-names",
                position: pt(97, 38.4),
                submorphs: [{
                  name: "placeholder",
                  extent: pt(48, 29),
                  fontSize: 15,
                  padding: rect(4, 4, 0, 0)
                }]
              })]
            }, {
              name: "third row",
              extent: pt(450, 50),
              fill: Color.transparent,
              layout: new TilingLayout({
                align: "center",
                axisAlign: "center",
                justifySubmorphs: "spaced",
                orderByIndex: true
              }),
              submorphs: [{
                type: Label,
                name: "tag label",
                extent: pt(56, 16),
                fill: Color.rgba(255, 255, 255, 0),
                fontColor: Color.rgb(255, 255, 255),
                fontFamily: "IBM Plex Sans",
                fontSize: 15,
                nativeCursor: "pointer",
                position: pt(1, 79.8),
                textAndAttributes: ["tags:", null]
              }, part(InputLineDark, {
                name: "tag input",
                fontSize: 15,
                placeholder: "tag1 tag2 tag3 ...",
                extent: pt(365.5, 27),
                highlightWhenFocused: true,
                historyId: "lively.morphic-save-world-names",
                padding: rect(4, 4, 0, 0),
                position: pt(97, 76),
                scroll: pt(0, 1),
                submorphs: [{
                  name: "placeholder",
                  extent: pt(122, 29),
                  fontFamily: "IBM Plex Sans",
                  fontSize: 15,
                  nativeCursor: "text",
                  padding: rect(4, 4, 0, 0),
                  textAndAttributes: ["tag1 tag2 tag3 ...", null]
                }]
              })]
            }, {
              name: "fourth row",
              extent: pt(450, 115.3),
              fill: Color.transparent,
              layout: new TilingLayout({
                align: "right",
                justifySubmorphs: "spaced",
                orderByIndex: true,
                padding: rect(0, 15, 0, -15)
              }),
              submorphs: [{
                type: Label,
                name: "description label",
                extent: pt(84.5, 24.5),
                fontFamily: "IBM Plex Sans",
                fill: Color.rgba(255, 255, 255, 0),
                fontColor: Color.rgb(255, 255, 255),
                fontSize: 15,
                nativeCursor: "pointer",
                position: pt(1, 116),
                textAndAttributes: ["Description:", null]
              }, {
                type: Text,
                name: "description",
                textAndAttributes: ["", null],
                readOnly: false,
                borderRadius: 5,
                clipMode: "auto",
                nativeCursor: "text",
                dropShadow: new ShadowObject({
                  distance: 3,
                  rotation: 75,
                  color: Color.rgba(0, 0, 0, 0.2)
                }),
                extent: pt(365, 85.9),
                fill: Color.rgb(229, 231, 233),
                fixedHeight: true,
                fixedWidth: true,
                fontFamily: "IBM Plex Sans",
                fontSize: 15,
                haloShadow: new ShadowObject({
                  distance: 4,
                  color: Color.rgba(0, 0, 0, 0.26),
                  blur: 10
                }),
                highlightWhenFocused: true,
                lineWrapping: "by-words",
                padding: rect(4, 4, 0, 0),
                position: pt(97, 115)
              }]
            }]
          }), add(part(OKCancelButtonWrapper))]
        });
      }, {
        module: "lively.ide/studio/dialogs.cp.js",
        "export": "SaveWorldDialog",
        range: {
          start: 4573,
          end: 11559
        }
      }, System, __varRecorder__, "SaveWorldDialog");
      var SaveWorldDialog = exports('SaveWorldDialog', __varRecorder__.SaveWorldDialog);
      __varRecorder__.SaveWorldDialog = SaveWorldDialog;

    })
  };
}));
