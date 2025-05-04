System.register(['./__rootModule___commonjs-entry-039abf1b.js'], (function (exports) {
  var __contextModule__ = typeof module !== 'undefined' ? module : arguments[1];
;
  var last, initializeClass;
  return {
    setters: [function (module) {
      last = module.q;
      initializeClass = module.i;
    }],
    execute: (function () {

      var __varRecorder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/editor-modes.js", __contextModule__);
      var __moduleMeta__ = {
        pathInPackage: function pathInPackage() {
          return "./editor-modes.js";
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

      var copyState = exports('copyState', __varRecorder__["lively.ide/editor-modes.js__define__"]("copyState", "function", function (mode, state) {
        if (state === true) return state;
        if (mode.copyState) return mode.copyState(state);
        var nstate = {};

        for (var n in state) {
          var val = state[n];
          if (val instanceof Array) val = val.concat([]);
          nstate[n] = val;
        }

        return nstate;
      }, __moduleMeta__));

      __varRecorder__.copyState = copyState;

      var startState = exports('startState', __varRecorder__["lively.ide/editor-modes.js__define__"]("startState", "function", function (mode, a1, a2) {
        return mode.startState ? mode.startState(a1, a2) : true;
      }, __moduleMeta__));

      __varRecorder__.startState = startState;

      var defineMode = exports('defineMode', __varRecorder__["lively.ide/editor-modes.js__define__"]("defineMode", "function", function (name, setupFn) {
        return __varRecorder__.modes[name] = setupFn;
      }, __moduleMeta__));

      __varRecorder__.defineMode = defineMode;

      var resolveMode = exports('resolveMode', __varRecorder__["lively.ide/editor-modes.js__define__"]("resolveMode", "function", function (spec) {
        if (typeof spec === "string" && __varRecorder__.mimeModes.hasOwnProperty(spec)) {
          spec = __varRecorder__.mimeModes[spec];
        } else if (spec && typeof spec.name === "string" && __varRecorder__.mimeModes.hasOwnProperty(spec.name)) {
          var found = __varRecorder__.mimeModes[spec.name];
          if (typeof found === "string") found = {
            name: found
          };
          spec = Object.assign({}, found, spec);
          spec.name = found.name;
        } else if (typeof spec === "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(spec)) {
          return resolveMode("application/xml");
        } else if (typeof spec === "string" && /^[\w\-]+\/[\w\-]+\+json$/.test(spec)) {
          return resolveMode("application/json");
        }

        if (typeof spec === "string") return {
          name: spec
        };else return spec || {
          name: "null"
        };
      }, __moduleMeta__));

      __varRecorder__.resolveMode = resolveMode;

      var getMode = exports('getMode', __varRecorder__["lively.ide/editor-modes.js__define__"]("getMode", "function", function (editorConfig, spec) {
        spec = __varRecorder__.resolveMode(spec);
        if (typeof spec === "string") spec = {
          name: spec
        };

        if (!spec.name) {
          throw new Error("parserConfig does not have a name of the mode to get");
        }

        var mode = __varRecorder__.modes[spec.name];

        if (!mode) {
          return getMode(editorConfig, "text/plain");
        }

        editorConfig = Object.assign({
          indentUnit: 2
        }, editorConfig);
        return Object.assign(mode(editorConfig, spec), {
          name: spec.name
        });
      }, __moduleMeta__));

      __varRecorder__.getMode = getMode;

      var innerMode = exports('innerMode', __varRecorder__["lively.ide/editor-modes.js__define__"]("innerMode", "function", function (mode, state) {
        var info;

        while (mode.innerMode) {
          info = mode.innerMode(state);
          if (!info || info.mode == mode) break;
          state = info.state;
          mode = info.mode;
        }

        return info || {
          mode: mode,
          state: state
        };
      }, __moduleMeta__));

      __varRecorder__.innerMode = innerMode;

      var defineMIME = exports('defineMIME', __varRecorder__["lively.ide/editor-modes.js__define__"]("defineMIME", "function", function (mime, spec) {
        __varRecorder__.mimeModes[mime] = spec;
      }, __moduleMeta__));

      __varRecorder__.defineMIME = defineMIME;

      var registerHelper = exports('registerHelper', __varRecorder__["lively.ide/editor-modes.js__define__"]("registerHelper", "function", function (method, mode, re) {}, __moduleMeta__));

      __varRecorder__.registerHelper = registerHelper;

      var indentLines = exports('indentLines', __varRecorder__["lively.ide/editor-modes.js__define__"]("indentLines", "function", function (textMorph, mode, fromRow, toRow, how, aggressive, options) {
        var validBeforePos = textMorph.editorPlugin._tokenizerValidBefore;
        if (validBeforePos && validBeforePos.row >= fromRow) validBeforePos.row = fromRow - 1;

        var _varRecorder__$lines = __varRecorder__.linesToTokenize(textMorph.document, fromRow, toRow, validBeforePos),
            lines = _varRecorder__$lines.lines,
            _startState = _varRecorder__$lines.state;

        if (!lines.length) return false;
        var state = !_startState ? __varRecorder__.startState(mode) : __varRecorder__.copyState(mode, _startState);

        for (var i = 0; i < lines.length; i++) {
          var line = lines[i];
          var row = line.row;

          if (row >= fromRow && row <= toRow) {
            __varRecorder__.indentLine(textMorph, mode, line, state, how, aggressive, options);
          }

          state = __varRecorder__.tokenizeLine(mode, lines[i], state, function () {});
        }

        return true;
      }, __moduleMeta__));

      __varRecorder__.indentLines = indentLines;

      var indentLine = __varRecorder__["lively.ide/editor-modes.js__define__"]("indentLine", "function", function (textMorph, mode, line, stateBefore, how, aggressive, options) {
        textMorph.document;
        options = Object.assign({
          indentWithTabs: !textMorph.useSoftTabs,
          indentUnit: textMorph.tabWidth,
          tabSize: 4,
          ignoreFollowingText: false
        }, options);
        if (how == null) how = "add";

        if (how == "smart") {
          if (!mode.indent) how = "prev";
        }

        var tabSize = options.tabSize;
        var lineText = line.text;

        var curSpace = __varRecorder__.countColumn(lineText, null, tabSize);

        if (line.modeState) line.modeState = null;
        var curSpaceString = lineText.match(/^\s*/)[0];
        var indentation;

        if (!aggressive && !/\S/.test(lineText)) {
          indentation = 0;
          how = "not";
        } else if (how == "smart") {
          indentation = mode.indent(stateBefore, options.ignoreFollowingText ? "" : lineText.slice(curSpaceString.length), lineText);

          if (indentation == __varRecorder__.passIndent || indentation > 150) {
            if (!aggressive) return;
            how = "prev";
          }
        }

        if (how == "prev") {
          if (line.row > 0) indentation = __varRecorder__.countColumn(line.prevLine().text, null, tabSize);else indentation = 0;
        } else if (how == "add") {
          indentation = curSpace + options.indentUnit;
        } else if (how == "subtract") {
          indentation = curSpace - options.indentUnit;
        } else if (typeof how === "number") {
          indentation = curSpace + how;
        }

        indentation = Math.max(0, indentation);
        var indentString = "";
        var pos = 0;

        if (options.indentWithTabs) {
          for (var i = Math.floor(indentation / tabSize); i; --i) {
            pos += tabSize;
            indentString += "\t";
          }
        }

        if (pos < indentation) indentString += " ".repeat(indentation - pos);

        if (indentString != curSpaceString) {
          textMorph.replace({
            start: {
              row: line.row,
              column: 0
            },
            end: {
              row: line.row,
              column: curSpaceString.length
            }
          }, indentString);
          return true;
        }
      }, __moduleMeta__);

      __varRecorder__.indentLine = indentLine;

      var tokenizeLines = __varRecorder__["lively.ide/editor-modes.js__define__"]("tokenizeLines", "function", function (mode, lines, _startState, newLineFn, recordFn) {
        if (!lines.length) return;
        var state = !_startState ? __varRecorder__.startState(mode) : __varRecorder__.copyState(mode, _startState);

        for (var i = 0; i < lines.length; i++) {
          var line = lines[i];
          newLineFn(line);
          state = __varRecorder__.tokenizeLine(mode, line, state, recordFn);
        }
      }, __moduleMeta__);

      __varRecorder__.tokenizeLines = tokenizeLines;

      var tokenizeLine = __varRecorder__["lively.ide/editor-modes.js__define__"]("tokenizeLine", "function", function (mode, line, state, recordFn) {
        var text = line.text;
        var stream = new __varRecorder__.StringStream(text, 2);
        state = line.modeState = typeof mode.copyState === "function" ? mode.copyState(state) : __varRecorder__.copyState(mode, state);
        line.prevLine();
        state._string = text;

        if (text === "" && mode.blankLine) {
          mode.blankLine(state);
          return state;
        }

        while (!stream.eol()) {
          var name = mode.token(stream, state);
          recordFn(name, state, stream.start, stream.pos, stream, line, mode);
          stream.start = stream.pos;
        }

        return state;
      }, __moduleMeta__);

      __varRecorder__.tokenizeLine = tokenizeLine;

      var printTokens = __varRecorder__["lively.ide/editor-modes.js__define__"]("printTokens", "function", function (tokens) {
        var report = "";

        for (var i = 0; i < tokens.length; i += 5) {
          var from = tokens[i + 0];
          var to = tokens[i + 1];
          var token = tokens[i + 2];
          var content = tokens[i + 3];
          var mode = tokens[i + 4];
          report += "".concat(from, " => ").concat(to, " ").concat(token, " ").concat(content, " ").concat(mode.name, "\n");
        }

        return report;
      }, __moduleMeta__);

      __varRecorder__.printTokens = printTokens;

      var visitDocumentTokens = exports('visitDocumentTokens', __varRecorder__["lively.ide/editor-modes.js__define__"]("visitDocumentTokens", "function", function (mode, document, fromRow, toRow, validBeforePos, newLineFn, recordFn) {
        var _varRecorder__$lines2 = __varRecorder__.linesToTokenize(document, fromRow, toRow, validBeforePos),
            lines = _varRecorder__$lines2.lines,
            state = _varRecorder__$lines2.state;

        __varRecorder__.tokenizeLines(mode, lines, state, newLineFn, recordFn);

        return lines;
      }, __moduleMeta__));

      __varRecorder__.visitDocumentTokens = visitDocumentTokens;

      var tokenizeDocument = exports('tokenizeDocument', __varRecorder__["lively.ide/editor-modes.js__define__"]("tokenizeDocument", "function", function (mode, document, fromRow, toRow, validBeforePos) {
        var tokens = [];
        var current;
        var lines;

        var newLineFn = function newLineFn(line) {
          return tokens.push(current = []);
        };

        var recordFn = function recordFn(name, state, from, to, stream, line, mode) {
          return current.push(from, to, name, stream.current(), state.localMode || mode);
        };

        try {
          lines = __varRecorder__.visitDocumentTokens(mode, document, fromRow, toRow, validBeforePos, newLineFn, recordFn);
        } catch (err) {
          tokens.length = 0;
          lines = __varRecorder__.visitDocumentTokens(mode, document, fromRow, toRow, null, newLineFn, recordFn);
        }

        return {
          tokens: tokens,
          lines: lines
        };
      }, __moduleMeta__));

      __varRecorder__.tokenizeDocument = tokenizeDocument;

      var linesToTokenize = __varRecorder__["lively.ide/editor-modes.js__define__"]("linesToTokenize", "function", function (document, fromRow, toRow, validBeforePos) {
        if (validBeforePos && validBeforePos.row >= toRow) return {
          lines: [],
          state: null
        };
        var startRow = validBeforePos ? Math.max(0, validBeforePos.row - 1) : fromRow;
        var line = document.getLine(startRow);
        var lineText = line.text;
        var lines = [line];
        var startState = null;
        var linesBefore = 0;
        var nextLine;

        while ((nextLine = line.prevLine()) && linesBefore++ < 50) {
          line = nextLine;

          if (line.modeState) {
            startState = line.modeState;
            break;
          }

          lines.unshift(line);
        }

        if (!startState) {
          var lineWithMinIndent = line;
          var minIndent = Infinity;

          while ((nextLine = line.prevLine()) && linesBefore++ < 100) {
            line = nextLine;

            if (line.modeState) {
              startState = line.modeState;
              break;
            }

            lines.unshift(line);
            var indent = lineText.match(/^\s*/)[0].length;
            if (indent === 0) break;

            if (indent < minIndent) {
              minIndent = indent;
              lineWithMinIndent = line;
            }
          }

          if (!startState && minIndent > 0) {
            lines = lines.slice(lines.indexOf(lineWithMinIndent));
            line = lines[0];
          }
        }

        if (toRow > startRow) {
          var lastLine = last(lines);

          for (var row = startRow; row <= toRow; row++) {
            lastLine = lastLine.nextLine();
            if (!lastLine) break;
            lines.push(lastLine);
          }
        }

        return {
          lines: lines,
          state: startState
        };
      }, __moduleMeta__);

      __varRecorder__.linesToTokenize = linesToTokenize;

      var countColumn = exports('countColumn', __varRecorder__["lively.ide/editor-modes.js__define__"]("countColumn", "function", function (string, end, tabSize, startIndex, startValue) {
        if (end == null) {
          end = string.search(/[^\s\u00a0]/);
          if (end == -1) end = string.length;
        }

        for (var i = startIndex || 0, n = startValue || 0;;) {
          var nextTab = string.indexOf("\t", i);

          if (nextTab < 0 || nextTab >= end) {
            return n + (end - i);
          }

          n += nextTab - i;
          n += tabSize - n % tabSize;
          i = nextTab + 1;
        }
      }, __moduleMeta__));

      __varRecorder__.countColumn = countColumn;

      var findModeByMIME = exports('findModeByMIME', __varRecorder__["lively.ide/editor-modes.js__define__"]("findModeByMIME", "function", function (mime) {
        mime = mime.toLowerCase();

        for (var i = 0; i < __varRecorder__.modeInfo.length; i++) {
          var info = __varRecorder__.modeInfo[i];
          if (info.mime == mime) return info;

          if (info.mimes) {
            for (var j = 0; j < info.mimes.length; j++) {
              if (info.mimes[j] == mime) return info;
            }
          }
        }

        if (/\+xml$/.test(mime)) return findModeByMIME("application/xml");
        if (/\+json$/.test(mime)) return findModeByMIME("application/json");
      }, __moduleMeta__));

      __varRecorder__.findModeByMIME = findModeByMIME;

      var findModeByExtension = exports('findModeByExtension', __varRecorder__["lively.ide/editor-modes.js__define__"]("findModeByExtension", "function", function (ext) {
        for (var i = 0; i < __varRecorder__.modeInfo.length; i++) {
          var info = __varRecorder__.modeInfo[i];

          if (info.ext) {
            for (var j = 0; j < info.ext.length; j++) {
              if (info.ext[j] == ext) return info;
            }
          }
        }
      }, __moduleMeta__));

      __varRecorder__.findModeByExtension = findModeByExtension;

      var findModeByFileName = exports('findModeByFileName', __varRecorder__["lively.ide/editor-modes.js__define__"]("findModeByFileName", "function", function (filename) {
        for (var i = 0; i < __varRecorder__.modeInfo.length; i++) {
          var info = __varRecorder__.modeInfo[i];
          if (info.file && info.file.test(filename)) return info;
        }

        var dot = filename.lastIndexOf(".");
        var ext = dot > -1 && filename.substring(dot + 1, filename.length);
        if (ext) return __varRecorder__.findModeByExtension(ext);
      }, __moduleMeta__));

      __varRecorder__.findModeByFileName = findModeByFileName;

      var findModeByName = exports('findModeByName', __varRecorder__["lively.ide/editor-modes.js__define__"]("findModeByName", "function", function (name) {
        name = name.toLowerCase();

        for (var i = 0; i < __varRecorder__.modeInfo.length; i++) {
          var info = __varRecorder__.modeInfo[i];
          if (info.name.toLowerCase() == name) return info;

          if (info.alias) {
            for (var j = 0; j < info.alias.length; j++) {
              if (info.alias[j].toLowerCase() == name) return info;
            }
          }
        }
      }, __moduleMeta__));

      __varRecorder__.findModeByName = findModeByName;
      __varRecorder__.modes = __varRecorder__.modes || {};
      var modes = exports('modes', __varRecorder__.modes);
      __varRecorder__.modes = modes;
      __varRecorder__.passIndent = {};
      var passIndent = exports('passIndent', __varRecorder__.passIndent);
      __varRecorder__.passIndent = passIndent;
      __varRecorder__.copyState = copyState;
      __varRecorder__.startState = startState;
      __varRecorder__.defineMode = defineMode;
      __varRecorder__.resolveMode = resolveMode;
      __varRecorder__.getMode = getMode;
      __varRecorder__.innerMode = innerMode;
      __varRecorder__.mimeModes = {};
      var mimeModes = exports('mimeModes', __varRecorder__.mimeModes);
      __varRecorder__.mimeModes = mimeModes;
      __varRecorder__.defineMIME = defineMIME;
      __varRecorder__.registerHelper = registerHelper;
      __varRecorder__.indentLines = indentLines;
      __varRecorder__.visitDocumentTokens = visitDocumentTokens;
      __varRecorder__.tokenizeDocument = tokenizeDocument;
      __varRecorder__.countColumn = countColumn;

      (function (superclass) {
        var __lively_classholder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.ide/editor-modes.js", __contextModule__);

        var __lively_class__ = __lively_classholder__.hasOwnProperty("StringStream") && typeof __lively_classholder__.StringStream === "function" ? __lively_classholder__.StringStream : __lively_classholder__.StringStream = function StringStream(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        if (Object.isFrozen(__lively_classholder__)) {
          return __lively_class__;
        }

        return initializeClass(__lively_class__, superclass, [{
          key: Symbol["for"]("lively-instance-initialize"),
          value: function StringStream_initialize_(string, tabSize) {
            this.reset(string, tabSize);
          }
        }, {
          key: "reset",
          value: function StringStream_reset_() {
            var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            var tabSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
            this.pos = this.start = 0;
            this.string = string;
            this.tabSize = tabSize;
            this.lastColumnPos = this.lastColumnValue = 0;
            this.lineStart = 0;
          }
        }, {
          key: "eol",
          value: function StringStream_eol_() {
            return this.pos >= this.string.length;
          }
        }, {
          key: "sol",
          value: function StringStream_sol_() {
            return this.pos == this.lineStart;
          }
        }, {
          key: "peek",
          value: function StringStream_peek_() {
            return this.string.charAt(this.pos) || undefined;
          }
        }, {
          key: "next",
          value: function StringStream_next_() {
            if (this.pos < this.string.length) {
              return this.string.charAt(this.pos++);
            }
          }
        }, {
          key: "eat",
          value: function StringStream_eat_(match) {
            var ch = this.string.charAt(this.pos);
            var ok;
            if (typeof match === "string") ok = ch == match;else ok = ch && (match.test ? match.test(ch) : match(ch));

            if (ok) {
              ++this.pos;
              return ch;
            }
          }
        }, {
          key: "eatWhile",
          value: function StringStream_eatWhile_(match) {
            var start = this.pos;

            while (this.eat(match)) {}

            return this.pos > start;
          }
        }, {
          key: "eatSpace",
          value: function StringStream_eatSpace_() {
            var start = this.pos;

            while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) {
              ++this.pos;
            }

            return this.pos > start;
          }
        }, {
          key: "skipToEnd",
          value: function StringStream_skipToEnd_() {
            this.pos = this.string.length;
          }
        }, {
          key: "skipTo",
          value: function StringStream_skipTo_(ch) {
            var found = this.string.indexOf(ch, this.pos);

            if (found > -1) {
              this.pos = found;
              return true;
            }
          }
        }, {
          key: "backUp",
          value: function StringStream_backUp_(n) {
            this.pos -= n;
          }
        }, {
          key: "column",
          value: function StringStream_column_() {
            if (this.lastColumnPos < this.start) {
              this.lastColumnValue = __varRecorder__.countColumn(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue);
              this.lastColumnPos = this.start;
            }

            return this.lastColumnValue - (this.lineStart ? __varRecorder__.countColumn(this.string, this.lineStart, this.tabSize) : 0);
          }
        }, {
          key: "indentation",
          value: function StringStream_indentation_() {
            return __varRecorder__.countColumn(this.string, null, this.tabSize) - (this.lineStart ? __varRecorder__.countColumn(this.string, this.lineStart, this.tabSize) : 0);
          }
        }, {
          key: "match",
          value: function StringStream_match_(pattern, consume, caseInsensitive) {
            if (typeof pattern === "string") {
              var cased = function cased(str) {
                return caseInsensitive ? str.toLowerCase() : str;
              };

              var substr = this.string.substr(this.pos, pattern.length);

              if (cased(substr) == cased(pattern)) {
                if (consume !== false) this.pos += pattern.length;
                return true;
              }
            } else {
              var match = this.string.slice(this.pos).match(pattern);
              if (match && match.index > 0) return null;
              if (match && consume !== false) this.pos += match[0].length;
              return match;
            }
          }
        }, {
          key: "current",
          value: function StringStream_current_() {
            return this.string.slice(this.start, this.pos);
          }
        }, {
          key: "hideFirstChars",
          value: function StringStream_hideFirstChars_(n, inner) {
            this.lineStart += n;

            try {
              return inner();
            } finally {
              this.lineStart -= n;
            }
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "StringStream";
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./editor-modes.js";
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
          start: 10587,
          end: 13114
        });
      })(undefined);

      __varRecorder__.modeInfo = [{
        name: "APL",
        mime: "text/apl",
        mode: "apl",
        ext: ["dyalog", "apl"]
      }, {
        name: "PGP",
        mimes: ["application/pgp", "application/pgp-keys", "application/pgp-signature"],
        mode: "asciiarmor",
        ext: ["pgp"]
      }, {
        name: "ASN.1",
        mime: "text/x-ttcn-asn",
        mode: "asn.1",
        ext: ["asn", "asn1"]
      }, {
        name: "Asterisk",
        mime: "text/x-asterisk",
        mode: "asterisk",
        file: /^extensions\.conf$/i
      }, {
        name: "Brainfuck",
        mime: "text/x-brainfuck",
        mode: "brainfuck",
        ext: ["b", "bf"]
      }, {
        name: "C",
        mime: "text/x-csrc",
        mode: "clike",
        ext: ["c", "h"]
      }, {
        name: "C++",
        mime: "text/x-c++src",
        mode: "clike",
        ext: ["cpp", "c++", "cc", "cxx", "hpp", "h++", "hh", "hxx"],
        alias: ["cpp"]
      }, {
        name: "Cobol",
        mime: "text/x-cobol",
        mode: "cobol",
        ext: ["cob", "cpy"]
      }, {
        name: "C#",
        mime: "text/x-csharp",
        mode: "clike",
        ext: ["cs"],
        alias: ["csharp"]
      }, {
        name: "Clojure",
        mime: "text/x-clojure",
        mode: "clojure",
        ext: ["clj", "cljc", "cljx"]
      }, {
        name: "ClojureScript",
        mime: "text/x-clojurescript",
        mode: "clojure",
        ext: ["cljs"]
      }, {
        name: "Closure Stylesheets (GSS)",
        mime: "text/x-gss",
        mode: "css",
        ext: ["gss"]
      }, {
        name: "CMake",
        mime: "text/x-cmake",
        mode: "cmake",
        ext: ["cmake", "cmake.in"],
        file: /^CMakeLists.txt$/
      }, {
        name: "CoffeeScript",
        mime: "text/x-coffeescript",
        mode: "coffeescript",
        ext: ["coffee"],
        alias: ["coffee", "coffee-script"]
      }, {
        name: "Common Lisp",
        mime: "text/x-common-lisp",
        mode: "commonlisp",
        ext: ["cl", "lisp", "el"],
        alias: ["lisp"]
      }, {
        name: "Cypher",
        mime: "application/x-cypher-query",
        mode: "cypher",
        ext: ["cyp", "cypher"]
      }, {
        name: "Cython",
        mime: "text/x-cython",
        mode: "python",
        ext: ["pyx", "pxd", "pxi"]
      }, {
        name: "Crystal",
        mime: "text/x-crystal",
        mode: "crystal",
        ext: ["cr"]
      }, {
        name: "CSS",
        mime: "text/css",
        mode: "css",
        ext: ["css"]
      }, {
        name: "LESS",
        mime: "text/x-less",
        mode: "css",
        ext: ["less"]
      }, {
        name: "CQL",
        mime: "text/x-cassandra",
        mode: "sql",
        ext: ["cql"]
      }, {
        name: "D",
        mime: "text/x-d",
        mode: "d",
        ext: ["d"]
      }, {
        name: "Dart",
        mimes: ["application/dart", "text/x-dart"],
        mode: "dart",
        ext: ["dart"]
      }, {
        name: "diff",
        mime: "text/x-diff",
        mode: "diff",
        ext: ["diff", "patch"],
        contentTest: function contentTest(text) {
          return text.match(/^diff --.* a\//m);
        }
      }, {
        name: "Django",
        mime: "text/x-django",
        mode: "django"
      }, {
        name: "Dockerfile",
        mime: "text/x-dockerfile",
        mode: "dockerfile",
        file: /^Dockerfile$/
      }, {
        name: "DTD",
        mime: "application/xml-dtd",
        mode: "dtd",
        ext: ["dtd"]
      }, {
        name: "Dylan",
        mime: "text/x-dylan",
        mode: "dylan",
        ext: ["dylan", "dyl", "intr"]
      }, {
        name: "EBNF",
        mime: "text/x-ebnf",
        mode: "ebnf"
      }, {
        name: "ECL",
        mime: "text/x-ecl",
        mode: "ecl",
        ext: ["ecl"]
      }, {
        name: "edn",
        mime: "application/edn",
        mode: "clojure",
        ext: ["edn"]
      }, {
        name: "Eiffel",
        mime: "text/x-eiffel",
        mode: "eiffel",
        ext: ["e"]
      }, {
        name: "Elm",
        mime: "text/x-elm",
        mode: "elm",
        ext: ["elm"]
      }, {
        name: "Embedded Javascript",
        mime: "application/x-ejs",
        mode: "htmlembedded",
        ext: ["ejs"]
      }, {
        name: "Embedded Ruby",
        mime: "application/x-erb",
        mode: "htmlembedded",
        ext: ["erb"]
      }, {
        name: "Erlang",
        mime: "text/x-erlang",
        mode: "erlang",
        ext: ["erl"]
      }, {
        name: "Factor",
        mime: "text/x-factor",
        mode: "factor",
        ext: ["factor"]
      }, {
        name: "FCL",
        mime: "text/x-fcl",
        mode: "fcl"
      }, {
        name: "Forth",
        mime: "text/x-forth",
        mode: "forth",
        ext: ["forth", "fth", "4th"]
      }, {
        name: "Fortran",
        mime: "text/x-fortran",
        mode: "fortran",
        ext: ["f", "for", "f77", "f90"]
      }, {
        name: "F#",
        mime: "text/x-fsharp",
        mode: "mllike",
        ext: ["fs"],
        alias: ["fsharp"]
      }, {
        name: "Gas",
        mime: "text/x-gas",
        mode: "gas",
        ext: ["s"]
      }, {
        name: "Gherkin",
        mime: "text/x-feature",
        mode: "gherkin",
        ext: ["feature"]
      }, {
        name: "GitHub Flavored Markdown",
        mime: "text/x-gfm",
        mode: "gfm",
        file: /^(readme|contributing|history).md$/i
      }, {
        name: "Go",
        mime: "text/x-go",
        mode: "go",
        ext: ["go"]
      }, {
        name: "Groovy",
        mime: "text/x-groovy",
        mode: "groovy",
        ext: ["groovy", "gradle"],
        file: /^Jenkinsfile$/
      }, {
        name: "HAML",
        mime: "text/x-haml",
        mode: "haml",
        ext: ["haml"]
      }, {
        name: "Haskell",
        mime: "text/x-haskell",
        mode: "haskell",
        ext: ["hs"]
      }, {
        name: "Haskell (Literate)",
        mime: "text/x-literate-haskell",
        mode: "haskell-literate",
        ext: ["lhs"]
      }, {
        name: "Haxe",
        mime: "text/x-haxe",
        mode: "haxe",
        ext: ["hx"]
      }, {
        name: "HXML",
        mime: "text/x-hxml",
        mode: "haxe",
        ext: ["hxml"]
      }, {
        name: "ASP.NET",
        mime: "application/x-aspx",
        mode: "htmlembedded",
        ext: ["aspx"],
        alias: ["asp", "aspx"]
      }, {
        name: "HTML",
        mime: "text/html",
        mode: "htmlmixed",
        ext: ["html", "htm"],
        alias: ["xhtml"]
      }, {
        name: "HTTP",
        mime: "message/http",
        mode: "http"
      }, {
        name: "IDL",
        mime: "text/x-idl",
        mode: "idl",
        ext: ["pro"]
      }, {
        name: "Pug",
        mime: "text/x-pug",
        mode: "pug",
        ext: ["jade", "pug"],
        alias: ["jade"]
      }, {
        name: "Java",
        mime: "text/x-java",
        mode: "clike",
        ext: ["java"]
      }, {
        name: "Java Server Pages",
        mime: "application/x-jsp",
        mode: "htmlembedded",
        ext: ["jsp"],
        alias: ["jsp"]
      }, {
        name: "JavaScript",
        mimes: ["text/javascript", "text/ecmascript", "application/javascript", "application/x-javascript", "application/ecmascript"],
        mode: "javascript",
        ext: ["js", "mjs", "cjs"],
        alias: ["ecmascript", "js", "node"]
      }, {
        name: "JSON",
        mimes: ["application/json", "application/x-json"],
        mode: "json",
        ext: ["json", "map"],
        alias: ["json5"]
      }, {
        name: "JSON-LD",
        mime: "application/ld+json",
        mode: "javascript",
        ext: ["jsonld"],
        alias: ["jsonld"]
      }, {
        name: "JSX",
        mime: "text/jsx",
        mode: "jsx",
        ext: ["jsx"]
      }, {
        name: "Jinja2",
        mime: "null",
        mode: "jinja2"
      }, {
        name: "Julia",
        mime: "text/x-julia",
        mode: "julia",
        ext: ["jl"]
      }, {
        name: "Kotlin",
        mime: "text/x-kotlin",
        mode: "clike",
        ext: ["kt"]
      }, {
        name: "LESS",
        mime: "text/x-less",
        mode: "css",
        ext: ["less"]
      }, {
        name: "LiveScript",
        mime: "text/x-livescript",
        mode: "livescript",
        ext: ["ls"],
        alias: ["ls"]
      }, {
        name: "Lua",
        mime: "text/x-lua",
        mode: "lua",
        ext: ["lua"]
      }, {
        name: "Markdown",
        mime: "text/x-markdown",
        mode: "markdown",
        ext: ["markdown", "md", "mkd"]
      }, {
        name: "mIRC",
        mime: "text/mirc",
        mode: "mirc"
      }, {
        name: "MariaDB SQL",
        mime: "text/x-mariadb",
        mode: "sql"
      }, {
        name: "Mathematica",
        mime: "text/x-mathematica",
        mode: "mathematica",
        ext: ["m", "nb"]
      }, {
        name: "Modelica",
        mime: "text/x-modelica",
        mode: "modelica",
        ext: ["mo"]
      }, {
        name: "MUMPS",
        mime: "text/x-mumps",
        mode: "mumps",
        ext: ["mps"]
      }, {
        name: "MS SQL",
        mime: "text/x-mssql",
        mode: "sql"
      }, {
        name: "mbox",
        mime: "application/mbox",
        mode: "mbox",
        ext: ["mbox"]
      }, {
        name: "MySQL",
        mime: "text/x-mysql",
        mode: "sql"
      }, {
        name: "Nginx",
        mime: "text/x-nginx-conf",
        mode: "nginx",
        file: /nginx.*\.conf$/i
      }, {
        name: "NSIS",
        mime: "text/x-nsis",
        mode: "nsis",
        ext: ["nsh", "nsi"]
      }, {
        name: "NTriples",
        mimes: ["application/n-triples", "application/n-quads", "text/n-triples"],
        mode: "ntriples",
        ext: ["nt", "nq"]
      }, {
        name: "Objective C",
        mime: "text/x-objectivec",
        mode: "clike",
        ext: ["m", "mm"],
        alias: ["objective-c", "objc"]
      }, {
        name: "OCaml",
        mime: "text/x-ocaml",
        mode: "mllike",
        ext: ["ml", "mli", "mll", "mly"]
      }, {
        name: "Octave",
        mime: "text/x-octave",
        mode: "octave",
        ext: ["m"]
      }, {
        name: "Oz",
        mime: "text/x-oz",
        mode: "oz",
        ext: ["oz"]
      }, {
        name: "Pascal",
        mime: "text/x-pascal",
        mode: "pascal",
        ext: ["p", "pas"]
      }, {
        name: "PEG.js",
        mime: "null",
        mode: "pegjs",
        ext: ["jsonld"]
      }, {
        name: "Perl",
        mime: "text/x-perl",
        mode: "perl",
        ext: ["pl", "pm"]
      }, {
        name: "PHP",
        mime: "application/x-httpd-php",
        mode: "php",
        ext: ["php", "php3", "php4", "php5", "php7", "phtml"]
      }, {
        name: "Pig",
        mime: "text/x-pig",
        mode: "pig",
        ext: ["pig"]
      }, {
        name: "Plain Text",
        mime: "text/plain",
        mode: "null",
        ext: ["txt", "text", "conf", "def", "list", "log"]
      }, {
        name: "PLSQL",
        mime: "text/x-plsql",
        mode: "sql",
        ext: ["pls"]
      }, {
        name: "PowerShell",
        mime: "application/x-powershell",
        mode: "powershell",
        ext: ["ps1", "psd1", "psm1"]
      }, {
        name: "Properties files",
        mime: "text/x-properties",
        mode: "properties",
        ext: ["properties", "ini", "in"],
        alias: ["ini", "properties"]
      }, {
        name: "ProtoBuf",
        mime: "text/x-protobuf",
        mode: "protobuf",
        ext: ["proto"]
      }, {
        name: "Python",
        mime: "text/x-python",
        mode: "python",
        ext: ["BUILD", "bzl", "py", "pyw"],
        file: /^(BUCK|BUILD)$/
      }, {
        name: "Puppet",
        mime: "text/x-puppet",
        mode: "puppet",
        ext: ["pp"]
      }, {
        name: "Q",
        mime: "text/x-q",
        mode: "q",
        ext: ["q"]
      }, {
        name: "R",
        mime: "text/x-rsrc",
        mode: "r",
        ext: ["r", "R"],
        alias: ["rscript"]
      }, {
        name: "reStructuredText",
        mime: "text/x-rst",
        mode: "rst",
        ext: ["rst"],
        alias: ["rst"]
      }, {
        name: "RPM Changes",
        mime: "text/x-rpm-changes",
        mode: "rpm"
      }, {
        name: "RPM Spec",
        mime: "text/x-rpm-spec",
        mode: "rpm",
        ext: ["spec"]
      }, {
        name: "Ruby",
        mime: "text/x-ruby",
        mode: "ruby",
        ext: ["rb"],
        alias: ["jruby", "macruby", "rake", "rb", "rbx"]
      }, {
        name: "Rust",
        mime: "text/x-rustsrc",
        mode: "rust",
        ext: ["rs"]
      }, {
        name: "SAS",
        mime: "text/x-sas",
        mode: "sas",
        ext: ["sas"]
      }, {
        name: "Sass",
        mime: "text/x-sass",
        mode: "sass",
        ext: ["sass"]
      }, {
        name: "Scala",
        mime: "text/x-scala",
        mode: "clike",
        ext: ["scala"]
      }, {
        name: "Scheme",
        mime: "text/x-scheme",
        mode: "scheme",
        ext: ["scm", "ss"]
      }, {
        name: "SCSS",
        mime: "text/x-scss",
        mode: "css",
        ext: ["scss"]
      }, {
        name: "Shell",
        mime: "text/x-sh",
        mode: "shell",
        ext: ["sh", "ksh", "bash"],
        alias: ["bash", "sh", "zsh"],
        file: /^PKGBUILD|\.bash(rc|_profile)|\.profile$/,
        contentTest: function contentTest(text) {
          return text.match(/#!\//m);
        }
      }, {
        name: "Sieve",
        mime: "application/sieve",
        mode: "sieve",
        ext: ["siv", "sieve"]
      }, {
        name: "Slim",
        mimes: ["text/x-slim", "application/x-slim"],
        mode: "slim",
        ext: ["slim"]
      }, {
        name: "Smalltalk",
        mime: "text/x-stsrc",
        mode: "smalltalk",
        ext: ["st"]
      }, {
        name: "Smarty",
        mime: "text/x-smarty",
        mode: "smarty",
        ext: ["tpl"]
      }, {
        name: "Solr",
        mime: "text/x-solr",
        mode: "solr"
      }, {
        name: "Soy",
        mime: "text/x-soy",
        mode: "soy",
        ext: ["soy"],
        alias: ["closure template"]
      }, {
        name: "SPARQL",
        mime: "application/sparql-query",
        mode: "sparql",
        ext: ["rq", "sparql"],
        alias: ["sparul"]
      }, {
        name: "Spreadsheet",
        mime: "text/x-spreadsheet",
        mode: "spreadsheet",
        alias: ["excel", "formula"]
      }, {
        name: "SQL",
        mime: "text/x-sql",
        mode: "sql",
        ext: ["sql"]
      }, {
        name: "SQLite",
        mime: "text/x-sqlite",
        mode: "sql"
      }, {
        name: "Squirrel",
        mime: "text/x-squirrel",
        mode: "clike",
        ext: ["nut"]
      }, {
        name: "Stylus",
        mime: "text/x-styl",
        mode: "stylus",
        ext: ["styl"]
      }, {
        name: "Swift",
        mime: "text/x-swift",
        mode: "swift",
        ext: ["swift"]
      }, {
        name: "sTeX",
        mime: "text/x-stex",
        mode: "stex"
      }, {
        name: "LaTeX",
        mime: "text/x-latex",
        mode: "stex",
        ext: ["text", "ltx"],
        alias: ["tex"]
      }, {
        name: "SystemVerilog",
        mime: "text/x-systemverilog",
        mode: "verilog",
        ext: ["v"]
      }, {
        name: "Tcl",
        mime: "text/x-tcl",
        mode: "tcl",
        ext: ["tcl"]
      }, {
        name: "Textile",
        mime: "text/x-textile",
        mode: "textile",
        ext: ["textile"]
      }, {
        name: "TiddlyWiki ",
        mime: "text/x-tiddlywiki",
        mode: "tiddlywiki"
      }, {
        name: "Tiki wiki",
        mime: "text/tiki",
        mode: "tiki"
      }, {
        name: "TOML",
        mime: "text/x-toml",
        mode: "toml",
        ext: ["toml"]
      }, {
        name: "Tornado",
        mime: "text/x-tornado",
        mode: "tornado"
      }, {
        name: "troff",
        mime: "text/troff",
        mode: "troff",
        ext: ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
      }, {
        name: "TTCN",
        mime: "text/x-ttcn",
        mode: "ttcn",
        ext: ["ttcn", "ttcn3", "ttcnpp"]
      }, {
        name: "TTCN_CFG",
        mime: "text/x-ttcn-cfg",
        mode: "ttcn-cfg",
        ext: ["cfg"]
      }, {
        name: "Turtle",
        mime: "text/turtle",
        mode: "turtle",
        ext: ["ttl"]
      }, {
        name: "TypeScript",
        mime: "application/typescript",
        mode: "javascript",
        ext: ["ts"],
        alias: ["ts"]
      }, {
        name: "TypeScript-JSX",
        mime: "text/typescript-jsx",
        mode: "jsx",
        ext: ["tsx"],
        alias: ["tsx"]
      }, {
        name: "Twig",
        mime: "text/x-twig",
        mode: "twig"
      }, {
        name: "Web IDL",
        mime: "text/x-webidl",
        mode: "webidl",
        ext: ["webidl"]
      }, {
        name: "VB.NET",
        mime: "text/x-vb",
        mode: "vb",
        ext: ["vb"]
      }, {
        name: "VBScript",
        mime: "text/vbscript",
        mode: "vbscript",
        ext: ["vbs"]
      }, {
        name: "Velocity",
        mime: "text/velocity",
        mode: "velocity",
        ext: ["vtl"]
      }, {
        name: "Verilog",
        mime: "text/x-verilog",
        mode: "verilog",
        ext: ["v"]
      }, {
        name: "VHDL",
        mime: "text/x-vhdl",
        mode: "vhdl",
        ext: ["vhd", "vhdl"]
      }, {
        name: "Vue.js Component",
        mimes: ["script/x-vue", "text/x-vue"],
        mode: "vue",
        ext: ["vue"]
      }, {
        name: "XML",
        mimes: ["application/xml", "text/xml"],
        mode: "xml",
        ext: ["xml", "xsl", "xsd", "svg"],
        alias: ["rss", "wsdl", "xsd"]
      }, {
        name: "XQuery",
        mime: "application/xquery",
        mode: "xquery",
        ext: ["xy", "xquery"]
      }, {
        name: "Yacas",
        mime: "text/x-yacas",
        mode: "yacas",
        ext: ["ys"]
      }, {
        name: "YAML",
        mimes: ["text/x-yaml", "text/yaml"],
        mode: "yaml",
        ext: ["yaml", "yml"],
        alias: ["yml"]
      }, {
        name: "Z80",
        mime: "text/x-z80",
        mode: "z80",
        ext: ["z80"]
      }, {
        name: "mscgen",
        mime: "text/x-mscgen",
        mode: "mscgen",
        ext: ["mscgen", "mscin", "msc"]
      }, {
        name: "xu",
        mime: "text/x-xu",
        mode: "mscgen",
        ext: ["xu"]
      }, {
        name: "msgenny",
        mime: "text/x-msgenny",
        mode: "mscgen",
        ext: ["msgenny"]
      }];
      var modeInfo = exports('modeInfo', __varRecorder__.modeInfo);
      __varRecorder__.modeInfo = modeInfo;

      for (var i = 0; i < __varRecorder__.modeInfo.length; i++) {
        var info = __varRecorder__.modeInfo[i];
        if (info.mimes) info.mime = info.mimes[0];
      }

      __varRecorder__.defineMode("null", function () {
        return {
          token: function token(stream) {
            return stream.skipToEnd();
          }
        };
      });

      __varRecorder__.defineMIME("text/plain", "null");
      __varRecorder__.findModeByMIME = findModeByMIME;
      __varRecorder__.findModeByExtension = findModeByExtension;
      __varRecorder__.findModeByFileName = findModeByFileName;
      __varRecorder__.findModeByName = findModeByName;

    })
  };
}));
