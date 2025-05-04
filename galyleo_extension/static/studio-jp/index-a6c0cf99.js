System.register(['./__rootModule___commonjs-entry-43c0966d.js', './npm_functional-red-black-tree@1.0-6ba70b23.js', './index-67b8b1e9.js'], (function (exports) {
  var __contextModule__ = typeof module !== 'undefined' ? module : arguments[1];
;
  var exports$14, Buffer$a, INSPECT_MAX_BYTES, kMaxLength, exports$1$w, y, process$a, _typeof, _inherits$4, _createSuper, _classCallCheck, X, et, exports$15, _createClass, Path, _slicedToArray, _asyncToGenerator, _createForOfIteratorHelper, _defineProperty, resource, dissoc, changeIndent, select, waitFor, _toConsumableArray, arr, deferred, parallel, registerExtension, _get, _getPrototypeOf, Resource, _inherits2, _events2, exports$1$x, parse, findDecls;
  return {
    setters: [function (module) {
      exports$14 = module.a3;
      Buffer$a = module.dI;
      INSPECT_MAX_BYTES = module.dJ;
      kMaxLength = module.dK;
      exports$1$w = module.dL;
      y = module.Q;
      process$a = module.a4;
      _typeof = module.a5;
      _inherits$4 = module.d;
      _createSuper = module.e;
      _classCallCheck = module.f;
      X = module.X;
      et = module.dM;
      exports$15 = module.dN;
      _createClass = module.g;
      Path = module.bw;
      _slicedToArray = module.o;
      _asyncToGenerator = module._;
      _createForOfIteratorHelper = module.a6;
      _defineProperty = module.ah;
      resource = module.ac;
      dissoc = module.y;
      changeIndent = module.dp;
      select = module.aW;
      waitFor = module.aE;
      _toConsumableArray = module.r;
      arr = module.ba;
      deferred = module.a9;
      parallel = module.dO;
      registerExtension = module.ai;
      _get = module.bG;
      _getPrototypeOf = module.bH;
      Resource = module.cf;
    }, function (module) {
      _inherits2 = module._;
      _events2 = module.a;
      exports$1$x = module.e;
    }, function (module) {
      parse = module.p;
      findDecls = module.Y;
    }],
    execute: (function () {

      var _buffer2 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        'default': exports$14,
        Buffer: Buffer$a,
        INSPECT_MAX_BYTES: INSPECT_MAX_BYTES,
        kMaxLength: kMaxLength
      });

      var _global$r = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
      var exports$13 = {};
      var Mutation$1 = _global$r.MutationObserver || _global$r.WebKitMutationObserver;
      var scheduleDrain$1;
      {
        if (Mutation$1) {
          var called = 0;
          var observer = new Mutation$1(nextTick$1);
          var element = _global$r.document.createTextNode("");
          observer.observe(element, { characterData: true });
          scheduleDrain$1 = function () {
            element.data = called = ++called % 2;
          };
        } else if (!_global$r.setImmediate && typeof _global$r.MessageChannel !== "undefined") {
          var channel = new _global$r.MessageChannel();
          channel.port1.onmessage = nextTick$1;
          scheduleDrain$1 = function () {
            channel.port2.postMessage(0);
          };
        } else if ("document" in _global$r && "onreadystatechange" in _global$r.document.createElement("script")) {
          scheduleDrain$1 = function () {
            var scriptEl = _global$r.document.createElement("script");
            scriptEl.onreadystatechange = function () {
              nextTick$1();
              scriptEl.onreadystatechange = null;
              scriptEl.parentNode.removeChild(scriptEl);
              scriptEl = null;
            };
            _global$r.document.documentElement.appendChild(scriptEl);
          };
        } else {
          scheduleDrain$1 = function () {
            setTimeout(nextTick$1, 0);
          };
        }
      }
      var draining$1;
      var queue$2 = [];
      function nextTick$1() {
        draining$1 = true;
        var i, oldQueue;
        var len = queue$2.length;
        while (len) {
          oldQueue = queue$2;
          queue$2 = [];
          i = -1;
          while (++i < len) {
            oldQueue[i]();
          }
          len = queue$2.length;
        }
        draining$1 = false;
      }
      exports$13 = immediate$3;
      function immediate$3(task) {
        if (queue$2.push(task) === 1 && !draining$1) {
          scheduleDrain$1();
        }
      }
      var exports$1$v = exports$13;

      var exports$12 = {};
      var getRandomValues = typeof crypto != "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != "undefined" && typeof window.msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto);
      if (getRandomValues) {
        var rnds8 = new Uint8Array(16);
        exports$12 = function whatwgRNG() {
          getRandomValues(rnds8);
          return rnds8;
        };
      } else {
        var rnds = new Array(16);
        exports$12 = function mathRNG() {
          for (var i = 0, r; i < 16; i++) {
            if ((i & 3) === 0)
              r = Math.random() * 4294967296;
            rnds[i] = r >>> ((i & 3) << 3) & 255;
          }
          return rnds;
        };
      }
      var _rng = exports$12;

      var exports$11 = {};
      var byteToHex = [];
      for (var i$1 = 0; i$1 < 256; ++i$1) {
        byteToHex[i$1] = (i$1 + 256).toString(16).substr(1);
      }
      function bytesToUuid$2(buf, offset) {
        var i = offset || 0;
        var bth = byteToHex;
        return [
          bth[buf[i++]],
          bth[buf[i++]],
          bth[buf[i++]],
          bth[buf[i++]],
          "-",
          bth[buf[i++]],
          bth[buf[i++]],
          "-",
          bth[buf[i++]],
          bth[buf[i++]],
          "-",
          bth[buf[i++]],
          bth[buf[i++]],
          "-",
          bth[buf[i++]],
          bth[buf[i++]],
          bth[buf[i++]],
          bth[buf[i++]],
          bth[buf[i++]],
          bth[buf[i++]]
        ].join("");
      }
      exports$11 = bytesToUuid$2;
      var _bytesToUuid = exports$11;

      var exports$10 = {};
      var rng$1 = _rng;
      var bytesToUuid$1 = _bytesToUuid;
      var _nodeId;
      var _clockseq;
      var _lastMSecs = 0;
      var _lastNSecs = 0;
      function v1$1(options, buf, offset) {
        var i = buf && offset || 0;
        var b = buf || [];
        options = options || {};
        var node = options.node || _nodeId;
        var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;
        if (node == null || clockseq == null) {
          var seedBytes = rng$1();
          if (node == null) {
            node = _nodeId = [
              seedBytes[0] | 1,
              seedBytes[1],
              seedBytes[2],
              seedBytes[3],
              seedBytes[4],
              seedBytes[5]
            ];
          }
          if (clockseq == null) {
            clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 16383;
          }
        }
        var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();
        var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;
        var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000;
        if (dt < 0 && options.clockseq === undefined) {
          clockseq = clockseq + 1 & 16383;
        }
        if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
          nsecs = 0;
        }
        if (nsecs >= 10000) {
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        }
        _lastMSecs = msecs;
        _lastNSecs = nsecs;
        _clockseq = clockseq;
        msecs += 12219292800000;
        var tl = ((msecs & 268435455) * 10000 + nsecs) % 4294967296;
        b[i++] = tl >>> 24 & 255;
        b[i++] = tl >>> 16 & 255;
        b[i++] = tl >>> 8 & 255;
        b[i++] = tl & 255;
        var tmh = msecs / 4294967296 * 10000 & 268435455;
        b[i++] = tmh >>> 8 & 255;
        b[i++] = tmh & 255;
        b[i++] = tmh >>> 24 & 15 | 16;
        b[i++] = tmh >>> 16 & 255;
        b[i++] = clockseq >>> 8 | 128;
        b[i++] = clockseq & 255;
        for (var n = 0; n < 6; ++n) {
          b[i + n] = node[n];
        }
        return buf ? buf : bytesToUuid$1(b);
      }
      exports$10 = v1$1;
      var _v = exports$10;

      var exports$$ = {};
      var rng = _rng;
      var bytesToUuid = _bytesToUuid;
      function v4$1(options, buf, offset) {
        var i = buf && offset || 0;
        if (typeof options == "string") {
          buf = options === "binary" ? new Array(16) : null;
          options = null;
        }
        options = options || {};
        var rnds = options.random || (options.rng || rng)();
        rnds[6] = rnds[6] & 15 | 64;
        rnds[8] = rnds[8] & 63 | 128;
        if (buf) {
          for (var ii = 0; ii < 16; ++ii) {
            buf[i + ii] = rnds[ii];
          }
        }
        return buf || bytesToUuid(rnds);
      }
      exports$$ = v4$1;
      var _v2 = exports$$;

      var exports$_ = {};
      var v1 = _v;
      var v4 = _v2;
      var uuid$2 = v4;
      uuid$2.v1 = v1;
      uuid$2.v4 = v4;
      exports$_ = uuid$2;
      var exports$1$u = exports$_;

      var _global$q = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
      var exports$Z = {};
      (function (factory) {
        exports$Z = factory();
      }(function (undefined$1) {
        var hex_chr = [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "a",
            "b",
            "c",
            "d",
            "e",
            "f"
          ];
        function md5cycle(x, k) {
          var a = x[0], b = x[1], c = x[2], d = x[3];
          a += (b & c | ~b & d) + k[0] - 680876936 | 0;
          a = (a << 7 | a >>> 25) + b | 0;
          d += (a & b | ~a & c) + k[1] - 389564586 | 0;
          d = (d << 12 | d >>> 20) + a | 0;
          c += (d & a | ~d & b) + k[2] + 606105819 | 0;
          c = (c << 17 | c >>> 15) + d | 0;
          b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
          b = (b << 22 | b >>> 10) + c | 0;
          a += (b & c | ~b & d) + k[4] - 176418897 | 0;
          a = (a << 7 | a >>> 25) + b | 0;
          d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
          d = (d << 12 | d >>> 20) + a | 0;
          c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
          c = (c << 17 | c >>> 15) + d | 0;
          b += (c & d | ~c & a) + k[7] - 45705983 | 0;
          b = (b << 22 | b >>> 10) + c | 0;
          a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
          a = (a << 7 | a >>> 25) + b | 0;
          d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
          d = (d << 12 | d >>> 20) + a | 0;
          c += (d & a | ~d & b) + k[10] - 42063 | 0;
          c = (c << 17 | c >>> 15) + d | 0;
          b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
          b = (b << 22 | b >>> 10) + c | 0;
          a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
          a = (a << 7 | a >>> 25) + b | 0;
          d += (a & b | ~a & c) + k[13] - 40341101 | 0;
          d = (d << 12 | d >>> 20) + a | 0;
          c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
          c = (c << 17 | c >>> 15) + d | 0;
          b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
          b = (b << 22 | b >>> 10) + c | 0;
          a += (b & d | c & ~d) + k[1] - 165796510 | 0;
          a = (a << 5 | a >>> 27) + b | 0;
          d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
          d = (d << 9 | d >>> 23) + a | 0;
          c += (d & b | a & ~b) + k[11] + 643717713 | 0;
          c = (c << 14 | c >>> 18) + d | 0;
          b += (c & a | d & ~a) + k[0] - 373897302 | 0;
          b = (b << 20 | b >>> 12) + c | 0;
          a += (b & d | c & ~d) + k[5] - 701558691 | 0;
          a = (a << 5 | a >>> 27) + b | 0;
          d += (a & c | b & ~c) + k[10] + 38016083 | 0;
          d = (d << 9 | d >>> 23) + a | 0;
          c += (d & b | a & ~b) + k[15] - 660478335 | 0;
          c = (c << 14 | c >>> 18) + d | 0;
          b += (c & a | d & ~a) + k[4] - 405537848 | 0;
          b = (b << 20 | b >>> 12) + c | 0;
          a += (b & d | c & ~d) + k[9] + 568446438 | 0;
          a = (a << 5 | a >>> 27) + b | 0;
          d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
          d = (d << 9 | d >>> 23) + a | 0;
          c += (d & b | a & ~b) + k[3] - 187363961 | 0;
          c = (c << 14 | c >>> 18) + d | 0;
          b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
          b = (b << 20 | b >>> 12) + c | 0;
          a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
          a = (a << 5 | a >>> 27) + b | 0;
          d += (a & c | b & ~c) + k[2] - 51403784 | 0;
          d = (d << 9 | d >>> 23) + a | 0;
          c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
          c = (c << 14 | c >>> 18) + d | 0;
          b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
          b = (b << 20 | b >>> 12) + c | 0;
          a += (b ^ c ^ d) + k[5] - 378558 | 0;
          a = (a << 4 | a >>> 28) + b | 0;
          d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
          d = (d << 11 | d >>> 21) + a | 0;
          c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
          c = (c << 16 | c >>> 16) + d | 0;
          b += (c ^ d ^ a) + k[14] - 35309556 | 0;
          b = (b << 23 | b >>> 9) + c | 0;
          a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
          a = (a << 4 | a >>> 28) + b | 0;
          d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
          d = (d << 11 | d >>> 21) + a | 0;
          c += (d ^ a ^ b) + k[7] - 155497632 | 0;
          c = (c << 16 | c >>> 16) + d | 0;
          b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
          b = (b << 23 | b >>> 9) + c | 0;
          a += (b ^ c ^ d) + k[13] + 681279174 | 0;
          a = (a << 4 | a >>> 28) + b | 0;
          d += (a ^ b ^ c) + k[0] - 358537222 | 0;
          d = (d << 11 | d >>> 21) + a | 0;
          c += (d ^ a ^ b) + k[3] - 722521979 | 0;
          c = (c << 16 | c >>> 16) + d | 0;
          b += (c ^ d ^ a) + k[6] + 76029189 | 0;
          b = (b << 23 | b >>> 9) + c | 0;
          a += (b ^ c ^ d) + k[9] - 640364487 | 0;
          a = (a << 4 | a >>> 28) + b | 0;
          d += (a ^ b ^ c) + k[12] - 421815835 | 0;
          d = (d << 11 | d >>> 21) + a | 0;
          c += (d ^ a ^ b) + k[15] + 530742520 | 0;
          c = (c << 16 | c >>> 16) + d | 0;
          b += (c ^ d ^ a) + k[2] - 995338651 | 0;
          b = (b << 23 | b >>> 9) + c | 0;
          a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
          a = (a << 6 | a >>> 26) + b | 0;
          d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
          d = (d << 10 | d >>> 22) + a | 0;
          c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
          c = (c << 15 | c >>> 17) + d | 0;
          b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
          b = (b << 21 | b >>> 11) + c | 0;
          a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
          a = (a << 6 | a >>> 26) + b | 0;
          d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
          d = (d << 10 | d >>> 22) + a | 0;
          c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
          c = (c << 15 | c >>> 17) + d | 0;
          b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
          b = (b << 21 | b >>> 11) + c | 0;
          a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
          a = (a << 6 | a >>> 26) + b | 0;
          d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
          d = (d << 10 | d >>> 22) + a | 0;
          c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
          c = (c << 15 | c >>> 17) + d | 0;
          b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
          b = (b << 21 | b >>> 11) + c | 0;
          a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
          a = (a << 6 | a >>> 26) + b | 0;
          d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
          d = (d << 10 | d >>> 22) + a | 0;
          c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
          c = (c << 15 | c >>> 17) + d | 0;
          b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
          b = (b << 21 | b >>> 11) + c | 0;
          x[0] = a + x[0] | 0;
          x[1] = b + x[1] | 0;
          x[2] = c + x[2] | 0;
          x[3] = d + x[3] | 0;
        }
        function md5blk(s) {
          var md5blks = [], i;
          for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
          }
          return md5blks;
        }
        function md5blk_array(a) {
          var md5blks = [], i;
          for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
          }
          return md5blks;
        }
        function md51(s) {
          var n = s.length, state = [
              1732584193,
              -271733879,
              -1732584194,
              271733878
            ], i, length, tail, tmp, lo, hi;
          for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk(s.substring(i - 64, i)));
          }
          s = s.substring(i - 64);
          length = s.length;
          tail = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ];
          for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
          }
          tail[i >> 2] |= 128 << (i % 4 << 3);
          if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
              tail[i] = 0;
            }
          }
          tmp = n * 8;
          tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
          lo = parseInt(tmp[2], 16);
          hi = parseInt(tmp[1], 16) || 0;
          tail[14] = lo;
          tail[15] = hi;
          md5cycle(state, tail);
          return state;
        }
        function md51_array(a) {
          var n = a.length, state = [
              1732584193,
              -271733879,
              -1732584194,
              271733878
            ], i, length, tail, tmp, lo, hi;
          for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
          }
          a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
          length = a.length;
          tail = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ];
          for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= a[i] << (i % 4 << 3);
          }
          tail[i >> 2] |= 128 << (i % 4 << 3);
          if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
              tail[i] = 0;
            }
          }
          tmp = n * 8;
          tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
          lo = parseInt(tmp[2], 16);
          hi = parseInt(tmp[1], 16) || 0;
          tail[14] = lo;
          tail[15] = hi;
          md5cycle(state, tail);
          return state;
        }
        function rhex(n) {
          var s = "", j;
          for (j = 0; j < 4; j += 1) {
            s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
          }
          return s;
        }
        function hex(x) {
          var i;
          for (i = 0; i < x.length; i += 1) {
            x[i] = rhex(x[i]);
          }
          return x.join("");
        }
        if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") ;
        if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
          (function () {
            function clamp(val, length) {
              val = val | 0 || 0;
              if (val < 0) {
                return Math.max(val + length, 0);
              }
              return Math.min(val, length);
            }
            ArrayBuffer.prototype.slice = function (from, to) {
              var length = (this || _global$q).byteLength, begin = clamp(from, length), end = length, num, target, targetArray, sourceArray;
              if (to !== undefined$1) {
                end = clamp(to, length);
              }
              if (begin > end) {
                return new ArrayBuffer(0);
              }
              num = end - begin;
              target = new ArrayBuffer(num);
              targetArray = new Uint8Array(target);
              sourceArray = new Uint8Array(this || _global$q, begin, num);
              targetArray.set(sourceArray);
              return target;
            };
          }());
        }
        function toUtf8(str) {
          if (/[\u0080-\uFFFF]/.test(str)) {
            str = unescape(encodeURIComponent(str));
          }
          return str;
        }
        function utf8Str2ArrayBuffer(str, returnUInt8Array) {
          var length = str.length, buff = new ArrayBuffer(length), arr = new Uint8Array(buff), i;
          for (i = 0; i < length; i += 1) {
            arr[i] = str.charCodeAt(i);
          }
          return returnUInt8Array ? arr : buff;
        }
        function arrayBuffer2Utf8Str(buff) {
          return String.fromCharCode.apply(null, new Uint8Array(buff));
        }
        function concatenateArrayBuffers(first, second, returnUInt8Array) {
          var result = new Uint8Array(first.byteLength + second.byteLength);
          result.set(new Uint8Array(first));
          result.set(new Uint8Array(second), first.byteLength);
          return returnUInt8Array ? result : result.buffer;
        }
        function hexToBinaryString(hex) {
          var bytes = [], length = hex.length, x;
          for (x = 0; x < length - 1; x += 2) {
            bytes.push(parseInt(hex.substr(x, 2), 16));
          }
          return String.fromCharCode.apply(String, bytes);
        }
        function SparkMD5() {
          this.reset();
        }
        SparkMD5.prototype.append = function (str) {
          this.appendBinary(toUtf8(str));
          return this || _global$q;
        };
        SparkMD5.prototype.appendBinary = function (contents) {
          (this || _global$q)._buff += contents;
          (this || _global$q)._length += contents.length;
          var length = (this || _global$q)._buff.length, i;
          for (i = 64; i <= length; i += 64) {
            md5cycle((this || _global$q)._hash, md5blk((this || _global$q)._buff.substring(i - 64, i)));
          }
          (this || _global$q)._buff = (this || _global$q)._buff.substring(i - 64);
          return this || _global$q;
        };
        SparkMD5.prototype.end = function (raw) {
          var buff = (this || _global$q)._buff, length = buff.length, i, tail = [
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0
            ], ret;
          for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
          }
          this._finish(tail, length);
          ret = hex((this || _global$q)._hash);
          if (raw) {
            ret = hexToBinaryString(ret);
          }
          this.reset();
          return ret;
        };
        SparkMD5.prototype.reset = function () {
          (this || _global$q)._buff = "";
          (this || _global$q)._length = 0;
          (this || _global$q)._hash = [
            1732584193,
            -271733879,
            -1732584194,
            271733878
          ];
          return this || _global$q;
        };
        SparkMD5.prototype.getState = function () {
          return {
            buff: (this || _global$q)._buff,
            length: (this || _global$q)._length,
            hash: (this || _global$q)._hash
          };
        };
        SparkMD5.prototype.setState = function (state) {
          (this || _global$q)._buff = state.buff;
          (this || _global$q)._length = state.length;
          (this || _global$q)._hash = state.hash;
          return this || _global$q;
        };
        SparkMD5.prototype.destroy = function () {
          delete (this || _global$q)._hash;
          delete (this || _global$q)._buff;
          delete (this || _global$q)._length;
        };
        SparkMD5.prototype._finish = function (tail, length) {
          var i = length, tmp, lo, hi;
          tail[i >> 2] |= 128 << (i % 4 << 3);
          if (i > 55) {
            md5cycle((this || _global$q)._hash, tail);
            for (i = 0; i < 16; i += 1) {
              tail[i] = 0;
            }
          }
          tmp = (this || _global$q)._length * 8;
          tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
          lo = parseInt(tmp[2], 16);
          hi = parseInt(tmp[1], 16) || 0;
          tail[14] = lo;
          tail[15] = hi;
          md5cycle((this || _global$q)._hash, tail);
        };
        SparkMD5.hash = function (str, raw) {
          return SparkMD5.hashBinary(toUtf8(str), raw);
        };
        SparkMD5.hashBinary = function (content, raw) {
          var hash = md51(content), ret = hex(hash);
          return raw ? hexToBinaryString(ret) : ret;
        };
        SparkMD5.ArrayBuffer = function () {
          this.reset();
        };
        SparkMD5.ArrayBuffer.prototype.append = function (arr) {
          var buff = concatenateArrayBuffers((this || _global$q)._buff.buffer, arr, true), length = buff.length, i;
          (this || _global$q)._length += arr.byteLength;
          for (i = 64; i <= length; i += 64) {
            md5cycle((this || _global$q)._hash, md5blk_array(buff.subarray(i - 64, i)));
          }
          (this || _global$q)._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
          return this || _global$q;
        };
        SparkMD5.ArrayBuffer.prototype.end = function (raw) {
          var buff = (this || _global$q)._buff, length = buff.length, tail = [
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0
            ], i, ret;
          for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff[i] << (i % 4 << 3);
          }
          this._finish(tail, length);
          ret = hex((this || _global$q)._hash);
          if (raw) {
            ret = hexToBinaryString(ret);
          }
          this.reset();
          return ret;
        };
        SparkMD5.ArrayBuffer.prototype.reset = function () {
          (this || _global$q)._buff = new Uint8Array(0);
          (this || _global$q)._length = 0;
          (this || _global$q)._hash = [
            1732584193,
            -271733879,
            -1732584194,
            271733878
          ];
          return this || _global$q;
        };
        SparkMD5.ArrayBuffer.prototype.getState = function () {
          var state = SparkMD5.prototype.getState.call(this || _global$q);
          state.buff = arrayBuffer2Utf8Str(state.buff);
          return state;
        };
        SparkMD5.ArrayBuffer.prototype.setState = function (state) {
          state.buff = utf8Str2ArrayBuffer(state.buff, true);
          return SparkMD5.prototype.setState.call(this || _global$q, state);
        };
        SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
        SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;
        SparkMD5.ArrayBuffer.hash = function (arr, raw) {
          var hash = md51_array(new Uint8Array(arr)), ret = hex(hash);
          return raw ? hexToBinaryString(ret) : ret;
        };
        return SparkMD5;
      }));
      var exports$1$t = exports$Z;

      var exports$Y = {};
      exports$Y.stringify = function stringify(input) {
        var queue = [];
        queue.push({ obj: input });
        var res = "";
        var next, obj, prefix, val, i, arrayPrefix, keys, k, key, value, objPrefix;
        while (next = queue.pop()) {
          obj = next.obj;
          prefix = next.prefix || "";
          val = next.val || "";
          res += prefix;
          if (val) {
            res += val;
          } else if (typeof obj !== "object") {
            res += typeof obj === "undefined" ? null : JSON.stringify(obj);
          } else if (obj === null) {
            res += "null";
          } else if (Array.isArray(obj)) {
            queue.push({ val: "]" });
            for (i = obj.length - 1; i >= 0; i--) {
              arrayPrefix = i === 0 ? "" : ",";
              queue.push({
                obj: obj[i],
                prefix: arrayPrefix
              });
            }
            queue.push({ val: "[" });
          } else {
            keys = [];
            for (k in obj) {
              if (obj.hasOwnProperty(k)) {
                keys.push(k);
              }
            }
            queue.push({ val: "}" });
            for (i = keys.length - 1; i >= 0; i--) {
              key = keys[i];
              value = obj[key];
              objPrefix = i > 0 ? "," : "";
              objPrefix += JSON.stringify(key) + ":";
              queue.push({
                obj: value,
                prefix: objPrefix
              });
            }
            queue.push({ val: "{" });
          }
        }
        return res;
      };
      function pop$1(obj, stack, metaStack) {
        var lastMetaElement = metaStack[metaStack.length - 1];
        if (obj === lastMetaElement.element) {
          metaStack.pop();
          lastMetaElement = metaStack[metaStack.length - 1];
        }
        var element = lastMetaElement.element;
        var lastElementIndex = lastMetaElement.index;
        if (Array.isArray(element)) {
          element.push(obj);
        } else if (lastElementIndex === stack.length - 2) {
          var key = stack.pop();
          element[key] = obj;
        } else {
          stack.push(obj);
        }
      }
      exports$Y.parse = function (str) {
        var stack = [];
        var metaStack = [];
        var i = 0;
        var collationIndex, parsedNum, numChar;
        var parsedString, lastCh, numConsecutiveSlashes, ch;
        var arrayElement, objElement;
        while (true) {
          collationIndex = str[i++];
          if (collationIndex === "}" || collationIndex === "]" || typeof collationIndex === "undefined") {
            if (stack.length === 1) {
              return stack.pop();
            } else {
              pop$1(stack.pop(), stack, metaStack);
              continue;
            }
          }
          switch (collationIndex) {
          case " ":
          case "\t":
          case "\n":
          case ":":
          case ",":
            break;
          case "n":
            i += 3;
            pop$1(null, stack, metaStack);
            break;
          case "t":
            i += 3;
            pop$1(true, stack, metaStack);
            break;
          case "f":
            i += 4;
            pop$1(false, stack, metaStack);
            break;
          case "0":
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
          case "-":
            parsedNum = "";
            i--;
            while (true) {
              numChar = str[i++];
              if (/[\d\.\-e\+]/.test(numChar)) {
                parsedNum += numChar;
              } else {
                i--;
                break;
              }
            }
            pop$1(parseFloat(parsedNum), stack, metaStack);
            break;
          case "\"":
            parsedString = "";
            lastCh = void 0;
            numConsecutiveSlashes = 0;
            while (true) {
              ch = str[i++];
              if (ch !== "\"" || lastCh === "\\" && numConsecutiveSlashes % 2 === 1) {
                parsedString += ch;
                lastCh = ch;
                if (lastCh === "\\") {
                  numConsecutiveSlashes++;
                } else {
                  numConsecutiveSlashes = 0;
                }
              } else {
                break;
              }
            }
            pop$1(JSON.parse("\"" + parsedString + "\""), stack, metaStack);
            break;
          case "[":
            arrayElement = {
              element: [],
              index: stack.length
            };
            stack.push(arrayElement.element);
            metaStack.push(arrayElement);
            break;
          case "{":
            objElement = {
              element: {},
              index: stack.length
            };
            stack.push(objElement.element);
            metaStack.push(objElement);
            break;
          default:
            throw new Error("unexpectedly reached end of input: " + collationIndex);
          }
        }
      };
      exports$Y.stringify; exports$Y.parse;

      var exports$X = {};
      exports$X = argsArray;
      function argsArray(fun) {
        return function () {
          var len = arguments.length;
          if (len) {
            var args = [];
            var i = -1;
            while (++i < len) {
              args[i] = arguments[i];
            }
            return fun.call(this, args);
          } else {
            return fun.call(this, []);
          }
        };
      }
      var exports$1$s = exports$X;

      var _global$p = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
      var exports$W = {};
      var process$9 = process$a;
      function _interopDefault$7(ex) {
        return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
      }
      var immediate$2 = _interopDefault$7(exports$1$v);
      var uuidV4$1 = _interopDefault$7(exports$1$u);
      var Md5$1 = _interopDefault$7(exports$1$t);
      var vuvuzela$1 = _interopDefault$7(exports$Y);
      var getArguments$2 = _interopDefault$7(exports$1$s);
      var inherits$8 = _interopDefault$7(exports$1$w);
      var events$2 = y;
      function mangle$1(key) {
        return "$" + key;
      }
      function unmangle$1(key) {
        return key.substring(1);
      }
      function Map$1$1() {
        this._store = {};
      }
      Map$1$1.prototype.get = function (key) {
        var mangled = mangle$1(key);
        return this._store[mangled];
      };
      Map$1$1.prototype.set = function (key, value) {
        var mangled = mangle$1(key);
        this._store[mangled] = value;
        return true;
      };
      Map$1$1.prototype.has = function (key) {
        var mangled = mangle$1(key);
        return mangled in this._store;
      };
      Map$1$1.prototype.delete = function (key) {
        var mangled = mangle$1(key);
        var res = mangled in this._store;
        delete this._store[mangled];
        return res;
      };
      Map$1$1.prototype.forEach = function (cb) {
        var keys = Object.keys(this._store);
        for (var i = 0, len = keys.length; i < len; i++) {
          var key = keys[i];
          var value = this._store[key];
          key = unmangle$1(key);
          cb(value, key);
        }
      };
      Object.defineProperty(Map$1$1.prototype, "size", {
        get: function () {
          return Object.keys(this._store).length;
        }
      });
      function Set$1$1(array) {
        this._store = new Map$1$1();
        if (array && Array.isArray(array)) {
          for (var i = 0, len = array.length; i < len; i++) {
            this.add(array[i]);
          }
        }
      }
      Set$1$1.prototype.add = function (key) {
        return this._store.set(key, true);
      };
      Set$1$1.prototype.has = function (key) {
        return this._store.has(key);
      };
      Set$1$1.prototype.forEach = function (cb) {
        this._store.forEach(function (value, key) {
          cb(key);
        });
      };
      Object.defineProperty(Set$1$1.prototype, "size", {
        get: function () {
          return this._store.size;
        }
      });
      function supportsMapAndSet$1() {
        if (typeof Symbol === "undefined" || typeof Map === "undefined" || typeof Set === "undefined") {
          return false;
        }
        var prop = Object.getOwnPropertyDescriptor(Map, Symbol.species);
        return prop && "get" in prop && Map[Symbol.species] === Map;
      }
      var ExportedSet;
      var ExportedMap;
      {
        if (supportsMapAndSet$1()) {
          ExportedSet = Set;
          ExportedMap = Map;
        } else {
          ExportedSet = Set$1$1;
          ExportedMap = Map$1$1;
        }
      }
      function isBinaryObject$1(object) {
        return typeof ArrayBuffer !== "undefined" && object instanceof ArrayBuffer || typeof Blob !== "undefined" && object instanceof Blob;
      }
      function cloneArrayBuffer$1(buff) {
        if (typeof buff.slice === "function") {
          return buff.slice(0);
        }
        var target = new ArrayBuffer(buff.byteLength);
        var targetArray = new Uint8Array(target);
        var sourceArray = new Uint8Array(buff);
        targetArray.set(sourceArray);
        return target;
      }
      function cloneBinaryObject$1(object) {
        if (object instanceof ArrayBuffer) {
          return cloneArrayBuffer$1(object);
        }
        var size = object.size;
        var type = object.type;
        if (typeof object.slice === "function") {
          return object.slice(0, size, type);
        }
        return object.webkitSlice(0, size, type);
      }
      var funcToString$1 = Function.prototype.toString;
      var objectCtorString$1 = funcToString$1.call(Object);
      function isPlainObject$1(value) {
        var proto = Object.getPrototypeOf(value);
        if (proto === null) {
          return true;
        }
        var Ctor = proto.constructor;
        return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString$1.call(Ctor) == objectCtorString$1;
      }
      function clone$2(object) {
        var newObject;
        var i;
        var len;
        if (!object || typeof object !== "object") {
          return object;
        }
        if (Array.isArray(object)) {
          newObject = [];
          for (i = 0, len = object.length; i < len; i++) {
            newObject[i] = clone$2(object[i]);
          }
          return newObject;
        }
        if (object instanceof Date) {
          return object.toISOString();
        }
        if (isBinaryObject$1(object)) {
          return cloneBinaryObject$1(object);
        }
        if (!isPlainObject$1(object)) {
          return object;
        }
        newObject = {};
        for (i in object) {
          if (Object.prototype.hasOwnProperty.call(object, i)) {
            var value = clone$2(object[i]);
            if (typeof value !== "undefined") {
              newObject[i] = value;
            }
          }
        }
        return newObject;
      }
      function once$1(fun) {
        var called = false;
        return getArguments$2(function (args) {
          if (called) {
            throw new Error("once called more than once");
          } else {
            called = true;
            fun.apply(this, args);
          }
        });
      }
      function toPromise$1(func) {
        return getArguments$2(function (args) {
          args = clone$2(args);
          var self = this;
          var usedCB = typeof args[args.length - 1] === "function" ? args.pop() : false;
          var promise = new Promise(function (fulfill, reject) {
            var resp;
            try {
              var callback = once$1(function (err, mesg) {
                if (err) {
                  reject(err);
                } else {
                  fulfill(mesg);
                }
              });
              args.push(callback);
              resp = func.apply(self, args);
              if (resp && typeof resp.then === "function") {
                fulfill(resp);
              }
            } catch (e) {
              reject(e);
            }
          });
          if (usedCB) {
            promise.then(function (result) {
              usedCB(null, result);
            }, usedCB);
          }
          return promise;
        });
      }
      function logApiCall$1(self, name, args) {
        if (self.constructor.listeners("debug").length) {
          var logArgs = [
            "api",
            self.name,
            name
          ];
          for (var i = 0; i < args.length - 1; i++) {
            logArgs.push(args[i]);
          }
          self.constructor.emit("debug", logArgs);
          var origCallback = args[args.length - 1];
          args[args.length - 1] = function (err, res) {
            var responseArgs = [
              "api",
              self.name,
              name
            ];
            responseArgs = responseArgs.concat(err ? [
              "error",
              err
            ] : [
              "success",
              res
            ]);
            self.constructor.emit("debug", responseArgs);
            origCallback(err, res);
          };
        }
      }
      function adapterFun$1(name, callback) {
        return toPromise$1(getArguments$2(function (args) {
          if (this._closed) {
            return Promise.reject(new Error("database is closed"));
          }
          if (this._destroyed) {
            return Promise.reject(new Error("database is destroyed"));
          }
          var self = this;
          logApiCall$1(self, name, args);
          if (!this.taskqueue.isReady) {
            return new Promise(function (fulfill, reject) {
              self.taskqueue.addTask(function (failed) {
                if (failed) {
                  reject(failed);
                } else {
                  fulfill(self[name].apply(self, args));
                }
              });
            });
          }
          return callback.apply(this, args);
        }));
      }
      function pick$1(obj, arr) {
        var res = {};
        for (var i = 0, len = arr.length; i < len; i++) {
          var prop = arr[i];
          if (prop in obj) {
            res[prop] = obj[prop];
          }
        }
        return res;
      }
      var MAX_NUM_CONCURRENT_REQUESTS$1 = 6;
      function identityFunction$1(x) {
        return x;
      }
      function formatResultForOpenRevsGet$1(result) {
        return [{ ok: result }];
      }
      function bulkGet$1(db, opts, callback) {
        var requests = opts.docs;
        var requestsById = new ExportedMap();
        requests.forEach(function (request) {
          if (requestsById.has(request.id)) {
            requestsById.get(request.id).push(request);
          } else {
            requestsById.set(request.id, [request]);
          }
        });
        var numDocs = requestsById.size;
        var numDone = 0;
        var perDocResults = new Array(numDocs);
        function collapseResultsAndFinish() {
          var results = [];
          perDocResults.forEach(function (res) {
            res.docs.forEach(function (info) {
              results.push({
                id: res.id,
                docs: [info]
              });
            });
          });
          callback(null, { results: results });
        }
        function checkDone() {
          if (++numDone === numDocs) {
            collapseResultsAndFinish();
          }
        }
        function gotResult(docIndex, id, docs) {
          perDocResults[docIndex] = {
            id: id,
            docs: docs
          };
          checkDone();
        }
        var allRequests = [];
        requestsById.forEach(function (value, key) {
          allRequests.push(key);
        });
        var i = 0;
        function nextBatch() {
          if (i >= allRequests.length) {
            return;
          }
          var upTo = Math.min(i + MAX_NUM_CONCURRENT_REQUESTS$1, allRequests.length);
          var batch = allRequests.slice(i, upTo);
          processBatch(batch, i);
          i += batch.length;
        }
        function processBatch(batch, offset) {
          batch.forEach(function (docId, j) {
            var docIdx = offset + j;
            var docRequests = requestsById.get(docId);
            var docOpts = pick$1(docRequests[0], [
              "atts_since",
              "attachments"
            ]);
            docOpts.open_revs = docRequests.map(function (request) {
              return request.rev;
            });
            docOpts.open_revs = docOpts.open_revs.filter(identityFunction$1);
            var formatResult = identityFunction$1;
            if (docOpts.open_revs.length === 0) {
              delete docOpts.open_revs;
              formatResult = formatResultForOpenRevsGet$1;
            }
            [
              "revs",
              "attachments",
              "binary",
              "ajax",
              "latest"
            ].forEach(function (param) {
              if (param in opts) {
                docOpts[param] = opts[param];
              }
            });
            db.get(docId, docOpts, function (err, res) {
              var result;
              if (err) {
                result = [{ error: err }];
              } else {
                result = formatResult(res);
              }
              gotResult(docIdx, docId, result);
              nextBatch();
            });
          });
        }
        nextBatch();
      }
      var hasLocal$1;
      try {
        localStorage.setItem("_pouch_check_localstorage", 1);
        hasLocal$1 = !!localStorage.getItem("_pouch_check_localstorage");
      } catch (e) {
        hasLocal$1 = false;
      }
      function hasLocalStorage$1() {
        return hasLocal$1;
      }
      inherits$8(Changes$1, events$2.EventEmitter);
      function attachBrowserEvents$1(self) {
        if (hasLocalStorage$1()) {
          addEventListener("storage", function (e) {
            self.emit(e.key);
          });
        }
      }
      function Changes$1() {
        events$2.EventEmitter.call(this);
        this._listeners = {};
        attachBrowserEvents$1(this);
      }
      Changes$1.prototype.addListener = function (dbName, id, db, opts) {
        if (this._listeners[id]) {
          return;
        }
        var self = this;
        var inprogress = false;
        function eventFunction() {
          if (!self._listeners[id]) {
            return;
          }
          if (inprogress) {
            inprogress = "waiting";
            return;
          }
          inprogress = true;
          var changesOpts = pick$1(opts, [
            "style",
            "include_docs",
            "attachments",
            "conflicts",
            "filter",
            "doc_ids",
            "view",
            "since",
            "query_params",
            "binary",
            "return_docs"
          ]);
          function onError() {
            inprogress = false;
          }
          db.changes(changesOpts).on("change", function (c) {
            if (c.seq > opts.since && !opts.cancelled) {
              opts.since = c.seq;
              opts.onChange(c);
            }
          }).on("complete", function () {
            if (inprogress === "waiting") {
              immediate$2(eventFunction);
            }
            inprogress = false;
          }).on("error", onError);
        }
        this._listeners[id] = eventFunction;
        this.on(dbName, eventFunction);
      };
      Changes$1.prototype.removeListener = function (dbName, id) {
        if (!(id in this._listeners)) {
          return;
        }
        events$2.EventEmitter.prototype.removeListener.call(this, dbName, this._listeners[id]);
        delete this._listeners[id];
      };
      Changes$1.prototype.notifyLocalWindows = function (dbName) {
        if (hasLocalStorage$1()) {
          localStorage[dbName] = localStorage[dbName] === "a" ? "b" : "a";
        }
      };
      Changes$1.prototype.notify = function (dbName) {
        this.emit(dbName);
        this.notifyLocalWindows(dbName);
      };
      function guardedConsole$1(method) {
        if (typeof console !== "undefined" && typeof console[method] === "function") {
          var args = Array.prototype.slice.call(arguments, 1);
          console[method].apply(console, args);
        }
      }
      function randomNumber$1(min, max) {
        var maxTimeout = 600000;
        min = parseInt(min, 10) || 0;
        max = parseInt(max, 10);
        if (max !== max || max <= min) {
          max = (min || 1) << 1;
        } else {
          max = max + 1;
        }
        if (max > maxTimeout) {
          min = maxTimeout >> 1;
          max = maxTimeout;
        }
        var ratio = Math.random();
        var range = max - min;
        return ~~(range * ratio + min);
      }
      function defaultBackOff$1(min) {
        var max = 0;
        if (!min) {
          max = 2000;
        }
        return randomNumber$1(min, max);
      }
      function explainError$1(status, str) {
        guardedConsole$1("info", "The above " + status + " is totally normal. " + str);
      }
      var assign$2;
      {
        if (typeof Object.assign === "function") {
          assign$2 = Object.assign;
        } else {
          assign$2 = function (target) {
            var to = Object(target);
            for (var index = 1; index < arguments.length; index++) {
              var nextSource = arguments[index];
              if (nextSource != null) {
                for (var nextKey in nextSource) {
                  if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                    to[nextKey] = nextSource[nextKey];
                  }
                }
              }
            }
            return to;
          };
        }
      }
      var $inject_Object_assign = assign$2;
      inherits$8(PouchError$1, Error);
      function PouchError$1(status, error, reason) {
        Error.call(this, reason);
        this.status = status;
        this.name = error;
        this.message = reason;
        this.error = true;
      }
      PouchError$1.prototype.toString = function () {
        return JSON.stringify({
          status: this.status,
          name: this.name,
          message: this.message,
          reason: this.reason
        });
      };
      new PouchError$1(401, "unauthorized", "Name or password is incorrect.");
      var MISSING_BULK_DOCS$1 = new PouchError$1(400, "bad_request", "Missing JSON list of 'docs'");
      var MISSING_DOC$1 = new PouchError$1(404, "not_found", "missing");
      var REV_CONFLICT$1 = new PouchError$1(409, "conflict", "Document update conflict");
      var INVALID_ID$1 = new PouchError$1(400, "bad_request", "_id field must contain a string");
      var MISSING_ID$1 = new PouchError$1(412, "missing_id", "_id is required for puts");
      var RESERVED_ID$1 = new PouchError$1(400, "bad_request", "Only reserved document ids may start with underscore.");
      new PouchError$1(412, "precondition_failed", "Database not open");
      var UNKNOWN_ERROR$1 = new PouchError$1(500, "unknown_error", "Database encountered an unknown error");
      var BAD_ARG$1 = new PouchError$1(500, "badarg", "Some query argument is invalid");
      new PouchError$1(400, "invalid_request", "Request was invalid");
      var QUERY_PARSE_ERROR$1 = new PouchError$1(400, "query_parse_error", "Some query parameter is invalid");
      var DOC_VALIDATION$1 = new PouchError$1(500, "doc_validation", "Bad special document member");
      var BAD_REQUEST$1 = new PouchError$1(400, "bad_request", "Something wrong with the request");
      var NOT_AN_OBJECT$1 = new PouchError$1(400, "bad_request", "Document must be a JSON object");
      new PouchError$1(404, "not_found", "Database not found");
      var IDB_ERROR$1 = new PouchError$1(500, "indexed_db_went_bad", "unknown");
      new PouchError$1(500, "web_sql_went_bad", "unknown");
      new PouchError$1(500, "levelDB_went_went_bad", "unknown");
      new PouchError$1(403, "forbidden", "Forbidden by design doc validate_doc_update function");
      var INVALID_REV$1 = new PouchError$1(400, "bad_request", "Invalid rev format");
      new PouchError$1(412, "file_exists", "The database could not be created, the file already exists.");
      var MISSING_STUB$1 = new PouchError$1(412, "missing_stub", "A pre-existing attachment stub wasn't found");
      new PouchError$1(413, "invalid_url", "Provided URL is invalid");
      function createError$3(error, reason) {
        function CustomPouchError(reason) {
          for (var p in error) {
            if (typeof error[p] !== "function") {
              this[p] = error[p];
            }
          }
          if (reason !== undefined) {
            this.reason = reason;
          }
        }
        CustomPouchError.prototype = PouchError$1.prototype;
        return new CustomPouchError(reason);
      }
      function generateErrorFromResponse$1(err) {
        if (typeof err !== "object") {
          var data = err;
          err = UNKNOWN_ERROR$1;
          err.data = data;
        }
        if ("error" in err && err.error === "conflict") {
          err.name = "conflict";
          err.status = 409;
        }
        if (!("name" in err)) {
          err.name = err.error || "unknown";
        }
        if (!("status" in err)) {
          err.status = 500;
        }
        if (!("message" in err)) {
          err.message = err.message || err.reason;
        }
        return err;
      }
      function tryFilter$1(filter, doc, req) {
        try {
          return !filter(doc, req);
        } catch (err) {
          var msg = "Filter function threw: " + err.toString();
          return createError$3(BAD_REQUEST$1, msg);
        }
      }
      function filterChange$1(opts) {
        var req = {};
        var hasFilter = opts.filter && typeof opts.filter === "function";
        req.query = opts.query_params;
        return function filter(change) {
          if (!change.doc) {
            change.doc = {};
          }
          var filterReturn = hasFilter && tryFilter$1(opts.filter, change.doc, req);
          if (typeof filterReturn === "object") {
            return filterReturn;
          }
          if (filterReturn) {
            return false;
          }
          if (!opts.include_docs) {
            delete change.doc;
          } else if (!opts.attachments) {
            for (var att in change.doc._attachments) {
              if (change.doc._attachments.hasOwnProperty(att)) {
                change.doc._attachments[att].stub = true;
              }
            }
          }
          return true;
        };
      }
      function flatten$1(arrs) {
        var res = [];
        for (var i = 0, len = arrs.length; i < len; i++) {
          res = res.concat(arrs[i]);
        }
        return res;
      }
      function invalidIdError$1(id) {
        var err;
        if (!id) {
          err = createError$3(MISSING_ID$1);
        } else if (typeof id !== "string") {
          err = createError$3(INVALID_ID$1);
        } else if (/^_/.test(id) && !/^_(design|local)/.test(id)) {
          err = createError$3(RESERVED_ID$1);
        }
        if (err) {
          throw err;
        }
      }
      function isRemote$1(db) {
        if (typeof db._remote === "boolean") {
          return db._remote;
        }
        if (typeof db.type === "function") {
          guardedConsole$1("warn", "db.type() is deprecated and will be removed in " + "a future version of PouchDB");
          return db.type() === "http";
        }
        return false;
      }
      function listenerCount$1(ee, type) {
        return "listenerCount" in ee ? ee.listenerCount(type) : events$2.EventEmitter.listenerCount(ee, type);
      }
      function parseDesignDocFunctionName$1(s) {
        if (!s) {
          return null;
        }
        var parts = s.split("/");
        if (parts.length === 2) {
          return parts;
        }
        if (parts.length === 1) {
          return [
            s,
            s
          ];
        }
        return null;
      }
      function normalizeDesignDocFunctionName$1(s) {
        var normalized = parseDesignDocFunctionName$1(s);
        return normalized ? normalized.join("/") : null;
      }
      var keys$1 = [
        "source",
        "protocol",
        "authority",
        "userInfo",
        "user",
        "password",
        "host",
        "port",
        "relative",
        "path",
        "directory",
        "file",
        "query",
        "anchor"
      ];
      var qName$1 = "queryKey";
      var qParser$1 = /(?:^|&)([^&=]*)=?([^&]*)/g;
      var parser$1 = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
      function parseUri$1(str) {
        var m = parser$1.exec(str);
        var uri = {};
        var i = 14;
        while (i--) {
          var key = keys$1[i];
          var value = m[i] || "";
          var encoded = [
            "user",
            "password"
          ].indexOf(key) !== -1;
          uri[key] = encoded ? decodeURIComponent(value) : value;
        }
        uri[qName$1] = {};
        uri[keys$1[12]].replace(qParser$1, function ($0, $1, $2) {
          if ($1) {
            uri[qName$1][$1] = $2;
          }
        });
        return uri;
      }
      function scopeEval$1(source, scope) {
        var keys = [];
        var values = [];
        for (var key in scope) {
          if (scope.hasOwnProperty(key)) {
            keys.push(key);
            values.push(scope[key]);
          }
        }
        keys.push(source);
        return Function.apply(null, keys).apply(null, values);
      }
      function upsert$1(db, docId, diffFun) {
        return new Promise(function (fulfill, reject) {
          db.get(docId, function (err, doc) {
            if (err) {
              if (err.status !== 404) {
                return reject(err);
              }
              doc = {};
            }
            var docRev = doc._rev;
            var newDoc = diffFun(doc);
            if (!newDoc) {
              return fulfill({
                updated: false,
                rev: docRev
              });
            }
            newDoc._id = docId;
            newDoc._rev = docRev;
            fulfill(tryAndPut$1(db, newDoc, diffFun));
          });
        });
      }
      function tryAndPut$1(db, doc, diffFun) {
        return db.put(doc).then(function (res) {
          return {
            updated: true,
            rev: res.rev
          };
        }, function (err) {
          if (err.status !== 409) {
            throw err;
          }
          return upsert$1(db, doc._id, diffFun);
        });
      }
      var thisAtob$1 = function (str) {
        return atob(str);
      };
      var thisBtoa$1 = function (str) {
        return btoa(str);
      };
      function createBlob$1(parts, properties) {
        parts = parts || [];
        properties = properties || {};
        try {
          return new Blob(parts, properties);
        } catch (e) {
          if (e.name !== "TypeError") {
            throw e;
          }
          var Builder = typeof BlobBuilder !== "undefined" ? BlobBuilder : typeof MSBlobBuilder !== "undefined" ? MSBlobBuilder : typeof MozBlobBuilder !== "undefined" ? MozBlobBuilder : WebKitBlobBuilder;
          var builder = new Builder();
          for (var i = 0; i < parts.length; i += 1) {
            builder.append(parts[i]);
          }
          return builder.getBlob(properties.type);
        }
      }
      function binaryStringToArrayBuffer$1(bin) {
        var length = bin.length;
        var buf = new ArrayBuffer(length);
        var arr = new Uint8Array(buf);
        for (var i = 0; i < length; i++) {
          arr[i] = bin.charCodeAt(i);
        }
        return buf;
      }
      function binStringToBluffer$1(binString, type) {
        return createBlob$1([binaryStringToArrayBuffer$1(binString)], { type: type });
      }
      function b64ToBluffer$1(b64, type) {
        return binStringToBluffer$1(thisAtob$1(b64), type);
      }
      function arrayBufferToBinaryString$1(buffer) {
        var binary = "";
        var bytes = new Uint8Array(buffer);
        var length = bytes.byteLength;
        for (var i = 0; i < length; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        return binary;
      }
      function readAsBinaryString$1(blob, callback) {
        var reader = new FileReader();
        var hasBinaryString = typeof reader.readAsBinaryString === "function";
        reader.onloadend = function (e) {
          var result = e.target.result || "";
          if (hasBinaryString) {
            return callback(result);
          }
          callback(arrayBufferToBinaryString$1(result));
        };
        if (hasBinaryString) {
          reader.readAsBinaryString(blob);
        } else {
          reader.readAsArrayBuffer(blob);
        }
      }
      function blobToBinaryString$1(blobOrBuffer, callback) {
        readAsBinaryString$1(blobOrBuffer, function (bin) {
          callback(bin);
        });
      }
      function blobToBase64$1(blobOrBuffer, callback) {
        blobToBinaryString$1(blobOrBuffer, function (base64) {
          callback(thisBtoa$1(base64));
        });
      }
      function readAsArrayBuffer$1(blob, callback) {
        var reader = new FileReader();
        reader.onloadend = function (e) {
          var result = e.target.result || new ArrayBuffer(0);
          callback(result);
        };
        reader.readAsArrayBuffer(blob);
      }
      var setImmediateShim$1 = _global$p.setImmediate || _global$p.setTimeout;
      var MD5_CHUNK_SIZE$1 = 32768;
      function rawToBase64$1(raw) {
        return thisBtoa$1(raw);
      }
      function sliceBlob$1(blob, start, end) {
        if (blob.webkitSlice) {
          return blob.webkitSlice(start, end);
        }
        return blob.slice(start, end);
      }
      function appendBlob$1(buffer, blob, start, end, callback) {
        if (start > 0 || end < blob.size) {
          blob = sliceBlob$1(blob, start, end);
        }
        readAsArrayBuffer$1(blob, function (arrayBuffer) {
          buffer.append(arrayBuffer);
          callback();
        });
      }
      function appendString$1(buffer, string, start, end, callback) {
        if (start > 0 || end < string.length) {
          string = string.substring(start, end);
        }
        buffer.appendBinary(string);
        callback();
      }
      function binaryMd5$1(data, callback) {
        var inputIsString = typeof data === "string";
        var len = inputIsString ? data.length : data.size;
        var chunkSize = Math.min(MD5_CHUNK_SIZE$1, len);
        var chunks = Math.ceil(len / chunkSize);
        var currentChunk = 0;
        var buffer = inputIsString ? new Md5$1() : new Md5$1.ArrayBuffer();
        var append = inputIsString ? appendString$1 : appendBlob$1;
        function next() {
          setImmediateShim$1(loadNextChunk);
        }
        function done() {
          var raw = buffer.end(true);
          var base64 = rawToBase64$1(raw);
          callback(base64);
          buffer.destroy();
        }
        function loadNextChunk() {
          var start = currentChunk * chunkSize;
          var end = start + chunkSize;
          currentChunk++;
          if (currentChunk < chunks) {
            append(buffer, data, start, end, next);
          } else {
            append(buffer, data, start, end, done);
          }
        }
        loadNextChunk();
      }
      function stringMd5$1(string) {
        return Md5$1.hash(string);
      }
      function rev$1(doc, deterministic_revs) {
        var clonedDoc = clone$2(doc);
        if (!deterministic_revs) {
          return uuidV4$1.v4().replace(/-/g, "").toLowerCase();
        }
        delete clonedDoc._rev_tree;
        return stringMd5$1(JSON.stringify(clonedDoc));
      }
      var uuid$1 = uuidV4$1.v4;
      function winningRev$1(metadata) {
        var winningId;
        var winningPos;
        var winningDeleted;
        var toVisit = metadata.rev_tree.slice();
        var node;
        while (node = toVisit.pop()) {
          var tree = node.ids;
          var branches = tree[2];
          var pos = node.pos;
          if (branches.length) {
            for (var i = 0, len = branches.length; i < len; i++) {
              toVisit.push({
                pos: pos + 1,
                ids: branches[i]
              });
            }
            continue;
          }
          var deleted = !!tree[1].deleted;
          var id = tree[0];
          if (!winningId || (winningDeleted !== deleted ? winningDeleted : winningPos !== pos ? winningPos < pos : winningId < id)) {
            winningId = id;
            winningPos = pos;
            winningDeleted = deleted;
          }
        }
        return winningPos + "-" + winningId;
      }
      function traverseRevTree$1(revs, callback) {
        var toVisit = revs.slice();
        var node;
        while (node = toVisit.pop()) {
          var pos = node.pos;
          var tree = node.ids;
          var branches = tree[2];
          var newCtx = callback(branches.length === 0, pos, tree[0], node.ctx, tree[1]);
          for (var i = 0, len = branches.length; i < len; i++) {
            toVisit.push({
              pos: pos + 1,
              ids: branches[i],
              ctx: newCtx
            });
          }
        }
      }
      function sortByPos$2(a, b) {
        return a.pos - b.pos;
      }
      function collectLeaves$1(revs) {
        var leaves = [];
        traverseRevTree$1(revs, function (isLeaf, pos, id, acc, opts) {
          if (isLeaf) {
            leaves.push({
              rev: pos + "-" + id,
              pos: pos,
              opts: opts
            });
          }
        });
        leaves.sort(sortByPos$2).reverse();
        for (var i = 0, len = leaves.length; i < len; i++) {
          delete leaves[i].pos;
        }
        return leaves;
      }
      function collectConflicts$1(metadata) {
        var win = winningRev$1(metadata);
        var leaves = collectLeaves$1(metadata.rev_tree);
        var conflicts = [];
        for (var i = 0, len = leaves.length; i < len; i++) {
          var leaf = leaves[i];
          if (leaf.rev !== win && !leaf.opts.deleted) {
            conflicts.push(leaf.rev);
          }
        }
        return conflicts;
      }
      function compactTree$1(metadata) {
        var revs = [];
        traverseRevTree$1(metadata.rev_tree, function (isLeaf, pos, revHash, ctx, opts) {
          if (opts.status === "available" && !isLeaf) {
            revs.push(pos + "-" + revHash);
            opts.status = "missing";
          }
        });
        return revs;
      }
      function rootToLeaf$1(revs) {
        var paths = [];
        var toVisit = revs.slice();
        var node;
        while (node = toVisit.pop()) {
          var pos = node.pos;
          var tree = node.ids;
          var id = tree[0];
          var opts = tree[1];
          var branches = tree[2];
          var isLeaf = branches.length === 0;
          var history = node.history ? node.history.slice() : [];
          history.push({
            id: id,
            opts: opts
          });
          if (isLeaf) {
            paths.push({
              pos: pos + 1 - history.length,
              ids: history
            });
          }
          for (var i = 0, len = branches.length; i < len; i++) {
            toVisit.push({
              pos: pos + 1,
              ids: branches[i],
              history: history
            });
          }
        }
        return paths.reverse();
      }
      function sortByPos$1$1(a, b) {
        return a.pos - b.pos;
      }
      function binarySearch$1(arr, item, comparator) {
        var low = 0;
        var high = arr.length;
        var mid;
        while (low < high) {
          mid = low + high >>> 1;
          if (comparator(arr[mid], item) < 0) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return low;
      }
      function insertSorted$1(arr, item, comparator) {
        var idx = binarySearch$1(arr, item, comparator);
        arr.splice(idx, 0, item);
      }
      function pathToTree$1(path, numStemmed) {
        var root;
        var leaf;
        for (var i = numStemmed, len = path.length; i < len; i++) {
          var node = path[i];
          var currentLeaf = [
            node.id,
            node.opts,
            []
          ];
          if (leaf) {
            leaf[2].push(currentLeaf);
            leaf = currentLeaf;
          } else {
            root = leaf = currentLeaf;
          }
        }
        return root;
      }
      function compareTree$1(a, b) {
        return a[0] < b[0] ? -1 : 1;
      }
      function mergeTree$1(in_tree1, in_tree2) {
        var queue = [{
            tree1: in_tree1,
            tree2: in_tree2
          }];
        var conflicts = false;
        while (queue.length > 0) {
          var item = queue.pop();
          var tree1 = item.tree1;
          var tree2 = item.tree2;
          if (tree1[1].status || tree2[1].status) {
            tree1[1].status = tree1[1].status === "available" || tree2[1].status === "available" ? "available" : "missing";
          }
          for (var i = 0; i < tree2[2].length; i++) {
            if (!tree1[2][0]) {
              conflicts = "new_leaf";
              tree1[2][0] = tree2[2][i];
              continue;
            }
            var merged = false;
            for (var j = 0; j < tree1[2].length; j++) {
              if (tree1[2][j][0] === tree2[2][i][0]) {
                queue.push({
                  tree1: tree1[2][j],
                  tree2: tree2[2][i]
                });
                merged = true;
              }
            }
            if (!merged) {
              conflicts = "new_branch";
              insertSorted$1(tree1[2], tree2[2][i], compareTree$1);
            }
          }
        }
        return {
          conflicts: conflicts,
          tree: in_tree1
        };
      }
      function doMerge$1(tree, path, dontExpand) {
        var restree = [];
        var conflicts = false;
        var merged = false;
        var res;
        if (!tree.length) {
          return {
            tree: [path],
            conflicts: "new_leaf"
          };
        }
        for (var i = 0, len = tree.length; i < len; i++) {
          var branch = tree[i];
          if (branch.pos === path.pos && branch.ids[0] === path.ids[0]) {
            res = mergeTree$1(branch.ids, path.ids);
            restree.push({
              pos: branch.pos,
              ids: res.tree
            });
            conflicts = conflicts || res.conflicts;
            merged = true;
          } else if (dontExpand !== true) {
            var t1 = branch.pos < path.pos ? branch : path;
            var t2 = branch.pos < path.pos ? path : branch;
            var diff = t2.pos - t1.pos;
            var candidateParents = [];
            var trees = [];
            trees.push({
              ids: t1.ids,
              diff: diff,
              parent: null,
              parentIdx: null
            });
            while (trees.length > 0) {
              var item = trees.pop();
              if (item.diff === 0) {
                if (item.ids[0] === t2.ids[0]) {
                  candidateParents.push(item);
                }
                continue;
              }
              var elements = item.ids[2];
              for (var j = 0, elementsLen = elements.length; j < elementsLen; j++) {
                trees.push({
                  ids: elements[j],
                  diff: item.diff - 1,
                  parent: item.ids,
                  parentIdx: j
                });
              }
            }
            var el = candidateParents[0];
            if (!el) {
              restree.push(branch);
            } else {
              res = mergeTree$1(el.ids, t2.ids);
              el.parent[2][el.parentIdx] = res.tree;
              restree.push({
                pos: t1.pos,
                ids: t1.ids
              });
              conflicts = conflicts || res.conflicts;
              merged = true;
            }
          } else {
            restree.push(branch);
          }
        }
        if (!merged) {
          restree.push(path);
        }
        restree.sort(sortByPos$1$1);
        return {
          tree: restree,
          conflicts: conflicts || "internal_node"
        };
      }
      function stem$1(tree, depth) {
        var paths = rootToLeaf$1(tree);
        var stemmedRevs;
        var result;
        for (var i = 0, len = paths.length; i < len; i++) {
          var path = paths[i];
          var stemmed = path.ids;
          var node;
          if (stemmed.length > depth) {
            if (!stemmedRevs) {
              stemmedRevs = {};
            }
            var numStemmed = stemmed.length - depth;
            node = {
              pos: path.pos + numStemmed,
              ids: pathToTree$1(stemmed, numStemmed)
            };
            for (var s = 0; s < numStemmed; s++) {
              var rev = path.pos + s + "-" + stemmed[s].id;
              stemmedRevs[rev] = true;
            }
          } else {
            node = {
              pos: path.pos,
              ids: pathToTree$1(stemmed, 0)
            };
          }
          if (result) {
            result = doMerge$1(result, node, true).tree;
          } else {
            result = [node];
          }
        }
        if (stemmedRevs) {
          traverseRevTree$1(result, function (isLeaf, pos, revHash) {
            delete stemmedRevs[pos + "-" + revHash];
          });
        }
        return {
          tree: result,
          revs: stemmedRevs ? Object.keys(stemmedRevs) : []
        };
      }
      function merge$1(tree, path, depth) {
        var newTree = doMerge$1(tree, path);
        var stemmed = stem$1(newTree.tree, depth);
        return {
          tree: stemmed.tree,
          stemmedRevs: stemmed.revs,
          conflicts: newTree.conflicts
        };
      }
      function revExists$1(revs, rev) {
        var toVisit = revs.slice();
        var splitRev = rev.split("-");
        var targetPos = parseInt(splitRev[0], 10);
        var targetId = splitRev[1];
        var node;
        while (node = toVisit.pop()) {
          if (node.pos === targetPos && node.ids[0] === targetId) {
            return true;
          }
          var branches = node.ids[2];
          for (var i = 0, len = branches.length; i < len; i++) {
            toVisit.push({
              pos: node.pos + 1,
              ids: branches[i]
            });
          }
        }
        return false;
      }
      function getTrees$1(node) {
        return node.ids;
      }
      function isDeleted$1(metadata, rev) {
        if (!rev) {
          rev = winningRev$1(metadata);
        }
        var id = rev.substring(rev.indexOf("-") + 1);
        var toVisit = metadata.rev_tree.map(getTrees$1);
        var tree;
        while (tree = toVisit.pop()) {
          if (tree[0] === id) {
            return !!tree[1].deleted;
          }
          toVisit = toVisit.concat(tree[2]);
        }
      }
      function isLocalId$1(id) {
        return /^_local/.test(id);
      }
      function latest$1(rev, metadata) {
        var toVisit = metadata.rev_tree.slice();
        var node;
        while (node = toVisit.pop()) {
          var pos = node.pos;
          var tree = node.ids;
          var id = tree[0];
          var opts = tree[1];
          var branches = tree[2];
          var isLeaf = branches.length === 0;
          var history = node.history ? node.history.slice() : [];
          history.push({
            id: id,
            pos: pos,
            opts: opts
          });
          if (isLeaf) {
            for (var i = 0, len = history.length; i < len; i++) {
              var historyNode = history[i];
              var historyRev = historyNode.pos + "-" + historyNode.id;
              if (historyRev === rev) {
                return pos + "-" + id;
              }
            }
          }
          for (var j = 0, l = branches.length; j < l; j++) {
            toVisit.push({
              pos: pos + 1,
              ids: branches[j],
              history: history
            });
          }
        }
        throw new Error("Unable to resolve latest revision for id " + metadata.id + ", rev " + rev);
      }
      inherits$8(Changes$1$1, events$2.EventEmitter);
      function tryCatchInChangeListener(self, change, pending, lastSeq) {
        try {
          self.emit("change", change, pending, lastSeq);
        } catch (e) {
          guardedConsole$1("error", "Error in .on(\"change\", function):", e);
        }
      }
      function Changes$1$1(db, opts, callback) {
        events$2.EventEmitter.call(this);
        var self = this;
        this.db = db;
        opts = opts ? clone$2(opts) : {};
        var complete = opts.complete = once$1(function (err, resp) {
          if (err) {
            if (listenerCount$1(self, "error") > 0) {
              self.emit("error", err);
            }
          } else {
            self.emit("complete", resp);
          }
          self.removeAllListeners();
          db.removeListener("destroyed", onDestroy);
        });
        if (callback) {
          self.on("complete", function (resp) {
            callback(null, resp);
          });
          self.on("error", callback);
        }
        function onDestroy() {
          self.cancel();
        }
        db.once("destroyed", onDestroy);
        opts.onChange = function (change, pending, lastSeq) {
          if (self.isCancelled) {
            return;
          }
          tryCatchInChangeListener(self, change, pending, lastSeq);
        };
        var promise = new Promise(function (fulfill, reject) {
          opts.complete = function (err, res) {
            if (err) {
              reject(err);
            } else {
              fulfill(res);
            }
          };
        });
        self.once("cancel", function () {
          db.removeListener("destroyed", onDestroy);
          opts.complete(null, { status: "cancelled" });
        });
        this.then = promise.then.bind(promise);
        this["catch"] = promise["catch"].bind(promise);
        this.then(function (result) {
          complete(null, result);
        }, complete);
        if (!db.taskqueue.isReady) {
          db.taskqueue.addTask(function (failed) {
            if (failed) {
              opts.complete(failed);
            } else if (self.isCancelled) {
              self.emit("cancel");
            } else {
              self.validateChanges(opts);
            }
          });
        } else {
          self.validateChanges(opts);
        }
      }
      Changes$1$1.prototype.cancel = function () {
        this.isCancelled = true;
        if (this.db.taskqueue.isReady) {
          this.emit("cancel");
        }
      };
      function processChange(doc, metadata, opts) {
        var changeList = [{ rev: doc._rev }];
        if (opts.style === "all_docs") {
          changeList = collectLeaves$1(metadata.rev_tree).map(function (x) {
            return { rev: x.rev };
          });
        }
        var change = {
          id: metadata.id,
          changes: changeList,
          doc: doc
        };
        if (isDeleted$1(metadata, doc._rev)) {
          change.deleted = true;
        }
        if (opts.conflicts) {
          change.doc._conflicts = collectConflicts$1(metadata);
          if (!change.doc._conflicts.length) {
            delete change.doc._conflicts;
          }
        }
        return change;
      }
      Changes$1$1.prototype.validateChanges = function (opts) {
        var callback = opts.complete;
        var self = this;
        if (PouchDB._changesFilterPlugin) {
          PouchDB._changesFilterPlugin.validate(opts, function (err) {
            if (err) {
              return callback(err);
            }
            self.doChanges(opts);
          });
        } else {
          self.doChanges(opts);
        }
      };
      Changes$1$1.prototype.doChanges = function (opts) {
        var self = this;
        var callback = opts.complete;
        opts = clone$2(opts);
        if ("live" in opts && !("continuous" in opts)) {
          opts.continuous = opts.live;
        }
        opts.processChange = processChange;
        if (opts.since === "latest") {
          opts.since = "now";
        }
        if (!opts.since) {
          opts.since = 0;
        }
        if (opts.since === "now") {
          this.db.info().then(function (info) {
            if (self.isCancelled) {
              callback(null, { status: "cancelled" });
              return;
            }
            opts.since = info.update_seq;
            self.doChanges(opts);
          }, callback);
          return;
        }
        if (PouchDB._changesFilterPlugin) {
          PouchDB._changesFilterPlugin.normalize(opts);
          if (PouchDB._changesFilterPlugin.shouldFilter(this, opts)) {
            return PouchDB._changesFilterPlugin.filter(this, opts);
          }
        } else {
          [
            "doc_ids",
            "filter",
            "selector",
            "view"
          ].forEach(function (key) {
            if (key in opts) {
              guardedConsole$1("warn", "The \"" + key + "\" option was passed in to changes/replicate, " + "but pouchdb-changes-filter plugin is not installed, so it " + "was ignored. Please install the plugin to enable filtering.");
            }
          });
        }
        if (!("descending" in opts)) {
          opts.descending = false;
        }
        opts.limit = opts.limit === 0 ? 1 : opts.limit;
        opts.complete = callback;
        var newPromise = this.db._changes(opts);
        if (newPromise && typeof newPromise.cancel === "function") {
          var cancel = self.cancel;
          self.cancel = getArguments$2(function (args) {
            newPromise.cancel();
            cancel.apply(this, args);
          });
        }
      };
      function compare(left, right) {
        return left < right ? -1 : left > right ? 1 : 0;
      }
      function yankError(callback, docId) {
        return function (err, results) {
          if (err || results[0] && results[0].error) {
            err = err || results[0];
            err.docId = docId;
            callback(err);
          } else {
            callback(null, results.length ? results[0] : results);
          }
        };
      }
      function cleanDocs(docs) {
        for (var i = 0; i < docs.length; i++) {
          var doc = docs[i];
          if (doc._deleted) {
            delete doc._attachments;
          } else if (doc._attachments) {
            var atts = Object.keys(doc._attachments);
            for (var j = 0; j < atts.length; j++) {
              var att = atts[j];
              doc._attachments[att] = pick$1(doc._attachments[att], [
                "data",
                "digest",
                "content_type",
                "length",
                "revpos",
                "stub"
              ]);
            }
          }
        }
      }
      function compareByIdThenRev(a, b) {
        var idCompare = compare(a._id, b._id);
        if (idCompare !== 0) {
          return idCompare;
        }
        var aStart = a._revisions ? a._revisions.start : 0;
        var bStart = b._revisions ? b._revisions.start : 0;
        return compare(aStart, bStart);
      }
      function computeHeight(revs) {
        var height = {};
        var edges = [];
        traverseRevTree$1(revs, function (isLeaf, pos, id, prnt) {
          var rev$$1 = pos + "-" + id;
          if (isLeaf) {
            height[rev$$1] = 0;
          }
          if (prnt !== undefined) {
            edges.push({
              from: prnt,
              to: rev$$1
            });
          }
          return rev$$1;
        });
        edges.reverse();
        edges.forEach(function (edge) {
          if (height[edge.from] === undefined) {
            height[edge.from] = 1 + height[edge.to];
          } else {
            height[edge.from] = Math.min(height[edge.from], 1 + height[edge.to]);
          }
        });
        return height;
      }
      function allDocsKeysParse(opts) {
        var keys = "limit" in opts ? opts.keys.slice(opts.skip, opts.limit + opts.skip) : opts.skip > 0 ? opts.keys.slice(opts.skip) : opts.keys;
        opts.keys = keys;
        opts.skip = 0;
        delete opts.limit;
        if (opts.descending) {
          keys.reverse();
          opts.descending = false;
        }
      }
      function doNextCompaction(self) {
        var task = self._compactionQueue[0];
        var opts = task.opts;
        var callback = task.callback;
        self.get("_local/compaction").catch(function () {
          return false;
        }).then(function (doc) {
          if (doc && doc.last_seq) {
            opts.last_seq = doc.last_seq;
          }
          self._compact(opts, function (err, res) {
            if (err) {
              callback(err);
            } else {
              callback(null, res);
            }
            immediate$2(function () {
              self._compactionQueue.shift();
              if (self._compactionQueue.length) {
                doNextCompaction(self);
              }
            });
          });
        });
      }
      function attachmentNameError(name) {
        if (name.charAt(0) === "_") {
          return name + " is not a valid attachment name, attachment " + "names cannot start with '_'";
        }
        return false;
      }
      inherits$8(AbstractPouchDB, events$2.EventEmitter);
      function AbstractPouchDB() {
        events$2.EventEmitter.call(this);
        for (var p in AbstractPouchDB.prototype) {
          if (typeof this[p] === "function") {
            this[p] = this[p].bind(this);
          }
        }
      }
      AbstractPouchDB.prototype.post = adapterFun$1("post", function (doc, opts, callback) {
        if (typeof opts === "function") {
          callback = opts;
          opts = {};
        }
        if (typeof doc !== "object" || Array.isArray(doc)) {
          return callback(createError$3(NOT_AN_OBJECT$1));
        }
        this.bulkDocs({ docs: [doc] }, opts, yankError(callback, doc._id));
      });
      AbstractPouchDB.prototype.put = adapterFun$1("put", function (doc, opts, cb) {
        if (typeof opts === "function") {
          cb = opts;
          opts = {};
        }
        if (typeof doc !== "object" || Array.isArray(doc)) {
          return cb(createError$3(NOT_AN_OBJECT$1));
        }
        invalidIdError$1(doc._id);
        if (isLocalId$1(doc._id) && typeof this._putLocal === "function") {
          if (doc._deleted) {
            return this._removeLocal(doc, cb);
          } else {
            return this._putLocal(doc, cb);
          }
        }
        var self = this;
        if (opts.force && doc._rev) {
          transformForceOptionToNewEditsOption();
          putDoc(function (err) {
            var result = err ? null : {
              ok: true,
              id: doc._id,
              rev: doc._rev
            };
            cb(err, result);
          });
        } else {
          putDoc(cb);
        }
        function transformForceOptionToNewEditsOption() {
          var parts = doc._rev.split("-");
          var oldRevId = parts[1];
          var oldRevNum = parseInt(parts[0], 10);
          var newRevNum = oldRevNum + 1;
          var newRevId = rev$1();
          doc._revisions = {
            start: newRevNum,
            ids: [
              newRevId,
              oldRevId
            ]
          };
          doc._rev = newRevNum + "-" + newRevId;
          opts.new_edits = false;
        }
        function putDoc(next) {
          if (typeof self._put === "function" && opts.new_edits !== false) {
            self._put(doc, opts, next);
          } else {
            self.bulkDocs({ docs: [doc] }, opts, yankError(next, doc._id));
          }
        }
      });
      AbstractPouchDB.prototype.putAttachment = adapterFun$1("putAttachment", function (docId, attachmentId, rev$$1, blob, type) {
        var api = this;
        if (typeof type === "function") {
          type = blob;
          blob = rev$$1;
          rev$$1 = null;
        }
        if (typeof type === "undefined") {
          type = blob;
          blob = rev$$1;
          rev$$1 = null;
        }
        if (!type) {
          guardedConsole$1("warn", "Attachment", attachmentId, "on document", docId, "is missing content_type");
        }
        function createAttachment(doc) {
          var prevrevpos = "_rev" in doc ? parseInt(doc._rev, 10) : 0;
          doc._attachments = doc._attachments || {};
          doc._attachments[attachmentId] = {
            content_type: type,
            data: blob,
            revpos: ++prevrevpos
          };
          return api.put(doc);
        }
        return api.get(docId).then(function (doc) {
          if (doc._rev !== rev$$1) {
            throw createError$3(REV_CONFLICT$1);
          }
          return createAttachment(doc);
        }, function (err) {
          if (err.reason === MISSING_DOC$1.message) {
            return createAttachment({ _id: docId });
          } else {
            throw err;
          }
        });
      });
      AbstractPouchDB.prototype.removeAttachment = adapterFun$1("removeAttachment", function (docId, attachmentId, rev$$1, callback) {
        var self = this;
        self.get(docId, function (err, obj) {
          if (err) {
            callback(err);
            return;
          }
          if (obj._rev !== rev$$1) {
            callback(createError$3(REV_CONFLICT$1));
            return;
          }
          if (!obj._attachments) {
            return callback();
          }
          delete obj._attachments[attachmentId];
          if (Object.keys(obj._attachments).length === 0) {
            delete obj._attachments;
          }
          self.put(obj, callback);
        });
      });
      AbstractPouchDB.prototype.remove = adapterFun$1("remove", function (docOrId, optsOrRev, opts, callback) {
        var doc;
        if (typeof optsOrRev === "string") {
          doc = {
            _id: docOrId,
            _rev: optsOrRev
          };
          if (typeof opts === "function") {
            callback = opts;
            opts = {};
          }
        } else {
          doc = docOrId;
          if (typeof optsOrRev === "function") {
            callback = optsOrRev;
            opts = {};
          } else {
            callback = opts;
            opts = optsOrRev;
          }
        }
        opts = opts || {};
        opts.was_delete = true;
        var newDoc = {
          _id: doc._id,
          _rev: doc._rev || opts.rev
        };
        newDoc._deleted = true;
        if (isLocalId$1(newDoc._id) && typeof this._removeLocal === "function") {
          return this._removeLocal(doc, callback);
        }
        this.bulkDocs({ docs: [newDoc] }, opts, yankError(callback, newDoc._id));
      });
      AbstractPouchDB.prototype.revsDiff = adapterFun$1("revsDiff", function (req, opts, callback) {
        if (typeof opts === "function") {
          callback = opts;
          opts = {};
        }
        var ids = Object.keys(req);
        if (!ids.length) {
          return callback(null, {});
        }
        var count = 0;
        var missing = new ExportedMap();
        function addToMissing(id, revId) {
          if (!missing.has(id)) {
            missing.set(id, { missing: [] });
          }
          missing.get(id).missing.push(revId);
        }
        function processDoc(id, rev_tree) {
          var missingForId = req[id].slice(0);
          traverseRevTree$1(rev_tree, function (isLeaf, pos, revHash, ctx, opts) {
            var rev$$1 = pos + "-" + revHash;
            var idx = missingForId.indexOf(rev$$1);
            if (idx === -1) {
              return;
            }
            missingForId.splice(idx, 1);
            if (opts.status !== "available") {
              addToMissing(id, rev$$1);
            }
          });
          missingForId.forEach(function (rev$$1) {
            addToMissing(id, rev$$1);
          });
        }
        ids.map(function (id) {
          this._getRevisionTree(id, function (err, rev_tree) {
            if (err && err.status === 404 && err.message === "missing") {
              missing.set(id, { missing: req[id] });
            } else if (err) {
              return callback(err);
            } else {
              processDoc(id, rev_tree);
            }
            if (++count === ids.length) {
              var missingObj = {};
              missing.forEach(function (value, key) {
                missingObj[key] = value;
              });
              return callback(null, missingObj);
            }
          });
        }, this);
      });
      AbstractPouchDB.prototype.bulkGet = adapterFun$1("bulkGet", function (opts, callback) {
        bulkGet$1(this, opts, callback);
      });
      AbstractPouchDB.prototype.compactDocument = adapterFun$1("compactDocument", function (docId, maxHeight, callback) {
        var self = this;
        this._getRevisionTree(docId, function (err, revTree) {
          if (err) {
            return callback(err);
          }
          var height = computeHeight(revTree);
          var candidates = [];
          var revs = [];
          Object.keys(height).forEach(function (rev$$1) {
            if (height[rev$$1] > maxHeight) {
              candidates.push(rev$$1);
            }
          });
          traverseRevTree$1(revTree, function (isLeaf, pos, revHash, ctx, opts) {
            var rev$$1 = pos + "-" + revHash;
            if (opts.status === "available" && candidates.indexOf(rev$$1) !== -1) {
              revs.push(rev$$1);
            }
          });
          self._doCompaction(docId, revs, callback);
        });
      });
      AbstractPouchDB.prototype.compact = adapterFun$1("compact", function (opts, callback) {
        if (typeof opts === "function") {
          callback = opts;
          opts = {};
        }
        var self = this;
        opts = opts || {};
        self._compactionQueue = self._compactionQueue || [];
        self._compactionQueue.push({
          opts: opts,
          callback: callback
        });
        if (self._compactionQueue.length === 1) {
          doNextCompaction(self);
        }
      });
      AbstractPouchDB.prototype._compact = function (opts, callback) {
        var self = this;
        var changesOpts = {
          return_docs: false,
          last_seq: opts.last_seq || 0
        };
        var promises = [];
        function onChange(row) {
          promises.push(self.compactDocument(row.id, 0));
        }
        function onComplete(resp) {
          var lastSeq = resp.last_seq;
          Promise.all(promises).then(function () {
            return upsert$1(self, "_local/compaction", function deltaFunc(doc) {
              if (!doc.last_seq || doc.last_seq < lastSeq) {
                doc.last_seq = lastSeq;
                return doc;
              }
              return false;
            });
          }).then(function () {
            callback(null, { ok: true });
          }).catch(callback);
        }
        self.changes(changesOpts).on("change", onChange).on("complete", onComplete).on("error", callback);
      };
      AbstractPouchDB.prototype.get = adapterFun$1("get", function (id, opts, cb) {
        if (typeof opts === "function") {
          cb = opts;
          opts = {};
        }
        if (typeof id !== "string") {
          return cb(createError$3(INVALID_ID$1));
        }
        if (isLocalId$1(id) && typeof this._getLocal === "function") {
          return this._getLocal(id, cb);
        }
        var leaves = [], self = this;
        function finishOpenRevs() {
          var result = [];
          var count = leaves.length;
          if (!count) {
            return cb(null, result);
          }
          leaves.forEach(function (leaf) {
            self.get(id, {
              rev: leaf,
              revs: opts.revs,
              latest: opts.latest,
              attachments: opts.attachments,
              binary: opts.binary
            }, function (err, doc) {
              if (!err) {
                var existing;
                for (var i = 0, l = result.length; i < l; i++) {
                  if (result[i].ok && result[i].ok._rev === doc._rev) {
                    existing = true;
                    break;
                  }
                }
                if (!existing) {
                  result.push({ ok: doc });
                }
              } else {
                result.push({ missing: leaf });
              }
              count--;
              if (!count) {
                cb(null, result);
              }
            });
          });
        }
        if (opts.open_revs) {
          if (opts.open_revs === "all") {
            this._getRevisionTree(id, function (err, rev_tree) {
              if (err) {
                return cb(err);
              }
              leaves = collectLeaves$1(rev_tree).map(function (leaf) {
                return leaf.rev;
              });
              finishOpenRevs();
            });
          } else {
            if (Array.isArray(opts.open_revs)) {
              leaves = opts.open_revs;
              for (var i = 0; i < leaves.length; i++) {
                var l = leaves[i];
                if (!(typeof l === "string" && /^\d+-/.test(l))) {
                  return cb(createError$3(INVALID_REV$1));
                }
              }
              finishOpenRevs();
            } else {
              return cb(createError$3(UNKNOWN_ERROR$1, "function_clause"));
            }
          }
          return;
        }
        return this._get(id, opts, function (err, result) {
          if (err) {
            err.docId = id;
            return cb(err);
          }
          var doc = result.doc;
          var metadata = result.metadata;
          var ctx = result.ctx;
          if (opts.conflicts) {
            var conflicts = collectConflicts$1(metadata);
            if (conflicts.length) {
              doc._conflicts = conflicts;
            }
          }
          if (isDeleted$1(metadata, doc._rev)) {
            doc._deleted = true;
          }
          if (opts.revs || opts.revs_info) {
            var splittedRev = doc._rev.split("-");
            var revNo = parseInt(splittedRev[0], 10);
            var revHash = splittedRev[1];
            var paths = rootToLeaf$1(metadata.rev_tree);
            var path = null;
            for (var i = 0; i < paths.length; i++) {
              var currentPath = paths[i];
              var hashIndex = currentPath.ids.map(function (x) {
                return x.id;
              }).indexOf(revHash);
              var hashFoundAtRevPos = hashIndex === revNo - 1;
              if (hashFoundAtRevPos || !path && hashIndex !== -1) {
                path = currentPath;
              }
            }
            if (!path) {
              err = new Error("invalid rev tree");
              err.docId = id;
              return cb(err);
            }
            var indexOfRev = path.ids.map(function (x) {
              return x.id;
            }).indexOf(doc._rev.split("-")[1]) + 1;
            var howMany = path.ids.length - indexOfRev;
            path.ids.splice(indexOfRev, howMany);
            path.ids.reverse();
            if (opts.revs) {
              doc._revisions = {
                start: path.pos + path.ids.length - 1,
                ids: path.ids.map(function (rev$$1) {
                  return rev$$1.id;
                })
              };
            }
            if (opts.revs_info) {
              var pos = path.pos + path.ids.length;
              doc._revs_info = path.ids.map(function (rev$$1) {
                pos--;
                return {
                  rev: pos + "-" + rev$$1.id,
                  status: rev$$1.opts.status
                };
              });
            }
          }
          if (opts.attachments && doc._attachments) {
            var attachments = doc._attachments;
            var count = Object.keys(attachments).length;
            if (count === 0) {
              return cb(null, doc);
            }
            Object.keys(attachments).forEach(function (key) {
              this._getAttachment(doc._id, key, attachments[key], {
                rev: doc._rev,
                binary: opts.binary,
                ctx: ctx
              }, function (err, data) {
                var att = doc._attachments[key];
                att.data = data;
                delete att.stub;
                delete att.length;
                if (!--count) {
                  cb(null, doc);
                }
              });
            }, self);
          } else {
            if (doc._attachments) {
              for (var key in doc._attachments) {
                if (doc._attachments.hasOwnProperty(key)) {
                  doc._attachments[key].stub = true;
                }
              }
            }
            cb(null, doc);
          }
        });
      });
      AbstractPouchDB.prototype.getAttachment = adapterFun$1("getAttachment", function (docId, attachmentId, opts, callback) {
        var self = this;
        if (opts instanceof Function) {
          callback = opts;
          opts = {};
        }
        this._get(docId, opts, function (err, res) {
          if (err) {
            return callback(err);
          }
          if (res.doc._attachments && res.doc._attachments[attachmentId]) {
            opts.ctx = res.ctx;
            opts.binary = true;
            self._getAttachment(docId, attachmentId, res.doc._attachments[attachmentId], opts, callback);
          } else {
            return callback(createError$3(MISSING_DOC$1));
          }
        });
      });
      AbstractPouchDB.prototype.allDocs = adapterFun$1("allDocs", function (opts, callback) {
        if (typeof opts === "function") {
          callback = opts;
          opts = {};
        }
        opts.skip = typeof opts.skip !== "undefined" ? opts.skip : 0;
        if (opts.start_key) {
          opts.startkey = opts.start_key;
        }
        if (opts.end_key) {
          opts.endkey = opts.end_key;
        }
        if ("keys" in opts) {
          if (!Array.isArray(opts.keys)) {
            return callback(new TypeError("options.keys must be an array"));
          }
          var incompatibleOpt = [
            "startkey",
            "endkey",
            "key"
          ].filter(function (incompatibleOpt) {
            return incompatibleOpt in opts;
          })[0];
          if (incompatibleOpt) {
            callback(createError$3(QUERY_PARSE_ERROR$1, "Query parameter `" + incompatibleOpt + "` is not compatible with multi-get"));
            return;
          }
          if (!isRemote$1(this)) {
            allDocsKeysParse(opts);
            if (opts.keys.length === 0) {
              return this._allDocs({ limit: 0 }, callback);
            }
          }
        }
        return this._allDocs(opts, callback);
      });
      AbstractPouchDB.prototype.changes = function (opts, callback) {
        if (typeof opts === "function") {
          callback = opts;
          opts = {};
        }
        opts = opts || {};
        opts.return_docs = "return_docs" in opts ? opts.return_docs : !opts.live;
        return new Changes$1$1(this, opts, callback);
      };
      AbstractPouchDB.prototype.close = adapterFun$1("close", function (callback) {
        this._closed = true;
        this.emit("closed");
        return this._close(callback);
      });
      AbstractPouchDB.prototype.info = adapterFun$1("info", function (callback) {
        var self = this;
        this._info(function (err, info) {
          if (err) {
            return callback(err);
          }
          info.db_name = info.db_name || self.name;
          info.auto_compaction = !!(self.auto_compaction && !isRemote$1(self));
          info.adapter = self.adapter;
          callback(null, info);
        });
      });
      AbstractPouchDB.prototype.id = adapterFun$1("id", function (callback) {
        return this._id(callback);
      });
      AbstractPouchDB.prototype.type = function () {
        return typeof this._type === "function" ? this._type() : this.adapter;
      };
      AbstractPouchDB.prototype.bulkDocs = adapterFun$1("bulkDocs", function (req, opts, callback) {
        if (typeof opts === "function") {
          callback = opts;
          opts = {};
        }
        opts = opts || {};
        if (Array.isArray(req)) {
          req = { docs: req };
        }
        if (!req || !req.docs || !Array.isArray(req.docs)) {
          return callback(createError$3(MISSING_BULK_DOCS$1));
        }
        for (var i = 0; i < req.docs.length; ++i) {
          if (typeof req.docs[i] !== "object" || Array.isArray(req.docs[i])) {
            return callback(createError$3(NOT_AN_OBJECT$1));
          }
        }
        var attachmentError;
        req.docs.forEach(function (doc) {
          if (doc._attachments) {
            Object.keys(doc._attachments).forEach(function (name) {
              attachmentError = attachmentError || attachmentNameError(name);
              if (!doc._attachments[name].content_type) {
                guardedConsole$1("warn", "Attachment", name, "on document", doc._id, "is missing content_type");
              }
            });
          }
        });
        if (attachmentError) {
          return callback(createError$3(BAD_REQUEST$1, attachmentError));
        }
        if (!("new_edits" in opts)) {
          if ("new_edits" in req) {
            opts.new_edits = req.new_edits;
          } else {
            opts.new_edits = true;
          }
        }
        var adapter = this;
        if (!opts.new_edits && !isRemote$1(adapter)) {
          req.docs.sort(compareByIdThenRev);
        }
        cleanDocs(req.docs);
        var ids = req.docs.map(function (doc) {
          return doc._id;
        });
        return this._bulkDocs(req, opts, function (err, res) {
          if (err) {
            return callback(err);
          }
          if (!opts.new_edits) {
            res = res.filter(function (x) {
              return x.error;
            });
          }
          if (!isRemote$1(adapter)) {
            for (var i = 0, l = res.length; i < l; i++) {
              res[i].id = res[i].id || ids[i];
            }
          }
          callback(null, res);
        });
      });
      AbstractPouchDB.prototype.registerDependentDatabase = adapterFun$1("registerDependentDatabase", function (dependentDb, callback) {
        var depDB = new this.constructor(dependentDb, this.__opts);
        function diffFun(doc) {
          doc.dependentDbs = doc.dependentDbs || {};
          if (doc.dependentDbs[dependentDb]) {
            return false;
          }
          doc.dependentDbs[dependentDb] = true;
          return doc;
        }
        upsert$1(this, "_local/_pouch_dependentDbs", diffFun).then(function () {
          callback(null, { db: depDB });
        }).catch(callback);
      });
      AbstractPouchDB.prototype.destroy = adapterFun$1("destroy", function (opts, callback) {
        if (typeof opts === "function") {
          callback = opts;
          opts = {};
        }
        var self = this;
        var usePrefix = "use_prefix" in self ? self.use_prefix : true;
        function destroyDb() {
          self._destroy(opts, function (err, resp) {
            if (err) {
              return callback(err);
            }
            self._destroyed = true;
            self.emit("destroyed");
            callback(null, resp || { "ok": true });
          });
        }
        if (isRemote$1(self)) {
          return destroyDb();
        }
        self.get("_local/_pouch_dependentDbs", function (err, localDoc) {
          if (err) {
            if (err.status !== 404) {
              return callback(err);
            } else {
              return destroyDb();
            }
          }
          var dependentDbs = localDoc.dependentDbs;
          var PouchDB = self.constructor;
          var deletedMap = Object.keys(dependentDbs).map(function (name) {
            var trueName = usePrefix ? name.replace(new RegExp("^" + PouchDB.prefix), "") : name;
            return new PouchDB(trueName, self.__opts).destroy();
          });
          Promise.all(deletedMap).then(destroyDb, callback);
        });
      });
      function TaskQueue() {
        this.isReady = false;
        this.failed = false;
        this.queue = [];
      }
      TaskQueue.prototype.execute = function () {
        var fun;
        if (this.failed) {
          while (fun = this.queue.shift()) {
            fun(this.failed);
          }
        } else {
          while (fun = this.queue.shift()) {
            fun();
          }
        }
      };
      TaskQueue.prototype.fail = function (err) {
        this.failed = err;
        this.execute();
      };
      TaskQueue.prototype.ready = function (db) {
        this.isReady = true;
        this.db = db;
        this.execute();
      };
      TaskQueue.prototype.addTask = function (fun) {
        this.queue.push(fun);
        if (this.failed) {
          this.execute();
        }
      };
      function parseAdapter(name, opts) {
        var match = name.match(/([a-z-]*):\/\/(.*)/);
        if (match) {
          return {
            name: /https?/.test(match[1]) ? match[1] + "://" + match[2] : match[2],
            adapter: match[1]
          };
        }
        var adapters = PouchDB.adapters;
        var preferredAdapters = PouchDB.preferredAdapters;
        var prefix = PouchDB.prefix;
        var adapterName = opts.adapter;
        if (!adapterName) {
          for (var i = 0; i < preferredAdapters.length; ++i) {
            adapterName = preferredAdapters[i];
            if (adapterName === "idb" && "websql" in adapters && hasLocalStorage$1() && localStorage["_pouch__websqldb_" + prefix + name]) {
              guardedConsole$1("log", "PouchDB is downgrading \"" + name + "\" to WebSQL to" + " avoid data loss, because it was already opened with WebSQL.");
              continue;
            }
            break;
          }
        }
        var adapter = adapters[adapterName];
        var usePrefix = adapter && "use_prefix" in adapter ? adapter.use_prefix : true;
        return {
          name: usePrefix ? prefix + name : name,
          adapter: adapterName
        };
      }
      function prepareForDestruction(self) {
        function onDestroyed(from_constructor) {
          self.removeListener("closed", onClosed);
          if (!from_constructor) {
            self.constructor.emit("destroyed", self.name);
          }
        }
        function onClosed() {
          self.removeListener("destroyed", onDestroyed);
          self.constructor.emit("unref", self);
        }
        self.once("destroyed", onDestroyed);
        self.once("closed", onClosed);
        self.constructor.emit("ref", self);
      }
      inherits$8(PouchDB, AbstractPouchDB);
      function PouchDB(name, opts) {
        if (!(this instanceof PouchDB)) {
          return new PouchDB(name, opts);
        }
        var self = this;
        opts = opts || {};
        if (name && typeof name === "object") {
          opts = name;
          name = opts.name;
          delete opts.name;
        }
        if (opts.deterministic_revs === undefined) {
          opts.deterministic_revs = true;
        }
        this.__opts = opts = clone$2(opts);
        self.auto_compaction = opts.auto_compaction;
        self.prefix = PouchDB.prefix;
        if (typeof name !== "string") {
          throw new Error("Missing/invalid DB name");
        }
        var prefixedName = (opts.prefix || "") + name;
        var backend = parseAdapter(prefixedName, opts);
        opts.name = backend.name;
        opts.adapter = opts.adapter || backend.adapter;
        self.name = name;
        self._adapter = opts.adapter;
        PouchDB.emit("debug", [
          "adapter",
          "Picked adapter: ",
          opts.adapter
        ]);
        if (!PouchDB.adapters[opts.adapter] || !PouchDB.adapters[opts.adapter].valid()) {
          throw new Error("Invalid Adapter: " + opts.adapter);
        }
        AbstractPouchDB.call(self);
        self.taskqueue = new TaskQueue();
        self.adapter = opts.adapter;
        PouchDB.adapters[opts.adapter].call(self, opts, function (err) {
          if (err) {
            return self.taskqueue.fail(err);
          }
          prepareForDestruction(self);
          self.emit("created", self);
          PouchDB.emit("created", self.name);
          self.taskqueue.ready(self);
        });
      }
      var a = typeof AbortController !== "undefined" ? AbortController : function () {
        return {
          abort: function () {
          }
        };
      };
      var f$1 = fetch;
      var h = Headers;
      PouchDB.adapters = {};
      PouchDB.preferredAdapters = [];
      PouchDB.prefix = "_pouch_";
      var eventEmitter = new events$2.EventEmitter();
      function setUpEventEmitter(Pouch) {
        Object.keys(events$2.EventEmitter.prototype).forEach(function (key) {
          if (typeof events$2.EventEmitter.prototype[key] === "function") {
            Pouch[key] = eventEmitter[key].bind(eventEmitter);
          }
        });
        var destructListeners = Pouch._destructionListeners = new ExportedMap();
        Pouch.on("ref", function onConstructorRef(db) {
          if (!destructListeners.has(db.name)) {
            destructListeners.set(db.name, []);
          }
          destructListeners.get(db.name).push(db);
        });
        Pouch.on("unref", function onConstructorUnref(db) {
          if (!destructListeners.has(db.name)) {
            return;
          }
          var dbList = destructListeners.get(db.name);
          var pos = dbList.indexOf(db);
          if (pos < 0) {
            return;
          }
          dbList.splice(pos, 1);
          if (dbList.length > 1) {
            destructListeners.set(db.name, dbList);
          } else {
            destructListeners.delete(db.name);
          }
        });
        Pouch.on("destroyed", function onConstructorDestroyed(name) {
          if (!destructListeners.has(name)) {
            return;
          }
          var dbList = destructListeners.get(name);
          destructListeners.delete(name);
          dbList.forEach(function (db) {
            db.emit("destroyed", true);
          });
        });
      }
      setUpEventEmitter(PouchDB);
      PouchDB.adapter = function (id, obj, addToPreferredAdapters) {
        if (obj.valid()) {
          PouchDB.adapters[id] = obj;
          if (addToPreferredAdapters) {
            PouchDB.preferredAdapters.push(id);
          }
        }
      };
      PouchDB.plugin = function (obj) {
        if (typeof obj === "function") {
          obj(PouchDB);
        } else if (typeof obj !== "object" || Object.keys(obj).length === 0) {
          throw new Error("Invalid plugin: got \"" + obj + "\", expected an object or a function");
        } else {
          Object.keys(obj).forEach(function (id) {
            PouchDB.prototype[id] = obj[id];
          });
        }
        if (this.__defaults) {
          PouchDB.__defaults = $inject_Object_assign({}, this.__defaults);
        }
        return PouchDB;
      };
      PouchDB.defaults = function (defaultOpts) {
        function PouchAlt(name, opts) {
          if (!(this instanceof PouchAlt)) {
            return new PouchAlt(name, opts);
          }
          opts = opts || {};
          if (name && typeof name === "object") {
            opts = name;
            name = opts.name;
            delete opts.name;
          }
          opts = $inject_Object_assign({}, PouchAlt.__defaults, opts);
          PouchDB.call(this, name, opts);
        }
        inherits$8(PouchAlt, PouchDB);
        PouchAlt.preferredAdapters = PouchDB.preferredAdapters.slice();
        Object.keys(PouchDB).forEach(function (key) {
          if (!(key in PouchAlt)) {
            PouchAlt[key] = PouchDB[key];
          }
        });
        PouchAlt.__defaults = $inject_Object_assign({}, this.__defaults, defaultOpts);
        return PouchAlt;
      };
      PouchDB.fetch = function (url, opts) {
        return f$1(url, opts);
      };
      var version$1 = "7.2.1";
      function getFieldFromDoc(doc, parsedField) {
        var value = doc;
        for (var i = 0, len = parsedField.length; i < len; i++) {
          var key = parsedField[i];
          value = value[key];
          if (!value) {
            break;
          }
        }
        return value;
      }
      function compare$1(left, right) {
        return left < right ? -1 : left > right ? 1 : 0;
      }
      function parseField(fieldName) {
        var fields = [];
        var current = "";
        for (var i = 0, len = fieldName.length; i < len; i++) {
          var ch = fieldName[i];
          if (ch === ".") {
            if (i > 0 && fieldName[i - 1] === "\\") {
              current = current.substring(0, current.length - 1) + ".";
            } else {
              fields.push(current);
              current = "";
            }
          } else {
            current += ch;
          }
        }
        fields.push(current);
        return fields;
      }
      var combinationFields = [
        "$or",
        "$nor",
        "$not"
      ];
      function isCombinationalField(field) {
        return combinationFields.indexOf(field) > -1;
      }
      function getKey(obj) {
        return Object.keys(obj)[0];
      }
      function getValue(obj) {
        return obj[getKey(obj)];
      }
      function mergeAndedSelectors(selectors) {
        var res = {};
        selectors.forEach(function (selector) {
          Object.keys(selector).forEach(function (field) {
            var matcher = selector[field];
            if (typeof matcher !== "object") {
              matcher = { $eq: matcher };
            }
            if (isCombinationalField(field)) {
              if (matcher instanceof Array) {
                res[field] = matcher.map(function (m) {
                  return mergeAndedSelectors([m]);
                });
              } else {
                res[field] = mergeAndedSelectors([matcher]);
              }
            } else {
              var fieldMatchers = res[field] = res[field] || {};
              Object.keys(matcher).forEach(function (operator) {
                var value = matcher[operator];
                if (operator === "$gt" || operator === "$gte") {
                  return mergeGtGte(operator, value, fieldMatchers);
                } else if (operator === "$lt" || operator === "$lte") {
                  return mergeLtLte(operator, value, fieldMatchers);
                } else if (operator === "$ne") {
                  return mergeNe(value, fieldMatchers);
                } else if (operator === "$eq") {
                  return mergeEq(value, fieldMatchers);
                }
                fieldMatchers[operator] = value;
              });
            }
          });
        });
        return res;
      }
      function mergeGtGte(operator, value, fieldMatchers) {
        if (typeof fieldMatchers.$eq !== "undefined") {
          return;
        }
        if (typeof fieldMatchers.$gte !== "undefined") {
          if (operator === "$gte") {
            if (value > fieldMatchers.$gte) {
              fieldMatchers.$gte = value;
            }
          } else {
            if (value >= fieldMatchers.$gte) {
              delete fieldMatchers.$gte;
              fieldMatchers.$gt = value;
            }
          }
        } else if (typeof fieldMatchers.$gt !== "undefined") {
          if (operator === "$gte") {
            if (value > fieldMatchers.$gt) {
              delete fieldMatchers.$gt;
              fieldMatchers.$gte = value;
            }
          } else {
            if (value > fieldMatchers.$gt) {
              fieldMatchers.$gt = value;
            }
          }
        } else {
          fieldMatchers[operator] = value;
        }
      }
      function mergeLtLte(operator, value, fieldMatchers) {
        if (typeof fieldMatchers.$eq !== "undefined") {
          return;
        }
        if (typeof fieldMatchers.$lte !== "undefined") {
          if (operator === "$lte") {
            if (value < fieldMatchers.$lte) {
              fieldMatchers.$lte = value;
            }
          } else {
            if (value <= fieldMatchers.$lte) {
              delete fieldMatchers.$lte;
              fieldMatchers.$lt = value;
            }
          }
        } else if (typeof fieldMatchers.$lt !== "undefined") {
          if (operator === "$lte") {
            if (value < fieldMatchers.$lt) {
              delete fieldMatchers.$lt;
              fieldMatchers.$lte = value;
            }
          } else {
            if (value < fieldMatchers.$lt) {
              fieldMatchers.$lt = value;
            }
          }
        } else {
          fieldMatchers[operator] = value;
        }
      }
      function mergeNe(value, fieldMatchers) {
        if ("$ne" in fieldMatchers) {
          fieldMatchers.$ne.push(value);
        } else {
          fieldMatchers.$ne = [value];
        }
      }
      function mergeEq(value, fieldMatchers) {
        delete fieldMatchers.$gt;
        delete fieldMatchers.$gte;
        delete fieldMatchers.$lt;
        delete fieldMatchers.$lte;
        delete fieldMatchers.$ne;
        fieldMatchers.$eq = value;
      }
      function mergeAndedSelectorsNested(obj) {
        for (var prop in obj) {
          if (Array.isArray(obj)) {
            for (var i in obj) {
              if (obj[i]["$and"]) {
                obj[i] = mergeAndedSelectors(obj[i]["$and"]);
              }
            }
          }
          var value = obj[prop];
          if (typeof value === "object") {
            mergeAndedSelectorsNested(value);
          }
        }
        return obj;
      }
      function isAndInSelector(obj, isAnd) {
        for (var prop in obj) {
          if (prop === "$and") {
            isAnd = true;
          }
          var value = obj[prop];
          if (typeof value === "object") {
            isAnd = isAndInSelector(value, isAnd);
          }
        }
        return isAnd;
      }
      function massageSelector(input) {
        var result = clone$2(input);
        var wasAnded = false;
        if (isAndInSelector(result, false)) {
          result = mergeAndedSelectorsNested(result);
          if ("$and" in result) {
            result = mergeAndedSelectors(result["$and"]);
          }
          wasAnded = true;
        }
        [
          "$or",
          "$nor"
        ].forEach(function (orOrNor) {
          if (orOrNor in result) {
            result[orOrNor].forEach(function (subSelector) {
              var fields = Object.keys(subSelector);
              for (var i = 0; i < fields.length; i++) {
                var field = fields[i];
                var matcher = subSelector[field];
                if (typeof matcher !== "object" || matcher === null) {
                  subSelector[field] = { $eq: matcher };
                }
              }
            });
          }
        });
        if ("$not" in result) {
          result["$not"] = mergeAndedSelectors([result["$not"]]);
        }
        var fields = Object.keys(result);
        for (var i = 0; i < fields.length; i++) {
          var field = fields[i];
          var matcher = result[field];
          if (typeof matcher !== "object" || matcher === null) {
            matcher = { $eq: matcher };
          } else if ("$ne" in matcher && !wasAnded) {
            matcher.$ne = [matcher.$ne];
          }
          result[field] = matcher;
        }
        return result;
      }
      function pad(str, padWith, upToLength) {
        var padding = "";
        var targetLength = upToLength - str.length;
        while (padding.length < targetLength) {
          padding += padWith;
        }
        return padding;
      }
      function padLeft(str, padWith, upToLength) {
        var padding = pad(str, padWith, upToLength);
        return padding + str;
      }
      var MIN_MAGNITUDE = -324;
      var MAGNITUDE_DIGITS = 3;
      var SEP = "";
      function collate(a, b) {
        if (a === b) {
          return 0;
        }
        a = normalizeKey(a);
        b = normalizeKey(b);
        var ai = collationIndex(a);
        var bi = collationIndex(b);
        if (ai - bi !== 0) {
          return ai - bi;
        }
        switch (typeof a) {
        case "number":
          return a - b;
        case "boolean":
          return a < b ? -1 : 1;
        case "string":
          return stringCollate(a, b);
        }
        return Array.isArray(a) ? arrayCollate(a, b) : objectCollate(a, b);
      }
      function normalizeKey(key) {
        switch (typeof key) {
        case "undefined":
          return null;
        case "number":
          if (key === Infinity || key === -Infinity || isNaN(key)) {
            return null;
          }
          return key;
        case "object":
          var origKey = key;
          if (Array.isArray(key)) {
            var len = key.length;
            key = new Array(len);
            for (var i = 0; i < len; i++) {
              key[i] = normalizeKey(origKey[i]);
            }
          } else if (key instanceof Date) {
            return key.toJSON();
          } else if (key !== null) {
            key = {};
            for (var k in origKey) {
              if (origKey.hasOwnProperty(k)) {
                var val = origKey[k];
                if (typeof val !== "undefined") {
                  key[k] = normalizeKey(val);
                }
              }
            }
          }
        }
        return key;
      }
      function indexify(key) {
        if (key !== null) {
          switch (typeof key) {
          case "boolean":
            return key ? 1 : 0;
          case "number":
            return numToIndexableString(key);
          case "string":
            return key.replace(/\u0002/g, "\x02\x02").replace(/\u0001/g, "\x01\x02").replace(/\u0000/g, "\x01\x01");
          case "object":
            var isArray = Array.isArray(key);
            var arr = isArray ? key : Object.keys(key);
            var i = -1;
            var len = arr.length;
            var result = "";
            if (isArray) {
              while (++i < len) {
                result += toIndexableString(arr[i]);
              }
            } else {
              while (++i < len) {
                var objKey = arr[i];
                result += toIndexableString(objKey) + toIndexableString(key[objKey]);
              }
            }
            return result;
          }
        }
        return "";
      }
      function toIndexableString(key) {
        var zero = "\0";
        key = normalizeKey(key);
        return collationIndex(key) + SEP + indexify(key) + zero;
      }
      function parseNumber(str, i) {
        var originalIdx = i;
        var num;
        var zero = str[i] === "1";
        if (zero) {
          num = 0;
          i++;
        } else {
          var neg = str[i] === "0";
          i++;
          var numAsString = "";
          var magAsString = str.substring(i, i + MAGNITUDE_DIGITS);
          var magnitude = parseInt(magAsString, 10) + MIN_MAGNITUDE;
          if (neg) {
            magnitude = -magnitude;
          }
          i += MAGNITUDE_DIGITS;
          while (true) {
            var ch = str[i];
            if (ch === "\0") {
              break;
            } else {
              numAsString += ch;
            }
            i++;
          }
          numAsString = numAsString.split(".");
          if (numAsString.length === 1) {
            num = parseInt(numAsString, 10);
          } else {
            num = parseFloat(numAsString[0] + "." + numAsString[1]);
          }
          if (neg) {
            num = num - 10;
          }
          if (magnitude !== 0) {
            num = parseFloat(num + "e" + magnitude);
          }
        }
        return {
          num: num,
          length: i - originalIdx
        };
      }
      function pop(stack, metaStack) {
        var obj = stack.pop();
        if (metaStack.length) {
          var lastMetaElement = metaStack[metaStack.length - 1];
          if (obj === lastMetaElement.element) {
            metaStack.pop();
            lastMetaElement = metaStack[metaStack.length - 1];
          }
          var element = lastMetaElement.element;
          var lastElementIndex = lastMetaElement.index;
          if (Array.isArray(element)) {
            element.push(obj);
          } else if (lastElementIndex === stack.length - 2) {
            var key = stack.pop();
            element[key] = obj;
          } else {
            stack.push(obj);
          }
        }
      }
      function parseIndexableString(str) {
        var stack = [];
        var metaStack = [];
        var i = 0;
        while (true) {
          var collationIndex = str[i++];
          if (collationIndex === "\0") {
            if (stack.length === 1) {
              return stack.pop();
            } else {
              pop(stack, metaStack);
              continue;
            }
          }
          switch (collationIndex) {
          case "1":
            stack.push(null);
            break;
          case "2":
            stack.push(str[i] === "1");
            i++;
            break;
          case "3":
            var parsedNum = parseNumber(str, i);
            stack.push(parsedNum.num);
            i += parsedNum.length;
            break;
          case "4":
            var parsedStr = "";
            while (true) {
              var ch = str[i];
              if (ch === "\0") {
                break;
              }
              parsedStr += ch;
              i++;
            }
            parsedStr = parsedStr.replace(/\u0001\u0001/g, "\0").replace(/\u0001\u0002/g, "\x01").replace(/\u0002\u0002/g, "\x02");
            stack.push(parsedStr);
            break;
          case "5":
            var arrayElement = {
              element: [],
              index: stack.length
            };
            stack.push(arrayElement.element);
            metaStack.push(arrayElement);
            break;
          case "6":
            var objElement = {
              element: {},
              index: stack.length
            };
            stack.push(objElement.element);
            metaStack.push(objElement);
            break;
          default:
            throw new Error("bad collationIndex or unexpectedly reached end of input: " + collationIndex);
          }
        }
      }
      function arrayCollate(a, b) {
        var len = Math.min(a.length, b.length);
        for (var i = 0; i < len; i++) {
          var sort = collate(a[i], b[i]);
          if (sort !== 0) {
            return sort;
          }
        }
        return a.length === b.length ? 0 : a.length > b.length ? 1 : -1;
      }
      function stringCollate(a, b) {
        return a === b ? 0 : a > b ? 1 : -1;
      }
      function objectCollate(a, b) {
        var ak = Object.keys(a), bk = Object.keys(b);
        var len = Math.min(ak.length, bk.length);
        for (var i = 0; i < len; i++) {
          var sort = collate(ak[i], bk[i]);
          if (sort !== 0) {
            return sort;
          }
          sort = collate(a[ak[i]], b[bk[i]]);
          if (sort !== 0) {
            return sort;
          }
        }
        return ak.length === bk.length ? 0 : ak.length > bk.length ? 1 : -1;
      }
      function collationIndex(x) {
        var id = [
          "boolean",
          "number",
          "string",
          "object"
        ];
        var idx = id.indexOf(typeof x);
        if (~idx) {
          if (x === null) {
            return 1;
          }
          if (Array.isArray(x)) {
            return 5;
          }
          return idx < 3 ? idx + 2 : idx + 3;
        }
        if (Array.isArray(x)) {
          return 5;
        }
      }
      function numToIndexableString(num) {
        if (num === 0) {
          return "1";
        }
        var expFormat = num.toExponential().split(/e\+?/);
        var magnitude = parseInt(expFormat[1], 10);
        var neg = num < 0;
        var result = neg ? "0" : "2";
        var magForComparison = (neg ? -magnitude : magnitude) - MIN_MAGNITUDE;
        var magString = padLeft(magForComparison.toString(), "0", MAGNITUDE_DIGITS);
        result += SEP + magString;
        var factor = Math.abs(parseFloat(expFormat[0]));
        if (neg) {
          factor = 10 - factor;
        }
        var factorStr = factor.toFixed(20);
        factorStr = factorStr.replace(/\.?0+$/, "");
        result += SEP + factorStr;
        return result;
      }
      function createFieldSorter(sort) {
        function getFieldValuesAsArray(doc) {
          return sort.map(function (sorting) {
            var fieldName = getKey(sorting);
            var parsedField = parseField(fieldName);
            var docFieldValue = getFieldFromDoc(doc, parsedField);
            return docFieldValue;
          });
        }
        return function (aRow, bRow) {
          var aFieldValues = getFieldValuesAsArray(aRow.doc);
          var bFieldValues = getFieldValuesAsArray(bRow.doc);
          var collation = collate(aFieldValues, bFieldValues);
          if (collation !== 0) {
            return collation;
          }
          return compare$1(aRow.doc._id, bRow.doc._id);
        };
      }
      function filterInMemoryFields(rows, requestDef, inMemoryFields) {
        rows = rows.filter(function (row) {
          return rowFilter(row.doc, requestDef.selector, inMemoryFields);
        });
        if (requestDef.sort) {
          var fieldSorter = createFieldSorter(requestDef.sort);
          rows = rows.sort(fieldSorter);
          if (typeof requestDef.sort[0] !== "string" && getValue(requestDef.sort[0]) === "desc") {
            rows = rows.reverse();
          }
        }
        if ("limit" in requestDef || "skip" in requestDef) {
          var skip = requestDef.skip || 0;
          var limit = ("limit" in requestDef ? requestDef.limit : rows.length) + skip;
          rows = rows.slice(skip, limit);
        }
        return rows;
      }
      function rowFilter(doc, selector, inMemoryFields) {
        return inMemoryFields.every(function (field) {
          var matcher = selector[field];
          var parsedField = parseField(field);
          var docFieldValue = getFieldFromDoc(doc, parsedField);
          if (isCombinationalField(field)) {
            return matchCominationalSelector(field, matcher, doc);
          }
          return matchSelector(matcher, doc, parsedField, docFieldValue);
        });
      }
      function matchSelector(matcher, doc, parsedField, docFieldValue) {
        if (!matcher) {
          return true;
        }
        if (typeof matcher === "object") {
          return Object.keys(matcher).every(function (userOperator) {
            var userValue = matcher[userOperator];
            return match(userOperator, doc, userValue, parsedField, docFieldValue);
          });
        }
        return matcher === docFieldValue;
      }
      function matchCominationalSelector(field, matcher, doc) {
        if (field === "$or") {
          return matcher.some(function (orMatchers) {
            return rowFilter(doc, orMatchers, Object.keys(orMatchers));
          });
        }
        if (field === "$not") {
          return !rowFilter(doc, matcher, Object.keys(matcher));
        }
        return !matcher.find(function (orMatchers) {
          return rowFilter(doc, orMatchers, Object.keys(orMatchers));
        });
      }
      function match(userOperator, doc, userValue, parsedField, docFieldValue) {
        if (!matchers[userOperator]) {
          throw new Error("unknown operator \"" + userOperator + "\" - should be one of $eq, $lte, $lt, $gt, $gte, $exists, $ne, $in, " + "$nin, $size, $mod, $regex, $elemMatch, $type, $allMatch or $all");
        }
        return matchers[userOperator](doc, userValue, parsedField, docFieldValue);
      }
      function fieldExists(docFieldValue) {
        return typeof docFieldValue !== "undefined" && docFieldValue !== null;
      }
      function fieldIsNotUndefined(docFieldValue) {
        return typeof docFieldValue !== "undefined";
      }
      function modField(docFieldValue, userValue) {
        var divisor = userValue[0];
        var mod = userValue[1];
        if (divisor === 0) {
          throw new Error("Bad divisor, cannot divide by zero");
        }
        if (parseInt(divisor, 10) !== divisor) {
          throw new Error("Divisor is not an integer");
        }
        if (parseInt(mod, 10) !== mod) {
          throw new Error("Modulus is not an integer");
        }
        if (parseInt(docFieldValue, 10) !== docFieldValue) {
          return false;
        }
        return docFieldValue % divisor === mod;
      }
      function arrayContainsValue(docFieldValue, userValue) {
        return userValue.some(function (val) {
          if (docFieldValue instanceof Array) {
            return docFieldValue.indexOf(val) > -1;
          }
          return docFieldValue === val;
        });
      }
      function arrayContainsAllValues(docFieldValue, userValue) {
        return userValue.every(function (val) {
          return docFieldValue.indexOf(val) > -1;
        });
      }
      function arraySize(docFieldValue, userValue) {
        return docFieldValue.length === userValue;
      }
      function regexMatch(docFieldValue, userValue) {
        var re = new RegExp(userValue);
        return re.test(docFieldValue);
      }
      function typeMatch(docFieldValue, userValue) {
        switch (userValue) {
        case "null":
          return docFieldValue === null;
        case "boolean":
          return typeof docFieldValue === "boolean";
        case "number":
          return typeof docFieldValue === "number";
        case "string":
          return typeof docFieldValue === "string";
        case "array":
          return docFieldValue instanceof Array;
        case "object":
          return {}.toString.call(docFieldValue) === "[object Object]";
        }
        throw new Error(userValue + " not supported as a type." + "Please use one of object, string, array, number, boolean or null.");
      }
      var matchers = {
        "$elemMatch": function (doc, userValue, parsedField, docFieldValue) {
          if (!Array.isArray(docFieldValue)) {
            return false;
          }
          if (docFieldValue.length === 0) {
            return false;
          }
          if (typeof docFieldValue[0] === "object") {
            return docFieldValue.some(function (val) {
              return rowFilter(val, userValue, Object.keys(userValue));
            });
          }
          return docFieldValue.some(function (val) {
            return matchSelector(userValue, doc, parsedField, val);
          });
        },
        "$allMatch": function (doc, userValue, parsedField, docFieldValue) {
          if (!Array.isArray(docFieldValue)) {
            return false;
          }
          if (docFieldValue.length === 0) {
            return false;
          }
          if (typeof docFieldValue[0] === "object") {
            return docFieldValue.every(function (val) {
              return rowFilter(val, userValue, Object.keys(userValue));
            });
          }
          return docFieldValue.every(function (val) {
            return matchSelector(userValue, doc, parsedField, val);
          });
        },
        "$eq": function (doc, userValue, parsedField, docFieldValue) {
          return fieldIsNotUndefined(docFieldValue) && collate(docFieldValue, userValue) === 0;
        },
        "$gte": function (doc, userValue, parsedField, docFieldValue) {
          return fieldIsNotUndefined(docFieldValue) && collate(docFieldValue, userValue) >= 0;
        },
        "$gt": function (doc, userValue, parsedField, docFieldValue) {
          return fieldIsNotUndefined(docFieldValue) && collate(docFieldValue, userValue) > 0;
        },
        "$lte": function (doc, userValue, parsedField, docFieldValue) {
          return fieldIsNotUndefined(docFieldValue) && collate(docFieldValue, userValue) <= 0;
        },
        "$lt": function (doc, userValue, parsedField, docFieldValue) {
          return fieldIsNotUndefined(docFieldValue) && collate(docFieldValue, userValue) < 0;
        },
        "$exists": function (doc, userValue, parsedField, docFieldValue) {
          if (userValue) {
            return fieldIsNotUndefined(docFieldValue);
          }
          return !fieldIsNotUndefined(docFieldValue);
        },
        "$mod": function (doc, userValue, parsedField, docFieldValue) {
          return fieldExists(docFieldValue) && modField(docFieldValue, userValue);
        },
        "$ne": function (doc, userValue, parsedField, docFieldValue) {
          return userValue.every(function (neValue) {
            return collate(docFieldValue, neValue) !== 0;
          });
        },
        "$in": function (doc, userValue, parsedField, docFieldValue) {
          return fieldExists(docFieldValue) && arrayContainsValue(docFieldValue, userValue);
        },
        "$nin": function (doc, userValue, parsedField, docFieldValue) {
          return fieldExists(docFieldValue) && !arrayContainsValue(docFieldValue, userValue);
        },
        "$size": function (doc, userValue, parsedField, docFieldValue) {
          return fieldExists(docFieldValue) && arraySize(docFieldValue, userValue);
        },
        "$all": function (doc, userValue, parsedField, docFieldValue) {
          return Array.isArray(docFieldValue) && arrayContainsAllValues(docFieldValue, userValue);
        },
        "$regex": function (doc, userValue, parsedField, docFieldValue) {
          return fieldExists(docFieldValue) && regexMatch(docFieldValue, userValue);
        },
        "$type": function (doc, userValue, parsedField, docFieldValue) {
          return typeMatch(docFieldValue, userValue);
        }
      };
      function matchesSelector(doc, selector) {
        if (typeof selector !== "object") {
          throw new Error("Selector error: expected a JSON object");
        }
        selector = massageSelector(selector);
        var row = { "doc": doc };
        var rowsMatched = filterInMemoryFields([row], { "selector": selector }, Object.keys(selector));
        return rowsMatched && rowsMatched.length === 1;
      }
      function evalFilter(input) {
        return scopeEval$1("\"use strict\";\nreturn " + input + ";", {});
      }
      function evalView(input) {
        var code = [
          "return function(doc) {",
          "  \"use strict\";",
          "  var emitted = false;",
          "  var emit = function (a, b) {",
          "    emitted = true;",
          "  };",
          "  var view = " + input + ";",
          "  view(doc);",
          "  if (emitted) {",
          "    return true;",
          "  }",
          "};"
        ].join("\n");
        return scopeEval$1(code, {});
      }
      function validate(opts, callback) {
        if (opts.selector) {
          if (opts.filter && opts.filter !== "_selector") {
            var filterName = typeof opts.filter === "string" ? opts.filter : "function";
            return callback(new Error("selector invalid for filter \"" + filterName + "\""));
          }
        }
        callback();
      }
      function normalize(opts) {
        if (opts.view && !opts.filter) {
          opts.filter = "_view";
        }
        if (opts.selector && !opts.filter) {
          opts.filter = "_selector";
        }
        if (opts.filter && typeof opts.filter === "string") {
          if (opts.filter === "_view") {
            opts.view = normalizeDesignDocFunctionName$1(opts.view);
          } else {
            opts.filter = normalizeDesignDocFunctionName$1(opts.filter);
          }
        }
      }
      function shouldFilter(changesHandler, opts) {
        return opts.filter && typeof opts.filter === "string" && !opts.doc_ids && !isRemote$1(changesHandler.db);
      }
      function filter(changesHandler, opts) {
        var callback = opts.complete;
        if (opts.filter === "_view") {
          if (!opts.view || typeof opts.view !== "string") {
            var err = createError$3(BAD_REQUEST$1, "`view` filter parameter not found or invalid.");
            return callback(err);
          }
          var viewName = parseDesignDocFunctionName$1(opts.view);
          changesHandler.db.get("_design/" + viewName[0], function (err, ddoc) {
            if (changesHandler.isCancelled) {
              return callback(null, { status: "cancelled" });
            }
            if (err) {
              return callback(generateErrorFromResponse$1(err));
            }
            var mapFun = ddoc && ddoc.views && ddoc.views[viewName[1]] && ddoc.views[viewName[1]].map;
            if (!mapFun) {
              return callback(createError$3(MISSING_DOC$1, ddoc.views ? "missing json key: " + viewName[1] : "missing json key: views"));
            }
            opts.filter = evalView(mapFun);
            changesHandler.doChanges(opts);
          });
        } else if (opts.selector) {
          opts.filter = function (doc) {
            return matchesSelector(doc, opts.selector);
          };
          changesHandler.doChanges(opts);
        } else {
          var filterName = parseDesignDocFunctionName$1(opts.filter);
          changesHandler.db.get("_design/" + filterName[0], function (err, ddoc) {
            if (changesHandler.isCancelled) {
              return callback(null, { status: "cancelled" });
            }
            if (err) {
              return callback(generateErrorFromResponse$1(err));
            }
            var filterFun = ddoc && ddoc.filters && ddoc.filters[filterName[1]];
            if (!filterFun) {
              return callback(createError$3(MISSING_DOC$1, ddoc && ddoc.filters ? "missing json key: " + filterName[1] : "missing json key: filters"));
            }
            opts.filter = evalFilter(filterFun);
            changesHandler.doChanges(opts);
          });
        }
      }
      function applyChangesFilterPlugin(PouchDB) {
        PouchDB._changesFilterPlugin = {
          validate: validate,
          normalize: normalize,
          shouldFilter: shouldFilter,
          filter: filter
        };
      }
      PouchDB.plugin(applyChangesFilterPlugin);
      PouchDB.version = version$1;
      function toObject$1(array) {
        return array.reduce(function (obj, item) {
          obj[item] = true;
          return obj;
        }, {});
      }
      var reservedWords$1 = toObject$1([
        "_id",
        "_rev",
        "_attachments",
        "_deleted",
        "_revisions",
        "_revs_info",
        "_conflicts",
        "_deleted_conflicts",
        "_local_seq",
        "_rev_tree",
        "_replication_id",
        "_replication_state",
        "_replication_state_time",
        "_replication_state_reason",
        "_replication_stats",
        "_removed"
      ]);
      var dataWords$1 = toObject$1([
        "_attachments",
        "_replication_id",
        "_replication_state",
        "_replication_state_time",
        "_replication_state_reason",
        "_replication_stats"
      ]);
      function parseRevisionInfo$1(rev$$1) {
        if (!/^\d+-/.test(rev$$1)) {
          return createError$3(INVALID_REV$1);
        }
        var idx = rev$$1.indexOf("-");
        var left = rev$$1.substring(0, idx);
        var right = rev$$1.substring(idx + 1);
        return {
          prefix: parseInt(left, 10),
          id: right
        };
      }
      function makeRevTreeFromRevisions$1(revisions, opts) {
        var pos = revisions.start - revisions.ids.length + 1;
        var revisionIds = revisions.ids;
        var ids = [
          revisionIds[0],
          opts,
          []
        ];
        for (var i = 1, len = revisionIds.length; i < len; i++) {
          ids = [
            revisionIds[i],
            { status: "missing" },
            [ids]
          ];
        }
        return [{
            pos: pos,
            ids: ids
          }];
      }
      function parseDoc$1(doc, newEdits, dbOpts) {
        if (!dbOpts) {
          dbOpts = { deterministic_revs: true };
        }
        var nRevNum;
        var newRevId;
        var revInfo;
        var opts = { status: "available" };
        if (doc._deleted) {
          opts.deleted = true;
        }
        if (newEdits) {
          if (!doc._id) {
            doc._id = uuid$1();
          }
          newRevId = rev$1(doc, dbOpts.deterministic_revs);
          if (doc._rev) {
            revInfo = parseRevisionInfo$1(doc._rev);
            if (revInfo.error) {
              return revInfo;
            }
            doc._rev_tree = [{
                pos: revInfo.prefix,
                ids: [
                  revInfo.id,
                  { status: "missing" },
                  [[
                      newRevId,
                      opts,
                      []
                    ]]
                ]
              }];
            nRevNum = revInfo.prefix + 1;
          } else {
            doc._rev_tree = [{
                pos: 1,
                ids: [
                  newRevId,
                  opts,
                  []
                ]
              }];
            nRevNum = 1;
          }
        } else {
          if (doc._revisions) {
            doc._rev_tree = makeRevTreeFromRevisions$1(doc._revisions, opts);
            nRevNum = doc._revisions.start;
            newRevId = doc._revisions.ids[0];
          }
          if (!doc._rev_tree) {
            revInfo = parseRevisionInfo$1(doc._rev);
            if (revInfo.error) {
              return revInfo;
            }
            nRevNum = revInfo.prefix;
            newRevId = revInfo.id;
            doc._rev_tree = [{
                pos: nRevNum,
                ids: [
                  newRevId,
                  opts,
                  []
                ]
              }];
          }
        }
        invalidIdError$1(doc._id);
        doc._rev = nRevNum + "-" + newRevId;
        var result = {
          metadata: {},
          data: {}
        };
        for (var key in doc) {
          if (Object.prototype.hasOwnProperty.call(doc, key)) {
            var specialKey = key[0] === "_";
            if (specialKey && !reservedWords$1[key]) {
              var error = createError$3(DOC_VALIDATION$1, key);
              error.message = DOC_VALIDATION$1.message + ": " + key;
              throw error;
            } else if (specialKey && !dataWords$1[key]) {
              result.metadata[key.slice(1)] = doc[key];
            } else {
              result.data[key] = doc[key];
            }
          }
        }
        return result;
      }
      function parseBase64$1(data) {
        try {
          return thisAtob$1(data);
        } catch (e) {
          var err = createError$3(BAD_ARG$1, "Attachment is not a valid base64 string");
          return { error: err };
        }
      }
      function preprocessString$1(att, blobType, callback) {
        var asBinary = parseBase64$1(att.data);
        if (asBinary.error) {
          return callback(asBinary.error);
        }
        att.length = asBinary.length;
        if (blobType === "blob") {
          att.data = binStringToBluffer$1(asBinary, att.content_type);
        } else if (blobType === "base64") {
          att.data = thisBtoa$1(asBinary);
        } else {
          att.data = asBinary;
        }
        binaryMd5$1(asBinary, function (result) {
          att.digest = "md5-" + result;
          callback();
        });
      }
      function preprocessBlob$1(att, blobType, callback) {
        binaryMd5$1(att.data, function (md5) {
          att.digest = "md5-" + md5;
          att.length = att.data.size || att.data.length || 0;
          if (blobType === "binary") {
            blobToBinaryString$1(att.data, function (binString) {
              att.data = binString;
              callback();
            });
          } else if (blobType === "base64") {
            blobToBase64$1(att.data, function (b64) {
              att.data = b64;
              callback();
            });
          } else {
            callback();
          }
        });
      }
      function preprocessAttachment$1(att, blobType, callback) {
        if (att.stub) {
          return callback();
        }
        if (typeof att.data === "string") {
          preprocessString$1(att, blobType, callback);
        } else {
          preprocessBlob$1(att, blobType, callback);
        }
      }
      function preprocessAttachments$1(docInfos, blobType, callback) {
        if (!docInfos.length) {
          return callback();
        }
        var docv = 0;
        var overallErr;
        docInfos.forEach(function (docInfo) {
          var attachments = docInfo.data && docInfo.data._attachments ? Object.keys(docInfo.data._attachments) : [];
          var recv = 0;
          if (!attachments.length) {
            return done();
          }
          function processedAttachment(err) {
            overallErr = err;
            recv++;
            if (recv === attachments.length) {
              done();
            }
          }
          for (var key in docInfo.data._attachments) {
            if (docInfo.data._attachments.hasOwnProperty(key)) {
              preprocessAttachment$1(docInfo.data._attachments[key], blobType, processedAttachment);
            }
          }
        });
        function done() {
          docv++;
          if (docInfos.length === docv) {
            if (overallErr) {
              callback(overallErr);
            } else {
              callback();
            }
          }
        }
      }
      function updateDoc$1(revLimit, prev, docInfo, results, i, cb, writeDoc, newEdits) {
        if (revExists$1(prev.rev_tree, docInfo.metadata.rev) && !newEdits) {
          results[i] = docInfo;
          return cb();
        }
        var previousWinningRev = prev.winningRev || winningRev$1(prev);
        var previouslyDeleted = "deleted" in prev ? prev.deleted : isDeleted$1(prev, previousWinningRev);
        var deleted = "deleted" in docInfo.metadata ? docInfo.metadata.deleted : isDeleted$1(docInfo.metadata);
        var isRoot = /^1-/.test(docInfo.metadata.rev);
        if (previouslyDeleted && !deleted && newEdits && isRoot) {
          var newDoc = docInfo.data;
          newDoc._rev = previousWinningRev;
          newDoc._id = docInfo.metadata.id;
          docInfo = parseDoc$1(newDoc, newEdits);
        }
        var merged = merge$1(prev.rev_tree, docInfo.metadata.rev_tree[0], revLimit);
        var inConflict = newEdits && (previouslyDeleted && deleted && merged.conflicts !== "new_leaf" || !previouslyDeleted && merged.conflicts !== "new_leaf" || previouslyDeleted && !deleted && merged.conflicts === "new_branch");
        if (inConflict) {
          var err = createError$3(REV_CONFLICT$1);
          results[i] = err;
          return cb();
        }
        var newRev = docInfo.metadata.rev;
        docInfo.metadata.rev_tree = merged.tree;
        docInfo.stemmedRevs = merged.stemmedRevs || [];
        if (prev.rev_map) {
          docInfo.metadata.rev_map = prev.rev_map;
        }
        var winningRev$$1 = winningRev$1(docInfo.metadata);
        var winningRevIsDeleted = isDeleted$1(docInfo.metadata, winningRev$$1);
        var delta = previouslyDeleted === winningRevIsDeleted ? 0 : previouslyDeleted < winningRevIsDeleted ? -1 : 1;
        var newRevIsDeleted;
        if (newRev === winningRev$$1) {
          newRevIsDeleted = winningRevIsDeleted;
        } else {
          newRevIsDeleted = isDeleted$1(docInfo.metadata, newRev);
        }
        writeDoc(docInfo, winningRev$$1, winningRevIsDeleted, newRevIsDeleted, true, delta, i, cb);
      }
      function rootIsMissing$1(docInfo) {
        return docInfo.metadata.rev_tree[0].ids[1].status === "missing";
      }
      function processDocs$1(revLimit, docInfos, api, fetchedDocs, tx, results, writeDoc, opts, overallCallback) {
        revLimit = revLimit || 1000;
        function insertDoc(docInfo, resultsIdx, callback) {
          var winningRev$$1 = winningRev$1(docInfo.metadata);
          var deleted = isDeleted$1(docInfo.metadata, winningRev$$1);
          if ("was_delete" in opts && deleted) {
            results[resultsIdx] = createError$3(MISSING_DOC$1, "deleted");
            return callback();
          }
          var inConflict = newEdits && rootIsMissing$1(docInfo);
          if (inConflict) {
            var err = createError$3(REV_CONFLICT$1);
            results[resultsIdx] = err;
            return callback();
          }
          var delta = deleted ? 0 : 1;
          writeDoc(docInfo, winningRev$$1, deleted, deleted, false, delta, resultsIdx, callback);
        }
        var newEdits = opts.new_edits;
        var idsToDocs = new ExportedMap();
        var docsDone = 0;
        var docsToDo = docInfos.length;
        function checkAllDocsDone() {
          if (++docsDone === docsToDo && overallCallback) {
            overallCallback();
          }
        }
        docInfos.forEach(function (currentDoc, resultsIdx) {
          if (currentDoc._id && isLocalId$1(currentDoc._id)) {
            var fun = currentDoc._deleted ? "_removeLocal" : "_putLocal";
            api[fun](currentDoc, { ctx: tx }, function (err, res) {
              results[resultsIdx] = err || res;
              checkAllDocsDone();
            });
            return;
          }
          var id = currentDoc.metadata.id;
          if (idsToDocs.has(id)) {
            docsToDo--;
            idsToDocs.get(id).push([
              currentDoc,
              resultsIdx
            ]);
          } else {
            idsToDocs.set(id, [[
                currentDoc,
                resultsIdx
              ]]);
          }
        });
        idsToDocs.forEach(function (docs, id) {
          var numDone = 0;
          function docWritten() {
            if (++numDone < docs.length) {
              nextDoc();
            } else {
              checkAllDocsDone();
            }
          }
          function nextDoc() {
            var value = docs[numDone];
            var currentDoc = value[0];
            var resultsIdx = value[1];
            if (fetchedDocs.has(id)) {
              updateDoc$1(revLimit, fetchedDocs.get(id), currentDoc, results, resultsIdx, docWritten, writeDoc, newEdits);
            } else {
              var merged = merge$1([], currentDoc.metadata.rev_tree[0], revLimit);
              currentDoc.metadata.rev_tree = merged.tree;
              currentDoc.stemmedRevs = merged.stemmedRevs || [];
              insertDoc(currentDoc, resultsIdx, docWritten);
            }
          }
          nextDoc();
        });
      }
      var ADAPTER_VERSION = 5;
      var DOC_STORE$1 = "document-store";
      var BY_SEQ_STORE$1 = "by-sequence";
      var ATTACH_STORE = "attach-store";
      var ATTACH_AND_SEQ_STORE = "attach-seq-store";
      var META_STORE$1 = "meta-store";
      var LOCAL_STORE$1 = "local-store";
      var DETECT_BLOB_SUPPORT_STORE = "detect-blob-support";
      function safeJsonParse$1(str) {
        try {
          return JSON.parse(str);
        } catch (e) {
          return vuvuzela$1.parse(str);
        }
      }
      function safeJsonStringify$1(json) {
        try {
          return JSON.stringify(json);
        } catch (e) {
          return vuvuzela$1.stringify(json);
        }
      }
      function idbError(callback) {
        return function (evt) {
          var message = "unknown_error";
          if (evt.target && evt.target.error) {
            message = evt.target.error.name || evt.target.error.message;
          }
          callback(createError$3(IDB_ERROR$1, message, evt.type));
        };
      }
      function encodeMetadata(metadata, winningRev, deleted) {
        return {
          data: safeJsonStringify$1(metadata),
          winningRev: winningRev,
          deletedOrLocal: deleted ? "1" : "0",
          seq: metadata.seq,
          id: metadata.id
        };
      }
      function decodeMetadata(storedObject) {
        if (!storedObject) {
          return null;
        }
        var metadata = safeJsonParse$1(storedObject.data);
        metadata.winningRev = storedObject.winningRev;
        metadata.deleted = storedObject.deletedOrLocal === "1";
        metadata.seq = storedObject.seq;
        return metadata;
      }
      function decodeDoc(doc) {
        if (!doc) {
          return doc;
        }
        var idx = doc._doc_id_rev.lastIndexOf(":");
        doc._id = doc._doc_id_rev.substring(0, idx - 1);
        doc._rev = doc._doc_id_rev.substring(idx + 1);
        delete doc._doc_id_rev;
        return doc;
      }
      function readBlobData(body, type, asBlob, callback) {
        if (asBlob) {
          if (!body) {
            callback(createBlob$1([""], { type: type }));
          } else if (typeof body !== "string") {
            callback(body);
          } else {
            callback(b64ToBluffer$1(body, type));
          }
        } else {
          if (!body) {
            callback("");
          } else if (typeof body !== "string") {
            readAsBinaryString$1(body, function (binary) {
              callback(thisBtoa$1(binary));
            });
          } else {
            callback(body);
          }
        }
      }
      function fetchAttachmentsIfNecessary(doc, opts, txn, cb) {
        var attachments = Object.keys(doc._attachments || {});
        if (!attachments.length) {
          return cb && cb();
        }
        var numDone = 0;
        function checkDone() {
          if (++numDone === attachments.length && cb) {
            cb();
          }
        }
        function fetchAttachment(doc, att) {
          var attObj = doc._attachments[att];
          var digest = attObj.digest;
          var req = txn.objectStore(ATTACH_STORE).get(digest);
          req.onsuccess = function (e) {
            attObj.body = e.target.result.body;
            checkDone();
          };
        }
        attachments.forEach(function (att) {
          if (opts.attachments && opts.include_docs) {
            fetchAttachment(doc, att);
          } else {
            doc._attachments[att].stub = true;
            checkDone();
          }
        });
      }
      function postProcessAttachments(results, asBlob) {
        return Promise.all(results.map(function (row) {
          if (row.doc && row.doc._attachments) {
            var attNames = Object.keys(row.doc._attachments);
            return Promise.all(attNames.map(function (att) {
              var attObj = row.doc._attachments[att];
              if (!("body" in attObj)) {
                return;
              }
              var body = attObj.body;
              var type = attObj.content_type;
              return new Promise(function (resolve) {
                readBlobData(body, type, asBlob, function (data) {
                  row.doc._attachments[att] = $inject_Object_assign(pick$1(attObj, [
                    "digest",
                    "content_type"
                  ]), { data: data });
                  resolve();
                });
              });
            }));
          }
        }));
      }
      function compactRevs(revs, docId, txn) {
        var possiblyOrphanedDigests = [];
        var seqStore = txn.objectStore(BY_SEQ_STORE$1);
        var attStore = txn.objectStore(ATTACH_STORE);
        var attAndSeqStore = txn.objectStore(ATTACH_AND_SEQ_STORE);
        var count = revs.length;
        function checkDone() {
          count--;
          if (!count) {
            deleteOrphanedAttachments();
          }
        }
        function deleteOrphanedAttachments() {
          if (!possiblyOrphanedDigests.length) {
            return;
          }
          possiblyOrphanedDigests.forEach(function (digest) {
            var countReq = attAndSeqStore.index("digestSeq").count(IDBKeyRange.bound(digest + "::", digest + "::\uFFFF", false, false));
            countReq.onsuccess = function (e) {
              var count = e.target.result;
              if (!count) {
                attStore.delete(digest);
              }
            };
          });
        }
        revs.forEach(function (rev$$1) {
          var index = seqStore.index("_doc_id_rev");
          var key = docId + "::" + rev$$1;
          index.getKey(key).onsuccess = function (e) {
            var seq = e.target.result;
            if (typeof seq !== "number") {
              return checkDone();
            }
            seqStore.delete(seq);
            var cursor = attAndSeqStore.index("seq").openCursor(IDBKeyRange.only(seq));
            cursor.onsuccess = function (event) {
              var cursor = event.target.result;
              if (cursor) {
                var digest = cursor.value.digestSeq.split("::")[0];
                possiblyOrphanedDigests.push(digest);
                attAndSeqStore.delete(cursor.primaryKey);
                cursor.continue();
              } else {
                checkDone();
              }
            };
          };
        });
      }
      function openTransactionSafely(idb, stores, mode) {
        try {
          return { txn: idb.transaction(stores, mode) };
        } catch (err) {
          return { error: err };
        }
      }
      var changesHandler = new Changes$1();
      function idbBulkDocs(dbOpts, req, opts, api, idb, callback) {
        var docInfos = req.docs;
        var txn;
        var docStore;
        var bySeqStore;
        var attachStore;
        var attachAndSeqStore;
        var metaStore;
        var docInfoError;
        var metaDoc;
        for (var i = 0, len = docInfos.length; i < len; i++) {
          var doc = docInfos[i];
          if (doc._id && isLocalId$1(doc._id)) {
            continue;
          }
          doc = docInfos[i] = parseDoc$1(doc, opts.new_edits, dbOpts);
          if (doc.error && !docInfoError) {
            docInfoError = doc;
          }
        }
        if (docInfoError) {
          return callback(docInfoError);
        }
        var allDocsProcessed = false;
        var docCountDelta = 0;
        var results = new Array(docInfos.length);
        var fetchedDocs = new ExportedMap();
        var preconditionErrored = false;
        var blobType = api._meta.blobSupport ? "blob" : "base64";
        preprocessAttachments$1(docInfos, blobType, function (err) {
          if (err) {
            return callback(err);
          }
          startTransaction();
        });
        function startTransaction() {
          var stores = [
            DOC_STORE$1,
            BY_SEQ_STORE$1,
            ATTACH_STORE,
            LOCAL_STORE$1,
            ATTACH_AND_SEQ_STORE,
            META_STORE$1
          ];
          var txnResult = openTransactionSafely(idb, stores, "readwrite");
          if (txnResult.error) {
            return callback(txnResult.error);
          }
          txn = txnResult.txn;
          txn.onabort = idbError(callback);
          txn.ontimeout = idbError(callback);
          txn.oncomplete = complete;
          docStore = txn.objectStore(DOC_STORE$1);
          bySeqStore = txn.objectStore(BY_SEQ_STORE$1);
          attachStore = txn.objectStore(ATTACH_STORE);
          attachAndSeqStore = txn.objectStore(ATTACH_AND_SEQ_STORE);
          metaStore = txn.objectStore(META_STORE$1);
          metaStore.get(META_STORE$1).onsuccess = function (e) {
            metaDoc = e.target.result;
            updateDocCountIfReady();
          };
          verifyAttachments(function (err) {
            if (err) {
              preconditionErrored = true;
              return callback(err);
            }
            fetchExistingDocs();
          });
        }
        function onAllDocsProcessed() {
          allDocsProcessed = true;
          updateDocCountIfReady();
        }
        function idbProcessDocs() {
          processDocs$1(dbOpts.revs_limit, docInfos, api, fetchedDocs, txn, results, writeDoc, opts, onAllDocsProcessed);
        }
        function updateDocCountIfReady() {
          if (!metaDoc || !allDocsProcessed) {
            return;
          }
          metaDoc.docCount += docCountDelta;
          metaStore.put(metaDoc);
        }
        function fetchExistingDocs() {
          if (!docInfos.length) {
            return;
          }
          var numFetched = 0;
          function checkDone() {
            if (++numFetched === docInfos.length) {
              idbProcessDocs();
            }
          }
          function readMetadata(event) {
            var metadata = decodeMetadata(event.target.result);
            if (metadata) {
              fetchedDocs.set(metadata.id, metadata);
            }
            checkDone();
          }
          for (var i = 0, len = docInfos.length; i < len; i++) {
            var docInfo = docInfos[i];
            if (docInfo._id && isLocalId$1(docInfo._id)) {
              checkDone();
              continue;
            }
            var req = docStore.get(docInfo.metadata.id);
            req.onsuccess = readMetadata;
          }
        }
        function complete() {
          if (preconditionErrored) {
            return;
          }
          changesHandler.notify(api._meta.name);
          callback(null, results);
        }
        function verifyAttachment(digest, callback) {
          var req = attachStore.get(digest);
          req.onsuccess = function (e) {
            if (!e.target.result) {
              var err = createError$3(MISSING_STUB$1, "unknown stub attachment with digest " + digest);
              err.status = 412;
              callback(err);
            } else {
              callback();
            }
          };
        }
        function verifyAttachments(finish) {
          var digests = [];
          docInfos.forEach(function (docInfo) {
            if (docInfo.data && docInfo.data._attachments) {
              Object.keys(docInfo.data._attachments).forEach(function (filename) {
                var att = docInfo.data._attachments[filename];
                if (att.stub) {
                  digests.push(att.digest);
                }
              });
            }
          });
          if (!digests.length) {
            return finish();
          }
          var numDone = 0;
          var err;
          function checkDone() {
            if (++numDone === digests.length) {
              finish(err);
            }
          }
          digests.forEach(function (digest) {
            verifyAttachment(digest, function (attErr) {
              if (attErr && !err) {
                err = attErr;
              }
              checkDone();
            });
          });
        }
        function writeDoc(docInfo, winningRev$$1, winningRevIsDeleted, newRevIsDeleted, isUpdate, delta, resultsIdx, callback) {
          docInfo.metadata.winningRev = winningRev$$1;
          docInfo.metadata.deleted = winningRevIsDeleted;
          var doc = docInfo.data;
          doc._id = docInfo.metadata.id;
          doc._rev = docInfo.metadata.rev;
          if (newRevIsDeleted) {
            doc._deleted = true;
          }
          var hasAttachments = doc._attachments && Object.keys(doc._attachments).length;
          if (hasAttachments) {
            return writeAttachments(docInfo, winningRev$$1, winningRevIsDeleted, isUpdate, resultsIdx, callback);
          }
          docCountDelta += delta;
          updateDocCountIfReady();
          finishDoc(docInfo, winningRev$$1, winningRevIsDeleted, isUpdate, resultsIdx, callback);
        }
        function finishDoc(docInfo, winningRev$$1, winningRevIsDeleted, isUpdate, resultsIdx, callback) {
          var doc = docInfo.data;
          var metadata = docInfo.metadata;
          doc._doc_id_rev = metadata.id + "::" + metadata.rev;
          delete doc._id;
          delete doc._rev;
          function afterPutDoc(e) {
            var revsToDelete = docInfo.stemmedRevs || [];
            if (isUpdate && api.auto_compaction) {
              revsToDelete = revsToDelete.concat(compactTree$1(docInfo.metadata));
            }
            if (revsToDelete && revsToDelete.length) {
              compactRevs(revsToDelete, docInfo.metadata.id, txn);
            }
            metadata.seq = e.target.result;
            var metadataToStore = encodeMetadata(metadata, winningRev$$1, winningRevIsDeleted);
            var metaDataReq = docStore.put(metadataToStore);
            metaDataReq.onsuccess = afterPutMetadata;
          }
          function afterPutDocError(e) {
            e.preventDefault();
            e.stopPropagation();
            var index = bySeqStore.index("_doc_id_rev");
            var getKeyReq = index.getKey(doc._doc_id_rev);
            getKeyReq.onsuccess = function (e) {
              var putReq = bySeqStore.put(doc, e.target.result);
              putReq.onsuccess = afterPutDoc;
            };
          }
          function afterPutMetadata() {
            results[resultsIdx] = {
              ok: true,
              id: metadata.id,
              rev: metadata.rev
            };
            fetchedDocs.set(docInfo.metadata.id, docInfo.metadata);
            insertAttachmentMappings(docInfo, metadata.seq, callback);
          }
          var putReq = bySeqStore.put(doc);
          putReq.onsuccess = afterPutDoc;
          putReq.onerror = afterPutDocError;
        }
        function writeAttachments(docInfo, winningRev$$1, winningRevIsDeleted, isUpdate, resultsIdx, callback) {
          var doc = docInfo.data;
          var numDone = 0;
          var attachments = Object.keys(doc._attachments);
          function collectResults() {
            if (numDone === attachments.length) {
              finishDoc(docInfo, winningRev$$1, winningRevIsDeleted, isUpdate, resultsIdx, callback);
            }
          }
          function attachmentSaved() {
            numDone++;
            collectResults();
          }
          attachments.forEach(function (key) {
            var att = docInfo.data._attachments[key];
            if (!att.stub) {
              var data = att.data;
              delete att.data;
              att.revpos = parseInt(winningRev$$1, 10);
              var digest = att.digest;
              saveAttachment(digest, data, attachmentSaved);
            } else {
              numDone++;
              collectResults();
            }
          });
        }
        function insertAttachmentMappings(docInfo, seq, callback) {
          var attsAdded = 0;
          var attsToAdd = Object.keys(docInfo.data._attachments || {});
          if (!attsToAdd.length) {
            return callback();
          }
          function checkDone() {
            if (++attsAdded === attsToAdd.length) {
              callback();
            }
          }
          function add(att) {
            var digest = docInfo.data._attachments[att].digest;
            var req = attachAndSeqStore.put({
              seq: seq,
              digestSeq: digest + "::" + seq
            });
            req.onsuccess = checkDone;
            req.onerror = function (e) {
              e.preventDefault();
              e.stopPropagation();
              checkDone();
            };
          }
          for (var i = 0; i < attsToAdd.length; i++) {
            add(attsToAdd[i]);
          }
        }
        function saveAttachment(digest, data, callback) {
          var getKeyReq = attachStore.count(digest);
          getKeyReq.onsuccess = function (e) {
            var count = e.target.result;
            if (count) {
              return callback();
            }
            var newAtt = {
              digest: digest,
              body: data
            };
            var putReq = attachStore.put(newAtt);
            putReq.onsuccess = callback;
          };
        }
      }
      function runBatchedCursor(objectStore, keyRange, descending, batchSize, onBatch) {
        if (batchSize === -1) {
          batchSize = 1000;
        }
        var useGetAll = typeof objectStore.getAll === "function" && typeof objectStore.getAllKeys === "function" && batchSize > 1 && !descending;
        var keysBatch;
        var valuesBatch;
        var pseudoCursor;
        function onGetAll(e) {
          valuesBatch = e.target.result;
          if (keysBatch) {
            onBatch(keysBatch, valuesBatch, pseudoCursor);
          }
        }
        function onGetAllKeys(e) {
          keysBatch = e.target.result;
          if (valuesBatch) {
            onBatch(keysBatch, valuesBatch, pseudoCursor);
          }
        }
        function continuePseudoCursor() {
          if (!keysBatch.length) {
            return onBatch();
          }
          var lastKey = keysBatch[keysBatch.length - 1];
          var newKeyRange;
          if (keyRange && keyRange.upper) {
            try {
              newKeyRange = IDBKeyRange.bound(lastKey, keyRange.upper, true, keyRange.upperOpen);
            } catch (e) {
              if (e.name === "DataError" && e.code === 0) {
                return onBatch();
              }
            }
          } else {
            newKeyRange = IDBKeyRange.lowerBound(lastKey, true);
          }
          keyRange = newKeyRange;
          keysBatch = null;
          valuesBatch = null;
          objectStore.getAll(keyRange, batchSize).onsuccess = onGetAll;
          objectStore.getAllKeys(keyRange, batchSize).onsuccess = onGetAllKeys;
        }
        function onCursor(e) {
          var cursor = e.target.result;
          if (!cursor) {
            return onBatch();
          }
          onBatch([cursor.key], [cursor.value], cursor);
        }
        if (useGetAll) {
          pseudoCursor = { "continue": continuePseudoCursor };
          objectStore.getAll(keyRange, batchSize).onsuccess = onGetAll;
          objectStore.getAllKeys(keyRange, batchSize).onsuccess = onGetAllKeys;
        } else if (descending) {
          objectStore.openCursor(keyRange, "prev").onsuccess = onCursor;
        } else {
          objectStore.openCursor(keyRange).onsuccess = onCursor;
        }
      }
      function getAll(objectStore, keyRange, onSuccess) {
        if (typeof objectStore.getAll === "function") {
          objectStore.getAll(keyRange).onsuccess = onSuccess;
          return;
        }
        var values = [];
        function onCursor(e) {
          var cursor = e.target.result;
          if (cursor) {
            values.push(cursor.value);
            cursor.continue();
          } else {
            onSuccess({ target: { result: values } });
          }
        }
        objectStore.openCursor(keyRange).onsuccess = onCursor;
      }
      function allDocsKeys(keys, docStore, onBatch) {
        var valuesBatch = new Array(keys.length);
        var count = 0;
        keys.forEach(function (key, index) {
          docStore.get(key).onsuccess = function (event) {
            if (event.target.result) {
              valuesBatch[index] = event.target.result;
            } else {
              valuesBatch[index] = {
                key: key,
                error: "not_found"
              };
            }
            count++;
            if (count === keys.length) {
              onBatch(keys, valuesBatch, {});
            }
          };
        });
      }
      function createKeyRange(start, end, inclusiveEnd, key, descending) {
        try {
          if (start && end) {
            if (descending) {
              return IDBKeyRange.bound(end, start, !inclusiveEnd, false);
            } else {
              return IDBKeyRange.bound(start, end, false, !inclusiveEnd);
            }
          } else if (start) {
            if (descending) {
              return IDBKeyRange.upperBound(start);
            } else {
              return IDBKeyRange.lowerBound(start);
            }
          } else if (end) {
            if (descending) {
              return IDBKeyRange.lowerBound(end, !inclusiveEnd);
            } else {
              return IDBKeyRange.upperBound(end, !inclusiveEnd);
            }
          } else if (key) {
            return IDBKeyRange.only(key);
          }
        } catch (e) {
          return { error: e };
        }
        return null;
      }
      function idbAllDocs(opts, idb, callback) {
        var start = "startkey" in opts ? opts.startkey : false;
        var end = "endkey" in opts ? opts.endkey : false;
        var key = "key" in opts ? opts.key : false;
        var keys = "keys" in opts ? opts.keys : false;
        var skip = opts.skip || 0;
        var limit = typeof opts.limit === "number" ? opts.limit : -1;
        var inclusiveEnd = opts.inclusive_end !== false;
        var keyRange;
        var keyRangeError;
        if (!keys) {
          keyRange = createKeyRange(start, end, inclusiveEnd, key, opts.descending);
          keyRangeError = keyRange && keyRange.error;
          if (keyRangeError && !(keyRangeError.name === "DataError" && keyRangeError.code === 0)) {
            return callback(createError$3(IDB_ERROR$1, keyRangeError.name, keyRangeError.message));
          }
        }
        var stores = [
          DOC_STORE$1,
          BY_SEQ_STORE$1,
          META_STORE$1
        ];
        if (opts.attachments) {
          stores.push(ATTACH_STORE);
        }
        var txnResult = openTransactionSafely(idb, stores, "readonly");
        if (txnResult.error) {
          return callback(txnResult.error);
        }
        var txn = txnResult.txn;
        txn.oncomplete = onTxnComplete;
        txn.onabort = idbError(callback);
        var docStore = txn.objectStore(DOC_STORE$1);
        var seqStore = txn.objectStore(BY_SEQ_STORE$1);
        var metaStore = txn.objectStore(META_STORE$1);
        var docIdRevIndex = seqStore.index("_doc_id_rev");
        var results = [];
        var docCount;
        var updateSeq;
        metaStore.get(META_STORE$1).onsuccess = function (e) {
          docCount = e.target.result.docCount;
        };
        if (opts.update_seq) {
          getMaxUpdateSeq(seqStore, function (e) {
            if (e.target.result && e.target.result.length > 0) {
              updateSeq = e.target.result[0];
            }
          });
        }
        function getMaxUpdateSeq(objectStore, onSuccess) {
          function onCursor(e) {
            var cursor = e.target.result;
            var maxKey = undefined;
            if (cursor && cursor.key) {
              maxKey = cursor.key;
            }
            return onSuccess({ target: { result: [maxKey] } });
          }
          objectStore.openCursor(null, "prev").onsuccess = onCursor;
        }
        function fetchDocAsynchronously(metadata, row, winningRev$$1) {
          var key = metadata.id + "::" + winningRev$$1;
          docIdRevIndex.get(key).onsuccess = function onGetDoc(e) {
            row.doc = decodeDoc(e.target.result) || {};
            if (opts.conflicts) {
              var conflicts = collectConflicts$1(metadata);
              if (conflicts.length) {
                row.doc._conflicts = conflicts;
              }
            }
            fetchAttachmentsIfNecessary(row.doc, opts, txn);
          };
        }
        function allDocsInner(winningRev$$1, metadata) {
          var row = {
            id: metadata.id,
            key: metadata.id,
            value: { rev: winningRev$$1 }
          };
          var deleted = metadata.deleted;
          if (deleted) {
            if (keys) {
              results.push(row);
              row.value.deleted = true;
              row.doc = null;
            }
          } else if (skip-- <= 0) {
            results.push(row);
            if (opts.include_docs) {
              fetchDocAsynchronously(metadata, row, winningRev$$1);
            }
          }
        }
        function processBatch(batchValues) {
          for (var i = 0, len = batchValues.length; i < len; i++) {
            if (results.length === limit) {
              break;
            }
            var batchValue = batchValues[i];
            if (batchValue.error && keys) {
              results.push(batchValue);
              continue;
            }
            var metadata = decodeMetadata(batchValue);
            var winningRev$$1 = metadata.winningRev;
            allDocsInner(winningRev$$1, metadata);
          }
        }
        function onBatch(batchKeys, batchValues, cursor) {
          if (!cursor) {
            return;
          }
          processBatch(batchValues);
          if (results.length < limit) {
            cursor.continue();
          }
        }
        function onGetAll(e) {
          var values = e.target.result;
          if (opts.descending) {
            values = values.reverse();
          }
          processBatch(values);
        }
        function onResultsReady() {
          var returnVal = {
            total_rows: docCount,
            offset: opts.skip,
            rows: results
          };
          if (opts.update_seq && updateSeq !== undefined) {
            returnVal.update_seq = updateSeq;
          }
          callback(null, returnVal);
        }
        function onTxnComplete() {
          if (opts.attachments) {
            postProcessAttachments(results, opts.binary).then(onResultsReady);
          } else {
            onResultsReady();
          }
        }
        if (keyRangeError || limit === 0) {
          return;
        }
        if (keys) {
          return allDocsKeys(opts.keys, docStore, onBatch);
        }
        if (limit === -1) {
          return getAll(docStore, keyRange, onGetAll);
        }
        runBatchedCursor(docStore, keyRange, opts.descending, limit + skip, onBatch);
      }
      function checkBlobSupport(txn) {
        return new Promise(function (resolve) {
          var blob$$1 = createBlob$1([""]);
          var req = txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob$$1, "key");
          req.onsuccess = function () {
            var matchedChrome = navigator.userAgent.match(/Chrome\/(\d+)/);
            var matchedEdge = navigator.userAgent.match(/Edge\//);
            resolve(matchedEdge || !matchedChrome || parseInt(matchedChrome[1], 10) >= 43);
          };
          req.onerror = txn.onabort = function (e) {
            e.preventDefault();
            e.stopPropagation();
            resolve(false);
          };
        }).catch(function () {
          return false;
        });
      }
      function countDocs(txn, cb) {
        var index = txn.objectStore(DOC_STORE$1).index("deletedOrLocal");
        index.count(IDBKeyRange.only("0")).onsuccess = function (e) {
          cb(e.target.result);
        };
      }
      var running = false;
      var queue$1 = [];
      function tryCode(fun, err, res, PouchDB) {
        try {
          fun(err, res);
        } catch (err) {
          PouchDB.emit("error", err);
        }
      }
      function applyNext() {
        if (running || !queue$1.length) {
          return;
        }
        running = true;
        queue$1.shift()();
      }
      function enqueueTask(action, callback, PouchDB) {
        queue$1.push(function runAction() {
          action(function runCallback(err, res) {
            tryCode(callback, err, res, PouchDB);
            running = false;
            immediate$2(function runNext() {
              applyNext();
            });
          });
        });
        applyNext();
      }
      function changes(opts, api, dbName, idb) {
        opts = clone$2(opts);
        if (opts.continuous) {
          var id = dbName + ":" + uuid$1();
          changesHandler.addListener(dbName, id, api, opts);
          changesHandler.notify(dbName);
          return {
            cancel: function () {
              changesHandler.removeListener(dbName, id);
            }
          };
        }
        var docIds = opts.doc_ids && new ExportedSet(opts.doc_ids);
        opts.since = opts.since || 0;
        var lastSeq = opts.since;
        var limit = "limit" in opts ? opts.limit : -1;
        if (limit === 0) {
          limit = 1;
        }
        var results = [];
        var numResults = 0;
        var filter = filterChange$1(opts);
        var docIdsToMetadata = new ExportedMap();
        var txn;
        var bySeqStore;
        var docStore;
        var docIdRevIndex;
        function onBatch(batchKeys, batchValues, cursor) {
          if (!cursor || !batchKeys.length) {
            return;
          }
          var winningDocs = new Array(batchKeys.length);
          var metadatas = new Array(batchKeys.length);
          function processMetadataAndWinningDoc(metadata, winningDoc) {
            var change = opts.processChange(winningDoc, metadata, opts);
            lastSeq = change.seq = metadata.seq;
            var filtered = filter(change);
            if (typeof filtered === "object") {
              return Promise.reject(filtered);
            }
            if (!filtered) {
              return Promise.resolve();
            }
            numResults++;
            if (opts.return_docs) {
              results.push(change);
            }
            if (opts.attachments && opts.include_docs) {
              return new Promise(function (resolve) {
                fetchAttachmentsIfNecessary(winningDoc, opts, txn, function () {
                  postProcessAttachments([change], opts.binary).then(function () {
                    resolve(change);
                  });
                });
              });
            } else {
              return Promise.resolve(change);
            }
          }
          function onBatchDone() {
            var promises = [];
            for (var i = 0, len = winningDocs.length; i < len; i++) {
              if (numResults === limit) {
                break;
              }
              var winningDoc = winningDocs[i];
              if (!winningDoc) {
                continue;
              }
              var metadata = metadatas[i];
              promises.push(processMetadataAndWinningDoc(metadata, winningDoc));
            }
            Promise.all(promises).then(function (changes) {
              for (var i = 0, len = changes.length; i < len; i++) {
                if (changes[i]) {
                  opts.onChange(changes[i]);
                }
              }
            }).catch(opts.complete);
            if (numResults !== limit) {
              cursor.continue();
            }
          }
          var numDone = 0;
          batchValues.forEach(function (value, i) {
            var doc = decodeDoc(value);
            var seq = batchKeys[i];
            fetchWinningDocAndMetadata(doc, seq, function (metadata, winningDoc) {
              metadatas[i] = metadata;
              winningDocs[i] = winningDoc;
              if (++numDone === batchKeys.length) {
                onBatchDone();
              }
            });
          });
        }
        function onGetMetadata(doc, seq, metadata, cb) {
          if (metadata.seq !== seq) {
            return cb();
          }
          if (metadata.winningRev === doc._rev) {
            return cb(metadata, doc);
          }
          var docIdRev = doc._id + "::" + metadata.winningRev;
          var req = docIdRevIndex.get(docIdRev);
          req.onsuccess = function (e) {
            cb(metadata, decodeDoc(e.target.result));
          };
        }
        function fetchWinningDocAndMetadata(doc, seq, cb) {
          if (docIds && !docIds.has(doc._id)) {
            return cb();
          }
          var metadata = docIdsToMetadata.get(doc._id);
          if (metadata) {
            return onGetMetadata(doc, seq, metadata, cb);
          }
          docStore.get(doc._id).onsuccess = function (e) {
            metadata = decodeMetadata(e.target.result);
            docIdsToMetadata.set(doc._id, metadata);
            onGetMetadata(doc, seq, metadata, cb);
          };
        }
        function finish() {
          opts.complete(null, {
            results: results,
            last_seq: lastSeq
          });
        }
        function onTxnComplete() {
          if (!opts.continuous && opts.attachments) {
            postProcessAttachments(results).then(finish);
          } else {
            finish();
          }
        }
        var objectStores = [
          DOC_STORE$1,
          BY_SEQ_STORE$1
        ];
        if (opts.attachments) {
          objectStores.push(ATTACH_STORE);
        }
        var txnResult = openTransactionSafely(idb, objectStores, "readonly");
        if (txnResult.error) {
          return opts.complete(txnResult.error);
        }
        txn = txnResult.txn;
        txn.onabort = idbError(opts.complete);
        txn.oncomplete = onTxnComplete;
        bySeqStore = txn.objectStore(BY_SEQ_STORE$1);
        docStore = txn.objectStore(DOC_STORE$1);
        docIdRevIndex = bySeqStore.index("_doc_id_rev");
        var keyRange = opts.since && !opts.descending ? IDBKeyRange.lowerBound(opts.since, true) : null;
        runBatchedCursor(bySeqStore, keyRange, opts.descending, limit, onBatch);
      }
      var cachedDBs = new ExportedMap();
      var blobSupportPromise;
      var openReqList = new ExportedMap();
      function IdbPouch(opts, callback) {
        var api = this;
        enqueueTask(function (thisCallback) {
          init$1(api, opts, thisCallback);
        }, callback, api.constructor);
      }
      function init$1(api, opts, callback) {
        var dbName = opts.name;
        var idb = null;
        api._meta = null;
        function createSchema(db) {
          var docStore = db.createObjectStore(DOC_STORE$1, { keyPath: "id" });
          db.createObjectStore(BY_SEQ_STORE$1, { autoIncrement: true }).createIndex("_doc_id_rev", "_doc_id_rev", { unique: true });
          db.createObjectStore(ATTACH_STORE, { keyPath: "digest" });
          db.createObjectStore(META_STORE$1, {
            keyPath: "id",
            autoIncrement: false
          });
          db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);
          docStore.createIndex("deletedOrLocal", "deletedOrLocal", { unique: false });
          db.createObjectStore(LOCAL_STORE$1, { keyPath: "_id" });
          var attAndSeqStore = db.createObjectStore(ATTACH_AND_SEQ_STORE, { autoIncrement: true });
          attAndSeqStore.createIndex("seq", "seq");
          attAndSeqStore.createIndex("digestSeq", "digestSeq", { unique: true });
        }
        function addDeletedOrLocalIndex(txn, callback) {
          var docStore = txn.objectStore(DOC_STORE$1);
          docStore.createIndex("deletedOrLocal", "deletedOrLocal", { unique: false });
          docStore.openCursor().onsuccess = function (event) {
            var cursor = event.target.result;
            if (cursor) {
              var metadata = cursor.value;
              var deleted = isDeleted$1(metadata);
              metadata.deletedOrLocal = deleted ? "1" : "0";
              docStore.put(metadata);
              cursor.continue();
            } else {
              callback();
            }
          };
        }
        function createLocalStoreSchema(db) {
          db.createObjectStore(LOCAL_STORE$1, { keyPath: "_id" }).createIndex("_doc_id_rev", "_doc_id_rev", { unique: true });
        }
        function migrateLocalStore(txn, cb) {
          var localStore = txn.objectStore(LOCAL_STORE$1);
          var docStore = txn.objectStore(DOC_STORE$1);
          var seqStore = txn.objectStore(BY_SEQ_STORE$1);
          var cursor = docStore.openCursor();
          cursor.onsuccess = function (event) {
            var cursor = event.target.result;
            if (cursor) {
              var metadata = cursor.value;
              var docId = metadata.id;
              var local = isLocalId$1(docId);
              var rev$$1 = winningRev$1(metadata);
              if (local) {
                var docIdRev = docId + "::" + rev$$1;
                var start = docId + "::";
                var end = docId + "::~";
                var index = seqStore.index("_doc_id_rev");
                var range = IDBKeyRange.bound(start, end, false, false);
                var seqCursor = index.openCursor(range);
                seqCursor.onsuccess = function (e) {
                  seqCursor = e.target.result;
                  if (!seqCursor) {
                    docStore.delete(cursor.primaryKey);
                    cursor.continue();
                  } else {
                    var data = seqCursor.value;
                    if (data._doc_id_rev === docIdRev) {
                      localStore.put(data);
                    }
                    seqStore.delete(seqCursor.primaryKey);
                    seqCursor.continue();
                  }
                };
              } else {
                cursor.continue();
              }
            } else if (cb) {
              cb();
            }
          };
        }
        function addAttachAndSeqStore(db) {
          var attAndSeqStore = db.createObjectStore(ATTACH_AND_SEQ_STORE, { autoIncrement: true });
          attAndSeqStore.createIndex("seq", "seq");
          attAndSeqStore.createIndex("digestSeq", "digestSeq", { unique: true });
        }
        function migrateAttsAndSeqs(txn, callback) {
          var seqStore = txn.objectStore(BY_SEQ_STORE$1);
          var attStore = txn.objectStore(ATTACH_STORE);
          var attAndSeqStore = txn.objectStore(ATTACH_AND_SEQ_STORE);
          var req = attStore.count();
          req.onsuccess = function (e) {
            var count = e.target.result;
            if (!count) {
              return callback();
            }
            seqStore.openCursor().onsuccess = function (e) {
              var cursor = e.target.result;
              if (!cursor) {
                return callback();
              }
              var doc = cursor.value;
              var seq = cursor.primaryKey;
              var atts = Object.keys(doc._attachments || {});
              var digestMap = {};
              for (var j = 0; j < atts.length; j++) {
                var att = doc._attachments[atts[j]];
                digestMap[att.digest] = true;
              }
              var digests = Object.keys(digestMap);
              for (j = 0; j < digests.length; j++) {
                var digest = digests[j];
                attAndSeqStore.put({
                  seq: seq,
                  digestSeq: digest + "::" + seq
                });
              }
              cursor.continue();
            };
          };
        }
        function migrateMetadata(txn) {
          function decodeMetadataCompat(storedObject) {
            if (!storedObject.data) {
              storedObject.deleted = storedObject.deletedOrLocal === "1";
              return storedObject;
            }
            return decodeMetadata(storedObject);
          }
          var bySeqStore = txn.objectStore(BY_SEQ_STORE$1);
          var docStore = txn.objectStore(DOC_STORE$1);
          var cursor = docStore.openCursor();
          cursor.onsuccess = function (e) {
            var cursor = e.target.result;
            if (!cursor) {
              return;
            }
            var metadata = decodeMetadataCompat(cursor.value);
            metadata.winningRev = metadata.winningRev || winningRev$1(metadata);
            function fetchMetadataSeq() {
              var start = metadata.id + "::";
              var end = metadata.id + "::\uFFFF";
              var req = bySeqStore.index("_doc_id_rev").openCursor(IDBKeyRange.bound(start, end));
              var metadataSeq = 0;
              req.onsuccess = function (e) {
                var cursor = e.target.result;
                if (!cursor) {
                  metadata.seq = metadataSeq;
                  return onGetMetadataSeq();
                }
                var seq = cursor.primaryKey;
                if (seq > metadataSeq) {
                  metadataSeq = seq;
                }
                cursor.continue();
              };
            }
            function onGetMetadataSeq() {
              var metadataToStore = encodeMetadata(metadata, metadata.winningRev, metadata.deleted);
              var req = docStore.put(metadataToStore);
              req.onsuccess = function () {
                cursor.continue();
              };
            }
            if (metadata.seq) {
              return onGetMetadataSeq();
            }
            fetchMetadataSeq();
          };
        }
        api._remote = false;
        api.type = function () {
          return "idb";
        };
        api._id = toPromise$1(function (callback) {
          callback(null, api._meta.instanceId);
        });
        api._bulkDocs = function idb_bulkDocs(req, reqOpts, callback) {
          idbBulkDocs(opts, req, reqOpts, api, idb, callback);
        };
        api._get = function idb_get(id, opts, callback) {
          var doc;
          var metadata;
          var err;
          var txn = opts.ctx;
          if (!txn) {
            var txnResult = openTransactionSafely(idb, [
              DOC_STORE$1,
              BY_SEQ_STORE$1,
              ATTACH_STORE
            ], "readonly");
            if (txnResult.error) {
              return callback(txnResult.error);
            }
            txn = txnResult.txn;
          }
          function finish() {
            callback(err, {
              doc: doc,
              metadata: metadata,
              ctx: txn
            });
          }
          txn.objectStore(DOC_STORE$1).get(id).onsuccess = function (e) {
            metadata = decodeMetadata(e.target.result);
            if (!metadata) {
              err = createError$3(MISSING_DOC$1, "missing");
              return finish();
            }
            var rev$$1;
            if (!opts.rev) {
              rev$$1 = metadata.winningRev;
              var deleted = isDeleted$1(metadata);
              if (deleted) {
                err = createError$3(MISSING_DOC$1, "deleted");
                return finish();
              }
            } else {
              rev$$1 = opts.latest ? latest$1(opts.rev, metadata) : opts.rev;
            }
            var objectStore = txn.objectStore(BY_SEQ_STORE$1);
            var key = metadata.id + "::" + rev$$1;
            objectStore.index("_doc_id_rev").get(key).onsuccess = function (e) {
              doc = e.target.result;
              if (doc) {
                doc = decodeDoc(doc);
              }
              if (!doc) {
                err = createError$3(MISSING_DOC$1, "missing");
                return finish();
              }
              finish();
            };
          };
        };
        api._getAttachment = function (docId, attachId, attachment, opts, callback) {
          var txn;
          if (opts.ctx) {
            txn = opts.ctx;
          } else {
            var txnResult = openTransactionSafely(idb, [
              DOC_STORE$1,
              BY_SEQ_STORE$1,
              ATTACH_STORE
            ], "readonly");
            if (txnResult.error) {
              return callback(txnResult.error);
            }
            txn = txnResult.txn;
          }
          var digest = attachment.digest;
          var type = attachment.content_type;
          txn.objectStore(ATTACH_STORE).get(digest).onsuccess = function (e) {
            var body = e.target.result.body;
            readBlobData(body, type, opts.binary, function (blobData) {
              callback(null, blobData);
            });
          };
        };
        api._info = function idb_info(callback) {
          var updateSeq;
          var docCount;
          var txnResult = openTransactionSafely(idb, [
            META_STORE$1,
            BY_SEQ_STORE$1
          ], "readonly");
          if (txnResult.error) {
            return callback(txnResult.error);
          }
          var txn = txnResult.txn;
          txn.objectStore(META_STORE$1).get(META_STORE$1).onsuccess = function (e) {
            docCount = e.target.result.docCount;
          };
          txn.objectStore(BY_SEQ_STORE$1).openCursor(null, "prev").onsuccess = function (e) {
            var cursor = e.target.result;
            updateSeq = cursor ? cursor.key : 0;
          };
          txn.oncomplete = function () {
            callback(null, {
              doc_count: docCount,
              update_seq: updateSeq,
              idb_attachment_format: api._meta.blobSupport ? "binary" : "base64"
            });
          };
        };
        api._allDocs = function idb_allDocs(opts, callback) {
          idbAllDocs(opts, idb, callback);
        };
        api._changes = function idbChanges(opts) {
          return changes(opts, api, dbName, idb);
        };
        api._close = function (callback) {
          idb.close();
          cachedDBs.delete(dbName);
          callback();
        };
        api._getRevisionTree = function (docId, callback) {
          var txnResult = openTransactionSafely(idb, [DOC_STORE$1], "readonly");
          if (txnResult.error) {
            return callback(txnResult.error);
          }
          var txn = txnResult.txn;
          var req = txn.objectStore(DOC_STORE$1).get(docId);
          req.onsuccess = function (event) {
            var doc = decodeMetadata(event.target.result);
            if (!doc) {
              callback(createError$3(MISSING_DOC$1));
            } else {
              callback(null, doc.rev_tree);
            }
          };
        };
        api._doCompaction = function (docId, revs, callback) {
          var stores = [
            DOC_STORE$1,
            BY_SEQ_STORE$1,
            ATTACH_STORE,
            ATTACH_AND_SEQ_STORE
          ];
          var txnResult = openTransactionSafely(idb, stores, "readwrite");
          if (txnResult.error) {
            return callback(txnResult.error);
          }
          var txn = txnResult.txn;
          var docStore = txn.objectStore(DOC_STORE$1);
          docStore.get(docId).onsuccess = function (event) {
            var metadata = decodeMetadata(event.target.result);
            traverseRevTree$1(metadata.rev_tree, function (isLeaf, pos, revHash, ctx, opts) {
              var rev$$1 = pos + "-" + revHash;
              if (revs.indexOf(rev$$1) !== -1) {
                opts.status = "missing";
              }
            });
            compactRevs(revs, docId, txn);
            var winningRev$$1 = metadata.winningRev;
            var deleted = metadata.deleted;
            txn.objectStore(DOC_STORE$1).put(encodeMetadata(metadata, winningRev$$1, deleted));
          };
          txn.onabort = idbError(callback);
          txn.oncomplete = function () {
            callback();
          };
        };
        api._getLocal = function (id, callback) {
          var txnResult = openTransactionSafely(idb, [LOCAL_STORE$1], "readonly");
          if (txnResult.error) {
            return callback(txnResult.error);
          }
          var tx = txnResult.txn;
          var req = tx.objectStore(LOCAL_STORE$1).get(id);
          req.onerror = idbError(callback);
          req.onsuccess = function (e) {
            var doc = e.target.result;
            if (!doc) {
              callback(createError$3(MISSING_DOC$1));
            } else {
              delete doc["_doc_id_rev"];
              callback(null, doc);
            }
          };
        };
        api._putLocal = function (doc, opts, callback) {
          if (typeof opts === "function") {
            callback = opts;
            opts = {};
          }
          delete doc._revisions;
          var oldRev = doc._rev;
          var id = doc._id;
          if (!oldRev) {
            doc._rev = "0-1";
          } else {
            doc._rev = "0-" + (parseInt(oldRev.split("-")[1], 10) + 1);
          }
          var tx = opts.ctx;
          var ret;
          if (!tx) {
            var txnResult = openTransactionSafely(idb, [LOCAL_STORE$1], "readwrite");
            if (txnResult.error) {
              return callback(txnResult.error);
            }
            tx = txnResult.txn;
            tx.onerror = idbError(callback);
            tx.oncomplete = function () {
              if (ret) {
                callback(null, ret);
              }
            };
          }
          var oStore = tx.objectStore(LOCAL_STORE$1);
          var req;
          if (oldRev) {
            req = oStore.get(id);
            req.onsuccess = function (e) {
              var oldDoc = e.target.result;
              if (!oldDoc || oldDoc._rev !== oldRev) {
                callback(createError$3(REV_CONFLICT$1));
              } else {
                var req = oStore.put(doc);
                req.onsuccess = function () {
                  ret = {
                    ok: true,
                    id: doc._id,
                    rev: doc._rev
                  };
                  if (opts.ctx) {
                    callback(null, ret);
                  }
                };
              }
            };
          } else {
            req = oStore.add(doc);
            req.onerror = function (e) {
              callback(createError$3(REV_CONFLICT$1));
              e.preventDefault();
              e.stopPropagation();
            };
            req.onsuccess = function () {
              ret = {
                ok: true,
                id: doc._id,
                rev: doc._rev
              };
              if (opts.ctx) {
                callback(null, ret);
              }
            };
          }
        };
        api._removeLocal = function (doc, opts, callback) {
          if (typeof opts === "function") {
            callback = opts;
            opts = {};
          }
          var tx = opts.ctx;
          if (!tx) {
            var txnResult = openTransactionSafely(idb, [LOCAL_STORE$1], "readwrite");
            if (txnResult.error) {
              return callback(txnResult.error);
            }
            tx = txnResult.txn;
            tx.oncomplete = function () {
              if (ret) {
                callback(null, ret);
              }
            };
          }
          var ret;
          var id = doc._id;
          var oStore = tx.objectStore(LOCAL_STORE$1);
          var req = oStore.get(id);
          req.onerror = idbError(callback);
          req.onsuccess = function (e) {
            var oldDoc = e.target.result;
            if (!oldDoc || oldDoc._rev !== doc._rev) {
              callback(createError$3(MISSING_DOC$1));
            } else {
              oStore.delete(id);
              ret = {
                ok: true,
                id: id,
                rev: "0-0"
              };
              if (opts.ctx) {
                callback(null, ret);
              }
            }
          };
        };
        api._destroy = function (opts, callback) {
          changesHandler.removeAllListeners(dbName);
          var openReq = openReqList.get(dbName);
          if (openReq && openReq.result) {
            openReq.result.close();
            cachedDBs.delete(dbName);
          }
          var req = indexedDB.deleteDatabase(dbName);
          req.onsuccess = function () {
            openReqList.delete(dbName);
            if (hasLocalStorage$1() && dbName in localStorage) {
              delete localStorage[dbName];
            }
            callback(null, { "ok": true });
          };
          req.onerror = idbError(callback);
        };
        var cached = cachedDBs.get(dbName);
        if (cached) {
          idb = cached.idb;
          api._meta = cached.global;
          return immediate$2(function () {
            callback(null, api);
          });
        }
        var req = indexedDB.open(dbName, ADAPTER_VERSION);
        openReqList.set(dbName, req);
        req.onupgradeneeded = function (e) {
          var db = e.target.result;
          if (e.oldVersion < 1) {
            return createSchema(db);
          }
          var txn = e.currentTarget.transaction;
          if (e.oldVersion < 3) {
            createLocalStoreSchema(db);
          }
          if (e.oldVersion < 4) {
            addAttachAndSeqStore(db);
          }
          var migrations = [
            addDeletedOrLocalIndex,
            migrateLocalStore,
            migrateAttsAndSeqs,
            migrateMetadata
          ];
          var i = e.oldVersion;
          function next() {
            var migration = migrations[i - 1];
            i++;
            if (migration) {
              migration(txn, next);
            }
          }
          next();
        };
        req.onsuccess = function (e) {
          idb = e.target.result;
          idb.onversionchange = function () {
            idb.close();
            cachedDBs.delete(dbName);
          };
          idb.onabort = function (e) {
            guardedConsole$1("error", "Database has a global failure", e.target.error);
            idb.close();
            cachedDBs.delete(dbName);
          };
          var txn = idb.transaction([
            META_STORE$1,
            DETECT_BLOB_SUPPORT_STORE,
            DOC_STORE$1
          ], "readwrite");
          var storedMetaDoc = false;
          var metaDoc;
          var docCount;
          var blobSupport;
          var instanceId;
          function completeSetup() {
            if (typeof blobSupport === "undefined" || !storedMetaDoc) {
              return;
            }
            api._meta = {
              name: dbName,
              instanceId: instanceId,
              blobSupport: blobSupport
            };
            cachedDBs.set(dbName, {
              idb: idb,
              global: api._meta
            });
            callback(null, api);
          }
          function storeMetaDocIfReady() {
            if (typeof docCount === "undefined" || typeof metaDoc === "undefined") {
              return;
            }
            var instanceKey = dbName + "_id";
            if (instanceKey in metaDoc) {
              instanceId = metaDoc[instanceKey];
            } else {
              metaDoc[instanceKey] = instanceId = uuid$1();
            }
            metaDoc.docCount = docCount;
            txn.objectStore(META_STORE$1).put(metaDoc);
          }
          txn.objectStore(META_STORE$1).get(META_STORE$1).onsuccess = function (e) {
            metaDoc = e.target.result || { id: META_STORE$1 };
            storeMetaDocIfReady();
          };
          countDocs(txn, function (count) {
            docCount = count;
            storeMetaDocIfReady();
          });
          if (!blobSupportPromise) {
            blobSupportPromise = checkBlobSupport(txn);
          }
          blobSupportPromise.then(function (val) {
            blobSupport = val;
            completeSetup();
          });
          txn.oncomplete = function () {
            storedMetaDoc = true;
            completeSetup();
          };
          txn.onabort = idbError(callback);
        };
        req.onerror = function (e) {
          var msg = e.target.error && e.target.error.message;
          if (!msg) {
            msg = "Failed to open indexedDB, are you in private browsing mode?";
          } else if (msg.indexOf("stored database is a higher version") !== -1) {
            msg = new Error("This DB was created with the newer \"indexeddb\" adapter, but you are trying to open it with the older \"idb\" adapter");
          }
          guardedConsole$1("error", msg);
          callback(createError$3(IDB_ERROR$1, msg));
        };
      }
      IdbPouch.valid = function () {
        try {
          return typeof indexedDB !== "undefined" && typeof IDBKeyRange !== "undefined";
        } catch (e) {
          return false;
        }
      };
      function IDBPouch(PouchDB) {
        PouchDB.adapter("idb", IdbPouch, true);
      }
      function pool(promiseFactories, limit) {
        return new Promise(function (resolve, reject) {
          var running = 0;
          var current = 0;
          var done = 0;
          var len = promiseFactories.length;
          var err;
          function runNext() {
            running++;
            promiseFactories[current++]().then(onSuccess, onError);
          }
          function doNext() {
            if (++done === len) {
              if (err) {
                reject(err);
              } else {
                resolve();
              }
            } else {
              runNextBatch();
            }
          }
          function onSuccess() {
            running--;
            doNext();
          }
          function onError(thisErr) {
            running--;
            err = err || thisErr;
            doNext();
          }
          function runNextBatch() {
            while (running < limit && current < len) {
              runNext();
            }
          }
          runNextBatch();
        });
      }
      var CHANGES_BATCH_SIZE = 25;
      var MAX_SIMULTANEOUS_REVS = 50;
      var CHANGES_TIMEOUT_BUFFER = 5000;
      var DEFAULT_HEARTBEAT = 10000;
      var supportsBulkGetMap = {};
      function readAttachmentsAsBlobOrBuffer(row) {
        var doc = row.doc || row.ok;
        var atts = doc && doc._attachments;
        if (!atts) {
          return;
        }
        Object.keys(atts).forEach(function (filename) {
          var att = atts[filename];
          att.data = b64ToBluffer$1(att.data, att.content_type);
        });
      }
      function encodeDocId(id) {
        if (/^_design/.test(id)) {
          return "_design/" + encodeURIComponent(id.slice(8));
        }
        if (/^_local/.test(id)) {
          return "_local/" + encodeURIComponent(id.slice(7));
        }
        return encodeURIComponent(id);
      }
      function preprocessAttachments$1$1(doc) {
        if (!doc._attachments || !Object.keys(doc._attachments)) {
          return Promise.resolve();
        }
        return Promise.all(Object.keys(doc._attachments).map(function (key) {
          var attachment = doc._attachments[key];
          if (attachment.data && typeof attachment.data !== "string") {
            return new Promise(function (resolve) {
              blobToBase64$1(attachment.data, resolve);
            }).then(function (b64) {
              attachment.data = b64;
            });
          }
        }));
      }
      function hasUrlPrefix(opts) {
        if (!opts.prefix) {
          return false;
        }
        var protocol = parseUri$1(opts.prefix).protocol;
        return protocol === "http" || protocol === "https";
      }
      function getHost(name, opts) {
        if (hasUrlPrefix(opts)) {
          var dbName = opts.name.substr(opts.prefix.length);
          var prefix = opts.prefix.replace(/\/?$/, "/");
          name = prefix + encodeURIComponent(dbName);
        }
        var uri = parseUri$1(name);
        if (uri.user || uri.password) {
          uri.auth = {
            username: uri.user,
            password: uri.password
          };
        }
        var parts = uri.path.replace(/(^\/|\/$)/g, "").split("/");
        uri.db = parts.pop();
        if (uri.db.indexOf("%") === -1) {
          uri.db = encodeURIComponent(uri.db);
        }
        uri.path = parts.join("/");
        return uri;
      }
      function genDBUrl(opts, path) {
        return genUrl(opts, opts.db + "/" + path);
      }
      function genUrl(opts, path) {
        var pathDel = !opts.path ? "" : "/";
        return opts.protocol + "://" + opts.host + (opts.port ? ":" + opts.port : "") + "/" + opts.path + pathDel + path;
      }
      function paramsToStr(params) {
        return "?" + Object.keys(params).map(function (k) {
          return k + "=" + encodeURIComponent(params[k]);
        }).join("&");
      }
      function shouldCacheBust(opts) {
        var ua = typeof navigator !== "undefined" && navigator.userAgent ? navigator.userAgent.toLowerCase() : "";
        var isIE = ua.indexOf("msie") !== -1;
        var isTrident = ua.indexOf("trident") !== -1;
        var isEdge = ua.indexOf("edge") !== -1;
        var isGET = !("method" in opts) || opts.method === "GET";
        return (isIE || isTrident || isEdge) && isGET;
      }
      function HttpPouch(opts, callback) {
        var api = this;
        var host = getHost(opts.name, opts);
        var dbUrl = genDBUrl(host, "");
        opts = clone$2(opts);
        var ourFetch = function (url, options) {
          options = options || {};
          options.headers = options.headers || new h();
          options.credentials = "include";
          if (opts.auth || host.auth) {
            var nAuth = opts.auth || host.auth;
            var str = nAuth.username + ":" + nAuth.password;
            var token = thisBtoa$1(unescape(encodeURIComponent(str)));
            options.headers.set("Authorization", "Basic " + token);
          }
          var headers = opts.headers || {};
          Object.keys(headers).forEach(function (key) {
            options.headers.append(key, headers[key]);
          });
          if (shouldCacheBust(options)) {
            url += (url.indexOf("?") === -1 ? "?" : "&") + "_nonce=" + Date.now();
          }
          var fetchFun = opts.fetch || f$1;
          return fetchFun(url, options);
        };
        function adapterFun$$1(name, fun) {
          return adapterFun$1(name, getArguments$2(function (args) {
            setup().then(function () {
              return fun.apply(this, args);
            }).catch(function (e) {
              var callback = args.pop();
              callback(e);
            });
          })).bind(api);
        }
        function fetchJSON(url, options, callback) {
          var result = {};
          options = options || {};
          options.headers = options.headers || new h();
          if (!options.headers.get("Content-Type")) {
            options.headers.set("Content-Type", "application/json");
          }
          if (!options.headers.get("Accept")) {
            options.headers.set("Accept", "application/json");
          }
          return ourFetch(url, options).then(function (response) {
            result.ok = response.ok;
            result.status = response.status;
            return response.json();
          }).then(function (json) {
            result.data = json;
            if (!result.ok) {
              result.data.status = result.status;
              var err = generateErrorFromResponse$1(result.data);
              if (callback) {
                return callback(err);
              } else {
                throw err;
              }
            }
            if (Array.isArray(result.data)) {
              result.data = result.data.map(function (v) {
                if (v.error || v.missing) {
                  return generateErrorFromResponse$1(v);
                } else {
                  return v;
                }
              });
            }
            if (callback) {
              callback(null, result.data);
            } else {
              return result;
            }
          });
        }
        var setupPromise;
        function setup() {
          if (opts.skip_setup) {
            return Promise.resolve();
          }
          if (setupPromise) {
            return setupPromise;
          }
          setupPromise = fetchJSON(dbUrl).catch(function (err) {
            if (err && err.status && err.status === 404) {
              explainError$1(404, "PouchDB is just detecting if the remote exists.");
              return fetchJSON(dbUrl, { method: "PUT" });
            } else {
              return Promise.reject(err);
            }
          }).catch(function (err) {
            if (err && err.status && err.status === 412) {
              return true;
            }
            return Promise.reject(err);
          });
          setupPromise.catch(function () {
            setupPromise = null;
          });
          return setupPromise;
        }
        immediate$2(function () {
          callback(null, api);
        });
        api._remote = true;
        api.type = function () {
          return "http";
        };
        api.id = adapterFun$$1("id", function (callback) {
          ourFetch(genUrl(host, "")).then(function (response) {
            return response.json();
          }).catch(function () {
            return {};
          }).then(function (result) {
            var uuid$$1 = result && result.uuid ? result.uuid + host.db : genDBUrl(host, "");
            callback(null, uuid$$1);
          });
        });
        api.compact = adapterFun$$1("compact", function (opts, callback) {
          if (typeof opts === "function") {
            callback = opts;
            opts = {};
          }
          opts = clone$2(opts);
          fetchJSON(genDBUrl(host, "_compact"), { method: "POST" }).then(function () {
            function ping() {
              api.info(function (err, res) {
                if (res && !res.compact_running) {
                  callback(null, { ok: true });
                } else {
                  setTimeout(ping, opts.interval || 200);
                }
              });
            }
            ping();
          });
        });
        api.bulkGet = adapterFun$1("bulkGet", function (opts, callback) {
          var self = this;
          function doBulkGet(cb) {
            var params = {};
            if (opts.revs) {
              params.revs = true;
            }
            if (opts.attachments) {
              params.attachments = true;
            }
            if (opts.latest) {
              params.latest = true;
            }
            fetchJSON(genDBUrl(host, "_bulk_get" + paramsToStr(params)), {
              method: "POST",
              body: JSON.stringify({ docs: opts.docs })
            }).then(function (result) {
              if (opts.attachments && opts.binary) {
                result.data.results.forEach(function (res) {
                  res.docs.forEach(readAttachmentsAsBlobOrBuffer);
                });
              }
              cb(null, result.data);
            }).catch(cb);
          }
          function doBulkGetShim() {
            var batchSize = MAX_SIMULTANEOUS_REVS;
            var numBatches = Math.ceil(opts.docs.length / batchSize);
            var numDone = 0;
            var results = new Array(numBatches);
            function onResult(batchNum) {
              return function (err, res) {
                results[batchNum] = res.results;
                if (++numDone === numBatches) {
                  callback(null, { results: flatten$1(results) });
                }
              };
            }
            for (var i = 0; i < numBatches; i++) {
              var subOpts = pick$1(opts, [
                "revs",
                "attachments",
                "binary",
                "latest"
              ]);
              subOpts.docs = opts.docs.slice(i * batchSize, Math.min(opts.docs.length, (i + 1) * batchSize));
              bulkGet$1(self, subOpts, onResult(i));
            }
          }
          var dbUrl = genUrl(host, "");
          var supportsBulkGet = supportsBulkGetMap[dbUrl];
          if (typeof supportsBulkGet !== "boolean") {
            doBulkGet(function (err, res) {
              if (err) {
                supportsBulkGetMap[dbUrl] = false;
                explainError$1(err.status, "PouchDB is just detecting if the remote " + "supports the _bulk_get API.");
                doBulkGetShim();
              } else {
                supportsBulkGetMap[dbUrl] = true;
                callback(null, res);
              }
            });
          } else if (supportsBulkGet) {
            doBulkGet(callback);
          } else {
            doBulkGetShim();
          }
        });
        api._info = function (callback) {
          setup().then(function () {
            return ourFetch(genDBUrl(host, ""));
          }).then(function (response) {
            return response.json();
          }).then(function (info) {
            info.host = genDBUrl(host, "");
            callback(null, info);
          }).catch(callback);
        };
        api.fetch = function (path, options) {
          return setup().then(function () {
            var url = path.substring(0, 1) === "/" ? genUrl(host, path.substring(1)) : genDBUrl(host, path);
            return ourFetch(url, options);
          });
        };
        api.get = adapterFun$$1("get", function (id, opts, callback) {
          if (typeof opts === "function") {
            callback = opts;
            opts = {};
          }
          opts = clone$2(opts);
          var params = {};
          if (opts.revs) {
            params.revs = true;
          }
          if (opts.revs_info) {
            params.revs_info = true;
          }
          if (opts.latest) {
            params.latest = true;
          }
          if (opts.open_revs) {
            if (opts.open_revs !== "all") {
              opts.open_revs = JSON.stringify(opts.open_revs);
            }
            params.open_revs = opts.open_revs;
          }
          if (opts.rev) {
            params.rev = opts.rev;
          }
          if (opts.conflicts) {
            params.conflicts = opts.conflicts;
          }
          if (opts.update_seq) {
            params.update_seq = opts.update_seq;
          }
          id = encodeDocId(id);
          function fetchAttachments(doc) {
            var atts = doc._attachments;
            var filenames = atts && Object.keys(atts);
            if (!atts || !filenames.length) {
              return;
            }
            function fetchData(filename) {
              var att = atts[filename];
              var path = encodeDocId(doc._id) + "/" + encodeAttachmentId(filename) + "?rev=" + doc._rev;
              return ourFetch(genDBUrl(host, path)).then(function (response) {
                if ("buffer" in response) {
                  return response.buffer();
                } else {
                  return response.blob();
                }
              }).then(function (blob) {
                if (opts.binary) {
                  var typeFieldDescriptor = Object.getOwnPropertyDescriptor(blob.__proto__, "type");
                  if (!typeFieldDescriptor || typeFieldDescriptor.set) {
                    blob.type = att.content_type;
                  }
                  return blob;
                }
                return new Promise(function (resolve) {
                  blobToBase64$1(blob, resolve);
                });
              }).then(function (data) {
                delete att.stub;
                delete att.length;
                att.data = data;
              });
            }
            var promiseFactories = filenames.map(function (filename) {
              return function () {
                return fetchData(filename);
              };
            });
            return pool(promiseFactories, 5);
          }
          function fetchAllAttachments(docOrDocs) {
            if (Array.isArray(docOrDocs)) {
              return Promise.all(docOrDocs.map(function (doc) {
                if (doc.ok) {
                  return fetchAttachments(doc.ok);
                }
              }));
            }
            return fetchAttachments(docOrDocs);
          }
          var url = genDBUrl(host, id + paramsToStr(params));
          fetchJSON(url).then(function (res) {
            return Promise.resolve().then(function () {
              if (opts.attachments) {
                return fetchAllAttachments(res.data);
              }
            }).then(function () {
              callback(null, res.data);
            });
          }).catch(function (e) {
            e.docId = id;
            callback(e);
          });
        });
        api.remove = adapterFun$$1("remove", function (docOrId, optsOrRev, opts, cb) {
          var doc;
          if (typeof optsOrRev === "string") {
            doc = {
              _id: docOrId,
              _rev: optsOrRev
            };
            if (typeof opts === "function") {
              cb = opts;
              opts = {};
            }
          } else {
            doc = docOrId;
            if (typeof optsOrRev === "function") {
              cb = optsOrRev;
              opts = {};
            } else {
              cb = opts;
              opts = optsOrRev;
            }
          }
          var rev$$1 = doc._rev || opts.rev;
          var url = genDBUrl(host, encodeDocId(doc._id)) + "?rev=" + rev$$1;
          fetchJSON(url, { method: "DELETE" }, cb).catch(cb);
        });
        function encodeAttachmentId(attachmentId) {
          return attachmentId.split("/").map(encodeURIComponent).join("/");
        }
        api.getAttachment = adapterFun$$1("getAttachment", function (docId, attachmentId, opts, callback) {
          if (typeof opts === "function") {
            callback = opts;
            opts = {};
          }
          var params = opts.rev ? "?rev=" + opts.rev : "";
          var url = genDBUrl(host, encodeDocId(docId)) + "/" + encodeAttachmentId(attachmentId) + params;
          var contentType;
          ourFetch(url, { method: "GET" }).then(function (response) {
            contentType = response.headers.get("content-type");
            if (!response.ok) {
              throw response;
            } else {
              if (typeof process$9 !== "undefined" && !process$9.browser && typeof response.buffer === "function") {
                return response.buffer();
              } else {
                return response.blob();
              }
            }
          }).then(function (blob) {
            if (typeof process$9 !== "undefined" && !process$9.browser) {
              blob.type = contentType;
            }
            callback(null, blob);
          }).catch(function (err) {
            callback(err);
          });
        });
        api.removeAttachment = adapterFun$$1("removeAttachment", function (docId, attachmentId, rev$$1, callback) {
          var url = genDBUrl(host, encodeDocId(docId) + "/" + encodeAttachmentId(attachmentId)) + "?rev=" + rev$$1;
          fetchJSON(url, { method: "DELETE" }, callback).catch(callback);
        });
        api.putAttachment = adapterFun$$1("putAttachment", function (docId, attachmentId, rev$$1, blob, type, callback) {
          if (typeof type === "function") {
            callback = type;
            type = blob;
            blob = rev$$1;
            rev$$1 = null;
          }
          var id = encodeDocId(docId) + "/" + encodeAttachmentId(attachmentId);
          var url = genDBUrl(host, id);
          if (rev$$1) {
            url += "?rev=" + rev$$1;
          }
          if (typeof blob === "string") {
            var binary;
            try {
              binary = thisAtob$1(blob);
            } catch (err) {
              return callback(createError$3(BAD_ARG$1, "Attachment is not a valid base64 string"));
            }
            blob = binary ? binStringToBluffer$1(binary, type) : "";
          }
          fetchJSON(url, {
            headers: new h({ "Content-Type": type }),
            method: "PUT",
            body: blob
          }, callback).catch(callback);
        });
        api._bulkDocs = function (req, opts, callback) {
          req.new_edits = opts.new_edits;
          setup().then(function () {
            return Promise.all(req.docs.map(preprocessAttachments$1$1));
          }).then(function () {
            return fetchJSON(genDBUrl(host, "_bulk_docs"), {
              method: "POST",
              body: JSON.stringify(req)
            }, callback);
          }).catch(callback);
        };
        api._put = function (doc, opts, callback) {
          setup().then(function () {
            return preprocessAttachments$1$1(doc);
          }).then(function () {
            return fetchJSON(genDBUrl(host, encodeDocId(doc._id)), {
              method: "PUT",
              body: JSON.stringify(doc)
            });
          }).then(function (result) {
            callback(null, result.data);
          }).catch(function (err) {
            err.docId = doc && doc._id;
            callback(err);
          });
        };
        api.allDocs = adapterFun$$1("allDocs", function (opts, callback) {
          if (typeof opts === "function") {
            callback = opts;
            opts = {};
          }
          opts = clone$2(opts);
          var params = {};
          var body;
          var method = "GET";
          if (opts.conflicts) {
            params.conflicts = true;
          }
          if (opts.update_seq) {
            params.update_seq = true;
          }
          if (opts.descending) {
            params.descending = true;
          }
          if (opts.include_docs) {
            params.include_docs = true;
          }
          if (opts.attachments) {
            params.attachments = true;
          }
          if (opts.key) {
            params.key = JSON.stringify(opts.key);
          }
          if (opts.start_key) {
            opts.startkey = opts.start_key;
          }
          if (opts.startkey) {
            params.startkey = JSON.stringify(opts.startkey);
          }
          if (opts.end_key) {
            opts.endkey = opts.end_key;
          }
          if (opts.endkey) {
            params.endkey = JSON.stringify(opts.endkey);
          }
          if (typeof opts.inclusive_end !== "undefined") {
            params.inclusive_end = !!opts.inclusive_end;
          }
          if (typeof opts.limit !== "undefined") {
            params.limit = opts.limit;
          }
          if (typeof opts.skip !== "undefined") {
            params.skip = opts.skip;
          }
          var paramStr = paramsToStr(params);
          if (typeof opts.keys !== "undefined") {
            method = "POST";
            body = { keys: opts.keys };
          }
          fetchJSON(genDBUrl(host, "_all_docs" + paramStr), {
            method: method,
            body: JSON.stringify(body)
          }).then(function (result) {
            if (opts.include_docs && opts.attachments && opts.binary) {
              result.data.rows.forEach(readAttachmentsAsBlobOrBuffer);
            }
            callback(null, result.data);
          }).catch(callback);
        });
        api._changes = function (opts) {
          var batchSize = "batch_size" in opts ? opts.batch_size : CHANGES_BATCH_SIZE;
          opts = clone$2(opts);
          if (opts.continuous && !("heartbeat" in opts)) {
            opts.heartbeat = DEFAULT_HEARTBEAT;
          }
          var requestTimeout = "timeout" in opts ? opts.timeout : 30 * 1000;
          if ("timeout" in opts && opts.timeout && requestTimeout - opts.timeout < CHANGES_TIMEOUT_BUFFER) {
            requestTimeout = opts.timeout + CHANGES_TIMEOUT_BUFFER;
          }
          if ("heartbeat" in opts && opts.heartbeat && requestTimeout - opts.heartbeat < CHANGES_TIMEOUT_BUFFER) {
            requestTimeout = opts.heartbeat + CHANGES_TIMEOUT_BUFFER;
          }
          var params = {};
          if ("timeout" in opts && opts.timeout) {
            params.timeout = opts.timeout;
          }
          var limit = typeof opts.limit !== "undefined" ? opts.limit : false;
          var leftToFetch = limit;
          if (opts.style) {
            params.style = opts.style;
          }
          if (opts.include_docs || opts.filter && typeof opts.filter === "function") {
            params.include_docs = true;
          }
          if (opts.attachments) {
            params.attachments = true;
          }
          if (opts.continuous) {
            params.feed = "longpoll";
          }
          if (opts.seq_interval) {
            params.seq_interval = opts.seq_interval;
          }
          if (opts.conflicts) {
            params.conflicts = true;
          }
          if (opts.descending) {
            params.descending = true;
          }
          if (opts.update_seq) {
            params.update_seq = true;
          }
          if ("heartbeat" in opts) {
            if (opts.heartbeat) {
              params.heartbeat = opts.heartbeat;
            }
          }
          if (opts.filter && typeof opts.filter === "string") {
            params.filter = opts.filter;
          }
          if (opts.view && typeof opts.view === "string") {
            params.filter = "_view";
            params.view = opts.view;
          }
          if (opts.query_params && typeof opts.query_params === "object") {
            for (var param_name in opts.query_params) {
              if (opts.query_params.hasOwnProperty(param_name)) {
                params[param_name] = opts.query_params[param_name];
              }
            }
          }
          var method = "GET";
          var body;
          if (opts.doc_ids) {
            params.filter = "_doc_ids";
            method = "POST";
            body = { doc_ids: opts.doc_ids };
          } else if (opts.selector) {
            params.filter = "_selector";
            method = "POST";
            body = { selector: opts.selector };
          }
          var controller = new a();
          var lastFetchedSeq;
          var fetchData = function (since, callback) {
            if (opts.aborted) {
              return;
            }
            params.since = since;
            if (typeof params.since === "object") {
              params.since = JSON.stringify(params.since);
            }
            if (opts.descending) {
              if (limit) {
                params.limit = leftToFetch;
              }
            } else {
              params.limit = !limit || leftToFetch > batchSize ? batchSize : leftToFetch;
            }
            var url = genDBUrl(host, "_changes" + paramsToStr(params));
            var fetchOpts = {
              signal: controller.signal,
              method: method,
              body: JSON.stringify(body)
            };
            lastFetchedSeq = since;
            if (opts.aborted) {
              return;
            }
            setup().then(function () {
              return fetchJSON(url, fetchOpts, callback);
            }).catch(callback);
          };
          var results = { results: [] };
          var fetched = function (err, res) {
            if (opts.aborted) {
              return;
            }
            var raw_results_length = 0;
            if (res && res.results) {
              raw_results_length = res.results.length;
              results.last_seq = res.last_seq;
              var pending = null;
              var lastSeq = null;
              if (typeof res.pending === "number") {
                pending = res.pending;
              }
              if (typeof results.last_seq === "string" || typeof results.last_seq === "number") {
                lastSeq = results.last_seq;
              }
              var req = {};
              req.query = opts.query_params;
              res.results = res.results.filter(function (c) {
                leftToFetch--;
                var ret = filterChange$1(opts)(c);
                if (ret) {
                  if (opts.include_docs && opts.attachments && opts.binary) {
                    readAttachmentsAsBlobOrBuffer(c);
                  }
                  if (opts.return_docs) {
                    results.results.push(c);
                  }
                  opts.onChange(c, pending, lastSeq);
                }
                return ret;
              });
            } else if (err) {
              opts.aborted = true;
              opts.complete(err);
              return;
            }
            if (res && res.last_seq) {
              lastFetchedSeq = res.last_seq;
            }
            var finished = limit && leftToFetch <= 0 || res && raw_results_length < batchSize || opts.descending;
            if (opts.continuous && !(limit && leftToFetch <= 0) || !finished) {
              immediate$2(function () {
                fetchData(lastFetchedSeq, fetched);
              });
            } else {
              opts.complete(null, results);
            }
          };
          fetchData(opts.since || 0, fetched);
          return {
            cancel: function () {
              opts.aborted = true;
              controller.abort();
            }
          };
        };
        api.revsDiff = adapterFun$$1("revsDiff", function (req, opts, callback) {
          if (typeof opts === "function") {
            callback = opts;
            opts = {};
          }
          fetchJSON(genDBUrl(host, "_revs_diff"), {
            method: "POST",
            body: JSON.stringify(req)
          }, callback).catch(callback);
        });
        api._close = function (callback) {
          callback();
        };
        api._destroy = function (options, callback) {
          fetchJSON(genDBUrl(host, ""), { method: "DELETE" }).then(function (json) {
            callback(null, json);
          }).catch(function (err) {
            if (err.status === 404) {
              callback(null, { ok: true });
            } else {
              callback(err);
            }
          });
        };
      }
      HttpPouch.valid = function () {
        return true;
      };
      function HttpPouch$1(PouchDB) {
        PouchDB.adapter("http", HttpPouch, false);
        PouchDB.adapter("https", HttpPouch, false);
      }
      function QueryParseError(message) {
        this.status = 400;
        this.name = "query_parse_error";
        this.message = message;
        this.error = true;
        try {
          Error.captureStackTrace(this, QueryParseError);
        } catch (e) {
        }
      }
      inherits$8(QueryParseError, Error);
      function NotFoundError$3(message) {
        this.status = 404;
        this.name = "not_found";
        this.message = message;
        this.error = true;
        try {
          Error.captureStackTrace(this, NotFoundError$3);
        } catch (e) {
        }
      }
      inherits$8(NotFoundError$3, Error);
      function BuiltInError(message) {
        this.status = 500;
        this.name = "invalid_value";
        this.message = message;
        this.error = true;
        try {
          Error.captureStackTrace(this, BuiltInError);
        } catch (e) {
        }
      }
      inherits$8(BuiltInError, Error);
      function promisedCallback(promise, callback) {
        if (callback) {
          promise.then(function (res) {
            immediate$2(function () {
              callback(null, res);
            });
          }, function (reason) {
            immediate$2(function () {
              callback(reason);
            });
          });
        }
        return promise;
      }
      function callbackify(fun) {
        return getArguments$2(function (args) {
          var cb = args.pop();
          var promise = fun.apply(this, args);
          if (typeof cb === "function") {
            promisedCallback(promise, cb);
          }
          return promise;
        });
      }
      function fin(promise, finalPromiseFactory) {
        return promise.then(function (res) {
          return finalPromiseFactory().then(function () {
            return res;
          });
        }, function (reason) {
          return finalPromiseFactory().then(function () {
            throw reason;
          });
        });
      }
      function sequentialize(queue, promiseFactory) {
        return function () {
          var args = arguments;
          var that = this;
          return queue.add(function () {
            return promiseFactory.apply(that, args);
          });
        };
      }
      function uniq(arr) {
        var theSet = new ExportedSet(arr);
        var result = new Array(theSet.size);
        var index = -1;
        theSet.forEach(function (value) {
          result[++index] = value;
        });
        return result;
      }
      function mapToKeysArray(map) {
        var result = new Array(map.size);
        var index = -1;
        map.forEach(function (value, key) {
          result[++index] = key;
        });
        return result;
      }
      function createBuiltInError(name) {
        var message = "builtin " + name + " function requires map values to be numbers" + " or number arrays";
        return new BuiltInError(message);
      }
      function sum(values) {
        var result = 0;
        for (var i = 0, len = values.length; i < len; i++) {
          var num = values[i];
          if (typeof num !== "number") {
            if (Array.isArray(num)) {
              result = typeof result === "number" ? [result] : result;
              for (var j = 0, jLen = num.length; j < jLen; j++) {
                var jNum = num[j];
                if (typeof jNum !== "number") {
                  throw createBuiltInError("_sum");
                } else if (typeof result[j] === "undefined") {
                  result.push(jNum);
                } else {
                  result[j] += jNum;
                }
              }
            } else {
              throw createBuiltInError("_sum");
            }
          } else if (typeof result === "number") {
            result += num;
          } else {
            result[0] += num;
          }
        }
        return result;
      }
      var log = guardedConsole$1.bind(null, "log");
      var isArray$2 = Array.isArray;
      var toJSON = JSON.parse;
      function evalFunctionWithEval(func, emit) {
        return scopeEval$1("return (" + func.replace(/;\s*$/, "") + ");", {
          emit: emit,
          sum: sum,
          log: log,
          isArray: isArray$2,
          toJSON: toJSON
        });
      }
      function TaskQueue$1() {
        this.promise = new Promise(function (fulfill) {
          fulfill();
        });
      }
      TaskQueue$1.prototype.add = function (promiseFactory) {
        this.promise = this.promise.catch(function () {
        }).then(function () {
          return promiseFactory();
        });
        return this.promise;
      };
      TaskQueue$1.prototype.finish = function () {
        return this.promise;
      };
      function stringify(input) {
        if (!input) {
          return "undefined";
        }
        switch (typeof input) {
        case "function":
          return input.toString();
        case "string":
          return input.toString();
        default:
          return JSON.stringify(input);
        }
      }
      function createViewSignature(mapFun, reduceFun) {
        return stringify(mapFun) + stringify(reduceFun) + "undefined";
      }
      function createView(sourceDB, viewName, mapFun, reduceFun, temporary, localDocName) {
        var viewSignature = createViewSignature(mapFun, reduceFun);
        var cachedViews;
        if (!temporary) {
          cachedViews = sourceDB._cachedViews = sourceDB._cachedViews || {};
          if (cachedViews[viewSignature]) {
            return cachedViews[viewSignature];
          }
        }
        var promiseForView = sourceDB.info().then(function (info) {
          var depDbName = info.db_name + "-mrview-" + (temporary ? "temp" : stringMd5$1(viewSignature));
          function diffFunction(doc) {
            doc.views = doc.views || {};
            var fullViewName = viewName;
            if (fullViewName.indexOf("/") === -1) {
              fullViewName = viewName + "/" + viewName;
            }
            var depDbs = doc.views[fullViewName] = doc.views[fullViewName] || {};
            if (depDbs[depDbName]) {
              return;
            }
            depDbs[depDbName] = true;
            return doc;
          }
          return upsert$1(sourceDB, "_local/" + localDocName, diffFunction).then(function () {
            return sourceDB.registerDependentDatabase(depDbName).then(function (res) {
              var db = res.db;
              db.auto_compaction = true;
              var view = {
                name: depDbName,
                db: db,
                sourceDB: sourceDB,
                adapter: sourceDB.adapter,
                mapFun: mapFun,
                reduceFun: reduceFun
              };
              return view.db.get("_local/lastSeq").catch(function (err) {
                if (err.status !== 404) {
                  throw err;
                }
              }).then(function (lastSeqDoc) {
                view.seq = lastSeqDoc ? lastSeqDoc.seq : 0;
                if (cachedViews) {
                  view.db.once("destroyed", function () {
                    delete cachedViews[viewSignature];
                  });
                }
                return view;
              });
            });
          });
        });
        if (cachedViews) {
          cachedViews[viewSignature] = promiseForView;
        }
        return promiseForView;
      }
      var persistentQueues = {};
      var tempViewQueue = new TaskQueue$1();
      var CHANGES_BATCH_SIZE$1 = 50;
      function parseViewName(name) {
        return name.indexOf("/") === -1 ? [
          name,
          name
        ] : name.split("/");
      }
      function isGenOne(changes) {
        return changes.length === 1 && /^1-/.test(changes[0].rev);
      }
      function emitError(db, e) {
        try {
          db.emit("error", e);
        } catch (err) {
          guardedConsole$1("error", "The user's map/reduce function threw an uncaught error.\n" + "You can debug this error by doing:\n" + "myDatabase.on('error', function (err) { debugger; });\n" + "Please double-check your map/reduce function.");
          guardedConsole$1("error", e);
        }
      }
      function createAbstractMapReduce(localDocName, mapper, reducer, ddocValidator) {
        function tryMap(db, fun, doc) {
          try {
            fun(doc);
          } catch (e) {
            emitError(db, e);
          }
        }
        function tryReduce(db, fun, keys, values, rereduce) {
          try {
            return { output: fun(keys, values, rereduce) };
          } catch (e) {
            emitError(db, e);
            return { error: e };
          }
        }
        function sortByKeyThenValue(x, y) {
          var keyCompare = collate(x.key, y.key);
          return keyCompare !== 0 ? keyCompare : collate(x.value, y.value);
        }
        function sliceResults(results, limit, skip) {
          skip = skip || 0;
          if (typeof limit === "number") {
            return results.slice(skip, limit + skip);
          } else if (skip > 0) {
            return results.slice(skip);
          }
          return results;
        }
        function rowToDocId(row) {
          var val = row.value;
          var docId = val && typeof val === "object" && val._id || row.id;
          return docId;
        }
        function readAttachmentsAsBlobOrBuffer(res) {
          res.rows.forEach(function (row) {
            var atts = row.doc && row.doc._attachments;
            if (!atts) {
              return;
            }
            Object.keys(atts).forEach(function (filename) {
              var att = atts[filename];
              atts[filename].data = b64ToBluffer$1(att.data, att.content_type);
            });
          });
        }
        function postprocessAttachments(opts) {
          return function (res) {
            if (opts.include_docs && opts.attachments && opts.binary) {
              readAttachmentsAsBlobOrBuffer(res);
            }
            return res;
          };
        }
        function addHttpParam(paramName, opts, params, asJson) {
          var val = opts[paramName];
          if (typeof val !== "undefined") {
            if (asJson) {
              val = encodeURIComponent(JSON.stringify(val));
            }
            params.push(paramName + "=" + val);
          }
        }
        function coerceInteger(integerCandidate) {
          if (typeof integerCandidate !== "undefined") {
            var asNumber = Number(integerCandidate);
            if (!isNaN(asNumber) && asNumber === parseInt(integerCandidate, 10)) {
              return asNumber;
            } else {
              return integerCandidate;
            }
          }
        }
        function coerceOptions(opts) {
          opts.group_level = coerceInteger(opts.group_level);
          opts.limit = coerceInteger(opts.limit);
          opts.skip = coerceInteger(opts.skip);
          return opts;
        }
        function checkPositiveInteger(number) {
          if (number) {
            if (typeof number !== "number") {
              return new QueryParseError("Invalid value for integer: \"" + number + "\"");
            }
            if (number < 0) {
              return new QueryParseError("Invalid value for positive integer: " + "\"" + number + "\"");
            }
          }
        }
        function checkQueryParseError(options, fun) {
          var startkeyName = options.descending ? "endkey" : "startkey";
          var endkeyName = options.descending ? "startkey" : "endkey";
          if (typeof options[startkeyName] !== "undefined" && typeof options[endkeyName] !== "undefined" && collate(options[startkeyName], options[endkeyName]) > 0) {
            throw new QueryParseError("No rows can match your key range, " + "reverse your start_key and end_key or set {descending : true}");
          } else if (fun.reduce && options.reduce !== false) {
            if (options.include_docs) {
              throw new QueryParseError("{include_docs:true} is invalid for reduce");
            } else if (options.keys && options.keys.length > 1 && !options.group && !options.group_level) {
              throw new QueryParseError("Multi-key fetches for reduce views must use " + "{group: true}");
            }
          }
          [
            "group_level",
            "limit",
            "skip"
          ].forEach(function (optionName) {
            var error = checkPositiveInteger(options[optionName]);
            if (error) {
              throw error;
            }
          });
        }
        function httpQuery(db, fun, opts) {
          var params = [];
          var body;
          var method = "GET";
          var ok, status;
          addHttpParam("reduce", opts, params);
          addHttpParam("include_docs", opts, params);
          addHttpParam("attachments", opts, params);
          addHttpParam("limit", opts, params);
          addHttpParam("descending", opts, params);
          addHttpParam("group", opts, params);
          addHttpParam("group_level", opts, params);
          addHttpParam("skip", opts, params);
          addHttpParam("stale", opts, params);
          addHttpParam("conflicts", opts, params);
          addHttpParam("startkey", opts, params, true);
          addHttpParam("start_key", opts, params, true);
          addHttpParam("endkey", opts, params, true);
          addHttpParam("end_key", opts, params, true);
          addHttpParam("inclusive_end", opts, params);
          addHttpParam("key", opts, params, true);
          addHttpParam("update_seq", opts, params);
          params = params.join("&");
          params = params === "" ? "" : "?" + params;
          if (typeof opts.keys !== "undefined") {
            var MAX_URL_LENGTH = 2000;
            var keysAsString = "keys=" + encodeURIComponent(JSON.stringify(opts.keys));
            if (keysAsString.length + params.length + 1 <= MAX_URL_LENGTH) {
              params += (params[0] === "?" ? "&" : "?") + keysAsString;
            } else {
              method = "POST";
              if (typeof fun === "string") {
                body = { keys: opts.keys };
              } else {
                fun.keys = opts.keys;
              }
            }
          }
          if (typeof fun === "string") {
            var parts = parseViewName(fun);
            return db.fetch("_design/" + parts[0] + "/_view/" + parts[1] + params, {
              headers: new h({ "Content-Type": "application/json" }),
              method: method,
              body: JSON.stringify(body)
            }).then(function (response) {
              ok = response.ok;
              status = response.status;
              return response.json();
            }).then(function (result) {
              if (!ok) {
                result.status = status;
                throw generateErrorFromResponse$1(result);
              }
              result.rows.forEach(function (row) {
                if (row.value && row.value.error && row.value.error === "builtin_reduce_error") {
                  throw new Error(row.reason);
                }
              });
              return result;
            }).then(postprocessAttachments(opts));
          }
          body = body || {};
          Object.keys(fun).forEach(function (key) {
            if (Array.isArray(fun[key])) {
              body[key] = fun[key];
            } else {
              body[key] = fun[key].toString();
            }
          });
          return db.fetch("_temp_view" + params, {
            headers: new h({ "Content-Type": "application/json" }),
            method: "POST",
            body: JSON.stringify(body)
          }).then(function (response) {
            ok = response.ok;
            status = response.status;
            return response.json();
          }).then(function (result) {
            if (!ok) {
              result.status = status;
              throw generateErrorFromResponse$1(result);
            }
            return result;
          }).then(postprocessAttachments(opts));
        }
        function customQuery(db, fun, opts) {
          return new Promise(function (resolve, reject) {
            db._query(fun, opts, function (err, res) {
              if (err) {
                return reject(err);
              }
              resolve(res);
            });
          });
        }
        function customViewCleanup(db) {
          return new Promise(function (resolve, reject) {
            db._viewCleanup(function (err, res) {
              if (err) {
                return reject(err);
              }
              resolve(res);
            });
          });
        }
        function defaultsTo(value) {
          return function (reason) {
            if (reason.status === 404) {
              return value;
            } else {
              throw reason;
            }
          };
        }
        function getDocsToPersist(docId, view, docIdsToChangesAndEmits) {
          var metaDocId = "_local/doc_" + docId;
          var defaultMetaDoc = {
            _id: metaDocId,
            keys: []
          };
          var docData = docIdsToChangesAndEmits.get(docId);
          var indexableKeysToKeyValues = docData[0];
          var changes = docData[1];
          function getMetaDoc() {
            if (isGenOne(changes)) {
              return Promise.resolve(defaultMetaDoc);
            }
            return view.db.get(metaDocId).catch(defaultsTo(defaultMetaDoc));
          }
          function getKeyValueDocs(metaDoc) {
            if (!metaDoc.keys.length) {
              return Promise.resolve({ rows: [] });
            }
            return view.db.allDocs({
              keys: metaDoc.keys,
              include_docs: true
            });
          }
          function processKeyValueDocs(metaDoc, kvDocsRes) {
            var kvDocs = [];
            var oldKeys = new ExportedSet();
            for (var i = 0, len = kvDocsRes.rows.length; i < len; i++) {
              var row = kvDocsRes.rows[i];
              var doc = row.doc;
              if (!doc) {
                continue;
              }
              kvDocs.push(doc);
              oldKeys.add(doc._id);
              doc._deleted = !indexableKeysToKeyValues.has(doc._id);
              if (!doc._deleted) {
                var keyValue = indexableKeysToKeyValues.get(doc._id);
                if ("value" in keyValue) {
                  doc.value = keyValue.value;
                }
              }
            }
            var newKeys = mapToKeysArray(indexableKeysToKeyValues);
            newKeys.forEach(function (key) {
              if (!oldKeys.has(key)) {
                var kvDoc = { _id: key };
                var keyValue = indexableKeysToKeyValues.get(key);
                if ("value" in keyValue) {
                  kvDoc.value = keyValue.value;
                }
                kvDocs.push(kvDoc);
              }
            });
            metaDoc.keys = uniq(newKeys.concat(metaDoc.keys));
            kvDocs.push(metaDoc);
            return kvDocs;
          }
          return getMetaDoc().then(function (metaDoc) {
            return getKeyValueDocs(metaDoc).then(function (kvDocsRes) {
              return processKeyValueDocs(metaDoc, kvDocsRes);
            });
          });
        }
        function saveKeyValues(view, docIdsToChangesAndEmits, seq) {
          var seqDocId = "_local/lastSeq";
          return view.db.get(seqDocId).catch(defaultsTo({
            _id: seqDocId,
            seq: 0
          })).then(function (lastSeqDoc) {
            var docIds = mapToKeysArray(docIdsToChangesAndEmits);
            return Promise.all(docIds.map(function (docId) {
              return getDocsToPersist(docId, view, docIdsToChangesAndEmits);
            })).then(function (listOfDocsToPersist) {
              var docsToPersist = flatten$1(listOfDocsToPersist);
              lastSeqDoc.seq = seq;
              docsToPersist.push(lastSeqDoc);
              return view.db.bulkDocs({ docs: docsToPersist });
            });
          });
        }
        function getQueue(view) {
          var viewName = typeof view === "string" ? view : view.name;
          var queue = persistentQueues[viewName];
          if (!queue) {
            queue = persistentQueues[viewName] = new TaskQueue$1();
          }
          return queue;
        }
        function updateView(view) {
          return sequentialize(getQueue(view), function () {
            return updateViewInQueue(view);
          })();
        }
        function updateViewInQueue(view) {
          var mapResults;
          var doc;
          function emit(key, value) {
            var output = {
              id: doc._id,
              key: normalizeKey(key)
            };
            if (typeof value !== "undefined" && value !== null) {
              output.value = normalizeKey(value);
            }
            mapResults.push(output);
          }
          var mapFun = mapper(view.mapFun, emit);
          var currentSeq = view.seq || 0;
          function processChange(docIdsToChangesAndEmits, seq) {
            return function () {
              return saveKeyValues(view, docIdsToChangesAndEmits, seq);
            };
          }
          var queue = new TaskQueue$1();
          function processNextBatch() {
            return view.sourceDB.changes({
              return_docs: true,
              conflicts: true,
              include_docs: true,
              style: "all_docs",
              since: currentSeq,
              limit: CHANGES_BATCH_SIZE$1
            }).then(processBatch);
          }
          function processBatch(response) {
            var results = response.results;
            if (!results.length) {
              return;
            }
            var docIdsToChangesAndEmits = createDocIdsToChangesAndEmits(results);
            queue.add(processChange(docIdsToChangesAndEmits, currentSeq));
            if (results.length < CHANGES_BATCH_SIZE$1) {
              return;
            }
            return processNextBatch();
          }
          function createDocIdsToChangesAndEmits(results) {
            var docIdsToChangesAndEmits = new ExportedMap();
            for (var i = 0, len = results.length; i < len; i++) {
              var change = results[i];
              if (change.doc._id[0] !== "_") {
                mapResults = [];
                doc = change.doc;
                if (!doc._deleted) {
                  tryMap(view.sourceDB, mapFun, doc);
                }
                mapResults.sort(sortByKeyThenValue);
                var indexableKeysToKeyValues = createIndexableKeysToKeyValues(mapResults);
                docIdsToChangesAndEmits.set(change.doc._id, [
                  indexableKeysToKeyValues,
                  change.changes
                ]);
              }
              currentSeq = change.seq;
            }
            return docIdsToChangesAndEmits;
          }
          function createIndexableKeysToKeyValues(mapResults) {
            var indexableKeysToKeyValues = new ExportedMap();
            var lastKey;
            for (var i = 0, len = mapResults.length; i < len; i++) {
              var emittedKeyValue = mapResults[i];
              var complexKey = [
                emittedKeyValue.key,
                emittedKeyValue.id
              ];
              if (i > 0 && collate(emittedKeyValue.key, lastKey) === 0) {
                complexKey.push(i);
              }
              indexableKeysToKeyValues.set(toIndexableString(complexKey), emittedKeyValue);
              lastKey = emittedKeyValue.key;
            }
            return indexableKeysToKeyValues;
          }
          return processNextBatch().then(function () {
            return queue.finish();
          }).then(function () {
            view.seq = currentSeq;
          });
        }
        function reduceView(view, results, options) {
          if (options.group_level === 0) {
            delete options.group_level;
          }
          var shouldGroup = options.group || options.group_level;
          var reduceFun = reducer(view.reduceFun);
          var groups = [];
          var lvl = isNaN(options.group_level) ? Number.POSITIVE_INFINITY : options.group_level;
          results.forEach(function (e) {
            var last = groups[groups.length - 1];
            var groupKey = shouldGroup ? e.key : null;
            if (shouldGroup && Array.isArray(groupKey)) {
              groupKey = groupKey.slice(0, lvl);
            }
            if (last && collate(last.groupKey, groupKey) === 0) {
              last.keys.push([
                e.key,
                e.id
              ]);
              last.values.push(e.value);
              return;
            }
            groups.push({
              keys: [[
                  e.key,
                  e.id
                ]],
              values: [e.value],
              groupKey: groupKey
            });
          });
          results = [];
          for (var i = 0, len = groups.length; i < len; i++) {
            var e = groups[i];
            var reduceTry = tryReduce(view.sourceDB, reduceFun, e.keys, e.values, false);
            if (reduceTry.error && reduceTry.error instanceof BuiltInError) {
              throw reduceTry.error;
            }
            results.push({
              value: reduceTry.error ? null : reduceTry.output,
              key: e.groupKey
            });
          }
          return { rows: sliceResults(results, options.limit, options.skip) };
        }
        function queryView(view, opts) {
          return sequentialize(getQueue(view), function () {
            return queryViewInQueue(view, opts);
          })();
        }
        function queryViewInQueue(view, opts) {
          var totalRows;
          var shouldReduce = view.reduceFun && opts.reduce !== false;
          var skip = opts.skip || 0;
          if (typeof opts.keys !== "undefined" && !opts.keys.length) {
            opts.limit = 0;
            delete opts.keys;
          }
          function fetchFromView(viewOpts) {
            viewOpts.include_docs = true;
            return view.db.allDocs(viewOpts).then(function (res) {
              totalRows = res.total_rows;
              return res.rows.map(function (result) {
                if ("value" in result.doc && typeof result.doc.value === "object" && result.doc.value !== null) {
                  var keys = Object.keys(result.doc.value).sort();
                  var expectedKeys = [
                    "id",
                    "key",
                    "value"
                  ];
                  if (!(keys < expectedKeys || keys > expectedKeys)) {
                    return result.doc.value;
                  }
                }
                var parsedKeyAndDocId = parseIndexableString(result.doc._id);
                return {
                  key: parsedKeyAndDocId[0],
                  id: parsedKeyAndDocId[1],
                  value: "value" in result.doc ? result.doc.value : null
                };
              });
            });
          }
          function onMapResultsReady(rows) {
            var finalResults;
            if (shouldReduce) {
              finalResults = reduceView(view, rows, opts);
            } else {
              finalResults = {
                total_rows: totalRows,
                offset: skip,
                rows: rows
              };
            }
            if (opts.update_seq) {
              finalResults.update_seq = view.seq;
            }
            if (opts.include_docs) {
              var docIds = uniq(rows.map(rowToDocId));
              return view.sourceDB.allDocs({
                keys: docIds,
                include_docs: true,
                conflicts: opts.conflicts,
                attachments: opts.attachments,
                binary: opts.binary
              }).then(function (allDocsRes) {
                var docIdsToDocs = new ExportedMap();
                allDocsRes.rows.forEach(function (row) {
                  docIdsToDocs.set(row.id, row.doc);
                });
                rows.forEach(function (row) {
                  var docId = rowToDocId(row);
                  var doc = docIdsToDocs.get(docId);
                  if (doc) {
                    row.doc = doc;
                  }
                });
                return finalResults;
              });
            } else {
              return finalResults;
            }
          }
          if (typeof opts.keys !== "undefined") {
            var keys = opts.keys;
            var fetchPromises = keys.map(function (key) {
              var viewOpts = {
                startkey: toIndexableString([key]),
                endkey: toIndexableString([
                  key,
                  {}
                ])
              };
              if (opts.update_seq) {
                viewOpts.update_seq = true;
              }
              return fetchFromView(viewOpts);
            });
            return Promise.all(fetchPromises).then(flatten$1).then(onMapResultsReady);
          } else {
            var viewOpts = { descending: opts.descending };
            if (opts.update_seq) {
              viewOpts.update_seq = true;
            }
            var startkey;
            var endkey;
            if ("start_key" in opts) {
              startkey = opts.start_key;
            }
            if ("startkey" in opts) {
              startkey = opts.startkey;
            }
            if ("end_key" in opts) {
              endkey = opts.end_key;
            }
            if ("endkey" in opts) {
              endkey = opts.endkey;
            }
            if (typeof startkey !== "undefined") {
              viewOpts.startkey = opts.descending ? toIndexableString([
                startkey,
                {}
              ]) : toIndexableString([startkey]);
            }
            if (typeof endkey !== "undefined") {
              var inclusiveEnd = opts.inclusive_end !== false;
              if (opts.descending) {
                inclusiveEnd = !inclusiveEnd;
              }
              viewOpts.endkey = toIndexableString(inclusiveEnd ? [
                endkey,
                {}
              ] : [endkey]);
            }
            if (typeof opts.key !== "undefined") {
              var keyStart = toIndexableString([opts.key]);
              var keyEnd = toIndexableString([
                opts.key,
                {}
              ]);
              if (viewOpts.descending) {
                viewOpts.endkey = keyStart;
                viewOpts.startkey = keyEnd;
              } else {
                viewOpts.startkey = keyStart;
                viewOpts.endkey = keyEnd;
              }
            }
            if (!shouldReduce) {
              if (typeof opts.limit === "number") {
                viewOpts.limit = opts.limit;
              }
              viewOpts.skip = skip;
            }
            return fetchFromView(viewOpts).then(onMapResultsReady);
          }
        }
        function httpViewCleanup(db) {
          return db.fetch("_view_cleanup", {
            headers: new h({ "Content-Type": "application/json" }),
            method: "POST"
          }).then(function (response) {
            return response.json();
          });
        }
        function localViewCleanup(db) {
          return db.get("_local/" + localDocName).then(function (metaDoc) {
            var docsToViews = new ExportedMap();
            Object.keys(metaDoc.views).forEach(function (fullViewName) {
              var parts = parseViewName(fullViewName);
              var designDocName = "_design/" + parts[0];
              var viewName = parts[1];
              var views = docsToViews.get(designDocName);
              if (!views) {
                views = new ExportedSet();
                docsToViews.set(designDocName, views);
              }
              views.add(viewName);
            });
            var opts = {
              keys: mapToKeysArray(docsToViews),
              include_docs: true
            };
            return db.allDocs(opts).then(function (res) {
              var viewsToStatus = {};
              res.rows.forEach(function (row) {
                var ddocName = row.key.substring(8);
                docsToViews.get(row.key).forEach(function (viewName) {
                  var fullViewName = ddocName + "/" + viewName;
                  if (!metaDoc.views[fullViewName]) {
                    fullViewName = viewName;
                  }
                  var viewDBNames = Object.keys(metaDoc.views[fullViewName]);
                  var statusIsGood = row.doc && row.doc.views && row.doc.views[viewName];
                  viewDBNames.forEach(function (viewDBName) {
                    viewsToStatus[viewDBName] = viewsToStatus[viewDBName] || statusIsGood;
                  });
                });
              });
              var dbsToDelete = Object.keys(viewsToStatus).filter(function (viewDBName) {
                return !viewsToStatus[viewDBName];
              });
              var destroyPromises = dbsToDelete.map(function (viewDBName) {
                return sequentialize(getQueue(viewDBName), function () {
                  return new db.constructor(viewDBName, db.__opts).destroy();
                })();
              });
              return Promise.all(destroyPromises).then(function () {
                return { ok: true };
              });
            });
          }, defaultsTo({ ok: true }));
        }
        function queryPromised(db, fun, opts) {
          if (typeof db._query === "function") {
            return customQuery(db, fun, opts);
          }
          if (isRemote$1(db)) {
            return httpQuery(db, fun, opts);
          }
          if (typeof fun !== "string") {
            checkQueryParseError(opts, fun);
            tempViewQueue.add(function () {
              var createViewPromise = createView(db, "temp_view/temp_view", fun.map, fun.reduce, true, localDocName);
              return createViewPromise.then(function (view) {
                return fin(updateView(view).then(function () {
                  return queryView(view, opts);
                }), function () {
                  return view.db.destroy();
                });
              });
            });
            return tempViewQueue.finish();
          } else {
            var fullViewName = fun;
            var parts = parseViewName(fullViewName);
            var designDocName = parts[0];
            var viewName = parts[1];
            return db.get("_design/" + designDocName).then(function (doc) {
              var fun = doc.views && doc.views[viewName];
              if (!fun) {
                throw new NotFoundError$3("ddoc " + doc._id + " has no view named " + viewName);
              }
              ddocValidator(doc, viewName);
              checkQueryParseError(opts, fun);
              var createViewPromise = createView(db, fullViewName, fun.map, fun.reduce, false, localDocName);
              return createViewPromise.then(function (view) {
                if (opts.stale === "ok" || opts.stale === "update_after") {
                  if (opts.stale === "update_after") {
                    immediate$2(function () {
                      updateView(view);
                    });
                  }
                  return queryView(view, opts);
                } else {
                  return updateView(view).then(function () {
                    return queryView(view, opts);
                  });
                }
              });
            });
          }
        }
        function abstractQuery(fun, opts, callback) {
          var db = this;
          if (typeof opts === "function") {
            callback = opts;
            opts = {};
          }
          opts = opts ? coerceOptions(opts) : {};
          if (typeof fun === "function") {
            fun = { map: fun };
          }
          var promise = Promise.resolve().then(function () {
            return queryPromised(db, fun, opts);
          });
          promisedCallback(promise, callback);
          return promise;
        }
        var abstractViewCleanup = callbackify(function () {
          var db = this;
          if (typeof db._viewCleanup === "function") {
            return customViewCleanup(db);
          }
          if (isRemote$1(db)) {
            return httpViewCleanup(db);
          }
          return localViewCleanup(db);
        });
        return {
          query: abstractQuery,
          viewCleanup: abstractViewCleanup
        };
      }
      var builtInReduce = {
        _sum: function (keys, values) {
          return sum(values);
        },
        _count: function (keys, values) {
          return values.length;
        },
        _stats: function (keys, values) {
          function sumsqr(values) {
            var _sumsqr = 0;
            for (var i = 0, len = values.length; i < len; i++) {
              var num = values[i];
              _sumsqr += num * num;
            }
            return _sumsqr;
          }
          return {
            sum: sum(values),
            min: Math.min.apply(null, values),
            max: Math.max.apply(null, values),
            count: values.length,
            sumsqr: sumsqr(values)
          };
        }
      };
      function getBuiltIn(reduceFunString) {
        if (/^_sum/.test(reduceFunString)) {
          return builtInReduce._sum;
        } else if (/^_count/.test(reduceFunString)) {
          return builtInReduce._count;
        } else if (/^_stats/.test(reduceFunString)) {
          return builtInReduce._stats;
        } else if (/^_/.test(reduceFunString)) {
          throw new Error(reduceFunString + " is not a supported reduce function.");
        }
      }
      function mapper(mapFun, emit) {
        if (typeof mapFun === "function" && mapFun.length === 2) {
          var origMap = mapFun;
          return function (doc) {
            return origMap(doc, emit);
          };
        } else {
          return evalFunctionWithEval(mapFun.toString(), emit);
        }
      }
      function reducer(reduceFun) {
        var reduceFunString = reduceFun.toString();
        var builtIn = getBuiltIn(reduceFunString);
        if (builtIn) {
          return builtIn;
        } else {
          return evalFunctionWithEval(reduceFunString);
        }
      }
      function ddocValidator(ddoc, viewName) {
        var fun = ddoc.views && ddoc.views[viewName];
        if (typeof fun.map !== "string") {
          throw new NotFoundError$3("ddoc " + ddoc._id + " has no string view named " + viewName + ", instead found object of type: " + typeof fun.map);
        }
      }
      var localDocName = "mrviews";
      var abstract = createAbstractMapReduce(localDocName, mapper, reducer, ddocValidator);
      function query(fun, opts, callback) {
        return abstract.query.call(this, fun, opts, callback);
      }
      function viewCleanup(callback) {
        return abstract.viewCleanup.call(this, callback);
      }
      var mapreduce = {
        query: query,
        viewCleanup: viewCleanup
      };
      function isGenOne$1(rev$$1) {
        return /^1-/.test(rev$$1);
      }
      function fileHasChanged(localDoc, remoteDoc, filename) {
        return !localDoc._attachments || !localDoc._attachments[filename] || localDoc._attachments[filename].digest !== remoteDoc._attachments[filename].digest;
      }
      function getDocAttachments(db, doc) {
        var filenames = Object.keys(doc._attachments);
        return Promise.all(filenames.map(function (filename) {
          return db.getAttachment(doc._id, filename, { rev: doc._rev });
        }));
      }
      function getDocAttachmentsFromTargetOrSource(target, src, doc) {
        var doCheckForLocalAttachments = isRemote$1(src) && !isRemote$1(target);
        var filenames = Object.keys(doc._attachments);
        if (!doCheckForLocalAttachments) {
          return getDocAttachments(src, doc);
        }
        return target.get(doc._id).then(function (localDoc) {
          return Promise.all(filenames.map(function (filename) {
            if (fileHasChanged(localDoc, doc, filename)) {
              return src.getAttachment(doc._id, filename);
            }
            return target.getAttachment(localDoc._id, filename);
          }));
        }).catch(function (error) {
          if (error.status !== 404) {
            throw error;
          }
          return getDocAttachments(src, doc);
        });
      }
      function createBulkGetOpts(diffs) {
        var requests = [];
        Object.keys(diffs).forEach(function (id) {
          var missingRevs = diffs[id].missing;
          missingRevs.forEach(function (missingRev) {
            requests.push({
              id: id,
              rev: missingRev
            });
          });
        });
        return {
          docs: requests,
          revs: true,
          latest: true
        };
      }
      function getDocs(src, target, diffs, state) {
        diffs = clone$2(diffs);
        var resultDocs = [], ok = true;
        function getAllDocs() {
          var bulkGetOpts = createBulkGetOpts(diffs);
          if (!bulkGetOpts.docs.length) {
            return;
          }
          return src.bulkGet(bulkGetOpts).then(function (bulkGetResponse) {
            if (state.cancelled) {
              throw new Error("cancelled");
            }
            return Promise.all(bulkGetResponse.results.map(function (bulkGetInfo) {
              return Promise.all(bulkGetInfo.docs.map(function (doc) {
                var remoteDoc = doc.ok;
                if (doc.error) {
                  ok = false;
                }
                if (!remoteDoc || !remoteDoc._attachments) {
                  return remoteDoc;
                }
                return getDocAttachmentsFromTargetOrSource(target, src, remoteDoc).then(function (attachments) {
                  var filenames = Object.keys(remoteDoc._attachments);
                  attachments.forEach(function (attachment, i) {
                    var att = remoteDoc._attachments[filenames[i]];
                    delete att.stub;
                    delete att.length;
                    att.data = attachment;
                  });
                  return remoteDoc;
                });
              }));
            })).then(function (results) {
              resultDocs = resultDocs.concat(flatten$1(results).filter(Boolean));
            });
          });
        }
        function hasAttachments(doc) {
          return doc._attachments && Object.keys(doc._attachments).length > 0;
        }
        function hasConflicts(doc) {
          return doc._conflicts && doc._conflicts.length > 0;
        }
        function fetchRevisionOneDocs(ids) {
          return src.allDocs({
            keys: ids,
            include_docs: true,
            conflicts: true
          }).then(function (res) {
            if (state.cancelled) {
              throw new Error("cancelled");
            }
            res.rows.forEach(function (row) {
              if (row.deleted || !row.doc || !isGenOne$1(row.value.rev) || hasAttachments(row.doc) || hasConflicts(row.doc)) {
                return;
              }
              if (row.doc._conflicts) {
                delete row.doc._conflicts;
              }
              resultDocs.push(row.doc);
              delete diffs[row.id];
            });
          });
        }
        function getRevisionOneDocs() {
          var ids = Object.keys(diffs).filter(function (id) {
            var missing = diffs[id].missing;
            return missing.length === 1 && isGenOne$1(missing[0]);
          });
          if (ids.length > 0) {
            return fetchRevisionOneDocs(ids);
          }
        }
        function returnResult() {
          return {
            ok: ok,
            docs: resultDocs
          };
        }
        return Promise.resolve().then(getRevisionOneDocs).then(getAllDocs).then(returnResult);
      }
      var CHECKPOINT_VERSION = 1;
      var REPLICATOR = "pouchdb";
      var CHECKPOINT_HISTORY_SIZE = 5;
      var LOWEST_SEQ = 0;
      function updateCheckpoint(db, id, checkpoint, session, returnValue) {
        return db.get(id).catch(function (err) {
          if (err.status === 404) {
            if (db.adapter === "http" || db.adapter === "https") {
              explainError$1(404, "PouchDB is just checking if a remote checkpoint exists.");
            }
            return {
              session_id: session,
              _id: id,
              history: [],
              replicator: REPLICATOR,
              version: CHECKPOINT_VERSION
            };
          }
          throw err;
        }).then(function (doc) {
          if (returnValue.cancelled) {
            return;
          }
          if (doc.last_seq === checkpoint) {
            return;
          }
          doc.history = (doc.history || []).filter(function (item) {
            return item.session_id !== session;
          });
          doc.history.unshift({
            last_seq: checkpoint,
            session_id: session
          });
          doc.history = doc.history.slice(0, CHECKPOINT_HISTORY_SIZE);
          doc.version = CHECKPOINT_VERSION;
          doc.replicator = REPLICATOR;
          doc.session_id = session;
          doc.last_seq = checkpoint;
          return db.put(doc).catch(function (err) {
            if (err.status === 409) {
              return updateCheckpoint(db, id, checkpoint, session, returnValue);
            }
            throw err;
          });
        });
      }
      function Checkpointer(src, target, id, returnValue, opts) {
        this.src = src;
        this.target = target;
        this.id = id;
        this.returnValue = returnValue;
        this.opts = opts || {};
      }
      Checkpointer.prototype.writeCheckpoint = function (checkpoint, session) {
        var self = this;
        return this.updateTarget(checkpoint, session).then(function () {
          return self.updateSource(checkpoint, session);
        });
      };
      Checkpointer.prototype.updateTarget = function (checkpoint, session) {
        if (this.opts.writeTargetCheckpoint) {
          return updateCheckpoint(this.target, this.id, checkpoint, session, this.returnValue);
        } else {
          return Promise.resolve(true);
        }
      };
      Checkpointer.prototype.updateSource = function (checkpoint, session) {
        if (this.opts.writeSourceCheckpoint) {
          var self = this;
          return updateCheckpoint(this.src, this.id, checkpoint, session, this.returnValue).catch(function (err) {
            if (isForbiddenError(err)) {
              self.opts.writeSourceCheckpoint = false;
              return true;
            }
            throw err;
          });
        } else {
          return Promise.resolve(true);
        }
      };
      var comparisons = {
        "undefined": function (targetDoc, sourceDoc) {
          if (collate(targetDoc.last_seq, sourceDoc.last_seq) === 0) {
            return sourceDoc.last_seq;
          }
          return 0;
        },
        "1": function (targetDoc, sourceDoc) {
          return compareReplicationLogs(sourceDoc, targetDoc).last_seq;
        }
      };
      Checkpointer.prototype.getCheckpoint = function () {
        var self = this;
        if (self.opts && self.opts.writeSourceCheckpoint && !self.opts.writeTargetCheckpoint) {
          return self.src.get(self.id).then(function (sourceDoc) {
            return sourceDoc.last_seq || LOWEST_SEQ;
          }).catch(function (err) {
            if (err.status !== 404) {
              throw err;
            }
            return LOWEST_SEQ;
          });
        }
        return self.target.get(self.id).then(function (targetDoc) {
          if (self.opts && self.opts.writeTargetCheckpoint && !self.opts.writeSourceCheckpoint) {
            return targetDoc.last_seq || LOWEST_SEQ;
          }
          return self.src.get(self.id).then(function (sourceDoc) {
            if (targetDoc.version !== sourceDoc.version) {
              return LOWEST_SEQ;
            }
            var version;
            if (targetDoc.version) {
              version = targetDoc.version.toString();
            } else {
              version = "undefined";
            }
            if (version in comparisons) {
              return comparisons[version](targetDoc, sourceDoc);
            }
            return LOWEST_SEQ;
          }, function (err) {
            if (err.status === 404 && targetDoc.last_seq) {
              return self.src.put({
                _id: self.id,
                last_seq: LOWEST_SEQ
              }).then(function () {
                return LOWEST_SEQ;
              }, function (err) {
                if (isForbiddenError(err)) {
                  self.opts.writeSourceCheckpoint = false;
                  return targetDoc.last_seq;
                }
                return LOWEST_SEQ;
              });
            }
            throw err;
          });
        }).catch(function (err) {
          if (err.status !== 404) {
            throw err;
          }
          return LOWEST_SEQ;
        });
      };
      function compareReplicationLogs(srcDoc, tgtDoc) {
        if (srcDoc.session_id === tgtDoc.session_id) {
          return {
            last_seq: srcDoc.last_seq,
            history: srcDoc.history
          };
        }
        return compareReplicationHistory(srcDoc.history, tgtDoc.history);
      }
      function compareReplicationHistory(sourceHistory, targetHistory) {
        var S = sourceHistory[0];
        var sourceRest = sourceHistory.slice(1);
        var T = targetHistory[0];
        var targetRest = targetHistory.slice(1);
        if (!S || targetHistory.length === 0) {
          return {
            last_seq: LOWEST_SEQ,
            history: []
          };
        }
        var sourceId = S.session_id;
        if (hasSessionId(sourceId, targetHistory)) {
          return {
            last_seq: S.last_seq,
            history: sourceHistory
          };
        }
        var targetId = T.session_id;
        if (hasSessionId(targetId, sourceRest)) {
          return {
            last_seq: T.last_seq,
            history: targetRest
          };
        }
        return compareReplicationHistory(sourceRest, targetRest);
      }
      function hasSessionId(sessionId, history) {
        var props = history[0];
        var rest = history.slice(1);
        if (!sessionId || history.length === 0) {
          return false;
        }
        if (sessionId === props.session_id) {
          return true;
        }
        return hasSessionId(sessionId, rest);
      }
      function isForbiddenError(err) {
        return typeof err.status === "number" && Math.floor(err.status / 100) === 4;
      }
      var STARTING_BACK_OFF = 0;
      function backOff(opts, returnValue, error, callback) {
        if (opts.retry === false) {
          returnValue.emit("error", error);
          returnValue.removeAllListeners();
          return;
        }
        if (typeof opts.back_off_function !== "function") {
          opts.back_off_function = defaultBackOff$1;
        }
        returnValue.emit("requestError", error);
        if (returnValue.state === "active" || returnValue.state === "pending") {
          returnValue.emit("paused", error);
          returnValue.state = "stopped";
          var backOffSet = function backoffTimeSet() {
            opts.current_back_off = STARTING_BACK_OFF;
          };
          var removeBackOffSetter = function removeBackOffTimeSet() {
            returnValue.removeListener("active", backOffSet);
          };
          returnValue.once("paused", removeBackOffSetter);
          returnValue.once("active", backOffSet);
        }
        opts.current_back_off = opts.current_back_off || STARTING_BACK_OFF;
        opts.current_back_off = opts.back_off_function(opts.current_back_off);
        setTimeout(callback, opts.current_back_off);
      }
      function sortObjectPropertiesByKey(queryParams) {
        return Object.keys(queryParams).sort(collate).reduce(function (result, key) {
          result[key] = queryParams[key];
          return result;
        }, {});
      }
      function generateReplicationId(src, target, opts) {
        var docIds = opts.doc_ids ? opts.doc_ids.sort(collate) : "";
        var filterFun = opts.filter ? opts.filter.toString() : "";
        var queryParams = "";
        var filterViewName = "";
        var selector = "";
        if (opts.selector) {
          selector = JSON.stringify(opts.selector);
        }
        if (opts.filter && opts.query_params) {
          queryParams = JSON.stringify(sortObjectPropertiesByKey(opts.query_params));
        }
        if (opts.filter && opts.filter === "_view") {
          filterViewName = opts.view.toString();
        }
        return Promise.all([
          src.id(),
          target.id()
        ]).then(function (res) {
          var queryData = res[0] + res[1] + filterFun + filterViewName + queryParams + docIds + selector;
          return new Promise(function (resolve) {
            binaryMd5$1(queryData, resolve);
          });
        }).then(function (md5sum) {
          md5sum = md5sum.replace(/\//g, ".").replace(/\+/g, "_");
          return "_local/" + md5sum;
        });
      }
      function replicate(src, target, opts, returnValue, result) {
        var batches = [];
        var currentBatch;
        var pendingBatch = {
          seq: 0,
          changes: [],
          docs: []
        };
        var writingCheckpoint = false;
        var changesCompleted = false;
        var replicationCompleted = false;
        var last_seq = 0;
        var continuous = opts.continuous || opts.live || false;
        var batch_size = opts.batch_size || 100;
        var batches_limit = opts.batches_limit || 10;
        var changesPending = false;
        var doc_ids = opts.doc_ids;
        var selector = opts.selector;
        var repId;
        var checkpointer;
        var changedDocs = [];
        var session = uuid$1();
        result = result || {
          ok: true,
          start_time: new Date().toISOString(),
          docs_read: 0,
          docs_written: 0,
          doc_write_failures: 0,
          errors: []
        };
        var changesOpts = {};
        returnValue.ready(src, target);
        function initCheckpointer() {
          if (checkpointer) {
            return Promise.resolve();
          }
          return generateReplicationId(src, target, opts).then(function (res) {
            repId = res;
            var checkpointOpts = {};
            if (opts.checkpoint === false) {
              checkpointOpts = {
                writeSourceCheckpoint: false,
                writeTargetCheckpoint: false
              };
            } else if (opts.checkpoint === "source") {
              checkpointOpts = {
                writeSourceCheckpoint: true,
                writeTargetCheckpoint: false
              };
            } else if (opts.checkpoint === "target") {
              checkpointOpts = {
                writeSourceCheckpoint: false,
                writeTargetCheckpoint: true
              };
            } else {
              checkpointOpts = {
                writeSourceCheckpoint: true,
                writeTargetCheckpoint: true
              };
            }
            checkpointer = new Checkpointer(src, target, repId, returnValue, checkpointOpts);
          });
        }
        function writeDocs() {
          changedDocs = [];
          if (currentBatch.docs.length === 0) {
            return;
          }
          var docs = currentBatch.docs;
          var bulkOpts = { timeout: opts.timeout };
          return target.bulkDocs({
            docs: docs,
            new_edits: false
          }, bulkOpts).then(function (res) {
            if (returnValue.cancelled) {
              completeReplication();
              throw new Error("cancelled");
            }
            var errorsById = Object.create(null);
            res.forEach(function (res) {
              if (res.error) {
                errorsById[res.id] = res;
              }
            });
            var errorsNo = Object.keys(errorsById).length;
            result.doc_write_failures += errorsNo;
            result.docs_written += docs.length - errorsNo;
            docs.forEach(function (doc) {
              var error = errorsById[doc._id];
              if (error) {
                result.errors.push(error);
                var errorName = (error.name || "").toLowerCase();
                if (errorName === "unauthorized" || errorName === "forbidden") {
                  returnValue.emit("denied", clone$2(error));
                } else {
                  throw error;
                }
              } else {
                changedDocs.push(doc);
              }
            });
          }, function (err) {
            result.doc_write_failures += docs.length;
            throw err;
          });
        }
        function finishBatch() {
          if (currentBatch.error) {
            throw new Error("There was a problem getting docs.");
          }
          result.last_seq = last_seq = currentBatch.seq;
          var outResult = clone$2(result);
          if (changedDocs.length) {
            outResult.docs = changedDocs;
            if (typeof currentBatch.pending === "number") {
              outResult.pending = currentBatch.pending;
              delete currentBatch.pending;
            }
            returnValue.emit("change", outResult);
          }
          writingCheckpoint = true;
          return checkpointer.writeCheckpoint(currentBatch.seq, session).then(function () {
            writingCheckpoint = false;
            if (returnValue.cancelled) {
              completeReplication();
              throw new Error("cancelled");
            }
            currentBatch = undefined;
            getChanges();
          }).catch(function (err) {
            onCheckpointError(err);
            throw err;
          });
        }
        function getDiffs() {
          var diff = {};
          currentBatch.changes.forEach(function (change) {
            if (change.id === "_user/") {
              return;
            }
            diff[change.id] = change.changes.map(function (x) {
              return x.rev;
            });
          });
          return target.revsDiff(diff).then(function (diffs) {
            if (returnValue.cancelled) {
              completeReplication();
              throw new Error("cancelled");
            }
            currentBatch.diffs = diffs;
          });
        }
        function getBatchDocs() {
          return getDocs(src, target, currentBatch.diffs, returnValue).then(function (got) {
            currentBatch.error = !got.ok;
            got.docs.forEach(function (doc) {
              delete currentBatch.diffs[doc._id];
              result.docs_read++;
              currentBatch.docs.push(doc);
            });
          });
        }
        function startNextBatch() {
          if (returnValue.cancelled || currentBatch) {
            return;
          }
          if (batches.length === 0) {
            processPendingBatch(true);
            return;
          }
          currentBatch = batches.shift();
          getDiffs().then(getBatchDocs).then(writeDocs).then(finishBatch).then(startNextBatch).catch(function (err) {
            abortReplication("batch processing terminated with error", err);
          });
        }
        function processPendingBatch(immediate$$1) {
          if (pendingBatch.changes.length === 0) {
            if (batches.length === 0 && !currentBatch) {
              if (continuous && changesOpts.live || changesCompleted) {
                returnValue.state = "pending";
                returnValue.emit("paused");
              }
              if (changesCompleted) {
                completeReplication();
              }
            }
            return;
          }
          if (immediate$$1 || changesCompleted || pendingBatch.changes.length >= batch_size) {
            batches.push(pendingBatch);
            pendingBatch = {
              seq: 0,
              changes: [],
              docs: []
            };
            if (returnValue.state === "pending" || returnValue.state === "stopped") {
              returnValue.state = "active";
              returnValue.emit("active");
            }
            startNextBatch();
          }
        }
        function abortReplication(reason, err) {
          if (replicationCompleted) {
            return;
          }
          if (!err.message) {
            err.message = reason;
          }
          result.ok = false;
          result.status = "aborting";
          batches = [];
          pendingBatch = {
            seq: 0,
            changes: [],
            docs: []
          };
          completeReplication(err);
        }
        function completeReplication(fatalError) {
          if (replicationCompleted) {
            return;
          }
          if (returnValue.cancelled) {
            result.status = "cancelled";
            if (writingCheckpoint) {
              return;
            }
          }
          result.status = result.status || "complete";
          result.end_time = new Date().toISOString();
          result.last_seq = last_seq;
          replicationCompleted = true;
          if (fatalError) {
            fatalError = createError$3(fatalError);
            fatalError.result = result;
            var errorName = (fatalError.name || "").toLowerCase();
            if (errorName === "unauthorized" || errorName === "forbidden") {
              returnValue.emit("error", fatalError);
              returnValue.removeAllListeners();
            } else {
              backOff(opts, returnValue, fatalError, function () {
                replicate(src, target, opts, returnValue);
              });
            }
          } else {
            returnValue.emit("complete", result);
            returnValue.removeAllListeners();
          }
        }
        function onChange(change, pending, lastSeq) {
          if (returnValue.cancelled) {
            return completeReplication();
          }
          if (typeof pending === "number") {
            pendingBatch.pending = pending;
          }
          var filter = filterChange$1(opts)(change);
          if (!filter) {
            return;
          }
          pendingBatch.seq = change.seq || lastSeq;
          pendingBatch.changes.push(change);
          immediate$2(function () {
            processPendingBatch(batches.length === 0 && changesOpts.live);
          });
        }
        function onChangesComplete(changes) {
          changesPending = false;
          if (returnValue.cancelled) {
            return completeReplication();
          }
          if (changes.results.length > 0) {
            changesOpts.since = changes.results[changes.results.length - 1].seq;
            getChanges();
            processPendingBatch(true);
          } else {
            var complete = function () {
              if (continuous) {
                changesOpts.live = true;
                getChanges();
              } else {
                changesCompleted = true;
              }
              processPendingBatch(true);
            };
            if (!currentBatch && changes.results.length === 0) {
              writingCheckpoint = true;
              checkpointer.writeCheckpoint(changes.last_seq, session).then(function () {
                writingCheckpoint = false;
                result.last_seq = last_seq = changes.last_seq;
                complete();
              }).catch(onCheckpointError);
            } else {
              complete();
            }
          }
        }
        function onChangesError(err) {
          changesPending = false;
          if (returnValue.cancelled) {
            return completeReplication();
          }
          abortReplication("changes rejected", err);
        }
        function getChanges() {
          if (!(!changesPending && !changesCompleted && batches.length < batches_limit)) {
            return;
          }
          changesPending = true;
          function abortChanges() {
            changes.cancel();
          }
          function removeListener() {
            returnValue.removeListener("cancel", abortChanges);
          }
          if (returnValue._changes) {
            returnValue.removeListener("cancel", returnValue._abortChanges);
            returnValue._changes.cancel();
          }
          returnValue.once("cancel", abortChanges);
          var changes = src.changes(changesOpts).on("change", onChange);
          changes.then(removeListener, removeListener);
          changes.then(onChangesComplete).catch(onChangesError);
          if (opts.retry) {
            returnValue._changes = changes;
            returnValue._abortChanges = abortChanges;
          }
        }
        function startChanges() {
          initCheckpointer().then(function () {
            if (returnValue.cancelled) {
              completeReplication();
              return;
            }
            return checkpointer.getCheckpoint().then(function (checkpoint) {
              last_seq = checkpoint;
              changesOpts = {
                since: last_seq,
                limit: batch_size,
                batch_size: batch_size,
                style: "all_docs",
                doc_ids: doc_ids,
                selector: selector,
                return_docs: true
              };
              if (opts.filter) {
                if (typeof opts.filter !== "string") {
                  changesOpts.include_docs = true;
                } else {
                  changesOpts.filter = opts.filter;
                }
              }
              if ("heartbeat" in opts) {
                changesOpts.heartbeat = opts.heartbeat;
              }
              if ("timeout" in opts) {
                changesOpts.timeout = opts.timeout;
              }
              if (opts.query_params) {
                changesOpts.query_params = opts.query_params;
              }
              if (opts.view) {
                changesOpts.view = opts.view;
              }
              getChanges();
            });
          }).catch(function (err) {
            abortReplication("getCheckpoint rejected with ", err);
          });
        }
        function onCheckpointError(err) {
          writingCheckpoint = false;
          abortReplication("writeCheckpoint completed with error", err);
        }
        if (returnValue.cancelled) {
          completeReplication();
          return;
        }
        if (!returnValue._addedListeners) {
          returnValue.once("cancel", completeReplication);
          if (typeof opts.complete === "function") {
            returnValue.once("error", opts.complete);
            returnValue.once("complete", function (result) {
              opts.complete(null, result);
            });
          }
          returnValue._addedListeners = true;
        }
        if (typeof opts.since === "undefined") {
          startChanges();
        } else {
          initCheckpointer().then(function () {
            writingCheckpoint = true;
            return checkpointer.writeCheckpoint(opts.since, session);
          }).then(function () {
            writingCheckpoint = false;
            if (returnValue.cancelled) {
              completeReplication();
              return;
            }
            last_seq = opts.since;
            startChanges();
          }).catch(onCheckpointError);
        }
      }
      inherits$8(Replication, events$2.EventEmitter);
      function Replication() {
        events$2.EventEmitter.call(this);
        this.cancelled = false;
        this.state = "pending";
        var self = this;
        var promise = new Promise(function (fulfill, reject) {
          self.once("complete", fulfill);
          self.once("error", reject);
        });
        self.then = function (resolve, reject) {
          return promise.then(resolve, reject);
        };
        self.catch = function (reject) {
          return promise.catch(reject);
        };
        self.catch(function () {
        });
      }
      Replication.prototype.cancel = function () {
        this.cancelled = true;
        this.state = "cancelled";
        this.emit("cancel");
      };
      Replication.prototype.ready = function (src, target) {
        var self = this;
        if (self._readyCalled) {
          return;
        }
        self._readyCalled = true;
        function onDestroy() {
          self.cancel();
        }
        src.once("destroyed", onDestroy);
        target.once("destroyed", onDestroy);
        function cleanup() {
          src.removeListener("destroyed", onDestroy);
          target.removeListener("destroyed", onDestroy);
        }
        self.once("complete", cleanup);
      };
      function toPouch(db, opts) {
        var PouchConstructor = opts.PouchConstructor;
        if (typeof db === "string") {
          return new PouchConstructor(db, opts);
        } else {
          return db;
        }
      }
      function replicateWrapper(src, target, opts, callback) {
        if (typeof opts === "function") {
          callback = opts;
          opts = {};
        }
        if (typeof opts === "undefined") {
          opts = {};
        }
        if (opts.doc_ids && !Array.isArray(opts.doc_ids)) {
          throw createError$3(BAD_REQUEST$1, "`doc_ids` filter parameter is not a list.");
        }
        opts.complete = callback;
        opts = clone$2(opts);
        opts.continuous = opts.continuous || opts.live;
        opts.retry = "retry" in opts ? opts.retry : false;
        opts.PouchConstructor = opts.PouchConstructor || this;
        var replicateRet = new Replication(opts);
        var srcPouch = toPouch(src, opts);
        var targetPouch = toPouch(target, opts);
        replicate(srcPouch, targetPouch, opts, replicateRet);
        return replicateRet;
      }
      inherits$8(Sync, events$2.EventEmitter);
      function sync(src, target, opts, callback) {
        if (typeof opts === "function") {
          callback = opts;
          opts = {};
        }
        if (typeof opts === "undefined") {
          opts = {};
        }
        opts = clone$2(opts);
        opts.PouchConstructor = opts.PouchConstructor || this;
        src = toPouch(src, opts);
        target = toPouch(target, opts);
        return new Sync(src, target, opts, callback);
      }
      function Sync(src, target, opts, callback) {
        var self = this;
        this.canceled = false;
        var optsPush = opts.push ? $inject_Object_assign({}, opts, opts.push) : opts;
        var optsPull = opts.pull ? $inject_Object_assign({}, opts, opts.pull) : opts;
        this.push = replicateWrapper(src, target, optsPush);
        this.pull = replicateWrapper(target, src, optsPull);
        this.pushPaused = true;
        this.pullPaused = true;
        function pullChange(change) {
          self.emit("change", {
            direction: "pull",
            change: change
          });
        }
        function pushChange(change) {
          self.emit("change", {
            direction: "push",
            change: change
          });
        }
        function pushDenied(doc) {
          self.emit("denied", {
            direction: "push",
            doc: doc
          });
        }
        function pullDenied(doc) {
          self.emit("denied", {
            direction: "pull",
            doc: doc
          });
        }
        function pushPaused() {
          self.pushPaused = true;
          if (self.pullPaused) {
            self.emit("paused");
          }
        }
        function pullPaused() {
          self.pullPaused = true;
          if (self.pushPaused) {
            self.emit("paused");
          }
        }
        function pushActive() {
          self.pushPaused = false;
          if (self.pullPaused) {
            self.emit("active", { direction: "push" });
          }
        }
        function pullActive() {
          self.pullPaused = false;
          if (self.pushPaused) {
            self.emit("active", { direction: "pull" });
          }
        }
        var removed = {};
        function removeAll(type) {
          return function (event, func) {
            var isChange = event === "change" && (func === pullChange || func === pushChange);
            var isDenied = event === "denied" && (func === pullDenied || func === pushDenied);
            var isPaused = event === "paused" && (func === pullPaused || func === pushPaused);
            var isActive = event === "active" && (func === pullActive || func === pushActive);
            if (isChange || isDenied || isPaused || isActive) {
              if (!(event in removed)) {
                removed[event] = {};
              }
              removed[event][type] = true;
              if (Object.keys(removed[event]).length === 2) {
                self.removeAllListeners(event);
              }
            }
          };
        }
        if (opts.live) {
          this.push.on("complete", self.pull.cancel.bind(self.pull));
          this.pull.on("complete", self.push.cancel.bind(self.push));
        }
        function addOneListener(ee, event, listener) {
          if (ee.listeners(event).indexOf(listener) == -1) {
            ee.on(event, listener);
          }
        }
        this.on("newListener", function (event) {
          if (event === "change") {
            addOneListener(self.pull, "change", pullChange);
            addOneListener(self.push, "change", pushChange);
          } else if (event === "denied") {
            addOneListener(self.pull, "denied", pullDenied);
            addOneListener(self.push, "denied", pushDenied);
          } else if (event === "active") {
            addOneListener(self.pull, "active", pullActive);
            addOneListener(self.push, "active", pushActive);
          } else if (event === "paused") {
            addOneListener(self.pull, "paused", pullPaused);
            addOneListener(self.push, "paused", pushPaused);
          }
        });
        this.on("removeListener", function (event) {
          if (event === "change") {
            self.pull.removeListener("change", pullChange);
            self.push.removeListener("change", pushChange);
          } else if (event === "denied") {
            self.pull.removeListener("denied", pullDenied);
            self.push.removeListener("denied", pushDenied);
          } else if (event === "active") {
            self.pull.removeListener("active", pullActive);
            self.push.removeListener("active", pushActive);
          } else if (event === "paused") {
            self.pull.removeListener("paused", pullPaused);
            self.push.removeListener("paused", pushPaused);
          }
        });
        this.pull.on("removeListener", removeAll("pull"));
        this.push.on("removeListener", removeAll("push"));
        var promise = Promise.all([
          this.push,
          this.pull
        ]).then(function (resp) {
          var out = {
            push: resp[0],
            pull: resp[1]
          };
          self.emit("complete", out);
          if (callback) {
            callback(null, out);
          }
          self.removeAllListeners();
          return out;
        }, function (err) {
          self.cancel();
          if (callback) {
            callback(err);
          } else {
            self.emit("error", err);
          }
          self.removeAllListeners();
          if (callback) {
            throw err;
          }
        });
        this.then = function (success, err) {
          return promise.then(success, err);
        };
        this.catch = function (err) {
          return promise.catch(err);
        };
      }
      Sync.prototype.cancel = function () {
        if (!this.canceled) {
          this.canceled = true;
          this.push.cancel();
          this.pull.cancel();
        }
      };
      function replication(PouchDB) {
        PouchDB.replicate = replicateWrapper;
        PouchDB.sync = sync;
        Object.defineProperty(PouchDB.prototype, "replicate", {
          get: function () {
            var self = this;
            if (typeof this.replicateMethods === "undefined") {
              this.replicateMethods = {
                from: function (other, opts, callback) {
                  return self.constructor.replicate(other, self, opts, callback);
                },
                to: function (other, opts, callback) {
                  return self.constructor.replicate(self, other, opts, callback);
                }
              };
            }
            return this.replicateMethods;
          }
        });
        PouchDB.prototype.sync = function (dbName, opts, callback) {
          return this.constructor.sync(this, dbName, opts, callback);
        };
      }
      PouchDB.plugin(IDBPouch).plugin(HttpPouch$1).plugin(mapreduce).plugin(replication);
      exports$W = PouchDB;
      var exports$1$r = exports$W;

      var exports$V = {};
      Object.defineProperty(exports$V, "__esModule", { value: true });
      function mangle(key) {
        return "$" + key;
      }
      function unmangle(key) {
        return key.substring(1);
      }
      function Map$1() {
        this._store = {};
      }
      Map$1.prototype.get = function (key) {
        var mangled = mangle(key);
        return this._store[mangled];
      };
      Map$1.prototype.set = function (key, value) {
        var mangled = mangle(key);
        this._store[mangled] = value;
        return true;
      };
      Map$1.prototype.has = function (key) {
        var mangled = mangle(key);
        return mangled in this._store;
      };
      Map$1.prototype.delete = function (key) {
        var mangled = mangle(key);
        var res = mangled in this._store;
        delete this._store[mangled];
        return res;
      };
      Map$1.prototype.forEach = function (cb) {
        var keys = Object.keys(this._store);
        for (var i = 0, len = keys.length; i < len; i++) {
          var key = keys[i];
          var value = this._store[key];
          key = unmangle(key);
          cb(value, key);
        }
      };
      Object.defineProperty(Map$1.prototype, "size", {
        get: function () {
          return Object.keys(this._store).length;
        }
      });
      function Set$1(array) {
        this._store = new Map$1();
        if (array && Array.isArray(array)) {
          for (var i = 0, len = array.length; i < len; i++) {
            this.add(array[i]);
          }
        }
      }
      Set$1.prototype.add = function (key) {
        return this._store.set(key, true);
      };
      Set$1.prototype.has = function (key) {
        return this._store.has(key);
      };
      Set$1.prototype.forEach = function (cb) {
        this._store.forEach(function (value, key) {
          cb(key);
        });
      };
      Object.defineProperty(Set$1.prototype, "size", {
        get: function () {
          return this._store.size;
        }
      });
      function supportsMapAndSet() {
        if (typeof Symbol === "undefined" || typeof Map === "undefined" || typeof Set === "undefined") {
          return false;
        }
        var prop = Object.getOwnPropertyDescriptor(Map, Symbol.species);
        return prop && "get" in prop && Map[Symbol.species] === Map;
      }
      {
        if (supportsMapAndSet()) {
          exports$V.Set = Set;
          exports$V.Map = Map;
        } else {
          exports$V.Set = Set$1;
          exports$V.Map = Map$1;
        }
      }
      exports$V.__esModule;
      exports$V.Set; exports$V.Map;

      var exports$U = {};
      Object.defineProperty(exports$U, "__esModule", { value: true });
      function _interopDefault$6(ex) {
        return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
      }
      var inherits$7 = _interopDefault$6(exports$1$w);
      inherits$7(PouchError, Error);
      function PouchError(status, error, reason) {
        Error.call(this, reason);
        this.status = status;
        this.name = error;
        this.message = reason;
        this.error = true;
      }
      PouchError.prototype.toString = function () {
        return JSON.stringify({
          status: this.status,
          name: this.name,
          message: this.message,
          reason: this.reason
        });
      };
      var UNAUTHORIZED = new PouchError(401, "unauthorized", "Name or password is incorrect.");
      var MISSING_BULK_DOCS = new PouchError(400, "bad_request", "Missing JSON list of 'docs'");
      var MISSING_DOC = new PouchError(404, "not_found", "missing");
      var REV_CONFLICT = new PouchError(409, "conflict", "Document update conflict");
      var INVALID_ID = new PouchError(400, "bad_request", "_id field must contain a string");
      var MISSING_ID = new PouchError(412, "missing_id", "_id is required for puts");
      var RESERVED_ID = new PouchError(400, "bad_request", "Only reserved document ids may start with underscore.");
      var NOT_OPEN = new PouchError(412, "precondition_failed", "Database not open");
      var UNKNOWN_ERROR = new PouchError(500, "unknown_error", "Database encountered an unknown error");
      var BAD_ARG = new PouchError(500, "badarg", "Some query argument is invalid");
      var INVALID_REQUEST = new PouchError(400, "invalid_request", "Request was invalid");
      var QUERY_PARSE_ERROR = new PouchError(400, "query_parse_error", "Some query parameter is invalid");
      var DOC_VALIDATION = new PouchError(500, "doc_validation", "Bad special document member");
      var BAD_REQUEST = new PouchError(400, "bad_request", "Something wrong with the request");
      var NOT_AN_OBJECT = new PouchError(400, "bad_request", "Document must be a JSON object");
      var DB_MISSING = new PouchError(404, "not_found", "Database not found");
      var IDB_ERROR = new PouchError(500, "indexed_db_went_bad", "unknown");
      var WSQ_ERROR = new PouchError(500, "web_sql_went_bad", "unknown");
      var LDB_ERROR = new PouchError(500, "levelDB_went_went_bad", "unknown");
      var FORBIDDEN = new PouchError(403, "forbidden", "Forbidden by design doc validate_doc_update function");
      var INVALID_REV = new PouchError(400, "bad_request", "Invalid rev format");
      var FILE_EXISTS = new PouchError(412, "file_exists", "The database could not be created, the file already exists.");
      var MISSING_STUB = new PouchError(412, "missing_stub", "A pre-existing attachment stub wasn't found");
      var INVALID_URL = new PouchError(413, "invalid_url", "Provided URL is invalid");
      function createError$2(error, reason) {
        function CustomPouchError(reason) {
          for (var p in error) {
            if (typeof error[p] !== "function") {
              this[p] = error[p];
            }
          }
          if (reason !== undefined) {
            this.reason = reason;
          }
        }
        CustomPouchError.prototype = PouchError.prototype;
        return new CustomPouchError(reason);
      }
      function generateErrorFromResponse(err) {
        if (typeof err !== "object") {
          var data = err;
          err = UNKNOWN_ERROR;
          err.data = data;
        }
        if ("error" in err && err.error === "conflict") {
          err.name = "conflict";
          err.status = 409;
        }
        if (!("name" in err)) {
          err.name = err.error || "unknown";
        }
        if (!("status" in err)) {
          err.status = 500;
        }
        if (!("message" in err)) {
          err.message = err.message || err.reason;
        }
        return err;
      }
      exports$U.UNAUTHORIZED = UNAUTHORIZED;
      exports$U.MISSING_BULK_DOCS = MISSING_BULK_DOCS;
      exports$U.MISSING_DOC = MISSING_DOC;
      exports$U.REV_CONFLICT = REV_CONFLICT;
      exports$U.INVALID_ID = INVALID_ID;
      exports$U.MISSING_ID = MISSING_ID;
      exports$U.RESERVED_ID = RESERVED_ID;
      exports$U.NOT_OPEN = NOT_OPEN;
      exports$U.UNKNOWN_ERROR = UNKNOWN_ERROR;
      exports$U.BAD_ARG = BAD_ARG;
      exports$U.INVALID_REQUEST = INVALID_REQUEST;
      exports$U.QUERY_PARSE_ERROR = QUERY_PARSE_ERROR;
      exports$U.DOC_VALIDATION = DOC_VALIDATION;
      exports$U.BAD_REQUEST = BAD_REQUEST;
      exports$U.NOT_AN_OBJECT = NOT_AN_OBJECT;
      exports$U.DB_MISSING = DB_MISSING;
      exports$U.WSQ_ERROR = WSQ_ERROR;
      exports$U.LDB_ERROR = LDB_ERROR;
      exports$U.FORBIDDEN = FORBIDDEN;
      exports$U.INVALID_REV = INVALID_REV;
      exports$U.FILE_EXISTS = FILE_EXISTS;
      exports$U.MISSING_STUB = MISSING_STUB;
      exports$U.IDB_ERROR = IDB_ERROR;
      exports$U.INVALID_URL = INVALID_URL;
      exports$U.createError = createError$2;
      exports$U.generateErrorFromResponse = generateErrorFromResponse;
      exports$U.__esModule;
      exports$U.UNAUTHORIZED; exports$U.MISSING_BULK_DOCS; exports$U.MISSING_DOC; exports$U.REV_CONFLICT; exports$U.INVALID_ID; exports$U.MISSING_ID; exports$U.RESERVED_ID; exports$U.NOT_OPEN; exports$U.UNKNOWN_ERROR; exports$U.BAD_ARG; exports$U.INVALID_REQUEST; exports$U.QUERY_PARSE_ERROR; exports$U.DOC_VALIDATION; exports$U.BAD_REQUEST; exports$U.NOT_AN_OBJECT; exports$U.DB_MISSING; exports$U.WSQ_ERROR; exports$U.LDB_ERROR; exports$U.FORBIDDEN; exports$U.INVALID_REV; exports$U.FILE_EXISTS; exports$U.MISSING_STUB; exports$U.IDB_ERROR; exports$U.INVALID_URL; exports$U.createError; exports$U.generateErrorFromResponse;

      var exports$T = {};
      Object.defineProperty(exports$T, "__esModule", { value: true });
      var thisAtob = function (str) {
        return atob$1(str);
      };
      var thisBtoa = function (str) {
        return btoa$1(str);
      };
      function createBlob(parts, properties) {
        parts = parts || [];
        properties = properties || {};
        try {
          return new Blob(parts, properties);
        } catch (e) {
          if (e.name !== "TypeError") {
            throw e;
          }
          var Builder = typeof BlobBuilder !== "undefined" ? BlobBuilder : typeof MSBlobBuilder !== "undefined" ? MSBlobBuilder : typeof MozBlobBuilder !== "undefined" ? MozBlobBuilder : WebKitBlobBuilder;
          var builder = new Builder();
          for (var i = 0; i < parts.length; i += 1) {
            builder.append(parts[i]);
          }
          return builder.getBlob(properties.type);
        }
      }
      function binaryStringToArrayBuffer(bin) {
        var length = bin.length;
        var buf = new ArrayBuffer(length);
        var arr = new Uint8Array(buf);
        for (var i = 0; i < length; i++) {
          arr[i] = bin.charCodeAt(i);
        }
        return buf;
      }
      function binStringToBluffer(binString, type) {
        return createBlob([binaryStringToArrayBuffer(binString)], { type: type });
      }
      function b64ToBluffer(b64, type) {
        return binStringToBluffer(thisAtob(b64), type);
      }
      function arrayBufferToBinaryString(buffer) {
        var binary = "";
        var bytes = new Uint8Array(buffer);
        var length = bytes.byteLength;
        for (var i = 0; i < length; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        return binary;
      }
      function readAsBinaryString(blob, callback) {
        var reader = new FileReader();
        var hasBinaryString = typeof reader.readAsBinaryString === "function";
        reader.onloadend = function (e) {
          var result = e.target.result || "";
          if (hasBinaryString) {
            return callback(result);
          }
          callback(arrayBufferToBinaryString(result));
        };
        if (hasBinaryString) {
          reader.readAsBinaryString(blob);
        } else {
          reader.readAsArrayBuffer(blob);
        }
      }
      function blobToBinaryString(blobOrBuffer, callback) {
        readAsBinaryString(blobOrBuffer, function (bin) {
          callback(bin);
        });
      }
      function blobToBase64(blobOrBuffer, callback) {
        blobToBinaryString(blobOrBuffer, function (base64) {
          callback(thisBtoa(base64));
        });
      }
      function readAsArrayBuffer(blob, callback) {
        var reader = new FileReader();
        reader.onloadend = function (e) {
          var result = e.target.result || new ArrayBuffer(0);
          callback(result);
        };
        reader.readAsArrayBuffer(blob);
      }
      function typedBuffer() {
      }
      exports$T.atob = thisAtob;
      exports$T.btoa = thisBtoa;
      exports$T.base64StringToBlobOrBuffer = b64ToBluffer;
      exports$T.binaryStringToArrayBuffer = binaryStringToArrayBuffer;
      exports$T.binaryStringToBlobOrBuffer = binStringToBluffer;
      exports$T.blob = createBlob;
      exports$T.blobOrBufferToBase64 = blobToBase64;
      exports$T.blobOrBufferToBinaryString = blobToBinaryString;
      exports$T.readAsArrayBuffer = readAsArrayBuffer;
      exports$T.readAsBinaryString = readAsBinaryString;
      exports$T.typedBuffer = typedBuffer;
      exports$T.__esModule; const atob$1 = exports$T.atob, btoa$1 = exports$T.btoa; exports$T.base64StringToBlobOrBuffer; exports$T.binaryStringToBlobOrBuffer; exports$T.blob; exports$T.blobOrBufferToBase64; exports$T.blobOrBufferToBinaryString;
      exports$T.binaryStringToArrayBuffer; exports$T.readAsArrayBuffer; exports$T.readAsBinaryString; exports$T.typedBuffer;

      var _global$o = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
      var exports$S = {};
      Object.defineProperty(exports$S, "__esModule", { value: true });
      function _interopDefault$5(ex) {
        return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
      }
      var pouchdbBinaryUtils$2 = exports$T;
      var Md5 = _interopDefault$5(exports$1$t);
      var setImmediateShim = _global$o.setImmediate || _global$o.setTimeout;
      var MD5_CHUNK_SIZE = 32768;
      function rawToBase64(raw) {
        return pouchdbBinaryUtils$2.btoa(raw);
      }
      function sliceBlob(blob, start, end) {
        if (blob.webkitSlice) {
          return blob.webkitSlice(start, end);
        }
        return blob.slice(start, end);
      }
      function appendBlob(buffer, blob, start, end, callback) {
        if (start > 0 || end < blob.size) {
          blob = sliceBlob(blob, start, end);
        }
        pouchdbBinaryUtils$2.readAsArrayBuffer(blob, function (arrayBuffer) {
          buffer.append(arrayBuffer);
          callback();
        });
      }
      function appendString(buffer, string, start, end, callback) {
        if (start > 0 || end < string.length) {
          string = string.substring(start, end);
        }
        buffer.appendBinary(string);
        callback();
      }
      function binaryMd5(data, callback) {
        var inputIsString = typeof data === "string";
        var len = inputIsString ? data.length : data.size;
        var chunkSize = Math.min(MD5_CHUNK_SIZE, len);
        var chunks = Math.ceil(len / chunkSize);
        var currentChunk = 0;
        var buffer = inputIsString ? new Md5() : new Md5.ArrayBuffer();
        var append = inputIsString ? appendString : appendBlob;
        function next() {
          setImmediateShim(loadNextChunk);
        }
        function done() {
          var raw = buffer.end(true);
          var base64 = rawToBase64(raw);
          callback(base64);
          buffer.destroy();
        }
        function loadNextChunk() {
          var start = currentChunk * chunkSize;
          var end = start + chunkSize;
          currentChunk++;
          if (currentChunk < chunks) {
            append(buffer, data, start, end, next);
          } else {
            append(buffer, data, start, end, done);
          }
        }
        loadNextChunk();
      }
      function stringMd5(string) {
        return Md5.hash(string);
      }
      exports$S.binaryMd5 = binaryMd5;
      exports$S.stringMd5 = stringMd5;
      exports$S.__esModule;
      exports$S.binaryMd5; exports$S.stringMd5;

      var exports$R = {};
      Object.defineProperty(exports$R, "__esModule", { value: true });
      function _interopDefault$4(ex) {
        return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
      }
      var getArguments$1 = _interopDefault$4(exports$1$s);
      var pouchdbCollections$2 = exports$V;
      var inherits$6 = _interopDefault$4(exports$1$w);
      var immediate$1 = _interopDefault$4(exports$1$v);
      var pouchdbErrors$2 = exports$U;
      var events$1 = y;
      var uuidV4 = _interopDefault$4(exports$1$u);
      var pouchdbMd5$2 = exports$S;
      function isBinaryObject(object) {
        return typeof ArrayBuffer !== "undefined" && object instanceof ArrayBuffer || typeof Blob !== "undefined" && object instanceof Blob;
      }
      function cloneArrayBuffer(buff) {
        if (typeof buff.slice === "function") {
          return buff.slice(0);
        }
        var target = new ArrayBuffer(buff.byteLength);
        var targetArray = new Uint8Array(target);
        var sourceArray = new Uint8Array(buff);
        targetArray.set(sourceArray);
        return target;
      }
      function cloneBinaryObject(object) {
        if (object instanceof ArrayBuffer) {
          return cloneArrayBuffer(object);
        }
        var size = object.size;
        var type = object.type;
        if (typeof object.slice === "function") {
          return object.slice(0, size, type);
        }
        return object.webkitSlice(0, size, type);
      }
      var funcToString = Function.prototype.toString;
      var objectCtorString = funcToString.call(Object);
      function isPlainObject(value) {
        var proto = Object.getPrototypeOf(value);
        if (proto === null) {
          return true;
        }
        var Ctor = proto.constructor;
        return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
      }
      function clone$1(object) {
        var newObject;
        var i;
        var len;
        if (!object || typeof object !== "object") {
          return object;
        }
        if (Array.isArray(object)) {
          newObject = [];
          for (i = 0, len = object.length; i < len; i++) {
            newObject[i] = clone$1(object[i]);
          }
          return newObject;
        }
        if (object instanceof Date) {
          return object.toISOString();
        }
        if (isBinaryObject(object)) {
          return cloneBinaryObject(object);
        }
        if (!isPlainObject(object)) {
          return object;
        }
        newObject = {};
        for (i in object) {
          if (Object.prototype.hasOwnProperty.call(object, i)) {
            var value = clone$1(object[i]);
            if (typeof value !== "undefined") {
              newObject[i] = value;
            }
          }
        }
        return newObject;
      }
      function once(fun) {
        var called = false;
        return getArguments$1(function (args) {
          if (called) {
            throw new Error("once called more than once");
          } else {
            called = true;
            fun.apply(this, args);
          }
        });
      }
      function toPromise(func) {
        return getArguments$1(function (args) {
          args = clone$1(args);
          var self = this;
          var usedCB = typeof args[args.length - 1] === "function" ? args.pop() : false;
          var promise = new Promise(function (fulfill, reject) {
            var resp;
            try {
              var callback = once(function (err, mesg) {
                if (err) {
                  reject(err);
                } else {
                  fulfill(mesg);
                }
              });
              args.push(callback);
              resp = func.apply(self, args);
              if (resp && typeof resp.then === "function") {
                fulfill(resp);
              }
            } catch (e) {
              reject(e);
            }
          });
          if (usedCB) {
            promise.then(function (result) {
              usedCB(null, result);
            }, usedCB);
          }
          return promise;
        });
      }
      function logApiCall(self, name, args) {
        if (self.constructor.listeners("debug").length) {
          var logArgs = [
            "api",
            self.name,
            name
          ];
          for (var i = 0; i < args.length - 1; i++) {
            logArgs.push(args[i]);
          }
          self.constructor.emit("debug", logArgs);
          var origCallback = args[args.length - 1];
          args[args.length - 1] = function (err, res) {
            var responseArgs = [
              "api",
              self.name,
              name
            ];
            responseArgs = responseArgs.concat(err ? [
              "error",
              err
            ] : [
              "success",
              res
            ]);
            self.constructor.emit("debug", responseArgs);
            origCallback(err, res);
          };
        }
      }
      function adapterFun(name, callback) {
        return toPromise(getArguments$1(function (args) {
          if (this._closed) {
            return Promise.reject(new Error("database is closed"));
          }
          if (this._destroyed) {
            return Promise.reject(new Error("database is destroyed"));
          }
          var self = this;
          logApiCall(self, name, args);
          if (!this.taskqueue.isReady) {
            return new Promise(function (fulfill, reject) {
              self.taskqueue.addTask(function (failed) {
                if (failed) {
                  reject(failed);
                } else {
                  fulfill(self[name].apply(self, args));
                }
              });
            });
          }
          return callback.apply(this, args);
        }));
      }
      function pick(obj, arr) {
        var res = {};
        for (var i = 0, len = arr.length; i < len; i++) {
          var prop = arr[i];
          if (prop in obj) {
            res[prop] = obj[prop];
          }
        }
        return res;
      }
      var MAX_NUM_CONCURRENT_REQUESTS = 6;
      function identityFunction(x) {
        return x;
      }
      function formatResultForOpenRevsGet(result) {
        return [{ ok: result }];
      }
      function bulkGet(db, opts, callback) {
        var requests = opts.docs;
        var requestsById = new pouchdbCollections$2.Map();
        requests.forEach(function (request) {
          if (requestsById.has(request.id)) {
            requestsById.get(request.id).push(request);
          } else {
            requestsById.set(request.id, [request]);
          }
        });
        var numDocs = requestsById.size;
        var numDone = 0;
        var perDocResults = new Array(numDocs);
        function collapseResultsAndFinish() {
          var results = [];
          perDocResults.forEach(function (res) {
            res.docs.forEach(function (info) {
              results.push({
                id: res.id,
                docs: [info]
              });
            });
          });
          callback(null, { results: results });
        }
        function checkDone() {
          if (++numDone === numDocs) {
            collapseResultsAndFinish();
          }
        }
        function gotResult(docIndex, id, docs) {
          perDocResults[docIndex] = {
            id: id,
            docs: docs
          };
          checkDone();
        }
        var allRequests = [];
        requestsById.forEach(function (value, key) {
          allRequests.push(key);
        });
        var i = 0;
        function nextBatch() {
          if (i >= allRequests.length) {
            return;
          }
          var upTo = Math.min(i + MAX_NUM_CONCURRENT_REQUESTS, allRequests.length);
          var batch = allRequests.slice(i, upTo);
          processBatch(batch, i);
          i += batch.length;
        }
        function processBatch(batch, offset) {
          batch.forEach(function (docId, j) {
            var docIdx = offset + j;
            var docRequests = requestsById.get(docId);
            var docOpts = pick(docRequests[0], [
              "atts_since",
              "attachments"
            ]);
            docOpts.open_revs = docRequests.map(function (request) {
              return request.rev;
            });
            docOpts.open_revs = docOpts.open_revs.filter(identityFunction);
            var formatResult = identityFunction;
            if (docOpts.open_revs.length === 0) {
              delete docOpts.open_revs;
              formatResult = formatResultForOpenRevsGet;
            }
            [
              "revs",
              "attachments",
              "binary",
              "ajax",
              "latest"
            ].forEach(function (param) {
              if (param in opts) {
                docOpts[param] = opts[param];
              }
            });
            db.get(docId, docOpts, function (err, res) {
              var result;
              if (err) {
                result = [{ error: err }];
              } else {
                result = formatResult(res);
              }
              gotResult(docIdx, docId, result);
              nextBatch();
            });
          });
        }
        nextBatch();
      }
      var hasLocal;
      try {
        localStorage.setItem("_pouch_check_localstorage", 1);
        hasLocal = !!localStorage.getItem("_pouch_check_localstorage");
      } catch (e) {
        hasLocal = false;
      }
      function hasLocalStorage() {
        return hasLocal;
      }
      inherits$6(Changes, events$1.EventEmitter);
      function attachBrowserEvents(self) {
        if (hasLocalStorage()) {
          addEventListener("storage", function (e) {
            self.emit(e.key);
          });
        }
      }
      function Changes() {
        events$1.EventEmitter.call(this);
        this._listeners = {};
        attachBrowserEvents(this);
      }
      Changes.prototype.addListener = function (dbName, id, db, opts) {
        if (this._listeners[id]) {
          return;
        }
        var self = this;
        var inprogress = false;
        function eventFunction() {
          if (!self._listeners[id]) {
            return;
          }
          if (inprogress) {
            inprogress = "waiting";
            return;
          }
          inprogress = true;
          var changesOpts = pick(opts, [
            "style",
            "include_docs",
            "attachments",
            "conflicts",
            "filter",
            "doc_ids",
            "view",
            "since",
            "query_params",
            "binary",
            "return_docs"
          ]);
          function onError() {
            inprogress = false;
          }
          db.changes(changesOpts).on("change", function (c) {
            if (c.seq > opts.since && !opts.cancelled) {
              opts.since = c.seq;
              opts.onChange(c);
            }
          }).on("complete", function () {
            if (inprogress === "waiting") {
              immediate$1(eventFunction);
            }
            inprogress = false;
          }).on("error", onError);
        }
        this._listeners[id] = eventFunction;
        this.on(dbName, eventFunction);
      };
      Changes.prototype.removeListener = function (dbName, id) {
        if (!(id in this._listeners)) {
          return;
        }
        events$1.EventEmitter.prototype.removeListener.call(this, dbName, this._listeners[id]);
        delete this._listeners[id];
      };
      Changes.prototype.notifyLocalWindows = function (dbName) {
        if (hasLocalStorage()) {
          localStorage[dbName] = localStorage[dbName] === "a" ? "b" : "a";
        }
      };
      Changes.prototype.notify = function (dbName) {
        this.emit(dbName);
        this.notifyLocalWindows(dbName);
      };
      function guardedConsole(method) {
        if (typeof console !== "undefined" && typeof console[method] === "function") {
          var args = Array.prototype.slice.call(arguments, 1);
          console[method].apply(console, args);
        }
      }
      function randomNumber(min, max) {
        var maxTimeout = 600000;
        min = parseInt(min, 10) || 0;
        max = parseInt(max, 10);
        if (max !== max || max <= min) {
          max = (min || 1) << 1;
        } else {
          max = max + 1;
        }
        if (max > maxTimeout) {
          min = maxTimeout >> 1;
          max = maxTimeout;
        }
        var ratio = Math.random();
        var range = max - min;
        return ~~(range * ratio + min);
      }
      function defaultBackOff(min) {
        var max = 0;
        if (!min) {
          max = 2000;
        }
        return randomNumber(min, max);
      }
      function explainError(status, str) {
        guardedConsole("info", "The above " + status + " is totally normal. " + str);
      }
      var assign;
      {
        if (typeof Object.assign === "function") {
          assign = Object.assign;
        } else {
          assign = function (target) {
            var to = Object(target);
            for (var index = 1; index < arguments.length; index++) {
              var nextSource = arguments[index];
              if (nextSource != null) {
                for (var nextKey in nextSource) {
                  if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                    to[nextKey] = nextSource[nextKey];
                  }
                }
              }
            }
            return to;
          };
        }
      }
      var assign$1 = assign;
      function tryFilter(filter, doc, req) {
        try {
          return !filter(doc, req);
        } catch (err) {
          var msg = "Filter function threw: " + err.toString();
          return pouchdbErrors$2.createError(pouchdbErrors$2.BAD_REQUEST, msg);
        }
      }
      function filterChange(opts) {
        var req = {};
        var hasFilter = opts.filter && typeof opts.filter === "function";
        req.query = opts.query_params;
        return function filter(change) {
          if (!change.doc) {
            change.doc = {};
          }
          var filterReturn = hasFilter && tryFilter(opts.filter, change.doc, req);
          if (typeof filterReturn === "object") {
            return filterReturn;
          }
          if (filterReturn) {
            return false;
          }
          if (!opts.include_docs) {
            delete change.doc;
          } else if (!opts.attachments) {
            for (var att in change.doc._attachments) {
              if (change.doc._attachments.hasOwnProperty(att)) {
                change.doc._attachments[att].stub = true;
              }
            }
          }
          return true;
        };
      }
      function flatten(arrs) {
        var res = [];
        for (var i = 0, len = arrs.length; i < len; i++) {
          res = res.concat(arrs[i]);
        }
        return res;
      }
      function f() {
      }
      var hasName = f.name;
      var res;
      if (hasName) {
        res = function (fun) {
          return fun.name;
        };
      } else {
        res = function (fun) {
          var match = fun.toString().match(/^\s*function\s*(?:(\S+)\s*)?\(/);
          if (match && match[1]) {
            return match[1];
          } else {
            return "";
          }
        };
      }
      var res$1 = res;
      function invalidIdError(id) {
        var err;
        if (!id) {
          err = pouchdbErrors$2.createError(pouchdbErrors$2.MISSING_ID);
        } else if (typeof id !== "string") {
          err = pouchdbErrors$2.createError(pouchdbErrors$2.INVALID_ID);
        } else if (/^_/.test(id) && !/^_(design|local)/.test(id)) {
          err = pouchdbErrors$2.createError(pouchdbErrors$2.RESERVED_ID);
        }
        if (err) {
          throw err;
        }
      }
      function isRemote(db) {
        if (typeof db._remote === "boolean") {
          return db._remote;
        }
        if (typeof db.type === "function") {
          guardedConsole("warn", "db.type() is deprecated and will be removed in " + "a future version of PouchDB");
          return db.type() === "http";
        }
        return false;
      }
      function listenerCount(ee, type) {
        return "listenerCount" in ee ? ee.listenerCount(type) : events$1.EventEmitter.listenerCount(ee, type);
      }
      function parseDesignDocFunctionName(s) {
        if (!s) {
          return null;
        }
        var parts = s.split("/");
        if (parts.length === 2) {
          return parts;
        }
        if (parts.length === 1) {
          return [
            s,
            s
          ];
        }
        return null;
      }
      function normalizeDesignDocFunctionName(s) {
        var normalized = parseDesignDocFunctionName(s);
        return normalized ? normalized.join("/") : null;
      }
      var keys = [
        "source",
        "protocol",
        "authority",
        "userInfo",
        "user",
        "password",
        "host",
        "port",
        "relative",
        "path",
        "directory",
        "file",
        "query",
        "anchor"
      ];
      var qName = "queryKey";
      var qParser = /(?:^|&)([^&=]*)=?([^&]*)/g;
      var parser = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
      function parseUri(str) {
        var m = parser.exec(str);
        var uri = {};
        var i = 14;
        while (i--) {
          var key = keys[i];
          var value = m[i] || "";
          var encoded = [
            "user",
            "password"
          ].indexOf(key) !== -1;
          uri[key] = encoded ? decodeURIComponent(value) : value;
        }
        uri[qName] = {};
        uri[keys[12]].replace(qParser, function ($0, $1, $2) {
          if ($1) {
            uri[qName][$1] = $2;
          }
        });
        return uri;
      }
      function scopeEval(source, scope) {
        var keys = [];
        var values = [];
        for (var key in scope) {
          if (scope.hasOwnProperty(key)) {
            keys.push(key);
            values.push(scope[key]);
          }
        }
        keys.push(source);
        return Function.apply(null, keys).apply(null, values);
      }
      function upsert(db, docId, diffFun) {
        return new Promise(function (fulfill, reject) {
          db.get(docId, function (err, doc) {
            if (err) {
              if (err.status !== 404) {
                return reject(err);
              }
              doc = {};
            }
            var docRev = doc._rev;
            var newDoc = diffFun(doc);
            if (!newDoc) {
              return fulfill({
                updated: false,
                rev: docRev
              });
            }
            newDoc._id = docId;
            newDoc._rev = docRev;
            fulfill(tryAndPut(db, newDoc, diffFun));
          });
        });
      }
      function tryAndPut(db, doc, diffFun) {
        return db.put(doc).then(function (res) {
          return {
            updated: true,
            rev: res.rev
          };
        }, function (err) {
          if (err.status !== 409) {
            throw err;
          }
          return upsert(db, doc._id, diffFun);
        });
      }
      function rev(doc, deterministic_revs) {
        var clonedDoc = clone$1(doc);
        if (!deterministic_revs) {
          return uuidV4.v4().replace(/-/g, "").toLowerCase();
        }
        delete clonedDoc._rev_tree;
        return pouchdbMd5$2.stringMd5(JSON.stringify(clonedDoc));
      }
      var uuid = uuidV4.v4;
      exports$R.adapterFun = adapterFun;
      exports$R.assign = assign$1;
      exports$R.bulkGetShim = bulkGet;
      exports$R.changesHandler = Changes;
      exports$R.clone = clone$1;
      exports$R.defaultBackOff = defaultBackOff;
      exports$R.explainError = explainError;
      exports$R.filterChange = filterChange;
      exports$R.flatten = flatten;
      exports$R.functionName = res$1;
      exports$R.guardedConsole = guardedConsole;
      exports$R.hasLocalStorage = hasLocalStorage;
      exports$R.invalidIdError = invalidIdError;
      exports$R.isRemote = isRemote;
      exports$R.listenerCount = listenerCount;
      exports$R.nextTick = immediate$1;
      exports$R.normalizeDdocFunctionName = normalizeDesignDocFunctionName;
      exports$R.once = once;
      exports$R.parseDdocFunctionName = parseDesignDocFunctionName;
      exports$R.parseUri = parseUri;
      exports$R.pick = pick;
      exports$R.rev = rev;
      exports$R.scopeEval = scopeEval;
      exports$R.toPromise = toPromise;
      exports$R.upsert = upsert;
      exports$R.uuid = uuid;
      exports$R.__esModule; exports$R.bulkGetShim; exports$R.changesHandler; exports$R.functionName; exports$R.nextTick; exports$R.normalizeDdocFunctionName; exports$R.parseDdocFunctionName;
      exports$R.adapterFun; exports$R.assign; exports$R.clone; exports$R.defaultBackOff; exports$R.explainError; exports$R.filterChange; exports$R.flatten; exports$R.guardedConsole; exports$R.hasLocalStorage; exports$R.invalidIdError; exports$R.isRemote; exports$R.listenerCount; exports$R.once; exports$R.parseUri; exports$R.pick; exports$R.rev; exports$R.scopeEval; exports$R.toPromise; exports$R.upsert; exports$R.uuid;

      var exports$Q = {};
      exports$Q = extend$2;
      var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
      function extend$2() {
        var target = {};
        for (var i = 0; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (hasOwnProperty$1.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      }
      var exports$1$q = exports$Q;

      var _global$n = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
      var exports$P = {};
      var process$8 = process$a;
      function AbstractIterator$5(db) {
        if (typeof db !== "object" || db === null) {
          throw new TypeError("First argument must be an abstract-leveldown compliant store");
        }
        (this || _global$n).db = db;
        (this || _global$n)._ended = false;
        (this || _global$n)._nexting = false;
      }
      AbstractIterator$5.prototype.next = function (callback) {
        var self = this || _global$n;
        if (typeof callback !== "function") {
          throw new Error("next() requires a callback argument");
        }
        if (self._ended) {
          process$8.nextTick(callback, new Error("cannot call next() after end()"));
          return self;
        }
        if (self._nexting) {
          process$8.nextTick(callback, new Error("cannot call next() before previous next() has completed"));
          return self;
        }
        self._nexting = true;
        self._next(function () {
          self._nexting = false;
          callback.apply(null, arguments);
        });
        return self;
      };
      AbstractIterator$5.prototype._next = function (callback) {
        process$8.nextTick(callback);
      };
      AbstractIterator$5.prototype.seek = function (target) {
        if ((this || _global$n)._ended) {
          throw new Error("cannot call seek() after end()");
        }
        if ((this || _global$n)._nexting) {
          throw new Error("cannot call seek() before next() has completed");
        }
        target = (this || _global$n).db._serializeKey(target);
        this._seek(target);
      };
      AbstractIterator$5.prototype._seek = function (target) {
      };
      AbstractIterator$5.prototype.end = function (callback) {
        if (typeof callback !== "function") {
          throw new Error("end() requires a callback argument");
        }
        if ((this || _global$n)._ended) {
          return process$8.nextTick(callback, new Error("end() already called on iterator"));
        }
        (this || _global$n)._ended = true;
        this._end(callback);
      };
      AbstractIterator$5.prototype._end = function (callback) {
        process$8.nextTick(callback);
      };
      exports$P = AbstractIterator$5;
      var _abstractIterator$1 = exports$P;

      var _global$m = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
      var exports$O = {};
      function AbstractChainedBatch$3(db) {
        if (typeof db !== "object" || db === null) {
          throw new TypeError("First argument must be an abstract-leveldown compliant store");
        }
        (this || _global$m).db = db;
        (this || _global$m)._operations = [];
        (this || _global$m)._written = false;
      }
      AbstractChainedBatch$3.prototype._checkWritten = function () {
        if ((this || _global$m)._written) {
          throw new Error("write() already called on this batch");
        }
      };
      AbstractChainedBatch$3.prototype.put = function (key, value) {
        this._checkWritten();
        var err = (this || _global$m).db._checkKey(key) || (this || _global$m).db._checkValue(value);
        if (err)
          throw err;
        key = (this || _global$m).db._serializeKey(key);
        value = (this || _global$m).db._serializeValue(value);
        this._put(key, value);
        return this || _global$m;
      };
      AbstractChainedBatch$3.prototype._put = function (key, value) {
        (this || _global$m)._operations.push({
          type: "put",
          key: key,
          value: value
        });
      };
      AbstractChainedBatch$3.prototype.del = function (key) {
        this._checkWritten();
        var err = (this || _global$m).db._checkKey(key);
        if (err)
          throw err;
        key = (this || _global$m).db._serializeKey(key);
        this._del(key);
        return this || _global$m;
      };
      AbstractChainedBatch$3.prototype._del = function (key) {
        (this || _global$m)._operations.push({
          type: "del",
          key: key
        });
      };
      AbstractChainedBatch$3.prototype.clear = function () {
        this._checkWritten();
        this._clear();
        return this || _global$m;
      };
      AbstractChainedBatch$3.prototype._clear = function () {
        (this || _global$m)._operations = [];
      };
      AbstractChainedBatch$3.prototype.write = function (options, callback) {
        this._checkWritten();
        if (typeof options === "function") {
          callback = options;
        }
        if (typeof callback !== "function") {
          throw new Error("write() requires a callback argument");
        }
        if (typeof options !== "object" || options === null) {
          options = {};
        }
        (this || _global$m)._written = true;
        this._write(options, callback);
      };
      AbstractChainedBatch$3.prototype._write = function (options, callback) {
        (this || _global$m).db._batch((this || _global$m)._operations, options, callback);
      };
      exports$O = AbstractChainedBatch$3;
      var _abstractChainedBatch$1 = exports$O;

      var _global$l = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
      var exports$N = {};
      var Buffer$9 = exports$14.Buffer;
      var process$7 = process$a;
      var xtend$1 = exports$1$q;
      var AbstractIterator$4 = _abstractIterator$1;
      var AbstractChainedBatch$2 = _abstractChainedBatch$1;
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var rangeOptions = "start end gt gte lt lte".split(" ");
      function AbstractLevelDOWN$4() {
        (this || _global$l).status = "new";
      }
      AbstractLevelDOWN$4.prototype.open = function (options, callback) {
        var self = this || _global$l;
        var oldStatus = (this || _global$l).status;
        if (typeof options === "function")
          callback = options;
        if (typeof callback !== "function") {
          throw new Error("open() requires a callback argument");
        }
        if (typeof options !== "object" || options === null)
          options = {};
        options.createIfMissing = options.createIfMissing !== false;
        options.errorIfExists = !!options.errorIfExists;
        (this || _global$l).status = "opening";
        this._open(options, function (err) {
          if (err) {
            self.status = oldStatus;
            return callback(err);
          }
          self.status = "open";
          callback();
        });
      };
      AbstractLevelDOWN$4.prototype._open = function (options, callback) {
        process$7.nextTick(callback);
      };
      AbstractLevelDOWN$4.prototype.close = function (callback) {
        var self = this || _global$l;
        var oldStatus = (this || _global$l).status;
        if (typeof callback !== "function") {
          throw new Error("close() requires a callback argument");
        }
        (this || _global$l).status = "closing";
        this._close(function (err) {
          if (err) {
            self.status = oldStatus;
            return callback(err);
          }
          self.status = "closed";
          callback();
        });
      };
      AbstractLevelDOWN$4.prototype._close = function (callback) {
        process$7.nextTick(callback);
      };
      AbstractLevelDOWN$4.prototype.get = function (key, options, callback) {
        if (typeof options === "function")
          callback = options;
        if (typeof callback !== "function") {
          throw new Error("get() requires a callback argument");
        }
        var err = this._checkKey(key);
        if (err)
          return process$7.nextTick(callback, err);
        key = this._serializeKey(key);
        if (typeof options !== "object" || options === null)
          options = {};
        options.asBuffer = options.asBuffer !== false;
        this._get(key, options, callback);
      };
      AbstractLevelDOWN$4.prototype._get = function (key, options, callback) {
        process$7.nextTick(function () {
          callback(new Error("NotFound"));
        });
      };
      AbstractLevelDOWN$4.prototype.put = function (key, value, options, callback) {
        if (typeof options === "function")
          callback = options;
        if (typeof callback !== "function") {
          throw new Error("put() requires a callback argument");
        }
        var err = this._checkKey(key) || this._checkValue(value);
        if (err)
          return process$7.nextTick(callback, err);
        key = this._serializeKey(key);
        value = this._serializeValue(value);
        if (typeof options !== "object" || options === null)
          options = {};
        this._put(key, value, options, callback);
      };
      AbstractLevelDOWN$4.prototype._put = function (key, value, options, callback) {
        process$7.nextTick(callback);
      };
      AbstractLevelDOWN$4.prototype.del = function (key, options, callback) {
        if (typeof options === "function")
          callback = options;
        if (typeof callback !== "function") {
          throw new Error("del() requires a callback argument");
        }
        var err = this._checkKey(key);
        if (err)
          return process$7.nextTick(callback, err);
        key = this._serializeKey(key);
        if (typeof options !== "object" || options === null)
          options = {};
        this._del(key, options, callback);
      };
      AbstractLevelDOWN$4.prototype._del = function (key, options, callback) {
        process$7.nextTick(callback);
      };
      AbstractLevelDOWN$4.prototype.batch = function (array, options, callback) {
        if (!arguments.length)
          return this._chainedBatch();
        if (typeof options === "function")
          callback = options;
        if (typeof array === "function")
          callback = array;
        if (typeof callback !== "function") {
          throw new Error("batch(array) requires a callback argument");
        }
        if (!Array.isArray(array)) {
          return process$7.nextTick(callback, new Error("batch(array) requires an array argument"));
        }
        if (array.length === 0) {
          return process$7.nextTick(callback);
        }
        if (typeof options !== "object" || options === null)
          options = {};
        var serialized = new Array(array.length);
        for (var i = 0; i < array.length; i++) {
          if (typeof array[i] !== "object" || array[i] === null) {
            return process$7.nextTick(callback, new Error("batch(array) element must be an object and not `null`"));
          }
          var e = xtend$1(array[i]);
          if (e.type !== "put" && e.type !== "del") {
            return process$7.nextTick(callback, new Error("`type` must be 'put' or 'del'"));
          }
          var err = this._checkKey(e.key);
          if (err)
            return process$7.nextTick(callback, err);
          e.key = this._serializeKey(e.key);
          if (e.type === "put") {
            var valueErr = this._checkValue(e.value);
            if (valueErr)
              return process$7.nextTick(callback, valueErr);
            e.value = this._serializeValue(e.value);
          }
          serialized[i] = e;
        }
        this._batch(serialized, options, callback);
      };
      AbstractLevelDOWN$4.prototype._batch = function (array, options, callback) {
        process$7.nextTick(callback);
      };
      AbstractLevelDOWN$4.prototype._setupIteratorOptions = function (options) {
        options = cleanRangeOptions(this || _global$l, options);
        options.reverse = !!options.reverse;
        options.keys = options.keys !== false;
        options.values = options.values !== false;
        options.limit = "limit" in options ? options.limit : -1;
        options.keyAsBuffer = options.keyAsBuffer !== false;
        options.valueAsBuffer = options.valueAsBuffer !== false;
        return options;
      };
      function cleanRangeOptions(db, options) {
        var result = {};
        for (var k in options) {
          if (!hasOwnProperty.call(options, k))
            continue;
          var opt = options[k];
          if (isRangeOption(k)) {
            opt = db._serializeKey(opt);
          }
          result[k] = opt;
        }
        return result;
      }
      function isRangeOption(k) {
        return rangeOptions.indexOf(k) !== -1;
      }
      AbstractLevelDOWN$4.prototype.iterator = function (options) {
        if (typeof options !== "object" || options === null)
          options = {};
        options = this._setupIteratorOptions(options);
        return this._iterator(options);
      };
      AbstractLevelDOWN$4.prototype._iterator = function (options) {
        return new AbstractIterator$4(this || _global$l);
      };
      AbstractLevelDOWN$4.prototype._chainedBatch = function () {
        return new AbstractChainedBatch$2(this || _global$l);
      };
      AbstractLevelDOWN$4.prototype._serializeKey = function (key) {
        return key;
      };
      AbstractLevelDOWN$4.prototype._serializeValue = function (value) {
        return value;
      };
      AbstractLevelDOWN$4.prototype._checkKey = function (key) {
        if (key === null || key === undefined) {
          return new Error("key cannot be `null` or `undefined`");
        } else if (Buffer$9.isBuffer(key) && key.length === 0) {
          return new Error("key cannot be an empty Buffer");
        } else if (key === "") {
          return new Error("key cannot be an empty String");
        } else if (Array.isArray(key) && key.length === 0) {
          return new Error("key cannot be an empty Array");
        }
      };
      AbstractLevelDOWN$4.prototype._checkValue = function (value) {
        if (value === null || value === undefined) {
          return new Error("value cannot be `null` or `undefined`");
        }
      };
      exports$N = AbstractLevelDOWN$4;
      var _abstractLeveldown$1 = exports$N;

      var exports$M = {};
      exports$M.AbstractLevelDOWN = _abstractLeveldown$1;
      exports$M.AbstractIterator = _abstractIterator$1;
      exports$M.AbstractChainedBatch = _abstractChainedBatch$1;

      var _global$k = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
      var exports$L = {};
      var AbstractIterator$3 = exports$M.AbstractIterator;
      var inherits$5 = exports$1$w;
      function DeferredIterator(options) {
        AbstractIterator$3.call(this || _global$k, options);
        (this || _global$k)._options = options;
        (this || _global$k)._iterator = null;
        (this || _global$k)._operations = [];
      }
      inherits$5(DeferredIterator, AbstractIterator$3);
      DeferredIterator.prototype.setDb = function (db) {
        var it = (this || _global$k)._iterator = db.iterator((this || _global$k)._options);
        (this || _global$k)._operations.forEach(function (op) {
          it[op.method].apply(it, op.args);
        });
      };
      DeferredIterator.prototype._operation = function (method, args) {
        if ((this || _global$k)._iterator)
          return (this || _global$k)._iterator[method].apply((this || _global$k)._iterator, args);
        (this || _global$k)._operations.push({
          method: method,
          args: args
        });
      };
      "next end".split(" ").forEach(function (m) {
        DeferredIterator.prototype["_" + m] = function () {
          this._operation(m, arguments);
        };
      });
      DeferredIterator.prototype.seek = function () {
        this._operation("seek", arguments);
      };
      exports$L = DeferredIterator;
      var _deferredIterator = exports$L;
      var _global$1$4 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
      var exports$1$p = {};
      var AbstractLevelDOWN$3 = exports$M.AbstractLevelDOWN;
      var inherits$1$1 = exports$1$w;
      var DeferredIterator$1 = _deferredIterator;
      var deferrables = "put get del batch".split(" ");
      function DeferredLevelDOWN$1(db) {
        AbstractLevelDOWN$3.call(this || _global$1$4, "");
        (this || _global$1$4)._db = db;
        (this || _global$1$4)._operations = [];
        (this || _global$1$4)._iterators = [];
        closed(this || _global$1$4);
      }
      inherits$1$1(DeferredLevelDOWN$1, AbstractLevelDOWN$3);
      DeferredLevelDOWN$1.prototype._open = function (options, callback) {
        var self = this || _global$1$4;
        (this || _global$1$4)._db.open(options, function (err) {
          if (err)
            return callback(err);
          self._operations.forEach(function (op) {
            self._db[op.method].apply(self._db, op.args);
          });
          self._operations = [];
          self._iterators.forEach(function (it) {
            it.setDb(self._db);
          });
          self._iterators = [];
          open(self);
          callback();
        });
      };
      DeferredLevelDOWN$1.prototype._close = function (callback) {
        var self = this || _global$1$4;
        (this || _global$1$4)._db.close(function (err) {
          if (err)
            return callback(err);
          closed(self);
          callback();
        });
      };
      function open(self) {
        deferrables.concat("iterator").forEach(function (m) {
          self["_" + m] = function () {
            return (this || _global$1$4)._db[m].apply((this || _global$1$4)._db, arguments);
          };
        });
        if (self._db.approximateSize) {
          self.approximateSize = function () {
            return (this || _global$1$4)._db.approximateSize.apply((this || _global$1$4)._db, arguments);
          };
        }
      }
      function closed(self) {
        deferrables.forEach(function (m) {
          self["_" + m] = function () {
            (this || _global$1$4)._operations.push({
              method: m,
              args: arguments
            });
          };
        });
        if (typeof self._db.approximateSize === "function") {
          self.approximateSize = function () {
            (this || _global$1$4)._operations.push({
              method: "approximateSize",
              args: arguments
            });
          };
        }
        self._iterator = function (options) {
          var it = new DeferredIterator$1(options);
          (this || _global$1$4)._iterators.push(it);
          return it;
        };
      }
      DeferredLevelDOWN$1.prototype._serializeKey = function (key) {
        return key;
      };
      DeferredLevelDOWN$1.prototype._serializeValue = function (value) {
        return value;
      };
      exports$1$p = DeferredLevelDOWN$1;
      exports$1$p.DeferredIterator = DeferredIterator$1;
      var exports$2$4 = exports$1$p;
      exports$1$p.DeferredIterator;

      var exports$1$o = {},
          _dewExec$1$3 = false;

      function dew$1$3() {
        if (_dewExec$1$3) return exports$1$o;
        _dewExec$1$3 = true;
        var codes = {};

        function createErrorType(code, message, Base) {
          if (!Base) {
            Base = Error;
          }

          function getMessage(arg1, arg2, arg3) {
            if (typeof message === "string") {
              return message;
            } else {
              return message(arg1, arg2, arg3);
            }
          }

          var NodeError = /*#__PURE__*/function (_Base) {
            _inherits$4(NodeError, _Base);

            var _super = _createSuper(NodeError);

            function NodeError(arg1, arg2, arg3) {
              _classCallCheck(this, NodeError);

              return _super.call(this, getMessage(arg1, arg2, arg3));
            }

            return NodeError;
          }(Base);

          NodeError.prototype.name = Base.name;
          NodeError.prototype.code = code;
          codes[code] = NodeError;
        }

        function oneOf(expected, thing) {
          if (Array.isArray(expected)) {
            var len = expected.length;
            expected = expected.map(function (i) {
              return String(i);
            });

            if (len > 2) {
              return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(", "), ", or ") + expected[len - 1];
            } else if (len === 2) {
              return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
            } else {
              return "of ".concat(thing, " ").concat(expected[0]);
            }
          } else {
            return "of ".concat(thing, " ").concat(String(expected));
          }
        }

        function startsWith(str, search, pos) {
          return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
        }

        function endsWith(str, search, this_len) {
          if (this_len === undefined || this_len > str.length) {
            this_len = str.length;
          }

          return str.substring(this_len - search.length, this_len) === search;
        }

        function includes(str, search, start) {
          if (typeof start !== "number") {
            start = 0;
          }

          if (start + search.length > str.length) {
            return false;
          } else {
            return str.indexOf(search, start) !== -1;
          }
        }

        createErrorType("ERR_INVALID_OPT_VALUE", function (name, value) {
          return "The value \"" + value + "\" is invalid for option \"" + name + "\"";
        }, TypeError);
        createErrorType("ERR_INVALID_ARG_TYPE", function (name, expected, actual) {
          var determiner;

          if (typeof expected === "string" && startsWith(expected, "not ")) {
            determiner = "must not be";
            expected = expected.replace(/^not /, "");
          } else {
            determiner = "must be";
          }

          var msg;

          if (endsWith(name, " argument")) {
            msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
          } else {
            var type = includes(name, ".") ? "property" : "argument";
            msg = "The \"".concat(name, "\" ").concat(type, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
          }

          msg += ". Received type ".concat(_typeof(actual));
          return msg;
        }, TypeError);
        createErrorType("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
        createErrorType("ERR_METHOD_NOT_IMPLEMENTED", function (name) {
          return "The " + name + " method is not implemented";
        });
        createErrorType("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
        createErrorType("ERR_STREAM_DESTROYED", function (name) {
          return "Cannot call " + name + " after a stream was destroyed";
        });
        createErrorType("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
        createErrorType("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
        createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
        createErrorType("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
        createErrorType("ERR_UNKNOWN_ENCODING", function (arg) {
          return "Unknown encoding: " + arg;
        }, TypeError);
        createErrorType("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
        exports$1$o.codes = codes;
        return exports$1$o;
      }

      var exports$K = {},
          _dewExec$a = false;

      function dew$a() {
        if (_dewExec$a) return exports$K;
        _dewExec$a = true;
        var ERR_STREAM_PREMATURE_CLOSE = dew$1$3().codes.ERR_STREAM_PREMATURE_CLOSE;

        function once(callback) {
          var called = false;
          return function () {
            if (called) return;
            called = true;

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            callback.apply(this, args);
          };
        }

        function noop() {}

        function isRequest(stream) {
          return stream.setHeader && typeof stream.abort === "function";
        }

        function eos(stream, opts, callback) {
          if (typeof opts === "function") return eos(stream, null, opts);
          if (!opts) opts = {};
          callback = once(callback || noop);
          var readable = opts.readable || opts.readable !== false && stream.readable;
          var writable = opts.writable || opts.writable !== false && stream.writable;

          var onlegacyfinish = function onlegacyfinish() {
            if (!stream.writable) onfinish();
          };

          var writableEnded = stream._writableState && stream._writableState.finished;

          var onfinish = function onfinish() {
            writable = false;
            writableEnded = true;
            if (!readable) callback.call(stream);
          };

          var readableEnded = stream._readableState && stream._readableState.endEmitted;

          var onend = function onend() {
            readable = false;
            readableEnded = true;
            if (!writable) callback.call(stream);
          };

          var onerror = function onerror(err) {
            callback.call(stream, err);
          };

          var onclose = function onclose() {
            var err;

            if (readable && !readableEnded) {
              if (!stream._readableState || !stream._readableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
              return callback.call(stream, err);
            }

            if (writable && !writableEnded) {
              if (!stream._writableState || !stream._writableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
              return callback.call(stream, err);
            }
          };

          var onrequest = function onrequest() {
            stream.req.on("finish", onfinish);
          };

          if (isRequest(stream)) {
            stream.on("complete", onfinish);
            stream.on("abort", onclose);
            if (stream.req) onrequest();else stream.on("request", onrequest);
          } else if (writable && !stream._writableState) {
            stream.on("end", onlegacyfinish);
            stream.on("close", onlegacyfinish);
          }

          stream.on("end", onend);
          stream.on("finish", onfinish);
          if (opts.error !== false) stream.on("error", onerror);
          stream.on("close", onclose);
          return function () {
            stream.removeListener("complete", onfinish);
            stream.removeListener("abort", onclose);
            stream.removeListener("request", onrequest);
            if (stream.req) stream.req.removeListener("finish", onfinish);
            stream.removeListener("end", onlegacyfinish);
            stream.removeListener("close", onlegacyfinish);
            stream.removeListener("finish", onfinish);
            stream.removeListener("end", onend);
            stream.removeListener("error", onerror);
            stream.removeListener("close", onclose);
          };
        }

        exports$K = eos;
        return exports$K;
      }

      var exports$J = {};
      var buffer = exports$14;
      var Buffer$8 = buffer.Buffer;
      function copyProps(src, dst) {
        for (var key in src) {
          dst[key] = src[key];
        }
      }
      if (Buffer$8.from && Buffer$8.alloc && Buffer$8.allocUnsafe && Buffer$8.allocUnsafeSlow) {
        exports$J = buffer;
      } else {
        copyProps(buffer, exports$J);
        exports$J.Buffer = SafeBuffer;
      }
      function SafeBuffer(arg, encodingOrOffset, length) {
        return Buffer$8(arg, encodingOrOffset, length);
      }
      SafeBuffer.prototype = Object.create(Buffer$8.prototype);
      copyProps(Buffer$8, SafeBuffer);
      SafeBuffer.from = function (arg, encodingOrOffset, length) {
        if (typeof arg === "number") {
          throw new TypeError("Argument must not be a number");
        }
        return Buffer$8(arg, encodingOrOffset, length);
      };
      SafeBuffer.alloc = function (size, fill, encoding) {
        if (typeof size !== "number") {
          throw new TypeError("Argument must be a number");
        }
        var buf = Buffer$8(size);
        if (fill !== undefined) {
          if (typeof encoding === "string") {
            buf.fill(fill, encoding);
          } else {
            buf.fill(fill);
          }
        } else {
          buf.fill(0);
        }
        return buf;
      };
      SafeBuffer.allocUnsafe = function (size) {
        if (typeof size !== "number") {
          throw new TypeError("Argument must be a number");
        }
        return Buffer$8(size);
      };
      SafeBuffer.allocUnsafeSlow = function (size) {
        if (typeof size !== "number") {
          throw new TypeError("Argument must be a number");
        }
        return buffer.SlowBuffer(size);
      };
      var exports$1$n = exports$J;
      exports$J.Buffer;

      var exports$I = {};
      var Buffer$7 = exports$1$n.Buffer;
      var isEncoding = Buffer$7.isEncoding || function (encoding) {
        encoding = "" + encoding;
        switch (encoding && encoding.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return true;
        default:
          return false;
        }
      };
      function _normalizeEncoding(enc) {
        if (!enc)
          return "utf8";
        var retried;
        while (true) {
          switch (enc) {
          case "utf8":
          case "utf-8":
            return "utf8";
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return "utf16le";
          case "latin1":
          case "binary":
            return "latin1";
          case "base64":
          case "ascii":
          case "hex":
            return enc;
          default:
            if (retried)
              return;
            enc = ("" + enc).toLowerCase();
            retried = true;
          }
        }
      }
      function normalizeEncoding(enc) {
        var nenc = _normalizeEncoding(enc);
        if (typeof nenc !== "string" && (Buffer$7.isEncoding === isEncoding || !isEncoding(enc)))
          throw new Error("Unknown encoding: " + enc);
        return nenc || enc;
      }
      exports$I.StringDecoder = StringDecoder$1;
      function StringDecoder$1(encoding) {
        this.encoding = normalizeEncoding(encoding);
        var nb;
        switch (this.encoding) {
        case "utf16le":
          this.text = utf16Text;
          this.end = utf16End;
          nb = 4;
          break;
        case "utf8":
          this.fillLast = utf8FillLast;
          nb = 4;
          break;
        case "base64":
          this.text = base64Text;
          this.end = base64End;
          nb = 3;
          break;
        default:
          this.write = simpleWrite;
          this.end = simpleEnd;
          return;
        }
        this.lastNeed = 0;
        this.lastTotal = 0;
        this.lastChar = Buffer$7.allocUnsafe(nb);
      }
      StringDecoder$1.prototype.write = function (buf) {
        if (buf.length === 0)
          return "";
        var r;
        var i;
        if (this.lastNeed) {
          r = this.fillLast(buf);
          if (r === undefined)
            return "";
          i = this.lastNeed;
          this.lastNeed = 0;
        } else {
          i = 0;
        }
        if (i < buf.length)
          return r ? r + this.text(buf, i) : this.text(buf, i);
        return r || "";
      };
      StringDecoder$1.prototype.end = utf8End;
      StringDecoder$1.prototype.text = utf8Text;
      StringDecoder$1.prototype.fillLast = function (buf) {
        if (this.lastNeed <= buf.length) {
          buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
          return this.lastChar.toString(this.encoding, 0, this.lastTotal);
        }
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
        this.lastNeed -= buf.length;
      };
      function utf8CheckByte(byte) {
        if (byte <= 127)
          return 0;
        else if (byte >> 5 === 6)
          return 2;
        else if (byte >> 4 === 14)
          return 3;
        else if (byte >> 3 === 30)
          return 4;
        return byte >> 6 === 2 ? -1 : -2;
      }
      function utf8CheckIncomplete(self, buf, i) {
        var j = buf.length - 1;
        if (j < i)
          return 0;
        var nb = utf8CheckByte(buf[j]);
        if (nb >= 0) {
          if (nb > 0)
            self.lastNeed = nb - 1;
          return nb;
        }
        if (--j < i || nb === -2)
          return 0;
        nb = utf8CheckByte(buf[j]);
        if (nb >= 0) {
          if (nb > 0)
            self.lastNeed = nb - 2;
          return nb;
        }
        if (--j < i || nb === -2)
          return 0;
        nb = utf8CheckByte(buf[j]);
        if (nb >= 0) {
          if (nb > 0) {
            if (nb === 2)
              nb = 0;
            else
              self.lastNeed = nb - 3;
          }
          return nb;
        }
        return 0;
      }
      function utf8CheckExtraBytes(self, buf, p) {
        if ((buf[0] & 192) !== 128) {
          self.lastNeed = 0;
          return "\uFFFD";
        }
        if (self.lastNeed > 1 && buf.length > 1) {
          if ((buf[1] & 192) !== 128) {
            self.lastNeed = 1;
            return "\uFFFD";
          }
          if (self.lastNeed > 2 && buf.length > 2) {
            if ((buf[2] & 192) !== 128) {
              self.lastNeed = 2;
              return "\uFFFD";
            }
          }
        }
      }
      function utf8FillLast(buf) {
        var p = this.lastTotal - this.lastNeed;
        var r = utf8CheckExtraBytes(this, buf);
        if (r !== undefined)
          return r;
        if (this.lastNeed <= buf.length) {
          buf.copy(this.lastChar, p, 0, this.lastNeed);
          return this.lastChar.toString(this.encoding, 0, this.lastTotal);
        }
        buf.copy(this.lastChar, p, 0, buf.length);
        this.lastNeed -= buf.length;
      }
      function utf8Text(buf, i) {
        var total = utf8CheckIncomplete(this, buf, i);
        if (!this.lastNeed)
          return buf.toString("utf8", i);
        this.lastTotal = total;
        var end = buf.length - (total - this.lastNeed);
        buf.copy(this.lastChar, 0, end);
        return buf.toString("utf8", i, end);
      }
      function utf8End(buf) {
        var r = buf && buf.length ? this.write(buf) : "";
        if (this.lastNeed)
          return r + "\uFFFD";
        return r;
      }
      function utf16Text(buf, i) {
        if ((buf.length - i) % 2 === 0) {
          var r = buf.toString("utf16le", i);
          if (r) {
            var c = r.charCodeAt(r.length - 1);
            if (c >= 55296 && c <= 56319) {
              this.lastNeed = 2;
              this.lastTotal = 4;
              this.lastChar[0] = buf[buf.length - 2];
              this.lastChar[1] = buf[buf.length - 1];
              return r.slice(0, -1);
            }
          }
          return r;
        }
        this.lastNeed = 1;
        this.lastTotal = 2;
        this.lastChar[0] = buf[buf.length - 1];
        return buf.toString("utf16le", i, buf.length - 1);
      }
      function utf16End(buf) {
        var r = buf && buf.length ? this.write(buf) : "";
        if (this.lastNeed) {
          var end = this.lastTotal - this.lastNeed;
          return r + this.lastChar.toString("utf16le", 0, end);
        }
        return r;
      }
      function base64Text(buf, i) {
        var n = (buf.length - i) % 3;
        if (n === 0)
          return buf.toString("base64", i);
        this.lastNeed = 3 - n;
        this.lastTotal = 3;
        if (n === 1) {
          this.lastChar[0] = buf[buf.length - 1];
        } else {
          this.lastChar[0] = buf[buf.length - 2];
          this.lastChar[1] = buf[buf.length - 1];
        }
        return buf.toString("base64", i, buf.length - n);
      }
      function base64End(buf) {
        var r = buf && buf.length ? this.write(buf) : "";
        if (this.lastNeed)
          return r + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
        return r;
      }
      function simpleWrite(buf) {
        return buf.toString(this.encoding);
      }
      function simpleEnd(buf) {
        return buf && buf.length ? this.write(buf) : "";
      }
      const _StringDecoder = exports$I.StringDecoder;

      var _string_decoder2 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        'default': exports$I,
        StringDecoder: _StringDecoder
      });

      var _global$j = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
      var exports$H = {};
      exports$H = deprecate;
      function deprecate(fn, msg) {
        if (config("noDeprecation")) {
          return fn;
        }
        var warned = false;
        function deprecated() {
          if (!warned) {
            if (config("throwDeprecation")) {
              throw new Error(msg);
            } else if (config("traceDeprecation")) {
              console.trace(msg);
            } else {
              console.warn(msg);
            }
            warned = true;
          }
          return fn.apply(this || _global$j, arguments);
        }
        return deprecated;
      }
      function config(name) {
        try {
          if (!_global$j.localStorage)
            return false;
        } catch (_) {
          return false;
        }
        var val = _global$j.localStorage[name];
        if (null == val)
          return false;
        return String(val).toLowerCase() === "true";
      }
      var exports$1$m = exports$H;

      var _utilDeprecate2 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        'default': exports$1$m
      });

      var _events$1 = "default" in _events2 ? y : _events2;

      var exports$8$1 = {},
          _dewExec$8$1 = false;

      function dew$8$1() {
        if (_dewExec$8$1) return exports$8$1;
        _dewExec$8$1 = true;
        exports$8$1 = _events$1.EventEmitter;
        return exports$8$1;
      }

      var _util = Object.freeze({});

      var _buffer$2 = "default" in _buffer2 ? exports$14 : _buffer2;

      var exports$7$1 = {},
          _dewExec$7$1 = false;

      function dew$7$1() {
        if (_dewExec$7$1) return exports$7$1;
        _dewExec$7$1 = true;

        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);

          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            enumerableOnly && (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })), keys.push.apply(keys, symbols);
          }

          return keys;
        }

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = null != arguments[i] ? arguments[i] : {};
            i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
              _defineProperty(target, key, source[key]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }

          return target;
        }

        function _defineProperty(obj, key, value) {
          key = _toPropertyKey(key);

          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }

          return obj;
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          Object.defineProperty(Constructor, "prototype", {
            writable: false
          });
          return Constructor;
        }

        function _toPropertyKey(arg) {
          var key = _toPrimitive(arg, "string");

          return _typeof(key) === "symbol" ? key : String(key);
        }

        function _toPrimitive(input, hint) {
          if (_typeof(input) !== "object" || input === null) return input;
          var prim = input[Symbol.toPrimitive];

          if (prim !== undefined) {
            var res = prim.call(input, hint || "default");
            if (_typeof(res) !== "object") return res;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }

          return (hint === "string" ? String : Number)(input);
        }

        var _require = _buffer$2,
            Buffer = _require.Buffer;
        var _require2 = _util,
            inspect = _require2.inspect;
        var custom = inspect && inspect.custom || "inspect";

        function copyBuffer(src, target, offset) {
          Buffer.prototype.copy.call(src, target, offset);
        }

        exports$7$1 = function () {
          function BufferList() {
            _classCallCheck(this, BufferList);

            this.head = null;
            this.tail = null;
            this.length = 0;
          }

          _createClass(BufferList, [{
            key: "push",
            value: function push(v) {
              var entry = {
                data: v,
                next: null
              };
              if (this.length > 0) this.tail.next = entry;else this.head = entry;
              this.tail = entry;
              ++this.length;
            }
          }, {
            key: "unshift",
            value: function unshift(v) {
              var entry = {
                data: v,
                next: this.head
              };
              if (this.length === 0) this.tail = entry;
              this.head = entry;
              ++this.length;
            }
          }, {
            key: "shift",
            value: function shift() {
              if (this.length === 0) return;
              var ret = this.head.data;
              if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
              --this.length;
              return ret;
            }
          }, {
            key: "clear",
            value: function clear() {
              this.head = this.tail = null;
              this.length = 0;
            }
          }, {
            key: "join",
            value: function join(s) {
              if (this.length === 0) return "";
              var p = this.head;
              var ret = "" + p.data;

              while (p = p.next) {
                ret += s + p.data;
              }

              return ret;
            }
          }, {
            key: "concat",
            value: function concat(n) {
              if (this.length === 0) return Buffer.alloc(0);
              var ret = Buffer.allocUnsafe(n >>> 0);
              var p = this.head;
              var i = 0;

              while (p) {
                copyBuffer(p.data, ret, i);
                i += p.data.length;
                p = p.next;
              }

              return ret;
            }
          }, {
            key: "consume",
            value: function consume(n, hasStrings) {
              var ret;

              if (n < this.head.data.length) {
                ret = this.head.data.slice(0, n);
                this.head.data = this.head.data.slice(n);
              } else if (n === this.head.data.length) {
                ret = this.shift();
              } else {
                ret = hasStrings ? this._getString(n) : this._getBuffer(n);
              }

              return ret;
            }
          }, {
            key: "first",
            value: function first() {
              return this.head.data;
            }
          }, {
            key: "_getString",
            value: function _getString(n) {
              var p = this.head;
              var c = 1;
              var ret = p.data;
              n -= ret.length;

              while (p = p.next) {
                var str = p.data;
                var nb = n > str.length ? str.length : n;
                if (nb === str.length) ret += str;else ret += str.slice(0, n);
                n -= nb;

                if (n === 0) {
                  if (nb === str.length) {
                    ++c;
                    if (p.next) this.head = p.next;else this.head = this.tail = null;
                  } else {
                    this.head = p;
                    p.data = str.slice(nb);
                  }

                  break;
                }

                ++c;
              }

              this.length -= c;
              return ret;
            }
          }, {
            key: "_getBuffer",
            value: function _getBuffer(n) {
              var ret = Buffer.allocUnsafe(n);
              var p = this.head;
              var c = 1;
              p.data.copy(ret);
              n -= p.data.length;

              while (p = p.next) {
                var buf = p.data;
                var nb = n > buf.length ? buf.length : n;
                buf.copy(ret, ret.length - n, 0, nb);
                n -= nb;

                if (n === 0) {
                  if (nb === buf.length) {
                    ++c;
                    if (p.next) this.head = p.next;else this.head = this.tail = null;
                  } else {
                    this.head = p;
                    p.data = buf.slice(nb);
                  }

                  break;
                }

                ++c;
              }

              this.length -= c;
              return ret;
            }
          }, {
            key: custom,
            value: function value(_, options) {
              return inspect(this, _objectSpread(_objectSpread({}, options), {}, {
                depth: 0,
                customInspect: false
              }));
            }
          }]);

          return BufferList;
        }();

        return exports$7$1;
      }

      var exports$6$1 = {},
          _dewExec$6$1 = false;

      function dew$6$1() {
        if (_dewExec$6$1) return exports$6$1;
        _dewExec$6$1 = true;
        var process = process$a;

        function destroy(err, cb) {
          var _this = this;

          var readableDestroyed = this._readableState && this._readableState.destroyed;
          var writableDestroyed = this._writableState && this._writableState.destroyed;

          if (readableDestroyed || writableDestroyed) {
            if (cb) {
              cb(err);
            } else if (err) {
              if (!this._writableState) {
                process.nextTick(emitErrorNT, this, err);
              } else if (!this._writableState.errorEmitted) {
                this._writableState.errorEmitted = true;
                process.nextTick(emitErrorNT, this, err);
              }
            }

            return this;
          }

          if (this._readableState) {
            this._readableState.destroyed = true;
          }

          if (this._writableState) {
            this._writableState.destroyed = true;
          }

          this._destroy(err || null, function (err) {
            if (!cb && err) {
              if (!_this._writableState) {
                process.nextTick(emitErrorAndCloseNT, _this, err);
              } else if (!_this._writableState.errorEmitted) {
                _this._writableState.errorEmitted = true;
                process.nextTick(emitErrorAndCloseNT, _this, err);
              } else {
                process.nextTick(emitCloseNT, _this);
              }
            } else if (cb) {
              process.nextTick(emitCloseNT, _this);
              cb(err);
            } else {
              process.nextTick(emitCloseNT, _this);
            }
          });

          return this;
        }

        function emitErrorAndCloseNT(self, err) {
          emitErrorNT(self, err);
          emitCloseNT(self);
        }

        function emitCloseNT(self) {
          if (self._writableState && !self._writableState.emitClose) return;
          if (self._readableState && !self._readableState.emitClose) return;
          self.emit("close");
        }

        function undestroy() {
          if (this._readableState) {
            this._readableState.destroyed = false;
            this._readableState.reading = false;
            this._readableState.ended = false;
            this._readableState.endEmitted = false;
          }

          if (this._writableState) {
            this._writableState.destroyed = false;
            this._writableState.ended = false;
            this._writableState.ending = false;
            this._writableState.finalCalled = false;
            this._writableState.prefinished = false;
            this._writableState.finished = false;
            this._writableState.errorEmitted = false;
          }
        }

        function emitErrorNT(self, err) {
          self.emit("error", err);
        }

        function errorOrDestroy(stream, err) {
          var rState = stream._readableState;
          var wState = stream._writableState;
          if (rState && rState.autoDestroy || wState && wState.autoDestroy) stream.destroy(err);else stream.emit("error", err);
        }

        exports$6$1 = {
          destroy: destroy,
          undestroy: undestroy,
          errorOrDestroy: errorOrDestroy
        };
        return exports$6$1;
      }

      var exports$5$1 = {},
          _dewExec$5$1 = false;

      function dew$5$1() {
        if (_dewExec$5$1) return exports$5$1;
        _dewExec$5$1 = true;
        var ERR_INVALID_OPT_VALUE = dew$1$3().codes.ERR_INVALID_OPT_VALUE;

        function highWaterMarkFrom(options, isDuplex, duplexKey) {
          return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
        }

        function getHighWaterMark(state, options, duplexKey, isDuplex) {
          var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);

          if (hwm != null) {
            if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
              var name = isDuplex ? duplexKey : "highWaterMark";
              throw new ERR_INVALID_OPT_VALUE(name, hwm);
            }

            return Math.floor(hwm);
          }

          return state.objectMode ? 16 : 16 * 1024;
        }

        exports$5$1 = {
          getHighWaterMark: getHighWaterMark
        };
        return exports$5$1;
      }

      var _utilDeprecate = "default" in _utilDeprecate2 ? exports$1$m : _utilDeprecate2;

      var _buffer$1 = "default" in _buffer2 ? exports$14 : _buffer2;

      var _inherits$2 = "default" in _inherits2 ? exports$1$w : _inherits2;

      var exports$4$1 = {},
          _dewExec$4$1 = false;

      var _global$1$3 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

      function dew$4$1() {
        if (_dewExec$4$1) return exports$4$1;
        _dewExec$4$1 = true;
        var process = process$a;
        exports$4$1 = Writable;

        function CorkedRequest(state) {
          var _this = this;

          this.next = null;
          this.entry = null;

          this.finish = function () {
            onCorkedFinish(_this, state);
          };
        }

        var Duplex;
        Writable.WritableState = WritableState;
        var internalUtil = {
          deprecate: _utilDeprecate
        };
        var Stream = dew$8$1();
        var Buffer = _buffer$1.Buffer;

        var OurUint8Array = (typeof _global$1$3 !== "undefined" ? _global$1$3 : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function () {};

        function _uint8ArrayToBuffer(chunk) {
          return Buffer.from(chunk);
        }

        function _isUint8Array(obj) {
          return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
        }

        var destroyImpl = dew$6$1();

        var _require = dew$5$1(),
            getHighWaterMark = _require.getHighWaterMark;

        var _require$codes = dew$1$3().codes,
            ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE,
            ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,
            ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK,
            ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE,
            ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED,
            ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES,
            ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END,
            ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;
        var errorOrDestroy = destroyImpl.errorOrDestroy;

        _inherits$2(Writable, Stream);

        function nop() {}

        function WritableState(options, stream, isDuplex) {
          Duplex = Duplex || dew$3$1();
          options = options || {};
          if (typeof isDuplex !== "boolean") isDuplex = stream instanceof Duplex;
          this.objectMode = !!options.objectMode;
          if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;
          this.highWaterMark = getHighWaterMark(this, options, "writableHighWaterMark", isDuplex);
          this.finalCalled = false;
          this.needDrain = false;
          this.ending = false;
          this.ended = false;
          this.finished = false;
          this.destroyed = false;
          var noDecode = options.decodeStrings === false;
          this.decodeStrings = !noDecode;
          this.defaultEncoding = options.defaultEncoding || "utf8";
          this.length = 0;
          this.writing = false;
          this.corked = 0;
          this.sync = true;
          this.bufferProcessing = false;

          this.onwrite = function (er) {
            onwrite(stream, er);
          };

          this.writecb = null;
          this.writelen = 0;
          this.bufferedRequest = null;
          this.lastBufferedRequest = null;
          this.pendingcb = 0;
          this.prefinished = false;
          this.errorEmitted = false;
          this.emitClose = options.emitClose !== false;
          this.autoDestroy = !!options.autoDestroy;
          this.bufferedRequestCount = 0;
          this.corkedRequestsFree = new CorkedRequest(this);
        }

        WritableState.prototype.getBuffer = function getBuffer() {
          var current = this.bufferedRequest;
          var out = [];

          while (current) {
            out.push(current);
            current = current.next;
          }

          return out;
        };

        (function () {
          try {
            Object.defineProperty(WritableState.prototype, "buffer", {
              get: internalUtil.deprecate(function writableStateBufferGetter() {
                return this.getBuffer();
              }, "_writableState.buffer is deprecated. Use _writableState.getBuffer " + "instead.", "DEP0003")
            });
          } catch (_) {}
        })();

        var realHasInstance;

        if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
          realHasInstance = Function.prototype[Symbol.hasInstance];
          Object.defineProperty(Writable, Symbol.hasInstance, {
            value: function value(object) {
              if (realHasInstance.call(this, object)) return true;
              if (this !== Writable) return false;
              return object && object._writableState instanceof WritableState;
            }
          });
        } else {
          realHasInstance = function realHasInstance(object) {
            return object instanceof this;
          };
        }

        function Writable(options) {
          Duplex = Duplex || dew$3$1();
          var isDuplex = this instanceof Duplex;
          if (!isDuplex && !realHasInstance.call(Writable, this)) return new Writable(options);
          this._writableState = new WritableState(options, this, isDuplex);
          this.writable = true;

          if (options) {
            if (typeof options.write === "function") this._write = options.write;
            if (typeof options.writev === "function") this._writev = options.writev;
            if (typeof options.destroy === "function") this._destroy = options.destroy;
            if (typeof options["final"] === "function") this._final = options["final"];
          }

          Stream.call(this);
        }

        Writable.prototype.pipe = function () {
          errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
        };

        function writeAfterEnd(stream, cb) {
          var er = new ERR_STREAM_WRITE_AFTER_END();
          errorOrDestroy(stream, er);
          process.nextTick(cb, er);
        }

        function validChunk(stream, state, chunk, cb) {
          var er;

          if (chunk === null) {
            er = new ERR_STREAM_NULL_VALUES();
          } else if (typeof chunk !== "string" && !state.objectMode) {
            er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer"], chunk);
          }

          if (er) {
            errorOrDestroy(stream, er);
            process.nextTick(cb, er);
            return false;
          }

          return true;
        }

        Writable.prototype.write = function (chunk, encoding, cb) {
          var state = this._writableState;
          var ret = false;

          var isBuf = !state.objectMode && _isUint8Array(chunk);

          if (isBuf && !Buffer.isBuffer(chunk)) {
            chunk = _uint8ArrayToBuffer(chunk);
          }

          if (typeof encoding === "function") {
            cb = encoding;
            encoding = null;
          }

          if (isBuf) encoding = "buffer";else if (!encoding) encoding = state.defaultEncoding;
          if (typeof cb !== "function") cb = nop;
          if (state.ending) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {
            state.pendingcb++;
            ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
          }
          return ret;
        };

        Writable.prototype.cork = function () {
          this._writableState.corked++;
        };

        Writable.prototype.uncork = function () {
          var state = this._writableState;

          if (state.corked) {
            state.corked--;
            if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
          }
        };

        Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
          if (typeof encoding === "string") encoding = encoding.toLowerCase();
          if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((encoding + "").toLowerCase()) > -1)) throw new ERR_UNKNOWN_ENCODING(encoding);
          this._writableState.defaultEncoding = encoding;
          return this;
        };

        Object.defineProperty(Writable.prototype, "writableBuffer", {
          enumerable: false,
          get: function get() {
            return this._writableState && this._writableState.getBuffer();
          }
        });

        function decodeChunk(state, chunk, encoding) {
          if (!state.objectMode && state.decodeStrings !== false && typeof chunk === "string") {
            chunk = Buffer.from(chunk, encoding);
          }

          return chunk;
        }

        Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
          enumerable: false,
          get: function get() {
            return this._writableState.highWaterMark;
          }
        });

        function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
          if (!isBuf) {
            var newChunk = decodeChunk(state, chunk, encoding);

            if (chunk !== newChunk) {
              isBuf = true;
              encoding = "buffer";
              chunk = newChunk;
            }
          }

          var len = state.objectMode ? 1 : chunk.length;
          state.length += len;
          var ret = state.length < state.highWaterMark;
          if (!ret) state.needDrain = true;

          if (state.writing || state.corked) {
            var last = state.lastBufferedRequest;
            state.lastBufferedRequest = {
              chunk: chunk,
              encoding: encoding,
              isBuf: isBuf,
              callback: cb,
              next: null
            };

            if (last) {
              last.next = state.lastBufferedRequest;
            } else {
              state.bufferedRequest = state.lastBufferedRequest;
            }

            state.bufferedRequestCount += 1;
          } else {
            doWrite(stream, state, false, len, chunk, encoding, cb);
          }

          return ret;
        }

        function doWrite(stream, state, writev, len, chunk, encoding, cb) {
          state.writelen = len;
          state.writecb = cb;
          state.writing = true;
          state.sync = true;
          if (state.destroyed) state.onwrite(new ERR_STREAM_DESTROYED("write"));else if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
          state.sync = false;
        }

        function onwriteError(stream, state, sync, er, cb) {
          --state.pendingcb;

          if (sync) {
            process.nextTick(cb, er);
            process.nextTick(finishMaybe, stream, state);
            stream._writableState.errorEmitted = true;
            errorOrDestroy(stream, er);
          } else {
            cb(er);
            stream._writableState.errorEmitted = true;
            errorOrDestroy(stream, er);
            finishMaybe(stream, state);
          }
        }

        function onwriteStateUpdate(state) {
          state.writing = false;
          state.writecb = null;
          state.length -= state.writelen;
          state.writelen = 0;
        }

        function onwrite(stream, er) {
          var state = stream._writableState;
          var sync = state.sync;
          var cb = state.writecb;
          if (typeof cb !== "function") throw new ERR_MULTIPLE_CALLBACK();
          onwriteStateUpdate(state);
          if (er) onwriteError(stream, state, sync, er, cb);else {
            var finished = needFinish(state) || stream.destroyed;

            if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
              clearBuffer(stream, state);
            }

            if (sync) {
              process.nextTick(afterWrite, stream, state, finished, cb);
            } else {
              afterWrite(stream, state, finished, cb);
            }
          }
        }

        function afterWrite(stream, state, finished, cb) {
          if (!finished) onwriteDrain(stream, state);
          state.pendingcb--;
          cb();
          finishMaybe(stream, state);
        }

        function onwriteDrain(stream, state) {
          if (state.length === 0 && state.needDrain) {
            state.needDrain = false;
            stream.emit("drain");
          }
        }

        function clearBuffer(stream, state) {
          state.bufferProcessing = true;
          var entry = state.bufferedRequest;

          if (stream._writev && entry && entry.next) {
            var l = state.bufferedRequestCount;
            var buffer = new Array(l);
            var holder = state.corkedRequestsFree;
            holder.entry = entry;
            var count = 0;
            var allBuffers = true;

            while (entry) {
              buffer[count] = entry;
              if (!entry.isBuf) allBuffers = false;
              entry = entry.next;
              count += 1;
            }

            buffer.allBuffers = allBuffers;
            doWrite(stream, state, true, state.length, buffer, "", holder.finish);
            state.pendingcb++;
            state.lastBufferedRequest = null;

            if (holder.next) {
              state.corkedRequestsFree = holder.next;
              holder.next = null;
            } else {
              state.corkedRequestsFree = new CorkedRequest(state);
            }

            state.bufferedRequestCount = 0;
          } else {
            while (entry) {
              var chunk = entry.chunk;
              var encoding = entry.encoding;
              var cb = entry.callback;
              var len = state.objectMode ? 1 : chunk.length;
              doWrite(stream, state, false, len, chunk, encoding, cb);
              entry = entry.next;
              state.bufferedRequestCount--;

              if (state.writing) {
                break;
              }
            }

            if (entry === null) state.lastBufferedRequest = null;
          }

          state.bufferedRequest = entry;
          state.bufferProcessing = false;
        }

        Writable.prototype._write = function (chunk, encoding, cb) {
          cb(new ERR_METHOD_NOT_IMPLEMENTED("_write()"));
        };

        Writable.prototype._writev = null;

        Writable.prototype.end = function (chunk, encoding, cb) {
          var state = this._writableState;

          if (typeof chunk === "function") {
            cb = chunk;
            chunk = null;
            encoding = null;
          } else if (typeof encoding === "function") {
            cb = encoding;
            encoding = null;
          }

          if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

          if (state.corked) {
            state.corked = 1;
            this.uncork();
          }

          if (!state.ending) endWritable(this, state, cb);
          return this;
        };

        Object.defineProperty(Writable.prototype, "writableLength", {
          enumerable: false,
          get: function get() {
            return this._writableState.length;
          }
        });

        function needFinish(state) {
          return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
        }

        function callFinal(stream, state) {
          stream._final(function (err) {
            state.pendingcb--;

            if (err) {
              errorOrDestroy(stream, err);
            }

            state.prefinished = true;
            stream.emit("prefinish");
            finishMaybe(stream, state);
          });
        }

        function prefinish(stream, state) {
          if (!state.prefinished && !state.finalCalled) {
            if (typeof stream._final === "function" && !state.destroyed) {
              state.pendingcb++;
              state.finalCalled = true;
              process.nextTick(callFinal, stream, state);
            } else {
              state.prefinished = true;
              stream.emit("prefinish");
            }
          }
        }

        function finishMaybe(stream, state) {
          var need = needFinish(state);

          if (need) {
            prefinish(stream, state);

            if (state.pendingcb === 0) {
              state.finished = true;
              stream.emit("finish");

              if (state.autoDestroy) {
                var rState = stream._readableState;

                if (!rState || rState.autoDestroy && rState.endEmitted) {
                  stream.destroy();
                }
              }
            }
          }

          return need;
        }

        function endWritable(stream, state, cb) {
          state.ending = true;
          finishMaybe(stream, state);

          if (cb) {
            if (state.finished) process.nextTick(cb);else stream.once("finish", cb);
          }

          state.ended = true;
          stream.writable = false;
        }

        function onCorkedFinish(corkReq, state, err) {
          var entry = corkReq.entry;
          corkReq.entry = null;

          while (entry) {
            var cb = entry.callback;
            state.pendingcb--;
            cb(err);
            entry = entry.next;
          }

          state.corkedRequestsFree.next = corkReq;
        }

        Object.defineProperty(Writable.prototype, "destroyed", {
          enumerable: false,
          get: function get() {
            if (this._writableState === undefined) {
              return false;
            }

            return this._writableState.destroyed;
          },
          set: function set(value) {
            if (!this._writableState) {
              return;
            }

            this._writableState.destroyed = value;
          }
        });
        Writable.prototype.destroy = destroyImpl.destroy;
        Writable.prototype._undestroy = destroyImpl.undestroy;

        Writable.prototype._destroy = function (err, cb) {
          cb(err);
        };

        return exports$4$1;
      }

      var _inherits$1$1 = "default" in _inherits2 ? exports$1$w : _inherits2;

      var exports$3$2 = {},
          _dewExec$3$1 = false;

      function dew$3$1() {
        if (_dewExec$3$1) return exports$3$2;
        _dewExec$3$1 = true;
        var process = process$a;

        var objectKeys = Object.keys || function (obj) {
          var keys = [];

          for (var key in obj) {
            keys.push(key);
          }

          return keys;
        };

        exports$3$2 = Duplex;
        var Readable = dew$9();
        var Writable = dew$4$1();

        _inherits$1$1(Duplex, Readable);

        {
          var keys = objectKeys(Writable.prototype);

          for (var v = 0; v < keys.length; v++) {
            var method = keys[v];
            if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
          }
        }

        function Duplex(options) {
          if (!(this instanceof Duplex)) return new Duplex(options);
          Readable.call(this, options);
          Writable.call(this, options);
          this.allowHalfOpen = true;

          if (options) {
            if (options.readable === false) this.readable = false;
            if (options.writable === false) this.writable = false;

            if (options.allowHalfOpen === false) {
              this.allowHalfOpen = false;
              this.once("end", onend);
            }
          }
        }

        Object.defineProperty(Duplex.prototype, "writableHighWaterMark", {
          enumerable: false,
          get: function get() {
            return this._writableState.highWaterMark;
          }
        });
        Object.defineProperty(Duplex.prototype, "writableBuffer", {
          enumerable: false,
          get: function get() {
            return this._writableState && this._writableState.getBuffer();
          }
        });
        Object.defineProperty(Duplex.prototype, "writableLength", {
          enumerable: false,
          get: function get() {
            return this._writableState.length;
          }
        });

        function onend() {
          if (this._writableState.ended) return;
          process.nextTick(onEndNT, this);
        }

        function onEndNT(self) {
          self.end();
        }

        Object.defineProperty(Duplex.prototype, "destroyed", {
          enumerable: false,
          get: function get() {
            if (this._readableState === undefined || this._writableState === undefined) {
              return false;
            }

            return this._readableState.destroyed && this._writableState.destroyed;
          },
          set: function set(value) {
            if (this._readableState === undefined || this._writableState === undefined) {
              return;
            }

            this._readableState.destroyed = value;
            this._writableState.destroyed = value;
          }
        });
        return exports$3$2;
      }

      var exports$2$3 = {},
          _dewExec$2$1 = false;

      function dew$2$1() {
        if (_dewExec$2$1) return exports$2$3;
        _dewExec$2$1 = true;
        var process = process$a;

        var _Object$setPrototypeO;

        function _defineProperty(obj, key, value) {
          key = _toPropertyKey(key);

          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }

          return obj;
        }

        function _toPropertyKey(arg) {
          var key = _toPrimitive(arg, "string");

          return _typeof(key) === "symbol" ? key : String(key);
        }

        function _toPrimitive(input, hint) {
          if (_typeof(input) !== "object" || input === null) return input;
          var prim = input[Symbol.toPrimitive];

          if (prim !== undefined) {
            var res = prim.call(input, hint || "default");
            if (_typeof(res) !== "object") return res;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }

          return (hint === "string" ? String : Number)(input);
        }

        var finished = dew$a();
        var kLastResolve = Symbol("lastResolve");
        var kLastReject = Symbol("lastReject");
        var kError = Symbol("error");
        var kEnded = Symbol("ended");
        var kLastPromise = Symbol("lastPromise");
        var kHandlePromise = Symbol("handlePromise");
        var kStream = Symbol("stream");

        function createIterResult(value, done) {
          return {
            value: value,
            done: done
          };
        }

        function readAndResolve(iter) {
          var resolve = iter[kLastResolve];

          if (resolve !== null) {
            var data = iter[kStream].read();

            if (data !== null) {
              iter[kLastPromise] = null;
              iter[kLastResolve] = null;
              iter[kLastReject] = null;
              resolve(createIterResult(data, false));
            }
          }
        }

        function onReadable(iter) {
          process.nextTick(readAndResolve, iter);
        }

        function wrapForNext(lastPromise, iter) {
          return function (resolve, reject) {
            lastPromise.then(function () {
              if (iter[kEnded]) {
                resolve(createIterResult(undefined, true));
                return;
              }

              iter[kHandlePromise](resolve, reject);
            }, reject);
          };
        }

        var AsyncIteratorPrototype = Object.getPrototypeOf(function () {});
        var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
          get stream() {
            return this[kStream];
          },

          next: function next() {
            var _this = this;

            var error = this[kError];

            if (error !== null) {
              return Promise.reject(error);
            }

            if (this[kEnded]) {
              return Promise.resolve(createIterResult(undefined, true));
            }

            if (this[kStream].destroyed) {
              return new Promise(function (resolve, reject) {
                process.nextTick(function () {
                  if (_this[kError]) {
                    reject(_this[kError]);
                  } else {
                    resolve(createIterResult(undefined, true));
                  }
                });
              });
            }

            var lastPromise = this[kLastPromise];
            var promise;

            if (lastPromise) {
              promise = new Promise(wrapForNext(lastPromise, this));
            } else {
              var data = this[kStream].read();

              if (data !== null) {
                return Promise.resolve(createIterResult(data, false));
              }

              promise = new Promise(this[kHandlePromise]);
            }

            this[kLastPromise] = promise;
            return promise;
          }
        }, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function () {
          return this;
        }), _defineProperty(_Object$setPrototypeO, "return", function _return() {
          var _this2 = this;

          return new Promise(function (resolve, reject) {
            _this2[kStream].destroy(null, function (err) {
              if (err) {
                reject(err);
                return;
              }

              resolve(createIterResult(undefined, true));
            });
          });
        }), _Object$setPrototypeO), AsyncIteratorPrototype);

        var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator(stream) {
          var _Object$create;

          var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {
            value: stream,
            writable: true
          }), _defineProperty(_Object$create, kLastResolve, {
            value: null,
            writable: true
          }), _defineProperty(_Object$create, kLastReject, {
            value: null,
            writable: true
          }), _defineProperty(_Object$create, kError, {
            value: null,
            writable: true
          }), _defineProperty(_Object$create, kEnded, {
            value: stream._readableState.endEmitted,
            writable: true
          }), _defineProperty(_Object$create, kHandlePromise, {
            value: function value(resolve, reject) {
              var data = iterator[kStream].read();

              if (data) {
                iterator[kLastPromise] = null;
                iterator[kLastResolve] = null;
                iterator[kLastReject] = null;
                resolve(createIterResult(data, false));
              } else {
                iterator[kLastResolve] = resolve;
                iterator[kLastReject] = reject;
              }
            },
            writable: true
          }), _Object$create));
          iterator[kLastPromise] = null;
          finished(stream, function (err) {
            if (err && err.code !== "ERR_STREAM_PREMATURE_CLOSE") {
              var reject = iterator[kLastReject];

              if (reject !== null) {
                iterator[kLastPromise] = null;
                iterator[kLastResolve] = null;
                iterator[kLastReject] = null;
                reject(err);
              }

              iterator[kError] = err;
              return;
            }

            var resolve = iterator[kLastResolve];

            if (resolve !== null) {
              iterator[kLastPromise] = null;
              iterator[kLastResolve] = null;
              iterator[kLastReject] = null;
              resolve(createIterResult(undefined, true));
            }

            iterator[kEnded] = true;
          });
          stream.on("readable", onReadable.bind(null, iterator));
          return iterator;
        };

        exports$2$3 = createReadableStreamAsyncIterator;
        return exports$2$3;
      }

      var exports$1$l = {},
          _dewExec$1$2 = false;

      function dew$1$2() {
        if (_dewExec$1$2) return exports$1$l;
        _dewExec$1$2 = true;

        exports$1$l = function exports$1() {
          throw new Error("Readable.from is not available in the browser");
        };

        return exports$1$l;
      }

      var _events = "default" in _events2 ? y : _events2;

      var _buffer$3 = "default" in _buffer2 ? exports$14 : _buffer2;

      var _inherits$3 = "default" in _inherits2 ? exports$1$w : _inherits2;

      var _string_decoder = "default" in _string_decoder2 ? exports$I : _string_decoder2;

      var exports$G = {},
          _dewExec$9 = false;

      var _global$i = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

      function dew$9() {
        if (_dewExec$9) return exports$G;
        _dewExec$9 = true;
        var process = process$a;
        exports$G = Readable;
        var Duplex;
        Readable.ReadableState = ReadableState;
        _events.EventEmitter;

        var EElistenerCount = function EElistenerCount(emitter, type) {
          return emitter.listeners(type).length;
        };

        var Stream = dew$8$1();
        var Buffer = _buffer$3.Buffer;

        var OurUint8Array = (typeof _global$i !== "undefined" ? _global$i : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function () {};

        function _uint8ArrayToBuffer(chunk) {
          return Buffer.from(chunk);
        }

        function _isUint8Array(obj) {
          return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
        }

        var debugUtil = _util;
        var debug;

        if (debugUtil && debugUtil.debuglog) {
          debug = debugUtil.debuglog("stream");
        } else {
          debug = function debug() {};
        }

        var BufferList = dew$7$1();
        var destroyImpl = dew$6$1();

        var _require = dew$5$1(),
            getHighWaterMark = _require.getHighWaterMark;

        var _require$codes = dew$1$3().codes,
            ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE,
            ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF,
            ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,
            ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
        var StringDecoder;
        var createReadableStreamAsyncIterator;
        var from;

        _inherits$3(Readable, Stream);

        var errorOrDestroy = destroyImpl.errorOrDestroy;
        var kProxyEvents = ["error", "close", "destroy", "pause", "resume"];

        function prependListener(emitter, event, fn) {
          if (typeof emitter.prependListener === "function") return emitter.prependListener(event, fn);
          if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
        }

        function ReadableState(options, stream, isDuplex) {
          Duplex = Duplex || dew$3$1();
          options = options || {};
          if (typeof isDuplex !== "boolean") isDuplex = stream instanceof Duplex;
          this.objectMode = !!options.objectMode;
          if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;
          this.highWaterMark = getHighWaterMark(this, options, "readableHighWaterMark", isDuplex);
          this.buffer = new BufferList();
          this.length = 0;
          this.pipes = null;
          this.pipesCount = 0;
          this.flowing = null;
          this.ended = false;
          this.endEmitted = false;
          this.reading = false;
          this.sync = true;
          this.needReadable = false;
          this.emittedReadable = false;
          this.readableListening = false;
          this.resumeScheduled = false;
          this.paused = true;
          this.emitClose = options.emitClose !== false;
          this.autoDestroy = !!options.autoDestroy;
          this.destroyed = false;
          this.defaultEncoding = options.defaultEncoding || "utf8";
          this.awaitDrain = 0;
          this.readingMore = false;
          this.decoder = null;
          this.encoding = null;

          if (options.encoding) {
            if (!StringDecoder) StringDecoder = _string_decoder.StringDecoder;
            this.decoder = new StringDecoder(options.encoding);
            this.encoding = options.encoding;
          }
        }

        function Readable(options) {
          Duplex = Duplex || dew$3$1();
          if (!(this instanceof Readable)) return new Readable(options);
          var isDuplex = this instanceof Duplex;
          this._readableState = new ReadableState(options, this, isDuplex);
          this.readable = true;

          if (options) {
            if (typeof options.read === "function") this._read = options.read;
            if (typeof options.destroy === "function") this._destroy = options.destroy;
          }

          Stream.call(this);
        }

        Object.defineProperty(Readable.prototype, "destroyed", {
          enumerable: false,
          get: function get() {
            if (this._readableState === undefined) {
              return false;
            }

            return this._readableState.destroyed;
          },
          set: function set(value) {
            if (!this._readableState) {
              return;
            }

            this._readableState.destroyed = value;
          }
        });
        Readable.prototype.destroy = destroyImpl.destroy;
        Readable.prototype._undestroy = destroyImpl.undestroy;

        Readable.prototype._destroy = function (err, cb) {
          cb(err);
        };

        Readable.prototype.push = function (chunk, encoding) {
          var state = this._readableState;
          var skipChunkCheck;

          if (!state.objectMode) {
            if (typeof chunk === "string") {
              encoding = encoding || state.defaultEncoding;

              if (encoding !== state.encoding) {
                chunk = Buffer.from(chunk, encoding);
                encoding = "";
              }

              skipChunkCheck = true;
            }
          } else {
            skipChunkCheck = true;
          }

          return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
        };

        Readable.prototype.unshift = function (chunk) {
          return readableAddChunk(this, chunk, null, true, false);
        };

        function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
          debug("readableAddChunk", chunk);
          var state = stream._readableState;

          if (chunk === null) {
            state.reading = false;
            onEofChunk(stream, state);
          } else {
            var er;
            if (!skipChunkCheck) er = chunkInvalid(state, chunk);

            if (er) {
              errorOrDestroy(stream, er);
            } else if (state.objectMode || chunk && chunk.length > 0) {
              if (typeof chunk !== "string" && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
                chunk = _uint8ArrayToBuffer(chunk);
              }

              if (addToFront) {
                if (state.endEmitted) errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());else addChunk(stream, state, chunk, true);
              } else if (state.ended) {
                errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
              } else if (state.destroyed) {
                return false;
              } else {
                state.reading = false;

                if (state.decoder && !encoding) {
                  chunk = state.decoder.write(chunk);
                  if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);else maybeReadMore(stream, state);
                } else {
                  addChunk(stream, state, chunk, false);
                }
              }
            } else if (!addToFront) {
              state.reading = false;
              maybeReadMore(stream, state);
            }
          }

          return !state.ended && (state.length < state.highWaterMark || state.length === 0);
        }

        function addChunk(stream, state, chunk, addToFront) {
          if (state.flowing && state.length === 0 && !state.sync) {
            state.awaitDrain = 0;
            stream.emit("data", chunk);
          } else {
            state.length += state.objectMode ? 1 : chunk.length;
            if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);
            if (state.needReadable) emitReadable(stream);
          }

          maybeReadMore(stream, state);
        }

        function chunkInvalid(state, chunk) {
          var er;

          if (!_isUint8Array(chunk) && typeof chunk !== "string" && chunk !== undefined && !state.objectMode) {
            er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer", "Uint8Array"], chunk);
          }

          return er;
        }

        Readable.prototype.isPaused = function () {
          return this._readableState.flowing === false;
        };

        Readable.prototype.setEncoding = function (enc) {
          if (!StringDecoder) StringDecoder = _string_decoder.StringDecoder;
          var decoder = new StringDecoder(enc);
          this._readableState.decoder = decoder;
          this._readableState.encoding = this._readableState.decoder.encoding;
          var p = this._readableState.buffer.head;
          var content = "";

          while (p !== null) {
            content += decoder.write(p.data);
            p = p.next;
          }

          this._readableState.buffer.clear();

          if (content !== "") this._readableState.buffer.push(content);
          this._readableState.length = content.length;
          return this;
        };

        var MAX_HWM = 1073741824;

        function computeNewHighWaterMark(n) {
          if (n >= MAX_HWM) {
            n = MAX_HWM;
          } else {
            n--;
            n |= n >>> 1;
            n |= n >>> 2;
            n |= n >>> 4;
            n |= n >>> 8;
            n |= n >>> 16;
            n++;
          }

          return n;
        }

        function howMuchToRead(n, state) {
          if (n <= 0 || state.length === 0 && state.ended) return 0;
          if (state.objectMode) return 1;

          if (n !== n) {
            if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
          }

          if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
          if (n <= state.length) return n;

          if (!state.ended) {
            state.needReadable = true;
            return 0;
          }

          return state.length;
        }

        Readable.prototype.read = function (n) {
          debug("read", n);
          n = parseInt(n, 10);
          var state = this._readableState;
          var nOrig = n;
          if (n !== 0) state.emittedReadable = false;

          if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
            debug("read: emitReadable", state.length, state.ended);
            if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
            return null;
          }

          n = howMuchToRead(n, state);

          if (n === 0 && state.ended) {
            if (state.length === 0) endReadable(this);
            return null;
          }

          var doRead = state.needReadable;
          debug("need readable", doRead);

          if (state.length === 0 || state.length - n < state.highWaterMark) {
            doRead = true;
            debug("length less than watermark", doRead);
          }

          if (state.ended || state.reading) {
            doRead = false;
            debug("reading or ended", doRead);
          } else if (doRead) {
            debug("do read");
            state.reading = true;
            state.sync = true;
            if (state.length === 0) state.needReadable = true;

            this._read(state.highWaterMark);

            state.sync = false;
            if (!state.reading) n = howMuchToRead(nOrig, state);
          }

          var ret;
          if (n > 0) ret = fromList(n, state);else ret = null;

          if (ret === null) {
            state.needReadable = state.length <= state.highWaterMark;
            n = 0;
          } else {
            state.length -= n;
            state.awaitDrain = 0;
          }

          if (state.length === 0) {
            if (!state.ended) state.needReadable = true;
            if (nOrig !== n && state.ended) endReadable(this);
          }

          if (ret !== null) this.emit("data", ret);
          return ret;
        };

        function onEofChunk(stream, state) {
          debug("onEofChunk");
          if (state.ended) return;

          if (state.decoder) {
            var chunk = state.decoder.end();

            if (chunk && chunk.length) {
              state.buffer.push(chunk);
              state.length += state.objectMode ? 1 : chunk.length;
            }
          }

          state.ended = true;

          if (state.sync) {
            emitReadable(stream);
          } else {
            state.needReadable = false;

            if (!state.emittedReadable) {
              state.emittedReadable = true;
              emitReadable_(stream);
            }
          }
        }

        function emitReadable(stream) {
          var state = stream._readableState;
          debug("emitReadable", state.needReadable, state.emittedReadable);
          state.needReadable = false;

          if (!state.emittedReadable) {
            debug("emitReadable", state.flowing);
            state.emittedReadable = true;
            process.nextTick(emitReadable_, stream);
          }
        }

        function emitReadable_(stream) {
          var state = stream._readableState;
          debug("emitReadable_", state.destroyed, state.length, state.ended);

          if (!state.destroyed && (state.length || state.ended)) {
            stream.emit("readable");
            state.emittedReadable = false;
          }

          state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
          flow(stream);
        }

        function maybeReadMore(stream, state) {
          if (!state.readingMore) {
            state.readingMore = true;
            process.nextTick(maybeReadMore_, stream, state);
          }
        }

        function maybeReadMore_(stream, state) {
          while (!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)) {
            var len = state.length;
            debug("maybeReadMore read 0");
            stream.read(0);
            if (len === state.length) break;
          }

          state.readingMore = false;
        }

        Readable.prototype._read = function (n) {
          errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED("_read()"));
        };

        Readable.prototype.pipe = function (dest, pipeOpts) {
          var src = this;
          var state = this._readableState;

          switch (state.pipesCount) {
            case 0:
              state.pipes = dest;
              break;

            case 1:
              state.pipes = [state.pipes, dest];
              break;

            default:
              state.pipes.push(dest);
              break;
          }

          state.pipesCount += 1;
          debug("pipe count=%d opts=%j", state.pipesCount, pipeOpts);
          var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
          var endFn = doEnd ? onend : unpipe;
          if (state.endEmitted) process.nextTick(endFn);else src.once("end", endFn);
          dest.on("unpipe", onunpipe);

          function onunpipe(readable, unpipeInfo) {
            debug("onunpipe");

            if (readable === src) {
              if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
                unpipeInfo.hasUnpiped = true;
                cleanup();
              }
            }
          }

          function onend() {
            debug("onend");
            dest.end();
          }

          var ondrain = pipeOnDrain(src);
          dest.on("drain", ondrain);
          var cleanedUp = false;

          function cleanup() {
            debug("cleanup");
            dest.removeListener("close", onclose);
            dest.removeListener("finish", onfinish);
            dest.removeListener("drain", ondrain);
            dest.removeListener("error", onerror);
            dest.removeListener("unpipe", onunpipe);
            src.removeListener("end", onend);
            src.removeListener("end", unpipe);
            src.removeListener("data", ondata);
            cleanedUp = true;
            if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
          }

          src.on("data", ondata);

          function ondata(chunk) {
            debug("ondata");
            var ret = dest.write(chunk);
            debug("dest.write", ret);

            if (ret === false) {
              if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
                debug("false write response, pause", state.awaitDrain);
                state.awaitDrain++;
              }

              src.pause();
            }
          }

          function onerror(er) {
            debug("onerror", er);
            unpipe();
            dest.removeListener("error", onerror);
            if (EElistenerCount(dest, "error") === 0) errorOrDestroy(dest, er);
          }

          prependListener(dest, "error", onerror);

          function onclose() {
            dest.removeListener("finish", onfinish);
            unpipe();
          }

          dest.once("close", onclose);

          function onfinish() {
            debug("onfinish");
            dest.removeListener("close", onclose);
            unpipe();
          }

          dest.once("finish", onfinish);

          function unpipe() {
            debug("unpipe");
            src.unpipe(dest);
          }

          dest.emit("pipe", src);

          if (!state.flowing) {
            debug("pipe resume");
            src.resume();
          }

          return dest;
        };

        function pipeOnDrain(src) {
          return function pipeOnDrainFunctionResult() {
            var state = src._readableState;
            debug("pipeOnDrain", state.awaitDrain);
            if (state.awaitDrain) state.awaitDrain--;

            if (state.awaitDrain === 0 && EElistenerCount(src, "data")) {
              state.flowing = true;
              flow(src);
            }
          };
        }

        Readable.prototype.unpipe = function (dest) {
          var state = this._readableState;
          var unpipeInfo = {
            hasUnpiped: false
          };
          if (state.pipesCount === 0) return this;

          if (state.pipesCount === 1) {
            if (dest && dest !== state.pipes) return this;
            if (!dest) dest = state.pipes;
            state.pipes = null;
            state.pipesCount = 0;
            state.flowing = false;
            if (dest) dest.emit("unpipe", this, unpipeInfo);
            return this;
          }

          if (!dest) {
            var dests = state.pipes;
            var len = state.pipesCount;
            state.pipes = null;
            state.pipesCount = 0;
            state.flowing = false;

            for (var i = 0; i < len; i++) {
              dests[i].emit("unpipe", this, {
                hasUnpiped: false
              });
            }

            return this;
          }

          var index = indexOf(state.pipes, dest);
          if (index === -1) return this;
          state.pipes.splice(index, 1);
          state.pipesCount -= 1;
          if (state.pipesCount === 1) state.pipes = state.pipes[0];
          dest.emit("unpipe", this, unpipeInfo);
          return this;
        };

        Readable.prototype.on = function (ev, fn) {
          var res = Stream.prototype.on.call(this, ev, fn);
          var state = this._readableState;

          if (ev === "data") {
            state.readableListening = this.listenerCount("readable") > 0;
            if (state.flowing !== false) this.resume();
          } else if (ev === "readable") {
            if (!state.endEmitted && !state.readableListening) {
              state.readableListening = state.needReadable = true;
              state.flowing = false;
              state.emittedReadable = false;
              debug("on readable", state.length, state.reading);

              if (state.length) {
                emitReadable(this);
              } else if (!state.reading) {
                process.nextTick(nReadingNextTick, this);
              }
            }
          }

          return res;
        };

        Readable.prototype.addListener = Readable.prototype.on;

        Readable.prototype.removeListener = function (ev, fn) {
          var res = Stream.prototype.removeListener.call(this, ev, fn);

          if (ev === "readable") {
            process.nextTick(updateReadableListening, this);
          }

          return res;
        };

        Readable.prototype.removeAllListeners = function (ev) {
          var res = Stream.prototype.removeAllListeners.apply(this, arguments);

          if (ev === "readable" || ev === undefined) {
            process.nextTick(updateReadableListening, this);
          }

          return res;
        };

        function updateReadableListening(self) {
          var state = self._readableState;
          state.readableListening = self.listenerCount("readable") > 0;

          if (state.resumeScheduled && !state.paused) {
            state.flowing = true;
          } else if (self.listenerCount("data") > 0) {
            self.resume();
          }
        }

        function nReadingNextTick(self) {
          debug("readable nexttick read 0");
          self.read(0);
        }

        Readable.prototype.resume = function () {
          var state = this._readableState;

          if (!state.flowing) {
            debug("resume");
            state.flowing = !state.readableListening;
            resume(this, state);
          }

          state.paused = false;
          return this;
        };

        function resume(stream, state) {
          if (!state.resumeScheduled) {
            state.resumeScheduled = true;
            process.nextTick(resume_, stream, state);
          }
        }

        function resume_(stream, state) {
          debug("resume", state.reading);

          if (!state.reading) {
            stream.read(0);
          }

          state.resumeScheduled = false;
          stream.emit("resume");
          flow(stream);
          if (state.flowing && !state.reading) stream.read(0);
        }

        Readable.prototype.pause = function () {
          debug("call pause flowing=%j", this._readableState.flowing);

          if (this._readableState.flowing !== false) {
            debug("pause");
            this._readableState.flowing = false;
            this.emit("pause");
          }

          this._readableState.paused = true;
          return this;
        };

        function flow(stream) {
          var state = stream._readableState;
          debug("flow", state.flowing);

          while (state.flowing && stream.read() !== null) {
          }
        }

        Readable.prototype.wrap = function (stream) {
          var _this = this;

          var state = this._readableState;
          var paused = false;
          stream.on("end", function () {
            debug("wrapped end");

            if (state.decoder && !state.ended) {
              var chunk = state.decoder.end();
              if (chunk && chunk.length) _this.push(chunk);
            }

            _this.push(null);
          });
          stream.on("data", function (chunk) {
            debug("wrapped data");
            if (state.decoder) chunk = state.decoder.write(chunk);
            if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

            var ret = _this.push(chunk);

            if (!ret) {
              paused = true;
              stream.pause();
            }
          });

          for (var i in stream) {
            if (this[i] === undefined && typeof stream[i] === "function") {
              this[i] = function methodWrap(method) {
                return function methodWrapReturnFunction() {
                  return stream[method].apply(stream, arguments);
                };
              }(i);
            }
          }

          for (var n = 0; n < kProxyEvents.length; n++) {
            stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
          }

          this._read = function (n) {
            debug("wrapped _read", n);

            if (paused) {
              paused = false;
              stream.resume();
            }
          };

          return this;
        };

        if (typeof Symbol === "function") {
          Readable.prototype[Symbol.asyncIterator] = function () {
            if (createReadableStreamAsyncIterator === undefined) {
              createReadableStreamAsyncIterator = dew$2$1();
            }

            return createReadableStreamAsyncIterator(this);
          };
        }

        Object.defineProperty(Readable.prototype, "readableHighWaterMark", {
          enumerable: false,
          get: function get() {
            return this._readableState.highWaterMark;
          }
        });
        Object.defineProperty(Readable.prototype, "readableBuffer", {
          enumerable: false,
          get: function get() {
            return this._readableState && this._readableState.buffer;
          }
        });
        Object.defineProperty(Readable.prototype, "readableFlowing", {
          enumerable: false,
          get: function get() {
            return this._readableState.flowing;
          },
          set: function set(state) {
            if (this._readableState) {
              this._readableState.flowing = state;
            }
          }
        });
        Readable._fromList = fromList;
        Object.defineProperty(Readable.prototype, "readableLength", {
          enumerable: false,
          get: function get() {
            return this._readableState.length;
          }
        });

        function fromList(n, state) {
          if (state.length === 0) return null;
          var ret;
          if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
            if (state.decoder) ret = state.buffer.join("");else if (state.buffer.length === 1) ret = state.buffer.first();else ret = state.buffer.concat(state.length);
            state.buffer.clear();
          } else {
            ret = state.buffer.consume(n, state.decoder);
          }
          return ret;
        }

        function endReadable(stream) {
          var state = stream._readableState;
          debug("endReadable", state.endEmitted);

          if (!state.endEmitted) {
            state.ended = true;
            process.nextTick(endReadableNT, state, stream);
          }
        }

        function endReadableNT(state, stream) {
          debug("endReadableNT", state.endEmitted, state.length);

          if (!state.endEmitted && state.length === 0) {
            state.endEmitted = true;
            stream.readable = false;
            stream.emit("end");

            if (state.autoDestroy) {
              var wState = stream._writableState;

              if (!wState || wState.autoDestroy && wState.finished) {
                stream.destroy();
              }
            }
          }
        }

        if (typeof Symbol === "function") {
          Readable.from = function (iterable, opts) {
            if (from === undefined) {
              from = dew$1$2();
            }

            return from(Readable, iterable, opts);
          };
        }

        function indexOf(xs, x) {
          for (var i = 0, l = xs.length; i < l; i++) {
            if (xs[i] === x) return i;
          }

          return -1;
        }

        return exports$G;
      }

      var _inherits$1 = "default" in _inherits2 ? exports$1$w : _inherits2;

      var exports$F = {},
          _dewExec$8 = false;

      function dew$8() {
        if (_dewExec$8) return exports$F;
        _dewExec$8 = true;
        exports$F = Transform;
        var _require$codes = dew$1$3().codes,
            ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,
            ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK,
            ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING,
            ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;
        var Duplex = dew$3$1();

        _inherits$1(Transform, Duplex);

        function afterTransform(er, data) {
          var ts = this._transformState;
          ts.transforming = false;
          var cb = ts.writecb;

          if (cb === null) {
            return this.emit("error", new ERR_MULTIPLE_CALLBACK());
          }

          ts.writechunk = null;
          ts.writecb = null;
          if (data != null) this.push(data);
          cb(er);
          var rs = this._readableState;
          rs.reading = false;

          if (rs.needReadable || rs.length < rs.highWaterMark) {
            this._read(rs.highWaterMark);
          }
        }

        function Transform(options) {
          if (!(this instanceof Transform)) return new Transform(options);
          Duplex.call(this, options);
          this._transformState = {
            afterTransform: afterTransform.bind(this),
            needTransform: false,
            transforming: false,
            writecb: null,
            writechunk: null,
            writeencoding: null
          };
          this._readableState.needReadable = true;
          this._readableState.sync = false;

          if (options) {
            if (typeof options.transform === "function") this._transform = options.transform;
            if (typeof options.flush === "function") this._flush = options.flush;
          }

          this.on("prefinish", prefinish);
        }

        function prefinish() {
          var _this = this;

          if (typeof this._flush === "function" && !this._readableState.destroyed) {
            this._flush(function (er, data) {
              done(_this, er, data);
            });
          } else {
            done(this, null, null);
          }
        }

        Transform.prototype.push = function (chunk, encoding) {
          this._transformState.needTransform = false;
          return Duplex.prototype.push.call(this, chunk, encoding);
        };

        Transform.prototype._transform = function (chunk, encoding, cb) {
          cb(new ERR_METHOD_NOT_IMPLEMENTED("_transform()"));
        };

        Transform.prototype._write = function (chunk, encoding, cb) {
          var ts = this._transformState;
          ts.writecb = cb;
          ts.writechunk = chunk;
          ts.writeencoding = encoding;

          if (!ts.transforming) {
            var rs = this._readableState;
            if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
          }
        };

        Transform.prototype._read = function (n) {
          var ts = this._transformState;

          if (ts.writechunk !== null && !ts.transforming) {
            ts.transforming = true;

            this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
          } else {
            ts.needTransform = true;
          }
        };

        Transform.prototype._destroy = function (err, cb) {
          Duplex.prototype._destroy.call(this, err, function (err2) {
            cb(err2);
          });
        };

        function done(stream, er, data) {
          if (er) return stream.emit("error", er);
          if (data != null) stream.push(data);
          if (stream._writableState.length) throw new ERR_TRANSFORM_WITH_LENGTH_0();
          if (stream._transformState.transforming) throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
          return stream.push(null);
        }

        return exports$F;
      }

      var _inherits = "default" in _inherits2 ? exports$1$w : _inherits2;

      var exports$E = {},
          _dewExec$7 = false;

      function dew$7() {
        if (_dewExec$7) return exports$E;
        _dewExec$7 = true;
        exports$E = PassThrough;
        var Transform = dew$8();

        _inherits(PassThrough, Transform);

        function PassThrough(options) {
          if (!(this instanceof PassThrough)) return new PassThrough(options);
          Transform.call(this, options);
        }

        PassThrough.prototype._transform = function (chunk, encoding, cb) {
          cb(null, chunk);
        };

        return exports$E;
      }

      var exports$D = {},
          _dewExec$6 = false;

      function dew$6() {
        if (_dewExec$6) return exports$D;
        _dewExec$6 = true;
        var eos;

        function once(callback) {
          var called = false;
          return function () {
            if (called) return;
            called = true;
            callback.apply(void 0, arguments);
          };
        }

        var _require$codes = dew$1$3().codes,
            ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS,
            ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;

        function noop(err) {
          if (err) throw err;
        }

        function isRequest(stream) {
          return stream.setHeader && typeof stream.abort === "function";
        }

        function destroyer(stream, reading, writing, callback) {
          callback = once(callback);
          var closed = false;
          stream.on("close", function () {
            closed = true;
          });
          if (eos === undefined) eos = dew$a();
          eos(stream, {
            readable: reading,
            writable: writing
          }, function (err) {
            if (err) return callback(err);
            closed = true;
            callback();
          });
          var destroyed = false;
          return function (err) {
            if (closed) return;
            if (destroyed) return;
            destroyed = true;
            if (isRequest(stream)) return stream.abort();
            if (typeof stream.destroy === "function") return stream.destroy();
            callback(err || new ERR_STREAM_DESTROYED("pipe"));
          };
        }

        function call(fn) {
          fn();
        }

        function pipe(from, to) {
          return from.pipe(to);
        }

        function popCallback(streams) {
          if (!streams.length) return noop;
          if (typeof streams[streams.length - 1] !== "function") return noop;
          return streams.pop();
        }

        function pipeline() {
          for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
            streams[_key] = arguments[_key];
          }

          var callback = popCallback(streams);
          if (Array.isArray(streams[0])) streams = streams[0];

          if (streams.length < 2) {
            throw new ERR_MISSING_ARGS("streams");
          }

          var error;
          var destroys = streams.map(function (stream, i) {
            var reading = i < streams.length - 1;
            var writing = i > 0;
            return destroyer(stream, reading, writing, function (err) {
              if (!error) error = err;
              if (err) destroys.forEach(call);
              if (reading) return;
              destroys.forEach(call);
              callback(error);
            });
          });
          return streams.reduce(pipe);
        }

        exports$D = pipeline;
        return exports$D;
      }

      var exports$1$k = {}, _dewExec$5 = false;
      function dew$5() {
        if (_dewExec$5)
          return exports$1$k;
        _dewExec$5 = true;
        exports$1$k = exports$1$k = dew$9();
        exports$1$k.Stream = exports$1$k;
        exports$1$k.Readable = exports$1$k;
        exports$1$k.Writable = dew$4$1();
        exports$1$k.Duplex = dew$3$1();
        exports$1$k.Transform = dew$8();
        exports$1$k.PassThrough = dew$7();
        exports$1$k.finished = dew$a();
        exports$1$k.pipeline = dew$6();
        return exports$1$k;
      }
      const exports$C = dew$5();
      exports$C["Stream"]; exports$C["Readable"]; exports$C["Writable"]; exports$C["Duplex"]; exports$C["Transform"]; exports$C["PassThrough"]; exports$C["finished"]; exports$C["pipeline"];

      var _global$h = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
      var exports$B = {};
      var inherits$4 = exports$1$w;
      var Readable$1 = exports$C.Readable;
      var extend$1 = exports$1$q;
      exports$B = ReadStream$1;
      inherits$4(ReadStream$1, Readable$1);
      function ReadStream$1(iterator, options) {
        if (!((this || _global$h) instanceof ReadStream$1))
          return new ReadStream$1(iterator, options);
        options = options || {};
        Readable$1.call(this || _global$h, extend$1(options, { objectMode: true }));
        (this || _global$h)._iterator = iterator;
        (this || _global$h)._options = options;
        this.on("end", (this || _global$h).destroy.bind(this || _global$h, null, null));
      }
      ReadStream$1.prototype._read = function () {
        var self = this || _global$h;
        var options = (this || _global$h)._options;
        if ((this || _global$h).destroyed)
          return;
        (this || _global$h)._iterator.next(function (err, key, value) {
          if (self.destroyed)
            return;
          if (err)
            return self.destroy(err);
          if (key === undefined && value === undefined) {
            self.push(null);
          } else if (options.keys !== false && options.values === false) {
            self.push(key);
          } else if (options.keys === false && options.values !== false) {
            self.push(value);
          } else {
            self.push({
              key: key,
              value: value
            });
          }
        });
      };
      ReadStream$1.prototype._destroy = function (err, callback) {
        (this || _global$h)._iterator.end(function (err2) {
          callback(err || err2);
        });
      };
      var exports$1$j = exports$B;

      var exports$A = {};
      (function (name, context, definition) {
        if (exports$A)
          exports$A = definition();
        else
          context[name] = definition();
      }("prr", exports$A, function () {
        var setProperty = typeof Object.defineProperty == "function" ? function (obj, key, options) {
            Object.defineProperty(obj, key, options);
            return obj;
          } : function (obj, key, options) {
            obj[key] = options.value;
            return obj;
          }, makeOptions = function (value, options) {
            var oo = typeof options == "object", os = !oo && typeof options == "string", op = function (p) {
                return oo ? !!options[p] : os ? options.indexOf(p[0]) > -1 : false;
              };
            return {
              enumerable: op("enumerable"),
              configurable: op("configurable"),
              writable: op("writable"),
              value: value
            };
          }, prr = function (obj, key, value, options) {
            var k;
            options = makeOptions(value, options);
            if (typeof key == "object") {
              for (k in key) {
                if (Object.hasOwnProperty.call(key, k)) {
                  options.value = key[k];
                  setProperty(obj, k, options);
                }
              }
              return obj;
            }
            return setProperty(obj, key, options);
          };
        return prr;
      }));
      var exports$1$i = exports$A;

      var _global$g = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
      var exports$z = {};
      var prr = exports$1$i;
      function init(type, message, cause) {
        if (!!message && typeof message != "string") {
          message = message.message || message.name;
        }
        prr(this || _global$g, {
          type: type,
          name: type,
          cause: typeof message != "string" ? message : cause,
          message: message
        }, "ewr");
      }
      function CustomError(message, cause) {
        Error.call(this || _global$g);
        if (Error.captureStackTrace)
          Error.captureStackTrace(this || _global$g, (this || _global$g).constructor);
        init.call(this || _global$g, "CustomError", message, cause);
      }
      CustomError.prototype = new Error();
      function createError$1(errno, type, proto) {
        var err = function (message, cause) {
          init.call(this || _global$g, type, message, cause);
          if (type == "FilesystemError") {
            (this || _global$g).code = (this || _global$g).cause.code;
            (this || _global$g).path = (this || _global$g).cause.path;
            (this || _global$g).errno = (this || _global$g).cause.errno;
            (this || _global$g).message = (errno.errno[(this || _global$g).cause.errno] ? errno.errno[(this || _global$g).cause.errno].description : (this || _global$g).cause.message) + ((this || _global$g).cause.path ? " [" + (this || _global$g).cause.path + "]" : "");
          }
          Error.call(this || _global$g);
          if (Error.captureStackTrace)
            Error.captureStackTrace(this || _global$g, err);
        };
        err.prototype = !!proto ? new proto() : new CustomError();
        return err;
      }
      exports$z = function (errno) {
        var ce = function (type, proto) {
          return createError$1(errno, type, proto);
        };
        return {
          CustomError: CustomError,
          FilesystemError: ce("FilesystemError"),
          createError: ce
        };
      };
      var _custom = exports$z;
      var exports$1$h = {};
      var all = exports$1$h.all = [
        {
          errno: -2,
          code: "ENOENT",
          description: "no such file or directory"
        },
        {
          errno: -1,
          code: "UNKNOWN",
          description: "unknown error"
        },
        {
          errno: 0,
          code: "OK",
          description: "success"
        },
        {
          errno: 1,
          code: "EOF",
          description: "end of file"
        },
        {
          errno: 2,
          code: "EADDRINFO",
          description: "getaddrinfo error"
        },
        {
          errno: 3,
          code: "EACCES",
          description: "permission denied"
        },
        {
          errno: 4,
          code: "EAGAIN",
          description: "resource temporarily unavailable"
        },
        {
          errno: 5,
          code: "EADDRINUSE",
          description: "address already in use"
        },
        {
          errno: 6,
          code: "EADDRNOTAVAIL",
          description: "address not available"
        },
        {
          errno: 7,
          code: "EAFNOSUPPORT",
          description: "address family not supported"
        },
        {
          errno: 8,
          code: "EALREADY",
          description: "connection already in progress"
        },
        {
          errno: 9,
          code: "EBADF",
          description: "bad file descriptor"
        },
        {
          errno: 10,
          code: "EBUSY",
          description: "resource busy or locked"
        },
        {
          errno: 11,
          code: "ECONNABORTED",
          description: "software caused connection abort"
        },
        {
          errno: 12,
          code: "ECONNREFUSED",
          description: "connection refused"
        },
        {
          errno: 13,
          code: "ECONNRESET",
          description: "connection reset by peer"
        },
        {
          errno: 14,
          code: "EDESTADDRREQ",
          description: "destination address required"
        },
        {
          errno: 15,
          code: "EFAULT",
          description: "bad address in system call argument"
        },
        {
          errno: 16,
          code: "EHOSTUNREACH",
          description: "host is unreachable"
        },
        {
          errno: 17,
          code: "EINTR",
          description: "interrupted system call"
        },
        {
          errno: 18,
          code: "EINVAL",
          description: "invalid argument"
        },
        {
          errno: 19,
          code: "EISCONN",
          description: "socket is already connected"
        },
        {
          errno: 20,
          code: "EMFILE",
          description: "too many open files"
        },
        {
          errno: 21,
          code: "EMSGSIZE",
          description: "message too long"
        },
        {
          errno: 22,
          code: "ENETDOWN",
          description: "network is down"
        },
        {
          errno: 23,
          code: "ENETUNREACH",
          description: "network is unreachable"
        },
        {
          errno: 24,
          code: "ENFILE",
          description: "file table overflow"
        },
        {
          errno: 25,
          code: "ENOBUFS",
          description: "no buffer space available"
        },
        {
          errno: 26,
          code: "ENOMEM",
          description: "not enough memory"
        },
        {
          errno: 27,
          code: "ENOTDIR",
          description: "not a directory"
        },
        {
          errno: 28,
          code: "EISDIR",
          description: "illegal operation on a directory"
        },
        {
          errno: 29,
          code: "ENONET",
          description: "machine is not on the network"
        },
        {
          errno: 31,
          code: "ENOTCONN",
          description: "socket is not connected"
        },
        {
          errno: 32,
          code: "ENOTSOCK",
          description: "socket operation on non-socket"
        },
        {
          errno: 33,
          code: "ENOTSUP",
          description: "operation not supported on socket"
        },
        {
          errno: 34,
          code: "ENOENT",
          description: "no such file or directory"
        },
        {
          errno: 35,
          code: "ENOSYS",
          description: "function not implemented"
        },
        {
          errno: 36,
          code: "EPIPE",
          description: "broken pipe"
        },
        {
          errno: 37,
          code: "EPROTO",
          description: "protocol error"
        },
        {
          errno: 38,
          code: "EPROTONOSUPPORT",
          description: "protocol not supported"
        },
        {
          errno: 39,
          code: "EPROTOTYPE",
          description: "protocol wrong type for socket"
        },
        {
          errno: 40,
          code: "ETIMEDOUT",
          description: "connection timed out"
        },
        {
          errno: 41,
          code: "ECHARSET",
          description: "invalid Unicode character"
        },
        {
          errno: 42,
          code: "EAIFAMNOSUPPORT",
          description: "address family for hostname not supported"
        },
        {
          errno: 44,
          code: "EAISERVICE",
          description: "servname not supported for ai_socktype"
        },
        {
          errno: 45,
          code: "EAISOCKTYPE",
          description: "ai_socktype not supported"
        },
        {
          errno: 46,
          code: "ESHUTDOWN",
          description: "cannot send after transport endpoint shutdown"
        },
        {
          errno: 47,
          code: "EEXIST",
          description: "file already exists"
        },
        {
          errno: 48,
          code: "ESRCH",
          description: "no such process"
        },
        {
          errno: 49,
          code: "ENAMETOOLONG",
          description: "name too long"
        },
        {
          errno: 50,
          code: "EPERM",
          description: "operation not permitted"
        },
        {
          errno: 51,
          code: "ELOOP",
          description: "too many symbolic links encountered"
        },
        {
          errno: 52,
          code: "EXDEV",
          description: "cross-device link not permitted"
        },
        {
          errno: 53,
          code: "ENOTEMPTY",
          description: "directory not empty"
        },
        {
          errno: 54,
          code: "ENOSPC",
          description: "no space left on device"
        },
        {
          errno: 55,
          code: "EIO",
          description: "i/o error"
        },
        {
          errno: 56,
          code: "EROFS",
          description: "read-only file system"
        },
        {
          errno: 57,
          code: "ENODEV",
          description: "no such device"
        },
        {
          errno: 58,
          code: "ESPIPE",
          description: "invalid seek"
        },
        {
          errno: 59,
          code: "ECANCELED",
          description: "operation canceled"
        }
      ];
      exports$1$h.errno = {};
      exports$1$h.code = {};
      all.forEach(function (error) {
        exports$1$h.errno[error.errno] = error;
        exports$1$h.code[error.code] = error;
      });
      exports$1$h.custom = _custom(exports$1$h);
      exports$1$h.create = exports$1$h.custom.createError;
      exports$1$h.errno; exports$1$h.code; exports$1$h.custom; exports$1$h.create;
      exports$1$h.all;

      var exports$y = {};
      var createError = exports$1$h.create;
      var LevelUPError = createError("LevelUPError");
      var NotFoundError$2 = createError("NotFoundError", LevelUPError);
      NotFoundError$2.prototype.notFound = true;
      NotFoundError$2.prototype.status = 404;
      exports$y = {
        LevelUPError: LevelUPError,
        InitializationError: createError("InitializationError", LevelUPError),
        OpenError: createError("OpenError", LevelUPError),
        ReadError: createError("ReadError", LevelUPError),
        WriteError: createError("WriteError", LevelUPError),
        NotFoundError: NotFoundError$2,
        EncodingError: createError("EncodingError", LevelUPError)
      };
      var exports$1$g = exports$y;
      exports$y.InitializationError;
      exports$y.LevelUPError;

      var exports$x = {};

      function promisify$1() {
        var callback;
        var promise = new Promise(function (resolve, reject) {
          callback = function callback(err, value) {
            if (err) reject(err);else resolve(value);
          };
        });
        callback.promise = promise;
        return callback;
      }

      exports$x = promisify$1;
      var _promisify = exports$x;
      var exports$1$f = {};

      exports$1$f.getCallback = function (options, callback) {
        return typeof options === "function" ? options : callback;
      };

      exports$1$f.getOptions = function (options) {
        return _typeof(options) === "object" && options !== null ? options : {};
      };

      var _global$f = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

      var exports$2$2 = {};
      var WriteError$1 = exports$1$g.WriteError;
      var promisify$1$1 = _promisify;
      var getCallback$1 = exports$1$f.getCallback;
      var getOptions$1 = exports$1$f.getOptions;

      function Batch$1(levelup) {
        (this || _global$f)._levelup = levelup;
        (this || _global$f).batch = levelup.db.batch();
        (this || _global$f).ops = [];
        (this || _global$f).length = 0;
      }

      Batch$1.prototype.put = function (key, value) {
        try {
          (this || _global$f).batch.put(key, value);
        } catch (e) {
          throw new WriteError$1(e);
        }

        (this || _global$f).ops.push({
          type: "put",
          key: key,
          value: value
        });

        (this || _global$f).length++;
        return this || _global$f;
      };

      Batch$1.prototype.del = function (key) {
        try {
          (this || _global$f).batch.del(key);
        } catch (err) {
          throw new WriteError$1(err);
        }

        (this || _global$f).ops.push({
          type: "del",
          key: key
        });

        (this || _global$f).length++;
        return this || _global$f;
      };

      Batch$1.prototype.clear = function () {
        try {
          (this || _global$f).batch.clear();
        } catch (err) {
          throw new WriteError$1(err);
        }

        (this || _global$f).ops = [];
        (this || _global$f).length = 0;
        return this || _global$f;
      };

      Batch$1.prototype.write = function (options, callback) {
        var levelup = (this || _global$f)._levelup;
        var ops = (this || _global$f).ops;
        var promise;
        callback = getCallback$1(options, callback);

        if (!callback) {
          callback = promisify$1$1();
          promise = callback.promise;
        }

        options = getOptions$1(options);

        try {
          (this || _global$f).batch.write(options, function (err) {
            if (err) {
              return callback(new WriteError$1(err));
            }

            levelup.emit("batch", ops);
            callback();
          });
        } catch (err) {
          throw new WriteError$1(err);
        }

        return promise;
      };

      exports$2$2 = Batch$1;
      var _batch = exports$2$2;

      var _global$e = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
      var exports$w = {};
      var process$6 = process$a;
      var EventEmitter$1 = y.EventEmitter;
      var inherits$3 = X.inherits;
      var extend = exports$1$q;
      var DeferredLevelDOWN = exports$2$4;
      var IteratorStream = exports$1$j;
      var Batch = _batch;
      var errors = exports$1$g;
      var assert = et;
      var promisify = _promisify;
      var getCallback = exports$1$f.getCallback;
      var getOptions = exports$1$f.getOptions;
      var WriteError = errors.WriteError;
      var ReadError = errors.ReadError;
      var NotFoundError$1 = errors.NotFoundError;
      var OpenError = errors.OpenError;
      var InitializationError = errors.InitializationError;
      function LevelUP(db, options, callback) {
        if (!((this || _global$e) instanceof LevelUP)) {
          return new LevelUP(db, options, callback);
        }
        var error;
        EventEmitter$1.call(this || _global$e);
        this.setMaxListeners(Infinity);
        if (typeof options === "function") {
          callback = options;
          options = {};
        }
        options = options || {};
        if (!db || typeof db !== "object") {
          error = new InitializationError("First argument must be an abstract-leveldown compliant store");
          if (typeof callback === "function") {
            return process$6.nextTick(callback, error);
          }
          throw error;
        }
        assert.strictEqual(typeof db.status, "string", ".status required, old abstract-leveldown");
        (this || _global$e).options = getOptions(options);
        (this || _global$e)._db = db;
        (this || _global$e).db = new DeferredLevelDOWN(db);
        this.open(callback);
      }
      LevelUP.prototype.emit = EventEmitter$1.prototype.emit;
      LevelUP.prototype.once = EventEmitter$1.prototype.once;
      inherits$3(LevelUP, EventEmitter$1);
      LevelUP.prototype.open = function (opts, callback) {
        var self = this || _global$e;
        var promise;
        if (typeof opts === "function") {
          callback = opts;
          opts = null;
        }
        if (!callback) {
          callback = promisify();
          promise = callback.promise;
        }
        if (!opts) {
          opts = (this || _global$e).options;
        }
        if (this.isOpen()) {
          process$6.nextTick(callback, null, self);
          return promise;
        }
        if (this._isOpening()) {
          this.once("open", function () {
            callback(null, self);
          });
          return promise;
        }
        this.emit("opening");
        (this || _global$e).db.open(opts, function (err) {
          if (err) {
            return callback(new OpenError(err));
          }
          self.db = self._db;
          callback(null, self);
          self.emit("open");
          self.emit("ready");
        });
        return promise;
      };
      LevelUP.prototype.close = function (callback) {
        var self = this || _global$e;
        var promise;
        if (!callback) {
          callback = promisify();
          promise = callback.promise;
        }
        if (this.isOpen()) {
          (this || _global$e).db.close(function () {
            self.emit("closed");
            callback.apply(null, arguments);
          });
          this.emit("closing");
          (this || _global$e).db = new DeferredLevelDOWN((this || _global$e)._db);
        } else if (this.isClosed()) {
          process$6.nextTick(callback);
        } else if ((this || _global$e).db.status === "closing") {
          this.once("closed", callback);
        } else if (this._isOpening()) {
          this.once("open", function () {
            self.close(callback);
          });
        }
        return promise;
      };
      LevelUP.prototype.isOpen = function () {
        return (this || _global$e).db.status === "open";
      };
      LevelUP.prototype._isOpening = function () {
        return (this || _global$e).db.status === "opening";
      };
      LevelUP.prototype.isClosed = function () {
        return /^clos|new/.test((this || _global$e).db.status);
      };
      LevelUP.prototype.get = function (key, options, callback) {
        if (key === null || key === undefined) {
          throw new ReadError("get() requires a key argument");
        }
        var promise;
        callback = getCallback(options, callback);
        if (!callback) {
          callback = promisify();
          promise = callback.promise;
        }
        if (maybeError(this || _global$e, callback)) {
          return promise;
        }
        options = getOptions(options);
        (this || _global$e).db.get(key, options, function (err, value) {
          if (err) {
            if (/notfound/i.test(err) || err.notFound) {
              err = new NotFoundError$1("Key not found in database [" + key + "]", err);
            } else {
              err = new ReadError(err);
            }
            return callback(err);
          }
          callback(null, value);
        });
        return promise;
      };
      LevelUP.prototype.put = function (key, value, options, callback) {
        if (key === null || key === undefined) {
          throw new WriteError("put() requires a key argument");
        }
        var self = this || _global$e;
        var promise;
        callback = getCallback(options, callback);
        if (!callback) {
          callback = promisify();
          promise = callback.promise;
        }
        if (maybeError(this || _global$e, callback)) {
          return promise;
        }
        options = getOptions(options);
        (this || _global$e).db.put(key, value, options, function (err) {
          if (err) {
            return callback(new WriteError(err));
          }
          self.emit("put", key, value);
          callback();
        });
        return promise;
      };
      LevelUP.prototype.del = function (key, options, callback) {
        if (key === null || key === undefined) {
          throw new WriteError("del() requires a key argument");
        }
        var self = this || _global$e;
        var promise;
        callback = getCallback(options, callback);
        if (!callback) {
          callback = promisify();
          promise = callback.promise;
        }
        if (maybeError(this || _global$e, callback)) {
          return promise;
        }
        options = getOptions(options);
        (this || _global$e).db.del(key, options, function (err) {
          if (err) {
            return callback(new WriteError(err));
          }
          self.emit("del", key);
          callback();
        });
        return promise;
      };
      LevelUP.prototype.batch = function (arr, options, callback) {
        if (!arguments.length) {
          return new Batch(this || _global$e);
        }
        if (!Array.isArray(arr)) {
          throw new WriteError("batch() requires an array argument");
        }
        var self = this || _global$e;
        var promise;
        callback = getCallback(options, callback);
        if (!callback) {
          callback = promisify();
          promise = callback.promise;
        }
        if (maybeError(this || _global$e, callback)) {
          return promise;
        }
        options = getOptions(options);
        (this || _global$e).db.batch(arr, options, function (err) {
          if (err) {
            return callback(new WriteError(err));
          }
          self.emit("batch", arr);
          callback();
        });
        return promise;
      };
      LevelUP.prototype.iterator = function (options) {
        return (this || _global$e).db.iterator(options);
      };
      LevelUP.prototype.readStream = LevelUP.prototype.createReadStream = function (options) {
        options = extend({
          keys: true,
          values: true
        }, options);
        if (typeof options.limit !== "number") {
          options.limit = -1;
        }
        return new IteratorStream((this || _global$e).db.iterator(options), options);
      };
      LevelUP.prototype.keyStream = LevelUP.prototype.createKeyStream = function (options) {
        return this.createReadStream(extend(options, {
          keys: true,
          values: false
        }));
      };
      LevelUP.prototype.valueStream = LevelUP.prototype.createValueStream = function (options) {
        return this.createReadStream(extend(options, {
          keys: false,
          values: true
        }));
      };
      LevelUP.prototype.toString = function () {
        return "LevelUP";
      };
      function maybeError(db, callback) {
        if (!db._isOpening() && !db.isOpen()) {
          process$6.nextTick(callback, new ReadError("Database is not open"));
          return true;
        }
      }
      LevelUP.errors = errors;
      exports$w = LevelUP.default = LevelUP;
      var exports$1$e = exports$w;

      var exports$v = {};
      var Buffer$6 = exports$14.Buffer;
      exports$v.compare = function (a, b) {
        if (Buffer$6.isBuffer(a)) {
          var l = Math.min(a.length, b.length);
          for (var i = 0; i < l; i++) {
            var cmp = a[i] - b[i];
            if (cmp)
              return cmp;
          }
          return a.length - b.length;
        }
        return a < b ? -1 : a > b ? 1 : 0;
      };
      function isDef$1(val) {
        return val !== undefined && val !== "";
      }
      function has$1(range, name) {
        return Object.hasOwnProperty.call(range, name);
      }
      function hasKey$1(range, name) {
        return Object.hasOwnProperty.call(range, name) && name;
      }
      var lowerBoundKey$1 = exports$v.lowerBoundKey = function (range) {
        return hasKey$1(range, "gt") || hasKey$1(range, "gte") || hasKey$1(range, "min") || (range.reverse ? hasKey$1(range, "end") : hasKey$1(range, "start")) || undefined;
      };
      var lowerBound$1 = exports$v.lowerBound = function (range, def) {
        var k = lowerBoundKey$1(range);
        return k ? range[k] : def;
      };
      var lowerBoundInclusive$1 = exports$v.lowerBoundInclusive = function (range) {
        return has$1(range, "gt") ? false : true;
      };
      var upperBoundInclusive$1 = exports$v.upperBoundInclusive = function (range) {
        return has$1(range, "lt") ? false : true;
      };
      var lowerBoundExclusive$1 = exports$v.lowerBoundExclusive = function (range) {
        return !lowerBoundInclusive$1(range);
      };
      var upperBoundExclusive$1 = exports$v.upperBoundExclusive = function (range) {
        return !upperBoundInclusive$1(range);
      };
      var upperBoundKey$1 = exports$v.upperBoundKey = function (range) {
        return hasKey$1(range, "lt") || hasKey$1(range, "lte") || hasKey$1(range, "max") || (range.reverse ? hasKey$1(range, "start") : hasKey$1(range, "end")) || undefined;
      };
      var upperBound$1 = exports$v.upperBound = function (range, def) {
        var k = upperBoundKey$1(range);
        return k ? range[k] : def;
      };
      exports$v.start = function (range, def) {
        return range.reverse ? upperBound$1(range, def) : lowerBound$1(range, def);
      };
      exports$v.end = function (range, def) {
        return range.reverse ? lowerBound$1(range, def) : upperBound$1(range, def);
      };
      exports$v.startInclusive = function (range) {
        return range.reverse ? upperBoundInclusive$1(range) : lowerBoundInclusive$1(range);
      };
      exports$v.endInclusive = function (range) {
        return range.reverse ? lowerBoundInclusive$1(range) : upperBoundInclusive$1(range);
      };
      function id$1(e) {
        return e;
      }
      exports$v.toLtgt = function (range, _range, map, lower, upper) {
        _range = _range || {};
        map = map || id$1;
        var defaults = arguments.length > 3;
        var lb = exports$v.lowerBoundKey(range);
        var ub = exports$v.upperBoundKey(range);
        if (lb) {
          if (lb === "gt")
            _range.gt = map(range.gt, false);
          else
            _range.gte = map(range[lb], false);
        } else if (defaults)
          _range.gte = map(lower, false);
        if (ub) {
          if (ub === "lt")
            _range.lt = map(range.lt, true);
          else
            _range.lte = map(range[ub], true);
        } else if (defaults)
          _range.lte = map(upper, true);
        if (range.reverse != null)
          _range.reverse = !!range.reverse;
        if (has$1(_range, "max"))
          delete _range.max;
        if (has$1(_range, "min"))
          delete _range.min;
        if (has$1(_range, "start"))
          delete _range.start;
        if (has$1(_range, "end"))
          delete _range.end;
        return _range;
      };
      exports$v.contains = function (range, key, compare) {
        compare = compare || exports$v.compare;
        var lb = lowerBound$1(range);
        if (isDef$1(lb)) {
          var cmp = compare(key, lb);
          if (cmp < 0 || cmp === 0 && lowerBoundExclusive$1(range))
            return false;
        }
        var ub = upperBound$1(range);
        if (isDef$1(ub)) {
          var cmp = compare(key, ub);
          if (cmp > 0 || cmp === 0 && upperBoundExclusive$1(range))
            return false;
        }
        return true;
      };
      exports$v.filter = function (range, compare) {
        return function (key) {
          return exports$v.contains(range, key, compare);
        };
      };
      exports$v.compare; exports$v.start; exports$v.end; exports$v.startInclusive; exports$v.endInclusive; exports$v.toLtgt; exports$v.contains; exports$v.filter;
      exports$v.lowerBoundKey; exports$v.lowerBound; exports$v.lowerBoundInclusive; exports$v.upperBoundInclusive; exports$v.lowerBoundExclusive; exports$v.upperBoundExclusive; exports$v.upperBoundKey; exports$v.upperBound;

      var exports$u = {};
      var Buffer$5 = exports$14.Buffer;
      exports$u.utf8 = exports$u["utf-8"] = {
        encode: function (data) {
          return isBinary(data) ? data : String(data);
        },
        decode: identity,
        buffer: false,
        type: "utf8"
      };
      exports$u.json = {
        encode: JSON.stringify,
        decode: JSON.parse,
        buffer: false,
        type: "json"
      };
      exports$u.binary = {
        encode: function (data) {
          return isBinary(data) ? data : Buffer$5.from(data);
        },
        decode: identity,
        buffer: true,
        type: "binary"
      };
      exports$u.none = {
        encode: identity,
        decode: identity,
        buffer: false,
        type: "id"
      };
      exports$u.id = exports$u.none;
      var bufferEncodings = [
        "hex",
        "ascii",
        "base64",
        "ucs2",
        "ucs-2",
        "utf16le",
        "utf-16le"
      ];
      bufferEncodings.forEach(function (type) {
        exports$u[type] = {
          encode: function (data) {
            return isBinary(data) ? data : Buffer$5.from(data, type);
          },
          decode: function (buffer) {
            return buffer.toString(type);
          },
          buffer: true,
          type: type
        };
      });
      function identity(value) {
        return value;
      }
      function isBinary(data) {
        return data === undefined || data === null || Buffer$5.isBuffer(data);
      }
      exports$u.utf8; exports$u.json; exports$u.binary; exports$u.none; exports$u.id;

      var _global$d = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
      var exports$t = {};
      var encodings = exports$u;
      exports$t = Codec$1;
      function Codec$1(opts) {
        if (!((this || _global$d) instanceof Codec$1)) {
          return new Codec$1(opts);
        }
        (this || _global$d).opts = opts || {};
        (this || _global$d).encodings = encodings;
      }
      Codec$1.prototype._encoding = function (encoding) {
        if (typeof encoding === "string")
          encoding = encodings[encoding];
        if (!encoding)
          encoding = encodings.id;
        return encoding;
      };
      Codec$1.prototype._keyEncoding = function (opts, batchOpts) {
        return this._encoding(batchOpts && batchOpts.keyEncoding || opts && opts.keyEncoding || (this || _global$d).opts.keyEncoding);
      };
      Codec$1.prototype._valueEncoding = function (opts, batchOpts) {
        return this._encoding(batchOpts && (batchOpts.valueEncoding || batchOpts.encoding) || opts && (opts.valueEncoding || opts.encoding) || (this || _global$d).opts.valueEncoding || (this || _global$d).opts.encoding);
      };
      Codec$1.prototype.encodeKey = function (key, opts, batchOpts) {
        return this._keyEncoding(opts, batchOpts).encode(key);
      };
      Codec$1.prototype.encodeValue = function (value, opts, batchOpts) {
        return this._valueEncoding(opts, batchOpts).encode(value);
      };
      Codec$1.prototype.decodeKey = function (key, opts) {
        return this._keyEncoding(opts).decode(key);
      };
      Codec$1.prototype.decodeValue = function (value, opts) {
        return this._valueEncoding(opts).decode(value);
      };
      Codec$1.prototype.encodeBatch = function (ops, opts) {
        var self = this || _global$d;
        return ops.map(function (_op) {
          var op = {
            type: _op.type,
            key: self.encodeKey(_op.key, opts, _op)
          };
          if (self.keyAsBuffer(opts, _op))
            op.keyEncoding = "binary";
          if (_op.prefix)
            op.prefix = _op.prefix;
          if ("value" in _op) {
            op.value = self.encodeValue(_op.value, opts, _op);
            if (self.valueAsBuffer(opts, _op))
              op.valueEncoding = "binary";
          }
          return op;
        });
      };
      var ltgtKeys = [
        "lt",
        "gt",
        "lte",
        "gte",
        "start",
        "end"
      ];
      Codec$1.prototype.encodeLtgt = function (ltgt) {
        var self = this || _global$d;
        var ret = {};
        Object.keys(ltgt).forEach(function (key) {
          ret[key] = ltgtKeys.indexOf(key) > -1 ? self.encodeKey(ltgt[key], ltgt) : ltgt[key];
        });
        return ret;
      };
      Codec$1.prototype.createStreamDecoder = function (opts) {
        var self = this || _global$d;
        if (opts.keys && opts.values) {
          return function (key, value) {
            return {
              key: self.decodeKey(key, opts),
              value: self.decodeValue(value, opts)
            };
          };
        } else if (opts.keys) {
          return function (key) {
            return self.decodeKey(key, opts);
          };
        } else if (opts.values) {
          return function (_, value) {
            return self.decodeValue(value, opts);
          };
        } else {
          return function () {
          };
        }
      };
      Codec$1.prototype.keyAsBuffer = function (opts) {
        return this._keyEncoding(opts).buffer;
      };
      Codec$1.prototype.valueAsBuffer = function (opts) {
        return this._valueEncoding(opts).buffer;
      };
      var exports$1$d = exports$t;

      var exports$s = {};
      exports$s = Array.isArray || function (arr) {
        return Object.prototype.toString.call(arr) == "[object Array]";
      };
      var exports$1$c = exports$s;

      var _buffer = "default" in _buffer2 ? exports$14 : _buffer2;
      var exports$r = {};
      function isArray$1(arg) {
        if (Array.isArray) {
          return Array.isArray(arg);
        }
        return objectToString(arg) === "[object Array]";
      }
      exports$r.isArray = isArray$1;
      function isBoolean(arg) {
        return typeof arg === "boolean";
      }
      exports$r.isBoolean = isBoolean;
      function isNull(arg) {
        return arg === null;
      }
      exports$r.isNull = isNull;
      function isNullOrUndefined(arg) {
        return arg == null;
      }
      exports$r.isNullOrUndefined = isNullOrUndefined;
      function isNumber(arg) {
        return typeof arg === "number";
      }
      exports$r.isNumber = isNumber;
      function isString(arg) {
        return typeof arg === "string";
      }
      exports$r.isString = isString;
      function isSymbol(arg) {
        return typeof arg === "symbol";
      }
      exports$r.isSymbol = isSymbol;
      function isUndefined(arg) {
        return arg === void 0;
      }
      exports$r.isUndefined = isUndefined;
      function isRegExp(re) {
        return objectToString(re) === "[object RegExp]";
      }
      exports$r.isRegExp = isRegExp;
      function isObject(arg) {
        return typeof arg === "object" && arg !== null;
      }
      exports$r.isObject = isObject;
      function isDate(d) {
        return objectToString(d) === "[object Date]";
      }
      exports$r.isDate = isDate;
      function isError(e) {
        return objectToString(e) === "[object Error]" || e instanceof Error;
      }
      exports$r.isError = isError;
      function isFunction$1(arg) {
        return typeof arg === "function";
      }
      exports$r.isFunction = isFunction$1;
      function isPrimitive(arg) {
        return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || typeof arg === "symbol" || typeof arg === "undefined";
      }
      exports$r.isPrimitive = isPrimitive;
      exports$r.isBuffer = _buffer.Buffer.isBuffer;
      function objectToString(o) {
        return Object.prototype.toString.call(o);
      }
      exports$r.isBuffer;
      exports$r.isArray; exports$r.isBoolean; exports$r.isNull; exports$r.isNullOrUndefined; exports$r.isNumber; exports$r.isString; exports$r.isSymbol; exports$r.isUndefined; exports$r.isRegExp; exports$r.isObject; exports$r.isDate; exports$r.isError; exports$r.isFunction; exports$r.isPrimitive;

      var _global$c = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
      var exports$q = {};
      var Buffer$4 = exports$14.Buffer;
      var isBufferEncoding = Buffer$4.isEncoding || function (encoding) {
        switch (encoding && encoding.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return true;
        default:
          return false;
        }
      };
      function assertEncoding(encoding) {
        if (encoding && !isBufferEncoding(encoding)) {
          throw new Error("Unknown encoding: " + encoding);
        }
      }
      var StringDecoder = exports$q.StringDecoder = function (encoding) {
        (this || _global$c).encoding = (encoding || "utf8").toLowerCase().replace(/[-_]/, "");
        assertEncoding(encoding);
        switch ((this || _global$c).encoding) {
        case "utf8":
          (this || _global$c).surrogateSize = 3;
          break;
        case "ucs2":
        case "utf16le":
          (this || _global$c).surrogateSize = 2;
          (this || _global$c).detectIncompleteChar = utf16DetectIncompleteChar;
          break;
        case "base64":
          (this || _global$c).surrogateSize = 3;
          (this || _global$c).detectIncompleteChar = base64DetectIncompleteChar;
          break;
        default:
          (this || _global$c).write = passThroughWrite;
          return;
        }
        (this || _global$c).charBuffer = new Buffer$4(6);
        (this || _global$c).charReceived = 0;
        (this || _global$c).charLength = 0;
      };
      StringDecoder.prototype.write = function (buffer) {
        var charStr = "";
        while ((this || _global$c).charLength) {
          var available = buffer.length >= (this || _global$c).charLength - (this || _global$c).charReceived ? (this || _global$c).charLength - (this || _global$c).charReceived : buffer.length;
          buffer.copy((this || _global$c).charBuffer, (this || _global$c).charReceived, 0, available);
          (this || _global$c).charReceived += available;
          if ((this || _global$c).charReceived < (this || _global$c).charLength) {
            return "";
          }
          buffer = buffer.slice(available, buffer.length);
          charStr = (this || _global$c).charBuffer.slice(0, (this || _global$c).charLength).toString((this || _global$c).encoding);
          var charCode = charStr.charCodeAt(charStr.length - 1);
          if (charCode >= 55296 && charCode <= 56319) {
            (this || _global$c).charLength += (this || _global$c).surrogateSize;
            charStr = "";
            continue;
          }
          (this || _global$c).charReceived = (this || _global$c).charLength = 0;
          if (buffer.length === 0) {
            return charStr;
          }
          break;
        }
        this.detectIncompleteChar(buffer);
        var end = buffer.length;
        if ((this || _global$c).charLength) {
          buffer.copy((this || _global$c).charBuffer, 0, buffer.length - (this || _global$c).charReceived, end);
          end -= (this || _global$c).charReceived;
        }
        charStr += buffer.toString((this || _global$c).encoding, 0, end);
        var end = charStr.length - 1;
        var charCode = charStr.charCodeAt(end);
        if (charCode >= 55296 && charCode <= 56319) {
          var size = (this || _global$c).surrogateSize;
          (this || _global$c).charLength += size;
          (this || _global$c).charReceived += size;
          (this || _global$c).charBuffer.copy((this || _global$c).charBuffer, size, 0, size);
          buffer.copy((this || _global$c).charBuffer, 0, 0, size);
          return charStr.substring(0, end);
        }
        return charStr;
      };
      StringDecoder.prototype.detectIncompleteChar = function (buffer) {
        var i = buffer.length >= 3 ? 3 : buffer.length;
        for (; i > 0; i--) {
          var c = buffer[buffer.length - i];
          if (i == 1 && c >> 5 == 6) {
            (this || _global$c).charLength = 2;
            break;
          }
          if (i <= 2 && c >> 4 == 14) {
            (this || _global$c).charLength = 3;
            break;
          }
          if (i <= 3 && c >> 3 == 30) {
            (this || _global$c).charLength = 4;
            break;
          }
        }
        (this || _global$c).charReceived = i;
      };
      StringDecoder.prototype.end = function (buffer) {
        var res = "";
        if (buffer && buffer.length)
          res = this.write(buffer);
        if ((this || _global$c).charReceived) {
          var cr = (this || _global$c).charReceived;
          var buf = (this || _global$c).charBuffer;
          var enc = (this || _global$c).encoding;
          res += buf.slice(0, cr).toString(enc);
        }
        return res;
      };
      function passThroughWrite(buffer) {
        return buffer.toString((this || _global$c).encoding);
      }
      function utf16DetectIncompleteChar(buffer) {
        (this || _global$c).charReceived = buffer.length % 2;
        (this || _global$c).charLength = (this || _global$c).charReceived ? 2 : 0;
      }
      function base64DetectIncompleteChar(buffer) {
        (this || _global$c).charReceived = buffer.length % 3;
        (this || _global$c).charLength = (this || _global$c).charReceived ? 3 : 0;
      }

      var exports$p = {},
          _dewExec$4 = false;

      var _global$b = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

      function dew$4() {
        if (_dewExec$4) return exports$p;
        _dewExec$4 = true;
        var process = process$a;
        exports$p = Readable;
        var isArray = exports$1$c;
        var Buffer = exports$14.Buffer;
        Readable.ReadableState = ReadableState;
        var EE = y.EventEmitter;
        if (!EE.listenerCount) EE.listenerCount = function (emitter, type) {
          return emitter.listeners(type).length;
        };
        var Stream = exports$15;
        var util = exports$r;
        util.inherits = exports$1$w;
        var StringDecoder;
        util.inherits(Readable, Stream);

        function ReadableState(options, stream) {
          options = options || {};
          var hwm = options.highWaterMark;
          (this || _global$b).highWaterMark = hwm || hwm === 0 ? hwm : 16 * 1024;
          (this || _global$b).highWaterMark = ~~(this || _global$b).highWaterMark;
          (this || _global$b).buffer = [];
          (this || _global$b).length = 0;
          (this || _global$b).pipes = null;
          (this || _global$b).pipesCount = 0;
          (this || _global$b).flowing = false;
          (this || _global$b).ended = false;
          (this || _global$b).endEmitted = false;
          (this || _global$b).reading = false;
          (this || _global$b).calledRead = false;
          (this || _global$b).sync = true;
          (this || _global$b).needReadable = false;
          (this || _global$b).emittedReadable = false;
          (this || _global$b).readableListening = false;
          (this || _global$b).objectMode = !!options.objectMode;
          (this || _global$b).defaultEncoding = options.defaultEncoding || "utf8";
          (this || _global$b).ranOut = false;
          (this || _global$b).awaitDrain = 0;
          (this || _global$b).readingMore = false;
          (this || _global$b).decoder = null;
          (this || _global$b).encoding = null;

          if (options.encoding) {
            if (!StringDecoder) StringDecoder = exports$q.StringDecoder;
            (this || _global$b).decoder = new StringDecoder(options.encoding);
            (this || _global$b).encoding = options.encoding;
          }
        }

        function Readable(options) {
          if (!((this || _global$b) instanceof Readable)) return new Readable(options);
          (this || _global$b)._readableState = new ReadableState(options, this || _global$b);
          (this || _global$b).readable = true;
          Stream.call(this || _global$b);
        }

        Readable.prototype.push = function (chunk, encoding) {
          var state = (this || _global$b)._readableState;

          if (typeof chunk === "string" && !state.objectMode) {
            encoding = encoding || state.defaultEncoding;

            if (encoding !== state.encoding) {
              chunk = new Buffer(chunk, encoding);
              encoding = "";
            }
          }

          return readableAddChunk(this || _global$b, state, chunk, encoding, false);
        };

        Readable.prototype.unshift = function (chunk) {
          var state = (this || _global$b)._readableState;
          return readableAddChunk(this || _global$b, state, chunk, "", true);
        };

        function readableAddChunk(stream, state, chunk, encoding, addToFront) {
          var er = chunkInvalid(state, chunk);

          if (er) {
            stream.emit("error", er);
          } else if (chunk === null || chunk === undefined) {
            state.reading = false;
            if (!state.ended) onEofChunk(stream, state);
          } else if (state.objectMode || chunk && chunk.length > 0) {
            if (state.ended && !addToFront) {
              var e = new Error("stream.push() after EOF");
              stream.emit("error", e);
            } else if (state.endEmitted && addToFront) {
              var e = new Error("stream.unshift() after end event");
              stream.emit("error", e);
            } else {
              if (state.decoder && !addToFront && !encoding) chunk = state.decoder.write(chunk);
              state.length += state.objectMode ? 1 : chunk.length;

              if (addToFront) {
                state.buffer.unshift(chunk);
              } else {
                state.reading = false;
                state.buffer.push(chunk);
              }

              if (state.needReadable) emitReadable(stream);
              maybeReadMore(stream, state);
            }
          } else if (!addToFront) {
            state.reading = false;
          }

          return needMoreData(state);
        }

        function needMoreData(state) {
          return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
        }

        Readable.prototype.setEncoding = function (enc) {
          if (!StringDecoder) StringDecoder = exports$q.StringDecoder;
          (this || _global$b)._readableState.decoder = new StringDecoder(enc);
          (this || _global$b)._readableState.encoding = enc;
        };

        var MAX_HWM = 8388608;

        function roundUpToNextPowerOf2(n) {
          if (n >= MAX_HWM) {
            n = MAX_HWM;
          } else {
            n--;

            for (var p = 1; p < 32; p <<= 1) {
              n |= n >> p;
            }

            n++;
          }

          return n;
        }

        function howMuchToRead(n, state) {
          if (state.length === 0 && state.ended) return 0;
          if (state.objectMode) return n === 0 ? 0 : 1;

          if (n === null || isNaN(n)) {
            if (state.flowing && state.buffer.length) return state.buffer[0].length;else return state.length;
          }

          if (n <= 0) return 0;
          if (n > state.highWaterMark) state.highWaterMark = roundUpToNextPowerOf2(n);

          if (n > state.length) {
            if (!state.ended) {
              state.needReadable = true;
              return 0;
            } else return state.length;
          }

          return n;
        }

        Readable.prototype.read = function (n) {
          var state = (this || _global$b)._readableState;
          state.calledRead = true;
          var nOrig = n;
          var ret;
          if (typeof n !== "number" || n > 0) state.emittedReadable = false;

          if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
            emitReadable(this || _global$b);
            return null;
          }

          n = howMuchToRead(n, state);

          if (n === 0 && state.ended) {
            ret = null;

            if (state.length > 0 && state.decoder) {
              ret = fromList(n, state);
              state.length -= ret.length;
            }

            if (state.length === 0) endReadable(this || _global$b);
            return ret;
          }

          var doRead = state.needReadable;
          if (state.length - n <= state.highWaterMark) doRead = true;
          if (state.ended || state.reading) doRead = false;

          if (doRead) {
            state.reading = true;
            state.sync = true;
            if (state.length === 0) state.needReadable = true;

            this._read(state.highWaterMark);

            state.sync = false;
          }

          if (doRead && !state.reading) n = howMuchToRead(nOrig, state);
          if (n > 0) ret = fromList(n, state);else ret = null;

          if (ret === null) {
            state.needReadable = true;
            n = 0;
          }

          state.length -= n;
          if (state.length === 0 && !state.ended) state.needReadable = true;
          if (state.ended && !state.endEmitted && state.length === 0) endReadable(this || _global$b);
          return ret;
        };

        function chunkInvalid(state, chunk) {
          var er = null;

          if (!Buffer.isBuffer(chunk) && "string" !== typeof chunk && chunk !== null && chunk !== undefined && !state.objectMode) {
            er = new TypeError("Invalid non-string/buffer chunk");
          }

          return er;
        }

        function onEofChunk(stream, state) {
          if (state.decoder && !state.ended) {
            var chunk = state.decoder.end();

            if (chunk && chunk.length) {
              state.buffer.push(chunk);
              state.length += state.objectMode ? 1 : chunk.length;
            }
          }

          state.ended = true;
          if (state.length > 0) emitReadable(stream);else endReadable(stream);
        }

        function emitReadable(stream) {
          var state = stream._readableState;
          state.needReadable = false;
          if (state.emittedReadable) return;
          state.emittedReadable = true;
          if (state.sync) process.nextTick(function () {
            emitReadable_(stream);
          });else emitReadable_(stream);
        }

        function emitReadable_(stream) {
          stream.emit("readable");
        }

        function maybeReadMore(stream, state) {
          if (!state.readingMore) {
            state.readingMore = true;
            process.nextTick(function () {
              maybeReadMore_(stream, state);
            });
          }
        }

        function maybeReadMore_(stream, state) {
          var len = state.length;

          while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
            stream.read(0);
            if (len === state.length) break;else len = state.length;
          }

          state.readingMore = false;
        }

        Readable.prototype._read = function (n) {
          this.emit("error", new Error("not implemented"));
        };

        Readable.prototype.pipe = function (dest, pipeOpts) {
          var src = this || _global$b;
          var state = (this || _global$b)._readableState;

          switch (state.pipesCount) {
            case 0:
              state.pipes = dest;
              break;

            case 1:
              state.pipes = [state.pipes, dest];
              break;

            default:
              state.pipes.push(dest);
              break;
          }

          state.pipesCount += 1;
          var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
          var endFn = doEnd ? onend : cleanup;
          if (state.endEmitted) process.nextTick(endFn);else src.once("end", endFn);
          dest.on("unpipe", onunpipe);

          function onunpipe(readable) {
            if (readable !== src) return;
            cleanup();
          }

          function onend() {
            dest.end();
          }

          var ondrain = pipeOnDrain(src);
          dest.on("drain", ondrain);

          function cleanup() {
            dest.removeListener("close", onclose);
            dest.removeListener("finish", onfinish);
            dest.removeListener("drain", ondrain);
            dest.removeListener("error", onerror);
            dest.removeListener("unpipe", onunpipe);
            src.removeListener("end", onend);
            src.removeListener("end", cleanup);
            if (!dest._writableState || dest._writableState.needDrain) ondrain();
          }

          function onerror(er) {
            unpipe();
            dest.removeListener("error", onerror);
            if (EE.listenerCount(dest, "error") === 0) dest.emit("error", er);
          }

          if (!dest._events || !dest._events.error) dest.on("error", onerror);else if (isArray(dest._events.error)) dest._events.error.unshift(onerror);else dest._events.error = [onerror, dest._events.error];

          function onclose() {
            dest.removeListener("finish", onfinish);
            unpipe();
          }

          dest.once("close", onclose);

          function onfinish() {
            dest.removeListener("close", onclose);
            unpipe();
          }

          dest.once("finish", onfinish);

          function unpipe() {
            src.unpipe(dest);
          }

          dest.emit("pipe", src);

          if (!state.flowing) {
            this.on("readable", pipeOnReadable);
            state.flowing = true;
            process.nextTick(function () {
              flow(src);
            });
          }

          return dest;
        };

        function pipeOnDrain(src) {
          return function () {
            var state = src._readableState;
            state.awaitDrain--;
            if (state.awaitDrain === 0) flow(src);
          };
        }

        function flow(src) {
          var state = src._readableState;
          var chunk;
          state.awaitDrain = 0;

          function write(dest, i, list) {
            var written = dest.write(chunk);

            if (false === written) {
              state.awaitDrain++;
            }
          }

          while (state.pipesCount && null !== (chunk = src.read())) {
            if (state.pipesCount === 1) write(state.pipes);else forEach(state.pipes, write);
            src.emit("data", chunk);
            if (state.awaitDrain > 0) return;
          }

          if (state.pipesCount === 0) {
            state.flowing = false;
            if (EE.listenerCount(src, "data") > 0) emitDataEvents(src);
            return;
          }

          state.ranOut = true;
        }

        function pipeOnReadable() {
          if ((this || _global$b)._readableState.ranOut) {
            (this || _global$b)._readableState.ranOut = false;
            flow(this || _global$b);
          }
        }

        Readable.prototype.unpipe = function (dest) {
          var state = (this || _global$b)._readableState;
          if (state.pipesCount === 0) return this || _global$b;

          if (state.pipesCount === 1) {
            if (dest && dest !== state.pipes) return this || _global$b;
            if (!dest) dest = state.pipes;
            state.pipes = null;
            state.pipesCount = 0;
            this.removeListener("readable", pipeOnReadable);
            state.flowing = false;
            if (dest) dest.emit("unpipe", this || _global$b);
            return this || _global$b;
          }

          if (!dest) {
            var dests = state.pipes;
            var len = state.pipesCount;
            state.pipes = null;
            state.pipesCount = 0;
            this.removeListener("readable", pipeOnReadable);
            state.flowing = false;

            for (var i = 0; i < len; i++) {
              dests[i].emit("unpipe", this || _global$b);
            }

            return this || _global$b;
          }

          var i = indexOf(state.pipes, dest);
          if (i === -1) return this || _global$b;
          state.pipes.splice(i, 1);
          state.pipesCount -= 1;
          if (state.pipesCount === 1) state.pipes = state.pipes[0];
          dest.emit("unpipe", this || _global$b);
          return this || _global$b;
        };

        Readable.prototype.on = function (ev, fn) {
          var res = Stream.prototype.on.call(this || _global$b, ev, fn);
          if (ev === "data" && !(this || _global$b)._readableState.flowing) emitDataEvents(this || _global$b);

          if (ev === "readable" && (this || _global$b).readable) {
            var state = (this || _global$b)._readableState;

            if (!state.readableListening) {
              state.readableListening = true;
              state.emittedReadable = false;
              state.needReadable = true;

              if (!state.reading) {
                this.read(0);
              } else if (state.length) {
                emitReadable(this || _global$b);
              }
            }
          }

          return res;
        };

        Readable.prototype.addListener = Readable.prototype.on;

        Readable.prototype.resume = function () {
          emitDataEvents(this || _global$b);
          this.read(0);
          this.emit("resume");
        };

        Readable.prototype.pause = function () {
          emitDataEvents(this || _global$b, true);
          this.emit("pause");
        };

        function emitDataEvents(stream, startPaused) {
          var state = stream._readableState;

          if (state.flowing) {
            throw new Error("Cannot switch to old mode now.");
          }

          var paused = startPaused || false;
          var readable = false;
          stream.readable = true;
          stream.pipe = Stream.prototype.pipe;
          stream.on = stream.addListener = Stream.prototype.on;
          stream.on("readable", function () {
            readable = true;
            var c;

            while (!paused && null !== (c = stream.read())) {
              stream.emit("data", c);
            }

            if (c === null) {
              readable = false;
              stream._readableState.needReadable = true;
            }
          });

          stream.pause = function () {
            paused = true;
            this.emit("pause");
          };

          stream.resume = function () {
            paused = false;
            if (readable) process.nextTick(function () {
              stream.emit("readable");
            });else this.read(0);
            this.emit("resume");
          };

          stream.emit("readable");
        }

        Readable.prototype.wrap = function (stream) {
          var state = (this || _global$b)._readableState;
          var paused = false;
          var self = this || _global$b;
          stream.on("end", function () {
            if (state.decoder && !state.ended) {
              var chunk = state.decoder.end();
              if (chunk && chunk.length) self.push(chunk);
            }

            self.push(null);
          });
          stream.on("data", function (chunk) {
            if (state.decoder) chunk = state.decoder.write(chunk);
            if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;
            var ret = self.push(chunk);

            if (!ret) {
              paused = true;
              stream.pause();
            }
          });

          for (var i in stream) {
            if (typeof stream[i] === "function" && typeof (this || _global$b)[i] === "undefined") {
              (this || _global$b)[i] = function (method) {
                return function () {
                  return stream[method].apply(stream, arguments);
                };
              }(i);
            }
          }

          var events = ["error", "close", "destroy", "pause", "resume"];
          forEach(events, function (ev) {
            stream.on(ev, self.emit.bind(self, ev));
          });

          self._read = function (n) {
            if (paused) {
              paused = false;
              stream.resume();
            }
          };

          return self;
        };

        Readable._fromList = fromList;

        function fromList(n, state) {
          var list = state.buffer;
          var length = state.length;
          var stringMode = !!state.decoder;
          var objectMode = !!state.objectMode;
          var ret;
          if (list.length === 0) return null;
          if (length === 0) ret = null;else if (objectMode) ret = list.shift();else if (!n || n >= length) {
            if (stringMode) ret = list.join("");else ret = Buffer.concat(list, length);
            list.length = 0;
          } else {
            if (n < list[0].length) {
              var buf = list[0];
              ret = buf.slice(0, n);
              list[0] = buf.slice(n);
            } else if (n === list[0].length) {
              ret = list.shift();
            } else {
              if (stringMode) ret = "";else ret = new Buffer(n);
              var c = 0;

              for (var i = 0, l = list.length; i < l && c < n; i++) {
                var buf = list[0];
                var cpy = Math.min(n - c, buf.length);
                if (stringMode) ret += buf.slice(0, cpy);else buf.copy(ret, c, 0, cpy);
                if (cpy < buf.length) list[0] = buf.slice(cpy);else list.shift();
                c += cpy;
              }
            }
          }
          return ret;
        }

        function endReadable(stream) {
          var state = stream._readableState;
          if (state.length > 0) throw new Error("endReadable called on non-empty stream");

          if (!state.endEmitted && state.calledRead) {
            state.ended = true;
            process.nextTick(function () {
              if (!state.endEmitted && state.length === 0) {
                state.endEmitted = true;
                stream.readable = false;
                stream.emit("end");
              }
            });
          }
        }

        function forEach(xs, f) {
          for (var i = 0, l = xs.length; i < l; i++) {
            f(xs[i], i);
          }
        }

        function indexOf(xs, x) {
          for (var i = 0, l = xs.length; i < l; i++) {
            if (xs[i] === x) return i;
          }

          return -1;
        }

        return exports$p;
      }

      var exports$o = {},
          _dewExec$3 = false;

      var _global$a = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

      function dew$3() {
        if (_dewExec$3) return exports$o;
        _dewExec$3 = true;
        var process = process$a;
        exports$o = Duplex;

        var objectKeys = Object.keys || function (obj) {
          var keys = [];

          for (var key in obj) {
            keys.push(key);
          }

          return keys;
        };

        var util = exports$r;
        util.inherits = exports$1$w;
        var Readable = dew$4();
        var Writable = dew$1$1();
        util.inherits(Duplex, Readable);
        forEach(objectKeys(Writable.prototype), function (method) {
          if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
        });

        function Duplex(options) {
          if (!((this || _global$a) instanceof Duplex)) return new Duplex(options);
          Readable.call(this || _global$a, options);
          Writable.call(this || _global$a, options);
          if (options && options.readable === false) (this || _global$a).readable = false;
          if (options && options.writable === false) (this || _global$a).writable = false;
          (this || _global$a).allowHalfOpen = true;
          if (options && options.allowHalfOpen === false) (this || _global$a).allowHalfOpen = false;
          this.once("end", onend);
        }

        function onend() {
          if ((this || _global$a).allowHalfOpen || (this || _global$a)._writableState.ended) return;
          process.nextTick((this || _global$a).end.bind(this || _global$a));
        }

        function forEach(xs, f) {
          for (var i = 0, l = xs.length; i < l; i++) {
            f(xs[i], i);
          }
        }

        return exports$o;
      }

      var exports$1$b = {},
          _dewExec$1$1 = false;

      var _global$1$2 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

      function dew$1$1() {
        if (_dewExec$1$1) return exports$1$b;
        _dewExec$1$1 = true;
        var process = process$a;
        exports$1$b = Writable;
        var Buffer = exports$14.Buffer;
        Writable.WritableState = WritableState;
        var util = exports$r;
        util.inherits = exports$1$w;
        var Stream = exports$15;
        util.inherits(Writable, Stream);

        function WriteReq(chunk, encoding, cb) {
          (this || _global$1$2).chunk = chunk;
          (this || _global$1$2).encoding = encoding;
          (this || _global$1$2).callback = cb;
        }

        function WritableState(options, stream) {
          options = options || {};
          var hwm = options.highWaterMark;
          (this || _global$1$2).highWaterMark = hwm || hwm === 0 ? hwm : 16 * 1024;
          (this || _global$1$2).objectMode = !!options.objectMode;
          (this || _global$1$2).highWaterMark = ~~(this || _global$1$2).highWaterMark;
          (this || _global$1$2).needDrain = false;
          (this || _global$1$2).ending = false;
          (this || _global$1$2).ended = false;
          (this || _global$1$2).finished = false;
          var noDecode = options.decodeStrings === false;
          (this || _global$1$2).decodeStrings = !noDecode;
          (this || _global$1$2).defaultEncoding = options.defaultEncoding || "utf8";
          (this || _global$1$2).length = 0;
          (this || _global$1$2).writing = false;
          (this || _global$1$2).sync = true;
          (this || _global$1$2).bufferProcessing = false;

          (this || _global$1$2).onwrite = function (er) {
            onwrite(stream, er);
          };

          (this || _global$1$2).writecb = null;
          (this || _global$1$2).writelen = 0;
          (this || _global$1$2).buffer = [];
          (this || _global$1$2).errorEmitted = false;
        }

        function Writable(options) {
          var Duplex = dew$3();
          if (!((this || _global$1$2) instanceof Writable) && !((this || _global$1$2) instanceof Duplex)) return new Writable(options);
          (this || _global$1$2)._writableState = new WritableState(options, this || _global$1$2);
          (this || _global$1$2).writable = true;
          Stream.call(this || _global$1$2);
        }

        Writable.prototype.pipe = function () {
          this.emit("error", new Error("Cannot pipe. Not readable."));
        };

        function writeAfterEnd(stream, state, cb) {
          var er = new Error("write after end");
          stream.emit("error", er);
          process.nextTick(function () {
            cb(er);
          });
        }

        function validChunk(stream, state, chunk, cb) {
          var valid = true;

          if (!Buffer.isBuffer(chunk) && "string" !== typeof chunk && chunk !== null && chunk !== undefined && !state.objectMode) {
            var er = new TypeError("Invalid non-string/buffer chunk");
            stream.emit("error", er);
            process.nextTick(function () {
              cb(er);
            });
            valid = false;
          }

          return valid;
        }

        Writable.prototype.write = function (chunk, encoding, cb) {
          var state = (this || _global$1$2)._writableState;
          var ret = false;

          if (typeof encoding === "function") {
            cb = encoding;
            encoding = null;
          }

          if (Buffer.isBuffer(chunk)) encoding = "buffer";else if (!encoding) encoding = state.defaultEncoding;
          if (typeof cb !== "function") cb = function cb() {};
          if (state.ended) writeAfterEnd(this || _global$1$2, state, cb);else if (validChunk(this || _global$1$2, state, chunk, cb)) ret = writeOrBuffer(this || _global$1$2, state, chunk, encoding, cb);
          return ret;
        };

        function decodeChunk(state, chunk, encoding) {
          if (!state.objectMode && state.decodeStrings !== false && typeof chunk === "string") {
            chunk = new Buffer(chunk, encoding);
          }

          return chunk;
        }

        function writeOrBuffer(stream, state, chunk, encoding, cb) {
          chunk = decodeChunk(state, chunk, encoding);
          if (Buffer.isBuffer(chunk)) encoding = "buffer";
          var len = state.objectMode ? 1 : chunk.length;
          state.length += len;
          var ret = state.length < state.highWaterMark;
          if (!ret) state.needDrain = true;
          if (state.writing) state.buffer.push(new WriteReq(chunk, encoding, cb));else doWrite(stream, state, len, chunk, encoding, cb);
          return ret;
        }

        function doWrite(stream, state, len, chunk, encoding, cb) {
          state.writelen = len;
          state.writecb = cb;
          state.writing = true;
          state.sync = true;

          stream._write(chunk, encoding, state.onwrite);

          state.sync = false;
        }

        function onwriteError(stream, state, sync, er, cb) {
          if (sync) process.nextTick(function () {
            cb(er);
          });else cb(er);
          stream._writableState.errorEmitted = true;
          stream.emit("error", er);
        }

        function onwriteStateUpdate(state) {
          state.writing = false;
          state.writecb = null;
          state.length -= state.writelen;
          state.writelen = 0;
        }

        function onwrite(stream, er) {
          var state = stream._writableState;
          var sync = state.sync;
          var cb = state.writecb;
          onwriteStateUpdate(state);
          if (er) onwriteError(stream, state, sync, er, cb);else {
            var finished = needFinish(stream, state);
            if (!finished && !state.bufferProcessing && state.buffer.length) clearBuffer(stream, state);

            if (sync) {
              process.nextTick(function () {
                afterWrite(stream, state, finished, cb);
              });
            } else {
              afterWrite(stream, state, finished, cb);
            }
          }
        }

        function afterWrite(stream, state, finished, cb) {
          if (!finished) onwriteDrain(stream, state);
          cb();
          if (finished) finishMaybe(stream, state);
        }

        function onwriteDrain(stream, state) {
          if (state.length === 0 && state.needDrain) {
            state.needDrain = false;
            stream.emit("drain");
          }
        }

        function clearBuffer(stream, state) {
          state.bufferProcessing = true;

          for (var c = 0; c < state.buffer.length; c++) {
            var entry = state.buffer[c];
            var chunk = entry.chunk;
            var encoding = entry.encoding;
            var cb = entry.callback;
            var len = state.objectMode ? 1 : chunk.length;
            doWrite(stream, state, len, chunk, encoding, cb);

            if (state.writing) {
              c++;
              break;
            }
          }

          state.bufferProcessing = false;
          if (c < state.buffer.length) state.buffer = state.buffer.slice(c);else state.buffer.length = 0;
        }

        Writable.prototype._write = function (chunk, encoding, cb) {
          cb(new Error("not implemented"));
        };

        Writable.prototype.end = function (chunk, encoding, cb) {
          var state = (this || _global$1$2)._writableState;

          if (typeof chunk === "function") {
            cb = chunk;
            chunk = null;
            encoding = null;
          } else if (typeof encoding === "function") {
            cb = encoding;
            encoding = null;
          }

          if (typeof chunk !== "undefined" && chunk !== null) this.write(chunk, encoding);
          if (!state.ending && !state.finished) endWritable(this || _global$1$2, state, cb);
        };

        function needFinish(stream, state) {
          return state.ending && state.length === 0 && !state.finished && !state.writing;
        }

        function finishMaybe(stream, state) {
          var need = needFinish(stream, state);

          if (need) {
            state.finished = true;
            stream.emit("finish");
          }

          return need;
        }

        function endWritable(stream, state, cb) {
          state.ending = true;
          finishMaybe(stream, state);

          if (cb) {
            if (state.finished) process.nextTick(cb);else stream.once("finish", cb);
          }

          state.ended = true;
        }

        return exports$1$b;
      }

      var exports$n = {},
          _dewExec$2 = false;

      var _global$9 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

      function dew$2() {
        if (_dewExec$2) return exports$n;
        _dewExec$2 = true;
        exports$n = Transform;
        var Duplex = dew$3();
        var util = exports$r;
        util.inherits = exports$1$w;
        util.inherits(Transform, Duplex);

        function TransformState(options, stream) {
          (this || _global$9).afterTransform = function (er, data) {
            return afterTransform(stream, er, data);
          };

          (this || _global$9).needTransform = false;
          (this || _global$9).transforming = false;
          (this || _global$9).writecb = null;
          (this || _global$9).writechunk = null;
        }

        function afterTransform(stream, er, data) {
          var ts = stream._transformState;
          ts.transforming = false;
          var cb = ts.writecb;
          if (!cb) return stream.emit("error", new Error("no writecb in Transform class"));
          ts.writechunk = null;
          ts.writecb = null;
          if (data !== null && data !== undefined) stream.push(data);
          if (cb) cb(er);
          var rs = stream._readableState;
          rs.reading = false;

          if (rs.needReadable || rs.length < rs.highWaterMark) {
            stream._read(rs.highWaterMark);
          }
        }

        function Transform(options) {
          if (!((this || _global$9) instanceof Transform)) return new Transform(options);
          Duplex.call(this || _global$9, options);
          (this || _global$9)._transformState = new TransformState(options, this || _global$9);
          var stream = this || _global$9;
          (this || _global$9)._readableState.needReadable = true;
          (this || _global$9)._readableState.sync = false;
          this.once("finish", function () {
            if ("function" === typeof (this || _global$9)._flush) this._flush(function (er) {
              done(stream, er);
            });else done(stream);
          });
        }

        Transform.prototype.push = function (chunk, encoding) {
          (this || _global$9)._transformState.needTransform = false;
          return Duplex.prototype.push.call(this || _global$9, chunk, encoding);
        };

        Transform.prototype._transform = function (chunk, encoding, cb) {
          throw new Error("not implemented");
        };

        Transform.prototype._write = function (chunk, encoding, cb) {
          var ts = (this || _global$9)._transformState;
          ts.writecb = cb;
          ts.writechunk = chunk;
          ts.writeencoding = encoding;

          if (!ts.transforming) {
            var rs = (this || _global$9)._readableState;
            if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
          }
        };

        Transform.prototype._read = function (n) {
          var ts = (this || _global$9)._transformState;

          if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
            ts.transforming = true;

            this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
          } else {
            ts.needTransform = true;
          }
        };

        function done(stream, er) {
          if (er) return stream.emit("error", er);
          var ws = stream._writableState;
          stream._readableState;
          var ts = stream._transformState;
          if (ws.length) throw new Error("calling transform done when ws.length != 0");
          if (ts.transforming) throw new Error("calling transform done when still transforming");
          return stream.push(null);
        }

        return exports$n;
      }

      var exports$m = {},
          _dewExec$1 = false;

      var _global$8 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

      function dew$1() {
        if (_dewExec$1) return exports$m;
        _dewExec$1 = true;
        exports$m = PassThrough;
        var Transform = dew$2();
        var util = exports$r;
        util.inherits = exports$1$w;
        util.inherits(PassThrough, Transform);

        function PassThrough(options) {
          if (!((this || _global$8) instanceof PassThrough)) return new PassThrough(options);
          Transform.call(this || _global$8, options);
        }

        PassThrough.prototype._transform = function (chunk, encoding, cb) {
          cb(null, chunk);
        };

        return exports$m;
      }

      var exports$l = {}, _dewExec = false;
      function dew() {
        if (_dewExec)
          return exports$l;
        _dewExec = true;
        var Stream = exports$15;
        exports$l = exports$l = dew$4();
        exports$l.Stream = Stream;
        exports$l.Readable = exports$l;
        exports$l.Writable = dew$1$1();
        exports$l.Duplex = dew$3();
        exports$l.Transform = dew$2();
        exports$l.PassThrough = dew$1();
        return exports$l;
      }
      const exports$1$a = dew();
      exports$1$a.Stream; exports$1$a.Readable; exports$1$a.Writable; exports$1$a.Duplex; exports$1$a.Transform; exports$1$a.PassThrough;

      var exports$k = {};
      function _interopDefault$3(ex) {
        return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
      }
      var ltgt$1 = _interopDefault$3(exports$v);
      var events = _interopDefault$3(y);
      var Codec = _interopDefault$3(exports$1$d);
      var ReadableStreamCore = _interopDefault$3(exports$1$a);
      var inherits$2 = _interopDefault$3(exports$1$w);
      function isFunction(f) {
        return "function" === typeof f;
      }
      function getPrefix(db) {
        if (isFunction(db.prefix)) {
          return db.prefix();
        }
        return db;
      }
      function clone(_obj) {
        var obj = {};
        for (var k in _obj) {
          obj[k] = _obj[k];
        }
        return obj;
      }
      function nut(db, precodec, codec) {
        function encodePrefix(prefix, key, opts1, opts2) {
          return precodec.encode([
            prefix,
            codec.encodeKey(key, opts1, opts2)
          ]);
        }
        function addEncodings(op, prefix) {
          if (prefix && prefix.options) {
            op.keyEncoding = op.keyEncoding || prefix.options.keyEncoding;
            op.valueEncoding = op.valueEncoding || prefix.options.valueEncoding;
          }
          return op;
        }
        db.open(function () {
        });
        return {
          apply: function (ops, opts, cb) {
            opts = opts || {};
            var batch = [];
            var i = -1;
            var len = ops.length;
            while (++i < len) {
              var op = ops[i];
              addEncodings(op, op.prefix);
              op.prefix = getPrefix(op.prefix);
              batch.push({
                key: encodePrefix(op.prefix, op.key, opts, op),
                value: op.type !== "del" && codec.encodeValue(op.value, opts, op),
                type: op.type
              });
            }
            db.db.batch(batch, opts, cb);
          },
          get: function (key, prefix, opts, cb) {
            opts.asBuffer = codec.valueAsBuffer(opts);
            return db.db.get(encodePrefix(prefix, key, opts), opts, function (err, value) {
              if (err) {
                cb(err);
              } else {
                cb(null, codec.decodeValue(value, opts));
              }
            });
          },
          createDecoder: function (opts) {
            return function (key, value) {
              return {
                key: codec.decodeKey(precodec.decode(key)[1], opts),
                value: codec.decodeValue(value, opts)
              };
            };
          },
          isClosed: function isClosed() {
            return db.isClosed();
          },
          close: function close(cb) {
            return db.close(cb);
          },
          iterator: function (_opts) {
            var opts = clone(_opts || {});
            var prefix = _opts.prefix || [];
            function encodeKey(key) {
              return encodePrefix(prefix, key, opts, {});
            }
            ltgt$1.toLtgt(_opts, opts, encodeKey, precodec.lowerBound, precodec.upperBound);
            opts.prefix = null;
            opts.keyAsBuffer = opts.valueAsBuffer = false;
            if ("number" !== typeof opts.limit) {
              opts.limit = -1;
            }
            opts.keyAsBuffer = precodec.buffer;
            opts.valueAsBuffer = codec.valueAsBuffer(opts);
            function wrapIterator(iterator) {
              return {
                next: function (cb) {
                  return iterator.next(cb);
                },
                end: function (cb) {
                  iterator.end(cb);
                }
              };
            }
            return wrapIterator(db.db.iterator(opts));
          }
        };
      }
      function NotFoundError() {
        Error.call(this);
      }
      inherits$2(NotFoundError, Error);
      NotFoundError.prototype.name = "NotFoundError";
      var EventEmitter = events.EventEmitter;
      var version = "6.5.4";
      var NOT_FOUND_ERROR = new NotFoundError();
      var sublevel$1 = function (nut, prefix, createStream, options) {
        var emitter = new EventEmitter();
        emitter.sublevels = {};
        emitter.options = options;
        emitter.version = version;
        emitter.methods = {};
        prefix = prefix || [];
        function mergeOpts(opts) {
          var o = {};
          var k;
          if (options) {
            for (k in options) {
              if (typeof options[k] !== "undefined") {
                o[k] = options[k];
              }
            }
          }
          if (opts) {
            for (k in opts) {
              if (typeof opts[k] !== "undefined") {
                o[k] = opts[k];
              }
            }
          }
          return o;
        }
        emitter.put = function (key, value, opts, cb) {
          if ("function" === typeof opts) {
            cb = opts;
            opts = {};
          }
          nut.apply([{
              key: key,
              value: value,
              prefix: prefix.slice(),
              type: "put"
            }], mergeOpts(opts), function (err) {
            if (err) {
              return cb(err);
            }
            emitter.emit("put", key, value);
            cb(null);
          });
        };
        emitter.prefix = function () {
          return prefix.slice();
        };
        emitter.batch = function (ops, opts, cb) {
          if ("function" === typeof opts) {
            cb = opts;
            opts = {};
          }
          ops = ops.map(function (op) {
            return {
              key: op.key,
              value: op.value,
              prefix: op.prefix || prefix,
              keyEncoding: op.keyEncoding,
              valueEncoding: op.valueEncoding,
              type: op.type
            };
          });
          nut.apply(ops, mergeOpts(opts), function (err) {
            if (err) {
              return cb(err);
            }
            emitter.emit("batch", ops);
            cb(null);
          });
        };
        emitter.get = function (key, opts, cb) {
          if ("function" === typeof opts) {
            cb = opts;
            opts = {};
          }
          nut.get(key, prefix, mergeOpts(opts), function (err, value) {
            if (err) {
              cb(NOT_FOUND_ERROR);
            } else {
              cb(null, value);
            }
          });
        };
        emitter.sublevel = function (name, opts) {
          return emitter.sublevels[name] = emitter.sublevels[name] || sublevel$1(nut, prefix.concat(name), createStream, mergeOpts(opts));
        };
        emitter.readStream = emitter.createReadStream = function (opts) {
          opts = mergeOpts(opts);
          opts.prefix = prefix;
          var stream;
          var it = nut.iterator(opts);
          stream = createStream(opts, nut.createDecoder(opts));
          stream.setIterator(it);
          return stream;
        };
        emitter.close = function (cb) {
          nut.close(cb);
        };
        emitter.isOpen = nut.isOpen;
        emitter.isClosed = nut.isClosed;
        return emitter;
      };
      var Readable = ReadableStreamCore.Readable;
      function ReadStream(options, makeData) {
        if (!(this instanceof ReadStream)) {
          return new ReadStream(options, makeData);
        }
        Readable.call(this, {
          objectMode: true,
          highWaterMark: options.highWaterMark
        });
        this._waiting = false;
        this._options = options;
        this._makeData = makeData;
      }
      inherits$2(ReadStream, Readable);
      ReadStream.prototype.setIterator = function (it) {
        this._iterator = it;
        if (this._destroyed) {
          return it.end(function () {
          });
        }
        if (this._waiting) {
          this._waiting = false;
          return this._read();
        }
        return this;
      };
      ReadStream.prototype._read = function read() {
        var self = this;
        if (self._destroyed) {
          return;
        }
        if (!self._iterator) {
          return this._waiting = true;
        }
        self._iterator.next(function (err, key, value) {
          if (err || key === undefined && value === undefined) {
            if (!err && !self._destroyed) {
              self.push(null);
            }
            return self._cleanup(err);
          }
          value = self._makeData(key, value);
          if (!self._destroyed) {
            self.push(value);
          }
        });
      };
      ReadStream.prototype._cleanup = function (err) {
        if (this._destroyed) {
          return;
        }
        this._destroyed = true;
        var self = this;
        if (err && err.message !== "iterator has ended") {
          self.emit("error", err);
        }
        if (self._iterator) {
          self._iterator.end(function () {
            self._iterator = null;
            self.emit("close");
          });
        } else {
          self.emit("close");
        }
      };
      ReadStream.prototype.destroy = function () {
        this._cleanup();
      };
      var precodec = {
        encode: function (decodedKey) {
          return "ÿ" + decodedKey[0] + "ÿ" + decodedKey[1];
        },
        decode: function (encodedKeyAsBuffer) {
          var str = encodedKeyAsBuffer.toString();
          var idx = str.indexOf("ÿ", 1);
          return [
            str.substring(1, idx),
            str.substring(idx + 1)
          ];
        },
        lowerBound: "\0",
        upperBound: "ÿ"
      };
      var codec = new Codec();
      function sublevelPouch(db) {
        return sublevel$1(nut(db, precodec, codec), [], ReadStream, db.options);
      }
      exports$k = sublevelPouch;
      var exports$1$9 = exports$k;

      var _global$7 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
      var exports$j = {};
      var process$5 = process$a;
      var Transform = exports$C.Transform, inherits$1 = X.inherits;
      function DestroyableTransform(opts) {
        Transform.call(this || _global$7, opts);
        (this || _global$7)._destroyed = false;
      }
      inherits$1(DestroyableTransform, Transform);
      DestroyableTransform.prototype.destroy = function (err) {
        if ((this || _global$7)._destroyed)
          return;
        (this || _global$7)._destroyed = true;
        var self = this || _global$7;
        process$5.nextTick(function () {
          if (err)
            self.emit("error", err);
          self.emit("close");
        });
      };
      function noop(chunk, enc, callback) {
        callback(null, chunk);
      }
      function through2$1(construct) {
        return function (options, transform, flush) {
          if (typeof options == "function") {
            flush = transform;
            transform = options;
            options = {};
          }
          if (typeof transform != "function")
            transform = noop;
          if (typeof flush != "function")
            flush = null;
          return construct(options, transform, flush);
        };
      }
      exports$j = through2$1(function (options, transform, flush) {
        var t2 = new DestroyableTransform(options);
        t2._transform = transform;
        if (flush)
          t2._flush = flush;
        return t2;
      });
      exports$j.ctor = through2$1(function (options, transform, flush) {
        function Through2(override) {
          if (!((this || _global$7) instanceof Through2))
            return new Through2(override);
          (this || _global$7).options = Object.assign({}, options, override);
          DestroyableTransform.call(this || _global$7, (this || _global$7).options);
        }
        inherits$1(Through2, DestroyableTransform);
        Through2.prototype._transform = transform;
        if (flush)
          Through2.prototype._flush = flush;
        return Through2;
      });
      exports$j.obj = through2$1(function (options, transform, flush) {
        var t2 = new DestroyableTransform(Object.assign({
          objectMode: true,
          highWaterMark: 16
        }, options));
        t2._transform = transform;
        if (flush)
          t2._flush = flush;
        return t2;
      });
      var exports$1$8 = exports$j;
      exports$j.ctor; exports$j.obj;

      var exports$i = {};
      function Deque$1(capacity) {
        this._capacity = getCapacity(capacity);
        this._length = 0;
        this._front = 0;
        if (isArray(capacity)) {
          var len = capacity.length;
          for (var i = 0; i < len; ++i) {
            this[i] = capacity[i];
          }
          this._length = len;
        }
      }
      Deque$1.prototype.toArray = function Deque$toArray() {
        var len = this._length;
        var ret = new Array(len);
        var front = this._front;
        var capacity = this._capacity;
        for (var j = 0; j < len; ++j) {
          ret[j] = this[front + j & capacity - 1];
        }
        return ret;
      };
      Deque$1.prototype.push = function Deque$push(item) {
        var argsLength = arguments.length;
        var length = this._length;
        if (argsLength > 1) {
          var capacity = this._capacity;
          if (length + argsLength > capacity) {
            for (var i = 0; i < argsLength; ++i) {
              this._checkCapacity(length + 1);
              var j = this._front + length & this._capacity - 1;
              this[j] = arguments[i];
              length++;
              this._length = length;
            }
            return length;
          } else {
            var j = this._front;
            for (var i = 0; i < argsLength; ++i) {
              this[j + length & capacity - 1] = arguments[i];
              j++;
            }
            this._length = length + argsLength;
            return length + argsLength;
          }
        }
        if (argsLength === 0)
          return length;
        this._checkCapacity(length + 1);
        var i = this._front + length & this._capacity - 1;
        this[i] = item;
        this._length = length + 1;
        return length + 1;
      };
      Deque$1.prototype.pop = function Deque$pop() {
        var length = this._length;
        if (length === 0) {
          return void 0;
        }
        var i = this._front + length - 1 & this._capacity - 1;
        var ret = this[i];
        this[i] = void 0;
        this._length = length - 1;
        return ret;
      };
      Deque$1.prototype.shift = function Deque$shift() {
        var length = this._length;
        if (length === 0) {
          return void 0;
        }
        var front = this._front;
        var ret = this[front];
        this[front] = void 0;
        this._front = front + 1 & this._capacity - 1;
        this._length = length - 1;
        return ret;
      };
      Deque$1.prototype.unshift = function Deque$unshift(item) {
        var length = this._length;
        var argsLength = arguments.length;
        if (argsLength > 1) {
          var capacity = this._capacity;
          if (length + argsLength > capacity) {
            for (var i = argsLength - 1; i >= 0; i--) {
              this._checkCapacity(length + 1);
              var capacity = this._capacity;
              var j = (this._front - 1 & capacity - 1 ^ capacity) - capacity;
              this[j] = arguments[i];
              length++;
              this._length = length;
              this._front = j;
            }
            return length;
          } else {
            var front = this._front;
            for (var i = argsLength - 1; i >= 0; i--) {
              var j = (front - 1 & capacity - 1 ^ capacity) - capacity;
              this[j] = arguments[i];
              front = j;
            }
            this._front = front;
            this._length = length + argsLength;
            return length + argsLength;
          }
        }
        if (argsLength === 0)
          return length;
        this._checkCapacity(length + 1);
        var capacity = this._capacity;
        var i = (this._front - 1 & capacity - 1 ^ capacity) - capacity;
        this[i] = item;
        this._length = length + 1;
        this._front = i;
        return length + 1;
      };
      Deque$1.prototype.peekBack = function Deque$peekBack() {
        var length = this._length;
        if (length === 0) {
          return void 0;
        }
        var index = this._front + length - 1 & this._capacity - 1;
        return this[index];
      };
      Deque$1.prototype.peekFront = function Deque$peekFront() {
        if (this._length === 0) {
          return void 0;
        }
        return this[this._front];
      };
      Deque$1.prototype.get = function Deque$get(index) {
        var i = index;
        if (i !== (i | 0)) {
          return void 0;
        }
        var len = this._length;
        if (i < 0) {
          i = i + len;
        }
        if (i < 0 || i >= len) {
          return void 0;
        }
        return this[this._front + i & this._capacity - 1];
      };
      Deque$1.prototype.isEmpty = function Deque$isEmpty() {
        return this._length === 0;
      };
      Deque$1.prototype.clear = function Deque$clear() {
        var len = this._length;
        var front = this._front;
        var capacity = this._capacity;
        for (var j = 0; j < len; ++j) {
          this[front + j & capacity - 1] = void 0;
        }
        this._length = 0;
        this._front = 0;
      };
      Deque$1.prototype.toString = function Deque$toString() {
        return this.toArray().toString();
      };
      Deque$1.prototype.valueOf = Deque$1.prototype.toString;
      Deque$1.prototype.removeFront = Deque$1.prototype.shift;
      Deque$1.prototype.removeBack = Deque$1.prototype.pop;
      Deque$1.prototype.insertFront = Deque$1.prototype.unshift;
      Deque$1.prototype.insertBack = Deque$1.prototype.push;
      Deque$1.prototype.enqueue = Deque$1.prototype.push;
      Deque$1.prototype.dequeue = Deque$1.prototype.shift;
      Deque$1.prototype.toJSON = Deque$1.prototype.toArray;
      Object.defineProperty(Deque$1.prototype, "length", {
        get: function () {
          return this._length;
        },
        set: function () {
          throw new RangeError("");
        }
      });
      Deque$1.prototype._checkCapacity = function Deque$_checkCapacity(size) {
        if (this._capacity < size) {
          this._resizeTo(getCapacity(this._capacity * 1.5 + 16));
        }
      };
      Deque$1.prototype._resizeTo = function Deque$_resizeTo(capacity) {
        var oldCapacity = this._capacity;
        this._capacity = capacity;
        var front = this._front;
        var length = this._length;
        if (front + length > oldCapacity) {
          var moveItemsCount = front + length & oldCapacity - 1;
          arrayMove(this, 0, this, oldCapacity, moveItemsCount);
        }
      };
      var isArray = Array.isArray;
      function arrayMove(src, srcIndex, dst, dstIndex, len) {
        for (var j = 0; j < len; ++j) {
          dst[j + dstIndex] = src[j + srcIndex];
          src[j + srcIndex] = void 0;
        }
      }
      function pow2AtLeast(n) {
        n = n >>> 0;
        n = n - 1;
        n = n | n >> 1;
        n = n | n >> 2;
        n = n | n >> 4;
        n = n | n >> 8;
        n = n | n >> 16;
        return n + 1;
      }
      function getCapacity(capacity) {
        if (typeof capacity !== "number") {
          if (isArray(capacity)) {
            capacity = capacity.length;
          } else {
            return 16;
          }
        }
        return pow2AtLeast(Math.min(Math.max(16, capacity), 1073741824));
      }
      exports$i = Deque$1;
      var exports$1$7 = exports$i;

      var exports$h = {};
      var Buffer$3 = exports$14.Buffer;
      var toString = Object.prototype.toString;
      var isModern = typeof Buffer$3.alloc === "function" && typeof Buffer$3.allocUnsafe === "function" && typeof Buffer$3.from === "function";
      function isArrayBuffer(input) {
        return toString.call(input).slice(8, -1) === "ArrayBuffer";
      }
      function fromArrayBuffer(obj, byteOffset, length) {
        byteOffset >>>= 0;
        var maxLength = obj.byteLength - byteOffset;
        if (maxLength < 0) {
          throw new RangeError("'offset' is out of bounds");
        }
        if (length === undefined) {
          length = maxLength;
        } else {
          length >>>= 0;
          if (length > maxLength) {
            throw new RangeError("'length' is out of bounds");
          }
        }
        return isModern ? Buffer$3.from(obj.slice(byteOffset, byteOffset + length)) : new Buffer$3(new Uint8Array(obj.slice(byteOffset, byteOffset + length)));
      }
      function fromString(string, encoding) {
        if (typeof encoding !== "string" || encoding === "") {
          encoding = "utf8";
        }
        if (!Buffer$3.isEncoding(encoding)) {
          throw new TypeError("\"encoding\" must be a valid string encoding");
        }
        return isModern ? Buffer$3.from(string, encoding) : new Buffer$3(string, encoding);
      }
      function bufferFrom$1(value, encodingOrOffset, length) {
        if (typeof value === "number") {
          throw new TypeError("\"value\" argument must not be a number");
        }
        if (isArrayBuffer(value)) {
          return fromArrayBuffer(value, encodingOrOffset, length);
        }
        if (typeof value === "string") {
          return fromString(value, encodingOrOffset);
        }
        return isModern ? Buffer$3.from(value) : new Buffer$3(value);
      }
      exports$h = bufferFrom$1;
      var exports$1$6 = exports$h;

      var exports$g = {};
      Object.defineProperty(exports$g, "__esModule", { value: true });
      function winningRev(metadata) {
        var winningId;
        var winningPos;
        var winningDeleted;
        var toVisit = metadata.rev_tree.slice();
        var node;
        while (node = toVisit.pop()) {
          var tree = node.ids;
          var branches = tree[2];
          var pos = node.pos;
          if (branches.length) {
            for (var i = 0, len = branches.length; i < len; i++) {
              toVisit.push({
                pos: pos + 1,
                ids: branches[i]
              });
            }
            continue;
          }
          var deleted = !!tree[1].deleted;
          var id = tree[0];
          if (!winningId || (winningDeleted !== deleted ? winningDeleted : winningPos !== pos ? winningPos < pos : winningId < id)) {
            winningId = id;
            winningPos = pos;
            winningDeleted = deleted;
          }
        }
        return winningPos + "-" + winningId;
      }
      function traverseRevTree(revs, callback) {
        var toVisit = revs.slice();
        var node;
        while (node = toVisit.pop()) {
          var pos = node.pos;
          var tree = node.ids;
          var branches = tree[2];
          var newCtx = callback(branches.length === 0, pos, tree[0], node.ctx, tree[1]);
          for (var i = 0, len = branches.length; i < len; i++) {
            toVisit.push({
              pos: pos + 1,
              ids: branches[i],
              ctx: newCtx
            });
          }
        }
      }
      function sortByPos(a, b) {
        return a.pos - b.pos;
      }
      function collectLeaves(revs) {
        var leaves = [];
        traverseRevTree(revs, function (isLeaf, pos, id, acc, opts) {
          if (isLeaf) {
            leaves.push({
              rev: pos + "-" + id,
              pos: pos,
              opts: opts
            });
          }
        });
        leaves.sort(sortByPos).reverse();
        for (var i = 0, len = leaves.length; i < len; i++) {
          delete leaves[i].pos;
        }
        return leaves;
      }
      function collectConflicts(metadata) {
        var win = winningRev(metadata);
        var leaves = collectLeaves(metadata.rev_tree);
        var conflicts = [];
        for (var i = 0, len = leaves.length; i < len; i++) {
          var leaf = leaves[i];
          if (leaf.rev !== win && !leaf.opts.deleted) {
            conflicts.push(leaf.rev);
          }
        }
        return conflicts;
      }
      function compactTree(metadata) {
        var revs = [];
        traverseRevTree(metadata.rev_tree, function (isLeaf, pos, revHash, ctx, opts) {
          if (opts.status === "available" && !isLeaf) {
            revs.push(pos + "-" + revHash);
            opts.status = "missing";
          }
        });
        return revs;
      }
      function rootToLeaf(revs) {
        var paths = [];
        var toVisit = revs.slice();
        var node;
        while (node = toVisit.pop()) {
          var pos = node.pos;
          var tree = node.ids;
          var id = tree[0];
          var opts = tree[1];
          var branches = tree[2];
          var isLeaf = branches.length === 0;
          var history = node.history ? node.history.slice() : [];
          history.push({
            id: id,
            opts: opts
          });
          if (isLeaf) {
            paths.push({
              pos: pos + 1 - history.length,
              ids: history
            });
          }
          for (var i = 0, len = branches.length; i < len; i++) {
            toVisit.push({
              pos: pos + 1,
              ids: branches[i],
              history: history
            });
          }
        }
        return paths.reverse();
      }
      function sortByPos$1(a, b) {
        return a.pos - b.pos;
      }
      function binarySearch(arr, item, comparator) {
        var low = 0;
        var high = arr.length;
        var mid;
        while (low < high) {
          mid = low + high >>> 1;
          if (comparator(arr[mid], item) < 0) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return low;
      }
      function insertSorted(arr, item, comparator) {
        var idx = binarySearch(arr, item, comparator);
        arr.splice(idx, 0, item);
      }
      function pathToTree(path, numStemmed) {
        var root;
        var leaf;
        for (var i = numStemmed, len = path.length; i < len; i++) {
          var node = path[i];
          var currentLeaf = [
            node.id,
            node.opts,
            []
          ];
          if (leaf) {
            leaf[2].push(currentLeaf);
            leaf = currentLeaf;
          } else {
            root = leaf = currentLeaf;
          }
        }
        return root;
      }
      function compareTree(a, b) {
        return a[0] < b[0] ? -1 : 1;
      }
      function mergeTree(in_tree1, in_tree2) {
        var queue = [{
            tree1: in_tree1,
            tree2: in_tree2
          }];
        var conflicts = false;
        while (queue.length > 0) {
          var item = queue.pop();
          var tree1 = item.tree1;
          var tree2 = item.tree2;
          if (tree1[1].status || tree2[1].status) {
            tree1[1].status = tree1[1].status === "available" || tree2[1].status === "available" ? "available" : "missing";
          }
          for (var i = 0; i < tree2[2].length; i++) {
            if (!tree1[2][0]) {
              conflicts = "new_leaf";
              tree1[2][0] = tree2[2][i];
              continue;
            }
            var merged = false;
            for (var j = 0; j < tree1[2].length; j++) {
              if (tree1[2][j][0] === tree2[2][i][0]) {
                queue.push({
                  tree1: tree1[2][j],
                  tree2: tree2[2][i]
                });
                merged = true;
              }
            }
            if (!merged) {
              conflicts = "new_branch";
              insertSorted(tree1[2], tree2[2][i], compareTree);
            }
          }
        }
        return {
          conflicts: conflicts,
          tree: in_tree1
        };
      }
      function doMerge(tree, path, dontExpand) {
        var restree = [];
        var conflicts = false;
        var merged = false;
        var res;
        if (!tree.length) {
          return {
            tree: [path],
            conflicts: "new_leaf"
          };
        }
        for (var i = 0, len = tree.length; i < len; i++) {
          var branch = tree[i];
          if (branch.pos === path.pos && branch.ids[0] === path.ids[0]) {
            res = mergeTree(branch.ids, path.ids);
            restree.push({
              pos: branch.pos,
              ids: res.tree
            });
            conflicts = conflicts || res.conflicts;
            merged = true;
          } else if (dontExpand !== true) {
            var t1 = branch.pos < path.pos ? branch : path;
            var t2 = branch.pos < path.pos ? path : branch;
            var diff = t2.pos - t1.pos;
            var candidateParents = [];
            var trees = [];
            trees.push({
              ids: t1.ids,
              diff: diff,
              parent: null,
              parentIdx: null
            });
            while (trees.length > 0) {
              var item = trees.pop();
              if (item.diff === 0) {
                if (item.ids[0] === t2.ids[0]) {
                  candidateParents.push(item);
                }
                continue;
              }
              var elements = item.ids[2];
              for (var j = 0, elementsLen = elements.length; j < elementsLen; j++) {
                trees.push({
                  ids: elements[j],
                  diff: item.diff - 1,
                  parent: item.ids,
                  parentIdx: j
                });
              }
            }
            var el = candidateParents[0];
            if (!el) {
              restree.push(branch);
            } else {
              res = mergeTree(el.ids, t2.ids);
              el.parent[2][el.parentIdx] = res.tree;
              restree.push({
                pos: t1.pos,
                ids: t1.ids
              });
              conflicts = conflicts || res.conflicts;
              merged = true;
            }
          } else {
            restree.push(branch);
          }
        }
        if (!merged) {
          restree.push(path);
        }
        restree.sort(sortByPos$1);
        return {
          tree: restree,
          conflicts: conflicts || "internal_node"
        };
      }
      function stem(tree, depth) {
        var paths = rootToLeaf(tree);
        var stemmedRevs;
        var result;
        for (var i = 0, len = paths.length; i < len; i++) {
          var path = paths[i];
          var stemmed = path.ids;
          var node;
          if (stemmed.length > depth) {
            if (!stemmedRevs) {
              stemmedRevs = {};
            }
            var numStemmed = stemmed.length - depth;
            node = {
              pos: path.pos + numStemmed,
              ids: pathToTree(stemmed, numStemmed)
            };
            for (var s = 0; s < numStemmed; s++) {
              var rev = path.pos + s + "-" + stemmed[s].id;
              stemmedRevs[rev] = true;
            }
          } else {
            node = {
              pos: path.pos,
              ids: pathToTree(stemmed, 0)
            };
          }
          if (result) {
            result = doMerge(result, node, true).tree;
          } else {
            result = [node];
          }
        }
        if (stemmedRevs) {
          traverseRevTree(result, function (isLeaf, pos, revHash) {
            delete stemmedRevs[pos + "-" + revHash];
          });
        }
        return {
          tree: result,
          revs: stemmedRevs ? Object.keys(stemmedRevs) : []
        };
      }
      function merge(tree, path, depth) {
        var newTree = doMerge(tree, path);
        var stemmed = stem(newTree.tree, depth);
        return {
          tree: stemmed.tree,
          stemmedRevs: stemmed.revs,
          conflicts: newTree.conflicts
        };
      }
      function revExists(revs, rev) {
        var toVisit = revs.slice();
        var splitRev = rev.split("-");
        var targetPos = parseInt(splitRev[0], 10);
        var targetId = splitRev[1];
        var node;
        while (node = toVisit.pop()) {
          if (node.pos === targetPos && node.ids[0] === targetId) {
            return true;
          }
          var branches = node.ids[2];
          for (var i = 0, len = branches.length; i < len; i++) {
            toVisit.push({
              pos: node.pos + 1,
              ids: branches[i]
            });
          }
        }
        return false;
      }
      function getTrees(node) {
        return node.ids;
      }
      function isDeleted(metadata, rev) {
        if (!rev) {
          rev = winningRev(metadata);
        }
        var id = rev.substring(rev.indexOf("-") + 1);
        var toVisit = metadata.rev_tree.map(getTrees);
        var tree;
        while (tree = toVisit.pop()) {
          if (tree[0] === id) {
            return !!tree[1].deleted;
          }
          toVisit = toVisit.concat(tree[2]);
        }
      }
      function isLocalId(id) {
        return /^_local/.test(id);
      }
      function latest(rev, metadata) {
        var toVisit = metadata.rev_tree.slice();
        var node;
        while (node = toVisit.pop()) {
          var pos = node.pos;
          var tree = node.ids;
          var id = tree[0];
          var opts = tree[1];
          var branches = tree[2];
          var isLeaf = branches.length === 0;
          var history = node.history ? node.history.slice() : [];
          history.push({
            id: id,
            pos: pos,
            opts: opts
          });
          if (isLeaf) {
            for (var i = 0, len = history.length; i < len; i++) {
              var historyNode = history[i];
              var historyRev = historyNode.pos + "-" + historyNode.id;
              if (historyRev === rev) {
                return pos + "-" + id;
              }
            }
          }
          for (var j = 0, l = branches.length; j < l; j++) {
            toVisit.push({
              pos: pos + 1,
              ids: branches[j],
              history: history
            });
          }
        }
        throw new Error("Unable to resolve latest revision for id " + metadata.id + ", rev " + rev);
      }
      exports$g.collectConflicts = collectConflicts;
      exports$g.collectLeaves = collectLeaves;
      exports$g.compactTree = compactTree;
      exports$g.isDeleted = isDeleted;
      exports$g.isLocalId = isLocalId;
      exports$g.merge = merge;
      exports$g.revExists = revExists;
      exports$g.rootToLeaf = rootToLeaf;
      exports$g.traverseRevTree = traverseRevTree;
      exports$g.winningRev = winningRev;
      exports$g.latest = latest;
      exports$g.__esModule;
      exports$g.collectConflicts; exports$g.collectLeaves; exports$g.compactTree; exports$g.isDeleted; exports$g.isLocalId; exports$g.merge; exports$g.revExists; exports$g.rootToLeaf; exports$g.traverseRevTree; exports$g.winningRev; exports$g.latest;

      var exports$f = {};
      Object.defineProperty(exports$f, "__esModule", { value: true });
      var pouchdbUtils$2 = exports$R;
      var pouchdbBinaryUtils$1 = exports$T;
      var pouchdbMd5$1 = exports$S;
      var pouchdbCollections$1 = exports$V;
      var pouchdbErrors$1 = exports$U;
      var pouchdbMerge$1 = exports$g;
      function allDocsKeysQuery(api, opts) {
        var keys = opts.keys;
        var finalResults = { offset: opts.skip };
        return Promise.all(keys.map(function (key) {
          var subOpts = pouchdbUtils$2.assign({
            key: key,
            deleted: "ok"
          }, opts);
          [
            "limit",
            "skip",
            "keys"
          ].forEach(function (optKey) {
            delete subOpts[optKey];
          });
          return new Promise(function (resolve, reject) {
            api._allDocs(subOpts, function (err, res) {
              if (err) {
                return reject(err);
              }
              if (opts.update_seq && res.update_seq !== undefined) {
                finalResults.update_seq = res.update_seq;
              }
              finalResults.total_rows = res.total_rows;
              resolve(res.rows[0] || {
                key: key,
                error: "not_found"
              });
            });
          });
        })).then(function (results) {
          finalResults.rows = results;
          return finalResults;
        });
      }
      function toObject(array) {
        return array.reduce(function (obj, item) {
          obj[item] = true;
          return obj;
        }, {});
      }
      var reservedWords = toObject([
        "_id",
        "_rev",
        "_attachments",
        "_deleted",
        "_revisions",
        "_revs_info",
        "_conflicts",
        "_deleted_conflicts",
        "_local_seq",
        "_rev_tree",
        "_replication_id",
        "_replication_state",
        "_replication_state_time",
        "_replication_state_reason",
        "_replication_stats",
        "_removed"
      ]);
      var dataWords = toObject([
        "_attachments",
        "_replication_id",
        "_replication_state",
        "_replication_state_time",
        "_replication_state_reason",
        "_replication_stats"
      ]);
      function parseRevisionInfo(rev) {
        if (!/^\d+-/.test(rev)) {
          return pouchdbErrors$1.createError(pouchdbErrors$1.INVALID_REV);
        }
        var idx = rev.indexOf("-");
        var left = rev.substring(0, idx);
        var right = rev.substring(idx + 1);
        return {
          prefix: parseInt(left, 10),
          id: right
        };
      }
      function makeRevTreeFromRevisions(revisions, opts) {
        var pos = revisions.start - revisions.ids.length + 1;
        var revisionIds = revisions.ids;
        var ids = [
          revisionIds[0],
          opts,
          []
        ];
        for (var i = 1, len = revisionIds.length; i < len; i++) {
          ids = [
            revisionIds[i],
            { status: "missing" },
            [ids]
          ];
        }
        return [{
            pos: pos,
            ids: ids
          }];
      }
      function parseDoc(doc, newEdits, dbOpts) {
        if (!dbOpts) {
          dbOpts = { deterministic_revs: true };
        }
        var nRevNum;
        var newRevId;
        var revInfo;
        var opts = { status: "available" };
        if (doc._deleted) {
          opts.deleted = true;
        }
        if (newEdits) {
          if (!doc._id) {
            doc._id = pouchdbUtils$2.uuid();
          }
          newRevId = pouchdbUtils$2.rev(doc, dbOpts.deterministic_revs);
          if (doc._rev) {
            revInfo = parseRevisionInfo(doc._rev);
            if (revInfo.error) {
              return revInfo;
            }
            doc._rev_tree = [{
                pos: revInfo.prefix,
                ids: [
                  revInfo.id,
                  { status: "missing" },
                  [[
                      newRevId,
                      opts,
                      []
                    ]]
                ]
              }];
            nRevNum = revInfo.prefix + 1;
          } else {
            doc._rev_tree = [{
                pos: 1,
                ids: [
                  newRevId,
                  opts,
                  []
                ]
              }];
            nRevNum = 1;
          }
        } else {
          if (doc._revisions) {
            doc._rev_tree = makeRevTreeFromRevisions(doc._revisions, opts);
            nRevNum = doc._revisions.start;
            newRevId = doc._revisions.ids[0];
          }
          if (!doc._rev_tree) {
            revInfo = parseRevisionInfo(doc._rev);
            if (revInfo.error) {
              return revInfo;
            }
            nRevNum = revInfo.prefix;
            newRevId = revInfo.id;
            doc._rev_tree = [{
                pos: nRevNum,
                ids: [
                  newRevId,
                  opts,
                  []
                ]
              }];
          }
        }
        pouchdbUtils$2.invalidIdError(doc._id);
        doc._rev = nRevNum + "-" + newRevId;
        var result = {
          metadata: {},
          data: {}
        };
        for (var key in doc) {
          if (Object.prototype.hasOwnProperty.call(doc, key)) {
            var specialKey = key[0] === "_";
            if (specialKey && !reservedWords[key]) {
              var error = pouchdbErrors$1.createError(pouchdbErrors$1.DOC_VALIDATION, key);
              error.message = pouchdbErrors$1.DOC_VALIDATION.message + ": " + key;
              throw error;
            } else if (specialKey && !dataWords[key]) {
              result.metadata[key.slice(1)] = doc[key];
            } else {
              result.data[key] = doc[key];
            }
          }
        }
        return result;
      }
      function parseBase64(data) {
        try {
          return pouchdbBinaryUtils$1.atob(data);
        } catch (e) {
          var err = pouchdbErrors$1.createError(pouchdbErrors$1.BAD_ARG, "Attachment is not a valid base64 string");
          return { error: err };
        }
      }
      function preprocessString(att, blobType, callback) {
        var asBinary = parseBase64(att.data);
        if (asBinary.error) {
          return callback(asBinary.error);
        }
        att.length = asBinary.length;
        if (blobType === "blob") {
          att.data = pouchdbBinaryUtils$1.binaryStringToBlobOrBuffer(asBinary, att.content_type);
        } else if (blobType === "base64") {
          att.data = pouchdbBinaryUtils$1.btoa(asBinary);
        } else {
          att.data = asBinary;
        }
        pouchdbMd5$1.binaryMd5(asBinary, function (result) {
          att.digest = "md5-" + result;
          callback();
        });
      }
      function preprocessBlob(att, blobType, callback) {
        pouchdbMd5$1.binaryMd5(att.data, function (md5) {
          att.digest = "md5-" + md5;
          att.length = att.data.size || att.data.length || 0;
          if (blobType === "binary") {
            pouchdbBinaryUtils$1.blobOrBufferToBinaryString(att.data, function (binString) {
              att.data = binString;
              callback();
            });
          } else if (blobType === "base64") {
            pouchdbBinaryUtils$1.blobOrBufferToBase64(att.data, function (b64) {
              att.data = b64;
              callback();
            });
          } else {
            callback();
          }
        });
      }
      function preprocessAttachment(att, blobType, callback) {
        if (att.stub) {
          return callback();
        }
        if (typeof att.data === "string") {
          preprocessString(att, blobType, callback);
        } else {
          preprocessBlob(att, blobType, callback);
        }
      }
      function preprocessAttachments(docInfos, blobType, callback) {
        if (!docInfos.length) {
          return callback();
        }
        var docv = 0;
        var overallErr;
        docInfos.forEach(function (docInfo) {
          var attachments = docInfo.data && docInfo.data._attachments ? Object.keys(docInfo.data._attachments) : [];
          var recv = 0;
          if (!attachments.length) {
            return done();
          }
          function processedAttachment(err) {
            overallErr = err;
            recv++;
            if (recv === attachments.length) {
              done();
            }
          }
          for (var key in docInfo.data._attachments) {
            if (docInfo.data._attachments.hasOwnProperty(key)) {
              preprocessAttachment(docInfo.data._attachments[key], blobType, processedAttachment);
            }
          }
        });
        function done() {
          docv++;
          if (docInfos.length === docv) {
            if (overallErr) {
              callback(overallErr);
            } else {
              callback();
            }
          }
        }
      }
      function updateDoc(revLimit, prev, docInfo, results, i, cb, writeDoc, newEdits) {
        if (pouchdbMerge$1.revExists(prev.rev_tree, docInfo.metadata.rev) && !newEdits) {
          results[i] = docInfo;
          return cb();
        }
        var previousWinningRev = prev.winningRev || pouchdbMerge$1.winningRev(prev);
        var previouslyDeleted = "deleted" in prev ? prev.deleted : pouchdbMerge$1.isDeleted(prev, previousWinningRev);
        var deleted = "deleted" in docInfo.metadata ? docInfo.metadata.deleted : pouchdbMerge$1.isDeleted(docInfo.metadata);
        var isRoot = /^1-/.test(docInfo.metadata.rev);
        if (previouslyDeleted && !deleted && newEdits && isRoot) {
          var newDoc = docInfo.data;
          newDoc._rev = previousWinningRev;
          newDoc._id = docInfo.metadata.id;
          docInfo = parseDoc(newDoc, newEdits);
        }
        var merged = pouchdbMerge$1.merge(prev.rev_tree, docInfo.metadata.rev_tree[0], revLimit);
        var inConflict = newEdits && (previouslyDeleted && deleted && merged.conflicts !== "new_leaf" || !previouslyDeleted && merged.conflicts !== "new_leaf" || previouslyDeleted && !deleted && merged.conflicts === "new_branch");
        if (inConflict) {
          var err = pouchdbErrors$1.createError(pouchdbErrors$1.REV_CONFLICT);
          results[i] = err;
          return cb();
        }
        var newRev = docInfo.metadata.rev;
        docInfo.metadata.rev_tree = merged.tree;
        docInfo.stemmedRevs = merged.stemmedRevs || [];
        if (prev.rev_map) {
          docInfo.metadata.rev_map = prev.rev_map;
        }
        var winningRev = pouchdbMerge$1.winningRev(docInfo.metadata);
        var winningRevIsDeleted = pouchdbMerge$1.isDeleted(docInfo.metadata, winningRev);
        var delta = previouslyDeleted === winningRevIsDeleted ? 0 : previouslyDeleted < winningRevIsDeleted ? -1 : 1;
        var newRevIsDeleted;
        if (newRev === winningRev) {
          newRevIsDeleted = winningRevIsDeleted;
        } else {
          newRevIsDeleted = pouchdbMerge$1.isDeleted(docInfo.metadata, newRev);
        }
        writeDoc(docInfo, winningRev, winningRevIsDeleted, newRevIsDeleted, true, delta, i, cb);
      }
      function rootIsMissing(docInfo) {
        return docInfo.metadata.rev_tree[0].ids[1].status === "missing";
      }
      function processDocs(revLimit, docInfos, api, fetchedDocs, tx, results, writeDoc, opts, overallCallback) {
        revLimit = revLimit || 1000;
        function insertDoc(docInfo, resultsIdx, callback) {
          var winningRev = pouchdbMerge$1.winningRev(docInfo.metadata);
          var deleted = pouchdbMerge$1.isDeleted(docInfo.metadata, winningRev);
          if ("was_delete" in opts && deleted) {
            results[resultsIdx] = pouchdbErrors$1.createError(pouchdbErrors$1.MISSING_DOC, "deleted");
            return callback();
          }
          var inConflict = newEdits && rootIsMissing(docInfo);
          if (inConflict) {
            var err = pouchdbErrors$1.createError(pouchdbErrors$1.REV_CONFLICT);
            results[resultsIdx] = err;
            return callback();
          }
          var delta = deleted ? 0 : 1;
          writeDoc(docInfo, winningRev, deleted, deleted, false, delta, resultsIdx, callback);
        }
        var newEdits = opts.new_edits;
        var idsToDocs = new pouchdbCollections$1.Map();
        var docsDone = 0;
        var docsToDo = docInfos.length;
        function checkAllDocsDone() {
          if (++docsDone === docsToDo && overallCallback) {
            overallCallback();
          }
        }
        docInfos.forEach(function (currentDoc, resultsIdx) {
          if (currentDoc._id && pouchdbMerge$1.isLocalId(currentDoc._id)) {
            var fun = currentDoc._deleted ? "_removeLocal" : "_putLocal";
            api[fun](currentDoc, { ctx: tx }, function (err, res) {
              results[resultsIdx] = err || res;
              checkAllDocsDone();
            });
            return;
          }
          var id = currentDoc.metadata.id;
          if (idsToDocs.has(id)) {
            docsToDo--;
            idsToDocs.get(id).push([
              currentDoc,
              resultsIdx
            ]);
          } else {
            idsToDocs.set(id, [[
                currentDoc,
                resultsIdx
              ]]);
          }
        });
        idsToDocs.forEach(function (docs, id) {
          var numDone = 0;
          function docWritten() {
            if (++numDone < docs.length) {
              nextDoc();
            } else {
              checkAllDocsDone();
            }
          }
          function nextDoc() {
            var value = docs[numDone];
            var currentDoc = value[0];
            var resultsIdx = value[1];
            if (fetchedDocs.has(id)) {
              updateDoc(revLimit, fetchedDocs.get(id), currentDoc, results, resultsIdx, docWritten, writeDoc, newEdits);
            } else {
              var merged = pouchdbMerge$1.merge([], currentDoc.metadata.rev_tree[0], revLimit);
              currentDoc.metadata.rev_tree = merged.tree;
              currentDoc.stemmedRevs = merged.stemmedRevs || [];
              insertDoc(currentDoc, resultsIdx, docWritten);
            }
          }
          nextDoc();
        });
      }
      exports$f.invalidIdError = pouchdbUtils$2.invalidIdError;
      exports$f.normalizeDdocFunctionName = pouchdbUtils$2.normalizeDdocFunctionName;
      exports$f.parseDdocFunctionName = pouchdbUtils$2.parseDdocFunctionName;
      exports$f.isDeleted = pouchdbMerge$1.isDeleted;
      exports$f.isLocalId = pouchdbMerge$1.isLocalId;
      exports$f.allDocsKeysQuery = allDocsKeysQuery;
      exports$f.parseDoc = parseDoc;
      exports$f.preprocessAttachments = preprocessAttachments;
      exports$f.processDocs = processDocs;
      exports$f.updateDoc = updateDoc;
      exports$f.__esModule; exports$f.invalidIdError; exports$f.normalizeDdocFunctionName; exports$f.parseDdocFunctionName; exports$f.isDeleted; exports$f.isLocalId;
      exports$f.allDocsKeysQuery; exports$f.parseDoc; exports$f.preprocessAttachments; exports$f.processDocs; exports$f.updateDoc;

      var exports$e = {};
      Object.defineProperty(exports$e, "__esModule", { value: true });
      function _interopDefault$2(ex) {
        return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
      }
      var vuvuzela = _interopDefault$2(exports$Y);
      function safeJsonParse(str) {
        try {
          return JSON.parse(str);
        } catch (e) {
          return vuvuzela.parse(str);
        }
      }
      function safeJsonStringify(json) {
        try {
          return JSON.stringify(json);
        } catch (e) {
          return vuvuzela.stringify(json);
        }
      }
      exports$e.safeJsonParse = safeJsonParse;
      exports$e.safeJsonStringify = safeJsonStringify;
      exports$e.__esModule;
      exports$e.safeJsonParse; exports$e.safeJsonStringify;

      var exports$d = {};
      function _interopDefault$1(ex) {
        return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
      }
      var levelup = _interopDefault$1(exports$1$e);
      var sublevel = _interopDefault$1(exports$1$9);
      var through2 = exports$1$8;
      var getArguments = _interopDefault$1(exports$1$s);
      var Deque = _interopDefault$1(exports$1$7);
      var bufferFrom = _interopDefault$1(exports$1$6);
      var pouchdbAdapterUtils = exports$f;
      var pouchdbMerge = exports$g;
      var pouchdbJson = exports$e;
      var pouchdbMd5 = exports$S;
      var pouchdbBinaryUtils = exports$T;
      var pouchdbCollections = exports$V;
      var pouchdbUtils$1 = exports$R;
      var pouchdbErrors = exports$U;
      function readAsBlobOrBuffer(storedObject, type) {
        var byteArray = new Uint8Array(storedObject);
        return pouchdbBinaryUtils.blob([byteArray], { type: type });
      }
      function prepareAttachmentForStorage(attData, cb) {
        pouchdbBinaryUtils.readAsBinaryString(attData, cb);
      }
      function createEmptyBlobOrBuffer(type) {
        return pouchdbBinaryUtils.blob([""], { type: type });
      }
      function getCacheFor(transaction, store) {
        var prefix = store.prefix()[0];
        var cache = transaction._cache;
        var subCache = cache.get(prefix);
        if (!subCache) {
          subCache = new pouchdbCollections.Map();
          cache.set(prefix, subCache);
        }
        return subCache;
      }
      function LevelTransaction() {
        this._batch = [];
        this._cache = new pouchdbCollections.Map();
      }
      LevelTransaction.prototype.get = function (store, key, callback) {
        var cache = getCacheFor(this, store);
        var exists = cache.get(key);
        if (exists) {
          return pouchdbUtils$1.nextTick(function () {
            callback(null, exists);
          });
        } else if (exists === null) {
          return pouchdbUtils$1.nextTick(function () {
            callback({ name: "NotFoundError" });
          });
        }
        store.get(key, function (err, res) {
          if (err) {
            if (err.name === "NotFoundError") {
              cache.set(key, null);
            }
            return callback(err);
          }
          cache.set(key, res);
          callback(null, res);
        });
      };
      LevelTransaction.prototype.batch = function (batch) {
        for (var i = 0, len = batch.length; i < len; i++) {
          var operation = batch[i];
          var cache = getCacheFor(this, operation.prefix);
          if (operation.type === "put") {
            cache.set(operation.key, operation.value);
          } else {
            cache.set(operation.key, null);
          }
        }
        this._batch = this._batch.concat(batch);
      };
      LevelTransaction.prototype.execute = function (db, callback) {
        var keys = new pouchdbCollections.Set();
        var uniqBatches = [];
        for (var i = this._batch.length - 1; i >= 0; i--) {
          var operation = this._batch[i];
          var lookupKey = operation.prefix.prefix()[0] + "ÿ" + operation.key;
          if (keys.has(lookupKey)) {
            continue;
          }
          keys.add(lookupKey);
          uniqBatches.push(operation);
        }
        db.batch(uniqBatches, callback);
      };
      var DOC_STORE = "document-store";
      var BY_SEQ_STORE = "by-sequence";
      var ATTACHMENT_STORE = "attach-store";
      var BINARY_STORE = "attach-binary-store";
      var LOCAL_STORE = "local-store";
      var META_STORE = "meta-store";
      var dbStores = new pouchdbCollections.Map();
      var UPDATE_SEQ_KEY = "_local_last_update_seq";
      var DOC_COUNT_KEY = "_local_doc_count";
      var UUID_KEY = "_local_uuid";
      var MD5_PREFIX = "md5-";
      var safeJsonEncoding = {
        encode: pouchdbJson.safeJsonStringify,
        decode: pouchdbJson.safeJsonParse,
        buffer: false,
        type: "cheap-json"
      };
      var levelChanges = new pouchdbUtils$1.changesHandler();
      function getWinningRev(metadata) {
        return "winningRev" in metadata ? metadata.winningRev : pouchdbMerge.winningRev(metadata);
      }
      function getIsDeleted(metadata, winningRev) {
        return "deleted" in metadata ? metadata.deleted : pouchdbAdapterUtils.isDeleted(metadata, winningRev);
      }
      function fetchAttachment(att, stores, opts) {
        var type = att.content_type;
        return new Promise(function (resolve, reject) {
          stores.binaryStore.get(att.digest, function (err, buffer) {
            var data;
            if (err) {
              if (err.name !== "NotFoundError") {
                return reject(err);
              } else {
                if (!opts.binary) {
                  data = "";
                } else {
                  data = pouchdbBinaryUtils.binaryStringToBlobOrBuffer("", type);
                }
              }
            } else {
              if (opts.binary) {
                data = readAsBlobOrBuffer(buffer, type);
              } else {
                data = buffer.toString("base64");
              }
            }
            delete att.stub;
            delete att.length;
            att.data = data;
            resolve();
          });
        });
      }
      function fetchAttachments(results, stores, opts) {
        var atts = [];
        results.forEach(function (row) {
          if (!(row.doc && row.doc._attachments)) {
            return;
          }
          var attNames = Object.keys(row.doc._attachments);
          attNames.forEach(function (attName) {
            var att = row.doc._attachments[attName];
            if (!("data" in att)) {
              atts.push(att);
            }
          });
        });
        return Promise.all(atts.map(function (att) {
          return fetchAttachment(att, stores, opts);
        }));
      }
      function LevelPouch(opts, callback) {
        opts = pouchdbUtils$1.clone(opts);
        var api = this;
        var instanceId;
        var stores = {};
        var revLimit = opts.revs_limit;
        var db;
        var name = opts.name;
        if (typeof opts.createIfMissing === "undefined") {
          opts.createIfMissing = true;
        }
        var leveldown = opts.db;
        var dbStore;
        var leveldownName = pouchdbUtils$1.functionName(leveldown);
        if (dbStores.has(leveldownName)) {
          dbStore = dbStores.get(leveldownName);
        } else {
          dbStore = new pouchdbCollections.Map();
          dbStores.set(leveldownName, dbStore);
        }
        if (dbStore.has(name)) {
          db = dbStore.get(name);
          afterDBCreated();
        } else {
          dbStore.set(name, sublevel(levelup(leveldown(name), opts, function (err) {
            if (err) {
              dbStore.delete(name);
              return callback(err);
            }
            db = dbStore.get(name);
            db._docCount = -1;
            db._queue = new Deque();
            if (typeof opts.migrate === "object") {
              opts.migrate.doMigrationOne(name, db, afterDBCreated);
            } else {
              afterDBCreated();
            }
          })));
        }
        function afterDBCreated() {
          stores.docStore = db.sublevel(DOC_STORE, { valueEncoding: safeJsonEncoding });
          stores.bySeqStore = db.sublevel(BY_SEQ_STORE, { valueEncoding: "json" });
          stores.attachmentStore = db.sublevel(ATTACHMENT_STORE, { valueEncoding: "json" });
          stores.binaryStore = db.sublevel(BINARY_STORE, { valueEncoding: "binary" });
          stores.localStore = db.sublevel(LOCAL_STORE, { valueEncoding: "json" });
          stores.metaStore = db.sublevel(META_STORE, { valueEncoding: "json" });
          if (typeof opts.migrate === "object") {
            opts.migrate.doMigrationTwo(db, stores, afterLastMigration);
          } else {
            afterLastMigration();
          }
        }
        function afterLastMigration() {
          stores.metaStore.get(UPDATE_SEQ_KEY, function (err, value) {
            if (typeof db._updateSeq === "undefined") {
              db._updateSeq = value || 0;
            }
            stores.metaStore.get(DOC_COUNT_KEY, function (err, value) {
              db._docCount = !err ? value : 0;
              stores.metaStore.get(UUID_KEY, function (err, value) {
                instanceId = !err ? value : pouchdbUtils$1.uuid();
                stores.metaStore.put(UUID_KEY, instanceId, function () {
                  pouchdbUtils$1.nextTick(function () {
                    callback(null, api);
                  });
                });
              });
            });
          });
        }
        function countDocs(callback) {
          if (db.isClosed()) {
            return callback(new Error("database is closed"));
          }
          return callback(null, db._docCount);
        }
        api._remote = false;
        api.type = function () {
          return "leveldb";
        };
        api._id = function (callback) {
          callback(null, instanceId);
        };
        api._info = function (callback) {
          var res = {
            doc_count: db._docCount,
            update_seq: db._updateSeq,
            backend_adapter: pouchdbUtils$1.functionName(leveldown)
          };
          return pouchdbUtils$1.nextTick(function () {
            callback(null, res);
          });
        };
        function tryCode(fun, args) {
          try {
            fun.apply(null, args);
          } catch (err) {
            args[args.length - 1](err);
          }
        }
        function executeNext() {
          var firstTask = db._queue.peekFront();
          if (firstTask.type === "read") {
            runReadOperation(firstTask);
          } else {
            runWriteOperation(firstTask);
          }
        }
        function runReadOperation(firstTask) {
          var readTasks = [firstTask];
          var i = 1;
          var nextTask = db._queue.get(i);
          while (typeof nextTask !== "undefined" && nextTask.type === "read") {
            readTasks.push(nextTask);
            i++;
            nextTask = db._queue.get(i);
          }
          var numDone = 0;
          readTasks.forEach(function (readTask) {
            var args = readTask.args;
            var callback = args[args.length - 1];
            args[args.length - 1] = getArguments(function (cbArgs) {
              callback.apply(null, cbArgs);
              if (++numDone === readTasks.length) {
                pouchdbUtils$1.nextTick(function () {
                  readTasks.forEach(function () {
                    db._queue.shift();
                  });
                  if (db._queue.length) {
                    executeNext();
                  }
                });
              }
            });
            tryCode(readTask.fun, args);
          });
        }
        function runWriteOperation(firstTask) {
          var args = firstTask.args;
          var callback = args[args.length - 1];
          args[args.length - 1] = getArguments(function (cbArgs) {
            callback.apply(null, cbArgs);
            pouchdbUtils$1.nextTick(function () {
              db._queue.shift();
              if (db._queue.length) {
                executeNext();
              }
            });
          });
          tryCode(firstTask.fun, args);
        }
        function writeLock(fun) {
          return getArguments(function (args) {
            db._queue.push({
              fun: fun,
              args: args,
              type: "write"
            });
            if (db._queue.length === 1) {
              pouchdbUtils$1.nextTick(executeNext);
            }
          });
        }
        function readLock(fun) {
          return getArguments(function (args) {
            db._queue.push({
              fun: fun,
              args: args,
              type: "read"
            });
            if (db._queue.length === 1) {
              pouchdbUtils$1.nextTick(executeNext);
            }
          });
        }
        function formatSeq(n) {
          return ("0000000000000000" + n).slice(-16);
        }
        function parseSeq(s) {
          return parseInt(s, 10);
        }
        api._get = readLock(function (id, opts, callback) {
          opts = pouchdbUtils$1.clone(opts);
          stores.docStore.get(id, function (err, metadata) {
            if (err || !metadata) {
              return callback(pouchdbErrors.createError(pouchdbErrors.MISSING_DOC, "missing"));
            }
            var rev;
            if (!opts.rev) {
              rev = getWinningRev(metadata);
              var deleted = getIsDeleted(metadata, rev);
              if (deleted) {
                return callback(pouchdbErrors.createError(pouchdbErrors.MISSING_DOC, "deleted"));
              }
            } else {
              rev = opts.latest ? pouchdbMerge.latest(opts.rev, metadata) : opts.rev;
            }
            var seq = metadata.rev_map[rev];
            stores.bySeqStore.get(formatSeq(seq), function (err, doc) {
              if (!doc) {
                return callback(pouchdbErrors.createError(pouchdbErrors.MISSING_DOC));
              }
              if ("_id" in doc && doc._id !== metadata.id) {
                return callback(new Error("wrong doc returned"));
              }
              doc._id = metadata.id;
              if ("_rev" in doc) {
                if (doc._rev !== rev) {
                  return callback(new Error("wrong doc returned"));
                }
              } else {
                doc._rev = rev;
              }
              return callback(null, {
                doc: doc,
                metadata: metadata
              });
            });
          });
        });
        api._getAttachment = function (docId, attachId, attachment, opts, callback) {
          var digest = attachment.digest;
          var type = attachment.content_type;
          stores.binaryStore.get(digest, function (err, attach) {
            if (err) {
              if (err.name !== "NotFoundError") {
                return callback(err);
              }
              return callback(null, opts.binary ? createEmptyBlobOrBuffer(type) : "");
            }
            if (opts.binary) {
              callback(null, readAsBlobOrBuffer(attach, type));
            } else {
              callback(null, attach.toString("base64"));
            }
          });
        };
        api._bulkDocs = writeLock(function (req, opts, callback) {
          var newEdits = opts.new_edits;
          var results = new Array(req.docs.length);
          var fetchedDocs = new pouchdbCollections.Map();
          var stemmedRevs = new pouchdbCollections.Map();
          var txn = new LevelTransaction();
          var docCountDelta = 0;
          var newUpdateSeq = db._updateSeq;
          var userDocs = req.docs;
          var docInfos = userDocs.map(function (doc) {
            if (doc._id && pouchdbAdapterUtils.isLocalId(doc._id)) {
              return doc;
            }
            var newDoc = pouchdbAdapterUtils.parseDoc(doc, newEdits, api.__opts);
            if (newDoc.metadata && !newDoc.metadata.rev_map) {
              newDoc.metadata.rev_map = {};
            }
            return newDoc;
          });
          var infoErrors = docInfos.filter(function (doc) {
            return doc.error;
          });
          if (infoErrors.length) {
            return callback(infoErrors[0]);
          }
          function verifyAttachment(digest, callback) {
            txn.get(stores.attachmentStore, digest, function (levelErr) {
              if (levelErr) {
                var err = pouchdbErrors.createError(pouchdbErrors.MISSING_STUB, "unknown stub attachment with digest " + digest);
                callback(err);
              } else {
                callback();
              }
            });
          }
          function verifyAttachments(finish) {
            var digests = [];
            userDocs.forEach(function (doc) {
              if (doc && doc._attachments) {
                Object.keys(doc._attachments).forEach(function (filename) {
                  var att = doc._attachments[filename];
                  if (att.stub) {
                    digests.push(att.digest);
                  }
                });
              }
            });
            if (!digests.length) {
              return finish();
            }
            var numDone = 0;
            var err;
            digests.forEach(function (digest) {
              verifyAttachment(digest, function (attErr) {
                if (attErr && !err) {
                  err = attErr;
                }
                if (++numDone === digests.length) {
                  finish(err);
                }
              });
            });
          }
          function fetchExistingDocs(finish) {
            var numDone = 0;
            var overallErr;
            function checkDone() {
              if (++numDone === userDocs.length) {
                return finish(overallErr);
              }
            }
            userDocs.forEach(function (doc) {
              if (doc._id && pouchdbAdapterUtils.isLocalId(doc._id)) {
                return checkDone();
              }
              txn.get(stores.docStore, doc._id, function (err, info) {
                if (err) {
                  if (err.name !== "NotFoundError") {
                    overallErr = err;
                  }
                } else {
                  fetchedDocs.set(doc._id, info);
                }
                checkDone();
              });
            });
          }
          function compact(revsMap, callback) {
            var promise = Promise.resolve();
            revsMap.forEach(function (revs, docId) {
              promise = promise.then(function () {
                return new Promise(function (resolve, reject) {
                  api._doCompactionNoLock(docId, revs, { ctx: txn }, function (err) {
                    if (err) {
                      return reject(err);
                    }
                    resolve();
                  });
                });
              });
            });
            promise.then(function () {
              callback();
            }, callback);
          }
          function autoCompact(callback) {
            var revsMap = new pouchdbCollections.Map();
            fetchedDocs.forEach(function (metadata, docId) {
              revsMap.set(docId, pouchdbMerge.compactTree(metadata));
            });
            compact(revsMap, callback);
          }
          function finish() {
            compact(stemmedRevs, function (error) {
              if (error) {
                complete(error);
              }
              if (api.auto_compaction) {
                return autoCompact(complete);
              }
              complete();
            });
          }
          function writeDoc(docInfo, winningRev, winningRevIsDeleted, newRevIsDeleted, isUpdate, delta, resultsIdx, callback2) {
            docCountDelta += delta;
            var err = null;
            var recv = 0;
            docInfo.metadata.winningRev = winningRev;
            docInfo.metadata.deleted = winningRevIsDeleted;
            docInfo.data._id = docInfo.metadata.id;
            docInfo.data._rev = docInfo.metadata.rev;
            if (newRevIsDeleted) {
              docInfo.data._deleted = true;
            }
            if (docInfo.stemmedRevs.length) {
              stemmedRevs.set(docInfo.metadata.id, docInfo.stemmedRevs);
            }
            var attachments = docInfo.data._attachments ? Object.keys(docInfo.data._attachments) : [];
            function attachmentSaved(attachmentErr) {
              recv++;
              if (!err) {
                if (attachmentErr) {
                  err = attachmentErr;
                  callback2(err);
                } else if (recv === attachments.length) {
                  finish();
                }
              }
            }
            function onMD5Load(doc, key, data, attachmentSaved) {
              return function (result) {
                saveAttachment(doc, MD5_PREFIX + result, key, data, attachmentSaved);
              };
            }
            function doMD5(doc, key, attachmentSaved) {
              return function (data) {
                pouchdbMd5.binaryMd5(data, onMD5Load(doc, key, data, attachmentSaved));
              };
            }
            for (var i = 0; i < attachments.length; i++) {
              var key = attachments[i];
              var att = docInfo.data._attachments[key];
              if (att.stub) {
                var id = docInfo.data._id;
                var rev = docInfo.data._rev;
                saveAttachmentRefs(id, rev, att.digest, attachmentSaved);
                continue;
              }
              var data;
              if (typeof att.data === "string") {
                try {
                  data = pouchdbBinaryUtils.atob(att.data);
                } catch (e) {
                  callback(pouchdbErrors.createError(pouchdbErrors.BAD_ARG, "Attachment is not a valid base64 string"));
                  return;
                }
                doMD5(docInfo, key, attachmentSaved)(data);
              } else {
                prepareAttachmentForStorage(att.data, doMD5(docInfo, key, attachmentSaved));
              }
            }
            function finish() {
              var seq = docInfo.metadata.rev_map[docInfo.metadata.rev];
              if (seq) {
                return callback2();
              }
              seq = ++newUpdateSeq;
              docInfo.metadata.rev_map[docInfo.metadata.rev] = docInfo.metadata.seq = seq;
              var seqKey = formatSeq(seq);
              var batch = [
                {
                  key: seqKey,
                  value: docInfo.data,
                  prefix: stores.bySeqStore,
                  type: "put"
                },
                {
                  key: docInfo.metadata.id,
                  value: docInfo.metadata,
                  prefix: stores.docStore,
                  type: "put"
                }
              ];
              txn.batch(batch);
              results[resultsIdx] = {
                ok: true,
                id: docInfo.metadata.id,
                rev: docInfo.metadata.rev
              };
              fetchedDocs.set(docInfo.metadata.id, docInfo.metadata);
              callback2();
            }
            if (!attachments.length) {
              finish();
            }
          }
          var attachmentQueues = {};
          function saveAttachmentRefs(id, rev, digest, callback) {
            function fetchAtt() {
              return new Promise(function (resolve, reject) {
                txn.get(stores.attachmentStore, digest, function (err, oldAtt) {
                  if (err && err.name !== "NotFoundError") {
                    return reject(err);
                  }
                  resolve(oldAtt);
                });
              });
            }
            function saveAtt(oldAtt) {
              var ref = [
                id,
                rev
              ].join("@");
              var newAtt = {};
              if (oldAtt) {
                if (oldAtt.refs) {
                  newAtt.refs = oldAtt.refs;
                  newAtt.refs[ref] = true;
                }
              } else {
                newAtt.refs = {};
                newAtt.refs[ref] = true;
              }
              return new Promise(function (resolve) {
                txn.batch([{
                    type: "put",
                    prefix: stores.attachmentStore,
                    key: digest,
                    value: newAtt
                  }]);
                resolve(!oldAtt);
              });
            }
            var queue = attachmentQueues[digest] || Promise.resolve();
            attachmentQueues[digest] = queue.then(function () {
              return fetchAtt().then(saveAtt).then(function (isNewAttachment) {
                callback(null, isNewAttachment);
              }, callback);
            });
          }
          function saveAttachment(docInfo, digest, key, data, callback) {
            var att = docInfo.data._attachments[key];
            delete att.data;
            att.digest = digest;
            att.length = data.length;
            var id = docInfo.metadata.id;
            var rev = docInfo.metadata.rev;
            att.revpos = parseInt(rev, 10);
            saveAttachmentRefs(id, rev, digest, function (err, isNewAttachment) {
              if (err) {
                return callback(err);
              }
              if (data.length === 0) {
                return callback(err);
              }
              if (!isNewAttachment) {
                return callback(err);
              }
              txn.batch([{
                  type: "put",
                  prefix: stores.binaryStore,
                  key: digest,
                  value: bufferFrom(data, "binary")
                }]);
              callback();
            });
          }
          function complete(err) {
            if (err) {
              return pouchdbUtils$1.nextTick(function () {
                callback(err);
              });
            }
            txn.batch([
              {
                prefix: stores.metaStore,
                type: "put",
                key: UPDATE_SEQ_KEY,
                value: newUpdateSeq
              },
              {
                prefix: stores.metaStore,
                type: "put",
                key: DOC_COUNT_KEY,
                value: db._docCount + docCountDelta
              }
            ]);
            txn.execute(db, function (err) {
              if (err) {
                return callback(err);
              }
              db._docCount += docCountDelta;
              db._updateSeq = newUpdateSeq;
              levelChanges.notify(name);
              pouchdbUtils$1.nextTick(function () {
                callback(null, results);
              });
            });
          }
          if (!docInfos.length) {
            return callback(null, []);
          }
          verifyAttachments(function (err) {
            if (err) {
              return callback(err);
            }
            fetchExistingDocs(function (err) {
              if (err) {
                return callback(err);
              }
              pouchdbAdapterUtils.processDocs(revLimit, docInfos, api, fetchedDocs, txn, results, writeDoc, opts, finish);
            });
          });
        });
        api._allDocs = function (opts, callback) {
          if ("keys" in opts) {
            return pouchdbAdapterUtils.allDocsKeysQuery(this, opts);
          }
          return readLock(function (opts, callback) {
            opts = pouchdbUtils$1.clone(opts);
            countDocs(function (err, docCount) {
              if (err) {
                return callback(err);
              }
              var readstreamOpts = {};
              var skip = opts.skip || 0;
              if (opts.startkey) {
                readstreamOpts.gte = opts.startkey;
              }
              if (opts.endkey) {
                readstreamOpts.lte = opts.endkey;
              }
              if (opts.key) {
                readstreamOpts.gte = readstreamOpts.lte = opts.key;
              }
              if (opts.descending) {
                readstreamOpts.reverse = true;
                var tmp = readstreamOpts.lte;
                readstreamOpts.lte = readstreamOpts.gte;
                readstreamOpts.gte = tmp;
              }
              var limit;
              if (typeof opts.limit === "number") {
                limit = opts.limit;
              }
              if (limit === 0 || "gte" in readstreamOpts && "lte" in readstreamOpts && readstreamOpts.gte > readstreamOpts.lte) {
                var returnVal = {
                  total_rows: docCount,
                  offset: opts.skip,
                  rows: []
                };
                if (opts.update_seq) {
                  returnVal.update_seq = db._updateSeq;
                }
                return callback(null, returnVal);
              }
              var results = [];
              var docstream = stores.docStore.readStream(readstreamOpts);
              var throughStream = through2.obj(function (entry, _, next) {
                var metadata = entry.value;
                var winningRev = getWinningRev(metadata);
                var deleted = getIsDeleted(metadata, winningRev);
                if (!deleted) {
                  if (skip-- > 0) {
                    next();
                    return;
                  } else if (typeof limit === "number" && limit-- <= 0) {
                    docstream.unpipe();
                    docstream.destroy();
                    next();
                    return;
                  }
                } else if (opts.deleted !== "ok") {
                  next();
                  return;
                }
                function allDocsInner(data) {
                  var doc = {
                    id: metadata.id,
                    key: metadata.id,
                    value: { rev: winningRev }
                  };
                  if (opts.include_docs) {
                    doc.doc = data;
                    doc.doc._rev = doc.value.rev;
                    if (opts.conflicts) {
                      var conflicts = pouchdbMerge.collectConflicts(metadata);
                      if (conflicts.length) {
                        doc.doc._conflicts = conflicts;
                      }
                    }
                    for (var att in doc.doc._attachments) {
                      if (doc.doc._attachments.hasOwnProperty(att)) {
                        doc.doc._attachments[att].stub = true;
                      }
                    }
                  }
                  if (opts.inclusive_end === false && metadata.id === opts.endkey) {
                    return next();
                  } else if (deleted) {
                    if (opts.deleted === "ok") {
                      doc.value.deleted = true;
                      doc.doc = null;
                    } else {
                      return next();
                    }
                  }
                  results.push(doc);
                  next();
                }
                if (opts.include_docs) {
                  var seq = metadata.rev_map[winningRev];
                  stores.bySeqStore.get(formatSeq(seq), function (err, data) {
                    allDocsInner(data);
                  });
                } else {
                  allDocsInner();
                }
              }, function (next) {
                Promise.resolve().then(function () {
                  if (opts.include_docs && opts.attachments) {
                    return fetchAttachments(results, stores, opts);
                  }
                }).then(function () {
                  var returnVal = {
                    total_rows: docCount,
                    offset: opts.skip,
                    rows: results
                  };
                  if (opts.update_seq) {
                    returnVal.update_seq = db._updateSeq;
                  }
                  callback(null, returnVal);
                }, callback);
                next();
              }).on("unpipe", function () {
                throughStream.end();
              });
              docstream.on("error", callback);
              docstream.pipe(throughStream);
            });
          })(opts, callback);
        };
        api._changes = function (opts) {
          opts = pouchdbUtils$1.clone(opts);
          if (opts.continuous) {
            var id = name + ":" + pouchdbUtils$1.uuid();
            levelChanges.addListener(name, id, api, opts);
            levelChanges.notify(name);
            return {
              cancel: function () {
                levelChanges.removeListener(name, id);
              }
            };
          }
          var descending = opts.descending;
          var results = [];
          var lastSeq = opts.since || 0;
          var called = 0;
          var streamOpts = { reverse: descending };
          var limit;
          if ("limit" in opts && opts.limit > 0) {
            limit = opts.limit;
          }
          if (!streamOpts.reverse) {
            streamOpts.start = formatSeq(opts.since || 0);
          }
          var docIds = opts.doc_ids && new pouchdbCollections.Set(opts.doc_ids);
          var filter = pouchdbUtils$1.filterChange(opts);
          var docIdsToMetadata = new pouchdbCollections.Map();
          function complete() {
            opts.done = true;
            if (opts.return_docs && opts.limit) {
              if (opts.limit < results.length) {
                results.length = opts.limit;
              }
            }
            changeStream.unpipe(throughStream);
            changeStream.destroy();
            if (!opts.continuous && !opts.cancelled) {
              if (opts.include_docs && opts.attachments && opts.return_docs) {
                fetchAttachments(results, stores, opts).then(function () {
                  opts.complete(null, {
                    results: results,
                    last_seq: lastSeq
                  });
                });
              } else {
                opts.complete(null, {
                  results: results,
                  last_seq: lastSeq
                });
              }
            }
          }
          var changeStream = stores.bySeqStore.readStream(streamOpts);
          var throughStream = through2.obj(function (data, _, next) {
            if (limit && called >= limit) {
              complete();
              return next();
            }
            if (opts.cancelled || opts.done) {
              return next();
            }
            var seq = parseSeq(data.key);
            var doc = data.value;
            if (seq === opts.since && !descending) {
              return next();
            }
            if (docIds && !docIds.has(doc._id)) {
              return next();
            }
            var metadata;
            function onGetMetadata(metadata) {
              var winningRev = getWinningRev(metadata);
              function onGetWinningDoc(winningDoc) {
                var change = opts.processChange(winningDoc, metadata, opts);
                change.seq = metadata.seq;
                var filtered = filter(change);
                if (typeof filtered === "object") {
                  return opts.complete(filtered);
                }
                if (filtered) {
                  called++;
                  if (opts.attachments && opts.include_docs) {
                    fetchAttachments([change], stores, opts).then(function () {
                      opts.onChange(change);
                    });
                  } else {
                    opts.onChange(change);
                  }
                  if (opts.return_docs) {
                    results.push(change);
                  }
                }
                next();
              }
              if (metadata.seq !== seq) {
                return next();
              }
              lastSeq = seq;
              if (winningRev === doc._rev) {
                return onGetWinningDoc(doc);
              }
              var winningSeq = metadata.rev_map[winningRev];
              stores.bySeqStore.get(formatSeq(winningSeq), function (err, doc) {
                onGetWinningDoc(doc);
              });
            }
            metadata = docIdsToMetadata.get(doc._id);
            if (metadata) {
              return onGetMetadata(metadata);
            }
            stores.docStore.get(doc._id, function (err, metadata) {
              if (opts.cancelled || opts.done || db.isClosed() || pouchdbAdapterUtils.isLocalId(metadata.id)) {
                return next();
              }
              docIdsToMetadata.set(doc._id, metadata);
              onGetMetadata(metadata);
            });
          }, function (next) {
            if (opts.cancelled) {
              return next();
            }
            if (opts.return_docs && opts.limit) {
              if (opts.limit < results.length) {
                results.length = opts.limit;
              }
            }
            next();
          }).on("unpipe", function () {
            throughStream.end();
            complete();
          });
          changeStream.pipe(throughStream);
          return {
            cancel: function () {
              opts.cancelled = true;
              complete();
            }
          };
        };
        api._close = function (callback) {
          if (db.isClosed()) {
            return callback(pouchdbErrors.createError(pouchdbErrors.NOT_OPEN));
          }
          db.close(function (err) {
            if (err) {
              callback(err);
            } else {
              dbStore.delete(name);
              callback();
            }
          });
        };
        api._getRevisionTree = function (docId, callback) {
          stores.docStore.get(docId, function (err, metadata) {
            if (err) {
              callback(pouchdbErrors.createError(pouchdbErrors.MISSING_DOC));
            } else {
              callback(null, metadata.rev_tree);
            }
          });
        };
        api._doCompaction = writeLock(function (docId, revs, opts, callback) {
          api._doCompactionNoLock(docId, revs, opts, callback);
        });
        api._doCompactionNoLock = function (docId, revs, opts, callback) {
          if (typeof opts === "function") {
            callback = opts;
            opts = {};
          }
          if (!revs.length) {
            return callback();
          }
          var txn = opts.ctx || new LevelTransaction();
          txn.get(stores.docStore, docId, function (err, metadata) {
            if (err) {
              return callback(err);
            }
            var seqs = revs.map(function (rev) {
              var seq = metadata.rev_map[rev];
              delete metadata.rev_map[rev];
              return seq;
            });
            pouchdbMerge.traverseRevTree(metadata.rev_tree, function (isLeaf, pos, revHash, ctx, opts) {
              var rev = pos + "-" + revHash;
              if (revs.indexOf(rev) !== -1) {
                opts.status = "missing";
              }
            });
            var batch = [];
            batch.push({
              key: metadata.id,
              value: metadata,
              type: "put",
              prefix: stores.docStore
            });
            var digestMap = {};
            var numDone = 0;
            var overallErr;
            function checkDone(err) {
              if (err) {
                overallErr = err;
              }
              if (++numDone === revs.length) {
                if (overallErr) {
                  return callback(overallErr);
                }
                deleteOrphanedAttachments();
              }
            }
            function finish(err) {
              if (err) {
                return callback(err);
              }
              txn.batch(batch);
              if (opts.ctx) {
                return callback();
              }
              txn.execute(db, callback);
            }
            function deleteOrphanedAttachments() {
              var possiblyOrphanedAttachments = Object.keys(digestMap);
              if (!possiblyOrphanedAttachments.length) {
                return finish();
              }
              var numDone = 0;
              var overallErr;
              function checkDone(err) {
                if (err) {
                  overallErr = err;
                }
                if (++numDone === possiblyOrphanedAttachments.length) {
                  finish(overallErr);
                }
              }
              var refsToDelete = new pouchdbCollections.Map();
              revs.forEach(function (rev) {
                refsToDelete.set(docId + "@" + rev, true);
              });
              possiblyOrphanedAttachments.forEach(function (digest) {
                txn.get(stores.attachmentStore, digest, function (err, attData) {
                  if (err) {
                    if (err.name === "NotFoundError") {
                      return checkDone();
                    } else {
                      return checkDone(err);
                    }
                  }
                  var refs = Object.keys(attData.refs || {}).filter(function (ref) {
                    return !refsToDelete.has(ref);
                  });
                  var newRefs = {};
                  refs.forEach(function (ref) {
                    newRefs[ref] = true;
                  });
                  if (refs.length) {
                    batch.push({
                      key: digest,
                      type: "put",
                      value: { refs: newRefs },
                      prefix: stores.attachmentStore
                    });
                  } else {
                    batch = batch.concat([
                      {
                        key: digest,
                        type: "del",
                        prefix: stores.attachmentStore
                      },
                      {
                        key: digest,
                        type: "del",
                        prefix: stores.binaryStore
                      }
                    ]);
                  }
                  checkDone();
                });
              });
            }
            seqs.forEach(function (seq) {
              batch.push({
                key: formatSeq(seq),
                type: "del",
                prefix: stores.bySeqStore
              });
              txn.get(stores.bySeqStore, formatSeq(seq), function (err, doc) {
                if (err) {
                  if (err.name === "NotFoundError") {
                    return checkDone();
                  } else {
                    return checkDone(err);
                  }
                }
                var atts = Object.keys(doc._attachments || {});
                atts.forEach(function (attName) {
                  var digest = doc._attachments[attName].digest;
                  digestMap[digest] = true;
                });
                checkDone();
              });
            });
          });
        };
        api._getLocal = function (id, callback) {
          stores.localStore.get(id, function (err, doc) {
            if (err) {
              callback(pouchdbErrors.createError(pouchdbErrors.MISSING_DOC));
            } else {
              callback(null, doc);
            }
          });
        };
        api._putLocal = function (doc, opts, callback) {
          if (typeof opts === "function") {
            callback = opts;
            opts = {};
          }
          if (opts.ctx) {
            api._putLocalNoLock(doc, opts, callback);
          } else {
            api._putLocalWithLock(doc, opts, callback);
          }
        };
        api._putLocalWithLock = writeLock(function (doc, opts, callback) {
          api._putLocalNoLock(doc, opts, callback);
        });
        api._putLocalNoLock = function (doc, opts, callback) {
          delete doc._revisions;
          var oldRev = doc._rev;
          var id = doc._id;
          var txn = opts.ctx || new LevelTransaction();
          txn.get(stores.localStore, id, function (err, resp) {
            if (err && oldRev) {
              return callback(pouchdbErrors.createError(pouchdbErrors.REV_CONFLICT));
            }
            if (resp && resp._rev !== oldRev) {
              return callback(pouchdbErrors.createError(pouchdbErrors.REV_CONFLICT));
            }
            doc._rev = oldRev ? "0-" + (parseInt(oldRev.split("-")[1], 10) + 1) : "0-1";
            var batch = [{
                type: "put",
                prefix: stores.localStore,
                key: id,
                value: doc
              }];
            txn.batch(batch);
            var ret = {
              ok: true,
              id: doc._id,
              rev: doc._rev
            };
            if (opts.ctx) {
              return callback(null, ret);
            }
            txn.execute(db, function (err) {
              if (err) {
                return callback(err);
              }
              callback(null, ret);
            });
          });
        };
        api._removeLocal = function (doc, opts, callback) {
          if (typeof opts === "function") {
            callback = opts;
            opts = {};
          }
          if (opts.ctx) {
            api._removeLocalNoLock(doc, opts, callback);
          } else {
            api._removeLocalWithLock(doc, opts, callback);
          }
        };
        api._removeLocalWithLock = writeLock(function (doc, opts, callback) {
          api._removeLocalNoLock(doc, opts, callback);
        });
        api._removeLocalNoLock = function (doc, opts, callback) {
          var txn = opts.ctx || new LevelTransaction();
          txn.get(stores.localStore, doc._id, function (err, resp) {
            if (err) {
              if (err.name !== "NotFoundError") {
                return callback(err);
              } else {
                return callback(pouchdbErrors.createError(pouchdbErrors.MISSING_DOC));
              }
            }
            if (resp._rev !== doc._rev) {
              return callback(pouchdbErrors.createError(pouchdbErrors.REV_CONFLICT));
            }
            txn.batch([{
                prefix: stores.localStore,
                type: "del",
                key: doc._id
              }]);
            var ret = {
              ok: true,
              id: doc._id,
              rev: "0-0"
            };
            if (opts.ctx) {
              return callback(null, ret);
            }
            txn.execute(db, function (err) {
              if (err) {
                return callback(err);
              }
              callback(null, ret);
            });
          });
        };
        api._destroy = function (opts, callback) {
          var dbStore;
          var leveldownName = pouchdbUtils$1.functionName(leveldown);
          if (dbStores.has(leveldownName)) {
            dbStore = dbStores.get(leveldownName);
          } else {
            return callDestroy(name, callback);
          }
          if (dbStore.has(name)) {
            levelChanges.removeAllListeners(name);
            dbStore.get(name).close(function () {
              dbStore.delete(name);
              callDestroy(name, callback);
            });
          } else {
            callDestroy(name, callback);
          }
        };
        function callDestroy(name, cb) {
          if ("destroy" in leveldown) {
            leveldown.destroy(name, cb);
          } else {
            cb(null);
          }
        }
      }
      exports$d = LevelPouch;
      var exports$1$5 = exports$d;

      var _global$6 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
      var exports$c = {};
      var process$4 = process$a;
      function AbstractIterator$2(db) {
        (this || _global$6).db = db;
        (this || _global$6)._ended = false;
        (this || _global$6)._nexting = false;
      }
      AbstractIterator$2.prototype.next = function (callback) {
        var self = this || _global$6;
        if (typeof callback != "function")
          throw new Error("next() requires a callback argument");
        if (self._ended)
          return callback(new Error("cannot call next() after end()"));
        if (self._nexting)
          return callback(new Error("cannot call next() before previous next() has completed"));
        self._nexting = true;
        if (typeof self._next == "function") {
          return self._next(function () {
            self._nexting = false;
            callback.apply(null, arguments);
          });
        }
        process$4.nextTick(function () {
          self._nexting = false;
          callback();
        });
      };
      AbstractIterator$2.prototype.end = function (callback) {
        if (typeof callback != "function")
          throw new Error("end() requires a callback argument");
        if ((this || _global$6)._ended)
          return callback(new Error("end() already called on iterator"));
        (this || _global$6)._ended = true;
        if (typeof (this || _global$6)._end == "function")
          return this._end(callback);
        process$4.nextTick(callback);
      };
      exports$c = AbstractIterator$2;
      var _abstractIterator = exports$c;

      var _global$5 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
      var exports$b = {};
      var process$3 = process$a;
      function AbstractChainedBatch$1(db) {
        (this || _global$5)._db = db;
        (this || _global$5)._operations = [];
        (this || _global$5)._written = false;
      }
      AbstractChainedBatch$1.prototype._checkWritten = function () {
        if ((this || _global$5)._written)
          throw new Error("write() already called on this batch");
      };
      AbstractChainedBatch$1.prototype.put = function (key, value) {
        this._checkWritten();
        var err = (this || _global$5)._db._checkKey(key, "key", (this || _global$5)._db._isBuffer);
        if (err)
          throw err;
        if (!(this || _global$5)._db._isBuffer(key))
          key = String(key);
        if (!(this || _global$5)._db._isBuffer(value))
          value = String(value);
        if (typeof (this || _global$5)._put == "function")
          this._put(key, value);
        else
          (this || _global$5)._operations.push({
            type: "put",
            key: key,
            value: value
          });
        return this || _global$5;
      };
      AbstractChainedBatch$1.prototype.del = function (key) {
        this._checkWritten();
        var err = (this || _global$5)._db._checkKey(key, "key", (this || _global$5)._db._isBuffer);
        if (err)
          throw err;
        if (!(this || _global$5)._db._isBuffer(key))
          key = String(key);
        if (typeof (this || _global$5)._del == "function")
          this._del(key);
        else
          (this || _global$5)._operations.push({
            type: "del",
            key: key
          });
        return this || _global$5;
      };
      AbstractChainedBatch$1.prototype.clear = function () {
        this._checkWritten();
        (this || _global$5)._operations = [];
        if (typeof (this || _global$5)._clear == "function")
          this._clear();
        return this || _global$5;
      };
      AbstractChainedBatch$1.prototype.write = function (options, callback) {
        this._checkWritten();
        if (typeof options == "function")
          callback = options;
        if (typeof callback != "function")
          throw new Error("write() requires a callback argument");
        if (typeof options != "object")
          options = {};
        (this || _global$5)._written = true;
        if (typeof (this || _global$5)._write == "function")
          return this._write(callback);
        if (typeof (this || _global$5)._db._batch == "function")
          return (this || _global$5)._db._batch((this || _global$5)._operations, options, callback);
        process$3.nextTick(callback);
      };
      exports$b = AbstractChainedBatch$1;
      var _abstractChainedBatch = exports$b;

      var _global$4 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
      var exports$a = {};
      var Buffer$2 = exports$14.Buffer;
      var process$2 = process$a;
      var xtend = exports$1$q, AbstractIterator$1 = _abstractIterator, AbstractChainedBatch = _abstractChainedBatch;
      function AbstractLevelDOWN$2(location) {
        if (!arguments.length || location === undefined)
          throw new Error("constructor requires at least a location argument");
        if (typeof location != "string")
          throw new Error("constructor requires a location string argument");
        (this || _global$4).location = location;
        (this || _global$4).status = "new";
      }
      AbstractLevelDOWN$2.prototype.open = function (options, callback) {
        var self = this || _global$4, oldStatus = (this || _global$4).status;
        if (typeof options == "function")
          callback = options;
        if (typeof callback != "function")
          throw new Error("open() requires a callback argument");
        if (typeof options != "object")
          options = {};
        options.createIfMissing = options.createIfMissing != false;
        options.errorIfExists = !!options.errorIfExists;
        if (typeof (this || _global$4)._open == "function") {
          (this || _global$4).status = "opening";
          this._open(options, function (err) {
            if (err) {
              self.status = oldStatus;
              return callback(err);
            }
            self.status = "open";
            callback();
          });
        } else {
          (this || _global$4).status = "open";
          process$2.nextTick(callback);
        }
      };
      AbstractLevelDOWN$2.prototype.close = function (callback) {
        var self = this || _global$4, oldStatus = (this || _global$4).status;
        if (typeof callback != "function")
          throw new Error("close() requires a callback argument");
        if (typeof (this || _global$4)._close == "function") {
          (this || _global$4).status = "closing";
          this._close(function (err) {
            if (err) {
              self.status = oldStatus;
              return callback(err);
            }
            self.status = "closed";
            callback();
          });
        } else {
          (this || _global$4).status = "closed";
          process$2.nextTick(callback);
        }
      };
      AbstractLevelDOWN$2.prototype.get = function (key, options, callback) {
        var err;
        if (typeof options == "function")
          callback = options;
        if (typeof callback != "function")
          throw new Error("get() requires a callback argument");
        if (err = this._checkKey(key, "key", (this || _global$4)._isBuffer))
          return callback(err);
        if (!this._isBuffer(key))
          key = String(key);
        if (typeof options != "object")
          options = {};
        options.asBuffer = options.asBuffer != false;
        if (typeof (this || _global$4)._get == "function")
          return this._get(key, options, callback);
        process$2.nextTick(function () {
          callback(new Error("NotFound"));
        });
      };
      AbstractLevelDOWN$2.prototype.put = function (key, value, options, callback) {
        var err;
        if (typeof options == "function")
          callback = options;
        if (typeof callback != "function")
          throw new Error("put() requires a callback argument");
        if (err = this._checkKey(key, "key", (this || _global$4)._isBuffer))
          return callback(err);
        if (!this._isBuffer(key))
          key = String(key);
        if (value != null && !this._isBuffer(value) && !process$2.browser)
          value = String(value);
        if (typeof options != "object")
          options = {};
        if (typeof (this || _global$4)._put == "function")
          return this._put(key, value, options, callback);
        process$2.nextTick(callback);
      };
      AbstractLevelDOWN$2.prototype.del = function (key, options, callback) {
        var err;
        if (typeof options == "function")
          callback = options;
        if (typeof callback != "function")
          throw new Error("del() requires a callback argument");
        if (err = this._checkKey(key, "key", (this || _global$4)._isBuffer))
          return callback(err);
        if (!this._isBuffer(key))
          key = String(key);
        if (typeof options != "object")
          options = {};
        if (typeof (this || _global$4)._del == "function")
          return this._del(key, options, callback);
        process$2.nextTick(callback);
      };
      AbstractLevelDOWN$2.prototype.batch = function (array, options, callback) {
        if (!arguments.length)
          return this._chainedBatch();
        if (typeof options == "function")
          callback = options;
        if (typeof array == "function")
          callback = array;
        if (typeof callback != "function")
          throw new Error("batch(array) requires a callback argument");
        if (!Array.isArray(array))
          return callback(new Error("batch(array) requires an array argument"));
        if (!options || typeof options != "object")
          options = {};
        var i = 0, l = array.length, e, err;
        for (; i < l; i++) {
          e = array[i];
          if (typeof e != "object")
            continue;
          if (err = this._checkKey(e.type, "type", (this || _global$4)._isBuffer))
            return callback(err);
          if (err = this._checkKey(e.key, "key", (this || _global$4)._isBuffer))
            return callback(err);
        }
        if (typeof (this || _global$4)._batch == "function")
          return this._batch(array, options, callback);
        process$2.nextTick(callback);
      };
      AbstractLevelDOWN$2.prototype.approximateSize = function (start, end, callback) {
        if (start == null || end == null || typeof start == "function" || typeof end == "function") {
          throw new Error("approximateSize() requires valid `start`, `end` and `callback` arguments");
        }
        if (typeof callback != "function")
          throw new Error("approximateSize() requires a callback argument");
        if (!this._isBuffer(start))
          start = String(start);
        if (!this._isBuffer(end))
          end = String(end);
        if (typeof (this || _global$4)._approximateSize == "function")
          return this._approximateSize(start, end, callback);
        process$2.nextTick(function () {
          callback(null, 0);
        });
      };
      AbstractLevelDOWN$2.prototype._setupIteratorOptions = function (options) {
        var self = this || _global$4;
        options = xtend(options);
        [
          "start",
          "end",
          "gt",
          "gte",
          "lt",
          "lte"
        ].forEach(function (o) {
          if (options[o] && self._isBuffer(options[o]) && options[o].length === 0)
            delete options[o];
        });
        options.reverse = !!options.reverse;
        options.keys = options.keys != false;
        options.values = options.values != false;
        options.limit = "limit" in options ? options.limit : -1;
        options.keyAsBuffer = options.keyAsBuffer != false;
        options.valueAsBuffer = options.valueAsBuffer != false;
        return options;
      };
      AbstractLevelDOWN$2.prototype.iterator = function (options) {
        if (typeof options != "object")
          options = {};
        options = this._setupIteratorOptions(options);
        if (typeof (this || _global$4)._iterator == "function")
          return this._iterator(options);
        return new AbstractIterator$1(this || _global$4);
      };
      AbstractLevelDOWN$2.prototype._chainedBatch = function () {
        return new AbstractChainedBatch(this || _global$4);
      };
      AbstractLevelDOWN$2.prototype._isBuffer = function (obj) {
        return Buffer$2.isBuffer(obj);
      };
      AbstractLevelDOWN$2.prototype._checkKey = function (obj, type) {
        if (obj === null || obj === undefined)
          return new Error(type + " cannot be `null` or `undefined`");
        if (this._isBuffer(obj)) {
          if (obj.length === 0)
            return new Error(type + " cannot be an empty Buffer");
        } else if (String(obj) === "")
          return new Error(type + " cannot be an empty String");
      };
      exports$a = AbstractLevelDOWN$2;
      var _abstractLeveldown = exports$a;

      var exports$9 = {};
      var AbstractLevelDOWN$1 = _abstractLeveldown;
      function isLevelDOWN(db) {
        if (!db || typeof db !== "object")
          return false;
        return Object.keys(AbstractLevelDOWN$1.prototype).filter(function (name) {
          return name[0] != "_" && name != "approximateSize";
        }).every(function (name) {
          return typeof db[name] == "function";
        });
      }
      exports$9 = isLevelDOWN;
      var _isLeveldown = exports$9;
      var exports$1$4 = {};
      exports$1$4.AbstractLevelDOWN = _abstractLeveldown;
      exports$1$4.AbstractIterator = _abstractIterator;
      exports$1$4.AbstractChainedBatch = _abstractChainedBatch;
      exports$1$4.isLevelDOWN = _isLeveldown;

      var exports$8 = {};
      var Buffer$1 = exports$14.Buffer;
      exports$8.compare = function (a, b) {
        if (Buffer$1.isBuffer(a)) {
          var l = Math.min(a.length, b.length);
          for (var i = 0; i < l; i++) {
            var cmp = a[i] - b[i];
            if (cmp)
              return cmp;
          }
          return a.length - b.length;
        }
        return a < b ? -1 : a > b ? 1 : 0;
      };
      function isDef(val) {
        return val !== undefined && val !== "";
      }
      function has(range, name) {
        return Object.hasOwnProperty.call(range, name);
      }
      function hasKey(range, name) {
        return Object.hasOwnProperty.call(range, name) && name;
      }
      var lowerBoundKey = exports$8.lowerBoundKey = function (range) {
        return hasKey(range, "gt") || hasKey(range, "gte") || hasKey(range, "min") || (range.reverse ? hasKey(range, "end") : hasKey(range, "start")) || undefined;
      };
      var lowerBound = exports$8.lowerBound = function (range) {
        var k = lowerBoundKey(range);
        return k && range[k];
      };
      var lowerBoundInclusive = exports$8.lowerBoundInclusive = function (range) {
        return has(range, "gt") ? false : true;
      };
      var upperBoundInclusive = exports$8.upperBoundInclusive = function (range) {
        return has(range, "lt") ? false : true;
      };
      var lowerBoundExclusive = exports$8.lowerBoundExclusive = function (range) {
        return !lowerBoundInclusive(range);
      };
      var upperBoundExclusive = exports$8.upperBoundExclusive = function (range) {
        return !upperBoundInclusive(range);
      };
      var upperBoundKey = exports$8.upperBoundKey = function (range) {
        return hasKey(range, "lt") || hasKey(range, "lte") || hasKey(range, "max") || (range.reverse ? hasKey(range, "start") : hasKey(range, "end")) || undefined;
      };
      var upperBound = exports$8.upperBound = function (range) {
        var k = upperBoundKey(range);
        return k && range[k];
      };
      function id(e) {
        return e;
      }
      exports$8.toLtgt = function (range, _range, map, lower, upper) {
        _range = _range || {};
        map = map || id;
        var defaults = arguments.length > 3;
        var lb = exports$8.lowerBoundKey(range);
        var ub = exports$8.upperBoundKey(range);
        if (lb) {
          if (lb === "gt")
            _range.gt = map(range.gt, false);
          else
            _range.gte = map(range[lb], false);
        } else if (defaults)
          _range.gte = map(lower, false);
        if (ub) {
          if (ub === "lt")
            _range.lt = map(range.lt, true);
          else
            _range.lte = map(range[ub], true);
        } else if (defaults)
          _range.lte = map(upper, true);
        if (range.reverse != null)
          _range.reverse = !!range.reverse;
        if (has(_range, "max"))
          delete _range.max;
        if (has(_range, "min"))
          delete _range.min;
        if (has(_range, "start"))
          delete _range.start;
        if (has(_range, "end"))
          delete _range.end;
        return _range;
      };
      exports$8.contains = function (range, key, compare) {
        compare = compare || exports$8.compare;
        var lb = lowerBound(range);
        if (isDef(lb)) {
          var cmp = compare(key, lb);
          if (cmp < 0 || cmp === 0 && lowerBoundExclusive(range))
            return false;
        }
        var ub = upperBound(range);
        if (isDef(ub)) {
          var cmp = compare(key, ub);
          if (cmp > 0 || cmp === 0 && upperBoundExclusive(range))
            return false;
        }
        return true;
      };
      exports$8.filter = function (range, compare) {
        return function (key) {
          return exports$8.contains(range, key, compare);
        };
      };
      exports$8.compare; exports$8.toLtgt; exports$8.contains; exports$8.filter;
      exports$8.lowerBoundKey; exports$8.lowerBound; exports$8.lowerBoundInclusive; exports$8.upperBoundInclusive; exports$8.lowerBoundExclusive; exports$8.upperBoundExclusive; exports$8.upperBoundKey; exports$8.upperBound;

      var exports$7 = {};
      var process$1 = process$a;
      exports$7.test = function () {
        return typeof process$1 !== "undefined" && !process$1.browser;
      };
      exports$7.install = function (func) {
        return function () {
          process$1.nextTick(func);
        };
      };
      exports$7.test; exports$7.install;

      var _global$1 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
      var exports$3 = {};
      exports$3.test = function () {
        return typeof _global$1.queueMicrotask === "function";
      };
      exports$3.install = function (func) {
        return function () {
          _global$1.queueMicrotask(func);
        };
      };
      var _global$1$1 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
      var exports$1$3 = {};
      var Mutation = _global$1$1.MutationObserver || _global$1$1.WebKitMutationObserver;
      exports$1$3.test = function () {
        return Mutation;
      };
      exports$1$3.install = function (handle) {
        var called = 0;
        var observer = new Mutation(handle);
        var element = _global$1$1.document.createTextNode("");
        observer.observe(element, { characterData: true });
        return function () {
          element.data = called = ++called % 2;
        };
      };
      var _global$2 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
      var exports$2$1 = {};
      exports$2$1.test = function () {
        if (_global$2.setImmediate) {
          return false;
        }
        return typeof _global$2.MessageChannel !== "undefined";
      };
      exports$2$1.install = function (func) {
        var channel = new _global$2.MessageChannel();
        channel.port1.onmessage = func;
        return function () {
          channel.port2.postMessage(0);
        };
      };
      var _global$3 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
      var exports$3$1 = {};
      exports$3$1.test = function () {
        return "document" in _global$3 && "onreadystatechange" in _global$3.document.createElement("script");
      };
      exports$3$1.install = function (handle) {
        return function () {
          var scriptEl = _global$3.document.createElement("script");
          scriptEl.onreadystatechange = function () {
            handle();
            scriptEl.onreadystatechange = null;
            scriptEl.parentNode.removeChild(scriptEl);
            scriptEl = null;
          };
          _global$3.document.documentElement.appendChild(scriptEl);
          return handle;
        };
      };
      var exports$4 = {};
      exports$4.test = function () {
        return true;
      };
      exports$4.install = function (t) {
        return function () {
          setTimeout(t, 0);
        };
      };
      var exports$5 = {};
      var types = [
        exports$7,
        exports$3,
        exports$1$3,
        exports$2$1,
        exports$3$1,
        exports$4
      ];
      var draining;
      var currentQueue;
      var queueIndex = -1;
      var queue = [];
      var scheduled = false;
      function cleanUpNextTick() {
        if (!draining || !currentQueue) {
          return;
        }
        draining = false;
        if (currentQueue.length) {
          queue = currentQueue.concat(queue);
        } else {
          queueIndex = -1;
        }
        if (queue.length) {
          nextTick();
        }
      }
      function nextTick() {
        if (draining) {
          return;
        }
        scheduled = false;
        draining = true;
        var len = queue.length;
        var timeout = setTimeout(cleanUpNextTick);
        while (len) {
          currentQueue = queue;
          queue = [];
          while (currentQueue && ++queueIndex < len) {
            currentQueue[queueIndex].run();
          }
          queueIndex = -1;
          len = queue.length;
        }
        currentQueue = null;
        queueIndex = -1;
        draining = false;
        clearTimeout(timeout);
      }
      var scheduleDrain;
      var i = -1;
      var len = types.length;
      while (++i < len) {
        if (types[i] && types[i].test && types[i].test()) {
          scheduleDrain = types[i].install(nextTick);
          break;
        }
      }
      function Item(fun, array) {
        this.fun = fun;
        this.array = array;
      }
      Item.prototype.run = function () {
        var fun = this.fun;
        var array = this.array;
        switch (array.length) {
        case 0:
          return fun();
        case 1:
          return fun(array[0]);
        case 2:
          return fun(array[0], array[1]);
        case 3:
          return fun(array[0], array[1], array[2]);
        default:
          return fun.apply(null, array);
        }
      };
      exports$5 = immediate;
      function immediate(task) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
          }
        }
        queue.push(new Item(task, args));
        if (!scheduled && !draining) {
          scheduled = true;
          scheduleDrain();
        }
      }
      var exports$6 = exports$5;

      var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
      var exports$2 = {};
      var Buffer = exports$14.Buffer;
      var inherits = exports$1$w, AbstractLevelDOWN = exports$1$4.AbstractLevelDOWN, AbstractIterator = exports$1$4.AbstractIterator, ltgt = exports$8, createRBT = exports$1$x, globalStore = {};
      var setImmediate = exports$6;
      function gt(value) {
        return ltgt.compare(value, (this || _global)._end) > 0;
      }
      function gte(value) {
        return ltgt.compare(value, (this || _global)._end) >= 0;
      }
      function lt(value) {
        return ltgt.compare(value, (this || _global)._end) < 0;
      }
      function lte(value) {
        return ltgt.compare(value, (this || _global)._end) <= 0;
      }
      function MemIterator(db, options) {
        AbstractIterator.call(this || _global, db);
        (this || _global)._limit = options.limit;
        if ((this || _global)._limit === -1)
          (this || _global)._limit = Infinity;
        var tree = db._store[db._location];
        (this || _global).keyAsBuffer = options.keyAsBuffer !== false;
        (this || _global).valueAsBuffer = options.valueAsBuffer !== false;
        (this || _global)._reverse = options.reverse;
        (this || _global)._options = options;
        (this || _global)._done = 0;
        if (!(this || _global)._reverse) {
          (this || _global)._incr = "next";
          (this || _global)._start = ltgt.lowerBound(options);
          (this || _global)._end = ltgt.upperBound(options);
          if (typeof (this || _global)._start === "undefined")
            (this || _global)._tree = tree.begin;
          else if (ltgt.lowerBoundInclusive(options))
            (this || _global)._tree = tree.ge((this || _global)._start);
          else
            (this || _global)._tree = tree.gt((this || _global)._start);
          if ((this || _global)._end) {
            if (ltgt.upperBoundInclusive(options))
              (this || _global)._test = lte;
            else
              (this || _global)._test = lt;
          }
        } else {
          (this || _global)._incr = "prev";
          (this || _global)._start = ltgt.upperBound(options);
          (this || _global)._end = ltgt.lowerBound(options);
          if (typeof (this || _global)._start === "undefined")
            (this || _global)._tree = tree.end;
          else if (ltgt.upperBoundInclusive(options))
            (this || _global)._tree = tree.le((this || _global)._start);
          else
            (this || _global)._tree = tree.lt((this || _global)._start);
          if ((this || _global)._end) {
            if (ltgt.lowerBoundInclusive(options))
              (this || _global)._test = gte;
            else
              (this || _global)._test = gt;
          }
        }
      }
      inherits(MemIterator, AbstractIterator);
      MemIterator.prototype._next = function (callback) {
        var key, value;
        if ((this || _global)._done++ >= (this || _global)._limit)
          return setImmediate(callback);
        if (!(this || _global)._tree.valid)
          return setImmediate(callback);
        key = (this || _global)._tree.key;
        value = (this || _global)._tree.value;
        if (!this._test(key))
          return setImmediate(callback);
        if ((this || _global).keyAsBuffer)
          key = new Buffer(key);
        if ((this || _global).valueAsBuffer)
          value = new Buffer(value);
        (this || _global)._tree[(this || _global)._incr]();
        setImmediate(function callNext() {
          callback(null, key, value);
        });
      };
      MemIterator.prototype._test = function () {
        return true;
      };
      function MemDOWN(location) {
        if (!((this || _global) instanceof MemDOWN))
          return new MemDOWN(location);
        AbstractLevelDOWN.call(this || _global, typeof location == "string" ? location : "");
        (this || _global)._location = (this || _global).location ? "$" + (this || _global).location : "_tree";
        (this || _global)._store = (this || _global).location ? globalStore : this || _global;
        (this || _global)._store[(this || _global)._location] = (this || _global)._store[(this || _global)._location] || createRBT(ltgt.compare);
      }
      MemDOWN.clearGlobalStore = function (strict) {
        if (strict) {
          Object.keys(globalStore).forEach(function (key) {
            delete globalStore[key];
          });
        } else {
          globalStore = {};
        }
      };
      inherits(MemDOWN, AbstractLevelDOWN);
      MemDOWN.prototype._open = function (options, callback) {
        var self = this || _global;
        setImmediate(function callNext() {
          callback(null, self);
        });
      };
      MemDOWN.prototype._put = function (key, value, options, callback) {
        if (typeof value === "undefined" || value === null)
          value = "";
        var iter = (this || _global)._store[(this || _global)._location].find(key);
        if (iter.valid) {
          (this || _global)._store[(this || _global)._location] = iter.update(value);
        } else {
          (this || _global)._store[(this || _global)._location] = (this || _global)._store[(this || _global)._location].insert(key, value);
        }
        setImmediate(callback);
      };
      MemDOWN.prototype._get = function (key, options, callback) {
        var value = (this || _global)._store[(this || _global)._location].get(key);
        if (typeof value === "undefined") {
          return setImmediate(function callNext() {
            callback(new Error("NotFound"));
          });
        }
        if (options.asBuffer !== false && !this._isBuffer(value))
          value = new Buffer(String(value));
        setImmediate(function callNext() {
          callback(null, value);
        });
      };
      MemDOWN.prototype._del = function (key, options, callback) {
        (this || _global)._store[(this || _global)._location] = (this || _global)._store[(this || _global)._location].remove(key);
        setImmediate(callback);
      };
      MemDOWN.prototype._batch = function (array, options, callback) {
        var i = -1, key, value, iter, len = array.length, tree = (this || _global)._store[(this || _global)._location];
        while (++i < len) {
          if (!array[i])
            continue;
          key = this._isBuffer(array[i].key) ? array[i].key : String(array[i].key);
          iter = tree.find(key);
          if (array[i].type === "put") {
            value = this._isBuffer(array[i].value) ? array[i].value : String(array[i].value);
            tree = iter.valid ? iter.update(value) : tree.insert(key, value);
          } else {
            tree = iter.remove();
          }
        }
        (this || _global)._store[(this || _global)._location] = tree;
        setImmediate(callback);
      };
      MemDOWN.prototype._iterator = function (options) {
        return new MemIterator(this || _global, options);
      };
      MemDOWN.prototype._isBuffer = function (obj) {
        return Buffer.isBuffer(obj);
      };
      MemDOWN.destroy = function (name, callback) {
        var key = "$" + name;
        if (key in globalStore)
          delete globalStore[key];
        setImmediate(callback);
      };
      exports$2 = MemDOWN;
      var exports$1$2 = exports$2;

      var exports$1 = {};
      function _interopDefault(ex) {
        return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
      }
      var pouchdbUtils = exports$R;
      var CoreLevelPouch = _interopDefault(exports$1$5);
      var memdown = _interopDefault(exports$1$2);
      function MemDownPouch(opts, callback) {
        var _opts = pouchdbUtils.assign({ db: memdown }, opts);
        CoreLevelPouch.call(this, _opts, callback);
      }
      MemDownPouch.valid = function () {
        return true;
      };
      MemDownPouch.use_prefix = false;
      function index(PouchDB) {
        PouchDB.adapter("memory", MemDownPouch, true);
      }
      exports$1 = index;
      var exports$1$1 = exports$1;

      var __varRecorder__$3 = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.storage/database.js", __contextModule__);

      var __moduleMeta__$2 = {
        pathInPackage: function pathInPackage() {
          return "./database.js";
        },
        unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
          return function () {};
        },
        subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
          return function () {};
        },
        "package": function _package() {
          return {
            name: "lively.storage",
            version: "0.2.3"
          };
        }
      };

      var nodejsRequire = __varRecorder__$3["lively.storage/database.js__define__"]("nodejsRequire", "function", function (name) {
        if (!__varRecorder__$3.isNode) throw new Error("nodejsRequire can only be used in nodejs!");
        if (typeof System !== "undefined") return System._nodeRequire(name);
        return require("module")._load(name);
      }, __moduleMeta__$2);

      __varRecorder__$3.nodejsRequire = nodejsRequire;

      var nodejs_leveldbPath = __varRecorder__$3["lively.storage/database.js__define__"]("nodejs_leveldbPath", "function", function (dbName) {
        if (dbName.startsWith("/")) return dbName;

        if (dbName.match(/[^\/]+:\/\//)) {
          if (dbName.startsWith("file:")) {
            dbName = dbName.replace(/^file:\/\//, "");
          }

          return dbName;
        }

        if (!__varRecorder__$3.isNode) throw new Error("nodejs_leveldbPath called under non-nodejs environment");
        var basePath = typeof System !== "undefined" && System.baseURL.startsWith("file://") ? System.baseURL.replace("file://", "") : __varRecorder__$3.GLOB.process.cwd();

        var _varRecorder__$nodej = __varRecorder__$3.nodejsRequire("path"),
            join = _varRecorder__$nodej.join;

        var _varRecorder__$nodej2 = __varRecorder__$3.nodejsRequire("fs"),
            mkdirSync = _varRecorder__$nodej2.mkdirSync,
            existsSync = _varRecorder__$nodej2.existsSync;
            _varRecorder__$nodej2.readdirSync;
            var readFileSync = _varRecorder__$nodej2.readFileSync;

        if (dbName.includes("/")) return join(basePath, dbName);

        try {
          var parentPackage = readFileSync(join(basePath, "../package.json"));
          var conf = JSON.parse(parentPackage);

          if (conf.name === "lively.web" || conf.name === "lively.next") {
            var _dbDir = join(basePath, "../.livelydbs");

            if (!existsSync(_dbDir)) mkdirSync(_dbDir);
            return join(_dbDir, dbName);
          }
        } catch (e) {}

        var dbDir = join(basePath, ".livelydbs");
        if (!existsSync(dbDir)) mkdirSync(dbDir);
        return join(dbDir, dbName);
      }, __moduleMeta__$2);

      __varRecorder__$3.nodejs_leveldbPath = nodejs_leveldbPath;

      var nodejs_attemptToLoadProperPouchDB = __varRecorder__$3["lively.storage/database.js__define__"]("nodejs_attemptToLoadProperPouchDB", "function", function () {
        if (!__varRecorder__$3.isNode) throw new Error("nodejs_attemptToLoadProperPouchDB called under non-nodejs environment");

        if (typeof System !== "undefined") {
          var _System$_nodeRequire = System._nodeRequire("path"),
              join = _System$_nodeRequire.join;

          var storageMain = System.normalizeSync("lively.storage/index.js");
          var pouchDBMain = System.normalizeSync("pouchdb", storageMain).replace(/file:\/\//, "");
          var pouchDBNodeMain = join(pouchDBMain, "../../lib/index.js");

          try {
            __varRecorder__$3.PouchDB = System._nodeRequire(pouchDBNodeMain);

            __varRecorder__$3.PouchDB.plugin(exports$1$1);

            return true;
          } catch (e) {
            return false;
          }
        }

        try {
          __varRecorder__$3.PouchDB = require("pouchdb");

          __varRecorder__$3.PouchDB.plugin(exports$1$1);

          return true;
        } catch (err) {
          return false;
        }
      }, __moduleMeta__$2);

      __varRecorder__$3.nodejs_attemptToLoadProperPouchDB = nodejs_attemptToLoadProperPouchDB;
      __varRecorder__$3.GLOB = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : undefined;
      __varRecorder__$3.isNode = typeof global !== "undefined" && typeof process !== "undefined";
      __varRecorder__$3.PouchDB = exports$1$r;
      if (__varRecorder__$3.PouchDB && __varRecorder__$3.PouchDB.plugin && exports$1$1) __varRecorder__$3.PouchDB.plugin(exports$1$1);
      __varRecorder__$3.createPouchDB = !__varRecorder__$3.isNode ? function (name, options) {
        return new __varRecorder__$3.PouchDB(Object.assign({
          name: name
        }, options));
      } : function () {
        var properLoadAttempted = false;
        var nodejsCouchDBLoaded = false;
        return function createPouchDB(name) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          if (!properLoadAttempted) {
            properLoadAttempted = true;
            nodejsCouchDBLoaded = __varRecorder__$3.nodejs_attemptToLoadProperPouchDB();
          }

          if (!options.adapter) {
            options.adapter = name.startsWith("http") ? "http" : nodejsCouchDBLoaded ? "leveldb" : "memory";
          }

          if (options.adapter == "leveldb") {
            name = __varRecorder__$3.nodejs_leveldbPath(name);
          }

          options = Object.assign({}, options, {
            name: name
          });
          return new __varRecorder__$3.PouchDB(options);
        };
      }();

      var Database = exports('Database', /*#__PURE__*/function () {
        _createClass(Database, null, [{
          key: "findDB",
          value: function findDB(name) {
            return this.databases.get(name);
          }
        }, {
          key: "ensureDB",
          value: function ensureDB(name, options) {
            var db = this.findDB(name);
            if (db) return db;
            db = new this(name, options);
            this.databases.set(name, db);

            if (!name.endsWith("lively.storage-meta")) {
              this.createMetaEntryForDB(name, options);
            }

            return db;
          }
        }, {
          key: "knownDBs",
          value: function knownDBs(dbName, options) {
            var metaDB = __varRecorder__$3.Database.ensureDB("lively.storage-meta");

            return metaDB.getAll().then(function (metaEntries) {
              return metaEntries.map(function (ea) {
                return ea._id;
              });
            });
          }
        }, {
          key: "createMetaEntryForDB",
          value: function createMetaEntryForDB(dbName, options) {
            var metaDB = __varRecorder__$3.Database.ensureDB("lively.storage-meta");

            metaDB.has(dbName).then(function (known) {
              return !known && metaDB.set(dbName, {
                created: Date.now(),
                options: options
              });
            });
          }
        }, {
          key: "knowsDB",
          value: function () {
            var _knowsDB = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dbName) {
              var db, docCount;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      db = this.ensureDB(dbName);
                      _context.next = 3;
                      return db.docCount();

                    case 3:
                      docCount = _context.sent;

                      if (!(docCount > 0)) {
                        _context.next = 6;
                        break;
                      }

                      return _context.abrupt("return", true);

                    case 6:
                      _context.next = 8;
                      return db.destroy();

                    case 8:
                      return _context.abrupt("return", false);

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function knowsDB(_x) {
              return _knowsDB.apply(this, arguments);
            }

            return knowsDB;
          }()
        }, {
          key: "PouchDB",
          get: function get() {
            return __varRecorder__$3.PouchDB;
          },
          set: function set(klass) {
            __varRecorder__$3.PouchDB = klass;
          }
        }, {
          key: "databases",
          get: function get() {
            return this._databases || (this._databases = new Map());
          }
        }]);

        function Database(name) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _classCallCheck(this, Database);

          this.name = name;
          this.options = options;
          this._pouchdb = null;
        }

        _createClass(Database, [{
          key: "close",
          value: function close() {
            if (!this._pouchdb) return;

            this._pouchdb.close();

            delete this._pouchdb;
          }
        }, {
          key: "isDestroyed",
          value: function isDestroyed() {
            return !!this.pouchdb._destroyed;
          }
        }, {
          key: "destroy",
          value: function destroy(opts) {
            this.constructor.databases["delete"](this.name);
            return this.isDestroyed() ? {
              ok: true
            } : this.pouchdb.destroy(opts);
          }
        }, {
          key: "update",
          value: function () {
            var _update = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_id, updateFn, options) {
              var updateAttempt,
                  _options,
                  _options$ensure,
                  ensure,
                  _options$retryOnConfl,
                  retryOnConflict,
                  _options$maxUpdateAtt,
                  maxUpdateAttempts,
                  getOpts,
                  db,
                  lastDoc,
                  newDoc,
                  _yield$db$put,
                  rev,
                  _args2 = arguments;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      updateAttempt = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : 0;
                      options = options || {};
                      _options = options, _options$ensure = _options.ensure, ensure = _options$ensure === void 0 ? true : _options$ensure, _options$retryOnConfl = _options.retryOnConflict, retryOnConflict = _options$retryOnConfl === void 0 ? true : _options$retryOnConfl, _options$maxUpdateAtt = _options.maxUpdateAttempts, maxUpdateAttempts = _options$maxUpdateAtt === void 0 ? 10 : _options$maxUpdateAtt;
                      getOpts = {
                        latest: true
                      };
                      db = this.pouchdb;
                      _context2.prev = 5;
                      _context2.next = 8;
                      return db.get(_id, getOpts);

                    case 8:
                      lastDoc = _context2.sent;
                      _context2.next = 15;
                      break;

                    case 11:
                      _context2.prev = 11;
                      _context2.t0 = _context2["catch"](5);

                      if (!(_context2.t0.name !== "not_found" || !ensure)) {
                        _context2.next = 15;
                        break;
                      }

                      throw _context2.t0;

                    case 15:
                      _context2.next = 17;
                      return updateFn(lastDoc);

                    case 17:
                      newDoc = _context2.sent;

                      if (!(!newDoc || _typeof(newDoc) !== "object")) {
                        _context2.next = 20;
                        break;
                      }

                      return _context2.abrupt("return", null);

                    case 20:
                      if (newDoc._id !== _id) newDoc._id = _id;
                      if (lastDoc && newDoc._rev !== lastDoc._rev) newDoc._rev = lastDoc._rev;
                      _context2.prev = 22;
                      _context2.next = 25;
                      return db.put(newDoc);

                    case 25:
                      _yield$db$put = _context2.sent;
                      rev = _yield$db$put.rev;
                      return _context2.abrupt("return", Object.assign(newDoc, {
                        _rev: rev
                      }));

                    case 31:
                      _context2.prev = 31;
                      _context2.t1 = _context2["catch"](22);

                      if (!(_context2.t1.name === "conflict" && retryOnConflict && updateAttempt < maxUpdateAttempts)) {
                        _context2.next = 35;
                        break;
                      }

                      return _context2.abrupt("return", this.update(_id, updateFn, options, updateAttempt + 1));

                    case 35:
                      throw _context2.t1;

                    case 36:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[5, 11], [22, 31]]);
            }));

            function update(_x2, _x3, _x4) {
              return _update.apply(this, arguments);
            }

            return update;
          }()
        }, {
          key: "mixin",
          value: function () {
            var _mixin2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_id, _mixin, options) {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      return _context3.abrupt("return", this.update(_id, function (oldDoc) {
                        return Object.assign(oldDoc || {
                          _id: _id
                        }, _mixin);
                      }, options));

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function mixin(_x5, _x6, _x7) {
              return _mixin2.apply(this, arguments);
            }

            return mixin;
          }()
        }, {
          key: "set",
          value: function () {
            var _set = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(id, value, options) {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      return _context4.abrupt("return", this.update(id, function (_) {
                        return value;
                      }, options));

                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function set(_x8, _x9, _x10) {
              return _set.apply(this, arguments);
            }

            return set;
          }()
        }, {
          key: "get",
          value: function () {
            var _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(id) {
              var opts,
                  _args5 = arguments;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      opts = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : {};
                      _context5.prev = 1;
                      _context5.next = 4;
                      return this.pouchdb.get(id, opts);

                    case 4:
                      return _context5.abrupt("return", _context5.sent);

                    case 7:
                      _context5.prev = 7;
                      _context5.t0 = _context5["catch"](1);

                      if (!(_context5.t0.name === "not_found")) {
                        _context5.next = 11;
                        break;
                      }

                      return _context5.abrupt("return", undefined);

                    case 11:
                      throw _context5.t0;

                    case 12:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this, [[1, 7]]);
            }));

            function get(_x11) {
              return _get.apply(this, arguments);
            }

            return get;
          }()
        }, {
          key: "has",
          value: function () {
            var _has = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(id) {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.get(id);

                    case 2:
                      return _context6.abrupt("return", !!_context6.sent);

                    case 3:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function has(_x12) {
              return _has.apply(this, arguments);
            }

            return has;
          }()
        }, {
          key: "add",
          value: function () {
            var _add = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(doc) {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      return _context7.abrupt("return", this.pouchdb.post(doc));

                    case 1:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            function add(_x13) {
              return _add.apply(this, arguments);
            }

            return add;
          }()
        }, {
          key: "docList",
          value: function () {
            var _docList = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var opts,
                  _yield$this$pouchdb$a,
                  rows,
                  result,
                  i,
                  _rows$i,
                  id,
                  rev,
                  _args8 = arguments;

              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      opts = _args8.length > 0 && _args8[0] !== undefined ? _args8[0] : {};
                      _context8.next = 3;
                      return this.pouchdb.allDocs(opts);

                    case 3:
                      _yield$this$pouchdb$a = _context8.sent;
                      rows = _yield$this$pouchdb$a.rows;
                      result = [];

                      for (i = 0; i < rows.length; i++) {
                        _rows$i = rows[i], id = _rows$i.id, rev = _rows$i.value.rev;
                        result.push({
                          id: id,
                          rev: rev
                        });
                      }

                      return _context8.abrupt("return", result);

                    case 8:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function docList() {
              return _docList.apply(this, arguments);
            }

            return docList;
          }()
        }, {
          key: "docCount",
          value: function () {
            var _docCount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var entries;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.pouchdb.allDocs();

                    case 2:
                      entries = _context9.sent;
                      return _context9.abrupt("return", entries.rows.length);

                    case 4:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));

            function docCount() {
              return _docCount.apply(this, arguments);
            }

            return docCount;
          }()
        }, {
          key: "revList",
          value: function () {
            var _revList = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(id) {
              var _yield$this$pouchdb$g, _yield$this$pouchdb$g2, start, ids;

              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return this.pouchdb.get(id, {
                        revs: true
                      });

                    case 2:
                      _yield$this$pouchdb$g = _context10.sent;
                      _yield$this$pouchdb$g2 = _yield$this$pouchdb$g._revisions;
                      start = _yield$this$pouchdb$g2.start;
                      ids = _yield$this$pouchdb$g2.ids;
                      return _context10.abrupt("return", ids.map(function (ea) {
                        return "".concat(start--, "-").concat(ea);
                      }));

                    case 8:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));

            function revList(_x14) {
              return _revList.apply(this, arguments);
            }

            return revList;
          }()
        }, {
          key: "getAllRevisions",
          value: function () {
            var _getAllRevisions = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(id) {
              var options,
                  _options$skip,
                  skip,
                  _options$limit,
                  limit,
                  revs,
                  query,
                  _args11 = arguments;

              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      options = _args11.length > 1 && _args11[1] !== undefined ? _args11[1] : {};
                      _options$skip = options.skip, skip = _options$skip === void 0 ? 0 : _options$skip, _options$limit = options.limit, limit = _options$limit === void 0 ? 0 : _options$limit;
                      _context11.next = 4;
                      return this.revList(id);

                    case 4:
                      revs = _context11.sent;
                      if (skip > 0) revs = revs.slice(skip);
                      if (limit > 0) revs = revs.slice(0, limit);
                      query = revs.map(function (rev) {
                        return {
                          rev: rev,
                          id: id
                        };
                      });
                      _context11.next = 10;
                      return this.getDocuments(query);

                    case 10:
                      return _context11.abrupt("return", _context11.sent);

                    case 11:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));

            function getAllRevisions(_x15) {
              return _getAllRevisions.apply(this, arguments);
            }

            return getAllRevisions;
          }()
        }, {
          key: "getAll",
          value: function () {
            var _getAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var options,
                  _yield$this$pouchdb$a2,
                  rows,
                  _args12 = arguments;

              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      options = _args12.length > 0 && _args12[0] !== undefined ? _args12[0] : {};
                      _context12.next = 3;
                      return this.pouchdb.allDocs(Object.assign({}, options, {
                        include_docs: true
                      }));

                    case 3:
                      _yield$this$pouchdb$a2 = _context12.sent;
                      rows = _yield$this$pouchdb$a2.rows;
                      return _context12.abrupt("return", rows.map(function (ea) {
                        return ea.doc;
                      }));

                    case 6:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));

            function getAll() {
              return _getAll.apply(this, arguments);
            }

            return getAll;
          }()
        }, {
          key: "setDocuments",
          value: function () {
            var _setDocuments = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(documents, opts) {
              var results, i, d, result, _yield$this$set, id, rev;

              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return this.pouchdb.bulkDocs(documents, opts);

                    case 2:
                      results = _context13.sent;
                      i = 0;

                    case 4:
                      if (!(i < results.length)) {
                        _context13.next = 17;
                        break;
                      }

                      d = documents[i];
                      result = results[i];

                      if (!(!result.ok && result.name === "conflict" && !d._rev)) {
                        _context13.next = 14;
                        break;
                      }

                      _context13.next = 10;
                      return this.set(d._id, d);

                    case 10:
                      _yield$this$set = _context13.sent;
                      id = _yield$this$set._id;
                      rev = _yield$this$set._rev;
                      results[i] = {
                        ok: true,
                        id: id,
                        rev: rev
                      };

                    case 14:
                      i++;
                      _context13.next = 4;
                      break;

                    case 17:
                      return _context13.abrupt("return", results);

                    case 18:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));

            function setDocuments(_x16, _x17) {
              return _setDocuments.apply(this, arguments);
            }

            return setDocuments;
          }()
        }, {
          key: "updateDocuments",
          value: function () {
            var _updateDocuments = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(documents, conflictFn, opts) {
              var results, tryAgain, resolvedResults, i, d, result, oldDoc, resolved;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.next = 2;
                      return this.pouchdb.bulkDocs(documents, opts);

                    case 2:
                      results = _context14.sent;
                      tryAgain = [];
                      resolvedResults = {};
                      i = 0;

                    case 6:
                      if (!(i < results.length)) {
                        _context14.next = 19;
                        break;
                      }

                      d = documents[i];
                      result = results[i];
                      resolvedResults[result._id || d._id] = result;

                      if (!(!result.ok && result.name === "conflict")) {
                        _context14.next = 16;
                        break;
                      }

                      _context14.next = 13;
                      return this.get(d._id);

                    case 13:
                      oldDoc = _context14.sent;
                      resolved = conflictFn(oldDoc, d);

                      if (resolved) {
                        if (!resolved._id) resolved._id = d._id;
                        if (!resolved._rev) resolved._rev = oldDoc._rev;
                        tryAgain.push(resolved);
                      }

                    case 16:
                      i++;
                      _context14.next = 6;
                      break;

                    case 19:
                      if (!tryAgain.length) {
                        _context14.next = 28;
                        break;
                      }

                      _context14.t0 = Object;
                      _context14.t1 = {};
                      _context14.t2 = resolvedResults;
                      _context14.t3 = {};
                      _context14.next = 26;
                      return this.updateDocuments(tryAgain, conflictFn, opts);

                    case 26:
                      _context14.t4 = _context14.sent;
                      resolvedResults = _context14.t0.assign.call(_context14.t0, _context14.t1, _context14.t2, _context14.t3, _context14.t4);

                    case 28:
                      return _context14.abrupt("return", resolvedResults);

                    case 29:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));

            function updateDocuments(_x18, _x19, _x20) {
              return _updateDocuments.apply(this, arguments);
            }

            return updateDocuments;
          }()
        }, {
          key: "getDocuments",
          value: function () {
            var _getDocuments = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(idsAndRevs) {
              var options,
                  _options$ignoreErrors,
                  ignoreErrors,
                  _yield$this$pouchdb$b,
                  results,
                  result,
                  i,
                  _results$i,
                  docs,
                  id,
                  j,
                  d,
                  _args15 = arguments;

              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      options = _args15.length > 1 && _args15[1] !== undefined ? _args15[1] : {};
                      _options$ignoreErrors = options.ignoreErrors, ignoreErrors = _options$ignoreErrors === void 0 ? true : _options$ignoreErrors;
                      _context15.next = 4;
                      return this.pouchdb.bulkGet({
                        docs: idsAndRevs
                      });

                    case 4:
                      _yield$this$pouchdb$b = _context15.sent;
                      results = _yield$this$pouchdb$b.results;
                      result = [];
                      i = 0;

                    case 8:
                      if (!(i < results.length)) {
                        _context15.next = 23;
                        break;
                      }

                      _results$i = results[i], docs = _results$i.docs, id = _results$i.id;
                      console.assert(docs.length === 1, "getDocuments: expected only one doc for ".concat(id));
                      j = 0;

                    case 12:
                      if (!(j < docs.length)) {
                        _context15.next = 20;
                        break;
                      }

                      d = docs[j];

                      if (!(ignoreErrors && !d.ok)) {
                        _context15.next = 16;
                        break;
                      }

                      return _context15.abrupt("continue", 17);

                    case 16:
                      result.push(d.ok || d.error || d);

                    case 17:
                      j++;
                      _context15.next = 12;
                      break;

                    case 20:
                      i++;
                      _context15.next = 8;
                      break;

                    case 23:
                      return _context15.abrupt("return", result);

                    case 24:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));

            function getDocuments(_x21) {
              return _getDocuments.apply(this, arguments);
            }

            return getDocuments;
          }()
        }, {
          key: "query",
          value: function query(subject, opts) {
            return this.pouchdb.query(subject, opts);
          }
        }, {
          key: "remove",
          value: function () {
            var _remove = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(_id, _rev, options) {
              var arg;
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      if (!(typeof _rev !== "undefined")) {
                        _context16.next = 4;
                        break;
                      }

                      _context16.t0 = {
                        _id: _id,
                        _rev: _rev
                      };
                      _context16.next = 7;
                      break;

                    case 4:
                      _context16.next = 6;
                      return this.get(_id);

                    case 6:
                      _context16.t0 = _context16.sent;

                    case 7:
                      arg = _context16.t0;
                      return _context16.abrupt("return", arg ? this.pouchdb.remove(arg) : undefined);

                    case 9:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));

            function remove(_x22, _x23, _x24) {
              return _remove.apply(this, arguments);
            }

            return remove;
          }()
        }, {
          key: "removeAll",
          value: function () {
            var _removeAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              var db, docs;
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      db = this.pouchdb;
                      _context17.next = 3;
                      return db.allDocs();

                    case 3:
                      docs = _context17.sent;
                      _context17.next = 6;
                      return Promise.all(docs.rows.map(function (row) {
                        return db.remove(row.id, row.value.rev);
                      }));

                    case 6:
                      return _context17.abrupt("return", _context17.sent);

                    case 7:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));

            function removeAll() {
              return _removeAll.apply(this, arguments);
            }

            return removeAll;
          }()
        }, {
          key: "replicateTo",
          value: function replicateTo(otherDB, opts) {
            if (otherDB instanceof __varRecorder__$3.Database) {
              otherDB = otherDB.pouchdb;
            }

            return this.pouchdb.replicate.to(otherDB, opts);
          }
        }, {
          key: "replicateFrom",
          value: function replicateFrom(otherDB, opts) {
            if (otherDB instanceof __varRecorder__$3.Database) {
              otherDB = otherDB.pouchdb;
            }

            return this.pouchdb.replicate.from(otherDB, opts);
          }
        }, {
          key: "sync",
          value: function sync(otherDB, opts) {
            if (otherDB instanceof __varRecorder__$3.Database) {
              otherDB = otherDB.pouchdb;
            }

            return this.pouchdb.sync(otherDB, opts);
          }
        }, {
          key: "getConflicts",
          value: function () {
            var _getConflicts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(opts) {
              var _yield$this$pouchdb$q, rows;

              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      _context18.next = 2;
                      return this.pouchdb.query("conflict_index/conflict_index", Object.assign({
                        reduce: false,
                        include_docs: true,
                        conflicts: true
                      }, opts));

                    case 2:
                      _yield$this$pouchdb$q = _context18.sent;
                      rows = _yield$this$pouchdb$q.rows;
                      return _context18.abrupt("return", rows.map(function (ea) {
                        var result = {
                          id: ea.id,
                          rev: ea.doc._rev,
                          doc: ea.doc
                        };

                        if (ea.doc._conflicts) {
                          result.conflicts = ea.doc._conflicts;
                          delete ea.doc._conflicts;
                        }

                        return result;
                      }));

                    case 5:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));

            function getConflicts(_x25) {
              return _getConflicts.apply(this, arguments);
            }

            return getConflicts;
          }()
        }, {
          key: "resolveConflicts",
          value: function () {
            var _resolveConflicts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(id, resolveFn) {
              var doc, query, conflicted, resolved, _iterator, _step, conflictedDoc;

              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      _context19.next = 2;
                      return this.pouchdb.get(id, {
                        conflicts: true
                      });

                    case 2:
                      doc = _context19.sent;
                      query = doc._conflicts.map(function (rev) {
                        return {
                          id: id,
                          rev: rev
                        };
                      });
                      _context19.next = 6;
                      return this.getDocuments(query);

                    case 6:
                      conflicted = _context19.sent;
                      resolved = doc;
                      _iterator = _createForOfIteratorHelper(conflicted);
                      _context19.prev = 9;

                      _iterator.s();

                    case 11:
                      if ((_step = _iterator.n()).done) {
                        _context19.next = 25;
                        break;
                      }

                      conflictedDoc = _step.value;
                      _context19.next = 15;
                      return resolveFn(resolved, conflictedDoc);

                    case 15:
                      resolved = _context19.sent;

                      if (resolved) {
                        _context19.next = 18;
                        break;
                      }

                      return _context19.abrupt("return", null);

                    case 18:
                      _context19.next = 20;
                      return this.set(id, resolved);

                    case 20:
                      resolved = _context19.sent;
                      _context19.next = 23;
                      return this.pouchdb.remove(conflictedDoc);

                    case 23:
                      _context19.next = 11;
                      break;

                    case 25:
                      _context19.next = 30;
                      break;

                    case 27:
                      _context19.prev = 27;
                      _context19.t0 = _context19["catch"](9);

                      _iterator.e(_context19.t0);

                    case 30:
                      _context19.prev = 30;

                      _iterator.f();

                      return _context19.finish(30);

                    case 33:
                      return _context19.abrupt("return", resolved);

                    case 34:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this, [[9, 27, 30, 33]]);
            }));

            function resolveConflicts(_x26, _x27) {
              return _resolveConflicts.apply(this, arguments);
            }

            return resolveConflicts;
          }()
        }, {
          key: "diffWith",
          value: function () {
            var _diffWith = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(otherDB) {
              var docs2, docs1, map2, map1, inLeft, inRight, changed, id, rev, rev1, _id2, _rev2, rev2;

              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      _context20.next = 2;
                      return otherDB.docList();

                    case 2:
                      docs2 = _context20.sent;
                      _context20.next = 5;
                      return this.docList();

                    case 5:
                      docs1 = _context20.sent;
                      map2 = docs2.reduce(function (all, ea) {
                        return Object.assign(all, _defineProperty({}, ea.id, ea.rev));
                      }, {});
                      map1 = docs1.reduce(function (all, ea) {
                        return Object.assign(all, _defineProperty({}, ea.id, ea.rev));
                      }, {});
                      inLeft = [];
                      inRight = [];
                      changed = [];

                      for (id in map2) {
                        rev = map2[id];
                        rev1 = map1[id];
                        if (!rev1) inRight.push({
                          id: id,
                          rev: rev
                        });else if (rev != rev1) changed.push({
                          right: {
                            id: id,
                            rev: rev
                          },
                          left: {
                            id: id,
                            rev: rev1
                          }
                        });
                      }

                      for (_id2 in map1) {
                        _rev2 = map1[_id2];
                        rev2 = map2[_id2];
                        if (!rev2) inLeft.push({
                          id: _id2,
                          rev: _rev2
                        });
                      }

                      return _context20.abrupt("return", {
                        inLeft: inLeft,
                        inRight: inRight,
                        changed: changed
                      });

                    case 14:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));

            function diffWith(_x28) {
              return _diffWith.apply(this, arguments);
            }

            return diffWith;
          }()
        }, {
          key: "dump",
          value: function () {
            var _dump = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
              var opts,
                  filterFn,
                  alias,
                  type,
                  dbInfo,
                  myName,
                  pouchdb,
                  name,
                  header,
                  docs,
                  _args21 = arguments;
              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      opts = _args21.length > 0 && _args21[0] !== undefined ? _args21[0] : {};
                      filterFn = opts.filterFn, alias = opts.name, type = opts.type, dbInfo = opts.dbInfo;
                      myName = this.name, pouchdb = this.pouchdb;
                      name = alias || myName;
                      _context21.t0 = name;
                      _context21.t1 = type || pouchdb.type();
                      _context21.t2 = new Date().toJSON();
                      _context21.t3 = Object;
                      _context21.t4 = {};
                      _context21.next = 11;
                      return pouchdb.info();

                    case 11:
                      _context21.t5 = _context21.sent;
                      _context21.t6 = {
                        db_name: name
                      };
                      _context21.t7 = dbInfo;
                      _context21.t8 = _context21.t3.assign.call(_context21.t3, _context21.t4, _context21.t5, _context21.t6, _context21.t7);
                      header = {
                        name: _context21.t0,
                        db_type: _context21.t1,
                        start_time: _context21.t2,
                        db_info: _context21.t8
                      };
                      _context21.next = 18;
                      return this.getAll({
                        attachments: true
                      });

                    case 18:
                      docs = _context21.sent;

                      if (typeof filterFn === "function") {
                        docs = filterFn(docs, header);
                      }

                      return _context21.abrupt("return", {
                        header: header,
                        docs: docs
                      });

                    case 21:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this);
            }));

            function dump() {
              return _dump.apply(this, arguments);
            }

            return dump;
          }()
        }, {
          key: "backup",
          value: function () {
            var _backup = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
              var backupNo,
                  name,
                  backupDB,
                  _args22 = arguments;
              return regeneratorRuntime.wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      backupNo = _args22.length > 0 && _args22[0] !== undefined ? _args22[0] : 1;
                      name = "".concat(this.name, "_backup_").concat(backupNo);
                      backupDB = this.constructor.ensureDB(name);
                      _context22.next = 5;
                      return this.replicateTo(backupDB);

                    case 5:
                      return _context22.abrupt("return", backupDB);

                    case 6:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22, this);
            }));

            function backup() {
              return _backup.apply(this, arguments);
            }

            return backup;
          }()
        }, {
          key: "migrate",
          value: function () {
            var _migrate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23(migrationFn) {
              var docs, migrated, unchanged, i, doc, migratedDoc;
              return regeneratorRuntime.wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      _context23.next = 2;
                      return this.getAll();

                    case 2:
                      docs = _context23.sent;
                      migrated = [];
                      unchanged = [];
                      i = 0;

                    case 6:
                      if (!(i < docs.length)) {
                        _context23.next = 18;
                        break;
                      }

                      doc = docs[i];
                      migratedDoc = migrationFn(doc, i);

                      if (migratedDoc) {
                        _context23.next = 12;
                        break;
                      }

                      unchanged.push(doc);
                      return _context23.abrupt("continue", 15);

                    case 12:
                      if (!migratedDoc.hasOwnProperty("_id")) {
                        migratedDoc._id = doc._id;
                      }

                      if (migratedDoc.hasOwnProperty("_rev")) {
                        delete migratedDoc._rev;
                      }

                      migrated.push(migratedDoc);

                    case 15:
                      i++;
                      _context23.next = 6;
                      break;

                    case 18:
                      _context23.next = 20;
                      return this.setDocuments(migrated);

                    case 20:
                      return _context23.abrupt("return", {
                        migrated: migrated.length,
                        unchanged: unchanged.length
                      });

                    case 21:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23, this);
            }));

            function migrate(_x29) {
              return _migrate.apply(this, arguments);
            }

            return migrate;
          }()
        }, {
          key: "createDesignDocs",
          value: function createDesignDocs(specs) {
            return specs.map(this.createDesignDoc);
          }
        }, {
          key: "createDesignDoc",
          value: function createDesignDoc(_ref) {
            var name = _ref.name,
                mapFn = _ref.mapFn,
                reduceFn = _ref.reduceFn,
                filterFn = _ref.filterFn,
                _ref$version = _ref.version,
                version = _ref$version === void 0 ? 1 : _ref$version;
            var doc = {
              _id: "_design/" + name,
              version: version
            };
            if (filterFn) Path("filters." + name).set(doc, filterFn.toString(), true);
            if (mapFn) Path("views." + name + ".map").set(doc, mapFn.toString(), true);
            if (reduceFn) Path("views." + name + ".reduce").set(doc, reduceFn.toString(), true);
            return doc;
          }
        }, {
          key: "addDesignDocs",
          value: function () {
            var _addDesignDocs = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24(specs) {
              var _this = this;

              var queryStale,
                  docs,
                  result,
                  _args24 = arguments;
              return regeneratorRuntime.wrap(function _callee24$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      queryStale = _args24.length > 1 && _args24[1] !== undefined ? _args24[1] : false;
                      docs = this.createDesignDocs(specs);
                      _context24.next = 4;
                      return this.updateDocuments(docs, function (oldDoc, newDoc) {
                        if (!oldDoc.hasOwnProperty("version")) return newDoc;
                        if (newDoc.hasOwnProperty("version") && newDoc.version > oldDoc.version) return newDoc;
                        return null;
                      });

                    case 4:
                      result = _context24.sent;

                      if (!queryStale) {
                        _context24.next = 8;
                        break;
                      }

                      _context24.next = 8;
                      return Promise.all(docs.map(function (ea) {
                        return _this.designDocDoQueryStale(ea._id);
                      }));

                    case 8:
                      return _context24.abrupt("return", result);

                    case 9:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, _callee24, this);
            }));

            function addDesignDocs(_x30) {
              return _addDesignDocs.apply(this, arguments);
            }

            return addDesignDocs;
          }()
        }, {
          key: "addDesignDoc",
          value: function () {
            var _addDesignDoc = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee25(_ref2) {
              var name,
                  mapFn,
                  reduceFn,
                  version,
                  queryStale,
                  doc,
                  result,
                  _args25 = arguments;
              return regeneratorRuntime.wrap(function _callee25$(_context25) {
                while (1) {
                  switch (_context25.prev = _context25.next) {
                    case 0:
                      name = _ref2.name, mapFn = _ref2.mapFn, reduceFn = _ref2.reduceFn, version = _ref2.version;
                      queryStale = _args25.length > 1 && _args25[1] !== undefined ? _args25[1] : false;
                      doc = this.createDesignDoc({
                        name: name,
                        mapFn: mapFn,
                        reduceFn: reduceFn,
                        version: version
                      });
                      _context25.next = 5;
                      return this.set(doc._id, doc);

                    case 5:
                      result = _context25.sent;

                      if (!queryStale) {
                        _context25.next = 9;
                        break;
                      }

                      _context25.next = 9;
                      return this.designDocDoQueryStale(doc._id);

                    case 9:
                      return _context25.abrupt("return", result);

                    case 10:
                    case "end":
                      return _context25.stop();
                  }
                }
              }, _callee25, this);
            }));

            function addDesignDoc(_x31) {
              return _addDesignDoc.apply(this, arguments);
            }

            return addDesignDoc;
          }()
        }, {
          key: "removeDesignDoc",
          value: function removeDesignDoc(name) {
            return this.remove("_design/" + name);
          }
        }, {
          key: "designDocDoQueryStale",
          value: function designDocDoQueryStale(designDocId) {
            var _designDocId$split = designDocId.split("/"),
                _designDocId$split2 = _slicedToArray(_designDocId$split, 2);
                _designDocId$split2[0];
                var name = _designDocId$split2[1];

            return this.query(name, {
              stale: "update_after"
            });
          }
        }, {
          key: "pouchdb",
          get: function get() {
            if (this._pouchdb) return this._pouchdb;
            var name = this.name,
                options = this.options;
            return this._pouchdb = __varRecorder__$3.createPouchDB(name, options);
          }
        }], [{
          key: "loadDump",
          value: function () {
            var _loadDump = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee26(dump) {
              var opts,
                  header,
                  docs,
                  name,
                  db,
                  _args26 = arguments;
              return regeneratorRuntime.wrap(function _callee26$(_context26) {
                while (1) {
                  switch (_context26.prev = _context26.next) {
                    case 0:
                      opts = _args26.length > 1 && _args26[1] !== undefined ? _args26[1] : {};
                      header = dump.header, docs = dump.docs;
                      name = opts.name || header.name;
                      db = this.ensureDB(name);
                      _context26.next = 6;
                      return db.setDocuments(docs, {
                        new_edits: false
                      });

                    case 6:
                      return _context26.abrupt("return", db);

                    case 7:
                    case "end":
                      return _context26.stop();
                  }
                }
              }, _callee26, this);
            }));

            function loadDump(_x32) {
              return _loadDump.apply(this, arguments);
            }

            return loadDump;
          }()
        }]);

        return Database;
      }());
      __varRecorder__$3.Database = Database;
      __varRecorder__$3["default"] = Database;

      var __varRecorder__$2 = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.storage/objectdb.js", __contextModule__);

      var __moduleMeta__$1 = {
        pathInPackage: function pathInPackage() {
          return "./objectdb.js";
        },
        unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
          return function () {};
        },
        subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
          return function () {};
        },
        "package": function _package() {
          return {
            name: "lively.storage",
            version: "0.2.3"
          };
        }
      };

      var isHash = __varRecorder__$2["lively.storage/objectdb.js__define__"]("isHash", "function", function (string) {
        return typeof string === "string" && string.length === 40 && string.match(__varRecorder__$2.hashRe);
      }, __moduleMeta__$1);

      __varRecorder__$2.isHash = isHash;

      var checkArg = __varRecorder__$2["lively.storage/objectdb.js__define__"]("checkArg", "function", function (name, value, spec) {
        if (typeof value === "undefined" && typeof spec === "string" && !spec.includes("undefined")) {
          throw new Error("parameter ".concat(name, " is undefined"));
        }

        if (value === null && typeof spec === "string" && !spec.includes("null")) {
          throw new Error("parameter ".concat(name, " is null"));
        }

        if (typeof spec === "string") {
          var actualType = _typeof(value);

          var actualClass = value ? value.constructor.name : "";
          var types = spec.split("|");
          var matches = types.some(function (t) {
            return actualType === t || actualClass === t;
          });

          if (!matches) {
            throw new Error("parameter \"".concat(name, "\" expected to be of type ").concat(spec, " but is ").concat(actualClass || actualType));
          }
        }

        if (typeof spec === "function") {
          var result = spec(value);

          if (result && result.error) {
            throw new Error("check of parameter \"".concat(name, "\" failed: ").concat(result.error));
          }
        }
      }, __moduleMeta__$1);

      __varRecorder__$2.checkArg = checkArg;

      var checkArgs = __varRecorder__$2["lively.storage/objectdb.js__define__"]("checkArgs", "function", function (args, specs, testFn) {
        for (var key in specs) {
          __varRecorder__$2.checkArg(key, args[key], specs[key]);
        }

        if (typeof testFn === "function") {
          var result = testFn(args);

          if (result && result.error) {
            throw new Error(result.error);
          }
        }

        return args;
      }, __moduleMeta__$1);

      __varRecorder__$2.checkArgs = checkArgs;

      __varRecorder__$2.sha1 = function sha1_setup() {
        function r(r) {
          if (void 0 === r) return o(!1);
          var e = o(!0);
          return e.update(r), e.digest();
        }

        function e() {
          var r = f.createHash("sha1");
          return {
            update: function update(e) {
              return r.update(e);
            },
            digest: function digest() {
              return r.digest("hex");
            }
          };
        }

        function t(r) {
          function e(r) {
            if (typeof r === "string") return t(r);
            var e = r.length;
            h += 8 * e;

            for (var _n = 0; _n < e; _n++) {
              o(r[_n]);
            }
          }

          function t(r) {
            var e = r.length;
            h += 8 * e;

            for (var _t = 0; _t < e; _t++) {
              o(r.charCodeAt(_t));
            }
          }

          function o(r) {
            a[y] |= (255 & r) << g, g ? g -= 8 : (y++, g = 24), y === 16 && u();
          }

          function f() {
            o(128), (y > 14 || y === 14 && g < 24) && u(), y = 14, g = 24, o(0), o(0), o(h > 1099511627775 ? h / 1099511627776 : 0), o(h > 4294967295 ? h / 4294967296 : 0);

            for (var _r = 24; _r >= 0; _r -= 8) {
              o(h >> _r);
            }

            return i(s) + i(c) + i(v) + i(p) + i(d);
          }

          function u() {
            for (var r = 16; r < 80; r++) {
              var _e = a[r - 3] ^ a[r - 8] ^ a[r - 14] ^ a[r - 16];

              a[r] = _e << 1 | _e >>> 31;
            }

            var t;
            var n;
            var o = s;
            var f = c;
            var u = v;
            var i = p;
            var g = d;

            for (r = 0; r < 80; r++) {
              r < 20 ? (t = i ^ f & (u ^ i), n = 1518500249) : r < 40 ? (t = f ^ u ^ i, n = 1859775393) : r < 60 ? (t = f & u | i & (f | u), n = 2400959708) : (t = f ^ u ^ i, n = 3395469782);

              var _h = (o << 5 | o >>> 27) + t + g + n + (0 | a[r]);

              g = i, i = u, u = f << 30 | f >>> 2, f = o, o = _h;
            }

            for (s = s + o | 0, c = c + f | 0, v = v + u | 0, p = p + i | 0, d = d + g | 0, y = 0, r = 0; r < 16; r++) {
              a[r] = 0;
            }
          }

          function i(r) {
            for (var e = "", t = 28; t >= 0; t -= 4) {
              e += (r >> t & 15).toString(16);
            }

            return e;
          }

          var a;
          var s = 1732584193;
          var c = 4023233417;
          var v = 2562383102;
          var p = 271733878;
          var d = 3285377520;
          var y = 0;
          var g = 24;
          var h = 0;
          return a = r ? n : new Uint32Array(80), {
            update: e,
            digest: f
          };
        }

        var n, o, f;
        return (typeof process === "undefined" ? "undefined" : _typeof(process)) === "object" && _typeof(process.versions) === "object" && process.versions.node && process.__atom_type !== "renderer" ? (f = typeof System !== "undefined" ? System._nodeRequire("crypto") : require("crypto"), o = e) : (n = new Uint32Array(80), o = t), r;
      }();

      __varRecorder__$2.hashRe = /^[0-9a-f]+$/i;
      __varRecorder__$2.objectDBs = __varRecorder__$2.objectDBs || new Map();

      var ObjectDB = exports('ObjectDB', /*#__PURE__*/function () {
        _createClass(ObjectDB, null, [{
          key: "dbList",
          value: function () {
            var _dbList = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var metaDB;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      metaDB = Database.ensureDB("internal__objectdb-meta");
                      _context.next = 3;
                      return metaDB.getAll();

                    case 3:
                      _context.t0 = function (ea) {
                        return ea._id;
                      };

                      return _context.abrupt("return", _context.sent.map(_context.t0));

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            function dbList() {
              return _dbList.apply(this, arguments);
            }

            return dbList;
          }()
        }, {
          key: "find",
          value: function () {
            var _find = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(name) {
              var found, metaDB, meta;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      found = __varRecorder__$2.objectDBs.get(name);

                      if (!found) {
                        _context2.next = 3;
                        break;
                      }

                      return _context2.abrupt("return", found);

                    case 3:
                      metaDB = Database.ensureDB("internal__objectdb-meta");
                      _context2.next = 6;
                      return metaDB.get(name);

                    case 6:
                      meta = _context2.sent;

                      if (meta) {
                        _context2.next = 9;
                        break;
                      }

                      return _context2.abrupt("return");

                    case 9:
                      return _context2.abrupt("return", this.named(name, meta));

                    case 10:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function find(_x) {
              return _find.apply(this, arguments);
            }

            return find;
          }()
        }, {
          key: "named",
          value: function named(name) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            var existing = __varRecorder__$2.objectDBs.get(name);

            if (existing) return existing;

            if (!options || !options.snapshotLocation) {
              throw new Error("need snapshotLocation");
            }

            if (typeof options.snapshotLocation === "string") {
              try {
                options.snapshotLocation = resource(options.snapshotLocation);
              } catch (err) {
                options.snapshotLocation = resource(System.baseURL).join(options.snapshotLocation);
              }
            }

            var db = new this(name, options);

            __varRecorder__$2.objectDBs.set(name, db);

            var metaDB = Database.ensureDB("internal__objectdb-meta");
            metaDB.set(name, Object.assign({}, options, {
              snapshotLocation: options.snapshotLocation.url
            }))["catch"](function (err) {
              return console.error("error writing objectdb meta:", err);
            });
            return db;
          }
        }]);

        function ObjectDB(name, options) {
          _classCallCheck(this, ObjectDB);

          this.name = name;

          if (!options.snapshotLocation || !options.snapshotLocation.isResource) {
            throw new Error("ObjectDB needs snapshotLocation!");
          }

          this.snapshotLocation = options.snapshotLocation;
          this.__commitDB = null;
          this.__versionDB = null;
        }

        _createClass(ObjectDB, [{
          key: "destroy",
          value: function () {
            var _destroy = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var commitDB, versionDB, metaDB;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      commitDB = Database.findDB(this.name + "-commits");

                      if (!commitDB) {
                        _context3.next = 4;
                        break;
                      }

                      _context3.next = 4;
                      return commitDB.destroy();

                    case 4:
                      versionDB = Database.findDB(this.name + "-version-graph");

                      if (!versionDB) {
                        _context3.next = 8;
                        break;
                      }

                      _context3.next = 8;
                      return versionDB.destroy();

                    case 8:
                      __varRecorder__$2.objectDBs["delete"](this.name);

                      metaDB = Database.ensureDB("internal__objectdb-meta");
                      _context3.next = 12;
                      return metaDB.remove(this.name);

                    case 12:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function destroy() {
              return _destroy.apply(this, arguments);
            }

            return destroy;
          }()
        }, {
          key: "snapshotResourceFor",
          value: function snapshotResourceFor(commit) {
            var first = commit.content.slice(0, 2);
            var rest = commit.content.slice(2);
            return this.snapshotLocation.join("".concat(first, "/").concat(rest, ".json"));
          }
        }, {
          key: "snapshotObject",
          value: function () {
            var _snapshotObject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(type, name, object, snapshotOptions, commitSpec, preview, ref, expectedPrevVersion) {
              var serializeFn, snapshot;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      snapshotOptions = snapshotOptions || {};

                      serializeFn = function serializeFn(x) {
                        return x;
                      };

                      _context4.next = 4;
                      return serializeFn(object, snapshotOptions);

                    case 4:
                      snapshot = _context4.sent;
                      return _context4.abrupt("return", this.commit(type, name, snapshot, commitSpec, preview, ref, expectedPrevVersion));

                    case 6:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function snapshotObject(_x2, _x3, _x4, _x5, _x6, _x7, _x8, _x9) {
              return _snapshotObject.apply(this, arguments);
            }

            return snapshotObject;
          }()
        }, {
          key: "loadObject",
          value: function () {
            var _loadObject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(type, name, loadOptions, commitIdOrCommit, ref) {
              var snapshot, deserializeFn;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      loadOptions = loadOptions || {};
                      _context5.next = 3;
                      return this.loadSnapshot(type, name, commitIdOrCommit, ref);

                    case 3:
                      snapshot = _context5.sent;

                      deserializeFn = function deserializeFn(x) {
                        return x;
                      };

                      return _context5.abrupt("return", deserializeFn(snapshot, loadOptions));

                    case 6:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function loadObject(_x10, _x11, _x12, _x13, _x14) {
              return _loadObject.apply(this, arguments);
            }

            return loadObject;
          }()
        }, {
          key: "has",
          value: function () {
            var _has = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(type, name) {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.objectStats(type, name);

                    case 2:
                      return _context6.abrupt("return", !!_context6.sent);

                    case 3:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function has(_x15, _x16) {
              return _has.apply(this, arguments);
            }

            return has;
          }()
        }, {
          key: "objects",
          value: function () {
            var _objects = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(optType) {
              var stats, result, type;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.objectStats(optType);

                    case 2:
                      stats = _context7.sent;

                      if (!optType) {
                        _context7.next = 5;
                        break;
                      }

                      return _context7.abrupt("return", Object.keys(stats || {}));

                    case 5:
                      result = {};

                      for (type in stats) {
                        result[type] = Object.keys(stats[type]);
                      }

                      return _context7.abrupt("return", result);

                    case 8:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            function objects(_x17) {
              return _objects.apply(this, arguments);
            }

            return objects;
          }()
        }, {
          key: "objectStats",
          value: function () {
            var _objectStats = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(objectType, objectName) {
              var statsByType, commitDB, queryOpts, _yield$commitDB$pouch, rows, _iterator, _step, _step$value, objectTypeAndName, _step$value$value, count, newest, oldest, _objectTypeAndName$sp, _objectTypeAndName$sp2, type, _objectName, statsOfType;

              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      statsByType = {};
                      _context8.t0 = this.__commitDB;

                      if (_context8.t0) {
                        _context8.next = 6;
                        break;
                      }

                      _context8.next = 5;
                      return this._commitDB();

                    case 5:
                      _context8.t0 = _context8.sent;

                    case 6:
                      commitDB = _context8.t0;
                      queryOpts = {
                        reduce: true,
                        group: true
                      };

                      if (objectType && objectName) {
                        queryOpts.key = "".concat(objectType, "\0").concat(objectName);
                      } else if (objectType) {
                        queryOpts.startkey = "".concat(objectType, "\0");
                        queryOpts.endkey = "".concat(objectType, "\uFFF0");
                      }

                      _context8.prev = 9;
                      _context8.next = 12;
                      return commitDB.pouchdb.query("nameWithMaxMinTimestamp_index", queryOpts);

                    case 12:
                      _yield$commitDB$pouch = _context8.sent;
                      rows = _yield$commitDB$pouch.rows;
                      _iterator = _createForOfIteratorHelper(rows);

                      try {
                        for (_iterator.s(); !(_step = _iterator.n()).done;) {
                          _step$value = _step.value, objectTypeAndName = _step$value.key, _step$value$value = _step$value.value, count = _step$value$value.count, newest = _step$value$value.max, oldest = _step$value$value.min;
                          _objectTypeAndName$sp = objectTypeAndName.split("\0"), _objectTypeAndName$sp2 = _slicedToArray(_objectTypeAndName$sp, 2), type = _objectTypeAndName$sp2[0], _objectName = _objectTypeAndName$sp2[1];
                          statsOfType = statsByType[type] || (statsByType[type] = {});
                          statsOfType[_objectName] = {
                            count: count,
                            newest: newest,
                            oldest: oldest
                          };
                        }
                      } catch (err) {
                        _iterator.e(err);
                      } finally {
                        _iterator.f();
                      }

                      _context8.next = 22;
                      break;

                    case 18:
                      _context8.prev = 18;
                      _context8.t1 = _context8["catch"](9);
                      console.error(_context8.t1);
                      return _context8.abrupt("return", statsByType);

                    case 22:
                      if (!(objectType && objectName)) {
                        _context8.next = 24;
                        break;
                      }

                      return _context8.abrupt("return", (statsByType[objectType] || {})[objectName]);

                    case 24:
                      if (!objectType) {
                        _context8.next = 26;
                        break;
                      }

                      return _context8.abrupt("return", statsByType[objectType]);

                    case 26:
                      return _context8.abrupt("return", statsByType);

                    case 27:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this, [[9, 18]]);
            }));

            function objectStats(_x18, _x19) {
              return _objectStats.apply(this, arguments);
            }

            return objectStats;
          }()
        }, {
          key: "getCommits",
          value: function () {
            var _getCommits = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(type, objectName) {
              var ref,
                  limit,
                  history,
                  commitDB,
                  commits,
                  _args9 = arguments;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      ref = _args9.length > 2 && _args9[2] !== undefined ? _args9[2] : "HEAD";
                      limit = _args9.length > 3 && _args9[3] !== undefined ? _args9[3] : Infinity;
                      _context9.next = 4;
                      return this._log(type, objectName, ref, limit);

                    case 4:
                      history = _context9.sent;

                      if (history.length) {
                        _context9.next = 7;
                        break;
                      }

                      return _context9.abrupt("return", []);

                    case 7:
                      _context9.t0 = this.__commitDB;

                      if (_context9.t0) {
                        _context9.next = 12;
                        break;
                      }

                      _context9.next = 11;
                      return this._commitDB();

                    case 11:
                      _context9.t0 = _context9.sent;

                    case 12:
                      commitDB = _context9.t0;
                      _context9.next = 15;
                      return commitDB.getDocuments(history.map(function (ea) {
                        return {
                          id: ea
                        };
                      }));

                    case 15:
                      commits = _context9.sent;
                      return _context9.abrupt("return", commits);

                    case 17:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));

            function getCommits(_x20, _x21) {
              return _getCommits.apply(this, arguments);
            }

            return getCommits;
          }()
        }, {
          key: "getCommit",
          value: function () {
            var _getCommit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(commitId) {
              var commitDB;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.t0 = this.__commitDB;

                      if (_context10.t0) {
                        _context10.next = 5;
                        break;
                      }

                      _context10.next = 4;
                      return this._commitDB();

                    case 4:
                      _context10.t0 = _context10.sent;

                    case 5:
                      commitDB = _context10.t0;
                      return _context10.abrupt("return", commitDB.get(commitId));

                    case 7:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));

            function getCommit(_x22) {
              return _getCommit.apply(this, arguments);
            }

            return getCommit;
          }()
        }, {
          key: "getCommitsWithIds",
          value: function () {
            var _getCommitsWithIds = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(commitIds) {
              var commitDB;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      if (commitIds.length) {
                        _context11.next = 2;
                        break;
                      }

                      return _context11.abrupt("return", []);

                    case 2:
                      _context11.t0 = this.__commitDB;

                      if (_context11.t0) {
                        _context11.next = 7;
                        break;
                      }

                      _context11.next = 6;
                      return this._commitDB();

                    case 6:
                      _context11.t0 = _context11.sent;

                    case 7:
                      commitDB = _context11.t0;
                      return _context11.abrupt("return", commitDB.getDocuments(commitIds.map(function (id) {
                        return {
                          id: id
                        };
                      })));

                    case 9:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));

            function getCommitsWithIds(_x23) {
              return _getCommitsWithIds.apply(this, arguments);
            }

            return getCommitsWithIds;
          }()
        }, {
          key: "getLatestCommit",
          value: function () {
            var _getLatestCommit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(type, objectName) {
              var ref,
                  includeDeleted,
                  _yield$this$_log,
                  _yield$this$_log2,
                  commitId,
                  commitDB,
                  commit,
                  _args12 = arguments;

              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      ref = _args12.length > 2 && _args12[2] !== undefined ? _args12[2] : "HEAD";
                      includeDeleted = _args12.length > 3 && _args12[3] !== undefined ? _args12[3] : false;
                      _context12.next = 4;
                      return this._log(type, objectName, ref, 1);

                    case 4:
                      _yield$this$_log = _context12.sent;
                      _yield$this$_log2 = _slicedToArray(_yield$this$_log, 1);
                      commitId = _yield$this$_log2[0];

                      if (commitId) {
                        _context12.next = 9;
                        break;
                      }

                      return _context12.abrupt("return", null);

                    case 9:
                      _context12.t0 = this.__commitDB;

                      if (_context12.t0) {
                        _context12.next = 14;
                        break;
                      }

                      _context12.next = 13;
                      return this._commitDB();

                    case 13:
                      _context12.t0 = _context12.sent;

                    case 14:
                      commitDB = _context12.t0;
                      _context12.next = 17;
                      return commitDB.get(commitId);

                    case 17:
                      commit = _context12.sent;

                      if (!(commit && commit.deleted && !includeDeleted)) {
                        _context12.next = 20;
                        break;
                      }

                      return _context12.abrupt("return", null);

                    case 20:
                      return _context12.abrupt("return", commit);

                    case 21:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));

            function getLatestCommit(_x24, _x25) {
              return _getLatestCommit.apply(this, arguments);
            }

            return getLatestCommit;
          }()
        }, {
          key: "commit",
          value: function () {
            var _commit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(type, name, snapshot, commitSpec, preview) {
              var ref,
                  expectedPrevVersion,
                  author,
                  _commitSpec$descripti,
                  description,
                  _commitSpec$tags,
                  tags,
                  timestamp,
                  _commitSpec$message,
                  message,
                  metadata,
                  alternativePreview,
                  versionDB,
                  versionData,
                  ancestor,
                  ancestors,
                  snapshotIsHash,
                  snapshotJson,
                  commit,
                  res,
                  commitDB,
                  _args13 = arguments;

              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      ref = _args13.length > 5 && _args13[5] !== undefined ? _args13[5] : "HEAD";
                      expectedPrevVersion = _args13.length > 6 ? _args13[6] : undefined;
                      author = commitSpec.author, _commitSpec$descripti = commitSpec.description, description = _commitSpec$descripti === void 0 ? "no description" : _commitSpec$descripti, _commitSpec$tags = commitSpec.tags, tags = _commitSpec$tags === void 0 ? [] : _commitSpec$tags, timestamp = commitSpec.timestamp, _commitSpec$message = commitSpec.message, message = _commitSpec$message === void 0 ? "" : _commitSpec$message, metadata = commitSpec.metadata, alternativePreview = commitSpec.preview;

                      if (type) {
                        _context13.next = 5;
                        break;
                      }

                      throw new Error("object needs a type");

                    case 5:
                      if (name) {
                        _context13.next = 7;
                        break;
                      }

                      throw new Error("object needs a name");

                    case 7:
                      if (author) {
                        _context13.next = 9;
                        break;
                      }

                      throw new Error("Cannot commit ".concat(type, "/").concat(name, " without user"));

                    case 9:
                      _context13.t0 = this.__versionDB;

                      if (_context13.t0) {
                        _context13.next = 14;
                        break;
                      }

                      _context13.next = 13;
                      return this._versionDB();

                    case 13:
                      _context13.t0 = _context13.sent;

                    case 14:
                      versionDB = _context13.t0;
                      _context13.next = 17;
                      return this.versionGraph(type, name);

                    case 17:
                      versionData = _context13.sent;
                      ancestor = versionData ? versionData.refs[ref] : null;
                      ancestors = ancestor ? [ancestor] : [];

                      if (!expectedPrevVersion) {
                        _context13.next = 25;
                        break;
                      }

                      if (versionData) {
                        _context13.next = 23;
                        break;
                      }

                      throw new Error("Trying to store \"".concat(type, "/").concat(name, "\" on top of expected version ").concat(expectedPrevVersion, " but no version entry exists!"));

                    case 23:
                      if (!(ancestor !== expectedPrevVersion)) {
                        _context13.next = 25;
                        break;
                      }

                      throw new Error("Trying to store \"".concat(type, "/").concat(name, "\" on top of expected version ").concat(expectedPrevVersion, " but ref ").concat(ref, " is of version ").concat(ancestor, "!"));

                    case 25:
                      snapshotIsHash = __varRecorder__$2.isHash(snapshot);
                      snapshotJson = snapshotIsHash ? null : snapshot ? JSON.stringify(snapshot) : null;
                      commit = this._createCommit(type, name, description, tags, metadata, author, timestamp, message, ancestors, snapshotIsHash ? null : snapshot, snapshotJson, preview || alternativePreview, snapshotIsHash ? snapshot : null);

                      if (!(snapshot && !snapshotIsHash)) {
                        _context13.next = 39;
                        break;
                      }

                      res = this.snapshotResourceFor(commit);
                      _context13.next = 32;
                      return res.parent().ensureExistance();

                    case 32:
                      if (!res.canDealWithJSON) {
                        _context13.next = 37;
                        break;
                      }

                      _context13.next = 35;
                      return res.writeJson(snapshot);

                    case 35:
                      _context13.next = 39;
                      break;

                    case 37:
                      _context13.next = 39;
                      return res.write(snapshotJson);

                    case 39:
                      _context13.t1 = this.__commitDB;

                      if (_context13.t1) {
                        _context13.next = 44;
                        break;
                      }

                      _context13.next = 43;
                      return this._commitDB();

                    case 43:
                      _context13.t1 = _context13.sent;

                    case 44:
                      commitDB = _context13.t1;
                      _context13.next = 47;
                      return commitDB.set(commit._id, commit);

                    case 47:
                      commit = _context13.sent;
                      if (!versionData) versionData = {
                        refs: {},
                        history: {}
                      };
                      versionData.refs[ref] = commit._id;
                      versionData.history[commit._id] = ancestors;
                      _context13.next = 53;
                      return versionDB.set(type + "/" + name, versionData);

                    case 53:
                      return _context13.abrupt("return", commit);

                    case 54:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));

            function commit(_x26, _x27, _x28, _x29, _x30) {
              return _commit.apply(this, arguments);
            }

            return commit;
          }()
        }, {
          key: "loadSnapshot",
          value: function () {
            var _loadSnapshot = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(type, name, commitOrId) {
              var ref,
                  commit,
                  commitDB,
                  _args14 = arguments;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      ref = _args14.length > 3 && _args14[3] !== undefined ? _args14[3] : "HEAD";

                      if (!(commitOrId && typeof commitOrId !== "string")) {
                        _context14.next = 5;
                        break;
                      }

                      commit = commitOrId;
                      _context14.next = 20;
                      break;

                    case 5:
                      if (!commitOrId) {
                        _context14.next = 17;
                        break;
                      }

                      _context14.t0 = this.__commitDB;

                      if (_context14.t0) {
                        _context14.next = 11;
                        break;
                      }

                      _context14.next = 10;
                      return this._commitDB();

                    case 10:
                      _context14.t0 = _context14.sent;

                    case 11:
                      commitDB = _context14.t0;
                      _context14.next = 14;
                      return commitDB.get(commitOrId);

                    case 14:
                      commit = _context14.sent;
                      _context14.next = 20;
                      break;

                    case 17:
                      _context14.next = 19;
                      return this.getLatestCommit(type, name, ref);

                    case 19:
                      commit = _context14.sent;

                    case 20:
                      if (commit) {
                        _context14.next = 22;
                        break;
                      }

                      throw new Error("Cannot find commit to loadSnapshot for ".concat(type, "/").concat(name, " (using ").concat(commitOrId, ")"));

                    case 22:
                      return _context14.abrupt("return", this.snapshotResourceFor(commit).readJson());

                    case 23:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));

            function loadSnapshot(_x31, _x32, _x33) {
              return _loadSnapshot.apply(this, arguments);
            }

            return loadSnapshot;
          }()
        }, {
          key: "revert",
          value: function () {
            var _revert = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(type, name, ref, toCommitId) {
              var versionDB, history;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.t0 = this.__versionDB;

                      if (_context15.t0) {
                        _context15.next = 5;
                        break;
                      }

                      _context15.next = 4;
                      return this._versionDB();

                    case 4:
                      _context15.t0 = _context15.sent;

                    case 5:
                      versionDB = _context15.t0;
                      _context15.next = 8;
                      return versionDB.get(type + "/" + name);

                    case 8:
                      history = _context15.sent;
                      history.refs[ref || "HEAD"] = toCommitId;
                      delete history.deleted;
                      _context15.next = 13;
                      return versionDB.set("".concat(type, "/").concat(name), history);

                    case 13:
                      return _context15.abrupt("return", history);

                    case 14:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));

            function revert(_x34, _x35, _x36, _x37) {
              return _revert.apply(this, arguments);
            }

            return revert;
          }()
        }, {
          key: "_createCommit",
          value: function _createCommit(type, name, description, tags, metadata, author, timestamp) {
            var message = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : "";
            var ancestors = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : [];
            var snapshot = arguments.length > 9 ? arguments[9] : undefined;
            var snapshotJson = arguments.length > 10 ? arguments[10] : undefined;
            var preview = arguments.length > 11 ? arguments[11] : undefined;
            var content = arguments.length > 12 ? arguments[12] : undefined;
            if (!preview && snapshot && snapshot.preview) preview = snapshot.preview;
            return this._createCommitFromSpec({
              name: name,
              type: type,
              timestamp: timestamp || Date.now(),
              author: {
                name: author.name,
                email: author.email,
                realm: author.realm
              },
              tags: tags,
              description: description,
              preview: preview,
              message: message,
              content: content || snapshotJson && __varRecorder__$2.sha1(snapshotJson) || null,
              deleted: !content && !snapshot,
              metadata: metadata,
              ancestors: ancestors
            }, true);
          }
        }, {
          key: "_createCommitFromSpec",
          value: function _createCommitFromSpec(commit) {
            var isHashed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            if (!commit.name) throw new Error("commit needs name");
            if (!commit.type) throw new Error("commit needs type");
            if (!commit.author) throw new Error("commit needs author");
            if (!commit.author.name) throw new Error("commit needs author.name");
            if (!commit.timestamp) commit.timestamp = Date.now();
            if (!commit.tags) commit.tags = [];

            if (!isHashed && commit.content) {
              isHashed = __varRecorder__$2.isHash(commit.content);
              if (!isHashed) commit.content = __varRecorder__$2.sha1(commit.content);
            }

            var hashObj = dissoc(commit, ["preview"]);

            var commitHash = __varRecorder__$2.sha1(JSON.stringify(hashObj));

            return Object.assign(commit, {
              _id: commitHash
            });
          }
        }, {
          key: "_commitDB",
          value: function () {
            var _commitDB2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var dbName, db;
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      if (!this.__commitDB) {
                        _context16.next = 2;
                        break;
                      }

                      return _context16.abrupt("return", this.__commitDB);

                    case 2:
                      dbName = this.name + "-commits";
                      db = Database.findDB(dbName);

                      if (!db) {
                        _context16.next = 6;
                        break;
                      }

                      return _context16.abrupt("return", this.__commitDB = db);

                    case 6:
                      db = Database.ensureDB(dbName);
                      _context16.next = 9;
                      return db.addDesignDocs(this._commitdb_indexes);

                    case 9:
                      return _context16.abrupt("return", this.__commitDB = db);

                    case 10:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));

            function _commitDB() {
              return _commitDB2.apply(this, arguments);
            }

            return _commitDB;
          }()
        }, {
          key: "close",
          value: function () {
            var _close = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      if (!this.__commitDB) {
                        _context17.next = 4;
                        break;
                      }

                      _context17.next = 3;
                      return this.__commitDB.close();

                    case 3:
                      this.__commitDB = null;

                    case 4:
                      if (!this.__versionDB) {
                        _context17.next = 8;
                        break;
                      }

                      _context17.next = 7;
                      return this.__versionDB.close();

                    case 7:
                      this.__versionDB = null;

                    case 8:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));

            function close() {
              return _close.apply(this, arguments);
            }

            return close;
          }()
        }, {
          key: "versionGraph",
          value: function () {
            var _versionGraph = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(type, objectName) {
              var versionDB, graph;
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      _context18.t0 = this.__versionDB;

                      if (_context18.t0) {
                        _context18.next = 5;
                        break;
                      }

                      _context18.next = 4;
                      return this._versionDB();

                    case 4:
                      _context18.t0 = _context18.sent;

                    case 5:
                      versionDB = _context18.t0;
                      _context18.next = 8;
                      return versionDB.get(type + "/" + objectName);

                    case 8:
                      graph = _context18.sent;
                      return _context18.abrupt("return", !graph || graph.deleted || graph._deleted ? null : graph);

                    case 10:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));

            function versionGraph(_x38, _x39) {
              return _versionGraph.apply(this, arguments);
            }

            return versionGraph;
          }()
        }, {
          key: "_log",
          value: function () {
            var _log2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(type, objectName) {
              var limit,
                  data,
                  version,
                  history,
                  _ref,
                  _ref2,
                  _args19 = arguments;

              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      limit = _args19.length > 3 && _args19[3] !== undefined ? _args19[3] : Infinity;
                      _context19.next = 4;
                      return this.versionGraph(type, objectName);

                    case 4:
                      data = _context19.sent;

                      if (!(!data || data.deleted || data._deleted)) {
                        _context19.next = 7;
                        break;
                      }

                      return _context19.abrupt("return", []);

                    case 7:
                      version = data.refs.HEAD;
                      history = [];

                    case 9:

                      if (!history.includes(version)) {
                        _context19.next = 12;
                        break;
                      }

                      throw new Error("cyclic version graph???");

                    case 12:
                      history.push(version);
                      _ref = data.history[version] || [];
                      _ref2 = _slicedToArray(_ref, 1);
                      version = _ref2[0];

                      if (!(!version || history.length >= limit)) {
                        _context19.next = 18;
                        break;
                      }

                      return _context19.abrupt("break", 20);

                    case 18:
                      _context19.next = 9;
                      break;

                    case 20:
                      return _context19.abrupt("return", history);

                    case 21:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));

            function _log(_x40, _x41) {
              return _log2.apply(this, arguments);
            }

            return _log;
          }()
        }, {
          key: "_findTimestampedVersionsOfObjectNamed",
          value: function () {
            var _findTimestampedVersionsOfObjectNamed2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(objectName) {
              var options,
                  _options$include_docs,
                  include_docs,
                  _options$descending,
                  descending,
                  _options$startTime,
                  startTime,
                  _options$endTime,
                  endTime,
                  startkey,
                  endkey,
                  objectDB,
                  _yield$objectDB$pouch,
                  rows,
                  _args20 = arguments;

              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      options = _args20.length > 1 && _args20[1] !== undefined ? _args20[1] : {};
                      _options$include_docs = options.include_docs, include_docs = _options$include_docs === void 0 ? true : _options$include_docs, _options$descending = options.descending, descending = _options$descending === void 0 ? true : _options$descending, _options$startTime = options.startTime, startTime = _options$startTime === void 0 ? "0".repeat(13) : _options$startTime, _options$endTime = options.endTime, endTime = _options$endTime === void 0 ? "9".repeat(13) : _options$endTime;
                      startkey = "".concat(objectName, "\0").concat(descending ? endTime : startTime);
                      endkey = "".concat(objectName, "\0").concat(descending ? startTime : endTime);
                      _context20.t0 = this.__commitDB;

                      if (_context20.t0) {
                        _context20.next = 9;
                        break;
                      }

                      _context20.next = 8;
                      return this._commitDB();

                    case 8:
                      _context20.t0 = _context20.sent;

                    case 9:
                      objectDB = _context20.t0;
                      _context20.next = 12;
                      return objectDB.pouchdb.query("nameAndTimestamp_index", Object.assign({}, options, {
                        descending: descending,
                        include_docs: include_docs,
                        startkey: startkey,
                        endkey: endkey
                      }));

                    case 12:
                      _yield$objectDB$pouch = _context20.sent;
                      rows = _yield$objectDB$pouch.rows;
                      return _context20.abrupt("return", include_docs ? rows.map(function (ea) {
                        return ea.doc;
                      }) : rows.map(function (ea) {
                        return ea.id;
                      }));

                    case 15:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));

            function _findTimestampedVersionsOfObjectNamed(_x42) {
              return _findTimestampedVersionsOfObjectNamed2.apply(this, arguments);
            }

            return _findTimestampedVersionsOfObjectNamed;
          }()
        }, {
          key: "_versionDB",
          value: function () {
            var _versionDB2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
              var dbName, db;
              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      if (!this.__versionDB) {
                        _context21.next = 2;
                        break;
                      }

                      return _context21.abrupt("return", this.__versionDB);

                    case 2:
                      dbName = this.name + "-version-graph";
                      db = Database.findDB(dbName);

                      if (!db) {
                        _context21.next = 6;
                        break;
                      }

                      return _context21.abrupt("return", this.__versionDB = db);

                    case 6:
                      db = Database.ensureDB(dbName);
                      _context21.next = 9;
                      return db.addDesignDocs(this._versiondb_indexes);

                    case 9:
                      return _context21.abrupt("return", this.__versionDB = db);

                    case 10:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this);
            }));

            function _versionDB() {
              return _versionDB2.apply(this, arguments);
            }

            return _versionDB;
          }()
        }, {
          key: "exportToDir",
          value: function () {
            var _exportToDir = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22(exportDir, nameAndTypes) {
              var _this = this;

              var copyResources,
                  includeDeleted,
                  versionDB,
                  backupData,
                  versions,
                  _iterator2,
                  _step2,
                  _step2$value,
                  refs,
                  history,
                  _id,
                  _yield$this$getCommit,
                  type,
                  name,
                  currentExportDir,
                  commitIds,
                  commits,
                  _iterator3,
                  _step3,
                  _step3$value,
                  _name,
                  _type,
                  _currentExportDir,
                  _yield$this$versionGr,
                  _refs,
                  _history,
                  _commitIds,
                  _commits,
                  _loop,
                  _i,
                  _backupData,
                  _args23 = arguments;

              return regeneratorRuntime.wrap(function _callee22$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      copyResources = _args23.length > 2 && _args23[2] !== undefined ? _args23[2] : false;
                      includeDeleted = _args23.length > 3 && _args23[3] !== undefined ? _args23[3] : false;
                      if (typeof exportDir === "string") exportDir = resource(exportDir);
                      _context23.t0 = this.__commitDB;

                      if (_context23.t0) {
                        _context23.next = 8;
                        break;
                      }

                      _context23.next = 7;
                      return this._commitDB();

                    case 7:
                      _context23.t0 = _context23.sent;

                    case 8:
                      _context23.t1 = this.__versionDB;

                      if (_context23.t1) {
                        _context23.next = 14;
                        break;
                      }

                      _context23.next = 13;
                      return this._versionDB();

                    case 13:
                      _context23.t1 = _context23.sent;

                    case 14:
                      versionDB = _context23.t1;
                      backupData = [];

                      if (nameAndTypes) {
                        _context23.next = 50;
                        break;
                      }

                      _context23.next = 19;
                      return versionDB.getAll();

                    case 19:
                      versions = _context23.sent;
                      _iterator2 = _createForOfIteratorHelper(versions);
                      _context23.prev = 21;

                      _iterator2.s();

                    case 23:
                      if ((_step2 = _iterator2.n()).done) {
                        _context23.next = 40;
                        break;
                      }

                      _step2$value = _step2.value, refs = _step2$value.refs, history = _step2$value.history, _id = _step2$value._id;

                      if (!_id.startsWith("_")) {
                        _context23.next = 27;
                        break;
                      }

                      return _context23.abrupt("continue", 38);

                    case 27:
                      _context23.next = 29;
                      return this.getCommit(refs.HEAD || Object.keys(history)[0]);

                    case 29:
                      _yield$this$getCommit = _context23.sent;
                      type = _yield$this$getCommit.type;
                      name = _yield$this$getCommit.name;
                      currentExportDir = exportDir.join(type).join(name).asDirectory();
                      commitIds = Object.keys(history);
                      _context23.next = 36;
                      return this.getCommitsWithIds(commitIds);

                    case 36:
                      commits = _context23.sent;
                      backupData.push({
                        refs: refs,
                        history: history,
                        currentExportDir: currentExportDir,
                        commits: commits,
                        name: name,
                        type: type
                      });

                    case 38:
                      _context23.next = 23;
                      break;

                    case 40:
                      _context23.next = 45;
                      break;

                    case 42:
                      _context23.prev = 42;
                      _context23.t2 = _context23["catch"](21);

                      _iterator2.e(_context23.t2);

                    case 45:
                      _context23.prev = 45;

                      _iterator2.f();

                      return _context23.finish(45);

                    case 48:
                      _context23.next = 76;
                      break;

                    case 50:
                      _iterator3 = _createForOfIteratorHelper(nameAndTypes);
                      _context23.prev = 51;

                      _iterator3.s();

                    case 53:
                      if ((_step3 = _iterator3.n()).done) {
                        _context23.next = 68;
                        break;
                      }

                      _step3$value = _step3.value, _name = _step3$value.name, _type = _step3$value.type;
                      _currentExportDir = exportDir.join(_type).join(_name).asDirectory();
                      _context23.next = 58;
                      return this.versionGraph(_type, _name);

                    case 58:
                      _yield$this$versionGr = _context23.sent;
                      _refs = _yield$this$versionGr.refs;
                      _history = _yield$this$versionGr.history;
                      _commitIds = Object.keys(_history);
                      _context23.next = 64;
                      return this.getCommitsWithIds(_commitIds);

                    case 64:
                      _commits = _context23.sent;
                      backupData.push({
                        refs: _refs,
                        history: _history,
                        currentExportDir: _currentExportDir,
                        commits: _commits,
                        name: _name,
                        type: _type
                      });

                    case 66:
                      _context23.next = 53;
                      break;

                    case 68:
                      _context23.next = 73;
                      break;

                    case 70:
                      _context23.prev = 70;
                      _context23.t3 = _context23["catch"](51);

                      _iterator3.e(_context23.t3);

                    case 73:
                      _context23.prev = 73;

                      _iterator3.f();

                      return _context23.finish(73);

                    case 76:
                      _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop() {
                        var _backupData$_i, refs, history, currentExportDir, commits, name, type, resourcesForCopy, _iterator4, _step4, _step4$value, from, to;

                        return regeneratorRuntime.wrap(function _loop$(_context22) {
                          while (1) {
                            switch (_context22.prev = _context22.next) {
                              case 0:
                                _backupData$_i = _backupData[_i], refs = _backupData$_i.refs, history = _backupData$_i.history, currentExportDir = _backupData$_i.currentExportDir, commits = _backupData$_i.commits, name = _backupData$_i.name, type = _backupData$_i.type;

                                if (!includeDeleted) {
                                  commits = commits.filter(function (ea) {
                                    return !ea.deleted;
                                  });
                                }

                                resourcesForCopy = copyResources ? commits.map(function (commit) {
                                  if (commit.deleted || commit._deleted || !commit.content) return null;
                                  delete commit._rev;

                                  var from = _this.snapshotResourceFor(commit);

                                  var to = currentExportDir.join(from.parent().name() + "/" + from.name());
                                  return {
                                    from: from,
                                    to: to
                                  };
                                }).filter(Boolean) : [];
                                if (!copyResources) commits.forEach(function (commit) {
                                  delete commit._rev;
                                });
                                _context22.next = 6;
                                return currentExportDir.ensureExistance();

                              case 6:
                                _context22.next = 8;
                                return currentExportDir.join("index.json").writeJson({
                                  name: name,
                                  type: type
                                });

                              case 8:
                                _context22.next = 10;
                                return currentExportDir.join("commits.json").writeJson(commits);

                              case 10:
                                _context22.next = 12;
                                return currentExportDir.join("history.json").writeJson({
                                  refs: refs,
                                  history: history
                                });

                              case 12:
                                _iterator4 = _createForOfIteratorHelper(resourcesForCopy);
                                _context22.prev = 13;

                                _iterator4.s();

                              case 15:
                                if ((_step4 = _iterator4.n()).done) {
                                  _context22.next = 21;
                                  break;
                                }

                                _step4$value = _step4.value, from = _step4$value.from, to = _step4$value.to;
                                _context22.next = 19;
                                return from.copyTo(to);

                              case 19:
                                _context22.next = 15;
                                break;

                              case 21:
                                _context22.next = 26;
                                break;

                              case 23:
                                _context22.prev = 23;
                                _context22.t0 = _context22["catch"](13);

                                _iterator4.e(_context22.t0);

                              case 26:
                                _context22.prev = 26;

                                _iterator4.f();

                                return _context22.finish(26);

                              case 29:
                              case "end":
                                return _context22.stop();
                            }
                          }
                        }, _loop, null, [[13, 23, 26, 29]]);
                      });
                      _i = 0, _backupData = backupData;

                    case 78:
                      if (!(_i < _backupData.length)) {
                        _context23.next = 83;
                        break;
                      }

                      return _context23.delegateYield(_loop(), "t4", 80);

                    case 80:
                      _i++;
                      _context23.next = 78;
                      break;

                    case 83:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee22, this, [[21, 42, 45, 48], [51, 70, 73, 76]]);
            }));

            function exportToDir(_x43, _x44) {
              return _exportToDir.apply(this, arguments);
            }

            return exportToDir;
          }()
        }, {
          key: "exportToSpecs",
          value: function () {
            var _exportToSpecs = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23(nameAndTypes) {
              var includeDeleted,
                  specs,
                  stats,
                  type,
                  name,
                  _iterator5,
                  _step5,
                  _step5$value,
                  _name2,
                  _type2,
                  _yield$this$versionGr2,
                  refs,
                  history,
                  commitIds,
                  commits,
                  _args24 = arguments;

              return regeneratorRuntime.wrap(function _callee23$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      includeDeleted = _args24.length > 1 && _args24[1] !== undefined ? _args24[1] : false;
                      specs = [];

                      if (nameAndTypes) {
                        _context24.next = 11;
                        break;
                      }

                      nameAndTypes = [];
                      _context24.next = 6;
                      return this.objectStats();

                    case 6:
                      _context24.t0 = _context24.sent;

                      if (_context24.t0) {
                        _context24.next = 9;
                        break;
                      }

                      _context24.t0 = {};

                    case 9:
                      stats = _context24.t0;

                      for (type in stats) {
                        for (name in stats[type]) {
                          nameAndTypes.push({
                            type: type,
                            name: name
                          });
                        }
                      }

                    case 11:
                      _iterator5 = _createForOfIteratorHelper(nameAndTypes);
                      _context24.prev = 12;

                      _iterator5.s();

                    case 14:
                      if ((_step5 = _iterator5.n()).done) {
                        _context24.next = 30;
                        break;
                      }

                      _step5$value = _step5.value, _name2 = _step5$value.name, _type2 = _step5$value.type;
                      _context24.next = 18;
                      return this.versionGraph(_type2, _name2);

                    case 18:
                      _yield$this$versionGr2 = _context24.sent;
                      refs = _yield$this$versionGr2.refs;
                      history = _yield$this$versionGr2.history;
                      commitIds = Object.keys(history);
                      _context24.next = 24;
                      return this.getCommitsWithIds(commitIds);

                    case 24:
                      commits = _context24.sent;

                      if (!includeDeleted) {
                        commits = commits.filter(function (ea) {
                          return !ea.deleted;
                        });
                      }

                      commits.forEach(function (commit) {
                        delete commit._rev;
                      });
                      specs.push({
                        type: _type2,
                        name: _name2,
                        commits: commits,
                        history: {
                          refs: refs,
                          history: history
                        }
                      });

                    case 28:
                      _context24.next = 14;
                      break;

                    case 30:
                      _context24.next = 35;
                      break;

                    case 32:
                      _context24.prev = 32;
                      _context24.t1 = _context24["catch"](12);

                      _iterator5.e(_context24.t1);

                    case 35:
                      _context24.prev = 35;

                      _iterator5.f();

                      return _context24.finish(35);

                    case 38:
                      return _context24.abrupt("return", specs);

                    case 39:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, _callee23, this, [[12, 32, 35, 38]]);
            }));

            function exportToSpecs(_x45) {
              return _exportToSpecs.apply(this, arguments);
            }

            return exportToSpecs;
          }()
        }, {
          key: "importFromDir",
          value: function () {
            var _importFromDir = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee25(importDir) {
              var overwrite,
                  copyResources,
                  indexes,
                  dirs,
                  importSpecs,
                  _iterator6,
                  _step6,
                  dir,
                  findImportDataIn,
                  _findImportDataIn,
                  _args26 = arguments;

              return regeneratorRuntime.wrap(function _callee25$(_context26) {
                while (1) {
                  switch (_context26.prev = _context26.next) {
                    case 0:
                      _findImportDataIn = function _findImportDataIn3() {
                        _findImportDataIn = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24(dir) {
                          var _yield$Promise$all, _yield$Promise$all2, _yield$Promise$all2$, type, name, commits, history, snapshotDirs;

                          return regeneratorRuntime.wrap(function _callee24$(_context25) {
                            while (1) {
                              switch (_context25.prev = _context25.next) {
                                case 0:
                                  _context25.next = 2;
                                  return Promise.all([dir.join("index.json").readJson(), dir.join("commits.json").readJson(), dir.join("history.json").readJson()]);

                                case 2:
                                  _yield$Promise$all = _context25.sent;
                                  _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 3);
                                  _yield$Promise$all2$ = _yield$Promise$all2[0];
                                  type = _yield$Promise$all2$.type;
                                  name = _yield$Promise$all2$.name;
                                  commits = _yield$Promise$all2[1];
                                  history = _yield$Promise$all2[2];

                                  if (!copyResources) {
                                    _context25.next = 15;
                                    break;
                                  }

                                  _context25.next = 12;
                                  return dir.dirList(1, {
                                    exclude: function exclude(ea) {
                                      return !ea.isDirectory();
                                    }
                                  });

                                case 12:
                                  _context25.t0 = _context25.sent;
                                  _context25.next = 16;
                                  break;

                                case 15:
                                  _context25.t0 = [];

                                case 16:
                                  snapshotDirs = _context25.t0;
                                  return _context25.abrupt("return", {
                                    dir: dir,
                                    type: type,
                                    name: name,
                                    commits: commits,
                                    history: history,
                                    snapshotDirs: snapshotDirs
                                  });

                                case 18:
                                case "end":
                                  return _context25.stop();
                              }
                            }
                          }, _callee24);
                        }));
                        return _findImportDataIn.apply(this, arguments);
                      };

                      findImportDataIn = function _findImportDataIn2(_x47) {
                        return _findImportDataIn.apply(this, arguments);
                      };

                      overwrite = _args26.length > 1 && _args26[1] !== undefined ? _args26[1] : false;
                      copyResources = _args26.length > 2 && _args26[2] !== undefined ? _args26[2] : false;
                      _context26.next = 6;
                      return importDir.dirList(3, {
                        exclude: function exclude(ea) {
                          return !ea.isDirectory() && ea.name() !== "index.json";
                        }
                      });

                    case 6:
                      indexes = _context26.sent;
                      indexes = indexes.filter(function (ea) {
                        return ea.name() === "index.json";
                      });
                      dirs = indexes.map(function (ea) {
                        return ea.parent();
                      });
                      importSpecs = [];
                      _iterator6 = _createForOfIteratorHelper(dirs);
                      _context26.prev = 12;

                      _iterator6.s();

                    case 14:
                      if ((_step6 = _iterator6.n()).done) {
                        _context26.next = 23;
                        break;
                      }

                      dir = _step6.value;
                      _context26.t0 = importSpecs;
                      _context26.next = 19;
                      return findImportDataIn(dir);

                    case 19:
                      _context26.t1 = _context26.sent;

                      _context26.t0.push.call(_context26.t0, _context26.t1);

                    case 21:
                      _context26.next = 14;
                      break;

                    case 23:
                      _context26.next = 28;
                      break;

                    case 25:
                      _context26.prev = 25;
                      _context26.t2 = _context26["catch"](12);

                      _iterator6.e(_context26.t2);

                    case 28:
                      _context26.prev = 28;

                      _iterator6.f();

                      return _context26.finish(28);

                    case 31:
                      return _context26.abrupt("return", this.importFromSpecs(importSpecs, overwrite, copyResources));

                    case 32:
                    case "end":
                      return _context26.stop();
                  }
                }
              }, _callee25, this, [[12, 25, 28, 31]]);
            }));

            function importFromDir(_x46) {
              return _importFromDir.apply(this, arguments);
            }

            return importFromDir;
          }()
        }, {
          key: "importFromSpecs",
          value: function () {
            var _importFromSpecs = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee26(specs) {
              var overwrite,
                  copyResources,
                  versionDB,
                  _iterator7,
                  _step7,
                  _step7$value,
                  type,
                  name,
                  _iterator8,
                  _step8,
                  spec,
                  _args27 = arguments;

              return regeneratorRuntime.wrap(function _callee26$(_context27) {
                while (1) {
                  switch (_context27.prev = _context27.next) {
                    case 0:
                      overwrite = _args27.length > 1 && _args27[1] !== undefined ? _args27[1] : false;
                      copyResources = _args27.length > 2 && _args27[2] !== undefined ? _args27[2] : false;

                      if (overwrite) {
                        _context27.next = 28;
                        break;
                      }

                      _context27.t0 = this.__versionDB;

                      if (_context27.t0) {
                        _context27.next = 8;
                        break;
                      }

                      _context27.next = 7;
                      return this._versionDB();

                    case 7:
                      _context27.t0 = _context27.sent;

                    case 8:
                      versionDB = _context27.t0;
                      _iterator7 = _createForOfIteratorHelper(specs);
                      _context27.prev = 10;

                      _iterator7.s();

                    case 12:
                      if ((_step7 = _iterator7.n()).done) {
                        _context27.next = 20;
                        break;
                      }

                      _step7$value = _step7.value, type = _step7$value.type, name = _step7$value.name;
                      _context27.next = 16;
                      return versionDB.get("".concat(type, "/").concat(name));

                    case 16:
                      if (!_context27.sent) {
                        _context27.next = 18;
                        break;
                      }

                      throw new Error("Import failed: object ".concat(type, "/").concat(name, " already exists and overwrite is not allowed"));

                    case 18:
                      _context27.next = 12;
                      break;

                    case 20:
                      _context27.next = 25;
                      break;

                    case 22:
                      _context27.prev = 22;
                      _context27.t1 = _context27["catch"](10);

                      _iterator7.e(_context27.t1);

                    case 25:
                      _context27.prev = 25;

                      _iterator7.f();

                      return _context27.finish(25);

                    case 28:
                      _iterator8 = _createForOfIteratorHelper(specs);
                      _context27.prev = 29;

                      _iterator8.s();

                    case 31:
                      if ((_step8 = _iterator8.n()).done) {
                        _context27.next = 37;
                        break;
                      }

                      spec = _step8.value;
                      _context27.next = 35;
                      return this.importFromSpec(spec, true, copyResources);

                    case 35:
                      _context27.next = 31;
                      break;

                    case 37:
                      _context27.next = 42;
                      break;

                    case 39:
                      _context27.prev = 39;
                      _context27.t2 = _context27["catch"](29);

                      _iterator8.e(_context27.t2);

                    case 42:
                      _context27.prev = 42;

                      _iterator8.f();

                      return _context27.finish(42);

                    case 45:
                      return _context27.abrupt("return", specs);

                    case 46:
                    case "end":
                      return _context27.stop();
                  }
                }
              }, _callee26, this, [[10, 22, 25, 28], [29, 39, 42, 45]]);
            }));

            function importFromSpecs(_x48) {
              return _importFromSpecs.apply(this, arguments);
            }

            return importFromSpecs;
          }()
        }, {
          key: "importFromSpec",
          value: function () {
            var _importFromSpec = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee27(spec) {
              var overwrite,
                  copyResources,
                  versionDB,
                  commitDB,
                  snapshotLocation,
                  type,
                  name,
                  commits,
                  history,
                  snapshotDirs,
                  _args28 = arguments;
              return regeneratorRuntime.wrap(function _callee27$(_context28) {
                while (1) {
                  switch (_context28.prev = _context28.next) {
                    case 0:
                      overwrite = _args28.length > 1 && _args28[1] !== undefined ? _args28[1] : false;
                      copyResources = _args28.length > 2 && _args28[2] !== undefined ? _args28[2] : false;
                      _context28.t0 = this.__versionDB;

                      if (_context28.t0) {
                        _context28.next = 7;
                        break;
                      }

                      _context28.next = 6;
                      return this._versionDB();

                    case 6:
                      _context28.t0 = _context28.sent;

                    case 7:
                      versionDB = _context28.t0;
                      _context28.t1 = this.__commitDB;

                      if (_context28.t1) {
                        _context28.next = 13;
                        break;
                      }

                      _context28.next = 12;
                      return this._commitDB();

                    case 12:
                      _context28.t1 = _context28.sent;

                    case 13:
                      commitDB = _context28.t1;
                      snapshotLocation = this.snapshotLocation;
                      type = spec.type, name = spec.name, commits = spec.commits, history = spec.history, snapshotDirs = spec.snapshotDirs;
                      _context28.t2 = !overwrite;

                      if (!_context28.t2) {
                        _context28.next = 21;
                        break;
                      }

                      _context28.next = 20;
                      return versionDB.get("".concat(type, "/").concat(name));

                    case 20:
                      _context28.t2 = _context28.sent;

                    case 21:
                      if (!_context28.t2) {
                        _context28.next = 23;
                        break;
                      }

                      throw new Error("Import failed: object ".concat(type, "/").concat(name, " already exists and overwrite is not allowed"));

                    case 23:
                      _context28.next = 25;
                      return Promise.all([commitDB.setDocuments(commits), versionDB.set("".concat(type, "/").concat(name), history)].concat(_toConsumableArray(snapshotDirs && copyResources ? snapshotDirs.map(function (ea) {
                        return ea.copyTo(snapshotLocation.join(ea.name()).asDirectory());
                      }) : [])));

                    case 25:
                      return _context28.abrupt("return", spec);

                    case 26:
                    case "end":
                      return _context28.stop();
                  }
                }
              }, _callee27, this);
            }));

            function importFromSpec(_x49) {
              return _importFromSpec.apply(this, arguments);
            }

            return importFromSpec;
          }()
        }, {
          key: "importFromResource",
          value: function () {
            var _importFromResource = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee28(type, name, resource, commitSpec) {
              var purgeHistory,
                  snap,
                  _args29 = arguments;
              return regeneratorRuntime.wrap(function _callee28$(_context29) {
                while (1) {
                  switch (_context29.prev = _context29.next) {
                    case 0:
                      purgeHistory = _args29.length > 4 && _args29[4] !== undefined ? _args29[4] : false;
                      _context29.next = 3;
                      return resource.readJson();

                    case 3:
                      snap = _context29.sent;
                      _context29.t0 = purgeHistory;

                      if (!_context29.t0) {
                        _context29.next = 9;
                        break;
                      }

                      _context29.next = 8;
                      return this.has(type, name);

                    case 8:
                      _context29.t0 = _context29.sent;

                    case 9:
                      if (!_context29.t0) {
                        _context29.next = 12;
                        break;
                      }

                      _context29.next = 12;
                      return this["delete"](type, name, false);

                    case 12:
                      return _context29.abrupt("return", this.commit(type, name, snap, commitSpec));

                    case 13:
                    case "end":
                      return _context29.stop();
                  }
                }
              }, _callee28, this);
            }));

            function importFromResource(_x50, _x51, _x52, _x53) {
              return _importFromResource.apply(this, arguments);
            }

            return importFromResource;
          }()
        }, {
          key: "replicateTo",
          value: function replicateTo(remoteCommitDB, remoteVersionDB, toSnapshotLocation, options) {
            return new __varRecorder__$2.Synchronization(this, remoteCommitDB, remoteVersionDB, toSnapshotLocation, Object.assign({
              method: "replicateTo"
            }, options)).start();
          }
        }, {
          key: "replicateFrom",
          value: function replicateFrom(remoteCommitDB, remoteVersionDB, toSnapshotLocation, options) {
            return new __varRecorder__$2.Synchronization(this, remoteCommitDB, remoteVersionDB, toSnapshotLocation, Object.assign({
              method: "replicateFrom"
            }, options)).start();
          }
        }, {
          key: "sync",
          value: function sync(remoteCommitDB, remoteVersionDB, toSnapshotLocation, options) {
            return new __varRecorder__$2.Synchronization(this, remoteCommitDB, remoteVersionDB, toSnapshotLocation, Object.assign({
              method: "sync"
            }, options)).start();
          }
        }, {
          key: "getConflicts",
          value: function () {
            var _getConflicts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee31(includeDocs, only) {
              var commitDB, versionDB, getConflicts, _getConflicts2;

              return regeneratorRuntime.wrap(function _callee31$(_context32) {
                while (1) {
                  switch (_context32.prev = _context32.next) {
                    case 0:
                      _getConflicts2 = function _getConflicts4() {
                        _getConflicts2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee30(db, kind) {
                          var conflicts;
                          return regeneratorRuntime.wrap(function _callee30$(_context31) {
                            while (1) {
                              switch (_context31.prev = _context31.next) {
                                case 0:
                                  _context31.next = 2;
                                  return db.getConflicts({
                                    include_docs: true
                                  });

                                case 2:
                                  conflicts = _context31.sent;
                                  _context31.next = 5;
                                  return Promise.all(conflicts.map( /*#__PURE__*/function () {
                                    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee29(ea) {
                                      var id, rev, conflicts, doc, query;
                                      return regeneratorRuntime.wrap(function _callee29$(_context30) {
                                        while (1) {
                                          switch (_context30.prev = _context30.next) {
                                            case 0:
                                              id = ea.id, rev = ea.rev, conflicts = ea.conflicts, doc = ea.doc;

                                              if (!(only && only[kind] && !only[kind][id])) {
                                                _context30.next = 3;
                                                break;
                                              }

                                              return _context30.abrupt("return", null);

                                            case 3:
                                              if (!includeDocs) {
                                                _context30.next = 8;
                                                break;
                                              }

                                              query = conflicts.map(function (rev) {
                                                return {
                                                  id: id,
                                                  rev: rev
                                                };
                                              });
                                              _context30.next = 7;
                                              return db.getDocuments(query);

                                            case 7:
                                              conflicts = _context30.sent;

                                            case 8:
                                              if (!includeDocs) doc = null;else dissoc(doc, ["_conflicts"]);
                                              return _context30.abrupt("return", {
                                                id: id,
                                                rev: rev,
                                                conflicts: conflicts,
                                                kind: kind,
                                                doc: doc
                                              });

                                            case 10:
                                            case "end":
                                              return _context30.stop();
                                          }
                                        }
                                      }, _callee29);
                                    }));

                                    return function (_x58) {
                                      return _ref3.apply(this, arguments);
                                    };
                                  }()));

                                case 5:
                                  _context31.t0 = Boolean;
                                  return _context31.abrupt("return", _context31.sent.filter(_context31.t0));

                                case 7:
                                case "end":
                                  return _context31.stop();
                              }
                            }
                          }, _callee30);
                        }));
                        return _getConflicts2.apply(this, arguments);
                      };

                      getConflicts = function _getConflicts3(_x56, _x57) {
                        return _getConflicts2.apply(this, arguments);
                      };

                      _context32.t0 = this.__commitDB;

                      if (_context32.t0) {
                        _context32.next = 7;
                        break;
                      }

                      _context32.next = 6;
                      return this._commitDB();

                    case 6:
                      _context32.t0 = _context32.sent;

                    case 7:
                      commitDB = _context32.t0;
                      _context32.t1 = this.__versionDB;

                      if (_context32.t1) {
                        _context32.next = 13;
                        break;
                      }

                      _context32.next = 12;
                      return this._versionDB();

                    case 12:
                      _context32.t1 = _context32.sent;

                    case 13:
                      versionDB = _context32.t1;
                      _context32.next = 16;
                      return getConflicts(versionDB, "versions");

                    case 16:
                      _context32.t2 = _context32.sent;
                      _context32.next = 19;
                      return getConflicts(commitDB, "commits");

                    case 19:
                      _context32.t3 = _context32.sent;
                      return _context32.abrupt("return", {
                        versionConflicts: _context32.t2,
                        commitConflicts: _context32.t3
                      });

                    case 21:
                    case "end":
                      return _context32.stop();
                  }
                }
              }, _callee31, this);
            }));

            function getConflicts(_x54, _x55) {
              return _getConflicts.apply(this, arguments);
            }

            return getConflicts;
          }()
        }, {
          key: "resolveConflict",
          value: function () {
            var _resolveConflict = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee32(arg) {
              var resolved, del, kind, id, db;
              return regeneratorRuntime.wrap(function _callee32$(_context33) {
                while (1) {
                  switch (_context33.prev = _context33.next) {
                    case 0:
                      resolved = arg.resolved, del = arg["delete"], kind = arg.kind, id = arg.id;

                      if (!(kind === "versions")) {
                        _context33.next = 10;
                        break;
                      }

                      _context33.t0 = this.__versionDB;

                      if (_context33.t0) {
                        _context33.next = 7;
                        break;
                      }

                      _context33.next = 6;
                      return this._versionDB();

                    case 6:
                      _context33.t0 = _context33.sent;

                    case 7:
                      db = _context33.t0;
                      _context33.next = 20;
                      break;

                    case 10:
                      if (!(kind === "commits")) {
                        _context33.next = 19;
                        break;
                      }

                      _context33.t1 = this.__commitDB;

                      if (_context33.t1) {
                        _context33.next = 16;
                        break;
                      }

                      _context33.next = 15;
                      return this._commitDB();

                    case 15:
                      _context33.t1 = _context33.sent;

                    case 16:
                      db = _context33.t1;
                      _context33.next = 20;
                      break;

                    case 19:
                      throw new Error("Unknown conflict kind: ".concat(kind));

                    case 20:
                      _context33.next = 22;
                      return db.set(id, resolved);

                    case 22:
                      _context33.next = 24;
                      return Promise.all(del.map(function (rev) {
                        return db.pouchdb.remove(id, rev);
                      }));

                    case 24:
                    case "end":
                      return _context33.stop();
                  }
                }
              }, _callee32, this);
            }));

            function resolveConflict(_x59) {
              return _resolveConflict.apply(this, arguments);
            }

            return resolveConflict;
          }()
        }, {
          key: "getDiff",
          value: function () {
            var _getDiff = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee36(remoteCommitDBOrName, remoteVersionDB) {
              var remoteCommitDB, localCommitDB, localVersionDB, commitDiff, versionDiff, local, allRemoteVersions, remote, changed, allRemoteCommits, localCommits, remoteCommits, changedCommits, _iterator9, _step9, ea, _iterator10, _step10, _ea, _iterator11, _step11, _ea2, localCommitTypeAndNames, remoteCommitTypeAndNames, changedCommitTypeAndNames;

              return regeneratorRuntime.wrap(function _callee36$(_context37) {
                while (1) {
                  switch (_context37.prev = _context37.next) {
                    case 0:
                      remoteCommitDB = remoteCommitDBOrName;

                      if (typeof remoteCommitDBOrName === "string") {
                        remoteCommitDB = Database.ensureDB("".concat(remoteCommitDBOrName, "-commits"));
                        remoteVersionDB = Database.ensureDB("".concat(remoteCommitDBOrName, "-version-graph"));
                      }

                      _context37.t0 = this.__commitDB;

                      if (_context37.t0) {
                        _context37.next = 7;
                        break;
                      }

                      _context37.next = 6;
                      return this._commitDB();

                    case 6:
                      _context37.t0 = _context37.sent;

                    case 7:
                      localCommitDB = _context37.t0;
                      _context37.t1 = this.__versionDB;

                      if (_context37.t1) {
                        _context37.next = 13;
                        break;
                      }

                      _context37.next = 12;
                      return this._versionDB();

                    case 12:
                      _context37.t1 = _context37.sent;

                    case 13:
                      localVersionDB = _context37.t1;
                      _context37.next = 16;
                      return localCommitDB.diffWith(remoteCommitDB);

                    case 16:
                      commitDiff = _context37.sent;
                      _context37.next = 19;
                      return localVersionDB.diffWith(remoteVersionDB);

                    case 19:
                      versionDiff = _context37.sent;
                      _context37.next = 22;
                      return Promise.all(versionDiff.inLeft.map( /*#__PURE__*/function () {
                        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee33(ea) {
                          return regeneratorRuntime.wrap(function _callee33$(_context34) {
                            while (1) {
                              switch (_context34.prev = _context34.next) {
                                case 0:
                                  _context34.t0 = ea.id;
                                  _context34.next = 3;
                                  return localVersionDB.get(ea.id);

                                case 3:
                                  _context34.t1 = _context34.sent;
                                  return _context34.abrupt("return", {
                                    id: _context34.t0,
                                    doc: _context34.t1
                                  });

                                case 5:
                                case "end":
                                  return _context34.stop();
                              }
                            }
                          }, _callee33);
                        }));

                        return function (_x62) {
                          return _ref4.apply(this, arguments);
                        };
                      }()));

                    case 22:
                      local = _context37.sent;
                      _context37.t2 = arr;
                      _context37.next = 26;
                      return remoteVersionDB.getAll();

                    case 26:
                      _context37.t3 = _context37.sent;

                      _context37.t4 = function (d) {
                        return d._id;
                      };

                      allRemoteVersions = _context37.t2.groupBy.call(_context37.t2, _context37.t3, _context37.t4);
                      _context37.next = 31;
                      return Promise.all(versionDiff.inRight.map( /*#__PURE__*/function () {
                        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee34(ea) {
                          return regeneratorRuntime.wrap(function _callee34$(_context35) {
                            while (1) {
                              switch (_context35.prev = _context35.next) {
                                case 0:
                                  return _context35.abrupt("return", {
                                    id: ea.id,
                                    doc: allRemoteVersions[ea.id]
                                  });

                                case 1:
                                case "end":
                                  return _context35.stop();
                              }
                            }
                          }, _callee34);
                        }));

                        return function (_x63) {
                          return _ref5.apply(this, arguments);
                        };
                      }()));

                    case 31:
                      remote = _context37.sent;
                      _context37.next = 34;
                      return Promise.all(versionDiff.changed.map( /*#__PURE__*/function () {
                        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee35(ea) {
                          return regeneratorRuntime.wrap(function _callee35$(_context36) {
                            while (1) {
                              switch (_context36.prev = _context36.next) {
                                case 0:
                                  _context36.t0 = Object;
                                  _context36.t1 = {};
                                  _context36.t2 = ea.left;
                                  _context36.next = 5;
                                  return localVersionDB.get(ea.left.id);

                                case 5:
                                  _context36.t3 = _context36.sent;
                                  _context36.next = 8;
                                  return remoteVersionDB.get(ea.right.id);

                                case 8:
                                  _context36.t4 = _context36.sent;
                                  _context36.t5 = {
                                    docA: _context36.t3,
                                    docB: _context36.t4
                                  };
                                  return _context36.abrupt("return", _context36.t0.assign.call(_context36.t0, _context36.t1, _context36.t2, _context36.t5));

                                case 11:
                                case "end":
                                  return _context36.stop();
                              }
                            }
                          }, _callee35);
                        }));

                        return function (_x64) {
                          return _ref6.apply(this, arguments);
                        };
                      }()));

                    case 34:
                      changed = _context37.sent;
                      _context37.t5 = arr;
                      _context37.next = 38;
                      return remoteCommitDB.getAll();

                    case 38:
                      _context37.t6 = _context37.sent;

                      _context37.t7 = function (d) {
                        return d._id;
                      };

                      allRemoteCommits = _context37.t5.groupBy.call(_context37.t5, _context37.t6, _context37.t7);
                      localCommits = [];
                      remoteCommits = [];
                      changedCommits = [];
                      _iterator9 = _createForOfIteratorHelper(commitDiff.inLeft);
                      _context37.prev = 45;

                      _iterator9.s();

                    case 47:
                      if ((_step9 = _iterator9.n()).done) {
                        _context37.next = 56;
                        break;
                      }

                      ea = _step9.value;
                      _context37.t8 = localCommits;
                      _context37.next = 52;
                      return localCommitDB.get(ea.id);

                    case 52:
                      _context37.t9 = _context37.sent;

                      _context37.t8.push.call(_context37.t8, _context37.t9);

                    case 54:
                      _context37.next = 47;
                      break;

                    case 56:
                      _context37.next = 61;
                      break;

                    case 58:
                      _context37.prev = 58;
                      _context37.t10 = _context37["catch"](45);

                      _iterator9.e(_context37.t10);

                    case 61:
                      _context37.prev = 61;

                      _iterator9.f();

                      return _context37.finish(61);

                    case 64:
                      _iterator10 = _createForOfIteratorHelper(commitDiff.inRight);
                      _context37.prev = 65;

                      _iterator10.s();

                    case 67:
                      if ((_step10 = _iterator10.n()).done) {
                        _context37.next = 76;
                        break;
                      }

                      _ea = _step10.value;
                      _context37.t11 = remoteCommits;
                      _context37.next = 72;
                      return allRemoteCommits[_ea.id];

                    case 72:
                      _context37.t12 = _context37.sent;

                      _context37.t11.push.call(_context37.t11, _context37.t12);

                    case 74:
                      _context37.next = 67;
                      break;

                    case 76:
                      _context37.next = 81;
                      break;

                    case 78:
                      _context37.prev = 78;
                      _context37.t13 = _context37["catch"](65);

                      _iterator10.e(_context37.t13);

                    case 81:
                      _context37.prev = 81;

                      _iterator10.f();

                      return _context37.finish(81);

                    case 84:
                      _iterator11 = _createForOfIteratorHelper(commitDiff.changed);
                      _context37.prev = 85;

                      _iterator11.s();

                    case 87:
                      if ((_step11 = _iterator11.n()).done) {
                        _context37.next = 101;
                        break;
                      }

                      _ea2 = _step11.value;
                      _context37.t14 = changedCommits;
                      _context37.next = 92;
                      return localCommitDB.get(_ea2.left.id);

                    case 92:
                      _context37.t15 = _context37.sent;

                      _context37.t14.push.call(_context37.t14, _context37.t15);

                      _context37.t16 = changedCommits;
                      _context37.next = 97;
                      return remoteCommitDB.get(_ea2.right.id);

                    case 97:
                      _context37.t17 = _context37.sent;

                      _context37.t16.push.call(_context37.t16, _context37.t17);

                    case 99:
                      _context37.next = 87;
                      break;

                    case 101:
                      _context37.next = 106;
                      break;

                    case 103:
                      _context37.prev = 103;
                      _context37.t18 = _context37["catch"](85);

                      _iterator11.e(_context37.t18);

                    case 106:
                      _context37.prev = 106;

                      _iterator11.f();

                      return _context37.finish(106);

                    case 109:
                      localCommitTypeAndNames = localCommits.map(function (ea) {
                        return select(ea, ["_id", "name", "type"]);
                      });
                      remoteCommitTypeAndNames = remoteCommits.map(function (ea) {
                        return select(ea, ["_id", "name", "type"]);
                      });
                      changedCommitTypeAndNames = changedCommits.map(function (ea) {
                        return select(ea, ["_id", "name", "type"]);
                      });
                      return _context37.abrupt("return", {
                        changed: changed,
                        remote: remote,
                        local: local,
                        changedCommitTypeAndNames: changedCommitTypeAndNames,
                        remoteCommitTypeAndNames: remoteCommitTypeAndNames,
                        localCommitTypeAndNames: localCommitTypeAndNames
                      });

                    case 113:
                    case "end":
                      return _context37.stop();
                  }
                }
              }, _callee36, this, [[45, 58, 61, 64], [65, 78, 81, 84], [85, 103, 106, 109]]);
            }));

            function getDiff(_x60, _x61) {
              return _getDiff.apply(this, arguments);
            }

            return getDiff;
          }()
        }, {
          key: "delete",
          value: function () {
            var _delete2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee37(type, name) {
              var dryRun,
                  resources,
                  commitDeletions,
                  objectDB,
                  opts,
                  _yield$objectDB$query,
                  rows,
                  _iterator12,
                  _step12,
                  commit,
                  versionDB,
                  _yield$versionDB$get,
                  _id,
                  _rev,
                  deletedHist,
                  _args38 = arguments;

              return regeneratorRuntime.wrap(function _callee37$(_context38) {
                while (1) {
                  switch (_context38.prev = _context38.next) {
                    case 0:
                      dryRun = _args38.length > 2 && _args38[2] !== undefined ? _args38[2] : true;
                      resources = [];
                      commitDeletions = [];
                      _context38.t0 = this.__commitDB;

                      if (_context38.t0) {
                        _context38.next = 8;
                        break;
                      }

                      _context38.next = 7;
                      return this._commitDB();

                    case 7:
                      _context38.t0 = _context38.sent;

                    case 8:
                      objectDB = _context38.t0;
                      opts = {
                        include_docs: true,
                        startkey: "".concat(type, "\0").concat(name, "\0"),
                        endkey: "".concat(type, "\0").concat(name, "\uFFFF")
                      };
                      _context38.next = 12;
                      return objectDB.query("nameAndTimestamp_index", opts);

                    case 12:
                      _yield$objectDB$query = _context38.sent;
                      rows = _yield$objectDB$query.rows;
                      _iterator12 = _createForOfIteratorHelper(rows);

                      try {
                        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                          commit = _step12.value.doc;

                          if (!commit.deleted && !commit._deleted && commit.content) {
                            resources.push(this.snapshotResourceFor(commit));
                          }

                          commitDeletions.push(Object.assign({}, commit, {
                            _deleted: true
                          }));
                        }
                      } catch (err) {
                        _iterator12.e(err);
                      } finally {
                        _iterator12.f();
                      }

                      _context38.t1 = this.__versionDB;

                      if (_context38.t1) {
                        _context38.next = 21;
                        break;
                      }

                      _context38.next = 20;
                      return this._versionDB();

                    case 20:
                      _context38.t1 = _context38.sent;

                    case 21:
                      versionDB = _context38.t1;
                      _context38.next = 24;
                      return versionDB.get(type + "/" + name);

                    case 24:
                      _yield$versionDB$get = _context38.sent;
                      _id = _yield$versionDB$get._id;
                      _rev = _yield$versionDB$get._rev;
                      deletedHist = {
                        _id: _id,
                        _rev: _rev,
                        _deleted: true
                      };

                      if (dryRun) {
                        _context38.next = 34;
                        break;
                      }

                      _context38.next = 31;
                      return objectDB.setDocuments(commitDeletions);

                    case 31:
                      _context38.next = 33;
                      return versionDB.setDocuments([deletedHist]);

                    case 33:
                      Promise.all(resources.map(function (ea) {
                        return ea.remove();
                      }));

                    case 34:
                      return _context38.abrupt("return", {
                        commits: commitDeletions,
                        history: deletedHist,
                        resources: resources
                      });

                    case 35:
                    case "end":
                      return _context38.stop();
                  }
                }
              }, _callee37, this);
            }));

            function _delete(_x65, _x66) {
              return _delete2.apply(this, arguments);
            }

            return _delete;
          }()
        }, {
          key: "deleteCommit",
          value: function () {
            var _deleteCommit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee38(commitOrId) {
              var dryRun,
                  ref,
                  commit,
                  commitDB,
                  versionDB,
                  objectDB,
                  _commit2,
                  name,
                  type,
                  resources,
                  commitDeletions,
                  hist,
                  _ref7,
                  _ref8,
                  ancestor,
                  _args39 = arguments;

              return regeneratorRuntime.wrap(function _callee38$(_context39) {
                while (1) {
                  switch (_context39.prev = _context39.next) {
                    case 0:
                      dryRun = _args39.length > 1 && _args39[1] !== undefined ? _args39[1] : true;
                      ref = _args39.length > 2 && _args39[2] !== undefined ? _args39[2] : "HEAD";

                      if (!(commitOrId && typeof commitOrId !== "string")) {
                        _context39.next = 6;
                        break;
                      }

                      commit = commitOrId;
                      _context39.next = 16;
                      break;

                    case 6:
                      if (!commitOrId) {
                        _context39.next = 16;
                        break;
                      }

                      _context39.t0 = this.__commitDB;

                      if (_context39.t0) {
                        _context39.next = 12;
                        break;
                      }

                      _context39.next = 11;
                      return this._commitDB();

                    case 11:
                      _context39.t0 = _context39.sent;

                    case 12:
                      commitDB = _context39.t0;
                      _context39.next = 15;
                      return commitDB.get(commitOrId);

                    case 15:
                      commit = _context39.sent;

                    case 16:
                      if (commit) {
                        _context39.next = 18;
                        break;
                      }

                      throw new Error("commit needed!");

                    case 18:
                      _context39.t1 = this.__versionDB;

                      if (_context39.t1) {
                        _context39.next = 23;
                        break;
                      }

                      _context39.next = 22;
                      return this._versionDB();

                    case 22:
                      _context39.t1 = _context39.sent;

                    case 23:
                      versionDB = _context39.t1;
                      _context39.t2 = this.__commitDB;

                      if (_context39.t2) {
                        _context39.next = 29;
                        break;
                      }

                      _context39.next = 28;
                      return this._commitDB();

                    case 28:
                      _context39.t2 = _context39.sent;

                    case 29:
                      objectDB = _context39.t2;
                      _commit2 = commit, name = _commit2.name, type = _commit2.type;
                      resources = commit.deleted || commit._deleted || !commit.content ? [] : [this.snapshotResourceFor(commit)];
                      commitDeletions = [Object.assign({}, commit, {
                        _deleted: true
                      })];
                      _context39.next = 35;
                      return versionDB.get(type + "/" + name);

                    case 35:
                      hist = _context39.sent;

                      if (hist) {
                        _context39.next = 38;
                        break;
                      }

                      throw new Error("No history for ".concat(type, "/").concat(name, "@").concat(commit._id));

                    case 38:
                      if (hist.refs[ref]) {
                        _context39.next = 40;
                        break;
                      }

                      throw new Error("Cannot delete commit ".concat(type, "/").concat(name, "@").concat(commit._id, " b/c it is not where ref ").concat(ref, " is pointing!"));

                    case 40:
                      _ref7 = hist.history[commit._id] || [], _ref8 = _slicedToArray(_ref7, 1), ancestor = _ref8[0];

                      if (!(!ancestor && Object.keys(hist.history).length <= 1)) {
                        _context39.next = 45;
                        break;
                      }

                      hist._deleted = true;
                      _context39.next = 51;
                      break;

                    case 45:
                      if (ancestor) {
                        _context39.next = 49;
                        break;
                      }

                      throw new Error("Cannot delete commit ".concat(type, "/").concat(name, "@").concat(commit._id, " b/c it has no ancestor but there are still other commits!"));

                    case 49:
                      delete hist.history[commit._id];
                      hist.refs[ref] = ancestor;

                    case 51:
                      if (dryRun) {
                        _context39.next = 58;
                        break;
                      }

                      _context39.next = 54;
                      return versionDB.set(type + "/" + name, hist);

                    case 54:
                      _context39.next = 56;
                      return objectDB.setDocuments(commitDeletions);

                    case 56:
                      _context39.next = 58;
                      return Promise.all(resources.map(function (ea) {
                        return ea.remove();
                      }));

                    case 58:
                      return _context39.abrupt("return", {
                        commits: commitDeletions,
                        history: hist,
                        resources: resources
                      });

                    case 59:
                    case "end":
                      return _context39.stop();
                  }
                }
              }, _callee38, this);
            }));

            function deleteCommit(_x67) {
              return _deleteCommit.apply(this, arguments);
            }

            return deleteCommit;
          }()
        }, {
          key: "_commitdb_indexes",
          get: function get() {
            return [{
              name: "name_index",
              version: 4,
              mapFn: "function (doc) { emit(doc.type + \"\0\" + doc.name); }"
            }, {
              name: "nameAndTimestamp_index",
              version: 3,
              mapFn: "function (doc) { emit(doc.type + \"\0\" + doc.name + \"\0\" + doc.timestamp + \"\0\" + doc._id); }"
            }, {
              name: "nameWithMaxMinTimestamp_index",
              version: 3,
              mapFn: "function(doc) { emit(doc.type + \"\0\" + doc.name, doc.timestamp); }",
              reduceFn: "_stats"
            }, {
              name: "nameTypeFilter",
              version: 9,
              filterFn: "function(doc, req) {\n          if (doc._id[0] === \"_\" || !req || !req.query) return true;\n          if (req.query.onlyIds) return !!req.query.onlyIds[doc._id];\n          if (req.query.onlyTypesAndNames)\n            return !!req.query.onlyTypesAndNames[doc.type + \"/\" + doc.name];\n          return true;\n        }"
            }, {
              name: "conflict_index",
              version: 4,
              mapFn: "function(doc) { if (doc._conflicts) emit(doc._id); }"
            }];
          }
        }, {
          key: "_versiondb_indexes",
          get: function get() {
            return [{
              name: "nameTypeFilter",
              version: 3,
              filterFn: "function(doc, req) {\n          if (doc._id[0] === \"_\" || !req || !req.query) return true;\n          if (req.query.onlyIds) return !!req.query.onlyIds[doc._id];\n          if (req.query.onlyTypesAndNames) return !!req.query.onlyTypesAndNames[doc._id];\n          return true;\n        }"
            }, {
              name: "conflict_index",
              version: 4,
              mapFn: "function(doc) { if (doc._conflicts) emit(doc._id); }"
            }];
          }
        }]);

        return ObjectDB;
      }());
      __varRecorder__$2.ObjectDB = ObjectDB;

      var Synchronization = /*#__PURE__*/function () {
        function Synchronization(fromObjectDB, remoteCommitDB, remoteVersionDB, remoteLocation) {
          var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

          _classCallCheck(this, Synchronization);

          this.options = Object.assign({
            debug: false,
            live: false,
            method: "sync",
            replicationFilter: undefined
          }, options);
          this.state = "not started";
          this.method = "";
          this.fromObjectDB = fromObjectDB;
          this.remoteCommitDB = remoteCommitDB;
          this.remoteVersionDB = remoteVersionDB;
          this.remoteLocation = remoteLocation;
          this.deferred = deferred();
          this.conflicts = [];
          this.changes = [];
          this.errors = [];
        }

        _createClass(Synchronization, [{
          key: "whenPaused",
          value: function whenPaused() {
            var _this2 = this;

            return Promise.resolve().then(function () {
              return waitFor(function () {
                return _this2.isPaused || _this2.isComplete;
              });
            }).then(function () {
              return _this2;
            });
          }
        }, {
          key: "waitForIt",
          value: function waitForIt() {
            return this.deferred.promise;
          }
        }, {
          key: "start",
          value: function start() {
            if (!this.isSynchonizing) {
              this._startReplicationAndCopy()["catch"](function (err) {
                return console.error("Error starting synchronization: ", err);
              });
            }

            return this;
          }
        }, {
          key: "_startReplicationAndCopy",
          value: function () {
            var _startReplicationAndCopy2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee40() {
              var _this3 = this;

              var fromObjectDB, remoteCommitDB, remoteVersionDB, remoteLocation, _this$options, debug, _this$options$live, live, _this$options$retry, retry, method, replicationFilter, _this$options$pushDes, pushDesignDocToRemote, versionDB, commitDB, _commitdb_indexes, _versiondb_indexes, fromSnapshotLocation, versionChangeListener, commitChangeListener, commitNameTypeFilter, versionNameTypeFilter, opts, commitOpts, versionOpts, commitReplication, versionReplication, snapshotReplication, commitReplicationState, versionReplicationState, updateState, tryToResolve, snapshotPathFor;

              return regeneratorRuntime.wrap(function _callee40$(_context41) {
                while (1) {
                  switch (_context41.prev = _context41.next) {
                    case 0:
                      snapshotPathFor = function _snapshotPathFor(commit) {
                        if (!commit.content) return null;
                        var first = commit.content.slice(0, 2);
                        var rest = commit.content.slice(2);
                        return "".concat(first, "/").concat(rest, ".json");
                      };

                      tryToResolve = function _tryToResolve(sync, errors) {
                        if (!errors.length && (commitReplicationState !== "complete" || versionReplicationState !== "complete" || !snapshotReplication.isComplete())) return;
                        versionChangeListener.cancel();
                        var err;

                        if (errors.length) {
                          sync.state = "complete";
                          sync.errors = errors;
                          commitReplication.cancel();
                          versionReplication.cancel();
                          err = new Error("Synchronization error:\n  ".concat(errors.join("\n  ")));
                          err.errors = errors;
                          console.log("".concat(sync, " errored"));
                        } else {
                          console.log("".concat(sync, " completed"));
                        }

                        if (err) sync.deferred.reject(err);else sync.deferred.resolve(sync);
                      };

                      updateState = function _updateState(sync) {
                        if (versionReplicationState === "paused" && commitReplicationState === "paused" && snapshotReplication.copyCalls <= 0 && snapshotReplication.copyCallsWaiting <= 0) {
                          return sync.state = "paused";
                        }

                        if (versionReplicationState === "complete" && commitReplicationState === "complete" && snapshotReplication.isComplete()) {
                          return sync.state = "complete";
                        }

                        return sync.state = "running";
                      };

                      fromObjectDB = this.fromObjectDB, remoteCommitDB = this.remoteCommitDB, remoteVersionDB = this.remoteVersionDB, remoteLocation = this.remoteLocation, _this$options = this.options, debug = _this$options.debug, _this$options$live = _this$options.live, live = _this$options$live === void 0 ? false : _this$options$live, _this$options$retry = _this$options.retry, retry = _this$options$retry === void 0 ? false : _this$options$retry, method = _this$options.method, replicationFilter = _this$options.replicationFilter, _this$options$pushDes = _this$options.pushDesignDocToRemote, pushDesignDocToRemote = _this$options$pushDes === void 0 ? false : _this$options$pushDes;
                      _context41.t0 = fromObjectDB.__versionDB;

                      if (_context41.t0) {
                        _context41.next = 9;
                        break;
                      }

                      _context41.next = 8;
                      return fromObjectDB._versionDB();

                    case 8:
                      _context41.t0 = _context41.sent;

                    case 9:
                      versionDB = _context41.t0;
                      _context41.t1 = fromObjectDB.__commitDB;

                      if (_context41.t1) {
                        _context41.next = 15;
                        break;
                      }

                      _context41.next = 14;
                      return fromObjectDB._commitDB();

                    case 14:
                      _context41.t1 = _context41.sent;

                    case 15:
                      commitDB = _context41.t1;
                      _commitdb_indexes = fromObjectDB._commitdb_indexes, _versiondb_indexes = fromObjectDB._versiondb_indexes, fromSnapshotLocation = fromObjectDB.snapshotLocation;
                      this.method = method;
                      commitNameTypeFilter = _commitdb_indexes.find(function (ea) {
                        return ea.name === "nameTypeFilter";
                      });
                      versionNameTypeFilter = _versiondb_indexes.find(function (ea) {
                        return ea.name === "nameTypeFilter";
                      });

                      if (!pushDesignDocToRemote) {
                        _context41.next = 27;
                        break;
                      }

                      console.log("adding commitNameTypeFilter");
                      _context41.next = 24;
                      return remoteCommitDB.addDesignDoc(commitNameTypeFilter);

                    case 24:
                      console.log("adding versionNameTypeFilter");
                      _context41.next = 27;
                      return remoteVersionDB.addDesignDoc(versionNameTypeFilter);

                    case 27:
                      opts = {
                        live: live,
                        retry: retry
                      };
                      commitOpts = Object.assign({}, opts);
                      versionOpts = Object.assign({}, opts);

                      if (replicationFilter) {
                        commitOpts.filter = eval("(".concat(commitNameTypeFilter.filterFn, ")"));
                        commitOpts.query_params = replicationFilter;
                        versionOpts.filter = eval("(".concat(versionNameTypeFilter.filterFn, ")"));
                        versionOpts.query_params = replicationFilter;
                      }

                      commitReplication = commitDB[method](remoteCommitDB, commitOpts);
                      versionReplication = versionDB[method](remoteVersionDB, versionOpts);
                      snapshotReplication = {
                        copyCalls: 0,
                        copyCallsWaiting: 0,
                        nFilesToCopy: 0,
                        nFilesCopied: 0,
                        stopped: false,
                        isComplete: function isComplete() {
                          return this.stopped || this.copyCalls <= 0 && this.copyCallsWaiting <= 0;
                        }
                      };
                      commitReplicationState = "not started";
                      versionReplicationState = "not started";
                      this.versionReplication = versionReplication;
                      this.commitReplication = commitReplication;
                      this.snapshotReplication = snapshotReplication;
                      commitChangeListener = remoteCommitDB.pouchdb.changes({
                        include_docs: true,
                        live: true,
                        conflicts: true
                      });
                      versionChangeListener = remoteVersionDB.pouchdb.changes({
                        include_docs: true,
                        live: true,
                        conflicts: true
                      });
                      commitChangeListener.on("change", function (change) {
                        var id = change.id,
                            changes = change.changes,
                            conflicts = change.doc._conflicts;
                        debug && console.log("commit changes ".concat(id, ":"), changes, conflicts);
                        if (!conflicts) return;
                        console.log("commit conflict ".concat(id, ":"), changes, conflicts);

                        _this3.conflicts.push({
                          db: "commits",
                          id: id,
                          changes: changes,
                          conflicts: conflicts
                        });
                      });
                      versionChangeListener.on("change", function (change) {
                        var id = change.id,
                            changes = change.changes,
                            conflicts = change.doc._conflicts;
                        debug && console.log("version changes ".concat(id, ":"), changes, conflicts);
                        if (!conflicts) return;
                        console.log("version conflict ".concat(id, ":"), changes, conflicts);

                        _this3.conflicts.push({
                          db: "versions",
                          id: id,
                          changes: changes,
                          conflicts: conflicts
                        });
                      });
                      commitReplication.on("change", /*#__PURE__*/function () {
                        var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee39(change) {
                          var _change, direction, _change$change, commits, error, toCopy, _iterator13, _step13, commit, contentResource;

                          return regeneratorRuntime.wrap(function _callee39$(_context40) {
                            while (1) {
                              switch (_context40.prev = _context40.next) {
                                case 0:
                                  if (method === "replicateTo") change = {
                                    direction: "push",
                                    change: change
                                  };else if (method === "replicateFrom") change = {
                                    direction: "pull",
                                    change: change
                                  };
                                  _change = change, direction = _change.direction, _change$change = _change.change, commits = _change$change.docs;
                                  console.log("".concat(_this3, " ").concat(direction === "push" ? "send" : "received", " ").concat(commits.length, " commits"));
                                  _context40.prev = 3;
                                  toCopy = [];
                                  _iterator13 = _createForOfIteratorHelper(commits);
                                  _context40.prev = 6;

                                  _iterator13.s();

                                case 8:
                                  if ((_step13 = _iterator13.n()).done) {
                                    _context40.next = 17;
                                    break;
                                  }

                                  commit = _step13.value;

                                  if (!commit._id.startsWith("_")) {
                                    _context40.next = 12;
                                    break;
                                  }

                                  return _context40.abrupt("continue", 15);

                                case 12:
                                  _this3.changes.push({
                                    direction: direction,
                                    kind: "commits",
                                    id: commit._id,
                                    type: commit.type,
                                    name: commit.name
                                  });

                                  contentResource = snapshotPathFor(commit);
                                  contentResource && toCopy.push(contentResource);

                                case 15:
                                  _context40.next = 8;
                                  break;

                                case 17:
                                  _context40.next = 22;
                                  break;

                                case 19:
                                  _context40.prev = 19;
                                  _context40.t0 = _context40["catch"](6);

                                  _iterator13.e(_context40.t0);

                                case 22:
                                  _context40.prev = 22;

                                  _iterator13.f();

                                  return _context40.finish(22);

                                case 25:
                                  snapshotReplication.nFilesToCopy += toCopy.length;

                                  if (!(snapshotReplication.copyCalls > 0)) {
                                    _context40.next = 31;
                                    break;
                                  }

                                  snapshotReplication.copyCallsWaiting++;
                                  _context40.next = 30;
                                  return waitFor(function () {
                                    return snapshotReplication.copyCalls <= 0;
                                  });

                                case 30:
                                  snapshotReplication.copyCallsWaiting--;

                                case 31:
                                  snapshotReplication.copyCalls++;
                                  updateState(_this3);
                                  console.log("".concat(_this3, " copying ").concat(toCopy.length, " snapshots..."));
                                  _context40.next = 36;
                                  return parallel(toCopy.map(function (path) {
                                    return function () {
                                      var fromResource = (direction === "push" ? fromSnapshotLocation : remoteLocation).join(path);
                                      var toResource = (direction === "push" ? remoteLocation : fromSnapshotLocation).join(path);

                                      if (snapshotReplication.stopped) {
                                        console.warn("".concat(_this3, " Stopping copying resources b/c synchronization ended (").concat(snapshotReplication.copyCalls, ", ").concat(fromResource.url, " => ").concat(toResource.url, ")"));
                                        return Promise.resolve();
                                      }

                                      return toResource.exists().then(function (toExists) {
                                        if (toExists) {
                                          debug && console.log("Skip copying to ".concat(toResource.url, ", already exist"));
                                          return Promise.resolve();
                                        }

                                        return fromResource.exists().then(function (fromExists) {
                                          if (!fromExists) {
                                            console.warn("Skip copying ".concat(fromResource.url, ", does not exist"));
                                            return Promise.resolve();
                                          }

                                          debug && console.log("".concat(_this3, " Copying ").concat(fromResource.url, " => ").concat(toResource.url));
                                          return tryCopy(0).then(function (result) {
                                            snapshotReplication.nFilesCopied++;

                                            if (!snapshotReplication.stopped && snapshotReplication.nFilesCopied % 10 === 0) {
                                              console.log("".concat(_this3, " copied ").concat(snapshotReplication.nFilesCopied, " of ").concat(snapshotReplication.nFilesToCopy, " snapshots"));
                                            }

                                            return result;
                                          });
                                        });

                                        function tryCopy() {
                                          var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                                          return fromResource.copyTo(toResource)["catch"](function (err) {
                                            if (n >= 5) throw err;
                                            return tryCopy(n + 1);
                                          });
                                        }
                                      });
                                    };
                                  }), 5);

                                case 36:
                                  console.log("".concat(_this3, " sending files done"));
                                  _context40.next = 44;
                                  break;

                                case 39:
                                  _context40.prev = 39;
                                  _context40.t1 = _context40["catch"](3);
                                  console.error("error in commitReplication onChange", _context40.t1);
                                  error = _context40.t1;
                                  throw _context40.t1;

                                case 44:
                                  _context40.prev = 44;
                                  snapshotReplication.copyCalls--;
                                  updateState(_this3);
                                  tryToResolve(_this3, error ? [error] : []);
                                  return _context40.finish(44);

                                case 49:
                                case "end":
                                  return _context40.stop();
                              }
                            }
                          }, _callee39, null, [[3, 39, 44, 49], [6, 19, 22, 25]]);
                        }));

                        return function (_x68) {
                          return _ref9.apply(this, arguments);
                        };
                      }()).on("paused", function () {
                        commitReplicationState = "paused";
                        updateState(_this3);
                        debug && console.log("".concat(_this3, " commit replication paused"));
                      }).on("active", function () {
                        commitReplicationState = "active";
                        updateState(_this3);
                        debug && console.log("".concat(_this3, " commit replication active"));
                      }).on("error", function (err) {
                        commitReplicationState = "complete";
                        updateState(_this3);
                        console.error("".concat(_this3, " commit replication error"), err);
                        tryToResolve(_this3, [err]);
                      }).on("complete", function (info) {
                        commitReplicationState = "complete";
                        updateState(_this3);
                        var errors = method === "sync" ? info.push.errors.concat(info.pull.errors) : info.errors;
                        tryToResolve(_this3, errors);
                      });
                      versionReplication.on("change", function (change) {
                        if (method === "replicateTo") change = {
                          direction: "push",
                          change: change
                        };else if (method === "replicateFrom") change = {
                          direction: "pull",
                          change: change
                        };
                        var _change2 = change,
                            direction = _change2.direction,
                            _change2$change = _change2.change;
                            _change2$change.ok;
                            var docs = _change2$change.docs;
                            _change2$change.errors;
                        debug && console.log("".concat(_this3, " ").concat(direction === "push" ? "send" : "received", " ").concat(docs.length, " histories"));
                        docs.forEach(function (doc) {
                          if (doc._id.startsWith("_")) return;

                          _this3.changes.push({
                            direction: direction,
                            kind: "versions",
                            id: doc._id
                          });
                        });
                      }).on("paused", function () {
                        versionReplicationState = "paused";
                        updateState(_this3);
                        debug && console.log("".concat(_this3, " version replication paused"));
                      }).on("active", function (x) {
                        versionReplicationState = "active";
                        updateState(_this3);
                        debug && console.log("".concat(_this3, " version replication active"), x);
                      }).on("error", function (err) {
                        versionReplicationState = "complete";
                        updateState(_this3);
                        console.error("".concat(_this3, " version replication error"), err);
                        tryToResolve(_this3, [err]);
                      }).on("complete", function (info) {
                        versionReplicationState = "complete";
                        updateState(_this3);
                        var errors = method === "sync" ? info.push.errors.concat(info.pull.errors) : info.errors;
                        tryToResolve(_this3, errors);
                      });
                      this.state = "running";
                      return _context41.abrupt("return", this);

                    case 47:
                    case "end":
                      return _context41.stop();
                  }
                }
              }, _callee40, this);
            }));

            function _startReplicationAndCopy() {
              return _startReplicationAndCopy2.apply(this, arguments);
            }

            return _startReplicationAndCopy;
          }()
        }, {
          key: "safeStop",
          value: function () {
            var _safeStop = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee41() {
              return regeneratorRuntime.wrap(function _callee41$(_context42) {
                while (1) {
                  switch (_context42.prev = _context42.next) {
                    case 0:
                      if (!(this.state === "not started" || !this.isSynchonizing)) {
                        _context42.next = 2;
                        break;
                      }

                      return _context42.abrupt("return", this);

                    case 2:
                      _context42.next = 4;
                      return this.whenPaused();

                    case 4:
                      return _context42.abrupt("return", this.stop());

                    case 5:
                    case "end":
                      return _context42.stop();
                  }
                }
              }, _callee41, this);
            }));

            function safeStop() {
              return _safeStop.apply(this, arguments);
            }

            return safeStop;
          }()
        }, {
          key: "stop",
          value: function stop() {
            if (this.state === "not started" || !this.isSynchonizing) return this;
            this.commitReplication.cancel();
            this.versionReplication.cancel();
            this.snapshotReplication.stopped = true;
            return this;
          }
        }, {
          key: "toString",
          value: function toString() {
            var method = this.method,
                state = this.state,
                name = this.fromObjectDB.name;
            var dir = method === "sync" ? "<=>" : method === "replicateTo" ? "=>" : method === "replicateFrom" ? "<=" : "??";
            return "Synchronization(".concat(state, ": ").concat(name, " ").concat(dir, ")");
          }
        }, {
          key: "isSynchonizing",
          get: function get() {
            return this.isPaused || this.isRunning;
          }
        }, {
          key: "isComplete",
          get: function get() {
            return this.state === "complete";
          }
        }, {
          key: "isRunning",
          get: function get() {
            return this.state === "running";
          }
        }, {
          key: "isPaused",
          get: function get() {
            return this.state === "paused";
          }
        }, {
          key: "changesByTypeAndName",
          get: function get() {
            var changesByTypeAndName = {
              push: {},
              pull: {}
            };
            this.changes.forEach(function (ea) {
              var dir = ea.direction,
                  id = ea.id,
                  kind = ea.kind;
              if (id[0] === "_") return;
              var byTypeAndName;

              if (kind === "versions") {
                byTypeAndName = changesByTypeAndName[dir][id] || (changesByTypeAndName[dir][id] = []);
              } else if (kind === "commits") {
                var typeAndName = "".concat(ea.type, "/").concat(ea.name);
                byTypeAndName = changesByTypeAndName[dir][typeAndName] || (changesByTypeAndName[dir][typeAndName] = []);
              }

              byTypeAndName.push(ea);
            });
            return changesByTypeAndName;
          }
        }]);

        return Synchronization;
      }();

      __varRecorder__$2.Synchronization = Synchronization;
      __varRecorder__$2.ObjectDBInterface = {
        describe: function describe(method) {
          var _this4 = this;

          return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee42() {
            var src, parsed, entities, methodNameAndParametersAndDescription;
            return regeneratorRuntime.wrap(function _callee42$(_context43) {
              while (1) {
                switch (_context43.prev = _context43.next) {
                  case 0:
                    methodNameAndParametersAndDescription = function _methodNameAndParamet(methodSpecs, name) {
                      var methodSpec = methodSpecs.find(function (ea) {
                        return ea.name === name;
                      });
                      var body = methodSpec.node.value.body;
                      var stmts = body.body || [];
                      var comment = (body.comments || []).find(function (ea) {
                        return ea.end < stmts[0].start;
                      });
                      var doc = {
                        name: name,
                        parameters: [],
                        sideEffect: false,
                        returns: null,
                        description: ""
                      };

                      if (comment && comment.text.trim()) {
                        var text = changeIndent(comment.text, " ", 0);
                        var commentLines = text.split("\n");

                        var _iterator14 = _createForOfIteratorHelper(commentLines),
                            _step14;

                        try {
                          for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                            var line = _step14.value;

                            if (line.startsWith("ignore-in-doc")) {
                              doc.description = "";
                              break;
                            }

                            if (line.startsWith("side effect:")) {
                              doc.sideEffect = JSON.parse(line.split(":")[1]);
                              continue;
                            }

                            if (line.startsWith("returns:")) {
                              doc.returns = line.split(":")[1].trim();
                              continue;
                            }

                            doc.description += line + "\n";
                          }
                        } catch (err) {
                          _iterator14.e(err);
                        } finally {
                          _iterator14.f();
                        }
                      }

                      var _iterator15 = _createForOfIteratorHelper(stmts),
                          _step15;

                      try {
                        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                          var stmt = _step15.value;

                          if (Path("declarations.0.init.callee.name").get(stmt) !== "checkArgs") {
                            continue;
                          }

                          var props = Path("declarations.0.id.properties").get(stmt);

                          if (props) {
                            doc.parameters = props.map(function (ea) {
                              return ea.key.name;
                            });
                          }
                        }
                      } catch (err) {
                        _iterator15.e(err);
                      } finally {
                        _iterator15.f();
                      }

                      return doc;
                    };

                    _context43.prev = 1;

                    if (_this4._methodSpecs) {
                      _context43.next = 9;
                      break;
                    }

                    _context43.next = 5;
                    return lively.modules.module("lively.storage/objectdb.js").source();

                  case 5:
                    src = _context43.sent;
                    parsed = parse(src, {
                      withComments: true
                    });
                    entities = findDecls(parsed);
                    _this4._methodSpecs = entities.filter(function (ea) {
                      return ea.parent && ea.parent.name === "ObjectDBInterface";
                    });

                  case 9:
                    return _context43.abrupt("return", method ? methodNameAndParametersAndDescription(_this4._methodSpecs, method) : _this4._methodSpecs.map(function (ea) {
                      return methodNameAndParametersAndDescription(_this4._methodSpecs, ea.name);
                    }).filter(Boolean));

                  case 12:
                    _context43.prev = 12;
                    _context43.t0 = _context43["catch"](1);
                    return _context43.abrupt("return", "Error in describe ".concat(_context43.t0));

                  case 15:
                  case "end":
                    return _context43.stop();
                }
              }
            }, _callee42, null, [[1, 12]]);
          }))();
        },
        ensureDB: function ensureDB(args) {
          return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee43() {
            var _varRecorder__$check, dbName, snapshotLocation, db;

            return regeneratorRuntime.wrap(function _callee43$(_context44) {
              while (1) {
                switch (_context44.prev = _context44.next) {
                  case 0:
                    _varRecorder__$check = __varRecorder__$2.checkArgs(args, {
                      db: "string",
                      snapshotLocation: "string|Resource"
                    }), dbName = _varRecorder__$check.db, snapshotLocation = _varRecorder__$check.snapshotLocation;
                    _context44.next = 3;
                    return __varRecorder__$2.ObjectDB.find(dbName);

                  case 3:
                    db = _context44.sent;

                    if (!db) {
                      _context44.next = 6;
                      break;
                    }

                    return _context44.abrupt("return", false);

                  case 6:
                    __varRecorder__$2.ObjectDB.named(dbName, {
                      snapshotLocation: snapshotLocation
                    });

                    return _context44.abrupt("return", true);

                  case 8:
                  case "end":
                    return _context44.stop();
                }
              }
            }, _callee43);
          }))();
        },
        destroyDB: function destroyDB(args) {
          return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee44() {
            var _varRecorder__$check2, dbName, db;

            return regeneratorRuntime.wrap(function _callee44$(_context45) {
              while (1) {
                switch (_context45.prev = _context45.next) {
                  case 0:
                    _varRecorder__$check2 = __varRecorder__$2.checkArgs(args, {
                      db: "string"
                    }), dbName = _varRecorder__$check2.db;
                    _context45.next = 3;
                    return __varRecorder__$2.ObjectDB.find(dbName);

                  case 3:
                    db = _context45.sent;

                    if (db) {
                      _context45.next = 6;
                      break;
                    }

                    return _context45.abrupt("return", false);

                  case 6:
                    _context45.next = 8;
                    return db.destroy();

                  case 8:
                    return _context45.abrupt("return", true);

                  case 9:
                  case "end":
                    return _context45.stop();
                }
              }
            }, _callee44);
          }))();
        },
        fetchCommits: function fetchCommits(args) {
          return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee45() {
            var _varRecorder__$check3, dbName, ref, type, typesAndNames, knownCommitIds, includeDeleted, filterFn, db, versionDB, versionQueryOpts, refsByTypeAndName, keys, _iterator16, _step16, _step16$value, _type3, name, _ref10, versions, commitIds, _iterator17, _step17, version, _id, refs, commitId, commits, fn, filteredCommits;

            return regeneratorRuntime.wrap(function _callee45$(_context46) {
              while (1) {
                switch (_context46.prev = _context46.next) {
                  case 0:
                    _varRecorder__$check3 = __varRecorder__$2.checkArgs(args, {
                      db: "string",
                      ref: "string|undefined",
                      type: "string|undefined",
                      typesAndNames: "Array|undefined",
                      knownCommitIds: "object|undefined",
                      includeDeleted: "boolean|undefined",
                      filterFn: "string|undefined"
                    }), dbName = _varRecorder__$check3.db, ref = _varRecorder__$check3.ref, type = _varRecorder__$check3.type, typesAndNames = _varRecorder__$check3.typesAndNames, knownCommitIds = _varRecorder__$check3.knownCommitIds, includeDeleted = _varRecorder__$check3.includeDeleted, filterFn = _varRecorder__$check3.filterFn;
                    _context46.next = 3;
                    return __varRecorder__$2.ObjectDB.find(dbName);

                  case 3:
                    db = _context46.sent;
                    if (!ref) ref = "HEAD";

                    if (db) {
                      _context46.next = 7;
                      break;
                    }

                    throw new Error("db ".concat(dbName, " does not exist"));

                  case 7:
                    _context46.t0 = db.__commitDB;

                    if (_context46.t0) {
                      _context46.next = 12;
                      break;
                    }

                    _context46.next = 11;
                    return db._commitDB();

                  case 11:
                    _context46.t0 = _context46.sent;

                  case 12:
                    _context46.t1 = db.__versionDB;

                    if (_context46.t1) {
                      _context46.next = 18;
                      break;
                    }

                    _context46.next = 17;
                    return db._versionDB();

                  case 17:
                    _context46.t1 = _context46.sent;

                  case 18:
                    versionDB = _context46.t1;
                    versionQueryOpts = {};
                    refsByTypeAndName = {};

                    if (typesAndNames) {
                      keys = versionQueryOpts.keys = [];
                      _iterator16 = _createForOfIteratorHelper(typesAndNames);

                      try {
                        for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                          _step16$value = _step16.value, _type3 = _step16$value.type, name = _step16$value.name, _ref10 = _step16$value.ref;
                          keys.push("".concat(_type3, "/").concat(name));
                          if (_ref10) refsByTypeAndName["".concat(_type3, "/").concat(name)] = _ref10;
                        }
                      } catch (err) {
                        _iterator16.e(err);
                      } finally {
                        _iterator16.f();
                      }
                    } else if (type) {
                      versionQueryOpts.startkey = "".concat(type, "/\0\"");
                      versionQueryOpts.endkey = "".concat(type, "/\uFFFF\"");
                    }

                    _context46.next = 24;
                    return versionDB.getAll(versionQueryOpts);

                  case 24:
                    versions = _context46.sent;
                    commitIds = [];
                    _iterator17 = _createForOfIteratorHelper(versions);
                    _context46.prev = 27;

                    _iterator17.s();

                  case 29:
                    if ((_step17 = _iterator17.n()).done) {
                      _context46.next = 42;
                      break;
                    }

                    version = _step17.value;

                    if (version) {
                      _context46.next = 33;
                      break;
                    }

                    return _context46.abrupt("continue", 40);

                  case 33:
                    if (!(version.deleted || version._deleted)) {
                      _context46.next = 35;
                      break;
                    }

                    return _context46.abrupt("continue", 40);

                  case 35:
                    _id = version._id, refs = version.refs;

                    if (!_id.startsWith("_")) {
                      _context46.next = 38;
                      break;
                    }

                    return _context46.abrupt("continue", 40);

                  case 38:
                    commitId = refs[refsByTypeAndName[_id] || ref] || ref;

                    if (commitId && (!knownCommitIds || !knownCommitIds.hasOwnProperty(commitId))) {
                      commitIds.push(commitId);
                    }

                  case 40:
                    _context46.next = 29;
                    break;

                  case 42:
                    _context46.next = 47;
                    break;

                  case 44:
                    _context46.prev = 44;
                    _context46.t2 = _context46["catch"](27);

                    _iterator17.e(_context46.t2);

                  case 47:
                    _context46.prev = 47;

                    _iterator17.f();

                    return _context46.finish(47);

                  case 50:
                    _context46.next = 52;
                    return db.getCommitsWithIds(commitIds);

                  case 52:
                    commits = _context46.sent;

                    if (!includeDeleted) {
                      commits = commits.filter(function (ea) {
                        return ea && !ea.deleted;
                      });
                    }

                    if (!filterFn) {
                      _context46.next = 70;
                      break;
                    }

                    _context46.prev = 55;
                    fn = eval("(".concat(filterFn, ")"));

                    if (!(typeof fn !== "function")) {
                      _context46.next = 59;
                      break;
                    }

                    throw new Error("".concat(filterFn, " does not eval to a function!"));

                  case 59:
                    filteredCommits = commits.filter(fn);

                    if (Array.isArray(filteredCommits)) {
                      _context46.next = 64;
                      break;
                    }

                    throw new Error("".concat(filterFn, " does not return an array!"));

                  case 64:
                    commits = filteredCommits;

                  case 65:
                    _context46.next = 70;
                    break;

                  case 67:
                    _context46.prev = 67;
                    _context46.t3 = _context46["catch"](55);
                    console.error("fetchCommits filterFn failed:", _context46.t3);

                  case 70:
                    return _context46.abrupt("return", commits);

                  case 71:
                  case "end":
                    return _context46.stop();
                }
              }
            }, _callee45, null, [[27, 44, 47, 50], [55, 67]]);
          }))();
        },
        fetchVersionGraph: function fetchVersionGraph(args) {
          return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee46() {
            var _varRecorder__$check4, dbName, type, name, db, _yield$db$versionGrap, refs, history;

            return regeneratorRuntime.wrap(function _callee46$(_context47) {
              while (1) {
                switch (_context47.prev = _context47.next) {
                  case 0:
                    _varRecorder__$check4 = __varRecorder__$2.checkArgs(args, {
                      db: "string",
                      type: "string",
                      name: "string"
                    }), dbName = _varRecorder__$check4.db, type = _varRecorder__$check4.type, name = _varRecorder__$check4.name;
                    _context47.next = 3;
                    return __varRecorder__$2.ObjectDB.find(dbName);

                  case 3:
                    db = _context47.sent;

                    if (db) {
                      _context47.next = 6;
                      break;
                    }

                    throw new Error("db ".concat(dbName, " does not exist"));

                  case 6:
                    _context47.next = 8;
                    return db.versionGraph(type, name);

                  case 8:
                    _yield$db$versionGrap = _context47.sent;
                    refs = _yield$db$versionGrap.refs;
                    history = _yield$db$versionGrap.history;
                    return _context47.abrupt("return", {
                      refs: refs,
                      history: history
                    });

                  case 12:
                  case "end":
                    return _context47.stop();
                }
              }
            }, _callee46);
          }))();
        },
        exists: function exists(args) {
          return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee47() {
            var _varRecorder__$check5, dbName, type, name, ref, db, hist, commit;

            return regeneratorRuntime.wrap(function _callee47$(_context48) {
              while (1) {
                switch (_context48.prev = _context48.next) {
                  case 0:
                    _varRecorder__$check5 = __varRecorder__$2.checkArgs(args, {
                      db: "string",
                      type: "string",
                      name: "string",
                      ref: "string|undefined"
                    }), dbName = _varRecorder__$check5.db, type = _varRecorder__$check5.type, name = _varRecorder__$check5.name, ref = _varRecorder__$check5.ref;
                    _context48.next = 3;
                    return __varRecorder__$2.ObjectDB.find(dbName);

                  case 3:
                    db = _context48.sent;
                    _context48.next = 6;
                    return db.versionGraph(type, name);

                  case 6:
                    hist = _context48.sent;

                    if (hist) {
                      _context48.next = 9;
                      break;
                    }

                    return _context48.abrupt("return", {
                      exists: false,
                      commitId: undefined
                    });

                  case 9:
                    ref = ref || "HEAD";
                    commit = hist.refs[ref];

                    if (commit) {
                      _context48.next = 13;
                      break;
                    }

                    return _context48.abrupt("return", {
                      exists: false,
                      commitId: undefined
                    });

                  case 13:
                    return _context48.abrupt("return", {
                      exists: true,
                      commitId: commit
                    });

                  case 14:
                  case "end":
                    return _context48.stop();
                }
              }
            }, _callee47);
          }))();
        },
        fetchLog: function fetchLog(args) {
          return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee48() {
            var _varRecorder__$check6, dbName, type, name, ref, commit, limit, includeCommits, knownCommitIds, db, defaultRef, startCommitId, realCommit, versionGraph, refs, history, currentCommit, result, ancestors, _ancestors;

            return regeneratorRuntime.wrap(function _callee48$(_context49) {
              while (1) {
                switch (_context49.prev = _context49.next) {
                  case 0:
                    _varRecorder__$check6 = __varRecorder__$2.checkArgs(args, {
                      db: "string",
                      type: "string|undefined",
                      name: "string|undefined",
                      ref: "string|undefined",
                      commit: "string|undefined",
                      limit: "number|undefined",
                      includeCommits: "boolean|undefined",
                      knownCommitIds: "object|undefined"
                    }, function (args) {
                      return args.type && args.name || args.commit ? null : {
                        error: "Eiter .type + .name or .commit needed!"
                      };
                    }), dbName = _varRecorder__$check6.db, type = _varRecorder__$check6.type, name = _varRecorder__$check6.name, ref = _varRecorder__$check6.ref, commit = _varRecorder__$check6.commit, limit = _varRecorder__$check6.limit, includeCommits = _varRecorder__$check6.includeCommits, knownCommitIds = _varRecorder__$check6.knownCommitIds;
                    _context49.next = 3;
                    return __varRecorder__$2.ObjectDB.find(dbName);

                  case 3:
                    db = _context49.sent;
                    defaultRef = ref || "HEAD";

                    if (db) {
                      _context49.next = 7;
                      break;
                    }

                    throw new Error("db ".concat(dbName, " does not exist"));

                  case 7:
                    if (!limit) limit = Infinity;
                    if (!commit && !ref) ref = defaultRef;

                    if (!commit) {
                      _context49.next = 18;
                      break;
                    }

                    startCommitId = commit;

                    if (!(!type || !name)) {
                      _context49.next = 18;
                      break;
                    }

                    _context49.next = 14;
                    return db.getCommit(commit);

                  case 14:
                    realCommit = _context49.sent;

                    if (realCommit) {
                      _context49.next = 17;
                      break;
                    }

                    throw new Error("fetchLog: specified commit ".concat(commit, " but no commit with this id is in the database!"));

                  case 17:
                    __varRecorder__$2.__inter0__ = realCommit, type = __varRecorder__$2.__inter0__.type, name = __varRecorder__$2.__inter0__.name, __varRecorder__$2.__inter0__;

                  case 18:
                    _context49.next = 20;
                    return db.versionGraph(type, name);

                  case 20:
                    versionGraph = _context49.sent;

                    if (versionGraph) {
                      _context49.next = 23;
                      break;
                    }

                    throw new Error("Unknown object ".concat(type, "/").concat(name));

                  case 23:
                    refs = versionGraph.refs, history = versionGraph.history;
                    if (!startCommitId) startCommitId = refs[ref];
                    currentCommit = startCommitId;
                    result = [];

                  case 27:
                    if (!(result.length < limit && !result.includes(currentCommit))) {
                      _context49.next = 36;
                      break;
                    }

                    result.push(currentCommit);
                    ancestors = history[currentCommit];

                    if (!(!ancestors || !ancestors.length)) {
                      _context49.next = 32;
                      break;
                    }

                    return _context49.abrupt("break", 36);

                  case 32:
                    _ancestors = _slicedToArray(ancestors, 1);
                    currentCommit = _ancestors[0];
                    _context49.next = 27;
                    break;

                  case 36:
                    if (!includeCommits) {
                      _context49.next = 41;
                      break;
                    }

                    if (knownCommitIds) result = result.filter(function (id) {
                      return !knownCommitIds.hasOwnProperty(id);
                    });
                    _context49.next = 40;
                    return db.getCommitsWithIds(result);

                  case 40:
                    result = _context49.sent;

                  case 41:
                    return _context49.abrupt("return", result);

                  case 42:
                  case "end":
                    return _context49.stop();
                }
              }
            }, _callee48);
          }))();
        },
        fetchSnapshot: function fetchSnapshot(args) {
          return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee49() {
            var _varRecorder__$check7, dbName, type, name, ref, commitId, db, defaultRef, versionGraph, commit;

            return regeneratorRuntime.wrap(function _callee49$(_context50) {
              while (1) {
                switch (_context50.prev = _context50.next) {
                  case 0:
                    _varRecorder__$check7 = __varRecorder__$2.checkArgs(args, {
                      db: "string",
                      type: "string|undefined",
                      name: "string|undefined",
                      ref: "string|undefined",
                      commit: "string|undefined"
                    }, function (args) {
                      return args.type && args.name || args.commit ? null : {
                        error: "Eiter .type + .name or .commit needed!"
                      };
                    }), dbName = _varRecorder__$check7.db, type = _varRecorder__$check7.type, name = _varRecorder__$check7.name, ref = _varRecorder__$check7.ref, commitId = _varRecorder__$check7.commit;
                    _context50.next = 3;
                    return __varRecorder__$2.ObjectDB.find(dbName);

                  case 3:
                    db = _context50.sent;
                    defaultRef = "HEAD";
                    ref = ref || defaultRef;

                    if (db) {
                      _context50.next = 8;
                      break;
                    }

                    throw new Error("db ".concat(dbName, " does not exist"));

                  case 8:
                    if (commitId) {
                      _context50.next = 17;
                      break;
                    }

                    _context50.next = 11;
                    return db.versionGraph(type, name);

                  case 11:
                    versionGraph = _context50.sent;

                    if (versionGraph) {
                      _context50.next = 14;
                      break;
                    }

                    throw new Error("Unknown object ".concat(type, "/").concat(name));

                  case 14:
                    commitId = versionGraph.refs[ref];

                    if (commitId) {
                      _context50.next = 17;
                      break;
                    }

                    throw new Error("Cannot find commit for ref ".concat(ref, " of ").concat(type, "/").concat(name));

                  case 17:
                    _context50.next = 19;
                    return db.getCommit(commitId);

                  case 19:
                    commit = _context50.sent;

                    if (commit) {
                      _context50.next = 22;
                      break;
                    }

                    throw new Error("Cannot find commit ".concat(commitId));

                  case 22:
                    return _context50.abrupt("return", db.loadSnapshot(undefined, undefined, commit));

                  case 23:
                  case "end":
                    return _context50.stop();
                }
              }
            }, _callee49);
          }))();
        },
        revert: function revert(args) {
          return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee50() {
            var _varRecorder__$check8, dbName, type, name, ref, toCommitId, db;

            return regeneratorRuntime.wrap(function _callee50$(_context51) {
              while (1) {
                switch (_context51.prev = _context51.next) {
                  case 0:
                    _varRecorder__$check8 = __varRecorder__$2.checkArgs(args, {
                      db: "string",
                      type: "string",
                      name: "string",
                      ref: "string|undefined",
                      toCommitId: "string"
                    }), dbName = _varRecorder__$check8.db, type = _varRecorder__$check8.type, name = _varRecorder__$check8.name, ref = _varRecorder__$check8.ref, toCommitId = _varRecorder__$check8.toCommitId;
                    _context51.next = 3;
                    return __varRecorder__$2.ObjectDB.find(dbName);

                  case 3:
                    db = _context51.sent;
                    if (!ref) ref = "HEAD";
                    return _context51.abrupt("return", db.revert(type, name, ref, toCommitId));

                  case 6:
                  case "end":
                    return _context51.stop();
                }
              }
            }, _callee50);
          }))();
        },
        commit: function commit(args) {
          return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee51() {
            var _varRecorder__$check9, dbName, type, name, ref, expectedParentCommit, commitSpec, snapshot, preview, db;

            return regeneratorRuntime.wrap(function _callee51$(_context52) {
              while (1) {
                switch (_context52.prev = _context52.next) {
                  case 0:
                    _varRecorder__$check9 = __varRecorder__$2.checkArgs(args, {
                      db: "string",
                      type: "string",
                      name: "string",
                      ref: "string|undefined",
                      snapshot: "object|string|undefined",
                      preview: "string|undefined",
                      commitSpec: "object",
                      expectedParentCommit: "string|undefined"
                    }), dbName = _varRecorder__$check9.db, type = _varRecorder__$check9.type, name = _varRecorder__$check9.name, ref = _varRecorder__$check9.ref, expectedParentCommit = _varRecorder__$check9.expectedParentCommit, commitSpec = _varRecorder__$check9.commitSpec, snapshot = _varRecorder__$check9.snapshot, preview = _varRecorder__$check9.preview;
                    _context52.next = 3;
                    return __varRecorder__$2.ObjectDB.find(dbName);

                  case 3:
                    db = _context52.sent;
                    if (!ref) ref = "HEAD";
                    return _context52.abrupt("return", db.commit(type, name, snapshot, commitSpec, preview, ref, expectedParentCommit));

                  case 6:
                  case "end":
                    return _context52.stop();
                }
              }
            }, _callee51);
          }))();
        },
        exportToSpecs: function exportToSpecs(args) {
          return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee52() {
            var _varRecorder__$check10, dbName, nameAndTypes, db;

            return regeneratorRuntime.wrap(function _callee52$(_context53) {
              while (1) {
                switch (_context53.prev = _context53.next) {
                  case 0:
                    _varRecorder__$check10 = __varRecorder__$2.checkArgs(args, {
                      db: "string",
                      nameAndTypes: "Array|undefined",
                      includeDeleted: "boolean|undefined"
                    }), dbName = _varRecorder__$check10.db, nameAndTypes = _varRecorder__$check10.nameAndTypes;
                    _context53.next = 3;
                    return __varRecorder__$2.ObjectDB.find(dbName);

                  case 3:
                    db = _context53.sent;

                    if (db) {
                      _context53.next = 6;
                      break;
                    }

                    throw new Error("db ".concat(dbName, " does not exist"));

                  case 6:
                    return _context53.abrupt("return", db.exportToSpecs(nameAndTypes));

                  case 7:
                  case "end":
                    return _context53.stop();
                }
              }
            }, _callee52);
          }))();
        },
        exportToDir: function exportToDir(args) {
          return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee53() {
            var _varRecorder__$check11, dbName, url, nameAndTypes, copyResources, includeDeleted, db, exportDir;

            return regeneratorRuntime.wrap(function _callee53$(_context54) {
              while (1) {
                switch (_context54.prev = _context54.next) {
                  case 0:
                    _varRecorder__$check11 = __varRecorder__$2.checkArgs(args, {
                      db: "string",
                      url: "string",
                      nameAndTypes: "Array|undefined",
                      copyResources: "boolean|undefined",
                      includeDeleted: "boolean|undefined"
                    }), dbName = _varRecorder__$check11.db, url = _varRecorder__$check11.url, nameAndTypes = _varRecorder__$check11.nameAndTypes, copyResources = _varRecorder__$check11.copyResources, includeDeleted = _varRecorder__$check11.includeDeleted;
                    _context54.next = 3;
                    return __varRecorder__$2.ObjectDB.find(dbName);

                  case 3:
                    db = _context54.sent;

                    if (db) {
                      _context54.next = 6;
                      break;
                    }

                    throw new Error("db ".concat(dbName, " does not exist"));

                  case 6:
                    try {
                      exportDir = resource(url);
                    } catch (err) {
                      exportDir = resource(System.baseURL).join(url);
                    }

                    return _context54.abrupt("return", db.exportToDir(exportDir, nameAndTypes, copyResources, includeDeleted));

                  case 8:
                  case "end":
                    return _context54.stop();
                }
              }
            }, _callee53);
          }))();
        },
        importFromDir: function importFromDir(args) {
          return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee54() {
            var _varRecorder__$check12, dbName, url, overwrite, copyResources, db, importDir;

            return regeneratorRuntime.wrap(function _callee54$(_context55) {
              while (1) {
                switch (_context55.prev = _context55.next) {
                  case 0:
                    _varRecorder__$check12 = __varRecorder__$2.checkArgs(args, {
                      db: "string",
                      url: "string",
                      overwrite: "boolean|undefined",
                      copyResources: "boolean|undefined"
                    }), dbName = _varRecorder__$check12.db, url = _varRecorder__$check12.url, overwrite = _varRecorder__$check12.overwrite, copyResources = _varRecorder__$check12.copyResources;
                    _context55.next = 3;
                    return __varRecorder__$2.ObjectDB.find(dbName);

                  case 3:
                    db = _context55.sent;

                    if (db) {
                      _context55.next = 6;
                      break;
                    }

                    throw new Error("db ".concat(dbName, " does not exist"));

                  case 6:
                    try {
                      importDir = resource(url);
                    } catch (err) {
                      importDir = resource(System.baseURL).join(url);
                    }

                    return _context55.abrupt("return", db.importFromDir(importDir, overwrite, copyResources));

                  case 8:
                  case "end":
                    return _context55.stop();
                }
              }
            }, _callee54);
          }))();
        },
        importFromSpecs: function importFromSpecs(args) {
          return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee55() {
            var _varRecorder__$check13, dbName, specs, overwrite, copyResources, db;

            return regeneratorRuntime.wrap(function _callee55$(_context56) {
              while (1) {
                switch (_context56.prev = _context56.next) {
                  case 0:
                    _varRecorder__$check13 = __varRecorder__$2.checkArgs(args, {
                      db: "string",
                      specs: "object",
                      overwrite: "boolean|undefined",
                      copyResources: "boolean|undefined"
                    }), dbName = _varRecorder__$check13.db, specs = _varRecorder__$check13.specs, overwrite = _varRecorder__$check13.overwrite, copyResources = _varRecorder__$check13.copyResources;
                    _context56.next = 3;
                    return __varRecorder__$2.ObjectDB.find(dbName);

                  case 3:
                    db = _context56.sent;

                    if (db) {
                      _context56.next = 6;
                      break;
                    }

                    throw new Error("db ".concat(dbName, " does not exist"));

                  case 6:
                    return _context56.abrupt("return", db.importFromSpecs(specs, overwrite, copyResources));

                  case 7:
                  case "end":
                    return _context56.stop();
                }
              }
            }, _callee55);
          }))();
        },
        importFromResource: function importFromResource(args) {
          return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee56() {
            var _varRecorder__$check14, dbName, type, name, url, commitSpec, purgeHistory, db, res;

            return regeneratorRuntime.wrap(function _callee56$(_context57) {
              while (1) {
                switch (_context57.prev = _context57.next) {
                  case 0:
                    _varRecorder__$check14 = __varRecorder__$2.checkArgs(args, {
                      db: "string",
                      type: "string",
                      name: "string",
                      url: "string",
                      commitSpec: "object",
                      purgeHistory: "boolean|undefined"
                    }), dbName = _varRecorder__$check14.db, type = _varRecorder__$check14.type, name = _varRecorder__$check14.name, url = _varRecorder__$check14.url, commitSpec = _varRecorder__$check14.commitSpec, purgeHistory = _varRecorder__$check14.purgeHistory;
                    _context57.next = 3;
                    return __varRecorder__$2.ObjectDB.find(dbName);

                  case 3:
                    db = _context57.sent;

                    if (db) {
                      _context57.next = 6;
                      break;
                    }

                    throw new Error("db ".concat(dbName, " does not exist"));

                  case 6:
                    try {
                      res = resource(url);
                    } catch (err) {
                      res = resource(System.baseURL).join(url);
                    }

                    return _context57.abrupt("return", db.importFromResource(type, name, res, commitSpec, purgeHistory));

                  case 8:
                  case "end":
                    return _context57.stop();
                }
              }
            }, _callee56);
          }))();
        },
        "delete": function _delete(args) {
          return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee57() {
            var _varRecorder__$check15, dbName, type, name, dryRun, db;

            return regeneratorRuntime.wrap(function _callee57$(_context58) {
              while (1) {
                switch (_context58.prev = _context58.next) {
                  case 0:
                    _varRecorder__$check15 = __varRecorder__$2.checkArgs(args, {
                      db: "string",
                      type: "string",
                      name: "string",
                      dryRun: "boolean|undefined"
                    }), dbName = _varRecorder__$check15.db, type = _varRecorder__$check15.type, name = _varRecorder__$check15.name, dryRun = _varRecorder__$check15.dryRun;
                    _context58.next = 3;
                    return __varRecorder__$2.ObjectDB.find(dbName);

                  case 3:
                    db = _context58.sent;
                    return _context58.abrupt("return", db["delete"](type, name, typeof dryRun === "undefined" || dryRun));

                  case 5:
                  case "end":
                    return _context58.stop();
                }
              }
            }, _callee57);
          }))();
        },
        deleteCommit: function deleteCommit(args) {
          return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee58() {
            var _varRecorder__$check16, dbName, commit, dryRun, db;

            return regeneratorRuntime.wrap(function _callee58$(_context59) {
              while (1) {
                switch (_context59.prev = _context59.next) {
                  case 0:
                    _varRecorder__$check16 = __varRecorder__$2.checkArgs(args, {
                      db: "string",
                      commit: "string",
                      dryRun: "boolean|undefined"
                    }), dbName = _varRecorder__$check16.db, commit = _varRecorder__$check16.commit, dryRun = _varRecorder__$check16.dryRun;
                    _context59.next = 3;
                    return __varRecorder__$2.ObjectDB.find(dbName);

                  case 3:
                    db = _context59.sent;
                    return _context59.abrupt("return", db.deleteCommit(commit, typeof dryRun === "undefined" || dryRun));

                  case 5:
                  case "end":
                    return _context59.stop();
                }
              }
            }, _callee58);
          }))();
        },
        fetchConflicts: function fetchConflicts(args) {
          return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee59() {
            var _varRecorder__$check17, dbName, includeDocs, only, db;

            return regeneratorRuntime.wrap(function _callee59$(_context60) {
              while (1) {
                switch (_context60.prev = _context60.next) {
                  case 0:
                    _varRecorder__$check17 = __varRecorder__$2.checkArgs(args, {
                      db: "string",
                      includeDocs: "boolean|undefined",
                      only: "object|undefined"
                    }), dbName = _varRecorder__$check17.db, includeDocs = _varRecorder__$check17.includeDocs, only = _varRecorder__$check17.only;
                    _context60.next = 3;
                    return __varRecorder__$2.ObjectDB.find(dbName);

                  case 3:
                    db = _context60.sent;
                    return _context60.abrupt("return", db.getConflicts(includeDocs, only));

                  case 5:
                  case "end":
                    return _context60.stop();
                }
              }
            }, _callee59);
          }))();
        },
        resolveConflict: function resolveConflict(args) {
          return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee60() {
            var _varRecorder__$check18, dbName, resolved, del, kind, id, db;

            return regeneratorRuntime.wrap(function _callee60$(_context61) {
              while (1) {
                switch (_context61.prev = _context61.next) {
                  case 0:
                    _varRecorder__$check18 = __varRecorder__$2.checkArgs(args, {
                      db: "string",
                      id: "string",
                      kind: "string",
                      "delete": "Array",
                      resolved: "object"
                    }), dbName = _varRecorder__$check18.db, resolved = _varRecorder__$check18.resolved, del = _varRecorder__$check18["delete"], kind = _varRecorder__$check18.kind, id = _varRecorder__$check18.id;
                    _context61.next = 3;
                    return __varRecorder__$2.ObjectDB.find(dbName);

                  case 3:
                    db = _context61.sent;
                    return _context61.abrupt("return", db.resolveConflict({
                      resolved: resolved,
                      "delete": del,
                      kind: kind,
                      id: id
                    }));

                  case 5:
                  case "end":
                    return _context61.stop();
                }
              }
            }, _callee60);
          }))();
        },
        fetchDiff: function fetchDiff(args) {
          return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee61() {
            var _varRecorder__$check19, dbName, otherDB, db;

            return regeneratorRuntime.wrap(function _callee61$(_context62) {
              while (1) {
                switch (_context62.prev = _context62.next) {
                  case 0:
                    _varRecorder__$check19 = __varRecorder__$2.checkArgs(args, {
                      db: "string",
                      otherDB: "string"
                    }), dbName = _varRecorder__$check19.db, otherDB = _varRecorder__$check19.otherDB;
                    _context62.next = 3;
                    return __varRecorder__$2.ObjectDB.find(dbName);

                  case 3:
                    db = _context62.sent;
                    return _context62.abrupt("return", db.getDiff(otherDB));

                  case 5:
                  case "end":
                    return _context62.stop();
                }
              }
            }, _callee61);
          }))();
        },
        synchronize: function synchronize(args) {
          return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee62() {
            var _varRecorder__$check20, dbName, otherDB, otherDBSnapshotLocation, onlyTypesAndNames, method, db1, db2, remoteCommitDB, remoteVersionDB, toSnapshotLocation, opts, rep;

            return regeneratorRuntime.wrap(function _callee62$(_context63) {
              while (1) {
                switch (_context63.prev = _context63.next) {
                  case 0:
                    _varRecorder__$check20 = __varRecorder__$2.checkArgs(args, {
                      db: "string",
                      otherDB: "string",
                      otherDBSnapshotLocation: "string|undefined",
                      onlyTypesAndNames: "object|undefined",
                      method: "string|undefined"
                    }), dbName = _varRecorder__$check20.db, otherDB = _varRecorder__$check20.otherDB, otherDBSnapshotLocation = _varRecorder__$check20.otherDBSnapshotLocation, onlyTypesAndNames = _varRecorder__$check20.onlyTypesAndNames, method = _varRecorder__$check20.method;
                    _context63.next = 3;
                    return __varRecorder__$2.ObjectDB.find(dbName);

                  case 3:

                    if (!otherDBSnapshotLocation) {
                      otherDBSnapshotLocation = otherDB.replace(/\/$/, "") + "/" + "snapshots";
                    }

                    if (!method) method = "replicateTo";
                    _context63.next = 8;
                    return __varRecorder__$2.ObjectDB.find(dbName);

                  case 8:
                    db1 = _context63.sent;
                    _context63.next = 11;
                    return __varRecorder__$2.ObjectDB.named(otherDB, {
                      snapshotLocation: otherDBSnapshotLocation
                    });

                  case 11:
                    db2 = _context63.sent;
                    _context63.next = 14;
                    return db2._commitDB();

                  case 14:
                    remoteCommitDB = _context63.sent;
                    _context63.next = 17;
                    return db2._versionDB();

                  case 17:
                    remoteVersionDB = _context63.sent;
                    toSnapshotLocation = db2.snapshotLocation;
                    opts = {
                      replicationFilter: onlyTypesAndNames ? {
                        onlyTypesAndNames: onlyTypesAndNames
                      } : undefined,
                      retry: true,
                      live: true
                    };
                    rep = db1[method](remoteCommitDB, remoteVersionDB, toSnapshotLocation, opts);
                    _context63.next = 23;
                    return rep.whenPaused();

                  case 23:
                    _context63.next = 25;
                    return rep.safeStop();

                  case 25:
                    _context63.next = 27;
                    return rep.waitForIt();

                  case 27:
                    return _context63.abrupt("return", select(rep, ["state", "method", "conflicts", "errors", "changesByTypeAndName"]));

                  case 28:
                  case "end":
                    return _context63.stop();
                }
              }
            }, _callee62);
          }))();
        }
      };
      var ObjectDBInterface = exports('ObjectDBInterface', __varRecorder__$2.ObjectDBInterface);
      __varRecorder__$2.ObjectDBInterface = ObjectDBInterface;
      var ObjectDBHTTPInterface = exports('ObjectDBHTTPInterface', /*#__PURE__*/function () {
        function ObjectDBHTTPInterface() {
          var serverURL = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.location.origin + "/objectdb/";

          _classCallCheck(this, ObjectDBHTTPInterface);

          this.serverURL = serverURL;
        }

        _createClass(ObjectDBHTTPInterface, [{
          key: "_processResponse",
          value: function () {
            var _processResponse2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee63(res) {
              var contentType, answer, json;
              return regeneratorRuntime.wrap(function _callee63$(_context64) {
                while (1) {
                  switch (_context64.prev = _context64.next) {
                    case 0:
                      contentType = res.headers.get("content-type");
                      _context64.next = 3;
                      return res.text();

                    case 3:
                      answer = _context64.sent;

                      if (contentType === "application/json") {
                        try {
                          json = JSON.parse(answer);
                        } catch (err) {}
                      }

                      if (!(!res.ok || json && json.error)) {
                        _context64.next = 7;
                        break;
                      }

                      throw new Error(json && json.error || answer || res.statusText);

                    case 7:
                      return _context64.abrupt("return", json || answer);

                    case 8:
                    case "end":
                      return _context64.stop();
                  }
                }
              }, _callee63);
            }));

            function _processResponse(_x69) {
              return _processResponse2.apply(this, arguments);
            }

            return _processResponse;
          }()
        }, {
          key: "_GET",
          value: function () {
            var _GET2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee64(action) {
              var opts,
                  query,
                  url,
                  _args65 = arguments;
              return regeneratorRuntime.wrap(function _callee64$(_context65) {
                while (1) {
                  switch (_context65.prev = _context65.next) {
                    case 0:
                      opts = _args65.length > 1 && _args65[1] !== undefined ? _args65[1] : {};
                      query = Object.keys(opts).map(function (key) {
                        var val = opts[key];
                        if (_typeof(val) === "object") val = JSON.stringify(val);
                        return "".concat(key, "=").concat(encodeURIComponent(val));
                      }).join("&");
                      url = this.serverURL + action + "?" + query;
                      _context65.t0 = this;
                      _context65.next = 6;
                      return fetch(url);

                    case 6:
                      _context65.t1 = _context65.sent;
                      return _context65.abrupt("return", _context65.t0._processResponse.call(_context65.t0, _context65.t1));

                    case 8:
                    case "end":
                      return _context65.stop();
                  }
                }
              }, _callee64, this);
            }));

            function _GET(_x70) {
              return _GET2.apply(this, arguments);
            }

            return _GET;
          }()
        }, {
          key: "_POST",
          value: function () {
            var _POST2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee65(action) {
              var opts,
                  url,
                  _args66 = arguments;
              return regeneratorRuntime.wrap(function _callee65$(_context66) {
                while (1) {
                  switch (_context66.prev = _context66.next) {
                    case 0:
                      opts = _args66.length > 1 && _args66[1] !== undefined ? _args66[1] : {};
                      url = this.serverURL + action;
                      _context66.t0 = this;
                      _context66.next = 5;
                      return fetch(url, {
                        method: "POST",
                        body: JSON.stringify(opts),
                        headers: {
                          "content-type": "application/json"
                        }
                      });

                    case 5:
                      _context66.t1 = _context66.sent;
                      return _context66.abrupt("return", _context66.t0._processResponse.call(_context66.t0, _context66.t1));

                    case 7:
                    case "end":
                      return _context66.stop();
                  }
                }
              }, _callee65, this);
            }));

            function _POST(_x71) {
              return _POST2.apply(this, arguments);
            }

            return _POST;
          }()
        }, {
          key: "describe",
          value: function () {
            var _describe = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee66(args) {
              return regeneratorRuntime.wrap(function _callee66$(_context67) {
                while (1) {
                  switch (_context67.prev = _context67.next) {
                    case 0:
                      return _context67.abrupt("return", this._GET("describe", args));

                    case 1:
                    case "end":
                      return _context67.stop();
                  }
                }
              }, _callee66, this);
            }));

            function describe(_x72) {
              return _describe.apply(this, arguments);
            }

            return describe;
          }()
        }, {
          key: "ensureDB",
          value: function () {
            var _ensureDB = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee67(args) {
              return regeneratorRuntime.wrap(function _callee67$(_context68) {
                while (1) {
                  switch (_context68.prev = _context68.next) {
                    case 0:
                      return _context68.abrupt("return", this._POST("ensureDB", args));

                    case 1:
                    case "end":
                      return _context68.stop();
                  }
                }
              }, _callee67, this);
            }));

            function ensureDB(_x73) {
              return _ensureDB.apply(this, arguments);
            }

            return ensureDB;
          }()
        }, {
          key: "destroyDB",
          value: function () {
            var _destroyDB = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee68(args) {
              return regeneratorRuntime.wrap(function _callee68$(_context69) {
                while (1) {
                  switch (_context69.prev = _context69.next) {
                    case 0:
                      return _context69.abrupt("return", this._POST("destroyDB", args));

                    case 1:
                    case "end":
                      return _context69.stop();
                  }
                }
              }, _callee68, this);
            }));

            function destroyDB(_x74) {
              return _destroyDB.apply(this, arguments);
            }

            return destroyDB;
          }()
        }, {
          key: "fetchCommits",
          value: function () {
            var _fetchCommits = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee69(args) {
              return regeneratorRuntime.wrap(function _callee69$(_context70) {
                while (1) {
                  switch (_context70.prev = _context70.next) {
                    case 0:
                      return _context70.abrupt("return", this._GET("fetchCommits", args));

                    case 1:
                    case "end":
                      return _context70.stop();
                  }
                }
              }, _callee69, this);
            }));

            function fetchCommits(_x75) {
              return _fetchCommits.apply(this, arguments);
            }

            return fetchCommits;
          }()
        }, {
          key: "fetchVersionGraph",
          value: function () {
            var _fetchVersionGraph = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee70(args) {
              return regeneratorRuntime.wrap(function _callee70$(_context71) {
                while (1) {
                  switch (_context71.prev = _context71.next) {
                    case 0:
                      return _context71.abrupt("return", this._GET("fetchVersionGraph", args));

                    case 1:
                    case "end":
                      return _context71.stop();
                  }
                }
              }, _callee70, this);
            }));

            function fetchVersionGraph(_x76) {
              return _fetchVersionGraph.apply(this, arguments);
            }

            return fetchVersionGraph;
          }()
        }, {
          key: "exists",
          value: function () {
            var _exists = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee71(args) {
              return regeneratorRuntime.wrap(function _callee71$(_context72) {
                while (1) {
                  switch (_context72.prev = _context72.next) {
                    case 0:
                      return _context72.abrupt("return", this._GET("exists", args));

                    case 1:
                    case "end":
                      return _context72.stop();
                  }
                }
              }, _callee71, this);
            }));

            function exists(_x77) {
              return _exists.apply(this, arguments);
            }

            return exists;
          }()
        }, {
          key: "fetchLog",
          value: function () {
            var _fetchLog = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee72(args) {
              return regeneratorRuntime.wrap(function _callee72$(_context73) {
                while (1) {
                  switch (_context73.prev = _context73.next) {
                    case 0:
                      return _context73.abrupt("return", this._GET("fetchLog", args));

                    case 1:
                    case "end":
                      return _context73.stop();
                  }
                }
              }, _callee72, this);
            }));

            function fetchLog(_x78) {
              return _fetchLog.apply(this, arguments);
            }

            return fetchLog;
          }()
        }, {
          key: "fetchSnapshot",
          value: function () {
            var _fetchSnapshot = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee73(args) {
              return regeneratorRuntime.wrap(function _callee73$(_context74) {
                while (1) {
                  switch (_context74.prev = _context74.next) {
                    case 0:
                      return _context74.abrupt("return", this._GET("fetchSnapshot", args));

                    case 1:
                    case "end":
                      return _context74.stop();
                  }
                }
              }, _callee73, this);
            }));

            function fetchSnapshot(_x79) {
              return _fetchSnapshot.apply(this, arguments);
            }

            return fetchSnapshot;
          }()
        }, {
          key: "revert",
          value: function () {
            var _revert2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee74(args) {
              return regeneratorRuntime.wrap(function _callee74$(_context75) {
                while (1) {
                  switch (_context75.prev = _context75.next) {
                    case 0:
                      return _context75.abrupt("return", this._POST("revert", args));

                    case 1:
                    case "end":
                      return _context75.stop();
                  }
                }
              }, _callee74, this);
            }));

            function revert(_x80) {
              return _revert2.apply(this, arguments);
            }

            return revert;
          }()
        }, {
          key: "commit",
          value: function () {
            var _commit3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee75(args) {
              return regeneratorRuntime.wrap(function _callee75$(_context76) {
                while (1) {
                  switch (_context76.prev = _context76.next) {
                    case 0:
                      return _context76.abrupt("return", this._POST("commit", args));

                    case 1:
                    case "end":
                      return _context76.stop();
                  }
                }
              }, _callee75, this);
            }));

            function commit(_x81) {
              return _commit3.apply(this, arguments);
            }

            return commit;
          }()
        }, {
          key: "exportToSpecs",
          value: function () {
            var _exportToSpecs2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee76(args) {
              return regeneratorRuntime.wrap(function _callee76$(_context77) {
                while (1) {
                  switch (_context77.prev = _context77.next) {
                    case 0:
                      return _context77.abrupt("return", this._GET("exportToSpecs", args));

                    case 1:
                    case "end":
                      return _context77.stop();
                  }
                }
              }, _callee76, this);
            }));

            function exportToSpecs(_x82) {
              return _exportToSpecs2.apply(this, arguments);
            }

            return exportToSpecs;
          }()
        }, {
          key: "exportToDir",
          value: function () {
            var _exportToDir2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee77(args) {
              return regeneratorRuntime.wrap(function _callee77$(_context78) {
                while (1) {
                  switch (_context78.prev = _context78.next) {
                    case 0:
                      return _context78.abrupt("return", this._POST("exportToDir", args));

                    case 1:
                    case "end":
                      return _context78.stop();
                  }
                }
              }, _callee77, this);
            }));

            function exportToDir(_x83) {
              return _exportToDir2.apply(this, arguments);
            }

            return exportToDir;
          }()
        }, {
          key: "importFromDir",
          value: function () {
            var _importFromDir2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee78(args) {
              return regeneratorRuntime.wrap(function _callee78$(_context79) {
                while (1) {
                  switch (_context79.prev = _context79.next) {
                    case 0:
                      return _context79.abrupt("return", this._POST("importFromDir", args));

                    case 1:
                    case "end":
                      return _context79.stop();
                  }
                }
              }, _callee78, this);
            }));

            function importFromDir(_x84) {
              return _importFromDir2.apply(this, arguments);
            }

            return importFromDir;
          }()
        }, {
          key: "importFromSpecs",
          value: function () {
            var _importFromSpecs2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee79(args) {
              return regeneratorRuntime.wrap(function _callee79$(_context80) {
                while (1) {
                  switch (_context80.prev = _context80.next) {
                    case 0:
                      return _context80.abrupt("return", this._POST("importFromSpecs", args));

                    case 1:
                    case "end":
                      return _context80.stop();
                  }
                }
              }, _callee79, this);
            }));

            function importFromSpecs(_x85) {
              return _importFromSpecs2.apply(this, arguments);
            }

            return importFromSpecs;
          }()
        }, {
          key: "importFromResource",
          value: function () {
            var _importFromResource2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee80(args) {
              return regeneratorRuntime.wrap(function _callee80$(_context81) {
                while (1) {
                  switch (_context81.prev = _context81.next) {
                    case 0:
                      return _context81.abrupt("return", this._POST("importFromResource", args));

                    case 1:
                    case "end":
                      return _context81.stop();
                  }
                }
              }, _callee80, this);
            }));

            function importFromResource(_x86) {
              return _importFromResource2.apply(this, arguments);
            }

            return importFromResource;
          }()
        }, {
          key: "delete",
          value: function () {
            var _delete3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee81(args) {
              return regeneratorRuntime.wrap(function _callee81$(_context82) {
                while (1) {
                  switch (_context82.prev = _context82.next) {
                    case 0:
                      return _context82.abrupt("return", this._POST("delete", args));

                    case 1:
                    case "end":
                      return _context82.stop();
                  }
                }
              }, _callee81, this);
            }));

            function _delete(_x87) {
              return _delete3.apply(this, arguments);
            }

            return _delete;
          }()
        }, {
          key: "deleteCommit",
          value: function () {
            var _deleteCommit2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee82(args) {
              return regeneratorRuntime.wrap(function _callee82$(_context83) {
                while (1) {
                  switch (_context83.prev = _context83.next) {
                    case 0:
                      return _context83.abrupt("return", this._POST("deleteCommit", args));

                    case 1:
                    case "end":
                      return _context83.stop();
                  }
                }
              }, _callee82, this);
            }));

            function deleteCommit(_x88) {
              return _deleteCommit2.apply(this, arguments);
            }

            return deleteCommit;
          }()
        }, {
          key: "fetchConflicts",
          value: function () {
            var _fetchConflicts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee83(args) {
              return regeneratorRuntime.wrap(function _callee83$(_context84) {
                while (1) {
                  switch (_context84.prev = _context84.next) {
                    case 0:
                      return _context84.abrupt("return", this._GET("fetchConflicts", args));

                    case 1:
                    case "end":
                      return _context84.stop();
                  }
                }
              }, _callee83, this);
            }));

            function fetchConflicts(_x89) {
              return _fetchConflicts.apply(this, arguments);
            }

            return fetchConflicts;
          }()
        }, {
          key: "resolveConflict",
          value: function () {
            var _resolveConflict2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee84(args) {
              return regeneratorRuntime.wrap(function _callee84$(_context85) {
                while (1) {
                  switch (_context85.prev = _context85.next) {
                    case 0:
                      return _context85.abrupt("return", this._POST("resolveConflict", args));

                    case 1:
                    case "end":
                      return _context85.stop();
                  }
                }
              }, _callee84, this);
            }));

            function resolveConflict(_x90) {
              return _resolveConflict2.apply(this, arguments);
            }

            return resolveConflict;
          }()
        }, {
          key: "fetchDiff",
          value: function () {
            var _fetchDiff = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee85(args) {
              return regeneratorRuntime.wrap(function _callee85$(_context86) {
                while (1) {
                  switch (_context86.prev = _context86.next) {
                    case 0:
                      return _context86.abrupt("return", this._GET("fetchDiff", args));

                    case 1:
                    case "end":
                      return _context86.stop();
                  }
                }
              }, _callee85, this);
            }));

            function fetchDiff(_x91) {
              return _fetchDiff.apply(this, arguments);
            }

            return fetchDiff;
          }()
        }, {
          key: "synchronize",
          value: function () {
            var _synchronize = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee86(args) {
              return regeneratorRuntime.wrap(function _callee86$(_context87) {
                while (1) {
                  switch (_context87.prev = _context87.next) {
                    case 0:
                      return _context87.abrupt("return", this._POST("synchronize", args));

                    case 1:
                    case "end":
                      return _context87.stop();
                  }
                }
              }, _callee86, this);
            }));

            function synchronize(_x92) {
              return _synchronize.apply(this, arguments);
            }

            return synchronize;
          }()
        }]);

        return ObjectDBHTTPInterface;
      }());
      __varRecorder__$2.ObjectDBHTTPInterface = ObjectDBHTTPInterface;
      __varRecorder__$2["default"] = ObjectDB;

      var __varRecorder__$1 = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.storage/storage-resource.js", __contextModule__);

      var __moduleMeta__ = {
        pathInPackage: function pathInPackage() {
          return "./storage-resource.js";
        },
        unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
          return function () {};
        },
        subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
          return function () {};
        },
        "package": function _package() {
          return {
            name: "lively.storage",
            version: "0.2.3"
          };
        }
      };

      var applyExclude = __varRecorder__$1["lively.storage/storage-resource.js__define__"]("applyExclude", "function", function (resource, exclude) {
        if (!exclude) return true;
        if (typeof exclude === "string") return !resource.url.includes(exclude);
        if (typeof exclude === "function") return !exclude(resource);
        if (exclude instanceof RegExp) return !exclude.test(resource.url);
        return true;
      }, __moduleMeta__);

      __varRecorder__$1.applyExclude = applyExclude;
      __varRecorder__$1.debug = false;
      __varRecorder__$1.slashRe = /\//g;
      var StorageDatabase = /*#__PURE__*/function (_Database) {
        _inherits$4(StorageDatabase, _Database);

        var _super = _createSuper(StorageDatabase);

        function StorageDatabase() {
          _classCallCheck(this, StorageDatabase);

          return _super.apply(this, arguments);
        }

        _createClass(StorageDatabase, null, [{
          key: "ensureDB",
          value: function ensureDB(name, options) {
            return _get(_getPrototypeOf(StorageDatabase), "ensureDB", this).call(this, "lively.storage-" + name, options);
          }
        }]);

        return StorageDatabase;
      }(Database);
      __varRecorder__$1.StorageDatabase = StorageDatabase;

      var LivelyStorageResource = /*#__PURE__*/function (_Resource) {
        _inherits$4(LivelyStorageResource, _Resource);

        var _super2 = _createSuper(LivelyStorageResource);

        function LivelyStorageResource() {
          _classCallCheck(this, LivelyStorageResource);

          return _super2.apply(this, arguments);
        }

        _createClass(LivelyStorageResource, [{
          key: "read",
          value: function () {
            var _read = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var file, content;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      __varRecorder__$1.debug && console.log("[".concat(this, "] read"));
                      _context.next = 3;
                      return this.db.get(this.pathWithoutQuery());

                    case 3:
                      file = _context.sent;
                      content = file && file.content;
                      return _context.abrupt("return", !content ? "" : typeof content === "string" ? content : JSON.stringify(content));

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function read() {
              return _read.apply(this, arguments);
            }

            return read;
          }()
        }, {
          key: "readJson",
          value: function () {
            var _readJson = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var content;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.read();

                    case 2:
                      content = _context2.sent;
                      return _context2.abrupt("return", typeof content === "string" ? JSON.parse(content) : content);

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function readJson() {
              return _readJson.apply(this, arguments);
            }

            return readJson;
          }()
        }, {
          key: "write",
          value: function () {
            var _write = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(content) {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      __varRecorder__$1.debug && console.log("[".concat(this, "] write"));
                      if (!content) content = "";

                      if (!this.isDirectory()) {
                        _context3.next = 4;
                        break;
                      }

                      throw new Error("Cannot write into a directory! (".concat(this.url, ")"));

                    case 4:
                      _context3.next = 6;
                      return this.db.update(this.pathWithoutQuery(), function (spec) {
                        if (spec && spec.isDirectory) {
                          throw new Error("".concat(_this.url, " already exists and is a directory (cannot write into it!)"));
                        }

                        var t = Date.now();

                        if (!spec) {
                          return {
                            etag: undefined,
                            type: undefined,
                            contentType: undefined,
                            user: undefined,
                            group: undefined,
                            mode: undefined,
                            lastModified: t,
                            created: t,
                            size: typeof content === "string" ? content.length : 0,
                            content: content
                          };
                        }

                        return Object.assign({}, spec, {
                          lastModified: t,
                          size: content.length,
                          content: content
                        });
                      });

                    case 6:
                      return _context3.abrupt("return", this);

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function write(_x) {
              return _write.apply(this, arguments);
            }

            return write;
          }()
        }, {
          key: "writeJson",
          value: function writeJson(obj) {
            return this.write(obj);
          }
        }, {
          key: "mkdir",
          value: function () {
            var _mkdir = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var spec, t;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      __varRecorder__$1.debug && console.log("[".concat(this, "] mkdir"));

                      if (this.isDirectory()) {
                        _context4.next = 3;
                        break;
                      }

                      throw new Error("Cannot mkdir a file! (".concat(this.url, ")"));

                    case 3:
                      _context4.next = 5;
                      return this.db.get(this.pathWithoutQuery());

                    case 5:
                      spec = _context4.sent;

                      if (!spec) {
                        _context4.next = 10;
                        break;
                      }

                      if (spec.isDirectory) {
                        _context4.next = 9;
                        break;
                      }

                      throw new Error("".concat(this.url, " already exists and is a file (cannot mkdir it!)"));

                    case 9:
                      return _context4.abrupt("return", this);

                    case 10:
                      t = Date.now();
                      _context4.next = 13;
                      return this.db.set(this.pathWithoutQuery(), {
                        etag: undefined,
                        type: undefined,
                        contentType: undefined,
                        user: undefined,
                        group: undefined,
                        mode: undefined,
                        lastModified: t,
                        created: t,
                        isDirectory: true
                      });

                    case 13:
                      return _context4.abrupt("return", this);

                    case 14:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function mkdir() {
              return _mkdir.apply(this, arguments);
            }

            return mkdir;
          }()
        }, {
          key: "exists",
          value: function () {
            var _exists = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      __varRecorder__$1.debug && console.log("[".concat(this, "] exists"));
                      _context5.t0 = this.isRoot();

                      if (_context5.t0) {
                        _context5.next = 6;
                        break;
                      }

                      _context5.next = 5;
                      return this.db.get(this.pathWithoutQuery());

                    case 5:
                      _context5.t0 = !!_context5.sent;

                    case 6:
                      return _context5.abrupt("return", _context5.t0);

                    case 7:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function exists() {
              return _exists.apply(this, arguments);
            }

            return exists;
          }()
        }, {
          key: "remove",
          value: function () {
            var _remove = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var thisPath, db, matching;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      __varRecorder__$1.debug && console.log("[".concat(this, "] remove"));
                      thisPath = this.pathWithoutQuery();
                      db = this.db;
                      _context6.next = 5;
                      return db.docList({
                        startkey: thisPath,
                        endkey: thisPath + "\uFFFF"
                      });

                    case 5:
                      matching = _context6.sent;
                      _context6.next = 8;
                      return db.setDocuments(matching.map(function (_ref) {
                        var _id = _ref.id,
                            _rev = _ref.rev;
                        return {
                          _id: _id,
                          _rev: _rev,
                          _deleted: true
                        };
                      }));

                    case 8:
                      return _context6.abrupt("return", this);

                    case 9:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function remove() {
              return _remove.apply(this, arguments);
            }

            return remove;
          }()
        }, {
          key: "readProperties",
          value: function readProperties() {
            __varRecorder__$1.debug && console.log("[".concat(this, "] readProperties"));
            return this.db.get(this.pathWithoutQuery());
          }
        }, {
          key: "dirList",
          value: function () {
            var _dirList = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this2 = this;

              var depth,
                  opts,
                  exclude,
                  prefix,
                  children,
                  docs,
                  i,
                  doc,
                  path,
                  trailing,
                  childDepth,
                  _ret,
                  child,
                  propNames,
                  _i,
                  _args7 = arguments;

              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      depth = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : 1;
                      opts = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : {};
                      __varRecorder__$1.debug && console.log("[".concat(this, "] dirList"));

                      if (this.isDirectory()) {
                        _context7.next = 5;
                        break;
                      }

                      return _context7.abrupt("return", this.asDirectory().dirList(depth, opts));

                    case 5:
                      exclude = opts.exclude;
                      prefix = this.pathWithoutQuery();
                      children = [];
                      _context7.next = 10;
                      return this.db.getAll({
                        startkey: prefix,
                        endkey: prefix + "\uFFFF"
                      });

                    case 10:
                      docs = _context7.sent;
                      if (depth === "infinity") depth = Infinity;
                      i = 0;

                    case 13:
                      if (!(i < docs.length)) {
                        _context7.next = 34;
                        break;
                      }

                      doc = docs[i];
                      path = doc._id;

                      if (!(!path.startsWith(prefix) || prefix === path)) {
                        _context7.next = 18;
                        break;
                      }

                      return _context7.abrupt("continue", 31);

                    case 18:
                      trailing = path.slice(prefix.length);
                      childDepth = trailing.includes("/") ? trailing.match(__varRecorder__$1.slashRe).length + 1 : 1;

                      if (!(childDepth > depth)) {
                        _context7.next = 24;
                        break;
                      }

                      _ret = function () {
                        var dirToChild = _this2.join(trailing.split("/").slice(0, depth).join("/") + "/");

                        if (!children.some(function (ea) {
                          return ea.equals(dirToChild);
                        })) children.push(dirToChild);
                        return "continue";
                      }();

                      if (!(_ret === "continue")) {
                        _context7.next = 24;
                        break;
                      }

                      return _context7.abrupt("continue", 31);

                    case 24:
                      child = this.join(trailing);

                      if (!(exclude && !__varRecorder__$1.applyExclude(child, exclude))) {
                        _context7.next = 27;
                        break;
                      }

                      return _context7.abrupt("continue", 31);

                    case 27:
                      children.push(child);
                      propNames = ["created", "lastModified", "mode", "group", "user", "contentType", "type", "etag", "size"];

                      for (_i = 0; _i < propNames.length; _i++) {
                        child[propNames[_i]] = doc[propNames[_i]];
                      }

                    case 31:
                      i++;
                      _context7.next = 13;
                      break;

                    case 34:
                      return _context7.abrupt("return", children);

                    case 35:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            function dirList() {
              return _dirList.apply(this, arguments);
            }

            return dirList;
          }()
        }, {
          key: "canDealWithJSON",
          get: function get() {
            return true;
          }
        }, {
          key: "db",
          get: function get() {
            return this._db || (this._db = __varRecorder__$1.StorageDatabase.ensureDB(this.host()));
          }
        }]);

        return LivelyStorageResource;
      }(Resource);
      __varRecorder__$1.LivelyStorageResource = LivelyStorageResource;
      __varRecorder__$1.resourceExtension = {
        name: "lively.storage",
        matches: function matches(url) {
          return url.startsWith("lively.storage:");
        },
        resourceClass: __varRecorder__$1.LivelyStorageResource
      };
      var resourceExtension = __varRecorder__$1.resourceExtension;
      __varRecorder__$1.resourceExtension = resourceExtension;
      registerExtension(__varRecorder__$1.resourceExtension);
      __varRecorder__$1["default"] = LivelyStorageResource;

      var __varRecorder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.storage/index.js", __contextModule__);
      __varRecorder__["default"] = Database;
      __varRecorder__.Database = Database;
      __varRecorder__.ObjectDB = ObjectDB;
      __varRecorder__.ObjectDBInterface = ObjectDBInterface;
      __varRecorder__.ObjectDBHTTPInterface = ObjectDBHTTPInterface;

    })
  };
}));
