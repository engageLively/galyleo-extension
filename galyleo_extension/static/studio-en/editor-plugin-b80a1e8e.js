System.register(['./__rootModule___commonjs-entry-039abf1b.js', './ui.cp-d94265c2.js', './shell-interface-e2437883.js', './loading-indicator.cp-668e5ddc.js', './index-0250cb25.js', './index-d0172adc.js', './index-d97f22af.js', './list.cp-50d496c7.js', './client-fb647a5a.js', './editor-modes-0f820fa8.js', './search-cf1a5c4c.js', './index-009b6510.js', './client-command-99e40f2e.js'], (function (exports) {
  var __contextModule__ = typeof module !== 'undefined' ? module : arguments[1];
;
  var initializeClass, lines, takeWhile, _slicedToArray, invoke, format, last, _createForOfIteratorHelper, lessEqPosition, lessPosition, equals, _asyncToGenerator, newUUID, capitalize, config, pluck, pt, joinPath, show, EditorPlugin, runCommand, defaultDirectory;
  return {
    setters: [function (module) {
      initializeClass = module.i;
      lines = module.a$;
      takeWhile = module.ca;
      _slicedToArray = module.o;
      invoke = module.cq;
      format = module.cO;
      last = module.q;
      _createForOfIteratorHelper = module.a6;
      lessEqPosition = module.dF;
      lessPosition = module.dG;
      equals = module.af;
      _asyncToGenerator = module._;
      newUUID = module.cl;
      capitalize = module.bo;
      config = module.v;
      pluck = module.c9;
      pt = module.b;
      joinPath = module.b9;
    }, function (module) {
      show = module.s;
      EditorPlugin = module.E;
    }, function (module) {
      runCommand = module.runCommand;
      defaultDirectory = module.defaultDirectory;
    }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
    execute: (function () {

      var __varRecorder__$4 = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/diff/file-patch.js", __contextModule__);
      var FilePatch = function (superclass) {
        var __lively_classholder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/diff/file-patch.js", __contextModule__);

        var __lively_class__ = __lively_classholder__.hasOwnProperty("FilePatch") && typeof __lively_classholder__.FilePatch === "function" ? __lively_classholder__.FilePatch : __lively_classholder__.FilePatch = function FilePatch(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        if (Object.isFrozen(__lively_classholder__)) {
          return __lively_class__;
        }

        return initializeClass(__lively_class__, superclass, [{
          key: Symbol["for"]("lively-instance-initialize"),
          value: function FilePatch_initialize_() {
            this.lines = [];
            this.headerLines = [];
            this.hunks = [];
            this.pathOriginal = "";
            this.pathChanged = "";
            this.fileNameA = "";
            this.fileNameB = "";
            this.command = "";
          }
        }, {
          key: "copy",
          value: function FilePatch_copy_() {
            return Object.assign(new this.constructor(), this);
          }
        }, {
          key: "isFilePatch",
          get: function get() {
            return true;
          }
        }, {
          key: "read",
          value: function FilePatch_read_(patchStringOrLines) {
            this.lines = Array.isArray(patchStringOrLines) ? patchStringOrLines : lines(patchStringOrLines);
            var lines$1 = this.lines.slice();
            var hunks = this.hunks;
            var pathOriginal;
            var pathChanged;
            if (lines$1[lines$1.length - 1] === "") lines$1.pop();
            var headerLines = this.headerLines = takeWhile(lines$1, function (line) {
              return !line.startsWith("---");
            });

            if (headerLines.length && !headerLines[0].match(/^index/i)) {
              this.command = headerLines[0];
            }

            lines$1 = lines$1.slice(headerLines.length);

            var _lines = lines$1,
                _lines2 = _slicedToArray(_lines, 2),
                headerFileA = _lines2[0],
                headerFileB = _lines2[1];

            if (headerFileA && headerFileA.startsWith("---")) {
              var _headerFileA$match = headerFileA.match(/^---\s*([^\s]+)/),
                  _headerFileA$match2 = _slicedToArray(_headerFileA$match, 2);
                  _headerFileA$match2[0];
                  var name = _headerFileA$match2[1];

              this.pathOriginal = name;
              this.fileNameA = name.replace(/^a\//, "");
              headerLines.push(headerFileA);
            }

            if (headerFileB && headerFileB.startsWith("+++")) {
              var _headerFileB$match = headerFileB.match(/^\+\+\+\s*([^\s]+)/),
                  _headerFileB$match2 = _slicedToArray(_headerFileB$match, 2);
                  _headerFileB$match2[0];
                  var name = _headerFileB$match2[1];

              this.pathChanged = name;
              this.fileNameB = name.replace(/^b\//, "");
              headerLines.push(headerFileB);
            }

            while (lines$1.length > 0) {
              var hunk = __varRecorder__$4.FilePatchHunk.read(lines$1, pathOriginal, pathChanged);

              pathOriginal = hunk.pathOriginal;
              pathChanged = hunk.pathChanged;
              hunk.patch = this;
              hunks.push(hunk);
            }

            return this;
          }
        }, {
          key: "reverse",
          value: function FilePatch_reverse_() {
            return __varRecorder__$4.FilePatch.read(this.createPatchString(true));
          }
        }, {
          key: "createPatchStringHeader",
          value: function FilePatch_createPatchStringHeader_(reverse) {
            return takeWhile(this.headerLines, function (line) {
              return !line.startsWith("---");
            }).join("\n");
          }
        }, {
          key: "createPatchString",
          value: function FilePatch_createPatchString_(reverse) {
            return this.createPatchStringHeader(reverse) + "\n" + this.hunks.map(function (hunk, i) {
              return hunk.createPatchString(reverse, i === 0);
            }).join("\n") + "\n";
          }
        }, {
          key: "createPatchStringFromRows",
          value: function FilePatch_createPatchStringFromRows_(startRow, endRow, forReverseApply) {
            var hunks = this.hunks,
                nHeaderLines = this.headerLines.length;
            var hunkPatches = [];
            startRow = Math.max(startRow, nHeaderLines) - nHeaderLines;
            endRow -= nHeaderLines;
            var fileInfoIncluded = false;
            var hunkPatches = hunks.map(function (hunk, i) {
              var patch = hunk.createPatchStringFromRows(startRow, endRow, forReverseApply, !fileInfoIncluded);
              fileInfoIncluded = fileInfoIncluded || !!patch;
              startRow -= hunk.length;
              endRow -= hunk.length;
              return patch;
            }).filter(Boolean);
            return hunkPatches.length === 0 ? null : this.createPatchStringHeader() + "\n" + hunkPatches.join("\n") + "\n";
          }
        }, {
          key: "changesByLines",
          value: function FilePatch_changesByLines_() {
            return invoke(this.hunks, "changesByLines").flat();
          }
        }, {
          key: "length",
          value: function FilePatch_length_() {
            return this.lines.length;
          }
        }, {
          key: "patch",
          value: function FilePatch_patch_(s) {
            return this.changesByLines().reduce(function (patchedLines, change, i) {
              var startAddition = change.lineNoAdded - 1;
              var removed = change.removed.replace(/\n$/, "");
              var noLinesRemoved = removed ? lines(removed).length : 0;
              var reallyRemoved = patchedLines.slice(startAddition, startAddition + noLinesRemoved).join("\n");

              if (removed !== reallyRemoved) {
                var msg = format("Change %s not matching: Expected \"%s\", got \"%s\"", i + 1, removed, reallyRemoved);
                throw new Error(msg);
              }

              var added = change.added ? change.added : "";
              var endAddition = startAddition + noLinesRemoved;
              var result = patchedLines.slice(0, startAddition).concat(added ? lines(added.replace(/\n$/, "")) : []).concat(patchedLines.slice(endAddition));
              return result;
            }, lines(s)).join("\n");
          }
        }, {
          key: "hunkForRow",
          value: function FilePatch_hunkForRow_(row) {
            row -= this.headerLines.length;
            if (row < 0) return null;
            return this.hunks.find(function (_ref) {
              var header = _ref.header,
                  lines = _ref.lines;
              row -= (header ? 1 : 0) + lines.length;
              if (row < 0) return true;
            });
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "FilePatch";
          }
        }, {
          key: "read",
          value: function FilePatch_read_(patchString) {
            return new this().read(patchString);
          }
        }, {
          key: "readAll",
          value: function FilePatch_readAll_(patchString) {
            var patchLines = lines(patchString).reduce(function (patchLines, line) {
              var last$1 = last(patchLines);
              if (!last$1) patchLines.push([line]);else if (line.match(/^(---|\+\+\+|@@|-|\+|\\| )/)) last$1.push(line);else if (last$1.length === 1) {
                last$1.push(line);
              } else if (line === "") ; else patchLines.push([line]);
              return patchLines;
            }, []);
            return patchLines.map(function (ea) {
              return __varRecorder__$4.FilePatch.read(ea);
            });
          }
        }, {
          key: "hunkOrPatchForRow",
          value: function FilePatch_hunkOrPatchForRow_(patches) {
            var row = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var patchStartRow = 0;
            var patchEndRow = 0;
            var patch;

            var _iterator = _createForOfIteratorHelper(patches),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                patch = _step.value;
                patchEndRow += patch.length();
                if (row < patchEndRow) break;
                patchStartRow = patchEndRow;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            row -= patchStartRow;
            return !patch ? null : patch.hunkForRow(row) || patch;
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./diff/file-patch.js";
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
          start: 51,
          end: 5895
        });
      }(undefined);
      __varRecorder__$4.FilePatch = FilePatch;
      __varRecorder__$4.FilePatch = FilePatch;
      var FilePatchHunk = function (superclass) {
        var __lively_classholder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/diff/file-patch.js", __contextModule__);

        var __lively_class__ = __lively_classholder__.hasOwnProperty("FilePatchHunk") && typeof __lively_classholder__.FilePatchHunk === "function" ? __lively_classholder__.FilePatchHunk : __lively_classholder__.FilePatchHunk = function FilePatchHunk(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        if (Object.isFrozen(__lively_classholder__)) {
          return __lively_class__;
        }

        return initializeClass(__lively_class__, superclass, [{
          key: Symbol["for"]("lively-instance-initialize"),
          value: function FilePatchHunk_initialize_() {
            this.patch = null;
            this.pathOriginal = "";
            this.pathChanged = "";
            this.fileNameA = "";
            this.fileNameB = "";
            this.header = "";
            this.originalLine = -1;
            this.originalLength = -1;
            this.changedLine = -1;
            this.changedLength = -1;
            this.lines = [];
          }
        }, {
          key: "isFilePatchHunk",
          get: function get() {
            return true;
          }
        }, {
          key: "read",
          value: function FilePatchHunk_read_(lines, optPathOriginal, optPathChanged) {
            this.pathOriginal = optPathOriginal || "";
            this.pathChanged = optPathChanged || "";
            var line = lines.shift();

            while (!line.startsWith("---") && !line.startsWith("@@")) {
              line = lines.shift();
            }

            if (line.startsWith("---")) {
              this.pathOriginal = line.split(" ")[1] || this.pathOriginal;
              line = lines.shift();
            }

            this.fileNameA = this.pathOriginal.replace(/^a\//, "");

            if (line.startsWith("+++")) {
              this.pathChanged = line.split(" ")[1] || this.pathChanged;
              line = lines.shift();
            }

            this.fileNameB = this.pathChanged.replace(/^b\//, "");
            var headerMatch = line.match(/^@@\s*-([0-9]+),?([0-9]*)\s*\+([0-9]+),?([0-9]*)\s*@@/);
            console.assert(headerMatch, "hunk header " + line);
            this.header = headerMatch[0];
            this.originalLine = Number(headerMatch[1]);
            this.originalLength = Number(headerMatch[2]);
            this.changedLine = Number(headerMatch[3]);
            this.changedLength = Number(headerMatch[4]);

            while (lines[0] && lines[0].match(/^[\+\-\s\\]/)) {
              this.lines.push(lines.shift());
            }

            this.length = this.lines.length + 1;
            return this;
          }
        }, {
          key: "createPatchString",
          value: function FilePatchHunk_createPatchString_(reverse, includeOriginalChangedFile) {
            return this.printHeader(reverse, includeOriginalChangedFile) + "\n" + this.printLines(reverse);
          }
        }, {
          key: "createPatchStringFromRows",
          value: function FilePatchHunk_createPatchStringFromRows_(startRow, endRow, forReverseApply, includeOriginalChangedFile) {
            if (endRow < 1 || startRow >= this.lines.length) return null;
            var origLine = this.originalLine;
            var changedLine = this.changedLine;
            var origLength = 0;
            var changedLength = 0;
            var header;
            var selection = this.lines.reduce(function (akk, line, i) {
              if (akk.atEnd) return akk;
              i++;

              if (i < startRow) {
                switch (line[0]) {
                  case "+":
                  case "-":
                    origLine = origLine + akk.lines.length;
                    changedLine = changedLine + akk.lines.length;
                    changedLength = 0;
                    origLength = 0;
                    akk.lines = [];
                    return akk;

                  case " ":
                    changedLength++;
                    origLength++;
                    break;
                }
              } else if (i > endRow) {
                switch (line[0]) {
                  case " ":
                    changedLength++;
                    origLength++;
                    break;

                  default:
                    akk.atEnd = true;
                    return akk;
                }
              } else {
                switch (line[0]) {
                  case " ":
                    changedLength++;
                    origLength++;
                    break;

                  case "-":
                    origLength++;
                    break;

                  case "+":
                    changedLength++;
                    break;
                }
              }

              if (forReverseApply) {
                switch (line[0]) {
                  case "-":
                    line = "+" + line.slice(1);
                    break;

                  case "+":
                    line = "-" + line.slice(1);
                    break;
                }
              }

              akk.lines.push(line);
              return akk;
            }, {
              atEnd: false,
              lines: []
            });
            var lines = selection.lines;
            if (lines.length === 0) return null;
            var fileHeader = "";

            if (includeOriginalChangedFile) {
              fileHeader = "--- " + (forReverseApply ? this.pathChanged : this.pathOriginal) + "\n" + "+++ " + (forReverseApply ? this.pathOriginal : this.pathChanged) + "\n";
            }

            header = format("%s@@ -%s,%s +%s,%s @@", fileHeader, origLine, origLength, changedLine, changedLength);
            return [header].concat(lines).join("\n");
          }
        }, {
          key: "changesByLines",
          value: function FilePatchHunk_changesByLines_() {
            var baseLineAdded = this.changedLine;
            var baseLineRemoved = this.originalLine;
            var lineDiff = 0;
            var result = this.lines.reduce(function (result, line, i) {
              if (line[0] === " ") {
                if (result.current) {
                  result.changes.push(result.current);
                  result.current = null;
                }

                return result;
              }

              var change = result.current || (result.current = {
                lineNoAdded: baseLineAdded + i + lineDiff,
                lineNoRemoved: baseLineRemoved + i + lineDiff,
                added: "",
                removed: ""
              });

              if (line[0] === "+") {
                change.added += line.slice(1) + "\n";
                lineDiff++;
              } else if (line[0] === "-") {
                change.removed += line.slice(1) + "\n";
                lineDiff--;
              }

              return result;
            }, {
              changes: [],
              current: null
            });
            if (result.current) result.changes.push(result.current);
            return result.changes;
          }
        }, {
          key: "relativeOffsetToFileLine",
          value: function FilePatchHunk_relativeOffsetToFileLine_(offset) {
            return offset <= 0 ? this.changedLine - 1 : this.lines.slice(0, offset).reduce(function (lineNo, line) {
              var c = line[0];
              return c === "+" || c === " " ? lineNo + 1 : lineNo;
            }, this.changedLine - 2);
          }
        }, {
          key: "printHeader",
          value: function FilePatchHunk_printHeader_(reverse, includeOriginalChangedFile) {
            var fileHeader = "";

            if (includeOriginalChangedFile) {
              fileHeader = "--- " + (reverse ? this.pathChanged : this.pathOriginal) + "\n" + "+++ " + (reverse ? this.pathOriginal : this.pathChanged) + "\n";
            }

            var sub = reverse ? this.changedLine + "," + this.changedLength : this.originalLine + "," + this.originalLength;
            var add = reverse ? this.originalLine + "," + this.originalLength : this.changedLine + "," + this.changedLength;
            return format("%s@@ -%s +%s @@", fileHeader, sub, add);
          }
        }, {
          key: "printLines",
          value: function FilePatchHunk_printLines_(reverse) {
            return (reverse ? this.lines.map(function (line) {
              switch (line[0]) {
                case " ":
                  return line;

                case "+":
                  return "-" + line.slice(1);

                case "-":
                  return "+" + line.slice(1);
              }
            }) : this.lines).join("\n");
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "FilePatchHunk";
          }
        }, {
          key: "read",
          value: function FilePatchHunk_read_(patchString, optOriginalPath, optChangedPath) {
            return new this().read(patchString, optOriginalPath, optChangedPath);
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./diff/file-patch.js";
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
          start: 5904,
          end: 13870
        });
      }(undefined);
      __varRecorder__$4.FilePatchHunk = FilePatchHunk;
      __varRecorder__$4.FilePatchHunk = FilePatchHunk;

      var __varRecorder__$3 = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/diff/tokenizer.js", __contextModule__);

      var DiffTokenizer = function (superclass) {
        var __lively_classholder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/diff/tokenizer.js", __contextModule__);

        var __lively_class__ = __lively_classholder__.hasOwnProperty("DiffTokenizer") && typeof __lively_classholder__.DiffTokenizer === "function" ? __lively_classholder__.DiffTokenizer : __lively_classholder__.DiffTokenizer = function DiffTokenizer(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        if (Object.isFrozen(__lively_classholder__)) {
          return __lively_class__;
        }

        return initializeClass(__lively_class__, superclass, [{
          key: "tokenize",
          value: function DiffTokenizer_tokenize_(string) {
            var patches = FilePatch.readAll(string);
            var start = {
              row: 0,
              column: 0
            };
            var tokens = [];
            var patchI = 0;

            var _iterator = _createForOfIteratorHelper(patches),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var patch = _step.value;
                var end = {
                  column: 0,
                  row: start.row + patch.headerLines.length
                };
                var token = {
                  patch: patchI,
                  string: patch.headerLines.join("\n") + "\n",
                  type: "diff-file-header",
                  start: start,
                  end: end
                };
                tokens.push(token);
                patch.tokens = [token];
                start = end;
                var hunkI = 0;

                var _iterator2 = _createForOfIteratorHelper(patch.hunks),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var hunk = _step2.value;
                    end = {
                      column: 0,
                      row: start.row + 1
                    };
                    token = {
                      patch: patchI,
                      hunk: hunkI,
                      string: hunk.header + "\n",
                      type: "diff-hunk-header",
                      start: start,
                      end: end
                    };
                    tokens.push(token);
                    patch.tokens.push(token);
                    hunk.tokens = [token];
                    start = end;

                    var _iterator3 = _createForOfIteratorHelper(hunk.lines),
                        _step3;

                    try {
                      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                        var line = _step3.value;
                        end = {
                          column: 0,
                          row: start.row + 1
                        };
                        var type = line.startsWith("+") ? "inserted" : line.startsWith("-") ? "deleted" : "default";
                        token = {
                          patch: patchI,
                          hunk: hunkI,
                          string: line + "\n",
                          type: type,
                          start: start,
                          end: end
                        };
                        tokens.push(token);
                        patch.tokens.push(token);
                        hunk.tokens.push(token);
                        start = end;
                      }
                    } catch (err) {
                      _iterator3.e(err);
                    } finally {
                      _iterator3.f();
                    }

                    hunkI++;
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }

                patchI++;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return {
              tokens: tokens,
              patches: patches
            };
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "DiffTokenizer";
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./diff/tokenizer.js";
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
          start: 61,
          end: 1593
        });
      }(undefined);
      __varRecorder__$3["default"] = DiffTokenizer;

      var __varRecorder__$2 = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/diff/navigator.js", __contextModule__);

      var DiffNavigator = function (superclass) {
        var __lively_classholder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/diff/navigator.js", __contextModule__);

        var __lively_class__ = __lively_classholder__.hasOwnProperty("DiffNavigator") && typeof __lively_classholder__.DiffNavigator === "function" ? __lively_classholder__.DiffNavigator : __lively_classholder__.DiffNavigator = function DiffNavigator(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        if (Object.isFrozen(__lively_classholder__)) {
          return __lively_class__;
        }

        return initializeClass(__lively_class__, superclass, [{
          key: "ensureAST",
          value: function DiffNavigator_ensureAST_(ed) {
            return new DiffTokenizer().tokenize(ed.textString).tokens;
          }
        }, {
          key: "tokenStateAt",
          value: function DiffNavigator_tokenStateAt_(ed) {
            var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ed.cursorPosition;
            var p = ed.pluginFind(function (ea) {
              return ea.isDiffEditorPlugin;
            });
            if (!p) return null;
            var tokens = p.tokens,
                patches = p.patches;
            var tokenIndex = tokens.findIndex(function (_ref) {
              var start = _ref.start,
                  end = _ref.end;
              return lessEqPosition(start, pos) && lessPosition(pos, end);
            });
            var token = tokens[tokenIndex];
            return {
              token: token,
              tokenIndex: tokenIndex,
              tokens: tokens,
              patches: patches
            };
          }
        }, {
          key: "findPatchAt",
          value: function DiffNavigator_findPatchAt_(ed) {
            var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ed.cursorPosition;
            var entity = this.findContainingHunkOrPatch(ed, {
              start: pos,
              end: pos
            });
            return !entity ? null : entity.isFilePatchHunk ? entity.patch : entity;
          }
        }, {
          key: "findHunkAt",
          value: function DiffNavigator_findHunkAt_(ed) {
            var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ed.cursorPosition;
            var entity = this.findContainingHunkOrPatch(ed, {
              start: pos,
              end: pos
            });
            return !entity ? null : !entity.isFilePatchHunk ? null : entity;
          }
        }, {
          key: "findPatchStart",
          value: function DiffNavigator_findPatchStart_(ed, pos) {
            var patch = this.findPatchAt(ed, pos);
            return patch ? patch.tokens[0].start : pos;
          }
        }, {
          key: "findPatchEnd",
          value: function DiffNavigator_findPatchEnd_(ed, pos) {
            var patch = this.findPatchAt(ed, pos);
            return patch ? last(patch.tokens).end : pos;
          }
        }, {
          key: "findHunkStart",
          value: function DiffNavigator_findHunkStart_(ed, pos) {
            var hunk = this.findHunkAt(ed, pos);
            return hunk ? hunk.tokens[0].start : pos;
          }
        }, {
          key: "findHunkEnd",
          value: function DiffNavigator_findHunkEnd_(ed) {
            var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ed.cursorPosition;
            var hunk = this.findHunkAt(ed, pos);
            return hunk ? last(hunk.tokens).end : pos;
          }
        }, {
          key: "backwardSexp",
          value: function DiffNavigator_backwardSexp_(ed) {
            var _this = this;

            var pos = ed.cursorPosition;
            var hunkStart = this.findHunkStart(ed);
            var patchStart = this.findPatchStart(ed);

            if (equals(pos, hunkStart)) {
              ed.saveExcursion(function () {
                ed.selection.goLeft();
                hunkStart = _this.findHunkStart(ed);
              });
              if (equals(pos, hunkStart)) hunkStart = null;
            }

            if (equals(pos, patchStart)) {
              ed.saveExcursion(function () {
                ed.selection.goLeft();
                patchStart = _this.findPatchStart(ed);
              });
              if (equals(pos, patchStart)) patchStart = null;
            }

            if (!hunkStart && !patchStart) return;
            var target;
            if (!hunkStart) target = patchStart;else if (!patchStart) target = hunkStart;else if (hunkStart.row > patchStart.row) target = hunkStart;else target = patchStart;
            ed.cursorPosition = target;
            ed.scrollCursorIntoView();
          }
        }, {
          key: "forwardSexp",
          value: function DiffNavigator_forwardSexp_(ed) {
            var nav = this;
            var pos = ed.cursorPosition;
            var hunkEnd = nav.findHunkEnd(ed);

            if (equals(pos, hunkEnd)) {
              ed.saveExcursion(function () {
                ed.selection.goRight();
                hunkEnd = nav.findHunkEnd(ed);
              });
              if (equals(pos, hunkEnd)) hunkEnd = null;
            }

            if (!hunkEnd) return;
            ed.cursorPosition = hunkEnd;
            ed.scrollCursorIntoView();
          }
        }, {
          key: "backwardUpSexp",
          value: function DiffNavigator_backwardUpSexp_(ed) {
            var nav = this;
            ed.cursorPosition;
            var patchStart = nav.findPatchStart(ed);
            if (!patchStart) return;
            ed.cursorPosition = patchStart;
            ed.scrollCursorIntoView();
          }
        }, {
          key: "forwardDownSexp",
          value: function DiffNavigator_forwardDownSexp_(ed) {
            show("Not yet implemented");
          }
        }, {
          key: "findContainingHunkOrPatch",
          value: function DiffNavigator_findContainingHunkOrPatch_(ed, startingRange) {

            var _this$tokenStateAt = this.tokenStateAt(ed, startingRange.start);
                _this$tokenStateAt.tokens;
                var patches = _this$tokenStateAt.patches,
                tokenStart = _this$tokenStateAt.token;

            var _this$tokenStateAt2 = this.tokenStateAt(ed, startingRange.end),
                tokenEnd = _this$tokenStateAt2.token;

            if (tokenStart.patch != tokenEnd.patch) return null;

            if (tokenStart.hasOwnProperty("hunk") && tokenEnd.hasOwnProperty("hunk")) {
              if (tokenStart.hunk === tokenEnd.hunk) {
                return patches[tokenStart.patch].hunks[tokenStart.hunk];
              }
            }

            return patches[tokenStart.patch];
          }
        }, {
          key: "findContainingHunkOrPatchRange",
          value: function DiffNavigator_findContainingHunkOrPatchRange_(ed, startingRange) {
            var entity = this.findContainingHunkOrPatch(ed, startingRange);
            if (!entity) return null;
            var toks = entity.tokens;
            var start = toks[0].start;
            var end = last(toks).end;
            return {
              start: start,
              end: end
            };
          }
        }, {
          key: "expandRegion",
          value: function DiffNavigator_expandRegion_(ed, src, ast, expandState) {
            var newRange = this.findContainingHunkOrPatchRange(ed, ed.selection.range);
            return newRange ? {
              range: [ed.positionToIndex(newRange.start), ed.positionToIndex(newRange.end)],
              prev: expandState
            } : expandState;
          }
        }, {
          key: "contractRegion",
          value: function DiffNavigator_contractRegion_(ed, src, ast, expandState) {
            return expandState.prev || expandState;
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "DiffNavigator";
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./diff/navigator.js";
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
          start: 487,
          end: 4833
        });
      }(undefined);
      __varRecorder__$2["default"] = DiffNavigator;

      var __varRecorder__$1 = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/shell/git.js", __contextModule__);
      var __moduleMeta__$1 = {
        pathInPackage: function pathInPackage() {
          return "./shell/git.js";
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

      var runCommands = __varRecorder__$1["lively.ide/shell/git.js__define__"]("runCommands", "function", /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(commands) {
          var results, group, runCommandFn, i, _iterator, _step, _step$value, name, command, options, transform, readFile, writeFile, content, cmd;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  results = {};
                  group = "lively.shell-default-command-group-" + newUUID();
                  runCommandFn = runCommand;
                  i = 0;
                  _iterator = _createForOfIteratorHelper(commands);
                  _context.prev = 5;

                  _iterator.s();

                case 7:
                  if ((_step = _iterator.n()).done) {
                    _context.next = 23;
                    break;
                  }

                  _step$value = _step.value, name = _step$value.name, command = _step$value.command, options = _step$value.options, transform = _step$value.transform, readFile = _step$value.readFile, writeFile = _step$value.writeFile, content = _step$value.content;
                  options = options || {};
                  if (!group) options.group = group;

                  if (readFile) {
                    runCommandFn = readFileFn;
                    command = readFile;
                  } else if (writeFile) {
                    runCommandFn = writeFileFn;
                    command = writeFile;
                    options = options || {};
                    if (content) options.content = content;
                  }

                  if (!readFile && !writeFile) {
                    command = command.replace(/\$\{([^\}]+)\}/g, function (_, variable) {
                      return results[variable] && results[variable].isShellCommand ? results[variable].output : results[variable] || "";
                    });
                  }

                  console.log("Running ".concat(command, " with options"), options);
                  _context.next = 16;
                  return runCommandFn(command, options);

                case 16:
                  cmd = _context.sent;
                  _context.next = 19;
                  return cmd.whenDone();

                case 19:
                  name = name || String(i++);
                  results[name] = typeof transform === "function" ? transform(cmd) : cmd;

                case 21:
                  _context.next = 7;
                  break;

                case 23:
                  _context.next = 28;
                  break;

                case 25:
                  _context.prev = 25;
                  _context.t0 = _context["catch"](5);

                  _iterator.e(_context.t0);

                case 28:
                  _context.prev = 28;

                  _iterator.f();

                  return _context.finish(28);

                case 31:
                  return _context.abrupt("return", results);

                case 32:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[5, 25, 28, 31]]);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), __moduleMeta__$1);

      __varRecorder__$1.runCommands = runCommands;

      var runGitCommands = __varRecorder__$1["lively.ide/shell/git.js__define__"]("runGitCommands", "function", /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(commands) {
          var options,
              defaultOptions,
              cwd,
              result,
              _args2 = arguments;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  options = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {
                    cwd: null
                  };
                  defaultOptions = ["--no-pager"];

                  if (!options.cwd) {
                    _context2.next = 6;
                    break;
                  }

                  _context2.t0 = options.cwd;
                  _context2.next = 9;
                  break;

                case 6:
                  _context2.next = 8;
                  return defaultDirectory();

                case 8:
                  _context2.t0 = _context2.sent;

                case 9:
                  cwd = _context2.t0;
                  commands.map(function (ea) {
                    if (ea.gitCommand) {
                      if (Array.isArray(ea.gitCommand)) ea.gitCommand = ea.gitCommand.join(" ");
                      ea.command = ["git"].concat(defaultOptions).concat([ea.gitCommand]).join(" ");
                    }

                    ea.options = Object.assign({
                      cwd: cwd,
                      group: "lively-git-interface"
                    }, ea.options);
                    return ea;
                  }).filter(Boolean);

                  if (options.dryRun) {
                    _context2.next = 16;
                    break;
                  }

                  _context2.next = 14;
                  return __varRecorder__$1.runCommands(commands);

                case 14:
                  result = _context2.sent;
                  result = Object.keys(result || {}).reduce(function (result, name) {
                    var cmd = result[name];
                    if (!cmd || !cmd.isShellCommand) return result;
                    result["cmd" + capitalize(name)] = cmd;
                    result[name] = cmd.output;
                    return result;
                  }, result);

                case 16:
                  return _context2.abrupt("return", result);

                case 17:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }(), __moduleMeta__$1);

      __varRecorder__$1.runGitCommands = runGitCommands;

      var fileStatus = __varRecorder__$1["lively.ide/shell/git.js__define__"]("fileStatus", "function", /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dir) {
          var commands,
              mapping,
              lines,
              fileObjects,
              addFilenameAndChange;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  addFilenameAndChange = function _addFilenameAndChange(fileObject) {
                    var statusString = fileObject.statusString;
                    var type = fileObject.status;
                    var change = "";
                    var fileName = statusString.slice(3);
                    var statusFlags = statusString.slice(0, 2);
                    var statusFlagIndex = statusFlags[0];
                    var statusFlagWorkTree = statusFlags[1];
                    var statusFlag = type === "unstaged" ? statusFlagWorkTree : statusFlagIndex;
                    if (statusFlags === "DD") change = "unmerged, deleted locally and remotely";else if (statusFlags === "AU") change = "unmerged, added locally and modified remotely";else if (statusFlags === "UD") change = "unmerged, modified locally and deleted remotely";else if (statusFlags === "UA") change = "unmerged, modified locally and added remotely";else if (statusFlags === "DU") change = "unmerged, deleted locally and modified remotely";else if (statusFlags === "AA") change = "unmerged, added locally and remotely";else if (statusFlags === "UU") change = "unmerged, modified locally and remotely";else if (statusFlag === "M") change = "modfied";else if (statusFlag === "R") change = "renamed";else if (statusFlag === "C") change = "copied";else if (statusFlag === "A") change = "added";else if (statusFlag === "D") change = "deleted";

                    if (change === "renamed" || change === "copied") {
                      fileName = fileName.split("->").last().trim();
                    }

                    fileObject.change = change;
                    fileObject.fileName = fileName;
                    return fileObject;
                  };
                  _context3.t0 = dir;

                  if (_context3.t0) {
                    _context3.next = 7;
                    break;
                  }

                  _context3.next = 6;
                  return defaultDirectory();

                case 6:
                  _context3.t0 = _context3.sent;

                case 7:
                  dir = _context3.t0;
                  commands = [{
                    name: "status",
                    gitCommand: "status --porcelain",
                    transform: function transform(cmd) {
                      return cmd.output;
                    }
                  }];
                  _context3.prev = 9;
                  _context3.next = 12;
                  return __varRecorder__$1.runGitCommands(commands, {
                    cwd: dir
                  });

                case 12:
                  mapping = _context3.sent;
                  lines = mapping && mapping.status.split("\n");
                  fileObjects = (lines || []).flatMap(function (line) {
                    if (!line) return [];
                    var m;
                    var results = [];
                    if (m = line.match(/^(\s[A-Z]|[A-Z]{2})(.*)/)) results.push({
                      status: "unstaged",
                      statusString: m[0]
                    });
                    if (m = line.match(/^[A-Z]{1,2}(.*)/)) results.push({
                      status: "staged",
                      statusString: m[0]
                    });
                    if (m = line.match(/^\s*\?\?(.*)/)) results.push({
                      status: "untracked",
                      statusString: m[0]
                    });
                    return results;
                  }).filter(Boolean);
                  _context3.next = 20;
                  break;

                case 17:
                  _context3.prev = 17;
                  _context3.t1 = _context3["catch"](9);
                  new Error("failed to run git status on " + dir + "\n" + _context3.t1);

                case 20:
                  return _context3.abrupt("return", fileObjects.map(addFilenameAndChange));

                case 21:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, null, [[9, 17]]);
        }));

        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }(), __moduleMeta__$1);

      __varRecorder__$1.fileStatus = fileStatus;

      var applyPatchesFromEditor = __varRecorder__$1["lively.ide/shell/git.js__define__"]("applyPatchesFromEditor", "function", /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(action, diffEditor) {
          var options,
              mode,
              hasSelection,
              patches,
              patchInfo,
              _ref5,
              patch,
              hunk,
              _args4 = arguments;

          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  options = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : {};
                  mode = diffEditor.pluginFind(function (p) {
                    return p.isDiffEditorPlugin;
                  });

                  if (mode) {
                    _context4.next = 4;
                    break;
                  }

                  throw new Error("Editor ".concat(diffEditor, " has no diff mode"));

                case 4:
                  hasSelection = !diffEditor.selection.isEmpty();

                  if (!hasSelection) {
                    patchInfo = mode.getPatchAtCursor(diffEditor);
                    _ref5 = patchInfo || {}, patch = _ref5.patch, hunk = _ref5.hunk;

                    if (hunk) {
                      patch = patch.copy();
                      patch.hunks = [hunk];
                    }

                    patches = patch ? [patch] : null;
                  } else {
                    patches = mode.getPatchesFromSelection(diffEditor);
                    patches[0].createPatchString();
                  }

                  if (patches) {
                    _context4.next = 8;
                    break;
                  }

                  throw new Error("Could not read patches");

                case 8:
                  _context4.next = 10;
                  return __varRecorder__$1.applyPatches(action, patches, options);

                case 10:
                  return _context4.abrupt("return", _context4.sent);

                case 11:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));

        return function (_x4, _x5) {
          return _ref4.apply(this, arguments);
        };
      }(), __moduleMeta__$1);

      __varRecorder__$1.applyPatchesFromEditor = applyPatchesFromEditor;

      var applyPatches = __varRecorder__$1["lively.ide/shell/git.js__define__"]("applyPatches", "function", /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(action, patches) {
          var options,
              args,
              commands,
              results,
              _args5 = arguments;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  options = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : {};
                  console.assert(action === "stage" || action === "unstage" || action === "discard" || action === "apply" || action === "reverseApply", action + " is not expected action");
                  console.assert(patches, "gitApply needs patches");
                  args = [];
                  if (action === "unstage" || action === "discard" || action === "reverseApply") args.push("--reverse");
                  if (action === "stage" || action === "unstage" || action === "discard") args.push("--cached");
                  commands = [{
                    name: "gitApply",
                    options: {
                      stdin: invoke(patches, "createPatchString").join("\n")
                    },
                    command: "git apply " + args.join(" ") + " -"
                  }];

                  if (action === "discard") {
                    commands.push({
                      name: "gitApply",
                      options: {
                        stdin: invoke(patches, "createPatchString").join("\n")
                      },
                      command: "git apply --reverse -"
                    });
                  }

                  _context5.next = 10;
                  return __varRecorder__$1.runGitCommands(commands, options);

                case 10:
                  results = _context5.sent;

                  if (!(results.hasOwnProperty("gitApply") && results.cmdGitApply.exitCode > 0)) {
                    _context5.next = 13;
                    break;
                  }

                  throw new Error("Could not apply patch:\n" + results.cmdGitApply.stderr);

                case 13:
                  return _context5.abrupt("return", {
                    commands: results,
                    patches: patches
                  });

                case 14:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        return function (_x6, _x7) {
          return _ref6.apply(this, arguments);
        };
      }(), __moduleMeta__$1);

      __varRecorder__$1.applyPatches = applyPatches;

      var stageOrUnstageOrDiscardFiles = __varRecorder__$1["lively.ide/shell/git.js__define__"]("stageOrUnstageOrDiscardFiles", "function", /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(action, fileObjects) {
          var options,
              filter,
              cmdGroups,
              commands,
              results,
              _args6 = arguments;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  options = _args6.length > 2 && _args6[2] !== undefined ? _args6[2] : {};
                  console.assert(action === "stage" || action === "unstage" || action === "discard", action + " is not expected action");
                  console.assert(fileObjects, "stageOrUnstage needs file status objects");
                  if (action === "stage") filter = function filter(fo) {
                    return fo.status === "unstaged";
                  };
                  if (action === "unstage") filter = function filter(fo) {
                    return fo.status === "staged";
                  };
                  if (action === "discard") filter = function filter(fo) {
                    return true;
                  };
                  cmdGroups = fileObjects.reduce(function (cmds, fo) {
                    if (!filter(fo)) return cmds;
                    var groups = [];
                    if (action === "unstage" || action === "discard") groups.push(cmds.reset);
                    if (action === "discard") groups.push(cmds.checkout);
                    if ((action === "unstage" || action === "discard") && fo.status === "staged" && fo.change === "added") groups.push(cmds.rmCached);
                    if (action === "stage" && fo.status === "unstaged" && fo.change === "deleted") groups.push(cmds.rm);else if (action === "stage") groups.push(cmds.add);
                    invoke(groups, "push", fo.fileName);
                    return cmds;
                  }, {
                    checkout: [],
                    reset: [],
                    rmCached: [],
                    rm: [],
                    add: []
                  });
                  commands = [];
                  if (cmdGroups.rm.length) commands.push({
                    name: "rm",
                    gitCommand: "rm -- " + cmdGroups.rm.join(" ")
                  });
                  if (cmdGroups.rmCached.length) commands.push({
                    name: "rm",
                    gitCommand: "rm --cached -- " + cmdGroups.rmCached.join(" ")
                  });
                  if (cmdGroups.add.length) commands.push({
                    name: "add",
                    gitCommand: "add -- " + cmdGroups.add.join(" ")
                  });
                  if (cmdGroups.reset.length) commands.push({
                    name: "reset",
                    gitCommand: "reset -- " + cmdGroups.reset.join(" ")
                  });
                  if (cmdGroups.checkout.length) commands.push({
                    name: "checkout",
                    gitCommand: "checkout -- " + cmdGroups.checkout.join(" ")
                  });
                  _context6.next = 15;
                  return __varRecorder__$1.runGitCommands(commands, options);

                case 15:
                  results = _context6.sent;
                  return _context6.abrupt("return", {
                    commands: results,
                    fileObjects: fileObjects
                  });

                case 17:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));

        return function (_x8, _x9) {
          return _ref7.apply(this, arguments);
        };
      }(), __moduleMeta__$1);

      __varRecorder__$1.stageOrUnstageOrDiscardFiles = stageOrUnstageOrDiscardFiles;

      var commit = __varRecorder__$1["lively.ide/shell/git.js__define__"]("commit", "function", /*#__PURE__*/function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(opts) {
          var world, _yield$checkForUserNa, user, email, _yield$doCommit, _yield$doCommit$cmdCo, exitCode, stderr, output, commitCmd, doCommit, _doCommit, checkForUserNameAndEmail, _checkForUserNameAndEmail;

          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  _checkForUserNameAndEmail = function _checkForUserNameAndE2() {
                    _checkForUserNameAndEmail = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(opts) {
                      var user, email, _yield$testForUserAnd, testForUserAndEmail, _testForUserAndEmail, askForGitUserName, _askForGitUserName, askForGitEmail, _askForGitEmail, setUserAndEmail;

                      return regeneratorRuntime.wrap(function _callee11$(_context11) {
                        while (1) {
                          switch (_context11.prev = _context11.next) {
                            case 0:
                              setUserAndEmail = function _setUserAndEmail(user, email, options) {
                                var commands = [{
                                  name: "set username",
                                  gitCommand: "config user.name \"" + user + "\"",
                                  options: options
                                }, {
                                  name: "set email",
                                  gitCommand: "config user.email \"" + email + "\"",
                                  options: options
                                }];
                                return __varRecorder__$1.runGitCommands(commands);
                              };

                              _askForGitEmail = function _askForGitEmail3() {
                                _askForGitEmail = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(next) {
                                  var email;
                                  return regeneratorRuntime.wrap(function _callee10$(_context10) {
                                    while (1) {
                                      switch (_context10.prev = _context10.next) {
                                        case 0:
                                          _context10.next = 2;
                                          return world.prompt("Please also enter your email:", {
                                            input: localStorage.getItem("GitUserEmail") || ""
                                          });

                                        case 2:
                                          email = _context10.sent;

                                          if (!(!email || !email.length)) {
                                            _context10.next = 5;
                                            break;
                                          }

                                          throw new Error("Missing email");

                                        case 5:
                                          localStorage.setItem("GitUserEmail", email);
                                          return _context10.abrupt("return", email);

                                        case 7:
                                        case "end":
                                          return _context10.stop();
                                      }
                                    }
                                  }, _callee10);
                                }));
                                return _askForGitEmail.apply(this, arguments);
                              };

                              askForGitEmail = function _askForGitEmail2(_x16) {
                                return _askForGitEmail.apply(this, arguments);
                              };

                              _askForGitUserName = function _askForGitUserName3() {
                                _askForGitUserName = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                                  var name;
                                  return regeneratorRuntime.wrap(function _callee9$(_context9) {
                                    while (1) {
                                      switch (_context9.prev = _context9.next) {
                                        case 0:
                                          _context9.next = 2;
                                          return world.prompt("Git does not yet know your name. Please enter it here:", {
                                            input: localStorage.getItem("GitUserName") || ""
                                          });

                                        case 2:
                                          name = _context9.sent;

                                          if (!(!name || !name.length)) {
                                            _context9.next = 5;
                                            break;
                                          }

                                          throw new Error("Missing username");

                                        case 5:
                                          localStorage.setItem("GitUserName", name);
                                          return _context9.abrupt("return", name);

                                        case 7:
                                        case "end":
                                          return _context9.stop();
                                      }
                                    }
                                  }, _callee9);
                                }));
                                return _askForGitUserName.apply(this, arguments);
                              };

                              askForGitUserName = function _askForGitUserName2() {
                                return _askForGitUserName.apply(this, arguments);
                              };

                              _testForUserAndEmail = function _testForUserAndEmail3() {
                                _testForUserAndEmail = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(options) {
                                  var commands, mapping, email, user;
                                  return regeneratorRuntime.wrap(function _callee8$(_context8) {
                                    while (1) {
                                      switch (_context8.prev = _context8.next) {
                                        case 0:
                                          commands = [{
                                            name: "get username",
                                            gitCommand: "config --get user.name",
                                            options: options
                                          }, {
                                            name: "get email",
                                            gitCommand: "config --get user.email",
                                            options: options
                                          }];
                                          _context8.next = 3;
                                          return __varRecorder__$1.runGitCommands(commands);

                                        case 3:
                                          mapping = _context8.sent;
                                          email = mapping ? mapping["get email"].trim() : "";
                                          user = mapping ? mapping["get username"].trim() : "";
                                          return _context8.abrupt("return", {
                                            user: user,
                                            email: email
                                          });

                                        case 7:
                                        case "end":
                                          return _context8.stop();
                                      }
                                    }
                                  }, _callee8);
                                }));
                                return _testForUserAndEmail.apply(this, arguments);
                              };

                              testForUserAndEmail = function _testForUserAndEmail2(_x15) {
                                return _testForUserAndEmail.apply(this, arguments);
                              };

                              user = opts.user, email = opts.email;

                              if (!(user && email)) {
                                _context11.next = 10;
                                break;
                              }

                              return _context11.abrupt("return", {
                                user: user,
                                email: email
                              });

                            case 10:
                              if (__varRecorder__$1.isPublicServer) {
                                _context11.next = 16;
                                break;
                              }

                              _context11.next = 13;
                              return testForUserAndEmail(opts);

                            case 13:
                              _yield$testForUserAnd = _context11.sent;
                              user = _yield$testForUserAnd.user;
                              email = _yield$testForUserAnd.email;

                            case 16:
                              if (user) {
                                _context11.next = 20;
                                break;
                              }

                              _context11.next = 19;
                              return askForGitUserName();

                            case 19:
                              user = _context11.sent;

                            case 20:
                              if (email) {
                                _context11.next = 24;
                                break;
                              }

                              _context11.next = 23;
                              return askForGitEmail();

                            case 23:
                              email = _context11.sent;

                            case 24:
                              if (__varRecorder__$1.isPublicServer) {
                                _context11.next = 27;
                                break;
                              }

                              _context11.next = 27;
                              return setUserAndEmail(user, email, opts);

                            case 27:
                              return _context11.abrupt("return", {
                                user: user,
                                email: email
                              });

                            case 28:
                            case "end":
                              return _context11.stop();
                          }
                        }
                      }, _callee11);
                    }));
                    return _checkForUserNameAndEmail.apply(this, arguments);
                  };

                  checkForUserNameAndEmail = function _checkForUserNameAndE(_x14) {
                    return _checkForUserNameAndEmail.apply(this, arguments);
                  };

                  _doCommit = function _doCommit3() {
                    _doCommit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(options, username, email) {
                      var message, commands;
                      return regeneratorRuntime.wrap(function _callee7$(_context7) {
                        while (1) {
                          switch (_context7.prev = _context7.next) {
                            case 0:
                              if (!opts.askForCommitInLively) {
                                _context7.next = 10;
                                break;
                              }

                              _context7.next = 3;
                              return world.prompt("Please enter a commit message:", {
                                textMode: "text",
                                historyId: "lively.git.commit",
                                input: "empty commit message"
                              });

                            case 3:
                              message = _context7.sent;

                              if (message) {
                                _context7.next = 6;
                                break;
                              }

                              throw new Error("No commit message, commit aborted.");

                            case 6:
                              commands = [{
                                name: "commit",
                                gitCommand: commitCmd(message, username, email),
                                options: options
                              }];
                              return _context7.abrupt("return", __varRecorder__$1.runGitCommands(commands));

                            case 10:
                              commands = [{
                                name: "commit",
                                gitCommand: commitCmd(null, username, email),
                                options: options
                              }];
                              return _context7.abrupt("return", __varRecorder__$1.runGitCommands(commands));

                            case 12:
                            case "end":
                              return _context7.stop();
                          }
                        }
                      }, _callee7);
                    }));
                    return _doCommit.apply(this, arguments);
                  };

                  doCommit = function _doCommit2(_x11, _x12, _x13) {
                    return _doCommit.apply(this, arguments);
                  };

                  commitCmd = function _commitCmd(message, author, email) {
                    var cmdString = "commit";

                    if (__varRecorder__$1.isPublicServer) {
                      author = author || "unknown-author";
                      email = email || author + "@" + document.location.hostname;
                      cmdString += format(" --author='%s <%s>'", author, email);
                    }

                    if (message) cmdString += " -m \"" + message.replace(/"/g, "\\\"") + "\"";
                    return cmdString;
                  };

                  opts = Object.assign({
                    askForCommitInLively: false
                  }, opts);
                  world = $world;
                  _context12.next = 9;
                  return checkForUserNameAndEmail(opts);

                case 9:
                  _yield$checkForUserNa = _context12.sent;
                  user = _yield$checkForUserNa.user;
                  email = _yield$checkForUserNa.email;
                  _context12.next = 14;
                  return doCommit(opts, user, email);

                case 14:
                  _yield$doCommit = _context12.sent;
                  _yield$doCommit$cmdCo = _yield$doCommit.cmdCommit;
                  exitCode = _yield$doCommit$cmdCo.exitCode;
                  stderr = _yield$doCommit$cmdCo.stderr;
                  output = _yield$doCommit$cmdCo.output;

                  if (!exitCode) {
                    _context12.next = 21;
                    break;
                  }

                  throw new Error("Commit failed: " + stderr);

                case 21:
                  return _context12.abrupt("return", output);

                case 22:
                case "end":
                  return _context12.stop();
              }
            }
          }, _callee12);
        }));

        return function (_x10) {
          return _ref8.apply(this, arguments);
        };
      }(), __moduleMeta__$1);

      __varRecorder__$1.commit = commit;
      __varRecorder__$1.isPublicServer = false;
      __varRecorder__$1.runGitCommands = runGitCommands;
      __varRecorder__$1.fileStatus = fileStatus;
      __varRecorder__$1.applyPatchesFromEditor = applyPatchesFromEditor;
      __varRecorder__$1.applyPatches = applyPatches;
      __varRecorder__$1.stageOrUnstageOrDiscardFiles = stageOrUnstageOrDiscardFiles;
      __varRecorder__$1.commit = commit;

      var __varRecorder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/diff/editor-plugin.js", __contextModule__);
      var __moduleMeta__ = {
        pathInPackage: function pathInPackage() {
          return "./diff/editor-plugin.js";
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

      var stageOrUnstagedOrDiscardAll = __varRecorder__["lively.ide/diff/editor-plugin.js__define__"]("stageOrUnstagedOrDiscardAll", "function", /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ed, action, options) {
          var mode, files, fos, selectedFos, _yield$git$stageOrUns, commands, fileObjects;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  options = Object.assign({
                    dryRun: false
                  }, options);
                  mode = ed.pluginFind(function (p) {
                    return p.isDiffEditorPlugin;
                  });
                  files = pluck(mode.patches, "fileNameA");
                  _context.next = 5;
                  return fileStatus(options.cwd, options);

                case 5:
                  fos = _context.sent;
                  selectedFos = fos.filter(function (fo) {
                    return files.includes(fo.fileName);
                  });
                  _context.next = 9;
                  return stageOrUnstageOrDiscardFiles(action, selectedFos, options);

                case 9:
                  _yield$git$stageOrUns = _context.sent;
                  commands = _yield$git$stageOrUns.commands;
                  fileObjects = _yield$git$stageOrUns.fileObjects;
                  ed.setStatusMessage(capitalize(action) + "\n" + pluck(fileObjects, "fileName").join("\n"));
                  return _context.abrupt("return", {
                    commands: commands,
                    fileObjects: fileObjects
                  });

                case 14:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x, _x2, _x3) {
          return _ref.apply(this, arguments);
        };
      }(), __moduleMeta__);

      __varRecorder__.stageOrUnstagedOrDiscardAll = stageOrUnstagedOrDiscardAll;

      var patchApplySelection = __varRecorder__["lively.ide/diff/editor-plugin.js__define__"]("patchApplySelection", "function", /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ed, action, options) {
          var _yield$git$applyPatch, commands, patches;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  options = Object.assign({
                    dryRun: false
                  }, options);
                  _context2.next = 3;
                  return applyPatchesFromEditor(action, ed, options);

                case 3:
                  _yield$git$applyPatch = _context2.sent;
                  commands = _yield$git$applyPatch.commands;
                  patches = _yield$git$applyPatch.patches;
                  ed.setStatusMessage(capitalize(action) + "\n" + invoke(patches, "createPatchString").join("\n"));
                  return _context2.abrupt("return", {
                    commands: commands,
                    patches: patches
                  });

                case 8:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x4, _x5, _x6) {
          return _ref2.apply(this, arguments);
        };
      }(), __moduleMeta__);

      __varRecorder__.patchApplySelection = patchApplySelection;

      var DiffEditorPlugin = exports('default', function (superclass) {
        var __lively_classholder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/diff/editor-plugin.js", __contextModule__);

        var __lively_class__ = __lively_classholder__.hasOwnProperty("DiffEditorPlugin") && typeof __lively_classholder__.DiffEditorPlugin === "function" ? __lively_classholder__.DiffEditorPlugin : __lively_classholder__.DiffEditorPlugin = function DiffEditorPlugin(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        if (Object.isFrozen(__lively_classholder__)) {
          return __lively_class__;
        }

        return initializeClass(__lively_class__, superclass, [{
          key: Symbol["for"]("lively-instance-initialize"),
          value: function DiffEditorPlugin_initialize_() {
            var _this;

            _this = initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), Symbol["for"]("lively-instance-initialize"), this).call(this);
            this.tokenizer = new DiffTokenizer();
            this.tokens = [];
            this.patches = [];
            return _this;
          }
        }, {
          key: "isDiffEditorPlugin",
          get: function get() {
            return true;
          }
        }, {
          key: "shortName",
          get: function get() {
            return "diff";
          }
        }, {
          key: "cwd",
          get: function get() {
            var o = this.textMorph.owner;
            var inTerminal = o && o.constructor.name === "Terminal";
            if (inTerminal) return o.cwd;
            return null;
          }
        }, {
          key: "highlight",
          value: function DiffEditorPlugin_highlight_() {
            var textMorph = this.textMorph;
            if (!this.theme || !textMorph || !textMorph.document) return;
            this.tokenize(textMorph.textString);
            textMorph.setTextAttributesWithSortedRanges(this.styledRanges());
          }
        }, {
          key: "tokenize",
          value: function DiffEditorPlugin_tokenize_(string) {
            var tokens = [];
            var patches = [];

            if (string) {
              try {
                __varRecorder__.__inter0__ = this.tokenizer.tokenize(string), tokens = __varRecorder__.__inter0__.tokens, patches = __varRecorder__.__inter0__.patches, __varRecorder__.__inter0__;
              } catch (e) {}
            }

            this.tokens = tokens;
            this.patches = patches;
          }
        }, {
          key: "styledRanges",
          value: function DiffEditorPlugin_styledRanges_() {
            var offsetRow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var indent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var attributes = [];
            var tokens = this.tokens;

            var _iterator = _createForOfIteratorHelper(tokens),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _step$value = _step.value,
                    type = _step$value.type,
                    start = _step$value.start,
                    end = _step$value.end;

                if (offsetRow || indent) {
                  {
                    var _start = start,
                        row = _start.row,
                        column = _start.column;
                    row += offsetRow;
                    start = {
                      row: row,
                      column: column
                    };
                  }
                  {
                    var _end = end,
                        _row = _end.row,
                        _column = _end.column;
                    _row += offsetRow;
                    end = {
                      row: _row,
                      column: _column
                    };
                  }
                }

                if (tokens.type !== "default" && this.theme[type]) {
                  attributes.push({
                    start: start,
                    end: end
                  }, this.theme[type]);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return attributes;
          }
        }, {
          key: "getCommands",
          value: function DiffEditorPlugin_getCommands_(other) {
            return other.concat(__varRecorder__.commands);
          }
        }, {
          key: "getKeyBindings",
          value: function DiffEditorPlugin_getKeyBindings_(other) {
            return other.concat([{
              command: "[patch] open file at cursor",
              keys: "Alt-O"
            }, {
              command: "[patch] show selected patch",
              keys: "Alt-P"
            }, {
              command: "[git] stage selection",
              keys: "Alt-S"
            }, {
              command: "[git] stage all",
              keys: "Alt-Shift-S"
            }, {
              command: "[git] unstage selection",
              keys: "Alt-U"
            }, {
              command: "[git] unstage all",
              keys: "Alt-Shift-U"
            }, {
              command: "[git] discard selection",
              keys: "Alt-K"
            }, {
              command: "[git] discard all",
              keys: "Alt-Shift-K"
            }, {
              command: "[git] apply selection",
              keys: "Alt-A"
            }, {
              command: "[git] reverse apply selection",
              keys: "Alt-R"
            }, {
              command: "[git] commit",
              keys: "Alt-C"
            }, {
              command: "[git] update",
              keys: "Alt-G"
            }]);
          }
        }, {
          key: "tokenAt",
          value: function DiffEditorPlugin_tokenAt_(pos) {
            return this.tokens.find(function (_ref3) {
              var start = _ref3.start,
                  end = _ref3.end;
              return lessEqPosition(start, pos) && lessEqPosition(pos, end);
            });
          }
        }, {
          key: "getNavigator",
          value: function DiffEditorPlugin_getNavigator_() {
            return new DiffNavigator();
          }
        }, {
          key: "getPatchesFromSelection",
          value: function DiffEditorPlugin_getPatchesFromSelection_(editor) {
            var patches = this.patches;
            if (!patches || !patches.length) return [];
            var nav = this.getNavigator();
            var range = editor.selection.range;
            var startPatch = nav.findPatchAt(editor, range.start);
            var endPatch = nav.findPatchAt(editor, range.end);
            var from = patches.indexOf(startPatch);
            var to = endPatch ? patches.indexOf(endPatch) : patches.length;
            var startLine = range.start.row;
            var endLine = range.end.row;
            var offset = startPatch ? startPatch.tokens[0].start.row : 0;
            return patches.slice(from, to + 1).map(function (ea, i) {
              var patchString = ea.createPatchStringFromRows(startLine - offset, endLine - offset);
              offset += ea.length();
              return patchString ? FilePatch.read(patchString) : null;
            }).filter(Boolean);
          }
        }, {
          key: "getPatchAtCursor",
          value: function DiffEditorPlugin_getPatchAtCursor_(editor) {
            var pos = editor.cursorPosition;
            var tok = this.tokenAt(pos);
            if (!tok || !tok.hasOwnProperty("patch")) return null;
            var patch = this.patches[tok.patch];
            var hunk = tok.hasOwnProperty("hunk") ? patch.hunks[tok.hunk] : null;
            return {
              patch: patch,
              hunk: hunk,
              cursorOffsetInHunk: hunk ? pos.row - hunk.tokens[0].start.row : 0
            };
          }
        }, {
          key: "getMenuItems",
          value: function DiffEditorPlugin_getMenuItems_(items) {
            var target = this.textMorph;
            var hasSelection = !target.selection.isEmpty();
            items.push.apply(items, [{
              isDivider: true
            }, {
              target: target,
              command: "[patch] open file at cursor"
            }, {
              target: target,
              command: "[patch] show selected patch"
            }, {
              target: target,
              command: "[git] apply selection"
            }, {
              target: target,
              command: "[git] reverse apply selection"
            }, {
              target: target,
              command: "[git] stage " + (hasSelection ? "selection" : "all")
            }, {
              target: target,
              command: "[git] unstage " + (hasSelection ? "selection" : "all")
            }, {
              target: target,
              command: "[git] discard " + (hasSelection ? "selection" : "all")
            }, {
              target: target,
              command: "[git] update"
            }, {
              target: target,
              command: "[git] commit"
            }]);
            return items;
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "DiffEditorPlugin";
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./diff/editor-plugin.js";
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
          start: 528,
          end: 5116
        });
      }({
        referencedAs: "EditorPlugin",
        value: EditorPlugin
      }));
      __varRecorder__.commands = [{
        name: "[patch] show selected patch",
        exec: function exec(ed) {
          var mode = ed.pluginFind(function (p) {
            return p.isDiffEditorPlugin;
          });
          var hasSelection = !ed.selection.isEmpty();
          var patches;

          if (!hasSelection) {
            var patchInfo = mode.getPatchAtCursor(ed);
            patches = patchInfo.patch ? [patchInfo.patch] : null;
          } else {
            patches = mode.getPatchesFromSelection(ed);
          }

          if (!patches || !patches.length) {
            ed.setStatusMessage("Cannot read patch");
          } else {
            var patchString = invoke(patches, "createPatchString").join("\n");
          }

          ed.world().execCommand("open text window", Object.assign({
            lineWrapping: "no-wrap",
            plugins: [new __varRecorder__.DiffEditorPlugin()]
          }, config.codeEditor.defaultStyle, {
            title: "patches for " + pluck(patches, "fileNameA").join(", "),
            content: patchString,
            extent: pt(700, 400)
          }));
          return true;
        }
      }, {
        name: "[patch] open file at cursor",
        exec: function () {
          var _exec = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(ed) {
            var mode, patchInfo, lineNo, filePath, baseDir;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    mode = ed.pluginFind(function (p) {
                      return p.isDiffEditorPlugin;
                    });
                    patchInfo = mode.getPatchAtCursor(ed);

                    if (!(!patchInfo || !patchInfo.hunk)) {
                      _context3.next = 5;
                      break;
                    }

                    ed.setStatusMessage("Cannot read patch");
                    return _context3.abrupt("return", true);

                  case 5:
                    lineNo = patchInfo.hunk.relativeOffsetToFileLine(patchInfo.cursorOffsetInHunk);
                    filePath = patchInfo.hunk.fileNameB;

                    if (filePath.match(/^(\/|[a-z]:\\)/i)) {
                      _context3.next = 15;
                      break;
                    }

                    _context3.t0 = mode.cwd;

                    if (_context3.t0) {
                      _context3.next = 13;
                      break;
                    }

                    _context3.next = 12;
                    return ed.world().prompt("Enter base directory for file", {
                      historyId: "lively.morphic-ide/diff-directory-for-file",
                      useLastInput: true,
                      input: document.location.origin
                    });

                  case 12:
                    _context3.t0 = _context3.sent;

                  case 13:
                    baseDir = _context3.t0;

                    if (baseDir) {
                      filePath = joinPath(baseDir, filePath);
                    }

                  case 15:
                    if (lineNo) filePath += ":" + lineNo;
                    return _context3.abrupt("return", ed.world().execCommand("open file", {
                      url: filePath
                    }));

                  case 17:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));

          function exec(_x7) {
            return _exec.apply(this, arguments);
          }

          return exec;
        }()
      }, {
        name: "[git] commit",
        exec: function () {
          var _exec2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(ed, args) {
            var mode;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    mode = ed.pluginFind(function (p) {
                      return p.isDiffEditorPlugin;
                    });
                    _context4.prev = 1;
                    _context4.next = 4;
                    return commit({
                      cwd: mode.cwd
                    });

                  case 4:
                    ed.setStatusMessage("Commit successful");
                    _context4.next = 10;
                    break;

                  case 7:
                    _context4.prev = 7;
                    _context4.t0 = _context4["catch"](1);
                    ed.showError(_context4.t0);

                  case 10:
                    return _context4.abrupt("return", true);

                  case 11:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, null, [[1, 7]]);
          }));

          function exec(_x8, _x9) {
            return _exec2.apply(this, arguments);
          }

          return exec;
        }()
      }, {
        name: "[git] update",
        exec: function () {
          var _exec3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(ed, args) {
            var input, mode, cmd;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return ed.world().prompt("git diff command", {
                      useLastInput: true,
                      input: "git diff",
                      historyId: "codeeditor.modes.Diff.git-update"
                    });

                  case 2:
                    input = _context5.sent;

                    if (input) {
                      _context5.next = 6;
                      break;
                    }

                    ed.setStatusMessage("command canceled");
                    return _context5.abrupt("return", true);

                  case 6:
                    mode = ed.pluginFind(function (p) {
                      return p.isDiffEditorPlugin;
                    });
                    _context5.next = 9;
                    return runCommand(input, {
                      cwd: mode.cwd
                    });

                  case 9:
                    cmd = _context5.sent;
                    _context5.next = 12;
                    return cmd.whenDone();

                  case 12:
                    ed.saveExcursion(function () {
                      return ed.textString = cmd.stdout;
                    });
                    return _context5.abrupt("return", true);

                  case 14:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5);
          }));

          function exec(_x10, _x11) {
            return _exec3.apply(this, arguments);
          }

          return exec;
        }()
      }, {
        name: "[git] stage selection",
        exec: function () {
          var _exec4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(ed, args) {
            var mode;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    mode = ed.pluginFind(function (p) {
                      return p.isDiffEditorPlugin;
                    });
                    _context6.next = 3;
                    return __varRecorder__.patchApplySelection(ed, "stage", Object.assign({
                      cwd: mode.cwd
                    }, args));

                  case 3:
                    return _context6.abrupt("return", _context6.sent);

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6);
          }));

          function exec(_x12, _x13) {
            return _exec4.apply(this, arguments);
          }

          return exec;
        }()
      }, {
        name: "[git] unstage selection",
        exec: function () {
          var _exec5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(ed, args) {
            var mode;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    mode = ed.pluginFind(function (p) {
                      return p.isDiffEditorPlugin;
                    });
                    _context7.next = 3;
                    return __varRecorder__.patchApplySelection(ed, "unstage", Object.assign({
                      cwd: mode.cwd
                    }, args));

                  case 3:
                    return _context7.abrupt("return", _context7.sent);

                  case 4:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7);
          }));

          function exec(_x14, _x15) {
            return _exec5.apply(this, arguments);
          }

          return exec;
        }()
      }, {
        name: "[git] discard selection",
        exec: function () {
          var _exec6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(ed, args) {
            var mode;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    mode = ed.pluginFind(function (p) {
                      return p.isDiffEditorPlugin;
                    });
                    _context8.next = 3;
                    return __varRecorder__.patchApplySelection(ed, "discard", Object.assign({
                      cwd: mode.cwd
                    }, args));

                  case 3:
                    return _context8.abrupt("return", _context8.sent);

                  case 4:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8);
          }));

          function exec(_x16, _x17) {
            return _exec6.apply(this, arguments);
          }

          return exec;
        }()
      }, {
        name: "[git] reverse apply selection",
        exec: function () {
          var _exec7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(ed, args) {
            var mode;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    mode = ed.pluginFind(function (p) {
                      return p.isDiffEditorPlugin;
                    });
                    _context9.next = 3;
                    return __varRecorder__.patchApplySelection(ed, "reverseApply", Object.assign({
                      cwd: mode.cwd
                    }, args));

                  case 3:
                    return _context9.abrupt("return", _context9.sent);

                  case 4:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9);
          }));

          function exec(_x18, _x19) {
            return _exec7.apply(this, arguments);
          }

          return exec;
        }()
      }, {
        name: "[git] apply selection",
        exec: function () {
          var _exec8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(ed, args) {
            var mode;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    mode = ed.pluginFind(function (p) {
                      return p.isDiffEditorPlugin;
                    });
                    _context10.next = 3;
                    return __varRecorder__.patchApplySelection(ed, "apply", Object.assign({
                      cwd: mode.cwd
                    }, args));

                  case 3:
                    return _context10.abrupt("return", _context10.sent);

                  case 4:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10);
          }));

          function exec(_x20, _x21) {
            return _exec8.apply(this, arguments);
          }

          return exec;
        }()
      }, {
        name: "[git] stage all",
        exec: function () {
          var _exec9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(ed, args) {
            var mode;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    mode = ed.pluginFind(function (p) {
                      return p.isDiffEditorPlugin;
                    });
                    _context11.next = 3;
                    return __varRecorder__.stageOrUnstagedOrDiscardAll(ed, "stage", Object.assign({
                      cwd: mode.cwd
                    }, args));

                  case 3:
                    return _context11.abrupt("return", _context11.sent);

                  case 4:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11);
          }));

          function exec(_x22, _x23) {
            return _exec9.apply(this, arguments);
          }

          return exec;
        }()
      }, {
        name: "[git] unstage all",
        exec: function () {
          var _exec10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(ed, args) {
            var mode;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    mode = ed.pluginFind(function (p) {
                      return p.isDiffEditorPlugin;
                    });
                    _context12.next = 3;
                    return __varRecorder__.stageOrUnstagedOrDiscardAll(ed, "unstage", Object.assign({
                      cwd: mode.cwd
                    }, args));

                  case 3:
                    return _context12.abrupt("return", _context12.sent);

                  case 4:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12);
          }));

          function exec(_x24, _x25) {
            return _exec10.apply(this, arguments);
          }

          return exec;
        }()
      }, {
        name: "[git] discard all",
        exec: function () {
          var _exec11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(ed, args) {
            var mode;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    mode = ed.pluginFind(function (p) {
                      return p.isDiffEditorPlugin;
                    });
                    _context13.next = 3;
                    return __varRecorder__.stageOrUnstagedOrDiscardAll(ed, "discard", Object.assign({
                      cwd: mode.cwd
                    }, args));

                  case 3:
                    return _context13.abrupt("return", _context13.sent);

                  case 4:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13);
          }));

          function exec(_x26, _x27) {
            return _exec11.apply(this, arguments);
          }

          return exec;
        }()
      }];
      __varRecorder__["default"] = DiffEditorPlugin;

    })
  };
}));
