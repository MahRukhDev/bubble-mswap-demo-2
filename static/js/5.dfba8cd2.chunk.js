(this["webpackJsonp@bubbles"] = this["webpackJsonp@bubbles"] || []).push([
  [5],
  {
    1e3: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return u;
      }),
        n.d(e, "b", function () {
          return c;
        });
      var r = n(14),
        i = n(13),
        o = n(19),
        a = n(20),
        s = n(953),
        u = (function (t) {
          Object(o.a)(n, t);
          var e = Object(a.a)(n);
          function n(t) {
            return Object(i.a)(this, n), e.call(this);
          }
          return Object(r.a)(n);
        })(s.a),
        c = (function (t) {
          Object(o.a)(n, t);
          var e = Object(a.a)(n);
          function n(t) {
            return Object(i.a)(this, n), e.call(this);
          }
          return Object(r.a)(n);
        })(
          (function (t) {
            Object(o.a)(n, t);
            var e = Object(a.a)(n);
            function n() {
              return Object(i.a)(this, n), e.call(this);
            }
            return Object(r.a)(n);
          })(s.a)
        );
    },
    1001: function (t, e) {},
    1002: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      function r(t, e) {
        var n = (function (t) {
          var e = t.match(new RegExp(/^\w+:/, "gi"));
          if (e && e.length) return e[0];
        })(t);
        return "undefined" !== typeof n && new RegExp(e).test(n);
      }
      function i(t) {
        return r(t, "^https?:");
      }
    },
    1003: function (t, e, n) {
      "use strict";
      function r(t) {
        return "id" in t && "jsonrpc" in t && "2.0" === t.jsonrpc;
      }
      function i(t) {
        return (
          r(t) &&
          ((function (t) {
            return "result" in t;
          })(t) ||
            o(t))
        );
      }
      function o(t) {
        return "error" in t;
      }
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "a", function () {
          return o;
        });
    },
    1004: function (t, e, n) {
      "use strict";
      function r(t) {
        if ("string" !== typeof t)
          throw new Error(
            "Cannot safe json parse value of type ".concat(typeof t)
          );
        try {
          return JSON.parse(t);
        } catch (e) {
          return t;
        }
      }
      function i(t) {
        return "string" === typeof t ? t : JSON.stringify(t);
      }
      n.d(e, "a", function () {
        return r;
      }),
        n.d(e, "b", function () {
          return i;
        });
    },
    1005: function (t, e, n) {
      "use strict";
      function r(t) {
        var e = void 0;
        return (
          "undefined" !== typeof window &&
            "undefined" !== typeof window[t] &&
            (e = window[t]),
          e
        );
      }
      function i(t) {
        var e = r(t);
        if (!e) throw new Error("".concat(t, " is not defined in Window"));
        return e;
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getLocalStorage =
          e.getLocalStorageOrThrow =
          e.getCrypto =
          e.getCryptoOrThrow =
          e.getLocation =
          e.getLocationOrThrow =
          e.getNavigator =
          e.getNavigatorOrThrow =
          e.getDocument =
          e.getDocumentOrThrow =
          e.getFromWindowOrThrow =
          e.getFromWindow =
            void 0),
        (e.getFromWindow = r),
        (e.getFromWindowOrThrow = i),
        (e.getDocumentOrThrow = function () {
          return i("document");
        }),
        (e.getDocument = function () {
          return r("document");
        }),
        (e.getNavigatorOrThrow = function () {
          return i("navigator");
        }),
        (e.getNavigator = function () {
          return r("navigator");
        }),
        (e.getLocationOrThrow = function () {
          return i("location");
        }),
        (e.getLocation = function () {
          return r("location");
        }),
        (e.getCryptoOrThrow = function () {
          return i("crypto");
        }),
        (e.getCrypto = function () {
          return r("crypto");
        }),
        (e.getLocalStorageOrThrow = function () {
          return i("localStorage");
        }),
        (e.getLocalStorage = function () {
          return r("localStorage");
        });
    },
    1006: function (t, e) {
      (t.exports = i), (i.strict = o), (i.loose = a);
      var n = Object.prototype.toString,
        r = {
          "[object Int8Array]": !0,
          "[object Int16Array]": !0,
          "[object Int32Array]": !0,
          "[object Uint8Array]": !0,
          "[object Uint8ClampedArray]": !0,
          "[object Uint16Array]": !0,
          "[object Uint32Array]": !0,
          "[object Float32Array]": !0,
          "[object Float64Array]": !0,
        };
      function i(t) {
        return o(t) || a(t);
      }
      function o(t) {
        return (
          t instanceof Int8Array ||
          t instanceof Int16Array ||
          t instanceof Int32Array ||
          t instanceof Uint8Array ||
          t instanceof Uint8ClampedArray ||
          t instanceof Uint16Array ||
          t instanceof Uint32Array ||
          t instanceof Float32Array ||
          t instanceof Float64Array
        );
      }
      function a(t) {
        return r[n.call(t)];
      }
    },
    1007: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var r = n(900);
      function i(t) {
        return r.getBrowerCrypto().getRandomValues(new Uint8Array(t));
      }
    },
    1008: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "a", function () {
          return o;
        });
      var r = n(954);
      function i(t, e, n) {
        return Object(r.b)(t, e, n);
      }
      function o(t, e, n) {
        return Object(r.a)(t, e, n);
      }
    },
    1009: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      var r = n(7),
        i = n.n(r),
        o = n(27),
        a = n(954);
      n(955);
      function s(t, e) {
        return u.apply(this, arguments);
      }
      function u() {
        return (u = Object(o.a)(
          i.a.mark(function t(e, n) {
            var r;
            return i.a.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), Object(a.c)(e, n);
                  case 2:
                    return (r = t.sent), t.abrupt("return", r);
                  case 4:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
    },
    1010: function (t, e, n) {
      "use strict";
      var r = n(900);
      n.o(r, "isConstantTime") &&
        n.d(e, "isConstantTime", function () {
          return r.isConstantTime;
        });
    },
    1011: function (t, e, n) {
      "use strict";
    },
    1012: function (t, e) {},
    1013: function (t, e, n) {
      "use strict";
      function r(t, e) {
        if (t.length !== e.length) return !1;
        for (var n = 0, r = 0; r < t.length; r++) n |= t[r] ^ e[r];
        return 0 === n;
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    1014: function (t, e, n) {
      "use strict";
      n(7), n(27), n(954);
    },
    1015: function (t, e, n) {
      var r = n(957),
        i = [
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4,
          4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8,
          10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6,
          11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23,
          25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12,
          23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29,
          40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51,
          60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74,
          24, 47, 65, 77, 25, 49, 68, 81,
        ],
        o = [
          7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48,
          72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110,
          160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308,
          104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280,
          408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650,
          224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504,
          750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952,
          1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140,
          1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350,
          1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590,
          1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860,
          2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430,
        ];
      (e.getBlocksCount = function (t, e) {
        switch (e) {
          case r.L:
            return i[4 * (t - 1) + 0];
          case r.M:
            return i[4 * (t - 1) + 1];
          case r.Q:
            return i[4 * (t - 1) + 2];
          case r.H:
            return i[4 * (t - 1) + 3];
          default:
            return;
        }
      }),
        (e.getTotalCodewordsCount = function (t, e) {
          switch (e) {
            case r.L:
              return o[4 * (t - 1) + 0];
            case r.M:
              return o[4 * (t - 1) + 1];
            case r.Q:
              return o[4 * (t - 1) + 2];
            case r.H:
              return o[4 * (t - 1) + 3];
            default:
              return;
          }
        });
    },
    1016: function (t, e) {
      e.isValid = function (t) {
        return !isNaN(t) && t >= 1 && t <= 40;
      };
    },
    1017: function (t, e) {
      var n = "[0-9]+",
        r =
          "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
        i =
          "(?:(?![A-Z0-9 $%*+\\-./:]|" +
          (r = r.replace(/u/g, "\\u")) +
          ")(?:.|[\r\n]))+";
      (e.KANJI = new RegExp(r, "g")),
        (e.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g")),
        (e.BYTE = new RegExp(i, "g")),
        (e.NUMERIC = new RegExp(n, "g")),
        (e.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g"));
      var o = new RegExp("^" + r + "$"),
        a = new RegExp("^[0-9]+$"),
        s = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
      (e.testKanji = function (t) {
        return o.test(t);
      }),
        (e.testNumeric = function (t) {
          return a.test(t);
        }),
        (e.testAlphanumeric = function (t) {
          return s.test(t);
        });
    },
    1018: function (t, e) {
      function n(t) {
        if (
          ("number" === typeof t && (t = t.toString()), "string" !== typeof t)
        )
          throw new Error("Color should be defined as hex string");
        var e = t.slice().replace("#", "").split("");
        if (e.length < 3 || 5 === e.length || e.length > 8)
          throw new Error("Invalid hex color: " + t);
        (3 !== e.length && 4 !== e.length) ||
          (e = Array.prototype.concat.apply(
            [],
            e.map(function (t) {
              return [t, t];
            })
          )),
          6 === e.length && e.push("F", "F");
        var n = parseInt(e.join(""), 16);
        return {
          r: (n >> 24) & 255,
          g: (n >> 16) & 255,
          b: (n >> 8) & 255,
          a: 255 & n,
          hex: "#" + e.slice(0, 6).join(""),
        };
      }
      (e.getOptions = function (t) {
        t || (t = {}), t.color || (t.color = {});
        var e =
            "undefined" === typeof t.margin || null === t.margin || t.margin < 0
              ? 4
              : t.margin,
          r = t.width && t.width >= 21 ? t.width : void 0,
          i = t.scale || 4;
        return {
          width: r,
          scale: r ? 4 : i,
          margin: e,
          color: {
            dark: n(t.color.dark || "#000000ff"),
            light: n(t.color.light || "#ffffffff"),
          },
          type: t.type,
          rendererOpts: t.rendererOpts || {},
        };
      }),
        (e.getScale = function (t, e) {
          return e.width && e.width >= t + 2 * e.margin
            ? e.width / (t + 2 * e.margin)
            : e.scale;
        }),
        (e.getImageWidth = function (t, n) {
          var r = e.getScale(t, n);
          return Math.floor((t + 2 * n.margin) * r);
        }),
        (e.qrToImageData = function (t, n, r) {
          for (
            var i = n.modules.size,
              o = n.modules.data,
              a = e.getScale(i, r),
              s = Math.floor((i + 2 * r.margin) * a),
              u = r.margin * a,
              c = [r.color.light, r.color.dark],
              l = 0;
            l < s;
            l++
          )
            for (var h = 0; h < s; h++) {
              var f = 4 * (l * s + h),
                d = r.color.light;
              if (l >= u && h >= u && l < s - u && h < s - u)
                d =
                  c[
                    o[Math.floor((l - u) / a) * i + Math.floor((h - u) / a)]
                      ? 1
                      : 0
                  ];
              (t[f++] = d.r), (t[f++] = d.g), (t[f++] = d.b), (t[f] = d.a);
            }
        });
    },
    1057: function (t, e, n) {
      "use strict";
      (function (t) {
        function n() {
          return (
            (null === t || void 0 === t ? void 0 : t.crypto) ||
            (null === t || void 0 === t ? void 0 : t.msCrypto) ||
            {}
          );
        }
        function r() {
          var t = n();
          return t.subtle || t.webkitSubtle;
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.isBrowserCryptoAvailable =
            e.getSubtleCrypto =
            e.getBrowerCrypto =
              void 0),
          (e.getBrowerCrypto = n),
          (e.getSubtleCrypto = r),
          (e.isBrowserCryptoAvailable = function () {
            return !!n() && !!r();
          });
      }.call(this, n(106)));
    },
    1058: function (t, e, n) {
      "use strict";
      (function (t) {
        function n() {
          return (
            "undefined" === typeof document &&
            "undefined" !== typeof navigator &&
            "ReactNative" === navigator.product
          );
        }
        function r() {
          return (
            "undefined" !== typeof t &&
            "undefined" !== typeof t.versions &&
            "undefined" !== typeof t.versions.node
          );
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.isBrowser = e.isNode = e.isReactNative = void 0),
          (e.isReactNative = n),
          (e.isNode = r),
          (e.isBrowser = function () {
            return !n() && !r();
          });
      }.call(this, n(145)));
    },
    1059: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getWindowMetadata = void 0);
      var r = n(1005);
      e.getWindowMetadata = function () {
        var t, e;
        try {
          (t = r.getDocumentOrThrow()), (e = r.getLocationOrThrow());
        } catch (o) {
          return null;
        }
        function n() {
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          for (
            var i = t.getElementsByTagName("meta"),
              o = function (t) {
                var e = i[t],
                  r = ["itemprop", "property", "name"]
                    .map(function (t) {
                      return e.getAttribute(t);
                    })
                    .filter(function (t) {
                      return !!t && n.includes(t);
                    });
                if (r.length && r) {
                  var o = e.getAttribute("content");
                  if (o) return { v: o };
                }
              },
              a = 0;
            a < i.length;
            a++
          ) {
            var s = o(a);
            if ("object" === typeof s) return s.v;
          }
          return "";
        }
        var i = (function () {
          var e = n("name", "og:site_name", "og:title", "twitter:title");
          return e || (e = t.title), e;
        })();
        return {
          description: n(
            "description",
            "og:description",
            "twitter:description",
            "keywords"
          ),
          url: e.origin,
          icons: (function () {
            for (
              var n = t.getElementsByTagName("link"), r = [], i = 0;
              i < n.length;
              i++
            ) {
              var o = n[i],
                a = o.getAttribute("rel");
              if (a && a.toLowerCase().indexOf("icon") > -1) {
                var s = o.getAttribute("href");
                if (s)
                  if (
                    -1 === s.toLowerCase().indexOf("https:") &&
                    -1 === s.toLowerCase().indexOf("http:") &&
                    0 !== s.indexOf("//")
                  ) {
                    var u = e.protocol + "//" + e.host;
                    if (0 === s.indexOf("/")) u += s;
                    else {
                      var c = e.pathname.split("/");
                      c.pop(), (u += c.join("/") + "/" + s);
                    }
                    r.push(u);
                  } else if (0 === s.indexOf("//")) {
                    var l = e.protocol + s;
                    r.push(l);
                  } else r.push(s);
              }
            }
            return r;
          })(),
          name: i,
        };
      };
    },
    1060: function (t, e, n) {
      "use strict";
      (function (t) {
        n.d(e, "a", function () {
          return f;
        });
        var r = function () {
            for (var t = 0, e = 0, n = arguments.length; e < n; e++)
              t += arguments[e].length;
            var r = Array(t),
              i = 0;
            for (e = 0; e < n; e++)
              for (var o = arguments[e], a = 0, s = o.length; a < s; a++, i++)
                r[i] = o[a];
            return r;
          },
          i = function (t, e, n) {
            (this.name = t),
              (this.version = e),
              (this.os = n),
              (this.type = "browser");
          },
          o = function (e) {
            (this.version = e),
              (this.type = "node"),
              (this.name = "node"),
              (this.os = t.platform);
          },
          a = function (t, e, n, r) {
            (this.name = t),
              (this.version = e),
              (this.os = n),
              (this.bot = r),
              (this.type = "bot-device");
          },
          s = function () {
            (this.type = "bot"),
              (this.bot = !0),
              (this.name = "bot"),
              (this.version = null),
              (this.os = null);
          },
          u = function () {
            (this.type = "react-native"),
              (this.name = "react-native"),
              (this.version = null),
              (this.os = null);
          },
          c =
            /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
          l = [
            ["aol", /AOLShield\/([0-9\._]+)/],
            ["edge", /Edge\/([0-9\._]+)/],
            ["edge-ios", /EdgiOS\/([0-9\._]+)/],
            ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
            ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
            ["samsung", /SamsungBrowser\/([0-9\.]+)/],
            ["silk", /\bSilk\/([0-9._-]+)\b/],
            ["miui", /MiuiBrowser\/([0-9\.]+)$/],
            ["beaker", /BeakerBrowser\/([0-9\.]+)/],
            ["edge-chromium", /EdgA?\/([0-9\.]+)/],
            [
              "chromium-webview",
              /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
            ],
            ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
            ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
            ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
            ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
            ["fxios", /FxiOS\/([0-9\.]+)/],
            ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
            ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
            ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
            ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
            ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
            ["ie", /MSIE\s(7\.0)/],
            ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
            ["android", /Android\s([0-9\.]+)/],
            ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
            ["safari", /Version\/([0-9\._]+).*Safari/],
            ["facebook", /FBAV\/([0-9\.]+)/],
            ["instagram", /Instagram\s([0-9\.]+)/],
            ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
            ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
            [
              "searchbot",
              /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
            ],
          ],
          h = [
            ["iOS", /iP(hone|od|ad)/],
            ["Android OS", /Android/],
            ["BlackBerry OS", /BlackBerry|BB10/],
            ["Windows Mobile", /IEMobile/],
            ["Amazon OS", /Kindle/],
            ["Windows 3.11", /Win16/],
            ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
            ["Windows 98", /(Windows 98)|(Win98)/],
            ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
            ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
            ["Windows Server 2003", /(Windows NT 5.2)/],
            ["Windows Vista", /(Windows NT 6.0)/],
            ["Windows 7", /(Windows NT 6.1)/],
            ["Windows 8", /(Windows NT 6.2)/],
            ["Windows 8.1", /(Windows NT 6.3)/],
            ["Windows 10", /(Windows NT 10.0)/],
            ["Windows ME", /Windows ME/],
            ["Open BSD", /OpenBSD/],
            ["Sun OS", /SunOS/],
            ["Chrome OS", /CrOS/],
            ["Linux", /(Linux)|(X11)/],
            ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
            ["QNX", /QNX/],
            ["BeOS", /BeOS/],
            ["OS/2", /OS\/2/],
          ];
        function f(e) {
          return e
            ? p(e)
            : "undefined" === typeof document &&
              "undefined" !== typeof navigator &&
              "ReactNative" === navigator.product
            ? new u()
            : "undefined" !== typeof navigator
            ? p(navigator.userAgent)
            : "undefined" !== typeof t && t.version
            ? new o(t.version.slice(1))
            : null;
        }
        function d(t) {
          return (
            "" !== t &&
            l.reduce(function (e, n) {
              var r = n[0],
                i = n[1];
              if (e) return e;
              var o = i.exec(t);
              return !!o && [r, o];
            }, !1)
          );
        }
        function p(t) {
          var e = d(t);
          if (!e) return null;
          var n = e[0],
            o = e[1];
          if ("searchbot" === n) return new s();
          var u = o[1] && o[1].split(/[._]/).slice(0, 3);
          u
            ? u.length < 3 &&
              (u = r(
                u,
                (function (t) {
                  for (var e = [], n = 0; n < t; n++) e.push("0");
                  return e;
                })(3 - u.length)
              ))
            : (u = []);
          var l = u.join("."),
            f = (function (t) {
              for (var e = 0, n = h.length; e < n; e++) {
                var r = h[e],
                  i = r[0];
                if (r[1].exec(t)) return i;
              }
              return null;
            })(t),
            p = c.exec(t);
          return p && p[1] ? new a(n, l, f, p[1]) : new i(n, l, f);
        }
      }.call(this, n(145)));
    },
    1061: function (t, e, n) {
      (function (t) {
        !(function (t, e) {
          "use strict";
          function r(t, e) {
            if (!t) throw new Error(e || "Assertion failed");
          }
          function i(t, e) {
            t.super_ = e;
            var n = function () {};
            (n.prototype = e.prototype),
              (t.prototype = new n()),
              (t.prototype.constructor = t);
          }
          function o(t, e, n) {
            if (o.isBN(t)) return t;
            (this.negative = 0),
              (this.words = null),
              (this.length = 0),
              (this.red = null),
              null !== t &&
                (("le" !== e && "be" !== e) || ((n = e), (e = 10)),
                this._init(t || 0, e || 10, n || "be"));
          }
          var a;
          "object" === typeof t ? (t.exports = o) : (e.BN = o),
            (o.BN = o),
            (o.wordSize = 26);
          try {
            a = n(1062).Buffer;
          } catch (x) {}
          function s(t, e, n) {
            for (var r = 0, i = Math.min(t.length, n), o = e; o < i; o++) {
              var a = t.charCodeAt(o) - 48;
              (r <<= 4),
                (r |=
                  a >= 49 && a <= 54
                    ? a - 49 + 10
                    : a >= 17 && a <= 22
                    ? a - 17 + 10
                    : 15 & a);
            }
            return r;
          }
          function u(t, e, n, r) {
            for (var i = 0, o = Math.min(t.length, n), a = e; a < o; a++) {
              var s = t.charCodeAt(a) - 48;
              (i *= r),
                (i += s >= 49 ? s - 49 + 10 : s >= 17 ? s - 17 + 10 : s);
            }
            return i;
          }
          (o.isBN = function (t) {
            return (
              t instanceof o ||
              (null !== t &&
                "object" === typeof t &&
                t.constructor.wordSize === o.wordSize &&
                Array.isArray(t.words))
            );
          }),
            (o.max = function (t, e) {
              return t.cmp(e) > 0 ? t : e;
            }),
            (o.min = function (t, e) {
              return t.cmp(e) < 0 ? t : e;
            }),
            (o.prototype._init = function (t, e, n) {
              if ("number" === typeof t) return this._initNumber(t, e, n);
              if ("object" === typeof t) return this._initArray(t, e, n);
              "hex" === e && (e = 16), r(e === (0 | e) && e >= 2 && e <= 36);
              var i = 0;
              "-" === (t = t.toString().replace(/\s+/g, ""))[0] && i++,
                16 === e ? this._parseHex(t, i) : this._parseBase(t, e, i),
                "-" === t[0] && (this.negative = 1),
                this.strip(),
                "le" === n && this._initArray(this.toArray(), e, n);
            }),
            (o.prototype._initNumber = function (t, e, n) {
              t < 0 && ((this.negative = 1), (t = -t)),
                t < 67108864
                  ? ((this.words = [67108863 & t]), (this.length = 1))
                  : t < 4503599627370496
                  ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                    (this.length = 2))
                  : (r(t < 9007199254740992),
                    (this.words = [67108863 & t, (t / 67108864) & 67108863, 1]),
                    (this.length = 3)),
                "le" === n && this._initArray(this.toArray(), e, n);
            }),
            (o.prototype._initArray = function (t, e, n) {
              if ((r("number" === typeof t.length), t.length <= 0))
                return (this.words = [0]), (this.length = 1), this;
              (this.length = Math.ceil(t.length / 3)),
                (this.words = new Array(this.length));
              for (var i = 0; i < this.length; i++) this.words[i] = 0;
              var o,
                a,
                s = 0;
              if ("be" === n)
                for (i = t.length - 1, o = 0; i >= 0; i -= 3)
                  (a = t[i] | (t[i - 1] << 8) | (t[i - 2] << 16)),
                    (this.words[o] |= (a << s) & 67108863),
                    (this.words[o + 1] = (a >>> (26 - s)) & 67108863),
                    (s += 24) >= 26 && ((s -= 26), o++);
              else if ("le" === n)
                for (i = 0, o = 0; i < t.length; i += 3)
                  (a = t[i] | (t[i + 1] << 8) | (t[i + 2] << 16)),
                    (this.words[o] |= (a << s) & 67108863),
                    (this.words[o + 1] = (a >>> (26 - s)) & 67108863),
                    (s += 24) >= 26 && ((s -= 26), o++);
              return this.strip();
            }),
            (o.prototype._parseHex = function (t, e) {
              (this.length = Math.ceil((t.length - e) / 6)),
                (this.words = new Array(this.length));
              for (var n = 0; n < this.length; n++) this.words[n] = 0;
              var r,
                i,
                o = 0;
              for (n = t.length - 6, r = 0; n >= e; n -= 6)
                (i = s(t, n, n + 6)),
                  (this.words[r] |= (i << o) & 67108863),
                  (this.words[r + 1] |= (i >>> (26 - o)) & 4194303),
                  (o += 24) >= 26 && ((o -= 26), r++);
              n + 6 !== e &&
                ((i = s(t, e, n + 6)),
                (this.words[r] |= (i << o) & 67108863),
                (this.words[r + 1] |= (i >>> (26 - o)) & 4194303)),
                this.strip();
            }),
            (o.prototype._parseBase = function (t, e, n) {
              (this.words = [0]), (this.length = 1);
              for (var r = 0, i = 1; i <= 67108863; i *= e) r++;
              r--, (i = (i / e) | 0);
              for (
                var o = t.length - n,
                  a = o % r,
                  s = Math.min(o, o - a) + n,
                  c = 0,
                  l = n;
                l < s;
                l += r
              )
                (c = u(t, l, l + r, e)),
                  this.imuln(i),
                  this.words[0] + c < 67108864
                    ? (this.words[0] += c)
                    : this._iaddn(c);
              if (0 !== a) {
                var h = 1;
                for (c = u(t, l, t.length, e), l = 0; l < a; l++) h *= e;
                this.imuln(h),
                  this.words[0] + c < 67108864
                    ? (this.words[0] += c)
                    : this._iaddn(c);
              }
            }),
            (o.prototype.copy = function (t) {
              t.words = new Array(this.length);
              for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
              (t.length = this.length),
                (t.negative = this.negative),
                (t.red = this.red);
            }),
            (o.prototype.clone = function () {
              var t = new o(null);
              return this.copy(t), t;
            }),
            (o.prototype._expand = function (t) {
              for (; this.length < t; ) this.words[this.length++] = 0;
              return this;
            }),
            (o.prototype.strip = function () {
              for (; this.length > 1 && 0 === this.words[this.length - 1]; )
                this.length--;
              return this._normSign();
            }),
            (o.prototype._normSign = function () {
              return (
                1 === this.length && 0 === this.words[0] && (this.negative = 0),
                this
              );
            }),
            (o.prototype.inspect = function () {
              return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
            });
          var c = [
              "",
              "0",
              "00",
              "000",
              "0000",
              "00000",
              "000000",
              "0000000",
              "00000000",
              "000000000",
              "0000000000",
              "00000000000",
              "000000000000",
              "0000000000000",
              "00000000000000",
              "000000000000000",
              "0000000000000000",
              "00000000000000000",
              "000000000000000000",
              "0000000000000000000",
              "00000000000000000000",
              "000000000000000000000",
              "0000000000000000000000",
              "00000000000000000000000",
              "000000000000000000000000",
              "0000000000000000000000000",
            ],
            l = [
              0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6,
              6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            ],
            h = [
              0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
              16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
              11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
              5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
              20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
              60466176,
            ];
          function f(t, e, n) {
            n.negative = e.negative ^ t.negative;
            var r = (t.length + e.length) | 0;
            (n.length = r), (r = (r - 1) | 0);
            var i = 0 | t.words[0],
              o = 0 | e.words[0],
              a = i * o,
              s = 67108863 & a,
              u = (a / 67108864) | 0;
            n.words[0] = s;
            for (var c = 1; c < r; c++) {
              for (
                var l = u >>> 26,
                  h = 67108863 & u,
                  f = Math.min(c, e.length - 1),
                  d = Math.max(0, c - t.length + 1);
                d <= f;
                d++
              ) {
                var p = (c - d) | 0;
                (l +=
                  ((a = (i = 0 | t.words[p]) * (o = 0 | e.words[d]) + h) /
                    67108864) |
                  0),
                  (h = 67108863 & a);
              }
              (n.words[c] = 0 | h), (u = 0 | l);
            }
            return 0 !== u ? (n.words[c] = 0 | u) : n.length--, n.strip();
          }
          (o.prototype.toString = function (t, e) {
            var n;
            if (((e = 0 | e || 1), 16 === (t = t || 10) || "hex" === t)) {
              n = "";
              for (var i = 0, o = 0, a = 0; a < this.length; a++) {
                var s = this.words[a],
                  u = (16777215 & ((s << i) | o)).toString(16);
                (n =
                  0 !== (o = (s >>> (24 - i)) & 16777215) ||
                  a !== this.length - 1
                    ? c[6 - u.length] + u + n
                    : u + n),
                  (i += 2) >= 26 && ((i -= 26), a--);
              }
              for (0 !== o && (n = o.toString(16) + n); n.length % e !== 0; )
                n = "0" + n;
              return 0 !== this.negative && (n = "-" + n), n;
            }
            if (t === (0 | t) && t >= 2 && t <= 36) {
              var f = l[t],
                d = h[t];
              n = "";
              var p = this.clone();
              for (p.negative = 0; !p.isZero(); ) {
                var m = p.modn(d).toString(t);
                n = (p = p.idivn(d)).isZero() ? m + n : c[f - m.length] + m + n;
              }
              for (this.isZero() && (n = "0" + n); n.length % e !== 0; )
                n = "0" + n;
              return 0 !== this.negative && (n = "-" + n), n;
            }
            r(!1, "Base should be between 2 and 36");
          }),
            (o.prototype.toNumber = function () {
              var t = this.words[0];
              return (
                2 === this.length
                  ? (t += 67108864 * this.words[1])
                  : 3 === this.length && 1 === this.words[2]
                  ? (t += 4503599627370496 + 67108864 * this.words[1])
                  : this.length > 2 &&
                    r(!1, "Number can only safely store up to 53 bits"),
                0 !== this.negative ? -t : t
              );
            }),
            (o.prototype.toJSON = function () {
              return this.toString(16);
            }),
            (o.prototype.toBuffer = function (t, e) {
              return r("undefined" !== typeof a), this.toArrayLike(a, t, e);
            }),
            (o.prototype.toArray = function (t, e) {
              return this.toArrayLike(Array, t, e);
            }),
            (o.prototype.toArrayLike = function (t, e, n) {
              var i = this.byteLength(),
                o = n || Math.max(1, i);
              r(i <= o, "byte array longer than desired length"),
                r(o > 0, "Requested array length <= 0"),
                this.strip();
              var a,
                s,
                u = "le" === e,
                c = new t(o),
                l = this.clone();
              if (u) {
                for (s = 0; !l.isZero(); s++)
                  (a = l.andln(255)), l.iushrn(8), (c[s] = a);
                for (; s < o; s++) c[s] = 0;
              } else {
                for (s = 0; s < o - i; s++) c[s] = 0;
                for (s = 0; !l.isZero(); s++)
                  (a = l.andln(255)), l.iushrn(8), (c[o - s - 1] = a);
              }
              return c;
            }),
            Math.clz32
              ? (o.prototype._countBits = function (t) {
                  return 32 - Math.clz32(t);
                })
              : (o.prototype._countBits = function (t) {
                  var e = t,
                    n = 0;
                  return (
                    e >= 4096 && ((n += 13), (e >>>= 13)),
                    e >= 64 && ((n += 7), (e >>>= 7)),
                    e >= 8 && ((n += 4), (e >>>= 4)),
                    e >= 2 && ((n += 2), (e >>>= 2)),
                    n + e
                  );
                }),
            (o.prototype._zeroBits = function (t) {
              if (0 === t) return 26;
              var e = t,
                n = 0;
              return (
                0 === (8191 & e) && ((n += 13), (e >>>= 13)),
                0 === (127 & e) && ((n += 7), (e >>>= 7)),
                0 === (15 & e) && ((n += 4), (e >>>= 4)),
                0 === (3 & e) && ((n += 2), (e >>>= 2)),
                0 === (1 & e) && n++,
                n
              );
            }),
            (o.prototype.bitLength = function () {
              var t = this.words[this.length - 1],
                e = this._countBits(t);
              return 26 * (this.length - 1) + e;
            }),
            (o.prototype.zeroBits = function () {
              if (this.isZero()) return 0;
              for (var t = 0, e = 0; e < this.length; e++) {
                var n = this._zeroBits(this.words[e]);
                if (((t += n), 26 !== n)) break;
              }
              return t;
            }),
            (o.prototype.byteLength = function () {
              return Math.ceil(this.bitLength() / 8);
            }),
            (o.prototype.toTwos = function (t) {
              return 0 !== this.negative
                ? this.abs().inotn(t).iaddn(1)
                : this.clone();
            }),
            (o.prototype.fromTwos = function (t) {
              return this.testn(t - 1)
                ? this.notn(t).iaddn(1).ineg()
                : this.clone();
            }),
            (o.prototype.isNeg = function () {
              return 0 !== this.negative;
            }),
            (o.prototype.neg = function () {
              return this.clone().ineg();
            }),
            (o.prototype.ineg = function () {
              return this.isZero() || (this.negative ^= 1), this;
            }),
            (o.prototype.iuor = function (t) {
              for (; this.length < t.length; ) this.words[this.length++] = 0;
              for (var e = 0; e < t.length; e++)
                this.words[e] = this.words[e] | t.words[e];
              return this.strip();
            }),
            (o.prototype.ior = function (t) {
              return r(0 === (this.negative | t.negative)), this.iuor(t);
            }),
            (o.prototype.or = function (t) {
              return this.length > t.length
                ? this.clone().ior(t)
                : t.clone().ior(this);
            }),
            (o.prototype.uor = function (t) {
              return this.length > t.length
                ? this.clone().iuor(t)
                : t.clone().iuor(this);
            }),
            (o.prototype.iuand = function (t) {
              var e;
              e = this.length > t.length ? t : this;
              for (var n = 0; n < e.length; n++)
                this.words[n] = this.words[n] & t.words[n];
              return (this.length = e.length), this.strip();
            }),
            (o.prototype.iand = function (t) {
              return r(0 === (this.negative | t.negative)), this.iuand(t);
            }),
            (o.prototype.and = function (t) {
              return this.length > t.length
                ? this.clone().iand(t)
                : t.clone().iand(this);
            }),
            (o.prototype.uand = function (t) {
              return this.length > t.length
                ? this.clone().iuand(t)
                : t.clone().iuand(this);
            }),
            (o.prototype.iuxor = function (t) {
              var e, n;
              this.length > t.length
                ? ((e = this), (n = t))
                : ((e = t), (n = this));
              for (var r = 0; r < n.length; r++)
                this.words[r] = e.words[r] ^ n.words[r];
              if (this !== e)
                for (; r < e.length; r++) this.words[r] = e.words[r];
              return (this.length = e.length), this.strip();
            }),
            (o.prototype.ixor = function (t) {
              return r(0 === (this.negative | t.negative)), this.iuxor(t);
            }),
            (o.prototype.xor = function (t) {
              return this.length > t.length
                ? this.clone().ixor(t)
                : t.clone().ixor(this);
            }),
            (o.prototype.uxor = function (t) {
              return this.length > t.length
                ? this.clone().iuxor(t)
                : t.clone().iuxor(this);
            }),
            (o.prototype.inotn = function (t) {
              r("number" === typeof t && t >= 0);
              var e = 0 | Math.ceil(t / 26),
                n = t % 26;
              this._expand(e), n > 0 && e--;
              for (var i = 0; i < e; i++)
                this.words[i] = 67108863 & ~this.words[i];
              return (
                n > 0 &&
                  (this.words[i] = ~this.words[i] & (67108863 >> (26 - n))),
                this.strip()
              );
            }),
            (o.prototype.notn = function (t) {
              return this.clone().inotn(t);
            }),
            (o.prototype.setn = function (t, e) {
              r("number" === typeof t && t >= 0);
              var n = (t / 26) | 0,
                i = t % 26;
              return (
                this._expand(n + 1),
                (this.words[n] = e
                  ? this.words[n] | (1 << i)
                  : this.words[n] & ~(1 << i)),
                this.strip()
              );
            }),
            (o.prototype.iadd = function (t) {
              var e, n, r;
              if (0 !== this.negative && 0 === t.negative)
                return (
                  (this.negative = 0),
                  (e = this.isub(t)),
                  (this.negative ^= 1),
                  this._normSign()
                );
              if (0 === this.negative && 0 !== t.negative)
                return (
                  (t.negative = 0),
                  (e = this.isub(t)),
                  (t.negative = 1),
                  e._normSign()
                );
              this.length > t.length
                ? ((n = this), (r = t))
                : ((n = t), (r = this));
              for (var i = 0, o = 0; o < r.length; o++)
                (e = (0 | n.words[o]) + (0 | r.words[o]) + i),
                  (this.words[o] = 67108863 & e),
                  (i = e >>> 26);
              for (; 0 !== i && o < n.length; o++)
                (e = (0 | n.words[o]) + i),
                  (this.words[o] = 67108863 & e),
                  (i = e >>> 26);
              if (((this.length = n.length), 0 !== i))
                (this.words[this.length] = i), this.length++;
              else if (n !== this)
                for (; o < n.length; o++) this.words[o] = n.words[o];
              return this;
            }),
            (o.prototype.add = function (t) {
              var e;
              return 0 !== t.negative && 0 === this.negative
                ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
                : 0 === t.negative && 0 !== this.negative
                ? ((this.negative = 0),
                  (e = t.sub(this)),
                  (this.negative = 1),
                  e)
                : this.length > t.length
                ? this.clone().iadd(t)
                : t.clone().iadd(this);
            }),
            (o.prototype.isub = function (t) {
              if (0 !== t.negative) {
                t.negative = 0;
                var e = this.iadd(t);
                return (t.negative = 1), e._normSign();
              }
              if (0 !== this.negative)
                return (
                  (this.negative = 0),
                  this.iadd(t),
                  (this.negative = 1),
                  this._normSign()
                );
              var n,
                r,
                i = this.cmp(t);
              if (0 === i)
                return (
                  (this.negative = 0),
                  (this.length = 1),
                  (this.words[0] = 0),
                  this
                );
              i > 0 ? ((n = this), (r = t)) : ((n = t), (r = this));
              for (var o = 0, a = 0; a < r.length; a++)
                (o = (e = (0 | n.words[a]) - (0 | r.words[a]) + o) >> 26),
                  (this.words[a] = 67108863 & e);
              for (; 0 !== o && a < n.length; a++)
                (o = (e = (0 | n.words[a]) + o) >> 26),
                  (this.words[a] = 67108863 & e);
              if (0 === o && a < n.length && n !== this)
                for (; a < n.length; a++) this.words[a] = n.words[a];
              return (
                (this.length = Math.max(this.length, a)),
                n !== this && (this.negative = 1),
                this.strip()
              );
            }),
            (o.prototype.sub = function (t) {
              return this.clone().isub(t);
            });
          var d = function (t, e, n) {
            var r,
              i,
              o,
              a = t.words,
              s = e.words,
              u = n.words,
              c = 0,
              l = 0 | a[0],
              h = 8191 & l,
              f = l >>> 13,
              d = 0 | a[1],
              p = 8191 & d,
              m = d >>> 13,
              v = 0 | a[2],
              g = 8191 & v,
              _ = v >>> 13,
              y = 0 | a[3],
              w = 8191 & y,
              b = y >>> 13,
              k = 0 | a[4],
              M = 8191 & k,
              x = k >>> 13,
              E = 0 | a[5],
              O = 8191 & E,
              C = E >>> 13,
              R = 0 | a[6],
              S = 8191 & R,
              T = R >>> 13,
              I = 0 | a[7],
              j = 8191 & I,
              A = I >>> 13,
              N = 0 | a[8],
              P = 8191 & N,
              L = N >>> 13,
              B = 0 | a[9],
              q = 8191 & B,
              U = B >>> 13,
              H = 0 | s[0],
              J = 8191 & H,
              D = H >>> 13,
              F = 0 | s[1],
              W = 8191 & F,
              z = F >>> 13,
              Y = 0 | s[2],
              K = 8191 & Y,
              V = Y >>> 13,
              Z = 0 | s[3],
              Q = 8191 & Z,
              $ = Z >>> 13,
              X = 0 | s[4],
              G = 8191 & X,
              tt = X >>> 13,
              et = 0 | s[5],
              nt = 8191 & et,
              rt = et >>> 13,
              it = 0 | s[6],
              ot = 8191 & it,
              at = it >>> 13,
              st = 0 | s[7],
              ut = 8191 & st,
              ct = st >>> 13,
              lt = 0 | s[8],
              ht = 8191 & lt,
              ft = lt >>> 13,
              dt = 0 | s[9],
              pt = 8191 & dt,
              mt = dt >>> 13;
            (n.negative = t.negative ^ e.negative), (n.length = 19);
            var vt =
              (((c + (r = Math.imul(h, J))) | 0) +
                ((8191 & (i = ((i = Math.imul(h, D)) + Math.imul(f, J)) | 0)) <<
                  13)) |
              0;
            (c =
              ((((o = Math.imul(f, D)) + (i >>> 13)) | 0) + (vt >>> 26)) | 0),
              (vt &= 67108863),
              (r = Math.imul(p, J)),
              (i = ((i = Math.imul(p, D)) + Math.imul(m, J)) | 0),
              (o = Math.imul(m, D));
            var gt =
              (((c + (r = (r + Math.imul(h, W)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(h, z)) | 0) + Math.imul(f, W)) | 0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(f, z)) | 0) + (i >>> 13)) | 0) +
                (gt >>> 26)) |
              0),
              (gt &= 67108863),
              (r = Math.imul(g, J)),
              (i = ((i = Math.imul(g, D)) + Math.imul(_, J)) | 0),
              (o = Math.imul(_, D)),
              (r = (r + Math.imul(p, W)) | 0),
              (i = ((i = (i + Math.imul(p, z)) | 0) + Math.imul(m, W)) | 0),
              (o = (o + Math.imul(m, z)) | 0);
            var _t =
              (((c + (r = (r + Math.imul(h, K)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(h, V)) | 0) + Math.imul(f, K)) | 0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(f, V)) | 0) + (i >>> 13)) | 0) +
                (_t >>> 26)) |
              0),
              (_t &= 67108863),
              (r = Math.imul(w, J)),
              (i = ((i = Math.imul(w, D)) + Math.imul(b, J)) | 0),
              (o = Math.imul(b, D)),
              (r = (r + Math.imul(g, W)) | 0),
              (i = ((i = (i + Math.imul(g, z)) | 0) + Math.imul(_, W)) | 0),
              (o = (o + Math.imul(_, z)) | 0),
              (r = (r + Math.imul(p, K)) | 0),
              (i = ((i = (i + Math.imul(p, V)) | 0) + Math.imul(m, K)) | 0),
              (o = (o + Math.imul(m, V)) | 0);
            var yt =
              (((c + (r = (r + Math.imul(h, Q)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(h, $)) | 0) + Math.imul(f, Q)) | 0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(f, $)) | 0) + (i >>> 13)) | 0) +
                (yt >>> 26)) |
              0),
              (yt &= 67108863),
              (r = Math.imul(M, J)),
              (i = ((i = Math.imul(M, D)) + Math.imul(x, J)) | 0),
              (o = Math.imul(x, D)),
              (r = (r + Math.imul(w, W)) | 0),
              (i = ((i = (i + Math.imul(w, z)) | 0) + Math.imul(b, W)) | 0),
              (o = (o + Math.imul(b, z)) | 0),
              (r = (r + Math.imul(g, K)) | 0),
              (i = ((i = (i + Math.imul(g, V)) | 0) + Math.imul(_, K)) | 0),
              (o = (o + Math.imul(_, V)) | 0),
              (r = (r + Math.imul(p, Q)) | 0),
              (i = ((i = (i + Math.imul(p, $)) | 0) + Math.imul(m, Q)) | 0),
              (o = (o + Math.imul(m, $)) | 0);
            var wt =
              (((c + (r = (r + Math.imul(h, G)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(h, tt)) | 0) + Math.imul(f, G)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(f, tt)) | 0) + (i >>> 13)) | 0) +
                (wt >>> 26)) |
              0),
              (wt &= 67108863),
              (r = Math.imul(O, J)),
              (i = ((i = Math.imul(O, D)) + Math.imul(C, J)) | 0),
              (o = Math.imul(C, D)),
              (r = (r + Math.imul(M, W)) | 0),
              (i = ((i = (i + Math.imul(M, z)) | 0) + Math.imul(x, W)) | 0),
              (o = (o + Math.imul(x, z)) | 0),
              (r = (r + Math.imul(w, K)) | 0),
              (i = ((i = (i + Math.imul(w, V)) | 0) + Math.imul(b, K)) | 0),
              (o = (o + Math.imul(b, V)) | 0),
              (r = (r + Math.imul(g, Q)) | 0),
              (i = ((i = (i + Math.imul(g, $)) | 0) + Math.imul(_, Q)) | 0),
              (o = (o + Math.imul(_, $)) | 0),
              (r = (r + Math.imul(p, G)) | 0),
              (i = ((i = (i + Math.imul(p, tt)) | 0) + Math.imul(m, G)) | 0),
              (o = (o + Math.imul(m, tt)) | 0);
            var bt =
              (((c + (r = (r + Math.imul(h, nt)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(h, rt)) | 0) + Math.imul(f, nt)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(f, rt)) | 0) + (i >>> 13)) | 0) +
                (bt >>> 26)) |
              0),
              (bt &= 67108863),
              (r = Math.imul(S, J)),
              (i = ((i = Math.imul(S, D)) + Math.imul(T, J)) | 0),
              (o = Math.imul(T, D)),
              (r = (r + Math.imul(O, W)) | 0),
              (i = ((i = (i + Math.imul(O, z)) | 0) + Math.imul(C, W)) | 0),
              (o = (o + Math.imul(C, z)) | 0),
              (r = (r + Math.imul(M, K)) | 0),
              (i = ((i = (i + Math.imul(M, V)) | 0) + Math.imul(x, K)) | 0),
              (o = (o + Math.imul(x, V)) | 0),
              (r = (r + Math.imul(w, Q)) | 0),
              (i = ((i = (i + Math.imul(w, $)) | 0) + Math.imul(b, Q)) | 0),
              (o = (o + Math.imul(b, $)) | 0),
              (r = (r + Math.imul(g, G)) | 0),
              (i = ((i = (i + Math.imul(g, tt)) | 0) + Math.imul(_, G)) | 0),
              (o = (o + Math.imul(_, tt)) | 0),
              (r = (r + Math.imul(p, nt)) | 0),
              (i = ((i = (i + Math.imul(p, rt)) | 0) + Math.imul(m, nt)) | 0),
              (o = (o + Math.imul(m, rt)) | 0);
            var kt =
              (((c + (r = (r + Math.imul(h, ot)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(h, at)) | 0) + Math.imul(f, ot)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(f, at)) | 0) + (i >>> 13)) | 0) +
                (kt >>> 26)) |
              0),
              (kt &= 67108863),
              (r = Math.imul(j, J)),
              (i = ((i = Math.imul(j, D)) + Math.imul(A, J)) | 0),
              (o = Math.imul(A, D)),
              (r = (r + Math.imul(S, W)) | 0),
              (i = ((i = (i + Math.imul(S, z)) | 0) + Math.imul(T, W)) | 0),
              (o = (o + Math.imul(T, z)) | 0),
              (r = (r + Math.imul(O, K)) | 0),
              (i = ((i = (i + Math.imul(O, V)) | 0) + Math.imul(C, K)) | 0),
              (o = (o + Math.imul(C, V)) | 0),
              (r = (r + Math.imul(M, Q)) | 0),
              (i = ((i = (i + Math.imul(M, $)) | 0) + Math.imul(x, Q)) | 0),
              (o = (o + Math.imul(x, $)) | 0),
              (r = (r + Math.imul(w, G)) | 0),
              (i = ((i = (i + Math.imul(w, tt)) | 0) + Math.imul(b, G)) | 0),
              (o = (o + Math.imul(b, tt)) | 0),
              (r = (r + Math.imul(g, nt)) | 0),
              (i = ((i = (i + Math.imul(g, rt)) | 0) + Math.imul(_, nt)) | 0),
              (o = (o + Math.imul(_, rt)) | 0),
              (r = (r + Math.imul(p, ot)) | 0),
              (i = ((i = (i + Math.imul(p, at)) | 0) + Math.imul(m, ot)) | 0),
              (o = (o + Math.imul(m, at)) | 0);
            var Mt =
              (((c + (r = (r + Math.imul(h, ut)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(h, ct)) | 0) + Math.imul(f, ut)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(f, ct)) | 0) + (i >>> 13)) | 0) +
                (Mt >>> 26)) |
              0),
              (Mt &= 67108863),
              (r = Math.imul(P, J)),
              (i = ((i = Math.imul(P, D)) + Math.imul(L, J)) | 0),
              (o = Math.imul(L, D)),
              (r = (r + Math.imul(j, W)) | 0),
              (i = ((i = (i + Math.imul(j, z)) | 0) + Math.imul(A, W)) | 0),
              (o = (o + Math.imul(A, z)) | 0),
              (r = (r + Math.imul(S, K)) | 0),
              (i = ((i = (i + Math.imul(S, V)) | 0) + Math.imul(T, K)) | 0),
              (o = (o + Math.imul(T, V)) | 0),
              (r = (r + Math.imul(O, Q)) | 0),
              (i = ((i = (i + Math.imul(O, $)) | 0) + Math.imul(C, Q)) | 0),
              (o = (o + Math.imul(C, $)) | 0),
              (r = (r + Math.imul(M, G)) | 0),
              (i = ((i = (i + Math.imul(M, tt)) | 0) + Math.imul(x, G)) | 0),
              (o = (o + Math.imul(x, tt)) | 0),
              (r = (r + Math.imul(w, nt)) | 0),
              (i = ((i = (i + Math.imul(w, rt)) | 0) + Math.imul(b, nt)) | 0),
              (o = (o + Math.imul(b, rt)) | 0),
              (r = (r + Math.imul(g, ot)) | 0),
              (i = ((i = (i + Math.imul(g, at)) | 0) + Math.imul(_, ot)) | 0),
              (o = (o + Math.imul(_, at)) | 0),
              (r = (r + Math.imul(p, ut)) | 0),
              (i = ((i = (i + Math.imul(p, ct)) | 0) + Math.imul(m, ut)) | 0),
              (o = (o + Math.imul(m, ct)) | 0);
            var xt =
              (((c + (r = (r + Math.imul(h, ht)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(h, ft)) | 0) + Math.imul(f, ht)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(f, ft)) | 0) + (i >>> 13)) | 0) +
                (xt >>> 26)) |
              0),
              (xt &= 67108863),
              (r = Math.imul(q, J)),
              (i = ((i = Math.imul(q, D)) + Math.imul(U, J)) | 0),
              (o = Math.imul(U, D)),
              (r = (r + Math.imul(P, W)) | 0),
              (i = ((i = (i + Math.imul(P, z)) | 0) + Math.imul(L, W)) | 0),
              (o = (o + Math.imul(L, z)) | 0),
              (r = (r + Math.imul(j, K)) | 0),
              (i = ((i = (i + Math.imul(j, V)) | 0) + Math.imul(A, K)) | 0),
              (o = (o + Math.imul(A, V)) | 0),
              (r = (r + Math.imul(S, Q)) | 0),
              (i = ((i = (i + Math.imul(S, $)) | 0) + Math.imul(T, Q)) | 0),
              (o = (o + Math.imul(T, $)) | 0),
              (r = (r + Math.imul(O, G)) | 0),
              (i = ((i = (i + Math.imul(O, tt)) | 0) + Math.imul(C, G)) | 0),
              (o = (o + Math.imul(C, tt)) | 0),
              (r = (r + Math.imul(M, nt)) | 0),
              (i = ((i = (i + Math.imul(M, rt)) | 0) + Math.imul(x, nt)) | 0),
              (o = (o + Math.imul(x, rt)) | 0),
              (r = (r + Math.imul(w, ot)) | 0),
              (i = ((i = (i + Math.imul(w, at)) | 0) + Math.imul(b, ot)) | 0),
              (o = (o + Math.imul(b, at)) | 0),
              (r = (r + Math.imul(g, ut)) | 0),
              (i = ((i = (i + Math.imul(g, ct)) | 0) + Math.imul(_, ut)) | 0),
              (o = (o + Math.imul(_, ct)) | 0),
              (r = (r + Math.imul(p, ht)) | 0),
              (i = ((i = (i + Math.imul(p, ft)) | 0) + Math.imul(m, ht)) | 0),
              (o = (o + Math.imul(m, ft)) | 0);
            var Et =
              (((c + (r = (r + Math.imul(h, pt)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(h, mt)) | 0) + Math.imul(f, pt)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(f, mt)) | 0) + (i >>> 13)) | 0) +
                (Et >>> 26)) |
              0),
              (Et &= 67108863),
              (r = Math.imul(q, W)),
              (i = ((i = Math.imul(q, z)) + Math.imul(U, W)) | 0),
              (o = Math.imul(U, z)),
              (r = (r + Math.imul(P, K)) | 0),
              (i = ((i = (i + Math.imul(P, V)) | 0) + Math.imul(L, K)) | 0),
              (o = (o + Math.imul(L, V)) | 0),
              (r = (r + Math.imul(j, Q)) | 0),
              (i = ((i = (i + Math.imul(j, $)) | 0) + Math.imul(A, Q)) | 0),
              (o = (o + Math.imul(A, $)) | 0),
              (r = (r + Math.imul(S, G)) | 0),
              (i = ((i = (i + Math.imul(S, tt)) | 0) + Math.imul(T, G)) | 0),
              (o = (o + Math.imul(T, tt)) | 0),
              (r = (r + Math.imul(O, nt)) | 0),
              (i = ((i = (i + Math.imul(O, rt)) | 0) + Math.imul(C, nt)) | 0),
              (o = (o + Math.imul(C, rt)) | 0),
              (r = (r + Math.imul(M, ot)) | 0),
              (i = ((i = (i + Math.imul(M, at)) | 0) + Math.imul(x, ot)) | 0),
              (o = (o + Math.imul(x, at)) | 0),
              (r = (r + Math.imul(w, ut)) | 0),
              (i = ((i = (i + Math.imul(w, ct)) | 0) + Math.imul(b, ut)) | 0),
              (o = (o + Math.imul(b, ct)) | 0),
              (r = (r + Math.imul(g, ht)) | 0),
              (i = ((i = (i + Math.imul(g, ft)) | 0) + Math.imul(_, ht)) | 0),
              (o = (o + Math.imul(_, ft)) | 0);
            var Ot =
              (((c + (r = (r + Math.imul(p, pt)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(p, mt)) | 0) + Math.imul(m, pt)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(m, mt)) | 0) + (i >>> 13)) | 0) +
                (Ot >>> 26)) |
              0),
              (Ot &= 67108863),
              (r = Math.imul(q, K)),
              (i = ((i = Math.imul(q, V)) + Math.imul(U, K)) | 0),
              (o = Math.imul(U, V)),
              (r = (r + Math.imul(P, Q)) | 0),
              (i = ((i = (i + Math.imul(P, $)) | 0) + Math.imul(L, Q)) | 0),
              (o = (o + Math.imul(L, $)) | 0),
              (r = (r + Math.imul(j, G)) | 0),
              (i = ((i = (i + Math.imul(j, tt)) | 0) + Math.imul(A, G)) | 0),
              (o = (o + Math.imul(A, tt)) | 0),
              (r = (r + Math.imul(S, nt)) | 0),
              (i = ((i = (i + Math.imul(S, rt)) | 0) + Math.imul(T, nt)) | 0),
              (o = (o + Math.imul(T, rt)) | 0),
              (r = (r + Math.imul(O, ot)) | 0),
              (i = ((i = (i + Math.imul(O, at)) | 0) + Math.imul(C, ot)) | 0),
              (o = (o + Math.imul(C, at)) | 0),
              (r = (r + Math.imul(M, ut)) | 0),
              (i = ((i = (i + Math.imul(M, ct)) | 0) + Math.imul(x, ut)) | 0),
              (o = (o + Math.imul(x, ct)) | 0),
              (r = (r + Math.imul(w, ht)) | 0),
              (i = ((i = (i + Math.imul(w, ft)) | 0) + Math.imul(b, ht)) | 0),
              (o = (o + Math.imul(b, ft)) | 0);
            var Ct =
              (((c + (r = (r + Math.imul(g, pt)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(g, mt)) | 0) + Math.imul(_, pt)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(_, mt)) | 0) + (i >>> 13)) | 0) +
                (Ct >>> 26)) |
              0),
              (Ct &= 67108863),
              (r = Math.imul(q, Q)),
              (i = ((i = Math.imul(q, $)) + Math.imul(U, Q)) | 0),
              (o = Math.imul(U, $)),
              (r = (r + Math.imul(P, G)) | 0),
              (i = ((i = (i + Math.imul(P, tt)) | 0) + Math.imul(L, G)) | 0),
              (o = (o + Math.imul(L, tt)) | 0),
              (r = (r + Math.imul(j, nt)) | 0),
              (i = ((i = (i + Math.imul(j, rt)) | 0) + Math.imul(A, nt)) | 0),
              (o = (o + Math.imul(A, rt)) | 0),
              (r = (r + Math.imul(S, ot)) | 0),
              (i = ((i = (i + Math.imul(S, at)) | 0) + Math.imul(T, ot)) | 0),
              (o = (o + Math.imul(T, at)) | 0),
              (r = (r + Math.imul(O, ut)) | 0),
              (i = ((i = (i + Math.imul(O, ct)) | 0) + Math.imul(C, ut)) | 0),
              (o = (o + Math.imul(C, ct)) | 0),
              (r = (r + Math.imul(M, ht)) | 0),
              (i = ((i = (i + Math.imul(M, ft)) | 0) + Math.imul(x, ht)) | 0),
              (o = (o + Math.imul(x, ft)) | 0);
            var Rt =
              (((c + (r = (r + Math.imul(w, pt)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(w, mt)) | 0) + Math.imul(b, pt)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(b, mt)) | 0) + (i >>> 13)) | 0) +
                (Rt >>> 26)) |
              0),
              (Rt &= 67108863),
              (r = Math.imul(q, G)),
              (i = ((i = Math.imul(q, tt)) + Math.imul(U, G)) | 0),
              (o = Math.imul(U, tt)),
              (r = (r + Math.imul(P, nt)) | 0),
              (i = ((i = (i + Math.imul(P, rt)) | 0) + Math.imul(L, nt)) | 0),
              (o = (o + Math.imul(L, rt)) | 0),
              (r = (r + Math.imul(j, ot)) | 0),
              (i = ((i = (i + Math.imul(j, at)) | 0) + Math.imul(A, ot)) | 0),
              (o = (o + Math.imul(A, at)) | 0),
              (r = (r + Math.imul(S, ut)) | 0),
              (i = ((i = (i + Math.imul(S, ct)) | 0) + Math.imul(T, ut)) | 0),
              (o = (o + Math.imul(T, ct)) | 0),
              (r = (r + Math.imul(O, ht)) | 0),
              (i = ((i = (i + Math.imul(O, ft)) | 0) + Math.imul(C, ht)) | 0),
              (o = (o + Math.imul(C, ft)) | 0);
            var St =
              (((c + (r = (r + Math.imul(M, pt)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(M, mt)) | 0) + Math.imul(x, pt)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(x, mt)) | 0) + (i >>> 13)) | 0) +
                (St >>> 26)) |
              0),
              (St &= 67108863),
              (r = Math.imul(q, nt)),
              (i = ((i = Math.imul(q, rt)) + Math.imul(U, nt)) | 0),
              (o = Math.imul(U, rt)),
              (r = (r + Math.imul(P, ot)) | 0),
              (i = ((i = (i + Math.imul(P, at)) | 0) + Math.imul(L, ot)) | 0),
              (o = (o + Math.imul(L, at)) | 0),
              (r = (r + Math.imul(j, ut)) | 0),
              (i = ((i = (i + Math.imul(j, ct)) | 0) + Math.imul(A, ut)) | 0),
              (o = (o + Math.imul(A, ct)) | 0),
              (r = (r + Math.imul(S, ht)) | 0),
              (i = ((i = (i + Math.imul(S, ft)) | 0) + Math.imul(T, ht)) | 0),
              (o = (o + Math.imul(T, ft)) | 0);
            var Tt =
              (((c + (r = (r + Math.imul(O, pt)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(O, mt)) | 0) + Math.imul(C, pt)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(C, mt)) | 0) + (i >>> 13)) | 0) +
                (Tt >>> 26)) |
              0),
              (Tt &= 67108863),
              (r = Math.imul(q, ot)),
              (i = ((i = Math.imul(q, at)) + Math.imul(U, ot)) | 0),
              (o = Math.imul(U, at)),
              (r = (r + Math.imul(P, ut)) | 0),
              (i = ((i = (i + Math.imul(P, ct)) | 0) + Math.imul(L, ut)) | 0),
              (o = (o + Math.imul(L, ct)) | 0),
              (r = (r + Math.imul(j, ht)) | 0),
              (i = ((i = (i + Math.imul(j, ft)) | 0) + Math.imul(A, ht)) | 0),
              (o = (o + Math.imul(A, ft)) | 0);
            var It =
              (((c + (r = (r + Math.imul(S, pt)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(S, mt)) | 0) + Math.imul(T, pt)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(T, mt)) | 0) + (i >>> 13)) | 0) +
                (It >>> 26)) |
              0),
              (It &= 67108863),
              (r = Math.imul(q, ut)),
              (i = ((i = Math.imul(q, ct)) + Math.imul(U, ut)) | 0),
              (o = Math.imul(U, ct)),
              (r = (r + Math.imul(P, ht)) | 0),
              (i = ((i = (i + Math.imul(P, ft)) | 0) + Math.imul(L, ht)) | 0),
              (o = (o + Math.imul(L, ft)) | 0);
            var jt =
              (((c + (r = (r + Math.imul(j, pt)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(j, mt)) | 0) + Math.imul(A, pt)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(A, mt)) | 0) + (i >>> 13)) | 0) +
                (jt >>> 26)) |
              0),
              (jt &= 67108863),
              (r = Math.imul(q, ht)),
              (i = ((i = Math.imul(q, ft)) + Math.imul(U, ht)) | 0),
              (o = Math.imul(U, ft));
            var At =
              (((c + (r = (r + Math.imul(P, pt)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(P, mt)) | 0) + Math.imul(L, pt)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(L, mt)) | 0) + (i >>> 13)) | 0) +
                (At >>> 26)) |
              0),
              (At &= 67108863);
            var Nt =
              (((c + (r = Math.imul(q, pt))) | 0) +
                ((8191 &
                  (i = ((i = Math.imul(q, mt)) + Math.imul(U, pt)) | 0)) <<
                  13)) |
              0;
            return (
              (c =
                ((((o = Math.imul(U, mt)) + (i >>> 13)) | 0) + (Nt >>> 26)) |
                0),
              (Nt &= 67108863),
              (u[0] = vt),
              (u[1] = gt),
              (u[2] = _t),
              (u[3] = yt),
              (u[4] = wt),
              (u[5] = bt),
              (u[6] = kt),
              (u[7] = Mt),
              (u[8] = xt),
              (u[9] = Et),
              (u[10] = Ot),
              (u[11] = Ct),
              (u[12] = Rt),
              (u[13] = St),
              (u[14] = Tt),
              (u[15] = It),
              (u[16] = jt),
              (u[17] = At),
              (u[18] = Nt),
              0 !== c && ((u[19] = c), n.length++),
              n
            );
          };
          function p(t, e, n) {
            return new m().mulp(t, e, n);
          }
          function m(t, e) {
            (this.x = t), (this.y = e);
          }
          Math.imul || (d = f),
            (o.prototype.mulTo = function (t, e) {
              var n,
                r = this.length + t.length;
              return (
                (n =
                  10 === this.length && 10 === t.length
                    ? d(this, t, e)
                    : r < 63
                    ? f(this, t, e)
                    : r < 1024
                    ? (function (t, e, n) {
                        (n.negative = e.negative ^ t.negative),
                          (n.length = t.length + e.length);
                        for (var r = 0, i = 0, o = 0; o < n.length - 1; o++) {
                          var a = i;
                          i = 0;
                          for (
                            var s = 67108863 & r,
                              u = Math.min(o, e.length - 1),
                              c = Math.max(0, o - t.length + 1);
                            c <= u;
                            c++
                          ) {
                            var l = o - c,
                              h = (0 | t.words[l]) * (0 | e.words[c]),
                              f = 67108863 & h;
                            (s = 67108863 & (f = (f + s) | 0)),
                              (i +=
                                (a =
                                  ((a = (a + ((h / 67108864) | 0)) | 0) +
                                    (f >>> 26)) |
                                  0) >>> 26),
                              (a &= 67108863);
                          }
                          (n.words[o] = s), (r = a), (a = i);
                        }
                        return (
                          0 !== r ? (n.words[o] = r) : n.length--, n.strip()
                        );
                      })(this, t, e)
                    : p(this, t, e)),
                n
              );
            }),
            (m.prototype.makeRBT = function (t) {
              for (
                var e = new Array(t), n = o.prototype._countBits(t) - 1, r = 0;
                r < t;
                r++
              )
                e[r] = this.revBin(r, n, t);
              return e;
            }),
            (m.prototype.revBin = function (t, e, n) {
              if (0 === t || t === n - 1) return t;
              for (var r = 0, i = 0; i < e; i++)
                (r |= (1 & t) << (e - i - 1)), (t >>= 1);
              return r;
            }),
            (m.prototype.permute = function (t, e, n, r, i, o) {
              for (var a = 0; a < o; a++) (r[a] = e[t[a]]), (i[a] = n[t[a]]);
            }),
            (m.prototype.transform = function (t, e, n, r, i, o) {
              this.permute(o, t, e, n, r, i);
              for (var a = 1; a < i; a <<= 1)
                for (
                  var s = a << 1,
                    u = Math.cos((2 * Math.PI) / s),
                    c = Math.sin((2 * Math.PI) / s),
                    l = 0;
                  l < i;
                  l += s
                )
                  for (var h = u, f = c, d = 0; d < a; d++) {
                    var p = n[l + d],
                      m = r[l + d],
                      v = n[l + d + a],
                      g = r[l + d + a],
                      _ = h * v - f * g;
                    (g = h * g + f * v),
                      (v = _),
                      (n[l + d] = p + v),
                      (r[l + d] = m + g),
                      (n[l + d + a] = p - v),
                      (r[l + d + a] = m - g),
                      d !== s &&
                        ((_ = u * h - c * f), (f = u * f + c * h), (h = _));
                  }
            }),
            (m.prototype.guessLen13b = function (t, e) {
              var n = 1 | Math.max(e, t),
                r = 1 & n,
                i = 0;
              for (n = (n / 2) | 0; n; n >>>= 1) i++;
              return 1 << (i + 1 + r);
            }),
            (m.prototype.conjugate = function (t, e, n) {
              if (!(n <= 1))
                for (var r = 0; r < n / 2; r++) {
                  var i = t[r];
                  (t[r] = t[n - r - 1]),
                    (t[n - r - 1] = i),
                    (i = e[r]),
                    (e[r] = -e[n - r - 1]),
                    (e[n - r - 1] = -i);
                }
            }),
            (m.prototype.normalize13b = function (t, e) {
              for (var n = 0, r = 0; r < e / 2; r++) {
                var i =
                  8192 * Math.round(t[2 * r + 1] / e) +
                  Math.round(t[2 * r] / e) +
                  n;
                (t[r] = 67108863 & i),
                  (n = i < 67108864 ? 0 : (i / 67108864) | 0);
              }
              return t;
            }),
            (m.prototype.convert13b = function (t, e, n, i) {
              for (var o = 0, a = 0; a < e; a++)
                (o += 0 | t[a]),
                  (n[2 * a] = 8191 & o),
                  (o >>>= 13),
                  (n[2 * a + 1] = 8191 & o),
                  (o >>>= 13);
              for (a = 2 * e; a < i; ++a) n[a] = 0;
              r(0 === o), r(0 === (-8192 & o));
            }),
            (m.prototype.stub = function (t) {
              for (var e = new Array(t), n = 0; n < t; n++) e[n] = 0;
              return e;
            }),
            (m.prototype.mulp = function (t, e, n) {
              var r = 2 * this.guessLen13b(t.length, e.length),
                i = this.makeRBT(r),
                o = this.stub(r),
                a = new Array(r),
                s = new Array(r),
                u = new Array(r),
                c = new Array(r),
                l = new Array(r),
                h = new Array(r),
                f = n.words;
              (f.length = r),
                this.convert13b(t.words, t.length, a, r),
                this.convert13b(e.words, e.length, c, r),
                this.transform(a, o, s, u, r, i),
                this.transform(c, o, l, h, r, i);
              for (var d = 0; d < r; d++) {
                var p = s[d] * l[d] - u[d] * h[d];
                (u[d] = s[d] * h[d] + u[d] * l[d]), (s[d] = p);
              }
              return (
                this.conjugate(s, u, r),
                this.transform(s, u, f, o, r, i),
                this.conjugate(f, o, r),
                this.normalize13b(f, r),
                (n.negative = t.negative ^ e.negative),
                (n.length = t.length + e.length),
                n.strip()
              );
            }),
            (o.prototype.mul = function (t) {
              var e = new o(null);
              return (
                (e.words = new Array(this.length + t.length)), this.mulTo(t, e)
              );
            }),
            (o.prototype.mulf = function (t) {
              var e = new o(null);
              return (
                (e.words = new Array(this.length + t.length)), p(this, t, e)
              );
            }),
            (o.prototype.imul = function (t) {
              return this.clone().mulTo(t, this);
            }),
            (o.prototype.imuln = function (t) {
              r("number" === typeof t), r(t < 67108864);
              for (var e = 0, n = 0; n < this.length; n++) {
                var i = (0 | this.words[n]) * t,
                  o = (67108863 & i) + (67108863 & e);
                (e >>= 26),
                  (e += (i / 67108864) | 0),
                  (e += o >>> 26),
                  (this.words[n] = 67108863 & o);
              }
              return 0 !== e && ((this.words[n] = e), this.length++), this;
            }),
            (o.prototype.muln = function (t) {
              return this.clone().imuln(t);
            }),
            (o.prototype.sqr = function () {
              return this.mul(this);
            }),
            (o.prototype.isqr = function () {
              return this.imul(this.clone());
            }),
            (o.prototype.pow = function (t) {
              var e = (function (t) {
                for (
                  var e = new Array(t.bitLength()), n = 0;
                  n < e.length;
                  n++
                ) {
                  var r = (n / 26) | 0,
                    i = n % 26;
                  e[n] = (t.words[r] & (1 << i)) >>> i;
                }
                return e;
              })(t);
              if (0 === e.length) return new o(1);
              for (
                var n = this, r = 0;
                r < e.length && 0 === e[r];
                r++, n = n.sqr()
              );
              if (++r < e.length)
                for (var i = n.sqr(); r < e.length; r++, i = i.sqr())
                  0 !== e[r] && (n = n.mul(i));
              return n;
            }),
            (o.prototype.iushln = function (t) {
              r("number" === typeof t && t >= 0);
              var e,
                n = t % 26,
                i = (t - n) / 26,
                o = (67108863 >>> (26 - n)) << (26 - n);
              if (0 !== n) {
                var a = 0;
                for (e = 0; e < this.length; e++) {
                  var s = this.words[e] & o,
                    u = ((0 | this.words[e]) - s) << n;
                  (this.words[e] = u | a), (a = s >>> (26 - n));
                }
                a && ((this.words[e] = a), this.length++);
              }
              if (0 !== i) {
                for (e = this.length - 1; e >= 0; e--)
                  this.words[e + i] = this.words[e];
                for (e = 0; e < i; e++) this.words[e] = 0;
                this.length += i;
              }
              return this.strip();
            }),
            (o.prototype.ishln = function (t) {
              return r(0 === this.negative), this.iushln(t);
            }),
            (o.prototype.iushrn = function (t, e, n) {
              var i;
              r("number" === typeof t && t >= 0),
                (i = e ? (e - (e % 26)) / 26 : 0);
              var o = t % 26,
                a = Math.min((t - o) / 26, this.length),
                s = 67108863 ^ ((67108863 >>> o) << o),
                u = n;
              if (((i -= a), (i = Math.max(0, i)), u)) {
                for (var c = 0; c < a; c++) u.words[c] = this.words[c];
                u.length = a;
              }
              if (0 === a);
              else if (this.length > a)
                for (this.length -= a, c = 0; c < this.length; c++)
                  this.words[c] = this.words[c + a];
              else (this.words[0] = 0), (this.length = 1);
              var l = 0;
              for (c = this.length - 1; c >= 0 && (0 !== l || c >= i); c--) {
                var h = 0 | this.words[c];
                (this.words[c] = (l << (26 - o)) | (h >>> o)), (l = h & s);
              }
              return (
                u && 0 !== l && (u.words[u.length++] = l),
                0 === this.length && ((this.words[0] = 0), (this.length = 1)),
                this.strip()
              );
            }),
            (o.prototype.ishrn = function (t, e, n) {
              return r(0 === this.negative), this.iushrn(t, e, n);
            }),
            (o.prototype.shln = function (t) {
              return this.clone().ishln(t);
            }),
            (o.prototype.ushln = function (t) {
              return this.clone().iushln(t);
            }),
            (o.prototype.shrn = function (t) {
              return this.clone().ishrn(t);
            }),
            (o.prototype.ushrn = function (t) {
              return this.clone().iushrn(t);
            }),
            (o.prototype.testn = function (t) {
              r("number" === typeof t && t >= 0);
              var e = t % 26,
                n = (t - e) / 26,
                i = 1 << e;
              return !(this.length <= n) && !!(this.words[n] & i);
            }),
            (o.prototype.imaskn = function (t) {
              r("number" === typeof t && t >= 0);
              var e = t % 26,
                n = (t - e) / 26;
              if (
                (r(
                  0 === this.negative,
                  "imaskn works only with positive numbers"
                ),
                this.length <= n)
              )
                return this;
              if (
                (0 !== e && n++,
                (this.length = Math.min(n, this.length)),
                0 !== e)
              ) {
                var i = 67108863 ^ ((67108863 >>> e) << e);
                this.words[this.length - 1] &= i;
              }
              return this.strip();
            }),
            (o.prototype.maskn = function (t) {
              return this.clone().imaskn(t);
            }),
            (o.prototype.iaddn = function (t) {
              return (
                r("number" === typeof t),
                r(t < 67108864),
                t < 0
                  ? this.isubn(-t)
                  : 0 !== this.negative
                  ? 1 === this.length && (0 | this.words[0]) < t
                    ? ((this.words[0] = t - (0 | this.words[0])),
                      (this.negative = 0),
                      this)
                    : ((this.negative = 0),
                      this.isubn(t),
                      (this.negative = 1),
                      this)
                  : this._iaddn(t)
              );
            }),
            (o.prototype._iaddn = function (t) {
              this.words[0] += t;
              for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
                (this.words[e] -= 67108864),
                  e === this.length - 1
                    ? (this.words[e + 1] = 1)
                    : this.words[e + 1]++;
              return (this.length = Math.max(this.length, e + 1)), this;
            }),
            (o.prototype.isubn = function (t) {
              if ((r("number" === typeof t), r(t < 67108864), t < 0))
                return this.iaddn(-t);
              if (0 !== this.negative)
                return (
                  (this.negative = 0), this.iaddn(t), (this.negative = 1), this
                );
              if (
                ((this.words[0] -= t), 1 === this.length && this.words[0] < 0)
              )
                (this.words[0] = -this.words[0]), (this.negative = 1);
              else
                for (var e = 0; e < this.length && this.words[e] < 0; e++)
                  (this.words[e] += 67108864), (this.words[e + 1] -= 1);
              return this.strip();
            }),
            (o.prototype.addn = function (t) {
              return this.clone().iaddn(t);
            }),
            (o.prototype.subn = function (t) {
              return this.clone().isubn(t);
            }),
            (o.prototype.iabs = function () {
              return (this.negative = 0), this;
            }),
            (o.prototype.abs = function () {
              return this.clone().iabs();
            }),
            (o.prototype._ishlnsubmul = function (t, e, n) {
              var i,
                o,
                a = t.length + n;
              this._expand(a);
              var s = 0;
              for (i = 0; i < t.length; i++) {
                o = (0 | this.words[i + n]) + s;
                var u = (0 | t.words[i]) * e;
                (s = ((o -= 67108863 & u) >> 26) - ((u / 67108864) | 0)),
                  (this.words[i + n] = 67108863 & o);
              }
              for (; i < this.length - n; i++)
                (s = (o = (0 | this.words[i + n]) + s) >> 26),
                  (this.words[i + n] = 67108863 & o);
              if (0 === s) return this.strip();
              for (r(-1 === s), s = 0, i = 0; i < this.length; i++)
                (s = (o = -(0 | this.words[i]) + s) >> 26),
                  (this.words[i] = 67108863 & o);
              return (this.negative = 1), this.strip();
            }),
            (o.prototype._wordDiv = function (t, e) {
              var n = (this.length, t.length),
                r = this.clone(),
                i = t,
                a = 0 | i.words[i.length - 1];
              0 !== (n = 26 - this._countBits(a)) &&
                ((i = i.ushln(n)),
                r.iushln(n),
                (a = 0 | i.words[i.length - 1]));
              var s,
                u = r.length - i.length;
              if ("mod" !== e) {
                ((s = new o(null)).length = u + 1),
                  (s.words = new Array(s.length));
                for (var c = 0; c < s.length; c++) s.words[c] = 0;
              }
              var l = r.clone()._ishlnsubmul(i, 1, u);
              0 === l.negative && ((r = l), s && (s.words[u] = 1));
              for (var h = u - 1; h >= 0; h--) {
                var f =
                  67108864 * (0 | r.words[i.length + h]) +
                  (0 | r.words[i.length + h - 1]);
                for (
                  f = Math.min((f / a) | 0, 67108863), r._ishlnsubmul(i, f, h);
                  0 !== r.negative;

                )
                  f--,
                    (r.negative = 0),
                    r._ishlnsubmul(i, 1, h),
                    r.isZero() || (r.negative ^= 1);
                s && (s.words[h] = f);
              }
              return (
                s && s.strip(),
                r.strip(),
                "div" !== e && 0 !== n && r.iushrn(n),
                { div: s || null, mod: r }
              );
            }),
            (o.prototype.divmod = function (t, e, n) {
              return (
                r(!t.isZero()),
                this.isZero()
                  ? { div: new o(0), mod: new o(0) }
                  : 0 !== this.negative && 0 === t.negative
                  ? ((s = this.neg().divmod(t, e)),
                    "mod" !== e && (i = s.div.neg()),
                    "div" !== e &&
                      ((a = s.mod.neg()), n && 0 !== a.negative && a.iadd(t)),
                    { div: i, mod: a })
                  : 0 === this.negative && 0 !== t.negative
                  ? ((s = this.divmod(t.neg(), e)),
                    "mod" !== e && (i = s.div.neg()),
                    { div: i, mod: s.mod })
                  : 0 !== (this.negative & t.negative)
                  ? ((s = this.neg().divmod(t.neg(), e)),
                    "div" !== e &&
                      ((a = s.mod.neg()), n && 0 !== a.negative && a.isub(t)),
                    { div: s.div, mod: a })
                  : t.length > this.length || this.cmp(t) < 0
                  ? { div: new o(0), mod: this }
                  : 1 === t.length
                  ? "div" === e
                    ? { div: this.divn(t.words[0]), mod: null }
                    : "mod" === e
                    ? { div: null, mod: new o(this.modn(t.words[0])) }
                    : {
                        div: this.divn(t.words[0]),
                        mod: new o(this.modn(t.words[0])),
                      }
                  : this._wordDiv(t, e)
              );
              var i, a, s;
            }),
            (o.prototype.div = function (t) {
              return this.divmod(t, "div", !1).div;
            }),
            (o.prototype.mod = function (t) {
              return this.divmod(t, "mod", !1).mod;
            }),
            (o.prototype.umod = function (t) {
              return this.divmod(t, "mod", !0).mod;
            }),
            (o.prototype.divRound = function (t) {
              var e = this.divmod(t);
              if (e.mod.isZero()) return e.div;
              var n = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                r = t.ushrn(1),
                i = t.andln(1),
                o = n.cmp(r);
              return o < 0 || (1 === i && 0 === o)
                ? e.div
                : 0 !== e.div.negative
                ? e.div.isubn(1)
                : e.div.iaddn(1);
            }),
            (o.prototype.modn = function (t) {
              r(t <= 67108863);
              for (
                var e = (1 << 26) % t, n = 0, i = this.length - 1;
                i >= 0;
                i--
              )
                n = (e * n + (0 | this.words[i])) % t;
              return n;
            }),
            (o.prototype.idivn = function (t) {
              r(t <= 67108863);
              for (var e = 0, n = this.length - 1; n >= 0; n--) {
                var i = (0 | this.words[n]) + 67108864 * e;
                (this.words[n] = (i / t) | 0), (e = i % t);
              }
              return this.strip();
            }),
            (o.prototype.divn = function (t) {
              return this.clone().idivn(t);
            }),
            (o.prototype.egcd = function (t) {
              r(0 === t.negative), r(!t.isZero());
              var e = this,
                n = t.clone();
              e = 0 !== e.negative ? e.umod(t) : e.clone();
              for (
                var i = new o(1),
                  a = new o(0),
                  s = new o(0),
                  u = new o(1),
                  c = 0;
                e.isEven() && n.isEven();

              )
                e.iushrn(1), n.iushrn(1), ++c;
              for (var l = n.clone(), h = e.clone(); !e.isZero(); ) {
                for (
                  var f = 0, d = 1;
                  0 === (e.words[0] & d) && f < 26;
                  ++f, d <<= 1
                );
                if (f > 0)
                  for (e.iushrn(f); f-- > 0; )
                    (i.isOdd() || a.isOdd()) && (i.iadd(l), a.isub(h)),
                      i.iushrn(1),
                      a.iushrn(1);
                for (
                  var p = 0, m = 1;
                  0 === (n.words[0] & m) && p < 26;
                  ++p, m <<= 1
                );
                if (p > 0)
                  for (n.iushrn(p); p-- > 0; )
                    (s.isOdd() || u.isOdd()) && (s.iadd(l), u.isub(h)),
                      s.iushrn(1),
                      u.iushrn(1);
                e.cmp(n) >= 0
                  ? (e.isub(n), i.isub(s), a.isub(u))
                  : (n.isub(e), s.isub(i), u.isub(a));
              }
              return { a: s, b: u, gcd: n.iushln(c) };
            }),
            (o.prototype._invmp = function (t) {
              r(0 === t.negative), r(!t.isZero());
              var e = this,
                n = t.clone();
              e = 0 !== e.negative ? e.umod(t) : e.clone();
              for (
                var i, a = new o(1), s = new o(0), u = n.clone();
                e.cmpn(1) > 0 && n.cmpn(1) > 0;

              ) {
                for (
                  var c = 0, l = 1;
                  0 === (e.words[0] & l) && c < 26;
                  ++c, l <<= 1
                );
                if (c > 0)
                  for (e.iushrn(c); c-- > 0; )
                    a.isOdd() && a.iadd(u), a.iushrn(1);
                for (
                  var h = 0, f = 1;
                  0 === (n.words[0] & f) && h < 26;
                  ++h, f <<= 1
                );
                if (h > 0)
                  for (n.iushrn(h); h-- > 0; )
                    s.isOdd() && s.iadd(u), s.iushrn(1);
                e.cmp(n) >= 0 ? (e.isub(n), a.isub(s)) : (n.isub(e), s.isub(a));
              }
              return (i = 0 === e.cmpn(1) ? a : s).cmpn(0) < 0 && i.iadd(t), i;
            }),
            (o.prototype.gcd = function (t) {
              if (this.isZero()) return t.abs();
              if (t.isZero()) return this.abs();
              var e = this.clone(),
                n = t.clone();
              (e.negative = 0), (n.negative = 0);
              for (var r = 0; e.isEven() && n.isEven(); r++)
                e.iushrn(1), n.iushrn(1);
              for (;;) {
                for (; e.isEven(); ) e.iushrn(1);
                for (; n.isEven(); ) n.iushrn(1);
                var i = e.cmp(n);
                if (i < 0) {
                  var o = e;
                  (e = n), (n = o);
                } else if (0 === i || 0 === n.cmpn(1)) break;
                e.isub(n);
              }
              return n.iushln(r);
            }),
            (o.prototype.invm = function (t) {
              return this.egcd(t).a.umod(t);
            }),
            (o.prototype.isEven = function () {
              return 0 === (1 & this.words[0]);
            }),
            (o.prototype.isOdd = function () {
              return 1 === (1 & this.words[0]);
            }),
            (o.prototype.andln = function (t) {
              return this.words[0] & t;
            }),
            (o.prototype.bincn = function (t) {
              r("number" === typeof t);
              var e = t % 26,
                n = (t - e) / 26,
                i = 1 << e;
              if (this.length <= n)
                return this._expand(n + 1), (this.words[n] |= i), this;
              for (var o = i, a = n; 0 !== o && a < this.length; a++) {
                var s = 0 | this.words[a];
                (o = (s += o) >>> 26), (s &= 67108863), (this.words[a] = s);
              }
              return 0 !== o && ((this.words[a] = o), this.length++), this;
            }),
            (o.prototype.isZero = function () {
              return 1 === this.length && 0 === this.words[0];
            }),
            (o.prototype.cmpn = function (t) {
              var e,
                n = t < 0;
              if (0 !== this.negative && !n) return -1;
              if (0 === this.negative && n) return 1;
              if ((this.strip(), this.length > 1)) e = 1;
              else {
                n && (t = -t), r(t <= 67108863, "Number is too big");
                var i = 0 | this.words[0];
                e = i === t ? 0 : i < t ? -1 : 1;
              }
              return 0 !== this.negative ? 0 | -e : e;
            }),
            (o.prototype.cmp = function (t) {
              if (0 !== this.negative && 0 === t.negative) return -1;
              if (0 === this.negative && 0 !== t.negative) return 1;
              var e = this.ucmp(t);
              return 0 !== this.negative ? 0 | -e : e;
            }),
            (o.prototype.ucmp = function (t) {
              if (this.length > t.length) return 1;
              if (this.length < t.length) return -1;
              for (var e = 0, n = this.length - 1; n >= 0; n--) {
                var r = 0 | this.words[n],
                  i = 0 | t.words[n];
                if (r !== i) {
                  r < i ? (e = -1) : r > i && (e = 1);
                  break;
                }
              }
              return e;
            }),
            (o.prototype.gtn = function (t) {
              return 1 === this.cmpn(t);
            }),
            (o.prototype.gt = function (t) {
              return 1 === this.cmp(t);
            }),
            (o.prototype.gten = function (t) {
              return this.cmpn(t) >= 0;
            }),
            (o.prototype.gte = function (t) {
              return this.cmp(t) >= 0;
            }),
            (o.prototype.ltn = function (t) {
              return -1 === this.cmpn(t);
            }),
            (o.prototype.lt = function (t) {
              return -1 === this.cmp(t);
            }),
            (o.prototype.lten = function (t) {
              return this.cmpn(t) <= 0;
            }),
            (o.prototype.lte = function (t) {
              return this.cmp(t) <= 0;
            }),
            (o.prototype.eqn = function (t) {
              return 0 === this.cmpn(t);
            }),
            (o.prototype.eq = function (t) {
              return 0 === this.cmp(t);
            }),
            (o.red = function (t) {
              return new k(t);
            }),
            (o.prototype.toRed = function (t) {
              return (
                r(!this.red, "Already a number in reduction context"),
                r(0 === this.negative, "red works only with positives"),
                t.convertTo(this)._forceRed(t)
              );
            }),
            (o.prototype.fromRed = function () {
              return (
                r(
                  this.red,
                  "fromRed works only with numbers in reduction context"
                ),
                this.red.convertFrom(this)
              );
            }),
            (o.prototype._forceRed = function (t) {
              return (this.red = t), this;
            }),
            (o.prototype.forceRed = function (t) {
              return (
                r(!this.red, "Already a number in reduction context"),
                this._forceRed(t)
              );
            }),
            (o.prototype.redAdd = function (t) {
              return (
                r(this.red, "redAdd works only with red numbers"),
                this.red.add(this, t)
              );
            }),
            (o.prototype.redIAdd = function (t) {
              return (
                r(this.red, "redIAdd works only with red numbers"),
                this.red.iadd(this, t)
              );
            }),
            (o.prototype.redSub = function (t) {
              return (
                r(this.red, "redSub works only with red numbers"),
                this.red.sub(this, t)
              );
            }),
            (o.prototype.redISub = function (t) {
              return (
                r(this.red, "redISub works only with red numbers"),
                this.red.isub(this, t)
              );
            }),
            (o.prototype.redShl = function (t) {
              return (
                r(this.red, "redShl works only with red numbers"),
                this.red.shl(this, t)
              );
            }),
            (o.prototype.redMul = function (t) {
              return (
                r(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.mul(this, t)
              );
            }),
            (o.prototype.redIMul = function (t) {
              return (
                r(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.imul(this, t)
              );
            }),
            (o.prototype.redSqr = function () {
              return (
                r(this.red, "redSqr works only with red numbers"),
                this.red._verify1(this),
                this.red.sqr(this)
              );
            }),
            (o.prototype.redISqr = function () {
              return (
                r(this.red, "redISqr works only with red numbers"),
                this.red._verify1(this),
                this.red.isqr(this)
              );
            }),
            (o.prototype.redSqrt = function () {
              return (
                r(this.red, "redSqrt works only with red numbers"),
                this.red._verify1(this),
                this.red.sqrt(this)
              );
            }),
            (o.prototype.redInvm = function () {
              return (
                r(this.red, "redInvm works only with red numbers"),
                this.red._verify1(this),
                this.red.invm(this)
              );
            }),
            (o.prototype.redNeg = function () {
              return (
                r(this.red, "redNeg works only with red numbers"),
                this.red._verify1(this),
                this.red.neg(this)
              );
            }),
            (o.prototype.redPow = function (t) {
              return (
                r(this.red && !t.red, "redPow(normalNum)"),
                this.red._verify1(this),
                this.red.pow(this, t)
              );
            });
          var v = { k256: null, p224: null, p192: null, p25519: null };
          function g(t, e) {
            (this.name = t),
              (this.p = new o(e, 16)),
              (this.n = this.p.bitLength()),
              (this.k = new o(1).iushln(this.n).isub(this.p)),
              (this.tmp = this._tmp());
          }
          function _() {
            g.call(
              this,
              "k256",
              "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
            );
          }
          function y() {
            g.call(
              this,
              "p224",
              "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
            );
          }
          function w() {
            g.call(
              this,
              "p192",
              "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
            );
          }
          function b() {
            g.call(
              this,
              "25519",
              "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
            );
          }
          function k(t) {
            if ("string" === typeof t) {
              var e = o._prime(t);
              (this.m = e.p), (this.prime = e);
            } else
              r(t.gtn(1), "modulus must be greater than 1"),
                (this.m = t),
                (this.prime = null);
          }
          function M(t) {
            k.call(this, t),
              (this.shift = this.m.bitLength()),
              this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
              (this.r = new o(1).iushln(this.shift)),
              (this.r2 = this.imod(this.r.sqr())),
              (this.rinv = this.r._invmp(this.m)),
              (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
              (this.minv = this.minv.umod(this.r)),
              (this.minv = this.r.sub(this.minv));
          }
          (g.prototype._tmp = function () {
            var t = new o(null);
            return (t.words = new Array(Math.ceil(this.n / 13))), t;
          }),
            (g.prototype.ireduce = function (t) {
              var e,
                n = t;
              do {
                this.split(n, this.tmp),
                  (e = (n = (n = this.imulK(n)).iadd(this.tmp)).bitLength());
              } while (e > this.n);
              var r = e < this.n ? -1 : n.ucmp(this.p);
              return (
                0 === r
                  ? ((n.words[0] = 0), (n.length = 1))
                  : r > 0
                  ? n.isub(this.p)
                  : n.strip(),
                n
              );
            }),
            (g.prototype.split = function (t, e) {
              t.iushrn(this.n, 0, e);
            }),
            (g.prototype.imulK = function (t) {
              return t.imul(this.k);
            }),
            i(_, g),
            (_.prototype.split = function (t, e) {
              for (
                var n = 4194303, r = Math.min(t.length, 9), i = 0;
                i < r;
                i++
              )
                e.words[i] = t.words[i];
              if (((e.length = r), t.length <= 9))
                return (t.words[0] = 0), void (t.length = 1);
              var o = t.words[9];
              for (e.words[e.length++] = o & n, i = 10; i < t.length; i++) {
                var a = 0 | t.words[i];
                (t.words[i - 10] = ((a & n) << 4) | (o >>> 22)), (o = a);
              }
              (o >>>= 22),
                (t.words[i - 10] = o),
                0 === o && t.length > 10 ? (t.length -= 10) : (t.length -= 9);
            }),
            (_.prototype.imulK = function (t) {
              (t.words[t.length] = 0),
                (t.words[t.length + 1] = 0),
                (t.length += 2);
              for (var e = 0, n = 0; n < t.length; n++) {
                var r = 0 | t.words[n];
                (e += 977 * r),
                  (t.words[n] = 67108863 & e),
                  (e = 64 * r + ((e / 67108864) | 0));
              }
              return (
                0 === t.words[t.length - 1] &&
                  (t.length--, 0 === t.words[t.length - 1] && t.length--),
                t
              );
            }),
            i(y, g),
            i(w, g),
            i(b, g),
            (b.prototype.imulK = function (t) {
              for (var e = 0, n = 0; n < t.length; n++) {
                var r = 19 * (0 | t.words[n]) + e,
                  i = 67108863 & r;
                (r >>>= 26), (t.words[n] = i), (e = r);
              }
              return 0 !== e && (t.words[t.length++] = e), t;
            }),
            (o._prime = function (t) {
              if (v[t]) return v[t];
              var e;
              if ("k256" === t) e = new _();
              else if ("p224" === t) e = new y();
              else if ("p192" === t) e = new w();
              else {
                if ("p25519" !== t) throw new Error("Unknown prime " + t);
                e = new b();
              }
              return (v[t] = e), e;
            }),
            (k.prototype._verify1 = function (t) {
              r(0 === t.negative, "red works only with positives"),
                r(t.red, "red works only with red numbers");
            }),
            (k.prototype._verify2 = function (t, e) {
              r(
                0 === (t.negative | e.negative),
                "red works only with positives"
              ),
                r(t.red && t.red === e.red, "red works only with red numbers");
            }),
            (k.prototype.imod = function (t) {
              return this.prime
                ? this.prime.ireduce(t)._forceRed(this)
                : t.umod(this.m)._forceRed(this);
            }),
            (k.prototype.neg = function (t) {
              return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
            }),
            (k.prototype.add = function (t, e) {
              this._verify2(t, e);
              var n = t.add(e);
              return n.cmp(this.m) >= 0 && n.isub(this.m), n._forceRed(this);
            }),
            (k.prototype.iadd = function (t, e) {
              this._verify2(t, e);
              var n = t.iadd(e);
              return n.cmp(this.m) >= 0 && n.isub(this.m), n;
            }),
            (k.prototype.sub = function (t, e) {
              this._verify2(t, e);
              var n = t.sub(e);
              return n.cmpn(0) < 0 && n.iadd(this.m), n._forceRed(this);
            }),
            (k.prototype.isub = function (t, e) {
              this._verify2(t, e);
              var n = t.isub(e);
              return n.cmpn(0) < 0 && n.iadd(this.m), n;
            }),
            (k.prototype.shl = function (t, e) {
              return this._verify1(t), this.imod(t.ushln(e));
            }),
            (k.prototype.imul = function (t, e) {
              return this._verify2(t, e), this.imod(t.imul(e));
            }),
            (k.prototype.mul = function (t, e) {
              return this._verify2(t, e), this.imod(t.mul(e));
            }),
            (k.prototype.isqr = function (t) {
              return this.imul(t, t.clone());
            }),
            (k.prototype.sqr = function (t) {
              return this.mul(t, t);
            }),
            (k.prototype.sqrt = function (t) {
              if (t.isZero()) return t.clone();
              var e = this.m.andln(3);
              if ((r(e % 2 === 1), 3 === e)) {
                var n = this.m.add(new o(1)).iushrn(2);
                return this.pow(t, n);
              }
              for (
                var i = this.m.subn(1), a = 0;
                !i.isZero() && 0 === i.andln(1);

              )
                a++, i.iushrn(1);
              r(!i.isZero());
              var s = new o(1).toRed(this),
                u = s.redNeg(),
                c = this.m.subn(1).iushrn(1),
                l = this.m.bitLength();
              for (
                l = new o(2 * l * l).toRed(this);
                0 !== this.pow(l, c).cmp(u);

              )
                l.redIAdd(u);
              for (
                var h = this.pow(l, i),
                  f = this.pow(t, i.addn(1).iushrn(1)),
                  d = this.pow(t, i),
                  p = a;
                0 !== d.cmp(s);

              ) {
                for (var m = d, v = 0; 0 !== m.cmp(s); v++) m = m.redSqr();
                r(v < p);
                var g = this.pow(h, new o(1).iushln(p - v - 1));
                (f = f.redMul(g)), (h = g.redSqr()), (d = d.redMul(h)), (p = v);
              }
              return f;
            }),
            (k.prototype.invm = function (t) {
              var e = t._invmp(this.m);
              return 0 !== e.negative
                ? ((e.negative = 0), this.imod(e).redNeg())
                : this.imod(e);
            }),
            (k.prototype.pow = function (t, e) {
              if (e.isZero()) return new o(1).toRed(this);
              if (0 === e.cmpn(1)) return t.clone();
              var n = new Array(16);
              (n[0] = new o(1).toRed(this)), (n[1] = t);
              for (var r = 2; r < n.length; r++) n[r] = this.mul(n[r - 1], t);
              var i = n[0],
                a = 0,
                s = 0,
                u = e.bitLength() % 26;
              for (0 === u && (u = 26), r = e.length - 1; r >= 0; r--) {
                for (var c = e.words[r], l = u - 1; l >= 0; l--) {
                  var h = (c >> l) & 1;
                  i !== n[0] && (i = this.sqr(i)),
                    0 !== h || 0 !== a
                      ? ((a <<= 1),
                        (a |= h),
                        (4 === ++s || (0 === r && 0 === l)) &&
                          ((i = this.mul(i, n[a])), (s = 0), (a = 0)))
                      : (s = 0);
                }
                u = 26;
              }
              return i;
            }),
            (k.prototype.convertTo = function (t) {
              var e = t.umod(this.m);
              return e === t ? e.clone() : e;
            }),
            (k.prototype.convertFrom = function (t) {
              var e = t.clone();
              return (e.red = null), e;
            }),
            (o.mont = function (t) {
              return new M(t);
            }),
            i(M, k),
            (M.prototype.convertTo = function (t) {
              return this.imod(t.ushln(this.shift));
            }),
            (M.prototype.convertFrom = function (t) {
              var e = this.imod(t.mul(this.rinv));
              return (e.red = null), e;
            }),
            (M.prototype.imul = function (t, e) {
              if (t.isZero() || e.isZero())
                return (t.words[0] = 0), (t.length = 1), t;
              var n = t.imul(e),
                r = n
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                i = n.isub(r).iushrn(this.shift),
                o = i;
              return (
                i.cmp(this.m) >= 0
                  ? (o = i.isub(this.m))
                  : i.cmpn(0) < 0 && (o = i.iadd(this.m)),
                o._forceRed(this)
              );
            }),
            (M.prototype.mul = function (t, e) {
              if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
              var n = t.mul(e),
                r = n
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                i = n.isub(r).iushrn(this.shift),
                a = i;
              return (
                i.cmp(this.m) >= 0
                  ? (a = i.isub(this.m))
                  : i.cmpn(0) < 0 && (a = i.iadd(this.m)),
                a._forceRed(this)
              );
            }),
            (M.prototype.invm = function (t) {
              return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
            });
        })(t, this);
      }.call(this, n(234)(t)));
    },
    1063: function (t, e, n) {
      (function (e) {
        var r = n(1006).strict;
        t.exports = function (t) {
          if (r(t)) {
            var n = e.from(t.buffer);
            return (
              t.byteLength !== t.buffer.byteLength &&
                (n = n.slice(t.byteOffset, t.byteOffset + t.byteLength)),
              n
            );
          }
          return e.from(t);
        };
      }.call(this, n(232).Buffer));
    },
    1064: function (t, e, n) {
      "use strict";
      var r = n(75),
        i = n(76),
        o = n(131),
        a = n(1065),
        s = n(1066),
        u = n(1067);
      function c(t) {
        if ("string" !== typeof t || 1 !== t.length)
          throw new TypeError(
            "arrayFormatSeparator must be single character string"
          );
      }
      function l(t, e) {
        return e.encode ? (e.strict ? a(t) : encodeURIComponent(t)) : t;
      }
      function h(t, e) {
        return e.decode ? s(t) : t;
      }
      function f(t) {
        return Array.isArray(t)
          ? t.sort()
          : "object" === typeof t
          ? f(Object.keys(t))
              .sort(function (t, e) {
                return Number(t) - Number(e);
              })
              .map(function (e) {
                return t[e];
              })
          : t;
      }
      function d(t) {
        var e = t.indexOf("#");
        return -1 !== e && (t = t.slice(0, e)), t;
      }
      function p(t) {
        var e = (t = d(t)).indexOf("?");
        return -1 === e ? "" : t.slice(e + 1);
      }
      function m(t, e) {
        return (
          e.parseNumbers &&
          !Number.isNaN(Number(t)) &&
          "string" === typeof t &&
          "" !== t.trim()
            ? (t = Number(t))
            : !e.parseBooleans ||
              null === t ||
              ("true" !== t.toLowerCase() && "false" !== t.toLowerCase()) ||
              (t = "true" === t.toLowerCase()),
          t
        );
      }
      function v(t, e) {
        c(
          (e = Object.assign(
            {
              decode: !0,
              sort: !0,
              arrayFormat: "none",
              arrayFormatSeparator: ",",
              parseNumbers: !1,
              parseBooleans: !1,
            },
            e
          )).arrayFormatSeparator
        );
        var n = (function (t) {
            var e;
            switch (t.arrayFormat) {
              case "index":
                return function (t, n, r) {
                  (e = /\[(\d*)\]$/.exec(t)),
                    (t = t.replace(/\[\d*\]$/, "")),
                    e
                      ? (void 0 === r[t] && (r[t] = {}), (r[t][e[1]] = n))
                      : (r[t] = n);
                };
              case "bracket":
                return function (t, n, r) {
                  (e = /(\[\])$/.exec(t)),
                    (t = t.replace(/\[\]$/, "")),
                    e
                      ? void 0 !== r[t]
                        ? (r[t] = [].concat(r[t], n))
                        : (r[t] = [n])
                      : (r[t] = n);
                };
              case "comma":
              case "separator":
                return function (e, n, r) {
                  var i =
                    "string" === typeof n &&
                    n.split("").indexOf(t.arrayFormatSeparator) > -1
                      ? n.split(t.arrayFormatSeparator).map(function (e) {
                          return h(e, t);
                        })
                      : null === n
                      ? n
                      : h(n, t);
                  r[e] = i;
                };
              default:
                return function (t, e, n) {
                  void 0 !== n[t] ? (n[t] = [].concat(n[t], e)) : (n[t] = e);
                };
            }
          })(e),
          o = Object.create(null);
        if ("string" !== typeof t) return o;
        if (!(t = t.trim().replace(/^[?#&]/, ""))) return o;
        var a,
          s = i(t.split("&"));
        try {
          for (s.s(); !(a = s.n()).done; ) {
            var l = a.value,
              d = u(e.decode ? l.replace(/\+/g, " ") : l, "="),
              p = r(d, 2),
              v = p[0],
              g = p[1];
            (g =
              void 0 === g
                ? null
                : ["comma", "separator"].includes(e.arrayFormat)
                ? g
                : h(g, e)),
              n(h(v, e), g, o);
          }
        } catch (E) {
          s.e(E);
        } finally {
          s.f();
        }
        for (var _ = 0, y = Object.keys(o); _ < y.length; _++) {
          var w = y[_],
            b = o[w];
          if ("object" === typeof b && null !== b)
            for (var k = 0, M = Object.keys(b); k < M.length; k++) {
              var x = M[k];
              b[x] = m(b[x], e);
            }
          else o[w] = m(b, e);
        }
        return !1 === e.sort
          ? o
          : (!0 === e.sort
              ? Object.keys(o).sort()
              : Object.keys(o).sort(e.sort)
            ).reduce(function (t, e) {
              var n = o[e];
              return (
                Boolean(n) && "object" === typeof n && !Array.isArray(n)
                  ? (t[e] = f(n))
                  : (t[e] = n),
                t
              );
            }, Object.create(null));
      }
      (e.extract = p),
        (e.parse = v),
        (e.stringify = function (t, e) {
          if (!t) return "";
          c(
            (e = Object.assign(
              {
                encode: !0,
                strict: !0,
                arrayFormat: "none",
                arrayFormatSeparator: ",",
              },
              e
            )).arrayFormatSeparator
          );
          for (
            var n = function (n) {
                return (
                  (e.skipNull && (null === (r = t[n]) || void 0 === r)) ||
                  (e.skipEmptyString && "" === t[n])
                );
                var r;
              },
              r = (function (t) {
                switch (t.arrayFormat) {
                  case "index":
                    return function (e) {
                      return function (n, r) {
                        var i = n.length;
                        return void 0 === r ||
                          (t.skipNull && null === r) ||
                          (t.skipEmptyString && "" === r)
                          ? n
                          : [].concat(
                              o(n),
                              null === r
                                ? [[l(e, t), "[", i, "]"].join("")]
                                : [
                                    [l(e, t), "[", l(i, t), "]=", l(r, t)].join(
                                      ""
                                    ),
                                  ]
                            );
                      };
                    };
                  case "bracket":
                    return function (e) {
                      return function (n, r) {
                        return void 0 === r ||
                          (t.skipNull && null === r) ||
                          (t.skipEmptyString && "" === r)
                          ? n
                          : [].concat(
                              o(n),
                              null === r
                                ? [[l(e, t), "[]"].join("")]
                                : [[l(e, t), "[]=", l(r, t)].join("")]
                            );
                      };
                    };
                  case "comma":
                  case "separator":
                    return function (e) {
                      return function (n, r) {
                        return null === r || void 0 === r || 0 === r.length
                          ? n
                          : 0 === n.length
                          ? [[l(e, t), "=", l(r, t)].join("")]
                          : [[n, l(r, t)].join(t.arrayFormatSeparator)];
                      };
                    };
                  default:
                    return function (e) {
                      return function (n, r) {
                        return void 0 === r ||
                          (t.skipNull && null === r) ||
                          (t.skipEmptyString && "" === r)
                          ? n
                          : [].concat(
                              o(n),
                              null === r
                                ? [l(e, t)]
                                : [[l(e, t), "=", l(r, t)].join("")]
                            );
                      };
                    };
                }
              })(e),
              i = {},
              a = 0,
              s = Object.keys(t);
            a < s.length;
            a++
          ) {
            var u = s[a];
            n(u) || (i[u] = t[u]);
          }
          var h = Object.keys(i);
          return (
            !1 !== e.sort && h.sort(e.sort),
            h
              .map(function (n) {
                var i = t[n];
                return void 0 === i
                  ? ""
                  : null === i
                  ? l(n, e)
                  : Array.isArray(i)
                  ? i.reduce(r(n), []).join("&")
                  : l(n, e) + "=" + l(i, e);
              })
              .filter(function (t) {
                return t.length > 0;
              })
              .join("&")
          );
        }),
        (e.parseUrl = function (t, e) {
          e = Object.assign({ decode: !0 }, e);
          var n = u(t, "#"),
            i = r(n, 2),
            o = i[0],
            a = i[1];
          return Object.assign(
            { url: o.split("?")[0] || "", query: v(p(t), e) },
            e && e.parseFragmentIdentifier && a
              ? { fragmentIdentifier: h(a, e) }
              : {}
          );
        }),
        (e.stringifyUrl = function (t, n) {
          n = Object.assign({ encode: !0, strict: !0 }, n);
          var r = d(t.url).split("?")[0] || "",
            i = e.extract(t.url),
            o = e.parse(i, { sort: !1 }),
            a = Object.assign(o, t.query),
            s = e.stringify(a, n);
          s && (s = "?".concat(s));
          var u = (function (t) {
            var e = "",
              n = t.indexOf("#");
            return -1 !== n && (e = t.slice(n)), e;
          })(t.url);
          return (
            t.fragmentIdentifier &&
              (u = "#".concat(l(t.fragmentIdentifier, n))),
            "".concat(r).concat(s).concat(u)
          );
        });
    },
    1065: function (t, e, n) {
      "use strict";
      t.exports = function (t) {
        return encodeURIComponent(t).replace(/[!'()*]/g, function (t) {
          return "%".concat(t.charCodeAt(0).toString(16).toUpperCase());
        });
      };
    },
    1066: function (t, e, n) {
      "use strict";
      var r = "%[a-f0-9]{2}",
        i = new RegExp(r, "gi"),
        o = new RegExp("(" + r + ")+", "gi");
      function a(t, e) {
        try {
          return decodeURIComponent(t.join(""));
        } catch (i) {}
        if (1 === t.length) return t;
        e = e || 1;
        var n = t.slice(0, e),
          r = t.slice(e);
        return Array.prototype.concat.call([], a(n), a(r));
      }
      function s(t) {
        try {
          return decodeURIComponent(t);
        } catch (r) {
          for (var e = t.match(i), n = 1; n < e.length; n++)
            e = (t = a(e, n).join("")).match(i);
          return t;
        }
      }
      t.exports = function (t) {
        if ("string" !== typeof t)
          throw new TypeError(
            "Expected `encodedURI` to be of type `string`, got `" +
              typeof t +
              "`"
          );
        try {
          return (t = t.replace(/\+/g, " ")), decodeURIComponent(t);
        } catch (e) {
          return (function (t) {
            for (
              var n = { "%FE%FF": "\ufffd\ufffd", "%FF%FE": "\ufffd\ufffd" },
                r = o.exec(t);
              r;

            ) {
              try {
                n[r[0]] = decodeURIComponent(r[0]);
              } catch (e) {
                var i = s(r[0]);
                i !== r[0] && (n[r[0]] = i);
              }
              r = o.exec(t);
            }
            n["%C2"] = "\ufffd";
            for (var a = Object.keys(n), u = 0; u < a.length; u++) {
              var c = a[u];
              t = t.replace(new RegExp(c, "g"), n[c]);
            }
            return t;
          })(t);
        }
      };
    },
    1067: function (t, e, n) {
      "use strict";
      t.exports = function (t, e) {
        if ("string" !== typeof t || "string" !== typeof e)
          throw new TypeError("Expected the arguments to be of type `string`");
        if ("" === e) return [t];
        var n = t.indexOf(e);
        return -1 === n ? [t] : [t.slice(0, n), t.slice(n + e.length)];
      };
    },
    1068: function (t, e, n) {
      "use strict";
      (function (t) {
        var r = n(7),
          i = n.n(r),
          o = n(27),
          a = n(13),
          s = n(14),
          u = n(918),
          c = n(1069),
          l = "undefined" !== typeof t.WebSocket ? t.WebSocket : n(1070),
          h = (function () {
            function t(e) {
              var n = this;
              if (
                (Object(a.a)(this, t),
                (this.opts = e),
                (this._queue = []),
                (this._events = []),
                (this._subscriptions = []),
                (this._protocol = e.protocol),
                (this._version = e.version),
                (this._url = ""),
                (this._netMonitor = null),
                (this._socket = null),
                (this._nextSocket = null),
                (this._subscriptions = e.subscriptions || []),
                (this._netMonitor = e.netMonitor || new c.a()),
                !e.url || "string" !== typeof e.url)
              )
                throw new Error("Missing or invalid WebSocket url");
              (this._url = e.url),
                this._netMonitor.on("online", function () {
                  return n._socketCreate();
                });
            }
            return (
              Object(s.a)(t, [
                {
                  key: "readyState",
                  get: function () {
                    return this._socket ? this._socket.readyState : -1;
                  },
                  set: function (t) {},
                },
                {
                  key: "connecting",
                  get: function () {
                    return 0 === this.readyState;
                  },
                  set: function (t) {},
                },
                {
                  key: "connected",
                  get: function () {
                    return 1 === this.readyState;
                  },
                  set: function (t) {},
                },
                {
                  key: "closing",
                  get: function () {
                    return 2 === this.readyState;
                  },
                  set: function (t) {},
                },
                {
                  key: "closed",
                  get: function () {
                    return 3 === this.readyState;
                  },
                  set: function (t) {},
                },
                {
                  key: "open",
                  value: function () {
                    this._socketCreate();
                  },
                },
                {
                  key: "close",
                  value: function () {
                    this._socketClose();
                  },
                },
                {
                  key: "send",
                  value: function (t, e, n) {
                    if (!e || "string" !== typeof e)
                      throw new Error("Missing or invalid topic field");
                    this._socketSend({
                      topic: e,
                      type: "pub",
                      payload: t,
                      silent: !!n,
                    });
                  },
                },
                {
                  key: "subscribe",
                  value: function (t) {
                    this._socketSend({
                      topic: t,
                      type: "sub",
                      payload: "",
                      silent: !0,
                    });
                  },
                },
                {
                  key: "on",
                  value: function (t, e) {
                    this._events.push({ event: t, callback: e });
                  },
                },
                {
                  key: "_socketCreate",
                  value: function () {
                    var t = this;
                    if (!this._nextSocket) {
                      var e = (function (t, e, n) {
                        var r,
                          i,
                          o = (
                            t.startsWith("https")
                              ? t.replace("https", "wss")
                              : t.startsWith("http")
                              ? t.replace("http", "ws")
                              : t
                          ).split("?"),
                          a = Object(u.n)()
                            ? {
                                protocol: e,
                                version: n,
                                env: "browser",
                                host:
                                  (null === (r = Object(u.k)()) || void 0 === r
                                    ? void 0
                                    : r.host) || "",
                              }
                            : {
                                protocol: e,
                                version: n,
                                env:
                                  (null === (i = Object(u.g)()) || void 0 === i
                                    ? void 0
                                    : i.name) || "",
                              },
                          s = Object(u.a)(Object(u.l)(o[1] || ""), a);
                        return o[0] + "?" + s;
                      })(this._url, this._protocol, this._version);
                      if (((this._nextSocket = new l(e)), !this._nextSocket))
                        throw new Error("Failed to create socket");
                      (this._nextSocket.onmessage = function (e) {
                        return t._socketReceive(e);
                      }),
                        (this._nextSocket.onopen = function () {
                          return t._socketOpen();
                        }),
                        (this._nextSocket.onerror = function (e) {
                          return t._socketError(e);
                        }),
                        (this._nextSocket.onclose = function () {
                          setTimeout(function () {
                            (t._nextSocket = null), t._socketCreate();
                          }, 1e3);
                        });
                    }
                  },
                },
                {
                  key: "_socketOpen",
                  value: function () {
                    this._socketClose(),
                      (this._socket = this._nextSocket),
                      (this._nextSocket = null),
                      this._queueSubscriptions(),
                      this._pushQueue();
                  },
                },
                {
                  key: "_socketClose",
                  value: function () {
                    this._socket &&
                      ((this._socket.onclose = function () {}),
                      this._socket.close());
                  },
                },
                {
                  key: "_socketSend",
                  value: function (t) {
                    var e = JSON.stringify(t);
                    this._socket && 1 === this._socket.readyState
                      ? this._socket.send(e)
                      : (this._setToQueue(t), this._socketCreate());
                  },
                },
                {
                  key: "_socketReceive",
                  value: (function () {
                    var t = Object(o.a)(
                      i.a.mark(function t(e) {
                        var n, r;
                        return i.a.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  (t.prev = 0),
                                    (n = JSON.parse(e.data)),
                                    (t.next = 7);
                                  break;
                                case 4:
                                  return (
                                    (t.prev = 4),
                                    (t.t0 = t.catch(0)),
                                    t.abrupt("return")
                                  );
                                case 7:
                                  this._socketSend({
                                    topic: n.topic,
                                    type: "ack",
                                    payload: "",
                                    silent: !0,
                                  }),
                                    this._socket &&
                                      1 === this._socket.readyState &&
                                      ((r = this._events.filter(function (t) {
                                        return "message" === t.event;
                                      })),
                                      r &&
                                        r.length &&
                                        r.forEach(function (t) {
                                          return t.callback(n);
                                        }));
                                case 9:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this,
                          [[0, 4]]
                        );
                      })
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "_socketError",
                  value: function (t) {
                    var e = this._events.filter(function (t) {
                      return "error" === t.event;
                    });
                    e &&
                      e.length &&
                      e.forEach(function (e) {
                        return e.callback(t);
                      });
                  },
                },
                {
                  key: "_queueSubscriptions",
                  value: function () {
                    var t = this;
                    this._subscriptions.forEach(function (e) {
                      return t._queue.push({
                        topic: e,
                        type: "sub",
                        payload: "",
                        silent: !0,
                      });
                    }),
                      (this._subscriptions = this.opts.subscriptions || []);
                  },
                },
                {
                  key: "_setToQueue",
                  value: function (t) {
                    this._queue.push(t);
                  },
                },
                {
                  key: "_pushQueue",
                  value: function () {
                    var t = this;
                    this._queue.forEach(function (e) {
                      return t._socketSend(e);
                    }),
                      (this._queue = []);
                  },
                },
              ]),
              t
            );
          })();
        e.a = h;
      }.call(this, n(106)));
    },
    1069: function (t, e, n) {
      "use strict";
      var r = n(13),
        i = n(14),
        o = (function () {
          function t() {
            var e = this;
            Object(r.a)(this, t),
              (this._eventEmitters = []),
              "undefined" !== typeof window &&
                "undefined" !== typeof window.addEventListener &&
                (window.addEventListener("online", function () {
                  return e.trigger("online");
                }),
                window.addEventListener("offline", function () {
                  return e.trigger("offline");
                }));
          }
          return (
            Object(i.a)(t, [
              {
                key: "on",
                value: function (t, e) {
                  this._eventEmitters.push({ event: t, callback: e });
                },
              },
              {
                key: "trigger",
                value: function (t) {
                  var e = [];
                  t &&
                    (e = this._eventEmitters.filter(function (e) {
                      return e.event === t;
                    })),
                    e.forEach(function (t) {
                      t.callback();
                    });
                },
              },
            ]),
            t
          );
        })();
      e.a = o;
    },
    1070: function (t, e, n) {
      "use strict";
      t.exports = function () {
        throw new Error(
          "ws does not work in the browser. Browser clients must use the native WebSocket object"
        );
      };
    },
    1071: function (t, e, n) {
      "use strict";
      var r = n(1007);
      n.d(e, "randomBytes", function () {
        return r.a;
      });
      var i = n(1008);
      n.d(e, "aesCbcDecrypt", function () {
        return i.a;
      }),
        n.d(e, "aesCbcEncrypt", function () {
          return i.b;
        });
      var o = n(1009);
      n.d(e, "hmacSha256Sign", function () {
        return o.a;
      });
      n(1014), n(955), n(993);
    },
    1072: function (t, e, n) {
      (function (e) {
        function r(t) {
          return t && "object" === typeof t && "default" in t ? t.default : t;
        }
        var i = n(991),
          o = r(n(1073)),
          a = r(n(358)),
          s = n(1206);
        "undefined" !== typeof Symbol &&
          (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))),
          "undefined" !== typeof Symbol &&
            (Symbol.asyncIterator ||
              (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
        var u = "walletconnect-wrapper",
          c = "walletconnect-style-sheet",
          l = "walletconnect-qrcode-modal",
          h = "walletconnect-qrcode-text";
        function f(t) {
          return s.createElement(
            "div",
            { className: "walletconnect-modal__header" },
            s.createElement("img", {
              src: "data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='300px' height='185px' viewBox='0 0 300 185' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3EWalletConnect%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='walletconnect-logo-alt' fill='%233B99FC' fill-rule='nonzero'%3E %3Cpath d='M61.4385429,36.2562612 C110.349767,-11.6319051 189.65053,-11.6319051 238.561752,36.2562612 L244.448297,42.0196786 C246.893858,44.4140867 246.893858,48.2961898 244.448297,50.690599 L224.311602,70.406102 C223.088821,71.6033071 221.106302,71.6033071 219.883521,70.406102 L211.782937,62.4749541 C177.661245,29.0669724 122.339051,29.0669724 88.2173582,62.4749541 L79.542302,70.9685592 C78.3195204,72.1657633 76.337001,72.1657633 75.1142214,70.9685592 L54.9775265,51.2530561 C52.5319653,48.8586469 52.5319653,44.9765439 54.9775265,42.5821357 L61.4385429,36.2562612 Z M280.206339,77.0300061 L298.128036,94.5769031 C300.573585,96.9713 300.573599,100.85338 298.128067,103.247793 L217.317896,182.368927 C214.872352,184.763353 210.907314,184.76338 208.461736,182.368989 C208.461726,182.368979 208.461714,182.368967 208.461704,182.368957 L151.107561,126.214385 C150.496171,125.615783 149.504911,125.615783 148.893521,126.214385 C148.893517,126.214389 148.893514,126.214393 148.89351,126.214396 L91.5405888,182.368927 C89.095052,184.763359 85.1300133,184.763399 82.6844276,182.369014 C82.6844133,182.369 82.684398,182.368986 82.6843827,182.36897 L1.87196327,103.246785 C-0.573596939,100.852377 -0.573596939,96.9702735 1.87196327,94.5758653 L19.7936929,77.028998 C22.2392531,74.6345898 26.2042918,74.6345898 28.6498531,77.028998 L86.0048306,133.184355 C86.6162214,133.782957 87.6074796,133.782957 88.2188704,133.184355 C88.2188796,133.184346 88.2188878,133.184338 88.2188969,133.184331 L145.571,77.028998 C148.016505,74.6345347 151.981544,74.6344449 154.427161,77.028798 C154.427195,77.0288316 154.427229,77.0288653 154.427262,77.028899 L211.782164,133.184331 C212.393554,133.782932 213.384814,133.782932 213.996204,133.184331 L271.350179,77.0300061 C273.79574,74.6355969 277.760778,74.6355969 280.206339,77.0300061 Z' id='WalletConnect'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/svg%3E",
              className: "walletconnect-modal__headerLogo",
            }),
            s.createElement("p", null, "WalletConnect"),
            s.createElement(
              "div",
              {
                className: "walletconnect-modal__close__wrapper",
                onClick: t.onClose,
              },
              s.createElement(
                "div",
                {
                  id: "walletconnect-qrcode-close",
                  className: "walletconnect-modal__close__icon",
                },
                s.createElement("div", {
                  className: "walletconnect-modal__close__line1",
                }),
                s.createElement("div", {
                  className: "walletconnect-modal__close__line2",
                })
              )
            )
          );
        }
        function d(t) {
          return s.createElement(
            "a",
            {
              className: "walletconnect-connect__button",
              href: t.href,
              id: "walletconnect-connect-button-" + t.name,
              onClick: t.onClick,
              rel: "noopener noreferrer",
              style: { backgroundColor: t.color },
              target: "_blank",
            },
            t.name
          );
        }
        function p(t) {
          var e = t.color,
            n = t.href,
            r = t.name,
            i = t.logo,
            o = t.onClick;
          return s.createElement(
            "a",
            {
              className: "walletconnect-modal__base__row",
              href: n,
              onClick: o,
              rel: "noopener noreferrer",
              target: "_blank",
            },
            s.createElement(
              "h3",
              { className: "walletconnect-modal__base__row__h3" },
              r
            ),
            s.createElement(
              "div",
              { className: "walletconnect-modal__base__row__right" },
              s.createElement("div", {
                className: "walletconnect-modal__base__row__right__app-icon",
                style: {
                  background: "url('" + i + "') " + e,
                  backgroundSize: "100%",
                },
              }),
              s.createElement("img", {
                src: "data:image/svg+xml,%3Csvg width='8' height='18' viewBox='0 0 8 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.586301 0.213898C0.150354 0.552968 0.0718197 1.18124 0.41089 1.61719L5.2892 7.88931C5.57007 8.25042 5.57007 8.75608 5.2892 9.11719L0.410889 15.3893C0.071819 15.8253 0.150353 16.4535 0.586301 16.7926C1.02225 17.1317 1.65052 17.0531 1.98959 16.6172L6.86791 10.3451C7.7105 9.26174 7.7105 7.74476 6.86791 6.66143L1.98959 0.38931C1.65052 -0.0466374 1.02225 -0.125172 0.586301 0.213898Z' fill='%233C4252'/%3E %3C/svg%3E",
                className: "walletconnect-modal__base__row__right__caret",
              })
            )
          );
        }
        function m(t) {
          var e = t.color,
            n = t.href,
            r = t.name,
            i = t.logo,
            o = t.onClick,
            a =
              window.innerWidth < 768
                ? (r.length > 8 ? 2.5 : 2.7) + "vw"
                : "inherit";
          return s.createElement(
            "a",
            {
              className: "walletconnect-connect__button__icon_anchor",
              href: n,
              onClick: o,
              rel: "noopener noreferrer",
              target: "_blank",
            },
            s.createElement("div", {
              className: "walletconnect-connect__button__icon",
              style: {
                background: "url('" + i + "') " + e,
                backgroundSize: "100%",
              },
            }),
            s.createElement(
              "div",
              {
                style: { fontSize: a },
                className: "walletconnect-connect__button__text",
              },
              r
            )
          );
        }
        function v(t) {
          var e = i.isAndroid(),
            n = s.useState(""),
            r = n[0],
            o = n[1],
            a = s.useState(""),
            u = a[0],
            c = a[1],
            l = s.useState(1),
            f = l[0],
            v = l[1],
            g = u
              ? t.links.filter(function (t) {
                  return t.name.toLowerCase().includes(u.toLowerCase());
                })
              : t.links,
            _ = t.errorMessage,
            y = u || g.length > 5,
            w = Math.ceil(g.length / 12),
            b = [12 * (f - 1) + 1, 12 * f],
            k = g.length
              ? g.filter(function (t, e) {
                  return e + 1 >= b[0] && e + 1 <= b[1];
                })
              : [],
            M = !(e || !(w > 1)),
            x = void 0;
          return s.createElement(
            "div",
            null,
            s.createElement(
              "p",
              { id: h, className: "walletconnect-qrcode__text" },
              e ? t.text.connect_mobile_wallet : t.text.choose_preferred_wallet
            ),
            !e &&
              s.createElement("input", {
                className: "walletconnect-search__input",
                placeholder: "Search",
                value: r,
                onChange: function (t) {
                  o(t.target.value),
                    clearTimeout(x),
                    t.target.value
                      ? (x = setTimeout(function () {
                          c(t.target.value), v(1);
                        }, 1e3))
                      : (o(""), c(""), v(1));
                },
              }),
            s.createElement(
              "div",
              {
                className:
                  "walletconnect-connect__buttons__wrapper" +
                  (e ? "__android" : y && g.length ? "__wrap" : ""),
              },
              e
                ? s.createElement(d, {
                    name: t.text.connect,
                    color: "rgb(64, 153, 255)",
                    href: t.uri,
                    onClick: s.useCallback(function () {
                      i.saveMobileLinkInfo({ name: "Unknown", href: t.uri });
                    }, []),
                  })
                : k.length
                ? k.map(function (e) {
                    var n = e.color,
                      r = e.name,
                      o = e.shortName,
                      a = e.logo,
                      u = i.formatIOSMobile(t.uri, e),
                      c = s.useCallback(
                        function () {
                          i.saveMobileLinkInfo({ name: r, href: u });
                        },
                        [k]
                      );
                    return y
                      ? s.createElement(m, {
                          color: n,
                          href: u,
                          name: o,
                          logo: a,
                          onClick: c,
                        })
                      : s.createElement(p, {
                          color: n,
                          href: u,
                          name: r,
                          logo: a,
                          onClick: c,
                        });
                  })
                : s.createElement(
                    s.Fragment,
                    null,
                    s.createElement(
                      "p",
                      null,
                      _.length
                        ? t.errorMessage
                        : t.links.length && !g.length
                        ? t.text.no_wallets_found
                        : t.text.loading
                    )
                  )
            ),
            M &&
              s.createElement(
                "div",
                { className: "walletconnect-modal__footer" },
                Array(w)
                  .fill(0)
                  .map(function (t, e) {
                    var n = e + 1,
                      r = f === n;
                    return s.createElement(
                      "a",
                      {
                        style: {
                          margin: "auto 10px",
                          fontWeight: r ? "bold" : "normal",
                        },
                        onClick: function () {
                          return v(n);
                        },
                      },
                      n
                    );
                  })
              )
          );
        }
        function g(t) {
          var e = !!t.message.trim();
          return s.createElement(
            "div",
            {
              className:
                "walletconnect-qrcode__notification" +
                (e ? " notification__show" : ""),
            },
            t.message
          );
        }
        function _(t) {
          var e = s.useState(""),
            n = e[0],
            r = e[1],
            i = s.useState(""),
            u = i[0],
            c = i[1];
          s.useEffect(function () {
            try {
              return Promise.resolve(
                (function (t) {
                  try {
                    var e = "";
                    return Promise.resolve(
                      o.toString(t, { margin: 0, type: "svg" })
                    ).then(function (t) {
                      return (
                        "string" === typeof t &&
                          (e = t.replace(
                            "<svg",
                            '<svg class="walletconnect-qrcode__image"'
                          )),
                        e
                      );
                    });
                  } catch (n) {
                    return Promise.reject(n);
                  }
                })(t.uri)
              ).then(function (t) {
                c(t);
              });
            } catch (e) {
              Promise.reject(e);
            }
          }, []);
          return s.createElement(
            "div",
            null,
            s.createElement(
              "p",
              { id: h, className: "walletconnect-qrcode__text" },
              t.text.scan_qrcode_with_wallet
            ),
            s.createElement("div", { dangerouslySetInnerHTML: { __html: u } }),
            s.createElement(
              "div",
              { className: "walletconnect-modal__footer" },
              s.createElement(
                "a",
                {
                  onClick: function () {
                    a(t.uri)
                      ? (r(t.text.copied_to_clipboard),
                        setInterval(function () {
                          return r("");
                        }, 1200))
                      : (r("Error"),
                        setInterval(function () {
                          return r("");
                        }, 1200));
                  },
                },
                t.text.copy_to_clipboard
              )
            ),
            s.createElement(g, { message: n })
          );
        }
        function y(t) {
          var e = i.isAndroid(),
            n = i.isMobile(),
            r = n
              ? t.qrcodeModalOptions && t.qrcodeModalOptions.mobileLinks
                ? t.qrcodeModalOptions.mobileLinks
                : void 0
              : t.qrcodeModalOptions && t.qrcodeModalOptions.desktopLinks
              ? t.qrcodeModalOptions.desktopLinks
              : void 0,
            o = s.useState(!1),
            a = o[0],
            u = o[1],
            c = s.useState(!1),
            h = c[0],
            d = c[1],
            p = s.useState(!n),
            m = p[0],
            g = p[1],
            y = {
              mobile: n,
              text: t.text,
              uri: t.uri,
              qrcodeModalOptions: t.qrcodeModalOptions,
            },
            w = s.useState(""),
            b = w[0],
            k = w[1],
            M = s.useState(!1),
            x = M[0],
            E = M[1],
            O = s.useState([]),
            C = O[0],
            R = O[1],
            S = s.useState(""),
            T = S[0],
            I = S[1],
            j = function () {
              h ||
                a ||
                (r && !r.length) ||
                C.length > 0 ||
                s.useEffect(function () {
                  !(function () {
                    try {
                      if (e) return Promise.resolve();
                      u(!0);
                      var o = (function (t, e) {
                        try {
                          var n = t();
                        } catch (r) {
                          return e(r);
                        }
                        return n && n.then ? n.then(void 0, e) : n;
                      })(
                        function () {
                          var e =
                            t.qrcodeModalOptions &&
                            t.qrcodeModalOptions.registryUrl
                              ? t.qrcodeModalOptions.registryUrl
                              : i.getWalletRegistryUrl();
                          return Promise.resolve(
                            fetch(e).then(function (t) {
                              return t.json();
                            })
                          ).then(function (e) {
                            var o = n ? "mobile" : "desktop",
                              a = i.getMobileLinkRegistry(
                                i.formatMobileRegistry(e, o),
                                r
                              );
                            u(!1),
                              d(!0),
                              I(a.length ? "" : t.text.no_supported_wallets),
                              R(a);
                            var s = 1 === a.length;
                            s && (k(i.formatIOSMobile(t.uri, a[0])), g(!0)),
                              E(s);
                          });
                        },
                        function (e) {
                          u(!1),
                            d(!0),
                            I(t.text.something_went_wrong),
                            console.error(e);
                        }
                      );
                      Promise.resolve(
                        o && o.then ? o.then(function () {}) : void 0
                      );
                    } catch (a) {
                      return Promise.reject(a);
                    }
                  })();
                });
            };
          j();
          var A = n ? m : !m;
          return s.createElement(
            "div",
            { id: l, className: "walletconnect-qrcode__base animated fadeIn" },
            s.createElement(
              "div",
              { className: "walletconnect-modal__base" },
              s.createElement(f, { onClose: t.onClose }),
              x && m
                ? s.createElement(
                    "div",
                    { className: "walletconnect-modal__single_wallet" },
                    s.createElement(
                      "a",
                      {
                        onClick: function () {
                          return i.saveMobileLinkInfo({
                            name: C[0].name,
                            href: b,
                          });
                        },
                        href: b,
                        rel: "noopener noreferrer",
                        target: "_blank",
                      },
                      t.text.connect_with +
                        " " +
                        (x ? C[0].name : "") +
                        " \u203a"
                    )
                  )
                : e || a || (!a && C.length)
                ? s.createElement(
                    "div",
                    {
                      className:
                        "walletconnect-modal__mobile__toggle" +
                        (A ? " right__selected" : ""),
                    },
                    s.createElement("div", {
                      className: "walletconnect-modal__mobile__toggle_selector",
                    }),
                    n
                      ? s.createElement(
                          s.Fragment,
                          null,
                          s.createElement(
                            "a",
                            {
                              onClick: function () {
                                return g(!1), j();
                              },
                            },
                            t.text.mobile
                          ),
                          s.createElement(
                            "a",
                            {
                              onClick: function () {
                                return g(!0);
                              },
                            },
                            t.text.qrcode
                          )
                        )
                      : s.createElement(
                          s.Fragment,
                          null,
                          s.createElement(
                            "a",
                            {
                              onClick: function () {
                                return g(!0);
                              },
                            },
                            t.text.qrcode
                          ),
                          s.createElement(
                            "a",
                            {
                              onClick: function () {
                                return g(!1), j();
                              },
                            },
                            t.text.desktop
                          )
                        )
                  )
                : null,
              s.createElement(
                "div",
                null,
                m || (!e && !a && !C.length)
                  ? s.createElement(_, Object.assign({}, y))
                  : s.createElement(
                      v,
                      Object.assign({}, y, { links: C, errorMessage: T })
                    )
              )
            )
          );
        }
        var w = {
          de: {
            choose_preferred_wallet: "W\xe4hle bevorzugte Wallet",
            connect_mobile_wallet: "Verbinde mit Mobile Wallet",
            scan_qrcode_with_wallet:
              "Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",
            connect: "Verbinden",
            qrcode: "QR-Code",
            mobile: "Mobile",
            desktop: "Desktop",
            copy_to_clipboard: "In die Zwischenablage kopieren",
            copied_to_clipboard: "In die Zwischenablage kopiert!",
            connect_with: "Verbinden mit Hilfe von",
            loading: "Laden...",
            something_went_wrong: "Etwas ist schief gelaufen",
            no_supported_wallets: "Es gibt noch keine unterst\xfctzten Wallet",
            no_wallets_found: "keine Wallet gefunden",
          },
          en: {
            choose_preferred_wallet: "Choose your preferred wallet",
            connect_mobile_wallet: "Connect to Mobile Wallet",
            scan_qrcode_with_wallet:
              "Scan QR code with a WalletConnect-compatible wallet",
            connect: "Connect",
            qrcode: "QR Code",
            mobile: "Mobile",
            desktop: "Desktop",
            copy_to_clipboard: "Copy to clipboard",
            copied_to_clipboard: "Copied to clipboard!",
            connect_with: "Connect with",
            loading: "Loading...",
            something_went_wrong: "Something went wrong",
            no_supported_wallets: "There are no supported wallets yet",
            no_wallets_found: "No wallets found",
          },
          es: {
            choose_preferred_wallet: "Elige tu billetera preferida",
            connect_mobile_wallet: "Conectar a billetera m\xf3vil",
            scan_qrcode_with_wallet:
              "Escanea el c\xf3digo QR con una billetera compatible con WalletConnect",
            connect: "Conectar",
            qrcode: "C\xf3digo QR",
            mobile: "M\xf3vil",
            desktop: "Desktop",
            copy_to_clipboard: "Copiar",
            copied_to_clipboard: "Copiado!",
            connect_with: "Conectar mediante",
            loading: "Cargando...",
            something_went_wrong: "Algo sali\xf3 mal",
            no_supported_wallets: "Todav\xeda no hay billeteras compatibles",
            no_wallets_found: "No se encontraron billeteras",
          },
          fr: {
            choose_preferred_wallet:
              "Choisissez votre portefeuille pr\xe9f\xe9r\xe9",
            connect_mobile_wallet: "Se connecter au portefeuille mobile",
            scan_qrcode_with_wallet:
              "Scannez le QR code avec un portefeuille compatible WalletConnect",
            connect: "Se connecter",
            qrcode: "QR Code",
            mobile: "Mobile",
            desktop: "Desktop",
            copy_to_clipboard: "Copier",
            copied_to_clipboard: "Copi\xe9!",
            connect_with: "Connectez-vous \xe0 l'aide de",
            loading: "Chargement...",
            something_went_wrong: "Quelque chose a mal tourn\xe9",
            no_supported_wallets:
              "Il n'y a pas encore de portefeuilles pris en charge",
            no_wallets_found: "Aucun portefeuille trouv\xe9",
          },
          ko: {
            choose_preferred_wallet:
              "\uc6d0\ud558\ub294 \uc9c0\uac11\uc744 \uc120\ud0dd\ud558\uc138\uc694",
            connect_mobile_wallet:
              "\ubaa8\ubc14\uc77c \uc9c0\uac11\uacfc \uc5f0\uacb0",
            scan_qrcode_with_wallet:
              "WalletConnect \uc9c0\uc6d0 \uc9c0\uac11\uc5d0\uc11c QR\ucf54\ub4dc\ub97c \uc2a4\uce94\ud558\uc138\uc694",
            connect: "\uc5f0\uacb0",
            qrcode: "QR \ucf54\ub4dc",
            mobile: "\ubaa8\ubc14\uc77c",
            desktop: "\ub370\uc2a4\ud06c\ud0d1",
            copy_to_clipboard: "\ud074\ub9bd\ubcf4\ub4dc\uc5d0 \ubcf5\uc0ac",
            copied_to_clipboard:
              "\ud074\ub9bd\ubcf4\ub4dc\uc5d0 \ubcf5\uc0ac\ub418\uc5c8\uc2b5\ub2c8\ub2e4!",
            connect_with: "\uc640 \uc5f0\uacb0\ud558\ub2e4",
            loading: "\ub85c\ub4dc \uc911...",
            something_went_wrong:
              "\ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.",
            no_supported_wallets:
              "\uc544\uc9c1 \uc9c0\uc6d0\ub418\ub294 \uc9c0\uac11\uc774 \uc5c6\uc2b5\ub2c8\ub2e4",
            no_wallets_found:
              "\uc9c0\uac11\uc744 \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4",
          },
          pt: {
            choose_preferred_wallet: "Escolha sua carteira preferida",
            connect_mobile_wallet: "Conectar-se \xe0 carteira m\xf3vel",
            scan_qrcode_with_wallet:
              "Ler o c\xf3digo QR com uma carteira compat\xedvel com WalletConnect",
            connect: "Conectar",
            qrcode: "C\xf3digo QR",
            mobile: "M\xf3vel",
            desktop: "Desktop",
            copy_to_clipboard: "Copiar",
            copied_to_clipboard: "Copiado!",
            connect_with: "Ligar por meio de",
            loading: "Carregamento...",
            something_went_wrong: "Algo correu mal",
            no_supported_wallets: "Ainda n\xe3o h\xe1 carteiras suportadas",
            no_wallets_found: "Nenhuma carteira encontrada",
          },
          zh: {
            choose_preferred_wallet: "\u9009\u62e9\u4f60\u7684\u94b1\u5305",
            connect_mobile_wallet:
              "\u8fde\u63a5\u81f3\u79fb\u52a8\u7aef\u94b1\u5305",
            scan_qrcode_with_wallet:
              "\u4f7f\u7528\u517c\u5bb9 WalletConnect \u7684\u94b1\u5305\u626b\u63cf\u4e8c\u7ef4\u7801",
            connect: "\u8fde\u63a5",
            qrcode: "\u4e8c\u7ef4\u7801",
            mobile: "\u79fb\u52a8",
            desktop: "\u684c\u9762",
            copy_to_clipboard: "\u590d\u5236\u5230\u526a\u8d34\u677f",
            copied_to_clipboard:
              "\u590d\u5236\u5230\u526a\u8d34\u677f\u6210\u529f\uff01",
            connect_with: "\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u8fde\u63a5",
            loading: "\u6b63\u5728\u52a0\u8f7d...",
            something_went_wrong: "\u51fa\u4e86\u95ee\u9898",
            no_supported_wallets:
              "\u76ee\u524d\u8fd8\u6ca1\u6709\u652f\u6301\u7684\u94b1\u5305",
            no_wallets_found: "\u6ca1\u6709\u627e\u5230\u94b1\u5305",
          },
          fa: {
            choose_preferred_wallet:
              "\u06a9\u06cc\u0641 \u067e\u0648\u0644 \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u062e\u0648\u062f \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f",
            connect_mobile_wallet:
              "\u0628\u0647 \u06a9\u06cc\u0641 \u067e\u0648\u0644 \u0645\u0648\u0628\u0627\u06cc\u0644 \u0648\u0635\u0644 \u0634\u0648\u06cc\u062f",
            scan_qrcode_with_wallet:
              "\u06a9\u062f QR \u0631\u0627 \u0628\u0627 \u06cc\u06a9 \u06a9\u06cc\u0641 \u067e\u0648\u0644 \u0633\u0627\u0632\u06af\u0627\u0631 \u0628\u0627 WalletConnect \u0627\u0633\u06a9\u0646 \u06a9\u0646\u06cc\u062f",
            connect: "\u0627\u062a\u0635\u0627\u0644",
            qrcode: "\u06a9\u062f QR",
            mobile: "\u0633\u06cc\u0627\u0631",
            desktop: "\u062f\u0633\u06a9\u062a\u0627\u067e",
            copy_to_clipboard:
              "\u06a9\u067e\u06cc \u0628\u0647 \u06a9\u0644\u06cc\u067e \u0628\u0648\u0631\u062f",
            copied_to_clipboard:
              "\u062f\u0631 \u06a9\u0644\u06cc\u067e \u0628\u0648\u0631\u062f \u06a9\u067e\u06cc \u0634\u062f!",
            connect_with: "\u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0627",
            loading: "...\u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc",
            something_went_wrong:
              "\u0645\u0634\u06a9\u0644\u06cc \u067e\u06cc\u0634 \u0622\u0645\u062f",
            no_supported_wallets:
              "\u0647\u0646\u0648\u0632 \u0647\u06cc\u0686 \u06a9\u06cc\u0641 \u067e\u0648\u0644 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0634\u062f\u0647 \u0627\u06cc \u0648\u062c\u0648\u062f \u0646\u062f\u0627\u0631\u062f",
            no_wallets_found:
              "\u0647\u06cc\u0686 \u06a9\u06cc\u0641 \u067e\u0648\u0644\u06cc \u067e\u06cc\u062f\u0627 \u0646\u0634\u062f",
          },
        };
        function b() {
          var t = i.getDocumentOrThrow(),
            e = t.getElementById(l);
          e &&
            ((e.className = e.className.replace("fadeIn", "fadeOut")),
            setTimeout(function () {
              var e = t.getElementById(u);
              e && t.body.removeChild(e);
            }, 300));
        }
        function k(t) {
          return function () {
            b(), t && t();
          };
        }
        function M() {
          var t = i.getNavigatorOrThrow().language.split("-")[0] || "en";
          return w[t] || w.en;
        }
        function x(t, e, n) {
          !(function () {
            var t = i.getDocumentOrThrow(),
              e = t.getElementById(c);
            e && t.head.removeChild(e);
            var n = t.createElement("style");
            n.setAttribute("id", c),
              (n.innerText =
                ':root {\n  --animation-duration: 300ms;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.animated {\n  animation-duration: var(--animation-duration);\n  animation-fill-mode: both;\n}\n\n.fadeIn {\n  animation-name: fadeIn;\n}\n\n.fadeOut {\n  animation-name: fadeOut;\n}\n\n#walletconnect-wrapper {\n  -webkit-user-select: none;\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  user-select: none;\n  width: 100%;\n  z-index: 99999999999999;\n}\n\n.walletconnect-modal__headerLogo {\n  height: 21px;\n}\n\n.walletconnect-modal__header p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n  align-items: flex-start;\n  display: flex;\n  flex: 1;\n  margin-left: 5px;\n}\n\n.walletconnect-modal__close__wrapper {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  z-index: 10000;\n  background: white;\n  border-radius: 26px;\n  padding: 6px;\n  box-sizing: border-box;\n  width: 26px;\n  height: 26px;\n  cursor: pointer;\n}\n\n.walletconnect-modal__close__icon {\n  position: relative;\n  top: 7px;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(45deg);\n}\n\n.walletconnect-modal__close__line1 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n}\n\n.walletconnect-modal__close__line2 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n  transform: rotate(90deg);\n}\n\n.walletconnect-qrcode__base {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  background: rgba(37, 41, 46, 0.95);\n  height: 100%;\n  left: 0;\n  pointer-events: auto;\n  position: fixed;\n  top: 0;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  width: 100%;\n  will-change: opacity;\n  padding: 40px;\n  box-sizing: border-box;\n}\n\n.walletconnect-qrcode__text {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 10px 0 20px 0;\n  text-align: center;\n  width: 100%;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-qrcode__text {\n    font-size: 4vw;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-qrcode__text {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-qrcode__image {\n  width: calc(100% - 30px);\n  box-sizing: border-box;\n  cursor: none;\n  margin: 0 auto;\n}\n\n.walletconnect-qrcode__notification {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  font-size: 16px;\n  padding: 16px 20px;\n  border-radius: 16px;\n  text-align: center;\n  transition: all 0.1s ease-in-out;\n  background: white;\n  color: black;\n  margin-bottom: -60px;\n  opacity: 0;\n}\n\n.walletconnect-qrcode__notification.notification__show {\n  opacity: 1;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__header {\n    height: 130px;\n  }\n  .walletconnect-modal__base {\n    overflow: auto;\n  }\n}\n\n@media only screen and (min-device-width: 415px) and (max-width: 768px) {\n  #content {\n    max-width: 768px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 375px) and (max-width: 415px) {\n  #content {\n    max-width: 414px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 320px) and (max-width: 375px) {\n  #content {\n    max-width: 375px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  #content {\n    max-width: 320px;\n    box-sizing: border-box;\n  }\n}\n\n.walletconnect-modal__base {\n  -webkit-font-smoothing: antialiased;\n  background: #ffffff;\n  border-radius: 24px;\n  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);\n  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,\n    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,\n    "Open Sans", "Helvetica Neue", sans-serif;\n  margin-top: 41px;\n  padding: 24px 24px 22px;\n  pointer-events: auto;\n  position: relative;\n  text-align: center;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  will-change: transform;\n  overflow: visible;\n  transform: translateY(-50%);\n  top: 50%;\n  max-width: 500px;\n  margin: auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__base {\n    padding: 24px 12px;\n  }\n}\n\n.walletconnect-modal__base .hidden {\n  transform: translateY(150%);\n  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);\n}\n\n.walletconnect-modal__header {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  left: 0;\n  justify-content: space-between;\n  position: absolute;\n  top: -42px;\n  width: 100%;\n}\n\n.walletconnect-modal__base .wc-logo {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  margin-top: 15px;\n  padding-bottom: 15px;\n  pointer-events: auto;\n}\n\n.walletconnect-modal__base .wc-logo div {\n  background-color: #3399ff;\n  height: 21px;\n  margin-right: 5px;\n  mask-image: url("images/wc-logo.svg") center no-repeat;\n  width: 32px;\n}\n\n.walletconnect-modal__base .wc-logo p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n\n.walletconnect-modal__base h2 {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 0 0 19px 0;\n  text-align: center;\n  width: 100%;\n}\n\n.walletconnect-modal__base__row {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  align-items: center;\n  border-radius: 20px;\n  cursor: pointer;\n  display: flex;\n  height: 56px;\n  justify-content: space-between;\n  padding: 0 15px;\n  position: relative;\n  margin: 0px 0px 8px;\n  text-align: left;\n  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  will-change: transform;\n  text-decoration: none;\n}\n\n.walletconnect-modal__base__row:hover {\n  background: rgba(60, 66, 82, 0.06);\n}\n\n.walletconnect-modal__base__row:active {\n  background: rgba(60, 66, 82, 0.06);\n  transform: scale(0.975);\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n.walletconnect-modal__base__row__h3 {\n  color: #25292e;\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0;\n  padding-bottom: 3px;\n}\n\n.walletconnect-modal__base__row__right {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.walletconnect-modal__base__row__right__app-icon {\n  border-radius: 8px;\n  height: 34px;\n  margin: 0 11px 2px 0;\n  width: 34px;\n  background-size: 100%;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-modal__base__row__right__caret {\n  height: 18px;\n  opacity: 0.3;\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  width: 8px;\n  will-change: opacity;\n}\n\n.walletconnect-modal__base__row:hover .caret,\n.walletconnect-modal__base__row:active .caret {\n  opacity: 0.6;\n}\n\n.walletconnect-modal__mobile__toggle {\n  width: 80%;\n  display: flex;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  border-radius: 8px;\n  margin-bottom: 18px;\n  background: #d4d5d9;\n}\n\n.walletconnect-modal__single_wallet {\n  display: flex;\n  justify-content: center;\n  margin-top: 7px;\n  margin-bottom: 18px;\n}\n\n.walletconnect-modal__single_wallet a {\n  cursor: pointer;\n  color: rgb(64, 153, 255);\n  font-size: 21px;\n  font-weight: 800;\n  text-decoration: none !important;\n  margin: 0 auto;\n}\n\n.walletconnect-modal__mobile__toggle_selector {\n  width: calc(50% - 8px);\n  background: white;\n  position: absolute;\n  border-radius: 5px;\n  height: calc(100% - 8px);\n  top: 4px;\n  transition: all 0.2s ease-in-out;\n  transform: translate3d(4px, 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {\n  transform: translate3d(calc(100% + 12px), 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle a {\n  font-size: 12px;\n  width: 50%;\n  text-align: center;\n  padding: 8px;\n  margin: 0;\n  font-weight: 600;\n  z-index: 1;\n}\n\n.walletconnect-modal__footer {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__footer {\n    margin-top: 5vw;\n  }\n}\n\n.walletconnect-modal__footer a {\n  cursor: pointer;\n  color: #898d97;\n  font-size: 15px;\n  margin: 0 auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__footer a {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-connect__buttons__wrapper {\n  max-height: 44vh;\n}\n\n.walletconnect-connect__buttons__wrapper__android {\n  margin: 50% 0;\n}\n\n.walletconnect-connect__buttons__wrapper__wrap {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  margin: 10px 0;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__buttons__wrapper__wrap {\n    margin-top: 40px;\n  }\n}\n\n.walletconnect-connect__button {\n  background-color: rgb(64, 153, 255);\n  padding: 12px;\n  border-radius: 8px;\n  text-decoration: none;\n  color: rgb(255, 255, 255);\n  font-weight: 500;\n}\n\n.walletconnect-connect__button__icon_anchor {\n  cursor: pointer;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 8px;\n  width: 42px;\n  justify-self: center;\n  flex-direction: column;\n  text-decoration: none !important;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-connect__button__icon_anchor {\n    margin: 4px;\n  }\n}\n\n.walletconnect-connect__button__icon {\n  border-radius: 10px;\n  height: 42px;\n  margin: 0;\n  width: 42px;\n  background-size: cover !important;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-connect__button__text {\n  color: #424952;\n  font-size: 2.7vw;\n  text-decoration: none !important;\n  padding: 0;\n  margin-top: 1.8vw;\n  font-weight: 600;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__button__text {\n    font-size: 16px;\n    margin-top: 12px;\n  }\n}\n\n.walletconnect-search__input {\n  border: none;\n  background: #d4d5d9;\n  border-style: none;\n  padding: 8px 16px;\n  outline: none;\n  font-style: normal;\n  font-stretch: normal;\n  font-size: 16px;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  border-radius: 8px;\n  width: calc(100% - 16px);\n  margin: 0;\n  margin-bottom: 8px;\n}\n'),
              t.head.appendChild(n);
          })();
          var r = (function () {
            var t = i.getDocumentOrThrow(),
              e = t.createElement("div");
            return e.setAttribute("id", u), t.body.appendChild(e), e;
          })();
          s.render(
            s.createElement(y, {
              text: M(),
              uri: t,
              onClose: k(e),
              qrcodeModalOptions: n,
            }),
            r
          );
        }
        var E = function () {
          return (
            "undefined" !== typeof e &&
            "undefined" !== typeof e.versions &&
            "undefined" !== typeof e.versions.node
          );
        };
        var O = {
          open: function (t, e, n) {
            console.log(t),
              E()
                ? (function (t) {
                    o.toString(t, { type: "terminal" }).then(console.log);
                  })(t)
                : x(t, e, n);
          },
          close: function () {
            E() || b();
          },
        };
        t.exports = O;
      }.call(this, n(145)));
    },
    1073: function (t, e, n) {
      var r = n(1074),
        i = n(1075),
        o = n(1092),
        a = n(1093);
      function s(t, e, n, o, a) {
        var s = [].slice.call(arguments, 1),
          u = s.length,
          c = "function" === typeof s[u - 1];
        if (!c && !r()) throw new Error("Callback required as last argument");
        if (!c) {
          if (u < 1) throw new Error("Too few arguments provided");
          return (
            1 === u
              ? ((n = e), (e = o = void 0))
              : 2 !== u || e.getContext || ((o = n), (n = e), (e = void 0)),
            new Promise(function (r, a) {
              try {
                var s = i.create(n, o);
                r(t(s, e, o));
              } catch (u) {
                a(u);
              }
            })
          );
        }
        if (u < 2) throw new Error("Too few arguments provided");
        2 === u
          ? ((a = n), (n = e), (e = o = void 0))
          : 3 === u &&
            (e.getContext && "undefined" === typeof a
              ? ((a = o), (o = void 0))
              : ((a = o), (o = n), (n = e), (e = void 0)));
        try {
          var l = i.create(n, o);
          a(null, t(l, e, o));
        } catch (h) {
          a(h);
        }
      }
      (e.create = i.create),
        (e.toCanvas = s.bind(null, o.render)),
        (e.toDataURL = s.bind(null, o.renderToDataURL)),
        (e.toString = s.bind(null, function (t, e, n) {
          return a.render(t, n);
        }));
    },
    1074: function (t, e) {
      t.exports = function () {
        return (
          "function" === typeof Promise &&
          Promise.prototype &&
          Promise.prototype.then
        );
      };
    },
    1075: function (t, e, n) {
      var r = n(909),
        i = n(901),
        o = n(957),
        a = n(1076),
        s = n(1077),
        u = n(1078),
        c = n(1079),
        l = n(1080),
        h = n(1015),
        f = n(1081),
        d = n(1084),
        p = n(1085),
        m = n(902),
        v = n(1086),
        g = n(956);
      function _(t, e, n) {
        var r,
          i,
          o = t.size,
          a = p.getEncodedBits(e, n);
        for (r = 0; r < 15; r++)
          (i = 1 === ((a >> r) & 1)),
            r < 6
              ? t.set(r, 8, i, !0)
              : r < 8
              ? t.set(r + 1, 8, i, !0)
              : t.set(o - 15 + r, 8, i, !0),
            r < 8
              ? t.set(8, o - r - 1, i, !0)
              : r < 9
              ? t.set(8, 15 - r - 1 + 1, i, !0)
              : t.set(8, 15 - r - 1, i, !0);
        t.set(o - 8, 8, 1, !0);
      }
      function y(t, e, n) {
        var o = new a();
        n.forEach(function (e) {
          o.put(e.mode.bit, 4),
            o.put(e.getLength(), m.getCharCountIndicator(e.mode, t)),
            e.write(o);
        });
        var s =
          8 * (i.getSymbolTotalCodewords(t) - h.getTotalCodewordsCount(t, e));
        for (
          o.getLengthInBits() + 4 <= s && o.put(0, 4);
          o.getLengthInBits() % 8 !== 0;

        )
          o.putBit(0);
        for (var u = (s - o.getLengthInBits()) / 8, c = 0; c < u; c++)
          o.put(c % 2 ? 17 : 236, 8);
        return (function (t, e, n) {
          for (
            var o = i.getSymbolTotalCodewords(e),
              a = h.getTotalCodewordsCount(e, n),
              s = o - a,
              u = h.getBlocksCount(e, n),
              c = u - (o % u),
              l = Math.floor(o / u),
              d = Math.floor(s / u),
              p = d + 1,
              m = l - d,
              v = new f(m),
              g = 0,
              _ = new Array(u),
              y = new Array(u),
              w = 0,
              b = r.from(t.buffer),
              k = 0;
            k < u;
            k++
          ) {
            var M = k < c ? d : p;
            (_[k] = b.slice(g, g + M)),
              (y[k] = v.encode(_[k])),
              (g += M),
              (w = Math.max(w, M));
          }
          var x,
            E,
            O = r.alloc(o),
            C = 0;
          for (x = 0; x < w; x++)
            for (E = 0; E < u; E++) x < _[E].length && (O[C++] = _[E][x]);
          for (x = 0; x < m; x++) for (E = 0; E < u; E++) O[C++] = y[E][x];
          return O;
        })(o, t, e);
      }
      function w(t, e, n, r) {
        var o;
        if (g(t)) o = v.fromArray(t);
        else {
          if ("string" !== typeof t) throw new Error("Invalid data");
          var a = e;
          if (!a) {
            var h = v.rawSplit(t);
            a = d.getBestVersionForData(h, n);
          }
          o = v.fromString(t, a || 40);
        }
        var f = d.getBestVersionForData(o, n);
        if (!f)
          throw new Error(
            "The amount of data is too big to be stored in a QR Code"
          );
        if (e) {
          if (e < f)
            throw new Error(
              "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " +
                f +
                ".\n"
            );
        } else e = f;
        var p = y(e, n, o),
          m = i.getSymbolSize(e),
          w = new s(m);
        return (
          (function (t, e) {
            for (
              var n = t.size, r = c.getPositions(e), i = 0;
              i < r.length;
              i++
            )
              for (var o = r[i][0], a = r[i][1], s = -1; s <= 7; s++)
                if (!(o + s <= -1 || n <= o + s))
                  for (var u = -1; u <= 7; u++)
                    a + u <= -1 ||
                      n <= a + u ||
                      ((s >= 0 && s <= 6 && (0 === u || 6 === u)) ||
                      (u >= 0 && u <= 6 && (0 === s || 6 === s)) ||
                      (s >= 2 && s <= 4 && u >= 2 && u <= 4)
                        ? t.set(o + s, a + u, !0, !0)
                        : t.set(o + s, a + u, !1, !0));
          })(w, e),
          (function (t) {
            for (var e = t.size, n = 8; n < e - 8; n++) {
              var r = n % 2 === 0;
              t.set(n, 6, r, !0), t.set(6, n, r, !0);
            }
          })(w),
          (function (t, e) {
            for (var n = u.getPositions(e), r = 0; r < n.length; r++)
              for (var i = n[r][0], o = n[r][1], a = -2; a <= 2; a++)
                for (var s = -2; s <= 2; s++)
                  -2 === a ||
                  2 === a ||
                  -2 === s ||
                  2 === s ||
                  (0 === a && 0 === s)
                    ? t.set(i + a, o + s, !0, !0)
                    : t.set(i + a, o + s, !1, !0);
          })(w, e),
          _(w, n, 0),
          e >= 7 &&
            (function (t, e) {
              for (
                var n, r, i, o = t.size, a = d.getEncodedBits(e), s = 0;
                s < 18;
                s++
              )
                (n = Math.floor(s / 3)),
                  (r = (s % 3) + o - 8 - 3),
                  (i = 1 === ((a >> s) & 1)),
                  t.set(n, r, i, !0),
                  t.set(r, n, i, !0);
            })(w, e),
          (function (t, e) {
            for (
              var n = t.size, r = -1, i = n - 1, o = 7, a = 0, s = n - 1;
              s > 0;
              s -= 2
            )
              for (6 === s && s--; ; ) {
                for (var u = 0; u < 2; u++)
                  if (!t.isReserved(i, s - u)) {
                    var c = !1;
                    a < e.length && (c = 1 === ((e[a] >>> o) & 1)),
                      t.set(i, s - u, c),
                      -1 === --o && (a++, (o = 7));
                  }
                if ((i += r) < 0 || n <= i) {
                  (i -= r), (r = -r);
                  break;
                }
              }
          })(w, p),
          isNaN(r) && (r = l.getBestMask(w, _.bind(null, w, n))),
          l.applyMask(r, w),
          _(w, n, r),
          {
            modules: w,
            version: e,
            errorCorrectionLevel: n,
            maskPattern: r,
            segments: o,
          }
        );
      }
      e.create = function (t, e) {
        if ("undefined" === typeof t || "" === t)
          throw new Error("No input text");
        var n,
          r,
          a = o.M;
        return (
          "undefined" !== typeof e &&
            ((a = o.from(e.errorCorrectionLevel, o.M)),
            (n = d.from(e.version)),
            (r = l.from(e.maskPattern)),
            e.toSJISFunc && i.setToSJISFunction(e.toSJISFunc)),
          w(t, n, a, r)
        );
      };
    },
    1076: function (t, e) {
      function n() {
        (this.buffer = []), (this.length = 0);
      }
      (n.prototype = {
        get: function (t) {
          var e = Math.floor(t / 8);
          return 1 === ((this.buffer[e] >>> (7 - (t % 8))) & 1);
        },
        put: function (t, e) {
          for (var n = 0; n < e; n++)
            this.putBit(1 === ((t >>> (e - n - 1)) & 1));
        },
        getLengthInBits: function () {
          return this.length;
        },
        putBit: function (t) {
          var e = Math.floor(this.length / 8);
          this.buffer.length <= e && this.buffer.push(0),
            t && (this.buffer[e] |= 128 >>> this.length % 8),
            this.length++;
        },
      }),
        (t.exports = n);
    },
    1077: function (t, e, n) {
      var r = n(909);
      function i(t) {
        if (!t || t < 1)
          throw new Error("BitMatrix size must be defined and greater than 0");
        (this.size = t),
          (this.data = r.alloc(t * t)),
          (this.reservedBit = r.alloc(t * t));
      }
      (i.prototype.set = function (t, e, n, r) {
        var i = t * this.size + e;
        (this.data[i] = n), r && (this.reservedBit[i] = !0);
      }),
        (i.prototype.get = function (t, e) {
          return this.data[t * this.size + e];
        }),
        (i.prototype.xor = function (t, e, n) {
          this.data[t * this.size + e] ^= n;
        }),
        (i.prototype.isReserved = function (t, e) {
          return this.reservedBit[t * this.size + e];
        }),
        (t.exports = i);
    },
    1078: function (t, e, n) {
      var r = n(901).getSymbolSize;
      (e.getRowColCoords = function (t) {
        if (1 === t) return [];
        for (
          var e = Math.floor(t / 7) + 2,
            n = r(t),
            i = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * e - 2)),
            o = [n - 7],
            a = 1;
          a < e - 1;
          a++
        )
          o[a] = o[a - 1] - i;
        return o.push(6), o.reverse();
      }),
        (e.getPositions = function (t) {
          for (
            var n = [], r = e.getRowColCoords(t), i = r.length, o = 0;
            o < i;
            o++
          )
            for (var a = 0; a < i; a++)
              (0 === o && 0 === a) ||
                (0 === o && a === i - 1) ||
                (o === i - 1 && 0 === a) ||
                n.push([r[o], r[a]]);
          return n;
        });
    },
    1079: function (t, e, n) {
      var r = n(901).getSymbolSize;
      e.getPositions = function (t) {
        var e = r(t);
        return [
          [0, 0],
          [e - 7, 0],
          [0, e - 7],
        ];
      };
    },
    1080: function (t, e) {
      e.Patterns = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7,
      };
      var n = 3,
        r = 3,
        i = 40,
        o = 10;
      function a(t, n, r) {
        switch (t) {
          case e.Patterns.PATTERN000:
            return (n + r) % 2 === 0;
          case e.Patterns.PATTERN001:
            return n % 2 === 0;
          case e.Patterns.PATTERN010:
            return r % 3 === 0;
          case e.Patterns.PATTERN011:
            return (n + r) % 3 === 0;
          case e.Patterns.PATTERN100:
            return (Math.floor(n / 2) + Math.floor(r / 3)) % 2 === 0;
          case e.Patterns.PATTERN101:
            return ((n * r) % 2) + ((n * r) % 3) === 0;
          case e.Patterns.PATTERN110:
            return (((n * r) % 2) + ((n * r) % 3)) % 2 === 0;
          case e.Patterns.PATTERN111:
            return (((n * r) % 3) + ((n + r) % 2)) % 2 === 0;
          default:
            throw new Error("bad maskPattern:" + t);
        }
      }
      (e.isValid = function (t) {
        return null != t && "" !== t && !isNaN(t) && t >= 0 && t <= 7;
      }),
        (e.from = function (t) {
          return e.isValid(t) ? parseInt(t, 10) : void 0;
        }),
        (e.getPenaltyN1 = function (t) {
          for (
            var e = t.size, r = 0, i = 0, o = 0, a = null, s = null, u = 0;
            u < e;
            u++
          ) {
            (i = o = 0), (a = s = null);
            for (var c = 0; c < e; c++) {
              var l = t.get(u, c);
              l === a ? i++ : (i >= 5 && (r += n + (i - 5)), (a = l), (i = 1)),
                (l = t.get(c, u)) === s
                  ? o++
                  : (o >= 5 && (r += n + (o - 5)), (s = l), (o = 1));
            }
            i >= 5 && (r += n + (i - 5)), o >= 5 && (r += n + (o - 5));
          }
          return r;
        }),
        (e.getPenaltyN2 = function (t) {
          for (var e = t.size, n = 0, i = 0; i < e - 1; i++)
            for (var o = 0; o < e - 1; o++) {
              var a =
                t.get(i, o) +
                t.get(i, o + 1) +
                t.get(i + 1, o) +
                t.get(i + 1, o + 1);
              (4 !== a && 0 !== a) || n++;
            }
          return n * r;
        }),
        (e.getPenaltyN3 = function (t) {
          for (var e = t.size, n = 0, r = 0, o = 0, a = 0; a < e; a++) {
            r = o = 0;
            for (var s = 0; s < e; s++)
              (r = ((r << 1) & 2047) | t.get(a, s)),
                s >= 10 && (1488 === r || 93 === r) && n++,
                (o = ((o << 1) & 2047) | t.get(s, a)),
                s >= 10 && (1488 === o || 93 === o) && n++;
          }
          return n * i;
        }),
        (e.getPenaltyN4 = function (t) {
          for (var e = 0, n = t.data.length, r = 0; r < n; r++) e += t.data[r];
          return Math.abs(Math.ceil((100 * e) / n / 5) - 10) * o;
        }),
        (e.applyMask = function (t, e) {
          for (var n = e.size, r = 0; r < n; r++)
            for (var i = 0; i < n; i++)
              e.isReserved(i, r) || e.xor(i, r, a(t, i, r));
        }),
        (e.getBestMask = function (t, n) {
          for (
            var r = Object.keys(e.Patterns).length, i = 0, o = 1 / 0, a = 0;
            a < r;
            a++
          ) {
            n(a), e.applyMask(a, t);
            var s =
              e.getPenaltyN1(t) +
              e.getPenaltyN2(t) +
              e.getPenaltyN3(t) +
              e.getPenaltyN4(t);
            e.applyMask(a, t), s < o && ((o = s), (i = a));
          }
          return i;
        });
    },
    1081: function (t, e, n) {
      var r = n(909),
        i = n(1082),
        o = n(232).Buffer;
      function a(t) {
        (this.genPoly = void 0),
          (this.degree = t),
          this.degree && this.initialize(this.degree);
      }
      (a.prototype.initialize = function (t) {
        (this.degree = t), (this.genPoly = i.generateECPolynomial(this.degree));
      }),
        (a.prototype.encode = function (t) {
          if (!this.genPoly) throw new Error("Encoder not initialized");
          var e = r.alloc(this.degree),
            n = o.concat([t, e], t.length + this.degree),
            a = i.mod(n, this.genPoly),
            s = this.degree - a.length;
          if (s > 0) {
            var u = r.alloc(this.degree);
            return a.copy(u, s), u;
          }
          return a;
        }),
        (t.exports = a);
    },
    1082: function (t, e, n) {
      var r = n(909),
        i = n(1083);
      (e.mul = function (t, e) {
        for (var n = r.alloc(t.length + e.length - 1), o = 0; o < t.length; o++)
          for (var a = 0; a < e.length; a++) n[o + a] ^= i.mul(t[o], e[a]);
        return n;
      }),
        (e.mod = function (t, e) {
          for (var n = r.from(t); n.length - e.length >= 0; ) {
            for (var o = n[0], a = 0; a < e.length; a++) n[a] ^= i.mul(e[a], o);
            for (var s = 0; s < n.length && 0 === n[s]; ) s++;
            n = n.slice(s);
          }
          return n;
        }),
        (e.generateECPolynomial = function (t) {
          for (var n = r.from([1]), o = 0; o < t; o++)
            n = e.mul(n, [1, i.exp(o)]);
          return n;
        });
    },
    1083: function (t, e, n) {
      var r = n(909),
        i = r.alloc(512),
        o = r.alloc(256);
      !(function () {
        for (var t = 1, e = 0; e < 255; e++)
          (i[e] = t), (o[t] = e), 256 & (t <<= 1) && (t ^= 285);
        for (e = 255; e < 512; e++) i[e] = i[e - 255];
      })(),
        (e.log = function (t) {
          if (t < 1) throw new Error("log(" + t + ")");
          return o[t];
        }),
        (e.exp = function (t) {
          return i[t];
        }),
        (e.mul = function (t, e) {
          return 0 === t || 0 === e ? 0 : i[o[t] + o[e]];
        });
    },
    1084: function (t, e, n) {
      var r = n(901),
        i = n(1015),
        o = n(957),
        a = n(902),
        s = n(1016),
        u = n(956),
        c = r.getBCHDigit(7973);
      function l(t, e) {
        return a.getCharCountIndicator(t, e) + 4;
      }
      function h(t, e) {
        var n = 0;
        return (
          t.forEach(function (t) {
            var r = l(t.mode, e);
            n += r + t.getBitsLength();
          }),
          n
        );
      }
      (e.from = function (t, e) {
        return s.isValid(t) ? parseInt(t, 10) : e;
      }),
        (e.getCapacity = function (t, e, n) {
          if (!s.isValid(t)) throw new Error("Invalid QR Code version");
          "undefined" === typeof n && (n = a.BYTE);
          var o =
            8 * (r.getSymbolTotalCodewords(t) - i.getTotalCodewordsCount(t, e));
          if (n === a.MIXED) return o;
          var u = o - l(n, t);
          switch (n) {
            case a.NUMERIC:
              return Math.floor((u / 10) * 3);
            case a.ALPHANUMERIC:
              return Math.floor((u / 11) * 2);
            case a.KANJI:
              return Math.floor(u / 13);
            case a.BYTE:
            default:
              return Math.floor(u / 8);
          }
        }),
        (e.getBestVersionForData = function (t, n) {
          var r,
            i = o.from(n, o.M);
          if (u(t)) {
            if (t.length > 1)
              return (function (t, n) {
                for (var r = 1; r <= 40; r++)
                  if (h(t, r) <= e.getCapacity(r, n, a.MIXED)) return r;
              })(t, i);
            if (0 === t.length) return 1;
            r = t[0];
          } else r = t;
          return (function (t, n, r) {
            for (var i = 1; i <= 40; i++)
              if (n <= e.getCapacity(i, r, t)) return i;
          })(r.mode, r.getLength(), i);
        }),
        (e.getEncodedBits = function (t) {
          if (!s.isValid(t) || t < 7)
            throw new Error("Invalid QR Code version");
          for (var e = t << 12; r.getBCHDigit(e) - c >= 0; )
            e ^= 7973 << (r.getBCHDigit(e) - c);
          return (t << 12) | e;
        });
    },
    1085: function (t, e, n) {
      var r = n(901),
        i = r.getBCHDigit(1335);
      e.getEncodedBits = function (t, e) {
        for (var n = (t.bit << 3) | e, o = n << 10; r.getBCHDigit(o) - i >= 0; )
          o ^= 1335 << (r.getBCHDigit(o) - i);
        return 21522 ^ ((n << 10) | o);
      };
    },
    1086: function (t, e, n) {
      var r = n(902),
        i = n(1087),
        o = n(1088),
        a = n(1089),
        s = n(1090),
        u = n(1017),
        c = n(901),
        l = n(1091);
      function h(t) {
        return unescape(encodeURIComponent(t)).length;
      }
      function f(t, e, n) {
        for (var r, i = []; null !== (r = t.exec(n)); )
          i.push({ data: r[0], index: r.index, mode: e, length: r[0].length });
        return i;
      }
      function d(t) {
        var e,
          n,
          i = f(u.NUMERIC, r.NUMERIC, t),
          o = f(u.ALPHANUMERIC, r.ALPHANUMERIC, t);
        return (
          c.isKanjiModeEnabled()
            ? ((e = f(u.BYTE, r.BYTE, t)), (n = f(u.KANJI, r.KANJI, t)))
            : ((e = f(u.BYTE_KANJI, r.BYTE, t)), (n = [])),
          i
            .concat(o, e, n)
            .sort(function (t, e) {
              return t.index - e.index;
            })
            .map(function (t) {
              return { data: t.data, mode: t.mode, length: t.length };
            })
        );
      }
      function p(t, e) {
        switch (e) {
          case r.NUMERIC:
            return i.getBitsLength(t);
          case r.ALPHANUMERIC:
            return o.getBitsLength(t);
          case r.KANJI:
            return s.getBitsLength(t);
          case r.BYTE:
            return a.getBitsLength(t);
        }
      }
      function m(t, e) {
        var n,
          u = r.getBestModeForData(t);
        if ((n = r.from(e, u)) !== r.BYTE && n.bit < u.bit)
          throw new Error(
            '"' +
              t +
              '" cannot be encoded with mode ' +
              r.toString(n) +
              ".\n Suggested mode is: " +
              r.toString(u)
          );
        switch ((n !== r.KANJI || c.isKanjiModeEnabled() || (n = r.BYTE), n)) {
          case r.NUMERIC:
            return new i(t);
          case r.ALPHANUMERIC:
            return new o(t);
          case r.KANJI:
            return new s(t);
          case r.BYTE:
            return new a(t);
        }
      }
      (e.fromArray = function (t) {
        return t.reduce(function (t, e) {
          return (
            "string" === typeof e
              ? t.push(m(e, null))
              : e.data && t.push(m(e.data, e.mode)),
            t
          );
        }, []);
      }),
        (e.fromString = function (t, n) {
          for (
            var i = (function (t) {
                for (var e = [], n = 0; n < t.length; n++) {
                  var i = t[n];
                  switch (i.mode) {
                    case r.NUMERIC:
                      e.push([
                        i,
                        {
                          data: i.data,
                          mode: r.ALPHANUMERIC,
                          length: i.length,
                        },
                        { data: i.data, mode: r.BYTE, length: i.length },
                      ]);
                      break;
                    case r.ALPHANUMERIC:
                      e.push([
                        i,
                        { data: i.data, mode: r.BYTE, length: i.length },
                      ]);
                      break;
                    case r.KANJI:
                      e.push([
                        i,
                        { data: i.data, mode: r.BYTE, length: h(i.data) },
                      ]);
                      break;
                    case r.BYTE:
                      e.push([
                        { data: i.data, mode: r.BYTE, length: h(i.data) },
                      ]);
                  }
                }
                return e;
              })(d(t, c.isKanjiModeEnabled())),
              o = (function (t, e) {
                for (
                  var n = {}, i = { start: {} }, o = ["start"], a = 0;
                  a < t.length;
                  a++
                ) {
                  for (var s = t[a], u = [], c = 0; c < s.length; c++) {
                    var l = s[c],
                      h = "" + a + c;
                    u.push(h), (n[h] = { node: l, lastCount: 0 }), (i[h] = {});
                    for (var f = 0; f < o.length; f++) {
                      var d = o[f];
                      n[d] && n[d].node.mode === l.mode
                        ? ((i[d][h] =
                            p(n[d].lastCount + l.length, l.mode) -
                            p(n[d].lastCount, l.mode)),
                          (n[d].lastCount += l.length))
                        : (n[d] && (n[d].lastCount = l.length),
                          (i[d][h] =
                            p(l.length, l.mode) +
                            4 +
                            r.getCharCountIndicator(l.mode, e)));
                    }
                  }
                  o = u;
                }
                for (f = 0; f < o.length; f++) i[o[f]].end = 0;
                return { map: i, table: n };
              })(i, n),
              a = l.find_path(o.map, "start", "end"),
              s = [],
              u = 1;
            u < a.length - 1;
            u++
          )
            s.push(o.table[a[u]].node);
          return e.fromArray(
            (function (t) {
              return t.reduce(function (t, e) {
                var n = t.length - 1 >= 0 ? t[t.length - 1] : null;
                return n && n.mode === e.mode
                  ? ((t[t.length - 1].data += e.data), t)
                  : (t.push(e), t);
              }, []);
            })(s)
          );
        }),
        (e.rawSplit = function (t) {
          return e.fromArray(d(t, c.isKanjiModeEnabled()));
        });
    },
    1087: function (t, e, n) {
      var r = n(902);
      function i(t) {
        (this.mode = r.NUMERIC), (this.data = t.toString());
      }
      (i.getBitsLength = function (t) {
        return 10 * Math.floor(t / 3) + (t % 3 ? (t % 3) * 3 + 1 : 0);
      }),
        (i.prototype.getLength = function () {
          return this.data.length;
        }),
        (i.prototype.getBitsLength = function () {
          return i.getBitsLength(this.data.length);
        }),
        (i.prototype.write = function (t) {
          var e, n, r;
          for (e = 0; e + 3 <= this.data.length; e += 3)
            (n = this.data.substr(e, 3)), (r = parseInt(n, 10)), t.put(r, 10);
          var i = this.data.length - e;
          i > 0 &&
            ((n = this.data.substr(e)),
            (r = parseInt(n, 10)),
            t.put(r, 3 * i + 1));
        }),
        (t.exports = i);
    },
    1088: function (t, e, n) {
      var r = n(902),
        i = [
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
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
          " ",
          "$",
          "%",
          "*",
          "+",
          "-",
          ".",
          "/",
          ":",
        ];
      function o(t) {
        (this.mode = r.ALPHANUMERIC), (this.data = t);
      }
      (o.getBitsLength = function (t) {
        return 11 * Math.floor(t / 2) + (t % 2) * 6;
      }),
        (o.prototype.getLength = function () {
          return this.data.length;
        }),
        (o.prototype.getBitsLength = function () {
          return o.getBitsLength(this.data.length);
        }),
        (o.prototype.write = function (t) {
          var e;
          for (e = 0; e + 2 <= this.data.length; e += 2) {
            var n = 45 * i.indexOf(this.data[e]);
            (n += i.indexOf(this.data[e + 1])), t.put(n, 11);
          }
          this.data.length % 2 && t.put(i.indexOf(this.data[e]), 6);
        }),
        (t.exports = o);
    },
    1089: function (t, e, n) {
      var r = n(909),
        i = n(902);
      function o(t) {
        (this.mode = i.BYTE), (this.data = r.from(t));
      }
      (o.getBitsLength = function (t) {
        return 8 * t;
      }),
        (o.prototype.getLength = function () {
          return this.data.length;
        }),
        (o.prototype.getBitsLength = function () {
          return o.getBitsLength(this.data.length);
        }),
        (o.prototype.write = function (t) {
          for (var e = 0, n = this.data.length; e < n; e++)
            t.put(this.data[e], 8);
        }),
        (t.exports = o);
    },
    1090: function (t, e, n) {
      var r = n(902),
        i = n(901);
      function o(t) {
        (this.mode = r.KANJI), (this.data = t);
      }
      (o.getBitsLength = function (t) {
        return 13 * t;
      }),
        (o.prototype.getLength = function () {
          return this.data.length;
        }),
        (o.prototype.getBitsLength = function () {
          return o.getBitsLength(this.data.length);
        }),
        (o.prototype.write = function (t) {
          var e;
          for (e = 0; e < this.data.length; e++) {
            var n = i.toSJIS(this.data[e]);
            if (n >= 33088 && n <= 40956) n -= 33088;
            else {
              if (!(n >= 57408 && n <= 60351))
                throw new Error(
                  "Invalid SJIS character: " +
                    this.data[e] +
                    "\nMake sure your charset is UTF-8"
                );
              n -= 49472;
            }
            (n = 192 * ((n >>> 8) & 255) + (255 & n)), t.put(n, 13);
          }
        }),
        (t.exports = o);
    },
    1091: function (t, e, n) {
      "use strict";
      var r = {
        single_source_shortest_paths: function (t, e, n) {
          var i = {},
            o = {};
          o[e] = 0;
          var a,
            s,
            u,
            c,
            l,
            h,
            f,
            d = r.PriorityQueue.make();
          for (d.push(e, 0); !d.empty(); )
            for (u in ((s = (a = d.pop()).value),
            (c = a.cost),
            (l = t[s] || {})))
              l.hasOwnProperty(u) &&
                ((h = c + l[u]),
                (f = o[u]),
                ("undefined" === typeof o[u] || f > h) &&
                  ((o[u] = h), d.push(u, h), (i[u] = s)));
          if ("undefined" !== typeof n && "undefined" === typeof o[n]) {
            var p = ["Could not find a path from ", e, " to ", n, "."].join("");
            throw new Error(p);
          }
          return i;
        },
        extract_shortest_path_from_predecessor_list: function (t, e) {
          for (var n = [], r = e; r; ) n.push(r), t[r], (r = t[r]);
          return n.reverse(), n;
        },
        find_path: function (t, e, n) {
          var i = r.single_source_shortest_paths(t, e, n);
          return r.extract_shortest_path_from_predecessor_list(i, n);
        },
        PriorityQueue: {
          make: function (t) {
            var e,
              n = r.PriorityQueue,
              i = {};
            for (e in ((t = t || {}), n)) n.hasOwnProperty(e) && (i[e] = n[e]);
            return (i.queue = []), (i.sorter = t.sorter || n.default_sorter), i;
          },
          default_sorter: function (t, e) {
            return t.cost - e.cost;
          },
          push: function (t, e) {
            var n = { value: t, cost: e };
            this.queue.push(n), this.queue.sort(this.sorter);
          },
          pop: function () {
            return this.queue.shift();
          },
          empty: function () {
            return 0 === this.queue.length;
          },
        },
      };
      t.exports = r;
    },
    1092: function (t, e, n) {
      var r = n(1018);
      (e.render = function (t, e, n) {
        var i = n,
          o = e;
        "undefined" !== typeof i ||
          (e && e.getContext) ||
          ((i = e), (e = void 0)),
          e ||
            (o = (function () {
              try {
                return document.createElement("canvas");
              } catch (t) {
                throw new Error("You need to specify a canvas element");
              }
            })()),
          (i = r.getOptions(i));
        var a = r.getImageWidth(t.modules.size, i),
          s = o.getContext("2d"),
          u = s.createImageData(a, a);
        return (
          r.qrToImageData(u.data, t, i),
          (function (t, e, n) {
            t.clearRect(0, 0, e.width, e.height),
              e.style || (e.style = {}),
              (e.height = n),
              (e.width = n),
              (e.style.height = n + "px"),
              (e.style.width = n + "px");
          })(s, o, a),
          s.putImageData(u, 0, 0),
          o
        );
      }),
        (e.renderToDataURL = function (t, n, r) {
          var i = r;
          "undefined" !== typeof i ||
            (n && n.getContext) ||
            ((i = n), (n = void 0)),
            i || (i = {});
          var o = e.render(t, n, i),
            a = i.type || "image/png",
            s = i.rendererOpts || {};
          return o.toDataURL(a, s.quality);
        });
    },
    1093: function (t, e, n) {
      var r = n(1018);
      function i(t, e) {
        var n = t.a / 255,
          r = e + '="' + t.hex + '"';
        return n < 1
          ? r + " " + e + '-opacity="' + n.toFixed(2).slice(1) + '"'
          : r;
      }
      function o(t, e, n) {
        var r = t + e;
        return "undefined" !== typeof n && (r += " " + n), r;
      }
      e.render = function (t, e, n) {
        var a = r.getOptions(e),
          s = t.modules.size,
          u = t.modules.data,
          c = s + 2 * a.margin,
          l = a.color.light.a
            ? "<path " +
              i(a.color.light, "fill") +
              ' d="M0 0h' +
              c +
              "v" +
              c +
              'H0z"/>'
            : "",
          h =
            "<path " +
            i(a.color.dark, "stroke") +
            ' d="' +
            (function (t, e, n) {
              for (var r = "", i = 0, a = !1, s = 0, u = 0; u < t.length; u++) {
                var c = Math.floor(u % e),
                  l = Math.floor(u / e);
                c || a || (a = !0),
                  t[u]
                    ? (s++,
                      (u > 0 && c > 0 && t[u - 1]) ||
                        ((r += a ? o("M", c + n, 0.5 + l + n) : o("m", i, 0)),
                        (i = 0),
                        (a = !1)),
                      (c + 1 < e && t[u + 1]) || ((r += o("h", s)), (s = 0)))
                    : i++;
              }
              return r;
            })(u, s, a.margin) +
            '"/>',
          f = 'viewBox="0 0 ' + c + " " + c + '"',
          d =
            '<svg xmlns="http://www.w3.org/2000/svg" ' +
            (a.width
              ? 'width="' + a.width + '" height="' + a.width + '" '
              : "") +
            f +
            ' shape-rendering="crispEdges">' +
            l +
            h +
            "</svg>\n";
        return "function" === typeof n && n(null, d), d;
      };
    },
    1206: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "useState", function () {
          return Z;
        }),
        n.d(e, "useReducer", function () {
          return Q;
        }),
        n.d(e, "useEffect", function () {
          return $;
        }),
        n.d(e, "useLayoutEffect", function () {
          return X;
        }),
        n.d(e, "useRef", function () {
          return G;
        }),
        n.d(e, "useImperativeHandle", function () {
          return tt;
        }),
        n.d(e, "useMemo", function () {
          return et;
        }),
        n.d(e, "useCallback", function () {
          return nt;
        }),
        n.d(e, "useContext", function () {
          return rt;
        }),
        n.d(e, "useDebugValue", function () {
          return it;
        }),
        n.d(e, "useErrorBoundary", function () {
          return ot;
        }),
        n.d(e, "createElement", function () {
          return m;
        }),
        n.d(e, "createContext", function () {
          return q;
        }),
        n.d(e, "createRef", function () {
          return g;
        }),
        n.d(e, "Fragment", function () {
          return _;
        }),
        n.d(e, "Component", function () {
          return y;
        }),
        n.d(e, "version", function () {
          return Bt;
        }),
        n.d(e, "Children", function () {
          return _t;
        }),
        n.d(e, "render", function () {
          return It;
        }),
        n.d(e, "hydrate", function () {
          return jt;
        }),
        n.d(e, "unmountComponentAtNode", function () {
          return Jt;
        }),
        n.d(e, "createPortal", function () {
          return Rt;
        }),
        n.d(e, "createFactory", function () {
          return qt;
        }),
        n.d(e, "cloneElement", function () {
          return Ht;
        }),
        n.d(e, "isValidElement", function () {
          return Ut;
        }),
        n.d(e, "findDOMNode", function () {
          return Dt;
        }),
        n.d(e, "PureComponent", function () {
          return dt;
        }),
        n.d(e, "memo", function () {
          return pt;
        }),
        n.d(e, "forwardRef", function () {
          return vt;
        }),
        n.d(e, "unstable_batchedUpdates", function () {
          return Ft;
        }),
        n.d(e, "Suspense", function () {
          return bt;
        }),
        n.d(e, "SuspenseList", function () {
          return xt;
        }),
        n.d(e, "lazy", function () {
          return Mt;
        });
      var r,
        i,
        o,
        a,
        s,
        u,
        c,
        l = {},
        h = [],
        f = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
      function d(t, e) {
        for (var n in e) t[n] = e[n];
        return t;
      }
      function p(t) {
        var e = t.parentNode;
        e && e.removeChild(t);
      }
      function m(t, e, n) {
        var r,
          i = arguments,
          o = {};
        for (r in e) "key" !== r && "ref" !== r && (o[r] = e[r]);
        if (arguments.length > 3)
          for (n = [n], r = 3; r < arguments.length; r++) n.push(i[r]);
        if (
          (null != n && (o.children = n),
          "function" == typeof t && null != t.defaultProps)
        )
          for (r in t.defaultProps)
            void 0 === o[r] && (o[r] = t.defaultProps[r]);
        return v(t, o, e && e.key, e && e.ref, null);
      }
      function v(t, e, n, i, o) {
        var a = {
          type: t,
          props: e,
          key: n,
          ref: i,
          __k: null,
          __: null,
          __b: 0,
          __e: null,
          __d: void 0,
          __c: null,
          constructor: void 0,
          __v: o,
        };
        return null == o && (a.__v = a), r.vnode && r.vnode(a), a;
      }
      function g() {
        return {};
      }
      function _(t) {
        return t.children;
      }
      function y(t, e) {
        (this.props = t), (this.context = e);
      }
      function w(t, e) {
        if (null == e) return t.__ ? w(t.__, t.__.__k.indexOf(t) + 1) : null;
        for (var n; e < t.__k.length; e++)
          if (null != (n = t.__k[e]) && null != n.__e) return n.__e;
        return "function" == typeof t.type ? w(t) : null;
      }
      function b(t) {
        var e, n;
        if (null != (t = t.__) && null != t.__c) {
          for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
            if (null != (n = t.__k[e]) && null != n.__e) {
              t.__e = t.__c.base = n.__e;
              break;
            }
          return b(t);
        }
      }
      function k(t) {
        ((!t.__d && (t.__d = !0) && i.push(t) && !o++) ||
          s !== r.debounceRendering) &&
          ((s = r.debounceRendering) || a)(M);
      }
      function M() {
        for (var t; (o = i.length); )
          (t = i.sort(function (t, e) {
            return t.__v.__b - e.__v.__b;
          })),
            (i = []),
            t.some(function (t) {
              var e, n, r, i, o, a, s;
              t.__d &&
                ((a = (o = (e = t).__v).__e),
                (s = e.__P) &&
                  ((n = []),
                  ((r = d({}, o)).__v = r),
                  (i = S(
                    s,
                    o,
                    r,
                    e.__n,
                    void 0 !== s.ownerSVGElement,
                    null,
                    n,
                    null == a ? w(o) : a
                  )),
                  T(n, o),
                  i != a && b(o)));
            });
      }
      function x(t, e, n, r, i, o, a, s, u) {
        var c,
          f,
          d,
          m,
          v,
          g,
          _,
          y = (n && n.__k) || h,
          b = y.length;
        if (
          (s == l && (s = null != o ? o[0] : b ? w(n, 0) : null),
          (c = 0),
          (e.__k = E(e.__k, function (n) {
            if (null != n) {
              if (
                ((n.__ = e),
                (n.__b = e.__b + 1),
                null === (d = y[c]) ||
                  (d && n.key == d.key && n.type === d.type))
              )
                y[c] = void 0;
              else
                for (f = 0; f < b; f++) {
                  if ((d = y[f]) && n.key == d.key && n.type === d.type) {
                    y[f] = void 0;
                    break;
                  }
                  d = null;
                }
              if (
                ((m = S(t, n, (d = d || l), r, i, o, a, s, u)),
                (f = n.ref) &&
                  d.ref != f &&
                  (_ || (_ = []),
                  d.ref && _.push(d.ref, null, n),
                  _.push(f, n.__c || m, n)),
                null != m)
              ) {
                var h;
                if ((null == g && (g = m), void 0 !== n.__d))
                  (h = n.__d), (n.__d = void 0);
                else if (o == d || m != s || null == m.parentNode) {
                  t: if (null == s || s.parentNode !== t)
                    t.appendChild(m), (h = null);
                  else {
                    for (v = s, f = 0; (v = v.nextSibling) && f < b; f += 2)
                      if (v == m) break t;
                    t.insertBefore(m, s), (h = s);
                  }
                  "option" == e.type && (t.value = "");
                }
                (s = void 0 !== h ? h : m.nextSibling),
                  "function" == typeof e.type && (e.__d = s);
              } else s && d.__e == s && s.parentNode != t && (s = w(d));
            }
            return c++, n;
          })),
          (e.__e = g),
          null != o && "function" != typeof e.type)
        )
          for (c = o.length; c--; ) null != o[c] && p(o[c]);
        for (c = b; c--; ) null != y[c] && A(y[c], y[c]);
        if (_) for (c = 0; c < _.length; c++) j(_[c], _[++c], _[++c]);
      }
      function E(t, e, n) {
        if ((null == n && (n = []), null == t || "boolean" == typeof t))
          e && n.push(e(null));
        else if (Array.isArray(t))
          for (var r = 0; r < t.length; r++) E(t[r], e, n);
        else
          n.push(
            e
              ? e(
                  "string" == typeof t || "number" == typeof t
                    ? v(null, t, null, null, t)
                    : null != t.__e || null != t.__c
                    ? v(t.type, t.props, t.key, null, t.__v)
                    : t
                )
              : t
          );
        return n;
      }
      function O(t, e, n) {
        "-" === e[0]
          ? t.setProperty(e, n)
          : (t[e] =
              "number" == typeof n && !1 === f.test(e)
                ? n + "px"
                : null == n
                ? ""
                : n);
      }
      function C(t, e, n, r, i) {
        var o, a, s, u, c;
        if (
          (i
            ? "className" === e && (e = "class")
            : "class" === e && (e = "className"),
          "style" === e)
        )
          if (((o = t.style), "string" == typeof n)) o.cssText = n;
          else {
            if (("string" == typeof r && ((o.cssText = ""), (r = null)), r))
              for (u in r) (n && u in n) || O(o, u, "");
            if (n) for (c in n) (r && n[c] === r[c]) || O(o, c, n[c]);
          }
        else
          "o" === e[0] && "n" === e[1]
            ? ((a = e !== (e = e.replace(/Capture$/, ""))),
              (s = e.toLowerCase()),
              (e = (s in t ? s : e).slice(2)),
              n
                ? (r || t.addEventListener(e, R, a),
                  ((t.l || (t.l = {}))[e] = n))
                : t.removeEventListener(e, R, a))
            : "list" !== e &&
              "tagName" !== e &&
              "form" !== e &&
              "type" !== e &&
              "size" !== e &&
              !i &&
              e in t
            ? (t[e] = null == n ? "" : n)
            : "function" != typeof n &&
              "dangerouslySetInnerHTML" !== e &&
              (e !== (e = e.replace(/^xlink:?/, ""))
                ? null == n || !1 === n
                  ? t.removeAttributeNS(
                      "http://www.w3.org/1999/xlink",
                      e.toLowerCase()
                    )
                  : t.setAttributeNS(
                      "http://www.w3.org/1999/xlink",
                      e.toLowerCase(),
                      n
                    )
                : null == n || (!1 === n && !/^ar/.test(e))
                ? t.removeAttribute(e)
                : t.setAttribute(e, n));
      }
      function R(t) {
        this.l[t.type](r.event ? r.event(t) : t);
      }
      function S(t, e, n, i, o, a, s, u, c) {
        var l,
          h,
          f,
          p,
          m,
          v,
          g,
          w,
          b,
          k,
          M = e.type;
        if (void 0 !== e.constructor) return null;
        (l = r.__b) && l(e);
        try {
          t: if ("function" == typeof M) {
            if (
              ((w = e.props),
              (b = (l = M.contextType) && i[l.__c]),
              (k = l ? (b ? b.props.value : l.__) : i),
              n.__c
                ? (g = (h = e.__c = n.__c).__ = h.__E)
                : ("prototype" in M && M.prototype.render
                    ? (e.__c = h = new M(w, k))
                    : ((e.__c = h = new y(w, k)),
                      (h.constructor = M),
                      (h.render = N)),
                  b && b.sub(h),
                  (h.props = w),
                  h.state || (h.state = {}),
                  (h.context = k),
                  (h.__n = i),
                  (f = h.__d = !0),
                  (h.__h = [])),
              null == h.__s && (h.__s = h.state),
              null != M.getDerivedStateFromProps &&
                (h.__s == h.state && (h.__s = d({}, h.__s)),
                d(h.__s, M.getDerivedStateFromProps(w, h.__s))),
              (p = h.props),
              (m = h.state),
              f)
            )
              null == M.getDerivedStateFromProps &&
                null != h.componentWillMount &&
                h.componentWillMount(),
                null != h.componentDidMount && h.__h.push(h.componentDidMount);
            else {
              if (
                (null == M.getDerivedStateFromProps &&
                  w !== p &&
                  null != h.componentWillReceiveProps &&
                  h.componentWillReceiveProps(w, k),
                (!h.__e &&
                  null != h.shouldComponentUpdate &&
                  !1 === h.shouldComponentUpdate(w, h.__s, k)) ||
                  (e.__v === n.__v && !h.__))
              ) {
                for (
                  h.props = w,
                    h.state = h.__s,
                    e.__v !== n.__v && (h.__d = !1),
                    h.__v = e,
                    e.__e = n.__e,
                    e.__k = n.__k,
                    h.__h.length && s.push(h),
                    l = 0;
                  l < e.__k.length;
                  l++
                )
                  e.__k[l] && (e.__k[l].__ = e);
                break t;
              }
              null != h.componentWillUpdate &&
                h.componentWillUpdate(w, h.__s, k),
                null != h.componentDidUpdate &&
                  h.__h.push(function () {
                    h.componentDidUpdate(p, m, v);
                  });
            }
            (h.context = k),
              (h.props = w),
              (h.state = h.__s),
              (l = r.__r) && l(e),
              (h.__d = !1),
              (h.__v = e),
              (h.__P = t),
              (l = h.render(h.props, h.state, h.context)),
              (e.__k =
                null != l && l.type == _ && null == l.key
                  ? l.props.children
                  : Array.isArray(l)
                  ? l
                  : [l]),
              null != h.getChildContext &&
                (i = d(d({}, i), h.getChildContext())),
              f ||
                null == h.getSnapshotBeforeUpdate ||
                (v = h.getSnapshotBeforeUpdate(p, m)),
              x(t, e, n, i, o, a, s, u, c),
              (h.base = e.__e),
              h.__h.length && s.push(h),
              g && (h.__E = h.__ = null),
              (h.__e = !1);
          } else
            null == a && e.__v === n.__v
              ? ((e.__k = n.__k), (e.__e = n.__e))
              : (e.__e = I(n.__e, e, n, i, o, a, s, c));
          (l = r.diffed) && l(e);
        } catch (t) {
          (e.__v = null), r.__e(t, e, n);
        }
        return e.__e;
      }
      function T(t, e) {
        r.__c && r.__c(e, t),
          t.some(function (e) {
            try {
              (t = e.__h),
                (e.__h = []),
                t.some(function (t) {
                  t.call(e);
                });
            } catch (t) {
              r.__e(t, e.__v);
            }
          });
      }
      function I(t, e, n, r, i, o, a, s) {
        var u,
          c,
          f,
          d,
          p,
          m = n.props,
          v = e.props;
        if (((i = "svg" === e.type || i), null != o))
          for (u = 0; u < o.length; u++)
            if (
              null != (c = o[u]) &&
              ((null === e.type ? 3 === c.nodeType : c.localName === e.type) ||
                t == c)
            ) {
              (t = c), (o[u] = null);
              break;
            }
        if (null == t) {
          if (null === e.type) return document.createTextNode(v);
          (t = i
            ? document.createElementNS("http://www.w3.org/2000/svg", e.type)
            : document.createElement(e.type, v.is && { is: v.is })),
            (o = null),
            (s = !1);
        }
        if (null === e.type) m !== v && t.data != v && (t.data = v);
        else {
          if (
            (null != o && (o = h.slice.call(t.childNodes)),
            (f = (m = n.props || l).dangerouslySetInnerHTML),
            (d = v.dangerouslySetInnerHTML),
            !s)
          ) {
            if (m === l)
              for (m = {}, p = 0; p < t.attributes.length; p++)
                m[t.attributes[p].name] = t.attributes[p].value;
            (d || f) &&
              ((d && f && d.__html == f.__html) ||
                (t.innerHTML = (d && d.__html) || ""));
          }
          (function (t, e, n, r, i) {
            var o;
            for (o in n)
              "children" === o ||
                "key" === o ||
                o in e ||
                C(t, o, null, n[o], r);
            for (o in e)
              (i && "function" != typeof e[o]) ||
                "children" === o ||
                "key" === o ||
                "value" === o ||
                "checked" === o ||
                n[o] === e[o] ||
                C(t, o, e[o], n[o], r);
          })(t, v, m, i, s),
            d
              ? (e.__k = [])
              : ((e.__k = e.props.children),
                x(t, e, n, r, "foreignObject" !== e.type && i, o, a, l, s)),
            s ||
              ("value" in v &&
                void 0 !== (u = v.value) &&
                u !== t.value &&
                C(t, "value", u, m.value, !1),
              "checked" in v &&
                void 0 !== (u = v.checked) &&
                u !== t.checked &&
                C(t, "checked", u, m.checked, !1));
        }
        return t;
      }
      function j(t, e, n) {
        try {
          "function" == typeof t ? t(e) : (t.current = e);
        } catch (t) {
          r.__e(t, n);
        }
      }
      function A(t, e, n) {
        var i, o, a;
        if (
          (r.unmount && r.unmount(t),
          (i = t.ref) && ((i.current && i.current !== t.__e) || j(i, null, e)),
          n || "function" == typeof t.type || (n = null != (o = t.__e)),
          (t.__e = t.__d = void 0),
          null != (i = t.__c))
        ) {
          if (i.componentWillUnmount)
            try {
              i.componentWillUnmount();
            } catch (t) {
              r.__e(t, e);
            }
          i.base = i.__P = null;
        }
        if ((i = t.__k)) for (a = 0; a < i.length; a++) i[a] && A(i[a], e, n);
        null != o && p(o);
      }
      function N(t, e, n) {
        return this.constructor(t, n);
      }
      function P(t, e, n) {
        var i, o, a;
        r.__ && r.__(t, e),
          (o = (i = n === u) ? null : (n && n.__k) || e.__k),
          (t = m(_, null, [t])),
          (a = []),
          S(
            e,
            ((i ? e : n || e).__k = t),
            o || l,
            l,
            void 0 !== e.ownerSVGElement,
            n && !i ? [n] : o ? null : h.slice.call(e.childNodes),
            a,
            n || l,
            i
          ),
          T(a, t);
      }
      function L(t, e) {
        P(t, e, u);
      }
      function B(t, e) {
        var n, r;
        for (r in ((e = d(d({}, t.props), e)),
        arguments.length > 2 && (e.children = h.slice.call(arguments, 2)),
        (n = {}),
        e))
          "key" !== r && "ref" !== r && (n[r] = e[r]);
        return v(t.type, n, e.key || t.key, e.ref || t.ref, null);
      }
      function q(t) {
        var e = {},
          n = {
            __c: "__cC" + c++,
            __: t,
            Consumer: function (t, e) {
              return t.children(e);
            },
            Provider: function (t) {
              var r,
                i = this;
              return (
                this.getChildContext ||
                  ((r = []),
                  (this.getChildContext = function () {
                    return (e[n.__c] = i), e;
                  }),
                  (this.shouldComponentUpdate = function (t) {
                    i.props.value !== t.value &&
                      r.some(function (e) {
                        (e.context = t.value), k(e);
                      });
                  }),
                  (this.sub = function (t) {
                    r.push(t);
                    var e = t.componentWillUnmount;
                    t.componentWillUnmount = function () {
                      r.splice(r.indexOf(t), 1), e && e.call(t);
                    };
                  })),
                t.children
              );
            },
          };
        return (n.Consumer.contextType = n), (n.Provider.__ = n), n;
      }
      (r = {
        __e: function (t, e) {
          for (var n, r; (e = e.__); )
            if ((n = e.__c) && !n.__)
              try {
                if (
                  (n.constructor &&
                    null != n.constructor.getDerivedStateFromError &&
                    ((r = !0),
                    n.setState(n.constructor.getDerivedStateFromError(t))),
                  null != n.componentDidCatch &&
                    ((r = !0), n.componentDidCatch(t)),
                  r)
                )
                  return k((n.__E = n));
              } catch (e) {
                t = e;
              }
          throw t;
        },
      }),
        (y.prototype.setState = function (t, e) {
          var n;
          (n =
            this.__s !== this.state
              ? this.__s
              : (this.__s = d({}, this.state))),
            "function" == typeof t && (t = t(n, this.props)),
            t && d(n, t),
            null != t && this.__v && (e && this.__h.push(e), k(this));
        }),
        (y.prototype.forceUpdate = function (t) {
          this.__v && ((this.__e = !0), t && this.__h.push(t), k(this));
        }),
        (y.prototype.render = _),
        (i = []),
        (o = 0),
        (a =
          "function" == typeof Promise
            ? Promise.prototype.then.bind(Promise.resolve())
            : setTimeout),
        (u = l),
        (c = 0);
      var U,
        H,
        J,
        D = 0,
        F = [],
        W = r.__r,
        z = r.diffed,
        Y = r.__c,
        K = r.unmount;
      function V(t, e) {
        r.__h && r.__h(H, t, D || e), (D = 0);
        var n = H.__H || (H.__H = { __: [], __h: [] });
        return t >= n.__.length && n.__.push({}), n.__[t];
      }
      function Z(t) {
        return (D = 1), Q(lt, t);
      }
      function Q(t, e, n) {
        var r = V(U++, 2);
        return (
          r.__c ||
            ((r.__c = H),
            (r.__ = [
              n ? n(e) : lt(void 0, e),
              function (e) {
                var n = t(r.__[0], e);
                r.__[0] !== n && ((r.__[0] = n), r.__c.setState({}));
              },
            ])),
          r.__
        );
      }
      function $(t, e) {
        var n = V(U++, 3);
        !r.__s && ct(n.__H, e) && ((n.__ = t), (n.__H = e), H.__H.__h.push(n));
      }
      function X(t, e) {
        var n = V(U++, 4);
        !r.__s && ct(n.__H, e) && ((n.__ = t), (n.__H = e), H.__h.push(n));
      }
      function G(t) {
        return (
          (D = 5),
          et(function () {
            return { current: t };
          }, [])
        );
      }
      function tt(t, e, n) {
        (D = 6),
          X(
            function () {
              "function" == typeof t ? t(e()) : t && (t.current = e());
            },
            null == n ? n : n.concat(t)
          );
      }
      function et(t, e) {
        var n = V(U++, 7);
        return ct(n.__H, e) ? ((n.__H = e), (n.__h = t), (n.__ = t())) : n.__;
      }
      function nt(t, e) {
        return (
          (D = 8),
          et(function () {
            return t;
          }, e)
        );
      }
      function rt(t) {
        var e = H.context[t.__c],
          n = V(U++, 9);
        return (
          (n.__c = t),
          e ? (null == n.__ && ((n.__ = !0), e.sub(H)), e.props.value) : t.__
        );
      }
      function it(t, e) {
        r.useDebugValue && r.useDebugValue(e ? e(t) : t);
      }
      function ot(t) {
        var e = V(U++, 10),
          n = Z();
        return (
          (e.__ = t),
          H.componentDidCatch ||
            (H.componentDidCatch = function (t) {
              e.__ && e.__(t), n[1](t);
            }),
          [
            n[0],
            function () {
              n[1](void 0);
            },
          ]
        );
      }
      function at() {
        F.some(function (t) {
          if (t.__P)
            try {
              t.__H.__h.forEach(st), t.__H.__h.forEach(ut), (t.__H.__h = []);
            } catch (e) {
              return (t.__H.__h = []), r.__e(e, t.__v), !0;
            }
        }),
          (F = []);
      }
      function st(t) {
        t.t && t.t();
      }
      function ut(t) {
        var e = t.__();
        "function" == typeof e && (t.t = e);
      }
      function ct(t, e) {
        return (
          !t ||
          e.some(function (e, n) {
            return e !== t[n];
          })
        );
      }
      function lt(t, e) {
        return "function" == typeof e ? e(t) : e;
      }
      function ht(t, e) {
        for (var n in e) t[n] = e[n];
        return t;
      }
      function ft(t, e) {
        for (var n in t) if ("__source" !== n && !(n in e)) return !0;
        for (var r in e) if ("__source" !== r && t[r] !== e[r]) return !0;
        return !1;
      }
      (r.__r = function (t) {
        W && W(t),
          (U = 0),
          (H = t.__c).__H &&
            (H.__H.__h.forEach(st), H.__H.__h.forEach(ut), (H.__H.__h = []));
      }),
        (r.diffed = function (t) {
          z && z(t);
          var e = t.__c;
          if (e) {
            var n = e.__H;
            n &&
              n.__h.length &&
              ((1 !== F.push(e) && J === r.requestAnimationFrame) ||
                (
                  (J = r.requestAnimationFrame) ||
                  function (t) {
                    var e,
                      n = function () {
                        clearTimeout(r), cancelAnimationFrame(e), setTimeout(t);
                      },
                      r = setTimeout(n, 100);
                    "undefined" != typeof window &&
                      (e = requestAnimationFrame(n));
                  }
                )(at));
          }
        }),
        (r.__c = function (t, e) {
          e.some(function (t) {
            try {
              t.__h.forEach(st),
                (t.__h = t.__h.filter(function (t) {
                  return !t.__ || ut(t);
                }));
            } catch (n) {
              e.some(function (t) {
                t.__h && (t.__h = []);
              }),
                (e = []),
                r.__e(n, t.__v);
            }
          }),
            Y && Y(t, e);
        }),
        (r.unmount = function (t) {
          K && K(t);
          var e = t.__c;
          if (e) {
            var n = e.__H;
            if (n)
              try {
                n.__.forEach(function (t) {
                  return t.t && t.t();
                });
              } catch (t) {
                r.__e(t, e.__v);
              }
          }
        });
      var dt = (function (t) {
        var e, n;
        function r(e) {
          var n;
          return ((n = t.call(this, e) || this).isPureReactComponent = !0), n;
        }
        return (
          (n = t),
          ((e = r).prototype = Object.create(n.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = n),
          (r.prototype.shouldComponentUpdate = function (t, e) {
            return ft(this.props, t) || ft(this.state, e);
          }),
          r
        );
      })(y);
      function pt(t, e) {
        function n(t) {
          var n = this.props.ref,
            r = n == t.ref;
          return (
            !r && n && (n.call ? n(null) : (n.current = null)),
            e ? !e(this.props, t) || !r : ft(this.props, t)
          );
        }
        function r(e) {
          return (this.shouldComponentUpdate = n), m(t, ht({}, e));
        }
        return (
          (r.prototype.isReactComponent = !0),
          (r.displayName = "Memo(" + (t.displayName || t.name) + ")"),
          (r.t = !0),
          r
        );
      }
      var mt = r.__b;
      function vt(t) {
        function e(e) {
          var n = ht({}, e);
          return delete n.ref, t(n, e.ref);
        }
        return (
          (e.prototype.isReactComponent = e.t = !0),
          (e.displayName = "ForwardRef(" + (t.displayName || t.name) + ")"),
          e
        );
      }
      r.__b = function (t) {
        t.type && t.type.t && t.ref && ((t.props.ref = t.ref), (t.ref = null)),
          mt && mt(t);
      };
      var gt = function (t, e) {
          return t
            ? E(t).reduce(function (t, n, r) {
                return t.concat(e(n, r));
              }, [])
            : null;
        },
        _t = {
          map: gt,
          forEach: gt,
          count: function (t) {
            return t ? E(t).length : 0;
          },
          only: function (t) {
            if (1 !== (t = E(t)).length)
              throw new Error("Children.only() expects only one child.");
            return t[0];
          },
          toArray: E,
        },
        yt = r.__e;
      function wt(t) {
        return (
          t && (((t = ht({}, t)).__c = null), (t.__k = t.__k && t.__k.map(wt))),
          t
        );
      }
      function bt() {
        (this.__u = 0), (this.o = null), (this.__b = null);
      }
      function kt(t) {
        var e = t.__.__c;
        return e && e.u && e.u(t);
      }
      function Mt(t) {
        var e, n, r;
        function i(i) {
          if (
            (e ||
              (e = t()).then(
                function (t) {
                  n = t.default || t;
                },
                function (t) {
                  r = t;
                }
              ),
            r)
          )
            throw r;
          if (!n) throw e;
          return m(n, i);
        }
        return (i.displayName = "Lazy"), (i.t = !0), i;
      }
      function xt() {
        (this.i = null), (this.l = null);
      }
      (r.__e = function (t, e, n) {
        if (t.then)
          for (var r, i = e; (i = i.__); )
            if ((r = i.__c) && r.__c) return r.__c(t, e.__c);
        yt(t, e, n);
      }),
        ((bt.prototype = new y()).__c = function (t, e) {
          var n = this;
          null == n.o && (n.o = []), n.o.push(e);
          var r = kt(n.__v),
            i = !1,
            o = function () {
              i || ((i = !0), r ? r(a) : a());
            };
          (e.__c = e.componentWillUnmount),
            (e.componentWillUnmount = function () {
              o(), e.__c && e.__c();
            });
          var a = function () {
            var t;
            if (!--n.__u)
              for (
                n.__v.__k[0] = n.state.u, n.setState({ u: (n.__b = null) });
                (t = n.o.pop());

              )
                t.forceUpdate();
          };
          n.__u++ || n.setState({ u: (n.__b = n.__v.__k[0]) }), t.then(o, o);
        }),
        (bt.prototype.render = function (t, e) {
          return (
            this.__b && ((this.__v.__k[0] = wt(this.__b)), (this.__b = null)),
            [m(y, null, e.u ? null : t.children), e.u && t.fallback]
          );
        });
      var Et = function (t, e, n) {
        if (
          (++n[1] === n[0] && t.l.delete(e),
          t.props.revealOrder && ("t" !== t.props.revealOrder[0] || !t.l.size))
        )
          for (n = t.i; n; ) {
            for (; n.length > 3; ) n.pop()();
            if (n[1] < n[0]) break;
            t.i = n = n[2];
          }
      };
      ((xt.prototype = new y()).u = function (t) {
        var e = this,
          n = kt(e.__v),
          r = e.l.get(t);
        return (
          r[0]++,
          function (i) {
            var o = function () {
              e.props.revealOrder ? (r.push(i), Et(e, t, r)) : i();
            };
            n ? n(o) : o();
          }
        );
      }),
        (xt.prototype.render = function (t) {
          (this.i = null), (this.l = new Map());
          var e = E(t.children);
          t.revealOrder && "b" === t.revealOrder[0] && e.reverse();
          for (var n = e.length; n--; )
            this.l.set(e[n], (this.i = [1, 0, this.i]));
          return t.children;
        }),
        (xt.prototype.componentDidUpdate = xt.prototype.componentDidMount =
          function () {
            var t = this;
            t.l.forEach(function (e, n) {
              Et(t, n, e);
            });
          });
      var Ot = (function () {
        function t() {}
        var e = t.prototype;
        return (
          (e.getChildContext = function () {
            return this.props.context;
          }),
          (e.render = function (t) {
            return t.children;
          }),
          t
        );
      })();
      function Ct(t) {
        var e = this,
          n = t.container,
          r = m(Ot, { context: e.context }, t.vnode);
        return (
          e.s &&
            e.s !== n &&
            (e.v.parentNode && e.s.removeChild(e.v), A(e.h), (e.p = !1)),
          t.vnode
            ? e.p
              ? ((n.__k = e.__k), P(r, n), (e.__k = n.__k))
              : ((e.v = document.createTextNode("")),
                L("", n),
                n.appendChild(e.v),
                (e.p = !0),
                (e.s = n),
                P(r, n, e.v),
                (e.__k = e.v.__k))
            : e.p && (e.v.parentNode && e.s.removeChild(e.v), A(e.h)),
          (e.h = r),
          (e.componentWillUnmount = function () {
            e.v.parentNode && e.s.removeChild(e.v), A(e.h);
          }),
          null
        );
      }
      function Rt(t, e) {
        return m(Ct, { vnode: t, container: e });
      }
      var St =
        /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
      y.prototype.isReactComponent = {};
      var Tt =
        ("undefined" != typeof Symbol &&
          Symbol.for &&
          Symbol.for("react.element")) ||
        60103;
      function It(t, e, n) {
        if (null == e.__k) for (; e.firstChild; ) e.removeChild(e.firstChild);
        return P(t, e), "function" == typeof n && n(), t ? t.__c : null;
      }
      function jt(t, e, n) {
        return L(t, e), "function" == typeof n && n(), t ? t.__c : null;
      }
      var At = r.event;
      function Nt(t, e) {
        t["UNSAFE_" + e] &&
          !t[e] &&
          Object.defineProperty(t, e, {
            configurable: !1,
            get: function () {
              return this["UNSAFE_" + e];
            },
            set: function (t) {
              this["UNSAFE_" + e] = t;
            },
          });
      }
      r.event = function (t) {
        At && (t = At(t)), (t.persist = function () {});
        var e = !1,
          n = !1,
          r = t.stopPropagation;
        t.stopPropagation = function () {
          r.call(t), (e = !0);
        };
        var i = t.preventDefault;
        return (
          (t.preventDefault = function () {
            i.call(t), (n = !0);
          }),
          (t.isPropagationStopped = function () {
            return e;
          }),
          (t.isDefaultPrevented = function () {
            return n;
          }),
          (t.nativeEvent = t)
        );
      };
      var Pt = {
          configurable: !0,
          get: function () {
            return this.class;
          },
        },
        Lt = r.vnode;
      r.vnode = function (t) {
        t.$$typeof = Tt;
        var e = t.type,
          n = t.props;
        if (e) {
          if (
            (n.class != n.className &&
              ((Pt.enumerable = "className" in n),
              null != n.className && (n.class = n.className),
              Object.defineProperty(n, "className", Pt)),
            "function" != typeof e)
          ) {
            var r, i, o;
            for (o in (n.defaultValue &&
              void 0 !== n.value &&
              (n.value || 0 === n.value || (n.value = n.defaultValue),
              delete n.defaultValue),
            Array.isArray(n.value) &&
              n.multiple &&
              "select" === e &&
              (E(n.children).forEach(function (t) {
                -1 != n.value.indexOf(t.props.value) && (t.props.selected = !0);
              }),
              delete n.value),
            n))
              if ((r = St.test(o))) break;
            if (r)
              for (o in ((i = t.props = {}), n))
                i[St.test(o) ? o.replace(/[A-Z0-9]/, "-$&").toLowerCase() : o] =
                  n[o];
          }
          !(function (e) {
            var n = t.type,
              r = t.props;
            if (r && "string" == typeof n) {
              var i = {};
              for (var o in r)
                /^on(Ani|Tra|Tou)/.test(o) &&
                  ((r[o.toLowerCase()] = r[o]), delete r[o]),
                  (i[o.toLowerCase()] = o);
              if (
                (i.ondoubleclick &&
                  ((r.ondblclick = r[i.ondoubleclick]),
                  delete r[i.ondoubleclick]),
                i.onbeforeinput &&
                  ((r.onbeforeinput = r[i.onbeforeinput]),
                  delete r[i.onbeforeinput]),
                i.onchange &&
                  ("textarea" === n ||
                    ("input" === n.toLowerCase() &&
                      !/^fil|che|ra/i.test(r.type))))
              ) {
                var a = i.oninput || "oninput";
                r[a] || ((r[a] = r[i.onchange]), delete r[i.onchange]);
              }
            }
          })(),
            "function" == typeof e &&
              !e.m &&
              e.prototype &&
              (Nt(e.prototype, "componentWillMount"),
              Nt(e.prototype, "componentWillReceiveProps"),
              Nt(e.prototype, "componentWillUpdate"),
              (e.m = !0));
        }
        Lt && Lt(t);
      };
      var Bt = "16.8.0";
      function qt(t) {
        return m.bind(null, t);
      }
      function Ut(t) {
        return !!t && t.$$typeof === Tt;
      }
      function Ht(t) {
        return Ut(t) ? B.apply(null, arguments) : t;
      }
      function Jt(t) {
        return !!t.__k && (P(null, t), !0);
      }
      function Dt(t) {
        return (t && (t.base || (1 === t.nodeType && t))) || null;
      }
      var Ft = function (t, e) {
        return t(e);
      };
      e.default = {
        useState: Z,
        useReducer: Q,
        useEffect: $,
        useLayoutEffect: X,
        useRef: G,
        useImperativeHandle: tt,
        useMemo: et,
        useCallback: nt,
        useContext: rt,
        useDebugValue: it,
        version: "16.8.0",
        Children: _t,
        render: It,
        hydrate: It,
        unmountComponentAtNode: Jt,
        createPortal: Rt,
        createElement: m,
        createContext: q,
        createFactory: qt,
        cloneElement: Ht,
        createRef: g,
        Fragment: _,
        isValidElement: Ut,
        findDOMNode: Dt,
        Component: y,
        PureComponent: dt,
        memo: pt,
        forwardRef: vt,
        unstable_batchedUpdates: Ft,
        Suspense: bt,
        SuspenseList: xt,
        lazy: Mt,
      };
    },
    834: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = {};
      n.r(r),
        n.d(r, "generateKey", function () {
          return B;
        }),
        n.d(r, "verifyHmac", function () {
          return U;
        }),
        n.d(r, "encrypt", function () {
          return J;
        }),
        n.d(r, "decrypt", function () {
          return F;
        });
      var i = n(7),
        o = n.n(i),
        a = n(27),
        s = n(13),
        u = n(14),
        c = n(994),
        l = n.n(c),
        h = n(19),
        f = n(20),
        d = n(132),
        p = n(932),
        m = (function (t) {
          Object(h.a)(n, t);
          var e = Object(f.a)(n);
          function n(t) {
            var r;
            return (
              Object(s.a)(this, n),
              ((r = e.call(this, t)).events = new d.EventEmitter()),
              (r.connection = r.setConnection(t)),
              r
            );
          }
          return (
            Object(u.a)(n, [
              {
                key: "connect",
                value: (function () {
                  var t = Object(a.a)(
                    o.a.mark(function t() {
                      var e,
                        n = arguments;
                      return o.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (e =
                                    n.length > 0 && void 0 !== n[0]
                                      ? n[0]
                                      : this.connection),
                                  (t.next = 3),
                                  this.open(e)
                                );
                              case 3:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "disconnect",
                value: (function () {
                  var t = Object(a.a)(
                    o.a.mark(function t() {
                      return o.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.next = 2), this.close();
                              case 2:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "on",
                value: function (t, e) {
                  this.events.on(t, e);
                },
              },
              {
                key: "once",
                value: function (t, e) {
                  this.events.once(t, e);
                },
              },
              {
                key: "off",
                value: function (t, e) {
                  this.events.off(t, e);
                },
              },
              {
                key: "removeListener",
                value: function (t, e) {
                  this.events.removeListener(t, e);
                },
              },
              {
                key: "request",
                value: (function () {
                  var t = Object(a.a)(
                    o.a.mark(function t(e, n) {
                      return o.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return t.abrupt(
                                  "return",
                                  this.requestStrict(
                                    Object(p.formatJsonRpcRequest)(
                                      e.method,
                                      e.params || []
                                    ),
                                    n
                                  )
                                );
                              case 1:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e, n) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "requestStrict",
                value: (function () {
                  var t = Object(a.a)(
                    o.a.mark(function t(e, n) {
                      var r = this;
                      return o.a.wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return t.abrupt(
                                "return",
                                new Promise(
                                  (function () {
                                    var t = Object(a.a)(
                                      o.a.mark(function t(i, a) {
                                        return o.a.wrap(
                                          function (t) {
                                            for (;;)
                                              switch ((t.prev = t.next)) {
                                                case 0:
                                                  if (r.connection.connected) {
                                                    t.next = 9;
                                                    break;
                                                  }
                                                  return (
                                                    (t.prev = 1),
                                                    (t.next = 4),
                                                    r.open()
                                                  );
                                                case 4:
                                                  t.next = 9;
                                                  break;
                                                case 6:
                                                  (t.prev = 6),
                                                    (t.t0 = t.catch(1)),
                                                    a(t.t0);
                                                case 9:
                                                  return (
                                                    r.events.on(
                                                      "".concat(e.id),
                                                      function (t) {
                                                        Object(
                                                          p.isJsonRpcError
                                                        )(t)
                                                          ? a(t.error.message)
                                                          : i(t.result);
                                                      }
                                                    ),
                                                    (t.prev = 10),
                                                    (t.next = 13),
                                                    r.connection.send(e, n)
                                                  );
                                                case 13:
                                                  t.next = 18;
                                                  break;
                                                case 15:
                                                  (t.prev = 15),
                                                    (t.t1 = t.catch(10)),
                                                    a(t.t1);
                                                case 18:
                                                case "end":
                                                  return t.stop();
                                              }
                                          },
                                          t,
                                          null,
                                          [
                                            [1, 6],
                                            [10, 15],
                                          ]
                                        );
                                      })
                                    );
                                    return function (e, n) {
                                      return t.apply(this, arguments);
                                    };
                                  })()
                                )
                              );
                            case 1:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  );
                  return function (e, n) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "setConnection",
                value: function () {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : this.connection;
                  return t;
                },
              },
              {
                key: "onPayload",
                value: function (t) {
                  this.events.emit("payload", t),
                    Object(p.isJsonRpcResponse)(t)
                      ? this.events.emit("".concat(t.id), t)
                      : this.events.emit("message", {
                          type: t.method,
                          data: t.params,
                        });
                },
              },
              {
                key: "open",
                value: (function () {
                  var t = Object(a.a)(
                    o.a.mark(function t() {
                      var e,
                        n = this,
                        r = arguments;
                      return o.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  ((e =
                                    r.length > 0 && void 0 !== r[0]
                                      ? r[0]
                                      : this.connection),
                                  this.connection !== e ||
                                    !this.connection.connected)
                                ) {
                                  t.next = 3;
                                  break;
                                }
                                return t.abrupt("return");
                              case 3:
                                if (
                                  (this.connection.connected && this.close(),
                                  "string" !== typeof e)
                                ) {
                                  t.next = 8;
                                  break;
                                }
                                return (t.next = 7), this.connection.open(e);
                              case 7:
                                e = this.connection;
                              case 8:
                                return (
                                  (this.connection = this.setConnection(e)),
                                  (t.next = 11),
                                  this.connection.open()
                                );
                              case 11:
                                this.connection.on("payload", function (t) {
                                  return n.onPayload(t);
                                }),
                                  this.connection.on("close", function () {
                                    return n.events.emit("disconnect");
                                  }),
                                  this.connection.on("error", function (t) {
                                    return n.events.emit("error", t);
                                  }),
                                  this.events.emit("connect");
                              case 15:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "close",
                value: (function () {
                  var t = Object(a.a)(
                    o.a.mark(function t() {
                      return o.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.next = 2), this.connection.close();
                              case 2:
                                this.events.emit("disconnect");
                              case 3:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
            ]),
            n
          );
        })(p.IJsonRpcProvider),
        v = n(424),
        g = n.n(v),
        _ = n(1004),
        y = {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
        },
        w = (function () {
          function t(e) {
            if (
              (Object(s.a)(this, t),
              (this.url = e),
              (this.events = new d.EventEmitter()),
              (this.isAvailable = !1),
              (this.registering = !1),
              !Object(p.isHttpUrl)(e))
            )
              throw new Error(
                "Provided URL is not compatible with HTTP connection: ".concat(
                  e
                )
              );
            this.url = e;
          }
          return (
            Object(u.a)(t, [
              {
                key: "connected",
                get: function () {
                  return this.isAvailable;
                },
              },
              {
                key: "connecting",
                get: function () {
                  return this.registering;
                },
              },
              {
                key: "on",
                value: function (t, e) {
                  this.events.on(t, e);
                },
              },
              {
                key: "once",
                value: function (t, e) {
                  this.events.once(t, e);
                },
              },
              {
                key: "off",
                value: function (t, e) {
                  this.events.off(t, e);
                },
              },
              {
                key: "removeListener",
                value: function (t, e) {
                  this.events.removeListener(t, e);
                },
              },
              {
                key: "open",
                value: (function () {
                  var t = Object(a.a)(
                    o.a.mark(function t() {
                      var e,
                        n = arguments;
                      return o.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (e =
                                    n.length > 0 && void 0 !== n[0]
                                      ? n[0]
                                      : this.url),
                                  (t.next = 3),
                                  this.register(e)
                                );
                              case 3:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "close",
                value: (function () {
                  var t = Object(a.a)(
                    o.a.mark(function t() {
                      return o.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (this.isAvailable) {
                                  t.next = 2;
                                  break;
                                }
                                throw new Error("Connection already closed");
                              case 2:
                                this.onClose();
                              case 3:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "send",
                value: (function () {
                  var t = Object(a.a)(
                    o.a.mark(function t(e, n) {
                      var r, i, a;
                      return o.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (this.isAvailable) {
                                  t.next = 3;
                                  break;
                                }
                                return (t.next = 3), this.register();
                              case 3:
                                return (
                                  (t.prev = 3),
                                  (r = Object(_.b)(e)),
                                  (t.next = 7),
                                  g()(
                                    this.url,
                                    Object.assign(Object.assign({}, y), {
                                      body: r,
                                    })
                                  )
                                );
                              case 7:
                                return (i = t.sent), (t.next = 10), i.json();
                              case 10:
                                (a = t.sent),
                                  this.onPayload({ data: a }),
                                  (t.next = 17);
                                break;
                              case 14:
                                (t.prev = 14),
                                  (t.t0 = t.catch(3)),
                                  this.onError(e.id, t.t0);
                              case 17:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[3, 14]]
                      );
                    })
                  );
                  return function (e, n) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "register",
                value: (function () {
                  var t = Object(a.a)(
                    o.a.mark(function t() {
                      var e,
                        n,
                        r,
                        i = this,
                        a = arguments;
                      return o.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  ((e =
                                    a.length > 0 && void 0 !== a[0]
                                      ? a[0]
                                      : this.url),
                                  Object(p.isHttpUrl)(e))
                                ) {
                                  t.next = 3;
                                  break;
                                }
                                throw new Error(
                                  "Provided URL is not compatible with HTTP connection: ".concat(
                                    e
                                  )
                                );
                              case 3:
                                if (!this.registering) {
                                  t.next = 5;
                                  break;
                                }
                                return t.abrupt(
                                  "return",
                                  new Promise(function (t, e) {
                                    i.events.once(
                                      "register_error",
                                      function (t) {
                                        e(t);
                                      }
                                    ),
                                      i.events.once("open", function () {
                                        if (
                                          "undefined" === typeof i.isAvailable
                                        )
                                          return e(
                                            new Error(
                                              "HTTP connection is missing or invalid"
                                            )
                                          );
                                        t();
                                      });
                                  })
                                );
                              case 5:
                                return (
                                  (this.url = e),
                                  (this.registering = !0),
                                  (t.prev = 7),
                                  (n = Object(_.b)({
                                    id: 1,
                                    jsonrpc: "2.0",
                                    method: "test",
                                    params: [],
                                  })),
                                  (t.next = 11),
                                  g()(
                                    e,
                                    Object.assign(Object.assign({}, y), {
                                      body: n,
                                    })
                                  )
                                );
                              case 11:
                                this.onOpen(), (t.next = 20);
                                break;
                              case 14:
                                throw (
                                  ((t.prev = 14),
                                  (t.t0 = t.catch(7)),
                                  (r = this.parseError(t.t0)),
                                  this.events.emit("register_error", r),
                                  this.onClose(),
                                  r)
                                );
                              case 20:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[7, 14]]
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "onOpen",
                value: function () {
                  (this.isAvailable = !0),
                    (this.registering = !1),
                    this.events.emit("open");
                },
              },
              {
                key: "onClose",
                value: function () {
                  (this.isAvailable = !1),
                    (this.registering = !1),
                    this.events.emit("close");
                },
              },
              {
                key: "onPayload",
                value: function (t) {
                  if ("undefined" !== typeof t.data) {
                    var e =
                      "string" === typeof t.data ? Object(_.a)(t.data) : t.data;
                    this.events.emit("payload", e);
                  }
                },
              },
              {
                key: "onError",
                value: function (t, e) {
                  var n = this.parseError(e),
                    r = n.message || n.toString(),
                    i = Object(p.formatJsonRpcError)(t, r);
                  this.events.emit("payload", i);
                },
              },
              {
                key: "parseError",
                value: function (t) {
                  var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : this.url;
                  return Object(p.parseConnectionError)(t, e, "HTTP");
                },
              },
            ]),
            t
          );
        })(),
        b = n(918),
        k = n(23),
        M = n(1068),
        x = "Session currently connected",
        E = "Session currently disconnected",
        O = "JSON RPC response format is invalid",
        C = "User close QRCode Modal",
        R = (function () {
          function t() {
            Object(s.a)(this, t), (this._eventEmitters = []);
          }
          return (
            Object(u.a)(t, [
              {
                key: "subscribe",
                value: function (t) {
                  this._eventEmitters.push(t);
                },
              },
              {
                key: "unsubscribe",
                value: function (t) {
                  this._eventEmitters = this._eventEmitters.filter(function (
                    e
                  ) {
                    return e.event !== t;
                  });
                },
              },
              {
                key: "trigger",
                value: function (t) {
                  var e,
                    n = [];
                  (e = Object(b.p)(t)
                    ? t.method
                    : Object(b.r)(t) || Object(b.q)(t)
                    ? "response:".concat(t.id)
                    : Object(b.o)(t)
                    ? t.event
                    : "") &&
                    (n = this._eventEmitters.filter(function (t) {
                      return t.event === e;
                    })),
                    (n && n.length) ||
                      Object(b.t)(e) ||
                      Object(b.o)(e) ||
                      (n = this._eventEmitters.filter(function (t) {
                        return "call_request" === t.event;
                      })),
                    n.forEach(function (e) {
                      if (Object(b.q)(t)) {
                        var n = new Error(t.error.message);
                        e.callback(n, null);
                      } else e.callback(null, t);
                    });
                },
              },
            ]),
            t
          );
        })(),
        S = (function () {
          function t() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "walletconnect";
            Object(s.a)(this, t), (this.storageId = e);
          }
          return (
            Object(u.a)(t, [
              {
                key: "getSession",
                value: function () {
                  var t = null,
                    e = Object(b.j)(this.storageId);
                  return e && Object(b.v)(e) && (t = e), t;
                },
              },
              {
                key: "setSession",
                value: function (t) {
                  return Object(b.C)(this.storageId, t), t;
                },
              },
              {
                key: "removeSession",
                value: function () {
                  Object(b.B)(this.storageId);
                },
              },
            ]),
            t
          );
        })(),
        T = S,
        I = "abcdefghijklmnopqrstuvwxyz0123456789".split("").map(function (t) {
          return "https://".concat(t, ".bridge.walletconnect.org");
        });
      function j() {
        return I[Math.floor(Math.random() * I.length)];
      }
      var A = (function () {
          function t(e) {
            if (
              (Object(s.a)(this, t),
              (this.protocol = "wc"),
              (this.version = 1),
              (this._bridge = ""),
              (this._key = null),
              (this._clientId = ""),
              (this._clientMeta = null),
              (this._peerId = ""),
              (this._peerMeta = null),
              (this._handshakeId = 0),
              (this._handshakeTopic = ""),
              (this._connected = !1),
              (this._accounts = []),
              (this._chainId = 0),
              (this._networkId = 0),
              (this._rpcUrl = ""),
              (this._eventManager = new R()),
              (this._clientMeta =
                Object(b.i)() || e.connectorOpts.clientMeta || null),
              (this._cryptoLib = e.cryptoLib),
              (this._sessionStorage =
                e.sessionStorage || new T(e.connectorOpts.storageId)),
              (this._qrcodeModal = e.connectorOpts.qrcodeModal),
              (this._qrcodeModalOptions = e.connectorOpts.qrcodeModalOptions),
              (this._signingMethods = [].concat(
                Object(k.a)(b.D),
                Object(k.a)(e.connectorOpts.signingMethods || [])
              )),
              !e.connectorOpts.bridge &&
                !e.connectorOpts.uri &&
                !e.connectorOpts.session)
            )
              throw new Error(
                "Missing one of the required parameters: bridge / uri / session"
              );
            var n;
            e.connectorOpts.bridge &&
              (this.bridge = (function (t) {
                return (
                  "walletconnect.org" ===
                  (function (t) {
                    return (function (t) {
                      var e =
                        t.indexOf("//") > -1
                          ? t.split("/")[2]
                          : t.split("/")[0];
                      return (e = e.split(":")[0]).split("?")[0];
                    })(t)
                      .split(".")
                      .slice(-2)
                      .join(".");
                  })(t)
                );
              })((n = e.connectorOpts.bridge))
                ? j()
                : n),
              e.connectorOpts.uri && (this.uri = e.connectorOpts.uri);
            var r = e.connectorOpts.session || this._getStorageSession();
            r && (this.session = r),
              this.handshakeId &&
                this._subscribeToSessionResponse(
                  this.handshakeId,
                  "Session request rejected"
                ),
              (this._transport =
                e.transport ||
                new M.a({
                  protocol: this.protocol,
                  version: this.version,
                  url: this.bridge,
                  subscriptions: [this.clientId],
                })),
              this._subscribeToInternalEvents(),
              this._initTransport(),
              e.connectorOpts.uri && this._subscribeToSessionRequest(),
              e.pushServerOpts && this._registerPushServer(e.pushServerOpts);
          }
          return (
            Object(u.a)(t, [
              {
                key: "bridge",
                get: function () {
                  return this._bridge;
                },
                set: function (t) {
                  t && (this._bridge = t);
                },
              },
              {
                key: "key",
                get: function () {
                  return this._key ? Object(b.c)(this._key, !0) : "";
                },
                set: function (t) {
                  if (t) {
                    var e = Object(b.e)(t);
                    this._key = e;
                  }
                },
              },
              {
                key: "clientId",
                get: function () {
                  var t = this._clientId;
                  return (
                    t || (t = this._clientId = Object(b.E)()), this._clientId
                  );
                },
                set: function (t) {
                  t && (this._clientId = t);
                },
              },
              {
                key: "peerId",
                get: function () {
                  return this._peerId;
                },
                set: function (t) {
                  t && (this._peerId = t);
                },
              },
              {
                key: "clientMeta",
                get: function () {
                  var t = this._clientMeta;
                  return t || (t = this._clientMeta = Object(b.i)()), t;
                },
                set: function (t) {},
              },
              {
                key: "peerMeta",
                get: function () {
                  return this._peerMeta;
                },
                set: function (t) {
                  this._peerMeta = t;
                },
              },
              {
                key: "handshakeTopic",
                get: function () {
                  return this._handshakeTopic;
                },
                set: function (t) {
                  t && (this._handshakeTopic = t);
                },
              },
              {
                key: "handshakeId",
                get: function () {
                  return this._handshakeId;
                },
                set: function (t) {
                  t && (this._handshakeId = t);
                },
              },
              {
                key: "uri",
                get: function () {
                  return this._formatUri();
                },
                set: function (t) {
                  if (t) {
                    var e = this._parseUri(t),
                      n = e.handshakeTopic,
                      r = e.bridge,
                      i = e.key;
                    (this.handshakeTopic = n),
                      (this.bridge = r),
                      (this.key = i);
                  }
                },
              },
              {
                key: "chainId",
                get: function () {
                  return this._chainId;
                },
                set: function (t) {
                  this._chainId = t;
                },
              },
              {
                key: "networkId",
                get: function () {
                  return this._networkId;
                },
                set: function (t) {
                  this._networkId = t;
                },
              },
              {
                key: "accounts",
                get: function () {
                  return this._accounts;
                },
                set: function (t) {
                  this._accounts = t;
                },
              },
              {
                key: "rpcUrl",
                get: function () {
                  return this._rpcUrl;
                },
                set: function (t) {
                  this._rpcUrl = t;
                },
              },
              {
                key: "connected",
                get: function () {
                  return this._connected;
                },
                set: function (t) {},
              },
              {
                key: "pending",
                get: function () {
                  return !!this._handshakeTopic;
                },
                set: function (t) {},
              },
              {
                key: "session",
                get: function () {
                  return {
                    connected: this.connected,
                    accounts: this.accounts,
                    chainId: this.chainId,
                    bridge: this.bridge,
                    key: this.key,
                    clientId: this.clientId,
                    clientMeta: this.clientMeta,
                    peerId: this.peerId,
                    peerMeta: this.peerMeta,
                    handshakeId: this.handshakeId,
                    handshakeTopic: this.handshakeTopic,
                  };
                },
                set: function (t) {
                  t &&
                    ((this._connected = t.connected),
                    (this.accounts = t.accounts),
                    (this.chainId = t.chainId),
                    (this.bridge = t.bridge),
                    (this.key = t.key),
                    (this.clientId = t.clientId),
                    (this.clientMeta = t.clientMeta),
                    (this.peerId = t.peerId),
                    (this.peerMeta = t.peerMeta),
                    (this.handshakeId = t.handshakeId),
                    (this.handshakeTopic = t.handshakeTopic));
                },
              },
              {
                key: "on",
                value: function (t, e) {
                  var n = { event: t, callback: e };
                  this._eventManager.subscribe(n);
                },
              },
              {
                key: "off",
                value: function (t) {
                  this._eventManager.unsubscribe(t);
                },
              },
              {
                key: "createInstantRequest",
                value: (function () {
                  var t = Object(a.a)(
                    o.a.mark(function t(e) {
                      var n,
                        r,
                        i,
                        a = this;
                      return o.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.next = 2), this._generateKey();
                              case 2:
                                return (
                                  (this._key = t.sent),
                                  (n = this._formatRequest({
                                    method: "wc_instantRequest",
                                    params: [
                                      {
                                        peerId: this.clientId,
                                        peerMeta: this.clientMeta,
                                        request: this._formatRequest(e),
                                      },
                                    ],
                                  })),
                                  (this.handshakeId = n.id),
                                  (this.handshakeTopic = Object(b.E)()),
                                  this._eventManager.trigger({
                                    event: "display_uri",
                                    params: [this.uri],
                                  }),
                                  this.on("modal_closed", function () {
                                    throw new Error(C);
                                  }),
                                  (r = function () {
                                    a.killSession();
                                  }),
                                  (t.prev = 9),
                                  (t.next = 12),
                                  this._sendCallRequest(n)
                                );
                              case 12:
                                return (
                                  (i = t.sent) && r(), t.abrupt("return", i)
                                );
                              case 17:
                                throw (
                                  ((t.prev = 17),
                                  (t.t0 = t.catch(9)),
                                  r(),
                                  t.t0)
                                );
                              case 21:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[9, 17]]
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "connect",
                value: (function () {
                  var t = Object(a.a)(
                    o.a.mark(function t(e) {
                      var n = this;
                      return o.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (this._qrcodeModal) {
                                  t.next = 2;
                                  break;
                                }
                                throw new Error("QRCode Modal not provided");
                              case 2:
                                if (!this.connected) {
                                  t.next = 4;
                                  break;
                                }
                                return t.abrupt("return", {
                                  chainId: this.chainId,
                                  accounts: this.accounts,
                                });
                              case 4:
                                return (t.next = 6), this.createSession(e);
                              case 6:
                                return t.abrupt(
                                  "return",
                                  new Promise(
                                    (function () {
                                      var t = Object(a.a)(
                                        o.a.mark(function t(e, r) {
                                          return o.a.wrap(function (t) {
                                            for (;;)
                                              switch ((t.prev = t.next)) {
                                                case 0:
                                                  n.on(
                                                    "modal_closed",
                                                    function () {
                                                      return r(new Error(C));
                                                    }
                                                  ),
                                                    n.on(
                                                      "connect",
                                                      function (t, n) {
                                                        if (t) return r(t);
                                                        e(n.params[0]);
                                                      }
                                                    );
                                                case 2:
                                                case "end":
                                                  return t.stop();
                                              }
                                          }, t);
                                        })
                                      );
                                      return function (e, n) {
                                        return t.apply(this, arguments);
                                      };
                                    })()
                                  )
                                );
                              case 7:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "createSession",
                value: (function () {
                  var t = Object(a.a)(
                    o.a.mark(function t(e) {
                      var n;
                      return o.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (!this._connected) {
                                  t.next = 2;
                                  break;
                                }
                                throw new Error(x);
                              case 2:
                                if (!this.pending) {
                                  t.next = 4;
                                  break;
                                }
                                return t.abrupt("return");
                              case 4:
                                return (t.next = 6), this._generateKey();
                              case 6:
                                (this._key = t.sent),
                                  (n = this._formatRequest({
                                    method: "wc_sessionRequest",
                                    params: [
                                      {
                                        peerId: this.clientId,
                                        peerMeta: this.clientMeta,
                                        chainId:
                                          e && e.chainId ? e.chainId : null,
                                      },
                                    ],
                                  })),
                                  (this.handshakeId = n.id),
                                  (this.handshakeTopic = Object(b.E)()),
                                  this._sendSessionRequest(
                                    n,
                                    "Session update rejected",
                                    { topic: this.handshakeTopic }
                                  ),
                                  this._eventManager.trigger({
                                    event: "display_uri",
                                    params: [this.uri],
                                  });
                              case 12:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "approveSession",
                value: function (t) {
                  if (this._connected) throw new Error(x);
                  (this.chainId = t.chainId),
                    (this.accounts = t.accounts),
                    (this.networkId = t.networkId || 0),
                    (this.rpcUrl = t.rpcUrl || "");
                  var e = {
                      approved: !0,
                      chainId: this.chainId,
                      networkId: this.networkId,
                      accounts: this.accounts,
                      rpcUrl: this.rpcUrl,
                      peerId: this.clientId,
                      peerMeta: this.clientMeta,
                    },
                    n = { id: this.handshakeId, jsonrpc: "2.0", result: e };
                  this._sendResponse(n),
                    (this._connected = !0),
                    this._setStorageSession(),
                    this._eventManager.trigger({
                      event: "connect",
                      params: [
                        {
                          peerId: this.peerId,
                          peerMeta: this.peerMeta,
                          chainId: this.chainId,
                          accounts: this.accounts,
                        },
                      ],
                    });
                },
              },
              {
                key: "rejectSession",
                value: function (t) {
                  if (this._connected) throw new Error(x);
                  var e = t && t.message ? t.message : "Session Rejected",
                    n = this._formatResponse({
                      id: this.handshakeId,
                      error: { message: e },
                    });
                  this._sendResponse(n),
                    (this._connected = !1),
                    this._eventManager.trigger({
                      event: "disconnect",
                      params: [{ message: e }],
                    }),
                    this._removeStorageSession();
                },
              },
              {
                key: "updateSession",
                value: function (t) {
                  if (!this._connected) throw new Error(E);
                  (this.chainId = t.chainId),
                    (this.accounts = t.accounts),
                    (this.networkId = t.networkId || 0),
                    (this.rpcUrl = t.rpcUrl || "");
                  var e = {
                      approved: !0,
                      chainId: this.chainId,
                      networkId: this.networkId,
                      accounts: this.accounts,
                      rpcUrl: this.rpcUrl,
                    },
                    n = this._formatRequest({
                      method: "wc_sessionUpdate",
                      params: [e],
                    });
                  this._sendSessionRequest(n, "Session update rejected"),
                    this._eventManager.trigger({
                      event: "session_update",
                      params: [
                        { chainId: this.chainId, accounts: this.accounts },
                      ],
                    }),
                    this._manageStorageSession();
                },
              },
              {
                key: "killSession",
                value: (function () {
                  var t = Object(a.a)(
                    o.a.mark(function t(e) {
                      var n, r, i;
                      return o.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (n = e ? e.message : "Session Disconnected"),
                                  (r = {
                                    approved: !1,
                                    chainId: null,
                                    networkId: null,
                                    accounts: null,
                                  }),
                                  (i = this._formatRequest({
                                    method: "wc_sessionUpdate",
                                    params: [r],
                                  })),
                                  (t.next = 5),
                                  this._sendRequest(i)
                                );
                              case 5:
                                this._handleSessionDisconnect(n);
                              case 6:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "sendTransaction",
                value: (function () {
                  var t = Object(a.a)(
                    o.a.mark(function t(e) {
                      var n, r, i;
                      return o.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (this._connected) {
                                  t.next = 2;
                                  break;
                                }
                                throw new Error(E);
                              case 2:
                                return (
                                  (n = Object(b.y)(e)),
                                  (r = this._formatRequest({
                                    method: "eth_sendTransaction",
                                    params: [n],
                                  })),
                                  (t.next = 6),
                                  this._sendCallRequest(r)
                                );
                              case 6:
                                return (i = t.sent), t.abrupt("return", i);
                              case 8:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "signTransaction",
                value: (function () {
                  var t = Object(a.a)(
                    o.a.mark(function t(e) {
                      var n, r, i;
                      return o.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (this._connected) {
                                  t.next = 2;
                                  break;
                                }
                                throw new Error(E);
                              case 2:
                                return (
                                  (n = Object(b.y)(e)),
                                  (r = this._formatRequest({
                                    method: "eth_signTransaction",
                                    params: [n],
                                  })),
                                  (t.next = 6),
                                  this._sendCallRequest(r)
                                );
                              case 6:
                                return (i = t.sent), t.abrupt("return", i);
                              case 8:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "signMessage",
                value: (function () {
                  var t = Object(a.a)(
                    o.a.mark(function t(e) {
                      var n, r;
                      return o.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (this._connected) {
                                  t.next = 2;
                                  break;
                                }
                                throw new Error(E);
                              case 2:
                                return (
                                  (n = this._formatRequest({
                                    method: "eth_sign",
                                    params: e,
                                  })),
                                  (t.next = 5),
                                  this._sendCallRequest(n)
                                );
                              case 5:
                                return (r = t.sent), t.abrupt("return", r);
                              case 7:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "signPersonalMessage",
                value: (function () {
                  var t = Object(a.a)(
                    o.a.mark(function t(e) {
                      var n, r;
                      return o.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (this._connected) {
                                  t.next = 2;
                                  break;
                                }
                                throw new Error(E);
                              case 2:
                                return (
                                  (e = Object(b.x)(e)),
                                  (n = this._formatRequest({
                                    method: "personal_sign",
                                    params: e,
                                  })),
                                  (t.next = 6),
                                  this._sendCallRequest(n)
                                );
                              case 6:
                                return (r = t.sent), t.abrupt("return", r);
                              case 8:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "signTypedData",
                value: (function () {
                  var t = Object(a.a)(
                    o.a.mark(function t(e) {
                      var n, r;
                      return o.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (this._connected) {
                                  t.next = 2;
                                  break;
                                }
                                throw new Error(E);
                              case 2:
                                return (
                                  (n = this._formatRequest({
                                    method: "eth_signTypedData",
                                    params: e,
                                  })),
                                  (t.next = 5),
                                  this._sendCallRequest(n)
                                );
                              case 5:
                                return (r = t.sent), t.abrupt("return", r);
                              case 7:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "updateChain",
                value: (function () {
                  var t = Object(a.a)(
                    o.a.mark(function t(e) {
                      var n, r;
                      return o.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (this._connected) {
                                  t.next = 2;
                                  break;
                                }
                                throw new Error(
                                  "Session currently disconnected"
                                );
                              case 2:
                                return (
                                  (n = this._formatRequest({
                                    method: "wallet_updateChain",
                                    params: [e],
                                  })),
                                  (t.next = 5),
                                  this._sendCallRequest(n)
                                );
                              case 5:
                                return (r = t.sent), t.abrupt("return", r);
                              case 7:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "unsafeSend",
                value: function (t, e) {
                  var n = this;
                  return (
                    this._sendRequest(t, e),
                    this._eventManager.trigger({
                      event: "call_request_sent",
                      params: [{ request: t, options: e }],
                    }),
                    new Promise(function (e, r) {
                      n._subscribeToResponse(t.id, function (t, n) {
                        if (t) r(t);
                        else {
                          if (!n) throw new Error("Missing JSON RPC response");
                          e(n);
                        }
                      });
                    })
                  );
                },
              },
              {
                key: "sendCustomRequest",
                value: (function () {
                  var t = Object(a.a)(
                    o.a.mark(function t(e, n) {
                      var r, i;
                      return o.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (this._connected) {
                                  t.next = 2;
                                  break;
                                }
                                throw new Error(E);
                              case 2:
                                (t.t0 = e.method),
                                  (t.next =
                                    "eth_accounts" === t.t0
                                      ? 5
                                      : "eth_chainId" === t.t0
                                      ? 6
                                      : "eth_sendTransaction" === t.t0 ||
                                        "eth_signTransaction" === t.t0
                                      ? 7
                                      : "personal_sign" === t.t0
                                      ? 9
                                      : 11);
                                break;
                              case 5:
                                return t.abrupt("return", this.accounts);
                              case 6:
                                return t.abrupt(
                                  "return",
                                  Object(b.f)(this.chainId)
                                );
                              case 7:
                                return (
                                  e.params &&
                                    (e.params[0] = Object(b.y)(e.params[0])),
                                  t.abrupt("break", 12)
                                );
                              case 9:
                                return (
                                  e.params &&
                                    (e.params = Object(b.x)(e.params)),
                                  t.abrupt("break", 12)
                                );
                              case 11:
                                return t.abrupt("break", 12);
                              case 12:
                                return (
                                  (r = this._formatRequest(e)),
                                  (t.next = 15),
                                  this._sendCallRequest(r, n)
                                );
                              case 15:
                                return (i = t.sent), t.abrupt("return", i);
                              case 17:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e, n) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "approveRequest",
                value: function (t) {
                  if (!Object(b.r)(t))
                    throw new Error(
                      'JSON-RPC success response must include "result" field'
                    );
                  var e = this._formatResponse(t);
                  this._sendResponse(e);
                },
              },
              {
                key: "rejectRequest",
                value: function (t) {
                  if (!Object(b.q)(t))
                    throw new Error(
                      'JSON-RPC error response must include "error" field'
                    );
                  var e = this._formatResponse(t);
                  this._sendResponse(e);
                },
              },
              {
                key: "transportClose",
                value: function () {
                  this._transport.close();
                },
              },
              {
                key: "_sendRequest",
                value: (function () {
                  var t = Object(a.a)(
                    o.a.mark(function t(e, n) {
                      var r, i, a, s, u;
                      return o.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (r = this._formatRequest(e)),
                                  (t.next = 3),
                                  this._encrypt(r)
                                );
                              case 3:
                                (i = t.sent),
                                  (a =
                                    "undefined" !==
                                    typeof (null === n || void 0 === n
                                      ? void 0
                                      : n.topic)
                                      ? n.topic
                                      : this.peerId),
                                  (s = JSON.stringify(i)),
                                  (u =
                                    "undefined" !==
                                    typeof (null === n || void 0 === n
                                      ? void 0
                                      : n.forcePushNotification)
                                      ? !n.forcePushNotification
                                      : Object(b.u)(r)),
                                  this._transport.send(s, a, u);
                              case 8:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e, n) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_sendResponse",
                value: (function () {
                  var t = Object(a.a)(
                    o.a.mark(function t(e) {
                      var n, r, i;
                      return o.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.next = 2), this._encrypt(e);
                              case 2:
                                (n = t.sent),
                                  (r = this.peerId),
                                  (i = JSON.stringify(n)),
                                  !0,
                                  this._transport.send(i, r, true);
                              case 7:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_sendSessionRequest",
                value: (function () {
                  var t = Object(a.a)(
                    o.a.mark(function t(e, n, r) {
                      return o.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                this._sendRequest(e, r),
                                  this._subscribeToSessionResponse(e.id, n);
                              case 2:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e, n, r) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_sendCallRequest",
                value: function (t, e) {
                  return (
                    this._sendRequest(t, e),
                    this._eventManager.trigger({
                      event: "call_request_sent",
                      params: [{ request: t, options: e }],
                    }),
                    this._subscribeToCallResponse(t.id)
                  );
                },
              },
              {
                key: "_formatRequest",
                value: function (t) {
                  if ("undefined" === typeof t.method)
                    throw new Error(
                      'JSON RPC request must have valid "method" value'
                    );
                  return {
                    id: "undefined" === typeof t.id ? Object(b.A)() : t.id,
                    jsonrpc: "2.0",
                    method: t.method,
                    params: "undefined" === typeof t.params ? [] : t.params,
                  };
                },
              },
              {
                key: "_formatResponse",
                value: function (t) {
                  if ("undefined" === typeof t.id)
                    throw new Error(
                      'JSON RPC request must have valid "id" value'
                    );
                  var e = { id: t.id, jsonrpc: "2.0" };
                  if (Object(b.q)(t)) {
                    var n = Object(b.h)(t.error);
                    return Object.assign(
                      Object.assign(Object.assign({}, e), t),
                      { error: n }
                    );
                  }
                  if (Object(b.r)(t))
                    return Object.assign(Object.assign({}, e), t);
                  throw new Error(O);
                },
              },
              {
                key: "_handleSessionDisconnect",
                value: function (t) {
                  var e = t || "Session Disconnected";
                  this._connected ||
                    (this._qrcodeModal && this._qrcodeModal.close(),
                    Object(b.B)(b.w)),
                    this._connected && (this._connected = !1),
                    this._handshakeId && (this._handshakeId = 0),
                    this._handshakeTopic && (this._handshakeTopic = ""),
                    this._peerId && (this._peerId = ""),
                    this._eventManager.trigger({
                      event: "disconnect",
                      params: [{ message: e }],
                    }),
                    this._removeStorageSession(),
                    this.transportClose();
                },
              },
              {
                key: "_handleSessionResponse",
                value: function (t, e) {
                  e && e.approved
                    ? (this._connected
                        ? (e.chainId && (this.chainId = e.chainId),
                          e.accounts && (this.accounts = e.accounts),
                          this._eventManager.trigger({
                            event: "session_update",
                            params: [
                              {
                                chainId: this.chainId,
                                accounts: this.accounts,
                              },
                            ],
                          }))
                        : ((this._connected = !0),
                          e.chainId && (this.chainId = e.chainId),
                          e.accounts && (this.accounts = e.accounts),
                          e.peerId && !this.peerId && (this.peerId = e.peerId),
                          e.peerMeta &&
                            !this.peerMeta &&
                            (this.peerMeta = e.peerMeta),
                          this._eventManager.trigger({
                            event: "connect",
                            params: [
                              {
                                peerId: this.peerId,
                                peerMeta: this.peerMeta,
                                chainId: this.chainId,
                                accounts: this.accounts,
                              },
                            ],
                          })),
                      this._manageStorageSession())
                    : this._handleSessionDisconnect(t);
                },
              },
              {
                key: "_handleIncomingMessages",
                value: (function () {
                  var t = Object(a.a)(
                    o.a.mark(function t(e) {
                      var n, r;
                      return o.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  [this.clientId, this.handshakeTopic].includes(
                                    e.topic
                                  )
                                ) {
                                  t.next = 3;
                                  break;
                                }
                                return t.abrupt("return");
                              case 3:
                                (t.prev = 3),
                                  (n = JSON.parse(e.payload)),
                                  (t.next = 10);
                                break;
                              case 7:
                                return (
                                  (t.prev = 7),
                                  (t.t0 = t.catch(3)),
                                  t.abrupt("return")
                                );
                              case 10:
                                return (t.next = 12), this._decrypt(n);
                              case 12:
                                (r = t.sent) && this._eventManager.trigger(r);
                              case 14:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[3, 7]]
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_subscribeToSessionRequest",
                value: function () {
                  this._transport.subscribe(this.handshakeTopic);
                },
              },
              {
                key: "_subscribeToResponse",
                value: function (t, e) {
                  this.on("response:".concat(t), e);
                },
              },
              {
                key: "_subscribeToSessionResponse",
                value: function (t, e) {
                  var n = this;
                  this._subscribeToResponse(t, function (t, r) {
                    t
                      ? n._handleSessionResponse(t.message)
                      : r.result
                      ? n._handleSessionResponse(e, r.result)
                      : r.error && r.error.message
                      ? n._handleSessionResponse(r.error.message)
                      : n._handleSessionResponse(e);
                  });
                },
              },
              {
                key: "_subscribeToCallResponse",
                value: function (t) {
                  var e = this;
                  return new Promise(function (n, r) {
                    e._subscribeToResponse(t, function (t, e) {
                      t
                        ? r(t)
                        : e.result
                        ? n(e.result)
                        : e.error && e.error.message
                        ? r(new Error(e.error.message))
                        : r(new Error(O));
                    });
                  });
                },
              },
              {
                key: "_subscribeToInternalEvents",
                value: function () {
                  var t = this;
                  this.on("display_uri", function () {
                    t._qrcodeModal &&
                      t._qrcodeModal.open(
                        t.uri,
                        function () {
                          t._eventManager.trigger({
                            event: "modal_closed",
                            params: [],
                          });
                        },
                        t._qrcodeModalOptions
                      );
                  }),
                    this.on("connect", function () {
                      t._qrcodeModal && t._qrcodeModal.close();
                    }),
                    this.on("call_request_sent", function (e, n) {
                      var r = n.params[0].request;
                      if (
                        Object(b.s)() &&
                        t._signingMethods.includes(r.method)
                      ) {
                        var i = Object(b.j)(b.w);
                        i && (window.location.href = i.href);
                      }
                    }),
                    this.on("wc_sessionRequest", function (e, n) {
                      e &&
                        t._eventManager.trigger({
                          event: "error",
                          params: [
                            {
                              code: "SESSION_REQUEST_ERROR",
                              message: e.toString(),
                            },
                          ],
                        }),
                        (t.handshakeId = n.id),
                        (t.peerId = n.params[0].peerId),
                        (t.peerMeta = n.params[0].peerMeta);
                      var r = Object.assign(Object.assign({}, n), {
                        method: "session_request",
                      });
                      t._eventManager.trigger(r);
                    }),
                    this.on("wc_sessionUpdate", function (e, n) {
                      e && t._handleSessionResponse(e.message),
                        t._handleSessionResponse(
                          "Session disconnected",
                          n.params[0]
                        );
                    });
                },
              },
              {
                key: "_initTransport",
                value: function () {
                  var t = this;
                  this._transport.on("message", function (e) {
                    return t._handleIncomingMessages(e);
                  }),
                    this._transport.on("open", function () {
                      return t._eventManager.trigger({
                        event: "transport_open",
                        params: [],
                      });
                    }),
                    this._transport.on("close", function () {
                      return t._eventManager.trigger({
                        event: "transport_close",
                        params: [],
                      });
                    }),
                    this._transport.on("error", function () {
                      return t._eventManager.trigger({
                        event: "transport_error",
                        params: ["Websocket connection failed"],
                      });
                    }),
                    this._transport.open();
                },
              },
              {
                key: "_formatUri",
                value: function () {
                  var t = this.protocol,
                    e = this.handshakeTopic,
                    n = this.version,
                    r = encodeURIComponent(this.bridge),
                    i = this.key;
                  return ""
                    .concat(t, ":")
                    .concat(e, "@")
                    .concat(n, "?bridge=")
                    .concat(r, "&key=")
                    .concat(i);
                },
              },
              {
                key: "_parseUri",
                value: function (t) {
                  var e = Object(b.z)(t);
                  if (e.protocol === this.protocol) {
                    if (!e.handshakeTopic)
                      throw Error(
                        "Invalid or missing handshakeTopic parameter value"
                      );
                    var n = e.handshakeTopic;
                    if (!e.bridge)
                      throw Error(
                        "Invalid or missing bridge url parameter value"
                      );
                    var r = decodeURIComponent(e.bridge);
                    if (!e.key)
                      throw Error("Invalid or missing key parameter value");
                    return { handshakeTopic: n, bridge: r, key: e.key };
                  }
                  throw new Error("URI format is invalid");
                },
              },
              {
                key: "_generateKey",
                value: (function () {
                  var t = Object(a.a)(
                    o.a.mark(function t() {
                      var e;
                      return o.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (!this._cryptoLib) {
                                  t.next = 5;
                                  break;
                                }
                                return (
                                  (t.next = 3), this._cryptoLib.generateKey()
                                );
                              case 3:
                                return (e = t.sent), t.abrupt("return", e);
                              case 5:
                                return t.abrupt("return", null);
                              case 6:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_encrypt",
                value: (function () {
                  var t = Object(a.a)(
                    o.a.mark(function t(e) {
                      var n, r;
                      return o.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (((n = this._key), !this._cryptoLib || !n)) {
                                  t.next = 6;
                                  break;
                                }
                                return (
                                  (t.next = 4), this._cryptoLib.encrypt(e, n)
                                );
                              case 4:
                                return (r = t.sent), t.abrupt("return", r);
                              case 6:
                                return t.abrupt("return", null);
                              case 7:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_decrypt",
                value: (function () {
                  var t = Object(a.a)(
                    o.a.mark(function t(e) {
                      var n, r;
                      return o.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (((n = this._key), !this._cryptoLib || !n)) {
                                  t.next = 6;
                                  break;
                                }
                                return (
                                  (t.next = 4), this._cryptoLib.decrypt(e, n)
                                );
                              case 4:
                                return (r = t.sent), t.abrupt("return", r);
                              case 6:
                                return t.abrupt("return", null);
                              case 7:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_getStorageSession",
                value: function () {
                  var t = null;
                  return (
                    this._sessionStorage &&
                      (t = this._sessionStorage.getSession()),
                    t
                  );
                },
              },
              {
                key: "_setStorageSession",
                value: function () {
                  this._sessionStorage &&
                    this._sessionStorage.setSession(this.session);
                },
              },
              {
                key: "_removeStorageSession",
                value: function () {
                  this._sessionStorage && this._sessionStorage.removeSession();
                },
              },
              {
                key: "_manageStorageSession",
                value: function () {
                  this._connected
                    ? this._setStorageSession()
                    : this._removeStorageSession();
                },
              },
              {
                key: "_registerPushServer",
                value: function (t) {
                  if (!t.url || "string" !== typeof t.url)
                    throw Error(
                      "Invalid or missing pushServerOpts.url parameter value"
                    );
                  if (!t.type || "string" !== typeof t.type)
                    throw Error(
                      "Invalid or missing pushServerOpts.type parameter value"
                    );
                  if (!t.token || "string" !== typeof t.token)
                    throw Error(
                      "Invalid or missing pushServerOpts.token parameter value"
                    );
                  var e = {
                    bridge: this.bridge,
                    topic: this.clientId,
                    type: t.type,
                    token: t.token,
                    peerName: "",
                    language: t.language || "",
                  };
                  this.on(
                    "connect",
                    (function () {
                      var n = Object(a.a)(
                        o.a.mark(function n(r, i) {
                          var a, s;
                          return o.a.wrap(
                            function (n) {
                              for (;;)
                                switch ((n.prev = n.next)) {
                                  case 0:
                                    if (!r) {
                                      n.next = 2;
                                      break;
                                    }
                                    throw r;
                                  case 2:
                                    return (
                                      t.peerMeta &&
                                        ((a = i.params[0].peerMeta.name),
                                        (e.peerName = a)),
                                      (n.prev = 3),
                                      (n.next = 6),
                                      fetch("".concat(t.url, "/new"), {
                                        method: "POST",
                                        headers: {
                                          Accept: "application/json",
                                          "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify(e),
                                      })
                                    );
                                  case 6:
                                    return (s = n.sent), (n.next = 9), s.json();
                                  case 9:
                                    if (n.sent.success) {
                                      n.next = 12;
                                      break;
                                    }
                                    throw Error(
                                      "Failed to register in Push Server"
                                    );
                                  case 12:
                                    n.next = 17;
                                    break;
                                  case 14:
                                    throw (
                                      ((n.prev = 14),
                                      (n.t0 = n.catch(3)),
                                      Error(
                                        "Failed to register in Push Server"
                                      ))
                                    );
                                  case 17:
                                  case "end":
                                    return n.stop();
                                }
                            },
                            n,
                            null,
                            [[3, 14]]
                          );
                        })
                      );
                      return function (t, e) {
                        return n.apply(this, arguments);
                      };
                    })()
                  );
                },
              },
            ]),
            t
          );
        })(),
        N = A,
        P = n(1071),
        L = n(919);
      function B(t) {
        return q.apply(this, arguments);
      }
      function q() {
        return (q = Object(a.a)(
          o.a.mark(function t(e) {
            var n, r, i;
            return o.a.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (n = (e || 256) / 8),
                      (r = P.randomBytes(n)),
                      (i = Object(b.d)(L.arrayToBuffer(r))),
                      t.abrupt("return", i)
                    );
                  case 4:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function U(t, e) {
        return H.apply(this, arguments);
      }
      function H() {
        return (H = Object(a.a)(
          o.a.mark(function t(e, n) {
            var r, i, a, s, u, c, l;
            return o.a.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (r = L.hexToArray(e.data)),
                      (i = L.hexToArray(e.iv)),
                      (a = L.hexToArray(e.hmac)),
                      (s = L.arrayToHex(a, !1)),
                      (u = L.concatArrays(r, i)),
                      (t.next = 7),
                      P.hmacSha256Sign(n, u)
                    );
                  case 7:
                    if (
                      ((c = t.sent),
                      (l = L.arrayToHex(c, !1)),
                      L.removeHexPrefix(s) !== L.removeHexPrefix(l))
                    ) {
                      t.next = 11;
                      break;
                    }
                    return t.abrupt("return", !0);
                  case 11:
                    return t.abrupt("return", !1);
                  case 12:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function J(t, e, n) {
        return D.apply(this, arguments);
      }
      function D() {
        return (D = Object(a.a)(
          o.a.mark(function t(e, n, r) {
            var i, a, s, u, c, l, h, f, d, p, m;
            return o.a.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (
                      ((i = L.bufferToArray(Object(b.b)(n))), (t.t0 = r), t.t0)
                    ) {
                      t.next = 6;
                      break;
                    }
                    return (t.next = 5), B(128);
                  case 5:
                    t.t0 = t.sent;
                  case 6:
                    return (
                      (a = t.t0),
                      (s = L.bufferToArray(Object(b.b)(a))),
                      (u = L.arrayToHex(s, !1)),
                      (c = JSON.stringify(e)),
                      (l = L.utf8ToArray(c)),
                      (t.next = 13),
                      P.aesCbcEncrypt(s, i, l)
                    );
                  case 13:
                    return (
                      (h = t.sent),
                      (f = L.arrayToHex(h, !1)),
                      (d = L.concatArrays(h, s)),
                      (t.next = 18),
                      P.hmacSha256Sign(i, d)
                    );
                  case 18:
                    return (
                      (p = t.sent),
                      (m = L.arrayToHex(p, !1)),
                      t.abrupt("return", { data: f, hmac: m, iv: u })
                    );
                  case 21:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function F(t, e) {
        return W.apply(this, arguments);
      }
      function W() {
        return (W = Object(a.a)(
          o.a.mark(function t(e, n) {
            var r, i, a, s, u, c;
            return o.a.wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if ((r = L.bufferToArray(Object(b.b)(n)))) {
                        t.next = 3;
                        break;
                      }
                      throw new Error("Missing key: required for decryption");
                    case 3:
                      return (t.next = 5), U(e, r);
                    case 5:
                      if (t.sent) {
                        t.next = 8;
                        break;
                      }
                      return t.abrupt("return", null);
                    case 8:
                      return (
                        (i = L.hexToArray(e.data)),
                        (a = L.hexToArray(e.iv)),
                        (t.next = 12),
                        P.aesCbcDecrypt(a, r, i)
                      );
                    case 12:
                      (s = t.sent),
                        (u = L.arrayToUtf8(s)),
                        (t.prev = 14),
                        (c = JSON.parse(u)),
                        (t.next = 21);
                      break;
                    case 18:
                      return (
                        (t.prev = 18),
                        (t.t0 = t.catch(14)),
                        t.abrupt("return", null)
                      );
                    case 21:
                      return t.abrupt("return", c);
                    case 22:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[14, 18]]
            );
          })
        )).apply(this, arguments);
      }
      var z = (function (t) {
          Object(h.a)(n, t);
          var e = Object(f.a)(n);
          function n(t, i) {
            return (
              Object(s.a)(this, n),
              e.call(this, {
                cryptoLib: r,
                connectorOpts: t,
                pushServerOpts: i,
              })
            );
          }
          return Object(u.a)(n);
        })(N),
        Y = n(1072),
        K = n.n(Y),
        V = (function (t) {
          Object(h.a)(n, t);
          var e = Object(f.a)(n);
          function n(t) {
            var r;
            return (
              Object(s.a)(this, n),
              ((r = e.call(this)).events = new l.a()),
              (r.accounts = []),
              (r.chainId = 1),
              (r.pending = !1),
              (r.bridge = "https://bridge.walletconnect.org"),
              (r.qrcode = !0),
              (r.qrcodeModalOptions = void 0),
              (r.opts = t),
              (r.chainId =
                (null === t || void 0 === t ? void 0 : t.chainId) || r.chainId),
              (r.wc = r.register(t)),
              r
            );
          }
          return (
            Object(u.a)(n, [
              {
                key: "connected",
                get: function () {
                  return "undefined" !== typeof this.wc && this.wc.connected;
                },
              },
              {
                key: "connecting",
                get: function () {
                  return this.pending;
                },
              },
              {
                key: "connector",
                get: function () {
                  return (this.wc = this.register(this.opts)), this.wc;
                },
              },
              {
                key: "on",
                value: function (t, e) {
                  this.events.on(t, e);
                },
              },
              {
                key: "once",
                value: function (t, e) {
                  this.events.once(t, e);
                },
              },
              {
                key: "off",
                value: function (t, e) {
                  this.events.off(t, e);
                },
              },
              {
                key: "removeListener",
                value: function (t, e) {
                  this.events.removeListener(t, e);
                },
              },
              {
                key: "open",
                value: (function () {
                  var t = Object(a.a)(
                    o.a.mark(function t(e) {
                      var n = this;
                      return o.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (!this.connected) {
                                  t.next = 3;
                                  break;
                                }
                                return this.onOpen(), t.abrupt("return");
                              case 3:
                                return t.abrupt(
                                  "return",
                                  new Promise(function (t, r) {
                                    n.on("error", function (t) {
                                      r(t);
                                    }),
                                      n.on("open", function () {
                                        t();
                                      }),
                                      n.create(e);
                                  })
                                );
                              case 4:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "close",
                value: (function () {
                  var t = Object(a.a)(
                    o.a.mark(function t() {
                      return o.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if ("undefined" !== typeof this.wc) {
                                  t.next = 2;
                                  break;
                                }
                                return t.abrupt("return");
                              case 2:
                                this.wc.connected && this.wc.killSession(),
                                  this.onClose();
                              case 4:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "send",
                value: (function () {
                  var t = Object(a.a)(
                    o.a.mark(function t(e) {
                      var n = this;
                      return o.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  ((this.wc = this.register(this.opts)),
                                  this.connected)
                                ) {
                                  t.next = 4;
                                  break;
                                }
                                return (t.next = 4), this.open();
                              case 4:
                                this.sendPayload(e)
                                  .then(function (t) {
                                    return n.events.emit("payload", t);
                                  })
                                  .catch(function (t) {
                                    return n.events.emit(
                                      "payload",
                                      Object(p.formatJsonRpcError)(
                                        e.id,
                                        t.message
                                      )
                                    );
                                  });
                              case 5:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "register",
                value: function (t) {
                  if (this.wc) return this.wc;
                  (this.opts = t || this.opts),
                    (this.bridge = (
                      null === t || void 0 === t ? void 0 : t.connector
                    )
                      ? t.connector.bridge
                      : (null === t || void 0 === t ? void 0 : t.bridge) ||
                        "https://bridge.walletconnect.org"),
                    (this.qrcode =
                      "undefined" ===
                        typeof (null === t || void 0 === t
                          ? void 0
                          : t.qrcode) || !1 !== t.qrcode),
                    (this.chainId =
                      "undefined" !==
                      typeof (null === t || void 0 === t ? void 0 : t.chainId)
                        ? t.chainId
                        : this.chainId),
                    (this.qrcodeModalOptions =
                      null === t || void 0 === t
                        ? void 0
                        : t.qrcodeModalOptions);
                  var e = {
                    bridge: this.bridge,
                    qrcodeModal: this.qrcode ? K.a : void 0,
                    qrcodeModalOptions: this.qrcodeModalOptions,
                    storageId:
                      null === t || void 0 === t ? void 0 : t.storageId,
                    signingMethods:
                      null === t || void 0 === t ? void 0 : t.signingMethods,
                    clientMeta:
                      null === t || void 0 === t ? void 0 : t.clientMeta,
                  };
                  if (
                    ((this.wc =
                      "undefined" !==
                      typeof (null === t || void 0 === t ? void 0 : t.connector)
                        ? t.connector
                        : new z(e)),
                    "undefined" === typeof this.wc)
                  )
                    throw new Error(
                      "Failed to register WalletConnect connector"
                    );
                  return (
                    this.wc.accounts.length &&
                      (this.accounts = this.wc.accounts),
                    this.wc.chainId && (this.chainId = this.wc.chainId),
                    this.registerConnectorEvents(),
                    this.wc
                  );
                },
              },
              {
                key: "onOpen",
                value: function (t) {
                  (this.pending = !1),
                    t && (this.wc = t),
                    this.events.emit("open");
                },
              },
              {
                key: "onClose",
                value: function () {
                  (this.pending = !1),
                    this.wc && (this.wc = void 0),
                    this.events.emit("close");
                },
              },
              {
                key: "onError",
                value: function (t) {
                  var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "Failed or Rejected Request",
                    n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : -32e3,
                    r = {
                      id: t.id,
                      jsonrpc: t.jsonrpc,
                      error: { code: n, message: e },
                    };
                  return this.events.emit("payload", r), r;
                },
              },
              {
                key: "create",
                value: function (t) {
                  var e = this;
                  (this.wc = this.register(this.opts)),
                    (this.chainId = t || this.chainId),
                    this.connected ||
                      this.pending ||
                      ((this.pending = !0),
                      this.registerConnectorEvents(),
                      this.wc
                        .createSession({ chainId: this.chainId })
                        .then(function () {
                          return e.events.emit("created");
                        })
                        .catch(function (t) {
                          return e.events.emit("error", t);
                        }));
                },
              },
              {
                key: "registerConnectorEvents",
                value: function () {
                  var t = this;
                  (this.wc = this.register(this.opts)),
                    this.wc.on("connect", function (e) {
                      var n, r;
                      e
                        ? t.events.emit("error", e)
                        : ((t.accounts =
                            (null === (n = t.wc) || void 0 === n
                              ? void 0
                              : n.accounts) || []),
                          (t.chainId =
                            (null === (r = t.wc) || void 0 === r
                              ? void 0
                              : r.chainId) || t.chainId),
                          t.onOpen());
                    }),
                    this.wc.on("disconnect", function (e) {
                      e ? t.events.emit("error", e) : t.onClose();
                    }),
                    this.wc.on("modal_closed", function () {
                      t.events.emit("error", new Error("User closed modal"));
                    }),
                    this.wc.on("session_update", function (e, n) {
                      var r = n.params[0],
                        i = r.accounts,
                        o = r.chainId;
                      (!t.accounts || (i && t.accounts !== i)) &&
                        ((t.accounts = i), t.events.emit("accountsChanged", i)),
                        (!t.chainId || (o && t.chainId !== o)) &&
                          ((t.chainId = o), t.events.emit("chainChanged", o));
                    });
                },
              },
              {
                key: "sendPayload",
                value: (function () {
                  var t = Object(a.a)(
                    o.a.mark(function t(e) {
                      var n;
                      return o.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (this.wc = this.register(this.opts)),
                                  (t.prev = 1),
                                  (t.next = 4),
                                  this.wc.unsafeSend(e)
                                );
                              case 4:
                                return (
                                  (n = t.sent),
                                  t.abrupt("return", this.sanitizeResponse(n))
                                );
                              case 8:
                                return (
                                  (t.prev = 8),
                                  (t.t0 = t.catch(1)),
                                  t.abrupt(
                                    "return",
                                    this.onError(e, t.t0.message)
                                  )
                                );
                              case 11:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[1, 8]]
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "sanitizeResponse",
                value: function (t) {
                  return "undefined" !== typeof t.error &&
                    "undefined" === typeof t.error.code
                    ? Object(p.formatJsonRpcError)(t.id, t.error.message)
                    : t;
                },
              },
            ]),
            n
          );
        })(n(952).IJsonRpcConnection),
        Z = (function () {
          function t(e) {
            Object(s.a)(this, t),
              (this.events = new l.a()),
              (this.rpc = {
                infuraId: null === e || void 0 === e ? void 0 : e.infuraId,
                custom: null === e || void 0 === e ? void 0 : e.rpc,
              }),
              (this.signer = new m(new V(e)));
            var n =
              this.signer.connection.chainId ||
              (null === e || void 0 === e ? void 0 : e.chainId) ||
              1;
            (this.http = this.setHttpProvider(n)),
              this.registerEventListeners();
          }
          return (
            Object(u.a)(t, [
              {
                key: "connected",
                get: function () {
                  return this.signer.connection.connected;
                },
              },
              {
                key: "connector",
                get: function () {
                  return this.signer.connection.connector;
                },
              },
              {
                key: "accounts",
                get: function () {
                  return this.signer.connection.accounts;
                },
              },
              {
                key: "chainId",
                get: function () {
                  return this.signer.connection.chainId;
                },
              },
              {
                key: "rpcUrl",
                get: function () {
                  var t;
                  return (
                    (null === (t = this.http) || void 0 === t
                      ? void 0
                      : t.connection
                    ).url || ""
                  );
                },
              },
              {
                key: "request",
                value: (function () {
                  var t = Object(a.a)(
                    o.a.mark(function t(e) {
                      return o.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                (t.t0 = e.method),
                                  (t.next =
                                    "eth_requestAccounts" === t.t0
                                      ? 3
                                      : "eth_accounts" === t.t0
                                      ? 6
                                      : "eth_chainId" === t.t0
                                      ? 7
                                      : 8);
                                break;
                              case 3:
                                return (t.next = 5), this.connect();
                              case 5:
                              case 6:
                                return t.abrupt(
                                  "return",
                                  this.signer.connection.accounts
                                );
                              case 7:
                                return t.abrupt(
                                  "return",
                                  this.signer.connection.chainId
                                );
                              case 8:
                                return t.abrupt("break", 9);
                              case 9:
                                if (!b.D.includes(e.method)) {
                                  t.next = 11;
                                  break;
                                }
                                return t.abrupt(
                                  "return",
                                  this.signer.request(e)
                                );
                              case 11:
                                if ("undefined" !== typeof this.http) {
                                  t.next = 13;
                                  break;
                                }
                                throw new Error(
                                  "Cannot request JSON-RPC method (".concat(
                                    e.method,
                                    ") without provided rpc url"
                                  )
                                );
                              case 13:
                                return t.abrupt("return", this.http.request(e));
                              case 14:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "enable",
                value: (function () {
                  var t = Object(a.a)(
                    o.a.mark(function t() {
                      var e;
                      return o.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.next = 2),
                                  this.request({
                                    method: "eth_requestAccounts",
                                  })
                                );
                              case 2:
                                return (e = t.sent), t.abrupt("return", e);
                              case 4:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "connect",
                value: (function () {
                  var t = Object(a.a)(
                    o.a.mark(function t() {
                      return o.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (this.signer.connection.connected) {
                                  t.next = 3;
                                  break;
                                }
                                return (t.next = 3), this.signer.connect();
                              case 3:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "disconnect",
                value: (function () {
                  var t = Object(a.a)(
                    o.a.mark(function t() {
                      return o.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (!this.signer.connection.connected) {
                                  t.next = 3;
                                  break;
                                }
                                return (t.next = 3), this.signer.disconnect();
                              case 3:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "on",
                value: function (t, e) {
                  this.events.on(t, e);
                },
              },
              {
                key: "once",
                value: function (t, e) {
                  this.events.once(t, e);
                },
              },
              {
                key: "removeListener",
                value: function (t, e) {
                  this.events.removeListener(t, e);
                },
              },
              {
                key: "off",
                value: function (t, e) {
                  this.events.off(t, e);
                },
              },
              {
                key: "isWalletConnect",
                get: function () {
                  return !0;
                },
              },
              {
                key: "registerEventListeners",
                value: function () {
                  var t = this;
                  this.signer.connection.on("accountsChanged", function (e) {
                    t.events.emit("accountsChanged", e);
                  }),
                    this.signer.connection.on("chainChanged", function (e) {
                      (t.http = t.setHttpProvider(e)),
                        t.events.emit("chainChanged", e);
                    }),
                    this.signer.on("disconnect", function () {
                      t.events.emit("disconnect");
                    });
                },
              },
              {
                key: "setHttpProvider",
                value: function (t) {
                  var e = Object(b.m)(t, this.rpc);
                  if ("undefined" !== typeof e) return new m(new w(e));
                },
              },
            ]),
            t
          );
        })();
      e.default = Z;
    },
    900: function (t, e, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, n, r) {
                void 0 === r && (r = n),
                  Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: function () {
                      return e[n];
                    },
                  });
              }
            : function (t, e, n, r) {
                void 0 === r && (r = n), (t[r] = e[n]);
              }),
        i =
          (this && this.__exportStar) ||
          function (t, e) {
            for (var n in t)
              "default" === n || e.hasOwnProperty(n) || r(e, t, n);
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        i(n(1057), e),
        i(n(1058), e);
    },
    901: function (t, e) {
      var n,
        r = [
          0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581,
          655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706,
          1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196,
          3362, 3532, 3706,
        ];
      (e.getSymbolSize = function (t) {
        if (!t) throw new Error('"version" cannot be null or undefined');
        if (t < 1 || t > 40)
          throw new Error('"version" should be in range from 1 to 40');
        return 4 * t + 17;
      }),
        (e.getSymbolTotalCodewords = function (t) {
          return r[t];
        }),
        (e.getBCHDigit = function (t) {
          for (var e = 0; 0 !== t; ) e++, (t >>>= 1);
          return e;
        }),
        (e.setToSJISFunction = function (t) {
          if ("function" !== typeof t)
            throw new Error('"toSJISFunc" is not a valid function.');
          n = t;
        }),
        (e.isKanjiModeEnabled = function () {
          return "undefined" !== typeof n;
        }),
        (e.toSJIS = function (t) {
          return n(t);
        });
    },
    902: function (t, e, n) {
      var r = n(1016),
        i = n(1017);
      (e.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }),
        (e.ALPHANUMERIC = { id: "Alphanumeric", bit: 2, ccBits: [9, 11, 13] }),
        (e.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }),
        (e.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }),
        (e.MIXED = { bit: -1 }),
        (e.getCharCountIndicator = function (t, e) {
          if (!t.ccBits) throw new Error("Invalid mode: " + t);
          if (!r.isValid(e)) throw new Error("Invalid version: " + e);
          return e >= 1 && e < 10
            ? t.ccBits[0]
            : e < 27
            ? t.ccBits[1]
            : t.ccBits[2];
        }),
        (e.getBestModeForData = function (t) {
          return i.testNumeric(t)
            ? e.NUMERIC
            : i.testAlphanumeric(t)
            ? e.ALPHANUMERIC
            : i.testKanji(t)
            ? e.KANJI
            : e.BYTE;
        }),
        (e.toString = function (t) {
          if (t && t.id) return t.id;
          throw new Error("Invalid mode");
        }),
        (e.isValid = function (t) {
          return t && t.bit && t.ccBits;
        }),
        (e.from = function (t, n) {
          if (e.isValid(t)) return t;
          try {
            return (function (t) {
              if ("string" !== typeof t)
                throw new Error("Param is not a string");
              switch (t.toLowerCase()) {
                case "numeric":
                  return e.NUMERIC;
                case "alphanumeric":
                  return e.ALPHANUMERIC;
                case "kanji":
                  return e.KANJI;
                case "byte":
                  return e.BYTE;
                default:
                  throw new Error("Unknown mode: " + t);
              }
            })(t);
          } catch (r) {
            return n;
          }
        });
    },
    909: function (t, e, n) {
      "use strict";
      var r = n(956);
      o.TYPED_ARRAY_SUPPORT = (function () {
        try {
          var t = new Uint8Array(1);
          return (
            (t.__proto__ = {
              __proto__: Uint8Array.prototype,
              foo: function () {
                return 42;
              },
            }),
            42 === t.foo()
          );
        } catch (e) {
          return !1;
        }
      })();
      var i = o.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      function o(t, e, n) {
        return o.TYPED_ARRAY_SUPPORT || this instanceof o
          ? "number" === typeof t
            ? u(this, t)
            : (function (t, e, n, r) {
                if ("number" === typeof e)
                  throw new TypeError('"value" argument must not be a number');
                if (
                  "undefined" !== typeof ArrayBuffer &&
                  e instanceof ArrayBuffer
                )
                  return (function (t, e, n, r) {
                    if (n < 0 || e.byteLength < n)
                      throw new RangeError("'offset' is out of bounds");
                    if (e.byteLength < n + (r || 0))
                      throw new RangeError("'length' is out of bounds");
                    var i;
                    i =
                      void 0 === n && void 0 === r
                        ? new Uint8Array(e)
                        : void 0 === r
                        ? new Uint8Array(e, n)
                        : new Uint8Array(e, n, r);
                    o.TYPED_ARRAY_SUPPORT
                      ? (i.__proto__ = o.prototype)
                      : (i = c(t, i));
                    return i;
                  })(t, e, n, r);
                if ("string" === typeof e)
                  return (function (t, e) {
                    var n = 0 | h(e),
                      r = s(t, n),
                      i = r.write(e);
                    i !== n && (r = r.slice(0, i));
                    return r;
                  })(t, e);
                return (function (t, e) {
                  if (o.isBuffer(e)) {
                    var n = 0 | a(e.length),
                      r = s(t, n);
                    return 0 === r.length || e.copy(r, 0, 0, n), r;
                  }
                  if (e) {
                    if (
                      ("undefined" !== typeof ArrayBuffer &&
                        e.buffer instanceof ArrayBuffer) ||
                      "length" in e
                    )
                      return "number" !== typeof e.length ||
                        (i = e.length) !== i
                        ? s(t, 0)
                        : c(t, e);
                    if ("Buffer" === e.type && Array.isArray(e.data))
                      return c(t, e.data);
                  }
                  var i;
                  throw new TypeError(
                    "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
                  );
                })(t, e);
              })(this, t, e, n)
          : new o(t, e, n);
      }
      function a(t) {
        if (t >= i)
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              i.toString(16) +
              " bytes"
          );
        return 0 | t;
      }
      function s(t, e) {
        var n;
        return (
          o.TYPED_ARRAY_SUPPORT
            ? ((n = new Uint8Array(e)).__proto__ = o.prototype)
            : (null === (n = t) && (n = new o(e)), (n.length = e)),
          n
        );
      }
      function u(t, e) {
        var n = s(t, e < 0 ? 0 : 0 | a(e));
        if (!o.TYPED_ARRAY_SUPPORT) for (var r = 0; r < e; ++r) n[r] = 0;
        return n;
      }
      function c(t, e) {
        for (
          var n = e.length < 0 ? 0 : 0 | a(e.length), r = s(t, n), i = 0;
          i < n;
          i += 1
        )
          r[i] = 255 & e[i];
        return r;
      }
      function l(t, e) {
        var n;
        e = e || 1 / 0;
        for (var r = t.length, i = null, o = [], a = 0; a < r; ++a) {
          if ((n = t.charCodeAt(a)) > 55295 && n < 57344) {
            if (!i) {
              if (n > 56319) {
                (e -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              if (a + 1 === r) {
                (e -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              i = n;
              continue;
            }
            if (n < 56320) {
              (e -= 3) > -1 && o.push(239, 191, 189), (i = n);
              continue;
            }
            n = 65536 + (((i - 55296) << 10) | (n - 56320));
          } else i && (e -= 3) > -1 && o.push(239, 191, 189);
          if (((i = null), n < 128)) {
            if ((e -= 1) < 0) break;
            o.push(n);
          } else if (n < 2048) {
            if ((e -= 2) < 0) break;
            o.push((n >> 6) | 192, (63 & n) | 128);
          } else if (n < 65536) {
            if ((e -= 3) < 0) break;
            o.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
          } else {
            if (!(n < 1114112)) throw new Error("Invalid code point");
            if ((e -= 4) < 0) break;
            o.push(
              (n >> 18) | 240,
              ((n >> 12) & 63) | 128,
              ((n >> 6) & 63) | 128,
              (63 & n) | 128
            );
          }
        }
        return o;
      }
      function h(t) {
        return o.isBuffer(t)
          ? t.length
          : "undefined" !== typeof ArrayBuffer &&
            "function" === typeof ArrayBuffer.isView &&
            (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)
          ? t.byteLength
          : ("string" !== typeof t && (t = "" + t),
            0 === t.length ? 0 : l(t).length);
      }
      o.TYPED_ARRAY_SUPPORT &&
        ((o.prototype.__proto__ = Uint8Array.prototype),
        (o.__proto__ = Uint8Array),
        "undefined" !== typeof Symbol &&
          Symbol.species &&
          o[Symbol.species] === o &&
          Object.defineProperty(o, Symbol.species, {
            value: null,
            configurable: !0,
            enumerable: !1,
            writable: !1,
          })),
        (o.prototype.write = function (t, e, n) {
          void 0 === e || (void 0 === n && "string" === typeof e)
            ? ((n = this.length), (e = 0))
            : isFinite(e) && ((e |= 0), isFinite(n) ? (n |= 0) : (n = void 0));
          var r = this.length - e;
          if (
            ((void 0 === n || n > r) && (n = r),
            (t.length > 0 && (n < 0 || e < 0)) || e > this.length)
          )
            throw new RangeError("Attempt to write outside buffer bounds");
          return (function (t, e, n, r) {
            return (function (t, e, n, r) {
              for (
                var i = 0;
                i < r && !(i + n >= e.length || i >= t.length);
                ++i
              )
                e[i + n] = t[i];
              return i;
            })(l(e, t.length - n), t, n, r);
          })(this, t, e, n);
        }),
        (o.prototype.slice = function (t, e) {
          var n,
            r = this.length;
          if (
            ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
            (e = void 0 === e ? r : ~~e) < 0
              ? (e += r) < 0 && (e = 0)
              : e > r && (e = r),
            e < t && (e = t),
            o.TYPED_ARRAY_SUPPORT)
          )
            (n = this.subarray(t, e)).__proto__ = o.prototype;
          else {
            var i = e - t;
            n = new o(i, void 0);
            for (var a = 0; a < i; ++a) n[a] = this[a + t];
          }
          return n;
        }),
        (o.prototype.copy = function (t, e, n, r) {
          if (
            (n || (n = 0),
            r || 0 === r || (r = this.length),
            e >= t.length && (e = t.length),
            e || (e = 0),
            r > 0 && r < n && (r = n),
            r === n)
          )
            return 0;
          if (0 === t.length || 0 === this.length) return 0;
          if (e < 0) throw new RangeError("targetStart out of bounds");
          if (n < 0 || n >= this.length)
            throw new RangeError("sourceStart out of bounds");
          if (r < 0) throw new RangeError("sourceEnd out of bounds");
          r > this.length && (r = this.length),
            t.length - e < r - n && (r = t.length - e + n);
          var i,
            a = r - n;
          if (this === t && n < e && e < r)
            for (i = a - 1; i >= 0; --i) t[i + e] = this[i + n];
          else if (a < 1e3 || !o.TYPED_ARRAY_SUPPORT)
            for (i = 0; i < a; ++i) t[i + e] = this[i + n];
          else Uint8Array.prototype.set.call(t, this.subarray(n, n + a), e);
          return a;
        }),
        (o.prototype.fill = function (t, e, n) {
          if ("string" === typeof t) {
            if (
              ("string" === typeof e
                ? ((e = 0), (n = this.length))
                : "string" === typeof n && (n = this.length),
              1 === t.length)
            ) {
              var r = t.charCodeAt(0);
              r < 256 && (t = r);
            }
          } else "number" === typeof t && (t &= 255);
          if (e < 0 || this.length < e || this.length < n)
            throw new RangeError("Out of range index");
          if (n <= e) return this;
          var i;
          if (
            ((e >>>= 0),
            (n = void 0 === n ? this.length : n >>> 0),
            t || (t = 0),
            "number" === typeof t)
          )
            for (i = e; i < n; ++i) this[i] = t;
          else {
            var a = o.isBuffer(t) ? t : new o(t),
              s = a.length;
            for (i = 0; i < n - e; ++i) this[i + e] = a[i % s];
          }
          return this;
        }),
        (o.concat = function (t, e) {
          if (!r(t))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === t.length) return s(null, 0);
          var n;
          if (void 0 === e)
            for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
          var i = u(null, e),
            a = 0;
          for (n = 0; n < t.length; ++n) {
            var c = t[n];
            if (!o.isBuffer(c))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            c.copy(i, a), (a += c.length);
          }
          return i;
        }),
        (o.byteLength = h),
        (o.prototype._isBuffer = !0),
        (o.isBuffer = function (t) {
          return !(null == t || !t._isBuffer);
        }),
        (t.exports.alloc = function (t) {
          var e = new o(t);
          return e.fill(0), e;
        }),
        (t.exports.from = function (t) {
          return new o(t);
        });
    },
    918: function (t, e, n) {
      "use strict";
      n.d(e, "g", function () {
        return r.detectEnv;
      }),
        n.d(e, "s", function () {
          return r.isMobile;
        }),
        n.d(e, "n", function () {
          return r.isBrowser;
        }),
        n.d(e, "k", function () {
          return r.getLocation;
        }),
        n.d(e, "i", function () {
          return r.getClientMeta;
        }),
        n.d(e, "C", function () {
          return r.setLocal;
        }),
        n.d(e, "j", function () {
          return r.getLocal;
        }),
        n.d(e, "B", function () {
          return r.removeLocal;
        }),
        n.d(e, "w", function () {
          return r.mobileLinkChoiceKey;
        }),
        n.d(e, "D", function () {
          return o;
        }),
        n.d(e, "b", function () {
          return l;
        }),
        n.d(e, "c", function () {
          return h;
        }),
        n.d(e, "d", function () {
          return f;
        }),
        n.d(e, "e", function () {
          return d;
        }),
        n.d(e, "f", function () {
          return p;
        }),
        n.d(e, "x", function () {
          return R;
        }),
        n.d(e, "y", function () {
          return S;
        }),
        n.d(e, "A", function () {
          return g;
        }),
        n.d(e, "E", function () {
          return _;
        }),
        n.d(e, "m", function () {
          return y;
        }),
        n.d(e, "h", function () {
          return T;
        }),
        n.d(e, "v", function () {
          return P;
        }),
        n.d(e, "z", function () {
          return L;
        }),
        n.d(e, "l", function () {
          return j;
        }),
        n.d(e, "a", function () {
          return A;
        }),
        n.d(e, "p", function () {
          return b;
        }),
        n.d(e, "r", function () {
          return k;
        }),
        n.d(e, "q", function () {
          return M;
        }),
        n.d(e, "o", function () {
          return x;
        }),
        n.d(e, "t", function () {
          return E;
        }),
        n.d(e, "u", function () {
          return O;
        });
      var r = n(991),
        i = [
          "session_request",
          "session_update",
          "exchange_key",
          "connect",
          "disconnect",
          "display_uri",
          "modal_closed",
          "transport_open",
          "transport_close",
          "transport_error",
        ],
        o = [
          "eth_sendTransaction",
          "eth_signTransaction",
          "eth_sign",
          "eth_signTypedData",
          "eth_signTypedData_v1",
          "eth_signTypedData_v2",
          "eth_signTypedData_v3",
          "eth_signTypedData_v4",
          "personal_sign",
          "wallet_addEthereumChain",
          "wallet_switchEthereumChain",
          "wallet_getPermissions",
          "wallet_requestPermissions",
          "wallet_registerOnboarding",
          "wallet_watchAsset",
          "wallet_scanQRCode",
        ],
        a = {
          1: "mainnet",
          3: "ropsten",
          4: "rinkeby",
          5: "goerli",
          42: "kovan",
        },
        s = n(1061),
        u = n.n(s),
        c = n(919);
      function l(t) {
        return c.arrayToBuffer(new Uint8Array(t));
      }
      function h(t, e) {
        return c.arrayToHex(new Uint8Array(t), !e);
      }
      function f(t) {
        return c.bufferToArray(t).buffer;
      }
      function d(t) {
        return c.hexToArray(t).buffer;
      }
      function p(t, e) {
        var n = c.removeHexPrefix(c.sanitizeHex(new u.a(t).toString(16)));
        return e ? n : c.addHexPrefix(n);
      }
      var m = n(199);
      function v(t) {
        return c.sanitizeHex(t);
      }
      var g = n(932).payloadId;
      function _() {
        return (function (t, e) {
          for (
            e = t = "";
            t++ < 36;
            e +=
              (51 * t) & 52
                ? (15 ^ t
                    ? 8 ^ (Math.random() * (20 ^ t ? 16 : 4))
                    : 4
                  ).toString(16)
                : "-"
          );
          return e;
        })();
      }
      function y(t, e) {
        var n,
          r = (function (t, e) {
            var n,
              r = a[t];
            return (
              r && (n = "https://".concat(r, ".infura.io/v3/").concat(e)), n
            );
          })(t, e.infuraId);
        return e.custom && e.custom[t] ? (n = e.custom[t]) : r && (n = r), n;
      }
      function w(t, e) {
        return c.isHexString(t, e);
      }
      function b(t) {
        return "undefined" !== typeof t.method;
      }
      function k(t) {
        return "undefined" !== typeof t.result;
      }
      function M(t) {
        return "undefined" !== typeof t.error;
      }
      function x(t) {
        return "undefined" !== typeof t.event;
      }
      function E(t) {
        return i.includes(t) || t.startsWith("wc_");
      }
      function O(t) {
        return !!t.method.startsWith("wc_") || !o.includes(t.method);
      }
      function C(t) {
        t = Object(c.removeHexPrefix)(t.toLowerCase());
        for (
          var e,
            n = Object(c.removeHexPrefix)(
              Object(m.keccak_256)(((e = t), c.utf8ToBuffer(e)))
            ),
            r = "",
            i = 0;
          i < t.length;
          i++
        )
          parseInt(n[i], 16) > 7 ? (r += t[i].toUpperCase()) : (r += t[i]);
        return Object(c.addHexPrefix)(r);
      }
      function R(t) {
        var e, n, r;
        return (
          (r = t) &&
            r.length &&
            !w(t[0]) &&
            (t[0] = ((e = t[0]), c.utf8ToHex(e, !n))),
          t
        );
      }
      function S(t) {
        if ("undefined" !== typeof t.type && "0" !== t.type) return t;
        if (
          "undefined" === typeof t.from ||
          !(e = t.from) ||
          "0x" !== e.toLowerCase().substring(0, 2) ||
          !/^(0x)?[0-9a-f]{40}$/i.test(e) ||
          (!/^(0x)?[0-9a-f]{40}$/.test(e) &&
            !/^(0x)?[0-9A-F]{40}$/.test(e) &&
            e !== C(e))
        )
          throw new Error(
            "Transaction object must include a valid 'from' value."
          );
        var e;
        function n(t) {
          var e,
            n = t;
          return (
            ("number" === typeof t ||
              ("string" === typeof t &&
                !(function (t) {
                  return "" === t || ("string" === typeof t && "" === t.trim());
                })(t))) &&
              (w(t) ? "string" === typeof t && (n = v(t)) : (n = p(t))),
            "string" === typeof n &&
              ((e = n), (n = c.removeHexLeadingZeros(c.addHexPrefix(e)))),
            n
          );
        }
        var r = {
            from: v(t.from),
            to: "undefined" === typeof t.to ? "" : v(t.to),
            gasPrice: "undefined" === typeof t.gasPrice ? "" : n(t.gasPrice),
            gas:
              "undefined" === typeof t.gas
                ? "undefined" === typeof t.gasLimit
                  ? ""
                  : n(t.gasLimit)
                : n(t.gas),
            value: "undefined" === typeof t.value ? "" : n(t.value),
            nonce: "undefined" === typeof t.nonce ? "" : n(t.nonce),
            data: "undefined" === typeof t.data ? "" : v(t.data) || "0x",
          },
          i = ["gasPrice", "gas", "value", "nonce"];
        return (
          Object.keys(r).forEach(function (t) {
            !r[t].trim().length && i.includes(t) && delete r[t];
          }),
          r
        );
      }
      n(7), n(27);
      function T(t) {
        var e = t.message || "Failed or Rejected Request",
          n = -32e3;
        if (t && !t.code)
          switch (e) {
            case "Parse error":
              n = -32700;
              break;
            case "Invalid request":
              n = -32600;
              break;
            case "Method not found":
              n = -32601;
              break;
            case "Invalid params":
              n = -32602;
              break;
            case "Internal error":
              n = -32603;
              break;
            default:
              n = -32e3;
          }
        return { code: n, message: e };
      }
      var I = n(1064);
      function j(t) {
        var e = -1 !== t.indexOf("?") ? t.indexOf("?") : void 0;
        return "undefined" !== typeof e ? t.substr(e) : "";
      }
      function A(t, e) {
        var n = N(t);
        return (t = (function (t) {
          return I.stringify(t);
        })((n = Object.assign(Object.assign({}, n), e))));
      }
      function N(t) {
        return I.parse(t);
      }
      function P(t) {
        return "undefined" !== typeof t.bridge;
      }
      function L(t) {
        var e = t.indexOf(":"),
          n = -1 !== t.indexOf("?") ? t.indexOf("?") : void 0,
          r = t.substring(0, e);
        var i = (function (t) {
          var e = t.split("@");
          return { handshakeTopic: e[0], version: parseInt(e[1], 10) };
        })(t.substring(e + 1, n));
        var o = (function (t) {
          var e = N(t);
          return { key: e.key || "", bridge: e.bridge || "" };
        })("undefined" !== typeof n ? t.substr(n) : "");
        return Object.assign(Object.assign({ protocol: r }, i), o);
      }
    },
    919: function (t, e, n) {
      "use strict";
      (function (t) {
        var r = n(131),
          i =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.removeHexLeadingZeros =
            e.sanitizeHex =
            e.addHexPrefix =
            e.removeHexPrefix =
            e.padRight =
            e.padLeft =
            e.sanitizeBytes =
            e.swapHex =
            e.swapBytes =
            e.splitBytes =
            e.calcByteLength =
            e.trimRight =
            e.trimLeft =
            e.concatArrays =
            e.concatBuffers =
            e.getEncoding =
            e.getType =
            e.isArrayBuffer =
            e.isTypedArray =
            e.isBuffer =
            e.isHexString =
            e.isBinaryString =
            e.binaryToNumber =
            e.binaryToUtf8 =
            e.binaryToHex =
            e.binaryToArray =
            e.binaryToBuffer =
            e.numberToBinary =
            e.numberToUtf8 =
            e.numberToHex =
            e.numberToArray =
            e.numberToBuffer =
            e.utf8ToBinary =
            e.utf8ToNumber =
            e.utf8ToHex =
            e.utf8ToArray =
            e.utf8ToBuffer =
            e.hexToBinary =
            e.hexToNumber =
            e.hexToUtf8 =
            e.hexToArray =
            e.hexToBuffer =
            e.arrayToBinary =
            e.arrayToNumber =
            e.arrayToUtf8 =
            e.arrayToHex =
            e.arrayToBuffer =
            e.bufferToBinary =
            e.bufferToNumber =
            e.bufferToUtf8 =
            e.bufferToHex =
            e.bufferToArray =
              void 0);
        var o = i(n(1006)),
          a = i(n(1063)),
          s = "hex",
          u = "utf8",
          c = "0";
        function l(t) {
          return new Uint8Array(t);
        }
        function h(t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = t.toString(s);
          return e ? U(n) : n;
        }
        function f(t) {
          return t.toString(u);
        }
        function d(t) {
          return t.readUIntBE(0, t.length);
        }
        function p(t) {
          return a.default(t);
        }
        function m(t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return h(p(t), e);
        }
        function v(t) {
          return f(p(t));
        }
        function g(t) {
          return d(p(t));
        }
        function _(t) {
          return Array.from(t).map(x).join("");
        }
        function y(e) {
          return t.from(q(e), s);
        }
        function w(t) {
          return l(y(t));
        }
        function b(t) {
          return _(w(t));
        }
        function k(e) {
          return t.from(e, u);
        }
        function M(t) {
          return l(k(t));
        }
        function x(t) {
          return L((t >>> 0).toString(2));
        }
        function E(t) {
          return p(O(t));
        }
        function O(t) {
          return new Uint8Array(
            N(t).map(function (t) {
              return parseInt(t, 2);
            })
          );
        }
        function C(t, e) {
          return m(O(t), e);
        }
        function R(t) {
          return (
            !("string" !== typeof t || !new RegExp(/^[01]+$/).test(t)) &&
            t.length % 8 === 0
          );
        }
        function S(t, e) {
          return (
            !("string" !== typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) &&
            (!e || t.length === 2 + 2 * e)
          );
        }
        function T(e) {
          return t.isBuffer(e);
        }
        function I(t) {
          return o.default.strict(t) && !T(t);
        }
        function j(t) {
          return !I(t) && !T(t) && "undefined" !== typeof t.byteLength;
        }
        function A(t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 8,
            n = t % e;
          return n ? ((t - n) / e) * e + e : t;
        }
        function N(t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 8,
            n = L(t).match(new RegExp(".{".concat(e, "}"), "gi"));
          return Array.from(n || []);
        }
        function P(t) {
          return N(t).map(H).join("");
        }
        function L(t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 8,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : c;
          return B(t, A(t.length, e), n);
        }
        function B(t, e) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c;
          return J(t, e, !0, n);
        }
        function q(t) {
          return t.replace(/^0x/, "");
        }
        function U(t) {
          return t.startsWith("0x") ? t : "0x".concat(t);
        }
        function H(t) {
          return t.split("").reverse().join("");
        }
        function J(t, e, n) {
          var r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : c,
            i = e - t.length,
            o = t;
          if (i > 0) {
            var a = r.repeat(i);
            o = n ? a + t : t + a;
          }
          return o;
        }
        (e.bufferToArray = l),
          (e.bufferToHex = h),
          (e.bufferToUtf8 = f),
          (e.bufferToNumber = d),
          (e.bufferToBinary = function (t) {
            return _(l(t));
          }),
          (e.arrayToBuffer = p),
          (e.arrayToHex = m),
          (e.arrayToUtf8 = v),
          (e.arrayToNumber = g),
          (e.arrayToBinary = _),
          (e.hexToBuffer = y),
          (e.hexToArray = w),
          (e.hexToUtf8 = function (t) {
            return f(y(t));
          }),
          (e.hexToNumber = function (t) {
            return g(w(t));
          }),
          (e.hexToBinary = b),
          (e.utf8ToBuffer = k),
          (e.utf8ToArray = M),
          (e.utf8ToHex = function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return h(k(t), e);
          }),
          (e.utf8ToNumber = function (t) {
            var e = parseInt(t, 10);
            return (
              (function (t, e) {
                if (!t) throw new Error(e);
              })(
                !(function (t) {
                  return "undefined" === typeof t;
                })(e),
                "Number can only safely store up to 53 bits"
              ),
              e
            );
          }),
          (e.utf8ToBinary = function (t) {
            return _(M(t));
          }),
          (e.numberToBuffer = function (t) {
            return E(x(t));
          }),
          (e.numberToArray = function (t) {
            return O(x(t));
          }),
          (e.numberToHex = function (t, e) {
            return C(x(t), e);
          }),
          (e.numberToUtf8 = function (t) {
            return "".concat(t);
          }),
          (e.numberToBinary = x),
          (e.binaryToBuffer = E),
          (e.binaryToArray = O),
          (e.binaryToHex = C),
          (e.binaryToUtf8 = function (t) {
            return v(O(t));
          }),
          (e.binaryToNumber = function (t) {
            return g(O(t));
          }),
          (e.isBinaryString = R),
          (e.isHexString = S),
          (e.isBuffer = T),
          (e.isTypedArray = I),
          (e.isArrayBuffer = j),
          (e.getType = function (t) {
            return T(t)
              ? "buffer"
              : I(t)
              ? "typed-array"
              : j(t)
              ? "array-buffer"
              : Array.isArray(t)
              ? "array"
              : typeof t;
          }),
          (e.getEncoding = function (t) {
            return R(t) ? "binary" : S(t) ? s : u;
          }),
          (e.concatBuffers = function () {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            var i = t.concat(n);
            return i;
          }),
          (e.concatArrays = function () {
            for (
              var t = [], e = arguments.length, n = new Array(e), i = 0;
              i < e;
              i++
            )
              n[i] = arguments[i];
            return (
              n.forEach(function (e) {
                return (t = t.concat(Array.from(e)));
              }),
              new Uint8Array(r(t))
            );
          }),
          (e.trimLeft = function (t, e) {
            var n = t.length - e;
            return n > 0 && (t = t.slice(n)), t;
          }),
          (e.trimRight = function (t, e) {
            return t.slice(0, e);
          }),
          (e.calcByteLength = A),
          (e.splitBytes = N),
          (e.swapBytes = P),
          (e.swapHex = function (t) {
            return C(P(b(t)));
          }),
          (e.sanitizeBytes = L),
          (e.padLeft = B),
          (e.padRight = function (t, e) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : c;
            return J(t, e, !1, n);
          }),
          (e.removeHexPrefix = q),
          (e.addHexPrefix = U),
          (e.sanitizeHex = function (t) {
            return (t = L((t = q(t)), 2)) && (t = U(t)), t;
          }),
          (e.removeHexLeadingZeros = function (t) {
            var e = t.startsWith("0x");
            return (
              (t = (t = q(t)).startsWith(c) ? t.substring(1) : t), e ? U(t) : t
            );
          });
      }.call(this, n(232).Buffer));
    },
    932: function (t, e, n) {
      "use strict";
      n(933);
      var r = n(951);
      n.d(e, "parseConnectionError", function () {
        return r.d;
      });
      var i = n(995);
      n.o(i, "IJsonRpcProvider") &&
        n.d(e, "IJsonRpcProvider", function () {
          return i.IJsonRpcProvider;
        }),
        n.o(i, "formatJsonRpcError") &&
          n.d(e, "formatJsonRpcError", function () {
            return i.formatJsonRpcError;
          }),
        n.o(i, "formatJsonRpcRequest") &&
          n.d(e, "formatJsonRpcRequest", function () {
            return i.formatJsonRpcRequest;
          }),
        n.o(i, "isHttpUrl") &&
          n.d(e, "isHttpUrl", function () {
            return i.isHttpUrl;
          }),
        n.o(i, "isJsonRpcError") &&
          n.d(e, "isJsonRpcError", function () {
            return i.isJsonRpcError;
          }),
        n.o(i, "isJsonRpcResponse") &&
          n.d(e, "isJsonRpcResponse", function () {
            return i.isJsonRpcResponse;
          }),
        n.o(i, "payloadId") &&
          n.d(e, "payloadId", function () {
            return i.payloadId;
          });
      var o = n(996);
      n.d(e, "formatJsonRpcError", function () {
        return o.a;
      }),
        n.d(e, "formatJsonRpcRequest", function () {
          return o.b;
        }),
        n.d(e, "payloadId", function () {
          return o.c;
        });
      n(997);
      var a = n(998);
      n.o(a, "IJsonRpcProvider") &&
        n.d(e, "IJsonRpcProvider", function () {
          return a.IJsonRpcProvider;
        }),
        n.o(a, "isHttpUrl") &&
          n.d(e, "isHttpUrl", function () {
            return a.isHttpUrl;
          }),
        n.o(a, "isJsonRpcError") &&
          n.d(e, "isJsonRpcError", function () {
            return a.isJsonRpcError;
          }),
        n.o(a, "isJsonRpcResponse") &&
          n.d(e, "isJsonRpcResponse", function () {
            return a.isJsonRpcResponse;
          });
      var s = n(1002);
      n.d(e, "isHttpUrl", function () {
        return s.a;
      });
      var u = n(1003);
      n.d(e, "isJsonRpcError", function () {
        return u.a;
      }),
        n.d(e, "isJsonRpcResponse", function () {
          return u.b;
        });
    },
    933: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      }),
        n.d(e, "c", function () {
          return a;
        }),
        n.d(e, "b", function () {
          return s;
        }),
        n.d(e, "d", function () {
          return u;
        }),
        n.d(e, "e", function () {
          return c;
        });
      var r,
        i = n(10),
        o = "INTERNAL_ERROR",
        a = "SERVER_ERROR",
        s = [-32700, -32600, -32601, -32602, -32603],
        u = [-32e3, -32099],
        c =
          ((r = {}),
          Object(i.a)(r, "PARSE_ERROR", {
            code: -32700,
            message: "Parse error",
          }),
          Object(i.a)(r, "INVALID_REQUEST", {
            code: -32600,
            message: "Invalid Request",
          }),
          Object(i.a)(r, "METHOD_NOT_FOUND", {
            code: -32601,
            message: "Method not found",
          }),
          Object(i.a)(r, "INVALID_PARAMS", {
            code: -32602,
            message: "Invalid params",
          }),
          Object(i.a)(r, o, { code: -32603, message: "Internal error" }),
          Object(i.a)(r, a, { code: -32e3, message: "Server error" }),
          r);
    },
    951: function (t, e, n) {
      "use strict";
      n.d(e, "c", function () {
        return i;
      }),
        n.d(e, "a", function () {
          return o;
        }),
        n.d(e, "b", function () {
          return a;
        }),
        n.d(e, "d", function () {
          return s;
        });
      var r = n(933);
      function i(t) {
        return r.b.includes(t);
      }
      function o(t) {
        return Object.keys(r.e).includes(t) ? r.e[t] : r.e[r.a];
      }
      function a(t) {
        var e = Object.values(r.e).find(function (e) {
          return e.code === t;
        });
        return e || r.e[r.a];
      }
      function s(t, e, n) {
        return t.message.includes("getaddrinfo ENOTFOUND") ||
          t.message.includes("connect ECONNREFUSED")
          ? new Error("Unavailable ".concat(n, " RPC url at ").concat(e))
          : t;
      }
    },
    952: function (t, e, n) {
      "use strict";
      var r = n(999);
      n.o(r, "IJsonRpcConnection") &&
        n.d(e, "IJsonRpcConnection", function () {
          return r.IJsonRpcConnection;
        }),
        n.o(r, "IJsonRpcProvider") &&
          n.d(e, "IJsonRpcProvider", function () {
            return r.IJsonRpcProvider;
          }),
        n.o(r, "isHttpUrl") &&
          n.d(e, "isHttpUrl", function () {
            return r.isHttpUrl;
          }),
        n.o(r, "isJsonRpcError") &&
          n.d(e, "isJsonRpcError", function () {
            return r.isJsonRpcError;
          }),
        n.o(r, "isJsonRpcResponse") &&
          n.d(e, "isJsonRpcResponse", function () {
            return r.isJsonRpcResponse;
          });
      n(953);
      var i = n(1e3);
      n.d(e, "IJsonRpcConnection", function () {
        return i.a;
      }),
        n.d(e, "IJsonRpcProvider", function () {
          return i.b;
        });
      var o = n(1001);
      n.o(o, "isHttpUrl") &&
        n.d(e, "isHttpUrl", function () {
          return o.isHttpUrl;
        }),
        n.o(o, "isJsonRpcError") &&
          n.d(e, "isJsonRpcError", function () {
            return o.isJsonRpcError;
          }),
        n.o(o, "isJsonRpcResponse") &&
          n.d(e, "isJsonRpcResponse", function () {
            return o.isJsonRpcResponse;
          });
    },
    953: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var r = n(14),
        i = n(13),
        o = Object(r.a)(function t() {
          Object(i.a)(this, t);
        });
    },
    954: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return f;
      }),
        n.d(e, "a", function () {
          return p;
        }),
        n.d(e, "c", function () {
          return v;
        }),
        n.d(e, "d", function () {
          return _;
        }),
        n.d(e, "e", function () {
          return w;
        }),
        n.d(e, "f", function () {
          return k;
        });
      var r = n(7),
        i = n.n(r),
        o = n(27),
        a = n(900),
        s = n(993);
      function u(t) {
        return t === s.a
          ? { length: s.b, name: s.a }
          : { hash: { name: s.f }, name: s.e };
      }
      function c(t) {
        return t === s.a ? [s.d, s.c] : [s.k, s.l];
      }
      function l(t) {
        return h.apply(this, arguments);
      }
      function h() {
        return (
          (h = Object(o.a)(
            i.a.mark(function t(e) {
              var n,
                r = arguments;
              return i.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (n = r.length > 1 && void 0 !== r[1] ? r[1] : s.a),
                        t.abrupt(
                          "return",
                          a
                            .getSubtleCrypto()
                            .importKey("raw", e, u(n), !0, c(n))
                        )
                      );
                    case 2:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )),
          h.apply(this, arguments)
        );
      }
      function f(t, e, n) {
        return d.apply(this, arguments);
      }
      function d() {
        return (d = Object(o.a)(
          i.a.mark(function t(e, n, r) {
            var o, u, c;
            return i.a.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (o = a.getSubtleCrypto()), (t.next = 3), l(n, s.a);
                  case 3:
                    return (
                      (u = t.sent),
                      (t.next = 6),
                      o.encrypt({ iv: e, name: s.a }, u, r)
                    );
                  case 6:
                    return (c = t.sent), t.abrupt("return", new Uint8Array(c));
                  case 8:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function p(t, e, n) {
        return m.apply(this, arguments);
      }
      function m() {
        return (m = Object(o.a)(
          i.a.mark(function t(e, n, r) {
            var o, u, c;
            return i.a.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (o = a.getSubtleCrypto()), (t.next = 3), l(n, s.a);
                  case 3:
                    return (
                      (u = t.sent),
                      (t.next = 6),
                      o.decrypt({ iv: e, name: s.a }, u, r)
                    );
                  case 6:
                    return (c = t.sent), t.abrupt("return", new Uint8Array(c));
                  case 8:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function v(t, e) {
        return g.apply(this, arguments);
      }
      function g() {
        return (g = Object(o.a)(
          i.a.mark(function t(e, n) {
            var r, o, u;
            return i.a.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (r = a.getSubtleCrypto()), (t.next = 3), l(e, s.e);
                  case 3:
                    return (
                      (o = t.sent),
                      (t.next = 6),
                      r.sign({ length: s.g, name: s.e }, o, n)
                    );
                  case 6:
                    return (u = t.sent), t.abrupt("return", new Uint8Array(u));
                  case 8:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function _(t, e) {
        return y.apply(this, arguments);
      }
      function y() {
        return (y = Object(o.a)(
          i.a.mark(function t(e, n) {
            var r, o, u;
            return i.a.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (r = a.getSubtleCrypto()), (t.next = 3), l(e, s.e);
                  case 3:
                    return (
                      (o = t.sent),
                      (t.next = 6),
                      r.sign({ length: s.h, name: s.e }, o, n)
                    );
                  case 6:
                    return (u = t.sent), t.abrupt("return", new Uint8Array(u));
                  case 8:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function w(t) {
        return b.apply(this, arguments);
      }
      function b() {
        return (b = Object(o.a)(
          i.a.mark(function t(e) {
            var n, r;
            return i.a.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (n = a.getSubtleCrypto()),
                      (t.next = 3),
                      n.digest({ name: s.i }, e)
                    );
                  case 3:
                    return (r = t.sent), t.abrupt("return", new Uint8Array(r));
                  case 5:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function k(t) {
        return M.apply(this, arguments);
      }
      function M() {
        return (M = Object(o.a)(
          i.a.mark(function t(e) {
            var n, r;
            return i.a.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (n = a.getSubtleCrypto()),
                      (t.next = 3),
                      n.digest({ name: s.j }, e)
                    );
                  case 3:
                    return (r = t.sent), t.abrupt("return", new Uint8Array(r));
                  case 5:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
    },
    955: function (t, e, n) {
      "use strict";
      var r = n(1010);
      n.o(r, "isConstantTime") &&
        n.d(e, "isConstantTime", function () {
          return r.isConstantTime;
        });
      n(1011);
      var i = n(1012);
      n.o(i, "isConstantTime") &&
        n.d(e, "isConstantTime", function () {
          return i.isConstantTime;
        });
      var o = n(1013);
      n.d(e, "isConstantTime", function () {
        return o.a;
      });
    },
    956: function (t, e) {
      var n = {}.toString;
      t.exports =
        Array.isArray ||
        function (t) {
          return "[object Array]" == n.call(t);
        };
    },
    957: function (t, e) {
      (e.L = { bit: 1 }),
        (e.M = { bit: 0 }),
        (e.Q = { bit: 3 }),
        (e.H = { bit: 2 }),
        (e.isValid = function (t) {
          return t && "undefined" !== typeof t.bit && t.bit >= 0 && t.bit < 4;
        }),
        (e.from = function (t, n) {
          if (e.isValid(t)) return t;
          try {
            return (function (t) {
              if ("string" !== typeof t)
                throw new Error("Param is not a string");
              switch (t.toLowerCase()) {
                case "l":
                case "low":
                  return e.L;
                case "m":
                case "medium":
                  return e.M;
                case "q":
                case "quartile":
                  return e.Q;
                case "h":
                case "high":
                  return e.H;
                default:
                  throw new Error("Unknown EC Level: " + t);
              }
            })(t);
          } catch (r) {
            return n;
          }
        });
    },
    991: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "detectEnv", function () {
          return a;
        }),
        n.d(e, "detectOS", function () {
          return s;
        }),
        n.d(e, "isAndroid", function () {
          return u;
        }),
        n.d(e, "isIOS", function () {
          return c;
        }),
        n.d(e, "isMobile", function () {
          return l;
        }),
        n.d(e, "isNode", function () {
          return h;
        }),
        n.d(e, "isBrowser", function () {
          return f;
        }),
        n.d(e, "getFromWindow", function () {
          return d;
        }),
        n.d(e, "getFromWindowOrThrow", function () {
          return p;
        }),
        n.d(e, "getDocumentOrThrow", function () {
          return m;
        }),
        n.d(e, "getDocument", function () {
          return v;
        }),
        n.d(e, "getNavigatorOrThrow", function () {
          return g;
        }),
        n.d(e, "getNavigator", function () {
          return _;
        }),
        n.d(e, "getLocationOrThrow", function () {
          return y;
        }),
        n.d(e, "getLocation", function () {
          return w;
        }),
        n.d(e, "getCryptoOrThrow", function () {
          return b;
        }),
        n.d(e, "getCrypto", function () {
          return k;
        }),
        n.d(e, "getLocalStorageOrThrow", function () {
          return M;
        }),
        n.d(e, "getLocalStorage", function () {
          return x;
        }),
        n.d(e, "getClientMeta", function () {
          return E;
        }),
        n.d(e, "safeJsonParse", function () {
          return C;
        }),
        n.d(e, "safeJsonStringify", function () {
          return R;
        }),
        n.d(e, "setLocal", function () {
          return S;
        }),
        n.d(e, "getLocal", function () {
          return T;
        }),
        n.d(e, "removeLocal", function () {
          return I;
        }),
        n.d(e, "mobileLinkChoiceKey", function () {
          return j;
        }),
        n.d(e, "formatIOSMobile", function () {
          return A;
        }),
        n.d(e, "saveMobileLinkInfo", function () {
          return N;
        }),
        n.d(e, "getMobileRegistryEntry", function () {
          return P;
        }),
        n.d(e, "getMobileLinkRegistry", function () {
          return L;
        }),
        n.d(e, "getWalletRegistryUrl", function () {
          return q;
        }),
        n.d(e, "getDappRegistryUrl", function () {
          return U;
        }),
        n.d(e, "getAppLogoUrl", function () {
          return H;
        }),
        n.d(e, "formatMobileRegistryEntry", function () {
          return J;
        }),
        n.d(e, "formatMobileRegistry", function () {
          return D;
        });
      var r = n(1059),
        i = n(1005),
        o = n(1060);
      function a(t) {
        return Object(o.a)(t);
      }
      function s() {
        var t = a();
        return t && t.os ? t.os : void 0;
      }
      function u() {
        var t = s();
        return !!t && t.toLowerCase().includes("android");
      }
      function c() {
        var t = s();
        return (
          !!t &&
          (t.toLowerCase().includes("ios") ||
            (t.toLowerCase().includes("mac") && navigator.maxTouchPoints > 1))
        );
      }
      function l() {
        return !!s() && (u() || c());
      }
      function h() {
        var t = a();
        return !(!t || !t.name) && "node" === t.name.toLowerCase();
      }
      function f() {
        return !h() && !!_();
      }
      var d = i.getFromWindow,
        p = i.getFromWindowOrThrow,
        m = i.getDocumentOrThrow,
        v = i.getDocument,
        g = i.getNavigatorOrThrow,
        _ = i.getNavigator,
        y = i.getLocationOrThrow,
        w = i.getLocation,
        b = i.getCryptoOrThrow,
        k = i.getCrypto,
        M = i.getLocalStorageOrThrow,
        x = i.getLocalStorage;
      function E() {
        return r.getWindowMetadata();
      }
      var O = n(1004),
        C = O.a,
        R = O.b;
      function S(t, e) {
        var n = R(e),
          r = x();
        r && r.setItem(t, n);
      }
      function T(t) {
        var e = null,
          n = x();
        return n && (e = n.getItem(t)), e ? C(e) : e;
      }
      function I(t) {
        var e = x();
        e && e.removeItem(t);
      }
      var j = "WALLETCONNECT_DEEPLINK_CHOICE";
      function A(t, e) {
        var n = encodeURIComponent(t);
        return e.universalLink
          ? "".concat(e.universalLink, "/wc?uri=").concat(n)
          : e.deepLink
          ? ""
              .concat(e.deepLink)
              .concat(e.deepLink.endsWith(":") ? "//" : "/", "wc?uri=")
              .concat(n)
          : "";
      }
      function N(t) {
        var e = t.href.split("?")[0];
        S(j, Object.assign(Object.assign({}, t), { href: e }));
      }
      function P(t, e) {
        return t.filter(function (t) {
          return t.name.toLowerCase().includes(e.toLowerCase());
        })[0];
      }
      function L(t, e) {
        var n = t;
        return (
          e &&
            (n = e
              .map(function (e) {
                return P(t, e);
              })
              .filter(Boolean)),
          n
        );
      }
      var B = "https://registry.walletconnect.org";
      function q() {
        return B + "/data/wallets.json";
      }
      function U() {
        return B + "/data/dapps.json";
      }
      function H(t) {
        return B + "/logo/sm/" + t + ".jpeg";
      }
      function J(t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "mobile";
        return {
          name: t.name || "",
          shortName: t.metadata.shortName || "",
          color: t.metadata.colors.primary || "",
          logo: t.id ? H(t.id) : "",
          universalLink: t[e].universal || "",
          deepLink: t[e].native || "",
        };
      }
      function D(t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "mobile";
        return Object.values(t)
          .filter(function (t) {
            return !!t[e].universal || !!t[e].native;
          })
          .map(function (t) {
            return J(t, e);
          });
      }
    },
    993: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "g", function () {
          return o;
        }),
        n.d(e, "a", function () {
          return a;
        }),
        n.d(e, "f", function () {
          return s;
        }),
        n.d(e, "e", function () {
          return u;
        }),
        n.d(e, "i", function () {
          return c;
        }),
        n.d(e, "j", function () {
          return l;
        }),
        n.d(e, "h", function () {
          return r;
        }),
        n.d(e, "d", function () {
          return h;
        }),
        n.d(e, "c", function () {
          return f;
        }),
        n.d(e, "k", function () {
          return d;
        }),
        n.d(e, "l", function () {
          return p;
        });
      var r = 512,
        i = 256,
        o = 256,
        a = "AES-CBC",
        s = "SHA-".concat(i),
        u = "HMAC",
        c = "SHA-256",
        l = "SHA-512",
        h = ("aes-".concat(i, "-cbc"), "sha".concat(o), "encrypt"),
        f = "decrypt",
        d = "sign",
        p = "verify";
    },
    994: function (t, e, n) {
      "use strict";
      var r = Object.prototype.hasOwnProperty,
        i = "~";
      function o() {}
      function a(t, e, n) {
        (this.fn = t), (this.context = e), (this.once = n || !1);
      }
      function s(t, e, n, r, o) {
        if ("function" !== typeof n)
          throw new TypeError("The listener must be a function");
        var s = new a(n, r || t, o),
          u = i ? i + e : e;
        return (
          t._events[u]
            ? t._events[u].fn
              ? (t._events[u] = [t._events[u], s])
              : t._events[u].push(s)
            : ((t._events[u] = s), t._eventsCount++),
          t
        );
      }
      function u(t, e) {
        0 === --t._eventsCount ? (t._events = new o()) : delete t._events[e];
      }
      function c() {
        (this._events = new o()), (this._eventsCount = 0);
      }
      Object.create &&
        ((o.prototype = Object.create(null)), new o().__proto__ || (i = !1)),
        (c.prototype.eventNames = function () {
          var t,
            e,
            n = [];
          if (0 === this._eventsCount) return n;
          for (e in (t = this._events))
            r.call(t, e) && n.push(i ? e.slice(1) : e);
          return Object.getOwnPropertySymbols
            ? n.concat(Object.getOwnPropertySymbols(t))
            : n;
        }),
        (c.prototype.listeners = function (t) {
          var e = i ? i + t : t,
            n = this._events[e];
          if (!n) return [];
          if (n.fn) return [n.fn];
          for (var r = 0, o = n.length, a = new Array(o); r < o; r++)
            a[r] = n[r].fn;
          return a;
        }),
        (c.prototype.listenerCount = function (t) {
          var e = i ? i + t : t,
            n = this._events[e];
          return n ? (n.fn ? 1 : n.length) : 0;
        }),
        (c.prototype.emit = function (t, e, n, r, o, a) {
          var s = i ? i + t : t;
          if (!this._events[s]) return !1;
          var u,
            c,
            l = this._events[s],
            h = arguments.length;
          if (l.fn) {
            switch ((l.once && this.removeListener(t, l.fn, void 0, !0), h)) {
              case 1:
                return l.fn.call(l.context), !0;
              case 2:
                return l.fn.call(l.context, e), !0;
              case 3:
                return l.fn.call(l.context, e, n), !0;
              case 4:
                return l.fn.call(l.context, e, n, r), !0;
              case 5:
                return l.fn.call(l.context, e, n, r, o), !0;
              case 6:
                return l.fn.call(l.context, e, n, r, o, a), !0;
            }
            for (c = 1, u = new Array(h - 1); c < h; c++)
              u[c - 1] = arguments[c];
            l.fn.apply(l.context, u);
          } else {
            var f,
              d = l.length;
            for (c = 0; c < d; c++)
              switch (
                (l[c].once && this.removeListener(t, l[c].fn, void 0, !0), h)
              ) {
                case 1:
                  l[c].fn.call(l[c].context);
                  break;
                case 2:
                  l[c].fn.call(l[c].context, e);
                  break;
                case 3:
                  l[c].fn.call(l[c].context, e, n);
                  break;
                case 4:
                  l[c].fn.call(l[c].context, e, n, r);
                  break;
                default:
                  if (!u)
                    for (f = 1, u = new Array(h - 1); f < h; f++)
                      u[f - 1] = arguments[f];
                  l[c].fn.apply(l[c].context, u);
              }
          }
          return !0;
        }),
        (c.prototype.on = function (t, e, n) {
          return s(this, t, e, n, !1);
        }),
        (c.prototype.once = function (t, e, n) {
          return s(this, t, e, n, !0);
        }),
        (c.prototype.removeListener = function (t, e, n, r) {
          var o = i ? i + t : t;
          if (!this._events[o]) return this;
          if (!e) return u(this, o), this;
          var a = this._events[o];
          if (a.fn)
            a.fn !== e ||
              (r && !a.once) ||
              (n && a.context !== n) ||
              u(this, o);
          else {
            for (var s = 0, c = [], l = a.length; s < l; s++)
              (a[s].fn !== e ||
                (r && !a[s].once) ||
                (n && a[s].context !== n)) &&
                c.push(a[s]);
            c.length
              ? (this._events[o] = 1 === c.length ? c[0] : c)
              : u(this, o);
          }
          return this;
        }),
        (c.prototype.removeAllListeners = function (t) {
          var e;
          return (
            t
              ? ((e = i ? i + t : t), this._events[e] && u(this, e))
              : ((this._events = new o()), (this._eventsCount = 0)),
            this
          );
        }),
        (c.prototype.off = c.prototype.removeListener),
        (c.prototype.addListener = c.prototype.on),
        (c.prefixed = i),
        (c.EventEmitter = c),
        (t.exports = c);
    },
    995: function (t, e, n) {
      "use strict";
      var r = n(900);
      n.o(r, "IJsonRpcProvider") &&
        n.d(e, "IJsonRpcProvider", function () {
          return r.IJsonRpcProvider;
        }),
        n.o(r, "formatJsonRpcError") &&
          n.d(e, "formatJsonRpcError", function () {
            return r.formatJsonRpcError;
          }),
        n.o(r, "formatJsonRpcRequest") &&
          n.d(e, "formatJsonRpcRequest", function () {
            return r.formatJsonRpcRequest;
          }),
        n.o(r, "isHttpUrl") &&
          n.d(e, "isHttpUrl", function () {
            return r.isHttpUrl;
          }),
        n.o(r, "isJsonRpcError") &&
          n.d(e, "isJsonRpcError", function () {
            return r.isJsonRpcError;
          }),
        n.o(r, "isJsonRpcResponse") &&
          n.d(e, "isJsonRpcResponse", function () {
            return r.isJsonRpcResponse;
          }),
        n.o(r, "payloadId") &&
          n.d(e, "payloadId", function () {
            return r.payloadId;
          });
      r.isNode;
    },
    996: function (t, e, n) {
      "use strict";
      n.d(e, "c", function () {
        return o;
      }),
        n.d(e, "b", function () {
          return a;
        }),
        n.d(e, "a", function () {
          return s;
        });
      var r = n(951),
        i = n(933);
      function o() {
        return (
          Date.now() * Math.pow(10, 3) +
          Math.floor(Math.random() * Math.pow(10, 3))
        );
      }
      function a(t, e, n) {
        return { id: n || o(), jsonrpc: "2.0", method: t, params: e };
      }
      function s(t, e) {
        return { id: t, jsonrpc: "2.0", error: u(e) };
      }
      function u(t) {
        return "undefined" === typeof t
          ? Object(r.a)(i.a)
          : ("string" === typeof t &&
              (t = Object.assign(Object.assign({}, Object(r.a)(i.c)), {
                message: t,
              })),
            Object(r.c)(t.code) && (t = Object(r.b)(t.code)),
            t);
      }
    },
    997: function (t, e, n) {
      "use strict";
    },
    998: function (t, e, n) {
      "use strict";
      var r = n(952);
      n.o(r, "IJsonRpcProvider") &&
        n.d(e, "IJsonRpcProvider", function () {
          return r.IJsonRpcProvider;
        }),
        n.o(r, "isHttpUrl") &&
          n.d(e, "isHttpUrl", function () {
            return r.isHttpUrl;
          }),
        n.o(r, "isJsonRpcError") &&
          n.d(e, "isJsonRpcError", function () {
            return r.isJsonRpcError;
          }),
        n.o(r, "isJsonRpcResponse") &&
          n.d(e, "isJsonRpcResponse", function () {
            return r.isJsonRpcResponse;
          });
    },
    999: function (t, e) {},
  },
]);
//# sourceMappingURL=5.dfba8cd2.chunk.js.map
