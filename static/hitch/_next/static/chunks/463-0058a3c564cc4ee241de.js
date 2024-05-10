(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[463], {
    95776: function(e, t, n) {
        "use strict";
        var a = n(67294)
          , r = n(83503)
          , i = n(93560)
          , o = (n(74311),
        a.createElement);
        t.Z = function(e) {
            var t = e.asPath
              , n = e.featureFlags
              , a = e.pageType;
            return o("footer", {
                className: "cu-footer",
                role: "region",
                "aria-label": "Footer",
                id: "FooterSm"
            }, o("div", {
                className: "container-width"
            }, o("div", {
                className: "hulu-footer"
            }, o("div", {
                className: "footer--site-links"
            }, o("a", {
                href: "/press",
                className: "footer--site-link",
                title: "Press"
            }, o(r.Z, {
                variant: "body14"
            }, "Press")), o("a", {
                href: "/jobs",
                className: "footer--site-link",
                title: "Jobs"
            }, o(r.Z, {
                variant: "body14"
            }, "Jobs")), o("a", {
                href: "//help.hulu.com/s/article/how-to-contact-Hulu",
                className: "footer--site-link",
                title: "Contact Us"
            }, o(r.Z, {
                variant: "body14"
            }, "Contact"))), o("div", {
                className: "footer--legal-links"
            }, o("div", {
                className: "footer--legal-links-left"
            }, o(i.w, {
                asPath: t,
                pageType: a
            })), o("div", {
                className: "footer--legal-links-right"
            }, o(i.P, {
                asPath: t,
                featureFlags: n,
                pageType: a
            }))))))
        }
    },
    84179: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            Modalv2: function() {
                return D
            },
            reducerMap: function() {
                return A
            },
            view: function() {
                return L
            }
        });
        var a = n(26265)
          , r = n(37424)
          , i = n(74047)
          , o = n(52700)
          , l = n(4706)
          , s = n(33814)
          , c = n(44102)
          , u = n(20775)
          , d = n(91229)
          , m = n(83503)
          , p = n(94184)
          , f = n.n(p)
          , v = n(67294)
          , h = v.createElement
          , g = function() {
            return h("svg", {
                width: "22px",
                height: "23px",
                viewBox: "0 0 22 23"
            }, h("g", {
                stroke: "none",
                strokeWidth: "1",
                fill: "none",
                fillRule: "evenodd",
                strokeLinecap: "square"
            }, h("g", {
                transform: "translate(-1047.000000, -266.000000)",
                stroke: "#6B7790",
                strokeWidth: "2"
            }, h("g", {
                transform: "translate(500.000000, 235.500000)"
            }, h("g", {
                transform: "translate(548.000000, 32.000000)"
            }, h("path", {
                d: "M0.625,19.375 L19.375,0.625"
            }), h("path", {
                d: "M0.625,0.625 L19.375,19.375"
            }))))))
        }
          , _ = n(45697)
          , b = n.n(_)
          , y = (b().shape({
            body: b().string,
            modalTitle: b().string,
            id: b().string.isRequired
        }),
        n(61988))
          , w = n(50099)
          , N = n(30874)
          , k = n(47557)
          , S = (n(70434),
        v.createElement);
        function x(e) {
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
                var n, a = (0,
                u.Z)(e);
                if (t) {
                    var r = (0,
                    u.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                c.Z)(this, n)
            }
        }
        var T = function(e) {
            return S("button", (0,
            d.Z)({
                className: "modal--close",
                "data-automationid": "modal_close"
            }, e), S(g, null))
        }
          , O = function(e) {
            return S("button", (0,
            d.Z)({
                className: "modal--toggle visually-hidden",
                "data-automationid": "modal_toggle"
            }, e))
        }
          , E = function(e, t) {
            var n = e ? "modal_open" : "modal_close"
              , a = {
                event_name: n,
                modal_name: t
            };
            (0,
            N.DS)(a),
            (0,
            N.JW)(n, "click", "click")
        }
          , P = function(e) {
            (0,
            s.Z)(a, e);
            var t = x(a);
            function a(e) {
                var n;
                return (0,
                i.Z)(this, a),
                (n = t.call(this, e)).modal = null,
                n.focusableEls = [],
                n.toggleModal = n.toggleModal.bind((0,
                l.Z)(n)),
                n.registerModals = n.registerModals.bind((0,
                l.Z)(n)),
                n.closeModal = n.closeModal.bind((0,
                l.Z)(n)),
                n.handleKeyDown = n.handleKeyDown.bind((0,
                l.Z)(n)),
                n.setModalRef = n.setModalRef.bind((0,
                l.Z)(n)),
                n.setFocusableEls = n.setFocusableEls.bind((0,
                l.Z)(n)),
                n.state = {
                    atTop: !0,
                    closing: !1,
                    isOpen: !1,
                    returnFocus: ""
                },
                n
            }
            return (0,
            o.Z)(a, [{
                key: "UNSAFE_componentWillMount",
                value: function() {
                    n.g.window && n.g.window.addEventListener("keydown", this.handleKeyDown, !0)
                }
            }, {
                key: "setModalRef",
                value: function(e) {
                    this.modal = e
                }
            }, {
                key: "handleKeyDown",
                value: function(e) {
                    var t = this.props.shown;
                    if ("undefined" !== typeof e && e.keyCode && t)
                        switch (e.keyCode) {
                        case 9:
                            if (1 === this.focusableEls.length) {
                                this.focusableEls[0].focus(),
                                e.preventDefault();
                                break
                            }
                            e.shiftKey ? document.activeElement === this.focusableEls[0] && (e.preventDefault(),
                            this.focusableEls[this.focusableEls.length - 1].focus()) : document.activeElement === this.focusableEls[this.focusableEls.length - 1] && (e.preventDefault(),
                            this.focusableEls[0].focus());
                            break;
                        case 27:
                            this.closeModal(e)
                        }
                }
            }, {
                key: "closeModal",
                value: function(e) {
                    var t = this.state.returnFocus
                      , n = this.props.onModalClosed;
                    this.setState({
                        closing: !0
                    }),
                    t && t.focus(),
                    this.setState({
                        closing: !1
                    }),
                    this.toggleModal(),
                    n && n();
                    var a = this.modal && this.modal.querySelector("video");
                    a && a.pause(),
                    e.stopPropagation()
                }
            }, {
                key: "toggleModal",
                value: function(e) {
                    var t = this.props
                      , n = t.toggleModal
                      , a = t.model.id
                      , r = this.state.isOpen;
                    n(a),
                    this.setState({
                        isOpen: !r,
                        returnFocus: e && e.target ? e.target : ""
                    }),
                    this.focusableEls.length >= 1 && this.focusableEls[0].focus(),
                    this.modal && (this.modal.scrollTop = 0)
                }
            }, {
                key: "registerModals",
                value: function() {
                    var e = this
                      , t = document || window.document || win.document;
                    if (t) {
                        var n = this.props.model.id;
                        t.querySelectorAll('a[data-target="#'.concat(n, '"], button[data-target="#').concat(n, '"]')).forEach((function(t) {
                            "true" !== t.getAttribute("data-listener") && (t.addEventListener("click", e.toggleModal),
                            t.setAttribute("data-listener", "true"))
                        }
                        ))
                    }
                }
            }, {
                key: "setFocusableEls",
                value: function() {
                    this.modal && (this.focusableEls = Array.from(this.modal.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]')))
                }
            }, {
                key: "UNSAFE_componentWillReceiveProps",
                value: function(e) {
                    var t = this.props
                      , n = t.shown
                      , a = t.onModalOpen
                      , r = t.title;
                    if (n !== e.shown)
                        if (e.shown) {
                            a && a(),
                            document.body.classList.add("modal-open"),
                            E(!0, r);
                            var i = this.modal && this.modal.querySelector("video");
                            i && i.play()
                        } else
                            E(!1, r),
                            document.body.classList.remove("modal-open")
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    this.setFocusableEls();
                    var t = document || window.document || win.document;
                    if (t) {
                        var n = this.props
                          , a = n.model.id
                          , r = n.deepLinkAnchor
                          , i = "#".concat(r || a);
                        t.addEventListener(w.REGISTER_MODALS_EVENT, (function() {
                            e.registerModals()
                        }
                        )),
                        this.registerModals(),
                        window.location.hash === i && this.toggleModal()
                    }
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    var t = this.props.shown;
                    this.setFocusableEls(),
                    e.shown !== t && t && this.modal.focus()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    n.g.window && n.g.window.removeEventListener("keydown", this.handleKeyDown, !0)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.shown
                      , a = t.className
                      , r = t.model
                      , i = r.id
                      , o = r.body
                      , l = r.modalTitle
                      , s = t.children
                      , c = this.state.closing
                      , u = f()("modal-wrapper cu-modal", {
                        "modal-show": n,
                        "modal-hide": !n,
                        "modal-closing": c
                    })
                      , d = f()(a, "modal-dialog modal", {
                        in: n
                    });
                    return S(v.Fragment, null, S("div", {
                        className: u,
                        id: i,
                        ref: this.setModalRef,
                        role: "dialog",
                        tabIndex: "-1",
                        "aria-label": "Modal has opened",
                        "aria-hidden": !n
                    }, S("div", {
                        className: "modal-backdrop ".concat(n ? "in" : ""),
                        onClick: this.closeModal
                    }), S("div", {
                        className: d,
                        ref: function(t) {
                            return e.modalDialog = t
                        }
                    }, S("div", {
                        className: "modal--header"
                    }, S(T, {
                        onClick: this.closeModal,
                        onMouseDown: y.W,
                        "aria-label": "Close modal"
                    }), S(O, {
                        onClick: this.toggleModal,
                        onMouseDown: y.W,
                        "aria-label": "Toggle modal",
                        tabIndex: "-1"
                    })), l && S(m.Z, {
                        as: "h2",
                        variant: "title24",
                        className: "modal-dialog__title"
                    }, l), o ? S(k.m7.div, {
                        className: "modal--body",
                        dangerouslySetInnerHTML: {
                            __html: o
                        }
                    }) : S("div", {
                        className: "modal--body"
                    }, s), S("div", {
                        className: "modal--footer"
                    }))))
                }
            }]),
            a
        }(v.Component)
          , C = v.createElement
          , D = function(e) {
            var t = e.children
              , n = e.body
              , a = e.title
              , r = e.className
              , i = e.close
              , o = e.arePostersAutomated
              , l = (0,
            v.useRef)(null);
            (0,
            v.useEffect)((function() {
                l.current.focus();
                var e = function(e) {
                    "Escape" === e.key && i()
                };
                return document.body.classList.add("modal-open"),
                window.addEventListener("keydown", e, !0),
                function() {
                    document.body.classList.remove("modal-open"),
                    window.removeEventListener("keydown", e, !0)
                }
            }
            ), []);
            var s = f()("modal--body", {
                "modal--body-with-title": a,
                "modal--body--with-automated-collection-image": o
            })
              , c = f()(r, "modal-dialog modal", {
                "modal-dialog--with-automated-collection-image": o
            });
            return C(v.Fragment, null, C("div", {
                className: "modal-wrapper modal-show cu-modal",
                role: "dialog",
                "aria-label": "Modal has opened"
            }, C("div", {
                className: "modal-backdrop",
                onClick: i
            }), C("div", {
                className: c
            }, C("div", {
                className: "modal_title--header"
            }, a ? C(m.Z, {
                as: "div",
                variant: "body14",
                className: "modal_title--header__text"
            }, a) : null, C("button", {
                className: "modal--close",
                onClick: i,
                onMouseDown: y.W,
                "aria-label": "Close modal",
                ref: l
            }, C(g, null))), n ? C(m.Z, {
                as: "div",
                variant: "body16"
            }, C(k.m7.div, {
                className: s,
                dangerouslySetInnerHTML: {
                    __html: n
                }
            })) : C(m.Z, {
                as: "div",
                variant: "body16",
                className: s
            }, t), C("div", {
                className: "modal--footer"
            }))))
        }
          , Z = n(86375)
          , I = n(25596)
          , M = n(8682)
          , A = (0,
        a.Z)({}, Z.F, I.Z)
          , L = (0,
        r.connect)((function(e, t) {
            var n, a, r = t.model.id;
            return {
                shown: (null === e || void 0 === e || null === (n = e.modal) || void 0 === n ? void 0 : n[r]) && Boolean(null === e || void 0 === e || null === (a = e.modal) || void 0 === a ? void 0 : a[r].shown)
            }
        }
        ), (function(e) {
            return {
                toggleModal: function(t) {
                    return e((0,
                    M.$)(t))
                }
            }
        }
        ))(P)
    },
    18393: function(e, t, n) {
        "use strict";
        n.d(t, {
            U: function() {
                return r
            }
        });
        var a = n(45697)
          , r = (0,
        a.shape)({
            style: a.string,
            sticky_mode: a.bool,
            cta_always: a.bool,
            enable_cta_toaster: a.bool,
            enableMinimalNav: a.bool,
            items: (0,
            a.arrayOf)((0,
            a.shape)({
                text: a.string,
                url: a.string
            })),
            cta: a.string,
            cta_button_style: a.string,
            disable_logo: a.bool,
            signup_flow_entry: a.string,
            ctaDownloadAppText: a.string,
            enableStickyModeAlways: a.bool
        })
    },
    9990: function(e, t, n) {
        "use strict";
        n.d(t, {
            X: function() {
                return Bv
            },
            A: function() {
                return Fv
            }
        });
        var a = {};
        n.r(a),
        n.d(a, {
            view: function() {
                return be
            }
        });
        var r = {};
        n.r(r),
        n.d(r, {
            reducerMap: function() {
                return tt
            },
            view: function() {
                return et
            }
        });
        var i = {};
        n.r(i),
        n.d(i, {
            view: function() {
                return Na
            }
        });
        var o = {};
        n.r(o),
        n.d(o, {
            view: function() {
                return Ta
            }
        });
        var l = {};
        n.r(l),
        n.d(l, {
            view: function() {
                return Ga
            }
        });
        var s = {};
        n.r(s),
        n.d(s, {
            view: function() {
                return Xa
            }
        });
        var c = {};
        n.r(c),
        n.d(c, {
            view: function() {
                return mr
            }
        });
        var u = {};
        n.r(u),
        n.d(u, {
            view: function() {
                return vr
            }
        });
        var d = {};
        n.r(d),
        n.d(d, {
            view: function() {
                return gr
            }
        });
        var m = {};
        n.r(m),
        n.d(m, {
            view: function() {
                return kr
            }
        });
        var p = {};
        n.r(p),
        n.d(p, {
            reducerMap: function() {
                return li
            },
            view: function() {
                return oi
            }
        });
        var f = {};
        n.r(f),
        n.d(f, {
            view: function() {
                return fi
            }
        });
        var v = {};
        n.r(v),
        n.d(v, {
            view: function() {
                return Bi
            }
        });
        var h = {};
        n.r(h),
        n.d(h, {
            view: function() {
                return Wi
            }
        });
        var g = {};
        n.r(g),
        n.d(g, {
            view: function() {
                return lo
            }
        });
        var _ = {};
        n.r(_),
        n.d(_, {
            view: function() {
                return fo
            }
        });
        var b = {};
        n.r(b),
        n.d(b, {
            view: function() {
                return go
            }
        });
        var y = {};
        n.r(y),
        n.d(y, {
            reducerMap: function() {
                return xo
            },
            view: function() {
                return So
            }
        });
        var w = {};
        n.r(w),
        n.d(w, {
            view: function() {
                return Wo
            }
        });
        var N = {};
        n.r(N),
        n.d(N, {
            reducerMap: function() {
                return fl
            },
            view: function() {
                return vl
            }
        });
        var k = {};
        n.r(k),
        n.d(k, {
            view: function() {
                return yl
            }
        });
        var S = {};
        n.r(S),
        n.d(S, {
            view: function() {
                return Sl
            }
        });
        var x = {};
        n.r(x),
        n.d(x, {
            view: function() {
                return Cl
            }
        });
        var T = {};
        n.r(T),
        n.d(T, {
            view: function() {
                return Zl
            }
        });
        var O = {};
        n.r(O),
        n.d(O, {
            view: function() {
                return Ml
            }
        });
        var E = {};
        n.r(E),
        n.d(E, {
            view: function() {
                return jl
            }
        });
        var P = {};
        n.r(P),
        n.d(P, {
            view: function() {
                return us
            }
        });
        var C = {};
        n.r(C),
        n.d(C, {
            view: function() {
                return vs
            }
        });
        var D = {};
        n.r(D),
        n.d(D, {
            reducerMap: function() {
                return As
            },
            view: function() {
                return Ms
            }
        });
        var Z = {};
        n.r(Z),
        n.d(Z, {
            reducerMap: function() {
                return Gs
            },
            view: function() {
                return Ws
            }
        });
        var I = {};
        n.r(I),
        n.d(I, {
            view: function() {
                return Vs
            }
        });
        var M = {};
        n.r(M),
        n.d(M, {
            reducerMap: function() {
                return qc
            },
            view: function() {
                return Fc
            }
        });
        var A = {};
        n.r(A),
        n.d(A, {
            reducerMap: function() {
                return Xc
            },
            view: function() {
                return Kc
            }
        });
        var L = {};
        n.r(L),
        n.d(L, {
            view: function() {
                return $c
            }
        });
        var R = {};
        n.r(R),
        n.d(R, {
            reducerMap: function() {
                return au
            },
            view: function() {
                return nu
            }
        });
        var j = {};
        n.r(j),
        n.d(j, {
            reducerMap: function() {
                return Tu
            },
            view: function() {
                return xu
            }
        });
        var H = {};
        n.r(H),
        n.d(H, {
            view: function() {
                return Ru
            }
        });
        var U = {};
        n.r(U),
        n.d(U, {
            reducerMap: function() {
                return Hu
            },
            view: function() {
                return ju
            }
        });
        var B = {};
        n.r(B),
        n.d(B, {
            reducerMap: function() {
                return Qu
            },
            view: function() {
                return Ju
            }
        });
        var F = {};
        n.r(F),
        n.d(F, {
            PlanComparisonChart: function() {
                return bd
            },
            reducerMap: function() {
                return wd
            },
            view: function() {
                return yd
            }
        });
        var q = {};
        n.r(q),
        n.d(q, {
            PlanComparisonChartWithToggle: function() {
                return $d
            },
            reducerMap: function() {
                return tm
            },
            view: function() {
                return em
            }
        });
        var G = {};
        n.r(G),
        n.d(G, {
            PlansContainer: function() {
                return om
            },
            reducerMap: function() {
                return sm
            },
            view: function() {
                return lm
            }
        });
        var W = {};
        n.r(W),
        n.d(W, {
            reducerMap: function() {
                return pm
            },
            view: function() {
                return mm
            }
        });
        var z = {};
        n.r(z),
        n.d(z, {
            view: function() {
                return ym
            }
        });
        var V = {};
        n.r(V),
        n.d(V, {
            view: function() {
                return Au
            }
        });
        var Y = {};
        n.r(Y),
        n.d(Y, {
            view: function() {
                return Nm
            }
        });
        var K = {};
        n.r(K),
        n.d(K, {
            reducerMap: function() {
                return Tm
            },
            view: function() {
                return xm
            }
        });
        var X = {};
        n.r(X),
        n.d(X, {
            reducerMap: function() {
                return Zm
            },
            view: function() {
                return Dm
            }
        });
        var J = {};
        n.r(J),
        n.d(J, {
            reducerMap: function() {
                return Lm
            },
            view: function() {
                return Rm
            }
        });
        var Q = {};
        n.r(Q),
        n.d(Q, {
            reducerMap: function() {
                return Jm
            },
            view: function() {
                return Xm
            }
        });
        var $ = {};
        n.r($),
        n.d($, {
            view: function() {
                return cp
            }
        });
        var ee = {};
        n.r(ee),
        n.d(ee, {
            view: function() {
                return pp
            }
        });
        var te = {};
        n.r(te),
        n.d(te, {
            view: function() {
                return kp
            }
        });
        var ne = {};
        n.r(ne),
        n.d(ne, {
            view: function() {
                return Mp
            }
        });
        var ae = {};
        n.r(ae),
        n.d(ae, {
            ExpPlanBuilder: function() {
                return Kp
            },
            reducerMap: function() {
                return Jp
            },
            view: function() {
                return Xp
            }
        });
        var re = {};
        n.r(re),
        n.d(re, {
            ExpPlanBuilder: function() {
                return pf
            },
            reducerMap: function() {
                return vf
            },
            view: function() {
                return ff
            }
        });
        var ie = {};
        n.r(ie),
        n.d(ie, {
            ExpPlanComparisonChart: function() {
                return Wf
            },
            reducerMap: function() {
                return Vf
            },
            view: function() {
                return zf
            }
        });
        var oe = {};
        n.r(oe),
        n.d(oe, {
            ExpPlanComparisonChartMultiTab: function() {
                return kv
            },
            reducerMap: function() {
                return xv
            },
            view: function() {
                return Sv
            }
        });
        var le = {};
        n.r(le),
        n.d(le, {
            ExpPlanComparisonChartWithToggle: function() {
                return Rv
            },
            reducerMap: function() {
                return Hv
            },
            view: function() {
                return jv
            }
        });
        var se = n(26265)
          , ce = n(94184)
          , ue = n.n(ce)
          , de = n(67294)
          , me = n(45697)
          , pe = n.n(me)
          , fe = ((0,
        me.shape)({
            eyebrow: me.string,
            headline: me.string,
            subheadline: me.string,
            disclaimer: me.string,
            modalLinkText: me.string,
            componentToScrollToId: me.string,
            hasBorder: me.bool
        }),
        n(61988))
          , ve = n(30874)
          , he = n(50099);
        n(98325);
        var ge, _e = de.createElement, be = function(e) {
            var t = e.model;
            return _e("div", {
                className: "Billboard"
            }, _e("div", {
                className: ue()({
                    Billboard__border: null === t || void 0 === t ? void 0 : t.hasBorder
                })
            }, _e("div", {
                className: "Billboard__container"
            }, _e("div", {
                className: "Billboard__eyebrow",
                dangerouslySetInnerHTML: {
                    __html: null === t || void 0 === t ? void 0 : t.eyebrow
                }
            }), _e("h2", {
                className: "Billboard__headline",
                dangerouslySetInnerHTML: {
                    __html: null === t || void 0 === t ? void 0 : t.headline
                }
            }), _e("h3", {
                className: "Billboard__subheadline",
                dangerouslySetInnerHTML: {
                    __html: null === t || void 0 === t ? void 0 : t.subheadline
                }
            }), _e("p", {
                className: "Billboard__disclaimer section-disclaimer",
                dangerouslySetInnerHTML: {
                    __html: null === t || void 0 === t ? void 0 : t.disclaimer
                }
            }), (null === t || void 0 === t ? void 0 : t.modalLinkText) && _e("button", {
                "aria-label": "Open Zip Code Module",
                onClick: function() {
                    return (0,
                    ve.DS)({
                        event_name: "zip_module"
                    })
                },
                onKeyDown: (0,
                fe.P)((function() {
                    return (0,
                    ve.DS)({
                        event_name: "zip_module"
                    })
                }
                )),
                className: "Billboard__modalLink",
                "data-toggle": "modal",
                "data-target": "#zip-modal"
            }, null === t || void 0 === t ? void 0 : t.modalLinkText), _e("button", {
                "aria-label": "Scroll to next section",
                onClick: function() {
                    !function(e) {
                        var t = n.g.document.getElementById(e);
                        t && t.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        })
                    }(null === t || void 0 === t ? void 0 : t.componentToScrollToId)
                },
                className: "Billboard__downArrow"
            }))))
        }, ye = n(37424), we = n(91229), Ne = n(809), ke = n.n(Ne), Se = n(92447), xe = n(83503), Te = n(66261), Oe = (0,
        me.shape)((ge = {},
        (0,
        se.Z)(ge, he.ANON, me.string),
        (0,
        se.Z)(ge, he.PARTIALLY_ENTITLED, me.string),
        (0,
        se.Z)(ge, he.FULLY_ENTITLED, me.string),
        ge)), Ee = {
            network: me.string,
            requirePremium: me.bool
        }, Pe = (0,
        me.shape)({
            url: me.string.isRequired,
            alt: me.string.isRequired
        }), Ce = ((0,
        me.shape)({
            eyebrow: me.string,
            bodyStates: Oe,
            headlineStates: Oe,
            primaryCta: (0,
            me.shape)({}),
            primaryAction: (0,
            me.shape)({}),
            secondaryCta: me.string,
            secondaryAction: me.string,
            primaryProgram: me.string,
            secondaryProgram: me.string,
            disclaimer: me.string,
            emailCapture: me.bool,
            style: me.string,
            image: (0,
            me.shape)({
                desktop: Pe,
                mobile: Pe,
                tablet: Pe
            }),
            primaryCtaStyle: me.string
        }),
        de.createElement), De = function() {
            return Ce("svg", {
                className: "caret-down",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 30",
                x: "0px",
                y: "0px"
            }, Ce("g", null, Ce("path", {
                d: "M12,16a.99676.99676,0,0,1-.707-.293l-6-6A.99989.99989,0,0,1,6.707,8.293L12,13.58594l5.293-5.293A.99989.99989,0,0,1,18.707,9.707l-6,6A.99676.99676,0,0,1,12,16Z"
            })))
        }, Ze = "/p-builder", Ie = "/s-builder", Me = "suf_web_plan_builder", Ae = n(54811), Le = n(14377), Re = n(47169), je = n(47557), He = n(13363), Ue = (n(16882),
        de.createElement), Be = "code", Fe = "email", qe = function(e) {
            var t = e.model
              , n = t.bodyStates
              , a = t.disclaimer
              , r = t.emailCapture
              , i = t.eyebrow
              , o = t.headlineStates
              , l = t.image
              , s = t.isCodeRequired
              , c = t.primaryAction
              , u = t.primaryCta
              , d = t.primaryCtaStyle
              , m = t.primaryProgram
              , p = t.requiredCodeType
              , f = t.secondaryAction
              , v = t.secondaryCta
              , h = t.secondaryProgram
              , g = t.style
              , _ = e.cartAbandonment
              , b = e.ctaFields
              , y = e.locale
              , w = e.user
              , N = w.entitlementState
              , k = g && g.includes("center-aligned")
              , S = g && g.includes("dark")
              , x = ue()("container", {
                dark: S
            }, "call-to-action-container")
              , T = (0,
            de.useState)(!1)
              , O = T[0]
              , E = T[1]
              , P = (0,
            de.useState)(null)
              , C = P[0]
              , D = P[1]
              , Z = (0,
            Le.vl)(w)
              , I = (0,
            je.pS)(He.Z, "string" === typeof (null === c || void 0 === c ? void 0 : c[null === w || void 0 === w ? void 0 : w.entitlementState]) && [Ze, Ie].includes(null === c || void 0 === c ? void 0 : c[null === w || void 0 === w ? void 0 : w.entitlementState]) ? "plan_builder" : "cta_primary");
            I = (0,
            je.GO)({
                event_name: Z,
                cta_placement: "call_to_action_primary"
            }, I);
            var M = (0,
            je.pS)("button", "cta_secondary");
            M = (0,
            je.GO)({
                event_name: Z,
                cta_placement: "call_to_action_secondary"
            }, M);
            var A = function(e) {
                E(!1),
                D(e.target.value)
            }
              , L = function() {
                var e = (0,
                Se.Z)(ke().mark((function e() {
                    var t;
                    return ke().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                (t = null === c || void 0 === c ? void 0 : c[w.entitlementState]) && t.startsWith("#") && Te.scroller.scrollTo(t.replace("#", ""), {
                                    duration: 500,
                                    delay: 100,
                                    smooth: !0,
                                    activeClass: "active"
                                });
                            case 2:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }()
              , R = function() {
                var e = (0,
                Se.Z)(ke().mark((function e() {
                    var t, n;
                    return ke().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t = null === c || void 0 === c ? void 0 : c[w.entitlementState],
                                !(s && !(w && w.isHuluUser))) {
                                    e.next = 10;
                                    break
                                }
                                return n = p,
                                e.next = 6,
                                (0,
                                Ae.tJ)(n, C);
                            case 6:
                                e.sent.status === he.STATUS_CODES.OK ? H((0,
                                se.Z)({}, "".concat(n, "_code}"), C), t, m) : E(!0),
                                e.next = 11;
                                break;
                            case 10:
                                !Boolean(r) || w && w.isHuluUser ? H(null, t, m) : H({
                                    email: C
                                }, t, m);
                            case 11:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }()
              , j = function() {
                H(null, f, h)
            }
              , H = function(e, t, n) {
                var a = {
                    params: e,
                    user: w,
                    componentUrl: t,
                    ctaFields: b,
                    from: n,
                    cartAbandonment: _
                };
                (0,
                Re.AU)(a)
            }
              , U = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                  , a = arguments.length > 3 ? arguments[3] : void 0
                  , r = arguments.length > 4 ? arguments[4] : void 0
                  , i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : ""
                  , o = N ? a[N] : a[he.ANON]
                  , l = {
                    className: t
                };
                return i && (l.id = i),
                n ? o && Ue(e, (0,
                we.Z)({}, l, {
                    "data-automationid": r,
                    dangerouslySetInnerHTML: {
                        __html: o
                    }
                })) : o && Ue(e, (0,
                we.Z)({}, l, {
                    "data-automationid": r
                }), o)
            }
              , B = function() {
                return i ? Ue(xe.Z, {
                    as: "p",
                    variant: "label14",
                    className: "eyebrow",
                    "data-automationid": "cta_eyebrow"
                }, i) : null
            }
              , F = w && w.isSubscriber ? null : p ? Be : r ? Fe : null
              , q = function() {
                var t = e.model;
                return w && w.isSubscriber ? null : t.inputBoxPlaceholder
            }()
              , G = function() {
                var e = w && w.isSubscriber
                  , t = u[he.ANON];
                e || (F === Be ? t = "Activate" : F === Fe && (t = "Sign up"));
                var n = {
                    user: w,
                    componentNonSubCta: t,
                    componentSubCta: u[he.PARTIALLY_ENTITLED],
                    componentAllCta: u[he.FULLY_ENTITLED],
                    locale: y,
                    ctaFields: b,
                    cartAbandonment: _
                };
                return (0,
                Ae.V6)(n)
            }();
            if (l) {
                var W = (g || "").replace("center-aligned", "")
                  , z = l.desktop
                  , V = l.tablet
                  , Y = l.mobile;
                return Ue("div", {
                    id: "call-to-action",
                    className: ue()("container", {
                        dark: S
                    }, "cu-call-to-action", "call-to-action-container"),
                    "data-automationid": "call_to_action",
                    role: "region"
                }, Ue("div", {
                    className: "container-width call-to-action call-to-action--with-image ".concat(W)
                }, Ue("div", {
                    className: "col-lg-6 cta--column--texts"
                }, Ue(B, null), Ue(xe.Z, {
                    as: "h2",
                    variant: "title32",
                    className: "cta--headline section-headline",
                    "data-automationid": "cta_headline"
                }, N ? o[N] : o[he.ANON]), U(je.m7.div, "cta--body", !0, n, "cta_body"), Ue("div", {
                    className: "cta--column--actions".concat(null != F ? "-with-input" : "")
                }, null != F && Ue("div", {
                    className: "cta--code-input-wrapper ".concat(O ? "cta--code-input--invalid" : "")
                }, Ue("input", {
                    type: F === Fe ? "email" : "text",
                    className: "cta--code-input",
                    placeholder: q,
                    onChange: A
                }), Ue("div", {
                    className: "cta--invalid-code-icon"
                }, "!")), Ue(I, {
                    useStyle: d,
                    onClick: R
                }, G), v && null === F && Ue(M, {
                    className: "button--cta secondary-button",
                    "data-automationid": "button_cta",
                    onClick: j
                }, v)), a && Ue(je.m7.div, {
                    className: "cta__disclaimer",
                    "data-automationid": "cta_disclaimer",
                    dangerouslySetInnerHTML: {
                        __html: a
                    }
                })), Ue("div", {
                    className: "col-lg-6 cta--image"
                }, Ue("picture", null, Ue("source", {
                    media: "(min-width: 1024px)",
                    "data-srcset": z.url
                }), Ue("source", {
                    media: "(min-width: 768px)",
                    "data-srcset": V.url
                }), Ue("source", {
                    media: "(min-width: 0px)",
                    "data-srcset": Y.url
                }), Ue("img", {
                    className: "lazyload",
                    "data-src": z.url,
                    alt: z.alt
                })))))
            }
            return Ue("div", {
                id: "call-to-action",
                className: x,
                role: "region",
                "aria-labelledby": "regionCallToAction",
                "data-automationid": "call_to_action"
            }, Ue("div", {
                className: "container-width call-to-action ".concat(g)
            }, Ue("div", {
                className: "".concat(k ? "" : "col-lg-6", " cta--column--texts")
            }, Ue(B, null), U("h2", "cta--headline section-headline", !1, o, "cta_headline", "regionCallToAction"), U(je.m7.div, "cta--body", !0, n, "cta_body")), Ue("div", {
                className: "".concat(k ? "" : "col-lg-6", " cta--column--actions").concat(null != F ? "-with-input" : "")
            }, null != F && Ue("div", {
                className: "cta--code-input-wrapper ".concat(O && "cta--code-input--invalid")
            }, Ue("input", {
                type: F === Fe ? "email" : "text",
                className: "cta--code-input",
                placeholder: q,
                onChange: A
            }), Ue("div", {
                className: "cta--invalid-code-icon"
            }, "!")), Ue("div", {
                className: "cta__action-container"
            }, g && g.includes("anchor-cta") ? Ue(He.Z, {
                onClick: L,
                className: "anchor-cta-button"
            }, Ue(De, null)) : Ue(I, {
                useStyle: d,
                onClick: R
            }, G), v && null === F && Ue(M, {
                className: "button--cta secondary-button",
                "data-automationid": "button_cta",
                onClick: j
            }, v), a && Ue(je.m7.div, {
                className: "cta__disclaimer",
                "data-automationid": "cta_disclaimer",
                dangerouslySetInnerHTML: {
                    __html: a
                }
            })))))
        }, Ge = "ctaFields", We = "ACTION_TYPE_INIT_CTAFIELDS";
        function ze(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        var Ve = (0,
        se.Z)({}, We, (function(e) {
            return function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ze(Object(n), !0).forEach((function(t) {
                        (0,
                        se.Z)(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ze(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }({}, e)
        }
        ))
          , Ye = "user"
          , Ke = "STATE_USER_ACTION_UPDATE_INFO";
        function Xe(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function Je(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Xe(Object(n), !0).forEach((function(t) {
                    (0,
                    se.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Xe(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var Qe, $e = (0,
        se.Z)({}, Ke, (function(e, t) {
            return Je(Je({}, e), t)
        }
        )), et = (0,
        ye.connect)((function(e) {
            return {
                user: e.user,
                ctaFields: e[Ge]
            }
        }
        ))(qe), tt = (Qe = {},
        (0,
        se.Z)(Qe, Ye, $e),
        (0,
        se.Z)(Qe, Ge, Ve),
        Qe), nt = pe().shape({
            id: pe().string,
            name: pe().string,
            description: pe().string,
            items: pe().arrayOf(pe().shape({})),
            enabledTileLinks: pe().bool
        }), at = (pe().shape({
            title: pe().string,
            description: pe().string,
            collection: nt.isRequired
        }),
        n(31307),
        de.createElement), rt = (0,
        je.GO)({
            event_name: "portrait_collection_tray_header",
            component_id: "portrait_collection"
        }, (0,
        je.pS)("a", "tray_header", "link")), it = function(e) {
            var t = e.name
              , n = e.description
              , a = e.viewAllLink
              , r = e.slider
              , i = e.collectionHubPath;
            return at("div", {
                className: "SimpleCollection"
            }, at((function() {
                var e = at(xe.Z, {
                    breakpoints: {
                        xs: "label14",
                        lg: "label18"
                    }
                }, t);
                return i ? at(rt, {
                    className: "SimpleCollection__tray-header SimpleCollection__title",
                    name: "".concat(t, "-collection"),
                    onMouseDown: fe.W,
                    href: i,
                    "aria-label": "".concat(t, " Collection"),
                    "data-automationid": "simple_collection_title"
                }, e) : at("h2", {
                    className: "SimpleCollection__title",
                    "data-automationid": "simple_collection_title"
                }, e)
            }
            ), null), n && at(xe.Z, {
                as: "div",
                variant: "body16",
                className: "SimpleCollection__description"
            }, n), a, r && at("div", {
                className: "SimpleCollection__slider"
            }, r))
        }, ot = n(74047), lt = n(52700), st = n(33814), ct = n(44102), ut = n(20775), dt = n(23279), mt = n.n(dt), pt = n(27361), ft = n.n(pt), vt = de.createElement, ht = function(e) {
            var t = e.title;
            return vt("svg", {
                viewBox: "0 0 64 64"
            }, vt("title", null, t), vt("g", {
                transform: "matrix(0 -1 -1 0 64 64)",
                fill: "none",
                fillRule: "evenodd"
            }, vt("circle", {
                fill: "#FFF",
                cx: "32",
                cy: "32",
                r: "32"
            }), vt("path", {
                d: "M40.8 27.92l-9.2 9.2-9.2-9.2",
                strokeWidth: "2",
                stroke: "#868D9B"
            })))
        }, gt = de.createElement, _t = function(e) {
            var t = e.title;
            return gt("svg", {
                viewBox: "0 0 64 64"
            }, gt("title", null, t), gt("g", {
                transform: "rotate(-90 32 32)",
                fill: "none",
                fillRule: "evenodd"
            }, gt("circle", {
                fill: "#FFF",
                cx: "32",
                cy: "32",
                r: "32"
            }), gt("path", {
                d: "M40.8 27.92l-9.2 9.2-9.2-9.2",
                strokeWidth: "2",
                stroke: "#868D9B"
            })))
        }, bt = n(4706), yt = de.createElement;
        function wt(e) {
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
                var n, a = (0,
                ut.Z)(e);
                if (t) {
                    var r = (0,
                    ut.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                ct.Z)(this, n)
            }
        }
        var Nt = !1;
        try {
            addEventListener("test", null, Object.defineProperty({}, "capture", {
                get: function() {
                    Nt = !0
                }
            }))
        } catch (qv) {}
        function kt() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                capture: !0
            };
            return Nt ? e : e.capture
        }
        function St(e) {
            if ("touches"in e) {
                var t = e.touches[0];
                return {
                    x: t.pageX,
                    y: t.pageY
                }
            }
            return {
                x: e.screenX,
                y: e.screenY
            }
        }
        var xt = function(e) {
            (0,
            st.Z)(n, e);
            var t = wt(n);
            function n() {
                var e;
                (0,
                ot.Z)(this, n);
                for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++)
                    r[i] = arguments[i];
                return (e = t.call.apply(t, [this].concat(r)))._handleSwipeStart = e._handleSwipeStart.bind((0,
                bt.Z)(e)),
                e._handleSwipeMove = e._handleSwipeMove.bind((0,
                bt.Z)(e)),
                e._handleSwipeEnd = e._handleSwipeEnd.bind((0,
                bt.Z)(e)),
                e._onMouseDown = e._onMouseDown.bind((0,
                bt.Z)(e)),
                e._onMouseMove = e._onMouseMove.bind((0,
                bt.Z)(e)),
                e._onMouseUp = e._onMouseUp.bind((0,
                bt.Z)(e)),
                e
            }
            return (0,
            lt.Z)(n, [{
                key: "componentDidMount",
                value: function() {
                    this.swiper && this.swiper.addEventListener("touchmove", this._handleSwipeMove, kt({
                        capture: !0,
                        passive: !1
                    }))
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.swiper && this.swiper.removeEventListener("touchmove", this._handleSwipeMove, kt({
                        capture: !0,
                        passive: !1
                    }))
                }
            }, {
                key: "_onMouseDown",
                value: function(e) {
                    this.props.allowMouseEvents && (this.mouseDown = !0,
                    document.addEventListener("mouseup", this._onMouseUp),
                    document.addEventListener("mousemove", this._onMouseMove),
                    this._handleSwipeStart(e))
                }
            }, {
                key: "_onMouseMove",
                value: function(e) {
                    this.mouseDown && this._handleSwipeMove(e)
                }
            }, {
                key: "_onMouseUp",
                value: function(e) {
                    this.mouseDown = !1,
                    document.removeEventListener("mouseup", this._onMouseUp),
                    document.removeEventListener("mousemove", this._onMouseMove),
                    this._handleSwipeEnd(e)
                }
            }, {
                key: "_handleSwipeStart",
                value: function(e) {
                    var t = this.props.onSwipeStart
                      , n = St(e)
                      , a = n.x
                      , r = n.y;
                    this.moveStart = {
                        x: a,
                        y: r
                    },
                    t(e)
                }
            }, {
                key: "_handleSwipeMove",
                value: function(e) {
                    var t = this.props.onSwipeMove;
                    if (this.moveStart) {
                        var n = St(e)
                          , a = n.x
                          , r = n.y
                          , i = a - this.moveStart.x
                          , o = r - this.moveStart.y;
                        this.moving = !0,
                        t({
                            x: i,
                            y: o
                        }, e) && e.preventDefault(),
                        this.movePosition = {
                            deltaX: i,
                            deltaY: o
                        }
                    }
                }
            }, {
                key: "_handleSwipeEnd",
                value: function(e) {
                    var t = this.props
                      , n = t.onSwipeEnd
                      , a = t.onSwipeLeft
                      , r = t.onSwipeRight
                      , i = t.onSwipeUp
                      , o = t.onSwipeDown;
                    n(e);
                    var l = this.props.tolerance;
                    if (this.moving && this.movePosition) {
                        var s = {
                            x: this.movePosition.deltaX,
                            y: this.movePosition.deltaY
                        };
                        this.movePosition.deltaX < -l ? a(s, e) : this.movePosition.deltaX > l && r(s, e),
                        this.movePosition.deltaY < -l ? i(s, e) : this.movePosition.deltaY > l && o(s, e)
                    }
                    this.moveStart = null,
                    this.moving = !1,
                    this.movePosition = null
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.tagName
                      , a = t.className
                      , r = t.style
                      , i = t.children;
                    return yt(n, {
                        ref: function(t) {
                            return e.swiper = t
                        },
                        onMouseDown: this._onMouseDown,
                        onTouchStart: this._handleSwipeStart,
                        onTouchEnd: this._handleSwipeEnd,
                        className: a,
                        style: r
                    }, i)
                }
            }]),
            n
        }(de.Component);
        xt.displayName = "EasySwipe",
        xt.defaultProps = {
            tagName: "div",
            allowMouseEvents: !1,
            onSwipeUp: function() {},
            onSwipeDown: function() {},
            onSwipeLeft: function() {},
            onSwipeRight: function() {},
            onSwipeStart: function() {},
            onSwipeMove: function() {},
            onSwipeEnd: function() {},
            tolerance: 0
        };
        var Tt = xt
          , Ot = (n(42194),
        de.createElement);
        function Et(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function Pt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Et(Object(n), !0).forEach((function(t) {
                    (0,
                    se.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Et(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function Ct(e) {
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
                } catch (qv) {
                    return !1
                }
            }();
            return function() {
                var n, a = (0,
                ut.Z)(e);
                if (t) {
                    var r = (0,
                    ut.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                ct.Z)(this, n)
            }
        }
        var Dt = "slide"
          , Zt = "swipe"
          , It = "static"
          , Mt = function(e) {
            (0,
            st.Z)(n, e);
            var t = Ct(n);
            function n(e) {
                var a, r;
                (0,
                ot.Z)(this, n),
                (r = t.call(this, e)).state = {
                    mode: Dt,
                    expanded: !1,
                    swipePosition: 0,
                    page: 0,
                    lastPage: null,
                    itemsPerPage: 5,
                    itemWidth: 25,
                    itemWidthPx: 0
                },
                r.SeeMoreButton = (0,
                je.AG)("button", Pt({
                    action_specifier: "see_more"
                }, r.commonMetricsContext)),
                r.SliderLeftButton = (0,
                je.AG)("button", Pt({
                    action_specifier: "arrow_previous"
                }, r.commonMetricsContext)),
                r.SliderRightButton = (0,
                je.AG)("button", Pt({
                    action_specifier: "arrow_next"
                }, r.commonMetricsContext)),
                r.updateExpanded = function() {
                    r.setState({
                        expanded: !0
                    })
                }
                ,
                r.nextPage = function() {
                    r.hasNextPage() && r.changePage(1)
                }
                ,
                r.prevPage = function() {
                    r.hasPreviousPage() && r.changePage(-1)
                }
                ,
                r.onResize = mt()((function() {
                    return r.handleResize()
                }
                ), 100),
                r.handleSwipeMove = function(e) {
                    var t = r.state
                      , n = t.itemWidthPx
                      , a = (t.itemsPerPage - r.props.items.length) * n;
                    return r.setState({
                        swipePosition: Math.min(0, Math.max(r.swipeStartIndex + e.x, a))
                    }),
                    e.x > 5
                }
                ,
                r.handleSwipeStart = function() {
                    var e = r.state.swipePosition;
                    r.swipeStartIndex = e,
                    r.swipeStart = !0
                }
                ,
                r.handleSwipeEnd = function() {
                    r.swipeStart = !1
                }
                ,
                r.handleSwipeLeft = function(e) {
                    r.shouldSwipeSnap(e.x) ? r.nextPage() : r.hasNextPage() && r.setState((function(e) {
                        return {
                            page: e.page + 1
                        }
                    }
                    ))
                }
                ,
                r.handleSwipeRight = function(e) {
                    r.shouldSwipeSnap(e.x) ? r.prevPage() : r.hasPreviousPage() && r.setState((function(e) {
                        return {
                            page: e.page - 1
                        }
                    }
                    ))
                }
                ,
                r.slider = null,
                r.setSliderRef = (a = r).setSliderRef.bind(a),
                r.setItemsAccessibility = (a = r).setItemsAccessibility.bind(a);
                var i = r.props.collectionIndex;
                return r.commonMetricsContext = {
                    element_specifier: ft()(r.props, "collectionType", "collection"),
                    collection_id: ft()(r.props, "collection.id"),
                    collection_index: i,
                    conditional_properties: ["collection"]
                },
                r
            }
            return (0,
            lt.Z)(n, [{
                key: "getIndex",
                value: function(e) {
                    var t = this.props.items
                      , n = this.state.itemsPerPage
                      , a = t.length % n;
                    return e * n - (this.hasPreviousPage() && !this.hasNextPage() && a > 0 ? n - a : 0)
                }
            }, {
                key: "getItemsStyle",
                value: function() {
                    var e = this.state
                      , t = e.page
                      , n = e.itemsPerPage
                      , a = e.itemWidth
                      , r = e.mode
                      , i = e.swipePosition;
                    if (r === It)
                        return {};
                    if (r === Zt)
                        return this.swipeAction ? {
                            transform: "translateX(".concat(i, "px)")
                        } : {
                            transition: "transform 0.3s ease-out",
                            transform: "translateX(".concat(i, "px)")
                        };
                    var o = this.getIndex(t);
                    return {
                        transition: "transform 0.5s ease-out",
                        transform: "translateX(".concat(-a * n * (o / n), "%)")
                    }
                }
            }, {
                key: "isVisible",
                value: function(e, t) {
                    var n = this.state.itemsPerPage;
                    return e >= t && e < t + n
                }
            }, {
                key: "setSliderRef",
                value: function(e) {
                    this.slider = e
                }
            }, {
                key: "renderItems",
                value: function() {
                    var e = this
                      , t = this.props.items
                      , n = this.state
                      , a = n.page
                      , r = n.mode
                      , i = n.expanded
                      , o = this.getIndex(a)
                      , l = r === Dt
                      , s = r === It && i;
                    return Ot("div", {
                        className: "Slider__wrapper"
                    }, Ot("div", {
                        className: ue()("Slider__items", {
                            "Slider__items--expanded": s
                        }),
                        style: this.getItemsStyle()
                    }, t.map((function(t, n) {
                        return Ot("div", {
                            className: ue()("Slider__item", {
                                "Slider__item--visible": l && e.isVisible(n, o)
                            }),
                            ref: function(t) {
                                return e.itemElement = t
                            },
                            key: n
                        }, t)
                    }
                    ))))
                }
            }, {
                key: "renderSliderMode",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.previousAltText
                      , a = t.nextAltText
                      , r = this.state.mode
                      , i = this.renderItems();
                    return r === Zt && (i = Ot(Tt, {
                        onSwipeStart: this.handleSwipeStart,
                        onSwipeMove: this.handleSwipeMove,
                        onSwipeEnd: this.handleSwipeEnd,
                        onSwipeLeft: this.handleSwipeLeft,
                        onSwipeRight: this.handleSwipeRight,
                        tolerance: 80
                    }, this.renderItems())),
                    Ot(de.Fragment, null, Ot(this.SliderLeftButton, {
                        className: "Slider__button Slider__button--previous",
                        disabled: !this.hasPreviousPage(),
                        onMouseDown: fe.W,
                        onClick: function() {
                            return e.changePage(-1)
                        },
                        "aria-label": "Previous slide",
                        "data-automationid": "slider_button_previous"
                    }, Ot(ht, {
                        title: n
                    })), i, Ot(this.SliderRightButton, {
                        className: "Slider__button Slider__button--next",
                        disabled: !this.hasNextPage(),
                        onMouseDown: fe.W,
                        onClick: function() {
                            return e.changePage(1)
                        },
                        "aria-label": "Next slide",
                        "data-automationid": "slider_button_next"
                    }, Ot(_t, {
                        title: a
                    })))
                }
            }, {
                key: "renderStaticMode",
                value: function() {
                    var e = this.props.items
                      , t = this.state.expanded
                      , n = e.length - 4
                      , a = n > 0;
                    return Ot(de.Fragment, null, this.renderItems(), !t && a && Ot(this.SeeMoreButton, {
                        className: "Slider__see-more-button",
                        onClick: this.updateExpanded
                    }, "SEE MORE (".concat(n, ")")))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.className
                      , t = this.state.mode === It
                      , n = ue()("Slider", e, {
                        "Slider--static": t
                    });
                    return Ot("div", {
                        className: n,
                        ref: this.setSliderRef
                    }, !t && this.renderSliderMode(), t && this.renderStaticMode())
                }
            }, {
                key: "hasPreviousPage",
                value: function() {
                    return this.state.page > 0
                }
            }, {
                key: "hasNextPage",
                value: function() {
                    var e = this.props.items
                      , t = this.state
                      , n = t.page
                      , a = t.itemsPerPage;
                    return n < e.length / a - 1
                }
            }, {
                key: "changePage",
                value: function(e) {
                    var t = this
                      , n = this.state
                      , a = n.page
                      , r = n.itemsPerPage
                      , i = this.props.collection
                      , o = r * (a + e)
                      , l = e > 0 ? "next" : "prev";
                    (0,
                    Le.T7)(o, l, i.name),
                    clearTimeout(this.clearLastPage),
                    this.clearLastPage = setTimeout((function() {
                        t.setState({
                            lastPage: null
                        })
                    }
                    ), 500),
                    this.setState({
                        lastPage: a,
                        page: a + e,
                        swipePosition: this.getSwipePositionForPage(a + e)
                    })
                }
            }, {
                key: "setItemsAccessibility",
                value: function() {
                    var e = this
                      , t = this.state.page;
                    if (this.slider) {
                        var n = this.getIndex(t);
                        Array.from(this.slider.querySelectorAll(".Slider__item")).map((function(t, a) {
                            var r = Array.from(t.querySelectorAll("button, a[href]"))
                              , i = e.isVisible(a, n) ? 0 : -1;
                            r.map((function(e) {
                                e.tabIndex = i
                            }
                            ))
                        }
                        ))
                    }
                }
            }, {
                key: "getSwipePositionForPage",
                value: function(e) {
                    var t = this.state;
                    return -t.itemWidthPx * t.itemsPerPage * e
                }
            }, {
                key: "shouldSwipeSnap",
                value: function(e) {
                    var t = this.state
                      , n = t.itemWidthPx * t.itemsPerPage;
                    return Math.abs(e) < n
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    window.addEventListener("resize", this.onResize),
                    this.handleResize(),
                    this.setItemsAccessibility()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    window.removeEventListener("resize", this.onResize)
                }
            }, {
                key: "componentDidUpdate",
                value: function(e, t) {
                    var n = this.state
                      , a = n.itemsPerPage
                      , r = n.page;
                    t.itemsPerPage === a && t.page === r || this.setItemsAccessibility()
                }
            }, {
                key: "handleResize",
                value: function() {
                    var e = this.props
                      , t = e.items
                      , n = e.mobileModeTrigger
                      , a = e.mobileMode
                      , r = this.state.page;
                    if (t.length && this.itemElement) {
                        var i = window.getComputedStyle(this.itemElement)
                          , o = parseFloat(i.flexBasis)
                          , l = parseFloat(i.width)
                          , s = 100 / o;
                        s = s % 1 >= .98 ? Math.ceil(s) : Math.floor(s);
                        var c = Math.floor(t.length / s) - 1
                          , u = Dt;
                        n && s <= n && (u = a),
                        this.setState((function(e) {
                            var t = e.mode !== u;
                            return {
                                mode: u,
                                itemsPerPage: s,
                                itemWidth: o,
                                itemWidthPx: l,
                                swipePosition: t ? 0 : e.swipePosition,
                                page: t ? 0 : Math.max(0, Math.min(r, c))
                            }
                        }
                        ))
                    }
                }
            }]),
            n
        }(de.Component);
        Mt.defaultProps = {
            mobileModeTrigger: 0
        };
        var At = Mt
          , Lt = n(23560)
          , Rt = n.n(Lt)
          , jt = function() {
            function e(t) {
                (0,
                ot.Z)(this, e),
                this._entity = t
            }
            return (0,
            lt.Z)(e, [{
                key: "getArtworkPath",
                value: function() {
                    var e = ft()(this._entity, "artwork.horizontalProgramTile.path", null)
                      , t = ft()(this._entity, "artwork.horizontalHero.path", null);
                    return e || t
                }
            }, {
                key: "getPortraitArtwork",
                value: function() {
                    return ft()(this._entity, "artwork.verticalHero", null)
                }
            }, {
                key: "getProgramVerticalArtwork",
                value: function() {
                    return ft()(this._entity, "artwork.verticalProgramTile", null)
                }
            }, {
                key: "getTitleArtwork",
                value: function() {
                    return ft()(this._entity, "artwork.titleArtwork.path", null)
                }
            }, {
                key: "getBrandArtWork",
                value: function() {
                    return ft()(this._entity, "artwork.watermark.path", null)
                }
            }, {
                key: "getDuration",
                value: function() {
                    return ft()(this._entity, "duration")
                }
            }, {
                key: "getType",
                value: function() {
                    var e, t = null === this || void 0 === this || null === (e = this._entity) || void 0 === e ? void 0 : e.type;
                    return t ? t[0].toUpperCase() + t.slice(1) : "Default"
                }
            }, {
                key: "getDescription",
                value: function() {
                    return ft()(this._entity, "description")
                }
            }, {
                key: "getRating",
                value: function() {
                    return ft()(this._entity, "rating")
                }
            }, {
                key: "getGenres",
                value: function() {
                    return ft()(this._entity, "genres", [])
                }
            }, {
                key: "getPremiereDate",
                value: function() {
                    var e = ft()(this._entity, "premiereDate", null);
                    return Boolean(e) && new Date(e)
                }
            }, {
                key: "getAssetUrl",
                value: function() {
                    return this.getDetailsPageUrl()
                }
            }, {
                key: "getDetailsPageUrl",
                value: function() {
                    return ft()(this._entity, "href")
                }
            }, {
                key: "isPlayable",
                value: function() {
                    return Boolean(this._entity.eabId)
                }
            }, {
                key: "getTimeBadge",
                value: function() {
                    var e, t;
                    return null !== (e = this._entity) && void 0 !== e && e.timeBadge ? {
                        text: null === (t = this._entity) || void 0 === t ? void 0 : t.timeBadge
                    } : null
                }
            }, {
                key: "getData",
                value: function() {
                    return {
                        title: ft()(this._entity, "name"),
                        description: this.getDescription(),
                        rating: this.getRating(),
                        genres: this.getGenres(),
                        type: this.getType(),
                        premiereDate: this.getPremiereDate(),
                        entityId: ft()(this._entity, "id"),
                        eabId: ft()(this._entity, "eabId"),
                        thumbnail: this.getArtworkPath(),
                        artwork: this.getPortraitArtwork(),
                        titleArtwork: this.getTitleArtwork(),
                        programArtwork: this.getProgramVerticalArtwork(),
                        duration: this.getDuration(),
                        assetUrl: this.getAssetUrl(),
                        detailsUrl: this.getDetailsPageUrl(),
                        brandWatermark: this.getBrandArtWork(),
                        availability: {
                            isPlayable: this.isPlayable()
                        },
                        timeBadge: this.getTimeBadge()
                    }
                }
            }]),
            e
        }()
          , Ht = "episode"
          , Ut = "network"
          , Bt = "extra"
          , Ft = n(90765);
        function qt(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function Gt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? qt(Object(n), !0).forEach((function(t) {
                    (0,
                    se.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qt(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function Wt(e) {
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
                } catch (qv) {
                    return !1
                }
            }();
            return function() {
                var n, a = (0,
                ut.Z)(e);
                if (t) {
                    var r = (0,
                    ut.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                ct.Z)(this, n)
            }
        }
        var zt = function(e) {
            (0,
            st.Z)(n, e);
            var t = Wt(n);
            function n(e) {
                return (0,
                ot.Z)(this, n),
                t.call(this, e)
            }
            return (0,
            lt.Z)(n, [{
                key: "getData",
                value: function() {
                    return Gt(Gt({}, (0,
                    Ft.Z)((0,
                    ut.Z)(n.prototype), "getData", this).call(this)), {}, {
                        thumbnail: ft()(this._entity, "artwork.horizontalHero.path", null),
                        episode: ft()(this._entity, "number")
                    })
                }
            }]),
            n
        }(jt);
        function Vt(e) {
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
                } catch (qv) {
                    return !1
                }
            }();
            return function() {
                var n, a = (0,
                ut.Z)(e);
                if (t) {
                    var r = (0,
                    ut.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                ct.Z)(this, n)
            }
        }
        var Yt = function(e) {
            (0,
            st.Z)(n, e);
            var t = Vt(n);
            function n(e) {
                return (0,
                ot.Z)(this, n),
                t.call(this, e)
            }
            return n
        }(jt);
        function Kt(e) {
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
                } catch (qv) {
                    return !1
                }
            }();
            return function() {
                var n, a = (0,
                ut.Z)(e);
                if (t) {
                    var r = (0,
                    ut.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                ct.Z)(this, n)
            }
        }
        var Xt = function(e) {
            (0,
            st.Z)(n, e);
            var t = Kt(n);
            function n(e) {
                return (0,
                ot.Z)(this, n),
                t.call(this, e)
            }
            return n
        }(jt);
        function Jt(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function Qt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Jt(Object(n), !0).forEach((function(t) {
                    (0,
                    se.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Jt(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function $t(e) {
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
                } catch (qv) {
                    return !1
                }
            }();
            return function() {
                var n, a = (0,
                ut.Z)(e);
                if (t) {
                    var r = (0,
                    ut.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                ct.Z)(this, n)
            }
        }
        var en = function(e) {
            (0,
            st.Z)(n, e);
            var t = $t(n);
            function n(e) {
                return (0,
                ot.Z)(this, n),
                t.call(this, e)
            }
            return (0,
            lt.Z)(n, [{
                key: "getData",
                value: function() {
                    return Qt(Qt({}, (0,
                    Ft.Z)((0,
                    ut.Z)(n.prototype), "getData", this).call(this)), {}, {
                        thumbnail: ft()(this._entity, "artwork.networkTile.path", null),
                        description: null,
                        brandWatermark: null
                    })
                }
            }]),
            n
        }(jt);
        function tn(e) {
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
                } catch (qv) {
                    return !1
                }
            }();
            return function() {
                var n, a = (0,
                ut.Z)(e);
                if (t) {
                    var r = (0,
                    ut.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                ct.Z)(this, n)
            }
        }
        var nn = function(e) {
            (0,
            st.Z)(n, e);
            var t = tn(n);
            function n(e) {
                return (0,
                ot.Z)(this, n),
                t.call(this, e)
            }
            return (0,
            lt.Z)(n, [{
                key: "getType",
                value: function() {
                    return "TV Series"
                }
            }]),
            n
        }(jt)
          , an = de.createElement;
        function rn(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function on(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? rn(Object(n), !0).forEach((function(t) {
                    (0,
                    se.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : rn(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var ln = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.rating
              , n = e.genres
              , a = e.type
              , r = e.premiereDate
              , i = [];
            if (t && i.push(t),
            (null === n || void 0 === n ? void 0 : n.length) > 0 && i.push(n.slice(0, 2).join(", ")),
            a) {
                var o = r ? "".concat(a, " (").concat(r.getFullYear(), ")") : a;
                i.push(o)
            }
            return i.join(" \u2022 ")
        }
          , sn = function(e, t) {
            return function(n) {
                var a, r = n.asset, i = function(e) {
                    switch (e.type) {
                    case Ht:
                        return new zt(e).getData();
                    case Bt:
                        return new Yt(e).getData();
                    case "movie":
                        return new Xt(e).getData();
                    case "series":
                        return new nn(e).getData();
                    case Ut:
                        return new en(e).getData();
                    default:
                        return new jt(e).getData()
                    }
                }(r);
                Rt()(t) && (a = t(i, r));
                var o = on(on(on({}, n), i), a);
                return [Ht, Bt].includes(r.type) && (o.disableTileLink = !0,
                o.hideControlIcon = !0),
                an(e, o)
            }
        }
          , cn = n(64121)
          , un = n(60690)
          , dn = n(17618)
          , mn = (n(3749),
        de.createElement);
        function pn(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function fn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? pn(Object(n), !0).forEach((function(t) {
                    (0,
                    se.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pn(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var vn = function(e) {
            var t = e.artwork
              , n = e.className
              , a = e.mobileArtwork
              , r = e.title
              , i = (0,
            un.w)().windowSize.width
              , o = function(e) {
                var t = (0,
                cn.Z)(e, 3)
                  , n = t[0]
                  , a = t[1]
                  , r = t[2]
                  , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                return "hsla(".concat(n, ", ").concat(a, "%, ").concat(r, "%, ").concat(i, ")")
            };
            return mn("div", {
                className: "".concat(n, "__wrapper")
            }, mn("div", {
                className: "".concat(n, "__base")
            }), function() {
                var e = (0,
                dn.f7)(ft()(a, "path"), he.MASTHEAD_VERTICAL_SIZES, "webp")
                  , i = (0,
                dn.f7)(ft()(t, "path"), he.MASTHEAD_HORIZONTAL_SIZES, "webp")
                  , o = fn(fn({}, e), i);
                return mn("picture", {
                    className: "".concat(n, "__art")
                }, mn("source", {
                    media: "(min-width: ".concat(he.BREAKPOINTS.XXLARGE, "px)"),
                    srcSet: "".concat(o.xxlarge, " 1x, ").concat(o.xxlarge_retina, " 2x")
                }), mn("source", {
                    media: "(min-width: ".concat(he.BREAKPOINTS.XLARGE, "px)"),
                    srcSet: "".concat(o.xlarge, " 1x, ").concat(o.xlarge_retina, " 2x")
                }), mn("source", {
                    media: "(min-width: ".concat(he.BREAKPOINTS.LARGE, "px)"),
                    srcSet: "".concat(o.large, " 1x, ").concat(o.large_retina, " 2x")
                }), mn("source", {
                    media: "(min-width: ".concat(he.BREAKPOINTS.MEDIUM, "px)"),
                    srcSet: "".concat(o.medium, " 1x, ").concat(o.medium_retina, " 2x")
                }), mn("source", {
                    media: "(min-width: ".concat(he.BREAKPOINTS.SMALL, "px)"),
                    srcSet: "".concat(o.small, " 1x, ").concat(o.small_retina, " 2x")
                }), mn("img", {
                    src: o.xsmall,
                    srcSet: "".concat(o.xsmall, " 1x, ").concat(o.xsmall_retina, " 2x"),
                    alt: r,
                    "aria-label": r,
                    role: "presentation"
                }))
            }(), mn("div", {
                className: "".concat(n, "__scrim")
            }), mn("div", {
                className: "".concat(n, "__gradient"),
                style: function() {
                    var t = {
                        h: ft()(e, "artwork.hue", 0),
                        s: 50,
                        l: 40
                    }
                      , n = [t.h, t.s, t.l]
                      , a = o(n, 0)
                      , r = o(n, .9)
                      , l = o(n, 1)
                      , s = {
                        background: "linear-gradient(180deg, ".concat(a, " 30%, ").concat(r, " 75%, ").concat(l, " 100%)")
                    }
                      , c = {
                        background: "linear-gradient(90deg, ".concat(l, " 0%, ").concat(r, " 35%, ").concat(a, " 100%)")
                    };
                    return i < he.BREAKPOINTS.MEDIUM ? s : c
                }()
            }))
        }
          , hn = de.createElement
          , gn = function(e) {
            var t = e.title
              , n = e.artwork
              , a = e.mobileArtwork;
            return hn("div", {
                className: "MastheadTile"
            }, hn(vn, {
                className: "MastheadTileBackground",
                artwork: n,
                mobileArtwork: a,
                title: t
            }))
        }
          , _n = function(e, t) {
            if (e && t)
                return "cu-".concat(e, "-").concat(t).toLowerCase().replace(/_|\s+/g, "-").replace(/[^a-z0-9\-]/g, "")
        }
          , bn = de.createElement
          , yn = function(e) {
            var t = e.height
              , n = void 0 === t ? "60px" : t
              , a = e.width;
            return bn("svg", {
                width: void 0 === a ? "60px" : a,
                height: n,
                viewBox: "0 0 60 60",
                className: _n("button", "detail")
            }, bn("circle", {
                fillOpacity: "0.2",
                cx: "30",
                cy: "30",
                r: "29",
                stroke: "#FFFFFF",
                strokeWidth: "1.5"
            }), bn("g", {
                transform: "translate(16.071429, 17.142857)",
                fillRule: "nonzero",
                fill: "#FFFFFF"
            }, bn("path", {
                d: "M21.9263541,11.4642855 L0,11.4642855 L0,13.6071427 L21.9420593,13.6071427 L13.0824461,22.1982827 L14.5976749,23.6675955 L26.069575,12.5433287 L14.5976749,1.41906191 L13.0824461,2.8883747 L21.9263541,11.4642855 Z"
            })))
        }
          , wn = (n(80581),
        de.createElement);
        function Nn(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function kn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Nn(Object(n), !0).forEach((function(t) {
                    (0,
                    se.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Nn(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function Sn(e) {
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
                } catch (qv) {
                    return !1
                }
            }();
            return function() {
                var n, a = (0,
                ut.Z)(e);
                if (t) {
                    var r = (0,
                    ut.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                ct.Z)(this, n)
            }
        }
        var xn = function(e) {
            (0,
            st.Z)(n, e);
            var t = Sn(n);
            function n(e) {
                var a;
                return (0,
                ot.Z)(this, n),
                (a = t.call(this, e)).state = {
                    shouldDisplayGradient: !1
                },
                a.removeGenericGradient = a.removeGenericGradient.bind((0,
                bt.Z)(a)),
                a.addGenericGradient = a.addGenericGradient.bind((0,
                bt.Z)(a)),
                a.imageRef = de.createRef(),
                a
            }
            return (0,
            lt.Z)(n, [{
                key: "hsla",
                value: function(e) {
                    var t = (0,
                    cn.Z)(e, 3)
                      , n = t[0]
                      , a = t[1]
                      , r = t[2]
                      , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    return "hsla(".concat(n, ", ").concat(a, "%, ").concat(r, "%, ").concat(i, ")")
                }
            }, {
                key: "getBackgroundBaseStyle",
                value: function(e, t) {
                    var n = .7
                      , a = .63
                      , r = 7e-5;
                    if (t) {
                        var i = this.hsla(e, n)
                          , o = this.hsla(e, a)
                          , l = this.hsla(e, r);
                        return {
                            background: "linear-gradient(0deg, ".concat(i, " 25.69%, ").concat(o, " 36.24%, ").concat(l, " 70.07%)")
                        }
                    }
                    var s = this.hsla(e, 1);
                    return {
                        backgroundColor: "".concat(s)
                    }
                }
            }, {
                key: "removeGenericGradient",
                value: function() {
                    this.setState({
                        shouldDisplayGradient: !1
                    })
                }
            }, {
                key: "addGenericGradient",
                value: function() {
                    this.setState({
                        shouldDisplayGradient: !0
                    })
                }
            }, {
                key: "getBackgroundArtStyle",
                value: function(e, t, n, a) {
                    if (!t)
                        return {};
                    var r, i = this.hsla(e, 0), o = this.hsla(e, 1), l = "linear-gradient(80deg, ".concat(o, " 10%, ").concat(i, " 20%)"), s = "linear-gradient(0deg, ".concat(o, " 10%, ").concat(i, " 40%)"), c = {}, u = [];
                    return n ? (u = [l, s],
                    c = {
                        opacity: .4
                    }) : u = [l],
                    a && (r = {
                        filter: "blur(".concat(a, "px)")
                    }),
                    kn(kn({
                        backgroundImage: u.join(", "),
                        left: "auto"
                    }, c), r)
                }
            }, {
                key: "getBackgroundArt",
                value: function(e, t, n, a, r) {
                    var i = this.props.className
                      , o = (0,
                    dn.f7)(ft()(r, "path"), he.MASTHEAD_BACKGROUND_VERTICAL_SIZES, "webp")
                      , l = (0,
                    dn.f7)(ft()(t, "path"), he.MASTHEAD_HORIZONTAL_SIZES, "webp")
                      , s = kn(kn({}, o), l);
                    return wn("div", {
                        className: "".concat(i, "__art"),
                        style: this.getBackgroundArtStyle(e, t, n, a)
                    }, wn("picture", {
                        className: "".concat(i, "__picture")
                    }, wn("source", {
                        media: "(min-width: ".concat(he.BREAKPOINTS.XXLARGE, "px)"),
                        srcSet: "".concat(s.xxlarge, " 1x, ").concat(s.xxlarge_retina, " 2x")
                    }), wn("source", {
                        media: "(min-width: ".concat(he.BREAKPOINTS.XLARGE, "px)"),
                        srcSet: "".concat(s.xlarge, " 1x, ").concat(s.xlarge_retina, " 2x")
                    }), wn("source", {
                        media: "(min-width: ".concat(he.BREAKPOINTS.LARGE, "px)"),
                        srcSet: "".concat(s.large, " 1x, ").concat(s.large_retina, " 2x")
                    }), wn("source", {
                        media: "(min-width: ".concat(he.BREAKPOINTS.MEDIUM, "px)"),
                        srcSet: "".concat(s.medium, " 1x, ").concat(s.medium_retina, " 2x")
                    }), wn("source", {
                        media: "(min-width: ".concat(he.BREAKPOINTS.SMALL, "px)"),
                        srcSet: "".concat(s.small, " 1x, ").concat(s.small_retina, " 2x")
                    }), wn("img", {
                        className: "".concat(i, "__image"),
                        src: s.xsmall,
                        srcSet: "".concat(s.xsmall, " 1x, ").concat(s.xsmall_retina, " 2x"),
                        role: "presentation",
                        onError: this.addGenericGradient,
                        onLoad: this.removeGenericGradient,
                        ref: this.imageRef
                    })))
                }
            }, {
                key: "getBackgroundColorStyle",
                value: function() {
                    return {}
                }
            }, {
                key: "getBackgroundOverlayStyle",
                value: function() {
                    return {}
                }
            }, {
                key: "getBackgroundGradientStyle",
                value: function(e, t) {
                    var n = this.hsla(e, 0)
                      , a = this.hsla(e, 1)
                      , r = 1
                      , i = 1e-4
                      , o = .5
                      , l = .9;
                    if (t) {
                        var s = this.hsla(e, o)
                          , c = this.hsla(e, r);
                        return n = this.hsla(e, i),
                        a = this.hsla(e, l),
                        {
                            background: "linear-gradient(179.79deg, ".concat(n, " .18%, ").concat(s, " 32.87%, ").concat(a, " 64.43%, ").concat(c, " 99.82%)")
                        }
                    }
                    return {
                        backgroundImage: "linear-gradient(245deg, ".concat(n, " 35%, ").concat(a, " 70%)")
                    }
                }
            }, {
                key: "getBackgroundHighlightStyle",
                value: function(e) {
                    var t = this.hsla(e, 1)
                      , n = this.hsla(e, 0);
                    return {
                        opacity: .7,
                        backgroundImage: "radial-gradient(ellipse at left top, ".concat(t, " 5%, ").concat(n, " 70%)")
                    }
                }
            }, {
                key: "getBackgroundScrimStyle",
                value: function() {
                    return {
                        opacity: .35,
                        backgroundImage: ["linear-gradient(5deg, #000 0%, transparent 50%)", "radial-gradient(ellipse at top right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 20%)"].join(", ")
                    }
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    var e = this.imageRef.current;
                    e && e.complete && e.naturalWidth > 0 || this.addGenericGradient()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.artwork
                      , n = e.editorial
                      , a = e.className
                      , r = e.blurAmount
                      , i = e.isMobileView
                      , o = e.mobileArtwork
                      , l = {
                        h: i ? ft()(o, "hue", 0) : ft()(t, "hue", 0),
                        s: 50,
                        l: 40
                    }
                      , s = [l.h, l.s, l.l];
                    return wn("div", {
                        className: "".concat(a, "__wrapper")
                    }, wn("div", {
                        className: "".concat(a, "__base"),
                        style: this.getBackgroundBaseStyle(s, i)
                    }), this.getBackgroundArt(s, t, n, r, o), wn("div", {
                        className: "".concat(a, "__color"),
                        style: this.getBackgroundColorStyle()
                    }), wn("div", {
                        className: "".concat(a, "__overlay"),
                        style: this.getBackgroundOverlayStyle()
                    }), wn("div", {
                        className: "".concat(a, "__gradient"),
                        style: this.getBackgroundGradientStyle(s)
                    }), wn("div", {
                        className: "".concat(a, "__highlight"),
                        style: this.getBackgroundHighlightStyle(s)
                    }), wn("div", {
                        className: "".concat(a, "__scrim"),
                        style: this.getBackgroundScrimStyle()
                    }))
                }
            }]),
            n
        }(de.Component);
        xn.defaultProps = {
            imageWidth: 1280,
            editorial: !1,
            className: "Background"
        };
        var Tn = xn
          , On = de.createElement;
        function En(e) {
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
                } catch (qv) {
                    return !1
                }
            }();
            return function() {
                var n, a = (0,
                ut.Z)(e);
                if (t) {
                    var r = (0,
                    ut.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                ct.Z)(this, n)
            }
        }
        var Pn = function(e) {
            (0,
            st.Z)(n, e);
            var t = En(n);
            function n() {
                return (0,
                ot.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            lt.Z)(n, [{
                key: "getBackgroundBaseStyle",
                value: function(e) {
                    return {
                        backgroundColor: this.hsla(e)
                    }
                }
            }, {
                key: "getBackgroundArt",
                value: function() {
                    var e = this.props
                      , t = e.className
                      , n = e.artwork
                      , a = e.mobileArtwork
                      , r = e.altText
                      , i = e.horizontal
                      , o = i ? 16 / 9 : 2 / 3
                      , l = i ? 435 : 825
                      , s = Math.round(l * o)
                      , c = (0,
                    dn.Jn)(n.path, {
                        width: s,
                        height: l
                    });
                    if (!a)
                        return On("img", {
                            className: "".concat(t, "__art"),
                            src: c,
                            role: "presentation",
                            alt: r
                        });
                    var u = i ? 250 : 420
                      , d = Math.round(u * o)
                      , m = (0,
                    dn.Jn)(a.path, {
                        width: d,
                        height: u
                    });
                    return On("picture", {
                        className: "".concat(t, "__picture")
                    }, On("source", {
                        media: "(max-width: 1023px)",
                        srcSet: m
                    }), On("source", {
                        media: "(min-width: 1024px)",
                        srcSet: c
                    }), On("img", {
                        className: "".concat(t, "__art"),
                        src: c,
                        role: "presentation",
                        alt: r
                    }))
                }
            }, {
                key: "getBackgroundGradientStyle",
                value: function() {
                    return {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        top: 0,
                        left: 0
                    }
                }
            }, {
                key: "getBackgroundHighlightStyle",
                value: function(e) {
                    var t = this.hsla(e, 1);
                    return {
                        opacity: 1,
                        background: "linear-gradient(0deg, ".concat(t, ", transparent)")
                    }
                }
            }, {
                key: "getBackgroundScrimStyle",
                value: function() {
                    return {
                        height: "80px",
                        width: "100%",
                        transform: "rotate(-180deg)"
                    }
                }
            }, {
                key: "getBackgroundOverlayStyle",
                value: function() {
                    return {
                        opacity: .2,
                        width: "100%",
                        height: "100%"
                    }
                }
            }]),
            n
        }(Tn);
        Pn.propTypes = {
            artwork: pe().shape({}).isRequired,
            mobileArtwork: pe().shape({}),
            altText: pe().string,
            horizontal: pe().bool
        };
        var Cn = Pn;
        function Dn(e, t) {
            var n;
            if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (n = function(e, t) {
                    if (!e)
                        return;
                    if ("string" === typeof e)
                        return Zn(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return Zn(e, t)
                }(e)) || t && e && "number" === typeof e.length) {
                    n && (e = n);
                    var a = 0
                      , r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return a >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[a++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var i, o = !0, l = !1;
            return {
                s: function() {
                    n = e[Symbol.iterator]()
                },
                n: function() {
                    var e = n.next();
                    return o = e.done,
                    e
                },
                e: function(e) {
                    l = !0,
                    i = e
                },
                f: function() {
                    try {
                        o || null == n.return || n.return()
                    } finally {
                        if (l)
                            throw i
                    }
                }
            }
        }
        function Zn(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, a = new Array(t); n < t; n++)
                a[n] = e[n];
            return a
        }
        function In(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function Mn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? In(Object(n), !0).forEach((function(t) {
                    (0,
                    se.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : In(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var An = {
            retries: 3,
            timeout: 1e3
        }
          , Ln = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : An
              , n = (0,
            de.useState)(he.IMAGE_STATUSES.LOADING)
              , a = n[0]
              , r = n[1]
              , i = (0,
            de.useRef)(0)
              , o = a === he.IMAGE_STATUSES.RETRYING
              , l = a === he.IMAGE_STATUSES.LOADED
              , s = a === he.IMAGE_STATUSES.LOADING || a === he.IMAGE_STATUSES.RETRYING
              , c = a === he.IMAGE_STATUSES.ERROR
              , u = Mn(Mn({}, An), t);
            return (0,
            de.useEffect)((function() {
                var t = function() {
                    if (i.current >= u.retries)
                        r(he.IMAGE_STATUSES.ERROR);
                    else {
                        r(he.IMAGE_STATUSES.RETRYING),
                        i.current++;
                        var e = setTimeout((function() {
                            var t = a.src;
                            a.src = t,
                            c.splice(c.indexOf(e), 1)
                        }
                        ), u.timeout);
                        c.push(e)
                    }
                }
                  , n = function() {
                    l || r(he.IMAGE_STATUSES.LOADED)
                };
                if (null !== e && void 0 !== e && e.current && !l) {
                    var a = e.current
                      , c = [];
                    if (a.addEventListener("error", t),
                    a.addEventListener("load", n, {
                        once: !0
                    }),
                    a && a.complete && 0 === c.length && (s || o)) {
                        if (0 === a.naturalWidth)
                            return void t();
                        n()
                    }
                    return function() {
                        a.removeEventListener("error", t),
                        a.removeEventListener("load", n);
                        var e, r = Dn(c.splice(0));
                        try {
                            for (r.s(); !(e = r.n()).done; ) {
                                var i = e.value;
                                clearTimeout(i)
                            }
                        } catch (o) {
                            r.e(o)
                        } finally {
                            r.f()
                        }
                    }
                }
            }
            ), [e, i]),
            {
                isLoaded: l,
                isLoading: s,
                isRetrying: o,
                hasError: c
            }
        }
          , Rn = n(38347)
          , jn = de.createElement
          , Hn = function(e) {
            var t = e.children
              , n = e.className
              , a = e.lineHeightEm
              , r = void 0 === a ? 1.18 : a
              , i = e.maxLines
              , o = void 0 === i ? 2 : i
              , l = e.dataAutomationId
              , s = (0,
            Rn.Z)(e, ["children", "className", "lineHeightEm", "maxLines", "dataAutomationId"])
              , c = {
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: "".concat(o),
                display: "-webkit-box",
                overflow: "hidden",
                lineHeight: "".concat(r, "em"),
                maxHeight: "".concat(o * r, "em"),
                whiteSpace: "normal"
            };
            return jn(xe.Z, (0,
            we.Z)({}, s, {
                className: n,
                style: c,
                "data-automationid": l
            }), t)
        }
          , Un = de.createElement
          , Bn = function(e) {
            var t = e.imageUrls
              , n = e.title
              , a = de.createRef()
              , r = Ln(a)
              , i = r.isLoaded
              , o = r.hasError
              , l = ue()("PortraitTile__title-art", {
                "PortraitTile__title-art--loaded": i
            })
              , s = ue()("PortraitTile__title-art__text", {
                "PortraitTile__title-art__text--fade-in": o
            });
            return t ? Un("div", {
                className: l
            }, Un("img", {
                className: "PortraitTile__title-art__image",
                ref: a,
                src: t.small,
                srcSet: "".concat(t.small, " 1x, ").concat(t.small_retina, " 2x"),
                alt: n,
                role: "presentation",
                "aria-label": n
            }), Un(Hn, {
                className: s
            }, n)) : Un(Hn, {
                maxLines: 1,
                variant: "title24",
                breakpoints: {
                    xs: "title24",
                    md: "title32"
                }
            }, n)
        }
          , Fn = n(40334)
          , qn = (n(21937),
        de.createElement)
          , Gn = "webp"
          , Wn = function(e) {
            var t = e.altText
              , n = e.artwork
              , a = e.brandName
              , r = e.brandWatermark
              , i = e.collectionId
              , o = e.collectionIndex
              , l = e.customBackground
              , s = e.description
              , c = e.detailsAltText
              , u = e.detailsUrl
              , d = e.disableTileLink
              , m = e.entityId
              , p = e.horizontal
              , f = e.index
              , v = e.joinedTags
              , h = e.large
              , g = e.programArtwork
              , _ = e.small
              , b = e.title
              , y = e.titleArtwork
              , w = e.type
              , N = !d && u
              , k = ue()("PortraitTile", {
                "PortraitTile--horizontal": p,
                "PortraitTile--small": _,
                "PortraitTile--large": h,
                PortraitTile__clickable: N
            })
              , S = function(e) {
                var t = e.isLink
                  , n = void 0 !== t && t
                  , a = e.titleText
                  , r = void 0 === a ? "" : a
                  , l = e.redirectUrl
                  , s = void 0 === l ? "" : l
                  , c = e.isTitleClicked
                  , u = void 0 !== c && c;
                d || ((0,
                Le.mS)(n, r),
                function(e) {
                    (0,
                    Fn.L9)("user_interaction", {
                        element_specifier: e ? "portrait_tile_title" : "portrait_tile_thumbnail",
                        action_specifier: d ? "static" : "link",
                        conditional_properties: ["collection", "entity"],
                        collection_id: i,
                        collection_source: "heimdall",
                        collection_item_index: f,
                        collection_index: o,
                        entity_id: m,
                        entity_action_id: m,
                        entity_type: w,
                        entity_action_type: "browse",
                        hit_version: "2.4.0"
                    })
                }(u),
                window.location.assign(s))
            };
            return qn("div", {
                className: k
            }, qn("div", {
                className: "PortraitTile__thumbnail",
                onClick: function() {
                    return S({
                        title: b,
                        redirectUrl: u
                    })
                }
            }, qn("div", {
                className: "PortraitTile__spacer"
            }), qn((function() {
                return n && l ? l : n ? qn(Cn, {
                    className: "PortraitTile",
                    artwork: n,
                    mobileArtwork: g,
                    altText: t,
                    horizontal: p
                }) : qn("div", {
                    className: "PortraitTile__wrapper"
                }, qn("div", {
                    className: "PortraitTile__base",
                    style: {
                        backgroundImage: "linear-gradient(225deg, #306e6b 0%, #334272 45%, #231338 100%)"
                    }
                }, qn("span", {
                    role: "img",
                    "aria-label": t
                })))
            }
            ), null), r && qn((function() {
                var e, t = h ? (e = r,
                (0,
                dn.Jn)(e, {
                    width: 500,
                    height: 500,
                    format: Gn
                })) : function(e) {
                    return (0,
                    dn.Jn)(e, {
                        width: 100,
                        height: 100,
                        format: Gn
                    })
                }(r);
                return qn("img", {
                    className: "PortraitTile__brand",
                    src: t,
                    role: "presentation",
                    alt: a
                })
            }
            ), null), qn("div", {
                className: "PortraitTile__metadataLayer"
            }, qn("div", {
                className: "PortraitTile__metadata"
            }, qn((function() {
                var e = ue()("PortraitTile__title PortraitTile__title--clickable", {
                    "PortraitTile__btns--hover": N
                })
                  , t = function() {
                    if (y)
                        return (0,
                        dn.f7)(y, he.TITLE_ART_SIZES, "webp", !0)
                }();
                return u ? qn("div", {
                    className: e,
                    "aria-label": "link to ".concat(b),
                    onClick: function() {
                        return S({
                            isLink: !0,
                            title: b,
                            redirectUrl: u,
                            isTitleClicked: !0
                        })
                    }
                }, qn(Bn, {
                    title: b,
                    imageUrls: t
                })) : qn("h3", {
                    className: "PortraitTile__title"
                }, qn(Bn, {
                    title: b,
                    imageUrls: t
                }))
            }
            ), null), qn("div", {
                className: "PortraitTile__hoverData"
            }, s && (null === s || void 0 === s ? void 0 : s.length) && qn((function() {
                var e = 3;
                return p && (e = h ? 3 : 1),
                qn(Hn, {
                    maxLines: e,
                    lineHeightEm: 1.15,
                    className: "PortraitTile__description"
                }, s)
            }
            ), null)), v && (null === v || void 0 === v ? void 0 : v.length) && qn((function() {
                return qn(Hn, {
                    lineHeightEm: 1.5,
                    maxLines: 1,
                    className: "PortraitTile__joined-tags"
                }, v)
            }
            ), null)), qn("div", {
                className: "PortraitTile__actionBar"
            }, N && qn((function() {
                var e = ue()("PortraitTile__btns", "PortraitTile__btns--hover");
                return qn("div", {
                    className: e
                }, qn("a", {
                    href: u,
                    onClick: function() {
                        return S({
                            title: b,
                            redirectUrl: u
                        })
                    },
                    "aria-label": "link to ".concat(b)
                }, qn("div", {
                    className: "PortraitTile__sideDetailsBtn"
                }, qn(yn, {
                    height: "40px",
                    width: "40px",
                    title: c
                }))))
            }
            ), null)))))
        }
          , zn = de.createElement
          , Vn = function(e) {
            var t = e.disableTileLink
              , n = e.collectionId
              , a = e.index
              , r = e.collectionIndex
              , i = e.entityId
              , o = e.type
              , l = e.contextMenuButton
              , s = e.action
              , c = e.actionHover
              , u = e.title
              , d = e.detailsUrl
              , m = e.enableSignupModal
              , p = e.showSignupModal
              , f = e.description
              , v = e.metadata
              , h = ue()("Tile__content", {
                "Tile__content--with-menu": Boolean(l)
            })
              , g = (0,
            je.AG)("a", {
                element_specifier: "tile_title",
                action_specifier: t ? "static" : "link",
                conditional_properties: ["collection", "entity"],
                collection_id: n,
                collection_source: "heimdall",
                collection_item_index: a,
                collection_index: r,
                entity_id: i,
                entity_action_id: i,
                entity_type: o,
                entity_action_type: "browse"
            });
            return zn("div", {
                className: h
            }, zn((function() {
                return s ? c ? zn("div", {
                    className: "Tile__action-container"
                }, zn(xe.Z, {
                    as: "div",
                    variant: "eyebrow12",
                    className: "Tile__action Tile__action--base"
                }, s), zn(xe.Z, {
                    as: "div",
                    variant: "eyebrow12",
                    className: "Tile__action Tile__action--hover"
                }, c)) : zn(xe.Z, {
                    as: "div",
                    className: "Tile__action",
                    variant: "eyebrow12"
                }, s) : null
            }
            ), null), zn((function() {
                var e = d
                  , n = zn(Hn, {
                    maxLines: 2,
                    breakpoints: {
                        xs: "title14",
                        md: "title16"
                    }
                }, u)
                  , a = m;
                return null === a && (a = !0),
                !e || t && !a ? zn(Hn, {
                    maxLines: 2,
                    as: "h3",
                    "data-automationid": "tile_title",
                    className: "Tile__title",
                    breakpoints: {
                        xs: "title14",
                        md: "title16"
                    }
                }, u) : zn(g, t ? {
                    className: "Tile__title-link Tile__title--clickable",
                    "data-automationid": "tile_title",
                    onClick: function() {
                        return (0,
                        Le.mS)(!0, u, null, p)
                    }
                } : {
                    className: "Tile__title-link Tile__title--clickable",
                    href: d,
                    onClick: function() {
                        return (0,
                        Le.mS)(!0, u)
                    }
                }, n)
            }
            ), null), zn((function() {
                return f ? zn(Hn, {
                    lineHeightEm: 1.429,
                    maxLines: 1,
                    className: "Tile__description",
                    dataAutomationId: "tile_description",
                    breakpoints: {
                        xs: "body12",
                        ml: "body14"
                    }
                }, f) : null
            }
            ), null), zn((function() {
                return v ? zn("ul", {
                    className: "Tile__metadata"
                }, v.map((function(e, t) {
                    return zn("li", {
                        key: "".concat(t, "-").concat(e),
                        className: "Tile__meta"
                    }, zn(xe.Z, {
                        variant: "body14"
                    }, e))
                }
                ))) : null
            }
            ), null), l)
        };
        Vn.defaultProps = {
            contextMenuButton: null,
            enableSignupModal: !0
        };
        var Yn = Vn
          , Kn = de.createElement
          , Xn = function(e) {
            var t = e.asset
              , n = e.description
              , a = e.descriptionLines
              , r = e.episode
              , i = e.partOfSeries
              , o = e.seasonNumber
              , l = e.title;
            return Kn(de.Fragment, null, Kn("div", {
                className: "Tile__content"
            }, Kn((function() {
                var e = (null === t || void 0 === t ? void 0 : t.number) && "Episode ".concat(t.number);
                return e ? Kn(xe.Z, {
                    as: "div",
                    variant: "eyebrow12",
                    className: "Tile__action"
                }, e) : null
            }
            ), null), Kn(Hn, {
                breakpoints: {
                    xs: "title14",
                    md: "title16"
                },
                as: "h3",
                maxLines: 1,
                className: "Tile__title",
                "data-automationid": "tile_title",
                itemProp: "name"
            }, l), Kn(de.Fragment, null, Kn("meta", {
                itemProp: "episodeNumber",
                content: r
            }), Kn("meta", {
                itemProp: "partOfSeason",
                content: o
            }), i && Kn("meta", {
                itemProp: "partOfSeries",
                content: i
            }))), n ? Kn(Hn, {
                as: "p",
                variant: "body14",
                lineHeightEm: 1.429,
                maxLines: a || 1,
                className: "Tile__description",
                itemProp: "description",
                dataAutomationId: "tile_description"
            }, n) : null)
        }
          , Jn = n(59999)
          , Qn = n(42363)
          , $n = de.createElement
          , ea = function() {
            return $n("svg", {
                width: "10",
                height: "10",
                viewBox: "0 0 10 10",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, $n("path", {
                d: "M9.5 4.99988C9.5 7.48516 7.48528 9.49988 5 9.49988C2.51472 9.49988 0.5 7.48516 0.5 4.99988C0.5 2.5146 2.51472 0.499878 5 0.499878C7.48528 0.499878 9.5 2.5146 9.5 4.99988Z",
                stroke: "white"
            }), $n("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M4.28564 2.85706H5.28564V5.7142H4.28564V2.85706Z",
                fill: "white"
            }), $n("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M7.18823 4.75964V5.75964H4.33109V4.75964H7.18823Z",
                fill: "white"
            }))
        }
          , ta = de.createElement
          , na = Math.round(337.5)
          , aa = function(e, t) {
            var n = {
                width: 1200,
                height: 676
            }
              , a = {
                width: 600,
                height: na
            };
            return t ? (0,
            dn.Jn)(e, n) : (0,
            dn.Jn)(e, a)
        }
          , ra = function(e) {
            return "Tile__badge ".concat(e.map((function(e) {
                return "Tile__badge--".concat(e)
            }
            )).join(" "))
        }
          , ia = function(e) {
            var t, n = e.assetUrl, a = e.brandWatermark, r = e.collectionId, i = e.collectionIndex, o = e.disableTileLink, l = e.enableSignupModal, s = e.entityId, c = e.hideControlIcon, u = e.index, d = e.isRetina, m = e.isUpcoming, p = e.onClick, f = e.showSignupModal, v = e.thumbnail, h = e.thumbnailHover, g = e.title, _ = e.type, b = e.videoData, y = !o, w = f ? "/watch/".concat(s) : void 0, N = (0,
            je.AG)("a", {
                element_specifier: "tile_thumbnail",
                action_specifier: o ? "static" : "link",
                conditional_properties: ["collection", "entity"],
                collection_id: r,
                collection_source: "heimdall",
                collection_item_index: u,
                collection_index: i,
                entity_id: s,
                entity_action_id: s,
                entity_type: _,
                entity_action_type: "browse"
            }), k = ta("div", null, ta("div", {
                className: "Tile__spacer"
            }), v ? ta("img", {
                className: "Tile__image lazyload",
                "data-src": aa(v, d),
                role: "presentation",
                itemProp: "image"
            }) : ta("div", {
                className: "Tile__placeholder-image"
            }), v ? ta("div", {
                className: "Tile__scrim Tile__scrim--thumbnail"
            }) : ta("div", {
                className: "Tile__scrim"
            }, ta("div", {
                className: "Tile__scrim-text"
            }, ta(Hn, {
                variant: "title18"
            }, g))), ta("div", {
                className: "Tile__rollover"
            }, h ? ta("img", {
                className: "Tile__rollover-image",
                src: aa(h, d),
                role: "presentation"
            }) : null, ta("div", {
                className: "Tile__controls"
            }, !c && ta("span", {
                className: ue()("Tile__icon", {
                    "Tile__icon--retina": d
                })
            }, ta(yn, null)))), ta((function() {
                var t = e.statusBadge;
                if (!t)
                    return null;
                var n = t.text
                  , a = ra(["status"].concat((0,
                Jn.Z)((null === t || void 0 === t ? void 0 : t.classNames) || [])));
                return ta(Qn.Z, {
                    size: "small",
                    variant: "badge2",
                    className: a
                }, n)
            }
            ), null), ta((function() {
                var t = e.timeBadge;
                if (!t)
                    return null;
                var n = t.text
                  , a = ra(["time"].concat((0,
                Jn.Z)((null === t || void 0 === t ? void 0 : t.classNames) || [])));
                return ta(Qn.Z, {
                    size: "small",
                    variant: "badge1",
                    className: a
                }, n)
            }
            ), null), ta((function() {
                return m ? ta(Qn.Z, {
                    className: "Tile__upcoming",
                    size: "small",
                    variant: "badge1",
                    startIcon: ta(ea, null)
                }, "Upcoming") : null
            }
            ), null), a ? ta("img", {
                className: "Tile__brand",
                src: (t = a,
                (0,
                dn.Jn)(t, {
                    width: 100,
                    height: 100,
                    format: "webp"
                })),
                role: "presentation"
            }) : null);
            if (y)
                return ta(N, {
                    className: "Tile__thumbnail Tile__thumbnail--with-hover",
                    href: n,
                    onClick: function() {
                        return (0,
                        Le.mS)(!1, g, p)
                    },
                    onKeyDown: (0,
                    fe.P)(p),
                    onMouseDown: fe.W,
                    videoData: b,
                    role: "button",
                    "aria-label": "Play ".concat(g),
                    tabIndex: "0"
                }, k);
            var S = l;
            return null === S && (S = !0),
            ta(N, S ? {
                className: "Tile__thumbnail Tile__thumbnail--with-hover",
                onClick: function(e) {
                    return (0,
                    Le.mS)(!1, g, null, f, e)
                },
                onKeyDown: (0,
                fe.P)((function() {
                    return f && f()
                }
                )),
                onMouseDown: fe.W,
                role: "button",
                "aria-label": "Play ".concat(g),
                tabIndex: "0",
                href: w
            } : {
                className: "Tile__thumbnail Tile__thumbnail--no-hover",
                role: "button"
            }, k)
        };
        ia.defaultProps = {
            hideControlIcon: !1,
            isRetina: !1,
            disableTileLink: !1,
            enableSignupModal: !0
        };
        var oa = ia
          , la = (n(4756),
        de.createElement);
        function sa(e) {
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
                } catch (qv) {
                    return !1
                }
            }();
            return function() {
                var n, a = (0,
                ut.Z)(e);
                if (t) {
                    var r = (0,
                    ut.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                ct.Z)(this, n)
            }
        }
        var ca = function(e) {
            (0,
            st.Z)(n, e);
            var t = sa(n);
            function n() {
                var e, a;
                (0,
                ot.Z)(this, n);
                for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
                    i[o] = arguments[o];
                return (0,
                ct.Z)(a, (e = a = t.call.apply(t, [this].concat(i)),
                a.state = {},
                e))
            }
            return (0,
            lt.Z)(n, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.darkTheme
                      , n = e.contentType
                      , a = e.index
                      , r = e.premiereDate
                      , i = e.includeSEOAttr
                      , o = e.asset
                      , l = e.title
                      , s = e.detailsUrl
                      , c = ue()("Tile", {
                        "Tile--dark": t
                    }, "cu-tile")
                      , u = "episode" === n ? Xn : Yn
                      , d = n === he.EPISODE ? he.EPISODE_SCHEMA_ATTRIBUTES : {}
                      , m = (null === o || void 0 === o ? void 0 : o.type) === he.MOVIE && i
                      , p = m ? he.MOVIE_SCHEMA_ATTRIBUTES : {};
                    return la("div", (0,
                    we.Z)({
                        className: c
                    }, d, p, {
                        "data-automationid": "tile_".concat(a)
                    }), m && la("div", {
                        className: "Tile__microdata"
                    }, la("meta", {
                        itemProp: "position",
                        content: a
                    }), la("meta", {
                        itemProp: "dateCreated",
                        content: r
                    }), la("meta", {
                        itemProp: "name",
                        content: l
                    }), la("meta", {
                        itemProp: "url",
                        content: s
                    })), la(oa, (0,
                    we.Z)({}, this.props, {
                        addMovieProps: m
                    })), la(u, (0,
                    we.Z)({}, this.props, {
                        addMovieProps: m
                    })))
                }
            }]),
            n
        }(de.Component);
        ca.defaultProps = {
            contentType: "classic"
        };
        var ua = ca
          , da = n(8682)
          , ma = (0,
        ye.connect)(null, (function(e) {
            return {
                showSignupModal: function() {
                    return e((0,
                    da.$)(he.MODAL_NAME_SIGNUP))
                }
            }
        }
        ))
          , pa = ma(sn(Wn, (function(e) {
            return {
                joinedTags: ln(e)
            }
        }
        )))
          , fa = ma(sn(ua, (function(e) {
            return e.type.toLowerCase() === Bt || e.type.toLowerCase() === Ut ? {
                description: null
            } : {
                description: ln(e)
            }
        }
        )))
          , va = ma(sn(ua, (function(e) {
            return {
                action: e.episode ? "Episode ".concat(e.episode) : null,
                contentType: "episode",
                descriptionLines: 5,
                disableTileLink: !0
            }
        }
        )))
          , ha = ma(sn(gn, (function(e, t) {
            var n = ft()(t, "artwork.horizontalProgramTile", null)
              , a = ft()(t, "artwork.horizontalHero", null)
              , r = ft()(t, "artwork.verticalProgramTile", null);
            return {
                artwork: a || n || {},
                mobileArtwork: ft()(t, "artwork.verticalHero", null) || r || {}
            }
        }
        )))
          , ga = (n(527),
        de.createElement);
        function _a(e) {
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
                } catch (qv) {
                    return !1
                }
            }();
            return function() {
                var n, a = (0,
                ut.Z)(e);
                if (t) {
                    var r = (0,
                    ut.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                ct.Z)(this, n)
            }
        }
        var ba = function(e) {
            (0,
            st.Z)(n, e);
            var t = _a(n);
            function n() {
                var e, a;
                (0,
                ot.Z)(this, n);
                for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
                    i[o] = arguments[o];
                return (0,
                ct.Z)(a, (e = a = t.call.apply(t, [this].concat(i)),
                a.mapItemToTile = function(e, t) {
                    var n = a.props
                      , r = n.small
                      , i = n.horizontal
                      , o = n.enabledTileLinks;
                    return ga(pa, {
                        disableTileLink: !o,
                        asset: e,
                        enableSponsorBranding: !1,
                        key: t,
                        small: r,
                        horizontal: i
                    })
                }
                ,
                e))
            }
            return (0,
            lt.Z)(n, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.collection
                      , n = e.collectionIndex
                      , a = e.collectionType
                      , r = e.small
                      , i = e.horizontal
                      , o = t.items
                      , l = ue()({
                        "Slider--portrait": !r && !i,
                        "Slider--small-portrait": r,
                        "Slider--adaptive": i
                    });
                    return ga("div", {
                        className: "PortraitSlider cu-portrait-slider"
                    }, ga(At, {
                        className: l,
                        items: o.map(this.mapItemToTile),
                        collection: t,
                        collectionIndex: n,
                        collectionType: a,
                        small: r,
                        horizontal: i,
                        mobileModeTrigger: 2,
                        mobileMode: "swipe",
                        previousAltText: "Previous",
                        nextAltText: "Next"
                    }))
                }
            }]),
            n
        }(de.Component);
        ba.defaultProps = {
            collection: {},
            small: !1,
            horizontal: !1
        };
        var ya = ba
          , wa = (n(4161),
        de.createElement)
          , Na = function(e) {
            var t = e.model
              , n = t.collection
              , a = t.title
              , r = t.description;
            if (!n.items.length)
                return null;
            var i = wa(ya, {
                collection: n,
                horizontal: !0
            });
            return wa("div", {
                className: "AdaptiveCollection cu-adaptive-collection"
            }, wa(it, {
                name: a,
                description: r,
                slider: i
            }))
        }
          , ka = de.createElement;
        function Sa(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function xa(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Sa(Object(n), !0).forEach((function(t) {
                    (0,
                    se.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Sa(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var Ta = function(e) {
            var t = e.model
              , n = t.collections
              , a = t.metrics;
            return n.map((function(e) {
                var t = e.model
                  , n = Bv(t.type);
                return ka(n, {
                    key: t.collection.id,
                    model: xa(xa({}, t), {}, {
                        collectionIndex: a.collectionIndex
                    })
                })
            }
            ))
        }
          , Oa = (n(16151),
        de.createElement)
          , Ea = function(e) {
            var t = e.color;
            return Oa("svg", {
                width: "27",
                height: "10",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, Oa("path", {
                d: "M0 2.614V5.23h.406c.423 0 .552-.005.695-.023a2.612 2.612 0 002.017-1.442c.137-.278.213-.536.253-.863.012-.094.017-.377.009-.476A2.625 2.625 0 001.214.037C1.01.003.95 0 .445 0H0v2.614zM9.026 2.618v2.616h.984c.628 0 1.015-.002 1.071-.006a2.595 2.595 0 001.65-.731c.226-.22.39-.444.527-.716.313-.623.36-1.363.129-2.025a2.645 2.645 0 00-.902-1.233 2.607 2.607 0 00-1.126-.486c-.204-.035-.132-.033-1.283-.035L9.026 0v2.618zM11.139.806c.211.032.381.082.553.163.452.213.809.621.96 1.098.037.115.066.254.078.38a1.82 1.82 0 01-.508 1.437c-.258.267-.594.45-.962.522-.162.032-.155.032-.824.034l-.618.002V.793l.63.002c.558.001.635.003.691.011zM18.073 2.62v2.62h.798V.001h-.798v2.62zM19.537 2.62v2.62h.793v-.162l.002-.161.064.04a1.816 1.816 0 002.753-1.189c.024-.122.029-.173.028-.341 0-.177-.004-.229-.033-.369a1.82 1.82 0 00-1.622-1.44 2.533 2.533 0 00-.394.01c-.27.037-.518.13-.744.275l-.054.035V0h-.793v2.62zm1.908-.291a1.098 1.098 0 01.961 1.43c-.14.421-.51.712-.959.75a1.098 1.098 0 01-1.164-.96 1.1 1.1 0 01.43-1.004c.187-.138.394-.21.643-.221l.089.005zM6.486.012A2.618 2.618 0 004.13 3.25c.189.763.725 1.41 1.441 1.743.294.136.597.213.927.235.049.004.27.006.514.006h.429V.006h-.445c-.244.001-.474.004-.51.006zM15.597 1.616a1.821 1.821 0 00-1.523 1.112 1.774 1.774 0 00-.138.748c.008.273.065.504.183.745.098.198.204.346.364.502.134.13.278.234.44.317.204.104.395.161.633.19.073.009.309.009.385 0 .356-.043.666-.17.943-.391.07-.056.224-.21.281-.282a1.84 1.84 0 00.383-.905 2.63 2.63 0 00.004-.427 1.816 1.816 0 00-1.564-1.599 3.696 3.696 0 00-.391-.01zm.234.713c.386.033.72.26.894.605.21.419.128.923-.204 1.254a1.09 1.09 0 01-1.866-.77 1.093 1.093 0 011.176-1.09zM23.715 2.875c.309.694.64 1.436.734 1.65l.172.386-.022.048-.182.408a21.21 21.21 0 01-.176.393.5.5 0 01-.127.136.391.391 0 01-.238.073.392.392 0 01-.195-.044l-.075-.033-.017-.007-.157.353-.16.36c-.002.009.28.136.362.164a.945.945 0 00.366.05 1.023 1.023 0 00.871-.548c.019-.034 2.03-4.522 2.077-4.633l.008-.018h-.868l-.513 1.155c-.283.635-.515 1.156-.518 1.159-.003.003-.362-.8-.965-2.157l-.069-.154-.434-.001-.435-.002.561 1.262zM7.674 7.624l-.516 1.19-.513 1.183.184.002.186-.001c.002-.001.055-.132.12-.29l.118-.289.566-.001.567-.001.12.291.12.292h.19c.12 0 .188-.002.187-.005 0-.003-.23-.54-.511-1.192l-.51-1.186H7.83a.576.576 0 00-.156.007zm.366.934l.219.552c.003.009-.02.01-.441.01-.268 0-.443-.003-.442-.005.028-.08.443-1.106.445-1.103.002.002.1.248.219.546zM9.416 7.763v.146h.382l.38.002.002 1.044.002 1.045h.33V7.909h.765v-.292h-1.86v.146zM12.19 8.809V10h.325v-.997c0-.598.002-.995.005-.992.002.003.181.451.397.997l.392.992h.215l.394-.992c.216-.546.395-.994.397-.997.003-.003.005.443.005.992V10h.336V7.617h-.262c-.144 0-.261.001-.261.002 0 .006-.7 1.822-.704 1.826-.002.002-.153-.38-.337-.85l-.356-.916-.024-.062h-.522v1.192zM16.678 7.62l-.069.008a1.183 1.183 0 00-.733.372 1.175 1.175 0 00-.272.588 2.18 2.18 0 00-.008.362c.028.277.143.526.327.711.191.192.45.308.741.334.09.008.237.004.325-.009.278-.04.536-.175.71-.373.113-.128.208-.308.25-.472.036-.134.05-.318.036-.465a1.187 1.187 0 00-.266-.656 1.179 1.179 0 00-.73-.39 2.408 2.408 0 00-.311-.01zm.28.29c.104.02.216.066.31.129.065.043.171.149.216.216.17.256.21.582.11.882a.837.837 0 01-.206.337.804.804 0 01-.435.227 1.318 1.318 0 01-.336 0 .783.783 0 01-.424-.226.781.781 0 01-.162-.226 1.01 1.01 0 01.128-1.077.823.823 0 01.506-.269c.055-.007.236-.003.294.008zM19.49 7.623c-.211.024-.368.09-.488.208a.581.581 0 00-.178.474.532.532 0 00.078.274.56.56 0 00.202.196c.068.043.156.078.359.145.097.032.198.068.225.08.183.08.27.198.26.362-.01.173-.13.305-.322.35a.617.617 0 01-.605-.21l-.033-.04-.12.101a2.126 2.126 0 00-.123.108.883.883 0 00.18.166c.246.163.586.208.88.115.23-.072.4-.249.45-.467a.855.855 0 00.005-.317.55.55 0 00-.24-.345 1.356 1.356 0 00-.375-.163 2.376 2.376 0 01-.313-.116.428.428 0 01-.145-.126.35.35 0 01-.024-.286.388.388 0 01.196-.201.608.608 0 01.282-.044c.14.014.25.066.345.162l.044.046.11-.11.112-.108-.042-.04a.858.858 0 00-.428-.203 1.373 1.373 0 00-.292-.011z",
                fill: t || "#040405"
            }))
        }
          , Pa = de.createElement
          , Ca = function(e) {
            var t = e.items
              , n = e.isInline;
            return (null === t || void 0 === t ? void 0 : t.length) > 0 ? Pa("ul", {
                className: ue()("DetailEntityMetadata__av-features", {
                    "DetailEntityMetadata__av-features-inline": n
                })
            }, t.map((function(e, t) {
                var n = "atmos" === e ? Pa(Ea, null) : e;
                return Pa("li", {
                    key: "feature-".concat(t),
                    className: "av-feature"
                }, Pa(Qn.Z, {
                    variant: "badge2",
                    size: "small"
                }, n))
            }
            ))) : null
        }
          , Da = (n(19872),
        de.createElement)
          , Za = {
            xs: "body12",
            lg: "body16"
        }
          , Ia = function(e) {
            var t = e.avFeatures
              , n = e.credits
              , a = e.className
              , r = e.genres
              , i = e.rating
              , o = e.tags
              , l = e.entityType
              , s = e.showAvInline
              , c = e.truncateCredits;
            return Da("div", {
                className: ue()("DetailEntityMetadata", a)
            }, Da(Aa, {
                credits: n,
                shouldTruncate: c
            }), Da("div", {
                className: ue()("DetailEntityMetadata__tag-wrapper", {
                    "DetailEntityMetadata__has-inline-av-features": s
                })
            }, Da("div", {
                className: "DetailEntityMetadata__tag-group"
            }, i && Da(xe.Z, {
                breakpoints: Za,
                className: "DetailEntityMetadata__rating"
            }, i), Da(Ba, {
                genres: r
            }), Da(Ha, {
                entityType: l,
                tags: o
            }), o && Da(xe.Z, {
                breakpoints: Za,
                className: "DetailEntityMetadata__tags"
            }, o.join(he.SEPARATOR))), Da(Ca, {
                items: null === t || void 0 === t ? void 0 : t.items,
                isInline: s
            })))
        }
          , Ma = de.createElement
          , Aa = function(e) {
            var t = e.credits
              , n = e.shouldTruncate;
            return (null === t || void 0 === t ? void 0 : t.length) > 0 ? Ma("div", {
                className: "DetailEntityMetadata__credits"
            }, t.map((function(e, t) {
                var a = e.prefix
                  , r = e.items
                  , i = e.truncatedItems
                  , o = n ? i : r;
                return Ma(xe.Z, {
                    as: "p",
                    key: "credit-".concat(t),
                    breakpoints: Za
                }, Ma("span", {
                    className: "prefix"
                }, a, " "), o.map((function(e) {
                    return Ma("span", {
                        className: "DetailEntityMetadata__credit"
                    }, e)
                }
                )))
            }
            ))) : null
        }
          , La = n(70640)
          , Ra = (0,
        je.GO)({
            event_name: "type_hub",
            component_id: "detail_entity"
        }, (0,
        je.pS)("a", "detail_entity", "link"))
          , ja = de.createElement
          , Ha = function(e) {
            var t = e.entityType
              , n = e.tags;
            if (!t || !n)
                return null;
            var a = (0,
            La.oL)(t)
              , r = t === he.SERIES ? he.TV : he.MOVIES
              , i = {
                "aria-label": "View ".concat(a, " hub")
            }
              , o = ue()("DetailEntityMetadata__hub", {
                "DetailEntityMetadata__hub-with-tags": n
            })
              , l = ja(Ra, (0,
            we.Z)({
                className: "DetailEntityMetadata__type",
                name: "view-type-hub",
                href: "/hub/".concat(r),
                dangerouslySetInnerHTML: {
                    __html: a
                }
            }, i));
            return ja(xe.Z, {
                className: o,
                breakpoints: Za
            }, l)
        }
          , Ua = de.createElement
          , Ba = function(e) {
            var t = e.genres;
            if (!t || (null === t || void 0 === t ? void 0 : t.length) <= 0)
                return null;
            var n = t.map((function(e) {
                var t = e.name
                  , n = e.hubPath;
                if (!n)
                    return Ua(xe.Z, {
                        breakpoints: Za,
                        className: "DetailEntityMetadata__genre"
                    }, t);
                var a = {
                    "aria-label": "View ".concat(t, " hub")
                }
                  , r = Ua(Ra, (0,
                we.Z)({
                    className: "DetailEntityMetadata__genre DetailEntityMetadata__genre--link",
                    name: "view-genre-hub",
                    href: n,
                    dangerouslySetInnerHTML: {
                        __html: t
                    }
                }, a));
                return Ua(xe.Z, {
                    key: t,
                    breakpoints: Za,
                    className: "DetailEntityMetadata__genre"
                }, r)
            }
            ));
            return Ua("span", {
                className: "DetailEntityMetadata__genres"
            }, n)
        }
          , Fa = Ia
          , qa = de.createElement
          , Ga = function(e) {
            var t = e.model
              , n = t.name
              , a = t.description
              , r = t.rating
              , i = t.genres
              , o = t.credits
              , l = t.avFeatures
              , s = t.tags
              , c = t.collection
              , u = t.entityType
              , d = e.contentOverrides
              , m = {
                rating: r,
                genres: i,
                credits: o,
                avFeatures: l,
                tags: s,
                entityType: u
            };
            return qa("div", {
                className: "CollectionDetails__tab"
            }, qa(xe.Z, {
                as: "p",
                breakpoints: {
                    xs: "subtitle14",
                    lg: "subtitle16"
                },
                className: "CollectionDetails__subtitle"
            }, c.name), qa(xe.Z, {
                as: "p",
                breakpoints: {
                    xs: "title18",
                    md: "title24",
                    lg: "title32"
                },
                className: "CollectionDetails__title"
            }, (null === d || void 0 === d ? void 0 : d.overrideName) || n), qa(xe.Z, {
                as: "p",
                breakpoints: {
                    xs: "body14",
                    lg: "body16"
                },
                className: "CollectionDetails__desc"
            }, (null === d || void 0 === d ? void 0 : d.overrideDescription) || a), qa(Fa, m))
        }
          , Wa = pe().shape({
            title: pe().string,
            editorialHeadline: pe().string,
            editorialDescription: pe().string,
            collection: nt.isRequired
        })
          , za = (n(51466),
        n(80232))
          , Va = de.createElement;
        function Ya(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function Ka(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Ya(Object(n), !0).forEach((function(t) {
                    (0,
                    se.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ya(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var Xa = function(e) {
            var t, n = e.model, a = n.editorialHeadline, r = n.editorialDescription, i = n.collection, o = n.title;
            if (null === i || void 0 === i || null === (t = i.items) || void 0 === t || !t.length)
                return null;
            var l = Bv(i.theme);
            return Va("div", {
                className: "NonSubEditorialCollection",
                "data-automationid": "".concat((0,
                za.ap)(o), "_editorial_collection")
            }, Va("div", {
                className: a ? "NonSubEditorialCollection__header" : ""
            }, a && Va(xe.Z, {
                as: "h2",
                breakpoints: {
                    xs: "title32",
                    lg: "title48"
                },
                className: "section-headline NonSubEditorialCollection__header__headline"
            }, a), r && Va(xe.Z, {
                as: "p",
                variant: "body16",
                className: "NonSubEditorialCollection__header__description"
            }, r)), l && Va(l, {
                key: i.id,
                model: Ka({}, n)
            }))
        }
          , Ja = n(70917)
          , Qa = n(17039)
          , $a = n(17768)
          , er = n(20674)
          , tr = n(97185)
          , nr = (n(65286),
        de.createElement,
        function(e) {
            var t = e.items
              , n = e.label
              , a = e.onSelect
              , r = e.activeIndex
              , i = (0,
            Qa.u)().typography.css;
            if (!t)
                return null;
            var o = {
                showMenu: !1,
                menuLabel: n,
                activeIndex: r
            }
              , l = (0,
            de.useReducer)((function(e, t) {
                return "toggleOnly" === t.type ? {
                    showMenu: !e.showMenu,
                    menuLabel: e.menuLabel,
                    activeIndex: e.activeIndex
                } : {
                    showMenu: !1,
                    menuLabel: t.menuItem.name,
                    activeIndex: t.menuItem.number
                }
            }
            ), o)
              , s = l[0]
              , c = l[1]
              , u = (0,
            Ja.css)(i.body14.styles);
            return (0,
            Ja.jsx)("div", {
                className: "Dropdown"
            }, (0,
            Ja.jsx)("button", {
                tabIndex: "0",
                className: ue()("Dropdown__button", s.showMenu && "isOpen"),
                css: u,
                onClick: function() {
                    return c({
                        type: "toggleOnly"
                    })
                }
            }, s.menuLabel, s.showMenu ? (0,
            Ja.jsx)($a.Z, null) : (0,
            Ja.jsx)(er.Z, null)), s.showMenu && (0,
            Ja.jsx)("ul", {
                className: "Dropdown__menu"
            }, t.map((function(e) {
                return (0,
                Ja.jsx)("li", {
                    className: ue()("Dropdown__menu-item", r === e.number && "active")
                }, (0,
                Ja.jsx)("button", {
                    tabIndex: "0",
                    css: u,
                    onClick: function() {
                        return function(e) {
                            a(e.number),
                            c({
                                type: "updateActive",
                                menuItem: e
                            })
                        }(e)
                    },
                    value: e.number
                }, e.name))
            }
            ))))
        }
        )
          , ar = function(e) {
            return (0,
            Ja.jsx)(Qa.a, {
                theme: tr.oneHuluLightTheme
            }, (0,
            Ja.jsx)(nr, e))
        }
          , rr = (pe().shape({
            collection: {
                id: pe().string,
                name: pe().string,
                description: pe().string,
                items: pe().arrayOf(pe().shape({})),
                enabledTileLinks: pe().bool,
                seasons: pe().arrayOf(pe().shape({}))
            }
        }),
        n(27261))
          , ir = n(28687)
          , or = n(88767);
        function lr() {
            var e = (0,
            rr.Z)(['\n  query {\n    hub(path: "/series/', "/season/", '") {\n      items {\n        id\n        season\n        number\n        description\n        name\n        timeBadge\n        artwork {\n          horizontalHero {\n            path\n          }\n          watermark {\n            path\n          }\n        }\n      }\n    }\n  }\n  ']);
            return lr = function() {
                return e
            }
            ,
            e
        }
        var sr = function(e) {
            var t = function(e) {
                var t = e.seriesId
                  , n = e.seasonNum;
                return (0,
                ir.gql)(lr(), t, n)
            }(e);
            return (0,
            or.useQuery)(["seasonCollection", e], (0,
            Se.Z)(ke().mark((function e() {
                var n;
                return ke().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            (0,
                            ir.request)("/hookup", t);
                        case 2:
                            return n = e.sent,
                            e.abrupt("return", null === n || void 0 === n ? void 0 : n.hub);
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))), {
                refetchOnMount: !1,
                refetchOnWindowFocus: !1
            })
        }
          , cr = de.createElement
          , ur = function(e) {
            var t = e.seasonNum
              , n = e.seriesId
              , a = e.disableTileLink
              , r = e.collectionIndex
              , i = e.partOfSeries
              , o = sr(e)
              , l = o.data
              , s = o.isFetching
              , c = (null !== l && void 0 !== l ? l : {}).items;
            return !s && cr("div", {
                className: "EpisodeCollection__items"
            }, c.map((function(e, o) {
                return cr("div", {
                    className: "EpisodeCollection__item",
                    key: e.id
                }, cr(va, {
                    asset: e,
                    index: o,
                    hideControlIcon: !0,
                    disableTileLink: a,
                    collectionIndex: r,
                    collectionId: n,
                    partOfSeries: i || null,
                    seasonNumber: t
                }))
            }
            )))
        }
          , dr = (n(805),
        de.createElement)
          , mr = function(e) {
            var t = e.latestSeason
              , n = e.model
              , a = n.collection
              , r = a.enabledTileLinks
              , i = a.seasons
              , o = n.upsell
              , l = e.collectionIndex
              , s = e.query
              , c = null === s || void 0 === s ? void 0 : s.season
              , u = i.map((function(e) {
                return e.number
            }
            ))
              , d = (0,
            de.useState)(u[0])
              , m = d[0]
              , p = d[1];
            u.includes(c) && p(c);
            var f = i.map((function(e) {
                var n = e.number
                  , a = e.name
                  , r = function(e, t) {
                    var n = t.hasUpcomingSeason
                      , a = t.hasContentAvailable
                      , r = t.hasLastEpPremiered
                      , i = t.season
                      , o = e === Number(i)
                      , l = n && o && !r;
                    return {
                        isSeasonUpcoming: l,
                        isSeasonNew: !r && o,
                        upcomingUnavailable: l && !a
                    }
                }(n, t)
                  , i = r.isSeasonNew
                  , o = r.upcomingUnavailable
                  , l = function(e, t, n) {
                    return t ? "".concat(n, " (Upcoming)") : e ? "".concat(n, " (New)") : n
                }(i, r.isSeasonUpcoming, a);
                return {
                    number: n,
                    name: o ? "".concat(e.name, " (Upcoming)") : l
                }
            }
            ));
            return dr("div", {
                className: "EpisodeCollection"
            }, dr("div", {
                className: "EpisodeCollection__seasons"
            }, dr(ar, {
                items: f,
                label: f[0].name,
                onSelect: p,
                activeIndex: m
            })), dr(ur, {
                seriesId: null === s || void 0 === s ? void 0 : s.id,
                disableTileLink: !r,
                seasonNum: m,
                collectionIndex: l,
                partOfSeries: null === o || void 0 === o ? void 0 : o.name
            }))
        }
          , pr = (pe().shape({
            title: pe().string,
            collection: nt.isRequired
        }),
        n(63202),
        de.createElement)
          , fr = function(e) {
            var t = e.model
              , n = t.collection
              , a = t.title
              , r = t.collection
              , i = r.enabledTileLinks
              , o = r.enableSignupModal
              , l = e.includeTitle
              , s = function(e, t, n, a, r) {
                return e.items.map((function(i, o) {
                    return pr("div", {
                        className: "GridCollection__item",
                        key: i.id
                    }, pr(fa, {
                        asset: i,
                        index: o,
                        disableTileLink: !t,
                        collectionIndex: n,
                        collectionId: e.id,
                        enableSignupModal: a,
                        includeSEOAttr: r
                    }))
                }
                ))
            }(n, i, e.collectionIndex, o, e.includeSEOAttr);
            return pr("div", {
                className: "GridCollection"
            }, l && pr(xe.Z, {
                as: "h1",
                breakpoints: {
                    xs: "title32",
                    lg: "title48"
                },
                className: "GridCollection__title"
            }, a), pr("div", {
                className: "GridCollection__items"
            }, s))
        };
        fr.defaultProps = {
            includeTitle: !1
        };
        var vr = fr
          , hr = (pe().shape({
            title: pe().string,
            collection: nt.isRequired
        }),
        n(24919),
        de.createElement)
          , gr = function(e) {
            var t, n = e.model.collection;
            if (null === n || void 0 === n || null === (t = n.items) || void 0 === t || !t.length)
                return null;
            var a = (0,
            je.GO)({
                event_name: "portrait_collection_tray_header",
                component_id: "portrait_collection"
            }, (0,
            je.pS)("a", "tray_header", "link"));
            return hr("div", {
                className: "PortraitCollection cu-non-sub-portrait-collection"
            }, hr((function() {
                var t = e.model
                  , n = t.title
                  , r = t.collection.collectionHubPath
                  , i = hr(xe.Z, {
                    breakpoints: {
                        xs: "label14",
                        lg: "label18"
                    }
                }, n);
                return r ? hr(a, {
                    className: "PortraitCollection__tray-header PortraitCollection__title",
                    name: "".concat(n, "-collection"),
                    onMouseDown: fe.W,
                    href: r,
                    "aria-label": "".concat(n, " Collection")
                }, i) : hr("div", {
                    className: "PortraitCollection__title"
                }, i)
            }
            ), null), hr("div", {
                className: "PortraitCollection__slider"
            }, hr(ya, {
                collection: n,
                enabledTileLinks: n.enabledTileLinks
            })))
        }
          , _r = (pe().shape({
            title: pe().string,
            description: pe().string,
            collection: nt.isRequired,
            collectionIndex: pe().number
        }),
        n(32606),
        de.createElement);
        function br(e) {
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
                } catch (qv) {
                    return !1
                }
            }();
            return function() {
                var n, a = (0,
                ut.Z)(e);
                if (t) {
                    var r = (0,
                    ut.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                ct.Z)(this, n)
            }
        }
        var yr = function(e) {
            (0,
            st.Z)(n, e);
            var t = br(n);
            function n() {
                var e, a;
                (0,
                ot.Z)(this, n);
                for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
                    i[o] = arguments[o];
                return (0,
                ct.Z)(a, (e = a = t.call.apply(t, [this].concat(i)),
                a.mapItemToTile = function(e, t) {
                    var n = a.props
                      , r = n.collectionIndex
                      , i = n.collection
                      , o = i.enableSignupModal
                      , l = i.enabledTileLinks;
                    return _r(fa, {
                        asset: e,
                        key: t,
                        index: t,
                        disableTileLink: !l,
                        collectionIndex: r,
                        enableSignupModal: o
                    })
                }
                ,
                e))
            }
            return (0,
            lt.Z)(n, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.collection
                      , n = e.collectionIndex
                      , a = e.collectionType
                      , r = t.items;
                    return _r("div", {
                        className: "TileSlider cu-tile-slider"
                    }, _r(At, {
                        className: "Slider--tile",
                        items: r.map(this.mapItemToTile),
                        ref: this.setSliderRef,
                        collection: t,
                        collectionIndex: n,
                        collectionType: a,
                        mobileModeTrigger: 2,
                        mobileMode: "static"
                    }))
                }
            }]),
            n
        }(de.Component);
        yr.defaultProps = {
            collection: {}
        };
        var wr = yr
          , Nr = (n(58578),
        de.createElement)
          , kr = function(e) {
            var t = e.model
              , n = t.collection
              , a = t.title
              , r = t.description
              , i = t.collectionIndex;
            if (!n.items.length)
                return null;
            var o = Nr(wr, {
                collection: n,
                collectionIndex: i,
                collectionType: he.SIMPLE_COLLECTION
            });
            return Nr("div", {
                className: "NonSubSimpleCollection cu-non-sub-simple-collection",
                "data-automationid": "".concat((0,
                za.ap)(a), "_simple_collection")
            }, Nr(it, {
                name: a,
                description: r,
                slider: o,
                collectionHubPath: ft()(n, "collectionHubPath")
            }))
        }
          , Sr = (pe().shape({
            accentColor: pe().string,
            tabs: pe().arrayOf(pe().shape({
                title: pe().string.isRequired,
                model: pe().shape({
                    type: pe().string.isRequired,
                    collection: nt.isRequired
                })
            })).isRequired
        }),
        n(51455),
        de.createElement);
        function xr(e) {
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
                } catch (qv) {
                    return !1
                }
            }();
            return function() {
                var n, a = (0,
                ut.Z)(e);
                if (t) {
                    var r = (0,
                    ut.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                ct.Z)(this, n)
            }
        }
        var Tr = function(e) {
            (0,
            st.Z)(n, e);
            var t = xr(n);
            function n(e) {
                var a;
                return (0,
                ot.Z)(this, n),
                (a = t.call(this, e)).state = {
                    selected: 0,
                    nav_offset: 0
                },
                a.onItemClick = a.onItemClick.bind((0,
                bt.Z)(a)),
                a
            }
            return (0,
            lt.Z)(n, [{
                key: "componentDidMount",
                value: function() {
                    var e = this.state.selected;
                    this.onItemClick(e)
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    var e = this.props.selectedTab;
                    e !== this.state.selected && this.onItemClick(e)
                }
            }, {
                key: "onItemClick",
                value: function(e, t) {
                    var n = this.props
                      , a = n.onSelected
                      , r = n.shouldPreventDefaultClick;
                    if (this.setState({
                        selected: e
                    }),
                    a && a(e),
                    this.root) {
                        var i = this.root.getElementsByTagName("a")[e];
                        if (!i)
                            return;
                        var o = this.root.getElementsByClassName("nav__items")[0]
                          , l = i.offsetLeft
                          , s = 0;
                        if (window.innerWidth) {
                            var c = window.innerWidth;
                            c < o.offsetWidth && (s = i.offsetLeft,
                            o.offsetWidth - s < c && (s = o.offsetWidth - c))
                        }
                        this.setState({
                            nav_offset: s,
                            indicator_offset: l,
                            indicator_width: i.offsetWidth
                        })
                    }
                    r && t && t.preventDefault()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.children
                      , a = t.accentColor
                      , r = t.shouldCenterItems
                      , i = this.state
                      , o = i.selected
                      , l = i.indicator_offset
                      , s = i.indicator_width
                      , c = i.nav_offset
                      , u = ue()("nav__accent-bar", {
                        hidden: l < 0
                    });
                    return Sr("div", {
                        className: ue()("nav", {
                            "nav--centered": r
                        }),
                        ref: function(t) {
                            return e.root = t
                        }
                    }, Sr("div", {
                        className: "nav__items",
                        style: {
                            transform: "translateX(-".concat(c, "px)")
                        }
                    }, de.Children.map(n, (function(t, n) {
                        return de.cloneElement(t, {
                            active: n === o,
                            onClick: function(t) {
                                return e.onItemClick(n, t)
                            }
                        })
                    }
                    )), l > -1 && Sr("span", {
                        className: u,
                        style: {
                            backgroundColor: a || "#262930",
                            transform: "translateX(".concat(l, "px)"),
                            width: s
                        }
                    })))
                }
            }]),
            n
        }(de.Component);
        Tr.defaultProps = {
            shouldCenterItems: !1
        };
        var Or = Tr
          , Er = (n(25534),
        de.createElement)
          , Pr = function(e) {
            var t = e.active
              , n = e.children
              , a = (0,
            Rn.Z)(e, ["active", "children"]);
            return Er("a", (0,
            we.Z)({
                className: ue()("nav-item", {
                    "nav-item--active": t
                })
            }, a, {
                onKeyDown: (0,
                fe.P)(a.onClick),
                onMouseDown: fe.W,
                role: "button",
                "aria-label": "View ".concat(n),
                tabIndex: "0"
            }), Er(xe.Z, {
                variant: "label14"
            }, n))
        };
        Pr.displayName = "NavItem";
        var Cr = Pr
          , Dr = de.createElement;
        function Zr(e) {
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
                } catch (qv) {
                    return !1
                }
            }();
            return function() {
                var n, a = (0,
                ut.Z)(e);
                if (t) {
                    var r = (0,
                    ut.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                ct.Z)(this, n)
            }
        }
        var Ir = function(e) {
            (0,
            st.Z)(n, e);
            var t = Zr(n);
            function n(e) {
                var a, r;
                return (0,
                ot.Z)(this, n),
                (r = t.call(this, e)).handleStartTouch = (a = r).handleStartTouch.bind(a),
                r.handleEndTouch = (a = r).handleEndTouch.bind(a),
                r.startX = 0,
                r.startY = 0,
                r.distX = 0,
                r.distY = 0,
                r.threshold = 50,
                r.restraint = 25,
                r.allowedTime = 300,
                r.elapsedTime = 0,
                r.startTime = 0,
                r
            }
            return (0,
            lt.Z)(n, [{
                key: "handleStartTouch",
                value: function(e) {
                    var t = e.changedTouches[0];
                    this.dist = 0,
                    this.startX = t.pageX,
                    this.startY = t.pageY,
                    this.startTime = (new Date).getTime()
                }
            }, {
                key: "handleEndTouch",
                value: function(e) {
                    var t = this.props
                      , n = t.currentSelected
                      , a = t.itemsLength
                      , r = t.nextFunc
                      , i = t.prevFunc
                      , o = e.changedTouches[0];
                    this.distX = o.pageX - this.startX,
                    this.distY = o.pageY - this.startY,
                    this.elapsedTime = (new Date).getTime() - this.startTime,
                    this.elapsedTime <= this.allowedTime && Math.abs(this.distX) >= this.threshold && Math.abs(this.distY) <= this.restraint && (this.distX < 0 ? a - 1 !== n && ((0,
                    ve.JW)("change_tab", "change_tab", "swipe"),
                    r && r(n + 1)) : n > 0 && ((0,
                    ve.JW)("change_tab", "change_tab", "swipe"),
                    i && i(n - 1)))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props.children;
                    return Dr("div", {
                        className: "Swipe",
                        onTouchStart: function(t) {
                            return e.handleStartTouch(t)
                        },
                        onTouchEnd: function(t) {
                            return e.handleEndTouch(t)
                        }
                    }, t)
                }
            }]),
            n
        }(de.Component)
          , Mr = (n(44512),
        de.createElement);
        function Ar(e) {
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
                } catch (qv) {
                    return !1
                }
            }();
            return function() {
                var n, a = (0,
                ut.Z)(e);
                if (t) {
                    var r = (0,
                    ut.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                ct.Z)(this, n)
            }
        }
        var Lr = "slide"
          , Rr = "fade"
          , jr = function(e) {
            (0,
            st.Z)(n, e);
            var t = Ar(n);
            function n(e) {
                var a;
                return (0,
                ot.Z)(this, n),
                (a = t.call(this, e)).state = {
                    selected: 0
                },
                a.TabItems = a.renderTabItems(),
                a.onSelected = a.onSelected.bind((0,
                bt.Z)(a)),
                a.setInitialTab = a.setInitialTab.bind((0,
                bt.Z)(a)),
                a.setInitialTab(!1),
                a
            }
            return (0,
            lt.Z)(n, [{
                key: "setInitialTab",
                value: function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
                      , t = this.props.initialTab
                      , n = parseInt(t, 10)
                      , a = {
                        selected: n
                    };
                    t && n && (e ? this.setState(a) : this.state = a)
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    this.setInitialTab()
                }
            }, {
                key: "onSelected",
                value: function(e) {
                    var t = this.props.onSelected;
                    this.setState({
                        selected: e
                    }),
                    t && t(e)
                }
            }, {
                key: "renderTabItems",
                value: function() {
                    var e = this.props
                      , t = e.children
                      , n = e.tabType;
                    return t.map((function(e, t) {
                        var a = (0,
                        je.pS)(Cr, "collection_tab", (0,
                        za.Fv)(e.props.title))
                          , r = n === he.COLLECTION ? (0,
                        je.GO)({
                            event_name: "collection_tab",
                            content_select: ft()(e, "props.title", "").toLowerCase()
                        }, a) : a
                          , i = e.props.hrefPath
                          , o = {};
                        return i && (o.href = i),
                        Mr(r, (0,
                        we.Z)({
                            key: t
                        }, o), e.props.title)
                    }
                    ))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.children
                      , a = t.accentColor
                      , r = t.transitionType
                      , i = t.shouldCenterTabTitles
                      , o = this.state.selected;
                    return Mr("div", {
                        className: "tabs"
                    }, Mr(Ir, {
                        nextFunc: function(t) {
                            return e.setState({
                                selected: t
                            })
                        },
                        prevFunc: function(t) {
                            return e.setState({
                                selected: t
                            })
                        },
                        itemsLength: n.length,
                        currentSelected: o
                    }, Mr(Or, {
                        selectedTab: o,
                        onSelected: this.onSelected,
                        accentColor: a && a.toString(),
                        shouldCenterItems: i,
                        shouldPreventDefaultClick: !0
                    }, this.TabItems)), Mr("div", {
                        className: "tabs__divider"
                    }), Mr("div", {
                        className: "tabs__container"
                    }, Mr("div", {
                        className: ue()("tabs__content", {
                            "tabs__content--slider": r === Lr
                        }),
                        style: {
                            transform: r === Lr && "translateX(-".concat(o, "00%)")
                        }
                    }, de.Children.map(n, (function(e, t) {
                        return de.cloneElement(e, {
                            active: t === o,
                            transitionType: r
                        })
                    }
                    )))))
                }
            }]),
            n
        }(de.Component);
        jr.defaultProps = {
            transitionType: Rr,
            shouldCenterTabTitles: !1
        };
        var Hr = jr
          , Ur = (n(77692),
        de.createElement)
          , Br = function(e) {
            var t = e.children
              , n = e.active
              , a = e.className
              , r = e.transitionType
              , i = (0,
            Rn.Z)(e, ["children", "active", "className", "transitionType"]);
            return Ur("div", (0,
            we.Z)({
                className: ue()("tab", {
                    "tab--hidden": r === Rr,
                    "tab--active": n
                }, a)
            }, i), t)
        };
        Br.displayName = "Tab";
        var Fr = Br
          , qr = (n(24071),
        de.createElement);
        function Gr(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function Wr(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Gr(Object(n), !0).forEach((function(t) {
                    (0,
                    se.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Gr(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function zr(e) {
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
                } catch (qv) {
                    return !1
                }
            }();
            return function() {
                var n, a = (0,
                ut.Z)(e);
                if (t) {
                    var r = (0,
                    ut.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                ct.Z)(this, n)
            }
        }
        var Vr = function(e) {
            (0,
            st.Z)(n, e);
            var t = zr(n);
            function n(e) {
                var a;
                (0,
                ot.Z)(this, n);
                var r = (a = t.call(this, e)).props
                  , i = r.query
                  , o = r.model.tabs
                  , l = void 0 === o ? [] : o
                  , s = null === i || void 0 === i ? void 0 : i.tab
                  , c = "string" === typeof s && s.toLowerCase()
                  , u = l.map((function(e) {
                    return ((null === e || void 0 === e ? void 0 : e.title) || "").toLowerCase()
                }
                ));
                return u.includes(c) && (a.initialTab = parseInt(u.indexOf(c), 10)),
                a
            }
            return (0,
            lt.Z)(n, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.model
                      , n = t.tabs
                      , a = void 0 === n ? [] : n
                      , r = t.accentColor
                      , i = t.shouldCenterTabTitles
                      , o = t.metrics
                      , l = e.extraClassName
                      , s = e.onSelected
                      , c = e.latestSeason
                      , u = e.withSlider
                      , d = e.query
                      , m = e.asPath
                      , p = e.contentOverrides
                      , f = ft()(o, "collectionIndex", 0)
                      , v = ue()("CollectionTabs", l)
                      , h = u || (null === d || void 0 === d ? void 0 : d.entity) !== he.MOVIE ? {} : he.ITEM_LIST_SCHEMA_ATTRIBUTES;
                    return qr("div", (0,
                    we.Z)({
                        className: v
                    }, h), qr(Hr, {
                        accentColor: r,
                        shouldCenterTabTitles: i,
                        onSelected: s,
                        tabType: "collection",
                        initialTab: this.initialTab,
                        shouldPreventDefaultClick: !0
                    }, a.filter((function(e) {
                        var t = e.model
                          , n = ft()(t, "collection.items", []).length > 0
                          , a = ft()(t, "type", null);
                        if (n || "collection_details" === a)
                            return e
                    }
                    )).map((function(e, t) {
                        var n = e.model
                          , a = e.title
                          , r = void 0 === a ? "" : a
                          , i = ft()(n, "type", null)
                          , o = Bv(i)
                          , l = m ? "".concat(m, "?tab=").concat(r.toLowerCase()) : void 0;
                        return o ? qr(Fr, {
                            key: t,
                            title: r,
                            hrefPath: l
                        }, qr(o, {
                            model: Wr({}, n),
                            collectionIndex: f++,
                            latestSeason: "collection_details" === i ? null : c,
                            contentOverrides: p,
                            includeSEOAttr: !u,
                            query: d,
                            asPath: m
                        })) : null
                    }
                    ))))
                }
            }]),
            n
        }(de.Component)
          , Yr = n(45578)
          , Kr = n.n(Yr)
          , Xr = (pe().shape({
            collection: nt.isRequired
        }),
        n(61974))
          , Jr = (n(52134),
        de.createElement)
          , Qr = function(e) {
            var t = e.model.heroSliderCtaDownloadAppText
              , n = e.user
              , a = e.updateDetailEntity
              , r = n.isHuluUser
              , i = (0,
            de.useState)(0)
              , o = i[0]
              , l = i[1]
              , s = (0,
            de.useRef)(0)
              , c = ft()(e, "model.upsell.name", "")
              , u = "string" === typeof c ? c.toLowerCase() : c;
            a({
                networkUpsell: u,
                requirePremium: void 0 !== (null === he.PREMIUM_NETWORKS || void 0 === he.PREMIUM_NETWORKS ? void 0 : he.PREMIUM_NETWORKS[u])
            });
            var d = (0,
            je.GO)({
                event_name: (0,
                Le.vl)(n),
                cta_placement: "masthead_slider"
            }, (0,
            je.pS)(He.Z, "cta_masthead_slider"))
              , m = r && (0,
            Xr.mobileDetect)().mobile() && t
              , p = function() {
                var t = e.model
                  , a = t.heroSliderCtaUrl
                  , r = t.network
                  , i = e.ctaFields
                  , o = e.requirePremium
                  , l = e.cartAbandonment
                  , s = (0,
                Ae.QM)(o, r)
                  , c = {
                    user: n,
                    componentUrl: a,
                    ctaFields: i,
                    from: s,
                    cartAbandonment: l
                };
                m ? window.location.assign((0,
                Re.cv)()) : (0,
                Re.AU)(c)
            };
            return (0,
            de.useEffect)((function() {
                var e = setInterval((function() {
                    var e = Math.min(5, s.current);
                    l((function(t) {
                        return (t + 1) % e
                    }
                    ))
                }
                ), 4e3);
                return function() {
                    return clearInterval(e)
                }
            }
            ), []),
            (0,
            de.useEffect)((function() {
                l(0),
                s.current = ft()(e, "model.collection.items", []).length
            }
            ), [ft()(e, "model.collection.id")]),
            Jr("div", {
                className: "HeroSliderMasthead__head"
            }, Jr("div", {
                id: "HeroSliderMasthead__hero",
                className: "HeroSliderMasthead__hero"
            }, Jr("div", {
                className: "HeroSliderMasthead__heros"
            }, Jr("div", {
                className: "HeroSliderMasthead__items"
            }, function() {
                var t = e.model.collection
                  , n = ft()(t, "items", []);
                return Kr()(n, (function(e) {
                    return e.id
                }
                )).slice(0, 5).map((function(e, t) {
                    var n = ue()("HeroSliderMasthead__item", {
                        "HeroSliderMasthead__item--active": t === o
                    })
                      , a = e.id
                      , r = e.name
                      , i = e.artwork
                      , l = ft()(i, "horizontalHero.hue", 0) || ft()(i, "horizontalProgramTile.hue", 0)
                      , s = {
                        borderBottomColor: "hsla(".concat(l, ", 75%, 40%, 1)")
                    };
                    return Jr("div", {
                        key: a,
                        className: n
                    }, Jr(ha, {
                        asset: e
                    }), r && Jr(xe.Z, {
                        as: "div",
                        breakpoints: {
                            xs: "body10",
                            lg: "body12"
                        },
                        className: "HeroSliderMasthead__showName"
                    }, r), Jr("div", {
                        className: "HeroSliderMasthead__accent-bar",
                        style: s
                    }))
                }
                ))
            }()), function() {
                var t = e.model
                  , n = t.heroSliderCtaDesc
                  , a = t.heroSliderCtaDisclaimer
                  , r = t.heroSliderCtaDownloadAppText
                  , i = t.heroSliderCtaLegalText
                  , o = t.heroSliderCtaPremiumDesc
                  , l = t.heroSliderCtaText
                  , s = t.network
                  , c = function(e) {
                    if (!e)
                        return null;
                    var t = [{
                        resize: "".concat(500, "x").concat(500, "|max")
                    }, {
                        format: "webp"
                    }, {
                        trim: !0
                    }]
                      , n = encodeURI("operations=".concat(JSON.stringify(t)));
                    return "".concat(e, "&").concat(n)
                }(t.networkLogo)
                  , u = (0,
                La.W_)(s) ? o : n
                  , f = m ? r : l
                  , v = c ? Jr("img", {
                    src: c,
                    role: "presentation",
                    alt: s
                }) : Jr(xe.Z, {
                    breakpoints: {
                        xs: "title24",
                        md: "title32",
                        lg: "title40"
                    }
                }, s);
                return Jr("div", {
                    className: "HeroSliderMasthead__content"
                }, Jr("div", {
                    className: "HeroSliderMasthead__networkContainer"
                }, v), u && Jr("div", {
                    className: "HeroSliderMasthead__description",
                    dangerouslySetInnerHTML: {
                        __html: u
                    }
                }), a && Jr("div", {
                    className: "HeroSliderMasthead__disclaimer",
                    dangerouslySetInnerHTML: {
                        __html: a
                    }
                }), Jr(d, {
                    useStyle: "white",
                    onClick: p
                }, f), i && Jr("div", {
                    className: "HeroSliderMasthead__legal section-disclaimer",
                    dangerouslySetInnerHTML: {
                        __html: i
                    }
                }))
            }())))
        }
          , $r = "detailEntity"
          , ei = "STATE_DETAIL_ENTITY_ACTION_UPDATE"
          , ti = function(e) {
            return {
                type: ei,
                payload: e
            }
        };
        function ni(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function ai(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ni(Object(n), !0).forEach((function(t) {
                    (0,
                    se.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ni(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var ri, ii = (0,
        se.Z)({}, ei, (function(e, t) {
            return ai(ai({}, e), t)
        }
        )), oi = (0,
        ye.connect)((function(e) {
            var t, n;
            return {
                user: e.user,
                ctaFields: e[Ge],
                network: (null === (t = e.detailEntity) || void 0 === t ? void 0 : t.network) || (null === (n = e.detailEntity) || void 0 === n ? void 0 : n.networkUpsell),
                requirePremium: e.detailEntity.requirePremium
            }
        }
        ), (function(e) {
            return {
                updateDetailEntity: function(t) {
                    return e(ti(t))
                }
            }
        }
        ))(Qr), li = (ri = {},
        (0,
        se.Z)(ri, Ye, $e),
        (0,
        se.Z)(ri, Ge, Ve),
        (0,
        se.Z)(ri, $r, ii),
        ri), si = de.createElement;
        function ci(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function ui(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ci(Object(n), !0).forEach((function(t) {
                    (0,
                    se.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ci(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function di(e) {
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
                } catch (qv) {
                    return !1
                }
            }();
            return function() {
                var n, a = (0,
                ut.Z)(e);
                if (t) {
                    var r = (0,
                    ut.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                ct.Z)(this, n)
            }
        }
        var mi = function(e) {
            (0,
            st.Z)(n, e);
            var t = di(n);
            function n(e) {
                var a;
                return (0,
                ot.Z)(this, n),
                (a = t.call(this, e)).onSelected = a.onSelected.bind((0,
                bt.Z)(a)),
                a.onMastheadIndexChange = a.onMastheadIndexChange.bind((0,
                bt.Z)(a)),
                a.state = {
                    selected: 0,
                    mastheadIndex: 0
                },
                a
            }
            return (0,
            lt.Z)(n, [{
                key: "onMastheadIndexChange",
                value: function(e) {
                    this.setState({
                        mastheadIndex: e
                    })
                }
            }, {
                key: "onSelected",
                value: function(e) {
                    this.setState({
                        selected: e
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.state.selected
                      , t = this.props
                      , n = t.model
                      , a = t.model.tabs
                      , r = ft()(a, "".concat(e, ".model"))
                      , i = ui(ui({}, n), r);
                    return si(de.Fragment, null, si(oi, {
                        model: i
                    }), si(Vr, {
                        model: n,
                        onSelected: this.onSelected,
                        extraClassName: "CollectionTabs--withHeroSlider",
                        withSlider: !0
                    }))
                }
            }]),
            n
        }(de.Component)
          , pi = de.createElement
          , fi = function(e) {
            var t = e.model.includeHeroSlider;
            return pi(t ? mi : Vr, e)
        }
          , vi = me.PropTypes.shape({
            url: me.PropTypes.string.isRequired,
            alt: me.PropTypes.string.isRequired
        })
          , hi = me.PropTypes.shape({
            stepType: me.PropTypes.string.isRequired,
            details: me.PropTypes.string,
            index: me.PropTypes.number,
            qrCode: me.PropTypes.string,
            enableConnectedLogin: me.PropTypes.boolean,
            pollingRetryDelay: me.PropTypes.number,
            maxPollingTime: me.PropTypes.number
        })
          , gi = (me.PropTypes.shape({
            headline: me.PropTypes.string,
            image: (0,
            me.shape)({
                image_1x: vi,
                image_2x: vi
            }),
            description: me.PropTypes.string,
            footNote: me.PropTypes.string,
            steps: me.PropTypes.arrayOf(hi)
        }),
        n(94301),
        n(31467))
          , _i = n(27427)
          , bi = n(44131)
          , yi = n(32200)
          , wi = 15e3
          , Ni = "/v1/web/code/authenticate"
          , ki = "/v1/web/code/register"
          , Si = function() {
            var e = (0,
            Se.Z)(ke().mark((function e() {
                var t, n;
                return ke().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            Ei(ki);
                        case 2:
                            return t = e.sent,
                            n = (0,
                            Xr.mobileDetect)().match("".concat(he.USER_AGENTS_REGEX.TESLA)) ? "TESLA" : (0,
                            Xr.mobileDetect)().match("".concat(he.USER_AGENTS_REGEX.GM)) ? "GM" : "BROWSER",
                            e.abrupt("return", "csrf=".concat(t) + "&product_name=".concat(n, "-PWA") + "&affiliate_name=hulu" + "&friendly_name=".concat(n, "-PWA"));
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function() {
                return e.apply(this, arguments)
            }
        }()
          , xi = function() {
            var e = (0,
            Se.Z)(ke().mark((function e() {
                var t, n, a, r, i, o, l;
                return ke().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (t = {
                                logName: "fetchActivationCode"
                            },
                            (0,
                            _i.ej)("_hulu_at")) {
                                e.next = 5;
                                break
                            }
                            return yi.an.debug("No anonymous token found! Skipping connected login.", {}, t),
                            e.abrupt("return", null);
                        case 5:
                            return n = (0,
                            gi.X)("hoth"),
                            e.next = 8,
                            Si();
                        case 8:
                            return a = e.sent,
                            r = {
                                method: "POST",
                                credentials: "include",
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded"
                                },
                                body: a
                            },
                            e.prev = 10,
                            e.next = 13,
                            (0,
                            za.kv)("".concat(n).concat(ki), r, wi);
                        case 13:
                            if (!(i = e.sent).ok) {
                                e.next = 19;
                                break
                            }
                            return e.next = 17,
                            i.json();
                        case 17:
                            return l = e.sent,
                            e.abrupt("return", null === l || void 0 === l || null === (o = l.data) || void 0 === o ? void 0 : o.code);
                        case 19:
                            yi.an.error("fetchActivationCode: Error received from ".concat(n).concat(ki), i.status, t),
                            e.next = 25;
                            break;
                        case 22:
                            e.prev = 22,
                            e.t0 = e.catch(10),
                            yi.an.error("fetchActivationCode: Fetch error from ".concat(n).concat(ki), e.t0, t);
                        case 25:
                            return e.abrupt("return", null);
                        case 26:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[10, 22]])
            }
            )));
            return function() {
                return e.apply(this, arguments)
            }
        }()
          , Ti = function() {
            var e = (0,
            Se.Z)(ke().mark((function e(t) {
                var n, a, r, i, o, l, s, c, u, d, m, p, f;
                return ke().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            Ei(Ni);
                        case 2:
                            return d = e.sent,
                            "HULU_ASSIGNMENTS",
                            m = (0,
                            Xr.mobileDetect)().match("".concat(he.USER_AGENTS_REGEX.TESLA)) ? "Tesla" : (0,
                            Xr.mobileDetect)().match("".concat(he.USER_AGENTS_REGEX.GM)) ? "GM" : "Browser",
                            p = {
                                device_capabilities: {
                                    device: (i = {
                                        "hulu:app:web": "2.45.0"
                                    },
                                    (0,
                                    se.Z)(i, "hulu:runtime:browser:".concat(null === (n = (0,
                                    bi._v)()) || void 0 === n ? void 0 : n.deviceType), ""),
                                    (0,
                                    se.Z)(i, "hulu:platform:browser:".concat(null === (a = (0,
                                    bi._v)()) || void 0 === a ? void 0 : a.os), null === (r = (0,
                                    bi._v)()) || void 0 === r ? void 0 : r.osVersion),
                                    i)
                                },
                                app_version: "2.45.0",
                                device_platform: null === (o = (0,
                                bi._v)()) || void 0 === o ? void 0 : o.os,
                                device_type: null === (l = (0,
                                bi._v)()) || void 0 === l ? void 0 : l.deviceType,
                                device_os: "".concat(null === (s = (0,
                                bi._v)()) || void 0 === s ? void 0 : s.os, " ").concat(null === (c = (0,
                                bi._v)()) || void 0 === c ? void 0 : c.osVersion),
                                device_family: null === (u = (0,
                                bi._v)()) || void 0 === u ? void 0 : u.os,
                                device_manufacturer: m,
                                distro: m,
                                limit_ad_tracking: ""
                            },
                            f = encodeURIComponent(JSON.stringify(p)),
                            e.abrupt("return", "additional_properties=".concat(f) + "&code=".concat(t) + "&csrf=".concat(d) + "&assignments=".concat("HULU_ASSIGNMENTS"));
                        case 8:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , Oi = function() {
            var e = (0,
            Se.Z)(ke().mark((function e(t) {
                var n, a, r, i, o, l;
                return ke().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (t) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return", null);
                        case 2:
                            return n = {
                                logName: "checkActivationAuth"
                            },
                            a = (0,
                            gi.X)("hoth"),
                            e.next = 6,
                            Ti(t);
                        case 6:
                            return r = e.sent,
                            i = {
                                method: "POST",
                                credentials: "include",
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded"
                                },
                                body: r
                            },
                            o = null,
                            e.prev = 9,
                            e.next = 12,
                            (0,
                            za.kv)("".concat(a).concat(Ni), i, wi);
                        case 12:
                            l = e.sent,
                            o = l.status,
                            e.next = 19;
                            break;
                        case 16:
                            e.prev = 16,
                            e.t0 = e.catch(9),
                            o !== he.STATUS_CODES.NOT_FOUND && yi.an.error("useAuthenticateWithCode: Fetch error from ".concat(a).concat(Ni), e.t0, n);
                        case 19:
                            return e.abrupt("return", o);
                        case 20:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[9, 16]])
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , Ei = function() {
            var e = (0,
            Se.Z)(ke().mark((function e(t) {
                var n, a, r, i, o;
                return ke().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = {
                                logName: "generateToken"
                            },
                            a = (0,
                            gi.X)("hudis"),
                            r = "",
                            i = {
                                method: "GET",
                                credentials: "include"
                            },
                            e.prev = 4,
                            e.next = 7,
                            (0,
                            za.kv)("".concat(a, "/api/4.0/generate_csrf_value?for_hoth=true&path=").concat(t), i, wi);
                        case 7:
                            (o = e.sent).ok ? ((0,
                            _i.ej)("_tcv") || yi.an.error("generateToken: Fetch error from ".concat(a, "/api/4.0/generate_csrf_value?for_hoth=true&path=").concat(t), "Cookie not set", n),
                            r = (0,
                            _i.ej)("_tcv"),
                            (0,
                            _i.Mz)("_tcv")) : yi.an.error("generateToken: Error received from ".concat(a, "/api/4.0/generate_csrf_value?for_hoth=true&path=").concat(t), o.status, n),
                            e.next = 14;
                            break;
                        case 11:
                            e.prev = 11,
                            e.t0 = e.catch(4),
                            yi.an.error("generateToken: Fetch error from ".concat(a, "/api/4.0/generate_csrf_value?for_hoth=true&path=").concat(t), e.t0, n);
                        case 14:
                            return e.abrupt("return", r);
                        case 15:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[4, 11]])
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }();
        function Pi(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function Ci(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Pi(Object(n), !0).forEach((function(t) {
                    (0,
                    se.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pi(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var Di = "/app/profiles"
          , Zi = "/connected-app-error"
          , Ii = {
            retries: 180,
            timeout: 1e4
        }
          , Mi = (n(64810),
        de.createElement)
          , Ai = function(e) {
            var t = e.pollingRetryDelay
              , n = e.maxPollingTime
              , a = t && n ? {
                retries: parseInt(60 * n / t),
                timeout: 1e3 * t
            } : null
              , r = function() {
                var e = (0,
                de.useState)(null)
                  , t = e[0]
                  , n = e[1];
                return (0,
                de.useEffect)((function() {
                    !function() {
                        var e = (0,
                        Se.Z)(ke().mark((function e() {
                            var t;
                            return ke().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2,
                                        xi();
                                    case 2:
                                        (t = e.sent) ? n(t) : window.location.assign("/connected-app-error");
                                    case 4:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()()
                }
                ), []),
                {
                    authCode: t
                }
            }().authCode;
            return function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ii
                  , n = (0,
                de.useState)(he.STATUS_CODES.NOT_FOUND)
                  , a = n[0]
                  , r = n[1]
                  , i = (0,
                de.useState)(0)
                  , o = i[0]
                  , l = i[1]
                  , s = Ci(Ci({}, Ii), t);
                (0,
                de.useEffect)((function() {
                    if (e && a !== he.STATUS_CODES.OK) {
                        if (!(o >= s.retries)) {
                            var t = setTimeout((function() {
                                !function() {
                                    var t = (0,
                                    Se.Z)(ke().mark((function t() {
                                        var n;
                                        return ke().wrap((function(t) {
                                            for (; ; )
                                                switch (t.prev = t.next) {
                                                case 0:
                                                    return t.next = 2,
                                                    Oi(e);
                                                case 2:
                                                    n = t.sent,
                                                    r(n),
                                                    n === he.STATUS_CODES.OK ? window.location.assign(Di) : n !== he.STATUS_CODES.NOT_FOUND && window.location.assign(Zi),
                                                    l(o + 1);
                                                case 6:
                                                case "end":
                                                    return t.stop()
                                                }
                                        }
                                        ), t)
                                    }
                                    )));
                                    return function() {
                                        return t.apply(this, arguments)
                                    }
                                }()()
                            }
                            ), s.timeout);
                            return function() {
                                clearTimeout(t)
                            }
                        }
                        window.location.assign(Zi)
                    }
                }
                ), [e, o])
            }(r, a),
            Mi("div", {
                className: "ConnectedLogin"
            }, r)
        }
          , Li = n(92592)
          , Ri = de.createElement;
        function ji(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function Hi(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ji(Object(n), !0).forEach((function(t) {
                    (0,
                    se.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ji(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var Ui = {
            logName: "QRCodeContainer"
        }
          , Bi = function(e) {
            var t = (0,
            de.useState)({
                qrCodeSvgData: ""
            })
              , n = t[0]
              , a = t[1];
            (0,
            de.useEffect)((function() {
                var t = e.urlPath;
                t && Li.toString(t, (function(e, t) {
                    t ? a(Hi(Hi({}, n), {}, {
                        qrCodeSvgData: t
                    })) : yi._u.error("Error generating QR code, Error: ".concat(e), Ui)
                }
                ))
            }
            ), []);
            var r = n.qrCodeSvgData;
            return Ri("div", {
                className: "QRCodeContainer",
                dangerouslySetInnerHTML: {
                    __html: null !== r && void 0 !== r ? r : ""
                }
            })
        }
          , Fi = de.createElement
          , qi = function(e) {
            var t = e.model
              , n = t.stepType
              , a = t.details
              , r = t.qrCode
              , i = t.enableConnectedLogin
              , o = t.pollingRetryDelay
              , l = t.maxPollingTime;
            return Fi("li", {
                className: "ConnectedLoginStep"
            }, a && Fi(je.m7.div, {
                className: "step-description",
                dangerouslySetInnerHTML: {
                    __html: a
                }
            }), "with_qr_code" === n && r && Fi(Bi, {
                urlPath: r
            }), "with_activation_login" === n && i && Fi(Ai, {
                pollingRetryDelay: o,
                maxPollingTime: l
            }))
        }
          , Gi = (n(82260),
        de.createElement)
          , Wi = function(e) {
            var t = e.model
              , n = t.headline
              , a = t.id
              , r = t.image
              , i = t.description
              , o = t.footNote
              , l = t.steps
              , s = ue()("container-width", "ConnectedLoginContainer");
            return Gi("div", {
                className: s,
                id: a
            }, Gi("div", {
                className: "row"
            }, Gi("div", {
                className: "ConnectedLoginContainer__text col-lg-6 col-md-6 col-xs-12",
                key: "text"
            }, Gi(xe.Z, {
                as: "h2",
                variant: "title32",
                className: "section-headline"
            }, n), i && Gi(je.m7.div, {
                className: "ConnectedLoginContainer__description",
                dangerouslySetInnerHTML: {
                    __html: i
                }
            }), l && Gi("ul", {
                className: "ConnectedLoginContainer__steps"
            }, l.map((function(e, t) {
                return Gi(qi, {
                    key: t,
                    model: e
                })
            }
            ))), o && Gi(je.m7.div, {
                className: "ConnectedLoginContainer__footnote",
                dangerouslySetInnerHTML: {
                    __html: o
                }
            })), r && function(e) {
                var t = e.model.image
                  , n = t.image_1x
                  , a = t.image_2x;
                return Gi("div", {
                    className: "ConnectedLoginContainer__image col-lg-6 col-md-6 col-xs-12",
                    key: "image"
                }, Gi("img", {
                    className: "lazyload",
                    "data-src": n.url,
                    "data-srcset": "".concat(n.url, " 1x, ").concat(a.url, " 2x"),
                    role: "presentation",
                    alt: n.alt
                }))
            }(e)))
        }
          , zi = (0,
        me.shape)({
            url: me.string.isRequired,
            alt: me.string.isRequired
        })
          , Vi = (0,
        me.shape)({
            icon: me.string.isRequired,
            name: me.string.isRequired
        })
          , Yi = (0,
        me.shape)({
            style: me.string,
            image: (0,
            me.shape)({
                image_1x: zi,
                image_2x: zi
            }),
            id: me.string,
            eyebrow: me.string,
            headline: me.string,
            body: me.string,
            disclaimer: me.string,
            logos: (0,
            me.arrayOf)(Vi),
            buttonText: me.string,
            buttonUrl: me.string
        })
          , Ki = pe().shape({
            url: pe().string.isRequired,
            alt: pe().string.isRequired
        })
          , Xi = pe().shape({
            style: pe().string,
            icon: pe().shape({
                icon: Ki
            }),
            eyebrow: pe().string,
            headline: pe().string,
            bodyCopy: pe().string,
            linkUrl: pe().string,
            linkText: pe().string
        })
          , Ji = pe().shape({
            style: pe().string,
            items: pe().arrayOf(Xi)
        })
          , Qi = (pe().shape({
            tabTitle: pe().string,
            tabDescription: pe().string,
            tabs: pe().arrayOf(pe().shape({
                name: pe().string,
                tab: Yi,
                tabValueProps: Ji
            }))
        }),
        n(69983))
          , $i = n.n(Qi)
          , eo = pe().shape({
            icon: pe().string.isRequired,
            name: pe().string
        })
          , to = (pe().shape({
            headline: pe().string.isRequired,
            description: pe().string.isRequired,
            zipCodeModalText: pe().string.isRequired,
            logos: pe().arrayOf(eo).isRequired
        }),
        n(18946),
        de.createElement);
        function no(e) {
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
                } catch (qv) {
                    return !1
                }
            }();
            return function() {
                var n, a = (0,
                ut.Z)(e);
                if (t) {
                    var r = (0,
                    ut.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                ct.Z)(this, n)
            }
        }
        var ao = function(e) {
            (0,
            st.Z)(n, e);
            var t = no(n);
            function n() {
                return (0,
                ot.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            lt.Z)(n, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.model
                      , n = t.icon
                      , a = t.name
                      , r = e.className;
                    return to("div", {
                        className: "logo-wall--bug ".concat(r || "")
                    }, to("img", {
                        className: "lazyload",
                        "data-src": n,
                        alt: a
                    }))
                }
            }]),
            n
        }(de.Component)
          , ro = ao
          , io = function(e) {
            var t = e.parentClassName
              , n = e.wrapperClassName
              , a = e.logoClassName
              , r = e.shouldRandomize
              , i = e.logos;
            if (!i || i.length < 1)
                return null;
            var o = r ? $i()(i) : i;
            return to("div", {
                className: t
            }, to("div", {
                className: "row"
            }, o.map((function(e, t) {
                return to("div", {
                    key: t,
                    className: n
                }, to(ao, {
                    className: a,
                    model: e
                }))
            }
            ))))
        }
          , oo = (n(42360),
        de.createElement)
          , lo = function(e) {
            var t = e.model.image
              , n = (0,
            je.GO)({
                event_name: "media_with_text_link",
                component_id: (0,
                za.Fv)(ft()(e, "model.eyebrow")) || "media_with_text"
            }, (0,
            je.pS)("a", "media_with_text", "link"))
              , a = (0,
            je.GO)({
                event_name: "media_with_text_modal",
                component_id: (0,
                za.Fv)(ft()(e, "model.eyebrow")) || "media_with_text"
            }, (0,
            je.pS)("button", "media_with_text", "modal"))
              , r = function() {
                var t = e.model
                  , r = t.buttonText
                  , i = t.buttonUrl;
                return r ? oo("div", {
                    className: "text-media__button-wrapper"
                }, i ? oo(n, {
                    className: "text-media__link",
                    href: i,
                    onMouseDown: fe.W,
                    dangerouslySetInnerHTML: {
                        __html: r
                    }
                }) : oo(a, {
                    className: "text-media__button",
                    type: "button",
                    name: "view-channels",
                    "data-toggle": "modal",
                    "data-target": "#zip-modal",
                    onMouseDown: fe.W,
                    dangerouslySetInnerHTML: {
                        __html: r
                    }
                })) : null
            }
              , i = function() {
                var t = e.model.logos;
                return !t || t.length < 1 ? null : oo("div", {
                    className: "text-media__logos"
                }, oo("div", {
                    className: "row"
                }, t.map((function(e) {
                    return oo("div", {
                        key: "logoIcon_".concat(e.icon),
                        className: "text-media__logo-wrapper col-xs-3"
                    }, oo(ro, {
                        className: "text-media__logo",
                        model: e
                    }))
                }
                ))))
            };
            return oo(t ? function() {
                var t = e.model
                  , n = t.alignment
                  , a = t.image
                  , o = a.image_1x
                  , l = a.image_2x
                  , s = t.eyebrow
                  , c = t.headline
                  , u = t.body
                  , d = t.disclaimer
                  , m = t.id
                  , p = e.enableBrand
                  , f = oo("div", {
                    className: "text-media--".concat(n, " text-media--image col-lg-7 col-md-6 col-xs-12"),
                    key: "image"
                }, oo("img", {
                    className: "lazyload",
                    "data-src": o.url,
                    "data-srcset": "".concat(o.url, " 1x, ").concat(l.url, " 2x"),
                    role: "presentation",
                    alt: o.alt
                }))
                  , v = oo("div", {
                    className: "text-media--".concat(n, " col-lg-5 col-md-6 col-xs-12"),
                    key: "text"
                }, oo("div", {
                    className: "text-media--text"
                }, s && oo(xe.Z, {
                    as: "p",
                    variant: "eyebrow14",
                    className: "text-media--eyebrow"
                }, s), c && oo(xe.Z, {
                    as: "h3",
                    variant: "title32",
                    id: "regionMediaText",
                    className: "text-media--headline"
                }, c), u && oo(je.m7.div, {
                    className: "text-media--paragraph",
                    dangerouslySetInnerHTML: {
                        __html: u
                    }
                }), d && oo(je.m7.div, {
                    className: "text-media--disclaimer-top text-media--disclaimer section-disclaimer section-disclaimer--dark",
                    dangerouslySetInnerHTML: {
                        __html: d
                    }
                })), oo(i, null), oo(r, null))
                  , h = ue()("container-width", "text-media", "cu-text-media", {
                    "text-media--brand-enabled": p
                });
                return oo("div", {
                    className: h,
                    id: m,
                    role: "region",
                    "aria-labelledby": "regionMediaText"
                }, oo("div", {
                    className: "row"
                }, "left" === n ? [f, v] : [v, f]))
            }
            : function() {
                var t = e.model
                  , n = t.eyebrow
                  , a = t.headline
                  , r = t.body
                  , i = t.disclaimer
                  , o = t.id
                  , l = e.enableBrand
                  , s = ue()("container-width", "text-media", "text-media--no-image", {
                    "text-media--brand-enabled": l
                });
                return oo("div", {
                    className: s,
                    id: o
                }, oo("div", {
                    className: "text-media--text"
                }, n && oo(xe.Z, {
                    as: "p",
                    variant: "eyebrow14",
                    className: "text-media--eyebrow"
                }, n), a && oo(xe.Z, {
                    as: "h3",
                    variant: "title32",
                    className: "text-media--headline"
                }, a), r && oo(je.m7.div, {
                    className: "text-media--paragraph",
                    dangerouslySetInnerHTML: {
                        __html: r
                    }
                }), i && oo(je.m7.div, {
                    className: "text-media--disclaimer-top text-media--disclaimer section-disclaimer section-disclaimer--dark",
                    dangerouslySetInnerHTML: {
                        __html: i
                    }
                })))
            }
            , null)
        }
          , so = (n(81650),
        de.createElement);
        function co(e) {
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
                } catch (qv) {
                    return !1
                }
            }();
            return function() {
                var n, a = (0,
                ut.Z)(e);
                if (t) {
                    var r = (0,
                    ut.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                ct.Z)(this, n)
            }
        }
        var uo = function(e) {
            (0,
            st.Z)(n, e);
            var t = co(n);
            function n(e) {
                var a;
                return (0,
                ot.Z)(this, n),
                (a = t.call(this, e)).hashScrollTo = a.hashScrollTo.bind((0,
                bt.Z)(a)),
                a
            }
            return (0,
            lt.Z)(n, [{
                key: "hashScrollTo",
                value: function() {
                    var e = this.props.model
                      , t = (e = void 0 === e ? {} : e).linkUrl;
                    this.isHashLink && Te.scroller.scrollTo(t.replace("#", ""), {
                        duration: 500,
                        delay: 100,
                        smooth: !0,
                        offset: -76
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.model
                      , n = t.style
                      , a = t.icon
                      , r = t.eyebrow
                      , i = t.headline
                      , o = t.bodyCopy
                      , l = t.linkUrl
                      , s = t.linkText
                      , c = e.uniqueKey
                      , u = (0,
                    je.pS)(je.m7.a, "value_prop_".concat(c + 1), "click");
                    return this.isHashLink = l && l.startsWith("#"),
                    so("div", {
                        className: "value-prop--item ".concat(n),
                        role: "region",
                        "aria-label": "".concat(i || r),
                        "data-automationid": "value_prop_item_".concat(c)
                    }, a && so("div", {
                        className: "value-prop--item-image",
                        "data-automationid": "value_prop_item_image"
                    }, so("img", {
                        "data-src": a.url,
                        className: "value-prop--icon lazyload",
                        alt: a.alt
                    })), so("div", {
                        className: "value-prop--item-details"
                    }, r && so(je.m7.span, {
                        className: "value-prop--eyebrow",
                        dangerouslySetInnerHTML: {
                            __html: r
                        },
                        "data-automationid": "value_prop_eyebrow"
                    }), i && so(je.m7.h2, {
                        className: "value-prop--headline",
                        dangerouslySetInnerHTML: {
                            __html: i
                        },
                        "data-automationid": "value_prop_headline"
                    }), o && so(je.m7.div, {
                        className: "value-prop--body-copy",
                        dangerouslySetInnerHTML: {
                            __html: o
                        },
                        "data-automationid": "value_prop_body"
                    }), l && so(u, (0,
                    we.Z)({}, (0,
                    se.Z)({}, this.isHashLink ? "data-target" : "href", l), {
                        className: "value-prop--link-option",
                        dangerouslySetInnerHTML: {
                            __html: s
                        },
                        onClick: this.hashScrollTo,
                        "data-automationid": "value_prop_link_option"
                    }))))
                }
            }]),
            n
        }(de.Component)
          , mo = (n(33059),
        de.createElement);
        function po(e) {
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
                } catch (qv) {
                    return !1
                }
            }();
            return function() {
                var n, a = (0,
                ut.Z)(e);
                if (t) {
                    var r = (0,
                    ut.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                ct.Z)(this, n)
            }
        }
        var fo = function(e) {
            (0,
            st.Z)(n, e);
            var t = po(n);
            function n() {
                return (0,
                ot.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            lt.Z)(n, [{
                key: "render",
                value: function() {
                    var e = this.props.model
                      , t = e.items
                      , n = e.style;
                    return mo("div", {
                        id: "value-props",
                        className: "value-props--wrapper cu-value-props",
                        style: n,
                        "data-automationid": "value_props"
                    }, mo("div", {
                        className: "content container-width"
                    }, t && t.map((function(e, t) {
                        return mo(uo, {
                            key: t,
                            model: e,
                            uniqueKey: t
                        })
                    }
                    ))))
                }
            }]),
            n
        }(de.Component)
          , vo = (n(45306),
        de.createElement);
        function ho(e) {
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
                } catch (qv) {
                    return !1
                }
            }();
            return function() {
                var n, a = (0,
                ut.Z)(e);
                if (t) {
                    var r = (0,
                    ut.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                ct.Z)(this, n)
            }
        }
        var go = function(e) {
            (0,
            st.Z)(n, e);
            var t = ho(n);
            function n(e) {
                var a, r;
                return (0,
                ot.Z)(this, n),
                (r = t.call(this, e)).state = {
                    activeBarWidth: 0,
                    activeBarLeft: 0,
                    mobileLeft: 0,
                    selected: 0
                },
                r.switchTab = (a = r).switchTab.bind(a),
                r.handleStartTouch = (a = r).handleStartTouch.bind(a),
                r.handleEndTouch = (a = r).handleEndTouch.bind(a),
                r.startX = 0,
                r.startY = 0,
                r.distX = 0,
                r.distY = 0,
                r.threshold = 50,
                r.restraint = 25,
                r.allowedTime = 300,
                r.elapsedTime = 0,
                r.startTime = 0,
                r
            }
            return (0,
            lt.Z)(n, [{
                key: "componentDidMount",
                value: function() {
                    this.switchTab(0)
                }
            }, {
                key: "handleStartTouch",
                value: function(e) {
                    var t = e.changedTouches[0];
                    this.dist = 0,
                    this.startX = t.pageX,
                    this.startY = t.pageY,
                    this.startTime = (new Date).getTime()
                }
            }, {
                key: "handleEndTouch",
                value: function(e) {
                    var t = this.state.selected
                      , n = this.props.model
                      , a = e.changedTouches[0];
                    if (this.distX = a.pageX - this.startX,
                    this.distY = a.pageY - this.startY,
                    this.elapsedTime = (new Date).getTime() - this.startTime,
                    this.elapsedTime <= this.allowedTime && Math.abs(this.distX) >= this.threshold && Math.abs(this.distY) <= this.restraint) {
                        var r = t + 1
                          , i = t - 1;
                        this.distX < 0 ? n.tabs.length - 1 !== t && ((0,
                        ve.JW)("change_tab", "change_tab", "swipe"),
                        this.switchTab(r, "swipe")) : t > 0 && ((0,
                        ve.JW)("change_tab", "change_tab", "swipe"),
                        this.switchTab(i, "swipe"))
                    }
                }
            }, {
                key: "switchTab",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "click";
                    if (this.contentTabs) {
                        var n = this.contentTabs.getElementsByTagName("span")[e]
                          , a = n.offsetLeft;
                        this.setState({
                            activeBarWidth: n.offsetWidth,
                            activeBarLeft: a
                        }),
                        this.resetTabs(e, t)
                    }
                }
            }, {
                key: "resetTabs",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "click"
                      , n = "tabs_".concat(t);
                    (0,
                    ve.DS)({
                        event_name: n,
                        tab_number: e + 1
                    }),
                    this.setState({
                        selected: e
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props.model
                      , n = t.tabs
                      , a = t.tabTitle
                      , r = t.tabDescription
                      , i = this.state
                      , o = i.selected
                      , l = i.activeBarWidth
                      , s = i.activeBarLeft
                      , c = {
                        width: "".concat(100 * n.length, "%")
                    }
                      , u = {
                        width: "".concat(l, "px"),
                        transform: "translateX(".concat(s, "px)")
                    };
                    return vo("div", {
                        className: "content-tabs cu-content-tabs",
                        id: "tabs"
                    }, vo("div", {
                        className: "content-tabs--info"
                    }, vo("h2", {
                        className: "container-width section-headline"
                    }, a), Boolean(r) && vo(je.m7.div, {
                        className: "content-tabs--description",
                        dangerouslySetInnerHTML: {
                            __html: r
                        }
                    })), vo("div", {
                        className: "content-tabs--tabs-wrapper"
                    }, vo("div", {
                        className: "content-tabs--scroll"
                    }, vo("div", {
                        className: "content-tabs--outer-container"
                    }, vo("div", {
                        className: "content-tabs--active-bar",
                        style: u
                    }), vo("div", {
                        className: "content-tabs--inner-container",
                        ref: function(t) {
                            return e.contentTabs = t
                        }
                    }, n && n.map((function(t, n) {
                        var a = (0,
                        je.pS)("span", "tabs_".concat(n + 1), "change_tab");
                        return vo("div", {
                            key: n,
                            className: "content-tabs--tab ".concat(o === n ? "active" : "")
                        }, vo(a, {
                            onClick: function() {
                                return e.switchTab(n)
                            }
                        }, t.name))
                    }
                    )))))), vo("div", {
                        className: "content-tabs--content-wrapper"
                    }, vo("div", {
                        className: "content-tabs--content-panes",
                        style: c,
                        onTouchStart: function(t) {
                            return e.handleStartTouch(t)
                        },
                        onTouchEnd: function(t) {
                            return e.handleEndTouch(t)
                        }
                    }, n && n.map((function(e, t) {
                        return vo("div", {
                            key: t,
                            className: "content-tabs--content-pane ".concat(o === t ? "active" : "")
                        }, e.tab && vo(lo, {
                            model: e.tab,
                            should_preload: !0
                        }), e.tabValueProps && vo(fo, {
                            model: e.tabValueProps
                        }))
                    }
                    )))))
                }
            }]),
            n
        }(de.Component)
          , _o = (pe().shape({
            anchorHash: pe().string,
            anchorCopy: pe().string
        }),
        n(98468))
          , bo = (n(41202),
        de.createElement);
        function yo(e) {
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
                } catch (qv) {
                    return !1
                }
            }();
            return function() {
                var n, a = (0,
                ut.Z)(e);
                if (t) {
                    var r = (0,
                    ut.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                ct.Z)(this, n)
            }
        }
        var wo = function(e) {
            (0,
            st.Z)(n, e);
            var t = yo(n);
            function n(e) {
                return (0,
                ot.Z)(this, n),
                t.call(this, e)
            }
            return (0,
            lt.Z)(n, [{
                key: "mastheadScrollTo",
                value: function() {
                    var e = this.props.model;
                    Te.scroller.scrollTo(e.anchorHash.replace("#", ""), {
                        duration: 500,
                        delay: 100,
                        smooth: !0,
                        offset: -76,
                        activeClass: "active"
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props.model.anchorCopy
                      , n = Boolean(t)
                      , a = t ? "Scroll to ".concat(t) : "Scroll down"
                      , r = (0,
                    je.GO)({
                        event_name: "masthead_arrow"
                    }, "button");
                    return bo("div", {
                        className: "Anchor"
                    }, Boolean(t) && bo(je.m7.div, {
                        className: "Anchor__copy",
                        dangerouslySetInnerHTML: {
                            __html: t.toUpperCase()
                        }
                    }), bo(r, {
                        onClick: function() {
                            return e.mastheadScrollTo()
                        },
                        className: "button-link ".concat(n ? "Anchor__circle--transparent" : "Anchor__circle"),
                        "aria-label": a,
                        "data-automationid": "anchor_circle"
                    }, bo("img", {
                        src: "".concat(_o.assetPrefix, "static/icons/").concat(n ? "arrow_down.svg" : "masthead-scroll.svg"),
                        alt: a
                    })))
                }
            }]),
            n
        }(de.Component)
          , No = de.createElement;
        function ko(e) {
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
                } catch (qv) {
                    return !1
                }
            }();
            return function() {
                var n, a = (0,
                ut.Z)(e);
                if (t) {
                    var r = (0,
                    ut.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                ct.Z)(this, n)
            }
        }
        var So = function(e) {
            (0,
            st.Z)(n, e);
            var t = ko(n);
            function n(e) {
                return (0,
                ot.Z)(this, n),
                t.call(this, e)
            }
            return (0,
            lt.Z)(n, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.model
                      , n = t.isAnchorInside
                      , a = t.content
                      , r = t.anchor
                      , i = e.locale
                      , o = e.enableBrand
                      , l = e.asPath
                      , s = e.geodata
                      , c = a.type
                      , u = Bv(c);
                    return n ? No(u, {
                        model: a,
                        locale: i,
                        enableBrand: o,
                        asPath: l,
                        geodata: s
                    }, No(wo, {
                        model: r
                    })) : No("div", {
                        className: "Anchor__container"
                    }, No(u, {
                        model: a,
                        locale: i,
                        enableBrand: o,
                        asPath: l,
                        geodata: s
                    }), No(wo, {
                        model: r
                    }))
                }
            }]),
            n
        }(de.Component)
          , xo = function(e) {
            return e && e.content ? Fv(e.content.type, e.content) : null
        }
          , To = {
            ribbonImage: pe().string,
            eyebrow: pe().string,
            buttonLink: pe().string,
            buttonStyle: pe().string,
            buttonText: pe().string,
            legalModalId: pe().string,
            legalLink: pe().string,
            legalText: pe().string,
            mainTextDt: pe().string,
            mainTextMobile: pe().string,
            learnMore: pe().string,
            learnText: pe().string
        };
        function Oo(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function Eo(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Oo(Object(n), !0).forEach((function(t) {
                    (0,
                    se.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Oo(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var Po = (0,
        me.shape)({
            path: me.string,
            accent: (0,
            me.shape)({
                hue: me.number
            })
        })
          , Co = (0,
        me.shape)({
            items: [me.string],
            truncatedItems: [me.string]
        })
          , Do = (0,
        me.shape)({
            items: [me.string],
            truncatedItems: [me.string],
            prefix: me.string,
            seoSchemaProp: me.string
        })
          , Zo = Eo({
            avFeatures: [Co],
            brandArtwork: Po,
            description: me.string,
            credits: [Do],
            entityId: me.string,
            entityType: me.string,
            headline: me.array,
            play: me.func,
            tags: me.array,
            title: me.string.isRequired,
            titleArtwork: Po,
            updateDetailEntity: me.func,
            verticalTileArtwork: Po
        }, Ee)
          , Io = ((0,
        me.shape)(Eo(Eo({}, Zo), {}, {
            backgroundArtwork: Po,
            brandArtwork: Po,
            ribbon: To
        })),
        de.createElement)
          , Mo = function(e) {
            var t = e.brandArtwork
              , n = e.isMobileDisplay;
            if (!t)
                return null;
            var a = (0,
            dn.Jn)(t.path, {
                width: 200,
                height: 200,
                format: "webp"
            });
            return Io("div", {
                className: "DetailEntityMasthead__brand".concat(n ? " --mobile" : " --desktop")
            }, Io("img", {
                className: "DetailEntityMasthead__brand-img",
                src: a,
                role: "presentation"
            }))
        }
          , Ao = de.createElement
          , Lo = function(e) {
            var t = e.imageUrls
              , n = e.title
              , a = e.brandArtwork
              , r = de.createRef()
              , i = Ln(r)
              , o = i.isLoaded
              , l = i.hasError;
            return Ao("h1", {
                id: "regionDetailMasthead",
                className: "DetailEntityMasthead__title"
            }, t ? function() {
                var e = ue()("DetailEntityMasthead__title-art", {
                    "DetailEntityMasthead__title-art--loaded": o
                })
                  , a = ue()("DetailEntityMasthead__title__text", {
                    "DetailEntityMasthead__title__text--fade-in": l
                });
                return Ao("div", {
                    className: e
                }, Ao("picture", {
                    className: "DetailEntityMasthead__title-art__image"
                }, Ao("source", {
                    media: "(min-width: 1280px)",
                    srcSet: "".concat(t.large, " 1x, ").concat(t.large_retina, " 2x")
                }), Ao("source", {
                    media: "(min-width: 1024px)",
                    srcSet: "".concat(t.medium, " 1x, ").concat(t.medium_retina, " 2x")
                }), Ao("img", {
                    ref: r,
                    src: t.small,
                    srcSet: "".concat(t.small, " 1x, ").concat(t.small_retina, " 2x"),
                    alt: n,
                    "aria-label": n,
                    role: "presentation"
                })), Ao("span", {
                    className: a
                }, n))
            }() : Ao("span", null, n), Ao(Mo, {
                brandArtwork: a,
                isMobileDisplay: !0
            }))
        }
          , Ro = ((0,
        me.shape)({
            ctaText: me.string,
            ctaUrl: me.string,
            infoLine: me.string,
            disableInfo: me.bool,
            ctaDownloadAppText: me.string
        }),
        n(45312),
        de.createElement);
        function jo(e) {
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
                } catch (qv) {
                    return !1
                }
            }();
            return function() {
                var n, a = (0,
                ut.Z)(e);
                if (t) {
                    var r = (0,
                    ut.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                ct.Z)(this, n)
            }
        }
        var Ho = function(e) {
            (0,
            st.Z)(n, e);
            var t = jo(n);
            function n(e) {
                var a;
                (0,
                ot.Z)(this, n);
                var r = (a = t.call(this, e)).props
                  , i = r.ctaDownloadAppText
                  , o = r.isOriginalContent
                  , l = r.disableInfo
                  , s = r.contentType
                  , c = r.premiereDate
                  , u = r.user.isHuluUser;
                return a.redirect = a.redirect.bind((0,
                bt.Z)(a)),
                a.shouldShowDownloadAppLink = u && (0,
                Xr.mobileDetect)().mobile() && i,
                a.isHuluUpcoming = (0,
                za.vx)(c) && o,
                a.disableMoreInfo = l || a.isHuluUpcoming,
                a.upcomingTitle = s === he.MOVIE ? he.HULU_UPCOMING_MOVIE_TITLE : he.HULU_UPCOMING_SERIES_TITLE,
                a.state = {
                    positionBottom: !1
                },
                a
            }
            return (0,
            lt.Z)(n, [{
                key: "redirect",
                value: function() {
                    var e = this.props
                      , t = e.ctaUrl
                      , n = e.user
                      , a = e.ctaFields
                      , r = e.network
                      , i = e.requirePremium
                      , o = {
                        user: n,
                        componentUrl: t,
                        ctaFields: a,
                        from: (0,
                        Ae.QM)(i, r)
                    };
                    this.shouldShowDownloadAppLink ? window.location.assign((0,
                    Re.cv)()) : (0,
                    Re.AU)(o)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.ctaText
                      , n = e.infoLine
                      , a = e.ctaDownloadAppText
                      , r = e.premiereDate
                      , i = e.user
                      , o = e.ctaFields
                      , l = e.locale
                      , s = e.isActive
                      , c = {
                        user: i,
                        componentNonSubCta: t,
                        locale: l,
                        ctaFields: o
                    }
                      , u = this.shouldShowDownloadAppLink ? a : (0,
                    Ae.V6)(c)
                      , d = (0,
                    je.GO)({
                        event_name: (0,
                        Le.vl)(i, this.shouldShowDownloadAppLink),
                        cta_placement: "toaster"
                    }, (0,
                    je.pS)(He.Z, "cta_toaster"))
                      , m = ue()("Toaster", {
                        "Toaster--active": s
                    });
                    return Ro("div", {
                        className: m
                    }, Ro("div", {
                        className: "Toaster__scrim"
                    }, Ro(d, {
                        useStyle: "black",
                        className: "Toaster__button",
                        onClick: this.redirect
                    }, !this.disableMoreInfo && Ro("p", {
                        className: "Toaster__info"
                    }, n), this.isHuluUpcoming && Ro("p", {
                        className: "Toaster__info Toaster__info--upcoming"
                    }, "".concat(this.upcomingTitle, " ").concat((0,
                    za.QM)(r))), Ro("p", {
                        className: "Toaster__text"
                    }, u))))
                }
            }]),
            n
        }(de.Component)
          , Uo = n(84179)
          , Bo = (n(55230),
        de.createElement)
          , Fo = (0,
        je.GO)({
            event_name: "ribbon_link",
            component_id: "ribbon"
        }, (0,
        je.pS)(He.Z, "ribbon_link"))
          , qo = (0,
        je.GO)({
            event_name: "ribbon_terms",
            component_id: "ribbon"
        }, (0,
        je.pS)("a", "ribbon", "link"))
          , Go = (0,
        je.GO)({
            event_name: "ribbon_more_details",
            component_id: "ribbon"
        }, (0,
        je.pS)("a", "ribbon", "modal"))
          , Wo = function(e) {
            var t = e.model
              , n = t.ribbonImage
              , a = t.eyebrow
              , r = t.mainTextDt
              , i = t.mainTextMobile
              , o = t.learnMore
              , l = t.learnText
              , s = t.buttonLink
              , c = t.buttonStyle
              , u = t.buttonText
              , d = t.legalModalId
              , m = t.legalLink
              , p = t.legalText
              , f = t.backgroundStyle;
            if (!n)
                return null;
            var v = "#".concat(o)
              , h = ue()("Ribbon", {
                "Ribbon--black-transparent": "blackTransparent" === f
            });
            return Bo("div", {
                className: h
            }, Bo("div", {
                className: "row"
            }, Bo("div", {
                className: "Ribbon__hide-xs col-xs-0 col-md-4 col-lg-3"
            }, Bo("img", {
                className: "Ribbon__brand-img",
                src: n,
                role: "presentation",
                "data-automationid": "Ribbon_brand_img"
            })), Bo("div", {
                className: "col-xs-12 col-sm-12 col-md-5 col-lg-7 Ribbon__info"
            }, a && Bo(xe.Z, {
                as: "div",
                variant: "eyebrow12",
                className: "Ribbon__eyebrow",
                "data-automationid": "Ribbon_eyebrow",
                dangerouslySetInnerHTML: {
                    __html: a
                }
            }), Bo("img", {
                className: "Ribbon__brand-img-mobile",
                src: n,
                role: "presentation"
            }), Bo("div", {
                className: "Ribbon__details-container"
            }, r && Bo(xe.Z, {
                as: "span",
                variant: "body24",
                className: "Ribbon--showdt",
                "data-automationid": "Ribbon_showdt",
                dangerouslySetInnerHTML: {
                    __html: r
                }
            }), i && Bo(xe.Z, {
                as: "span",
                variant: "body14",
                className: "Ribbon--showmobile",
                "data-automationid": "Ribbon_showmobile",
                dangerouslySetInnerHTML: {
                    __html: i
                }
            }), o && Bo("div", {
                className: "Ribbon__learn"
            }, Bo(Go, {
                href: v,
                name: "view-ribbon-more-details",
                "data-toggle": "modal",
                "data-target": "#".concat(o),
                onMouseDown: fe.W,
                "aria-label": "Additional Details about promotion",
                dangerouslySetInnerHTML: {
                    __html: l
                },
                "data-automationid": "Ribbon_learn_link"
            })))), Bo("div", {
                className: "col-xs-12 col-sm-12 col-md-3 col-lg-2 Ribbon__button"
            }, Bo("div", {
                className: "Ribbon__button-container"
            }, s && Bo("div", {
                className: "Ribbon__button-item"
            }, Bo(Fo, {
                className: "Ribbon__cta-button",
                useStyle: c,
                href: s,
                onMouseDown: fe.W,
                onClick: function() {
                    return e = s,
                    void window.location.assign(e);
                    var e
                },
                "aria-label": "Purchase the current promotion",
                "data-automationid": "Ribbon_cta_button"
            }, u)), !d && m && Bo("div", {
                className: "Ribbon__button-terms"
            }, Bo(qo, {
                className: "Ribbon__legal_modal",
                name: "view-ribbon-terms",
                href: m,
                dangerouslySetInnerHTML: {
                    __html: p
                },
                "aria-label": "Legal Terms that apply to the promotion",
                "aria-describedby": "new-window-activate",
                target: "_blank",
                "data-automationid": "Ribbon_button_terms_link"
            }), Bo("div", {
                className: "hidden"
            }, Bo("span", {
                id: "new-window-activate"
            }, "Opens in a new window"))), d && Bo("div", {
                className: "Ribbon__button-terms"
            }, Bo(qo, {
                className: "Ribbon__legal_modal",
                name: "view-ribbon-terms",
                "data-toggle": "modal",
                "data-target": "#".concat(d),
                onMouseDown: fe.W,
                dangerouslySetInnerHTML: {
                    __html: p
                },
                "aria-label": "Legal Terms that apply to the promotion",
                "data-automationid": "Ribbon_button_terms_link"
            }))))))
        }
          , zo = de.createElement
          , Vo = function() {
            return zo("svg", {
                className: "Logo fill",
                viewBox: "0 0 61 20",
                role: "img",
                "aria-labelledby": "logoTitle"
            }, zo("title", {
                id: "logoTitle"
            }, "hulu"), zo("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M6.43658 6.24088H9.52263C12.568 6.24088 15 7.64811 15 11.3048V20H10.1882V11.9297C10.1882 11.2157 9.61239 10.6377 8.8997 10.6377H6.09974C5.38818 10.6377 4.8104 11.2157 4.8104 11.9297V20H0V0H4.8104V6.53351C4.8104 6.53351 5.35452 6.24088 6.43658 6.24088ZM42 20H37V0H42V20ZM27.8997 15.5262C28.612 15.5262 29.1886 14.9378 29.1886 14.2105V6H34V14.6201C34 17.7904 32.1981 19.9748 29.1886 19.9748V20H24.478C21.2108 20 19 18.1434 19 14.6201V6H23.8114V14.2105C23.8114 14.9378 24.3877 15.5262 25.1003 15.5262H27.8997ZM56.1885 6V14.2105C56.1885 14.9378 55.6121 15.5262 54.9 15.5262H52.1011C51.3884 15.5262 50.8121 14.9378 50.8121 14.2105V6H46V14.6201C46 18.1434 48.2106 20 51.4782 20H56.189V19.9748C59.1983 19.9748 61 17.7904 61 14.6201V6H56.1885Z"
            }))
        }
          , Yo = (n(23361),
        de.createElement)
          , Ko = function(e) {
            var t = e.avFeatures
              , n = e.brandArtwork
              , a = e.contentOverrides
              , r = e.credits
              , i = e.ctaDownloadAppText
              , o = e.ctaFields
              , l = e.ctaText
              , s = e.ctaUrl
              , c = e.description
              , u = e.disclaimer
              , d = e.entityType
              , m = e.genres
              , p = e.headline
              , f = e.isHuluOriginal
              , v = e.isHuluOriginalContent
              , h = e.isOriginalContent
              , g = e.legalText
              , _ = e.locale
              , b = e.network
              , y = e.premiereDate
              , w = e.rating
              , N = e.requirePremium
              , k = e.ribbon
              , S = e.tags
              , x = e.title
              , T = e.titleArtwork
              , O = e.user
              , E = de.createRef()
              , P = de.createRef()
              , C = (0,
            de.useState)(!1)
              , D = C[0]
              , Z = C[1];
            (0,
            de.useEffect)((function() {
                var e = function() {
                    var e, t = null === (e = P.current) || void 0 === e ? void 0 : e.getBoundingClientRect().top;
                    Z(t < 0 || t > window.innerHeight)
                };
                return window.addEventListener("scroll", e),
                function() {
                    return window.removeEventListener("scroll", e)
                }
            }
            ), []);
            var I = (0,
            Xr.mobileDetect)().mobile()
              , M = O.isHuluUser && I && i
              , A = (0,
            je.GO)({
                event_name: (0,
                Le.vl)(O, M),
                cta_placement: "detailEntity"
            }, (0,
            je.pS)(He.Z, "cta_detailEntity"))
              , L = Yo(de.Fragment, null, Yo(xe.Z, {
                breakpoints: {
                    xs: "body12",
                    lg: "body14"
                },
                className: "DetailEntityMasthead__description-truncated"
            }, (null === a || void 0 === a ? void 0 : a.overrideDescription) || c), Yo("span", null, Yo("a", {
                type: "button",
                role: "button",
                tabIndex: "0",
                className: "DetailEntityMasthead__description-read-more",
                ref: E,
                onKeyDown: (0,
                fe.P)((function() {
                    var e;
                    return null === (e = E.current) || void 0 === e ? void 0 : e.click()
                }
                )),
                onMouseDown: fe.W,
                name: "view-description",
                "data-toggle": "modal",
                "data-target": "#description-modal",
                "data-events": "utag",
                "data-utag-object": "event_name:detail_entity_read_more"
            }, "more")));
            return Yo("div", null, Yo("div", {
                className: "DetailEntityMasthead__entity"
            }, Yo("div", {
                className: "DetailEntityMasthead__meta"
            }, function() {
                var e = function() {
                    var e = "Coming ".concat((0,
                    za.QM)(y));
                    v && (e = "Original ".concat(" \u2022 ", " ").concat(e));
                    var t = p.join(" \u2022 ");
                    return (0,
                    za.vx)(y) && h ? e : t
                }();
                return e ? Yo("div", {
                    className: "DetailEntityMasthead__headline"
                }, f && Yo(Vo, null), Yo(xe.Z, {
                    breakpoints: {
                        xs: "subtitle10Caps",
                        md: "subtitle12Caps"
                    }
                }, e)) : null
            }(), Yo(Lo, {
                imageUrls: T ? (0,
                dn.f7)(T.path, he.TITLE_ART_SIZES, "webp", !0) : void 0,
                title: (null === a || void 0 === a ? void 0 : a.overrideName) || x,
                brandArtwork: n
            }), Yo(xe.Z, {
                as: "p",
                breakpoints: {
                    xs: "body12",
                    lg: "body14"
                },
                className: "DetailEntityMasthead__description"
            }, L), Yo(xe.Z, {
                as: "p",
                breakpoints: {
                    xs: "body14"
                },
                className: "DetailEntityMasthead__description-mobile"
            }, function() {
                var e = (null === a || void 0 === a ? void 0 : a.overrideDescription) || c;
                return (null === e || void 0 === e ? void 0 : e.length) > 65 ? Yo(de.Fragment, null, e.substring(0, 65), "...", Yo("a", {
                    type: "button",
                    role: "button",
                    tabIndex: "0",
                    className: "DetailEntityMasthead__description-read-more",
                    ref: E,
                    onKeyDown: (0,
                    fe.P)((function() {
                        var e;
                        return null === (e = E.current) || void 0 === e ? void 0 : e.click()
                    }
                    )),
                    onMouseDown: fe.W,
                    name: "view-description",
                    "data-toggle": "modal",
                    "data-target": "#description-modal",
                    "data-events": "utag",
                    "data-utag-object": "event_name:detail_entity_read_more"
                }, "More")) : Yo(de.Fragment, null, e)
            }(null === a || void 0 === a || a.overrideDescription)), Yo(Fa, {
                avFeatures: t,
                className: "DetailEntityMasthead__tags",
                credits: r,
                entityType: d,
                genres: m,
                rating: w,
                tags: S,
                showAvInline: !0,
                truncateCredits: !0
            }), Yo("p", {
                className: ue()("DetailEntityMasthead__disclaimer", {
                    "DetailEntityMasthead__disclaimer--premium": (0,
                    La.W_)(b)
                }),
                dangerouslySetInnerHTML: {
                    __html: u
                }
            }), Yo("div", {
                className: "DetailEntityMasthead__buttonSection",
                ref: P
            }, Yo(A, {
                className: "DetailEntityMasthead__cta",
                useStyle: "white",
                onClick: function() {
                    M ? window.location.assign((0,
                    Re.cv)()) : (0,
                    Re.AU)({
                        user: O,
                        componentUrl: s,
                        ctaFields: o,
                        from: (0,
                        Ae.QM)(N, b)
                    })
                }
            }, M ? i : (0,
            Ae.V6)({
                user: O,
                componentNonSubCta: l,
                locale: _,
                ctaFields: o
            }))), Yo("p", {
                className: "DetailEntityMasthead__legalText",
                dangerouslySetInnerHTML: {
                    __html: g
                }
            })), Yo(Uo.view, {
                model: {
                    id: "description-modal"
                },
                className: "description-modal"
            }, Yo("div", {
                className: "DetailEntityModal"
            }, Yo(xe.Z, {
                as: "h2",
                breakpoints: {
                    xs: "title14",
                    md: "title26",
                    lg: "title24"
                },
                className: "DetailEntityModal__title"
            }, (null === a || void 0 === a ? void 0 : a.overrideName) || x), Yo(xe.Z, {
                as: "p",
                breakpoints: {
                    xs: "body12",
                    md: "body14",
                    lg: "body16"
                },
                className: "DetailEntityModal__description"
            }, (null === a || void 0 === a ? void 0 : a.overrideDescription) || c), Yo(Fa, {
                avFeatures: t,
                className: "DetailEntityModal__tags",
                credits: r,
                entityType: d,
                genres: m,
                rating: w,
                tags: S
            })))), Yo(Wo, {
                model: k
            }), Yo(Ho, (0,
            we.Z)({}, e, {
                isActive: D
            })))
        }
          , Xo = (n(76270),
        de.createElement);
        function Jo(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function Qo(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Jo(Object(n), !0).forEach((function(t) {
                    (0,
                    se.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Jo(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function $o(e) {
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
                } catch (qv) {
                    return !1
                }
            }();
            return function() {
                var n, a = (0,
                ut.Z)(e);
                if (t) {
                    var r = (0,
                    ut.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                ct.Z)(this, n)
            }
        }
        var el = .7
          , tl = .63
          , nl = 7e-5
          , al = 1
          , rl = 1e-4
          , il = .5
          , ol = .9
          , ll = function(e) {
            (0,
            st.Z)(n, e);
            var t = $o(n);
            function n(e) {
                var a;
                return (0,
                ot.Z)(this, n),
                (a = t.call(this, e)).state = {
                    shouldDisplayGradient: !1
                },
                a.removeGenericGradient = a.removeGenericGradient.bind((0,
                bt.Z)(a)),
                a.addGenericGradient = a.addGenericGradient.bind((0,
                bt.Z)(a)),
                a.imageRef = de.createRef(),
                a
            }
            return (0,
            lt.Z)(n, [{
                key: "hsla",
                value: function(e) {
                    var t = (0,
                    cn.Z)(e, 3)
                      , n = t[0]
                      , a = t[1]
                      , r = t[2]
                      , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    return "hsla(".concat(n, ", ").concat(a, "%, ").concat(r, "%, ").concat(i, ")")
                }
            }, {
                key: "getBackgroundBaseStyle",
                value: function(e, t) {
                    if (t) {
                        var n = this.hsla(e, el)
                          , a = this.hsla(e, tl)
                          , r = this.hsla(e, nl);
                        return {
                            background: "linear-gradient(0deg, ".concat(n, " 25.69%, ").concat(a, " 36.24%, ").concat(r, " 70.07%)")
                        }
                    }
                    var i = this.hsla(e, 1);
                    return {
                        backgroundColor: "".concat(i)
                    }
                }
            }, {
                key: "removeGenericGradient",
                value: function() {
                    this.setState({
                        shouldDisplayGradient: !1
                    })
                }
            }, {
                key: "addGenericGradient",
                value: function() {
                    this.setState({
                        shouldDisplayGradient: !0
                    })
                }
            }, {
                key: "getBackgroundArtStyle",
                value: function(e, t, n, a) {
                    if (!t)
                        return {};
                    var r, i = this.hsla(e, 0), o = this.hsla(e, 1), l = "linear-gradient(80deg, ".concat(o, " 10%, ").concat(i, " 20%)"), s = "linear-gradient(0deg, ".concat(o, " 10%, ").concat(i, " 40%)"), c = {}, u = [];
                    return n ? (u = [l, s],
                    c = {
                        opacity: .4
                    }) : u = [l],
                    a && (r = {
                        filter: "blur(".concat(a, "px)")
                    }),
                    Qo(Qo({
                        backgroundImage: u.join(", "),
                        left: "auto"
                    }, c), r)
                }
            }, {
                key: "getBackgroundArt",
                value: function(e, t, n, a, r, i) {
                    var o = this.props.className
                      , l = i ? he.DETAIL_MASTHEAD__WITH_RIBBON_BACKGROUND_VERTICAL_SIZES : he.DETAIL_MASTHEAD_BACKGROUND_VERTICAL_SIZES
                      , s = (0,
                    dn.f7)(ft()(r, "path"), l, "webp")
                      , c = (0,
                    dn.f7)(ft()(t, "path"), he.MASTHEAD_HORIZONTAL_SIZES, "webp")
                      , u = Qo(Qo({}, s), c);
                    return Xo("div", {
                        className: "".concat(o, "__art"),
                        style: this.getBackgroundArtStyle(e, t, n, a)
                    }, Xo("picture", {
                        className: "".concat(o, "__picture")
                    }, Xo("source", {
                        media: "(min-width: 1600px)",
                        srcSet: "".concat(u.xxlarge, " 1x, ").concat(u.xxlarge_retina, " 2x")
                    }), Xo("source", {
                        media: "(min-width: 1280px)",
                        srcSet: "".concat(u.xlarge, " 1x, ").concat(u.xlarge_retina, " 2x")
                    }), Xo("source", {
                        media: "(min-width: 1024px)",
                        srcSet: "".concat(u.large, " 1x, ").concat(u.large_retina, " 2x")
                    }), Xo("source", {
                        media: "(min-width: 768px)",
                        srcSet: "".concat(u.medium, " 1x, ").concat(u.medium_retina, " 2x")
                    }), Xo("img", {
                        className: "".concat(o, "__image"),
                        src: u.small,
                        srcSet: "".concat(u.small, " 1x, ").concat(u.small_retina, " 2x"),
                        role: "presentation",
                        onError: this.addGenericGradient,
                        onLoad: this.removeGenericGradient,
                        ref: this.imageRef
                    })))
                }
            }, {
                key: "getBackgroundColorStyle",
                value: function() {
                    return {}
                }
            }, {
                key: "getBackgroundOverlayStyle",
                value: function() {
                    return {}
                }
            }, {
                key: "getBackgroundGradientStyle",
                value: function(e, t) {
                    var n = this.hsla(e, 0)
                      , a = this.hsla(e, 1);
                    if (t) {
                        var r = this.hsla(e, il)
                          , i = this.hsla(e, al);
                        return n = this.hsla(e, rl),
                        a = this.hsla(e, ol),
                        {
                            background: "linear-gradient(179.79deg, ".concat(n, " .18%, ").concat(r, " 32.87%, ").concat(a, " 64.43%, ").concat(i, " 99.82%)")
                        }
                    }
                    return {
                        backgroundImage: "linear-gradient(245deg, ".concat(n, " 35%, ").concat(a, " 70%)")
                    }
                }
            }, {
                key: "getBackgroundScrimStyle",
                value: function() {
                    return {
                        opacity: .35,
                        backgroundImage: ["linear-gradient(5deg, #000 0%, transparent 50%)", "radial-gradient(ellipse at top right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 20%)"].join(", ")
                    }
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    var e = this.imageRef.current;
                    e && e.complete && e.naturalWidth > 0 || this.addGenericGradient()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.artwork
                      , n = e.editorial
                      , a = e.className
                      , r = e.blurAmount
                      , i = e.isMobileView
                      , o = e.mobileArtwork
                      , l = e.withRibbon
                      , s = this.state.shouldDisplayGradient
                      , c = {
                        h: i ? ft()(o, "hue", 0) : ft()(t, "hue", 0),
                        s: 50,
                        l: 40
                    }
                      , u = [c.h, c.s, c.l];
                    return Xo("div", {
                        className: "".concat(a, "__wrapper")
                    }, Xo("div", {
                        className: "".concat(a, "__base"),
                        style: this.getBackgroundBaseStyle(u, i)
                    }), this.getBackgroundArt(u, t, n, r, o, l), Xo("div", {
                        className: "".concat(a, "__color"),
                        style: this.getBackgroundColorStyle()
                    }), Xo("div", {
                        className: "".concat(a, "__overlay"),
                        style: this.getBackgroundOverlayStyle()
                    }), Xo("div", {
                        className: "".concat(a, "__gradient"),
                        style: s && i ? {
                            background: "linear-gradient(135deg, rgb(42, 65, 140) 0%, rgb(161, 116, 149) 50%, rgb(219, 159, 133) 100%)"
                        } : this.getBackgroundGradientStyle(u, i)
                    }), Xo("div", {
                        className: "".concat(a, "__scrim"),
                        style: this.getBackgroundScrimStyle()
                    }))
                }
            }]),
            n
        }(de.Component);
        ll.defaultProps = {
            imageWidth: 1280,
            editorial: !1,
            className: "DetailEntityBackground"
        };
        var sl, cl = ll, ul = (n(67154),
        de.createElement), dl = function(e) {
            var t = e.model
              , n = t.backgroundArtwork
              , a = t.brandArtwork
              , r = t.network
              , i = t.requirePremium
              , o = t.verticalTileArtwork
              , l = t.ribbon
              , s = (0,
            Rn.Z)(t, ["backgroundArtwork", "brandArtwork", "network", "requirePremium", "verticalTileArtwork", "ribbon"])
              , c = e.play
              , u = e.updateDetailEntity
              , d = e.user
              , m = e.ctaFields
              , p = e.locale
              , f = e.contentOverrides
              , v = (0,
            un.w)().windowSize.width < 768
              , h = null === l || void 0 === l ? void 0 : l.ribbonImage;
            u({
                network: r,
                requirePremium: i
            });
            var g = ue()("DetailEntityMasthead", "cu-masthead", {
                "DetailEntityMasthead--with-ribbon": h
            });
            return ul("div", {
                className: g,
                role: "region",
                "aria-labelledby": "regionDetailMasthead"
            }, ul(cl, {
                artwork: n,
                imageWidth: 1400,
                isMobileView: v,
                mobileArtwork: o
            }), ul(Mo, {
                brandArtwork: a,
                isMobileDisplay: !1
            }), ul(Ko, (0,
            we.Z)({}, s, {
                play: c,
                brandArtwork: a,
                user: d,
                ctaFields: m,
                locale: p,
                network: r,
                requirePremium: i,
                ribbon: l,
                contentOverrides: f
            })))
        }, ml = n(86375), pl = n(25596), fl = (sl = {},
        (0,
        se.Z)(sl, ml.F, pl.Z),
        (0,
        se.Z)(sl, $r, ii),
        (0,
        se.Z)(sl, Ye, $e),
        (0,
        se.Z)(sl, Ge, Ve),
        sl), vl = (0,
        ye.connect)((function(e) {
            return {
                user: e.user,
                ctaFields: e[Ge]
            }
        }
        ), (function(e) {
            return {
                updateDetailEntity: function(t) {
                    return e(ti(t))
                }
            }
        }
        ))(dl), hl = pe().shape({
            description: pe().string,
            icon: pe().shape({
                url: pe().string
            }),
            name: pe().string
        }), gl = (pe().shape({
            description: pe().string,
            headline: pe().string,
            disclaimer: pe().string,
            devices: pe().arrayOf(hl)
        }),
        n(51010),
        de.createElement), _l = function(e) {
            var t = e.model
              , n = t.description
              , a = t.icon
              , r = t.name;
            return gl("div", null, gl("img", {
                className: "lazyload",
                "data-src": a.url,
                role: "presentation"
            }), gl(xe.Z, {
                as: "p",
                variant: "body16",
                className: "supported-devices--device-title"
            }, r), gl(xe.Z, {
                as: "p",
                variant: "body12",
                className: "supported-devices--device-subtitle"
            }, n))
        }, bl = (n(41190),
        de.createElement), yl = function(e) {
            var t = e.model
              , n = t.description
              , a = t.devices
              , r = t.disclaimer
              , i = t.headline
              , o = (0,
            Xr.mobileDetect)().mobile()
              , l = a.length;
            return bl("div", {
                className: "supported-devices ".concat(o ? "mobile" : "", " cu-devices"),
                id: "devices",
                role: "region",
                "aria-labelledby": "regionDevice",
                "data-automationid": "supported_devices"
            }, bl("div", {
                className: "supported-devices--header section-header white"
            }, bl(xe.Z, {
                as: "h2",
                variant: "title32",
                className: "section-headline supported-devices--headline white",
                id: "regionDevice",
                "data-automationid": "supported_devices_headline"
            }, i), bl("div", {
                className: "supported-devices--description",
                "data-automationid": "supported_devices_description"
            }, n && bl(je.m7.p, {
                dangerouslySetInnerHTML: {
                    __html: n
                }
            }))), bl("div", {
                className: "supported-devices--list container-width",
                "data-automationid": "supported_devices_list"
            }, bl("section", {
                role: "list",
                "aria-label": "Supported Devices",
                className: "row justify-content-center"
            }, a && a.map((function(e, t) {
                return bl("div", {
                    key: t,
                    role: "listitem",
                    className: "supported-devices--list-item col-xs-6 col-md-3 col-lg-2\n                    ".concat(t % 5 === 0 && l - t > 5 ? "offset-lg-1" : ""),
                    "data-automationid": "supported_devices_list_item"
                }, bl(_l, {
                    model: e
                }))
            }
            )))), bl("div", {
                className: "supported-devices--disclaimer section-disclaimer"
            }, r && bl(je.m7.p, {
                dangerouslySetInnerHTML: {
                    __html: r
                }
            })))
        }, wl = (pe().shape({
            unsubHeadline: pe().string,
            unsubDescription: pe().string,
            resubHeadline: pe().string,
            resubDescription: pe().string,
            errorHeadline: pe().string,
            errorDescription: pe().string,
            resubscribeCtaText: pe().string,
            backCtaText: pe().string
        }),
        n(85370),
        de.createElement);
        function Nl(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function kl(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Nl(Object(n), !0).forEach((function(t) {
                    (0,
                    se.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Nl(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var Sl = function(e) {
            var t = e.model
              , n = t.unsubHeadline
              , a = t.unsubDescription
              , r = t.resubHeadline
              , i = t.resubDescription
              , o = t.errorHeadline
              , l = t.errorDescription
              , s = t.resubscribeCtaText
              , c = t.backCtaText
              , u = e.query
              , d = "//assetshuluimcom-a.akamaihd.net/h3o/icons/Envelope_Unsubscribe.gif"
              , m = "//assetshuluimcom-a.akamaihd.net/h3o/icons/Envelope_Subscribe.gif"
              , p = (0,
            za.aj)(null === u || void 0 === u ? void 0 : u.user_id)
              , f = (0,
            de.useState)({
                headline: n,
                description: a,
                displayResubscribeCta: !0,
                backCtaStyle: he.CTA_BUTTON_STYLES.BLACK_OUTLINE,
                envelopeGIF: d,
                isLoading: !1
            })
              , v = f[0]
              , h = f[1];
            (0,
            de.useEffect)((function() {
                function e() {
                    return (e = (0,
                    Se.Z)(ke().mark((function e() {
                        var t;
                        return ke().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = "/api/email/updateNotifications/".concat(p, "?notifyNews=false"),
                                    e.next = 3,
                                    fetch(t, {
                                        method: "PUT"
                                    });
                                case 3:
                                    e.sent.status !== he.STATUS_CODES.OK && _();
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))).apply(this, arguments)
                }
                (new Image).src = d,
                (new Image).src = m,
                function() {
                    e.apply(this, arguments)
                }()
            }
            ), []);
            var g = function() {
                var e = (0,
                Se.Z)(ke().mark((function e() {
                    var t;
                    return ke().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return h(kl(kl({}, v), {}, {
                                    isLoading: !0
                                })),
                                t = "/api/email/updateNotifications/".concat(p, "?notifyNews=true"),
                                e.next = 4,
                                fetch(t, {
                                    method: "PUT"
                                });
                            case 4:
                                e.sent.status === he.STATUS_CODES.OK ? b() : _();
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }()
              , _ = function() {
                h(kl(kl({}, v), {}, {
                    headline: o,
                    description: l,
                    displayResubscribeCta: !1,
                    backCtaStyle: he.CTA_BUTTON_STYLES.BLACK,
                    isLoading: !1
                }))
            }
              , b = function() {
                h(kl(kl({}, v), {}, {
                    headline: r,
                    description: i,
                    displayResubscribeCta: !1,
                    backCtaStyle: he.CTA_BUTTON_STYLES.BLACK,
                    envelopeGIF: m,
                    isLoading: !1
                }))
            }
              , y = v.headline
              , w = v.description
              , N = v.displayResubscribeCta
              , k = v.backCtaStyle
              , S = v.envelopeGIF
              , x = v.isLoading;
            return wl("div", {
                className: "EmailUnsubscribe"
            }, wl("div", {
                className: "EmailUnsubscribe__container"
            }, wl("img", {
                className: "EmailUnsubscribe__image",
                src: S,
                alt: "envelope GIF",
                role: "presentation"
            }), wl("div", {
                className: "EmailUnsubscribe__inner-container"
            }, wl(xe.Z, {
                as: "p",
                breakpoints: {
                    xs: "title24"
                },
                className: "EmailUnsubscribe__headline"
            }, y), wl(xe.Z, {
                as: "p",
                breakpoints: {
                    xs: "body16"
                },
                className: "EmailUnsubscribe__description"
            }, w), N && wl(He.Z, {
                className: "EmailUnsubscribe__resubscribe",
                useStyle: he.CTA_BUTTON_STYLES.BLACK,
                onClick: g
            }, x ? wl("div", {
                className: "EmailUnsubscribe__loading",
                "aria-label": "loading icon",
                role: "presentation"
            }) : s), wl(He.Z, {
                className: "EmailUnsubscribe__back",
                useStyle: k,
                onClick: function() {
                    window.location.assign("/welcome")
                }
            }, c))))
        }
          , xl = pe().shape({
            question: pe().string,
            answer: pe().string,
            index: pe().number
        })
          , Tl = (pe().shape({
            headline: pe().string,
            description: pe().string,
            faqs: pe().arrayOf(xl)
        }),
        n(48258))
          , Ol = de.createElement
          , El = function(e) {
            var t = (0,
            de.useState)(!1)
              , n = t[0]
              , a = t[1]
              , r = e.model
              , i = r.index
              , o = r.question
              , l = r.answer
              , s = function() {
                a(!n),
                !1 === n && ((0,
                Tl.fireUserInteraction)("view_faq_".concat(i + 1), "click", "click"),
                (0,
                Tl.fireUtagLink)({
                    event_name: "view_faq",
                    faq_number: "".concat(i + 1)
                }))
            };
            return Ol("li", null, Ol("div", {
                className: "accordion__item ".concat(n ? "open" : "")
            }, Ol("a", {
                className: "accordion__link",
                role: "button",
                "aria-label": "".concat(o, " Learn more"),
                tabIndex: "0",
                onClick: s,
                onKeyDown: (0,
                fe.P)(s),
                onMouseDown: fe.W
            }, Ol(xe.Z, {
                as: "h3",
                variant: "body18",
                className: "accordion__question"
            }, o), Ol("div", {
                className: "accordion__icon"
            })), Ol(je.m7.div, {
                className: "section-body",
                dangerouslySetInnerHTML: {
                    __html: l
                }
            })))
        }
          , Pl = (n(81836),
        de.createElement)
          , Cl = function(e) {
            var t = e.model
              , n = t.headline
              , a = t.description
              , r = t.faqs
              , i = e.enableBrand
              , o = ue()({
                "accordion__headline--brand": i
            });
            return Pl("div", {
                className: "accordion cu-faq",
                id: "faq",
                role: "region",
                "aria-labelledby": "regionFAQ"
            }, Pl("div", {
                className: "container-width"
            }, Pl("div", {
                className: "accordion__header"
            }, Pl(xe.Z, {
                className: o,
                as: "h2",
                variant: "title32",
                id: "regionFAQ"
            }, n), Pl(je.m7.div, {
                className: "accordion__description",
                dangerouslySetInnerHTML: {
                    __html: a
                }
            }), Pl("div", {
                className: "accordion__list"
            }, Pl("ul", null, r && r.map((function(e, t) {
                return Pl(El, {
                    key: t,
                    model: e
                })
            }
            )))))))
        }
          , Dl = (pe().shape({
            id: pe().string.isRequired,
            title: pe().string.isRequired,
            description: pe().string
        }),
        n(39981),
        de.createElement)
          , Zl = function(e) {
            var t = e.model
              , n = t.id
              , a = t.title
              , r = t.description
              , i = e.pageType === he.PAGETYPE.sitemapPage
              , o = ue()("headline__wrapper", {
                "headline__wrapper--sitemap": i
            });
            return Dl("div", {
                id: n,
                className: o,
                role: "region",
                "aria-labelledby": "regionHeadline"
            }, Dl("div", {
                className: i ? "container-width" : "container-width--small"
            }, a && Dl("h2", {
                className: "section-headline",
                dangerouslySetInnerHTML: {
                    __html: a
                },
                id: "regionHeadline"
            }), r && Dl("div", {
                className: "headline--description",
                dangerouslySetInnerHTML: {
                    __html: r
                }
            })))
        }
          , Il = (n(59097),
        de.createElement)
          , Ml = function(e) {
            var t = e.model.title;
            return Il("div", {
                className: "hub-nav cu-hubspan"
            }, Il(xe.Z, {
                as: "h1",
                variant: "title48",
                className: "hub-nav__title"
            }, t))
        }
          , Al = pe().shape({
            tabName: pe().string,
            sectionName: pe().string,
            collectionItems: pe().arrayOf(Wa)
        })
          , Ll = (pe().shape({
            tabs: pe().arrayOf(Al)
        }),
        n(6749),
        de.createElement);
        function Rl(e) {
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
                } catch (qv) {
                    return !1
                }
            }();
            return function() {
                var n, a = (0,
                ut.Z)(e);
                if (t) {
                    var r = (0,
                    ut.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                ct.Z)(this, n)
            }
        }
        var jl = function(e) {
            (0,
            st.Z)(n, e);
            var t = Rl(n);
            function n(e) {
                var a;
                (0,
                ot.Z)(this, n),
                (a = t.call(this, e)).initialTab = 0;
                var r = a.props
                  , i = r.query.tab
                  , o = r.model.tabIds
                  , l = "string" === typeof i && i.toLowerCase();
                return i && o.includes(l) && (a.initialTab = parseInt(o.indexOf(l), 10)),
                a
            }
            return (0,
            lt.Z)(n, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.model
                      , n = t.tabIds
                      , a = t.tabs
                      , r = e.asPath;
                    return Ll("div", {
                        className: "HubTabs"
                    }, Ll(Hr, {
                        tabType: "collection",
                        shouldCenterTabTitles: !0,
                        initialTab: this.initialTab,
                        onSelected: function(e) {
                            var t = "".concat(r, "?tab=").concat(n[e]);
                            history.pushState({}, null, t)
                        }
                    }, a && a.map((function(e) {
                        var t = ft()(e, "tabName")
                          , n = ft()(e, "collectionItems")
                          , a = ft()(e, "tabId")
                          , i = "".concat(r, "?tab=").concat(a);
                        return Ll(Fr, {
                            key: a,
                            title: t,
                            hrefPath: i
                        }, Ll("div", {
                            className: "HubTabs__collections"
                        }, n && n.map((function(e, t) {
                            return Ll(Xa, {
                                model: e,
                                key: t
                            })
                        }
                        ))))
                    }
                    ))))
                }
            }]),
            n
        }(de.Component)
          , Hl = (n(82009),
        de.createElement)
          , Ul = function(e) {
            var t = e.poster
              , n = t.eyebrow
              , a = t.headline
              , r = t.isLibraryPosterAutomated
              , i = t.contentTitle
              , o = t.image || {}
              , l = o.alt
              , s = void 0 === l ? "" : l
              , c = o.title
              , u = void 0 === c ? "" : c
              , d = o.url
              , m = void 0 === d ? "" : d
              , p = o.brandUrl
              , f = void 0 === p ? "" : p
              , v = o.brand
              , h = void 0 === v ? "" : v
              , g = o.hue
              , _ = {
                h: void 0 === g ? 0 : g,
                s: 50,
                l: 40
            }
              , b = [_.h, _.s, _.l];
            return Hl("div", {
                className: "library__item-wrapper library__item-wrapper--automated"
            }, Hl("div", {
                className: "library__item-gradient"
            }), r && Hl("div", {
                className: "library__item-scrim",
                style: function() {
                    var e = function(e) {
                        var t = (0,
                        cn.Z)(e, 3)
                          , n = t[0]
                          , a = t[1]
                          , r = t[2]
                          , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                        return "hsla(".concat(n, ", ").concat(a, "%, ").concat(r, "%, ").concat(i, ")")
                    }(b, 1);
                    return {
                        opacity: 1,
                        background: "linear-gradient(0deg, ".concat(e, ", transparent)"),
                        position: "absolute"
                    }
                }()
            }), Hl("img", {
                className: "library__item-background lazyload",
                src: m,
                alt: s
            }), Hl("div", {
                className: "library__item-overlay"
            }, Hl(xe.Z, {
                as: "span",
                breakpoints: {
                    sm: "eyebrow12"
                },
                className: "library__item-eyebrow",
                "data-automationid": "library_item_eyebrow"
            }, n.toUpperCase()), Hl(xe.Z, {
                as: "h3",
                breakpoints: {
                    sm: "title32"
                },
                className: "library__item-category",
                "data-automationid": "library_item_category",
                style: {
                    fontWeight: 600
                }
            }, a), Hl(xe.Z, {
                as: "h4",
                breakpoints: {
                    sm: "body14"
                },
                className: "library__item-title"
            }, u || i)), f && Hl("img", {
                src: f,
                className: "library__item-background-brand-logo",
                alt: h,
                role: "presentation"
            }))
        }
          , Bl = n(73935)
          , Fl = function(e) {
            var t = e.children
              , n = e.selector
              , a = (0,
            de.useRef)()
              , r = (0,
            de.useState)(!1)
              , i = r[0]
              , o = r[1];
            return (0,
            de.useEffect)((function() {
                a.current = document.querySelector(n),
                o(!0)
            }
            ), [n]),
            i ? (0,
            Bl.createPortal)(t, a.current) : null
        }
          , ql = n(96486)
          , Gl = n(65988)
          , Wl = (n(17485),
        de.createElement);
        function zl(e) {
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
                } catch (qv) {
                    return !1
                }
            }();
            return function() {
                var n, a = (0,
                ut.Z)(e);
                if (t) {
                    var r = (0,
                    ut.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                ct.Z)(this, n)
            }
        }
        var Vl = function(e) {
            (0,
            st.Z)(n, e);
            var t = zl(n);
            function n() {
                return (0,
                ot.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            lt.Z)(n, [{
                key: "render",
                value: function() {
                    if (!this.props.image)
                        return null;
                    var e = this.props
                      , t = e.image
                      , n = t.desktop
                      , a = t.tablet
                      , r = t.mobile
                      , i = e.identifier
                      , o = e.mobileFirst
                      , l = "linear-gradient(0deg,transparent 60%,rgba(0,0,0,0.2) 90%,rgba(0,0,0,0.4) 100%)"
                      , s = o ? 768 : 441
                      , c = o ? 1024 : 769;
                    return Wl("div", {
                        className: Gl.default.dynamic([["1040954343", [i, l, null === r || void 0 === r ? void 0 : r.url, s, i, l, null === a || void 0 === a ? void 0 : a.url, c, i, l, null === n || void 0 === n ? void 0 : n.url]]])
                    }, Wl("picture", {
                        className: Gl.default.dynamic([["1040954343", [i, l, null === r || void 0 === r ? void 0 : r.url, s, i, l, null === a || void 0 === a ? void 0 : a.url, c, i, l, null === n || void 0 === n ? void 0 : n.url]]]) + " hidden"
                    }, Wl("source", {
                        media: "(min-width: ".concat(c, "px)"),
                        srcSet: null === n || void 0 === n ? void 0 : n.url,
                        className: Gl.default.dynamic([["1040954343", [i, l, null === r || void 0 === r ? void 0 : r.url, s, i, l, null === a || void 0 === a ? void 0 : a.url, c, i, l, null === n || void 0 === n ? void 0 : n.url]]])
                    }), Wl("source", {
                        media: "(min-width: ".concat(s, "px)"),
                        srcSet: null === a || void 0 === a ? void 0 : a.url,
                        className: Gl.default.dynamic([["1040954343", [i, l, null === r || void 0 === r ? void 0 : r.url, s, i, l, null === a || void 0 === a ? void 0 : a.url, c, i, l, null === n || void 0 === n ? void 0 : n.url]]])
                    }), Wl("source", {
                        media: "(min-width: 0px)",
                        srcSet: null === r || void 0 === r ? void 0 : r.url,
                        className: Gl.default.dynamic([["1040954343", [i, l, null === r || void 0 === r ? void 0 : r.url, s, i, l, null === a || void 0 === a ? void 0 : a.url, c, i, l, null === n || void 0 === n ? void 0 : n.url]]])
                    }), Wl("img", {
                        alt: "preloading masthead",
                        className: Gl.default.dynamic([["1040954343", [i, l, null === r || void 0 === r ? void 0 : r.url, s, i, l, null === a || void 0 === a ? void 0 : a.url, c, i, l, null === n || void 0 === n ? void 0 : n.url]]]) + " hidden"
                    })), Wl(Gl.default, {
                        id: "1040954343",
                        dynamic: [i, l, null === r || void 0 === r ? void 0 : r.url, s, i, l, null === a || void 0 === a ? void 0 : a.url, c, i, l, null === n || void 0 === n ? void 0 : n.url]
                    }, ["@media only screen and (min-width:0px){.ImageBackground--image".concat(i, ".__jsx-style-dynamic-selector{background-image:").concat(l, ",url(").concat(r.url, ");}}"), "@media only screen and (min-width:".concat(s, "px){.ImageBackground--image").concat(i, ".__jsx-style-dynamic-selector{background-image:").concat(l, ",url(").concat(a.url, ");}}"), "@media only screen and (min-width:".concat(c, "px){.ImageBackground--image").concat(i, ".__jsx-style-dynamic-selector{background-image:").concat(l, ",url(").concat(n.url, ");}}")]), Wl("div", {
                        className: Gl.default.dynamic([["1040954343", [i, l, null === r || void 0 === r ? void 0 : r.url, s, i, l, null === a || void 0 === a ? void 0 : a.url, c, i, l, null === n || void 0 === n ? void 0 : n.url]]]) + " " + "ImageBackground ImageBackground--image".concat(i)
                    }))
                }
            }]),
            n
        }(de.Component);
        function Yl() {
            var e = (0,
            rr.Z)(['\n  query {\n    piece(type: "collectionsModal", id: "', '") {\n      model {\n        ', "\n      }\n    }\n  }\n  ", "\n  ", "\n"]);
            return Yl = function() {
                return e
            }
            ,
            e
        }
        var Kl = function(e) {
            return (0,
            ir.gql)(Yl(), e, "... on CollectionsModalPiece {\n  backgroundImage\n  collectionItems {\n    headline\n    description\n    collection {\n      ...collectionsModalCollectionFields\n    }\n  }\n  copyTitle\n  copyDescription\n  landscapeVideo\n  portraitVideo\n  title\n  __typename\n}", "fragment collectionsModalCollectionFields on Collection {\n  id\n  href\n  name\n  theme\n  enabledTileLinks\n  enableSignupModal\n  items {\n    ...collectionsModalEntityFields\n  }\n}", "fragment collectionsModalEntityFields on Entity {\n  genres\n  href\n  name\n  premiereDate\n  rating\n  type\n  artwork {\n    horizontalProgramTile {\n      path\n    }\n    watermark {\n      path\n    }\n  }\n}")
        }
          , Xl = function(e) {
            return (0,
            or.useQuery)(["collectionsModal", e], (0,
            Se.Z)(ke().mark((function t() {
                var n, a;
                return ke().wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2,
                            (0,
                            ir.request)("/hookup", Kl(e));
                        case 2:
                            return a = t.sent,
                            t.abrupt("return", null === a || void 0 === a || null === (n = a.piece) || void 0 === n ? void 0 : n.model);
                        case 4:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            ))), {
                enabled: Boolean(e),
                cacheTime: 6e5,
                refetchOnMount: !1,
                refetchOnWindowFocus: !1
            })
        }
          , Jl = de.createElement
          , Ql = function(e) {
            var t = e.brandUrl
              , n = e.copyDescription
              , a = e.copyTitle;
            return Jl("div", {
                className: "modal__copy modal__copy--automation"
            }, Jl(xe.Z, {
                as: "h3",
                breakpoints: {
                    xs: "title32",
                    md: "title48"
                },
                className: "modal__copy--title"
            }, a), Jl("div", {
                className: "modal__copy--flex-box--automation"
            }, Jl("div", {
                className: "modal__copy--description--automation"
            }, Jl(xe.Z, {
                as: "p",
                breakpoints: {
                    xs: "body16",
                    md: "body18"
                },
                className: "modal__copy--description"
            }, n)), Jl("div", {
                className: "modal__copy--brand-logo--automation"
            }, t && Jl("img", {
                src: t,
                role: "presentation",
                className: "modal__copy--brand-logo"
            }))))
        }
          , $l = n(23493)
          , es = n.n($l)
          , ts = (n(41394),
        de.createElement);
        function ns(e) {
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
                } catch (qv) {
                    return !1
                }
            }();
            return function() {
                var n, a = (0,
                ut.Z)(e);
                if (t) {
                    var r = (0,
                    ut.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                ct.Z)(this, n)
            }
        }
        var as = function(e) {
            (0,
            st.Z)(n, e);
            var t = ns(n);
            function n(e) {
                var a, r;
                return (0,
                ot.Z)(this, n),
                (r = t.call(this, e)).state = {
                    isLandscape: !0,
                    videoDimensions: null
                },
                r.checkResize = (a = r).checkResize.bind(a),
                r
            }
            return (0,
            lt.Z)(n, [{
                key: "componentDidMount",
                value: function() {
                    this.checkResize(),
                    window && window.addEventListener("resize", es()(this.checkResize, 500))
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    window && window.removeEventListener("resize", this.checkResize)
                }
            }, {
                key: "getVideoDimensions",
                value: function() {
                    var e = window
                      , t = e.innerWidth
                      , n = e.innerHeight
                      , a = 1.7777777777777777
                      , r = n * a + 200
                      , i = n + 200;
                    return t / n > a && (r = t,
                    i = t / a),
                    {
                        width: r,
                        height: i,
                        opacity: 1
                    }
                }
            }, {
                key: "checkResize",
                value: function() {
                    var e = this.props.inModal
                      , t = window && window.innerWidth / window.innerHeight
                      , n = e ? window && window.innerWidth >= 768 : .5625 < t
                      , a = e ? null : this.getVideoDimensions();
                    this.setState({
                        isLandscape: n,
                        videoDimensions: a
                    })
                }
            }, {
                key: "useVideo916",
                value: function() {
                    return 9 / 16 >= (window && window.innerWidth / window.innerHeight)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.landscapeVideo
                      , n = e.portraitVideo
                      , a = e.inModal
                      , r = this.state
                      , i = r.isLandscape
                      , o = r.videoDimensions
                      , l = i ? t : n
                      , s = ue()("MastheadVideo__video", {
                        "MastheadVideo__video--landscape": i,
                        "MastheadVideo__video--portrait": !i,
                        "lazyload lazypreload": a
                    });
                    return ts("div", {
                        className: "MastheadVideo"
                    }, l && ts("iframe", {
                        src: "".concat(l, "?background=1&autoplay=1&loop=1&byline=0&title=0"),
                        frameBorder: "0",
                        webkitallowfullscreen: "true",
                        mozallowfullscreen: "true",
                        allowFullScreen: !0,
                        className: s,
                        style: o,
                        key: l
                    }))
                }
            }]),
            n
        }(de.Component)
          , rs = (n(65497),
        n(70434),
        de.createElement);
        function is(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        var os = function(e) {
            var t, n = e.collectionsModalId, a = e.close, r = e.collectionModalUrlObject, i = e.arePostersAutomated, o = e.brandUrl, l = Xl(n), s = l.data, c = l.isFetching, u = [], d = null !== s && void 0 !== s ? s : {}, m = d.collectionItems, p = d.backgroundImage, f = d.portraitVideo, v = d.landscapeVideo, h = d.title, g = d.copyTitle, _ = d.copyDescription;
            return c || (u = null === m || void 0 === m ? void 0 : m.map((function(e) {
                var t;
                return function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? is(Object(n), !0).forEach((function(t) {
                            (0,
                            se.Z)(e, t, n[t])
                        }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : is(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }
                        ))
                    }
                    return e
                }({
                    title: null === e || void 0 === e || null === (t = e.collection) || void 0 === t ? void 0 : t.name
                }, e)
            }
            ))),
            rs(Uo.Modalv2, {
                className: "CollectionsModal",
                title: h,
                close: a,
                arePostersAutomated: i
            }, !c && rs(de.Fragment, null, rs("div", {
                className: "modal__content"
            }, rs(Vl, {
                image: (0,
                ql.isEmpty)(r) ? p : r,
                brandUrl: o,
                identifier: "0",
                mobileFirst: !0
            }), rs(as, {
                landscapeVideo: v,
                portraitVideo: f,
                inModal: !0
            }), i ? rs(Ql, {
                brandUrl: o,
                copyDescription: _,
                copyTitle: g
            }) : rs("div", {
                className: "modal__copy"
            }, rs(xe.Z, {
                as: "h3",
                breakpoints: {
                    xs: "title32",
                    md: "title48"
                },
                className: "modal__copy--title"
            }, g), rs(xe.Z, {
                as: "p",
                breakpoints: {
                    xs: "body16",
                    md: "body18"
                },
                className: "modal__copy--description"
            }, _)), rs("div", {
                className: "modal__scrim"
            })), rs("div", {
                className: "modal__collections"
            }, null === (t = u) || void 0 === t ? void 0 : t.map((function(e, t) {
                return (null === e || void 0 === e ? void 0 : e.collection) && rs(Xa, {
                    model: e,
                    key: t
                })
            }
            )))))
        }
          , ls = de.createElement
          , ss = function(e) {
            var t = e.poster
              , n = e.arePostersAutomated
              , a = t.eyebrow
              , r = t.headline
              , i = t.modalId
              , o = t.collectionsModalId
              , l = t.disclaimer
              , s = t.image || {}
              , c = s.alt
              , u = void 0 === c ? "" : c
              , d = s.url
              , m = void 0 === d ? "" : d
              , p = s.collectionModalUrlObject
              , f = void 0 === p ? {} : p
              , v = s.brandUrl
              , h = void 0 === v ? "" : v
              , g = (0,
            de.useState)(!1)
              , _ = g[0]
              , b = g[1]
              , y = (0,
            de.useRef)(null);
            return ls(de.Fragment, null, ls("div", {
                className: "library__grid-item",
                "data-automationid": "library_grid_item_shows_modal_".concat(i),
                style: n ? {
                    margin: "0 auto",
                    textAlign: "center"
                } : null
            }, ls("button", {
                onClick: function() {
                    (0,
                    ve.DS)({
                        event_name: "click_".concat(i, "_tile")
                    }),
                    (0,
                    ve.JW)("default", "collection_tile:modal:open", "click", !1, r),
                    b(!0)
                },
                "data-target": o ? null : "#".concat(i),
                ref: y
            }, n ? ls(Ul, {
                poster: t
            }) : ls("div", {
                className: "library__item-wrapper"
            }, ls("div", {
                className: "library__item-gradient"
            }), ls("img", {
                className: "library__item-background",
                src: m,
                alt: u
            }), ls("div", {
                className: "library__item-overlay"
            }, ls(xe.Z, {
                as: "span",
                breakpoints: {
                    xs: "subtitle12",
                    lg: "subtitle16"
                },
                className: "library__item-eyebrow",
                "data-automationid": "library_item_eyebrow"
            }, a), ls(xe.Z, {
                as: "h3",
                breakpoints: {
                    xs: "title16",
                    lg: "title24"
                },
                className: "library__item-category",
                "data-automationid": "library_item_category"
            }, r)))), l && ls(xe.Z, {
                as: "span",
                className: "library__item-legal section-disclaimer",
                variant: "body10"
            }, l)), _ && o && ls(Fl, {
                selector: "#modal"
            }, ls(os, {
                collectionsModalId: o,
                arePostersAutomated: n,
                collectionModalUrlObject: f,
                brandUrl: h,
                close: function() {
                    return (0,
                    ve.JW)("default", "collection_tile:modal:close", "click", !1, r),
                    b(!1),
                    void y.current.focus()
                }
            })))
        }
          , cs = de.createElement
          , us = function(e) {
            var t = e.model
              , n = t.eyebrow
              , a = t.headline
              , r = t.subHeadline
              , i = t.hasHoverEffectRoundedCorners
              , o = t.posters
              , l = ue()("library__grid-container", {
                "poster--hover-rounded-corners": i
            })
              , s = o.some((function(e) {
                return e.isLibraryPosterAutomated
            }
            ));
            return cs("div", {
                id: "library",
                className: "library"
            }, cs("div", {
                className: "library__header"
            }, cs("div", {
                className: "library__content"
            }, cs(xe.Z, {
                as: "span",
                breakpoints: {
                    xs: "eyebrow12",
                    lg: "eyebrow14"
                },
                className: "library__eyebrow",
                "data-automationid": "library_eyebrow"
            }, n), cs(xe.Z, {
                as: "h2",
                breakpoints: {
                    xs: "title32",
                    md: "title48"
                },
                className: "library__title",
                "data-automationid": "library_title"
            }, a), cs(xe.Z, {
                as: "p",
                breakpoints: {
                    xs: "body16",
                    lg: "body18"
                },
                className: "library__description",
                "data-automationid": "library_description"
            }, r))), cs("div", {
                className: l
            }, cs("div", {
                className: "library__grid"
            }, o.map((function(e, t) {
                return cs(ss, {
                    key: "poster-".concat(t),
                    poster: e,
                    arePostersAutomated: s
                })
            }
            )))))
        }
          , ds = (0,
        me.shape)({
            name: me.string,
            href: me.string
        })
          , ms = ((0,
        me.shape)({
            title: me.string,
            viewAllUrl: me.string,
            urlFormat: me.string,
            items: (0,
            me.arrayOf)(ds)
        }),
        n(98804),
        de.createElement)
          , ps = function(e) {
            var t = e.items
              , n = e.pageType
              , a = e.urlFormat;
            return ms("div", {
                className: "ListCardItem"
            }, t.map((function(e) {
                var t = ft()(e, "name", "")
                  , r = ft()(e, "href", "");
                if (!t || !r)
                    return null;
                if (a) {
                    var i = r.split("/")
                      , o = ft()(i, "[2]") || ft()(i, "[0]");
                    o && (r = a.replace(/{{canonicalUrl}}/g, o))
                }
                var l = n ? "".concat(r, "?lp_referrer=").concat(n.toLowerCase()) : r;
                return ms("div", {
                    key: t,
                    className: "ListCardItem__item"
                }, ms("a", {
                    href: l,
                    title: t
                }, ms(xe.Z, {
                    variant: "body16"
                }, t)))
            }
            )))
        }
          , fs = (n(23574),
        de.createElement)
          , vs = function(e) {
            var t = e.model
              , n = t.title
              , a = t.viewAllUrl
              , r = t.urlFormat
              , i = t.items
              , o = e.pageType;
            return fs("div", {
                className: "ListCard"
            }, fs("div", {
                className: "ListCard__container container-width"
            }, fs("div", {
                className: "ListCard__content"
            }, fs("div", {
                className: "ListCard__header"
            }, fs(xe.Z, {
                className: "ListCard__header__title",
                variant: "title18"
            }, n), a && fs("a", {
                href: a
            }, fs("span", {
                className: "ListCard__header__viewAll"
            }, fs(xe.Z, {
                variant: "label12",
                className: "ListCard__header__viewAll__text"
            }, "View all"), fs("span", {
                className: "ListCard__header__viewAll__arrow"
            })))), i && fs(ps, {
                items: i,
                pageType: o,
                urlFormat: r
            }))))
        }
          , hs = n(16153)
          , gs = n(4249)
          , _s = n.n(gs)
          , bs = n(11752)
          , ys = n(5152)
          , ws = n(9008)
          , Ns = (pe().shape({
            manifest: pe().string,
            serviceworker: pe().string,
            nonsubWarning: pe().string.isRequired
        }),
        "/app")
          , ks = (n(94192),
        de.createElement);
        function Ss(e) {
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
                } catch (qv) {
                    return !1
                }
            }();
            return function() {
                var n, a = (0,
                ut.Z)(e);
                if (t) {
                    var r = (0,
                    ut.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                ct.Z)(this, n)
            }
        }
        var xs, Ts, Os = {
            logName: "PWALoginForm"
        }, Es = (0,
        ys.default)((function() {
            return Promise.resolve().then(n.t.bind(n, 4249, 23)).then((function(e) {
                return e.UnifiedLogin
            }
            ))
        }
        ), {
            ssr: !1,
            loadableGenerated: {
                webpack: function() {
                    return [4249]
                },
                modules: ["@hulu/web-login-ui"]
            }
        }), Ps = function(e) {
            (0,
            st.Z)(a, e);
            var t = Ss(a);
            function a(e) {
                var n;
                return (0,
                ot.Z)(this, a),
                (n = t.call(this, e)).publicRuntimeConfig = (0,
                bs.default)().publicRuntimeConfig,
                n.state = {
                    signupHref: null
                },
                n.visibleMode = (0,
                Xr.mobileDetect)().match("".concat(he.USER_AGENTS_REGEX.TESLA, "|").concat(he.USER_AGENTS_REGEX.GM)),
                n.onLoggedIn = n.onLoggedIn.bind((0,
                bt.Z)(n)),
                n
            }
            return (0,
            lt.Z)(a, [{
                key: "componentDidMount",
                value: function() {
                    var e = this.props.model.serviceworker;
                    this.setState({
                        signupHref: n.g.Windows ? "/start/microsoft" : "".concat((0,
                        gi.X)("signup"), "/go/one-hulu")
                    }),
                    e && "serviceWorker"in navigator && navigator.serviceWorker.register(e, {
                        scope: "/app/"
                    }).catch((function(e) {
                        yi._u.error("Error with service worker, Error: ".concat(e), Os)
                    }
                    ))
                }
            }, {
                key: "onLoggedIn",
                value: function() {
                    window.location.reload()
                }
            }, {
                key: "handleDoNotShareClick",
                value: function(e) {
                    var t, n, a, r, i;
                    e.preventDefault();
                    var o = ((null === (t = window) || void 0 === t ? void 0 : t.OnetrustActiveGroups) || "").split(",").filter((function(e) {
                        return e
                    }
                    )).length;
                    null === (n = window) || void 0 === n || null === (a = n.OneTrust) || void 0 === a || a.OnConsentChanged((function(e) {
                        var t, n, a, r = null === e || void 0 === e || null === (t = e.detail) || void 0 === t ? void 0 : t.length;
                        o !== r && (null === (n = window) || void 0 === n || null === (a = n.location) || void 0 === a || a.reload())
                    }
                    )),
                    null === (r = window) || void 0 === r || null === (i = r.OneTrust) || void 0 === i || i.ToggleInfoDisplay()
                }
            }, {
                key: "getLoginScreen",
                value: function() {
                    var e, t, n = this.props.featureFlags, a = this.state.signupHref, r = {
                        disableCreateAccount: !1,
                        createAccountPath: a,
                        router: {
                            beforePopRoute: function(e) {
                                return window.addEventListener("popstate", e)
                            },
                            getLocalPathname: function() {
                                var e = window.location.pathname.split("/").at(-1);
                                return e !== Ns.split("/").at(-1) ? "/".concat(e) : "/"
                            },
                            pushLocalRoute: function(e) {
                                var t = e.startsWith("/") ? e.slice(1) : e
                                  , n = "".concat(Ns, "/").concat(t);
                                window.history.pushState({
                                    url: n,
                                    slug: t
                                }, "", n)
                            },
                            build: function() {
                                return {
                                    beforePopRoute: this.beforePopRoute,
                                    getLocalPathname: this.getLocalPathname,
                                    pushLocalRoute: this.pushLocalRoute
                                }
                            }
                        }.build(),
                        trackEvent: null === Tl || void 0 === Tl ? void 0 : Tl.trackEvent,
                        env: null === (e = this.publicRuntimeConfig) || void 0 === e ? void 0 : e.webLoginEnv,
                        recaptchaMode: "visible",
                        recaptchaConfigName: "pwa_login"
                    }, i = "noopener noreferrer nofollow", o = [{
                        text: "\xa9 ".concat((new Date).getFullYear(), " Hulu, LLC")
                    }, {
                        text: "About Ads",
                        href: "//info.evidon.com/pub_info/3920?v=1&nt=0&nw=false",
                        rel: i,
                        target: "_blank"
                    }, {
                        text: "Subscriber Agreement",
                        href: "/subscriber_agreement",
                        rel: i,
                        target: "_self"
                    }, {
                        text: "Privacy Policy",
                        href: "https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/",
                        rel: i,
                        target: "_self"
                    }, {
                        text: "Do Not Sell or Share My Personal Information",
                        rel: "",
                        target: "_self",
                        onClick: this.handleDoNotShareClick
                    }, {
                        text: "Your US State Privacy Rights",
                        href: "/ca-privacy-rights",
                        rel: "",
                        target: "_self"
                    }, {
                        text: "TV Parental Guidelines",
                        href: "http://www.tvguidelines.org",
                        rel: i,
                        target: "_blank"
                    }, {
                        text: "Sitemap",
                        href: "/sitemap",
                        rel: "",
                        target: "_self"
                    }];
                    return null !== n && void 0 !== n && n.hasEdnaLoginOnPWAEnabled ? ks(gs.QueryClientProvider, null, ks(Es, {
                        config: r,
                        onLoggedIn: this.onLoggedIn,
                        footerConfig: o
                    })) : null !== n && void 0 !== n && n.hasUnifiedLoginEnabled ? ks(gs.WebLogin, {
                        env: null === (t = this.publicRuntimeConfig) || void 0 === t ? void 0 : t.webLoginEnv,
                        recaptchaMode: "visible",
                        recaptchaConfigName: "pwa_login",
                        startTrialHref: a,
                        trackEvent: null === Tl || void 0 === Tl ? void 0 : Tl.trackEvent,
                        onLoggedIn: this.onLoggedIn
                    }) : ks(hs.Tw, {
                        config: this.publicRuntimeConfig,
                        startTrialHref: a,
                        metricsTracker: Tl,
                        mobile: !0,
                        forceFbLoginPopup: !0,
                        visibleMode: this.visibleMode
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.user.isHuluUser
                      , n = e.model
                      , a = n.manifest
                      , r = n.nonsubWarning
                      , i = this.getLoginScreen();
                    return ks("div", {
                        id: "login-modal",
                        className: "LoginForm"
                    }, a && ks(ws.default, null, ks("link", {
                        rel: "manifest",
                        href: a
                    })), t ? ks("div", {
                        className: "LoginForm__dialog LoginForm__dialog--nonsub",
                        dangerouslySetInnerHTML: {
                            __html: r
                        }
                    }) : ks("div", {
                        className: "LoginForm__dialog modal-dialog"
                    }, i))
                }
            }]),
            a
        }(de.Component), Cs = hs.gY.stateKey, Ds = hs.gY.actionHandlers, Zs = hs._A.stateKey, Is = hs._A.actionHandlers, Ms = (0,
        ye.connect)((function(e) {
            return {
                user: e.user
            }
        }
        ))(Ps), As = (xs = {},
        (0,
        se.Z)(xs, Ye, $e),
        (0,
        se.Z)(xs, Cs, Ds),
        (0,
        se.Z)(xs, Zs, Is),
        (0,
        se.Z)(xs, ml.F, pl.Z),
        xs), Ls = (n(17636),
        de.createElement), Rs = hs._A.view, js = function(e) {
            var t = "".concat((0,
            gi.X)("signup"), "/go/one-hulu")
              , n = (0,
            bs.default)().publicRuntimeConfig
              , a = e.closeLoginModal
              , r = e.hasUnifiedLoginEnabled
              , i = e.hasUpdatedGenderOptions
              , o = e.shown;
            return Ls(Uo.view, {
                className: ue()({
                    "modal-unified-login": r
                }),
                model: {
                    id: "login-modal"
                },
                onModalClosed: a,
                shown: !0
            }, r ? o ? Ls(_s(), {
                env: null === n || void 0 === n ? void 0 : n.webLoginEnv,
                recaptchaMode: "auto",
                startTrialHref: t,
                trackEvent: null === Tl || void 0 === Tl ? void 0 : Tl.trackEvent,
                onLoggedIn: function(e) {
                    e.hasAuthenticationChanged && window.location.reload()
                },
                useUpdatedGenderOptions: i
            }) : null : Ls(Rs, {
                config: n,
                startTrialHref: t,
                metricsTracker: Tl
            }))
        }, Hs = hs.gY.stateKey, Us = hs.gY.actionHandlers, Bs = hs._A.stateKey, Fs = hs._A.actionHandlers, qs = hs._A.actions.closeLogin, Gs = (Ts = {},
        (0,
        se.Z)(Ts, Hs, Us),
        (0,
        se.Z)(Ts, Bs, Fs),
        Ts), Ws = (0,
        ye.connect)((function(e) {
            var t, n;
            return {
                shown: (null === e || void 0 === e || null === (t = e.modal) || void 0 === t ? void 0 : t["login-modal"]) && Boolean(null === e || void 0 === e || null === (n = e.modal) || void 0 === n ? void 0 : n["login-modal"].shown)
            }
        }
        ), (function(e) {
            return {
                closeLoginModal: function() {
                    return e(qs())
                }
            }
        }
        ))(js), zs = (n(90811),
        de.createElement), Vs = function(e) {
            var t = e.model
              , n = t.headline
              , a = t.description
              , r = t.zipCodeModalText
              , i = t.logos
              , o = i && i.length;
            return zs("div", {
                className: "logo-wall container-width cu-channels",
                id: "channels",
                role: "region",
                "aria-labelledby": "regionNetwork",
                "data-automationid": "logo_wall"
            }, zs("div", {
                className: "logo-wall__header section-header"
            }, zs(xe.Z, {
                as: "h2",
                variant: "title32",
                className: "logo-wall__headline",
                id: "regionNetwork",
                "data-automationid": "logo_wall_headline"
            }, n), Boolean(a) && zs(je.m7.div, {
                className: "logo-wall__description section-body",
                dangerouslySetInnerHTML: {
                    __html: a
                },
                "data-automationid": "logo-wall__description"
            })), zs("button", {
                className: "arrow-button",
                type: "button",
                name: "view-channels",
                "data-automationid": "arrow_button",
                "data-toggle": "modal",
                "data-target": "#zip-modal",
                onClick: function() {
                    return (0,
                    ve.DS)({
                        event_name: "zip_module"
                    })
                },
                onKeyDown: (0,
                fe.P)((function() {
                    return (0,
                    ve.DS)({
                        event_name: "zip_module"
                    })
                }
                )),
                onMouseDown: fe.W
            }, zs(xe.Z, {
                variant: "label14"
            }, r)), zs("div", {
                className: "logo-wall__logo-list"
            }, zs("section", {
                role: "list",
                "aria-label": "Featured Networks",
                className: "gutter-8 row justify-content-center"
            }, i && i.map((function(e, t) {
                var n = ue()("col-xs-4 col-sm-3 network-col-md col-md-2 col-lg-1 logo-wall__list-item", {
                    "network-offset-md-left": t % 7 === 0 && o - t >= 7,
                    "network-offset-lg-left": t % 8 === 0 && o - t >= 8
                });
                return zs("div", {
                    key: t,
                    role: "listitem",
                    className: n
                }, zs(ro, {
                    model: e
                }))
            }
            )))))
        }, Ys = n(41609), Ks = n.n(Ys), Xs = pe().shape({
            type: pe().string.isRequired,
            url: pe().string.isRequired
        }), Js = pe().shape({
            url: pe().string.isRequired,
            alt: pe().string.isRequired
        }), Qs = pe().shape({
            anchorHash: pe().string,
            style: pe().string,
            ctaFormat: pe().string,
            ctaButtonStyle: pe().string,
            anchorCopy: pe().string,
            anchorButton: pe().boolean,
            backgroundImage: pe().shape({
                desktop: Js,
                mobile: Js
            }),
            backgroundVideos: pe().arrayOf(Xs),
            isFullscreen: pe().bool,
            preheadlineStates: Oe,
            headlineStates: Oe,
            subheadlineStates: Oe,
            supportingCopyStates: Oe,
            secondaryCopyStates: Oe,
            legalStates: Oe,
            mobileFirst: pe().bool,
            programType: pe().string,
            programPartner: pe().string,
            programSubpartner: pe().string,
            requireDeviceCode: pe().bool,
            enableBrandBorder: pe().bool,
            ctaDownloadAppText: pe().string,
            ribbon: To,
            ctaSecondary: pe().shape({}),
            cartAbandonmentCopy: pe().shape({})
        }), $s = (n(44048),
        de.createElement);
        function ec(e) {
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
                } catch (qv) {
                    return !1
                }
            }();
            return function() {
                var n, a = (0,
                ut.Z)(e);
                if (t) {
                    var r = (0,
                    ut.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                ct.Z)(this, n)
            }
        }
        var tc = function(e) {
            (0,
            st.Z)(n, e);
            var t = ec(n);
            function n() {
                return (0,
                ot.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            lt.Z)(n, [{
                key: "render",
                value: function() {
                    var e = this.props.brandIcon || {}
                      , t = e.description
                      , n = e.url;
                    return n ? $s("div", {
                        className: "BrandIcon",
                        role: "img"
                    }, $s("img", {
                        className: "BrandIcon__brand-img",
                        src: n,
                        alt: t,
                        role: "presentation",
                        "data-automationid": "masthead_brand_image"
                    })) : null
                }
            }]),
            n
        }(de.Component)
          , nc = de.createElement;
        function ac(e) {
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
                } catch (qv) {
                    return !1
                }
            }();
            return function() {
                var n, a = (0,
                ut.Z)(e);
                if (t) {
                    var r = (0,
                    ut.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                ct.Z)(this, n)
            }
        }
        var rc = Object.freeze([{
            startTime: 4,
            angle: 135,
            top: "#54abd6",
            middle: "#a56da6",
            bottom: "#d05b6a"
        }, {
            startTime: 9,
            angle: 135,
            top: "#244bb3",
            middle: "#65b1bf",
            bottom: "#e3d09f"
        }, {
            startTime: 15,
            angle: 135,
            top: "#2a418c",
            middle: "#a17495",
            bottom: "#db9f85"
        }, {
            startTime: 19,
            angle: 135,
            top: "#2d0c3f",
            middle: "#944f6e",
            bottom: "#ef9276"
        }, {
            startTime: 23,
            angle: 135,
            top: "#231437",
            middle: "#2c385e",
            bottom: "#336e6b"
        }])
          , ic = function(e) {
            (0,
            st.Z)(n, e);
            var t = ac(n);
            function n() {
                var e;
                return (0,
                ot.Z)(this, n),
                (e = t.call(this)).state = {},
                e
            }
            return (0,
            lt.Z)(n, [{
                key: "UNSAFE_componentWillMount",
                value: function() {
                    var e = this;
                    setTimeout((function() {
                        var t, n = (t = (new Date).getHours(),
                        rc.find((function(e, n, a) {
                            var r = a[n === a.length - 1 ? 0 : n + 1];
                            return e.startTime > r.startTime ? t >= e.startTime || t < r.startTime : t >= e.startTime && t < r.startTime
                        }
                        )));
                        e.setState({
                            gradient: n
                        })
                    }
                    ))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.state.gradient;
                    return e ? nc("div", {
                        style: {
                            position: "absolute",
                            top: "0",
                            left: "0",
                            bottom: "0",
                            width: "100%",
                            height: "100%",
                            backgroundImage: "linear-gradient(".concat(e.angle, "deg, ").concat(e.top, " 0%, ").concat(e.middle, " 50%, ").concat(e.bottom, " 100%)"),
                            animation: "fade-in 1s"
                        }
                    }) : null
                }
            }]),
            n
        }(de.Component)
          , oc = n(55719)
          , lc = de.createElement
          , sc = "anchor"
          , cc = "path"
          , uc = "modal"
          , dc = function(e, t, n) {
            return e && t && n
        }
          , mc = function(e) {
            var t = e.user
              , n = e.shouldShowDownloadAppLink
              , a = e.isStartPage
              , r = e.element_specifier
              , i = e.DriverButton;
            return (0,
            je.GO)({
                event_name: (0,
                Le.vl)(t, n),
                cta_placement: "masthead",
                page_type: a ? "signup_start" : "signup_lp",
                element_specifier: r
            }, i)
        }
          , pc = function(e) {
            var t, n = e.user, a = e.ctaFields, r = e.locale, i = e.model, o = i.ctaFormat, l = i.programType, s = i.ctaButtonStyle, c = i.anchorCtaText, u = i.cartAbandonmentCopy, d = e.cartAbandonment, m = e.messages, p = e.ctaDownloadAppText, f = e.shouldShowDownloadAppLink, v = e.isHumanCodeOverride, h = e.isStartPage, g = e.isEsLang, _ = e.onSubmit, b = m.cta_manage, y = null === u || void 0 === u ? void 0 : u.cta, w = null === y || void 0 === y ? void 0 : y.href, N = null !== (t = null === y || void 0 === y ? void 0 : y.style) && void 0 !== t ? t : "white", k = (0,
            oc.n)(d, y), S = dc(d, k, w), x = {
                user: n,
                programType: l,
                componentNonSubCta: S ? k : o,
                componentSubCta: g && b,
                locale: r,
                ctaFields: a
            }, T = function(e, t, n, a) {
                var r = t ? n : (0,
                Ae.V6)(e);
                return a ? "Apply" : r
            }(x, f, p, v), O = S ? w : null, E = S ? N : s, P = (0,
            Ae.U2)((0,
            Ae.NP)(x)), C = "masthead_cta", D = {
                user: n,
                shouldShowDownloadAppLink: f,
                isStartPage: h,
                element_specifier: C,
                DriverButton: (0,
                je.pS)(He.Z, C)
            }, Z = mc(D);
            return !c && T && lc(Z, {
                className: "Masthead__input-cta",
                useStyle: E,
                onClick: P ? null : function() {
                    _(O)
                }
                ,
                "data-target": P,
                "data-automationid": "masthead_input_cta"
            }, T)
        }
          , fc = function(e) {
            var t, n = e.model, a = n.linkType, r = n.style, i = n.copy, o = n.href, l = n.cartAbandonmentCopy, s = e.user, c = e.isStartPage, u = e.scrollToComponent, d = e.onSecondarySubmit, m = e.cartAbandonment, p = null === l || void 0 === l ? void 0 : l.secondaryCta, f = null === p || void 0 === p ? void 0 : p.href, v = null !== (t = null === p || void 0 === p ? void 0 : p.style) && void 0 !== t ? t : "white_outline", h = (0,
            oc.n)(m, p), g = dc(m, h, f);
            if ((!o || !i) && !g)
                return null;
            var _ = g ? f : o
              , b = g ? cc : a
              , y = g ? v : r
              , w = b === sc
              , N = b === uc
              , k = {
                anchor: u,
                path: d,
                suf: d,
                modal: null
            }
              , S = "masthead_cta_secondary"
              , x = {
                user: s,
                shouldShowDownloadAppLink: !1,
                isStartPage: c,
                element_specifier: S,
                DriverButton: (0,
                je.pS)(He.Z, S)
            }
              , T = mc(x);
            return lc(T, {
                className: "Masthead__input-cta Masthead__cta--secondary",
                useStyle: y,
                href: _,
                "data-href": w ? o : null,
                "data-toggle": N ? uc : null,
                "data-target": N ? o : null,
                "aria-label": i,
                onClick: k[b],
                "data-automationid": "masthead_input_cta"
            }, h || i)
        }
          , vc = (n(15428),
        de.createElement);
        var hc = function(e) {
            var t = e.videos
              , n = de.useRef()
              , a = de.useState(t)
              , r = (0,
            cn.Z)(a, 2)
              , i = r[0]
              , o = r[1]
              , l = de.useState(!0)
              , s = (0,
            cn.Z)(l, 2)
              , c = s[0]
              , u = s[1]
              , d = (0,
            un.w)().windowSize.width
              , m = function() {
                var e = null === n || void 0 === n ? void 0 : n.current;
                e.paused ? e.play() : e.pause(),
                u(!e.paused)
            };
            (0,
            de.useEffect)((function() {
                var e = he.DEVICES.DESKTOP;
                d < he.BREAKPOINTS.LARGE && (e = he.DEVICES.TABLET),
                d < he.BREAKPOINTS.MEDIUM && (e = he.DEVICES.MOBILE);
                var n = null === t || void 0 === t ? void 0 : t.find((function(t) {
                    return t.device === e
                }
                ));
                n || (n = null === t || void 0 === t ? void 0 : t.find((function(e) {
                    return "any" === e.device
                }
                ))),
                o(n ? [n] : void 0)
            }
            ), [d]),
            (0,
            de.useEffect)((function() {
                var e;
                null === n || void 0 === n || null === (e = n.current) || void 0 === e || e.load(),
                function() {
                    var e, t = null === n || void 0 === n || null === (e = n.current) || void 0 === e ? void 0 : e.play();
                    void 0 !== t ? t.then((function() {
                        u(!0)
                    }
                    )).catch((function() {
                        u(!1)
                    }
                    )) : u(!1)
                }()
            }
            ), [n, i]);
            var p = ue()("VideoBackground__controls", {
                "VideoBackground__controls--playing": c,
                "VideoBackground__controls--paused": !c
            })
              , f = c ? "Pause Video" : "Play Video";
            return i && 0 !== i.length ? vc("div", {
                className: "VideoBackground",
                "data-automationid": "video_background"
            }, vc("video", {
                preload: "auto",
                loop: "loop",
                muted: !0,
                playsInline: !0,
                className: "VideoBackground__video",
                ref: n
            }, i && i.map((function(e, t) {
                return vc("source", {
                    key: t,
                    src: e.url,
                    type: e.type
                })
            }
            ))), vc("div", {
                className: p,
                tabIndex: 0,
                role: "button",
                "aria-label": f,
                onClick: m,
                onKeyDown: (0,
                fe.P)(m),
                onMouseDown: fe.W
            })) : null
        }
          , gc = function() {
            function e(t) {
                (0,
                ot.Z)(this, e),
                this.language = t && t.split("-")[0] || "en"
            }
            return (0,
            lt.Z)(e, [{
                key: "translate",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    return e[this.language] || t
                }
            }, {
                key: "translateAll",
                value: function(e) {
                    var t = this;
                    return Object.keys(e).reduce((function(n, a) {
                        return n[a] = e[a][t.language] || e[a].en,
                        n
                    }
                    ), {})
                }
            }]),
            e
        }()
          , _c = n(79063);
        n(39902);
        function bc(e) {
            return yc.apply(this, arguments)
        }
        function yc() {
            return (yc = (0,
            Se.Z)(ke().mark((function e(t) {
                var n, a, r;
                return ke().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "/api/codes/".concat(t),
                            a = null,
                            e.prev = 2,
                            e.next = 5,
                            fetch(n);
                        case 5:
                            if (!(r = e.sent).ok) {
                                e.next = 10;
                                break
                            }
                            return e.next = 9,
                            r.json();
                        case 9:
                            a = e.sent;
                        case 10:
                            e.next = 15;
                            break;
                        case 12:
                            e.prev = 12,
                            e.t0 = e.catch(2),
                            yi.an.debug("fetchCodeProgramDetails: Error received from ".concat(n), e.t0);
                        case 15:
                            return e.abrupt("return", a);
                        case 16:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[2, 12]])
            }
            )))).apply(this, arguments)
        }
        var wc = n(19081)
          , Nc = n.n(wc)
          , kc = (n(58669),
        de.createElement);
        function Sc(e) {
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
                } catch (qv) {
                    return !1
                }
            }();
            return function() {
                var n, a = (0,
                ut.Z)(e);
                if (t) {
                    var r = (0,
                    ut.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                ct.Z)(this, n)
            }
        }
        var xc = function(e) {
            (0,
            st.Z)(n, e);
            var t = Sc(n);
            function n(e) {
                var a;
                (0,
                ot.Z)(this, n),
                (a = t.call(this, e)).toggle = a.toggle.bind((0,
                bt.Z)(a)),
                a.state = {
                    visible: !1
                };
                var r = a.props.id;
                return a.id = r || "banner",
                a
            }
            return (0,
            lt.Z)(n, [{
                key: "toggle",
                value: function() {
                    var e = this;
                    this.state.visible || (this.setState({
                        visible: !0
                    }),
                    setTimeout((function() {
                        e.setState({
                            visible: !1
                        })
                    }
                    ), 5e3))
                }
            }, {
                key: "render",
                value: function() {
                    return null
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    var e = this.id && document.getElementById(this.id);
                    e || ((e = document.createElement("div")).id = this.id,
                    e.className = "banner",
                    document.body.insertBefore(e, document.body.firstChild)),
                    this.element = e,
                    this.componentDidUpdate()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    document.body.removeChild(this.element)
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    var e = this.props.children
                      , t = this.state.visible;
                    Bl.render(kc(Nc(), {
                        component: "div",
                        transitionName: "banner",
                        transitionEnterTimeout: 1e3,
                        transitionLeaveTimeout: 1e3
                    }, t ? e : null), this.element)
                }
            }]),
            n
        }(de.Component)
          , Tc = {
            log_in: {
                en: "Log In",
                es: "Iniciar sesi\xf3n"
            },
            cta_manage: {
                en: "MANAGE MY ACCOUNT",
                es: "ADMINISTRAR MI CUENTA"
            }
        }
          , Oc = de.createElement;
        function Ec(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function Pc(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Ec(Object(n), !0).forEach((function(t) {
                    (0,
                    se.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ec(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var Cc = "Code invalid. Please check your entry and try again."
          , Dc = "device"
          , Zc = function(e) {
            var t = e.asPath
              , n = e.cartAbandonment
              , a = e.children
              , r = e.ctaFields
              , i = e.enableBrand
              , o = e.geodata
              , l = e.idx
              , s = e.locale
              , c = e.model
              , u = c.anchorCtaText
              , d = c.anchorCtaUrl
              , m = c.backgroundImage
              , p = c.backgroundVideos
              , f = c.brandIcon
              , v = c.cartAbandonmentCopy
              , h = c.ctaButtonStyle
              , g = c.ctaDownloadAppText
              , _ = c.ctaFormat
              , b = c.enableBrandBorder
              , y = c.headlineStates
              , w = c.isFullscreen
              , N = c.legalStates
              , k = c.mobileFirst
              , S = c.preheadlineStates
              , x = c.programPartner
              , T = c.programSubpartner
              , O = c.programType
              , E = c.requireDeviceCode
              , P = c.ribbon
              , C = c.secondaryCopyStates
              , D = c.secondaryCta
              , Z = c.startPageHumanCodeOverride
              , I = c.style
              , M = c.subheadlineStates
              , A = c.supportingCopyStates
              , L = e.pageType
              , R = e.query
              , j = e.topHatShown
              , H = e.user
              , U = e.user
              , B = U.entitlementState
              , F = U.entitlementFlag
              , q = U.isSubscriber
              , G = U.isHuluUser
              , W = (0,
            de.useRef)()
              , z = (0,
            de.useRef)()
              , V = (0,
            de.useRef)()
              , Y = (0,
            de.useState)((0,
            _c.nY)(R))
              , K = Y[0]
              , X = Y[1]
              , J = (0,
            de.useState)(!1)
              , Q = J[0]
              , $ = J[1]
              , ee = (0,
            de.useState)(Cc)
              , te = ee[0]
              , ne = ee[1]
              , ae = (0,
            Ae.ox)(O, E);
            (0,
            de.useEffect)((function() {
                var e, t;
                ae && X(null !== (e = null === (t = V.current) || void 0 === t ? void 0 : t.value) && void 0 !== e ? e : null)
            }
            ), []);
            var re = L === he.CMS_PAGETYPE.start
              , ie = G && (0,
            Xr.mobileDetect)().mobile() && g
              , oe = re && Z && O === he.PROGRAM_TYPE_HUMAN_CODE
              , le = new gc(s)
              , ce = function() {
                return O ? he.PROGRAMS_WITH_CODE_EXCLUDE_DEVICE.includes(O) ? "promotion" : O === he.PROGRAM_TYPE_DEVICE_CODE ? Dc : void 0 : null
            }
              , me = function(e) {
                var t = e || {};
                ce() === Dc && (Ks()(x) || (t.partner = x),
                Ks()(T) || (t.subpartner = T));
                var n = {
                    params: t,
                    user: H,
                    ctaFields: r
                };
                ie ? window.location.assign((0,
                Re.cv)()) : null !== e && void 0 !== e && e.promotion_code && q ? window.location.assign("".concat((0,
                gi.X)("hudis"), "/account/addons/confirm?code=").concat(e.promotion_code)) : (0,
                Re.AU)(n)
            }
              , pe = function() {
                var e = (0,
                Se.Z)(ke().mark((function e(t) {
                    var n;
                    return ke().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (!t) {
                                    e.next = 4;
                                    break
                                }
                                return n = {
                                    params: {},
                                    user: H,
                                    componentUrl: t,
                                    ctaFields: r
                                },
                                (0,
                                Re.AU)(n),
                                e.abrupt("return");
                            case 4:
                                if (!oe) {
                                    e.next = 8;
                                    break
                                }
                                if (!q) {
                                    e.next = 8;
                                    break
                                }
                                return window.location = "/start/redeem/".concat(K),
                                e.abrupt("return");
                            case 8:
                                ae ? ve() : me();
                            case 9:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , fe = function() {
                var e = (0,
                Se.Z)(ke().mark((function e(t, n) {
                    var a, r;
                    return ke().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (!(a = t.headers.get("content-type")) || !a.includes("application/json")) {
                                    e.next = 5;
                                    break
                                }
                                return e.next = 4,
                                t.json();
                            case 4:
                                r = e.sent;
                            case 5:
                                "undefined" === typeof ft()(r, "eligible") || ft()(r, "eligible") ? me((0,
                                se.Z)({}, "".concat(n, "_code"), K)) : ge(r.reasonMessage);
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t, n) {
                    return e.apply(this, arguments)
                }
            }()
              , ve = function() {
                var e = (0,
                Se.Z)(ke().mark((function e() {
                    var n, a, r, i;
                    return ke().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (n = ce(),
                                "/start/vip" !== t) {
                                    e.next = 10;
                                    break
                                }
                                return e.next = 4,
                                bc(K);
                            case 4:
                                a = e.sent,
                                r = ft()(a, "id", null),
                                a || ge(),
                                r && me((0,
                                se.Z)({}, "".concat(n, "_code"), K)),
                                e.next = 14;
                                break;
                            case 10:
                                return e.next = 12,
                                (0,
                                Ae.tJ)(n, K);
                            case 12:
                                (i = e.sent).ok ? fe(i, n) : ge();
                            case 14:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }()
              , ge = function(e) {
                var t;
                W && (null === (t = W.current) || void 0 === t || t.toggle());
                var n = e || Cc;
                $(!0),
                ne(n),
                null !== z && void 0 !== z && z.current && function(e) {
                    e.setAttribute("tabindex", "0"),
                    e.blur();
                    var t = 0
                      , n = window.setInterval((function() {
                        e.focus(),
                        ++t >= 10 && window.clearInterval(n)
                    }
                    ), 10)
                }(z.current)
            }
              , _e = function(e) {
                e.preventDefault(),
                document.querySelector(e.target.dataset.href).scrollIntoView({
                    behavior: "smooth"
                })
            }
              , be = function(e) {
                var t, a = e.Component, r = e.className, i = e.statefulContent, l = e.id, s = e.dataAutomationId, c = e.cartAbandonmentElCopy, u = F && B !== he.ANON ? i[B] : (null === o || void 0 === o || null === (t = o.geodataOverrides) || void 0 === t ? void 0 : t[r]) || i[he.ANON], d = (0,
                oc.n)(n, c), m = n && d ? d : u, p = {
                    className: r,
                    "data-automationid": s
                };
                return l && (p.id = l),
                m && Oc(a, (0,
                we.Z)({
                    dangerouslySetInnerHTML: {
                        __html: m
                    }
                }, p))
            };
            return Oc("div", null, ae && Oc(xc, {
                ref: W,
                id: "masthead-banner"
            }, Oc("div", {
                ref: z,
                className: "Masthead__banner"
            }, Oc(xe.Z, {
                breakpoints: {
                    xs: "body16",
                    lg: "body24"
                },
                className: "banner__span"
            }, te))), Oc("div", {
                id: "masthead",
                className: ue()("Masthead", "cu-masthead", I, i ? {
                    "Masthead--brand": !0
                } : {
                    "Masthead--tall": a,
                    "Masthead--short": !m,
                    "Masthead--fullscreen": w,
                    "Masthead--tophat-included": j,
                    "Masthead--brand-border": b,
                    "gradient-skrim": !b
                }),
                role: "region",
                "aria-labelledby": "regionMasthead",
                "data-automationid": "masthead"
            }, !m && Oc(ic, null), Oc(Vl, {
                image: m,
                identifier: l,
                mobileFirst: k
            }), Oc(hc, {
                videos: p
            }), Oc("div", {
                className: "Masthead__container"
            }, be({
                Component: je.m7.div,
                className: "Masthead__preheadline",
                statefulContent: S,
                cartAbandonmentElCopy: null === v || void 0 === v ? void 0 : v.eyebrow
            }), be({
                Component: je.m7.h1,
                className: "Masthead__headline",
                statefulContent: y,
                id: "regionMasthead",
                cartAbandonmentElCopy: null === v || void 0 === v ? void 0 : v.headline,
                dataAutomationId: "masthead_headline"
            }), be({
                Component: je.m7.div,
                className: "Masthead__subheadline",
                statefulContent: M,
                cartAbandonmentElCopy: null === v || void 0 === v ? void 0 : v.subheadline,
                dataAutomationId: "masthead_subheadline"
            }), be({
                Component: je.m7.div,
                className: "Masthead__primary-message",
                statefulContent: A,
                cartAbandonmentElCopy: null === v || void 0 === v ? void 0 : v.primaryCopy
            }), be({
                Component: je.m7.div,
                className: "Masthead__secondary-message",
                statefulContent: C,
                cartAbandonmentElCopy: null === v || void 0 === v ? void 0 : v.secondaryCopy,
                dataAutomationId: "masthead_secondary_message"
            }), Oc("div", {
                className: "Masthead__input"
            }, ae && Oc("div", {
                className: "Masthead__input-wrapper ".concat(Q && "Masthead__input--invalid")
            }, Oc("label", {
                className: "Masthead__input-label",
                htmlFor: "Masthead-input-text"
            }, "Enter your ", (0,
            Ae.nV)(O)), Oc("input", {
                type: "text",
                id: "Masthead-input-text",
                className: "Masthead__input-box",
                autoComplete: "off",
                placeholder: (0,
                Ae.nV)(O),
                onChange: function(e) {
                    X(e.target.value),
                    $(!1)
                },
                value: K,
                ref: V,
                onKeyUp: function(e) {
                    if ("Enter" === e.key) {
                        var t = document.querySelector(".Masthead__input-cta");
                        (0,
                        Xr.isBrowser)() && Boolean(t) && t.click()
                    }
                }
            }), Oc("div", {
                className: "Masthead__input-icon"
            }, "!")), Oc(pc, {
                model: {
                    ctaFormat: _,
                    programType: O,
                    ctaButtonStyle: h,
                    anchorCtaText: u,
                    cartAbandonmentCopy: v
                },
                user: H,
                ctaFields: r,
                locale: s,
                cartAbandonment: n,
                messages: le.translateAll(Tc),
                ctaDownloadAppText: g,
                isHumanCodeOverride: oe,
                shouldShowDownloadAppLink: ie,
                isStartPage: re,
                onSubmit: pe,
                isEsLang: (0,
                Re.Ad)("es-us")
            }), u && Oc(He.Z, {
                className: "Masthead__anchor-cta",
                useStyle: h,
                "data-href": d,
                onClick: _e
            }, u), Oc(fc, {
                model: Pc(Pc({}, D), {}, {
                    cartAbandonmentCopy: v
                }),
                scrollToComponent: _e,
                onSecondarySubmit: function() {
                    (0,
                    Re.AU)({
                        params: {},
                        user: H,
                        componentUrl: D.href,
                        ctaFields: r
                    })
                },
                user: H,
                isStartPage: re,
                cartAbandonment: n
            })), be({
                Component: je.m7.div,
                className: "Masthead__legal section-disclaimer",
                statefulContent: N,
                cartAbandonmentElCopy: null === v || void 0 === v ? void 0 : v.legalCopy,
                dataAutomationId: "masthead_legal"
            }), Oc(tc, {
                brandIcon: f
            })), a && Oc("div", {
                className: "Masthead__children"
            }, a), Oc(Wo, {
                model: P,
                asPath: t
            })))
        };
        Zc.defaultProps = {
            idx: 0,
            enableBrand: !1
        };
        var Ic, Mc = Zc, Ac = "tophat", Lc = "ACTION_TOPHAT_CLOSE_TOPHAT", Rc = "ACTION_TOPHAT_OPEN_TOPHAT";
        function jc(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function Hc(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? jc(Object(n), !0).forEach((function(t) {
                    (0,
                    se.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : jc(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var Uc, Bc = (Ic = {},
        (0,
        se.Z)(Ic, Lc, (function(e) {
            return Hc(Hc({}, e), {}, {
                shown: !1
            })
        }
        )),
        (0,
        se.Z)(Ic, Rc, (function(e) {
            return Hc(Hc({}, e), {}, {
                shown: !0
            })
        }
        )),
        Ic), Fc = (0,
        ye.connect)((function(e) {
            return {
                user: e.user,
                topHatShown: e.tophat.shown,
                ctaFields: e[Ge]
            }
        }
        ))(Mc), qc = (Uc = {},
        (0,
        se.Z)(Uc, Ye, $e),
        (0,
        se.Z)(Uc, Ac, Bc),
        (0,
        se.Z)(Uc, Ge, Ve),
        Uc), Gc = (pe().shape({
            style: pe().string,
            carousel_masthead: pe().arrayOf(Qs)
        }),
        n(97021),
        de.createElement);
        function Wc(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function zc(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Wc(Object(n), !0).forEach((function(t) {
                    (0,
                    se.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wc(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function Vc(e) {
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
                } catch (qv) {
                    return !1
                }
            }();
            return function() {
                var n, a = (0,
                ut.Z)(e);
                if (t) {
                    var r = (0,
                    ut.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                ct.Z)(this, n)
            }
        }
        var Yc = function(e) {
            (0,
            st.Z)(n, e);
            var t = Vc(n);
            function n(e) {
                var a, r;
                (0,
                ot.Z)(this, n);
                var i = (r = t.call(this, e)).props.model.carousel_masthead;
                return r.state = {
                    curPane: 0,
                    noPanes: i.length,
                    fadeInContent: "mhcarousel--fade-in",
                    hideContent: "",
                    inFlux: !1,
                    intervalAuto: !1,
                    panes: new Array(i.length).fill({
                        tease: "",
                        animate: "",
                        freeze: "",
                        fade: ""
                    }),
                    navButtons: new Array(i.length).fill({
                        haloClass: "",
                        moveClass: ""
                    })
                },
                r.mousePrevEnter = (a = r).mousePrevEnter.bind(a),
                r.mousePrevLeave = (a = r).mousePrevLeave.bind(a),
                r.mouseNextEnter = (a = r).mouseNextEnter.bind(a),
                r.mouseNextLeave = (a = r).mouseNextLeave.bind(a),
                r.gotoSlide = (a = r).gotoSlide.bind(a),
                r.animationTimout = 400,
                r
            }
            return (0,
            lt.Z)(n, [{
                key: "componentDidMount",
                value: function() {
                    this.intervalStart()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.intervalStop()
                }
            }, {
                key: "intervalNext",
                value: function() {
                    this.setState({
                        intervalAuto: !0
                    }),
                    this.navButtonFade(this.getNextPane())
                }
            }, {
                key: "intervalStart",
                value: function() {
                    var e = this;
                    this.intervalId = setInterval((function() {
                        return e.intervalNext()
                    }
                    ), 6e3)
                }
            }, {
                key: "intervalStop",
                value: function() {
                    this.intervalId > 0 && (clearInterval(this.intervalId),
                    this.intervalId = 0)
                }
            }, {
                key: "mousePrevEnter",
                value: function() {
                    var e = this.state
                      , t = e.inFlux
                      , n = e.panes
                      , a = e.navButtons
                      , r = e.curPane
                      , i = e.noPanes;
                    if (t)
                        return !1;
                    var o = this.getPrevPane()
                      , l = (0,
                    Jn.Z)(n)
                      , s = (0,
                    Jn.Z)(a);
                    l[o] = zc(zc({}, l[o]), {}, {
                        tease: "mhcarousel--tease-prev"
                    }),
                    s[o] = zc(zc({}, s[o]), {}, {
                        haloClass: "mhcarousel--halo"
                    }),
                    s[r] = {
                        haloClass: "",
                        moveClass: 0 !== r ? "mhcarousel--move-prev" : "mhcarousel--move-last-".concat(i)
                    },
                    this.setState({
                        panes: l,
                        navButtons: s
                    })
                }
            }, {
                key: "mousePrevLeave",
                value: function() {
                    var e = this.state
                      , t = e.inFlux
                      , n = e.panes
                      , a = e.navButtons;
                    if (t)
                        return !1;
                    var r = this.getPrevPane()
                      , i = (0,
                    Jn.Z)(n)
                      , o = (0,
                    Jn.Z)(a);
                    i[r] = zc(zc({}, i[r]), {}, {
                        tease: ""
                    }),
                    o.fill({
                        haloClass: "",
                        moveClass: ""
                    }),
                    this.setState({
                        panes: i,
                        navButtons: o
                    })
                }
            }, {
                key: "gotoPrevPane",
                value: function() {
                    var e = this.state
                      , t = e.inFlux
                      , n = e.panes;
                    if (t)
                        return !1;
                    var a = this.getPrevPane();
                    this.intervalStop();
                    var r = (0,
                    Jn.Z)(n);
                    r[a] = zc(zc({}, r[a]), {}, {
                        animate: "mhcarousel--animate-prev",
                        tease: ""
                    }),
                    this.setState({
                        fadeInContent: "",
                        inFlux: !0,
                        panes: r
                    }),
                    setTimeout(this.gotoSlide, this.animationTimout, a)
                }
            }, {
                key: "getPrevPane",
                value: function() {
                    var e = this.state
                      , t = e.curPane
                      , n = e.noPanes;
                    return t - 1 < 0 ? n - 1 : t - 1
                }
            }, {
                key: "mouseNextEnter",
                value: function() {
                    var e = this.state
                      , t = e.inFlux
                      , n = e.noPanes
                      , a = e.panes
                      , r = e.navButtons
                      , i = e.curPane;
                    if (t)
                        return !1;
                    var o = this.getNextPane()
                      , l = (0,
                    Jn.Z)(a)
                      , s = (0,
                    Jn.Z)(r);
                    l[o] = zc(zc({}, l[o]), {}, {
                        tease: "mhcarousel--tease-next"
                    }),
                    s[o] = zc(zc({}, s[o]), {}, {
                        haloClass: "mhcarousel--halo"
                    }),
                    s[i] = {
                        haloClass: "",
                        moveClass: i !== n - 1 ? "mhcarousel--move-next" : "mhcarousel--move-first-".concat(n)
                    },
                    this.setState({
                        panes: l,
                        navButtons: s
                    })
                }
            }, {
                key: "mouseNextLeave",
                value: function() {
                    var e = this.state
                      , t = e.inFlux
                      , n = e.panes
                      , a = e.navButtons;
                    if (t)
                        return !1;
                    var r = this.getNextPane()
                      , i = (0,
                    Jn.Z)(n)
                      , o = (0,
                    Jn.Z)(a);
                    i[r] = zc(zc({}, i[r]), {}, {
                        tease: ""
                    }),
                    o.fill({
                        haloClass: "",
                        moveClass: ""
                    }),
                    this.setState({
                        panes: i,
                        navButtons: o
                    })
                }
            }, {
                key: "gotoNextPane",
                value: function() {
                    var e = this.state
                      , t = e.inFlux
                      , n = e.panes
                      , a = e.intervalAuto;
                    if (t)
                        return !1;
                    var r = this.getNextPane()
                      , i = (0,
                    Jn.Z)(n);
                    a || this.intervalStop(),
                    i[r] = zc(zc({}, i[r]), {}, {
                        animate: "mhcarousel--animate-next",
                        tease: ""
                    }),
                    this.setState({
                        fadeInContent: "",
                        inFlux: !0,
                        panes: i
                    }),
                    setTimeout(this.gotoSlide, this.animationTimout, r)
                }
            }, {
                key: "getNextPane",
                value: function() {
                    var e = this.state
                      , t = e.curPane;
                    return t + 1 === e.noPanes ? 0 : t + 1
                }
            }, {
                key: "gotoSlide",
                value: function(e) {
                    var t = this.state
                      , n = t.panes
                      , a = t.navButtons
                      , r = (0,
                    Jn.Z)(n)
                      , i = (0,
                    Jn.Z)(a);
                    r.fill({
                        tease: "",
                        animate: "",
                        freeze: "",
                        fade: ""
                    }),
                    i.fill({
                        haloClass: "",
                        moveClass: ""
                    }),
                    this.setState({
                        fadeInContent: "mhcarousel--fade-in",
                        curPane: e,
                        inFlux: !1,
                        intervalAuto: !1,
                        panes: r,
                        navButtons: i
                    })
                }
            }, {
                key: "navButtonFade",
                value: function(e) {
                    var t = this.state
                      , n = t.inFlux
                      , a = t.curPane
                      , r = t.noPanes
                      , i = t.panes
                      , o = t.intervalAuto
                      , l = (0,
                    Jn.Z)(i);
                    if (Boolean(n) || e === a)
                        return !1;
                    o || this.intervalStop(),
                    a < e ? 0 === a && e === r - 1 ? (l[e] = zc(zc({}, l[e]), {}, {
                        fade: "mhcarousel--fade-in-next-pane"
                    }),
                    l[a] = zc(zc({}, l[a]), {}, {
                        freeze: "mhcarousel--freeze-next-pane"
                    })) : (l[e] = zc(zc({}, l[e]), {}, {
                        fade: "mhcarousel--fade-in-prev-pane"
                    }),
                    l[a] = zc(zc({}, l[a]), {}, {
                        freeze: "mhcarousel--freeze-prev-pane"
                    })) : a - 1 === e ? (l[e] = zc(zc({}, l[e]), {}, {
                        fade: "mhcarousel--fade-in-next-pane"
                    }),
                    l[a] = zc(zc({}, l[a]), {}, {
                        freeze: "mhcarousel--freeze-next-pane"
                    })) : (l[e] = zc(zc({}, l[e]), {}, {
                        fade: "mhcarousel--fade-in-prev-pane"
                    }),
                    l[a] = zc(zc({}, l[a]), {}, {
                        freeze: "mhcarousel--freeze-prev-pane"
                    })),
                    this.setState({
                        fadeInContent: "",
                        inFlux: !0,
                        panes: l
                    }),
                    setTimeout(this.gotoSlide, this.animationTimout, e)
                }
            }, {
                key: "orderNumber",
                value: function(e) {
                    var t = this.state
                      , n = t.curPane
                      , a = t.noPanes;
                    return n === e ? 2 : n + 1 === e || 0 === e && n + 1 === a ? 4 : n - 1 === e || e === a - 1 && n - 1 < 0 ? 0 : 100
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.model
                      , a = n.carousel_masthead
                      , r = n.style
                      , i = t.user
                      , o = this.state
                      , l = o.panes
                      , s = o.navButtons
                      , c = o.curPane
                      , u = o.fadeInContent
                      , d = {
                        width: "".concat(100 * a.length, "%")
                    }
                      , m = {
                        0: "mhcarousel--content-pane-prev",
                        2: "mhcarousel--content-pane-cur",
                        4: "mhcarousel--content-pane-next"
                    }
                      , p = s.map((function(t, n) {
                        var a = ue()("mhcarousel__navButton", t.moveClass, t.haloClass, n === c && "mhcarousel--navButton-active");
                        return Gc("span", {
                            className: a,
                            key: n
                        }, Gc("button", {
                            onClick: function() {
                                e.navButtonFade(n),
                                (0,
                                Tl.fireUtagLink)({
                                    event_name: "masthead_carousel_nav"
                                }),
                                (0,
                                Tl.fireUserInteraction)("masthead_carousel", "nav_button_click")
                            }
                        }))
                    }
                    ));
                    return Gc("div", {
                        className: "mhcarousel mhcarousel--hide-content ".concat(u, " cu-masthead")
                    }, Gc("div", {
                        className: "mhcarousel__container"
                    }, Gc("div", {
                        className: "mhcarousel__arrows"
                    }, Gc("button", {
                        className: "mhcarousel__arrow mhcarousel--arrows-left",
                        onClick: function() {
                            e.gotoPrevPane(),
                            (0,
                            Tl.fireUtagLink)({
                                event_name: "masthead_carousel_arrow_prev"
                            }),
                            (0,
                            Tl.fireUserInteraction)("masthead_carousel", "arrow_prev")
                        },
                        onMouseEnter: function() {
                            return e.mousePrevEnter()
                        },
                        onMouseLeave: function() {
                            return e.mousePrevLeave()
                        }
                    }), Gc("button", {
                        className: "mhcarousel__arrow mhcarousel--arrows-right",
                        onClick: function() {
                            e.gotoNextPane(),
                            (0,
                            Tl.fireUtagLink)({
                                event_name: "masthead_carousel_arrow_next"
                            }),
                            (0,
                            Tl.fireUserInteraction)("masthead_carousel", "arrow_next")
                        },
                        onMouseEnter: function() {
                            return e.mouseNextEnter()
                        },
                        onMouseLeave: function() {
                            return e.mouseNextLeave()
                        }
                    })), Gc("div", {
                        className: "mhcarousel__nav ".concat(r)
                    }, p), Gc("div", {
                        className: "mhcarousel__content-wrapper"
                    }, Gc("div", {
                        className: "mhcarousel__content-panes ".concat(r),
                        style: d
                    }, a && a.map((function(t, n) {
                        var a = e.orderNumber(n)
                          , r = ue()("mhcarousel__content-pane", m[a], l[n].tease, l[n].animate, l[n].fade, l[n].freeze);
                        return Gc("div", {
                            key: n,
                            className: r,
                            style: {
                                order: "".concat(a)
                            }
                        }, Gc(Fc, {
                            idx: n,
                            model: t,
                            user: i
                        }))
                    }
                    ))))))
                }
            }]),
            n
        }(de.Component)
          , Kc = (0,
        ye.connect)((function(e) {
            return {
                user: e.user
            }
        }
        ))(Yc)
          , Xc = (0,
        se.Z)({}, Ye, $e)
          , Jc = pe().shape({
            url: pe().string.isRequired,
            alt: pe().string.isRequired
        })
          , Qc = (pe().shape({
            image: pe().shape({
                desktop: Jc,
                tablet: Jc,
                mobile: Jc
            })
        }),
        n(7261),
        de.createElement)
          , $c = function(e) {
            var t = e.model.image
              , n = t.desktop
              , a = t.tablet
              , r = t.mobile;
            return Qc("div", {
                className: "media-container cu-media-container"
            }, Qc("div", {
                className: "media-container__wrapper",
                role: "img",
                "aria-label": n.alt
            }, Qc("picture", null, Qc("source", {
                media: "(min-width: 769px)",
                "data-srcset": n.url
            }), Qc("source", {
                media: "(min-width: 376px)",
                "data-srcset": a.url
            }), Qc("source", {
                media: "(min-width: 0px)",
                "data-srcset": r.url
            }), Qc("img", {
                className: "resp-img lazyload",
                "data-src": n.url,
                alt: n.alt
            }))))
        }
          , eu = de.createElement;
        function tu(e) {
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
                } catch (qv) {
                    return !1
                }
            }();
            return function() {
                var n, a = (0,
                ut.Z)(e);
                if (t) {
                    var r = (0,
                    ut.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                ct.Z)(this, n)
            }
        }
        var nu = function(e) {
            (0,
            st.Z)(n, e);
            var t = tu(n);
            function n() {
                return (0,
                ot.Z)(this, n),
                t.call(this)
            }
            return (0,
            lt.Z)(n, [{
                key: "componentDidMount",
                value: function() {
                    var e = this.props.model
                      , t = e.cssURL
                      , n = e.jsURL;
                    if (t) {
                        var a = document.createElement("link");
                        a.rel = "stylesheet",
                        a.href = t,
                        document.body.appendChild(a)
                    }
                    if (n) {
                        var r = document.createElement("script");
                        r.src = n,
                        document.body.appendChild(r)
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.model.htmlData;
                    return eu("div", {
                        dangerouslySetInnerHTML: {
                            __html: e
                        }
                    })
                }
            }]),
            n
        }(de.Component)
          , au = (0,
        se.Z)({}, ml.F, pl.Z)
          , ru = n(74458)
          , iu = n(6266)
          , ou = n(36808)
          , lu = n.n(ou)
          , su = {
            get_app: {
                en: "Get the Hulu app",
                es: "Descarga la app de Hulu"
            }
        }
          , cu = (n(18393),
        n(80840),
        de.createElement)
          , uu = function(e) {
            var t = e.className
              , n = e.active
              , a = e.mobileOnly
              , r = e.children
              , i = ue()("toaster", t, {
                "toaster--active": n,
                "toaster--mobile-only": a
            });
            return cu("div", {
                className: i
            }, r)
        }
          , du = n(51810)
          , mu = n(96671)
          , pu = n(33940)
          , fu = n(18220)
          , vu = (n(55266),
        de.createElement);
        function hu(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function gu(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? hu(Object(n), !0).forEach((function(t) {
                    (0,
                    se.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : hu(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var _u, bu = function(e) {
            var t, a, r = e.model, i = r.ctaDownloadAppText, o = r.cta_always, l = r.cta, s = r.cta_button_style, c = r.disable_logo, u = r.items, d = r.signup_flow_entry, m = r.enable_cta_toaster, p = r.enableMinimalNav, f = r.enableStickyModeAlways, v = (0,
            Rn.Z)(r, ["ctaDownloadAppText", "cta_always", "cta", "cta_button_style", "disable_logo", "items", "signup_flow_entry", "enable_cta_toaster", "enableMinimalNav", "enableStickyModeAlways"]), h = e.user, g = e.asPath, _ = e.locale, b = e.ctaFields, y = e.topHatShown, w = e.pageType, N = e.cartAbandonment, k = e.featureFlags, S = e.host, x = g.toLowerCase().includes("/start/") || "/start" === g.toLowerCase(), T = g.toLowerCase().includes("/series/") || g.toLowerCase().includes("/movie/"), O = (0,
            Xr.mobileDetect)(), E = O.os(), P = du.b[E], C = Boolean(P), D = new gc(_).translateAll(gu(gu({}, Tc), su)), Z = D.log_in, I = D.cta_manage, M = D.get_app, A = h.isHuluUser, L = A && O.mobile() && i, R = (0,
            Re.Ad)("es-us"), j = v.sticky_mode, H = (0,
            de.useState)(!1), U = H[0], B = H[1], F = (0,
            de.useState)(!1), q = F[0], G = F[1], W = (0,
            de.useState)(!1), z = W[0], V = W[1], Y = (0,
            de.useState)(ft()(h, "name", null)), K = Y[0], X = Y[1], J = (0,
            Ae.Z0)({
                isHuluUser: A,
                asPath: g,
                url: S
            }), Q = !(q && j || f), $ = A && K, ee = L ? i : (0,
            Ae.V6)({
                user: h,
                componentNonSubCta: l,
                componentSubCta: R && I,
                locale: _,
                ctaFields: b,
                cartAbandonment: N
            }), te = !0;
            C && T && (te = !1);
            var ne = (0,
            un.w)().windowSize.width
              , ae = ne ? ne < he.BREAKPOINTS.LARGE : null
              , re = (0,
            je.pS)($ ? "span" : "a", "navigation", A ? "account_page" : "login")
              , ie = (0,
            de.useRef)(0);
            (0,
            de.useEffect)((function() {
                return (0,
                Xr.isBrowser)() && window.addEventListener("scroll", es()(le, 250), !0),
                oe(),
                function() {
                    window.removeEventListener("scroll", le, !0)
                }
            }
            ), [y]);
            var oe = function() {
                var e = (0,
                Se.Z)(ke().mark((function e() {
                    var t, n;
                    return ke().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t = lu().get(),
                                K) {
                                    e.next = 6;
                                    break
                                }
                                return e.next = 4,
                                (0,
                                mu.oY)(t);
                            case 4:
                                n = e.sent,
                                X(n);
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }()
              , le = function() {
                var e = n.g.window.pageYOffset
                  , t = y ? 74 : 1
                  , a = n.g.document.body.scrollHeight
                  , r = n.g.window.innerHeight;
                G(e > t);
                var i = n.g.document.getElementById("masthead") || n.g.document.getElementById("HeroSliderMasthead__hero");
                (null !== i && (i.offsetHeight - 80 <= e ? B(!0) : B(!1)),
                m) && V(a - 100 < e + r);
                var o = Math.round((e + r) / a * 100);
                o > ie.current && (o === pu.eM[4] ? ((0,
                fu.jl)(ie.current, 4),
                (0,
                ve.JW)("default", "scroll:100", "swipe", !1),
                ie.current = pu.eM[4]) : o >= pu.eM[3] ? ((0,
                fu.jl)(ie.current, 3),
                (0,
                ve.JW)("default", "scroll:75", "swipe", !1),
                ie.current = pu.eM[4] - 1) : o >= pu.eM[2] ? ((0,
                fu.jl)(ie.current, 2),
                (0,
                ve.JW)("default", "scroll:50", "swipe", !1),
                ie.current = pu.eM[3]) : o >= pu.eM[1] ? ((0,
                fu.jl)(ie.current, 1),
                (0,
                ve.JW)("default", "scroll:25", "swipe", !1),
                ie.current = pu.eM[2]) : ((0,
                ve.JW)("default", "scroll:0", "swipe", !1),
                ie.current = pu.eM[1]))
            }
              , se = function(t) {
                t.preventDefault(),
                function(e) {
                    var t, n = e.toggleModal, a = e.md, r = e.user, i = e.featureFlags, o = e.loginLink, l = r.isHuluUser;
                    a.mobile() || r && l || (0,
                    Re.k8)(null === i || void 0 === i ? void 0 : i.hasConnectedAuthEnabled) ? (0,
                    Re.k8)(null === i || void 0 === i ? void 0 : i.hasConnectedAuthEnabled) ? (0,
                    Re.eT)() : window.location.assign(o) : null !== (t = null === i || void 0 === i ? void 0 : i.hasEdnaLoginEnabled) && void 0 !== t && t ? window.location.assign(o) : n("login-modal")
                }({
                    toggleModal: e.toggleModal,
                    md: O,
                    user: h,
                    featureFlags: k,
                    loginLink: J
                })
            }
              , ce = function(t) {
                var n = t.className
                  , a = t.emphasis
                  , r = void 0 === a ? "high" : a
                  , i = t.size
                  , o = void 0 === i ? "large" : i
                  , l = (0,
                je.GO)({
                    event_name: (0,
                    Le.vl)(h, L),
                    cta_placement: "navigation"
                }, (0,
                je.pS)(He.Z, "cta_nav"));
                return vu(l, {
                    emphasis: r,
                    size: o,
                    className: n,
                    useStyle: s,
                    onClick: function() {
                        return function(t) {
                            var n = e.requirePremium
                              , a = e.network
                              , r = (0,
                            Ae.QM)(n, a)
                              , i = {
                                user: h,
                                componentUrl: t,
                                ctaFields: b,
                                from: r,
                                cartAbandonment: N
                            };
                            L ? window.location.assign(P) : (0,
                            Re.AU)(i)
                        }(d)
                    },
                    "data-automationid": "navigation__toaster-cta" === n ? "toaster_cta" : "navigation_cta",
                    mode: Q ? "dark" : "light"
                }, ee)
            }
              , me = {
                top: y && !q ? 74 : 0,
                position: y && !q || !j ? "absolute" : "fixed"
            }
              , pe = f ? "fixed" : j ? "sticky" : "static"
              , ge = ue()("navigation", "cu-navigation", "navigation--".concat(pe), {
                "navigation--active": q && j || f,
                "navigation--cta-always": o,
                "navigation--device": C,
                "navigation--minimal": p,
                "navigation--tophat-shown": y
            })
              , _e = (null === k || void 0 === k ? void 0 : k.hasEdnaLoginOnPWAEnabled) && g.match(/\/app.*/);
            return vu(Qa.a, {
                theme: Q ? tr.oneHuluDarkTheme : tr.oneHuluLightTheme
            }, !_e && vu(iu.Z, {
                logo: {
                    href: "/",
                    disableClick: c
                },
                className: ge,
                style: me,
                editorialItems: function() {
                    var e = []
                      , t = {
                        event_name: "navigate_inpage",
                        navigation_method: "navigation"
                    };
                    return u && !Ks()(u) && (e = null === u || void 0 === u ? void 0 : u.map((function(e, n) {
                        var a = gu({
                            navigation_target: e.text
                        }, t)
                          , r = (0,
                        je.GO)(a, (0,
                        je.pS)("a", "navigation", (0,
                        za.Fv)(e.text)));
                        return vu(r, {
                            key: n,
                            onClick: function(t) {
                                return function(e, t) {
                                    e.preventDefault(),
                                    t && (t.startsWith("#") ? Te.scroller.scrollTo(t.replace("#", ""), {
                                        duration: 500,
                                        delay: 100,
                                        smooth: !0,
                                        offset: -76,
                                        activeClass: "active"
                                    }) : window.location = t)
                                }(t, e.url)
                            },
                            href: e.url,
                            className: "navigation__item",
                            "data-automationid": "navigation_item_".concat((0,
                            za.Fv)(e.text))
                        }, e.text)
                    }
                    ))),
                    C && !x && e.push(vu("a", {
                        key: "get-app",
                        className: "navigation__item navigation__item--transparent navigation__item--mobile-only",
                        href: P,
                        onMouseDown: fe.W,
                        role: "button",
                        "aria-label": "Learn more",
                        tabIndex: "0"
                    }, M)),
                    ae && (A || e.push(vu(re, {
                        key: "action",
                        className: "navigation__item navigation__item--transparent",
                        onClick: se,
                        href: J,
                        "data-automationid": "navigation_login_button"
                    }, vu(xe.Z, {
                        variant: "label14"
                    }, Z))),
                    e.push(vu(ce, {
                        key: "cta-in-menu",
                        className: "navigation__cta--in-menu"
                    }))),
                    e
                }(),
                navEndItems: [ee && te && vu(ce, {
                    key: "cta",
                    size: ae ? "small" : "large",
                    className: ue()("navigation__cta", {
                        "navigation__cta--transparent": Q,
                        "navigation__cta--always-show": o && j,
                        "navigation__cta--active": U,
                        "navigation__cta--hidden": q && ae && m
                    })
                }), vu((function(e) {
                    var t = e.onLoginButtonClicked;
                    return vu(re, {
                        key: "action",
                        className: ue()("navigation__login-button", {
                            "navigation__logged-out-button": !$
                        }),
                        onClick: t,
                        href: J,
                        "data-automationid": "navigation_login_button"
                    }, $ ? vu(iu.Z.ProfileNavButton, {
                        text: null === K || void 0 === K ? void 0 : K.charAt(0)
                    }) : vu(xe.Z, {
                        variant: "label14"
                    }, Z))
                }
                ), {
                    key: "login",
                    onLoginButtonClicked: se
                })],
                scrollMode: pe,
                isTransparent: Q,
                itemAlignment: "left",
                useHamburgerOnMobile: !0,
                showItemsIfRoom: !1
            }), m && ee && vu(uu, {
                active: U && !z,
                mobileOnly: !0
            }, vu("div", {
                className: "navigation__toaster-scrim"
            }, vu(ce, {
                className: "navigation__toaster-cta"
            }))), w !== he.CMS_PAGETYPE.micro && !$ && vu(Ws, {
                hasUnifiedLoginEnabled: null !== (t = null === k || void 0 === k ? void 0 : k.hasUnifiedLoginEnabled) && void 0 !== t && t,
                hasUpdatedGenderOptions: null !== (a = null === k || void 0 === k ? void 0 : k.hasUpdatedGenderOptions) && void 0 !== a && a
            }))
        }, yu = hs.gY.stateKey, wu = hs.gY.actionHandlers, Nu = hs._A.stateKey, ku = hs._A.actionHandlers, Su = hs._A.actions.showLogin, xu = (0,
        ye.connect)((function(e) {
            var t, n;
            return {
                user: e.user,
                topHatShown: e.tophat.shown,
                ctaFields: e[Ge],
                network: (null === (t = e.detailEntity) || void 0 === t ? void 0 : t.network) || (null === (n = e.detailEntity) || void 0 === n ? void 0 : n.networkUpsell),
                requirePremium: e.detailEntity.requirePremium
            }
        }
        ), (function(e) {
            return {
                toggleModal: function(t) {
                    e((0,
                    da.$)(t)),
                    e(Su())
                }
            }
        }
        ))(bu), Tu = (_u = {},
        (0,
        se.Z)(_u, Ye, $e),
        (0,
        se.Z)(_u, Ac, Bc),
        (0,
        se.Z)(_u, Ge, Ve),
        (0,
        se.Z)(_u, yu, wu),
        (0,
        se.Z)(_u, Nu, ku),
        (0,
        se.Z)(_u, ml.F, pl.Z),
        (0,
        se.Z)(_u, $r, ii),
        _u), Ou = {
            disclaimer: {
                en: "Live TV is available for those live local, regional,\n    and national channels available in your area, which are subject to change.\n    Certain channels or content may not be available in all locations or on all devices.",
                es: "Hulu con TV en vivo est\xe1 disponible en los canales locales, regionales y nacionales en vivo disponibles en tu \xe1rea, los cuales estan sujetos a cambios. Ciertos canales podr\xedan ofrecen solo contenido on demand. Ciertos canales o contenidos podr\xedan no estar disponibles en todas las \xe1reas o en todos los dispositivos."
            },
            error_try_later: {
                en: "Something went wrong! Please try again later.",
                es: "Algo no sali\xf3 bien. Por favor intenta de nuevo m\xe1s tarde."
            },
            see_all: {
                en: "See all available channels",
                es: "Todos los canales disponibles"
            }
        }, Eu = ((0,
        me.shape)({
            headline: me.string,
            description: me.string,
            defaultInputEyebrow: me.string,
            specificInputEyebrow: me.string,
            zipCodePrompt: me.string,
            promotedChannelList: me.string,
            defaultChannelHtml: me.string
        }),
        n(35800),
        n(53674)), Pu = n.n(Eu), Cu = {
            enter_code: {
                en: "ENTER YOUR ZIP CODE",
                es: "Ingresa tu c\xf3digo postal"
            },
            channels_in_area_upper: {
                en: "CHANNELS IN YOUR AREA",
                es: "Canales en tu \xe1rea"
            },
            channels_in_area_lower: {
                en: "Channels in your area",
                es: "Canales en tu \xe1rea"
            },
            enter_your_home: {
                en: "Enter your home ZIP code for channels available in your area.",
                es: "Ingresa tu c\xf3digo postal para conocer los canales disponibles en tu \xe1rea."
            },
            placeholder: {
                en: "Enter Zip Code",
                es: "Ingresa Tu C\xf3digo Postal"
            },
            button: {
                en: "SUBMIT",
                es: "Enviar"
            },
            disclaimer: {
                en: "Live TV is available for those live local, regional,\n    and national channels available in your area, which are subject to change.\n    Certain channels or content may not be available in all locations or on all devices.",
                es: "Hulu con TV en vivo est\xe1 disponible en los canales locales, regionales y nacionales en vivo disponibles en tu \xe1rea, los cuales estan sujetos a cambios. Ciertos canales podr\xedan ofrecen solo contenido on demand. Ciertos canales o contenidos podr\xedan no estar disponibles en todas las \xe1reas o en todos los dispositivos."
            },
            disclaimer_detailed: {
                en: "The channels below are available in your ZIP code for this plan.\n    Live TV is available for those live local, regional, and national channels available in your area, which are subject to change.\n    Certain channels or content may not be available in all locations or on all devices.",
                es: "Los canales a continuaci\xf3n est\xe1n disponibles en tu c\xf3digo postal para este plan. Hulu con TV en vivo est\xe1 disponible en los canales locales, regionales y nacionales en vivo disponibles en tu \xe1rea, los cuales estan sujetos a cambios. Ciertos canales podr\xedan ofrecen solo contenido on demand. Ciertos canales o contenidos podr\xedan no estar disponibles en todas las \xe1reas o en todos los dispositivos."
            },
            disclaimer_ie: {
                en: '* Channels labeled "On Demand only" are only available On Demand for your ZIP code. National programming, including most shows and movies, is typically available the day after air on broadcast TV.',
                es: '* Los canales clasificados como "Solo On Demand" est\xe1n disponibles en tu c\xf3digo postal solo como programaci\xf3n on demand (no en vivo). La programaci\xf3n nacional, incluyendo la mayor\xeda de los programas y pel\xedculas, se encuentra disponible al d\xeda siguiente de su transmisi\xf3n en vivo en TV.'
            },
            on_demand: {
                en: "On Demand only",
                es: "Solo On Demand"
            },
            disclaimer_on_demand: {
                en: "This channel is only available On Demand for your ZIP code. National programming, including most shows and movies, is typically available the day after air on broadcast TV.",
                es: "Este canal solo est\xe1 disponible On Demand en tu c\xf3digo postal. La programaci\xf3n nacional, incluyendo la mayor\xeda de los programas y pel\xedculas, se encuentra disponible al d\xeda siguiente de su transmisi\xf3n en vivo en TV."
            },
            channels_sports: {
                en: "Sports Channels",
                es: "Canales de deportes"
            },
            channels_local: {
                en: "Live Local Channels",
                es: "Canales locales en vivo"
            },
            channels_entertainment: {
                en: "Entertainment & Lifestyle Channels",
                es: "Canales de entretenimiento y estilo de vida"
            },
            channels_family: {
                en: "Family & Kids Channels",
                es: "Canales familiares y para ni\xf1os"
            },
            channels_movies: {
                en: "Movies Channels",
                es: "Canales de pel\xedculas"
            },
            channels_news: {
                en: "News Channels",
                es: "Canales de noticias"
            },
            channels_premium: {
                en: "Add-on Premium Channels",
                es: "Add-ons de Canales Premium"
            },
            error_invalid: {
                en: "This is an invalid ZIP code. Please try again.",
                es: "Este c\xf3digo postal no es v\xe1lido. Por favor intenta de nuevo."
            },
            error_try_later: {
                en: "Something went wrong! Please try again later.",
                es: "Algo no sali\xf3 bien. Por favor intenta de nuevo m\xe1s tarde."
            },
            entertainment_addon: {
                en: "Entertainment Add-on",
                es: "Entertainment Add-on"
            },
            espanol_addon: {
                en: "Espa\xf1ol Add-on",
                es: "Espa\xf1ol Add-on"
            },
            sports_addon: {
                en: "Sports Add-on",
                es: "Deportes Add-on"
            }
        }, Du = (n(97422),
        de.createElement), Zu = function(e) {
            var t, n, a = e.locale, r = e.modalId, i = e.sharedZipCode, o = e.showResultsOnOpen, l = e.updateParent, s = (0,
            de.useState)(i || ""), c = s[0], u = s[1], d = (0,
            de.useState)([]), m = d[0], p = d[1], f = (0,
            de.useState)(!0), v = f[0], h = f[1], g = (0,
            de.useState)(!1), _ = g[0], b = g[1], y = (0,
            de.useState)(!1), w = y[0], N = y[1], k = (0,
            de.useState)(!1), S = k[0], x = k[1], T = (0,
            de.useState)(!1), O = T[0], E = T[1], P = new gc(a), C = P.translateAll(Cu), D = C.channels_in_area_lower, Z = C.enter_your_home, I = C.placeholder, M = C.button, A = C.disclaimer, L = C.disclaimer_detailed, R = C.disclaimer_ie, j = C.on_demand, H = C.disclaimer_on_demand, U = C.error_invalid, B = C.error_try_later, F = ["Netscape", "Microsoft Internet Explorer"].includes((0,
            bi._v)().browser), q = (0,
            de.useRef)(null), G = (0,
            de.useRef)(null), W = function() {
                u(""),
                h(!0),
                b(!1),
                x(!1),
                E(!1)
            }, z = function() {
                x(!0),
                b(!1)
            }, V = function(t) {
                t && (null === t || void 0 === t || t.preventDefault());
                var n = e.filterChannel;
                if (p([]),
                E(!1),
                x(!1),
                K(c)) {
                    b(!0),
                    h(!1);
                    var a = (0,
                    gi.X)("site").replace(/^http(s)?:/i, window.location.protocol);
                    fetch("".concat(a, "/api/3.0/channels/local/").concat(c, "?group_by=category&be_localsonly=1")).then((function(e) {
                        return e.json()
                    }
                    )).then((function(t) {
                        if (t && t.length > 0)
                            if (n)
                                Y(t, n);
                            else {
                                var a = e.model
                                  , r = (a = void 0 === a ? {} : a).promoted_channel;
                                Y(t, r)
                            }
                        else
                            z()
                    }
                    ), (function() {
                        !function() {
                            var e;
                            E(!0),
                            b(!1),
                            null === G || void 0 === G || null === (e = G.current) || void 0 === e || e.blur()
                        }()
                    }
                    )).then((function() {
                        var e;
                        null === q || void 0 === q || null === (e = q.current) || void 0 === e || e.focus()
                    }
                    ))
                } else
                    z()
            }, Y = function(e, t) {
                var n = e.findIndex((function(e) {
                    return e.name === t
                }
                ));
                !function(e) {
                    var t;
                    p(e),
                    b(!1),
                    null === G || void 0 === G || null === (t = G.current) || void 0 === t || t.blur()
                }(-1 !== n ? [].concat((0,
                Jn.Z)(e.splice(n, 1)), (0,
                Jn.Z)(e)) : e)
            }, K = function(e) {
                return e.match(/\b\d{5}\b/)
            }, X = function(e) {
                return e.artwork.path ? {
                    backgroundImage: "url(".concat(e.artwork.path, ")")
                } : {}
            }, J = function(e) {
                return new Map([["Sports Channels", "channels_sports"], ["Live Local Channels", "channels_local"], ["Entertainment & Lifestyle Channels", "channels_entertainment"], ["Family & Kids Channels", "channels_family"], ["Movies Channels", "channels_movies"], ["News Channels", "channels_news"], ["Add-on Premium Channels", "channels_premium"], ["Entertainment Add-on", "entertainment_addon"], ["Espa\xf1ol Add-on", "espanol_addon"], ["Sports Add-on", "sports_addon"]]).get(e)
            }, Q = (0,
            je.GO)({
                event_name: "zip_module_search",
                zip_code: null !== G && void 0 !== G && null !== (t = G.current) && void 0 !== t && t.value && K(G.current.value) ? G.current.value : null
            }, (0,
            je.D4)("button", "home_zip_code_check", {
                zip_code: null !== G && void 0 !== G && null !== (n = G.current) && void 0 !== n && n.value && K(G.current.value) ? G.current.value : null
            }));
            return (0,
            de.useEffect)((function() {
                o && i && w && (V(null),
                N(!1),
                W())
            }
            ), [c, w]),
            Du(Uo.view, {
                model: {
                    id: r || "zip-modal"
                },
                onModalOpen: function() {
                    o && i && (N(!0),
                    u(i))
                },
                onModalClosed: function() {
                    l && c && l(c, S),
                    p([]),
                    W()
                },
                deepLinkAnchor: "allchannels"
            }, Du("div", {
                className: "networks"
            }, Du(xe.Z, {
                as: "h2",
                variant: "title-32",
                className: "networks-title"
            }, D), Du("label", {
                htmlFor: "zipcode",
                className: "networks-subtitle body"
            }, Du(xe.Z, {
                variant: "body16"
            }, Z)), Du("form", {
                onSubmit: V
            }, Du("div", {
                className: "networks-form"
            }, Du("span", null, Du("input", {
                type: "tel",
                id: "zipcode-input",
                className: "zipcode-input\n                  ".concat(S ? "error" : null),
                value: c,
                maxLength: "5",
                placeholder: I,
                onChange: function(e) {
                    u(e.target.value),
                    x(!1)
                },
                "aria-invalid": S ? "true" : "false",
                ref: G
            }), !_ && Du(Q, {
                className: "submit-button button--black",
                type: "submit"
            }, M), _ && Du("span", {
                className: "icon loading-icon"
            })), S && Du("span", {
                className: "invalid-zip-code"
            }, U))), Du(xe.Z, {
                as: "p",
                variant: "body-12",
                className: "legal-advice"
            }, v ? A : L, F && Du("span", null, Du("br", null), Du("br", null), R)), Du("div", {
                ref: q
            }, O && Du(xe.Z, {
                as: "p",
                variant: "body-14",
                className: "server-error"
            }, B), m && m.length > 0 && Du("div", {
                className: "channels-container"
            }, m.map((function(e, t) {
                return Du("div", {
                    key: t,
                    className: "channel-category"
                }, Du(xe.Z, {
                    as: "h3",
                    variant: "subtitle-18",
                    className: "channel-category-title"
                }, P.translate(Cu[J(e.name)])), Du("div", {
                    className: "network-icons-group",
                    role: "list",
                    "aria-label": "List of ".concat(P.translate(Cu[J(e.name)]))
                }, e.channels.map((function(e, n) {
                    return Du("div", {
                        className: "NetworkIcon",
                        key: "".concat(t, ".").concat(n),
                        role: "listitem",
                        "aria-label": e.network_name
                    }, Du("div", {
                        className: "NetworkIcon__frame"
                    }, Du("span", {
                        className: "NetworkIcon__logo ".concat(e.artwork.be_source ? "NetworkIcon__logo-be" : ""),
                        style: X(e)
                    }, Du("span", {
                        className: e.artwork.path ? "NetworkIcon__network-name-invisible" : ""
                    }, e.network_name))), e.on_demand && Du("div", {
                        className: "NetworkIcon__badge"
                    }, Du(Qn.Z, {
                        size: "small",
                        variant: "badge2",
                        css: {
                            padding: "0",
                            borderRadius: "4px",
                            backgroundColor: "rgb(247, 247, 249)",
                            border: "1px solid rgb(221, 224, 230)"
                        }
                    }, Du("span", {
                        className: "HuluTooltip",
                        "data-tip": !0,
                        "data-for": "sadFace"
                    }, j)), Du(Pu(), {
                        id: "sadFace",
                        place: "right",
                        type: "light",
                        effect: "solid"
                    }, Du("div", {
                        className: "onDemandTooltip"
                    }, Du("div", null, H)))))
                }
                ))))
            }
            ))))))
        };
        Zu.defaultProps = {
            locale: "en-us"
        };
        var Iu = Zu
          , Mu = (n(51091),
        de.createElement)
          , Au = function(e) {
            var t = e.model.html_code;
            return Mu(je.m7.div, {
                className: "html-module",
                dangerouslySetInnerHTML: {
                    __html: t
                }
            })
        }
          , Lu = de.createElement
          , Ru = function(e) {
            var t = e.model
              , n = t.headline
              , a = t.description
              , r = t.defaultInputEyebrow
              , i = t.specificInputEyebrow
              , o = t.promotedChannelList
              , l = t.defaultChannelHtml
              , s = e.geodata
              , c = e.locale
              , u = (0,
            de.useState)((null === s || void 0 === s ? void 0 : s.zip) || "")
              , d = u[0]
              , m = u[1]
              , p = (0,
            de.useState)((null === s || void 0 === s ? void 0 : s.area) || "")
              , f = p[0]
              , v = p[1]
              , h = (0,
            de.useState)([])
              , g = h[0]
              , _ = h[1]
              , b = (0,
            de.useState)(!1)
              , y = b[0]
              , w = b[1]
              , N = (0,
            de.useRef)(null)
              , k = f ? "".concat(f, " \u2192") : r
              , S = new gc(c).translateAll(Ou)
              , x = 0 === g.length
              , T = g.slice(0, 1).map((function(e) {
                var t = e.channels.map((function(e) {
                    return {
                        name: e.network_name,
                        icon: e.artwork.path
                    }
                }
                ));
                return {
                    name: e.name,
                    logoList: t
                }
            }
            ));
            (0,
            de.useEffect)((function() {
                return N.current = !0,
                O(d),
                function() {
                    return N.current = !1
                }
            }
            ), [d]);
            var O = function(e) {
                if (e) {
                    var t = (0,
                    gi.X)("site").replace(/^http(s)?:/i, window.location.protocol);
                    fetch("".concat(t, "/api/3.0/channels/local/").concat(e, "?group_by=category&be_localsonly=1")).then((function(e) {
                        return e.json()
                    }
                    )).then((function(t) {
                        if (null !== N && void 0 !== N && N.current) {
                            var n = function(e) {
                                var t = e.findIndex((function(e) {
                                    return (null === e || void 0 === e ? void 0 : e.name) === o
                                }
                                ));
                                return -1 !== t ? [].concat((0,
                                Jn.Z)(e.splice(t, 1)), (0,
                                Jn.Z)(e)) : e
                            }(t);
                            if (!Array.isArray(n) || 0 === (null === n || void 0 === n ? void 0 : n.length))
                                return;
                            E(e),
                            _(n)
                        }
                    }
                    ), (function() {
                        P()
                    }
                    ))
                }
            }
              , E = function(e) {
                var t = "/api/geolocation/getAreafromZip/".concat(e);
                fetch(t, {
                    method: "GET"
                }).then((function(e) {
                    return e.text()
                }
                )).then((function(e) {
                    v(e || "")
                }
                ), (function() {
                    P()
                }
                ))
            }
              , P = function() {
                w(!0)
            };
            return Lu("div", {
                className: "NetworksGeo-container"
            }, Lu("div", {
                className: "NetworksGeo container-width cu-channels",
                id: "channels",
                role: "region",
                "aria-labelledby": "regionNetwork"
            }, Lu("div", {
                className: "NetworksGeo__header section-header"
            }, Lu(xe.Z, {
                as: "h2",
                variant: "title32",
                className: "NetworksGeo__headline section-headline",
                id: "regionNetwork"
            }, n), Boolean(a) && Lu(je.m7.div, {
                className: "NetworksGeo__description section-body",
                dangerouslySetInnerHTML: {
                    __html: a
                }
            })), k && Lu("div", null, !x && i && Lu(xe.Z, {
                variant: "label18"
            }, i), Lu("button", {
                className: "arrow-button",
                type: "button",
                name: "view-channels",
                "data-automationid": "arrow_button",
                "data-toggle": "modal",
                "data-target": "#zip-modal-v2",
                onClick: function() {
                    (0,
                    ve.DS)({
                        event_name: "zip_module_v2"
                    })
                },
                onKeyDown: (0,
                fe.P)((function() {
                    return (0,
                    ve.DS)({
                        event_name: "zip_module_v2"
                    })
                }
                )),
                onMouseDown: fe.W
            }, Lu(xe.Z, {
                variant: "label18"
            }, k))), Lu("div", {
                className: "NetworksGeo__networkContainer"
            }, Lu("div", {
                className: "NetworksGeo__networkList"
            }, x || y ? Lu(Au, {
                model: {
                    html_code: l
                }
            }) : null === T || void 0 === T ? void 0 : T.map((function(e) {
                var t;
                return Lu("div", {
                    key: e.name,
                    className: "NetworksGeo__logoGroup"
                }, null === e || void 0 === e || null === (t = e.logoList) || void 0 === t ? void 0 : t.map((function(e, t) {
                    return Lu("img", {
                        className: "NetworksGeo__networkIcon",
                        src: e.icon,
                        key: "".concat(e.name, "-").concat(e.icon, "-").concat(t),
                        alt: e.name
                    })
                }
                )))
            }
            ))), (x || y) && Lu(He.Z, {
                className: "NetworksGeo__seeAllCta",
                useStyle: "black_outline",
                "data-toggle": "modal",
                "data-target": "#zip-modal-v2"
            }, S.see_all))), Lu(Iu, {
                sharedZipCode: d,
                model: {
                    promoted_channel: o
                },
                updateParent: function(e, t) {
                    !t && e && m(e)
                },
                showResultsOnOpen: !0,
                modalId: "zip-modal-v2"
            }))
        }
          , ju = Iu
          , Hu = (0,
        se.Z)({}, ml.F, pl.Z)
          , Uu = {
            enter_code: {
                en: "ENTER YOUR ZIP CODE",
                es: "Ingresa tu c\xf3digo postal"
            },
            channels_in_area_upper: {
                en: "CHANNELS IN YOUR AREA",
                es: "Canales en tu \xe1rea"
            },
            channels_in_area_lower: {
                en: "See available channels in your area",
                es: "Canales disponibles en tu \xe1rea"
            },
            enter_your_home: {
                en: "Enter your home ZIP code for channels available in your area.",
                es: "Ingresa tu c\xf3digo postal para conocer los canales disponibles en tu \xe1rea."
            },
            placeholder: {
                en: "Enter Zip Code",
                es: "Ingresa Tu C\xf3digo Postal"
            },
            button: {
                en: "SUBMIT",
                es: "Enviar"
            },
            disclaimer: {
                en: "Live TV is available for those live local, regional,\n    and national channels available in your area, which are subject to change.\n    Certain channels or content may not be available in all locations or on all devices.",
                es: "Hulu con TV en vivo est\xe1 disponible en los canales locales, regionales y nacionales en vivo disponibles en tu \xe1rea, los cuales estan sujetos a cambios. Ciertos canales podr\xedan ofrecen solo contenido on demand. Ciertos canales o contenidos podr\xedan no estar disponibles en todas las \xe1reas o en todos los dispositivos."
            },
            disclaimer_detailed: {
                en: "Live TV is available for those live local, regional, and national channels available in your area, which are subject to change.\n    Certain channels or content may not be available in all locations or on all devices.",
                es: "Hulu con TV en vivo est\xe1 disponible en los canales locales, regionales y nacionales en vivo disponibles en tu \xe1rea, los cuales estan sujetos a cambios. Ciertos canales podr\xedan ofrecen solo contenido on demand. Ciertos canales o contenidos podr\xedan no estar disponibles en todas las \xe1reas o en todos los dispositivos."
            },
            on_demand: {
                en: "On Demand only",
                es: "Solo On Demand"
            },
            disclaimer_on_demand: {
                en: "This channel is only available On Demand for your ZIP code. National programming, including most shows and movies, is typically available the day after air on broadcast TV.",
                es: "Este canal solo est\xe1 disponible On Demand en tu c\xf3digo postal. La programaci\xf3n nacional, incluyendo la mayor\xeda de los programas y pel\xedculas, se encuentra disponible al d\xeda siguiente de su transmisi\xf3n en vivo en TV."
            },
            channels_sports: {
                en: "Sports Channels",
                es: "Canales de deportes"
            },
            channels_local: {
                en: "Live Local Channels",
                es: "Canales locales en vivo"
            },
            channels_entertainment: {
                en: "Entertainment & Lifestyle Channels",
                es: "Canales de entretenimiento y estilo de vida"
            },
            channels_family: {
                en: "Family & Kids Channels",
                es: "Canales familiares y para ni\xf1os"
            },
            channels_movies: {
                en: "Movies Channels",
                es: "Canales de pel\xedculas"
            },
            channels_news: {
                en: "News Channels",
                es: "Canales de noticias"
            },
            channels_premium: {
                en: "Add-on Premium Channels",
                es: "Add-ons de Canales Premium"
            },
            error_invalid: {
                en: "This is an invalid ZIP code. Please try again.",
                es: "Este c\xf3digo postal no es v\xe1lido. Por favor intenta de nuevo."
            },
            error_try_later: {
                en: "Something went wrong! Please try again later.",
                es: "Algo no sali\xf3 bien. Por favor intenta de nuevo m\xe1s tarde."
            },
            entertainment_addon: {
                en: "Entertainment Add-on",
                es: "Entertainment Add-on"
            },
            espanol_addon: {
                en: "Espa\xf1ol Add-on",
                es: "Espa\xf1ol Add-on"
            },
            sports_addon: {
                en: "Sports Add-on",
                es: "Deportes Add-on"
            }
        }
          , Bu = (n(67702),
        de.createElement)
          , Fu = function(e) {
            var t, n, a = e.categoryIndex, r = e.index, i = e.channel, o = e.locale, l = new gc(o).translateAll(Uu), s = l.on_demand, c = l.disclaimer_on_demand;
            return Bu("div", {
                className: "NetworkIcon",
                key: "".concat(a, ".").concat(r),
                role: "listitem",
                "aria-label": null === i || void 0 === i ? void 0 : i.network_name
            }, Bu("div", {
                className: "NetworkIcon__frame"
            }, Bu("span", {
                className: "NetworkIcon__logo ".concat(null !== i && void 0 !== i && null !== (t = i.artwork) && void 0 !== t && t.be_source ? "NetworkIcon__logo-be" : ""),
                style: function(e) {
                    var t, n;
                    return null !== e && void 0 !== e && null !== (t = e.artwork) && void 0 !== t && t.path ? {
                        backgroundImage: "url(".concat(null === e || void 0 === e || null === (n = e.artwork) || void 0 === n ? void 0 : n.path, ")")
                    } : {}
                }(i)
            }, Bu("span", {
                className: null !== i && void 0 !== i && null !== (n = i.artwork) && void 0 !== n && n.path ? "NetworkIcon__network-name-invisible" : ""
            }, null === i || void 0 === i ? void 0 : i.network_name))), (null === i || void 0 === i ? void 0 : i.on_demand) && Bu("div", {
                className: "NetworkIcon__badge"
            }, Bu("span", {
                className: "HuluTooltip",
                "data-tip": !0,
                "data-for": "sadFace"
            }, s), Bu(Pu(), {
                id: "sadFace",
                place: "right",
                type: "light",
                effect: "solid"
            }, Bu("div", {
                className: "onDemandTooltip"
            }, Bu("div", null, Bu(xe.Z, {
                variant: "body12"
            }, c))))))
        }
          , qu = (n(58356),
        function(e) {
            return null === e || void 0 === e ? void 0 : e.match(/\b\d{5}\b/)
        }
        )
          , Gu = n(86130)
          , Wu = n(9521)
          , zu = {
            error_invalid: {
                en: "We didn\u2019t recognize that ZIP code. Please check your ZIP code and try again.",
                es: "No reconocimos ese c\xf3digo postal Por favor verifique el c\xf3digo y intenta de nuevo."
            }
        }
          , Vu = (n(43013),
        de.createElement)
          , Yu = function(e) {
            var t, n, a, r, i = e.zipcode, o = e.area, l = e.isInvalidZipcode, s = e.isLoading, c = e.submitSearch, u = e.handleChangeZipCode, d = e.zipCodeInputRef, m = e.locale, p = new gc(m).translateAll(zu), f = (0,
            je.GO)({
                event_name: "zip_module_search",
                zip_code: d && qu(null === d || void 0 === d || null === (t = d.current) || void 0 === t ? void 0 : t.value) ? null === d || void 0 === d || null === (n = d.current) || void 0 === n ? void 0 : n.value : null
            }, (0,
            je.D4)("button", "home_zip_code_check", {
                zip_code: d && qu(null === d || void 0 === d || null === (a = d.current) || void 0 === a ? void 0 : a.value) ? null === d || void 0 === d || null === (r = d.current) || void 0 === r ? void 0 : r.value : null
            }));
            return Vu("form", {
                onSubmit: function(e) {
                    return c(e)
                }
            }, Vu("div", {
                className: "ZipCodeInput"
            }, Vu("span", null, Vu("input", {
                type: "tel",
                id: "zipcode-input",
                className: "ZipCodeInput__input\n            ".concat(l ? "error" : null),
                value: i,
                maxLength: "5",
                onChange: function(e) {
                    return u(e)
                },
                "aria-label": "Enter Zip Code".concat(l ? ": ".concat(p.error_invalid) : ""),
                "aria-invalid": l ? "true" : "false",
                ref: d
            }), !s && Vu(f, {
                className: "ZipCodeInput__submitButton",
                type: "submit"
            }, Vu(Gu.Z, {
                className: "ZipCodeInput__searchIcon",
                fill: "white"
            })), s && Vu("span", {
                className: "ZipCodeInput__loadingIcon"
            })), l && Vu("label", {
                className: "ZipCodeInput__invalidZip",
                htmlFor: "zipcode-input"
            }, Vu(Wu.Z, {
                fill: "red"
            }), Vu(xe.Z, {
                variant: "body12"
            }, p.error_invalid)), o && Vu(xe.Z, {
                variant: "body16",
                className: "ZipCodeInput__area"
            }, o, " Area")))
        }
          , Ku = de.createElement
          , Xu = function(e) {
            var t = e.sharedZipCode
              , n = e.sharedArea
              , a = e.sharedResults
              , r = e.sharedInvalidState
              , i = e.locale
              , o = e.close
              , l = e.promotedChannelList
              , s = e.updateParent
              , c = (0,
            de.useState)(t || "")
              , u = c[0]
              , d = c[1]
              , m = (0,
            de.useState)(n || "")
              , p = m[0]
              , f = m[1]
              , v = (0,
            de.useState)(a || [])
              , h = v[0]
              , g = v[1]
              , _ = (0,
            de.useState)(!(null !== a && void 0 !== a && a.length))
              , b = _[0]
              , y = _[1]
              , w = (0,
            de.useState)(!1)
              , N = w[0]
              , k = w[1]
              , S = (0,
            de.useState)(r || !1)
              , x = S[0]
              , T = S[1]
              , O = (0,
            de.useState)(!1)
              , E = O[0]
              , P = O[1]
              , C = new gc(i).translateAll(Uu)
              , D = (0,
            de.useRef)(null)
              , Z = (0,
            de.useRef)(null)
              , I = function() {
                T(!0),
                k(!1)
            }
              , M = function(e, t) {
                var n = e.findIndex((function(e) {
                    return (null === e || void 0 === e ? void 0 : e.name) === t
                }
                ));
                !function(e) {
                    var t;
                    g(e),
                    k(!1),
                    null === Z || void 0 === Z || null === (t = Z.current) || void 0 === t || t.blur()
                }(-1 !== n ? [].concat((0,
                Jn.Z)(e.splice(n, 1)), (0,
                Jn.Z)(e)) : e)
            }
              , A = function(e) {
                return he.channelsMap.get(e)
            }
              , L = C.channels_in_area_lower
              , R = C.disclaimer
              , j = C.disclaimer_detailed
              , H = C.error_try_later;
            return Ku("div", {
                className: "ZipModal"
            }, Ku(Uo.Modalv2, {
                model: {
                    id: "zip-modal"
                },
                deepLinkAnchor: "allchannels",
                title: L,
                close: function() {
                    s(u, p, h, x),
                    o()
                }
            }, Ku("div", {
                className: "NetworksWithGeo"
            }, Ku(Yu, {
                zipcode: u,
                area: p,
                isInvalidZipcode: x,
                isLoading: N,
                submitSearch: function(t) {
                    t && t.preventDefault();
                    var n = e.filterChannel;
                    if (qu(u)) {
                        k(!0),
                        y(!1);
                        var a = (0,
                        gi.X)("site").replace(/^http(s)?:/i, window.location.protocol);
                        fetch("".concat(a, "/api/3.0/channels/local/").concat(u, "?group_by=category&be_localsonly=1")).then((function(e) {
                            return e.json()
                        }
                        )).then((function(e) {
                            if (e && e.length > 0) {
                                var t = "/api/geolocation/getAreafromZip/".concat(u);
                                fetch(t, {
                                    method: "GET"
                                }).then((function(e) {
                                    return e.text()
                                }
                                )).then((function(e) {
                                    return f(e || "")
                                }
                                )),
                                g([]),
                                P(!1),
                                T(!1),
                                M(e, n || l)
                            } else
                                I()
                        }
                        ), (function() {
                            !function() {
                                var e;
                                P(!0),
                                k(!1),
                                null === Z || void 0 === Z || null === (e = Z.current) || void 0 === e || e.blur()
                            }()
                        }
                        )).then((function() {
                            D.current.focus()
                        }
                        ))
                    } else
                        I()
                },
                handleChangeZipCode: function(e) {
                    d(e.target.value),
                    T(!1)
                },
                zipCodeInputRef: Z
            }), Ku(xe.Z, {
                as: "p",
                variant: "body12",
                className: "NetworksWithGeo__legalAdvice"
            }, b ? R : j), Ku("div", {
                ref: D
            }, E && Ku("label", {
                className: "server-error heading4",
                htmlFor: "zipcode-input"
            }, Ku(xe.Z, {
                variant: "title-24"
            }, H)), h && h.length > 0 && Ku("div", {
                className: "NetworksWithGeo__channelsContainer"
            }, h.map((function(e, t) {
                return Ku("div", {
                    key: t,
                    className: "NetworksWithGeo__channelCategory"
                }, Ku(xe.Z, {
                    as: "h3",
                    variant: "subtitle-18",
                    className: "NetworksWithGeo__channelCategoryTitle"
                }, C[A(e.name)]), Ku("div", {
                    className: "NetworksWithGeo__networksIconGroup",
                    role: "list",
                    "aria-label": "List of ".concat(C[A(e.name)])
                }, e.channels.map((function(e, n) {
                    return Ku(Fu, {
                        categoryIndex: t,
                        channel: e,
                        index: n,
                        locale: i,
                        key: "".concat(null === e || void 0 === e ? void 0 : e.network_name, " ").concat(n)
                    })
                }
                ))))
            }
            )))))))
        };
        Xu.defaultProps = {
            locale: "en-us"
        };
        var Ju = Xu
          , Qu = (0,
        se.Z)({}, ml.F, pl.Z)
          , $u = n(70131)
          , ed = (0,
        me.shape)({
            slug: me.string,
            isApplicable: me.boolean
        })
          , td = (0,
        me.shape)({
            richText: me.string,
            modalId: me.string
        })
          , nd = (0,
        me.shape)({
            id: me.string,
            richText: me.string,
            modalLinkText: me.string,
            modalId: me.string
        })
          , ad = (0,
        me.shape)({
            slug: me.string,
            headline: me.string.isRequired,
            description: td,
            disclaimer: nd,
            plans: (0,
            me.arrayOf)(ed)
        })
          , rd = (0,
        me.shape)({
            slug: me.string,
            headline: me.string.isRequired,
            displayStrikethroughPrices: me.boolean,
            prices: (0,
            me.arrayOf)((0,
            me.shape)({
                priceNote: me.string,
                price: me.string,
                originalPrice: me.string
            }))
        })
          , id = (0,
        me.shape)({
            slug: me.string,
            headline: me.string,
            eyebrow: me.string,
            badge: me.string,
            ctaText: me.string,
            mobileCtaText: me.string,
            ctaAction: me.string,
            ctaBtnStyle: me.string,
            name: me.string
        })
          , od = (0,
        me.shape)({
            richText: me.string,
            modalLinkText: me.string,
            modalContent: me.string
        })
          , ld = ((0,
        me.shape)({
            headline: me.string.isRequired,
            description: me.string,
            addonsHeadline: me.string,
            addonsDescription: me.string,
            image: me.string,
            plans: (0,
            me.arrayOf)(id).isRequired,
            pricingRows: (0,
            me.arrayOf)(rd),
            features: (0,
            me.arrayOf)(ad),
            featureDisclaimers: (0,
            me.arrayOf)(od),
            addons: (0,
            me.arrayOf)(ad),
            addonDisclaimers: (0,
            me.arrayOf)(od)
        }),
        de.createElement)
          , sd = function(e) {
            var t = e.disclaimer
              , n = t.modalContent
              , a = t.richText
              , r = t.modalLinkText
              , i = e.index
              , o = e.type
              , l = Boolean(n)
              , s = "".concat(o, "-disclaimer-modal");
            return ld("div", {
                className: "plans-container__features-container col-xs-12"
            }, ld("div", {
                className: "plans-container__features-container__disclaimer"
            }, ld("span", {
                dangerouslySetInnerHTML: {
                    __html: a
                }
            }), l && ld("a", {
                "data-toggle": "modal",
                "data-target": "#".concat(s, "__").concat(i),
                title: a,
                role: "button",
                onClick: function() {
                    (0,
                    Tl.fireUtagLink)({
                        event_name: s,
                        cta_placement: "comparison_chart"
                    }),
                    (0,
                    Tl.fireUserInteraction)(s, "click", "click")
                }
            }, r)), l && ld(Uo.view, {
                model: {
                    id: "".concat(s, "__").concat(i)
                },
                className: "plan-addon__info-modal"
            }, ld("div", null, ld("div", {
                dangerouslySetInnerHTML: {
                    __html: n
                }
            }))))
        }
          , cd = de.createElement
          , ud = function(e) {
            var t = e.feature
              , n = t.headline
              , a = t.plans
              , r = t.bullet
              , i = t.description
              , o = i.richText
              , l = i.modalId
              , s = e.index
              , c = e.type
              , u = e.numPlans
              , d = o || l
              , m = "".concat(c, "-description-tooltip")
              , p = ue()("col-xs-6", "col-lg-5", "plan-feature__title", {
                "plan-feature__standard": !r
            })
              , f = cd(xe.Z, {
                variant: "body16",
                className: "plan-feature__bullet_default"
            }, "\u2014")
              , v = cd("img", {
                src: "/static/hitch/static/icons/Pricing_Checkmark_green-light.svg",
                role: "presentation",
                alt: n
            })
              , h = o ? "#".concat(m, "_").concat(s) : "#".concat(l);
            return cd("div", {
                className: "plan-feature-item"
            }, cd("div", {
                className: p
            }, cd("div", null, cd(xe.Z, {
                variant: "body16"
            }, n), d && cd("span", null, cd("a", {
                "data-toggle": "modal",
                "data-target": h,
                className: "plan-addon__info",
                title: "".concat(n, " info"),
                role: "button",
                onClick: function(e) {
                    var t = "".concat(ft()(e, "target.dataset.column", "NO_COL"), "-").concat(ft()(e, "target.dataset.feature", "NO_FEATURE"));
                    (0,
                    Tl.fireUtagLink)({
                        event_name: "tooltip_plans",
                        cta_placement: "comparison_chart",
                        tool_tip: t
                    }),
                    (0,
                    Tl.fireUserInteraction)(m, "click", "click")
                },
                href: h
            }, cd("img", {
                src: "/static/hitch/static/icons/Info_Icon_Dark_Grey.svg",
                role: "presentation",
                alt: n
            })), o && cd(Uo.view, {
                model: {
                    id: "".concat(m, "_").concat(s)
                },
                className: "plan-addon__info-modal"
            }, cd("div", null, cd(xe.Z, {
                as: "h3",
                variant: "title32",
                className: "plan-addon__header"
            }, n), cd("div", {
                dangerouslySetInnerHTML: {
                    __html: o
                }
            })))))), a.map((function(e, t) {
                var n = e.slug
                  , a = e.isApplicable
                  , r = e.text
                  , i = a ? v : f
                  , o = r ? function(e) {
                    return cd(xe.Z, {
                        variant: "body16",
                        className: "plan-feature__bullet_text"
                    }, e)
                }(r) : i;
                return cd(de.Fragment, {
                    key: t
                }, cd("div", {
                    className: "col-xs-".concat(12 / u, " plan-feature__check plan-feature__check-").concat(t),
                    key: "".concat(n, "_").concat(t)
                }, cd("div", {
                    className: "plan-feature__bullet"
                }, o)), cd("div", {
                    className: "plan-feature__separator"
                }))
            }
            )))
        }
          , dd = de.createElement
          , md = function(e) {
            var t = e.isBadgePresent
              , n = e.plan
              , a = n.headline
              , r = n.disclaimer
              , i = r.richText
              , o = r.modalLinkText
              , l = r.modalContent
              , s = r.id
              , c = n.ctaAction
              , u = n.ctaText
              , d = n.mobileCtaText
              , m = n.ctaBtnStyle
              , p = n.eyebrow
              , f = n.badge
              , v = n.name
              , h = e.index
              , g = e.numPlans
              , _ = ue()("plan-head__card", "plan-head__card-".concat(h), "col-xs-".concat(12 / g), {
                "plan-head__card--short": !t
            })
              , b = (0,
            je.GO)({
                event_name: "plan_select",
                cta_placement: "comparison_chart",
                product_name: v
            }, (0,
            je.pS)(He.Z, "plan_select"))
              , y = function(t) {
                return dd(b, {
                    className: "plan-card__cta plan-card__".concat(h, "_cta"),
                    onClick: function(t) {
                        !function(t) {
                            t.stopPropagation();
                            var n = e.user
                              , a = e.network
                              , r = e.requirePremium
                              , i = e.cartAbandonment
                              , o = null;
                            r && a.length && (o = (0,
                            Ae.QM)(r, a));
                            var l = {
                                user: n,
                                from: o,
                                componentUrl: c,
                                ctaFields: {},
                                cartAbandonment: i
                            };
                            (0,
                            Re.AU)(l)
                        }(t)
                    },
                    "aria-label": "Get ".concat(a, " plan"),
                    useStyle: m,
                    fullWidth: !0
                }, t)
            };
            return dd("div", {
                className: _
            }, dd("div", {
                className: "plan-head__card-content"
            }, t && dd("div", {
                className: "plan-head__card-badge"
            }, f && dd(xe.Z, {
                breakpoints: {
                    xs: "eyebrow10",
                    xl: "eyebrow12"
                }
            }, f)), dd("div", {
                className: "plan-head__card-title"
            }, dd(xe.Z, {
                breakpoints: {
                    xs: "title14",
                    md: "title18",
                    xl: "title24"
                }
            }, a)), dd("div", {
                className: "plan-head__card-eyebrow"
            }, dd(xe.Z, {
                breakpoints: {
                    xs: "eyebrow10",
                    md: "eyebrow12",
                    xl: "eyebrow14"
                }
            }, p)), dd("div", {
                className: "plan-card__button-wrapper"
            }, y(u)), dd("div", {
                className: "plan-card__button-wrapper--mobile"
            }, y(d)), i && dd(je.m7.span, {
                className: "plan-head__card-disclaimer",
                dangerouslySetInnerHTML: {
                    __html: i
                }
            }), l && dd(de.Fragment, null, dd("span", {
                className: "plan-head__card-disclaimer"
            }, dd("a", {
                "data-toggle": "modal",
                "data-target": "#plan-disclaimer-modal__".concat(s),
                "data-id": "plan-disclaimer-modal",
                title: i,
                role: "button",
                onClick: function(e) {
                    var t = ft()(e, "target")
                      , n = t && t.getAttribute("data-id");
                    n && ((0,
                    Tl.fireUtagLink)({
                        event_name: n,
                        cta_placement: "comparison_chart"
                    }),
                    (0,
                    Tl.fireUserInteraction)(n, "click", "click"))
                }
            }, " ", dd(xe.Z, {
                variant: "body10"
            }, o))), dd(Uo.view, {
                model: {
                    id: "plan-disclaimer-modal__".concat(s)
                },
                className: "plan-addon__info-modal"
            }, dd("div", null, dd("div", {
                dangerouslySetInnerHTML: {
                    __html: l
                }
            }))))))
        }
          , pd = de.createElement
          , fd = function(e) {
            var t = e.pricingRow
              , n = t.slug
              , a = t.headline
              , r = t.displayStrikethroughPrices
              , i = t.prices
              , o = e.numPlans;
            return pd("div", {
                className: "plan-feature-item"
            }, pd("div", {
                className: "col-xs-6 col-lg-5 plan-feature__title"
            }, pd(xe.Z, {
                variant: "body16"
            }, a)), i.map((function(e, t) {
                var a = e.priceNote
                  , i = e.price
                  , l = e.originalPrice
                  , s = "" !== a ? "".concat(i).concat(a) : i;
                return pd(de.Fragment, {
                    key: t
                }, pd("div", {
                    className: "col-xs-".concat(12 / o, " plan-feature__check plan-feature__check-").concat(t),
                    key: "".concat(n, "_").concat(t)
                }, pd("div", {
                    className: "plan-feature__bullet"
                }, r && pd(xe.Z, {
                    variant: "body12",
                    className: "plan-feature__bullet_text--strikethrough"
                }, l), pd(xe.Z, {
                    breakpoints: {
                        xs: "body16",
                        md: "body18"
                    },
                    className: "plan-feature__bullet_text"
                }, s))), pd("div", {
                    className: "plan-feature__separator"
                }))
            }
            )))
        }
          , vd = function(e) {
            var t = (0,
            de.useState)(hd(e ? e.current : null))
              , n = t[0]
              , a = t[1]
              , r = (0,
            de.useCallback)((function() {
                e.current && a(hd(e.current))
            }
            ), [e]);
            return (0,
            de.useLayoutEffect)((function() {
                var t = e.current;
                if (t) {
                    if (r(),
                    "function" === typeof ResizeObserver) {
                        var n = new ResizeObserver((function() {
                            return r()
                        }
                        ));
                        return n.observe(t),
                        function() {
                            n && (n.disconnect(),
                            n = null)
                        }
                    }
                    return window.addEventListener("resize", r),
                    function() {
                        window.removeEventListener("resize", r)
                    }
                }
            }
            ), [e.current]),
            n
        };
        function hd(e) {
            return e ? e.getBoundingClientRect() : {
                bottom: 0,
                height: 0,
                left: 0,
                right: 0,
                top: 0,
                width: 0
            }
        }
        n(44465);
        var gd, _d = de.createElement, bd = function(e) {
            var t = e.model
              , n = t.headline
              , a = t.description
              , r = t.addonsHeadline
              , i = t.addonsDescription
              , o = t.image
              , l = t.plans
              , s = t.pricingRows
              , c = t.features
              , u = t.featureDisclaimers
              , d = t.addons
              , m = t.addonDisclaimers
              , p = e.user
              , f = e.requirePremium
              , v = e.network
              , h = (0,
            de.useState)(!1)
              , g = h[0]
              , _ = h[1]
              , b = (0,
            de.useState)(!1)
              , y = b[0]
              , w = b[1]
              , N = (0,
            de.useState)(0)
              , k = N[0]
              , S = N[1]
              , x = (0,
            de.useState)(0)
              , T = x[0]
              , O = x[1]
              , E = (0,
            de.useState)(!1)
              , P = E[0]
              , C = E[1]
              , D = (0,
            de.useRef)(null)
              , Z = (0,
            de.useRef)(null)
              , I = (0,
            de.useRef)(null)
              , M = (0,
            de.useRef)(null)
              , A = l.some((function(e) {
                return e.badge
            }
            ))
              , L = l.length
              , R = vd(D)
              , j = vd(Z)
              , H = vd(I)
              , U = {
                "plan-head-fixed": g,
                "plan-head-fixed--flush": g && !P
            }
              , B = {
                headColumnClass: ue()("col-xs-12", "col-lg-5", "plan-head-column", {
                    "plan-head-column--short": !A
                }, U),
                headClass: ue()("col-xs-12", "col-lg-7", "plan-head", U),
                headContainer: ue()("plan-head-container", U),
                featureClass: ue()("plan-feature", U),
                addonsClass: ue()("plan-addon", {
                    "plan-addon_show": y
                }),
                plansContainerClass: ue()("plans-container")
            };
            (0,
            de.useEffect)((function() {
                return F(),
                window.addEventListener("resize", F),
                function() {
                    window.removeEventListener("resize", F)
                }
            }
            ), [R, j, H]);
            var F = function() {
                var e = document.querySelector("header")
                  , t = !!e && e.classList.contains("navigation--sticky");
                C(t);
                var n = {
                    desktop: t ? -e.offsetHeight : 0,
                    mobile: t ? -e.offsetHeight : 0
                }
                  , a = window.innerWidth < 1024
                  , r = a ? j.height + n.mobile : n.desktop
                  , i = a ? H.height - n.mobile - window.innerHeight : H.height - n.desktop - window.innerHeight;
                O(i),
                S(r)
            };
            return _d("div", {
                className: "plan-comparison-chart cu-plans",
                id: "plans",
                role: "region",
                "aria-label": "Plans",
                ref: M
            }, _d("div", {
                className: B.plansContainerClass
            }, _d($u.df, {
                rootMargin: "".concat(k, "px 0px 0px 0px"),
                onChange: function(e) {
                    return function(e) {
                        var t = M.current.getBoundingClientRect().top < window.innerHeight;
                        _(!e && t)
                    }(e)
                }
            }, _d("div", {
                className: "plans__observer"
            })), _d("div", {
                className: B.headContainer,
                ref: D,
                style: {
                    top: (0,
                    Xr.isBrowser)() && window.innerWidth < 1024 ? P ? -(j.height - 74) : -j.height : P ? 74 : 0
                }
            }, _d("div", {
                className: B.headColumnClass,
                ref: Z
            }, _d(xe.Z, {
                as: "h3",
                breakpoints: {
                    xs: "title24",
                    md: "title32"
                },
                className: "plan-head__headline"
            }, n), _d("div", {
                className: "plan-head__description",
                dangerouslySetInnerHTML: {
                    __html: a
                }
            }), o && _d("img", {
                className: "plan-head__image",
                src: o
            })), _d("div", {
                className: B.headClass,
                ref: I
            }, l.map((function(e, t) {
                return _d(md, {
                    numPlans: L,
                    plan: e,
                    key: "feature-plan-".concat(t),
                    user: p,
                    network: v,
                    requirePremium: f,
                    isBadgePresent: A,
                    index: t
                })
            }
            )))), _d("div", {
                className: B.featureClass,
                style: {
                    paddingTop: g ? R.height : null
                }
            }, s.map((function(e) {
                return _d(fd, {
                    numPlans: L,
                    key: e.slug,
                    pricingRow: e
                })
            }
            )), c.map((function(e, t) {
                return _d(ud, {
                    numPlans: L,
                    key: e.slug,
                    feature: e,
                    index: t,
                    type: "feature"
                })
            }
            ))), u.length > 0 && _d("div", {
                className: "plan-feature-disclaimers"
            }, u.map((function(e, t) {
                return _d("div", {
                    key: "feature-disclaimer-".concat(t),
                    className: "plans-disclaimer__container"
                }, _d(sd, {
                    disclaimer: e,
                    index: t,
                    type: "feature"
                }))
            }
            ))), d.length > 0 && _d(de.Fragment, null, _d("div", {
                className: B.addonsClass
            }, _d("div", {
                className: "plan-addon__head col-xs-12"
            }, _d("div", {
                className: "col-lg-6 plan-addon__head-desktop"
            }, _d(xe.Z, {
                as: "h3",
                breakpoints: {
                    xs: "title24",
                    md: "title32"
                },
                className: "plan-addon__head-title"
            }, r), _d("div", {
                className: "plan-addon__head-desc",
                dangerouslySetInnerHTML: {
                    __html: i
                }
            }))), _d("div", {
                className: "plan-body__addon_container"
            }, d.map((function(e, t) {
                return _d(ud, {
                    key: e.slug,
                    feature: e,
                    numPlans: L,
                    index: t,
                    type: "addon"
                })
            }
            ))), m.length > 0 && _d("div", {
                className: "plans-container__bottom-container"
            }, m.map((function(e, t) {
                return _d(sd, {
                    key: "addon-disclaimer-".concat(t),
                    disclaimer: e,
                    index: t,
                    type: "addon"
                })
            }
            )))), _d("div", {
                className: "plan-addon_controller",
                onClick: function() {
                    (0,
                    ve.JW)("default", "landing_plan_add_ons:".concat(y ? "hide" : "show"), "click", !1),
                    w(!y)
                },
                role: "button",
                "aria-label": "See Addons",
                "aria-pressed": "false"
            }, _d(xe.Z, {
                variant: "body16"
            }, "".concat(y ? "Hide" : "Show", " Add-ons")), _d("img", {
                src: "/static/hitch/static/icons/Dropdown_".concat(y ? "Up" : "Down", "_Arrow.svg"),
                role: "presentation",
                alt: "See Add-ons."
            })))), _d($u.df, {
                rootMargin: "100% 0px ".concat(T, "px 0px"),
                onChange: function() {
                    _(!1)
                }
            }, _d("div", {
                className: "plans__bottom-observer"
            })))
        }, yd = (0,
        ye.connect)((function(e) {
            var t, n;
            return {
                user: e.user,
                ctaFields: e[Ge],
                network: (null === (t = e.detailEntity) || void 0 === t ? void 0 : t.network) || (null === (n = e.detailEntity) || void 0 === n ? void 0 : n.networkUpsell),
                requirePremium: e.detailEntity.requirePremium
            }
        }
        ))(bd), wd = (gd = {},
        (0,
        se.Z)(gd, Ge, Ve),
        (0,
        se.Z)(gd, $r, ii),
        (0,
        se.Z)(gd, ml.F, pl.Z),
        (0,
        se.Z)(gd, Ye, $e),
        gd), Nd = (0,
        me.shape)({
            slug: me.string,
            isApplicable: me.boolean
        }), kd = (0,
        me.shape)({
            richText: me.string,
            modalId: me.string
        }), Sd = (0,
        me.shape)({
            id: me.string,
            richText: me.string,
            modalLinkText: me.string,
            modalId: me.string
        }), xd = (0,
        me.shape)({
            slug: me.string,
            headline: me.string.isRequired,
            description: kd,
            disclaimer: Sd,
            plans: (0,
            me.arrayOf)(Nd)
        }), Td = (0,
        me.shape)({
            slug: me.string,
            headline: me.string.isRequired,
            displayStrikethroughPrices: me.boolean,
            prices: (0,
            me.arrayOf)((0,
            me.shape)({
                priceNote: me.string,
                price: me.string,
                originalPrice: me.string
            }))
        }), Od = (0,
        me.shape)({
            slug: me.string,
            headline: me.string,
            eyebrow: me.string,
            eyebrowImage: me.string,
            badge: me.string,
            ctaText: me.string,
            mobileCtaText: me.string,
            ctaAction: me.string,
            ctaBtnStyle: me.string,
            name: me.string
        }), Ed = (0,
        me.shape)({
            richText: me.string,
            modalLinkText: me.string,
            modalContent: me.string
        }), Pd = ((0,
        me.shape)({
            toggleEnabled: me.boolean,
            toggleDefaultValue: me.boolean,
            toggleOnLabel: me.string,
            toggleOnImage: me.string,
            toggleOffLabel: me.string,
            toggleOffImage: me.string,
            toggleModalId: me.string,
            isDarkMode: me.boolean,
            headline: me.string.isRequired,
            description: me.string,
            addonsHeadline: me.string,
            addonsDescription: me.string,
            disclaimer: me.string,
            toggleOffPlans: (0,
            me.arrayOf)(Od).isRequired,
            toggleOnPlans: (0,
            me.arrayOf)(Od),
            pricingRows: (0,
            me.arrayOf)(Td),
            toggleOffFeatures: (0,
            me.arrayOf)(xd),
            toggleOnFeatures: (0,
            me.arrayOf)(xd),
            toggleOffFeatureDisclaimers: (0,
            me.arrayOf)(Ed),
            toggleOnFeatureDisclaimers: (0,
            me.arrayOf)(Ed),
            toggleOffAddons: (0,
            me.arrayOf)(xd),
            toggleOnAddons: (0,
            me.arrayOf)(xd),
            toggleOffAddonDisclaimers: (0,
            me.arrayOf)(Ed),
            toggleOnAddonDisclaimers: (0,
            me.arrayOf)(Ed)
        }),
        de.createElement), Cd = de.createContext(), Dd = function() {
            return (0,
            de.useContext)(Cd)
        }, Zd = function(e) {
            var t = e.toggleDefaultValue
              , n = e.children
              , a = (0,
            de.useState)(t)
              , r = {
                isToggleOn: a[0],
                setIsToggleOn: a[1]
            };
            return Pd(Cd.Provider, {
                value: r
            }, n)
        }, Id = (n(74030),
        de.createElement), Md = function(e) {
            var t = e.isOn
              , n = e.handleToggle
              , a = e.onClick;
            return Id("div", {
                className: "toggle-switch"
            }, Id("input", {
                checked: t,
                onClick: a,
                onChange: n,
                className: "toggle-switch__checkbox",
                id: "toggle-switch",
                type: "checkbox"
            }), Id("label", {
                className: "toggle-switch__label",
                htmlFor: "toggle-switch"
            }, Id("span", {
                className: "toggle-switch__button"
            })))
        }, Ad = (n(94762),
        de.createElement), Ld = function(e) {
            var t, n, a = e.bundle, r = a.toggleOnLabel, i = a.toggleOnImage, o = a.toggleOffLabel, l = a.toggleOffImage, s = a.toggleModalId, c = e.isDark, u = Dd(), d = u.isToggleOn, m = u.setIsToggleOn, p = "bundle_toggle_".concat(d ? "on" : "off"), f = (0,
            je.GO)({
                event_name: p,
                cta_placement: "comparison_chart"
            }, (0,
            je.pS)(Md, p));
            return Ad("div", {
                className: "bundle-header-with-new-toggle"
            }, Ad("div", {
                className: "bundle-header-with-new-toggle__left-headline"
            }, Ad("div", {
                className: "bundle-header-with-new-toggle__left-top-headline"
            }, Ad(xe.Z, {
                variant: "subtitle14"
            }, o)), (null === l || void 0 === l || null === (t = l.image) || void 0 === t ? void 0 : t.source) && Ad("div", {
                className: "bundle-header-with-new-toggle__left-bottom-headline"
            }, Ad("img", {
                src: "https:".concat(l.image.source),
                role: "presentation",
                alt: "hulu-logo"
            }))), Ad("div", {
                className: "bundle-header-with-new-toggle__toggle-container"
            }, Ad(f, {
                isOn: d,
                onColor: c ? "#1CE783" : "#040405",
                handleToggle: function() {
                    m(!d);
                    var e = new CustomEvent(he.REGISTER_MODALS_EVENT);
                    setTimeout((function() {
                        document.dispatchEvent(e)
                    }
                    ), 100)
                }
            })), Ad("div", {
                className: "bundle-header-with-new-toggle__right-headline"
            }, Ad("div", {
                className: "bundle-header-with-new-toggle__right-top-headline"
            }, Ad(xe.Z, {
                variant: "subtitle14"
            }, r), s && Ad("span", null, Ad("a", {
                "data-toggle": "toggleModal",
                "data-target": "#".concat(s),
                role: "button"
            }, Ad("img", {
                src: c ? "/static/hitch/static/icons/Info_Icon_White.svg" : "/static/hitch/static/icons/Info_Icon_Dark_Grey.svg",
                role: "presentation",
                alt: r
            })))), (null === i || void 0 === i || null === (n = i.image) || void 0 === n ? void 0 : n.source) && Ad("div", {
                className: "bundle-header-with-new-toggle__right-bottom-headline"
            }, Ad("img", {
                src: "https:".concat(i.image.source),
                role: "presentation",
                alt: "hulu-logo"
            }))))
        }, Rd = de.createElement, jd = function(e) {
            var t = e.disclaimer
              , n = t.modalContent
              , a = t.richText
              , r = t.modalLinkText
              , i = e.index
              , o = e.type
              , l = Boolean(n)
              , s = "".concat(o, "-disclaimer-modal");
            return Rd("div", {
                className: "plans-container__features-container col-xs-12"
            }, Rd("div", {
                className: "plans-container__features-container__disclaimer"
            }, Rd("span", {
                className: "section-disclaimer",
                dangerouslySetInnerHTML: {
                    __html: a
                }
            }), l && Rd("a", {
                "data-toggle": "modal",
                "data-target": "#".concat(s, "__").concat(i),
                title: a,
                role: "button",
                onClick: function() {
                    (0,
                    Tl.fireUtagLink)({
                        event_name: s,
                        cta_placement: "comparison_chart"
                    }),
                    (0,
                    Tl.fireUserInteraction)(s, "click", "click")
                }
            }, r)), l && Rd(Uo.view, {
                model: {
                    id: "".concat(s, "__").concat(i)
                },
                className: "plan-addon__info-modal"
            }, Rd("div", null, Rd("div", {
                dangerouslySetInnerHTML: {
                    __html: n
                }
            }))))
        }, Hd = de.createElement, Ud = function(e) {
            var t = e.feature
              , n = t.headline
              , a = t.plans
              , r = t.bullet
              , i = t.description
              , o = i.richText
              , l = i.modalId
              , s = e.index
              , c = e.type
              , u = e.numPlans
              , d = e.isToggleOn
              , m = e.isDark
              , p = e.highlightedColumnIndex
              , f = e.toggleHighlightedColumnIndex
              , v = "".concat(c, "-description-tooltip")
              , h = ue()("col-xs-6", "col-lg-5", "plan-feature__title", {
                "plan-feature__standard": !r
            })
              , g = Hd(xe.Z, {
                variant: "body16",
                className: "plan-feature__bullet_default"
            }, "\u2014")
              , _ = Hd("img", {
                src: m ? "/static/hitch/static/icons/Pricing_Checkmark_green-light.svg" : "/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg",
                role: "presentation",
                alt: n
            });
            return Hd("div", {
                className: "plan-feature-item"
            }, Hd("div", {
                className: h
            }, Hd("div", null, Hd(xe.Z, {
                variant: "body14"
            }, n), o && Hd("span", null, Hd("a", {
                "data-toggle": "modal",
                "data-target": l ? "#".concat(l) : "#".concat(v, "_").concat(s),
                className: "plan-addon__info",
                title: "".concat(n, " info"),
                role: "button",
                onClick: function(e) {
                    var t = "".concat(ft()(e, "target.dataset.column", "NO_COL"), "-").concat(ft()(e, "target.dataset.feature", "NO_FEATURE"));
                    (0,
                    Tl.fireUtagLink)({
                        event_name: "tooltip_plans",
                        cta_placement: "comparison_chart",
                        tool_tip: t
                    }),
                    (0,
                    Tl.fireUserInteraction)(v, "click", "click")
                }
            }, Hd("img", {
                src: m ? "/static/hitch/static/icons/Info_Icon_White.svg" : "/static/hitch/static/icons/Info_Icon_Dark_Grey.svg",
                role: "presentation",
                alt: n
            })), o && Hd(Uo.view, {
                model: {
                    id: l ? "".concat(l) : "".concat(v, "_").concat(s)
                },
                className: "plan-addon__info-modal"
            }, Hd("div", null, Hd(xe.Z, {
                as: "h3",
                variant: "title32",
                className: "plan-addon__header"
            }, n), Hd("div", {
                dangerouslySetInnerHTML: {
                    __html: o
                }
            })))))), a.map((function(e, t) {
                var n = e.slug
                  , a = e.isApplicable
                  , r = e.text
                  , i = a ? _ : g
                  , o = r ? function(e) {
                    return Hd(xe.Z, {
                        variant: "body16",
                        className: "plan-feature__bullet_text"
                    }, e)
                }(r) : i
                  , l = t === p - 1 && !d || t === f - 1 && d;
                return Hd(de.Fragment, {
                    key: t
                }, Hd("div", {
                    className: "col-xs-".concat(12 / u, " plan-feature__check plan-feature__check-").concat(l ? "highlighted" : "not-highlighted"),
                    key: "".concat(n, "_").concat(t)
                }, Hd("div", {
                    className: "plan-feature__bullet"
                }, o)), Hd("div", {
                    className: "plan-feature__separator"
                }))
            }
            )))
        }, Bd = (n(51164),
        de.createElement), Fd = function(e) {
            var t = e.headline
              , n = e.description;
            return Bd("div", {
                className: "header"
            }, Bd(xe.Z, {
                as: "h2",
                breakpoints: {
                    xs: "title32",
                    md: "title48"
                },
                className: "header__headline"
            }, t), Bd("div", {
                className: "header__description",
                dangerouslySetInnerHTML: {
                    __html: n
                }
            }))
        };
        Fd.defaultProps = {
            headline: "",
            description: ""
        };
        var qd, Gd, Wd, zd = Fd, Vd = de.createElement, Yd = function(e) {
            var t, n, a = e.isBadgePresent, r = e.isToggleOn, i = e.plan, o = i.headline, l = i.disclaimer, s = l.richText, c = l.modalLinkText, u = l.modalContent, d = l.id, m = i.ctaAction, p = i.ctaText, f = i.mobileCtaText, v = i.ctaBtnStyle, h = i.eyebrow, g = i.eyebrowImage, _ = i.badge, b = i.program, y = e.index, w = e.numPlans, N = e.isDark, k = e.highlightedColumnIndex, S = e.toggleHighlightedColumnIndex, x = y === k - 1 && !r || y === S - 1 && r, T = ue()("plan-head__card", "plan-head__card-".concat(x ? "highlighted" : "not-highlighted"), "col-xs-".concat(12 / w), {
                "plan-head__card--short": !a
            }), O = (0,
            je.GO)({
                event_name: "plan_select",
                cta_placement: "comparison_chart",
                product_name: r ? "".concat(o, "-bundle") : o
            }, (0,
            je.pS)(He.Z, "plan_select")), E = function(t) {
                t.stopPropagation();
                var n = e.user
                  , a = e.network
                  , r = e.requirePremium
                  , i = null
                  , o = m;
                b ? (i = b,
                o = null) : r && a.length && (i = (0,
                Ae.QM)(r, a));
                var l = {
                    user: n,
                    from: i,
                    componentUrl: o,
                    ctaFields: {}
                };
                (0,
                Re.AU)(l)
            }, P = function(e) {
                return Vd(O, {
                    className: "plan-card__cta plan-card__".concat(y, "_cta "),
                    onClick: E,
                    "aria-label": "Get ".concat(o, " plan"),
                    useStyle: N ? "white" : v,
                    fullWidth: !0
                }, e)
            };
            return Vd("div", {
                className: T
            }, Vd("div", {
                className: "plan-head__card-content"
            }, a && Vd("div", {
                className: "plan-head__card-badge"
            }, _ && Vd(xe.Z, {
                breakpoints: {
                    xs: "eyebrow10",
                    xl: "eyebrow14"
                }
            }, _)), null !== g && void 0 !== g && null !== (t = g.image) && void 0 !== t && t.source ? Vd("div", {
                className: "plan-head__card-eyebrow-image"
            }, Vd("img", {
                src: "https:".concat(null === g || void 0 === g || null === (n = g.image) || void 0 === n ? void 0 : n.source),
                role: "presentation",
                alt: "logos"
            })) : Vd("div", {
                className: "plan-head__card-eyebrow"
            }, Vd(xe.Z, {
                breakpoints: {
                    xs: "eyebrow10",
                    md: "eyebrow14"
                }
            }, h)), Vd("div", {
                className: "plan-head__card-title"
            }, Vd(xe.Z, {
                breakpoints: {
                    xs: "title14",
                    md: "title18",
                    xl: "title24"
                }
            }, o)), Vd("div", {
                className: "plan-card__button-wrapper"
            }, P(p)), Vd("div", {
                className: "plan-card__button-wrapper--mobile"
            }, P(f)), s && Vd(je.m7.span, {
                className: "plan-head__card-disclaimer",
                dangerouslySetInnerHTML: {
                    __html: s
                }
            }), u && Vd(de.Fragment, null, Vd("span", {
                className: "plan-head__card-disclaimer"
            }, Vd("a", {
                "data-toggle": "modal",
                "data-target": "#plan-disclaimer-modal__".concat(d),
                "data-id": "plan-disclaimer-modal",
                title: s,
                role: "button",
                onClick: function(e) {
                    var t = ft()(e, "target")
                      , n = t && t.getAttribute("data-id");
                    n && ((0,
                    Tl.fireUtagLink)({
                        event_name: n,
                        cta_placement: "comparison_chart"
                    }),
                    (0,
                    Tl.fireUserInteraction)(n, "click", "click"))
                }
            }, " ", Vd(xe.Z, {
                variant: "body10"
            }, c))), Vd(Uo.view, {
                model: {
                    id: "plan-disclaimer-modal__".concat(d)
                },
                className: "plan-addon__info-modal"
            }, Vd("div", null, Vd("div", {
                dangerouslySetInnerHTML: {
                    __html: u
                }
            }))))))
        }, Kd = de.createElement, Xd = function(e) {
            var t = e.isToggleOn
              , n = e.pricingRow
              , a = n.slug
              , r = n.headline
              , i = n.prices
              , o = e.numPlans
              , l = e.highlightedColumnIndex
              , s = e.toggleHighlightedColumnIndex
              , c = t ? i.slice(i.length - o) : i.slice(0, o);
            return Kd("div", {
                className: "plan-feature-item"
            }, Kd("div", {
                className: "col-xs-6 col-lg-5 plan-feature__title"
            }, Kd(xe.Z, {
                variant: "body14"
            }, r)), c.map((function(e, n) {
                var r = e.priceNote
                  , i = e.price
                  , c = e.originalPriceOverride
                  , u = "" !== r ? "".concat(i).concat(r) : i
                  , d = n === l - 1 && !t || n === s - 1 && t;
                return Kd(de.Fragment, {
                    key: n
                }, Kd("div", {
                    className: "col-xs-".concat(12 / o, " plan-feature__check plan-feature__check-").concat(d ? "highlighted" : "not-highlighted"),
                    key: "".concat(a, "_").concat(n)
                }, Kd("div", {
                    className: "plan-feature__bullet"
                }, c && Kd(xe.Z, {
                    variant: "body12",
                    className: "plan-feature__bullet_text--strikethrough"
                }, c), Kd(xe.Z, {
                    breakpoints: {
                        xs: "body14",
                        md: "body16"
                    },
                    className: "plan-feature__bullet_text"
                }, u))), Kd("div", {
                    className: "plan-feature__separator"
                }))
            }
            )))
        }, Jd = (n(51763),
        de.createElement), Qd = function(e) {
            var t = e.model
              , n = t.headline
              , a = t.description
              , r = t.addonsHeadline
              , i = t.addonsDescription
              , o = t.highlightedColumnIndex
              , l = t.toggleHighlightedColumnIndex
              , s = t.isDarkMode
              , c = t.toggleOnPlans
              , u = t.toggleOffPlans
              , d = t.toggleOffPricingRows
              , m = t.toggleOnPricingRows
              , p = t.toggleOnFeatures
              , f = t.toggleOffFeatures
              , v = t.toggleOnFeatureDisclaimers
              , h = t.toggleOffFeatureDisclaimers
              , g = t.toggleOnAddons
              , _ = t.toggleOffAddons
              , b = t.toggleOnAddonDisclaimers
              , y = t.toggleOffAddonDisclaimers
              , w = t.toggleEnabled
              , N = t.toggleOnLabel
              , k = t.toggleOnImage
              , S = t.toggleOffLabel
              , x = t.toggleOffImage
              , T = t.toggleModalId
              , O = e.user
              , E = e.requirePremium
              , P = e.network
              , C = {
                "is-dark": s
            }
              , D = Dd().isToggleOn
              , Z = (0,
            de.useState)(!1)
              , I = Z[0]
              , M = Z[1]
              , A = (0,
            de.useState)(!1)
              , L = A[0]
              , R = A[1]
              , j = (0,
            de.useState)(0)
              , H = j[0]
              , U = j[1]
              , B = (0,
            de.useState)(0)
              , F = B[0]
              , q = B[1]
              , G = (0,
            de.useState)(0)
              , W = G[0]
              , z = G[1]
              , V = (0,
            de.useState)(0)
              , Y = V[0]
              , K = V[1]
              , X = (0,
            de.useState)(!1)
              , J = X[0]
              , Q = X[1]
              , $ = (0,
            de.useRef)(null)
              , ee = (0,
            de.useRef)(null)
              , te = (0,
            de.useRef)(null)
              , ne = (0,
            de.useRef)(null)
              , ae = (0,
            de.useRef)(null)
              , re = D ? c : u
              , ie = D ? p : f
              , oe = D ? v : h
              , le = D ? g : _
              , se = D ? b : y
              , ce = re.some((function(e) {
                return e.badge
            }
            ))
              , me = re.length
              , pe = {
                "plan-head-fixed": I
            }
              , fe = {
                headColumnClass: ue()("col-xs-12", "col-lg-5", "plan-head-column-for-new-toggle", {
                    "plan-head-column--short": !ce
                }, pe),
                headClass: ue()("col-xs-12", "col-lg-7", "plan-head", pe),
                headContainer: ue()("plan-head-container", pe),
                featureClass: ue()("plan-feature", pe),
                addonsClass: ue()("plan-addon", {
                    "plan-addon_show": L
                }),
                plansContainerClass: ue()("exp-plans-container")
            };
            (0,
            de.useEffect)((function() {
                return he(),
                window.addEventListener("resize", he),
                function() {
                    window.removeEventListener("resize", he)
                }
            }
            ), []);
            var he = function() {
                var e = document.querySelector("header")
                  , t = !!e && e.classList.contains("navigation--sticky");
                Q(t);
                var n = {
                    desktop: t ? -e.offsetHeight : 0,
                    mobile: t ? -e.offsetHeight : 0
                }
                  , a = window.innerWidth < 1024
                  , r = $.current.getBoundingClientRect().height
                  , i = ee.current.getBoundingClientRect().height
                  , o = te.current.getBoundingClientRect().height
                  , l = a ? i + n.mobile : n.desktop
                  , s = a ? o - n.mobile - window.innerHeight : o - n.desktop - window.innerHeight;
                q(s),
                U(l),
                z(r),
                K(i)
            };
            return Jd(Qa.a, {
                theme: s ? tr.oneHuluDarkTheme : tr.oneHuluLightTheme
            }, Jd("div", {
                className: ue()("exp-plan-comparison-chart", "cu-plans", C),
                id: "plans",
                role: "region",
                "aria-label": "Plans",
                ref: ne
            }, Jd("div", {
                className: fe.plansContainerClass
            }, Jd(zd, {
                headline: n,
                description: a
            }), Jd($u.df, {
                rootMargin: "".concat(H, "px 0px 0px 0px"),
                onChange: function(e) {
                    return function(e) {
                        var t = ne.current.getBoundingClientRect().top
                          , n = ae.current.getBoundingClientRect().top
                          , a = t < window.innerHeight
                          , r = n < window.innerHeight;
                        M(!e && a && r)
                    }(e)
                }
            }, Jd("div", {
                className: "plans__observer"
            })), Jd("div", {
                className: fe.headContainer,
                ref: $,
                style: {
                    top: (0,
                    Xr.isBrowser)() && window.innerWidth < 1024 ? J ? -(Y - 74) : -Y : J ? 74 : 0
                }
            }, Jd("div", {
                className: fe.headColumnClass,
                ref: ee
            }, w && Jd(Ld, {
                bundle: {
                    toggleOnLabel: N,
                    toggleOnImage: k,
                    toggleOffLabel: S,
                    toggleOffImage: x,
                    toggleModalId: T
                },
                isDark: s
            })), Jd("div", {
                className: fe.headClass,
                ref: te
            }, re.map((function(e, t) {
                return Jd(Yd, {
                    numPlans: me,
                    plan: e,
                    key: "feature-plan-".concat(t),
                    user: O,
                    network: P,
                    requirePremium: E,
                    isBadgePresent: ce,
                    isToggleOn: D,
                    index: t,
                    isDark: s,
                    highlightedColumnIndex: o,
                    toggleHighlightedColumnIndex: l
                })
            }
            )))), Jd("div", {
                className: fe.featureClass,
                style: {
                    paddingTop: I ? W : null
                },
                ref: ae
            }, (D ? m : d).map((function(e) {
                return Jd(Xd, {
                    isToggleOn: D,
                    numPlans: me,
                    key: e.slug,
                    pricingRow: e,
                    highlightedColumnIndex: o,
                    toggleHighlightedColumnIndex: l
                })
            }
            )), ie.map((function(e, t) {
                return Jd(Ud, {
                    numPlans: me,
                    key: e.slug,
                    feature: e,
                    index: t,
                    type: "feature",
                    isToggleOn: D,
                    isDark: s,
                    highlightedColumnIndex: o,
                    toggleHighlightedColumnIndex: l
                })
            }
            ))), oe.length > 0 && Jd("div", {
                className: "plan-feature-disclaimers"
            }, oe.map((function(e, t) {
                return Jd("div", {
                    key: "feature-disclaimer-".concat(t),
                    className: "plans-disclaimer__container"
                }, Jd(jd, {
                    disclaimer: e,
                    index: t,
                    type: "feature"
                }))
            }
            ))), le.length > 0 && Jd(de.Fragment, null, Jd("div", {
                className: fe.addonsClass
            }, Jd("div", {
                className: "plan-addon__head col-xs-12"
            }, Jd("div", {
                className: "col-lg-6 plan-addon__head-desktop"
            }, Jd(xe.Z, {
                as: "h3",
                breakpoints: {
                    xs: "title24",
                    md: "title32"
                },
                className: "plan-addon__head-title"
            }, r), Jd("div", {
                className: "plan-addon__head-desc",
                dangerouslySetInnerHTML: {
                    __html: i
                }
            }))), Jd("div", {
                className: "plan-body__addon_container"
            }, le.map((function(e, t) {
                return Jd(Ud, {
                    key: e.slug,
                    feature: e,
                    numPlans: me,
                    index: t,
                    type: "addon",
                    isDark: s
                })
            }
            ))), se.length > 0 && Jd("div", {
                className: "plans-container__bottom-container"
            }, se.map((function(e, t) {
                return Jd(jd, {
                    key: "addon-disclaimer-".concat(t),
                    disclaimer: e,
                    index: t,
                    type: "addon"
                })
            }
            )))), Jd("div", {
                className: "plan-addon_controller",
                onClick: function() {
                    (0,
                    ve.JW)("default", "landing_plan_add_ons:".concat(L ? "hide" : "show"), "click", !1),
                    R(!L)
                },
                role: "button",
                "aria-label": "See Addons",
                "aria-pressed": "false",
                style: L ? {
                    "border-top": "none"
                } : {}
            }, "".concat(L ? "Hide" : "Show", " Add-ons"), Jd("img", {
                src: "/static/hitch/static/icons/Dropdown_".concat(L ? "Up" : "Down", "_Arrow.svg"),
                role: "presentation",
                alt: "See Add-ons."
            })))), Jd($u.df, {
                rootMargin: "100% 0px ".concat(F, "px 0px"),
                onChange: function() {
                    M(!1)
                }
            }, Jd("div", {
                className: "plans__bottom-observer"
            }))))
        }, $d = function(e) {
            var t = e.model.toggleDefaultValue;
            return Jd(Zd, {
                toggleDefaultValue: t
            }, Jd(Qd, e))
        }, em = (0,
        ye.connect)((function(e) {
            var t, n;
            return {
                user: e.user,
                ctaFields: e[Ge],
                network: (null === (t = e.detailEntity) || void 0 === t ? void 0 : t.network) || (null === (n = e.detailEntity) || void 0 === n ? void 0 : n.networkUpsell),
                requirePremium: e.detailEntity.requirePremium
            }
        }
        ))($d), tm = (qd = {},
        (0,
        se.Z)(qd, Ge, Ve),
        (0,
        se.Z)(qd, $r, ii),
        (0,
        se.Z)(qd, ml.F, pl.Z),
        (0,
        se.Z)(qd, Ye, $e),
        qd), nm = (0,
        me.shape)({
            highlight: me.bool,
            id: (0,
            me.oneOfType)([me.number, me.string]).isRequired,
            price: (0,
            me.shape)({
                displayPrice: me.string.isRequired
            }).isRequired,
            label: me.string,
            headline: me.string.isRequired,
            subheadline: me.string,
            program: me.string,
            features: (0,
            me.oneOfType)([(0,
            me.arrayOf)(me.string), me.string]),
            addon_headline: me.string,
            open_addons: me.string,
            close_addons: me.string,
            text_addons: (0,
            me.arrayOf)(me.string),
            cta_button_style: me.string,
            below_cta: me.string,
            mobile_button: me.string,
            mobile_close: me.string,
            ctaTextStates: (0,
            me.shape)({}),
            ctaActionStates: (0,
            me.shape)({})
        }), am = ((0,
        me.shape)({
            headline: me.string.isRequired,
            description: me.string,
            disclaimer: me.string,
            plans: (0,
            me.arrayOf)(nm).isRequired
        }),
        n(44924),
        de.createElement), rm = function(e) {
            var t = (0,
            de.useState)(!1)
              , n = t[0]
              , a = t[1]
              , r = (0,
            de.useState)(!1)
              , i = r[0]
              , o = r[1]
              , l = (0,
            de.useState)(!1)
              , s = l[0]
              , c = l[1]
              , u = (0,
            de.useState)(null)
              , d = u[0]
              , m = u[1]
              , p = e.model
              , f = p.highlight
              , v = p.id
              , h = p.price
              , g = h.displayPrice
              , _ = h.frequencyOverride
              , b = p.label
              , y = p.headline
              , w = p.subheadline
              , N = p.features
              , k = p.addon_headline
              , S = p.open_addons
              , x = p.close_addons
              , T = p.text_addons
              , O = p.cta_button_style
              , E = p.below_cta
              , P = p.mobile_button
              , C = p.mobile_close
              , D = p.ctaTextStates
              , Z = p.ctaActionStates
              , I = p.program
              , M = e.user
              , A = e.ctaFields
              , L = e.someCardIsHighlighted
              , R = e.locale
              , j = e.isOneUpPlan
              , H = e.cartAbandonment
              , U = e.network
              , B = e.requirePremium
              , F = e.onMouseEnteredOrLeft;
            (0,
            de.useEffect)((function() {
                var e = (0,
                bi.l7)();
                m("Phone" === e || "Tablet" === e ? {} : {
                    onMouseEnter: q,
                    onMouseLeave: G
                })
            }
            ), []),
            (0,
            de.useEffect)((function() {
                F(n)
            }
            ), [n]);
            var q = function() {
                a(!n)
            }
              , G = function() {
                a(!1)
            }
              , W = function() {
                o(!i)
            }
              , z = {
                user: M,
                program_type: null,
                componentNonSubCta: D[he.ANON],
                componentSubCta: D[he.PARTIALLY_ENTITLED],
                componentAllCta: D[he.FULLY_ENTITLED],
                locale: R,
                ctaFields: A,
                cartAbandonment: H
            }
              , V = (0,
            Ae.V6)(z)
              , Y = null === g || void 0 === g ? void 0 : g.split("/")
              , K = null === Y || void 0 === Y ? void 0 : Y[0]
              , X = _ || (null === Y || void 0 === Y ? void 0 : Y[1])
              , J = (0,
            je.pS)(He.Z, "cta_plans");
            J = (0,
            je.GO)({
                event_name: (0,
                Le.vl)(M),
                cta_placement: "plan_card",
                product_name: (0,
                Le.em)(v)
            }, J);
            var Q = O
              , $ = ue()("plan-card", {
                "plan-card--highlight": f && !L || n
            }, {
                "plan-card--one-up": j
            })
              , ee = ue()("plan-card__expanded-section", !!i && "plan-card__expanded-section--open", {
                "plan-card__expanded-section--open": j
            })
              , te = ue()("plan-card__wrapper", {
                "plan-card__wrapper--one-up": j
            })
              , ne = ue()("plan-card__mobile-wrapper", !!s && "plan-card__mobile-wrapper--open", {
                "plan-card__mobile-wrapper--open": j
            })
              , ae = ue()("plan-card__expand-button", !!i && "plan-card__expand-button--open")
              , re = ue()("plan-card__mobile-expand-button", !!s && "plan-card__mobile-expand-button--open");
            return am("div", (0,
            we.Z)({
                className: $
            }, d), am("div", {
                className: "plan-card__border"
            }), am("div", {
                className: te
            }, am("div", {
                className: "plan-card__header"
            }, b && am("div", {
                className: "plan-card__label"
            }, am(xe.Z, {
                as: "p",
                variant: "eyebrow12",
                className: "plan-card__label-text"
            }, b)), am(xe.Z, {
                as: "h3",
                "data-automationid": "plan_card_header",
                breakpoints: {
                    xs: "label14",
                    lg: "label16"
                }
            }, y), w && am("p", {
                dangerouslySetInnerHTML: {
                    __html: w
                }
            }), am("div", {
                className: "plan-card__priceline"
            }, am(xe.Z, {
                as: "p",
                breakpoints: {
                    xs: "title32",
                    md: "title40"
                },
                className: "plan-card__amount"
            }, K, "/"), am(xe.Z, {
                as: "p",
                variant: "body16"
            }, X)), am("div", {
                className: "plan-card__button-wrapper"
            }, am(J, {
                className: "plan-card__cta",
                useStyle: Q,
                onClick: function(e) {
                    e.stopPropagation();
                    var t = null;
                    I ? t = I : B && null !== U && void 0 !== U && U.length && (t = (0,
                    Ae.QM)(B, U));
                    var n = Z[M.entitlementState]
                      , a = {
                        user: M,
                        componentUrl: n,
                        ctaFields: A,
                        from: t,
                        cartAbandonment: H
                    };
                    (0,
                    Re.AU)(a)
                },
                "aria-label": "Select plan - ".concat(y, " for ").concat(K, " USD per ").concat(X),
                fullWidth: !0
            }, V)), am("div", {
                className: "plan-card__sublink"
            }, E && am(je.m7.div, {
                dangerouslySetInnerHTML: {
                    __html: E
                }
            }))), am("div", {
                className: ne
            }, am("div", {
                className: "plan-card__list section-body"
            }, am("ul", null, N && (0,
            za.Y)(N).map((function(e, t) {
                return am("li", {
                    key: t
                }, am("span", {
                    className: "plan-card__list-check",
                    role: "presentation"
                }), am(xe.Z, {
                    variant: "body16"
                }, e))
            }
            )))), am("div", {
                className: ee
            }, am("div", {
                className: "plan-card__expanded-heading"
            }, am(xe.Z, {
                variant: "eyebrow14"
            }, k)), am("div", {
                className: "plan-card__addons"
            }, am("ul", null, T && (0,
            za.Y)(T).map((function(e, t) {
                return am("li", {
                    key: t
                }, " ", function(e) {
                    if (!e.includes(he.TOOLTIP_PLACEHOLDER))
                        return e;
                    var t = e.indexOf(he.TOOLTIP_PLACEHOLDER)
                      , n = e.slice(t, e.length)
                      , a = e.slice(0, t);
                    return am(de.Fragment, null, am(xe.Z, {
                        variant: "body16"
                    }, e.replace(n, "")), am("button", {
                        "aria-label": "More Information about ".concat(a),
                        className: "button-link",
                        "data-target": n
                    }, am("img", {
                        className: "plan-card__tooltip",
                        role: "presentation"
                    })))
                }(e), " ")
            }
            )))))), !j && am("div", {
                className: "plan-card__expander",
                "aria-hidden": "true"
            }, am("button", {
                tabIndex: "0",
                "aria-label": i ? x : "".concat(S, " for ").concat(y, " plan"),
                className: ae,
                onClick: W,
                onKeyDown: (0,
                fe.P)(W),
                onMouseDown: fe.W
            }, i ? x : S, "\xa0", am("span", {
                className: "plan-card__icon-plus"
            })), am("button", {
                className: re,
                onClick: function() {
                    c(!s)
                }
            }, s ? C : P, "\xa0", am("span", {
                className: "plan-card__icon-plus-mobile"
            })))))
        }, im = (n(1279),
        de.createElement), om = function(e) {
            var t = (0,
            de.useState)(!1)
              , n = t[0]
              , a = t[1]
              , r = e.model
              , i = r.headline
              , o = r.description
              , l = r.plans
              , s = r.disclaimer
              , c = e.user
              , u = e.ctaFields
              , d = e.enableBrand
              , m = e.network
              , p = e.requirePremium
              , f = e.cartAbandonment
              , v = ue()("plan-container", "container-width", "cu-plans")
              , h = ue()("plan-container__row", {
                "plan-container__has-three": 3 === l.length
            })
              , g = ue()("plan-container__headline", {
                "plan-container__headline--brand": d
            })
              , _ = function(e) {
                a(e)
            };
            return im("div", {
                className: v,
                id: "plans",
                role: "region",
                "aria-label": "Plans"
            }, im("div", {
                className: "plan-container__header"
            }, i && im(xe.Z, {
                as: "h2",
                breakpoints: {
                    xs: "title32",
                    md: "title40",
                    lg: "title48"
                },
                className: g
            }, i), o && im(xe.Z, {
                as: "p",
                breakpoints: {
                    xs: "body16",
                    lg: "body24"
                },
                className: "plan-container__description"
            }, o)), im("div", {
                className: h
            }, l && l.map((function(e, t) {
                return im(rm, {
                    key: t,
                    index: t,
                    model: e,
                    user: c,
                    ctaFields: u,
                    someCardIsHighlighted: n,
                    onMouseEnteredOrLeft: _,
                    isOneUpPlan: 1 === l.length,
                    network: m,
                    requirePremium: p,
                    cartAbandonment: f
                })
            }
            ))), s && im("div", {
                className: "plan-container__disclaimer section-disclaimer section-disclaimer--dark"
            }, im(je.m7.div, {
                dangerouslySetInnerHTML: {
                    __html: s
                }
            })))
        }, lm = (0,
        ye.connect)((function(e) {
            var t, n;
            return {
                user: e.user,
                ctaFields: e[Ge],
                network: (null === (t = e.detailEntity) || void 0 === t ? void 0 : t.network) || (null === (n = e.detailEntity) || void 0 === n ? void 0 : n.networkUpsell),
                requirePremium: e.detailEntity.requirePremium
            }
        }
        ))(om), sm = (Gd = {},
        (0,
        se.Z)(Gd, Ye, $e),
        (0,
        se.Z)(Gd, Ge, Ve),
        (0,
        se.Z)(Gd, $r, ii),
        Gd), cm = ((0,
        me.shape)({
            name: me.string.isRequired,
            availableSeasons: me.number,
            episodeCount: me.number,
            ctaText: me.string,
            ctaUrl: me.string,
            ctaDownloadAppText: me.string,
            legalText: me.string
        }),
        n(4026),
        de.createElement), um = (0,
        je.GO)({
            event_name: "login",
            cta_placement: "signup_modal",
            page_type: "signup_browse"
        }, (0,
        je.pS)(He.Z, "cta_modal", "login")), dm = function(e) {
            var t = e.model
              , n = t.name
              , a = t.availableSeasons
              , r = t.episodeCount
              , i = t.ctaText
              , o = t.legalText
              , l = t.bodyText
              , s = t.premiereDate
              , c = t.contentType
              , u = t.ctaDownloadAppText
              , d = t.isOriginalContent
              , m = t.ctaUrl
              , p = e.user.isHuluUser
              , f = e.user
              , v = e.ctaFields
              , h = e.locale
              , g = e.cartAbandonment
              , _ = e.contentOverrides
              , b = e.asPath
              , y = e.network
              , w = e.requirePremium
              , N = e.host
              , k = (0,
            za.vx)(s) && d
              , S = (0,
            Ae.Z0)({
                isHuluUser: p,
                asPath: b,
                url: N
            })
              , x = p && (0,
            Xr.mobileDetect)().mobile() && u
              , T = (0,
            je.GO)({
                event_name: (0,
                Le.vl)(f, x),
                cta_placement: "signup_modal",
                page_type: "signup_browse"
            }, (0,
            je.pS)(He.Z, "cta_modal"))
              , O = c === he.MOVIE ? he.HULU_UPCOMING_MOVIE_TITLE : he.HULU_UPCOMING_SERIES_TITLE
              , E = k ? "".concat(O, " ").concat((0,
            za.QM)(s)) : "Start watching <span>".concat((null === _ || void 0 === _ ? void 0 : _.overrideName) || n, "</span>")
              , P = a && r && !k ? "".concat(a, " ").concat((0,
            za.Ho)(a, "season"), " available (").concat(r, " ").concat((0,
            za.Ho)(r, "episode"), ")") : null
              , C = {
                user: f,
                componentNonSubCta: i,
                locale: h,
                ctaFields: v,
                cartAbandonment: g
            }
              , D = x ? u : (0,
            Ae.V6)(C);
            return cm(Uo.view, {
                model: {
                    id: he.MODAL_NAME_SIGNUP
                },
                className: "signup-modal__parent"
            }, cm("div", {
                className: "signup-modal"
            }, cm("span", {
                className: "signup-modal__brand",
                href: "/"
            }, cm("span", null, "hulu"), cm("div", {
                className: "signup-modal__logo"
            }, cm(Vo, null))), cm(xe.Z, {
                as: "div",
                className: "signup-modal__headline",
                variant: "body24"
            }, cm("div", {
                dangerouslySetInnerHTML: {
                    __html: E
                }
            })), P && cm(xe.Z, {
                as: "div",
                variant: "body16",
                className: "signup-modal__subheadline"
            }, cm("span", null, P)), cm(xe.Z, {
                as: "div",
                variant: "body16",
                className: "signup-modal__body"
            }, l), !p && cm(um, {
                className: "signup-modal__button signup-modal__button-white",
                useStyle: "secondary",
                onClick: function() {
                    window.location.assign(S)
                }
            }, "Log In"), cm(T, {
                className: "signup-modal__button signup-modal__button-black",
                useStyle: "black",
                onClick: function() {
                    var e = (0,
                    Ae.QM)(w, y)
                      , t = {
                        user: f,
                        componentUrl: m,
                        ctaFields: v,
                        from: e,
                        cartAbandonment: g
                    };
                    x ? window.location.assign((0,
                    Re.cv)()) : (0,
                    Re.AU)(t)
                }
            }, D), o && cm(xe.Z, {
                as: "div",
                variant: "body12",
                className: "signup-modal__legal"
            }, cm("span", {
                dangerouslySetInnerHTML: {
                    __html: o
                }
            }))))
        }, mm = (0,
        ye.connect)((function(e) {
            var t, n;
            return {
                user: e.user,
                ctaFields: e[Ge],
                network: (null === (t = e.detailEntity) || void 0 === t ? void 0 : t.network) || (null === (n = e.detailEntity) || void 0 === n ? void 0 : n.networkUpsell),
                requirePremium: e.detailEntity.requirePremium
            }
        }
        ))(dm), pm = (Wd = {},
        (0,
        se.Z)(Wd, Ye, $e),
        (0,
        se.Z)(Wd, ml.F, pl.Z),
        (0,
        se.Z)(Wd, Ge, Ve),
        (0,
        se.Z)(Wd, $r, ii),
        Wd), fm = (0,
        me.shape)({
            eyebrow: me.string,
            headline: me.string,
            subheadline: me.string,
            disclaimer: me.string,
            logos: (0,
            me.arrayOf)(Vi),
            desktopBackgroundImage: Js,
            mobileBackgroundImage: Js
        }), vm = ((0,
        me.shape)({
            spotTabs: (0,
            me.arrayOf)(fm).isRequired
        }),
        n(88665),
        de.createElement), hm = function(e) {
            var t = e.items
              , n = e.tabArray
              , a = e.tabOffset
              , r = e.activeBarStyles
              , i = e.activeTab
              , o = e.onClick;
            return vm("div", {
                className: "TabButtons",
                style: {
                    transform: "translateX(calc(-".concat(a, "px))")
                }
            }, t.map((function(e, t) {
                var a = e.eyebrow
                  , l = "tab".concat(t)
                  , s = i === t;
                return vm("button", {
                    "aria-label": "".concat(a, " tab"),
                    key: l,
                    id: l,
                    ref: n[t],
                    className: ue()("TabButtons__tab", {
                        "--active": s
                    }),
                    onClick: function() {
                        return o(t)
                    }
                }, vm(xe.Z, {
                    variant: "navigation12",
                    style: {
                        fontWeight: "bold"
                    }
                }, a), 0 === t && vm("div", {
                    className: "TabButtons__activeBar",
                    style: r
                }))
            }
            )))
        }, gm = (n(31448),
        de.createElement), _m = function(e) {
            var t = e.items
              , n = e.activeTab;
            return gm("div", {
                className: "TabContent"
            }, t.map((function(e, t) {
                var a = e.headline
                  , r = e.subheadline
                  , i = e.logos
                  , o = e.disclaimer
                  , l = t === n;
                return gm("div", {
                    key: "".concat(a, "Content"),
                    className: ue()("TabContent__container", {
                        "--inactive": !l
                    })
                }, gm("div", {
                    className: ue()("TabContent__headline", {
                        "--raised": i.length > 4
                    })
                }, gm(xe.Z, {
                    breakpoints: {
                        xs: "title32",
                        md: "title48"
                    }
                }, a)), gm("div", {
                    className: "TabContent__subheadline"
                }, gm(xe.Z, {
                    breakpoints: {
                        xs: "body16",
                        lg: "body18"
                    }
                }, r)), gm("div", {
                    className: "TabContent__logoRow"
                }, i.map((function(e) {
                    return gm("div", {
                        "aria-label": "".concat(e.name, " logo"),
                        key: e.name,
                        role: "listitem",
                        className: "TabContent__logo"
                    }, gm(ro, {
                        model: e
                    }))
                }
                ))), gm(xe.Z, {
                    as: "div",
                    variant: "body12"
                }, gm("p", {
                    className: "TabContent__disclaimer section-disclaimer",
                    dangerouslySetInnerHTML: {
                        __html: o
                    }
                })))
            }
            )))
        }, bm = (n(67190),
        de.createElement), ym = function(e) {
            var t, n = e.model.spotTabs, a = (0,
            un.w)().windowSize.width, r = a ? a < he.BREAKPOINTS.LARGE : null, i = (0,
            de.useState)(0), o = i[0], l = i[1], s = (0,
            de.useState)(0), c = s[0], u = s[1], d = (0,
            de.useState)(0), m = d[0], p = d[1], f = (0,
            de.useState)(0), v = f[0], h = f[1], g = n.map((function() {
                return (0,
                de.useRef)(null)
            }
            )), _ = {
                width: "".concat(c, "px"),
                transform: "translateX(".concat(m, "px)")
            }, b = r ? "linear-gradient(180deg, rgba(0, 0, 0, 0.8) -39.59%, rgba(0, 0, 0, 0) 117.14%), url(".concat(null === (t = n[o]) || void 0 === t ? void 0 : t.mobileBackgroundImage.url, ")") : "linear-gradient(90deg, rgba(0, 0, 0, 0.8) -57.5%, rgba(0, 0, 0, 0) 98.72%), url(".concat(n[o].desktopBackgroundImage.url, ")");
            function y(e) {
                if (r) {
                    if (window.innerWidth) {
                        var t = window.innerWidth
                          , n = g[0].current
                          , a = g[g.length - 1].current
                          , i = a.offsetLeft + a.offsetWidth - n.offsetLeft;
                        if (t < i) {
                            var o = g[e].current.offsetLeft - n.offsetLeft;
                            i - o < t && (o = i - t + 2 * n.offsetLeft),
                            h(o)
                        }
                    }
                } else
                    h(0)
            }
            return (0,
            de.useEffect)((function() {
                u(g[o].current.offsetWidth)
            }
            ), [o]),
            (0,
            de.useEffect)((function() {
                null !== r && (n.forEach((function(e) {
                    (new Image).src = r ? e.mobileBackgroundImage.url : e.desktopBackgroundImage.url
                }
                )),
                p(g[o].current.offsetLeft - g[0].current.offsetLeft),
                y(o))
            }
            ), [r]),
            bm("div", {
                id: "SpotlightTabs",
                className: "SpotlightTabs",
                style: {
                    backgroundImage: b
                }
            }, bm("div", {
                className: "SpotlightTabs__outerContainer"
            }, bm("div", {
                className: "SpotlightTabs__innerContainer"
            }, bm(hm, {
                items: n,
                tabArray: g,
                tabOffset: v,
                activeBarStyles: _,
                activeTab: o,
                onClick: function(e) {
                    l(e),
                    p(g[e].current.offsetLeft - g[0].current.offsetLeft),
                    y(e)
                }
            }), bm(_m, {
                items: n,
                activeTab: o
            }))))
        }, wm = (me.PropTypes.shape({
            model: (0,
            me.shape)({
                description: me.PropTypes.string,
                headline: me.PropTypes.string,
                disclaimerDesktop: me.PropTypes.string,
                disclaimerMobile: me.PropTypes.string,
                styleMode: me.PropTypes.string,
                deviceTabs: (0,
                me.arrayOf)((0,
                me.shape)({
                    title: me.string,
                    devices: (0,
                    me.arrayOf)((0,
                    me.shape)({
                        icon: me.string,
                        label: me.string
                    }))
                }))
            })
        }),
        n(8383),
        de.createElement), Nm = function(e) {
            var t = e.model
              , n = t.headline
              , a = t.description
              , r = t.disclaimerDesktop
              , i = t.disclaimerMobile
              , o = t.styleMode
              , l = t.deviceTabs
              , s = (0,
            de.useState)(0)
              , c = s[0]
              , u = s[1]
              , d = (0,
            de.useState)(!1)
              , m = d[0]
              , p = d[1]
              , f = (0,
            un.w)().windowSize.width
              , v = 768
              , h = f > v ? r : i
              , g = {
                "--dark": "dark" === o
            };
            function _() {
                p(!m)
            }
            return wm("div", {
                className: ue()("SupportedDevices", g)
            }, wm("div", {
                className: ue()("SupportedDevices__inner-container", g)
            }, wm("div", {
                className: "SupportedDevices__top-bar"
            }), wm("div", {
                className: ue()("SupportedDevices__text-fields", g)
            }, wm("div", {
                className: "SupportedDevices__headline"
            }, n), wm("div", {
                className: ue()("SupportedDevices__description", g)
            }, a)), wm("div", {
                className: "SupportedDevices__tab-section"
            }, l.map((function(e, t) {
                var n = ue()("SupportedDevices__tab", {
                    "--active": c === t
                }, g);
                return wm("button", {
                    className: n,
                    "aria-pressed": c === t,
                    "aria-label": "".concat(e.title, " tab"),
                    key: e.title,
                    onClick: function() {
                        return u(t),
                        void p(!1)
                    }
                }, e.title, " (", e.devices.length, ")")
            }
            ))), wm("div", {
                className: ue()("SupportedDevices__gray-bar", g)
            }), function() {
                var e = l[c].devices.length
                  , t = ue()("SupportedDevices__device-section", {
                    "--centered": e <= 3
                });
                return wm("div", null, wm("div", {
                    className: t
                }, l[c].devices.map((function(t, n) {
                    return n < 3 || m || f > v && e <= 6 || f <= v && e <= 4 ? wm("div", {
                        className: ue()("SupportedDevices__device", g),
                        key: "device--".concat(n)
                    }, wm("img", {
                        className: "SupportedDevices__img",
                        "aria-label": "".concat(t.label, " logo"),
                        src: t.icon,
                        role: "presentation"
                    }), wm("div", {
                        className: "SupportedDevices__text-box"
                    }, wm("div", {
                        className: "SupportedDevices__text"
                    }, t.label))) : null
                }
                ))), function(e) {
                    if (f > v && e > 6 || f <= v && e > 4) {
                        var t = ue()("SupportedDevices__view-button", {
                            "--viewingMore": m
                        }, g)
                          , n = ue()({
                            "SupportedDevices__arrow-down": !m,
                            "SupportedDevices__arrow-up": m
                        }, g);
                        return wm("button", {
                            className: t,
                            onClick: _
                        }, m ? "VIEW LESS " : "VIEW MORE ", wm("div", {
                            className: n
                        }))
                    }
                }(e))
            }()), wm("div", {
                className: ue()("SupportedDevices__disclaimer", g),
                dangerouslySetInnerHTML: {
                    __html: h
                }
            }))
        }, km = (0,
        me.shape)({
            icon: me.string.isRequired,
            name: me.string.isRequired
        }), Sm = ((0,
        me.shape)({
            name: me.string,
            id: me.string.isRequired,
            price: me.string,
            body: me.string,
            shouldRandomize: me.bool,
            logos: (0,
            me.arrayOf)(km)
        }),
        n(21445),
        de.createElement), xm = function(e) {
            var t = e.model
              , n = t.name
              , a = t.id
              , r = t.price
              , i = t.body
              , o = (0,
            de.useState)(null)
              , l = o[0]
              , s = o[1]
              , c = ft()(e, "model.shouldRandomize", !1)
              , u = {
                parentClassName: "tier-modal__logos",
                wrapperClassName: "tier-modal__logo-wrapper col-md-2",
                logoClassName: "tier-modal__logo",
                shouldRandomize: c,
                logos: ft()(e, "model.logos")
            };
            (0,
            de.useEffect)((function() {
                c && s({
                    logos: io(u)
                })
            }
            ), []);
            return Sm(Uo.view, {
                model: {
                    id: a
                },
                className: "tier-modal__parent",
                onModalOpen: function() {
                    return t = r,
                    void (null !== (e = a) && null !== t && ((0,
                    ve.DS)({
                        event_name: "add-on_tier_modal_open",
                        product_name: e,
                        product_price: t
                    }),
                    (0,
                    Fn.L9)("user_interaction", {
                        action_specifier: "tier_modal_click_productName:".concat(e, "_price:").concat(t),
                        element_specifier: "tier_modal_open",
                        hit_version: "2.4.0",
                        interaction_type: "click"
                    })));
                    var e, t
                }
            }, Sm("div", {
                className: "tier-modal"
            }, n && Sm(xe.Z, {
                as: "h3",
                variant: "title32"
            }, Sm("span", {
                className: "tier-modal__name",
                dangerouslySetInnerHTML: {
                    __html: n
                }
            })), r && Sm(xe.Z, {
                className: "tier-modal__pricing",
                as: "div",
                variant: "title32"
            }, r), i && Sm(xe.Z, {
                as: "div",
                variant: "body16"
            }, Sm("span", {
                className: "tier-modal__body",
                dangerouslySetInnerHTML: {
                    __html: i
                }
            })), c ? l : io(u)))
        }, Tm = (0,
        se.Z)({}, ml.F, pl.Z), Om = ((0,
        me.shape)({
            ctaText: me.string,
            ctaUrl: me.string,
            infoLine: me.string,
            disableInfo: me.bool,
            ctaDownloadAppText: me.string
        }),
        de.createElement);
        function Em(e) {
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
                } catch (qv) {
                    return !1
                }
            }();
            return function() {
                var n, a = (0,
                ut.Z)(e);
                if (t) {
                    var r = (0,
                    ut.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                ct.Z)(this, n)
            }
        }
        var Pm, Cm = function(e) {
            (0,
            st.Z)(a, e);
            var t = Em(a);
            function a(e) {
                var n;
                (0,
                ot.Z)(this, a);
                var r = (n = t.call(this, e)).props
                  , i = r.model
                  , o = i.ctaDownloadAppText
                  , l = i.isOriginalContent
                  , s = i.disableInfo
                  , c = i.contentType
                  , u = i.premiereDate
                  , d = r.user.isHuluUser;
                return n.onScroll = n.onScroll.bind((0,
                bt.Z)(n)),
                n.redirect = n.redirect.bind((0,
                bt.Z)(n)),
                n.shouldShowDownloadAppLink = d && (0,
                Xr.mobileDetect)().mobile() && o,
                n.isHuluUpcoming = (0,
                za.vx)(u) && l,
                n.disableMoreInfo = s || n.isHuluUpcoming,
                n.upcomingTitle = c === he.MOVIE ? he.HULU_UPCOMING_MOVIE_TITLE : he.HULU_UPCOMING_SERIES_TITLE,
                n.state = {
                    positionBottom: !1
                },
                n
            }
            return (0,
            lt.Z)(a, [{
                key: "componentDidMount",
                value: function() {
                    window.addEventListener("scroll", this.onScroll)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    window.removeEventListener("scroll", this.onScroll)
                }
            }, {
                key: "onScroll",
                value: function() {
                    var e = n.g.window.pageYOffset
                      , t = n.g.document.body.scrollHeight - 100 < e + n.g.window.innerHeight;
                    this.setState({
                        positionBottom: t
                    })
                }
            }, {
                key: "redirect",
                value: function() {
                    var e = this.props
                      , t = e.model.ctaUrl
                      , n = e.user
                      , a = e.ctaFields
                      , r = e.network
                      , i = e.requirePremium
                      , o = {
                        user: n,
                        componentUrl: t,
                        ctaFields: a,
                        cartAbandonment: e.cartAbandonment,
                        from: (0,
                        Ae.QM)(i, r)
                    };
                    this.shouldShowDownloadAppLink ? window.location.assign((0,
                    Re.cv)()) : (0,
                    Re.AU)(o)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.model
                      , n = t.ctaText
                      , a = t.infoLine
                      , r = t.ctaDownloadAppText
                      , i = t.premiereDate
                      , o = e.user
                      , l = e.ctaFields
                      , s = e.cartAbandonment
                      , c = e.locale
                      , u = this.state.positionBottom
                      , d = {
                        user: o,
                        componentNonSubCta: n,
                        locale: c,
                        ctaFields: l,
                        cartAbandonment: s
                    }
                      , m = this.shouldShowDownloadAppLink ? r : (0,
                    Ae.V6)(d)
                      , p = (0,
                    je.GO)({
                        event_name: (0,
                        Le.vl)(o, this.shouldShowDownloadAppLink),
                        cta_placement: "toaster"
                    }, (0,
                    je.pS)(He.Z, "cta_toaster"))
                      , f = ue()("Toaster", {
                        "Toaster--active": !u
                    });
                    return Om("div", {
                        className: f
                    }, Om("div", {
                        className: "Toaster__scrim"
                    }, Om(p, {
                        useStyle: "black",
                        className: "Toaster__button",
                        onClick: this.redirect
                    }, !this.disableMoreInfo && Om("p", {
                        className: "Toaster__info"
                    }, a), this.isHuluUpcoming && Om("p", {
                        className: "Toaster__info Toaster__info--upcoming"
                    }, "".concat(this.upcomingTitle, " ").concat((0,
                    za.QM)(i))), Om("p", {
                        className: "Toaster__text"
                    }, m))))
                }
            }]),
            a
        }(de.Component), Dm = (0,
        ye.connect)((function(e) {
            var t, n;
            return {
                user: e.user,
                ctaFields: e[Ge],
                network: (null === (t = e.detailEntity) || void 0 === t ? void 0 : t.network) || (null === (n = e.detailEntity) || void 0 === n ? void 0 : n.networkUpsell),
                requirePremium: e.detailEntity.requirePremium
            }
        }
        ))(Cm), Zm = (Pm = {},
        (0,
        se.Z)(Pm, Ye, $e),
        (0,
        se.Z)(Pm, Ge, Ve),
        (0,
        se.Z)(Pm, $r, ii),
        Pm), Im = (n(13960),
        de.createElement), Mm = "lp_tophat", Am = function(e) {
            var t = e.model
              , a = t.topHatId
              , r = t.body
              , i = e.shown
              , o = e.closeTopHat
              , l = e.openTopHat
              , s = e.latestSeason
              , c = !!s && (0,
            za.YI)(s.firstEpPremiereDate)
              , u = c && !a ? "".concat(Mm, "_upcoming") : a ? "".concat(Mm, "_").concat(a) : Mm
              , d = (0,
            je.GO)({
                event_name: "top_hat_close"
            }, (0,
            je.pS)("button", "tophat", "close"))
              , m = function() {
                return new Date((new Date).getTime() + 864e5)
            }
              , p = function(e, t, a) {
                var r = (0,
                de.useState)((function() {
                    try {
                        return n.g.window.localStorage.getItem(e) || t
                    } catch (a) {
                        return t
                    }
                }
                ))
                  , i = r[0]
                  , o = r[1]
                  , l = (0,
                de.useState)((function() {
                    if (!a || !i)
                        return !1;
                    var e = new Date(i).getTime();
                    return Date.now() > e
                }
                ))[0];
                return {
                    storedValue: i,
                    setValue: function(t) {
                        try {
                            var a = t instanceof Function ? t(i) : t;
                            o(a),
                            n.g.window.localStorage.setItem(e, a)
                        } catch (r) {}
                    },
                    removeValue: function(e) {
                        try {
                            n.g.window.localStorage.removeItem(e)
                        } catch (t) {}
                    },
                    isExpired: l
                }
            }(u, null, m())
              , f = p.storedValue
              , v = p.setValue
              , h = p.removeValue
              , g = p.isExpired;
            (0,
            de.useEffect)((function() {
                !g && f || (l(),
                h(u))
            }
            ), []);
            return i ? Im("div", {
                className: "tophat cu-tophat",
                role: "banner"
            }, Im(je.m7.div, {
                className: "tophat__body",
                dangerouslySetInnerHTML: {
                    __html: function() {
                        if (!c)
                            return r;
                        var e = s.season
                          , t = s.firstEpPremiereDate
                          , n = e > 0 ? "Season ".concat(e, " Coming") : "Series Premiere";
                        return "".concat(n, " ").concat((0,
                        za.QM)(t))
                    }()
                }
            }), !c && Im(d, {
                className: "tophat__button",
                onClick: function() {
                    v(m()),
                    o()
                },
                "aria-label": "Close Banner"
            }, "\xd7")) : null
        }, Lm = (0,
        se.Z)({}, Ac, Bc), Rm = (0,
        ye.connect)((function(e) {
            return {
                shown: Boolean(e.tophat.shown)
            }
        }
        ), (function(e) {
            return {
                closeTopHat: function() {
                    return e({
                        type: Lc,
                        payload: t
                    });
                    var t
                },
                openTopHat: function() {
                    return e({
                        type: Rc,
                        payload: t
                    });
                    var t
                }
            }
        }
        ))(Am), jm = de.createElement, Hm = function(e) {
            var t = e.email
              , n = e.handleChangeEmail
              , a = e.isExistingEmail
              , r = e.isInvalidEmail
              , i = e.emailCapturePrompt
              , o = e.invalidEmailErrorText
              , l = e.existingEmailErrorText
              , s = a || r;
            return jm(de.Fragment, null, jm("input", {
                type: "text",
                className: "Masthead__email-capture-input".concat(s ? "__error" : ""),
                value: t,
                placeholder: "Email",
                onChange: n,
                "aria-invalid": s ? "true" : "false",
                "aria-label": i
            }), s && jm(xe.Z, {
                as: "span",
                variant: "body12",
                className: "Masthead__email-capture-input-error-text"
            }, a && jm("div", {
                dangerouslySetInnerHTML: {
                    __html: l
                }
            }), r && o))
        }, Um = (n(67587),
        "existing"), Bm = function() {
            var e = (0,
            Se.Z)(ke().mark((function e(t) {
                var n, a, r;
                return ke().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "".concat((0,
                            gi.X)("signup"), "/api/v2/accounts/status?email=").concat(encodeURIComponent(t)),
                            e.prev = 1,
                            e.next = 4,
                            (0,
                            za.kv)(n);
                        case 4:
                            if (null === (a = e.sent) || void 0 === a || !a.ok) {
                                e.next = 10;
                                break
                            }
                            return e.next = 8,
                            a.json();
                        case 8:
                            return r = e.sent,
                            e.abrupt("return", (null === r || void 0 === r ? void 0 : r.status) === Um);
                        case 10:
                            return yi.an.error("Failed to fetch status for email ".concat(t, " from sign up API."), a.status, {
                                logName: "Signup"
                            }),
                            e.abrupt("return", {});
                        case 14:
                            return e.prev = 14,
                            e.t0 = e.catch(1),
                            yi.an.error("Failed to fetch status for email ".concat(t, " from sign up API. Error: ").concat(e.t0), {
                                logName: "Signup"
                            }),
                            e.abrupt("return", {});
                        case 18:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[1, 14]])
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), Fm = de.createElement;
        function qm(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function Gm(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? qm(Object(n), !0).forEach((function(t) {
                    (0,
                    se.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qm(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var Wm = "Code invalid. Please check your entry and try again."
          , zm = "device"
          , Vm = function(e) {
            var t = e.asPath
              , n = e.cartAbandonment
              , a = e.children
              , r = e.ctaFields
              , i = e.enableBrand
              , o = e.geodata
              , l = e.idx
              , s = e.locale
              , c = e.model
              , u = c.anchorCtaText
              , d = c.anchorCtaUrl
              , m = c.backgroundImage
              , p = c.backgroundVideos
              , f = c.brandIcon
              , v = c.cartAbandonmentCopy
              , h = c.ctaButtonStyle
              , g = c.ctaDownloadAppText
              , _ = c.ctaFormat
              , b = c.emailCapturePrompt
              , y = c.enableBrandBorder
              , w = c.existingEmailErrorText
              , N = c.headlineStates
              , k = c.invalidEmailErrorText
              , S = c.isFullscreen
              , x = c.legalStates
              , T = c.mobileFirst
              , O = c.preheadlineStates
              , E = c.programPartner
              , P = c.programSubpartner
              , C = c.programType
              , D = c.requireDeviceCode
              , Z = c.ribbon
              , I = c.secondaryCopyStates
              , M = c.secondaryCta
              , A = c.startPageHumanCodeOverride
              , L = c.style
              , R = c.subheadlineStates
              , j = c.supportingCopyStates
              , H = e.pageType
              , U = e.query
              , B = e.topHatShown
              , F = e.user
              , q = e.user
              , G = q.entitlementState
              , W = q.entitlementFlag
              , z = q.isSubscriber
              , V = q.isHuluUser
              , Y = (0,
            de.useRef)()
              , K = (0,
            de.useRef)()
              , X = (0,
            de.useRef)()
              , J = (0,
            de.useState)((0,
            _c.nY)(U))
              , Q = J[0]
              , $ = J[1]
              , ee = (0,
            de.useState)(!1)
              , te = ee[0]
              , ne = ee[1]
              , ae = (0,
            de.useState)(Wm)
              , re = ae[0]
              , ie = ae[1]
              , oe = (0,
            de.useState)("")
              , le = oe[0]
              , ce = oe[1]
              , me = (0,
            de.useState)(!1)
              , pe = me[0]
              , fe = me[1]
              , ge = (0,
            de.useState)(!1)
              , _e = ge[0]
              , be = ge[1]
              , ye = (0,
            Ae.ox)(C, D);
            (0,
            de.useEffect)((function() {
                var e, t;
                ye && $(null !== (e = null === (t = X.current) || void 0 === t ? void 0 : t.value) && void 0 !== e ? e : null)
            }
            ), []);
            var Ne = H === he.CMS_PAGETYPE.start
              , Te = V && (0,
            Xr.mobileDetect)().mobile() && g
              , Oe = Ne && A && C === he.PROGRAM_TYPE_HUMAN_CODE
              , Ee = new gc(s)
              , Pe = function() {
                return C ? he.PROGRAMS_WITH_CODE_EXCLUDE_DEVICE.includes(C) ? "promotion" : C === he.PROGRAM_TYPE_DEVICE_CODE ? zm : void 0 : null
            }
              , Ce = function() {
                var e = (0,
                Se.Z)(ke().mark((function e(t) {
                    var n, a;
                    return ke().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (n = t || {},
                                Pe() === zm && (Ks()(E) || (n.partner = E),
                                Ks()(P) || (n.subpartner = P)),
                                a = {
                                    params: n,
                                    user: F,
                                    ctaFields: r
                                },
                                !Te) {
                                    e.next = 7;
                                    break
                                }
                                window.location.assign((0,
                                Re.cv)()),
                                e.next = 15;
                                break;
                            case 7:
                                if (null === t || void 0 === t || !t.promotion_code || !z) {
                                    e.next = 11;
                                    break
                                }
                                window.location.assign("".concat((0,
                                gi.X)("hudis"), "/account/addons/confirm?code=").concat(t.promotion_code)),
                                e.next = 15;
                                break;
                            case 11:
                                return e.next = 13,
                                Bm(le);
                            case 13:
                                e.sent ? ((0,
                                ve.C6)(pu.wW.SUBSCRIBER_FOUND, "Welcome - Landing Page"),
                                be(!0)) : (a.params = Gm(Gm({}, a.params), {}, {
                                    email: "".concat(encodeURIComponent(le))
                                }),
                                (0,
                                Re.AU)(a));
                            case 15:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , De = function() {
                var e = (0,
                Se.Z)(ke().mark((function e(t) {
                    var n;
                    return ke().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if ((0,
                                za.oH)(le)) {
                                    e.next = 4;
                                    break
                                }
                                return (0,
                                ve.C6)(pu.wW.USER_INVALID_INPUT, "Welcome - Landing Page"),
                                fe(!0),
                                e.abrupt("return");
                            case 4:
                                if (!t) {
                                    e.next = 8;
                                    break
                                }
                                return n = {
                                    params: {},
                                    user: F,
                                    componentUrl: t,
                                    ctaFields: r
                                },
                                (0,
                                Re.AU)(n),
                                e.abrupt("return");
                            case 8:
                                if (!Oe) {
                                    e.next = 12;
                                    break
                                }
                                if (!z) {
                                    e.next = 12;
                                    break
                                }
                                return window.location = "/start/redeem/".concat(Q),
                                e.abrupt("return");
                            case 12:
                                ye ? Ie() : Ce();
                            case 13:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , Ze = function() {
                var e = (0,
                Se.Z)(ke().mark((function e(t, n) {
                    var a, r;
                    return ke().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (!(a = t.headers.get("content-type")) || !a.includes("application/json")) {
                                    e.next = 5;
                                    break
                                }
                                return e.next = 4,
                                t.json();
                            case 4:
                                r = e.sent;
                            case 5:
                                "undefined" === typeof ft()(r, "eligible") || ft()(r, "eligible") ? Ce((0,
                                se.Z)({}, "".concat(n, "_code"), Q)) : Me(r.reasonMessage);
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t, n) {
                    return e.apply(this, arguments)
                }
            }()
              , Ie = function() {
                var e = (0,
                Se.Z)(ke().mark((function e() {
                    var n, a, r, i;
                    return ke().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (n = Pe(),
                                "/start/vip" !== t) {
                                    e.next = 10;
                                    break
                                }
                                return e.next = 4,
                                bc(Q);
                            case 4:
                                a = e.sent,
                                r = ft()(a, "id", null),
                                a || Me(),
                                r && Ce((0,
                                se.Z)({}, "".concat(n, "_code"), Q)),
                                e.next = 14;
                                break;
                            case 10:
                                return e.next = 12,
                                (0,
                                Ae.tJ)(n, Q);
                            case 12:
                                (i = e.sent).ok ? Ze(i, n) : Me();
                            case 14:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }()
              , Me = function(e) {
                var t;
                Y && (null === (t = Y.current) || void 0 === t || t.toggle());
                var n = e || Wm;
                ne(!0),
                ie(n),
                null !== K && void 0 !== K && K.current && function(e) {
                    e.setAttribute("tabindex", "0"),
                    e.blur();
                    var t = 0
                      , n = window.setInterval((function() {
                        e.focus(),
                        ++t >= 10 && window.clearInterval(n)
                    }
                    ), 10)
                }(K.current)
            }
              , Le = function(e) {
                e.preventDefault(),
                document.querySelector(e.target.dataset.href).scrollIntoView({
                    behavior: "smooth"
                })
            }
              , Ue = function(e) {
                var t, a = e.Component, r = e.className, i = e.statefulContent, l = e.id, s = e.dataAutomationId, c = e.cartAbandonmentElCopy, u = W && G !== he.ANON ? i[G] : (null === o || void 0 === o || null === (t = o.geodataOverrides) || void 0 === t ? void 0 : t[r]) || i[he.ANON], d = (0,
                oc.n)(n, c), m = n && d ? d : u, p = {
                    className: r,
                    "data-automationid": s
                };
                return l && (p.id = l),
                m && Fm(a, (0,
                we.Z)({
                    dangerouslySetInnerHTML: {
                        __html: m
                    }
                }, p))
            };
            return Fm("div", null, ye && Fm(xc, {
                ref: Y,
                id: "masthead-banner"
            }, Fm("div", {
                ref: K,
                className: "Masthead__banner"
            }, Fm(xe.Z, {
                breakpoints: {
                    xs: "body16",
                    lg: "body24"
                },
                className: "banner__span"
            }, re))), Fm("div", {
                id: "masthead",
                className: ue()("ExpEmailCaptureMasthead", "cu-masthead", L, i ? {
                    "Masthead--brand": !0
                } : {
                    "Masthead--tall": a,
                    "Masthead--short": !m,
                    "Masthead--fullscreen": S,
                    "Masthead--tophat-included": B,
                    "Masthead--brand-border": y,
                    "gradient-skrim": !y
                }),
                role: "region",
                "aria-labelledby": "regionMasthead",
                "data-automationid": "masthead"
            }, !m && Fm(ic, null), Fm(Vl, {
                image: m,
                identifier: l,
                mobileFirst: T
            }), Fm(hc, {
                videos: p
            }), Fm("div", {
                className: "Masthead__container"
            }, Ue({
                Component: je.m7.div,
                className: "Masthead__preheadline",
                statefulContent: O,
                cartAbandonmentElCopy: null === v || void 0 === v ? void 0 : v.eyebrow
            }), Ue({
                Component: je.m7.h1,
                className: "Masthead__headline",
                statefulContent: N,
                id: "regionMasthead",
                cartAbandonmentElCopy: null === v || void 0 === v ? void 0 : v.headline,
                dataAutomationId: "masthead_headline"
            }), Ue({
                Component: je.m7.div,
                className: "Masthead__subheadline",
                statefulContent: R,
                cartAbandonmentElCopy: null === v || void 0 === v ? void 0 : v.subheadline,
                dataAutomationId: "masthead_subheadline"
            }), Ue({
                Component: je.m7.div,
                className: "Masthead__primary-message",
                statefulContent: j,
                cartAbandonmentElCopy: null === v || void 0 === v ? void 0 : v.primaryCopy
            }), Ue({
                Component: je.m7.div,
                className: "Masthead__secondary-message",
                statefulContent: I,
                cartAbandonmentElCopy: null === v || void 0 === v ? void 0 : v.secondaryCopy,
                dataAutomationId: "masthead_secondary_message"
            }), Fm("div", {
                className: "Masthead__input"
            }, ye && Fm("div", {
                className: "Masthead__input-wrapper ".concat(te && "Masthead__input--invalid")
            }, Fm("label", {
                className: "Masthead__input-label",
                htmlFor: "Masthead-input-text"
            }, "Enter your ", (0,
            Ae.nV)(C)), Fm("input", {
                type: "text",
                id: "Masthead-input-text",
                className: "Masthead__input-box",
                autoComplete: "off",
                placeholder: (0,
                Ae.nV)(C),
                onChange: function(e) {
                    $(e.target.value),
                    ne(!1)
                },
                value: Q,
                ref: X,
                onKeyUp: function(e) {
                    if ("Enter" === e.key) {
                        var t = document.querySelector(".Masthead__input-cta");
                        (0,
                        Xr.isBrowser)() && Boolean(t) && t.click()
                    }
                }
            }), Fm("div", {
                className: "Masthead__input-icon"
            }, "!")), Fm("div", {
                className: "Masthead__email-capture-container".concat(pe || _e ? "__error" : "")
            }, Fm(xe.Z, {
                as: "div",
                variant: "body16",
                className: "Masthead__email-capture-prompt"
            }, b), Fm(Hm, {
                email: le,
                handleChangeEmail: function(e) {
                    ce(e.target.value),
                    pe && fe(!1),
                    _e && be(!1)
                },
                isExistingEmail: _e,
                isInvalidEmail: pe,
                emailCapturePrompt: b,
                invalidEmailErrorText: k,
                existingEmailErrorText: w
            }), Fm(pc, {
                model: {
                    ctaFormat: _,
                    programType: C,
                    ctaButtonStyle: h,
                    anchorCtaText: u,
                    cartAbandonmentCopy: v
                },
                user: F,
                ctaFields: r,
                locale: s,
                cartAbandonment: n,
                messages: Ee.translateAll(Tc),
                ctaDownloadAppText: g,
                isHumanCodeOverride: Oe,
                shouldShowDownloadAppLink: Te,
                isStartPage: Ne,
                onSubmit: De,
                isEsLang: (0,
                Re.Ad)("es-us")
            })), u && Fm(He.Z, {
                className: "Masthead__anchor-cta",
                useStyle: h,
                "data-href": d,
                onClick: Le
            }, u), Fm(fc, {
                model: Gm(Gm({}, M), {}, {
                    cartAbandonmentCopy: v
                }),
                scrollToComponent: Le,
                onSecondarySubmit: function() {
                    (0,
                    Re.AU)({
                        params: {},
                        user: F,
                        componentUrl: M.href,
                        ctaFields: r
                    })
                },
                user: F,
                isStartPage: Ne,
                cartAbandonment: n
            })), Ue({
                Component: je.m7.div,
                className: "Masthead__legal section-disclaimer",
                statefulContent: x,
                cartAbandonmentElCopy: null === v || void 0 === v ? void 0 : v.legalCopy,
                dataAutomationId: "masthead_legal"
            }), Fm(tc, {
                brandIcon: f
            })), a && Fm("div", {
                className: "Masthead__children"
            }, a), Fm(Wo, {
                model: Z,
                asPath: t
            })))
        };
        Vm.defaultProps = {
            idx: 0,
            enableBrand: !1
        };
        var Ym, Km = Vm, Xm = (0,
        ye.connect)((function(e) {
            return {
                user: e.user,
                topHatShown: e.tophat.shown,
                ctaFields: e[Ge]
            }
        }
        ))(Km), Jm = (Ym = {},
        (0,
        se.Z)(Ym, Ye, $e),
        (0,
        se.Z)(Ym, Ac, Bc),
        (0,
        se.Z)(Ym, Ge, Ve),
        Ym), Qm = me.PropTypes.shape({
            headline: me.PropTypes.string,
            description: me.PropTypes.string
        }), $m = me.PropTypes.shape({
            columns: me.PropTypes.arrayOf(Qm)
        }), ep = (me.PropTypes.shape({
            rows: me.PropTypes.arrayOf($m),
            isSection: me.PropTypes.boolean,
            verticalAlign: me.PropTypes.oneOf(["normal", "start", "center", "end", "stretch"])
        }),
        de.createElement), tp = function(e) {
            var t = e.model
              , n = t.headline
              , a = t.description
              , r = t.columnsPerRow
              , i = {
                flex: "".concat(100 / r, "%")
            };
            return ep("div", {
                className: "exp-grid-column",
                style: i
            }, n && ep(xe.Z, {
                as: "h2",
                variant: "title32",
                className: "section-headline",
                dangerouslySetInnerHTML: {
                    __html: n
                }
            }), a && ep(je.m7.div, {
                className: "column-description",
                dangerouslySetInnerHTML: {
                    __html: a
                }
            }))
        }, np = de.createElement;
        function ap(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function rp(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ap(Object(n), !0).forEach((function(t) {
                    (0,
                    se.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ap(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var ip = function(e) {
            var t = e.model
              , n = t.columns
              , a = t.verticalAlign
              , r = n.length;
            return np("div", {
                className: "exp-grid-row",
                style: {
                    "align-items": a || "normal"
                }
            }, null === n || void 0 === n ? void 0 : n.map((function(e, t) {
                return np(tp, {
                    key: t,
                    model: rp({
                        columnsPerRow: r
                    }, e)
                })
            }
            )))
        }
          , op = (n(86234),
        de.createElement);
        function lp(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function sp(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? lp(Object(n), !0).forEach((function(t) {
                    (0,
                    se.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : lp(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var cp = function(e) {
            var t = e.model
              , n = t.isSection
              , a = t.rows
              , r = t.verticalAlign
              , i = {
                "is-section": n
            };
            return op("div", {
                className: ue()("exp-grid", i)
            }, null === a || void 0 === a ? void 0 : a.map((function(e, t) {
                return op(ip, {
                    key: t,
                    model: sp({
                        verticalAlign: r
                    }, e)
                })
            }
            )))
        }
          , up = (me.PropTypes.shape({
            chartHeader: me.PropTypes.arrayOf(me.PropTypes.shape({
                copy: me.PropTypes.string,
                badgeCopy: me.PropTypes.string,
                ctaCopy: me.PropTypes.string,
                ctaHref: me.PropTypes.string
            })),
            chartRows: me.PropTypes.arrayOf(me.PropTypes.shape({
                content: me.PropTypes.string,
                logo: me.PropTypes.string,
                features: me.PropTypes.arrayOf(me.PropTypes.bool)
            })),
            title: me.PropTypes.string,
            subtitle: me.PropTypes.string
        }),
        de.createElement);
        function dp() {
            return up("svg", {
                width: "15",
                height: "15",
                viewBox: "0 0 15 15",
                fill: "none"
            }, up("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14.2071 2.3138C14.5976 1.92327 14.5976 1.29011 14.2071 0.899583C13.8166 0.509058 13.1834 0.509058 12.7929 0.899583L7.5 6.19248L2.20711 0.899583C1.81658 0.509058 1.18342 0.509058 0.792893 0.899583C0.402369 1.29011 0.402369 1.92327 0.792893 2.3138L6.08579 7.60669L0.792893 12.8996C0.402369 13.2901 0.402369 13.9233 0.792894 14.3138C1.18342 14.7043 1.81658 14.7043 2.20711 14.3138L7.5 9.0209L12.7929 14.3138C13.1834 14.7043 13.8166 14.7043 14.2071 14.3138C14.5976 13.9233 14.5976 13.2901 14.2071 12.8996L8.91421 7.60669L14.2071 2.3138Z",
                fill: "white",
                fillOpacity: "0.6"
            }))
        }
        n(38168);
        var mp = de.createElement
          , pp = function(e) {
            var t = e.model
              , n = t.chartHeader
              , a = t.chartRows
              , r = t.title
              , i = t.subtitle;
            return mp("section", {
                className: "live-tv-comp-chart"
            }, mp("div", {
                className: "headline"
            }, mp(xe.Z, {
                as: "div",
                className: "title",
                variant: "title48",
                breakpoints: {
                    xs: "title32",
                    sm: "title40",
                    lg: "title48"
                }
            }, r), mp(xe.Z, {
                as: "div",
                className: "subtitle",
                variant: "subtitle18",
                breakpoints: {
                    xs: "subtitle18",
                    sm: "subtitle24"
                }
            }, i)), mp("table", null, mp("colgroup", null, mp("col", null), mp("col", {
                className: "hulu-column"
            })), mp("thead", null, mp("tr", null, mp("th", {
                className: "empty-header-cell"
            }), null === n || void 0 === n ? void 0 : n.map((function(e, t) {
                var n = e.copy
                  , a = e.ctaCopy
                  , r = e.ctaHref
                  , i = e.badgeCopy;
                return mp("th", {
                    key: "".concat(n, "-").concat(t),
                    className: "column_header_cell",
                    scope: "col"
                }, mp("div", {
                    className: "content"
                }, i && mp("div", null, mp(Qn.Z, {
                    variant: "av",
                    className: "badge"
                }, mp(xe.Z, {
                    variant: "label12"
                }, i))), mp(xe.Z, {
                    variant: "subtitle16",
                    breakpoints: {
                        xs: "subtitle16",
                        sm: "subtitle18",
                        lg: "subtitle24"
                    }
                }, n), a && mp(He.Z, {
                    buttonThemeMode: "dark",
                    className: "cta",
                    onClick: function() {
                        (0,
                        Tl.fireUserInteraction)("live_comp_chart:sign_up_cta", "driver_click", "click"),
                        (0,
                        Re.tt)(r)
                    }
                }, mp(xe.Z, {
                    variant: "label12",
                    breakpoints: {
                        xs: "label12",
                        sm: "label12",
                        lg: "label14"
                    }
                }, a))))
            }
            )))), mp("tbody", null, null === a || void 0 === a ? void 0 : a.map((function(e, t) {
                var n = e.content
                  , a = e.logo
                  , r = e.features;
                return mp(de.Fragment, {
                    key: n
                }, mp("tr", {
                    className: "row-header-mobile"
                }, mp("td", {
                    colSpan: 3
                }, mp("div", {
                    className: "content"
                }, mp("div", {
                    dangerouslySetInnerHTML: {
                        __html: a
                    }
                }), mp(xe.Z, {
                    variant: "subtitle14",
                    breakpoints: {
                        xs: "subtitle14",
                        md: "subtitle16"
                    }
                }, n)))), mp("tr", {
                    key: n
                }, mp("th", {
                    className: "row-header-desktop"
                }, mp("div", {
                    dangerouslySetInnerHTML: {
                        __html: a
                    }
                }), mp(xe.Z, {
                    variant: "subtitle16"
                }, n)), null === r || void 0 === r ? void 0 : r.map((function(e, n) {
                    return mp("td", {
                        className: "cell",
                        key: "".concat(t, "-").concat(n)
                    }, e ? mp("img", {
                        src: "/static/hitch/static/icons/Pricing_Checkmark_green-light.svg",
                        role: "presentation",
                        alt: "checkmark"
                    }) : mp(dp, null))
                }
                ))))
            }
            )))))
        }
          , fp = pe().shape({
            type: me.string.isRequired,
            url: me.string.isRequired,
            device: (0,
            me.oneOf)(Object.keys(he.DEVICES).map((function(e) {
                return e.toLowerCase()
            }
            )))
        })
          , vp = pe().shape({
            url: pe().string.isRequired,
            alt: pe().string.isRequired
        })
          , hp = pe().shape({
            ctaButtonStyle: me.string,
            ctaCopy: me.string.isRequired,
            eyebrow: me.string,
            headline: me.string,
            subheadline: me.string,
            ctaHref: me.string.isRequired,
            elementSpecifier: me.string,
            targetDisplayName: me.string
        })
          , gp = ((0,
        me.shape)({
            style: me.string,
            backgroundImage: pe().shape({
                desktop: vp,
                mobile: vp
            }),
            backgroundVideos: (0,
            me.arrayOf)(fp),
            eyebrow: me.string,
            headline: me.string,
            subheadline: me.string,
            primaryCopy: me.string,
            secondaryCopy: me.string,
            leftCta: hp.isRequired,
            rightCta: hp.isRequired,
            legal: me.string,
            leftAlign: me.boolean
        }),
        n(66320),
        de.createElement);
        function _p(e) {
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
                } catch (qv) {
                    return !1
                }
            }();
            return function() {
                var n, a = (0,
                ut.Z)(e);
                if (t) {
                    var r = (0,
                    ut.Z)(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else
                    n = a.apply(this, arguments);
                return (0,
                ct.Z)(this, n)
            }
        }
        var bp = function(e) {
            (0,
            st.Z)(n, e);
            var t = _p(n);
            function n() {
                return (0,
                ot.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            lt.Z)(n, [{
                key: "render",
                value: function() {
                    if (!this.props.image)
                        return null;
                    var e = this.props
                      , t = e.image
                      , n = t.desktop
                      , a = t.tablet
                      , r = t.mobile
                      , i = e.identifier
                      , o = e.mobileFirst
                      , l = "linear-gradient(0deg,transparent 60%,rgba(0,0,0,0.2) 90%,rgba(0,0,0,0.4) 100%)"
                      , s = o ? 768 : 441
                      , c = o ? 1024 : 769;
                    return gp("div", {
                        className: Gl.default.dynamic([["1040954343", [i, l, null === r || void 0 === r ? void 0 : r.url, s, i, l, null === a || void 0 === a ? void 0 : a.url, c, i, l, null === n || void 0 === n ? void 0 : n.url]]])
                    }, gp("picture", {
                        className: Gl.default.dynamic([["1040954343", [i, l, null === r || void 0 === r ? void 0 : r.url, s, i, l, null === a || void 0 === a ? void 0 : a.url, c, i, l, null === n || void 0 === n ? void 0 : n.url]]]) + " hidden"
                    }, gp("source", {
                        media: "(min-width: ".concat(c, "px)"),
                        srcSet: null === n || void 0 === n ? void 0 : n.url,
                        className: Gl.default.dynamic([["1040954343", [i, l, null === r || void 0 === r ? void 0 : r.url, s, i, l, null === a || void 0 === a ? void 0 : a.url, c, i, l, null === n || void 0 === n ? void 0 : n.url]]])
                    }), gp("source", {
                        media: "(min-width: ".concat(s, "px)"),
                        srcSet: null === a || void 0 === a ? void 0 : a.url,
                        className: Gl.default.dynamic([["1040954343", [i, l, null === r || void 0 === r ? void 0 : r.url, s, i, l, null === a || void 0 === a ? void 0 : a.url, c, i, l, null === n || void 0 === n ? void 0 : n.url]]])
                    }), gp("source", {
                        media: "(min-width: 0px)",
                        srcSet: null === r || void 0 === r ? void 0 : r.url,
                        className: Gl.default.dynamic([["1040954343", [i, l, null === r || void 0 === r ? void 0 : r.url, s, i, l, null === a || void 0 === a ? void 0 : a.url, c, i, l, null === n || void 0 === n ? void 0 : n.url]]])
                    }), gp("img", {
                        alt: "preloading masthead",
                        className: Gl.default.dynamic([["1040954343", [i, l, null === r || void 0 === r ? void 0 : r.url, s, i, l, null === a || void 0 === a ? void 0 : a.url, c, i, l, null === n || void 0 === n ? void 0 : n.url]]]) + " hidden"
                    })), gp(Gl.default, {
                        id: "1040954343",
                        dynamic: [i, l, null === r || void 0 === r ? void 0 : r.url, s, i, l, null === a || void 0 === a ? void 0 : a.url, c, i, l, null === n || void 0 === n ? void 0 : n.url]
                    }, ["@media only screen and (min-width:0px){.ImageBackground--image".concat(i, ".__jsx-style-dynamic-selector{background-image:").concat(l, ",url(").concat(r.url, ");}}"), "@media only screen and (min-width:".concat(s, "px){.ImageBackground--image").concat(i, ".__jsx-style-dynamic-selector{background-image:").concat(l, ",url(").concat(a.url, ");}}"), "@media only screen and (min-width:".concat(c, "px){.ImageBackground--image").concat(i, ".__jsx-style-dynamic-selector{background-image:").concat(l, ",url(").concat(n.url, ");}}")]), gp("div", {
                        className: Gl.default.dynamic([["1040954343", [i, l, null === r || void 0 === r ? void 0 : r.url, s, i, l, null === a || void 0 === a ? void 0 : a.url, c, i, l, null === n || void 0 === n ? void 0 : n.url]]]) + " " + "ImageBackground ImageBackground--image".concat(i)
                    }))
                }
            }]),
            n
        }(de.Component)
          , yp = (n(82769),
        de.createElement);
        var wp = function(e) {
            var t = e.videos
              , n = de.useRef()
              , a = de.useState(t)
              , r = (0,
            cn.Z)(a, 2)
              , i = r[0]
              , o = r[1]
              , l = de.useState(!0)
              , s = (0,
            cn.Z)(l, 2)
              , c = s[0]
              , u = s[1]
              , d = (0,
            un.w)().windowSize.width
              , m = function() {
                var e = null === n || void 0 === n ? void 0 : n.current;
                e.paused ? e.play() : e.pause(),
                u(!e.paused)
            };
            (0,
            de.useEffect)((function() {
                var e = he.DEVICES.DESKTOP;
                d < he.BREAKPOINTS.LARGE && (e = he.DEVICES.TABLET),
                d < he.BREAKPOINTS.MEDIUM && (e = he.DEVICES.MOBILE);
                var n = null === t || void 0 === t ? void 0 : t.find((function(t) {
                    return t.device === e
                }
                ));
                n || (n = null === t || void 0 === t ? void 0 : t.find((function(e) {
                    return "any" === e.device
                }
                ))),
                o(n ? [n] : void 0)
            }
            ), [d]),
            (0,
            de.useEffect)((function() {
                var e;
                null === n || void 0 === n || null === (e = n.current) || void 0 === e || e.load(),
                function() {
                    var e, t = null === n || void 0 === n || null === (e = n.current) || void 0 === e ? void 0 : e.play();
                    void 0 !== t ? t.then((function() {
                        u(!0)
                    }
                    )).catch((function() {
                        u(!1)
                    }
                    )) : u(!1)
                }()
            }
            ), [n, i]);
            var p = ue()("VideoBackground__controls", {
                "VideoBackground__controls--playing": c,
                "VideoBackground__controls--paused": !c
            })
              , f = c ? "Pause Video" : "Play Video";
            return i && 0 !== i.length ? yp("div", {
                className: "VideoBackground",
                "data-automationid": "video_background"
            }, yp("video", {
                preload: "auto",
                loop: "loop",
                muted: !0,
                playsInline: !0,
                className: "VideoBackground__video",
                ref: n
            }, i && i.map((function(e, t) {
                return yp("source", {
                    key: t,
                    src: e.url,
                    type: e.type
                })
            }
            ))), yp("div", {
                className: p,
                tabIndex: 0,
                role: "button",
                "aria-label": f,
                onClick: m,
                onKeyDown: (0,
                fe.P)(m),
                onMouseDown: fe.W
            })) : null
        }
          , Np = (n(77850),
        de.createElement)
          , kp = function(e) {
            var t = e.model
              , n = t.backgroundImage
              , a = t.backgroundVideos
              , r = t.eyebrow
              , i = t.headline
              , o = t.subheadline
              , l = t.primaryCopy
              , s = t.secondaryCopy
              , c = t.leftCta
              , u = t.rightCta
              , d = t.legal
              , m = t.style
              , p = t.leftAlign;
            return Np("div", {
                id: "masthead",
                className: ue()("ExpMasthead", "cu-masthead", m),
                role: "region",
                "aria-labelledby": "regionMasthead",
                "data-automationid": "masthead"
            }, Np(bp, {
                image: n,
                identifier: 0,
                mobileFirst: !1
            }), Np(wp, {
                videos: a
            }), Np("div", {
                className: ue()("ExpMasthead__container", {
                    "left-align": p
                })
            }, r && Np(je.m7.div, {
                className: "ExpMasthead__preheadline",
                dangerouslySetInnerHTML: {
                    __html: r
                }
            }), i && Np(je.m7.h1, {
                className: "ExpMasthead__headline",
                dangerouslySetInnerHTML: {
                    __html: i
                }
            }), o && Np(je.m7.div, {
                className: "ExpMasthead__subheadline",
                dangerouslySetInnerHTML: {
                    __html: o
                }
            }), l && Np(je.m7.div, {
                className: "ExpMasthead__primary-message",
                dangerouslySetInnerHTML: {
                    __html: l
                }
            }), s && Np(je.m7.div, {
                className: "ExpMasthead__secondary-message",
                dangerouslySetInnerHTML: {
                    __html: s
                }
            }), Np("div", {
                className: "ExpMasthead__cta-container"
            }, [c, u].map((function(e) {
                return Np(de.Fragment, {
                    key: null === e || void 0 === e ? void 0 : e.ctaCopy
                }, (null === e || void 0 === e ? void 0 : e.eyebrow) && Np(je.m7.div, {
                    className: "ExpMasthead__preheadline",
                    dangerouslySetInnerHTML: {
                        __html: null === e || void 0 === e ? void 0 : e.eyebrow
                    },
                    style: {
                        gridRow: 1
                    }
                }), (null === e || void 0 === e ? void 0 : e.headline) && Np(je.m7.h1, {
                    className: "ExpMasthead__headline",
                    id: "regionMasthead",
                    dataAutomationId: "masthead_headline",
                    dangerouslySetInnerHTML: {
                        __html: null === e || void 0 === e ? void 0 : e.headline
                    },
                    style: {
                        gridRow: 2
                    }
                }), (null === e || void 0 === e ? void 0 : e.subheadline) && Np(je.m7.div, {
                    className: "ExpMasthead__subheadline",
                    dataAutomationId: "masthead_subheadline",
                    dangerouslySetInnerHTML: {
                        __html: null === e || void 0 === e ? void 0 : e.subheadline
                    },
                    style: {
                        gridRow: 3
                    }
                }), (null === e || void 0 === e ? void 0 : e.ctaCopy) && (null === e || void 0 === e ? void 0 : e.ctaHref) && (null === e || void 0 === e ? void 0 : e.elementSpecifier) && (null === e || void 0 === e ? void 0 : e.targetDisplayName) && Np("div", {
                    className: "ExpMasthead__input",
                    style: {
                        gridRow: 4
                    }
                }, Np(He.Z, {
                    useStyle: "white",
                    className: "ExpMasthead__input-cta",
                    color: "#1ce783",
                    size: "medium",
                    onClick: function() {
                        (0,
                        Tl.fireUserInteraction)(null === e || void 0 === e ? void 0 : e.elementSpecifier, "driver_click", "click", !0, null === e || void 0 === e ? void 0 : e.targetDisplayName),
                        (0,
                        Re.tt)(null === e || void 0 === e ? void 0 : e.ctaHref)
                    }
                }, null === e || void 0 === e ? void 0 : e.ctaCopy)))
            }
            ))), Np(je.m7.div, {
                className: "ExpMasthead__legal section-disclaimer",
                dataAutomationId: "masthead_legal",
                dangerouslySetInnerHTML: {
                    __html: d
                }
            })))
        }
          , Sp = me.PropTypes.shape({
            text: me.PropTypes.string
        })
          , xp = (me.PropTypes.shape({
            rows: me.PropTypes.arrayOf(Sp),
            title: me.PropTypes.string,
            disclaimer: me.PropTypes.string
        }),
        de.createElement)
          , Tp = function(e) {
            var t = e.children
              , n = e.className;
            return xp("div", {
                className: n
            }, xp(xe.Z, {
                variant: "body10"
            }, t))
        }
          , Op = de.createElement
          , Ep = function(e) {
            var t = e.model.text
              , n = e.className
              , a = e.index
              , r = e.isLastRow
              , i = 0 === a
              , o = 1 === a
              , l = 2 === a
              , s = n.includes("header")
              , c = Op(xe.Z, s ? {
                breakpoints: {
                    xs: "body16",
                    md: "body18"
                }
            } : {
                variant: "body10"
            }, t);
            return "$$$" === t && (c = Op("img", {
                className: "dollar-icon",
                src: "/static/hitch/static/icons/dollar.svg"
            })),
            o && s && (c = Op("div", null, Op("img", {
                className: "hulu-white-logo",
                src: "/static/hitch/static/logos/hulu_white.svg"
            }), Op("div", null, Op(xe.Z, {
                variant: "body10",
                className: "live-tv-text"
            }, t)))),
            Op("div", {
                className: ue()(n, {
                    highlighted: o,
                    "header-row": s,
                    "last-row": r,
                    "first-column": i,
                    "hulu-column": o,
                    "cable-column": l
                })
            }, c)
        }
          , Pp = de.createElement
          , Cp = function(e) {
            var t = e.model
              , n = e.className
              , a = e.isLastRow;
            return Pp("div", {
                className: n
            }, null === t || void 0 === t ? void 0 : t.map((function(e, t) {
                return Pp(Ep, {
                    key: t,
                    model: e,
                    index: t,
                    isLastRow: a,
                    className: n.includes("header") ? "exp-no-fees-minimalist__column--header" : "exp-no-fees-minimalist__column"
                })
            }
            )))
        }
          , Dp = de.createElement
          , Zp = function(e) {
            var t = e.title
              , n = e.className;
            return Dp("div", {
                className: n,
                dangerouslySetInnerHTML: {
                    __html: t
                }
            })
        }
          , Ip = (n(76494),
        de.createElement)
          , Mp = function(e) {
            var t = e.model
              , n = t.title
              , a = t.rows
              , r = t.disclaimer;
            return Ip("div", {
                className: "exp-no-fees-minimalist"
            }, Ip(Zp, {
                className: "exp-no-fees-minimalist__title",
                title: n
            }), Ip("div", {
                className: "exp-no-fees-minimalist__table-container"
            }, Ip("div", {
                className: "exp-no-fees-minimalist__table"
            }, Ip(Cp, {
                model: a[0],
                className: "exp-no-fees-minimalist__header"
            }), a.slice(1).map((function(e, t) {
                return Ip(Cp, {
                    key: t,
                    model: e,
                    isLastRow: a.length === t + 2,
                    className: "exp-no-fees-minimalist__row"
                })
            }
            ))), Ip(Tp, {
                className: "exp-no-fees-minimalist__disclaimer"
            }, r)))
        }
          , Ap = n(53476)
          , Lp = (n(38982),
        n(98602),
        de.createElement)
          , Rp = function(e) {
            var t = e.footer
              , n = e.values
              , a = e.user
              , r = t.buttonText
              , i = t.plans
              , o = n.footerPlanId
              , l = n.isFooterExpanded
              , s = (0,
            ql.find)(i, {
                id: o
            })
              , c = s.planName
              , u = void 0 === c ? "" : c
              , d = s.planDetails
              , m = void 0 === d ? [] : d
              , p = s.price
              , f = void 0 === p ? "" : p
              , v = s.frequency
              , h = void 0 === v ? "" : v
              , g = s.description
              , _ = void 0 === g ? "" : g
              , b = s.termsApplyRichText
              , y = void 0 === b ? "" : b
              , w = s.signupUrl
              , N = void 0 === w ? "" : w
              , k = "$".concat(f, "/").concat(h, ".")
              , S = (0,
            de.useRef)()
              , x = null !== m
              , T = {
                xs: "subtitle18",
                sm: "subtitle24"
            };
            return Lp("div", {
                className: ue()("cu-footer", "exp-plan-builder-footer", {
                    "--expanded": l
                }),
                role: "region",
                id: "ExpPlanBuilderFooterId",
                ref: S
            }, Lp("div", {
                className: ue()("top-row", {
                    "--expanded": l
                })
            }, Lp("div", {
                className: ue()("title-with-price", {
                    "--expanded": l
                })
            }, Lp(xe.Z, {
                as: "div",
                variant: "subtitle18",
                breakpoints: T,
                className: "exp-plan-builder-footer-title"
            }, u), Lp(xe.Z, {
                as: "div",
                variant: "subtitle18",
                breakpoints: T,
                className: "exp-plan-builder-footer-pricing"
            }, k)), m && Lp(xe.Z, {
                as: "div",
                variant: "subtitle12",
                className: "exp-plan-builder-footer-details"
            }, m), Lp("div", {
                className: ue()("exp-plan-builder-footer-button-container", {
                    "--expanded": l
                })
            }, Lp(He.Z, {
                size: "large",
                fullWidth: !0,
                className: ue()("exp-plan-builder-footer-button", {
                    "--hasPlanDetails": x
                }),
                type: "submit",
                href: N,
                onClick: function(e) {
                    return Yp({
                        event: e,
                        signupUrl: N,
                        user: a,
                        hitTargetDisplayName: r
                    })
                },
                disabled: !l
            }, r))), Lp("hr", null), Lp("div", {
                className: "bottom-row"
            }, Lp(xe.Z, {
                as: "div",
                variant: "body12",
                className: ue()("exp-plan-builder-footer-description", {
                    "--hasTermsApply": y
                })
            }, _), y && Lp("div", {
                className: ue()("terms-apply", {
                    "--hasDescription": _
                }),
                dangerouslySetInnerHTML: {
                    __html: y
                }
            })))
        }
          , jp = de.createElement
          , Hp = function(e, t, n, a, r, i, o, l) {
            for (var s = i.questionSections.length, c = t + 1; c < s; c++)
                o("question".concat(c), null);
            if (o("isFooterExpanded", t === s - 1),
            o([r.name], e.id),
            t + 1 === s && null === e.planId) {
                var u = i["question".concat(t - 1)];
                o("footerPlanId", i.answerIdToPlanIdMap[u])
            } else
                o("footerPlanId", e.planId);
            (0,
            ve.JW)("plan_builder:Q".concat(t + 1, "A").concat(e.engagementMetricId), "click", "click", !0),
            !Object.keys(l).includes("question".concat(t)) && t < s - 1 && function(e, t, n) {
                var a = t().get("question".concat(e + 1));
                setTimeout((function() {
                    a.scrollIntoView()
                }
                ), n)
            }(t, a, n)
        }
          , Up = function(e) {
            var t = e.answer
              , n = e.answerIndex
              , a = e.questionIndex
              , r = e.isDisabled
              , i = e.values
              , o = e.getMap
              , l = e.scrollDelayTime
              , s = "question".concat(a)
              , c = (null === t || void 0 === t ? void 0 : t.middleColumn) && !(null !== t && void 0 !== t && t.leftColumn || null !== t && void 0 !== t && t.rightColumn)
              , u = t.id === i[s]
              , d = i["question".concat(a)] === t.id;
            return jp(Ap.gN, {
                name: s,
                value: n
            }, (function(e) {
                var s = e.field
                  , m = e.form;
                return jp("button", (0,
                we.Z)({
                    type: "button"
                }, s, {
                    onClick: function() {
                        return d ? null : Hp(t, a, l, o, s, i, m.setFieldValue, m.touched)
                    },
                    key: "answer-".concat(n),
                    className: ue()("answer-button", {
                        "--selected": u,
                        "--disabled": r
                    }),
                    disabled: r
                }), jp("span", {
                    className: ue()("answer-container", {
                        "--single-column": c
                    })
                }, t.leftColumn && jp("div", {
                    className: ue()("left-column", {
                        "--full-width": "keep-plan" === t.id
                    }),
                    dangerouslySetInnerHTML: {
                        __html: t.leftColumn
                    }
                }), t.rightColumn && jp("div", {
                    className: ue()("right-column", {
                        "--more-space": "trio-premium" === t.id
                    }),
                    dangerouslySetInnerHTML: {
                        __html: t.rightColumn
                    }
                })))
            }
            ))
        }
          , Bp = de.createElement
          , Fp = function(e) {
            var t = e.answers
              , n = e.questionIndex
              , a = e.isDisabled
              , r = e.values
              , i = e.getMap
              , o = e.scrollDelayTime;
            return Bp("div", {
                className: "answers"
            }, t.map((function(e, t) {
                return Bp(Up, {
                    key: "question-".concat(n, "-answer-").concat(t),
                    answer: e,
                    answerIndex: t,
                    questionIndex: n,
                    isDisabled: a,
                    values: r,
                    getMap: i,
                    scrollDelayTime: o
                })
            }
            )))
        }
          , qp = de.createElement
          , Gp = function(e) {
            var t = e.sectionData
              , n = e.index
              , a = e.values
              , r = e.getMap
              , i = e.scrollDelayTime
              , o = t.imagePath
              , l = t.question
              , s = t.description
              , c = t.linkText
              , u = function(e, t, n) {
                var a = n;
                1 === e && (a = ("ad-free" === t.question0 ? t.questionSections[0].answers[0].nextAnswerIds : t.questionSections[0].answers[1].nextAnswerIds).map((function(e) {
                    return (0,
                    ql.find)(n, {
                        id: e
                    })
                }
                )) || []);
                return a
            }(n, a, t.answers)
              , d = function(e, t) {
                return 0 !== e && null === t["question".concat(e - 1)]
            }(n, a)
              , m = "question".concat(n);
            return qp("div", {
                className: ue()("question-container", {
                    "--disabled": d
                }),
                key: m,
                ref: function(e) {
                    var t = r();
                    e ? t.set(m, e) : t.delete(m)
                }
            }, qp("div", {
                className: "question"
            }, o && qp("img", {
                src: o,
                alt: "icon",
                role: "presentation"
            }), qp(xe.Z, {
                variant: "subtitle18"
            }, l), qp("div", {
                className: "question-description",
                dangerouslySetInnerHTML: {
                    __html: s
                }
            }), c && qp("div", {
                className: ue()("question-linkText", {
                    "--disabled": d
                }),
                dangerouslySetInnerHTML: {
                    __html: c
                }
            })), qp(Fp, {
                answers: u,
                questionIndex: n,
                isDisabled: d,
                values: a,
                getMap: r,
                scrollDelayTime: i
            }), qp("hr", null))
        }
          , Wp = de.createElement;
        function zp(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function Vp(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? zp(Object(n), !0).forEach((function(t) {
                    (0,
                    se.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : zp(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var Yp = function(e) {
            var t = e.event
              , n = e.signupUrl
              , a = e.user
              , r = e.hitTargetDisplayName;
            t.preventDefault(),
            (0,
            ve.JW)("cta_primary", "driver_click", "click", !0, r),
            (0,
            Ae.LD)({}, n, a)
        }
          , Kp = (0,
        Ap.j0)({
            mapPropsToValues: function(e) {
                var t = {}
                  , n = {};
                return e.model.questionSections.forEach((function(e, a) {
                    t["question".concat(a)] = null,
                    (e.answers || []).forEach((function(e) {
                        n[e.id] = e.planId
                    }
                    ))
                }
                )),
                Vp(Vp({}, t), {}, {
                    isFooterExpanded: !1,
                    questionSections: e.model.questionSections || [],
                    footerPlanId: e.model.footer.defaultPlanId,
                    answerIdToPlanIdMap: n
                })
            },
            handleSubmit: Yp,
            displayName: "ExpPlanBuilder"
        })((function(e) {
            var t = e.model
              , a = t.title
              , r = t.subtitle
              , i = t.startPriceText
              , o = t.questionSections
              , l = t.bottomSection
              , s = t.footer
              , c = t.scrollDelayTime
              , u = e.values
              , d = e.setFieldValue
              , m = e.user
              , p = o.length - 1;
            (0,
            de.useEffect)((function() {
                (0,
                ve.gx)(Me),
                (0,
                ve.aD)(Me, "SUF - Plan Builder"),
                window.scrollTo(0, 0)
            }
            ), []),
            (0,
            de.useEffect)((function() {
                var e = function() {
                    var e = n.g.window.pageYOffset + n.g.window.innerHeight >= n.g.document.body.scrollHeight
                      , t = null !== (null === u || void 0 === u ? void 0 : u["question".concat(p)])
                      , a = (0,
                    Xr.mobileDetect)().mobile() && !(0,
                    Xr.mobileDetect)().tablet();
                    !u.isFooterExpanded && e && t ? d("isFooterExpanded", !0) : u.isFooterExpanded && a && d("isFooterExpanded", !1)
                };
                return window.addEventListener("scroll", e),
                function() {
                    window.removeEventListener("scroll", e)
                }
            }
            ), [u.isFooterExpanded, u["question".concat(p)]]);
            var f = (0,
            de.useRef)(null)
              , v = function() {
                return f.current || (f.current = new Map),
                f.current
            };
            return Wp(Qa.a, {
                theme: tr.oneHuluDarkTheme
            }, Wp("form", {
                onSubmit: function(t) {
                    return Yp(t, u, e)
                },
                className: ue()("exp-plan-builder-form", {
                    "--expanded": u.isFooterExpanded
                })
            }, Wp("div", {
                className: "exp-plan-builder"
            }, Wp("div", {
                className: "exp-plan-builder-container-width"
            }, Wp("div", {
                className: "title-section"
            }, Wp(xe.Z, {
                variant: "title24",
                className: "plan-builder-title"
            }, a), Wp(xe.Z, {
                variant: "body16",
                className: "plan-builder-subtitle"
            }, r), Wp("div", {
                className: "start-price-text",
                dangerouslySetInnerHTML: {
                    __html: i
                }
            })), Wp("div", {
                className: "question-section"
            }, o.map((function(e, t) {
                return Wp(Gp, {
                    key: "question-".concat(t),
                    sectionData: e,
                    index: t,
                    values: u,
                    getMap: v,
                    scrollDelayTime: c
                })
            }
            ))), Wp("div", {
                className: ue()("bottom-section", {
                    "--expanded": u.isFooterExpanded
                })
            }, Wp("div", {
                className: "bottom-content",
                dangerouslySetInnerHTML: {
                    __html: l
                }
            })))), Wp(Rp, {
                footer: s,
                values: u,
                user: m
            })))
        }
        ))
          , Xp = (0,
        ye.connect)((function(e) {
            return {
                user: e.user
            }
        }
        ))(Kp)
          , Jp = (0,
        se.Z)({}, Ye, $e)
          , Qp = (n(29007),
        "suf_web_plan_builder")
          , $p = (n(42114),
        de.createElement)
          , ef = function(e) {
            var t = e.footer
              , n = e.values
              , a = e.user
              , r = t.buttonText
              , i = t.continueText
              , o = t.plans
              , l = n.footerPlanId
              , s = n.isFooterExpanded
              , c = n.hasAnsweredAllQuestions
              , u = (0,
            ql.find)(o, {
                id: l
            })
              , d = u.planName
              , m = void 0 === d ? "" : d
              , p = u.planDetails
              , f = void 0 === p ? [] : p
              , v = u.price
              , h = void 0 === v ? "" : v
              , g = u.frequency
              , _ = void 0 === g ? "" : g
              , b = u.description
              , y = void 0 === b ? "" : b
              , w = u.termsApplyRichText
              , N = void 0 === w ? "" : w
              , k = u.signupUrl
              , S = void 0 === k ? "" : k
              , x = "$".concat(h, "/").concat(_, ".")
              , T = (0,
            de.useRef)()
              , O = null !== f
              , E = {
                xs: "subtitle18",
                sm: "subtitle24"
            };
            return $p("div", {
                className: ue()("cu-footer", "exp-plan-builder-escape-hatch-footer", {
                    "--expanded": s
                }),
                role: "region",
                id: "ExpPlanBuilderFooterId",
                ref: T
            }, $p("div", {
                className: ue()("top-row", {
                    "--expanded": s
                })
            }, $p("div", {
                className: ue()("title-with-price", {
                    "--expanded": s,
                    "--hasAnsweredAllQuestions": c
                })
            }, $p(xe.Z, {
                as: "div",
                variant: "subtitle18",
                breakpoints: E,
                className: "exp-plan-builder-footer-title"
            }, m), $p(xe.Z, {
                as: "div",
                variant: "subtitle18",
                breakpoints: E,
                className: "exp-plan-builder-footer-pricing"
            }, x)), f && $p(xe.Z, {
                as: "div",
                variant: "subtitle12",
                className: "exp-plan-builder-footer-details"
            }, f), $p("div", {
                className: ue()("exp-plan-builder-footer-button-container", {
                    "--expanded": s
                })
            }, $p(He.Z, {
                size: "large",
                fullWidth: !0,
                className: ue()("exp-plan-builder-footer-button", {
                    "--hasPlanDetails": O
                }),
                type: "submit",
                href: S,
                onClick: function(e) {
                    return mf({
                        event: e,
                        signupUrl: S,
                        user: a,
                        hitTargetDisplayName: c ? i : r
                    })
                },
                buttonThemeMode: "light",
                disabled: !s,
                emphasis: c ? "high" : "medium"
            }, r))), $p("hr", null), $p("div", {
                className: "bottom-row"
            }, $p(xe.Z, {
                as: "div",
                variant: "body12",
                className: ue()("exp-plan-builder-footer-description", {
                    "--hasTermsApply": N
                })
            }, y), N && $p("div", {
                className: ue()("terms-apply", {
                    "--hasDescription": y
                }),
                dangerouslySetInnerHTML: {
                    __html: N
                }
            })))
        }
          , tf = de.createElement
          , nf = function(e, t, n, a, r, i, o, l) {
            for (var s = i.questionSections.length, c = t + 1; c < s; c++)
                o("question".concat(c), null);
            if (null !== i && void 0 !== i && i.isFooterExpanded || o("isFooterExpanded", !0),
            o("hasAnsweredAllQuestions", t === s - 1),
            o([r.name], e.id),
            t + 1 === s && null === e.planId) {
                var u = i["question".concat(t - 1)];
                o("footerPlanId", i.answerIdToPlanIdMap[u])
            } else
                o("footerPlanId", e.planId);
            (0,
            ve.JW)("plan_builder:Q".concat(t + 1, "A").concat(e.engagementMetricId), "click", "click", !0),
            !Object.keys(l).includes("question".concat(t)) && t < s - 1 && function(e, t, n) {
                var a = t().get("question".concat(e + 1));
                setTimeout((function() {
                    a.scrollIntoView()
                }
                ), n)
            }(t, a, n)
        }
          , af = function(e) {
            var t = e.answer
              , n = e.answerIndex
              , a = e.questionIndex
              , r = e.isDisabled
              , i = e.values
              , o = e.getMap
              , l = e.scrollDelayTime
              , s = "question".concat(a)
              , c = (null === t || void 0 === t ? void 0 : t.middleColumn) && !(null !== t && void 0 !== t && t.leftColumn || null !== t && void 0 !== t && t.rightColumn)
              , u = t.id === i[s]
              , d = i["question".concat(a)] === t.id;
            return tf(Ap.gN, {
                name: s,
                value: n
            }, (function(e) {
                var s = e.field
                  , m = e.form;
                return tf("button", (0,
                we.Z)({
                    type: "button"
                }, s, {
                    onClick: function() {
                        return d ? null : nf(t, a, l, o, s, i, m.setFieldValue, m.touched)
                    },
                    key: "answer-".concat(n),
                    className: ue()("answer-button", {
                        "--selected": u,
                        "--disabled": r
                    }),
                    disabled: r
                }), tf("span", {
                    className: ue()("answer-container", {
                        "--single-column": c
                    })
                }, t.leftColumn && tf("div", {
                    className: ue()("left-column", {
                        "--full-width": "keep-plan" === t.id
                    }),
                    dangerouslySetInnerHTML: {
                        __html: t.leftColumn
                    }
                }), t.rightColumn && tf("div", {
                    className: ue()("right-column", {
                        "--more-space": "trio-premium" === t.id
                    }),
                    dangerouslySetInnerHTML: {
                        __html: t.rightColumn
                    }
                })))
            }
            ))
        }
          , rf = de.createElement
          , of = function(e) {
            var t = e.answers
              , n = e.questionIndex
              , a = e.isDisabled
              , r = e.values
              , i = e.getMap
              , o = e.scrollDelayTime;
            return rf("div", {
                className: "answers"
            }, t.map((function(e, t) {
                return rf(af, {
                    key: "question-".concat(n, "-answer-").concat(t),
                    answer: e,
                    answerIndex: t,
                    questionIndex: n,
                    isDisabled: a,
                    values: r,
                    getMap: i,
                    scrollDelayTime: o
                })
            }
            )))
        }
          , lf = de.createElement
          , sf = function(e) {
            var t = e.sectionData
              , n = e.index
              , a = e.values
              , r = e.getMap
              , i = e.scrollDelayTime
              , o = t.imagePath
              , l = t.question
              , s = t.description
              , c = t.linkText
              , u = function(e, t, n) {
                var a = n;
                1 === e && (a = ("ad-free" === t.question0 ? t.questionSections[0].answers[0].nextAnswerIds : t.questionSections[0].answers[1].nextAnswerIds).map((function(e) {
                    return (0,
                    ql.find)(n, {
                        id: e
                    })
                }
                )) || []);
                return a
            }(n, a, t.answers)
              , d = function(e, t) {
                return 0 !== e && null === t["question".concat(e - 1)]
            }(n, a)
              , m = "question".concat(n);
            return lf("div", {
                className: ue()("question-container", {
                    "--disabled": d
                }),
                key: m,
                ref: function(e) {
                    var t = r();
                    e ? t.set(m, e) : t.delete(m)
                }
            }, lf("div", {
                className: "question"
            }, o && lf("img", {
                src: o,
                alt: "icon",
                role: "presentation"
            }), lf(xe.Z, {
                variant: "subtitle18"
            }, l), lf("div", {
                className: "question-description",
                dangerouslySetInnerHTML: {
                    __html: s
                }
            }), c && lf("div", {
                className: ue()("question-linkText", {
                    "--disabled": d
                }),
                dangerouslySetInnerHTML: {
                    __html: c
                }
            })), lf(of, {
                answers: u,
                questionIndex: n,
                isDisabled: d,
                values: a,
                getMap: r,
                scrollDelayTime: i
            }), lf("hr", null))
        }
          , cf = de.createElement;
        function uf(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function df(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? uf(Object(n), !0).forEach((function(t) {
                    (0,
                    se.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : uf(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var mf = function(e) {
            var t = e.event
              , n = e.signupUrl
              , a = e.user
              , r = e.hitTargetDisplayName;
            t.preventDefault(),
            (0,
            ve.JW)("cta_primary", "driver_click", "click", !0, r),
            (0,
            Ae.LD)({}, n, a)
        }
          , pf = (0,
        Ap.j0)({
            mapPropsToValues: function(e) {
                var t = {}
                  , n = {};
                return e.model.questionSections.forEach((function(e, a) {
                    t["question".concat(a)] = null,
                    (e.answers || []).forEach((function(e) {
                        n[e.id] = e.planId
                    }
                    ))
                }
                )),
                df(df({}, t), {}, {
                    isFooterExpanded: !1,
                    hasAnsweredAllQuestions: !1,
                    questionSections: e.model.questionSections || [],
                    footerPlanId: e.model.footer.defaultPlanId,
                    answerIdToPlanIdMap: n
                })
            },
            handleSubmit: mf,
            displayName: "ExpPlanBuilder"
        })((function(e) {
            var t = e.model
              , n = t.title
              , a = t.subtitle
              , r = t.startPriceText
              , i = t.questionSections
              , o = t.bottomSection
              , l = t.footer
              , s = t.scrollDelayTime
              , c = e.values
              , u = e.user;
            (0,
            de.useEffect)((function() {
                (0,
                ve.gx)(Qp),
                (0,
                ve.aD)(Qp, "SUF - Plan Builder"),
                window.scrollTo(0, 0)
            }
            ), []);
            var d = (0,
            de.useRef)(null)
              , m = function() {
                return d.current || (d.current = new Map),
                d.current
            };
            return cf(Qa.a, {
                theme: tr.oneHuluDarkTheme
            }, cf("form", {
                onSubmit: function(t) {
                    return mf(t, c, e)
                },
                className: ue()("exp-plan-builder-escape-hatch-form", {
                    "--expanded": c.isFooterExpanded
                })
            }, cf("div", {
                className: "exp-plan-builder"
            }, cf("div", {
                className: "exp-plan-builder-container-width"
            }, cf("div", {
                className: "title-section"
            }, cf(xe.Z, {
                variant: "title24",
                className: "plan-builder-title"
            }, n), cf(xe.Z, {
                variant: "body16",
                className: "plan-builder-subtitle"
            }, a), cf("div", {
                className: "start-price-text",
                dangerouslySetInnerHTML: {
                    __html: r
                }
            })), cf("div", {
                className: "question-section"
            }, i.map((function(e, t) {
                return cf(sf, {
                    key: "question-".concat(t),
                    sectionData: e,
                    index: t,
                    values: c,
                    getMap: m,
                    scrollDelayTime: s
                })
            }
            ))), cf("div", {
                className: ue()("bottom-section", {
                    "--expanded": c.isFooterExpanded
                })
            }, cf("div", {
                className: "bottom-content",
                dangerouslySetInnerHTML: {
                    __html: o
                }
            })))), cf(ef, {
                footer: l,
                values: c,
                user: u
            })))
        }
        ))
          , ff = (0,
        ye.connect)((function(e) {
            return {
                user: e.user
            }
        }
        ))(pf)
          , vf = (0,
        se.Z)({}, Ye, $e)
          , hf = (0,
        me.shape)({
            slug: me.string,
            isApplicable: me.boolean
        })
          , gf = (0,
        me.shape)({
            richText: me.string,
            modalId: me.string
        })
          , _f = (0,
        me.shape)({
            id: me.string,
            richText: me.string,
            modalLinkText: me.string,
            modalId: me.string
        })
          , bf = (0,
        me.shape)({
            slug: me.string,
            headline: me.string.isRequired,
            description: gf,
            disclaimer: _f,
            plans: (0,
            me.arrayOf)(hf)
        })
          , yf = (0,
        me.shape)({
            slug: me.string,
            headline: me.string.isRequired,
            bundleHeadline: me.string.isRequired,
            prices: (0,
            me.arrayOf)((0,
            me.shape)({
                text: me.string
            }))
        })
          , wf = (0,
        me.shape)({
            slug: me.string,
            headline: me.string,
            eyebrow: me.string,
            badge: me.string,
            ctaText: me.string,
            mobileCtaText: me.string,
            ctaAction: me.string,
            ctaBtnStyle: me.string,
            program: me.string
        })
          , Nf = (0,
        me.shape)({
            richText: me.string,
            modalLinkText: me.string,
            modalContent: me.string,
            isBundle: me.boolean
        })
          , kf = ((0,
        me.shape)({
            headline: me.string.isRequired,
            description: me.string,
            addonsHeadline: me.string,
            addonsDescription: me.string,
            bundle: (0,
            me.shape)({
                headline: me.string,
                description: me.string,
                modal: (0,
                me.shape)({
                    id: me.string,
                    header: me.string,
                    disclaimer: me.string,
                    sections: (0,
                    me.arrayOf)((0,
                    me.shape)({
                        title: me.string,
                        items: (0,
                        me.arrayOf)((0,
                        me.shape)({
                            text: me.string,
                            displayBullet: me.boolean
                        }))
                    }))
                })
            }),
            plans: (0,
            me.arrayOf)(wf).isRequired,
            bundlePlans: (0,
            me.arrayOf)(wf).isRequired,
            pricingRows: (0,
            me.arrayOf)(yf),
            features: (0,
            me.arrayOf)(bf),
            bundleFeatures: (0,
            me.arrayOf)(bf),
            featureDisclaimers: (0,
            me.arrayOf)(Nf),
            bundleFeatureDisclaimers: (0,
            me.arrayOf)(Nf),
            addons: (0,
            me.arrayOf)(bf),
            bundleAddons: (0,
            me.arrayOf)(bf),
            addonDisclaimers: (0,
            me.arrayOf)(Nf),
            bundleAddonDisclaimers: (0,
            me.arrayOf)(Nf)
        }),
        n(53822),
        de.createElement)
          , Sf = function(e) {
            var t = e.modal
              , n = t.id
              , a = t.header
              , r = t.disclaimer
              , i = t.sections
              , o = void 0 === i ? [] : i
              , l = kf("img", {
                src: "/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg",
                role: "presentation"
            });
            return kf(Uo.view, {
                model: {
                    id: n
                }
            }, kf("div", {
                className: "bundle-modal"
            }, kf(xe.Z, {
                as: "h2",
                className: "bundle-modal__header",
                variant: "title32"
            }, a), o.map((function(e, t) {
                var n = e.title
                  , a = e.items
                  , r = void 0 === a ? [] : a;
                return kf("section", {
                    className: "bundle-modal__section",
                    key: "section-".concat(t)
                }, kf(xe.Z, {
                    as: "h3",
                    variant: "subtitle16",
                    className: "bundle-modal__section-header"
                }, n), kf("div", null, r.map((function(e, t) {
                    var n = e.text
                      , a = e.displayBullet;
                    return kf("div", {
                        className: "bundle-modal__section-item",
                        key: "item-".concat(t)
                    }, kf("span", {
                        className: "bundle-modal__item-bullet"
                    }, a && l), kf(xe.Z, {
                        variant: "body16",
                        className: "bundle-modal__item-description"
                    }, n))
                }
                ))))
            }
            )), kf("div", {
                className: "bundle-modal__disclaimer",
                dangerouslySetInnerHTML: {
                    __html: r
                }
            })))
        }
          , xf = de.createElement
          , Tf = de.createContext()
          , Of = function() {
            return (0,
            de.useContext)(Tf)
        }
          , Ef = function(e) {
            var t = e.children
              , n = (0,
            de.useState)(!1)
              , a = {
                isBundle: n[0],
                setIsBundle: n[1]
            };
            return xf(Tf.Provider, {
                value: a
            }, t)
        }
          , Pf = (n(13748),
        de.createElement)
          , Cf = function(e) {
            var t = e.bundle
              , n = t.headline
              , a = t.description
              , r = t.modal
              , i = e.isDark
              , o = !Ks()(r)
              , l = Of()
              , s = l.isBundle
              , c = l.setIsBundle
              , u = (0,
            un.w)().windowSize.width >= 1024
              , d = "bundle_toggle_".concat(s ? "on" : "off")
              , m = (0,
            je.GO)({
                event_name: d,
                cta_placement: "comparison_chart"
            }, (0,
            je.pS)(Md, d));
            return Pf("div", {
                className: "bundle-header"
            }, Pf("div", {
                className: "bundle-header__headline"
            }, Pf(xe.Z, {
                breakpoints: {
                    xs: "title14",
                    md: "title32"
                }
            }, n), o && Pf("span", null, Pf("a", {
                "data-toggle": "modal",
                "data-target": "#".concat(r.id),
                role: "button"
            }, Pf("img", {
                src: i ? "/static/hitch/static/icons/Info_Icon_White.svg" : "/static/hitch/static/icons/Info_Icon_Dark_Grey.svg",
                role: "presentation",
                alt: n
            })))), Pf("div", {
                className: "bundle-header__toggle-container"
            }, Pf("img", {
                src: i ? "/static/hitch/static/logos/bundles-dark.svg" : "/static/hitch/static/logos/bundles.svg",
                role: "presentation",
                alt: "logos"
            }), !u && Pf(m, {
                isOn: s,
                onColor: i ? "#1CE783" : "#040405",
                handleToggle: function() {
                    return c(!s)
                }
            })), Pf("div", {
                className: "bundle-header__description"
            }, Pf(xe.Z, {
                variant: "body14"
            }, a)), u && Pf("div", {
                className: "bundle-header__toggle-container--desktop"
            }, Pf(m, {
                isOn: s,
                onColor: i ? "#1CE783" : "#040405",
                handleToggle: function() {
                    return c(!s)
                }
            })), o && Pf(Sf, {
                modal: r
            }))
        }
          , Df = de.createElement
          , Zf = function(e) {
            var t = e.disclaimer
              , n = t.modalContent
              , a = t.richText
              , r = t.modalLinkText
              , i = e.index
              , o = e.type
              , l = Boolean(n)
              , s = "".concat(o, "-disclaimer-modal");
            return Df("div", {
                className: "plans-container__features-container col-xs-12"
            }, Df("div", {
                className: "plans-container__features-container__disclaimer"
            }, Df("span", {
                className: "section-disclaimer",
                dangerouslySetInnerHTML: {
                    __html: a
                }
            }), l && Df("a", {
                "data-toggle": "modal",
                "data-target": "#".concat(s, "__").concat(i),
                title: a,
                role: "button",
                onClick: function() {
                    (0,
                    Tl.fireUtagLink)({
                        event_name: s,
                        cta_placement: "comparison_chart"
                    }),
                    (0,
                    Tl.fireUserInteraction)(s, "click", "click")
                }
            }, r)), l && Df(Uo.view, {
                model: {
                    id: "".concat(s, "__").concat(i)
                },
                className: "plan-addon__info-modal"
            }, Df("div", null, Df("div", {
                dangerouslySetInnerHTML: {
                    __html: n
                }
            }))))
        }
          , If = de.createElement
          , Mf = function(e) {
            var t = e.feature
              , n = t.headline
              , a = t.plans
              , r = t.bullet
              , i = t.description
              , o = i.richText
              , l = i.modalId
              , s = e.index
              , c = e.type
              , u = e.numPlans
              , d = e.isDark
              , m = o || l
              , p = "".concat(c, "-description-tooltip")
              , f = ue()("col-xs-6", "col-lg-5", "plan-feature__title", {
                "plan-feature__standard": !r
            })
              , v = If(xe.Z, {
                variant: "body16",
                className: "plan-feature__bullet_default"
            }, "\u2014")
              , h = If("img", {
                src: d ? "/static/hitch/static/icons/Pricing_Checkmark_green-light.svg" : "/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg",
                role: "presentation",
                alt: n
            });
            return If("div", {
                className: "plan-feature-item"
            }, If("div", {
                className: f
            }, If("div", null, If(xe.Z, {
                variant: "body14"
            }, n), m && If("span", null, If("a", {
                "data-toggle": "modal",
                "data-target": o ? "#".concat(p, "_").concat(s) : "#".concat(l),
                className: "plan-addon__info",
                title: "".concat(n, " info"),
                role: "button",
                onClick: function(e) {
                    var t = "".concat(ft()(e, "target.dataset.column", "NO_COL"), "-").concat(ft()(e, "target.dataset.feature", "NO_FEATURE"));
                    (0,
                    Tl.fireUtagLink)({
                        event_name: "tooltip_plans",
                        cta_placement: "comparison_chart",
                        tool_tip: t
                    }),
                    (0,
                    Tl.fireUserInteraction)(p, "click", "click")
                }
            }, If("img", {
                src: d ? "/static/hitch/static/icons/Info_Icon_White.svg" : "/static/hitch/static/icons/Info_Icon_Dark_Grey.svg",
                role: "presentation",
                alt: n
            })), o && If(Uo.view, {
                model: {
                    id: "".concat(p, "_").concat(s)
                },
                className: "plan-addon__info-modal"
            }, If("div", null, If(xe.Z, {
                as: "h3",
                variant: "title32",
                className: "plan-addon__header"
            }, n), If("div", {
                dangerouslySetInnerHTML: {
                    __html: o
                }
            })))))), a.map((function(e, t) {
                var n = e.slug
                  , a = e.isApplicable
                  , r = e.text
                  , i = a ? h : v
                  , o = r ? function(e) {
                    return If(xe.Z, {
                        variant: "body16",
                        className: "plan-feature__bullet_text"
                    }, e)
                }(r) : i;
                return If(de.Fragment, {
                    key: t
                }, If("div", {
                    className: "col-xs-".concat(12 / u, " plan-feature__check plan-feature__check-").concat(t),
                    key: "".concat(n, "_").concat(t)
                }, If("div", {
                    className: "plan-feature__bullet"
                }, o)), If("div", {
                    className: "plan-feature__separator"
                }))
            }
            )))
        }
          , Af = (n(99554),
        de.createElement)
          , Lf = function(e) {
            var t = e.headline
              , n = e.description;
            return Af("div", {
                className: "header"
            }, Af(xe.Z, {
                as: "h2",
                breakpoints: {
                    xs: "title32",
                    md: "title48"
                },
                className: "header__headline"
            }, t), Af("div", {
                className: "header__description",
                dangerouslySetInnerHTML: {
                    __html: n
                }
            }))
        };
        Lf.defaultProps = {
            headline: "",
            description: ""
        };
        var Rf, jf = Lf, Hf = de.createElement, Uf = function(e) {
            var t = e.isBadgePresent
              , n = e.isBundle
              , a = e.plan
              , r = a.headline
              , i = a.disclaimer
              , o = i.richText
              , l = i.modalLinkText
              , s = i.modalContent
              , c = i.id
              , u = a.ctaAction
              , d = a.ctaText
              , m = a.mobileCtaText
              , p = a.ctaBtnStyle
              , f = a.eyebrow
              , v = a.badge
              , h = a.program
              , g = e.index
              , _ = e.numPlans
              , b = e.isDark
              , y = ue()("plan-head__card", "plan-head__card-".concat(g), "col-xs-".concat(12 / _), {
                "plan-head__card--short": !t
            })
              , w = (0,
            je.GO)({
                event_name: "plan_select",
                cta_placement: "comparison_chart",
                product_name: n ? "".concat(r, "-bundle") : r
            }, (0,
            je.pS)(He.Z, "comparison_chart:plan_select"))
              , N = function(t) {
                t.stopPropagation();
                var n = e.user
                  , a = e.network
                  , r = e.requirePremium
                  , i = null
                  , o = u;
                h ? (i = h,
                o = null) : r && a.length && (i = (0,
                Ae.QM)(r, a));
                var l = {
                    user: n,
                    from: i,
                    componentUrl: o,
                    ctaFields: {}
                };
                (0,
                Re.AU)(l)
            }
              , k = function(e) {
                return Hf(w, {
                    className: "plan-card__cta plan-card__".concat(g, "_cta "),
                    onClick: N,
                    "aria-label": "Get ".concat(r, " plan"),
                    useStyle: b ? "white" : p,
                    fullWidth: !0
                }, e)
            };
            return Hf("div", {
                className: y
            }, Hf("div", {
                className: "plan-head__card-content"
            }, t && Hf("div", {
                className: "plan-head__card-badge"
            }, v && Hf(xe.Z, {
                breakpoints: {
                    xs: "eyebrow10",
                    xl: "eyebrow14"
                }
            }, v)), n ? Hf("div", {
                className: "plan-head__card-eyebrow-image"
            }, Hf("img", {
                src: b ? "/static/hitch/static/logos/plan-bundle-dark.svg" : "/static/hitch/static/logos/plan-bundle.svg",
                role: "presentation",
                alt: "logos"
            })) : Hf("div", {
                className: "plan-head__card-eyebrow"
            }, Hf(xe.Z, {
                breakpoints: {
                    xs: "eyebrow10",
                    md: "eyebrow14"
                }
            }, f)), Hf("div", {
                className: "plan-head__card-title"
            }, Hf(xe.Z, {
                breakpoints: {
                    xs: "title14",
                    md: "title18",
                    xl: "title24"
                }
            }, r)), Hf("div", {
                className: "plan-card__button-wrapper"
            }, k(d)), Hf("div", {
                className: "plan-card__button-wrapper--mobile"
            }, k(m)), o && Hf(je.m7.span, {
                className: "plan-head__card-disclaimer",
                dangerouslySetInnerHTML: {
                    __html: o
                }
            }), s && Hf(de.Fragment, null, Hf("span", {
                className: "plan-head__card-disclaimer"
            }, Hf("a", {
                "data-toggle": "modal",
                "data-target": "#plan-disclaimer-modal__".concat(c),
                "data-id": "plan-disclaimer-modal",
                title: o,
                role: "button",
                onClick: function(e) {
                    var t = ft()(e, "target")
                      , n = t && t.getAttribute("data-id");
                    n && ((0,
                    Tl.fireUtagLink)({
                        event_name: n,
                        cta_placement: "comparison_chart"
                    }),
                    (0,
                    Tl.fireUserInteraction)(n, "click", "click"))
                }
            }, " ", Hf(xe.Z, {
                variant: "body10"
            }, l))), Hf(Uo.view, {
                model: {
                    id: "plan-disclaimer-modal__".concat(c)
                },
                className: "plan-addon__info-modal"
            }, Hf("div", null, Hf("div", {
                dangerouslySetInnerHTML: {
                    __html: s
                }
            }))))))
        }, Bf = de.createElement, Ff = function(e) {
            var t = e.isBundle
              , n = e.pricingRow
              , a = n.slug
              , r = n.bundleHeadline
              , i = n.headline
              , o = n.prices
              , l = e.numPlans
              , s = Bf(xe.Z, {
                variant: "body16"
            }, i)
              , c = t ? o : o.filter((function(e) {
                return e.text
            }
            ));
            return Bf("div", {
                className: "plan-feature-item"
            }, Bf("div", {
                className: "col-xs-6 col-lg-5 plan-feature__title--pricing-row"
            }, t ? r : s), c.map((function(e, n) {
                var r = e.text
                  , i = e.bundle
                  , o = i.originalPriceText
                  , s = i.discountedPriceText;
                return Bf(de.Fragment, {
                    key: n
                }, Bf("div", {
                    className: "col-xs-".concat(12 / l, " plan-feature__check plan-feature__check-").concat(n),
                    key: "".concat(a, "_").concat(n)
                }, t ? Bf("div", {
                    className: "plan-feature__bullet"
                }, Bf(xe.Z, {
                    variant: "body12",
                    className: "plan-feature__bullet_text--strikethrough"
                }, o), Bf(xe.Z, {
                    variant: "body16",
                    className: "plan-feature__bullet_text"
                }, s)) : Bf("div", {
                    className: "plan-feature__bullet"
                }, Bf(xe.Z, {
                    variant: "body16",
                    className: "plan-feature__bullet_text"
                }, r))), Bf("div", {
                    className: "plan-feature__separator"
                }))
            }
            )))
        }, qf = (n(45549),
        de.createElement), Gf = function(e) {
            var t = e.model
              , n = t.headline
              , a = t.description
              , r = t.addonsHeadline
              , i = t.addonsDescription
              , o = t.isDark
              , l = t.bundle
              , s = t.bundlePlans
              , c = t.plans
              , u = t.pricingRows
              , d = t.bundleFeatures
              , m = t.features
              , p = t.bundleFeatureDisclaimers
              , f = t.featureDisclaimers
              , v = t.bundleAddons
              , h = t.addons
              , g = t.bundleAddonDisclaimers
              , _ = t.addonDisclaimers
              , b = e.user
              , y = e.requirePremium
              , w = e.network
              , N = {
                "is-dark": o
            }
              , k = Of().isBundle
              , S = (0,
            de.useState)(!1)
              , x = S[0]
              , T = S[1]
              , O = (0,
            de.useState)(!1)
              , E = O[0]
              , P = O[1]
              , C = (0,
            de.useState)(0)
              , D = C[0]
              , Z = C[1]
              , I = (0,
            de.useState)(0)
              , M = I[0]
              , A = I[1]
              , L = (0,
            de.useState)(0)
              , R = L[0]
              , j = L[1]
              , H = (0,
            de.useState)(0)
              , U = H[0]
              , B = H[1]
              , F = (0,
            de.useState)(!1)
              , q = F[0]
              , G = F[1]
              , W = (0,
            de.useRef)(null)
              , z = (0,
            de.useRef)(null)
              , V = (0,
            de.useRef)(null)
              , Y = (0,
            de.useRef)(null)
              , K = (0,
            de.useRef)(null)
              , X = k ? s : c
              , J = k ? d : m
              , Q = k ? p : f
              , $ = k ? v : h
              , ee = k ? g : _
              , te = X.some((function(e) {
                return e.badge
            }
            ))
              , ne = X.length
              , ae = {
                "plan-head-fixed": x
            }
              , re = {
                headColumnClass: ue()("col-xs-12", "col-lg-5", "plan-head-column", {
                    "plan-head-column--short": !te
                }, ae),
                headClass: ue()("col-xs-12", "col-lg-7", "plan-head", ae),
                headContainer: ue()("plan-head-container", ae),
                featureClass: ue()("plan-feature", ae),
                addonsClass: ue()("plan-addon", {
                    "plan-addon_show": E
                }),
                plansContainerClass: ue()("exp-plans-container")
            };
            (0,
            de.useEffect)((function() {
                return ie(),
                window.addEventListener("resize", ie),
                function() {
                    window.removeEventListener("resize", ie)
                }
            }
            ), []);
            var ie = function() {
                var e = document.querySelector("header")
                  , t = !!e && e.classList.contains("navigation--sticky");
                G(t);
                var n = {
                    desktop: t ? -e.offsetHeight : 0,
                    mobile: t ? -e.offsetHeight : 0
                }
                  , a = window.innerWidth < 1024
                  , r = W.current.getBoundingClientRect().height
                  , i = z.current.getBoundingClientRect().height
                  , o = V.current.getBoundingClientRect().height
                  , l = a ? i + n.mobile : n.desktop
                  , s = a ? o - n.mobile - window.innerHeight : o - n.desktop - window.innerHeight;
                A(s),
                Z(l),
                j(r),
                B(i)
            };
            return qf(Qa.a, {
                theme: o ? tr.oneHuluDarkTheme : tr.oneHuluLightTheme
            }, qf("div", {
                className: ue()("exp-plan-comparison-chart", "cu-plans", N),
                id: "plans",
                role: "region",
                "aria-label": "Plans",
                ref: Y
            }, qf("div", {
                className: re.plansContainerClass
            }, qf(jf, {
                headline: n,
                description: a
            }), qf($u.df, {
                rootMargin: "".concat(D, "px 0px 0px 0px"),
                onChange: function(e) {
                    return function(e) {
                        var t = Y.current.getBoundingClientRect().top
                          , n = K.current.getBoundingClientRect().top
                          , a = t < window.innerHeight
                          , r = n < window.innerHeight;
                        T(!e && a && r)
                    }(e)
                }
            }, qf("div", {
                className: "plans__observer"
            })), qf("div", {
                className: re.headContainer,
                ref: W,
                style: {
                    top: (0,
                    Xr.isBrowser)() && window.innerWidth < 1024 ? q ? -(U - 74) : -U : q ? 74 : 0
                }
            }, qf("div", {
                className: re.headColumnClass,
                ref: z
            }, qf(Cf, {
                bundle: l,
                isDark: o
            })), qf("div", {
                className: re.headClass,
                ref: V
            }, X.map((function(e, t) {
                return qf(Uf, {
                    numPlans: ne,
                    plan: e,
                    key: "feature-plan-".concat(t),
                    user: b,
                    network: w,
                    requirePremium: y,
                    isBadgePresent: te,
                    isBundle: k,
                    index: t,
                    isDark: o
                })
            }
            )))), qf("div", {
                className: re.featureClass,
                style: {
                    paddingTop: x ? R : null
                },
                ref: K
            }, u.map((function(e) {
                return qf(Ff, {
                    isBundle: k,
                    numPlans: ne,
                    key: e.slug,
                    pricingRow: e
                })
            }
            )), J.map((function(e, t) {
                return qf(Mf, {
                    numPlans: ne,
                    key: e.slug,
                    feature: e,
                    index: t,
                    type: "feature",
                    isDark: o
                })
            }
            ))), Q.length > 0 && qf("div", {
                className: "plan-feature-disclaimers"
            }, Q.map((function(e, t) {
                return qf("div", {
                    key: "feature-disclaimer-".concat(t),
                    className: "plans-disclaimer__container"
                }, qf(Zf, {
                    disclaimer: e,
                    index: t,
                    type: "feature"
                }))
            }
            ))), $.length > 0 && qf(de.Fragment, null, qf("div", {
                className: re.addonsClass
            }, qf("div", {
                className: "plan-addon__head col-xs-12"
            }, qf("div", {
                className: "col-lg-6 plan-addon__head-desktop"
            }, qf(xe.Z, {
                as: "h3",
                breakpoints: {
                    xs: "title24",
                    md: "title32"
                },
                className: "plan-addon__head-title"
            }, r), qf("div", {
                className: "plan-addon__head-desc",
                dangerouslySetInnerHTML: {
                    __html: i
                }
            }))), qf("div", {
                className: "plan-body__addon_container"
            }, $.map((function(e, t) {
                return qf(Mf, {
                    key: e.slug,
                    feature: e,
                    numPlans: ne,
                    index: t,
                    type: "addon",
                    isDark: o
                })
            }
            ))), ee.length > 0 && qf("div", {
                className: "plans-container__bottom-container"
            }, ee.map((function(e, t) {
                return qf(Zf, {
                    key: "addon-disclaimer-".concat(t),
                    disclaimer: e,
                    index: t,
                    type: "addon"
                })
            }
            )))), qf("div", {
                className: "plan-addon_controller",
                onClick: function() {
                    (0,
                    ve.JW)("default", "landing_plan_add_ons:".concat(E ? "hide" : "show"), "click", !1),
                    P(!E)
                },
                role: "button",
                "aria-label": "See Addons",
                "aria-pressed": "false",
                style: E ? {
                    "border-top": "none"
                } : {}
            }, "".concat(E ? "Hide" : "Show", " Add-ons"), qf("img", {
                src: "/static/hitch/static/icons/Dropdown_".concat(E ? "Up" : "Down", "_Arrow.svg"),
                role: "presentation",
                alt: "See Add-ons."
            })))), qf($u.df, {
                rootMargin: "100% 0px ".concat(M, "px 0px"),
                onChange: function() {
                    T(!1)
                }
            }, qf("div", {
                className: "plans__bottom-observer"
            }))))
        }, Wf = function(e) {
            return qf(Ef, null, qf(Gf, e))
        }, zf = (0,
        ye.connect)((function(e) {
            var t, n;
            return {
                user: e.user,
                ctaFields: e[Ge],
                network: (null === (t = e.detailEntity) || void 0 === t ? void 0 : t.network) || (null === (n = e.detailEntity) || void 0 === n ? void 0 : n.networkUpsell),
                requirePremium: e.detailEntity.requirePremium
            }
        }
        ))(Wf), Vf = (Rf = {},
        (0,
        se.Z)(Rf, Ge, Ve),
        (0,
        se.Z)(Rf, $r, ii),
        (0,
        se.Z)(Rf, ml.F, pl.Z),
        (0,
        se.Z)(Rf, Ye, $e),
        Rf), Yf = (0,
        me.shape)({
            slug: me.string,
            isApplicable: me.boolean
        }), Kf = (0,
        me.shape)({
            richText: me.string,
            modalId: me.string
        }), Xf = (0,
        me.shape)({
            id: me.string,
            richText: me.string,
            modalLinkText: me.string,
            modalId: me.string
        }), Jf = (0,
        me.shape)({
            slug: me.string,
            headline: me.string.isRequired,
            description: Kf,
            disclaimer: Xf,
            plans: (0,
            me.arrayOf)(Yf)
        }), Qf = (0,
        me.shape)({
            slug: me.string.isRequired,
            headline: me.string.isRequired,
            prices: (0,
            me.arrayOf)((0,
            me.shape)({
                originalPriceText: me.string,
                discountedPriceText: me.string
            }))
        }), $f = (0,
        me.shape)({
            slug: me.string,
            headline: me.string,
            eyebrow: me.string,
            badge: me.string,
            ctaText: me.string,
            mobileCtaText: me.string,
            ctaAction: me.string,
            ctaBtnStyle: me.string,
            program: me.string,
            logo: me.string,
            description: me.string
        }), ev = (0,
        me.shape)({
            richText: me.string,
            modalLinkText: me.string,
            modalContent: me.string,
            isBundle: me.boolean
        }), tv = ((0,
        me.shape)({
            headline: me.string.isRequired,
            description: me.string,
            addonsHeadline: me.string,
            addonsDescription: me.string,
            defaultTab: me.string.isRequired,
            controllerTabs: (0,
            me.shape)((0,
            se.Z)({}, me.string, (0,
            me.shape)({
                name: me.string,
                elementSpecifier: me.string
            }))),
            plans: (0,
            me.shape)((0,
            se.Z)({}, me.string, (0,
            me.arrayOf)($f).isRequired)),
            features: (0,
            me.shape)((0,
            se.Z)({}, me.string, (0,
            me.arrayOf)(Jf).isRequired)),
            featureDisclaimers: (0,
            me.shape)((0,
            se.Z)({}, me.string, (0,
            me.arrayOf)(ev))),
            addons: (0,
            me.shape)((0,
            se.Z)({}, me.string, (0,
            me.arrayOf)(Jf))),
            addonDisclaimers: (0,
            me.shape)((0,
            se.Z)({}, me.string, (0,
            me.arrayOf)(ev))),
            pricingRows: (0,
            me.shape)((0,
            se.Z)({}, me.string, (0,
            me.arrayOf)(Qf)))
        }),
        de.createElement), nv = de.createContext(), av = function() {
            return (0,
            de.useContext)(nv)
        }, rv = function(e) {
            var t = e.defaultTab
              , n = e.children
              , a = (0,
            de.useState)(t)
              , r = {
                tabIndex: a[0],
                setTabIndex: a[1]
            };
            return tv(nv.Provider, {
                value: r
            }, n)
        }, iv = de.createElement, ov = function(e) {
            var t = e.controllerTabs
              , n = av()
              , a = n.tabIndex
              , r = n.setTabIndex;
            return iv("div", {
                className: "ExpPlansContainerMultiTab-plan-controller"
            }, Object.entries(t).map((function(e) {
                var t = (0,
                cn.Z)(e, 2)
                  , n = t[0]
                  , i = t[1];
                return iv("button", {
                    className: ue()("plan-controller-chip", {
                        "--selected": a === n
                    }),
                    onClick: function() {
                        return function(e, t) {
                            (0,
                            Tl.fireUserInteraction)("".concat(t.elementSpecifier), "driver_click", "click", !0, "".concat(t.name)),
                            r(e)
                        }(n, i)
                    },
                    key: "controller-".concat(n),
                    "aria-label": "".concat(i.name, " Tab")
                }, iv(xe.Z, {
                    variant: "subtitle14"
                }, i.name))
            }
            )))
        }, lv = de.createElement, sv = function(e) {
            var t = e.disclaimer
              , n = t.modalContent
              , a = t.richText
              , r = t.modalLinkText
              , i = e.index
              , o = e.type
              , l = Boolean(n)
              , s = "".concat(o, "-disclaimer-modal");
            return lv("div", {
                className: "plans-container__features-container col-xs-12"
            }, lv("div", {
                className: "plans-container__features-container__disclaimer"
            }, lv("span", {
                className: "section-disclaimer",
                dangerouslySetInnerHTML: {
                    __html: a
                }
            }), l && lv("a", {
                "data-toggle": "modal",
                "data-target": "#".concat(s, "__").concat(i),
                title: a,
                role: "button",
                onClick: function() {
                    (0,
                    Tl.fireUtagLink)({
                        event_name: s,
                        cta_placement: "comparison_chart"
                    }),
                    (0,
                    Tl.fireUserInteraction)(s, "click", "click")
                }
            }, r)), l && lv(Uo.view, {
                model: {
                    id: "".concat(s, "__").concat(i)
                },
                className: "plan-addon__info-modal"
            }, lv("div", null, lv("div", {
                dangerouslySetInnerHTML: {
                    __html: n
                }
            }))))
        }, cv = de.createElement, uv = function(e) {
            var t = e.feature
              , n = t.headline
              , a = t.plans
              , r = t.bullet
              , i = t.description
              , o = i.richText
              , l = i.modalId
              , s = e.index
              , c = e.type
              , u = e.numPlans
              , d = e.isDark
              , m = o || l
              , p = "".concat(c, "-description-tooltip")
              , f = ue()("col-xs-6", "col-lg-4", "plan-feature__title", {
                "plan-feature__standard": !r
            })
              , v = cv(xe.Z, {
                variant: "body16",
                className: "plan-feature__bullet_default"
            }, "\u2014")
              , h = cv("img", {
                src: d ? "/static/hitch/static/icons/Pricing_Checkmark_green-light.svg" : "/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg",
                role: "presentation",
                alt: n
            });
            return cv("div", {
                className: "plan-feature-item"
            }, cv("div", {
                className: f
            }, cv("div", null, cv(xe.Z, {
                variant: "body14"
            }, n), m && cv("span", null, cv("a", {
                "data-toggle": "modal",
                "data-target": o ? "#".concat(p, "_").concat(s) : "#".concat(l),
                className: "plan-addon__info",
                title: "".concat(n, " info"),
                role: "button",
                onClick: function(e) {
                    var t = "".concat(ft()(e, "target.dataset.column", "NO_COL"), "-").concat(ft()(e, "target.dataset.feature", "NO_FEATURE"));
                    (0,
                    Tl.fireUtagLink)({
                        event_name: "tooltip_plans",
                        cta_placement: "comparison_chart",
                        tool_tip: t
                    }),
                    (0,
                    Tl.fireUserInteraction)(p, "click", "click")
                }
            }, cv("img", {
                src: d ? "/static/hitch/static/icons/Info_Icon_White.svg" : "/static/hitch/static/icons/Info_Icon_Dark_Grey.svg",
                role: "presentation",
                alt: n
            })), o && cv(Uo.view, {
                model: {
                    id: "".concat(p, "_").concat(s)
                },
                className: "plan-addon__info-modal"
            }, cv("div", null, cv(xe.Z, {
                as: "h3",
                variant: "title32",
                className: "plan-addon__header"
            }, n), cv("div", {
                dangerouslySetInnerHTML: {
                    __html: o
                }
            })))))), a.map((function(e, t) {
                var n = e.slug
                  , a = e.isApplicable
                  , r = e.text
                  , i = a ? h : v
                  , o = r ? function(e) {
                    return cv(xe.Z, {
                        variant: "body14",
                        className: "plan-feature__bullet_text"
                    }, e)
                }(r) : i;
                return cv(de.Fragment, {
                    key: t
                }, cv("div", {
                    className: "col-xs-".concat(12 / u, " plan-feature__check plan-feature__check-").concat(t),
                    key: "".concat(n, "_").concat(t)
                }, cv("div", {
                    className: "plan-feature__bullet plan-feature__bullet-".concat(u, "plans")
                }, o)), cv("div", {
                    className: "plan-feature__separator"
                }))
            }
            )))
        }, dv = (n(47),
        de.createElement), mv = function(e) {
            var t = e.headline
              , n = e.description;
            return dv("div", {
                className: "header"
            }, dv(xe.Z, {
                as: "h2",
                breakpoints: {
                    xs: "title32",
                    md: "title48"
                },
                className: "header__headline"
            }, t), dv("div", {
                className: "header__description",
                dangerouslySetInnerHTML: {
                    __html: n
                }
            }))
        };
        mv.defaultProps = {
            headline: "",
            description: ""
        };
        var pv, fv, vv, hv = mv, gv = de.createElement, _v = function(e) {
            var t = e.isBadgePresent
              , n = e.isBundle
              , a = e.plan
              , r = a.headline
              , i = a.disclaimer
              , o = i.richText
              , l = i.modalLinkText
              , s = i.modalContent
              , c = i.id
              , u = a.ctaAction
              , d = a.ctaText
              , m = a.mobileCtaText
              , p = a.ctaBtnStyle
              , f = a.eyebrow
              , v = a.badge
              , h = a.program
              , g = a.logo
              , _ = a.description
              , b = a.headlineEmphasis
              , y = e.index
              , w = e.numPlans
              , N = e.isDark
              , k = ue()("plan-head__card", "plan-head__card-".concat(y), "col-xs-".concat(12 / w), {
                "plan-head__card--short": !t
            })
              , S = (0,
            je.GO)({
                event_name: "plan_select",
                cta_placement: "comparison_chart",
                product_name: n ? "".concat(r, "-bundle") : r
            }, (0,
            je.pS)(He.Z, "comparison_chart:plan_select"))
              , x = function(t) {
                t.stopPropagation();
                var n = e.user
                  , a = e.network
                  , r = e.requirePremium
                  , i = null
                  , o = u;
                h ? (i = h,
                o = null) : r && a.length && (i = (0,
                Ae.QM)(r, a));
                var l = {
                    user: n,
                    from: i,
                    componentUrl: o,
                    ctaFields: {}
                };
                (0,
                Re.AU)(l)
            }
              , T = function(e) {
                return gv(S, {
                    className: "plan-card__cta plan-card__".concat(y, "_cta "),
                    onClick: x,
                    "aria-label": "Get ".concat(r, " plan"),
                    useStyle: N ? "white" : p,
                    fullWidth: !0
                }, e)
            };
            return gv("div", {
                className: k
            }, gv("div", {
                className: "plan-head__card-content"
            }, v && gv("div", {
                className: "plan-head__card-badge"
            }, gv(xe.Z, {
                variant: "eyebrow10"
            }, v)), f && gv("div", {
                className: "plan-head__card-eyebrow"
            }, gv(xe.Z, {
                variant: "eyebrow10"
            }, f)), b && r ? gv(de.Fragment, null, gv("div", {
                className: "plan-head__card-title"
            }, gv(xe.Z, {
                variant: "title16",
                className: "plan-head__card-title-text"
            }, r)), g && gv("div", {
                className: "plan-head__card-eyebrow-image"
            }, gv("img", {
                src: g,
                role: "presentation",
                alt: "logo"
            }))) : gv(de.Fragment, null, g && gv("div", {
                className: "plan-head__card-eyebrow-image"
            }, gv("img", {
                src: g,
                role: "presentation",
                alt: "logo"
            })), gv("div", {
                className: "plan-head__card-title"
            }, gv(xe.Z, {
                variant: "title16",
                className: "plan-head__card-title-text"
            }, r))), _ && gv("div", {
                className: "plan-head__card-description"
            }, gv(xe.Z, {
                variant: "body12",
                className: "plan-head__card-description-text"
            }, _)), gv("div", {
                className: "plan-card__button-wrapper"
            }, T(d)), gv("div", {
                className: "plan-card__button-wrapper--mobile"
            }, T(m)), o && gv(je.m7.span, {
                className: "plan-head__card-disclaimer",
                dangerouslySetInnerHTML: {
                    __html: o
                }
            }), s && gv(de.Fragment, null, gv("span", {
                className: "plan-head__card-disclaimer"
            }, gv("a", {
                "data-toggle": "modal",
                "data-target": "#plan-disclaimer-modal__".concat(c),
                "data-id": "plan-disclaimer-modal",
                title: o,
                role: "button",
                onClick: function(e) {
                    var t = ft()(e, "target")
                      , n = t && t.getAttribute("data-id");
                    n && ((0,
                    Tl.fireUtagLink)({
                        event_name: n,
                        cta_placement: "comparison_chart"
                    }),
                    (0,
                    Tl.fireUserInteraction)(n, "click", "click"))
                }
            }, " ", gv(xe.Z, {
                variant: "body10"
            }, l))), gv(Uo.view, {
                model: {
                    id: "plan-disclaimer-modal__".concat(c)
                },
                className: "plan-addon__info-modal"
            }, gv("div", null, gv("div", {
                dangerouslySetInnerHTML: {
                    __html: s
                }
            }))))))
        }, bv = de.createElement, yv = function(e) {
            var t = e.pricingRow
              , n = t.slug
              , a = t.headline
              , r = t.prices
              , i = e.numPlans;
            return bv("div", {
                className: "plan-feature-item"
            }, bv("div", {
                className: "col-xs-4 plan-feature__title--pricing-row"
            }, bv(xe.Z, {
                variant: "body14"
            }, a)), r.map((function(e, t) {
                var a = e.originalPriceText
                  , r = e.discountedPriceText;
                return bv(de.Fragment, {
                    key: t
                }, bv("div", {
                    className: "col-xs-".concat(12 / i, " plan-feature__check plan-feature__check-").concat(t),
                    key: "".concat(n, "_").concat(t)
                }, r ? bv("div", {
                    className: "plan-feature__bullet"
                }, bv(xe.Z, {
                    variant: "body12",
                    className: "plan-feature__bullet_text--strikethrough"
                }, a), bv(xe.Z, {
                    variant: "body14",
                    className: "plan-feature__bullet_text"
                }, r)) : bv("div", {
                    className: "plan-feature__bullet"
                }, bv(xe.Z, {
                    variant: "body14",
                    className: "plan-feature__bullet_text"
                }, a))), bv("div", {
                    className: "plan-feature__separator"
                }))
            }
            )))
        }, wv = (n(18154),
        de.createElement), Nv = function(e) {
            var t = e.model
              , n = t.headline
              , a = t.description
              , r = t.addonsHeadline
              , i = t.addonsDescription
              , o = t.isDark
              , l = t.controllerTabs
              , s = t.plans
              , c = t.features
              , u = t.featureDisclaimers
              , d = t.addons
              , m = t.addonDisclaimers
              , p = t.pricingRows
              , f = e.user
              , v = e.requirePremium
              , h = e.network
              , g = {
                "is-dark": o
            }
              , _ = av().tabIndex
              , b = (0,
            de.useState)(!1)
              , y = b[0]
              , w = b[1]
              , N = (0,
            de.useState)(!1)
              , k = N[0]
              , S = N[1]
              , x = (0,
            de.useState)(0)
              , T = x[0]
              , O = x[1]
              , E = (0,
            de.useState)(0)
              , P = E[0]
              , C = E[1]
              , D = (0,
            de.useState)(0)
              , Z = D[0]
              , I = D[1]
              , M = (0,
            de.useState)(!1)
              , A = M[0]
              , L = M[1]
              , R = (0,
            de.useRef)(null)
              , j = (0,
            de.useRef)(null)
              , H = (0,
            de.useRef)(null)
              , U = (0,
            de.useRef)(null)
              , B = (0,
            de.useRef)(null)
              , F = s[_]
              , q = c[_]
              , G = u[_]
              , W = d[_]
              , z = m[_]
              , V = p[_]
              , Y = F.some((function(e) {
                return e.badge
            }
            ))
              , K = F.length
              , X = {
                "plan-head-fixed": y
            }
              , J = {
                headColumnClass: ue()("col-xs-12", "col-lg-4", "ExpPlansContainerMultiTab--new-toggle", {
                    "plan-head-column--short": !Y
                }, X),
                headClass: ue()("col-xs-12", "col-lg-8", "plan-head", X),
                headContainer: ue()("plan-head-container", X),
                featureClass: ue()("plan-feature", X),
                addonsClass: ue()("plan-addon", {
                    "plan-addon_show": k
                }),
                plansContainerClass: ue()("ExpPlansContainerMultiTab")
            };
            (0,
            de.useEffect)((function() {
                return Q(),
                window.addEventListener("resize", Q),
                function() {
                    window.removeEventListener("resize", Q)
                }
            }
            ), [_]);
            var Q = function() {
                var e = document.querySelector("header")
                  , t = !!e && e.classList.contains("navigation--sticky");
                L(t);
                var n = {
                    desktop: t ? -e.offsetHeight : 0,
                    mobile: t ? -e.offsetHeight : 0
                }
                  , a = window.innerWidth < 1024
                  , r = R.current.getBoundingClientRect().height
                  , i = H.current.getBoundingClientRect().height
                  , o = a ? n.mobile : n.desktop
                  , l = a ? i - n.mobile - window.innerHeight : i - n.desktop - window.innerHeight;
                C(l),
                O(o),
                I(r)
            };
            return wv(Qa.a, {
                theme: o ? tr.oneHuluDarkTheme : tr.oneHuluLightTheme
            }, wv("div", {
                className: ue()("ExpPlanComparisonChartMultiTab", "cu-plans", g),
                id: "plans",
                role: "region",
                "aria-label": "Plans",
                ref: U
            }, wv("div", {
                className: J.plansContainerClass
            }, wv(hv, {
                headline: n,
                description: a
            }), wv("div", {
                className: "ExpPlansContainerMultiTab-controller-container",
                ref: j
            }, wv(ov, {
                controllerTabs: l
            })), wv($u.df, {
                rootMargin: "".concat(T, "px 0px 0px 0px"),
                onChange: function(e) {
                    return function(e) {
                        var t = U.current.getBoundingClientRect().top
                          , n = B.current.getBoundingClientRect().top
                          , a = t < window.innerHeight
                          , r = n < window.innerHeight;
                        w(!e && a && r)
                    }(e)
                }
            }, wv("div", {
                className: "plans__observer"
            })), wv("div", {
                className: J.headContainer,
                ref: R,
                style: {
                    top: A ? 74 : 0
                }
            }, wv("div", {
                className: J.headColumnClass
            }), wv("div", {
                className: J.headClass,
                ref: H
            }, F.map((function(e, t) {
                return wv(_v, {
                    numPlans: K,
                    plan: e,
                    key: "feature-plan-".concat(t),
                    user: f,
                    network: h,
                    requirePremium: v,
                    isBadgePresent: Y,
                    index: t,
                    isDark: o
                })
            }
            )))), wv("div", {
                className: J.featureClass,
                style: {
                    paddingTop: y ? Z : null
                },
                ref: B
            }, V.map((function(e) {
                return wv(yv, {
                    numPlans: K,
                    key: e.slug,
                    pricingRow: e
                })
            }
            )), q.map((function(e, t) {
                return wv(uv, {
                    numPlans: K,
                    key: e.slug,
                    feature: e,
                    index: t,
                    type: "feature",
                    isDark: o
                })
            }
            ))), G.length > 0 && wv("div", {
                className: "plan-feature-disclaimers"
            }, G.map((function(e, t) {
                return wv("div", {
                    key: "feature-disclaimer-".concat(t),
                    className: "plans-disclaimer__container"
                }, wv(sv, {
                    disclaimer: e,
                    index: t,
                    type: "feature"
                }))
            }
            ))), W.length > 0 && wv(de.Fragment, null, wv("div", {
                className: J.addonsClass
            }, wv("div", {
                className: "plan-addon__head col-xs-12"
            }, wv("div", {
                className: "col-lg-6 plan-addon__head-desktop"
            }, wv(xe.Z, {
                as: "h3",
                breakpoints: {
                    xs: "title24",
                    md: "title32"
                },
                className: "plan-addon__head-title"
            }, r), wv("div", {
                className: "plan-addon__head-desc",
                dangerouslySetInnerHTML: {
                    __html: i
                }
            }))), wv("div", {
                className: "plan-body__addon_container"
            }, W.map((function(e, t) {
                return wv(uv, {
                    key: e.slug,
                    feature: e,
                    numPlans: K,
                    index: t,
                    type: "addon",
                    isDark: o
                })
            }
            ))), z.length > 0 && wv("div", {
                className: "plans-container__bottom-container"
            }, z.map((function(e, t) {
                return wv(sv, {
                    key: "addon-disclaimer-".concat(t),
                    disclaimer: e,
                    index: t,
                    type: "addon"
                })
            }
            )))), wv("div", {
                className: "plan-addon_controller",
                onClick: function() {
                    (0,
                    ve.JW)("default", "landing_plan_add_ons:".concat(k ? "hide" : "show"), "click", !1),
                    S(!k)
                },
                role: "button",
                "aria-label": "See Addons",
                "aria-pressed": "false",
                style: k ? {
                    "border-top": "none"
                } : {}
            }, "".concat(k ? "Hide" : "Show", " Add-ons"), wv("img", {
                src: "/static/hitch/static/icons/Dropdown_".concat(k ? "Up" : "Down", "_Arrow.svg"),
                role: "presentation",
                alt: "See Add-ons."
            })))), wv($u.df, {
                rootMargin: "100% 0px ".concat(P, "px 0px"),
                onChange: function() {
                    w(!1)
                }
            }, wv("div", {
                className: "plans__bottom-observer"
            }))))
        }, kv = function(e) {
            var t = e.model.defaultTab;
            return wv(rv, {
                defaultTab: t
            }, wv(Nv, e))
        }, Sv = (0,
        ye.connect)((function(e) {
            var t, n;
            return {
                user: e.user,
                ctaFields: e[Ge],
                network: (null === (t = e.detailEntity) || void 0 === t ? void 0 : t.network) || (null === (n = e.detailEntity) || void 0 === n ? void 0 : n.networkUpsell),
                requirePremium: e.detailEntity.requirePremium
            }
        }
        ))(kv), xv = (pv = {},
        (0,
        se.Z)(pv, Ge, Ve),
        (0,
        se.Z)(pv, $r, ii),
        (0,
        se.Z)(pv, ml.F, pl.Z),
        (0,
        se.Z)(pv, Ye, $e),
        pv), Tv = (0,
        me.shape)({
            slug: me.string,
            isApplicable: me.boolean
        }), Ov = (0,
        me.shape)({
            richText: me.string,
            modalId: me.string
        }), Ev = (0,
        me.shape)({
            id: me.string,
            richText: me.string,
            modalLinkText: me.string,
            modalId: me.string
        }), Pv = (0,
        me.shape)({
            slug: me.string,
            headline: me.string.isRequired,
            description: Ov,
            disclaimer: Ev,
            plans: (0,
            me.arrayOf)(Tv)
        }), Cv = (0,
        me.shape)({
            slug: me.string,
            headline: me.string.isRequired,
            bundleHeadline: me.string.isRequired,
            prices: (0,
            me.arrayOf)((0,
            me.shape)({
                text: me.string
            }))
        }), Dv = (0,
        me.shape)({
            slug: me.string,
            headline: me.string,
            eyebrow: me.string,
            badge: me.string,
            ctaText: me.string,
            mobileCtaText: me.string,
            ctaAction: me.string,
            ctaBtnStyle: me.string,
            program: me.string
        }), Zv = (0,
        me.shape)({
            richText: me.string,
            modalLinkText: me.string,
            modalContent: me.string,
            isBundle: me.boolean
        }), Iv = ((0,
        me.shape)({
            headline: me.string.isRequired,
            description: me.string,
            addonsHeadline: me.string,
            addonsDescription: me.string,
            bundle: (0,
            me.shape)({
                leftHeadline: me.string,
                rightHeadline: me.string,
                modal: (0,
                me.shape)({
                    id: me.string,
                    header: me.string,
                    disclaimer: me.string,
                    sections: (0,
                    me.arrayOf)((0,
                    me.shape)({
                        title: me.string,
                        items: (0,
                        me.arrayOf)((0,
                        me.shape)({
                            text: me.string,
                            displayBullet: me.boolean
                        }))
                    }))
                })
            }),
            plans: (0,
            me.arrayOf)(Dv).isRequired,
            bundlePlans: (0,
            me.arrayOf)(Dv).isRequired,
            pricingRows: (0,
            me.arrayOf)(Cv),
            features: (0,
            me.arrayOf)(Pv),
            bundleFeatures: (0,
            me.arrayOf)(Pv),
            featureDisclaimers: (0,
            me.arrayOf)(Zv),
            bundleFeatureDisclaimers: (0,
            me.arrayOf)(Zv),
            addons: (0,
            me.arrayOf)(Pv),
            bundleAddons: (0,
            me.arrayOf)(Pv),
            addonDisclaimers: (0,
            me.arrayOf)(Zv),
            bundleAddonDisclaimers: (0,
            me.arrayOf)(Zv)
        }),
        n(83362),
        de.createElement), Mv = function(e) {
            var t = e.bundle
              , n = t.leftHeadline
              , a = t.rightHeadline
              , r = t.modal
              , i = e.isDark
              , o = !Ks()(r)
              , l = Of()
              , s = l.isBundle
              , c = l.setIsBundle
              , u = "comparison_chart:".concat(s ? "base_toggle" : "bundle_toggle");
            return Iv("div", {
                className: "bundle-header-with-new-toggle"
            }, Iv("div", {
                className: "bundle-header-with-new-toggle__left-headline"
            }, Iv("div", {
                className: "bundle-header-with-new-toggle__left-top-headline"
            }, Iv(xe.Z, {
                variant: "subtitle14"
            }, n)), Iv("div", {
                className: "bundle-header-with-new-toggle__left-bottom-headline"
            }, Iv("img", {
                src: "/static/hitch/static/logos/hulu-logo.svg",
                role: "presentation",
                alt: "hulu-logo"
            }))), Iv("div", {
                className: "bundle-header-with-new-toggle__toggle-container"
            }, Iv(Md, {
                isOn: s,
                onColor: i ? "#1CE783" : "#040405",
                handleToggle: function() {
                    c(!s),
                    (0,
                    Tl.fireUserInteraction)(u, "driver_click", "click", !0, s ? "Base Plans" : "Bundle Save");
                    var e = new CustomEvent(he.REGISTER_MODALS_EVENT);
                    setTimeout((function() {
                        document.dispatchEvent(e)
                    }
                    ), 100)
                }
            })), Iv("div", {
                className: "bundle-header-with-new-toggle__right-headline"
            }, Iv("div", {
                className: "bundle-header-with-new-toggle__right-top-headline"
            }, Iv(xe.Z, {
                variant: "subtitle14"
            }, a), o && Iv("span", null, Iv("a", {
                "data-toggle": "modal",
                "data-target": "#".concat(r.id),
                role: "button"
            }, Iv("img", {
                src: i ? "/static/hitch/static/icons/Info_Icon_White.svg" : "/static/hitch/static/icons/Info_Icon_Dark_Grey.svg",
                role: "presentation",
                alt: a
            })))), Iv("div", {
                className: "bundle-header-with-new-toggle__right-bottom-headline"
            }, Iv("img", {
                src: i ? "/static/hitch/static/logos/bundles-dark.svg" : "/static/hitch/static/logos/bundles.svg",
                role: "presentation",
                alt: "logos"
            }))), o && Iv(Sf, {
                modal: r
            }))
        }, Av = (n(3341),
        de.createElement), Lv = function(e) {
            var t = e.model
              , n = t.headline
              , a = t.description
              , r = t.addonsHeadline
              , i = t.addonsDescription
              , o = t.isDark
              , l = t.bundle
              , s = t.bundlePlans
              , c = t.plans
              , u = t.pricingRows
              , d = t.bundleFeatures
              , m = t.features
              , p = t.bundleFeatureDisclaimers
              , f = t.featureDisclaimers
              , v = t.bundleAddons
              , h = t.addons
              , g = t.bundleAddonDisclaimers
              , _ = t.addonDisclaimers
              , b = e.user
              , y = e.requirePremium
              , w = e.network
              , N = {
                "is-dark": o
            }
              , k = Of().isBundle
              , S = (0,
            de.useState)(!1)
              , x = S[0]
              , T = S[1]
              , O = (0,
            de.useState)(!1)
              , E = O[0]
              , P = O[1]
              , C = (0,
            de.useState)(0)
              , D = C[0]
              , Z = C[1]
              , I = (0,
            de.useState)(0)
              , M = I[0]
              , A = I[1]
              , L = (0,
            de.useState)(0)
              , R = L[0]
              , j = L[1]
              , H = (0,
            de.useState)(0)
              , U = H[0]
              , B = H[1]
              , F = (0,
            de.useState)(!1)
              , q = F[0]
              , G = F[1]
              , W = (0,
            de.useRef)(null)
              , z = (0,
            de.useRef)(null)
              , V = (0,
            de.useRef)(null)
              , Y = (0,
            de.useRef)(null)
              , K = (0,
            de.useRef)(null)
              , X = k ? s : c
              , J = k ? d : m
              , Q = k ? p : f
              , $ = k ? v : h
              , ee = k ? g : _
              , te = X.some((function(e) {
                return e.badge
            }
            ))
              , ne = X.length
              , ae = {
                "plan-head-fixed": x
            }
              , re = {
                headColumnClass: ue()("col-xs-12", "col-lg-5", "plan-head-column-for-new-toggle", {
                    "plan-head-column--short": !te
                }, ae),
                headClass: ue()("col-xs-12", "col-lg-7", "plan-head", ae),
                headContainer: ue()("plan-head-container", ae),
                featureClass: ue()("plan-feature", ae),
                addonsClass: ue()("plan-addon", {
                    "plan-addon_show": E
                }),
                plansContainerClass: ue()("exp-plans-container")
            };
            (0,
            de.useEffect)((function() {
                return ie(),
                window.addEventListener("resize", ie),
                function() {
                    window.removeEventListener("resize", ie)
                }
            }
            ), []);
            var ie = function() {
                var e = document.querySelector("header")
                  , t = !!e && e.classList.contains("navigation--sticky");
                G(t);
                var n = {
                    desktop: t ? -e.offsetHeight : 0,
                    mobile: t ? -e.offsetHeight : 0
                }
                  , a = window.innerWidth < 1024
                  , r = W.current.getBoundingClientRect().height
                  , i = z.current.getBoundingClientRect().height
                  , o = V.current.getBoundingClientRect().height
                  , l = a ? i + n.mobile : n.desktop
                  , s = a ? o - n.mobile - window.innerHeight : o - n.desktop - window.innerHeight;
                A(s),
                Z(l),
                j(r),
                B(i)
            };
            return Av(Qa.a, {
                theme: o ? tr.oneHuluDarkTheme : tr.oneHuluLightTheme
            }, Av("div", {
                className: ue()("exp-plan-comparison-chart", "cu-plans", N),
                id: "plans",
                role: "region",
                "aria-label": "Plans",
                ref: Y
            }, Av("div", {
                className: re.plansContainerClass
            }, Av(jf, {
                headline: n,
                description: a
            }), Av($u.df, {
                rootMargin: "".concat(D, "px 0px 0px 0px"),
                onChange: function(e) {
                    return function(e) {
                        var t = Y.current.getBoundingClientRect().top
                          , n = K.current.getBoundingClientRect().top
                          , a = t < window.innerHeight
                          , r = n < window.innerHeight;
                        T(!e && a && r)
                    }(e)
                }
            }, Av("div", {
                className: "plans__observer"
            })), Av("div", {
                className: re.headContainer,
                ref: W,
                style: {
                    top: (0,
                    Xr.isBrowser)() && window.innerWidth < 1024 ? q ? -(U - 74) : -U : q ? 74 : 0
                }
            }, Av("div", {
                className: re.headColumnClass,
                ref: z
            }, Av(Mv, {
                bundle: l,
                isDark: o
            })), Av("div", {
                className: re.headClass,
                ref: V
            }, X.map((function(e, t) {
                return Av(Uf, {
                    numPlans: ne,
                    plan: e,
                    key: "feature-plan-".concat(t),
                    user: b,
                    network: w,
                    requirePremium: y,
                    isBadgePresent: te,
                    isBundle: k,
                    index: t,
                    isDark: o
                })
            }
            )))), Av("div", {
                className: re.featureClass,
                style: {
                    paddingTop: x ? R : null
                },
                ref: K
            }, u.map((function(e) {
                return Av(Ff, {
                    isBundle: k,
                    numPlans: ne,
                    key: e.slug,
                    pricingRow: e
                })
            }
            )), J.map((function(e, t) {
                return Av(Mf, {
                    numPlans: ne,
                    key: e.slug,
                    feature: e,
                    index: t,
                    type: "feature",
                    isDark: o
                })
            }
            ))), Q.length > 0 && Av("div", {
                className: "plan-feature-disclaimers"
            }, Q.map((function(e, t) {
                return Av("div", {
                    key: "feature-disclaimer-".concat(t),
                    className: "plans-disclaimer__container"
                }, Av(Zf, {
                    disclaimer: e,
                    index: t,
                    type: "feature"
                }))
            }
            ))), $.length > 0 && Av(de.Fragment, null, Av("div", {
                className: re.addonsClass
            }, Av("div", {
                className: "plan-addon__head col-xs-12"
            }, Av("div", {
                className: "col-lg-6 plan-addon__head-desktop"
            }, Av(xe.Z, {
                as: "h3",
                breakpoints: {
                    xs: "title24",
                    md: "title32"
                },
                className: "plan-addon__head-title"
            }, r), Av("div", {
                className: "plan-addon__head-desc",
                dangerouslySetInnerHTML: {
                    __html: i
                }
            }))), Av("div", {
                className: "plan-body__addon_container"
            }, $.map((function(e, t) {
                return Av(Mf, {
                    key: e.slug,
                    feature: e,
                    numPlans: ne,
                    index: t,
                    type: "addon",
                    isDark: o
                })
            }
            ))), ee.length > 0 && Av("div", {
                className: "plans-container__bottom-container"
            }, ee.map((function(e, t) {
                return Av(Zf, {
                    key: "addon-disclaimer-".concat(t),
                    disclaimer: e,
                    index: t,
                    type: "addon"
                })
            }
            )))), Av("div", {
                className: "plan-addon_controller",
                onClick: function() {
                    (0,
                    ve.JW)("default", "landing_plan_add_ons:".concat(E ? "hide" : "show"), "click", !1),
                    P(!E)
                },
                role: "button",
                "aria-label": "See Addons",
                "aria-pressed": "false",
                style: E ? {
                    "border-top": "none"
                } : {}
            }, "".concat(E ? "Hide" : "Show", " Add-ons"), Av("img", {
                src: "/static/hitch/static/icons/Dropdown_".concat(E ? "Up" : "Down", "_Arrow.svg"),
                role: "presentation",
                alt: "See Add-ons."
            })))), Av($u.df, {
                rootMargin: "100% 0px ".concat(M, "px 0px"),
                onChange: function() {
                    T(!1)
                }
            }, Av("div", {
                className: "plans__bottom-observer"
            }))))
        }, Rv = function(e) {
            return Av(Ef, null, Av(Lv, e))
        }, jv = (0,
        ye.connect)((function(e) {
            var t, n;
            return {
                user: e.user,
                ctaFields: e[Ge],
                network: (null === (t = e.detailEntity) || void 0 === t ? void 0 : t.network) || (null === (n = e.detailEntity) || void 0 === n ? void 0 : n.networkUpsell),
                requirePremium: e.detailEntity.requirePremium
            }
        }
        ))(Rv), Hv = (fv = {},
        (0,
        se.Z)(fv, Ge, Ve),
        (0,
        se.Z)(fv, $r, ii),
        (0,
        se.Z)(fv, ml.F, pl.Z),
        (0,
        se.Z)(fv, Ye, $e),
        fv), Uv = (vv = {},
        (0,
        se.Z)(vv, ru.h1, i),
        (0,
        se.Z)(vv, ru.Mi, o),
        (0,
        se.Z)(vv, ru.V9, a),
        (0,
        se.Z)(vv, ru.Jd, r),
        (0,
        se.Z)(vv, ru.hk, l),
        (0,
        se.Z)(vv, ru.cs, f),
        (0,
        se.Z)(vv, ru.ce, f),
        (0,
        se.Z)(vv, ru.bV, h),
        (0,
        se.Z)(vv, ru.Bk, b),
        (0,
        se.Z)(vv, ru.ry, y),
        (0,
        se.Z)(vv, ru.dR, N),
        (0,
        se.Z)(vv, ru.uv, k),
        (0,
        se.Z)(vv, ru.Lz, s),
        (0,
        se.Z)(vv, ru.bk, S),
        (0,
        se.Z)(vv, ru.dz, c),
        (0,
        se.Z)(vv, ru.J7, x),
        (0,
        se.Z)(vv, ru.VY, u),
        (0,
        se.Z)(vv, ru.s0, T),
        (0,
        se.Z)(vv, ru.DF, p),
        (0,
        se.Z)(vv, ru.Pu, O),
        (0,
        se.Z)(vv, ru.b9, E),
        (0,
        se.Z)(vv, ru.Zu, P),
        (0,
        se.Z)(vv, ru.O3, C),
        (0,
        se.Z)(vv, ru.U0, D),
        (0,
        se.Z)(vv, ru._A, Z),
        (0,
        se.Z)(vv, ru.wp, I),
        (0,
        se.Z)(vv, ru.HO, M),
        (0,
        se.Z)(vv, ru.R2, A),
        (0,
        se.Z)(vv, ru.XN, L),
        (0,
        se.Z)(vv, ru.lM, g),
        (0,
        se.Z)(vv, ru.PL, R),
        (0,
        se.Z)(vv, ru.u_, Uo),
        (0,
        se.Z)(vv, ru.W_, j),
        (0,
        se.Z)(vv, ru.Xl, H),
        (0,
        se.Z)(vv, ru.Kg, U),
        (0,
        se.Z)(vv, ru.no, B),
        (0,
        se.Z)(vv, ru.jC, F),
        (0,
        se.Z)(vv, ru.qh, q),
        (0,
        se.Z)(vv, ru.Bu, G),
        (0,
        se.Z)(vv, ru.Nc, d),
        (0,
        se.Z)(vv, ru.xY, v),
        (0,
        se.Z)(vv, ru.Vy, w),
        (0,
        se.Z)(vv, ru.cD, W),
        (0,
        se.Z)(vv, ru.Tf, z),
        (0,
        se.Z)(vv, ru.WI, m),
        (0,
        se.Z)(vv, ru.QK, V),
        (0,
        se.Z)(vv, ru.JT, Y),
        (0,
        se.Z)(vv, ru.W8, K),
        (0,
        se.Z)(vv, ru.x7, X),
        (0,
        se.Z)(vv, ru.OO, J),
        (0,
        se.Z)(vv, ru.hc, _),
        (0,
        se.Z)(vv, ru.Ml, ie),
        (0,
        se.Z)(vv, ru.bz, le),
        (0,
        se.Z)(vv, ru.VO, oe),
        (0,
        se.Z)(vv, ru.S0, $),
        (0,
        se.Z)(vv, ru.yM, ne),
        (0,
        se.Z)(vv, ru.WB, Q),
        (0,
        se.Z)(vv, ru.sI, ae),
        (0,
        se.Z)(vv, ru.xn, re),
        (0,
        se.Z)(vv, ru.eR, ee),
        (0,
        se.Z)(vv, ru.kP, te),
        vv), Bv = function(e) {
            return e in Uv ? Uv[e].view : null
        }, Fv = function(e, t) {
            if (e in Uv) {
                var n = Uv[e];
                return "function" === typeof n.reducerMap ? n.reducerMap(t) : n.reducerMap
            }
            return null
        }
    },
    14377: function(e, t, n) {
        "use strict";
        n.d(t, {
            mS: function() {
                return u
            },
            T7: function() {
                return d
            },
            vl: function() {
                return m
            },
            em: function() {
                return p
            },
            C2: function() {
                return f
            }
        });
        var a = n(26265)
          , r = n(27361)
          , i = n.n(r)
          , o = n(17093)
          , l = n(50099)
          , s = n(48258)
          , c = [l.NETWORKS, l.ORIGINALS, l.SPORTS, l.TV, l.KIDS];
        function u(e, t, n, a, r) {
            r && a && r.preventDefault(),
            n && n(),
            a && a();
            var i, o = window.location.pathname.toLowerCase().split("/"), l = c.includes(o[1]) ? o[1] : null;
            i = e ? l ? "signup_".concat(l, "_details_link") : "signup_details_link" : l ? "signup_".concat(l, "_details_tile") : "signup_details_tile",
            (0,
            s.fireUtagLink)({
                event_name: i,
                tile_name: t
            })
        }
        function d(e, t, n, a) {
            var r = window.location.pathname.toLowerCase().split("/")
              , i = c.includes(r[1]) ? r[1] : null;
            r[1] && r[1] === l.NETWORK && (i = l.NETWORKS);
            var o = "signup_carousel_navigation_".concat(t);
            i && (o = "signup_".concat(i, "_carousel_navigation_").concat(t)),
            (0,
            s.fireUtagLink)({
                event_name: o,
                move_to_slide: e,
                content_select: n,
                network_name: a
            })
        }
        function m(e, t) {
            if (t)
                return "download_app";
            switch (i()(e, "entitlementState", l.ANON)) {
            case l.PARTIALLY_ENTITLED:
                return "add_component";
            case l.FULLY_ENTITLED:
                return "start_watching";
            case l.ANON:
            default:
                return "free_trial"
            }
        }
        function p(e) {
            var t, n = (t = {},
            (0,
            a.Z)(t, l.SASH_PRODUCT_INDEX, l.SASH),
            (0,
            a.Z)(t, l.NOAH_PRODUCT_INDEX, l.NOAH),
            (0,
            a.Z)(t, l.LIVE_PRODUCT_INDEX, l.LIVE),
            (0,
            a.Z)(t, l.DISNEY_SASH_PRODUCT_INDEX, l.DISNEY_BUNDLE),
            (0,
            a.Z)(t, l.DISNEY_NOAH_PRODUCT_INDEX, l.DISNEY_NOAH_BUNDLE),
            (0,
            a.Z)(t, l.DISNEY_LIVE_PRODUCT_INDEX, l.DISNEY_LIVE_BUNDLE),
            (0,
            a.Z)(t, l.DISNEY_LIVE_NOAH_PRODUCT_INDEX, l.DISNEY_NOAH_LIVE_BUNDLE),
            t);
            return i()(n, [e], "UNKNOWN PLAN")
        }
        function f(e, t) {
            var n = (0,
            o.s)(e);
            return "signup_".concat(n || (t === l.CMS_PAGETYPE.start ? "start" : "lp"))
        }
    },
    61988: function(e, t, n) {
        "use strict";
        n.d(t, {
            W: function() {
                return r
            },
            P: function() {
                return i
            }
        });
        var a = n(50099)
          , r = function(e) {
            e.preventDefault()
        }
          , i = function(e) {
            return function(t) {
                t.keyCode === a.ENTER_KEY && e(t)
            }
        }
    },
    70640: function(e, t, n) {
        "use strict";
        n.d(t, {
            oL: function() {
                return o
            },
            NJ: function() {
                return l
            },
            Qi: function() {
                return s
            },
            W_: function() {
                return c
            }
        });
        var a = n(27361)
          , r = n.n(a)
          , i = n(50099)
          , o = (n(80232),
        function(e) {
            return e.toLowerCase() === i.SERIES ? "TV Series" : e[0].toUpperCase() + e.slice(1)
        }
        )
          , l = function(e) {
            return r()(e, "premiereDate") ? [new Date(e.premiereDate).getFullYear()] : null
        }
          , s = function(e) {
            var t = e.artwork;
            return {
                backgroundArtwork: r()(t, "horizontalHero") || r()(t, "horizontalProgramTile"),
                verticalTileArtwork: r()(t, "verticalHero") || r()(t, "verticalProgramTile"),
                titleArtwork: r()(t, "titleArtwork"),
                brandArtwork: r()(t, "watermark")
            }
        }
          , c = function(e) {
            return "string" === typeof e && void 0 !== (null === i.PREMIUM_NETWORKS || void 0 === i.PREMIUM_NETWORKS ? void 0 : i.PREMIUM_NETWORKS[null === e || void 0 === e ? void 0 : e.toLowerCase()])
        }
    },
    60690: function(e, t, n) {
        "use strict";
        n.d(t, {
            w: function() {
                return o
            }
        });
        var a = n(27361)
          , r = n.n(a)
          , i = n(67294)
          , o = function() {
            var e = (0,
            i.useState)({
                width: void 0,
                height: void 0
            })
              , t = e[0]
              , n = e[1];
            return (0,
            i.useEffect)((function() {
                var e = function() {
                    n({
                        width: r()(window, "innerWidth"),
                        height: r()(window, "innerHeight")
                    })
                };
                return window.addEventListener("resize", e),
                e(),
                function() {
                    return window.removeEventListener("resize", e)
                }
            }
            ), []),
            {
                windowSize: t
            }
        }
    },
    79063: function(e, t, n) {
        "use strict";
        n.d(t, {
            JF: function() {
                return o
            },
            nY: function() {
                return l
            }
        });
        var a = n(27361)
          , r = n.n(a)
          , i = n(50099)
          , o = function(e) {
            return e ? i.PROGRAMS_WITH_CODE_EXCLUDE_DEVICE.includes(e.type) ? "promotion" : e.type === i.PROGRAM_TYPE_DEVICE_CODE ? "device" : null : null
        }
          , l = function(e) {
            return r()(e, i.PREFILL_CODE_PARAM, !1) || r()(e, i.HOTH_PREFILL_CODE_PARAM, "")
        }
    },
    80232: function(e, t, n) {
        "use strict";
        n.d(t, {
            Y: function() {
                return l
            },
            Ho: function() {
                return s
            },
            Fv: function() {
                return c
            },
            QM: function() {
                return u
            },
            Ln: function() {
                return d
            },
            YI: function() {
                return m
            },
            vx: function() {
                return p
            },
            C2: function() {
                return f
            },
            kv: function() {
                return v
            },
            Rx: function() {
                return h
            },
            aj: function() {
                return g
            },
            ap: function() {
                return _
            },
            QV: function() {
                return b
            },
            gw: function() {
                return y
            },
            oH: function() {
                return w
            }
        });
        var a, r = n(27361), i = n.n(r), o = n(50099), l = function(e) {
            return !e || Array.isArray(e) ? e : [e]
        }, s = function(e, t, n) {
            return e <= 1 ? t : n || "".concat(t, "s")
        }, c = function(e) {
            return e ? e.toLowerCase().replace(/[^a-zA-Z0-9]/g, "_") : null
        }, u = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "en-US";
            if (e)
                return new Date(e).toLocaleDateString(t, i()(o.PREMIEREDATEFORMAT, t))
        }, d = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "en-US";
            if (e)
                return new Date(e).toLocaleDateString(t, i()(o.PREMIEREDATEFORMAT_MMDDYY, t))
        }, m = function(e) {
            if (e) {
                var t = Date.parse(e);
                return !!t && t - Date.now() > 0
            }
        }, p = (a = 90,
        function(e) {
            return !(!e || !m(e)) && new Date(e).getTime() - (new Date).getTime() < 1e3 * a * 60 * 60 * 24
        }
        ), f = function(e, t) {
            return "LandingPage" === t ? o.CMS_PAGETYPE[e] : t
        }, v = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2e3;
            return Promise.race([fetch(e, t), new Promise((function(e, t) {
                return setTimeout((function() {
                    return t(new Error("Timeout of ".concat(n, " ms exceeded")))
                }
                ), n)
            }
            ))])
        }, h = function(e, t) {
            if (!e)
                return null;
            var n = t.logger
              , a = t.message
              , r = t.logMetaData
              , i = null;
            try {
                i = JSON.parse(e)
            } catch (o) {
                n.warn(a, o, r)
            }
            return i
        }, g = function(e) {
            return Array.isArray(e) ? e[0] : e
        }, _ = function(e) {
            return e ? e.toLowerCase().replace(/ /g, "_") : ""
        }, b = function(e) {
            var t, n, a;
            return (null === e || void 0 === e || null === (t = e.query) || void 0 === t ? void 0 : t.dma) || (null === e || void 0 === e || null === (n = e.geodata) || void 0 === n || null === (a = n.geo) || void 0 === a ? void 0 : a.dma)
        }, y = function(e) {
            var t, n, a;
            return (null === e || void 0 === e || null === (t = e.query) || void 0 === t ? void 0 : t.zip) || (null === e || void 0 === e || null === (n = e.geodata) || void 0 === n || null === (a = n.geo) || void 0 === a ? void 0 : a.zip)
        }, w = function(e) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)
        }
    },
    47557: function(e, t, n) {
        "use strict";
        n.d(t, {
            m7: function() {
                return L
            },
            D4: function() {
                return u
            },
            AG: function() {
                return O
            },
            pS: function() {
                return D
            },
            GO: function() {
                return A
            }
        });
        var a = n(26265)
          , r = n(67294)
          , i = n(40334)
          , o = n(9323)
          , l = r.createElement;
        function s(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function c(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? s(Object(n), !0).forEach((function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function u(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , a = function(a) {
                var r = c(c({}, a), {}, {
                    onClick: function() {
                        if (d(t, n),
                        a.onClick) {
                            for (var e, r = arguments.length, i = new Array(r), o = 0; o < r; o++)
                                i[o] = arguments[o];
                            (e = a.onClick).call.apply(e, [null].concat(i))
                        }
                    }
                });
                return l(e, r)
            };
            return a.displayName = (0,
            o.G)("withCustomInteraction", e),
            a
        }
        function d(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (e) {
                var n = c(c({}, t), {}, {
                    hit_version: null !== t && void 0 !== t && t.hit_version ? t.hit_version : "2.1.0"
                });
                (0,
                i.L9)(e, n)
            }
        }
        var m = n(48258);
        r.createElement;
        var p = n(18220)
          , f = n(44131)
          , v = n(32200)
          , h = r.createElement;
        function g(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function _(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? g(Object(n), !0).forEach((function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var b = {
            hoc: "InnerHtmlEvents"
        };
        function y(e) {
            return e ? e.replace(/\{\$pageName\}/g, (0,
            p.vz)()).replace(/\{\$device\}/g, (0,
            p.Ls)()) : e
        }
        function w(e) {
            if (e.hasAttribute("data-event-properties")) {
                var t = e.getAttribute("data-event-name") || "user_interaction";
                (0,
                i.L9)(t, function(e) {
                    var t = {};
                    if (e)
                        try {
                            t = JSON.parse(y(e)) || {}
                        } catch (n) {
                            v.L4.warn("Couldn't transform ".concat(e, " (").concat(y(e), ") into event."), b)
                        }
                    return t
                }(e.getAttribute("data-event-properties")))
            }
        }
        function N(e) {
            for (var t = e.currentTarget, a = e.target; null != a && a !== t && !a.hasAttribute("data-events"); )
                a = a.parentElement;
            if (a.hasAttribute("data-events") && !function(e) {
                return e.hasAttribute("data-fired-event")
            }(a)) {
                var r = a.getAttribute("data-events");
                r.includes("hits") && w(a),
                r.includes("utag") && function(e) {
                    if (e.hasAttribute("data-utag-object")) {
                        var t = function(e) {
                            var t = {};
                            return e && e.length > 0 && e.split(",").forEach((function(e) {
                                var n = e.split(":");
                                t[n[0]] = n[1]
                            }
                            )),
                            t
                        }(e.getAttribute("data-utag-object"))
                          , a = Object.assign(t, {});
                        a.event_name += "_".concat((0,
                        p.vz)()),
                        a.device_category = (0,
                        f.l7)(),
                        n.g.window.utag && n.g.window.utag.link(a)
                    }
                }(a),
                r.includes("onlyOnce") && function(e) {
                    e.setAttribute("data-fired-event", "true")
                }(a),
                r.includes("user_interaction") && function(e) {
                    if (e.hasAttribute("data-element-specifier") && e.hasAttribute("data-action-specifier")) {
                        var t = e.getAttribute("data-element-specifier")
                          , n = e.getAttribute("data-action-specifier")
                          , a = e.getAttribute("data-target-display-name") || "";
                        (0,
                        i.L9)("user_interaction", {
                            hit_version: "2.1.0",
                            interaction_type: "click",
                            element_specifier: t,
                            action_specifier: "".concat(n, ":").concat((0,
                            p.Ls)()),
                            target_display_name: a
                        })
                    }
                }(a),
                r.includes("driver_click") && function(e) {
                    if (e.hasAttribute("data-event-name")) {
                        var t = e.getAttribute("data-event-name");
                        (0,
                        i.L9)("user_interaction", {
                            hit_version: "2.1.0",
                            interaction_type: "click",
                            element_specifier: t,
                            action_specifier: "driver_click:".concat((0,
                            p.Ls)())
                        })
                    }
                }(a)
            }
        }
        function k(e) {
            var t = function(t) {
                var n = _(_({}, t), {}, {
                    onClick: function(e) {
                        if (N(e),
                        t.onClick) {
                            for (var n, a = arguments.length, r = new Array(a > 1 ? a - 1 : 0), i = 1; i < a; i++)
                                r[i - 1] = arguments[i];
                            (n = t.onClick).call.apply(n, [null, e].concat(r))
                        }
                    }
                });
                return h(e, n)
            };
            return t.displayName = (0,
            o.G)("withInnerHtmlEvents", e),
            t
        }
        var S = r.createElement;
        function x(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function T(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? x(Object(n), !0).forEach((function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : x(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function O(e, t) {
            var n = t.action_specifier
              , a = t.element_specifier
              , r = t.interaction_type
              , i = t.collection_id
              , l = t.collection_item_index
              , s = t.collection_index
              , c = t.entity_id
              , u = t.entity_action_id
              , d = t.conditional_properties
              , p = t.entity_type
              , f = t.entity_action_type
              , v = function(t) {
                var o = (0,
                m.getMetricsDeviceType)()
                  , v = T(T({}, t), {}, {
                    onClick: function() {
                        if ((0,
                        m.trackEvent)("user_interaction", {
                            hit_version: "2.4.0",
                            interaction_type: r || "click",
                            element_specifier: a,
                            action_specifier: "".concat(n, ":").concat(o),
                            conditional_properties: d,
                            collection_id: i,
                            collection_source: "heimdall",
                            collection_item_index: l,
                            collection_index: s,
                            entity_id: c,
                            entity_action_id: u,
                            entity_type: p,
                            entity_action_type: f
                        }),
                        t.onClick) {
                            for (var e, v = arguments.length, h = new Array(v), g = 0; g < v; g++)
                                h[g] = arguments[g];
                            (e = t.onClick).call.apply(e, [null].concat(h))
                        }
                    }
                });
                return S(e, v)
            };
            return v.displayName = (0,
            o.G)("withTileInteraction", e),
            v
        }
        var E = r.createElement;
        function P(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function C(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? P(Object(n), !0).forEach((function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : P(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function D(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "driver_click"
              , a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "click"
              , r = function(r) {
                var i = C(C({}, r), {}, {
                    onClick: function() {
                        if ((0,
                        m.fireUserInteraction)(t, n, a),
                        r.onClick) {
                            for (var e, i = arguments.length, o = new Array(i), l = 0; l < i; l++)
                                o[l] = arguments[l];
                            (e = r.onClick).call.apply(e, [null].concat(o))
                        }
                    }
                });
                return E(e, i)
            };
            return r.displayName = (0,
            o.G)("withUserInteraction", e),
            r
        }
        var Z = r.createElement;
        function I(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function M(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? I(Object(n), !0).forEach((function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : I(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function A(e, t, n) {
            var a = function(a) {
                var r = M(M({}, a), {}, {
                    onClick: function() {
                        if ((0,
                        m.fireUtagLink)(e, n),
                        a.onClick) {
                            for (var t, r = arguments.length, i = new Array(r), o = 0; o < r; o++)
                                i[o] = arguments[o];
                            (t = a.onClick).call.apply(t, [null].concat(i))
                        }
                    }
                });
                return Z(t, r)
            };
            return a.displayName = (0,
            o.G)("withUtagLink", t),
            a
        }
        var L = {
            p: k("p"),
            div: k("div"),
            h1: k("h1"),
            h2: k("h2"),
            span: k("span"),
            a: k("a")
        }
    },
    25596: function(e, t, n) {
        "use strict";
        var a = n(26265)
          , r = n(8682);
        function i(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function o(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? i(Object(n), !0).forEach((function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        t.Z = (0,
        a.Z)({}, r.U, (function(e, t) {
            var n = t.modal_id;
            return o(o({}, e), {}, (0,
            a.Z)({}, n, {
                shown: !e[n] || !e[n].shown
            }))
        }
        ))
    },
    8682: function(e, t, n) {
        "use strict";
        n.d(t, {
            U: function() {
                return a
            },
            $: function() {
                return r
            }
        });
        var a = "STATE_MODAL_ACTION_TOGGLE_MODAL"
          , r = function(e) {
            return {
                type: a,
                payload: {
                    modal_id: e
                }
            }
        }
    },
    86375: function(e, t, n) {
        "use strict";
        n.d(t, {
            F: function() {
                return a
            }
        });
        var a = "modal"
    },
    13363: function(e, t, n) {
        "use strict";
        var a = n(91229)
          , r = n(38347)
          , i = n(17039)
          , o = n(20270)
          , l = n(97185)
          , s = n(94184)
          , c = n.n(s)
          , u = n(67294)
          , d = n(61988)
          , m = u.createElement
          , p = "high"
          , f = "medium"
          , v = "large"
          , h = "light"
          , g = "dark"
          , _ = {
            primary: {
                emphasis: p,
                size: v,
                mode: h
            },
            secondary: {
                emphasis: f,
                size: v,
                mode: h
            },
            white: {
                emphasis: p,
                size: v,
                mode: g
            },
            black: {
                emphasis: p,
                size: v,
                mode: h
            },
            white_outline: {
                emphasis: f,
                size: v,
                mode: g
            },
            black_outline: {
                emphasis: f,
                size: v,
                mode: h
            },
            "grey-border": {
                emphasis: f,
                size: v,
                mode: h
            },
            welcome: {
                emphasis: p,
                size: v,
                mode: h
            }
        }
          , b = function(e) {
            var t = e.useStyle
              , n = void 0 === t ? "white" : t
              , s = e.className
              , u = e.emphasis
              , p = e.size
              , f = e.buttonThemeMode
              , v = e.href
              , h = e.children
              , g = (0,
            r.Z)(e, ["useStyle", "className", "emphasis", "size", "buttonThemeMode", "href", "children"])
              , b = _[n]
              , y = "dark" === (f || (null === b || void 0 === b ? void 0 : b.mode)) ? l.oneHuluDarkTheme : l.oneHuluLightTheme;
            return m(i.a, {
                theme: y
            }, m(o.default, (0,
            a.Z)({
                className: c()("button--cta", s),
                emphasis: u || (null === b || void 0 === b ? void 0 : b.emphasis),
                size: p || (null === b || void 0 === b ? void 0 : b.size),
                onMouseDown: d.W,
                as: v ? "a" : "button"
            }, g), h))
        };
        b.defaultProps = {
            useStyle: "primary"
        },
        t.Z = b
    },
    93560: function(e, t, n) {
        "use strict";
        n.d(t, {
            P: function() {
                return d
            },
            w: function() {
                return p
            }
        });
        var a = n(83503)
          , r = n(27361)
          , i = n.n(r)
          , o = n(67294)
          , l = n(14377)
          , s = n(80232)
          , c = n(47557)
          , u = o.createElement
          , d = function(e) {
            var t = e.asPath
              , n = e.featureFlags
              , r = e.pageType
              , d = (new Date).getFullYear()
              , m = (0,
            l.C2)(t, r)
              , p = "noopener noreferrer nofollow"
              , f = null === n || void 0 === n ? void 0 : n.hasOneTrustFooterChangeActivated
              , v = null === n || void 0 === n ? void 0 : n.hasSubscriberAgreementUpdateEnabled
              , h = [{
                label: "About Ads",
                link: "//info.evidon.com/pub_info/3920?v=1&nt=0&nw=false",
                icon: "//c.evidon.com/pub/icon1.png",
                rel: p,
                target: "_blank",
                alt: "Evidon AdChoices"
            }, {
                label: v ? "Subscriber Agreement" : "Terms of Use",
                link: v ? "/subscriber_agreement" : "/terms",
                rel: p,
                target: "_self"
            }, {
                label: "Privacy Policy",
                link: "https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/",
                rel: p,
                target: "_self"
            }, {
                label: f ? "Do Not Sell or Share My Personal Information" : "Do Not Sell My Personal Information",
                link: "/do-not-sell-my-info",
                rel: "",
                target: "_self",
                onClick: f ? function(e) {
                    var t, n, a, r, i;
                    e.preventDefault();
                    var o = ((null === (t = window) || void 0 === t ? void 0 : t.OnetrustActiveGroups) || "").split(",").filter((function(e) {
                        return e
                    }
                    )).length;
                    null === (n = window) || void 0 === n || null === (a = n.OneTrust) || void 0 === a || a.OnConsentChanged((function(e) {
                        var t, n, a, r = null === e || void 0 === e || null === (t = e.detail) || void 0 === t ? void 0 : t.length;
                        o !== r && (null === (n = window) || void 0 === n || null === (a = n.location) || void 0 === a || a.reload())
                    }
                    )),
                    null === (r = window) || void 0 === r || null === (i = r.OneTrust) || void 0 === i || i.ToggleInfoDisplay()
                }
                : void 0
            }, {
                label: f ? "Your US State Privacy Rights" : "Your California Privacy Rights",
                link: "/ca-privacy-rights",
                rel: "",
                target: "_self"
            }, {
                label: "TV Parental Guidelines",
                link: "http://www.tvguidelines.org",
                rel: p,
                target: "_blank"
            }, {
                label: "Sitemap",
                link: "/sitemap",
                rel: "",
                target: "_self"
            }];
            return u(o.Fragment, null, u("div", {
                className: "footer--legal-links-right-col"
            }, u(a.Z, {
                variant: "body12",
                className: "footer__copyright"
            }, "\xa9 ", d, " Hulu, LLC")), h.filter((function(e) {
                return i()(n, e.featureFlag, !0)
            }
            )).map((function(e, t) {
                var n = (0,
                c.GO)({
                    event_name: "footer_link",
                    event_label: e.link,
                    page_type: m
                }, (0,
                c.pS)("a", "footer", (0,
                s.Fv)(e.label)))
                  , r = u(a.Z, {
                    variant: "body12"
                }, e.label);
                return u("div", {
                    className: "footer--legal-links-right-col",
                    key: t
                }, u(n, {
                    href: e.link,
                    className: "footer--legal-link",
                    target: e.target,
                    rel: e.rel,
                    "aria-label": e.label,
                    title: e.label,
                    onClick: e.onClick
                }, e.icon ? function(e) {
                    return u(o.Fragment, null, u("img", {
                        src: e.icon,
                        role: "presentation",
                        alt: e.alt
                    }), u(a.Z, {
                        variant: "body12"
                    }, e.label))
                }(e) : r))
            }
            )), u("div", {
                className: "footer--legal-links-right-col"
            }, u(a.Z, {
                variant: "body12",
                className: "footer__copyright-mobile"
            }, "\xa9 ", d, " Hulu, LLC")))
        }
          , m = o.createElement
          , p = function(e) {
            var t = e.asPath
              , n = e.pageType
              , a = (0,
            l.C2)(t, n);
            return m("div", null, [{
                label: "Hulu Facebook",
                link: "//www.facebook.com/hulu",
                img: "/static/hitch/static/icons/facebook.svg"
            }, {
                label: "Hulu Twitter",
                link: "//twitter.com/hulu",
                img: "/static/hitch/static/icons/twitter.svg"
            }, {
                label: "Hulu Youtube",
                link: "//www.youtube.com/channel/UCE5mQnNl8Q4H2qcv4ikaXeA",
                img: "/static/hitch/static/icons/youtube.svg"
            }, {
                label: "Hulu Instagram",
                link: "//www.instagram.com/hulu",
                img: "/static/hitch/static/icons/instagram.svg"
            }].map((function(e, t) {
                var n = (0,
                c.GO)({
                    event_name: "footer_link",
                    event_label: e.link,
                    page_type: a
                }, (0,
                c.pS)("a", "footer", (0,
                s.Fv)(e.label)));
                return m(n, {
                    key: t,
                    href: e.link,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    "aria-label": e.label,
                    title: e.label
                }, m("img", {
                    src: e.img,
                    role: "presentation"
                }))
            }
            )))
        }
    },
    98325: function() {},
    16882: function() {},
    24071: function() {},
    4161: function() {},
    16151: function() {},
    51466: function() {},
    805: function() {},
    63202: function() {},
    24919: function() {},
    58578: function() {},
    31307: function() {},
    65497: function() {},
    82260: function() {},
    64810: function() {},
    45306: function() {},
    41202: function() {},
    67154: function() {},
    23361: function() {},
    41190: function() {},
    51010: function() {},
    65286: function() {},
    85370: function() {},
    81836: function() {},
    74311: function() {},
    39981: function() {},
    52134: function() {},
    59097: function() {},
    6749: function() {},
    82009: function() {},
    23574: function() {},
    98804: function() {},
    94192: function() {},
    17636: function() {},
    18946: function() {},
    90811: function() {},
    44048: function() {},
    17485: function() {},
    39902: function() {},
    15428: function() {},
    97021: function() {},
    41394: function() {},
    7261: function() {},
    42360: function() {},
    70434: function() {},
    55266: function() {},
    80840: function() {},
    35800: function() {},
    97422: function() {},
    67702: function() {},
    58356: function() {},
    44465: function() {},
    94762: function() {},
    51763: function() {},
    51164: function() {},
    44924: function() {},
    1279: function() {},
    55230: function() {},
    4026: function() {},
    527: function() {},
    42194: function() {},
    32606: function() {},
    67190: function() {},
    88665: function() {},
    31448: function() {},
    51091: function() {},
    8383: function() {},
    21445: function() {},
    3749: function() {},
    21937: function() {},
    4756: function() {},
    45312: function() {},
    13960: function() {},
    81650: function() {},
    33059: function() {},
    67587: function() {},
    86234: function() {},
    38168: function() {},
    77850: function() {},
    66320: function() {},
    82769: function() {},
    76494: function() {},
    38982: function() {},
    98602: function() {},
    29007: function() {},
    42114: function() {},
    13748: function() {},
    53822: function() {},
    45549: function() {},
    99554: function() {},
    18154: function() {},
    47: function() {},
    83362: function() {},
    3341: function() {},
    80581: function() {},
    58669: function() {},
    76270: function() {},
    19872: function() {},
    25534: function() {},
    51455: function() {},
    77692: function() {},
    44512: function() {},
    74030: function() {},
    43013: function() {},
    32574: function() {},
    70394: function() {},
    63906: function() {},
    61758: function() {}
}]);
//# sourceMappingURL=463-0058a3c564cc4ee241de.js.map
