System.register(['./__rootModule___commonjs-entry-43c0966d.js', './ui.cp-ea4f49fb.js', './index-9832bcb3.js', './app-3c345352.js', './loading-indicator.cp-bf9ec992.js', './index-67b8b1e9.js', './index-ec469421.js', './list.cp-e5de22f3.js', './client-80774c54.js', './editor-modes-d813e7d2.js', './search-b411e709.js', './shell-interface-8a620f71.js', './client-command-6c903787.js', './index-009b6510.js', './messages.cp-d88f98ee.js', './code-search.cp-b002bbfb.js', './client-resource-caba999e.js', './editor-plugin-e6921373.js', './dialogs.cp-d9ff5c0a.js', './canvas-50704c02.js', './morph-to-image-086a730b.js', './object-classes-ecb692f7.js'], (function (exports) {
  var __contextModule__ = typeof module !== 'undefined' ? module : arguments[1];
;
  var initializeClass, Color, Morph, pushAt, remove, equals, last, pt, morph, _createForOfIteratorHelper, Layout, _toConsumableArray, without, prewalk, mapTree, _asyncToGenerator, easings, connect, debounceNamed, ViewModel, part, Icon, getClassName, interpose, createQueue, component, TilingLayout, rect, Label, toRadians, touchInputDevice, PropLabel, TreeData, Tree, SearchField, TitleWrapper;
  return {
    setters: [function (module) {
      initializeClass = module.i;
      Color = module.C;
      Morph = module.M;
      pushAt = module.bQ;
      remove = module.w;
      equals = module.af;
      last = module.q;
      pt = module.b;
      morph = module.aZ;
      _createForOfIteratorHelper = module.a6;
      Layout = module.dV;
      _toConsumableArray = module.r;
      without = module.aQ;
      prewalk = module.bU;
      mapTree = module.c$;
      _asyncToGenerator = module._;
      easings = module.az;
      connect = module.a;
      debounceNamed = module.z;
      ViewModel = module.V;
      part = module.p;
      Icon = module.h;
      getClassName = module.bi;
      interpose = module.df;
      createQueue = module.dW;
      component = module.c;
      TilingLayout = module.T;
      rect = module.ap;
      Label = module.L;
      toRadians = module.aI;
      touchInputDevice = module.an;
    }, function (module) {
      PropLabel = module.t;
    }, function (module) {
      TreeData = module.T;
      Tree = module.r;
      SearchField = module.S;
    }, function (module) {
      TitleWrapper = module.T;
    }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
    execute: (function () {

      var __varRecorder__$1 = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/studio/interactive-tree.js", __contextModule__);
      var InteractiveTreeContainer = function (superclass) {
        var __lively_classholder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/studio/interactive-tree.js", __contextModule__);

        var __lively_class__ = __lively_classholder__.hasOwnProperty("InteractiveTreeContainer") && typeof __lively_classholder__.InteractiveTreeContainer === "function" ? __lively_classholder__.InteractiveTreeContainer : __lively_classholder__.InteractiveTreeContainer = function InteractiveTreeContainer(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        if (Object.isFrozen(__lively_classholder__)) {
          return __lively_class__;
        }

        return initializeClass(__lively_class__, superclass, [{
          key: "onChildRemoved",
          value: function InteractiveTreeContainer_onChildRemoved_(child) {}
        }, {
          key: "onChildAdded",
          value: function InteractiveTreeContainer_onChildAdded_(child) {}
        }, {
          key: "toggleSelected",
          value: function InteractiveTreeContainer_toggleSelected_(active) {
            if (!this.tree) return;
            var _this$tree = this.tree,
                selectionFontColor = _this$tree.selectionFontColor,
                nonSelectionFontColor = _this$tree.nonSelectionFontColor;
            this.submorphs.filter(function (m) {
              return !m._isControlElement && m.styleClasses.includes("Label");
            }).forEach(function (m) {
              m.fontColor = active ? selectionFontColor : nonSelectionFontColor;
            });
          }
        }, {
          key: "onGrab",
          value: function InteractiveTreeContainer_onGrab_(evt) {
            var tree = this.tree;
            var node = this.node;
            this.fill = Color.gray.withA(0.5);
            this.fontColor = tree.selectionFontColor;
            this.opacity = 0.8;

            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "onGrab", this).call(this, evt);

            if (!node) return;
            this.toggleSelected(false);
            tree.collapse(node);
            tree.treeData.parentNode(node).container.onChildRemoved(this);
            this._data = tree.treeData.remove(node);
            node.container.target.remove();
            tree.update(true);
          }
        }, {
          key: "wantsToBeDroppedOn",
          value: function InteractiveTreeContainer_wantsToBeDroppedOn_(dropTarget) {
            this.showPreviewOn(dropTarget);
            return true;
          }
        }, {
          key: "showPreviewOn",
          value: function InteractiveTreeContainer_showPreviewOn_(target) {
            var tree;

            if (target.isContainer) {
              tree = target.tree;
            }

            if (target.isTree) {
              tree = target;
            }

            if (tree && tree.showDropPreviewFor) {
              tree.showDropPreviewFor(this);
            }
          }
        }, {
          key: "insertAsChild",
          value: function () {
            var _InteractiveTreeContainer_insertAsChild_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(node) {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.tree.treeData.add(node._data, this.node, this.node.children[0]);
                      this.tree.uncollapse(this.node);
                      this.tree.treeData.remove(this.tree._previewNode);
                      this.tree.update(true);
                      this.onChildAdded(node);

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function InteractiveTreeContainer_insertAsChild_(_x) {
              return _InteractiveTreeContainer_insertAsChild_.apply(this, arguments);
            }

            return InteractiveTreeContainer_insertAsChild_;
          }()
        }, {
          key: "onBeingDroppedOn",
          value: function InteractiveTreeContainer_onBeingDroppedOn_(hand, recipient) {
            var _this = this;

            this.tree._dropInProgress = true;

            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "onBeingDroppedOn", this).call(this, hand, recipient);

            var after = function after() {
              _this.fill = Color.gray.withA(0.5);
              _this.opacity = 1;
              _this.tree._dropInProgress = false;

              _this.tree.refresh();
            };

            if (recipient.isTree) {
              recipient.insertAtPlaceholder(this).then(after);
            } else if (recipient.isContainer) {
              recipient.insertAsChild(this).then(after);
            } else {
              after();
            }
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "InteractiveTreeContainer";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              fill: {
                defaultValue: Color.transparent
              },
              isContainer: {
                get: function get() {
                  return true;
                }
              },
              tree: {},
              node: {
                readOnly: true,
                get: function get() {
                  var _this2 = this;

                  var treeData = this.tree.treeData;
                  return treeData && treeData.asList().find(function (m) {
                    return m.container === _this2;
                  });
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./studio/interactive-tree.js";
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
          start: 441,
          end: 3010
        });
      }({
        referencedAs: "Morph",
        value: Morph
      });
      __varRecorder__$1.InteractiveTreeContainer = InteractiveTreeContainer;
      __varRecorder__$1.InteractiveTreeContainer = InteractiveTreeContainer;
      var InteractiveTreeData = function (superclass) {
        var __lively_classholder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/studio/interactive-tree.js", __contextModule__);

        var __lively_class__ = __lively_classholder__.hasOwnProperty("InteractiveTreeData") && typeof __lively_classholder__.InteractiveTreeData === "function" ? __lively_classholder__.InteractiveTreeData : __lively_classholder__.InteractiveTreeData = function InteractiveTreeData(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        if (Object.isFrozen(__lively_classholder__)) {
          return __lively_class__;
        }

        return initializeClass(__lively_class__, superclass, [{
          key: "display",
          value: function InteractiveTreeData_display_(node) {
            if (!node.container) node.container = node.getContainer();
            return [node.container || "<NO CONTAINER>", {}];
          }
        }, {
          key: "isCollapsed",
          value: function InteractiveTreeData_isCollapsed_(node) {
            return node.isCollapsed;
          }
        }, {
          key: "collapse",
          value: function InteractiveTreeData_collapse_(node, bool) {
            node.isCollapsed = bool;
          }
        }, {
          key: "getChildren",
          value: function InteractiveTreeData_getChildren_(node) {
            return node.isLeaf ? null : this.filterActive ? node.children.filter(function (n) {
              return n && n.visible;
            }) : node.children;
          }
        }, {
          key: "isLeaf",
          value: function InteractiveTreeData_isLeaf_(node) {
            return (this.getChildren(node) || []).length === 0;
          }
        }, {
          key: "add",
          value: function InteractiveTreeData_add_(node) {
            var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;
            var before = arguments.length > 2 ? arguments[2] : undefined;
            if (!parent.children) parent.children = [];

            if (before) {
              pushAt(parent.children, node, parent.children.indexOf(before));
            } else parent.children.push(node);

            parent.isLeaf = false;
          }
        }, {
          key: "replace",
          value: function InteractiveTreeData_replace_(nodeA, nodeB) {
            var parent = this.parentNode(nodeA);
            var idx = parent.children.indexOf(nodeA);
            parent.children[idx] = nodeB;
          }
        }, {
          key: "next",
          value: function InteractiveTreeData_next_(node) {
            var parent = this.parentNode(node);
            return parent && parent.children[parent.children.indexOf(node) + 1];
          }
        }, {
          key: "isBefore",
          value: function InteractiveTreeData_isBefore_(nodeA, nodeB) {
            this.next(nodeA) === nodeB;
          }
        }, {
          key: "isAfter",
          value: function InteractiveTreeData_isAfter_(nodeA, nodeB) {
            this.next(nodeB) === nodeA;
          }
        }, {
          key: "addBefore",
          value: function InteractiveTreeData_addBefore_(node, next) {
            this.add(node, this.parentNode(next), next);
          }
        }, {
          key: "addAfter",
          value: function InteractiveTreeData_addAfter_(node, prev) {
            var parent = this.parentNode(prev);
            var nextIndex = parent.children.indexOf(prev) + 1;
            this.add(node, parent, parent.children[nextIndex]);
          }
        }, {
          key: "remove",
          value: function InteractiveTreeData_remove_(node) {
            var parent = this.parentNode(node);
            if (!parent) return;
            remove(parent.children, node);

            if (parent.children === []) {
              parent.children = null;
            }

            return node;
          }
        }, {
          key: "filter",
          value: function () {
            var _InteractiveTreeData_filter_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(iterator) {
              var maxDepth,
                  active,
                  _args2 = arguments;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      maxDepth = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 1;
                      _context2.next = 3;
                      return this.uncollapseAll(function (node, depth) {
                        return depth < maxDepth + 1;
                      });

                    case 3:
                      active = this.filterActive;
                      this.filterActive = false;
                      this.asListWithIndexAndDepth(false).reverse().forEach(function (_ref) {
                        var node = _ref.node,
                            depth = _ref.depth;
                        if (depth === 0) return node.visible = true;
                        node.visible = iterator(node);

                        if (!node.isCollapsed && node.children.find(function (n) {
                          return n.visible;
                        })) {
                          node.visible = true;
                          node.container.opacity = 0.5;
                        } else node.container.opacity = 1;

                        return node.visible;
                      });
                      this.filterActive = active;

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function InteractiveTreeData_filter_(_x2) {
              return _InteractiveTreeData_filter_.apply(this, arguments);
            }

            return InteractiveTreeData_filter_;
          }()
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "InteractiveTreeData";
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./studio/interactive-tree.js";
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
          start: 3019,
          end: 5504
        });
      }({
        referencedAs: "TreeData",
        value: TreeData
      });
      __varRecorder__$1.InteractiveTreeData = InteractiveTreeData;
      __varRecorder__$1.InteractiveTreeData = InteractiveTreeData;
      var InteractiveTree = function (superclass) {
        var __lively_classholder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/studio/interactive-tree.js", __contextModule__);

        var __lively_class__ = __lively_classholder__.hasOwnProperty("InteractiveTree") && typeof __lively_classholder__.InteractiveTree === "function" ? __lively_classholder__.InteractiveTree : __lively_classholder__.InteractiveTree = function InteractiveTree(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        if (Object.isFrozen(__lively_classholder__)) {
          return __lively_class__;
        }

        return initializeClass(__lively_class__, superclass, [{
          key: "update",
          value: function InteractiveTree_update_(force) {
            var _this3 = this;

            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "update", this).call(this, force);

            this.treeData && this.relayoutContainers();

            if (force) {
              this.embeddedMorphs.forEach(function (m) {
                if (m.isContainer) {
                  if (!equals(m.fill, Color.transparent)) {
                    m.fill = Color.transparent;
                  }

                  if (m.fontFamily !== _this3.fontFamily) {
                    m.fontFamily = _this3.fontFamily;
                  }

                  if (m.fontSize !== _this3.fontSize) {
                    m.fontSize = _this3.fontSize;
                  }
                }
              });
            }
          }
        }, {
          key: "onDrop",
          value: function InteractiveTree_onDrop_(evt) {
            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "onDrop", this).call(this, evt);

            this.treeData.remove(this._previewNode);
            this.update(true);
          }
        }, {
          key: "onDropHoverIn",
          value: function InteractiveTree_onDropHoverIn_(evt) {}
        }, {
          key: "onDropHoverUpdate",
          value: function InteractiveTree_onDropHoverUpdate_(evt) {}
        }, {
          key: "onDropHoverOut",
          value: function InteractiveTree_onDropHoverOut_(evt) {}
        }, {
          key: "onHoverOut",
          value: function () {
            var _InteractiveTree_onHoverOut_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(evt) {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "onHoverOut", this).call(this, evt);

                      if (this._previewNode && this._previewNode.container.world()) {
                        this.treeData.remove(this._previewNode);
                      }

                      this.resetContainerSelection();
                      this.update(true);

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function InteractiveTree_onHoverOut_(_x3) {
              return _InteractiveTree_onHoverOut_.apply(this, arguments);
            }

            return InteractiveTree_onHoverOut_;
          }()
        }, {
          key: "insertAtPlaceholder",
          value: function () {
            var _InteractiveTree_insertAtPlaceholder_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(node) {
              var newParent;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      newParent = this.treeData.parentNode(this._previewNode);
                      this.treeData.replace(this._previewNode, node._data);
                      this.treeData.remove(this._previewNode);
                      this.update(true);
                      if (newParent.container) newParent.container.onChildAdded(node);

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function InteractiveTree_insertAtPlaceholder_(_x4) {
              return _InteractiveTree_insertAtPlaceholder_.apply(this, arguments);
            }

            return InteractiveTree_insertAtPlaceholder_;
          }()
        }, {
          key: "scrollUpSlowly",
          value: function InteractiveTree_scrollUpSlowly_() {
            var _this4 = this;

            if (this._scrollingUp) return;
            this._scrollingUp = true;

            var scrollUp = /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        if (!(_this4._scrollingUp && _this4.scroll.y > 0)) {
                          _context5.next = 6;
                          break;
                        }

                        _context5.next = 3;
                        return _this4.animate({
                          scroll: _this4.scroll.subXY(0, 30),
                          duration: 300,
                          easing: easings.linear
                        });

                      case 3:
                        scrollUp();
                        _context5.next = 7;
                        break;

                      case 6:
                        _this4._scrollingUp = false;

                      case 7:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              }));

              return function scrollUp() {
                return _ref2.apply(this, arguments);
              };
            }();

            scrollUp();
          }
        }, {
          key: "scrollDownSlowly",
          value: function InteractiveTree_scrollDownSlowly_() {
            var _this5 = this;

            if (this._scrollingDown) return;
            this._scrollingDown = true;

            var scrollDown = /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        if (!(_this5._scrollingDown && _this5.scroll.y < _this5.scrollExtent.y - _this5.height)) {
                          _context6.next = 6;
                          break;
                        }

                        _context6.next = 3;
                        return _this5.animate({
                          scroll: _this5.scroll.addXY(0, 30),
                          duration: 300,
                          easing: easings.linear
                        });

                      case 3:
                        scrollDown();
                        _context6.next = 7;
                        break;

                      case 6:
                        _this5._scrollingDown = false;

                      case 7:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6);
              }));

              return function scrollDown() {
                return _ref3.apply(this, arguments);
              };
            }();

            scrollDown();
          }
        }, {
          key: "stopScrollingSlowly",
          value: function InteractiveTree_stopScrollingSlowly_() {
            this._scrollingUp = this._scrollingDown = false;
          }
        }, {
          key: "resetContainerSelection",
          value: function InteractiveTree_resetContainerSelection_() {
            this.embeddedMorphs.forEach(function (m) {
              if (m.isContainer) m.fill = Color.transparent;
            });
          }
        }, {
          key: "showDropPreviewFor",
          value: function InteractiveTree_showDropPreviewFor_(target) {
            var _this6 = this;

            var borderDist = 4;
            var pos = this.localize(target.globalBounds().center());
            var docPos = this.textPositionFromPoint(pos);
            var nodes = this.treeData.asListWithIndexAndDepth(function (_ref4) {
              var node = _ref4.node;
              return node !== _this6._previewNode && node.container && node.container.world();
            });

            var _ref5 = nodes.find(function (node) {
              return node.i - 1 === docPos.row;
            }) || {},
                node = _ref5.node;

            var hoveredContainer = node && node.container;
            var placeholder = this.ensurePlaceholder();
            var previewContainer = placeholder.container;
            var previewIsShown = !!previewContainer.world();
            var positionInFrame = pos.subPt(this.scroll).subPt(this.scrollbarOffset);

            if (positionInFrame.y < 10) {
              this.scrollUpSlowly();
            } else if (positionInFrame.y > this.height - 50) {
              this.scrollDownSlowly();
            } else {
              this.stopScrollingSlowly();
            }

            this.resetContainerSelection();

            if (!hoveredContainer) {
              if (nodes.length > docPos.row) {
                return;
              }

              if (last(this.treeData.root.children) === placeholder) return;
              this.treeData.remove(placeholder);
              this.treeData.add(placeholder);
              this.update(true);
            }

            if (hoveredContainer) {
              var charBounds = this.textLayout.boundsFor(this, docPos);

              if (Math.abs(charBounds.top() - pos.y) < borderDist) {
                if (this.treeData.isBefore(placeholder, node)) return;
                this.treeData.remove(placeholder);
                this.treeData.addBefore(placeholder, node);
                this.update(true);
              } else if (Math.abs(charBounds.bottom() - pos.y) < borderDist && (node.isCollapsed || this.treeData.isLeaf(node))) {
                if (this.treeData.isAfter(placeholder, node)) return;
                this.treeData.remove(placeholder);
                this.treeData.addAfter(placeholder, node);
                this.update(true);
              } else {
                hoveredContainer.fill = Color.gray.withA(0.5);
                if (!previewIsShown) return;
                this.treeData.remove(placeholder);
                this.update(true);
              }
            }
          }
        }, {
          key: "ensurePlaceholder",
          value: function InteractiveTree_ensurePlaceholder_() {
            var basicLineExtent = pt(this.width - 100, this.document.getLine(0).height);

            if (!this._previewNode) {
              this._previewNode = {
                container: morph({
                  acceptsDrops: false,
                  reactsToPointer: false,
                  fill: Color.gray.withA(0.5),
                  borderRadius: 5
                }),
                isCollapsed: true,
                isLeaf: true
              };
            }

            this._previewNode.container.extent = basicLineExtent;
            return this._previewNode;
          }
        }, {
          key: "relayoutContainers",
          value: function InteractiveTree_relayoutContainers_() {
            var _this7 = this;

            this.env.forceUpdate();
            this.selectedIndex;
            this.anchors.forEach(function (a) {
              var _this7$_addedNodes;

              return ((_this7$_addedNodes = _this7._addedNodes) === null || _this7$_addedNodes === void 0 ? void 0 : _this7$_addedNodes.has(a._embeddedMorph)) && a.updateEmbeddedMorph();
            });
            this._addedNodes = new Set();

            var _iterator = _createForOfIteratorHelper(this.treeData.asListWithIndexAndDepth()),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _step$value = _step.value,
                    node = _step$value.node,
                    i = _step$value.i;
                if (!node.container) continue;
                if (!this.isLineVisible(i)) continue;
                node.container.nativeCursor = "grab";
                var newWidth = this.width - node.container.left - this.padding.right();

                if (node.container.width !== newWidth) {
                  node.container.width = newWidth;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "InteractiveTree";
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./studio/interactive-tree.js";
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
          start: 5513,
          end: 11112
        });
      }({
        referencedAs: "Tree",
        value: Tree
      });
      __varRecorder__$1.InteractiveTree = InteractiveTree;
      __varRecorder__$1.InteractiveTree = InteractiveTree;

      (function (superclass) {
        var __lively_classholder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/studio/interactive-tree.js", __contextModule__);

        var __lively_class__ = __lively_classholder__.hasOwnProperty("SceneGraphTreeLayout") && typeof __lively_classholder__.SceneGraphTreeLayout === "function" ? __lively_classholder__.SceneGraphTreeLayout : __lively_classholder__.SceneGraphTreeLayout = function SceneGraphTreeLayout(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        if (Object.isFrozen(__lively_classholder__)) {
          return __lively_class__;
        }

        return initializeClass(__lively_class__, superclass, [{
          key: "estimateExtentOfLine",
          value: function SceneGraphTreeLayout_estimateExtentOfLine_(morph, line) {
            arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : morph.getGlobalTransform();
            var container = line.textAndAttributes.find(function (m) {
              return m && m.isMorph;
            });

            if (container) {
              line.changeExtent(morph.width, container.height);
            }
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "SceneGraphTreeLayout";
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./studio/interactive-tree.js";
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
          start: 11114,
          end: 11387
        });
      })({
        referencedAs: "Layout",
        value: Layout
      });

      var SceneGraphTree = function (superclass) {
        var __lively_classholder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/studio/interactive-tree.js", __contextModule__);

        var __lively_class__ = __lively_classholder__.hasOwnProperty("SceneGraphTree") && typeof __lively_classholder__.SceneGraphTree === "function" ? __lively_classholder__.SceneGraphTree : __lively_classholder__.SceneGraphTree = function SceneGraphTree(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        if (Object.isFrozen(__lively_classholder__)) {
          return __lively_class__;
        }

        return initializeClass(__lively_class__, superclass, [{
          key: "beforePublish",
          value: function SceneGraphTree_beforePublish_() {
            this.submorphs = [];
            this.reset();
          }
        }, {
          key: "selectMorphInTarget",
          value: function SceneGraphTree_selectMorphInTarget_(morph) {
            var _this8 = this;

            var node = this.treeData.asList().find(function (n) {
              return n.container && n.container.target === morph;
            });

            if (node && this.selectedNode !== node) {
              this.selectPath(this.treeData.pathOf(node));
            }

            if (node) return;
            this.refresh();
            this.treeData.followPath([morph].concat(_toConsumableArray(morph.ownerChain())).reverse(), function (m, node) {
              if (!node.container) node.container = node.getContainer();
              if (node.container) return node.container.target === m;
            }).then(function (node) {
              if (node) _this8.selectedNode = node;
            });
          }
        }, {
          key: "onLoad",
          value: function () {
            var _SceneGraphTree_onLoad_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      this.textLayout = new __varRecorder__$1.SceneGraphTreeLayout(this);

                      if (!this.ownerChain().find(function (m) {
                        return m.isComponent;
                      })) {
                        _context7.next = 3;
                        break;
                      }

                      return _context7.abrupt("return");

                    case 3:
                      this.submorphs = [];

                    case 4:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            function SceneGraphTree_onLoad_() {
              return _SceneGraphTree_onLoad_.apply(this, arguments);
            }

            return SceneGraphTree_onLoad_;
          }()
        }, {
          key: "adjustProportions",
          value: function SceneGraphTree_adjustProportions_(evt) {
            var _ref6 = evt ? evt.state.dragDelta : {
              y: 0
            },
                y = _ref6.y;

            var inspector = this.get("inspector");
            var resizer = this.get("scene graph resizer");
            var selector = this.get("mode selector");
            var connectionTree = this.get("connections tree");
            this.height += y;
            inspector.height -= y;
            connectionTree.height -= y;
            resizer.top = this.bottom;
            resizer.left = 0;
            selector.top = resizer.bottom;
            connectionTree.top = inspector.top = selector.bottom + 5;
          }
        }, {
          key: "reset",
          value: function SceneGraphTree_reset_() {
            var _this9 = this;

            this.treeData = new __varRecorder__$1.InteractiveTreeData({
              children: [],
              container: morph()
            });
            this.get("inspector").targetObject = {};
            this.selectedNode = null;
            this.anchors.filter(function (a) {
              return a.id === null;
            }).forEach(function (a) {
              return _this9.removeAnchor(a);
            });
          }
        }, {
          key: "setTarget",
          value: function () {
            var _SceneGraphTree_setTarget_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(morph) {
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      this.target = morph;
                      this.treeData = this.getTreeFromSubmorphHierarchy(morph);
                      _context8.next = 4;
                      return this.uncollapse(this.treeData.root);

                    case 4:
                      this.refresh();

                    case 5:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function SceneGraphTree_setTarget_(_x5) {
              return _SceneGraphTree_setTarget_.apply(this, arguments);
            }

            return SceneGraphTree_setTarget_;
          }()
        }, {
          key: "isNodeOutOfSync",
          value: function SceneGraphTree_isNodeOutOfSync_(node) {
            var _this10 = this;

            if (node === this._previewNode) return false;

            if (this.treeData.root === node) {
              return !equals(without(this.treeData.root.children, this._previewNode).map(function (m) {
                var _m$container;

                return (_m$container = m.container) === null || _m$container === void 0 ? void 0 : _m$container.target.id;
              }), this.target.submorphs.filter(function (m) {
                return !_this10.ignoreMorph(m);
              }).id);
            }

            if (node.container.nameNeedsUpdate) return true;
            var actualSubmorphs = node.container.target.submorphs.filter(function (m) {
              return !_this10.ignoreMorph(m);
            });
            if (actualSubmorphs.length !== node.children.length) return true;
            if (actualSubmorphs.map(function (m) {
              return m.name;
            }).join("") !== node.children.map(function (m) {
              return m.target ? m.target.name : "";
            }).join("")) return true;
            return false;
          }
        }, {
          key: "getTarget",
          value: function SceneGraphTree_getTarget_(node) {
            return node === this.treeData.root ? this.target : node.container.target;
          }
        }, {
          key: "getNewChildren",
          value: function SceneGraphTree_getNewChildren_(node) {
            var _this11 = this;

            var nodeSubmorphs = this.getTarget(node).submorphs.map(function (m) {
              return m.__scene_graph_target__ ? m.__scene_graph_target__() : m;
            }).filter(function (m) {
              return !_this11.ignoreMorph(m);
            });
            var newChildren = [];

            var _loop = function _loop(i) {
              var m = nodeSubmorphs[i];
              var children = without(node.children, _this11._previewNode);
              var existingChild = children.find(function (n) {
                return n.container && n.container.target.id === m.id;
              });
              if (existingChild) newChildren[i] = existingChild;else newChildren[i] = _this11.readMorphHierarchy(m);
            };

            for (var i in nodeSubmorphs) {
              _loop(i);
            }

            return newChildren;
          }
        }, {
          key: "refresh",
          value: function SceneGraphTree_refresh_() {
            var _this12 = this;

            if (this._updating || this._dropInProgress) return;
            var changes = false;
            var root = this.treeData.root;
            prewalk(root, function (node) {
              if (node === root && _this12.isNodeOutOfSync(node)) {
                node.children = _this12.getNewChildren(node);
              }

              if (node.container && _this12.isNodeOutOfSync(node)) {
                changes = true;
                node.name = node.container.target.name;
                node.container.refresh();
                node.children = _this12.getNewChildren(node);
              }
            }, function (node) {
              return node.children;
            });
            this.update(changes);
          }
        }, {
          key: "ignoreMorph",
          value: function SceneGraphTree_ignoreMorph_(m) {
            if (!m.isMorph) return false;
            return !m.forceSceneGraphInclusion && (m.isContainer || m.isWindow || m.getWindow() || m.isEpiMorph || m.isHand || m.isHaloItem || m.isCommentIndicator || ["lively.halos"].includes(m.constructor[Symbol["for"]("lively-module-meta")]["package"].name) || ["Menu"].includes(m.constructor.name));
          }
        }, {
          key: "onDropHoverOut",
          value: function SceneGraphTree_onDropHoverOut_(evt) {
            var container = evt.hand.grabbedMorphs[0];
            var target = evt.hand.findDropTarget();
            if (target === this) return;
            if (target && target.ownerChain().includes(this)) return;
            if (container && container.isContainer) container.onDragOutside();
          }
        }, {
          key: "onDropHoverIn",
          value: function SceneGraphTree_onDropHoverIn_(evt) {
            var morph = evt.hand.grabbedMorphs[0];

            if (morph && !morph.isContainer) {
              $world.halos().forEach(function (h) {
                return h.remove();
              });
              morph.remove();
              Object.assign(morph, evt.hand._grabbedMorphProperties.get(morph).pointerAndShadow);
              var container = this.renderContainerFor(morph, false);
              evt.hand.grab(container);
              container.leftCenter = pt(-20, 0);
            }
          }
        }, {
          key: "getTreeFromSubmorphHierarchy",
          value: function SceneGraphTree_getTreeFromSubmorphHierarchy_(morph) {
            return new __varRecorder__$1.InteractiveTreeData(this.readMorphHierarchy(morph));
          }
        }, {
          key: "readMorphHierarchy",
          value: function SceneGraphTree_readMorphHierarchy_(morph) {
            var _this13 = this;

            return mapTree(morph, function (m, children) {
              var res = {
                name: m.name,
                isCollapsed: true,
                getContainer: function getContainer() {
                  var _this13$_addedNodes;

                  var c = _this13.renderContainerFor(m);

                  (_this13$_addedNodes = _this13._addedNodes) === null || _this13$_addedNodes === void 0 ? void 0 : _this13$_addedNodes.add(c);
                  return c;
                },
                visible: true,
                children: children
              };
              if (m.isWorld) res.container = res.getContainer();
              return res;
            }, function (m) {
              return m.submorphs.filter(function (sub) {
                return m.isWorld ? !_this13.ignoreMorph(sub) : true;
              });
            });
          }
        }, {
          key: "collapseAll",
          value: function SceneGraphTree_collapseAll_() {
            var _this14 = this;

            this.treeData.asList().forEach(function (node) {
              return node !== _this14.treeData.root ? node.isCollapsed = true : node.isCollapsed = false;
            });
          }
        }, {
          key: "filterMorphs",
          value: function () {
            var _SceneGraphTree_filterMorphs_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(term) {
              var _this15 = this;

              var searchTerm;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      searchTerm = term.tokens[0];

                      if (!this.treeData.filterActive && !this._collapseState) {
                        this._collapseState = new WeakMap(this.treeData.asList().map(function (n) {
                          return [n, n.isCollapsed];
                        }));
                      }

                      this.treeData.filterActive = !!searchTerm;
                      _context9.next = 5;
                      return this.treeData.filter(function (node) {
                        var matches = !!searchTerm && node.name.includes(searchTerm);
                        if (!node.container) node.container = node.getContainer();

                        if (matches) {
                          node.container.highlightTerm(searchTerm);
                        } else {
                          node.container.highlightTerm();
                        }

                        return matches;
                      }, 3);

                    case 5:
                      if (!this.treeData.filterActive) {
                        this.treeData.asList().forEach(function (node) {
                          if (node.container) node.container.highlightTerm();
                          node.visible = true;
                          node.isCollapsed = _this15._collapseState.has(node) ? _this15._collapseState.get(node) : true;
                        });
                        this._collapseState = null;
                      }

                      this.refresh();

                    case 7:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));

            function SceneGraphTree_filterMorphs_(_x6) {
              return _SceneGraphTree_filterMorphs_.apply(this, arguments);
            }

            return SceneGraphTree_filterMorphs_;
          }()
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "SceneGraphTree";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              target: {
                serialize: false
              },
              textLayout: {
                initialize: function initialize() {
                  this.textLayout = new __varRecorder__$1.SceneGraphTreeLayout(this);
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./studio/interactive-tree.js";
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
          start: 11396,
          end: 18773
        });
      }(__varRecorder__$1.InteractiveTree);
      __varRecorder__$1.SceneGraphTree = SceneGraphTree;
      __varRecorder__$1.SceneGraphTree = SceneGraphTree;

      var __varRecorder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/studio/scene-graph.cp.js", __contextModule__);
      var MorphPanelModel = exports('MorphPanelModel', function (superclass) {
        var __lively_classholder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/studio/scene-graph.cp.js", __contextModule__);

        var __lively_class__ = __lively_classholder__.hasOwnProperty("MorphPanelModel") && typeof __lively_classholder__.MorphPanelModel === "function" ? __lively_classholder__.MorphPanelModel : __lively_classholder__.MorphPanelModel = function MorphPanelModel(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        if (Object.isFrozen(__lively_classholder__)) {
          return __lively_class__;
        }

        return initializeClass(__lively_class__, superclass, [{
          key: "isSceneGraphPanel",
          get: function get() {
            return true;
          }
        }, {
          key: "showHaloFor",
          value: function MorphPanelModel_showHaloFor_(node) {
            if (!node) return;
            var target = node.container.target;
            if (target.isText && target.tmpEdit) return;
            this.world().halos().forEach(function (h) {
              return h.remove();
            });
            this.world().showHaloFor(target);
          }
        }, {
          key: "relayout",
          value: function MorphPanelModel_relayout_() {
            this.onWorldResize();
          }
        }, {
          key: "attachToWorld",
          value: function MorphPanelModel_attachToWorld_(world) {
            connect(world, "onChange", this, "onHierarchyChange", {
              garbageCollect: true
            });
            connect(world, "onSubmorphChange", this, "onHierarchyChange", {
              garbageCollect: true
            });
            connect(world, "showHaloFor", this, "selectNode", {
              garbageCollect: true
            });
            this.reset(world);
          }
        }, {
          key: "reset",
          value: function MorphPanelModel_reset_(world) {
            this.ui.sceneGraph.setTarget(world);
          }
        }, {
          key: "selectNode",
          value: function MorphPanelModel_selectNode_(target) {
            if (Array.isArray(target) && target.length === 1) target = target[0];

            if (target.isMorph) {
              this.ui.sceneGraph.selectMorphInTarget(target);
            }
          }
        }, {
          key: "clearFocus",
          value: function MorphPanelModel_clearFocus_() {
            this.ui.sceneGraph.clearSelection();
          }
        }, {
          key: "onHierarchyChange",
          value: function MorphPanelModel_onHierarchyChange_(change) {
            var _this = this;

            if (change.selector === "addMorphAt" || change.selector === "removeMorph" || change.prop === "name") {
              var sceneGraph = this.ui.sceneGraph;
              if (!sceneGraph) return;
              if (!sceneGraph.owner.visible) return;
              if (change.target && change.target.isHand) return;
              if (change.target && sceneGraph.ignoreMorph(change.target)) return;
              if (change.args && !change.args[0].isHalo && sceneGraph.ignoreMorph(change.args[0])) return;
              if (change.target.ownerChain().find(function (m) {
                return sceneGraph.ignoreMorph(m);
              })) return;
              debounceNamed("scene-graph-update", 50, function () {
                return _this.refresh();
              })();
            }
          }
        }, {
          key: "detachFromWorld",
          value: function MorphPanelModel_detachFromWorld_(world) {
            var _this2 = this;

            world.attributeConnections.forEach(function (conn) {
              if (conn.targetObj === _this2) conn.disconnect();
            });
          }
        }, {
          key: "onWorldResize",
          value: function MorphPanelModel_onWorldResize_() {
            var align = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            var view = this.view;
            var bounds = $world.visibleBounds();
            var offsetTop = navigator.standalone && touchInputDevice ? 25 : 0;
            view.height = bounds.height - offsetTop;
            view.top = offsetTop + bounds.top();
            if (!align) return;

            if (view.visible) {
              view.topLeft = bounds.topLeft();
            } else view.topRight = bounds.topLeft();
          }
        }, {
          key: "toggle",
          value: function () {
            var _MorphPanelModel_toggle_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(active) {
              var view, bounds, versionViewer;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      view = this.view;
                      bounds = $world.visibleBounds();
                      versionViewer = $world.get("lively version checker");
                      this.onWorldResize(false);

                      if (!active) {
                        _context.next = 12;
                        break;
                      }

                      $world.withTopBarDo(function (tb) {
                        view.opacity = 0;
                        $world.addMorph(view, tb.view);
                      });
                      view.topRight = bounds.topLeft();
                      $world.withAnimationDo(function () {
                        view.opacity = 1;
                        view.topLeft = bounds.topLeft();
                        if (versionViewer) versionViewer.relayout();
                      }, {
                        duration: 300,
                        easing: easings.outCirc
                      });
                      this.attachToWorld($world);
                      this.ui.sceneGraph.refresh();
                      _context.next = 16;
                      break;

                    case 12:
                      this.detachFromWorld($world);
                      _context.next = 15;
                      return $world.withAnimationDo(function () {
                        view.opacity = 0;
                        view.topRight = bounds.topLeft();
                        if (versionViewer) versionViewer.relayout();
                      }, {
                        duration: 300
                      });

                    case 15:
                      view.remove();

                    case 16:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function MorphPanelModel_toggle_(_x) {
              return _MorphPanelModel_toggle_.apply(this, arguments);
            }

            return MorphPanelModel_toggle_;
          }()
        }, {
          key: "refresh",
          value: function MorphPanelModel_refresh_() {
            this.ui.sceneGraph.refresh();
          }
        }, {
          key: "resize",
          value: function MorphPanelModel_resize_($onDrag, evt) {
            this.view.width += evt.state.dragDelta.x;
            this.ui.sceneGraph.refresh();
          }
        }, {
          key: "filterMorphs",
          value: function MorphPanelModel_filterMorphs_(searchTerm) {
            this.ui.sceneGraph.filterMorphs(searchTerm);
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "MorphPanelModel";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              expose: {
                get: function get() {
                  return ["toggle", "onWorldResize", "relayout", "clearFocus", "reset", "isSceneGraphPanel", "refresh"];
                }
              },
              bindings: {
                get: function get() {
                  return [{
                    target: "scene graph",
                    signal: "selectedNode",
                    handler: "showHaloFor"
                  }, {
                    target: "scene graph",
                    signal: "reselectedCurrentSelection",
                    handler: "showHaloFor"
                  }, {
                    target: "search field",
                    signal: "searchInput",
                    handler: "filterMorphs"
                  }, {
                    signal: "onDrag",
                    handler: "resize",
                    override: true
                  }];
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./studio/scene-graph.cp.js";
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
          start: 685,
          end: 4988
        });
      }({
        referencedAs: "ViewModel",
        value: ViewModel
      }));
      __varRecorder__.MorphPanelModel = MorphPanelModel;
      __varRecorder__.MorphPanelModel = MorphPanelModel;
      var NewSceneGraphTree = exports('NewSceneGraphTree', function (superclass) {
        var __lively_classholder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/studio/scene-graph.cp.js", __contextModule__);

        var __lively_class__ = __lively_classholder__.hasOwnProperty("NewSceneGraphTree") && typeof __lively_classholder__.NewSceneGraphTree === "function" ? __lively_classholder__.NewSceneGraphTree : __lively_classholder__.NewSceneGraphTree = function NewSceneGraphTree(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        if (Object.isFrozen(__lively_classholder__)) {
          return __lively_class__;
        }

        return initializeClass(__lively_class__, superclass, [{
          key: "renderContainerFor",
          value: function NewSceneGraphTree_renderContainerFor_() {
            var submorph = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : morph({
              name: "root"
            });
            var container = part(__varRecorder__.MorphNode, {
              width: this.width,
              viewModel: {
                tree: this,
                target: submorph
              }
            });

            if (submorph._data) {
              container._data = submorph._data;
              submorph._data.container = container;
            } else {
              container._data = {
                name: submorph.name,
                isCollapsed: true,
                container: container,
                children: []
              };
            }

            container.refresh();
            return container;
          }
        }, {
          key: "onMouseWheel",
          value: function NewSceneGraphTree_onMouseWheel_(evt) {
            this.submorphs.forEach(function (m) {
              if (m.isContainer) m.reactsToPointer = false;
            });
          }
        }, {
          key: "clearSelection",
          value: function NewSceneGraphTree_clearSelection_() {
            this.selectedNode = null;
          }
        }, {
          key: "onHoverOut",
          value: function NewSceneGraphTree_onHoverOut_(evt) {
            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "onHoverOut", this).call(this, evt);

            this.removeMarker("hovered node");
          }
        }, {
          key: "showDropPreviewFor",
          value: function NewSceneGraphTree_showDropPreviewFor_(aMorph) {
            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "showDropPreviewFor", this).call(this, aMorph);

            this.removeMarker("hovered node");
          }
        }, {
          key: "highlightLineAtCursor",
          value: function NewSceneGraphTree_highlightLineAtCursor_(evt, style) {
            var pos = this.textPositionFromPoint(evt.positionIn(this));
            this.removeMarker("hovered node");
            var range = this.lineRange(pos.row, true);
            range.start.column = 0;
            if (!this.textAndAttributesInRange(range).find(function (m) {
              return m && m.isMorph;
            })) return;
            this.addMarker({
              id: "hovered node",
              range: range,
              style: style
            });
          }
        }, {
          key: "onMouseMove",
          value: function NewSceneGraphTree_onMouseMove_(evt) {
            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "onMouseMove", this).call(this, evt);

            this.submorphs.forEach(function (m) {
              if (m.isContainer) m.reactsToPointer = true;
            });
            this.highlightLineAtCursor(evt, {
              background: Color.transparent,
              transform: "translateY(-1px)",
              borderColor: "#B2EBF2",
              borderWidth: "1px",
              borderStyle: "solid"
            });
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "NewSceneGraphTree";
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./studio/scene-graph.cp.js";
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
          start: 4997,
          end: 6757
        });
      }({
        referencedAs: "SceneGraphTree",
        value: SceneGraphTree
      }));
      __varRecorder__.NewSceneGraphTree = NewSceneGraphTree;
      __varRecorder__.NewSceneGraphTree = NewSceneGraphTree;
      var MorphNodeModel = exports('MorphNodeModel', function (superclass) {
        var __lively_classholder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/studio/scene-graph.cp.js", __contextModule__);

        var __lively_class__ = __lively_classholder__.hasOwnProperty("MorphNodeModel") && typeof __lively_classholder__.MorphNodeModel === "function" ? __lively_classholder__.MorphNodeModel : __lively_classholder__.MorphNodeModel = function MorphNodeModel(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        if (Object.isFrozen(__lively_classholder__)) {
          return __lively_class__;
        }

        return initializeClass(__lively_class__, superclass, [{
          key: "viewDidLoad",
          value: function MorphNodeModel_viewDidLoad_() {
            this.hideControls();
          }
        }, {
          key: "onContextMenu",
          value: function MorphNodeModel_onContextMenu_(evt) {
            this.target.onContextMenu({
              targetMorph: this.target,
              stop: function stop() {}
            });
          }
        }, {
          key: "toggleVisibility",
          value: function MorphNodeModel_toggleVisibility_() {
            var _this3 = this;

            this.target.withMetaDo({
              reconcileChanges: true
            }, function () {
              _this3.target.visible = !_this3.target.visible;
            });
            this.refresh();
          }
        }, {
          key: "toggleLayoutability",
          value: function MorphNodeModel_toggleLayoutability_() {
            var _this4 = this;

            this.target.withMetaDo({
              reconcileChanges: true
            }, function () {
              _this4.target.isLayoutable = !_this4.target.isLayoutable;
            });
            this.refresh();
          }
        }, {
          key: "showControls",
          value: function MorphNodeModel_showControls_() {
            this.ui.visibilityIcon.visible = true;
            this.ui.nameWrapper.startShowingFullTitle();
          }
        }, {
          key: "hideControls",
          value: function MorphNodeModel_hideControls_() {
            this.ui.visibilityIcon.visible = !this.target.visible;
            this.ui.nameWrapper.stopShowingFullTitle();
          }
        }, {
          key: "refresh",
          value: function () {
            var _MorphNodeModel_refresh_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _target$owner;

              var target, _this$ui, morphIcon, layoutIndicator, nameLabel, visibilityIcon, layoutableToggle, icon, indicatorVisibility, indicatorRot;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      target = this.target;

                      if (target) {
                        _context2.next = 3;
                        break;
                      }

                      return _context2.abrupt("return");

                    case 3:
                      _this$ui = this.ui, morphIcon = _this$ui.morphIcon, layoutIndicator = _this$ui.layoutIndicator, nameLabel = _this$ui.nameLabel, visibilityIcon = _this$ui.visibilityIcon, layoutableToggle = _this$ui.layoutableToggle;
                      icon = this.getIcon(target);
                      indicatorVisibility = false;
                      indicatorRot = 0;

                      if (target.layout && target.layout.name() === "Tiling") {
                        indicatorVisibility = true;
                        indicatorRot = target.layout.axis !== "column" ? Math.PI / 2 : 0;
                      }

                      if (layoutIndicator.visible !== indicatorVisibility) {
                        layoutIndicator.visible = indicatorVisibility;
                      }

                      if (layoutIndicator.rotation !== indicatorRot) {
                        layoutIndicator.rotation = indicatorRot;
                      }

                      if (!equals(icon, morphIcon.value)) {
                        morphIcon.value = icon;
                      }

                      if (nameLabel.textString !== target.name) {
                        nameLabel.textString = target.name;
                        nameLabel.fit();
                      }

                      if (layoutableToggle.visible = !!((_target$owner = target.owner) === null || _target$owner === void 0 ? void 0 : _target$owner.layout)) {
                        layoutableToggle.value = target.isLayoutable ? Icon.textAttribute("ti-layout") : Icon.textAttribute("ti-layout-off");
                      }

                      visibilityIcon.value = [target.visible ? "\uE8F4" : "\uE8F5", {
                        fontSize: 16,
                        fontFamily: "Material Icons"
                      }];

                    case 14:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function MorphNodeModel_refresh_() {
              return _MorphNodeModel_refresh_.apply(this, arguments);
            }

            return MorphNodeModel_refresh_;
          }()
        }, {
          key: "applyLayoutIfNeeded",
          value: function MorphNodeModel_applyLayoutIfNeeded_() {}
        }, {
          key: "getIcon",
          value: function MorphNodeModel_getIcon_(target) {
            var klassIconMapping = {
              Morph: "square",
              Ellipse: "circle",
              Text: "font",
              Label: "tag",
              Polygon: "draw-polygon",
              Path: "bezier-curve",
              Image: "image",
              Canvas: "chess-board",
              HTMLMorph: "code"
            };
            return Icon.textAttribute(klassIconMapping[getClassName(target)] || "codepen", {
              paddingTop: "0px",
              fontSize: this.tree.fontSize - 2,
              opacity: 1
            });
          }
        }, {
          key: "highlightTerm",
          value: function MorphNodeModel_highlightTerm_(term) {
            var nameLabel = this.ui.nameLabel;
            var termToHighlight = nameLabel.textString;
            var inBetween = termToHighlight.split(term);

            if (inBetween.length === 1) {
              nameLabel.textAndAttributes = [inBetween[0]];
              return;
            }

            nameLabel.textAndAttributes = _toConsumableArray(interpose(inBetween.map(function (x) {
              return [x, {}];
            }), [term, {
              fontWeight: "900"
            }]).flat());
          }
        }, {
          key: "showPreviewOn",
          value: function MorphNodeModel_showPreviewOn_(target) {
            var tree;

            if (target.isContainer) {
              tree = target.tree;
            }

            if (target.isTree) {
              tree = target;
            }

            if (tree && tree.showDropPreviewFor) {
              tree.showDropPreviewFor(this.view);
            }
          }
        }, {
          key: "wantsToBeDroppedOn",
          value: function MorphNodeModel_wantsToBeDroppedOn_($super, target) {
            var res = $super(target);
            this.showPreviewOn(target);
            if (![target].concat(_toConsumableArray(target.ownerChain())).includes(this.tree)) this.onDragOutside();
            return res;
          }
        }, {
          key: "onGrab",
          value: function () {
            var _MorphNodeModel_onGrab_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3($onGrab, evt) {
              var view, tree, node, globalTargetPosition;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      view = this.view, tree = this.tree, node = this.node;
                      tree._dropInProgress = true;
                      globalTargetPosition = this.target.globalPosition;
                      $onGrab(evt);

                      if (node) {
                        _context3.next = 6;
                        break;
                      }

                      return _context3.abrupt("return");

                    case 6:
                      tree.collapse(node);
                      tree.treeData.parentNode(node).container.onChildRemoved(this);
                      this._data = tree.treeData.remove(node);
                      view.withMetaDo({
                        reconcileChanges: true
                      }, function () {
                        node.container.target.remove();
                      });
                      tree.update(true);
                      this._data.globalTargetPosition = globalTargetPosition;

                      if (!tree.fullContainsWorldPoint(view.globalPosition)) {
                        this.onDragOutside();
                      } else view.leftCenter = pt(-20, 0);

                      this.tree._dropInProgress = false;

                    case 14:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function MorphNodeModel_onGrab_(_x2, _x3) {
              return _MorphNodeModel_onGrab_.apply(this, arguments);
            }

            return MorphNodeModel_onGrab_;
          }()
        }, {
          key: "onDragOutside",
          value: function MorphNodeModel_onDragOutside_() {
            var _this5 = this;

            if (!this.queue) {
              var tree = this.tree;
              this.queue = createQueue("container-hover-queue", /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(self, thenDo) {
                  var _self$target, originalOpacity, originalScale;

                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _self$target = self.target, originalOpacity = _self$target.opacity, originalScale = _self$target.scale;
                          self.target.opacity = 0;
                          self.target.scale = 0.5;
                          $world.halos().forEach(function (h) {
                            return h.remove();
                          });
                          $world.firstHand.grab(self.target);
                          self.target._data = self._data;
                          self.remove();
                          self.target.position = pt(0, 0);
                          tree.treeData.remove(_this5.tree._previewNode);
                          tree.update(true);
                          _context4.next = 12;
                          return self.target.animate({
                            opacity: originalOpacity,
                            scale: originalScale,
                            duration: 200
                          });

                        case 12:
                          thenDo();

                        case 13:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                }));

                return function (_x4, _x5) {
                  return _ref.apply(this, arguments);
                };
              }());
            }

            this.queue.push(this.view);
          }
        }, {
          key: "onChildAdded",
          value: function MorphNodeModel_onChildAdded_(child) {
            var _this6 = this;

            var nextIndex = this.node.children.indexOf(child.node || child._data) + 1;
            var neighbor = this.node.children[nextIndex];
            var posBackup = child.target.position;
            this.target.withMetaDo({
              reconcileChanges: true
            }, function () {
              child.target.remove();

              if (neighbor) {
                var actualIndex = _this6.target.submorphs.indexOf(neighbor.container.target);

                _this6.target.addMorphAt(child.target, actualIndex);

                child.target.globalPosition = posBackup;
              } else {
                _this6.target.addMorph(child.target);

                child.target.globalPosition = posBackup;
              }
            });

            if (child._data.globalTargetPosition) {
              child.target.position = this.target.localize(child._data.globalTargetPosition);
            } else if (this.target.isWorld) {
              child.target.center = $world.center;
              child.target.show();
            }
          }
        }, {
          key: "onChildRemoved",
          value: function MorphNodeModel_onChildRemoved_(child) {}
        }, {
          key: "insertAsChild",
          value: function () {
            var _MorphNodeModel_insertAsChild_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(node) {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.tree.treeData.add(node._data, this.node, this.node.children[0]);
                      this.tree.uncollapse(this.node);
                      this.tree.treeData.remove(this.tree._previewNode);
                      this.tree.update(true);
                      this.onChildAdded(node);

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function MorphNodeModel_insertAsChild_(_x6) {
              return _MorphNodeModel_insertAsChild_.apply(this, arguments);
            }

            return MorphNodeModel_insertAsChild_;
          }()
        }, {
          key: "onBeingDroppedOn",
          value: function MorphNodeModel_onBeingDroppedOn_($super, hand, recipient) {
            var _this7 = this;

            var view = this.view;
            this.tree._dropInProgress = true;

            var after = function after() {
              view.fill = Color.gray.withA(0.5);
              view.opacity = 1;
              _this7.tree._dropInProgress = false;

              _this7.tree.refresh();
            };

            if (recipient.isTree) {
              recipient.insertAtPlaceholder(this.view).then(after);
            } else if (recipient.isContainer) {
              recipient.insertAsChild(this.view).then(after);
            } else {
              after();
            }
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "MorphNodeModel";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              target: {
                serialize: false
              },
              isContainer: {
                get: function get() {
                  return true;
                }
              },
              tree: {},
              node: {
                readOnly: true,
                get: function get() {
                  var _this8 = this;

                  var treeData = this.tree.treeData;
                  return treeData && treeData.asList().find(function (m) {
                    return m.container === _this8.view;
                  });
                }
              },
              dragTriggerDistance: {
                defaultValue: 15
              },
              nameNeedsUpdate: {
                derived: true,
                get: function get() {
                  if (this.target) {
                    if (this.ui.nameLabel.textString.slice(2, -1) !== this.target.name) return true;
                    if (this.connectionCount !== (this.target.attributeConnections || []).length) return true;
                  }

                  return false;
                }
              },
              sideBar: {
                derived: true,
                get: function get() {
                  return this.view.owner.owner;
                }
              },
              expose: {
                get: function get() {
                  return ["refresh", "highlightTerm", "target", "dragTriggerDistance", "isContainer", "onDragOutside", "tree", "insertAsChild", "onChildAdded", "onChildRemoved", "nameNeedsUpdate"];
                }
              },
              bindings: {
                get: function get() {
                  return [{
                    signal: "onContextMenu",
                    handler: "onContextMenu"
                  }, {
                    signal: "onBeingDroppedOn",
                    handler: "onBeingDroppedOn",
                    override: true
                  }, {
                    signal: "wantsToBeDroppedOn",
                    handler: "wantsToBeDroppedOn",
                    override: true
                  }, {
                    signal: "onGrab",
                    handler: "onGrab",
                    override: true
                  }, {
                    signal: "onHoverIn",
                    handler: "showControls"
                  }, {
                    signal: "onHoverOut",
                    handler: "hideControls"
                  }, {
                    target: "visibility icon",
                    signal: "onMouseDown",
                    handler: "toggleVisibility"
                  }, {
                    target: "layoutable toggle",
                    signal: "onMouseDown",
                    handler: "toggleLayoutability"
                  }];
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./studio/scene-graph.cp.js";
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
          start: 6766,
          end: 15533
        });
      }({
        referencedAs: "ViewModel",
        value: ViewModel
      }));
      __varRecorder__.MorphNodeModel = MorphNodeModel;
      __varRecorder__.MorphNodeModel = MorphNodeModel;
      __varRecorder__.MorphNode = component["for"](function () {
        return component({
          name: "morph node",
          defaultViewModel: __varRecorder__.MorphNodeModel,
          fill: Color.rgba(255, 255, 255, 0),
          borderRadius: 5,
          clipMode: "hidden",
          layout: new TilingLayout({
            axisAlign: "center",
            orderByIndex: true,
            padding: rect(10, 0, 0, 0),
            resizePolicies: [["name wrapper", {
              height: "fill",
              width: "fill"
            }]],
            spacing: 10,
            wrapSubmorphs: false
          }),
          draggable: true,
          grabbable: true,
          extent: pt(174.1, 30.8),
          submorphs: [{
            type: Label,
            name: "morph icon",
            opacity: 0.4,
            fontSize: 10,
            fill: Color.rgba(229, 231, 233, 0),
            fontColor: Color.rgb(208, 208, 208),
            fontFamily: "Material Icons",
            reactsToPointer: false,
            padding: rect(0, 0, 0, 3),
            textAndAttributes: ["\uE264", {
              fontSize: 10,
              fontFamily: "Material Icons"
            }]
          }, {
            type: TitleWrapper,
            fill: Color.transparent,
            reactsToPointer: false,
            acceptsDrops: false,
            name: "name wrapper",
            clipMode: "hidden",
            maxLength: Infinity,
            submorphs: [part(PropLabel, {
              name: "name label",
              lineHeight: 2.5,
              clipMode: "hidden",
              reactsToPointer: false,
              padding: rect(0),
              textAndAttributes: ["some text morph", null]
            })]
          }, {
            type: Label,
            name: "visibility icon",
            fill: Color.rgba(229, 231, 233, 0),
            fontColor: Color.rgb(208, 208, 208),
            fontFamily: "Material Icons",
            fontSize: 16,
            nativeCursor: "pointer",
            textAndAttributes: ["\uE8F4", {
              fontSize: 16,
              fontFamily: "Material Icons"
            }]
          }, {
            type: Label,
            name: "layout indicator",
            padding: rect(4, 1, 0, 0),
            rotation: toRadians(90),
            fill: Color.rgba(229, 231, 233, 0),
            fontColor: Color.rgb(208, 208, 208),
            fontFamily: "Material Icons",
            fontSize: 16,
            nativeCursor: "pointer",
            textAndAttributes: ["\uE8E9", {
              fontSize: 16,
              fontFamily: "Material Icons"
            }]
          }, {
            type: Label,
            name: "layoutable toggle",
            fill: Color.rgba(229, 231, 233, 0),
            fontColor: Color.rgb(208, 208, 208),
            fontFamily: "\"Material Icons\"",
            fontSize: 16,
            nativeCursor: "pointer",
            padding: rect(4, 1, 0, 0),
            position: pt(-13, 24),
            textAndAttributes: ["\uF151", {
              fontFamily: "Tabler Icons",
              fontWeight: "900"
            }]
          }]
        });
      }, {
        module: "lively.ide/studio/scene-graph.cp.js",
        "export": "MorphNode",
        range: {
          start: 15541,
          end: 17888
        }
      }, System, __varRecorder__, "MorphNode");
      __varRecorder__.MorphPanel = component["for"](function () {
        return component({
          defaultViewModel: __varRecorder__.MorphPanelModel,
          name: "morph panel",
          nativeCursor: "ew-resize",
          extent: pt(250, 1000),
          draggable: true,
          layout: new TilingLayout({
            axis: "column",
            orderByIndex: true,
            padding: rect(0, 0, 5, 0),
            resizePolicies: [["panel bg", {
              height: "fill",
              width: "fill"
            }]],
            wrapSubmorphs: false
          }),
          fill: Color.transparent,
          submorphs: [{
            name: "panel bg",
            clipMode: "hidden",
            layout: new TilingLayout({
              axis: "column",
              orderByIndex: true,
              padding: rect(0, 60, 0, -60),
              resizePolicies: [["search field", {
                height: "fixed",
                width: "fill"
              }], ["scene graph", {
                height: "fill",
                width: "fill"
              }]],
              spacing: 5,
              wrapSubmorphs: false
            }),
            fill: Color.rgb(30, 30, 30).withA(0.95),
            submorphs: [part(SearchField, {
              name: "search field",
              fontColor: Color.rgb(247, 247, 247),
              fontSize: 13,
              extent: pt(238, 24.9),
              borderWidth: 0,
              fill: Color.rgb(152, 152, 152),
              borderRadius: 0,
              submorphs: [{
                name: "placeholder",
                fontSize: 14
              }]
            }), {
              type: __varRecorder__.NewSceneGraphTree,
              treeData: new InteractiveTreeData({}),
              name: "scene graph",
              acceptsDrops: true,
              selectionColor: Color.rgbHex("B2EBF2").withA(0.25),
              fill: Color.rgba(255, 255, 255, 0),
              clipMode: "hidden",
              lineHeight: 2,
              fontColor: Color.white
            }]
          }]
        });
      }, {
        module: "lively.ide/studio/scene-graph.cp.js",
        "export": "MorphPanel",
        range: {
          start: 17897,
          end: 19462
        }
      }, System, __varRecorder__, "MorphPanel");
      var MorphNode = exports('MorphNode', __varRecorder__.MorphNode);
      var MorphPanel = exports('MorphPanel', __varRecorder__.MorphPanel);
      __varRecorder__.MorphNode = MorphNode;
      __varRecorder__.MorphPanel = MorphPanel;

    })
  };
}));
