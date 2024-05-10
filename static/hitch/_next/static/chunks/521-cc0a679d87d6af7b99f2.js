(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[521], {
    11131: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return De
            }
        });
        var r = n(83920)
          , o = n(51810)
          , a = n(26265)
          , i = n(809)
          , c = n.n(i)
          , u = n(92447)
          , l = n(74047)
          , s = n(52700)
          , p = n(33814)
          , f = n(44102)
          , d = n(20775)
          , y = n(27361)
          , v = n.n(y)
          , h = n(67294)
          , m = n(50099)
          , b = n(27427)
          , g = n(32200)
          , O = n(34742)
          , w = n(80232)
          , P = n(41978)
          , k = h.createElement;
        function S(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function j(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? S(Object(n), !0).forEach((function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function E(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = (0,
                d.Z)(e);
                if (t) {
                    var o = (0,
                    d.Z)(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return (0,
                f.Z)(this, n)
            }
        }
        var Z = {
            logName: "CartAbandonment"
        }
          , D = function(e) {
            return function(t) {
                (0,
                p.Z)(r, t);
                var n = E(r);
                function r() {
                    return (0,
                    l.Z)(this, r),
                    n.apply(this, arguments)
                }
                return (0,
                s.Z)(r, [{
                    key: "render",
                    value: function() {
                        return k(e, this.props)
                    }
                }], [{
                    key: "getInitialProps",
                    value: function() {
                        var t = (0,
                        u.Z)(c().mark((function t(n) {
                            var r, o, a, i, l, s, p, f, d, y, h;
                            return c().wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return r = e.getInitialProps || (0,
                                        u.Z)(c().mark((function e() {
                                            return c().wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.abrupt("return", {});
                                                    case 1:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e)
                                        }
                                        ))),
                                        t.next = 3,
                                        r(n);
                                    case 3:
                                        return o = t.sent,
                                        a = n.req,
                                        i = v()(n, "req.ldClient"),
                                        t.next = 8,
                                        (0,
                                        P.U)(i, "cart-abandonment");
                                    case 8:
                                        if (l = t.sent,
                                        s = (0,
                                        b.ej)(m.COOKIES.CART_ABANDONMENT, n),
                                        p = (0,
                                        w.Rx)(decodeURIComponent(s), {
                                            logger: g.L4,
                                            message: "Unable to parse Cart Abandonment cookie. ",
                                            logMetaData: Z
                                        }),
                                        f = a.subscriber,
                                        d = (0,
                                        O.m0)(f),
                                        l && p && !d) {
                                            t.next = 15;
                                            break
                                        }
                                        return t.abrupt("return", j(j({}, o), {}, {
                                            cartAbandonment: null,
                                            isSufReturningCustomer: !1
                                        }));
                                    case 15:
                                        return y = v()(p, "name", null) || (0,
                                        b.ej)(m.COOKIES.PROFILE_NAME, n),
                                        h = v()(p, "plan", null),
                                        t.abrupt("return", j(j({}, o), {}, {
                                            cartAbandonment: {
                                                name: y,
                                                plan: h
                                            },
                                            isSufReturningCustomer: !0
                                        }));
                                    case 18:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                }]),
                r
            }(h.Component)
        }
          , _ = n(82042)
          , x = n(17673)
          , A = n(10861)
          , C = n(57557)
          , T = n.n(C)
          , R = n(12437)
          , I = n.n(R)
          , N = n(9008)
          , L = function(e) {
            var t = e.deeplinkUrl
              , n = e.isAndroid
              , r = t
              , o = null
              , a = window.location;
            if (n) {
                var i = /\?/.test(a.href) ? "&" : "?";
                o = "".concat(a.href).concat(i, "dl"),
                r = "".concat(t, "S.browser_fallback_url=").concat(o, "=false;end")
            }
            try {
                sessionStorage.setItem("doc_referrer", document.referrer)
            } catch (c) {}
            o || r.includes("shortlink") ? window.setTimeout((function() {
                a.assign(o || r)
            }
            ), 500) : a.assign(r)
        }
          , F = n(61974)
          , U = n(9323)
          , q = n(48258)
          , M = h.createElement;
        function H(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = (0,
                d.Z)(e);
                if (t) {
                    var o = (0,
                    d.Z)(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return (0,
                f.Z)(this, n)
            }
        }
        function W(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function B(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? W(Object(n), !0).forEach((function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : W(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var G = {
            logName: "DeepLink"
        }
          , V = function(e) {
            return ["AndroidOS", "iOS"].includes(e)
        }
          , K = function(e, t) {
            return ["series", "movie", "sports_episode", "sports_team", "genre", "network", "watch", "open"].includes(t)
        }
          , X = function(e) {
            if (!e)
                return !1;
            var t = e.split(":")[0];
            return t.endsWith(".huluqa.com") || t.endsWith(".hulu.com")
        }
          , z = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = t.entity
              , r = t.dl
              , o = t.isAppsFlyer
              , a = arguments.length > 2 ? arguments[2] : void 0;
            return !(!V(e) || !K(0, n)) && (!(null != r && !o) && !X(A.parse(a).host))
        }
          , Y = function(e) {
            var t = e && e.match(/[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}$/i);
            return t && t[0].toLowerCase()
        }
          , J = function(e, t, n, r) {
            var o = r.content_id || r.entity_id
              , a = o || n;
            if (!a && "open" !== t)
                return null;
            var i = "watch" === t || Boolean(o) ? "videos" : "shows"
              , c = {
                source: "web_universal_deep_linking",
                play: "videos" === i
            }
              , u = "open" === t ? "/open" : "/".concat(i, "/").concat(a);
            return "AndroidOS" === e ? A.format({
                protocol: "intent",
                hostname: "//www.hulu.com",
                pathname: u,
                query: B(B({}, r), c),
                hash: "Intent;scheme=https;package=com.hulu.plus;"
            }) : "iOS" === e ? A.format({
                protocol: "https",
                hostname: "dl.hulu.com",
                pathname: u,
                query: B(B({}, r), c)
            }) : null
        }
          , Q = function(e) {
            if (!e)
                return {};
            var t = A.parse(e)
              , n = x.parse(t.query)
              , r = v()(t, "pathname", "").split("/")
              , o = r[1];
            return {
                origEntity: o,
                origId: "watch" === o ? r[2] : Y(r[2]),
                query: n
            }
        }
          , $ = function(e) {
            var t = function(t) {
                (0,
                p.Z)(r, t);
                var n = H(r);
                function r() {
                    return (0,
                    l.Z)(this, r),
                    n.apply(this, arguments)
                }
                return (0,
                s.Z)(r, [{
                    key: "componentDidMount",
                    value: function() {
                        this.sendDeeplinkHit()
                    }
                }, {
                    key: "sendDeeplinkHit",
                    value: function() {
                        var e = this.props
                          , t = e.url
                          , n = e.deeplinkScript
                          , r = e.isAppsFlyer
                          , o = v()(t, "query", {})
                          , a = v()(t, "asPath", "")
                          , i = v()(o, "dl", null)
                          , c = "";
                        try {
                            c = sessionStorage.getItem("doc_referrer"),
                            sessionStorage.removeItem("doc_referrer")
                        } catch (l) {
                            g.L4.error(l, G)
                        }
                        var u = B(B({}, o), {}, {
                            doc_referrer: c,
                            isAppsFlyer: r
                        });
                        "false" !== i || r ? ("" === i || n) && (0,
                        q.fireDeeplinkLaunch)(a, u) : (0,
                        q.fireDeeplinkLaunchError)(a, u)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this.props.deeplinkScript;
                        return M("div", null, M(N.default, null, t ? M("script", {
                            dangerouslySetInnerHTML: {
                                __html: t
                            }
                        }) : null), M(e, this.props))
                    }
                }], [{
                    key: "getInitialProps",
                    value: function() {
                        var t = (0,
                        u.Z)(c().mark((function t(n) {
                            var r, o, a, i, l, s, p, f, d, y, h, m, b, g, O, w, P;
                            return c().wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return r = e.getInitialProps || (0,
                                        u.Z)(c().mark((function e() {
                                            return c().wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.abrupt("return", {});
                                                    case 1:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e)
                                        }
                                        ))),
                                        t.next = 3,
                                        r(n);
                                    case 3:
                                        if (o = t.sent,
                                        a = v()(n, "req.headers", {}),
                                        (0,
                                        F.isBrowser)() ? (i = navigator.userAgent,
                                        l = document.referrer) : (i = v()(a, "user-agent", ""),
                                        l = v()(a, "referer", "")),
                                        !(s = new (I())(i)).is("bot") && !s.is("mobilebot")) {
                                            t.next = 9;
                                            break
                                        }
                                        return t.abrupt("return", o);
                                    case 9:
                                        return p = s.os(),
                                        f = v()(n, "query", {}),
                                        d = v()(n, "req.query", {}),
                                        y = v()(d, "orig_path", ""),
                                        h = Q(y),
                                        m = B(B({}, T()(d, ["orig_path"])), h.query),
                                        b = f.entity || h.origEntity,
                                        g = Y(f.id) || h.origId,
                                        O = "shortlink"in m,
                                        o.isAppsFlyer = O,
                                        z(p, {
                                            entity: b,
                                            dl: m.dl,
                                            isAppsFlyer: O
                                        }, l) && (w = J(p, b, g, m)) && (P = {
                                            deeplinkUrl: w,
                                            isAndroid: "AndroidOS" === p
                                        },
                                        o.deeplinkScript = "(".concat(L, ")(").concat(JSON.stringify(P), ")")),
                                        t.abrupt("return", o);
                                    case 21:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                }]),
                r
            }(h.Component);
            return t.displayName = (0,
            U.G)("withDeeplink", e),
            t
        }
          , ee = n(24323)
          , te = h.createElement;
        function ne(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function re(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ne(Object(n), !0).forEach((function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ne(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function oe(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = (0,
                d.Z)(e);
                if (t) {
                    var o = (0,
                    d.Z)(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return (0,
                f.Z)(this, n)
            }
        }
        var ae = function(e) {
            return function(t) {
                (0,
                p.Z)(r, t);
                var n = oe(r);
                function r() {
                    return (0,
                    l.Z)(this, r),
                    n.apply(this, arguments)
                }
                return (0,
                s.Z)(r, [{
                    key: "render",
                    value: function() {
                        return te(e, this.props)
                    }
                }], [{
                    key: "getInitialProps",
                    value: function() {
                        var t = (0,
                        u.Z)(c().mark((function t(n) {
                            var r, o, a, i, l, s, p, f;
                            return c().wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return o = e.getInitialProps || (0,
                                        u.Z)(c().mark((function e() {
                                            return c().wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.abrupt("return", {});
                                                    case 1:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e)
                                        }
                                        ))),
                                        t.next = 3,
                                        o(n);
                                    case 3:
                                        return a = t.sent,
                                        i = n.req,
                                        l = i.geodata,
                                        s = null !== (r = null === l || void 0 === l ? void 0 : l.geodataPageConfig) && void 0 !== r ? r : {},
                                        p = (0,
                                        w.QV)(i),
                                        f = {},
                                        Object.keys(s).forEach((function(e) {
                                            var t, n = null === s || void 0 === s || null === (t = s[e]) || void 0 === t ? void 0 : t[p];
                                            n && (f[e] = n)
                                        }
                                        )),
                                        t.abrupt("return", re(re({}, a), {}, {
                                            geodata: re(re({}, l), {}, {
                                                geodataOverrides: f,
                                                zip: (0,
                                                w.gw)(i)
                                            })
                                        }));
                                    case 11:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                }]),
                r
            }(h.Component)
        }
          , ie = h.createElement;
        function ce(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function ue(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ce(Object(n), !0).forEach((function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ce(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function le(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = (0,
                d.Z)(e);
                if (t) {
                    var o = (0,
                    d.Z)(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return (0,
                f.Z)(this, n)
            }
        }
        var se = function(e) {
            return function(t) {
                (0,
                p.Z)(r, t);
                var n = le(r);
                function r() {
                    return (0,
                    l.Z)(this, r),
                    n.apply(this, arguments)
                }
                return (0,
                s.Z)(r, [{
                    key: "render",
                    value: function() {
                        var t = this.props.statusCode;
                        return Boolean(t) && t !== m.STATUS_CODES.OK ? ie("div", null, ie("p", null, t), ie("p", null, t.path)) : ie(e, this.props)
                    }
                }], [{
                    key: "getInitialProps",
                    value: function() {
                        var t = (0,
                        u.Z)(c().mark((function t(n) {
                            var r, o, a, i, l, s, p;
                            return c().wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return r = e.getInitialProps || (0,
                                        u.Z)(c().mark((function e() {
                                            return c().wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.abrupt("return", {});
                                                    case 1:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e)
                                        }
                                        ))),
                                        t.next = 3,
                                        r(n);
                                    case 3:
                                        if (o = t.sent,
                                        a = n.res,
                                        i = n.req,
                                        l = n.asPath,
                                        s = v()(i, "layout.components"),
                                        !a || Array.isArray(s) && !(s.length <= 0)) {
                                            t.next = 9;
                                            break
                                        }
                                        return a.statusCode = 404,
                                        t.abrupt("return", ue(ue({}, o), {}, {
                                            statusCode: 404,
                                            path: l
                                        }));
                                    case 9:
                                        return p = i && i.layout,
                                        t.abrupt("return", ue(ue({}, o), {}, {
                                            layout: p
                                        }));
                                    case 11:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                }]),
                r
            }(h.Component)
        }
          , pe = n(45610)
          , fe = n(64785)
          , de = n(14396)
          , ye = h.createElement;
        function ve(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = (0,
                d.Z)(e);
                if (t) {
                    var o = (0,
                    d.Z)(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return (0,
                f.Z)(this, n)
            }
        }
        function he(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function me(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? he(Object(n), !0).forEach((function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : he(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var be = ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform", "http://schema.org/IOSPlatform", "http://schema.org/AndroidPlatform"]
          , ge = function(e) {
            var t = function(t) {
                (0,
                p.Z)(r, t);
                var n = ve(r);
                function r(e) {
                    var t, o;
                    (0,
                    l.Z)(this, r),
                    o = n.call(this, e);
                    var a = e.layout
                      , i = v()(a, "detailEntity", null)
                      , c = v()(a, "bundle", null)
                      , u = null === a || void 0 === a || null === (t = a.options) || void 0 === t ? void 0 : t.contentOverrides;
                    if (o.dataType = null,
                    o.schema = null,
                    i) {
                        var s = v()(i, "type");
                        if (s === m.SERIES ? o.dataType = "TVSeries" : s === m.MOVIE && (o.dataType = "Movie"),
                        o.dataType) {
                            var p, f = "size=952x536", d = v()(i, "artwork.horizontalProgramTile.path");
                            if (s === m.MOVIE) {
                                var y = v()(i, "artwork.verticalProgramTile.path", null);
                                y && (f = "size=400x600",
                                d = y)
                            }
                            var h = "".concat(d, "&").concat("region=US", "&").concat("format=webp", "&").concat(f)
                              , b = (v()(i, "premiereDate") || "").split("T")[0]
                              , g = v()(i, "href")
                              , O = v()(c, "price", 7.99)
                              , w = (null !== (p = null === i || void 0 === i ? void 0 : i.credits) && void 0 !== p ? p : []).reduce((function(e, t) {
                                return e[t.seoSchemaProp] = t.items.map((function(e) {
                                    return {
                                        "@type": "Person",
                                        name: e
                                    }
                                }
                                )),
                                e
                            }
                            ), {});
                            o.schema = JSON.stringify(function(e) {
                                var t = e.type
                                  , n = e.name
                                  , r = e.description
                                  , o = e.url
                                  , a = e.image
                                  , i = e.startDate
                                  , c = e.price
                                  , u = e.playable
                                  , l = e.credits
                                  , s = {
                                    "@type": "ViewAction",
                                    target: be.map((function(e) {
                                        return {
                                            url: o,
                                            actionPlatform: e,
                                            inLanguage: "en"
                                        }
                                    }
                                    ))
                                };
                                return u && (s = {
                                    "@type": "WatchAction",
                                    target: be.map((function(e) {
                                        return {
                                            "@type": "EntryPoint",
                                            urlTemplate: o,
                                            actionPlatform: e,
                                            inLanguage: "en"
                                        }
                                    }
                                    ))
                                }),
                                me(me({
                                    "@context": "http://schema.org",
                                    "@type": t,
                                    name: n,
                                    description: r,
                                    url: o,
                                    image: a,
                                    releasedEvent: {
                                        "@type": "PublicationEvent",
                                        startDate: i,
                                        location: {
                                            "@type": "Country",
                                            name: "US"
                                        }
                                    }
                                }, l), {}, {
                                    potentialAction: me(me({}, s), {}, {
                                        expectsAcceptanceOf: [{
                                            "@type": "Offer",
                                            availabilityStarts: "2014-01-01T00:00",
                                            availabilityEnds: "2021-12-31T00:00",
                                            category: "subscription",
                                            name: "Hulu",
                                            price: c,
                                            priceCurrency: "USD",
                                            eligibleRegion: {
                                                "@type": "Country",
                                                name: "US"
                                            },
                                            seller: {
                                                "@type": "Organization",
                                                name: "Hulu",
                                                sameAs: "https://www.hulu.com/"
                                            }
                                        }]
                                    })
                                })
                            }({
                                type: o.dataType,
                                name: (null === u || void 0 === u ? void 0 : u.overrideName) || v()(i, "name"),
                                description: (null === u || void 0 === u ? void 0 : u.overrideDescription) || v()(i, "description"),
                                url: g,
                                image: h,
                                startDate: b,
                                price: O,
                                playable: s === m.MOVIE,
                                credits: w
                            }))
                        }
                    }
                    return o
                }
                return (0,
                s.Z)(r, [{
                    key: "render",
                    value: function() {
                        return this.schema ? ye(h.Fragment, null, ye(N.default, null, ye("script", {
                            type: "application/ld+json",
                            dangerouslySetInnerHTML: {
                                __html: this.schema
                            }
                        })), ye(e, this.props)) : ye(e, this.props)
                    }
                }], [{
                    key: "getInitialProps",
                    value: function() {
                        var t = (0,
                        u.Z)(c().mark((function t(n) {
                            var r, o;
                            return c().wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return r = e.getInitialProps || (0,
                                        u.Z)(c().mark((function e() {
                                            return c().wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.abrupt("return", {});
                                                    case 1:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e)
                                        }
                                        ))),
                                        t.next = 3,
                                        r(n);
                                    case 3:
                                        return o = t.sent,
                                        t.abrupt("return", o);
                                    case 5:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                }]),
                r
            }(h.Component);
            return t.displayName = (0,
            U.G)("withStructuredData", e),
            t
        }
          , Oe = h.createElement;
        function we(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = (0,
                d.Z)(e);
                if (t) {
                    var o = (0,
                    d.Z)(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return (0,
                f.Z)(this, n)
            }
        }
        function Pe(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function ke(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Pe(Object(n), !0).forEach((function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pe(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var Se = {
            type: "top_hat",
            topHatId: "lp_tophat_upcoming",
            body: "",
            metrics: {}
        }
          , je = function(e) {
            return e.find((function(e) {
                return "top_hat" === e.type
            }
            ))
        }
          , Ee = function(e, t, n) {
            if (!e)
                return null;
            var r = function(e, t) {
                return {
                    title: "Watch ".concat(e, " on Hulu | New Season Premieres ").concat(t),
                    description: "Start your free trial to catch up on ".concat(e, " before the new season premieres ").concat(t, ". Plus, enjoy thousands of other popular TV shows and movies. It's all on Hulu.")
                }
            }(t, (0,
            w.Ln)(n))
              , o = ["title", "og:title", "twitter:title", "description", "og:description", "twitter:description"].map((function(t) {
                var n = e.find((function(e) {
                    return e.key === t
                }
                ))
                  , o = t.includes("title") ? r.title : r.description;
                return ke(ke({}, n), {}, {
                    value: o
                })
            }
            ));
            return e.map((function(e) {
                return Object.assign(e, o.find((function(t) {
                    return t && e.key === t.key
                }
                )))
            }
            ))
        }
          , Ze = function(e) {
            return function(t) {
                (0,
                p.Z)(r, t);
                var n = we(r);
                function r() {
                    return (0,
                    l.Z)(this, r),
                    n.apply(this, arguments)
                }
                return (0,
                s.Z)(r, [{
                    key: "render",
                    value: function() {
                        return Oe(e, this.props)
                    }
                }], [{
                    key: "getInitialProps",
                    value: function() {
                        var t = (0,
                        u.Z)(c().mark((function t(n) {
                            var r, o, a, i, l, s, p, f, d, y, h, m, b, g, O;
                            return c().wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return r = e.getInitialProps || (0,
                                        u.Z)(c().mark((function e() {
                                            return c().wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.abrupt("return", {});
                                                    case 1:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e)
                                        }
                                        ))),
                                        t.next = 3,
                                        r(n);
                                    case 3:
                                        if (o = t.sent,
                                        a = n.req,
                                        i = v()(a, "layout"),
                                        (l = v()(i, "detailEntity")) && l.latestSeason) {
                                            t.next = 9;
                                            break
                                        }
                                        return t.abrupt("return", ke({}, o));
                                    case 9:
                                        return s = l.latestSeason,
                                        p = s.firstEpPremiereDate,
                                        f = s.lastEpPremiereDate,
                                        d = !!p && (0,
                                        w.YI)(p),
                                        y = !f || !(0,
                                        w.YI)(f),
                                        d && (h = v()(i, "metatags", null),
                                        m = Ee(h, l.name, p),
                                        h = m),
                                        b = v()(i, "components", null),
                                        !je(b) && d && (g = b.indexOf(b.find((function(e) {
                                            return "navigation" === e.type
                                        }
                                        ))),
                                        b.splice(g + 1, 0, Se)),
                                        O = ke(ke({}, l.latestSeason), {}, {
                                            hasUpcomingSeason: d,
                                            hasLastEpPremiered: y
                                        }),
                                        t.abrupt("return", ke(ke({}, o), {}, {
                                            latestSeason: O
                                        }));
                                    case 18:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                }]),
                r
            }(h.Component)
        }
          , De = (0,
        r.compose)($, _.Z, fe.Z, de.Z, ge, (0,
        pe.Z)(o.q), D, ae, se, ee.Z, Ze)
    },
    24323: function(e, t, n) {
        "use strict";
        var r = n(26265)
          , o = n(809)
          , a = n.n(o)
          , i = n(92447)
          , c = n(74047)
          , u = n(52700)
          , l = n(33814)
          , s = n(44102)
          , p = n(20775)
          , f = n(27361)
          , d = n.n(f)
          , y = n(67294)
          , v = n(41978)
          , h = y.createElement;
        function m(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function b(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? m(Object(n), !0).forEach((function(t) {
                    (0,
                    r.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function g(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = (0,
                p.Z)(e);
                if (t) {
                    var o = (0,
                    p.Z)(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return (0,
                s.Z)(this, n)
            }
        }
        t.Z = function(e) {
            return function(t) {
                (0,
                l.Z)(r, t);
                var n = g(r);
                function r() {
                    return (0,
                    c.Z)(this, r),
                    n.apply(this, arguments)
                }
                return (0,
                u.Z)(r, [{
                    key: "render",
                    value: function() {
                        return h(e, this.props)
                    }
                }], [{
                    key: "getInitialProps",
                    value: function() {
                        var t = (0,
                        i.Z)(a().mark((function t(n) {
                            var r, o, c, u, l, s, p, f, y, h, m, g, O;
                            return a().wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return r = e.getInitialProps || (0,
                                        i.Z)(a().mark((function e() {
                                            return a().wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.abrupt("return", {});
                                                    case 1:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e)
                                        }
                                        ))),
                                        t.next = 3,
                                        r(n);
                                    case 3:
                                        return o = t.sent,
                                        t.prev = 4,
                                        c = d()(n, "req.ldClient"),
                                        t.next = 8,
                                        (0,
                                        v.U)(c, "404-carousel");
                                    case 8:
                                        return u = t.sent,
                                        t.next = 11,
                                        (0,
                                        v.U)(c, "connected-authentication");
                                    case 11:
                                        return l = t.sent,
                                        t.next = 14,
                                        (0,
                                        v.U)(c, "unified-identity-login");
                                    case 14:
                                        return s = t.sent,
                                        t.next = 17,
                                        (0,
                                        v.U)(c, "edna-login");
                                    case 17:
                                        return p = t.sent,
                                        t.next = 20,
                                        (0,
                                        v.U)(c, "edna-login-pwa");
                                    case 20:
                                        return f = t.sent,
                                        t.next = 23,
                                        (0,
                                        v.U)(c, "updated-gender-options");
                                    case 23:
                                        return y = t.sent,
                                        t.next = 26,
                                        (0,
                                        v.U)(c, "enable-one-trust-script");
                                    case 26:
                                        return h = t.sent,
                                        t.next = 29,
                                        (0,
                                        v.U)(c, "one-trust-privacy-update-footer-change");
                                    case 29:
                                        return m = t.sent,
                                        t.next = 32,
                                        (0,
                                        v.U)(c, "subscriber-agreement-legal-update");
                                    case 32:
                                        if (g = t.sent,
                                        !(O = {
                                            has404CarouselEnabled: u,
                                            hasConnectedAuthEnabled: l,
                                            hasUnifiedLoginEnabled: s,
                                            hasEdnaLoginEnabled: p,
                                            hasEdnaLoginOnPWAEnabled: f,
                                            hasUpdatedGenderOptions: y,
                                            hasOneTrustScriptEnabled: h,
                                            hasOneTrustFooterChangeActivated: m,
                                            hasSubscriberAgreementUpdateEnabled: g
                                        })) {
                                            t.next = 36;
                                            break
                                        }
                                        return t.abrupt("return", b(b({}, o), {}, {
                                            featureFlags: O
                                        }));
                                    case 36:
                                        return t.abrupt("return", b({}, o));
                                    case 39:
                                        return t.prev = 39,
                                        t.t0 = t.catch(4),
                                        t.abrupt("return", b({}, o));
                                    case 42:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t, null, [[4, 39]])
                        }
                        )));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                }]),
                r
            }(y.Component)
        }
    },
    14396: function(e, t, n) {
        "use strict";
        var r = n(74047)
          , o = n(52700)
          , a = n(33814)
          , i = n(44102)
          , c = n(20775)
          , u = n(26265)
          , l = n(27361)
          , s = n.n(l)
          , p = n(67294)
          , f = n(37424)
          , d = n(83920)
          , y = n(53894)
          , v = n(9990)
          , h = n(51810)
          , m = n(61974)
          , b = n(9323)
          , g = p.createElement;
        function O(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = (0,
                c.Z)(e);
                if (t) {
                    var o = (0,
                    c.Z)(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return (0,
                i.Z)(this, n)
            }
        }
        function w(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function P(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? w(Object(n), !0).forEach((function(t) {
                    (0,
                    u.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : w(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var k = function(e) {
            return Object.keys(e).reduce((function(t, n) {
                var r = e[n]
                  , o = r.defaultState
                  , a = r.actionHandlers;
                return t[n] = function(e, t) {
                    return function() {
                        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e
                          , r = arguments.length > 1 ? arguments[1] : void 0
                          , o = t[r.type];
                        return o ? o(n, r.payload) : n
                    }
                }(o, a),
                t
            }
            ), {})
        };
        t.Z = function(e) {
            var t = function(t) {
                (0,
                a.Z)(c, t);
                var i = O(c);
                function c(e) {
                    var t;
                    (0,
                    r.Z)(this, c),
                    t = i.call(this, e);
                    var o = e.layout
                      , a = e.user
                      , u = s()(e, "layout.options", {})
                      , l = s()(u, "cartAbandonmentCopy", null)
                      , p = (0,
                    m.mobileDetect)()
                      , f = null;
                    if (s()(u, "ctaMobileFlag", !1)) {
                        var b = p.os();
                        f = h.b[b] || null
                    }
                    var g = {
                        user: a,
                        ctaFields: {
                            ctaAnonCopy: s()(u, "ctaAnonCopy", null),
                            ctaAnonLink: s()(u, "ctaAnonLink", null),
                            ctaSomeCopy: s()(u, "ctaSomeCopy", null),
                            ctaSomeLink: s()(u, "ctaSomeLink", null),
                            ctaSomeAndNotEnrolledCopy: s()(u, "ctaSomeAndNotEnrolledCopy", null),
                            ctaSomeAndNotEnrolledLink: s()(u, "ctaSomeAndNotEnrolledLink", null),
                            ctaAllCopy: s()(u, "ctaAllCopy", null),
                            ctaAllLink: s()(u, "ctaAllLink", null),
                            ctaIneligibleCopy: s()(u, "ctaIneligibleCopy", null),
                            ctaIneligibleLink: s()(u, "ctaIneligibleLink", null),
                            ctaSomeNotToAddonsCopy: s()(u, "ctaSomeNotToAddonCopy", null),
                            ctaSomeNotToAddonLink: s()(u, "ctaSomeNotToAddonLink", null),
                            ctaInactiveCopy: s()(u, "ctaInactiveCopy", null),
                            ctaInactiveLink: s()(u, "ctaInactiveLink", null),
                            ctaAppleCopy: s()(u, "ctaAppleCopy", null),
                            ctaAppleLink: s()(u, "ctaAppleLink", null),
                            ctaMobileLink: f,
                            cartAbandonmentCopy: l
                        }
                    };
                    return t.store = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                          , r = s()(e, "components", []).reduce((function(e, n) {
                            var r = (0,
                            v.A)(n.type, n);
                            return r && Object.keys(r).forEach((function(n) {
                                var o = r[n]
                                  , a = t[n] || {};
                                if (n in e) {
                                    var i = e[n];
                                    e[n] = {
                                        defaultState: a,
                                        actionHandlers: P(P({}, i.actionHandlers), o)
                                    }
                                } else
                                    e[n] = {
                                        defaultState: a,
                                        actionHandlers: o
                                    }
                            }
                            )),
                            e
                        }
                        ), {});
                        if (Object.keys(r).length > 0) {
                            var o = k(r)
                              , a = (0,
                            d.combineReducers)(o);
                            return (0,
                            d.createStore)(a, {}, (0,
                            d.compose)((0,
                            d.applyMiddleware)(y.Z), n.g.window && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : function(e) {
                                return e
                            }
                            ))
                        }
                        return (0,
                        d.createStore)((function(e) {
                            return e
                        }
                        ), t)
                    }(o, g),
                    t
                }
                return (0,
                o.Z)(c, [{
                    key: "render",
                    value: function() {
                        return this.store ? g(f.Provider, {
                            store: this.store
                        }, g(e, this.props)) : g(e, this.props)
                    }
                }]),
                c
            }(p.Component);
            return t.displayName = (0,
            b.G)("withRedux", e),
            t.getInitialProps = (0,
            b.W)(e),
            t
        }
    },
    41978: function(e, t, n) {
        "use strict";
        n.d(t, {
            U: function() {
                return l
            }
        });
        var r = n(809)
          , o = n.n(r)
          , a = n(92447)
          , i = n(32200)
          , c = {
            logName: "LaunchDarkly"
        }
          , u = {
            key: "hitch",
            anonymous: !0
        };
        function l(e, t) {
            return s.apply(this, arguments)
        }
        function s() {
            return (s = (0,
            a.Z)(o().mark((function e(t, n) {
                var r, a, l = arguments;
                return o().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (r = l.length > 2 && void 0 !== l[2] ? l[2] : u,
                            !t) {
                                e.next = 12;
                                break
                            }
                            return e.prev = 2,
                            e.next = 5,
                            t.variation(n, r, !1);
                        case 5:
                            return a = e.sent,
                            e.abrupt("return", a);
                        case 9:
                            e.prev = 9,
                            e.t0 = e.catch(2),
                            i.an.error(JSON.stringify(e.t0), c);
                        case 12:
                            return e.abrupt("return", !1);
                        case 13:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[2, 9]])
            }
            )))).apply(this, arguments)
        }
    },
    56055: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            default: function() {
                return A
            }
        });
        var r = n(67294)
          , o = n(87212)
          , a = n.n(o)
          , i = n(94184)
          , c = n.n(i)
          , u = n(9990)
          , l = n(20674)
          , s = n(83503)
          , p = n(61988)
          , f = n(14377)
          , d = n(80232)
          , y = n(48258)
          , v = n(47557)
          , h = r.createElement
          , m = function(e) {
            var t = (0,
            r.useState)(!1)
              , n = t[0]
              , o = t[1]
              , a = e.model
              , i = a.section
              , u = a.items
              , m = e.asPath
              , b = e.pageType
              , g = (0,
            f.C2)(m, b)
              , O = function() {
                o(!n),
                !1 === n && ((0,
                y.fireUserInteraction)("view_footer_section_".concat(i), "click", "click"),
                (0,
                y.fireUtagLink)({
                    event_name: "view_footer_section"
                }))
            }
              , w = function(e, t, n) {
                return h("div", {
                    key: t,
                    className: "footer--row-section col-md-".concat(12 / n, " col-xs-12")
                }, e.map((function(e) {
                    var t = e.title
                      , n = e.link
                      , r = e.rel
                      , o = e.modalId
                      , a = (0,
                    v.GO)({
                        event_name: "footer_link",
                        event_label: e.link,
                        page_type: g
                    }, (0,
                    v.pS)("a", "footer", (0,
                    d.Fv)(e.title)));
                    return h(a, {
                        key: "footer-".concat(n),
                        href: n,
                        "aria-label": t,
                        title: t,
                        rel: r,
                        onClick: o ? function() {
                            return function(e) {
                                e && document.getElementById(e).getElementsByClassName("modal--toggle")[0].click()
                            }(o)
                        }
                        : null
                    }, h(s.Z, {
                        variant: "body14"
                    }, t))
                }
                )))
            }
              , P = c()("footer-section-container", "col-lg-".concat(2 * (null === u || void 0 === u ? void 0 : u.length)), "col-md-".concat((null === u || void 0 === u ? void 0 : u.length) > 1 ? "12 footer-section-container-single" : "4"), "col-xs-12");
            return h("div", {
                className: P
            }, h(s.Z, {
                as: "h3",
                variant: "eyebrow12",
                className: "footer--section-expand",
                "aria-label": "".concat(i, " Section"),
                tabIndex: "0"
            }, i), h(s.Z, {
                as: "h3",
                variant: "eyebrow12",
                role: "button",
                "aria-label": "".concat(i, " Section"),
                tabIndex: "0",
                onClick: O,
                onKeyDown: (0,
                p.P)(O),
                onMouseDown: p.W,
                className: "footer--section-expand-mobile",
                "aria-expanded": n
            }, i, h(l.Z, {
                className: "footer__icon-plus-mobile ".concat(n ? "footer__icon-plus-mobile-open" : "")
            })), h("div", {
                className: "footer-row-expandable ".concat(n ? "footer-row-expanded" : "footer-row-collapsed")
            }, null === u || void 0 === u ? void 0 : u.map((function(e, t) {
                var n = "footer-".concat(i, "-").concat(t);
                return w(e, n, u.length)
            }
            ))))
        }
          , b = n(84179)
          , g = n(50099)
          , O = n(61974)
          , w = n(93560)
          , P = (n(99611),
        r.createElement)
          , k = function(e) {
            var t = e.featureFlags
              , n = e.asPath
              , r = e.pageType
              , o = e.footerSects
              , a = e.modals
              , i = (0,
            O.mobileDetect)().match(g.USER_AGENTS_REGEX.GM)
              , u = c()("footer--legal-links-left", {
                hidden: i
            });
            return P("footer", {
                className: "cu-footer",
                role: "region",
                "aria-label": "Footer",
                id: "FooterLg"
            }, a && P("span", {
                className: "footer-modals"
            }, a.map((function(e) {
                return P(b.view, {
                    model: {
                        id: null === e || void 0 === e ? void 0 : e.id,
                        modalTitle: null === e || void 0 === e ? void 0 : e.title
                    },
                    className: null === e || void 0 === e ? void 0 : e.css_class,
                    key: null === e || void 0 === e ? void 0 : e.id
                }, P("div", null, (null === e || void 0 === e ? void 0 : e.body) && P("div", {
                    className: "modal-dialog__body",
                    dangerouslySetInnerHTML: {
                        __html: null === e || void 0 === e ? void 0 : e.body
                    }
                }), (null === e || void 0 === e ? void 0 : e.footer) && P("div", {
                    className: "modal-dialog__footer",
                    dangerouslySetInnerHTML: {
                        __html: null === e || void 0 === e ? void 0 : e.footer
                    }
                })))
            }
            ))), P("div", {
                className: "container-width"
            }, P("div", {
                className: "hulu-footer"
            }, P("div", {
                className: "footer--row footer--site-links"
            }, o.map((function(e, t) {
                return P(m, {
                    key: t,
                    model: e,
                    asPath: n,
                    pageType: r
                })
            }
            ))), P("div", {
                className: "footer--row footer--legal-links"
            }, P("div", {
                className: u
            }, !i && P(w.w, {
                asPath: n,
                featureFlags: t,
                pageType: r
            })), P("div", {
                className: "footer--legal-links-right"
            }, P(w.P, {
                asPath: n,
                pageType: r,
                featureFlags: t
            }))))))
        }
          , S = n(95776)
          , j = r.createElement
          , E = function(e) {
            var t = e.asPath
              , n = e.featureFlags
              , r = e.options
              , o = e.pageType
              , a = e.footerSects
              , i = e.modals;
            switch (o) {
            case g.CMS_PAGETYPE.start:
                return j(S.Z, {
                    asPath: t,
                    featureFlags: n,
                    pageType: o
                });
            case g.CMS_PAGETYPE.micro:
                return "big" === r.footer ? j(k, {
                    asPath: t,
                    featureFlags: n,
                    footerSects: a,
                    pageType: o,
                    modals: i
                }) : "small" === r.footer ? j(S.Z, {
                    asPath: t,
                    featureFlags: n,
                    pageType: o
                }) : null;
            default:
                return j(k, {
                    asPath: t,
                    featureFlags: n,
                    footerSects: a,
                    pageType: o,
                    modals: i
                })
            }
        }
          , Z = n(73398)
          , D = n(47169)
          , _ = r.createElement
          , x = function(e) {
            var t, n, o, i, l, s, p, f, d = e.asPath, y = e.pageType, v = e.query, h = e.featureFlags, m = e.latestSeason, b = e.appsFlyerBannerKey, g = e.layout, w = e.cartAbandonment, P = e.geodata, k = e.user, S = (k = void 0 === k ? {} : k).isSubscriber, j = e.host, x = g.components, A = g.locale, C = g.options, T = (0,
            O.mobileDetect)().mobile() && b, R = c()("content-wrapper", {
                "content-wrapper--brand": null !== (t = null === C || void 0 === C ? void 0 : C.enableBrand) && void 0 !== t && t
            }), I = null !== (n = null === C || void 0 === C ? void 0 : C.displayTheme) && void 0 !== n ? n : "", N = h.hasOneTrustScriptEnabled, L = (0,
            O.isDevOrStagingEnvironment)() ? Z.fW : Z.lv, F = (null === h || void 0 === h ? void 0 : h.hasEdnaLoginOnPWAEnabled) && d.match(/\/app.*/) || (null === C || void 0 === C ? void 0 : C.disableFooter) || "";
            (0,
            r.useEffect)((function() {
                var t, n, r;
                (0,
                D.sd)({
                    allowSubscriberTraffic: null !== (t = null === e || void 0 === e || null === (n = e.layout) || void 0 === n || null === (r = n.options) || void 0 === r ? void 0 : r.allowSubscriberTraffic) && void 0 !== t && t,
                    isSubscriber: S,
                    pathname: window.location.pathname
                }) && (window.location = "/");
                var o = document.createElement("script");
                return N && (o.async = !0,
                o.innerHTML = "function OptanonWrapper() {}",
                document.body.appendChild(o)),
                function() {
                    document.body.removeChild(o)
                }
            }
            ), [N]);
            return g && g.components ? _("div", {
                className: c()("page", {
                    theme__dark: "dark" === I
                })
            }, T && _(a(), {
                bannerKey: b
            }), _("div", {
                className: R
            }, function() {
                var e, t = null !== (e = null === C || void 0 === C ? void 0 : C.enableBrand) && void 0 !== e && e, n = null === C || void 0 === C ? void 0 : C.contentOverrides, r = d ? d.split("?")[0] : null;
                return x.map((function(e, o) {
                    var a = (0,
                    u.X)(e.type);
                    return a ? _(a, {
                        key: o,
                        model: e,
                        locale: A,
                        enableBrand: t,
                        displayTheme: I,
                        asPath: r,
                        query: v,
                        featureFlags: h,
                        pageType: y,
                        latestSeason: m,
                        cartAbandonment: w,
                        contentOverrides: n,
                        geodata: P,
                        host: j
                    }) : null
                }
                ))
            }()), !F && _(E, {
                options: C,
                asPath: d,
                featureFlags: h,
                footerSects: null !== (o = null === g || void 0 === g || null === (i = g.bigFooter) || void 0 === i || null === (l = i[0]) || void 0 === l ? void 0 : l.sections) && void 0 !== o ? o : [],
                pageType: y,
                modals: null !== (s = null === g || void 0 === g || null === (p = g.bigFooter) || void 0 === p || null === (f = p[0]) || void 0 === f ? void 0 : f.modals) && void 0 !== s ? s : []
            }), N && _(r.Fragment, null, L)) : null
        };
        x.getInitialProps = function(e) {
            var t, n, r, o, a, i = e.req, c = e.query, u = e.asPath, l = e.pathname;
            return {
                asPath: u,
                pageType: (0,
                d.C2)(null !== (t = null === i || void 0 === i || null === (n = i.layout) || void 0 === n || null === (r = n.options) || void 0 === r ? void 0 : r.pageType) && void 0 !== t ? t : "", l.substring(1)),
                query: c,
                appsFlyerBannerKey: null === i || void 0 === i || null === (o = i.appsFlyer) || void 0 === o ? void 0 : o.bannerKey,
                host: (null === i || void 0 === i || null === (a = i.headers) || void 0 === a ? void 0 : a.host) || g.HOST_PROD
            }
        }
        ;
        var A = x
    },
    99611: function() {}
}]);
//# sourceMappingURL=521-cc0a679d87d6af7b99f2.js.map
