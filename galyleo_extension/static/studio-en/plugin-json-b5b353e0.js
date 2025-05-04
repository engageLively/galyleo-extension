System.register(['./__rootModule___commonjs-entry-039abf1b.js', './path-72cfeae7.js'], (function (exports) {
  var __contextModule__ = typeof module !== 'undefined' ? module : arguments[1];
;
  var _objectSpread2, exports$5, process$1, _typeof, win32$1, posix, isAbsolute, resolve, _path2;
  return {
    setters: [function (module) {
      _objectSpread2 = module.gl;
      exports$5 = module.gm;
      process$1 = module.a4;
      _typeof = module.a5;
      win32$1 = module.gE;
      posix = module.gA;
      isAbsolute = module.gw;
      resolve = module.gC;
    }, function (module) {
      _path2 = module._;
    }],
    execute: (function () {

      exports('default', json);

      var _path$1 = "default" in _path2 ? exports$5 : _path2;

      var exports$1$2 = {};
      var path$1 = _path$1;
      var WIN_SLASH = "\\\\/";
      var WIN_NO_SLASH = "[^".concat(WIN_SLASH, "]");
      var DOT_LITERAL = "\\.";
      var PLUS_LITERAL = "\\+";
      var QMARK_LITERAL = "\\?";
      var SLASH_LITERAL = "\\/";
      var ONE_CHAR = "(?=.)";
      var QMARK = "[^/]";
      var END_ANCHOR = "(?:".concat(SLASH_LITERAL, "|$)");
      var START_ANCHOR = "(?:^|".concat(SLASH_LITERAL, ")");
      var DOTS_SLASH = "".concat(DOT_LITERAL, "{1,2}").concat(END_ANCHOR);
      var NO_DOT = "(?!".concat(DOT_LITERAL, ")");
      var NO_DOTS = "(?!".concat(START_ANCHOR).concat(DOTS_SLASH, ")");
      var NO_DOT_SLASH = "(?!".concat(DOT_LITERAL, "{0,1}").concat(END_ANCHOR, ")");
      var NO_DOTS_SLASH = "(?!".concat(DOTS_SLASH, ")");
      var QMARK_NO_DOT = "[^.".concat(SLASH_LITERAL, "]");
      var STAR = "".concat(QMARK, "*?");
      var POSIX_CHARS = {
        DOT_LITERAL: DOT_LITERAL,
        PLUS_LITERAL: PLUS_LITERAL,
        QMARK_LITERAL: QMARK_LITERAL,
        SLASH_LITERAL: SLASH_LITERAL,
        ONE_CHAR: ONE_CHAR,
        QMARK: QMARK,
        END_ANCHOR: END_ANCHOR,
        DOTS_SLASH: DOTS_SLASH,
        NO_DOT: NO_DOT,
        NO_DOTS: NO_DOTS,
        NO_DOT_SLASH: NO_DOT_SLASH,
        NO_DOTS_SLASH: NO_DOTS_SLASH,
        QMARK_NO_DOT: QMARK_NO_DOT,
        STAR: STAR,
        START_ANCHOR: START_ANCHOR
      };

      var WINDOWS_CHARS = _objectSpread2(_objectSpread2({}, POSIX_CHARS), {}, {
        SLASH_LITERAL: "[".concat(WIN_SLASH, "]"),
        QMARK: WIN_NO_SLASH,
        STAR: "".concat(WIN_NO_SLASH, "*?"),
        DOTS_SLASH: "".concat(DOT_LITERAL, "{1,2}(?:[").concat(WIN_SLASH, "]|$)"),
        NO_DOT: "(?!".concat(DOT_LITERAL, ")"),
        NO_DOTS: "(?!(?:^|[".concat(WIN_SLASH, "])").concat(DOT_LITERAL, "{1,2}(?:[").concat(WIN_SLASH, "]|$))"),
        NO_DOT_SLASH: "(?!".concat(DOT_LITERAL, "{0,1}(?:[").concat(WIN_SLASH, "]|$))"),
        NO_DOTS_SLASH: "(?!".concat(DOT_LITERAL, "{1,2}(?:[").concat(WIN_SLASH, "]|$))"),
        QMARK_NO_DOT: "[^.".concat(WIN_SLASH, "]"),
        START_ANCHOR: "(?:^|[".concat(WIN_SLASH, "])"),
        END_ANCHOR: "(?:[".concat(WIN_SLASH, "]|$)")
      });

      var POSIX_REGEX_SOURCE$1 = {
        alnum: "a-zA-Z0-9",
        alpha: "a-zA-Z",
        ascii: "\\x00-\\x7F",
        blank: " \\t",
        cntrl: "\\x00-\\x1F\\x7F",
        digit: "0-9",
        graph: "\\x21-\\x7E",
        lower: "a-z",
        print: "\\x20-\\x7E ",
        punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
        space: " \\t\\r\\n\\v\\f",
        upper: "A-Z",
        word: "A-Za-z0-9_",
        xdigit: "A-Fa-f0-9"
      };
      exports$1$2 = {
        MAX_LENGTH: 1024 * 64,
        POSIX_REGEX_SOURCE: POSIX_REGEX_SOURCE$1,
        REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
        REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
        REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
        REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
        REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
        REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
        REPLACEMENTS: {
          "***": "*",
          "**/**": "**",
          "**/**/**": "**"
        },
        CHAR_0: 48,
        CHAR_9: 57,
        CHAR_UPPERCASE_A: 65,
        CHAR_LOWERCASE_A: 97,
        CHAR_UPPERCASE_Z: 90,
        CHAR_LOWERCASE_Z: 122,
        CHAR_LEFT_PARENTHESES: 40,
        CHAR_RIGHT_PARENTHESES: 41,
        CHAR_ASTERISK: 42,
        CHAR_AMPERSAND: 38,
        CHAR_AT: 64,
        CHAR_BACKWARD_SLASH: 92,
        CHAR_CARRIAGE_RETURN: 13,
        CHAR_CIRCUMFLEX_ACCENT: 94,
        CHAR_COLON: 58,
        CHAR_COMMA: 44,
        CHAR_DOT: 46,
        CHAR_DOUBLE_QUOTE: 34,
        CHAR_EQUAL: 61,
        CHAR_EXCLAMATION_MARK: 33,
        CHAR_FORM_FEED: 12,
        CHAR_FORWARD_SLASH: 47,
        CHAR_GRAVE_ACCENT: 96,
        CHAR_HASH: 35,
        CHAR_HYPHEN_MINUS: 45,
        CHAR_LEFT_ANGLE_BRACKET: 60,
        CHAR_LEFT_CURLY_BRACE: 123,
        CHAR_LEFT_SQUARE_BRACKET: 91,
        CHAR_LINE_FEED: 10,
        CHAR_NO_BREAK_SPACE: 160,
        CHAR_PERCENT: 37,
        CHAR_PLUS: 43,
        CHAR_QUESTION_MARK: 63,
        CHAR_RIGHT_ANGLE_BRACKET: 62,
        CHAR_RIGHT_CURLY_BRACE: 125,
        CHAR_RIGHT_SQUARE_BRACKET: 93,
        CHAR_SEMICOLON: 59,
        CHAR_SINGLE_QUOTE: 39,
        CHAR_SPACE: 32,
        CHAR_TAB: 9,
        CHAR_UNDERSCORE: 95,
        CHAR_VERTICAL_LINE: 124,
        CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
        SEP: path$1.sep,
        extglobChars: function extglobChars(chars) {
          return {
            "!": {
              type: "negate",
              open: "(?:(?!(?:",
              close: "))".concat(chars.STAR, ")")
            },
            "?": {
              type: "qmark",
              open: "(?:",
              close: ")?"
            },
            "+": {
              type: "plus",
              open: "(?:",
              close: ")+"
            },
            "*": {
              type: "star",
              open: "(?:",
              close: ")*"
            },
            "@": {
              type: "at",
              open: "(?:",
              close: ")"
            }
          };
        },
        globChars: function globChars(win32) {
          return win32 === true ? WINDOWS_CHARS : POSIX_CHARS;
        }
      };
      var _constants = exports$1$2;

      var _path$2 = "default" in _path2 ? exports$5 : _path2;

      var exports$4 = {};
      var process = process$1;
      var path$2 = _path$2;
      var win32 = process.platform === "win32";
      var REGEX_BACKSLASH = _constants.REGEX_BACKSLASH,
          REGEX_REMOVE_BACKSLASH = _constants.REGEX_REMOVE_BACKSLASH,
          REGEX_SPECIAL_CHARS = _constants.REGEX_SPECIAL_CHARS,
          REGEX_SPECIAL_CHARS_GLOBAL = _constants.REGEX_SPECIAL_CHARS_GLOBAL;

      exports$4.isObject = function (val) {
        return val !== null && _typeof(val) === "object" && !Array.isArray(val);
      };

      exports$4.hasRegexChars = function (str) {
        return REGEX_SPECIAL_CHARS.test(str);
      };

      exports$4.isRegexChar = function (str) {
        return str.length === 1 && exports$4.hasRegexChars(str);
      };

      exports$4.escapeRegex = function (str) {
        return str.replace(REGEX_SPECIAL_CHARS_GLOBAL, "\\$1");
      };

      exports$4.toPosixSlashes = function (str) {
        return str.replace(REGEX_BACKSLASH, "/");
      };

      exports$4.removeBackslashes = function (str) {
        return str.replace(REGEX_REMOVE_BACKSLASH, function (match) {
          return match === "\\" ? "" : match;
        });
      };

      exports$4.supportsLookbehinds = function () {
        var segs = process.version.slice(1).split(".").map(Number);

        if (segs.length === 3 && segs[0] >= 9 || segs[0] === 8 && segs[1] >= 10) {
          return true;
        }

        return false;
      };

      exports$4.isWindows = function (options) {
        if (options && typeof options.windows === "boolean") {
          return options.windows;
        }

        return win32 === true || path$2.sep === "\\";
      };

      exports$4.escapeLast = function (input, _char, lastIdx) {
        var idx = input.lastIndexOf(_char, lastIdx);
        if (idx === -1) return input;
        if (input[idx - 1] === "\\") return exports$4.escapeLast(input, _char, idx - 1);
        return "".concat(input.slice(0, idx), "\\").concat(input.slice(idx));
      };

      exports$4.removePrefix = function (input) {
        var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var output = input;

        if (output.startsWith("./")) {
          output = output.slice(2);
          state.prefix = "./";
        }

        return output;
      };

      exports$4.wrapOutput = function (input) {
        var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var prepend = options.contains ? "" : "^";
        var append = options.contains ? "" : "$";
        var output = "".concat(prepend, "(?:").concat(input, ")").concat(append);

        if (state.negated === true) {
          output = "(?:^(?!".concat(output, ").*$)");
        }

        return output;
      };

      exports$4.isObject;
          exports$4.hasRegexChars;
          exports$4.isRegexChar;
          exports$4.escapeRegex;
          exports$4.toPosixSlashes;
          exports$4.removeBackslashes;
          exports$4.supportsLookbehinds;
          exports$4.isWindows;
          exports$4.escapeLast;
          exports$4.removePrefix;
          exports$4.wrapOutput;

      var exports$3 = {};
      const utils$2 = exports$4;
      const {CHAR_ASTERISK, CHAR_AT, CHAR_BACKWARD_SLASH, CHAR_COMMA, CHAR_DOT, CHAR_EXCLAMATION_MARK, CHAR_FORWARD_SLASH, CHAR_LEFT_CURLY_BRACE, CHAR_LEFT_PARENTHESES, CHAR_LEFT_SQUARE_BRACKET, CHAR_PLUS, CHAR_QUESTION_MARK, CHAR_RIGHT_CURLY_BRACE, CHAR_RIGHT_PARENTHESES, CHAR_RIGHT_SQUARE_BRACKET} = _constants;
      const isPathSeparator = code => {
        return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
      };
      const depth = token => {
        if (token.isPrefix !== true) {
          token.depth = token.isGlobstar ? Infinity : 1;
        }
      };
      const scan$1 = (input, options) => {
        const opts = options || {};
        const length = input.length - 1;
        const scanToEnd = opts.parts === true || opts.scanToEnd === true;
        const slashes = [];
        const tokens = [];
        const parts = [];
        let str = input;
        let index = -1;
        let start = 0;
        let lastIndex = 0;
        let isBrace = false;
        let isBracket = false;
        let isGlob = false;
        let isExtglob = false;
        let isGlobstar = false;
        let braceEscaped = false;
        let backslashes = false;
        let negated = false;
        let negatedExtglob = false;
        let finished = false;
        let braces = 0;
        let prev;
        let code;
        let token = {
          value: "",
          depth: 0,
          isGlob: false
        };
        const eos = () => index >= length;
        const peek = () => str.charCodeAt(index + 1);
        const advance = () => {
          prev = code;
          return str.charCodeAt(++index);
        };
        while (index < length) {
          code = advance();
          let next;
          if (code === CHAR_BACKWARD_SLASH) {
            backslashes = token.backslashes = true;
            code = advance();
            if (code === CHAR_LEFT_CURLY_BRACE) {
              braceEscaped = true;
            }
            continue;
          }
          if (braceEscaped === true || code === CHAR_LEFT_CURLY_BRACE) {
            braces++;
            while (eos() !== true && (code = advance())) {
              if (code === CHAR_BACKWARD_SLASH) {
                backslashes = token.backslashes = true;
                advance();
                continue;
              }
              if (code === CHAR_LEFT_CURLY_BRACE) {
                braces++;
                continue;
              }
              if (braceEscaped !== true && code === CHAR_DOT && (code = advance()) === CHAR_DOT) {
                isBrace = token.isBrace = true;
                isGlob = token.isGlob = true;
                finished = true;
                if (scanToEnd === true) {
                  continue;
                }
                break;
              }
              if (braceEscaped !== true && code === CHAR_COMMA) {
                isBrace = token.isBrace = true;
                isGlob = token.isGlob = true;
                finished = true;
                if (scanToEnd === true) {
                  continue;
                }
                break;
              }
              if (code === CHAR_RIGHT_CURLY_BRACE) {
                braces--;
                if (braces === 0) {
                  braceEscaped = false;
                  isBrace = token.isBrace = true;
                  finished = true;
                  break;
                }
              }
            }
            if (scanToEnd === true) {
              continue;
            }
            break;
          }
          if (code === CHAR_FORWARD_SLASH) {
            slashes.push(index);
            tokens.push(token);
            token = {
              value: "",
              depth: 0,
              isGlob: false
            };
            if (finished === true)
              continue;
            if (prev === CHAR_DOT && index === start + 1) {
              start += 2;
              continue;
            }
            lastIndex = index + 1;
            continue;
          }
          if (opts.noext !== true) {
            const isExtglobChar = code === CHAR_PLUS || code === CHAR_AT || code === CHAR_ASTERISK || code === CHAR_QUESTION_MARK || code === CHAR_EXCLAMATION_MARK;
            if (isExtglobChar === true && peek() === CHAR_LEFT_PARENTHESES) {
              isGlob = token.isGlob = true;
              isExtglob = token.isExtglob = true;
              finished = true;
              if (code === CHAR_EXCLAMATION_MARK && index === start) {
                negatedExtglob = true;
              }
              if (scanToEnd === true) {
                while (eos() !== true && (code = advance())) {
                  if (code === CHAR_BACKWARD_SLASH) {
                    backslashes = token.backslashes = true;
                    code = advance();
                    continue;
                  }
                  if (code === CHAR_RIGHT_PARENTHESES) {
                    isGlob = token.isGlob = true;
                    finished = true;
                    break;
                  }
                }
                continue;
              }
              break;
            }
          }
          if (code === CHAR_ASTERISK) {
            if (prev === CHAR_ASTERISK)
              isGlobstar = token.isGlobstar = true;
            isGlob = token.isGlob = true;
            finished = true;
            if (scanToEnd === true) {
              continue;
            }
            break;
          }
          if (code === CHAR_QUESTION_MARK) {
            isGlob = token.isGlob = true;
            finished = true;
            if (scanToEnd === true) {
              continue;
            }
            break;
          }
          if (code === CHAR_LEFT_SQUARE_BRACKET) {
            while (eos() !== true && (next = advance())) {
              if (next === CHAR_BACKWARD_SLASH) {
                backslashes = token.backslashes = true;
                advance();
                continue;
              }
              if (next === CHAR_RIGHT_SQUARE_BRACKET) {
                isBracket = token.isBracket = true;
                isGlob = token.isGlob = true;
                finished = true;
                break;
              }
            }
            if (scanToEnd === true) {
              continue;
            }
            break;
          }
          if (opts.nonegate !== true && code === CHAR_EXCLAMATION_MARK && index === start) {
            negated = token.negated = true;
            start++;
            continue;
          }
          if (opts.noparen !== true && code === CHAR_LEFT_PARENTHESES) {
            isGlob = token.isGlob = true;
            if (scanToEnd === true) {
              while (eos() !== true && (code = advance())) {
                if (code === CHAR_LEFT_PARENTHESES) {
                  backslashes = token.backslashes = true;
                  code = advance();
                  continue;
                }
                if (code === CHAR_RIGHT_PARENTHESES) {
                  finished = true;
                  break;
                }
              }
              continue;
            }
            break;
          }
          if (isGlob === true) {
            finished = true;
            if (scanToEnd === true) {
              continue;
            }
            break;
          }
        }
        if (opts.noext === true) {
          isExtglob = false;
          isGlob = false;
        }
        let base = str;
        let prefix = "";
        let glob = "";
        if (start > 0) {
          prefix = str.slice(0, start);
          str = str.slice(start);
          lastIndex -= start;
        }
        if (base && isGlob === true && lastIndex > 0) {
          base = str.slice(0, lastIndex);
          glob = str.slice(lastIndex);
        } else if (isGlob === true) {
          base = "";
          glob = str;
        } else {
          base = str;
        }
        if (base && base !== "" && base !== "/" && base !== str) {
          if (isPathSeparator(base.charCodeAt(base.length - 1))) {
            base = base.slice(0, -1);
          }
        }
        if (opts.unescape === true) {
          if (glob)
            glob = utils$2.removeBackslashes(glob);
          if (base && backslashes === true) {
            base = utils$2.removeBackslashes(base);
          }
        }
        const state = {
          prefix,
          input,
          start,
          base,
          glob,
          isBrace,
          isBracket,
          isGlob,
          isExtglob,
          isGlobstar,
          negated,
          negatedExtglob
        };
        if (opts.tokens === true) {
          state.maxDepth = 0;
          if (!isPathSeparator(code)) {
            tokens.push(token);
          }
          state.tokens = tokens;
        }
        if (opts.parts === true || opts.tokens === true) {
          let prevIndex;
          for (let idx = 0; idx < slashes.length; idx++) {
            const n = prevIndex ? prevIndex + 1 : start;
            const i = slashes[idx];
            const value = input.slice(n, i);
            if (opts.tokens) {
              if (idx === 0 && start !== 0) {
                tokens[idx].isPrefix = true;
                tokens[idx].value = prefix;
              } else {
                tokens[idx].value = value;
              }
              depth(tokens[idx]);
              state.maxDepth += tokens[idx].depth;
            }
            if (idx !== 0 || value !== "") {
              parts.push(value);
            }
            prevIndex = i;
          }
          if (prevIndex && prevIndex + 1 < input.length) {
            const value = input.slice(prevIndex + 1);
            parts.push(value);
            if (opts.tokens) {
              tokens[tokens.length - 1].value = value;
              depth(tokens[tokens.length - 1]);
              state.maxDepth += tokens[tokens.length - 1].depth;
            }
          }
          state.slashes = slashes;
          state.parts = parts;
        }
        return state;
      };
      exports$3 = scan$1;
      var _scan = exports$3;
      var exports$2 = {};
      const constants$1 = _constants;
      const utils$1 = exports$4;
      const {MAX_LENGTH, POSIX_REGEX_SOURCE, REGEX_NON_SPECIAL_CHARS, REGEX_SPECIAL_CHARS_BACKREF, REPLACEMENTS} = constants$1;
      const expandRange = (args, options) => {
        if (typeof options.expandRange === "function") {
          return options.expandRange(...args, options);
        }
        args.sort();
        const value = `[${ args.join("-") }]`;
        try {
          new RegExp(value);
        } catch (ex) {
          return args.map(v => utils$1.escapeRegex(v)).join("..");
        }
        return value;
      };
      const syntaxError = (type, char) => {
        return `Missing ${ type }: "${ char }" - use "\\\\${ char }" to match literal characters`;
      };
      const parse$1 = (input, options) => {
        if (typeof input !== "string") {
          throw new TypeError("Expected a string");
        }
        input = REPLACEMENTS[input] || input;
        const opts = { ...options };
        const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
        let len = input.length;
        if (len > max) {
          throw new SyntaxError(`Input length: ${ len }, exceeds maximum allowed length: ${ max }`);
        }
        const bos = {
          type: "bos",
          value: "",
          output: opts.prepend || ""
        };
        const tokens = [bos];
        const capture = opts.capture ? "" : "?:";
        const win32 = utils$1.isWindows(options);
        const PLATFORM_CHARS = constants$1.globChars(win32);
        const EXTGLOB_CHARS = constants$1.extglobChars(PLATFORM_CHARS);
        const {DOT_LITERAL, PLUS_LITERAL, SLASH_LITERAL, ONE_CHAR, DOTS_SLASH, NO_DOT, NO_DOT_SLASH, NO_DOTS_SLASH, QMARK, QMARK_NO_DOT, STAR, START_ANCHOR} = PLATFORM_CHARS;
        const globstar = opts => {
          return `(${ capture }(?:(?!${ START_ANCHOR }${ opts.dot ? DOTS_SLASH : DOT_LITERAL }).)*?)`;
        };
        const nodot = opts.dot ? "" : NO_DOT;
        const qmarkNoDot = opts.dot ? QMARK : QMARK_NO_DOT;
        let star = opts.bash === true ? globstar(opts) : STAR;
        if (opts.capture) {
          star = `(${ star })`;
        }
        if (typeof opts.noext === "boolean") {
          opts.noextglob = opts.noext;
        }
        const state = {
          input,
          index: -1,
          start: 0,
          dot: opts.dot === true,
          consumed: "",
          output: "",
          prefix: "",
          backtrack: false,
          negated: false,
          brackets: 0,
          braces: 0,
          parens: 0,
          quotes: 0,
          globstar: false,
          tokens
        };
        input = utils$1.removePrefix(input, state);
        len = input.length;
        const extglobs = [];
        const braces = [];
        const stack = [];
        let prev = bos;
        let value;
        const eos = () => state.index === len - 1;
        const peek = state.peek = (n = 1) => input[state.index + n];
        const advance = state.advance = () => input[++state.index] || "";
        const remaining = () => input.slice(state.index + 1);
        const consume = (value = "", num = 0) => {
          state.consumed += value;
          state.index += num;
        };
        const append = token => {
          state.output += token.output != null ? token.output : token.value;
          consume(token.value);
        };
        const negate = () => {
          let count = 1;
          while (peek() === "!" && (peek(2) !== "(" || peek(3) === "?")) {
            advance();
            state.start++;
            count++;
          }
          if (count % 2 === 0) {
            return false;
          }
          state.negated = true;
          state.start++;
          return true;
        };
        const increment = type => {
          state[type]++;
          stack.push(type);
        };
        const decrement = type => {
          state[type]--;
          stack.pop();
        };
        const push = tok => {
          if (prev.type === "globstar") {
            const isBrace = state.braces > 0 && (tok.type === "comma" || tok.type === "brace");
            const isExtglob = tok.extglob === true || extglobs.length && (tok.type === "pipe" || tok.type === "paren");
            if (tok.type !== "slash" && tok.type !== "paren" && !isBrace && !isExtglob) {
              state.output = state.output.slice(0, -prev.output.length);
              prev.type = "star";
              prev.value = "*";
              prev.output = star;
              state.output += prev.output;
            }
          }
          if (extglobs.length && tok.type !== "paren") {
            extglobs[extglobs.length - 1].inner += tok.value;
          }
          if (tok.value || tok.output)
            append(tok);
          if (prev && prev.type === "text" && tok.type === "text") {
            prev.value += tok.value;
            prev.output = (prev.output || "") + tok.value;
            return;
          }
          tok.prev = prev;
          tokens.push(tok);
          prev = tok;
        };
        const extglobOpen = (type, value) => {
          const token = {
            ...EXTGLOB_CHARS[value],
            conditions: 1,
            inner: ""
          };
          token.prev = prev;
          token.parens = state.parens;
          token.output = state.output;
          const output = (opts.capture ? "(" : "") + token.open;
          increment("parens");
          push({
            type,
            value,
            output: state.output ? "" : ONE_CHAR
          });
          push({
            type: "paren",
            extglob: true,
            value: advance(),
            output
          });
          extglobs.push(token);
        };
        const extglobClose = token => {
          let output = token.close + (opts.capture ? ")" : "");
          let rest;
          if (token.type === "negate") {
            let extglobStar = star;
            if (token.inner && token.inner.length > 1 && token.inner.includes("/")) {
              extglobStar = globstar(opts);
            }
            if (extglobStar !== star || eos() || /^\)+$/.test(remaining())) {
              output = token.close = `)$))${ extglobStar }`;
            }
            if (token.inner.includes("*") && (rest = remaining()) && /^\.[^\\/.]+$/.test(rest)) {
              const expression = parse$1(rest, {
                ...options,
                fastpaths: false
              }).output;
              output = token.close = `)${ expression })${ extglobStar })`;
            }
            if (token.prev.type === "bos") {
              state.negatedExtglob = true;
            }
          }
          push({
            type: "paren",
            extglob: true,
            value,
            output
          });
          decrement("parens");
        };
        if (opts.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(input)) {
          let backslashes = false;
          let output = input.replace(REGEX_SPECIAL_CHARS_BACKREF, (m, esc, chars, first, rest, index) => {
            if (first === "\\") {
              backslashes = true;
              return m;
            }
            if (first === "?") {
              if (esc) {
                return esc + first + (rest ? QMARK.repeat(rest.length) : "");
              }
              if (index === 0) {
                return qmarkNoDot + (rest ? QMARK.repeat(rest.length) : "");
              }
              return QMARK.repeat(chars.length);
            }
            if (first === ".") {
              return DOT_LITERAL.repeat(chars.length);
            }
            if (first === "*") {
              if (esc) {
                return esc + first + (rest ? star : "");
              }
              return star;
            }
            return esc ? m : `\\${ m }`;
          });
          if (backslashes === true) {
            if (opts.unescape === true) {
              output = output.replace(/\\/g, "");
            } else {
              output = output.replace(/\\+/g, m => {
                return m.length % 2 === 0 ? "\\\\" : m ? "\\" : "";
              });
            }
          }
          if (output === input && opts.contains === true) {
            state.output = input;
            return state;
          }
          state.output = utils$1.wrapOutput(output, state, options);
          return state;
        }
        while (!eos()) {
          value = advance();
          if (value === "\0") {
            continue;
          }
          if (value === "\\") {
            const next = peek();
            if (next === "/" && opts.bash !== true) {
              continue;
            }
            if (next === "." || next === ";") {
              continue;
            }
            if (!next) {
              value += "\\";
              push({
                type: "text",
                value
              });
              continue;
            }
            const match = /^\\+/.exec(remaining());
            let slashes = 0;
            if (match && match[0].length > 2) {
              slashes = match[0].length;
              state.index += slashes;
              if (slashes % 2 !== 0) {
                value += "\\";
              }
            }
            if (opts.unescape === true) {
              value = advance();
            } else {
              value += advance();
            }
            if (state.brackets === 0) {
              push({
                type: "text",
                value
              });
              continue;
            }
          }
          if (state.brackets > 0 && (value !== "]" || prev.value === "[" || prev.value === "[^")) {
            if (opts.posix !== false && value === ":") {
              const inner = prev.value.slice(1);
              if (inner.includes("[")) {
                prev.posix = true;
                if (inner.includes(":")) {
                  const idx = prev.value.lastIndexOf("[");
                  const pre = prev.value.slice(0, idx);
                  const rest = prev.value.slice(idx + 2);
                  const posix = POSIX_REGEX_SOURCE[rest];
                  if (posix) {
                    prev.value = pre + posix;
                    state.backtrack = true;
                    advance();
                    if (!bos.output && tokens.indexOf(prev) === 1) {
                      bos.output = ONE_CHAR;
                    }
                    continue;
                  }
                }
              }
            }
            if (value === "[" && peek() !== ":" || value === "-" && peek() === "]") {
              value = `\\${ value }`;
            }
            if (value === "]" && (prev.value === "[" || prev.value === "[^")) {
              value = `\\${ value }`;
            }
            if (opts.posix === true && value === "!" && prev.value === "[") {
              value = "^";
            }
            prev.value += value;
            append({ value });
            continue;
          }
          if (state.quotes === 1 && value !== "\"") {
            value = utils$1.escapeRegex(value);
            prev.value += value;
            append({ value });
            continue;
          }
          if (value === "\"") {
            state.quotes = state.quotes === 1 ? 0 : 1;
            if (opts.keepQuotes === true) {
              push({
                type: "text",
                value
              });
            }
            continue;
          }
          if (value === "(") {
            increment("parens");
            push({
              type: "paren",
              value
            });
            continue;
          }
          if (value === ")") {
            if (state.parens === 0 && opts.strictBrackets === true) {
              throw new SyntaxError(syntaxError("opening", "("));
            }
            const extglob = extglobs[extglobs.length - 1];
            if (extglob && state.parens === extglob.parens + 1) {
              extglobClose(extglobs.pop());
              continue;
            }
            push({
              type: "paren",
              value,
              output: state.parens ? ")" : "\\)"
            });
            decrement("parens");
            continue;
          }
          if (value === "[") {
            if (opts.nobracket === true || !remaining().includes("]")) {
              if (opts.nobracket !== true && opts.strictBrackets === true) {
                throw new SyntaxError(syntaxError("closing", "]"));
              }
              value = `\\${ value }`;
            } else {
              increment("brackets");
            }
            push({
              type: "bracket",
              value
            });
            continue;
          }
          if (value === "]") {
            if (opts.nobracket === true || prev && prev.type === "bracket" && prev.value.length === 1) {
              push({
                type: "text",
                value,
                output: `\\${ value }`
              });
              continue;
            }
            if (state.brackets === 0) {
              if (opts.strictBrackets === true) {
                throw new SyntaxError(syntaxError("opening", "["));
              }
              push({
                type: "text",
                value,
                output: `\\${ value }`
              });
              continue;
            }
            decrement("brackets");
            const prevValue = prev.value.slice(1);
            if (prev.posix !== true && prevValue[0] === "^" && !prevValue.includes("/")) {
              value = `/${ value }`;
            }
            prev.value += value;
            append({ value });
            if (opts.literalBrackets === false || utils$1.hasRegexChars(prevValue)) {
              continue;
            }
            const escaped = utils$1.escapeRegex(prev.value);
            state.output = state.output.slice(0, -prev.value.length);
            if (opts.literalBrackets === true) {
              state.output += escaped;
              prev.value = escaped;
              continue;
            }
            prev.value = `(${ capture }${ escaped }|${ prev.value })`;
            state.output += prev.value;
            continue;
          }
          if (value === "{" && opts.nobrace !== true) {
            increment("braces");
            const open = {
              type: "brace",
              value,
              output: "(",
              outputIndex: state.output.length,
              tokensIndex: state.tokens.length
            };
            braces.push(open);
            push(open);
            continue;
          }
          if (value === "}") {
            const brace = braces[braces.length - 1];
            if (opts.nobrace === true || !brace) {
              push({
                type: "text",
                value,
                output: value
              });
              continue;
            }
            let output = ")";
            if (brace.dots === true) {
              const arr = tokens.slice();
              const range = [];
              for (let i = arr.length - 1; i >= 0; i--) {
                tokens.pop();
                if (arr[i].type === "brace") {
                  break;
                }
                if (arr[i].type !== "dots") {
                  range.unshift(arr[i].value);
                }
              }
              output = expandRange(range, opts);
              state.backtrack = true;
            }
            if (brace.comma !== true && brace.dots !== true) {
              const out = state.output.slice(0, brace.outputIndex);
              const toks = state.tokens.slice(brace.tokensIndex);
              brace.value = brace.output = "\\{";
              value = output = "\\}";
              state.output = out;
              for (const t of toks) {
                state.output += t.output || t.value;
              }
            }
            push({
              type: "brace",
              value,
              output
            });
            decrement("braces");
            braces.pop();
            continue;
          }
          if (value === "|") {
            if (extglobs.length > 0) {
              extglobs[extglobs.length - 1].conditions++;
            }
            push({
              type: "text",
              value
            });
            continue;
          }
          if (value === ",") {
            let output = value;
            const brace = braces[braces.length - 1];
            if (brace && stack[stack.length - 1] === "braces") {
              brace.comma = true;
              output = "|";
            }
            push({
              type: "comma",
              value,
              output
            });
            continue;
          }
          if (value === "/") {
            if (prev.type === "dot" && state.index === state.start + 1) {
              state.start = state.index + 1;
              state.consumed = "";
              state.output = "";
              tokens.pop();
              prev = bos;
              continue;
            }
            push({
              type: "slash",
              value,
              output: SLASH_LITERAL
            });
            continue;
          }
          if (value === ".") {
            if (state.braces > 0 && prev.type === "dot") {
              if (prev.value === ".")
                prev.output = DOT_LITERAL;
              const brace = braces[braces.length - 1];
              prev.type = "dots";
              prev.output += value;
              prev.value += value;
              brace.dots = true;
              continue;
            }
            if (state.braces + state.parens === 0 && prev.type !== "bos" && prev.type !== "slash") {
              push({
                type: "text",
                value,
                output: DOT_LITERAL
              });
              continue;
            }
            push({
              type: "dot",
              value,
              output: DOT_LITERAL
            });
            continue;
          }
          if (value === "?") {
            const isGroup = prev && prev.value === "(";
            if (!isGroup && opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
              extglobOpen("qmark", value);
              continue;
            }
            if (prev && prev.type === "paren") {
              const next = peek();
              let output = value;
              if (next === "<" && !utils$1.supportsLookbehinds()) {
                throw new Error("Node.js v10 or higher is required for regex lookbehinds");
              }
              if (prev.value === "(" && !/[!=<:]/.test(next) || next === "<" && !/<([!=]|\w+>)/.test(remaining())) {
                output = `\\${ value }`;
              }
              push({
                type: "text",
                value,
                output
              });
              continue;
            }
            if (opts.dot !== true && (prev.type === "slash" || prev.type === "bos")) {
              push({
                type: "qmark",
                value,
                output: QMARK_NO_DOT
              });
              continue;
            }
            push({
              type: "qmark",
              value,
              output: QMARK
            });
            continue;
          }
          if (value === "!") {
            if (opts.noextglob !== true && peek() === "(") {
              if (peek(2) !== "?" || !/[!=<:]/.test(peek(3))) {
                extglobOpen("negate", value);
                continue;
              }
            }
            if (opts.nonegate !== true && state.index === 0) {
              negate();
              continue;
            }
          }
          if (value === "+") {
            if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
              extglobOpen("plus", value);
              continue;
            }
            if (prev && prev.value === "(" || opts.regex === false) {
              push({
                type: "plus",
                value,
                output: PLUS_LITERAL
              });
              continue;
            }
            if (prev && (prev.type === "bracket" || prev.type === "paren" || prev.type === "brace") || state.parens > 0) {
              push({
                type: "plus",
                value
              });
              continue;
            }
            push({
              type: "plus",
              value: PLUS_LITERAL
            });
            continue;
          }
          if (value === "@") {
            if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
              push({
                type: "at",
                extglob: true,
                value,
                output: ""
              });
              continue;
            }
            push({
              type: "text",
              value
            });
            continue;
          }
          if (value !== "*") {
            if (value === "$" || value === "^") {
              value = `\\${ value }`;
            }
            const match = REGEX_NON_SPECIAL_CHARS.exec(remaining());
            if (match) {
              value += match[0];
              state.index += match[0].length;
            }
            push({
              type: "text",
              value
            });
            continue;
          }
          if (prev && (prev.type === "globstar" || prev.star === true)) {
            prev.type = "star";
            prev.star = true;
            prev.value += value;
            prev.output = star;
            state.backtrack = true;
            state.globstar = true;
            consume(value);
            continue;
          }
          let rest = remaining();
          if (opts.noextglob !== true && /^\([^?]/.test(rest)) {
            extglobOpen("star", value);
            continue;
          }
          if (prev.type === "star") {
            if (opts.noglobstar === true) {
              consume(value);
              continue;
            }
            const prior = prev.prev;
            const before = prior.prev;
            const isStart = prior.type === "slash" || prior.type === "bos";
            const afterStar = before && (before.type === "star" || before.type === "globstar");
            if (opts.bash === true && (!isStart || rest[0] && rest[0] !== "/")) {
              push({
                type: "star",
                value,
                output: ""
              });
              continue;
            }
            const isBrace = state.braces > 0 && (prior.type === "comma" || prior.type === "brace");
            const isExtglob = extglobs.length && (prior.type === "pipe" || prior.type === "paren");
            if (!isStart && prior.type !== "paren" && !isBrace && !isExtglob) {
              push({
                type: "star",
                value,
                output: ""
              });
              continue;
            }
            while (rest.slice(0, 3) === "/**") {
              const after = input[state.index + 4];
              if (after && after !== "/") {
                break;
              }
              rest = rest.slice(3);
              consume("/**", 3);
            }
            if (prior.type === "bos" && eos()) {
              prev.type = "globstar";
              prev.value += value;
              prev.output = globstar(opts);
              state.output = prev.output;
              state.globstar = true;
              consume(value);
              continue;
            }
            if (prior.type === "slash" && prior.prev.type !== "bos" && !afterStar && eos()) {
              state.output = state.output.slice(0, -(prior.output + prev.output).length);
              prior.output = `(?:${ prior.output }`;
              prev.type = "globstar";
              prev.output = globstar(opts) + (opts.strictSlashes ? ")" : "|$)");
              prev.value += value;
              state.globstar = true;
              state.output += prior.output + prev.output;
              consume(value);
              continue;
            }
            if (prior.type === "slash" && prior.prev.type !== "bos" && rest[0] === "/") {
              const end = rest[1] !== void 0 ? "|$" : "";
              state.output = state.output.slice(0, -(prior.output + prev.output).length);
              prior.output = `(?:${ prior.output }`;
              prev.type = "globstar";
              prev.output = `${ globstar(opts) }${ SLASH_LITERAL }|${ SLASH_LITERAL }${ end })`;
              prev.value += value;
              state.output += prior.output + prev.output;
              state.globstar = true;
              consume(value + advance());
              push({
                type: "slash",
                value: "/",
                output: ""
              });
              continue;
            }
            if (prior.type === "bos" && rest[0] === "/") {
              prev.type = "globstar";
              prev.value += value;
              prev.output = `(?:^|${ SLASH_LITERAL }|${ globstar(opts) }${ SLASH_LITERAL })`;
              state.output = prev.output;
              state.globstar = true;
              consume(value + advance());
              push({
                type: "slash",
                value: "/",
                output: ""
              });
              continue;
            }
            state.output = state.output.slice(0, -prev.output.length);
            prev.type = "globstar";
            prev.output = globstar(opts);
            prev.value += value;
            state.output += prev.output;
            state.globstar = true;
            consume(value);
            continue;
          }
          const token = {
            type: "star",
            value,
            output: star
          };
          if (opts.bash === true) {
            token.output = ".*?";
            if (prev.type === "bos" || prev.type === "slash") {
              token.output = nodot + token.output;
            }
            push(token);
            continue;
          }
          if (prev && (prev.type === "bracket" || prev.type === "paren") && opts.regex === true) {
            token.output = value;
            push(token);
            continue;
          }
          if (state.index === state.start || prev.type === "slash" || prev.type === "dot") {
            if (prev.type === "dot") {
              state.output += NO_DOT_SLASH;
              prev.output += NO_DOT_SLASH;
            } else if (opts.dot === true) {
              state.output += NO_DOTS_SLASH;
              prev.output += NO_DOTS_SLASH;
            } else {
              state.output += nodot;
              prev.output += nodot;
            }
            if (peek() !== "*") {
              state.output += ONE_CHAR;
              prev.output += ONE_CHAR;
            }
          }
          push(token);
        }
        while (state.brackets > 0) {
          if (opts.strictBrackets === true)
            throw new SyntaxError(syntaxError("closing", "]"));
          state.output = utils$1.escapeLast(state.output, "[");
          decrement("brackets");
        }
        while (state.parens > 0) {
          if (opts.strictBrackets === true)
            throw new SyntaxError(syntaxError("closing", ")"));
          state.output = utils$1.escapeLast(state.output, "(");
          decrement("parens");
        }
        while (state.braces > 0) {
          if (opts.strictBrackets === true)
            throw new SyntaxError(syntaxError("closing", "}"));
          state.output = utils$1.escapeLast(state.output, "{");
          decrement("braces");
        }
        if (opts.strictSlashes !== true && (prev.type === "star" || prev.type === "bracket")) {
          push({
            type: "maybe_slash",
            value: "",
            output: `${ SLASH_LITERAL }?`
          });
        }
        if (state.backtrack === true) {
          state.output = "";
          for (const token of state.tokens) {
            state.output += token.output != null ? token.output : token.value;
            if (token.suffix) {
              state.output += token.suffix;
            }
          }
        }
        return state;
      };
      parse$1.fastpaths = (input, options) => {
        const opts = { ...options };
        const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
        const len = input.length;
        if (len > max) {
          throw new SyntaxError(`Input length: ${ len }, exceeds maximum allowed length: ${ max }`);
        }
        input = REPLACEMENTS[input] || input;
        const win32 = utils$1.isWindows(options);
        const {DOT_LITERAL, SLASH_LITERAL, ONE_CHAR, DOTS_SLASH, NO_DOT, NO_DOTS, NO_DOTS_SLASH, STAR, START_ANCHOR} = constants$1.globChars(win32);
        const nodot = opts.dot ? NO_DOTS : NO_DOT;
        const slashDot = opts.dot ? NO_DOTS_SLASH : NO_DOT;
        const capture = opts.capture ? "" : "?:";
        const state = {
          negated: false,
          prefix: ""
        };
        let star = opts.bash === true ? ".*?" : STAR;
        if (opts.capture) {
          star = `(${ star })`;
        }
        const globstar = opts => {
          if (opts.noglobstar === true)
            return star;
          return `(${ capture }(?:(?!${ START_ANCHOR }${ opts.dot ? DOTS_SLASH : DOT_LITERAL }).)*?)`;
        };
        const create = str => {
          switch (str) {
          case "*":
            return `${ nodot }${ ONE_CHAR }${ star }`;
          case ".*":
            return `${ DOT_LITERAL }${ ONE_CHAR }${ star }`;
          case "*.*":
            return `${ nodot }${ star }${ DOT_LITERAL }${ ONE_CHAR }${ star }`;
          case "*/*":
            return `${ nodot }${ star }${ SLASH_LITERAL }${ ONE_CHAR }${ slashDot }${ star }`;
          case "**":
            return nodot + globstar(opts);
          case "**/*":
            return `(?:${ nodot }${ globstar(opts) }${ SLASH_LITERAL })?${ slashDot }${ ONE_CHAR }${ star }`;
          case "**/*.*":
            return `(?:${ nodot }${ globstar(opts) }${ SLASH_LITERAL })?${ slashDot }${ star }${ DOT_LITERAL }${ ONE_CHAR }${ star }`;
          case "**/.*":
            return `(?:${ nodot }${ globstar(opts) }${ SLASH_LITERAL })?${ DOT_LITERAL }${ ONE_CHAR }${ star }`;
          default: {
              const match = /^(.*?)\.(\w+)$/.exec(str);
              if (!match)
                return;
              const source = create(match[1]);
              if (!source)
                return;
              return source + DOT_LITERAL + match[2];
            }
          }
        };
        const output = utils$1.removePrefix(input, state);
        let source = create(output);
        if (source && opts.strictSlashes !== true) {
          source += `${ SLASH_LITERAL }?`;
        }
        return source;
      };
      exports$2 = parse$1;
      var _parse = exports$2;
      var _path = "default" in _path2 ? exports$5 : _path2;
      var exports$1 = {};
      const path = _path;
      const scan = _scan;
      const parse = _parse;
      const utils = exports$4;
      const constants = _constants;
      const isObject = val => val && typeof val === "object" && !Array.isArray(val);
      const picomatch = (glob, options, returnState = false) => {
        if (Array.isArray(glob)) {
          const fns = glob.map(input => picomatch(input, options, returnState));
          const arrayMatcher = str => {
            for (const isMatch of fns) {
              const state = isMatch(str);
              if (state)
                return state;
            }
            return false;
          };
          return arrayMatcher;
        }
        const isState = isObject(glob) && glob.tokens && glob.input;
        if (glob === "" || typeof glob !== "string" && !isState) {
          throw new TypeError("Expected pattern to be a non-empty string");
        }
        const opts = options || {};
        const posix = utils.isWindows(options);
        const regex = isState ? picomatch.compileRe(glob, options) : picomatch.makeRe(glob, options, false, true);
        const state = regex.state;
        delete regex.state;
        let isIgnored = () => false;
        if (opts.ignore) {
          const ignoreOpts = {
            ...options,
            ignore: null,
            onMatch: null,
            onResult: null
          };
          isIgnored = picomatch(opts.ignore, ignoreOpts, returnState);
        }
        const matcher = (input, returnObject = false) => {
          const {isMatch, match, output} = picomatch.test(input, regex, options, {
            glob,
            posix
          });
          const result = {
            glob,
            state,
            regex,
            posix,
            input,
            output,
            match,
            isMatch
          };
          if (typeof opts.onResult === "function") {
            opts.onResult(result);
          }
          if (isMatch === false) {
            result.isMatch = false;
            return returnObject ? result : false;
          }
          if (isIgnored(input)) {
            if (typeof opts.onIgnore === "function") {
              opts.onIgnore(result);
            }
            result.isMatch = false;
            return returnObject ? result : false;
          }
          if (typeof opts.onMatch === "function") {
            opts.onMatch(result);
          }
          return returnObject ? result : true;
        };
        if (returnState) {
          matcher.state = state;
        }
        return matcher;
      };
      picomatch.test = (input, regex, options, {glob, posix} = {}) => {
        if (typeof input !== "string") {
          throw new TypeError("Expected input to be a string");
        }
        if (input === "") {
          return {
            isMatch: false,
            output: ""
          };
        }
        const opts = options || {};
        const format = opts.format || (posix ? utils.toPosixSlashes : null);
        let match = input === glob;
        let output = match && format ? format(input) : input;
        if (match === false) {
          output = format ? format(input) : input;
          match = output === glob;
        }
        if (match === false || opts.capture === true) {
          if (opts.matchBase === true || opts.basename === true) {
            match = picomatch.matchBase(input, regex, options, posix);
          } else {
            match = regex.exec(output);
          }
        }
        return {
          isMatch: Boolean(match),
          match,
          output
        };
      };
      picomatch.matchBase = (input, glob, options, posix = utils.isWindows(options)) => {
        const regex = glob instanceof RegExp ? glob : picomatch.makeRe(glob, options);
        return regex.test(path.basename(input));
      };
      picomatch.isMatch = (str, patterns, options) => picomatch(patterns, options)(str);
      picomatch.parse = (pattern, options) => {
        if (Array.isArray(pattern))
          return pattern.map(p => picomatch.parse(p, options));
        return parse(pattern, {
          ...options,
          fastpaths: false
        });
      };
      picomatch.scan = (input, options) => scan(input, options);
      picomatch.compileRe = (state, options, returnOutput = false, returnState = false) => {
        if (returnOutput === true) {
          return state.output;
        }
        const opts = options || {};
        const prepend = opts.contains ? "" : "^";
        const append = opts.contains ? "" : "$";
        let source = `${ prepend }(?:${ state.output })${ append }`;
        if (state && state.negated === true) {
          source = `^(?!${ source }).*$`;
        }
        const regex = picomatch.toRegex(source, options);
        if (returnState === true) {
          regex.state = state;
        }
        return regex;
      };
      picomatch.makeRe = (input, options = {}, returnOutput = false, returnState = false) => {
        if (!input || typeof input !== "string") {
          throw new TypeError("Expected a non-empty string");
        }
        let parsed = {
          negated: false,
          fastpaths: true
        };
        if (options.fastpaths !== false && (input[0] === "." || input[0] === "*")) {
          parsed.output = parse.fastpaths(input, options);
        }
        if (!parsed.output) {
          parsed = parse(input, options);
        }
        return picomatch.compileRe(parsed, options, returnOutput, returnState);
      };
      picomatch.toRegex = (source, options) => {
        try {
          const opts = options || {};
          return new RegExp(source, opts.flags || (opts.nocase ? "i" : ""));
        } catch (err) {
          if (options && options.debug === true)
            throw err;
          return /$^/;
        }
      };
      picomatch.constants = constants;
      exports$1 = picomatch;
      var exports$1$1 = exports$1;

      function isArray(arg) {
        return Array.isArray(arg);
      }
      function ensureArray(thing) {
        if (isArray(thing))
          return thing;
        if (thing == null)
          return [];
        return [thing];
      }
      const normalizePath = function normalizePath(filename) {
        return filename.split(win32$1.sep).join(posix.sep);
      };
      function getMatcherString(id, resolutionBase) {
        if (resolutionBase === false || isAbsolute(id) || id.startsWith("**")) {
          return normalizePath(id);
        }
        const basePath = normalizePath(resolve(resolutionBase || "")).replace(/[-^$*+?.()|[\]{}]/g, "\\$&");
        return posix.join(basePath, normalizePath(id));
      }
      const createFilter = function createFilter(include, exclude, options) {
        const resolutionBase = options && options.resolve;
        const getMatcher = id => id instanceof RegExp ? id : {
          test: what => {
            const pattern = getMatcherString(id, resolutionBase);
            const fn = exports$1$1(pattern, { dot: true });
            const result = fn(what);
            return result;
          }
        };
        const includeMatchers = ensureArray(include).map(getMatcher);
        const excludeMatchers = ensureArray(exclude).map(getMatcher);
        return function result(id) {
          if (typeof id !== "string")
            return false;
          if (/\0/.test(id))
            return false;
          const pathId = normalizePath(id);
          for (let i = 0; i < excludeMatchers.length; ++i) {
            const matcher = excludeMatchers[i];
            if (matcher.test(pathId))
              return false;
          }
          for (let i = 0; i < includeMatchers.length; ++i) {
            const matcher = includeMatchers[i];
            if (matcher.test(pathId))
              return true;
          }
          return !includeMatchers.length;
        };
      };
      const reservedWords = "break case class catch const continue debugger default delete do else export extends finally for function if import in instanceof let new return super switch this throw try typeof var void while with yield enum await implements package protected static interface private public";
      const builtins = "arguments Infinity NaN undefined null true false eval uneval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Symbol Error EvalError InternalError RangeError ReferenceError SyntaxError TypeError URIError Number Math Date String RegExp Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array Map Set WeakMap WeakSet SIMD ArrayBuffer DataView JSON Promise Generator GeneratorFunction Reflect Proxy Intl";
      const forbiddenIdentifiers = new Set(`${ reservedWords } ${ builtins }`.split(" "));
      forbiddenIdentifiers.add("");
      const makeLegalIdentifier = function makeLegalIdentifier(str) {
        let identifier = str.replace(/-(\w)/g, (_, letter) => letter.toUpperCase()).replace(/[^$_a-zA-Z0-9]/g, "_");
        if (/\d/.test(identifier[0]) || forbiddenIdentifiers.has(identifier)) {
          identifier = `_${ identifier }`;
        }
        return identifier || "_";
      };
      function stringify(obj) {
        return (JSON.stringify(obj) || "undefined").replace(/[\u2028\u2029]/g, char => `\\u${ `000${ char.charCodeAt(0).toString(16) }`.slice(-4) }`);
      }
      function serializeArray(arr, indent, baseIndent) {
        let output = "[";
        const separator = indent ? `\n${ baseIndent }${ indent }` : "";
        for (let i = 0; i < arr.length; i++) {
          const key = arr[i];
          output += `${ i > 0 ? "," : "" }${ separator }${ serialize(key, indent, baseIndent + indent) }`;
        }
        return `${ output }${ indent ? `\n${ baseIndent }` : "" }]`;
      }
      function serializeObject(obj, indent, baseIndent) {
        let output = "{";
        const separator = indent ? `\n${ baseIndent }${ indent }` : "";
        const entries = Object.entries(obj);
        for (let i = 0; i < entries.length; i++) {
          const [key, value] = entries[i];
          const stringKey = makeLegalIdentifier(key) === key ? key : stringify(key);
          output += `${ i > 0 ? "," : "" }${ separator }${ stringKey }:${ indent ? " " : "" }${ serialize(value, indent, baseIndent + indent) }`;
        }
        return `${ output }${ indent ? `\n${ baseIndent }` : "" }}`;
      }
      function serialize(obj, indent, baseIndent) {
        if (typeof obj === "object" && obj !== null) {
          if (Array.isArray(obj))
            return serializeArray(obj, indent, baseIndent);
          if (obj instanceof Date)
            return `new Date(${ obj.getTime() })`;
          if (obj instanceof RegExp)
            return obj.toString();
          return serializeObject(obj, indent, baseIndent);
        }
        if (typeof obj === "number") {
          if (obj === Infinity)
            return "Infinity";
          if (obj === -Infinity)
            return "-Infinity";
          if (obj === 0)
            return 1 / obj === Infinity ? "0" : "-0";
          if (obj !== obj)
            return "NaN";
        }
        if (typeof obj === "symbol") {
          const key = Symbol.keyFor(obj);
          if (key !== undefined)
            return `Symbol.for(${ stringify(key) })`;
        }
        if (typeof obj === "bigint")
          return `${ obj }n`;
        return stringify(obj);
      }
      const hasStringIsWellFormed = "isWellFormed" in String.prototype;
      function isWellFormedString(input) {
        if (hasStringIsWellFormed)
          return input.isWellFormed();
        return !/\p{Surrogate}/u.test(input);
      }
      const dataToEsm = function dataToEsm(data, options = {}) {
        var _a, _b;
        const t = options.compact ? "" : "indent" in options ? options.indent : "\t";
        const _ = options.compact ? "" : " ";
        const n = options.compact ? "" : "\n";
        const declarationType = options.preferConst ? "const" : "var";
        if (options.namedExports === false || typeof data !== "object" || Array.isArray(data) || data instanceof Date || data instanceof RegExp || data === null) {
          const code = serialize(data, options.compact ? null : t, "");
          const magic = _ || (/^[{[\-\/]/.test(code) ? "" : " ");
          return `export default${ magic }${ code };`;
        }
        let maxUnderbarPrefixLength = 0;
        for (const key of Object.keys(data)) {
          const underbarPrefixLength = (_b = (_a = key.match(/^(_+)/)) === null || _a === void 0 ? void 0 : _a[0].length) !== null && _b !== void 0 ? _b : 0;
          if (underbarPrefixLength > maxUnderbarPrefixLength) {
            maxUnderbarPrefixLength = underbarPrefixLength;
          }
        }
        const arbitraryNamePrefix = `${ "_".repeat(maxUnderbarPrefixLength + 1) }arbitrary`;
        let namedExportCode = "";
        const defaultExportRows = [];
        const arbitraryNameExportRows = [];
        for (const [key, value] of Object.entries(data)) {
          if (key === makeLegalIdentifier(key)) {
            if (options.objectShorthand)
              defaultExportRows.push(key);
            else
              defaultExportRows.push(`${ key }:${ _ }${ key }`);
            namedExportCode += `export ${ declarationType } ${ key }${ _ }=${ _ }${ serialize(value, options.compact ? null : t, "") };${ n }`;
          } else {
            defaultExportRows.push(`${ stringify(key) }:${ _ }${ serialize(value, options.compact ? null : t, "") }`);
            if (options.includeArbitraryNames && isWellFormedString(key)) {
              const variableName = `${ arbitraryNamePrefix }${ arbitraryNameExportRows.length }`;
              namedExportCode += `${ declarationType } ${ variableName }${ _ }=${ _ }${ serialize(value, options.compact ? null : t, "") };${ n }`;
              arbitraryNameExportRows.push(`${ variableName } as ${ JSON.stringify(key) }`);
            }
          }
        }
        const arbitraryExportCode = arbitraryNameExportRows.length > 0 ? `export${ _ }{${ n }${ t }${ arbitraryNameExportRows.join(`,${ n }${ t }`) }${ n }};${ n }` : "";
        const defaultExportCode = `export default${ _ }{${ n }${ t }${ defaultExportRows.join(`,${ n }${ t }`) }${ n }};${ n }`;
        return `${ namedExportCode }${ arbitraryExportCode }${ defaultExportCode }`;
      };

      function json(options) {
        if (options === void 0)
          options = {};
        var filter = createFilter(options.include, options.exclude);
        var indent = "indent" in options ? options.indent : "\t";
        return {
          name: "json",
          transform: function transform(code, id) {
            if (id.slice(-5) !== ".json" || !filter(id)) {
              return null;
            }
            try {
              var parsed = JSON.parse(code);
              return {
                code: dataToEsm(parsed, {
                  preferConst: options.preferConst,
                  compact: options.compact,
                  namedExports: options.namedExports,
                  indent: indent
                }),
                map: { mappings: "" }
              };
            } catch (err) {
              var message = "Could not parse JSON file";
              this.error({
                message: message,
                id: id,
                cause: err
              });
              return null;
            }
          }
        };
      }

    })
  };
}));
