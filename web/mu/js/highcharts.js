/**源码详情参考 highcharts-development.js**/
(function(b, a) {
	typeof module === "object" && module.exports ? module.exports = b.document ? a(b) : a : b.Highcharts = a(b)
})(typeof window !== "undefined" ? window : this, function(bi) {
	function az(q, p) {
		var s = "Highcharts error #" + q + ": www.highcharts.com/errors/" + q;
		if(p) {
			throw Error(s)
		}
		bi.console && console.log(s)
	}

	function bF(q, p, s) {
		this.options = p;
		this.elem = q;
		this.prop = s
	}

	function bg() {
		var q, p = arguments,
			u, t = {},
			s = function(y, x) {
				var B, A;
				typeof y !== "object" && (y = {});
				for(A in x) {
					x.hasOwnProperty(A) && (B = x[A], y[A] = B && typeof B === "object" && Object.prototype.toString.call(B) !== "[object Array]" && A !== "renderTo" && typeof B.nodeType !== "number" ? s(y[A] || {}, B) : x[A])
				}
				return y
			};
		p[0] === !0 && (t = p[1], p = Array.prototype.slice.call(p, 2));
		u = p.length;
		for(q = 0; q < u; q++) {
			t = s(t, p[q])
		}
		return t
	}

	function bl(q, p) {
		return parseInt(q, p || 10)
	}

	function bL(p) {
		return typeof p === "string"
	}

	function k(p) {
		return Object.prototype.toString.call(p) === "[object Array]"
	}

	function bX(q, p) {
		for(var s = q.length; s--;) {
			if(q[s] === p) {
				q.splice(s, 1);
				break
			}
		}
	}

	function av(p) {
		return p !== bn && p !== null
	}

	function aX(q, p, u) {
		var t, s;
		if(bL(p)) {
			av(u) ? q.setAttribute(p, u) : q && q.getAttribute && (s = q.getAttribute(p))
		} else {
			if(av(p) && bE(p)) {
				for(t in p) {
					q.setAttribute(t, p[t])
				}
			}
		}
		return s
	}

	function ao(q, p) {
		return q.y - p.y
	}

	function aK(p) {
		return k(p) ? p : [p]
	}

	function v(q, p, s) {
		if(p) {
			return setTimeout(q, p, s)
		}
		q.call(0, s)
	}

	function a1(q, p) {
		if(bs && !bx && p && p.opacity !== bn) {
			p.filter = "alpha(opacity=" + p.opacity * 100 + ")"
		}
		aq(q.style, p)
	}

	function G(q, p, u, t, s) {
		q = ap.createElement(q);
		p && aq(q, p);
		s && a1(q, {
			padding: 0,
			border: "none",
			margin: 0
		});
		u && a1(q, u);
		t && t.appendChild(q);
		return q
	}

	function bG(q, p) {
		var s = function() {};
		s.prototype = new q;
		aq(s.prototype, p);
		return s
	}

	function bV(q, p, s) {
		return Array((p || 2) + 1 - String(q).length).join(s || 0) + q
	}

	function bj(p) {
		return(bu && bu(p) || bm || 0) * 60000
	}

	function bI(C, B) {
		for(var A = "{", y = !1, x, u, t, s, q, p = [];
			(A = C.indexOf(A)) !== -1;) {
			x = C.slice(0, A);
			if(y) {
				u = x.split(":");
				t = u.shift().split(".");
				q = t.length;
				x = B;
				for(s = 0; s < q; s++) {
					x = x[t[s]]
				}
				if(u.length) {
					u = u.join(":"), t = /\.([0-9])/, s = aS.lang, q = void 0, /f$/.test(u) ? (q = (q = u.match(t)) ? q[1] : -1, x !== null && (x = at.numberFormat(x, q, s.decimalPoint, u.indexOf(",") > -1 ? s.thousandsSep : ""))) : x = d(u, x)
				}
			}
			p.push(x);
			C = C.slice(A + 1);
			A = (y = !y) ? "}" : "{"
		}
		p.push(C);
		return p.join("")
	}

	function aI(p) {
		return aM.pow(10, aR(aM.log(p) / aM.LN10))
	}

	function ak(q, p, y, x, u) {
		var t, s = q,
			y = ax(y, 1);
		t = q / y;
		p || (p = [1, 2, 2.5, 5, 10], x === !1 && (y === 1 ? p = [1, 2, 5, 10] : y <= 0.1 && (p = [1 / y])));
		for(x = 0; x < p.length; x++) {
			if(s = p[x], u && s * y >= q || !u && t <= (p[x] + (p[x + 1] || p[x])) / 2) {
				break
			}
		}
		s *= y;
		return s
	}

	function ac(q, p) {
		var u = q.length,
			t, s;
		for(s = 0; s < u; s++) {
			q[s].safeI = s
		}
		q.sort(function(x, y) {
			t = p(x, y);
			return t === 0 ? x.safeI - y.safeI : t
		});
		for(s = 0; s < u; s++) {
			delete q[s].safeI
		}
	}

	function bq(q) {
		for(var p = q.length, s = q[0]; p--;) {
			q[p] < s && (s = q[p])
		}
		return s
	}

	function bD(q) {
		for(var p = q.length, s = q[0]; p--;) {
			q[p] > s && (s = q[p])
		}
		return s
	}

	function bM(q, p) {
		for(var s in q) {
			q[s] && q[s] !== p && q[s].destroy && q[s].destroy(), delete q[s]
		}
	}

	function bt(p) {
		h || (h = G(aL));
		p && h.appendChild(p);
		h.innerHTML = ""
	}

	function bv(q, p) {
		return parseFloat(q.toPrecision(p || 14))
	}

	function aO(q, p) {
		p.renderer.globalAnimation = ax(q, p.animation)
	}

	function aY(p) {
		return bE(p) ? bg(p) : {
			duration: p ? 500 : 0
		}
	}

	function bU() {
		var q = aS.global,
			p = q.useUTC,
			t = p ? "getUTC" : "get",
			s = p ? "setUTC" : "set";
		bC = q.Date || bi.Date;
		bm = p && q.timezoneOffset;
		bu = p && q.getTimezoneOffset;
		bS = function(u, D, C, B, A, y) {
			var x;
			p ? (x = bC.UTC.apply(0, arguments), x += bj(x)) : x = (new bC(u, D, ax(C, 1), ax(B, 0), ax(A, 0), ax(y, 0))).getTime();
			return x
		};
		n = t + "Minutes";
		a = t + "Hours";
		bJ = t + "Day";
		ar = t + "Date";
		ay = t + "Month";
		z = t + "FullYear";
		bB = s + "Milliseconds";
		be = s + "Seconds";
		aG = s + "Minutes";
		ai = s + "Hours";
		bA = s + "Date";
		br = s + "Month";
		bQ = s + "FullYear"
	}

	function bf(p) {
		if(!(this instanceof bf)) {
			return new bf(p)
		}
		this.init(p)
	}

	function aZ() {}

	function w(q, p, t, s) {
		this.axis = q;
		this.pos = p;
		this.type = t || "";
		this.isNew = !0;
		!t && !s && this.addLabel()
	}

	function m(q, p, x, u, t) {
		var s = q.chart.inverted;
		this.axis = q;
		this.isNegative = x;
		this.options = p;
		this.x = u;
		this.total = null;
		this.points = {};
		this.stack = t;
		this.rightCliff = this.leftCliff = 0;
		this.alignOptions = {
			align: p.align || (s ? x ? "left" : "right" : "center"),
			verticalAlign: p.verticalAlign || (s ? "middle" : x ? "bottom" : "top"),
			y: ax(p.y, s ? 4 : x ? 14 : -6),
			x: ax(p.x, s ? x ? -6 : 6 : 0)
		};
		this.textAlign = p.textAlign || (s ? x ? "right" : "left" : "center")
	}
	var bn, ap = bi.document,
		aM = Math,
		bk = aM.round,
		aR = aM.floor,
		am = aM.ceil,
		au = aM.max,
		bd = aM.min,
		aW = aM.abs,
		aQ = aM.cos,
		g = aM.sin,
		bo = aM.PI,
		j = bo * 2 / 360,
		bR = bi.navigator && bi.navigator.userAgent || "",
		bY = bi.opera,
		bs = /(msie|trident|edge)/i.test(bR) && !bY,
		bc = ap && ap.documentMode === 8,
		aE = !bs && /AppleWebKit/.test(bR),
		an = /Firefox/.test(bR),
		bH = /(Mobile|Android|Windows Phone)/.test(bR),
		bh = "http://www.w3.org/2000/svg",
		bx = ap && ap.createElementNS && !!ap.createElementNS(bh, "svg").createSVGRect,
		r = an && parseInt(bR.split("Firefox/")[1], 10) < 4,
		bT = ap && !bx && !bs && !!ap.createElement("canvas").getContext,
		f, bO, bp = {},
		by = 0,
		h, aS, d, ba, bz = function() {},
		aT = [],
		bw = 0,
		aL = "div",
		aP = "M",
		aU = "L",
		c = /^[0-9]+$/,
		ag = ["plotTop", "marginRight", "marginBottom", "plotLeft"],
		bC, bS, bm, bu, n, a, bJ, ar, ay, z, bB, be, aG, ai, bA, br, bQ, a2 = {},
		at;
	at = bi.Highcharts ? az(16, !0) : {
		win: bi
	};
	at.seriesTypes = a2;
	var aH = [],
		aF, ah, aw, a9, a7, aD, a0, aN, a8, e, aj;
	bF.prototype = {
		dSetter: function() {
			var q = this.paths[0],
				p = this.paths[1],
				x = [],
				u = this.now,
				t = q.length,
				s;
			if(u === 1) {
				x = this.toD
			} else {
				if(t === p.length && u < 1) {
					for(; t--;) {
						s = parseFloat(q[t]), x[t] = isNaN(s) ? q[t] : u * parseFloat(p[t] - s) + s
					}
				} else {
					x = p
				}
			}
			this.elem.attr("d", x)
		},
		update: function() {
			var q = this.elem,
				p = this.prop,
				t = this.now,
				s = this.options.step;
			if(this[p + "Setter"]) {
				this[p + "Setter"]()
			} else {
				q.attr ? q.element && q.attr(p, t) : q.style[p] = t + this.unit
			}
			s && s.call(q, t, this)
		},
		run: function(q, p, x) {
			var u = this,
				t = function(y) {
					return t.stopped ? !1 : u.step(y)
				},
				s;
			this.startTime = +new bC;
			this.start = q;
			this.end = p;
			this.unit = x;
			this.now = this.start;
			this.pos = 0;
			t.elem = this.elem;
			if(t() && aH.push(t) === 1) {
				t.timerId = setInterval(function() {
					for(s = 0; s < aH.length; s++) {
						aH[s]() || aH.splice(s--, 1)
					}
					aH.length || clearInterval(t.timerId)
				}, 13)
			}
		},
		step: function(q) {
			var p = +new bC,
				A, y = this.options;
			A = this.elem;
			var x = y.complete,
				u = y.duration,
				t = y.curAnim,
				s;
			if(A.attr && !A.element) {
				A = !1
			} else {
				if(q || p >= u + this.startTime) {
					this.now = this.end;
					this.pos = 1;
					this.update();
					q = t[this.prop] = !0;
					for(s in t) {
						t[s] !== !0 && (q = !1)
					}
					q && x && x.call(A);
					A = !1
				} else {
					this.pos = y.easing((p - this.startTime) / u), this.now = this.start + (this.end - this.start) * this.pos, this.update(), A = !0
				}
			}
			return A
		},
		initPath: function(K, J, I) {
			function F(L) {
				for(s = L.length; s--;) {
					(L[s] === aP || L[s] === aU) && L.splice(s + 1, 0, L[s + 1], L[s + 2], L[s + 1], L[s + 2])
				}
			}

			function E(M, L) {
				for(; M.length < u;) {
					M[0] = L[u - M.length];
					var N = M.slice(0, x);
					[].splice.apply(M, [0, 0].concat(N));
					q && (N = M.slice(M.length - x), [].splice.apply(M, [M.length, 0].concat(N)), s--)
				}
				M[0] = "M"
			}

			function D(M, L) {
				for(var N = (u - M.length) / x; N > 0 && N--;) {
					t = M.slice().splice(M.length / H - x, x * H), t[0] = L[u - x - N * x], y && (t[x - 6] = t[x - 2], t[x - 5] = t[x - 1]), [].splice.apply(M, [M.length / H, 0].concat(t)), q && N--
				}
			}
			var J = J || "",
				C, B = K.startX,
				A = K.endX,
				y = J.indexOf("C") > -1,
				x = y ? 7 : 3,
				u, t, s, J = J.split(" "),
				I = I.slice(),
				q = K.isArea,
				H = q ? 2 : 1,
				p;
			y && (F(J), F(I));
			if(B && A) {
				for(s = 0; s < B.length; s++) {
					if(B[s] === A[0]) {
						C = s;
						break
					} else {
						if(B[0] === A[A.length - B.length + s]) {
							C = s;
							p = !0;
							break
						}
					}
				}
				C === void 0 && (J = [])
			}
			J.length && at.isNumber(C) && (u = I.length + C * H * x, p ? (E(J, I), D(I, J)) : (E(I, J), D(J, I)));
			return [J, I]
		}
	};
	var aq = at.extend = function(q, p) {
			var s;
			q || (q = {});
			for(s in p) {
				q[s] = p[s]
			}
			return q
		},
		bE = at.isObject = function(q, p) {
			return q && typeof q === "object" && (!p || !k(q))
		},
		a6 = at.isNumber = function(p) {
			return typeof p === "number" && !isNaN(p)
		},
		ax = at.pick = function() {
			var q = arguments,
				p, t, s = q.length;
			for(p = 0; p < s; p++) {
				if(t = q[p], t !== bn && t !== null) {
					return t
				}
			}
		},
		a4 = at.wrap = function(q, p, t) {
			var s = q[p];
			q[p] = function() {
				var u = Array.prototype.slice.call(arguments);
				u.unshift(s);
				return t.apply(this, u)
			}
		};
	d = function(F, E, D) {
		if(!av(E) || isNaN(E)) {
			return aS.lang.invalidDate || ""
		}
		var F = ax(F, "%Y-%m-%d %H:%M:%S"),
			C = new bC(E - bj(E)),
			B, A = C[a](),
			y = C[bJ](),
			x = C[ar](),
			u = C[ay](),
			t = C[z](),
			s = aS.lang,
			q = s.weekdays,
			p = s.shortWeekdays,
			C = aq({
				a: p ? p[y] : q[y].substr(0, 3),
				A: q[y],
				d: bV(x),
				e: bV(x, 2, " "),
				w: y,
				b: s.shortMonths[u],
				B: s.months[u],
				m: bV(u + 1),
				y: t.toString().substr(2, 2),
				Y: t,
				H: bV(A),
				k: A,
				I: bV(A % 12 || 12),
				l: A % 12 || 12,
				M: bV(C[n]()),
				p: A < 12 ? "AM" : "PM",
				P: A < 12 ? "am" : "pm",
				S: bV(C.getSeconds()),
				L: bV(bk(E % 1000), 3)
			}, at.dateFormats);
		for(B in C) {
			for(; F.indexOf("%" + B) !== -1;) {
				F = F.replace("%" + B, typeof C[B] === "function" ? C[B](E) : C[B])
			}
		}
		return D ? F.substr(0, 1).toUpperCase() + F.substr(1) : F
	};
	ba = {
		millisecond: 1,
		second: 1000,
		minute: 60000,
		hour: 3600000,
		day: 86400000,
		week: 604800000,
		month: 2419200000,
		year: 31449600000
	};
	at.numberFormat = function(B, A, y, x) {
		var B = +B || 0,
			A = +A,
			u = aS.lang,
			t = (B.toString().split(".")[1] || "").length,
			s, q, p = Math.abs(B);
		A === -1 ? A = Math.min(t, 20) : a6(A) || (A = 2);
		s = String(bl(p.toFixed(A)));
		q = s.length > 3 ? s.length % 3 : 0;
		y = ax(y, u.decimalPoint);
		x = ax(x, u.thousandsSep);
		B = B < 0 ? "-" : "";
		B += q ? s.substr(0, q) + x : "";
		B += s.substr(q).replace(/(\d{3})(?=\d)/g, "$1" + x);
		A && (x = Math.abs(p - s + Math.pow(10, -Math.max(A, t) - 1)), B += y + x.toFixed(A).slice(2));
		return B
	};
	Math.easeInOutSine = function(p) {
		return -0.5 * (Math.cos(Math.PI * p) - 1)
	};
	aF = function(q, p) {
		var s;
		if(p === "width") {
			return Math.min(q.offsetWidth, q.scrollWidth) - aF(q, "padding-left") - aF(q, "padding-right")
		} else {
			if(p === "height") {
				return Math.min(q.offsetHeight, q.scrollHeight) - aF(q, "padding-top") - aF(q, "padding-bottom")
			}
		}
		return(s = bi.getComputedStyle(q, void 0)) && bl(s.getPropertyValue(p))
	};
	ah = function(q, p) {
		return p.indexOf ? p.indexOf(q) : [].indexOf.call(p, q)
	};
	a9 = function(q, p) {
		return [].filter.call(q, p)
	};
	aD = function(q, p) {
		for(var u = [], t = 0, s = q.length; t < s; t++) {
			u[t] = p.call(q[t], q[t], t, q)
		}
		return u
	};
	a7 = function(q) {
		var p = ap.documentElement,
			q = q.getBoundingClientRect();
		return {
			top: q.top + (bi.pageYOffset || p.scrollTop) - (p.clientTop || 0),
			left: q.left + (bi.pageXOffset || p.scrollLeft) - (p.clientLeft || 0)
		}
	};
	aj = function(q) {
		for(var p = aH.length; p--;) {
			if(aH[p].elem === q) {
				aH[p].stopped = !0
			}
		}
	};
	aw = function(q, p) {
		return Array.prototype.forEach.call(q, p)
	};
	a0 = function(q, p, u) {
		function t(x) {
			x.target = x.srcElement || bi;
			u.call(q, x)
		}
		var s = q.hcEvents = q.hcEvents || {};
		if(q.addEventListener) {
			q.addEventListener(p, u, !1)
		} else {
			if(q.attachEvent) {
				if(!q.hcEventsIE) {
					q.hcEventsIE = {}
				}
				q.hcEventsIE[u.toString()] = t;
				q.attachEvent("on" + p, t)
			}
		}
		s[p] || (s[p] = []);
		s[p].push(u)
	};
	aN = function(q, p, A) {
		function y(B, C) {
			q.removeEventListener ? q.removeEventListener(B, C, !1) : q.attachEvent && (C = q.hcEventsIE[C.toString()], q.detachEvent("on" + B, C))
		}

		function x() {
			var D, C, B;
			if(q.nodeName) {
				for(B in p ? (D = {}, D[p] = !0) : D = t, D) {
					if(t[B]) {
						for(C = t[B].length; C--;) {
							y(B, t[B][C])
						}
					}
				}
			}
		}
		var u, t = q.hcEvents,
			s;
		if(t) {
			p ? (u = t[p] || [], A ? (s = ah(A, u), s > -1 && (u.splice(s, 1), t[p] = u), y(p, A)) : (x(), t[p] = [])) : (x(), q.hcEvents = {})
		}
	};
	a8 = function(q, p, y, x) {
		var u;
		u = q.hcEvents;
		var t, s, y = y || {};
		if(ap.createEvent && (q.dispatchEvent || q.fireEvent)) {
			u = ap.createEvent("Events"), u.initEvent(p, !0, !0), u.target = q, aq(u, y), q.dispatchEvent ? q.dispatchEvent(u) : q.fireEvent(p, u)
		} else {
			if(u) {
				u = u[p] || [];
				t = u.length;
				if(!y.preventDefault) {
					y.preventDefault = function() {
						y.defaultPrevented = !0
					}
				}
				y.target = q;
				if(!y.type) {
					y.type = p
				}
				for(p = 0; p < t; p++) {
					(s = u[p]) && s.call(q, y) === !1 && y.preventDefault()
				}
			}
		}
		x && !y.defaultPrevented && x(y)
	};
	e = function(q, p, A) {
		var y, x = "",
			u, t, s;
		bE(A) || (y = arguments, A = {
			duration: y[2],
			easing: y[3],
			complete: y[4]
		});
		if(!a6(A.duration)) {
			A.duration = 400
		}
		A.easing = typeof A.easing === "function" ? A.easing : Math[A.easing] || Math.easeInOutSine;
		A.curAnim = bg(p);
		for(s in p) {
			t = new bF(q, A, s), u = null, s === "d" ? (t.paths = t.initPath(q, q.d, p.d), t.toD = p.d, y = 0, u = 1) : q.attr ? y = q.attr(s) : (y = parseFloat(aF(q, s)) || 0, s !== "opacity" && (x = "px")), u || (u = p[s]), u.match && u.match("px") && (u = u.replace(/px/g, "")), t.run(y, u, x)
		}
	};
	if(bi.jQuery) {
		bi.jQuery.fn.highcharts = function() {
			var p = [].slice.call(arguments);
			if(this[0]) {
				return p[0] ? (new(at[bL(p[0]) ? p.shift() : "Chart"])(this[0], p[0], p[1]), this) : aT[aX(this[0], "data-highcharts-chart")]
			}
		}
	}
	ap && !ap.defaultView && (aF = function(q, p) {
		var s;
		s = {
			width: "clientWidth",
			height: "clientHeight"
		}[p];
		if(q.style[p]) {
			return bl(q.style[p])
		}
		p === "opacity" && (p = "filter");
		if(s) {
			return q.style.zoom = 1, Math.max(q[s] - 2 * aF(q, "padding"), 0)
		}
		s = q.currentStyle[p.replace(/\-(\w)/g, function(u, t) {
			return t.toUpperCase()
		})];
		p === "filter" && (s = s.replace(/alpha\(opacity=([0-9]+)\)/, function(u, t) {
			return t / 100
		}));
		return s === "" ? 1 : bl(s)
	});
	Array.prototype.forEach || (aw = function(q, p) {
		for(var t = 0, s = q.length; t < s; t++) {
			if(p.call(q[t], q[t], t, q) === !1) {
				return t
			}
		}
	});
	Array.prototype.indexOf || (ah = function(q, p) {
		var t, s = 0;
		if(p) {
			for(t = p.length; s < t; s++) {
				if(p[s] === q) {
					return s
				}
			}
		}
		return -1
	});
	Array.prototype.filter || (a9 = function(q, p) {
		for(var u = [], t = 0, s = q.length; t < s; t++) {
			p(q[t], t) && u.push(q[t])
		}
		return u
	});
	at.Fx = bF;
	at.inArray = ah;
	at.each = aw;
	at.grep = a9;
	at.offset = a7;
	at.map = aD;
	at.addEvent = a0;
	at.removeEvent = aN;
	at.fireEvent = a8;
	at.animate = e;
	at.animObject = aY;
	at.stop = aj;
	aS = {
		colors: "#7cb5ec,#434348,#90ed7d,#f7a35c,#8085e9,#f15c80,#e4d354,#2b908f,#f45b5b,#91e8e1".split(","),
		symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
		lang: {
			loading: "Loading...",
			months: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
			shortMonths: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
			weekdays: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
			decimalPoint: ".",
			numericSymbols: "k,M,G,T,P,E".split(","),
			resetZoom: "Reset zoom",
			resetZoomTitle: "Reset zoom level 1:1",
			thousandsSep: " "
		},
		global: {
			useUTC: !0,
			canvasToolsURL: "http://code.highcharts.com/modules/canvas-tools.js",
			VMLRadialGradientURL: "http://code.highcharts.com/4.2.6/gfx/vml-radial-gradient.png"
		},
		chart: {
			borderColor: "#4572A7",
			borderRadius: 0,
			defaultSeriesType: "line",
			ignoreHiddenSeries: !0,
			spacing: [10, 10, 15, 10],
			backgroundColor: "#FFFFFF",
			plotBorderColor: "#C0C0C0",
			resetZoomButton: {
				theme: {
					zIndex: 20
				},
				position: {
					align: "right",
					x: -10,
					y: 10
				}
			},
			width: null,
			height: null
		},
		title: {
			text: "Chart title",
			align: "center",
			margin: 15,
			style: {
				color: "#333333",
				fontSize: "18px"
			},
			widthAdjust: -44
		},
		subtitle: {
			text: "",
			align: "center",
			style: {
				color: "#555555"
			},
			widthAdjust: -44
		},
		plotOptions: {
			line: {
				allowPointSelect: !1,
				showCheckbox: !1,
				animation: {
					duration: 1000
				},
				events: {},
				lineWidth: 2,
				marker: {
					lineWidth: 0,
					radius: 4,
					lineColor: "#FFFFFF",
					states: {
						hover: {
							enabled: !0,
							lineWidthPlus: 1,
							radiusPlus: 2
						},
						select: {
							fillColor: "#FFFFFF",
							lineColor: "#000000",
							lineWidth: 2
						}
					}
				},
				point: {
					events: {}
				},
				dataLabels: {
					align: "center",
					formatter: function() {
						return this.y === null ? "" : at.numberFormat(this.y, -1)
					},
					style: {
						color: "contrast",
						fontSize: "11px",
						fontWeight: "bold",
						textShadow: "0 0 6px contrast, 0 0 3px contrast"
					},
					verticalAlign: "bottom",
					x: 0,
					y: 0,
					padding: 5
				},
				cropThreshold: 300,
				pointRange: 0,
				softThreshold: !0,
				states: {
					hover: {
						lineWidthPlus: 1,
						marker: {},
						halo: {
							size: 10,
							opacity: 0.25
						}
					},
					select: {
						marker: {}
					}
				},
				stickyTracking: !0,
				turboThreshold: 1000
			}
		},
		labels: {
			style: {
				position: "absolute",
				color: "#3E576F"
			}
		},
		legend: {
			enabled: !0,
			align: "center",
			layout: "horizontal",
			labelFormatter: function() {
				return this.name
			},
			borderColor: "#909090",
			borderRadius: 0,
			navigation: {
				activeColor: "#274b6d",
				inactiveColor: "#CCC"
			},
			shadow: !1,
			itemStyle: {
				color: "#333333",
				fontSize: "12px",
				fontWeight: "bold"
			},
			itemHoverStyle: {
				color: "#000"
			},
			itemHiddenStyle: {
				color: "#CCC"
			},
			itemCheckboxStyle: {
				position: "absolute",
				width: "13px",
				height: "13px"
			},
			symbolPadding: 5,
			verticalAlign: "bottom",
			x: 0,
			y: 0,
			title: {
				style: {
					fontWeight: "bold"
				}
			}
		},
		loading: {
			labelStyle: {
				fontWeight: "bold",
				position: "relative",
				top: "45%"
			},
			style: {
				position: "absolute",
				backgroundColor: "white",
				opacity: 0.5,
				textAlign: "center"
			}
		},
		tooltip: {
			enabled: !0,
			animation: bx,
			backgroundColor: "rgba(249, 249, 249, .85)",
			borderWidth: 1,
			borderRadius: 3,
			dateTimeLabelFormats: {
				millisecond: "%A, %b %e, %H:%M:%S.%L",
				second: "%A, %b %e, %H:%M:%S",
				minute: "%A, %b %e, %H:%M",
				hour: "%A, %b %e, %H:%M",
				day: "%A, %b %e, %Y",
				week: "Week from %A, %b %e, %Y",
				month: "%B %Y",
				year: "%Y"
			},
			footerFormat: "",
			headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
			pointFormat: '<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>',
			shadow: !0,
			snap: bH ? 25 : 10,
			style: {
				color: "#333333",
				cursor: "default",
				fontSize: "12px",
				padding: "8px",
				pointerEvents: "none",
				whiteSpace: "nowrap"
			}
		},
		credits: {
			enabled: !0,
			text: "Highcharts.com",
			href: "",
			position: {
				align: "right",
				x: -10,
				verticalAlign: "bottom",
				y: -5
			},
			style: {
				cursor: "pointer",
				color: "#909090",
				fontSize: "9px"
			}
		}
	};
	var bP = aS.plotOptions,
		a5 = bP.line;
	bU();
	bf.prototype = {
		parsers: [{
			regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
			parse: function(p) {
				return [bl(p[1]), bl(p[2]), bl(p[3]), parseFloat(p[4], 10)]
			}
		}, {
			regex: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
			parse: function(p) {
				return [bl(p[1], 16), bl(p[2], 16), bl(p[3], 16), 1]
			}
		}, {
			regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
			parse: function(p) {
				return [bl(p[1]), bl(p[2]), bl(p[3]), 1]
			}
		}],
		init: function(q) {
			var p, u, t, s;
			if((this.input = q) && q.stops) {
				this.stops = aD(q.stops, function(x) {
					return new bf(x[1])
				})
			} else {
				for(t = this.parsers.length; t-- && !u;) {
					s = this.parsers[t], (p = s.regex.exec(q)) && (u = s.parse(p))
				}
			}
			this.rgba = u || []
		},
		get: function(q) {
			var p = this.input,
				t = this.rgba,
				s;
			this.stops ? (s = bg(p), s.stops = [].concat(s.stops), aw(this.stops, function(u, x) {
				s.stops[x] = [s.stops[x][0], u.get(q)]
			})) : s = t && a6(t[0]) ? q === "rgb" || !q && t[3] === 1 ? "rgb(" + t[0] + "," + t[1] + "," + t[2] + ")" : q === "a" ? t[3] : "rgba(" + t.join(",") + ")" : p;
			return s
		},
		brighten: function(q) {
			var p, s = this.rgba;
			if(this.stops) {
				aw(this.stops, function(t) {
					t.brighten(q)
				})
			} else {
				if(a6(q) && q !== 0) {
					for(p = 0; p < 3; p++) {
						s[p] += bl(q * 255), s[p] < 0 && (s[p] = 0), s[p] > 255 && (s[p] = 255)
					}
				}
			}
			return this
		},
		setOpacity: function(p) {
			this.rgba[3] = p;
			return this
		}
	};
	aZ.prototype = {
		opacity: 1,
		textProps: "direction,fontSize,fontWeight,fontFamily,fontStyle,color,lineHeight,width,textDecoration,textOverflow,textShadow".split(","),
		init: function(q, p) {
			this.element = p === "span" ? G(p) : ap.createElementNS(bh, p);
			this.renderer = q
		},
		animate: function(q, p, s) {
			p = ax(p, this.renderer.globalAnimation, !0);
			aj(this);
			if(p) {
				if(s) {
					p.complete = s
				}
				e(this, q, p)
			} else {
				this.attr(q, null, s)
			}
			return this
		},
		colorGradient: function(K, J, I) {
			var F = this.renderer,
				E, D, C, B, A, y, x, u, t, s, q, H = [],
				p;
			K.linearGradient ? D = "linearGradient" : K.radialGradient && (D = "radialGradient");
			if(D) {
				C = K[D];
				A = F.gradients;
				x = K.stops;
				s = I.radialReference;
				k(C) && (K[D] = C = {
					x1: C[0],
					y1: C[1],
					x2: C[2],
					y2: C[3],
					gradientUnits: "userSpaceOnUse"
				});
				D === "radialGradient" && s && !av(C.gradientUnits) && (B = C, C = bg(C, F.getRadialAttr(s, B), {
					gradientUnits: "userSpaceOnUse"
				}));
				for(q in C) {
					q !== "id" && H.push(q, C[q])
				}
				for(q in x) {
					H.push(x[q])
				}
				H = H.join(",");
				A[H] ? s = A[H].attr("id") : (C.id = s = "highcharts-" + by++, A[H] = y = F.createElement(D).attr(C).add(F.defs), y.radAttr = B, y.stops = [], aw(x, function(L) {
					L[1].indexOf("rgba") === 0 ? (E = bf(L[1]), u = E.get("rgb"), t = E.get("a")) : (u = L[1], t = 1);
					L = F.createElement("stop").attr({
						offset: L[0],
						"stop-color": u,
						"stop-opacity": t
					}).add(y);
					y.stops.push(L)
				}));
				p = "url(" + F.url + "#" + s + ")";
				I.setAttribute(J, p);
				I.gradient = H;
				K.toString = function() {
					return p
				}
			}
		},
		applyTextShadow: function(q) {
			var p = this.element,
				y, x = q.indexOf("contrast") !== -1,
				u = {},
				t = this.renderer.forExport,
				s = t || p.style.textShadow !== bn && !bs;
			if(x) {
				u.textShadow = q = q.replace(/contrast/g, this.renderer.getContrast(p.style.fill))
			}
			if(aE || t) {
				u.textRendering = "geometricPrecision"
			}
			s ? this.css(u) : (this.fakeTS = !0, this.ySetter = this.xSetter, y = [].slice.call(p.getElementsByTagName("tspan")), aw(q.split(/\s?,\s?/g), function(A) {
				var D = p.firstChild,
					C, B, A = A.split(" ");
				C = A[A.length - 1];
				(B = A[A.length - 2]) && aw(y, function(E, H) {
					var F;
					H === 0 && (E.setAttribute("x", p.getAttribute("x")), H = p.getAttribute("y"), E.setAttribute("y", H || 0), H === null && p.setAttribute("y", 0));
					F = E.cloneNode(1);
					aX(F, {
						"class": "highcharts-text-shadow",
						fill: C,
						stroke: C,
						"stroke-opacity": 1 / au(bl(B), 3),
						"stroke-width": B,
						"stroke-linejoin": "round"
					});
					p.insertBefore(F, D)
				})
			}))
		},
		attr: function(q, p, A) {
			var y, x = this.element,
				u, t = this,
				s;
			typeof q === "string" && p !== bn && (y = q, q = {}, q[y] = p);
			if(typeof q === "string") {
				t = (this[q + "Getter"] || this._defaultGetter).call(this, q, x)
			} else {
				for(y in q) {
					p = q[y];
					s = !1;
					this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(y) && (u || (this.symbolAttr(q), u = !0), s = !0);
					if(this.rotation && (y === "x" || y === "y")) {
						this.doTransform = !0
					}
					s || (s = this[y + "Setter"] || this._defaultSetter, s.call(this, p, y, x), this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(y) && this.updateShadows(y, p, s))
				}
				if(this.doTransform) {
					this.updateTransform(), this.doTransform = !1
				}
			}
			A && A();
			return t
		},
		updateShadows: function(q, p, u) {
			for(var t = this.shadows, s = t.length; s--;) {
				u.call(t[s], q === "height" ? Math.max(p - (t[s].cutHeight || 0), 0) : q === "d" ? this.d : p, q, t[s])
			}
		},
		addClass: function(q) {
			var p = this.element,
				s = aX(p, "class") || "";
			s.indexOf(q) === -1 && aX(p, "class", s + " " + q);
			return this
		},
		symbolAttr: function(q) {
			var p = this;
			aw("x,y,r,start,end,width,height,innerR,anchorX,anchorY".split(","), function(s) {
				p[s] = ax(q[s], p[s])
			});
			p.attr({
				d: p.renderer.symbols[p.symbolName](p.x, p.y, p.width, p.height, p)
			})
		},
		clip: function(p) {
			return this.attr("clip-path", p ? "url(" + this.renderer.url + "#" + p.id + ")" : "none")
		},
		crisp: function(q) {
			var p, u = {},
				t, s = this.strokeWidth || 0;
			t = bk(s) % 2 / 2;
			q.x = aR(q.x || this.x || 0) + t;
			q.y = aR(q.y || this.y || 0) + t;
			q.width = aR((q.width || this.width || 0) - 2 * t);
			q.height = aR((q.height || this.height || 0) - 2 * t);
			q.strokeWidth = s;
			for(p in q) {
				this[p] !== q[p] && (this[p] = u[p] = q[p])
			}
			return u
		},
		css: function(q) {
			var p = this.styles,
				y = {},
				x = this.element,
				u, t, s = "";
			u = !p;
			if(q && q.color) {
				q.fill = q.color
			}
			if(p) {
				for(t in q) {
					q[t] !== p[t] && (y[t] = q[t], u = !0)
				}
			}
			if(u) {
				u = this.textWidth = q && q.width && x.nodeName.toLowerCase() === "text" && bl(q.width) || this.textWidth;
				p && (q = aq(p, y));
				this.styles = q;
				u && (bT || !bx && this.renderer.forExport) && delete q.width;
				if(bs && !bx) {
					a1(this.element, q)
				} else {
					p = function(B, A) {
						return "-" + A.toLowerCase()
					};
					for(t in q) {
						s += t.replace(/([A-Z])/g, p) + ":" + q[t] + ";"
					}
					aX(x, "style", s)
				}
				u && this.added && this.renderer.buildText(this)
			}
			return this
		},
		on: function(q, p) {
			var t = this,
				s = t.element;
			bO && q === "click" ? (s.ontouchstart = function(u) {
				t.touchEventFired = bC.now();
				u.preventDefault();
				p.call(s, u)
			}, s.onclick = function(u) {
				(bR.indexOf("Android") === -1 || bC.now() - (t.touchEventFired || 0) > 1100) && p.call(s, u)
			}) : s["on" + q] = p;
			return this
		},
		setRadialReference: function(q) {
			var p = this.renderer.gradients[this.element.gradient];
			this.element.radialReference = q;
			p && p.radAttr && p.animate(this.renderer.getRadialAttr(q, p.radAttr));
			return this
		},
		translate: function(q, p) {
			return this.attr({
				translateX: q,
				translateY: p
			})
		},
		invert: function() {
			this.inverted = !0;
			this.updateTransform();
			return this
		},
		updateTransform: function() {
			var q = this.translateX || 0,
				p = this.translateY || 0,
				y = this.scaleX,
				x = this.scaleY,
				u = this.inverted,
				t = this.rotation,
				s = this.element;
			u && (q += this.attr("width"), p += this.attr("height"));
			q = ["translate(" + q + "," + p + ")"];
			u ? q.push("rotate(90) scale(-1,1)") : t && q.push("rotate(" + t + " " + (s.getAttribute("x") || 0) + " " + (s.getAttribute("y") || 0) + ")");
			(av(y) || av(x)) && q.push("scale(" + ax(y, 1) + " " + ax(x, 1) + ")");
			q.length && s.setAttribute("transform", q.join(" "))
		},
		toFront: function() {
			var p = this.element;
			p.parentNode.appendChild(p);
			return this
		},
		align: function(q, p, A) {
			var y, x, u, t, s = {};
			x = this.renderer;
			u = x.alignedObjects;
			if(q) {
				if(this.alignOptions = q, this.alignByTranslate = p, !A || bL(A)) {
					this.alignTo = y = A || "renderer", bX(u, this), u.push(this), A = null
				}
			} else {
				q = this.alignOptions, p = this.alignByTranslate, y = this.alignTo
			}
			A = ax(A, x[y], x);
			y = q.align;
			x = q.verticalAlign;
			u = (A.x || 0) + (q.x || 0);
			t = (A.y || 0) + (q.y || 0);
			if(y === "right" || y === "center") {
				u += (A.width - (q.width || 0)) / {
					right: 1,
					center: 2
				}[y]
			}
			s[p ? "translateX" : "x"] = bk(u);
			if(x === "bottom" || x === "middle") {
				t += (A.height - (q.height || 0)) / ({
					bottom: 1,
					middle: 2
				}[x] || 1)
			}
			s[p ? "translateY" : "y"] = bk(t);
			this[this.placed ? "animate" : "attr"](s);
			this.placed = !0;
			this.alignAttr = s;
			return this
		},
		getBBox: function(J, I) {
			var H, E = this.renderer,
				D, C, B, A = this.element,
				y = this.styles;
			D = this.textStr;
			var x, u = A.style,
				t, s = E.cache,
				q = E.cacheKeys,
				p;
			C = ax(I, this.rotation);
			B = C * j;
			D !== bn && (p = ["", C || 0, y && y.fontSize, A.style.width].join(","), p = D === "" || c.test(D) ? "num:" + D.toString().length + p : D + p);
			p && !J && (H = s[p]);
			if(!H) {
				if(A.namespaceURI === bh || E.forExport) {
					try {
						t = this.fakeTS && function(K) {
							aw(A.querySelectorAll(".highcharts-text-shadow"), function(L) {
								L.style.display = K
							})
						}, an && u.textShadow ? (x = u.textShadow, u.textShadow = "") : t && t("none"), H = A.getBBox ? aq({}, A.getBBox()) : {
							width: A.offsetWidth,
							height: A.offsetHeight
						}, x ? u.textShadow = x : t && t("")
					} catch(F) {}
					if(!H || H.width < 0) {
						H = {
							width: 0,
							height: 0
						}
					}
				} else {
					H = this.htmlGetBBox()
				}
				if(E.isSVG) {
					E = H.width;
					D = H.height;
					if(bs && y && y.fontSize === "11px" && D.toPrecision(3) === "16.9") {
						H.height = D = 14
					}
					if(C) {
						H.width = aW(D * g(B)) + aW(E * aQ(B)), H.height = aW(D * aQ(B)) + aW(E * g(B))
					}
				}
				if(p) {
					for(; q.length > 250;) {
						delete s[q.shift()]
					}
					s[p] || q.push(p);
					s[p] = H
				}
			}
			return H
		},
		show: function(p) {
			return this.attr({
				visibility: p ? "inherit" : "visible"
			})
		},
		hide: function() {
			return this.attr({
				visibility: "hidden"
			})
		},
		fadeOut: function(q) {
			var p = this;
			p.animate({
				opacity: 0
			}, {
				duration: q || 150,
				complete: function() {
					p.attr({
						y: -9999
					})
				}
			})
		},
		add: function(q) {
			var p = this.renderer,
				t = this.element,
				s;
			if(q) {
				this.parentGroup = q
			}
			this.parentInverted = q && q.inverted;
			this.textStr !== void 0 && p.buildText(this);
			this.added = !0;
			if(!q || q.handleZ || this.zIndex) {
				s = this.zIndexSetter()
			}
			s || (q ? q.element : p.box).appendChild(t);
			if(this.onAdd) {
				this.onAdd()
			}
			return this
		},
		safeRemoveChild: function(q) {
			var p = q.parentNode;
			p && p.removeChild(q)
		},
		destroy: function() {
			var q = this,
				p = q.element || {},
				x = q.shadows,
				u = q.renderer.isSVG && p.nodeName === "SPAN" && q.parentGroup,
				t, s;
			p.onclick = p.onmouseout = p.onmouseover = p.onmousemove = p.point = null;
			aj(q);
			if(q.clipPath) {
				q.clipPath = q.clipPath.destroy()
			}
			if(q.stops) {
				for(s = 0; s < q.stops.length; s++) {
					q.stops[s] = q.stops[s].destroy()
				}
				q.stops = null
			}
			q.safeRemoveChild(p);
			for(x && aw(x, function(y) {
					q.safeRemoveChild(y)
				}); u && u.div && u.div.childNodes.length === 0;) {
				p = u.parentGroup, q.safeRemoveChild(u.div), delete u.div, u = p
			}
			q.alignTo && bX(q.renderer.alignedObjects, q);
			for(t in q) {
				delete q[t]
			}
			return null
		},
		shadow: function(D, C, B) {
			var A = [],
				y, x, u = this.element,
				t, s, q, p;
			if(D) {
				s = ax(D.width, 3);
				q = (D.opacity || 0.15) / s;
				p = this.parentInverted ? "(-1,-1)" : "(" + ax(D.offsetX, 1) + ", " + ax(D.offsetY, 1) + ")";
				for(y = 1; y <= s; y++) {
					x = u.cloneNode(0);
					t = s * 2 + 1 - 2 * y;
					aX(x, {
						isShadow: "true",
						stroke: D.color || "black",
						"stroke-opacity": q * y,
						"stroke-width": t,
						transform: "translate" + p,
						fill: "none"
					});
					if(B) {
						aX(x, "height", au(aX(x, "height") - t, 0)), x.cutHeight = t
					}
					C ? C.element.appendChild(x) : u.parentNode.insertBefore(x, u);
					A.push(x)
				}
				this.shadows = A
			}
			return this
		},
		xGetter: function(p) {
			this.element.nodeName === "circle" && (p = {
				x: "cx",
				y: "cy"
			}[p] || p);
			return this._defaultGetter(p)
		},
		_defaultGetter: function(p) {
			p = ax(this[p], this.element ? this.element.getAttribute(p) : null, 0);
			/^[\-0-9\.]+$/.test(p) && (p = parseFloat(p));
			return p
		},
		dSetter: function(q, p, s) {
			q && q.join && (q = q.join(" "));
			/(NaN| {2}|^$)/.test(q) && (q = "M 0 0");
			s.setAttribute(p, q);
			this[p] = q
		},
		dashstyleSetter: function(q) {
			var p, s = this["stroke-width"];
			s === "inherit" && (s = 1);
			if(q = q && q.toLowerCase()) {
				q = q.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
				for(p = q.length; p--;) {
					q[p] = bl(q[p]) * s
				}
				q = q.join(",").replace(/NaN/g, "none");
				this.element.setAttribute("stroke-dasharray", q)
			}
		},
		alignSetter: function(p) {
			this.element.setAttribute("text-anchor", {
				left: "start",
				center: "middle",
				right: "end"
			}[p])
		},
		opacitySetter: function(q, p, s) {
			this[p] = q;
			s.setAttribute(p, q)
		},
		titleSetter: function(q) {
			var p = this.element.getElementsByTagName("title")[0];
			p || (p = ap.createElementNS(bh, "title"), this.element.appendChild(p));
			p.firstChild && p.removeChild(p.firstChild);
			p.appendChild(ap.createTextNode(String(ax(q), "").replace(/<[^>]*>/g, "")))
		},
		textSetter: function(p) {
			if(p !== this.textStr) {
				delete this.bBox, this.textStr = p, this.added && this.renderer.buildText(this)
			}
		},
		fillSetter: function(q, p, s) {
			typeof q === "string" ? s.setAttribute(p, q) : q && this.colorGradient(q, p, s)
		},
		visibilitySetter: function(q, p, s) {
			q === "inherit" ? s.removeAttribute(p) : s.setAttribute(p, q)
		},
		zIndexSetter: function(B, A) {
			var y = this.renderer,
				x = this.parentGroup,
				y = (x || y).element || y.box,
				u, t, s = this.element,
				q;
			u = this.added;
			var p;
			if(av(B)) {
				s.zIndex = B, B = +B, this[A] === B && (u = !1), this[A] = B
			}
			if(u) {
				if((B = this.zIndex) && x) {
					x.handleZ = !0
				}
				x = y.childNodes;
				for(p = 0; p < x.length && !q; p++) {
					if(u = x[p], t = u.zIndex, u !== s && (bl(t) > B || !av(B) && av(t))) {
						y.insertBefore(s, u), q = !0
					}
				}
				q || y.appendChild(s)
			}
			return q
		},
		_defaultSetter: function(q, p, s) {
			s.setAttribute(p, q)
		}
	};
	aZ.prototype.yGetter = aZ.prototype.xGetter;
	aZ.prototype.translateXSetter = aZ.prototype.translateYSetter = aZ.prototype.rotationSetter = aZ.prototype.verticalAlignSetter = aZ.prototype.scaleXSetter = aZ.prototype.scaleYSetter = function(q, p) {
		this[p] = q;
		this.doTransform = !0
	};
	aZ.prototype["stroke-widthSetter"] = aZ.prototype.strokeSetter = function(q, p, s) {
		this[p] = q;
		if(this.stroke && this["stroke-width"]) {
			this.strokeWidth = this["stroke-width"], aZ.prototype.fillSetter.call(this, this.stroke, "stroke", s), s.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0
		} else {
			if(p === "stroke-width" && q === 0 && this.hasStroke) {
				s.removeAttribute("stroke"), this.hasStroke = !1
			}
		}
	};
	var af = function() {
		this.init.apply(this, arguments)
	};
	af.prototype = {
		Element: aZ,
		init: function(q, p, A, y, x, u) {
			var t, y = this.createElement("svg").attr({
				version: "1.1"
			}).css(this.getStyle(y));
			t = y.element;
			q.appendChild(t);
			q.innerHTML.indexOf("xmlns") === -1 && aX(t, "xmlns", bh);
			this.isSVG = !0;
			this.box = t;
			this.boxWrapper = y;
			this.alignedObjects = [];
			this.url = (an || aE) && ap.getElementsByTagName("base").length ? bi.location.href.replace(/#.*?$/, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "";
			this.createElement("desc").add().element.appendChild(ap.createTextNode("Created with Highcharts 4.2.6"));
			this.defs = this.createElement("defs").add();
			this.allowHTML = u;
			this.forExport = x;
			this.gradients = {};
			this.cache = {};
			this.cacheKeys = [];
			this.imgCount = 0;
			this.setSize(p, A, !1);
			var s;
			if(an && q.getBoundingClientRect) {
				this.subPixelFix = p = function() {
					a1(q, {
						left: 0,
						top: 0
					});
					s = q.getBoundingClientRect();
					a1(q, {
						left: am(s.left) - s.left + "px",
						top: am(s.top) - s.top + "px"
					})
				}, p(), a0(bi, "resize", p)
			}
		},
		getStyle: function(p) {
			return this.style = aq({
				fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
				fontSize: "12px"
			}, p)
		},
		isHidden: function() {
			return !this.boxWrapper.getBBox().width
		},
		destroy: function() {
			var p = this.defs;
			this.box = null;
			this.boxWrapper = this.boxWrapper.destroy();
			bM(this.gradients || {});
			this.gradients = null;
			if(p) {
				this.defs = p.destroy()
			}
			this.subPixelFix && aN(bi, "resize", this.subPixelFix);
			return this.alignedObjects = null
		},
		createElement: function(q) {
			var p = new this.Element;
			p.init(this, q);
			return p
		},
		draw: function() {},
		getRadialAttr: function(q, p) {
			return {
				cx: q[0] - q[2] / 2 + p.cx * q[2],
				cy: q[1] - q[2] / 2 + p.cy * q[2],
				r: p.r * q[2]
			}
		},
		buildText: function(N) {
			for(var M = N.element, L = this, K = L.forExport, J = ax(N.textStr, "").toString(), I = J.indexOf("<") !== -1, H = M.childNodes, F, E, D, C = aX(M, "x"), B = N.styles, A = N.textWidth, y = B && B.lineHeight, x = B && B.textShadow, p = B && B.textOverflow === "ellipsis", u = H.length, t = A && !N.added && this.box, q = function(O) {
					return y ? bl(y) : L.fontMetrics(/(px|em)$/.test(O && O.style.fontSize) ? O.style.fontSize : B && B.fontSize || L.style.fontSize || 12, O).h
				}, s = function(O) {
					return O.replace(/&lt;/g, "<").replace(/&gt;/g, ">")
				}; u--;) {
				M.removeChild(H[u])
			}!I && !x && !p && !A && J.indexOf(" ") === -1 ? M.appendChild(ap.createTextNode(s(J))) : (F = /<.*style="([^"]+)".*>/, E = /<.*href="(http[^"]+)".*>/, t && t.appendChild(M), J = I ? J.replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g) : [J], J = a9(J, function(O) {
				return O !== ""
			}), aw(J, function(Q, P) {
				var O, R = 0,
					Q = Q.replace(/^\s+|\s+$/g, "").replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||");
				O = Q.split("|||");
				aw(O, function(Z) {
					if(Z !== "" || O.length === 1) {
						var X = {},
							S = ap.createElementNS(bh, "tspan"),
							V;
						F.test(Z) && (V = Z.match(F)[1].replace(/(;| |^)color([ :])/, "$1fill$2"), aX(S, "style", V));
						E.test(Z) && !K && (aX(S, "onclick", 'location.href="' + Z.match(E)[1] + '"'), a1(S, {
							cursor: "pointer"
						}));
						Z = s(Z.replace(/<(.|\n)*?>/g, "") || " ");
						if(Z !== " ") {
							S.appendChild(ap.createTextNode(Z));
							if(R) {
								X.dx = 0
							} else {
								if(P && C !== null) {
									X.x = C
								}
							}
							aX(S, X);
							M.appendChild(S);
							!R && P && (!bx && K && a1(S, {
								display: "block"
							}), aX(S, "dy", q(S)));
							if(A) {
								for(var X = Z.replace(/([^\^])-/g, "$1- ").split(" "), U = O.length > 1 || P || X.length > 1 && B.whiteSpace !== "nowrap", bb, b1, Y = [], b0 = q(S), aa = 1, T = N.rotation, W = Z, ab = W.length;
									(U || p) && (X.length || Y.length);) {
									N.rotation = 0, bb = N.getBBox(!0), b1 = bb.width, !bx && L.forExport && (b1 = L.measureSpanWidth(S.firstChild.data, N.styles)), bb = b1 > A, D === void 0 && (D = bb), p && D ? (ab /= 2, W === "" || !bb && ab < 0.5 ? X = [] : (W = Z.substring(0, W.length + (bb ? -1 : 1) * am(ab)), X = [W + (A > 3 ? "\u2026" : "")], S.removeChild(S.firstChild))) : !bb || X.length === 1 ? (X = Y, Y = [], X.length && (aa++, S = ap.createElementNS(bh, "tspan"), aX(S, {
										dy: b0,
										x: C
									}), V && aX(S, "style", V), M.appendChild(S)), b1 > A && (A = b1)) : (S.removeChild(S.firstChild), Y.unshift(X.pop())), X.length && S.appendChild(ap.createTextNode(X.join(" ").replace(/- /g, "-")))
								}
								N.rotation = T
							}
							R++
						}
					}
				})
			}), D && N.attr("title", N.textStr), t && t.removeChild(M), x && N.applyTextShadow && N.applyTextShadow(x))
		},
		getContrast: function(p) {
			p = bf(p).rgba;
			return p[0] + p[1] + p[2] > 384 ? "#000000" : "#FFFFFF"
		},
		button: function(K, J, I, F, E, D, C, B, A) {
			var y = this.label(K, J, I, A, null, null, null, null, "button"),
				x = 0,
				u, t, s, q, H, p, K = {
					x1: 0,
					y1: 0,
					x2: 0,
					y2: 1
				},
				E = bg({
					"stroke-width": 1,
					stroke: "#CCCCCC",
					fill: {
						linearGradient: K,
						stops: [
							[0, "#FEFEFE"],
							[1, "#F6F6F6"]
						]
					},
					r: 2,
					padding: 5,
					style: {
						color: "black"
					}
				}, E);
			s = E.style;
			delete E.style;
			D = bg(E, {
				stroke: "#68A",
				fill: {
					linearGradient: K,
					stops: [
						[0, "#FFF"],
						[1, "#ACF"]
					]
				}
			}, D);
			q = D.style;
			delete D.style;
			C = bg(E, {
				stroke: "#68A",
				fill: {
					linearGradient: K,
					stops: [
						[0, "#9BD"],
						[1, "#CDF"]
					]
				}
			}, C);
			H = C.style;
			delete C.style;
			B = bg(E, {
				style: {
					color: "#CCC"
				}
			}, B);
			p = B.style;
			delete B.style;
			a0(y.element, bs ? "mouseover" : "mouseenter", function() {
				x !== 3 && y.attr(D).css(q)
			});
			a0(y.element, bs ? "mouseout" : "mouseleave", function() {
				x !== 3 && (u = [E, D, C][x], t = [s, q, H][x], y.attr(u).css(t))
			});
			y.setState = function(L) {
				(y.state = x = L) ? L === 2 ? y.attr(C).css(H) : L === 3 && y.attr(B).css(p): y.attr(E).css(s)
			};
			return y.on("click", function(L) {
				x !== 3 && F.call(y, L)
			}).attr(E).css(aq({
				cursor: "default"
			}, s))
		},
		crispLine: function(q, p) {
			q[1] === q[4] && (q[1] = q[4] = bk(q[1]) - p % 2 / 2);
			q[2] === q[5] && (q[2] = q[5] = bk(q[2]) + p % 2 / 2);
			return q
		},
		path: function(q) {
			var p = {
				fill: "none"
			};
			k(q) ? p.d = q : bE(q) && aq(p, q);
			return this.createElement("path").attr(p)
		},
		circle: function(q, p, s) {
			q = bE(q) ? q : {
				x: q,
				y: p,
				r: s
			};
			p = this.createElement("circle");
			p.xSetter = p.ySetter = function(u, t, x) {
				x.setAttribute("c" + t, u)
			};
			return p.attr(q)
		},
		arc: function(q, p, x, u, t, s) {
			if(bE(q)) {
				p = q.y, x = q.r, u = q.innerR, t = q.start, s = q.end, q = q.x
			}
			q = this.symbol("arc", q || 0, p || 0, x || 0, x || 0, {
				innerR: u || 0,
				start: t || 0,
				end: s || 0
			});
			q.r = x;
			return q
		},
		rect: function(q, p, y, x, u, t) {
			var u = bE(q) ? q.r : u,
				s = this.createElement("rect"),
				q = bE(q) ? q : q === bn ? {} : {
					x: q,
					y: p,
					width: au(y, 0),
					height: au(x, 0)
				};
			if(t !== bn) {
				s.strokeWidth = t, q = s.crisp(q)
			}
			if(u) {
				q.r = u
			}
			s.rSetter = function(B, A, C) {
				aX(C, {
					rx: B,
					ry: B
				})
			};
			return s.attr(q)
		},
		setSize: function(q, p, u) {
			var t = this.alignedObjects,
				s = t.length;
			this.width = q;
			this.height = p;
			for(this.boxWrapper[ax(u, !0) ? "animate" : "attr"]({
					width: q,
					height: p
				}); s--;) {
				t[s].align()
			}
		},
		g: function(q) {
			var p = this.createElement("g");
			return av(q) ? p.attr({
				"class": "highcharts-" + q
			}) : p
		},
		image: function(q, p, x, u, t) {
			var s = {
				preserveAspectRatio: "none"
			};
			arguments.length > 1 && aq(s, {
				x: p,
				y: x,
				width: u,
				height: t
			});
			s = this.createElement("image").attr(s);
			s.element.setAttributeNS ? s.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", q) : s.element.setAttribute("hc-svg-href", q);
			return s
		},
		symbol: function(E, D, C, B, A, y) {
			var x = this,
				u, t = this.symbols[E],
				t = t && t(bk(D), bk(C), B, A, y),
				s = /^url\((.*?)\)$/,
				q, p;
			if(t) {
				u = this.path(t), aq(u, {
					symbolName: E,
					x: D,
					y: C,
					width: B,
					height: A
				}), y && aq(u, y)
			} else {
				if(s.test(E)) {
					p = function(H, F) {
						H.element && (H.attr({
							width: F[0],
							height: F[1]
						}), H.alignByTranslate || H.translate(bk((B - F[0]) / 2), bk((A - F[1]) / 2)))
					}, q = E.match(s)[1], E = bp[q] || y && y.width && y.height && [y.width, y.height], u = this.image(q).attr({
						x: D,
						y: C
					}), u.isImg = !0, E ? p(u, E) : (u.attr({
						width: 0,
						height: 0
					}), G("img", {
						onload: function() {
							this.width === 0 && (a1(this, {
								position: "absolute",
								top: "-999em"
							}), ap.body.appendChild(this));
							p(u, bp[q] = [this.width, this.height]);
							this.parentNode && this.parentNode.removeChild(this);
							x.imgCount--;
							if(!x.imgCount && aT[x.chartIndex].onload) {
								aT[x.chartIndex].onload()
							}
						},
						src: q
					}), this.imgCount++)
				}
			}
			return u
		},
		symbols: {
			circle: function(q, p, u, t) {
				var s = 0.166 * u;
				return [aP, q + u / 2, p, "C", q + u + s, p, q + u + s, p + t, q + u / 2, p + t, "C", q - s, p + t, q - s, p, q + u / 2, p, "Z"]
			},
			square: function(q, p, t, s) {
				return [aP, q, p, aU, q + t, p, q + t, p + s, q, p + s, "Z"]
			},
			triangle: function(q, p, t, s) {
				return [aP, q + t / 2, p, aU, q + t, p + s, q, p + s, "Z"]
			},
			"triangle-down": function(q, p, t, s) {
				return [aP, q, p, aU, q + t, p, q + t / 2, p + s, "Z"]
			},
			diamond: function(q, p, t, s) {
				return [aP, q + t / 2, p, aU, q + t, p + s / 2, q + t / 2, p + s, q, p + s / 2, "Z"]
			},
			arc: function(D, C, B, A, y) {
				var x = y.start,
					B = y.r || B || A,
					u = y.end - 0.001,
					A = y.innerR,
					t = y.open,
					s = aQ(x),
					q = g(x),
					p = aQ(u),
					u = g(u),
					y = y.end - x < bo ? 0 : 1;
				return [aP, D + B * s, C + B * q, "A", B, B, 0, y, 1, D + B * p, C + B * u, t ? aP : aU, D + A * p, C + A * u, "A", A, A, 0, y, 0, D + A * s, C + A * q, t ? "" : "Z"]
			},
			callout: function(B, A, y, x, u) {
				var t = bd(u && u.r || 0, y, x),
					s = t + 6,
					q = u && u.anchorX,
					u = u && u.anchorY,
					p;
				p = ["M", B + t, A, "L", B + y - t, A, "C", B + y, A, B + y, A, B + y, A + t, "L", B + y, A + x - t, "C", B + y, A + x, B + y, A + x, B + y - t, A + x, "L", B + t, A + x, "C", B, A + x, B, A + x, B, A + x - t, "L", B, A + t, "C", B, A, B, A, B + t, A];
				q && q > y && u > A + s && u < A + x - s ? p.splice(13, 3, "L", B + y, u - 6, B + y + 6, u, B + y, u + 6, B + y, A + x - t) : q && q < 0 && u > A + s && u < A + x - s ? p.splice(33, 3, "L", B, u + 6, B - 6, u, B, u - 6, B, A + t) : u && u > x && q > B + s && q < B + y - s ? p.splice(23, 3, "L", q + 6, A + x, q, A + x + 6, q - 6, A + x, B + t, A + x) : u && u < 0 && q > B + s && q < B + y - s && p.splice(3, 3, "L", q - 6, A, q, A - 6, q + 6, A, y - t, A);
				return p
			}
		},
		clipRect: function(q, p, x, u) {
			var t = "highcharts-" + by++,
				s = this.createElement("clipPath").attr({
					id: t
				}).add(this.defs),
				q = this.rect(q, p, x, u, 0).add(s);
			q.id = t;
			q.clipPath = s;
			q.count = 0;
			return q
		},
		text: function(q, p, x, u) {
			var t = bT || !bx && this.forExport,
				s = {};
			if(u && (this.allowHTML || !this.forExport)) {
				return this.html(q, p, x)
			}
			s.x = Math.round(p || 0);
			if(x) {
				s.y = Math.round(x)
			}
			if(q || q === 0) {
				s.text = q
			}
			q = this.createElement("text").attr(s);
			t && q.css({
				position: "absolute"
			});
			if(!u) {
				q.xSetter = function(B, A, F) {
					var E = F.getElementsByTagName("tspan"),
						D, C = F.getAttribute(A),
						y;
					for(y = 0; y < E.length; y++) {
						D = E[y], D.getAttribute(A) === C && D.setAttribute(A, B)
					}
					F.setAttribute(A, B)
				}
			}
			return q
		},
		fontMetrics: function(q, p) {
			var t, s, q = q || this.style.fontSize;
			!q && p && bi.getComputedStyle && (p = p.element || p, q = (t = bi.getComputedStyle(p, "")) && t.fontSize);
			q = /px/.test(q) ? bl(q) : /em/.test(q) ? parseFloat(q) * 12 : 12;
			t = q < 24 ? q + 3 : bk(q * 1.2);
			s = bk(t * 0.8);
			return {
				h: t,
				b: s,
				f: q
			}
		},
		rotCorr: function(q, p, t) {
			var s = q;
			p && t && (s = au(s * aQ(p * j), 4));
			return {
				x: -q / 3 * g(p * j),
				y: s
			}
		},
		label: function(b0, bb, ab, aa, Z, Y, X, V, U) {
			var T = this,
				S = T.g(U),
				R = T.text("", 0, 0, X).attr({
					zIndex: 1
				}),
				Q, P, O = 0,
				x = 3,
				L = 0,
				N, C, E, W, s = 0,
				q = {},
				J, I, A, H, K;
			A = function() {
				var t, p;
				t = R.element.style;
				P = (N === void 0 || C === void 0 || S.styles.textAlign) && av(R.textStr) && R.getBBox();
				S.width = (N || P.width || 0) + 2 * x + L;
				S.height = (C || P.height || 0) + 2 * x;
				J = x + T.fontMetrics(t && t.fontSize, R).b;
				if(I) {
					if(!Q) {
						t = s, p = (V ? -J : 0) + s, S.box = Q = T.symbols[aa] ? T.symbol(aa, t, p, S.width, S.height, q) : T.rect(t, p, S.width, S.height, 0, q["stroke-width"]), Q.isImg || Q.attr("fill", "none"), Q.add(S)
					}
					Q.isImg || Q.attr(aq({
						width: bk(S.width),
						height: bk(S.height)
					}, q));
					q = null
				}
			};
			H = function() {
				var t = S.styles,
					t = t && t.textAlign,
					p = L + x,
					u;
				u = V ? 0 : J;
				if(av(N) && P && (t === "center" || t === "right")) {
					p += {
						center: 0.5,
						right: 1
					}[t] * (N - P.width)
				}
				if(p !== R.x || u !== R.y) {
					R.attr("x", p), u !== bn && R.attr("y", u)
				}
				R.x = p;
				R.y = u
			};
			K = function(t, p) {
				Q ? Q.attr(t, p) : q[t] = p
			};
			S.onAdd = function() {
				R.add(S);
				S.attr({
					text: b0 || b0 === 0 ? b0 : "",
					x: bb,
					y: ab
				});
				Q && av(Z) && S.attr({
					anchorX: Z,
					anchorY: Y
				})
			};
			S.widthSetter = function(p) {
				N = p
			};
			S.heightSetter = function(p) {
				C = p
			};
			S.paddingSetter = function(p) {
				if(av(p) && p !== x) {
					x = S.padding = p, H()
				}
			};
			S.paddingLeftSetter = function(p) {
				av(p) && p !== L && (L = p, H())
			};
			S.alignSetter = function(p) {
				p = {
					left: 0,
					center: 0.5,
					right: 1
				}[p];
				p !== O && (O = p, P && S.attr({
					x: E
				}))
			};
			S.textSetter = function(p) {
				p !== bn && R.textSetter(p);
				A();
				H()
			};
			S["stroke-widthSetter"] = function(t, p) {
				t && (I = !0);
				s = t % 2 / 2;
				K(p, t)
			};
			S.strokeSetter = S.fillSetter = S.rSetter = function(t, p) {
				p === "fill" && t && (I = !0);
				K(p, t)
			};
			S.anchorXSetter = function(t, p) {
				Z = t;
				K(p, bk(t) - s - E)
			};
			S.anchorYSetter = function(t, p) {
				Y = t;
				K(p, t - W)
			};
			S.xSetter = function(p) {
				S.x = p;
				O && (p -= O * ((N || P.width) + 2 * x));
				E = bk(p);
				S.attr("translateX", E)
			};
			S.ySetter = function(p) {
				W = S.y = bk(p);
				S.attr("translateY", W)
			};
			var M = S.css;
			return aq(S, {
				css: function(t) {
					if(t) {
						var p = {},
							t = bg(t);
						aw(S.textProps, function(u) {
							t[u] !== bn && (p[u] = t[u], delete t[u])
						});
						R.css(p)
					}
					return M.call(S, t)
				},
				getBBox: function() {
					return {
						width: P.width + 2 * x,
						height: P.height + 2 * x,
						x: P.x - x,
						y: P.y - x
					}
				},
				shadow: function(p) {
					Q && Q.shadow(p);
					return S
				},
				destroy: function() {
					aN(S.element, "mouseenter");
					aN(S.element, "mouseleave");
					R && (R = R.destroy());
					Q && (Q = Q.destroy());
					aZ.prototype.destroy.call(S);
					S = T = A = H = K = null
				}
			})
		}
	};
	f = af;
	aq(aZ.prototype, {
		htmlCss: function(q) {
			var p = this.element;
			if(p = q && p.tagName === "SPAN" && q.width) {
				delete q.width, this.textWidth = p, this.updateTransform()
			}
			if(q && q.textOverflow === "ellipsis") {
				q.whiteSpace = "nowrap", q.overflow = "hidden"
			}
			this.styles = aq(this.styles, q);
			a1(this.element, q);
			return this
		},
		htmlGetBBox: function() {
			var p = this.element;
			if(p.nodeName === "text") {
				p.style.position = "absolute"
			}
			return {
				x: p.offsetLeft,
				y: p.offsetTop,
				width: p.offsetWidth,
				height: p.offsetHeight
			}
		},
		htmlUpdateTransform: function() {
			if(this.added) {
				var F = this.renderer,
					E = this.element,
					D = this.translateX || 0,
					C = this.translateY || 0,
					B = this.x || 0,
					A = this.y || 0,
					y = this.textAlign || "left",
					x = {
						left: 0,
						center: 0.5,
						right: 1
					}[y],
					u = this.shadows,
					t = this.styles;
				a1(E, {
					marginLeft: D,
					marginTop: C
				});
				u && aw(u, function(H) {
					a1(H, {
						marginLeft: D + 1,
						marginTop: C + 1
					})
				});
				this.inverted && aw(E.childNodes, function(H) {
					F.invertChild(H, E)
				});
				if(E.tagName === "SPAN") {
					var u = this.rotation,
						s = bl(this.textWidth),
						q = t && t.whiteSpace,
						p = [u, y, E.innerHTML, this.textWidth, this.textAlign].join(",");
					if(p !== this.cTT) {
						t = F.fontMetrics(E.style.fontSize).b;
						av(u) && this.setSpanRotation(u, x, t);
						a1(E, {
							width: "",
							whiteSpace: q || "nowrap"
						});
						if(E.offsetWidth > s && /[ \-]/.test(E.textContent || E.innerText)) {
							a1(E, {
								width: s + "px",
								display: "block",
								whiteSpace: q || "normal"
							})
						}
						this.getSpanCorrection(E.offsetWidth, t, x, u, y)
					}
					a1(E, {
						left: B + (this.xCorr || 0) + "px",
						top: A + (this.yCorr || 0) + "px"
					});
					if(aE) {
						t = E.offsetHeight
					}
					this.cTT = p
				}
			} else {
				this.alignOnAdd = !0
			}
		},
		setSpanRotation: function(q, p, u) {
			var t = {},
				s = bs ? "-ms-transform" : aE ? "-webkit-transform" : an ? "MozTransform" : bY ? "-o-transform" : "";
			t[s] = t.transform = "rotate(" + q + "deg)";
			t[s + (an ? "Origin" : "-origin")] = t.transformOrigin = p * 100 + "% " + u + "px";
			a1(this.element, t)
		},
		getSpanCorrection: function(q, p, s) {
			this.xCorr = -q * s;
			this.yCorr = -p
		}
	});
	aq(af.prototype, {
		html: function(q, p, A) {
			var y = this.createElement("span"),
				x = y.element,
				u = y.renderer,
				t = u.isSVG,
				s = function(C, B) {
					aw(["opacity", "visibility"], function(D) {
						a4(C, D + "Setter", function(E, I, H, F) {
							E.call(this, I, H, F);
							B[H] = I
						})
					})
				};
			y.textSetter = function(B) {
				B !== x.innerHTML && delete this.bBox;
				x.innerHTML = this.textStr = B;
				y.htmlUpdateTransform()
			};
			t && s(y, y.element.style);
			y.xSetter = y.ySetter = y.alignSetter = y.rotationSetter = function(C, B) {
				B === "align" && (B = "textAlign");
				y[B] = C;
				y.htmlUpdateTransform()
			};
			y.attr({
				text: q,
				x: bk(p),
				y: bk(A)
			}).css({
				position: "absolute",
				fontFamily: this.style.fontFamily,
				fontSize: this.style.fontSize
			});
			x.style.whiteSpace = "nowrap";
			y.css = y.htmlCss;
			if(t) {
				y.add = function(C) {
					var B, E = u.box.parentNode,
						D = [];
					if(this.parentGroup = C) {
						if(B = C.div, !B) {
							for(; C;) {
								D.push(C), C = C.parentGroup
							}
							aw(D.reverse(), function(F) {
								var I, H = aX(F.element, "class");
								H && (H = {
									className: H
								});
								B = F.div = F.div || G(aL, H, {
									position: "absolute",
									left: (F.translateX || 0) + "px",
									top: (F.translateY || 0) + "px",
									opacity: F.opacity
								}, B || E);
								I = B.style;
								aq(F, {
									translateXSetter: function(J, K) {
										I.left = J + "px";
										F[K] = J;
										F.doTransform = !0
									},
									translateYSetter: function(J, K) {
										I.top = J + "px";
										F[K] = J;
										F.doTransform = !0
									}
								});
								s(F, I)
							})
						}
					} else {
						B = E
					}
					B.appendChild(x);
					y.added = !0;
					y.alignOnAdd && y.htmlUpdateTransform();
					return y
				}
			}
			return y
		}
	});
	var a3;
	if(!bx && !bT) {
		a3 = {
			init: function(q, p) {
				var u = ["<", p, ' filled="f" stroked="f"'],
					t = ["position: ", "absolute", ";"],
					s = p === aL;
				(p === "shape" || s) && t.push("left:0;top:0;width:1px;height:1px;");
				t.push("visibility: ", s ? "hidden" : "visible");
				u.push(' style="', t.join(""), '"/>');
				if(p) {
					u = s || p === "span" || p === "img" ? u.join("") : q.prepVML(u), this.element = G(u)
				}
				this.renderer = q
			},
			add: function(q) {
				var p = this.renderer,
					u = this.element,
					t = p.box,
					s = q && q.inverted,
					t = q ? q.element || q : t;
				if(q) {
					this.parentGroup = q
				}
				s && p.invertChild(u, t);
				t.appendChild(u);
				this.added = !0;
				this.alignOnAdd && !this.deferUpdateTransform && this.updateTransform();
				if(this.onAdd) {
					this.onAdd()
				}
				return this
			},
			updateTransform: aZ.prototype.htmlUpdateTransform,
			setSpanRotation: function() {
				var q = this.rotation,
					p = aQ(q * j),
					s = g(q * j);
				a1(this.element, {
					filter: q ? ["progid:DXImageTransform.Microsoft.Matrix(M11=", p, ", M12=", -s, ", M21=", s, ", M22=", p, ", sizingMethod='auto expand')"].join("") : "none"
				})
			},
			getSpanCorrection: function(B, A, y, x, u) {
				var t = x ? aQ(x * j) : 1,
					s = x ? g(x * j) : 0,
					q = ax(this.elemHeight, this.element.offsetHeight),
					p;
				this.xCorr = t < 0 && -B;
				this.yCorr = s < 0 && -q;
				p = t * s < 0;
				this.xCorr += s * A * (p ? 1 - y : y);
				this.yCorr -= t * A * (x ? p ? y : 1 - y : 1);
				u && u !== "left" && (this.xCorr -= B * y * (t < 0 ? -1 : 1), x && (this.yCorr -= q * y * (s < 0 ? -1 : 1)), a1(this.element, {
					textAlign: u
				}))
			},
			pathToVML: function(q) {
				for(var p = q.length, s = []; p--;) {
					if(a6(q[p])) {
						s[p] = bk(q[p] * 10) - 5
					} else {
						if(q[p] === "Z") {
							s[p] = "x"
						} else {
							if(s[p] = q[p], q.isArc && (q[p] === "wa" || q[p] === "at")) {
								s[p + 5] === s[p + 7] && (s[p + 7] += q[p + 7] > q[p + 5] ? 1 : -1), s[p + 6] === s[p + 8] && (s[p + 8] += q[p + 8] > q[p + 6] ? 1 : -1)
							}
						}
					}
				}
				return s.join(" ") || "x"
			},
			clip: function(q) {
				var p = this,
					s;
				q ? (s = q.members, bX(s, p), s.push(p), p.destroyClip = function() {
					bX(s, p)
				}, q = q.getCSS(p)) : (p.destroyClip && p.destroyClip(), q = {
					clip: bc ? "inherit" : "rect(auto)"
				});
				return p.css(q)
			},
			css: aZ.prototype.htmlCss,
			safeRemoveChild: function(p) {
				p.parentNode && bt(p)
			},
			destroy: function() {
				this.destroyClip && this.destroyClip();
				return aZ.prototype.destroy.apply(this)
			},
			on: function(q, p) {
				this.element["on" + q] = function() {
					var s = bi.event;
					s.target = s.srcElement;
					p(s)
				};
				return this
			},
			cutOffPath: function(q, p) {
				var s, q = q.split(/[ ,]/);
				s = q.length;
				if(s === 9 || s === 11) {
					q[s - 4] = q[s - 2] = bl(q[s - 2]) - 10 * p
				}
				return q.join(" ")
			},
			shadow: function(I, H, F) {
				var E = [],
					D, C = this.element,
					B = this.renderer,
					A, y = C.style,
					x, u = C.path,
					t, s, q, p;
				u && typeof u.value !== "string" && (u = "x");
				s = u;
				if(I) {
					q = ax(I.width, 3);
					p = (I.opacity || 0.15) / q;
					for(D = 1; D <= 3; D++) {
						t = q * 2 + 1 - 2 * D;
						F && (s = this.cutOffPath(u.value, t + 0.5));
						x = ['<shape isShadow="true" strokeweight="', t, '" filled="false" path="', s, '" coordsize="10 10" style="', C.style.cssText, '" />'];
						A = G(B.prepVML(x), null, {
							left: bl(y.left) + ax(I.offsetX, 1),
							top: bl(y.top) + ax(I.offsetY, 1)
						});
						if(F) {
							A.cutOff = t + 1
						}
						x = ['<stroke color="', I.color || "black", '" opacity="', p * D, '"/>'];
						G(B.prepVML(x), null, null, A);
						H ? H.element.appendChild(A) : C.parentNode.insertBefore(A, C);
						E.push(A)
					}
					this.shadows = E
				}
				return this
			},
			updateShadows: bz,
			setAttr: function(q, p) {
				bc ? this.element[q] = p : this.element.setAttribute(q, p)
			},
			classSetter: function(p) {
				this.element.className = p
			},
			dashstyleSetter: function(q, p, s) {
				(s.getElementsByTagName("stroke")[0] || G(this.renderer.prepVML(["<stroke/>"]), null, null, s))[p] = q || "solid";
				this[p] = q
			},
			dSetter: function(q, p, t) {
				var s = this.shadows,
					q = q || [];
				this.d = q.join && q.join(" ");
				t.path = q = this.pathToVML(q);
				if(s) {
					for(t = s.length; t--;) {
						s[t].path = s[t].cutOff ? this.cutOffPath(q, s[t].cutOff) : q
					}
				}
				this.setAttr(p, q)
			},
			fillSetter: function(q, p, t) {
				var s = t.nodeName;
				if(s === "SPAN") {
					t.style.color = q
				} else {
					if(s !== "IMG") {
						t.filled = q !== "none", this.setAttr("fillcolor", this.renderer.color(q, t, p, this))
					}
				}
			},
			"fill-opacitySetter": function(q, p, s) {
				G(this.renderer.prepVML(["<", p.split("-")[0], ' opacity="', q, '"/>']), null, null, s)
			},
			opacitySetter: bz,
			rotationSetter: function(q, p, s) {
				s = s.style;
				this[p] = s[p] = q;
				s.left = -bk(g(q * j) + 1) + "px";
				s.top = bk(aQ(q * j)) + "px"
			},
			strokeSetter: function(q, p, s) {
				this.setAttr("strokecolor", this.renderer.color(q, s, p, this))
			},
			"stroke-widthSetter": function(q, p, s) {
				s.stroked = !!q;
				this[p] = q;
				a6(q) && (q += "px");
				this.setAttr("strokeweight", q)
			},
			titleSetter: function(q, p) {
				this.setAttr(p, q)
			},
			visibilitySetter: function(q, p, s) {
				q === "inherit" && (q = "visible");
				this.shadows && aw(this.shadows, function(t) {
					t.style[p] = q
				});
				s.nodeName === "DIV" && (q = q === "hidden" ? "-999em" : 0, bc || (s.style[p] = q ? "visible" : "hidden"), p = "top");
				s.style[p] = q
			},
			xSetter: function(q, p, s) {
				this[p] = q;
				p === "x" ? p = "left" : p === "y" && (p = "top");
				this.updateClipping ? (this[p] = q, this.updateClipping()) : s.style[p] = q
			},
			zIndexSetter: function(q, p, s) {
				s.style[p] = q
			}
		};
		a3["stroke-opacitySetter"] = a3["fill-opacitySetter"];
		at.VMLElement = a3 = bG(aZ, a3);
		a3.prototype.ySetter = a3.prototype.widthSetter = a3.prototype.heightSetter = a3.prototype.xSetter;
		var aC = {
			Element: a3,
			isIE8: bR.indexOf("MSIE 8.0") > -1,
			init: function(q, p, x, u) {
				var t;
				this.alignedObjects = [];
				u = this.createElement(aL).css(aq(this.getStyle(u), {
					position: "relative"
				}));
				t = u.element;
				q.appendChild(u.element);
				this.isVML = !0;
				this.box = t;
				this.boxWrapper = u;
				this.gradients = {};
				this.cache = {};
				this.cacheKeys = [];
				this.imgCount = 0;
				this.setSize(p, x, !1);
				if(!ap.namespaces.hcv) {
					ap.namespaces.add("hcv", "urn:schemas-microsoft-com:vml");
					try {
						ap.createStyleSheet().cssText = "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
					} catch(s) {
						ap.styleSheets[0].cssText += "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
					}
				}
			},
			isHidden: function() {
				return !this.box.offsetWidth
			},
			clipRect: function(q, p, x, u) {
				var t = this.createElement(),
					s = bE(q);
				return aq(t, {
					members: [],
					count: 0,
					left: (s ? q.x : q) + 1,
					top: (s ? q.y : p) + 1,
					width: (s ? q.width : x) - 1,
					height: (s ? q.height : u) - 1,
					getCSS: function(A) {
						var y = A.element,
							E = y.nodeName,
							A = A.inverted,
							D = this.top - (E === "shape" ? y.offsetTop : 0),
							C = this.left,
							y = C + this.width,
							B = D + this.height,
							D = {
								clip: "rect(" + bk(A ? C : D) + "px," + bk(A ? B : y) + "px," + bk(A ? y : B) + "px," + bk(A ? D : C) + "px)"
							};
						!A && bc && E === "DIV" && aq(D, {
							width: y + "px",
							height: B + "px"
						});
						return D
					},
					updateClipping: function() {
						aw(t.members, function(y) {
							y.element && y.css(t.getCSS(y))
						})
					}
				})
			},
			color: function(b0, bb, ab, aa) {
				var Z = this,
					Y, X = /^rgba/,
					W, V, U = "none";
				b0 && b0.linearGradient ? V = "gradient" : b0 && b0.radialGradient && (V = "pattern");
				if(V) {
					var T, S, R = b0.linearGradient || b0.radialGradient,
						Q, P, B, M, O, F = "",
						b0 = b0.stops,
						H, K = [],
						J = function() {
							W = ['<fill colors="' + K.join(",") + '" opacity="', B, '" o:opacity2="', P, '" type="', V, '" ', F, 'focus="100%" method="any" />'];
							G(Z.prepVML(W), null, null, bb)
						};
					Q = b0[0];
					H = b0[b0.length - 1];
					Q[0] > 0 && b0.unshift([0, Q[1]]);
					H[0] < 1 && b0.push([1, H[1]]);
					aw(b0, function(s, p) {
						X.test(s[1]) ? (Y = bf(s[1]), T = Y.get("rgb"), S = Y.get("a")) : (T = s[1], S = 1);
						K.push(s[0] * 100 + "% " + T);
						p ? (B = S, M = T) : (P = S, O = T)
					});
					if(ab === "fill") {
						if(V === "gradient") {
							ab = R.x1 || R[0] || 0, b0 = R.y1 || R[1] || 0, Q = R.x2 || R[2] || 0, R = R.y2 || R[3] || 0, F = 'angle="' + (90 - aM.atan((R - b0) / (Q - ab)) * 180 / bo) + '"', J()
						} else {
							var U = R.r,
								q = U * 2,
								E = U * 2,
								I = R.cx,
								N = R.cy,
								L = bb.radialReference,
								D, U = function() {
									L && (D = aa.getBBox(), I += (L[0] - D.x) / D.width - 0.5, N += (L[1] - D.y) / D.height - 0.5, q *= L[2] / D.width, E *= L[2] / D.height);
									F = 'src="' + aS.global.VMLRadialGradientURL + '" size="' + q + "," + E + '" origin="0.5,0.5" position="' + I + "," + N + '" color2="' + O + '" ';
									J()
								};
							aa.added ? U() : aa.onAdd = U;
							U = M
						}
					} else {
						U = T
					}
				} else {
					if(X.test(b0) && bb.tagName !== "IMG") {
						Y = bf(b0), aa[ab + "-opacitySetter"](Y.get("a"), ab, bb), U = Y.get("rgb")
					} else {
						U = bb.getElementsByTagName(ab);
						if(U.length) {
							U[0].opacity = 1, U[0].type = "solid"
						}
						U = b0
					}
				}
				return U
			},
			prepVML: function(q) {
				var p = this.isIE8,
					q = q.join("");
				p ? (q = q.replace("/>", ' xmlns="urn:schemas-microsoft-com:vml" />'), q = q.indexOf('style="') === -1 ? q.replace("/>", ' style="display:inline-block;behavior:url(#default#VML);" />') : q.replace('style="', 'style="display:inline-block;behavior:url(#default#VML);')) : q = q.replace("<", "<hcv:");
				return q
			},
			text: af.prototype.html,
			path: function(q) {
				var p = {
					coordsize: "10 10"
				};
				k(q) ? p.d = q : bE(q) && aq(p, q);
				return this.createElement("shape").attr(p)
			},
			circle: function(q, p, t) {
				var s = this.symbol("circle");
				if(bE(q)) {
					t = q.r, p = q.y, q = q.x
				}
				s.isCircle = !0;
				s.r = t;
				return s.attr({
					x: q,
					y: p
				})
			},
			g: function(q) {
				var p;
				q && (p = {
					className: "highcharts-" + q,
					"class": "highcharts-" + q
				});
				return this.createElement(aL).attr(p)
			},
			image: function(q, p, x, u, t) {
				var s = this.createElement("img").attr({
					src: q
				});
				arguments.length > 1 && s.attr({
					x: p,
					y: x,
					width: u,
					height: t
				});
				return s
			},
			createElement: function(p) {
				return p === "rect" ? this.symbol(p) : af.prototype.createElement.call(this, p)
			},
			invertChild: function(q, p) {
				var u = this,
					t = p.style,
					s = q.tagName === "IMG" && q.style;
				a1(q, {
					flip: "x",
					left: bl(t.width) - (s ? bl(s.top) : 1),
					top: bl(t.height) - (s ? bl(s.left) : 1),
					rotation: -90
				});
				aw(q.childNodes, function(x) {
					u.invertChild(x, q)
				})
			},
			symbols: {
				arc: function(D, C, B, A, y) {
					var x = y.start,
						u = y.end,
						t = y.r || B || A,
						B = y.innerR,
						A = aQ(x),
						s = g(x),
						q = aQ(u),
						p = g(u);
					if(u - x === 0) {
						return ["x"]
					}
					x = ["wa", D - t, C - t, D + t, C + t, D + t * A, C + t * s, D + t * q, C + t * p];
					y.open && !B && x.push("e", aP, D, C);
					x.push("at", D - B, C - B, D + B, C + B, D + B * q, C + B * p, D + B * A, C + B * s, "x", "e");
					x.isArc = !0;
					return x
				},
				circle: function(q, p, u, t, s) {
					s && (u = t = 2 * s.r);
					s && s.isCircle && (q -= u / 2, p -= t / 2);
					return ["wa", q, p, q + u, p + t, q + u, p + t / 2, q + u, p + t / 2, "e"]
				},
				rect: function(q, p, u, t, s) {
					return af.prototype.symbols[!av(s) || !s.r ? "square" : "callout"].call(0, q, p, u, t, s)
				}
			}
		};
		at.VMLRenderer = a3 = function() {
			this.init.apply(this, arguments)
		};
		a3.prototype = bg(af.prototype, aC);
		f = a3
	}
	af.prototype.measureSpanWidth = function(q, p) {
		var t = ap.createElement("span"),
			s;
		s = ap.createTextNode(q);
		t.appendChild(s);
		a1(t, p);
		this.box.appendChild(t);
		s = t.offsetWidth;
		bt(t);
		return s
	};
	var aJ;
	if(bT) {
		at.CanVGRenderer = a3 = function() {
			bh = "http://www.w3.org/1999/xhtml"
		}, a3.prototype.symbols = {}, aJ = function() {
			function q() {
				var s = p.length,
					t;
				for(t = 0; t < s; t++) {
					p[t]()
				}
				p = []
			}
			var p = [];
			return {
				push: function(x, u) {
					if(p.length === 0) {
						var t = ap.getElementsByTagName("head")[0],
							s = ap.createElement("script");
						s.type = "text/javascript";
						s.src = u;
						s.onload = q;
						t.appendChild(s)
					}
					p.push(x)
				}
			}
		}(), f = a3
	}
	w.prototype = {
		addLabel: function() {
			var D = this.axis,
				C = D.options,
				B = D.chart,
				A = D.categories,
				y = D.names,
				x = this.pos,
				u = C.labels,
				t = D.tickPositions,
				s = x === t[0],
				q = x === t[t.length - 1],
				y = A ? ax(A[x], y[x], x) : x,
				A = this.label,
				t = t.info,
				p;
			D.isDatetimeAxis && t && (p = C.dateTimeLabelFormats[t.higherRanks[x] || t.unitName]);
			this.isFirst = s;
			this.isLast = q;
			C = D.labelFormatter.call({
				axis: D,
				chart: B,
				isFirst: s,
				isLast: q,
				dateTimeLabelFormat: p,
				value: D.isLog ? bv(D.lin2log(y)) : y
			});
			av(A) ? A && A.attr({
				text: C
			}) : (this.labelLength = (this.label = A = av(C) && u.enabled ? B.renderer.text(C, 0, 0, u.useHTML).css(bg(u.style)).add(D.labelGroup) : null) && A.getBBox().width, this.rotation = 0)
		},
		getLabelSize: function() {
			return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0
		},
		handleOverflow: function(I) {
			var H = this.axis,
				F = I.x,
				E = H.chart.chartWidth,
				D = H.chart.spacing,
				C = ax(H.labelLeft, bd(H.pos, D[3])),
				D = ax(H.labelRight, au(H.pos + H.len, E - D[1])),
				B = this.label,
				A = this.rotation,
				y = {
					left: 0,
					center: 0.5,
					right: 1
				}[H.labelAlign],
				x = B.getBBox().width,
				u = H.getSlotWidth(),
				t = u,
				s = 1,
				q, p = {};
			if(A) {
				A < 0 && F - y * x < C ? q = bk(F / aQ(A * j) - C) : A > 0 && F + y * x > D && (q = bk((E - F) / aQ(A * j)))
			} else {
				if(E = F + (1 - y) * x, F - y * x < C ? t = I.x + t * (1 - y) - C : E > D && (t = D - I.x + t * y, s = -1), t = bd(u, t), t < u && H.labelAlign === "center" && (I.x += s * (u - t - y * (u - bd(x, t)))), x > t || H.autoRotation && B.styles.width) {
					q = t
				}
			}
			if(q) {
				p.width = q;
				if(!H.options.labels.style.textOverflow) {
					p.textOverflow = "ellipsis"
				}
				B.css(p)
			}
		},
		getPosition: function(q, p, y, x) {
			var u = this.axis,
				t = u.chart,
				s = x && t.oldChartHeight || t.chartHeight;
			return {
				x: q ? u.translate(p + y, null, null, x) + u.transB : u.left + u.offset + (u.opposite ? (x && t.oldChartWidth || t.chartWidth) - u.right - u.left : 0),
				y: q ? s - u.bottom + u.offset - (u.opposite ? u.height : 0) : s - u.translate(p + y, null, null, x) - u.transB
			}
		},
		getLabelPosition: function(H, F, E, D, C, B, A, y) {
			var x = this.axis,
				u = x.transA,
				t = x.reversed,
				s = x.staggerLines,
				q = x.tickRotCorr || {
					x: 0,
					y: 0
				},
				p = C.y;
			av(p) || (p = x.side === 0 ? E.rotation ? -8 : -E.getBBox().height : x.side === 2 ? q.y + 8 : aQ(E.rotation * j) * (q.y - E.getBBox(!1, 0).height / 2));
			H = H + C.x + q.x - (B && D ? B * u * (t ? -1 : 1) : 0);
			F = F + p - (B && !D ? B * u * (t ? 1 : -1) : 0);
			s && (E = A / (y || 1) % s, x.opposite && (E = s - E - 1), F += E * (x.labelOffset / s));
			return {
				x: H,
				y: bk(F)
			}
		},
		getMarkPath: function(q, p, x, u, t, s) {
			return s.crispLine([aP, q, p, aU, q + (t ? 0 : -x), p + (t ? x : 0)], u)
		},
		render: function(V, U, T) {
			var S = this.axis,
				R = S.options,
				Q = S.chart.renderer,
				P = S.horiz,
				O = this.type,
				N = this.label,
				M = this.pos,
				L = R.labels,
				K = this.gridLine,
				J = O ? O + "Grid" : "grid",
				I = O ? O + "Tick" : "tick",
				H = R[J + "LineWidth"],
				u = R[J + "LineColor"],
				E = R[J + "LineDashStyle"],
				J = S.tickSize(I),
				I = R[I + "Color"],
				F = this.mark,
				A = L.step,
				B = !0,
				D = S.tickmarkOffset,
				C = this.getPosition(P, M, D, U),
				p = C.x,
				C = C.y,
				y = P && p === S.pos + S.len || !P && C === S.pos ? -1 : 1,
				T = ax(T, 1);
			this.isActive = !0;
			if(H) {
				M = S.getPlotLinePath(M + D, H * y, U, !0);
				if(K === bn) {
					K = {
						stroke: u,
						"stroke-width": H
					};
					if(E) {
						K.dashstyle = E
					}
					if(!O) {
						K.zIndex = 1
					}
					if(U) {
						K.opacity = 0
					}
					this.gridLine = K = H ? Q.path(M).attr(K).add(S.gridGroup) : null
				}
				if(!U && K && M) {
					K[this.isNew ? "attr" : "animate"]({
						d: M,
						opacity: T
					})
				}
			}
			if(J) {
				S.opposite && (J[0] = -J[0]), O = this.getMarkPath(p, C, J[0], J[1] * y, P, Q), F ? F.animate({
					d: O,
					opacity: T
				}) : this.mark = Q.path(O).attr({
					stroke: I,
					"stroke-width": J[1],
					opacity: T
				}).add(S.axisGroup)
			}
			if(N && a6(p)) {
				N.xy = C = this.getLabelPosition(p, C, N, P, L, D, V, A), this.isFirst && !this.isLast && !ax(R.showFirstLabel, 1) || this.isLast && !this.isFirst && !ax(R.showLastLabel, 1) ? B = !1 : P && !S.isRadial && !L.step && !L.rotation && !U && T !== 0 && this.handleOverflow(C), A && V % A && (B = !1), B && a6(C.y) ? (C.opacity = T, N[this.isNew ? "attr" : "animate"](C)) : (aj(N), N.attr("y", -9999)), this.isNew = !1
			}
		},
		destroy: function() {
			bM(this, this.axis)
		}
	};
	at.PlotLineOrBand = function(q, p) {
		this.axis = q;
		if(p) {
			this.options = p, this.id = p.id
		}
	};
	at.PlotLineOrBand.prototype = {
		render: function() {
			var O = this,
				N = O.axis,
				M = N.horiz,
				L = O.options,
				K = L.label,
				J = O.label,
				I = L.width,
				H = L.to,
				F = L.from,
				E = av(F) && av(H),
				D = L.value,
				C = L.dashStyle,
				B = O.svgElem,
				A = [],
				y, p = L.color,
				u = ax(L.zIndex, 0),
				x = L.events,
				s = {},
				t = N.chart.renderer,
				A = N.log2lin;
			N.isLog && (F = A(F), H = A(H), D = A(D));
			if(I) {
				if(A = N.getPlotLinePath(D, I), s = {
						stroke: p,
						"stroke-width": I
					}, C) {
					s.dashstyle = C
				}
			} else {
				if(E) {
					A = N.getPlotBandPath(F, H, L);
					if(p) {
						s.fill = p
					}
					if(L.borderWidth) {
						s.stroke = L.borderColor, s["stroke-width"] = L.borderWidth
					}
				} else {
					return
				}
			}
			s.zIndex = u;
			if(B) {
				if(A) {
					B.show(), B.animate({
						d: A
					})
				} else {
					if(B.hide(), J) {
						O.label = J = J.destroy()
					}
				}
			} else {
				if(A && A.length && (O.svgElem = B = t.path(A).attr(s).add(), x)) {
					for(y in L = function(q) {
							B.on(q, function(P) {
								x[q].apply(O, [P])
							})
						}, x) {
						L(y)
					}
				}
			}
			K && av(K.text) && A && A.length && N.width > 0 && N.height > 0 && !A.flat ? (K = bg({
				align: M && E && "center",
				x: M ? !E && 4 : 10,
				verticalAlign: !M && E && "middle",
				y: M ? E ? 16 : 10 : E ? 6 : -4,
				rotation: M && !E && 90
			}, K), this.renderLabel(K, A, E, u)) : J && J.hide();
			return O
		},
		renderLabel: function(q, p, x, u) {
			var t = this.label,
				s = this.axis.chart.renderer;
			if(!t) {
				t = {
					align: q.textAlign || q.align,
					rotation: q.rotation
				}, t.zIndex = u, this.label = t = s.text(q.text, 0, 0, q.useHTML).attr(t).css(q.style).add()
			}
			u = [p[1], p[4], x ? p[6] : p[1]];
			p = [p[2], p[5], x ? p[7] : p[2]];
			x = bq(u);
			s = bq(p);
			t.align(q, !1, {
				x: x,
				y: s,
				width: bD(u) - x,
				height: bD(p) - s
			});
			t.show()
		},
		destroy: function() {
			bX(this.axis.plotLinesAndBands, this);
			delete this.axis;
			bM(this)
		}
	};
	var aB = at.Axis = function() {
		this.init.apply(this, arguments)
	};
	aB.prototype = {
		defaultOptions: {
			dateTimeLabelFormats: {
				millisecond: "%H:%M:%S.%L",
				second: "%H:%M:%S",
				minute: "%H:%M",
				hour: "%H:%M",
				day: "%e. %b",
				week: "%e. %b",
				month: "%b '%y",
				year: "%Y"
			},
			endOnTick: !1,
			gridLineColor: "#D8D8D8",
			labels: {
				enabled: !0,
				style: {
					color: "#606060",
					cursor: "default",
					fontSize: "11px"
				},
				x: 0
			},
			lineColor: "#C0D0E0",
			lineWidth: 1,
			minPadding: 0.01,
			maxPadding: 0.01,
			minorGridLineColor: "#E0E0E0",
			minorGridLineWidth: 1,
			minorTickColor: "#A0A0A0",
			minorTickLength: 2,
			minorTickPosition: "outside",
			startOfWeek: 1,
			startOnTick: !1,
			tickColor: "#C0D0E0",
			tickLength: 10,
			tickmarkPlacement: "between",
			tickPixelInterval: 100,
			tickPosition: "outside",
			title: {
				align: "middle",
				style: {
					color: "#707070"
				}
			},
			type: "linear"
		},
		defaultYAxisOptions: {
			endOnTick: !0,
			gridLineWidth: 1,
			tickPixelInterval: 72,
			showLastLabel: !0,
			labels: {
				x: -8
			},
			lineWidth: 0,
			maxPadding: 0.05,
			minPadding: 0.05,
			startOnTick: !0,
			title: {
				rotation: 270,
				text: "Values"
			},
			stackLabels: {
				enabled: !1,
				formatter: function() {
					return at.numberFormat(this.total, -1)
				},
				style: bg(bP.line.dataLabels.style, {
					color: "#000000"
				})
			}
		},
		defaultLeftAxisOptions: {
			labels: {
				x: -15
			},
			title: {
				rotation: 270
			}
		},
		defaultRightAxisOptions: {
			labels: {
				x: 15
			},
			title: {
				rotation: 90
			}
		},
		defaultBottomAxisOptions: {
			labels: {
				autoRotation: [-45],
				x: 0
			},
			title: {
				rotation: 0
			}
		},
		defaultTopAxisOptions: {
			labels: {
				autoRotation: [-45],
				x: 0
			},
			title: {
				rotation: 0
			}
		},
		init: function(q, p) {
			var x = p.isX;
			this.chart = q;
			this.horiz = q.inverted ? !x : x;
			this.coll = (this.isXAxis = x) ? "xAxis" : "yAxis";
			this.opposite = p.opposite;
			this.side = p.side || (this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3);
			this.setOptions(p);
			var u = this.options,
				t = u.type;
			this.labelFormatter = u.labels.formatter || this.defaultLabelFormatter;
			this.userOptions = p;
			this.minPixelPadding = 0;
			this.reversed = u.reversed;
			this.visible = u.visible !== !1;
			this.zoomEnabled = u.zoomEnabled !== !1;
			this.categories = u.categories || t === "category";
			this.names = this.names || [];
			this.isLog = t === "logarithmic";
			this.isDatetimeAxis = t === "datetime";
			this.isLinked = av(u.linkedTo);
			this.ticks = {};
			this.labelEdge = [];
			this.minorTicks = {};
			this.plotLinesAndBands = [];
			this.alternateBands = {};
			this.len = 0;
			this.minRange = this.userMinRange = u.minRange || u.maxZoom;
			this.range = u.range;
			this.offset = u.offset || 0;
			this.stacks = {};
			this.oldStacks = {};
			this.stacksTouched = 0;
			this.min = this.max = null;
			this.crosshair = ax(u.crosshair, aK(q.options.tooltip.crosshairs)[x ? 0 : 1], !1);
			var s, u = this.options.events;
			ah(this, q.axes) === -1 && (x && !this.isColorAxis ? q.axes.splice(q.xAxis.length, 0, this) : q.axes.push(this), q[this.coll].push(this));
			this.series = this.series || [];
			if(q.inverted && x && this.reversed === bn) {
				this.reversed = !0
			}
			this.removePlotLine = this.removePlotBand = this.removePlotBandOrLine;
			for(s in u) {
				a0(this, s, u[s])
			}
			if(this.isLog) {
				this.val2lin = this.log2lin, this.lin2val = this.lin2log
			}
		},
		setOptions: function(p) {
			this.options = bg(this.defaultOptions, this.isXAxis ? {} : this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], bg(aS[this.coll], p))
		},
		defaultLabelFormatter: function() {
			var q = this.axis,
				p = this.value,
				A = q.categories,
				y = this.dateTimeLabelFormat,
				x = aS.lang.numericSymbols,
				u = x && x.length,
				t, s = q.options.labels.format,
				q = q.isLog ? p : q.tickInterval;
			if(s) {
				t = bI(s, this)
			} else {
				if(A) {
					t = p
				} else {
					if(y) {
						t = d(y, p)
					} else {
						if(u && q >= 1000) {
							for(; u-- && t === bn;) {
								A = Math.pow(1000, u + 1), q >= A && p * 10 % A === 0 && x[u] !== null && p !== 0 && (t = at.numberFormat(p / A, -1) + x[u])
							}
						}
					}
				}
			}
			t === bn && (t = aW(p) >= 10000 ? at.numberFormat(p, -1) : at.numberFormat(p, -1, bn, ""));
			return t
		},
		getSeriesExtremes: function() {
			var q = this,
				p = q.chart;
			q.hasVisibleSeries = !1;
			q.dataMin = q.dataMax = q.threshold = null;
			q.softThreshold = !q.isXAxis;
			q.buildStacks && q.buildStacks();
			aw(q.series, function(x) {
				if(x.visible || !p.options.chart.ignoreHiddenSeries) {
					var u = x.options,
						t = u.threshold,
						s;
					q.hasVisibleSeries = !0;
					q.isLog && t <= 0 && (t = null);
					if(q.isXAxis) {
						if(u = x.xData, u.length) {
							x = bq(u), !a6(x) && !(x instanceof bC) && (u = a9(u, function(y) {
								return a6(y)
							}), x = bq(u)), q.dataMin = bd(ax(q.dataMin, u[0]), x), q.dataMax = au(ax(q.dataMax, u[0]), bD(u))
						}
					} else {
						x.getExtremes();
						s = x.dataMax;
						x = x.dataMin;
						if(av(x) && av(s)) {
							q.dataMin = bd(ax(q.dataMin, x), x), q.dataMax = au(ax(q.dataMax, s), s)
						}
						if(av(t)) {
							q.threshold = t
						}
						if(!u.softThreshold || q.isLog) {
							q.softThreshold = !1
						}
					}
				}
			})
		},
		translate: function(D, C, B, A, y, x) {
			var u = this.linkedParent || this,
				t = 1,
				s = 0,
				q = A ? u.oldTransA : u.transA,
				A = A ? u.oldMin : u.min,
				p = u.minPixelPadding,
				y = (u.isOrdinal || u.isBroken || u.isLog && y) && u.lin2val;
			if(!q) {
				q = u.transA
			}
			if(B) {
				t *= -1, s = u.len
			}
			u.reversed && (t *= -1, s -= t * (u.sector || u.len));
			C ? (D = D * t + s, D -= p, D = D / q + A, y && (D = u.lin2val(D))) : (y && (D = u.val2lin(D)), x === "between" && (x = 0.5), D = t * (D - A) * q + s + t * p + (a6(x) ? q * x * u.pointRange : 0));
			return D
		},
		toPixels: function(q, p) {
			return this.translate(q, !1, !this.horiz, null, !0) + (p ? 0 : this.pos)
		},
		toValue: function(q, p) {
			return this.translate(q - (p ? 0 : this.pos), !0, !this.horiz, null, !0)
		},
		getPlotLinePath: function(H, F, E, D, C) {
			var B = this.chart,
				A = this.left,
				y = this.top,
				x, u, t = E && B.oldChartHeight || B.chartHeight,
				s = E && B.oldChartWidth || B.chartWidth,
				q;
			x = this.transB;
			var p = function(J, I, K) {
					if(J < I || J > K) {
						D ? J = bd(au(I, J), K) : q = !0
					}
					return J
				},
				C = ax(C, this.translate(H, null, null, E)),
				H = E = bk(C + x);
			x = u = bk(t - C - x);
			a6(C) ? this.horiz ? (x = y, u = t - this.bottom, H = E = p(H, A, A + this.width)) : (H = A, E = s - this.right, x = u = p(x, y, y + this.height)) : q = !0;
			return q && !D ? null : B.renderer.crispLine([aP, H, x, aU, E, u], F || 1)
		},
		getLinearTickPositions: function(q, p, y) {
			var x, u = bv(aR(p / q) * q),
				t = bv(am(y / q) * q),
				s = [];
			if(p === y && a6(p)) {
				return [p]
			}
			for(p = u; p <= t;) {
				s.push(p);
				p = bv(p + q);
				if(p === x) {
					break
				}
				x = p
			}
			return s
		},
		getMinorTickPositions: function() {
			var q = this.options,
				p = this.tickPositions,
				y = this.minorTickInterval,
				x = [],
				u, t = this.pointRangePadding || 0;
			u = this.min - t;
			var t = this.max + t,
				s = t - u;
			if(s && s / y < this.len / 3) {
				if(this.isLog) {
					t = p.length;
					for(u = 1; u < t; u++) {
						x = x.concat(this.getLogTickPositions(y, p[u - 1], p[u], !0))
					}
				} else {
					if(this.isDatetimeAxis && q.minorTickInterval === "auto") {
						x = x.concat(this.getTimeTicks(this.normalizeTimeTickInterval(y), u, t, q.startOfWeek))
					} else {
						for(p = u + (p[0] - u) % y; p <= t; p += y) {
							x.push(p)
						}
					}
				}
			}
			x.length !== 0 && this.trimTicks(x, q.startOnTick, q.endOnTick);
			return x
		},
		adjustForMinRange: function() {
			var D = this.options,
				C = this.min,
				B = this.max,
				A, y = this.dataMax - this.dataMin >= this.minRange,
				x, u, t, s, q, p;
			if(this.isXAxis && this.minRange === bn && !this.isLog) {
				av(D.min) || av(D.max) ? this.minRange = null : (aw(this.series, function(E) {
					s = E.xData;
					for(u = q = E.xIncrement ? 1 : s.length - 1; u > 0; u--) {
						if(t = s[u] - s[u - 1], x === bn || t < x) {
							x = t
						}
					}
				}), this.minRange = bd(x * 5, this.dataMax - this.dataMin))
			}
			if(B - C < this.minRange) {
				p = this.minRange;
				A = (p - B + C) / 2;
				A = [C - A, ax(D.min, C - A)];
				if(y) {
					A[2] = this.dataMin
				}
				C = bD(A);
				B = [C + p, ax(D.max, C + p)];
				if(y) {
					B[2] = this.dataMax
				}
				B = bq(B);
				B - C < p && (A[0] = B - p, A[1] = ax(D.min, B - p), C = bD(A))
			}
			this.min = C;
			this.max = B
		},
		getClosest: function() {
			var p;
			this.categories ? p = 1 : aw(this.series, function(q) {
				var s = q.closestPointRange;
				!q.noSharedTooltip && av(s) && (p = av(p) ? bd(p, s) : s)
			});
			return p
		},
		setAxisTranslation: function(D) {
			var C = this,
				B = C.max - C.min,
				A = C.axisPointRange || 0,
				y, x = 0,
				u = 0,
				t = C.linkedParent,
				s = !!C.categories,
				q = C.transA,
				p = C.isXAxis;
			if(p || s || A) {
				if(t ? (x = t.minPointOffset, u = t.pointRangePadding) : (y = C.getClosest(), aw(C.series, function(E) {
						var F = s ? 1 : p ? ax(E.options.pointRange, y, 0) : C.axisPointRange || 0,
							E = E.options.pointPlacement;
						A = au(A, F);
						C.single || (x = au(x, bL(E) ? 0 : F / 2), u = au(u, E === "on" ? 0 : F))
					})), t = C.ordinalSlope && y ? C.ordinalSlope / y : 1, C.minPointOffset = x *= t, C.pointRangePadding = u *= t, C.pointRange = bd(A, B), p) {
					C.closestPointRange = y
				}
			}
			if(D) {
				C.oldTransA = q
			}
			C.translationSlope = C.transA = q = C.len / (B + u || 1);
			C.transB = C.horiz ? C.left : C.bottom;
			C.minPixelPadding = q * x
		},
		minFromRange: function() {
			return this.max - this.range
		},
		setTickInterval: function(N) {
			var M = this,
				L = M.chart,
				K = M.options,
				J = M.isLog,
				I = M.log2lin,
				H = M.isDatetimeAxis,
				F = M.isXAxis,
				E = M.isLinked,
				D = K.maxPadding,
				C = K.minPadding,
				B = K.tickInterval,
				A = K.tickPixelInterval,
				y = M.categories,
				x = M.threshold,
				p = M.softThreshold,
				u, t, q, s;
			!H && !y && !E && this.getTickAmount();
			q = ax(M.userMin, K.min);
			s = ax(M.userMax, K.max);
			E ? (M.linkedParent = L[M.coll][K.linkedTo], L = M.linkedParent.getExtremes(), M.min = ax(L.min, L.dataMin), M.max = ax(L.max, L.dataMax), K.type !== M.linkedParent.options.type && az(11, 1)) : (!p && av(x) && (M.dataMin >= x ? (u = x, C = 0) : M.dataMax <= x && (t = x, D = 0)), M.min = ax(q, u, M.dataMin), M.max = ax(s, t, M.dataMax));
			if(J) {
				!N && bd(M.min, ax(M.dataMin, M.min)) <= 0 && az(10, 1), M.min = bv(I(M.min), 15), M.max = bv(I(M.max), 15)
			}
			if(M.range && av(M.max)) {
				M.userMin = M.min = q = au(M.min, M.minFromRange()), M.userMax = s = M.max, M.range = null
			}
			a8(M, "foundExtremes");
			M.beforePadding && M.beforePadding();
			M.adjustForMinRange();
			if(!y && !M.axisPointRange && !M.usePercentage && !E && av(M.min) && av(M.max) && (I = M.max - M.min)) {
				!av(q) && C && (M.min -= I * C), !av(s) && D && (M.max += I * D)
			}
			if(a6(K.floor)) {
				M.min = au(M.min, K.floor)
			}
			if(a6(K.ceiling)) {
				M.max = bd(M.max, K.ceiling)
			}
			if(p && av(M.dataMin)) {
				if(x = x || 0, !av(q) && M.min < x && M.dataMin >= x) {
					M.min = x
				} else {
					if(!av(s) && M.max > x && M.dataMax <= x) {
						M.max = x
					}
				}
			}
			M.tickInterval = M.min === M.max || M.min === void 0 || M.max === void 0 ? 1 : E && !B && A === M.linkedParent.options.tickPixelInterval ? B = M.linkedParent.tickInterval : ax(B, this.tickAmount ? (M.max - M.min) / au(this.tickAmount - 1, 1) : void 0, y ? 1 : (M.max - M.min) * A / au(M.len, A));
			F && !N && aw(M.series, function(O) {
				O.processData(M.min !== M.oldMin || M.max !== M.oldMax)
			});
			M.setAxisTranslation(!0);
			M.beforeSetTickPositions && M.beforeSetTickPositions();
			if(M.postProcessTickInterval) {
				M.tickInterval = M.postProcessTickInterval(M.tickInterval)
			}
			if(M.pointRange && !B) {
				M.tickInterval = au(M.pointRange, M.tickInterval)
			}
			N = ax(K.minTickInterval, M.isDatetimeAxis && M.closestPointRange);
			if(!B && M.tickInterval < N) {
				M.tickInterval = N
			}
			if(!H && !J && !B) {
				M.tickInterval = ak(M.tickInterval, null, aI(M.tickInterval), ax(K.allowDecimals, !(M.tickInterval > 0.5 && M.tickInterval < 5 && M.max > 1000 && M.max < 9999)), !!this.tickAmount)
			}
			if(!this.tickAmount && this.len) {
				M.tickInterval = M.unsquish()
			}
			this.setTickPositions()
		},
		setTickPositions: function() {
			var q = this.options,
				p, y = q.tickPositions,
				x = q.tickPositioner,
				u = q.startOnTick,
				t = q.endOnTick,
				s;
			this.tickmarkOffset = this.categories && q.tickmarkPlacement === "between" && this.tickInterval === 1 ? 0.5 : 0;
			this.minorTickInterval = q.minorTickInterval === "auto" && this.tickInterval ? this.tickInterval / 5 : q.minorTickInterval;
			this.tickPositions = p = y && y.slice();
			if(!p && (p = this.isDatetimeAxis ? this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval, q.units), this.min, this.max, q.startOfWeek, this.ordinalPositions, this.closestPointRange, !0) : this.isLog ? this.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max), p.length > this.len && (p = [p[0], p.pop()]), this.tickPositions = p, x && (x = x.apply(this, [this.min, this.max])))) {
				this.tickPositions = p = x
			}
			if(!this.isLinked) {
				this.trimTicks(p, u, t), this.min === this.max && av(this.min) && !this.tickAmount && (s = !0, this.min -= 0.5, this.max += 0.5), this.single = s, !y && !x && this.adjustTickAmount()
			}
		},
		trimTicks: function(q, p, x) {
			var u = q[0],
				t = q[q.length - 1],
				s = this.minPointOffset || 0;
			if(p) {
				this.min = u
			} else {
				for(; this.min - s > q[0];) {
					q.shift()
				}
			}
			if(x) {
				this.max = t
			} else {
				for(; this.max + s < q[q.length - 1];) {
					q.pop()
				}
			}
			q.length === 0 && av(u) && q.push((t + u) / 2)
		},
		alignToOthers: function() {
			var q = {},
				p, s = this.options;
			this.chart.options.chart.alignTicks !== !1 && s.alignTicks !== !1 && aw(this.chart[this.coll], function(u) {
				var t = u.options,
					t = [u.horiz ? t.left : t.top, t.width, t.height, t.pane].join(",");
				u.series.length && (q[t] ? p = !0 : q[t] = 1)
			});
			return p
		},
		getTickAmount: function() {
			var q = this.options,
				p = q.tickAmount,
				s = q.tickPixelInterval;
			!av(q.tickInterval) && this.len < s && !this.isRadial && !this.isLog && q.startOnTick && q.endOnTick && (p = 2);
			!p && this.alignToOthers() && (p = am(this.len / s) + 1);
			if(p < 4) {
				this.finalTickAmt = p, p = 5
			}
			this.tickAmount = p
		},
		adjustTickAmount: function() {
			var q = this.tickInterval,
				p = this.tickPositions,
				u = this.tickAmount,
				t = this.finalTickAmt,
				s = p && p.length;
			if(s < u) {
				for(; p.length < u;) {
					p.push(bv(p[p.length - 1] + q))
				}
				this.transA *= (s - 1) / (u - 1);
				this.max = p[p.length - 1]
			} else {
				s > u && (this.tickInterval *= 2, this.setTickPositions())
			}
			if(av(t)) {
				for(q = u = p.length; q--;) {
					(t === 3 && q % 2 === 1 || t <= 2 && q > 0 && q < u - 1) && p.splice(q, 1)
				}
				this.finalTickAmt = bn
			}
		},
		setScale: function() {
			var q, p;
			this.oldMin = this.min;
			this.oldMax = this.max;
			this.oldAxisLength = this.len;
			this.setAxisSize();
			p = this.len !== this.oldAxisLength;
			aw(this.series, function(s) {
				if(s.isDirtyData || s.isDirty || s.xAxis.isDirty) {
					q = !0
				}
			});
			if(p || q || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax || this.alignToOthers()) {
				if(this.resetStacks && this.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, !this.isDirty) {
					this.isDirty = p || this.min !== this.oldMin || this.max !== this.oldMax
				}
			} else {
				this.cleanStacks && this.cleanStacks()
			}
		},
		setExtremes: function(q, p, y, x, u) {
			var t = this,
				s = t.chart,
				y = ax(y, !0);
			aw(t.series, function(A) {
				delete A.kdTree
			});
			u = aq(u, {
				min: q,
				max: p
			});
			a8(t, "setExtremes", u, function() {
				t.userMin = q;
				t.userMax = p;
				t.eventArgs = u;
				y && s.redraw(x)
			})
		},
		zoom: function(q, p) {
			var x = this.dataMin,
				u = this.dataMax,
				t = this.options,
				s = bd(x, ax(t.min, x)),
				t = au(u, ax(t.max, u));
			this.allowZoomOutside || (av(x) && q <= s && (q = s), av(u) && p >= t && (p = t));
			this.displayBtn = q !== bn || p !== bn;
			this.setExtremes(q, p, !1, bn, {
				trigger: "zoom"
			});
			return !0
		},
		setAxisSize: function() {
			var q = this.chart,
				p = this.options,
				y = p.offsetLeft || 0,
				x = this.horiz,
				u = ax(p.width, q.plotWidth - y + (p.offsetRight || 0)),
				t = ax(p.height, q.plotHeight),
				s = ax(p.top, q.plotTop),
				p = ax(p.left, q.plotLeft + y),
				y = /%$/;
			y.test(t) && (t = Math.round(parseFloat(t) / 100 * q.plotHeight));
			y.test(s) && (s = Math.round(parseFloat(s) / 100 * q.plotHeight + q.plotTop));
			this.left = p;
			this.top = s;
			this.width = u;
			this.height = t;
			this.bottom = q.chartHeight - t - s;
			this.right = q.chartWidth - u - p;
			this.len = au(x ? u : t, 0);
			this.pos = x ? p : s
		},
		getExtremes: function() {
			var q = this.isLog,
				p = this.lin2log;
			return {
				min: q ? bv(p(this.min)) : this.min,
				max: q ? bv(p(this.max)) : this.max,
				dataMin: this.dataMin,
				dataMax: this.dataMax,
				userMin: this.userMin,
				userMax: this.userMax
			}
		},
		getThreshold: function(q) {
			var p = this.isLog,
				t = this.lin2log,
				s = p ? t(this.min) : this.min,
				p = p ? t(this.max) : this.max;
			q === null ? q = s : s > q ? q = s : p < q && (q = p);
			return this.translate(q, 0, 1, 0, 1)
		},
		autoLabelAlign: function(p) {
			p = (ax(p, 0) - this.side * 90 + 720) % 360;
			return p > 15 && p < 165 ? "right" : p > 195 && p < 345 ? "left" : "center"
		},
		tickSize: function(q) {
			var p = this.options,
				t = p[q + "Length"],
				s = ax(p[q + "Width"], q === "tick" && this.isXAxis ? 1 : 0);
			if(s && t) {
				return p[q + "Position"] === "inside" && (t = -t), [t, s]
			}
		},
		labelMetrics: function() {
			return this.chart.renderer.fontMetrics(this.options.labels.style.fontSize, this.ticks[0] && this.ticks[0].label)
		},
		unsquish: function() {
			var E = this.options.labels,
				D = this.horiz,
				C = this.tickInterval,
				B = C,
				A = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / C),
				y, x = E.rotation,
				u = this.labelMetrics(),
				t, s = Number.MAX_VALUE,
				q, p = function(F) {
					F /= A || 1;
					F = F > 1 ? am(F) : 1;
					return F * C
				};
			D ? (q = !E.staggerLines && !E.step && (av(x) ? [x] : A < ax(E.autoRotationLimit, 80) && E.autoRotation)) && aw(q, function(H) {
				var F;
				if(H === x || H && H >= -90 && H <= 90) {
					t = p(aW(u.h / g(j * H))), F = t + aW(H / 360), F < s && (s = F, y = H, B = t)
				}
			}) : E.step || (B = p(u.h));
			this.autoRotation = q;
			this.labelRotation = ax(y, x);
			return B
		},
		getSlotWidth: function() {
			var q = this.chart,
				p = this.horiz,
				u = this.options.labels,
				t = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1),
				s = q.margin[3];
			return p && (u.step || 0) < 2 && !u.rotation && (this.staggerLines || 1) * q.plotWidth / t || !p && (s && s - q.spacing[3] || q.chartWidth * 0.33)
		},
		renderUnsquish: function() {
			var I = this.chart,
				H = I.renderer,
				F = this.tickPositions,
				E = this.ticks,
				D = this.options.labels,
				C = this.horiz,
				B = this.getSlotWidth(),
				A = au(1, bk(B - 2 * (D.padding || 5))),
				y = {},
				x = this.labelMetrics(),
				u = D.style.textOverflow,
				t, s = 0,
				q, p;
			if(!bL(D.rotation)) {
				y.rotation = D.rotation || 0
			}
			if(this.autoRotation) {
				aw(F, function(J) {
					if((J = E[J]) && J.labelLength > s) {
						s = J.labelLength
					}
				}), s > A && s > x.h ? y.rotation = this.labelRotation : this.labelRotation = 0
			} else {
				if(B && (t = {
						width: A + "px"
					}, !u)) {
					t.textOverflow = "clip";
					for(q = F.length; !C && q--;) {
						if(p = F[q], A = E[p].label) {
							if(A.styles.textOverflow === "ellipsis" ? A.css({
									textOverflow: "clip"
								}) : E[p].labelLength > B && A.css({
									width: B + "px"
								}), A.getBBox().height > this.len / F.length - (x.h - x.f)) {
								A.specCss = {
									textOverflow: "ellipsis"
								}
							}
						}
					}
				}
			}
			if(y.rotation && (t = {
					width: (s > I.chartHeight * 0.5 ? I.chartHeight * 0.33 : I.chartHeight) + "px"
				}, !u)) {
				t.textOverflow = "ellipsis"
			}
			if(this.labelAlign = D.align || this.autoLabelAlign(this.labelRotation)) {
				y.align = this.labelAlign
			}
			aw(F, function(K) {
				var J = (K = E[K]) && K.label;
				if(J) {
					J.attr(y), t && J.css(bg(t, J.specCss)), delete J.specCss, K.rotation = y.rotation
				}
			});
			this.tickRotCorr = H.rotCorr(x.b, this.labelRotation || 0, this.side !== 0)
		},
		hasData: function() {
			return this.hasVisibleSeries || av(this.min) && av(this.max) && !!this.tickPositions
		},
		getOffset: function() {
			var S = this,
				R = S.chart,
				Q = R.renderer,
				P = S.options,
				O = S.tickPositions,
				N = S.ticks,
				M = S.horiz,
				L = S.side,
				K = R.inverted ? [1, 0, 3, 2][L] : L,
				J, I, H = 0,
				F, E = 0,
				D = P.title,
				q = P.labels,
				C = 0,
				A = S.opposite,
				t = R.axisOffset,
				R = R.clipOffset,
				y = [-1, 1, 1, -1][L],
				s, B = S.axisParent,
				p = this.tickSize("tick");
			J = S.hasData();
			S.showAxis = I = J || ax(P.showEmpty, !0);
			S.staggerLines = S.horiz && q.staggerLines;
			if(!S.axisGroup) {
				S.gridGroup = Q.g("grid").attr({
					zIndex: P.gridZIndex || 1
				}).add(B), S.axisGroup = Q.g("axis").attr({
					zIndex: P.zIndex || 2
				}).add(B), S.labelGroup = Q.g("axis-labels").attr({
					zIndex: q.zIndex || 7
				}).addClass("highcharts-" + S.coll.toLowerCase() + "-labels").add(B)
			}
			if(J || S.isLinked) {
				if(aw(O, function(u) {
						N[u] ? N[u].addLabel() : N[u] = new w(S, u)
					}), S.renderUnsquish(), q.reserveSpace !== !1 && (L === 0 || L === 2 || {
						1: "left",
						3: "right"
					}[L] === S.labelAlign || S.labelAlign === "center") && aw(O, function(u) {
						C = au(N[u].getLabelSize(), C)
					}), S.staggerLines) {
					C *= S.staggerLines, S.labelOffset = C * (S.opposite ? -1 : 1)
				}
			} else {
				for(s in N) {
					N[s].destroy(), delete N[s]
				}
			}
			if(D && D.text && D.enabled !== !1) {
				if(!S.axisTitle) {
					(s = D.textAlign) || (s = (M ? {
						low: "left",
						middle: "center",
						high: "right"
					} : {
						low: A ? "right" : "left",
						middle: "center",
						high: A ? "left" : "right"
					})[D.align]), S.axisTitle = Q.text(D.text, 0, 0, D.useHTML).attr({
						zIndex: 7,
						rotation: D.rotation || 0,
						align: s
					}).addClass("highcharts-" + this.coll.toLowerCase() + "-title").css(D.style).add(S.axisGroup), S.axisTitle.isNew = !0
				}
				if(I) {
					H = S.axisTitle.getBBox()[M ? "height" : "width"], F = D.offset, E = av(F) ? 0 : ax(D.margin, M ? 5 : 10)
				}
				S.axisTitle[I ? "show" : "hide"](!0)
			}
			S.offset = y * ax(P.offset, t[L]);
			S.tickRotCorr = S.tickRotCorr || {
				x: 0,
				y: 0
			};
			Q = L === 0 ? -S.labelMetrics().h : L === 2 ? S.tickRotCorr.y : 0;
			E = Math.abs(C) + E;
			C && (E -= Q, E += y * (M ? ax(q.y, S.tickRotCorr.y + y * 8) : q.x));
			S.axisTitleMargin = ax(F, E);
			t[L] = au(t[L], S.axisTitleMargin + H + y * S.offset, E, J && O.length && p ? p[0] : 0);
			P = P.offset ? 0 : aR(P.lineWidth / 2) * 2;
			R[K] = au(R[K], P)
		},
		getLinePath: function(q) {
			var p = this.chart,
				x = this.opposite,
				u = this.offset,
				t = this.horiz,
				s = this.left + (x ? this.width : 0) + u,
				u = p.chartHeight - this.bottom - (x ? this.height : 0) + u;
			x && (q *= -1);
			return p.renderer.crispLine([aP, t ? this.left : s, t ? u : this.top, aU, t ? p.chartWidth - this.right : s, t ? u : p.chartHeight - this.bottom], q)
		},
		getTitlePosition: function() {
			var D = this.horiz,
				C = this.left,
				B = this.top,
				A = this.len,
				y = this.options.title,
				x = D ? C : B,
				u = this.opposite,
				t = this.offset,
				s = y.x || 0,
				q = y.y || 0,
				p = this.chart.renderer.fontMetrics(y.style.fontSize).f,
				A = {
					low: x + (D ? 0 : A),
					middle: x + A / 2,
					high: x + (D ? A : 0)
				}[y.align],
				C = (D ? B + this.height : C) + (D ? 1 : -1) * (u ? -1 : 1) * this.axisTitleMargin + (this.side === 2 ? p : 0);
			return {
				x: D ? A + s : C + (u ? this.width : 0) + t + s,
				y: D ? C + q - (u ? this.height : 0) + t : A + q
			}
		},
		render: function() {
			var S = this,
				R = S.chart,
				Q = R.renderer,
				P = S.options,
				O = S.isLog,
				N = S.lin2log,
				M = S.isLinked,
				L = S.tickPositions,
				K = S.axisTitle,
				J = S.ticks,
				I = S.minorTicks,
				H = S.alternateBands,
				F = P.stackLabels,
				E = P.alternateGridColor,
				D = S.tickmarkOffset,
				q = P.lineWidth,
				B, C = R.hasRendered && a6(S.oldMin),
				u = S.showAxis,
				x = aY(Q.globalAnimation),
				y, A;
			S.labelEdge.length = 0;
			S.overlap = !1;
			aw([J, I, H], function(s) {
				for(var p in s) {
					s[p].isActive = !1
				}
			});
			if(S.hasData() || M) {
				S.minorTickInterval && !S.categories && aw(S.getMinorTickPositions(), function(p) {
					I[p] || (I[p] = new w(S, p, "minor"));
					C && I[p].isNew && I[p].render(null, !0);
					I[p].render(null, !1, 1)
				});
				if(L.length && (aw(L, function(p, s) {
						if(!M || p >= S.min && p <= S.max) {
							J[p] || (J[p] = new w(S, p)), C && J[p].isNew && J[p].render(s, !0, 0.1), J[p].render(s)
						}
					}), D && (S.min === 0 || S.single))) {
					J[-1] || (J[-1] = new w(S, -1, null, !0)), J[-1].render(-1)
				}
				E && aw(L, function(s, p) {
					A = L[p + 1] !== bn ? L[p + 1] + D : S.max - D;
					if(p % 2 === 0 && s < S.max && A <= S.max + (R.polar ? -D : D)) {
						H[s] || (H[s] = new at.PlotLineOrBand(S)), y = s + D, H[s].options = {
							from: O ? N(y) : y,
							to: O ? N(A) : A,
							color: E
						}, H[s].render(), H[s].isActive = !0
					}
				});
				if(!S._addedPlotLB) {
					aw((P.plotLines || []).concat(P.plotBands || []), function(p) {
						S.addPlotBandOrLine(p)
					}), S._addedPlotLB = !0
				}
			}
			aw([J, I, H], function(p) {
				var U, T, t = [],
					s = x.duration;
				for(U in p) {
					if(!p[U].isActive) {
						p[U].render(U, !1, 0), p[U].isActive = !1, t.push(U)
					}
				}
				v(function() {
					for(T = t.length; T--;) {
						p[t[T]] && !p[t[T]].isActive && (p[t[T]].destroy(), delete p[t[T]])
					}
				}, p === H || !R.hasRendered || !s ? 0 : s)
			});
			if(q) {
				B = S.getLinePath(q), S.axisLine ? S.axisLine.animate({
					d: B
				}) : S.axisLine = Q.path(B).attr({
					stroke: P.lineColor,
					"stroke-width": q,
					zIndex: 7
				}).add(S.axisGroup), S.axisLine[u ? "show" : "hide"](!0)
			}
			if(K && u) {
				K[K.isNew ? "attr" : "animate"](S.getTitlePosition()), K.isNew = !1
			}
			F && F.enabled && S.renderStackTotals();
			S.isDirty = !1
		},
		redraw: function() {
			this.visible && (this.render(), aw(this.plotLinesAndBands, function(p) {
				p.render()
			}));
			aw(this.series, function(p) {
				p.isDirty = !0
			})
		},
		destroy: function(q) {
			var p = this,
				u = p.stacks,
				t, s = p.plotLinesAndBands;
			q || aN(p);
			for(t in u) {
				bM(u[t]), u[t] = null
			}
			aw([p.ticks, p.minorTicks, p.alternateBands], function(x) {
				bM(x)
			});
			for(q = s.length; q--;) {
				s[q].destroy()
			}
			aw("stackTotalGroup,axisLine,axisTitle,axisGroup,gridGroup,labelGroup,cross".split(","), function(x) {
				p[x] && (p[x] = p[x].destroy())
			});
			this._addedPlotLB = this.chart._labelPanes = this.ordinalSlope = void 0
		},
		drawCrosshair: function(q, p) {
			var x, u = this.crosshair,
				t, s;
			q || (q = this.cross && this.cross.e);
			if(!this.crosshair || (av(p) || !ax(u.snap, !0)) === !1) {
				this.hideCrosshair()
			} else {
				if(ax(u.snap, !0) ? av(p) && (x = this.isXAxis ? p.plotX : this.len - p.plotY) : x = this.horiz ? q.chartX - this.pos : this.len - q.chartY + this.pos, x = this.isRadial ? this.getPlotLinePath(this.isXAxis ? p.x : ax(p.stackY, p.y)) || null : this.getPlotLinePath(null, null, null, null, x) || null, x === null) {
					this.hideCrosshair()
				} else {
					t = this.categories && !this.isRadial;
					s = ax(u.width, t ? this.transA : 1);
					if(this.cross) {
						this.cross.attr({
							d: x,
							visibility: "visible",
							"stroke-width": s
						})
					} else {
						t = {
							"pointer-events": "none",
							"stroke-width": s,
							stroke: u.color || (t ? "rgba(155,200,255,0.2)" : "#C0C0C0"),
							zIndex: ax(u.zIndex, 2)
						};
						if(u.dashStyle) {
							t.dashstyle = u.dashStyle
						}
						this.cross = this.chart.renderer.path(x).attr(t).add()
					}
					this.cross.e = q
				}
			}
		},
		hideCrosshair: function() {
			this.cross && this.cross.hide()
		}
	};
	aq(aB.prototype, {
		getPlotBandPath: function(q, p) {
			var t = this.getPlotLinePath(p, null, null, !0),
				s = this.getPlotLinePath(q, null, null, !0);
			s && t ? (s.flat = s.toString() === t.toString(), s.push(t[4], t[5], t[1], t[2])) : s = null;
			return s
		},
		addPlotBand: function(p) {
			return this.addPlotBandOrLine(p, "plotBands")
		},
		addPlotLine: function(p) {
			return this.addPlotBandOrLine(p, "plotLines")
		},
		addPlotBandOrLine: function(q, p) {
			var t = (new at.PlotLineOrBand(this, q)).render(),
				s = this.userOptions;
			t && (p && (s[p] = s[p] || [], s[p].push(q)), this.plotLinesAndBands.push(t));
			return t
		},
		removePlotBandOrLine: function(q) {
			for(var p = this.plotLinesAndBands, u = this.options, t = this.userOptions, s = p.length; s--;) {
				p[s].id === q && p[s].destroy()
			}
			aw([u.plotLines || [], t.plotLines || [], u.plotBands || [], t.plotBands || []], function(x) {
				for(s = x.length; s--;) {
					x[s].id === q && bX(x, x[s])
				}
			})
		}
	});
	aB.prototype.getTimeTicks = function(I, H, F, E) {
		var D = [],
			C = {},
			B = aS.global.useUTC,
			A, y = new bC(H - bj(H)),
			x = I.unitRange,
			u = I.count;
		if(av(H)) {
			y[bB](x >= ba.second ? 0 : u * aR(y.getMilliseconds() / u));
			if(x >= ba.second) {
				y[be](x >= ba.minute ? 0 : u * aR(y.getSeconds() / u))
			}
			if(x >= ba.minute) {
				y[aG](x >= ba.hour ? 0 : u * aR(y[n]() / u))
			}
			if(x >= ba.hour) {
				y[ai](x >= ba.day ? 0 : u * aR(y[a]() / u))
			}
			if(x >= ba.day) {
				y[bA](x >= ba.month ? 1 : u * aR(y[ar]() / u))
			}
			x >= ba.month && (y[br](x >= ba.year ? 0 : u * aR(y[ay]() / u)), A = y[z]());
			x >= ba.year && (A -= A % u, y[bQ](A));
			if(x === ba.week) {
				y[bA](y[ar]() - y[bJ]() + ax(E, 1))
			}
			H = 1;
			if(bm || bu) {
				y = y.getTime(), y = new bC(y + bj(y))
			}
			A = y[z]();
			for(var E = y.getTime(), t = y[ay](), s = y[ar](), q = !B || !!bu, p = (ba.day + (B ? bj(y) : y.getTimezoneOffset() * 60000)) % ba.day; E < F;) {
				D.push(E), x === ba.year ? E = bS(A + H * u, 0) : x === ba.month ? E = bS(A, t + H * u) : q && (x === ba.day || x === ba.week) ? E = bS(A, t, s + H * u * (x === ba.day ? 1 : 7)) : E += x * u, H++
			}
			D.push(E);
			aw(a9(D, function(J) {
				return x <= ba.hour && J % ba.day === p
			}), function(J) {
				C[J] = "day"
			})
		}
		D.info = aq(I, {
			higherRanks: C,
			totalRange: x * u
		});
		return D
	};
	aB.prototype.normalizeTimeTickInterval = function(q, p) {
		var y = p || [
				["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
				["second", [1, 2, 5, 10, 15, 30]],
				["minute", [1, 2, 5, 10, 15, 30]],
				["hour", [1, 2, 3, 4, 6, 8, 12]],
				["day", [1, 2]],
				["week", [1, 2]],
				["month", [1, 2, 3, 4, 6]],
				["year", null]
			],
			x = y[y.length - 1],
			u = ba[x[0]],
			t = x[1],
			s;
		for(s = 0; s < y.length; s++) {
			if(x = y[s], u = ba[x[0]], t = x[1], y[s + 1] && q <= (u * t[t.length - 1] + ba[y[s + 1][0]]) / 2) {
				break
			}
		}
		u === ba.year && q < 5 * u && (t = [1, 2, 5]);
		y = ak(q / u, t, x[0] === "year" ? au(aI(q / u), 1) : 1);
		return {
			unitRange: u,
			count: y,
			unitName: x[0]
		}
	};
	aB.prototype.getLogTickPositions = function(H, F, E, D) {
		var C = this.options,
			B = this.len,
			A = this.lin2log,
			y = this.log2lin,
			x = [];
		if(!D) {
			this._minorAutoInterval = null
		}
		if(H >= 0.5) {
			H = bk(H), x = this.getLinearTickPositions(H, F, E)
		} else {
			if(H >= 0.08) {
				for(var B = aR(F), u, t, s, q, p, C = H > 0.3 ? [1, 2, 4] : H > 0.15 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; B < E + 1 && !p; B++) {
					t = C.length;
					for(u = 0; u < t && !p; u++) {
						s = y(A(B) * C[u]), s > F && (!D || q <= E) && q !== bn && x.push(q), q > E && (p = !0), q = s
					}
				}
			} else {
				if(F = A(F), E = A(E), H = C[D ? "minorTickInterval" : "tickInterval"], H = ax(H === "auto" ? null : H, this._minorAutoInterval, (E - F) * (C.tickPixelInterval / (D ? 5 : 1)) / ((D ? B / this.tickPositions.length : B) || 1)), H = ak(H, null, aI(H)), x = aD(this.getLinearTickPositions(H, F, E), y), !D) {
					this._minorAutoInterval = H / 5
				}
			}
		}
		if(!D) {
			this.tickInterval = H
		}
		return x
	};
	aB.prototype.log2lin = function(p) {
		return aM.log(p) / aM.LN10
	};
	aB.prototype.lin2log = function(p) {
		return aM.pow(10, p)
	};
	var al = at.Tooltip = function() {
		this.init.apply(this, arguments)
	};
	al.prototype = {
		init: function(q, p) {
			var u = p.borderWidth,
				t = p.style,
				s = bl(t.padding);
			this.chart = q;
			this.options = p;
			this.crosshairs = [];
			this.now = {
				x: 0,
				y: 0
			};
			this.isHidden = !0;
			this.label = q.renderer.label("", 0, 0, p.shape || "callout", null, null, p.useHTML, null, "tooltip").attr({
				padding: s,
				fill: p.backgroundColor,
				"stroke-width": u,
				r: p.borderRadius,
				zIndex: 8
			}).css(t).css({
				padding: 0
			}).add().attr({
				y: -9000000000
			});
			bT || this.label.shadow(p.shadow);
			this.shared = p.shared
		},
		destroy: function() {
			if(this.label) {
				this.label = this.label.destroy()
			}
			clearTimeout(this.hideTimer);
			clearTimeout(this.tooltipTimeout)
		},
		move: function(q, p, A, y) {
			var x = this,
				u = x.now,
				t = x.options.animation !== !1 && !x.isHidden && (aW(q - u.x) > 1 || aW(p - u.y) > 1),
				s = x.followPointer || x.len > 1;
			aq(u, {
				x: t ? (2 * u.x + q) / 3 : q,
				y: t ? (u.y + p) / 2 : p,
				anchorX: s ? bn : t ? (2 * u.anchorX + A) / 3 : A,
				anchorY: s ? bn : t ? (u.anchorY + y) / 2 : y
			});
			x.label.attr(u);
			if(t) {
				clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function() {
					x && x.move(q, p, A, y)
				}, 32)
			}
		},
		hide: function(q) {
			var p = this;
			clearTimeout(this.hideTimer);
			q = ax(q, this.options.hideDelay, 500);
			if(!this.isHidden) {
				this.hideTimer = v(function() {
					p.label[q ? "fadeOut" : "hide"]();
					p.isHidden = !0
				}, q)
			}
		},
		getAnchor: function(D, C) {
			var B, A = this.chart,
				y = A.inverted,
				x = A.plotTop,
				u = A.plotLeft,
				t = 0,
				s = 0,
				q, p, D = aK(D);
			B = D[0].tooltipPos;
			this.followPointer && C && (C.chartX === bn && (C = A.pointer.normalize(C)), B = [C.chartX - A.plotLeft, C.chartY - x]);
			B || (aw(D, function(E) {
				q = E.series.yAxis;
				p = E.series.xAxis;
				t += E.plotX + (!y && p ? p.left - u : 0);
				s += (E.plotLow ? (E.plotLow + E.plotHigh) / 2 : E.plotY) + (!y && q ? q.top - x : 0)
			}), t /= D.length, s /= D.length, B = [y ? A.plotWidth - s : t, this.shared && !y && D.length > 1 && C ? C.chartY - x : y ? A.plotHeight - t : s]);
			return aD(B, bk)
		},
		getPosition: function(I, H, F) {
			var E = this.chart,
				D = this.distance,
				C = {},
				B = F.h || 0,
				A, y = ["y", E.chartHeight, H, F.plotY + E.plotTop, E.plotTop, E.plotTop + E.plotHeight],
				x = ["x", E.chartWidth, I, F.plotX + E.plotLeft, E.plotLeft, E.plotLeft + E.plotWidth],
				u = !this.followPointer && ax(F.ttBelow, !E.inverted === !!F.negative),
				t = function(R, Q, P, O, N, M) {
					var L = P < O - D,
						J = O + D + P < Q,
						K = O - D - P;
					O += D;
					if(u && J) {
						C[R] = O
					} else {
						if(!u && L) {
							C[R] = K
						} else {
							if(L) {
								C[R] = bd(M - P, K - B < 0 ? K : K - B)
							} else {
								if(J) {
									C[R] = au(N, O + B + P > Q ? O : O + B)
								} else {
									return !1
								}
							}
						}
					}
				},
				s = function(K, J, N, M) {
					var L;
					M < D || M > J - D ? L = !1 : C[K] = M < N / 2 ? 1 : M > J - N / 2 ? J - N - 2 : M - N / 2;
					return L
				},
				q = function(K) {
					var J = y;
					y = x;
					x = J;
					A = K
				},
				p = function() {
					t.apply(0, y) !== !1 ? s.apply(0, x) === !1 && !A && (q(!0), p()) : A ? C.x = C.y = 0 : (q(!0), p())
				};
			(E.inverted || this.len > 1) && q();
			p();
			return C
		},
		defaultFormatter: function(q) {
			var p = this.points || aK(this),
				s;
			p.sort(ao);
			s = [q.tooltipFooterHeaderFormatter(p[0])];
			s = s.concat(q.bodyFormatter(p));
			s.push(q.tooltipFooterHeaderFormatter(p[0], !0));
			return s.join("")
		},
		refresh: function(F, E) {
			var D = this.chart,
				C = this.label,
				B = this.options,
				A, y, x, u = {},
				t, s = [];
			t = B.formatter || this.defaultFormatter;
			var u = D.hoverPoints,
				q, p = this.shared;
			clearTimeout(this.hideTimer);
			this.followPointer = aK(F)[0].series.tooltipOptions.followPointer;
			x = this.getAnchor(F, E);
			A = x[0];
			y = x[1];
			p && (!F.series || !F.series.noSharedTooltip) ? (D.hoverPoints = F, u && aw(u, function(H) {
				H.setState()
			}), aw(F, function(H) {
				H.setState("hover");
				s.push(H.getLabelConfig())
			}), u = {
				x: F[0].category,
				y: F[0].y
			}, u.points = s, this.len = s.length, F = F[0]) : u = F.getLabelConfig();
			t = t.call(u, this);
			u = F.series;
			this.distance = ax(u.tooltipOptions.distance, 16);
			t === !1 ? this.hide() : (this.isHidden && (aj(C), C.attr("opacity", 1).show()), C.attr({
				text: t
			}), q = B.borderColor || F.color || u.color || "#606060", C.attr({
				stroke: q
			}), this.updatePosition({
				plotX: A,
				plotY: y,
				negative: F.negative,
				ttBelow: F.ttBelow,
				h: x[2] || 0
			}), this.isHidden = !1);
			a8(D, "tooltipRefresh", {
				text: t,
				x: A + D.plotLeft,
				y: y + D.plotTop,
				borderColor: q
			})
		},
		updatePosition: function(q) {
			var p = this.chart,
				s = this.label,
				s = (this.options.positioner || this.getPosition).call(this, s.width, s.height, q);
			this.move(bk(s.x), bk(s.y || 0), q.plotX + p.plotLeft, q.plotY + p.plotTop)
		},
		getXDateFormat: function(B, A, y) {
			var x, A = A.dateTimeLabelFormats,
				u = y && y.closestPointRange,
				t, s = {
					millisecond: 15,
					second: 12,
					minute: 9,
					hour: 6,
					day: 3
				},
				q, p = "millisecond";
			if(u) {
				q = d("%m-%d %H:%M:%S.%L", B.x);
				for(t in ba) {
					if(u === ba.week && +d("%w", B.x) === y.options.startOfWeek && q.substr(6) === "00:00:00.000") {
						t = "week";
						break
					}
					if(ba[t] > u) {
						t = p;
						break
					}
					if(s[t] && q.substr(s[t]) !== "01-01 00:00:00.000".substr(s[t])) {
						break
					}
					t !== "week" && (p = t)
				}
				t && (x = A[t])
			} else {
				x = A.day
			}
			return x || A.year
		},
		tooltipFooterHeaderFormatter: function(q, p) {
			var A = p ? "footer" : "header",
				y = q.series,
				x = y.tooltipOptions,
				u = x.xDateFormat,
				t = y.xAxis,
				s = t && t.options.type === "datetime" && a6(q.key),
				A = x[A + "Format"];
			s && !u && (u = this.getXDateFormat(q, x, t));
			s && u && (A = A.replace("{point.key}", "{point.key:" + u + "}"));
			return bI(A, {
				point: q,
				series: y
			})
		},
		bodyFormatter: function(p) {
			return aD(p, function(q) {
				var s = q.series.tooltipOptions;
				return(s.pointFormatter || q.point.tooltipFormatter).call(q.point, s.pointFormat)
			})
		}
	};
	var ae;
	bO = ap && ap.documentElement.ontouchstart !== bn;
	var bN = at.Pointer = function(q, p) {
		this.init(q, p)
	};
	bN.prototype = {
		init: function(q, p) {
			var x = p.chart,
				u = x.events,
				t = bT ? "" : x.zoomType,
				x = q.inverted,
				s;
			this.options = p;
			this.chart = q;
			this.zoomX = s = /x/.test(t);
			this.zoomY = t = /y/.test(t);
			this.zoomHor = s && !x || t && x;
			this.zoomVert = t && !x || s && x;
			this.hasZoom = s || t;
			this.runChartClick = u && !!u.click;
			this.pinchDown = [];
			this.lastValidTouch = {};
			if(at.Tooltip && p.tooltip.enabled) {
				q.tooltip = new al(q, p.tooltip), this.followTouchMove = ax(p.tooltip.followTouchMove, !0)
			}
			this.setDOMEvents()
		},
		normalize: function(q, p) {
			var t, s, q = q || bi.event;
			if(!q.target) {
				q.target = q.srcElement
			}
			s = q.touches ? q.touches.length ? q.touches.item(0) : q.changedTouches[0] : q;
			if(!p) {
				this.chartPosition = p = a7(this.chart.container)
			}
			s.pageX === bn ? (t = au(q.x, q.clientX - p.left), s = q.y) : (t = s.pageX - p.left, s = s.pageY - p.top);
			return aq(q, {
				chartX: bk(t),
				chartY: bk(s)
			})
		},
		getCoordinates: function(q) {
			var p = {
				xAxis: [],
				yAxis: []
			};
			aw(this.chart.axes, function(s) {
				p[s.isXAxis ? "xAxis" : "yAxis"].push({
					axis: s,
					value: s.toValue(q[s.horiz ? "chartX" : "chartY"])
				})
			});
			return p
		},
		runPointActions: function(H) {
			var F = this.chart,
				E = F.series,
				D = F.tooltip,
				C = D ? D.shared : !1,
				B = F.hoverPoint,
				A = F.hoverSeries,
				y, x = [Number.MAX_VALUE, Number.MAX_VALUE],
				u, t, s = [],
				q = [],
				p;
			if(!C && !A) {
				for(y = 0; y < E.length; y++) {
					if(E[y].directTouch || !E[y].options.stickyTracking) {
						E = []
					}
				}
			}
			A && (C ? A.noSharedTooltip : A.directTouch) && B ? q = [B] : (aw(E, function(I) {
				u = I.noSharedTooltip && C;
				t = !C && I.directTouch;
				I.visible && !u && !t && ax(I.options.enableMouseTracking, !0) && (p = I.searchPoint(H, !u && I.kdDimensions === 1)) && p.series && s.push(p)
			}), aw(s, function(I) {
				I && aw(["dist", "distX"], function(J, L) {
					if(a6(I[J])) {
						var K = I[J] === x[L] && I.series.group.zIndex >= q[L].series.group.zIndex;
						if(I[J] < x[L] || K) {
							x[L] = I[J], q[L] = I
						}
					}
				})
			}));
			if(C) {
				for(y = s.length; y--;) {
					(s[y].clientX !== q[1].clientX || s[y].series.noSharedTooltip) && s.splice(y, 1)
				}
			}
			if(q[0] && (q[0] !== this.prevKDPoint || D && D.isHidden)) {
				if(C && !q[0].series.noSharedTooltip) {
					s.length && D && D.refresh(s, H), aw(s, function(I) {
						I.onMouseOver(H, I !== (A && A.directTouch && B || q[0]))
					}), this.prevKDPoint = q[1]
				} else {
					D && D.refresh(q[0], H);
					if(!A || !A.directTouch) {
						q[0].onMouseOver(H)
					}
					this.prevKDPoint = q[0]
				}
			} else {
				E = A && A.tooltipOptions.followPointer, D && E && !D.isHidden && (E = D.getAnchor([{}], H), D.updatePosition({
					plotX: E[0],
					plotY: E[1]
				}))
			}
			if(!this._onDocumentMouseMove) {
				this._onDocumentMouseMove = function(I) {
					if(aT[ae]) {
						aT[ae].pointer.onDocumentMouseMove(I)
					}
				}, a0(ap, "mousemove", this._onDocumentMouseMove)
			}
			aw(C ? s : [ax(B, q[1])], function(I) {
				aw(F.axes, function(J) {
					(!I || I.series[J.coll] === J) && J.drawCrosshair(H, I)
				})
			})
		},
		reset: function(q, p) {
			var A = this.chart,
				y = A.hoverSeries,
				x = A.hoverPoint,
				u = A.hoverPoints,
				t = A.tooltip,
				s = t && t.shared ? u : x;
			q && s && aw(aK(s), function(B) {
				B.series.isCartesian && B.plotX === void 0 && (q = !1)
			});
			if(q) {
				t && s && (t.refresh(s), x && (x.setState(x.state, !0), aw(A.axes, function(B) {
					B.crosshair && B.drawCrosshair(null, x)
				})))
			} else {
				if(x) {
					x.onMouseOut()
				}
				u && aw(u, function(B) {
					B.setState()
				});
				if(y) {
					y.onMouseOut()
				}
				t && t.hide(p);
				if(this._onDocumentMouseMove) {
					aN(ap, "mousemove", this._onDocumentMouseMove), this._onDocumentMouseMove = null
				}
				aw(A.axes, function(B) {
					B.hideCrosshair()
				});
				this.hoverX = this.prevKDPoint = A.hoverPoints = A.hoverPoint = null
			}
		},
		scaleGroups: function(q, p) {
			var t = this.chart,
				s;
			aw(t.series, function(u) {
				s = q || u.getPlotBox();
				u.xAxis && u.xAxis.zoomEnabled && (u.group.attr(s), u.markerGroup && (u.markerGroup.attr(s), u.markerGroup.clip(p ? t.clipRect : null)), u.dataLabelsGroup && u.dataLabelsGroup.attr(s))
			});
			t.clipRect.attr(p || t.clipBox)
		},
		dragStart: function(q) {
			var p = this.chart;
			p.mouseIsDown = q.type;
			p.cancelClick = !1;
			p.mouseDownX = this.mouseDownX = q.chartX;
			p.mouseDownY = this.mouseDownY = q.chartY
		},
		drag: function(K) {
			var J = this.chart,
				I = J.options.chart,
				H = K.chartX,
				F = K.chartY,
				E = this.zoomHor,
				D = this.zoomVert,
				C = J.plotLeft,
				B = J.plotTop,
				A = J.plotWidth,
				y = J.plotHeight,
				x, u = this.selectionMarker,
				t = this.mouseDownX,
				s = this.mouseDownY,
				q = I.panKey && K[I.panKey + "Key"];
			if(!u || !u.touch) {
				if(H < C ? H = C : H > C + A && (H = C + A), F < B ? F = B : F > B + y && (F = B + y), this.hasDragged = Math.sqrt(Math.pow(t - H, 2) + Math.pow(s - F, 2)), this.hasDragged > 10) {
					x = J.isInsidePlot(t - C, s - B);
					if(J.hasCartesianSeries && (this.zoomX || this.zoomY) && x && !q && !u) {
						this.selectionMarker = u = J.renderer.rect(C, B, E ? 1 : A, D ? 1 : y, 0).attr({
							fill: I.selectionMarkerFill || "rgba(69,114,167,0.25)",
							zIndex: 7
						}).add()
					}
					u && E && (H -= t, u.attr({
						width: aW(H),
						x: (H > 0 ? 0 : H) + t
					}));
					u && D && (H = F - s, u.attr({
						height: aW(H),
						y: (H > 0 ? 0 : H) + s
					}));
					x && !u && I.panning && J.pan(K, I.panning)
				}
			}
		},
		drop: function(D) {
			var C = this,
				B = this.chart,
				A = this.hasPinched;
			if(this.selectionMarker) {
				var y = {
						originalEvent: D,
						xAxis: [],
						yAxis: []
					},
					x = this.selectionMarker,
					u = x.attr ? x.attr("x") : x.x,
					t = x.attr ? x.attr("y") : x.y,
					s = x.attr ? x.attr("width") : x.width,
					q = x.attr ? x.attr("height") : x.height,
					p;
				if(this.hasDragged || A) {
					aw(B.axes, function(I) {
						if(I.zoomEnabled && av(I.min) && (A || C[{
								xAxis: "zoomX",
								yAxis: "zoomY"
							}[I.coll]])) {
							var E = I.horiz,
								H = D.type === "touchend" ? I.minPixelPadding : 0,
								F = I.toValue((E ? u : t) + H),
								E = I.toValue((E ? u + s : t + q) - H);
							y[I.coll].push({
								axis: I,
								min: bd(F, E),
								max: au(F, E)
							});
							p = !0
						}
					}), p && a8(B, "selection", y, function(E) {
						B.zoom(aq(E, A ? {
							animation: !1
						} : null))
					})
				}
				this.selectionMarker = this.selectionMarker.destroy();
				A && this.scaleGroups()
			}
			if(B) {
				a1(B.container, {
					cursor: B._cursor
				}), B.cancelClick = this.hasDragged > 10, B.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = []
			}
		},
		onContainerMouseDown: function(p) {
			p = this.normalize(p);
			p.preventDefault && p.preventDefault();
			this.dragStart(p)
		},
		onDocumentMouseUp: function(p) {
			aT[ae] && aT[ae].pointer.drop(p)
		},
		onDocumentMouseMove: function(q) {
			var p = this.chart,
				s = this.chartPosition,
				q = this.normalize(q, s);
			s && !this.inClass(q.target, "highcharts-tracker") && !p.isInsidePlot(q.chartX - p.plotLeft, q.chartY - p.plotTop) && this.reset()
		},
		onContainerMouseLeave: function(q) {
			var p = aT[ae];
			if(p && (q.relatedTarget || q.toElement)) {
				p.pointer.reset(), p.pointer.chartPosition = null
			}
		},
		onContainerMouseMove: function(q) {
			var p = this.chart;
			if(!av(ae) || !aT[ae] || !aT[ae].mouseIsDown) {
				ae = p.index
			}
			q = this.normalize(q);
			q.returnValue = !1;
			p.mouseIsDown === "mousedown" && this.drag(q);
			(this.inClass(q.target, "highcharts-tracker") || p.isInsidePlot(q.chartX - p.plotLeft, q.chartY - p.plotTop)) && !p.openMenu && this.runPointActions(q)
		},
		inClass: function(q, p) {
			for(var s; q;) {
				if(s = aX(q, "class")) {
					if(s.indexOf(p) !== -1) {
						return !0
					}
					if(s.indexOf("highcharts-container") !== -1) {
						return !1
					}
				}
				q = q.parentNode
			}
		},
		onTrackerMouseOut: function(q) {
			var p = this.chart.hoverSeries,
				q = q.relatedTarget || q.toElement;
			if(p && q && !p.options.stickyTracking && !this.inClass(q, "highcharts-tooltip") && !this.inClass(q, "highcharts-series-" + p.index)) {
				p.onMouseOut()
			}
		},
		onContainerClick: function(q) {
			var p = this.chart,
				u = p.hoverPoint,
				t = p.plotLeft,
				s = p.plotTop,
				q = this.normalize(q);
			p.cancelClick || (u && this.inClass(q.target, "highcharts-tracker") ? (a8(u.series, "click", aq(q, {
				point: u
			})), p.hoverPoint && u.firePointEvent("click", q)) : (aq(q, this.getCoordinates(q)), p.isInsidePlot(q.chartX - t, q.chartY - s) && a8(p, "click", q)))
		},
		setDOMEvents: function() {
			var q = this,
				p = q.chart.container;
			p.onmousedown = function(s) {
				q.onContainerMouseDown(s)
			};
			p.onmousemove = function(s) {
				q.onContainerMouseMove(s)
			};
			p.onclick = function(s) {
				q.onContainerClick(s)
			};
			a0(p, "mouseleave", q.onContainerMouseLeave);
			bw === 1 && a0(ap, "mouseup", q.onDocumentMouseUp);
			if(bO) {
				p.ontouchstart = function(s) {
					q.onContainerTouchStart(s)
				}, p.ontouchmove = function(s) {
					q.onContainerTouchMove(s)
				}, bw === 1 && a0(ap, "touchend", q.onDocumentTouchEnd)
			}
		},
		destroy: function() {
			var p;
			aN(this.chart.container, "mouseleave", this.onContainerMouseLeave);
			bw || (aN(ap, "mouseup", this.onDocumentMouseUp), aN(ap, "touchend", this.onDocumentTouchEnd));
			clearInterval(this.tooltipTimeout);
			for(p in this) {
				this[p] = null
			}
		}
	};
	aq(at.Pointer.prototype, {
		pinchTranslate: function(q, p, x, u, t, s) {
			(this.zoomHor || this.pinchHor) && this.pinchTranslateDirection(!0, q, p, x, u, t, s);
			(this.zoomVert || this.pinchVert) && this.pinchTranslateDirection(!1, q, p, x, u, t, s)
		},
		pinchTranslateDirection: function(Z, Y, X, W, V, U, T, S) {
			var R = this.chart,
				Q = Z ? "x" : "y",
				P = Z ? "X" : "Y",
				O = "chart" + P,
				N = Z ? "width" : "height",
				M = R["plot" + (Z ? "Left" : "Top")],
				L, K, I = S || 1,
				J = R.inverted,
				A = R.bounds[Z ? "h" : "v"],
				B = Y.length === 1,
				F = Y[0][O],
				E = X[0][O],
				y = !B && Y[1][O],
				D = !B && X[1][O],
				H, X = function() {
					!B && aW(F - y) > 20 && (I = S || aW(E - D) / aW(F - y));
					K = (M - E) / I + F;
					L = R["plot" + (Z ? "Width" : "Height")] / I
				};
			X();
			Y = K;
			Y < A.min ? (Y = A.min, H = !0) : Y + L > A.max && (Y = A.max - L, H = !0);
			H ? (E -= 0.8 * (E - T[Q][0]), B || (D -= 0.8 * (D - T[Q][1])), X()) : T[Q] = [E, D];
			J || (U[Q] = K - M, U[N] = L);
			U = J ? 1 / I : I;
			V[N] = L;
			V[Q] = Y;
			W[J ? Z ? "scaleY" : "scaleX" : "scale" + P] = I;
			W["translate" + P] = U * M + (E - U * F)
		},
		pinch: function(E) {
			var D = this,
				C = D.chart,
				B = D.pinchDown,
				A = E.touches,
				y = A.length,
				x = D.lastValidTouch,
				u = D.hasZoom,
				t = D.selectionMarker,
				s = {},
				q = y === 1 && (D.inClass(E.target, "highcharts-tracker") && C.runTrackerClick || D.runChartClick),
				p = {};
			if(y > 1) {
				D.initiated = !0
			}
			u && D.initiated && !q && E.preventDefault();
			aD(A, function(F) {
				return D.normalize(F)
			});
			if(E.type === "touchstart") {
				aw(A, function(H, F) {
					B[F] = {
						chartX: H.chartX,
						chartY: H.chartY
					}
				}), x.x = [B[0].chartX, B[1] && B[1].chartX], x.y = [B[0].chartY, B[1] && B[1].chartY], aw(C.axes, function(H) {
					if(H.zoomEnabled) {
						var F = C.bounds[H.horiz ? "h" : "v"],
							L = H.minPixelPadding,
							K = H.toPixels(ax(H.options.min, H.dataMin)),
							J = H.toPixels(ax(H.options.max, H.dataMax)),
							I = bd(K, J),
							K = au(K, J);
						F.min = bd(H.pos, I - L);
						F.max = au(H.pos + H.len, K + L)
					}
				}), D.res = !0
			} else {
				if(B.length) {
					if(!t) {
						D.selectionMarker = t = aq({
							destroy: bz,
							touch: !0
						}, C.plotBox)
					}
					D.pinchTranslate(B, A, s, t, p, x);
					D.hasPinched = u;
					D.scaleGroups(s, p);
					if(!u && D.followTouchMove && y === 1) {
						this.runPointActions(D.normalize(E))
					} else {
						if(D.res) {
							D.res = !1, this.reset(!1, 0)
						}
					}
				}
			}
		},
		touch: function(q, p) {
			var t = this.chart,
				s;
			ae = t.index;
			if(q.touches.length === 1) {
				if(q = this.normalize(q), t.isInsidePlot(q.chartX - t.plotLeft, q.chartY - t.plotTop) && !t.openMenu) {
					p && this.runPointActions(q);
					if(q.type === "touchmove") {
						t = this.pinchDown, s = t[0] ? Math.sqrt(Math.pow(t[0].chartX - q.chartX, 2) + Math.pow(t[0].chartY - q.chartY, 2)) >= 4 : !1
					}
					ax(s, !0) && this.pinch(q)
				} else {
					p && this.reset()
				}
			} else {
				q.touches.length === 2 && this.pinch(q)
			}
		},
		onContainerTouchStart: function(p) {
			this.touch(p, !0)
		},
		onContainerTouchMove: function(p) {
			this.touch(p)
		},
		onDocumentTouchEnd: function(p) {
			aT[ae] && aT[ae].pointer.drop(p)
		}
	});
	if(bi.PointerEvent || bi.MSPointerEvent) {
		var o = {},
			ad = !!bi.PointerEvent,
			bK = function() {
				var q, p = [];
				p.item = function(s) {
					return this[s]
				};
				for(q in o) {
					o.hasOwnProperty(q) && p.push({
						pageX: o[q].pageX,
						pageY: o[q].pageY,
						target: o[q].target
					})
				}
				return p
			},
			i = function(q, p, t, s) {
				if((q.pointerType === "touch" || q.pointerType === q.MSPOINTER_TYPE_TOUCH) && aT[ae]) {
					s(q), s = aT[ae].pointer, s[p]({
						type: t,
						target: q.currentTarget,
						preventDefault: bz,
						touches: bK()
					})
				}
			};
		aq(bN.prototype, {
			onContainerPointerDown: function(p) {
				i(p, "onContainerTouchStart", "touchstart", function(q) {
					o[q.pointerId] = {
						pageX: q.pageX,
						pageY: q.pageY,
						target: q.currentTarget
					}
				})
			},
			onContainerPointerMove: function(p) {
				i(p, "onContainerTouchMove", "touchmove", function(q) {
					o[q.pointerId] = {
						pageX: q.pageX,
						pageY: q.pageY
					};
					if(!o[q.pointerId].target) {
						o[q.pointerId].target = q.currentTarget
					}
				})
			},
			onDocumentPointerUp: function(p) {
				i(p, "onDocumentTouchEnd", "touchend", function(q) {
					delete o[q.pointerId]
				})
			},
			batchMSEvents: function(p) {
				p(this.chart.container, ad ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown);
				p(this.chart.container, ad ? "pointermove" : "MSPointerMove", this.onContainerPointerMove);
				p(ap, ad ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp)
			}
		});
		a4(bN.prototype, "init", function(q, p, s) {
			q.call(this, p, s);
			this.hasZoom && a1(p.container, {
				"-ms-touch-action": "none",
				"touch-action": "none"
			})
		});
		a4(bN.prototype, "setDOMEvents", function(p) {
			p.apply(this);
			(this.hasZoom || this.followTouchMove) && this.batchMSEvents(a0)
		});
		a4(bN.prototype, "destroy", function(p) {
			this.batchMSEvents(aN);
			p.call(this)
		})
	}
	var bW = at.Legend = function(q, p) {
		this.init(q, p)
	};
	bW.prototype = {
		init: function(q, p) {
			var u = this,
				t = p.itemStyle,
				s = p.itemMarginTop || 0;
			this.options = p;
			if(p.enabled) {
				u.itemStyle = t, u.itemHiddenStyle = bg(t, p.itemHiddenStyle), u.itemMarginTop = s, u.padding = t = ax(p.padding, 8), u.initialItemX = t, u.initialItemY = t - 5, u.maxItemWidth = 0, u.chart = q, u.itemHeight = 0, u.symbolWidth = ax(p.symbolWidth, 16), u.pages = [], u.render(), a0(u.chart, "endResize", function() {
					u.positionCheckboxes()
				})
			}
		},
		colorizeItem: function(C, B) {
			var A = this.options,
				y = C.legendItem,
				x = C.legendLine,
				u = C.legendSymbol,
				t = this.itemHiddenStyle.color,
				A = B ? A.itemStyle.color : t,
				s = B ? C.legendColor || C.color || "#CCC" : t,
				t = C.options && C.options.marker,
				q = {
					fill: s
				},
				p;
			y && y.css({
				fill: A,
				color: A
			});
			x && x.attr({
				stroke: s
			});
			if(u) {
				if(t && u.isMarker) {
					for(p in q.stroke = s, t = C.convertAttribs(t), t) {
						y = t[p], y !== bn && (q[p] = y)
					}
				}
				u.attr(q)
			}
		},
		positionItem: function(q) {
			var p = this.options,
				x = p.symbolPadding,
				p = !p.rtl,
				u = q._legendItemPos,
				t = u[0],
				u = u[1],
				s = q.checkbox;
			(q = q.legendGroup) && q.element && q.translate(p ? t : this.legendWidth - t - 2 * x - 4, u);
			if(s) {
				s.x = t, s.y = u
			}
		},
		destroyItem: function(q) {
			var p = q.checkbox;
			aw(["legendItem", "legendLine", "legendSymbol", "legendGroup"], function(s) {
				q[s] && (q[s] = q[s].destroy())
			});
			p && bt(q.checkbox)
		},
		destroy: function() {
			var q = this.group,
				p = this.box;
			if(p) {
				this.box = p.destroy()
			}
			if(q) {
				this.group = q.destroy()
			}
		},
		positionCheckboxes: function(q) {
			var p = this.group.alignAttr,
				u, t = this.clipHeight || this.legendHeight,
				s = this.titleHeight;
			if(p) {
				u = p.translateY, aw(this.allItems, function(A) {
					var y = A.checkbox,
						x;
					y && (x = u + s + y.y + (q || 0) + 3, a1(y, {
						left: p.translateX + A.checkboxOffset + y.x - 20 + "px",
						top: x + "px",
						display: x > u - 6 && x < u + t - 6 ? "" : "none"
					}))
				})
			}
		},
		renderTitle: function() {
			var q = this.padding,
				p = this.options.title,
				s = 0;
			if(p.text) {
				if(!this.title) {
					this.title = this.chart.renderer.label(p.text, q - 3, q - 4, null, null, null, null, null, "legend-title").attr({
						zIndex: 1
					}).css(p.style).add(this.group)
				}
				q = this.title.getBBox();
				s = q.height;
				this.offsetWidth = q.width;
				this.contentGroup.attr({
					translateY: s
				})
			}
			this.titleHeight = s
		},
		setText: function(q) {
			var p = this.options;
			q.legendItem.attr({
				text: p.labelFormat ? bI(p.labelFormat, q) : p.labelFormatter.call(q)
			})
		},
		renderItem: function(O) {
			var N = this.chart,
				M = N.renderer,
				L = this.options,
				K = L.layout === "horizontal",
				J = this.symbolWidth,
				I = L.symbolPadding,
				H = this.itemStyle,
				F = this.itemHiddenStyle,
				E = this.padding,
				D = K ? ax(L.itemDistance, 20) : 0,
				C = !L.rtl,
				B = L.width,
				A = L.itemMarginBottom || 0,
				y = this.itemMarginTop,
				p = this.initialItemX,
				u = O.legendItem,
				x = O.series && O.series.drawLegendSymbol ? O.series : O,
				s = x.options,
				s = this.createCheckboxForItem && s && s.showCheckbox,
				t = L.useHTML;
			if(!u) {
				O.legendGroup = M.g("legend-item").attr({
					zIndex: 1
				}).add(this.scrollGroup);
				O.legendItem = u = M.text("", C ? J + I : -I, this.baseline || 0, t).css(bg(O.visible ? H : F)).attr({
					align: C ? "left" : "right",
					zIndex: 2
				}).add(O.legendGroup);
				if(!this.baseline) {
					this.fontMetrics = M.fontMetrics(H.fontSize, u), this.baseline = this.fontMetrics.f + 3 + y, u.attr("y", this.baseline)
				}
				x.drawLegendSymbol(this, O);
				this.setItemEvents && this.setItemEvents(O, u, t, H, F);
				s && this.createCheckboxForItem(O)
			}
			this.colorizeItem(O, O.visible);
			this.setText(O);
			M = u.getBBox();
			J = O.checkboxOffset = L.itemWidth || O.legendItemWidth || J + I + M.width + D + (s ? 20 : 0);
			this.itemHeight = I = bk(O.legendItemHeight || M.height);
			if(K && this.itemX - p + J > (B || N.chartWidth - 2 * E - p - L.x)) {
				this.itemX = p, this.itemY += y + this.lastLineHeight + A, this.lastLineHeight = 0
			}
			this.maxItemWidth = au(this.maxItemWidth, J);
			this.lastItemY = y + this.itemY + A;
			this.lastLineHeight = au(I, this.lastLineHeight);
			O._legendItemPos = [this.itemX, this.itemY];
			K ? this.itemX += J : (this.itemY += y + I + A, this.lastLineHeight = I);
			this.offsetWidth = B || au((K ? this.itemX - p - D : J) + E, this.offsetWidth)
		},
		getAllItems: function() {
			var p = [];
			aw(this.chart.series, function(q) {
				var s = q.options;
				if(ax(s.showInLegend, !av(s.linkedTo) ? bn : !1, !0)) {
					p = p.concat(q.legendItems || (s.legendType === "point" ? q.data : q))
				}
			});
			return p
		},
		adjustMargins: function(q, p) {
			var u = this.chart,
				t = this.options,
				s = t.align.charAt(0) + t.verticalAlign.charAt(0) + t.layout.charAt(0);
			t.floating || aw([/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/], function(y, x) {
				y.test(s) && !av(q[x]) && (u[ag[x]] = au(u[ag[x]], u.legend[(x + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][x] * t[x % 2 ? "x" : "y"] + ax(t.margin, 12) + p[x]))
			})
		},
		render: function() {
			var F = this,
				E = F.chart,
				D = E.renderer,
				C = F.group,
				B, A, y, x, u = F.box,
				t = F.options,
				s = F.padding,
				q = t.borderWidth,
				p = t.backgroundColor;
			F.itemX = F.initialItemX;
			F.itemY = F.initialItemY;
			F.offsetWidth = 0;
			F.lastItemY = 0;
			if(!C) {
				F.group = C = D.g("legend").attr({
					zIndex: 7
				}).add(), F.contentGroup = D.g().attr({
					zIndex: 1
				}).add(C), F.scrollGroup = D.g().add(F.contentGroup)
			}
			F.renderTitle();
			B = F.getAllItems();
			ac(B, function(I, H) {
				return(I.options && I.options.legendIndex || 0) - (H.options && H.options.legendIndex || 0)
			});
			t.reversed && B.reverse();
			F.allItems = B;
			F.display = A = !!B.length;
			F.lastLineHeight = 0;
			aw(B, function(H) {
				F.renderItem(H)
			});
			y = (t.width || F.offsetWidth) + s;
			x = F.lastItemY + F.lastLineHeight + F.titleHeight;
			x = F.handleOverflow(x);
			x += s;
			if(q || p) {
				if(u) {
					if(y > 0 && x > 0) {
						u[u.isNew ? "attr" : "animate"](u.crisp({
							width: y,
							height: x
						})), u.isNew = !1
					}
				} else {
					F.box = u = D.rect(0, 0, y, x, t.borderRadius, q || 0).attr({
						stroke: t.borderColor,
						"stroke-width": q || 0,
						fill: p || "none"
					}).add(C).shadow(t.shadow), u.isNew = !0
				}
				u[A ? "show" : "hide"]()
			}
			F.legendWidth = y;
			F.legendHeight = x;
			aw(B, function(H) {
				F.positionItem(H)
			});
			A && C.align(aq({
				width: y,
				height: x
			}, t), !0, "spacingBox");
			E.isResizing || this.positionCheckboxes()
		},
		handleOverflow: function(M) {
			var L = this,
				K = this.chart,
				J = K.renderer,
				I = this.options,
				H = I.y,
				H = K.spacingBox.height + (I.verticalAlign === "top" ? -H : H) - this.padding,
				F = I.maxHeight,
				E, D = this.clipRect,
				C = I.navigation,
				B = ax(C.animation, !0),
				A = C.arrowSize || 12,
				y = this.nav,
				x = this.pages,
				u = this.padding,
				p, t = this.allItems,
				q = function(s) {
					D.attr({
						height: s
					});
					if(L.contentGroup.div) {
						L.contentGroup.div.style.clip = "rect(" + u + "px,9999px," + (u + s) + "px,0)"
					}
				};
			I.layout === "horizontal" && (H /= 2);
			F && (H = bd(H, F));
			x.length = 0;
			if(M > H && C.enabled !== !1) {
				this.clipHeight = E = au(H - 20 - this.titleHeight - u, 0);
				this.currentPage = ax(this.currentPage, 1);
				this.fullHeight = M;
				aw(t, function(N, s) {
					var Q = N._legendItemPos[1],
						P = bk(N.legendItem.getBBox().height),
						O = x.length;
					if(!O || Q - x[O - 1] > E && (p || Q) !== x[O - 1]) {
						x.push(p || Q), O++
					}
					s === t.length - 1 && Q + P - x[O - 1] > E && x.push(Q);
					Q !== p && (p = Q)
				});
				if(!D) {
					D = L.clipRect = J.clipRect(0, u, 9999, 0), L.contentGroup.clip(D)
				}
				q(E);
				if(!y) {
					this.nav = y = J.g().attr({
						zIndex: 1
					}).add(this.group), this.up = J.symbol("triangle", 0, 0, A, A).on("click", function() {
						L.scroll(-1, B)
					}).add(y), this.pager = J.text("", 15, 10).css(C.style).add(y), this.down = J.symbol("triangle-down", 0, 0, A, A).on("click", function() {
						L.scroll(1, B)
					}).add(y)
				}
				L.scroll(0);
				M = H
			} else {
				if(y) {
					q(K.chartHeight), y.hide(), this.scrollGroup.attr({
						translateY: 1
					}), this.clipHeight = 0
				}
			}
			return M
		},
		scroll: function(C, B) {
			var A = this.pages,
				y = A.length,
				x = this.currentPage + C,
				u = this.clipHeight,
				t = this.options.navigation,
				s = t.activeColor,
				t = t.inactiveColor,
				q = this.pager,
				p = this.padding;
			x > y && (x = y);
			if(x > 0) {
				B !== bn && aO(B, this.chart), this.nav.attr({
					translateX: p,
					translateY: u + this.padding + 7 + this.titleHeight,
					visibility: "visible"
				}), this.up.attr({
					fill: x === 1 ? t : s
				}).css({
					cursor: x === 1 ? "default" : "pointer"
				}), q.attr({
					text: x + "/" + y
				}), this.down.attr({
					x: 18 + this.pager.getBBox().width,
					fill: x === y ? t : s
				}).css({
					cursor: x === y ? "default" : "pointer"
				}), A = -A[x - 1] + this.initialItemY, this.scrollGroup.animate({
					translateY: A
				}), this.currentPage = x, this.positionCheckboxes(A)
			}
		}
	};
	a3 = at.LegendSymbolMixin = {
		drawRectangle: function(q, p) {
			var s = q.options.symbolHeight || q.fontMetrics.f;
			p.legendSymbol = this.chart.renderer.rect(0, q.baseline - s + 1, q.symbolWidth, s, q.options.symbolRadius || 0).attr({
				zIndex: 3
			}).add(p.legendGroup)
		},
		drawLineMarker: function(q) {
			var p = this.options,
				y = p.marker,
				x = q.symbolWidth,
				u = this.chart.renderer,
				t = this.legendGroup,
				q = q.baseline - bk(q.fontMetrics.b * 0.3),
				s;
			if(p.lineWidth) {
				s = {
					"stroke-width": p.lineWidth
				};
				if(p.dashStyle) {
					s.dashstyle = p.dashStyle
				}
				this.legendLine = u.path([aP, 0, q, aU, x, q]).attr(s).add(t)
			}
			if(y && y.enabled !== !1) {
				p = y.radius, this.legendSymbol = y = u.symbol(this.symbol, x / 2 - p, q - p, 2 * p, 2 * p, y).add(t), y.isMarker = !0
			}
		}
	};
	(/Trident\/7\.0/.test(bR) || an) && a4(bW.prototype, "positionItem", function(q, p) {
		var t = this,
			s = function() {
				p._legendItemPos && q.call(t, p)
			};
		s();
		setTimeout(s)
	});
	var aA = at.Chart = function() {
		this.getArgs.apply(this, arguments)
	};
	at.chart = function(q, p, s) {
		return new aA(q, p, s)
	};
	aA.prototype = {
		callbacks: [],
		getArgs: function() {
			var p = [].slice.call(arguments);
			if(bL(p[0]) || p[0].nodeName) {
				this.renderTo = p.shift()
			}
			this.init(p[0], p[1])
		},
		init: function(q, p) {
			var y, x = q.series;
			q.series = null;
			y = bg(aS, q);
			y.series = q.series = x;
			this.userOptions = q;
			x = y.chart;
			this.margin = this.splashArray("margin", x);
			this.spacing = this.splashArray("spacing", x);
			var u = x.events;
			this.bounds = {
				h: {},
				v: {}
			};
			this.callback = p;
			this.isResizing = 0;
			this.options = y;
			this.axes = [];
			this.series = [];
			this.hasCartesianSeries = x.showAxes;
			var t = this,
				s;
			t.index = aT.length;
			aT.push(t);
			bw++;
			x.reflow !== !1 && a0(t, "load", function() {
				t.initReflow()
			});
			if(u) {
				for(s in u) {
					a0(t, s, u[s])
				}
			}
			t.xAxis = [];
			t.yAxis = [];
			t.animation = bT ? !1 : ax(x.animation, !0);
			t.pointCount = t.colorCounter = t.symbolCounter = 0;
			t.firstRender()
		},
		initSeries: function(q) {
			var p = this.options.chart;
			(p = a2[q.type || p.type || p.defaultSeriesType]) || az(17, !0);
			p = new p;
			p.init(this, q);
			return p
		},
		isInsidePlot: function(q, p, t) {
			var s = t ? p : q,
				q = t ? q : p;
			return s >= 0 && s <= this.plotWidth && q >= 0 && q <= this.plotHeight
		},
		redraw: function(I) {
			var H = this.axes,
				F = this.series,
				E = this.pointer,
				D = this.legend,
				C = this.isDirtyLegend,
				B, A, y = this.hasCartesianSeries,
				x = this.isDirtyBox,
				u = F.length,
				t = u,
				s = this.renderer,
				q = s.isHidden(),
				p = [];
			aO(I, this);
			q && this.cloneRenderTo();
			for(this.layOutTitles(); t--;) {
				if(I = F[t], I.options.stacking && (B = !0, I.isDirty)) {
					A = !0;
					break
				}
			}
			if(A) {
				for(t = u; t--;) {
					if(I = F[t], I.options.stacking) {
						I.isDirty = !0
					}
				}
			}
			aw(F, function(J) {
				J.isDirty && J.options.legendType === "point" && (J.updateTotals && J.updateTotals(), C = !0);
				J.isDirtyData && a8(J, "updatedData")
			});
			if(C && D.options.enabled) {
				D.render(), this.isDirtyLegend = !1
			}
			B && this.getStacks();
			if(y && !this.isResizing) {
				this.maxTicks = null, aw(H, function(J) {
					J.setScale()
				})
			}
			this.getMargins();
			y && (aw(H, function(J) {
				J.isDirty && (x = !0)
			}), aw(H, function(K) {
				var J = K.min + "," + K.max;
				if(K.extKey !== J) {
					K.extKey = J, p.push(function() {
						a8(K, "afterSetExtremes", aq(K.eventArgs, K.getExtremes()));
						delete K.eventArgs
					})
				}(x || B) && K.redraw()
			}));
			x && this.drawChartBox();
			aw(F, function(J) {
				J.isDirty && J.visible && (!J.isCartesian || J.xAxis) && J.redraw()
			});
			E && E.reset(!0);
			s.draw();
			a8(this, "redraw");
			q && this.cloneRenderTo(!0);
			aw(p, function(J) {
				J.call()
			})
		},
		get: function(q) {
			var p = this.axes,
				u = this.series,
				t, s;
			for(t = 0; t < p.length; t++) {
				if(p[t].options.id === q) {
					return p[t]
				}
			}
			for(t = 0; t < u.length; t++) {
				if(u[t].options.id === q) {
					return u[t]
				}
			}
			for(t = 0; t < u.length; t++) {
				s = u[t].points || [];
				for(p = 0; p < s.length; p++) {
					if(s[p].id === q) {
						return s[p]
					}
				}
			}
			return null
		},
		getAxes: function() {
			var q = this,
				p = this.options,
				s = p.xAxis = aK(p.xAxis || {}),
				p = p.yAxis = aK(p.yAxis || {});
			aw(s, function(u, t) {
				u.index = t;
				u.isX = !0
			});
			aw(p, function(u, t) {
				u.index = t
			});
			s = s.concat(p);
			aw(s, function(t) {
				new aB(q, t)
			})
		},
		getSelectedPoints: function() {
			var p = [];
			aw(this.series, function(q) {
				p = p.concat(a9(q.points || [], function(s) {
					return s.selected
				}))
			});
			return p
		},
		getSelectedSeries: function() {
			return a9(this.series, function(p) {
				return p.selected
			})
		},
		setTitle: function(q, p, y) {
			var s;
			var x = this,
				u = x.options,
				t;
			t = u.title = bg(u.title, q);
			s = u.subtitle = bg(u.subtitle, p), u = s;
			aw([
				["title", q, t],
				["subtitle", p, u]
			], function(B) {
				var A = B[0],
					D = x[A],
					C = B[1],
					B = B[2];
				D && C && (x[A] = D = D.destroy());
				B && B.text && !D && (x[A] = x.renderer.text(B.text, 0, 0, B.useHTML).attr({
					align: B.align,
					"class": "highcharts-" + A,
					zIndex: B.zIndex || 4
				}).css(B.style).add())
			});
			x.layOutTitles(y)
		},
		layOutTitles: function(q) {
			var p = 0,
				A = this.title,
				y = this.subtitle,
				x = this.options,
				u = x.title,
				x = x.subtitle,
				t = this.renderer,
				s = this.spacingBox;
			if(A && (A.css({
					width: (u.width || s.width + u.widthAdjust) + "px"
				}).align(aq({
					y: t.fontMetrics(u.style.fontSize, A).b - 3
				}, u), !1, s), !u.floating && !u.verticalAlign)) {
				p = A.getBBox().height
			}
			y && (y.css({
				width: (x.width || s.width + x.widthAdjust) + "px"
			}).align(aq({
				y: p + (u.margin - 13) + t.fontMetrics(x.style.fontSize, A).b
			}, x), !1, s), !x.floating && !x.verticalAlign && (p = am(p + y.getBBox().height)));
			A = this.titleOffset !== p;
			this.titleOffset = p;
			if(!this.isDirtyBox && A) {
				this.isDirtyBox = A, this.hasRendered && ax(q, !0) && this.isDirtyBox && this.redraw()
			}
		},
		getChartSize: function() {
			var q = this.options.chart,
				p = q.width,
				q = q.height,
				s = this.renderToClone || this.renderTo;
			if(!av(p)) {
				this.containerWidth = aF(s, "width")
			}
			if(!av(q)) {
				this.containerHeight = aF(s, "height")
			}
			this.chartWidth = au(0, p || this.containerWidth || 600);
			this.chartHeight = au(0, ax(q, this.containerHeight > 19 ? this.containerHeight : 400))
		},
		cloneRenderTo: function(q) {
			var p = this.renderToClone,
				s = this.container;
			q ? p && (this.renderTo.appendChild(s), bt(p), delete this.renderToClone) : (s && s.parentNode === this.renderTo && this.renderTo.removeChild(s), this.renderToClone = p = this.renderTo.cloneNode(0), a1(p, {
				position: "absolute",
				top: "-9999px",
				display: "block"
			}), p.style.setProperty && p.style.setProperty("display", "block", "important"), ap.body.appendChild(p), s && p.appendChild(s))
		},
		getContainer: function() {
			var q, p = this.options,
				x = p.chart,
				u, t;
			q = this.renderTo;
			var s = "highcharts-" + by++;
			if(!q) {
				this.renderTo = q = x.renderTo
			}
			if(bL(q)) {
				this.renderTo = q = ap.getElementById(q)
			}
			q || az(13, !0);
			u = bl(aX(q, "data-highcharts-chart"));
			a6(u) && aT[u] && aT[u].hasRendered && aT[u].destroy();
			aX(q, "data-highcharts-chart", this.index);
			q.innerHTML = "";
			!x.skipClone && !q.offsetWidth && this.cloneRenderTo();
			this.getChartSize();
			u = this.chartWidth;
			t = this.chartHeight;
			this.container = q = G(aL, {
				className: "highcharts-container" + (x.className ? " " + x.className : ""),
				id: s
			}, aq({
				position: "relative",
				overflow: "hidden",
				width: u + "px",
				height: t + "px",
				textAlign: "left",
				lineHeight: "normal",
				zIndex: 0,
				"-webkit-tap-highlight-color": "rgba(0,0,0,0)"
			}, x.style), this.renderToClone || q);
			this._cursor = q.style.cursor;
			this.renderer = new(at[x.renderer] || f)(q, u, t, x.style, x.forExport, p.exporting && p.exporting.allowHTML);
			bT && this.renderer.create(this, q, u, t);
			this.renderer.chartIndex = this.index
		},
		getMargins: function(q) {
			var p = this.spacing,
				t = this.margin,
				s = this.titleOffset;
			this.resetMargins();
			if(s && !av(t[0])) {
				this.plotTop = au(this.plotTop, s + this.options.title.margin + p[0])
			}
			this.legend.display && this.legend.adjustMargins(t, p);
			this.extraBottomMargin && (this.marginBottom += this.extraBottomMargin);
			this.extraTopMargin && (this.plotTop += this.extraTopMargin);
			q || this.getAxisMargins()
		},
		getAxisMargins: function() {
			var q = this,
				p = q.axisOffset = [0, 0, 0, 0],
				s = q.margin;
			q.hasCartesianSeries && aw(q.axes, function(t) {
				t.visible && t.getOffset()
			});
			aw(ag, function(u, t) {
				av(s[t]) || (q[u] += p[t])
			});
			q.setChartSize()
		},
		reflow: function(q) {
			var p = this,
				x = p.options.chart,
				u = p.renderTo,
				t = av(x.width),
				s = x.width || aF(u, "width"),
				x = x.height || aF(u, "height"),
				u = q ? q.target : bi;
			if(!t && !p.isPrinting && s && x && (u === bi || u === ap)) {
				if(s !== p.containerWidth || x !== p.containerHeight) {
					clearTimeout(p.reflowTimeout), p.reflowTimeout = v(function() {
						p.container && p.setSize(void 0, void 0, !1)
					}, q ? 100 : 0)
				}
				p.containerWidth = s;
				p.containerHeight = x
			}
		},
		initReflow: function() {
			var q = this,
				p = function(s) {
					q.reflow(s)
				};
			a0(bi, "resize", p);
			a0(q, "destroy", function() {
				aN(bi, "resize", p)
			})
		},
		setSize: function(q, p, u) {
			var t = this,
				s = t.renderer;
			t.isResizing += 1;
			aO(u, t);
			t.oldChartHeight = t.chartHeight;
			t.oldChartWidth = t.chartWidth;
			if(q !== void 0) {
				t.options.chart.width = q
			}
			if(p !== void 0) {
				t.options.chart.height = p
			}
			t.getChartSize();
			q = s.globalAnimation;
			(q ? e : a1)(t.container, {
				width: t.chartWidth + "px",
				height: t.chartHeight + "px"
			}, q);
			t.setChartSize(!0);
			s.setSize(t.chartWidth, t.chartHeight, u);
			t.maxTicks = null;
			aw(t.axes, function(x) {
				x.isDirty = !0;
				x.setScale()
			});
			aw(t.series, function(x) {
				x.isDirty = !0
			});
			t.isDirtyLegend = !0;
			t.isDirtyBox = !0;
			t.layOutTitles();
			t.getMargins();
			t.redraw(u);
			t.oldChartHeight = null;
			a8(t, "resize");
			v(function() {
				t && a8(t, "endResize", null, function() {
					t.isResizing -= 1
				})
			}, aY(q).duration)
		},
		setChartSize: function(E) {
			var D = this.inverted,
				C = this.renderer,
				B = this.chartWidth,
				A = this.chartHeight,
				y = this.options.chart,
				x = this.spacing,
				u = this.clipOffset,
				t, s, q, p;
			this.plotLeft = t = bk(this.plotLeft);
			this.plotTop = s = bk(this.plotTop);
			this.plotWidth = q = au(0, bk(B - t - this.marginRight));
			this.plotHeight = p = au(0, bk(A - s - this.marginBottom));
			this.plotSizeX = D ? p : q;
			this.plotSizeY = D ? q : p;
			this.plotBorderWidth = y.plotBorderWidth || 0;
			this.spacingBox = C.spacingBox = {
				x: x[3],
				y: x[0],
				width: B - x[3] - x[1],
				height: A - x[0] - x[2]
			};
			this.plotBox = C.plotBox = {
				x: t,
				y: s,
				width: q,
				height: p
			};
			B = 2 * aR(this.plotBorderWidth / 2);
			D = am(au(B, u[3]) / 2);
			C = am(au(B, u[0]) / 2);
			this.clipBox = {
				x: D,
				y: C,
				width: aR(this.plotSizeX - au(B, u[1]) / 2 - D),
				height: au(0, aR(this.plotSizeY - au(B, u[2]) / 2 - C))
			};
			E || aw(this.axes, function(F) {
				F.setAxisSize();
				F.setAxisTranslation()
			})
		},
		resetMargins: function() {
			var p = this;
			aw(ag, function(q, s) {
				p[q] = ax(p.margin[s], p.spacing[s])
			});
			p.axisOffset = [0, 0, 0, 0];
			p.clipOffset = [0, 0, 0, 0]
		},
		drawChartBox: function() {
			var R = this.options.chart,
				Q = this.renderer,
				P = this.chartWidth,
				O = this.chartHeight,
				N = this.chartBackground,
				M = this.plotBackground,
				L = this.plotBorder,
				K = this.plotBGImage,
				J = R.borderWidth || 0,
				I = R.backgroundColor,
				H = R.plotBackgroundColor,
				F = R.plotBackgroundImage,
				E = R.plotBorderWidth || 0,
				D, C = this.plotLeft,
				B = this.plotTop,
				y = this.plotWidth,
				A = this.plotHeight,
				t = this.plotBox,
				u = this.clipRect,
				x = this.clipBox;
			D = J + (R.shadow ? 8 : 0);
			if(J || I) {
				if(N) {
					N.animate(N.crisp({
						width: P - D,
						height: O - D
					}))
				} else {
					N = {
						fill: I || "none"
					};
					if(J) {
						N.stroke = R.borderColor, N["stroke-width"] = J
					}
					this.chartBackground = Q.rect(D / 2, D / 2, P - D, O - D, R.borderRadius, J).attr(N).addClass("highcharts-background").add().shadow(R.shadow)
				}
			}
			if(H) {
				M ? M.animate(t) : this.plotBackground = Q.rect(C, B, y, A, 0).attr({
					fill: H
				}).add().shadow(R.plotShadow)
			}
			if(F) {
				K ? K.animate(t) : this.plotBGImage = Q.image(F, C, B, y, A).add()
			}
			u ? u.animate({
				width: x.width,
				height: x.height
			}) : this.clipRect = Q.clipRect(x);
			if(E) {
				L ? (L.strokeWidth = -E, L.animate(L.crisp({
					x: C,
					y: B,
					width: y,
					height: A
				}))) : this.plotBorder = Q.rect(C, B, y, A, 0, -E).attr({
					stroke: R.plotBorderColor,
					"stroke-width": E,
					fill: "none",
					zIndex: 1
				}).add()
			}
			this.isDirtyBox = !1
		},
		propFromSeries: function() {
			var q = this,
				p = q.options.chart,
				x, u = q.options.series,
				t, s;
			aw(["inverted", "angular", "polar"], function(y) {
				x = a2[p.type || p.defaultSeriesType];
				s = q[y] || p[y] || x && x.prototype[y];
				for(t = u && u.length; !s && t--;) {
					(x = a2[u[t].type]) && x.prototype[y] && (s = !0)
				}
				q[y] = s
			})
		},
		linkSeries: function() {
			var q = this,
				p = q.series;
			aw(p, function(s) {
				s.linkedSeries.length = 0
			});
			aw(p, function(s) {
				var t = s.options.linkedTo;
				if(bL(t) && (t = t === ":previous" ? q.series[s.index - 1] : q.get(t))) {
					t.linkedSeries.push(s), s.linkedParent = t, s.visible = ax(s.options.visible, t.options.visible, s.visible)
				}
			})
		},
		renderSeries: function() {
			aw(this.series, function(p) {
				p.translate();
				p.render()
			})
		},
		renderLabels: function() {
			var q = this,
				p = q.options.labels;
			p.items && aw(p.items, function(x) {
				var u = aq(p.style, x.style),
					t = bl(u.left) + q.plotLeft,
					s = bl(u.top) + q.plotTop + 12;
				delete u.left;
				delete u.top;
				q.renderer.text(x.html, t, s).attr({
					zIndex: 2
				}).css(u).add()
			})
		},
		render: function() {
			var q = this.axes,
				p = this.renderer,
				y = this.options,
				x, u, t, s;
			this.setTitle();
			this.legend = new bW(this, y.legend);
			this.getStacks && this.getStacks();
			this.getMargins(!0);
			this.setChartSize();
			x = this.plotWidth;
			u = this.plotHeight -= 21;
			aw(q, function(A) {
				A.setScale()
			});
			this.getAxisMargins();
			t = x / this.plotWidth > 1.1;
			s = u / this.plotHeight > 1.05;
			if(t || s) {
				this.maxTicks = null, aw(q, function(A) {
					(A.horiz && t || !A.horiz && s) && A.setTickInterval(!0)
				}), this.getMargins()
			}
			this.drawChartBox();
			this.hasCartesianSeries && aw(q, function(A) {
				A.visible && A.render()
			});
			if(!this.seriesGroup) {
				this.seriesGroup = p.g("series-group").attr({
					zIndex: 3
				}).add()
			}
			this.renderSeries();
			this.renderLabels();
			this.showCredits(y.credits);
			this.hasRendered = !0
		},
		showCredits: function(p) {
			if(p.enabled && !this.credits) {
				this.credits = this.renderer.text(p.text, 0, 0).on("click", function() {
					if(p.href) {
						bi.location.href = p.href
					}
				}).attr({
					align: p.position.align,
					zIndex: 8
				}).css(p.style).add().align(p.position)
			}
		},
		destroy: function() {
			var q = this,
				p = q.axes,
				x = q.series,
				u = q.container,
				t, s = u && u.parentNode;
			a8(q, "destroy");
			aT[q.index] = bn;
			bw--;
			q.renderTo.removeAttribute("data-highcharts-chart");
			aN(q);
			for(t = p.length; t--;) {
				p[t] = p[t].destroy()
			}
			for(t = x.length; t--;) {
				x[t] = x[t].destroy()
			}
			aw("title,subtitle,chartBackground,plotBackground,plotBGImage,plotBorder,seriesGroup,clipRect,credits,pointer,scroller,rangeSelector,legend,resetZoomButton,tooltip,renderer".split(","), function(y) {
				var A = q[y];
				A && A.destroy && (q[y] = A.destroy())
			});
			if(u) {
				u.innerHTML = "", aN(u), s && bt(u)
			}
			for(t in q) {
				delete q[t]
			}
		},
		isReadyToRender: function() {
			var p = this;
			return !bx && bi == bi.top && ap.readyState !== "complete" || bT && !bi.canvg ? (bT ? aJ.push(function() {
				p.firstRender()
			}, p.options.global.canvasToolsURL) : ap.attachEvent("onreadystatechange", function() {
				ap.detachEvent("onreadystatechange", p.firstRender);
				ap.readyState === "complete" && p.firstRender()
			}), !1) : !0
		},
		firstRender: function() {
			var q = this,
				p = q.options;
			if(q.isReadyToRender()) {
				q.getContainer();
				a8(q, "init");
				q.resetMargins();
				q.setChartSize();
				q.propFromSeries();
				q.getAxes();
				aw(p.series || [], function(s) {
					q.initSeries(s)
				});
				q.linkSeries();
				a8(q, "beforeRender");
				if(at.Pointer) {
					q.pointer = new bN(q, p)
				}
				q.render();
				q.renderer.draw();
				if(!q.renderer.imgCount && q.onload) {
					q.onload()
				}
				q.cloneRenderTo(!0)
			}
		},
		onload: function() {
			var p = this;
			aw([this.callback].concat(this.callbacks), function(q) {
				q && p.index !== void 0 && q.apply(p, [p])
			});
			a8(p, "load");
			this.onload = null
		},
		splashArray: function(q, p) {
			var s = p[q],
				s = bE(s) ? s : [s, s, s, s];
			return [ax(p[q + "Top"], s[0]), ax(p[q + "Right"], s[1]), ax(p[q + "Bottom"], s[2]), ax(p[q + "Left"], s[3])]
		}
	};
	var aC = at.CenteredSeriesMixin = {
			getCenter: function() {
				var q = this.options,
					p = this.chart,
					A = 2 * (q.slicedOffset || 0),
					y = p.plotWidth - 2 * A,
					p = p.plotHeight - 2 * A,
					x = q.center,
					x = [ax(x[0], "50%"), ax(x[1], "50%"), q.size || "100%", q.innerSize || 0],
					u = bd(y, p),
					t, s;
				for(t = 0; t < 4; ++t) {
					s = x[t], q = t < 2 || t === 2 && /%$/.test(s), x[t] = (/%$/.test(s) ? [y, p, u, x[2]][t] * parseFloat(s) / 100 : parseFloat(s)) + (q ? A : 0)
				}
				x[3] > x[2] && (x[3] = x[2]);
				return x
			}
		},
		bZ = function() {};
	bZ.prototype = {
		init: function(q, p, s) {
			this.series = q;
			this.color = q.color;
			this.applyOptions(p, s);
			this.pointAttr = {};
			if(q.options.colorByPoint && (p = q.options.colors || q.chart.options.colors, this.color = this.color || p[q.colorCounter++], q.colorCounter === p.length)) {
				q.colorCounter = 0
			}
			q.chart.pointCount++;
			return this
		},
		applyOptions: function(q, p) {
			var t = this.series,
				s = t.options.pointValKey || t.pointValKey,
				q = bZ.prototype.optionsToObject.call(this, q);
			aq(this, q);
			this.options = this.options ? aq(this.options, q) : q;
			if(s) {
				this.y = this[s]
			}
			this.isNull = this.x === null || !a6(this.y, !0);
			if(this.x === void 0 && t) {
				this.x = p === void 0 ? t.autoIncrement(this) : p
			}
			if(t.xAxis && t.xAxis.names) {
				t.xAxis.names[this.x] = this.name
			}
			return this
		},
		optionsToObject: function(q) {
			var p = {},
				A = this.series,
				y = A.options.keys,
				x = y || A.pointArrayMap || ["y"],
				u = x.length,
				t = 0,
				s = 0;
			if(a6(q) || q === null) {
				p[x[0]] = q
			} else {
				if(k(q)) {
					if(!y && q.length > u) {
						A = typeof q[0];
						if(A === "string") {
							p.name = q[0]
						} else {
							if(A === "number") {
								p.x = q[0]
							}
						}
						t++
					}
					for(; s < u;) {
						if(!y || q[t] !== void 0) {
							p[x[s]] = q[t]
						}
						t++;
						s++
					}
				} else {
					if(typeof q === "object") {
						p = q;
						if(q.dataLabels) {
							A._hasPointLabels = !0
						}
						if(q.marker) {
							A._hasPointMarkers = !0
						}
					}
				}
			}
			return p
		},
		destroy: function() {
			var q = this.series.chart,
				p = q.hoverPoints,
				s;
			q.pointCount--;
			if(p && (this.setState(), bX(p, this), !p.length)) {
				q.hoverPoints = null
			}
			if(this === q.hoverPoint) {
				this.onMouseOut()
			}
			if(this.graphic || this.dataLabel) {
				aN(this), this.destroyElements()
			}
			this.legendItem && q.legend.destroyItem(this);
			for(s in this) {
				this[s] = null
			}
		},
		destroyElements: function() {
			for(var q = ["graphic", "dataLabel", "dataLabelUpper", "connector", "shadowGroup"], p, s = 6; s--;) {
				p = q[s], this[p] && (this[p] = this[p].destroy())
			}
		},
		getLabelConfig: function() {
			return {
				x: this.category,
				y: this.y,
				color: this.color,
				key: this.name || this.category,
				series: this.series,
				point: this,
				percentage: this.percentage,
				total: this.total || this.stackTotal
			}
		},
		tooltipFormatter: function(q) {
			var p = this.series,
				x = p.tooltipOptions,
				u = ax(x.valueDecimals, ""),
				t = x.valuePrefix || "",
				s = x.valueSuffix || "";
			aw(p.pointArrayMap || ["y"], function(y) {
				y = "{point." + y;
				if(t || s) {
					q = q.replace(y + "}", t + y + "}" + s)
				}
				q = q.replace(y + "}", y + ":,." + u + "f}")
			});
			return bI(q, {
				point: this,
				series: this.series
			})
		},
		firePointEvent: function(q, p, u) {
			var t = this,
				s = this.series.options;
			(s.point.events[q] || t.options && t.options.events && t.options.events[q]) && this.importEvents();
			q === "click" && s.allowPointSelect && (u = function(x) {
				t.select && t.select(null, x.ctrlKey || x.metaKey || x.shiftKey)
			});
			a8(this, q, p, u)
		},
		visible: !0
	};
	var aV = at.Series = function() {};
	aV.prototype = {
		isCartesian: !0,
		type: "line",
		pointClass: bZ,
		sorted: !0,
		requireSorting: !0,
		pointAttrToOptions: {
			stroke: "lineColor",
			"stroke-width": "lineWidth",
			fill: "fillColor",
			r: "radius"
		},
		directTouch: !1,
		axisTypes: ["xAxis", "yAxis"],
		colorCounter: 0,
		parallelArrays: ["x", "y"],
		init: function(q, p) {
			var y = this,
				x, u, t = q.series,
				s = function(B, A) {
					return ax(B.options.index, B._i) - ax(A.options.index, A._i)
				};
			y.chart = q;
			y.options = p = y.setOptions(p);
			y.linkedSeries = [];
			y.bindAxes();
			aq(y, {
				name: p.name,
				state: "",
				pointAttr: {},
				visible: p.visible !== !1,
				selected: p.selected === !0
			});
			if(bT) {
				p.animation = !1
			}
			u = p.events;
			for(x in u) {
				a0(y, x, u[x])
			}
			if(u && u.click || p.point && p.point.events && p.point.events.click || p.allowPointSelect) {
				q.runTrackerClick = !0
			}
			y.getColor();
			y.getSymbol();
			aw(y.parallelArrays, function(A) {
				y[A + "Data"] = []
			});
			y.setData(p.data, !1);
			if(y.isCartesian) {
				q.hasCartesianSeries = !0
			}
			t.push(y);
			y._i = t.length - 1;
			ac(t, s);
			this.yAxis && ac(this.yAxis.series, s);
			aw(t, function(B, A) {
				B.index = A;
				B.name = B.name || "Series " + (A + 1)
			})
		},
		bindAxes: function() {
			var q = this,
				p = q.options,
				t = q.chart,
				s;
			aw(q.axisTypes || [], function(u) {
				aw(t[u], function(x) {
					s = x.options;
					if(p[u] === s.index || p[u] !== bn && p[u] === s.id || p[u] === bn && s.index === 0) {
						x.series.push(q), q[u] = x, x.isDirty = !0
					}
				});
				!q[u] && q.optionalAxis !== u && az(18, !0)
			})
		},
		updateParallelArrays: function(q, p) {
			var u = q.series,
				t = arguments,
				s = a6(p) ? function(y) {
					var x = y === "y" && u.toYData ? u.toYData(q) : q[y];
					u[y + "Data"][p] = x
				} : function(x) {
					Array.prototype[p].apply(u[x + "Data"], Array.prototype.slice.call(t, 2))
				};
			aw(u.parallelArrays, s)
		},
		autoIncrement: function(q) {
			var s;
			var p = this.options,
				y = this.xIncrement,
				x = p.pointIntervalUnit,
				u = this.xAxis,
				t, y = ax(y, p.pointStart, 0);
			this.pointInterval = p = ax(this.pointInterval, p.pointInterval, 1);
			if(u && u.categories && q.name) {
				if(this.requireSorting = !1, s = (t = k(u.categories)) ? u.categories : u.names, u = s, q = ah(q.name, u), q === -1) {
					if(!t) {
						y = u.length
					}
				} else {
					y = q
				}
			}
			x && (q = new bC(y), x === "day" ? q = +q[bA](q[ar]() + p) : x === "month" ? q = +q[br](q[ay]() + p) : x === "year" && (q = +q[bQ](q[z]() + p)), p = q - y);
			this.xIncrement = y + p;
			return y
		},
		setOptions: function(q) {
			var p = this.chart,
				u = p.options.plotOptions,
				p = p.userOptions || {},
				t = p.plotOptions || {},
				s = u[this.type];
			this.userOptions = q;
			u = bg(s, u.series, q);
			this.tooltipOptions = bg(aS.tooltip, aS.plotOptions[this.type].tooltip, p.tooltip, t.series && t.series.tooltip, t[this.type] && t[this.type].tooltip, q.tooltip);
			s.marker === null && delete u.marker;
			this.zoneAxis = u.zoneAxis;
			q = this.zones = (u.zones || []).slice();
			if((u.negativeColor || u.negativeFillColor) && !u.zones) {
				q.push({
					value: u[this.zoneAxis + "Threshold"] || u.threshold || 0,
					color: u.negativeColor,
					fillColor: u.negativeFillColor
				})
			}
			q.length && av(q[q.length - 1].value) && q.push({
				color: this.color,
				fillColor: this.fillColor
			});
			return u
		},
		getCyclic: function(q, p, x) {
			var u = this.userOptions,
				t = "_" + q + "Index",
				s = q + "Counter";
			p || (av(u[t]) ? p = u[t] : (u[t] = p = this.chart[s] % x.length, this.chart[s] += 1), p = x[p]);
			this[q] = p
		},
		getColor: function() {
			this.options.colorByPoint ? this.options.color = null : this.getCyclic("color", this.options.color || bP[this.type].color, this.chart.options.colors)
		},
		getSymbol: function() {
			var p = this.options.marker;
			this.getCyclic("symbol", p.symbol, this.chart.options.symbols);
			if(/^url/.test(this.symbol)) {
				p.radius = 0
			}
		},
		drawLegendSymbol: a3.drawLineMarker,
		setData: function(J, I, H, E) {
			var D = this,
				C = D.points,
				B = C && C.length || 0,
				A, y = D.options,
				x = D.chart,
				u = null,
				t = D.xAxis,
				s = y.turboThreshold,
				q = this.xData,
				p = this.yData,
				F = (A = D.pointArrayMap) && A.length,
				J = J || [];
			A = J.length;
			I = ax(I, !0);
			if(E !== !1 && A && B === A && !D.cropped && !D.hasGroupedData && D.visible) {
				aw(J, function(L, K) {
					C[K].update && L !== y.data[K] && C[K].update(L, !1, null, !1)
				})
			} else {
				D.xIncrement = null;
				D.colorCounter = 0;
				aw(this.parallelArrays, function(K) {
					D[K + "Data"].length = 0
				});
				if(s && A > s) {
					for(H = 0; u === null && H < A;) {
						u = J[H], H++
					}
					if(a6(u)) {
						u = ax(y.pointStart, 0);
						F = ax(y.pointInterval, 1);
						for(H = 0; H < A; H++) {
							q[H] = u, p[H] = J[H], u += F
						}
						D.xIncrement = u
					} else {
						if(k(u)) {
							if(F) {
								for(H = 0; H < A; H++) {
									u = J[H], q[H] = u[0], p[H] = u.slice(1, F + 1)
								}
							} else {
								for(H = 0; H < A; H++) {
									u = J[H], q[H] = u[0], p[H] = u[1]
								}
							}
						} else {
							az(12)
						}
					}
				} else {
					for(H = 0; H < A; H++) {
						J[H] !== bn && (u = {
							series: D
						}, D.pointClass.prototype.applyOptions.apply(u, [J[H]]), D.updateParallelArrays(u, H))
					}
				}
				bL(p[0]) && az(14, !0);
				D.data = [];
				D.options.data = D.userOptions.data = J;
				for(H = B; H--;) {
					C[H] && C[H].destroy && C[H].destroy()
				}
				if(t) {
					t.minRange = t.userMinRange
				}
				D.isDirty = D.isDirtyData = x.isDirtyBox = !0;
				H = !1
			}
			y.legendType === "point" && (this.processData(), this.generatePoints());
			I && x.redraw(H)
		},
		processData: function(I) {
			var H = this.xData,
				F = this.yData,
				E = H.length,
				D;
			D = 0;
			var C, B, A = this.xAxis,
				y, x = this.options;
			y = x.cropThreshold;
			var u = this.getExtremesFromAll || x.getExtremesFromAll,
				t = this.isCartesian,
				x = A && A.val2lin,
				s = A && A.isLog,
				q, p;
			if(t && !this.isDirty && !A.isDirty && !this.yAxis.isDirty && !I) {
				return !1
			}
			if(A) {
				I = A.getExtremes(), q = I.min, p = I.max
			}
			if(t && this.sorted && !u && (!y || E > y || this.forceCrop)) {
				if(H[E - 1] < q || H[0] > p) {
					H = [], F = []
				} else {
					if(H[0] < q || H[E - 1] > p) {
						D = this.cropData(this.xData, this.yData, q, p), H = D.xData, F = D.yData, D = D.start, C = !0
					}
				}
			}
			for(y = H.length || 1; --y;) {
				E = s ? x(H[y]) - x(H[y - 1]) : H[y] - H[y - 1], E > 0 && (B === bn || E < B) ? B = E : E < 0 && this.requireSorting && az(15)
			}
			this.cropped = C;
			this.cropStart = D;
			this.processedXData = H;
			this.processedYData = F;
			this.closestPointRange = B
		},
		cropData: function(B, A, y, x) {
			var u = B.length,
				t = 0,
				s = u,
				q = ax(this.cropShoulder, 1),
				p;
			for(p = 0; p < u; p++) {
				if(B[p] >= y) {
					t = au(0, p - q);
					break
				}
			}
			for(y = p; y < u; y++) {
				if(B[y] > x) {
					s = y + q;
					break
				}
			}
			return {
				xData: B.slice(t, s),
				yData: A.slice(t, s),
				start: t,
				end: s
			}
		},
		generatePoints: function() {
			var F = this.options.data,
				E = this.data,
				D, C = this.processedXData,
				B = this.processedYData,
				A = this.pointClass,
				y = C.length,
				x = this.cropStart || 0,
				u, t = this.hasGroupedData,
				s, q = [],
				p;
			if(!E && !t) {
				E = [], E.length = F.length, E = this.data = E
			}
			for(p = 0; p < y; p++) {
				u = x + p, t ? (q[p] = (new A).init(this, [C[p]].concat(aK(B[p]))), q[p].dataGroup = this.groupMap[p]) : (E[u] ? s = E[u] : F[u] !== bn && (E[u] = s = (new A).init(this, F[u], C[p])), q[p] = s), q[p].index = u
			}
			if(E && (y !== (D = E.length) || t)) {
				for(p = 0; p < D; p++) {
					if(p === x && !t && (p += y), E[p]) {
						E[p].destroyElements(), E[p].plotX = bn
					}
				}
			}
			this.data = E;
			this.points = q
		},
		getExtremes: function(E) {
			var D = this.yAxis,
				C = this.processedXData,
				B, A = [],
				y = 0;
			B = this.xAxis.getExtremes();
			var x = B.min,
				u = B.max,
				t, s, q, p, E = E || this.stackedYData || this.processedYData || [];
			B = E.length;
			for(p = 0; p < B; p++) {
				if(s = C[p], q = E[p], t = q !== null && q !== bn && (!D.isLog || q.length || q > 0), s = this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || (C[p + 1] || s) >= x && (C[p - 1] || s) <= u, t && s) {
					if(t = q.length) {
						for(; t--;) {
							q[t] !== null && (A[y++] = q[t])
						}
					} else {
						A[y++] = q
					}
				}
			}
			this.dataMin = bq(A);
			this.dataMax = bD(A)
		},
		translate: function() {
			this.processedXData || this.processData();
			this.generatePoints();
			for(var S = this.options, R = S.stacking, Q = this.xAxis, P = Q.categories, O = this.yAxis, N = this.points, M = N.length, L = !!this.modifyValue, K = S.pointPlacement, J = K === "between" || a6(K), I = S.threshold, H = S.startFromThreshold ? I : 0, F, E, D, C, B = Number.MAX_VALUE, S = 0; S < M; S++) {
				var y = N[S],
					s = y.x,
					t = y.y;
				E = y.low;
				var p = R && O.stacks[(this.negStacks && t < (H ? 0 : I) ? "-" : "") + this.stackKey],
					A;
				if(O.isLog && t !== null && t <= 0) {
					y.y = t = null, az(10)
				}
				y.plotX = F = bv(bd(au(-100000, Q.translate(s, 0, 0, 0, 1, K, this.type === "flags")), 100000));
				if(R && this.visible && !y.isNull && p && p[s]) {
					C = this.getStackIndicator(C, s, this.index), A = p[s], t = A.points[C.key], E = t[0], t = t[1], E === H && C.key === p[s].base && (E = ax(I, O.min)), O.isLog && E <= 0 && (E = null), y.total = y.stackTotal = A.total, y.percentage = A.total && y.y / A.total * 100, y.stackY = t, A.setOffset(this.pointXOffset || 0, this.barW || 0)
				}
				y.yBottom = av(E) ? O.translate(E, 0, 1, 0, 1) : null;
				L && (t = this.modifyValue(t, y));
				y.plotY = E = typeof t === "number" && t !== Infinity ? bd(au(-100000, O.translate(t, 0, 1, 0, 1)), 100000) : bn;
				y.isInside = E !== bn && E >= 0 && E <= O.len && F >= 0 && F <= Q.len;
				y.clientX = J ? bv(Q.translate(s, 0, 0, 0, 1)) : F;
				y.negative = y.y < (I || 0);
				y.category = P && P[y.x] !== bn ? P[y.x] : y.x;
				y.isNull || (D !== void 0 && (B = bd(B, aW(F - D))), D = F)
			}
			this.closestPointRangePx = B
		},
		getValidPoints: function(q, p) {
			var s = this.chart;
			return a9(q || this.points || [], function(t) {
				return p && !s.isInsidePlot(t.plotX, t.plotY, s.inverted) ? !1 : !t.isNull
			})
		},
		setClip: function(C) {
			var B = this.chart,
				A = this.options,
				y = B.renderer,
				x = B.inverted,
				u = this.clipBox,
				t = u || B.clipBox,
				s = this.sharedClipKey || ["_sharedClip", C && C.duration, C && C.easing, t.height, A.xAxis, A.yAxis].join(","),
				q = B[s],
				p = B[s + "m"];
			if(!q) {
				if(C) {
					t.width = 0, B[s + "m"] = p = y.clipRect(-99, x ? -B.plotLeft : -B.plotTop, 99, x ? B.chartWidth : B.chartHeight)
				}
				B[s] = q = y.clipRect(t);
				q.count = {
					length: 0
				}
			}
			C && !q.count[this.index] && (q.count[this.index] = !0, q.count.length += 1);
			if(A.clip !== !1) {
				this.group.clip(C || u ? q : B.clipRect), this.markerGroup.clip(p), this.sharedClipKey = s
			}
			C || (q.count[this.index] && (delete q.count[this.index], q.count.length -= 1), q.count.length === 0 && s && B[s] && (u || (B[s] = B[s].destroy()), B[s + "m"] && (B[s + "m"] = B[s + "m"].destroy())))
		},
		animate: function(q) {
			var p = this.chart,
				t = this.options.animation,
				s;
			if(t && !bE(t)) {
				t = bP[this.type].animation
			}
			q ? this.setClip(t) : (s = this.sharedClipKey, (q = p[s]) && q.animate({
				width: p.plotSizeX
			}, t), p[s + "m"] && p[s + "m"].animate({
				width: p.plotSizeX + 99
			}, t), this.animate = null)
		},
		afterAnimate: function() {
			this.setClip();
			a8(this, "afterAnimate")
		},
		drawPoints: function() {
			var N, M = this.points,
				L = this.chart,
				K, J, I, H, F, E, D, C, B = this.options.marker,
				A = this.pointAttr[""],
				y, x, u, t = this.markerGroup,
				p = ax(B.enabled, this.xAxis.isRadial, this.closestPointRangePx > 2 * B.radius);
			if(B.enabled !== !1 || this._hasPointMarkers) {
				for(I = M.length; I--;) {
					if(H = M[I], K = aR(H.plotX), J = H.plotY, C = H.graphic, y = H.marker || {}, x = !!H.marker, N = p && y.enabled === bn || y.enabled, u = H.isInside, N && a6(J) && H.y !== null) {
						if(N = H.pointAttr[H.selected ? "select" : ""] || A, F = N.r, E = ax(y.symbol, this.symbol), D = E.indexOf("url") === 0, C) {
							C[u ? "show" : "hide"](!0).attr(N).animate(aq({
								x: K - F,
								y: J - F
							}, C.symbolName ? {
								width: 2 * F,
								height: 2 * F
							} : {}))
						} else {
							if(u && (F > 0 || D)) {
								H.graphic = L.renderer.symbol(E, K - F, J - F, 2 * F, 2 * F, x ? y : B).attr(N).add(t)
							}
						}
					} else {
						if(C) {
							H.graphic = C.destroy()
						}
					}
				}
			}
		},
		convertAttribs: function(q, p, A, y) {
			var x = this.pointAttrToOptions,
				u, t, s = {},
				q = q || {},
				p = p || {},
				A = A || {},
				y = y || {};
			for(u in x) {
				t = x[u], s[u] = ax(q[t], p[u], A[u], y[u])
			}
			return s
		},
		getAttribs: function() {
			var O = this,
				N = O.options,
				M = bP[O.type].marker ? N.marker : N,
				L = M.states,
				K = L.hover,
				J, I = O.color,
				H = O.options.negativeColor,
				F = {
					stroke: I,
					fill: I
				},
				E = O.points || [],
				D, C = [],
				B, A = O.pointAttrToOptions;
			J = O.hasPointSpecificOptions;
			var y = M.lineColor,
				p = M.fillColor;
			D = N.turboThreshold;
			var x = O.zones,
				u = O.zoneAxis || "y",
				q, s;
			N.marker ? (K.radius = +K.radius || +M.radius + +K.radiusPlus, K.lineWidth = K.lineWidth || M.lineWidth + K.lineWidthPlus) : (K.color = K.color || bf(K.color || I).brighten(K.brightness).get(), K.negativeColor = K.negativeColor || bf(K.negativeColor || H).brighten(K.brightness).get());
			C[""] = O.convertAttribs(M, F);
			aw(["hover", "select"], function(t) {
				C[t] = O.convertAttribs(L[t], C[""])
			});
			O.pointAttr = C;
			I = E.length;
			if(!D || I < D || J) {
				for(; I--;) {
					D = E[I];
					if((M = D.options && D.options.marker || D.options) && M.enabled === !1) {
						M.radius = 0
					}
					F = null;
					if(x.length) {
						J = 0;
						for(F = x[J]; D[u] >= F.value;) {
							F = x[++J]
						}
						D.color = D.fillColor = F = ax(F.color, O.color)
					}
					J = N.colorByPoint || D.color;
					if(D.options) {
						for(s in A) {
							av(M[A[s]]) && (J = !0)
						}
					}
					if(J) {
						M = M || {};
						B = [];
						L = M.states || {};
						J = L.hover = L.hover || {};
						if(!N.marker || D.negative && !J.fillColor && !K.fillColor) {
							J[O.pointAttrToOptions.fill] = J.color || !D.options.color && K[D.negative && H ? "negativeColor" : "color"] || bf(D.color).brighten(J.brightness || K.brightness).get()
						}
						q = {
							color: D.color
						};
						if(!p) {
							q.fillColor = D.color
						}
						if(!y) {
							q.lineColor = D.color
						}
						M.hasOwnProperty("color") && !M.color && delete M.color;
						if(F && !K.fillColor) {
							J.fillColor = F
						}
						B[""] = O.convertAttribs(aq(q, M), C[""]);
						B.hover = O.convertAttribs(L.hover, C.hover, B[""]);
						B.select = O.convertAttribs(L.select, C.select, B[""])
					} else {
						B = C
					}
					D.pointAttr = B
				}
			}
		},
		destroy: function() {
			var q = this,
				p = q.chart,
				A = /AppleWebKit\/533/.test(bR),
				y, x = q.data || [],
				u, t, s;
			a8(q, "destroy");
			aN(q);
			aw(q.axisTypes || [], function(B) {
				if(s = q[B]) {
					bX(s.series, q), s.isDirty = s.forceRedraw = !0
				}
			});
			q.legendItem && q.chart.legend.destroyItem(q);
			for(y = x.length; y--;) {
				(u = x[y]) && u.destroy && u.destroy()
			}
			q.points = null;
			clearTimeout(q.animationTimeout);
			for(t in q) {
				q[t] instanceof aZ && !q[t].survive && (y = A && t === "group" ? "hide" : "destroy", q[t][y]())
			}
			if(p.hoverSeries === q) {
				p.hoverSeries = null
			}
			bX(p.series, q);
			for(t in q) {
				delete q[t]
			}
		},
		getGraphPath: function(C, B, A) {
			var y = this,
				x = y.options,
				u = x.step,
				t, s = [],
				q = [],
				p, C = C || y.points;
			(t = C.reversed) && C.reverse();
			(u = {
				right: 1,
				center: 2
			}[u] || u && 3) && t && (u = 4 - u);
			x.connectNulls && !B && !A && (C = this.getValidPoints(C));
			aw(C, function(F, E) {
				var D = F.plotX,
					I = F.plotY,
					H = C[E - 1];
				if((F.leftCliff || H && H.rightCliff) && !A) {
					p = !0
				}
				F.isNull && !av(B) && E > 0 ? p = !x.connectNulls : F.isNull && !B ? p = !0 : (E === 0 || p ? H = [aP, F.plotX, F.plotY] : y.getPointSpline ? H = y.getPointSpline(C, F, E) : u ? (H = u === 1 ? [aU, H.plotX, I] : u === 2 ? [aU, (H.plotX + D) / 2, H.plotY, aU, (H.plotX + D) / 2, I] : [aU, D, H.plotY], H.push(aU, D, I)) : H = [aU, D, I], q.push(F.x), u && q.push(F.x), s.push.apply(s, H), p = !1)
			});
			s.xMap = q;
			return y.graphPath = s
		},
		drawGraph: function() {
			var q = this,
				p = this.options,
				x = [
					["graph", p.lineColor || this.color, p.dashStyle]
				],
				u = p.lineWidth,
				t = p.linecap !== "square",
				s = (this.gappedPath || this.getGraphPath).call(this);
			aw(this.zones, function(A, y) {
				x.push(["zoneGraph" + y, A.color || q.color, A.dashStyle || p.dashStyle])
			});
			aw(x, function(C, B) {
				var A = C[0],
					y = q[A];
				if(y) {
					y.endX = s.xMap, y.animate({
						d: s
					})
				} else {
					if(u && s.length) {
						y = {
							stroke: C[1],
							"stroke-width": u,
							fill: "none",
							zIndex: 1
						}, C[2] ? y.dashstyle = C[2] : t && (y["stroke-linecap"] = y["stroke-linejoin"] = "round"), y = q[A] = q.chart.renderer.path(s).attr(y).add(q.group).shadow(B < 2 && p.shadow)
					}
				}
				if(y) {
					y.startX = s.xMap, y.isArea = s.isArea
				}
			})
		},
		applyZones: function() {
			var O = this,
				N = this.chart,
				M = N.renderer,
				L = this.zones,
				K, J, I = this.clips || [],
				H, F = this.graph,
				E = this.area,
				D = au(N.chartWidth, N.chartHeight),
				C = this[(this.zoneAxis || "y") + "Axis"],
				B, A = C.reversed,
				y = N.inverted,
				p = C.horiz,
				x, u, q, t = !1;
			if(L.length && (F || E) && C.min !== bn) {
				F && F.hide(), E && E.hide(), B = C.getExtremes(), aw(L, function(P, s) {
					K = A ? p ? N.plotWidth : 0 : p ? 0 : C.toPixels(B.min);
					K = bd(au(ax(J, K), 0), D);
					J = bd(au(bk(C.toPixels(ax(P.value, B.max), !0)), 0), D);
					t && (K = J = C.toPixels(B.max));
					x = Math.abs(K - J);
					u = bd(K, J);
					q = au(K, J);
					if(C.isXAxis) {
						if(H = {
								x: y ? q : u,
								y: 0,
								width: x,
								height: D
							}, !p) {
							H.x = N.plotHeight - H.x
						}
					} else {
						if(H = {
								x: 0,
								y: y ? q : u,
								width: D,
								height: x
							}, p) {
							H.y = N.plotWidth - H.y
						}
					}
					N.inverted && M.isVML && (H = C.isXAxis ? {
						x: 0,
						y: A ? u : q,
						height: H.width,
						width: N.chartWidth
					} : {
						x: H.y - N.plotLeft - N.spacingBox.x,
						y: 0,
						width: H.height,
						height: N.chartHeight
					});
					I[s] ? I[s].animate(H) : (I[s] = M.clipRect(H), F && O["zoneGraph" + s].clip(I[s]), E && O["zoneArea" + s].clip(I[s]));
					t = P.value > B.max
				}), this.clips = I
			}
		},
		invertGroups: function() {
			function q() {
				var t = {
					width: p.yAxis.len,
					height: p.xAxis.len
				};
				aw(["group", "markerGroup"], function(u) {
					p[u] && p[u].attr(t).invert()
				})
			}
			var p = this,
				s = p.chart;
			if(p.xAxis) {
				a0(s, "resize", q), a0(p, "destroy", function() {
					aN(s, "resize", q)
				}), q(), p.invertGroups = q
			}
		},
		plotGroup: function(q, p, y, x, u) {
			var t = this[q],
				s = !t;
			s && (this[q] = t = this.chart.renderer.g(p).attr({
				zIndex: x || 0.1
			}).add(u), t.addClass("highcharts-series-" + this.index));
			t.attr({
				visibility: y
			})[s ? "attr" : "animate"](this.getPlotBox());
			return t
		},
		getPlotBox: function() {
			var q = this.chart,
				p = this.xAxis,
				s = this.yAxis;
			if(q.inverted) {
				p = s, s = this.xAxis
			}
			return {
				translateX: p ? p.left : q.plotLeft,
				translateY: s ? s.top : q.plotTop,
				scaleX: 1,
				scaleY: 1
			}
		},
		render: function() {
			var B = this,
				A = B.chart,
				y, x = B.options,
				u = !!B.animate && A.renderer.isSVG && aY(x.animation).duration,
				t = B.visible ? "inherit" : "hidden",
				s = x.zIndex,
				q = B.hasRendered,
				p = A.seriesGroup;
			y = B.plotGroup("group", "series", t, s, p);
			B.markerGroup = B.plotGroup("markerGroup", "markers", t, s, p);
			u && B.animate(!0);
			B.getAttribs();
			y.inverted = B.isCartesian ? A.inverted : !1;
			B.drawGraph && (B.drawGraph(), B.applyZones());
			aw(B.points, function(C) {
				C.redraw && C.redraw()
			});
			B.drawDataLabels && B.drawDataLabels();
			B.visible && B.drawPoints();
			B.drawTracker && B.options.enableMouseTracking !== !1 && B.drawTracker();
			A.inverted && B.invertGroups();
			x.clip !== !1 && !B.sharedClipKey && !q && y.clip(A.clipRect);
			u && B.animate();
			if(!q) {
				B.animationTimeout = v(function() {
					B.afterAnimate()
				}, u)
			}
			B.isDirty = B.isDirtyData = !1;
			B.hasRendered = !0
		},
		redraw: function() {
			var q = this.chart,
				p = this.isDirty || this.isDirtyData,
				u = this.group,
				t = this.xAxis,
				s = this.yAxis;
			u && (q.inverted && u.attr({
				width: q.plotWidth,
				height: q.plotHeight
			}), u.animate({
				translateX: ax(t && t.left, q.plotLeft),
				translateY: ax(s && s.top, q.plotTop)
			}));
			this.translate();
			this.render();
			p && delete this.kdTree
		},
		kdDimensions: 1,
		kdAxisArray: ["clientX", "plotY"],
		searchPoint: function(q, p) {
			var u = this.xAxis,
				t = this.yAxis,
				s = this.chart.inverted;
			return this.searchKDTree({
				clientX: s ? u.len - q.chartY + u.pos : q.chartX - u.pos,
				plotY: s ? t.len - q.chartX + t.pos : q.chartY - t.pos
			}, p)
		},
		buildKDTree: function() {
			function q(A, y, x) {
				var u, t;
				if(t = A && A.length) {
					return u = p.kdAxisArray[y % x], A.sort(function(C, B) {
						return C[u] - B[u]
					}), t = Math.floor(t / 2), {
						point: A[t],
						left: q(A.slice(0, t), y + 1, x),
						right: q(A.slice(t + 1), y + 1, x)
					}
				}
			}
			var p = this,
				s = p.kdDimensions;
			delete p.kdTree;
			v(function() {
				p.kdTree = q(p.getValidPoints(null, !p.directTouch), s, s)
			}, p.options.kdNow ? 0 : 1)
		},
		searchKDTree: function(q, p) {
			function y(J, I, H, F) {
				var E = I.point,
					D = x.kdAxisArray[H % F],
					C, B, A = E;
				B = av(J[u]) && av(E[u]) ? Math.pow(J[u] - E[u], 2) : null;
				C = av(J[t]) && av(E[t]) ? Math.pow(J[t] - E[t], 2) : null;
				C = (B || 0) + (C || 0);
				E.dist = av(C) ? Math.sqrt(C) : Number.MAX_VALUE;
				E.distX = av(B) ? Math.sqrt(B) : Number.MAX_VALUE;
				D = J[D] - E[D];
				C = D < 0 ? "left" : "right";
				B = D < 0 ? "right" : "left";
				I[C] && (C = y(J, I[C], H + 1, F), A = C[s] < A[s] ? C : E);
				I[B] && Math.sqrt(D * D) < A[s] && (J = y(J, I[B], H + 1, F), A = J[s] < A[s] ? J : A);
				return A
			}
			var x = this,
				u = this.kdAxisArray[0],
				t = this.kdAxisArray[1],
				s = p ? "distX" : "dist";
			this.kdTree || this.buildKDTree();
			if(this.kdTree) {
				return y(q, this.kdTree, this.kdDimensions, this.kdDimensions)
			}
		}
	};
	m.prototype = {
		destroy: function() {
			bM(this, this.axis)
		},
		render: function(q) {
			var p = this.options,
				s = p.format,
				s = s ? bI(s, this) : p.formatter.call(this);
			this.label ? this.label.attr({
				text: s,
				visibility: "hidden"
			}) : this.label = this.axis.chart.renderer.text(s, null, null, p.useHTML).css(p.style).attr({
				align: this.textAlign,
				rotation: p.rotation,
				visibility: "hidden"
			}).add(q)
		},
		setOffset: function(B, A) {
			var y = this.axis,
				x = y.chart,
				u = x.inverted,
				t = y.reversed,
				t = this.isNegative && !t || !this.isNegative && t,
				s = y.translate(y.usePercentage ? 100 : this.total, 0, 0, 0, 1),
				y = y.translate(0),
				y = aW(s - y),
				q = x.xAxis[0].translate(this.x) + B,
				p = x.plotHeight,
				t = {
					x: u ? t ? s : s - y : q,
					y: u ? p - q - A : t ? p - s - y : p - s,
					width: u ? y : A,
					height: u ? A : y
				};
			if(u = this.label) {
				u.align(this.alignOptions, null, t), t = u.alignAttr, u[this.options.crop === !1 || x.isInsidePlot(t.x, t.y) ? "show" : "hide"](!0)
			}
		}
	};
	aA.prototype.getStacks = function() {
		var p = this;
		aw(p.yAxis, function(q) {
			if(q.stacks && q.hasVisibleSeries) {
				q.oldStacks = q.stacks
			}
		});
		aw(p.series, function(q) {
			if(q.options.stacking && (q.visible === !0 || p.options.chart.ignoreHiddenSeries === !1)) {
				q.stackKey = q.type + ax(q.options.stack, "")
			}
		})
	};
	aB.prototype.buildStacks = function() {
		var q = this.series,
			p, u = ax(this.options.reversedStacks, !0),
			t = q.length,
			s;
		if(!this.isXAxis) {
			this.usePercentage = !1;
			for(s = t; s--;) {
				q[u ? s : t - s - 1].setStackedPoints()
			}
			for(s = t; s--;) {
				p = q[u ? s : t - s - 1], p.setStackCliffs && p.setStackCliffs()
			}
			if(this.usePercentage) {
				for(s = 0; s < t; s++) {
					q[s].setPercentStacks()
				}
			}
		}
	};
	aB.prototype.renderStackTotals = function() {
		var q = this.chart,
			p = q.renderer,
			x = this.stacks,
			u, t, s = this.stackTotalGroup;
		if(!s) {
			this.stackTotalGroup = s = p.g("stack-labels").attr({
				visibility: "visible",
				zIndex: 6
			}).add()
		}
		s.translate(q.plotLeft, q.plotTop);
		for(u in x) {
			for(t in q = x[u], q) {
				q[t].render(s)
			}
		}
	};
	aB.prototype.resetStacks = function() {
		var q = this.stacks,
			p, s;
		if(!this.isXAxis) {
			for(p in q) {
				for(s in q[p]) {
					q[p][s].touched < this.stacksTouched ? (q[p][s].destroy(), delete q[p][s]) : (q[p][s].total = null, q[p][s].cum = 0)
				}
			}
		}
	};
	aB.prototype.cleanStacks = function() {
		var q, p, s;
		if(!this.isXAxis) {
			if(this.oldStacks) {
				q = this.stacks = this.oldStacks
			}
			for(p in q) {
				for(s in q[p]) {
					q[p][s].cum = q[p][s].total
				}
			}
		}
	};
	aV.prototype.setStackedPoints = function() {
		if(this.options.stacking && !(this.visible !== !0 && this.chart.options.chart.ignoreHiddenSeries !== !1)) {
			var R = this.processedXData,
				Q = this.processedYData,
				P = [],
				O = Q.length,
				N = this.options,
				M = N.threshold,
				L = N.startFromThreshold ? M : 0,
				K = N.stack,
				N = N.stacking,
				J = this.stackKey,
				I = "-" + J,
				H = this.negStacks,
				F = this.yAxis,
				E = F.stacks,
				D = F.oldStacks,
				C, B, A, p, s, t, y;
			F.stacksTouched += 1;
			for(s = 0; s < O; s++) {
				t = R[s];
				y = Q[s];
				C = this.getStackIndicator(C, t, this.index);
				p = C.key;
				A = (B = H && y < (L ? 0 : M)) ? I : J;
				E[A] || (E[A] = {});
				if(!E[A][t]) {
					D[A] && D[A][t] ? (E[A][t] = D[A][t], E[A][t].total = null) : E[A][t] = new m(F, F.options.stackLabels, B, t, K)
				}
				A = E[A][t];
				if(y !== null) {
					A.points[p] = A.points[this.index] = [ax(A.cum, L)];
					if(!av(A.cum)) {
						A.base = p
					}
					A.touched = F.stacksTouched;
					C.index > 0 && this.singleStacks === !1 && (A.points[p][0] = A.points[this.index + "," + t + ",0"][0])
				}
				N === "percent" ? (B = B ? J : I, H && E[B] && E[B][t] ? (B = E[B][t], A.total = B.total = au(B.total, A.total) + aW(y) || 0) : A.total = bv(A.total + (aW(y) || 0))) : A.total = bv(A.total + (y || 0));
				A.cum = ax(A.cum, L) + (y || 0);
				if(y !== null) {
					A.points[p].push(A.cum), P[s] = A.cum
				}
			}
			if(N === "percent") {
				F.usePercentage = !0
			}
			this.stackedYData = P;
			F.oldStacks = {}
		}
	};
	aV.prototype.setPercentStacks = function() {
		var q = this,
			p = q.stackKey,
			u = q.yAxis.stacks,
			t = q.processedXData,
			s;
		aw([p, "-" + p], function(x) {
			var C;
			for(var B = t.length, A, y; B--;) {
				if(A = t[B], s = q.getStackIndicator(s, A, q.index), C = (y = u[x] && u[x][A]) && y.points[s.key], A = C) {
					y = y.total ? 100 / y.total : 0, A[0] = bv(A[0] * y), A[1] = bv(A[1] * y), q.stackedYData[B] = A[1]
				}
			}
		})
	};
	aV.prototype.getStackIndicator = function(q, p, s) {
		!av(q) || q.x !== p ? q = {
			x: p,
			index: 0
		} : q.index++;
		q.key = [s, p, q.index].join(",");
		return q
	};
	aq(aA.prototype, {
		addSeries: function(q, p, u) {
			var t, s = this;
			q && (p = ax(p, !0), a8(s, "addSeries", {
				options: q
			}, function() {
				t = s.initSeries(q);
				s.isDirtyLegend = !0;
				s.linkSeries();
				p && s.redraw(u)
			}));
			return t
		},
		addAxis: function(q, p, x, u) {
			var t = p ? "xAxis" : "yAxis",
				s = this.options,
				q = bg(q, {
					index: this[t].length,
					isX: p
				});
			new aB(this, q);
			s[t] = aK(s[t] || {});
			s[t].push(q);
			ax(x, !0) && this.redraw(u)
		},
		showLoading: function(q) {
			var p = this,
				x = p.options,
				u = p.loadingDiv,
				t = x.loading,
				s = function() {
					u && a1(u, {
						left: p.plotLeft + "px",
						top: p.plotTop + "px",
						width: p.plotWidth + "px",
						height: p.plotHeight + "px"
					})
				};
			if(!u) {
				p.loadingDiv = u = G(aL, {
					className: "highcharts-loading"
				}, aq(t.style, {
					zIndex: 10,
					display: "none"
				}), p.container), p.loadingSpan = G("span", null, t.labelStyle, u), a0(p, "redraw", s)
			}
			p.loadingSpan.innerHTML = q || x.lang.loading;
			if(!p.loadingShown) {
				a1(u, {
					opacity: 0,
					display: ""
				}), e(u, {
					opacity: t.style.opacity
				}, {
					duration: t.showDuration || 0
				}), p.loadingShown = !0
			}
			s()
		},
		hideLoading: function() {
			var q = this.options,
				p = this.loadingDiv;
			p && e(p, {
				opacity: 0
			}, {
				duration: q.loading.hideDuration || 100,
				complete: function() {
					a1(p, {
						display: "none"
					})
				}
			});
			this.loadingShown = !1
		}
	});
	aq(bZ.prototype, {
		update: function(E, D, C, B) {
			function A() {
				y.applyOptions(E);
				if(y.y === null && u) {
					y.graphic = u.destroy()
				}
				if(bE(E, !0)) {
					y.redraw = function() {
						if(u && u.element && E && E.marker && E.marker.symbol) {
							y.graphic = u.destroy()
						}
						if(E && E.dataLabels && y.dataLabel) {
							y.dataLabel = y.dataLabel.destroy()
						}
						y.redraw = null
					}
				}
				t = y.index;
				x.updateParallelArrays(y, t);
				if(p && y.name) {
					p[y.x] = y.name
				}
				q.data[t] = bE(q.data[t], !0) ? y.options : E;
				x.isDirty = x.isDirtyData = !0;
				if(!x.fixedBox && x.hasCartesianSeries) {
					s.isDirtyBox = !0
				}
				if(q.legendType === "point") {
					s.isDirtyLegend = !0
				}
				D && s.redraw(C)
			}
			var y = this,
				x = y.series,
				u = y.graphic,
				t, s = x.chart,
				q = x.options,
				p = x.xAxis && x.xAxis.names,
				D = ax(D, !0);
			B === !1 ? A() : y.firePointEvent("update", {
				options: E
			}, A)
		},
		remove: function(q, p) {
			this.series.removePoint(ah(this, this.series.data), q, p)
		}
	});
	aq(aV.prototype, {
		addPoint: function(F, E, D, C) {
			var B = this.options,
				A = this.data,
				y = this.chart,
				x = this.xAxis && this.xAxis.names,
				u = B.data,
				t, s = this.xData,
				q, p;
			aO(C, y);
			E = ax(E, !0);
			C = {
				series: this
			};
			this.pointClass.prototype.applyOptions.apply(C, [F]);
			p = C.x;
			q = s.length;
			if(this.requireSorting && p < s[q - 1]) {
				for(t = !0; q && s[q - 1] > p;) {
					q--
				}
			}
			this.updateParallelArrays(C, "splice", q, 0, 0);
			this.updateParallelArrays(C, q);
			if(x && C.name) {
				x[p] = C.name
			}
			u.splice(q, 0, F);
			t && (this.data.splice(q, 0, null), this.processData());
			B.legendType === "point" && this.generatePoints();
			D && (A[0] && A[0].remove ? A[0].remove(!1) : (A.shift(), this.updateParallelArrays(C, "shift"), u.shift()));
			this.isDirtyData = this.isDirty = !0;
			E && (this.getAttribs(), y.redraw())
		},
		removePoint: function(B, A, y) {
			var x = this,
				u = x.data,
				t = u[B],
				s = x.points,
				q = x.chart,
				p = function() {
					s && s.length === u.length && s.splice(B, 1);
					u.splice(B, 1);
					x.options.data.splice(B, 1);
					x.updateParallelArrays(t || {
						series: x
					}, "splice", B, 1);
					t && t.destroy();
					x.isDirty = !0;
					x.isDirtyData = !0;
					A && q.redraw()
				};
			aO(y, q);
			A = ax(A, !0);
			t ? t.firePointEvent("remove", null, p) : p()
		},
		remove: function(q, p) {
			var t = this,
				s = t.chart;
			a8(t, "remove", null, function() {
				t.destroy();
				s.isDirtyLegend = s.isDirtyBox = !0;
				s.linkSeries();
				ax(q, !0) && s.redraw(p)
			})
		},
		update: function(B, A) {
			var y = this,
				x = this.chart,
				u = this.userOptions,
				t = this.type,
				s = a2[t].prototype,
				q = ["group", "markerGroup", "dataLabelsGroup"],
				p;
			if(B.type && B.type !== t || B.zIndex !== void 0) {
				q.length = 0
			}
			aw(q, function(C) {
				q[C] = y[C];
				delete y[C]
			});
			B = bg(u, {
				animation: !1,
				index: this.index,
				pointStart: this.xData[0]
			}, {
				data: this.options.data
			}, B);
			this.remove(!1);
			for(p in s) {
				this[p] = bn
			}
			aq(this, a2[B.type || t].prototype);
			aw(q, function(C) {
				y[C] = q[C]
			});
			this.init(x, B);
			x.linkSeries();
			ax(A, !0) && x.redraw(!1)
		}
	});
	aq(aB.prototype, {
		update: function(q, p) {
			var s = this.chart,
				q = s.options[this.coll][this.options.index] = bg(this.userOptions, q);
			this.destroy(!0);
			this.init(s, aq(q, {
				events: bn
			}));
			s.isDirtyBox = !0;
			ax(p, !0) && s.redraw()
		},
		remove: function(q) {
			for(var p = this.chart, u = this.coll, t = this.series, s = t.length; s--;) {
				t[s] && t[s].remove(!1)
			}
			bX(p.axes, this);
			bX(p[u], this);
			p.options[u].splice(this.options.index, 1);
			aw(p[u], function(y, x) {
				y.options.index = x
			});
			this.destroy();
			p.isDirtyBox = !0;
			ax(q, !0) && p.redraw()
		},
		setTitle: function(q, p) {
			this.update({
				title: q
			}, p)
		},
		setCategories: function(q, p) {
			this.update({
				categories: q
			}, p)
		}
	});
	var b = bG(aV);
	a2.line = b;
	bP.area = bg(a5, {
		softThreshold: !1,
		threshold: 0
	});
	var l = bG(aV, {
		type: "area",
		singleStacks: !1,
		getStackPoints: function() {
			var H = [],
				F = [],
				E = this.xAxis,
				D = this.yAxis,
				C = D.stacks[this.stackKey],
				B = {},
				A = this.points,
				y = this.index,
				x = D.series,
				u = x.length,
				t, s = ax(D.options.reversedStacks, !0) ? 1 : -1,
				q, p;
			if(this.options.stacking) {
				for(q = 0; q < A.length; q++) {
					B[A[q].x] = A[q]
				}
				for(p in C) {
					C[p].total !== null && F.push(p)
				}
				F.sort(function(J, I) {
					return J - I
				});
				t = aD(x, function() {
					return this.visible
				});
				aw(F, function(K, I) {
					var M = 0,
						L, J;
					if(B[K] && !B[K].isNull) {
						H.push(B[K]), aw([-1, 1], function(N) {
							var Q = N === 1 ? "rightNull" : "leftNull",
								O = 0,
								P = C[F[I + N]];
							if(P) {
								for(q = y; q >= 0 && q < u;) {
									L = P.points[q], L || (q === y ? B[K][Q] = !0 : t[q] && (J = C[K].points[q]) && (O -= J[1] - J[0])), q += s
								}
							}
							B[K][N === 1 ? "rightCliff" : "leftCliff"] = O
						})
					} else {
						for(q = y; q >= 0 && q < u;) {
							if(L = C[K].points[q]) {
								M = L[1];
								break
							}
							q += s
						}
						M = D.toPixels(M, !0);
						H.push({
							isNull: !0,
							plotX: E.toPixels(K, !0),
							plotY: M,
							yBottom: M
						})
					}
				})
			}
			return H
		},
		getGraphPath: function(K) {
			var J = aV.prototype.getGraphPath,
				I = this.options,
				H = I.stacking,
				F = this.yAxis,
				E, D, C = [],
				B = [],
				A = this.index,
				y, x = F.stacks[this.stackKey],
				u = I.threshold,
				t = F.getThreshold(I.threshold),
				s, I = I.connectNulls || H === "percent",
				p = function(L, R, O) {
					var M = K[L],
						L = H && x[M.x].points[A],
						Q = M[O + "Null"] || 0,
						O = M[O + "Cliff"] || 0,
						P, N, M = !0;
					O || Q ? (P = (Q ? L[0] : L[1]) + O, N = L[0] + O, M = !!Q) : !H && K[R] && K[R].isNull && (P = N = u);
					P !== void 0 && (B.push({
						plotX: y,
						plotY: P === null ? t : F.getThreshold(P),
						isNull: M
					}), C.push({
						plotX: y,
						plotY: N === null ? t : F.getThreshold(N)
					}))
				},
				K = K || this.points;
			H && (K = this.getStackPoints());
			for(E = 0; E < K.length; E++) {
				if(D = K[E].isNull, y = ax(K[E].rectPlotX, K[E].plotX), s = ax(K[E].yBottom, t), !D || I) {
					I || p(E, E - 1, "left");
					if(!D || H || !I) {
						B.push(K[E]), C.push({
							x: E,
							plotX: y,
							plotY: s
						})
					}
					I || p(E, E + 1, "right")
				}
			}
			E = J.call(this, B, !0, !0);
			C.reversed = !0;
			D = J.call(this, C, !0, !0);
			D.length && (D[0] = aU);
			D = E.concat(D);
			J = J.call(this, B, !1, I);
			D.xMap = E.xMap;
			this.areaPath = D;
			return J
		},
		drawGraph: function() {
			this.areaPath = [];
			aV.prototype.drawGraph.apply(this);
			var q = this,
				p = this.areaPath,
				t = this.options,
				s = [
					["area", this.color, t.fillColor]
				];
			aw(this.zones, function(u, x) {
				s.push(["zoneArea" + x, u.color || q.color, u.fillColor || t.fillColor])
			});
			aw(s, function(y) {
				var x = y[0],
					u = q[x];
				u ? (u.endX = p.xMap, u.animate({
					d: p
				})) : (u = {
					fill: y[2] || y[1],
					zIndex: 0
				}, y[2] || (u["fill-opacity"] = ax(t.fillOpacity, 0.75)), u = q[x] = q.chart.renderer.path(p).attr(u).add(q.group), u.isArea = !0);
				u.startX = p.xMap;
				u.shiftUnit = t.step ? 2 : 1
			})
		},
		drawLegendSymbol: a3.drawRectangle
	});
	a2.area = l;
	bP.spline = bg(a5);
	b = bG(aV, {
		type: "spline",
		getPointSpline: function(D, C, B) {
			var A = C.plotX,
				y = C.plotY,
				x = D[B - 1],
				B = D[B + 1],
				u, t, s, q;
			if(x && !x.isNull && B && !B.isNull) {
				D = x.plotY;
				s = B.plotX;
				var B = B.plotY,
					p = 0;
				u = (1.5 * A + x.plotX) / 2.5;
				t = (1.5 * y + D) / 2.5;
				s = (1.5 * A + s) / 2.5;
				q = (1.5 * y + B) / 2.5;
				s !== u && (p = (q - t) * (s - A) / (s - u) + y - q);
				t += p;
				q += p;
				t > D && t > y ? (t = au(D, y), q = 2 * y - t) : t < D && t < y && (t = bd(D, y), q = 2 * y - t);
				q > B && q > y ? (q = au(B, y), t = 2 * y - q) : q < B && q < y && (q = bd(B, y), t = 2 * y - q);
				C.rightContX = s;
				C.rightContY = q
			}
			C = ["C", ax(x.rightContX, x.plotX), ax(x.rightContY, x.plotY), ax(u, A), ax(t, y), A, y];
			x.rightContX = x.rightContY = null;
			return C
		}
	});
	a2.spline = b;
	bP.areaspline = bg(bP.area);
	l = l.prototype;
	b = bG(b, {
		type: "areaspline",
		getStackPoints: l.getStackPoints,
		getGraphPath: l.getGraphPath,
		setStackCliffs: l.setStackCliffs,
		drawGraph: l.drawGraph,
		drawLegendSymbol: a3.drawRectangle
	});
	a2.areaspline = b;
	bP.column = bg(a5, {
		borderColor: "#FFFFFF",
		borderRadius: 0,
		groupPadding: 0.2,
		marker: null,
		pointPadding: 0.1,
		minPointLength: 0,
		cropThreshold: 50,
		pointRange: null,
		states: {
			hover: {
				brightness: 0.1,
				shadow: !1,
				halo: !1
			},
			select: {
				color: "#C0C0C0",
				borderColor: "#000000",
				shadow: !1
			}
		},
		dataLabels: {
			align: null,
			verticalAlign: null,
			y: null
		},
		softThreshold: !1,
		startFromThreshold: !0,
		stickyTracking: !1,
		tooltip: {
			distance: 6
		},
		threshold: 0
	});
	b = bG(aV, {
		type: "column",
		pointAttrToOptions: {
			stroke: "borderColor",
			fill: "color",
			r: "borderRadius"
		},
		cropShoulder: 0,
		directTouch: !0,
		trackerGroups: ["group", "dataLabelsGroup"],
		negStacks: !0,
		init: function() {
			aV.prototype.init.apply(this, arguments);
			var q = this,
				p = q.chart;
			p.hasRendered && aw(p.series, function(s) {
				if(s.type === q.type) {
					s.isDirty = !0
				}
			})
		},
		getColumnMetrics: function() {
			var D = this,
				C = D.options,
				B = D.xAxis,
				A = D.yAxis,
				y = B.reversed,
				x, u = {},
				t = 0;
			C.grouping === !1 ? t = 1 : aw(D.chart.series, function(E) {
				var I = E.options,
					H = E.yAxis,
					F;
				if(E.type === D.type && E.visible && A.len === H.len && A.pos === H.pos) {
					I.stacking ? (x = E.stackKey, u[x] === bn && (u[x] = t++), F = u[x]) : I.grouping !== !1 && (F = t++), E.columnIndex = F
				}
			});
			var s = bd(aW(B.transA) * (B.ordinalSlope || C.pointRange || B.closestPointRange || B.tickInterval || 1), B.len),
				q = s * C.groupPadding,
				p = (s - 2 * q) / t,
				C = bd(C.maxPointWidth || B.len, ax(C.pointWidth, p * (1 - 2 * C.pointPadding)));
			D.columnMetrics = {
				width: C,
				offset: (p - C) / 2 + (q + ((D.columnIndex || 0) + (y ? 1 : 0)) * p - s / 2) * (y ? -1 : 1)
			};
			return D.columnMetrics
		},
		crispCol: function(q, p, y, x) {
			var u = this.chart,
				t = this.borderWidth,
				s = -(t % 2 ? 0.5 : 0),
				t = t % 2 ? 0.5 : 1;
			u.inverted && u.renderer.isVML && (t += 1);
			y = Math.round(q + y) + s;
			q = Math.round(q) + s;
			y -= q;
			x = Math.round(p + x) + t;
			s = aW(p) <= 0.5 && x > 0.5;
			p = Math.round(p) + t;
			x -= p;
			s && x && (p -= 1, x += 1);
			return {
				x: q,
				y: p,
				width: y,
				height: x
			}
		},
		translate: function() {
			var D = this,
				C = D.chart,
				B = D.options,
				A = D.borderWidth = ax(B.borderWidth, D.closestPointRange * D.xAxis.transA < 2 ? 0 : 1),
				y = D.yAxis,
				x = D.translatedThreshold = y.getThreshold(B.threshold),
				u = ax(B.minPointLength, 5),
				t = D.getColumnMetrics(),
				s = t.width,
				q = D.barW = au(s, 1 + 2 * A),
				p = D.pointXOffset = t.offset;
			C.inverted && (x -= 0.5);
			B.pointPadding && (q = am(q));
			aV.prototype.translate.apply(D);
			aw(D.points, function(M) {
				var L = bd(ax(M.yBottom, x), 90000),
					H = 999 + aW(L),
					H = bd(au(-H, M.plotY), y.len + H),
					K = M.plotX + p,
					J = q,
					I = bd(H, L),
					F, E = au(H, L) - I;
				aW(E) < u && u && (E = u, F = !y.reversed && !M.negative || y.reversed && M.negative, I = aW(I - x) > u ? L - u : x - (F ? u : 0));
				M.barX = K;
				M.pointWidth = s;
				M.tooltipPos = C.inverted ? [y.len + y.pos - C.plotLeft - H, D.xAxis.len - K - J / 2, E] : [K + J / 2, H + y.pos - C.plotTop, E];
				M.shapeType = "rect";
				M.shapeArgs = D.crispCol(K, I, J, E)
			})
		},
		getSymbol: bz,
		drawLegendSymbol: a3.drawRectangle,
		drawGraph: bz,
		drawPoints: function() {
			var q = this,
				p = this.chart,
				y = q.options,
				x = p.renderer,
				u = y.animationLimit || 250,
				t, s;
			aw(q.points, function(C) {
				var B = C.graphic,
					A;
				if(a6(C.plotY) && C.y !== null) {
					t = C.shapeArgs, A = av(q.borderWidth) ? {
						"stroke-width": q.borderWidth
					} : {}, s = C.pointAttr[C.selected ? "select" : ""] || q.pointAttr[""], B ? (aj(B), B.attr(A).attr(s)[p.pointCount < u ? "animate" : "attr"](bg(t))) : C.graphic = x[C.shapeType](t).attr(A).attr(s).add(C.group || q.group).shadow(y.shadow, null, y.stacking && !y.borderRadius)
				} else {
					if(B) {
						C.graphic = B.destroy()
					}
				}
			})
		},
		animate: function(q) {
			var p = this,
				x = this.yAxis,
				u = p.options,
				t = this.chart.inverted,
				s = {};
			if(bx) {
				q ? (s.scaleY = 0.001, q = bd(x.pos + x.len, au(x.pos, x.toPixels(u.threshold))), t ? s.translateX = q - x.len : s.translateY = q, p.group.attr(s)) : (s[t ? "translateX" : "translateY"] = x.pos, p.group.animate(s, aq(aY(p.options.animation), {
					step: function(y, A) {
						p.group.attr({
							scaleY: au(0.001, A.pos)
						})
					}
				})), p.animate = null)
			}
		},
		remove: function() {
			var q = this,
				p = q.chart;
			p.hasRendered && aw(p.series, function(s) {
				if(s.type === q.type) {
					s.isDirty = !0
				}
			});
			aV.prototype.remove.apply(q, arguments)
		}
	});
	a2.column = b;
	bP.bar = bg(bP.column);
	l = bG(b, {
		type: "bar",
		inverted: !0
	});
	a2.bar = l;
	bP.scatter = bg(a5, {
		lineWidth: 0,
		marker: {
			enabled: !0
		},
		tooltip: {
			headerFormat: '<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px;"> {series.name}</span><br/>',
			pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
		}
	});
	l = bG(aV, {
		type: "scatter",
		sorted: !1,
		requireSorting: !1,
		noSharedTooltip: !0,
		trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
		takeOrdinalPosition: !1,
		kdDimensions: 2,
		drawGraph: function() {
			this.options.lineWidth && aV.prototype.drawGraph.call(this)
		}
	});
	a2.scatter = l;
	bP.pie = bg(a5, {
		borderColor: "#FFFFFF",
		borderWidth: 1,
		center: [null, null],
		clip: !1,
		colorByPoint: !0,
		dataLabels: {
			distance: 30,
			enabled: !0,
			formatter: function() {
				return this.y === null ? void 0 : this.point.name
			},
			x: 0
		},
		ignoreHiddenPoint: !0,
		legendType: "point",
		marker: null,
		size: null,
		showInLegend: !1,
		slicedOffset: 10,
		states: {
			hover: {
				brightness: 0.1,
				shadow: !1
			}
		},
		stickyTracking: !1,
		tooltip: {
			followPointer: !0
		}
	});
	a5 = {
		type: "pie",
		isCartesian: !1,
		pointClass: bG(bZ, {
			init: function() {
				bZ.prototype.init.apply(this, arguments);
				var q = this,
					p;
				q.name = ax(q.name, "Slice");
				p = function(s) {
					q.slice(s.type === "select")
				};
				a0(q, "select", p);
				a0(q, "unselect", p);
				return q
			},
			setVisible: function(q, p) {
				var x = this,
					u = x.series,
					t = u.chart,
					s = u.options.ignoreHiddenPoint,
					p = ax(p, s);
				if(q !== x.visible) {
					x.visible = x.options.visible = q = q === bn ? !x.visible : q;
					u.options.data[ah(x, u.data)] = x.options;
					aw(["graphic", "dataLabel", "connector", "shadowGroup"], function(y) {
						if(x[y]) {
							x[y][q ? "show" : "hide"](!0)
						}
					});
					x.legendItem && t.legend.colorizeItem(x, q);
					!q && x.state === "hover" && x.setState("");
					if(s) {
						u.isDirty = !0
					}
					p && t.redraw()
				}
			},
			slice: function(q, p, t) {
				var s = this.series;
				aO(t, s.chart);
				ax(p, !0);
				this.sliced = this.options.sliced = q = av(q) ? q : !this.sliced;
				s.options.data[ah(this, s.data)] = this.options;
				q = q ? this.slicedTranslation : {
					translateX: 0,
					translateY: 0
				};
				this.graphic.animate(q);
				this.shadowGroup && this.shadowGroup.animate(q)
			},
			haloPath: function(q) {
				var p = this.shapeArgs,
					s = this.series.chart;
				return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(s.plotLeft + p.x, s.plotTop + p.y, p.r + q, p.r + q, {
					innerR: this.shapeArgs.r,
					start: p.start,
					end: p.end
				})
			}
		}),
		requireSorting: !1,
		directTouch: !0,
		noSharedTooltip: !0,
		trackerGroups: ["group", "dataLabelsGroup"],
		axisTypes: [],
		pointAttrToOptions: {
			stroke: "borderColor",
			"stroke-width": "borderWidth",
			fill: "color"
		},
		animate: function(q) {
			var p = this,
				t = p.points,
				s = p.startAngleRad;
			if(!q) {
				aw(t, function(u) {
					var y = u.graphic,
						x = u.shapeArgs;
					y && (y.attr({
						r: u.startR || p.center[3] / 2,
						start: s,
						end: s
					}), y.animate({
						r: x.r,
						start: x.start,
						end: x.end
					}, p.options.animation))
				}), p.animate = null
			}
		},
		updateTotals: function() {
			var q, p = 0,
				x = this.points,
				u = x.length,
				t, s = this.options.ignoreHiddenPoint;
			for(q = 0; q < u; q++) {
				t = x[q];
				if(t.y < 0) {
					t.y = null
				}
				p += s && !t.visible ? 0 : t.y
			}
			this.total = p;
			for(q = 0; q < u; q++) {
				t = x[q], t.percentage = p > 0 && (t.visible || !s) ? t.y / p * 100 : 0, t.total = p
			}
		},
		generatePoints: function() {
			aV.prototype.generatePoints.call(this);
			this.updateTotals()
		},
		translate: function(I) {
			this.generatePoints();
			var H = 0,
				F = this.options,
				E = F.slicedOffset,
				D = E + F.borderWidth,
				C, B, A, y = F.startAngle || 0,
				x = this.startAngleRad = bo / 180 * (y - 90),
				y = (this.endAngleRad = bo / 180 * (ax(F.endAngle, y + 360) - 90)) - x,
				u = this.points,
				t = F.dataLabels.distance,
				F = F.ignoreHiddenPoint,
				s, q = u.length,
				p;
			if(!I) {
				this.center = I = this.getCenter()
			}
			this.getX = function(J, K) {
				A = aM.asin(bd((J - I[1]) / (I[2] / 2 + t), 1));
				return I[0] + (K ? -1 : 1) * aQ(A) * (I[2] / 2 + t)
			};
			for(s = 0; s < q; s++) {
				p = u[s];
				C = x + H * y;
				if(!F || p.visible) {
					H += p.percentage / 100
				}
				B = x + H * y;
				p.shapeType = "arc";
				p.shapeArgs = {
					x: I[0],
					y: I[1],
					r: I[2] / 2,
					innerR: I[3] / 2,
					start: bk(C * 1000) / 1000,
					end: bk(B * 1000) / 1000
				};
				A = (B + C) / 2;
				A > 1.5 * bo ? A -= 2 * bo : A < -bo / 2 && (A += 2 * bo);
				p.slicedTranslation = {
					translateX: bk(aQ(A) * E),
					translateY: bk(g(A) * E)
				};
				C = aQ(A) * I[2] / 2;
				B = g(A) * I[2] / 2;
				p.tooltipPos = [I[0] + C * 0.7, I[1] + B * 0.7];
				p.half = A < -bo / 2 || A > bo / 2 ? 1 : 0;
				p.angle = A;
				D = bd(D, t / 2);
				p.labelPos = [I[0] + C + aQ(A) * t, I[1] + B + g(A) * t, I[0] + C + aQ(A) * D, I[1] + B + g(A) * D, I[0] + C, I[1] + B, t < 0 ? "center" : p.half ? "right" : "left", A]
			}
		},
		drawGraph: null,
		drawPoints: function() {
			var B = this,
				A = B.chart.renderer,
				y, x, u = B.options.shadow,
				t, s, q, p;
			if(u && !B.shadowGroup) {
				B.shadowGroup = A.g("shadow").add(B.group)
			}
			aw(B.points, function(C) {
				if(C.y !== null) {
					x = C.graphic;
					q = C.shapeArgs;
					t = C.shadowGroup;
					s = C.pointAttr[C.selected ? "select" : ""];
					if(!s.stroke) {
						s.stroke = s.fill
					}
					if(u && !t) {
						t = C.shadowGroup = A.g("shadow").add(B.shadowGroup)
					}
					y = C.sliced ? C.slicedTranslation : {
						translateX: 0,
						translateY: 0
					};
					t && t.attr(y);
					if(x) {
						x.setRadialReference(B.center).attr(s).animate(aq(q, y))
					} else {
						p = {
							"stroke-linejoin": "round"
						};
						if(!C.visible) {
							p.visibility = "hidden"
						}
						C.graphic = x = A[C.shapeType](q).setRadialReference(B.center).attr(s).attr(p).attr(y).add(B.group).shadow(u, t)
					}
				}
			})
		},
		searchPoint: bz,
		sortByAngle: function(q, p) {
			q.sort(function(s, t) {
				return s.angle !== void 0 && (t.angle - s.angle) * p
			})
		},
		drawLegendSymbol: a3.drawRectangle,
		getCenter: aC.getCenter,
		getSymbol: bz
	};
	a5 = bG(aV, a5);
	a2.pie = a5;
	aV.prototype.drawDataLabels = function() {
		var E = this,
			D = E.options,
			C = D.cursor,
			B = D.dataLabels,
			A = E.points,
			y, x, u = E.hasRendered || 0,
			t, s, q = ax(B.defer, !0),
			p = E.chart.renderer;
		if(B.enabled || E._hasPointLabels) {
			E.dlProcessOptions && E.dlProcessOptions(B), s = E.plotGroup("dataLabelsGroup", "data-labels", q && !u ? "hidden" : "visible", B.zIndex || 6), q && (s.attr({
				opacity: +u
			}), u || a0(E, "afterAnimate", function() {
				E.visible && s.show(!0);
				s[D.animation ? "animate" : "attr"]({
					opacity: 1
				}, {
					duration: 200
				})
			})), x = B, aw(A, function(K) {
				var J, I = K.dataLabel,
					H, F, O = K.connector,
					L = !0,
					M, N = {};
				y = K.dlOptions || K.options && K.options.dataLabels;
				J = ax(y && y.enabled, x.enabled) && K.y !== null;
				if(I && !J) {
					K.dataLabel = I.destroy()
				} else {
					if(J) {
						B = bg(x, y);
						M = B.style;
						J = B.rotation;
						H = K.getLabelConfig();
						t = B.format ? bI(B.format, H) : B.formatter.call(H, B);
						M.color = ax(B.color, M.color, E.color, "black");
						if(I) {
							if(av(t)) {
								I.attr({
									text: t
								}), L = !1
							} else {
								if(K.dataLabel = I = I.destroy(), O) {
									K.connector = O.destroy()
								}
							}
						} else {
							if(av(t)) {
								I = {
									fill: B.backgroundColor,
									stroke: B.borderColor,
									"stroke-width": B.borderWidth,
									r: B.borderRadius || 0,
									rotation: J,
									padding: B.padding,
									zIndex: 1
								};
								if(M.color === "contrast") {
									N.color = B.inside || B.distance < 0 || D.stacking ? p.getContrast(K.color || E.color) : "#000000"
								}
								if(C) {
									N.cursor = C
								}
								for(F in I) {
									I[F] === bn && delete I[F]
								}
								I = K.dataLabel = p[J ? "text" : "label"](t, 0, -9999, B.shape, null, null, B.useHTML).attr(1).css(aq(M, N)).add(s).shadow(B.shadow)
							}
						}
						I && E.alignDataLabel(K, I, B, null, L)
					}
				}
			})
		}
	};
	aV.prototype.alignDataLabel = function(I, H, F, E, D) {
		var C = this.chart,
			B = C.inverted,
			A = ax(I.plotX, -9999),
			y = ax(I.plotY, -9999),
			x = H.getBBox(),
			u = C.renderer.fontMetrics(F.style.fontSize).b,
			t = F.rotation,
			s = F.align,
			q = this.visible && (I.series.forceDL || C.isInsidePlot(A, bk(y), B) || E && C.isInsidePlot(A, B ? E.x + 1 : E.y + E.height - 1, B)),
			p = ax(F.overflow, "justify") === "justify";
		if(q) {
			E = aq({
				x: B ? C.plotWidth - y : A,
				y: bk(B ? C.plotHeight - A : y),
				width: 0,
				height: 0
			}, E), aq(F, {
				width: x.width,
				height: x.height
			}), t ? (p = !1, B = C.renderer.rotCorr(u, t), B = {
				x: E.x + F.x + E.width / 2 + B.x,
				y: E.y + F.y + {
					top: 0,
					middle: 0.5,
					bottom: 1
				}[F.verticalAlign] * E.height
			}, H[D ? "attr" : "animate"](B).attr({
				align: s
			}), A = (t + 720) % 360, A = A > 180 && A < 360, s === "left" ? B.y -= A ? x.height : 0 : s === "center" ? (B.x -= x.width / 2, B.y -= x.height / 2) : s === "right" && (B.x -= x.width, B.y -= A ? 0 : x.height)) : (H.align(F, null, E), B = H.alignAttr), p ? this.justifyDataLabel(H, F, B, x, E, D) : ax(F.crop, !0) && (q = C.isInsidePlot(B.x, B.y) && C.isInsidePlot(B.x + x.width, B.y + x.height)), F.shape && !t && H.attr({
				anchorX: I.plotX,
				anchorY: I.plotY
			})
		}
		if(!q) {
			aj(H), H.attr({
				y: -9999
			}), H.placed = !1
		}
	};
	aV.prototype.justifyDataLabel = function(E, D, C, B, A, y) {
		var x = this.chart,
			u = D.align,
			t = D.verticalAlign,
			s, q, p = E.box ? 0 : E.padding || 0;
		s = C.x + p;
		if(s < 0) {
			u === "right" ? D.align = "left" : D.x = -s, q = !0
		}
		s = C.x + B.width - p;
		if(s > x.plotWidth) {
			u === "left" ? D.align = "right" : D.x = x.plotWidth - s, q = !0
		}
		s = C.y + p;
		if(s < 0) {
			t === "bottom" ? D.verticalAlign = "top" : D.y = -s, q = !0
		}
		s = C.y + B.height - p;
		if(s > x.plotHeight) {
			t === "top" ? D.verticalAlign = "bottom" : D.y = x.plotHeight - s, q = !0
		}
		if(q) {
			E.placed = !y, E.align(D, null, A)
		}
	};
	if(a2.pie) {
		a2.pie.prototype.drawDataLabels = function() {
			var cg = this,
				cf = cg.data,
				ce, cd = cg.chart,
				cc = cg.options.dataLabels,
				cb = ax(cc.connectorPadding, 10),
				ca = ax(cc.connectorWidth, 1),
				b9 = cd.plotWidth,
				b8 = cd.plotHeight,
				b7, b6, b5 = ax(cc.softConnector, !0),
				b4 = cc.distance,
				b3 = cg.center,
				b2 = b3[2] / 2,
				ab = b3[1],
				bb = b4 > 0,
				Y, W, X, U = [
					[],
					[]
				],
				b1, S, aa, Z, b0, V = [0, 0, 0, 0],
				C = function(u, s) {
					return s.y - u.y
				};
			if(cg.visible && (cc.enabled || cg._hasPointLabels)) {
				aV.prototype.drawDataLabels.apply(cg);
				aw(cf, function(s) {
					if(s.dataLabel && s.visible) {
						U[s.half].push(s), s.dataLabel._pos = null
					}
				});
				for(Z = 2; Z--;) {
					var T = [],
						t = [],
						R = U[Z],
						F = R.length,
						Q;
					if(F) {
						cg.sortByAngle(R, Z - 0.5);
						for(b0 = cf = 0; !cf && R[b0];) {
							cf = R[b0] && R[b0].dataLabel && (R[b0].dataLabel.getBBox().height || 21), b0++
						}
						if(b4 > 0) {
							W = bd(ab + b2 + b4, cd.plotHeight);
							for(b0 = au(0, ab - b2 - b4); b0 <= W; b0 += cf) {
								T.push(b0)
							}
							W = T.length;
							if(F > W) {
								ce = [].concat(R);
								ce.sort(C);
								for(b0 = F; b0--;) {
									ce[b0].rank = b0
								}
								for(b0 = F; b0--;) {
									R[b0].rank >= W && R.splice(b0, 1)
								}
								F = R.length
							}
							for(b0 = 0; b0 < F; b0++) {
								ce = R[b0];
								X = ce.labelPos;
								ce = 9999;
								var p, q;
								for(q = 0; q < W; q++) {
									p = aW(T[q] - X[1]), p < ce && (ce = p, Q = q)
								}
								if(Q < b0 && T[b0] !== null) {
									Q = b0
								} else {
									for(W < F - b0 + Q && T[b0] !== null && (Q = W - F + b0); T[Q] === null;) {
										Q++
									}
								}
								t.push({
									i: Q,
									y: T[Q]
								});
								T[Q] = null
							}
							t.sort(C)
						}
						for(b0 = 0; b0 < F; b0++) {
							ce = R[b0];
							X = ce.labelPos;
							Y = ce.dataLabel;
							aa = ce.visible === !1 ? "hidden" : "inherit";
							ce = X[1];
							if(b4 > 0) {
								if(W = t.pop(), Q = W.i, S = W.y, ce > S && T[Q + 1] !== null || ce < S && T[Q - 1] !== null) {
									S = bd(au(0, ce), cd.plotHeight)
								}
							} else {
								S = ce
							}
							b1 = cc.justify ? b3[0] + (Z ? -1 : 1) * (b2 + b4) : cg.getX(S === ab - b2 - b4 || S === ab + b2 + b4 ? ce : S, Z);
							Y._attr = {
								visibility: aa,
								align: X[6]
							};
							Y._pos = {
								x: b1 + cc.x + ({
									left: cb,
									right: -cb
								}[X[6]] || 0),
								y: S + cc.y - 10
							};
							Y.connX = b1;
							Y.connY = S;
							if(this.options.size === null) {
								W = Y.width, b1 - W < cb ? V[3] = au(bk(W - b1 + cb), V[3]) : b1 + W > b9 - cb && (V[1] = au(bk(b1 + W - b9 + cb), V[1])), S - cf / 2 < 0 ? V[0] = au(bk(-S + cf / 2), V[0]) : S + cf / 2 > b8 && (V[2] = au(bk(S + cf / 2 - b8), V[2]))
							}
						}
					}
				}
				if(bD(V) === 0 || this.verifyDataLabelOverflow(V)) {
					this.placeDataLabels(), bb && ca && aw(this.points, function(s) {
						b7 = s.connector;
						X = s.labelPos;
						if((Y = s.dataLabel) && Y._pos && s.visible) {
							aa = Y._attr.visibility, b1 = Y.connX, S = Y.connY, b6 = b5 ? [aP, b1 + (X[6] === "left" ? 5 : -5), S, "C", b1, S, 2 * X[2] - X[4], 2 * X[3] - X[5], X[2], X[3], aU, X[4], X[5]] : [aP, b1 + (X[6] === "left" ? 5 : -5), S, aU, X[2], X[3], aU, X[4], X[5]], b7 ? (b7.animate({
								d: b6
							}), b7.attr("visibility", aa)) : s.connector = b7 = cg.chart.renderer.path(b6).attr({
								"stroke-width": ca,
								stroke: cc.connectorColor || s.color || "#606060",
								visibility: aa
							}).add(cg.dataLabelsGroup)
						} else {
							if(b7) {
								s.connector = b7.destroy()
							}
						}
					})
				}
			}
		}, a2.pie.prototype.placeDataLabels = function() {
			aw(this.points, function(q) {
				var p = q.dataLabel;
				if(p && q.visible) {
					(q = p._pos) ? (p.attr(p._attr), p[p.moved ? "animate" : "attr"](q), p.moved = !0) : p && p.attr({
						y: -9999
					})
				}
			})
		}, a2.pie.prototype.alignDataLabel = bz, a2.pie.prototype.verifyDataLabelOverflow = function(q) {
			var p = this.center,
				y = this.options,
				x = y.center,
				u = y.minSize || 80,
				t = u,
				s;
			x[0] !== null ? t = au(p[2] - au(q[1], q[3]), u) : (t = au(p[2] - q[1] - q[3], u), p[0] += (q[3] - q[1]) / 2);
			x[1] !== null ? t = au(bd(t, p[2] - au(q[0], q[2])), u) : (t = au(bd(t, p[2] - q[0] - q[2]), u), p[1] += (q[0] - q[2]) / 2);
			t < p[2] ? (p[2] = t, p[3] = Math.min(/%$/.test(y.innerSize || 0) ? t * parseFloat(y.innerSize || 0) / 100 : parseFloat(y.innerSize || 0), t), this.translate(p), this.drawDataLabels && this.drawDataLabels()) : s = !0;
			return s
		}
	}
	if(a2.column) {
		a2.column.prototype.alignDataLabel = function(C, B, A, y, x) {
			var u = this.chart.inverted,
				t = C.series,
				s = C.dlBox || C.shapeArgs,
				q = ax(C.below, C.plotY > ax(this.translatedThreshold, t.yAxis.len)),
				p = ax(A.inside, !!this.options.stacking);
			if(s) {
				y = bg(s);
				if(y.y < 0) {
					y.height += y.y, y.y = 0
				}
				s = y.y + y.height - t.yAxis.len;
				s > 0 && (y.height -= s);
				u && (y = {
					x: t.yAxis.len - y.y - y.height,
					y: t.xAxis.len - y.x - y.width,
					width: y.height,
					height: y.width
				});
				if(!p) {
					u ? (y.x += q ? 0 : y.width, y.width = 0) : (y.y += q ? y.height : 0, y.height = 0)
				}
			}
			A.align = ax(A.align, !u || p ? "center" : q ? "right" : "left");
			A.verticalAlign = ax(A.verticalAlign, u || p ? "middle" : q ? "top" : "bottom");
			aV.prototype.alignDataLabel.call(this, C, B, A, y, x)
		}
	}(function(q) {
		var p = q.Chart,
			u = q.each,
			t = q.pick,
			s = q.addEvent;
		p.prototype.callbacks.push(function(y) {
			function x() {
				var A = [];
				u(y.series, function(C) {
					var B = C.options.dataLabels,
						D = C.dataLabelCollections || ["dataLabel"];
					(B.enabled || C._hasPointLabels) && !B.allowOverlap && C.visible && u(D, function(E) {
						u(C.points, function(F) {
							if(F[E]) {
								F[E].labelrank = t(F.labelrank, F.shapeArgs && F.shapeArgs.height), A.push(F[E])
							}
						})
					})
				});
				y.hideOverlappingLabels(A)
			}
			x();
			s(y, "redraw", x)
		});
		p.prototype.hideOverlappingLabels = function(J) {
			var I = J.length,
				H, F, E, D, C, B, A, y, x;
			for(F = 0; F < I; F++) {
				if(H = J[F]) {
					H.oldOpacity = H.opacity, H.newOpacity = 1
				}
			}
			J.sort(function(L, K) {
				return(K.labelrank || 0) - (L.labelrank || 0)
			});
			for(F = 0; F < I; F++) {
				E = J[F];
				for(H = F + 1; H < I; ++H) {
					if(D = J[H], E && D && E.placed && D.placed && E.newOpacity !== 0 && D.newOpacity !== 0 && (C = E.alignAttr, B = D.alignAttr, A = E.parentGroup, y = D.parentGroup, x = 2 * (E.box ? 0 : E.padding), C = !(B.x + y.translateX > C.x + A.translateX + (E.width - x) || B.x + y.translateX + (D.width - x) < C.x + A.translateX || B.y + y.translateY > C.y + A.translateY + (E.height - x) || B.y + y.translateY + (D.height - x) < C.y + A.translateY))) {
						(E.labelrank < D.labelrank ? E : D).newOpacity = 0
					}
				}
			}
			u(J, function(L) {
				var K, M;
				if(L) {
					M = L.newOpacity;
					if(L.oldOpacity !== M && L.placed) {
						M ? L.show(!0) : K = function() {
							L.hide()
						}, L.alignAttr.opacity = M, L[L.isOld ? "animate" : "attr"](L.alignAttr, null, K)
					}
					L.isOld = !0
				}
			})
		}
	})(at);
	a5 = at.TrackerMixin = {
		drawTrackerPoint: function() {
			var q = this,
				p = q.chart,
				x = p.pointer,
				u = q.options.cursor,
				t = u && {
					cursor: u
				},
				s = function(y) {
					for(var B = y.target, A; B && !A;) {
						A = B.point, B = B.parentNode
					}
					if(A !== bn && A !== p.hoverPoint) {
						A.onMouseOver(y)
					}
				};
			aw(q.points, function(y) {
				if(y.graphic) {
					y.graphic.element.point = y
				}
				if(y.dataLabel) {
					y.dataLabel.element.point = y
				}
			});
			if(!q._hasTracking) {
				aw(q.trackerGroups, function(y) {
					if(q[y] && (q[y].addClass("highcharts-tracker").on("mouseover", s).on("mouseout", function(A) {
							x.onTrackerMouseOut(A)
						}).css(t), bO)) {
						q[y].on("touchstart", s)
					}
				}), q._hasTracking = !0
			}
		},
		drawTrackerGraph: function() {
			var H = this,
				F = H.options,
				E = F.trackByArea,
				D = [].concat(E ? H.areaPath : H.graphPath),
				C = D.length,
				B = H.chart,
				A = B.pointer,
				y = B.renderer,
				x = B.options.tooltip.snap,
				u = H.tracker,
				t = F.cursor,
				s = t && {
					cursor: t
				},
				q = function() {
					if(B.hoverSeries !== H) {
						H.onMouseOver()
					}
				},
				p = "rgba(192,192,192," + (bx ? 0.0001 : 0.002) + ")";
			if(C && !E) {
				for(t = C + 1; t--;) {
					D[t] === aP && D.splice(t + 1, 0, D[t + 1] - x, D[t + 2], aU), (t && D[t] === aP || t === C) && D.splice(t, 0, aU, D[t - 2] + x, D[t - 1])
				}
			}
			u ? u.attr({
				d: D
			}) : (H.tracker = y.path(D).attr({
				"stroke-linejoin": "round",
				visibility: H.visible ? "visible" : "hidden",
				stroke: p,
				fill: E ? p : "none",
				"stroke-width": F.lineWidth + (E ? 0 : 2 * x),
				zIndex: 2
			}).add(H.group), aw([H.tracker, H.markerGroup], function(I) {
				I.addClass("highcharts-tracker").on("mouseover", q).on("mouseout", function(J) {
					A.onTrackerMouseOut(J)
				}).css(s);
				if(bO) {
					I.on("touchstart", q)
				}
			}))
		}
	};
	if(a2.column) {
		b.prototype.drawTracker = a5.drawTrackerPoint
	}
	if(a2.pie) {
		a2.pie.prototype.drawTracker = a5.drawTrackerPoint
	}
	if(a2.scatter) {
		l.prototype.drawTracker = a5.drawTrackerPoint
	}
	aq(bW.prototype, {
		setItemEvents: function(q, p, x, u, t) {
			var s = this;
			(x ? p : q.legendGroup).on("mouseover", function() {
				q.setState("hover");
				p.css(s.options.itemHoverStyle)
			}).on("mouseout", function() {
				p.css(q.visible ? u : t);
				q.setState()
			}).on("click", function(y) {
				var A = function() {
						q.setVisible && q.setVisible()
					},
					y = {
						browserEvent: y
					};
				q.firePointEvent ? q.firePointEvent("legendItemClick", y, A) : a8(q, "legendItemClick", y, A)
			})
		},
		createCheckboxForItem: function(p) {
			p.checkbox = G("input", {
				type: "checkbox",
				checked: p.selected,
				defaultChecked: p.selected
			}, this.options.itemCheckboxStyle, this.chart.container);
			a0(p.checkbox, "click", function(q) {
				a8(p.series || p, "checkboxClick", {
					checked: q.target.checked,
					item: p
				}, function() {
					p.select()
				})
			})
		}
	});
	aS.legend.itemStyle.cursor = "pointer";
	aq(aA.prototype, {
		showResetZoom: function() {
			var q = this,
				p = aS.lang,
				x = q.options.chart.resetZoomButton,
				u = x.theme,
				t = u.states,
				s = x.relativeTo === "chart" ? null : "plotBox";
			this.resetZoomButton = q.renderer.button(p.resetZoom, null, null, function() {
				q.zoomOut()
			}, u, t && t.hover).attr({
				align: x.position.align,
				title: p.resetZoomTitle
			}).add().align(x.position, !1, s)
		},
		zoomOut: function() {
			var p = this;
			a8(p, "selection", {
				resetSelection: !0
			}, function() {
				p.zoom()
			})
		},
		zoom: function(q) {
			var p, u = this.pointer,
				t = !1,
				s;
			!q || q.resetSelection ? aw(this.axes, function(x) {
				p = x.zoom()
			}) : aw(q.xAxis.concat(q.yAxis), function(x) {
				var A = x.axis,
					y = A.isXAxis;
				if(u[y ? "zoomX" : "zoomY"] || u[y ? "pinchX" : "pinchY"]) {
					p = A.zoom(x.min, x.max), A.displayBtn && (t = !0)
				}
			});
			s = this.resetZoomButton;
			if(t && !s) {
				this.showResetZoom()
			} else {
				if(!t && bE(s)) {
					this.resetZoomButton = s.destroy()
				}
			}
			p && this.redraw(ax(this.options.chart.animation, q && q.animation, this.pointCount < 100))
		},
		pan: function(q, p) {
			var u = this,
				t = u.hoverPoints,
				s;
			t && aw(t, function(x) {
				x.setState()
			});
			aw(p === "xy" ? [1, 0] : [1], function(x) {
				var x = u[x ? "xAxis" : "yAxis"][0],
					E = x.horiz,
					D = q[E ? "chartX" : "chartY"],
					E = E ? "mouseDownX" : "mouseDownY",
					C = u[E],
					B = (x.pointRange || 0) / 2,
					A = x.getExtremes(),
					y = x.toValue(C - D, !0) + B,
					B = x.toValue(C + x.len - D, !0) - B,
					C = C > D;
				if(x.series.length && (C || y > bd(A.dataMin, A.min)) && (!C || B < au(A.dataMax, A.max))) {
					x.setExtremes(y, B, !1, !1, {
						trigger: "pan"
					}), s = !0
				}
				u[E] = D
			});
			s && u.redraw(!1);
			a1(u.container, {
				cursor: "move"
			})
		}
	});
	aq(bZ.prototype, {
		select: function(q, p) {
			var u = this,
				t = u.series,
				s = t.chart,
				q = ax(q, !u.selected);
			u.firePointEvent(q ? "select" : "unselect", {
				accumulate: p
			}, function() {
				u.selected = u.options.selected = q;
				t.options.data[ah(u, t.data)] = u.options;
				u.setState(q && "select");
				p || aw(s.getSelectedPoints(), function(x) {
					if(x.selected && x !== u) {
						x.selected = x.options.selected = !1, t.options.data[ah(x, t.data)] = x.options, x.setState(""), x.firePointEvent("unselect")
					}
				})
			})
		},
		onMouseOver: function(q, p) {
			var x = this.series,
				u = x.chart,
				t = u.tooltip,
				s = u.hoverPoint;
			if(u.hoverSeries !== x) {
				x.onMouseOver()
			}
			if(s && s !== this) {
				s.onMouseOut()
			}
			if(this.series && (this.firePointEvent("mouseOver"), t && (!t.shared || x.noSharedTooltip) && t.refresh(this, q), this.setState("hover"), !p)) {
				u.hoverPoint = this
			}
		},
		onMouseOut: function() {
			var q = this.series.chart,
				p = q.hoverPoints;
			this.firePointEvent("mouseOut");
			if(!p || ah(this, p) === -1) {
				this.setState(), q.hoverPoint = null
			}
		},
		importEvents: function() {
			if(!this.hasImportedEvents) {
				var q = bg(this.series.options.point, this.options).events,
					p;
				this.events = q;
				for(p in q) {
					a0(this, p, q[p])
				}
				this.hasImportedEvents = !0
			}
		},
		setState: function(I, H) {
			var F = aR(this.plotX),
				E = this.plotY,
				D = this.series,
				C = D.options.states,
				B = bP[D.type].marker && D.options.marker,
				A = B && !B.enabled,
				y = B && B.states[I],
				x = y && y.enabled === !1,
				u = D.stateMarkerGraphic,
				t = this.marker || {},
				s = D.chart,
				q = D.halo,
				p, I = I || "";
			p = this.pointAttr[I] || D.pointAttr[I];
			if(!(I === this.state && !H || this.selected && I !== "select" || C[I] && C[I].enabled === !1 || I && (x || A && y.enabled === !1) || I && t.states && t.states[I] && t.states[I].enabled === !1)) {
				if(this.graphic) {
					B = B && this.graphic.symbolName && p.r, this.graphic.attr(bg(p, B ? {
						x: F - B,
						y: E - B,
						width: 2 * B,
						height: 2 * B
					} : {})), u && u.hide()
				} else {
					if(I && y) {
						if(B = y.radius, t = t.symbol || D.symbol, u && u.currentSymbol !== t && (u = u.destroy()), u) {
							u[H ? "animate" : "attr"]({
								x: F - B,
								y: E - B
							})
						} else {
							if(t) {
								D.stateMarkerGraphic = u = s.renderer.symbol(t, F - B, E - B, 2 * B, 2 * B).attr(p).add(D.markerGroup), u.currentSymbol = t
							}
						}
					}
					if(u) {
						u[I && s.isInsidePlot(F, E, s.inverted) ? "show" : "hide"](), u.element.point = this
					}
				}
				if((F = C[I] && C[I].halo) && F.size) {
					if(!q) {
						D.halo = q = s.renderer.path().add(s.seriesGroup)
					}
					q.attr(aq({
						fill: this.color || D.color,
						"fill-opacity": F.opacity,
						zIndex: -1
					}, F.attributes))[H ? "animate" : "attr"]({
						d: this.haloPath(F.size)
					})
				} else {
					q && q.attr({
						d: []
					})
				}
				this.state = I
			}
		},
		haloPath: function(q) {
			var p = this.series,
				x = p.chart,
				u = p.getPlotBox(),
				t = x.inverted,
				s = Math.floor(this.plotX);
			return x.renderer.symbols.circle(u.translateX + (t ? p.yAxis.len - this.plotY : s) - q, u.translateY + (t ? p.xAxis.len - s : this.plotY) - q, q * 2, q * 2)
		}
	});
	aq(aV.prototype, {
		onMouseOver: function() {
			var q = this.chart,
				p = q.hoverSeries;
			if(p && p !== this) {
				p.onMouseOut()
			}
			this.options.events.mouseOver && a8(this, "mouseOver");
			this.setState("hover");
			q.hoverSeries = this
		},
		onMouseOut: function() {
			var q = this.options,
				p = this.chart,
				t = p.tooltip,
				s = p.hoverPoint;
			p.hoverSeries = null;
			if(s) {
				s.onMouseOut()
			}
			this && q.events.mouseOut && a8(this, "mouseOut");
			t && !q.stickyTracking && (!t.shared || this.noSharedTooltip) && t.hide();
			this.setState()
		},
		setState: function(q) {
			var p = this.options,
				u = this.graph,
				t = p.states,
				s = p.lineWidth,
				p = 0,
				q = q || "";
			if(this.state !== q && (this.state = q, !(t[q] && t[q].enabled === !1) && (q && (s = t[q].lineWidth || s + (t[q].lineWidthPlus || 0)), u && !u.dashstyle))) {
				q = {
					"stroke-width": s
				};
				for(u.attr(q); this["zoneGraph" + p];) {
					this["zoneGraph" + p].attr(q), p += 1
				}
			}
		},
		setVisible: function(q, p) {
			var A = this,
				y = A.chart,
				x = A.legendItem,
				u, t = y.options.chart.ignoreHiddenSeries,
				s = A.visible;
			u = (A.visible = q = A.userOptions.visible = q === bn ? !s : q) ? "show" : "hide";
			aw(["group", "dataLabelsGroup", "markerGroup", "tracker"], function(B) {
				if(A[B]) {
					A[B][u]()
				}
			});
			if(y.hoverSeries === A || (y.hoverPoint && y.hoverPoint.series) === A) {
				A.onMouseOut()
			}
			x && y.legend.colorizeItem(A, q);
			A.isDirty = !0;
			A.options.stacking && aw(y.series, function(B) {
				if(B.options.stacking && B.visible) {
					B.isDirty = !0
				}
			});
			aw(A.linkedSeries, function(B) {
				B.setVisible(q, !1)
			});
			if(t) {
				y.isDirtyBox = !0
			}
			p !== !1 && y.redraw();
			a8(A, u)
		},
		show: function() {
			this.setVisible(!0)
		},
		hide: function() {
			this.setVisible(!1)
		},
		select: function(p) {
			this.selected = p = p === bn ? !this.selected : p;
			if(this.checkbox) {
				this.checkbox.checked = p
			}
			a8(this, p ? "select" : "unselect")
		},
		drawTracker: a5.drawTrackerGraph
	});
	aq(at, {
		Color: bf,
		Point: bZ,
		Tick: w,
		Renderer: f,
		SVGElement: aZ,
		SVGRenderer: af,
		arrayMin: bq,
		arrayMax: bD,
		charts: aT,
		correctFloat: bv,
		dateFormat: d,
		error: az,
		format: bI,
		pathAnim: void 0,
		getOptions: function() {
			return aS
		},
		hasBidiBug: r,
		isTouchDevice: bH,
		setOptions: function(p) {
			aS = bg(!0, aS, p);
			bU();
			return aS
		},
		addEvent: a0,
		removeEvent: aN,
		createElement: G,
		discardElement: bt,
		css: a1,
		each: aw,
		map: aD,
		merge: bg,
		splat: aK,
		stableSort: ac,
		extendClass: bG,
		pInt: bl,
		svg: bx,
		canvas: bT,
		vml: !bx && !bT,
		product: "Highcharts",
		version: "4.2.6"
	});
	return at
});