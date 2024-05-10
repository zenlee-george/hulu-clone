(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[214], {
    11913: function(t, e, n) {
        "use strict";
        n.r(e),
        n.d(e, {
            datadogRum: function() {
                return ar
            }
        });
        var r = n(70655)
          , i = function(t) {
            return Array.isArray(t)
        }
          , o = function(t) {
            return !Array.isArray(t) && "object" === typeof t && null !== t
        };
        function a() {
            for (var t, e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n];
            for (var r = 0, i = e; r < i.length; r++) {
                var o = i[r];
                void 0 !== o && null !== o && (t = c(t, o, u()))
            }
            return t
        }
        function s(t) {
            return c(void 0, t, u())
        }
        function u() {
            if ("undefined" !== typeof WeakSet) {
                var t = new WeakSet;
                return {
                    hasAlreadyBeenSeen: function(e) {
                        var n = t.has(e);
                        return n || t.add(e),
                        n
                    }
                }
            }
            var e = [];
            return {
                hasAlreadyBeenSeen: function(t) {
                    var n = e.indexOf(t) >= 0;
                    return n || e.push(t),
                    n
                }
            }
        }
        function c(t, e, n) {
            if (void 0 === e)
                return t;
            if (!o(e) && !i(e))
                return e;
            if (!n.hasAlreadyBeenSeen(e)) {
                if (o(e) && (void 0 === t || o(t))) {
                    var r = t || {};
                    for (var a in e)
                        Object.prototype.hasOwnProperty.call(e, a) && (r[a] = c(r[a], e[a], n));
                    return r
                }
                if (i(e) && (void 0 === t || i(t))) {
                    (r = t || []).length = Math.max(r.length, e.length);
                    for (var s = 0; s < e.length; s += 1)
                        r[s] = c(r[s], e[s], n);
                    return r
                }
                return e
            }
        }
        var d, f = "agent", l = "console", p = "custom", h = "network", _ = "source";
        function m(t, e, n) {
            return t && (void 0 !== t.message || e instanceof Error) ? {
                message: t.message || "Empty message",
                stack: v(t),
                type: t.name
            } : {
                message: n + " " + mt(e),
                stack: "No stack, consider using an instance of Error",
                type: t && t.name
            }
        }
        function v(t) {
            var e = g(t);
            return t.stack.forEach((function(t) {
                var n = "?" === t.func ? "<anonymous>" : t.func
                  , r = t.args && t.args.length > 0 ? "(" + t.args.join(", ") + ")" : ""
                  , i = t.line ? ":" + t.line : ""
                  , o = t.line && t.column ? ":" + t.column : "";
                e += "\n  at " + n + r + " @ " + t.url + i + o
            }
            )),
            e
        }
        function g(t) {
            return (t.name || "Error") + ": " + t.message
        }
        function y(t) {
            return Et(t) ? ht(1e6 * t, 0) : t
        }
        function E() {
            return performance.now()
        }
        function T(t, e) {
            return e - t
        }
        function b(t) {
            return Math.floor(S() + t)
        }
        function S() {
            return void 0 === d && (d = performance.timing.navigationStart),
            d
        }
        var R = /[^\u0000-\u007F]/
          , C = function() {
            function t(t, e, n) {
                void 0 === n && (n = !1),
                this.endpointUrl = t,
                this.bytesLimit = e,
                this.withBatchTime = n
            }
            return t.prototype.send = function(t, e) {
                var n = this.withBatchTime ? function(t) {
                    return t + (-1 === t.indexOf("?") ? "?" : "&") + "batch_time=" + (new Date).getTime() + "&m_time=" + b(E())
                }(this.endpointUrl) : this.endpointUrl;
                if (navigator.sendBeacon && e < this.bytesLimit)
                    try {
                        if (navigator.sendBeacon(n, t))
                            return
                    } catch (i) {
                        !function(t) {
                            D || (D = !0,
                            nt(t))
                        }(i)
                    }
                var r = new XMLHttpRequest;
                r.open("POST", n, !0),
                r.send(t)
            }
            ,
            t
        }();
        var D = !1;
        var w = function() {
            function t(t, e, n, r, i, o) {
                void 0 === o && (o = _t),
                this.request = t,
                this.maxSize = e,
                this.bytesLimit = n,
                this.maxMessageSize = r,
                this.flushTimeout = i,
                this.beforeUnloadCallback = o,
                this.pushOnlyBuffer = [],
                this.upsertBuffer = {},
                this.bufferBytesSize = 0,
                this.bufferMessageCount = 0,
                this.flushOnVisibilityHidden(),
                this.flushPeriodically()
            }
            return t.prototype.add = function(t) {
                this.addOrUpdate(t)
            }
            ,
            t.prototype.upsert = function(t, e) {
                this.addOrUpdate(t, e)
            }
            ,
            t.prototype.flush = function() {
                if (0 !== this.bufferMessageCount) {
                    var t = (0,
                    r.__spreadArrays)(this.pushOnlyBuffer, function(t) {
                        var e = [];
                        return Object.keys(t).forEach((function(n) {
                            e.push(t[n])
                        }
                        )),
                        e
                    }(this.upsertBuffer));
                    this.request.send(t.join("\n"), this.bufferBytesSize),
                    this.pushOnlyBuffer = [],
                    this.upsertBuffer = {},
                    this.bufferBytesSize = 0,
                    this.bufferMessageCount = 0
                }
            }
            ,
            t.prototype.sizeInBytes = function(t) {
                return R.test(t) ? void 0 !== window.TextEncoder ? (new TextEncoder).encode(t).length : new Blob([t]).size : t.length
            }
            ,
            t.prototype.addOrUpdate = function(t, e) {
                var n = this.process(t)
                  , r = n.processedMessage
                  , i = n.messageBytesSize;
                i >= this.maxMessageSize ? console.warn("Discarded a message whose size was bigger than the maximum allowed size " + this.maxMessageSize + "KB.") : (this.hasMessageFor(e) && this.remove(e),
                this.willReachedBytesLimitWith(i) && this.flush(),
                this.push(r, i, e),
                this.isFull() && this.flush())
            }
            ,
            t.prototype.process = function(t) {
                var e = mt(t);
                return {
                    processedMessage: e,
                    messageBytesSize: this.sizeInBytes(e)
                }
            }
            ,
            t.prototype.push = function(t, e, n) {
                this.bufferMessageCount > 0 && (this.bufferBytesSize += 1),
                void 0 !== n ? this.upsertBuffer[n] = t : this.pushOnlyBuffer.push(t),
                this.bufferBytesSize += e,
                this.bufferMessageCount += 1
            }
            ,
            t.prototype.remove = function(t) {
                var e = this.upsertBuffer[t];
                delete this.upsertBuffer[t];
                var n = this.sizeInBytes(e);
                this.bufferBytesSize -= n,
                this.bufferMessageCount -= 1,
                this.bufferMessageCount > 0 && (this.bufferBytesSize -= 1)
            }
            ,
            t.prototype.hasMessageFor = function(t) {
                return void 0 !== t && void 0 !== this.upsertBuffer[t]
            }
            ,
            t.prototype.willReachedBytesLimitWith = function(t) {
                return this.bufferBytesSize + t + 1 >= this.bytesLimit
            }
            ,
            t.prototype.isFull = function() {
                return this.bufferMessageCount === this.maxSize || this.bufferBytesSize >= this.bytesLimit
            }
            ,
            t.prototype.flushPeriodically = function() {
                var t = this;
                setTimeout(J((function() {
                    t.flush(),
                    t.flushPeriodically()
                }
                )), this.flushTimeout)
            }
            ,
            t.prototype.flushOnVisibilityHidden = function() {
                var t = this;
                navigator.sendBeacon && (Ct(window, "beforeunload", this.beforeUnloadCallback),
                Ct(document, "visibilitychange", (function() {
                    "hidden" === document.visibilityState && t.flush()
                }
                )),
                Ct(window, "beforeunload", (function() {
                    return t.flush()
                }
                )))
            }
            ,
            t
        }()
          , O = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;
        function k(t) {
            if (x) {
                if (N === t)
                    return;
                Y()
            }
            var e = q(t);
            throw x = e,
            N = t,
            setTimeout(J((function() {
                N === t && Y()
            }
            )), e.incomplete ? 2e3 : 0),
            t
        }
        var N, x, I, U, A, B = [];
        function L(t) {
            !function() {
                if (U)
                    return;
                I = window.onerror,
                window.onerror = J(P),
                U = !0
            }(),
            function() {
                if (A)
                    return;
                null !== window.onunhandledrejection ? window.onunhandledrejection : void 0,
                window.onunhandledrejection = J(G),
                A = !0
            }(),
            B.push(t)
        }
        function M(t, e, n) {
            var r;
            if (B.forEach((function(i) {
                try {
                    i(t, e, n)
                } catch (o) {
                    r = o
                }
            }
            )),
            r)
                throw r
        }
        function P(t, e, n, r, i) {
            if (x)
                H(x, e, n),
                Y();
            else if (i)
                M(q(i), !0, i);
            else {
                var o, a = {
                    url: e,
                    column: r,
                    line: n
                }, s = t;
                if ("[object String]" === {}.toString.call(t)) {
                    var u = O.exec(s);
                    u && (o = u[1],
                    s = u[2])
                }
                M({
                    name: o,
                    message: "string" === typeof s ? s : void 0,
                    stack: [a]
                }, !0, t)
            }
            return !!I && I.apply(this, arguments)
        }
        function G(t) {
            var e = t.reason || "Empty reason";
            M(q(e), !0, e)
        }
        function Y() {
            var t = x
              , e = N;
            x = void 0,
            N = void 0,
            M(t, !1, e)
        }
        var $ = "?";
        function q(t, e) {
            var n, r = void 0 === e ? 0 : +e;
            try {
                if (n = function(t) {
                    var e = W(t, "stacktrace");
                    if (!e)
                        return;
                    for (var n, r = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, i = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i, o = e.split("\n"), a = [], s = 0; s < o.length; s += 2) {
                        var u = void 0;
                        r.exec(o[s]) ? u = {
                            args: [],
                            column: void 0,
                            func: (n = r.exec(o[s]))[3],
                            line: +n[1],
                            url: n[2]
                        } : i.exec(o[s]) && (u = {
                            args: (n = i.exec(o[s]))[5] ? n[5].split(",") : [],
                            column: +n[2],
                            func: n[3] || n[4],
                            line: +n[1],
                            url: n[6]
                        }),
                        u && (!u.func && u.line && (u.func = $),
                        u.context = [o[s + 1]],
                        a.push(u))
                    }
                    if (!a.length)
                        return;
                    return {
                        stack: a,
                        message: W(t, "message"),
                        name: W(t, "name")
                    }
                }(t))
                    return n
            } catch (i) {
                if (j)
                    throw i
            }
            try {
                if (n = function(t) {
                    var e = W(t, "stack");
                    if (!e)
                        return;
                    for (var n, r, i, o, a = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, s = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|capacitor|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i, u = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, c = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, d = /\((\S*)(?::(\d+))(?::(\d+))\)/, f = e.split("\n"), l = [], p = 0, h = f.length; p < h; p += 1) {
                        if (a.exec(f[p])) {
                            var _ = (i = a.exec(f[p]))[2] && 0 === i[2].indexOf("native");
                            n = i[2] && 0 === i[2].indexOf("eval"),
                            r = d.exec(i[2]),
                            n && r && (i[2] = r[1],
                            i[3] = r[2],
                            i[4] = r[3]),
                            o = {
                                args: _ ? [i[2]] : [],
                                column: i[4] ? +i[4] : void 0,
                                func: i[1] || $,
                                line: i[3] ? +i[3] : void 0,
                                url: _ ? void 0 : i[2]
                            }
                        } else if (u.exec(f[p]))
                            o = {
                                args: [],
                                column: (i = u.exec(f[p]))[4] ? +i[4] : void 0,
                                func: i[1] || $,
                                line: +i[3],
                                url: i[2]
                            };
                        else {
                            if (!s.exec(f[p]))
                                continue;
                            n = (i = s.exec(f[p]))[3] && i[3].indexOf(" > eval") > -1,
                            r = c.exec(i[3]),
                            n && r ? (i[3] = r[1],
                            i[4] = r[2],
                            i[5] = void 0) : 0 !== p || i[5] || K(t.columnNumber) || (l[0].column = t.columnNumber + 1),
                            o = {
                                args: i[2] ? i[2].split(",") : [],
                                column: i[5] ? +i[5] : void 0,
                                func: i[1] || $,
                                line: i[4] ? +i[4] : void 0,
                                url: i[3]
                            }
                        }
                        !o.func && o.line && (o.func = $),
                        l.push(o)
                    }
                    if (!l.length)
                        return;
                    return {
                        stack: l,
                        message: W(t, "message"),
                        name: W(t, "name")
                    }
                }(t))
                    return n
            } catch (i) {
                if (j)
                    throw i
            }
            try {
                if (n = function(t) {
                    var e = W(t, "message");
                    if (!e)
                        return;
                    var n = e.split("\n");
                    if (n.length < 4)
                        return;
                    var r, i = /^\s*Line (\d+) of linked script ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i, o = /^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i, a = /^\s*Line (\d+) of function script\s*$/i, s = [], u = window && window.document && window.document.getElementsByTagName("script"), c = [];
                    for (var d in u)
                        V(u, d) && !u[d].src && c.push(u[d]);
                    for (var f = 2; f < n.length; f += 2) {
                        var l = void 0;
                        if (i.exec(n[f]))
                            l = {
                                args: [],
                                column: void 0,
                                func: (r = i.exec(n[f]))[3],
                                line: +r[1],
                                url: r[2]
                            };
                        else if (o.exec(n[f]))
                            l = {
                                args: [],
                                column: void 0,
                                func: (r = o.exec(n[f]))[4],
                                line: +r[1],
                                url: r[3]
                            };
                        else if (a.exec(n[f])) {
                            r = a.exec(n[f]),
                            l = {
                                url: window.location.href.replace(/#.*$/, ""),
                                args: [],
                                column: void 0,
                                func: "",
                                line: +r[1]
                            }
                        }
                        l && (l.func || (l.func = $),
                        l.context = [n[f + 1]],
                        s.push(l))
                    }
                    if (!s.length)
                        return;
                    return {
                        stack: s,
                        message: n[0],
                        name: W(t, "name")
                    }
                }(t))
                    return n
            } catch (i) {
                if (j)
                    throw i
            }
            try {
                if (n = z(t, r + 1))
                    return n
            } catch (i) {
                if (j)
                    throw i
            }
            return {
                message: W(t, "message"),
                name: W(t, "name"),
                stack: []
            }
        }
        var F, j = !1;
        function H(t, e, n) {
            var r = {
                url: e,
                line: n ? +n : void 0
            };
            if (r.url && r.line) {
                t.incomplete = !1;
                var i = t.stack;
                if (i.length > 0 && i[0].url === r.url) {
                    if (i[0].line === r.line)
                        return !1;
                    if (!i[0].line && i[0].func === r.func)
                        return i[0].line = r.line,
                        i[0].context = r.context,
                        !1
                }
                return i.unshift(r),
                t.partial = !0,
                !0
            }
            return t.incomplete = !0,
            !1
        }
        function z(t, e) {
            for (var n, r, i = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, o = [], a = {}, s = !1, u = z.caller; u && !s; u = u.caller)
                u !== q && u !== k && (r = {
                    args: [],
                    column: void 0,
                    func: $,
                    line: void 0,
                    url: void 0
                },
                n = i.exec(u.toString()),
                u.name ? r.func = u.name : n && (r.func = n[1]),
                "undefined" === typeof r.func && (r.func = n ? n.input.substring(0, n.input.indexOf("{")) : void 0),
                a[u.toString()] ? s = !0 : a[u.toString()] = !0,
                o.push(r));
            e && o.splice(0, e);
            var c = {
                stack: o,
                message: W(t, "message"),
                name: W(t, "name")
            };
            return H(c, W(t, "sourceURL") || W(t, "fileName"), W(t, "line") || W(t, "lineNumber")),
            c
        }
        function W(t, e) {
            if ("object" === typeof t && t && e in t) {
                var n = t[e];
                return "string" === typeof n ? n : void 0
            }
        }
        function V(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        function K(t) {
            return "undefined" === typeof t
        }
        !function(t) {
            t.info = "info",
            t.error = "error"
        }(F || (F = {}));
        var Z, Q = {
            maxMessagesPerPage: 0,
            sentMessageCount: 0
        };
        function X(t) {
            if (t.internalMonitoringEndpoint) {
                var e = function(t) {
                    var e, n = r(t.internalMonitoringEndpoint);
                    void 0 !== t.replica && (e = r(t.replica.internalMonitoringEndpoint));
                    function r(e) {
                        return new w(new C(e,t.batchBytesLimit),t.maxBatchSize,t.batchBytesLimit,t.maxMessageSize,t.flushTimeout)
                    }
                    function i(t) {
                        return a({
                            date: (new Date).getTime(),
                            view: {
                                referrer: document.referrer,
                                url: window.location.href
                            }
                        }, void 0 !== Z ? Z() : {}, t)
                    }
                    return {
                        add: function(t) {
                            var r = i(t);
                            n.add(r),
                            e && e.add(r)
                        }
                    }
                }(t);
                !function(t) {
                    for (var e = [], n = 1; n < arguments.length; n++)
                        e[n - 1] = arguments[n];
                    e.forEach((function(e) {
                        for (var n in e)
                            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    }
                    ))
                }(Q, {
                    batch: e,
                    maxMessagesPerPage: t.maxInternalMonitoringMessagesPerPage,
                    sentMessageCount: 0
                }),
                function() {
                    var t = setInterval(J((function() {
                        var e = Date.now() - b(E());
                        if (Math.abs(e) > ut) {
                            clearInterval(t);
                            var n = b(0);
                            et("clock drift detected", {
                                debug: {
                                    navigationStartUTC: new Date(n).toUTCString(),
                                    timeSpent: Date.now() - n,
                                    drift: e
                                }
                            })
                        }
                    }
                    )), ct)
                }()
            }
            return {
                setExternalContextProvider: function(t) {
                    Z = t
                }
            }
        }
        function J(t) {
            return function() {
                return tt(t, this, arguments)
            }
        }
        function tt(t, e, n) {
            try {
                return t.apply(e, n)
            } catch (r) {
                ot(r);
                try {
                    nt(r)
                } catch (r) {
                    ot(r)
                }
            }
        }
        function et(t, e) {
            !function(t) {
                Q.debugMode && console.log("[MONITORING MESSAGE]", t)
            }(t),
            rt((0,
            r.__assign)((0,
            r.__assign)({
                message: t
            }, e), {
                status: F.info
            }))
        }
        function nt(t) {
            rt((0,
            r.__assign)((0,
            r.__assign)({}, function(t) {
                if (t instanceof Error) {
                    var e = q(t);
                    return {
                        error: {
                            kind: e.name,
                            stack: v(e)
                        },
                        message: e.message
                    }
                }
                return {
                    error: {
                        stack: "Not an instance of error"
                    },
                    message: "Uncaught " + mt(t)
                }
            }(t)), {
                status: F.error
            }))
        }
        function rt(t) {
            Q.batch && Q.sentMessageCount < Q.maxMessagesPerPage && (Q.sentMessageCount += 1,
            Q.batch.add(t))
        }
        function it(t) {
            Q.debugMode = t
        }
        function ot(t) {
            Q.debugMode && console.warn("[INTERNAL ERROR]", t)
        }
        var at, st, ut = 1e3, ct = 60 * ut, dt = 60 * ct;
        function ft(t, e, n) {
            var r, i, o = !n || void 0 === n.leading || n.leading, a = !n || void 0 === n.trailing || n.trailing, s = !1;
            return {
                throttled: function() {
                    for (var n = [], u = 0; u < arguments.length; u++)
                        n[u] = arguments[u];
                    s ? r = n : (o ? t.apply(void 0, n) : r = n,
                    s = !0,
                    i = setTimeout((function() {
                        a && r && t.apply(void 0, r),
                        s = !1,
                        r = void 0
                    }
                    ), e))
                },
                cancel: function() {
                    clearTimeout(i),
                    s = !1,
                    r = void 0
                }
            }
        }
        function lt(t) {
            return t ? (parseInt(t, 10) ^ 16 * Math.random() >> parseInt(t, 10) / 4).toString(16) : "10000000-1000-4000-8000-100000000000".replace(/[018]/g, lt)
        }
        function pt(t) {
            return 0 !== t && 100 * Math.random() <= t
        }
        function ht(t, e) {
            return +t.toFixed(e)
        }
        function _t() {}
        function mt(t, e, n) {
            if (null === t || void 0 === t)
                return JSON.stringify(t);
            var r = [!1, void 0];
            vt(t) && (r = [!0, t.toJSON],
            delete t.toJSON);
            var i, o, a = [!1, void 0];
            "object" === typeof t && vt(i = Object.getPrototypeOf(t)) && (a = [!0, i.toJSON],
            delete i.toJSON);
            try {
                o = JSON.stringify(t, e, n)
            } catch (kt) {
                o = "<error: unable to serialize object>"
            } finally {
                r[0] && (t.toJSON = r[1]),
                a[0] && (i.toJSON = a[1])
            }
            return o
        }
        function vt(t) {
            return "object" === typeof t && null !== t && t.hasOwnProperty("toJSON")
        }
        function gt(t, e) {
            return -1 !== t.indexOf(e)
        }
        function yt(t) {
            return Et(t) && t >= 0 && t <= 100
        }
        function Et(t) {
            return "number" === typeof t
        }
        function Tt(t) {
            return Object.keys(t).map((function(e) {
                return [e, t[e]]
            }
            ))
        }
        function bt(t) {
            return 0 === Object.keys(t).length
        }
        function St(t) {
            if (t.origin)
                return t.origin;
            var e = t.host.replace(/(:80|:443)$/, "");
            return t.protocol + "//" + e
        }
        function Rt(t, e) {
            var n = new RegExp("(?:^|;)\\s*" + e + "\\s*=\\s*([^;]+)").exec(t);
            return n ? n[1] : void 0
        }
        function Ct(t, e, n, r) {
            return Dt(t, [e], n, r)
        }
        function Dt(t, e, n, r) {
            var i = void 0 === r ? {} : r
              , o = i.once
              , a = i.capture
              , s = i.passive
              , u = J(o ? function(t) {
                d(),
                n(t)
            }
            : n)
              , c = s ? {
                capture: a,
                passive: s
            } : a;
            e.forEach((function(e) {
                return t.addEventListener(e, u, c)
            }
            ));
            var d = function() {
                return e.forEach((function(e) {
                    return t.removeEventListener(e, u, c)
                }
                ))
            };
            return {
                stop: d
            }
        }
        function wt(t, e) {
            document.readyState === t || "complete" === document.readyState ? e() : Ct(window, "complete" === t ? "load" : "DOMContentLoaded", e, {
                once: !0
            })
        }
        !function(t) {
            t.DOCUMENT = "document",
            t.XHR = "xhr",
            t.BEACON = "beacon",
            t.FETCH = "fetch",
            t.CSS = "css",
            t.JS = "js",
            t.IMAGE = "image",
            t.FONT = "font",
            t.MEDIA = "media",
            t.OTHER = "other"
        }(at || (at = {})),
        function(t) {
            t.FETCH = "fetch",
            t.XHR = "xhr"
        }(st || (st = {}));
        var Ot, kt, Nt = ut;
        function xt(t, e, n, r) {
            var i = new Date;
            i.setTime(i.getTime() + n);
            var o = "expires=" + i.toUTCString()
              , a = r && r.crossSite ? "none" : "strict"
              , s = r && r.domain ? ";domain=" + r.domain : ""
              , u = r && r.secure ? ";secure" : "";
            document.cookie = t + "=" + e + ";" + o + ";path=/;samesite=" + a + s + u
        }
        function It(t) {
            return Rt(document.cookie, t)
        }
        function Ut(t, e) {
            return function() {
                for (var n = [], r = 0; r < arguments.length; r++)
                    n[r] = arguments[r];
                try {
                    return t.apply(void 0, n)
                } catch (i) {
                    console.error(e, i)
                }
            }
        }
        var At = {
            alternate: {
                logs: "logs",
                rum: "rum",
                sessionReplay: "session-replay",
                trace: "trace"
            },
            classic: {
                logs: "browser",
                rum: "rum",
                sessionReplay: void 0,
                trace: "public-trace"
            }
        }
          , Bt = "eu"
          , Lt = "us"
          , Mt = ((kt = {})[Bt] = "datadoghq.eu",
        kt[Lt] = "datadoghq.com",
        kt)
          , Pt = [Mt[Lt], Mt[Bt]];
        function Gt(t, e) {
            var n = {
                buildMode: e.buildMode,
                clientToken: t.clientToken,
                env: t.env,
                proxyHost: t.proxyHost,
                sdkVersion: e.sdkVersion,
                service: t.service,
                site: t.site || Mt[t.datacenter || e.datacenter],
                version: t.version
            }
              , i = function(t, e) {
                return !e.useAlternateIntakeDomains && gt(Pt, t) ? "classic" : "alternate"
            }(n.site, t)
              , o = function(t, e, n) {
                if (e.proxyHost)
                    return ["https://" + e.proxyHost + "/v1/input/"];
                var r = [e.site];
                e.buildMode === qt.STAGING && n && r.push(Mt[Lt]);
                for (var i = [], o = Object.keys(At[t]), a = 0, s = r; a < s.length; a++)
                    for (var u = s[a], c = 0, d = o; c < d.length; c++) {
                        var f = d[c];
                        i.push("https://" + Yt(t, f, u) + "/v1/input/")
                    }
                return i
            }(i, n, void 0 !== t.replica)
              , a = {
                isIntakeUrl: function(t) {
                    return o.some((function(e) {
                        return 0 === t.indexOf(e)
                    }
                    ))
                },
                logsEndpoint: $t(i, "logs", n),
                rumEndpoint: $t(i, "rum", n),
                sessionReplayEndpoint: $t(i, "sessionReplay", n),
                traceEndpoint: $t(i, "trace", n)
            };
            if (t.internalMonitoringApiKey && (a.internalMonitoringEndpoint = $t(i, "logs", n, "browser-agent-internal-monitoring")),
            n.buildMode === qt.E2E_TEST && (a.internalMonitoringEndpoint = "<<< E2E INTERNAL MONITORING ENDPOINT >>>",
            a.logsEndpoint = "<<< E2E LOGS ENDPOINT >>>",
            a.rumEndpoint = "<<< E2E RUM ENDPOINT >>>",
            a.sessionReplayEndpoint = "<<< E2E SESSION REPLAY ENDPOINT >>>"),
            n.buildMode === qt.STAGING && void 0 !== t.replica) {
                var s = (0,
                r.__assign)((0,
                r.__assign)({}, n), {
                    applicationId: t.replica.applicationId,
                    clientToken: t.replica.clientToken,
                    site: Mt[Lt]
                });
                a.replica = {
                    applicationId: t.replica.applicationId,
                    internalMonitoringEndpoint: $t(i, "logs", s, "browser-agent-internal-monitoring"),
                    logsEndpoint: $t(i, "logs", s),
                    rumEndpoint: $t(i, "rum", s)
                }
            }
            return a
        }
        function Yt(t, e, n) {
            return "classic" === t && function(t, e) {
                var n = At.classic[t];
                return n && n + "-http-intake.logs." + e
            }(e, n) || function(t, e) {
                var n = At.alternate[t]
                  , r = e.split(".")
                  , i = r.pop()
                  , o = r.join("-") + "." + i;
                return n + ".browser-intake-" + o
            }(e, n)
        }
        function $t(t, e, n, r) {
            var i = "sdk_version:" + n.sdkVersion + (n.env ? ",env:" + n.env : "") + (n.service ? ",service:" + n.service : "") + (n.version ? ",version:" + n.version : "")
              , o = Yt(t, e, n.site)
              , a = n.proxyHost ? n.proxyHost : o
              , s = (n.proxyHost ? "ddhost=" + o + "&" : "") + "ddsource=" + (r || "browser") + "&ddtags=" + encodeURIComponent(i);
            return "https://" + a + "/v1/input/" + n.clientToken + "?" + s
        }
        var qt, Ft = {
            allowedTracingOrigins: [],
            maxErrorsByMinute: 3e3,
            maxInternalMonitoringMessagesPerPage: 15,
            resourceSampleRate: 100,
            sampleRate: 100,
            silentMultipleInit: !1,
            trackInteractions: !1,
            requestErrorResponseLengthLimit: 32768,
            flushTimeout: 30 * ut,
            maxBatchSize: 50,
            maxMessageSize: 262144,
            batchBytesLimit: 16384
        };
        function jt(t) {
            var e = {};
            return e.secure = function(t) {
                return !!t.useSecureSessionCookie || !!t.useCrossSiteSessionCookie
            }(t),
            e.crossSite = !!t.useCrossSiteSessionCookie,
            t.trackSessionAcrossSubdomains && (e.domain = function() {
                if (void 0 === Ot) {
                    for (var t = "dd_site_test_" + lt(), e = window.location.hostname.split("."), n = e.pop(); e.length && !It(t); )
                        n = e.pop() + "." + n,
                        xt(t, "test", ut, {
                            domain: n
                        });
                    Ot = n
                }
                return Ot
            }()),
            e
        }
        function Ht(t, e) {
            var n = function(t, e) {
                var n = Array.isArray(t.enableExperimentalFeatures) ? t.enableExperimentalFeatures : []
                  , i = (0,
                r.__assign)((0,
                r.__assign)({
                    beforeSend: t.beforeSend && Ut(t.beforeSend, "beforeSend threw an error:"),
                    cookieOptions: jt(t),
                    isEnabled: function(t) {
                        return gt(n, t)
                    },
                    service: t.service
                }, Gt(t, e)), Ft);
                return "allowedTracingOrigins"in t && (i.allowedTracingOrigins = t.allowedTracingOrigins),
                "sampleRate"in t && (i.sampleRate = t.sampleRate),
                "resourceSampleRate"in t && (i.resourceSampleRate = t.resourceSampleRate),
                "trackInteractions"in t && (i.trackInteractions = !!t.trackInteractions),
                i
            }(t, e);
            return {
                configuration: n,
                internalMonitoring: X(n)
            }
        }
        function zt(t) {
            return !!function(t) {
                if (void 0 === document.cookie || null === document.cookie)
                    return !1;
                try {
                    var e = "dd_cookie_test_" + lt()
                      , n = "test";
                    return xt(e, n, ut, t),
                    It(e) === n
                } catch (r) {
                    return console.error(r),
                    !1
                }
            }(t) || (console.warn("Cookies are not authorized, we will not send any data."),
            !1)
        }
        function Wt() {
            return "file:" !== window.location.protocol || (console.error("Execution is not allowed in the current context."),
            !1)
        }
        !function(t) {
            t.RELEASE = "release",
            t.STAGING = "staging",
            t.E2E_TEST = "e2e-test"
        }(qt || (qt = {}));
        var Vt, Kt, Zt, Qt, Xt = function() {
            function t(t) {
                void 0 === t && (t = 1e4),
                this.limit = t,
                this.buffer = []
            }
            return t.prototype.add = function(t) {
                this.buffer.push(t) > this.limit && this.buffer.splice(0, 1)
            }
            ,
            t.prototype.drain = function(t) {
                this.buffer.forEach((function(e) {
                    return t(e)
                }
                )),
                this.buffer.length = 0
            }
            ,
            t
        }();
        !function(t) {
            t.ACTION = "action",
            t.ERROR = "error",
            t.LONG_TASK = "long_task",
            t.VIEW = "view",
            t.RESOURCE = "resource"
        }(Vt || (Vt = {})),
        function(t) {
            t.INITIAL_LOAD = "initial_load",
            t.ROUTE_CHANGE = "route_change"
        }(Kt || (Kt = {})),
        function(t) {
            t.CLICK = "click",
            t.CUSTOM = "custom"
        }(Zt || (Zt = {})),
        function(t) {
            t[t.PERFORMANCE_ENTRY_COLLECTED = 0] = "PERFORMANCE_ENTRY_COLLECTED",
            t[t.AUTO_ACTION_CREATED = 1] = "AUTO_ACTION_CREATED",
            t[t.AUTO_ACTION_COMPLETED = 2] = "AUTO_ACTION_COMPLETED",
            t[t.AUTO_ACTION_DISCARDED = 3] = "AUTO_ACTION_DISCARDED",
            t[t.VIEW_CREATED = 4] = "VIEW_CREATED",
            t[t.VIEW_UPDATED = 5] = "VIEW_UPDATED",
            t[t.VIEW_ENDED = 6] = "VIEW_ENDED",
            t[t.REQUEST_STARTED = 7] = "REQUEST_STARTED",
            t[t.REQUEST_COMPLETED = 8] = "REQUEST_COMPLETED",
            t[t.SESSION_RENEWED = 9] = "SESSION_RENEWED",
            t[t.DOM_MUTATED = 10] = "DOM_MUTATED",
            t[t.BEFORE_UNLOAD = 11] = "BEFORE_UNLOAD",
            t[t.RAW_RUM_EVENT_COLLECTED = 12] = "RAW_RUM_EVENT_COLLECTED",
            t[t.RUM_EVENT_COLLECTED = 13] = "RUM_EVENT_COLLECTED",
            t[t.RECORD_STARTED = 14] = "RECORD_STARTED",
            t[t.RECORD_STOPPED = 15] = "RECORD_STOPPED"
        }(Qt || (Qt = {}));
        var Jt, te = function() {
            function t() {
                this.callbacks = {}
            }
            return t.prototype.notify = function(t, e) {
                var n = this.callbacks[t];
                n && n.forEach((function(t) {
                    return t(e)
                }
                ))
            }
            ,
            t.prototype.subscribe = function(t, e) {
                var n = this;
                return this.callbacks[t] || (this.callbacks[t] = []),
                this.callbacks[t].push(e),
                {
                    unsubscribe: function() {
                        n.callbacks[t] = n.callbacks[t].filter((function(t) {
                            return e !== t
                        }
                        ))
                    }
                }
            }
            ,
            t
        }();
        function ee(t) {
            var e, n = function() {
                var t, e = window;
                if (e.Zone) {
                    var n = e.Zone.__symbol__("MutationObserver");
                    t = e[n]
                }
                return t || (t = e.MutationObserver),
                t
            }();
            return n && (e = new n(J((function() {
                t.notify(Qt.DOM_MUTATED)
            }
            )))).observe(document.documentElement, {
                attributes: !0,
                characterData: !0,
                childList: !0,
                subtree: !0
            }),
            {
                stop: function() {
                    e && e.disconnect()
                }
            }
        }
        function ne(t) {
            return ie(t, St(window.location)).href
        }
        function re(t) {
            return St(ie(t))
        }
        function ie(t, e) {
            if (function() {
                if (void 0 !== Jt)
                    return Jt;
                try {
                    var t = new URL("http://test/path");
                    return Jt = "http://test/path" === t.href
                } catch (kt) {
                    Jt = !1
                }
                return Jt
            }())
                return void 0 !== e ? new URL(t,e) : new URL(t);
            if (void 0 === e && !/:/.test(t))
                throw new Error("Invalid URL: '" + t + "'");
            var n = document
              , r = n.createElement("a");
            if (void 0 !== e) {
                var i = (n = document.implementation.createHTMLDocument("")).createElement("base");
                i.href = e,
                n.head.appendChild(i),
                n.body.appendChild(r)
            }
            return r.href = t,
            r
        }
        var oe = "initial_document"
          , ae = [[at.DOCUMENT, function(t) {
            return oe === t
        }
        ], [at.XHR, function(t) {
            return "xmlhttprequest" === t
        }
        ], [at.FETCH, function(t) {
            return "fetch" === t
        }
        ], [at.BEACON, function(t) {
            return "beacon" === t
        }
        ], [at.CSS, function(t, e) {
            return /\.css$/i.test(e)
        }
        ], [at.JS, function(t, e) {
            return /\.js$/i.test(e)
        }
        ], [at.IMAGE, function(t, e) {
            return gt(["image", "img", "icon"], t) || null !== /\.(gif|jpg|jpeg|tiff|png|svg|ico)$/i.exec(e)
        }
        ], [at.FONT, function(t, e) {
            return null !== /\.(woff|eot|woff2|ttf)$/i.exec(e)
        }
        ], [at.MEDIA, function(t, e) {
            return gt(["audio", "video"], t) || null !== /\.(mp3|mp4)$/i.exec(e)
        }
        ]];
        function se(t) {
            var e = t.name;
            if (!function(t) {
                try {
                    return !!ie(t)
                } catch (o) {
                    return !1
                }
            }(e))
                return et('Failed to construct URL for "' + t.name + '"'),
                at.OTHER;
            for (var n = function(t) {
                var e = ie(t).pathname;
                return "/" === e[0] ? e : "/" + e
            }(e), r = 0, i = ae; r < i.length; r++) {
                var o = i[r]
                  , a = o[0];
                if ((0,
                o[1])(t.initiatorType, n))
                    return a
            }
            return at.OTHER
        }
        function ue() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
            for (var n = 1; n < t.length; n += 1)
                if (t[n - 1] > t[n])
                    return !1;
            return !0
        }
        function ce(t) {
            var e = t.duration
              , n = t.startTime
              , r = t.responseEnd;
            return y(0 === e && n < r ? T(n, r) : e)
        }
        function de(t) {
            var e = fe(t);
            if (e) {
                var n = e.startTime
                  , r = e.fetchStart
                  , i = e.redirectStart
                  , o = e.redirectEnd
                  , a = e.domainLookupStart
                  , s = e.domainLookupEnd
                  , u = e.connectStart
                  , c = e.secureConnectionStart
                  , d = e.connectEnd
                  , f = e.requestStart
                  , l = e.responseStart
                  , p = {
                    download: pe(n, l, e.responseEnd),
                    first_byte: pe(n, f, l)
                };
                return d !== r && (p.connect = pe(n, u, d),
                ue(u, c, d) && (p.ssl = pe(n, c, d))),
                s !== r && (p.dns = pe(n, a, s)),
                le(t) && (p.redirect = pe(n, i, o)),
                p
            }
        }
        function fe(t) {
            if (ue(t.startTime, t.fetchStart, t.domainLookupStart, t.domainLookupEnd, t.connectStart, t.connectEnd, t.requestStart, t.responseStart, t.responseEnd)) {
                if (!le(t))
                    return t;
                var e = t.redirectStart
                  , n = t.redirectEnd;
                if (e < t.startTime && (e = t.startTime),
                n < t.startTime && (n = t.fetchStart),
                ue(t.startTime, e, n, t.fetchStart))
                    return (0,
                    r.__assign)((0,
                    r.__assign)({}, t), {
                        redirectEnd: n,
                        redirectStart: e
                    })
            }
        }
        function le(t) {
            return t.fetchStart !== t.startTime
        }
        function pe(t, e, n) {
            return {
                duration: y(T(e, n)),
                start: y(T(t, e))
            }
        }
        function he(t) {
            if (t.startTime < t.responseStart)
                return t.decodedBodySize
        }
        function _e(t, e) {
            return e && !t.isIntakeUrl(e)
        }
        var me, ve = 2 * ct;
        function ge(t) {
            var e = function(t) {
                var e = t.querySelector("meta[name=dd-trace-id]")
                  , n = t.querySelector("meta[name=dd-trace-time]");
                return ye(e && e.content, n && n.content)
            }(t) || function(t) {
                var e = function(t) {
                    for (var e = 0; e < t.childNodes.length; e += 1) {
                        if (n = Ee(t.childNodes[e]))
                            return n
                    }
                    if (t.body)
                        for (e = t.body.childNodes.length - 1; e >= 0; e -= 1) {
                            var n, r = t.body.childNodes[e];
                            if (n = Ee(r))
                                return n;
                            if (!Te(r))
                                break
                        }
                }(t);
                if (!e)
                    return;
                return ye(Rt(e, "trace-id"), Rt(e, "trace-time"))
            }(t);
            if (e && !(e.traceTime <= Date.now() - ve))
                return e.traceId
        }
        function ye(t, e) {
            var n = e && Number(e);
            if (t && n)
                return {
                    traceId: t,
                    traceTime: n
                }
        }
        function Ee(t) {
            if (t && function(t) {
                return "#comment" === t.nodeName
            }(t)) {
                var e = /^\s*DATADOG;(.*?)\s*$/.exec(t.data);
                if (e)
                    return e[1]
            }
        }
        function Te(t) {
            return "#text" === t.nodeName
        }
        function be() {
            return void 0 !== window.performance && "getEntries"in performance
        }
        function Se(t) {
            return window.PerformanceObserver && void 0 !== PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.includes(t)
        }
        function Re(t, e) {
            var n;
            if (n = function(n) {
                we(t, e, n)
            }
            ,
            wt("interactive", (function() {
                var t, e = {
                    entryType: "resource",
                    initiatorType: oe,
                    traceId: ge(document)
                };
                if (Se("navigation") && performance.getEntriesByType("navigation").length > 0) {
                    var i = performance.getEntriesByType("navigation")[0];
                    t = (0,
                    r.__assign)((0,
                    r.__assign)({}, i.toJSON()), e)
                } else {
                    var o = Ce();
                    t = (0,
                    r.__assign)((0,
                    r.__assign)((0,
                    r.__assign)({}, o), {
                        decodedBodySize: 0,
                        duration: o.responseEnd,
                        name: window.location.href,
                        startTime: 0
                    }), e)
                }
                n(t)
            }
            )),
            be() && De(t, e, performance.getEntries()),
            window.PerformanceObserver) {
                new PerformanceObserver(J((function(n) {
                    return De(t, e, n.getEntries())
                }
                ))).observe({
                    entryTypes: ["resource", "navigation", "longtask", "paint", "largest-contentful-paint", "first-input", "layout-shift"]
                }),
                be() && "addEventListener"in performance && performance.addEventListener("resourcetimingbufferfull", (function() {
                    performance.clearResourceTimings()
                }
                ))
            }
            Se("navigation") || function(t) {
                function e() {
                    t((0,
                    r.__assign)((0,
                    r.__assign)({}, Ce()), {
                        entryType: "navigation"
                    }))
                }
                wt("complete", (function() {
                    setTimeout(J(e))
                }
                ))
            }((function(n) {
                we(t, e, n)
            }
            )),
            Se("first-input") || function(t) {
                var e = Date.now()
                  , n = !1
                  , r = Dt(window, ["click", "mousedown", "keydown", "touchstart", "pointerdown"], (function(t) {
                    if (t.cancelable) {
                        var e = {
                            entryType: "first-input",
                            processingStart: E(),
                            startTime: t.timeStamp
                        };
                        "pointerdown" === t.type ? i(e) : o(e)
                    }
                }
                ), {
                    passive: !0,
                    capture: !0
                }).stop;
                function i(t) {
                    Dt(window, ["pointerup", "pointercancel"], (function(e) {
                        "pointerup" === e.type && o(t)
                    }
                    ), {
                        once: !0
                    })
                }
                function o(i) {
                    if (!n) {
                        n = !0,
                        r();
                        var o = i.processingStart - i.startTime;
                        o >= 0 && o < Date.now() - e && t(i)
                    }
                }
            }((function(n) {
                we(t, e, n)
            }
            ))
        }
        function Ce() {
            var t = {}
              , e = performance.timing;
            for (var n in e)
                if (Et(e[n])) {
                    var r = n
                      , i = e[r];
                    t[r] = 0 === i ? 0 : i - S()
                }
            return t
        }
        function De(t, e, n) {
            n.forEach((function(n) {
                "resource" !== n.entryType && "navigation" !== n.entryType && "paint" !== n.entryType && "longtask" !== n.entryType && "largest-contentful-paint" !== n.entryType && "first-input" !== n.entryType && "layout-shift" !== n.entryType || we(t, e, n)
            }
            ))
        }
        function we(t, e, n) {
            (function(t) {
                return "navigation" === t.entryType && t.loadEventEnd <= 0
            }
            )(n) || function(t, e) {
                return "resource" === e.entryType && !_e(t, e.name)
            }(e, n) || t.notify(Qt.PERFORMANCE_ENTRY_COLLECTED, n)
        }
        function Oe(t, e, n) {
            var r = s(t)
              , i = n(r);
            return e.forEach((function(e) {
                var n = ke(t, e)
                  , i = ke(r, e);
                "string" === typeof n && "string" === typeof i && function(t, e, n) {
                    for (var r = t, i = e.split("."), o = 0; o < i.length; o += 1) {
                        var a = i[o];
                        if (!Ne(r, a))
                            return;
                        o !== i.length - 1 ? r = r[a] : r[a] = n
                    }
                }(t, e, i)
            }
            )),
            i
        }
        function ke(t, e) {
            for (var n = t, r = 0, i = e.split("."); r < i.length; r++) {
                var o = i[r];
                if (!Ne(n, o))
                    return;
                n = n[o]
            }
            return n
        }
        function Ne(t, e) {
            return "object" === typeof t && null !== t && e in t
        }
        !function(t) {
            t.SYNTHETICS = "synthetics",
            t.USER = "user"
        }(me || (me = {}));
        var xe = ["view.url", "view.referrer", "action.target.name", "error.message", "error.stack", "error.resource.url", "resource.url"];
        function Ie(t, e, n, r, i, o) {
            n.subscribe(Qt.RAW_RUM_EVENT_COLLECTED, (function(s) {
                var u, c = s.startTime, d = s.rawRumEvent, f = s.savedCommonContext, l = s.customerContext, p = i.findView(c);
                if (r.isTracked() && p && p.session.id) {
                    var h = i.findAction(c)
                      , _ = f || o()
                      , m = {
                        _dd: {
                            format_version: 2
                        },
                        application: {
                            id: t
                        },
                        date: Date.now(),
                        service: e.service,
                        session: {
                            type: void 0 === window._DATADOG_SYNTHETICS_BROWSER ? me.USER : me.SYNTHETICS
                        }
                    }
                      , v = (u = d,
                    -1 !== [Vt.ERROR, Vt.RESOURCE, Vt.LONG_TASK].indexOf(u.type) ? a(m, p, h, d) : a(m, p, d))
                      , g = a(_.context, l);
                    bt(g) || (v.context = g),
                    "has_replay"in v.session || (v.session.has_replay = _.hasReplay),
                    bt(_.user) || (v.usr = _.user),
                    function(t, e) {
                        if (e) {
                            var n = Oe(t, xe, e);
                            if (!1 === n && t.type !== Vt.VIEW)
                                return !1;
                            !1 === n && console.warn("Can't dismiss view events using beforeSend!")
                        }
                        return !0
                    }(v, e.beforeSend) && n.notify(Qt.RUM_EVENT_COLLECTED, v)
                }
            }
            ))
        }
        var Ue = function() {
            function t() {
                this.observers = []
            }
            return t.prototype.subscribe = function(t) {
                this.observers.push(t)
            }
            ,
            t.prototype.notify = function(t) {
                this.observers.forEach((function(e) {
                    return e(t)
                }
                ))
            }
            ,
            t
        }();
        var Ae = 15 * ct
          , Be = 4 * dt
          , Le = ct;
        function Me(t, e, n) {
            var r = function(t, e) {
                var n, r, i = !1, o = function() {
                    i = !0,
                    clearTimeout(n),
                    n = setTimeout((function() {
                        i = !1
                    }
                    ), Nt)
                };
                return {
                    get: function() {
                        return i || (r = It(t),
                        o()),
                        r
                    },
                    set: function(n, i) {
                        xt(t, n, i, e),
                        r = n,
                        o()
                    }
                }
            }("_dd_s", t);
            !function(t) {
                var e = t.get()
                  , n = It("_dd")
                  , r = It("_dd_r")
                  , i = It("_dd_l");
                if (!e) {
                    var o = {};
                    n && (o.id = n),
                    i && /^[01]$/.test(i) && (o.logs = i),
                    r && /^[012]$/.test(r) && (o.rum = r),
                    $e(o, t)
                }
            }(r);
            var i = new Ue
              , o = Ye(r).id
              , a = ft(J((function() {
                var t = Ye(r)
                  , a = n(t[e])
                  , s = a.trackingType
                  , u = a.isTracked;
                t[e] = s,
                u && !t.id && (t.id = lt(),
                t.created = String(Date.now())),
                $e(t, r),
                u && o !== t.id && (o = t.id,
                i.notify())
            }
            )), Nt).throttled;
            return a(),
            function(t) {
                var e = Dt(window, ["click", "touchstart", "keydown", "scroll"], t, {
                    capture: !0,
                    passive: !0
                }).stop;
                Fe.push(e)
            }(a),
            function(t) {
                var e = J((function() {
                    "visible" === document.visibilityState && t()
                }
                ))
                  , n = Ct(document, "visibilitychange", e).stop;
                Fe.push(n);
                var r = setInterval(e, Le);
                Fe.push((function() {
                    clearInterval(r)
                }
                ))
            }((function() {
                $e(Ye(r), r)
            }
            )),
            {
                getId: function() {
                    return Ye(r).id
                },
                getTrackingType: function() {
                    return Ye(r)[e]
                },
                renewObservable: i
            }
        }
        var Pe = /^([a-z]+)=([a-z0-9-]+)$/
          , Ge = "&";
        function Ye(t) {
            var e = function(t) {
                var e = t.get()
                  , n = {};
                (function(t) {
                    return void 0 !== t && (-1 !== t.indexOf("&") || Pe.test(t))
                }
                )(e) && e.split(Ge).forEach((function(t) {
                    var e = Pe.exec(t);
                    if (null !== e) {
                        var r = e[1]
                          , i = e[2];
                        n[r] = i
                    }
                }
                ));
                return n
            }(t);
            return function(t) {
                return (void 0 === t.created || Date.now() - Number(t.created) < Be) && (void 0 === t.expire || Date.now() < Number(t.expire))
            }(e) ? e : (qe(t),
            {})
        }
        function $e(t, e) {
            if (bt(t))
                qe(e);
            else {
                t.expire = String(Date.now() + Ae);
                var n = Tt(t).map((function(t) {
                    return t[0] + "=" + t[1]
                }
                )).join(Ge);
                e.set(n, Ae)
            }
        }
        function qe(t) {
            t.set("", 0)
        }
        var Fe = [];
        var je, He = Be, ze = 5 * ct, We = ct;
        var Ve, Ke, Ze, Qe, Xe, Je = [], tn = [];
        function en() {
            return je || (Ve = XMLHttpRequest.prototype.open,
            Ke = XMLHttpRequest.prototype.send,
            Ze = XMLHttpRequest.prototype.abort,
            XMLHttpRequest.prototype.open = function(t, e) {
                var n = this;
                return tt((function() {
                    n._datadog_xhr = {
                        method: t,
                        startTime: -1,
                        url: ne(e)
                    }
                }
                )),
                Ve.apply(this, arguments)
            }
            ,
            XMLHttpRequest.prototype.send = function() {
                var t = this;
                return tt((function() {
                    if (t._datadog_xhr) {
                        var e = t._datadog_xhr;
                        e.startTime = E(),
                        e.isAborted = !1;
                        var n = t.onreadystatechange;
                        t.onreadystatechange = function() {
                            this.readyState === XMLHttpRequest.DONE && tt(o),
                            n && n.apply(this, arguments)
                        }
                        ;
                        var i = !1
                          , o = function() {
                            if (!i) {
                                i = !0;
                                var n = (0,
                                r.__assign)((0,
                                r.__assign)({}, e), {
                                    duration: T(e.startTime, E()),
                                    response: t.response,
                                    status: t.status
                                });
                                tn.forEach((function(t) {
                                    return t(n)
                                }
                                ))
                            }
                        };
                        t.addEventListener("loadend", J(o)),
                        Je.forEach((function(n) {
                            return n(e, t)
                        }
                        ))
                    }
                }
                )),
                Ke.apply(this, arguments)
            }
            ,
            XMLHttpRequest.prototype.abort = function() {
                var t = this;
                return tt((function() {
                    t._datadog_xhr && (t._datadog_xhr.isAborted = !0)
                }
                )),
                Ze.apply(this, arguments)
            }
            ,
            je = {
                beforeSend: function(t) {
                    Je.push(t)
                },
                onRequestComplete: function(t) {
                    tn.push(t)
                }
            }),
            je
        }
        var nn = []
          , rn = [];
        function on() {
            return Qe || (!function() {
                if (!window.fetch)
                    return;
                Xe = window.fetch,
                window.fetch = function(t, e) {
                    var n, r = tt(an, null, [t, e]);
                    return r ? tt(sn, null, [n = Xe.call(this, r.input, r.init), r]) : n = Xe.call(this, t, e),
                    n
                }
            }(),
            Qe = {
                beforeSend: function(t) {
                    nn.push(t)
                },
                onRequestComplete: function(t) {
                    rn.push(t)
                }
            }),
            Qe
        }
        function an(t, e) {
            var n = e && e.method || "object" === typeof t && t.method || "GET"
              , r = ne("object" === typeof t && t.url || t)
              , i = {
                init: e,
                input: t,
                method: n,
                startTime: E(),
                url: r
            };
            return nn.forEach((function(t) {
                return t(i)
            }
            )),
            i
        }
        function sn(t, e) {
            var n = this
              , i = function(t) {
                return (0,
                r.__awaiter)(n, void 0, void 0, (function() {
                    var n, i;
                    return (0,
                    r.__generator)(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            return e.duration = T(e.startTime, E()),
                            "stack"in t || t instanceof Error ? (e.status = 0,
                            e.response = v(q(t)),
                            e.isAborted = t instanceof DOMException && t.code === DOMException.ABORT_ERR,
                            rn.forEach((function(t) {
                                return t(e)
                            }
                            )),
                            [3, 6]) : [3, 1];
                        case 1:
                            if (!("status"in t))
                                return [3, 6];
                            n = void 0,
                            r.label = 2;
                        case 2:
                            return r.trys.push([2, 4, , 5]),
                            [4, t.clone().text()];
                        case 3:
                            return n = r.sent(),
                            [3, 5];
                        case 4:
                            return i = r.sent(),
                            n = "Unable to retrieve response: " + i,
                            [3, 5];
                        case 5:
                            e.response = n,
                            e.responseType = t.type,
                            e.status = t.status,
                            e.isAborted = !1,
                            rn.forEach((function(t) {
                                return t(e)
                            }
                            )),
                            r.label = 6;
                        case 6:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            };
            t.then(J(i), J(i))
        }
        function un(t) {
            0 === t.status && (t.traceId = void 0,
            t.spanId = void 0)
        }
        function cn(t, e, n) {
            var r;
            void 0 !== dn() && function(t, e) {
                for (var n = re(e), r = 0, i = t.allowedTracingOrigins; r < i.length; r++) {
                    var o = i[r];
                    if (n === o || o instanceof RegExp && o.test(n))
                        return !0
                }
                return !1
            }(t, e.url) && (e.traceId = new fn,
            e.spanId = new fn,
            n((r = e.traceId,
            {
                "x-datadog-origin": "rum",
                "x-datadog-parent-id": e.spanId.toDecimalString(),
                "x-datadog-sampled": "1",
                "x-datadog-sampling-priority": "1",
                "x-datadog-trace-id": r.toDecimalString()
            })))
        }
        function dn() {
            return window.crypto || window.msCrypto
        }
        var fn = function() {
            function t() {
                this.buffer = new Uint8Array(8),
                dn().getRandomValues(this.buffer),
                this.buffer[0] = 127 & this.buffer[0]
            }
            return t.prototype.toString = function(t) {
                for (var e = this.readInt32(0), n = this.readInt32(4), r = ""; ; ) {
                    var i = e % t * 4294967296 + n;
                    if (e = Math.floor(e / t),
                    n = Math.floor(i / t),
                    r = (i % t).toString(t) + r,
                    !e && !n)
                        break
                }
                return r
            }
            ,
            t.prototype.toDecimalString = function() {
                return this.toString(10)
            }
            ,
            t.prototype.readInt32 = function(t) {
                return 16777216 * this.buffer[t] + (this.buffer[t + 1] << 16) + (this.buffer[t + 2] << 8) + this.buffer[t + 3]
            }
            ,
            t
        }()
          , ln = 1;
        function pn(t, e) {
            var n = function(t) {
                return {
                    clearTracingIfCancelled: un,
                    traceFetch: function(e) {
                        return cn(t, e, (function(t) {
                            var n;
                            if (e.input instanceof Request && !(null === (n = e.init) || void 0 === n ? void 0 : n.headers))
                                e.input = new Request(e.input),
                                Object.keys(t).forEach((function(n) {
                                    e.input.headers.append(n, t[n])
                                }
                                ));
                            else {
                                e.init = (0,
                                r.__assign)({}, e.init);
                                var i = [];
                                e.init.headers instanceof Headers ? e.init.headers.forEach((function(t, e) {
                                    i.push([e, t])
                                }
                                )) : Array.isArray(e.init.headers) ? e.init.headers.forEach((function(t) {
                                    i.push(t)
                                }
                                )) : e.init.headers && Object.keys(e.init.headers).forEach((function(t) {
                                    i.push([t, e.init.headers[t]])
                                }
                                )),
                                e.init.headers = i.concat(Tt(t))
                            }
                        }
                        ))
                    },
                    traceXhr: function(e, n) {
                        return cn(t, e, (function(t) {
                            Object.keys(t).forEach((function(e) {
                                n.setRequestHeader(e, t[e])
                            }
                            ))
                        }
                        ))
                    }
                }
            }(e);
            !function(t, e, n) {
                var r = en();
                r.beforeSend((function(r, i) {
                    _e(e, r.url) && (n.traceXhr(r, i),
                    r.requestIndex = hn(),
                    t.notify(Qt.REQUEST_STARTED, {
                        requestIndex: r.requestIndex
                    }))
                }
                )),
                r.onRequestComplete((function(r) {
                    _e(e, r.url) && (n.clearTracingIfCancelled(r),
                    t.notify(Qt.REQUEST_COMPLETED, {
                        duration: r.duration,
                        method: r.method,
                        requestIndex: r.requestIndex,
                        response: r.response,
                        spanId: r.spanId,
                        startTime: r.startTime,
                        status: r.status,
                        traceId: r.traceId,
                        type: st.XHR,
                        url: r.url
                    }))
                }
                ))
            }(t, e, n),
            function(t, e, n) {
                var r = on();
                r.beforeSend((function(r) {
                    _e(e, r.url) && (n.traceFetch(r),
                    r.requestIndex = hn(),
                    t.notify(Qt.REQUEST_STARTED, {
                        requestIndex: r.requestIndex
                    }))
                }
                )),
                r.onRequestComplete((function(r) {
                    _e(e, r.url) && (n.clearTracingIfCancelled(r),
                    t.notify(Qt.REQUEST_COMPLETED, {
                        duration: r.duration,
                        method: r.method,
                        requestIndex: r.requestIndex,
                        response: r.response,
                        responseType: r.responseType,
                        spanId: r.spanId,
                        startTime: r.startTime,
                        status: r.status,
                        traceId: r.traceId,
                        type: st.FETCH,
                        url: r.url
                    }))
                }
                ))
            }(t, e, n)
        }
        function hn() {
            var t = ln;
            return ln += 1,
            t
        }
        function _n(t, e) {
            void 0 === e && (e = _t);
            var n = {
                errorCount: 0,
                longTaskCount: 0,
                resourceCount: 0,
                userActionCount: 0
            }
              , r = t.subscribe(Qt.RUM_EVENT_COLLECTED, (function(t) {
                switch (t.type) {
                case Vt.ERROR:
                    n.errorCount += 1,
                    e(n);
                    break;
                case Vt.ACTION:
                    n.userActionCount += 1,
                    e(n);
                    break;
                case Vt.LONG_TASK:
                    n.longTaskCount += 1,
                    e(n);
                    break;
                case Vt.RESOURCE:
                    n.resourceCount += 1,
                    e(n)
                }
            }
            ));
            return {
                stop: function() {
                    r.unsubscribe()
                },
                eventCounts: n
            }
        }
        function mn(t, e) {
            var n = function(t) {
                var e, n = new Ue, r = [], i = 0;
                function o() {
                    n.notify({
                        isBusy: i > 0
                    })
                }
                return r.push(t.subscribe(Qt.DOM_MUTATED, (function() {
                    return o()
                }
                ))),
                r.push(t.subscribe(Qt.PERFORMANCE_ENTRY_COLLECTED, (function(t) {
                    "resource" === t.entryType && o()
                }
                ))),
                r.push(t.subscribe(Qt.REQUEST_STARTED, (function(t) {
                    void 0 === e && (e = t.requestIndex),
                    i += 1,
                    o()
                }
                ))),
                r.push(t.subscribe(Qt.REQUEST_COMPLETED, (function(t) {
                    void 0 === e || t.requestIndex < e || (i -= 1,
                    o())
                }
                ))),
                {
                    observable: n,
                    stop: function() {
                        r.forEach((function(t) {
                            return t.unsubscribe()
                        }
                        ))
                    }
                }
            }(t)
              , r = n.observable
              , i = n.stop
              , o = function(t, e, n) {
                var r, i = !1, o = setTimeout(J((function() {
                    return u(!1, 0)
                }
                )), 100), a = setTimeout(J((function() {
                    return u(!0, E())
                }
                )), 1e4);
                t.subscribe((function(t) {
                    var e = t.isBusy;
                    clearTimeout(o),
                    clearTimeout(r);
                    var n = E();
                    e || (r = setTimeout(J((function() {
                        return u(!0, n)
                    }
                    )), 100))
                }
                ));
                var s = function() {
                    i = !0,
                    clearTimeout(o),
                    clearTimeout(r),
                    clearTimeout(a),
                    e()
                };
                function u(t, e) {
                    i || (s(),
                    n(t, e))
                }
                return {
                    stop: s
                }
            }(r, i, e).stop;
            return {
                stop: function() {
                    o(),
                    i()
                }
            }
        }
        function vn(t) {
            return function(t) {
                var e;
                if (function() {
                    void 0 === Tn && (Tn = "closest"in HTMLElement.prototype);
                    return Tn
                }())
                    e = t.closest("[data-dd-action-name]");
                else
                    for (var n = t; n; ) {
                        if (n.hasAttribute(gn)) {
                            e = n;
                            break
                        }
                        n = n.parentElement
                    }
                if (!e)
                    return;
                return Dn(Cn(e.getAttribute(gn).trim()))
            }(t) || Rn(t, bn) || Rn(t, Sn) || ""
        }
        var gn = "data-dd-action-name";
        var yn, En, Tn, bn = [function(t) {
            if (function() {
                void 0 === En && (En = "labels"in HTMLInputElement.prototype);
                return En
            }()) {
                if ("labels"in t && t.labels && t.labels.length > 0)
                    return wn(t.labels[0])
            } else if (t.id) {
                var e = t.ownerDocument && t.ownerDocument.querySelector('label[for="' + t.id.replace('"', '\\"') + '"]');
                return e && wn(e)
            }
        }
        , function(t) {
            if ("INPUT" === t.nodeName) {
                var e = t
                  , n = e.getAttribute("type");
                if ("button" === n || "submit" === n || "reset" === n)
                    return e.value
            }
        }
        , function(t) {
            if ("BUTTON" === t.nodeName || "LABEL" === t.nodeName || "button" === t.getAttribute("role"))
                return wn(t)
        }
        , function(t) {
            return t.getAttribute("aria-label")
        }
        , function(t) {
            var e = t.getAttribute("aria-labelledby");
            if (e)
                return e.split(/\s+/).map((function(e) {
                    return function(t, e) {
                        return t.ownerDocument ? t.ownerDocument.getElementById(e) : null
                    }(t, e)
                }
                )).filter((function(t) {
                    return Boolean(t)
                }
                )).map(wn).join(" ")
        }
        , function(t) {
            return t.getAttribute("alt")
        }
        , function(t) {
            return t.getAttribute("name")
        }
        , function(t) {
            return t.getAttribute("title")
        }
        , function(t) {
            return t.getAttribute("placeholder")
        }
        , function(t) {
            if ("options"in t && t.options.length > 0)
                return wn(t.options[0])
        }
        ], Sn = [function(t) {
            return wn(t)
        }
        ];
        function Rn(t, e) {
            for (var n = t, r = 0; r <= 10 && n && "BODY" !== n.nodeName && "HTML" !== n.nodeName && "HEAD" !== n.nodeName; ) {
                for (var i = 0, o = e; i < o.length; i++) {
                    var a = (0,
                    o[i])(n);
                    if ("string" === typeof a) {
                        var s = a.trim();
                        if (s)
                            return Dn(Cn(s))
                    }
                }
                if ("FORM" === n.nodeName)
                    break;
                n = n.parentElement,
                r += 1
            }
        }
        function Cn(t) {
            return t.replace(/\s+/g, " ")
        }
        function Dn(t) {
            return t.length > 100 ? function(t, e) {
                var n = t.charCodeAt(e - 1);
                return n >= 55296 && n <= 56319 ? t.slice(0, e + 1) : t.slice(0, e)
            }(t, 100) + " [...]" : t
        }
        function wn(t) {
            if (!t.isContentEditable) {
                if ("innerText"in t) {
                    var e = t.innerText;
                    if (!function() {
                        if (void 0 === yn) {
                            var t = document.createElement("style");
                            t.textContent = "*";
                            var e = document.createElement("div");
                            e.appendChild(t),
                            document.body.appendChild(e),
                            yn = "" === e.innerText,
                            document.body.removeChild(e)
                        }
                        return yn
                    }())
                        for (var n = t.querySelectorAll("script, style"), r = 0; r < n.length; r += 1) {
                            var i = n[r].innerText;
                            i.trim().length > 0 && (e = e.replace(i, ""))
                        }
                    return e
                }
                return t.textContent
            }
        }
        function On(t) {
            var e = function(t) {
                var e, n;
                return {
                    create: function(r, i) {
                        if (!e) {
                            var o = new In(t,r,i);
                            e = o,
                            n = mn(t, (function(t, n) {
                                t ? o.complete(n) : o.discard(),
                                e = void 0
                            }
                            ))
                        }
                    },
                    discardCurrent: function() {
                        e && (n.stop(),
                        e.discard(),
                        e = void 0)
                    }
                }
            }(t);
            t.subscribe(Qt.VIEW_CREATED, (function() {
                e.discardCurrent()
            }
            ));
            var n = Ct(window, "click", (function(t) {
                if (t.target instanceof Element) {
                    var n = vn(t.target);
                    n && e.create(Zt.CLICK, n)
                }
            }
            ), {
                capture: !0
            }).stop;
            return {
                stop: function() {
                    e.discardCurrent(),
                    n()
                }
            }
        }
        var kn, Nn, xn, In = function() {
            function t(t, e, n) {
                this.lifeCycle = t,
                this.type = e,
                this.name = n,
                this.id = lt(),
                this.startTime = E(),
                this.eventCountsSubscription = _n(t),
                this.lifeCycle.notify(Qt.AUTO_ACTION_CREATED, {
                    id: this.id,
                    startTime: this.startTime
                })
            }
            return t.prototype.complete = function(t) {
                var e = this.eventCountsSubscription.eventCounts;
                this.lifeCycle.notify(Qt.AUTO_ACTION_COMPLETED, {
                    counts: {
                        errorCount: e.errorCount,
                        longTaskCount: e.longTaskCount,
                        resourceCount: e.resourceCount
                    },
                    duration: T(this.startTime, t),
                    id: this.id,
                    name: this.name,
                    startTime: this.startTime,
                    type: this.type
                }),
                this.eventCountsSubscription.stop()
            }
            ,
            t.prototype.discard = function() {
                this.lifeCycle.notify(Qt.AUTO_ACTION_DISCARDED),
                this.eventCountsSubscription.stop()
            }
            ,
            t
        }();
        function Un(t, e) {
            return t.subscribe(Qt.AUTO_ACTION_COMPLETED, (function(e) {
                return t.notify(Qt.RAW_RUM_EVENT_COLLECTED, An(e))
            }
            )),
            e.trackInteractions && On(t),
            {
                addAction: function(e, n) {
                    t.notify(Qt.RAW_RUM_EVENT_COLLECTED, (0,
                    r.__assign)({
                        savedCommonContext: n
                    }, An(e)))
                }
            }
        }
        function An(t) {
            var e = Bn(t) ? {
                action: {
                    error: {
                        count: t.counts.errorCount
                    },
                    id: t.id,
                    loading_time: y(t.duration),
                    long_task: {
                        count: t.counts.longTaskCount
                    },
                    resource: {
                        count: t.counts.resourceCount
                    }
                }
            } : void 0;
            return {
                customerContext: Bn(t) ? void 0 : t.context,
                rawRumEvent: a({
                    action: {
                        target: {
                            name: t.name
                        },
                        type: t.type
                    },
                    date: b(t.startTime),
                    type: Vt.ACTION
                }, e),
                startTime: t.startTime
            }
        }
        function Bn(t) {
            return t.type !== Zt.CUSTOM
        }
        function Ln(t) {
            if (!kn) {
                var e = new Ue;
                !function(t, e) {
                    function n(n, r) {
                        t.isIntakeUrl(r.url) || t.isEnabled("remove-network-errors") && r.isAborted || !function(t) {
                            return 0 === t.status && "opaque" !== t.responseType
                        }(r) && !function(t) {
                            return t.status >= 500
                        }(r) || e.notify({
                            message: Gn(n) + " error " + r.method + " " + r.url,
                            resource: {
                                method: r.method,
                                statusCode: r.status,
                                url: r.url
                            },
                            source: h,
                            stack: Pn(r.response, t) || "Failed to load",
                            startTime: r.startTime
                        })
                    }
                    en().onRequestComplete((function(t) {
                        return n(st.XHR, t)
                    }
                    )),
                    on().onRequestComplete((function(t) {
                        return n(st.FETCH, t)
                    }
                    ))
                }(t, e),
                function(t) {
                    Nn = console.error,
                    console.error = J((function() {
                        for (var e = [], n = 0; n < arguments.length; n++)
                            e[n] = arguments[n];
                        Nn.apply(console, e),
                        t.notify((0,
                        r.__assign)((0,
                        r.__assign)({}, Mn(e)), {
                            source: l,
                            startTime: E()
                        }))
                    }
                    ))
                }(e),
                function(t) {
                    L((function(e, n, r) {
                        var i = m(e, r, "Uncaught")
                          , o = i.stack
                          , a = i.message
                          , s = i.type;
                        t.notify({
                            message: a,
                            stack: o,
                            type: s,
                            source: _,
                            startTime: E()
                        })
                    }
                    ))
                }(e),
                kn = function(t, e) {
                    var n = 0
                      , r = new Ue;
                    return e.subscribe((function(e) {
                        n < t.maxErrorsByMinute ? (n += 1,
                        r.notify(e)) : n === t.maxErrorsByMinute && (n += 1,
                        r.notify({
                            message: "Reached max number of errors by minute: " + t.maxErrorsByMinute,
                            source: f,
                            startTime: E()
                        }))
                    }
                    )),
                    setInterval((function() {
                        return n = 0
                    }
                    ), ct),
                    r
                }(t, e)
            }
            return kn
        }
        function Mn(t) {
            var e = function(t, e) {
                for (var n = 0; n < t.length; n += 1) {
                    var r = t[n];
                    if (e(r, n, t))
                        return r
                }
            }(t, (function(t) {
                return t instanceof Error
            }
            ));
            return {
                message: (0,
                r.__spreadArrays)(["console error:"], t).map((function(t) {
                    return function(t) {
                        if ("string" === typeof t)
                            return t;
                        if (t instanceof Error)
                            return g(q(t));
                        return mt(t, void 0, 2)
                    }(t)
                }
                )).join(" "),
                stack: e ? v(q(e)) : void 0
            }
        }
        function Pn(t, e) {
            return t && t.length > e.requestErrorResponseLengthLimit ? t.substring(0, e.requestErrorResponseLengthLimit) + "..." : t
        }
        function Gn(t) {
            return st.XHR === t ? "XHR" : "Fetch"
        }
        function Yn(t, e) {
            return function(t, e) {
                return e.subscribe((function(e) {
                    return t.notify(Qt.RAW_RUM_EVENT_COLLECTED, $n(e))
                }
                )),
                {
                    addError: function(e, n) {
                        var i = e.error
                          , o = e.startTime
                          , a = e.context
                          , s = function(t, e, n) {
                            var i = t instanceof Error ? q(t) : void 0;
                            return (0,
                            r.__assign)({
                                startTime: e,
                                source: n
                            }, m(i, t, "Provided"))
                        }(i, o, e.source);
                        t.notify(Qt.RAW_RUM_EVENT_COLLECTED, (0,
                        r.__assign)({
                            customerContext: a,
                            savedCommonContext: n
                        }, $n(s)))
                    }
                }
            }(t, Ln(e))
        }
        function $n(t) {
            return {
                rawRumEvent: {
                    date: b(t.startTime),
                    error: {
                        message: t.message,
                        resource: t.resource ? {
                            method: t.resource.method,
                            status_code: t.resource.statusCode,
                            url: t.resource.url
                        } : void 0,
                        source: t.source,
                        stack: t.stack,
                        type: t.type
                    },
                    type: Vt.ERROR
                },
                startTime: t.startTime
            }
        }
        function qn(t) {
            if (performance && "getEntriesByName"in performance) {
                var e = performance.getEntriesByName(t.url, "resource");
                if (e.length && "toJSON"in e[0]) {
                    var n, r = e.map((function(t) {
                        return t.toJSON()
                    }
                    )).filter(fe).filter((function(e) {
                        return n = e,
                        r = t.startTime,
                        i = Fn(t),
                        n.startTime >= r && Fn(n) <= i;
                        var n, r, i
                    }
                    ));
                    return 1 === r.length ? r[0] : 2 === r.length && Fn((n = r)[0]) <= n[1].startTime ? r[1] : void 0
                }
            }
        }
        function Fn(t) {
            return t.startTime + t.duration
        }
        function jn(t, e) {
            t.subscribe(Qt.REQUEST_COMPLETED, (function(n) {
                e.isTrackedWithResource() && t.notify(Qt.RAW_RUM_EVENT_COLLECTED, function(t) {
                    var e = t.type === st.XHR ? at.XHR : at.FETCH
                      , n = qn(t)
                      , r = n ? n.startTime : t.startTime
                      , i = n ? Hn(n) : void 0
                      , o = function(t) {
                        if (!t.traceId || !t.spanId)
                            return;
                        return {
                            _dd: {
                                span_id: t.spanId.toDecimalString(),
                                trace_id: t.traceId.toDecimalString()
                            },
                            resource: {
                                id: lt()
                            }
                        }
                    }(t)
                      , s = a({
                        date: b(r),
                        resource: {
                            type: e,
                            duration: y(t.duration),
                            method: t.method,
                            status_code: t.status,
                            url: t.url
                        },
                        type: Vt.RESOURCE
                    }, o, i);
                    return {
                        startTime: r,
                        rawRumEvent: s
                    }
                }(n))
            }
            )),
            t.subscribe(Qt.PERFORMANCE_ENTRY_COLLECTED, (function(n) {
                var r;
                e.isTrackedWithResource() && "resource" === n.entryType && ("xmlhttprequest" !== (r = n).initiatorType && "fetch" !== r.initiatorType) && t.notify(Qt.RAW_RUM_EVENT_COLLECTED, function(t) {
                    var e = se(t)
                      , n = Hn(t)
                      , r = function(t) {
                        return t.traceId ? {
                            _dd: {
                                trace_id: t.traceId
                            }
                        } : void 0
                    }(t)
                      , i = a({
                        date: b(t.startTime),
                        resource: {
                            type: e,
                            url: t.name
                        },
                        type: Vt.RESOURCE
                    }, r, n);
                    return {
                        startTime: t.startTime,
                        rawRumEvent: i
                    }
                }(n))
            }
            ))
        }
        function Hn(t) {
            return {
                resource: (0,
                r.__assign)({
                    duration: ce(t),
                    size: he(t)
                }, de(t))
            }
        }
        function zn(t) {
            return void 0 === t && (t = window),
            xn || ("hidden" === document.visibilityState ? xn = {
                timeStamp: 0
            } : (xn = {
                timeStamp: 1 / 0
            },
            Ct(t, "pagehide", (function(t) {
                var e = t.timeStamp;
                xn.timeStamp = e
            }
            ), {
                capture: !0,
                once: !0
            }).stop)),
            xn
        }
        function Wn(t, e) {
            var n;
            function i(t) {
                n = (0,
                r.__assign)((0,
                r.__assign)({}, n), t),
                e(n)
            }
            var o = function(t, e) {
                return {
                    stop: t.subscribe(Qt.PERFORMANCE_ENTRY_COLLECTED, (function(t) {
                        "navigation" === t.entryType && e({
                            domComplete: t.domComplete,
                            domContentLoaded: t.domContentLoadedEventEnd,
                            domInteractive: t.domInteractive,
                            loadEvent: t.loadEventEnd
                        })
                    }
                    )).unsubscribe
                }
            }(t, i).stop
              , a = function(t, e) {
                var n = zn();
                return {
                    stop: t.subscribe(Qt.PERFORMANCE_ENTRY_COLLECTED, (function(t) {
                        "paint" === t.entryType && "first-contentful-paint" === t.name && t.startTime < n.timeStamp && e(t.startTime)
                    }
                    )).unsubscribe
                }
            }(t, (function(t) {
                return i({
                    firstContentfulPaint: t
                })
            }
            )).stop
              , s = function(t, e, n) {
                var r = zn()
                  , i = 1 / 0
                  , o = Dt(e, ["pointerdown", "keydown"], (function(t) {
                    i = t.timeStamp
                }
                ), {
                    capture: !0,
                    once: !0
                }).stop
                  , a = t.subscribe(Qt.PERFORMANCE_ENTRY_COLLECTED, (function(t) {
                    "largest-contentful-paint" === t.entryType && t.startTime < i && t.startTime < r.timeStamp && n(t.startTime)
                }
                )).unsubscribe;
                return {
                    stop: function() {
                        o(),
                        a()
                    }
                }
            }(t, window, (function(t) {
                i({
                    largestContentfulPaint: t
                })
            }
            )).stop
              , u = function(t, e) {
                var n = zn();
                return {
                    stop: t.subscribe(Qt.PERFORMANCE_ENTRY_COLLECTED, (function(t) {
                        if ("first-input" === t.entryType && t.startTime < n.timeStamp) {
                            var r = T(t.startTime, t.processingStart);
                            e({
                                firstInputDelay: r >= 0 ? r : 0,
                                firstInputTime: t.startTime
                            })
                        }
                    }
                    )).unsubscribe
                }
            }(t, (function(t) {
                i({
                    firstInputDelay: t.firstInputDelay,
                    firstInputTime: t.firstInputTime
                })
            }
            )).stop;
            return {
                stop: function() {
                    o(),
                    a(),
                    s(),
                    u()
                }
            }
        }
        function Vn(t, e, n) {
            var r, i = {
                eventCounts: {
                    errorCount: 0,
                    longTaskCount: 0,
                    resourceCount: 0,
                    userActionCount: 0
                }
            }, o = _n(t, (function(t) {
                i.eventCounts = t,
                e()
            }
            )).stop, a = function(t, e) {
                var n = t === Kt.INITIAL_LOAD
                  , r = !0
                  , i = [];
                function o() {
                    !r && !n && i.length > 0 && e(Math.max.apply(Math, i))
                }
                return {
                    setLoadEvent: function(t) {
                        n && (n = !1,
                        i.push(t),
                        o())
                    },
                    setActivityLoadingTime: function(t) {
                        r && (r = !1,
                        void 0 !== t && i.push(t),
                        o())
                    }
                }
            }(n, (function(t) {
                i.loadingTime = t,
                e()
            }
            )), s = a.setActivityLoadingTime, u = a.setLoadEvent, c = function(t, e) {
                var n = E();
                return {
                    stop: mn(t, (function(t, r) {
                        e(t ? T(n, r) : void 0)
                    }
                    )).stop
                }
            }(t, s).stop;
            return Se("layout-shift") ? (i.cumulativeLayoutShift = 0,
            r = function(t, e) {
                return {
                    stop: t.subscribe(Qt.PERFORMANCE_ENTRY_COLLECTED, (function(t) {
                        "layout-shift" !== t.entryType || t.hadRecentInput || e(t.value)
                    }
                    )).unsubscribe
                }
            }(t, (function(t) {
                i.cumulativeLayoutShift = ht(i.cumulativeLayoutShift + t, 4),
                e()
            }
            )).stop) : r = _t,
            {
                stop: function() {
                    o(),
                    c(),
                    r()
                },
                setLoadEvent: u,
                viewMetrics: i
            }
        }
        function Kn(t) {
            var e, n = function(t) {
                var e = history.pushState;
                history.pushState = J((function() {
                    e.apply(this, arguments),
                    t()
                }
                ));
                var n = history.replaceState;
                history.replaceState = J((function() {
                    n.apply(this, arguments),
                    t()
                }
                ));
                var r = Ct(window, "popstate", t).stop;
                return {
                    stop: function() {
                        r(),
                        history.pushState = e,
                        history.replaceState = n
                    }
                }
            }(t).stop, r = (e = t,
            Ct(window, "hashchange", e)).stop;
            return {
                stop: function() {
                    n(),
                    r()
                }
            }
        }
        function Zn(t, e) {
            return t.pathname !== e.pathname || !function(t) {
                var e = t.substr(1);
                return !!document.getElementById(e)
            }(e.hash) && Qn(e.hash) !== Qn(t.hash)
        }
        function Qn(t) {
            var e = t.indexOf("?");
            return e < 0 ? t : t.slice(0, e)
        }
        var Xn = 5 * ct;
        function Jn(t, e, n, i, o, a, s) {
            void 0 === a && (a = E());
            var u, c = lt(), d = {}, f = {}, l = 0, p = (0,
            r.__assign)({}, e), h = n;
            t.notify(Qt.VIEW_CREATED, {
                id: c,
                startTime: a,
                location: p,
                referrer: o
            });
            var _ = ft(J(R), 3e3, {
                leading: !1
            })
              , m = _.throttled
              , v = _.cancel
              , g = Vn(t, m, i)
              , y = g.setLoadEvent
              , b = g.stop
              , S = g.viewMetrics;
            function R() {
                l += 1,
                t.notify(Qt.VIEW_UPDATED, (0,
                r.__assign)((0,
                r.__assign)({}, S), {
                    customTimings: f,
                    documentVersion: l,
                    id: c,
                    name: s,
                    loadingType: i,
                    location: p,
                    hasReplay: h,
                    referrer: o,
                    startTime: a,
                    timings: d,
                    duration: T(a, void 0 === u ? E() : u),
                    isActive: void 0 === u
                }))
            }
            return R(),
            {
                scheduleUpdate: m,
                end: function() {
                    u = E(),
                    b(),
                    t.notify(Qt.VIEW_ENDED)
                },
                getLocation: function() {
                    return p
                },
                triggerUpdate: function() {
                    v(),
                    R()
                },
                updateTimings: function(t) {
                    d = t,
                    void 0 !== t.loadEvent && y(t.loadEvent)
                },
                addTiming: function(t, e) {
                    f[function(t) {
                        var e = t.replace(/[^a-zA-Z0-9-_.@$]/g, "_");
                        e !== t && console.warn("Invalid timing name: " + t + ", sanitized to: " + e);
                        return e
                    }(t)] = T(a, e)
                },
                updateLocation: function(t) {
                    p = (0,
                    r.__assign)({}, t)
                },
                updateHasReplay: function(t) {
                    h = t
                },
                get url() {
                    return p.href
                }
            }
        }
        function tr(t, e) {
            return t.subscribe(Qt.VIEW_UPDATED, (function(e) {
                return t.notify(Qt.RAW_RUM_EVENT_COLLECTED, function(t) {
                    var e = {
                        _dd: {
                            document_version: t.documentVersion
                        },
                        date: b(t.startTime),
                        type: Vt.VIEW,
                        view: {
                            action: {
                                count: t.eventCounts.userActionCount
                            },
                            cumulative_layout_shift: t.cumulativeLayoutShift,
                            dom_complete: y(t.timings.domComplete),
                            dom_content_loaded: y(t.timings.domContentLoaded),
                            dom_interactive: y(t.timings.domInteractive),
                            error: {
                                count: t.eventCounts.errorCount
                            },
                            first_contentful_paint: y(t.timings.firstContentfulPaint),
                            first_input_delay: y(t.timings.firstInputDelay),
                            first_input_time: y(t.timings.firstInputTime),
                            is_active: t.isActive,
                            name: t.name,
                            largest_contentful_paint: y(t.timings.largestContentfulPaint),
                            load_event: y(t.timings.loadEvent),
                            loading_time: y(t.loadingTime),
                            loading_type: t.loadingType,
                            long_task: {
                                count: t.eventCounts.longTaskCount
                            },
                            resource: {
                                count: t.eventCounts.resourceCount
                            },
                            time_spent: y(t.duration)
                        },
                        session: {
                            has_replay: t.hasReplay || void 0
                        }
                    };
                    bt(t.customTimings) || (e.view.custom_timings = function(t, e) {
                        for (var n = {}, r = 0, i = Object.keys(t); r < i.length; r++) {
                            var o = i[r];
                            n[o] = e(t[o])
                        }
                        return n
                    }(t.customTimings, y));
                    return {
                        rawRumEvent: e,
                        startTime: t.startTime
                    }
                }(e))
            }
            )),
            function(t, e) {
                var n = !1
                  , r = function() {
                    var r = Jn(e, t, n, Kt.INITIAL_LOAD, document.referrer, 0)
                      , i = Wn(e, (function(t) {
                        r.updateTimings(t),
                        r.scheduleUpdate()
                    }
                    )).stop;
                    return {
                        initialView: r,
                        stop: i
                    }
                }()
                  , i = r.stop
                  , o = r.initialView
                  , a = Kn((function() {
                    if (Zn(o.getLocation(), t))
                        return o.end(),
                        o.triggerUpdate(),
                        void (o = u());
                    o.updateLocation(t),
                    o.triggerUpdate()
                }
                )).stop;
                e.subscribe(Qt.SESSION_RENEWED, (function() {
                    o.end(),
                    o = u()
                }
                )),
                e.subscribe(Qt.BEFORE_UNLOAD, (function() {
                    o.end(),
                    o.triggerUpdate()
                }
                )),
                e.subscribe(Qt.RECORD_STARTED, (function() {
                    n = !0,
                    o.updateHasReplay(!0)
                }
                )),
                e.subscribe(Qt.RECORD_STOPPED, (function() {
                    n = !1
                }
                ));
                var s = window.setInterval(J((function() {
                    o.triggerUpdate()
                }
                )), Xn);
                function u() {
                    return Jn(e, t, n, Kt.ROUTE_CHANGE, o.url)
                }
                return {
                    addTiming: function(t, e) {
                        void 0 === e && (e = E()),
                        o.addTiming(t, e),
                        o.triggerUpdate()
                    },
                    stop: function() {
                        i(),
                        a(),
                        o.end(),
                        clearInterval(s)
                    }
                }
            }(e, t)
        }
        var er;
        function nr(t, e) {
            var n = Me(t.cookieOptions, "rum", (function(e) {
                return function(t, e) {
                    var n;
                    n = function(t) {
                        return t === er.NOT_TRACKED || t === er.TRACKED_WITH_RESOURCES || t === er.TRACKED_WITHOUT_RESOURCES
                    }(e) ? e : pt(t.sampleRate) ? pt(t.resourceSampleRate) ? er.TRACKED_WITH_RESOURCES : er.TRACKED_WITHOUT_RESOURCES : er.NOT_TRACKED;
                    return {
                        trackingType: n,
                        isTracked: rr(n)
                    }
                }(t, e)
            }
            ));
            return n.renewObservable.subscribe((function() {
                e.notify(Qt.SESSION_RENEWED)
            }
            )),
            {
                getId: n.getId,
                isTracked: function() {
                    return void 0 !== n.getId() && rr(n.getTrackingType())
                },
                isTrackedWithResource: function() {
                    return void 0 !== n.getId() && n.getTrackingType() === er.TRACKED_WITH_RESOURCES
                }
            }
        }
        function rr(t) {
            return t === er.TRACKED_WITH_RESOURCES || t === er.TRACKED_WITHOUT_RESOURCES
        }
        function ir(t, e) {
            var n = function(t, e) {
                var n, r = o(t.rumEndpoint, (function() {
                    return e.notify(Qt.BEFORE_UNLOAD)
                }
                )), i = t.replica;
                void 0 !== i && (n = o(i.rumEndpoint));
                function o(e, n) {
                    return new w(new C(e,t.batchBytesLimit,!0),t.maxBatchSize,t.batchBytesLimit,t.maxMessageSize,t.flushTimeout,n)
                }
                function s(t) {
                    return a(t, {
                        application: {
                            id: i.applicationId
                        }
                    })
                }
                var u = !1;
                return {
                    add: function(t) {
                        u || (r.add(t),
                        n && n.add(s(t)))
                    },
                    stop: function() {
                        u = !0
                    },
                    upsert: function(t, e) {
                        u || (r.upsert(t, e),
                        n && n.upsert(s(t), e))
                    }
                }
            }(t, e);
            return e.subscribe(Qt.RUM_EVENT_COLLECTED, (function(t) {
                t.type === Vt.VIEW ? n.upsert(t, t.view.id) : n.add(t)
            }
            )),
            {
                stop: function() {
                    n.stop()
                }
            }
        }
        !function(t) {
            t.NOT_TRACKED = "0",
            t.TRACKED_WITH_RESOURCES = "1",
            t.TRACKED_WITHOUT_RESOURCES = "2"
        }(er || (er = {}));
        var or = {
            buildMode: "release",
            datacenter: "us",
            sdkVersion: "2.7.4"
        };
        var ar = function(t) {
            var e = !1
              , n = function() {
                var t = {};
                return {
                    get: function() {
                        return t
                    },
                    add: function(e, n) {
                        t[e] = n
                    },
                    remove: function(e) {
                        delete t[e]
                    },
                    set: function(e) {
                        t = e
                    }
                }
            }()
              , i = {}
              , o = function() {}
              , a = new Xt
              , u = function(t) {
                a.add([t, E()])
            }
              , c = new Xt
              , d = function(t) {
                c.add([t, m()])
            }
              , f = new Xt
              , l = function(t) {
                f.add([t, m()])
            };
            function m() {
                return s({
                    context: n.get(),
                    user: i
                })
            }
            var v = function(t) {
                var e = (0,
                r.__assign)((0,
                r.__assign)({}, t), {
                    onReady: function(t) {
                        t()
                    }
                });
                return Object.defineProperty(e, "_setDebug", {
                    get: function() {
                        return it
                    },
                    enumerable: !1
                }),
                e
            }({
                init: J((function(r) {
                    var s;
                    zt(jt(r)) && Wt() && function(t) {
                        if (e)
                            return t.silentMultipleInit || console.error("DD_RUM is already initialized."),
                            !1;
                        if (!t || !t.clientToken && !t.publicApiKey)
                            return console.error("Client Token is not configured, we will not send any data."),
                            !1;
                        if (!t.applicationId)
                            return console.error("Application ID is not configured, no RUM data will be collected."),
                            !1;
                        if (void 0 !== t.sampleRate && !yt(t.sampleRate))
                            return console.error("Sample Rate should be a number between 0 and 100"),
                            !1;
                        if (void 0 !== t.resourceSampleRate && !yt(t.resourceSampleRate))
                            return console.error("Resource Sample Rate should be a number between 0 and 100"),
                            !1;
                        if (Array.isArray(t.allowedTracingOrigins) && 0 !== t.allowedTracingOrigins.length && void 0 === t.service)
                            return console.error("Service need to be configured when tracing is enabled"),
                            !1;
                        return !0
                    }(r) && (r.publicApiKey && (r.clientToken = r.publicApiKey),
                    s = t(r, (function() {
                        return {
                            user: i,
                            context: n.get()
                        }
                    }
                    )),
                    d = s.addAction,
                    l = s.addError,
                    u = s.addTiming,
                    o = s.getInternalContext,
                    c.drain((function(t) {
                        var e = t[0]
                          , n = t[1];
                        return d(e, n)
                    }
                    )),
                    f.drain((function(t) {
                        var e = t[0]
                          , n = t[1];
                        return l(e, n)
                    }
                    )),
                    a.drain((function(t) {
                        var e = t[0]
                          , n = t[1];
                        return u(e, n)
                    }
                    )),
                    e = !0)
                }
                )),
                addRumGlobalContext: J(n.add),
                removeRumGlobalContext: J(n.remove),
                getRumGlobalContext: J(n.get),
                setRumGlobalContext: J(n.set),
                getInternalContext: J((function(t) {
                    return o(t)
                }
                )),
                addAction: J((function(t, e) {
                    d({
                        name: t,
                        context: s(e),
                        startTime: E(),
                        type: Zt.CUSTOM
                    })
                }
                )),
                addUserAction: function(t, e) {
                    v.addAction(t, e)
                },
                addError: J((function(t, e, n) {
                    var r;
                    void 0 === n && (n = p),
                    n === p || n === h || n === _ ? r = n : (console.error("DD_RUM.addError: Invalid source '" + n + "'"),
                    r = p),
                    l({
                        error: t,
                        context: s(e),
                        source: r,
                        startTime: E()
                    })
                }
                )),
                addTiming: J((function(t) {
                    u(t)
                }
                )),
                setUser: J((function(t) {
                    var e = function(t) {
                        if ("object" !== typeof t || !t)
                            return;
                        var e = s(t);
                        "id"in e && (e.id = String(e.id));
                        "name"in e && (e.name = String(e.name));
                        "email"in e && (e.email = String(e.email));
                        return e
                    }(t);
                    e ? i = e : console.error("Unsupported user:", t)
                }
                ))
            });
            return v
        }((function(t, e) {
            var n = new te
              , r = Ht(t, or)
              , i = r.configuration
              , o = r.internalMonitoring
              , s = nr(i, n);
            o.setExternalContextProvider((function() {
                return a({
                    application_id: t.applicationId
                }, c.findView(), e().context)
            }
            ));
            var u = function(t, e, n, r, i, o) {
                var a = function(t, e) {
                    var n, r, i, o = [], a = [];
                    t.subscribe(Qt.VIEW_CREATED, (function(t) {
                        n && o.unshift({
                            context: c(),
                            endTime: t.startTime,
                            startTime: n.startTime
                        }),
                        n = t,
                        i = e.getId()
                    }
                    )),
                    t.subscribe(Qt.VIEW_UPDATED, (function(t) {
                        n.id === t.id && (n = t)
                    }
                    )),
                    t.subscribe(Qt.AUTO_ACTION_CREATED, (function(t) {
                        r = t
                    }
                    )),
                    t.subscribe(Qt.AUTO_ACTION_COMPLETED, (function(t) {
                        r && a.unshift({
                            context: d(),
                            endTime: r.startTime + t.duration,
                            startTime: r.startTime
                        }),
                        r = void 0
                    }
                    )),
                    t.subscribe(Qt.AUTO_ACTION_DISCARDED, (function() {
                        r = void 0
                    }
                    )),
                    t.subscribe(Qt.SESSION_RENEWED, (function() {
                        o = [],
                        a = [],
                        n = void 0,
                        r = void 0
                    }
                    ));
                    var s = setInterval(J((function() {
                        u(o, He),
                        u(a, ze)
                    }
                    )), We);
                    function u(t, e) {
                        for (var n = performance.now() - e; t.length > 0 && t[t.length - 1].startTime < n; )
                            t.pop()
                    }
                    function c() {
                        return {
                            session: {
                                id: i
                            },
                            view: {
                                id: n.id,
                                name: n.name,
                                referrer: n.referrer,
                                url: n.location.href
                            }
                        }
                    }
                    function d() {
                        return {
                            action: {
                                id: r.id
                            }
                        }
                    }
                    function f(t, e, n, r) {
                        if (void 0 === r)
                            return n ? t() : void 0;
                        if (n && r >= n.startTime)
                            return t();
                        for (var i = 0, o = e; i < o.length; i++) {
                            var a = o[i];
                            if (r > a.endTime)
                                break;
                            if (r >= a.startTime)
                                return a.context
                        }
                    }
                    return {
                        findAction: function(t) {
                            return f(d, a, r, t)
                        },
                        findView: function(t) {
                            return f(c, o, n, t)
                        },
                        stop: function() {
                            clearInterval(s)
                        }
                    }
                }(n, i)
                  , s = ir(r, n);
                Ie(t, r, n, i, a, o),
                function(t) {
                    t.subscribe(Qt.PERFORMANCE_ENTRY_COLLECTED, (function(e) {
                        if ("longtask" === e.entryType) {
                            var n = {
                                date: b(e.startTime),
                                long_task: {
                                    duration: y(e.duration)
                                },
                                type: Vt.LONG_TASK
                            };
                            t.notify(Qt.RAW_RUM_EVENT_COLLECTED, {
                                rawRumEvent: n,
                                startTime: e.startTime
                            })
                        }
                    }
                    ))
                }(n),
                jn(n, i);
                var u = tr(n, e)
                  , c = u.addTiming
                  , d = u.stop
                  , f = Yn(n, r).addError;
                return {
                    addAction: Un(n, r).addAction,
                    addError: f,
                    parentContexts: a,
                    addTiming: c,
                    stop: function() {
                        d(),
                        s.stop()
                    }
                }
            }(t.applicationId, location, n, i, s, e)
              , c = u.parentContexts
              , d = u.addError
              , f = u.addAction
              , l = u.addTiming;
            pn(n, i),
            Re(n, i),
            ee(n);
            var p = function(t, e, n) {
                return {
                    get: function(r) {
                        var i = n.findView(r);
                        if (e.isTracked() && i && i.session.id) {
                            var o = n.findAction(r);
                            return {
                                application_id: t,
                                session_id: i.session.id,
                                user_action: o ? {
                                    id: o.action.id
                                } : void 0,
                                view: i.view
                            }
                        }
                    }
                }
            }(t.applicationId, s, c);
            return {
                addAction: f,
                addError: d,
                addTiming: l,
                configuration: i,
                lifeCycle: n,
                parentContexts: c,
                session: s,
                getInternalContext: p.get
            }
        }
        ));
        !function(t, e, n) {
            var r = t[e];
            t[e] = n,
            r && r.q && r.q.forEach((function(t) {
                return Ut(t, "onReady callback threw an error:")()
            }
            ))
        }(function() {
            if ("object" === typeof globalThis)
                return globalThis;
            Object.defineProperty(Object.prototype, "_dd_temp_", {
                get: function() {
                    return this
                },
                configurable: !0
            });
            var t = _dd_temp_;
            return delete Object.prototype._dd_temp_,
            "object" !== typeof t && (t = "object" === typeof self ? self : "object" === typeof window ? window : {}),
            t
        }(), "DD_RUM", ar)
    },
    87800: function(t, e, n) {
        "use strict";
        var r = this && this.__createBinding || (Object.create ? function(t, e, n, r) {
            void 0 === r && (r = n),
            Object.defineProperty(t, r, {
                enumerable: !0,
                get: function() {
                    return e[n]
                }
            })
        }
        : function(t, e, n, r) {
            void 0 === r && (r = n),
            t[r] = e[n]
        }
        )
          , i = this && this.__setModuleDefault || (Object.create ? function(t, e) {
            Object.defineProperty(t, "default", {
                enumerable: !0,
                value: e
            })
        }
        : function(t, e) {
            t.default = e
        }
        )
          , o = this && this.__importStar || function(t) {
            if (t && t.__esModule)
                return t;
            var e = {};
            if (null != t)
                for (var n in t)
                    "default" !== n && Object.prototype.hasOwnProperty.call(t, n) && r(e, t, n);
            return i(e, t),
            e
        }
        ;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.WebVitals = e.fireWebVitals = e.isBrowser = void 0;
        var a = n(67294);
        function s() {
            return "undefined" !== typeof window
        }
        e.isBrowser = s;
        function u(t) {
            var e = t.applicationId
              , r = t.clientToken
              , i = t.env
              , a = t.sampleRate
              , u = void 0 === a ? 10 : a
              , c = t.service
              , d = t.version;
            if (s())
                return Promise.all([Promise.resolve().then((function() {
                    return o(n(82131))
                }
                )), Promise.resolve().then((function() {
                    return o(n(11913))
                }
                ))]).then((function(t) {
                    var n = t[0]
                      , o = n.getCLS
                      , a = n.getFID
                      , s = n.getFCP
                      , f = n.getLCP
                      , l = n.getTTFB
                      , p = t[1].datadogRum;
                    p.init({
                        applicationId: e,
                        clientToken: r,
                        env: i,
                        sampleRate: u,
                        service: c,
                        version: d,
                        site: "datadoghq.com",
                        trackInteractions: !0,
                        silentMultipleInit: !0
                    }),
                    [o, a, s, f, l].forEach((function(t) {
                        t(function(t) {
                            return function(e) {
                                var n = e.name
                                  , r = e.value;
                                t.addAction(n, {
                                    value: r
                                })
                            }
                        }(p))
                    }
                    ))
                }
                ))
        }
        function c(t) {
            var e = t.applicationId
              , n = t.clientToken
              , r = t.env
              , i = t.sampleRate
              , o = t.service
              , s = t.version;
            return a.useEffect((function() {
                u({
                    applicationId: e,
                    clientToken: n,
                    env: r,
                    sampleRate: i,
                    service: o,
                    version: s
                })
            }
            ), [e, n, r, i, o, s]),
            null
        }
        e.fireWebVitals = u,
        e.WebVitals = c,
        e.default = c
    },
    92797: function(t, e, n) {
        "use strict";
        var r = this && this.__createBinding || (Object.create ? function(t, e, n, r) {
            void 0 === r && (r = n),
            Object.defineProperty(t, r, {
                enumerable: !0,
                get: function() {
                    return e[n]
                }
            })
        }
        : function(t, e, n, r) {
            void 0 === r && (r = n),
            t[r] = e[n]
        }
        )
          , i = this && this.__exportStar || function(t, e) {
            for (var n in t)
                "default" === n || Object.prototype.hasOwnProperty.call(e, n) || r(e, t, n)
        }
          , o = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        ;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0,
        i(n(87800), e);
        var a = n(87800);
        Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function() {
                return o(a).default
            }
        })
    },
    1445: function(t, e, n) {
        "use strict";
        n.d(e, {
            S1: function() {
                return Wn
            }
        });
        var r = n(95659);
        function i(t) {
            if ("boolean" === typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__)
                return !1;
            const e = (0,
            r.Gd)().getClient()
              , n = t || e && e.getOptions();
            return !!n && (n.enableTracing || "tracesSampleRate"in n || "tracesSampler"in n)
        }
        function o(t, e) {
            let n = 0;
            for (let r = t.length - 1; r >= 0; r--) {
                const e = t[r];
                "." === e ? t.splice(r, 1) : ".." === e ? (t.splice(r, 1),
                n++) : n && (t.splice(r, 1),
                n--)
            }
            if (e)
                for (; n--; n)
                    t.unshift("..");
            return t
        }
        const a = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^/]+?|)(\.[^./]*|))(?:[/]*)$/;
        function s(t) {
            const e = a.exec(t);
            return e ? e.slice(1) : []
        }
        function u(...t) {
            let e = ""
              , n = !1;
            for (let r = t.length - 1; r >= -1 && !n; r--) {
                const i = r >= 0 ? t[r] : "/";
                i && (e = `${i}/${e}`,
                n = "/" === i.charAt(0))
            }
            return e = o(e.split("/").filter((t=>!!t)), !n).join("/"),
            (n ? "/" : "") + e || "."
        }
        function c(t) {
            let e = 0;
            for (; e < t.length && "" === t[e]; e++)
                ;
            let n = t.length - 1;
            for (; n >= 0 && "" === t[n]; n--)
                ;
            return e > n ? [] : t.slice(e, n - e + 1)
        }
        class d {
            static __initStatic() {
                this.id = "RewriteFrames"
            }
            __init() {
                this.name = d.id
            }
            __init2() {
                this._prefix = "app:///"
            }
            constructor(t={}) {
                d.prototype.__init.call(this),
                d.prototype.__init2.call(this),
                d.prototype.__init3.call(this),
                t.root && (this._root = t.root),
                t.prefix && (this._prefix = t.prefix),
                t.iteratee && (this._iteratee = t.iteratee)
            }
            setupOnce(t, e) {
                t((t=>{
                    const n = e().getIntegration(d);
                    return n ? n.process(t) : t
                }
                ))
            }
            process(t) {
                let e = t;
                return t.exception && Array.isArray(t.exception.values) && (e = this._processExceptionsEvent(e)),
                e
            }
            __init3() {
                this._iteratee = t=>{
                    if (!t.filename)
                        return t;
                    const e = /^[a-zA-Z]:\\/.test(t.filename) || t.filename.includes("\\") && !t.filename.includes("/")
                      , n = /^\//.test(t.filename);
                    if (e || n) {
                        const n = e ? t.filename.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/") : t.filename
                          , r = this._root ? function(t, e) {
                            t = u(t).slice(1),
                            e = u(e).slice(1);
                            const n = c(t.split("/"))
                              , r = c(e.split("/"))
                              , i = Math.min(n.length, r.length);
                            let o = i;
                            for (let s = 0; s < i; s++)
                                if (n[s] !== r[s]) {
                                    o = s;
                                    break
                                }
                            let a = [];
                            for (let s = o; s < n.length; s++)
                                a.push("..");
                            return a = a.concat(r.slice(o)),
                            a.join("/")
                        }(this._root, n) : function(t, e) {
                            let n = s(t)[2];
                            return e && n.slice(-1 * e.length) === e && (n = n.slice(0, n.length - e.length)),
                            n
                        }(n);
                        t.filename = `${this._prefix}${r}`
                    }
                    return t
                }
            }
            _processExceptionsEvent(t) {
                try {
                    return {
                        ...t,
                        exception: {
                            ...t.exception,
                            values: t.exception.values.map((t=>({
                                ...t,
                                ...t.stacktrace && {
                                    stacktrace: this._processStacktrace(t.stacktrace)
                                }
                            })))
                        }
                    }
                } catch (e) {
                    return t
                }
            }
            _processStacktrace(t) {
                return {
                    ...t,
                    frames: t && t.frames && t.frames.map((t=>this._iteratee(t)))
                }
            }
        }
        d.__initStatic();
        const f = "7.51.2";
        var l = n(62844)
          , p = n(12343)
          , h = n(10350);
        const _ = [];
        function m(t) {
            const e = t.defaultIntegrations || []
              , n = t.integrations;
            let r;
            e.forEach((t=>{
                t.isDefaultInstance = !0
            }
            )),
            r = Array.isArray(n) ? [...e, ...n] : "function" === typeof n ? (0,
            l.lE)(n(e)) : e;
            const i = function(t) {
                const e = {};
                return t.forEach((t=>{
                    const {name: n} = t
                      , r = e[n];
                    r && !r.isDefaultInstance && t.isDefaultInstance || (e[n] = t)
                }
                )),
                Object.keys(e).map((t=>e[t]))
            }(r)
              , o = function(t, e) {
                for (let n = 0; n < t.length; n++)
                    if (!0 === e(t[n]))
                        return n;
                return -1
            }(i, (t=>"Debug" === t.name));
            if (-1 !== o) {
                const [t] = i.splice(o, 1);
                i.push(t)
            }
            return i
        }
        function v(t, e) {
            e[t.name] = t,
            -1 === _.indexOf(t.name) && (t.setupOnce(h.c, r.Gd),
            _.push(t.name),
            ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.log(`Integration installed: ${t.name}`))
        }
        var g = n(57321);
        const y = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
        class E {
            static __initStatic() {
                this.id = "InboundFilters"
            }
            __init() {
                this.name = E.id
            }
            constructor(t={}) {
                this._options = t,
                E.prototype.__init.call(this)
            }
            setupOnce(t, e) {
                const n = t=>{
                    const n = e();
                    if (n) {
                        const e = n.getIntegration(E);
                        if (e) {
                            const r = n.getClient()
                              , i = r ? r.getOptions() : {};
                            return function(t, e) {
                                if (e.ignoreInternal && function(t) {
                                    try {
                                        return "SentryError" === t.exception.values[0].type
                                    } catch (e) {}
                                    return !1
                                }(t))
                                    return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.warn(`Event dropped due to being internal Sentry Error.\nEvent: ${(0,
                                    l.jH)(t)}`),
                                    !0;
                                if (function(t, e) {
                                    if (t.type || !e || !e.length)
                                        return !1;
                                    return function(t) {
                                        if (t.message)
                                            return [t.message];
                                        if (t.exception)
                                            try {
                                                const {type: e="", value: n=""} = t.exception.values && t.exception.values[0] || {};
                                                return [`${n}`, `${e}: ${n}`]
                                            } catch (e) {
                                                return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.error(`Cannot extract message for event ${(0,
                                                l.jH)(t)}`),
                                                []
                                            }
                                        return []
                                    }(t).some((t=>(0,
                                    g.U0)(t, e)))
                                }(t, e.ignoreErrors))
                                    return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.warn(`Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${(0,
                                    l.jH)(t)}`),
                                    !0;
                                if (function(t, e) {
                                    if ("transaction" !== t.type || !e || !e.length)
                                        return !1;
                                    const n = t.transaction;
                                    return !!n && (0,
                                    g.U0)(n, e)
                                }(t, e.ignoreTransactions))
                                    return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.\nEvent: ${(0,
                                    l.jH)(t)}`),
                                    !0;
                                if (function(t, e) {
                                    if (!e || !e.length)
                                        return !1;
                                    const n = T(t);
                                    return !!n && (0,
                                    g.U0)(n, e)
                                }(t, e.denyUrls))
                                    return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.warn(`Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${(0,
                                    l.jH)(t)}.\nUrl: ${T(t)}`),
                                    !0;
                                if (!function(t, e) {
                                    if (!e || !e.length)
                                        return !0;
                                    const n = T(t);
                                    return !n || (0,
                                    g.U0)(n, e)
                                }(t, e.allowUrls))
                                    return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.warn(`Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${(0,
                                    l.jH)(t)}.\nUrl: ${T(t)}`),
                                    !0;
                                return !1
                            }(t, function(t={}, e={}) {
                                return {
                                    allowUrls: [...t.allowUrls || [], ...e.allowUrls || []],
                                    denyUrls: [...t.denyUrls || [], ...e.denyUrls || []],
                                    ignoreErrors: [...t.ignoreErrors || [], ...e.ignoreErrors || [], ...y],
                                    ignoreTransactions: [...t.ignoreTransactions || [], ...e.ignoreTransactions || []],
                                    ignoreInternal: void 0 === t.ignoreInternal || t.ignoreInternal
                                }
                            }(e._options, i)) ? null : t
                        }
                    }
                    return t
                }
                ;
                n.id = this.name,
                t(n)
            }
        }
        function T(t) {
            try {
                let n;
                try {
                    n = t.exception.values[0].stacktrace.frames
                } catch (e) {}
                return n ? function(t=[]) {
                    for (let e = t.length - 1; e >= 0; e--) {
                        const n = t[e];
                        if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename)
                            return n.filename || null
                    }
                    return null
                }(n) : null
            } catch (n) {
                return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.error(`Cannot extract url for event ${(0,
                l.jH)(t)}`),
                null
            }
        }
        E.__initStatic();
        var b = n(20535);
        let S;
        class R {
            constructor() {
                R.prototype.__init.call(this)
            }
            static __initStatic() {
                this.id = "FunctionToString"
            }
            __init() {
                this.name = R.id
            }
            setupOnce() {
                S = Function.prototype.toString;
                try {
                    Function.prototype.toString = function(...t) {
                        const e = (0,
                        b.HK)(this) || this;
                        return S.apply(e, t)
                    }
                } catch (t) {}
            }
        }
        R.__initStatic();
        const C = /\(error: (.*)\)/;
        function D(...t) {
            const e = t.sort(((t,e)=>t[0] - e[0])).map((t=>t[1]));
            return (t,n=0)=>{
                const r = []
                  , i = t.split("\n");
                for (let o = n; o < i.length; o++) {
                    const t = i[o];
                    if (t.length > 1024)
                        continue;
                    const n = C.test(t) ? t.replace(C, "$1") : t;
                    if (!n.match(/\S*Error: /)) {
                        for (const t of e) {
                            const e = t(n);
                            if (e) {
                                r.push(e);
                                break
                            }
                        }
                        if (r.length >= 50)
                            break
                    }
                }
                return function(t) {
                    if (!t.length)
                        return [];
                    const e = t.slice(0, 50)
                      , n = e[e.length - 1].function;
                    n && /sentryWrapped/.test(n) && e.pop();
                    e.reverse();
                    const r = e[e.length - 1].function;
                    r && /captureMessage|captureException/.test(r) && e.pop();
                    return e.map((t=>({
                        ...t,
                        filename: t.filename || e[e.length - 1].filename,
                        function: t.function || "?"
                    })))
                }(r)
            }
        }
        const w = "<anonymous>";
        function O(t) {
            try {
                return t && "function" === typeof t && t.name || w
            } catch (e) {
                return w
            }
        }
        var k = n(71235);
        const N = (0,
        k.Rf)();
        function x() {
            if (!("fetch"in N))
                return !1;
            try {
                return new Headers,
                new Request("http://www.example.com"),
                new Response,
                !0
            } catch (t) {
                return !1
            }
        }
        function I(t) {
            return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
        }
        var U = n(67597);
        const A = (0,
        k.Rf)();
        const B = (0,
        k.Rf)()
          , L = {}
          , M = {};
        function P(t) {
            if (!M[t])
                switch (M[t] = !0,
                t) {
                case "console":
                    !function() {
                        if (!("console"in B))
                            return;
                        p.RU.forEach((function(t) {
                            t in B.console && (0,
                            b.hl)(B.console, t, (function(e) {
                                return function(...n) {
                                    Y("console", {
                                        args: n,
                                        level: t
                                    }),
                                    e && e.apply(B.console, n)
                                }
                            }
                            ))
                        }
                        ))
                    }();
                    break;
                case "dom":
                    !function() {
                        if (!("document"in B))
                            return;
                        const t = Y.bind(null, "dom")
                          , e = z(t, !0);
                        B.document.addEventListener("click", e, !1),
                        B.document.addEventListener("keypress", e, !1),
                        ["EventTarget", "Node"].forEach((e=>{
                            const n = B[e] && B[e].prototype;
                            n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && ((0,
                            b.hl)(n, "addEventListener", (function(e) {
                                return function(n, r, i) {
                                    if ("click" === n || "keypress" == n)
                                        try {
                                            const r = this
                                              , o = r.__sentry_instrumentation_handlers__ = r.__sentry_instrumentation_handlers__ || {}
                                              , a = o[n] = o[n] || {
                                                refCount: 0
                                            };
                                            if (!a.handler) {
                                                const r = z(t);
                                                a.handler = r,
                                                e.call(this, n, r, i)
                                            }
                                            a.refCount++
                                        } catch (o) {}
                                    return e.call(this, n, r, i)
                                }
                            }
                            )),
                            (0,
                            b.hl)(n, "removeEventListener", (function(t) {
                                return function(e, n, r) {
                                    if ("click" === e || "keypress" == e)
                                        try {
                                            const n = this
                                              , i = n.__sentry_instrumentation_handlers__ || {}
                                              , o = i[e];
                                            o && (o.refCount--,
                                            o.refCount <= 0 && (t.call(this, e, o.handler, r),
                                            o.handler = void 0,
                                            delete i[e]),
                                            0 === Object.keys(i).length && delete n.__sentry_instrumentation_handlers__)
                                        } catch (i) {}
                                    return t.call(this, e, n, r)
                                }
                            }
                            )))
                        }
                        ))
                    }();
                    break;
                case "xhr":
                    !function() {
                        if (!("XMLHttpRequest"in B))
                            return;
                        const t = XMLHttpRequest.prototype;
                        (0,
                        b.hl)(t, "open", (function(t) {
                            return function(...e) {
                                const n = e[1]
                                  , r = this.__sentry_xhr_v2__ = {
                                    method: (0,
                                    U.HD)(e[0]) ? e[0].toUpperCase() : e[0],
                                    url: e[1],
                                    request_headers: {}
                                };
                                (0,
                                U.HD)(n) && "POST" === r.method && n.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
                                const i = ()=>{
                                    const t = this.__sentry_xhr_v2__;
                                    if (t && 4 === this.readyState) {
                                        try {
                                            t.status_code = this.status
                                        } catch (n) {}
                                        Y("xhr", {
                                            args: e,
                                            endTimestamp: Date.now(),
                                            startTimestamp: Date.now(),
                                            xhr: this
                                        })
                                    }
                                }
                                ;
                                return "onreadystatechange"in this && "function" === typeof this.onreadystatechange ? (0,
                                b.hl)(this, "onreadystatechange", (function(t) {
                                    return function(...e) {
                                        return i(),
                                        t.apply(this, e)
                                    }
                                }
                                )) : this.addEventListener("readystatechange", i),
                                (0,
                                b.hl)(this, "setRequestHeader", (function(t) {
                                    return function(...e) {
                                        const [n,r] = e
                                          , i = this.__sentry_xhr_v2__;
                                        return i && (i.request_headers[n.toLowerCase()] = r),
                                        t.apply(this, e)
                                    }
                                }
                                )),
                                t.apply(this, e)
                            }
                        }
                        )),
                        (0,
                        b.hl)(t, "send", (function(t) {
                            return function(...e) {
                                const n = this.__sentry_xhr_v2__;
                                return n && void 0 !== e[0] && (n.body = e[0]),
                                Y("xhr", {
                                    args: e,
                                    startTimestamp: Date.now(),
                                    xhr: this
                                }),
                                t.apply(this, e)
                            }
                        }
                        ))
                    }();
                    break;
                case "fetch":
                    !function() {
                        if (!function() {
                            if (!x())
                                return !1;
                            if (I(N.fetch))
                                return !0;
                            let t = !1;
                            const e = N.document;
                            if (e && "function" === typeof e.createElement)
                                try {
                                    const n = e.createElement("iframe");
                                    n.hidden = !0,
                                    e.head.appendChild(n),
                                    n.contentWindow && n.contentWindow.fetch && (t = I(n.contentWindow.fetch)),
                                    e.head.removeChild(n)
                                } catch (n) {
                                    ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", n)
                                }
                            return t
                        }())
                            return;
                        (0,
                        b.hl)(B, "fetch", (function(t) {
                            return function(...e) {
                                const {method: n, url: r} = function(t) {
                                    if (0 === t.length)
                                        return {
                                            method: "GET",
                                            url: ""
                                        };
                                    if (2 === t.length) {
                                        const [e,n] = t;
                                        return {
                                            url: q(e),
                                            method: $(n, "method") ? String(n.method).toUpperCase() : "GET"
                                        }
                                    }
                                    const e = t[0];
                                    return {
                                        url: q(e),
                                        method: $(e, "method") ? String(e.method).toUpperCase() : "GET"
                                    }
                                }(e)
                                  , i = {
                                    args: e,
                                    fetchData: {
                                        method: n,
                                        url: r
                                    },
                                    startTimestamp: Date.now()
                                };
                                return Y("fetch", {
                                    ...i
                                }),
                                t.apply(B, e).then((t=>(Y("fetch", {
                                    ...i,
                                    endTimestamp: Date.now(),
                                    response: t
                                }),
                                t)), (t=>{
                                    throw Y("fetch", {
                                        ...i,
                                        endTimestamp: Date.now(),
                                        error: t
                                    }),
                                    t
                                }
                                ))
                            }
                        }
                        ))
                    }();
                    break;
                case "history":
                    !function() {
                        if (!function() {
                            const t = A.chrome
                              , e = t && t.app && t.app.runtime
                              , n = "history"in A && !!A.history.pushState && !!A.history.replaceState;
                            return !e && n
                        }())
                            return;
                        const t = B.onpopstate;
                        function e(t) {
                            return function(...e) {
                                const n = e.length > 2 ? e[2] : void 0;
                                if (n) {
                                    const t = F
                                      , e = String(n);
                                    F = e,
                                    Y("history", {
                                        from: t,
                                        to: e
                                    })
                                }
                                return t.apply(this, e)
                            }
                        }
                        B.onpopstate = function(...e) {
                            const n = B.location.href
                              , r = F;
                            if (F = n,
                            Y("history", {
                                from: r,
                                to: n
                            }),
                            t)
                                try {
                                    return t.apply(this, e)
                                } catch (i) {}
                        }
                        ,
                        (0,
                        b.hl)(B.history, "pushState", e),
                        (0,
                        b.hl)(B.history, "replaceState", e)
                    }();
                    break;
                case "error":
                    W = B.onerror,
                    B.onerror = function(t, e, n, r, i) {
                        return Y("error", {
                            column: r,
                            error: i,
                            line: n,
                            msg: t,
                            url: e
                        }),
                        !(!W || W.__SENTRY_LOADER__) && W.apply(this, arguments)
                    }
                    ,
                    B.onerror.__SENTRY_INSTRUMENTED__ = !0;
                    break;
                case "unhandledrejection":
                    V = B.onunhandledrejection,
                    B.onunhandledrejection = function(t) {
                        return Y("unhandledrejection", t),
                        !(V && !V.__SENTRY_LOADER__) || V.apply(this, arguments)
                    }
                    ,
                    B.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0;
                    break;
                default:
                    return void (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.warn("unknown instrumentation type:", t))
                }
        }
        function G(t, e) {
            L[t] = L[t] || [],
            L[t].push(e),
            P(t)
        }
        function Y(t, e) {
            if (t && L[t])
                for (const r of L[t] || [])
                    try {
                        r(e)
                    } catch (n) {
                        ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.error(`Error while triggering instrumentation handler.\nType: ${t}\nName: ${O(r)}\nError:`, n)
                    }
        }
        function $(t, e) {
            return !!t && "object" === typeof t && !!t[e]
        }
        function q(t) {
            return "string" === typeof t ? t : t ? $(t, "url") ? t.url : t.toString ? t.toString() : "" : ""
        }
        let F;
        let j, H;
        function z(t, e=!1) {
            return n=>{
                if (!n || H === n)
                    return;
                if (function(t) {
                    if ("keypress" !== t.type)
                        return !1;
                    try {
                        const e = t.target;
                        if (!e || !e.tagName)
                            return !0;
                        if ("INPUT" === e.tagName || "TEXTAREA" === e.tagName || e.isContentEditable)
                            return !1
                    } catch (e) {}
                    return !0
                }(n))
                    return;
                const r = "keypress" === n.type ? "input" : n.type;
                (void 0 === j || function(t, e) {
                    if (!t)
                        return !0;
                    if (t.type !== e.type)
                        return !0;
                    try {
                        if (t.target !== e.target)
                            return !0
                    } catch (n) {}
                    return !1
                }(H, n)) && (t({
                    event: n,
                    name: r,
                    global: e
                }),
                H = n),
                clearTimeout(j),
                j = B.setTimeout((()=>{
                    j = void 0
                }
                ), 1e3)
            }
        }
        let W = null;
        let V = null;
        class K extends Error {
            constructor(t, e="warn") {
                super(t),
                this.message = t,
                this.name = new.target.prototype.constructor.name,
                Object.setPrototypeOf(this, new.target.prototype),
                this.logLevel = e
            }
        }
        const Z = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
        function Q(t, e=!1) {
            const {host: n, path: r, pass: i, port: o, projectId: a, protocol: s, publicKey: u} = t;
            return `${s}://${u}${e && i ? `:${i}` : ""}@${n}${o ? `:${o}` : ""}/${r ? `${r}/` : r}${a}`
        }
        function X(t) {
            const e = Z.exec(t);
            if (!e)
                throw new K(`Invalid Sentry Dsn: ${t}`);
            const [n,r,i="",o,a="",s] = e.slice(1);
            let u = ""
              , c = s;
            const d = c.split("/");
            if (d.length > 1 && (u = d.slice(0, -1).join("/"),
            c = d.pop()),
            c) {
                const t = c.match(/^\d+/);
                t && (c = t[0])
            }
            return J({
                host: o,
                pass: i,
                path: u,
                projectId: c,
                port: a,
                protocol: n,
                publicKey: r
            })
        }
        function J(t) {
            return {
                protocol: t.protocol,
                publicKey: t.publicKey || "",
                pass: t.pass || "",
                host: t.host,
                port: t.port || "",
                path: t.path || "",
                projectId: t.projectId
            }
        }
        function tt(t) {
            const e = "string" === typeof t ? X(t) : J(t);
            return function(t) {
                if ("undefined" !== typeof __SENTRY_DEBUG__ && !__SENTRY_DEBUG__)
                    return;
                const {port: e, projectId: n, protocol: r} = t;
                if (["protocol", "publicKey", "host", "projectId"].forEach((e=>{
                    if (!t[e])
                        throw new K(`Invalid Sentry Dsn: ${e} missing`)
                }
                )),
                !n.match(/^\d+$/))
                    throw new K(`Invalid Sentry Dsn: Invalid projectId ${n}`);
                if (!function(t) {
                    return "http" === t || "https" === t
                }(r))
                    throw new K(`Invalid Sentry Dsn: Invalid protocol ${r}`);
                if (e && isNaN(parseInt(e, 10)))
                    throw new K(`Invalid Sentry Dsn: Invalid port ${e}`)
            }(e),
            e
        }
        var et = n(96893);
        function nt(t, e=100, n=1 / 0) {
            try {
                return it("", t, e, n)
            } catch (r) {
                return {
                    ERROR: `**non-serializable** (${r})`
                }
            }
        }
        function rt(t, e=3, n=102400) {
            const r = nt(t, e);
            return i = r,
            function(t) {
                return ~-encodeURI(t).split(/%..|./).length
            }(JSON.stringify(i)) > n ? rt(t, e - 1, n) : r;
            var i
        }
        function it(t, e, r=1 / 0, i=1 / 0, o=function() {
            const t = "function" === typeof WeakSet
              , e = t ? new WeakSet : [];
            return [function(n) {
                if (t)
                    return !!e.has(n) || (e.add(n),
                    !1);
                for (let t = 0; t < e.length; t++)
                    if (e[t] === n)
                        return !0;
                return e.push(n),
                !1
            }
            , function(n) {
                if (t)
                    e.delete(n);
                else
                    for (let t = 0; t < e.length; t++)
                        if (e[t] === n) {
                            e.splice(t, 1);
                            break
                        }
            }
            ]
        }()) {
            const [a,s] = o;
            if (null == e || ["number", "boolean", "string"].includes(typeof e) && !(0,
            U.i2)(e))
                return e;
            const u = function(t, e) {
                try {
                    if ("domain" === t && e && "object" === typeof e && e._events)
                        return "[Domain]";
                    if ("domainEmitter" === t)
                        return "[DomainEmitter]";
                    if ("undefined" !== typeof n.g && e === n.g)
                        return "[Global]";
                    if ("undefined" !== typeof window && e === window)
                        return "[Window]";
                    if ("undefined" !== typeof document && e === document)
                        return "[Document]";
                    if ((0,
                    U.Cy)(e))
                        return "[SyntheticEvent]";
                    if ("number" === typeof e && e !== e)
                        return "[NaN]";
                    if ("function" === typeof e)
                        return `[Function: ${O(e)}]`;
                    if ("symbol" === typeof e)
                        return `[${String(e)}]`;
                    if ("bigint" === typeof e)
                        return `[BigInt: ${String(e)}]`;
                    const r = function(t) {
                        const e = Object.getPrototypeOf(t);
                        return e ? e.constructor.name : "null prototype"
                    }(e);
                    return /^HTML(\w*)Element$/.test(r) ? `[HTMLElement: ${r}]` : `[object ${r}]`
                } catch (r) {
                    return `**non-serializable** (${r})`
                }
            }(t, e);
            if (!u.startsWith("[object "))
                return u;
            if (e.__sentry_skip_normalization__)
                return e;
            const c = "number" === typeof e.__sentry_override_normalization_depth__ ? e.__sentry_override_normalization_depth__ : r;
            if (0 === c)
                return u.replace("object ", "");
            if (a(e))
                return "[Circular ~]";
            const d = e;
            if (d && "function" === typeof d.toJSON)
                try {
                    return it("", d.toJSON(), c - 1, i, o)
                } catch (h) {}
            const f = Array.isArray(e) ? [] : {};
            let l = 0;
            const p = (0,
            b.Sh)(e);
            for (const n in p) {
                if (!Object.prototype.hasOwnProperty.call(p, n))
                    continue;
                if (l >= i) {
                    f[n] = "[MaxProperties ~]";
                    break
                }
                const t = p[n];
                f[n] = it(n, t, c - 1, i, o),
                l++
            }
            return s(e),
            f
        }
        function ot(t, e=[]) {
            return [t, e]
        }
        function at(t, e) {
            const [n,r] = t;
            return [n, [...r, e]]
        }
        function st(t, e) {
            const n = t[1];
            for (const r of n) {
                if (e(r, r[0].type))
                    return !0
            }
            return !1
        }
        function ut(t, e) {
            return (e || new TextEncoder).encode(t)
        }
        function ct(t, e) {
            const [n,r] = t;
            let i = JSON.stringify(n);
            function o(t) {
                "string" === typeof i ? i = "string" === typeof t ? i + t : [ut(i, e), t] : i.push("string" === typeof t ? ut(t, e) : t)
            }
            for (const s of r) {
                const [t,e] = s;
                if (o(`\n${JSON.stringify(t)}\n`),
                "string" === typeof e || e instanceof Uint8Array)
                    o(e);
                else {
                    let t;
                    try {
                        t = JSON.stringify(e)
                    } catch (a) {
                        t = JSON.stringify(nt(e))
                    }
                    o(t)
                }
            }
            return "string" === typeof i ? i : function(t) {
                const e = t.reduce(((t,e)=>t + e.length), 0)
                  , n = new Uint8Array(e);
                let r = 0;
                for (const i of t)
                    n.set(i, r),
                    r += i.length;
                return n
            }(i)
        }
        function dt(t, e) {
            const n = "string" === typeof t.data ? ut(t.data, e) : t.data;
            return [(0,
            b.Jr)({
                type: "attachment",
                length: n.length,
                filename: t.filename,
                content_type: t.contentType,
                attachment_type: t.attachmentType
            }), n]
        }
        const ft = {
            session: "session",
            sessions: "session",
            attachment: "attachment",
            transaction: "transaction",
            event: "error",
            client_report: "internal",
            user_report: "default",
            profile: "profile",
            replay_event: "replay",
            replay_recording: "replay",
            check_in: "monitor"
        };
        function lt(t) {
            return ft[t]
        }
        function pt(t) {
            if (!t || !t.sdk)
                return;
            const {name: e, version: n} = t.sdk;
            return {
                name: e,
                version: n
            }
        }
        function ht(t) {
            const e = t.protocol ? `${t.protocol}:` : ""
              , n = t.port ? `:${t.port}` : "";
            return `${e}//${t.host}${n}${t.path ? `/${t.path}` : ""}/api/`
        }
        function _t(t, e={}) {
            const n = "string" === typeof e ? e : e.tunnel
              , r = "string" !== typeof e && e._metadata ? e._metadata.sdk : void 0;
            return n || `${function(t) {
                return `${ht(t)}${t.projectId}/envelope/`
            }(t)}?${function(t, e) {
                return (0,
                b._j)({
                    sentry_key: t.publicKey,
                    sentry_version: "7",
                    ...e && {
                        sentry_client: `${e.name}/${e.version}`
                    }
                })
            }(t, r)}`
        }
        function mt(t, e, n, r) {
            const i = pt(n)
              , o = t.type && "replay_event" !== t.type ? t.type : "event";
            !function(t, e) {
                e && (t.sdk = t.sdk || {},
                t.sdk.name = t.sdk.name || e.name,
                t.sdk.version = t.sdk.version || e.version,
                t.sdk.integrations = [...t.sdk.integrations || [], ...e.integrations || []],
                t.sdk.packages = [...t.sdk.packages || [], ...e.packages || []])
            }(t, n && n.sdk);
            const a = function(t, e, n, r) {
                const i = t.sdkProcessingMetadata && t.sdkProcessingMetadata.dynamicSamplingContext;
                return {
                    event_id: t.event_id,
                    sent_at: (new Date).toISOString(),
                    ...e && {
                        sdk: e
                    },
                    ...!!n && {
                        dsn: Q(r)
                    },
                    ...i && {
                        trace: (0,
                        b.Jr)({
                            ...i
                        })
                    }
                }
            }(t, i, r, e);
            delete t.sdkProcessingMetadata;
            return ot(a, [[{
                type: o
            }, t]])
        }
        var vt = n(9015)
          , gt = n(21170)
          , yt = n(51131);
        function Et(t, e, n, r) {
            const {normalizeDepth: i=3, normalizeMaxBreadth: o=1e3} = t
              , a = {
                ...e,
                event_id: e.event_id || n.event_id || (0,
                l.DM)(),
                timestamp: e.timestamp || (0,
                gt.yW)()
            }
              , s = n.integrations || t.integrations.map((t=>t.name));
            !function(t, e) {
                const {environment: n, release: r, dist: i, maxValueLength: o=250} = e;
                "environment"in t || (t.environment = "environment"in e ? n : yt.J);
                void 0 === t.release && void 0 !== r && (t.release = r);
                void 0 === t.dist && void 0 !== i && (t.dist = i);
                t.message && (t.message = (0,
                g.$G)(t.message, o));
                const a = t.exception && t.exception.values && t.exception.values[0];
                a && a.value && (a.value = (0,
                g.$G)(a.value, o));
                const s = t.request;
                s && s.url && (s.url = (0,
                g.$G)(s.url, o))
            }(a, t),
            function(t, e) {
                e.length > 0 && (t.sdk = t.sdk || {},
                t.sdk.integrations = [...t.sdk.integrations || [], ...e])
            }(a, s),
            void 0 === e.type && function(t, e) {
                const n = k.n2._sentryDebugIds;
                if (!n)
                    return;
                let r;
                const i = Tt.get(e);
                i ? r = i : (r = new Map,
                Tt.set(e, r));
                const o = Object.keys(n).reduce(((t,i)=>{
                    let o;
                    const a = r.get(i);
                    a ? o = a : (o = e(i),
                    r.set(i, o));
                    for (let e = o.length - 1; e >= 0; e--) {
                        const r = o[e];
                        if (r.filename) {
                            t[r.filename] = n[i];
                            break
                        }
                    }
                    return t
                }
                ), {})
                  , a = new Set;
                try {
                    t.exception.values.forEach((t=>{
                        t.stacktrace.frames.forEach((t=>{
                            t.filename && a.add(t.filename)
                        }
                        ))
                    }
                    ))
                } catch (u) {}
                t.debug_meta = t.debug_meta || {},
                t.debug_meta.images = t.debug_meta.images || [];
                const s = t.debug_meta.images;
                a.forEach((t=>{
                    o[t] && s.push({
                        type: "sourcemap",
                        code_file: t,
                        debug_id: o[t]
                    })
                }
                ))
            }(a, t.stackParser);
            let u = r;
            n.captureContext && (u = h.s.clone(u).update(n.captureContext));
            let c = (0,
            et.WD)(a);
            if (u) {
                if (u.getAttachments) {
                    const t = [...n.attachments || [], ...u.getAttachments()];
                    t.length && (n.attachments = t)
                }
                c = u.applyToEvent(a, n)
            }
            return c.then((t=>"number" === typeof i && i > 0 ? function(t, e, n) {
                if (!t)
                    return null;
                const r = {
                    ...t,
                    ...t.breadcrumbs && {
                        breadcrumbs: t.breadcrumbs.map((t=>({
                            ...t,
                            ...t.data && {
                                data: nt(t.data, e, n)
                            }
                        })))
                    },
                    ...t.user && {
                        user: nt(t.user, e, n)
                    },
                    ...t.contexts && {
                        contexts: nt(t.contexts, e, n)
                    },
                    ...t.extra && {
                        extra: nt(t.extra, e, n)
                    }
                };
                t.contexts && t.contexts.trace && r.contexts && (r.contexts.trace = t.contexts.trace,
                t.contexts.trace.data && (r.contexts.trace.data = nt(t.contexts.trace.data, e, n)));
                t.spans && (r.spans = t.spans.map((t=>(t.data && (t.data = nt(t.data, e, n)),
                t))));
                return r
            }(t, i, o) : t))
        }
        const Tt = new WeakMap;
        const bt = "Not capturing exception because it's already been captured.";
        class St {
            __init() {
                this._integrations = {}
            }
            __init2() {
                this._integrationsInitialized = !1
            }
            __init3() {
                this._numProcessing = 0
            }
            __init4() {
                this._outcomes = {}
            }
            __init5() {
                this._hooks = {}
            }
            constructor(t) {
                if (St.prototype.__init.call(this),
                St.prototype.__init2.call(this),
                St.prototype.__init3.call(this),
                St.prototype.__init4.call(this),
                St.prototype.__init5.call(this),
                this._options = t,
                t.dsn) {
                    this._dsn = tt(t.dsn);
                    const e = _t(this._dsn, t);
                    this._transport = t.transport({
                        recordDroppedEvent: this.recordDroppedEvent.bind(this),
                        ...t.transportOptions,
                        url: e
                    })
                } else
                    ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.warn("No DSN provided, client will not do anything.")
            }
            captureException(t, e, n) {
                if ((0,
                l.YO)(t))
                    return void (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.log(bt));
                let r = e && e.event_id;
                return this._process(this.eventFromException(t, e).then((t=>this._captureEvent(t, e, n))).then((t=>{
                    r = t
                }
                ))),
                r
            }
            captureMessage(t, e, n, r) {
                let i = n && n.event_id;
                const o = (0,
                U.pt)(t) ? this.eventFromMessage(String(t), e, n) : this.eventFromException(t, n);
                return this._process(o.then((t=>this._captureEvent(t, n, r))).then((t=>{
                    i = t
                }
                ))),
                i
            }
            captureEvent(t, e, n) {
                if (e && e.originalException && (0,
                l.YO)(e.originalException))
                    return void (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.log(bt));
                let r = e && e.event_id;
                return this._process(this._captureEvent(t, e, n).then((t=>{
                    r = t
                }
                ))),
                r
            }
            captureSession(t) {
                this._isEnabled() ? "string" !== typeof t.release ? ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.warn("Discarded session because of missing or non-string release") : (this.sendSession(t),
                (0,
                vt.CT)(t, {
                    init: !1
                })) : ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.warn("SDK not enabled, will not capture session.")
            }
            getDsn() {
                return this._dsn
            }
            getOptions() {
                return this._options
            }
            getSdkMetadata() {
                return this._options._metadata
            }
            getTransport() {
                return this._transport
            }
            flush(t) {
                const e = this._transport;
                return e ? this._isClientDoneProcessing(t).then((n=>e.flush(t).then((t=>n && t)))) : (0,
                et.WD)(!0)
            }
            close(t) {
                return this.flush(t).then((t=>(this.getOptions().enabled = !1,
                t)))
            }
            setupIntegrations() {
                this._isEnabled() && !this._integrationsInitialized && (this._integrations = function(t) {
                    const e = {};
                    return t.forEach((t=>{
                        t && v(t, e)
                    }
                    )),
                    e
                }(this._options.integrations),
                this._integrationsInitialized = !0)
            }
            getIntegrationById(t) {
                return this._integrations[t]
            }
            getIntegration(t) {
                try {
                    return this._integrations[t.id] || null
                } catch (e) {
                    return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.warn(`Cannot retrieve integration ${t.id} from the current Client`),
                    null
                }
            }
            addIntegration(t) {
                v(t, this._integrations)
            }
            sendEvent(t, e={}) {
                if (this._dsn) {
                    let n = mt(t, this._dsn, this._options._metadata, this._options.tunnel);
                    for (const t of e.attachments || [])
                        n = at(n, dt(t, this._options.transportOptions && this._options.transportOptions.textEncoder));
                    const r = this._sendEnvelope(n);
                    r && r.then((e=>this.emit("afterSendEvent", t, e)), null)
                }
            }
            sendSession(t) {
                if (this._dsn) {
                    const e = function(t, e, n, r) {
                        const i = pt(n);
                        return ot({
                            sent_at: (new Date).toISOString(),
                            ...i && {
                                sdk: i
                            },
                            ...!!r && {
                                dsn: Q(e)
                            }
                        }, ["aggregates"in t ? [{
                            type: "sessions"
                        }, t] : [{
                            type: "session"
                        }, t]])
                    }(t, this._dsn, this._options._metadata, this._options.tunnel);
                    this._sendEnvelope(e)
                }
            }
            recordDroppedEvent(t, e, n) {
                if (this._options.sendClientReports) {
                    const n = `${t}:${e}`;
                    ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.log(`Adding outcome: "${n}"`),
                    this._outcomes[n] = this._outcomes[n] + 1 || 1
                }
            }
            on(t, e) {
                this._hooks[t] || (this._hooks[t] = []),
                this._hooks[t].push(e)
            }
            emit(t, ...e) {
                this._hooks[t] && this._hooks[t].forEach((t=>t(...e)))
            }
            _updateSessionFromEvent(t, e) {
                let n = !1
                  , r = !1;
                const i = e.exception && e.exception.values;
                if (i) {
                    r = !0;
                    for (const t of i) {
                        const e = t.mechanism;
                        if (e && !1 === e.handled) {
                            n = !0;
                            break
                        }
                    }
                }
                const o = "ok" === t.status;
                (o && 0 === t.errors || o && n) && ((0,
                vt.CT)(t, {
                    ...n && {
                        status: "crashed"
                    },
                    errors: t.errors || Number(r || n)
                }),
                this.captureSession(t))
            }
            _isClientDoneProcessing(t) {
                return new et.cW((e=>{
                    let n = 0;
                    const r = setInterval((()=>{
                        0 == this._numProcessing ? (clearInterval(r),
                        e(!0)) : (n += 1,
                        t && n >= t && (clearInterval(r),
                        e(!1)))
                    }
                    ), 1)
                }
                ))
            }
            _isEnabled() {
                return !1 !== this.getOptions().enabled && void 0 !== this._dsn
            }
            _prepareEvent(t, e, n) {
                const r = this.getOptions()
                  , i = Object.keys(this._integrations);
                return !e.integrations && i.length > 0 && (e.integrations = i),
                Et(r, t, e, n)
            }
            _captureEvent(t, e={}, n) {
                return this._processEvent(t, e, n).then((t=>t.event_id), (t=>{
                    if ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) {
                        const e = t;
                        "log" === e.logLevel ? p.kg.log(e.message) : p.kg.warn(e)
                    }
                }
                ))
            }
            _processEvent(t, e, n) {
                const r = this.getOptions()
                  , {sampleRate: i} = r;
                if (!this._isEnabled())
                    return (0,
                    et.$2)(new K("SDK not enabled, will not capture event.","log"));
                const o = Ct(t)
                  , a = Rt(t)
                  , s = t.type || "error"
                  , u = `before send for type \`${s}\``;
                if (a && "number" === typeof i && Math.random() > i)
                    return this.recordDroppedEvent("sample_rate", "error", t),
                    (0,
                    et.$2)(new K(`Discarding event because it's not included in the random sample (sampling rate = ${i})`,"log"));
                const c = "replay_event" === s ? "replay" : s;
                return this._prepareEvent(t, e, n).then((n=>{
                    if (null === n)
                        throw this.recordDroppedEvent("event_processor", c, t),
                        new K("An event processor returned `null`, will not send event.","log");
                    if (e.data && !0 === e.data.__sentry__)
                        return n;
                    return function(t, e) {
                        const n = `${e} must return \`null\` or a valid event.`;
                        if ((0,
                        U.J8)(t))
                            return t.then((t=>{
                                if (!(0,
                                U.PO)(t) && null !== t)
                                    throw new K(n);
                                return t
                            }
                            ), (t=>{
                                throw new K(`${e} rejected with ${t}`)
                            }
                            ));
                        if (!(0,
                        U.PO)(t) && null !== t)
                            throw new K(n);
                        return t
                    }(function(t, e, n) {
                        const {beforeSend: r, beforeSendTransaction: i} = t;
                        if (Rt(e) && r)
                            return r(e, n);
                        if (Ct(e) && i)
                            return i(e, n);
                        return e
                    }(r, n, e), u)
                }
                )).then((r=>{
                    if (null === r)
                        throw this.recordDroppedEvent("before_send", c, t),
                        new K(`${u} returned \`null\`, will not send event.`,"log");
                    const i = n && n.getSession();
                    !o && i && this._updateSessionFromEvent(i, r);
                    const a = r.transaction_info;
                    if (o && a && r.transaction !== t.transaction) {
                        const t = "custom";
                        r.transaction_info = {
                            ...a,
                            source: t
                        }
                    }
                    return this.sendEvent(r, e),
                    r
                }
                )).then(null, (t=>{
                    if (t instanceof K)
                        throw t;
                    throw this.captureException(t, {
                        data: {
                            __sentry__: !0
                        },
                        originalException: t
                    }),
                    new K(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${t}`)
                }
                ))
            }
            _process(t) {
                this._numProcessing++,
                t.then((t=>(this._numProcessing--,
                t)), (t=>(this._numProcessing--,
                t)))
            }
            _sendEnvelope(t) {
                if (this._transport && this._dsn)
                    return this.emit("beforeEnvelope", t),
                    this._transport.send(t).then(null, (t=>{
                        ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.error("Error while sending event:", t)
                    }
                    ));
                ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.error("Transport disabled")
            }
            _clearOutcomes() {
                const t = this._outcomes;
                return this._outcomes = {},
                Object.keys(t).map((e=>{
                    const [n,r] = e.split(":");
                    return {
                        reason: n,
                        category: r,
                        quantity: t[e]
                    }
                }
                ))
            }
        }
        function Rt(t) {
            return void 0 === t.type
        }
        function Ct(t) {
            return "transaction" === t.type
        }
        var Dt = n(68518);
        function wt(t, e) {
            const n = kt(t, e)
              , r = {
                type: e && e.name,
                value: xt(e)
            };
            return n.length && (r.stacktrace = {
                frames: n
            }),
            void 0 === r.type && "" === r.value && (r.value = "Unrecoverable error caught"),
            r
        }
        function Ot(t, e) {
            return {
                exception: {
                    values: [wt(t, e)]
                }
            }
        }
        function kt(t, e) {
            const n = e.stacktrace || e.stack || ""
              , r = function(t) {
                if (t) {
                    if ("number" === typeof t.framesToPop)
                        return t.framesToPop;
                    if (Nt.test(t.message))
                        return 1
                }
                return 0
            }(e);
            try {
                return t(n, r)
            } catch (i) {}
            return []
        }
        const Nt = /Minified React error #\d+;/i;
        function xt(t) {
            const e = t && t.message;
            return e ? e.error && "string" === typeof e.error.message ? e.error.message : e : "No error message"
        }
        function It(t, e, n, i, o) {
            let a;
            if ((0,
            U.VW)(e) && e.error) {
                return Ot(t, e.error)
            }
            if ((0,
            U.TX)(e) || (0,
            U.fm)(e)) {
                const r = e;
                if ("stack"in e)
                    a = Ot(t, e);
                else {
                    const e = r.name || ((0,
                    U.TX)(r) ? "DOMError" : "DOMException")
                      , o = r.message ? `${e}: ${r.message}` : e;
                    a = Ut(t, o, n, i),
                    (0,
                    l.Db)(a, o)
                }
                return "code"in r && (a.tags = {
                    ...a.tags,
                    "DOMException.code": `${r.code}`
                }),
                a
            }
            if ((0,
            U.VZ)(e))
                return Ot(t, e);
            if ((0,
            U.PO)(e) || (0,
            U.cO)(e)) {
                return a = function(t, e, n, i) {
                    const o = (0,
                    r.Gd)().getClient()
                      , a = o && o.getOptions().normalizeDepth
                      , s = {
                        exception: {
                            values: [{
                                type: (0,
                                U.cO)(e) ? e.constructor.name : i ? "UnhandledRejection" : "Error",
                                value: `Non-Error ${i ? "promise rejection" : "exception"} captured with keys: ${(0,
                                b.zf)(e)}`
                            }]
                        },
                        extra: {
                            __serialized__: rt(e, a)
                        }
                    };
                    if (n) {
                        const e = kt(t, n);
                        e.length && (s.exception.values[0].stacktrace = {
                            frames: e
                        })
                    }
                    return s
                }(t, e, n, o),
                (0,
                l.EG)(a, {
                    synthetic: !0
                }),
                a
            }
            return a = Ut(t, e, n, i),
            (0,
            l.Db)(a, `${e}`, void 0),
            (0,
            l.EG)(a, {
                synthetic: !0
            }),
            a
        }
        function Ut(t, e, n, r) {
            const i = {
                message: e
            };
            if (r && n) {
                const r = kt(t, n);
                r.length && (i.exception = {
                    values: [{
                        value: e,
                        stacktrace: {
                            frames: r
                        }
                    }]
                })
            }
            return i
        }
        var At = n(64487);
        const Bt = k.n2;
        let Lt = 0;
        function Mt() {
            return Lt > 0
        }
        function Pt() {
            Lt++,
            setTimeout((()=>{
                Lt--
            }
            ))
        }
        function Gt(t, e={}, n) {
            if ("function" !== typeof t)
                return t;
            try {
                const e = t.__sentry_wrapped__;
                if (e)
                    return e;
                if ((0,
                b.HK)(t))
                    return t
            } catch (i) {
                return t
            }
            const r = function() {
                const r = Array.prototype.slice.call(arguments);
                try {
                    n && "function" === typeof n && n.apply(this, arguments);
                    const i = r.map((t=>Gt(t, e)));
                    return t.apply(this, i)
                } catch (i) {
                    throw Pt(),
                    (0,
                    At.$e)((t=>{
                        t.addEventProcessor((t=>(e.mechanism && ((0,
                        l.Db)(t, void 0, void 0),
                        (0,
                        l.EG)(t, e.mechanism)),
                        t.extra = {
                            ...t.extra,
                            arguments: r
                        },
                        t))),
                        (0,
                        At.Tb)(i)
                    }
                    )),
                    i
                }
            };
            try {
                for (const e in t)
                    Object.prototype.hasOwnProperty.call(t, e) && (r[e] = t[e])
            } catch (o) {}
            (0,
            b.$Q)(r, t),
            (0,
            b.xp)(t, "__sentry_wrapped__", r);
            try {
                Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", {
                    get: ()=>t.name
                })
            } catch (o) {}
            return r
        }
        var Yt = n(58464);
        const $t = ["fatal", "error", "warning", "log", "info", "debug"];
        function qt(t) {
            return "warn" === t ? "warning" : $t.includes(t) ? t : "log"
        }
        function Ft(t) {
            if (!t)
                return {};
            const e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
            if (!e)
                return {};
            const n = e[6] || ""
              , r = e[8] || "";
            return {
                host: e[4],
                path: e[5],
                protocol: e[2],
                search: n,
                hash: r,
                relative: e[5] + n + r
            }
        }
        const jt = 1024
          , Ht = "Breadcrumbs";
        class zt {
            static __initStatic() {
                this.id = Ht
            }
            __init() {
                this.name = zt.id
            }
            constructor(t) {
                zt.prototype.__init.call(this),
                this.options = {
                    console: !0,
                    dom: !0,
                    fetch: !0,
                    history: !0,
                    sentry: !0,
                    xhr: !0,
                    ...t
                }
            }
            setupOnce() {
                this.options.console && G("console", Wt),
                this.options.dom && G("dom", function(t) {
                    function e(e) {
                        let n, i = "object" === typeof t ? t.serializeAttribute : void 0, o = "object" === typeof t && "number" === typeof t.maxStringLength ? t.maxStringLength : void 0;
                        o && o > jt && (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${o} was configured. Sentry will use 1024 instead.`),
                        o = jt),
                        "string" === typeof i && (i = [i]);
                        try {
                            const t = e.event;
                            n = function(t) {
                                return t && !!t.target
                            }(t) ? (0,
                            Yt.Rt)(t.target, {
                                keyAttrs: i,
                                maxStringLength: o
                            }) : (0,
                            Yt.Rt)(t, {
                                keyAttrs: i,
                                maxStringLength: o
                            })
                        } catch (a) {
                            n = "<unknown>"
                        }
                        0 !== n.length && (0,
                        r.Gd)().addBreadcrumb({
                            category: `ui.${e.name}`,
                            message: n
                        }, {
                            event: e.event,
                            name: e.name,
                            global: e.global
                        })
                    }
                    return e
                }(this.options.dom)),
                this.options.xhr && G("xhr", Vt),
                this.options.fetch && G("fetch", Kt),
                this.options.history && G("history", Zt)
            }
            addSentryBreadcrumb(t) {
                this.options.sentry && (0,
                r.Gd)().addBreadcrumb({
                    category: "sentry." + ("transaction" === t.type ? "transaction" : "event"),
                    event_id: t.event_id,
                    level: t.level,
                    message: (0,
                    l.jH)(t)
                }, {
                    event: t
                })
            }
        }
        function Wt(t) {
            for (let n = 0; n < t.args.length; n++)
                if ("ref=Ref<" === t.args[n]) {
                    t.args[n + 1] = "viewRef";
                    break
                }
            const e = {
                category: "console",
                data: {
                    arguments: t.args,
                    logger: "console"
                },
                level: qt(t.level),
                message: (0,
                g.nK)(t.args, " ")
            };
            if ("assert" === t.level) {
                if (!1 !== t.args[0])
                    return;
                e.message = `Assertion failed: ${(0,
                g.nK)(t.args.slice(1), " ") || "console.assert"}`,
                e.data.arguments = t.args.slice(1)
            }
            (0,
            r.Gd)().addBreadcrumb(e, {
                input: t.args,
                level: t.level
            })
        }
        function Vt(t) {
            const {startTimestamp: e, endTimestamp: n} = t
              , i = t.xhr.__sentry_xhr_v2__;
            if (!e || !n || !i)
                return;
            const {method: o, url: a, status_code: s, body: u} = i
              , c = {
                method: o,
                url: a,
                status_code: s
            }
              , d = {
                xhr: t.xhr,
                input: u,
                startTimestamp: e,
                endTimestamp: n
            };
            (0,
            r.Gd)().addBreadcrumb({
                category: "xhr",
                data: c,
                type: "http"
            }, d)
        }
        function Kt(t) {
            const {startTimestamp: e, endTimestamp: n} = t;
            if (n && (!t.fetchData.url.match(/sentry_key/) || "POST" !== t.fetchData.method))
                if (t.error) {
                    const i = t.fetchData
                      , o = {
                        data: t.error,
                        input: t.args,
                        startTimestamp: e,
                        endTimestamp: n
                    };
                    (0,
                    r.Gd)().addBreadcrumb({
                        category: "fetch",
                        data: i,
                        level: "error",
                        type: "http"
                    }, o)
                } else {
                    const i = {
                        ...t.fetchData,
                        status_code: t.response && t.response.status
                    }
                      , o = {
                        input: t.args,
                        response: t.response,
                        startTimestamp: e,
                        endTimestamp: n
                    };
                    (0,
                    r.Gd)().addBreadcrumb({
                        category: "fetch",
                        data: i,
                        type: "http"
                    }, o)
                }
        }
        function Zt(t) {
            let e = t.from
              , n = t.to;
            const i = Ft(Bt.location.href);
            let o = Ft(e);
            const a = Ft(n);
            o.path || (o = i),
            i.protocol === a.protocol && i.host === a.host && (n = a.relative),
            i.protocol === o.protocol && i.host === o.host && (e = o.relative),
            (0,
            r.Gd)().addBreadcrumb({
                category: "navigation",
                data: {
                    from: e,
                    to: n
                }
            })
        }
        zt.__initStatic();
        class Qt extends St {
            constructor(t) {
                const e = Bt.SENTRY_SDK_SOURCE || (0,
                Dt.S)();
                t._metadata = t._metadata || {},
                t._metadata.sdk = t._metadata.sdk || {
                    name: "sentry.javascript.browser",
                    packages: [{
                        name: `${e}:@sentry/browser`,
                        version: f
                    }],
                    version: f
                },
                super(t),
                t.sendClientReports && Bt.document && Bt.document.addEventListener("visibilitychange", (()=>{
                    "hidden" === Bt.document.visibilityState && this._flushOutcomes()
                }
                ))
            }
            eventFromException(t, e) {
                return function(t, e, n, r) {
                    const i = It(t, e, n && n.syntheticException || void 0, r);
                    return (0,
                    l.EG)(i),
                    i.level = "error",
                    n && n.event_id && (i.event_id = n.event_id),
                    (0,
                    et.WD)(i)
                }(this._options.stackParser, t, e, this._options.attachStacktrace)
            }
            eventFromMessage(t, e="info", n) {
                return function(t, e, n="info", r, i) {
                    const o = Ut(t, e, r && r.syntheticException || void 0, i);
                    return o.level = n,
                    r && r.event_id && (o.event_id = r.event_id),
                    (0,
                    et.WD)(o)
                }(this._options.stackParser, t, e, n, this._options.attachStacktrace)
            }
            sendEvent(t, e) {
                const n = this.getIntegrationById(Ht);
                n && n.addSentryBreadcrumb && n.addSentryBreadcrumb(t),
                super.sendEvent(t, e)
            }
            captureUserFeedback(t) {
                if (!this._isEnabled())
                    return void (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.warn("SDK not enabled, will not capture user feedback."));
                const e = function(t, {metadata: e, tunnel: n, dsn: r}) {
                    return ot({
                        event_id: t.event_id,
                        sent_at: (new Date).toISOString(),
                        ...e && e.sdk && {
                            sdk: {
                                name: e.sdk.name,
                                version: e.sdk.version
                            }
                        },
                        ...!!n && !!r && {
                            dsn: Q(r)
                        }
                    }, [function(t) {
                        return [{
                            type: "user_report"
                        }, t]
                    }(t)])
                }(t, {
                    metadata: this.getSdkMetadata(),
                    dsn: this.getDsn(),
                    tunnel: this.getOptions().tunnel
                });
                this._sendEnvelope(e)
            }
            _prepareEvent(t, e, n) {
                return t.platform = t.platform || "javascript",
                super._prepareEvent(t, e, n)
            }
            _flushOutcomes() {
                const t = this._clearOutcomes();
                if (0 === t.length)
                    return void (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.log("No outcomes to send"));
                if (!this._dsn)
                    return void (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.log("No dsn provided, will not send outcomes"));
                ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.log("Sending outcomes:", t);
                const e = (n = t,
                ot((r = this._options.tunnel && Q(this._dsn)) ? {
                    dsn: r
                } : {}, [[{
                    type: "client_report"
                }, {
                    timestamp: i || (0,
                    gt.yW)(),
                    discarded_events: n
                }]]));
                var n, r, i;
                this._sendEnvelope(e)
            }
        }
        class Xt {
            static __initStatic() {
                this.id = "GlobalHandlers"
            }
            __init() {
                this.name = Xt.id
            }
            __init2() {
                this._installFunc = {
                    onerror: Jt,
                    onunhandledrejection: te
                }
            }
            constructor(t) {
                Xt.prototype.__init.call(this),
                Xt.prototype.__init2.call(this),
                this._options = {
                    onerror: !0,
                    onunhandledrejection: !0,
                    ...t
                }
            }
            setupOnce() {
                Error.stackTraceLimit = 50;
                const t = this._options;
                for (const n in t) {
                    const r = this._installFunc[n];
                    r && t[n] && (e = n,
                    ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.log(`Global Handler attached: ${e}`),
                    r(),
                    this._installFunc[n] = void 0)
                }
                var e
            }
        }
        function Jt() {
            G("error", (t=>{
                const [e,n,r] = re();
                if (!e.getIntegration(Xt))
                    return;
                const {msg: i, url: o, line: a, column: s, error: u} = t;
                if (Mt() || u && u.__sentry_own_request__)
                    return;
                const c = void 0 === u && (0,
                U.HD)(i) ? function(t, e, n, r) {
                    const i = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
                    let o = (0,
                    U.VW)(t) ? t.message : t
                      , a = "Error";
                    const s = o.match(i);
                    s && (a = s[1],
                    o = s[2]);
                    return ee({
                        exception: {
                            values: [{
                                type: a,
                                value: o
                            }]
                        }
                    }, e, n, r)
                }(i, o, a, s) : ee(It(n, u || i, void 0, r, !1), o, a, s);
                c.level = "error",
                ne(e, u, c, "onerror")
            }
            ))
        }
        function te() {
            G("unhandledrejection", (t=>{
                const [e,n,r] = re();
                if (!e.getIntegration(Xt))
                    return;
                let i = t;
                try {
                    "reason"in t ? i = t.reason : "detail"in t && "reason"in t.detail && (i = t.detail.reason)
                } catch (a) {}
                if (Mt() || i && i.__sentry_own_request__)
                    return !0;
                const o = (0,
                U.pt)(i) ? {
                    exception: {
                        values: [{
                            type: "UnhandledRejection",
                            value: `Non-Error promise rejection captured with value: ${String(i)}`
                        }]
                    }
                } : It(n, i, void 0, r, !0);
                o.level = "error",
                ne(e, i, o, "onunhandledrejection")
            }
            ))
        }
        function ee(t, e, n, r) {
            const i = t.exception = t.exception || {}
              , o = i.values = i.values || []
              , a = o[0] = o[0] || {}
              , s = a.stacktrace = a.stacktrace || {}
              , u = s.frames = s.frames || []
              , c = isNaN(parseInt(r, 10)) ? void 0 : r
              , d = isNaN(parseInt(n, 10)) ? void 0 : n
              , f = (0,
            U.HD)(e) && e.length > 0 ? e : (0,
            Yt.l4)();
            return 0 === u.length && u.push({
                colno: c,
                filename: f,
                function: "?",
                in_app: !0,
                lineno: d
            }),
            t
        }
        function ne(t, e, n, r) {
            (0,
            l.EG)(n, {
                handled: !1,
                type: r
            }),
            t.captureEvent(n, {
                originalException: e
            })
        }
        function re() {
            const t = (0,
            r.Gd)()
              , e = t.getClient()
              , n = e && e.getOptions() || {
                stackParser: ()=>[],
                attachStacktrace: !1
            };
            return [t, n.stackParser, n.attachStacktrace]
        }
        Xt.__initStatic();
        const ie = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
        class oe {
            static __initStatic() {
                this.id = "TryCatch"
            }
            __init() {
                this.name = oe.id
            }
            constructor(t) {
                oe.prototype.__init.call(this),
                this._options = {
                    XMLHttpRequest: !0,
                    eventTarget: !0,
                    requestAnimationFrame: !0,
                    setInterval: !0,
                    setTimeout: !0,
                    ...t
                }
            }
            setupOnce() {
                this._options.setTimeout && (0,
                b.hl)(Bt, "setTimeout", ae),
                this._options.setInterval && (0,
                b.hl)(Bt, "setInterval", ae),
                this._options.requestAnimationFrame && (0,
                b.hl)(Bt, "requestAnimationFrame", se),
                this._options.XMLHttpRequest && "XMLHttpRequest"in Bt && (0,
                b.hl)(XMLHttpRequest.prototype, "send", ue);
                const t = this._options.eventTarget;
                if (t) {
                    (Array.isArray(t) ? t : ie).forEach(ce)
                }
            }
        }
        function ae(t) {
            return function(...e) {
                const n = e[0];
                return e[0] = Gt(n, {
                    mechanism: {
                        data: {
                            function: O(t)
                        },
                        handled: !0,
                        type: "instrument"
                    }
                }),
                t.apply(this, e)
            }
        }
        function se(t) {
            return function(e) {
                return t.apply(this, [Gt(e, {
                    mechanism: {
                        data: {
                            function: "requestAnimationFrame",
                            handler: O(t)
                        },
                        handled: !0,
                        type: "instrument"
                    }
                })])
            }
        }
        function ue(t) {
            return function(...e) {
                const n = this;
                return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((t=>{
                    t in n && "function" === typeof n[t] && (0,
                    b.hl)(n, t, (function(e) {
                        const n = {
                            mechanism: {
                                data: {
                                    function: t,
                                    handler: O(e)
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        }
                          , r = (0,
                        b.HK)(e);
                        return r && (n.mechanism.data.handler = O(r)),
                        Gt(e, n)
                    }
                    ))
                }
                )),
                t.apply(this, e)
            }
        }
        function ce(t) {
            const e = Bt
              , n = e[t] && e[t].prototype;
            n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && ((0,
            b.hl)(n, "addEventListener", (function(e) {
                return function(n, r, i) {
                    try {
                        "function" === typeof r.handleEvent && (r.handleEvent = Gt(r.handleEvent, {
                            mechanism: {
                                data: {
                                    function: "handleEvent",
                                    handler: O(r),
                                    target: t
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        }))
                    } catch (o) {}
                    return e.apply(this, [n, Gt(r, {
                        mechanism: {
                            data: {
                                function: "addEventListener",
                                handler: O(r),
                                target: t
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }), i])
                }
            }
            )),
            (0,
            b.hl)(n, "removeEventListener", (function(t) {
                return function(e, n, r) {
                    const i = n;
                    try {
                        const n = i && i.__sentry_wrapped__;
                        n && t.call(this, e, n, r)
                    } catch (o) {}
                    return t.call(this, e, i, r)
                }
            }
            )))
        }
        oe.__initStatic();
        class de {
            static __initStatic() {
                this.id = "LinkedErrors"
            }
            __init() {
                this.name = de.id
            }
            constructor(t={}) {
                de.prototype.__init.call(this),
                this._key = t.key || "cause",
                this._limit = t.limit || 5
            }
            setupOnce() {
                const t = (0,
                r.Gd)().getClient();
                t && (0,
                h.c)(((e,n)=>{
                    const i = (0,
                    r.Gd)().getIntegration(de);
                    return i ? function(t, e, n, r, i) {
                        if (!r.exception || !r.exception.values || !i || !(0,
                        U.V9)(i.originalException, Error))
                            return r;
                        const o = fe(t, n, i.originalException, e);
                        return r.exception.values = [...o, ...r.exception.values],
                        r
                    }(t.getOptions().stackParser, i._key, i._limit, e, n) : e
                }
                ))
            }
        }
        function fe(t, e, n, r, i=[]) {
            if (!(0,
            U.V9)(n[r], Error) || i.length + 1 >= e)
                return i;
            const o = wt(t, n[r]);
            return fe(t, e, n[r], r, [o, ...i])
        }
        de.__initStatic();
        class le {
            constructor() {
                le.prototype.__init.call(this)
            }
            static __initStatic() {
                this.id = "HttpContext"
            }
            __init() {
                this.name = le.id
            }
            setupOnce() {
                (0,
                h.c)((t=>{
                    if ((0,
                    r.Gd)().getIntegration(le)) {
                        if (!Bt.navigator && !Bt.location && !Bt.document)
                            return t;
                        const e = t.request && t.request.url || Bt.location && Bt.location.href
                          , {referrer: n} = Bt.document || {}
                          , {userAgent: r} = Bt.navigator || {}
                          , i = {
                            ...t.request && t.request.headers,
                            ...n && {
                                Referer: n
                            },
                            ...r && {
                                "User-Agent": r
                            }
                        }
                          , o = {
                            ...t.request,
                            ...e && {
                                url: e
                            },
                            headers: i
                        };
                        return {
                            ...t,
                            request: o
                        }
                    }
                    return t
                }
                ))
            }
        }
        le.__initStatic();
        class pe {
            constructor() {
                pe.prototype.__init.call(this)
            }
            static __initStatic() {
                this.id = "Dedupe"
            }
            __init() {
                this.name = pe.id
            }
            setupOnce(t, e) {
                const n = t=>{
                    if (t.type)
                        return t;
                    const n = e().getIntegration(pe);
                    if (n) {
                        try {
                            if (function(t, e) {
                                if (!e)
                                    return !1;
                                if (function(t, e) {
                                    const n = t.message
                                      , r = e.message;
                                    if (!n && !r)
                                        return !1;
                                    if (n && !r || !n && r)
                                        return !1;
                                    if (n !== r)
                                        return !1;
                                    if (!_e(t, e))
                                        return !1;
                                    if (!he(t, e))
                                        return !1;
                                    return !0
                                }(t, e))
                                    return !0;
                                if (function(t, e) {
                                    const n = me(e)
                                      , r = me(t);
                                    if (!n || !r)
                                        return !1;
                                    if (n.type !== r.type || n.value !== r.value)
                                        return !1;
                                    if (!_e(t, e))
                                        return !1;
                                    if (!he(t, e))
                                        return !1;
                                    return !0
                                }(t, e))
                                    return !0;
                                return !1
                            }(t, n._previousEvent))
                                return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.warn("Event dropped due to being a duplicate of previously captured event."),
                                null
                        } catch (r) {
                            return n._previousEvent = t
                        }
                        return n._previousEvent = t
                    }
                    return t
                }
                ;
                n.id = this.name,
                t(n)
            }
        }
        function he(t, e) {
            let n = ve(t)
              , r = ve(e);
            if (!n && !r)
                return !0;
            if (n && !r || !n && r)
                return !1;
            if (n = n,
            r = r,
            r.length !== n.length)
                return !1;
            for (let i = 0; i < r.length; i++) {
                const t = r[i]
                  , e = n[i];
                if (t.filename !== e.filename || t.lineno !== e.lineno || t.colno !== e.colno || t.function !== e.function)
                    return !1
            }
            return !0
        }
        function _e(t, e) {
            let n = t.fingerprint
              , r = e.fingerprint;
            if (!n && !r)
                return !0;
            if (n && !r || !n && r)
                return !1;
            n = n,
            r = r;
            try {
                return !(n.join("") !== r.join(""))
            } catch (i) {
                return !1
            }
        }
        function me(t) {
            return t.exception && t.exception.values && t.exception.values[0]
        }
        function ve(t) {
            const e = t.exception;
            if (e)
                try {
                    return e.values[0].stacktrace.frames
                } catch (n) {
                    return
                }
        }
        pe.__initStatic();
        const ge = "?";
        function ye(t, e, n, r) {
            const i = {
                filename: t,
                function: e,
                in_app: !0
            };
            return void 0 !== n && (i.lineno = n),
            void 0 !== r && (i.colno = r),
            i
        }
        const Ee = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i
          , Te = /\((\S*)(?::(\d+))(?::(\d+))\)/
          , be = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i
          , Se = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i
          , Re = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i
          , Ce = D(...[[30, t=>{
            const e = Ee.exec(t);
            if (e) {
                if (e[2] && 0 === e[2].indexOf("eval")) {
                    const t = Te.exec(e[2]);
                    t && (e[2] = t[1],
                    e[3] = t[2],
                    e[4] = t[3])
                }
                const [t,n] = De(e[1] || ge, e[2]);
                return ye(n, t, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0)
            }
        }
        ], [50, t=>{
            const e = be.exec(t);
            if (e) {
                if (e[3] && e[3].indexOf(" > eval") > -1) {
                    const t = Se.exec(e[3]);
                    t && (e[1] = e[1] || "eval",
                    e[3] = t[1],
                    e[4] = t[2],
                    e[5] = "")
                }
                let t = e[3]
                  , n = e[1] || ge;
                return [n,t] = De(n, t),
                ye(t, n, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
            }
        }
        ], [40, t=>{
            const e = Re.exec(t);
            return e ? ye(e[2], e[1] || ge, +e[3], e[4] ? +e[4] : void 0) : void 0
        }
        ]])
          , De = (t,e)=>{
            const n = -1 !== t.indexOf("safari-extension")
              , r = -1 !== t.indexOf("safari-web-extension");
            return n || r ? [-1 !== t.indexOf("@") ? t.split("@")[0] : ge, n ? `safari-extension:${e}` : `safari-web-extension:${e}`] : [t, e]
        }
        ;
        function we(t) {
            const e = [];
            function n(t) {
                return e.splice(e.indexOf(t), 1)[0]
            }
            return {
                $: e,
                add: function(r) {
                    if (!(void 0 === t || e.length < t))
                        return (0,
                        et.$2)(new K("Not adding Promise because buffer limit was reached."));
                    const i = r();
                    return -1 === e.indexOf(i) && e.push(i),
                    i.then((()=>n(i))).then(null, (()=>n(i).then(null, (()=>{}
                    )))),
                    i
                },
                drain: function(t) {
                    return new et.cW(((n,r)=>{
                        let i = e.length;
                        if (!i)
                            return n(!0);
                        const o = setTimeout((()=>{
                            t && t > 0 && n(!1)
                        }
                        ), t);
                        e.forEach((t=>{
                            (0,
                            et.WD)(t).then((()=>{
                                --i || (clearTimeout(o),
                                n(!0))
                            }
                            ), r)
                        }
                        ))
                    }
                    ))
                }
            }
        }
        function Oe(t, {statusCode: e, headers: n}, r=Date.now()) {
            const i = {
                ...t
            }
              , o = n && n["x-sentry-rate-limits"]
              , a = n && n["retry-after"];
            if (o)
                for (const s of o.trim().split(",")) {
                    const [t,e] = s.split(":", 2)
                      , n = parseInt(t, 10)
                      , o = 1e3 * (isNaN(n) ? 60 : n);
                    if (e)
                        for (const a of e.split(";"))
                            i[a] = r + o;
                    else
                        i.all = r + o
                }
            else
                a ? i.all = r + function(t, e=Date.now()) {
                    const n = parseInt(`${t}`, 10);
                    if (!isNaN(n))
                        return 1e3 * n;
                    const r = Date.parse(`${t}`);
                    return isNaN(r) ? 6e4 : r - e
                }(a, r) : 429 === e && (i.all = r + 6e4);
            return i
        }
        function ke(t, e, n=we(t.bufferSize || 30)) {
            let r = {};
            function i(i) {
                const o = [];
                if (st(i, ((e,n)=>{
                    const i = lt(n);
                    if (function(t, e, n=Date.now()) {
                        return function(t, e) {
                            return t[e] || t.all || 0
                        }(t, e) > n
                    }(r, i)) {
                        const r = Ne(e, n);
                        t.recordDroppedEvent("ratelimit_backoff", i, r)
                    } else
                        o.push(e)
                }
                )),
                0 === o.length)
                    return (0,
                    et.WD)();
                const a = ot(i[0], o)
                  , s = e=>{
                    st(a, ((n,r)=>{
                        const i = Ne(n, r);
                        t.recordDroppedEvent(e, lt(r), i)
                    }
                    ))
                }
                ;
                return n.add((()=>e({
                    body: ct(a, t.textEncoder)
                }).then((t=>(void 0 !== t.statusCode && (t.statusCode < 200 || t.statusCode >= 300) && ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.warn(`Sentry responded with status code ${t.statusCode} to sent event.`),
                r = Oe(r, t),
                t)), (t=>{
                    throw s("network_error"),
                    t
                }
                )))).then((t=>t), (t=>{
                    if (t instanceof K)
                        return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.error("Skipped sending event because buffer is full."),
                        s("queue_overflow"),
                        (0,
                        et.WD)();
                    throw t
                }
                ))
            }
            return i.__sentry__baseTransport__ = !0,
            {
                send: i,
                flush: t=>n.drain(t)
            }
        }
        function Ne(t, e) {
            if ("event" === e || "transaction" === e)
                return Array.isArray(t) ? t[1] : void 0
        }
        let xe;
        function Ie(t, e=function() {
            if (xe)
                return xe;
            if (I(Bt.fetch))
                return xe = Bt.fetch.bind(Bt);
            const t = Bt.document;
            let e = Bt.fetch;
            if (t && "function" === typeof t.createElement)
                try {
                    const n = t.createElement("iframe");
                    n.hidden = !0,
                    t.head.appendChild(n);
                    const r = n.contentWindow;
                    r && r.fetch && (e = r.fetch),
                    t.head.removeChild(n)
                } catch (n) {
                    ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", n)
                }
            return xe = e.bind(Bt)
        }()) {
            let n = 0
              , r = 0;
            return ke(t, (function(i) {
                const o = i.body.length;
                n += o,
                r++;
                const a = {
                    body: i.body,
                    method: "POST",
                    referrerPolicy: "origin",
                    headers: t.headers,
                    keepalive: n <= 6e4 && r < 15,
                    ...t.fetchOptions
                };
                try {
                    return e(t.url, a).then((t=>(n -= o,
                    r--,
                    {
                        statusCode: t.status,
                        headers: {
                            "x-sentry-rate-limits": t.headers.get("X-Sentry-Rate-Limits"),
                            "retry-after": t.headers.get("Retry-After")
                        }
                    })))
                } catch (s) {
                    return xe = void 0,
                    n -= o,
                    r--,
                    (0,
                    et.$2)(s)
                }
            }
            ))
        }
        function Ue(t) {
            return ke(t, (function(e) {
                return new et.cW(((n,r)=>{
                    const i = new XMLHttpRequest;
                    i.onerror = r,
                    i.onreadystatechange = ()=>{
                        4 === i.readyState && n({
                            statusCode: i.status,
                            headers: {
                                "x-sentry-rate-limits": i.getResponseHeader("X-Sentry-Rate-Limits"),
                                "retry-after": i.getResponseHeader("Retry-After")
                            }
                        })
                    }
                    ,
                    i.open("POST", t.url);
                    for (const e in t.headers)
                        Object.prototype.hasOwnProperty.call(t.headers, e) && i.setRequestHeader(e, t.headers[e]);
                    i.send(e.body)
                }
                ))
            }
            ))
        }
        const Ae = [new E, new R, new oe, new zt, new Xt, new de, new pe, new le];
        function Be(t={}) {
            void 0 === t.defaultIntegrations && (t.defaultIntegrations = Ae),
            void 0 === t.release && ("string" === typeof __SENTRY_RELEASE__ && (t.release = __SENTRY_RELEASE__),
            Bt.SENTRY_RELEASE && Bt.SENTRY_RELEASE.id && (t.release = Bt.SENTRY_RELEASE.id)),
            void 0 === t.autoSessionTracking && (t.autoSessionTracking = !0),
            void 0 === t.sendClientReports && (t.sendClientReports = !0);
            const e = {
                ...t,
                stackParser: (n = t.stackParser || Ce,
                Array.isArray(n) ? D(...n) : n),
                integrations: m(t),
                transport: t.transport || (x() ? Ie : Ue)
            };
            var n;
            !function(t, e) {
                !0 === e.debug && ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? p.kg.enable() : console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."));
                const n = (0,
                r.Gd)();
                n.getScope().update(e.initialScope);
                const i = new t(e);
                n.bindClient(i)
            }(Qt, e),
            t.autoSessionTracking && function() {
                if ("undefined" === typeof Bt.document)
                    return void (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.warn("Session tracking in non-browser environment with @sentry/browser is not supported."));
                const t = (0,
                r.Gd)();
                if (!t.captureSession)
                    return;
                Le(t),
                G("history", (({from: t, to: e})=>{
                    void 0 !== t && t !== e && Le((0,
                    r.Gd)())
                }
                ))
            }()
        }
        function Le(t) {
            t.startSession({
                ignoreDuration: !0
            }),
            t.captureSession()
        }
        class Me {
            __init() {
                this.spans = []
            }
            constructor(t=1e3) {
                Me.prototype.__init.call(this),
                this._maxlen = t
            }
            add(t) {
                this.spans.length > this._maxlen ? t.spanRecorder = void 0 : this.spans.push(t)
            }
        }
        class Pe {
            __init2() {
                this.traceId = (0,
                l.DM)()
            }
            __init3() {
                this.spanId = (0,
                l.DM)().substring(16)
            }
            __init4() {
                this.startTimestamp = (0,
                gt.ph)()
            }
            __init5() {
                this.tags = {}
            }
            __init6() {
                this.data = {}
            }
            __init7() {
                this.instrumenter = "sentry"
            }
            constructor(t) {
                if (Pe.prototype.__init2.call(this),
                Pe.prototype.__init3.call(this),
                Pe.prototype.__init4.call(this),
                Pe.prototype.__init5.call(this),
                Pe.prototype.__init6.call(this),
                Pe.prototype.__init7.call(this),
                !t)
                    return this;
                t.traceId && (this.traceId = t.traceId),
                t.spanId && (this.spanId = t.spanId),
                t.parentSpanId && (this.parentSpanId = t.parentSpanId),
                "sampled"in t && (this.sampled = t.sampled),
                t.op && (this.op = t.op),
                t.description && (this.description = t.description),
                t.data && (this.data = t.data),
                t.tags && (this.tags = t.tags),
                t.status && (this.status = t.status),
                t.startTimestamp && (this.startTimestamp = t.startTimestamp),
                t.endTimestamp && (this.endTimestamp = t.endTimestamp),
                t.instrumenter && (this.instrumenter = t.instrumenter)
            }
            startChild(t) {
                const e = new Pe({
                    ...t,
                    parentSpanId: this.spanId,
                    sampled: this.sampled,
                    traceId: this.traceId
                });
                if (e.spanRecorder = this.spanRecorder,
                e.spanRecorder && e.spanRecorder.add(e),
                e.transaction = this.transaction,
                ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.transaction) {
                    const n = `[Tracing] Starting '${t && t.op || "< unknown op >"}' span on transaction '${e.transaction.name || "< unknown name >"}' (${e.transaction.spanId}).`;
                    e.transaction.metadata.spanMetadata[e.spanId] = {
                        logMessage: n
                    },
                    p.kg.log(n)
                }
                return e
            }
            setTag(t, e) {
                return this.tags = {
                    ...this.tags,
                    [t]: e
                },
                this
            }
            setData(t, e) {
                return this.data = {
                    ...this.data,
                    [t]: e
                },
                this
            }
            setStatus(t) {
                return this.status = t,
                this
            }
            setHttpStatus(t) {
                this.setTag("http.status_code", String(t));
                const e = function(t) {
                    if (t < 400 && t >= 100)
                        return "ok";
                    if (t >= 400 && t < 500)
                        switch (t) {
                        case 401:
                            return "unauthenticated";
                        case 403:
                            return "permission_denied";
                        case 404:
                            return "not_found";
                        case 409:
                            return "already_exists";
                        case 413:
                            return "failed_precondition";
                        case 429:
                            return "resource_exhausted";
                        default:
                            return "invalid_argument"
                        }
                    if (t >= 500 && t < 600)
                        switch (t) {
                        case 501:
                            return "unimplemented";
                        case 503:
                            return "unavailable";
                        case 504:
                            return "deadline_exceeded";
                        default:
                            return "internal_error"
                        }
                    return "unknown_error"
                }(t);
                return "unknown_error" !== e && this.setStatus(e),
                this
            }
            isSuccess() {
                return "ok" === this.status
            }
            finish(t) {
                if (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && this.transaction && this.transaction.spanId !== this.spanId) {
                    const {logMessage: t} = this.transaction.metadata.spanMetadata[this.spanId];
                    t && p.kg.log(t.replace("Starting", "Finishing"))
                }
                this.endTimestamp = "number" === typeof t ? t : (0,
                gt.ph)()
            }
            toTraceparent() {
                let t = "";
                return void 0 !== this.sampled && (t = this.sampled ? "-1" : "-0"),
                `${this.traceId}-${this.spanId}${t}`
            }
            toContext() {
                return (0,
                b.Jr)({
                    data: this.data,
                    description: this.description,
                    endTimestamp: this.endTimestamp,
                    op: this.op,
                    parentSpanId: this.parentSpanId,
                    sampled: this.sampled,
                    spanId: this.spanId,
                    startTimestamp: this.startTimestamp,
                    status: this.status,
                    tags: this.tags,
                    traceId: this.traceId
                })
            }
            updateWithContext(t) {
                return this.data = t.data || {},
                this.description = t.description,
                this.endTimestamp = t.endTimestamp,
                this.op = t.op,
                this.parentSpanId = t.parentSpanId,
                this.sampled = t.sampled,
                this.spanId = t.spanId || this.spanId,
                this.startTimestamp = t.startTimestamp || this.startTimestamp,
                this.status = t.status,
                this.tags = t.tags || {},
                this.traceId = t.traceId || this.traceId,
                this
            }
            getTraceContext() {
                return (0,
                b.Jr)({
                    data: Object.keys(this.data).length > 0 ? this.data : void 0,
                    description: this.description,
                    op: this.op,
                    parent_span_id: this.parentSpanId,
                    span_id: this.spanId,
                    status: this.status,
                    tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
                    trace_id: this.traceId
                })
            }
            toJSON() {
                return (0,
                b.Jr)({
                    data: Object.keys(this.data).length > 0 ? this.data : void 0,
                    description: this.description,
                    op: this.op,
                    parent_span_id: this.parentSpanId,
                    span_id: this.spanId,
                    start_timestamp: this.startTimestamp,
                    status: this.status,
                    tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
                    timestamp: this.endTimestamp,
                    trace_id: this.traceId
                })
            }
        }
        class Ge extends Pe {
            __init() {
                this._measurements = {}
            }
            __init2() {
                this._contexts = {}
            }
            __init3() {
                this._frozenDynamicSamplingContext = void 0
            }
            constructor(t, e) {
                super(t),
                Ge.prototype.__init.call(this),
                Ge.prototype.__init2.call(this),
                Ge.prototype.__init3.call(this),
                this._hub = e || (0,
                r.Gd)(),
                this._name = t.name || "",
                this.metadata = {
                    source: "custom",
                    ...t.metadata,
                    spanMetadata: {}
                },
                this._trimEnd = t.trimEnd,
                this.transaction = this;
                const n = this.metadata.dynamicSamplingContext;
                n && (this._frozenDynamicSamplingContext = {
                    ...n
                })
            }
            get name() {
                return this._name
            }
            set name(t) {
                this.setName(t)
            }
            setName(t, e="custom") {
                this._name = t,
                this.metadata.source = e
            }
            initSpanRecorder(t=1e3) {
                this.spanRecorder || (this.spanRecorder = new Me(t)),
                this.spanRecorder.add(this)
            }
            setContext(t, e) {
                null === e ? delete this._contexts[t] : this._contexts[t] = e
            }
            setMeasurement(t, e, n="") {
                this._measurements[t] = {
                    value: e,
                    unit: n
                }
            }
            setMetadata(t) {
                this.metadata = {
                    ...this.metadata,
                    ...t
                }
            }
            finish(t) {
                if (void 0 !== this.endTimestamp)
                    return;
                this.name || (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.warn("Transaction has no name, falling back to `<unlabeled transaction>`."),
                this.name = "<unlabeled transaction>"),
                super.finish(t);
                const e = this._hub.getClient();
                if (e && e.emit && e.emit("finishTransaction", this),
                !0 !== this.sampled)
                    return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."),
                    void (e && e.recordDroppedEvent("sample_rate", "transaction"));
                const n = this.spanRecorder ? this.spanRecorder.spans.filter((t=>t !== this && t.endTimestamp)) : [];
                this._trimEnd && n.length > 0 && (this.endTimestamp = n.reduce(((t,e)=>t.endTimestamp && e.endTimestamp ? t.endTimestamp > e.endTimestamp ? t : e : t)).endTimestamp);
                const r = this.metadata
                  , i = {
                    contexts: {
                        ...this._contexts,
                        trace: this.getTraceContext()
                    },
                    spans: n,
                    start_timestamp: this.startTimestamp,
                    tags: this.tags,
                    timestamp: this.endTimestamp,
                    transaction: this.name,
                    type: "transaction",
                    sdkProcessingMetadata: {
                        ...r,
                        dynamicSamplingContext: this.getDynamicSamplingContext()
                    },
                    ...r.source && {
                        transaction_info: {
                            source: r.source
                        }
                    }
                };
                return Object.keys(this._measurements).length > 0 && (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.log("[Measurements] Adding measurements to transaction", JSON.stringify(this._measurements, void 0, 2)),
                i.measurements = this._measurements),
                ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.log(`[Tracing] Finishing ${this.op} transaction: ${this.name}.`),
                this._hub.captureEvent(i)
            }
            toContext() {
                const t = super.toContext();
                return (0,
                b.Jr)({
                    ...t,
                    name: this.name,
                    trimEnd: this._trimEnd
                })
            }
            updateWithContext(t) {
                return super.updateWithContext(t),
                this.name = t.name || "",
                this._trimEnd = t.trimEnd,
                this
            }
            getDynamicSamplingContext() {
                if (this._frozenDynamicSamplingContext)
                    return this._frozenDynamicSamplingContext;
                const t = this._hub || (0,
                r.Gd)()
                  , e = t && t.getClient();
                if (!e)
                    return {};
                const {environment: n, release: i} = e.getOptions() || {}
                  , {publicKey: o} = e.getDsn() || {}
                  , a = this.metadata.sampleRate
                  , s = void 0 !== a ? a.toString() : void 0
                  , {segment: u} = t.getScope().getUser() || {}
                  , c = this.metadata.source
                  , d = c && "url" !== c ? this.name : void 0
                  , f = (0,
                b.Jr)({
                    environment: n || yt.J,
                    release: i,
                    transaction: d,
                    user_segment: u,
                    public_key: o,
                    trace_id: this.traceId,
                    sample_rate: s
                });
                return e.emit && e.emit("createDsc", f),
                f
            }
            setHub(t) {
                this._hub = t
            }
        }
        const Ye = {
            idleTimeout: 1e3,
            finalTimeout: 3e4,
            heartbeatInterval: 5e3
        }
          , $e = ["heartbeatFailed", "idleTimeout", "documentHidden", "finalTimeout", "externalFinish", "cancelled"];
        class qe extends Me {
            constructor(t, e, n, r) {
                super(r),
                this._pushActivity = t,
                this._popActivity = e,
                this.transactionSpanId = n
            }
            add(t) {
                t.spanId !== this.transactionSpanId && (t.finish = e=>{
                    t.endTimestamp = "number" === typeof e ? e : (0,
                    gt.ph)(),
                    this._popActivity(t.spanId)
                }
                ,
                void 0 === t.endTimestamp && this._pushActivity(t.spanId)),
                super.add(t)
            }
        }
        class Fe extends Ge {
            __init() {
                this.activities = {}
            }
            __init2() {
                this._heartbeatCounter = 0
            }
            __init3() {
                this._finished = !1
            }
            __init4() {
                this._idleTimeoutCanceledPermanently = !1
            }
            __init5() {
                this._beforeFinishCallbacks = []
            }
            __init6() {
                this._finishReason = $e[4]
            }
            constructor(t, e, n=Ye.idleTimeout, r=Ye.finalTimeout, i=Ye.heartbeatInterval, o=!1) {
                super(t, e),
                this._idleHub = e,
                this._idleTimeout = n,
                this._finalTimeout = r,
                this._heartbeatInterval = i,
                this._onScope = o,
                Fe.prototype.__init.call(this),
                Fe.prototype.__init2.call(this),
                Fe.prototype.__init3.call(this),
                Fe.prototype.__init4.call(this),
                Fe.prototype.__init5.call(this),
                Fe.prototype.__init6.call(this),
                o && (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.log(`Setting idle transaction on scope. Span ID: ${this.spanId}`),
                e.configureScope((t=>t.setSpan(this)))),
                this._restartIdleTimeout(),
                setTimeout((()=>{
                    this._finished || (this.setStatus("deadline_exceeded"),
                    this._finishReason = $e[3],
                    this.finish())
                }
                ), this._finalTimeout)
            }
            finish(t=(0,
            gt.ph)()) {
                if (this._finished = !0,
                this.activities = {},
                "ui.action.click" === this.op && this.setTag("finishReason", this._finishReason),
                this.spanRecorder) {
                    ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.log("[Tracing] finishing IdleTransaction", new Date(1e3 * t).toISOString(), this.op);
                    for (const e of this._beforeFinishCallbacks)
                        e(this, t);
                    this.spanRecorder.spans = this.spanRecorder.spans.filter((e=>{
                        if (e.spanId === this.spanId)
                            return !0;
                        e.endTimestamp || (e.endTimestamp = t,
                        e.setStatus("cancelled"),
                        ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.log("[Tracing] cancelling span since transaction ended early", JSON.stringify(e, void 0, 2)));
                        const n = e.startTimestamp < t;
                        return n || ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.log("[Tracing] discarding Span since it happened after Transaction was finished", JSON.stringify(e, void 0, 2)),
                        n
                    }
                    )),
                    ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.log("[Tracing] flushing IdleTransaction")
                } else
                    ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.log("[Tracing] No active IdleTransaction");
                if (this._onScope) {
                    const t = this._idleHub.getScope();
                    t.getTransaction() === this && t.setSpan(void 0)
                }
                return super.finish(t)
            }
            registerBeforeFinishCallback(t) {
                this._beforeFinishCallbacks.push(t)
            }
            initSpanRecorder(t) {
                if (!this.spanRecorder) {
                    const e = t=>{
                        this._finished || this._pushActivity(t)
                    }
                      , n = t=>{
                        this._finished || this._popActivity(t)
                    }
                    ;
                    this.spanRecorder = new qe(e,n,this.spanId,t),
                    ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.log("Starting heartbeat"),
                    this._pingHeartbeat()
                }
                this.spanRecorder.add(this)
            }
            cancelIdleTimeout(t, {restartOnChildSpanChange: e}={
                restartOnChildSpanChange: !0
            }) {
                this._idleTimeoutCanceledPermanently = !1 === e,
                this._idleTimeoutID && (clearTimeout(this._idleTimeoutID),
                this._idleTimeoutID = void 0,
                0 === Object.keys(this.activities).length && this._idleTimeoutCanceledPermanently && (this._finishReason = $e[5],
                this.finish(t)))
            }
            setFinishReason(t) {
                this._finishReason = t
            }
            _restartIdleTimeout(t) {
                this.cancelIdleTimeout(),
                this._idleTimeoutID = setTimeout((()=>{
                    this._finished || 0 !== Object.keys(this.activities).length || (this._finishReason = $e[1],
                    this.finish(t))
                }
                ), this._idleTimeout)
            }
            _pushActivity(t) {
                this.cancelIdleTimeout(void 0, {
                    restartOnChildSpanChange: !this._idleTimeoutCanceledPermanently
                }),
                ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.log(`[Tracing] pushActivity: ${t}`),
                this.activities[t] = !0,
                ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.log("[Tracing] new activities count", Object.keys(this.activities).length)
            }
            _popActivity(t) {
                if (this.activities[t] && (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.log(`[Tracing] popActivity ${t}`),
                delete this.activities[t],
                ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.log("[Tracing] new activities count", Object.keys(this.activities).length)),
                0 === Object.keys(this.activities).length) {
                    const t = (0,
                    gt.ph)();
                    this._idleTimeoutCanceledPermanently ? (this._finishReason = $e[5],
                    this.finish(t)) : this._restartIdleTimeout(t + this._idleTimeout / 1e3)
                }
            }
            _beat() {
                if (this._finished)
                    return;
                const t = Object.keys(this.activities).join("");
                t === this._prevHeartbeatString ? this._heartbeatCounter++ : this._heartbeatCounter = 1,
                this._prevHeartbeatString = t,
                this._heartbeatCounter >= 3 ? (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.log("[Tracing] Transaction finished because of no change for 3 heart beats"),
                this.setStatus("deadline_exceeded"),
                this._finishReason = $e[0],
                this.finish()) : this._pingHeartbeat()
            }
            _pingHeartbeat() {
                ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`),
                setTimeout((()=>{
                    this._beat()
                }
                ), this._heartbeatInterval)
            }
        }
        function je(t) {
            return (t || (0,
            r.Gd)()).getScope().getTransaction()
        }
        let He = !1;
        function ze() {
            const t = je();
            if (t) {
                const e = "internal_error";
                ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.log(`[Tracing] Transaction: ${e} -> Global error occured`),
                t.setStatus(e)
            }
        }
        function We() {
            const t = this.getScope().getSpan();
            return t ? {
                "sentry-trace": t.toTraceparent()
            } : {}
        }
        function Ve(t, e, n) {
            if (!i(e))
                return t.sampled = !1,
                t;
            if (void 0 !== t.sampled)
                return t.setMetadata({
                    sampleRate: Number(t.sampled)
                }),
                t;
            let r;
            return "function" === typeof e.tracesSampler ? (r = e.tracesSampler(n),
            t.setMetadata({
                sampleRate: Number(r)
            })) : void 0 !== n.parentSampled ? r = n.parentSampled : "undefined" !== typeof e.tracesSampleRate ? (r = e.tracesSampleRate,
            t.setMetadata({
                sampleRate: Number(r)
            })) : (r = 1,
            t.setMetadata({
                sampleRate: r
            })),
            function(t) {
                if ((0,
                U.i2)(t) || "number" !== typeof t && "boolean" !== typeof t)
                    return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(t)} of type ${JSON.stringify(typeof t)}.`),
                    !1;
                if (t < 0 || t > 1)
                    return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${t}.`),
                    !1;
                return !0
            }(r) ? r ? (t.sampled = Math.random() < r,
            t.sampled ? (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.log(`[Tracing] starting ${t.op} transaction - ${t.name}`),
            t) : (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(r)})`),
            t)) : (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.log("[Tracing] Discarding transaction because " + ("function" === typeof e.tracesSampler ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0")),
            t.sampled = !1,
            t) : (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.warn("[Tracing] Discarding transaction because of invalid sample rate."),
            t.sampled = !1,
            t)
        }
        function Ke(t, e) {
            const n = this.getClient()
              , r = n && n.getOptions() || {}
              , i = r.instrumenter || "sentry"
              , o = t.instrumenter || "sentry";
            i !== o && (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.error(`A transaction was started with instrumenter=\`${o}\`, but the SDK is configured with the \`${i}\` instrumenter.\nThe transaction will not be sampled. Please use the ${i} instrumentation to start transactions.`),
            t.sampled = !1);
            let a = new Ge(t,this);
            return a = Ve(a, r, {
                parentSampled: t.parentSampled,
                transactionContext: t,
                ...e
            }),
            a.sampled && a.initSpanRecorder(r._experiments && r._experiments.maxSpans),
            n && n.emit && n.emit("startTransaction", a),
            a
        }
        function Ze(t, e, n, r, i, o, a) {
            const s = t.getClient()
              , u = s && s.getOptions() || {};
            let c = new Fe(e,t,n,r,a,i);
            return c = Ve(c, u, {
                parentSampled: e.parentSampled,
                transactionContext: e,
                ...o
            }),
            c.sampled && c.initSpanRecorder(u._experiments && u._experiments.maxSpans),
            s && s.emit && s.emit("startTransaction", c),
            c
        }
        function Qe() {
            const t = (0,
            r.cu)();
            t.__SENTRY__ && (t.__SENTRY__.extensions = t.__SENTRY__.extensions || {},
            t.__SENTRY__.extensions.startTransaction || (t.__SENTRY__.extensions.startTransaction = Ke),
            t.__SENTRY__.extensions.traceHeaders || (t.__SENTRY__.extensions.traceHeaders = We),
            He || (He = !0,
            G("error", ze),
            G("unhandledrejection", ze)))
        }
        ze.tag = "sentry_tracingErrorCallback";
        const Xe = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");
        function Je(t) {
            const e = t.match(Xe);
            if (!t || !e)
                return;
            let n;
            return "1" === e[3] ? n = !0 : "0" === e[3] && (n = !1),
            {
                traceId: e[1],
                parentSampled: n,
                parentSpanId: e[2]
            }
        }
        const tn = "baggage"
          , en = "sentry-"
          , nn = /^sentry-/;
        function rn(t) {
            if (!(0,
            U.HD)(t) && !Array.isArray(t))
                return;
            let e = {};
            if (Array.isArray(t))
                e = t.reduce(((t,e)=>({
                    ...t,
                    ...an(e)
                })), {});
            else {
                if (!t)
                    return;
                e = an(t)
            }
            const n = Object.entries(e).reduce(((t,[e,n])=>{
                if (e.match(nn)) {
                    t[e.slice(en.length)] = n
                }
                return t
            }
            ), {});
            return Object.keys(n).length > 0 ? n : void 0
        }
        function on(t) {
            return function(t) {
                if (0 === Object.keys(t).length)
                    return;
                return Object.entries(t).reduce(((t,[e,n],r)=>{
                    const i = `${encodeURIComponent(e)}=${encodeURIComponent(n)}`
                      , o = 0 === r ? i : `${t},${i}`;
                    return o.length > 8192 ? (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.warn(`Not adding key: ${e} with val: ${n} to baggage header due to exceeding baggage size limits.`),
                    t) : o
                }
                ), "")
            }(Object.entries(t).reduce(((t,[e,n])=>(n && (t[`sentry-${e}`] = n),
            t)), {}))
        }
        function an(t) {
            return t.split(",").map((t=>t.split("=").map((t=>decodeURIComponent(t.trim()))))).reduce(((t,[e,n])=>(t[e] = n,
            t)), {})
        }
        const sn = k.n2;
        const un = (t,e,n)=>{
            let r, i;
            return o=>{
                e.value >= 0 && (o || n) && (i = e.value - (r || 0),
                (i || void 0 === r) && (r = e.value,
                e.delta = i,
                t(e)))
            }
        }
          , cn = ()=>sn.__WEB_VITALS_POLYFILL__ ? sn.performance && (performance.getEntriesByType && performance.getEntriesByType("navigation")[0] || (()=>{
            const t = sn.performance.timing
              , e = sn.performance.navigation.type
              , n = {
                entryType: "navigation",
                startTime: 0,
                type: 2 == e ? "back_forward" : 1 === e ? "reload" : "navigate"
            };
            for (const r in t)
                "navigationStart" !== r && "toJSON" !== r && (n[r] = Math.max(t[r] - t.navigationStart, 0));
            return n
        }
        )()) : sn.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
          , dn = ()=>{
            const t = cn();
            return t && t.activationStart || 0
        }
          , fn = (t,e)=>{
            const n = cn();
            let r = "navigate";
            return n && (r = sn.document.prerendering || dn() > 0 ? "prerender" : n.type.replace(/_/g, "-")),
            {
                name: t,
                value: "undefined" === typeof e ? -1 : e,
                rating: "good",
                delta: 0,
                entries: [],
                id: `v3-${Date.now()}-${Math.floor(8999999999999 * Math.random()) + 1e12}`,
                navigationType: r
            }
        }
          , ln = (t,e,n)=>{
            try {
                if (PerformanceObserver.supportedEntryTypes.includes(t)) {
                    const r = new PerformanceObserver((t=>{
                        e(t.getEntries())
                    }
                    ));
                    return r.observe(Object.assign({
                        type: t,
                        buffered: !0
                    }, n || {})),
                    r
                }
            } catch (r) {}
        }
          , pn = (t,e)=>{
            const n = r=>{
                "pagehide" !== r.type && "hidden" !== sn.document.visibilityState || (t(r),
                e && (removeEventListener("visibilitychange", n, !0),
                removeEventListener("pagehide", n, !0)))
            }
            ;
            addEventListener("visibilitychange", n, !0),
            addEventListener("pagehide", n, !0)
        }
        ;
        let hn = -1;
        const _n = ()=>(hn < 0 && (hn = "hidden" !== sn.document.visibilityState || sn.document.prerendering ? 1 / 0 : 0,
        pn((({timeStamp: t})=>{
            hn = t
        }
        ), !0)),
        {
            get firstHiddenTime() {
                return hn
            }
        })
          , mn = {};
        function vn(t) {
            return "number" === typeof t && isFinite(t)
        }
        function gn(t, {startTimestamp: e, ...n}) {
            return e && t.startTimestamp > e && (t.startTimestamp = e),
            t.startChild({
                startTimestamp: e,
                ...n
            })
        }
        function yn(t) {
            return t / 1e3
        }
        function En() {
            return sn && sn.addEventListener && sn.performance
        }
        let Tn, bn, Sn = 0, Rn = {};
        function Cn() {
            const t = En();
            if (t && gt.Z1) {
                t.mark && sn.performance.mark("sentry-tracing-init"),
                (t=>{
                    const e = _n()
                      , n = fn("FID");
                    let r;
                    const i = t=>{
                        t.startTime < e.firstHiddenTime && (n.value = t.processingStart - t.startTime,
                        n.entries.push(t),
                        r(!0))
                    }
                      , o = t=>{
                        t.forEach(i)
                    }
                      , a = ln("first-input", o);
                    r = un(t, n),
                    a && pn((()=>{
                        o(a.takeRecords()),
                        a.disconnect()
                    }
                    ), !0)
                }
                )((t=>{
                    const e = t.entries.pop();
                    if (!e)
                        return;
                    const n = yn(gt.Z1)
                      , r = yn(e.startTime);
                    ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.log("[Measurements] Adding FID"),
                    Rn.fid = {
                        value: t.value,
                        unit: "millisecond"
                    },
                    Rn["mark.fid"] = {
                        value: n + r,
                        unit: "second"
                    }
                }
                ));
                const e = (t=>{
                    const e = fn("CLS", 0);
                    let n, r = 0, i = [];
                    const o = t=>{
                        t.forEach((t=>{
                            if (!t.hadRecentInput) {
                                const o = i[0]
                                  , a = i[i.length - 1];
                                r && 0 !== i.length && t.startTime - a.startTime < 1e3 && t.startTime - o.startTime < 5e3 ? (r += t.value,
                                i.push(t)) : (r = t.value,
                                i = [t]),
                                r > e.value && (e.value = r,
                                e.entries = i,
                                n && n())
                            }
                        }
                        ))
                    }
                      , a = ln("layout-shift", o);
                    if (a) {
                        n = un(t, e);
                        const r = ()=>{
                            o(a.takeRecords()),
                            n(!0)
                        }
                        ;
                        return pn(r),
                        r
                    }
                }
                )((t=>{
                    const e = t.entries.pop();
                    e && (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.log("[Measurements] Adding CLS"),
                    Rn.cls = {
                        value: t.value,
                        unit: ""
                    },
                    bn = e)
                }
                ))
                  , n = (t=>{
                    const e = _n()
                      , n = fn("LCP");
                    let r;
                    const i = t=>{
                        const i = t[t.length - 1];
                        if (i) {
                            const t = Math.max(i.startTime - dn(), 0);
                            t < e.firstHiddenTime && (n.value = t,
                            n.entries = [i],
                            r())
                        }
                    }
                      , o = ln("largest-contentful-paint", i);
                    if (o) {
                        r = un(t, n);
                        const e = ()=>{
                            mn[n.id] || (i(o.takeRecords()),
                            o.disconnect(),
                            mn[n.id] = !0,
                            r(!0))
                        }
                        ;
                        return ["keydown", "click"].forEach((t=>{
                            addEventListener(t, e, {
                                once: !0,
                                capture: !0
                            })
                        }
                        )),
                        pn(e, !0),
                        e
                    }
                }
                )((t=>{
                    const e = t.entries.pop();
                    e && (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.log("[Measurements] Adding LCP"),
                    Rn.lcp = {
                        value: t.value,
                        unit: "millisecond"
                    },
                    Tn = e)
                }
                ));
                return ()=>{
                    e && e(),
                    n && n()
                }
            }
            return ()=>{}
        }
        function Dn(t) {
            const e = En();
            if (!e || !sn.performance.getEntries || !gt.Z1)
                return;
            ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.log("[Tracing] Adding & adjusting spans using Performance API");
            const n = yn(gt.Z1)
              , r = e.getEntries();
            let i, o;
            if (r.slice(Sn).forEach((e=>{
                const r = yn(e.startTime)
                  , a = yn(e.duration);
                if (!("navigation" === t.op && n + r < t.startTimestamp))
                    switch (e.entryType) {
                    case "navigation":
                        !function(t, e, n) {
                            ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach((r=>{
                                wn(t, e, r, n)
                            }
                            )),
                            wn(t, e, "secureConnection", n, "TLS/SSL", "connectEnd"),
                            wn(t, e, "fetch", n, "cache", "domainLookupStart"),
                            wn(t, e, "domainLookup", n, "DNS"),
                            function(t, e, n) {
                                gn(t, {
                                    op: "browser",
                                    description: "request",
                                    startTimestamp: n + yn(e.requestStart),
                                    endTimestamp: n + yn(e.responseEnd)
                                }),
                                gn(t, {
                                    op: "browser",
                                    description: "response",
                                    startTimestamp: n + yn(e.responseStart),
                                    endTimestamp: n + yn(e.responseEnd)
                                })
                            }(t, e, n)
                        }(t, e, n),
                        i = n + yn(e.responseStart),
                        o = n + yn(e.requestStart);
                        break;
                    case "mark":
                    case "paint":
                    case "measure":
                        {
                            !function(t, e, n, r, i) {
                                const o = i + n
                                  , a = o + r;
                                gn(t, {
                                    description: e.name,
                                    endTimestamp: a,
                                    op: e.entryType,
                                    startTimestamp: o
                                })
                            }(t, e, r, a, n);
                            const i = _n()
                              , o = e.startTime < i.firstHiddenTime;
                            "first-paint" === e.name && o && (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.log("[Measurements] Adding FP"),
                            Rn.fp = {
                                value: e.startTime,
                                unit: "millisecond"
                            }),
                            "first-contentful-paint" === e.name && o && (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.log("[Measurements] Adding FCP"),
                            Rn.fcp = {
                                value: e.startTime,
                                unit: "millisecond"
                            });
                            break
                        }
                    case "resource":
                        {
                            const i = e.name.replace(sn.location.origin, "");
                            !function(t, e, n, r, i, o) {
                                if ("xmlhttprequest" === e.initiatorType || "fetch" === e.initiatorType)
                                    return;
                                const a = {};
                                "transferSize"in e && (a["http.response_transfer_size"] = e.transferSize);
                                "encodedBodySize"in e && (a["http.response_content_length"] = e.encodedBodySize);
                                "decodedBodySize"in e && (a["http.decoded_response_content_length"] = e.decodedBodySize);
                                "renderBlockingStatus"in e && (a["resource.render_blocking_status"] = e.renderBlockingStatus);
                                const s = o + r;
                                gn(t, {
                                    description: n,
                                    endTimestamp: s + i,
                                    op: e.initiatorType ? `resource.${e.initiatorType}` : "resource.other",
                                    startTimestamp: s,
                                    data: a
                                })
                            }(t, e, i, r, a, n);
                            break
                        }
                    }
            }
            )),
            Sn = Math.max(r.length - 1, 0),
            function(t) {
                const e = sn.navigator;
                if (!e)
                    return;
                const n = e.connection;
                n && (n.effectiveType && t.setTag("effectiveConnectionType", n.effectiveType),
                n.type && t.setTag("connectionType", n.type),
                vn(n.rtt) && (Rn["connection.rtt"] = {
                    value: n.rtt,
                    unit: "millisecond"
                }));
                vn(e.deviceMemory) && t.setTag("deviceMemory", `${e.deviceMemory} GB`);
                vn(e.hardwareConcurrency) && t.setTag("hardwareConcurrency", String(e.hardwareConcurrency))
            }(t),
            "pageload" === t.op) {
                "number" === typeof i && (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.log("[Measurements] Adding TTFB"),
                Rn.ttfb = {
                    value: 1e3 * (i - t.startTimestamp),
                    unit: "millisecond"
                },
                "number" === typeof o && o <= i && (Rn["ttfb.requestTime"] = {
                    value: 1e3 * (i - o),
                    unit: "millisecond"
                })),
                ["fcp", "fp", "lcp"].forEach((e=>{
                    if (!Rn[e] || n >= t.startTimestamp)
                        return;
                    const r = Rn[e].value
                      , i = n + yn(r)
                      , o = Math.abs(1e3 * (i - t.startTimestamp))
                      , a = o - r;
                    ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.log(`[Measurements] Normalized ${e} from ${r} to ${o} (${a})`),
                    Rn[e].value = o
                }
                ));
                const e = Rn["mark.fid"];
                e && Rn.fid && (gn(t, {
                    description: "first input delay",
                    endTimestamp: e.value + yn(Rn.fid.value),
                    op: "ui.action",
                    startTimestamp: e.value
                }),
                delete Rn["mark.fid"]),
                "fcp"in Rn || delete Rn.cls,
                Object.keys(Rn).forEach((e=>{
                    t.setMeasurement(e, Rn[e].value, Rn[e].unit)
                }
                )),
                function(t) {
                    Tn && (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.log("[Measurements] Adding LCP Data"),
                    Tn.element && t.setTag("lcp.element", (0,
                    Yt.Rt)(Tn.element)),
                    Tn.id && t.setTag("lcp.id", Tn.id),
                    Tn.url && t.setTag("lcp.url", Tn.url.trim().slice(0, 200)),
                    t.setTag("lcp.size", Tn.size));
                    bn && bn.sources && (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.log("[Measurements] Adding CLS Data"),
                    bn.sources.forEach(((e,n)=>t.setTag(`cls.source.${n + 1}`, (0,
                    Yt.Rt)(e.node)))))
                }(t)
            }
            Tn = void 0,
            bn = void 0,
            Rn = {}
        }
        function wn(t, e, n, r, i, o) {
            const a = o ? e[o] : e[`${n}End`]
              , s = e[`${n}Start`];
            s && a && gn(t, {
                op: "browser",
                description: i || n,
                startTimestamp: r + yn(s),
                endTimestamp: r + yn(a)
            })
        }
        const On = ["localhost", /^\//]
          , kn = {
            traceFetch: !0,
            traceXHR: !0,
            tracingOrigins: On,
            tracePropagationTargets: On
        };
        function Nn(t) {
            const {traceFetch: e, traceXHR: n, tracePropagationTargets: o, tracingOrigins: a, shouldCreateSpanForRequest: s} = {
                traceFetch: kn.traceFetch,
                traceXHR: kn.traceXHR,
                ...t
            }
              , u = "function" === typeof s ? s : t=>!0
              , c = t=>function(t, e) {
                return (0,
                g.U0)(t, e || On)
            }(t, o || a)
              , d = {};
            e && G("fetch", (t=>{
                !function(t, e, n, o) {
                    if (!i() || !t.fetchData || !e(t.fetchData.url))
                        return;
                    if (t.endTimestamp) {
                        const e = t.fetchData.__span;
                        if (!e)
                            return;
                        const n = o[e];
                        return void (n && (t.response ? n.setHttpStatus(t.response.status) : t.error && n.setStatus("internal_error"),
                        n.finish(),
                        delete o[e]))
                    }
                    const a = t.response && t.response.headers && t.response.headers.get("content-length")
                      , s = (0,
                    r.Gd)().getScope()
                      , u = s && s.getSpan()
                      , c = u && u.transaction;
                    if (u && c) {
                        const {method: e, url: r} = t.fetchData
                          , i = u.startChild({
                            data: {
                                url: r,
                                type: "fetch",
                                ...a ? {
                                    "http.response_content_length": a
                                } : {},
                                "http.method": e
                            },
                            description: `${e} ${r}`,
                            op: "http.client"
                        });
                        t.fetchData.__span = i.spanId,
                        o[i.spanId] = i;
                        const s = t.args[0];
                        t.args[1] = t.args[1] || {};
                        const d = t.args[1];
                        n(t.fetchData.url) && (d.headers = function(t, e, n, r) {
                            const i = on(e)
                              , o = n.toTraceparent()
                              , a = "undefined" !== typeof Request && (0,
                            U.V9)(t, Request) ? t.headers : r.headers;
                            if (a) {
                                if ("undefined" !== typeof Headers && (0,
                                U.V9)(a, Headers)) {
                                    const t = new Headers(a);
                                    return t.append("sentry-trace", o),
                                    i && t.append(tn, i),
                                    t
                                }
                                if (Array.isArray(a)) {
                                    const t = [...a, ["sentry-trace", o]];
                                    return i && t.push([tn, i]),
                                    t
                                }
                                {
                                    const t = "baggage"in a ? a.baggage : void 0
                                      , e = [];
                                    return Array.isArray(t) ? e.push(...t) : t && e.push(t),
                                    i && e.push(i),
                                    {
                                        ...a,
                                        "sentry-trace": o,
                                        baggage: e.length > 0 ? e.join(",") : void 0
                                    }
                                }
                            }
                            return {
                                "sentry-trace": o,
                                baggage: i
                            }
                        }(s, c.getDynamicSamplingContext(), i, d))
                    }
                }(t, u, c, d)
            }
            )),
            n && G("xhr", (t=>{
                !function(t, e, n, o) {
                    const a = t.xhr
                      , s = a && a.__sentry_xhr_v2__;
                    if (!i() || a && a.__sentry_own_request__ || !(a && s && e(s.url)))
                        return;
                    if (t.endTimestamp) {
                        const t = a.__sentry_xhr_span_id__;
                        if (!t)
                            return;
                        const e = o[t];
                        return void (e && (e.setHttpStatus(s.status_code),
                        e.finish(),
                        delete o[t]))
                    }
                    const u = (0,
                    r.Gd)().getScope()
                      , c = u && u.getSpan()
                      , d = c && c.transaction;
                    if (c && d) {
                        const t = c.startChild({
                            data: {
                                ...s.data,
                                type: "xhr",
                                "http.method": s.method,
                                url: s.url
                            },
                            description: `${s.method} ${s.url}`,
                            op: "http.client"
                        });
                        if (a.__sentry_xhr_span_id__ = t.spanId,
                        o[a.__sentry_xhr_span_id__] = t,
                        a.setRequestHeader && n(s.url))
                            try {
                                a.setRequestHeader("sentry-trace", t.toTraceparent());
                                const e = on(d.getDynamicSamplingContext());
                                e && a.setRequestHeader(tn, e)
                            } catch (f) {}
                    }
                }(t, u, c, d)
            }
            ))
        }
        const xn = {
            ...Ye,
            markBackgroundTransactions: !0,
            routingInstrumentation: function(t, e=!0, n=!0) {
                if (!sn || !sn.location)
                    return void (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.warn("Could not initialize routing instrumentation due to invalid location"));
                let r, i = sn.location.href;
                e && (r = t({
                    name: sn.location.pathname,
                    startTimestamp: gt.Z1 ? gt.Z1 / 1e3 : void 0,
                    op: "pageload",
                    metadata: {
                        source: "url"
                    }
                })),
                n && G("history", (({to: e, from: n})=>{
                    void 0 === n && i && -1 !== i.indexOf(e) ? i = void 0 : n !== e && (i = void 0,
                    r && (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.log(`[Tracing] Finishing current transaction with op: ${r.op}`),
                    r.finish()),
                    r = t({
                        name: sn.location.pathname,
                        op: "navigation",
                        metadata: {
                            source: "url"
                        }
                    }))
                }
                ))
            },
            startTransactionOnLocationChange: !0,
            startTransactionOnPageLoad: !0,
            enableLongTask: !0,
            _experiments: {},
            ...kn
        };
        class In {
            __init() {
                this.name = "BrowserTracing"
            }
            constructor(t) {
                In.prototype.__init.call(this),
                Qe(),
                this.options = {
                    ...xn,
                    ...t
                },
                void 0 !== this.options._experiments.enableLongTask && (this.options.enableLongTask = this.options._experiments.enableLongTask),
                t && !t.tracePropagationTargets && t.tracingOrigins && (this.options.tracePropagationTargets = t.tracingOrigins),
                this._collectWebVitals = Cn(),
                this.options.enableLongTask && ln("longtask", (t=>{
                    for (const e of t) {
                        const t = je();
                        if (!t)
                            return;
                        const n = yn(gt.Z1 + e.startTime)
                          , r = yn(e.duration);
                        t.startChild({
                            description: "Main UI thread blocked",
                            op: "ui.long-task",
                            startTimestamp: n,
                            endTimestamp: n + r
                        })
                    }
                }
                )),
                this.options._experiments.enableInteractions && ln("event", (t=>{
                    for (const e of t) {
                        const t = je();
                        if (!t)
                            return;
                        if ("click" === e.name) {
                            const n = yn(gt.Z1 + e.startTime)
                              , r = yn(e.duration);
                            t.startChild({
                                description: (0,
                                Yt.Rt)(e.target),
                                op: `ui.interaction.${e.name}`,
                                startTimestamp: n,
                                endTimestamp: n + r
                            })
                        }
                    }
                }
                ), {
                    durationThreshold: 0
                })
            }
            setupOnce(t, e) {
                this._getCurrentHub = e;
                const {routingInstrumentation: n, startTransactionOnLocationChange: r, startTransactionOnPageLoad: i, markBackgroundTransactions: o, traceFetch: a, traceXHR: s, tracePropagationTargets: u, shouldCreateSpanForRequest: c, _experiments: d} = this.options;
                n((t=>{
                    const n = this._createRouteTransaction(t);
                    return this.options._experiments.onStartRouteTransaction && this.options._experiments.onStartRouteTransaction(n, t, e),
                    n
                }
                ), i, r),
                o && (sn && sn.document ? sn.document.addEventListener("visibilitychange", (()=>{
                    const t = je();
                    if (sn.document.hidden && t) {
                        const e = "cancelled";
                        ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.log(`[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${t.op}`),
                        t.status || t.setStatus(e),
                        t.setTag("visibilitychange", "document.hidden"),
                        t.finish()
                    }
                }
                )) : ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.warn("[Tracing] Could not set up background tab detection due to lack of global document")),
                d.enableInteractions && this._registerInteractionListener(),
                Nn({
                    traceFetch: a,
                    traceXHR: s,
                    tracePropagationTargets: u,
                    shouldCreateSpanForRequest: c
                })
            }
            _createRouteTransaction(t) {
                if (!this._getCurrentHub)
                    return void (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.warn(`[Tracing] Did not create ${t.op} transaction because _getCurrentHub is invalid.`));
                const {beforeNavigate: e, idleTimeout: n, finalTimeout: r, heartbeatInterval: i} = this.options
                  , o = "pageload" === t.op
                  , a = o ? Un("sentry-trace") : null
                  , s = o ? Un("baggage") : null
                  , u = a ? Je(a) : void 0
                  , c = s ? rn(s) : void 0
                  , d = {
                    ...t,
                    ...u,
                    metadata: {
                        ...t.metadata,
                        dynamicSamplingContext: u && !c ? {} : c
                    },
                    trimEnd: !0
                }
                  , f = "function" === typeof e ? e(d) : d
                  , l = void 0 === f ? {
                    ...d,
                    sampled: !1
                } : f;
                l.metadata = l.name !== d.name ? {
                    ...l.metadata,
                    source: "custom"
                } : l.metadata,
                this._latestRouteName = l.name,
                this._latestRouteSource = l.metadata && l.metadata.source,
                !1 === l.sampled && ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.log(`[Tracing] Will not send ${l.op} transaction because of beforeNavigate.`),
                ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.log(`[Tracing] Starting ${l.op} transaction on scope`);
                const h = this._getCurrentHub()
                  , {location: _} = sn
                  , m = Ze(h, l, n, r, !0, {
                    location: _
                }, i);
                return m.registerBeforeFinishCallback((t=>{
                    this._collectWebVitals(),
                    Dn(t)
                }
                )),
                m
            }
            _registerInteractionListener() {
                let t;
                const e = ()=>{
                    const {idleTimeout: e, finalTimeout: n, heartbeatInterval: r} = this.options
                      , i = "ui.action.click"
                      , o = je();
                    if (o && o.op && ["navigation", "pageload"].includes(o.op))
                        return void (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.warn(`[Tracing] Did not create ${i} transaction because a pageload or navigation transaction is in progress.`));
                    if (t && (t.setFinishReason("interactionInterrupted"),
                    t.finish(),
                    t = void 0),
                    !this._getCurrentHub)
                        return void (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.warn(`[Tracing] Did not create ${i} transaction because _getCurrentHub is invalid.`));
                    if (!this._latestRouteName)
                        return void (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.warn(`[Tracing] Did not create ${i} transaction because _latestRouteName is missing.`));
                    const a = this._getCurrentHub()
                      , {location: s} = sn
                      , u = {
                        name: this._latestRouteName,
                        op: i,
                        trimEnd: !0,
                        metadata: {
                            source: this._latestRouteSource || "url"
                        }
                    };
                    t = Ze(a, u, e, n, !0, {
                        location: s
                    }, r)
                }
                ;
                ["click"].forEach((t=>{
                    addEventListener(t, e, {
                        once: !1,
                        capture: !0
                    })
                }
                ))
            }
        }
        function Un(t) {
            const e = (0,
            Yt.qT)(`meta[name=${t}]`);
            return e ? e.getAttribute("content") : null
        }
        function An(t, e, n) {
            const r = e.match(/([a-z_]+)\.(.*)/i);
            if (null === r)
                t[e] = n;
            else {
                An(t[r[1]], r[2], n)
            }
        }
        function Bn(t, e, n={}) {
            return Array.isArray(e) ? Ln(t, e, n) : function(t, e, n) {
                return r=>{
                    const i = e(r);
                    if (t.allowExclusionByUser) {
                        if (!i.find((e=>e.name === t.name)))
                            return i
                    }
                    return Ln(t, i, n)
                }
            }(t, e, n)
        }
        function Ln(t, e, n) {
            const r = e.find((e=>e.name === t.name));
            if (r) {
                for (const [t,e] of Object.entries(n))
                    An(r, t, e);
                return e
            }
            return [...e, t]
        }
        var Mn = n(34155);
        var Pn = n(11163);
        const Gn = Bt;
        const Yn = {
            "routing.instrumentation": "next-router"
        };
        let $n, qn;
        const Fn = (0,
        r.Gd)().getClient();
        function jn(t, e=!0, n=!0) {
            const {route: r, traceParentData: i, baggage: o, params: a} = function() {
                let t;
                const e = Gn.document.getElementById("__NEXT_DATA__");
                if (e && e.innerHTML)
                    try {
                        t = JSON.parse(e.innerHTML)
                    } catch (a) {
                        ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.warn("Could not extract __NEXT_DATA__")
                    }
                if (!t)
                    return {};
                const n = {}
                  , {page: r, query: i, props: o} = t;
                return n.route = r,
                n.params = i,
                o && o.pageProps && (o.pageProps._sentryBaggage && (n.baggage = o.pageProps._sentryBaggage),
                o.pageProps._sentryTraceData && (n.traceParentData = Je(o.pageProps._sentryTraceData))),
                n
            }();
            if (qn = r || Gn.location.pathname,
            e) {
                const e = r ? "route" : "url"
                  , n = rn(o);
                $n = t({
                    name: qn,
                    op: "pageload",
                    tags: Yn,
                    ...a && Fn && Fn.getOptions().sendDefaultPii && {
                        data: a
                    },
                    ...i,
                    metadata: {
                        source: e,
                        dynamicSamplingContext: i && !n ? {} : n
                    }
                })
            }
            n && Pn.default.events.on("routeChangeStart", (e=>{
                const n = function(t) {
                    const e = (Gn.__BUILD_MANIFEST || {}).sortedPages;
                    if (!e)
                        return;
                    return e.find((e=>{
                        const n = function(t) {
                            const e = t.split("/");
                            let n = "";
                            e[e.length - 1].match(/^\[\[\.\.\..+\]\]$/) && (e.pop(),
                            n = "(?:/(.+?))?");
                            const r = e.map((t=>t.replace(/^\[\.\.\..+\]$/, "(.+?)").replace(/^\[.*\]$/, "([^/]+?)"))).join("/");
                            return new RegExp(`^${r}${n}(?:/)?$`)
                        }(e);
                        return t.match(n)
                    }
                    ))
                }(e.split(/[\?#]/, 1)[0]);
                let r, i;
                n ? (r = n,
                i = "route") : (r = e,
                i = "url");
                const o = {
                    ...Yn,
                    from: qn
                };
                qn = r,
                $n && $n.finish();
                const a = t({
                    name: r,
                    op: "navigation",
                    tags: o,
                    metadata: {
                        source: i
                    }
                });
                if (a) {
                    const t = a.startChild({
                        op: "ui.nextjs.route-change",
                        description: "Next.js Route Change"
                    })
                      , e = ()=>{
                        t.finish(),
                        Pn.default.events.off("routeChangeComplete", e)
                    }
                    ;
                    Pn.default.events.on("routeChangeComplete", e)
                }
            }
            ))
        }
        const Hn = n.g;
        const zn = n.g;
        function Wn(t) {
            !function(t) {
                const e = Hn.__sentryRewritesTunnelPath__;
                if (e && t.dsn) {
                    const n = X(t.dsn)
                      , r = n.host.match(/^o(\d+)\.ingest\.sentry\.io$/);
                    if (r) {
                        const i = `${e}?o=${r[1]}&p=${n.projectId}`;
                        t.tunnel = i,
                        ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.info(`Tunneling events to "${i}"`)
                    } else
                        ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && p.kg.warn("Provided DSN is not a Sentry SaaS DSN. Will not tunnel events.")
                }
            }(t),
            function(t, e) {
                t._metadata = t._metadata || {},
                t._metadata.sdk = t._metadata.sdk || {
                    name: "sentry.javascript.nextjs",
                    packages: e.map((t=>({
                        name: `npm:@sentry/${t}`,
                        version: f
                    }))),
                    version: f
                }
            }(t, ["nextjs", "react"]),
            t.environment = t.environment || function(t) {
                const e = t ? Mn.env.NEXT_PUBLIC_VERCEL_ENV : Mn.env.VERCEL_ENV;
                return e ? `vercel-${e}` : void 0
            }(!0) || "production",
            function(t) {
                let e = t.integrations || [];
                const n = zn.__rewriteFramesAssetPrefixPath__ || ""
                  , r = new d({
                    iteratee: t=>{
                        try {
                            const {origin: e} = new URL(t.filename);
                            t.filename = function(t) {
                                let e, n = t[0], r = 1;
                                for (; r < t.length; ) {
                                    const i = t[r]
                                      , o = t[r + 1];
                                    if (r += 2,
                                    ("optionalAccess" === i || "optionalCall" === i) && null == n)
                                        return;
                                    "access" === i || "optionalAccess" === i ? (e = n,
                                    n = o(n)) : "call" !== i && "optionalCall" !== i || (n = o(((...t)=>n.call(e, ...t))),
                                    e = void 0)
                                }
                                return n
                            }([t, "access", t=>t.filename, "optionalAccess", t=>t.replace, "call", t=>t(e, "app://"), "access", t=>t.replace, "call", t=>t(n, "")])
                        } catch (e) {}
                        return t.filename && t.filename.startsWith("app:///_next") && (t.filename = decodeURI(t.filename)),
                        t.filename && t.filename.match(/^app:\/\/\/_next\/static\/chunks\/(main-|main-app-|polyfills-|webpack-|framework-|framework\.)[0-9a-f]+\.js$/) && (t.in_app = !1),
                        t
                    }
                });
                if (e = Bn(r, e),
                ("undefined" === typeof __SENTRY_TRACING__ || __SENTRY_TRACING__) && i(t)) {
                    e = Bn(new In({
                        tracingOrigins: [...kn.tracingOrigins, /^(api\/)/],
                        routingInstrumentation: jn
                    }), e, {
                        "options.routingInstrumentation": jn
                    })
                }
                t.integrations = e
            }(t),
            function(t) {
                t._metadata = t._metadata || {},
                t._metadata.sdk = t._metadata.sdk || {
                    name: "sentry.javascript.react",
                    packages: [{
                        name: "npm:@sentry/react",
                        version: f
                    }],
                    version: f
                },
                Be(t)
            }(t),
            (0,
            At.e)((t=>{
                t.setTag("runtime", "browser");
                const e = t=>"transaction" === t.type && "/404" === t.transaction ? null : t;
                e.id = "NextClient404Filter",
                t.addEventProcessor(e)
            }
            ))
        }
    },
    77090: function(t) {
        !function(e, n) {
            var r = function(t, e) {
                "use strict";
                if (!e.getElementsByClassName)
                    return;
                var n, r, i = e.documentElement, o = t.Date, a = t.HTMLPictureElement, s = "addEventListener", u = "getAttribute", c = t[s], d = t.setTimeout, f = t.requestAnimationFrame || d, l = t.requestIdleCallback, p = /^picture$/i, h = ["load", "error", "lazyincluded", "_lazyloaded"], _ = {}, m = Array.prototype.forEach, v = function(t, e) {
                    return _[e] || (_[e] = new RegExp("(\\s|^)" + e + "(\\s|$)")),
                    _[e].test(t[u]("class") || "") && _[e]
                }, g = function(t, e) {
                    v(t, e) || t.setAttribute("class", (t[u]("class") || "").trim() + " " + e)
                }, y = function(t, e) {
                    var n;
                    (n = v(t, e)) && t.setAttribute("class", (t[u]("class") || "").replace(n, " "))
                }, E = function(t, e, n) {
                    var r = n ? s : "removeEventListener";
                    n && E(t, e),
                    h.forEach((function(n) {
                        t[r](n, e)
                    }
                    ))
                }, T = function(t, r, i, o, a) {
                    var s = e.createEvent("Event");
                    return i || (i = {}),
                    i.instance = n,
                    s.initEvent(r, !o, !a),
                    s.detail = i,
                    t.dispatchEvent(s),
                    s
                }, b = function(e, n) {
                    var i;
                    !a && (i = t.picturefill || r.pf) ? (n && n.src && !e[u]("srcset") && e.setAttribute("srcset", n.src),
                    i({
                        reevaluate: !0,
                        elements: [e]
                    })) : n && n.src && (e.src = n.src)
                }, S = function(t, e) {
                    return (getComputedStyle(t, null) || {})[e]
                }, R = function(t, e, n) {
                    for (n = n || t.offsetWidth; n < r.minSize && e && !t._lazysizesWidth; )
                        n = e.offsetWidth,
                        e = e.parentNode;
                    return n
                }, C = function() {
                    var t, n, r = [], i = [], o = r, a = function() {
                        var e = o;
                        for (o = r.length ? i : r,
                        t = !0,
                        n = !1; e.length; )
                            e.shift()();
                        t = !1
                    }, s = function(r, i) {
                        t && !i ? r.apply(this, arguments) : (o.push(r),
                        n || (n = !0,
                        (e.hidden ? d : f)(a)))
                    };
                    return s._lsFlush = a,
                    s
                }(), D = function(t, e) {
                    return e ? function() {
                        C(t)
                    }
                    : function() {
                        var e = this
                          , n = arguments;
                        C((function() {
                            t.apply(e, n)
                        }
                        ))
                    }
                }, w = function(t) {
                    var e, n = 0, i = r.throttleDelay, a = r.ricTimeout, s = function() {
                        e = !1,
                        n = o.now(),
                        t()
                    }, u = l && a > 49 ? function() {
                        l(s, {
                            timeout: a
                        }),
                        a !== r.ricTimeout && (a = r.ricTimeout)
                    }
                    : D((function() {
                        d(s)
                    }
                    ), !0);
                    return function(t) {
                        var r;
                        (t = !0 === t) && (a = 33),
                        e || (e = !0,
                        (r = i - (o.now() - n)) < 0 && (r = 0),
                        t || r < 9 ? u() : d(u, r))
                    }
                }, O = function(t) {
                    var e, n, r = 99, i = function() {
                        e = null,
                        t()
                    }, a = function() {
                        var t = o.now() - n;
                        t < r ? d(a, r - t) : (l || i)(i)
                    };
                    return function() {
                        n = o.now(),
                        e || (e = d(a, r))
                    }
                };
                !function() {
                    var e, n = {
                        lazyClass: "lazyload",
                        loadedClass: "lazyloaded",
                        loadingClass: "lazyloading",
                        preloadClass: "lazypreload",
                        errorClass: "lazyerror",
                        autosizesClass: "lazyautosizes",
                        srcAttr: "data-src",
                        srcsetAttr: "data-srcset",
                        sizesAttr: "data-sizes",
                        minSize: 40,
                        customMedia: {},
                        init: !0,
                        expFactor: 1.5,
                        hFac: .8,
                        loadMode: 2,
                        loadHidden: !0,
                        ricTimeout: 0,
                        throttleDelay: 125
                    };
                    for (e in r = t.lazySizesConfig || t.lazysizesConfig || {},
                    n)
                        e in r || (r[e] = n[e]);
                    t.lazySizesConfig = r,
                    d((function() {
                        r.init && x()
                    }
                    ))
                }();
                var k = function() {
                    var a, f, l, h, _, R, k, x, I, U, A, B, L = /^img$/i, M = /^iframe$/i, P = "onscroll"in t && !/(gle|ing)bot/.test(navigator.userAgent), G = 0, Y = 0, $ = 0, q = -1, F = function(t) {
                        $--,
                        (!t || $ < 0 || !t.target) && ($ = 0)
                    }, j = function(t) {
                        return null == B && (B = "hidden" == S(e.body, "visibility")),
                        B || "hidden" != S(t.parentNode, "visibility") && "hidden" != S(t, "visibility")
                    }, H = function(t, n) {
                        var r, o = t, a = j(t);
                        for (x -= n,
                        A += n,
                        I -= n,
                        U += n; a && (o = o.offsetParent) && o != e.body && o != i; )
                            (a = (S(o, "opacity") || 1) > 0) && "visible" != S(o, "overflow") && (r = o.getBoundingClientRect(),
                            a = U > r.left && I < r.right && A > r.top - 1 && x < r.bottom + 1);
                        return a
                    }, z = function() {
                        var t, o, s, c, d, l, p, _, m, v, g, y, E = n.elements;
                        if ((h = r.loadMode) && $ < 8 && (t = E.length)) {
                            for (o = 0,
                            q++,
                            v = !r.expand || r.expand < 1 ? i.clientHeight > 500 && i.clientWidth > 500 ? 500 : 370 : r.expand,
                            n._defEx = v,
                            g = v * r.expFactor,
                            y = r.hFac,
                            B = null,
                            Y < g && $ < 1 && q > 2 && h > 2 && !e.hidden ? (Y = g,
                            q = 0) : Y = h > 1 && q > 1 && $ < 6 ? v : G; o < t; o++)
                                if (E[o] && !E[o]._lazyRace)
                                    if (P)
                                        if ((_ = E[o][u]("data-expand")) && (l = 1 * _) || (l = Y),
                                        m !== l && (R = innerWidth + l * y,
                                        k = innerHeight + l,
                                        p = -1 * l,
                                        m = l),
                                        s = E[o].getBoundingClientRect(),
                                        (A = s.bottom) >= p && (x = s.top) <= k && (U = s.right) >= p * y && (I = s.left) <= R && (A || U || I || x) && (r.loadHidden || j(E[o])) && (f && $ < 3 && !_ && (h < 3 || q < 4) || H(E[o], l))) {
                                            if (tt(E[o]),
                                            d = !0,
                                            $ > 9)
                                                break
                                        } else
                                            !d && f && !c && $ < 4 && q < 4 && h > 2 && (a[0] || r.preloadAfterLoad) && (a[0] || !_ && (A || U || I || x || "auto" != E[o][u](r.sizesAttr))) && (c = a[0] || E[o]);
                                    else
                                        tt(E[o]);
                            c && !d && tt(c)
                        }
                    }, W = w(z), V = function(t) {
                        var e = t.target;
                        e._lazyCache ? delete e._lazyCache : (F(t),
                        g(e, r.loadedClass),
                        y(e, r.loadingClass),
                        E(e, Z),
                        T(e, "lazyloaded"))
                    }, K = D(V), Z = function(t) {
                        K({
                            target: t.target
                        })
                    }, Q = function(t, e) {
                        try {
                            t.contentWindow.location.replace(e)
                        } catch (n) {
                            t.src = e
                        }
                    }, X = function(t) {
                        var e, n = t[u](r.srcsetAttr);
                        (e = r.customMedia[t[u]("data-media") || t[u]("media")]) && t.setAttribute("media", e),
                        n && t.setAttribute("srcset", n)
                    }, J = D((function(t, e, n, i, o) {
                        var a, s, c, f, h, _;
                        (h = T(t, "lazybeforeunveil", e)).defaultPrevented || (i && (n ? g(t, r.autosizesClass) : t.setAttribute("sizes", i)),
                        s = t[u](r.srcsetAttr),
                        a = t[u](r.srcAttr),
                        o && (f = (c = t.parentNode) && p.test(c.nodeName || "")),
                        _ = e.firesLoad || "src"in t && (s || a || f),
                        h = {
                            target: t
                        },
                        g(t, r.loadingClass),
                        _ && (clearTimeout(l),
                        l = d(F, 2500),
                        E(t, Z, !0)),
                        f && m.call(c.getElementsByTagName("source"), X),
                        s ? t.setAttribute("srcset", s) : a && !f && (M.test(t.nodeName) ? Q(t, a) : t.src = a),
                        o && (s || f) && b(t, {
                            src: a
                        })),
                        t._lazyRace && delete t._lazyRace,
                        y(t, r.lazyClass),
                        C((function() {
                            var e = t.complete && t.naturalWidth > 1;
                            _ && !e || (e && g(t, "ls-is-cached"),
                            V(h),
                            t._lazyCache = !0,
                            d((function() {
                                "_lazyCache"in t && delete t._lazyCache
                            }
                            ), 9))
                        }
                        ), !0)
                    }
                    )), tt = function(t) {
                        var e, n = L.test(t.nodeName), i = n && (t[u](r.sizesAttr) || t[u]("sizes")), o = "auto" == i;
                        (!o && f || !n || !t[u]("src") && !t.srcset || t.complete || v(t, r.errorClass) || !v(t, r.lazyClass)) && (e = T(t, "lazyunveilread").detail,
                        o && N.updateElem(t, !0, t.offsetWidth),
                        t._lazyRace = !0,
                        $++,
                        J(t, e, o, i, n))
                    }, et = function() {
                        if (!f)
                            if (o.now() - _ < 999)
                                d(et, 999);
                            else {
                                var t = O((function() {
                                    r.loadMode = 3,
                                    W()
                                }
                                ));
                                f = !0,
                                r.loadMode = 3,
                                W(),
                                c("scroll", (function() {
                                    3 == r.loadMode && (r.loadMode = 2),
                                    t()
                                }
                                ), !0)
                            }
                    };
                    return {
                        _: function() {
                            _ = o.now(),
                            n.elements = e.getElementsByClassName(r.lazyClass),
                            a = e.getElementsByClassName(r.lazyClass + " " + r.preloadClass),
                            c("scroll", W, !0),
                            c("resize", W, !0),
                            t.MutationObserver ? new MutationObserver(W).observe(i, {
                                childList: !0,
                                subtree: !0,
                                attributes: !0
                            }) : (i[s]("DOMNodeInserted", W, !0),
                            i[s]("DOMAttrModified", W, !0),
                            setInterval(W, 999)),
                            c("hashchange", W, !0),
                            ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach((function(t) {
                                e[s](t, W, !0)
                            }
                            )),
                            /d$|^c/.test(e.readyState) ? et() : (c("load", et),
                            e[s]("DOMContentLoaded", W),
                            d(et, 2e4)),
                            n.elements.length ? (z(),
                            C._lsFlush()) : W()
                        },
                        checkElems: W,
                        unveil: tt
                    }
                }()
                  , N = function() {
                    var t, n = D((function(t, e, n, r) {
                        var i, o, a;
                        if (t._lazysizesWidth = r,
                        r += "px",
                        t.setAttribute("sizes", r),
                        p.test(e.nodeName || ""))
                            for (o = 0,
                            a = (i = e.getElementsByTagName("source")).length; o < a; o++)
                                i[o].setAttribute("sizes", r);
                        n.detail.dataAttr || b(t, n.detail)
                    }
                    )), i = function(t, e, r) {
                        var i, o = t.parentNode;
                        o && (r = R(t, o, r),
                        (i = T(t, "lazybeforesizes", {
                            width: r,
                            dataAttr: !!e
                        })).defaultPrevented || (r = i.detail.width) && r !== t._lazysizesWidth && n(t, o, i, r))
                    }, o = O((function() {
                        var e, n = t.length;
                        if (n)
                            for (e = 0; e < n; e++)
                                i(t[e])
                    }
                    ));
                    return {
                        _: function() {
                            t = e.getElementsByClassName(r.autosizesClass),
                            c("resize", o)
                        },
                        checkElems: o,
                        updateElem: i
                    }
                }()
                  , x = function() {
                    x.i || (x.i = !0,
                    N._(),
                    k._())
                };
                return n = {
                    cfg: r,
                    autoSizer: N,
                    loader: k,
                    init: x,
                    uP: b,
                    aC: g,
                    rC: y,
                    hC: v,
                    fire: T,
                    gW: R,
                    rAF: C
                }
            }(e, e.document);
            e.lazySizes = r,
            t.exports && (t.exports = r)
        }(window)
    },
    7544: function(t, e, n) {
        t.exports = n(66381)
    },
    66381: function(t, e, n) {
        "use strict";
        var r = n(809)
          , i = n(2553)
          , o = n(62012)
          , a = n(9807)
          , s = n(27690)
          , u = n(99828)
          , c = n(38561);
        function d(t) {
            var e = function() {
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
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, r = u(t);
                if (e) {
                    var i = u(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else
                    n = r.apply(this, arguments);
                return s(this, n)
            }
        }
        var f = n(62426);
        e.default = void 0;
        var l = f(n(67294))
          , p = n(13937);
        function h(t) {
            return _.apply(this, arguments)
        }
        function _() {
            return (_ = c(r.mark((function t(e) {
                var n, i, o;
                return r.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return n = e.Component,
                            i = e.ctx,
                            t.next = 3,
                            (0,
                            p.loadGetInitialProps)(n, i);
                        case 3:
                            return o = t.sent,
                            t.abrupt("return", {
                                pageProps: o
                            });
                        case 5:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )))).apply(this, arguments)
        }
        p.AppInitialProps,
        p.NextWebVitalsMetric;
        var m = function(t) {
            a(n, t);
            var e = d(n);
            function n() {
                return i(this, n),
                e.apply(this, arguments)
            }
            return o(n, [{
                key: "componentDidCatch",
                value: function(t, e) {
                    throw t
                }
            }, {
                key: "render",
                value: function() {
                    var t = this.props
                      , e = t.router
                      , n = t.Component
                      , r = t.pageProps
                      , i = t.__N_SSG
                      , o = t.__N_SSP;
                    return l.default.createElement(n, Object.assign({}, r, i || o ? {} : {
                        url: v(e)
                    }))
                }
            }]),
            n
        }(l.default.Component);
        function v(t) {
            var e = t.pathname
              , n = t.asPath
              , r = t.query;
            return {
                get query() {
                    return r
                },
                get pathname() {
                    return e
                },
                get asPath() {
                    return n
                },
                back: function() {
                    t.back()
                },
                push: function(e, n) {
                    return t.push(e, n)
                },
                pushTo: function(e, n) {
                    var r = n ? e : ""
                      , i = n || e;
                    return t.push(r, i)
                },
                replace: function(e, n) {
                    return t.replace(e, n)
                },
                replaceTo: function(e, n) {
                    var r = n ? e : ""
                      , i = n || e;
                    return t.replace(r, i)
                }
            }
        }
        e.default = m,
        m.origGetInitialProps = h,
        m.getInitialProps = h
    },
    11163: function(t, e, n) {
        t.exports = n(72441)
    },
    48679: function(t, e, n) {
        "use strict";
        n.d(e, {
            S: function() {
                return b
            }
        });
        var r = n(22122)
          , i = n(52288)
          , o = n(41788)
          , a = n(101)
          , s = n(41909)
          , u = n(59852)
          , c = n(52943)
          , d = new (function(t) {
            function e() {
                return t.apply(this, arguments) || this
            }
            (0,
            o.Z)(e, t);
            var n = e.prototype;
            return n.onSubscribe = function() {
                this.removeEventListener || this.setDefaultEventListener()
            }
            ,
            n.setEventListener = function(t) {
                var e = this;
                this.removeEventListener && this.removeEventListener(),
                this.removeEventListener = t((function(t) {
                    "boolean" === typeof t ? e.setOnline(t) : e.onOnline()
                }
                ))
            }
            ,
            n.setOnline = function(t) {
                this.online = t,
                t && this.onOnline()
            }
            ,
            n.onOnline = function() {
                this.listeners.forEach((function(t) {
                    t()
                }
                ))
            }
            ,
            n.isOnline = function() {
                return "boolean" === typeof this.online ? this.online : "undefined" === typeof navigator || "undefined" === typeof navigator.onLine || navigator.onLine
            }
            ,
            n.setDefaultEventListener = function() {
                var t;
                !i.sk && (null == (t = window) ? void 0 : t.addEventListener) && this.setEventListener((function(t) {
                    var e = function() {
                        return t()
                    };
                    return window.addEventListener("online", e, !1),
                    window.addEventListener("offline", e, !1),
                    function() {
                        window.removeEventListener("online", e),
                        window.removeEventListener("offline", e)
                    }
                }
                ))
            }
            ,
            e
        }(c.l));
        function f(t) {
            return Math.min(1e3 * Math.pow(2, t), 3e4)
        }
        function l(t) {
            return "function" === typeof (null == t ? void 0 : t.cancel)
        }
        var p = function(t) {
            this.revert = null == t ? void 0 : t.revert,
            this.silent = null == t ? void 0 : t.silent
        };
        function h(t) {
            return t instanceof p
        }
        var _ = function(t) {
            var e, n, r, o, a = this, s = !1;
            this.cancel = function(t) {
                return null == e ? void 0 : e(t)
            }
            ,
            this.cancelRetry = function() {
                s = !0
            }
            ,
            this.continue = function() {
                return null == n ? void 0 : n()
            }
            ,
            this.failureCount = 0,
            this.isPaused = !1,
            this.isResolved = !1,
            this.isTransportCancelable = !1,
            this.promise = new Promise((function(t, e) {
                r = t,
                o = e
            }
            ));
            var c = function(e) {
                a.isResolved || (a.isResolved = !0,
                null == t.onSuccess || t.onSuccess(e),
                null == n || n(),
                r(e))
            }
              , h = function(e) {
                a.isResolved || (a.isResolved = !0,
                null == t.onError || t.onError(e),
                null == n || n(),
                o(e))
            };
            !function r() {
                if (!a.isResolved) {
                    var o;
                    try {
                        o = t.fn()
                    } catch (_) {
                        o = Promise.reject(_)
                    }
                    e = function(t) {
                        if (!a.isResolved && (h(new p(t)),
                        l(o)))
                            try {
                                o.cancel()
                            } catch (e) {}
                    }
                    ,
                    a.isTransportCancelable = l(o),
                    Promise.resolve(o).then(c).catch((function(e) {
                        var o, c;
                        if (!a.isResolved) {
                            var l = null != (o = t.retry) ? o : 3
                              , p = null != (c = t.retryDelay) ? c : f
                              , _ = "function" === typeof p ? p(a.failureCount, e) : p
                              , m = !0 === l || "number" === typeof l && a.failureCount < l || "function" === typeof l && l(a.failureCount, e);
                            !s && m ? (a.failureCount++,
                            null == t.onFail || t.onFail(a.failureCount, e),
                            (0,
                            i.Gh)(_).then((function() {
                                if (!u.j.isFocused() || !d.isOnline())
                                    return new Promise((function(e) {
                                        n = e,
                                        a.isPaused = !0,
                                        null == t.onPause || t.onPause()
                                    }
                                    )).then((function() {
                                        n = void 0,
                                        a.isPaused = !1,
                                        null == t.onContinue || t.onContinue()
                                    }
                                    ))
                            }
                            )).then((function() {
                                s ? h(e) : r()
                            }
                            ))) : h(e)
                        }
                    }
                    ))
                }
            }()
        }
          , m = function() {
            function t(t) {
                this.defaultOptions = t.defaultOptions,
                this.setOptions(t.options),
                this.observers = [],
                this.cache = t.cache,
                this.queryKey = t.queryKey,
                this.queryHash = t.queryHash,
                this.initialState = t.state || this.getDefaultState(this.options),
                this.state = this.initialState,
                this.scheduleGc()
            }
            var e = t.prototype;
            return e.setOptions = function(t) {
                var e;
                this.options = (0,
                r.Z)({}, this.defaultOptions, t),
                this.cacheTime = Math.max(this.cacheTime || 0, null != (e = this.options.cacheTime) ? e : 3e5)
            }
            ,
            e.setDefaultOptions = function(t) {
                this.defaultOptions = t
            }
            ,
            e.scheduleGc = function() {
                var t = this;
                this.clearGcTimeout(),
                (0,
                i.PN)(this.cacheTime) && (this.gcTimeout = setTimeout((function() {
                    t.optionalRemove()
                }
                ), this.cacheTime))
            }
            ,
            e.clearGcTimeout = function() {
                clearTimeout(this.gcTimeout),
                this.gcTimeout = void 0
            }
            ,
            e.optionalRemove = function() {
                this.observers.length || this.state.isFetching || this.cache.remove(this)
            }
            ,
            e.setData = function(t, e) {
                var n, r, o = this.state.data, a = (0,
                i.SE)(t, o);
                return (null == (n = (r = this.options).isDataEqual) ? void 0 : n.call(r, o, a)) ? a = o : !1 !== this.options.structuralSharing && (a = (0,
                i.Q$)(o, a)),
                this.dispatch({
                    data: a,
                    type: "success",
                    dataUpdatedAt: null == e ? void 0 : e.updatedAt
                }),
                a
            }
            ,
            e.setState = function(t, e) {
                this.dispatch({
                    type: "setState",
                    state: t,
                    setStateOptions: e
                })
            }
            ,
            e.cancel = function(t) {
                var e, n = this.promise;
                return null == (e = this.retryer) || e.cancel(t),
                n ? n.then(i.ZT).catch(i.ZT) : Promise.resolve()
            }
            ,
            e.destroy = function() {
                this.clearGcTimeout(),
                this.cancel({
                    silent: !0
                })
            }
            ,
            e.reset = function() {
                this.destroy(),
                this.setState(this.initialState)
            }
            ,
            e.isActive = function() {
                return this.observers.some((function(t) {
                    return !1 !== t.options.enabled
                }
                ))
            }
            ,
            e.isFetching = function() {
                return this.state.isFetching
            }
            ,
            e.isStale = function() {
                return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some((function(t) {
                    return t.getCurrentResult().isStale
                }
                ))
            }
            ,
            e.isStaleByTime = function(t) {
                return void 0 === t && (t = 0),
                this.state.isInvalidated || !this.state.dataUpdatedAt || !(0,
                i.Kp)(this.state.dataUpdatedAt, t)
            }
            ,
            e.onFocus = function() {
                var t, e = this.observers.find((function(t) {
                    return t.shouldFetchOnWindowFocus()
                }
                ));
                e && e.refetch(),
                null == (t = this.retryer) || t.continue()
            }
            ,
            e.onOnline = function() {
                var t, e = this.observers.find((function(t) {
                    return t.shouldFetchOnReconnect()
                }
                ));
                e && e.refetch(),
                null == (t = this.retryer) || t.continue()
            }
            ,
            e.addObserver = function(t) {
                -1 === this.observers.indexOf(t) && (this.observers.push(t),
                this.clearGcTimeout(),
                this.cache.notify({
                    type: "observerAdded",
                    query: this,
                    observer: t
                }))
            }
            ,
            e.removeObserver = function(t) {
                -1 !== this.observers.indexOf(t) && (this.observers = this.observers.filter((function(e) {
                    return e !== t
                }
                )),
                this.observers.length || (this.retryer && (this.retryer.isTransportCancelable ? this.retryer.cancel({
                    revert: !0
                }) : this.retryer.cancelRetry()),
                this.cacheTime ? this.scheduleGc() : this.cache.remove(this)),
                this.cache.notify({
                    type: "observerRemoved",
                    query: this,
                    observer: t
                }))
            }
            ,
            e.getObserversCount = function() {
                return this.observers.length
            }
            ,
            e.invalidate = function() {
                this.state.isInvalidated || this.dispatch({
                    type: "invalidate"
                })
            }
            ,
            e.fetch = function(t, e) {
                var n, r, o = this;
                if (this.state.isFetching)
                    if (this.state.dataUpdatedAt && (null == e ? void 0 : e.cancelRefetch))
                        this.cancel({
                            silent: !0
                        });
                    else if (this.promise)
                        return this.promise;
                if (t && this.setOptions(t),
                !this.options.queryFn) {
                    var a = this.observers.find((function(t) {
                        return t.options.queryFn
                    }
                    ));
                    a && this.setOptions(a.options)
                }
                var u, c, d = (0,
                i.mc)(this.queryKey), f = {
                    queryKey: d,
                    pageParam: void 0
                }, l = {
                    fetchOptions: e,
                    options: this.options,
                    queryKey: d,
                    state: this.state,
                    fetchFn: function() {
                        return o.options.queryFn ? o.options.queryFn(f) : Promise.reject("Missing queryFn")
                    }
                };
                (null == (n = this.options.behavior) ? void 0 : n.onFetch) && (null == (u = this.options.behavior) || u.onFetch(l));
                (this.revertState = this.state,
                this.state.isFetching && this.state.fetchMeta === (null == (r = l.fetchOptions) ? void 0 : r.meta)) || this.dispatch({
                    type: "fetch",
                    meta: null == (c = l.fetchOptions) ? void 0 : c.meta
                });
                return this.retryer = new _({
                    fn: l.fetchFn,
                    onSuccess: function(t) {
                        o.setData(t),
                        0 === o.cacheTime && o.optionalRemove()
                    },
                    onError: function(t) {
                        h(t) && t.silent || o.dispatch({
                            type: "error",
                            error: t
                        }),
                        h(t) || (o.cache.config.onError && o.cache.config.onError(t, o),
                        (0,
                        s.j)().error(t)),
                        0 === o.cacheTime && o.optionalRemove()
                    },
                    onFail: function() {
                        o.dispatch({
                            type: "failed"
                        })
                    },
                    onPause: function() {
                        o.dispatch({
                            type: "pause"
                        })
                    },
                    onContinue: function() {
                        o.dispatch({
                            type: "continue"
                        })
                    },
                    retry: l.options.retry,
                    retryDelay: l.options.retryDelay
                }),
                this.promise = this.retryer.promise,
                this.promise
            }
            ,
            e.dispatch = function(t) {
                var e = this;
                this.state = this.reducer(this.state, t),
                a.V.batch((function() {
                    e.observers.forEach((function(e) {
                        e.onQueryUpdate(t)
                    }
                    )),
                    e.cache.notify({
                        query: e,
                        type: "queryUpdated",
                        action: t
                    })
                }
                ))
            }
            ,
            e.getDefaultState = function(t) {
                var e = "function" === typeof t.initialData ? t.initialData() : t.initialData
                  , n = "undefined" !== typeof t.initialData ? "function" === typeof t.initialDataUpdatedAt ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0
                  , r = "undefined" !== typeof e;
                return {
                    data: e,
                    dataUpdateCount: 0,
                    dataUpdatedAt: r ? null != n ? n : Date.now() : 0,
                    error: null,
                    errorUpdateCount: 0,
                    errorUpdatedAt: 0,
                    fetchFailureCount: 0,
                    fetchMeta: null,
                    isFetching: !1,
                    isInvalidated: !1,
                    isPaused: !1,
                    status: r ? "success" : "idle"
                }
            }
            ,
            e.reducer = function(t, e) {
                var n, i;
                switch (e.type) {
                case "failed":
                    return (0,
                    r.Z)({}, t, {
                        fetchFailureCount: t.fetchFailureCount + 1
                    });
                case "pause":
                    return (0,
                    r.Z)({}, t, {
                        isPaused: !0
                    });
                case "continue":
                    return (0,
                    r.Z)({}, t, {
                        isPaused: !1
                    });
                case "fetch":
                    return (0,
                    r.Z)({}, t, {
                        fetchFailureCount: 0,
                        fetchMeta: null != (n = e.meta) ? n : null,
                        isFetching: !0,
                        isPaused: !1,
                        status: t.dataUpdatedAt ? t.status : "loading"
                    });
                case "success":
                    return (0,
                    r.Z)({}, t, {
                        data: e.data,
                        dataUpdateCount: t.dataUpdateCount + 1,
                        dataUpdatedAt: null != (i = e.dataUpdatedAt) ? i : Date.now(),
                        error: null,
                        fetchFailureCount: 0,
                        isFetching: !1,
                        isInvalidated: !1,
                        isPaused: !1,
                        status: "success"
                    });
                case "error":
                    var o = e.error;
                    return h(o) && o.revert && this.revertState ? (0,
                    r.Z)({}, this.revertState) : (0,
                    r.Z)({}, t, {
                        error: o,
                        errorUpdateCount: t.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: t.fetchFailureCount + 1,
                        isFetching: !1,
                        isPaused: !1,
                        status: "error"
                    });
                case "invalidate":
                    return (0,
                    r.Z)({}, t, {
                        isInvalidated: !0
                    });
                case "setState":
                    return (0,
                    r.Z)({}, t, e.state);
                default:
                    return t
                }
            }
            ,
            t
        }()
          , v = function(t) {
            function e(e) {
                var n;
                return (n = t.call(this) || this).config = e || {},
                n.queries = [],
                n.queriesMap = {},
                n
            }
            (0,
            o.Z)(e, t);
            var n = e.prototype;
            return n.build = function(t, e, n) {
                var r, o = e.queryKey, a = null != (r = e.queryHash) ? r : (0,
                i.Rm)(o, e), s = this.get(a);
                return s || (s = new m({
                    cache: this,
                    queryKey: o,
                    queryHash: a,
                    options: t.defaultQueryOptions(e),
                    state: n,
                    defaultOptions: t.getQueryDefaults(o)
                }),
                this.add(s)),
                s
            }
            ,
            n.add = function(t) {
                this.queriesMap[t.queryHash] || (this.queriesMap[t.queryHash] = t,
                this.queries.push(t),
                this.notify({
                    type: "queryAdded",
                    query: t
                }))
            }
            ,
            n.remove = function(t) {
                var e = this.queriesMap[t.queryHash];
                e && (t.destroy(),
                this.queries = this.queries.filter((function(e) {
                    return e !== t
                }
                )),
                e === t && delete this.queriesMap[t.queryHash],
                this.notify({
                    type: "queryRemoved",
                    query: t
                }))
            }
            ,
            n.clear = function() {
                var t = this;
                a.V.batch((function() {
                    t.queries.forEach((function(e) {
                        t.remove(e)
                    }
                    ))
                }
                ))
            }
            ,
            n.get = function(t) {
                return this.queriesMap[t]
            }
            ,
            n.getAll = function() {
                return this.queries
            }
            ,
            n.find = function(t, e) {
                var n = (0,
                i.I6)(t, e)[0];
                return "undefined" === typeof n.exact && (n.exact = !0),
                this.queries.find((function(t) {
                    return (0,
                    i._x)(n, t)
                }
                ))
            }
            ,
            n.findAll = function(t, e) {
                var n = (0,
                i.I6)(t, e)[0];
                return n ? this.queries.filter((function(t) {
                    return (0,
                    i._x)(n, t)
                }
                )) : this.queries
            }
            ,
            n.notify = function(t) {
                var e = this;
                a.V.batch((function() {
                    e.listeners.forEach((function(e) {
                        e(t)
                    }
                    ))
                }
                ))
            }
            ,
            n.onFocus = function() {
                var t = this;
                a.V.batch((function() {
                    t.queries.forEach((function(t) {
                        t.onFocus()
                    }
                    ))
                }
                ))
            }
            ,
            n.onOnline = function() {
                var t = this;
                a.V.batch((function() {
                    t.queries.forEach((function(t) {
                        t.onOnline()
                    }
                    ))
                }
                ))
            }
            ,
            e
        }(c.l)
          , g = function() {
            function t(t) {
                this.options = (0,
                r.Z)({}, t.defaultOptions, t.options),
                this.mutationId = t.mutationId,
                this.mutationCache = t.mutationCache,
                this.observers = [],
                this.state = t.state || {
                    context: void 0,
                    data: void 0,
                    error: null,
                    failureCount: 0,
                    isPaused: !1,
                    status: "idle",
                    variables: void 0
                }
            }
            var e = t.prototype;
            return e.setState = function(t) {
                this.dispatch({
                    type: "setState",
                    state: t
                })
            }
            ,
            e.addObserver = function(t) {
                -1 === this.observers.indexOf(t) && this.observers.push(t)
            }
            ,
            e.removeObserver = function(t) {
                this.observers = this.observers.filter((function(e) {
                    return e !== t
                }
                ))
            }
            ,
            e.cancel = function() {
                return this.retryer ? (this.retryer.cancel(),
                this.retryer.promise.then(i.ZT).catch(i.ZT)) : Promise.resolve()
            }
            ,
            e.continue = function() {
                return this.retryer ? (this.retryer.continue(),
                this.retryer.promise) : this.execute()
            }
            ,
            e.execute = function() {
                var t, e = this, n = "loading" === this.state.status, r = Promise.resolve();
                return n || (this.dispatch({
                    type: "loading",
                    variables: this.options.variables
                }),
                r = r.then((function() {
                    return null == e.options.onMutate ? void 0 : e.options.onMutate(e.state.variables)
                }
                )).then((function(t) {
                    t !== e.state.context && e.dispatch({
                        type: "loading",
                        context: t,
                        variables: e.state.variables
                    })
                }
                ))),
                r.then((function() {
                    return e.executeMutation()
                }
                )).then((function(e) {
                    t = e
                }
                )).then((function() {
                    return null == e.options.onSuccess ? void 0 : e.options.onSuccess(t, e.state.variables, e.state.context)
                }
                )).then((function() {
                    return null == e.options.onSettled ? void 0 : e.options.onSettled(t, null, e.state.variables, e.state.context)
                }
                )).then((function() {
                    return e.dispatch({
                        type: "success",
                        data: t
                    }),
                    t
                }
                )).catch((function(t) {
                    return e.mutationCache.config.onError && e.mutationCache.config.onError(t, e.state.variables, e.state.context, e),
                    (0,
                    s.j)().error(t),
                    Promise.resolve().then((function() {
                        return null == e.options.onError ? void 0 : e.options.onError(t, e.state.variables, e.state.context)
                    }
                    )).then((function() {
                        return null == e.options.onSettled ? void 0 : e.options.onSettled(void 0, t, e.state.variables, e.state.context)
                    }
                    )).then((function() {
                        throw e.dispatch({
                            type: "error",
                            error: t
                        }),
                        t
                    }
                    ))
                }
                ))
            }
            ,
            e.executeMutation = function() {
                var t, e = this;
                return this.retryer = new _({
                    fn: function() {
                        return e.options.mutationFn ? e.options.mutationFn(e.state.variables) : Promise.reject("No mutationFn found")
                    },
                    onFail: function() {
                        e.dispatch({
                            type: "failed"
                        })
                    },
                    onPause: function() {
                        e.dispatch({
                            type: "pause"
                        })
                    },
                    onContinue: function() {
                        e.dispatch({
                            type: "continue"
                        })
                    },
                    retry: null != (t = this.options.retry) ? t : 0,
                    retryDelay: this.options.retryDelay
                }),
                this.retryer.promise
            }
            ,
            e.dispatch = function(t) {
                var e = this;
                this.state = function(t, e) {
                    switch (e.type) {
                    case "failed":
                        return (0,
                        r.Z)({}, t, {
                            failureCount: t.failureCount + 1
                        });
                    case "pause":
                        return (0,
                        r.Z)({}, t, {
                            isPaused: !0
                        });
                    case "continue":
                        return (0,
                        r.Z)({}, t, {
                            isPaused: !1
                        });
                    case "loading":
                        return (0,
                        r.Z)({}, t, {
                            context: e.context,
                            data: void 0,
                            error: null,
                            isPaused: !1,
                            status: "loading",
                            variables: e.variables
                        });
                    case "success":
                        return (0,
                        r.Z)({}, t, {
                            data: e.data,
                            error: null,
                            status: "success",
                            isPaused: !1
                        });
                    case "error":
                        return (0,
                        r.Z)({}, t, {
                            data: void 0,
                            error: e.error,
                            failureCount: t.failureCount + 1,
                            isPaused: !1,
                            status: "error"
                        });
                    case "setState":
                        return (0,
                        r.Z)({}, t, e.state);
                    default:
                        return t
                    }
                }(this.state, t),
                a.V.batch((function() {
                    e.observers.forEach((function(e) {
                        e.onMutationUpdate(t)
                    }
                    )),
                    e.mutationCache.notify(e)
                }
                ))
            }
            ,
            t
        }();
        var y = function(t) {
            function e(e) {
                var n;
                return (n = t.call(this) || this).config = e || {},
                n.mutations = [],
                n.mutationId = 0,
                n
            }
            (0,
            o.Z)(e, t);
            var n = e.prototype;
            return n.build = function(t, e, n) {
                var r = new g({
                    mutationCache: this,
                    mutationId: ++this.mutationId,
                    options: t.defaultMutationOptions(e),
                    state: n,
                    defaultOptions: e.mutationKey ? t.getMutationDefaults(e.mutationKey) : void 0
                });
                return this.add(r),
                r
            }
            ,
            n.add = function(t) {
                this.mutations.push(t),
                this.notify(t)
            }
            ,
            n.remove = function(t) {
                this.mutations = this.mutations.filter((function(e) {
                    return e !== t
                }
                )),
                t.cancel(),
                this.notify(t)
            }
            ,
            n.clear = function() {
                var t = this;
                a.V.batch((function() {
                    t.mutations.forEach((function(e) {
                        t.remove(e)
                    }
                    ))
                }
                ))
            }
            ,
            n.getAll = function() {
                return this.mutations
            }
            ,
            n.find = function(t) {
                return "undefined" === typeof t.exact && (t.exact = !0),
                this.mutations.find((function(e) {
                    return (0,
                    i.X7)(t, e)
                }
                ))
            }
            ,
            n.findAll = function(t) {
                return this.mutations.filter((function(e) {
                    return (0,
                    i.X7)(t, e)
                }
                ))
            }
            ,
            n.notify = function(t) {
                var e = this;
                a.V.batch((function() {
                    e.listeners.forEach((function(e) {
                        e(t)
                    }
                    ))
                }
                ))
            }
            ,
            n.onFocus = function() {
                this.resumePausedMutations()
            }
            ,
            n.onOnline = function() {
                this.resumePausedMutations()
            }
            ,
            n.resumePausedMutations = function() {
                var t = this.mutations.filter((function(t) {
                    return t.state.isPaused
                }
                ));
                return a.V.batch((function() {
                    return t.reduce((function(t, e) {
                        return t.then((function() {
                            return e.continue().catch(i.ZT)
                        }
                        ))
                    }
                    ), Promise.resolve())
                }
                ))
            }
            ,
            e
        }(c.l);
        function E(t, e) {
            return null == t.getNextPageParam ? void 0 : t.getNextPageParam(e[e.length - 1], e)
        }
        function T(t, e) {
            return null == t.getPreviousPageParam ? void 0 : t.getPreviousPageParam(e[0], e)
        }
        var b = function() {
            function t(t) {
                void 0 === t && (t = {}),
                this.queryCache = t.queryCache || new v,
                this.mutationCache = t.mutationCache || new y,
                this.defaultOptions = t.defaultOptions || {},
                this.queryDefaults = [],
                this.mutationDefaults = []
            }
            var e = t.prototype;
            return e.mount = function() {
                var t = this;
                this.unsubscribeFocus = u.j.subscribe((function() {
                    u.j.isFocused() && d.isOnline() && (t.mutationCache.onFocus(),
                    t.queryCache.onFocus())
                }
                )),
                this.unsubscribeOnline = d.subscribe((function() {
                    u.j.isFocused() && d.isOnline() && (t.mutationCache.onOnline(),
                    t.queryCache.onOnline())
                }
                ))
            }
            ,
            e.unmount = function() {
                var t, e;
                null == (t = this.unsubscribeFocus) || t.call(this),
                null == (e = this.unsubscribeOnline) || e.call(this)
            }
            ,
            e.isFetching = function(t, e) {
                var n = (0,
                i.I6)(t, e)[0];
                return n.fetching = !0,
                this.queryCache.findAll(n).length
            }
            ,
            e.isMutating = function(t) {
                return this.mutationCache.findAll((0,
                r.Z)({}, t, {
                    fetching: !0
                })).length
            }
            ,
            e.getQueryData = function(t, e) {
                var n;
                return null == (n = this.queryCache.find(t, e)) ? void 0 : n.state.data
            }
            ,
            e.setQueryData = function(t, e, n) {
                var r = (0,
                i._v)(t)
                  , o = this.defaultQueryOptions(r);
                return this.queryCache.build(this, o).setData(e, n)
            }
            ,
            e.setQueriesData = function(t, e, n) {
                var r = this;
                return a.V.batch((function() {
                    return r.getQueryCache().findAll(t).map((function(t) {
                        var i = t.queryKey;
                        return [i, r.setQueryData(i, e, n)]
                    }
                    ))
                }
                ))
            }
            ,
            e.getQueryState = function(t, e) {
                var n;
                return null == (n = this.queryCache.find(t, e)) ? void 0 : n.state
            }
            ,
            e.removeQueries = function(t, e) {
                var n = (0,
                i.I6)(t, e)[0]
                  , r = this.queryCache;
                a.V.batch((function() {
                    r.findAll(n).forEach((function(t) {
                        r.remove(t)
                    }
                    ))
                }
                ))
            }
            ,
            e.resetQueries = function(t, e, n) {
                var o = this
                  , s = (0,
                i.I6)(t, e, n)
                  , u = s[0]
                  , c = s[1]
                  , d = this.queryCache
                  , f = (0,
                r.Z)({}, u, {
                    active: !0
                });
                return a.V.batch((function() {
                    return d.findAll(u).forEach((function(t) {
                        t.reset()
                    }
                    )),
                    o.refetchQueries(f, c)
                }
                ))
            }
            ,
            e.cancelQueries = function(t, e, n) {
                var r = this
                  , o = (0,
                i.I6)(t, e, n)
                  , s = o[0]
                  , u = o[1]
                  , c = void 0 === u ? {} : u;
                "undefined" === typeof c.revert && (c.revert = !0);
                var d = a.V.batch((function() {
                    return r.queryCache.findAll(s).map((function(t) {
                        return t.cancel(c)
                    }
                    ))
                }
                ));
                return Promise.all(d).then(i.ZT).catch(i.ZT)
            }
            ,
            e.invalidateQueries = function(t, e, n) {
                var o, s = this, u = (0,
                i.I6)(t, e, n), c = u[0], d = u[1], f = (0,
                r.Z)({}, c, {
                    active: null == (o = c.refetchActive) || o,
                    inactive: c.refetchInactive
                });
                return a.V.batch((function() {
                    return s.queryCache.findAll(c).forEach((function(t) {
                        t.invalidate()
                    }
                    )),
                    s.refetchQueries(f, d)
                }
                ))
            }
            ,
            e.refetchQueries = function(t, e, n) {
                var r = this
                  , o = (0,
                i.I6)(t, e, n)
                  , s = o[0]
                  , u = o[1]
                  , c = a.V.batch((function() {
                    return r.queryCache.findAll(s).map((function(t) {
                        return t.fetch()
                    }
                    ))
                }
                ))
                  , d = Promise.all(c).then(i.ZT);
                return (null == u ? void 0 : u.throwOnError) || (d = d.catch(i.ZT)),
                d
            }
            ,
            e.fetchQuery = function(t, e, n) {
                var r = (0,
                i._v)(t, e, n)
                  , o = this.defaultQueryOptions(r);
                "undefined" === typeof o.retry && (o.retry = !1);
                var a = this.queryCache.build(this, o);
                return a.isStaleByTime(o.staleTime) ? a.fetch(o) : Promise.resolve(a.state.data)
            }
            ,
            e.prefetchQuery = function(t, e, n) {
                return this.fetchQuery(t, e, n).then(i.ZT).catch(i.ZT)
            }
            ,
            e.fetchInfiniteQuery = function(t, e, n) {
                var r = (0,
                i._v)(t, e, n);
                return r.behavior = {
                    onFetch: function(t) {
                        t.fetchFn = function() {
                            var e, n, r, i, o, a = null == (e = t.fetchOptions) || null == (n = e.meta) ? void 0 : n.fetchMore, s = null == a ? void 0 : a.pageParam, u = "forward" === (null == a ? void 0 : a.direction), c = "backward" === (null == a ? void 0 : a.direction), d = (null == (r = t.state.data) ? void 0 : r.pages) || [], f = (null == (i = t.state.data) ? void 0 : i.pageParams) || [], p = f, h = !1, _ = t.options.queryFn || function() {
                                return Promise.reject("Missing queryFn")
                            }
                            , m = function(e, n, r, i) {
                                if (h)
                                    return Promise.reject("Cancelled");
                                if ("undefined" === typeof r && !n && e.length)
                                    return Promise.resolve(e);
                                var o = {
                                    queryKey: t.queryKey,
                                    pageParam: r
                                }
                                  , a = _(o)
                                  , s = Promise.resolve(a).then((function(t) {
                                    return p = i ? [r].concat(p) : [].concat(p, [r]),
                                    i ? [t].concat(e) : [].concat(e, [t])
                                }
                                ));
                                return l(a) && (s.cancel = a.cancel),
                                s
                            };
                            if (d.length)
                                if (u) {
                                    var v = "undefined" !== typeof s
                                      , g = v ? s : E(t.options, d);
                                    o = m(d, v, g)
                                } else if (c) {
                                    var y = "undefined" !== typeof s
                                      , b = y ? s : T(t.options, d);
                                    o = m(d, y, b, !0)
                                } else
                                    !function() {
                                        p = [];
                                        var e = "undefined" === typeof t.options.getNextPageParam;
                                        o = m([], e, f[0]);
                                        for (var n = function(n) {
                                            o = o.then((function(r) {
                                                var i = e ? f[n] : E(t.options, r);
                                                return m(r, e, i)
                                            }
                                            ))
                                        }, r = 1; r < d.length; r++)
                                            n(r)
                                    }();
                            else
                                o = m([]);
                            var S = o.then((function(t) {
                                return {
                                    pages: t,
                                    pageParams: p
                                }
                            }
                            ));
                            return S.cancel = function() {
                                h = !0,
                                l(o) && o.cancel()
                            }
                            ,
                            S
                        }
                    }
                },
                this.fetchQuery(r)
            }
            ,
            e.prefetchInfiniteQuery = function(t, e, n) {
                return this.fetchInfiniteQuery(t, e, n).then(i.ZT).catch(i.ZT)
            }
            ,
            e.cancelMutations = function() {
                var t = this
                  , e = a.V.batch((function() {
                    return t.mutationCache.getAll().map((function(t) {
                        return t.cancel()
                    }
                    ))
                }
                ));
                return Promise.all(e).then(i.ZT).catch(i.ZT)
            }
            ,
            e.resumePausedMutations = function() {
                return this.getMutationCache().resumePausedMutations()
            }
            ,
            e.executeMutation = function(t) {
                return this.mutationCache.build(this, t).execute()
            }
            ,
            e.getQueryCache = function() {
                return this.queryCache
            }
            ,
            e.getMutationCache = function() {
                return this.mutationCache
            }
            ,
            e.getDefaultOptions = function() {
                return this.defaultOptions
            }
            ,
            e.setDefaultOptions = function(t) {
                this.defaultOptions = t
            }
            ,
            e.setQueryDefaults = function(t, e) {
                var n = this.queryDefaults.find((function(e) {
                    return (0,
                    i.yF)(t) === (0,
                    i.yF)(e.queryKey)
                }
                ));
                n ? n.defaultOptions = e : this.queryDefaults.push({
                    queryKey: t,
                    defaultOptions: e
                })
            }
            ,
            e.getQueryDefaults = function(t) {
                var e;
                return t ? null == (e = this.queryDefaults.find((function(e) {
                    return (0,
                    i.to)(t, e.queryKey)
                }
                ))) ? void 0 : e.defaultOptions : void 0
            }
            ,
            e.setMutationDefaults = function(t, e) {
                var n = this.mutationDefaults.find((function(e) {
                    return (0,
                    i.yF)(t) === (0,
                    i.yF)(e.mutationKey)
                }
                ));
                n ? n.defaultOptions = e : this.mutationDefaults.push({
                    mutationKey: t,
                    defaultOptions: e
                })
            }
            ,
            e.getMutationDefaults = function(t) {
                var e;
                return t ? null == (e = this.mutationDefaults.find((function(e) {
                    return (0,
                    i.to)(t, e.mutationKey)
                }
                ))) ? void 0 : e.defaultOptions : void 0
            }
            ,
            e.defaultQueryOptions = function(t) {
                if (null == t ? void 0 : t._defaulted)
                    return t;
                var e = (0,
                r.Z)({}, this.defaultOptions.queries, this.getQueryDefaults(null == t ? void 0 : t.queryKey), t, {
                    _defaulted: !0
                });
                return !e.queryHash && e.queryKey && (e.queryHash = (0,
                i.Rm)(e.queryKey, e)),
                e
            }
            ,
            e.defaultQueryObserverOptions = function(t) {
                return this.defaultQueryOptions(t)
            }
            ,
            e.defaultMutationOptions = function(t) {
                return (null == t ? void 0 : t._defaulted) ? t : (0,
                r.Z)({}, this.defaultOptions.mutations, this.getMutationDefaults(null == t ? void 0 : t.mutationKey), t, {
                    _defaulted: !0
                })
            }
            ,
            e.clear = function() {
                this.queryCache.clear(),
                this.mutationCache.clear()
            }
            ,
            t
        }()
    },
    82131: function(t, e, n) {
        "use strict";
        n.r(e),
        n.d(e, {
            getCLS: function() {
                return p
            },
            getFCP: function() {
                return g
            },
            getFID: function() {
                return C
            },
            getLCP: function() {
                return D
            },
            getTTFB: function() {
                return w
            }
        });
        var r, i, o, a, s = function(t, e) {
            return {
                name: t,
                value: void 0 === e ? -1 : e,
                delta: 0,
                entries: [],
                id: "v1-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12)
            }
        }, u = function(t, e) {
            try {
                if (PerformanceObserver.supportedEntryTypes.includes(t)) {
                    if ("first-input" === t && !("PerformanceEventTiming"in self))
                        return;
                    var n = new PerformanceObserver((function(t) {
                        return t.getEntries().map(e)
                    }
                    ));
                    return n.observe({
                        type: t,
                        buffered: !0
                    }),
                    n
                }
            } catch (t) {}
        }, c = function(t, e) {
            var n = function n(r) {
                "pagehide" !== r.type && "hidden" !== document.visibilityState || (t(r),
                e && (removeEventListener("visibilitychange", n, !0),
                removeEventListener("pagehide", n, !0)))
            };
            addEventListener("visibilitychange", n, !0),
            addEventListener("pagehide", n, !0)
        }, d = function(t) {
            addEventListener("pageshow", (function(e) {
                e.persisted && t(e)
            }
            ), !0)
        }, f = "function" == typeof WeakSet ? new WeakSet : new Set, l = function(t, e, n) {
            var r;
            return function() {
                e.value >= 0 && (n || f.has(e) || "hidden" === document.visibilityState) && (e.delta = e.value - (r || 0),
                (e.delta || void 0 === r) && (r = e.value,
                t(e)))
            }
        }, p = function(t, e) {
            var n, r = s("CLS", 0), i = function(t) {
                t.hadRecentInput || (r.value += t.value,
                r.entries.push(t),
                n())
            }, o = u("layout-shift", i);
            o && (n = l(t, r, e),
            c((function() {
                o.takeRecords().map(i),
                n()
            }
            )),
            d((function() {
                r = s("CLS", 0),
                n = l(t, r, e)
            }
            )))
        }, h = -1, _ = function() {
            return "hidden" === document.visibilityState ? 0 : 1 / 0
        }, m = function() {
            c((function(t) {
                var e = t.timeStamp;
                h = e
            }
            ), !0)
        }, v = function() {
            return h < 0 && (h = _(),
            m(),
            d((function() {
                setTimeout((function() {
                    h = _(),
                    m()
                }
                ), 0)
            }
            ))),
            {
                get timeStamp() {
                    return h
                }
            }
        }, g = function(t, e) {
            var n, r = v(), i = s("FCP"), o = function(t) {
                "first-contentful-paint" === t.name && (c && c.disconnect(),
                t.startTime < r.timeStamp && (i.value = t.startTime,
                i.entries.push(t),
                f.add(i),
                n()))
            }, a = performance.getEntriesByName("first-contentful-paint")[0], c = a ? null : u("paint", o);
            (a || c) && (n = l(t, i, e),
            a && o(a),
            d((function(r) {
                i = s("FCP"),
                n = l(t, i, e),
                requestAnimationFrame((function() {
                    requestAnimationFrame((function() {
                        i.value = performance.now() - r.timeStamp,
                        f.add(i),
                        n()
                    }
                    ))
                }
                ))
            }
            )))
        }, y = {
            passive: !0,
            capture: !0
        }, E = new Date, T = function(t, e) {
            r || (r = e,
            i = t,
            o = new Date,
            R(removeEventListener),
            b())
        }, b = function() {
            if (i >= 0 && i < o - E) {
                var t = {
                    entryType: "first-input",
                    name: r.type,
                    target: r.target,
                    cancelable: r.cancelable,
                    startTime: r.timeStamp,
                    processingStart: r.timeStamp + i
                };
                a.forEach((function(e) {
                    e(t)
                }
                )),
                a = []
            }
        }, S = function(t) {
            if (t.cancelable) {
                var e = (t.timeStamp > 1e12 ? new Date : performance.now()) - t.timeStamp;
                "pointerdown" == t.type ? function(t, e) {
                    var n = function() {
                        T(t, e),
                        i()
                    }
                      , r = function() {
                        i()
                    }
                      , i = function() {
                        removeEventListener("pointerup", n, y),
                        removeEventListener("pointercancel", r, y)
                    };
                    addEventListener("pointerup", n, y),
                    addEventListener("pointercancel", r, y)
                }(e, t) : T(e, t)
            }
        }, R = function(t) {
            ["mousedown", "keydown", "touchstart", "pointerdown"].forEach((function(e) {
                return t(e, S, y)
            }
            ))
        }, C = function(t, e) {
            var n, o = v(), p = s("FID"), h = function(t) {
                t.startTime < o.timeStamp && (p.value = t.processingStart - t.startTime,
                p.entries.push(t),
                f.add(p),
                n())
            }, _ = u("first-input", h);
            n = l(t, p, e),
            _ && c((function() {
                _.takeRecords().map(h),
                _.disconnect()
            }
            ), !0),
            _ && d((function() {
                var o;
                p = s("FID"),
                n = l(t, p, e),
                a = [],
                i = -1,
                r = null,
                R(addEventListener),
                o = h,
                a.push(o),
                b()
            }
            ))
        }, D = function(t, e) {
            var n, r = v(), i = s("LCP"), o = function(t) {
                var e = t.startTime;
                e < r.timeStamp && (i.value = e,
                i.entries.push(t)),
                n()
            }, a = u("largest-contentful-paint", o);
            if (a) {
                n = l(t, i, e);
                var p = function() {
                    f.has(i) || (a.takeRecords().map(o),
                    a.disconnect(),
                    f.add(i),
                    n())
                };
                ["keydown", "click"].forEach((function(t) {
                    addEventListener(t, p, {
                        once: !0,
                        capture: !0
                    })
                }
                )),
                c(p, !0),
                d((function(r) {
                    i = s("LCP"),
                    n = l(t, i, e),
                    requestAnimationFrame((function() {
                        requestAnimationFrame((function() {
                            i.value = performance.now() - r.timeStamp,
                            f.add(i),
                            n()
                        }
                        ))
                    }
                    ))
                }
                ))
            }
        }, w = function(t) {
            var e, n = s("TTFB");
            e = function() {
                try {
                    var e = performance.getEntriesByType("navigation")[0] || function() {
                        var t = performance.timing
                          , e = {
                            entryType: "navigation",
                            startTime: 0
                        };
                        for (var n in t)
                            "navigationStart" !== n && "toJSON" !== n && (e[n] = Math.max(t[n] - t.navigationStart, 0));
                        return e
                    }();
                    if (n.value = n.delta = e.responseStart,
                    n.value < 0)
                        return;
                    n.entries = [e],
                    t(n)
                } catch (t) {}
            }
            ,
            "complete" === document.readyState ? setTimeout(e, 0) : addEventListener("pageshow", e)
        }
    }
}]);
//# sourceMappingURL=214-e67d4a7fa1a01a6ba162.js.map
